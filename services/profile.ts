import { TypeProfile } from "../types/Profile"
import { profileData } from "@/data/profile"

export const getProfile = async (): Promise<TypeProfile> => {
  return profileData
}
