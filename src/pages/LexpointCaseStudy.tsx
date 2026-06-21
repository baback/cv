import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import CaseStudyShell from '../components/CaseStudyShell'
import TableOfContents, { type TocItem } from '../components/TableOfContents'
import { CaseImage, ImageGrid } from '../components/casegraphics'
import {
  Column,
  SectionNumber,
  Heading,
  Lead,
  P,
  BulletList,
} from '../components/prose'

const ease = [0.16, 1, 0.3, 1] as const

const TOC: TocItem[] = [
  { label: 'What is an immigration eligibility assessment?' },
  { label: 'Project inception' },
  { label: 'The problem statement' },
  { label: 'The solution: ImmiReport' },
  { label: 'The team' },
  { label: 'Research and understanding' },
  { label: 'Competitive analysis' },
  { label: 'User archetypes' },
  { label: 'Explorations and usability testing' },
  { label: 'Gather — the layered profile' },
  { label: 'Assess — one clear report' },
  { label: 'Act — simulate the path to yes' },
  { label: 'Scoping the MVP' },
  { label: 'Finalizing designs' },
  { label: 'Outcome and what’s next' },
]

function CaseStudy() {
  return (
    <CaseStudyShell>
      <TableOfContents items={TOC} />

      {/* Hero */}
      <header className="px-4 pt-16 sm:pt-20">
        <Column>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="font-serif text-xl italic text-muted sm:text-2xl"
          >
            Case study · Lexpoint.io
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="mt-5 text-3xl font-medium leading-[1.1] text-primary sm:text-4xl md:text-5xl"
          >
            ImmiReport — one clear answer from{' '}
            <span className="font-serif italic">60+ immigration programs.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            className="mt-6 text-sm text-subtle sm:text-base"
          >
            Babak Jafari · Product Design Consultant · Canadian immigration
            legal-tech
          </motion.p>
        </Column>
      </header>

      <article className="px-4 pb-24">
        <Column>
          <CaseImage src="/work/lexpoint/cover.webp" alt="ImmiReport — case study cover" />

          {/* What is */}
          <SectionNumber>What is an immigration eligibility assessment?</SectionNumber>
          <Lead>
            Canada has 60+ permanent- and temporary-residence programs, each with
            its own conditional, points-based rules.
          </Lead>
          <P>
            An eligibility assessment takes a person&apos;s full profile — age,
            work, education, language, family, finances — and works out which
            programs they qualify for, how strong their case is, and what would
            improve it. For most people, getting that answer has meant paying a
            consultant, or guessing from dense government pages.
          </P>

          {/* Inception */}
          <SectionNumber>Project inception</SectionNumber>
          <P>
            Lexpoint set out to replace the expensive, gate-kept first step of
            immigration — the paid consultation — with an instant, self-serve
            assessment that an applicant can trust enough to act on. We had three
            goals:
          </P>
          <BulletList
            items={[
              {
                label: 'Clarity',
                text: 'make eligibility understandable to someone with no legal background.',
              },
              {
                label: 'Coverage',
                text: 'assess every program in one place, behind a single score people can understand.',
              },
              {
                label: 'Conversion',
                text: 'turn a qualified result into a started application with a licensed consultant.',
              },
            ]}
          />

          {/* Problem */}
          <SectionNumber>The problem statement</SectionNumber>
          <Heading>The first question is also the most paralyzing</Heading>
          <P>
            Immigration&apos;s first question — “do I even qualify, and for what?”
            — is buried under 60+ programs with different, conditional rules. The
            only reliable way to get a real answer was a $500+ consultation, so
            people who couldn&apos;t pay simply didn&apos;t know where they stood,
            and those who could still faced a process that felt opaque and
            overwhelming. The stakes are someone&apos;s future, so the emotional
            weight is enormous.
          </P>

          {/* Solution */}
          <SectionNumber>The solution: ImmiReport</SectionNumber>
          <P>
            ImmiReport gathers a person&apos;s profile, scores them out of 600
            against all 60+ programs, shows exactly where they stand and why, and
            lets them simulate how to qualify — then bridges qualified users into
            starting an application with a licensed consultant. It turns the
            maze of programs into a single, scannable answer and a path forward.
          </P>

          {/* Team */}
          <SectionNumber>The team</SectionNumber>
          <P>
            I worked as the product design consultant on the assessment
            experience — designing the end-to-end flow from profile to ImmiReport
            to the simulator — partnering with licensed immigration consultants
            (RCICs), engineering, and product so the experience stayed both
            legally accurate and genuinely usable.
          </P>
          <CaseImage src="/work/lexpoint/team.webp" alt="Team — design, engineering, and immigration expertise" />

          {/* Divider — coded gradient */}
          <div className="my-10 flex min-h-[180px] items-center justify-center rounded-3xl border border-line/10 bg-gradient-to-br from-[#F4F6FB] via-[#EAF1FF] to-[#DCE7FF] px-6 py-16 text-center sm:min-h-[220px]">
            <p className="font-serif text-3xl italic text-[#2563EB] sm:text-4xl">
              The design process
            </p>
          </div>

          {/* Research */}
          <SectionNumber>Research and understanding</SectionNumber>
          <P>
            We began with the people who live this problem every day — licensed
            consultants — to encode the real eligibility logic and the questions
            that actually change an outcome. I mapped the official points systems
            across programs to find the common structure beneath the complexity.
            The rules were complicated; the human need was simple: tell me where I
            stand, and what to do next.
          </P>
          <CaseImage src="/work/lexpoint/research.webp" alt="Research — applicant and consultant quotes" />

          {/* Competitive */}
          <SectionNumber>Competitive analysis</SectionNumber>
          <P>
            Existing tools fell into two camps: single-program points calculators,
            and content-heavy government pages that explained the rules without
            ever telling you your standing. The gap was clear — no one turned a
            full profile into one cross-program answer with a path forward.
          </P>
          <CaseImage src="/work/lexpoint/competitive.webp" alt="Competitive analysis — what exists today vs. ImmiReport" />
          <P>
            <span className="font-semibold text-primary">Key takeaway — </span>
            ImmiReport&apos;s advantage isn&apos;t a calculator; it&apos;s turning
            a whole profile into one understandable answer and a concrete next
            step.
          </P>

          {/* Archetypes */}
          <SectionNumber>User archetypes</SectionNumber>
          <P>
            Two archetypes drove every decision — and the assessment had to serve
            both at once.
          </P>
          <CaseImage src="/work/lexpoint/personas.webp" alt="User archetypes — the Hopeful Applicant and the Consultant" />

          {/* Explorations */}
          <SectionNumber>Explorations and usability testing</SectionNumber>
          <P>
            I moved from flows to mid-fidelity mockups for the moments that most
            decide whether people trust the result — onboarding, the profile, the
            report, and the simulator — and tested them with applicants and
            consultants before polishing a pixel.
          </P>
          <ImageGrid
            images={[
              { src: '/work/lexpoint/wires-mid/lw-1.webp', alt: 'Wireframe — name onboarding step' },
              { src: '/work/lexpoint/wires-mid/lw-2.webp', alt: 'Wireframe — country of residence' },
              { src: '/work/lexpoint/wires-mid/lw-3.webp', alt: 'Wireframe — immigration goal selection' },
              { src: '/work/lexpoint/wires-mid/lw-4.webp', alt: 'Wireframe — work experience profile' },
              { src: '/work/lexpoint/wires-mid/lw-5.webp', alt: 'Wireframe — language tests' },
              { src: '/work/lexpoint/wires-mid/lw-6.webp', alt: 'Wireframe — Express Entry overview' },
              { src: '/work/lexpoint/wires-mid/lw-7.webp', alt: 'Wireframe — temporary residence options' },
              { src: '/work/lexpoint/wires-mid/lw-8.webp', alt: 'Wireframe — simulator scenario builder' },
            ]}
          />

          {/* Gather */}
          <SectionNumber>Gather — the layered profile</SectionNumber>
          <P>
            Assessing 60+ programs needs a lot of data, but a giant form kills
            momentum before the user ever sees value. The design move: a layered
            profile — essentials first (status, work, education, language), then
            optional details framed as ways to improve the odds (job offer,
            income, family, trade certificate, letter of acceptance) — each
            presented as unlocking more pathways, so giving more feels like
            gaining options, not grinding through a form.
          </P>
          <P>
            <span className="font-semibold text-primary">Finding — </span>
            a single long form caused drop-off. When the optional section was
            framed as unlocking more pathways, people kept going.
          </P>
          <CaseImage src="/work/lexpoint/shots-web/gather.webp" alt="The layered immigration profile — work, education, language, and more" />

          {/* Assess */}
          <SectionNumber>Assess — one clear report</SectionNumber>
          <P>
            Raw eligibility rules are conditional and overwhelming; showing them
            verbatim buries the user. ImmiReport shows a single CRS-style score
            out of 600 — the language immigration already speaks — with every
            program ranked underneath by fit, each carrying the reasoning and the
            user&apos;s standing. The maze becomes a personalized, scannable
            report.
          </P>
          <P>
            <span className="font-semibold text-primary">Finding — </span>
            the single number was the moment of relief. A tester who&apos;d felt
            completely lost said it was the first time any of it made sense.
          </P>
          <CaseImage src="/work/lexpoint/shots-web/assess.webp" alt="ImmiReport — CRS score out of 600 with ranked programs" />
          <CaseImage src="/work/lexpoint/shots-web/eligibility.webp" alt="Per-program eligibility — Federal Skilled Worker breakdown and action plan" />

          {/* Act */}
          <SectionNumber>Act — simulate the path to yes</SectionNumber>
          <P>
            A flat “you don&apos;t qualify” is demoralizing and dead-ends the
            journey. The design move: a simulator — change an input (raise a
            language score, add a job offer) and watch the score and eligibility
            move in real time, with a clear “what changed” and “why it
            didn&apos;t change more.” So a no becomes a not-yet, with the shortest
            path to a yes — then a bridge to start the application with a
            consultant.
          </P>
          <P>
            <span className="font-semibold text-primary">Finding — </span>
            the simulator changed the emotion entirely; watching the score rise
            with a hypothetical job offer turned a dead-end into a plan.
          </P>
          <CaseImage src="/work/lexpoint/shots-web/simulator.webp" alt="The ImmiReport simulator — what-if scoring with what changed" />

          {/* Scoping */}
          <SectionNumber>Scoping the MVP</SectionNumber>
          <P>
            I prioritized the assessment core — the layered profile, the score,
            and the ranked programs — as must-haves, with the simulator and
            per-program detail as high-value fast-follows. The constraint was
            real: every program added meant encoding another set of legal rules,
            so scope had to balance user value against engineering effort.
          </P>
          <CaseImage src="/work/lexpoint/mvp.webp" alt="MVP scope — prioritized vs. deferred" />

          {/* Finalizing */}
          <SectionNumber>Finalizing designs</SectionNumber>
          <P>
            I refined the flows through critique with the team and review sessions
            with consultants, to make sure every simplification stayed legally
            accurate. The hardest part of the craft was hiding the complexity
            without hiding anything that actually mattered to a person&apos;s
            case.
          </P>

          {/* Outcome */}
          <SectionNumber>Outcome and what&apos;s next</SectionNumber>
          <BulletList
            items={[
              {
                text: 'A self-serve assessment that scores candidates across 60+ programs and shows them how to qualify.',
              },
              {
                text: 'Replaced the paywalled first consult with instant clarity at the top of the funnel.',
              },
              {
                text: 'A clear bridge from a qualified report into a proposal and a started application with a consultant.',
              },
            ]}
          />
          <P>
            <span className="font-semibold text-primary">What I learned — </span>
            in regulated, high-stakes products, the design job is to make the
            complexity invisible and the next step obvious. The most valuable
            thing I designed wasn&apos;t a screen — it was certainty in a process
            that usually runs on anxiety.
          </P>
          <P>
            <span className="font-semibold text-primary">Next — </span>
            more programs and jurisdictions, deeper simulator guidance, and a
            tighter handoff from a qualified report into the consultant&apos;s
            case workflow — so the path from “do I qualify” to a submitted
            application is one continuous experience.
          </P>

          {/* Footer nav */}
          <div className="mt-24 flex items-center justify-between border-t border-line/10 pt-10">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm font-medium text-primary transition-all hover:gap-3"
            >
              <ArrowLeft size={16} /> Back to home
            </Link>
            <p className="text-xs text-subtle">
              © {new Date().getFullYear()} Babak Jafari
            </p>
          </div>
        </Column>
      </article>
    </CaseStudyShell>
  )
}

export default function LexpointCaseStudy() {
  return <CaseStudy />
}
