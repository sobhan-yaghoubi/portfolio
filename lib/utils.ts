import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import gsap from "gsap"

export const random = (min: number, max: number, isFloor?: boolean) => {
  const number = gsap.utils.random(min, max)
  return isFloor ? Math.floor(number) : number
}

export const cn = (...inputs: ClassValue[]) => twMerge(clsx(inputs))

export const isUserUseMobile = (userAgent: string) =>
  /iphone|ipad|ipod|android|blackberry|windows phone|(ipad|tablet|playbook|silk)|(android(?!.*mobile))/g.test(
    userAgent.toLowerCase()
  )
    ? true
    : false

export const getWords = (sentence: string, wordsNumber: number) =>
  sentence.split(" ").slice(0, wordsNumber).join(" ")

export const isEven = (number: number) => number % 2 === 0

const FA_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"]

export const toFaDigits = (value: string | number) =>
  String(value).replace(/\d/g, (digit) => FA_DIGITS[Number(digit)])
