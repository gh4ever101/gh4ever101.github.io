function addToTeam($this) {
    // check for a free team slot
    var $freeSlot = $("ul.team .empty").first();
    if ($freeSlot.length <= 0) {
	return;
    }
    $freeSlot.removeClass("empty");

    // get the various elements
    var $figure = $freeSlot.children("figure.tfig");
    var $monstie = $figure.children("a.icons");
    var $element = $figure.children("div.elements")
    var $info = $freeSlot.children("div.info");
    var $name = $info.children("span.name");
    var $type = $info.children("span.type");

    // set the attributes of the monstie
    $monstie.attr("class", $this.attr("class"));
    $monstie.attr("href", "#!");
    $monstie.attr("onclick", "return removeFromTeam($(this));");
    $name.html($this.attr("title"));

    // get the metadata for the monstie
    var metadata = $this.parent().attr("class").split(' ');

    // parse through the metadata
    for (var k = 0; k < metadata.length; k++) {
	switch(metadata[k]) {
	case "power":
	    $type.html("Power");
	    break;
	case "speed":
	    $type.html("Speed");
	    break;
	case "technical":
	    $type.html("Technical");
	    break;
	case "dragon":
	case "fire":
	case "ice":
	case "thunder":
	case "water":
	    $element.attr("class", "elements "+metadata[k]);
	    break;
	default:
	    break;
	}
    }
}

function removeFromTeam($this) {
    // find the relevant elements
    var $figure = $this.parent();
    var $element = $figure.children("div.elements")
    var $li = $figure.parent();
    var $info = $li.children("div.info");
    var $name = $info.children("span.name");
    var $type = $info.children("span.type");

    // clear the relevant attributes
    $li.addClass("empty");
    $this.attr("class", "icons unknown_monster");
    $this.removeAttr("href");
    $this.removeAttr("onclick");
    $element.attr("class", "nelement");
    $name.html("???");
    $type.html("???");

    // return false to not reload the page
    return false;
}

$(document).ready(function() {
    $("ol.monsties .icons").click(function(e) {
	addToTeam($(this));
    });
});
