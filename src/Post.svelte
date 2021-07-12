<div class="day_group" id="#rereplaceNocase(postDate, ' ', '-', 'ALL')#">
	<div class="date">
		<span class="day">#listGetat(postDate, 2,' ')#</span>
		<span class="month">#listFirst(postdate, ' ')#</span>
		<span class="year">#listLast(postdate, ' ')#</span>
	</div>				
	<div class="back-to">
		<a href="/rants/###id#"> <- Back to Timeline</a>
	</div>
	<div class="post">
			<!--- <h3 class="heading">Rant</h3> --->
		<small class="time">#timeFormat(created, 'hh:nntt')#</small>
		<div class="content">
			<h2>#title#</h2>
			<hr class="hr" />
			#content#
		</div>
	</div>
</div>