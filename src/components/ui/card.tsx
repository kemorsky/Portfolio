import * as React from "react"

import { cn } from "@/lib/utils"

const AboutCard = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "w-full inline-flex flex-col items-start justify-start gap-4 px-4 py-2 rounded-xl bg-gray-900 text-white shadow",
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
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-[Open_Sans] text-3xl leading-[1.2rem] ", className)}
    {...props}
  />
))
AboutCardTitle.displayName = "AboutCardTitle"

const AboutCardSubTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-[Open_Sans] text-[1.2rem] leading-[1rem] text-gray-400", className)}
    {...props}
  />
))
AboutCardSubTitle.displayName = "AboutCardSubTitle"

const AboutCardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-[0.9rem] leading-[1.5rem] text-white", className)}
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
    className={cn("flex items-center", className)}
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
      "shadow inline-flex items-center justify-center px-4 border-l-[3px] rounded-[2px] border-gray-600",
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
  <div ref={ref} className={cn("inline-flex flex-col items-start gap-2", className)} {...props} />
))
ExperienceCardContent.displayName = "ExperienceCardContent"

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

const ExperienceCardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("font-semibold text-[1.2rem] md:text-2xl", className)}
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
    className={cn("text-[0.9rem] text-gray-300", className)}
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
    className={cn("text-[0.85rem] text-gray-400", className)}
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
      "max-w-[42rem] w-full inline-flex flex-col items-start justify-start gap-8 p-6 rounded-xl bg-gray-900 text-white shadow",
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
    className={cn("font-[Open_Sans] text-[1.5rem] leading-[1.2rem] tracking-tight", className)}
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
    className={cn("text-[1rem] leading-[1.3rem] text-white", className)}
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
      "max-w-[42rem] w-full inline-flex flex-col items-start justify-start gap-8 p-6 rounded-xl bg-gray-900 text-white shadow",
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
    className={cn("w-full h-full bg-cover no-repeat inline-flex items-center justify-center rounded-xl shadow-md overflow-hidden", className)}
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
    className={cn("w-full font-semibold text-[1.2rem] md:text-2xl", className)}
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
    className={cn("w-full text-[0.9rem] text-gray-300", className)}
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
  ExperienceCardHeader, ExperienceCardContent, ExperienceCardTitle, ExperienceCardSubTitle, ExperienceCardDescription, HeroCard, HeroCardTitle, HeroCardDescription,
  ProjectsCard, ProjectsCardContent, ProjectsCardHeader, ProjectsCardTitle, ProjectsCardSubTitle, ProjectsCardDescription, ProjectsCardSkills }
