import * as React from "react"

import { cn } from "@/lib/utils"

const AboutCard = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <article
    ref={ref}
    className={cn(
      "w-full md:h-full inline-flex flex-col text-left gap-4 p-6 rounded-xl border border-Customs-Card-Border bg-Customs-Card lg:shadow-[0px_0px_20px_0px_#2a4365]",
      className
    )}
    {...props}
  />
))
AboutCard.displayName = "AboutCard"

const AboutCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-[1.125rem] leading-[1.5rem] font-inter text-white", className)}
    {...props}
  />
))
AboutCardTitle.displayName = "AboutCardTitle"

const AboutCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-[1rem] leading-[1.35rem] font-inter text-white/85", className)}
    {...props}
  />
))
AboutCardDescription.displayName = "AboutCardDescription"

const ExperienceCard = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <article
    ref={ref}
    className={cn(
      "inline-flex items-start justify-center px-4 py-3 gap-3 relative",
      className
    )}
    {...props}
  />
))
ExperienceCard.displayName = "ExperienceCard"

const ExperienceCardContent = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <section ref={ref} className={cn("pl-[1rem] inline-flex flex-col items-start gap-1 border-l-[2px] border-gray-500 ml-16", className)} {...props} />
))
ExperienceCardContent.displayName = "ExperienceCardContent"

const ExperienceCardImage = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("w-[3.5rem] h-[3.5rem] rounded-full bg-cover no-repeat shadow-md absolute left-[1rem] top-[1rem]", className)}
    {...props}
  />
))
ExperienceCardImage.displayName = "ExperienceCardImage"

const ExperienceCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-3", className)}
    {...props}
  />
))
ExperienceCardHeader.displayName = "ExperienceCardHeader"

const ExperienceCardTime = React.forwardRef<
  HTMLTimeElement,
  React.HTMLAttributes<HTMLTimeElement>
>(({ className, ...props }, ref) => (
  <time
    ref={ref}
    className={cn("h-5 flex items-center gap-2 text-sm font-semibold font-primary text-white/70", className)}
    {...props}
  />
))
ExperienceCardTime.displayName = "ExperienceCardTime"

const ExperienceCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-[1rem] md:text-[1.25rem] font-primary font-bold", className)}
    {...props}
  />
))
ExperienceCardTitle.displayName = "ExperienceCardTitle"

const ExperienceCardSubTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("h-5 flex items-center justify-center gap-2 text-sm font-semibold font-primary text-white/70", className)}
    {...props}
  />
))
ExperienceCardSubTitle.displayName = "ExperienceCardSubTitle"

const ExperienceCardDescription = React.forwardRef<
  HTMLUListElement,
  React.HTMLAttributes<HTMLUListElement>
>(({ className, ...props }, ref) => (
  <ul
    ref={ref}
    className={cn("w-full mt-2 max-w-[35rem] text-sm font-medium font-primary text-white/90", className)}
    {...props}
  />
))
ExperienceCardDescription.displayName = "ExperienceCardDescription"




export { AboutCard, AboutCardTitle, AboutCardDescription, ExperienceCard, 
  ExperienceCardHeader, ExperienceCardContent, ExperienceCardImage, ExperienceCardTitle, ExperienceCardSubTitle, ExperienceCardTime, ExperienceCardDescription }
