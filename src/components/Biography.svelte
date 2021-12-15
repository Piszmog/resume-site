<script lang="ts">
    /**
     * The name of the person.
     */
    export let name: string;
    /**
     * The person's current role title.
     */
    export let title: string;
    /**
     * The person's current role sub-title.
     */
    export let subtitle: string;
    /**
     * The URL home of the user.
     */
    export let home: string;
    /**
     * The about of the user.
     */
    export let about: string;
    /**
     * The skills of the user.
     */
    export let skills: string[];
</script>

<div class="grid grid-cols-2 mt-16">
    <div class="col-start-1">
        <h1 class="text-6xl font-bold">{name}</h1>
        <p class="w-full mt-5 text-gray-500 lowercase">{title}</p>
        <p class="text-xs w-full text-gray-500 lowercase italic">{subtitle}</p>
        <div class="mt-2">
            <a href="{home}" target="_blank">
                <img class="w-6 h-6" src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg" alt="GitHub Link"/>
            </a>
        </div>
    </div>
    <div class="col-start-2">
        <h4 class="text-sm font-bold">About</h4>
        <p>{about}</p>
        <h4 class="text-sm font-bold mt-5">Skills</h4>
        <ul class="list-outside list-disc ml-6">
            {#each skills as skill}
                <li>{skill}</li>
            {/each}
        </ul>
    </div>
</div>



