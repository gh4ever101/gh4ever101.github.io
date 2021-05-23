const SpacingSize = 30;
var team = [];
var $currentBingoSlot;
var currentTeamIndex;

function findWithName(name, array) {
    for (var key in array) {
	if (name == array[key].name) {
	    return key;
	}
    }
}

function objToButton(obj) {
    var buf;
    if (obj.c == 'gene') {
	buf = '<li><button class="listed-gene ' + obj.key  + '">';
	buf += '<span>'+obj.name+'</span>';
	buf += '</button></li>';
    } else {
	buf = '<li><button class="listed-monstie ' + obj.key  + '">';
	buf += '<span>'+obj.name+'&nbsp</span>';
	buf += '<span>'+obj.type+'&nbsp</span>';
	buf += '<span>'+obj.defaultElement+'&nbsp</span>';
	buf += '</button></li>';
    }
    return buf;
}

function buttonToKey(buttonClass) {
    if (buttonClass.length <= 0) {
	return 'empty';
    } else {
	classes = buttonClass.split(' ');
	if (classes.length == 1) {
	    return 'empty';
	} else {
	    return classes[1];
	}
    }
}

function importTeam() {
    var tmpTeam = [];
    try {
	var importedTeam = $('#export-text-area').val().split(/[\r\n]+|\-/).filter(_=>_);
	for (var i = 0; i < importedTeam.length; i++) {
	    if (i%10 == 0) {
		tmpTeam.push({
		    monstie: findWithName(importedTeam[i].trim(), Monsties),
		    genes: []
		});
	    } else {
		var tmpTeamMember = tmpTeam[Math.floor(i/10)];
		tmpTeamMember.genes[i%10-1] = findWithName(importedTeam[i].trim(), Genes);
	    }
	}
	team = tmpTeam;
	teamView();
    }
    catch {
	alert('Team format invalid :(');
    }
}

function teamView() {
    var exportText = '';
    var buf = '<h2>Your Team</h2>';
    buf += '<ol class="team">';
    for (var i = 0; i < team.length; i++) {
	monstObj = Monsties[team[i].monstie];
	/*
	var eAtks = [monstMeta.datk, monstMeta.fatk, monstMeta.iatk, monstMeta.tatk, monstMeta.watk]
	var eAtkI = eAtks.reduce((aMax, x, j, arr) => x > arr[aMax] ? j : aMax, 0);
	// TODO: add gene modifiers
	if (eAtks[eAtkI] < 4) {
	    monstieClass += ' nelement';
	} else if (eAtkI == 0) {
	    monstieClass += ' dragon';
	} else if (eAtkI == 1) {
	    monstieClass += ' fire';
	} else if (eAtkI == 2) {
	    monstieClass += ' ice';
	} else if (eAtkI == 3) {
	    monstieClass += ' thunder';
	} else if (eAtkI == 4) {
	    monstieClass += ' water';
	}
	*/
	buf += '<li><div class=team-monstie "'+team[i].monstie+'"></div></li>';
	exportText += monstObj.name;
	for (var j = 0; j < 9; j++) {
	    if (j%3==0) {
		exportText += '\r\n';
	    }
	    var geneName = Genes[team[i].genes[j]].name;
	    var remainingChars = SpacingSize - geneName.length;
	    for (var k = 0; k < Math.floor(remainingChars/2); k++) {
		exportText += ' ';
	    }
	    exportText += geneName;
	    for (var k = 0; k < remainingChars/2; k++) {
		exportText += ' ';
	    }
	    if (j%3!=2) {
		exportText += ' - ';
	    }
	}
	exportText += '\r\n\r\n\r\n';
    }
    buf += '</ol>';
    buf += '<button type="button" class="btn btn-primary" role="button" id="addMonstieButton">Add Monstie</button>';
    buf += '<section id="export">';
    buf += '<span>Import/export your team!</span>';
    buf += '<textarea id="export-text-area">';
    buf += exportText;
    buf += '</textarea>';
    buf += '<button type="button" class="btn btn-primary btn-small" role="button" id="importTeam">Import</button>';
    buf += '</section>';
    $('#viewer').html(buf);
    $('#export-text-area').val(exportText);
}

function filterGenes() {
    var $gl = $('#gene-list');
    var search = $currentBingoSlot.children().eq(
	0).val().toUpperCase().split(' ');
    var buf = '';
    for (var key in Genes) {
	var gene = Genes[key];
	if (gene.id < 0) {
	    continue;
	}
	var name = gene.name.toUpperCase();
	var type = gene.type.toUpperCase();
	var element = gene.element.toUpperCase();
	var sat = true;
	for (var i = 0; i < search.length; i++) {
	    var keyword = search[i];
	    if (!(name.includes(keyword)
		  || type.includes(keyword)
		  || element.includes(keyword))) {
		sat = false;
		break;
	    }
	}
	if (sat) {
	    buf += objToButton(gene);
	}
    }
    $gl.html(buf);
}

function filterMonsties() {
    var $ml = $('#monstieList');
    var search = $('#monstieSearch').val().toUpperCase().split(' ');
    var buf = '';
    for (var key in Monsties) {
	var monstie = Monsties[key];
	if (monstie.id < 0) {
	    continue;
	}
	var name = monstie.name.toUpperCase();
	var type = monstie.type.toUpperCase();
	var element = monstie.defaultElement.toUpperCase();
	var sat = true;
	for (var i = 0; i < search.length; i++) {
	    var keyword = search[i];
	    if (!(name.includes(keyword)
		  || type.includes(keyword)
		  || element.includes(keyword))) {
		sat = false;
		break;
	    }
	}
	if (sat) {
	    buf += objToButton(monstie);
	}
    }
    $ml.html(buf);
}

function addMonstie(e) {
    var monstieKey = buttonToKey($(e.currentTarget).attr('class'));
    team.push({
	monstie: monstieKey,
	genes: ['empty', 'empty', 'empty',
		'empty', 'empty', 'empty',
		'empty', 'empty', 'empty']
    });
    bingoView();
}

function builderView(e) {
    // TODO: add different monstie indices depending on what was pressed
    currentTeamIndex = team.length;
    var buf = '<button type="button" class="btn btn-secondary" role="button" id="teamButton">Team</button>';
    buf += '<input id="monstieSearch"></input>';
    buf += '<ol id="monstieList">';
    for (var key in Monsties) {
	var monstie = Monsties[key];
	if (monstie.id >= 0) {
	    buf += objToButton(monstie);
	}
    }
    buf += '</ol>';
    $('#viewer').html(buf);
}

function addGene(e) {
    var geneKey = buttonToKey($(e.currentTarget).attr('class'));
    console.log($(e.currentTarget));
    var geneName = Genes[geneKey].name;
    $currentBingoSlot.children().eq(0).val(geneName);
    var slotIndex = $currentBingoSlot.index();
    team[currentTeamIndex].genes[slotIndex] = geneKey;
    if (slotIndex == 8) {
	slotIndex = 7;
    }
    $currentBingoSlot = ($currentBingoSlot.parent()).children().eq(slotIndex+1);
}

function bingoView() {
    var buf = '<button type="button" class="btn btn-secondary" role="button" id="teamButton">Team</button>';
    buf += '<div class=monstie '+team[currentTeamIndex]+'></div>';
    buf += '<ol id="bingo-slots">';
    buf += '<li class="gene-search" id="ul"><input></input></li>';
    buf += '<li class="gene-search" id="uc"><input></input></li>';
    buf += '<li class="gene-search" id="ur"><input></input></li>';
    buf += '<li class="gene-search" id="cl"><input></input></li>';
    buf += '<li class="gene-search" id="cc"><input></input></li>';
    buf += '<li class="gene-search" id="cr"><input></input></li>';
    buf += '<li class="gene-search" id="bl"><input></input></li>';
    buf += '<li class="gene-search" id="bc"><input></input></li>';
    buf += '<li class="gene-search" id="br"><input></input></li>';
    buf += '</ol>';
    buf += '<ol id="gene-list">';
    for (var key in Genes) {
	var gene = Genes[key];
	if (gene.id >= 0) {
	    buf += objToButton(gene);
	}
    }
    buf += '</ol>';
    $('#viewer').html(buf);
    $currentBingoSlot = $('#ul');
}

$(document).ready(function () {
    $('#viewer').on('click', '#addMonstieButton', builderView);
    $('#viewer').on('click', '#teamButton', teamView);
    $('#viewer').on('click', '#importTeam', importTeam);
    $('#viewer').on('keyup', '#monstieSearch', filterMonsties);
    $('#viewer').on('keyup', '.gene-search', filterGenes);
    $('#viewer').on('click', '.listed-monstie', addMonstie);
    $('#viewer').on('click', '.listed-gene', addGene);
    $('#viewer').on('focus', '.gene-search', function (e) {
	$currentBingoSlot = $(e.currentTarget);
    });
    teamView();
});
