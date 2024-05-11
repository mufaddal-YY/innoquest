import about from "./schemas/about";
import careerServices from "./schemas/careerServices";
import contact from "./schemas/contact";
import employer from "./schemas/employer";
import home from "./schemas/home";
import testimonialsCandidate from "./schemas/testimonialsCandidate";
import testimonialsClients from "./schemas/testimonialsClients";
export const schema = {
  types: [
    home,
    about,
    careerServices,
    employer,
    testimonialsCandidate,
    testimonialsClients,
    contact,
  ],
}
