<script>
    export let data
</script>

<h1>Invalidate Not Persisting Navigation</h1>

<div style="margin-top: 2em; margin-left: auto; margin-right: auto; border: 1px gray solid; border-radius: 5px; max-width: 35em; padding-left: 10px; padding-right: 10px; background-color: #EEEEEE;">
    <p>When an invalidate is run, the current page refreshes the new value from the back-end properly.</p>
    <p>However, when navigating to another page, the loaded variable
        reverts to the pre-invalidated value.</p>
</div>

<h2>Layout Value: {data.persist_object.counter}</h2>

<slot/>
