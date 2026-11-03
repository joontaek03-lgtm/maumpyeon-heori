// 웹사이트 파일을 앱에 넣을 www 폴더로 복사
import { cpSync, mkdirSync, rmSync } from 'node:fs';

const FILES = ['index.html', 'privacy.html', 'manifest.webmanifest', 'sw.js', 'icons', 'media'];
rmSync('www', { recursive: true, force: true });
mkdirSync('www');
for (const f of FILES) cpSync(f, `www/${f}`, { recursive: true });
console.log('www 준비 완료:', FILES.join(', '));
