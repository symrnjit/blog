<script>
	export let post;

	let post_date = post.date.split('/');

</script>
<div class="day_group" id="">
	<div class="date">
		<span class="day">{post_date[0]}</span>
		<span class="month">{post_date[1]}</span>
		<span class="year">{post_date[2]}</span>
	</div>
	
	<div class="post" id="id">
		<small class="time">{post.time}</small>
		<div class="content">
			{post.content}
		</div>
	</div>
</div>