export const numberOfLines = (text: string): number => {
  const container = document.createElement('div');
  container.style.textAlign = 'center';
  container.style.width = '250px';
  container.style.fontSize = '20px';
  container.style.fontFamily = 'montserrat';
  container.style.fontWeight = '500';
  container.style.position = 'absolute';
  container.style.visibility = 'hidden';
  container.textContent = text;

  document.body.appendChild(container);
  const lineHeight = 1.2 * parseInt(container.style.fontSize, 10);
  const lineCount = Math.round(container.scrollHeight / lineHeight);
  document.body.removeChild(container);

  return lineCount;
};
