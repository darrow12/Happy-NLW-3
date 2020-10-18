const Database = require('./db'); // Não é necessário colocar o .js | No caso, o "/db.js"
const saveOrphanage = require('./saveOrphanage')

Database.then(async db => {

    // Inserir dados na tabela
    await saveOrphanage(db, {
        lat: "-23.453535",
        lng: "-46.6366249",
        name: "Lar de amor",
        description: "Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.",
        images: [
            "https://images.unsplash.com/photo-1551966775-a4ddc8df052b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",

            "https://images.unsplash.com/photo-1453749024858-4bca89bd9edc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1307&q=80"
        ].toString(),
        instructions: "Venha como se sentir a vontade e traga muito amor e paciência para dar.",
        opening_hours: "Horário de visitas Das 18h até 8h",
        open_on_weekends: "1"
    })

    // Consultar dados da tabela
    const selectedOrphanages = await db.all("SELECT * FROM orphanages")
    console.log(selectedOrphanages)

    // Consultar somente 1 orfanato, pelo id
    const orphanage = await db.all('SELECT * FROM orphanages WHERE id = "3"')
    console.log(orphanage)
})