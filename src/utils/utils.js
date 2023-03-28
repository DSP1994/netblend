import { axiosReq } from "../netblend_api/axiosDefaults"

export const fetchMoreData = async (resource, setResource) => {
    try {
        const {data} = await axiosReq.get(resource.next)
        setResource(prevResource => ({
            ...prevResource,
            next:data.next,
            results: data.results.reduce((acc, cur) => {
                return acc.some(accResults => accResults.id === cur.id) ? acc: [...acc, cur]
            }, prevResource.results)
        }))
    } catch (error) {}
}

export const followHelper = (profile, clickedProfile, following_id) => {
    return profile.id === clickedProfile.id
    ? {
        ...profile,
        followers_count: profile.followers_count + 1,
    }
    : profile.is_owner
    ? {
        ...profile, following_counter: profile.following_count + 1 } 
    : 
    profile;
}