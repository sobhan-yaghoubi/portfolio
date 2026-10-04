import { TypeSocialMedia } from "../types/SocialMedia"
import { socialMediaData } from "@/data/socialMedia"

export const getSocialMediaList = async (): Promise<TypeSocialMedia[]> => {
  return socialMediaData
}
