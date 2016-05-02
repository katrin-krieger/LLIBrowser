var { ActionButton } = require("sdk/ui/button/action");
var tabs = require("sdk/tabs");
var data = require("sdk/self").data; 

var isCalled=false;

var button = ActionButton({
    id: "my-button",
    label: "my button",
    icon: {
      "16": "./icon-16.png",
      "32": "./icon-32.png",
      "64": "./icon-64.png"
    },
    onClick: newTab
  });

function newTab(state){
if (isCalled)
{
	var pluginRunning="alert(\"Plug-In LLIBrowser is running\");";
	tabs.activeTab.attach({
  		contentScriptFile: data.url("alert.js")
	});
}

else
{
	isCalled=true;
	/*var createOverlay = "var div = document.createElement('div');"+
	"div.style.width = '100%';"+
  "div.style.height = '150px';"+
  "div.style.background = '#313192';"+
  "div.style.color = 'white';"+
  		"div.innerHTML='<script type=\"text/javascript\" src=\"angular.min.js\"></script>"+
    "<script type=\"text/javascript\" src=\"app.js\"></script>"+
      "<form>"+
        "<label for=\"video\" style=\"color: white\"> <input type=\"checkbox\" checked=\"checked\" name=\"video\" value=\"video\" id=\"video\" /> Video</label>"+
        "<label for=\"forum\" style=\"color: white\"> <input type=\"checkbox\" checked=\"checked\" name=\"forum\" value=\"forum\" id=\"forum\" /> Forum</label>"+
        "<img src=\"data/icon-32.png\" alt=\"Help\" style=\"width:20px;height:20px;\" align=right>"+
        "<img src=\"data/icon-32.png\" alt=\"Close\" style=\"width:20px;height:20px;\" align=right>"+
      "</form>"+
      "<div style=\"margin: 0 auto; left: 10px; top: 50px; width: 98%; height: 50%; align: middle; background-color:#75bbf7; visibility: visible\">"+
        "<div ng-show=\"tab == 1\">"+
          "<form>"+
            "<h3 style=\"color: white; align: center\">Video1 Video2 Video3 Video4</h3>"+
          "</form>"+
        "</div>"+
        "<div ng-show=\"tab == 2\">"+
          "<form>"+
            "<h3 style=\"color: white; align: center\">Forum1 Forum2 Forum3 Forum4</h3>"+
          "</form>"+
        "</div>"+
      "</div>"+
      "<form style=\"margin: 0 auto; left: 10px; top: 50px; width: 98%;align: middle; background-color:#313192; visibility: visible\">"+
			"<a href=\"#video\" style=\"color: white; background-color: #75bbf7; height: 15px; padding: 5 auto\" ng-click=\"tab = 1\">Video</a>"+
			"<a href=\"#forum\" style=\"color: white; background-color: #313192; height: 15px; padding: 5 auto\" ng-click=\"tab = 2\">Forum</a>"+
			"</form>';"+
  		"document.body.insertBefore(div,document.body.firstChild);";	*/
      
	
	tabs.activeTab.attach({
  		contentScriptFile: data.url("contentscript.js")
	});
}
}