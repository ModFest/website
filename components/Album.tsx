export type AlbumProps = {
  title?: string;
  iconUrl?: string;
  themeColour?: string;
  links?: Link[];
};

export type Link = {
  title: string;
  to: string;
};

const defaultProps = {
  title: "John ModFest's Mixtape",
  iconUrl:
    "https://upload.wikimedia.org/wikipedia/commons/4/42/One_C418_album_logo.jpg",
  themeColour: "#047cfc",
};

export function Album(props: AlbumProps) {
  props = { ...defaultProps, ...props };
  return (
    <div
      class="p-3 flex flex-col gap-4 sm:flex-row rounded-xl my-2 shadow-xl"
      style={`background-color: ${props.themeColour}50`}
    >
      <div class="grow flex flex-col items-center shrink-0">
        <img
          alt={`Album cover for ${props.title}`}
          draggable={false}
          class="size-48 rounded-md shadow-xl"
          src={props.iconUrl}
        />
      </div>
      <div class="flex my-2 flex-col justify-between gap-2">
        <h1 class="text-center sm:text-left">{props.title}</h1>
        <div class="flex flex-col sm:items-start items-center gap-2">
          <p>Listen on</p>
          <span class="flex flex-row gap-2 flex-wrap">
            {props.links &&
              props.links.map((link) => (
                <a
                  href={link.to}
                  target="_blank"
                  class="button clickable shadow-xl"
                  key={link.title}
                >
                  {link.title}
                </a>
              ))}
          </span>
        </div>
      </div>
    </div>
  );
}
