export function getImage(imageName: string): string {
  console.log(`🔍 Looking for image: ${imageName}`);

  const images: Record<string, { default: string }> = import.meta.glob(
    '/src/assets/pictures/**/*.{webp,png,jpg,jpeg}',
    { eager: true },
  );

  return images[`/src/assets/pictures/${imageName}`]?.default || '';
}

export function getLogo(logoName: string): string {
  console.log(`🔍 Looking for logo: ${logoName}`);

  const logos: Record<string, { default: string }> = import.meta.glob(
    '/src/assets/logos/**/*.{webp,png,jpg,jpeg}',
    { eager: true },
  );

  return logos[`/src/assets/logos/${logoName}`]?.default || '';
}

export function getIcon(iconName: string): string {
  console.log(`🔍 Looking for icon: ${iconName}`);

  const icons: Record<string, { default: string }> = import.meta.glob(
    '/src/assets/icons/**/*.{svg,png,webp,jpg}',
    { eager: true },
  );

  return icons[`/src/assets/icons/${iconName}`]?.default || '';
}
