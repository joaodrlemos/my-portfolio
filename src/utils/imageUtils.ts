export function getImage(imageName: string): string {
  console.log(`🔍 Looking for image: ${imageName}`);

  const images: Record<string, { default: string } | undefined> =
    import.meta.glob('/src/assets/pictures/**/*.{webp,png,jpg,jpeg}', {
      eager: true,
    });

  for (const path in images) {
    if (path.endsWith(`/${imageName}`)) {
      const image = images[path];
      if (image && image.default) {
        console.log(`✅ Found image: ${path} -> ${image.default}`);
        return image.default;
      }
    }
  }

  console.warn(`⚠️ Image not found: ${imageName}`);
  return '';
}

export function getLogo(logoName: string): string {
  console.log(`🔍 Looking for logo: ${logoName}`);

  const logos: Record<string, { default: string } | undefined> =
    import.meta.glob('/src/assets/logos/**/*.{webp,png,jpg,jpeg}', {
      eager: true,
    });

  for (const path in logos) {
    if (path.endsWith(`/${logoName}`)) {
      const logo = logos[path];
      if (logo && logo.default) {
        console.log(`✅ Found logo: ${path} -> ${logo.default}`);
        return logo.default;
      }
    }
  }

  console.warn(`⚠️ Logo not found: ${logoName}`);
  return '';
}
