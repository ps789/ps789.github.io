---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

Education
======
* Ph.D in Computer Science, Georgia Institute of Technology, 2028 (Expected), GPA: 4.0
* MS in Machine Learning, Carnegie Mellon University, 2023 (Left to Pursue Ph.D.), QPA: 4.0
* B.A. in Computer Science (Magna Cum Laude) and Mathematics, Cornell University, 2022, GPA: 3.91.


Research Experience
======
* Graduate Researcher 08/2023~Present
  * Conducting research on fusing generative modeling approaches for applications to data assimilation in physical systems
  * Developed a latent assimilation algorithm which works well for high-dimensional bayesian filtering problems
  * Worked on integrating method with latent dynamics in a subsequent paper for fast simulation

* Undergraduate Researcher (with Professor. Volodymyr Kuleshov) 09/2020~05/2023
  * Conducted research in the area of aleatoric and epistemic uncertainty estimation for calibrated uncertainty prediction using quantile loss functions
  * Demonstrated that by integrating quantile loss with autoregressive flows, we can remove the need for the
  * Jacobian while retaining sampling and uncertainty estimation capabilities
  * Extended research to a non-autoregressive flow architecture for faster training and sampling

* Natural Language Processing Research Intern at Cornell Tech 05/2019~08/2019
  * Conducted NLP research under Professor [Yoav Artzi](https://yoavartzi.com/) at Language in Context Lab
  * Developed system for using collaborative interactions to study second language acquisition in goal-specified environment with Unity and Python
  * Used [NewsRoom](https://arxiv.org/abs/1804.11283) dataset to generate articles with multiple summary labels for parameter based summary generation with various Python architectures

* Statistics Research Intern at Hong Kong University of Science and Technology 06/2017~10/2017
  * Research mathematics and statistics under Professor [Yuan Yao](https://www.math.ust.hk/people/faculty/profile/yuany/)
  * Completed a pairwise comparison machine learning algorithm from cancer cell and drug sensitivity data using R
  * Model placed third (highest rank was second) on Kaggle leaderboard among graduate and undergraduate students)
  * Enhanced model from database on cancerrxgene.org and conducted detailed analysis

Clubs And Organizations
======
* Intelligent Systems Team Lead at Cornell Data Science 09/2019~05/2022
  * Snapbee, using Deep Learning to identify handwritten text and figures in general documents (specifically testing and modifying the DeepFigures framework to work for handwritten inputs)
  * Pleio Project, using causal inference to obtain information about when and how to best remind patients to take their medicine
  * Work on combining Bayesian Networks with Kernel Density Estimators to reduce the effects of high-dimensional data
  * Using Reinforcement Learning to develop a Pokerbot agent
  * Organized and planned team meetings, held reading groups, and oversaw project progress through biweekly standups

Industry Experience
======
* Machine Learning Research Intern at CardioPhi 03/2023~08/2023
  * Constructed Transformer and ResNet based models to process ECGs for detection and prediction of heart arrhythmia
  * Collaborated with front-end engineers to deliver information for an insightful UI
  * Wrote technical portions of grants for NSF and NIH funding
  * Worked on paper ECGBERT: Understanding the Hidden Language of ECGs

* Software Engineering Intern at Adobe Inc. 05/2021~08/2021
  * Improved cost and efficiency of a generative search algorithm by incorporating native speedups using C++ and lower-level code as part of an innovation team developing cutting-edge and currently realizable technology
  * Cut out entirety of heavy cloud-computing cost while retaining similar time performance against cloud GPUs

* Software Engineering Intern at Adobe Inc. 05/2020~08/2020
  * Researched and developed a ML pipeline in Python for efficiently resolving problems and directing users to right resource
  * Boosted performance compared to pre-existing Elasticsearch approach from 30% to 90% accuracy, from a hand-generated validation dataset
  * Deployed the internal tool through an online docker container and Amazon Lambda (serverless), then integrated with a slack bot as a slash command

* Machine Learning Intern at Vital Scientist INC. 06/2018~07/2018
  * Used detailed scrum and sprint to collaborate with the project team, conducted a presentation regarding our final product, a (locally hosted) website which recommended restaurants based on previous likes
  * Extracted data with SparkSQL and analyzed a restaurant model based on Yelp dataset with Numpy, using stochastic processes to decrease calculation complexity of the collaborative filtering algorithm

Publications
======
  <ul>{% for post in site.publications reversed %}
    {% include archive-single-cv.html %}
  {% endfor %}</ul>