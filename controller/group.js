const groups = [];

exports.getSearchGroups = (req, res, next) =>{
    res.render("search",{
        pageTitle: "Search"
    })
     
 };
 exports.postSearchGroups = (req,res,next) =>{
    groups.push({title: req.body.title})
}

