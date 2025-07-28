# Modding

[<- Back to the submissions guide](/pages/submissions)

---

## [ModFest Template](https://github.com/ModFest/template)

ModFest publishes a mod template for every new event! 

It's minimal, but helps out with establishing some good practices like:
- A detailed mod description
- Accurate (and fully filled) mod metadata
- Meaningful package and class names
- Automatic builds via CI
- Semi-automatic publishing with build provenance

If you're new to modding, we highly recommend it, as it'll help you meet our submission requirements.

If you're already experienced, feel free to use it as a reference! You might find something new.

---

## [Item Descriptions](https://github.com/cassiancc/Item-Descriptions)

Event packs ship with the ability to add explanatory tooltips to your items!
```json
"lore.minecraft.lightning_rod": "A block that prevents your builds from being struck by Lightning by attracting nearby bolts."
```

This helps explain the usage of items to all players, not just those visiting your booth later.

---

## Paid Shill Corner

[Kaleido Config](https://github.com/sisby-folk/kaleido-config) (sisby) is a zero-setup configuration library that works on **any loader and version of minecraft**.
Event packs ship with [McQoy](https://modrinth.com/mod/mcqoy) which enable these configs to be edited in-game using automatically generated screens.

[Area Lib](https://github.com/Tomate0613/area-lib) (tomate) enables the (opped) creation of custom areas on the map with special rules. If you might want something to only work _inside your booth_ later on, consider integrating with Area Lib. Things like item use, block breaking, and respawn logic are already handled though!