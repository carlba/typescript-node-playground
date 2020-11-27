import * as path from 'path';

export function getFileInScriptDir(...pathParts: string[]) {
  return path.join(__dirname, ...pathParts);
}
