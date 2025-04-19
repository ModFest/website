import { RouteContext } from "$fresh/server.ts";
import { fetchUser } from "../lib/platform-api.tsx";
import { User } from "../lib/types.d.tsx";

export default function UserLink(props: {id: string, users?: User[]}) {
    const userData = (props.users || []).find((u) => u.id === props.id);
    return userData ?
        <a href={`/user/${userData.id}`}>{userData.name}</a> :
        <a href={`/user/${props.id}`}>{props.id}</a>
}