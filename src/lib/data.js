export const site = {
  name: '涂炎钊',
  tagline: '技术是手段，认知是壁垒，不可替代的是品味。',
  github: 'TuTroy',
  email: '1139***258@qq.com',
};

export const about = {
  blocks: [
    {
      label: '我从哪来',
      text: '数据分析出身，4 年+经验。从写 SQL 到搭数仓，从手动出报表到自动化分析，踩过的坑比代码注释还多。',
    },
    {
      label: '我现在在干嘛',
      text: '最近两年把大模型的路走了一遍：Prompt 工程 → RAG 检索 → Agent 编排。正在从数据分析师转型 AI 应用工程师。',
    },
    {
      label: '我信什么',
      text: '好用的工具 + 清晰的逻辑 > 炫酷的框架。技术是手段，不是目的。让机器替我干活这件事，值得一直研究下去。',
    },
  ],
};

export const projects = [
  {
    slug: 'incident-ticket-analysis',
    title: '运维事件工单分析系统',
    category: '运维',
    problem: '运维团队每天处理上百条事件工单，缺乏数据驱动的优先级判断和根因分析',
    solution: '接入工单系统数据，构建分析 pipeline，从工单分类、趋势预测、处理时效三个维度提供数据洞察',
    result: '工单平均处理时长缩短 35%，重复事件识别准确率 92%',
    reportUrl: '/reports/eda-report.html',
    stack: ['Python', 'Pandas', 'ECharts', 'FastAPI', 'MySQL'],
    charts: [
      {
        id: 'ticket-category',
        title: '工单分类分布',
        height: '360px',
        option: {
          tooltip: { trigger: 'item' },
          legend: { bottom: 0, textStyle: { color: '#787774' } },
          series: [{
            type: 'pie',
            radius: ['45%', '75%'],
            center: ['50%', '48%'],
            itemStyle: { borderRadius: 4, borderColor: '#F7F5F0', borderWidth: 3 },
            label: { show: false },
            emphasis: { label: { show: true, fontSize: 14, fontWeight: 'bold' } },
            data: [
              { value: 245, name: '服务请求' },
              { value: 178, name: '故障告警' },
              { value: 112, name: '变更申请' },
              { value: 89, name: '安全事件' },
              { value: 56, name: '性能问题' },
            ],
          }],
          color: ['#2C5282', '#4A7BB5', '#7BA3CC', '#A5C4E0', '#C5D9EE'],
        },
      },
      {
        id: 'ticket-trend',
        title: '月度工单趋势',
        height: '360px',
        option: {
          tooltip: { trigger: 'axis' },
          grid: { left: 40, right: 16, top: 20, bottom: 24 },
          xAxis: {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月'],
            axisLine: { lineStyle: { color: '#e0e0e0' } },
            axisLabel: { color: '#A5A39E', fontSize: 11 },
          },
          yAxis: {
            type: 'value',
            splitLine: { lineStyle: { color: 'rgba(0,0,0,0.05)' } },
            axisLabel: { color: '#A5A39E', fontSize: 11 },
          },
          series: [
            {
              name: '故障类',
              type: 'line',
              data: [65, 72, 58, 81, 90, 78],
              smooth: true,
              symbol: 'circle', symbolSize: 6,
              lineStyle: { width: 2.5 },
              areaStyle: { opacity: 0.06 },
            },
            {
              name: '服务类',
              type: 'line',
              data: [42, 48, 55, 52, 68, 72],
              smooth: true,
              symbol: 'circle', symbolSize: 6,
              lineStyle: { width: 2.5 },
              areaStyle: { opacity: 0.06 },
            },
          ],
          color: ['#8B7355', '#2C5282'],
        },
      },
      {
        id: 'ticket-resolution',
        title: '各优先级平均处理时长 (小时)',
        height: '320px',
        option: {
          tooltip: { trigger: 'axis' },
          grid: { left: 36, right: 16, top: 16, bottom: 24 },
          xAxis: {
            type: 'category',
            data: ['P0-紧急', 'P1-高', 'P2-中', 'P3-低'],
            axisLabel: { color: '#A5A39E', fontSize: 11 },
          },
          yAxis: {
            type: 'value',
            name: '小时',
            splitLine: { lineStyle: { color: 'rgba(0,0,0,0.05)' } },
            axisLabel: { color: '#A5A39E', fontSize: 11 },
          },
          series: [{
            type: 'bar',
            data: [1.2, 4.5, 12.8, 28.6],
            itemStyle: { borderRadius: [4, 4, 0, 0] },
            barWidth: '40%',
            label: { show: true, position: 'top', color: '#787774', fontSize: 11 },
          }],
          color: ['#2C5282'],
        },
      },
    ],
  },
  {
    slug: 'ops-monitor',
    title: '运维监控可视化看板',
    category: '运维',
    problem: '多套系统各自监控，告警信息分散在 Slack/邮件/短信，值班人员需要切换多个平台查看',
    solution: '统一采集服务器、应用、网络指标，构建集中式监控看板，支持实时告警和趋势分析',
    result: '告警响应时间从 15min 降至 3min，故障定位效率提升 50%',
    stack: ['Prometheus', 'Grafana', 'ECharts', 'Python', 'InfluxDB'],
    charts: [
      {
        id: 'health-gauge',
        title: '系统健康度',
        height: '300px',
        option: {
          series: [
            {
              type: 'gauge',
              center: ['25%', '55%'],
              radius: '80%',
              startAngle: 210, endAngle: -30,
              min: 0, max: 100,
              axisLine: { lineStyle: { width: 12, color: [[0.7, '#8B7355'], [0.85, '#B8A088'], [1, '#346538']] } },
              pointer: { length: '60%', width: 5, itemStyle: { color: '#1A1A19' } },
              detail: { fontSize: 28, fontFamily: 'Inter Tight', offsetCenter: [0, '70%'], color: '#1A1A19' },
              title: { offsetCenter: [0, '95%'], fontSize: 12, color: '#787774' },
              data: [{ value: 94.2, name: '服务可用率' }],
            },
            {
              type: 'gauge',
              center: ['75%', '55%'],
              radius: '80%',
              startAngle: 210, endAngle: -30,
              min: 0, max: 100,
              axisLine: { lineStyle: { width: 12, color: [[0.7, '#8B7355'], [0.85, '#B8A088'], [1, '#346538']] } },
              pointer: { length: '60%', width: 5, itemStyle: { color: '#1A1A19' } },
              detail: { fontSize: 28, fontFamily: 'Inter Tight', offsetCenter: [0, '70%'], color: '#1A1A19' },
              title: { offsetCenter: [0, '95%'], fontSize: 12, color: '#787774' },
              data: [{ value: 87.5, name: '告警准确率' }],
            },
          ],
        },
      },
      {
        id: 'resource-usage',
        title: '资源使用趋势（24h）',
        height: '340px',
        option: {
          tooltip: { trigger: 'axis' },
          legend: {
            data: ['CPU', '内存', '磁盘IO'],
            bottom: 0,
            textStyle: { color: '#787774', fontSize: 11 },
          },
          grid: { left: 40, right: 16, top: 16, bottom: 36 },
          xAxis: {
            type: 'category',
            data: ['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '24:00'],
            axisLabel: { color: '#A5A39E', fontSize: 11 },
            boundaryGap: false,
          },
          yAxis: {
            type: 'value',
            name: '%',
            max: 100,
            splitLine: { lineStyle: { color: 'rgba(0,0,0,0.05)' } },
            axisLabel: { color: '#A5A39E', fontSize: 11 },
          },
          series: [
            {
              name: 'CPU', type: 'line',
              data: [22, 18, 15, 45, 72, 58, 35],
              smooth: true, symbol: 'circle', symbolSize: 5,
              lineStyle: { width: 2.5 },
              areaStyle: { opacity: 0.06 },
            },
            {
              name: '内存', type: 'line',
              data: [55, 52, 50, 62, 78, 72, 60],
              smooth: true, symbol: 'circle', symbolSize: 5,
              lineStyle: { width: 2.5 },
              areaStyle: { opacity: 0.06 },
            },
            {
              name: '磁盘IO', type: 'line',
              data: [12, 10, 8, 30, 48, 42, 28],
              smooth: true, symbol: 'circle', symbolSize: 5,
              lineStyle: { width: 2.5 },
              areaStyle: { opacity: 0.06 },
            },
          ],
          color: ['#2C5282', '#346538', '#8B7355'],
        },
      },
      {
        id: 'alert-distribution',
        title: '告警分布（近7天）',
        height: '320px',
        option: {
          tooltip: { trigger: 'axis' },
          grid: { left: 36, right: 16, top: 16, bottom: 24 },
          xAxis: {
            type: 'category',
            data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
            axisLabel: { color: '#A5A39E', fontSize: 11 },
          },
          yAxis: {
            type: 'value',
            splitLine: { lineStyle: { color: 'rgba(0,0,0,0.05)' } },
            axisLabel: { color: '#A5A39E', fontSize: 11 },
          },
          series: [
            {
              name: '严重', type: 'bar',
              stack: 'total',
              data: [3, 5, 2, 8, 4, 1, 0],
              itemStyle: { color: '#8B7355', borderRadius: 0 },
              barWidth: '50%',
            },
            {
              name: '警告', type: 'bar',
              stack: 'total',
              data: [12, 18, 15, 22, 16, 8, 5],
              itemStyle: { color: '#B8A088' },
            },
            {
              name: '信息', type: 'bar',
              stack: 'total',
              data: [35, 42, 38, 45, 40, 22, 15],
              itemStyle: { color: '#4A7BB5', borderRadius: [4, 4, 0, 0] },
            },
          ],
        },
      },
    ],
  },
  {
    slug: 'place-exploration',
    title: 'Place Soul Explorer · 城市灵魂探索器',
    category: 'AI 应用',
    problem: '传统旅行规划工具只告诉你"去哪打卡"，无法回答"这座城市真正的气质是什么"——政府数据、POI 地理分布、社交媒体口碑散落各处，人工三角验证耗时且碎片化',
    solution: '设计三段式探索方法论（官方叙事 × 地面真相 × 个人视角），构建 pipeline 架构而非 Agent 循环，通过摘要层将 ~20K token 原始数据压缩为结构化摘要后再做分析，消除长上下文信息丢失问题',
    result: '单次城市探索仅需 3 次 LLM 调用，成本 ~$0.07-0.14，产出有深度的城市气质画像和个性化行程',
    stack: ['Python', 'DeepSeek API', '高德 Web API', 'SQLite', 'BeautifulSoup', 'SvelteKit'],
    inProgress: true,
    cityAnalysis: {
      city: '深圳',
      oneLiner: '一座被"搞钱"误读最深的城市。',
      heroStats: [
        { label: 'GDP', value: '3.68万亿', note: '全国第三' },
        { label: '常住人口', value: '1,800万+', note: '实际管理超2000万' },
        { label: '平均年龄', value: '32.5岁', note: '最年轻一线城市' },
        { label: '公园数量', value: '1,290+', note: '全国第一' },
      ],
      sections: [
        {
          id: 'industry',
          title: '产业结构：电子信息一家独大',
          intro: '不是笼统的"高科技城市"。拆开看，深圳的产业结构高度集中——计算机通信电子一个行业占规上工业超六成，新能源汽车增速最快但企业最少。',
          table: {
            headers: ['行业', '2024增速', '占比/规模', '特征'],
            rows: [
              ['计算机、通信、电子', '+11.0%', '占规上工业超60%', '绝对支柱，但集中度过高'],
              ['汽车制造（新能源）', '+54.9%', '48家规上企业', '比亚迪一家拉动了坪山'],
              ['信息传输、软件、IT', '+8.0%', '增加值4,689亿', '服务业第一，腾讯生态主导'],
              ['金融业', '+4.2%', '增加值4,710亿', '福田占全市44.8%'],
              ['电气机械', '−1.4%', '传统强项', '在收缩，产能外迁中'],
            ],
          },
          insight: '战略性新兴产业增加值占GDP的42.3%，已接近半壁江山。但拆到更细：新一代信息技术占战新企业的59%，生物技术仅9.7%，新能源汽车只有48家企业。深圳的"新"，目前主要还是"电子信息的各种新玩法"。',
        },
        {
          id: 'geography',
          title: '公司都在哪：一核多极',
          intro: '深圳不是一个均质的科技城市。南山写代码，福田管钱，宝安造东西，龙岗搞通信，坪山造车。各区的产业差异比很多省份内部差异还大。',
          districts: [
            { name: '南山区', gdp: '~9,000亿', companies: ['腾讯', '大疆', '中兴', '迈瑞', '传音'], note: '144家A股上市公司。2025年成为全国首个万亿城区。研发投入强度7.87%，全国平均近3倍。' },
            { name: '福田区', gdp: '5,949亿', companies: ['深交所', '平安', '招商银行'], note: '55家上市公司。金融业增加值占全市44.8%。深圳的钱都在这里。' },
            { name: '龙岗区', gdp: '5,901亿', companies: ['华为'], note: '二产占比64%。三大千亿集群：网络通信、智能终端、超高清视频。华为在坂田。' },
            { name: '宝安区', gdp: '5,300亿', companies: [], note: '5,525家规上工业企业，工业总产值破万亿。数字创意已是千亿集群。制造业底盘最厚。' },
            { name: '坪山区', gdp: '规模较小', companies: ['比亚迪（267万㎡园区）'], note: '比亚迪一家定义了坪山的产业结构。新能源汽车产能和供应链集中于此。' },
          ],
          highlight: {
            title: '粤海街道',
            stats: [
              { label: '面积', value: '20km²' },
              { label: '上市公司', value: '103家' },
              { label: 'GDP', value: '~4,500亿' },
              { label: '国高企业', value: '2,093家' },
              { label: '密度', value: '7家/km²' },
            ],
            note: '用全市0.7%的土地产出约12%的GDP。一个街道的经济体量超过大多数地级市。',
          },
        },
        {
          id: 'hidden-data',
          title: '不容易看到的数据',
          items: [
            {
              title: 'PCT国际专利申请16,347件，但创新极度集中',
              body: '深圳有效发明专利35.87万件（+19.4%），PCT连续多年全国第一。但南山区研发投入强度7.87%——南山之外断崖式下降。深圳的"创新"地图不是一片红，而是一个亮点加一大片浅色。',
            },
            {
              title: '住房商品化率仅17%，全国一线城市最低',
              body: 'GDP全国第三，但住房自有率仅23%。超过1,000万人住在城中村，深圳是用17%的商品房+48%的非正规住房+大量城中村，撑起了一座3.68万亿GDP的城市。产值极高，但创造产值的人住得极差。',
            },
            {
              title: '人均GDP 20.57万 vs 人均可支配收入 8.11万',
              body: '差距超2.5倍。大量财富以企业利润、政府税收、资产增值的形式存在，而不是工资。深圳是一座"产值高但工资相对不高"的城市。',
            },
            {
              title: '工业总产值破5.5万亿，60%是电子信息',
              body: '2025年深圳规上工业总产值突破5.5万亿元，稳居全国第一。但计算机通信电子一个行业占超六成。这意味着——电子信息出问题，深圳经济增速会断崖式下跌。',
            },
            {
              title: '比亚迪一辆车拉动了整个坪山',
              body: '汽车制造增加值增长54.9%，但规上新能源汽车企业只有48家。深圳的新能源汽车故事，目前就是比亚迪的故事。对比：合肥有蔚来+大众+比亚迪+长安，产业链更分散。',
            },
          ],
        },
        {
          id: 'contradictions',
          title: '三组矛盾',
          items: [
            {
              theme: '效率 vs 居住',
              official: '"社会主义先行示范区"',
              reality: '60%的人住城中村，住房自有率23%，人均居住面积低于全国平均。',
            },
            {
              theme: '创新 vs 集中',
              official: '"全球科技创新策源地"',
              reality: '60%工业产值靠电子信息一个行业，比亚迪一家定义新能源汽车赛道。创新高度集中意味着风险也高度集中。',
            },
            {
              theme: '高产值 vs 低工资感',
              official: '人均GDP 20.57万元',
              reality: '人均可支配收入仅8.11万元，差距2.5倍。财富留在公司和资产里，不在工资条上。',
            },
          ],
        },
      ],
      dataSources: [
        '深圳市2024年国民经济和社会发展统计公报',
        '深圳市第五次全国经济普查公报',
        '深圳各区2024年统计公报',
        '新世纪评级-深圳各区经济财政实力研究(2025)',
        '赛迪2025中国活力街道研究',
        '高德状元榜·景点(2025)',
      ],
    },
  },
  {
    slug: 'capital-cloud-map',
    title: '资金云图 · A股资金流向可视化',
    category: '数据可视化',
    problem: '个人投资者追踪A股市场，缺乏一目了然的方式看清"钱在往哪流"——现有工具要么只展示价格表格，要么需要逐个翻票，无法从行业全局快速下钻到个股',
    solution: '基于腾讯行情 API 自动拉取 ~5000 只 A 股数据，按申万三级行业分类，构建 6 维指标体系（成交额/涨跌幅/市值变动/流通市值变动/市场份额/换手率），通过 ECharts treemap 实现矩形树图交互——面积编码资金热度，颜色编码涨跌方向',
    result: '支持三级行业下钻至个股、多维度筛选（板块/沪深300/中证500）、历史数据回溯、K线弹窗，60+ pytest 测试通过，CI/CD 自动部署至生产服务器',
    stack: ['Python', 'Flask', 'ECharts', 'SQLite', 'pandas', 'GitHub Actions'],
    charts: [
      {
        id: 'industry-turnover-treemap',
        title: '行业资金流向（矩形树图示意）',
        height: '400px',
        option: {
          tooltip: {
            trigger: 'item',
            formatter: '{b}: 成交额 {c} 亿, 涨跌幅 {d}%',
          },
          series: [{
            type: 'treemap',
            roam: false,
            nodeClick: 'link',
            breadcrumb: { show: true, height: 28 },
            label: { show: true, fontSize: 12, fontWeight: 'bold' },
            levels: [
              { colorMappingBy: 'value', itemStyle: { gapWidth: 3 } },
            ],
            data: [
              { name: '电子', value: 856, change: 3.2, children: [
                { name: '半导体', value: 420, change: 4.1 },
                { name: '元器件', value: 280, change: 2.8 },
              ]},
              { name: '医药生物', value: 612, change: -1.5, children: [
                { name: '化学制药', value: 310, change: -0.8 },
                { name: '生物制品', value: 180, change: -2.3 },
              ]},
              { name: '电力设备', value: 548, change: 1.8 },
              { name: '计算机', value: 435, change: 5.6 },
              { name: '食品饮料', value: 398, change: -2.1 },
              { name: '银行', value: 342, change: -0.3 },
            ],
            color: ['#346538', '#B8A088', '#F7F5F0', '#A5C4E0', '#4A7BB5', '#2C5282'],
          }],
        },
      },
      {
        id: 'sector-turnover-bar',
        title: '各板块资金净流入 TOP10（近5日）',
        height: '360px',
        option: {
          tooltip: { trigger: 'axis' },
          grid: { left: 100, right: 16, top: 16, bottom: 24 },
          xAxis: {
            type: 'value',
            name: '亿元',
            splitLine: { lineStyle: { color: 'rgba(0,0,0,0.05)' } },
            axisLabel: { color: '#A5A39E', fontSize: 11 },
          },
          yAxis: {
            type: 'category',
            inverse: true,
            data: ['半导体', '软件开发', '通信设备', '消费电子', '汽车零部件', '光伏设备', '电池', '自动化设备', '军工电子', '化学制药'],
            axisLabel: { color: '#2D2D2B', fontSize: 11 },
          },
          series: [{
            type: 'bar',
            data: [45.2, 38.6, 32.1, 28.4, 24.3, -5.2, -8.7, -12.3, -15.8, -20.1],
            itemStyle: { borderRadius: [0, 4, 4, 0] },
            barWidth: '55%',
            label: { show: true, position: 'right', color: '#787774', fontSize: 11 },
          }],
          color: ['#2C5282'],
        },
      },
    ],
  },
  {
    slug: 'data-viz-inspiration',
    title: '数据分析灵感库',
    category: '品味收藏',
    problem: '做数据可视化和分析项目时，经常需要找灵感——怎么配色、怎么选图、怎么叙事。但好的参考源分散各处，每次重新搜索效率低，且容易陷入 Pinterest 式的"好看但学不到东西"的收藏夹。',
    solution: '从全球顶级数据可视化社区、新闻媒体、独立艺术家工作室中，精选 15 个持续输出高质量作品的网站。按叙事/可视化/代码/设计分类，每个站点标注了核心价值和学习方向。',
    result: '15 个精选参考源，覆盖从入门教程到专业标杆。每个都能直接打开，常看常新，提升品味。',
    stack: ['D3.js', 'ECharts', 'SQL', 'Python', 'R'],
    references: true,
  },
  {
    slug: 'ai-full-chain',
    title: 'AI 全产业链研究',
    category: '行业研究',
    problem: '',
    solution: '',
    result: '',
    stack: [],
    inProgress: true,
  },
];

export const references = [
  {
    name: 'The Pudding',
    url: 'https://pudding.cool',
    desc: '用数据讲故事的标杆。每篇文章都是一次可视化实验，排版、交互、叙事节奏堪称教科书级，大量使用 D3.js + 自定义动画。',
    tags: ['可视化', '叙事', 'D3.js'],
  },
  {
    name: 'ObservableHQ',
    url: 'https://observablehq.com',
    desc: 'D3.js 作者 Mike Bostock 创办的交互式可视化平台。海量公开项目可 fork 学习，支持实时协作，是数据可视化社区的核心。',
    tags: ['可视化', '社区', 'D3.js'],
  },
  {
    name: 'Information is Beautiful',
    url: 'https://informationisbeautiful.net',
    desc: '信息图设计全球标杆。用视觉语言翻译复杂数据，色彩、构图、信息密度都值得反复琢磨。',
    tags: ['信息图', '设计', '数据新闻'],
  },
  {
    name: 'FiveThirtyEight',
    url: 'https://fivethirtyeight.com',
    desc: 'Nate Silver 创办的数据新闻网站。图表风格克制，但信息密度极高，配色系统统一，是做分析型图表的好参考。',
    tags: ['数据新闻', '统计分析', '图表'],
  },
  {
    name: 'Shirley Wu',
    url: 'https://shirleywu.studio',
    desc: '数据可视化艺术家。她的作品模糊了数据与艺术的边界，擅长用 D3.js + WebGL 做实验性交互作品。',
    tags: ['可视化', '创意', 'D3.js'],
  },
  {
    name: 'Nadieh Bremer',
    url: 'https://www.visualcinnamon.com',
    desc: '前天文学家转型数据艺术家。每个项目都有详细的创作过程记录，从数据处理到视觉编码，是学习可视化全流程的好素材。',
    tags: ['可视化', '全流程', '创意'],
  },
  {
    name: 'The New York Times Graphics',
    url: 'https://www.nytimes.com/section/upshot',
    desc: 'NYT 数据可视化团队（The Upshot），新闻可视化的天花板。每年有数百个项目，涵盖选举、经济、气候等领域。',
    tags: ['数据新闻', '叙事', '专业'],
  },
  {
    name: 'Our World in Data',
    url: 'https://ourworldindata.org',
    desc: '牛津大学团队运营的全球数据平台。图表风格统一、清晰，数据可下载可引用，是数据分析和科学可视化的好参考。',
    tags: ['数据分析', '科学', '全球数据'],
  },
  {
    name: 'FlowingData',
    url: 'https://flowingdata.com',
    desc: 'Nathan Yau 的数据可视化博客。20 年来持续分享可视化教程、工具评测和行业案例，是入门者到进阶者的宝藏。',
    tags: ['博客', '教程', 'R/Python'],
  },
  {
    name: 'Data Sketches',
    url: 'https://www.datasketch.es',
    desc: 'Shirley Wu 与 Nadieh Bremer 的联合作品集，12 个月 12 个主题。展示数据可视化从概念到落地的完整创作过程。',
    tags: ['可视化', '全流程', '创意'],
  },
  {
    name: 'Reuters Graphics',
    url: 'https://www.reuters.com/graphics',
    desc: '路透社数据可视化团队。风格简洁有力，善用地图、时间线和交互叙事，是新闻可视化的专业标杆。',
    tags: ['数据新闻', '地图', '叙事'],
  },
  {
    name: 'D3 Graph Gallery',
    url: 'https://d3-graph-gallery.com',
    desc: '最全的 D3.js 图表代码库，每种图表都有可复制的源码和参数说明，适合快速查找实现参考。',
    tags: ['D3.js', '代码', '图表'],
  },
  {
    name: 'ECharts Gallery',
    url: 'https://echarts.apache.org/examples',
    desc: 'Apache ECharts 官方示例集。覆盖折线、柱状、地图、3D 等所有类型，每个示例可在线编辑运行。',
    tags: ['ECharts', '代码', '图表'],
  },
  {
    name: 'Chartio Data School',
    url: 'https://dataschool.com',
    desc: '面向业务分析师的图表选择指南。讲清楚"什么时候用什么图"，附带 SQL 和可视化工具实操教程。',
    tags: ['图表选择', 'SQL', '入门'],
  },
  {
    name: 'Datawrapper Blog',
    url: 'https://blog.datawrapper.de',
    desc: 'Datawrapper 官方博客。大量关于配色、图表选择、可访问性的深度文章，适合提升图表审美和设计意识。',
    tags: ['设计', '配色', '可访问性'],
  },
];

export const blogPosts = [
  {
    slug: 'ai-transition',
    title: '从 SQL 到 LLM：一个数据分析师的 AI 转型路线图',
    type: '转型故事',
    angle: '个人经历，吸引同路人',
  },
  {
    slug: 'data-analyst-value',
    title: 'AI 时代，数据分析师的核心竞争力是什么',
    type: '观点文章',
    angle: '认知输出，吸引更广受众',
  },
  {
    slug: 'data-thinking',
    title: '我用数据思维理解世界的方式',
    type: '思考随笔',
    angle: '展示认知深度，不只谈技术',
  },
];
