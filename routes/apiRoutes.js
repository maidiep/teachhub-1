var db = require("../models");

module.exports = function(app) {
  //landing page
  app.get("/", function(req, res) {
      res.render("./partials/pages/index", null);
    });
  
  // get lessons by id
  app.get("/api/lesson/id/:id", function(req, res) {
    let lessons = {};
    let reviews = {};
    db.Lesson.findAll({
      raw:true,
      where: {
        id: req.params.id
      }
    }).then(function(retVal) {
      lessons=retVal;
    });
    db.Rating.findAll({
      raw:true,
      where: {
        LessonId: req.params.id
      }
    }).then(function(retVal){
      reviews=retVal;
      res.render("./partials/pages/product",{lessons:lessons[0],reviews:reviews})
    })
  });

  //get lessons by name ex: trigonometry
  app.get("/api/lessons/name/:name", function(req, res) {
    db.Lesson.findAll({
      where: {
        name: req.params.name
      }
    }).then(function(lessons) {
      res.render("./partials/pages/results",lessons);
    });
  });

  //get lessons by subject ex: math

  app.get("/api/lessons/subject/:subject", function(req, res) {
    db.Lesson.findAll({
      where: {
        subject: req.params.subject
      }
    }).then(function(lessons) {
      res.render("./partials/pages/results",lessons);
    });
  });

  // get lessons by gradeLevel ex: pre school

  app.get("/api/lessons/gradeLevel/:gradeLevel", function(req, res) {
    db.Lesson.findAll({
      where: {
        gradeLevel: req.params.gradeLevel
      }
    }).then(function(lessons) {
      res.json(lessons);
    });
  });

  // get lessons sorted by avgRating
  // /api/lessons?sort=ascending&col=avgRating
  // /api/lessons?sort=descending&col=avgRating

  // app.get("/api/lessons", function(req, res) {
  //   var sort = req.query.sort;
  //   var col = req.query.col;

  //   if (sort === "ascending") {
  //     db.Lesson.findAll({
  //       order: [[col, "ASC"]]
  //     }).then(function(lessons) {
  //       res.json(lessons);
  //     });
  //   } else {
  //     db.Lesson.findAll({
  //       order: [[col, "DESC"]]
  //     }).then(function(lessons) {
  //       res.json(lessons);
  //     });
  //   }
  // });

  app.get("/api/lessons/", function(req, res) {
    let queryObj = {};
    if(req.query.grade != "e" && req.query.grade) {
      queryObj["gradeLevel"] = parseInt(req.query.grade);
    }
    if(req.query.subject != "e" && req.query.subject) {
      queryObj["subject"] = req.query.subject.toLowerCase();
    }
    if(req.query.rating !="e" && req.query.rating) {
      queryObj["avgRating"] = req.query.rating;
    }
    db.Lesson.findAll({
      raw:true,
      where: queryObj
    }).then(function(lessons) {
      res.render("./partials/pages/results",{lessons:lessons});
    });
  });
  // get lessons sorted by ratingQuantity

  // /api/lessons?sort
  // getAllLessons
  // getLessonsByGradeLevel
  // getLessonsBySubject
  // getLessonsByRating
  // createLesson
  // updateRatings
  // createRatings
};
