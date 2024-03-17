import React, { useContext } from "react";
import { UserContext } from "../UserContext";
import { Link, Navigate, useParams } from "react-router-dom";

export default function AccountPage(){
    const {user} = useContext(UserContext);

     if (!ready) {
        return 'Loading....';
     }


     if( ready && !user) {
        return <Navigate to={'/login'}/>
     }

     const {subpage} = useParams();
     console.log(subpage);

    return(
        <div>
            <nav className="w-full flex justify-center mt-8 gap-2">
                <Link className="py-2  px-6 bg-gray-primary text-white rounded-full" to ={'/account/'}>My profile</Link>
                <Link className="py-2 px-6" to ={'/account/bookings'}>My bookings</Link>
                <Link className="py-2 px-6" to ={'/account/places'}>My accommodations</Link>
            </nav>
        </div>
    );
}