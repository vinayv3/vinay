<script>
	import Img from '@zerodevx/svelte-img';
	import customer from '$lib/assets/customer.png?run';
	import hrms from '$lib/assets/hrms.png?run';
	import partner from '$lib/assets/partner.png?run';
</script>

<div class="max-w-screen-xl mx-auto my-10 font-Inter">
	<nav class="flex justify-between uppercase">
		<a class="underline" href="">Vinay Kumar</a>

		<div class="flex space-x-24">
			<a href="">Work</a>
			<a href="">About</a>
			<a href="">Resume</a>
		</div>
	</nav>

	<main class="flex items-center justify-center pt-40">
		<div class="m-10 text-center text-xl font-semibold">
			<p class="font-bold mb-8">
				Hi, I'm <span
					class="text-transparent bg-clip-text bg-gradient-to-r from-vinay to-kumar text-6xl"
					>Vinay Kumar</span
				>
			</p>
			<p class="">UI/UX Designer based in Bangalore. Specialized in</p>
			<p>creating better design experiences for people by</p>
			<p>
				using skills in <span
					class="text-transparent bg-clip-text bg-gradient-to-r from-uiux to-design text-5xl font-bold"
					>UI/UX design</span
				>
			</p>
		</div>
	</main>

	<div class="flex items-center justify-between container mx-auto">
		<div>
			<p class="font-bold text-2xl mb-4">TechFino Partner Application</p>
			<p>
				Designed the partner application for the techfino company to help their partners maximize
				their business potential. Partnering with Techfino, a fintech startup company, enables their
				partners to utilize the Partner Application, simplifying the process of leading customers to
				services.
			</p>
		</div>

		<Img class="justify-self-end" src={partner} alt="" />
	</div>

	<div class="flex items-center justify-between container mx-auto">
		<Img class="justify-self-end" src={customer} alt="" />

		<div>
			<p class="font-bold text-2xl mb-4">TechFino Customer Application</p>
			<p>
				Designed the partner application for the techfino company to help their partners maximize
				their business potential. Partnering with Techfino, a fintech startup company, enables their
				partners to utilize the Partner Application, simplifying the process of leading customers to
				services.
			</p>
		</div>
	</div>

	<div class="flex items-center justify-between container mx-auto">
		<div>
			<p class="font-bold text-2xl mb-4">TechFino HRMS Application</p>
			<p>
				Designed an HRMS application for Techfino company to streamline their HR processes.. We
				custom-designed an HRMS application for Techfino Capital so that it could facilitate HRs to
				gain insight into the details, and progress of each employee, as well as provide them with
				the required records.
			</p>
		</div>

		<Img class="justify-self-end" src={hrms} alt="" />
	</div>
</div>
