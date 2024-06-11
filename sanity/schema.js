import about from "./schemas/about";
import careerServices from "./schemas/careerServices";
import contact from "./schemas/contact";
import employer from "./schemas/employer";
import home from "./schemas/home";
import privacy from "./schemas/privacy";
import resources from "./schemas/resources";
import terms from "./schemas/terms";
import testimonialsCandidate from "./schemas/testimonialsCandidate";
import testimonialsClients from "./schemas/testimonialsClients";
import work from "./schemas/work";
export const schema = {
  types: [
    home,
    about,
    careerServices,
    employer,
    resources,
    work,
    contact,
    privacy,
    terms,
    testimonialsCandidate,
    testimonialsClients,
  ],
};
