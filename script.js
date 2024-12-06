const express = require('express');
const app = express();

app.use('/chaos', express.static(__dirname));

app.listen(3000, () => {
    console.log('Bad UI accessible at http://localhost:3000/chaos');
});
