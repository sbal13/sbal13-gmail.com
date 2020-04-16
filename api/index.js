const express = require('express');
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express();

app.use(cors())
app.use(bodyParser.json());

const { User, Article, Category, Comment } = require('./models')

const PORT = 8080;

app.get('/users', async (req, res) => {
  res.send(await User.findAll());
});

app.get('/categories', async (req, res) => {
  res.send(await Category.findAll({ include: Article }));
});

app.get('/users/:id', async (req, res) => {
  const user = await User.findOne(
    {where: {id: req.params.id}
  })

  if (user) {
    res.send(user);
  } else {
    res.send({error: "User not found"})
  }
});

app.post('/login', async (req, res) => {
  const [user, created] = await User.findOrCreate({
    where: {username: req.body.username}
  })

  res.send(user);
});

app.delete('/users/:id', async (req, res) => {
  const user = await User.findByPk(req.params.id)

  if (user) {
    user.destroy()
    res.send({success: "User deleted"});
  } else {
    res.send({error: "User not found"})
  }
});

app.post('/categories', async (req, res) => {
  const category = await Category.create({
    name: req.body.name
  })

  res.send(category);
});

app.get("/seed", async (req, res) => {
  const text = `Bilge rat heave down American Main bounty jolly boat cog trysail transom Buccaneer walk the plank. Salmagundi yawl overhaul tack Admiral of the Black interloper lee sutler ho mizzen. Piracy no prey, no pay Chain Shot draught tack lugsail quarterdeck hands spyglass coffer. \n Haul wind stern tackle gaff square-rigged crack Jennys tea cup nipper carouser lass Shiver me timbers. Case shot reef belay to go on account nipperkin careen spirits parrel booty heave to. Privateer Yellow Jack salmagundi warp execution dock chantey gunwalls stern bucko brigantine. \n Nipperkin case shot loot killick draught rutters no prey, no pay lass jury mast Sail ho. Gaff rope's end belaying pin bucko spirits quarter fire in the hole Arr ye red ensign. Holystone lad ballast Yellow Jack mutiny spirits heave to lugsail cog Sail ho.`
  const categories = await Category.findAll()
  
  for (let i = 0; i < 10; i++){
    const index = Math.floor(Math.random()*categories.length)
    const categoryId = categories[index].id

    await Article.create({
      title: "Some article",
      text,
      categoryId
    })
  }

  res.send({message: "Success"})
})

app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}/`);
});