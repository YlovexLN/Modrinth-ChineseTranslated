// ==UserScript==
// @name         Modrinth-ChineseTranslated
// @namespace    http://tampermonkey.net/
// @version      0.1.8
// @description  一个汉化Modrinth网页的的脚本，将 Modrinth 网站的内容翻译成中文。
// @author       YlovexLN
// @match        https://modrinth.com/*
// @grant        none
// @license      GPL-3.0
// @downloadURL https://update.greasyfork.org/scripts/526366/Modrinth-ChineseTranslated.user.js
// @updateURL https://update.greasyfork.org/scripts/526366/Modrinth-ChineseTranslated.meta.js
// @supportURL https://github.com/YlovexLN/Modrinth-ChineseTranslated/issues
// ==/UserScript==

(function () {
  "use strict";

  // 翻译词典
  const translations = {
    "Discover content": "发现内容",
    "Host a server": "托管服务器",
    "Modrinth App": "Modrinth 应用",
    "New project": "新建项目",
    "New collection": "新建收藏夹",
    "New organization": "新建组织",
    "The place for Minecraft mods plugins data packs shaders resource packs modpacks":
      "Minecraft 模组、插件、数据包、光影包、资源包和模组包的家园",
    Mods: "模组",
    mods: "模组",
    Plugins: "插件",
    plugins: "插件",
    "Data Packs": "数据包",
    "data packs": "数据包",
    Shaders: "光影包",
    shaders: "光影包",
    "resource packs": "资源包",
    "Resource Packs": "资源包",
    Modpacks: "模组包",
    modpacks: "模组包",
    Servers: "服务器",
    servers: "服务器",
    "Upgrade to Modrinth+": "升级到 Modrinth+",
    "Saved projects": "保存的项目",
    "My servers": "我的服务器",
    Notifications: "通知",
    Revenue: "收入",
    Analytics: "分析",
    "Sign out": "登出",
    "Discover, play, and share Minecraft content through our open-source platform built for the community.":
      "通过我们为社区打造的开源平台发现、游玩和分享 Minecraft 内容。",
    "Discover mods": "发现模组",
    "Go to dashboard": "前往仪表盘",
    "For Players": "面向玩家",
    "Discover over 50,000 creations": "发现超过 50,000 个创作",
    "From magical biomes to cursed dungeons, you can be sure to find content to bring your gameplay to the next level.":
      "从魔法生物群系到诅咒的地牢，你肯定能找到能提升游戏体验的内容。",
    "Find what you want, quickly and easily": "快速轻松地找到你想找的内容",
    "Modrinth's lightning-fast search and powerful filters let you find what you want as you type.":
      "Modrinth 的超快搜索和强大的筛选功能让你在输入时就能找到想要的内容。",
    "Sort by": "排序",
    Relevance: "相关性",
    Downloads: "下载量",
    Follows: "关注数",
    Updated: "更新时间",
    Newest: "最新",
    "Follow projects you love": "关注你喜欢的项目",
    "Get notified every time your favorite projects update and stay in the loop":
      "每次你关注的项目更新时都会收到通知，不错过任何动态",
    "Give an online home to your creations and reach a massive audience of dedicated players":
      "为你创作的内容提供在线家园，并触及大量忠实玩家",
    "Play with your favorite launcher": "使用你喜爱的启动器游玩",
    "Modrinth's open-source API lets launchers add deep integration with Modrinth. You can use Modrinth through":
      "Modrinth 的开源 API 让启动器能够深度集成 Modrinth。你可以通过",
    "our own app": "我们自己的应用程序",
    "and some of the most popular launchers like ATLauncher, MultiMC, and Prism Launcher.":
      "和一些最受欢迎的启动器(如 ATLauncher、MultiMC 和 Prism Launcher)使用 Modrinth。",
    "For Creators": "创作者专区",
    "Share your content with the world": "与世界分享你的内容",
    "Give an online home to your creations and reach a massive audience of dedicated players":
      "为你创作的内容提供在线家园，并触及大量忠实玩家",
    Discovery: "发现",
    "Get your project discovered by thousands of users through search, our home page, Discord server, and more ways to come in the future!":
      "通过搜索、我们的首页、Discord 服务器以及未来更多方式，让你的项目被成千上万的用户发现！",
    "Team Management": "团队管理",
    "Invite your teammates and manage roles and permissions with ease":
      "轻松邀请队友并管理角色和权限",
    Monetization: " 收益",
    "Get paid ad revenue from your project pages and withdraw your funds at any time":
      "从你的项目页面获得广告收入，并随时提现",
    "Diverse Ecosystem": "多样化的生态系统",
    "Integrate with your build tools through Minotaur for automatic uploads right when you release a new version":
      "通过 Minotaur 与构建工具集成，实现在发布新版本时自动上传",
    "Data and Statistics": "数据和统计",
    "Get detailed reports on page views, download counts, and revenue":
      "获取详细的页面浏览量、下载次数和收入报告",
    "Constantly Evolving": "不断进化",
    "Get the best modding experience possible with constant updates from the Modrinth team":
      "通过 Modrinth 团队的持续更新，获得最佳的模组制作体验",
    "Read more about": "了解更多关于",
    "Visit the blog": "访问博客",
    "Modrinth is": "Modrinth 是",
    "open source": "开源的",
    ".": "。",
    Company: "公司",
    Terms: "条款",
    Privacy: "隐私",
    Rules: "规则",
    Careers: "职位",
    Resources: "资源",
    Support: "支持",
    About: "关于",
    Blog: "博客",
    Docs: "文档",
    Status: "状态",
    "Rewards Program": "奖励计划",
    Products: "产品",
    "Modrinth Servers": "Modrinth 服务器",
    "Help Center": "帮助中心",
    Translate: "翻译",
    "Report issues": "报告问题",
    "API documentation": "API 文档",
    Legal: "法律",
    "Content Rules": "内容规则",
    "Terms of Use": "使用条款",
    "Security Notice": "安全声明",
    Interact: "互动",
    "X (Twitter)": "X (推特)",
    "Get Modrinth App": "获取 Modrinth 应用",
    "Sign in": "登录",
    "Sign up": "注册",
    "Sign in with": "使用以下方式登录",
    "Or use a password": "或使用密码",
    "Create an account": "创建账户",
    "Enter two-factor code": "输入两步验证码",
    "Please enter a two-factor code to proceed.": "请输入两步验证码以继续。",
    "Change theme": "更改主题",
    "NOT AN OFFICIAL MINECRAFT SERVICE. NOT APPROVED BY OR ASSOCIATED WITH MOJANG OR MICROSOFT.":
      "这不是官方的 Minecraft 服务。未经 Mojang 或 Microsoft 批准或关联。",
    "Join the conversation": "加入讨论",
    "Loading...": "加载中...",
    "No results found": "未找到结果",
    Home: "首页",
    Login: "登录",
    Register: "注册",
    Profile: "个人资料",
    Settings: "设置",
    Logout: "登出",
    Dashboard: "仪表盘",
    "My Projects": "我的项目",
    "My Organizations": "我的组织",
    "My Collections": "我的收藏夹",
    "Create Project": "创建项目",
    "Create Collection": "创建收藏夹",
    "Create Organization": "创建组织",
    "Latest News": "最新新闻",
    Featured: "精选",
    "Support us": "支持我们",
    "Help & Support": "帮助和支持",
    Documentation: "文档",
    "Terms of Service": "服务条款",
    "Privacy Policy": "隐私政策",
    Categories: "分类",
    Trending: "趋势",
    "Featured Packs": "精选包",
    "Recent Activity": "最近活动",
    Community: "社区",
    Popular: "流行",
    "Search results for": "搜索结果",
    Submit: "提交",
    Apply: "应用",
    Cancel: "取消",
    Username: "用户名",
    Password: "密码",
    "Confirm Password": "确认密码",
    "Submit your mod": "提交你的模组",
    "Edit Project": "编辑项目",
    "Delete Project": "删除项目",
    "Project Settings": "项目设置",
    "Manage Organization": "管理组织",
    "Your Projects": "你的项目",
    "Your Collections": "你的收藏夹",
    "Your Organizations": "你的组织",
    "Add New Mod": "添加新模组",
    "Add New Collection": "添加新收藏夹",
    "Add New Organization": "添加新组织",
    "Minecraft Version": "Minecraft 版本",
    "Game Version": "游戏版本",
    "Choose File": "选择文件",
    Upload: "上传",
    Download: "下载",
    "Install Instructions": "安装说明",
    "Change Log": "更新日志",
    "Report an Issue": "报告问题",
    "View Project": "查看项目",
    "Version History": "版本历史",
    "Modrinth API": "Modrinth API",
    "About Us": "关于我们",
    Contact: "联系方式",
    Support: "支持",
    "API Documentation": "API 文档",
    "Privacy Settings": "隐私设置",
    "Invite a member": "邀请成员",
    "Manage Members": "管理成员",
    "Organization Settings": "组织设置",
    "Request Access": "请求访问",
    "Create New Project": "创建新项目",
    "Project Version": "项目版本",
    Resources: "资源",
    "Installation Instructions": "安装说明",
    "Review and Ratings": "评论与评分",
    "View Comments": "查看评论",
    "Add Comment": "添加评论",
    "Add Review": "添加评分",
    Approve: "批准",
    Reject: "拒绝",
    Draft: "草稿",
    Publish: "发布",
    Published: "已发布",
    Unpublished: "未发布",
    Starred: "收藏",
    Favorites: "收藏夹",
    "User Reviews": "用户评论",
    Developer: "开发者",
    Owner: "所有者",
    "Created by": "创建者",
    "Version Notes": "版本说明",
    "Mods and Add-ons": "模组和附加组件",
    Contribute: "贡献",
    Donate: "捐赠",
    "Download Now": "立即下载",
    "Latest Release": "最新版本",
    "Upcoming Updates": "即将更新",
    "Install Now": "立即安装",
    Required: "必需",
    Optional: "可选",
    "Add to Favorites": "加入收藏夹",
    "View Details": "查看详情",
    "Related Projects": "相关项目",
    "Related Mods": "相关模组",
    "View All": "查看所有",
    New: "新建",
    Version: "版本",
    "Link to this page": "链接到此页面",
    "Copy Link": "复制链接",
    Share: "分享",
    "View More": "查看更多",
    Back: "返回",
    "Go Back": "返回",
    Continue: "继续",
    Next: "下一步",
    Previous: "上一页",
    "Cancel Subscription": "取消订阅",
    "Manage Subscription": "管理订阅",
    "Subscribe Now": "立即订阅",
    "Notifications Settings": "通知设置",
    Activate: "激活",
    Deactivate: "停用",
    "Terms and Conditions": "条款与条件",
    "Cookies Policy": "Cookies 政策",
    "Privacy Preferences": "隐私偏好设置",
    "User Agreement": "用户协议",
    "Sign In": "登录",
    "Sign Up": "注册",
    "Forgot Password?": "忘记密码？",
    "Reset Password": "重置密码",
    "Change Email": "更改邮箱",
    "Change Username": "更改用户名",
    "Update Profile": "更新个人资料",
    "Account Settings": "账户设置",
    "Security Settings": "安全设置",
    "Two-factor Authentication": "两步验证",
    "Security Questions": "安全问题",
    "Session Expired": "会话过期",
    "Account Suspended": "账户被暂停",
    "Subscription Expired": "订阅已过期",
    "Confirm Email Address": "确认电子邮件地址",
    "Email Verified": "邮箱已验证",
    Error: "错误",
    Success: "成功",
    Warning: "警告",
    Information: "信息",
    Confirmation: "确认",
    "Action Required": "需要操作",
    Retry: "重试",
    Save: "保存",
    Edit: "编辑",
    Delete: "删除",
    Close: "关闭",
    Description: "描述",
    Tags: "标签",
    Comments: "评论",
    Reviews: "评价",
    Rating: "评分",
    Stars: "星标",
    Members: "成员",
    Projects: "项目",
    Collections: "收藏夹",
    Organizations: "组织",
    Followers: "关注者",
    Following: "正在关注",
    Follow: "关注",
    Unfollow: "取消关注",
    Joined: "加入日期",
    "Last Updated": "最后更新",
    License: "许可证",
    Permissions: "权限",
    Collaborators: "协作者",
    Admin: "管理员",
    Moderator: "版主",
    Member: "成员",
    Guest: "访客",
    Public: "公开",
    Private: "私有",
    Team: "团队",
    Role: "角色",
    Actions: "操作",
    Select: "选择",
    Filter: "筛选",
    Clear: "清除",
    All: "全部",
    Active: "活跃",
    Inactive: "不活跃",
    Online: "在线",
    Offline: "离线",
    Verified: "已验证",
    Pending: "待处理",
    Rejected: "已拒绝",
    Approved: "已批准",
    Blocked: "已阻止",
    Banned: "已封禁",
    Suspended: "已暂停",
    Disabled: "已禁用",
    Enabled: "已启用",
    Visible: "可见",
    Hidden: "隐藏",
    Open: "打开",
    Closed: "关闭",
    Locked: "锁定",
    Unlocked: "解锁",
    Allowed: "允许",
    Forbidden: "禁止",
    Granted: "授予",
    Revoked: "撤销",
    Assigned: "分配",
    Unassigned: "未分配",
    Available: "可用",
    Unavailable: "不可用",
    Installed: "已安装",
    "Not Installed": "未安装",
    Compatible: "兼容",
    Incompatible: "不兼容",
    Supported: "支持",
    Unsupported: "不支持",
    "Required Files": "必需文件",
    "Recommended Files": "推荐文件",
    "Optional Files": "可选文件",
    Dependencies: "依赖项",
    Conflict: "冲突",
    Changelog: "更新日志",
    "Read more": "阅读更多",
    "See all": "查看全部",
    "Load more": "加载更多",
    //Mods页面补全
    "75% of ad revenue goes to creators": "75% 的广告收入归创作者所有",
    "Support creators and Modrinth ad-free with":
      "通过 Modrinth+ 无广告地支持创作者和",
    "Game version": "游戏版本",
    "Search...": "搜索...",
    "Show all versions": "显示所有版本",
    Loader: "加载器",
    "Show more": "显示更多",
    Adventure: "冒险",
    Cursed: "诅咒",
    Decoration: "装饰",
    Economy: "经济",
    Equipment: "装备",
    Food: "食物",
    "Game Mechanics": "游戏机制",
    Library: "库",
    Magic: "魔法",
    Management: "管理",
    Minigame: "小游戏",
    Mobs: "生物",
    Optimization: "优化",
    Social: "社交",
    Storage: "存储",
    Technology: "科技",
    Transportation: "运输",
    Utility: "实用工具",
    "World Generation": "世界生成",
    Environment: "环境",
    Client: "客户端",
    Server: "服务端",
    "Open source": "开源",

    // 遍历页面内容并替换为翻译
  };

  // 遍历页面内容并替换为翻译
  const translateText = (node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const originalText = node.textContent.trim();
      if (translations[originalText]) {
        node.textContent = translations[originalText];
      }
    } else {
      for (let child of node.childNodes) {
        translateText(child);
      }
    }
  };

  // 页面加载后开始翻译
  const observer = new MutationObserver(() => {
    translateText(document.body);
  });

  observer.observe(document.body, {
    childList: true,
    subtree: true,
  });

  // 初次加载时立即翻译
  translateText(document.body);
})();
