import {rest} from 'msw'

const baseURL = 'https://netblend-api.herokuapp.com/'

/* Mock user */
export const handlers = [
    rest.get(`${baseURL}dj-rest-auth/user/`, (req, res, ctx) => {
        return res(ctx.json({
            pk: 27,
            username: "testing1",
            email: "",
            first_name: "",
            last_name: "",
            profile_id: 26,
            profile_image: "https://res.cloudinary.com/dsp1994/image/upload/v1/media/../brown-profile-image_xcia4p"
            })
        )
    }),
    rest.post(`${baseURL}dj-rest-auth/logout/`, (req,res,ctx) => {
        return res(ctx.status(200))
    })
]