import type { NutritionImage } from './nutrition-images'

export const nutritionModels = [
  {
    "model": "01",
    "name": "Essenza Nutri",
    "tagline": "Nutrição leve para uma vida em equilíbrio.",
    "positioning": "Natural e humanizado",
    "hero": "portrait",
    "primary": "#294A3C",
    "background": "#F7F4EB",
    "text": "#24392F",
    "accent": "#C98F73"
  },
  {
    "model": "02",
    "name": "Maison Nutrition",
    "tagline": "A arte de nutrir o seu melhor.",
    "positioning": "Premium e sofisticado",
    "hero": "table",
    "primary": "#343B2F",
    "background": "#F8F5EF",
    "text": "#242622",
    "accent": "#C8A77C"
  },
  {
    "model": "03",
    "name": "Fuel Performance",
    "tagline": "Alimente sua evolução.",
    "positioning": "Esportivo e performance",
    "hero": "running",
    "primary": "#101820",
    "background": "#0B1117",
    "text": "#F7F9F5",
    "accent": "#C7F464"
  },
  {
    "model": "04",
    "name": "LeveMente Nutrição",
    "tagline": "Comer bem também é viver bem.",
    "positioning": "Comportamental e acolhedor",
    "hero": "conversation",
    "primary": "#A9514A",
    "background": "#FFF9F2",
    "text": "#4A3739",
    "accent": "#C8B8E8"
  },
  {
    "model": "05",
    "name": "Nutriva Clinic",
    "tagline": "Ciência aplicada à sua saúde.",
    "positioning": "Clínico e científico",
    "hero": "tablet",
    "primary": "#123F4A",
    "background": "#F5FAFA",
    "text": "#183B43",
    "accent": "#69B8B5"
  },
  {
    "model": "06",
    "name": "Forma Nutri",
    "tagline": "O essencial para se sentir bem.",
    "positioning": "Minimalista e editorial",
    "hero": "stillLife",
    "primary": "#202320",
    "background": "#FAFAF7",
    "text": "#202320",
    "accent": "#B7AD9C"
  },
  {
    "model": "07",
    "name": "Raízes Nutrição",
    "tagline": "Cuidando de cada fase da vida.",
    "positioning": "Familiar e materno-infantil",
    "hero": "family",
    "primary": "#4E7059",
    "background": "#FFF9ED",
    "text": "#34483B",
    "accent": "#E8C96B"
  },
  {
    "model": "08",
    "name": "NutriSync",
    "tagline": "Sua nutrição conectada à sua evolução.",
    "positioning": "Digital e tecnológico",
    "hero": "online",
    "primary": "#0B1024",
    "background": "#090E1E",
    "text": "#F7F8FF",
    "accent": "#7657F2"
  }
] satisfies { model:string; name:string; tagline:string; positioning:string; hero:NutritionImage; primary:string; background:string; text:string; accent:string }[]
