# Debugging

[<- Back to the submissions guide](/pages/submissions)

---

## Bug Triage

When you encounter a crash or serious bug, you should first **upload your `.minecraft/logs/latest.log` to [mclo.gs](https://mclo.gs)**. You can then:
- Search to see if there are related errors in the log (near the bottom!)
- Check the bug thread to see if there are any issues that match
- Create a thread tagged `Not Isolated`, unless you already know the culprit mod

Once the culprit mod is identified, the tag can be swapped to `Isolated` and the authors pinged.

You **don't need to stop here** - you're welcome to open up the source code and identify the fix - PR it if you like!

Once the fix has been verified and released in a new version of the mod, the tag can be swapped to `Solved`.

---

## Profiling & Optimization

To validate the performance of your mod, we recommend running [spark](https://modrinth.com/mod/spark). 

For the simplest usage, simply:

- open a world and run `spark profiler start` / `sparkc profiler start`
- create a bunch of interactions with your mod (e.g. spawn 100 of your entities, use an item a lot of times, place lots of your blocks)
- run `spark profiler stop` / `sparkc profiler stop` and review the results for anything concerning.
