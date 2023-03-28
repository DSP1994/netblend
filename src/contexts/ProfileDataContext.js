import React, { createContext, useContext, useEffect, useState } from "react";
import { axiosReq, axiosRes } from "../netblend_api/axiosDefaults";
import { followHelper } from "../utils/utils";
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
            const { data } = await axiosRes.post('/followers/', {
                followed: clickedProfile.id
            });

            setProfileData(prevState => ({
                ...prevState,
                pageProfile: {
                    results: prevState.pageProfile.results.map(profile =>
                        followHelper(profile,clickedProfile, data.id)),
                },
                popularProfiles: {
                    ...prevState.popularProfiles,
                    results: prevState.popularProfiles.results.map(profile =>
                        followHelper(profile,clickedProfile, data.id))
                }
            }))
        } catch (error) {
            console.log(error)
        }
    };

    const handleUnfollow = async (clickedProfile) => {
        try {
            await axiosRes.delete(`/followers/${clickedProfile.following_id}/`)
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
            <SetProfileDataContext.Provider value={{setProfileData, handleFollow}}>
                {children}
            </SetProfileDataContext.Provider>
        </ProfileDataContext.Provider>
    );
};