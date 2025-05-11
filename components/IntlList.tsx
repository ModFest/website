import { ComponentChild } from "preact/src/index.d.ts";

const format = new Intl.ListFormat('en', { type: 'conjunction' });

export default function IntlList({ children }:{children:ComponentChild[]}) {
    return <>
        {format.formatToParts(new Array(children.length).fill(0).map((_,i)=>i.toString())).map((part) => {
            if (part.type === 'element') {
                return children[parseInt(part.value)];
            } else if (part.type === 'literal') {
                return part.value;
            } else {
                return null;
            }
        })}
    </>
}