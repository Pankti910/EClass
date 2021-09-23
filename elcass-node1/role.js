const accessControl=require("accesscontrol");
const ac =new accessControl();

exports.roles=(function(){
    ac.grant("teacher").readOwn("profile").updateOwn("profile")
    ac.grant("student").extend("teacher").readAny("profile")
    ac.grant("admin").extend("teacher").extend("student").updateAny("profile").deleteAny("profile")
    return ac;

})();