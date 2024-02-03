import Link from 'next/link';
import { CourseCard } from './courseCard';

export default function Home() {
  return (
    <main>
      <div className='container'>
        <img src='/tembulogo.png' alt='Tembusu Logo' height='110vh'/>
        <h1>Find the perfect courses for you!</h1>
        <Link href='/quiz'>
          <button>Start Quiz</button>
        </Link>
        <CourseCard courseID='UTC2101' />
      </div>
    </main>
  );
}
