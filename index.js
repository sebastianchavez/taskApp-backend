const app = require('./app')
require('./config/db')

const main = async () => {
    try {
        await app.listen(3000)
        console.log(`Server on port 3000`)
    } catch (e) {
        console.log(e)
    }
}

main()