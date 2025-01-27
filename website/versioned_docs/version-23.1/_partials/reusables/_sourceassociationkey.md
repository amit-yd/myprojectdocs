## Source Association Keys {#sourceassociationkeys}

TeamForge EventQ uses source association keys to uniquely identify incoming data from activity sources that it monitors.

Adapters supply data to TeamForge EventQ through the message queue (MQ) layer. When a relevant activity occurs in source systems, TeamForge EventQ adapters generate a message with key metadata about the activity and place that message on the designated MQ server. When TeamForge EventQ receives the message, it must associate it to the proper source somehow. To do this, TeamForge EventQ supplies a unique "source association key" for each external source created. Adapters must supply this unique source association key with each message for the data to correlate with the appropriate project source.

Note that commit sources based on TeamForge project repositories do not need source associations keys since they are internal and are identified by other means. All other sources require source association keys.

![](/docs/assets/images/Orc_msgQ_details.png)

### Locate a Source Association Key {#locateasourceassociationkey}

Source association key for existing activity sources are located on the corresponding source configuration page.

1. From the activity stream, click **Manage Sources**.
2. Select the desired source type toggle. TeamForge EventQ displays all existing sources.
3. Click **Edit** on the source whose key you wish to obtain. You see the configuration page for the selected source.
4. Locate the source association key for the selected source. On most browsers you can copy the key by clicking the small clipboard icon.