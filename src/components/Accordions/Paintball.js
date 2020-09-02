import React, { memo } from 'react';
import { Accordion } from 'components';
import { Box, Pair } from 'components/Stats';
import { PAINTBALL as consts } from 'constants/hypixel';
import { useHypixelContext } from 'hooks';
import * as Utils from 'utils';

/*
* Stats accordion for Paintball
*
* @param {number} props.index 	The order in which to display the row (used by react-beautiful-dnd)
*/
export const Paintball = memo((props) => {
	
	const { player } = useHypixelContext();
	const json = Utils.traverse(player, 'stats.Paintball', {});
	const ratios = {
		kd: Utils.ratio(json.kills, json.deaths),
		sk: Utils.ratio(json.shots_fired, json.kills),
	}

	const header = (
		<Box title="KD">{ratios.kd}</Box>
		);

	return Utils.isEmpty(json) ?
		<Accordion title={consts.TITLE} index={props.index} />
		:
		<Accordion title={consts.TITLE} header={header} index={props.index}>
			<div className="h-flex my-3">
				<div className="flex-1">
					<Pair title="Coins" color="gold">{json.coins}</Pair>
					<Pair title="Wins">{json.wins}</Pair>
					<Pair title="Force Field Time">{Utils.secondsToHms(json.forcefieldTime)}</Pair>
				</div>
				<div className="flex-1">
					<Pair title="Kills">{json.kills}</Pair>
					<Pair title="Deaths">{json.deaths}</Pair>
					<Pair title="Kill/Death Ratio">{ratios.kd}</Pair>
				</div>
				<div className="flex-1">
					<Pair title="Killstreaks">{json.killstreaks}</Pair>
					<Pair title="Shots Fired">{json.shots_fired}</Pair>
					<Pair title="Shot/Kill Ratio">{ratios.sk}</Pair>
				</div>
			</div>
		</Accordion>
});