import React from 'react';
import Translate from '@docusaurus/Translate';
import IconEdit from '@theme/Icon/Edit';
import type { Props } from '@theme/EditThisPage';
import Button from "@mui/joy/Button";

export default function EditThisPage({ editUrl }: Props): JSX.Element {
  return (
    <Button
      to={editUrl}
      variant="soft"
      startDecorator={<IconEdit />}
    >
      <Translate
        id="theme.common.editThisPage"
        description="The link label to edit the current page">
        Edit this page
      </Translate>
    </Button>
  );
}
