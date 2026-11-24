import { execSync } from 'child_process';
import path from 'path';

const projectDir = 'C:\\Users\\prave\\rise-with-nandhini';

function run(cmd) {
  console.log(`> ${cmd}`);
  execSync(cmd, { cwd: projectDir, stdio: 'inherit' });
}

try {
  // 1. Commit and push on main
  run('git add .');
  run('git commit -m "fix(deploy): relative base path, HashRouter, 404 fallback, and GitHub Pages workflow"');
  run('git push origin main');
  console.log('Successfully pushed updates to main branch.');

  // 2. Push dist folder to gh-pages branch
  // We can use git subtree or push dist files
  console.log('Pushing dist to gh-pages branch...');
  run('git subtree push --prefix dist origin gh-pages');
  console.log('Successfully pushed dist to gh-pages branch.');
} catch (e) {
  console.error('Error during git push:', e.message);
  // Alternative to subtree if subtree complains about branch exists
  try {
    console.log('Attempting alternative gh-pages push...');
    run('git push origin `git subtree split --prefix dist main`:gh-pages --force');
    console.log('Alternative gh-pages push succeeded.');
  } catch (err2) {
    console.error('Alternative push error:', err2.message);
  }
}
