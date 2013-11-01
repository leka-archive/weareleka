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

	</div><!-- carousel -->


<!-- Subhead
================================================== -->
	<header class="carousel-subhead" id="overview">

		<div class="container">

			<h1>Ecrivez-nous ! <span class="lead">- on adore les gentils messages</span></h1>

			<p class="introduction">Vous voulez travaillez avec ou pour nous&nbsp;? Ne soyez pas timide, contactez nous et nous reviendrons vers vous le plus vite possible. Et si vous voulez juste nous faire coucou&nbsp;? Super&nbsp;! On aime trop rencontrer des gens chouettes&nbsp;!</p>

		</div>	<!-- container -->

	</header>	<!-- jumbotron subhead -->

<!-- Social!
================================================== -->

	<section id="mindset">

		<div class="container">

			<div class="row contact">

				<div class="span3 mindset fb">

				</div>

				<div class="span3 twitter">

				</div>

				<div class="span3 other-social">

				</div>

				<div class="span3 mail">

				</div>

			</div>

			<div class="row questions">

				<div class="span3 question">

					<h2>Comment puis-je vous contacter&nbsp;?</h2>

					<p class="answer">C'est très facile ! Il y a plusieurs moyens : vous pouvez-nous écrire sur <a title="Ecrivez-nous!" href="mailto:hello@weareleka.com?subject=I%20Love%20Leka&amp;body=You%20are%20awesome,%20keep%20up%20the%20good%20work!">hello@weareleka.com</a>, vous pouvez aussi utiliser le formulaire de contact ci-dessous, ou alors vous pouvez nous écrire directement. Pour que ce soit plus drôle, nous vous laissons deviner les adresses, c'est hyper facile !</p>

				</div>

				<div class="span3 question">

					<h2>Je suis journaliste/ bloggeur/ étudiant, avez-vous un kit presse ?</h2>

					<p class="answer">Oui! Mais non pas encore, il est en cours de préparation. Il contiendra une jolie présentation du projet, des visuels des produits, des photos de l'équipe, nos logos, bref tout ce dont vous avez besoin ! Il sera téléchargeable ici : <a href="/download/press_kit_fr.zip" title="Lien de téléchargement du kit presse">kit press</a></p>

				</div>

				<div class="span3 question">

					<h2>J'ai très envie de rejoindre l'équipe, je fais comment&nbsp;?</h2>

					<p class="answer">Il va falloir nous impressionner ! Nous sommes toujours à la recherche de gens créatifs et engagés. Envoyez-nous un petit email à <a title="Ecrivez-nous!" href="mailto:jobs@weareleka.com?subject=I%20want%20to%20work%20for%20Leka!&amp;body=Here%20are%20all%20the%20fabulous%20things%20I've%20done,%20take%20a%20look!">jobs@weareleka.com</a>. <br> Vous pouvez aussi regarder notre page dédiée aux jobs mais elle n'est pas encore construite : <a href="jobs" title="jobs openings">Nos annonces !</a> </p>

				</div>

				<div class="span3 question">

					<h2>Sur quoi travaillez-vous aujourd'hui&nbsp;?</h2>

					<p class="answer">Aujourd'hui, nous développons Moti. Nous sommes à la version 3 du prototype, nous réalisons plein d'essais. Nous développons aussi en parallèle le programme d'analyse des interactions. Ca prend du temps mais c'est passionnant. Si vous voulez nous donner un coup de main, tout est sur <a class="icon github " title="Suivez-nous sur Github" href="https://github.com/WeAreLeka">GitHub</a>.</p>

				</div>

			</div>	<!-- row questions -->

		</div>	<!-- row -->


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