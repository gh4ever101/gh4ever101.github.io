function drag(e, dragged){
    e.dataTransfer.setData("text/html", dragged.outerHTML);
}

function allowDrop(e) {
    e.preventDefault();
}

function drop(e) {
    var $dropped = $(e.dataTransfer.getData("text/html"));
    if ($dropped.hasClass("delement")) {
	changeElement($(e.currentTarget), $dropped)
    } else {
	addToTeam($(e.currentTarget), $dropped)
    }
}

function filterMonsties() {
    var $filters = $(".filter");
    var $monsties = $(".monsties").children();
    for (var i = 0; i < $monsties.length; i++) {
	$monstie = $monsties.eq(i);
	$monstie.removeClass("hidden");
	for (var j = 0; j < $filters.length; j++) {
	    var keys = $filters.eq(j).val();
	    var hasKey = false;
	    for (var k = 0; k < keys.length; k++) {
		if ($monstie.hasClass(keys[k])) {
		    hasKey = true;
		    break;
		}
	    }
	    if (hasKey == false) {
		$monstie.addClass("hidden");
	    }
	}
    }
}

var hashes = ["", "",
	      "", "",
	      "", "",
	      "", "",
	      "", "",
	      "", ""]

function changeElement($target, $dropped) {
    if ($target.hasClass("empty")) {
	return;
    } else {
	var metadata = $dropped.attr("class").split(' ');
	var newElement;
	for (var i = 0; i < metadata.length; i++) {
	    if (metadata[i] === "delement") {
		continue;
	    } else {
		newElement = metadata[i];
		$target.children("figure.tfig").children("div.elements").attr("class", "elements "+newElement);
	    }
	}
	hashes[2*$target.index()+1] = newElement;
	window.location.hash = hashes.toString();
	$(".url")[0].value = window.location.href;
    }
}

function addToTeam($target, $dropped) {
    // toggle the emptiness of the target
    $target.attr("class", "");

    // get the various elements
    var metadata = $dropped.attr("class").split(' ');
    var $icon =$dropped.children("div");
    var $figure = $target.children("figure.tfig");
    var $monstie = $figure.children("a.icons");
    var $element = $figure.children("div.elements")
    var $info = $target.children("div.info");
    var $name = $info.children("span.name");
    var $type = $info.children("span.type");

    // set the attributes of the monstie
    $monstie.attr("class", $icon.attr("class"));
    $monstie.attr("href", "#!");
    $monstie.attr("onclick", "return removeFromTeam($(this));");
    $name.html($icon.attr("title"));

    // parse through the metadata
    var newElement = "";
    for (var i = 0; i < metadata.length; i++) {
	switch(metadata[i]) {
	case "power":
	    $type.html("Power");
	    break;
	case "speed":
	    $type.html("Speed");
	    break;
	case "technical":
	    $type.html("Technical");
	    break;
	case "nelement":
	    $element.attr("class", "elements nelement");
	    break;
	case "dragon":
	case "fire":
	case "ice":
	case "thunder":
	case "water":
	    newElement = metadata[i];
	    $element.attr("class", "elements "+newElement);
	    break;
	default:
	    break;
	}
    }
    hashes[2*$target.index()] = $icon.attr("title").replace(/ /g, "_");
    hashes[2*$target.index()+1] = newElement;
    window.location.hash = hashes.toString();
    $(".url")[0].value = window.location.href;
}

function removeFromTeam($this) {
    // find the relevant elements
    var $figure = $this.parent();
    var $li = $figure.parent();
    var $element = $figure.children("div.elements")
    var $li = $figure.parent();
    var $info = $li.children("div.info");
    var $name = $info.children("span.name");
    var $type = $info.children("span.type");

    // clear the relevant attributes
    $this.attr("class", "icons unknown_monster");
    $this.removeAttr("href");
    $this.removeAttr("onclick");
    $element.attr("class", "elements nelement");
    $name.html("???");
    $type.html("???");
    $li.attr("class", "empty");
    hashes[2*$li.index()] = "";
    hashes[2*$li.index()+1] = "";
    window.location.hash = hashes.toString();
    $(".url")[0].value = window.location.href;

    // return false to not reload the page
    return false;
}

$(document).ready(function() {
    // load the filters
    $(".filter").multiselect();

    // load the team if there was a hash
    if (window.location.hash !== "") {
	var original_hashes = window.location.hash.split('#')[1].split(',');
	for (var i = 0; i < original_hashes.length; i++) {
	    if (original_hashes[i] === "") {
		continue;
	    }
	    var $target = $(".teamlist").children().eq(Math.floor(i/2));
	    if (i%2 == 0) {
		addToTeam($target, $("div[title='"+original_hashes[i].replace(/_/g, ' ')+"']").parent());
	    } else {
		console.log($(".delement."+original_hashes[i]));
		changeElement($target, $(".delement."+original_hashes[i]));
	    }
	}
    }
    $(".url")[0].value = window.location.href;
});
