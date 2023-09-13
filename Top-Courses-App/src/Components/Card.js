import { FcLike, FcLikePlaceholder } from 'react-icons/fc';
import { toast } from 'react-toastify';

const Card = (props) => {
    let course = props.course;
    let likedCourses = props.likedCourses;
    let setLikedCourses = props.setLikedCourses;
    
    function clickHandler() {
        if(likedCourses.includes(course.id)) {
            //agar likedCourses mei course.id hai mtlb pahle se liked hua hai

            setLikedCourses((prev) => prev.filter((cid) => (cid !== course.id) ));
            toast.warning("Like Removed");
        }
        else {
            // pahle se like nahi hai course 
            // insert karne hai ye course liked course me 
            if (likedCourses.length === 0) {
                setLikedCourses([course.id]); //if nothing is there then add current course
            }
            else { 
                setLikedCourses((prev) => [...prev, course.id]);
            }
            toast.success("Liked Successfully!!");
        }
    }
    return (
        <div className='bg-bgDark bg-opacity-80 w-[300px] rounded-md overflow-hidden'>
            <div className='relative '>
                <img src={course.image.url} alt="CourseImage" className='' />

                <div className='rounded-full w-[40px] h-[40px] bg-white absolute right-2 bottom-[-15px] grid place-items-center'>
                    <button onClick={clickHandler}>
                        {
                            likedCourses.includes(course.id) ? <FcLike fontSize="1.75rem" /> : <FcLikePlaceholder fontSize="1.75rem" />
                        }
                    </button>   
                </div>
            </div>

            <div className='p-4'>
                <p className='text-white text-lg font-semibold leading-6'>{course.title}</p>
                <p className='mt-2 text-white'>
                    {
                        course.description.length > 100 ? (course.description.substring(0, 100) + "...") : (course.description)
                    }
                </p>
            </div>
        </div>
    )
}

export default Card;