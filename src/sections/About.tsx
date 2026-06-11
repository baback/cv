import WordsPullUpMultiStyle from '../components/WordsPullUpMultiStyle'
import AnimatedParagraph from '../components/AnimatedParagraph'

export default function About() {
  return (
    <section id="about" className="bg-black px-4 py-20 md:py-28">
      <div className="mx-auto flex max-w-6xl flex-col items-center rounded-3xl bg-[#101010] px-6 py-16 text-center sm:px-10 md:py-24">
        <p className="text-[10px] uppercase tracking-[0.2em] text-primary sm:text-xs">
          Product design
        </p>

        <h2 className="mt-6 max-w-3xl text-3xl leading-[0.95] sm:text-4xl sm:leading-[0.9] md:text-5xl lg:text-6xl xl:text-7xl">
          <WordsPullUpMultiStyle
            segments={[
              { text: 'I am Babak Jafari,', className: 'font-normal' },
              {
                text: 'a product designer & design lead.',
                className: 'italic font-serif',
              },
              {
                text: 'I co-founded Lindo.ai and train AI to design with taste.',
                className: 'font-normal',
              },
            ]}
          />
        </h2>

        <AnimatedParagraph
          className="mt-10 max-w-3xl text-xs leading-relaxed sm:text-sm md:text-base"
          text="Over 13+ years I have built component systems that scale to millions of outputs, led a 12-person team, and shipped fintech and enterprise products used by tens of millions of people. I wireframe in code, prototype with AI tools, and care about experiences people actually trust."
        />
      </div>
    </section>
  )
}
