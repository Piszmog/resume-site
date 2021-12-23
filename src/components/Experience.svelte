<script lang="ts">
    import type {Role} from "../models/experience";

    /**
     * The name of the place where the experience was received (e.g. company name).
     */
    export let name: string;
    /**
     * The roles that were done at the place.
     */
    export let roles: Role[];
</script>

<div class="md:w-2/3">
    <div class="relative mt-5 text-left">
        {#each roles as role}
            <div class="flex items-center relative">
                <div class="hidden md:block w-20">
                    <div class="text-xs font-bold italic">{role.start} - {role.end}</div>
                </div>

                <div class="hidden sm:block w-1 bg-black absolute h-full left-1/2 transform -translate-x-1/2 md:left-20 top-2 z-10"></div>
                <div class="rounded-full bg-white border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center md:left-20 top-2 z-10">
                    {#if role.changeReason === "promotion"}
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    {:else if role.changeReason === "lateral"}
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"
                             xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 1.414L10.586 9H7a1 1 0 100 2h3.586l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    {:else}
                        <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                  d="M3 6a3 3 0 013-3h10a1 1 0 01.8 1.6L14.25 8l2.55 3.4A1 1 0 0116 13H6a1 1 0 00-1 1v3a1 1 0 11-2 0V6z"
                                  clip-rule="evenodd"></path>
                        </svg>
                    {/if}
                </div>
                <div class="ml-10">
                    <div class="font-bold">{name}</div>
                    <div class="italic md:mb-4">{role.title}</div>
                    <div class="mb-10">
                        {role.description}
                        <ul class="list-outside list-disc ml-6">
                            {#each role.details as details}
                                <li>{details}</li>
                            {/each}
                        </ul>
                    </div>
                </div>
            </div>
        {/each}
    </div>
</div>
