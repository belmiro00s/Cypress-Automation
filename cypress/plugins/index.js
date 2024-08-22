//Aqui podemos colocar plugins como por exemplo uma lib para se conectar num banco postgres

// module.exports = (on, config) => {
//     on("task", {
//         dbQuery:(query)=> require("cypress-postgres-10v-compatibility")(
//             query.query,
//             query.connection)
//     })
//     return config
// };