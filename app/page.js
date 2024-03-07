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
        <div className="disclaimer disclaimer-bold">Disclaimer</div>
        <div className="disclaimer">This quiz poses short questions that help align courses with your interests. The final courses returned may not be absolutely perfect fit for you. But they should connect with at least some of your interests.</div>
      </div>
    </main>
  );
}
