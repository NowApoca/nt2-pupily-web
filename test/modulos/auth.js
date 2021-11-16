import TokenHandler from "../../src/modulos/session/token.js"

const jwtSecret = 'sarasa'


async function testTokenHandler(){
    const tokenHandler = new TokenHandler(jwtSecret)
    const data = {
        nombre: 'juan'
    }
    const token = await tokenHandler.serializeSession(data)
    console.log(`TOKEN: ${token}`)
    const deserializedData = await tokenHandler.deserializeSession(token)
    console.log(`Deserialized Data: `)
    console.log(deserializedData)
}

testTokenHandler()