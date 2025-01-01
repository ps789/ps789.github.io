---
title: "LD-EnSF: Synergizing Latent Dynamics with Ensemble Score Filters for Fast Data Assimilation with Sparse Observations"
collection: publications
category: preprints
permalink: /publication/2024-ld-ensf
excerpt: "Data assimilation techniques are crucial for correcting the trajectory when modeling complex physical systems. A recently developed data assimilation method, Latent Ensemble Score Filter (Latent-EnSF), has shown great promise in addressing the key limitation of EnSF for highly sparse observations in high-dimensional and nonlinear data assimilation problems. It performs data assimilation in a latent space for encoded states and observations in every assimilation step, and requires costly full dynamics to be evolved in the original space. In this paper, we introduce Latent Dynamics EnSF (LD-EnSF), a novel methodology that completely avoids the full dynamics evolution and significantly accelerates the data assimilation process, which is especially valuable for complex dynamical problems that require fast data assimilation in real time. To accomplish this, we introduce a novel variant of Latent Dynamics Networks (LDNets) to effectively capture and preserve the system's dynamics within a very low-dimensional latent space. Additionally, we propose a new method for encoding sparse observations into the latent space using Long Short-Term Memory (LSTM) networks, which leverage not only the current step's observations, as in Latent-EnSF, but also all previous steps, thereby improving the accuracy and robustness of the observation encoding. We demonstrate the robustness, accuracy, and efficiency of the proposed method for two challenging dynamical systems with highly sparse (in both space and time) and noisy observations."
date: 2024-11-28
venue: 'Arxiv'
status: ""
authors: 'Pengpeng Xiao, Phillip Si, Peng Chen'
paperurl: 'https://arxiv.org/abs/2411.19305'
---