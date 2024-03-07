import Link from 'next/link';
import { CourseCard } from './courseCard';

export default function Home() {
  return (
    <main>
      <div className='container'>
        <img src='/tembulogo.png' alt='Tembusu Logo' height='110vh'/>
        <div>
            <img src='/coursebanner3.png' alt='Tembusu Courses' width='100%'/>
        </div>
        <h1>Find courses that you want to read!</h1>
        <Link href='/quiz'>
          <button>Start Quiz</button>
        </Link>
        <div className="disclaimer disclaimer-bold" style={{textAlign: 'center', paddingBottom: '5px'}}>Disclaimer</div>
        <div className="disclaimer" style={{textAlign: 'justify', padding: '0 50px 0 50px'}}>This quiz poses short questions that help align courses with your interests. The final courses returned may not be an absolutely perfect fit for you but they should connect with at least some of your interests.</div>
      </div>
    </main>
  );
}
