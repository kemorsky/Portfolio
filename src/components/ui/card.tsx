import * as React from "react"

import { cn } from "@/lib/utils"

const AboutCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "w-[22rem] inline-flex flex-col items-start justify-center gap-2 px-4 py-2 rounded-xl bg-Customs-Card text-white shadow",
      className
    )}
    {...props}
  />
))
AboutCard.displayName = "AboutCard"

const AboutCardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5", className)}
    {...props}
  />
))
AboutCardHeader.displayName = "AboutCardHeader"

const AboutCardTitle = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("font-[Open_Sans] font-semibold text-[1.4rem] leading-[1.5rem] text-white", className)}
    {...props}
  />
))
AboutCardTitle.displayName = "AboutCardTitle"

const AboutCardSubTitle = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("font-[Open_Sans] text-[1rem] leading-[1rem] text-white/90", className)}
    {...props}
  />
))
AboutCardSubTitle.displayName = "AboutCardSubTitle"

const AboutCardDescription = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    className={cn("text-[0.875rem] leading-[1.25rem] text-white/75", className)}
    {...props}
  />
))
AboutCardDescription.displayName = "AboutCardDescription"


const AboutCardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("inline-flex items-center justify-center gap-3", className)}
    {...props}
  />
))
AboutCardFooter.displayName = "AboutCardFooter"

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
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
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
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("pl-[1rem] inline-flex flex-col items-start gap-1 border-l-[2px] border-gray-500 ml-16", className)} {...props} />
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
    className={cn("text-sm font-semibold text-white/70", className)}
    {...props}
  />
))
ExperienceCardTime.displayName = "ExperienceCardTime"

const ExperienceCardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-[1rem] md:text-[1.25rem] font-bold", className)}
    {...props}
  />
))
ExperienceCardTitle.displayName = "ExperienceCardTitle"

const ExperienceCardSubTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm font-semibold text-white/70", className)}
    {...props}
  />
))
ExperienceCardSubTitle.displayName = "ExperienceCardSubTitle"

const ExperienceCardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("max-w-[35rem] text-sm font-medium text-white/90", className)}
    {...props}
  />
))
ExperienceCardDescription.displayName = "ExperienceCardDescription"

const HeroCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "w-full inline-flex flex-col text-left gap-4 p-6 rounded-xl bg-Customs-Card shadow",
      className
    )}
    {...props}
  />
))
HeroCard.displayName = "HeroCard"

const HeroCardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-[Open_Sans] text-[1.125rem] leading-[1.5rem] text-white", className)}
    {...props}
  />
))
HeroCardTitle.displayName = "HeroCardTitle"

const HeroCardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-[1rem] leading-[1.5rem] text-white/85", className)}
    {...props}
  />
))
HeroCardDescription.displayName = "HeroCardDescription"

const ProjectsCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "w-full max-w-[27.125rem] h-[28rem] aspect-[auto] flex-shrink-0 inline-flex flex-col items-start justify-start gap-4 p-5 rounded-xl bg-Customs-Card shadow cursor-pointer hover:translate-y-[-0.5rem] transition-all duration-200",
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
  <div ref={ref} className={cn("w-full inline-flex flex-col items-start justify-center gap-4", className)} {...props} />
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
    className={cn("w-full flex justify-between font-semibold text-[1.25rem] text-white", className)}
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
    className={cn("w-full text-sm text-white/80", className)}
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
    className={cn("w-full inline-flex flex-col items-start justify-center gap-4", className)}
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
    className={cn("inline-flex items-center justify-start flex-wrap gap-2.5", className)}
    {...props}
  />
))
ProjectsCardSkills.displayName = "ProjectsCardSkills"

export { AboutCard, AboutCardHeader, AboutCardTitle, AboutCardSubTitle, AboutCardDescription, AboutCardFooter, Card, CardContent, CardHeader,  CardFooter, CardTitle, CardDescription, ExperienceCard, 
  ExperienceCardHeader, ExperienceCardContent, ExperienceCardImage, ExperienceCardTitle, ExperienceCardSubTitle, ExperienceCardTime, ExperienceCardDescription, HeroCard, HeroCardTitle, HeroCardDescription,
  ProjectsCard, ProjectsCardContent, ProjectsCardHeader, ProjectsCardTitle, ProjectsCardSubTitle, ProjectsCardDescription, ProjectsCardSkills }
