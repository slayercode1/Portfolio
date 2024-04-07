import '../assets/style/codeEditor.css';


interface CodeEditorProps {
  code: string;
}

export const CodeEditor: React.FC<CodeEditorProps> = ({ code }) => {
  // Fonction pour formater le code avec la coloration syntaxique
  const formatCode = (code: string) => {
    // Définir les mots-clés
    const keywords = [
      'interface', 'const', 'let', 'var', 'import', 'export', 'return', 'from', 'default'
    ];

    // Ajouter des styles aux mots-clés
    keywords.forEach(keyword => {
      code = code.replace(new RegExp(`\\b${keyword}\\b`, 'g'), `<span class="keyword">${keyword}</span>`);
    });

    // Ajouter des styles aux commentaires
    code = code.replace(/\/\/(.*)/g, '<span class="comment">//$1</span>');

    
    // Ajouter des styles aux crochets
    code = code.replace(/(\{|\})/g, '<span class="bracket">$1</span>');

    // Ajouter des styles aux clés
    code = code.replace(/(\b\w+\b)(?=\s*?:)/g, '<span class="key">$1</span>');
    return code;
  };

  // Split the code into lines and remove empty lines
  const lines = code.split('\n').filter(line => line.trim() !== '');
  return (

    <div className="code-content text-xs md:text-sm">
      {lines.map((line, index) => (
        <div key={index} className="code-line">
          <div className="line-numbers">
            <div className="line-number text-gray-300">{index + 1}</div>
          </div>
          <div className="line-content" dangerouslySetInnerHTML={{ __html: formatCode(line) }} />
        </div>
      ))}
    </div>
  );
};


