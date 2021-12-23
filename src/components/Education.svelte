<script lang="ts">
    import type {Education} from "../models/education";

    /**
     * The list of education items.
     */
    export let educations: Education[];

    const toDate = (date: string): Date => {
        const dateParts = date.split(" ");
        return new Date(Date.parse(`${dateParts[0]} 1, ${dateParts[1]}`));
    }

    const dateString = (date: string): string => {
        if (date === "Present") {
            return "Now";
        }
        const actualDate = toDate(date);
        return `${actualDate.toLocaleDateString('default', {month: 'short'})} ${actualDate.getFullYear()}`;
    }
</script>


<div class="md:w-2/3">
    <div class="relative mt-5 text-left">
        {#each educations as edu}
            <div class="flex items-center relative">
                <div class="hidden md:block w-20 text-center">
                    <div class="text-xs font-bold italic">{dateString(edu.end)}</div>
                    <div class="text-xs italic">-</div>
                    <div class="text-xs font-bold italic">{dateString(edu.start)}</div>
                </div>

                <div class="hidden sm:block w-1 bg-black absolute h-full left-1/2 transform -translate-x-1/2 md:left-24 top-2 z-10"></div>
                <div class="rounded-full bg-white border-white border-4 w-8 h-8 absolute left-1/2 -translate-y-4 sm:translate-y-0 transform -translate-x-1/2 flex items-center justify-center md:left-24 top-2 z-10">
                    <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path>
                    </svg>
                </div>
                <div class="ml-10">
                    <div class="font-bold">{edu.name}</div>
                    <div class="italic">{edu.degree} {edu.major}</div>
                    {#if edu.minor}
                        <div class="italic text-xs">{edu.minor}</div>
                    {/if}
                </div>
            </div>
        {/each}
    </div>
</div>

