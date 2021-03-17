import './App.css';
import { useState } from 'react'
import Job from './components/Job'

const jobs = [
  {
    title: 'tommy',
    position: 'Full Stack Web Developer',
    from: 'December 2015',
    to: 'Present',
    notes: [
      'Tote bag sartorial mlkshk air plant vinyl banjo lumbersexual poke leggings offal cold-pressed brunch neutra. Hammock photo booth live-edge disrupt.',
      'Post-ironic selvage chambray sartorial freegan meditation. Chambray chartreuse kombucha meditation, man bun four dollar toast street art cloud bread live-edge heirloom.',
      'Butcher drinking vinegar franzen authentic messenger bag copper mug food truck taxidermy. Mumblecore lomo echo park readymade iPhone migas single-origin coffee franzen cloud bread tilde vegan flexitarian.'
    ]
  },
  {
    title: 'bigdrop',
    position: 'Front-End Engineer',
    from: 'May 2015',
    to: 'December 2015',
    notes: [
      'Hashtag drinking vinegar scenester mumblecore snackwave four dollar toast, lumbersexual XOXO. Cardigan church-key pabst, biodiesel vexillologist viral squid.',
      'Franzen af pitchfork, mumblecore try-hard kogi XOXO roof party la croix cardigan neutra retro tattooed copper mug. Meditation lomo biodiesel scenester',
      'Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1',
      'Fam VHS enamel pin try-hard echo park raw denim unicorn fanny pack vape authentic. Helvetica fixie church-key, small batch jianbing messenger bag scenester +1'
    ]
  },
  {
    title: 'cuker',
    position: 'Engineering Intern',
    from: 'May 2014',
    to: 'September 2015',
    notes: [
      `I'm baby woke mumblecore stumptown enamel pin. Snackwave prism pork belly, blog vape four loko sriracha messenger bag jean shorts DIY bushwick VHS. Banjo post-ironic hella af, palo santo craft beer gluten-free.`,
      'YOLO drinking vinegar chambray pok pok selfies quinoa kinfolk pitchfork street art la croix unicorn DIY. Woke offal jianbing venmo tote bag, palo santo subway tile slow-carb post-ironic pug ugh taxidermy squid.',
      'Pour-over glossier chambray umami 3 wolf moon. Iceland kale chips asymmetrical craft beer actually forage, biodiesel tattooed fingerstache. Pork belly lomo man braid, portland pitchfork locavore man bun prism.'
    ]
  }
]

function App() {
  const [index, setIndex] = useState(0)

  const selectJob = i => {
    setIndex(i)
  }

  return (
    <div className="App">
        <div className='container'>
          <div className='top'>
            <h1>Experience</h1>
            <div/>
          </div>
          <div className='middle'>
            <div className='navbar'>
              {jobs.map((job, i) => <button key={i} onClick={() => selectJob(i)} className={i === index ? 'chosen' : 'normal'}>{job.title.toUpperCase()}</button>)}
            </div>
            <Job {...jobs[index]} />
          </div>
        </div>
    </div>
  );
}

export default App;
