# Styling requirements

## Custom styles (Css)

```

/* background colors */

    --bg-wild-blue-yonder: hsla(216, 33%, 68%, 1);
    --bg-carolina-blue: hsla(199, 89%, 49%, 1);
    --bg-prussian-blue: hsla(216, 33%, 20%, 1);
    --bg-oxford-blue: hsla(222, 44%, 13%, 1);
    --bg-oxford-blue-2: hsla(222, 47%, 11%, 1);

    /* text colors */

    --text-white: hsla(0, 0%, 100%, 1);
    --text-alice-blue: hsla(216, 100%, 95%, 1);
    --text-columbia-blue: hsla(199, 69%, 84%, 1);
    --text-wild-blue-yonder: hsla(216, 33%, 68%, 1);
    --text-carolina-blue: hsla(199, 89%, 49%, 1);
    --text-shadow-blue: hsla(217, 24%, 59%, 1);
    --text-slate-gray: hsla(217, 17%, 48%, 1);

    /* gradient colors */

    --gradient-1: linear-gradient(90deg, #0ea5ea, #0bd1d1 51%);
    --gradient-2: linear-gradient(90deg, #0ea5ea, #0bd1d1 51%, #0ea5ea);
    --gradient-3: linear-gradient(0deg, #000d1a, transparent);

    /* border colors */

    --border-wild-blue-yonder: hsla(216, 33%, 68%, 1);
    --border-prussian-blue: hsla(216, 33%, 20%, 1);
    --border-white: hsl(0, 0%, 100%);
    --border-white-alpha-15: hsla(0, 0%, 100%, 0.15);

    /* default colors */
    
    --white: hsl(0, 0%, 100%, 1);
    --black: hsl(0, 0%, 0%, 1);

     /* font family */

    --fontFamily-noto_sans: 'Noto Sans', sans-serif;

     /* font size */

    --fontSize-1: 2.9rem;
    --fontSize-2: 2.0rem;
    --fontSize-3: 1.8rem;
    --fontSize-4: 1.6rem;
    --fontSize-5: 1.5rem;
    --fontSize-6: 1.4rem;
    --fontSize-7: 1.2rem;
    --fontSize-8: 1.3rem;

     /* font weight */

    --weight-medium: 500;
    --weight-semiBold: 600;
    --weight-bold: 700;
    --weight-extraBold: 800;

    /* line height */

    --lineHeight-1: 1.3;
    --lineHeight-2: 1.5;
    --lineHeight-4: 1.5;

    /* Box shadows */

    --shadow-1: 0 8px 20px 0 hsla(0, 0%, 0%, 0.05);
    --shadow-2: 0px 3px 20px hsla(180, 90%, 43%, 0.2);

    /* Border radius */

    --radius-6: 6px;
    --radius-8: 8px;
    --radius-16: 16px;
    --radius-48: 48px;
    --radius-circle: 50%;
    --radius-pill: 200px;

    /* Padding */

    --section-padding: 70px;

    /* transition */

    --transition-1: 0.25s ease;
    --transition-2: 0.5s ease;
    --cubic-in: cubic-bezier(0.51, 0.03, 0.64, 0.28);
    --cubic-out: cubic-bezier(0.05, 0.83, 0.52, 0.97);

```

## Html import links

### Google font links

```
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Noto+Sans:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

```

### Preload links

```
 <link rel="preload" href="/path/image.svg" as="image" media="print" onload="this.media='all'; this.onload=null;" />
 <link rel="preload" href="/path/image.svg" as="image" media="print" onload="this.media='all'; this.onload=null;" />
 <link rel="preload" href="/images/image.svg" as="image" media="print" onload="this.media='all'; this.onload=null;" />
```

### ionicon Script links

```

<script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
<script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

```



