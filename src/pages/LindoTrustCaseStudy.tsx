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
  { label: 'What is an agentic website platform?' },
  { label: 'Project inception' },
  { label: 'The problem statement' },
  { label: 'The solution: Lindo Agentic' },
  { label: 'The team' },
  { label: 'Research and understanding' },
  { label: 'Competitive analysis' },
  { label: 'User Archetypes' },
  { label: 'Agent build-and-edit flow' },
  { label: 'Explorations and usability testing' },
  { label: 'Build experience usability study' },
  { label: 'Edit & control usability study' },
  { label: 'Scoping the MVP' },
  { label: 'Finalizing designs' },
  { label: 'Go-to-market and launch' },
  { label: 'Monetization and model' },
  { label: 'Measuring success' },
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
            Case study · Lindo.ai
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease }}
            className="mt-5 text-3xl font-medium leading-[1.1] text-primary sm:text-4xl md:text-5xl"
          >
            Lindo — building <span className="font-serif italic">trust</span>{' '}
            into agent-built client websites.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            className="mt-6 text-sm text-subtle sm:text-base"
          >
            Babak Jafari · Co-Founder &amp; Head of Design · Agentic, AI-native
            website platform for agencies
          </motion.p>
        </Column>
      </header>

      <article className="px-4 pb-24">
        <Column>
          <CaseImage src="/cover.webp" alt="Lindo Agentic — case study cover" />

          {/* What is an agentic website platform */}
          <SectionNumber>What is an agentic website platform?</SectionNumber>
          <Lead>
            An agentic website platform builds and edits entire websites through
            AI agents instead of drag-and-drop.
          </Lead>
          <P>
            A user describes what they want in plain language, and specialized
            agents generate the pages, structure, copy, and styling — then keep
            editing the live site on command. For the people who build websites
            for a living — agencies and freelancers — this collapses days of
            production work into minutes. As the web-design industry moves from
            hand-built to AI-built, the platforms that win are the ones
            professionals can actually trust with client work.
          </P>

          {/* Project inception */}
          <SectionNumber>Project inception</SectionNumber>
          <P>
            Lindo launched as an all-in-one AI marketing tool — assets, social
            posts, scheduling, and a landing page builder. But the usage data
            pointed at one thing: people came to build a website from a prompt,
            and the power users doing it at volume were agencies and freelancers
            building for <em>paying clients</em>.
          </P>
          <P>
            We saw a clear opportunity: stop being one more website generator in
            a crowded market, and become the platform an agency runs its business
            on. By rebuilding Lindo around agents, we aimed to:
          </P>
          <BulletList
            items={[
              {
                label: 'Concentrate the product',
                text: 'move from a scattered all-in-one to the fastest way to build and manage client websites with AI.',
              },
              {
                label: 'Solve the real pain point',
                text: "agencies don't fear “bad AI” — they fear handing client work to a system they can't see, control, or undo. Make agent automation something they trust.",
              },
              {
                label: 'Set a strategic foundation',
                text: "establish a defensible position — a white-label agency platform with its own tier and monetization — that templated competitors couldn't easily copy.",
              },
            ]}
          />

          {/* Problem statement */}
          <SectionNumber>The problem statement</SectionNumber>
          <Heading>An agency can’t deliver work it doesn’t trust</Heading>
          <P>
            In a flooded market of AI builders, “another tool that makes
            websites” is a race to the bottom on price. Lindo had no defensible
            position, and the people getting the most value — agencies —
            weren&apos;t who the product was designed for.
          </P>
          <P>
            The deeper problem surfaced when we moved to agents. Agencies
            aren&apos;t building their own sites; they&apos;re building for
            clients whose budget and reputation are on the line. So when an AI
            agent generates or rewrites a whole website on its own, the agency
            froze on one question: <em>can I trust what this agent produced — and
            stay in control of what it changes — enough to put my name on it and
            ship it to my client?</em>
          </P>

          {/* Solution */}
          <SectionNumber>The solution: Lindo Agentic</SectionNumber>
          <P>
            Lindo became an agentic platform where eight specialized agents build
            and edit a complete, multi-page website from a single prompt —
            wrapped in a control layer that keeps the agency in charge the whole
            time. Instead of a black-box “ta-da,” the user watches the build
            happen, sees exactly what changed, controls what the agent is allowed
            to touch, and can undo anything.
          </P>
          <P>
            The platform was conceived with a clear vision: give agencies a
            system to generate, deliver, bill, and grow client sites under their
            own brand — automation they trust, not automation they fear.
          </P>

          {/* Team */}
          <SectionNumber>The team</SectionNumber>
          <P>
            I owned the product end to end — UX, UI, features, and direction —
            and ran much of sales and marketing, sitting at the center of a
            nine-person cross-functional team that grew as the product scaled.
          </P>
          <CaseImage src="/work/lindo/ln-1.webp" alt="Team structure — core trio and wider team" />

          {/* Divider */}
          <CaseImage src="/work/lindo/ln-2.webp" alt="The design process" />

          {/* Research */}
          <SectionNumber>Research and understanding</SectionNumber>
          <P>
            The reinvention began with continuous, scrappy discovery — the right
            speed for an early-stage product. I stayed close to the people who
            actually paid us: customer calls with agencies after early agentic
            releases, support tickets read directly so patterns reached me
            unfiltered, usage analytics for where people kicked off a build or
            edit and then bailed, and shared builds with our community to see
            what they kept asking for. The recurring signal wasn&apos;t about
            quality — it was about fear of losing control.
          </P>
          <CaseImage src="/work/lindo/ln-3.webp" alt="Research — agency quotes about trust and control" />

          {/* Competitive analysis */}
          <SectionNumber>Competitive analysis</SectionNumber>
          <P>
            The market was full of AI builders, so I benchmarked them to find the
            gap rather than copy the category. The pattern was clear: most tools
            competed on <em>generating</em> a website and stopped there — none
            were built around the agency&apos;s real job of delivering and
            managing sites for clients with confidence.
          </P>
          <CaseImage src="/work/lindo/ln-4.webp" alt="Competitive analysis — market gaps vs. Lindo advantages" />
          <P>
            <span className="font-semibold text-primary">Key takeaway — </span>
            Lindo doesn&apos;t win by generating a slightly better website. It
            wins by being the only platform that makes agent automation safe
            enough for an agency to put its name on.
          </P>

          {/* User archetypes */}
          <SectionNumber>User Archetypes</SectionNumber>
          <P>
            I designed for the people running web-design businesses and the
            clients they serve — and the product had to hold both at once.
          </P>
          <CaseImage src="/work/lindo/ln-5.webp" alt="User archetypes — Agency, Freelancer, Client" />

          {/* Build & edit flow */}
          <SectionNumber>Agent build-and-edit flow</SectionNumber>
          <CaseImage src="/work/lindo/ln-6.webp" alt="Agent build-and-edit flow" />

          {/* Explorations */}
          <SectionNumber>Explorations and usability testing</SectionNumber>
          <P>
            I moved fast to validate the riskiest assumption — that agencies
            would hand work to an agent — by testing real control patterns rather
            than polishing screens.
          </P>
          <P className="font-semibold text-primary">What I tried and killed:</P>
          <BulletList
            items={[
              {
                label: '“Just trust it” — fully autonomous, no visibility',
                text: 'killed; hiding the work amplified the fear instead of earning trust.',
              },
              {
                label: 'Ask everything up front in a long form',
                text: 'killed; it broke the one-prompt magic.',
              },
              {
                label: 'Build first, then make review effortless',
                text: 'kept, and shaped the final flow.',
              },
            ]}
          />
          <ImageGrid
            images={[
              { src: '/work/lindo/wires-lofi/wf-1.webp', alt: 'Wireframe exploration 1' },
              { src: '/work/lindo/wires-lofi/wf-2.webp', alt: 'Wireframe exploration 2' },
              { src: '/work/lindo/wires-lofi/wf-3.webp', alt: 'Wireframe exploration 3' },
              { src: '/work/lindo/wires-lofi/wf-4.webp', alt: 'Wireframe exploration 4' },
              { src: '/work/lindo/wires-lofi/wf-5.webp', alt: 'Wireframe exploration 5' },
              { src: '/work/lindo/wires-lofi/wf-6.webp', alt: 'Wireframe exploration 6' },
              { src: '/work/lindo/wires-lofi/wf-7.webp', alt: 'Wireframe exploration 7' },
              { src: '/work/lindo/wires-lofi/wf-8.webp', alt: 'Wireframe exploration 8' },
            ]}
          />

          {/* Build usability study */}
          <SectionNumber>Build experience usability study</SectionNumber>
          <P>
            The goal was to make handing a build to the agent feel safe, not like
            a gamble. We asked agencies to generate and then edit a site, and
            watched where confidence broke.
          </P>
          <P>
            Findings were encouraging: the visible, page-by-page build felt far
            less stressful than a blind spinner — seeing the agent work was the
            difference between “waiting anxiously” and “watching it happen.” The
            reveal that invited editing reframed the output as a starting point
            they owned. The most valuable insight: control beats autonomy — the
            moment they knew they could see what changed and undo it, willingness
            to use the agent on real client work jumped.
          </P>

          {/* Edit & control usability study */}
          <SectionNumber>Edit &amp; control usability study</SectionNumber>
          <P>
            Once a site exists, editing it is the anxiety-inducing phase — this is
            a client&apos;s live site. We studied what agencies needed to feel
            safe letting an agent make changes. They wanted to <em>scope</em> what
            the agent could touch before it ran, a plain-language summary of{' '}
            <em>what changed</em> after, and a reliable way back. Reversibility
            wasn&apos;t a nice-to-have — it was the precondition for using the
            agent at all.
          </P>
          <CaseImage src="/work/lindo/ln-7.webp" alt="Edit & control — agency quotes on reversibility and scope" />

          {/* Scoping the MVP */}
          <SectionNumber>Scoping the MVP</SectionNumber>
          <P>
            We balanced agency needs against engineering reality to decide what
            shipped first.
          </P>
          <CaseImage src="/work/lindo/ln-8.webp" alt="MVP scope — prioritized vs. deferred" />

          {/* Finalizing designs */}
          <SectionNumber>Finalizing designs</SectionNumber>
          <P>
            In the final phase I refined the control system against real usability
            feedback, enriched by design critiques with other designers that
            challenged my assumptions about how much autonomy to give the agent
            versus how much to surface to the user.
          </P>
          <P>
            <span className="font-semibold text-primary">
              New components for an agentic product —{' '}
            </span>
            the unique demands of agent automation led to components Lindo
            didn&apos;t have before: a <em>select-scope</em> control, a{' '}
            <em>“what changed”</em> diff preview, and a <em>build-progress</em>{' '}
            view that makes the agent&apos;s work legible. Each existed to convert
            hesitation into confidence, and to keep power and safety coexisting.
          </P>
          <CaseImage src="/editor.webp" alt="The polished agent editor — Figma-style canvas with select mode, layers, and the what-changed preview" />

          {/* Go-to-market */}
          <SectionNumber>Go-to-market and launch</SectionNumber>
          <P>
            The motion was built for learning. We launched the original AI builder
            via a featured Product Hunt debut and a public beta in Q1 2024, then
            layered in the agency platform and the agentic rebuild — measuring and
            iterating at each phase.
          </P>
          <P>
            A revenue-first lesson reshaped GTM: the self-serve “book a call”
            funnel for the agency tier underperformed, so I switched to proactive,
            high-touch onboarding and joined the calls myself. Conversion improved
            [ +xx% ]. The insight: agencies don&apos;t self-serve into a platform
            decision — they need a person.
          </P>
          <CaseImage src="/dashboard.webp" alt="The white-label agency dashboard" />

          {/* Monetization */}
          <SectionNumber>Monetization and model</SectionNumber>
          <P>
            I A/B-tested how we package and price. Testing hard vs. soft paywall
            and free-trial vs. 30-day money-back, the soft paywall + money-back
            guarantee won [ confirm lift ] — it converted better <em>and</em> built
            the trust agencies need before committing client budget. The agency
            tier (Elite) bundled the white-label stack, CRM, and billing into a
            plan priced for a business, not a hobbyist. This was chosen based on:
          </P>
          <BulletList
            items={[
              {
                label: 'User preference',
                text: 'agencies wanted to try the platform on real client work before committing — a guarantee lowered that risk.',
              },
              {
                label: 'Market alignment',
                text: 'a defensible agency tier separated us from commodity per-site builders.',
              },
              {
                label: 'Scalability',
                text: 'one agent engine producing coherent sites at volume let the model serve solo freelancers and high-volume studios alike.',
              },
            ]}
          />

          {/* Measuring success */}
          <SectionNumber>Measuring success</SectionNumber>
          <P>
            <span className="font-semibold text-primary">Where it landed — </span>
            30,000+ users (mostly agencies and freelancers) building 1,000,000+
            websites and landing pages; a commodity AI builder repositioned into a
            monetized agency platform; and a ground-up rebuild into an agentic
            product running on eight agents. Most telling was the behavior change
            — agencies went from “I&apos;m scared to let it touch my client&apos;s
            site” to using agent-driven building and editing as their default way
            to work.
          </P>
          <P>
            <span className="font-semibold text-primary">What I learned — </span>
            in agentic products, trust <em>is</em> the feature; autonomy without
            control just scares people. The best thing I designed wasn&apos;t a
            screen — it was the agency&apos;s confidence to hand over the work. And
            designing for someone delivering to <em>their</em> client raised the
            bar on every decision.
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

export default function LindoTrustCaseStudy() {
  return <CaseStudy />
}
