import Link from 'next/link';
import { CourseCard } from './courseCard';

export default function Home() {
  return (
    <main>
      <div className='container'>
        <img src='/tembulogo.png' alt='Tembusu Logo' height='110vh'/>
        <div>
            <img src='/header.png' alt='Tembusu Courses' width='80%' className='image-container'/>
        </div>
        <h1>Find the perfect courses for you!</h1>
        <Link href='/quiz'>
          <button>Start Quiz</button>
        </Link>
      </div>
    </main>
  );
}
