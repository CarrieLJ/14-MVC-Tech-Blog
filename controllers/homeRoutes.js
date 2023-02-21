const router = require('express').Router();
const { Blog, User } = require('../models');
const withAuth = require('../utils/auth');

router.get('/', async (req, res) => {
  try {
    const blogsData = await Blog.findAll({
      include: [
        {
          model: User,
          attributes: ['id'],
        },
      ],
    });

    // Serialize data so the template can read it
    const blogs = blogsData.map((blogs) => blogs.get({ plain: true }));
    res.render('homepage', { 
      blogs, 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/blogs/:id', async (req, res) => {
  try {
    const blogsData = await Blog.findByPk(req.params.id, {
      include: [
        {
          model: User,
          attributes: ['id'],
        },
      ],
    });

    const blogs = blogsData.get({ plain: true });

    res.render('homepage', {
      ...blogs,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/homepage', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('homepage');
});

router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/dashboard', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('addblog', {
    layout: 'dashboard',

  });
});

router.get('/signup', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('signup');
});

module.exports = router;
