// set the gene spacing size for the team exporter
const SpacingSize = 30;

// set the namespace
var TeamBuilder = {};

/**
 * Find the first element in a dictionary with the given name property.
 * @param {string} name The name to find.
 * @param {Object} dict The dictionary to search through.
 * @returns {string} The key of the first satisfying element. 
 */
function findWithName(name, dict) {
    for (var key in dict) {
	if (name === dict[key].name) {
	    return key;
	}
    }
}

/**
 * Convert an Object into a button element.
 * @param {Object} obj The object to convert.
 * @returns {string} The HTML of the button element.
 */
function objToButton(obj) {
    var buf;
    if (obj.c === 'gene') {
	buf = '<li><button class="btn btn-sml listed-gene '
	    + obj.key + ' '
	    + obj.type + ' '
	    + obj.element
	    + '" title="' + obj.name  + '">';
	buf += '<span>' + obj.name + '</span>';
	buf += '<div class="listed-img-container g">';
	buf += '<div class="listed-cont type"></div>';
	buf += '<div class="listed-cont element"></div>';
	buf += '</div></button></li>';
    } else {
	buf = '<li><button class="btn btn-sml listed-monstie '
	    + obj.key + ' '
	    + obj.type + ' '
	    + obj.defaultEl
	    + '" title="' + obj.name  + '">';
	buf += '<span listed-cont name>' + obj.name + '</span>';
	buf += '<div class="listed-img-container m">';
	buf += '<div class="listed-cont type"></div>';
	buf += '<div class="listed-cont element"></div>';
	buf += '</div></button></li>';
    }
    return buf;
}

/**
 * Convert a button element's class into its associated key.
 * @param {string} buttonClass The class of the button element.
 * @returns {string} The key associated with the button element.
 */
function buttonToKey(buttonClass) {
    if (buttonClass.length <= 0) {
	return 'empty';
    } else {
	classes = buttonClass.split(' ');
	if (classes.length < 4) {
	    return 'empty';
	} else {
	    return classes[3];
	}
    }
}

/**
 * Import a team.
 */
function importTeam() {
    // set a buffer for the team in case the format is invalid
    var tmpTeam = [];

    // try reading the team
    try {
	// regex to split the elements of the team
	var importedTeam = $('#export-text-area').val().split(/[\r\n]+|\|/).filter(_=>_);

	// iterate through the split imported text
	for (var i = 0; i < importedTeam.length; i++) {
	    // instantiate a new team member that is the correct monstie
	    if (i%10 == 0) {
		if (tmpTeam.length < 6) {
		    tmpTeam.push({
			monstie: findWithName(importedTeam[i].trim(), Monsties),
			genes: ['empty', 'empty', 'empty',
				'empty', 'empty', 'empty',
				'empty', 'empty', 'empty'],
			bingos: {
			    dragon: '0',
			    fire: '0',
			    ice: '0',
			    thunder: '0',
			    water: '0',
			    power: '0',
			    speed: '0',
			    technical: '0',
			    any: '0',
			    nelement: '0'
			}
		    });
		}
		// quit early if the imported team is too long
		else {
		    break;
		}
	    }
	    // set the genes of the new monstie
	    else {
		var tmpTeamMember = tmpTeam[Math.floor(i/10)];
		tmpTeamMember.genes[i%10-1] = findWithName(importedTeam[i].trim(), Genes);
	    }
	}

	// set the bingos
	var tmpTeamLength = tmpTeam.length
	for (var i = 0; i < tmpTeamLength; i++) {
	    updateBingos(tmpTeam[i]);
	}

	// blank out the unfilled team members
	for (var i = 0; i < 6-tmpTeamLength; i++) {
	    tmpTeam.push({
		monstie: 'empty',
		genes: ['empty', 'empty', 'empty',
			'empty', 'empty', 'empty',
			'empty', 'empty', 'empty'],
		bingos: {
		    dragon: '0',
		    fire: '0',
		    ice: '0',
		    thunder: '0',
		    water: '0',
		    power: '0',
		    speed: '0',
		    technical: '0',
		    any: '0',
		    nelement: '0'
		}
	    });
	}

	// set the team to the new team
	TeamBuilder.team = tmpTeam;

	// reset the team view
	teamView();
    }
    // warn the user on failure
    catch {
	alert('Team format invalid :(');
    }
}

/**
 * Refresh the monstie list based on the given filter.
 * @param {boolean} [filter=true] Whether or not to use the filter text when refreshing the list.
 */
function filterMonsties(filter = true) {
    // set the buffer
    var buf = '<ol class="data-list" id="monstie-list">';

    // get the search text
    var search = $('.monstie-search').val().toUpperCase().split(' ');

    // ignore filtering if the search text is trivial
    if (search[0] === Monsties['empty'].name.toUpperCase()) {
	filter = false;
    }

    // loop through the monstie list
    var counter = 0;
    var highlightedKey;
    for (var key in Monsties) {
	// skip filler monsties
	var monstie = Monsties[key];
	if (monstie.id < 0) {
	    continue;
	}

	// perform the filtering
	// filters out monsties with names, types, and elements
	// not containing the search text
	var sat = true;
	if (filter) {
	    var name = monstie.name.toUpperCase();
	    var type = monstie.type.toUpperCase();
	    var element = monstie.defaultEl.toUpperCase();
	    for (var i = 0; i < search.length; i++) {
		var keyword = search[i];
		if (!(name.includes(keyword)
		      || type.includes(keyword)
		      || element.includes(keyword))) {
		    sat = false;
		    break;
		}
	    }
	}

	// only display the monstie if it satisfies the filter
	if (sat) {
	    buf += objToButton(monstie);
	    if (counter <= TeamBuilder.highlightedIndex) {
		highlightedKey = key;
	    }
	    counter++;
	}
    }

    // update the monsties with the filtered HTML
    buf += '</ol>';
    $('#data-list-container').html(buf);

    // prevent overscrolling of the highlighted monstie
    // underscrolling prevented on up arrow input
    if (TeamBuilder.highlightedIndex >= counter) {
	TeamBuilder.highlightedIndex = counter - 1;
    }

    // set the highlighted monstie assuming one was found
    if (counter > 0) {
	var $highlightedMonstie = $('#monstie-list').find('.'+highlightedKey);
	$highlightedMonstie[0].scrollIntoView({
	    block: 'nearest'
	});
	$highlightedMonstie.addClass('highlighted');
    }
}

/**
 * Refresh the gene list based on the given filter.
 * @param {boolean} [filter=true] Whether or not to use the filter text when refreshing the list.
 */
function filterGenes(filter = true) {
    // set the buffer
    var buf = '<ol class="data-list" id="gene-list">';

    // get the search text
    var search = TeamBuilder.$currentBingoSlot.val().toUpperCase().split(' ');

    // ignore filtering if the search text is trivial
    if (search[0] === Genes['empty'].name.toUpperCase()) {
	filter = false;
    }

    // loop through the gene list
    var counter = 0;
    var highlightedKey;
    for (var key in Genes) {
	// skip filler genes
	var gene = Genes[key];
	if (gene.id < 0) {
	    continue;
	}

	// perform the filtering
	// filters out genes with names, types, and elements
	// not containing the search text
	var sat = true;
	if (filter) {
	    var name = gene.name.toUpperCase();
	    var type = gene.type.toUpperCase();
	    var element = gene.element.toUpperCase();
	    for (var i = 0; i < search.length; i++) {
		var keyword = search[i];
		if (!(name.includes(keyword)
		      || type.includes(keyword)
		      || element.includes(keyword))) {
		    sat = false;
		    break;
		}
	    }
	}

	// only display the gene if it satisfies the filter
	if (sat) {
	    buf += objToButton(gene);
	    if (counter <= TeamBuilder.highlightedIndex) {
		highlightedKey = key;
	    }
	    counter++;
	}
    }

    // update the genes with the filtered HTML
    buf += '</ol>';
    $('#data-list-container').html(buf);

    // prevent overscrolling of the highlighted gene
    // underscrolling prevented on up arrow input
    if (TeamBuilder.highlightedIndex >= counter) {
	TeamBuilder.highlightedIndex = counter - 1;
    }

    // set the highlighted gene assuming one was found
    if (counter > 0) {
	var $highlightedGene = $('#gene-list').find('.'+highlightedKey);
	$highlightedGene[0].scrollIntoView({
	    block: 'nearest'
	});
	$highlightedGene.addClass('highlighted');
    }
}

/**
 * Update the HTML for a monstie document element.
 * @param {Object} teamMember The team member to update the icon to.
 * @param {jQuery} $monstieHTML The document element to update.
 */
function updateMonstieHTML(teamMember, $monstieHTML) {
    // set the base elemental attack stats for the monstie
    var baseEAttks = {
	dragon: parseInt(Monsties[teamMember.monstie].eAttk.dragon),
	fire: parseInt(Monsties[teamMember.monstie].eAttk.fire),
	ice: parseInt(Monsties[teamMember.monstie].eAttk.ice),
	thunder: parseInt(Monsties[teamMember.monstie].eAttk.thunder),
	water: parseInt(Monsties[teamMember.monstie].eAttk.water)
    }

    // calculate elemental attack modifiers from genes
    for (var i = 0; i < 9; i++) {
	baseEAttks['dragon'] += parseInt(Genes[teamMember.genes[i]].eAttkMods['dragon']);
	baseEAttks['fire'] += parseInt(Genes[teamMember.genes[i]].eAttkMods['fire']);
	baseEAttks['ice'] += parseInt(Genes[teamMember.genes[i]].eAttkMods['ice']);
	baseEAttks['thunder'] += parseInt(Genes[teamMember.genes[i]].eAttkMods['thunder']);
	baseEAttks['water'] += parseInt(Genes[teamMember.genes[i]].eAttkMods['water']);
    }

    // calculate the element of the monstie
    var aMax = 'dragon';
    for (var element in baseEAttks) {
	// TODO: fix bug in element when tied
	aMax = baseEAttks[element] > baseEAttks[aMax] ? element : aMax;
    }

    // set the element class to be the correct monstie in addition to its element
    $monstieHTML.attr('class', $monstieHTML.attr('class').split(' ')[0]+' monstie-icon '+teamMember.monstie);
    if (baseEAttks[aMax] < 4) {
	$monstieHTML.html('<div class="monstie-element-icon '
			  +Monsties[teamMember.monstie].defaultEl+'"></div>');
    } else {
	$monstieHTML.html('<div class="monstie-element-icon '
			  +aMax+'"></div>');
    }
}

/**
 * Check all bingos of a triplet of genes.
 * @param {Object} toCheck The triplet of genes to check.
 * @param {Object} bingos The bingos to update.
 */
function checkBingo(toCheck, bingos) {
    var keys = [toCheck[0].key, toCheck[1].key, toCheck[2].key];
    if (!keys.some(key => key==='empty')) {
	bingos['any'] = '1';
	var els = [toCheck[0].element, toCheck[1].element, toCheck[2].element];
	if (els.every(key => key==='dragon')) {
	    bingos['dragon'] = '1';
	} else if (els.every(key => key==='fire')) {
	    bingos['fire'] = '1';
	} else if (els.every(key => key==='ice')) {
	    bingos['ice'] = '1';
	} else if (els.every(key => key==='thunder')) {
	    bingos['thunder'] = '1';
	} else if (els.every(key => key==='water')) {
	    bingos['water'] = '1';
	} else if (els.every(key => key==='')) {
	    bingos['nelem'] = '1';
	}
	var types = [toCheck[0].type, toCheck[1].type, toCheck[2].type];
	if (types.every(key => key==='power')) {
	    bingos['power'] = '1';
	} else if (types.every(key => key==='speed')) {
	    bingos['speed'] = '1';
	} else if (types.every(key => key==='technical')) {
	    bingos['technical'] = '1';
	}
    }
}

/**
 * Update all bingos of a team member.
 * @param {Object} teamMember The team member to update the bingos of.
 */
function updateBingos(teamMember) {
    // get the current genes and clear all current bingos
    var genes = teamMember.genes;
    var bingos = teamMember.bingos;
    for (var bingo in bingos) {
	bingos[bingo] = '0';
    }

    // update the row bingos
    for (var row = 0; row < 9; row+=3) {
	var toCheck = [Genes[genes[row]], Genes[genes[row+1]], Genes[genes[row+2]]];
	checkBingo(toCheck, bingos);
    }

    // update the column bingos
    for (var col = 0; col < 3; col++) {
	var toCheck = [Genes[genes[col]], Genes[genes[3+col]], Genes[genes[6+col]]];
	checkBingo(toCheck, bingos);
    }

    // update the diagonal bingos
    checkBingo([Genes[genes[0]], Genes[genes[4]], Genes[genes[8]]], bingos);
    checkBingo([Genes[genes[2]], Genes[genes[4]], Genes[genes[6]]], bingos);
}

/**
 * Update the HTML for a bingos document element.
 * @param {Object} teamMember The team member to update the stats of.
 * @param {jQuery} $bingosHTML The document element to update.
 */
function updateBingosHTML(teamMember, $bingosHTML) {
    if (teamMember.bingos['dragon'] === '1') {
	$bingosHTML.find('.bingo-status.dragon').addClass('true');
    } else {
	$bingosHTML.find('.bingo-status.dragon').removeClass('true');
    }
    if (teamMember.bingos['fire'] === '1') {
	$bingosHTML.find('.bingo-status.fire').addClass('true');
    } else {
	$bingosHTML.find('.bingo-status.fire').removeClass('true');
    }
    if (teamMember.bingos['ice'] === '1') {
	$bingosHTML.find('.bingo-status.ice').addClass('true');
    } else {
	$bingosHTML.find('.bingo-status.ice').removeClass('true');
    }
    if (teamMember.bingos['thunder'] === '1') {
	$bingosHTML.find('.bingo-status.thunder').addClass('true');
    } else {
	$bingosHTML.find('.bingo-status.thunder').removeClass('true');
    }
    if (teamMember.bingos['water'] === '1') {
	$bingosHTML.find('.bingo-status.water').addClass('true');
    } else {
	$bingosHTML.find('.bingo-status.water').removeClass('true');
    }
    if (teamMember.bingos['power'] === '1') {
	$bingosHTML.find('.bingo-status.power').addClass('true');
    } else {
	$bingosHTML.find('.bingo-status.power').removeClass('true');
    }
    if (teamMember.bingos['speed'] === '1') {
	$bingosHTML.find('.bingo-status.speed').addClass('true');
    } else {
	$bingosHTML.find('.bingo-status.speed').removeClass('true');
    }
    if (teamMember.bingos['technical'] === '1') {
	$bingosHTML.find('.bingo-status.technical').addClass('true');
    } else {
	$bingosHTML.find('.bingo-status.technical').removeClass('true');
    }
    if (teamMember.bingos['any'] === '1') {
	$bingosHTML.find('.bingo-status.any').addClass('true');
    } else {
	$bingosHTML.find('.bingo-status.any').removeClass('true');
    }
    if (teamMember.bingos['nelem'] === '1') {
	$bingosHTML.find('.bingo-status.nelem').addClass('true');
    } else {
	$bingosHTML.find('.bingo-status.nelem').removeClass('true');
    }
}

/**
 * Update the HTML for a stats document element.
 * @param {Object} teamMember The team member to update the stats of.
 * @param {jQuery} $statsHTML The document element to update.
 */
function updateStatsHTML(teamMember, $statsHTML) {
    // get all stat HTML elements
    var $hp = $statsHTML.find('.hp');
    var $atk = $statsHTML.find('.atk');
    var $def = $statsHTML.find('.def');
    var $spd = $statsHTML.find('.spd');
    var $crt = $statsHTML.find('.crt');
    var $heal = $statsHTML.find('.heal');
    var $dragonAtk = $statsHTML.find('.el-atk.dragon');
    var $fireAtk = $statsHTML.find('.el-atk.fire');
    var $iceAtk = $statsHTML.find('.el-atk.ice');
    var $thunderAtk = $statsHTML.find('.el-atk.thunder');
    var $waterAtk = $statsHTML.find('.el-atk.water');
    var $dragonRes = $statsHTML.find('.el-res.dragon');
    var $fireRes = $statsHTML.find('.el-res.fire');
    var $iceRes = $statsHTML.find('.el-res.ice');
    var $thunderRes = $statsHTML.find('.el-res.thunder');
    var $waterRes = $statsHTML.find('.el-res.water');

    // set all stats to be unmodified
    $hp.removeClass('modp');
    $hp.removeClass('modn');
    $atk.removeClass('modp');
    $atk.removeClass('modn');
    $def.removeClass('modp');
    $def.removeClass('modn');
    $spd.removeClass('modp');
    $spd.removeClass('modn');
    $crt.removeClass('modp');
    $crt.removeClass('modn');
    $heal.removeClass('modp');
    $heal.removeClass('modn');
    $dragonAtk.removeClass('modp');
    $dragonAtk.removeClass('modn');
    $fireAtk.removeClass('modp');
    $fireAtk.removeClass('modn');
    $iceAtk.removeClass('modp');
    $iceAtk.removeClass('modn');
    $thunderAtk.removeClass('modp');
    $thunderAtk.removeClass('modn');
    $waterAtk.removeClass('modp');
    $waterAtk.removeClass('modn');
    $dragonRes.removeClass('modp');
    $dragonRes.removeClass('modn');
    $fireRes.removeClass('modp');
    $fireRes.removeClass('modn');
    $iceRes.removeClass('modp');
    $iceRes.removeClass('modn');
    $thunderRes.removeClass('modp');
    $thunderRes.removeClass('modn');
    $waterRes.removeClass('modp');
    $waterRes.removeClass('modn');

    // set the base stats for the monstie
    var baseStats = {
	hp: parseInt(Monsties[teamMember.monstie].stats.hp),
	atk: parseInt(Monsties[teamMember.monstie].stats.atk),
	def: parseInt(Monsties[teamMember.monstie].stats.def),
	spd: parseInt(Monsties[teamMember.monstie].stats.spd),
	crt: 0,
	heal: 0,
	// TODO: change eAttk to eAtk
	dragonAtk: parseInt(Monsties[teamMember.monstie].eAttk.dragon),
	fireAtk: parseInt(Monsties[teamMember.monstie].eAttk.fire),
	iceAtk: parseInt(Monsties[teamMember.monstie].eAttk.ice),
	thunderAtk: parseInt(Monsties[teamMember.monstie].eAttk.thunder),
	waterAtk: parseInt(Monsties[teamMember.monstie].eAttk.water),
	dragonRes: parseInt(Monsties[teamMember.monstie].eRes.dragon),
	fireRes: parseInt(Monsties[teamMember.monstie].eRes.fire),
	iceRes: parseInt(Monsties[teamMember.monstie].eRes.ice),
	thunderRes: parseInt(Monsties[teamMember.monstie].eRes.thunder),
	waterRes: parseInt(Monsties[teamMember.monstie].eRes.water)
    }

    // calculate stat modifiers from genes
    for (var i = 0; i < 9; i++) {
	baseStats['hp'] += parseInt(Genes[teamMember.genes[i]].statMods['hp']);
	baseStats['atk'] += parseInt(Genes[teamMember.genes[i]].statMods['atk']);
	baseStats['def'] += parseInt(Genes[teamMember.genes[i]].statMods['def']);
	// TODO: change the crit key to crt
	baseStats['crt'] += parseInt(Genes[teamMember.genes[i]].statMods['crit']);
	baseStats['heal'] += parseInt(Genes[teamMember.genes[i]].statMods['heal']);
	// TODO: change eAttk to eAtk
	baseStats['dragonAtk'] += parseInt(Genes[teamMember.genes[i]].eAttkMods['dragon']);
	baseStats['fireAtk'] += parseInt(Genes[teamMember.genes[i]].eAttkMods['fire']);
	baseStats['iceAtk'] += parseInt(Genes[teamMember.genes[i]].eAttkMods['ice']);
	baseStats['thunderAtk'] += parseInt(Genes[teamMember.genes[i]].eAttkMods['thunder']);
	baseStats['waterAtk'] += parseInt(Genes[teamMember.genes[i]].eAttkMods['water']);
	baseStats['dragonRes'] += parseInt(Genes[teamMember.genes[i]].eResMods['dragon']);
	baseStats['fireRes'] += parseInt(Genes[teamMember.genes[i]].eResMods['fire']);
	baseStats['iceRes'] += parseInt(Genes[teamMember.genes[i]].eResMods['ice']);
	baseStats['thunderRes'] += parseInt(Genes[teamMember.genes[i]].eResMods['thunder']);
	baseStats['waterRes'] += parseInt(Genes[teamMember.genes[i]].eResMods['water']);
    }

    // calculate stat modifiers from bingos
    if (teamMember.bingos['any'] === '1') {
	baseStats['hp'] += 50;
    }
    if (teamMember.bingos['nelem'] === '1') {
	baseStats['spd']++;
	$spd.addClass('modp');
    }

    // set the element text to be the correct stat
    if (baseStats['hp'] == 0) {
	$hp.html('-');
    } else {
	$hp.html(baseStats['hp']);
    }
    if (baseStats['atk'] == 0) {
	$atk.html('-');
    } else {
	$atk.html(baseStats['atk']);
    }
    if (baseStats['def'] == 0) {
	$def.html('-');
    } else {
	$def.html(baseStats['def']);
    }
    if (baseStats['spd'] == 0) {
	$spd.html('-');
    } else {
	$spd.html(baseStats['spd']);
    }
    if (baseStats['crt'] == 0) {
	$crt.html('-');
    } else {
	$crt.html(baseStats['crt']);
    }
    if (baseStats['heal'] == 0) {
	$heal.html('-');
    } else {
	$heal.html(baseStats['heal']);
    }
    if (baseStats['dragonAtk'] == 0) {
	$dragonAtk.html('-');
    } else {
	$dragonAtk.html(baseStats['dragonAtk']);
    }
    if (baseStats['fireAtk'] == 0) {
	$fireAtk.html('-');
    } else {
	$fireAtk.html(baseStats['fireAtk']);
    }
    if (baseStats['iceAtk'] == 0) {
	$iceAtk.html('-');
    } else {
	$iceAtk.html(baseStats['iceAtk']);
    }
    if (baseStats['thunderAtk'] == 0) {
	$thunderAtk.html('-');
    } else {
	$thunderAtk.html(baseStats['thunderAtk']);
    }
    if (baseStats['waterAtk'] == 0) {
	$waterAtk.html('-');
    } else {
	$waterAtk.html(baseStats['waterAtk']);
    }
    if (baseStats['dragonRes'] == 0) {
	$dragonRes.html('-');
    } else {
	$dragonRes.html(baseStats['dragonRes']);
    }
    if (baseStats['fireRes'] == 0) {
	$fireRes.html('-');
    } else {
	$fireRes.html(baseStats['fireRes']);
    }
    if (baseStats['iceRes'] == 0) {
	$iceRes.html('-');
    } else {
	$iceRes.html(baseStats['iceRes']);
    }
    if (baseStats['thunderRes'] == 0) {
	$thunderRes.html('-');
    } else {
	$thunderRes.html(baseStats['thunderRes']);
    }
    if (baseStats['waterRes'] == 0) {
	$waterRes.html('-');
    } else {
	$waterRes.html(baseStats['waterRes']);
    }

    // set classes depending on if stats were modified
    if (baseStats['hp'] > parseInt(Monsties[teamMember.monstie].stats.hp)) {
	$hp.addClass('modp');
    } else if (baseStats['hp'] < parseInt(Monsties[teamMember.monstie].stats.hp)) {
	$hp.addClass('modn');
    }
    if (baseStats['atk'] > parseInt(Monsties[teamMember.monstie].stats.atk)) {
	$atk.addClass('modp');
    } else if (baseStats['atk'] < parseInt(Monsties[teamMember.monstie].stats.atk)) {
	$atk.addClass('modn');
    }
    if (baseStats['def'] > parseInt(Monsties[teamMember.monstie].stats.def)) {
	$def.addClass('modp');
    } else if (baseStats['def'] < parseInt(Monsties[teamMember.monstie].stats.def)) {
	$def.addClass('modn');
    }
    if (baseStats['crt'] > 0) {
	$crt.addClass('modp');
    } else if (baseStats['crt'] < 0) {
	$crt.addClass('modn');
    }
    if (baseStats['heal'] > 0) {
	$heal.addClass('modp');
    } else if (baseStats['heal'] < 0) {
	$heal.addClass('modn');
    }
    if (baseStats['dragonAtk'] > parseInt(Monsties[teamMember.monstie].eAttk.dragon)) {
	$dragonAtk.addClass('modp');
    } else if (baseStats['dragonAtk'] < parseInt(Monsties[teamMember.monstie].eAttk.dragon)) {
	$dragonAtk.addClass('modn');
    }
    if (baseStats['fireAtk'] > parseInt(Monsties[teamMember.monstie].eAttk.fire)) {
	$fireAtk.addClass('modp');
    } else if (baseStats['fireAtk'] < parseInt(Monsties[teamMember.monstie].eAttk.fiire)) {
	$fireAtk.addClass('modn');
    }
    if (baseStats['iceAtk'] > parseInt(Monsties[teamMember.monstie].eAttk.ice)) {
	$iceAtk.addClass('modp');
    } else if (baseStats['iceAtk'] < parseInt(Monsties[teamMember.monstie].eAttk.ice)) {
	$iceAtk.addClass('modn');
    }
    if (baseStats['thunderAtk'] > parseInt(Monsties[teamMember.monstie].eAttk.thunder)) {
	$thunderAtk.addClass('modp');
    } else if (baseStats['thunderAtk'] < parseInt(Monsties[teamMember.monstie].eAttk.thunder)) {
	$thunderAtk.addClass('modn');
    }
    if (baseStats['waterAtk'] > parseInt(Monsties[teamMember.monstie].eAttk.water)) {
	$waterAtk.addClass('modp');
    } else if (baseStats['waterAtk'] < parseInt(Monsties[teamMember.monstie].eAttk.water)) {
	$waterAtk.addClass('modn');
    }
    if (baseStats['dragonRes'] > parseInt(Monsties[teamMember.monstie].eRes.dragon)) {
	$dragonRes.addClass('modp');
    } else if (baseStats['dragonRes'] < parseInt(Monsties[teamMember.monstie].eRes.dragon)) {
	$dragonRes.addClass('modn');
    }
    if (baseStats['fireRes'] > parseInt(Monsties[teamMember.monstie].eRes.fire)) {
	$fireRes.addClass('modp');
    } else if (baseStats['fireRes'] < parseInt(Monsties[teamMember.monstie].eRes.fiire)) {
	$fireRes.addClass('modn');
    }
    if (baseStats['iceRes'] > parseInt(Monsties[teamMember.monstie].eRes.ice)) {
	$iceRes.addClass('modp');
    } else if (baseStats['iceRes'] < parseInt(Monsties[teamMember.monstie].eRes.ice)) {
	$iceRes.addClass('modn');
    }
    if (baseStats['thunderRes'] > parseInt(Monsties[teamMember.monstie].eRes.thunder)) {
	$thunderRes.addClass('modp');
    } else if (baseStats['thunderRes'] < parseInt(Monsties[teamMember.monstie].eRes.thunder)) {
	$thunderRes.addClass('modn');
    }
    if (baseStats['waterRes'] > parseInt(Monsties[teamMember.monstie].eRes.water)) {
	$waterRes.addClass('modp');
    } else if (baseStats['waterRes'] < parseInt(Monsties[teamMember.monstie].eRes.water)) {
	$waterRes.addClass('modn');
    }
}

/**
 * Add a monstie to the team.
 * @param {document#click} e A click event on a .listed-monstie element.
 * @listens document#click
 */
function addMonstie(e) {
    // get the key associated with the clicked button
    var monstieKey = buttonToKey($(e.currentTarget).attr('class'));

    // modify the team member currently being edited
    var teamMember = TeamBuilder.team[TeamBuilder.currentTeamIndex];
    teamMember.monstie = monstieKey;

    // set the search text to what was chosen
    $('.monstie-search').val(Monsties[monstieKey].name);

    // update the HTML for the monstie icon
    updateMonstieHTML(teamMember, $('.monstie-icon'));

    // update the HTML for the stats table
    updateStatsHTML(teamMember, $('.stats-container'));

    // set the currently active gene search slot to the next input field
    TeamBuilder.$currentBingoSlot = $('.gene-search.0');
    TeamBuilder.$currentBingoSlot.focus();
}

/**
 * Add a gene to a monstie.
 * @param {document#click} e A click event on a .listed-gene element.
 * @listens document#click
 */
function addGene(e) {
    // get the key associated with the clicked gene
    var geneKey = buttonToKey($(e.currentTarget).attr('class'));

    // modify the team member currently being edited
    var slotIndex = parseInt(TeamBuilder.$currentBingoSlot.attr('class').split(' ')[2]);
    var teamMember = TeamBuilder.team[TeamBuilder.currentTeamIndex];
    teamMember.genes[slotIndex] = geneKey;

    // set the search text to what was chosen
    TeamBuilder.$currentBingoSlot.val(Genes[geneKey].name);

    // update the bingos of the team member and reset the HTML of achieved bingos
    updateBingos(teamMember);
    updateBingosHTML(teamMember, $('.bingo-list'));

    // update the HTML for the monstie icon in case the element changed
    updateMonstieHTML(teamMember, $('.monstie-icon.'+teamMember.monstie));

    // update the HTML for the stats of the monstie
    updateStatsHTML(teamMember, $('.stats-container'));

    // set the currently active gene search slot to the next input field
    if (slotIndex == 8) {
	slotIndex = 7;
    }
    TeamBuilder.$currentBingoSlot = $('.gene-search.'+(slotIndex+1));
    TeamBuilder.$currentBingoSlot.focus();
}

/**
 * Set the builder view after an element is focused.
 * @param {string} currentTargetClass The class of the focused element.
 */
function builderView(currentTargetClass) {
    // get the current team member
    var teamMember = TeamBuilder.team[TeamBuilder.currentTeamIndex];
    var monstObj = Monsties[teamMember.monstie];

    // set the buffer
    var buf = '<div id="builder-view-container">';
    buf += '<section id="builder">';
    buf += '<div class="builder member-container" title="' + monstObj.name + '">';
    buf += '<h2 id="builder-header">Edit</h2>'

    // set the back and clear buttons
    buf += '<button type="button" class="btn btn-secondary builder" role="button" id="back-button">Back</button>';
    buf += '<button type="button" class="btn btn-danger btn-sm builder delete-monstie" role="button">Clear</button>';

    // set the monstie icon
    buf += '<div class="builder builder-container">';
    buf += '<div class="builder builder-container top">';
    buf += '<div class="builder monstie-stats-container">';
    buf += '<div class="builder monstie-container">';
    buf += '<div class="builder monstie-icon"></div>';
    buf += '<input class="builder monstie-search" value="' + monstObj.name + '"></input></div>';

    // prepare the stats HTML
    buf += '<div class="builder stats-container"><table class="builder stats-table">';
    buf += '<tr><th class="builder stat-header">HP</th><th class="builder stat-header">Atk</th><th class="builder stat-header">'
	+ 'Def</th><th class="builder stat-header">Spd</th>'
	+ '<th class="builder stat-header">Crt</th><th class="builder stat-header">Heal</th></tr><tr>';
    buf += '<td class="builder stat hp"></td><td class="builder stat atk"></td>'
	+ '<td class="builder stat def"></td><td class="builder stat spd"></td>'
	+ '<td class="builder stat crt"></td><td class="builder stat heal"></td></tr></table>';
    buf += '<table class="builder el-table">';
    buf += '<tr><th class="builder stat-header"></th><th class="builder stat-header dragon"></th><th class="builder stat-header fire"></th><th class="builder stat-header ice"></th>'
	+ '<th class="builder stat-header thunder"></th><th class="builder stat-header water"></th></tr>'
    buf += '<tr><th class="builder stat-header el-atk">Atk</td><td class="builder stat el-atk dragon"></td><td class="builder stat el-atk fire"></td>'
	+ '<td class="builder stat el-atk ice"></td><td class="builder stat el-atk thunder"></td>'
	+ '<td class="builder stat el-atk water"></td></tr>';
    buf += '<tr><th class="builder stat-header el-res">Res</td><td class="builder stat el-res dragon"></td><td class="builder stat el-res fire"></td>'
	+ '<td class="builder stat el-res ice"></td><td class="builder stat el-res thunder"></td>'
	+ '<td class="builder stat el-res water"></td></tr></table></div></div>';

    // prepare the bingos HTML
    buf += '<div class="builder bingos-container">';
    buf += '<ul class="builder bingo-list left">';
    buf += '<li><span class="builder bingo-status dragon">Dragon Bingo</span></li>';
    buf += '<li><span class="builder bingo-status fire">Fire Bingo</span></li>';
    buf += '<li><span class="builder bingo-status ice">Ice Bingo</span></li>';
    buf += '<li><span class="builder bingo-status thunder">Thunder Bingo</span></li>';
    buf += '<li><span class="builder bingo-status water">Water Bingo</span></li></ul>';
    buf += '<ul class="builder bingo-list right">';
    buf += '<li><span class="builder bingo-status power">Power Bingo</span></li>';
    buf += '<li><span class="builder bingo-status speed">Speed Bingo</span></li>';
    buf += '<li><span class="builder bingo-status technical">Technical Bingo</span></li>';
    buf += '<li><span class="builder bingo-status any">Anything Bingo</span></li>';
    buf += '<li><span class="builder bingo-status nelem">Non-Elem Bingo</span></li></ul></div></div>';

    // set the gene search table
    buf += '<div class="builder gene-search-container">';
    buf += '<table class="builder gene-search-table">';
    for (var i = 0; i < 9; i++) {
	if (i%3 == 0) {
	    buf += '<tr>';
	}
	buf += '<td><input class="builder gene-search ' + i + '" value="'
	    + Genes[teamMember.genes[i]].name + '"></input></td>';
	if (i%3 == 2) {
	    buf += '</tr>';
	}
    }

    // prepare the monstie and gene list HTML
    buf += '</table></div></section><section id="data-list-section"><div id="data-list-container"></div></section></div>';

    // set the HTML for the builder view
    $('#viewer').html(buf);

    // update the monstie element, bingos, and stats HTML
    updateMonstieHTML(teamMember, $('.monstie-icon'));
    updateBingosHTML(teamMember, $('.bingo-list'));
    updateStatsHTML(teamMember, $('.stats-container'));

    // set the focused input
    TeamBuilder.$currentBingoSlot = $('.gene-search.0');
    if (teamMember.monstie==='empty' || currentTargetClass==='team monstie-search') {
	$('.builder.monstie-search').focus();
    } else {
	TeamBuilder.$currentBingoSlot.focus();
    }
    TeamBuilder.highlightedIndex = 0;

    // generate the list HTML
    filterMonsties(false);
}

/**
 * Set the team view.
 * @listens document#click
 */
function teamView() {
    // set the buffer and team export text
    var buf = '<section id="team">';
    buf += '<ol id="team-list">';
    var exportText = '';

    // iterate through the team
    for (var i = 0; i < TeamBuilder.team.length; i++) {
	// get the information of the current monstie
	var teamMember = TeamBuilder.team[i];
	var monstObj = Monsties[teamMember.monstie];

	// set the list element for the current team member
	buf += '<li title="' + monstObj.name + '" class="team member-container">';

	// set the team section title if it is the first team member
	if (i == 0) {
	    buf += '<h2 id="team-header">Your Team</h2>'
	}

	// set the share and clear buttons
	buf += '<button type="button" class="btn btn-primary btn-sm team share-monstie" role="button">Share</button>';
	buf += '<button type="button" class="btn btn-danger btn-sm team delete-monstie" role="button">Clear</button>';

	// set the monstie icon
	buf += '<div class="team builder-container">';
	buf += '<div class="team builder-container top">';
	buf += '<div class="team monstie-stats-container">';
	buf += '<div class="team monstie-container">';
	buf += '<div class="team monstie-icon"></div>';
	buf += '<input class="team monstie-search" value="' + monstObj.name + '"></input></div>';

	// prepare the stats HTML for the current monstie
	buf += '<div class="team stats-container"><table class="team stats-table">';
	buf += '<tr><th class="team stat-header">HP</th><th class="team stat-header">Atk</th><th class="team stat-header">'
	    + 'Def</th><th class="team stat-header">Spd</th>'
	    + '<th class="team stat-header">Crt</th><th class="team stat-header">Heal</th></tr><tr>';
	buf += '<td class="team stat hp"></td><td class="team stat atk"></td>'
	    + '<td class="team stat def"></td><td class="team stat spd"></td>'
	    + '<td class="team stat crt"></td><td class="team stat heal"></td></tr></table>';
	buf += '<table class="team el-table">';
	buf += '<tr><th class="team stat-header"></th><th class="team stat-header dragon"></th><th class="team stat-header fire"></th><th class="team stat-header ice"></th>'
	    + '<th class="team stat-header thunder"></th><th class="team stat-header water"></th></tr>'
	buf += '<tr><th class="team stat-header el-atk">Atk</td><td class="team stat el-atk dragon"></td><td class="team stat el-atk fire"></td>'
	    + '<td class="team stat el-atk ice"></td><td class="team stat el-atk thunder"></td>'
	    + '<td class="team stat el-atk water"></td></tr>';
	buf += '<tr><th class="team stat-header el-res">Res</td><td class="team stat el-res dragon"></td><td class="team stat el-res fire"></td>'
	    + '<td class="team stat el-res ice"></td><td class="team stat el-res thunder"></td>'
	    + '<td class="team stat el-res water"></td></tr></table></div></div>';

	// prepare the bingos HTML for the current monstie
	buf += '<div class="team bingos-container">';
	buf += '<ul class="team bingo-list left">';
	buf += '<li><span class="team bingo-status dragon">Dragon Bingo</span></li>';
	buf += '<li><span class="team bingo-status fire">Fire Bingo</span></li>';
	buf += '<li><span class="team bingo-status ice">Ice Bingo</span></li>';
	buf += '<li><span class="team bingo-status thunder">Thunder Bingo</span></li>';
	buf += '<li><span class="team bingo-status water">Water Bingo</span></li></ul>';
	buf += '<ul class="team bingo-list right">';
	buf += '<li><span class="team bingo-status power">Power Bingo</span></li>';
	buf += '<li><span class="team bingo-status speed">Speed Bingo</span></li>';
	buf += '<li><span class="team bingo-status technical">Technical Bingo</span></li>';
	buf += '<li><span class="team bingo-status any">Anything Bingo</span></li>';
	buf += '<li><span class="team bingo-status nelem">Non-Elem Bingo</span></li></ul></div></div>';

	// set the gene search table for the current monstie
	buf += '<div class="team gene-search-container">'
	buf += '<table class="team gene-search-table">';
	for (var j = 0; j < 9; j++) {
	    if (j%3 == 0) {
		buf += '<tr>';
	    }
	    buf += '<td><input class="team gene-search ' + j + '" value="'
		+ Genes[teamMember.genes[j]].name + '"></input></td>';
	    if (j%3 == 2) {
		buf += '</tr>';
	    }
	}
	buf += '</table></div></div></li>'

	// add the monstie to the team export text if it is not empty
	if (monstObj.id >= 0) {
	    var remainingChars = 3 * SpacingSize + 2 - monstObj.name.length;
	    for (var j = 0; j < Math.floor(remainingChars/2); j++) {
		exportText += ' ';
	    }
	    exportText += monstObj.name;
	    for (var j = 0; j < remainingChars/2; j++) {
		exportText += ' ';
	    }
	    for (var j = 0; j < 9; j++) {
		if (j%3 == 0) {
		    exportText += '\r\n';
		}
		var geneName = Genes[TeamBuilder.team[i].genes[j]].name;
		var remainingChars = SpacingSize - geneName.length;
		for (var k = 0; k < Math.floor(remainingChars/2); k++) {
		    exportText += ' ';
		}
		exportText += geneName;
		for (var k = 0; k < remainingChars/2; k++) {
		    exportText += ' ';
		}
		if (j%3 != 2) {
		    exportText += ' | ';
		}
	    }
	    exportText += '\r\n\r\n\r\n';
	}
    }

    // set the export text
    buf += '</ol></section><section id="export"><h2 id="export-header">Import/Export</h2>';
    buf += '<textarea id="export-text-area" spellcheck="false">';
    buf += exportText;
    buf += '</textarea>';
    buf += '<button type="button" class="btn btn-primary btn-small" role="button" id="import-team">Import</button>';
    buf += '</section>';

    // set the HTML for the team view
    $('#viewer').html(buf);

    // set the monstie element, bingos, and stats HTML for the team members
    var $lis = $('#team-list').children();
    for (var i = 0; i < $lis.length; i++) {
	var $li = $lis.eq(i);
	updateMonstieHTML(TeamBuilder.team[i], $li.find('.monstie-icon'));
	updateBingosHTML(TeamBuilder.team[i], $li.find('.bingo-list'));
	updateStatsHTML(TeamBuilder.team[i], $li.find('.stats-container'));
    }

    // set the export text
    $('#export-text-area').val(exportText);
}

$(document).ready(function () {
    // set the event for sharing a monstie
    $('#viewer').on('click', '.share-monstie', function(e) {
	// save the image to the clipboard
	
	html2canvas(e.currentTarget.parentNode).then(function(canvas) {
	    navigator.clipboard.write([
		new ClipboardItem({
		    'image/png': canvas.toBlob(function() {}, 'image/png')
		})
	    ]);
	});
    });

    // set the event for deleting a monstie
    $('#viewer').on('click', '.delete-monstie', function(e) {
	// get the current monstie being deleted
	var $currentTarget = $(e.currentTarget);
	var inTeamView = $currentTarget.hasClass('team');
	if (inTeamView) {
	    TeamBuilder.currentTeamIndex = $currentTarget.parents().index();
	}

	// blank out the monstie
	TeamBuilder.team[TeamBuilder.currentTeamIndex] = {
	    monstie: 'empty',
	    genes: ['empty', 'empty', 'empty',
		    'empty', 'empty', 'empty',
		    'empty', 'empty', 'empty'],
	    bingos: {
		dragon: '0',
		fire: '0',
		ice: '0',
		thunder: '0',
		water: '0',
		power: '0',
		speed: '0',
		technical: '0',
		any: '0',
		nelement: '0'
	    }
	};

	// reset the view
	if (inTeamView) {
	    teamView();
	} else {
	    builderView('builder monstie-search');
	}
    });

    // set the event for importing a team
    $('#viewer').on('click', '#import-team', importTeam);

    // set the event for going back to the team view from the builder view
    $('#viewer').on('click', '#back-button', teamView);

    // set the event for searching for a monstie
    $('#viewer').on('keyup', '.builder.monstie-search', function (e) {
	// on enter
	if (e.keyCode === 13) {
	    var filteredMonsties = $('#monstie-list').children();
	    if (filteredMonsties.length > 0) {
		filteredMonsties.eq(TeamBuilder.highlightedIndex).children().eq(0).click();
	    }
	}
	// on alphanumeric keys, backspace, space, and delete
	else if ((e.keyCode>=48&&e.keyCode<=105)
		   || e.keyCode==8
		   || e.keyCode==32
		   || e.keyCode==46) {
	    TeamBuilder.highlightedIndex = 0;
	    filterMonsties();
	}
	// on up arrow
	else if (e.keyCode == 38) {
	    TeamBuilder.highlightedIndex--;
	    if (TeamBuilder.highlightedIndex < 0) {
		TeamBuilder.highlightedIndex = 0;
	    }
	    filterMonsties();
	}
	// on down arrow
	else if (e.keyCode == 40) {
	    TeamBuilder.highlightedIndex++;
	    filterMonsties();
	}
    });

    // set the event for searching for a gene
    $('#viewer').on('keyup', '.builder.gene-search', function (e) {
	// on enter
	if (e.keyCode === 13) {
	    var filteredGenes = $('#gene-list').children();
	    if (filteredGenes.length > 0) {
		filteredGenes.eq(TeamBuilder.highlightedIndex).children().eq(0).click();
	    }
	}
	// on alphanumeric, backspace, space, or delete
	else if ((e.keyCode>=48&&e.keyCode<=105)
		   || e.keyCode==8
		   || e.keyCode==32
		   || e.keyCode==46) {
	    TeamBuilder.highlightedIndex = 0;
	    filterGenes();
	}
	// on up arrow
	else if (e.keyCode == 38) {
	    TeamBuilder.highlightedIndex--;
	    if (TeamBuilder.highlightedIndex < 0) {
		TeamBuilder.highlightedIndex = 0;
	    }
	    filterGenes();
	}
	// on down arrow
	else if (e.keyCode == 40) {
	    TeamBuilder.highlightedIndex++;
	    filterGenes();
	}
    });

    // set the event for focusing on the team view monstie search box
    $('#viewer').on('focus', '.team.monstie-search', function (e) {
	var $currentTarget = $(e.currentTarget);
	TeamBuilder.currentTeamIndex = $currentTarget.parents().eq(4).index();
	TeamBuilder.highlightedIndex = 0;
	builderView($currentTarget.attr('class'));
	filterMonsties(false);
    });

    // set the event for focusing on the builder view monstie search box
    $('#viewer').on('focus', '.builder.monstie-search', function (e) {
	$(e.currentTarget).select();
	TeamBuilder.highlightedIndex = 0;
	filterMonsties(false);
    });

    // set the event for focusing on a team view gene search box
    $('#viewer').on('focus', '.team.gene-search', function (e) {
	var $currentTarget = $(e.currentTarget);
	var currentTargetClass = $currentTarget.attr('class');
	TeamBuilder.highlightedIndex = 0;
	TeamBuilder.currentTeamIndex = $currentTarget.parents().eq(6).index();
	var geneIndex = currentTargetClass.split(' ')[2];
	builderView(currentTargetClass);
	TeamBuilder.$currentBingoSlot = $('.gene-search.'+geneIndex);
	TeamBuilder.$currentBingoSlot.select();
	filterGenes(false);
    });

    // set the event for focusing on a builder view gene search box
    $('#viewer').on('focus', '.builder.gene-search', function (e) {
	TeamBuilder.highlightedIndex = 0;
	TeamBuilder.$currentBingoSlot = $(e.currentTarget);
	TeamBuilder.$currentBingoSlot.select();
	filterGenes(false);
    });

    // set the event for leaving focus on the builder view monstie search box
    $('#viewer').on('focusout', '.builder.monstie-search', function (e) {
	$(e.currentTarget).val(Monsties[TeamBuilder.team[TeamBuilder.currentTeamIndex].monstie].name);
    });

    // set the event for leaving focus on a builder view gene search box
    $('#viewer').on('focusout', '.builder.gene-search', function (e) {
	var $currentTarget = $(e.currentTarget);
	var geneKey = TeamBuilder.team[TeamBuilder.currentTeamIndex].genes[
	    $currentTarget.attr('class').split(' ')[2]];
	$currentTarget.val(Genes[geneKey].name);
    });

    // set the event for adding a monstie
    $('#viewer').on('click', '.listed-monstie', addMonstie);

    // set the event for adding a gene
    $('#viewer').on('click', '.listed-gene', addGene);

    // blank out the team initially
    TeamBuilder.team = [];
    for (var i = 0; i < 6; i++) {
	TeamBuilder.team.push({
	    monstie: 'empty',
	    genes: ['empty', 'empty', 'empty',
		    'empty', 'empty', 'empty',
		    'empty', 'empty', 'empty'],
	    bingos: {
		dragon: '0',
		fire: '0',
		ice: '0',
		thunder: '0',
		water: '0',
		power: '0',
		speed: '0',
		technical: '0',
		any: '0',
		nelement: '0'
	    }
	});
    }

    // set the team view
    teamView();
});
