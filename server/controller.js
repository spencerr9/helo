module.exports = {
    register: (req, res, next) => {
        const dbInstance = req.app.get('db');
        const {username, password} = req.body;

        dbInstance.create_user([username, password])
            .then( () => res.status(200).send(`${username} is logged in`) )
            .catch( err => {
                res.status(500).send({errorMessage: `No diggity!`})
                console.log(err)
            })

        ;
    }
}