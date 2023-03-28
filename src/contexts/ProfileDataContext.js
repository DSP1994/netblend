import React, { createContext, useContext, useEffect, useState } from "react";
import { axiosReq } from "../netblend_api/axiosDefaults";
import { useCurrentUser } from "./CurrentUserContext";

export const ProfileDataContext = createContext();
export const SetProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

export const ProfileDataProvider = ({ children }) => {
    const [profileData, setProfileData] = useState({
    pageProfile: { results: []},
    popularProfiles:  {results: []},
    });

    const currentUser = useCurrentUser();

    const handleFollow = async (clickedProfile) => {
        try {
            
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        const handleMount = async () => {
            try {
                const{data} = await axiosReq.get(
                    '/profiles/?ordering=-followers_count'
                );
                setProfileData(prevState => ({
                ...prevState,
                popularProfiles: data,
                }));
            } catch (error) {
                console.log(error)
            }
        };
        
        handleMount();
    }, [currentUser]);

    return (
        <ProfileDataContext.Provider value={profileData}>
            <SetProfileDataContext.Provider value={setProfileData}>
                {children}
            </SetProfileDataContext.Provider>
        </ProfileDataContext.Provider>
    );
};