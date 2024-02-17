export function ScalingAura(events: TSEvents) {

    // Dungeon & Raid Scaling Module, ask tester about DC on re enter dungeon, may be due to trying to reapply debuff when they already have it
    events.Maps.OnPlayerEnter((map, player) => {
        if (map.IsDungeon() || map.IsRaid()) {
            if (player.IsInGroup()) {
                let groupCount = player.GetGroup().GetMembersCount();
                if (groupCount > 4)
                    return
                map.GetCreatures().forEach((creature) => {
                    creature.AddAura(GetID("Spell", "Aura-mod", "Equillibrium"), creature).SetStackAmount(5 - groupCount)
                })
            } else {
                //solo
                map.GetCreatures().forEach((creature) => {
                    creature.AddAura(GetID("Spell", "Aura-mod", "Equillibrium"), creature).SetStackAmount(5)

                })
            }
        }
    })
    
}