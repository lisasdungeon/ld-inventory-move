# LD Inventory Move

**A free module for Foundry VTT by Lisa's Dungeon**

Fixes the default Custom System Builder behavior where dragging an item from one
actor's inventory to another creates a duplicate instead of moving it.

---

## What It Does

When you drag an item from Actor A's inventory to Actor B's inventory, Foundry
and CSB duplicate the item by default. This module intercepts that operation and
deletes the original item from Actor A immediately after the copy is created on
Actor B - giving you a true move rather than a copy.

All nested sub-items (CSB item containers within items) are moved with their
parent and cleaned up from the source actor automatically.

---

## Requirements

- Foundry VTT v13 - v14
- [Custom System Builder](https://foundryvtt.com/packages/custom-system-builder) (any recent version)

---

## Installation

Paste the manifest URL into Foundry's module installer:

```text
https://github.com/lisasdungeon/ld-inventory-move/releases/latest/download/module.json
```

---

## Behavior Notes

| Scenario | Result |
|---|---|
| Drag item from Actor A -> Actor B | Item moved (deleted from A, created on B) |
| Drag item within the same actor | Unchanged - CSB handles its own sorting |
| Drag item from sidebar / compendium | Unchanged - standard Foundry create behavior |
| No delete permission on source | Warning notification; item is not removed |

---

## Support

- Bug reports and feature requests: [GitHub Issues](https://github.com/lisasdungeon/ld-inventory-move/issues)
- Support Lisa's Dungeon on Patreon: https://patreon.com/LisasDungeon?utm_medium=unknown&utm_source=join_link&utm_campaign=creatorshare_creator&utm_content=copyLink

---

## License

Proprietary - see [LICENSE](LICENSE) for terms.

Copyright 2026 Lisa's Dungeon. All rights reserved.
