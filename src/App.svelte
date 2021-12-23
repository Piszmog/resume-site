<script lang="ts">
    import type {Config} from "./services/app";
    import {App} from "./services/app";
    import {DB} from "./services/db";
    import Education from "./components/Education.svelte";
    import Toolbox from "./components/Toolbox.svelte";
    import Biography from "./components/Biography.svelte";
    import Footer from "./components/Footer.svelte";
    import Experience from "./components/Experience.svelte";

    const config: Config = {
        apiKey: "AIzaSyDxupXMbBKNkyUind2EsCBTqNFB1Xs930U",
        authDomain: "piszmog-resume.firebaseapp.com",
        projectId: "piszmog-resume",
        storageBucket: "piszmog-resume.appspot.com",
        messagingSenderId: "937025889424",
        appId: "1:937025889424:web:803b10cbe252ee1d8fe415"
    };
    const app = new App(config);
    const db = new DB(app);

    const bioPromise = db.get("bio");
    const eduPromise = db.get("edu");
    const expPromise = getExp();
    const toolPromise = db.get("tool");

    const toDate = (date: string): Date => {
        const dateParts = date.split(" ");
        return new Date(Date.parse(`${dateParts[0]} 1, ${dateParts[1]}`));
    }

    const compareRoles = (a, b): number => {
        return toDate(b.start).getTime() - toDate(a.start).getTime();
    }

    const compareCompanies = (a, b): number => {
        return toDate(b.roles[0].start).getTime() - toDate(a.roles[0].start).getTime();
    }

    async function getExp() {
        let companies = await db.get("companies");
        for (const company of companies) {
            for (let i = 0; i < company.roles.length; i++) {
                company.roles[i] = await db.getById('experience', company.roles[i].id);
            }
            company.roles.sort(compareRoles);
        }
        return companies.sort(compareCompanies);
    }
</script>

<main class="mx-auto px-6 my-16">
    {#await bioPromise then bio}
        <Biography {...bio[0]}/>
    {/await}

    {#await toolPromise then tools}
        <h2 class="mt-16 text-2xl font-bold">Toolbox</h2>
        <Toolbox entries={tools}/>
    {/await}


    <div class="grid grid-cols-2">
        <div class="col-start-1">
            {#await expPromise then exp}
                <h2 class="mt-16 text-2xl font-bold">Experience</h2>
                {#each exp as e}
                    <Experience {...e}/>
                {/each}
            {/await}
        </div>
        <div class="col-start-2">
            {#await eduPromise then edu}
                <h2 class="mt-16 text-2xl font-bold">Education</h2>
                <Education educations={edu}/>
            {/await}
        </div>
    </div>

    <Footer repoUrl="https://github.com/Piszmog/resume-site"/>
</main>

<style global>
    @tailwind base;
    @tailwind components;
    @tailwind utilities;
</style>
