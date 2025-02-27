import {JSX} from "preact";
export function Header(_props: JSX.HTMLAttributes<HTMLElement>) {
    return (
        <header>
            <nav className="card mt-4 flex flex-col gap-2">
                <div className="flex flex-col sm:flex-row justify-start items-center gap-2">
                    <a className="nav-link flex h-12 gap-2 no-underline clickable" href="/">
                        <img src="/assets/logo/modfest.svg" className="h-10 object-contain" alt="ModFest Logo"/>
                        <div className="text-base sm:text-3xl font-title text-mf-heading">ModFest</div>
                    </a>

                    <div className="grow"/>
                    <div className="flex flex-wrap gap-1">
                        <a className="nav-link nav-icon clickable" href="https://github.com/ModFest" target="_blank">
                            <img src="/assets/logo/github.svg" alt="GitHub link"/>
                        </a>
                        <a className="nav-link nav-icon clickable" href="https://modrinth.com/organization/modfest" target="_blank">
                            <img src="/assets/logo/modrinth.svg" alt="Modrinth link"/>
                        </a>
                        <div className="w-0.5 h-auto rounded-full bg-mf-text mx-1.5 my-0"></div>
                        <a className="nav-link nav-icon clickable" href="https://floss.social/@modfest" rel="me" target="_blank">
                            <img src="/assets/logo/mastodon.svg" alt="Mastodon link"/>
                        </a>
                        <a className="nav-link nav-icon clickable" href="https://bsky.app/profile/modfest.net" target="_blank">
                            <img src="/assets/logo/bluesky.svg" alt="Bluesky link"/>
                        </a>
                        <a className="nav-link nav-icon clickable" href="https://tumblr.com/modfest" target="_blank">
                            <img src="/assets/logo/tumblr.svg" alt="Tumblr link"/>
                        </a>
                        <a className="nav-link nav-icon clickable" href="https://x.com/ModFestEvent" target="_blank">
                            <img src="/assets/logo/x.svg" alt="X link"/>
                        </a>
                        <div className="w-0.5 h-auto rounded-full bg-mf-text mx-1.5 my-0"></div>
                        <a className="nav-link nav-icon clickable" href="https://discord.gg/gn543Ee" target="_blank">
                            <img className="!h-[1.6] !w-[1.6]" src="/assets/logo/discord.svg" alt="Discord server invite"/>
                        </a>
                    </div>
                </div>
            </nav>
        </header>
    );
}
