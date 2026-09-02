import sql from "../configs/db.js";

// particular user ke sare creations ki history display
export const getUserCreations = async (req, res)=>{
    try {
        const {userId} = req.auth()   // fetch thee userId

       const creations = await sql`SELECT * FROM creations WHERE user_id = ${userId} ORDER BY created_at DESC`;

        res.json({ success: true, creations });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}
// sabhi published creations ki history
export const getPublishedCreations = async (req, res)=>{
    try {
       const creations = await sql`
       SELECT * FROM creations WHERE publish = true ORDER BY created_at DESC`;

        res.json({ success: true, creations });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}
// like add or remove in a creations ke liye toggler create
export const toggleLikeCreation = async (req, res)=>{
    try {

        const {userId} = req.auth()
        const {id} = req.body
        // fetch the creation using id
        const [creation] = await sql`SELECT * FROM creations WHERE id = ${id}`
        // if not found
        if(!creation){
            return res.json({ success: false, message: "Creation not found" })
        }

        const currentLikes = creation.likes;
        const userIdStr = userId.toString();
        let updatedLikes;
        let message;
        //like or unlike ka code
        if(currentLikes.includes(userIdStr)){
            updatedLikes = currentLikes.filter((user)=>user !== userIdStr);
            message = 'Creation Unliked'
        }else{
            updatedLikes = [...currentLikes, userIdStr]
            message = 'Creation Liked'
        }
        // now update on database
        const formattedArray = `{${updatedLikes.join(',')}}`
     
       await sql`UPDATE creations SET likes = ${formattedArray}::text[] WHERE id = ${id}`;

        res.json({ success: true, message });
    } catch (error) {
        res.json({ success: false, message: error.message });
    }
}