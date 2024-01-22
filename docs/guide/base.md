# 基础知识

本章主要介绍一些基础知识，包括：

- RL学习路径
- 如何查找并使用开源代码
- to be continue......

## RL学习路径

深度强化学习（Deep Reinforcement Learning，DRL）包含两部分：深度学习和强化学习。因此，学习DRL的路径也可以分为两部分：深度学习和强化学习。

快速入门深度强化学习不需要太多深度学习方面的知识，深度学习在深度强化学习中主要用于函数近似。因此，只需要了解基本的深度学习知识即可，包括：

- 如何搭建网络
- 如何训练网络

因此，如果你是一位深度强化学习的入门者，本文档中的[深度学习部分](/guide/ml)对你来说不是特别重要，只需要掌握上述技能即可。当然，如果你想对深度学习有更深入的了解，也可以对深度学习部分进行详细阅读。

在掌握了基本的网络搭建和网络训练之后，你可以着手学习强化学习部分的知识了。对于这部分内容，我推荐以下两本书：

- *深度强化学习*，王树森 著
- *动手学强化学习*，张伟楠 著

*深度强化学习*主要介绍深度强化学习的基础知识，算法数学原理，可以用于理论学习。*动手学强化学习*侧重于深度学习算法的实现，在每一个算法的后面都有对应的`python`代码，十分适合初学者上手。

接着，如果你对更前沿的方法感兴趣，那么出版的书籍已经不能满足你了，只有最新发表的论文才能令你兴奋，那么你可以关注这些顶会的相关文章：

- [ICML](https://icml.cc) *International Conference of Machine Learning*
- [NeurIPS](https://nips.cc) *Neural Information Processing Systems*
- [ICLR](https://iclr.cc) *International Conference on Learning Representations*
- [AAAI](https://aaai.org) *Association for the Advancement of Artificial Intelligence*
- [IJCAI](https://ijcai.org) *International Joint Conference on Artificial Intelligence*

同时，你也可以在Github上找到一些论文整理的 Repo 。

## 如何查找并使用开源代码

开源代码可以从这些网站进行查找：

- [全球最大的程序员交友网站](https://github.com/)
- [PaperWithCode](https://paperswithcode.com/)

如果这两个网站都找不到算法实现，可以查看对应的文章原文，看看是否给出了 code link。

如果还是找不到的话，emmmm，~~联系作者要代码~~，那么这个算法可能大概率不会work

开源代码的使用主要有以下作用：

- 通过阅读代码快速提高编程水平
- 通过直接使用快速实现想法

部分学习者在找到算法的开源实现之后，只进行使用而不进行学习。如果你只是想简单的了解以下深度强化学习，那这自然是合适的。但假如你是一名相关的工程师，科研工作者。一件十分必要的事情就是阅读别人的算法实现，并思考他为什么要以这样的方式实现，有什么好处，能否以后用在我的代码中。长此以往，你的算法实现能力将会有很大的提升。

## Tips

1. 学习过程中出现不理解的地方怎么办？
   > 求助搜索引擎（Google > Bing >> ~~Baidu~~)->求助问答社区（Stack Overflow > Zhihu >> ~~CSDN~~ ）->求助ChatGPT（注意验证回答的正确性）->阅读相关论文->这时如果还解决不了再去求助他人！！！
2. 代码运行问题（运行出错，缺依赖，环境问题...）怎么办？
   > 查相关的库文档->在Github上查相关的issue->求助搜索引擎（Google > Bing >> ~~Baidu~~)->在Github上提issue->这时如果还解决不了再去求助他人！！！
