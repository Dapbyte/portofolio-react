const publicPath = (path) => `${import.meta.env.BASE_URL.replace(/\/$/, '')}${path}`

export const portfolioItems = [
  {
    slug: 'sar-victim-detection-yolo',
    title: 'SAR Victim Detection Model',
    category: 'Machine Learning',
    icon: 'bot',
    description:
      'Pembuatan model pendeteksian korban untuk kebutuhan Kontes Robot SAR Indonesia bersama divisi Rakhasena sub divisi Abhipraya.',
    stack: ['YOLOv8s', 'YOLOv8x', 'Roboflow', 'Google Colab', 'Python'],
    highlights: [
      {
        label: 'Raw Dataset',
        value: '5.549 images',
      },
      {
        label: 'Train Split',
        value: '8.694 images',
      },
      {
        label: 'Test Split',
        value: '616 images',
      },
      {
        label: 'Valid Split',
        value: '626 images',
      },
    ],
    flow: [
      {
        title: 'Collect raw images',
        details: ['Mengumpulkan gambar mentah untuk kebutuhan deteksi korban.'],
      },
      {
        title: 'Annotate images in Roboflow',
        details: ['Melakukan labeling objek korban pada setiap gambar.'],
      },
      {
        title: 'Generate dataset version',
        details: [
          'Preprocessing dataset.',
          'Augmentation: rotation, brightness & contrast, blur, HSV augmentation.',
          'Menghindari mosaic di Roboflow.',
        ],
      },
      {
        title: 'Export dataset',
        details: ['Export dataset dalam format YOLO.'],
      },
      {
        title: 'Move dataset to Colab',
        details: ['Upload atau download dataset ke Google Colab.'],
      },
      {
        title: 'Train YOLO model',
        details: [
          'Optimizer: Adam.',
          'Realtime augmentation YOLO tetap aktif: mosaic, scaling, flipping, perspective.',
        ],
      },
      {
        title: 'Validation & evaluation',
        details: ['Mengevaluasi performa model dari hasil training dan validasi.'],
      },
      {
        title: 'Export best.pt',
        details: ['Menyimpan weight terbaik untuk kebutuhan deployment robot.'],
      },
    ],
    modelComparison: {
      results: [
        'confusion_matrix.png',
        'confusion_matrix_normalized.png',
        'F1_curve.png',
        'labels.jpg',
        'labels_correlogram.jpg',
        'P_curve.png',
        'PR_curve.png',
        'R_curve.png',
        'results.png',
      ],
      models: [
        {
          id: 'yolov8s',
          label: 'YOLOv8s',
          tone: 'var(--green)',
          summary:
            'Model ringan untuk eksperimen cepat dan potensi inference yang lebih responsif pada sistem robot.',
          assetBase: publicPath('/portfolio/sar-victim-detection/yolov8s'),
          csv: publicPath('/portfolio/sar-victim-detection/yolov8s/results.csv'),
          results: [
            'confusion_matrix_normalized.png',
            'F1_curve.png',
            'labels.jpg',
            'labels_correlogram.jpg',
            'P_curve.png',
            'PR_curve.png',
            'R_curve.png',
            'results.png',
          ],
        },
        {
          id: 'yolov8x',
          label: 'YOLOv8x',
          tone: 'var(--blue)',
          summary:
            'Model lebih besar untuk mengejar kapasitas representasi lebih kuat pada deteksi korban.',
          assetBase: publicPath('/portfolio/sar-victim-detection/yolov8x'),
          csv: publicPath('/portfolio/sar-victim-detection/yolov8x/results.csv'),
          results: [
            'confusion_matrix.png',
            'confusion_matrix_normalized.png',
            'F1_curve.png',
            'labels.jpg',
            'labels_correlogram.jpg',
            'P_curve.png',
            'PR_curve.png',
            'R_curve.png',
            'results.png',
          ],
        },
      ],
    },
  },

]

export const animatedRoles = [
  {
    label: 'AI/ML',
    color: 'var(--pink)',
  },
  {
    label: 'Robotics',
    color: 'var(--blue)',
  },
]

export const languages = ['C/C++', 'Python']

export const aboutFacts = [
  {
    label: 'Degree',
    value: 'Informatics',
    icon: 'graduation',
    color: 'var(--blue)',
  },
  {
    label: 'University',
    value: 'UPN "Veteran" Jawa Timur',
    icon: 'building',
    color: 'var(--green)',
  },
  {
    label: 'Focus',
    value: 'Learning by building practical systems',
    icon: 'spark',
    color: 'var(--pink)',
  },
]

export const contacts = [
  {
    name: 'Instagram',
    handle: '@daffa.arffi',
    href: 'https://www.instagram.com/daffa.arffi/',
  },
  {
    name: 'GitHub',
    handle: 'Dapbyte',
    href: 'https://github.com/Dapbyte',
  },
  {
    name: 'LinkedIn',
    handle: 'Daffa Arrafi',
    href: 'https://www.linkedin.com/in/daffa-arrafi/',
  },
]
