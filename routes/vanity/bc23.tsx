import { RouteContext } from "$fresh/server.ts";
import { Head } from "$fresh/runtime.ts";

import {
  fetchEvent,
  fetchEventSubmissions,
  fetchUser,
} from "../../lib/platform-api.tsx";


export default async function Event(_req: Request, ctx: RouteContext) {
  const event = await fetchEvent(fetch, "bc23");

  if (!event.id) {
    return ctx.renderNotFound();
  }

  const submissions = await fetchEventSubmissions(fetch, "bc23");

  const users = await Promise.all(
    [...new Set(submissions.flatMap((s) => s.authors))].map((author) =>
      fetchUser(fetch, author)
    ),
  );
  return (
    <>
      <Head>
        <link rel="stylesheet" src="/assets/vanity/bc23/main.css"/>
      </Head>
      <header>
      </header>
      <article>
        <h1 className="title">
          <img
            src="/assets/vanity/bc23/logo_classic.png"
            className="logo"
            alt="BlanketCon 23"
          />
        </h1>
        <h3>
          <time dateTime="2023-08-25T18:00:00.000Z" datestyle="long">
            August 25, 2023 at 6:00 PM
          </time>
          to{" "}
          <time
            dateTime="2023-08-29T00:00:00.000Z"
            datestyle="long"
          >
            August 29, 2023 at 12:00 AM
          </time>{" "}
          <span className="timezone">(UTC)</span>
        </h3>
        <p>
          BlanketCon 23: cyber/NOVA is an in-game Minecraft modding convention
          hosted by ModFest and CHS, and open to all mod enthusiasts and
          developers! Come check out a custom modpack and convention world full
          of mods of all kinds - old favorites, new up-and-comers, hidden gems,
          and more! Now in its second year and powered by Quilt on Minecraft
          1.20, we're here to show off the future of Minecraft modding and
          celebrate the community!
        </p>
        <p>Featuring:</p>
        <ul>
          <li>A pack full of mods of all levels of notability!</li>
          <li>
            A custom Neo Lisbon showcase world built by the team and
            participants!
          </li>
          <li>
            Panels, keynotes, and more from modders and community members!
          </li>
          <li>
            Booths, demos, games, and more showing off everything modded
            Minecraft has to offer!
          </li>
          <li>
            The crushing ennui of late-stage capitalism!{" "}
            <sub>
              I don't think <i>that</i> was on the guest list...
            </sub>
          </li>
        </ul>
        <p>
          The pack is now available via{" "}
          <a href="https://modrinth.com/modpack/blanketcon-23" target="_blank">
            Modrinth
          </a>!{" "}
          See you at the convention!~
        </p>
        <hr />
        <h2 className="title">
          <img src="/assets/vanity/bc23/lamp.gif" />Schedule<img src="/assets/vanity/bc23/lamp.gif" />
        </h2>
        <p>
          More events may be held impromptu whenever the stage is empty!
        </p>
        <table>
          <thead>
            <tr>
              <th>Event</th>
              <th>Type</th>
              <th>Location</th>
              <th>
                Time <span className="timezone">(UTC)</span>
              </th>
              <th>Hosts</th>
              <th>Summary</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td colSpan="6" className="dayhead">Day 0</td>
            </tr>
            <tr>
              <td>Server Launch</td>
              <td></td>
              <td></td>
              <td>
                <time dateTime="2023-08-25T18:00:00.000Z">
                  8/25/23, 6:00 PM
                </time>
              </td>
              <td></td>
              <td>
                Time to join in the world as we prepare the opening ceremony!
              </td>
            </tr>
            <tr>
              <td>Opening Ceremony</td>
              <td>Ceremony</td>
              <td>Main Stage</td>
              <td>
                <time dateTime="2023-08-25T19:00:00.000Z">
                  8/25/23, 7:00 PM
                </time>
              </td>
              <td>LemmaEOF, acikek, Jasmine, Octal</td>
              <td>
                Come kick BlanketCon off with us as we say a few words about the
                community!
              </td>
            </tr>
            <tr>
              <td>
                Unsafe: The Benefits and Disadvantages of Thinking Outside the
                (Sand) Box
              </td>
              <td>Keynote</td>
              <td>Main Stage</td>
              <td>
                <time dateTime="2023-08-25T22:00:00.000Z">
                  8/25/23, 10:00 PM
                </time>
              </td>
              <td>sschr15, sylv256</td>
              <td>
                What's with ASM in modding? Why is Unsafe? We will talk about
                how these concepts are used in modding, why they are present,
                the attempts to avoid them, and the dangers associated with
                them.
              </td>
            </tr>
            <tr>
              <td>Modrinth Q&A 2: Electric Boogaloo</td>
              <td>Q&A</td>
              <td>Main Stage</td>
              <td>
                <time dateTime="2023-08-26T00:00:00.000Z">
                  8/26/23, 12:00 AM
                </time>
              </td>
              <td>
                triphora, Prospector, Geometrically, CodexAdrian, thesuzerian
              </td>
              <td>
                Ask the Modrinth Team anything you want about what we've done in
                the past year and are planning to do in the future!
              </td>
            </tr>
            <tr>
              <td>How to Lie and Get Away With It: API as Suggestion</td>
              <td>Keynote</td>
              <td>Main Stage</td>
              <td>
                <time dateTime="2023-08-26T02:00:00.000Z">
                  8/26/23, 2:00 AM
                </time>
              </td>
              <td>Emi</td>
              <td>
                How runtime bytecode mutation was utilized to maintain ABI
                compatibility while breaking API for the EMI 1.0.0 update.
              </td>
            </tr>
            <tr>
              <td>Introduction to Game Design</td>
              <td>Keynote</td>
              <td>Main Stage</td>
              <td>
                <time dateTime="2023-08-26T03:00:00.000Z">
                  8/26/23, 3:00 AM
                </time>
              </td>
              <td>Pug</td>
              <td>
                An event introducing game design and various things involved
                with it. Open for anybody to learn, despite being geared moreso
                towards newer modders.
              </td>
            </tr>
            <tr>
              <td>History of TeaCon</td>
              <td>Keynote</td>
              <td>Main Stage</td>
              <td>
                <time dateTime="2023-08-26T05:00:00.000Z">
                  8/26/23, 5:00 AM
                </time>
              </td>
              <td>3TUSK</td>
              <td>
                A keynote that talks about TeaCon, a mod jam / BTM-esque
                convention hybrid. Planned topics include its origin, tech
                stack, what we learnt and what we didn't do well.
              </td>
            </tr>
            <tr>
              <td colSpan="6" className="dayhead">Day 1</td>
            </tr>
            <tr>
              <td>fractureiser: The Week Modded Minecraft Came Together</td>
              <td>Keynote</td>
              <td>Main Stage</td>
              <td>
                <time dateTime="2023-08-26T18:00:00.000Z">
                  8/26/23, 6:00 PM
                </time>
              </td>
              <td>Emi, Jasmine</td>
              <td>
                A postmortem on the fractureiser malware incident with several
                speakers involved in the mitigation team, as well as the
                progress on future mitigation efforts.
              </td>
            </tr>
            <tr>
              <td>SugarCane - Improving on Parchment for Forge</td>
              <td>Keynote</td>
              <td>Main Stage</td>
              <td>
                <time dateTime="2023-08-26T19:00:00.000Z">
                  8/26/23, 7:00 PM
                </time>
              </td>
              <td>noeppi</td>
              <td>
                A talk about SugarCane, a mapping set that uses the Parchment
                data. SugarCane removes the 'p' parameter prefix and can map
                lambdas. This talk will cover the workings of SugarCane and its
                difficulties.
              </td>
            </tr>
            <tr>
              <td>Nomenclature</td>
              <td>Keynote</td>
              <td>Main Stage</td>
              <td>
                <time dateTime="2023-08-26T21:00:00.000Z">
                  8/26/23, 9:00 PM
                </time>
              </td>
              <td>sylv256</td>
              <td>& How we name things™ (and why it's important)</td>
            </tr>
            <tr>
              <td>Rewriting Codebases and How to Do It Right</td>
              <td>Panel</td>
              <td>Main Stage</td>
              <td>
                <time dateTime="2023-08-26T22:00:00.000Z">
                  8/26/23, 10:00 PM
                </time>
              </td>
              <td>Octal, Falkreon</td>
              <td>
                Rewriting codebases is something every programmer eventually has
                to do, let's talk about the best practices
              </td>
            </tr>
            <tr>
              <td>
                Crashing your graphics stack with this one easy step - rendering
                at extreme distance and raytracing
              </td>
              <td>Keynote</td>
              <td>Main Stage</td>
              <td>
                <time dateTime="2023-08-27T00:00:00.000Z">
                  8/27/23, 12:00 AM
                </time>
              </td>
              <td>Cortex</td>
              <td>
                Minecraft rendering in a nutshell, past, current and future
                rendering technologies, extreme chunk distance rendering,
                raytracing and other rendering technology
              </td>
            </tr>
            <tr>
              <td colSpan="6" className="dayhead">Day 2</td>
            </tr>
            <tr>
              <td>Into The Server Side Development</td>
              <td>Keynote</td>
              <td>Main Stage</td>
              <td>
                <time dateTime="2023-08-27T17:00:00.000Z">
                  8/27/23, 5:00 PM
                </time>
              </td>
              <td>Patbox</td>
              <td>
                Talk about creating modern server side mods; with all modern
                vanilla client features.
              </td>
            </tr>
            <tr>
              <td>Minigames with NucleoidMC</td>
              <td>Minigame Playtest</td>
              <td>Main Stage to Fantasy instances</td>
              <td>
                <time dateTime="2023-08-27T18:00:00.000Z">
                  8/27/23, 6:00 PM
                </time>
              </td>
              <td>Patbox, Ash</td>
              <td>
                Try out the latest and greatest minigames from Nucleoid, the
                open-source minigame server.
              </td>
            </tr>
            <tr>
              <td>Deeper mod interop: more than just api's</td>
              <td>Keynote</td>
              <td>Main Stage</td>
              <td>
                <time dateTime="2023-08-27T20:00:00.000Z">
                  8/27/23, 8:00 PM
                </time>
              </td>
              <td>TheEpicBlock</td>
              <td>
                Mods don't declare everything via api's. Entity models are one
                of those things; their behaviour is defined by code. So; why not
                just look at that? A keynote about symbolic java bytecode
                execution.
              </td>
            </tr>
            <tr>
              <td>
                Playing Modding Minecraft: What no one tells you about finishing
                up a Minecraft mod
              </td>
              <td>Keynote</td>
              <td>Main Stage</td>
              <td>
                <time dateTime="2023-08-27T21:00:00.000Z">
                  8/27/23, 9:00 PM
                </time>
              </td>
              <td>acikek</td>
              <td>
                A talk about the ecosystem of modded Minecraft; what we're all
                here for; and how to get other people to see your creations; all
                nicely wrapped in an anticapitalist package.
              </td>
            </tr>
            <tr>
              <td>
                Mishaps, Accidents, and whoopsie daisies - A showcase of
                failures
              </td>
              <td>Panel</td>
              <td>Main Stage</td>
              <td>
                <time dateTime="2023-08-27T22:00:00.000Z">
                  8/27/23, 10:00 PM
                </time>
              </td>
              <td>Siuol, Cart3r</td>
              <td>
                A presentation on some of the bugs; glitches; and other
                accidents that ended up in our mods. A presentation on failures.
              </td>
            </tr>
            <tr>
              <td>
                A Hundred Players, a Month, a Mod: modding for frequent
                large-scale events
              </td>
              <td>Keynote</td>
              <td>Main Stage</td>
              <td>
                <time dateTime="2023-08-28T00:00:00.000Z">
                  8/28/23, 12:00 AM
                </time>
              </td>
              <td>Will BL, Amy Mialee</td>
              <td>
                The Silver Content Developer Team give their insights on making
                modded multiplayer experiences for YouTube
              </td>
            </tr>
            <tr>
              <td>
                Not reinventing the wheel VS predator: how to get everyone else
                to write your mod code for you
              </td>
              <td>Keynote</td>
              <td>Main Stage</td>
              <td>
                <time dateTime="2023-08-28T02:00:00.000Z">
                  8/28/23, 2:00 AM
                </time>
              </td>
              <td>Sisby Folk</td>
              <td>
                What is Switchy, why is Switchy, how is Switchy, and when it's
                okay to write 4000 lines with only 3 integrations to vanilla.
              </td>
            </tr>
            <tr>
              <td colSpan="6" className="dayhead">Day 3</td>
            </tr>
            <tr>
              <td>Hard Wired Island</td>
              <td>Tabletop Actual Play</td>
              <td>Main Stage</td>
              <td>
                <time dateTime="2023-08-28T19:00:00.000Z">
                  8/28/23, 7:00 PM
                </time>
              </td>
              <td>LemmaEOF (GM), Jasmine, pug, Cyra</td>
              <td>
                Watch Lemma and other participants play a one-shot of
                retrofuture cyberpunk tabletop RPG Hard Wired Island!
              </td>
            </tr>
            <tr>
              <td>Big Finale</td>
              <td>Ceremony</td>
              <td>Main Stage</td>
              <td>
                <time dateTime="2023-08-28T23:00:00.000Z">
                  8/28/23, 11:00 PM
                </time>
              </td>
              <td>LemmaEOF, acikek, Jasmine</td>
              <td>A few words to wrap up and send off BlanketCon 23!</td>
            </tr>
          </tbody>
        </table>
        <hr />
        <h2 className="title">
          <img src="/assets/vanity/bc23/tentonea.gif" />Booths<img src="/assets/vanity/bc23/tentonea.gif" />
        </h2>
        <table className="sortable">
          <thead className="apply-dialog-bg">
            <tr>
              <th>
                Author
              </th>
              <th>
                Mod
              </th>
            </tr>
          </thead>
          {submissions.map((submission, submissionIndex) => (
            <tr>
              <td>
                {submission.authors.map((author, index) => {
                  const user = users.find((u) => u.id === author);
                  return user
                    ? (
                      <a
                        key={`${submissionIndex}-${index}`}
                        href={`/user/${user.id}`}
                      >
                        {user.name}
                      </a>
                    )
                    : author;
                }).map((userElement, index) => {
                  let join = "";
                  if (index === submission.authors.length - 1) {
                    if (
                      submission.authors.length > 2
                    ) {
                      join = ", and ";
                    } else if (
                      submission.authors.length === 2
                    ) {
                      join = " and ";
                    }
                  } else if (index > 0) {
                    join = ", ";
                  }
                  return (
                    <span key={`${submissionIndex}-${index}`}>
                      <span>{join}</span>
                      {userElement}
                    </span>
                  );
                })}
              </td>
              <td>{submission.name}</td>
            </tr>
          ))}
        </table>
        <hr />
        <h2 className="title">
          <img src="/assets/vanity/bc23/turnbook.gif" />Credits<img src="/assets/vanity/bc23/turnbook.gif" />
        </h2>
        <p>
          ModFest is run by <span className="name">LemmaEOF</span>,{" "}
          <span className="name">Prospector</span>,{" "}
          <span className="name">Pyrrha</span>,{" "}
          <span className="name">Jasmine</span>, and{" "}
          <span className="name">Acikek</span>.
        </p>
        <p>
          This website and the BlanketCon server are hosted by{" "}
          <a href="https://chs.gg">
            Capitol Hosting Solutions
          </a>.
        </p>
        <p>
          Background music is{" "}
          <a href="https://modarchive.org/index.php?request=view_by_moduleid&query=33540">
            anarchy.mod
          </a>
          by <span className="name">faction/toolshed</span>.
        </p>
        <p>
          Background image is{" "}
          <a href="https://www.pexels.com/photo/city-view-at-night-4174977/">
            City View at Night
          </a>{" "}
          by <span className="name">Caio</span>.
        </p>
        <p>
          The BlanketCon 23 logo was made by{" "}
          <a href="https://www.khariwhitmore.com">Khari Whitmore</a>.
        </p>
        <p>
          Gifs provided by <a href="https://gifcities.org/">GifCities</a>.
        </p>
        <p>
          <b>
            This event is in no way associated with or endorsed by Mojang or
            Microsoft.
          </b>
        </p>
      </article>
    </>
  );
}
