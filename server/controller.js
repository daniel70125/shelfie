module.exports = {
    getAll: (req, res) => {
        const db = req.app.get('db');

        db.get_inventory()
        .then(inventory => res.status(200).send(inventory))
        .catch(err => console.log(err))
    },
    create: (req, res) => {
        const db = req.app.get('db');
        const {img, name, price} = req.body
        
        db.create_product(img, name, price)
        .then(() => res.status(200))
        .catch(err => console.log(err)
        )
    },
    update: (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const {img, name, price} = req.body;

        db.update_inventory([id, img, name, price])
        .then(() => res.status(200))
        .catch(err => console.log(err))
    }
}