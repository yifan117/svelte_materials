<script>
    import Material from '$lib/components/Material.svelte'
    import Heading from '$lib/components/Heading.svelte'
    import Materialv2 from '$lib/components/Materialv2.svelte';

</script>

<div class="page">
    <Heading/>
    <Materialv2/>
    <!-- <Material/> -->
</div>

<style>

.page {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 10px;
}

</style>