<script>
  export let pick;

  const stars = '★'.repeat(pick.rating) + '☆'.repeat(5 - pick.rating);
</script>

<article class="pick" class:reverse={pick.reverse} class:portrait={pick.portrait} data-rank={pick.rank}>
  <figure class="pick-image">
    <a
      href={pick.image}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open full-size image: ${pick.alt}`}
    >
      <img src={pick.image} alt={pick.alt} />
    </a>
    <figcaption class="filename">{pick.filename}</figcaption>
  </figure>

  <div class="pick-text">
    {#if pick.medal}
      <span class="medal" aria-hidden="true">{pick.medal}</span>
    {/if}
    <div class="stars" role="img" aria-label={`${pick.rating} out of 5 stars`}>{stars}</div>
    <h2>{pick.title}</h2>
    <span class="tag">{pick.tag}</span>
    {#each pick.body as paragraph}
      <p>{@html paragraph}</p>
    {/each}
    <p class="note">{pick.note}</p>
  </div>
</article>
