// https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface InterfaceWirelessConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#___path___ InterfaceWireless#___path___}
  */
  readonly path?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#___skip___ InterfaceWireless#___skip___}
  */
  readonly skip?: string;
  /**
  * <em>A set of transformations for field names. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#___ts___ InterfaceWireless#___ts___}
  */
  readonly ts?: string;
  /**
  * <em>A set of fields that require setting/unsetting. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#___unset___ InterfaceWireless#___unset___}
  */
  readonly unset?: string;
  /**
  * This property is only effective for cards based on Atheros chipset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#adaptive_noise_immunity InterfaceWireless#adaptive_noise_immunity}
  */
  readonly adaptiveNoiseImmunity?: string;
  /**
  * Allow WEP Shared Key clients to connect. Note that no authentication is done for these clients (WEP Shared keys are not compared to anything) - they are just accepted at once (if access list allows that).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#allow_sharedkey InterfaceWireless#allow_sharedkey}
  */
  readonly allowSharedkey?: boolean | cdktf.IResolvable;
  /**
  * Frame priorities for which AMPDU sending (aggregating frames and sending using block acknowledgment) should get negotiated and used. Using AMPDUs will increase throughput, but may increase latency, therefore, may not be desirable for real-time traffic (voice, video). Due to this, by default AMPDUs are enabled only for best-effort traffic.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#ampdu_priorities InterfaceWireless#ampdu_priorities}
  */
  readonly ampduPriorities?: number[];
  /**
  * Max AMSDU that device is allowed to prepare when negotiated. AMSDU aggregation may significantly increase throughput especially for small frames, but may increase latency in case of packet loss due to retransmission of aggregated frame. Sending and receiving AMSDUs will also increase CPU usage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#amsdu_limit InterfaceWireless#amsdu_limit}
  */
  readonly amsduLimit?: number;
  /**
  * Max frame size to allow including in AMSDU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#amsdu_threshold InterfaceWireless#amsdu_threshold}
  */
  readonly amsduThreshold?: number;
  /**
  * Antenna gain in dBi, used to calculate maximum transmit power according to country regulations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#antenna_gain InterfaceWireless#antenna_gain}
  */
  readonly antennaGain?: number;
  /**
  * Select antenna to use for transmitting and for receiving: `ant-a` - use only 'a'; antenna `ant-b` - use only 'b'; antenna `txa-rxb` - use antenna 'a' for transmitting, antenna 'b' for receiving; `rxa-txb` - use antenna 'b' for transmitting, antenna 'a' for receiving.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#antenna_mode InterfaceWireless#antenna_mode}
  */
  readonly antennaMode?: string;
  /**
  * Identifies group of wireless networks. This value is announced by AP, and can be matched in  connect-list  by area-prefix. This is a proprietary extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#area InterfaceWireless#area}
  */
  readonly area?: string;
  /**
  * ARP Mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#arp InterfaceWireless#arp}
  */
  readonly arp?: string;
  /**
  * ARP timeout is time how long ARP record is kept in ARP table after no packets are received from IP. Value auto equals to the value of arp-timeout in `/ip settings`, default is 30s.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#arp_timeout InterfaceWireless#arp_timeout}
  */
  readonly arpTimeout?: string;
  /**
  * Defines set of used data rates, channel frequencies and widths.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#band InterfaceWireless#band}
  */
  readonly band?: string;
  /**
  * Similar to the basic-rates-b property, but used for 5ghz, 5ghz-10mhz, 5ghz-5mhz, 5ghz-turbo, 2.4ghz-b/g, 2.4ghz-onlyg, 2ghz-10mhz, 2ghz-5mhz and 2.4ghz-g-turbo bands.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#basic_rates_ag InterfaceWireless#basic_rates_ag}
  */
  readonly basicRatesAg?: string[];
  /**
  * List of basic rates, used for `2.4ghz-b`, `2.4ghz-b/g` and `2.4ghz-onlyg` bands.Client will connect to AP only if it supports all basic rates announced by the AP. AP will establish WDS link only if it supports all basic rates of the other AP.This property has effect only in AP modes, and when value of rate-set is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#basic_rates_b InterfaceWireless#basic_rates_b}
  */
  readonly basicRatesB?: string[];
  /**
  * Allows to use station-bridge mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#bridge_mode InterfaceWireless#bridge_mode}
  */
  readonly bridgeMode?: string;
  /**
  * Time in microseconds which will be used to send data without stopping. Note that no other wireless cards in that network will be able to transmit data during burst-time microseconds. This setting is available only for AR5000, AR5001X, and AR5001X+ chipset based cards.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#burst_time InterfaceWireless#burst_time}
  */
  readonly burstTime?: string;
  /**
  * Use of extension channels (e.g. `C`e, `eC` etc) allows additional 20MHz extension channels and if it should be located below or above the control (main) channel. Extension channel allows 802.11n devices to use up to 40MHz (802.11ac up to 160MHz) of spectrum in total thus increasing max throughput. Channel widths with `XX` and `XXXX` extensions automatically scan for a less crowded control channel frequency based on the number of concurrent devices running in every frequency and chooses the `C` - Control channel frequency automatically.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#channel_width InterfaceWireless#channel_width}
  */
  readonly channelWidth?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#comment InterfaceWireless#comment}
  */
  readonly comment?: string;
  /**
  * Setting this property to yes will allow the use of the hardware compression. Wireless interface must have support for hardware compression. Connections with devices that do not use compression will still work.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#compression InterfaceWireless#compression}
  */
  readonly compression?: boolean | cdktf.IResolvable;
  /**
  * Limits available bands, frequencies and maximum transmit power for each frequency. Also specifies default value of scan-list. Value no_country_set is an FCC compliant set of channels.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#country InterfaceWireless#country}
  */
  readonly country?: string;
  /**
  * This is the value of ap-tx-limit for clients that do not match any entry in the  access-list. 0 means no limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#default_ap_tx_limit InterfaceWireless#default_ap_tx_limit}
  */
  readonly defaultApTxLimit?: number;
  /**
  * For AP mode, this is the value of authentication for clients that do not match any entry in the  access-list. For station mode, this is the value of connect for APs that do not match any entry in the  connect-list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#default_authentication InterfaceWireless#default_authentication}
  */
  readonly defaultAuthentication?: boolean | cdktf.IResolvable;
  /**
  * This is the value of `client-tx-limit` for clients that do not match any entry in the access-list. 0 means no limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#default_client_tx_limit InterfaceWireless#default_client_tx_limit}
  */
  readonly defaultClientTxLimit?: number;
  /**
  * This is the value of forwarding for clients that do not match any entry in the access-list.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#default_forwarding InterfaceWireless#default_forwarding}
  */
  readonly defaultForwarding?: boolean | cdktf.IResolvable;
  /**
  * When set to yes interface will always have running flag. If value is set to no', the router determines whether the card is up and running - for AP one or more clients have to be registered to it, for station, it should be connected to an AP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#disable_running_check InterfaceWireless#disable_running_check}
  */
  readonly disableRunningCheck?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#disabled InterfaceWireless#disabled}
  */
  readonly disabled?: boolean | cdktf.IResolvable;
  /**
  * This interval is measured from third sending failure on the lowest data rate. At this point `3 * (hw-retries + 1)` frame transmits on the lowest data rate had failed. During disconnect-timeout packet transmission will be retried with on-fail-retry-time interval. If no frame can be transmitted successfully during disconnect-timeout, the connection is closed, and this event is logged as `extensive data loss`. Successful frame transmission resets this timer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#disconnect_timeout InterfaceWireless#disconnect_timeout}
  */
  readonly disconnectTimeout?: string;
  /**
  * How long to wait for confirmation of unicast frames (ACKs) before considering transmission unsuccessful, or in short ACK-Timeout. Distance value has these behaviors:
  *   * Dynamic - causes AP to detect and use the smallest timeout that works with all connected clients.
  *   * Indoor - uses the default ACK timeout value that the hardware chip manufacturer has set.
  *   * Number - uses the input value in formula: `ACK-timeout = ((distance * 1000) + 299) / 300 us`
  * Acknowledgments are not used in Nstreme/NV2 protocols.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#distance InterfaceWireless#distance}
  */
  readonly distance?: string;
  /**
  * Discard frames that have been queued for sending longer than frame-lifetime. By default, when value of this property is 0, frames are discarded only after connection is closed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#frame_lifetime InterfaceWireless#frame_lifetime}
  */
  readonly frameLifetime?: number;
  /**
  * Channel frequency value in MHz on which AP will operate. Allowed values depend on the selected band, and are restricted by country setting and wireless card capabilities. This setting has no effect if interface is in any of station modes, or in wds-slave mode, or if DFS is active.Note: If using mode `superchannel`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#frequency InterfaceWireless#frequency}
  */
  readonly frequency?: string;
  /**
  * Three frequency modes are available:
  *   * regulatory-domain - Limit available channels and maximum transmit power for each channel according to the value of country
  *   * manual-txpower - Same as above, but do not limit maximum transmit power
  *   *`superchannel` - Conformance Testing Mode. Allow all channels supported by the card.
  * List of available channels for each band can be seen in `/interface wireless` info allowed-channels. This mode allows you to test wireless channels outside the default scan-list and/or regulatory domain. This mode should only be used in controlled environments, or if you have special permission to use it in your region. Before v4.3 this was called Custom Frequency Upgrade, or Superchannel. Since RouterOS v4.3 this mode is available without special key upgrades to all installations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#frequency_mode InterfaceWireless#frequency_mode}
  */
  readonly frequencyMode?: string;
  /**
  * Allows to specify offset if the used wireless card operates at a different frequency than is shown in RouterOS, in case a frequency converter is used in the card. So if your card works at 4000MHz but RouterOS shows 5000MHz, set offset to 1000MHz and it will be displayed correctly. The value is in MHz and can be positive or negative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#frequency_offset InterfaceWireless#frequency_offset}
  */
  readonly frequencyOffset?: number;
  /**
  * Whether to allow use of short guard interval (refer to 802.11n MCS specification to see how this may affect throughput). `any` will use either short or long, depending on data rate, `long` will use long.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#guard_interval InterfaceWireless#guard_interval}
  */
  readonly guardInterval?: string;
  /**
  * `true` - AP does not include SSID in the beacon frames, and does not reply to probe requests that have broadcast SSID. `false` - AP includes SSID in the beacon frames, and replies to probe requests that have broadcast SSID.This property has an effect only in AP mode. Setting it to yes can remove this network from the list of wireless networks that are shown by some client software. Changing this setting does not improve the security of the wireless network, because SSID is included in other frames sent by the AP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#hide_ssid InterfaceWireless#hide_ssid}
  */
  readonly hideSsid?: boolean | cdktf.IResolvable;
  /**
  * Modulation and Coding Schemes that every connecting client must support. Refer to 802.11n for MCS specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#ht_basic_mcs InterfaceWireless#ht_basic_mcs}
  */
  readonly htBasicMcs?: string[];
  /**
  * Modulation and Coding Schemes that this device advertises as supported. Refer to 802.11n for MCS specification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#ht_supported_mcs InterfaceWireless#ht_supported_mcs}
  */
  readonly htSupportedMcs?: string[];
  /**
  * Specifies maximum fragment size in bytes when transmitted over the wireless medium. 802.11 standard packet (MSDU in 802.11 terminologies) fragmentation allows packets to be fragmented before transmitting over a wireless medium to increase the probability of successful transmission (only fragments that did not transmit correctly are retransmitted). Note that transmission of a fragmented packet is less efficient than transmitting unfragmented packet because of protocol overhead and increased resource usage at both - transmitting and receiving party.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#hw_fragmentation_threshold InterfaceWireless#hw_fragmentation_threshold}
  */
  readonly hwFragmentationThreshold?: string;
  /**
  * Frame protection support property.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#hw_protection_mode InterfaceWireless#hw_protection_mode}
  */
  readonly hwProtectionMode?: string;
  /**
  * Frame protection support property read more >>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#hw_protection_threshold InterfaceWireless#hw_protection_threshold}
  */
  readonly hwProtectionThreshold?: number;
  /**
  * Number of times sending frame is retried without considering it a transmission failure. Data-rate is decreased upon failure and the frame is sent again. Three sequential failures on the lowest supported rate suspend transmission to this destination for the duration of on-fail-retry-time. After that, the frame is sent again. The frame is being retransmitted until transmission success, or until the client is disconnected after disconnect-timeout. The frame can be discarded during this time if frame-lifetime is exceeded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#hw_retries InterfaceWireless#hw_retries}
  */
  readonly hwRetries?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#id InterfaceWireless#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Adjusts scan-list to use indoor, outdoor or all frequencies for the country that is set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#installation InterfaceWireless#installation}
  */
  readonly installation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#interworking_profile InterfaceWireless#interworking_profile}
  */
  readonly interworkingProfile?: string;
  /**
  * Applies only if wireless interface is in `mode = ap-bridge`. If a client has not communicated for around 20 seconds, AP sends a `keepalive-frame`. Note, disabling the feature can lead to `ghost` clients in registration-table.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#keepalive_frames InterfaceWireless#keepalive_frames}
  */
  readonly keepaliveFrames?: string;
  /**
  * Layer2 Maximum transmission unit. [See](https://wiki.mikrotik.com/wiki/Maximum_Transmission_Unit_on_RouterBoards).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#l2mtu InterfaceWireless#l2mtu}
  */
  readonly l2Mtu?: number;
  /**
  * MAC address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#mac_address InterfaceWireless#mac_address}
  */
  readonly macAddress?: string;
  /**
  * Name of wireless interface that has virtual-ap capability. Virtual AP interface will only work if master interface is in ap-bridge, bridge, station or wds-slave mode. This property is only for virtual AP interfaces.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#master_interface InterfaceWireless#master_interface}
  */
  readonly masterInterface?: string;
  /**
  * Maximum number of associated clients. WDS links also count toward this limit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#max_station_count InterfaceWireless#max_station_count}
  */
  readonly maxStationCount?: number;
  /**
  * Selection between different station and access point (AP) modes.
  *   * Station modes: `station` - Basic station mode. Find and connect to acceptable AP. `station-wds` - Same as station, but create WDS link with AP, using proprietary extension. AP configuration has to allow WDS links with this device. Note that this mode does not use entries in wds. `station-pseudobridge` - Same as station, but additionally perform MAC address translation of all traffic. Allows interface to be bridged. `station-pseudobridge-clone` - Same as station-pseudobridge, but use station-bridge-clone-mac address to connect to AP. `station-bridge` - Provides support for transparent protocol-independent L2 bridging on the station device. RouterOS AP accepts clients in station-bridge mode when enabled using bridge-mode parameter. In this mode, the AP maintains a forwarding table with information on which MAC addresses are reachable over which station device. Only works with RouterOS APs. With station-bridge mode, it is not possible to connect to CAPsMAN controlled CAP.
  *   * AP modes: `ap-bridge` - Basic access point mode. `bridge` - Same as ap-bridge, but limited to one associated client. `wds-slave` - Same as ap-bridge, but scan for AP with the same ssid and establishes WDS link. If this link is lost or cannot be established, then continue scanning. If dfs-mode is radar-detect, then APs with enabled hide-ssid will not be found during scanning.
  *   * Special modes: `alignment-only` - Put the interface in a continuous transmit mode that is used for aiming the remote antenna. `nstreme-dual-slave` - allow this interface to be used in nstreme-dual setup. MAC address translation in pseudobridge modes works by inspecting packets and building a table of corresponding IP and MAC addresses. All packets are sent to AP with the MAC address used by pseudobridge, and MAC addresses of received packets are restored from the address translation table. There is a single entry in the address translation table for all non-IP packets, hence more than one host in the bridged network cannot reliably use non-IP protocols. Note: Currently IPv6 doesn't work over Pseudobridge.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#mode InterfaceWireless#mode}
  */
  readonly mode?: string;
  /**
  * Layer3 Maximum transmission unit ('auto', 0 .. 65535). Look for the exact minimum value in the MikroTik documentation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#mtu InterfaceWireless#mtu}
  */
  readonly mtu?: string;
  /**
  * For a client that has power saving, buffer multicast packets until next beacon time. A client should wake up to receive a beacon, by receiving beacon it sees that there are multicast packets pending, and it should wait for multicast packets to be sent.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#multicast_buffering InterfaceWireless#multicast_buffering}
  */
  readonly multicastBuffering?: string;
  /**
  * When set to full, multicast packets will be sent with a unicast destination MAC address, resolving  multicast problem on the wireless link. This option should be enabled only on the access point, clients should be configured in station-bridge mode. Available starting from v5.15.disabled - disables the helper and sends multicast packets with multicast destination MAC addressesdhcp - dhcp packet mac addresses are changed to unicast mac addresses prior to sending them outfull - all multicast packet mac address are changed to unicast mac addresses prior to sending them outdefault - default choice that currently is set to dhcp. Value can be changed in future releases.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#multicast_helper InterfaceWireless#multicast_helper}
  */
  readonly multicastHelper?: string;
  /**
  * Name of the interface.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#name InterfaceWireless#name}
  */
  readonly name: string;
  /**
  * For advanced use only, as it can badly affect the performance of the interface. It is possible to manually set noise floor threshold value. By default, it is dynamically calculated. This property also affects received signal strength. This property is only effective on non-AC chips.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#noise_floor_threshold InterfaceWireless#noise_floor_threshold}
  */
  readonly noiseFloorThreshold?: string;
  /**
  * Setting affects the size of contention time slot that AP allocates for clients to initiate connection and also size of time slots used for estimating distance to client. When setting is too small, clients that are farther away may have trouble connecting and/or disconnect with `ranging timeout` error. Although during normal operation the effect of this setting should be negligible, in order to maintain maximum performance, it is advised to not increase this setting if not necessary, so AP is not reserving time that is actually never used, but instead allocates it for actual data transfer.on AP: distance to farthest client in kmon station: no effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#nv2_cell_radius InterfaceWireless#nv2_cell_radius}
  */
  readonly nv2CellRadius?: number;
  /**
  * Specifies the Nv2 downlink ratio. Uplink ratio is automatically calculated from the downlink-ratio value. When using dynamic-downlink mode the downlink-ratio is also used when link get fully saturated. Minimum value is 20 and maximum 80.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#nv2_downlink_ratio InterfaceWireless#nv2_downlink_ratio}
  */
  readonly nv2DownlinkRatio?: number;
  /**
  * Specifies to use dynamic or fixed downlink/uplink ratio.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#nv2_mode InterfaceWireless#nv2_mode}
  */
  readonly nv2Mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#nv2_noise_floor_offset InterfaceWireless#nv2_noise_floor_offset}
  */
  readonly nv2NoiseFloorOffset?: string;
  /**
  * Specifies preshared key to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#nv2_preshared_key InterfaceWireless#nv2_preshared_key}
  */
  readonly nv2PresharedKey?: string;
  /**
  * Sets the packet priority mechanism, firstly data from high priority queue is sent, then lower queue priority data until 0 queue priority is reached. When link is full with high priority queue data, lower priority data is not sent. Use it very carefully, setting works on APframe-priority - manual setting that can be tuned with Mangle rules.default - default setting where small packets receive priority for best latency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#nv2_qos InterfaceWireless#nv2_qos}
  */
  readonly nv2Qos?: string;
  /**
  * Specifies how many priority queues are used in Nv2 network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#nv2_queue_count InterfaceWireless#nv2_queue_count}
  */
  readonly nv2QueueCount?: number;
  /**
  * Specifies Nv2 security mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#nv2_security InterfaceWireless#nv2_security}
  */
  readonly nv2Security?: string;
  /**
  * Specifies secret key for use in the Nv2 synchronization. Secret should match on Master and Slave devices in order to establish the synced state.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#nv2_sync_secret InterfaceWireless#nv2_sync_secret}
  */
  readonly nv2SyncSecret?: string;
  /**
  * After third sending failure on the lowest data rate, wait for specified time interval before retrying.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#on_fail_retry_time InterfaceWireless#on_fail_retry_time}
  */
  readonly onFailRetryTime?: string;
  /**
  * Setting default enables periodic calibration if  info  default-periodic-calibration property is enabled. Value of that property depends on the type of wireless card. This property is only effective for cards based on Atheros chipset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#periodic_calibration InterfaceWireless#periodic_calibration}
  */
  readonly periodicCalibration?: string;
  /**
  * This property is only effective for cards based on Atheros chipset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#periodic_calibration_interval InterfaceWireless#periodic_calibration_interval}
  */
  readonly periodicCalibrationInterval?: number;
  /**
  * Short preamble mode is an option of 802.11b standard that reduces per-frame overhead.On AP:
  *   * long - Do not use short preamble.
  *   * short - Announce short preamble capability. Do not accept connections from clients that do not have this capability.
  *   * both - Announce short preamble capability.
  * On station:
  *   *long - do not use short preamble.
  *   * short - do not connect to AP if it does not support short preamble.
  *   * both - Use short preamble if AP supports it.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#preamble_mode InterfaceWireless#preamble_mode}
  */
  readonly preambleMode?: string;
  /**
  * Specify type of the installed Prism wireless card.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#prism_cardtype InterfaceWireless#prism_cardtype}
  */
  readonly prismCardtype?: string;
  /**
  * RouterOS includes proprietary information in an information element of management frames. This parameter controls how this information is included. `pre-2.9.25` - This is older method. It can interoperate with newer versions of RouterOS. This method is incompatible with some clients, for example, Centrino based ones. `post-2.9.25` - This uses standardized way of including vendor specific information, that is compatible with newer wireless clients.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#proprietary_extensions InterfaceWireless#proprietary_extensions}
  */
  readonly proprietaryExtensions?: string;
  /**
  * Starting from v5.9 default value is advanced since legacy mode was inefficient.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#rate_selection InterfaceWireless#rate_selection}
  */
  readonly rateSelection?: string;
  /**
  * Two options are available: `default` - default basic and supported rate sets are used. Values from basic-rates and supported-rates parameters have no effect. `configured` - use values from basic-rates, supported-rates, basic-mcs, mcs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#rate_set InterfaceWireless#rate_set}
  */
  readonly rateSet?: string;
  /**
  * Which antennas to use for receive. In current MikroTik routers, both RX and TX chain must be enabled, for the chain to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#rx_chains InterfaceWireless#rx_chains}
  */
  readonly rxChains?: number[];
  /**
  * The default value is all channels from selected band that are supported by card and allowed by the country and frequency-mode settings (this list can be seen in  info). For default scan list in 5ghz band channels are taken with 20MHz step, in 5ghz-turbo band - with 40MHz step, for all other bands - with 5MHz step. If scan-list is specified manually, then all matching channels are taken. (Example: scan-list=default,5200-5245,2412-2427 - This will use the default value of scan list for current band, and add to it supported frequencies from 5200-5245 or 2412-2427 range.) Since RouterOS v6.0 with Winbox or Webfig, for inputting of multiple frequencies, add each frequency or range of frequencies into separate multiple scan-lists. Using a comma to separate frequencies is no longer supported in Winbox/Webfig since v6.0.Since RouterOS v6.35 (wireless-rep) scan-list support step feature where it is possible to manually specify the scan step. Example: scan-list=5500-5600:20 will generate such scan-list values 5500,5520,5540,5560,5580,5600.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#scan_list InterfaceWireless#scan_list}
  */
  readonly scanList?: string;
  /**
  * Specifies secondary channel, required to enable 80+80MHz transmission. To disable 80+80MHz functionality, set secondary-frequency to `` or unset the value via CLI/GUI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#secondary_frequency InterfaceWireless#secondary_frequency}
  */
  readonly secondaryFrequency?: string;
  /**
  * Name of profile from  security-profiles.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#security_profile InterfaceWireless#security_profile}
  */
  readonly securityProfile?: string;
  /**
  * These values are used to skip all DFS channels or specifically skip DFS CAC channels in range 5600-5650MHz which detection could go up to 10min.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#skip_dfs_channels InterfaceWireless#skip_dfs_channels}
  */
  readonly skipDfsChannels?: string;
  /**
  * SSID (service set identifier) is a name that identifies wireless network.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#ssid InterfaceWireless#ssid}
  */
  readonly ssid?: string;
  /**
  * This property has effect only in the station-pseudobridge-clone mode.Use this MAC address when connection to AP. If this value is 00:00:00:00:00:00, station will initially use MAC address of the wireless interface.As soon as packet with MAC address of another device needs to be transmitted, station will reconnect to AP using that address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#station_bridge_clone_mac InterfaceWireless#station_bridge_clone_mac}
  */
  readonly stationBridgeCloneMac?: string;
  /**
  * Station Roaming feature is available only for 802.11 wireless protocol and only for station modes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#station_roaming InterfaceWireless#station_roaming}
  */
  readonly stationRoaming?: string;
  /**
  * List of supported rates, used for all bands except 2ghz-b.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#supported_rates_ag InterfaceWireless#supported_rates_ag}
  */
  readonly supportedRatesAg?: string;
  /**
  * List of supported rates, used for `2ghz-b, `2ghz-b/g` and `2ghz-b/g/n` bands. Two devices will communicate only using rates that are supported by both devices. This property has effect only when value of rate-set is configured.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#supported_rates_b InterfaceWireless#supported_rates_b}
  */
  readonly supportedRatesB?: string;
  /**
  * Specifies TDMA period in milliseconds. It could help on the longer distance links, it could slightly increase bandwidth, while latency is increased too.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#tdma_period_size InterfaceWireless#tdma_period_size}
  */
  readonly tdmaPeriodSize?: number;
  /**
  * Which antennas to use for transmitting. In current MikroTik routers, both RX and TX chain must be enabled, for the chain to be enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#tx_chains InterfaceWireless#tx_chains}
  */
  readonly txChains?: number[];
  /**
  * For 802.11ac wireless interface it's total power but for 802.11a/b/g/n it's power per chain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#tx_power InterfaceWireless#tx_power}
  */
  readonly txPower?: number;
  /**
  * Sets up tx-power mode for wireless card `default` - use values stored in the card `all-rates-fixed` - use same transmit power for all data rates. Can damage the card if transmit power is set above rated value of the card for used rate. `manual-table` - define transmit power for each rate separately. Can damage the card if transmit power is set above rated value of the card for used rate. `card-rates` - use transmit power calculated for each rate based on value of tx-power parameter. Legacy mode only compatible with currently discontinued products.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#tx_power_mode InterfaceWireless#tx_power_mode}
  */
  readonly txPowerMode?: string;
  /**
  * How often to request update of signals strength and ccq values from clients. Access to registration-table  also triggers update of these values.This is proprietary extension.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#update_stats_interval InterfaceWireless#update_stats_interval}
  */
  readonly updateStatsInterval?: string;
  /**
  * Modulation and Coding Schemes that every connecting client must support. Refer to 802.11ac for MCS specification. You can set MCS interval for each of Spatial Stream
  *   * none - will not use selected;
  *   * mcs0-7 - client must support MCS-0 to MCS-7;
  *   * mcs0-8 - client must support MCS-0 to MCS-8;
  *   * mcs0-9 - client must support MCS-0 to MCS-9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#vht_basic_mcs InterfaceWireless#vht_basic_mcs}
  */
  readonly vhtBasicMcs?: string;
  /**
  * Modulation and Coding Schemes that this device advertises as supported. Refer to 802.11ac for MCS specification. You can set MCS interval for each of Spatial Stream
  *   * none - will not use selected; 
  *   * mcs0-7 - devices will advertise as supported MCS-0 to MCS-7;
  *   * mcs0-8 - devices will advertise as supported MCS-0 to MCS-8;
  *   * mcs0-9 - devices will advertise as supported MCS-0 to MCS-9.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#vht_supported_mcs InterfaceWireless#vht_supported_mcs}
  */
  readonly vhtSupportedMcs?: string;
  /**
  * VLAN ID to use if doing VLAN tagging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#vlan_id InterfaceWireless#vlan_id}
  */
  readonly vlanId?: number;
  /**
  * VLAN tagging mode specifies if traffic coming from client should get tagged (and untagged when going to client).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#vlan_mode InterfaceWireless#vlan_mode}
  */
  readonly vlanMode?: string;
  /**
  * Bridge port cost of WDS links are automatically adjusted, depending on measured link throughput. Port cost is recalculated and adjusted every 5 seconds if it has changed by more than 10%, or if more than 20 seconds have passed since the last adjustment.Setting this property to 0 disables automatic cost adjustment.Automatic adjustment does not work for WDS links that are manually configured as a bridge port.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#wds_cost_range InterfaceWireless#wds_cost_range}
  */
  readonly wdsCostRange?: string;
  /**
  * When WDS link is established and status of the wds interface becomes running, it will be added as a bridge port to the bridge interface specified by this property. When WDS link is lost, wds interface is removed from the bridge. If wds interface is already included in a bridge setup when WDS link becomes active, it will not be added to bridge specified by , and will (needs editing).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#wds_default_bridge InterfaceWireless#wds_default_bridge}
  */
  readonly wdsDefaultBridge?: string;
  /**
  * Initial bridge port cost of the WDS links.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#wds_default_cost InterfaceWireless#wds_default_cost}
  */
  readonly wdsDefaultCost?: number;
  /**
  * By default, WDS link between two APs can be created only when they work on the same frequency and have the same SSID value. If this property is set to yes, then SSID of the remote AP will not be checked. This property has no effect on connections from clients in station-wds mode. It also does not work if wds-mode is static-mesh or dynamic-mesh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#wds_ignore_ssid InterfaceWireless#wds_ignore_ssid}
  */
  readonly wdsIgnoreSsid?: boolean | cdktf.IResolvable;
  /**
  * Controls how WDS links with other devices (APs and clients in station-wds mode) are established.
  *   * disabled does not allow WDS links.
  *   * static only allows WDS links that are manually configured in WDS.
  *   * dynamic also allows WDS links with devices that are not configured in WDS, by creating required entries dynamically. Such dynamic WDS entries are removed automatically after the connection with the other AP is lost.
  *   * -mesh modes use different (better) method for establishing link between AP, that is not compatible with APs in non-mesh mode. This method avoids one-sided WDS links that are created only by one of the two APs. Such links cannot pass any data.When AP or station is establishing WDS connection with another AP, it uses connect-list to check whether this connection is allowed. If station in station-wds mode is establishing connection with AP, AP uses access-list to check whether this connection is allowed.If mode is station-wds, then this property has no effect.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#wds_mode InterfaceWireless#wds_mode}
  */
  readonly wdsMode?: string;
  /**
  * Specifies protocol used on wireless interface;
  *   * unspecified - protocol mode used on previous RouterOS versions (v3.x, v4.x). Nstreme is enabled by old enable-nstreme setting, Nv2 configuration is not possible.
  *   * any : on AP - regular 802.11 Access Point or Nstreme Access Point; on station - selects Access Point without specific sequence, it could be changed by connect-list rules.
  *   * nstreme - enables Nstreme protocol (the same as old enable-nstreme setting).
  *   * nv2 - enables Nv2 protocol.
  *   * nv2 nstreme : on AP - uses first wireless-protocol setting, always Nv2; on station - searches for Nv2 Access Point, then for Nstreme Access Point.
  *   * nv2 nstreme 802.11 - on AP - uses first wireless-protocol setting, always Nv2; on station - searches for Nv2 Access Point, then for Nstreme Access Point, then for regular 802.11 Access Point.Warning! Nv2 doesn't have support for Virtual AP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#wireless_protocol InterfaceWireless#wireless_protocol}
  */
  readonly wirelessProtocol?: string;
  /**
  * Specifies whether to enable  WMM.  Only applies to bands `B` and `G`. Other bands will have it enabled regardless of this setting.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#wmm_support InterfaceWireless#wmm_support}
  */
  readonly wmmSupport?: string;
  /**
  * WPS Server allows to connect wireless clients that support WPS to AP protected with the Pre-Shared Key without specifying that key in the clients configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#wps_mode InterfaceWireless#wps_mode}
  */
  readonly wpsMode?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless routeros_interface_wireless}
*/
export class InterfaceWireless extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_interface_wireless";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a InterfaceWireless resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the InterfaceWireless to import
  * @param importFromId The id of the existing InterfaceWireless that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the InterfaceWireless to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_interface_wireless", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.92.1/docs/resources/interface_wireless routeros_interface_wireless} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options InterfaceWirelessConfig
  */
  public constructor(scope: Construct, id: string, config: InterfaceWirelessConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_interface_wireless',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.92.1',
        providerVersionConstraint: '1.92.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._skip = config.skip;
    this._ts = config.ts;
    this._unset = config.unset;
    this._adaptiveNoiseImmunity = config.adaptiveNoiseImmunity;
    this._allowSharedkey = config.allowSharedkey;
    this._ampduPriorities = config.ampduPriorities;
    this._amsduLimit = config.amsduLimit;
    this._amsduThreshold = config.amsduThreshold;
    this._antennaGain = config.antennaGain;
    this._antennaMode = config.antennaMode;
    this._area = config.area;
    this._arp = config.arp;
    this._arpTimeout = config.arpTimeout;
    this._band = config.band;
    this._basicRatesAg = config.basicRatesAg;
    this._basicRatesB = config.basicRatesB;
    this._bridgeMode = config.bridgeMode;
    this._burstTime = config.burstTime;
    this._channelWidth = config.channelWidth;
    this._comment = config.comment;
    this._compression = config.compression;
    this._country = config.country;
    this._defaultApTxLimit = config.defaultApTxLimit;
    this._defaultAuthentication = config.defaultAuthentication;
    this._defaultClientTxLimit = config.defaultClientTxLimit;
    this._defaultForwarding = config.defaultForwarding;
    this._disableRunningCheck = config.disableRunningCheck;
    this._disabled = config.disabled;
    this._disconnectTimeout = config.disconnectTimeout;
    this._distance = config.distance;
    this._frameLifetime = config.frameLifetime;
    this._frequency = config.frequency;
    this._frequencyMode = config.frequencyMode;
    this._frequencyOffset = config.frequencyOffset;
    this._guardInterval = config.guardInterval;
    this._hideSsid = config.hideSsid;
    this._htBasicMcs = config.htBasicMcs;
    this._htSupportedMcs = config.htSupportedMcs;
    this._hwFragmentationThreshold = config.hwFragmentationThreshold;
    this._hwProtectionMode = config.hwProtectionMode;
    this._hwProtectionThreshold = config.hwProtectionThreshold;
    this._hwRetries = config.hwRetries;
    this._id = config.id;
    this._installation = config.installation;
    this._interworkingProfile = config.interworkingProfile;
    this._keepaliveFrames = config.keepaliveFrames;
    this._l2Mtu = config.l2Mtu;
    this._macAddress = config.macAddress;
    this._masterInterface = config.masterInterface;
    this._maxStationCount = config.maxStationCount;
    this._mode = config.mode;
    this._mtu = config.mtu;
    this._multicastBuffering = config.multicastBuffering;
    this._multicastHelper = config.multicastHelper;
    this._name = config.name;
    this._noiseFloorThreshold = config.noiseFloorThreshold;
    this._nv2CellRadius = config.nv2CellRadius;
    this._nv2DownlinkRatio = config.nv2DownlinkRatio;
    this._nv2Mode = config.nv2Mode;
    this._nv2NoiseFloorOffset = config.nv2NoiseFloorOffset;
    this._nv2PresharedKey = config.nv2PresharedKey;
    this._nv2Qos = config.nv2Qos;
    this._nv2QueueCount = config.nv2QueueCount;
    this._nv2Security = config.nv2Security;
    this._nv2SyncSecret = config.nv2SyncSecret;
    this._onFailRetryTime = config.onFailRetryTime;
    this._periodicCalibration = config.periodicCalibration;
    this._periodicCalibrationInterval = config.periodicCalibrationInterval;
    this._preambleMode = config.preambleMode;
    this._prismCardtype = config.prismCardtype;
    this._proprietaryExtensions = config.proprietaryExtensions;
    this._rateSelection = config.rateSelection;
    this._rateSet = config.rateSet;
    this._rxChains = config.rxChains;
    this._scanList = config.scanList;
    this._secondaryFrequency = config.secondaryFrequency;
    this._securityProfile = config.securityProfile;
    this._skipDfsChannels = config.skipDfsChannels;
    this._ssid = config.ssid;
    this._stationBridgeCloneMac = config.stationBridgeCloneMac;
    this._stationRoaming = config.stationRoaming;
    this._supportedRatesAg = config.supportedRatesAg;
    this._supportedRatesB = config.supportedRatesB;
    this._tdmaPeriodSize = config.tdmaPeriodSize;
    this._txChains = config.txChains;
    this._txPower = config.txPower;
    this._txPowerMode = config.txPowerMode;
    this._updateStatsInterval = config.updateStatsInterval;
    this._vhtBasicMcs = config.vhtBasicMcs;
    this._vhtSupportedMcs = config.vhtSupportedMcs;
    this._vlanId = config.vlanId;
    this._vlanMode = config.vlanMode;
    this._wdsCostRange = config.wdsCostRange;
    this._wdsDefaultBridge = config.wdsDefaultBridge;
    this._wdsDefaultCost = config.wdsDefaultCost;
    this._wdsIgnoreSsid = config.wdsIgnoreSsid;
    this._wdsMode = config.wdsMode;
    this._wirelessProtocol = config.wirelessProtocol;
    this._wmmSupport = config.wmmSupport;
    this._wpsMode = config.wpsMode;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // ___skip___ - computed: false, optional: true, required: false
  private _skip?: string; 
  public get skip() {
    return this.getStringAttribute('___skip___');
  }
  public set skip(value: string) {
    this._skip = value;
  }
  public resetSkip() {
    this._skip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipInput() {
    return this._skip;
  }

  // ___ts___ - computed: false, optional: true, required: false
  private _ts?: string; 
  public get ts() {
    return this.getStringAttribute('___ts___');
  }
  public set ts(value: string) {
    this._ts = value;
  }
  public resetTs() {
    this._ts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tsInput() {
    return this._ts;
  }

  // ___unset___ - computed: false, optional: true, required: false
  private _unset?: string; 
  public get unset() {
    return this.getStringAttribute('___unset___');
  }
  public set unset(value: string) {
    this._unset = value;
  }
  public resetUnset() {
    this._unset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unsetInput() {
    return this._unset;
  }

  // adaptive_noise_immunity - computed: false, optional: true, required: false
  private _adaptiveNoiseImmunity?: string; 
  public get adaptiveNoiseImmunity() {
    return this.getStringAttribute('adaptive_noise_immunity');
  }
  public set adaptiveNoiseImmunity(value: string) {
    this._adaptiveNoiseImmunity = value;
  }
  public resetAdaptiveNoiseImmunity() {
    this._adaptiveNoiseImmunity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adaptiveNoiseImmunityInput() {
    return this._adaptiveNoiseImmunity;
  }

  // allow_sharedkey - computed: false, optional: true, required: false
  private _allowSharedkey?: boolean | cdktf.IResolvable; 
  public get allowSharedkey() {
    return this.getBooleanAttribute('allow_sharedkey');
  }
  public set allowSharedkey(value: boolean | cdktf.IResolvable) {
    this._allowSharedkey = value;
  }
  public resetAllowSharedkey() {
    this._allowSharedkey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowSharedkeyInput() {
    return this._allowSharedkey;
  }

  // ampdu_priorities - computed: false, optional: true, required: false
  private _ampduPriorities?: number[]; 
  public get ampduPriorities() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('ampdu_priorities')));
  }
  public set ampduPriorities(value: number[]) {
    this._ampduPriorities = value;
  }
  public resetAmpduPriorities() {
    this._ampduPriorities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ampduPrioritiesInput() {
    return this._ampduPriorities;
  }

  // amsdu_limit - computed: false, optional: true, required: false
  private _amsduLimit?: number; 
  public get amsduLimit() {
    return this.getNumberAttribute('amsdu_limit');
  }
  public set amsduLimit(value: number) {
    this._amsduLimit = value;
  }
  public resetAmsduLimit() {
    this._amsduLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amsduLimitInput() {
    return this._amsduLimit;
  }

  // amsdu_threshold - computed: false, optional: true, required: false
  private _amsduThreshold?: number; 
  public get amsduThreshold() {
    return this.getNumberAttribute('amsdu_threshold');
  }
  public set amsduThreshold(value: number) {
    this._amsduThreshold = value;
  }
  public resetAmsduThreshold() {
    this._amsduThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amsduThresholdInput() {
    return this._amsduThreshold;
  }

  // antenna_gain - computed: false, optional: true, required: false
  private _antennaGain?: number; 
  public get antennaGain() {
    return this.getNumberAttribute('antenna_gain');
  }
  public set antennaGain(value: number) {
    this._antennaGain = value;
  }
  public resetAntennaGain() {
    this._antennaGain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antennaGainInput() {
    return this._antennaGain;
  }

  // antenna_mode - computed: false, optional: true, required: false
  private _antennaMode?: string; 
  public get antennaMode() {
    return this.getStringAttribute('antenna_mode');
  }
  public set antennaMode(value: string) {
    this._antennaMode = value;
  }
  public resetAntennaMode() {
    this._antennaMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get antennaModeInput() {
    return this._antennaMode;
  }

  // area - computed: false, optional: true, required: false
  private _area?: string; 
  public get area() {
    return this.getStringAttribute('area');
  }
  public set area(value: string) {
    this._area = value;
  }
  public resetArea() {
    this._area = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get areaInput() {
    return this._area;
  }

  // arp - computed: false, optional: true, required: false
  private _arp?: string; 
  public get arp() {
    return this.getStringAttribute('arp');
  }
  public set arp(value: string) {
    this._arp = value;
  }
  public resetArp() {
    this._arp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpInput() {
    return this._arp;
  }

  // arp_timeout - computed: false, optional: true, required: false
  private _arpTimeout?: string; 
  public get arpTimeout() {
    return this.getStringAttribute('arp_timeout');
  }
  public set arpTimeout(value: string) {
    this._arpTimeout = value;
  }
  public resetArpTimeout() {
    this._arpTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpTimeoutInput() {
    return this._arpTimeout;
  }

  // band - computed: false, optional: true, required: false
  private _band?: string; 
  public get band() {
    return this.getStringAttribute('band');
  }
  public set band(value: string) {
    this._band = value;
  }
  public resetBand() {
    this._band = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bandInput() {
    return this._band;
  }

  // basic_rates_ag - computed: false, optional: true, required: false
  private _basicRatesAg?: string[]; 
  public get basicRatesAg() {
    return cdktf.Fn.tolist(this.getListAttribute('basic_rates_ag'));
  }
  public set basicRatesAg(value: string[]) {
    this._basicRatesAg = value;
  }
  public resetBasicRatesAg() {
    this._basicRatesAg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicRatesAgInput() {
    return this._basicRatesAg;
  }

  // basic_rates_b - computed: false, optional: true, required: false
  private _basicRatesB?: string[]; 
  public get basicRatesB() {
    return cdktf.Fn.tolist(this.getListAttribute('basic_rates_b'));
  }
  public set basicRatesB(value: string[]) {
    this._basicRatesB = value;
  }
  public resetBasicRatesB() {
    this._basicRatesB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicRatesBInput() {
    return this._basicRatesB;
  }

  // bridge_mode - computed: false, optional: true, required: false
  private _bridgeMode?: string; 
  public get bridgeMode() {
    return this.getStringAttribute('bridge_mode');
  }
  public set bridgeMode(value: string) {
    this._bridgeMode = value;
  }
  public resetBridgeMode() {
    this._bridgeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bridgeModeInput() {
    return this._bridgeMode;
  }

  // burst_time - computed: false, optional: true, required: false
  private _burstTime?: string; 
  public get burstTime() {
    return this.getStringAttribute('burst_time');
  }
  public set burstTime(value: string) {
    this._burstTime = value;
  }
  public resetBurstTime() {
    this._burstTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstTimeInput() {
    return this._burstTime;
  }

  // channel_width - computed: false, optional: true, required: false
  private _channelWidth?: string; 
  public get channelWidth() {
    return this.getStringAttribute('channel_width');
  }
  public set channelWidth(value: string) {
    this._channelWidth = value;
  }
  public resetChannelWidth() {
    this._channelWidth = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get channelWidthInput() {
    return this._channelWidth;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
  }

  // compression - computed: false, optional: true, required: false
  private _compression?: boolean | cdktf.IResolvable; 
  public get compression() {
    return this.getBooleanAttribute('compression');
  }
  public set compression(value: boolean | cdktf.IResolvable) {
    this._compression = value;
  }
  public resetCompression() {
    this._compression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressionInput() {
    return this._compression;
  }

  // country - computed: false, optional: true, required: false
  private _country?: string; 
  public get country() {
    return this.getStringAttribute('country');
  }
  public set country(value: string) {
    this._country = value;
  }
  public resetCountry() {
    this._country = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countryInput() {
    return this._country;
  }

  // default_ap_tx_limit - computed: false, optional: true, required: false
  private _defaultApTxLimit?: number; 
  public get defaultApTxLimit() {
    return this.getNumberAttribute('default_ap_tx_limit');
  }
  public set defaultApTxLimit(value: number) {
    this._defaultApTxLimit = value;
  }
  public resetDefaultApTxLimit() {
    this._defaultApTxLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultApTxLimitInput() {
    return this._defaultApTxLimit;
  }

  // default_authentication - computed: false, optional: true, required: false
  private _defaultAuthentication?: boolean | cdktf.IResolvable; 
  public get defaultAuthentication() {
    return this.getBooleanAttribute('default_authentication');
  }
  public set defaultAuthentication(value: boolean | cdktf.IResolvable) {
    this._defaultAuthentication = value;
  }
  public resetDefaultAuthentication() {
    this._defaultAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultAuthenticationInput() {
    return this._defaultAuthentication;
  }

  // default_client_tx_limit - computed: false, optional: true, required: false
  private _defaultClientTxLimit?: number; 
  public get defaultClientTxLimit() {
    return this.getNumberAttribute('default_client_tx_limit');
  }
  public set defaultClientTxLimit(value: number) {
    this._defaultClientTxLimit = value;
  }
  public resetDefaultClientTxLimit() {
    this._defaultClientTxLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultClientTxLimitInput() {
    return this._defaultClientTxLimit;
  }

  // default_forwarding - computed: false, optional: true, required: false
  private _defaultForwarding?: boolean | cdktf.IResolvable; 
  public get defaultForwarding() {
    return this.getBooleanAttribute('default_forwarding');
  }
  public set defaultForwarding(value: boolean | cdktf.IResolvable) {
    this._defaultForwarding = value;
  }
  public resetDefaultForwarding() {
    this._defaultForwarding = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultForwardingInput() {
    return this._defaultForwarding;
  }

  // default_name - computed: true, optional: false, required: false
  public get defaultName() {
    return this.getStringAttribute('default_name');
  }

  // disable_running_check - computed: false, optional: true, required: false
  private _disableRunningCheck?: boolean | cdktf.IResolvable; 
  public get disableRunningCheck() {
    return this.getBooleanAttribute('disable_running_check');
  }
  public set disableRunningCheck(value: boolean | cdktf.IResolvable) {
    this._disableRunningCheck = value;
  }
  public resetDisableRunningCheck() {
    this._disableRunningCheck = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRunningCheckInput() {
    return this._disableRunningCheck;
  }

  // disabled - computed: false, optional: true, required: false
  private _disabled?: boolean | cdktf.IResolvable; 
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }
  public set disabled(value: boolean | cdktf.IResolvable) {
    this._disabled = value;
  }
  public resetDisabled() {
    this._disabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disabledInput() {
    return this._disabled;
  }

  // disconnect_timeout - computed: false, optional: true, required: false
  private _disconnectTimeout?: string; 
  public get disconnectTimeout() {
    return this.getStringAttribute('disconnect_timeout');
  }
  public set disconnectTimeout(value: string) {
    this._disconnectTimeout = value;
  }
  public resetDisconnectTimeout() {
    this._disconnectTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectTimeoutInput() {
    return this._disconnectTimeout;
  }

  // distance - computed: false, optional: true, required: false
  private _distance?: string; 
  public get distance() {
    return this.getStringAttribute('distance');
  }
  public set distance(value: string) {
    this._distance = value;
  }
  public resetDistance() {
    this._distance = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get distanceInput() {
    return this._distance;
  }

  // frame_lifetime - computed: false, optional: true, required: false
  private _frameLifetime?: number; 
  public get frameLifetime() {
    return this.getNumberAttribute('frame_lifetime');
  }
  public set frameLifetime(value: number) {
    this._frameLifetime = value;
  }
  public resetFrameLifetime() {
    this._frameLifetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frameLifetimeInput() {
    return this._frameLifetime;
  }

  // frequency - computed: false, optional: true, required: false
  private _frequency?: string; 
  public get frequency() {
    return this.getStringAttribute('frequency');
  }
  public set frequency(value: string) {
    this._frequency = value;
  }
  public resetFrequency() {
    this._frequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyInput() {
    return this._frequency;
  }

  // frequency_mode - computed: false, optional: true, required: false
  private _frequencyMode?: string; 
  public get frequencyMode() {
    return this.getStringAttribute('frequency_mode');
  }
  public set frequencyMode(value: string) {
    this._frequencyMode = value;
  }
  public resetFrequencyMode() {
    this._frequencyMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyModeInput() {
    return this._frequencyMode;
  }

  // frequency_offset - computed: false, optional: true, required: false
  private _frequencyOffset?: number; 
  public get frequencyOffset() {
    return this.getNumberAttribute('frequency_offset');
  }
  public set frequencyOffset(value: number) {
    this._frequencyOffset = value;
  }
  public resetFrequencyOffset() {
    this._frequencyOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get frequencyOffsetInput() {
    return this._frequencyOffset;
  }

  // guard_interval - computed: false, optional: true, required: false
  private _guardInterval?: string; 
  public get guardInterval() {
    return this.getStringAttribute('guard_interval');
  }
  public set guardInterval(value: string) {
    this._guardInterval = value;
  }
  public resetGuardInterval() {
    this._guardInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get guardIntervalInput() {
    return this._guardInterval;
  }

  // hide_ssid - computed: false, optional: true, required: false
  private _hideSsid?: boolean | cdktf.IResolvable; 
  public get hideSsid() {
    return this.getBooleanAttribute('hide_ssid');
  }
  public set hideSsid(value: boolean | cdktf.IResolvable) {
    this._hideSsid = value;
  }
  public resetHideSsid() {
    this._hideSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideSsidInput() {
    return this._hideSsid;
  }

  // ht_basic_mcs - computed: false, optional: true, required: false
  private _htBasicMcs?: string[]; 
  public get htBasicMcs() {
    return cdktf.Fn.tolist(this.getListAttribute('ht_basic_mcs'));
  }
  public set htBasicMcs(value: string[]) {
    this._htBasicMcs = value;
  }
  public resetHtBasicMcs() {
    this._htBasicMcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htBasicMcsInput() {
    return this._htBasicMcs;
  }

  // ht_supported_mcs - computed: false, optional: true, required: false
  private _htSupportedMcs?: string[]; 
  public get htSupportedMcs() {
    return cdktf.Fn.tolist(this.getListAttribute('ht_supported_mcs'));
  }
  public set htSupportedMcs(value: string[]) {
    this._htSupportedMcs = value;
  }
  public resetHtSupportedMcs() {
    this._htSupportedMcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htSupportedMcsInput() {
    return this._htSupportedMcs;
  }

  // hw_fragmentation_threshold - computed: false, optional: true, required: false
  private _hwFragmentationThreshold?: string; 
  public get hwFragmentationThreshold() {
    return this.getStringAttribute('hw_fragmentation_threshold');
  }
  public set hwFragmentationThreshold(value: string) {
    this._hwFragmentationThreshold = value;
  }
  public resetHwFragmentationThreshold() {
    this._hwFragmentationThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFragmentationThresholdInput() {
    return this._hwFragmentationThreshold;
  }

  // hw_protection_mode - computed: false, optional: true, required: false
  private _hwProtectionMode?: string; 
  public get hwProtectionMode() {
    return this.getStringAttribute('hw_protection_mode');
  }
  public set hwProtectionMode(value: string) {
    this._hwProtectionMode = value;
  }
  public resetHwProtectionMode() {
    this._hwProtectionMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwProtectionModeInput() {
    return this._hwProtectionMode;
  }

  // hw_protection_threshold - computed: false, optional: true, required: false
  private _hwProtectionThreshold?: number; 
  public get hwProtectionThreshold() {
    return this.getNumberAttribute('hw_protection_threshold');
  }
  public set hwProtectionThreshold(value: number) {
    this._hwProtectionThreshold = value;
  }
  public resetHwProtectionThreshold() {
    this._hwProtectionThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwProtectionThresholdInput() {
    return this._hwProtectionThreshold;
  }

  // hw_retries - computed: false, optional: true, required: false
  private _hwRetries?: number; 
  public get hwRetries() {
    return this.getNumberAttribute('hw_retries');
  }
  public set hwRetries(value: number) {
    this._hwRetries = value;
  }
  public resetHwRetries() {
    this._hwRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwRetriesInput() {
    return this._hwRetries;
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // installation - computed: false, optional: true, required: false
  private _installation?: string; 
  public get installation() {
    return this.getStringAttribute('installation');
  }
  public set installation(value: string) {
    this._installation = value;
  }
  public resetInstallation() {
    this._installation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get installationInput() {
    return this._installation;
  }

  // interface_type - computed: true, optional: false, required: false
  public get interfaceType() {
    return this.getStringAttribute('interface_type');
  }

  // interworking_profile - computed: false, optional: true, required: false
  private _interworkingProfile?: string; 
  public get interworkingProfile() {
    return this.getStringAttribute('interworking_profile');
  }
  public set interworkingProfile(value: string) {
    this._interworkingProfile = value;
  }
  public resetInterworkingProfile() {
    this._interworkingProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interworkingProfileInput() {
    return this._interworkingProfile;
  }

  // keepalive_frames - computed: false, optional: true, required: false
  private _keepaliveFrames?: string; 
  public get keepaliveFrames() {
    return this.getStringAttribute('keepalive_frames');
  }
  public set keepaliveFrames(value: string) {
    this._keepaliveFrames = value;
  }
  public resetKeepaliveFrames() {
    this._keepaliveFrames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keepaliveFramesInput() {
    return this._keepaliveFrames;
  }

  // l2mtu - computed: false, optional: true, required: false
  private _l2Mtu?: number; 
  public get l2Mtu() {
    return this.getNumberAttribute('l2mtu');
  }
  public set l2Mtu(value: number) {
    this._l2Mtu = value;
  }
  public resetL2Mtu() {
    this._l2Mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get l2MtuInput() {
    return this._l2Mtu;
  }

  // mac_address - computed: false, optional: true, required: false
  private _macAddress?: string; 
  public get macAddress() {
    return this.getStringAttribute('mac_address');
  }
  public set macAddress(value: string) {
    this._macAddress = value;
  }
  public resetMacAddress() {
    this._macAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get macAddressInput() {
    return this._macAddress;
  }

  // master_interface - computed: false, optional: true, required: false
  private _masterInterface?: string; 
  public get masterInterface() {
    return this.getStringAttribute('master_interface');
  }
  public set masterInterface(value: string) {
    this._masterInterface = value;
  }
  public resetMasterInterface() {
    this._masterInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get masterInterfaceInput() {
    return this._masterInterface;
  }

  // max_station_count - computed: false, optional: true, required: false
  private _maxStationCount?: number; 
  public get maxStationCount() {
    return this.getNumberAttribute('max_station_count');
  }
  public set maxStationCount(value: number) {
    this._maxStationCount = value;
  }
  public resetMaxStationCount() {
    this._maxStationCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxStationCountInput() {
    return this._maxStationCount;
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // mtu - computed: true, optional: true, required: false
  private _mtu?: string; 
  public get mtu() {
    return this.getStringAttribute('mtu');
  }
  public set mtu(value: string) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // multicast_buffering - computed: false, optional: true, required: false
  private _multicastBuffering?: string; 
  public get multicastBuffering() {
    return this.getStringAttribute('multicast_buffering');
  }
  public set multicastBuffering(value: string) {
    this._multicastBuffering = value;
  }
  public resetMulticastBuffering() {
    this._multicastBuffering = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastBufferingInput() {
    return this._multicastBuffering;
  }

  // multicast_helper - computed: false, optional: true, required: false
  private _multicastHelper?: string; 
  public get multicastHelper() {
    return this.getStringAttribute('multicast_helper');
  }
  public set multicastHelper(value: string) {
    this._multicastHelper = value;
  }
  public resetMulticastHelper() {
    this._multicastHelper = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastHelperInput() {
    return this._multicastHelper;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // noise_floor_threshold - computed: false, optional: true, required: false
  private _noiseFloorThreshold?: string; 
  public get noiseFloorThreshold() {
    return this.getStringAttribute('noise_floor_threshold');
  }
  public set noiseFloorThreshold(value: string) {
    this._noiseFloorThreshold = value;
  }
  public resetNoiseFloorThreshold() {
    this._noiseFloorThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noiseFloorThresholdInput() {
    return this._noiseFloorThreshold;
  }

  // nv2_cell_radius - computed: false, optional: true, required: false
  private _nv2CellRadius?: number; 
  public get nv2CellRadius() {
    return this.getNumberAttribute('nv2_cell_radius');
  }
  public set nv2CellRadius(value: number) {
    this._nv2CellRadius = value;
  }
  public resetNv2CellRadius() {
    this._nv2CellRadius = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nv2CellRadiusInput() {
    return this._nv2CellRadius;
  }

  // nv2_downlink_ratio - computed: false, optional: true, required: false
  private _nv2DownlinkRatio?: number; 
  public get nv2DownlinkRatio() {
    return this.getNumberAttribute('nv2_downlink_ratio');
  }
  public set nv2DownlinkRatio(value: number) {
    this._nv2DownlinkRatio = value;
  }
  public resetNv2DownlinkRatio() {
    this._nv2DownlinkRatio = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nv2DownlinkRatioInput() {
    return this._nv2DownlinkRatio;
  }

  // nv2_mode - computed: false, optional: true, required: false
  private _nv2Mode?: string; 
  public get nv2Mode() {
    return this.getStringAttribute('nv2_mode');
  }
  public set nv2Mode(value: string) {
    this._nv2Mode = value;
  }
  public resetNv2Mode() {
    this._nv2Mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nv2ModeInput() {
    return this._nv2Mode;
  }

  // nv2_noise_floor_offset - computed: false, optional: true, required: false
  private _nv2NoiseFloorOffset?: string; 
  public get nv2NoiseFloorOffset() {
    return this.getStringAttribute('nv2_noise_floor_offset');
  }
  public set nv2NoiseFloorOffset(value: string) {
    this._nv2NoiseFloorOffset = value;
  }
  public resetNv2NoiseFloorOffset() {
    this._nv2NoiseFloorOffset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nv2NoiseFloorOffsetInput() {
    return this._nv2NoiseFloorOffset;
  }

  // nv2_preshared_key - computed: false, optional: true, required: false
  private _nv2PresharedKey?: string; 
  public get nv2PresharedKey() {
    return this.getStringAttribute('nv2_preshared_key');
  }
  public set nv2PresharedKey(value: string) {
    this._nv2PresharedKey = value;
  }
  public resetNv2PresharedKey() {
    this._nv2PresharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nv2PresharedKeyInput() {
    return this._nv2PresharedKey;
  }

  // nv2_qos - computed: false, optional: true, required: false
  private _nv2Qos?: string; 
  public get nv2Qos() {
    return this.getStringAttribute('nv2_qos');
  }
  public set nv2Qos(value: string) {
    this._nv2Qos = value;
  }
  public resetNv2Qos() {
    this._nv2Qos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nv2QosInput() {
    return this._nv2Qos;
  }

  // nv2_queue_count - computed: false, optional: true, required: false
  private _nv2QueueCount?: number; 
  public get nv2QueueCount() {
    return this.getNumberAttribute('nv2_queue_count');
  }
  public set nv2QueueCount(value: number) {
    this._nv2QueueCount = value;
  }
  public resetNv2QueueCount() {
    this._nv2QueueCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nv2QueueCountInput() {
    return this._nv2QueueCount;
  }

  // nv2_security - computed: false, optional: true, required: false
  private _nv2Security?: string; 
  public get nv2Security() {
    return this.getStringAttribute('nv2_security');
  }
  public set nv2Security(value: string) {
    this._nv2Security = value;
  }
  public resetNv2Security() {
    this._nv2Security = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nv2SecurityInput() {
    return this._nv2Security;
  }

  // nv2_sync_secret - computed: false, optional: true, required: false
  private _nv2SyncSecret?: string; 
  public get nv2SyncSecret() {
    return this.getStringAttribute('nv2_sync_secret');
  }
  public set nv2SyncSecret(value: string) {
    this._nv2SyncSecret = value;
  }
  public resetNv2SyncSecret() {
    this._nv2SyncSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nv2SyncSecretInput() {
    return this._nv2SyncSecret;
  }

  // on_fail_retry_time - computed: false, optional: true, required: false
  private _onFailRetryTime?: string; 
  public get onFailRetryTime() {
    return this.getStringAttribute('on_fail_retry_time');
  }
  public set onFailRetryTime(value: string) {
    this._onFailRetryTime = value;
  }
  public resetOnFailRetryTime() {
    this._onFailRetryTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onFailRetryTimeInput() {
    return this._onFailRetryTime;
  }

  // periodic_calibration - computed: false, optional: true, required: false
  private _periodicCalibration?: string; 
  public get periodicCalibration() {
    return this.getStringAttribute('periodic_calibration');
  }
  public set periodicCalibration(value: string) {
    this._periodicCalibration = value;
  }
  public resetPeriodicCalibration() {
    this._periodicCalibration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodicCalibrationInput() {
    return this._periodicCalibration;
  }

  // periodic_calibration_interval - computed: false, optional: true, required: false
  private _periodicCalibrationInterval?: number; 
  public get periodicCalibrationInterval() {
    return this.getNumberAttribute('periodic_calibration_interval');
  }
  public set periodicCalibrationInterval(value: number) {
    this._periodicCalibrationInterval = value;
  }
  public resetPeriodicCalibrationInterval() {
    this._periodicCalibrationInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get periodicCalibrationIntervalInput() {
    return this._periodicCalibrationInterval;
  }

  // preamble_mode - computed: false, optional: true, required: false
  private _preambleMode?: string; 
  public get preambleMode() {
    return this.getStringAttribute('preamble_mode');
  }
  public set preambleMode(value: string) {
    this._preambleMode = value;
  }
  public resetPreambleMode() {
    this._preambleMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preambleModeInput() {
    return this._preambleMode;
  }

  // prism_cardtype - computed: false, optional: true, required: false
  private _prismCardtype?: string; 
  public get prismCardtype() {
    return this.getStringAttribute('prism_cardtype');
  }
  public set prismCardtype(value: string) {
    this._prismCardtype = value;
  }
  public resetPrismCardtype() {
    this._prismCardtype = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prismCardtypeInput() {
    return this._prismCardtype;
  }

  // proprietary_extensions - computed: false, optional: true, required: false
  private _proprietaryExtensions?: string; 
  public get proprietaryExtensions() {
    return this.getStringAttribute('proprietary_extensions');
  }
  public set proprietaryExtensions(value: string) {
    this._proprietaryExtensions = value;
  }
  public resetProprietaryExtensions() {
    this._proprietaryExtensions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proprietaryExtensionsInput() {
    return this._proprietaryExtensions;
  }

  // radio_name - computed: true, optional: false, required: false
  public get radioName() {
    return this.getStringAttribute('radio_name');
  }

  // rate_selection - computed: false, optional: true, required: false
  private _rateSelection?: string; 
  public get rateSelection() {
    return this.getStringAttribute('rate_selection');
  }
  public set rateSelection(value: string) {
    this._rateSelection = value;
  }
  public resetRateSelection() {
    this._rateSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateSelectionInput() {
    return this._rateSelection;
  }

  // rate_set - computed: false, optional: true, required: false
  private _rateSet?: string; 
  public get rateSet() {
    return this.getStringAttribute('rate_set');
  }
  public set rateSet(value: string) {
    this._rateSet = value;
  }
  public resetRateSet() {
    this._rateSet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateSetInput() {
    return this._rateSet;
  }

  // running - computed: true, optional: false, required: false
  public get running() {
    return this.getBooleanAttribute('running');
  }

  // rx_chains - computed: false, optional: true, required: false
  private _rxChains?: number[]; 
  public get rxChains() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('rx_chains')));
  }
  public set rxChains(value: number[]) {
    this._rxChains = value;
  }
  public resetRxChains() {
    this._rxChains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxChainsInput() {
    return this._rxChains;
  }

  // scan_list - computed: false, optional: true, required: false
  private _scanList?: string; 
  public get scanList() {
    return this.getStringAttribute('scan_list');
  }
  public set scanList(value: string) {
    this._scanList = value;
  }
  public resetScanList() {
    this._scanList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scanListInput() {
    return this._scanList;
  }

  // secondary_frequency - computed: false, optional: true, required: false
  private _secondaryFrequency?: string; 
  public get secondaryFrequency() {
    return this.getStringAttribute('secondary_frequency');
  }
  public set secondaryFrequency(value: string) {
    this._secondaryFrequency = value;
  }
  public resetSecondaryFrequency() {
    this._secondaryFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryFrequencyInput() {
    return this._secondaryFrequency;
  }

  // security_profile - computed: false, optional: true, required: false
  private _securityProfile?: string; 
  public get securityProfile() {
    return this.getStringAttribute('security_profile');
  }
  public set securityProfile(value: string) {
    this._securityProfile = value;
  }
  public resetSecurityProfile() {
    this._securityProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileInput() {
    return this._securityProfile;
  }

  // skip_dfs_channels - computed: false, optional: true, required: false
  private _skipDfsChannels?: string; 
  public get skipDfsChannels() {
    return this.getStringAttribute('skip_dfs_channels');
  }
  public set skipDfsChannels(value: string) {
    this._skipDfsChannels = value;
  }
  public resetSkipDfsChannels() {
    this._skipDfsChannels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipDfsChannelsInput() {
    return this._skipDfsChannels;
  }

  // ssid - computed: false, optional: true, required: false
  private _ssid?: string; 
  public get ssid() {
    return this.getStringAttribute('ssid');
  }
  public set ssid(value: string) {
    this._ssid = value;
  }
  public resetSsid() {
    this._ssid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssidInput() {
    return this._ssid;
  }

  // station_bridge_clone_mac - computed: false, optional: true, required: false
  private _stationBridgeCloneMac?: string; 
  public get stationBridgeCloneMac() {
    return this.getStringAttribute('station_bridge_clone_mac');
  }
  public set stationBridgeCloneMac(value: string) {
    this._stationBridgeCloneMac = value;
  }
  public resetStationBridgeCloneMac() {
    this._stationBridgeCloneMac = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stationBridgeCloneMacInput() {
    return this._stationBridgeCloneMac;
  }

  // station_roaming - computed: false, optional: true, required: false
  private _stationRoaming?: string; 
  public get stationRoaming() {
    return this.getStringAttribute('station_roaming');
  }
  public set stationRoaming(value: string) {
    this._stationRoaming = value;
  }
  public resetStationRoaming() {
    this._stationRoaming = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stationRoamingInput() {
    return this._stationRoaming;
  }

  // supported_rates_ag - computed: false, optional: true, required: false
  private _supportedRatesAg?: string; 
  public get supportedRatesAg() {
    return this.getStringAttribute('supported_rates_ag');
  }
  public set supportedRatesAg(value: string) {
    this._supportedRatesAg = value;
  }
  public resetSupportedRatesAg() {
    this._supportedRatesAg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedRatesAgInput() {
    return this._supportedRatesAg;
  }

  // supported_rates_b - computed: false, optional: true, required: false
  private _supportedRatesB?: string; 
  public get supportedRatesB() {
    return this.getStringAttribute('supported_rates_b');
  }
  public set supportedRatesB(value: string) {
    this._supportedRatesB = value;
  }
  public resetSupportedRatesB() {
    this._supportedRatesB = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportedRatesBInput() {
    return this._supportedRatesB;
  }

  // tdma_period_size - computed: false, optional: true, required: false
  private _tdmaPeriodSize?: number; 
  public get tdmaPeriodSize() {
    return this.getNumberAttribute('tdma_period_size');
  }
  public set tdmaPeriodSize(value: number) {
    this._tdmaPeriodSize = value;
  }
  public resetTdmaPeriodSize() {
    this._tdmaPeriodSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tdmaPeriodSizeInput() {
    return this._tdmaPeriodSize;
  }

  // tx_chains - computed: false, optional: true, required: false
  private _txChains?: number[]; 
  public get txChains() {
    return cdktf.Token.asNumberList(cdktf.Fn.tolist(this.getNumberListAttribute('tx_chains')));
  }
  public set txChains(value: number[]) {
    this._txChains = value;
  }
  public resetTxChains() {
    this._txChains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txChainsInput() {
    return this._txChains;
  }

  // tx_power - computed: false, optional: true, required: false
  private _txPower?: number; 
  public get txPower() {
    return this.getNumberAttribute('tx_power');
  }
  public set txPower(value: number) {
    this._txPower = value;
  }
  public resetTxPower() {
    this._txPower = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txPowerInput() {
    return this._txPower;
  }

  // tx_power_mode - computed: false, optional: true, required: false
  private _txPowerMode?: string; 
  public get txPowerMode() {
    return this.getStringAttribute('tx_power_mode');
  }
  public set txPowerMode(value: string) {
    this._txPowerMode = value;
  }
  public resetTxPowerMode() {
    this._txPowerMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txPowerModeInput() {
    return this._txPowerMode;
  }

  // update_stats_interval - computed: false, optional: true, required: false
  private _updateStatsInterval?: string; 
  public get updateStatsInterval() {
    return this.getStringAttribute('update_stats_interval');
  }
  public set updateStatsInterval(value: string) {
    this._updateStatsInterval = value;
  }
  public resetUpdateStatsInterval() {
    this._updateStatsInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateStatsIntervalInput() {
    return this._updateStatsInterval;
  }

  // vht_basic_mcs - computed: false, optional: true, required: false
  private _vhtBasicMcs?: string; 
  public get vhtBasicMcs() {
    return this.getStringAttribute('vht_basic_mcs');
  }
  public set vhtBasicMcs(value: string) {
    this._vhtBasicMcs = value;
  }
  public resetVhtBasicMcs() {
    this._vhtBasicMcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhtBasicMcsInput() {
    return this._vhtBasicMcs;
  }

  // vht_supported_mcs - computed: false, optional: true, required: false
  private _vhtSupportedMcs?: string; 
  public get vhtSupportedMcs() {
    return this.getStringAttribute('vht_supported_mcs');
  }
  public set vhtSupportedMcs(value: string) {
    this._vhtSupportedMcs = value;
  }
  public resetVhtSupportedMcs() {
    this._vhtSupportedMcs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vhtSupportedMcsInput() {
    return this._vhtSupportedMcs;
  }

  // vlan_id - computed: false, optional: true, required: false
  private _vlanId?: number; 
  public get vlanId() {
    return this.getNumberAttribute('vlan_id');
  }
  public set vlanId(value: number) {
    this._vlanId = value;
  }
  public resetVlanId() {
    this._vlanId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanIdInput() {
    return this._vlanId;
  }

  // vlan_mode - computed: false, optional: true, required: false
  private _vlanMode?: string; 
  public get vlanMode() {
    return this.getStringAttribute('vlan_mode');
  }
  public set vlanMode(value: string) {
    this._vlanMode = value;
  }
  public resetVlanMode() {
    this._vlanMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vlanModeInput() {
    return this._vlanMode;
  }

  // wds_cost_range - computed: false, optional: true, required: false
  private _wdsCostRange?: string; 
  public get wdsCostRange() {
    return this.getStringAttribute('wds_cost_range');
  }
  public set wdsCostRange(value: string) {
    this._wdsCostRange = value;
  }
  public resetWdsCostRange() {
    this._wdsCostRange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wdsCostRangeInput() {
    return this._wdsCostRange;
  }

  // wds_default_bridge - computed: false, optional: true, required: false
  private _wdsDefaultBridge?: string; 
  public get wdsDefaultBridge() {
    return this.getStringAttribute('wds_default_bridge');
  }
  public set wdsDefaultBridge(value: string) {
    this._wdsDefaultBridge = value;
  }
  public resetWdsDefaultBridge() {
    this._wdsDefaultBridge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wdsDefaultBridgeInput() {
    return this._wdsDefaultBridge;
  }

  // wds_default_cost - computed: false, optional: true, required: false
  private _wdsDefaultCost?: number; 
  public get wdsDefaultCost() {
    return this.getNumberAttribute('wds_default_cost');
  }
  public set wdsDefaultCost(value: number) {
    this._wdsDefaultCost = value;
  }
  public resetWdsDefaultCost() {
    this._wdsDefaultCost = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wdsDefaultCostInput() {
    return this._wdsDefaultCost;
  }

  // wds_ignore_ssid - computed: false, optional: true, required: false
  private _wdsIgnoreSsid?: boolean | cdktf.IResolvable; 
  public get wdsIgnoreSsid() {
    return this.getBooleanAttribute('wds_ignore_ssid');
  }
  public set wdsIgnoreSsid(value: boolean | cdktf.IResolvable) {
    this._wdsIgnoreSsid = value;
  }
  public resetWdsIgnoreSsid() {
    this._wdsIgnoreSsid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wdsIgnoreSsidInput() {
    return this._wdsIgnoreSsid;
  }

  // wds_mode - computed: false, optional: true, required: false
  private _wdsMode?: string; 
  public get wdsMode() {
    return this.getStringAttribute('wds_mode');
  }
  public set wdsMode(value: string) {
    this._wdsMode = value;
  }
  public resetWdsMode() {
    this._wdsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wdsModeInput() {
    return this._wdsMode;
  }

  // wireless_protocol - computed: false, optional: true, required: false
  private _wirelessProtocol?: string; 
  public get wirelessProtocol() {
    return this.getStringAttribute('wireless_protocol');
  }
  public set wirelessProtocol(value: string) {
    this._wirelessProtocol = value;
  }
  public resetWirelessProtocol() {
    this._wirelessProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wirelessProtocolInput() {
    return this._wirelessProtocol;
  }

  // wmm_support - computed: false, optional: true, required: false
  private _wmmSupport?: string; 
  public get wmmSupport() {
    return this.getStringAttribute('wmm_support');
  }
  public set wmmSupport(value: string) {
    this._wmmSupport = value;
  }
  public resetWmmSupport() {
    this._wmmSupport = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wmmSupportInput() {
    return this._wmmSupport;
  }

  // wps_mode - computed: false, optional: true, required: false
  private _wpsMode?: string; 
  public get wpsMode() {
    return this.getStringAttribute('wps_mode');
  }
  public set wpsMode(value: string) {
    this._wpsMode = value;
  }
  public resetWpsMode() {
    this._wpsMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wpsModeInput() {
    return this._wpsMode;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      ___skip___: cdktf.stringToTerraform(this._skip),
      ___ts___: cdktf.stringToTerraform(this._ts),
      ___unset___: cdktf.stringToTerraform(this._unset),
      adaptive_noise_immunity: cdktf.stringToTerraform(this._adaptiveNoiseImmunity),
      allow_sharedkey: cdktf.booleanToTerraform(this._allowSharedkey),
      ampdu_priorities: cdktf.listMapper(cdktf.numberToTerraform, false)(this._ampduPriorities),
      amsdu_limit: cdktf.numberToTerraform(this._amsduLimit),
      amsdu_threshold: cdktf.numberToTerraform(this._amsduThreshold),
      antenna_gain: cdktf.numberToTerraform(this._antennaGain),
      antenna_mode: cdktf.stringToTerraform(this._antennaMode),
      area: cdktf.stringToTerraform(this._area),
      arp: cdktf.stringToTerraform(this._arp),
      arp_timeout: cdktf.stringToTerraform(this._arpTimeout),
      band: cdktf.stringToTerraform(this._band),
      basic_rates_ag: cdktf.listMapper(cdktf.stringToTerraform, false)(this._basicRatesAg),
      basic_rates_b: cdktf.listMapper(cdktf.stringToTerraform, false)(this._basicRatesB),
      bridge_mode: cdktf.stringToTerraform(this._bridgeMode),
      burst_time: cdktf.stringToTerraform(this._burstTime),
      channel_width: cdktf.stringToTerraform(this._channelWidth),
      comment: cdktf.stringToTerraform(this._comment),
      compression: cdktf.booleanToTerraform(this._compression),
      country: cdktf.stringToTerraform(this._country),
      default_ap_tx_limit: cdktf.numberToTerraform(this._defaultApTxLimit),
      default_authentication: cdktf.booleanToTerraform(this._defaultAuthentication),
      default_client_tx_limit: cdktf.numberToTerraform(this._defaultClientTxLimit),
      default_forwarding: cdktf.booleanToTerraform(this._defaultForwarding),
      disable_running_check: cdktf.booleanToTerraform(this._disableRunningCheck),
      disabled: cdktf.booleanToTerraform(this._disabled),
      disconnect_timeout: cdktf.stringToTerraform(this._disconnectTimeout),
      distance: cdktf.stringToTerraform(this._distance),
      frame_lifetime: cdktf.numberToTerraform(this._frameLifetime),
      frequency: cdktf.stringToTerraform(this._frequency),
      frequency_mode: cdktf.stringToTerraform(this._frequencyMode),
      frequency_offset: cdktf.numberToTerraform(this._frequencyOffset),
      guard_interval: cdktf.stringToTerraform(this._guardInterval),
      hide_ssid: cdktf.booleanToTerraform(this._hideSsid),
      ht_basic_mcs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._htBasicMcs),
      ht_supported_mcs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._htSupportedMcs),
      hw_fragmentation_threshold: cdktf.stringToTerraform(this._hwFragmentationThreshold),
      hw_protection_mode: cdktf.stringToTerraform(this._hwProtectionMode),
      hw_protection_threshold: cdktf.numberToTerraform(this._hwProtectionThreshold),
      hw_retries: cdktf.numberToTerraform(this._hwRetries),
      id: cdktf.stringToTerraform(this._id),
      installation: cdktf.stringToTerraform(this._installation),
      interworking_profile: cdktf.stringToTerraform(this._interworkingProfile),
      keepalive_frames: cdktf.stringToTerraform(this._keepaliveFrames),
      l2mtu: cdktf.numberToTerraform(this._l2Mtu),
      mac_address: cdktf.stringToTerraform(this._macAddress),
      master_interface: cdktf.stringToTerraform(this._masterInterface),
      max_station_count: cdktf.numberToTerraform(this._maxStationCount),
      mode: cdktf.stringToTerraform(this._mode),
      mtu: cdktf.stringToTerraform(this._mtu),
      multicast_buffering: cdktf.stringToTerraform(this._multicastBuffering),
      multicast_helper: cdktf.stringToTerraform(this._multicastHelper),
      name: cdktf.stringToTerraform(this._name),
      noise_floor_threshold: cdktf.stringToTerraform(this._noiseFloorThreshold),
      nv2_cell_radius: cdktf.numberToTerraform(this._nv2CellRadius),
      nv2_downlink_ratio: cdktf.numberToTerraform(this._nv2DownlinkRatio),
      nv2_mode: cdktf.stringToTerraform(this._nv2Mode),
      nv2_noise_floor_offset: cdktf.stringToTerraform(this._nv2NoiseFloorOffset),
      nv2_preshared_key: cdktf.stringToTerraform(this._nv2PresharedKey),
      nv2_qos: cdktf.stringToTerraform(this._nv2Qos),
      nv2_queue_count: cdktf.numberToTerraform(this._nv2QueueCount),
      nv2_security: cdktf.stringToTerraform(this._nv2Security),
      nv2_sync_secret: cdktf.stringToTerraform(this._nv2SyncSecret),
      on_fail_retry_time: cdktf.stringToTerraform(this._onFailRetryTime),
      periodic_calibration: cdktf.stringToTerraform(this._periodicCalibration),
      periodic_calibration_interval: cdktf.numberToTerraform(this._periodicCalibrationInterval),
      preamble_mode: cdktf.stringToTerraform(this._preambleMode),
      prism_cardtype: cdktf.stringToTerraform(this._prismCardtype),
      proprietary_extensions: cdktf.stringToTerraform(this._proprietaryExtensions),
      rate_selection: cdktf.stringToTerraform(this._rateSelection),
      rate_set: cdktf.stringToTerraform(this._rateSet),
      rx_chains: cdktf.listMapper(cdktf.numberToTerraform, false)(this._rxChains),
      scan_list: cdktf.stringToTerraform(this._scanList),
      secondary_frequency: cdktf.stringToTerraform(this._secondaryFrequency),
      security_profile: cdktf.stringToTerraform(this._securityProfile),
      skip_dfs_channels: cdktf.stringToTerraform(this._skipDfsChannels),
      ssid: cdktf.stringToTerraform(this._ssid),
      station_bridge_clone_mac: cdktf.stringToTerraform(this._stationBridgeCloneMac),
      station_roaming: cdktf.stringToTerraform(this._stationRoaming),
      supported_rates_ag: cdktf.stringToTerraform(this._supportedRatesAg),
      supported_rates_b: cdktf.stringToTerraform(this._supportedRatesB),
      tdma_period_size: cdktf.numberToTerraform(this._tdmaPeriodSize),
      tx_chains: cdktf.listMapper(cdktf.numberToTerraform, false)(this._txChains),
      tx_power: cdktf.numberToTerraform(this._txPower),
      tx_power_mode: cdktf.stringToTerraform(this._txPowerMode),
      update_stats_interval: cdktf.stringToTerraform(this._updateStatsInterval),
      vht_basic_mcs: cdktf.stringToTerraform(this._vhtBasicMcs),
      vht_supported_mcs: cdktf.stringToTerraform(this._vhtSupportedMcs),
      vlan_id: cdktf.numberToTerraform(this._vlanId),
      vlan_mode: cdktf.stringToTerraform(this._vlanMode),
      wds_cost_range: cdktf.stringToTerraform(this._wdsCostRange),
      wds_default_bridge: cdktf.stringToTerraform(this._wdsDefaultBridge),
      wds_default_cost: cdktf.numberToTerraform(this._wdsDefaultCost),
      wds_ignore_ssid: cdktf.booleanToTerraform(this._wdsIgnoreSsid),
      wds_mode: cdktf.stringToTerraform(this._wdsMode),
      wireless_protocol: cdktf.stringToTerraform(this._wirelessProtocol),
      wmm_support: cdktf.stringToTerraform(this._wmmSupport),
      wps_mode: cdktf.stringToTerraform(this._wpsMode),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ___skip___: {
        value: cdktf.stringToHclTerraform(this._skip),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ___ts___: {
        value: cdktf.stringToHclTerraform(this._ts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ___unset___: {
        value: cdktf.stringToHclTerraform(this._unset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      adaptive_noise_immunity: {
        value: cdktf.stringToHclTerraform(this._adaptiveNoiseImmunity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      allow_sharedkey: {
        value: cdktf.booleanToHclTerraform(this._allowSharedkey),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ampdu_priorities: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._ampduPriorities),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      amsdu_limit: {
        value: cdktf.numberToHclTerraform(this._amsduLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      amsdu_threshold: {
        value: cdktf.numberToHclTerraform(this._amsduThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      antenna_gain: {
        value: cdktf.numberToHclTerraform(this._antennaGain),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      antenna_mode: {
        value: cdktf.stringToHclTerraform(this._antennaMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      area: {
        value: cdktf.stringToHclTerraform(this._area),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp: {
        value: cdktf.stringToHclTerraform(this._arp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_timeout: {
        value: cdktf.stringToHclTerraform(this._arpTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      band: {
        value: cdktf.stringToHclTerraform(this._band),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      basic_rates_ag: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._basicRatesAg),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      basic_rates_b: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._basicRatesB),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      bridge_mode: {
        value: cdktf.stringToHclTerraform(this._bridgeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      burst_time: {
        value: cdktf.stringToHclTerraform(this._burstTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      channel_width: {
        value: cdktf.stringToHclTerraform(this._channelWidth),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comment: {
        value: cdktf.stringToHclTerraform(this._comment),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compression: {
        value: cdktf.booleanToHclTerraform(this._compression),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      country: {
        value: cdktf.stringToHclTerraform(this._country),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_ap_tx_limit: {
        value: cdktf.numberToHclTerraform(this._defaultApTxLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_authentication: {
        value: cdktf.booleanToHclTerraform(this._defaultAuthentication),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      default_client_tx_limit: {
        value: cdktf.numberToHclTerraform(this._defaultClientTxLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      default_forwarding: {
        value: cdktf.booleanToHclTerraform(this._defaultForwarding),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_running_check: {
        value: cdktf.booleanToHclTerraform(this._disableRunningCheck),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disabled: {
        value: cdktf.booleanToHclTerraform(this._disabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disconnect_timeout: {
        value: cdktf.stringToHclTerraform(this._disconnectTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      distance: {
        value: cdktf.stringToHclTerraform(this._distance),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frame_lifetime: {
        value: cdktf.numberToHclTerraform(this._frameLifetime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      frequency: {
        value: cdktf.stringToHclTerraform(this._frequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frequency_mode: {
        value: cdktf.stringToHclTerraform(this._frequencyMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      frequency_offset: {
        value: cdktf.numberToHclTerraform(this._frequencyOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      guard_interval: {
        value: cdktf.stringToHclTerraform(this._guardInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hide_ssid: {
        value: cdktf.booleanToHclTerraform(this._hideSsid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      ht_basic_mcs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._htBasicMcs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ht_supported_mcs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._htSupportedMcs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      hw_fragmentation_threshold: {
        value: cdktf.stringToHclTerraform(this._hwFragmentationThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hw_protection_mode: {
        value: cdktf.stringToHclTerraform(this._hwProtectionMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hw_protection_threshold: {
        value: cdktf.numberToHclTerraform(this._hwProtectionThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hw_retries: {
        value: cdktf.numberToHclTerraform(this._hwRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      installation: {
        value: cdktf.stringToHclTerraform(this._installation),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interworking_profile: {
        value: cdktf.stringToHclTerraform(this._interworkingProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      keepalive_frames: {
        value: cdktf.stringToHclTerraform(this._keepaliveFrames),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      l2mtu: {
        value: cdktf.numberToHclTerraform(this._l2Mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mac_address: {
        value: cdktf.stringToHclTerraform(this._macAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      master_interface: {
        value: cdktf.stringToHclTerraform(this._masterInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_station_count: {
        value: cdktf.numberToHclTerraform(this._maxStationCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mode: {
        value: cdktf.stringToHclTerraform(this._mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.stringToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_buffering: {
        value: cdktf.stringToHclTerraform(this._multicastBuffering),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_helper: {
        value: cdktf.stringToHclTerraform(this._multicastHelper),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      noise_floor_threshold: {
        value: cdktf.stringToHclTerraform(this._noiseFloorThreshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nv2_cell_radius: {
        value: cdktf.numberToHclTerraform(this._nv2CellRadius),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nv2_downlink_ratio: {
        value: cdktf.numberToHclTerraform(this._nv2DownlinkRatio),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nv2_mode: {
        value: cdktf.stringToHclTerraform(this._nv2Mode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nv2_noise_floor_offset: {
        value: cdktf.stringToHclTerraform(this._nv2NoiseFloorOffset),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nv2_preshared_key: {
        value: cdktf.stringToHclTerraform(this._nv2PresharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nv2_qos: {
        value: cdktf.stringToHclTerraform(this._nv2Qos),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nv2_queue_count: {
        value: cdktf.numberToHclTerraform(this._nv2QueueCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      nv2_security: {
        value: cdktf.stringToHclTerraform(this._nv2Security),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      nv2_sync_secret: {
        value: cdktf.stringToHclTerraform(this._nv2SyncSecret),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      on_fail_retry_time: {
        value: cdktf.stringToHclTerraform(this._onFailRetryTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      periodic_calibration: {
        value: cdktf.stringToHclTerraform(this._periodicCalibration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      periodic_calibration_interval: {
        value: cdktf.numberToHclTerraform(this._periodicCalibrationInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      preamble_mode: {
        value: cdktf.stringToHclTerraform(this._preambleMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prism_cardtype: {
        value: cdktf.stringToHclTerraform(this._prismCardtype),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      proprietary_extensions: {
        value: cdktf.stringToHclTerraform(this._proprietaryExtensions),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_selection: {
        value: cdktf.stringToHclTerraform(this._rateSelection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rate_set: {
        value: cdktf.stringToHclTerraform(this._rateSet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rx_chains: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._rxChains),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      scan_list: {
        value: cdktf.stringToHclTerraform(this._scanList),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      secondary_frequency: {
        value: cdktf.stringToHclTerraform(this._secondaryFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      security_profile: {
        value: cdktf.stringToHclTerraform(this._securityProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_dfs_channels: {
        value: cdktf.stringToHclTerraform(this._skipDfsChannels),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssid: {
        value: cdktf.stringToHclTerraform(this._ssid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      station_bridge_clone_mac: {
        value: cdktf.stringToHclTerraform(this._stationBridgeCloneMac),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      station_roaming: {
        value: cdktf.stringToHclTerraform(this._stationRoaming),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supported_rates_ag: {
        value: cdktf.stringToHclTerraform(this._supportedRatesAg),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      supported_rates_b: {
        value: cdktf.stringToHclTerraform(this._supportedRatesB),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tdma_period_size: {
        value: cdktf.numberToHclTerraform(this._tdmaPeriodSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tx_chains: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._txChains),
        isBlock: false,
        type: "set",
        storageClassType: "numberList",
      },
      tx_power: {
        value: cdktf.numberToHclTerraform(this._txPower),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tx_power_mode: {
        value: cdktf.stringToHclTerraform(this._txPowerMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      update_stats_interval: {
        value: cdktf.stringToHclTerraform(this._updateStatsInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vht_basic_mcs: {
        value: cdktf.stringToHclTerraform(this._vhtBasicMcs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vht_supported_mcs: {
        value: cdktf.stringToHclTerraform(this._vhtSupportedMcs),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vlan_id: {
        value: cdktf.numberToHclTerraform(this._vlanId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      vlan_mode: {
        value: cdktf.stringToHclTerraform(this._vlanMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wds_cost_range: {
        value: cdktf.stringToHclTerraform(this._wdsCostRange),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wds_default_bridge: {
        value: cdktf.stringToHclTerraform(this._wdsDefaultBridge),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wds_default_cost: {
        value: cdktf.numberToHclTerraform(this._wdsDefaultCost),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      wds_ignore_ssid: {
        value: cdktf.booleanToHclTerraform(this._wdsIgnoreSsid),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      wds_mode: {
        value: cdktf.stringToHclTerraform(this._wdsMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wireless_protocol: {
        value: cdktf.stringToHclTerraform(this._wirelessProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wmm_support: {
        value: cdktf.stringToHclTerraform(this._wmmSupport),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      wps_mode: {
        value: cdktf.stringToHclTerraform(this._wpsMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
