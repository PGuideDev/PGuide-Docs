---
title: VPN服务
createTime: 2025/03/17 04:45:21
permalink: /backend-manage/vpb-service/
icon: /icon/vpn.svg
tags: 
  - 网络安全
  - VPN
  - WireGuard
  - 密钥交换
---

基于WireGuard的VPN服务，接管项导服务，实现安全访问。WireGuard支持预共享对称密钥（英语：Pre-shared key）模式，该模式提供了一层额外的对称加密，以减轻未来量子计算的进步带来的风险。这消除了流量被存储后，未来可能被量子计算机解密的风险，因为量子计算机最终可能破解Curve25519（Wireguard中必选的基于非对称密钥的密钥交换方法）。预共享密钥“从密钥管理的角度来看通常很麻烦，而且可能更容易被盗”，但在短期内，如果对称密钥被泄露，Curve25519密钥仍能提供足够的保护。