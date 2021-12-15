<script lang="ts">
    /**
     * The url to the repo containing the source code for the web page.
     */
    export let repoUrl: string;
</script>

<footer class="text-gray-600 body-font mt-16">
    <div class="bg-gray-100">
        <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
            <span class="text-gray-500 text-sm text-center sm:text-left inline-flex">
                Built with Svelte <img class="w-6 h-6" src="https://cdn.worldvectorlogo.com/logos/svelte-1.svg"
                                       alt="Svelte Logo"> + TailwindCSS <img class="w-6 h-6"
                                                                             src="https://cdn.worldvectorlogo.com/logos/tailwindcss.svg"
                                                                             alt="Tailwind Logo">
            </span>
            <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
                <a href="{repoUrl}" target="_blank">
                    <img class="w-6 h-6" src="https://cdn.worldvectorlogo.com/logos/github-icon-1.svg"
                         alt="Source Code Link"/>
                </a>
            </span>
        </div>
    </div>
</footer>
