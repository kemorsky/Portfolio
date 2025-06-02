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

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

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
    className={cn("text-sm font-semibold font-inter text-white/70", className)}
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
    className={cn("text-[1rem] md:text-[1.25rem] font-inter font-bold", className)}
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
    className={cn("text-sm font-semibold font-inter text-white/70", className)}
    {...props}
  />
))
ExperienceCardSubTitle.displayName = "ExperienceCardSubTitle"

const ExperienceCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("max-w-[35rem] text-sm font-medium font-inter text-white/90", className)}
    {...props}
  />
))
ExperienceCardDescription.displayName = "ExperienceCardDescription"

const HeroCard = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <article
    ref={ref}
    className={cn(
      "min-w-[22rem] inline-flex flex-col md:flex-row items-start justify-center gap-4 px-4 py-4 rounded-xl bg-Customs-Card text-white",
      className
    )}
    {...props}
  />
))
HeroCard.displayName = "HeroCard"

const HeroCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("w-[9rem] md:min-w-[9rem] h-[9rem] rounded-full overflow-hidden", className)}
    {...props}
  />
))
HeroCardHeader.displayName = "HeroCardHeader"

const HeroCardTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("font-dm-sans font-semibold text-[1.4rem] leading-[1.5rem] text-white", className)}
    {...props}
  />
))
HeroCardTitle.displayName = "HeroCardTitle"

const HeroCardSubTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("w-[16.5rem] flex items-center justify-start gap-2 font-dm-sans text-[1rem] leading-[1.25rem] text-white/90", className)}
    {...props}
  />
))
HeroCardSubTitle.displayName = "HeroCardSubTitle"

const HeroCardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("max-w-[23rem] font-inter text-[0.875rem] leading-[1.25rem] text-white/75", className)}
    {...props}
  />
))
HeroCardDescription.displayName = "HeroCardDescription"


const HeroCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("w-[22rem] inline-flex items-center justify-start gap-4", className)}
    {...props}
  />
))
HeroCardFooter.displayName = "HeroCardFooter"

const ProjectsCard = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <article
    ref={ref}
    className={cn(
      "w-full max-w-[27.125rem] h-[30rem] sm:h-[28rem] aspect-[auto] flex-shrink-0 inline-flex flex-col items-start justify-start gap-4 p-4 md:p-5 rounded-xl border border-Customs-Card-Border bg-Customs-Card lg:shadow-[0px_0px_20px_0px_#2a4365] lg:hover:translate-y-[-0.5rem] transition-all duration-200 intersect-once lg:intersect:motion-scale-in-75 lg:intersect:motion-opacity-in-0",
      className
    )}
    {...props}
  />
))
ProjectsCard.displayName = "ProjectsCard"

const ProjectsCardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("w-full inline-flex flex-col items-center justify-center gap-4", className)} {...props} />
))
ProjectsCardContent.displayName = "ProjectsCardContent"

const ProjectsCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("h-[14rem] bg-cover no-repeat rounded-xl shadow-md overflow-hidden", className)}
    {...props}
  />
))
ProjectsCardHeader.displayName = "ProjectsCardHeader"

const ProjectsCardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("w-full flex justify-between font-semibold font-dm-sans text-[1.25rem] text-white", className)}
    {...props}
  />
))
ProjectsCardTitle.displayName = "ProjectsCardTitle"

const ProjectsCardSubTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("w-full text-[0.875rem] font-inter text-white/80", className)}
    {...props}
  />
))
ProjectsCardSubTitle.displayName = "ProjectsCardSubTitle"

const ProjectsCardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("w-full min-h-[10rem] inline-flex flex-col items-start justify-between gap-3", className)}
    {...props}
  />
))
ProjectsCardDescription.displayName = "ProjectsCardDescription"

const ProjectsCardSkills = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("inline-flex items-center justify-start flex-wrap md:flex-nowrap gap-2", className)}
    {...props}
  />
))
ProjectsCardSkills.displayName = "ProjectsCardSkills"

export { AboutCard, AboutCardTitle, AboutCardDescription, Card, CardContent, CardHeader,  CardFooter, CardTitle, CardDescription, ExperienceCard, 
  ExperienceCardHeader, ExperienceCardContent, ExperienceCardImage, ExperienceCardTitle, ExperienceCardSubTitle, ExperienceCardTime, ExperienceCardDescription, HeroCard, HeroCardHeader, HeroCardTitle, HeroCardSubTitle, HeroCardDescription,
  HeroCardFooter, ProjectsCard, ProjectsCardContent, ProjectsCardHeader, ProjectsCardTitle, ProjectsCardSubTitle, ProjectsCardDescription, ProjectsCardSkills }
