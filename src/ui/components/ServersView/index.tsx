import type { FC } from 'react';
import React from 'react';

import { useServers } from '../hooks/useServers';
import { ReparentingContainer } from '../utils/ReparentingContainer';
import { ServerPane } from './ServerPane';

export const ServersView: FC = () => {
  const servers = useServers();

  return (
    <ReparentingContainer>
      {servers.map((server) => (
        <ServerPane
          key={server.url}
          lastPath={server.lastPath}
          serverUrl={server.url}
          isSelected={server.selected}
          isFailed={server.failed ?? false}
          isSupported={server.isSupportedVersion}
          title={server.title}
        />
      ))}
    </ReparentingContainer>
  );
};
