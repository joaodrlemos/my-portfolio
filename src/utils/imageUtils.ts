export function getDocsImage(imageName: string): string {
  const images: Record<string, { default: string }> = import.meta.glob(
    '/src/assets/images/docs/*.{webp,png,jpg,jpeg}',
    { eager: true },
  );

  return images[`/src/assets/images/docs/${imageName}`]?.default || '';
}

export function getProjectImage(
  imageName: string,
  projectName: string,
): string {
  const projectImages: Record<string, { default: string }> = import.meta.glob(
    '/src/assets/images/projects/*/screens/*.{webp,png,jpg,jpeg}',
    { eager: true },
  );

  return (
    projectImages[
      `/src/assets/images/projects/${projectName}/screens/${imageName}`
    ]?.default || ''
  );
}

export function getProjectLogo(logoName: string, projectName: string): string {
  const projectLogos: Record<string, { default: string }> = import.meta.glob(
    '/src/assets/images/projects/*/logos/*.{webp,png,jpg,jpeg}',
    { eager: true },
  );

  return (
    projectLogos[`/src/assets/images/projects/${projectName}/logos/${logoName}`]
      ?.default || ''
  );
}

export function getIcon(
  iconName: string,
  iconCategory: string,
  iconDesc: string,
): string {
  const icons: Record<string, { default: string }> = import.meta.glob(
    '/src/assets/images/icons/*/*/*.{svg,png,webp,jpg}',
    { eager: true },
  );

  return (
    icons[`/src/assets/images/icons/${iconCategory}/${iconDesc}/${iconName}`]
      ?.default || ''
  );
}

export function getLogo(
  logoName: string,
  logoCategory: string,
  logoDesc: string,
): string {
  const logos: Record<string, { default: string }> = import.meta.glob(
    '/src/assets/images/logos/*/*/*.{svg,png,webp,jpg}',
    { eager: true },
  );

  return (
    logos[`/src/assets/images/logos/${logoCategory}/${logoDesc}/${logoName}`]
      ?.default || ''
  );
}
