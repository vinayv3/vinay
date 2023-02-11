<script>
	import Img from '@zerodevx/svelte-img';
	import partner from '$lib/assets/partner.png?run';
	import imac from '$lib/assets/imac.png?run';
	import iphone from '$lib/assets/iphone.png?run';
	import iphone1 from '$lib/assets/iphone1.png?run';
	import iphone2 from '$lib/assets/iphone2.png?run';
	import wireframe from '$lib/assets/wireframe.png?run';
	import prototype from '$lib/assets/prototype.png?run';
</script>

<div class="max-w-screen-xl mx-auto my-10 font-Inter">
	<nav class="flex justify-between uppercase">
		<a class="underline" href="/">Vinay Kumar</a>

		<div class="flex space-x-24">
			<a href="">Work</a>
			<a href="">About</a>
			<a href="">Resume</a>
		</div>
	</nav>

	<div class="flex items-center mt-10">
		<div>
			<p class="text-3xl font-bold my-16">TechFino Partner Application</p>
			<p class="text-2xl font-bold mb-4">overview</p>
			<p class="text-lg">
				Techfino Capital is a fintech startup company that specializes in providing loans to
				customers through its partners. Partner applications are an integral part of the process, as
				they lead customers to Techfino from wherever they are. This innovative approach has allowed
				Techfino to become an industry leader in providing customers with the funds they need.
			</p>
		</div>
		<Img class="justify-self-end" src={partner} alt="" />
	</div>

	<p class="text-3xl font-bold my-6">Role</p>
	<p class="text-2xl mb-20">UI/UX Designer</p>
	<p class="text-2xl font-bold mb-6">Business Needs</p>
	<p class="text-lg">
		Techfino Capital is a fintech startup company that specializes in providing loans to customers
		through its partners. Partner applications are an integral part of the process, as they lead
		customers to Techfino from wherever they are. This innovative approach has allowed Techfino to
		become an industry leader in providing customers with the funds they need.
	</p>
	<p class="text-2xl font-bold mt-20 mb-6">Solution Provided</p>
	<p class="text-lg">
		To address the difficulty partners were having with the desktop application, we developed the
		Partner Mobile Application. This application can be accessed anytime, anywhere, and makes it
		easy for partners to maintain relationships with their customers and grow their businesses. With
		this solution, partners can now take advantage of the convenience of a mobile application while
		still having access to all the features of the desktop version.
	</p>

	<div class="grid grid-cols-3 gap-20 mt-20">
		<div class="col-span-2">
			<p class="text-3xl mb-12 text-center">Before</p>
			<Img class="" src={imac} alt="" />
		</div>
		<div>
			<p class="text-3xl mb-10 text-center">After</p>
			<Img class="" src={iphone} alt="" />
		</div>
	</div>

	<p class="text-2xl font-bold mt-20 mb-6">User Research</p>
	<p class="text-lg">
		We recently conducted surveys with our partners to investigate if they required any new features
		for their partner application. The results of these surveys will help us to better understand
		our partners' needs and develop new features accordingly.
	</p>

	<p class="text-lg my-20">According to the survey, the partner requirements are as follows:</p>
	<div class="grid grid-cols-2 gap-20">
		<div>
			<p class="text-lg mb-16 text-center">
				1. Provide partners with the ability to download invoices in the mobile application, as
				opposed to only being able to view them in the desktop application.
			</p>
			<Img class="" src={iphone1} alt="" />
		</div>
		<div>
			<p class="text-lg mb-16 text-center">
				2. Enable partners to resend a link to customers multiple times during the process, rather
				than having to start from the beginning if the link needs to be sent again in the desktop
				application.
			</p>
			<Img class="al" src={iphone2} width="300" alt="" />
		</div>
	</div>

	<p class="text-2xl font-bold mt-20 mb-6">Wireframes</p>
	<p class="text-lg">
		When designing the mobile application, we kept in mind the flaws of the desktop application,
		such as its lack of visuals, poor typography, and lack of highlighted important fields. With
		this in mind, we began creating rough sketches to improve the user experience.
	</p>
	<Img class="my-20" src={wireframe} alt="" />

	<p class="text-2xl font-bold mt-20 mb-6">Prototype</p>
	<p class="text-lg">
		Once I had the low-fidelity sketches at the desired level, I began creating the high-fidelity
		wireframe/prototype in Figma. This is where the user interface started to come together, and the
		following are the prototypes.
	</p>
	<Img class="my-20" src={prototype} alt="" />

	<p class="text-2xl font-bold my-28 mb-6">Results</p>
	<p class="text-lg">
		The successful launch of Techno's mobile application has been a huge boost to the business, with
		a 47% increase in revenue. Additionally, the user-friendly application has resulted in better
		partner relationships with customers, further strengthening Techno's position in the market.
	</p>

	
</div>
<div class="h-80 bg-partner-gray" />