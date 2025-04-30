import FormattedDateTime from "../islands/DateTime.tsx";
import { ScheduleEntryData, User } from "../lib/types.d.tsx";
import IntlList from "./IntlList.tsx";
import UserLink from "./UserLink.tsx";

export function Schedule(
  props: { schedule: ScheduleEntryData[]; users?: User[] },
) {
  return (
    <div class="card">
      <h1 id="schedule">Event Schedule</h1>
      <div>
        {props.schedule.map((entry) => {
          return (
            <div key={entry.id} class="py-4">
              <h3 id={`event-${entry.id}`}>{entry.title}</h3>
              <table class="w-full">
                <tbody>
                  <tr>
                    <td>Type</td>
                    <td>
                      {entry.type?.split(" ").map((word) =>
                        word.slice(0, 1).toUpperCase() + word.slice(1)
                      ).join(" ") ?? "-"}
                    </td>
                  </tr>
                  <tr>
                    <td>Time</td>
                    <td>
                      {entry.start
                        ? <FormattedDateTime time={entry.start} />
                        : "-"} - {entry.end
                        ? <FormattedDateTime time={entry.end} timeOnly />
                        : "-"}
                    </td>
                  </tr>
                  <tr>
                    <td>Location</td>
                    <td>
                      {entry.location ?? "-"}
                    </td>
                  </tr>
                  <tr>
                    <td>Hosts</td>
                    <td>
                      <IntlList>
                        {entry.authors.map(author=><UserLink key={author} id={author} users={props.users}/>)}
                      </IntlList>
                    </td>
                  </tr>
                  <tr>
                    <td>Description</td>
                    <td class="w-full">{entry.description ?? "-"}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          );
        })}
      </div>
    </div>
  );
}