# ModFest Participant Guide

---

## FAQ

<details>
  <summary>Click to expand FAQ</summary>

### What is ModFest?

**ModFest is a collaborative Minecraft modding virtual event** - it's designed for modders, artists, builders, and players alike!<br/>
Teams or individuals create mods matching the theme in a limited time.
Then, they're invited to build showcase booths in a world along with all the other participants.
Once the showcase server opens, anyone can join to check out the submissions and vote on their favorites.<br/>


### Is ModFest a competition?

**Not really!** - ModFest is all about celebrating the art of mod-making at keeping it alive!
We're here to encourage people to make minecraft mods, and put on a fun show.
**ModFest has "awards"** - but they're just for show. Voting on mods is fun for tourists, and awards often highlight outstanding entries, but they're not the objective of the event. Generally, we **discourage participants from aiming for an award** - ModFest is not balanced for awards to be fair!

### Do I need to be good at modding/building to participate?

**No!** - ModFest has no quality floor for submissions or booths.
We'll only request alteration or omission of your entry if it **disrupts other entries**.
E.g. through extreme lag, crashes, big boxy booths blocking sightlines, etc.

### Do I need to build? Will my mod be disqualified otherwise?

**Nope!** - Every mod submitted will appear on the website and be eligible for voting.
The only exceptions are mods with inappropriate content, or mods that ask to withdraw.
For boothless submissions, the team usually builds a small stand ("mini-booth") instead.
However, this is not a guarantee! Communicate with the team as early as you can.

### I'm an artist / builder / can't draw textures - can I mod as a team?

**Absolutely!** - Each contributor to a mod - whether for code, modelling, textures, key art, sfx, music - should each register as a participant, be added to the modrinth page, and run `/event submit` once the mod is ready for submission.
After announcement, participants can introduce themselves & their skillsets, and offer to help out with announced submissions.
Just remember - your team members are your responsibility; Griefing can lead to a DQ.

### What are the ModFest phases?
**Announcement -> Development -> Testing/Claiming -> Building -> Showcase -> Afterparty**

**Announcement**: Teamforming and concept discussion.<br/>
**Development**: More teamforming, feature development, asset creation, mod submitting.<br/>
**Testing**: Bugfixes, polish updates, testing mods on the "test server".<br/>
**Claiming**: Improving spawn, paths, and other common areas on the "build server". Claiming perimeters for booths.<br/>
**Building**: Booth building and shard creation, more common improvements.<br/>
**Showcase**: Doors open to tourists, voting available for awards.<br/>
**Afterparty**: Votes close, awards announced, server stays open.

Internally, the team also has **Pitching** and **Preparation** phases before announcement.

### What do Booths look like?

**Large Booth - Lucky Ducks**

![lucky ducks overview](https://hackmd.io/_uploads/Hkf6e6C3C.png)

![lucky ducks play area](https://hackmd.io/_uploads/r1PuyRC3R.png)

**Medium Booth - Up and Away**

![up and away overview](https://hackmd.io/_uploads/Hy51WpAhA.png)

![up and away crafting station](https://hackmd.io/_uploads/BJEbWT0nR.png)

**Small Booth - Obscure Masks**

![obscure masks overview](https://hackmd.io/_uploads/Syb0TTRnA.png)

![obscure masks front](https://hackmd.io/_uploads/rkure6AhR.png)

**Mini Booth - Balloons Away!**

![balloons away front](https://hackmd.io/_uploads/SkObg60n0.png)

</details>

---

## Submissions

### Basic Submission Requirements
In order to appear on the modfest website and appear in voting, mods must:
- Be developed entirely within the development period, including any assets
- Be published and reviewed on modrinth with a meaningful description
- Be submitted on the ModFest discord by each contributor using `/event submit`
- Be submitted before the development deadline
- Not be "troll" submissions or contain explicit, hateful, or AI-generated content

The team can make fair exceptions for late submissions & reused assets - just reach out!

### Showcase Submission Requirements
In order to be shown on the _showcase server_, mods must also:
- Have visible (and current) source code at all stages after submission.
- Allow ModFest to distribute them at any time (implied by submission)
- Not cause crashes, instability, or lag in an unmanageable way (e.g. lag outside booth)
- Have sensible **adventure mode restrictions** to prevent griefing / modifying blocks
- Be able to contain any **scary content** to the confines of its booth
    - Primarily - bugs, gore, horror/jumpscares, sudden noises, or screen flashing
- Be able to be patched to meet any other showcaseability requirements from the team


### Non-Requirements
**None of the following** are expectations or requirements of submissions:
- Being done, complete, or fully working - unfinished mods are welcome at showcase
- Being perfect at the deadline - bugfix & polish updates are accepted post-deadline
- Matching the theme - all jam mods are accepted, not just themed ones
- Having a permissive license - as long as the source is visible, you can use ARR or similar

We do not accept insulting any submission for being "broken" or "low quality".
Please bring concerns over showcase stability to a team member.

---

## Booths

### Basic Booth Expectations
As a general expectation of the showcase, booths should:
- Show off your mod by distributing and/or explaining it's content
- Be self-contained and sensibly sized for the mod being demonstrated.
- Be placed on one side of a path, away from crossroads and spawn.
- Have an easily-visible entrance sign seperating its entrance from the path
- Have an intended path for tourists to take through the booth (signed forks are okay)
- Be a physical place in the setting of the fest world! Feel free to add flavour or lore to your builds, armor stands alongside text blocks as "NPCs", and so on.

Booths **should not**:
- Enable griefing builds or other tourist exploits.
- Contain wings with vanilla / non-submission content
    - e.g. mazes, bow shooting galleries, parkour courses
    - These should be built as common non-booth attractions! Ask the team.

### Booth Claiming
Before booth building starts, participants are required to build a "claim" for their booth.
Your "claim" should:
- Be a flat perimeter (outline) of your planned booth footprint, built out of colored wool
- Be built very high in the air, so infrastructure builds aren't interrupted
- Use white wool blocks to indicate intended entrances, black for exit-only exits
- Add a sign (vanilla) with your mod name and (optionally) what you're building

### Booth Toolkit
To construct your booth, you'll have access to the following utilities:
- [WorldEdit](https://modrinth.com/plugin/worldedit) & [Axiom](https://modrinth.com/mod/axiom), provided under a permission role and removed if used irresponsibly
- [Glowcase](https://modrinth.com/mod/glowcase), which enables displaying text, and displaying/distributing items in-world
- [Scattered Shards](https://modrinth.com/mod/scattered-shards), which provides simple collectible rewards for your booth
- [Armor Stand Editor](https://modrinth.com/mod/armorstandeditor), which can be used to pose simple "NPCs" for decoration/dialogue
- [Display Entities](https://minecraft.wiki/w/Display), which have a rich editor in axiom and can be used for decoration

Ask permission for the following:
- Items with CanDestroy / CanPlaceOn
- **Repeating Command Blocks**, large chains, command blocks on clocks, etc.

### Glowcase Expectations
When showcasing parts of your mod using glowcase blocks, please:
- Include a text block listing mod authors and hyperlink block linking the mod page
- Use text blocks to explain complex or nonfunctional mechanics
- Use item blocks to distribute items to tourists instead of dispensers / etc.
    - Disable "gives item" on item blocks used as decoration or containing dangerous items


### Scattered Shards Expectations
When creating collectible *shards* for your booth, please:
- Create one "visitor" shard, placed inside the entrance of your booth.
- Create up to 3 additional shards, awarded for interaction with your submission / booth.
- Do not create shards for vanilla challenges e.g. parkour (traversing the booth is okay)
- Do not hide shards in obscure locations - they should be discoverable by a first-timer!
- Provide a hint that clearly describes shard location / requirements

---

## Helping Out

<details>
  <summary>Click to expand Volunteering notes</summary>

ModFest is run entirely by volunteers, many of whom are participants too!

To help out during the **announcement phase**:
- Tell people about the new event!

To help out during the **development phase**:
- Provide support to other participants developing their mods!

To help out during the **testing phase**:
- Test on the test server, post tagged bug reports and ping mod authors in them
- Diagnose root causes to help speed up the bugfixing process
- PR fixes to issues if you feel capable & comfortable

To help out during the **building phase**:
- Help build and prettify common spaces e.g. paths, plazas, arenas/playgrounds, spawn.
- Provide support to other participants while building!
    - E.g. palettes, worldedit, furniture designs, command blocks, item displays
- Answer questions about vanilla / modfest base mods / booth guidelines (link this!)

To help out during the **showcase and afterparty phases**:
- Answer tourist questions about the fest / mods.
- Don't spoil or over-direct tourists! Let them explore on their own.
- Invite your friends and enjoy the fest!

To help out in the **pitching and preparation phases**:
- Contribute to ModFest base mods! Improvements, ports, etc.

</details>

---

Have fun at ModFest!