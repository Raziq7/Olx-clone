import jwt from 'jsonwebtoken'
    import dotenv from 'dotenv'
    dotenv.config()

const generatorToken=(id)=>{
    return jwt.sign({id},process.env.JWT_AUTH_TOCEN,{
        expiresIn: '30d'
    })
}
export default generatorToken