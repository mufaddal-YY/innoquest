import { groq } from "next-sanity";
import { client } from "./lib/client";

const defaultFetchOptions = { cache: "no-cache" };

export async function getHomeData() {
  const result = await client.fetch(
    groq`*[_type == "home"]{
        _id,
        _createdAt,
       metaTitle,
       metaDescription,
       metaKeywords,
       headline,
       subHeadline,
       "heroImage": heroImage.asset->url,
       service1,
       serviceDesc,
       service2,
       serviceDesc1,
       network,
       manYears,
       clients,
       candidates,
       clientAssociated,
      }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getAboutData() {
  const result = await client.fetch(
    groq`*[_type == "about"]{
        _id,
        _createdAt,
       metaTitle,
       metaDescription,
       metaKeywords,
       headline,
       subHeadline,
       "heroImage": heroImage.asset->url,
       ourStory,
       "aboutImage": aboutImage.asset->url,
       advantageInno,
       "advantageImage": advantageImage.asset->url,
       industries[]{
        industryDesc,
        "image": image.asset->url,
        },
       clientele[]{
        clientDesc,
        },
       leadership[]{
        name,
        description,
        "image": image.asset->url,
        link,
        },
        "teamImage": teamImage.asset->url,
        teamDescription,
       ourValues[]{
        description,
        },
        "valueImage": valueImage.asset->url,
      }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getEmployerData() {
  const result = await client.fetch(
    groq`*[_type == "employer"]{
        _id,
        _createdAt,
       metaTitle,
       metaDescription,
       metaKeywords,
       headline,
       subHeadline,
       "heroImage": heroImage.asset->url,
       executiveSearch,
       executiveDesc,
       "executiveImage": executiveImage.asset->url,
       professionalSearch,
       professionalDesc,
       "professionalImage": professionalImage.asset->url,
       nicheHiring,
       nicheDesc,
       "nicheImage": nicheImage.asset->url,
       recruitmentEfficiency,
       efficiencyDesc,
       "efficiencyImage": efficiencyImage.asset->url,
      }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getCareerData() {
  const result = await client.fetch(
    groq`*[_type == "career"]{
        _id,
        _createdAt,
       metaTitle,
       metaDescription,
       metaKeywords,
       headline,
       subHeadline,
       "heroImage": heroImage.asset->url,
       careerOpp,
       careerOppSub,
       link,
       careerCompass,
       compassDesc,
       "compassImage": compassImage.asset->url,
       portfolioCrafting,
       portfolioDesc,
       "portfolioImage": portfolioImage.asset->url,
       careerAccelerator,
       acceleratorDesc,
       "acceleratorImage": acceleratorImage.asset->url,
      }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getTestimonialsData() {
  const result = await client.fetch(
    groq`*[_type == "testimonialsCandidate"]{
        _id,
        _createdAt,
        designation,
        description,
    
      }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getClientTestimonialsData() {
  const result = await client.fetch(
    groq`*[_type == "testimonialsClient"]{
        _id,
        _createdAt,
        designation,
        description,
    
      }`,
    {},
    defaultFetchOptions
  );
  return result;
}

export async function getContactsData() {
  const result = await client.fetch(
    groq`*[_type == "contact"]{
        _id,
        _createdAt,
        email,
        linkedin,
        facebook,
        blogSpot,    
      }`,
    {},
    defaultFetchOptions
  );
  return result;
}
