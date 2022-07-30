<script>
    import { fade } from "svelte/transition";

    import Link from "../components/Link.svelte";

    import Commissions from "../components/Commissions.svelte";
    import Experience from "../components/Experience.svelte";
    import Education from "../components/Education.svelte";
    import DevStack from "../components/DevStack.svelte";
    import Project from "../components/Project.svelte";
</script>

<div id="resume-set" class="col-sm-6" in:fade>
    <h4 class="bolder"><Link>&lt; go back</Link></h4>
    <hr />
    <h2 class="bolder">Aiman Maharana</h2>
    <h5><Link to="mailto:hi@n4o.xyz">hi@n4o.xyz</Link></h5>
    <h6><Link to="https://n4o.xyz" /></h6>
    <h6><Link to="https://github.com/noaione">GitHub</Link></h6>
    <h6>Indonesia</h6>
    <h3 class="bolder split-head">Works/Commissions</h3>
    <Commissions name="Potia" requester="Muse Indonesia">
        A multipurpose Discord Bot to help manage the official Muse Indonesia discord server.
        It includes ticketing system, report system, and many more moderation tooling.
        <Link to="https://github.com/noaione/potia-muse">GitHub Link</Link>
    </Commissions>
    <h3 class="bolder split-head">Personal Projects</h3>
    <Project name="naoTimes" url="https://github.com/naoTimesdev/naoTimes" description="A Discord Bot written in Python to track Fansub/Project progress" />
    <Project name="vtscheduler-ts" url="https://github.com/ihateani-me/vtscheduler-ts" description="A backend to track VTuber streams, utilizing multiple video platform API and MongoDB" />
    <Project name="ihaapi-ts" url="https://github.com/ihateani-me/ihaapi-ts" description="An API mainly focused on VTuber, utilizing vtscheduler-ts and GraphQL" />
    <Project name="tesaurus-python" url="https://github.com/noaione/tesaurus-python" description="A CLI/Python module to get Indonesian Thesaurus" />
    <h3 class="bolder split-head">DevStack</h3>
    <DevStack title="ide">
        vscode
    </DevStack>
    <DevStack title="languages">
        python/python3, javascript/typescript, c#, java
    </DevStack>
    <DevStack title="framework">
        flask, nodejs, expressjs, graphql, nextjs/reactjs
    </DevStack>
    <DevStack title="databases">
        mongodb, mysql, redis
    </DevStack>
    <DevStack title="devops">
        nginx, circleci, github-actions
    </DevStack>
    <DevStack title="os">
        windows, linux (ubuntu 16+, debian 9+)
    </DevStack>
    <h3 class="bolder split-head">Education</h3>
    <Education name="Asia Pacific University, Malaysia" start="2020" end="Present">
        Computer Science (Intelligent System)
    </Education>
</div>

<style>
    #resume-set {
        margin-top: 2rem;
        margin-bottom: 2rem;
    }

    .split-head {
        margin-top: 1.5rem;
    }
</style>
