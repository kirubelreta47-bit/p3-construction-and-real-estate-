const fs = require('fs');

function cleanSvgForReact(svgPath, primaryColor = '#d4af37') {
  let svg = fs.readFileSync(svgPath, 'utf8');

  // Replace default Storyset blue (#407BFF) with the luxury gold (#d4af37)
  svg = svg.replace(/#407BFF/gi, primaryColor);

  // Convert SVG attributes to React camelCase
  const attrReplacements = [
    [/stop-color=/g, 'stopColor='],
    [/stop-opacity=/g, 'stopOpacity='],
    [/stroke-width=/g, 'strokeWidth='],
    [/stroke-linecap=/g, 'strokeLinecap='],
    [/stroke-linejoin=/g, 'strokeLinejoin='],
    [/stroke-miterlimit=/g, 'strokeMiterlimit='],
    [/stroke-dasharray=/g, 'strokeDasharray='],
    [/stroke-dashoffset=/g, 'strokeDashoffset='],
    [/stroke-opacity=/g, 'strokeOpacity='],
    [/fill-opacity=/g, 'fillOpacity='],
    [/fill-rule=/g, 'fillRule='],
    [/clip-rule=/g, 'clipRule='],
    [/clip-path=/g, 'clipPath='],
    [/font-family=/g, 'fontFamily='],
    [/font-size=/g, 'fontSize='],
    [/font-weight=/g, 'fontWeight=']
  ];

  for (const [regex, replacement] of attrReplacements) {
    svg = svg.replace(regex, replacement);
  }

  // Convert inline style strings (e.g. style="fill:#ebebeb") to React style objects or clean attributes
  svg = svg.replace(/style="([^"]*)"/g, (match, styleStr) => {
    const rules = styleStr.split(';').filter(Boolean);
    const obj = {};
    for (const rule of rules) {
      const [key, val] = rule.split(':').map(s => s && s.trim());
      if (key && val) {
        // camelCase CSS properties
        const camelKey = key.replace(/-([a-z])/g, (_, g) => g.toUpperCase());
        obj[camelKey] = isNaN(val) ? val : Number(val);
      }
    }
    return `style={${JSON.stringify(obj)}}`;
  });

  // Extract inner elements
  const innerMatch = svg.match(/<svg[^>]*>([\s\S]*?)<\/svg>/i);
  return innerMatch ? innerMatch[1] : svg;
}

// 1. Generate StorysetConstruction.tsx
const constructionInner = cleanSvgForReact('src/assets/construction-rafiki.svg');

const constructionTsx = `import React from 'react';

interface StorysetConstructionProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  animated?: boolean;
}

/**
 * Storyset Animated Construction Illustration (Rafiki style)
 * Imported directly from Storyset (https://storyset.com/illustration/construction/rafiki)
 * Embedded with embedded CSS keyframe animations for character float, truck suspension, and ground shadow.
 */
export const StorysetConstruction: React.FC<StorysetConstructionProps> = ({
  className = 'w-full h-auto max-w-lg mx-auto',
  width = '100%',
  height = '100%',
  animated = true
}) => {
  return (
    <div className={\`relative inline-block select-none \${className}\`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        width={width}
        height={height}
        role="img"
        aria-label="P3 Construction and Engineering Illustration - Storyset"
        className="w-full h-full drop-shadow-2xl overflow-visible"
      >
        <defs>
          <style>{\`
            @keyframes storysetFloat {
              0%, 100% {
                transform: translateY(0px) rotate(0deg);
              }
              50% {
                transform: translateY(-8px) rotate(0.4deg);
              }
            }

            @keyframes storysetTruckRumble {
              0%, 100% {
                transform: translateY(0px);
              }
              25% {
                transform: translateY(-1.5px);
              }
              75% {
                transform: translateY(1px);
              }
            }

            @keyframes storysetShadowPulse {
              0%, 100% {
                transform: scale(1);
                opacity: 0.8;
                transform-origin: 245px 412px;
              }
              50% {
                transform: scale(0.94);
                opacity: 0.45;
                transform-origin: 245px 412px;
              }
            }

            @keyframes storysetBgGlow {
              0%, 100% {
                opacity: 0.85;
              }
              50% {
                opacity: 1;
              }
            }

            \${animated ? \`
              #Character {
                animation: storysetFloat 3.8s ease-in-out infinite;
                transform-origin: center bottom;
              }
              #trux-mixer {
                animation: storysetTruckRumble 2.4s ease-in-out infinite;
                transform-origin: center bottom;
              }
              #Shadow {
                animation: storysetShadowPulse 3.8s ease-in-out infinite;
              }
              #background-complete {
                animation: storysetBgGlow 4.5s ease-in-out infinite;
              }
            \` : ''}
          \`}</style>
        </defs>
        ${constructionInner}
      </svg>
      {/* Storyset Subtle Legal Attribution */}
      <a 
        href="https://storyset.com/work" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="sr-only"
        title="Illustration by Storyset"
      >
        Illustration by Storyset
      </a>
    </div>
  );
};
`;

fs.writeFileSync('src/components/StorysetConstruction.tsx', constructionTsx, 'utf8');
console.log('Created StorysetConstruction.tsx successfully!');

// 2. Generate StorysetArchitect.tsx
const architectInner = cleanSvgForReact('src/assets/architect-rafiki.svg');

const architectTsx = `import React from 'react';

interface StorysetArchitectProps {
  className?: string;
  width?: number | string;
  height?: number | string;
  animated?: boolean;
}

/**
 * Storyset Animated Architect Illustration (Rafiki style)
 * Imported directly from Storyset (https://storyset.com/illustration/architect/rafiki)
 * Embedded with embedded CSS keyframe animations for architectural blueprinting and drafting.
 */
export const StorysetArchitect: React.FC<StorysetArchitectProps> = ({
  className = 'w-full h-auto max-w-lg mx-auto',
  width = '100%',
  height = '100%',
  animated = true
}) => {
  return (
    <div className={\`relative inline-block select-none \${className}\`}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 500 500"
        width={width}
        height={height}
        role="img"
        aria-label="P3 Architectural Structural Drafting Illustration - Storyset"
        className="w-full h-full drop-shadow-2xl overflow-visible"
      >
        <defs>
          <style>{\`
            @keyframes storysetArchitectDraft {
              0%, 100% {
                transform: translateY(0px) rotate(0deg);
              }
              50% {
                transform: translateY(-6px) rotate(-0.5deg);
              }
            }

            @keyframes storysetDeskSway {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-1.5px);
              }
            }

            @keyframes storysetDeskShadow {
              0%, 100% {
                transform: scale(1);
                opacity: 0.8;
                transform-origin: 245px 412px;
              }
              50% {
                transform: scale(0.95);
                opacity: 0.5;
                transform-origin: 245px 412px;
              }
            }

            \${animated ? \`
              #Character {
                animation: storysetArchitectDraft 3.6s ease-in-out infinite;
                transform-origin: center bottom;
              }
              #drafting-table {
                animation: storysetDeskSway 4.2s ease-in-out infinite;
                transform-origin: center bottom;
              }
              #Shadow {
                animation: storysetDeskShadow 3.6s ease-in-out infinite;
              }
            \` : ''}
          \`}</style>
        </defs>
        ${architectInner}
      </svg>
      {/* Storyset Subtle Legal Attribution */}
      <a 
        href="https://storyset.com/work" 
        target="_blank" 
        rel="noopener noreferrer" 
        className="sr-only"
        title="Illustration by Storyset"
      >
        Illustration by Storyset
      </a>
    </div>
  );
};
`;

fs.writeFileSync('src/components/StorysetArchitect.tsx', architectTsx, 'utf8');
console.log('Created StorysetArchitect.tsx successfully!');
