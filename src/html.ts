import * as htmlToText from 'html-to-text';

const html = `<!doctype html>
    <html>
      <head>
        <title>Reset your password</title>
      </head>
      <body>
        <h1>Reset your password</h1>
        <p>We have noticed that you have forgotten your password. Please click
        <a href="#">here</a> to select a new password.</p>
      </body>
    </html>`;

console.log(htmlToText.fromString(html));

export {};
