import { Fragment } from "preact/jsx-runtime";
import FormattedDateTime from "../islands/DateTime.tsx";
import { ScheduleEntryData, User } from "../lib/types.d.tsx";
import UserLink from "./UserLink.tsx";

export function Schedule(props: {schedule: ScheduleEntryData[], users?: User[]}) {
    return <div class="card">
        <h1>Event Schedule</h1>
        <table>
          <thead>
            <tr>
              <th>
                Event
              </th>
              <th>
                Type
              </th>
              <th>
                Location
              </th>
              <th>
                Start
              </th>
              <th>
                End
              </th>
              <th>
                Hosts
              </th>
            </tr>
          </thead>
          <tbody>
            {props.schedule.map(entry => 
              <Fragment key={entry.id}>
                <tr>
                  <td>
                    {entry.title}
                  </td>
                  <td>
                    {entry.type}
                  </td>
                  <td>
                    {entry.location}
                  </td>
                  <td>
                    {entry.start ? <FormattedDateTime time={entry.start}></FormattedDateTime> : "-"}
                  </td>
                  <td>
                    {entry.end ? <FormattedDateTime time={entry.end} timeOnly></FormattedDateTime> : "-"}
                  </td>
                  <td>
                    {
                    // TODO split off into more generic stuff
                      entry.authors.map(author => <UserLink key={author} id={author} users={props.users}></UserLink>)
                      .map((userElement, index) => {
                        let join = "";
                        if (index === entry.authors.length - 1) {
                          if (entry.authors.length > 2) {
                            join = ", and ";
                          } else if (entry.authors.length === 2) {
                            join = " and ";
                          }
                        } else if (index > 0) {
                          join = ", ";
                        }
                        return (
                            <span key={index}>
                          <span>{join}</span>
                              {userElement}
                        </span>
                        );
                      })
                    }
                  </td>
                </tr>
                <tr>
                  <td colSpan={6}>
                    {entry.description}
                  </td>
                </tr>
              </Fragment>
            )}
          </tbody>
        </table>
    </div>
  }