---
title: Home
---

<div class="hero">
  <div class="container">
    <div class="heroGrid">
      <div class="card heroCard reveal">
        <div class="kicker">
          <span class="dot" aria-hidden="true"></span>
          Build mobile apps that ship, update, and scale cleanly
        </div>

        <h1>Mobile development is a systems problem.</h1>
        <p class="lead">
          BuildApps.ca is a reference for iOS, Android, and cross-platform work: architecture choices, build pipelines,
          release mechanics, and the practical constraints that matter after launch.
        </p>

        <div class="heroActions">
          <a class="btn primary" href="#tracks">{% include icons.html name="down" %} Explore tracks</a>
          <a class="btn" href="#shipping">Shipping basics {% include icons.html name="chevron" %}</a>
          <span class="pill">Web + mobile sibling</span>
        </div>

        <div class="search" id="searchArea">
          <div class="searchbar" role="search">
            {% include icons.html name="search" %}
            <input id="searchInput" type="search" placeholder="Search topics: app signing, deep links, offline, CI/CD…" aria-label="Search topics">
          </div>

          <div class="filters" aria-label="Quick filters">
            <button class="fbtn active" data-filter="all">All</button>
            <button class="fbtn" data-filter="ios">iOS</button>
            <button class="fbtn" data-filter="android">Android</button>
            <button class="fbtn" data-filter="cross">Cross-platform</button>
            <button class="fbtn" data-filter="shipping">Shipping</button>
          </div>
        </div>
      </div>

      <aside class="card sideCard reveal" aria-label="Core platforms">
        <div class="sideTop">
          <strong>Core platforms</strong>
          <span class="pill">Start here</span>
        </div>

        <div class="stackGrid" id="stackGrid">
          <a class="stackItem" href="{{ '/platforms/ios/' | relative_url }}" data-tags="ios swift ui kit swiftui signing provisioning" data-cat="ios" style="--glow: rgba(14,165,233,.55)">
            <div class="meta">Platform</div>
            <div class="title">iOS</div>
            <div class="desc">Swift/SwiftUI, signing, build settings, release workflow.</div>
          </a>

          <a class="stackItem" href="{{ '/platforms/android/' | relative_url }}" data-tags="android kotlin jetpack compose gradle app bundles" data-cat="android" style="--glow: rgba(34,197,94,.55)">
            <div class="meta">Platform</div>
            <div class="title">Android</div>
            <div class="desc">Kotlin/Compose, Gradle, app bundles, distribution.</div>
          </a>

          <a class="stackItem" href="{{ '/platforms/react-native/' | relative_url }}" data-tags="react native metro hermes ios android" data-cat="cross" style="--glow: rgba(20,184,166,.55)">
            <div class="meta">Cross-platform</div>
            <div class="title">React Native</div>
            <div class="desc">JS runtime, native bridges, performance boundaries.</div>
          </a>

          <a class="stackItem" href="{{ '/platforms/flutter/' | relative_url }}" data-tags="flutter dart widgets rendering engine ios android" data-cat="cross" style="--glow: rgba(124,58,237,.55)">
            <div class="meta">Cross-platform</div>
            <div class="title">Flutter</div>
            <div class="desc">Dart, widget architecture, build + release flow.</div>
          </a>
        </div>
      </aside>
    </div>
  </div>
</div>

<section id="tracks">
  <div class="container">
    <div class="sectionHead">
      <div>
        <h2>Learning tracks</h2>
        <p>Small maps of concepts that matter after your app is “working”: reliability, releases, and user trust.</p>
      </div>
      <span class="pill" id="resultsPill">Search: off</span>
    </div>

    <div class="tiles" id="trackTiles">
      <a class="tile reveal" href="{{ '/guides/offline-first/' | relative_url }}" data-tags="offline sync caching storage conflicts" data-cat="all" style="--glow: rgba(20,184,166,.55)">
        <div class="tileTop">
          <span class="badge"><span class="dot" style="background:linear-gradient(135deg,var(--a3),var(--a2))"></span>Architecture</span>
          <span class="pill">Track</span>
        </div>
        <h3>Offline-first and sync</h3>
        <p>Storage, conflict resolution, background tasks, and making state resilient.</p>
        <div class="links"><span class="chip">Local DB</span><span class="chip">Sync</span><span class="chip">Conflicts</span></div>
      </a>

      <a class="tile reveal" href="#shipping" data-tags="signing provisioning keystore notarization ci cd" data-cat="shipping" style="--glow: rgba(34,197,94,.50)">
        <div class="tileTop">
          <span class="badge"><span class="dot" style="background:linear-gradient(135deg,var(--a2),var(--a1))"></span>Delivery</span>
          <span class="pill">Track</span>
        </div>
        <h3>Builds, signing, and releases</h3>
        <p>Why shipping is its own system: certificates, app bundles, and automation.</p>
        <div class="links"><span class="chip">CI/CD</span><span class="chip">Signing</span><span class="chip">Stores</span></div>
      </a>

      <a class="tile reveal" href="{{ '/guides/performance-budgets/' | relative_url }}" data-tags="performance startup memory jank profiling" data-cat="all" style="--glow: rgba(124,58,237,.45)">
        <div class="tileTop">
          <span class="badge"><span class="dot" style="background:linear-gradient(135deg,var(--a4),var(--a3))"></span>Performance</span>
          <span class="pill">Track</span>
        </div>
        <h3>Performance budgets on mobile</h3>
        <p>Startup time, memory, smoothness, and the practical limits of devices.</p>
        <div class="links"><span class="chip">Startup</span><span class="chip">Memory</span><span class="chip">Profiling</span></div>
      </a>
    </div>
  </div>
</section>

<section id="platforms">
  <div class="container">
    <div class="sectionHead">
      <div>
        <h2>Platform pages</h2>
        <p>High-signal landing pages (iOS, Android, cross-platform) that link into guides and shipping references.</p>
      </div>
      <span class="pill">Hub-first</span>
    </div>

    <div class="featured" id="platformCards">
      <a class="featureCard reveal" href="{{ '/platforms/ios/' | relative_url }}" data-title="iOS Development" data-tags="ios swift swiftui xcode signing provisioning" data-cat="ios">
        <div class="featureTop">
          <span class="tag">iOS</span>
          <span class="pill">Hub</span>
        </div>
        <h3>iOS Development</h3>
        <p>Swift/SwiftUI, Xcode project structure, signing, and store submissions.</p>
        <div class="metaRow">
          <span class="kpi">• SwiftUI + UIKit</span>
          <span class="kpi">• Certificates</span>
        </div>
      </a>

      <a class="featureCard reveal" href="{{ '/platforms/android/' | relative_url }}" data-title="Android Development" data-tags="android kotlin compose gradle app bundles play store" data-cat="android">
        <div class="featureTop">
          <span class="tag">Android</span>
          <span class="pill">Hub</span>
        </div>
        <h3>Android Development</h3>
        <p>Kotlin/Compose, Gradle builds, app bundles, and Play Console workflow.</p>
        <div class="metaRow">
          <span class="kpi">• Kotlin + Compose</span>
          <span class="kpi">• Gradle</span>
        </div>
      </a>

      <a class="featureCard reveal" href="{{ '/platforms/cross-platform/' | relative_url }}" data-title="Cross-platform" data-tags="react native flutter shared logic native modules" data-cat="cross">
        <div class="featureTop">
          <span class="tag">Cross-platform</span>
          <span class="pill">Hub</span>
        </div>
        <h3>Cross-platform Mobile</h3>
        <p>React Native and Flutter, where they win, and where native boundaries appear.</p>
        <div class="metaRow">
          <span class="kpi">• Shared UI vs shared logic</span>
          <span class="kpi">• Native modules</span>
        </div>
      </a>
    </div>
  </div>
</section>

<section id="guides">
  <div class="container">
    <div class="sectionHead">
      <div>
        <h2>Featured guides</h2>
        <p>Fewer, better pages: deep links, push notifications, offline behavior, and the “after launch” reality.</p>
      </div>
    </div>

    <div class="featured" id="guideCards">
      <a class="featureCard reveal" href="{{ '/guides/deep-links/' | relative_url }}" data-title="Deep links" data-tags="deep links universal links app links routing ios android" data-cat="all">
        <div class="featureTop">
          <span class="tag">Integration</span>
          <span class="pill">Guide</span>
        </div>
        <h3>Deep links without chaos</h3>
        <p>Universal Links, App Links, routing rules, and debugging the real-world edge cases.</p>
        <div class="metaRow">
          <span class="kpi">• iOS + Android</span>
          <span class="kpi">• Routing</span>
        </div>
      </a>

      <a class="featureCard reveal" href="{{ '/guides/push-notifications/' | relative_url }}" data-title="Push notifications" data-tags="push notifications apns fcm token lifecycle permissions" data-cat="all">
        <div class="featureTop">
          <span class="tag">Engagement</span>
          <span class="pill">Guide</span>
        </div>
        <h3>Push notifications as a lifecycle system</h3>
        <p>Tokens, permissions, delivery, and why “it worked once” is not a guarantee.</p>
        <div class="metaRow">
          <span class="kpi">• APNs / FCM</span>
          <span class="kpi">• Permissions</span>
        </div>
      </a>

      <a class="featureCard reveal" href="{{ '/guides/offline-first/' | relative_url }}" data-title="Offline mode" data-tags="offline mode caching storage sync background tasks" data-cat="all">
        <div class="featureTop">
          <span class="tag">Reliability</span>
          <span class="pill">Guide</span>
        </div>
        <h3>Offline mode users can trust</h3>
        <p>Local persistence, retries, sync strategies, and failure modes that don’t corrupt state.</p>
        <div class="metaRow">
          <span class="kpi">• Local DB</span>
          <span class="kpi">• Sync</span>
        </div>
      </a>
    </div>
  </div>
</section>

<section id="shipping">
  <div class="container">
    <div class="sectionHead">
      <div>
        <h2>Shipping and operations</h2>
        <p>Release mechanics, store workflows, and the operational details that decide whether updates are painless or painful.</p>
      </div>
      <a class="btn" href="#searchArea">Search topics {% include icons.html name="chevron" %}</a>
    </div>

    <div class="tiles" id="shipTiles">
      <a class="tile reveal" href="{{ '/shipping/signing-provisioning/' | relative_url }}" data-tags="signing certificates provisioning profiles xcode" data-cat="ios shipping" style="--glow: rgba(14,165,233,.45)">
        <div class="tileTop">
          <span class="badge"><span class="dot" style="background:linear-gradient(135deg,var(--a1),var(--a4))"></span>iOS shipping</span>
          <span class="pill">Reference</span>
        </div>
        <h3>Signing and provisioning</h3>
        <p>Certificates, profiles, CI secrets, and why “it worked locally” isn’t enough.</p>
        <div class="links"><span class="chip">Xcode</span><span class="chip">CI</span><span class="chip">Secrets</span></div>
      </a>

      <a class="tile reveal" href="{{ '/shipping/keystores-app-bundles/' | relative_url }}" data-tags="gradle keystore signing play console app bundle" data-cat="android shipping" style="--glow: rgba(34,197,94,.40)">
        <div class="tileTop">
          <span class="badge"><span class="dot" style="background:linear-gradient(135deg,var(--a2),var(--a3))"></span>Android shipping</span>
          <span class="pill">Reference</span>
        </div>
        <h3>Keystores and app bundles</h3>
        <p>Bundle builds, signing configs, Play App Signing, and rollout strategy.</p>
        <div class="links"><span class="chip">Gradle</span><span class="chip">AAB</span><span class="chip">Rollouts</span></div>
      </a>

      <a class="tile reveal" href="{{ '/shipping/release-monitoring/' | relative_url }}" data-tags="crash reporting observability release monitoring" data-cat="shipping" style="--glow: rgba(124,58,237,.38)">
        <div class="tileTop">
          <span class="badge"><span class="dot" style="background:linear-gradient(135deg,var(--a4),var(--a1))"></span>Ops</span>
          <span class="pill">Reference</span>
        </div>
        <h3>Release monitoring</h3>
        <p>Crash reporting, performance signals, staged rollouts, and rollback plans.</p>
        <div class="links"><span class="chip">Crashes</span><span class="chip">ANRs</span><span class="chip">Staging</span></div>
      </a>
    </div>

    <div style="height:14px"></div>

    <div class="strip reveal" id="newsletter">
      <div>
        <strong>Get the high-signal updates.</strong>
        <span>One short email when new guides or shipping references are published. No noise.</span>
      </div>
      <form class="stripForm" data-mock-subscribe>
        <input type="email" placeholder="Email address" aria-label="Email address">
        <button class="btn primary" type="submit">Subscribe</button>
      </form>
    </div>
  </div>
</section>

<section id="about">
  <div class="container">
    <div class="sectionHead">
      <div>
        <h2>About the structure</h2>
        <p>This layout is hub-first: platform hubs link to guides; guides link to shipping references and practical patterns.</p>
      </div>
      <span class="pill">Jekyll-friendly</span>
    </div>

    <div class="tiles">
      <div class="tile reveal" style="--glow: rgba(20,184,166,.38)">
        <div class="tileTop">
          <span class="badge"><span class="dot" style="background:linear-gradient(135deg,var(--a3),var(--a2))"></span>Concept</span>
          <span class="pill">Model</span>
        </div>
        <h3>Apps are lifecycle systems</h3>
        <p>Install, permissions, upgrades, background execution, store rules, and device constraints shape everything.</p>
        <div class="links"><span class="chip">Lifecycle</span><span class="chip">Constraints</span><span class="chip">Trust</span></div>
      </div>

      <div class="tile reveal" style="--glow: rgba(124,58,237,.34)">
        <div class="tileTop">
          <span class="badge"><span class="dot" style="background:linear-gradient(135deg,var(--a4),var(--a1))"></span>Interconnect</span>
          <span class="pill">Network</span>
        </div>
        <h3>Links cleanly to your web hub</h3>
        <p>Mobile clients sit on APIs. This site can link to your web hub for backend and contract design.</p>
        <div class="links"><span class="chip">APIs</span><span class="chip">Auth</span><span class="chip">Data</span></div>
      </div>

      <div class="tile reveal" style="--glow: rgba(34,197,94,.30)">
        <div class="tileTop">
          <span class="badge"><span class="dot" style="background:linear-gradient(135deg,var(--a2),var(--a3))"></span>Search</span>
          <span class="pill">Demo</span>
        </div>
        <h3>Built-in filtering (preview)</h3>
        <p>Search and quick filters narrow cards. In Jekyll later, wire it to Pagefind or Lunr.</p>
        <div class="links"><span class="chip">Tags</span><span class="chip">Filters</span><span class="chip">Pagefind</span></div>
      </div>
    </div>
  </div>
</section>
