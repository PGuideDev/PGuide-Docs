import{_ as D,c as y,d as p,a as s,b as i,e as n,w as l,r,o as m}from"./app-Dk7ccnrl.js";const q="/assets/2025-04-27_03-21-30-CvsjnjaF.png",C="/assets/2025-04-27_01-59-20-BnQmh2jF.png",E="/assets/2025-04-27_07-46-25-GNhZhko5.png",b="/assets/2025-04-27_06-23-02-Br4ohr6o.png",F={},A={class:"code-block-title","data-title":"ECC memory check.sh"},v={class:"code-block-title-bar"},f={class:"title"},x={class:"code-block-title","data-title":"/usr/local/bin/sync-mirrors.sh"},_={class:"code-block-title-bar"},w={class:"title"},z={id:"mirrorz-项目",tabindex:"-1"},T={class:"header-anchor",href:"#mirrorz-项目"},M={class:"hint-container info"},S={class:"code-block-title","data-title":"/tmp/update mirror.pl"},j={class:"code-block-title-bar"},B={class:"title"},N={class:"code-block-title","data-title":"mirrorz.json"},U={class:"code-block-title-bar"},P={class:"title"},O={class:"code-block-title","data-title":"~/tunasync_demo/worker.conf"},R={class:"code-block-title-bar"},I={class:"title"},G={class:"code-block-title","data-title":"~/tunasync_demo/manager.conf"},L={class:"code-block-title-bar"},K={class:"title"},J={class:"code-block-title","data-title":"/etc/tunasync/ctl.conf"},V={class:"code-block-title-bar"},Z={class:"title"},Y={class:"code-block-title","data-title":"/home/scripts/worker.conf"},W={class:"code-block-title-bar"},Q={class:"title"};function X(H,a){const t=r("VPIcon"),d=r("VPLink"),g=r("Annotation"),e=r("RepoCard"),c=r("ECharts"),u=r("CodeTabs"),o=r("Mermaid");return m(),y("div",null,[a[39]||(a[39]=p('<div class="hint-container caution"><p class="hint-container-title">这是一篇未完成的文档</p></div><blockquote><p>本文是面向基于 MirrorZ 项目镜像站的维护与开发手册，帮助新站长快速上手，了解镜像站的基本操作和维护方法。</p></blockquote><h2 id="需求评估" tabindex="-1"><a class="header-anchor" href="#需求评估"><span>需求评估</span></a></h2><p>搭建一个镜像站，最基本的问题有如下几个：</p><ol class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 评估是否真的需要一个新的镜像</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 计划镜像的内容清单</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 适宜的硬件资源</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 数据同步管理</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> Web 服务和帮助文档</label></li></ol><h3 id="是否需要新建镜像" tabindex="-1"><a class="header-anchor" href="#是否需要新建镜像"><span>是否需要新建镜像</span></a></h3><p><a href="https://github.com/tuna/tunasync/wiki/Mirroring-Howto" target="_blank" rel="noopener noreferrer">Mirroring-Howto</a></p><blockquote><p>新建镜像一般要瞄准特定的用户群体，典型的例子是校园网、云计算租户网络、软件研发机构内网等。如果没有一定规模的用量，维护一套镜像所带来的人力、管理和资金成本很可能会高于收益，此时建议采用公网镜像并自建缓存（如 HTTP 代理）来提高带宽使用效率和用户体验。常见的代理软件有 Squid、Apache TrafficServer 等，针对 Debian/Ubuntu 也有如 apt-cacher-ng 的成套方案。需要注意的是，如果缓存没有正确配置，可能会导致出现严重的使用问题。</p></blockquote><h3 id="计划镜像的内容清单" tabindex="-1"><a class="header-anchor" href="#计划镜像的内容清单"><span>计划镜像的内容清单</span></a></h3><blockquote><p>如果确实需要新建镜像，那么紧接着就是要针对计划镜像的内容做一份清单，这份清单应该按照需求的强烈程度排序。镜像不是越多越好，当规模增加到一定程度后，可能会带来意想不到的维护复杂度，因而导致相应的资源和精力投入并不总是随规模线性增减。</p></blockquote>',10)),s("p",null,[a[1]||(a[1]=n("查看 ",-1)),i(d,{href:"/public-service/cqmu-mirror/wiki/"},{default:l(()=>[i(t,{provider:"iconify",name:"simple-icons:wikibooks"}),a[0]||(a[0]=n("CQMU Mirror Wiki",-1))]),_:1,__:[0]}),a[2]||(a[2]=n("，根据调查，越靠前说明越有需求。",-1))]),a[40]||(a[40]=s("h3",{id:"适宜的硬件资源",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#适宜的硬件资源"},[s("span",null,"适宜的硬件资源")])],-1)),a[41]||(a[41]=s("p",null,"对镜像的最直观投入是存储和网络，因为镜像站属于重IO业务(disk & network)，通常建议使用实体物理机来承载，以免在虚拟化平台上对其他业务造成影响。",-1)),s("p",null,[a[4]||(a[4]=n("存储容量可以参考 ",-1)),a[5]||(a[5]=s("a",{href:"https://mirrors.tuna.tsinghua.edu.cn/status/#syncing-status",target:"_blank",rel:"noopener noreferrer"},"TUNA 镜像站同步状态页",-1)),a[6]||(a[6]=n("给出的各个镜像的大小； 网络接入建议将服务器放在尽量靠近流量主干的位置，或根据具体网络情况和使用需求评估适宜的位置； 为镜像服务器配置适宜的内存，建议采用 ECC 内存",-1)),i(g,{label:"内存",total:1},{"item-0":l(()=>a[3]||(a[3]=[s("p",null,[s("a",{href:"https://zh.wikipedia.org/wiki/%E7%BA%A0%E9%94%99%E5%86%85%E5%AD%98",target:"_blank",rel:"noopener noreferrer"},"ECC内存"),n("，即应用了能够实现错误检查和纠正技术（ECC）的内存条。一般多应用在服务器及图形工作站上，这将使整个电脑系统在工作时更趋于安全稳定。")],-1)])),_:1}),a[7]||(a[7]=n("，具体容量根据投入大小决定；一个不精确的估算建议：为每TB镜像数据配置至少1GB内存，并额外配置若干内存用于数据同步等任务。",-1))]),s("div",A,[s("div",v,[s("span",f,[i(t,{provider:"iconify",name:"vscode-icons:file-type-shell"}),a[8]||(a[8]=n("ECC memory check.sh",-1))])]),a[9]||(a[9]=p(`<div class="language-shell" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-shell"><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> dmidecode</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;"> --type</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> memory</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;"> grep</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;"> -i</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &quot;Error Correction&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A9955;">## if Error Correction Type: Multi-bit ECC, it&#39;s ECC; Vice versa.</span></span></code></pre></div>`,1))]),a[42]||(a[42]=p(`<h3 id="数据同步管理" tabindex="-1"><a class="header-anchor" href="#数据同步管理"><span>数据同步管理</span></a></h3><blockquote><p>镜像站需要通过从外部进行数据同步来保持更新，因此如何管理和调度这些任务也成为了一个问题：</p></blockquote><blockquote><p>当镜像数量较少时，可使用 cron 或 systemd timers 的简单方式管理，易于理解和维护 镜像数量较多时，需要使用更复杂的调度器，如 tunasync 有几种明确 不建议 的做法：</p><ul><li>将许多同步任务定时到同时启动，或安排在非常相近的时刻；这会导致上游和本地服务器均出现 io 瓶颈，显著降低同步效率和成功率； 两次同步间隔过短，绝大多数镜像建议每天同步 1-2 次，最多不超过 4 次；主要的上游源都不会更新过于频繁，更短的间隔不能明显提升时效性； 使用循环脚本，依次不停地尝试同步每个镜像；除上述效率原因外，这样做会浪费上游同步服务器资源，可能导致IP地址被封禁。 以下做法应务必避免 <ul><li>定时启动同步任务，并且同步命令没有超时的时间限制。</li><li>在这种情况下，如果出现网络问题，则会导致已经执行的同步命令还未终止时，再次执行同步命令，长此以往将会积累较多的卡住的同步进程。一旦网络恢复，这些卡住的同步进程则会出现巨量的网络流量，阻塞网络。代替地，应该在同步任务结束一定时间间隔后启动下一次同步任务，而不是定时启动；或者限制同步命令的执行时间，确保在出现故障的情况下，同步命令可以在合理的时间内终止。</li></ul></li></ul></blockquote><p>参考：</p><p>使用较少的镜像源时，使用 systemd timers 进行管理</p><p>时间调度设计</p><div class="code-block-title" data-title="/etc/systemd/system/mirror-sync.timer"><div class="code-block-title-bar"><span class="title">/etc/systemd/system/mirror-sync.timer</span></div><div class="language-shell has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="shell" style="--vp-collapsed-lines:10;--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-shell"><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">[Unit]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">Description</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">Daily</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;"> mirror</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> sync</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> with</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> randomized</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> delay</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">[Timer]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">OnCalendar</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">*-*-*</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;"> 03:00:00</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A9955;">     # 每天凌晨3点触发</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">RandomizedDelaySec</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">1h</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A9955;">         # 随机延迟0-1小时（避免同时启动）</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">Persistent</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">true</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A9955;">               # 补执行错过任务</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">[Install]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">WantedBy</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">timers.target</span></span></code></pre><div class="collapsed-lines"></div></div></div><p>任务执行控制</p>`,8)),s("div",x,[s("div",_,[s("span",w,[i(t,{provider:"iconify",name:"vscode-icons:file-type-shell"}),a[10]||(a[10]=n("/usr/local/bin/sync-mirrors.sh",-1))])]),a[11]||(a[11]=p(`<div class="language-shell" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-shell"><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A9955;">#!/</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A9955;" class="highlighted-word">bin</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A9955;">/bash</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">TIMEOUT</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">3600</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A9955;">  # 1小时超时</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;"> repo</span><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> $(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">list-your-repos</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">); </span><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">do</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">  timeout</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;"> $TIMEOUT</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> rsync</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;"> -az</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;"> --delete</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> rsync://upstream/</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">$repo</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> /mirror/</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">$repo</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">  [ </span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;">$?</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;"> -eq</span><span style="--shiki-light:#005CC5;--shiki-dark:#B5CEA8;"> 124</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> ] &amp;&amp; </span><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &quot;Timeout: </span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">$repo</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;"> &gt;&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> /var/log/mirrorsync.err</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">done</span></span></code></pre></div>`,1))]),a[43]||(a[43]=p(`<p>监控建议</p><div class="code-block-title" data-title="/etc/systemd/system/mirror-sync.service"><div class="code-block-title-bar"><span class="title">/etc/systemd/system/mirror-sync.service</span></div><div class="language-shell" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-shell"><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">[Service]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">Type</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">oneshot</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">ExecStart</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">/usr/local/bin/sync-mirrors.sh</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">LogLevelMax</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">warning</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A9955;">  # 抑制成功日志</span></span></code></pre></div></div><h3 id="web-服务和用户界面" tabindex="-1"><a class="header-anchor" href="#web-服务和用户界面"><span>Web 服务和用户界面</span></a></h3><blockquote><p>一个简单的 Web 服务器软件（例如 TUNA 使用的 Nginx），将所有有关文件设置好路径提供下载，就可以实现最基本的镜像站功能。镜像站绝大多数业务均为静态文件服务，因此类似的高性能静态文件 Web 服务器软件均可按需选择，不建议使用不常见的或过于侧重动态业务的 Web 服务器软件，如 SimpleHTTPServer、Tomcat 等。</p></blockquote><blockquote><p>如果希望用户界面更加友好，可以在主页前端、目录索引等功能上进行界面改进，可以参考如下几个项目：</p><ul><li>TUNA 镜像的前端页面：<a href="https://github.com/tuna/mirror-web" target="_blank" rel="noopener noreferrer">https://github.com/tuna/mirror-web</a></li><li>USTCLUG 的镜像前端页面：<a href="https://git.lug.ustc.edu.cn/mirrors/mirrors-index" target="_blank" rel="noopener noreferrer">https://git.lug.ustc.edu.cn/mirrors/mirrors-index</a></li><li>目录索引美化的 <a href="https://github.com/aperezdc/ngx-fancyindex" target="_blank" rel="noopener noreferrer">ngx-fancyindex</a></li></ul></blockquote><blockquote><p>此外，还有镜像的使用帮助，可以参考：</p><ul><li>TUNA 的使用帮助：<a href="https://github.com/tuna/mirror-web/tree/master/help/_posts" target="_blank" rel="noopener noreferrer">https://github.com/tuna/mirror-web/tree/master/help/_posts</a></li><li>USTCLUG 的使用帮助：<a href="https://github.com/ustclug/mirrorhelp" target="_blank" rel="noopener noreferrer">https://github.com/ustclug/mirrorhelp</a></li></ul></blockquote>`,6)),s("h2",z,[s("a",T,[s("span",null,[i(t,{provider:"iconify",name:"https://mirrors.cernet.edu.cn/static/img/mirrorz.svg"}),a[12]||(a[12]=n("MirrorZ 项目",-1))])])]),a[44]||(a[44]=s("p",null,"清华大学开源的MirrorZ项目为国内镜像提供了一种开源、高效的镜像同步方案，包含前端项目和后端同步脚本，极大便利了各高校和组织的镜像服务。",-1)),i(e,{repo:"mirrorz-org/mirrorz"}),a[45]||(a[45]=p(`<h3 id="测速脚本" tabindex="-1"><a class="header-anchor" href="#测速脚本"><span>测速脚本</span></a></h3><p>MirrorZ 项目提供了测速脚本，帮助用户选择合适的镜像源。测速脚本会自动检测当前网络环境，并根据用户的需求选择合适的镜像源。</p><p>运行方式</p><p>linux安装curl后，执行shell脚本</p><div class="language-shell" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-shell"><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">curl</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> https://mirrors.cernet.edu.cn/oh-my-mirrorz.py</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;"> |</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;"> python3</span></span></code></pre></div><p>源文件</p><div class="language-python has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="python" style="--vp-collapsed-lines:15;--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-python"><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A9955;">#!/usr/bin/env python3</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A9955;"># -*- coding: utf-8 -*-</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A9955;"># vim: expandtab ts=4 sts=4 sw=4</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> subprocess</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> urllib.request</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> json</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> os</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> argparse</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D4D4D4;">VERSION</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &#39;20250426&#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D4D4D4;">CURL_VERSION</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &#39;&#39;</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D4D4D4;">UA_URL</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &#39;https://mirrorz.org&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">big </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">    &#39;centos&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;/7/isos/x86_64/CentOS-7-x86_64-Everything-2009.iso&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">    &#39;centos-vault&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;/6.0/isos/x86_64/CentOS-6.0-x86_64-LiveDVD.iso&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">    &#39;opensuse&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;/distribution/leap/15.5/iso/openSUSE-Leap-15.5-DVD-x86_64-Media.iso&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">    &#39;ubuntu-releases&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;/22.04/ubuntu-22.04.3-desktop-amd64.iso&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">    &#39;debian-cd&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;/current/amd64/iso-bd/debian-edu-12.1.0-amd64-BD-1.iso&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">    &#39;kali-images&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;/kali-2023.2/kali-linux-2023.2-live-amd64.iso&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">    &#39;CTAN&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;/systems/texlive/Images/texlive.iso&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">    &#39;blackarch&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;/iso/blackarch-linux-full-2023.04.01-x86_64.iso&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">    &#39;archlinux&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;/iso/latest/archlinux-x86_64.iso&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">    &#39;ubuntu&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;/indices/md5sums.gz&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">    &#39;debian&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;/ls-lR.gz&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A9955;"># filled by CI</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">mirrors </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/tuna.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/bfsu.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/bjtu.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/njupt.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/cqu.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/hit.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/nju.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/neusoft.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/pku.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/ynuosa.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/xjtu.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/xtom.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/xtom-hk.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/xtom-de.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/xtom-nl.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/xtom-ee.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/xtom-jp.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/xtom-au.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/xtom-sg.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/wsyu.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/bupt.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/njtech.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/geekpie.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/qlut.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/nyist.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/jcut.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrorz.org/static/json/legacy/nwafu.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrors.ustc.edu.cn/static/json/mirrorz.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirror.sjtu.edu.cn/mirrorz/siyuan.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrors.sjtug.sjtu.edu.cn/mirrorz/zhiyuan.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrors.sustech.edu.cn/mirrorz/mirrorz.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirror.iscas.ac.cn/.mirrorz/mirrorz.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://linux.xidian.edu.cn/mirrors/status.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrors.zju.edu.cn/api/mirrorz.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrors.sdu.edu.cn/mirrorz.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrors.scau.edu.cn/mirrorz.d.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://uestclug.org/mirrors-status/mirrorz.d.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirror.lzu.edu.cn/.mirrorz.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrors.jlu.edu.cn/_api/mirrorz.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://mirrors.cqupt.edu.cn/api/mirrorz.json&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">]</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;">map</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> {}</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">res </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> {}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#569CD6;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;"> check_curl</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">():</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#569CD6;">    global</span><span style="--shiki-light:#005CC5;--shiki-dark:#D4D4D4;"> CURL_VERSION</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">    try</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">        res </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> subprocess.run([</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;curl&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;--version&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">], </span><span style="--shiki-light:#E36209;--shiki-dark:#9CDCFE;">stdout</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">subprocess.</span><span style="--shiki-light:#005CC5;--shiki-dark:#D4D4D4;">PIPE</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">        out </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> res.stdout.decode(</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;utf-8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D4D4D4;">        CURL_VERSION</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> out.split()[</span><span style="--shiki-light:#005CC5;--shiki-dark:#B5CEA8;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">]</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">(out)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">        return</span><span style="--shiki-light:#005CC5;--shiki-dark:#B5CEA8;"> 0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">    except</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;No curl found!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">        return</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;"> -</span><span style="--shiki-light:#005CC5;--shiki-dark:#B5CEA8;">1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#569CD6;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;"> site_info</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">    user_agent </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &#39;oh-my-mirrorz/</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;">%s</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> (+https://github.com/mirrorz-org/oh-my-mirrorz) </span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;">%s</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;"> %s</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;"> %</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#D4D4D4;">VERSION</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D4D4D4;">UA_URL</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;urllib/&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;"> +</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> urllib.request.</span><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">__version__</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">    headers </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">        &#39;User-Agent&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: user_agent</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">    request </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> urllib.request.Request(url, </span><span style="--shiki-light:#E36209;--shiki-dark:#9CDCFE;">headers</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">headers)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">    with</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> urllib.request.urlopen(request, </span><span style="--shiki-light:#E36209;--shiki-dark:#9CDCFE;">timeout</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#B5CEA8;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> response:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">        return</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> json.loads(response.read().decode(</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;utf-8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">))</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#569CD6;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;"> speed_test</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">url</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">args</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">    opt </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &#39;-qs&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> args.ipv4:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">        opt </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">+=</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &#39;4&#39;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">    elif</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> args.ipv6:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">        opt </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">+=</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &#39;6&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">    res </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> subprocess.run([</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;curl&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, opt, </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;-o&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, os.devnull, </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;-w&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;%</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;">{http_code}</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> %</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;">{speed_download}</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">                          &#39;-m&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">+</span><span style="--shiki-light:#005CC5;--shiki-dark:#4EC9B0;">str</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">(args.time), </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;-A&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;oh-my-mirrorz/</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;">%s</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> (+https://github.com/mirrorz-org/oh-my-mirrorz) </span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;">%s</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> curl/</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;">%s</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;"> %</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#005CC5;--shiki-dark:#D4D4D4;">VERSION</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D4D4D4;">UA_URL</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D4D4D4;">CURL_VERSION</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">), url], </span><span style="--shiki-light:#E36209;--shiki-dark:#9CDCFE;">stdout</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">subprocess.</span><span style="--shiki-light:#005CC5;--shiki-dark:#D4D4D4;">PIPE</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">    code, speed </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> res.stdout.decode(</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;utf-8&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">).split()</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#4EC9B0;"> int</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">(code), </span><span style="--shiki-light:#005CC5;--shiki-dark:#4EC9B0;">float</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">(speed)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#569CD6;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;"> human_readable_speed</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">speed</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">    scale </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> [</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;B/s&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;KiB/s&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;MiB/s&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;GiB/s&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;TiB/s&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">    i </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#B5CEA8;"> 0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">    while</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> (speed </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#B5CEA8;"> 1024.0</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">):</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">        i </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">+=</span><span style="--shiki-light:#005CC5;--shiki-dark:#B5CEA8;"> 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">        speed </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">/=</span><span style="--shiki-light:#005CC5;--shiki-dark:#B5CEA8;"> 1024.0</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#569CD6;"> f</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">speed</span><span style="--shiki-light:#D73A49;--shiki-dark:#569CD6;">:.2f</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;">}</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;"> {</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">scale[i]</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#569CD6;">def</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">():</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">    parser </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> argparse.ArgumentParser()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">    group </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> parser.add_mutually_exclusive_group()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">    group.add_argument(</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;-4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;--ipv4&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#9CDCFE;">help</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;IPv4 only when speed testing&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#9CDCFE;">action</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;store_true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">    group.add_argument(</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;-6&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;--ipv6&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#9CDCFE;">help</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;IPv6 only when speed testing&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#9CDCFE;">action</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;store_true&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">    parser.add_argument(</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;-t&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;--time&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#9CDCFE;">type</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#4EC9B0;">int</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#9CDCFE;">default</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#B5CEA8;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#9CDCFE;">choices</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#B5CEA8;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#B5CEA8;">5</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#B5CEA8;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#B5CEA8;">30</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#B5CEA8;">60</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">], </span><span style="--shiki-light:#E36209;--shiki-dark:#9CDCFE;">help</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;Duration of a speed test for one mirror (default: </span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;">%(default)d</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">    args </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> parser.parse_args()</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">    if</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> check_curl() </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#B5CEA8;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;">        exit</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#B5CEA8;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> url </span><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> mirrors:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">        try</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;">            map</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">[url] </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> site_info(url)</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;">            print</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;Loaded&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">[url][</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;site&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">][</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;abbr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">], </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;">map</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">[url][</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;site&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">][</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;url&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">])</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">        except</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;">            print</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;! Failed to load&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, url)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">            pass</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A9955;"># one empty line to separate metadata and speedtest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> _, v </span><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;"> map</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">.items():</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">        uri_list </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> []</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">        if</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &#39;big&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#569CD6;"> in</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> v[</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;site&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">]:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">            uri_list.append(v[</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;site&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">][</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;big&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">])</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> r, u </span><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> big.items():</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">            for</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> m </span><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> v[</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;mirrors&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">]:</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">                if</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> m[</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;cname&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> r:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">                    uri_list.append(m[</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;url&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> u)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">        if</span><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;"> len</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">(uri_list) </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">==</span><span style="--shiki-light:#005CC5;--shiki-dark:#B5CEA8;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;">            print</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;! No big file found for&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, v[</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;site&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">][</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;abbr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">], v[</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;site&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">][</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;url&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">])</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">            continue</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">        for</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> uri </span><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> uri_list:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">            res[v[</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;site&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">][</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;abbr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">]] </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#B5CEA8;"> 0</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;">            print</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;Speed testing&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, v[</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;site&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">][</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;abbr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">], uri </span><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> uri.startswith(</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;http&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> v[</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;site&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">][</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;url&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> uri, </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;... &#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#9CDCFE;">end</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#9CDCFE;">flush</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">            code, speed </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> speed_test(v[</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;site&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">][</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;url&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">] </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">+</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> uri, args)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> code </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">!=</span><span style="--shiki-light:#005CC5;--shiki-dark:#B5CEA8;"> 200</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;">                print</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;HTTP Code&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, code, </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;Speed&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, human_readable_speed(speed))</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">            else</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;">                print</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">(human_readable_speed(speed))</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">                res[v[</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;site&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">][</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;abbr&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">]] </span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> speed</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">                break</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">() </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A9955;"># one empty line to separate speedtest and result</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;">    print</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;RANK&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;ABBR&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;SPEED&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#9CDCFE;">sep</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D7BA7D;">\\t\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> i, (k, v) </span><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">in</span><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;"> enumerate</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;">sorted</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">(res.items(), </span><span style="--shiki-light:#E36209;--shiki-dark:#9CDCFE;">key</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#569CD6;"> lambda</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;"> x</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: x[</span><span style="--shiki-light:#005CC5;--shiki-dark:#B5CEA8;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">], </span><span style="--shiki-light:#E36209;--shiki-dark:#9CDCFE;">reverse</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;">True</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">)):</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#569CD6;">f</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;">{</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">i</span><span style="--shiki-light:#D73A49;--shiki-dark:#569CD6;">:02d</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;">}</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">:&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">, k, human_readable_speed(v), </span><span style="--shiki-light:#E36209;--shiki-dark:#9CDCFE;">sep</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;</span><span style="--shiki-light:#005CC5;--shiki-dark:#D7BA7D;">\\t\\t</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">if</span><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;"> __name__</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;"> ==</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &#39;__main__&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">    main()</span></span></code></pre><div class="collapsed-lines"></div></div><h3 id="镜像源上游" tabindex="-1"><a class="header-anchor" href="#镜像源上游"><span>镜像源上游</span></a></h3><p>镜像源上游是指镜像源的原始数据来源，通常是一个或多个官方源。镜像源会定期从这些上游源同步数据，以确保提供最新的软件包和更新。</p><blockquote><p><a href="https://mirrors.cernet.edu.cn/about" target="_blank" rel="noopener noreferrer">MirrorZ mirrors</a><img src="`+q+'" alt="2025-04-27_03-21-30.png" width="3306" height="612"></p></blockquote><p>在测速后，CQMU Mirror选择使用 <code>NYISY</code> <code>USTC</code> <code>CQU</code> <code>TUNA</code> <code>BFSU</code> <code>QLUT</code> 作为上游镜像。为了避免误差，还使用了不同运营商但同在校园网下的工作室服务器。</p>',11)),i(c,{config:"eJzNVk1z2kgQvetXzE14bY/1iRDObhXGjheWYMdCm8QuHwYY0FRAUknCgUrx39P6gpmRnUpu0QVJ029e9+vXGl5Igra9LUuvSUbQ3+jp+VLJ383hUS+f0cUF8rLNnEUopckLTVAaUzpPD3EGFzcLomiFWJglJKSZBFAg4i5hSxaSVYEstkjIt5pcQXB9J9Np0kXqcOSrZygtmLvINrBmwWNB0EVmB9vO/kwATPxxj0OYBnbaR0S7gw1XQgy8h/75wOv3PA5ntLFrHnGGiy1Nwo2HEzoLeIyJHZ3DOFjrSJh/BxMRYBhcOSZ2DQlw/x9fv2HgDle/ruOOzOBd8wDdFRhcbMtVeAEJlwFheS3oltKv94zyG3Swax83sEB/aQPfm/RFgM2l6FjYkCk/jnxeBUCYnGyWjV25qdAcoSoHt7mm6hZ2ZN3GXwaeQOJgi6vDaWNdLuTzcCKQ2LjDN6fd9Fr/owCAUjuc1VzsyJV/8r4ICBPrHIUOXjXlyiGpW3SOHgO225CQBxvY5kWA3sr5Xb33BDoD6w6XYBub8iyMhwJAxy7XGcA3DO1B+3Pn9B/4qQOgI06P025qdy80SIMmCtY25Z5ej/0BjxC+BZaO23JHh33BaBq2+GHQsGnL5TwK9WtYs7kyNGzosmBXomkAoWkml1b1Qi7+5mF8I6TGIeSWfOq9FyjeDvVvYBbRyL/9tfDRo3/n8R89LtaycjspcBDk32svSjI03VWr5Zccvu9oTtMZDecsXKIomdNEqT7jOAVAa7EJZxmLwhY5Q9MT9L0gT2i2SUI0xdVe5wiii9tLZX9S0t0nNCYJRVlAyxNiESWolR8TDA4I7RJ+3tUnBl7RcJkF8O70tOY4nGU43qRBq4p8Ys84rxxI8qDicGsElFJwIUYzpMgWQvaKEsV5gZBUSbyiS5CjWz3VW3TRk1qdnV5xFILk4P8PPip9gAbVSak+F7iqTRmwTKMtv9uCElCP8q/ya02WbDbZxY2FYpvi/ZOaZmT2tWKor4qJT/Z/Rr/BNtJKSl5oLx0A0ascMdvS1QMBLWDYRYbDU3nH1ZaxWKgtStYkyyg482AccAFZp3Vb66uyULmI4d8Fo+mYrCk6Req7aXLxjwp3jRzzNEtEWMXCCPw88IWsNkUk+sCuLlK1dEWjmMJuzaYfXHiUMo1XLBuxsCFiGkSg+oKsUnrkOOII7DQiUwqDKeLgPxY4iuTDLTYsiTKSAY1lv57zTs45FyX/nhej3SrqPVF5RKkzOOkAEVOpNxCNLoSUVlSnRF4oBSsmUlyg6zggqZhpfS2i2QYW1DKxMtc3jE1CBt4CR13TFdkdDYZabL6V7cVZDFbRX3A0HRsvefpI86oYrw75b2ti/JGawFzo2tvKFHfPJeWB6gbyDpeQH1CmGZvdbWo5xGz8GOoGWd7MScjFLpPYK/tL5QddhmX1",title:"%E6%B5%8B%E9%80%9F%E5%AF%B9%E6%AF%94%E6%B5%8B%E8%AF%95%EF%BC%9A%E5%B7%A5%E4%BD%9C%E5%AE%A4%E6%9C%8D%E5%8A%A1%E5%99%A8%2F%E5%AD%A6%E6%A0%A1%E5%86%85%E7%BD%91",type:"js"}),i(c,{config:"eJzdVl1v4kYUfedXjFRVJlIy8bcx0VZNnGxKmlASg7abiAcDs9gqMMiYJAjx33tn7A13Buiiqk/1E/bMuffce86d4fycRHw6yGZsREZJkdRek5zkyds1/CafyEuNwLNOBoO8SYy7+55xShbFcpTxJvFsarrwOkw5nzSJ06BesDlVAN1e+xIhHJsG/hbhN6gdaohW/BSdteLoMkY426ehs8XZIXVNDde+67JhijEODSyECajZ0DC/tboqwLZROQ4NbQ3Q+R3Xb9u0geq3LNrQM8TXGGCFSoaQenoVcZrMxmmSiVrILWN/dTKGAzRo6G0DuNB/LUAv7kYqwEMUA5faesrH+x7uAiAc1DbXo6EuKoijVBVQH4lquTTQ+9b+2oqVJAF1UR2BTy29kD/vukoSjzawOP6u16JHBQClNpDVQhrolX+JvyoIh1oohQVedfTKgdQtOSPPabZaJjMMtqmHmwDa6vyuPsdKOptaASLoU0efhfadArBoiJQB/I6hY5BfOCd6wlMHwECdnsDf7V1HEcgEERVrO7qm1+1eCyOUs8C1qK8rehcpRjOpi4fBpI6nl/Os1G9S00NlmNS29IZdqaYBhGk6iFb1QS/+5ql9o1BDCF2SL5eflRSHt/ZuYBbJfe/2uO33z70/Ynzoob2uK+xU61/UanBexzwvql3bI7t8F0twkMO5TSmtTvE+XcDXej05JYMT8ukXMqAV+Iwk1c+TizKIzHdsELm5DCJ/QhBBr5OzeZIzSW3BgClf5kO2UFiKLyLBizHP+Wg5LKBuIy5ZxXPGRkYfisWU9iJAuYebLkLUcBvoN57fJMO0nhVsKjivZcMxBzpfLtL6i9hAhQ6nRP4st/ShoI0oCrflUFBE81BQueUjKJ8XGZ9BSWWACRuz2ahJ1pUtCthbZHP4IF/lpzwbj5nwSvKeLYxyn3jEa4dns0IsbvdLzGrOALBIkxF/Mz6WNvJXlWqcZ5C4vOmlIwsOeQ3zZ2hxyrJxWsCbC6+bU0JA4C6fSwypV+bRkf4eKKwC9IoXBZ9+R5eukeh+SeX9EkpRuZQFDJOCjXm+grgC3JqN2LscEVH7fTJgMCXrnBewTVxam6q0H4eAE/VQCExsdYjYazJZiitaZTVLpmJRGpPUH7Kr88UJtO8YNBDaj8Z0qtlSCCm6C0WNUh5kFOlU6dGmMgZbXyCKe+JJwQ7FQxOg+awivWB5xtQm7vPqIMm1FFW1rYM1Sdt8dF9ZksLtX5pUmisfJdGUvzVh3JZMBYhnzheZGFygAmbXeIgHzodpUshRNNa/vlj9DZEKbodPa7R42GzIR1D8LhegvT3xdlZXwib42PynJOIUiovVZG+eIZ9wQfknzw3MyNcC/dggx4m3z0BYPOuweNrS/0W88hL9r8QLrSgKvIPi4WksskIEOziM7F2c3d/NxfJXlpc08c0jngn7JnYOmbh/tDV5H5hHuKfMFj0+9Ej5d+xf5jI8uGz0gmubi9rfpb3oXw==",type:"js"}),a[46]||(a[46]=p('<h2 id="构建前的准备工作" tabindex="-1"><a class="header-anchor" href="#构建前的准备工作"><span>构建前的准备工作</span></a></h2><div class="hint-container important"><p class="hint-container-title">前置知识</p><ul><li>计算机网络基础</li><li>Linux中级知识</li><li>VMware等虚拟化技术</li><li>Python基础、SQL基础、前端基础</li><li>Redis缓存及其集群控制</li><li>信息安全管理</li><li>硬盘分区及引导设置</li></ul></div>',2)),s("div",M,[a[15]||(a[15]=s("p",{class:"hint-container-title"},"测试环境",-1)),s("p",null,[a[13]||(a[13]=n("操作系统：",-1)),i(t,{provider:"iconify",name:"devicon:centos"}),a[14]||(a[14]=n("CentOS Stream9-20250414",-1))])]),a[47]||(a[47]=s("h3",{id:"安装与配置ssh链接",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#安装与配置ssh链接"},[s("span",null,"安装与配置SSH链接")])],-1)),a[48]||(a[48]=s("p",null,[n("在实际的操作系统控制中，大多数情况是在"),s("mark",{class:"note"},"内网环境"),n("下进行操作，SSH连接是最常用的远程连接方式。")],-1)),s("p",null,[a[17]||(a[17]=n("SSH连接参考",-1)),i(d,{href:"/csdiy/tools-must/git/#%E8%AE%BE%E7%BD%AEssh%E5%AF%86%E9%92%A5"},{default:l(()=>a[16]||(a[16]=[n("这里",-1)])),_:1,__:[16]}),a[18]||(a[18]=n("。",-1))]),a[49]||(a[49]=p('<h3 id="配置centos-stream软件包镜像" tabindex="-1"><a class="header-anchor" href="#配置centos-stream软件包镜像"><span>配置CentOS Stream软件包镜像</span></a></h3><div class="hint-container note"><p class="hint-container-title">注</p><p>这里是 CERNET教育网联合镜像配置，阿里云/腾讯云/华为云等类似，请自行参考相关文档。</p></div><p>CentOS Stream 9 默认启用了包管理工具 dnf，其是 yum 包管理工具的替代品。dnf 与 yum 大部分的命令都是通用的，dnf 也使用 <code>/etc/yum.repos.d/</code> 进行镜像配置。</p><p>CentOS Stream 9 中源被整合入两个文件 <code>centos.repo</code> 和 <code>centos-addons.repo</code>，由于文件中不包含 baseurl 字段，需要手动插入，通过文本替换修改源的方法较为复杂，也可以选择直接复制最后的替换结果覆盖源文件。</p><blockquote><p>将这段代码保存为一个文件，例如 <code>update_mirror.pl</code>。</p></blockquote>',5)),s("div",S,[s("div",j,[s("span",B,[i(t,{provider:"iconify",name:"vscode-icons:file-type-perl"}),a[19]||(a[19]=n("/tmp/update mirror.pl",-1))])]),a[20]||(a[20]=p(`<div class="language-shell has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="shell" style="--vp-collapsed-lines:15;--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-shell"><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A9955;">#!/usr/bin/perl</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">use</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> strict</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">use</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> warnings</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">use</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> autodie</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">my</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;"> $mirrors</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &#39;https://mirrors.cernet.edu.cn/centos-stream&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">if</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">@ARGV</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;"> &lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#B5CEA8;"> 1</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">    die</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &quot;Usage: </span><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">$0</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &lt;filename1&gt; &lt;filename2&gt; ...\\n&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">while</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">my</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;"> $filename</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> shift</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> @ARGV</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">    my</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;"> $backup_filename</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;"> $filename</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> .</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &#39;.bak&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">    rename</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;"> $filename</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;"> $backup_filename</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">    open</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> my</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;"> $input</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &quot;&lt;&quot;,</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;"> $backup_filename</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">    open</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> my</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;"> $output</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">,</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &quot;&gt;&quot;,</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;"> $filename</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">    while</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">$input</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">        s/^metalink/#</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> metalink/</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">m/^name/</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">            my</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> (undef, </span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">$repo</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">,</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;"> $arch</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">) = split /-/;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">            $repo</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> =~</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> s/^</span><span style="--shiki-light:#005CC5;--shiki-dark:#D7BA7D;">\\s</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">+</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">\\s+$//g</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">            (</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">$arch</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> = defined </span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">$arch</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;"> ?</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> lc(</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">$arch</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;">:</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &#39;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">) =</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> s/^</span><span style="--shiki-light:#005CC5;--shiki-dark:#D7BA7D;">\\s</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">+</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">|</span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">\\s+$//g</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">            if</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">$repo</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> =</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;">~</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> /^Extras/) {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;">                $_</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> .=</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &quot;baseurl=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">mirrors</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">}/SIGs/</span><span style="--shiki-light:#005CC5;--shiki-dark:#D7BA7D;">\\$</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">releasever-stream/extras&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> .</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> ($arch </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">eq</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &#39;source&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> ?</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &quot;/\${</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">arch</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">}/&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &quot;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#D7BA7D;">\\$</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">basearch/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &quot;extras-common\\n&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">            } </span><span style="--shiki-light:#D73A49;--shiki-dark:#C586C0;">else</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;">                $_</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> .=</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &quot;baseurl=\${</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">mirrors</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">}/</span><span style="--shiki-light:#005CC5;--shiki-dark:#D7BA7D;">\\$</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">releasever-stream/</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">$repo</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> .</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> ($arch </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">eq</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &#39;source&#39;</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> ?</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &quot;/&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &quot;/</span><span style="--shiki-light:#005CC5;--shiki-dark:#D7BA7D;">\\$</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">basearch/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;">.</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> (</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">$arch</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> ne </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&#39;&#39;</span><span style="--shiki-light:#D73A49;--shiki-dark:#D4D4D4;"> ?</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &quot;\${</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;">arch</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">}/tree/&quot;</span><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;"> :</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &quot;os&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">) </span><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;">.</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> &quot;\\n&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">            }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">        }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;">        print</span><span style="--shiki-light:#24292E;--shiki-dark:#9CDCFE;"> $output</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;"> $_</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">}</span></span></code></pre><div class="collapsed-lines"></div></div>`,1))]),a[50]||(a[50]=p('<p>然后，在命令行中使用以下命令来执行它：</p><div class="language-shell" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-shell"><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> perl</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> /tmp/update_mirror.pl</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> /etc/yum.repos.d/centos</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;">*</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">.repo</span></span></code></pre></div><div class="hint-container tip"><p class="hint-container-title">安装 <code>autodie</code> Perl 模块</p><p>这个错误表明你的系统缺少 Perl 模块 autodie，导致 /tmp/update_mirror.pl 脚本无法运行。以下是解决方法：</p><blockquote><p>Can&#39;t locate autodie.pm in @INC (you may need to install the autodie module) (@INC contains: /usr/local/lib64/perl5/5.32 /usr/local/share/perl5/5.32 /usr/lib64/perl5/vendor_perl /usr/share/perl5/vendor_perl /usr/lib64/perl5 /usr/share/perl5) at /tmp/update_mirror.pl line 5. BEGIN failed--compilation aborted at /tmp/update_mirror.pl line 5.</p></blockquote><div class="language-shell" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-shell"><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> dnf</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> perl-autodie</span></span></code></pre></div></div><p>重建缓存</p><div class="language-shell" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-shell"><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> dnf</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> clean</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> all</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;"> &amp;&amp; </span><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> dnf</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> makecache</span></span></code></pre></div><p><img src="'+C+'" alt="2025-04-27_01-59-20.png" width="3318" height="267"></p><div class="hint-container important"><p class="hint-container-title">重要</p><p>注意，如果需要启用其中一些 repo，需要将其中的 enabled=0 改为 enabled=1。</p><p>注：截至 2023-05-16，并未在官方源与镜像源中发现 nfv-source，建议不要开启 nfv-source。</p></div><p>验证</p><blockquote><p>看到是baseurl是 https://mirrors.cernet.edu.cn/centos-stream/ 即可</p></blockquote>',9)),i(u,{id:"328",data:[{id:"centos.repo"},{id:"centos-addons.repo"}]},{title0:l(({value:h,isActive:k})=>a[21]||(a[21]=[s("span",null,"centos.repo",-1)])),title1:l(({value:h,isActive:k})=>a[22]||(a[22]=[s("span",null,"centos-addons.repo",-1)])),tab0:l(({value:h,isActive:k})=>a[23]||(a[23]=[s("div",{class:"language-shell","data-highlighter":"shiki","data-ext":"shell",style:{"--shiki-light":"#24292e","--shiki-dark":"#D4D4D4","--shiki-light-bg":"#fff","--shiki-dark-bg":"#1E1E1E"}},[s("pre",{class:"shiki shiki-themes github-light dark-plus vp-code"},[s("code",{class:"language-shell"},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#DCDCAA"}},"cat"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#CE9178"}}," /etc/yum.repos.d/centos.repo")])])])],-1)])),tab1:l(({value:h,isActive:k})=>a[24]||(a[24]=[s("div",{class:"language-shell","data-highlighter":"shiki","data-ext":"shell",style:{"--shiki-light":"#24292e","--shiki-dark":"#D4D4D4","--shiki-light-bg":"#fff","--shiki-dark-bg":"#1E1E1E"}},[s("pre",{class:"shiki shiki-themes github-light dark-plus vp-code"},[s("code",{class:"language-shell"},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#DCDCAA"}},"cat"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#CE9178"}}," /etc/yum.repos.d/centos-addons.repo")])])])],-1)])),_:1}),a[51]||(a[51]=p('<h2 id="镜像站架构" tabindex="-1"><a class="header-anchor" href="#镜像站架构"><span>镜像站架构</span></a></h2><h3 id="网络架构" tabindex="-1"><a class="header-anchor" href="#网络架构"><span>网络架构</span></a></h3><p>镜像站点是异构的。单个镜像难以提供所有镜像，因此会出现差异。对于终端用户来说，这不是一个好的体验，因为他们需要搜索可用的镜像。为了简化操作，MirrorZ 旨在包含所有镜像，因此需要一个统一的界面。</p><blockquote><p>也就是说，如果你想你的镜像站点在 MirrorZ 上显示，你需要提供一个 JSON 文件，包含你镜像站点的基本信息和镜像列表。你可以使用 <code>mirrorz.json</code> 作为模板，修改其中的内容来适应你的镜像站点。</p></blockquote><p>数据结构由 <code>mirrorz.json</code> 定义：</p>',5)),s("div",N,[s("div",U,[s("span",P,[i(t,{provider:"iconify",name:"vscode-icons:file-type-json"}),a[25]||(a[25]=n("mirrorz.json",-1))])]),a[26]||(a[26]=p(`<div class="language-json has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="json" style="--vp-collapsed-lines:15;--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-json"><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">  &quot;version&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#B5CEA8;">1.7</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">  &quot;site&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">    &quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://example.org&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">    &quot;logo&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://example.org/img/logo.svg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">    &quot;logo_darkmode&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://example.org/img/logo-white.svg&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">    &quot;abbr&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;EXAMPLE&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">    &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;样例镜像站&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">    &quot;homepage&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://blog.example.org&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">    &quot;issue&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://github.com/example/issues&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">    &quot;request&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://github.com/example/mirror-request&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">    &quot;email&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;admin@example.com&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">    &quot;group&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;QQ: 10086 and/or Telegram @something&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">    &quot;disk&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;may be any string showing usage of disk, e.g. usage&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">    &quot;note&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;may be any string; like speed limit or connection limit&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">    &quot;big&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;/speedtest/1000mb.bin&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">    &quot;disable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">  },</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">  &quot;info&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">      &quot;distro&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;Debian&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">      &quot;category&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;os&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">      &quot;urls&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">        {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">          &quot;name&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;10.7.0 (amd64, CD installer with xfce)&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">          &quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;/debian-cd/current/amd64/iso-cd/debian-10.7.0-amd64-xfce-CD-1.iso&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">      ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">  ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">  &quot;mirrors&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: [</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">      &quot;cname&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;AOSP&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">      &quot;desc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;Android 操作系统源代码&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">      &quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;/AOSP&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">      &quot;status&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;S&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">      &quot;help&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;/help/AOSP/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">      &quot;upstream&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://android.googlesource.com/mirror/manifest&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">      &quot;size&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;596G&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">      &quot;disable&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;">false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">    },</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">    {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">      &quot;cname&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;AUR&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">      &quot;desc&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;Arch Linux 用户软件库&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">      &quot;url&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://aur.tuna.tsinghua.edu.cn&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">      &quot;status&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;S1612195849X1612196849N&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">      &quot;help&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;/help/AUR/&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#9CDCFE;">      &quot;upstream&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;">&quot;https://aur.archlinux.org/&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">  ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#D4D4D4;">}</span></span></code></pre><div class="collapsed-lines"></div></div>`,1))]),a[52]||(a[52]=p(`<h2 id="镜像站后端们" tabindex="-1"><a class="header-anchor" href="#镜像站后端们"><span>镜像站后端们</span></a></h2><p>得益于LUGers的大力贡献，现在已涌现出许许多多新的后端解决方案，以下是一些比较流行的镜像站后端同步解决方案：</p><h3 id="tuna-sync" tabindex="-1"><a class="header-anchor" href="#tuna-sync"><span>TUNA Sync</span></a></h3><p>使用 worker 和 manager 管理节点</p><p>快速入门：</p><blockquote><p>本例中:</p><ul><li>只镜像elvish项目</li><li>禁用了https</li><li>禁用了cgroup支持</li><li>快速上手</li></ul></blockquote><p>获取最新的<a href="https://github.com/tuna/tunasync/releases" target="_blank" rel="noopener noreferrer">TUNA Sync二进制包源文件</a></p><div class="language-shell" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-shell"><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;"> -O</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> https://github.com/tuna/tunasync/releases/download/v0.9.3/tunasync-v0.9.3-linux-amd64-bin.tar.gz</span></span></code></pre></div><p>服务器下不了就自己下用SSH传，版本号可能不一样，自行更改</p><p>解压</p><div class="language-shell" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-shell"><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">tar</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;"> -zxvf</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> tunasync-v0.9.3-linux-amd64-bin.tar.gz</span></span></code></pre></div><p>将文件移动到标准二进制目录</p><div class="language-shell" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-shell"><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> mv</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> ~/tunasync</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> ~/tunasynctl</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> /usr/local/bin/</span></span></code></pre></div><p>验证</p><div class="language-shell" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-shell"><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#DCDCAA;">which</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> tunasync</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> tunasynctl</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A9955;">  # 应返回 /usr/local/bin/tunasync 等路径</span></span></code></pre></div><p>配置</p><div class="language-shell" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-shell"><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> ~/tunasync_demo</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">mkdir</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> /tmp/tunasync</span></span></code></pre></div><p>编辑<code>~/tunasync_demo/worker.conf</code></p>`,18)),s("div",O,[s("div",R,[s("span",I,[i(t,{provider:"iconify",name:"vscode-icons:file-type-config"}),a[27]||(a[27]=n("~/tunasync_demo/worker.conf",-1))])]),a[28]||(a[28]=p(`<div class="language-conf has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="conf" style="--vp-collapsed-lines:15;--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-conf"><span class="line"><span>[global]</span></span>
<span class="line"><span>name = &quot;test_worker&quot;</span></span>
<span class="line"><span>log_dir = &quot;/tmp/tunasync/log/tunasync/{{.Name}}&quot;</span></span>
<span class="line"><span>mirror_dir = &quot;/tmp/tunasync&quot;</span></span>
<span class="line"><span>concurrent = 10</span></span>
<span class="line"><span>interval = 120</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[manager]</span></span>
<span class="line"><span>api_base = &quot;http://localhost:12345&quot;</span></span>
<span class="line"><span>token = &quot;&quot;</span></span>
<span class="line"><span>ca_cert = &quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[cgroup]</span></span>
<span class="line"><span>enable = false</span></span>
<span class="line"><span>base_path = &quot;/sys/fs/cgroup&quot;</span></span>
<span class="line"><span>group = &quot;tunasync&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[server]</span></span>
<span class="line"><span>hostname = &quot;localhost&quot;</span></span>
<span class="line"><span>listen_addr = &quot;127.0.0.1&quot;</span></span>
<span class="line"><span>listen_port = 6000</span></span>
<span class="line"><span>ssl_cert = &quot;&quot;</span></span>
<span class="line"><span>ssl_key = &quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;elvish&quot;</span></span>
<span class="line"><span>provider = &quot;rsync&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://rsync.elv.sh/elvish/&quot;</span></span>
<span class="line"><span>use_ipv6 = false</span></span></code></pre><div class="collapsed-lines"></div></div>`,1))]),a[53]||(a[53]=s("p",null,[n("编辑 "),s("code",null,"~/tunasync_demo/manager.conf")],-1)),s("div",G,[s("div",L,[s("span",K,[i(t,{provider:"iconify",name:"vscode-icons:file-type-config"}),a[29]||(a[29]=n("~/tunasync_demo/manager.conf",-1))])]),a[30]||(a[30]=p(`<div class="language-conf" data-highlighter="shiki" data-ext="conf" style="--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-conf"><span class="line"><span>debug = false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[server]</span></span>
<span class="line"><span>addr = &quot;127.0.0.1&quot;</span></span>
<span class="line"><span>port = 12345</span></span>
<span class="line"><span>ssl_cert = &quot;&quot;</span></span>
<span class="line"><span>ssl_key = &quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[files]</span></span>
<span class="line"><span>db_type = &quot;bolt&quot;</span></span>
<span class="line"><span>db_file = &quot;/tmp/tunasync/manager.db&quot;</span></span>
<span class="line"><span>ca_cert = &quot;&quot;</span></span></code></pre></div>`,1))]),a[54]||(a[54]=p(`<blockquote><p>除了 bolt 以外，还支持 badger、leveldb 和 redis 的数据库后端。对于 badger 和 leveldb，只需要修改 db_type。如果使用 redis 作为数据库后端，把 db_type 改为 redis，并把下面的 db_file 设为 redis 服务器的地址： redis://user:password@host:port/db_number</p></blockquote><p>运行</p><div class="language-shell" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-shell"><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">tunasync</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> manager</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;"> --config</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> ~/tunasync_demo/manager.conf</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">tunasync</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> worker</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;"> --config</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> ~/tunasync_demo/worker.conf</span></span></code></pre></div><p>本例中，镜像的数据在 <code>/tmp/tunasync/</code></p><hr><p>查看同步状态</p><div class="language-shell" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-shell"><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">tunasynctl</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> list</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;"> -p</span><span style="--shiki-light:#005CC5;--shiki-dark:#B5CEA8;"> 12345</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;"> --all</span></span></code></pre></div><blockquote><p>tunasynctl 也支持配置文件。配置文件可以放在 <code>/etc/tunasync/ctl.conf</code> 或者 <code>~/.config/tunasync/ctl.conf</code> 两个位置，后者可以覆盖前者的配置值。</p></blockquote><p>配置文件内容为：</p>`,9)),s("div",J,[s("div",V,[s("span",Z,[i(t,{provider:"iconify",name:"vscode-icons:file-type-config"}),a[31]||(a[31]=n("/etc/tunasync/ctl.conf",-1))])]),a[32]||(a[32]=p(`<div class="language-conf" data-highlighter="shiki" data-ext="conf" style="--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-conf"><span class="line"><span>manager_addr = &quot;127.0.0.1&quot;</span></span>
<span class="line"><span>manager_port = 12345</span></span>
<span class="line"><span>ca_cert = &quot;&quot;</span></span></code></pre></div>`,1))]),a[55]||(a[55]=p("<p>安全设置</p><p><code>worker</code> 和 <code>manager</code> 之间用 <code>http(s)</code> 通信，如果你 worker 和 manager 都是在本机，那么没必要使用 https。此时 manager 就不指定 ssl_key 和 ssl_cert，留空；worker 的 ca_cert 留空，api_base 以 http:// 开头。</p><p>如果需要加密的通信，manager 需要指定 ssl_key 和 ssl_cert，worker 要指定 ca_cert，并且 api_base 应该是 <code>https://</code> 开头。</p><hr><p>work.conf 示例配置</p>",5)),s("div",Y,[s("div",W,[s("span",Q,[i(t,{provider:"iconify",name:"vscode-icons:file-type-config"}),a[33]||(a[33]=n("/home/scripts/worker.conf",-1))])]),a[34]||(a[34]=p(`<div class="language-conf has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="conf" style="--vp-collapsed-lines:15;--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-conf"><span class="line"><span># /</span><span class="highlighted-word">home</span><span>/scripts in this example points to https://github.com/tuna/tunasync-scripts/</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[global]</span></span>
<span class="line"><span>name = &quot;mirror_worker&quot;</span></span>
<span class="line"><span>log_dir = &quot;/srv/tunasync/log/tunasync/{{.Name}}&quot;</span></span>
<span class="line"><span>mirror_dir = &quot;/srv/tunasync&quot;</span></span>
<span class="line"><span>concurrent = 10</span></span>
<span class="line"><span>interval = 120</span></span>
<span class="line"><span></span></span>
<span class="line"><span># ensure the exec user be add into \`docker\` group</span></span>
<span class="line"><span>[docker]</span></span>
<span class="line"><span># in \`command provider\` can use docker_image and docker_volumes</span></span>
<span class="line"><span>enable = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[manager]</span></span>
<span class="line"><span>api_base = &quot;http://localhost:12345&quot;</span></span>
<span class="line"><span>token = &quot;some_token&quot;</span></span>
<span class="line"><span>ca_cert = &quot;&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[cgroup]</span></span>
<span class="line"><span>enable = false</span></span>
<span class="line"><span>base_path = &quot;/sys/fs/cgroup&quot;</span></span>
<span class="line"><span>group = &quot;tunasync&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[server]</span></span>
<span class="line"><span>hostname = &quot;localhost&quot;</span></span>
<span class="line"><span>listen_addr = &quot;127.0.0.1&quot;</span></span>
<span class="line"><span>listen_port = 6000</span></span>
<span class="line"><span>ssl_cert = &quot;&quot;</span></span>
<span class="line"><span>ssl_key = &quot;&quot;</span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;adobe-fonts&quot;</span></span>
<span class="line"><span>interval = 1440</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://github.com/adobe-fonts&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/adobe-fonts.sh&quot;</span></span>
<span class="line"><span>size_pattern = &quot;Total size is ([0-9\\\\.]+[KMGTP]?)&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;AdoptOpenJDK&quot;</span></span>
<span class="line"><span>interval = 5760</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/adoptopenjdk.py&quot;</span></span>
<span class="line"><span>upstream = &quot;https://adoptopenjdk.jfrog.io/adoptopenjdk&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;alpine&quot;</span></span>
<span class="line"><span>provider = &quot;rsync&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://rsync.alpinelinux.org/alpine/&quot;</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;anaconda&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://repo.continuum.io/&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/anaconda.py --delete&quot;</span></span>
<span class="line"><span>size_pattern = &quot;Total size is ([0-9\\\\.]+[KMGTP]?)&quot;</span></span>
<span class="line"><span>interval = 720</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;apache&quot;</span></span>
<span class="line"><span>provider = &quot;rsync&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://rsync.apache.org/apache-dist/&quot;</span></span>
<span class="line"><span>use_ipv4 = true</span></span>
<span class="line"><span>rsync_options = [ &quot;--delete-excluded&quot; ]</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;armbian&quot;</span></span>
<span class="line"><span>provider = &quot;two-stage-rsync&quot;</span></span>
<span class="line"><span>stage1_profile = &quot;debian&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://rsync.armbian.com/apt/&quot;</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;armbian-releases&quot;</span></span>
<span class="line"><span>provider = &quot;rsync&quot;</span></span>
<span class="line"><span>stage1_profile = &quot;debian&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://rsync.armbian.com/dl/&quot;</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;bananian&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://dl.bananian.org/&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/lftp.sh&quot;</span></span>
<span class="line"><span>interval = 1440</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;bioconductor&quot;</span></span>
<span class="line"><span>provider = &quot;rsync&quot;</span></span>
<span class="line"><span>upstream = &quot;master.bioconductor.org:./&quot;</span></span>
<span class="line"><span>rsync_options = [ &quot;--rsh=ssh -i /root/id_rsa -o PasswordAuthentication=no -l sync&quot; ]</span></span>
<span class="line"><span>exclude_file = &quot;/etc/excludes/bioconductor.txt&quot;</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;blender&quot;</span></span>
<span class="line"><span>provider = &quot;rsync&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://mirrors.dotsrc.org/blender/&quot;</span></span>
<span class="line"><span>rsync_options = [ &quot;--delete-excluded&quot; ]</span></span>
<span class="line"><span>exclude_file = &quot;/etc/excludes/blender.txt&quot;</span></span>
<span class="line"><span>interval = 1440</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;chakra&quot;</span></span>
<span class="line"><span>provider = &quot;rsync&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://rsync.chakralinux.org/packages/&quot;</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;chakra-releases&quot;</span></span>
<span class="line"><span>provider = &quot;rsync&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://rsync.chakralinux.org/releases/&quot;</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;chef&quot;</span></span>
<span class="line"><span>interval = 1440</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://packages.chef.io/repos&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/chef.sh&quot;</span></span>
<span class="line"><span>size_pattern = &quot;size-sum: ([0-9\\\\.]+[KMGTP])&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;clickhouse&quot;</span></span>
<span class="line"><span>interval = 2880</span></span>
<span class="line"><span>provider = &quot;rsync&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://repo.yandex.ru/yandexrepo/clickhouse/&quot;</span></span>
<span class="line"><span>exclude_file = &quot;/etc/excludes/clickhouse.txt&quot;</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;clojars&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;s3://clojars-repo-production/&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/s3.sh&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/ftpsync:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        [mirrors.env]</span></span>
<span class="line"><span>        TUNASYNC_S3_ENDPOINT = &quot;https://s3.dualstack.us-east-2.amazonaws.com&quot;</span></span>
<span class="line"><span>        #TUNASYNC_S3_ENDPOINT = &quot;https://s3.us-east-2.amazonaws.com&quot;</span></span>
<span class="line"><span>        TUNASYNC_AWS_OPTIONS = &quot;--delete --exclude index.html&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;CPAN&quot;</span></span>
<span class="line"><span>provider = &quot;rsync&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://cpan-rsync.perl.org/CPAN/&quot;</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;CRAN&quot;</span></span>
<span class="line"><span>provider = &quot;rsync&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://cran.r-project.org/CRAN/&quot;</span></span>
<span class="line"><span>rsync_options = [ &quot;--delete-excluded&quot; ]</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;CTAN&quot;</span></span>
<span class="line"><span>provider = &quot;rsync&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://mirrors.rit.edu/CTAN/&quot;</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;dart-pub&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://pub.dev/api&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/pub.sh&quot;</span></span>
<span class="line"><span>interval = 30</span></span>
<span class="line"><span>docker_image = &quot;tunathu/pub-mirror:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        [mirrors.env]</span></span>
<span class="line"><span>        MIRROR_BASE_URL = &quot;https://mirrors.tuna.tsinghua.edu.cn/dart-pub&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;debian&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://mirrors.tuna.tsinghua.edu.cn/debian/&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/debian.sh sync:archive:debian&quot;</span></span>
<span class="line"><span>size_pattern = &quot;Total size is ([0-9\\\\.]+[KMGTP]?)&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/ftpsync&quot;</span></span>
<span class="line"><span>docker_volumes = [</span></span>
<span class="line"><span>        &quot;/etc/misc/ftpsync-debian.conf:/ftpsync/etc/ftpsync-debian.conf:ro&quot;,</span></span>
<span class="line"><span>        &quot;/log/ftpsync:/</span><span class="highlighted-word">home</span><span>/log/tunasync/ftpsync&quot;,</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>        [mirrors.env]</span></span>
<span class="line"><span>        FTPSYNC_LOG_DIR = &quot;/</span><span class="highlighted-word">home</span><span>/log/tunasync/ftpsync&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;docker-ce&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://download.docker.com/&quot;</span></span>
<span class="line"><span>command = &quot;timeout 3h /</span><span class="highlighted-word">home</span><span>/scripts/docker-ce.py --workers 10 --fast-skip&quot;</span></span>
<span class="line"><span>interval = 1440</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;ELK&quot;</span></span>
<span class="line"><span>interval = 1440</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://packages.elastic.co&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/ELK.sh&quot;</span></span>
<span class="line"><span>size_pattern = &quot;size-sum: ([0-9\\\\.]+[KMGTP])&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span>        # set environment varialbes</span></span>
<span class="line"><span>        [mirrors.env]</span></span>
<span class="line"><span>        WGET_OPTIONS = &quot;-6&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;elasticstack&quot;</span></span>
<span class="line"><span>interval = 1440</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://artifacts.elastic.co/&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/elastic.sh&quot;</span></span>
<span class="line"><span>size_pattern = &quot;size-sum: ([0-9\\\\.]+[KMGTP])&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;erlang-solutions&quot;</span></span>
<span class="line"><span>interval = 1440</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://packages.erlang-solutions.com&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/erlang.sh&quot;</span></span>
<span class="line"><span>size_pattern = &quot;size-sum: ([0-9\\\\.]+[KMGTP])&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;flutter&quot;</span></span>
<span class="line"><span>interval = 1440</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://storage.googleapis.com/flutter_infra/&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/flutter.sh&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;github-release&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://api.github.com/repos/&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/github-release.py --workers 5&quot;</span></span>
<span class="line"><span>size_pattern = &quot;Total size is ([0-9\\\\.]+[KMGTP]?)&quot;</span></span>
<span class="line"><span>interval = 720</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span>  [mirrors.env]</span></span>
<span class="line"><span>  GITHUB_TOKEN = &quot;xxxxx&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;gitlab-ce&quot;</span></span>
<span class="line"><span>interval = 1440</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://packages.gitlab.com/gitlab/gitlab-ce/&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/gitlab-ce.sh&quot;</span></span>
<span class="line"><span>size_pattern = &quot;size-sum: ([0-9\\\\.]+[KMGTP])&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;gitlab-ee&quot;</span></span>
<span class="line"><span>interval = 1440</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://packages.gitlab.com/gitlab/gitlab-ee/&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/gitlab-ce.sh&quot;</span></span>
<span class="line"><span>size_pattern = &quot;size-sum: ([0-9\\\\.]+[KMGTP])&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;gitlab-runner&quot;</span></span>
<span class="line"><span>interval = 1440</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://packages.gitlab.com/runner/gitlab-runner&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/gitlab-runner.sh&quot;</span></span>
<span class="line"><span>size_pattern = &quot;size-sum: ([0-9\\\\.]+[KMGTP])&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;grafana&quot;</span></span>
<span class="line"><span>interval = 1440</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://packages.grafana.com/oss&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/grafana.sh&quot;</span></span>
<span class="line"><span>size_pattern = &quot;size-sum: ([0-9\\\\.]+[KMGTP])&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;hackage&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/hackage.sh&quot;</span></span>
<span class="line"><span>upstream = &quot;https://hackage.haskell.org/&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;</span><span class="highlighted-word">home</span><span>brew-bottles&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://</span><span class="highlighted-word">home</span><span>brew.bintray.com&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/linuxbrew-bottles.sh&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/</span><span class="highlighted-word">home</span><span>brew-mirror&quot;</span></span>
<span class="line"><span>        # set environment varialbes</span></span>
<span class="line"><span>        [mirrors.env]</span></span>
<span class="line"><span>        HOMEBREW_REPO = &quot;https://neomirrors.tuna.tsinghua.edu.cn/git/</span><span class="highlighted-word">home</span><span>brew&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;influxdata&quot;</span></span>
<span class="line"><span>interval = 1440</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://repos.influxdata.com&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/influxdata.sh&quot;</span></span>
<span class="line"><span>size_pattern = &quot;size-sum: ([0-9\\\\.]+[KMGTP])&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;kali&quot;</span></span>
<span class="line"><span>provider = &quot;two-stage-rsync&quot;</span></span>
<span class="line"><span>stage1_profile = &quot;debian&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://ftp.nluug.nl/kali/&quot;</span></span>
<span class="line"><span>rsync_options = [ &quot;--delete-excluded&quot; ] # delete .~tmp~ folders</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;kali-images&quot;</span></span>
<span class="line"><span>provider = &quot;rsync&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://ftp.nluug.nl/kali-images/&quot;</span></span>
<span class="line"><span>rsync_options = [ &quot;--delete-excluded&quot; ] # delete .~tmp~ folders</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;KaOS&quot;</span></span>
<span class="line"><span>provider = &quot;rsync&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://kaosx.tk/kaos/&quot;</span></span>
<span class="line"><span>rsync_options = [ &quot;--delete-excluded&quot; ]</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;kernel&quot;</span></span>
<span class="line"><span>provider = &quot;rsync&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://rsync.kernel.org/pub/linux/kernel/&quot;</span></span>
<span class="line"><span>rsync_options = [ &quot;--delete-excluded&quot; ]</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;kicad&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;s3://kicad-downloads/&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/s3.sh&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/ftpsync:latest&quot;</span></span>
<span class="line"><span>        [mirrors.env]</span></span>
<span class="line"><span>        TUNASYNC_S3_ENDPOINT = &quot;https://s3.cern.ch&quot;</span></span>
<span class="line"><span>        TUNASYNC_AWS_OPTIONS = &quot;--delete --exclude index.html&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;kodi&quot;</span></span>
<span class="line"><span>provider = &quot;rsync&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://mirror.yandex.ru/mirrors/xbmc/&quot;</span></span>
<span class="line"><span>rsync_options = [ &quot;--delete-excluded&quot; ]</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span>use_ipv6 = true</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;kubernetes&quot;</span></span>
<span class="line"><span>interval = 2880</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;http://packages.cloud.google.com&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/kubernetes.sh&quot;</span></span>
<span class="line"><span>size_pattern = &quot;size-sum: ([0-9\\\\.]+[KMGTP])&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;linuxbrew-bottles&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://linuxbrew.bintray.com&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/linuxbrew-bottles.sh&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/</span><span class="highlighted-word">home</span><span>brew-mirror&quot;</span></span>
<span class="line"><span>        # set environment varialbes</span></span>
<span class="line"><span>        [mirrors.env]</span></span>
<span class="line"><span>        RUN_LINUXBREW = &quot;true&quot;</span></span>
<span class="line"><span>        HOMEBREW_REPO = &quot;https://neomirrors.tuna.tsinghua.edu.cn/git/</span><span class="highlighted-word">home</span><span>brew&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;linuxmint&quot;</span></span>
<span class="line"><span>provider = &quot;two-stage-rsync&quot;</span></span>
<span class="line"><span>stage1_profile = &quot;debian&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://mirrors.kernel.org/linuxmint-packages/&quot;</span></span>
<span class="line"><span>rsync_options = [ &quot;--delete-excluded&quot; ]</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;lxc-images&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://us.images.linuxcontainers.org/&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/lxc-images.sh&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span>interval = 720</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;lyx&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;ftp://ftp.lyx.org/pub/lyx/&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/lftp.sh&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span>        [mirrors.env]</span></span>
<span class="line"><span>        TUNASYNC_LFTP_OPTIONS = &quot;--only-newer&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;mongodb&quot;</span></span>
<span class="line"><span>interval = 1440</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://repo.mongodb.org&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/mongodb.sh&quot;</span></span>
<span class="line"><span>size_pattern = &quot;size-sum: ([0-9\\\\.]+[KMGTP])&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;msys2&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;http://repo.msys2.org/&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/lftp.sh&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;mysql&quot;</span></span>
<span class="line"><span>interval = 30</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://repo.mysql.com&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/mysql.sh&quot;</span></span>
<span class="line"><span>size_pattern = &quot;size-sum: ([0-9\\\\.]+[KMGTP])&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span>        # set environment varialbes</span></span>
<span class="line"><span>        [mirrors.env]</span></span>
<span class="line"><span>        USE_IPV6 = &quot;1&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;nix&quot;</span></span>
<span class="line"><span>interval = 1440</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;s3://nix-releases/nix/&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/nix.sh&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span>        [mirrors.env]</span></span>
<span class="line"><span>        MIRROR_BASE_URL = &#39;https://mirrors.tuna.tsinghua.edu.cn/nix/&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;nix-channels&quot;</span></span>
<span class="line"><span>interval = 300</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://nixos.org/channels&quot;</span></span>
<span class="line"><span>command = &quot;timeout 20h /</span><span class="highlighted-word">home</span><span>/scripts/nix-channels.py&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/nix-channels:latest&quot;</span></span>
<span class="line"><span>docker_options = [</span></span>
<span class="line"><span>  &quot;--cpus&quot;, &quot;20&quot;,</span></span>
<span class="line"><span>  ]</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;nodesource&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://deb.nodesource.com/&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/nodesource.sh&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;openresty&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://openresty.org/package/&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/lftp.sh&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        [mirrors.env]</span></span>
<span class="line"><span>        TUNASYNC_LFTP_OPTIONS = &quot;--only-newer&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;packagist&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;http://packagist.org/&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/packagist.sh&quot;</span></span>
<span class="line"><span>interval = 1440</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;proxmox&quot;</span></span>
<span class="line"><span>interval = 1440</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;http://download.proxmox.com&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/proxmox.sh&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;pypi&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://pypi.python.org/&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/pypi.sh&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/bandersnatch:latest&quot;</span></span>
<span class="line"><span>interval = 5</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;qt&quot;</span></span>
<span class="line"><span>provider = &quot;rsync&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://master.qt-project.org/qt-all/&quot;</span></span>
<span class="line"><span>exclude_file = &quot;/etc/excludes/qt.txt&quot;</span></span>
<span class="line"><span>rsync_options = [ &quot;--delete-excluded&quot; ]</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;raspberrypi&quot;</span></span>
<span class="line"><span>provider = &quot;two-stage-rsync&quot;</span></span>
<span class="line"><span>stage1_profile = &quot;debian&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://apt-repo.raspberrypi.org/archive/debian/&quot;</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;raspbian-images&quot;</span></span>
<span class="line"><span>interval = 5760</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://downloads.raspberrypi.org/&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/lftp.sh&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        [mirrors.env]</span></span>
<span class="line"><span>        TUNASYNC_LFTP_OPTIONS = &quot;-x ^icons/$ -c --only-missing -v --no-perms&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;raspbian&quot;</span></span>
<span class="line"><span>provider = &quot;two-stage-rsync&quot;</span></span>
<span class="line"><span>stage1_profile = &quot;debian&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://archive.raspbian.org/archive/&quot;</span></span>
<span class="line"><span>rsync_options = [ &quot;--delete-excluded&quot; ] # delete .~tmp~ folders</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;redhat&quot;</span></span>
<span class="line"><span>provider = &quot;rsync&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://ftp.redhat.com/redhat/&quot;</span></span>
<span class="line"><span>rsync_options = [ &quot;--delete-excluded&quot; ]</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span>exclude_file = &quot;/etc/excludes/redhat.txt&quot;</span></span>
<span class="line"><span>interval = 1440</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        [mirrors.env]</span></span>
<span class="line"><span>        RSYNC_PROXY=&quot;127.0.0.1:8123&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;remi&quot;</span></span>
<span class="line"><span>interval = 1440</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://rpms.remirepo.net&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/remi.sh&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;repo-ck&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;http://repo-ck.com&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/repo-ck.sh&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;ros&quot;</span></span>
<span class="line"><span>provider = &quot;rsync&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://mirror.umd.edu/packages.ros.org/ros/&quot;</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;ros2&quot;</span></span>
<span class="line"><span>interval = 1440</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;http://packages.ros.org/ros2&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/ros2.sh&quot;</span></span>
<span class="line"><span>size_pattern = &quot;size-sum: ([0-9\\\\.]+[KMGTP])&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;rubygems&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://rubygems.org&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/rubygems.sh&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/rubygems-mirror&quot;</span></span>
<span class="line"><span>interval = 60</span></span>
<span class="line"><span>        # set environment varialbes</span></span>
<span class="line"><span>        [mirrors.env]</span></span>
<span class="line"><span>        INIT = &quot;0&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;rudder&quot;</span></span>
<span class="line"><span>interval = 2880</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://repository.rudder.io&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/rudder.sh&quot;</span></span>
<span class="line"><span>size_pattern = &quot;size-sum: ([0-9\\\\.]+[KMGTP])&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;rustup&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://rustup.rs/&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/rustup.sh&quot;</span></span>
<span class="line"><span>interval = 1440</span></span>
<span class="line"><span>docker_image = &quot;tunathu/rustup-mirror:latest&quot;</span></span>
<span class="line"><span>docker_volumes = [</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>docker_options = [</span></span>
<span class="line"><span>]</span></span>
<span class="line"><span>        [mirrors.env]</span></span>
<span class="line"><span>        MIRROR_BASE_URL = &quot;https://mirrors.tuna.tsinghua.edu.cn/rustup&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;saltstack&quot;</span></span>
<span class="line"><span>interval = 1440 # required on http://repo.saltstack.com/#mirror</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;s3://s3/&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/s3.sh&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/ftpsync:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        [mirrors.env]</span></span>
<span class="line"><span>        TUNASYNC_S3_ENDPOINT = &quot;https://s3.repo.saltstack.com&quot;</span></span>
<span class="line"><span>        TUNASYNC_AWS_OPTIONS = &quot;--delete --exact-timestamps&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;solus&quot;</span></span>
<span class="line"><span>provider = &quot;rsync&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://mirrors.rit.edu/solus/&quot;</span></span>
<span class="line"><span>rsync_options = [ &quot;--exclude&quot;, &quot;/shannon&quot;, &quot;--exclude&quot;, &quot;/unstable&quot; ]</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;stackage&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/stackage.py&quot;</span></span>
<span class="line"><span>upstream = &quot;https://www.stackage.org/&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span>        # set environment varialbes</span></span>
<span class="line"><span>        [mirrors.env]</span></span>
<span class="line"><span>        GIT_COMMITTER_NAME = &quot;TUNA mirrors&quot;</span></span>
<span class="line"><span>        GIT_COMMITTER_EMAIL = &quot;mirrors@tuna.tsinghua.edu.cn&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;steamos&quot;</span></span>
<span class="line"><span>interval = 1440</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;http://repo.steampowered.com&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/lftp.sh&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        [mirrors.env]</span></span>
<span class="line"><span>    TUNASYNC_LFTP_OPTIONS = &quot;--only-newer --exclude icons/ &quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;termux&quot;</span></span>
<span class="line"><span>interval = 1440</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;https://dl.bintray.com/termux/termux-packages-24/&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/termux.sh&quot;</span></span>
<span class="line"><span>size_pattern = &quot;size-sum: ([0-9\\\\.]+[KMGTP])&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;ubuntu&quot;</span></span>
<span class="line"><span>provider = &quot;two-stage-rsync&quot;</span></span>
<span class="line"><span>stage1_profile = &quot;debian&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://archive.ubuntu.com/ubuntu/&quot;</span></span>
<span class="line"><span>rsync_options = [ &quot;--delete-excluded&quot; ]</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;ubuntu-ports&quot;</span></span>
<span class="line"><span>provider = &quot;two-stage-rsync&quot;</span></span>
<span class="line"><span>stage1_profile = &quot;debian&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://ports.ubuntu.com/ubuntu-ports/&quot;</span></span>
<span class="line"><span>rsync_options = [ &quot;--delete-excluded&quot; ]</span></span>
<span class="line"><span>exclude_file = &quot;/etc/excludes/ubuntu-ports-exclude.txt&quot;</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;virtualbox&quot;</span></span>
<span class="line"><span>interval = 1440</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;http://download.virtualbox.org/virtualbox&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/virtualbox.sh&quot;</span></span>
<span class="line"><span>size_pattern = &quot;size-sum: ([0-9\\\\.]+[KMGTP])&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;winehq&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>upstream = &quot;ftp://ftp.winehq.org/pub/&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/scripts/lftp.sh&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>        [mirrors.env]</span></span>
<span class="line"><span>        TUNASYNC_LFTP_OPTIONS = &quot;-x wine-builds.old/ -x /\\\\..+&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;zabbix&quot;</span></span>
<span class="line"><span>provider = &quot;rsync&quot;</span></span>
<span class="line"><span>upstream = &quot;rsync://repo.zabbix.com/mirror/&quot;</span></span>
<span class="line"><span>rsync_options = [ &quot;--delete-excluded&quot;, &quot;--chmod=o+r,Do+x,Fa-x&quot; ]</span></span>
<span class="line"><span>memory_limit = &quot;256M&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;AOSP&quot;</span></span>
<span class="line"><span>interval = 720</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/tunasync-scripts/aosp.sh&quot;</span></span>
<span class="line"><span>upstream = &quot;https://android.googlesource.com/mirror/manifest&quot;</span></span>
<span class="line"><span>size_pattern = &quot;Total size is ([0-9\\\\.]+[KMGTP]?)&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span>        [mirrors.env]</span></span>
<span class="line"><span>        REPO = &quot;/usr/local/bin/aosp-repo&quot;</span></span>
<span class="line"><span>        REPO_URL = &quot;https://mirrors.tuna.tsinghua.edu.cn/git/git-repo&quot;</span></span>
<span class="line"><span>        USE_BITMAP_INDEX = &quot;1&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;lineageOS&quot;</span></span>
<span class="line"><span>interval = 720</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/tunasync-scripts/aosp.sh&quot;</span></span>
<span class="line"><span>upstream = &quot;https://github.com/LineageOS/mirror&quot;</span></span>
<span class="line"><span>size_pattern = &quot;Total size is ([0-9\\\\.]+[KMGTP]?)&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span>        [mirrors.env]</span></span>
<span class="line"><span>        REPO = &quot;/usr/local/bin/aosp-repo&quot;</span></span>
<span class="line"><span>        REPO_URL = &quot;https://mirrors.tuna.tsinghua.edu.cn/git/git-repo&quot;</span></span>
<span class="line"><span>        USE_BITMAP_INDEX = &quot;1&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;chromiumos&quot;</span></span>
<span class="line"><span>interval = 720</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/tunasync-scripts/cros.sh&quot;</span></span>
<span class="line"><span>upstream = &quot;https://chromium.googlesource.com&quot;</span></span>
<span class="line"><span>size_pattern = &quot;Total size is ([0-9\\\\.]+[KMGTP]?)&quot;</span></span>
<span class="line"><span>fail_on_match = &quot;fatal: &quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span>        [mirrors.env]</span></span>
<span class="line"><span>        USE_BITMAP_INDEX = &quot;1&quot;</span></span>
<span class="line"><span>        CONCURRENT_JOBS = &quot;20&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;crates.io-index.git&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/tunasync-scripts/git.sh&quot;</span></span>
<span class="line"><span>upstream = &quot;https://github.com/rust-lang/crates.io-index.git&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span>size_pattern = &quot;size-pack: ([0-9\\\\.]+[KMGTP])&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;flutter-sdk.git&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/tunasync-scripts/git.sh&quot;</span></span>
<span class="line"><span>upstream = &quot;git://github.com/flutter/flutter.git&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span>size_pattern = &quot;size-pack: ([0-9\\\\.]+[KMGTP])&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;gcc.git&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/tunasync-scripts/git.sh&quot;</span></span>
<span class="line"><span>upstream = &quot;git://gcc.gnu.org/git/gcc.git&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span>size_pattern = &quot;size-pack: ([0-9\\\\.]+[KMGTP])&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;gentoo-portage.git&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/tunasync-scripts/git.sh&quot;</span></span>
<span class="line"><span>upstream = &quot;git://github.com/gentoo-mirror/gentoo.git&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span>size_pattern = &quot;size-pack: ([0-9\\\\.]+[KMGTP])&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;git-repo&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/tunasync-scripts/git-repo.sh&quot;</span></span>
<span class="line"><span>upstream = &quot;https://gerrit.googlesource.com/git-repo&quot;</span></span>
<span class="line"><span>size_pattern = &quot;size-pack: ([0-9\\\\.]+[KMGTP])&quot;</span></span>
<span class="line"><span>fail_on_match = &quot;fatal: &quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;</span><span class="highlighted-word">home</span><span>brew&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/tunasync-scripts/</span><span class="highlighted-word">home</span><span>brew.sh&quot;</span></span>
<span class="line"><span>upstream = &quot;https://github.com/Homebrew&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span>size_pattern = &quot;Total size is ([0-9\\\\.]+[KMGTP]?)&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;CocoaPods&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/tunasync-scripts/cocoapods.sh&quot;</span></span>
<span class="line"><span>upstream = &quot;https://github.com/CocoaPods&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span>size_pattern = &quot;Total size is ([0-9\\\\.]+[KMGTP]?)&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;pybombs&quot;</span></span>
<span class="line"><span>interval = 720</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/tunasync-scripts/pybombs.sh&quot;</span></span>
<span class="line"><span>upstream = &quot;https://github.com/scateu/pybombs-mirror/&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span>docker_volumes = [&quot;/</span><span class="highlighted-word">home</span><span>/pybombs-mirror:/opt/pybombs-mirror&quot;]</span></span>
<span class="line"><span>size_pattern = &quot;Total size is ([0-9\\\\.]+[KMGTP]?)&quot;</span></span>
<span class="line"><span>        [mirrors.env]</span></span>
<span class="line"><span>        PYBOMBS_MIRROR_SCRIPT_PATH = &quot;/opt/pybombs-mirror&quot;</span></span>
<span class="line"><span>        MIRROR_BASE_URL = &quot;https://mirrors.tuna.tsinghua.edu.cn/pybombs&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>[[mirrors]]</span></span>
<span class="line"><span>name = &quot;llvm&quot;</span></span>
<span class="line"><span>provider = &quot;command&quot;</span></span>
<span class="line"><span>command = &quot;/</span><span class="highlighted-word">home</span><span>/tunasync-scripts/llvm.sh&quot;</span></span>
<span class="line"><span>upstream = &quot;https://git.llvm.org/git&quot;</span></span>
<span class="line"><span>docker_image = &quot;tunathu/tunasync-scripts:latest&quot;</span></span>
<span class="line"><span>size_pattern = &quot;Total size is ([0-9\\\\.]+[KMGTP]?)&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span># vim: ft=toml</span></span></code></pre><div class="collapsed-lines"></div></div>`,1))]),a[56]||(a[56]=s("h3",{id:"ustclug-yuki",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#ustclug-yuki"},[s("span",null,"USTCLUG YUKI")])],-1)),a[57]||(a[57]=s("p",null,"中国科学技术大学Linux用户组开发的Go语言控制后端",-1)),i(e,{repo:"ustclug/yuki"}),a[58]||(a[58]=s("h2",{id:"镜像站前端们",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#镜像站前端们"},[s("span",null,"镜像站前端们")])],-1)),a[59]||(a[59]=s("h3",{id:"tuna-mirror-web",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#tuna-mirror-web"},[s("span",null,"TUNA Mirror Web")])],-1)),i(e,{repo:"tuna/mirror-web"}),a[60]||(a[60]=p('<ol><li>安装 Ruby</li></ol><div class="language-shell" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-shell"><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">sudo</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> dnf</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> ruby</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> ruby-devel</span></span></code></pre></div><p>验证</p><div class="language-shell" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-shell"><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">ruby</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;"> --version</span></span></code></pre></div><ol start="2"><li>安装Node.js</li></ol><div class="language-shell" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-shell"><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">dnf</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> git</span></span></code></pre></div><blockquote><p>NodeJS Releases多个版本管理器</p><p><a href="https://help.mirrors.cernet.edu.cn/nodejs-release/" target="_blank" rel="noopener noreferrer">https://help.mirrors.cernet.edu.cn/nodejs-release/</a></p><p><a href="https://nodejs.org/en/download" target="_blank" rel="noopener noreferrer">https://nodejs.org/en/download</a></p></blockquote>',7)),i(u,{id:"514",data:[{id:"nvm.sh"},{id:"fnm.sh"}]},{title0:l(({value:h,isActive:k})=>[i(t,{provider:"iconify",name:"vscode-icons:file-type-shell"}),a[35]||(a[35]=s("span",null,"nvm.sh",-1))]),title1:l(({value:h,isActive:k})=>[i(t,{provider:"iconify",name:"vscode-icons:file-type-shell"}),a[36]||(a[36]=s("span",null,"fnm.sh",-1))]),tab0:l(({value:h,isActive:k})=>a[37]||(a[37]=[s("div",{class:"language-shell","data-highlighter":"shiki","data-ext":"shell",style:{"--shiki-light":"#24292e","--shiki-dark":"#D4D4D4","--shiki-light-bg":"#fff","--shiki-dark-bg":"#1E1E1E"}},[s("pre",{class:"shiki shiki-themes github-light dark-plus vp-code"},[s("code",{class:"language-shell"},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#569CD6"}},"export"),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#9CDCFE"}}," NVM_DIR"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#D4D4D4"}},"="),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#CE9178"}},'"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#9CDCFE"}},"$HOME"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#CE9178"}},'/.nvm"'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#D4D4D4"}}," && (")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#DCDCAA"}},"  git"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#CE9178"}}," clone"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#CE9178"}}," https://github.com/nvm-sh/nvm.git"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#CE9178"}},' "'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#9CDCFE"}},"$NVM_DIR"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#CE9178"}},'"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#DCDCAA"}},"  cd"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#CE9178"}},' "'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#9CDCFE"}},"$NVM_DIR"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#CE9178"}},'"')]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#DCDCAA"}},"  git"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#CE9178"}}," checkout"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#CE9178"}}," `"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#DCDCAA"}},"git"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#CE9178"}}," describe "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#569CD6"}},"--abbrev=0"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#569CD6"}}," --tags"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#569CD6"}}," --match"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#CE9178"}},' "v[0-9]*" $('),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#DCDCAA"}},"git"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#CE9178"}}," rev-list "),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#569CD6"}},"--tags"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#569CD6"}}," --max-count=1"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#CE9178"}},")`")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#D4D4D4"}},") && "),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#DCDCAA"}},"\\."),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#CE9178"}},' "'),s("span",{style:{"--shiki-light":"#24292E","--shiki-dark":"#9CDCFE"}},"$NVM_DIR"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#CE9178"}},'/nvm.sh"')])])])],-1)])),tab1:l(({value:h,isActive:k})=>a[38]||(a[38]=[s("div",{class:"language-shell","data-highlighter":"shiki","data-ext":"shell",style:{"--shiki-light":"#24292e","--shiki-dark":"#D4D4D4","--shiki-light-bg":"#fff","--shiki-dark-bg":"#1E1E1E"}},[s("pre",{class:"shiki shiki-themes github-light dark-plus vp-code"},[s("code",{class:"language-shell"},[s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"# Download and install fnm:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#DCDCAA"}},"curl"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#569CD6"}}," -o-"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#CE9178"}}," https://fnm.vercel.app/install"),s("span",{style:{"--shiki-light":"#D73A49","--shiki-dark":"#D4D4D4"}}," |"),s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#DCDCAA"}}," bash")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"# Download and install Node.js:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#DCDCAA"}},"fnm"),s("span",{style:{"--shiki-light":"#032F62","--shiki-dark":"#CE9178"}}," install"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#B5CEA8"}}," 22")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"# Verify the Node.js version:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#DCDCAA"}},"node"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#569CD6"}}," -v"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},' # Should print "v22.15.0".')]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},"# Verify npm version:")]),n(`
`),s("span",{class:"line"},[s("span",{style:{"--shiki-light":"#6F42C1","--shiki-dark":"#DCDCAA"}},"npm"),s("span",{style:{"--shiki-light":"#005CC5","--shiki-dark":"#569CD6"}}," -v"),s("span",{style:{"--shiki-light":"#6A737D","--shiki-dark":"#6A9955"}},' # Should print "10.9.2".')])])])],-1)])),_:1}),a[61]||(a[61]=s("h3",{id:"zju-mirror",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#zju-mirror"},[s("span",null,"ZJU Mirror")])],-1)),i(e,{repo:"ZJUSCT/mirror-front"}),a[62]||(a[62]=s("p",null,"浙江大学的前端编写较为复杂，针对HTTP请求设置代理检测、IP检测与请求头（浏览器）检测，安全性高。由专业UI设计师和前端开发组成，设计恰当。",-1)),a[63]||(a[63]=s("blockquote",null,[s("p",null,"CQMU Mirror大部分灵感来自于此，查看前端仓库与开发方法。")],-1)),i(e,{repo:"Lyrlark/cqmu-mirror-frontend"}),a[64]||(a[64]=s("p",null,[s("img",{src:E,alt:"2025-04-27_07-46-25.png",width:"3799",height:"1799"})],-1)),a[65]||(a[65]=s("h3",{id:"sdu-mirror",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#sdu-mirror"},[s("span",null,"SDU Mirror")])],-1)),a[66]||(a[66]=s("p",null,"由山东大学开发的镜像站前端页面，组件自行封装，简约大气。",-1)),i(e,{repo:"SDU-Mirrors/sdu-mirror-new-frontend"}),a[67]||(a[67]=s("h3",{id:"sustech-cra-ccse-mirror-web",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#sustech-cra-ccse-mirror-web"},[s("span",null,"SUSTech-CRA ccse-mirror-web")])],-1)),a[68]||(a[68]=s("p",null,"南方科技大学镜像站前端是基于Vue3编写的，相对容易上手，而且开发指南清晰易懂，不再赘述。",-1)),i(e,{repo:"sustech-cra/ccse-mirrors-web"}),a[69]||(a[69]=s("h3",{id:"cqu-mirror",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#cqu-mirror"},[s("span",null,"CQU Mirror")])],-1)),a[70]||(a[70]=s("p",null,"重庆大学使用NuxtJS自行构建开发的镜像站前端界面，小清新。",-1)),i(e,{repo:"cqumirror/mirror-frontend"}),a[71]||(a[71]=s("h3",{id:"xjtuana-mirror",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#xjtuana-mirror"},[s("span",null,"XJTUANA Mirror")])],-1)),a[72]||(a[72]=s("p",null,"西安交通大学软件镜像站",-1)),i(e,{repo:"openana/mirrors.xjtu.edu.cn"}),a[73]||(a[73]=s("h3",{id:"cqupt-mirror",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#cqupt-mirror"},[s("span",null,"CQUPT Mirror")])],-1)),a[74]||(a[74]=s("p",null,"重庆邮电大学开发的前端也是基于Vue3编写的，对我们学校大二、大三动手能力强的同学比较友好，可以看看，启动与开发也十分简单",-1)),i(e,{repo:"CQUPTMirror/newredlens"}),a[75]||(a[75]=p('<ol><li>导入git仓库</li></ol><div class="language-shell" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-shell"><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">git</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> clone</span></span></code></pre></div><ol start="2"><li>安装pnpm</li></ol><div class="language-shell" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-shell"><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">npm</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> install</span><span style="--shiki-light:#005CC5;--shiki-dark:#569CD6;"> -g</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> pnpm</span></span></code></pre></div><ol start="3"><li>安装依赖</li></ol><div class="language-shell" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-shell"><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> install</span></span></code></pre></div><ol start="4"><li>预览</li></ol><div class="language-shell" data-highlighter="shiki" data-ext="shell" style="--shiki-light:#24292e;--shiki-dark:#D4D4D4;--shiki-light-bg:#fff;--shiki-dark-bg:#1E1E1E;"><pre class="shiki shiki-themes github-light dark-plus vp-code"><code class="language-shell"><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#DCDCAA;">pnpm</span><span style="--shiki-light:#032F62;--shiki-dark:#CE9178;"> dev</span></span></code></pre></div><p><img src="'+b+'" alt="2025-04-27_06-23-02.png" width="3840" height="1825"></p><h2 id="技术选型之前端" tabindex="-1"><a class="header-anchor" href="#技术选型之前端"><span>技术选型之前端</span></a></h2><h3 id="fancy-ngx" tabindex="-1"><a class="header-anchor" href="#fancy-ngx"><span>fancy-ngx</span></a></h3><h3 id="负载均衡器" tabindex="-1"><a class="header-anchor" href="#负载均衡器"><span>负载均衡器</span></a></h3><h3 id="框架技术与静态生成" tabindex="-1"><a class="header-anchor" href="#框架技术与静态生成"><span>框架技术与静态生成</span></a></h3><h2 id="技术选型之后端" tabindex="-1"><a class="header-anchor" href="#技术选型之后端"><span>技术选型之后端</span></a></h2><h3 id="反向代理" tabindex="-1"><a class="header-anchor" href="#反向代理"><span>反向代理</span></a></h3>',15)),i(o,{code:"eJyNk11rE0EUhu/zK4aUuAmkSXataT5AqLFVoUJoehd7Md2dIUv3I+yOTUNTsKWaKpZELUKKJUahimJCQYwl5s9IdrO90p/gfsY1KjQX4czMeZ9555yzodA2L/EkA7YpUkIiojKA4hCG9wVCRQGFZYksQZEXqtaBKEuyWoYsonZ2QqEAFuQKW4IKAcsrAWD+QiGgdd/oB/3xx57R6+tne/Z2TuCRRIrh4M/206a7AuHbq6v5uPVXiAQja2B29jrIQY6rFs20o30nBitoEykqAnlF3qrek8JG/YP25D2wZeAKMD63jeFQO6kbnU4kuBbwXDhirXGoNZ+NBm/HzUcXDw/Hw65jxz4076sZ/d746Mx4t68dtGrgBmQ3kMTRloEXp94SFJBiegC0eTudZmJ0MhWjY3QiczWRSFh3XgLJ/BvJ/Imk/4O8OGnpD3b1l/XR4EsNFAgkPGsD99wFWOIFpJqw+CZU4pVKJV4iovA3aCF/BzjVqAEzLga/H7d+fG1YMbgFCapAq8SwzMfQFhTLAoqxsugvq9HbHZ2fjrsdE+Fnx8zeLeTuLtqtew6WEaFUsCixSrVMJk1zxYNP+qu2H6q/7mvfGlr3eHT+2N5jBaiqNxE2A3tSMC8ImRmUxPMYR1WiyBsoM0On0gmMs1MC246Tj5MYI26Sf41h52g4lb/u9sNVYMyg1ESBYYqlk1MK1Sm4K0hj08NEMM8wiKOnBJAV0W/+Okr6+JCj57JOHex879Nw3u0DuXW2n+ff9iY26s2Z9yJ/kjsjjnP/gdUx21828At3TXVB"}),a[76]||(a[76]=s("h3",{id:"负载均衡",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#负载均衡"},[s("span",null,"负载均衡")])],-1)),i(o,{code:"eJxdkF1LwlAcxu/7FAdi7EbBCoKtCMqldBEU1U3Di2Ubjo6bnJ1IUSEMX7LShAoLLwy7EAS9qFCzly/jNv0WzU2d7lwcDs/z/M7/hSDioiRiGsRJHOLDPEkDUuLPMeIg6QKkIEvYx4VFGBsZm0g05GSSIBYEKF8EQxzC4JBZAMbZZPVeTm+09Ie6lmsHgNu9Abbi+k9J71W02qX2eZM0c1sjJ6FVX9VMemcvAbysd3/3qN/pDR8r6lVx/QRtLPlPIophG3DAwbw9jRiGZXdFhGR03O/V9PvMIJ/SU92AFWbM0tus1kmrdwXrV73xPGv62GH5b5i97X+VLH/W9LOD9O+g2XKY5kUQQKu21e+i2nzpd69NLQg5RWF4AQS5cORcAYIIIb1IBQWXgpF8xtOLHs/q+O2+EE9xiF6ORNfm2QiSo7ExKlA2umqjp5xi7BtxMXoFrDhwPop5JHFwUlyg7OKUxwrbBPCOe52RGKuFGWXb5XP5pz/P7+C9PszmB60PrVwwNShKZwc4BnmwBOypJ004p7bTy9M0Zacdg/4DcFT7Fg=="}),a[77]||(a[77]=s("h3",{id:"raid磁盘阵列",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#raid磁盘阵列"},[s("span",null,"RAID磁盘阵列")])],-1)),a[78]||(a[78]=s("p",null,"RaidZ2",-1)),i(o,{code:"eJx9kk9PwjAUwO98iiYGp8mWyMaWMAyJ2pB4MWg4STgU1rqGsZGuBAlw0xuGk4lRD3r14N1w8MsIhm9ht2YbQvT18v783p++Np8fUZ9yG4wU7uIuVmygtFCIFRUoJPB5FXWpN4y8J0GfUczAGR4ok0k+nyNeMGi7iHFQhzkgJOy3rhjqueDi6BRql3rD0iANO4nZjKFIHMpwm9PAB/Xj1AkLjb0ILxy2WAUijvabQNMqoFZo1BCjfAhqWQWoS1jfgjPEkIjxD1KUSHET0ZOW52stTQmbW3CGWBKx/kZSpVYAuyIQxceL2XT58rp6m45BtbG8v109Pi/ePxafdzb4ms+XNzP9++lBToJ9JxcrbQ+FIcRELFOsmFDPs3ewRQxC1JCzoIPtHcMolVJTG1CHu7beuy7/zu/Jm8oKhGALW2kFQiwhGwl+wHGCH0Qn6eCgUHwHhoa2CUyZlGWK91WhrkJDhUUVmiq04snXaouVqGIhcp51fzVuWc79ABdhyZs="}),a[79]||(a[79]=p('<h3 id="oss对象存储" tabindex="-1"><a class="header-anchor" href="#oss对象存储"><span>OSS对象存储</span></a></h3><h3 id="http缓存" tabindex="-1"><a class="header-anchor" href="#http缓存"><span>HTTP缓存</span></a></h3><h3 id="redis集群" tabindex="-1"><a class="header-anchor" href="#redis集群"><span>Redis集群</span></a></h3>',3))])}const ss=D(F,[["render",X]]),as=JSON.parse('{"path":"/public-service/cqmu-mirror/maintenance-dev-books/","title":"维护与开发手册","lang":"zh-CN","frontmatter":{"title":"维护与开发手册","createTime":"2025/04/26 21:30:14","permalink":"/public-service/cqmu-mirror/maintenance-dev-books/","icon":"fluent:window-dev-edit-20-regular","description":"这是一篇未完成的文档 本文是面向基于 MirrorZ 项目镜像站的维护与开发手册，帮助新站长快速上手，了解镜像站的基本操作和维护方法。 需求评估 搭建一个镜像站，最基本的问题有如下几个： 评估是否真的需要一个新的镜像 计划镜像的内容清单 适宜的硬件资源 数据同步管理 Web 服务和帮助文档 是否需要新建镜像 Mirroring-Howto 新建镜像一般...","head":[["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"维护与开发手册\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-08-11T06:03:28.000Z\\",\\"author\\":[]}"],["meta",{"property":"og:url","content":"https://docs.pguide.dev/public-service/cqmu-mirror/maintenance-dev-books/"}],["meta",{"property":"og:site_name","content":"PGuide Docs"}],["meta",{"property":"og:title","content":"维护与开发手册"}],["meta",{"property":"og:description","content":"这是一篇未完成的文档 本文是面向基于 MirrorZ 项目镜像站的维护与开发手册，帮助新站长快速上手，了解镜像站的基本操作和维护方法。 需求评估 搭建一个镜像站，最基本的问题有如下几个： 评估是否真的需要一个新的镜像 计划镜像的内容清单 适宜的硬件资源 数据同步管理 Web 服务和帮助文档 是否需要新建镜像 Mirroring-Howto 新建镜像一般..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2025-08-11T06:03:28.000Z"}],["meta",{"property":"article:modified_time","content":"2025-08-11T06:03:28.000Z"}]]},"readingTime":{"minutes":25.46,"words":7639},"git":{"createdTime":1745680786000,"updatedTime":1754892208000,"contributors":[{"name":"rand777gg","username":"rand777gg","email":"losmosga@foxmail.com","commits":6,"avatar":"https://avatars.githubusercontent.com/rand777gg?v=4","url":"https://github.com/rand777gg"}],"changelog":[{"hash":"0286cc943170b1ba0962457abcff8b36bfb69366","time":1754892208000,"email":"rand777@pguide.studio","author":"rand777gg","message":"docs: cancel former icon candy grammar"},{"hash":"bdf2455124b9cff6b5f45134c297e89f5aa70966","time":1754780653000,"email":"rand777@pguide.studio","author":"rand777gg","message":"docs: update all site structure"},{"hash":"45281a57219f7f9097bc1cafbc7f048840b16d79","time":1748005447000,"email":"losmosga@foxmail.com","author":"rand777gg","message":"docs: update SSH connection reference and improve CentOS Stream package mirror configuration"},{"hash":"b5bb529bad415be258a9e65c212d30688698cc56","time":1745714651000,"email":"losmosga@foxmail.com","author":"rand777gg","message":"docs: update maintenance and development manual with additional prerequisites and repository links"},{"hash":"e18dcdd39011a07713e796073a7d287f4490f2fd","time":1745705032000,"email":"losmosga@foxmail.com","author":"rand777gg","message":"docs: enhance documentation with new links and acknowledgments"},{"hash":"6deacee723fb2632dbc4d140ff159121578d4dbf","time":1745680786000,"email":"losmosga@foxmail.com","author":"rand777gg","message":"docs: rename and update documentation files"}]},"autoDesc":true,"filePathRelative":"notes/公共服务/重医校级开源软件镜像站/3.维护与开发手册.md","headers":[]}');export{ss as comp,as as data};
