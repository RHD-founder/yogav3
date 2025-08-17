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

// Create an object with all icon categories
export const icons: IconCategories = {
  solid: solidIcons,
  regular: regularIcons,
  brand: brandIcons,
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
  yoga: solidIcons.faYoga,
  meditation: solidIcons.faMeditation,
  om: solidIcons.faOm,
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
