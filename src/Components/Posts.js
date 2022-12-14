import { useRef } from "react";
import clsx from "clsx";
import useLazyLoad from "../utility/useLazyLoad";
import { Card } from './Card';
import { LoadingPosts } from '../utility/LoadingPosts';
import { data } from "autoprefixer";
import posts from '../contactData/data.json';


const NUM_PER_PAGE = 6;
const TOTAL_PAGES = 80;




export const Posts = () => {
    const personDetails = posts["results"];
    const triggerRef = useRef(null);
    const onGrabData = (currentPage) => {
        // This would be where you'll call your API
        return new Promise((resolve) => {
        setTimeout(() => {
            console.log(personDetails.length);
            const data = personDetails.slice(
            ((currentPage - 1)%TOTAL_PAGES) * NUM_PER_PAGE,
            NUM_PER_PAGE * (currentPage%TOTAL_PAGES)
            );
            console.log(data);
            resolve(data);
        }, 1000);
        });
    };
    const { data, loading } = useLazyLoad({ triggerRef, onGrabData });
    return (
        <>
        <div className="grid grid-cols-3 gap-4 content-start">
        {data.map(person => {
            return <Card firstName={person.name.first} lastName={person.name.last} imageUrl={person.picture.large} contactNo={person.cell} key={person.login.uuid}/>
        })}
        </div>
        <div ref={triggerRef} className={clsx("trigger", { visible: loading })}>
            <LoadingPosts />
        </div>
        </>
    );
}