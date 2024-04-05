import * as React from 'react';
import Card from '@mui/joy/Card';
import Stack from '@mui/joy/Stack';

export default function BlogPostCard() {
    <Card>
    // Main Stack (HStack)
        <Stack
            direction="row"
            justifyContent="center"
            alignItems="center"
            spacing={2}
        >
    // VStack 1 (Details)
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <img src="https://cdn.jsdelivr.net/gh/Comp-Labs/cdn/img/default.jpg" loading="lazy" />
                <div class="avatar">
                    <img
                        class="avatar__photo"
                        src="https://avatars1.githubusercontent.com/u/165856?s=460&v=4" />
                    <div class="avatar__intro">
                        <div class="avatar__name">Hector Ramos</div>
                        <small class="avatar__subtitle">React Native @facebook</small>
                    </div>
                </div>
            </Stack>
        // VStack 2 (Content)
            <Stack
                direction="column"
                justifyContent="center"
                alignItems="center"
                spacing={2}
            >
                <div class="hero hero--dark">
                    <div class="container">
                        <h1 class="hero__title">Blog Post Title</h1>
                        <p class="hero__subtitle">Content</p>
                        <div>
                            <button class="button button--primary button--outline button--lg">
                                Read More
                            </button>
                        </div>
                    </div>
                </div>
            </Stack>
        </Stack>
    </Card>
} 