import type { Submission, User } from "../lib/types.d.tsx";
import { getLink } from "../lib/helpers.tsx";

export type SubmissionProps = {
  submission: Submission;
  users: User[];
  submissionIndex: number;
};

export function Submission(props: SubmissionProps) {
  return (
    <>
      <div
        class="shadow-(--shadow-mf-card) rounded-2xl bg-mf-card overflow-hidden text-[unset] clickable"
        target="_blank"
      >
        <a href={getLink(props.submission)} target="_blank">
          <div class="w-full bg-mf-unknown h-40 overflow-hidden z-[5]">
            {props.submission.images && props.submission.images.screenshot && (
              <img
                draggable={false}
                class="w-full h-40 object-cover"
                src={props.submission.images.screenshot}
                alt={`Gallery image for ${props.submission.name}`}
              />
            )}
            {props.submission.images && !props.submission.images.screenshot &&
              props.submission.images.icon && (
              <img
                draggable={false}
                class="w-full rotate-45 scale-[300%] opacity-95 pixelated h-40 object-cover"
                src={props.submission.images.icon}
                alt={`Icon for ${props.submission.name}`}
              />
            )}
          </div>
        </a>
        <div class="p-4 pt-3 self-center">
          {props.submission.images && props.submission.images.icon && (
            <a href={getLink(props.submission)} target="_blank">
              <div class="w-24 h-24 object-contain rounded-2xl border-mf-card border-4 border-solid mt-[-4rem] bg-mf-unknown overflow-hidden z-10 absolute">
                <img
                  draggable={false}
                  class="w-24 h-24 pixelated"
                  src={props.submission.images.icon}
                  alt={`Icon for ${props.submission.name}`}
                />
              </div>
            </a>
          )}
          <div
            class={props.submission.images && props.submission.images.icon
              ? "ml-[7.25rem]"
              : ""}
          >
            <a
              href={getLink(props.submission)}
              target="_blank"
              style="text-decoration:none"
            >
              <h3 class="m-0 text-mf-heading">{props.submission.name}</h3>
            </a>
            {props.submission.authors.map((author, index) => {
              const user = props.users.find((u) => u.id === author);
              return user
                ? (
                  <a
                    key={`${props.submissionIndex}-${index}`}
                    href={`/user/${user.id}`}
                  >
                    {user.name}
                  </a>
                )
                : author;
            }).map((userElement, index) => {
              let join = "";
              if (index === props.submission.authors.length - 1) {
                if (
                  props.submission.authors.length > 2
                ) {
                  join = ", and ";
                } else if (
                  props.submission.authors.length === 2
                ) {
                  join = " and ";
                }
              } else if (index > 0) {
                join = ", ";
              }
              return (
                <span key={`${props.submissionIndex}-${index}`}>
                  <span>{join}</span>
                  {userElement}
                </span>
              );
            })}
          </div>
          <p className="m-0 mt-2 text-mf-heading">
            {props.submission.description}
          </p>
        </div>
      </div>
    </>
  );
}
