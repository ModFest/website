import { IS_BROWSER } from "$fresh/runtime.ts";

const LOCALE = IS_BROWSER ? undefined : "en-GB";
const TIME_ZONE = IS_BROWSER ? undefined : "UTC";

const FORMAT = new Intl.DateTimeFormat(LOCALE, {
    timeZone: TIME_ZONE,
    timeZoneName: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
})

const FORMAT_TIMEONLY = new Intl.DateTimeFormat(LOCALE, {
    timeZone: TIME_ZONE,
    timeZoneName: "short",
    hour: "numeric",
    minute: "2-digit"
})

export default function FormattedDateTime(props: {time: string, timeOnly?: boolean}) {
    return <time datetime={props.time}>
        {
            (props.timeOnly ? FORMAT_TIMEONLY : FORMAT).format(new Date(props.time))
        }
    </time>
}