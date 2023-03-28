import { createContext, useContext } from "react";

export const ProfileDataContext = createContext();
export const SetProfileDataContext = createContext();

export const useProfileData = () => useContext(ProfileDataContext);
export const useSetProfileData = () => useContext(SetProfileDataContext);

export const ProfileDataProvider = ({ children }) => {
    const [profileData, setProfileData] = useState({
    // pageProfile: { results; []},
    popularProfiles:  {results: []},
    });

    const currentUser = useCurrentUser();

    useEffect(() => {
        const handleMount = async () => {
        try {
            const{data} = await axiosReq.get(
            '/profiles/?ordering=-followers_count'
            );
            setProfileData(prevState => ({
            ...prevState,
            popularProfiles: data,
            }))
        } catch (error) {
            console.log(error)
        }
        };
        
        handleMount()
    }, [currentUser])
    }
