/*!
 * project-name v0.0.1
 * A description for your project.
 * (c) 2018 YOUR NAME
 * MIT License
 * http://link-to-your-git-repo.com
 */

document.addEventListener('click', (function (event) {
	if (!event.target.matches('#click-me')) return;
	alert('You clicked me!');
}), false);