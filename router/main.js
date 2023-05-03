const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    // console.log(req);
    res.render('index');
});

const array =[
    {head : 'Стаття 1', 
    body : 'У великих водах, що існують від віків, серед табунів мовчазної риби у шанованих рибячою громадою батьків, народилася балакуща риба. Спочатку, коли риба була маленькою, засмучені батьки сподівалися, що з віком, як їхня дитина вбиватиметься в луску, це мине, як минають дитячі хвороби, але час ішов, риба ставала великою і пругкою, на ній полискувала вже луска, як викута з найліпшої дамаської криці, а балакущість риби, не тільки не зникала, а навпаки набрала такої вправности, що батькам уже незручно стало признаватися, що вони належать до одної родини.'},
    {head : 'Стаття 2', 
    body : 'Балакуща риба, яка, крім балакучости й доброго серця, була ще дуже молодою, не розуміла, чому сумують батьки, коли так приємно говорити, адже яка розкіш вимовити слово, а тоді дивитися, як воно кольоровими бульбашками рухається крізь воду, одного разу навіть підсліпуватий хижак, що доживав віку на дні, на свій сором, не розгледівши, що то не червяк, спокусився цими бульбашками й проковтнув кілька; але бачачи, як батька й матір убиває неслава, що випала на їх долю, якось, коли сонце пронизало води до дна, засвітивши коралові кущі, де так добре було гратись у схованки й гукати на весь голос в коралові діри, жахаючи батьків і сусідів, балакуща риба попрощалася з блакитними водоростями, де жила її рідня, і, війнувши хвостом, попливла шукати іншого табуна.'},
    {head : 'Стаття 3', 
    body : 'Але і в іншому табуні говорющій рибі не знайшлося співрозмовника. Хоч і скільки їм риба розповідала пригод, хоч і скільки показувала, як легко й приємно говорити, вистачає тільки розтулити рота, і голос так і стелиться по воді, всі риби, що траплялись на дорозі говіркої риби, мовчки затулялися плавниками й тікали, і скоро до найвіддаленіших закутків великої води стало відомо, що балакуща риба, говорячи без упину, заважає рибам зосередитися, а це порушує гідність рибячу.'}

];

router.get('/arcticalGET', (req, res) => {
    console.log('req.query GET', req.query);
    res.json(array);
});

router.post('/input', (req, res) => {
    console.log('req.query POST', req.query);
    console.log('req.body POST', req.body);
    let headFront = req.body.inputText;
    let textArea = req.body.textArea;

    // console.log('req.body.inputText <<FRONT>>>', headFront);

    const arcArray = {
        head: headFront, 
        body : textArea
    };
    const resultMap = array.push(arcArray);
    // console.log('array', array);
    console.log('resultMap', resultMap);
    res.json(resultMap);
});

module.exports = router;