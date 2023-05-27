---
#
# Use the widgets beneath and the content will be
# inserted automagically in the webpage. To make
# this work, you have to use › layout: frontpage
#
permalink: /index.html
layout: frontpage
header:
 image_fullwidth: header.jpg
widget1:
  title: "Projects"
  url: /projects
  image: projects.jpg
  text: "Check out my projects."
widget2:
  title: "About"
  url: /about
  image: me.jpg
  text: "Check out to know about me."
widget3:
  title: "Notes"
  url: /notes
  image: notes.png
  text: "Check out my notes."
---
<div style="text-align: center">
	<p align="center">
		Hi, this is a personal website of <a href="{{site.baseurl}}/about" >K. Sreeman Reddy</a>. Check out the <a href="{{site.baseurl}}/projects">projects</a> page. Other links are there in the navigation bar.
	</p>
</div>

<div style="text-align:center;">

</div>

<script type="text/x-mathjax-config">
  MathJax.Hub.Config({
    tex2jax: {
      inlineMath: [ ['$','$'], ["\\(","\\)"] ],
      processEscapes: true
    }
  });
</script>
    
<script type="text/javascript"
        src="https://cdn.mathjax.org/mathjax/latest/MathJax.js?config=TeX-AMS-MML_HTMLorMML">
</script>

$$\boxed{
\begin{aligned}
\mathcal{L}= &-\frac{1}{4} B_{\mu \nu} B^{\mu \nu}-\frac{1}{8} t r\left(\mathbf{W}_{\mu \nu} \mathbf{W}^{\mu \nu}\right)-\frac{1}{2} t r\left(\mathbf{G}_{\mu \nu} \mathbf{G}^{\mu \nu}\right) &{\text{(U(1), SU(2) and SU(3) gauge terms)}}\\
&+\left(\bar{\nu}_{L}, \bar{e}_{L}\right) \tilde{\sigma}^{\mu} i D_{\mu}\left(\begin{array}{c}
\nu_{L} \\
e_{L}
\end{array}\right)+\bar{e}_{R} \sigma^{\mu} i D_{\mu} e_{R}+\bar{\nu}_{R} \sigma^{\mu} i D_{\mu} \nu_{R}+(\text { h.c. }) &{\text{(lepton dynamical term)}}\\
&-\frac{\sqrt{2}}{v}\left[\left(\bar{\nu}_{L}, \bar{e}_{L}\right) \phi M^{e} e_{R}+\bar{e}_{R} \bar{M}^{e} \bar{\phi}\left(\begin{array}{c}
\nu_{L} \\
e_{L}
\end{array}\right)\right] &{\text{(electron, muon, tauon mass term)}}\\
&-\frac{\sqrt{2}}{v}\left[\left(-\bar{e}_{L}, \bar{\nu}_{L}\right) \phi^{*} M^{\nu} \nu_{R}+\bar{\nu}_{R} \bar{M}^{\nu} \phi^{T}\left(\begin{array}{c}
- e_{L} \\
\nu_{L}
\end{array}\right)\right] &{\text{(neutrino mass term)}}\\
&+\left(\bar{u}_{L}, \bar{d}_{L}\right) \tilde{\sigma}^{\mu} i D_{\mu}\left(\begin{array}{c}
u_{L} \\
d_{L}
\end{array}\right)+\bar{u}_{R} \sigma^{\mu} i D_{\mu} u_{R}+\bar{d}_{R} \sigma^{\mu} i D_{\mu} d_{R}+(\text { h.c. })&{\text{(quark dynamical term)}} \\
&-\frac{\sqrt{2}}{v}\left[\left(\bar{u}_{L}, \bar{d}_{L}\right) \phi M^{d} d_{R}+\bar{d}_{R} \bar{M}^{d} \bar{\phi}\left(\begin{array}{c}
u_{L} \\
d_{L}
\end{array}\right)\right] &\text{(down, strange, bottom mass term)}\\
&-\frac{\sqrt{2}}{v}\left[\left(-\bar{d}_{L}, \bar{u}_{L}\right) \phi^{*} M^{u} u_{R}+\bar{u}_{R} \bar{M}^{u} \phi^{T}\left(\begin{array}{c}
-d_{L} \\
u_{L}
\end{array}\right)\right] &{\text{(up, charmed, top mass term)}}\\
&+\overline{\left(D_{\mu} \phi\right)} D^{\mu} \phi-m_{h}^{2}\left[\bar{\phi} \phi-v^{2} / 2\right]^{2} / 2 v^{2} &\text{(Higgs dynamical and mass term)}\\
& \color{red}{+\frac{1}{16 \pi G} R}&{\text{(}\color{red}{\text{Semiclassical Gravity}}\text{ :Not valid near the }\color{red}{\text{Planck scale}})}\\
\end{aligned}
}
$$

<!-- https://www.preposterousuniverse.com/blog/2013/01/04/the-world-of-everyday-experience-in-one-equation/ --> 

<!-- https://www.motionmountain.net/Standard_Model.pdf --> 