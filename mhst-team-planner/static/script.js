var hashes = ["", "",
	      "", "",
	      "", "",
	      "", "",
	      "", "",
	      "", ""]

function drag(e, dragged) {
    e.dataTransfer.setData("text/html", dragged.outerHTML);
}

function dragTeam(e, dragged) {
    e.dataTransfer.setData("text/plain", $(dragged).index());
}

function allowDrop(e) {
    e.preventDefault();
}

function drop(e) {
    e.preventDefault();
    var $ct = $(e.currentTarget);
    if (e.dataTransfer.types[0]==="text/html") {
	var $dropped = $(e.dataTransfer.getData("text/html"));
	if ($dropped.hasClass("delement")) {
	    changeElement($ct, $dropped);
	} else {
	    addToTeam($ct, $dropped);
	}
    } else {
	teamSwap($ct, parseInt(e.dataTransfer.getData("text/plain")));
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

function teamSwap($target, dropped_index) {
    var $dropped_item = $(".teamlist").children().eq(dropped_index);
    var target_index = $target.index();
    if (dropped_index == target_index) {
	return
    } else {
	var dropped_hashes = hashes.splice(2*dropped_index, 2);
	if (dropped_index > target_index) {
	    $dropped_item.insertBefore($target);
	    hashes.splice(2*target_index, 0, dropped_hashes[0], dropped_hashes[1]);
	} else if (dropped_index < target_index) {
	    $dropped_item.insertAfter($target);
	    hashes.splice(2*target_index, 0, dropped_hashes[0], dropped_hashes[1]);
	}
	window.location.hash = hashes.toString();
	$(".url")[0].value = window.location.href;
    }
}

function addToTeam($target, $dropped) {
    // toggle the emptiness of the slot
    $target.attr("class", "");

    // get the various elements
    var metadata = $dropped.attr("class").split(' ');
    var $icon = $dropped.children("div");
    var $figure = $target.children("figure.tfig");
    var $monstie = $figure.children("a.icons");
    var $element = $figure.children("div.elements")
    var $info = $target.children("div.info");
    var $name = $info.children("span.name");
    var $type = $info.children("div.type");

    // set the attributes of the monstie
    $monstie.attr("class", $icon.attr("class"));
    $monstie.attr("href", "#!");
    $monstie.attr("onclick", "return removeFromTeam($(this));");
    $name.html($icon.attr("title"));
    $target.attr("draggable", "true");
    $target.attr("ondragstart", "dragTeam(event, this)");
    $target.attr("title", $icon.attr("title"));

    // parse through the metadata
    var newElement = "";
    for (var i = 0; i < metadata.length; i++) {
	switch(metadata[i]) {
	case "power":
	    $type.html("");
	    $type.attr("class", "type power");
	    $type.attr("title", "Power");
	    break;
	case "speed":
	    $type.html("");
	    $type.attr("class", "type speed");
	    $type.attr("title", "Speed");
	    break;
	case "technical":
	    $type.html("");
	    $type.attr("class", "type technical");
	    $type.attr("title", "Technical");
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
    var $type = $info.children("div.type");

    // clear the relevant attributes
    $this.attr("class", "icons unknown_monster");
    $this.removeAttr("href");
    $this.removeAttr("onclick");
    $element.attr("class", "elements nelement");
    $name.html("???");
    $type.attr("class", "type");
    $type.removeAttr("title");
    $type.html("???");
    $li.attr("class", "empty");
    $li.attr("title", "Unknown");
    $li.removeAttr("draggable");
    $li.removeAttr("ondragstart");
    hashes[2*$li.index()] = "";
    hashes[2*$li.index()+1] = "";
    window.location.hash = hashes.toString();
    $(".url")[0].value = window.location.href;

    // return false to not reload the page
    return false;
}

$(document).ready(function() {
    // load the filters
    $(".filter").multiselect({
	buttonWidth: "10em",
	includeSelectAllOption: true,
	numberDisplayed: 1
    });

    // load the team if there was a hash
    if (window.location.hash !== "" && window.location.hash !== "#" && window.location.hash !== "#!") {
	var original_hashes = window.location.hash.split('#')[1].split(',');
	for (var i = 0; i < original_hashes.length; i++) {
	    if (original_hashes[i] === "") {
		continue;
	    }
	    var $target = $(".teamlist").children().eq(Math.floor(i/2));
	    if (i%2 == 0) {
		addToTeam($target, $("div[title='"+original_hashes[i].replace(/_/g, ' ')+"']").parent());
	    } else {
		changeElement($target, $(".delement."+original_hashes[i]));
	    }
	}
    }
    $(".url")[0].value = window.location.href;
});
