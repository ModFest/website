const FORMAT = new Intl.DateTimeFormat("en-GB", {
    timeZone: "UTC",
    timeZoneName: "short",
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "numeric",
    minute: "2-digit"
})
const FORMAT_TIMEONLY = new Intl.DateTimeFormat("en-GB", {
    timeZone: "UTC",
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