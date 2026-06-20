import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowLeft } from 'lucide-react'
import PasswordGate from '../components/PasswordGate'
import Artifact from '../components/Artifact'
import CaseStudyShell from '../components/CaseStudyShell'
import {
  Column,
  SectionNumber,
  Heading,
  Lead,
  P,
  BulletList,
} from '../components/prose'

const ease = [0.16, 1, 0.3, 1] as const

function CaseStudy() {
  return (
    <CaseStudyShell>
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
            ImmiReport — turning immigration case files into{' '}
            <span className="font-serif italic">court-ready reports.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.12, ease }}
            className="mt-6 text-sm text-subtle sm:text-base"
          >
            Babak Jafari · Product Designer · Immigration legal-tech platform
          </motion.p>
        </Column>
      </header>

      <article className="px-4 pb-24">
        <Column>
          <Artifact
            tall
            title="Hero banner"
            desc="Full-width brand-color banner with white text. Left: the title “ImmiReport” + subtitle “Immigration report generation” + the Lexpoint logo. Right: a clean illustration or cropped screenshot — a messy stack of case documents on one side, a single polished report on the other."
          />

          {/* What is report preparation */}
          <SectionNumber>What is immigration report preparation?</SectionNumber>
          <Lead>
            Immigration cases run on documents — forms, evidence, declarations,
            and supporting letters that must be assembled accurately and
            consistently for each applicant.
          </Lead>
          <P>
            Preparing these reports is detailed, repetitive, and high-stakes: a
            small inconsistency can delay or sink an application. As immigration
            practices take on more cases, the bottleneck isn&apos;t legal
            judgment — it&apos;s the hours spent assembling and formatting
            reliable, complete reports. Tooling that removes that bottleneck
            without sacrificing accuracy directly expands how many people a
            practice can help.
          </P>

          {/* Project inception */}
          <SectionNumber>Project inception</SectionNumber>
          <P>
            We identified a clear opportunity in the most frequent, most
            error-prone part of the workflow: producing the report itself. It
            stood out because every case needs one, the work is largely manual,
            and mistakes are costly. By building ImmiReport into Lexpoint, we
            aimed to:
          </P>
          <BulletList
            items={[
              {
                label: 'Simplify the workflow',
                text: 'give immigration teams one place to turn a case file into a complete, consistent report, instead of stitching together documents by hand.',
              },
              {
                label: 'Solve the key pain point',
                text: 'reduce the manual effort and the risk of error that come from assembling reports across scattered sources.',
              },
              {
                label: 'Set a strategic foundation',
                text: 'establish a reliable report engine that broader immigration-case features could be built on top of.',
              },
            ]}
          />

          {/* Problem statement */}
          <SectionNumber>The problem statement</SectionNumber>
          <Heading>The bottleneck isn’t judgment — it’s assembly</Heading>
          <P>
            Immigration professionals assemble reports from fragmented inputs —
            intake answers, uploaded evidence, and standard legal language — and
            do it largely by hand for every case. That manual process is slow,
            inconsistent between team members, and easy to get wrong, and the cost
            of an error is real: a flawed report can delay or jeopardize
            someone&apos;s case. The teams needed a way to produce a complete,
            accurate, consistent report from a single workflow rather than
            reconstructing it document by document each time.
          </P>

          {/* Solution */}
          <SectionNumber>The solution: ImmiReport</SectionNumber>
          <P>
            ImmiReport turns a case&apos;s intake and evidence into a structured,
            court-ready report through one guided flow. It pulls the case
            information into a consistent format, flags what&apos;s missing before
            submission, and produces a polished, standardized document — so the
            output is reliable no matter who on the team prepared it. The vision
            was a report engine that didn&apos;t just speed the work up, but
            raised the floor on accuracy and consistency.
          </P>

          {/* Team */}
          <SectionNumber>The team</SectionNumber>
          <P>
            I worked as the product designer alongside a product lead, engineer,
            and immigration subject-matter expert, partnering closely with the
            people who prepare these reports day to day.
          </P>
          <P className="text-subtle">
            [ confirm the real team / roles here ]
          </P>
          <Artifact
            title="Team cluster diagram"
            desc="Overlapping-circles graphic. Core circles for the working trio — Product design, Engineering, Immigration expertise — with satellite circles for any others (PM, QA, legal reviewer). Keep it honest to who was actually involved."
          />

          {/* Divider */}
          <Artifact
            title="Section divider — “The design process”"
            desc="Full-width brand-color block, white centered text “The design process,” with the double-diamond (discover → define → develop → deliver) motif behind it."
          />

          {/* Research */}
          <SectionNumber>Research and understanding</SectionNumber>
          <P>
            The work started by understanding how reports actually get made today
            — sitting with the people who prepare them and tracing every step
            from intake to final document. The goal was to find where time was
            lost and where errors crept in, so the tool solved the real
            bottleneck rather than an assumed one.
          </P>
          <Artifact
            title="Three quote cards (mint / yellow / pink)"
            desc={
              <ul className="space-y-2">
                <li>
                  “Most of my time isn&apos;t legal work — it&apos;s assembling
                  the same report over and over and double-checking nothing&apos;s
                  missing.” — Immigration consultant [ sample ]
                </li>
                <li>
                  “Two people on my team prepare the same kind of report
                  differently. I need it consistent.” — Practice manager
                  [ sample ]
                </li>
                <li>
                  “If something&apos;s missing and it goes out anyway, that&apos;s
                  the client&apos;s case on the line. I can&apos;t afford that.” —
                  Immigration lawyer [ sample ]
                </li>
              </ul>
            }
          />

          {/* Competitive analysis */}
          <SectionNumber>Competitive analysis</SectionNumber>
          <P>
            We looked at how immigration teams produce reports today — generic
            document tools, manual templates, and general practice-management
            software — to find what none of them did well.
          </P>
          <Artifact
            title="Two comparison cards — Market Gaps vs. Advantages"
            desc={
              <div className="space-y-2">
                <p>
                  <strong className="text-primary">Market Gaps —</strong> manual
                  assembly across scattered documents · inconsistent output between
                  team members · no check for missing information before
                  submission · generic tools with no immigration-specific
                  structure.
                </p>
                <p>
                  <strong className="text-primary">ImmiReport Advantages —</strong>{' '}
                  one guided flow from case file to finished report · standardized,
                  consistent output every time · missing-information flags before
                  the report goes out · built specifically for immigration
                  reporting.
                </p>
              </div>
            }
          />
          <P>
            <span className="font-semibold text-primary">Key takeaway — </span>
            ImmiReport&apos;s advantage isn&apos;t speed alone — it&apos;s
            producing a reliable, consistent, complete report regardless of who
            prepares it.
          </P>

          {/* Archetypes */}
          <SectionNumber>User archetypes and workflows</SectionNumber>
          <P className="text-subtle">[ adjust roles to match Lexpoint’s real users ]</P>
          <Artifact
            title="Three persona cards"
            desc={
              <div className="space-y-2">
                <p>
                  <strong className="text-primary">The Practitioner —</strong>{' '}
                  (immigration lawyer / consultant) produce accurate, complete
                  reports on deadline; keep cases moving; spend time on judgment,
                  not assembly. Pains: manual building eats billable time; errors
                  carry real consequences; hard to keep output consistent.
                </p>
                <p>
                  <strong className="text-primary">The Preparer —</strong>{' '}
                  (paralegal / case assistant) assemble many reports accurately and
                  quickly; gather and check every required piece; match the
                  firm&apos;s standard. Pains: repetitive, detailed work; easy to
                  miss an item; no single place to do it all.
                </p>
                <p>
                  <strong className="text-primary">The Solo / small practice —</strong>{' '}
                  handle a full caseload without extra staff; keep quality high
                  while moving fast. Pains: no team to double-check; every error is
                  costly; limited budget for specialized tools.
                </p>
              </div>
            }
          />

          {/* Report generation flow */}
          <SectionNumber>Report generation flow</SectionNumber>
          <Artifact
            title="Flow diagram — case to report"
            desc="Rounded-box flowchart: Open case / intake → Pull in case info + evidence → Guided report builder (stepped form, save as draft) → Missing-information check / flags → Review → Generate final report → Export / deliver. Mark the steps where a user can save as draft."
          />
          <Artifact
            title="Second flow diagram (optional)"
            desc="Only if there’s a second distinct path — new report vs. update an existing report — shown side by side, each as a stepped flow. If there’s only one path, skip this."
          />

          {/* Wireframes */}
          <SectionNumber>Wireframes and usability testing</SectionNumber>
          <P>
            We moved quickly from flows to wireframes for the report builder and
            the review step — the two moments that most decide whether the output
            is trusted — and put them in front of real preparers.
          </P>
          <Artifact
            title="Wireframe grid (3×3 thumbnails)"
            desc="Thumbnails of real wireframes — the stepped report builder, the evidence/intake pull-in, the missing-information flags, the review screen, and the generated report. Include one earlier/rejected version if you have it."
          />

          {/* Report builder usability study */}
          <SectionNumber>Report builder usability study</SectionNumber>
          <P>
            The goal was to make building a report feel as reliable as it was
            fast. We asked preparers to walk through creating a report and watched
            where they hesitated or lost confidence.
          </P>
          <P>
            Preparers valued seeing a clear summary of the report before
            generating it, and the missing-information flags gave them confidence
            that nothing slipped through. A <em>save-as-draft</em> need surfaced —
            reports often can&apos;t be finished in one sitting because something
            is still missing from the client or a colleague. [ confirm with your
            real results ]
          </P>

          {/* Review & trust usability study */}
          <SectionNumber>Review &amp; trust usability study</SectionNumber>
          <P>
            Once a report is drafted, the anxious moment is review — is it
            complete and correct before it goes out? We studied what preparers
            needed to see at a glance to trust the output: missing or incomplete
            items surfaced clearly, a consistent structure they could scan
            quickly, and confidence that the same case would produce the same
            report every time.
          </P>
          <Artifact
            title="Three quote cards (green / purple / blue)"
            desc={
              <ul className="space-y-2">
                <li>
                  “It flagged the one document I&apos;d forgotten before I sent it.
                  That alone is worth it.” — Paralegal [ sample ]
                </li>
                <li>
                  “I need to save drafts constantly — there&apos;s always something
                  missing from the client.” — Consultant [ sample ]
                </li>
                <li>
                  “Consistency is everything. Now every report from my team looks
                  the same and nothing&apos;s missed.” — Practice manager
                  [ sample ]
                </li>
              </ul>
            }
          />

          {/* Scoping the MVP */}
          <SectionNumber>Scoping the MVP</SectionNumber>
          <P>
            We balanced what preparers needed most against what we could build
            first.
          </P>
          <Artifact
            title="Two cards — Prioritized vs. Deferred"
            desc={
              <div className="space-y-2">
                <p>
                  <strong className="text-primary">Prioritized —</strong> guided
                  report builder · pull case info + evidence into the report ·
                  missing-information flags · save as draft · standardized final
                  export.
                </p>
                <p>
                  <strong className="text-primary">Deferred —</strong> multiple
                  report types/templates · team review workflows · automated
                  reminders for missing items · deeper case-management integration
                  · analytics on turnaround.
                </p>
              </div>
            }
          />

          {/* Finalizing designs */}
          <SectionNumber>Finalizing designs</SectionNumber>
          <P>
            In the final phase I refined the builder and review screens against
            usability feedback, tightening the moments that most affect trust —
            the missing-information check and the pre-generation summary — so the
            output felt dependable, not just quick.
          </P>
          <Artifact
            title="High-fidelity screenshot (the showcase image)"
            desc="The cleanest polished screen — the report builder mid-flow with the summary/flags visible, or the finished generated report."
          />

          {/* Outcome */}
          <SectionNumber>Outcome and what&apos;s next</SectionNumber>
          <P className="text-subtle">
            [ add a real result you can stand behind — time saved per report,
            consistency, adoption, or a qualitative outcome. If there&apos;s no
            metric, keep it qualitative rather than inventing one. ]
          </P>
          <P>
            <span className="font-semibold text-primary">What I learned — </span>
            in high-stakes legal tooling, trust comes from completeness and
            consistency, not just speed — the most valuable thing the design did
            was make sure nothing went out missing.
          </P>
          <P>
            <span className="font-semibold text-primary">Next — </span>
            more report types, team review, and tighter case-management
            integration.
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
  return (
    <PasswordGate
      id="lexpoint"
      title="Lexpoint ImmiReport"
      role="Lexpoint.io · Case study"
    >
      <CaseStudy />
    </PasswordGate>
  )
}
