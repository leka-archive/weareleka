<?php
	include("php/header.php");
	include("php/navbar.php");
 ?>

<!-- Carousel
	================================================== -->

	<div class="carousel carousel-contact">

		<div class="carousel-inner">

			<div class="item active">

				<?php include("php/googlemap.php"); ?>

			</div>	<!-- item active -->

		</div>	<!-- carousel-inner -->

	</div>	<!-- carousel -->


<!-- Subhead
================================================== -->
	<header class="carousel-subhead" id="overview">

		<div class="container">

			<h1>Email us <span class="lead">- We love nice messages</span></h1>

			<p class="introduction">Would you like to work for or with us? Don't be shy, contact us and we'll get back to you as soon as possible. You just want to say hi? Awesome! We like to meet cool people too!</p>

		</div>	<!-- container -->

	</header>	<!-- jumbotron subhead -->

<!-- Social!
================================================== -->

	<section id="mindset">

		<div class="container">

			<div class="row questions">

				<div class="span3 question">

					<h2>How can I contact you?</h2>

					<p class="answer">It's very easy! There are many ways: you can send us an email at <a title="Ecrivez-nous!" href="mailto:hello@weareleka.com?subject=I%20Love%20Leka&amp;body=You%20are%20awesome,%20keep%20up%20the%20good%20work!">hello [at] weareleka.com</a>, you can also use the contact form below or you can contact us directly. To make it funnier, we let you guess the address, it's pretty easy!</p>

				</div>

				<div class="span3 question">

					<h2>I am a journalist/ blogger/ student, do you have a press kit?</h2>

					<p class="answer">Yes! But not yet, it's under preperation. It will include a pretty presentation of the project, some visuals of the the products, staff pictures, our logos, and anything else you need! It will soon be easy to download it here : <a href="/download/press_kit_fr.zip" title="Lien de téléchargement du kit presse">Press kit</a></p>

				</div>

				<div class="span3 question">

					<h2>I really want to join! What should I do?</h2>

					<p class="answer">You'll have to amaze us! We'll always be looking for involved and creative people. Send us a short email at <a title="Ecrivez-nous!" href="mailto:jobs@weareleka.com?subject=I%20want%20to%20work%20for%20Leka!&amp;body=Here%20are%20all%20the%20fabulous%20things%20I've%20done,%20take%20a%20look!">jobs [at] weareleka.com</a>. <br> You can also take a look at our jobs dedicated page but it isn't available yet: <a href="jobs" title="jobs openings">Our jobs!</a> </p>

				</div>

				<div class="span3 question">

					<h2>What are you working on today?</h2>

					<p class="answer">Today, we develop Moti. We are currently on the third version of the prototype. We're doing a lot of testing. Meanwhile, we are also developing the interactions' analysis program. It takes time but it's quite exciting. If you want to give us a hand, everything is on <a class="icon github " title="Suivez-nous sur Github" href="https://github.com/WeAreLeka">GitHub</a>.</p>

				</div>

			</div>	<!-- row questions -->

		</div>	<!-- container -->

		<div class="container">

			<div class="row">
				<div class="span6">

					<?php
						include("php/newsletter.php");
					?>

				</div>
			</div>

		</div>

	</section>


<!-- Include Footer
================================================== -->
<?php
	include("php/footer.php");
 ?>