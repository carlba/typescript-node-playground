import * as chardet from 'chardet';
import { getFileInScriptDir } from './file';

const fullReadDataFile = getFileInScriptDir('files', 'FullRealDataShortDuplicates.csv');

async function detectEncoding() {
  const encoding = await chardet.detectFile(fullReadDataFile);
  return encoding;
}

detectEncoding().then(encoding => console.log(encoding));
console.log('test');
console.log('test2');
