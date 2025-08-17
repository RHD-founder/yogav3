import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import * as solidIcons from "@fortawesome/free-solid-svg-icons";
import * as regularIcons from "@fortawesome/free-regular-svg-icons";
import * as brandIcons from "@fortawesome/free-brands-svg-icons";

// Type for icon categories
type IconCategories = {
  solid: Record<string, IconDefinition>;
  regular: Record<string, IconDefinition>;
  brand: Record<string, IconDefinition>;
};

// Filter out non-icon properties and create clean icon objects
const filterIcons = (
  iconModule: Record<string, unknown>
): Record<string, IconDefinition> => {
  const filtered: Record<string, IconDefinition> = {};
  Object.keys(iconModule).forEach((key) => {
    const item = iconModule[key];
    if (item && typeof item === "object" && "iconName" in item) {
      filtered[key] = item as IconDefinition;
    }
  });
  return filtered;
};

// Create an object with all icon categories
export const icons: IconCategories = {
  solid: filterIcons(solidIcons),
  regular: filterIcons(regularIcons),
  brand: filterIcons(brandIcons),
};

// Helper function to get an icon by name and category
export function getIcon(
  name: string,
  category: "solid" | "regular" | "brand" = "solid"
): IconDefinition | undefined {
  const iconKey = `fa${name.charAt(0).toUpperCase() + name.slice(1)}`;
  return icons[category][iconKey];
}

// Common yoga-related icons for quick access
export const yogaIcons = {
  person: solidIcons.faUser,
  personWalking: solidIcons.faPersonWalking,
  dumbbell: solidIcons.faDumbbell,
  heartPulse: solidIcons.faHeartPulse,
  calendar: solidIcons.faCalendarDays,
  clock: solidIcons.faClock,
  location: solidIcons.faLocationDot,
  phone: solidIcons.faPhone,
  email: solidIcons.faEnvelope,
  star: solidIcons.faStar,
  check: solidIcons.faCheck,
  circleCheck: solidIcons.faCircleCheck,
  leaf: solidIcons.faLeaf,
};

// Common social media icons for quick access
export const socialIcons = {
  facebook: brandIcons.faFacebookF,
  instagram: brandIcons.faInstagram,
  twitter: brandIcons.faXTwitter,
  youtube: brandIcons.faYoutube,
  pinterest: brandIcons.faPinterest,
  tiktok: brandIcons.faTiktok,
};

export default icons;
