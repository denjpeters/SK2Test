<script>
    import {enhance} from "$app/forms";
    import {invalidate} from "$app/navigation";

    export let data
</script>

<h3 style="text-align: center;">Route A Value: {data.persist_object.counter}</h3>

<div>
    <form method="post"
          action='/?/increment'
          use:enhance={() => {
              return async () => {
                  invalidate('app:persist')
              };
          }}>
        <button type="submit">
            Increment Value
        </button>
    </form>
</div>

<div>
    <a href="/RouteB">After incrementing, navigate to Route B</a>
</div>

<div>
    <a href="/">Home</a>
</div>
