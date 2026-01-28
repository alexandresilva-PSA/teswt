import { AppState } from './types';

// This function reconstructs a simplified version of the original HTML for export/download.
// It's a "best effort" to create a standalone HTML file from the React state.
export const generateHtmlExport = (state: AppState, readOnly: boolean): string => {
  const sectionsHtml = state.sections.map((section, index) => {
    const blocksHtml = section.blocks.map(block => {
      if (block.type === 'paragraph') {
        return `<p>${block.content}</p>`;
      }
      if (block.type === 'h3') {
        return `<h3>${block.content}</h3>`;
      }
      if (block.type === 'tip') {
        return `
          <div class="dica">
             <span class="material-icons-round">info</span>
             <p>${block.content}</p>
          </div>
        `;
      }
      if (block.type === 'list') {
          return `
            <ul class="lista-dicas">
                ${block.listItems?.map(item => `<li>${item}</li>`).join('')}
            </ul>
          `;
      }
      if (block.type === 'image' && block.imageState) {
        // Generating the marker HTML
        const markersHtml = block.imageState.markers.map(marker => `
            <div class="marker" style="left: ${marker.x}%; top: ${marker.y}%; width: ${marker.width}px; height: ${marker.height}px;"></div>
        `).join('');

        return `
          <div class="img-container">
            <div class="img-wrapper">
                <div class="img-viewport" style="transform: translate(${block.imageState.pan.x}px, ${block.imageState.pan.y}px) scale(${block.imageState.zoom})">
                    <img src="${block.imageState.src}" class="img-screenshot">
                    ${markersHtml}
                </div>
            </div>
            <p class="img-caption">${block.imageState.caption}</p>
          </div>
        `;
      }
      return '';
    }).join('');

    return `
      <section class="secao" id="${section.id}">
        <div class="secao-header">
            <span class="secao-numero">${index + 1}</span>
            <h2>${section.title}</h2>
        </div>
        <div class="secao-conteudo">
            ${blocksHtml}
        </div>
      </section>
    `;
  }).join('');

  const navLinks = state.sections.map((sec, i) => `
    <a href="#${sec.id}"><span style="font-weight:700; color:#14B8A6">${i + 1}.</span> ${sec.title}</a>
  `).join('');

  const styles = `
    :root { --teal-500: #14B8A6; --teal-600: #0D9488; --gray-100: #F3F4F6; --gray-800: #1F2937; --red-500: #EF4444; }
    body { font-family: 'Work Sans', sans-serif; background-color: var(--gray-100); color: #374151; margin: 0; display: flex; flex-direction: column; height: 100vh; overflow: hidden; }
    .header { background: #111827; height: 72px; padding: 0 1.5rem; display: flex; align-items: center; justify-content: space-between; flex-shrink: 0; color: white; }
    .layout { display: flex; flex: 1; overflow: hidden; }
    .sidebar { width: 280px; background: white; border-right: 1px solid #E5E7EB; overflow-y: auto; padding: 1rem; }
    .main-content { flex: 1; overflow-y: auto; padding: 2rem; background: #F9FAFB; }
    .content-wrapper { max-width: 900px; margin: 0 auto; }
    .secao { background: white; border-radius: 16px; margin-bottom: 2rem; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05); }
    .secao-header { padding: 1.5rem 2rem; border-bottom: 1px solid #F3F4F6; display: flex; align-items: center; gap: 1rem; }
    .secao-numero { width: 40px; height: 40px; background: rgba(20, 184, 166, 0.1); color: var(--teal-500); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-weight: 700; }
    .secao-header h2 { font-size: 1.5rem; font-weight: 700; color: var(--gray-800); margin: 0; }
    .secao-conteudo { padding: 2rem; }
    .secao-conteudo p { margin-bottom: 1rem; line-height: 1.7; }
    .secao-conteudo h3 { font-size: 1.125rem; font-weight: 600; color: var(--gray-800); margin: 2rem 0 0.75rem 0; }
    .dica { background: #ECFDF5; border-left: 4px solid var(--teal-500); padding: 1rem; border-radius: 0 8px 8px 0; display: flex; gap: 0.75rem; margin: 1.5rem 0; }
    .img-container { margin: 1.5rem 0; text-align: center; }
    .img-wrapper { border: 1px solid #E5E7EB; border-radius: 12px; overflow: hidden; background: #F3F4F6; position: relative; }
    .img-viewport { width: 100%; transform-origin: 0 0; position: relative; }
    .img-screenshot { width: 100%; display: block; }
    .img-caption { margin-top: 0.75rem; color: #6B7280; font-style: italic; font-size: 0.875rem; }
    .marker { position: absolute; border: 3px solid var(--red-500); border-radius: 50%; box-shadow: 0 0 0 2px rgba(255,255,255,0.4); }
    .lista-dicas { list-style: none; padding: 0; }
    .lista-dicas li { padding: 0.75rem 0 0.75rem 2rem; position: relative; border-bottom: 1px solid #F3F4F6; }
    .lista-dicas li::before { content: "✓"; position: absolute; left: 0; color: var(--teal-500); font-weight: 700; }
    .sidebar-nav a { display: block; padding: 0.75rem; text-decoration: none; color: #4B5563; font-size: 0.875rem; border-left: 3px solid transparent; }
    .sidebar-nav a:hover { background: #F9FAFB; color: var(--teal-600); }
    @media print { .header, .sidebar { display: none; } .main-content { padding: 0; } }
  `;

  return `
<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Manual do Usuário — Consulta de XMLs ${state.version}</title>
    <link href="https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet">
    <style>${styles}</style>
</head>
<body>
    <header class="header">
        <div style="display:flex; align-items:center; gap:1rem;">
            <img src="imagens/logo_psa_branca.png" alt="PSA" style="height:48px;">
            <span style="font-size:1rem;">Manual do Usuário — Consulta de XMLs</span>
        </div>
        <span style="background:rgba(20,184,166,0.15); color:var(--teal-500); padding:0.25rem 0.75rem; border-radius:20px; font-weight:600; border:1px solid rgba(20,184,166,0.3);">${state.version}</span>
    </header>
    <div class="layout">
        <aside class="sidebar">
            <h2 style="font-size:0.75rem; text-transform:uppercase; color:#9CA3AF; letter-spacing:0.1em; font-weight:700; margin-bottom:1rem;">Sumário</h2>
            <nav class="sidebar-nav">
                ${navLinks}
            </nav>
        </aside>
        <main class="main-content">
            <div class="content-wrapper">
                ${sectionsHtml}
            </div>
        </main>
    </div>
</body>
</html>
  `;
};