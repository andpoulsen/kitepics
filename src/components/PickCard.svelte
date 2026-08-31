<script>
  export let pick;
  export let priority = false;

  const stars = '★'.repeat(pick.rating) + '☆'.repeat(5 - pick.rating);
  const imageName = pick.image
    .split('/')
    .pop()
    .replace(/\.[^.]+$/, '');
  const optimizedImageBase = `assets/images/optimized/${imageName}`;
  const imageSizes = '(max-width: 720px) calc(100vw - 124px), min(500px, 50vw)';
</script>

<article
  class="pick"
  class:reverse={pick.reverse}
  class:portrait={pick.portrait}
  data-rank={pick.rank}
>
  <figure class="pick-image">
    <a
      href={pick.image}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Open full-size image: ${pick.alt}`}
    >
      <picture>
        <source
          type="image/webp"
          srcset={`${optimizedImageBase}-640.webp 640w, ${optimizedImageBase}-1200.webp 1200w`}
          sizes={imageSizes}
        />
        <img
          src={pick.image}
          srcset={`${optimizedImageBase}-640.jpg 640w, ${optimizedImageBase}-1200.jpg 1200w, ${pick.image} 2400w`}
          sizes={imageSizes}
          width="2400"
          height="1600"
          loading={priority ? 'eager' : 'lazy'}
          fetchpriority={priority ? 'high' : 'auto'}
          decoding="async"
          alt={pick.alt}
        />
      </picture>
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
