//dashboard page
const router = require('express').Router();
const { Blog, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
  try {
    const allBlogs = await Blog.findAll({
      include: [{ model: User }]
    });
    res.status(200).json(allBlogs);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/byuser', async (req, res)=> {
  let allBlogsByUser = await BLog.findAll({
    where: {user_id: req.session.user_id}
  });
  let blogData = allBlogsByUser.map((blog)=> blog.get({plain: true}));

  res.render('dashboard', {blogData});
});

router.post('/addnew', async (req, res) => {
  const body = req.body;
  try {
    const newBlog = await Blog.create({
      ...body,
      user_id: req.session.user_id,
    });

    res.json(newBlog);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const blogData = await Blog.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!blogData) {
      res.status(404).json({ message: 'No blogs found with this id!' });
      return;
    }

    res.status(200).json(blogData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
