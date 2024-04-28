// Old Code stored here...

// 1.

//     <Card row variant="outlined" sx={{ width: 280, bgcolor: 'background.body', height: 97 }}>
//     <CardOverflow>
//       <AspectRatio ratio="1" sx={{ width: 90 }}>
//         <img
//           src={image}
//           loading="lazy"
//           alt={{name} + "Logo"}
//         />
//       </AspectRatio>
//     </CardOverflow>
//     <CardContent sx={{ px: 2 }}>
//       <Typography fontWeight="md" textColor="success.plainColor" mb={0.5}>
//         {name}
//       </Typography>
//       <Typography level="body2">
//       <Link
//         overlay
//         underline="none"
//         href={url.viewNow}
//         sx={{ color: 'text.tertiary' }}
//       >
//         {url.categories}
//         </Link>
//         </Typography>
//     </CardContent>
//     <Divider />
//     <CardOverflow
//       variant="soft"
//       color={url.color}
//       sx={{
//         px: 0.2,
//         writingMode: 'vertical-rl',
//         textAlign: 'center',
//         fontSize: 'xs2',
//         fontWeight: 'xl2',
//         letterSpacing: '1px',
//         textTransform: 'uppercase',
//       }}
//     >
//       {url.status}
//     </CardOverflow>
//   </Card>

// 2.

{/* <Card variant="outlined" sx={{ maxWidth: 200, boxShadow: 'none', ...sx }}>
<CardOverflow>
  <AspectRatio>
    <img
      src="https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/defaultbg.jpg"
      loading="lazy"
      alt="Background"
    />
  </AspectRatio>
</CardOverflow>
<Box sx={{ mt: -3, width: 48 }}>
  <AspectRatio ratio="1">
    <img
      src={image}
      loading="lazy"
      alt={name}
      title={name}
    />
  </AspectRatio>
</Box>
<Box>
  <Typography fontWeight="lg" mt={1.5}>
    <Link href={url.viewNow} overlay color="neutral">
      {name}
    </Link>
  </Typography>
  <Typography level="body2">A very very long description.</Typography>
</Box>
</Card> */}

// 3.

{/* <Card variant="outlined" sx={{ maxWidth: 200, boxShadow: 'none' }}>
<CardOverflow>
    <AspectRatio>
        <img
            src="https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/defaultbg.jpg"
            loading="lazy"
            alt="Background"
        />
    </AspectRatio>
</CardOverflow>
<Box sx={{ mt: -3, width: 64 }}>
    <AspectRatio ratio="1">
        <img
            src={image}
            loading="lazy"
            alt={name}
            title={name}
        />
    </AspectRatio>
</Box>
<Box>
    <Typography fontWeight="lg" mt={1.5}>
        <Link href={url.viewNow} overlay color="neutral">
            {name}
        </Link>
    </Typography>
    <Typography level="body2">A very very long description.</Typography>
</Box>
</Card> */}

// 4.

//             <div className={clsx('card')}>
//                 <div className={clsx('card__image')}>
//                     <center>
//                     <Link to={url.viewNow}>
//                         <img src={image} alt={name} title={name} width={url.width} height={url.height} />
//                     </Link>
//                     </center>
//                 </div>
//                 <div className="card__body">
//                     <h3>{name}</h3>
//                 </div>
//                 <div className="card__footer">
//                     <Highlight color={url.color}>{url.status}</Highlight>
//                     <br /><br />
//                     <Stack direction="row" spacing={1}>
//                     <Chip size="sm" variant="soft">{url.categories[0]}</Chip>
//                     <Chip size="sm" variant="soft">{url.categories[1]}</Chip>
//                     <Chip size="sm" variant="soft">{url.categories[2]}</Chip>
//                     {/* <Chip size="sm" variant="soft">{url.categories[3]}</Chip>
//                     <Chip size="sm" variant="soft">{url.categories[4]}</Chip>
//                     <Chip size="sm" variant="soft">{url.categories[5]}</Chip> */}
//                     </Stack>
//                     <br />
//                     <div className="button-group button-group--block">
//                         <Link className="button button--primary" to={url.viewNow}>
//                             <i className="fa-solid fa-arrow-up-right-from-square" /> View Now
//                         </Link>
//                     </div>
//                 </div>
//             </div>