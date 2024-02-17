import { std } from 'wow/wotlk'

// This was made using the Thunderfury 2 as a reference. If you have any questions, check the reference first, and then ask in Discord.

// Custom Heirlooms
const TABARD_OF_MANY_LEVELS = std.Items
    .create(
        'heirloom',
        'Tabard-of-Many-Levels',
        50255
    )
    TABARD_OF_MANY_LEVELS.Name.enGB.set('Tabard of Many Levels');
    TABARD_OF_MANY_LEVELS.Stats.addHitRating(10)
    TABARD_OF_MANY_LEVELS.Stats.addExpertiseRating(10)
    TABARD_OF_MANY_LEVELS.Stats.addStamina(1) 
    TABARD_OF_MANY_LEVELS.InventoryType.TABARD.set()
    TABARD_OF_MANY_LEVELS.DisplayInfo.set(49625)

    const RING_OF_MANY_LEVELS = std.Items
    .create(
        'heirloom',
        'Ring-of-Many-Levels',
        50255
    )
    RING_OF_MANY_LEVELS.Name.enGB.set('Ring of Many Levels');
    RING_OF_MANY_LEVELS.Stats.addSpellPower(2)
    RING_OF_MANY_LEVELS.Stats.addAttackPower(2)
    RING_OF_MANY_LEVELS.DisplayInfo.set(51276)
    

// Blizzlike Heirlooms

//******************************************************* */
// Heirloom Cloaks (Str, Int, Agi, Str Tank Respectively)
//******************************************************* */
const WORN_STONESKIN_GARGOYLE_CAPE = std.Items
    .create(
        'heirloom',
        'Worn-Stoneskin-Gargoyle-Cape',
        42949
    )
    WORN_STONESKIN_GARGOYLE_CAPE.Name.enGB.set('Worn Stoneskin Gargoyle Cape');
    WORN_STONESKIN_GARGOYLE_CAPE.InventoryType.BACK.set()
    WORN_STONESKIN_GARGOYLE_CAPE.DisplayInfo.set(24108)
    WORN_STONESKIN_GARGOYLE_CAPE.Armor.set(10)

const ANCIENT_BLOODMOON_CLOAK = std.Items
    .create(
        'heirloom',
        'Ancient-Bloodmoon-Cloak',
       42985
    )
    ANCIENT_BLOODMOON_CLOAK.Name.enGB.set('Ancient Bloodmoon Cloak');
    ANCIENT_BLOODMOON_CLOAK.InventoryType.BACK.set()
    ANCIENT_BLOODMOON_CLOAK.DisplayInfo.set(27176)
    ANCIENT_BLOODMOON_CLOAK.Armor.set(10)

const INHERITED_CAPE_OF_THE_BLACK_BARON = std.Items
    .create(
        'heirloom',
        'Inherited-Cape-of-the-Black-Baron',
       42952
    )
    INHERITED_CAPE_OF_THE_BLACK_BARON.Name.enGB.set('Inherited Cape of the Black Baron');
    INHERITED_CAPE_OF_THE_BLACK_BARON.InventoryType.BACK.set()
    INHERITED_CAPE_OF_THE_BLACK_BARON.DisplayInfo.set(24013)
    INHERITED_CAPE_OF_THE_BLACK_BARON.Armor.set(10)

const RIPPED_SANDSTORM_CLOAK = std.Items
    .create(
        'heirloom',
        'Ripped-Sandstorm-Cloak',
       42949
    )
    RIPPED_SANDSTORM_CLOAK.Name.enGB.set('Ripped Sandstorm Cloak');
    RIPPED_SANDSTORM_CLOAK.InventoryType.BACK.set()
    RIPPED_SANDSTORM_CLOAK.DisplayInfo.set(33814)
    RIPPED_SANDSTORM_CLOAK.Armor.set(10)
    RIPPED_SANDSTORM_CLOAK.Stats.addDefenseSkillRating(1)

//******************************************************* */
// Warrior/Paladin/Deathknight Missing Heirloom (Valor)
//******************************************************* */

const POLISHED_HELMET_OF_VALOR = std.Items
    .create(
        'heirloom',
        'Polished-Helmet-of-Valor',
        48685
    )
POLISHED_HELMET_OF_VALOR.Name.enGB.set('Polished Helmet of Valor');
POLISHED_HELMET_OF_VALOR.InventoryType.HEAD.set()
POLISHED_HELMET_OF_VALOR.DisplayInfo.set(42241)

const POLISHED_LEGPLATES_OF_VALOR = std.Items
    .create(
        'heirloom',
        'Polished-Legplates-of-Valor',
        48685
    )
POLISHED_LEGPLATES_OF_VALOR.Name.enGB.set('Polished Legplates of Valor');
POLISHED_LEGPLATES_OF_VALOR.InventoryType.LEGS.set()
POLISHED_LEGPLATES_OF_VALOR.DisplayInfo.set(29963)

//******************************************************* */
// Priest/Mage/Warlock Missing Heirloom (Dreadmist)
//******************************************************* */
    const TATTERED_DREADMIST_MASK = std.Items
    .create(
        'heirloom',
        'Tattered-Dreadmist-Mask',
        48691
    )
    TATTERED_DREADMIST_MASK.Name.enGB.set('Tattered Dreadmist Mask');
    TATTERED_DREADMIST_MASK.InventoryType.HEAD.set()
    TATTERED_DREADMIST_MASK.DisplayInfo.set(31263)

const TATTERED_DREADMIST_LEGS = std.Items
    .create(
        'heirloom',
        'Tattered-Dreadmist-Legs',
        48691
    )
    TATTERED_DREADMIST_LEGS.Name.enGB.set('Tattered Dreadmist Legs');
    TATTERED_DREADMIST_LEGS.InventoryType.LEGS.set()
    TATTERED_DREADMIST_LEGS.DisplayInfo.set(29797)

//******************************************************* */
// Ele Shaman Missing Heirloom (Elements)
//******************************************************* */
const MYSTICAL_COIF_OF_ELEMENTS = std.Items
.create(
    'heirloom',
    'Mystical-Coif-of-Elements',
    48683
)
MYSTICAL_COIF_OF_ELEMENTS.Name.enGB.set('Mystical Coif of Elements');
MYSTICAL_COIF_OF_ELEMENTS.InventoryType.HEAD.set()
MYSTICAL_COIF_OF_ELEMENTS.DisplayInfo.set(45174)

const MYSTICAL_KILT_OF_ELEMENTS = std.Items
.create(
    'heirloom',
    'Mystical-Kilt-of-Elements',
    48683
)
MYSTICAL_KILT_OF_ELEMENTS.Name.enGB.set('Mystical Kilt of Elements');
MYSTICAL_KILT_OF_ELEMENTS.InventoryType.LEGS.set()
MYSTICAL_KILT_OF_ELEMENTS.DisplayInfo.set(31415)

//******************************************************* */
// Enh Shaman & Hunter Missing Heirloom (IDK the damn name bc the pieces are differently named)
//******************************************************* */
const TARNISHED_RAGING_BERSERKERS_HELMET = std.Items
.create(
    'heirloom',
    'Tarnished-Raging-Berserkers-Helmet',
    48677
)
TARNISHED_RAGING_BERSERKERS_HELMET.Name.enGB.set("Tarnished Raging Berserker's Helmet");
TARNISHED_RAGING_BERSERKERS_HELMET.InventoryType.HEAD.set()
TARNISHED_RAGING_BERSERKERS_HELMET.DisplayInfo.set(38699)

const TARNISHED_LEGGINGS_OF_DESTRUCTION = std.Items
.create(
    'heirloom',
    'Tarnished-Leggings-of-Destruction',
    48677
)
TARNISHED_LEGGINGS_OF_DESTRUCTION.Name.enGB.set('Tarnished Leggings of Destruction');
TARNISHED_LEGGINGS_OF_DESTRUCTION.InventoryType.LEGS.set()
TARNISHED_LEGGINGS_OF_DESTRUCTION.DisplayInfo.set(32337)

//******************************************************* */
// Rogue Missing Heirloom (Shadowcraft)
//******************************************************* */
const STAINED_SHADOWCRAFT_CAP = std.Items
.create(
    'heirloom',
    'Stained-Shadowcraft-Cap',
    48689
)
STAINED_SHADOWCRAFT_CAP.Name.enGB.set("Stained Shadowcraft Cap");
STAINED_SHADOWCRAFT_CAP.InventoryType.HEAD.set()
STAINED_SHADOWCRAFT_CAP.DisplayInfo.set(28180)

const STAINED_SHADOWCRAFT_PANTS = std.Items
.create(
    'heirloom',
    'Stained-Shadowcraft-Pants',
    48689
)
STAINED_SHADOWCRAFT_PANTS.Name.enGB.set('Stained Shadowcraft Pants');
STAINED_SHADOWCRAFT_PANTS.InventoryType.LEGS.set()
STAINED_SHADOWCRAFT_PANTS.DisplayInfo.set(28161)

//******************************************************* */
// Druid Caster Missing Heirloom (Feathers)
//******************************************************* */
const PREENED_TRIBAL_WAR_FEATHERS = std.Items
.create(
    'heirloom',
    'Preened-Tribal-War-Feathers',
    48687
)
PREENED_TRIBAL_WAR_FEATHERS.Name.enGB.set("Preened Tribal War Feathers");
PREENED_TRIBAL_WAR_FEATHERS.InventoryType.HEAD.set()
PREENED_TRIBAL_WAR_FEATHERS.DisplayInfo.set(23544)

const PREENED_WILDFEATHER_LEGGINGS = std.Items
.create(
    'heirloom',
    'Preened-Wildfeather-Leggings',
    48687
)
PREENED_WILDFEATHER_LEGGINGS.Name.enGB.set('Preened Wildfeather Leggings');
PREENED_WILDFEATHER_LEGGINGS.InventoryType.LEGS.set()
PREENED_WILDFEATHER_LEGGINGS.DisplayInfo.set(41574)

//******************************************************* */
// War/Pal/DK Tank Missing Heirloom (Might)
//******************************************************* */

const BURNISHED_HELM_OF_MIGHT = std.Items
    .create(
        'heirloom',
        'Burnished-Helm-of-Might',
        48685
    )
    BURNISHED_HELM_OF_MIGHT.Name.enGB.set('Burnished Helm of Might');
    BURNISHED_HELM_OF_MIGHT.InventoryType.HEAD.set()
    BURNISHED_HELM_OF_MIGHT.DisplayInfo.set(41847)
    BURNISHED_HELM_OF_MIGHT.Stats.addDefenseSkillRating(1)

const BURNISHED_LEGPLATES_OF_MIGHT = std.Items
    .create(
        'heirloom',
        'Burnished-Legplates-of-Might',
        48685
    )
    BURNISHED_LEGPLATES_OF_MIGHT.Name.enGB.set('Burnished Legplates of Might');
    BURNISHED_LEGPLATES_OF_MIGHT.InventoryType.LEGS.set()
    BURNISHED_LEGPLATES_OF_MIGHT.DisplayInfo.set(31023)
    BURNISHED_LEGPLATES_OF_MIGHT.Stats.addDefenseSkillRating(1)

 const BURNISHED_BREASTPLATE_OF_MIGHT = std.Items
    .create(
        'heirloom',
        'Burnished-Breastplate-of-Might',
        48685
    )
    BURNISHED_BREASTPLATE_OF_MIGHT.Name.enGB.set('Burnished Breastplate of Might');
    BURNISHED_BREASTPLATE_OF_MIGHT.InventoryType.CHEST.set()
    BURNISHED_BREASTPLATE_OF_MIGHT.DisplayInfo.set(31021)
    BURNISHED_BREASTPLATE_OF_MIGHT.Stats.addDefenseSkillRating(1)

const BURNISHED_PAULDRONS_OF_MIGHT = std.Items
    .create(
        'heirloom',
        'Burnished-Pauldrons-of-Might',
        42949
    )
    BURNISHED_PAULDRONS_OF_MIGHT.Name.enGB.set('Burnished Pauldrons of Might');
    BURNISHED_PAULDRONS_OF_MIGHT.InventoryType.SHOULDER.set()
    BURNISHED_PAULDRONS_OF_MIGHT.DisplayInfo.set(31024)
    BURNISHED_PAULDRONS_OF_MIGHT.Stats.addDefenseSkillRating(1)
