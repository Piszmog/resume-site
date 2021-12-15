<script lang="ts">
    import type {ToolboxEntry} from "../models/toolbox";
    import ToolboxItem from "./ToolboxItem.svelte";

    export let entries: ToolboxEntry[];
</script>

<div class="py-6 flex flex-col justify-center sm:py-12">
    <div class="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4 px-4">
        {#each entries as entry}
            <ToolboxItem {...entry}/>
        {/each}
    </div>
</div>
