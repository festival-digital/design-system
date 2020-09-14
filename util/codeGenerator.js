const POSSIBLE_CHARS = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';

export const enhancedCodeGenerator = () => {
  const length = 7;
  let text = '';
  for (let i = 0; i < length; i++)
    text += POSSIBLE_CHARS.charAt(Math.floor(Math.random() * POSSIBLE_CHARS.length));
  return text;
}

export const simpleCodeGenerator = () => Math.floor((Math.random() * 999) + 1);
