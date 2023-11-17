// import {
//   AspectRatio,
//   Box,
//   Heading,
//   Input,
//   Stack,
//   Text,
//   Image,
// } from "@chakra-ui/react";
// import React, { useState } from "react";
// export default function Upload(props: any) {
//   function handleChange(e) {
//     setFile(e.target.files[0]);
//   }
//   return (
//     <Box>
//       <AspectRatio>
//         <Box borderWidth="0.15em" role="group">
//           <Box
//             position="relative"
//             height="100%"
//             width="100%"
//           >
//             <Box
//               position="absolute"
//               top="0"
//               left="0"
//               height="100%"
//               width="100%"
//               display="flex"
//               flexDirection="column"
//             >
//               <Stack
//                 height="100%"
//                 width="100%"
//                 display="flex"
//                 alignItems="center"
//                 justify="center"
//                 spacing="4"
//               >
//                 <Stack
//                   p="8"
//                   textAlign="center"
//                   spacing="1"
//                   style={
//                     file
//                       ? { display: "none" }
//                       : { display: "block" }
//                   }
//                 >
//                   <Heading
//                     fontSize="lg"
//                     color="white"
//                     fontWeight="bold"
//                   >
//                     Drop images here
//                   </Heading>
//                   <Text fontWeight="light">
//                     or click to upload
//                   </Text>
//                 </Stack>
//               </Stack>
//             </Box>
//             <Input
//               type="file"
//               height="100%"
//               width="100%"
//               position="absolute"
//               bgColor={"red"}
//               top="0"
//               left="0"
//               opacity="0"
//               aria-hidden="true"
//               accept="image/*"
//               cursor={"pointer"}
//               onChange={handleChange}
//             />
//             <Image
//               w={"100%"}
//               src={file ? URL.createObjectURL(file) : ""}
//             />
//           </Box>
//         </Box>
//       </AspectRatio>
//     </Box>
//   );
// }
