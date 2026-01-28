import React, { useState, useEffect } from 'react';
import { 
  Menu, Save, Eye, Trash2, Info, Plus, ChevronDown, ChevronRight, Check
} from 'lucide-react';
import { AppState, Section, ContentBlock } from './types';
import { INITIAL_STATE } from './constants';
import { ImageViewer } from './components/ImageViewer';
import { ContentEditable } from './components/ContentEditable';
import { generateHtmlExport } from './utils';

export default function App() {
  const [state, setState] = useState<AppState>(INITIAL_STATE);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const [navGroupOpen, setNavGroupOpen] = useState(true);
  const [readOnly, setReadOnly] = useState(false);

  // --- Actions ---

  const handleExport = () => {
    const html = generateHtmlExport(state, true);
    const blob = new Blob([html], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Manual_Leitura.html';
    a.click();
  };

  const handleSaveDev = () => {
      const html = generateHtmlExport(state, false);
      const blob = new Blob([html], { type: 'text/html' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = 'Manual_Editavel.html';
      a.click();
  }

  const deleteSection = (id: string) => {
    if (window.confirm('Excluir esta seção?')) {
      setState(prev => ({
        ...prev,
        sections: prev.sections.filter(s => s.id !== id)
      }));
    }
  };

  const addSection = () => {
    const newSection: Section = {
      id: `sec-new-${Date.now()}`,
      title: 'Nova Seção',
      blocks: [
        { 
            id: `b-new-${Date.now()}-1`, 
            type: 'paragraph', 
            content: 'Descreva o passo aqui...' 
        },
        { 
            id: `b-new-${Date.now()}-2`, 
            type: 'image', 
            imageState: {
                src: 'https://picsum.photos/800/400',
                caption: 'Legenda da imagem',
                zoom: 1,
                pan: { x: 0, y: 0 },
                markers: []
            }
        }
      ]
    };
    setState(prev => ({
      ...prev,
      sections: [...prev.sections, newSection]
    }));
    
    // Slight delay to allow render then scroll
    setTimeout(() => {
        document.getElementById(newSection.id)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const updateSectionTitle = (id: string, newTitle: string) => {
    setState(prev => ({
      ...prev,
      sections: prev.sections.map(s => s.id === id ? { ...s, title: newTitle } : s)
    }));
  };

  const updateBlock = (sectionId: string, blockId: string, updates: Partial<ContentBlock>) => {
    setState(prev => ({
      ...prev,
      sections: prev.sections.map(s => {
        if (s.id !== sectionId) return s;
        return {
          ...s,
          blocks: s.blocks.map(b => b.id === blockId ? { ...b, ...updates } : b)
        };
      })
    }));
  };

  const updateBlockImageState = (sectionId: string, blockId: string, newImageState: any) => {
      setState(prev => ({
        ...prev,
        sections: prev.sections.map(s => {
          if (s.id !== sectionId) return s;
          return {
            ...s,
            blocks: s.blocks.map(b => b.id === blockId ? { ...b, imageState: newImageState } : b)
          };
        })
      }));
  };

  // --- Rendering Helpers ---

  const renderBlock = (sectionId: string, block: ContentBlock) => {
    switch (block.type) {
      case 'paragraph':
        return (
          <ContentEditable
            key={block.id}
            html={block.content || ''}
            tagName="p"
            className="mb-4 text-gray-600 leading-relaxed"
            onChange={(val) => updateBlock(sectionId, block.id, { content: val })}
            disabled={readOnly}
          />
        );
      case 'h3':
        return (
          <ContentEditable
            key={block.id}
            html={block.content || ''}
            tagName="h3"
            className="text-lg font-semibold text-gray-800 mt-8 mb-3 first:mt-0"
            onChange={(val) => updateBlock(sectionId, block.id, { content: val })}
            disabled={readOnly}
          />
        );
      case 'tip':
        return (
            <div key={block.id} className="bg-emerald-50 border-l-4 border-teal-500 p-4 rounded-r-lg flex gap-3 my-6 items-start">
                <Info className="text-teal-500 shrink-0 mt-1" size={20} />
                <ContentEditable
                    html={block.content || ''}
                    tagName="div"
                    className="text-sm text-teal-800"
                    onChange={(val) => updateBlock(sectionId, block.id, { content: val })}
                    disabled={readOnly}
                />
            </div>
        );
      case 'list':
          return (
              <ul key={block.id} className="list-none p-0">
                  {block.listItems?.map((item, idx) => (
                      <li key={idx} className="relative py-3 pl-8 border-b border-gray-100 text-gray-600">
                          <Check className="absolute left-0 top-3.5 text-teal-500 font-bold" size={16} />
                          <ContentEditable
                            html={item}
                            tagName="span"
                            onChange={(val) => {
                                const newItems = [...(block.listItems || [])];
                                newItems[idx] = val;
                                updateBlock(sectionId, block.id, { listItems: newItems });
                            }}
                            disabled={readOnly}
                          />
                      </li>
                  ))}
              </ul>
          )
      case 'image':
        if (!block.imageState) return null;
        return (
          <ImageViewer
            key={block.id}
            data={block.imageState}
            onChange={(newState) => updateBlockImageState(sectionId, block.id, newState)}
            readOnly={readOnly}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-gray-100 font-sans text-base">
      
      {/* Header */}
      <header className="h-[72px] bg-gray-900 px-6 flex items-center justify-between shrink-0 shadow-md z-50">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className="text-gray-400 hover:text-white hover:bg-white/10 p-2 rounded transition-colors"
          >
            <Menu size={24} />
          </button>
          <img src="imagens/logo_psa_branca.png" alt="PSA Consultores" className="h-10 w-auto" />
          <div className="w-px h-7 bg-gray-600 hidden md:block" />
          <span className="text-gray-200 text-base hidden md:block">Manual do Usuário — Consulta de XMLs</span>
        </div>
        
        <div className="flex items-center gap-4">
          <div className="bg-teal-500/15 border border-teal-500/30 text-teal-500 px-3 py-1 rounded-full text-xs font-semibold">
             <ContentEditable 
                html={state.version} 
                tagName="span" 
                onChange={(val) => setState(s => ({...s, version: val}))} 
                disabled={readOnly}
             />
          </div>
          
          <div className="flex gap-2">
            {!readOnly && (
                <>
                <button 
                    onClick={handleSaveDev}
                    className="flex items-center gap-2 px-4 py-2 bg-teal-500 hover:bg-teal-600 text-white rounded-lg text-[13px] font-medium transition-colors"
                >
                    <Save size={16} />
                    <span className="hidden sm:inline">Salvar HTML</span>
                </button>
                <button 
                    onClick={handleExport}
                    className="flex items-center gap-2 px-4 py-2 bg-lime-500 hover:bg-lime-600 text-white rounded-lg text-[13px] font-medium transition-colors"
                >
                    <Eye size={16} />
                    <span className="hidden sm:inline">Exportar Leitura</span>
                </button>
                </>
            )}
            {readOnly && (
                <button 
                    onClick={() => setReadOnly(false)}
                    className="flex items-center gap-2 px-4 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg text-[13px] font-medium transition-colors"
                >
                    <span className="hidden sm:inline">Voltar para Edição</span>
                </button>
            )}
          </div>
        </div>
      </header>

      {/* Layout */}
      <div className="flex flex-1 overflow-hidden relative">
        
        {/* Sidebar */}
        <aside 
            className={`
                bg-white border-r border-gray-200 flex flex-col w-[280px] shrink-0 z-40
                transition-all duration-300 ease-in-out absolute md:relative h-full
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full md:-ml-[280px] md:translate-x-0'}
            `}
        >
          <div className="p-6 border-b border-gray-100">
            <h2 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">Sumário</h2>
          </div>
          
          <div className="p-4 overflow-y-auto custom-scrollbar flex-1">
            <div className={`border border-gray-200 rounded-lg overflow-hidden mb-4 ${!navGroupOpen ? 'pb-0' : ''}`}>
                <div 
                    onClick={() => setNavGroupOpen(!navGroupOpen)}
                    className="bg-gray-50 p-3 cursor-pointer flex items-center justify-between text-sm font-semibold text-gray-800 hover:bg-gray-100 transition-colors"
                >
                    <span>Consulta de XMLs</span>
                    {navGroupOpen ? <ChevronDown size={18} className="text-gray-500" /> : <ChevronRight size={18} className="text-gray-500" />}
                </div>
                
                {navGroupOpen && (
                    <div className="border-t border-gray-200">
                        {state.sections.map((sec, idx) => (
                            <a 
                                key={sec.id}
                                href={`#${sec.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    document.getElementById(sec.id)?.scrollIntoView({ behavior: 'smooth' });
                                    if(window.innerWidth < 768) setIsSidebarOpen(false);
                                }}
                                className="block p-3 pl-4 text-[13px] font-medium text-gray-600 hover:bg-gray-50 hover:text-teal-700 border-l-[3px] border-transparent hover:border-teal-500 transition-all leading-snug"
                            >
                                <span className="text-teal-500 font-bold mr-2">{idx + 1}.</span>
                                {sec.title}
                            </a>
                        ))}
                    </div>
                )}
            </div>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-y-auto bg-gray-50 p-6 md:p-12 scroll-smooth" id="main-scroll">
            <div className="max-w-[900px] mx-auto pb-24">
                
                {state.sections.map((section, index) => (
                    <section 
                        key={section.id} 
                        id={section.id}
                        className="bg-white rounded-2xl shadow-sm mb-8 overflow-hidden scroll-mt-24 border border-gray-100/50"
                    >
                        <div className="flex items-center gap-4 p-6 md:px-8 border-b border-gray-100">
                            <div className="w-10 h-10 rounded-full bg-teal-500/10 text-teal-600 flex items-center justify-center font-bold text-lg shrink-0">
                                {index + 1}
                            </div>
                            <ContentEditable
                                html={section.title}
                                tagName="h2"
                                className="text-2xl font-bold text-gray-800 flex-1"
                                onChange={(val) => updateSectionTitle(section.id, val)}
                                disabled={readOnly}
                            />
                            {!readOnly && (
                                <button 
                                    onClick={() => deleteSection(section.id)}
                                    className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
                                >
                                    <Trash2 size={20} />
                                </button>
                            )}
                        </div>
                        
                        <div className="p-8">
                            {section.blocks.map(block => renderBlock(section.id, block))}
                        </div>
                    </section>
                ))}

            </div>
        </main>

        {/* FAB Add Section */}
        {!readOnly && (
            <button
                onClick={addSection}
                className="fixed bottom-8 right-8 w-14 h-14 bg-teal-500 hover:bg-teal-600 text-white rounded-full shadow-[0_6px_20px_rgba(20,184,166,0.4)] flex items-center justify-center z-50 transition-transform hover:scale-110 active:scale-95"
            >
                <Plus size={32} />
            </button>
        )}
      </div>
    </div>
  );
}