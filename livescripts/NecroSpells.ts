export function NecroSpells(events: TSEvents) {
    events.SpellID.OnDamageEarly(GetID("Spell", "Necromancer", "Bloodbolt"), (spell, damage, info, type, crit, effectmask) => {
        if (spell.GetCaster().IsPlayer()) {
            let player = spell.GetCaster().ToPlayer()
            damage.set(player.GetMaxHealth())
        }
    })

    events.SpellID.OnCheckCast(GetID("Spell","Necromancer","CorpseLance"), (spell, result) => {
        let caster = spell.GetCaster()
        let nearby = caster.GetCreaturesInRange(20, 0, 0, 2)
        if (nearby.length != 0) {
            let allow = false
            nearby.forEach((v, i, arr) => {
                if (v.GetBool('isUnusedCorpse', true))
                {
                    allow = true
                    v.SetBool('isUnusedCorse',false)
                    v.RemoveCorpse()
                } 
            })
            if (!allow) {
                result.set(SpellCastResult.FAILED_DONT_REPORT)
                if (caster.IsPlayer())
                    caster.ToPlayer().SendAreaTriggerMessage('There are no eligible corpses.')
            }
        } else {
            result.set(SpellCastResult.FAILED_DONT_REPORT)
            if (caster.IsPlayer())
                caster.ToPlayer().SendAreaTriggerMessage('|cffFF0000There are no nearby corpses!')
        }
    })}