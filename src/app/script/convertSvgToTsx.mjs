import { readdir, readFile, writeFile, unlink } from 'fs/promises';
import { join } from 'path';

const directory = '../../shared/assets/svgs';

async function convertSvgToTsx() {
  try {
    const files = await readdir(directory);

    for (const file of files) {
      if (file.endsWith('.svg')) {
        const filePath = join(directory, file);
        let content = await readFile(filePath, 'utf8');

        // SVG 속성을 React 스타일로 변환
        content = content
          .replace(/clip-rule/g, 'clipRule')
          .replace(/fill-rule/g, 'fillRule')
          .replace(/stroke-width/g, 'strokeWidth')
          .replace(/stroke-linecap/g, 'strokeLinecap')
          .replace(/stroke-linejoin/g, 'strokeLinejoin');

        // 파일명 PascalCase로 변환
        const componentName = file
          .replace('.svg', '')
          .split('-')
          .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
          .join('');

        const tsxContent = `import { SVGProps } from 'react';

const ${componentName} = (props: SVGProps<SVGSVGElement>) => (
  ${content.replace(/<svg/, '<svg {...props}')}
);

export default ${componentName};
`;

        const tsxPath = join(directory, `${componentName}.tsx`);
        await writeFile(tsxPath, tsxContent);
        await unlink(filePath);

        console.log(`Converted ${file} to ${componentName}.tsx`);
      }
    }
  } catch (err) {
    console.error('Error:', err);
  }
}

convertSvgToTsx();
