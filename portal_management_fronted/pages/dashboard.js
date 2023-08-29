import Link from 'next/link';

// import Header from './layout/Header';
// import Footer from './layout/Footer';
 

export default function Dashboard() {

  return (

    <>

    <fieldset>

 


 

    <Link href="/">Logout</Link>

 

    <p>

     ---Student Details---

    </p>

        <ul>

          <li>

            <Link href="/edit_profile">Edit Your Profile</Link>

          </li>

        </ul>

 

    <p>

      --- Course Details ---

    </p>

        <ul>

          <li>

            <Link href="/add_course">Add Courses</Link>

          </li>
          <li>

            <Link href="/delete_course">Delete Courses</Link>

          </li>

          <li>

            <Link href="/search_course">Search Courses</Link>

          </li>

        </ul>

      <p>

        --Scholarship Eligibilatity--
        <nav>
        <Link href="/scholarship">View Scholarship Details</Link>
       
      </nav>


      --Notices--
        <nav>
        <Link href="/notice"> View Important Notices </Link>
       
      </nav>


      </p>

      </fieldset>

    </>

  );

}