---
layout: post
title: Simplifying Our Architecture
thumb: /img/blog/2012-02-04-simplifying-our-architecture.jpg
---

We today made the step of refactoring BitcoinJS. We merged `node-bitcoin-p2p` and `node-bitcoin-exit` into a single project: `bitcoinjs-server`.

By the same token, `node-bitcoin-explorer` will be renamed `bitcoinjs-explorer`.

These two changes alone significantly simplify the BitcoinJS architecture. The changes to the architecture diagram illustrate how much simpler the new design is.

#### Before

![Alt text](/img/architecture/architecture_old.png)

#### After

![Alt text](/img/architecture/architecture.png)

But the benefits aren't just theoretical. The installation of an exit node server has gotten much simpler and you can new use the full power of the `bitcoinjs` command line tool with the exit node server.

To run an exit node, just [install BitcoinJS Server](https://github.com/bitcoinjs/bitcoinjs-server/wiki/Installation) and run:

{% highlight sh %}
# Install the necessary dependencies for running an exit node
bitcoinjs setup exit

# Run BitcoinJS with the exit node mod enabled
bitcoinjs run -m exit
{% endhighlight %}

And that's it, no mandatory configuration, no more linking packages, configuring paths, etc.

There are many cool things planned for BitcoinJS in the near future. Stay tuned!