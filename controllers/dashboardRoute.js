const router = require('express').Router();
const { Blog } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const usersBlogs = await Blog.findAll();
        res.status(200).json(usersBlogs);
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/blog', withAuth, async (req, res)=> {
  let allBlogsByUser = await Blog.findAll({
    // where: {user_id: req.session.user_id}
  });
  let blogData = allBlogsByUser.map((blog)=> blog.get({plain: true}));

  res.render('dashboard', {blogData});
});
