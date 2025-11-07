// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiscoSecureInternetGatewayFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#description CiscoSecureInternetGatewayFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#device_types CiscoSecureInternetGatewayFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * Interface name: IPsec when present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#interfaces CiscoSecureInternetGatewayFeatureTemplate#interfaces}
  */
  readonly interfaces?: CiscoSecureInternetGatewayFeatureTemplateInterfaces[] | cdktf.IResolvable;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#name CiscoSecureInternetGatewayFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Configure services
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#services CiscoSecureInternetGatewayFeatureTemplate#services}
  */
  readonly services?: CiscoSecureInternetGatewayFeatureTemplateServices[] | cdktf.IResolvable;
  /**
  * Source IP address for Tracker
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#tracker_source_ip CiscoSecureInternetGatewayFeatureTemplate#tracker_source_ip}
  */
  readonly trackerSourceIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#tracker_source_ip_variable CiscoSecureInternetGatewayFeatureTemplate#tracker_source_ip_variable}
  */
  readonly trackerSourceIpVariable?: string;
  /**
  * Tracker configuration
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#trackers CiscoSecureInternetGatewayFeatureTemplate#trackers}
  */
  readonly trackers?: CiscoSecureInternetGatewayFeatureTemplateTrackers[] | cdktf.IResolvable;
  /**
  * List of VPN instances
  *   - Range: `0`-`65527`
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#vpn_id CiscoSecureInternetGatewayFeatureTemplate#vpn_id}
  */
  readonly vpnId?: number;
}
export interface CiscoSecureInternetGatewayFeatureTemplateInterfaces {
  /**
  * Enable Application Tunnel Type
  *   - Choices: `sig`
  *   - Default value: `sig`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#application CiscoSecureInternetGatewayFeatureTemplate#application}
  */
  readonly application?: string;
  /**
  * Auto Tunnel Mode
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#auto_tunnel_mode CiscoSecureInternetGatewayFeatureTemplate#auto_tunnel_mode}
  */
  readonly autoTunnelMode?: boolean | cdktf.IResolvable;
  /**
  * IKE keepalive interval (seconds)
  *   - Range: `0`-`65535`
  *   - Default value: `10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#dead_peer_detection_interval CiscoSecureInternetGatewayFeatureTemplate#dead_peer_detection_interval}
  */
  readonly deadPeerDetectionInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#dead_peer_detection_interval_variable CiscoSecureInternetGatewayFeatureTemplate#dead_peer_detection_interval_variable}
  */
  readonly deadPeerDetectionIntervalVariable?: string;
  /**
  * IKE keepalive retries
  *   - Range: `0`-`255`
  *   - Default value: `3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#dead_peer_detection_retries CiscoSecureInternetGatewayFeatureTemplate#dead_peer_detection_retries}
  */
  readonly deadPeerDetectionRetries?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#dead_peer_detection_retries_variable CiscoSecureInternetGatewayFeatureTemplate#dead_peer_detection_retries_variable}
  */
  readonly deadPeerDetectionRetriesVariable?: string;
  /**
  * Interface description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#description CiscoSecureInternetGatewayFeatureTemplate#description}
  */
  readonly description?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#description_variable CiscoSecureInternetGatewayFeatureTemplate#description_variable}
  */
  readonly descriptionVariable?: string;
  /**
  * IKE identity the IKE preshared secret belongs to
  *   - Choices: `aes256-cbc-sha1`, `aes256-cbc-sha2`, `aes128-cbc-sha1`, `aes128-cbc-sha2`
  *   - Default value: `aes256-cbc-sha1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#ike_ciphersuite CiscoSecureInternetGatewayFeatureTemplate#ike_ciphersuite}
  */
  readonly ikeCiphersuite?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#ike_ciphersuite_variable CiscoSecureInternetGatewayFeatureTemplate#ike_ciphersuite_variable}
  */
  readonly ikeCiphersuiteVariable?: string;
  /**
  * IKE Diffie Hellman Groups
  *   - Choices: `2`, `14`, `15`, `16`
  *   - Default value: `14`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#ike_group CiscoSecureInternetGatewayFeatureTemplate#ike_group}
  */
  readonly ikeGroup?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#ike_group_variable CiscoSecureInternetGatewayFeatureTemplate#ike_group_variable}
  */
  readonly ikeGroupVariable?: string;
  /**
  * Use preshared key to authenticate IKE peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#ike_pre_shared_key CiscoSecureInternetGatewayFeatureTemplate#ike_pre_shared_key}
  */
  readonly ikePreSharedKey?: string;
  /**
  * Use preshared key to authenticate IKE peer
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#ike_pre_shared_key_dynamic CiscoSecureInternetGatewayFeatureTemplate#ike_pre_shared_key_dynamic}
  */
  readonly ikePreSharedKeyDynamic?: boolean | cdktf.IResolvable;
  /**
  * IKE ID for the local endpoint. Input IPv4 address, domain name, or email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#ike_pre_shared_key_local_id CiscoSecureInternetGatewayFeatureTemplate#ike_pre_shared_key_local_id}
  */
  readonly ikePreSharedKeyLocalId?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#ike_pre_shared_key_local_id_variable CiscoSecureInternetGatewayFeatureTemplate#ike_pre_shared_key_local_id_variable}
  */
  readonly ikePreSharedKeyLocalIdVariable?: string;
  /**
  * IKE ID for the remote endpoint. Input IPv4 address, domain name, or email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#ike_pre_shared_key_remote_id CiscoSecureInternetGatewayFeatureTemplate#ike_pre_shared_key_remote_id}
  */
  readonly ikePreSharedKeyRemoteId?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#ike_pre_shared_key_remote_id_variable CiscoSecureInternetGatewayFeatureTemplate#ike_pre_shared_key_remote_id_variable}
  */
  readonly ikePreSharedKeyRemoteIdVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#ike_pre_shared_key_variable CiscoSecureInternetGatewayFeatureTemplate#ike_pre_shared_key_variable}
  */
  readonly ikePreSharedKeyVariable?: string;
  /**
  * IKE rekey interval <300..1209600> seconds
  *   - Range: `300`-`1209600`
  *   - Default value: `14400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#ike_rekey_interval CiscoSecureInternetGatewayFeatureTemplate#ike_rekey_interval}
  */
  readonly ikeRekeyInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#ike_rekey_interval_variable CiscoSecureInternetGatewayFeatureTemplate#ike_rekey_interval_variable}
  */
  readonly ikeRekeyIntervalVariable?: string;
  /**
  * IKE Version <1..2>
  *   - Range: `1`-`2`
  *   - Default value: `2`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#ike_version CiscoSecureInternetGatewayFeatureTemplate#ike_version}
  */
  readonly ikeVersion?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#ike_version_variable CiscoSecureInternetGatewayFeatureTemplate#ike_version_variable}
  */
  readonly ikeVersionVariable?: string;
  /**
  * Unnumbered interface
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#ip_unnumbered CiscoSecureInternetGatewayFeatureTemplate#ip_unnumbered}
  */
  readonly ipUnnumbered?: boolean | cdktf.IResolvable;
  /**
  * IPsec(ESP) encryption and integrity protocol
  *   - Choices: `aes256-cbc-sha1`, `aes256-cbc-sha384`, `aes256-cbc-sha256`, `aes256-cbc-sha512`, `aes256-gcm`, `null-sha1`, `null-sha384`, `null-sha256`, `null-sha512`
  *   - Default value: `aes256-gcm`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#ipsec_ciphersuite CiscoSecureInternetGatewayFeatureTemplate#ipsec_ciphersuite}
  */
  readonly ipsecCiphersuite?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#ipsec_ciphersuite_variable CiscoSecureInternetGatewayFeatureTemplate#ipsec_ciphersuite_variable}
  */
  readonly ipsecCiphersuiteVariable?: string;
  /**
  * IPsec perfect forward secrecy settings
  *   - Choices: `group-2`, `group-14`, `group-15`, `group-16`, `none`
  *   - Default value: `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#ipsec_perfect_forward_secrecy CiscoSecureInternetGatewayFeatureTemplate#ipsec_perfect_forward_secrecy}
  */
  readonly ipsecPerfectForwardSecrecy?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#ipsec_perfect_forward_secrecy_variable CiscoSecureInternetGatewayFeatureTemplate#ipsec_perfect_forward_secrecy_variable}
  */
  readonly ipsecPerfectForwardSecrecyVariable?: string;
  /**
  * IPsec rekey interval <300..1209600> seconds
  *   - Range: `300`-`1209600`
  *   - Default value: `3600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#ipsec_rekey_interval CiscoSecureInternetGatewayFeatureTemplate#ipsec_rekey_interval}
  */
  readonly ipsecRekeyInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#ipsec_rekey_interval_variable CiscoSecureInternetGatewayFeatureTemplate#ipsec_rekey_interval_variable}
  */
  readonly ipsecRekeyIntervalVariable?: string;
  /**
  * Replay window size 32..8192 (must be a power of 2)
  *   - Range: `64`-`4096`
  *   - Default value: `512`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#ipsec_replay_window CiscoSecureInternetGatewayFeatureTemplate#ipsec_replay_window}
  */
  readonly ipsecReplayWindow?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#ipsec_replay_window_variable CiscoSecureInternetGatewayFeatureTemplate#ipsec_replay_window_variable}
  */
  readonly ipsecReplayWindowVariable?: string;
  /**
  * Assign IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#ipv4_address CiscoSecureInternetGatewayFeatureTemplate#ipv4_address}
  */
  readonly ipv4Address?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#ipv4_address_variable CiscoSecureInternetGatewayFeatureTemplate#ipv4_address_variable}
  */
  readonly ipv4AddressVariable?: string;
  /**
  * Interface MTU <576..2000>, in bytes
  *   - Range: `576`-`2000`
  *   - Default value: `1400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#mtu CiscoSecureInternetGatewayFeatureTemplate#mtu}
  */
  readonly mtu?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#mtu_variable CiscoSecureInternetGatewayFeatureTemplate#mtu_variable}
  */
  readonly mtuVariable?: string;
  /**
  * Interface name: IPsec when present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#name CiscoSecureInternetGatewayFeatureTemplate#name}
  */
  readonly name?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#name_variable CiscoSecureInternetGatewayFeatureTemplate#name_variable}
  */
  readonly nameVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#optional CiscoSecureInternetGatewayFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Administrative state
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#shutdown CiscoSecureInternetGatewayFeatureTemplate#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * SIG Tunnel Provider
  *   - Choices: `secure-internet-gateway-umbrella`, `secure-internet-gateway-zscaler`, `secure-internet-gateway-other`
  *   - Default value: `secure-internet-gateway-umbrella`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#sig_provider CiscoSecureInternetGatewayFeatureTemplate#sig_provider}
  */
  readonly sigProvider?: string;
  /**
  * TCP MSS on SYN packets, in bytes
  *   - Range: `500`-`1460`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#tcp_mss CiscoSecureInternetGatewayFeatureTemplate#tcp_mss}
  */
  readonly tcpMss?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#tcp_mss_variable CiscoSecureInternetGatewayFeatureTemplate#tcp_mss_variable}
  */
  readonly tcpMssVariable?: string;
  /**
  * Enable/disable SIG tracking
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#track_enable CiscoSecureInternetGatewayFeatureTemplate#track_enable}
  */
  readonly trackEnable?: boolean | cdktf.IResolvable;
  /**
  * Enable tracker for this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#tracker CiscoSecureInternetGatewayFeatureTemplate#tracker}
  */
  readonly tracker?: string;
  /**
  * SIG Tunnel Data Center
  *   - Choices: `primary-dc`, `secondary-dc`
  *   - Default value: `primary-dc`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#tunnel_dc_preference CiscoSecureInternetGatewayFeatureTemplate#tunnel_dc_preference}
  */
  readonly tunnelDcPreference?: string;
  /**
  * Tunnel destination IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#tunnel_destination CiscoSecureInternetGatewayFeatureTemplate#tunnel_destination}
  */
  readonly tunnelDestination?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#tunnel_destination_variable CiscoSecureInternetGatewayFeatureTemplate#tunnel_destination_variable}
  */
  readonly tunnelDestinationVariable?: string;
  /**
  * Public IP required to setup GRE tunnel to Zscaler
  *   - Default value: `Auto`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#tunnel_public_ip CiscoSecureInternetGatewayFeatureTemplate#tunnel_public_ip}
  */
  readonly tunnelPublicIp?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#tunnel_public_ip_variable CiscoSecureInternetGatewayFeatureTemplate#tunnel_public_ip_variable}
  */
  readonly tunnelPublicIpVariable?: string;
  /**
  * <1..32 characters> Interface name: ge0/<0-..> or ge0/<0-..>.vlanid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#tunnel_route_via CiscoSecureInternetGatewayFeatureTemplate#tunnel_route_via}
  */
  readonly tunnelRouteVia?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#tunnel_route_via_variable CiscoSecureInternetGatewayFeatureTemplate#tunnel_route_via_variable}
  */
  readonly tunnelRouteViaVariable?: string;
  /**
  * Tunnel source IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#tunnel_source CiscoSecureInternetGatewayFeatureTemplate#tunnel_source}
  */
  readonly tunnelSource?: string;
  /**
  * <1..32 characters> Interface name: ge0/<0-..> or ge0/<0-..>.vlanid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#tunnel_source_interface CiscoSecureInternetGatewayFeatureTemplate#tunnel_source_interface}
  */
  readonly tunnelSourceInterface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#tunnel_source_interface_variable CiscoSecureInternetGatewayFeatureTemplate#tunnel_source_interface_variable}
  */
  readonly tunnelSourceInterfaceVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#tunnel_source_variable CiscoSecureInternetGatewayFeatureTemplate#tunnel_source_variable}
  */
  readonly tunnelSourceVariable?: string;
}

export function ciscoSecureInternetGatewayFeatureTemplateInterfacesToTerraform(struct?: CiscoSecureInternetGatewayFeatureTemplateInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application: cdktf.stringToTerraform(struct!.application),
    auto_tunnel_mode: cdktf.booleanToTerraform(struct!.autoTunnelMode),
    dead_peer_detection_interval: cdktf.numberToTerraform(struct!.deadPeerDetectionInterval),
    dead_peer_detection_interval_variable: cdktf.stringToTerraform(struct!.deadPeerDetectionIntervalVariable),
    dead_peer_detection_retries: cdktf.numberToTerraform(struct!.deadPeerDetectionRetries),
    dead_peer_detection_retries_variable: cdktf.stringToTerraform(struct!.deadPeerDetectionRetriesVariable),
    description: cdktf.stringToTerraform(struct!.description),
    description_variable: cdktf.stringToTerraform(struct!.descriptionVariable),
    ike_ciphersuite: cdktf.stringToTerraform(struct!.ikeCiphersuite),
    ike_ciphersuite_variable: cdktf.stringToTerraform(struct!.ikeCiphersuiteVariable),
    ike_group: cdktf.stringToTerraform(struct!.ikeGroup),
    ike_group_variable: cdktf.stringToTerraform(struct!.ikeGroupVariable),
    ike_pre_shared_key: cdktf.stringToTerraform(struct!.ikePreSharedKey),
    ike_pre_shared_key_dynamic: cdktf.booleanToTerraform(struct!.ikePreSharedKeyDynamic),
    ike_pre_shared_key_local_id: cdktf.stringToTerraform(struct!.ikePreSharedKeyLocalId),
    ike_pre_shared_key_local_id_variable: cdktf.stringToTerraform(struct!.ikePreSharedKeyLocalIdVariable),
    ike_pre_shared_key_remote_id: cdktf.stringToTerraform(struct!.ikePreSharedKeyRemoteId),
    ike_pre_shared_key_remote_id_variable: cdktf.stringToTerraform(struct!.ikePreSharedKeyRemoteIdVariable),
    ike_pre_shared_key_variable: cdktf.stringToTerraform(struct!.ikePreSharedKeyVariable),
    ike_rekey_interval: cdktf.numberToTerraform(struct!.ikeRekeyInterval),
    ike_rekey_interval_variable: cdktf.stringToTerraform(struct!.ikeRekeyIntervalVariable),
    ike_version: cdktf.numberToTerraform(struct!.ikeVersion),
    ike_version_variable: cdktf.stringToTerraform(struct!.ikeVersionVariable),
    ip_unnumbered: cdktf.booleanToTerraform(struct!.ipUnnumbered),
    ipsec_ciphersuite: cdktf.stringToTerraform(struct!.ipsecCiphersuite),
    ipsec_ciphersuite_variable: cdktf.stringToTerraform(struct!.ipsecCiphersuiteVariable),
    ipsec_perfect_forward_secrecy: cdktf.stringToTerraform(struct!.ipsecPerfectForwardSecrecy),
    ipsec_perfect_forward_secrecy_variable: cdktf.stringToTerraform(struct!.ipsecPerfectForwardSecrecyVariable),
    ipsec_rekey_interval: cdktf.numberToTerraform(struct!.ipsecRekeyInterval),
    ipsec_rekey_interval_variable: cdktf.stringToTerraform(struct!.ipsecRekeyIntervalVariable),
    ipsec_replay_window: cdktf.numberToTerraform(struct!.ipsecReplayWindow),
    ipsec_replay_window_variable: cdktf.stringToTerraform(struct!.ipsecReplayWindowVariable),
    ipv4_address: cdktf.stringToTerraform(struct!.ipv4Address),
    ipv4_address_variable: cdktf.stringToTerraform(struct!.ipv4AddressVariable),
    mtu: cdktf.numberToTerraform(struct!.mtu),
    mtu_variable: cdktf.stringToTerraform(struct!.mtuVariable),
    name: cdktf.stringToTerraform(struct!.name),
    name_variable: cdktf.stringToTerraform(struct!.nameVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    shutdown: cdktf.booleanToTerraform(struct!.shutdown),
    sig_provider: cdktf.stringToTerraform(struct!.sigProvider),
    tcp_mss: cdktf.numberToTerraform(struct!.tcpMss),
    tcp_mss_variable: cdktf.stringToTerraform(struct!.tcpMssVariable),
    track_enable: cdktf.booleanToTerraform(struct!.trackEnable),
    tracker: cdktf.stringToTerraform(struct!.tracker),
    tunnel_dc_preference: cdktf.stringToTerraform(struct!.tunnelDcPreference),
    tunnel_destination: cdktf.stringToTerraform(struct!.tunnelDestination),
    tunnel_destination_variable: cdktf.stringToTerraform(struct!.tunnelDestinationVariable),
    tunnel_public_ip: cdktf.stringToTerraform(struct!.tunnelPublicIp),
    tunnel_public_ip_variable: cdktf.stringToTerraform(struct!.tunnelPublicIpVariable),
    tunnel_route_via: cdktf.stringToTerraform(struct!.tunnelRouteVia),
    tunnel_route_via_variable: cdktf.stringToTerraform(struct!.tunnelRouteViaVariable),
    tunnel_source: cdktf.stringToTerraform(struct!.tunnelSource),
    tunnel_source_interface: cdktf.stringToTerraform(struct!.tunnelSourceInterface),
    tunnel_source_interface_variable: cdktf.stringToTerraform(struct!.tunnelSourceInterfaceVariable),
    tunnel_source_variable: cdktf.stringToTerraform(struct!.tunnelSourceVariable),
  }
}


export function ciscoSecureInternetGatewayFeatureTemplateInterfacesToHclTerraform(struct?: CiscoSecureInternetGatewayFeatureTemplateInterfaces | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application: {
      value: cdktf.stringToHclTerraform(struct!.application),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    auto_tunnel_mode: {
      value: cdktf.booleanToHclTerraform(struct!.autoTunnelMode),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    dead_peer_detection_interval: {
      value: cdktf.numberToHclTerraform(struct!.deadPeerDetectionInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dead_peer_detection_interval_variable: {
      value: cdktf.stringToHclTerraform(struct!.deadPeerDetectionIntervalVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dead_peer_detection_retries: {
      value: cdktf.numberToHclTerraform(struct!.deadPeerDetectionRetries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dead_peer_detection_retries_variable: {
      value: cdktf.stringToHclTerraform(struct!.deadPeerDetectionRetriesVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description_variable: {
      value: cdktf.stringToHclTerraform(struct!.descriptionVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_ciphersuite: {
      value: cdktf.stringToHclTerraform(struct!.ikeCiphersuite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_ciphersuite_variable: {
      value: cdktf.stringToHclTerraform(struct!.ikeCiphersuiteVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_group: {
      value: cdktf.stringToHclTerraform(struct!.ikeGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_group_variable: {
      value: cdktf.stringToHclTerraform(struct!.ikeGroupVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_pre_shared_key: {
      value: cdktf.stringToHclTerraform(struct!.ikePreSharedKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_pre_shared_key_dynamic: {
      value: cdktf.booleanToHclTerraform(struct!.ikePreSharedKeyDynamic),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ike_pre_shared_key_local_id: {
      value: cdktf.stringToHclTerraform(struct!.ikePreSharedKeyLocalId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_pre_shared_key_local_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.ikePreSharedKeyLocalIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_pre_shared_key_remote_id: {
      value: cdktf.stringToHclTerraform(struct!.ikePreSharedKeyRemoteId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_pre_shared_key_remote_id_variable: {
      value: cdktf.stringToHclTerraform(struct!.ikePreSharedKeyRemoteIdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_pre_shared_key_variable: {
      value: cdktf.stringToHclTerraform(struct!.ikePreSharedKeyVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_rekey_interval: {
      value: cdktf.numberToHclTerraform(struct!.ikeRekeyInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ike_rekey_interval_variable: {
      value: cdktf.stringToHclTerraform(struct!.ikeRekeyIntervalVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ike_version: {
      value: cdktf.numberToHclTerraform(struct!.ikeVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ike_version_variable: {
      value: cdktf.stringToHclTerraform(struct!.ikeVersionVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_unnumbered: {
      value: cdktf.booleanToHclTerraform(struct!.ipUnnumbered),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    ipsec_ciphersuite: {
      value: cdktf.stringToHclTerraform(struct!.ipsecCiphersuite),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_ciphersuite_variable: {
      value: cdktf.stringToHclTerraform(struct!.ipsecCiphersuiteVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_perfect_forward_secrecy: {
      value: cdktf.stringToHclTerraform(struct!.ipsecPerfectForwardSecrecy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_perfect_forward_secrecy_variable: {
      value: cdktf.stringToHclTerraform(struct!.ipsecPerfectForwardSecrecyVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_rekey_interval: {
      value: cdktf.numberToHclTerraform(struct!.ipsecRekeyInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_rekey_interval_variable: {
      value: cdktf.stringToHclTerraform(struct!.ipsecRekeyIntervalVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipsec_replay_window: {
      value: cdktf.numberToHclTerraform(struct!.ipsecReplayWindow),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipsec_replay_window_variable: {
      value: cdktf.stringToHclTerraform(struct!.ipsecReplayWindowVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address: {
      value: cdktf.stringToHclTerraform(struct!.ipv4Address),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ipv4_address_variable: {
      value: cdktf.stringToHclTerraform(struct!.ipv4AddressVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    mtu: {
      value: cdktf.numberToHclTerraform(struct!.mtu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mtu_variable: {
      value: cdktf.stringToHclTerraform(struct!.mtuVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_variable: {
      value: cdktf.stringToHclTerraform(struct!.nameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    shutdown: {
      value: cdktf.booleanToHclTerraform(struct!.shutdown),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sig_provider: {
      value: cdktf.stringToHclTerraform(struct!.sigProvider),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tcp_mss: {
      value: cdktf.numberToHclTerraform(struct!.tcpMss),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcp_mss_variable: {
      value: cdktf.stringToHclTerraform(struct!.tcpMssVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    track_enable: {
      value: cdktf.booleanToHclTerraform(struct!.trackEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    tracker: {
      value: cdktf.stringToHclTerraform(struct!.tracker),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_dc_preference: {
      value: cdktf.stringToHclTerraform(struct!.tunnelDcPreference),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_destination: {
      value: cdktf.stringToHclTerraform(struct!.tunnelDestination),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_destination_variable: {
      value: cdktf.stringToHclTerraform(struct!.tunnelDestinationVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_public_ip: {
      value: cdktf.stringToHclTerraform(struct!.tunnelPublicIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_public_ip_variable: {
      value: cdktf.stringToHclTerraform(struct!.tunnelPublicIpVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_route_via: {
      value: cdktf.stringToHclTerraform(struct!.tunnelRouteVia),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_route_via_variable: {
      value: cdktf.stringToHclTerraform(struct!.tunnelRouteViaVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_source: {
      value: cdktf.stringToHclTerraform(struct!.tunnelSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_source_interface: {
      value: cdktf.stringToHclTerraform(struct!.tunnelSourceInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_source_interface_variable: {
      value: cdktf.stringToHclTerraform(struct!.tunnelSourceInterfaceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tunnel_source_variable: {
      value: cdktf.stringToHclTerraform(struct!.tunnelSourceVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoSecureInternetGatewayFeatureTemplateInterfacesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CiscoSecureInternetGatewayFeatureTemplateInterfaces | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._application !== undefined) {
      hasAnyValues = true;
      internalValueResult.application = this._application;
    }
    if (this._autoTunnelMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoTunnelMode = this._autoTunnelMode;
    }
    if (this._deadPeerDetectionInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadPeerDetectionInterval = this._deadPeerDetectionInterval;
    }
    if (this._deadPeerDetectionIntervalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadPeerDetectionIntervalVariable = this._deadPeerDetectionIntervalVariable;
    }
    if (this._deadPeerDetectionRetries !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadPeerDetectionRetries = this._deadPeerDetectionRetries;
    }
    if (this._deadPeerDetectionRetriesVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.deadPeerDetectionRetriesVariable = this._deadPeerDetectionRetriesVariable;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._descriptionVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionVariable = this._descriptionVariable;
    }
    if (this._ikeCiphersuite !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeCiphersuite = this._ikeCiphersuite;
    }
    if (this._ikeCiphersuiteVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeCiphersuiteVariable = this._ikeCiphersuiteVariable;
    }
    if (this._ikeGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeGroup = this._ikeGroup;
    }
    if (this._ikeGroupVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeGroupVariable = this._ikeGroupVariable;
    }
    if (this._ikePreSharedKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikePreSharedKey = this._ikePreSharedKey;
    }
    if (this._ikePreSharedKeyDynamic !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikePreSharedKeyDynamic = this._ikePreSharedKeyDynamic;
    }
    if (this._ikePreSharedKeyLocalId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikePreSharedKeyLocalId = this._ikePreSharedKeyLocalId;
    }
    if (this._ikePreSharedKeyLocalIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikePreSharedKeyLocalIdVariable = this._ikePreSharedKeyLocalIdVariable;
    }
    if (this._ikePreSharedKeyRemoteId !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikePreSharedKeyRemoteId = this._ikePreSharedKeyRemoteId;
    }
    if (this._ikePreSharedKeyRemoteIdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikePreSharedKeyRemoteIdVariable = this._ikePreSharedKeyRemoteIdVariable;
    }
    if (this._ikePreSharedKeyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikePreSharedKeyVariable = this._ikePreSharedKeyVariable;
    }
    if (this._ikeRekeyInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeRekeyInterval = this._ikeRekeyInterval;
    }
    if (this._ikeRekeyIntervalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeRekeyIntervalVariable = this._ikeRekeyIntervalVariable;
    }
    if (this._ikeVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeVersion = this._ikeVersion;
    }
    if (this._ikeVersionVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ikeVersionVariable = this._ikeVersionVariable;
    }
    if (this._ipUnnumbered !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipUnnumbered = this._ipUnnumbered;
    }
    if (this._ipsecCiphersuite !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecCiphersuite = this._ipsecCiphersuite;
    }
    if (this._ipsecCiphersuiteVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecCiphersuiteVariable = this._ipsecCiphersuiteVariable;
    }
    if (this._ipsecPerfectForwardSecrecy !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPerfectForwardSecrecy = this._ipsecPerfectForwardSecrecy;
    }
    if (this._ipsecPerfectForwardSecrecyVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecPerfectForwardSecrecyVariable = this._ipsecPerfectForwardSecrecyVariable;
    }
    if (this._ipsecRekeyInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecRekeyInterval = this._ipsecRekeyInterval;
    }
    if (this._ipsecRekeyIntervalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecRekeyIntervalVariable = this._ipsecRekeyIntervalVariable;
    }
    if (this._ipsecReplayWindow !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecReplayWindow = this._ipsecReplayWindow;
    }
    if (this._ipsecReplayWindowVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipsecReplayWindowVariable = this._ipsecReplayWindowVariable;
    }
    if (this._ipv4Address !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4Address = this._ipv4Address;
    }
    if (this._ipv4AddressVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4AddressVariable = this._ipv4AddressVariable;
    }
    if (this._mtu !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtu = this._mtu;
    }
    if (this._mtuVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.mtuVariable = this._mtuVariable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameVariable = this._nameVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._shutdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.shutdown = this._shutdown;
    }
    if (this._sigProvider !== undefined) {
      hasAnyValues = true;
      internalValueResult.sigProvider = this._sigProvider;
    }
    if (this._tcpMss !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpMss = this._tcpMss;
    }
    if (this._tcpMssVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcpMssVariable = this._tcpMssVariable;
    }
    if (this._trackEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackEnable = this._trackEnable;
    }
    if (this._tracker !== undefined) {
      hasAnyValues = true;
      internalValueResult.tracker = this._tracker;
    }
    if (this._tunnelDcPreference !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelDcPreference = this._tunnelDcPreference;
    }
    if (this._tunnelDestination !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelDestination = this._tunnelDestination;
    }
    if (this._tunnelDestinationVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelDestinationVariable = this._tunnelDestinationVariable;
    }
    if (this._tunnelPublicIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelPublicIp = this._tunnelPublicIp;
    }
    if (this._tunnelPublicIpVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelPublicIpVariable = this._tunnelPublicIpVariable;
    }
    if (this._tunnelRouteVia !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelRouteVia = this._tunnelRouteVia;
    }
    if (this._tunnelRouteViaVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelRouteViaVariable = this._tunnelRouteViaVariable;
    }
    if (this._tunnelSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelSource = this._tunnelSource;
    }
    if (this._tunnelSourceInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelSourceInterface = this._tunnelSourceInterface;
    }
    if (this._tunnelSourceInterfaceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelSourceInterfaceVariable = this._tunnelSourceInterfaceVariable;
    }
    if (this._tunnelSourceVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.tunnelSourceVariable = this._tunnelSourceVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoSecureInternetGatewayFeatureTemplateInterfaces | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._application = undefined;
      this._autoTunnelMode = undefined;
      this._deadPeerDetectionInterval = undefined;
      this._deadPeerDetectionIntervalVariable = undefined;
      this._deadPeerDetectionRetries = undefined;
      this._deadPeerDetectionRetriesVariable = undefined;
      this._description = undefined;
      this._descriptionVariable = undefined;
      this._ikeCiphersuite = undefined;
      this._ikeCiphersuiteVariable = undefined;
      this._ikeGroup = undefined;
      this._ikeGroupVariable = undefined;
      this._ikePreSharedKey = undefined;
      this._ikePreSharedKeyDynamic = undefined;
      this._ikePreSharedKeyLocalId = undefined;
      this._ikePreSharedKeyLocalIdVariable = undefined;
      this._ikePreSharedKeyRemoteId = undefined;
      this._ikePreSharedKeyRemoteIdVariable = undefined;
      this._ikePreSharedKeyVariable = undefined;
      this._ikeRekeyInterval = undefined;
      this._ikeRekeyIntervalVariable = undefined;
      this._ikeVersion = undefined;
      this._ikeVersionVariable = undefined;
      this._ipUnnumbered = undefined;
      this._ipsecCiphersuite = undefined;
      this._ipsecCiphersuiteVariable = undefined;
      this._ipsecPerfectForwardSecrecy = undefined;
      this._ipsecPerfectForwardSecrecyVariable = undefined;
      this._ipsecRekeyInterval = undefined;
      this._ipsecRekeyIntervalVariable = undefined;
      this._ipsecReplayWindow = undefined;
      this._ipsecReplayWindowVariable = undefined;
      this._ipv4Address = undefined;
      this._ipv4AddressVariable = undefined;
      this._mtu = undefined;
      this._mtuVariable = undefined;
      this._name = undefined;
      this._nameVariable = undefined;
      this._optional = undefined;
      this._shutdown = undefined;
      this._sigProvider = undefined;
      this._tcpMss = undefined;
      this._tcpMssVariable = undefined;
      this._trackEnable = undefined;
      this._tracker = undefined;
      this._tunnelDcPreference = undefined;
      this._tunnelDestination = undefined;
      this._tunnelDestinationVariable = undefined;
      this._tunnelPublicIp = undefined;
      this._tunnelPublicIpVariable = undefined;
      this._tunnelRouteVia = undefined;
      this._tunnelRouteViaVariable = undefined;
      this._tunnelSource = undefined;
      this._tunnelSourceInterface = undefined;
      this._tunnelSourceInterfaceVariable = undefined;
      this._tunnelSourceVariable = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._application = value.application;
      this._autoTunnelMode = value.autoTunnelMode;
      this._deadPeerDetectionInterval = value.deadPeerDetectionInterval;
      this._deadPeerDetectionIntervalVariable = value.deadPeerDetectionIntervalVariable;
      this._deadPeerDetectionRetries = value.deadPeerDetectionRetries;
      this._deadPeerDetectionRetriesVariable = value.deadPeerDetectionRetriesVariable;
      this._description = value.description;
      this._descriptionVariable = value.descriptionVariable;
      this._ikeCiphersuite = value.ikeCiphersuite;
      this._ikeCiphersuiteVariable = value.ikeCiphersuiteVariable;
      this._ikeGroup = value.ikeGroup;
      this._ikeGroupVariable = value.ikeGroupVariable;
      this._ikePreSharedKey = value.ikePreSharedKey;
      this._ikePreSharedKeyDynamic = value.ikePreSharedKeyDynamic;
      this._ikePreSharedKeyLocalId = value.ikePreSharedKeyLocalId;
      this._ikePreSharedKeyLocalIdVariable = value.ikePreSharedKeyLocalIdVariable;
      this._ikePreSharedKeyRemoteId = value.ikePreSharedKeyRemoteId;
      this._ikePreSharedKeyRemoteIdVariable = value.ikePreSharedKeyRemoteIdVariable;
      this._ikePreSharedKeyVariable = value.ikePreSharedKeyVariable;
      this._ikeRekeyInterval = value.ikeRekeyInterval;
      this._ikeRekeyIntervalVariable = value.ikeRekeyIntervalVariable;
      this._ikeVersion = value.ikeVersion;
      this._ikeVersionVariable = value.ikeVersionVariable;
      this._ipUnnumbered = value.ipUnnumbered;
      this._ipsecCiphersuite = value.ipsecCiphersuite;
      this._ipsecCiphersuiteVariable = value.ipsecCiphersuiteVariable;
      this._ipsecPerfectForwardSecrecy = value.ipsecPerfectForwardSecrecy;
      this._ipsecPerfectForwardSecrecyVariable = value.ipsecPerfectForwardSecrecyVariable;
      this._ipsecRekeyInterval = value.ipsecRekeyInterval;
      this._ipsecRekeyIntervalVariable = value.ipsecRekeyIntervalVariable;
      this._ipsecReplayWindow = value.ipsecReplayWindow;
      this._ipsecReplayWindowVariable = value.ipsecReplayWindowVariable;
      this._ipv4Address = value.ipv4Address;
      this._ipv4AddressVariable = value.ipv4AddressVariable;
      this._mtu = value.mtu;
      this._mtuVariable = value.mtuVariable;
      this._name = value.name;
      this._nameVariable = value.nameVariable;
      this._optional = value.optional;
      this._shutdown = value.shutdown;
      this._sigProvider = value.sigProvider;
      this._tcpMss = value.tcpMss;
      this._tcpMssVariable = value.tcpMssVariable;
      this._trackEnable = value.trackEnable;
      this._tracker = value.tracker;
      this._tunnelDcPreference = value.tunnelDcPreference;
      this._tunnelDestination = value.tunnelDestination;
      this._tunnelDestinationVariable = value.tunnelDestinationVariable;
      this._tunnelPublicIp = value.tunnelPublicIp;
      this._tunnelPublicIpVariable = value.tunnelPublicIpVariable;
      this._tunnelRouteVia = value.tunnelRouteVia;
      this._tunnelRouteViaVariable = value.tunnelRouteViaVariable;
      this._tunnelSource = value.tunnelSource;
      this._tunnelSourceInterface = value.tunnelSourceInterface;
      this._tunnelSourceInterfaceVariable = value.tunnelSourceInterfaceVariable;
      this._tunnelSourceVariable = value.tunnelSourceVariable;
    }
  }

  // application - computed: false, optional: true, required: false
  private _application?: string; 
  public get application() {
    return this.getStringAttribute('application');
  }
  public set application(value: string) {
    this._application = value;
  }
  public resetApplication() {
    this._application = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationInput() {
    return this._application;
  }

  // auto_tunnel_mode - computed: false, optional: true, required: false
  private _autoTunnelMode?: boolean | cdktf.IResolvable; 
  public get autoTunnelMode() {
    return this.getBooleanAttribute('auto_tunnel_mode');
  }
  public set autoTunnelMode(value: boolean | cdktf.IResolvable) {
    this._autoTunnelMode = value;
  }
  public resetAutoTunnelMode() {
    this._autoTunnelMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTunnelModeInput() {
    return this._autoTunnelMode;
  }

  // dead_peer_detection_interval - computed: false, optional: true, required: false
  private _deadPeerDetectionInterval?: number; 
  public get deadPeerDetectionInterval() {
    return this.getNumberAttribute('dead_peer_detection_interval');
  }
  public set deadPeerDetectionInterval(value: number) {
    this._deadPeerDetectionInterval = value;
  }
  public resetDeadPeerDetectionInterval() {
    this._deadPeerDetectionInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadPeerDetectionIntervalInput() {
    return this._deadPeerDetectionInterval;
  }

  // dead_peer_detection_interval_variable - computed: false, optional: true, required: false
  private _deadPeerDetectionIntervalVariable?: string; 
  public get deadPeerDetectionIntervalVariable() {
    return this.getStringAttribute('dead_peer_detection_interval_variable');
  }
  public set deadPeerDetectionIntervalVariable(value: string) {
    this._deadPeerDetectionIntervalVariable = value;
  }
  public resetDeadPeerDetectionIntervalVariable() {
    this._deadPeerDetectionIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadPeerDetectionIntervalVariableInput() {
    return this._deadPeerDetectionIntervalVariable;
  }

  // dead_peer_detection_retries - computed: false, optional: true, required: false
  private _deadPeerDetectionRetries?: number; 
  public get deadPeerDetectionRetries() {
    return this.getNumberAttribute('dead_peer_detection_retries');
  }
  public set deadPeerDetectionRetries(value: number) {
    this._deadPeerDetectionRetries = value;
  }
  public resetDeadPeerDetectionRetries() {
    this._deadPeerDetectionRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadPeerDetectionRetriesInput() {
    return this._deadPeerDetectionRetries;
  }

  // dead_peer_detection_retries_variable - computed: false, optional: true, required: false
  private _deadPeerDetectionRetriesVariable?: string; 
  public get deadPeerDetectionRetriesVariable() {
    return this.getStringAttribute('dead_peer_detection_retries_variable');
  }
  public set deadPeerDetectionRetriesVariable(value: string) {
    this._deadPeerDetectionRetriesVariable = value;
  }
  public resetDeadPeerDetectionRetriesVariable() {
    this._deadPeerDetectionRetriesVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadPeerDetectionRetriesVariableInput() {
    return this._deadPeerDetectionRetriesVariable;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // description_variable - computed: false, optional: true, required: false
  private _descriptionVariable?: string; 
  public get descriptionVariable() {
    return this.getStringAttribute('description_variable');
  }
  public set descriptionVariable(value: string) {
    this._descriptionVariable = value;
  }
  public resetDescriptionVariable() {
    this._descriptionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionVariableInput() {
    return this._descriptionVariable;
  }

  // ike_ciphersuite - computed: false, optional: true, required: false
  private _ikeCiphersuite?: string; 
  public get ikeCiphersuite() {
    return this.getStringAttribute('ike_ciphersuite');
  }
  public set ikeCiphersuite(value: string) {
    this._ikeCiphersuite = value;
  }
  public resetIkeCiphersuite() {
    this._ikeCiphersuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeCiphersuiteInput() {
    return this._ikeCiphersuite;
  }

  // ike_ciphersuite_variable - computed: false, optional: true, required: false
  private _ikeCiphersuiteVariable?: string; 
  public get ikeCiphersuiteVariable() {
    return this.getStringAttribute('ike_ciphersuite_variable');
  }
  public set ikeCiphersuiteVariable(value: string) {
    this._ikeCiphersuiteVariable = value;
  }
  public resetIkeCiphersuiteVariable() {
    this._ikeCiphersuiteVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeCiphersuiteVariableInput() {
    return this._ikeCiphersuiteVariable;
  }

  // ike_group - computed: false, optional: true, required: false
  private _ikeGroup?: string; 
  public get ikeGroup() {
    return this.getStringAttribute('ike_group');
  }
  public set ikeGroup(value: string) {
    this._ikeGroup = value;
  }
  public resetIkeGroup() {
    this._ikeGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeGroupInput() {
    return this._ikeGroup;
  }

  // ike_group_variable - computed: false, optional: true, required: false
  private _ikeGroupVariable?: string; 
  public get ikeGroupVariable() {
    return this.getStringAttribute('ike_group_variable');
  }
  public set ikeGroupVariable(value: string) {
    this._ikeGroupVariable = value;
  }
  public resetIkeGroupVariable() {
    this._ikeGroupVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeGroupVariableInput() {
    return this._ikeGroupVariable;
  }

  // ike_pre_shared_key - computed: false, optional: true, required: false
  private _ikePreSharedKey?: string; 
  public get ikePreSharedKey() {
    return this.getStringAttribute('ike_pre_shared_key');
  }
  public set ikePreSharedKey(value: string) {
    this._ikePreSharedKey = value;
  }
  public resetIkePreSharedKey() {
    this._ikePreSharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePreSharedKeyInput() {
    return this._ikePreSharedKey;
  }

  // ike_pre_shared_key_dynamic - computed: false, optional: true, required: false
  private _ikePreSharedKeyDynamic?: boolean | cdktf.IResolvable; 
  public get ikePreSharedKeyDynamic() {
    return this.getBooleanAttribute('ike_pre_shared_key_dynamic');
  }
  public set ikePreSharedKeyDynamic(value: boolean | cdktf.IResolvable) {
    this._ikePreSharedKeyDynamic = value;
  }
  public resetIkePreSharedKeyDynamic() {
    this._ikePreSharedKeyDynamic = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePreSharedKeyDynamicInput() {
    return this._ikePreSharedKeyDynamic;
  }

  // ike_pre_shared_key_local_id - computed: false, optional: true, required: false
  private _ikePreSharedKeyLocalId?: string; 
  public get ikePreSharedKeyLocalId() {
    return this.getStringAttribute('ike_pre_shared_key_local_id');
  }
  public set ikePreSharedKeyLocalId(value: string) {
    this._ikePreSharedKeyLocalId = value;
  }
  public resetIkePreSharedKeyLocalId() {
    this._ikePreSharedKeyLocalId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePreSharedKeyLocalIdInput() {
    return this._ikePreSharedKeyLocalId;
  }

  // ike_pre_shared_key_local_id_variable - computed: false, optional: true, required: false
  private _ikePreSharedKeyLocalIdVariable?: string; 
  public get ikePreSharedKeyLocalIdVariable() {
    return this.getStringAttribute('ike_pre_shared_key_local_id_variable');
  }
  public set ikePreSharedKeyLocalIdVariable(value: string) {
    this._ikePreSharedKeyLocalIdVariable = value;
  }
  public resetIkePreSharedKeyLocalIdVariable() {
    this._ikePreSharedKeyLocalIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePreSharedKeyLocalIdVariableInput() {
    return this._ikePreSharedKeyLocalIdVariable;
  }

  // ike_pre_shared_key_remote_id - computed: false, optional: true, required: false
  private _ikePreSharedKeyRemoteId?: string; 
  public get ikePreSharedKeyRemoteId() {
    return this.getStringAttribute('ike_pre_shared_key_remote_id');
  }
  public set ikePreSharedKeyRemoteId(value: string) {
    this._ikePreSharedKeyRemoteId = value;
  }
  public resetIkePreSharedKeyRemoteId() {
    this._ikePreSharedKeyRemoteId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePreSharedKeyRemoteIdInput() {
    return this._ikePreSharedKeyRemoteId;
  }

  // ike_pre_shared_key_remote_id_variable - computed: false, optional: true, required: false
  private _ikePreSharedKeyRemoteIdVariable?: string; 
  public get ikePreSharedKeyRemoteIdVariable() {
    return this.getStringAttribute('ike_pre_shared_key_remote_id_variable');
  }
  public set ikePreSharedKeyRemoteIdVariable(value: string) {
    this._ikePreSharedKeyRemoteIdVariable = value;
  }
  public resetIkePreSharedKeyRemoteIdVariable() {
    this._ikePreSharedKeyRemoteIdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePreSharedKeyRemoteIdVariableInput() {
    return this._ikePreSharedKeyRemoteIdVariable;
  }

  // ike_pre_shared_key_variable - computed: false, optional: true, required: false
  private _ikePreSharedKeyVariable?: string; 
  public get ikePreSharedKeyVariable() {
    return this.getStringAttribute('ike_pre_shared_key_variable');
  }
  public set ikePreSharedKeyVariable(value: string) {
    this._ikePreSharedKeyVariable = value;
  }
  public resetIkePreSharedKeyVariable() {
    this._ikePreSharedKeyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikePreSharedKeyVariableInput() {
    return this._ikePreSharedKeyVariable;
  }

  // ike_rekey_interval - computed: false, optional: true, required: false
  private _ikeRekeyInterval?: number; 
  public get ikeRekeyInterval() {
    return this.getNumberAttribute('ike_rekey_interval');
  }
  public set ikeRekeyInterval(value: number) {
    this._ikeRekeyInterval = value;
  }
  public resetIkeRekeyInterval() {
    this._ikeRekeyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeRekeyIntervalInput() {
    return this._ikeRekeyInterval;
  }

  // ike_rekey_interval_variable - computed: false, optional: true, required: false
  private _ikeRekeyIntervalVariable?: string; 
  public get ikeRekeyIntervalVariable() {
    return this.getStringAttribute('ike_rekey_interval_variable');
  }
  public set ikeRekeyIntervalVariable(value: string) {
    this._ikeRekeyIntervalVariable = value;
  }
  public resetIkeRekeyIntervalVariable() {
    this._ikeRekeyIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeRekeyIntervalVariableInput() {
    return this._ikeRekeyIntervalVariable;
  }

  // ike_version - computed: false, optional: true, required: false
  private _ikeVersion?: number; 
  public get ikeVersion() {
    return this.getNumberAttribute('ike_version');
  }
  public set ikeVersion(value: number) {
    this._ikeVersion = value;
  }
  public resetIkeVersion() {
    this._ikeVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeVersionInput() {
    return this._ikeVersion;
  }

  // ike_version_variable - computed: false, optional: true, required: false
  private _ikeVersionVariable?: string; 
  public get ikeVersionVariable() {
    return this.getStringAttribute('ike_version_variable');
  }
  public set ikeVersionVariable(value: string) {
    this._ikeVersionVariable = value;
  }
  public resetIkeVersionVariable() {
    this._ikeVersionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeVersionVariableInput() {
    return this._ikeVersionVariable;
  }

  // ip_unnumbered - computed: false, optional: true, required: false
  private _ipUnnumbered?: boolean | cdktf.IResolvable; 
  public get ipUnnumbered() {
    return this.getBooleanAttribute('ip_unnumbered');
  }
  public set ipUnnumbered(value: boolean | cdktf.IResolvable) {
    this._ipUnnumbered = value;
  }
  public resetIpUnnumbered() {
    this._ipUnnumbered = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipUnnumberedInput() {
    return this._ipUnnumbered;
  }

  // ipsec_ciphersuite - computed: false, optional: true, required: false
  private _ipsecCiphersuite?: string; 
  public get ipsecCiphersuite() {
    return this.getStringAttribute('ipsec_ciphersuite');
  }
  public set ipsecCiphersuite(value: string) {
    this._ipsecCiphersuite = value;
  }
  public resetIpsecCiphersuite() {
    this._ipsecCiphersuite = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecCiphersuiteInput() {
    return this._ipsecCiphersuite;
  }

  // ipsec_ciphersuite_variable - computed: false, optional: true, required: false
  private _ipsecCiphersuiteVariable?: string; 
  public get ipsecCiphersuiteVariable() {
    return this.getStringAttribute('ipsec_ciphersuite_variable');
  }
  public set ipsecCiphersuiteVariable(value: string) {
    this._ipsecCiphersuiteVariable = value;
  }
  public resetIpsecCiphersuiteVariable() {
    this._ipsecCiphersuiteVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecCiphersuiteVariableInput() {
    return this._ipsecCiphersuiteVariable;
  }

  // ipsec_perfect_forward_secrecy - computed: false, optional: true, required: false
  private _ipsecPerfectForwardSecrecy?: string; 
  public get ipsecPerfectForwardSecrecy() {
    return this.getStringAttribute('ipsec_perfect_forward_secrecy');
  }
  public set ipsecPerfectForwardSecrecy(value: string) {
    this._ipsecPerfectForwardSecrecy = value;
  }
  public resetIpsecPerfectForwardSecrecy() {
    this._ipsecPerfectForwardSecrecy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPerfectForwardSecrecyInput() {
    return this._ipsecPerfectForwardSecrecy;
  }

  // ipsec_perfect_forward_secrecy_variable - computed: false, optional: true, required: false
  private _ipsecPerfectForwardSecrecyVariable?: string; 
  public get ipsecPerfectForwardSecrecyVariable() {
    return this.getStringAttribute('ipsec_perfect_forward_secrecy_variable');
  }
  public set ipsecPerfectForwardSecrecyVariable(value: string) {
    this._ipsecPerfectForwardSecrecyVariable = value;
  }
  public resetIpsecPerfectForwardSecrecyVariable() {
    this._ipsecPerfectForwardSecrecyVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecPerfectForwardSecrecyVariableInput() {
    return this._ipsecPerfectForwardSecrecyVariable;
  }

  // ipsec_rekey_interval - computed: false, optional: true, required: false
  private _ipsecRekeyInterval?: number; 
  public get ipsecRekeyInterval() {
    return this.getNumberAttribute('ipsec_rekey_interval');
  }
  public set ipsecRekeyInterval(value: number) {
    this._ipsecRekeyInterval = value;
  }
  public resetIpsecRekeyInterval() {
    this._ipsecRekeyInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecRekeyIntervalInput() {
    return this._ipsecRekeyInterval;
  }

  // ipsec_rekey_interval_variable - computed: false, optional: true, required: false
  private _ipsecRekeyIntervalVariable?: string; 
  public get ipsecRekeyIntervalVariable() {
    return this.getStringAttribute('ipsec_rekey_interval_variable');
  }
  public set ipsecRekeyIntervalVariable(value: string) {
    this._ipsecRekeyIntervalVariable = value;
  }
  public resetIpsecRekeyIntervalVariable() {
    this._ipsecRekeyIntervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecRekeyIntervalVariableInput() {
    return this._ipsecRekeyIntervalVariable;
  }

  // ipsec_replay_window - computed: false, optional: true, required: false
  private _ipsecReplayWindow?: number; 
  public get ipsecReplayWindow() {
    return this.getNumberAttribute('ipsec_replay_window');
  }
  public set ipsecReplayWindow(value: number) {
    this._ipsecReplayWindow = value;
  }
  public resetIpsecReplayWindow() {
    this._ipsecReplayWindow = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecReplayWindowInput() {
    return this._ipsecReplayWindow;
  }

  // ipsec_replay_window_variable - computed: false, optional: true, required: false
  private _ipsecReplayWindowVariable?: string; 
  public get ipsecReplayWindowVariable() {
    return this.getStringAttribute('ipsec_replay_window_variable');
  }
  public set ipsecReplayWindowVariable(value: string) {
    this._ipsecReplayWindowVariable = value;
  }
  public resetIpsecReplayWindowVariable() {
    this._ipsecReplayWindowVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipsecReplayWindowVariableInput() {
    return this._ipsecReplayWindowVariable;
  }

  // ipv4_address - computed: false, optional: true, required: false
  private _ipv4Address?: string; 
  public get ipv4Address() {
    return this.getStringAttribute('ipv4_address');
  }
  public set ipv4Address(value: string) {
    this._ipv4Address = value;
  }
  public resetIpv4Address() {
    this._ipv4Address = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressInput() {
    return this._ipv4Address;
  }

  // ipv4_address_variable - computed: false, optional: true, required: false
  private _ipv4AddressVariable?: string; 
  public get ipv4AddressVariable() {
    return this.getStringAttribute('ipv4_address_variable');
  }
  public set ipv4AddressVariable(value: string) {
    this._ipv4AddressVariable = value;
  }
  public resetIpv4AddressVariable() {
    this._ipv4AddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4AddressVariableInput() {
    return this._ipv4AddressVariable;
  }

  // mtu - computed: false, optional: true, required: false
  private _mtu?: number; 
  public get mtu() {
    return this.getNumberAttribute('mtu');
  }
  public set mtu(value: number) {
    this._mtu = value;
  }
  public resetMtu() {
    this._mtu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuInput() {
    return this._mtu;
  }

  // mtu_variable - computed: false, optional: true, required: false
  private _mtuVariable?: string; 
  public get mtuVariable() {
    return this.getStringAttribute('mtu_variable');
  }
  public set mtuVariable(value: string) {
    this._mtuVariable = value;
  }
  public resetMtuVariable() {
    this._mtuVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mtuVariableInput() {
    return this._mtuVariable;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_variable - computed: false, optional: true, required: false
  private _nameVariable?: string; 
  public get nameVariable() {
    return this.getStringAttribute('name_variable');
  }
  public set nameVariable(value: string) {
    this._nameVariable = value;
  }
  public resetNameVariable() {
    this._nameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameVariableInput() {
    return this._nameVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // shutdown - computed: false, optional: true, required: false
  private _shutdown?: boolean | cdktf.IResolvable; 
  public get shutdown() {
    return this.getBooleanAttribute('shutdown');
  }
  public set shutdown(value: boolean | cdktf.IResolvable) {
    this._shutdown = value;
  }
  public resetShutdown() {
    this._shutdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownInput() {
    return this._shutdown;
  }

  // sig_provider - computed: false, optional: true, required: false
  private _sigProvider?: string; 
  public get sigProvider() {
    return this.getStringAttribute('sig_provider');
  }
  public set sigProvider(value: string) {
    this._sigProvider = value;
  }
  public resetSigProvider() {
    this._sigProvider = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sigProviderInput() {
    return this._sigProvider;
  }

  // tcp_mss - computed: false, optional: true, required: false
  private _tcpMss?: number; 
  public get tcpMss() {
    return this.getNumberAttribute('tcp_mss');
  }
  public set tcpMss(value: number) {
    this._tcpMss = value;
  }
  public resetTcpMss() {
    this._tcpMss = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssInput() {
    return this._tcpMss;
  }

  // tcp_mss_variable - computed: false, optional: true, required: false
  private _tcpMssVariable?: string; 
  public get tcpMssVariable() {
    return this.getStringAttribute('tcp_mss_variable');
  }
  public set tcpMssVariable(value: string) {
    this._tcpMssVariable = value;
  }
  public resetTcpMssVariable() {
    this._tcpMssVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssVariableInput() {
    return this._tcpMssVariable;
  }

  // track_enable - computed: false, optional: true, required: false
  private _trackEnable?: boolean | cdktf.IResolvable; 
  public get trackEnable() {
    return this.getBooleanAttribute('track_enable');
  }
  public set trackEnable(value: boolean | cdktf.IResolvable) {
    this._trackEnable = value;
  }
  public resetTrackEnable() {
    this._trackEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackEnableInput() {
    return this._trackEnable;
  }

  // tracker - computed: false, optional: true, required: false
  private _tracker?: string; 
  public get tracker() {
    return this.getStringAttribute('tracker');
  }
  public set tracker(value: string) {
    this._tracker = value;
  }
  public resetTracker() {
    this._tracker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerInput() {
    return this._tracker;
  }

  // tunnel_dc_preference - computed: false, optional: true, required: false
  private _tunnelDcPreference?: string; 
  public get tunnelDcPreference() {
    return this.getStringAttribute('tunnel_dc_preference');
  }
  public set tunnelDcPreference(value: string) {
    this._tunnelDcPreference = value;
  }
  public resetTunnelDcPreference() {
    this._tunnelDcPreference = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDcPreferenceInput() {
    return this._tunnelDcPreference;
  }

  // tunnel_destination - computed: false, optional: true, required: false
  private _tunnelDestination?: string; 
  public get tunnelDestination() {
    return this.getStringAttribute('tunnel_destination');
  }
  public set tunnelDestination(value: string) {
    this._tunnelDestination = value;
  }
  public resetTunnelDestination() {
    this._tunnelDestination = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDestinationInput() {
    return this._tunnelDestination;
  }

  // tunnel_destination_variable - computed: false, optional: true, required: false
  private _tunnelDestinationVariable?: string; 
  public get tunnelDestinationVariable() {
    return this.getStringAttribute('tunnel_destination_variable');
  }
  public set tunnelDestinationVariable(value: string) {
    this._tunnelDestinationVariable = value;
  }
  public resetTunnelDestinationVariable() {
    this._tunnelDestinationVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelDestinationVariableInput() {
    return this._tunnelDestinationVariable;
  }

  // tunnel_public_ip - computed: false, optional: true, required: false
  private _tunnelPublicIp?: string; 
  public get tunnelPublicIp() {
    return this.getStringAttribute('tunnel_public_ip');
  }
  public set tunnelPublicIp(value: string) {
    this._tunnelPublicIp = value;
  }
  public resetTunnelPublicIp() {
    this._tunnelPublicIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelPublicIpInput() {
    return this._tunnelPublicIp;
  }

  // tunnel_public_ip_variable - computed: false, optional: true, required: false
  private _tunnelPublicIpVariable?: string; 
  public get tunnelPublicIpVariable() {
    return this.getStringAttribute('tunnel_public_ip_variable');
  }
  public set tunnelPublicIpVariable(value: string) {
    this._tunnelPublicIpVariable = value;
  }
  public resetTunnelPublicIpVariable() {
    this._tunnelPublicIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelPublicIpVariableInput() {
    return this._tunnelPublicIpVariable;
  }

  // tunnel_route_via - computed: false, optional: true, required: false
  private _tunnelRouteVia?: string; 
  public get tunnelRouteVia() {
    return this.getStringAttribute('tunnel_route_via');
  }
  public set tunnelRouteVia(value: string) {
    this._tunnelRouteVia = value;
  }
  public resetTunnelRouteVia() {
    this._tunnelRouteVia = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelRouteViaInput() {
    return this._tunnelRouteVia;
  }

  // tunnel_route_via_variable - computed: false, optional: true, required: false
  private _tunnelRouteViaVariable?: string; 
  public get tunnelRouteViaVariable() {
    return this.getStringAttribute('tunnel_route_via_variable');
  }
  public set tunnelRouteViaVariable(value: string) {
    this._tunnelRouteViaVariable = value;
  }
  public resetTunnelRouteViaVariable() {
    this._tunnelRouteViaVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelRouteViaVariableInput() {
    return this._tunnelRouteViaVariable;
  }

  // tunnel_source - computed: false, optional: true, required: false
  private _tunnelSource?: string; 
  public get tunnelSource() {
    return this.getStringAttribute('tunnel_source');
  }
  public set tunnelSource(value: string) {
    this._tunnelSource = value;
  }
  public resetTunnelSource() {
    this._tunnelSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSourceInput() {
    return this._tunnelSource;
  }

  // tunnel_source_interface - computed: false, optional: true, required: false
  private _tunnelSourceInterface?: string; 
  public get tunnelSourceInterface() {
    return this.getStringAttribute('tunnel_source_interface');
  }
  public set tunnelSourceInterface(value: string) {
    this._tunnelSourceInterface = value;
  }
  public resetTunnelSourceInterface() {
    this._tunnelSourceInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSourceInterfaceInput() {
    return this._tunnelSourceInterface;
  }

  // tunnel_source_interface_variable - computed: false, optional: true, required: false
  private _tunnelSourceInterfaceVariable?: string; 
  public get tunnelSourceInterfaceVariable() {
    return this.getStringAttribute('tunnel_source_interface_variable');
  }
  public set tunnelSourceInterfaceVariable(value: string) {
    this._tunnelSourceInterfaceVariable = value;
  }
  public resetTunnelSourceInterfaceVariable() {
    this._tunnelSourceInterfaceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSourceInterfaceVariableInput() {
    return this._tunnelSourceInterfaceVariable;
  }

  // tunnel_source_variable - computed: false, optional: true, required: false
  private _tunnelSourceVariable?: string; 
  public get tunnelSourceVariable() {
    return this.getStringAttribute('tunnel_source_variable');
  }
  public set tunnelSourceVariable(value: string) {
    this._tunnelSourceVariable = value;
  }
  public resetTunnelSourceVariable() {
    this._tunnelSourceVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSourceVariableInput() {
    return this._tunnelSourceVariable;
  }
}

export class CiscoSecureInternetGatewayFeatureTemplateInterfacesList extends cdktf.ComplexList {
  public internalValue? : CiscoSecureInternetGatewayFeatureTemplateInterfaces[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CiscoSecureInternetGatewayFeatureTemplateInterfacesOutputReference {
    return new CiscoSecureInternetGatewayFeatureTemplateInterfacesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoSecureInternetGatewayFeatureTemplateServicesInterfacePairs {
  /**
  * Active Tunnel Interface for SIG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#active_interface CiscoSecureInternetGatewayFeatureTemplate#active_interface}
  */
  readonly activeInterface?: string;
  /**
  * Active Tunnel Interface Weight
  *   - Range: `1`-`255`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#active_interface_weight CiscoSecureInternetGatewayFeatureTemplate#active_interface_weight}
  */
  readonly activeInterfaceWeight?: number;
  /**
  * Backup Tunnel Interface for SIG
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#backup_interface CiscoSecureInternetGatewayFeatureTemplate#backup_interface}
  */
  readonly backupInterface?: string;
  /**
  * Backup Tunnel Interface Weight
  *   - Range: `1`-`255`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#backup_interface_weight CiscoSecureInternetGatewayFeatureTemplate#backup_interface_weight}
  */
  readonly backupInterfaceWeight?: number;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#optional CiscoSecureInternetGatewayFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
}

export function ciscoSecureInternetGatewayFeatureTemplateServicesInterfacePairsToTerraform(struct?: CiscoSecureInternetGatewayFeatureTemplateServicesInterfacePairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_interface: cdktf.stringToTerraform(struct!.activeInterface),
    active_interface_weight: cdktf.numberToTerraform(struct!.activeInterfaceWeight),
    backup_interface: cdktf.stringToTerraform(struct!.backupInterface),
    backup_interface_weight: cdktf.numberToTerraform(struct!.backupInterfaceWeight),
    optional: cdktf.booleanToTerraform(struct!.optional),
  }
}


export function ciscoSecureInternetGatewayFeatureTemplateServicesInterfacePairsToHclTerraform(struct?: CiscoSecureInternetGatewayFeatureTemplateServicesInterfacePairs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_interface: {
      value: cdktf.stringToHclTerraform(struct!.activeInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    active_interface_weight: {
      value: cdktf.numberToHclTerraform(struct!.activeInterfaceWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    backup_interface: {
      value: cdktf.stringToHclTerraform(struct!.backupInterface),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    backup_interface_weight: {
      value: cdktf.numberToHclTerraform(struct!.backupInterfaceWeight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoSecureInternetGatewayFeatureTemplateServicesInterfacePairsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CiscoSecureInternetGatewayFeatureTemplateServicesInterfacePairs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeInterface = this._activeInterface;
    }
    if (this._activeInterfaceWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeInterfaceWeight = this._activeInterfaceWeight;
    }
    if (this._backupInterface !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupInterface = this._backupInterface;
    }
    if (this._backupInterfaceWeight !== undefined) {
      hasAnyValues = true;
      internalValueResult.backupInterfaceWeight = this._backupInterfaceWeight;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoSecureInternetGatewayFeatureTemplateServicesInterfacePairs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._activeInterface = undefined;
      this._activeInterfaceWeight = undefined;
      this._backupInterface = undefined;
      this._backupInterfaceWeight = undefined;
      this._optional = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._activeInterface = value.activeInterface;
      this._activeInterfaceWeight = value.activeInterfaceWeight;
      this._backupInterface = value.backupInterface;
      this._backupInterfaceWeight = value.backupInterfaceWeight;
      this._optional = value.optional;
    }
  }

  // active_interface - computed: false, optional: true, required: false
  private _activeInterface?: string; 
  public get activeInterface() {
    return this.getStringAttribute('active_interface');
  }
  public set activeInterface(value: string) {
    this._activeInterface = value;
  }
  public resetActiveInterface() {
    this._activeInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInterfaceInput() {
    return this._activeInterface;
  }

  // active_interface_weight - computed: false, optional: true, required: false
  private _activeInterfaceWeight?: number; 
  public get activeInterfaceWeight() {
    return this.getNumberAttribute('active_interface_weight');
  }
  public set activeInterfaceWeight(value: number) {
    this._activeInterfaceWeight = value;
  }
  public resetActiveInterfaceWeight() {
    this._activeInterfaceWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeInterfaceWeightInput() {
    return this._activeInterfaceWeight;
  }

  // backup_interface - computed: false, optional: true, required: false
  private _backupInterface?: string; 
  public get backupInterface() {
    return this.getStringAttribute('backup_interface');
  }
  public set backupInterface(value: string) {
    this._backupInterface = value;
  }
  public resetBackupInterface() {
    this._backupInterface = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInterfaceInput() {
    return this._backupInterface;
  }

  // backup_interface_weight - computed: false, optional: true, required: false
  private _backupInterfaceWeight?: number; 
  public get backupInterfaceWeight() {
    return this.getNumberAttribute('backup_interface_weight');
  }
  public set backupInterfaceWeight(value: number) {
    this._backupInterfaceWeight = value;
  }
  public resetBackupInterfaceWeight() {
    this._backupInterfaceWeight = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupInterfaceWeightInput() {
    return this._backupInterfaceWeight;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }
}

export class CiscoSecureInternetGatewayFeatureTemplateServicesInterfacePairsList extends cdktf.ComplexList {
  public internalValue? : CiscoSecureInternetGatewayFeatureTemplateServicesInterfacePairs[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CiscoSecureInternetGatewayFeatureTemplateServicesInterfacePairsOutputReference {
    return new CiscoSecureInternetGatewayFeatureTemplateServicesInterfacePairsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoSecureInternetGatewayFeatureTemplateServices {
  /**
  * Interface Pair for active and backup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#interface_pairs CiscoSecureInternetGatewayFeatureTemplate#interface_pairs}
  */
  readonly interfacePairs?: CiscoSecureInternetGatewayFeatureTemplateServicesInterfacePairs[] | cdktf.IResolvable;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#optional CiscoSecureInternetGatewayFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Service Type
  *   - Choices: `sig`
  *   - Default value: `sig`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#service_type CiscoSecureInternetGatewayFeatureTemplate#service_type}
  */
  readonly serviceType?: string;
  /**
  * Umbrella Primary Datacenter
  *   - Default value: `Auto`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#umbrella_primary_data_center CiscoSecureInternetGatewayFeatureTemplate#umbrella_primary_data_center}
  */
  readonly umbrellaPrimaryDataCenter?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#umbrella_primary_data_center_variable CiscoSecureInternetGatewayFeatureTemplate#umbrella_primary_data_center_variable}
  */
  readonly umbrellaPrimaryDataCenterVariable?: string;
  /**
  * Umbrella Secondary Datacenter
  *   - Default value: `Auto`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#umbrella_secondary_data_center CiscoSecureInternetGatewayFeatureTemplate#umbrella_secondary_data_center}
  */
  readonly umbrellaSecondaryDataCenter?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#umbrella_secondary_data_center_variable CiscoSecureInternetGatewayFeatureTemplate#umbrella_secondary_data_center_variable}
  */
  readonly umbrellaSecondaryDataCenterVariable?: string;
  /**
  * For first-time Acceptable User Policy behavior, block Internet access
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#zscaler_aup_block_internet_until_accepted CiscoSecureInternetGatewayFeatureTemplate#zscaler_aup_block_internet_until_accepted}
  */
  readonly zscalerAupBlockInternetUntilAccepted?: boolean | cdktf.IResolvable;
  /**
  * Enable Acceptable User Policy
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#zscaler_aup_enabled CiscoSecureInternetGatewayFeatureTemplate#zscaler_aup_enabled}
  */
  readonly zscalerAupEnabled?: boolean | cdktf.IResolvable;
  /**
  * For first-time Acceptable User Policy behavior, force SSL inspection
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#zscaler_aup_force_ssl_inspection CiscoSecureInternetGatewayFeatureTemplate#zscaler_aup_force_ssl_inspection}
  */
  readonly zscalerAupForceSslInspection?: boolean | cdktf.IResolvable;
  /**
  * Custom Acceptable User Policy frequency in days
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#zscaler_aup_timeout CiscoSecureInternetGatewayFeatureTemplate#zscaler_aup_timeout}
  */
  readonly zscalerAupTimeout?: number;
  /**
  * Enforce Authentication
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#zscaler_authentication_required CiscoSecureInternetGatewayFeatureTemplate#zscaler_authentication_required}
  */
  readonly zscalerAuthenticationRequired?: boolean | cdktf.IResolvable;
  /**
  * Enable Caution
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#zscaler_caution_enabled CiscoSecureInternetGatewayFeatureTemplate#zscaler_caution_enabled}
  */
  readonly zscalerCautionEnabled?: boolean | cdktf.IResolvable;
  /**
  * Firewall enabled
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#zscaler_firewall_enabled CiscoSecureInternetGatewayFeatureTemplate#zscaler_firewall_enabled}
  */
  readonly zscalerFirewallEnabled?: boolean | cdktf.IResolvable;
  /**
  * Enable IPS Control
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#zscaler_ips_control_enabled CiscoSecureInternetGatewayFeatureTemplate#zscaler_ips_control_enabled}
  */
  readonly zscalerIpsControlEnabled?: boolean | cdktf.IResolvable;
  /**
  * Zscaler location name (optional)
  *   - Default value: `Auto`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#zscaler_location_name CiscoSecureInternetGatewayFeatureTemplate#zscaler_location_name}
  */
  readonly zscalerLocationName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#zscaler_location_name_variable CiscoSecureInternetGatewayFeatureTemplate#zscaler_location_name_variable}
  */
  readonly zscalerLocationNameVariable?: string;
  /**
  * Custom Primary Datacenter
  *   - Default value: `Auto`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#zscaler_primary_data_center CiscoSecureInternetGatewayFeatureTemplate#zscaler_primary_data_center}
  */
  readonly zscalerPrimaryDataCenter?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#zscaler_primary_data_center_variable CiscoSecureInternetGatewayFeatureTemplate#zscaler_primary_data_center_variable}
  */
  readonly zscalerPrimaryDataCenterVariable?: string;
  /**
  * Custom Secondary Datacenter
  *   - Default value: `Auto`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#zscaler_secondary_data_center CiscoSecureInternetGatewayFeatureTemplate#zscaler_secondary_data_center}
  */
  readonly zscalerSecondaryDataCenter?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#zscaler_secondary_data_center_variable CiscoSecureInternetGatewayFeatureTemplate#zscaler_secondary_data_center_variable}
  */
  readonly zscalerSecondaryDataCenterVariable?: string;
  /**
  * Display time unit
  *   - Choices: `MINUTE`, `HOUR`, `DAY`
  *   - Default value: `MINUTE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#zscaler_surrogate_display_time_unit CiscoSecureInternetGatewayFeatureTemplate#zscaler_surrogate_display_time_unit}
  */
  readonly zscalerSurrogateDisplayTimeUnit?: string;
  /**
  * Idle time to disassociation
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#zscaler_surrogate_idle_time CiscoSecureInternetGatewayFeatureTemplate#zscaler_surrogate_idle_time}
  */
  readonly zscalerSurrogateIdleTime?: number;
  /**
  * Enable Surrogate IP
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#zscaler_surrogate_ip CiscoSecureInternetGatewayFeatureTemplate#zscaler_surrogate_ip}
  */
  readonly zscalerSurrogateIp?: boolean | cdktf.IResolvable;
  /**
  * Enforce Surrogate IP for known browsers
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#zscaler_surrogate_ip_enforce_for_known_browsers CiscoSecureInternetGatewayFeatureTemplate#zscaler_surrogate_ip_enforce_for_known_browsers}
  */
  readonly zscalerSurrogateIpEnforceForKnownBrowsers?: boolean | cdktf.IResolvable;
  /**
  * Refresh time for re-validation of surrogacy in minutes
  *   - Default value: `0`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#zscaler_surrogate_refresh_time CiscoSecureInternetGatewayFeatureTemplate#zscaler_surrogate_refresh_time}
  */
  readonly zscalerSurrogateRefreshTime?: number;
  /**
  * Refresh Time unit
  *   - Choices: `MINUTE`, `HOUR`, `DAY`
  *   - Default value: `MINUTE`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#zscaler_surrogate_refresh_time_unit CiscoSecureInternetGatewayFeatureTemplate#zscaler_surrogate_refresh_time_unit}
  */
  readonly zscalerSurrogateRefreshTimeUnit?: string;
  /**
  * XFF forwarding enabled
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#zscaler_xff_forward CiscoSecureInternetGatewayFeatureTemplate#zscaler_xff_forward}
  */
  readonly zscalerXffForward?: boolean | cdktf.IResolvable;
}

export function ciscoSecureInternetGatewayFeatureTemplateServicesToTerraform(struct?: CiscoSecureInternetGatewayFeatureTemplateServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interface_pairs: cdktf.listMapper(ciscoSecureInternetGatewayFeatureTemplateServicesInterfacePairsToTerraform, false)(struct!.interfacePairs),
    optional: cdktf.booleanToTerraform(struct!.optional),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
    umbrella_primary_data_center: cdktf.stringToTerraform(struct!.umbrellaPrimaryDataCenter),
    umbrella_primary_data_center_variable: cdktf.stringToTerraform(struct!.umbrellaPrimaryDataCenterVariable),
    umbrella_secondary_data_center: cdktf.stringToTerraform(struct!.umbrellaSecondaryDataCenter),
    umbrella_secondary_data_center_variable: cdktf.stringToTerraform(struct!.umbrellaSecondaryDataCenterVariable),
    zscaler_aup_block_internet_until_accepted: cdktf.booleanToTerraform(struct!.zscalerAupBlockInternetUntilAccepted),
    zscaler_aup_enabled: cdktf.booleanToTerraform(struct!.zscalerAupEnabled),
    zscaler_aup_force_ssl_inspection: cdktf.booleanToTerraform(struct!.zscalerAupForceSslInspection),
    zscaler_aup_timeout: cdktf.numberToTerraform(struct!.zscalerAupTimeout),
    zscaler_authentication_required: cdktf.booleanToTerraform(struct!.zscalerAuthenticationRequired),
    zscaler_caution_enabled: cdktf.booleanToTerraform(struct!.zscalerCautionEnabled),
    zscaler_firewall_enabled: cdktf.booleanToTerraform(struct!.zscalerFirewallEnabled),
    zscaler_ips_control_enabled: cdktf.booleanToTerraform(struct!.zscalerIpsControlEnabled),
    zscaler_location_name: cdktf.stringToTerraform(struct!.zscalerLocationName),
    zscaler_location_name_variable: cdktf.stringToTerraform(struct!.zscalerLocationNameVariable),
    zscaler_primary_data_center: cdktf.stringToTerraform(struct!.zscalerPrimaryDataCenter),
    zscaler_primary_data_center_variable: cdktf.stringToTerraform(struct!.zscalerPrimaryDataCenterVariable),
    zscaler_secondary_data_center: cdktf.stringToTerraform(struct!.zscalerSecondaryDataCenter),
    zscaler_secondary_data_center_variable: cdktf.stringToTerraform(struct!.zscalerSecondaryDataCenterVariable),
    zscaler_surrogate_display_time_unit: cdktf.stringToTerraform(struct!.zscalerSurrogateDisplayTimeUnit),
    zscaler_surrogate_idle_time: cdktf.numberToTerraform(struct!.zscalerSurrogateIdleTime),
    zscaler_surrogate_ip: cdktf.booleanToTerraform(struct!.zscalerSurrogateIp),
    zscaler_surrogate_ip_enforce_for_known_browsers: cdktf.booleanToTerraform(struct!.zscalerSurrogateIpEnforceForKnownBrowsers),
    zscaler_surrogate_refresh_time: cdktf.numberToTerraform(struct!.zscalerSurrogateRefreshTime),
    zscaler_surrogate_refresh_time_unit: cdktf.stringToTerraform(struct!.zscalerSurrogateRefreshTimeUnit),
    zscaler_xff_forward: cdktf.booleanToTerraform(struct!.zscalerXffForward),
  }
}


export function ciscoSecureInternetGatewayFeatureTemplateServicesToHclTerraform(struct?: CiscoSecureInternetGatewayFeatureTemplateServices | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interface_pairs: {
      value: cdktf.listMapperHcl(ciscoSecureInternetGatewayFeatureTemplateServicesInterfacePairsToHclTerraform, false)(struct!.interfacePairs),
      isBlock: true,
      type: "list",
      storageClassType: "CiscoSecureInternetGatewayFeatureTemplateServicesInterfacePairsList",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    umbrella_primary_data_center: {
      value: cdktf.stringToHclTerraform(struct!.umbrellaPrimaryDataCenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    umbrella_primary_data_center_variable: {
      value: cdktf.stringToHclTerraform(struct!.umbrellaPrimaryDataCenterVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    umbrella_secondary_data_center: {
      value: cdktf.stringToHclTerraform(struct!.umbrellaSecondaryDataCenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    umbrella_secondary_data_center_variable: {
      value: cdktf.stringToHclTerraform(struct!.umbrellaSecondaryDataCenterVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zscaler_aup_block_internet_until_accepted: {
      value: cdktf.booleanToHclTerraform(struct!.zscalerAupBlockInternetUntilAccepted),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zscaler_aup_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.zscalerAupEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zscaler_aup_force_ssl_inspection: {
      value: cdktf.booleanToHclTerraform(struct!.zscalerAupForceSslInspection),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zscaler_aup_timeout: {
      value: cdktf.numberToHclTerraform(struct!.zscalerAupTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zscaler_authentication_required: {
      value: cdktf.booleanToHclTerraform(struct!.zscalerAuthenticationRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zscaler_caution_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.zscalerCautionEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zscaler_firewall_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.zscalerFirewallEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zscaler_ips_control_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.zscalerIpsControlEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zscaler_location_name: {
      value: cdktf.stringToHclTerraform(struct!.zscalerLocationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zscaler_location_name_variable: {
      value: cdktf.stringToHclTerraform(struct!.zscalerLocationNameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zscaler_primary_data_center: {
      value: cdktf.stringToHclTerraform(struct!.zscalerPrimaryDataCenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zscaler_primary_data_center_variable: {
      value: cdktf.stringToHclTerraform(struct!.zscalerPrimaryDataCenterVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zscaler_secondary_data_center: {
      value: cdktf.stringToHclTerraform(struct!.zscalerSecondaryDataCenter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zscaler_secondary_data_center_variable: {
      value: cdktf.stringToHclTerraform(struct!.zscalerSecondaryDataCenterVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zscaler_surrogate_display_time_unit: {
      value: cdktf.stringToHclTerraform(struct!.zscalerSurrogateDisplayTimeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zscaler_surrogate_idle_time: {
      value: cdktf.numberToHclTerraform(struct!.zscalerSurrogateIdleTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zscaler_surrogate_ip: {
      value: cdktf.booleanToHclTerraform(struct!.zscalerSurrogateIp),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zscaler_surrogate_ip_enforce_for_known_browsers: {
      value: cdktf.booleanToHclTerraform(struct!.zscalerSurrogateIpEnforceForKnownBrowsers),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    zscaler_surrogate_refresh_time: {
      value: cdktf.numberToHclTerraform(struct!.zscalerSurrogateRefreshTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    zscaler_surrogate_refresh_time_unit: {
      value: cdktf.stringToHclTerraform(struct!.zscalerSurrogateRefreshTimeUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    zscaler_xff_forward: {
      value: cdktf.booleanToHclTerraform(struct!.zscalerXffForward),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoSecureInternetGatewayFeatureTemplateServicesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CiscoSecureInternetGatewayFeatureTemplateServices | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interfacePairs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interfacePairs = this._interfacePairs?.internalValue;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    if (this._umbrellaPrimaryDataCenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.umbrellaPrimaryDataCenter = this._umbrellaPrimaryDataCenter;
    }
    if (this._umbrellaPrimaryDataCenterVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.umbrellaPrimaryDataCenterVariable = this._umbrellaPrimaryDataCenterVariable;
    }
    if (this._umbrellaSecondaryDataCenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.umbrellaSecondaryDataCenter = this._umbrellaSecondaryDataCenter;
    }
    if (this._umbrellaSecondaryDataCenterVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.umbrellaSecondaryDataCenterVariable = this._umbrellaSecondaryDataCenterVariable;
    }
    if (this._zscalerAupBlockInternetUntilAccepted !== undefined) {
      hasAnyValues = true;
      internalValueResult.zscalerAupBlockInternetUntilAccepted = this._zscalerAupBlockInternetUntilAccepted;
    }
    if (this._zscalerAupEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.zscalerAupEnabled = this._zscalerAupEnabled;
    }
    if (this._zscalerAupForceSslInspection !== undefined) {
      hasAnyValues = true;
      internalValueResult.zscalerAupForceSslInspection = this._zscalerAupForceSslInspection;
    }
    if (this._zscalerAupTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.zscalerAupTimeout = this._zscalerAupTimeout;
    }
    if (this._zscalerAuthenticationRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.zscalerAuthenticationRequired = this._zscalerAuthenticationRequired;
    }
    if (this._zscalerCautionEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.zscalerCautionEnabled = this._zscalerCautionEnabled;
    }
    if (this._zscalerFirewallEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.zscalerFirewallEnabled = this._zscalerFirewallEnabled;
    }
    if (this._zscalerIpsControlEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.zscalerIpsControlEnabled = this._zscalerIpsControlEnabled;
    }
    if (this._zscalerLocationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.zscalerLocationName = this._zscalerLocationName;
    }
    if (this._zscalerLocationNameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.zscalerLocationNameVariable = this._zscalerLocationNameVariable;
    }
    if (this._zscalerPrimaryDataCenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.zscalerPrimaryDataCenter = this._zscalerPrimaryDataCenter;
    }
    if (this._zscalerPrimaryDataCenterVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.zscalerPrimaryDataCenterVariable = this._zscalerPrimaryDataCenterVariable;
    }
    if (this._zscalerSecondaryDataCenter !== undefined) {
      hasAnyValues = true;
      internalValueResult.zscalerSecondaryDataCenter = this._zscalerSecondaryDataCenter;
    }
    if (this._zscalerSecondaryDataCenterVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.zscalerSecondaryDataCenterVariable = this._zscalerSecondaryDataCenterVariable;
    }
    if (this._zscalerSurrogateDisplayTimeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.zscalerSurrogateDisplayTimeUnit = this._zscalerSurrogateDisplayTimeUnit;
    }
    if (this._zscalerSurrogateIdleTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.zscalerSurrogateIdleTime = this._zscalerSurrogateIdleTime;
    }
    if (this._zscalerSurrogateIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.zscalerSurrogateIp = this._zscalerSurrogateIp;
    }
    if (this._zscalerSurrogateIpEnforceForKnownBrowsers !== undefined) {
      hasAnyValues = true;
      internalValueResult.zscalerSurrogateIpEnforceForKnownBrowsers = this._zscalerSurrogateIpEnforceForKnownBrowsers;
    }
    if (this._zscalerSurrogateRefreshTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.zscalerSurrogateRefreshTime = this._zscalerSurrogateRefreshTime;
    }
    if (this._zscalerSurrogateRefreshTimeUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.zscalerSurrogateRefreshTimeUnit = this._zscalerSurrogateRefreshTimeUnit;
    }
    if (this._zscalerXffForward !== undefined) {
      hasAnyValues = true;
      internalValueResult.zscalerXffForward = this._zscalerXffForward;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoSecureInternetGatewayFeatureTemplateServices | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._interfacePairs.internalValue = undefined;
      this._optional = undefined;
      this._serviceType = undefined;
      this._umbrellaPrimaryDataCenter = undefined;
      this._umbrellaPrimaryDataCenterVariable = undefined;
      this._umbrellaSecondaryDataCenter = undefined;
      this._umbrellaSecondaryDataCenterVariable = undefined;
      this._zscalerAupBlockInternetUntilAccepted = undefined;
      this._zscalerAupEnabled = undefined;
      this._zscalerAupForceSslInspection = undefined;
      this._zscalerAupTimeout = undefined;
      this._zscalerAuthenticationRequired = undefined;
      this._zscalerCautionEnabled = undefined;
      this._zscalerFirewallEnabled = undefined;
      this._zscalerIpsControlEnabled = undefined;
      this._zscalerLocationName = undefined;
      this._zscalerLocationNameVariable = undefined;
      this._zscalerPrimaryDataCenter = undefined;
      this._zscalerPrimaryDataCenterVariable = undefined;
      this._zscalerSecondaryDataCenter = undefined;
      this._zscalerSecondaryDataCenterVariable = undefined;
      this._zscalerSurrogateDisplayTimeUnit = undefined;
      this._zscalerSurrogateIdleTime = undefined;
      this._zscalerSurrogateIp = undefined;
      this._zscalerSurrogateIpEnforceForKnownBrowsers = undefined;
      this._zscalerSurrogateRefreshTime = undefined;
      this._zscalerSurrogateRefreshTimeUnit = undefined;
      this._zscalerXffForward = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._interfacePairs.internalValue = value.interfacePairs;
      this._optional = value.optional;
      this._serviceType = value.serviceType;
      this._umbrellaPrimaryDataCenter = value.umbrellaPrimaryDataCenter;
      this._umbrellaPrimaryDataCenterVariable = value.umbrellaPrimaryDataCenterVariable;
      this._umbrellaSecondaryDataCenter = value.umbrellaSecondaryDataCenter;
      this._umbrellaSecondaryDataCenterVariable = value.umbrellaSecondaryDataCenterVariable;
      this._zscalerAupBlockInternetUntilAccepted = value.zscalerAupBlockInternetUntilAccepted;
      this._zscalerAupEnabled = value.zscalerAupEnabled;
      this._zscalerAupForceSslInspection = value.zscalerAupForceSslInspection;
      this._zscalerAupTimeout = value.zscalerAupTimeout;
      this._zscalerAuthenticationRequired = value.zscalerAuthenticationRequired;
      this._zscalerCautionEnabled = value.zscalerCautionEnabled;
      this._zscalerFirewallEnabled = value.zscalerFirewallEnabled;
      this._zscalerIpsControlEnabled = value.zscalerIpsControlEnabled;
      this._zscalerLocationName = value.zscalerLocationName;
      this._zscalerLocationNameVariable = value.zscalerLocationNameVariable;
      this._zscalerPrimaryDataCenter = value.zscalerPrimaryDataCenter;
      this._zscalerPrimaryDataCenterVariable = value.zscalerPrimaryDataCenterVariable;
      this._zscalerSecondaryDataCenter = value.zscalerSecondaryDataCenter;
      this._zscalerSecondaryDataCenterVariable = value.zscalerSecondaryDataCenterVariable;
      this._zscalerSurrogateDisplayTimeUnit = value.zscalerSurrogateDisplayTimeUnit;
      this._zscalerSurrogateIdleTime = value.zscalerSurrogateIdleTime;
      this._zscalerSurrogateIp = value.zscalerSurrogateIp;
      this._zscalerSurrogateIpEnforceForKnownBrowsers = value.zscalerSurrogateIpEnforceForKnownBrowsers;
      this._zscalerSurrogateRefreshTime = value.zscalerSurrogateRefreshTime;
      this._zscalerSurrogateRefreshTimeUnit = value.zscalerSurrogateRefreshTimeUnit;
      this._zscalerXffForward = value.zscalerXffForward;
    }
  }

  // interface_pairs - computed: false, optional: true, required: false
  private _interfacePairs = new CiscoSecureInternetGatewayFeatureTemplateServicesInterfacePairsList(this, "interface_pairs", false);
  public get interfacePairs() {
    return this._interfacePairs;
  }
  public putInterfacePairs(value: CiscoSecureInternetGatewayFeatureTemplateServicesInterfacePairs[] | cdktf.IResolvable) {
    this._interfacePairs.internalValue = value;
  }
  public resetInterfacePairs() {
    this._interfacePairs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacePairsInput() {
    return this._interfacePairs.internalValue;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // service_type - computed: false, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // umbrella_primary_data_center - computed: false, optional: true, required: false
  private _umbrellaPrimaryDataCenter?: string; 
  public get umbrellaPrimaryDataCenter() {
    return this.getStringAttribute('umbrella_primary_data_center');
  }
  public set umbrellaPrimaryDataCenter(value: string) {
    this._umbrellaPrimaryDataCenter = value;
  }
  public resetUmbrellaPrimaryDataCenter() {
    this._umbrellaPrimaryDataCenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get umbrellaPrimaryDataCenterInput() {
    return this._umbrellaPrimaryDataCenter;
  }

  // umbrella_primary_data_center_variable - computed: false, optional: true, required: false
  private _umbrellaPrimaryDataCenterVariable?: string; 
  public get umbrellaPrimaryDataCenterVariable() {
    return this.getStringAttribute('umbrella_primary_data_center_variable');
  }
  public set umbrellaPrimaryDataCenterVariable(value: string) {
    this._umbrellaPrimaryDataCenterVariable = value;
  }
  public resetUmbrellaPrimaryDataCenterVariable() {
    this._umbrellaPrimaryDataCenterVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get umbrellaPrimaryDataCenterVariableInput() {
    return this._umbrellaPrimaryDataCenterVariable;
  }

  // umbrella_secondary_data_center - computed: false, optional: true, required: false
  private _umbrellaSecondaryDataCenter?: string; 
  public get umbrellaSecondaryDataCenter() {
    return this.getStringAttribute('umbrella_secondary_data_center');
  }
  public set umbrellaSecondaryDataCenter(value: string) {
    this._umbrellaSecondaryDataCenter = value;
  }
  public resetUmbrellaSecondaryDataCenter() {
    this._umbrellaSecondaryDataCenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get umbrellaSecondaryDataCenterInput() {
    return this._umbrellaSecondaryDataCenter;
  }

  // umbrella_secondary_data_center_variable - computed: false, optional: true, required: false
  private _umbrellaSecondaryDataCenterVariable?: string; 
  public get umbrellaSecondaryDataCenterVariable() {
    return this.getStringAttribute('umbrella_secondary_data_center_variable');
  }
  public set umbrellaSecondaryDataCenterVariable(value: string) {
    this._umbrellaSecondaryDataCenterVariable = value;
  }
  public resetUmbrellaSecondaryDataCenterVariable() {
    this._umbrellaSecondaryDataCenterVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get umbrellaSecondaryDataCenterVariableInput() {
    return this._umbrellaSecondaryDataCenterVariable;
  }

  // zscaler_aup_block_internet_until_accepted - computed: false, optional: true, required: false
  private _zscalerAupBlockInternetUntilAccepted?: boolean | cdktf.IResolvable; 
  public get zscalerAupBlockInternetUntilAccepted() {
    return this.getBooleanAttribute('zscaler_aup_block_internet_until_accepted');
  }
  public set zscalerAupBlockInternetUntilAccepted(value: boolean | cdktf.IResolvable) {
    this._zscalerAupBlockInternetUntilAccepted = value;
  }
  public resetZscalerAupBlockInternetUntilAccepted() {
    this._zscalerAupBlockInternetUntilAccepted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerAupBlockInternetUntilAcceptedInput() {
    return this._zscalerAupBlockInternetUntilAccepted;
  }

  // zscaler_aup_enabled - computed: false, optional: true, required: false
  private _zscalerAupEnabled?: boolean | cdktf.IResolvable; 
  public get zscalerAupEnabled() {
    return this.getBooleanAttribute('zscaler_aup_enabled');
  }
  public set zscalerAupEnabled(value: boolean | cdktf.IResolvable) {
    this._zscalerAupEnabled = value;
  }
  public resetZscalerAupEnabled() {
    this._zscalerAupEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerAupEnabledInput() {
    return this._zscalerAupEnabled;
  }

  // zscaler_aup_force_ssl_inspection - computed: false, optional: true, required: false
  private _zscalerAupForceSslInspection?: boolean | cdktf.IResolvable; 
  public get zscalerAupForceSslInspection() {
    return this.getBooleanAttribute('zscaler_aup_force_ssl_inspection');
  }
  public set zscalerAupForceSslInspection(value: boolean | cdktf.IResolvable) {
    this._zscalerAupForceSslInspection = value;
  }
  public resetZscalerAupForceSslInspection() {
    this._zscalerAupForceSslInspection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerAupForceSslInspectionInput() {
    return this._zscalerAupForceSslInspection;
  }

  // zscaler_aup_timeout - computed: false, optional: true, required: false
  private _zscalerAupTimeout?: number; 
  public get zscalerAupTimeout() {
    return this.getNumberAttribute('zscaler_aup_timeout');
  }
  public set zscalerAupTimeout(value: number) {
    this._zscalerAupTimeout = value;
  }
  public resetZscalerAupTimeout() {
    this._zscalerAupTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerAupTimeoutInput() {
    return this._zscalerAupTimeout;
  }

  // zscaler_authentication_required - computed: false, optional: true, required: false
  private _zscalerAuthenticationRequired?: boolean | cdktf.IResolvable; 
  public get zscalerAuthenticationRequired() {
    return this.getBooleanAttribute('zscaler_authentication_required');
  }
  public set zscalerAuthenticationRequired(value: boolean | cdktf.IResolvable) {
    this._zscalerAuthenticationRequired = value;
  }
  public resetZscalerAuthenticationRequired() {
    this._zscalerAuthenticationRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerAuthenticationRequiredInput() {
    return this._zscalerAuthenticationRequired;
  }

  // zscaler_caution_enabled - computed: false, optional: true, required: false
  private _zscalerCautionEnabled?: boolean | cdktf.IResolvable; 
  public get zscalerCautionEnabled() {
    return this.getBooleanAttribute('zscaler_caution_enabled');
  }
  public set zscalerCautionEnabled(value: boolean | cdktf.IResolvable) {
    this._zscalerCautionEnabled = value;
  }
  public resetZscalerCautionEnabled() {
    this._zscalerCautionEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerCautionEnabledInput() {
    return this._zscalerCautionEnabled;
  }

  // zscaler_firewall_enabled - computed: false, optional: true, required: false
  private _zscalerFirewallEnabled?: boolean | cdktf.IResolvable; 
  public get zscalerFirewallEnabled() {
    return this.getBooleanAttribute('zscaler_firewall_enabled');
  }
  public set zscalerFirewallEnabled(value: boolean | cdktf.IResolvable) {
    this._zscalerFirewallEnabled = value;
  }
  public resetZscalerFirewallEnabled() {
    this._zscalerFirewallEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerFirewallEnabledInput() {
    return this._zscalerFirewallEnabled;
  }

  // zscaler_ips_control_enabled - computed: false, optional: true, required: false
  private _zscalerIpsControlEnabled?: boolean | cdktf.IResolvable; 
  public get zscalerIpsControlEnabled() {
    return this.getBooleanAttribute('zscaler_ips_control_enabled');
  }
  public set zscalerIpsControlEnabled(value: boolean | cdktf.IResolvable) {
    this._zscalerIpsControlEnabled = value;
  }
  public resetZscalerIpsControlEnabled() {
    this._zscalerIpsControlEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerIpsControlEnabledInput() {
    return this._zscalerIpsControlEnabled;
  }

  // zscaler_location_name - computed: false, optional: true, required: false
  private _zscalerLocationName?: string; 
  public get zscalerLocationName() {
    return this.getStringAttribute('zscaler_location_name');
  }
  public set zscalerLocationName(value: string) {
    this._zscalerLocationName = value;
  }
  public resetZscalerLocationName() {
    this._zscalerLocationName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerLocationNameInput() {
    return this._zscalerLocationName;
  }

  // zscaler_location_name_variable - computed: false, optional: true, required: false
  private _zscalerLocationNameVariable?: string; 
  public get zscalerLocationNameVariable() {
    return this.getStringAttribute('zscaler_location_name_variable');
  }
  public set zscalerLocationNameVariable(value: string) {
    this._zscalerLocationNameVariable = value;
  }
  public resetZscalerLocationNameVariable() {
    this._zscalerLocationNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerLocationNameVariableInput() {
    return this._zscalerLocationNameVariable;
  }

  // zscaler_primary_data_center - computed: false, optional: true, required: false
  private _zscalerPrimaryDataCenter?: string; 
  public get zscalerPrimaryDataCenter() {
    return this.getStringAttribute('zscaler_primary_data_center');
  }
  public set zscalerPrimaryDataCenter(value: string) {
    this._zscalerPrimaryDataCenter = value;
  }
  public resetZscalerPrimaryDataCenter() {
    this._zscalerPrimaryDataCenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerPrimaryDataCenterInput() {
    return this._zscalerPrimaryDataCenter;
  }

  // zscaler_primary_data_center_variable - computed: false, optional: true, required: false
  private _zscalerPrimaryDataCenterVariable?: string; 
  public get zscalerPrimaryDataCenterVariable() {
    return this.getStringAttribute('zscaler_primary_data_center_variable');
  }
  public set zscalerPrimaryDataCenterVariable(value: string) {
    this._zscalerPrimaryDataCenterVariable = value;
  }
  public resetZscalerPrimaryDataCenterVariable() {
    this._zscalerPrimaryDataCenterVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerPrimaryDataCenterVariableInput() {
    return this._zscalerPrimaryDataCenterVariable;
  }

  // zscaler_secondary_data_center - computed: false, optional: true, required: false
  private _zscalerSecondaryDataCenter?: string; 
  public get zscalerSecondaryDataCenter() {
    return this.getStringAttribute('zscaler_secondary_data_center');
  }
  public set zscalerSecondaryDataCenter(value: string) {
    this._zscalerSecondaryDataCenter = value;
  }
  public resetZscalerSecondaryDataCenter() {
    this._zscalerSecondaryDataCenter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerSecondaryDataCenterInput() {
    return this._zscalerSecondaryDataCenter;
  }

  // zscaler_secondary_data_center_variable - computed: false, optional: true, required: false
  private _zscalerSecondaryDataCenterVariable?: string; 
  public get zscalerSecondaryDataCenterVariable() {
    return this.getStringAttribute('zscaler_secondary_data_center_variable');
  }
  public set zscalerSecondaryDataCenterVariable(value: string) {
    this._zscalerSecondaryDataCenterVariable = value;
  }
  public resetZscalerSecondaryDataCenterVariable() {
    this._zscalerSecondaryDataCenterVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerSecondaryDataCenterVariableInput() {
    return this._zscalerSecondaryDataCenterVariable;
  }

  // zscaler_surrogate_display_time_unit - computed: false, optional: true, required: false
  private _zscalerSurrogateDisplayTimeUnit?: string; 
  public get zscalerSurrogateDisplayTimeUnit() {
    return this.getStringAttribute('zscaler_surrogate_display_time_unit');
  }
  public set zscalerSurrogateDisplayTimeUnit(value: string) {
    this._zscalerSurrogateDisplayTimeUnit = value;
  }
  public resetZscalerSurrogateDisplayTimeUnit() {
    this._zscalerSurrogateDisplayTimeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerSurrogateDisplayTimeUnitInput() {
    return this._zscalerSurrogateDisplayTimeUnit;
  }

  // zscaler_surrogate_idle_time - computed: false, optional: true, required: false
  private _zscalerSurrogateIdleTime?: number; 
  public get zscalerSurrogateIdleTime() {
    return this.getNumberAttribute('zscaler_surrogate_idle_time');
  }
  public set zscalerSurrogateIdleTime(value: number) {
    this._zscalerSurrogateIdleTime = value;
  }
  public resetZscalerSurrogateIdleTime() {
    this._zscalerSurrogateIdleTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerSurrogateIdleTimeInput() {
    return this._zscalerSurrogateIdleTime;
  }

  // zscaler_surrogate_ip - computed: false, optional: true, required: false
  private _zscalerSurrogateIp?: boolean | cdktf.IResolvable; 
  public get zscalerSurrogateIp() {
    return this.getBooleanAttribute('zscaler_surrogate_ip');
  }
  public set zscalerSurrogateIp(value: boolean | cdktf.IResolvable) {
    this._zscalerSurrogateIp = value;
  }
  public resetZscalerSurrogateIp() {
    this._zscalerSurrogateIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerSurrogateIpInput() {
    return this._zscalerSurrogateIp;
  }

  // zscaler_surrogate_ip_enforce_for_known_browsers - computed: false, optional: true, required: false
  private _zscalerSurrogateIpEnforceForKnownBrowsers?: boolean | cdktf.IResolvable; 
  public get zscalerSurrogateIpEnforceForKnownBrowsers() {
    return this.getBooleanAttribute('zscaler_surrogate_ip_enforce_for_known_browsers');
  }
  public set zscalerSurrogateIpEnforceForKnownBrowsers(value: boolean | cdktf.IResolvable) {
    this._zscalerSurrogateIpEnforceForKnownBrowsers = value;
  }
  public resetZscalerSurrogateIpEnforceForKnownBrowsers() {
    this._zscalerSurrogateIpEnforceForKnownBrowsers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerSurrogateIpEnforceForKnownBrowsersInput() {
    return this._zscalerSurrogateIpEnforceForKnownBrowsers;
  }

  // zscaler_surrogate_refresh_time - computed: false, optional: true, required: false
  private _zscalerSurrogateRefreshTime?: number; 
  public get zscalerSurrogateRefreshTime() {
    return this.getNumberAttribute('zscaler_surrogate_refresh_time');
  }
  public set zscalerSurrogateRefreshTime(value: number) {
    this._zscalerSurrogateRefreshTime = value;
  }
  public resetZscalerSurrogateRefreshTime() {
    this._zscalerSurrogateRefreshTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerSurrogateRefreshTimeInput() {
    return this._zscalerSurrogateRefreshTime;
  }

  // zscaler_surrogate_refresh_time_unit - computed: false, optional: true, required: false
  private _zscalerSurrogateRefreshTimeUnit?: string; 
  public get zscalerSurrogateRefreshTimeUnit() {
    return this.getStringAttribute('zscaler_surrogate_refresh_time_unit');
  }
  public set zscalerSurrogateRefreshTimeUnit(value: string) {
    this._zscalerSurrogateRefreshTimeUnit = value;
  }
  public resetZscalerSurrogateRefreshTimeUnit() {
    this._zscalerSurrogateRefreshTimeUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerSurrogateRefreshTimeUnitInput() {
    return this._zscalerSurrogateRefreshTimeUnit;
  }

  // zscaler_xff_forward - computed: false, optional: true, required: false
  private _zscalerXffForward?: boolean | cdktf.IResolvable; 
  public get zscalerXffForward() {
    return this.getBooleanAttribute('zscaler_xff_forward');
  }
  public set zscalerXffForward(value: boolean | cdktf.IResolvable) {
    this._zscalerXffForward = value;
  }
  public resetZscalerXffForward() {
    this._zscalerXffForward = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get zscalerXffForwardInput() {
    return this._zscalerXffForward;
  }
}

export class CiscoSecureInternetGatewayFeatureTemplateServicesList extends cdktf.ComplexList {
  public internalValue? : CiscoSecureInternetGatewayFeatureTemplateServices[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CiscoSecureInternetGatewayFeatureTemplateServicesOutputReference {
    return new CiscoSecureInternetGatewayFeatureTemplateServicesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface CiscoSecureInternetGatewayFeatureTemplateTrackers {
  /**
  * API url of endpoint
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#endpoint_api_url CiscoSecureInternetGatewayFeatureTemplate#endpoint_api_url}
  */
  readonly endpointApiUrl?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#endpoint_api_url_variable CiscoSecureInternetGatewayFeatureTemplate#endpoint_api_url_variable}
  */
  readonly endpointApiUrlVariable?: string;
  /**
  * Probe interval <10..600> seconds
  *   - Range: `20`-`600`
  *   - Default value: `60`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#interval CiscoSecureInternetGatewayFeatureTemplate#interval}
  */
  readonly interval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#interval_variable CiscoSecureInternetGatewayFeatureTemplate#interval_variable}
  */
  readonly intervalVariable?: string;
  /**
  * Probe failure multiplier <1..10> failed attempts
  *   - Range: `1`-`10`
  *   - Default value: `3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#multiplier CiscoSecureInternetGatewayFeatureTemplate#multiplier}
  */
  readonly multiplier?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#multiplier_variable CiscoSecureInternetGatewayFeatureTemplate#multiplier_variable}
  */
  readonly multiplierVariable?: string;
  /**
  * Tracker name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#name CiscoSecureInternetGatewayFeatureTemplate#name}
  */
  readonly name?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#name_variable CiscoSecureInternetGatewayFeatureTemplate#name_variable}
  */
  readonly nameVariable?: string;
  /**
  * Indicates if list item is considered optional.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#optional CiscoSecureInternetGatewayFeatureTemplate#optional}
  */
  readonly optional?: boolean | cdktf.IResolvable;
  /**
  * Probe Timeout threshold <100..1000> milliseconds
  *   - Range: `100`-`1000`
  *   - Default value: `300`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#threshold CiscoSecureInternetGatewayFeatureTemplate#threshold}
  */
  readonly threshold?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#threshold_variable CiscoSecureInternetGatewayFeatureTemplate#threshold_variable}
  */
  readonly thresholdVariable?: string;
  /**
  * 
  *   - Choices: `SIG`
  *   - Default value: ` SIG`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#tracker_type CiscoSecureInternetGatewayFeatureTemplate#tracker_type}
  */
  readonly trackerType?: string;
}

export function ciscoSecureInternetGatewayFeatureTemplateTrackersToTerraform(struct?: CiscoSecureInternetGatewayFeatureTemplateTrackers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    endpoint_api_url: cdktf.stringToTerraform(struct!.endpointApiUrl),
    endpoint_api_url_variable: cdktf.stringToTerraform(struct!.endpointApiUrlVariable),
    interval: cdktf.numberToTerraform(struct!.interval),
    interval_variable: cdktf.stringToTerraform(struct!.intervalVariable),
    multiplier: cdktf.numberToTerraform(struct!.multiplier),
    multiplier_variable: cdktf.stringToTerraform(struct!.multiplierVariable),
    name: cdktf.stringToTerraform(struct!.name),
    name_variable: cdktf.stringToTerraform(struct!.nameVariable),
    optional: cdktf.booleanToTerraform(struct!.optional),
    threshold: cdktf.numberToTerraform(struct!.threshold),
    threshold_variable: cdktf.stringToTerraform(struct!.thresholdVariable),
    tracker_type: cdktf.stringToTerraform(struct!.trackerType),
  }
}


export function ciscoSecureInternetGatewayFeatureTemplateTrackersToHclTerraform(struct?: CiscoSecureInternetGatewayFeatureTemplateTrackers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    endpoint_api_url: {
      value: cdktf.stringToHclTerraform(struct!.endpointApiUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    endpoint_api_url_variable: {
      value: cdktf.stringToHclTerraform(struct!.endpointApiUrlVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    interval_variable: {
      value: cdktf.stringToHclTerraform(struct!.intervalVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    multiplier: {
      value: cdktf.numberToHclTerraform(struct!.multiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    multiplier_variable: {
      value: cdktf.stringToHclTerraform(struct!.multiplierVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_variable: {
      value: cdktf.stringToHclTerraform(struct!.nameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    optional: {
      value: cdktf.booleanToHclTerraform(struct!.optional),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    threshold_variable: {
      value: cdktf.stringToHclTerraform(struct!.thresholdVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tracker_type: {
      value: cdktf.stringToHclTerraform(struct!.trackerType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CiscoSecureInternetGatewayFeatureTemplateTrackersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): CiscoSecureInternetGatewayFeatureTemplateTrackers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._endpointApiUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointApiUrl = this._endpointApiUrl;
    }
    if (this._endpointApiUrlVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.endpointApiUrlVariable = this._endpointApiUrlVariable;
    }
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._intervalVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.intervalVariable = this._intervalVariable;
    }
    if (this._multiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplier = this._multiplier;
    }
    if (this._multiplierVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplierVariable = this._multiplierVariable;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameVariable = this._nameVariable;
    }
    if (this._optional !== undefined) {
      hasAnyValues = true;
      internalValueResult.optional = this._optional;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    if (this._thresholdVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.thresholdVariable = this._thresholdVariable;
    }
    if (this._trackerType !== undefined) {
      hasAnyValues = true;
      internalValueResult.trackerType = this._trackerType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CiscoSecureInternetGatewayFeatureTemplateTrackers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._endpointApiUrl = undefined;
      this._endpointApiUrlVariable = undefined;
      this._interval = undefined;
      this._intervalVariable = undefined;
      this._multiplier = undefined;
      this._multiplierVariable = undefined;
      this._name = undefined;
      this._nameVariable = undefined;
      this._optional = undefined;
      this._threshold = undefined;
      this._thresholdVariable = undefined;
      this._trackerType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._endpointApiUrl = value.endpointApiUrl;
      this._endpointApiUrlVariable = value.endpointApiUrlVariable;
      this._interval = value.interval;
      this._intervalVariable = value.intervalVariable;
      this._multiplier = value.multiplier;
      this._multiplierVariable = value.multiplierVariable;
      this._name = value.name;
      this._nameVariable = value.nameVariable;
      this._optional = value.optional;
      this._threshold = value.threshold;
      this._thresholdVariable = value.thresholdVariable;
      this._trackerType = value.trackerType;
    }
  }

  // endpoint_api_url - computed: false, optional: true, required: false
  private _endpointApiUrl?: string; 
  public get endpointApiUrl() {
    return this.getStringAttribute('endpoint_api_url');
  }
  public set endpointApiUrl(value: string) {
    this._endpointApiUrl = value;
  }
  public resetEndpointApiUrl() {
    this._endpointApiUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointApiUrlInput() {
    return this._endpointApiUrl;
  }

  // endpoint_api_url_variable - computed: false, optional: true, required: false
  private _endpointApiUrlVariable?: string; 
  public get endpointApiUrlVariable() {
    return this.getStringAttribute('endpoint_api_url_variable');
  }
  public set endpointApiUrlVariable(value: string) {
    this._endpointApiUrlVariable = value;
  }
  public resetEndpointApiUrlVariable() {
    this._endpointApiUrlVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointApiUrlVariableInput() {
    return this._endpointApiUrlVariable;
  }

  // interval - computed: false, optional: true, required: false
  private _interval?: number; 
  public get interval() {
    return this.getNumberAttribute('interval');
  }
  public set interval(value: number) {
    this._interval = value;
  }
  public resetInterval() {
    this._interval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalInput() {
    return this._interval;
  }

  // interval_variable - computed: false, optional: true, required: false
  private _intervalVariable?: string; 
  public get intervalVariable() {
    return this.getStringAttribute('interval_variable');
  }
  public set intervalVariable(value: string) {
    this._intervalVariable = value;
  }
  public resetIntervalVariable() {
    this._intervalVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intervalVariableInput() {
    return this._intervalVariable;
  }

  // multiplier - computed: false, optional: true, required: false
  private _multiplier?: number; 
  public get multiplier() {
    return this.getNumberAttribute('multiplier');
  }
  public set multiplier(value: number) {
    this._multiplier = value;
  }
  public resetMultiplier() {
    this._multiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierInput() {
    return this._multiplier;
  }

  // multiplier_variable - computed: false, optional: true, required: false
  private _multiplierVariable?: string; 
  public get multiplierVariable() {
    return this.getStringAttribute('multiplier_variable');
  }
  public set multiplierVariable(value: string) {
    this._multiplierVariable = value;
  }
  public resetMultiplierVariable() {
    this._multiplierVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiplierVariableInput() {
    return this._multiplierVariable;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // name_variable - computed: false, optional: true, required: false
  private _nameVariable?: string; 
  public get nameVariable() {
    return this.getStringAttribute('name_variable');
  }
  public set nameVariable(value: string) {
    this._nameVariable = value;
  }
  public resetNameVariable() {
    this._nameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameVariableInput() {
    return this._nameVariable;
  }

  // optional - computed: false, optional: true, required: false
  private _optional?: boolean | cdktf.IResolvable; 
  public get optional() {
    return this.getBooleanAttribute('optional');
  }
  public set optional(value: boolean | cdktf.IResolvable) {
    this._optional = value;
  }
  public resetOptional() {
    this._optional = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalInput() {
    return this._optional;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // threshold_variable - computed: false, optional: true, required: false
  private _thresholdVariable?: string; 
  public get thresholdVariable() {
    return this.getStringAttribute('threshold_variable');
  }
  public set thresholdVariable(value: string) {
    this._thresholdVariable = value;
  }
  public resetThresholdVariable() {
    this._thresholdVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdVariableInput() {
    return this._thresholdVariable;
  }

  // tracker_type - computed: false, optional: true, required: false
  private _trackerType?: string; 
  public get trackerType() {
    return this.getStringAttribute('tracker_type');
  }
  public set trackerType(value: string) {
    this._trackerType = value;
  }
  public resetTrackerType() {
    this._trackerType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerTypeInput() {
    return this._trackerType;
  }
}

export class CiscoSecureInternetGatewayFeatureTemplateTrackersList extends cdktf.ComplexList {
  public internalValue? : CiscoSecureInternetGatewayFeatureTemplateTrackers[] | cdktf.IResolvable

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): CiscoSecureInternetGatewayFeatureTemplateTrackersOutputReference {
    return new CiscoSecureInternetGatewayFeatureTemplateTrackersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template sdwan_cisco_secure_internet_gateway_feature_template}
*/
export class CiscoSecureInternetGatewayFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_secure_internet_gateway_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiscoSecureInternetGatewayFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiscoSecureInternetGatewayFeatureTemplate to import
  * @param importFromId The id of the existing CiscoSecureInternetGatewayFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiscoSecureInternetGatewayFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_secure_internet_gateway_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_secure_internet_gateway_feature_template sdwan_cisco_secure_internet_gateway_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiscoSecureInternetGatewayFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiscoSecureInternetGatewayFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_secure_internet_gateway_feature_template',
      terraformGeneratorMetadata: {
        providerName: 'sdwan',
        providerVersion: '0.8.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._interfaces.internalValue = config.interfaces;
    this._name = config.name;
    this._services.internalValue = config.services;
    this._trackerSourceIp = config.trackerSourceIp;
    this._trackerSourceIpVariable = config.trackerSourceIpVariable;
    this._trackers.internalValue = config.trackers;
    this._vpnId = config.vpnId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: false, required: true
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // device_types - computed: false, optional: false, required: true
  private _deviceTypes?: string[]; 
  public get deviceTypes() {
    return cdktf.Fn.tolist(this.getListAttribute('device_types'));
  }
  public set deviceTypes(value: string[]) {
    this._deviceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypesInput() {
    return this._deviceTypes;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // interfaces - computed: false, optional: true, required: false
  private _interfaces = new CiscoSecureInternetGatewayFeatureTemplateInterfacesList(this, "interfaces", false);
  public get interfaces() {
    return this._interfaces;
  }
  public putInterfaces(value: CiscoSecureInternetGatewayFeatureTemplateInterfaces[] | cdktf.IResolvable) {
    this._interfaces.internalValue = value;
  }
  public resetInterfaces() {
    this._interfaces.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfacesInput() {
    return this._interfaces.internalValue;
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

  // services - computed: false, optional: true, required: false
  private _services = new CiscoSecureInternetGatewayFeatureTemplateServicesList(this, "services", false);
  public get services() {
    return this._services;
  }
  public putServices(value: CiscoSecureInternetGatewayFeatureTemplateServices[] | cdktf.IResolvable) {
    this._services.internalValue = value;
  }
  public resetServices() {
    this._services.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get servicesInput() {
    return this._services.internalValue;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // tracker_source_ip - computed: false, optional: true, required: false
  private _trackerSourceIp?: string; 
  public get trackerSourceIp() {
    return this.getStringAttribute('tracker_source_ip');
  }
  public set trackerSourceIp(value: string) {
    this._trackerSourceIp = value;
  }
  public resetTrackerSourceIp() {
    this._trackerSourceIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerSourceIpInput() {
    return this._trackerSourceIp;
  }

  // tracker_source_ip_variable - computed: false, optional: true, required: false
  private _trackerSourceIpVariable?: string; 
  public get trackerSourceIpVariable() {
    return this.getStringAttribute('tracker_source_ip_variable');
  }
  public set trackerSourceIpVariable(value: string) {
    this._trackerSourceIpVariable = value;
  }
  public resetTrackerSourceIpVariable() {
    this._trackerSourceIpVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerSourceIpVariableInput() {
    return this._trackerSourceIpVariable;
  }

  // trackers - computed: false, optional: true, required: false
  private _trackers = new CiscoSecureInternetGatewayFeatureTemplateTrackersList(this, "trackers", false);
  public get trackers() {
    return this._trackers;
  }
  public putTrackers(value: CiscoSecureInternetGatewayFeatureTemplateTrackers[] | cdktf.IResolvable) {
    this._trackers.internalValue = value;
  }
  public resetTrackers() {
    this._trackers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackersInput() {
    return this._trackers.internalValue;
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // vpn_id - computed: false, optional: true, required: false
  private _vpnId?: number; 
  public get vpnId() {
    return this.getNumberAttribute('vpn_id');
  }
  public set vpnId(value: number) {
    this._vpnId = value;
  }
  public resetVpnId() {
    this._vpnId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vpnIdInput() {
    return this._vpnId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      interfaces: cdktf.listMapper(ciscoSecureInternetGatewayFeatureTemplateInterfacesToTerraform, false)(this._interfaces.internalValue),
      name: cdktf.stringToTerraform(this._name),
      services: cdktf.listMapper(ciscoSecureInternetGatewayFeatureTemplateServicesToTerraform, false)(this._services.internalValue),
      tracker_source_ip: cdktf.stringToTerraform(this._trackerSourceIp),
      tracker_source_ip_variable: cdktf.stringToTerraform(this._trackerSourceIpVariable),
      trackers: cdktf.listMapper(ciscoSecureInternetGatewayFeatureTemplateTrackersToTerraform, false)(this._trackers.internalValue),
      vpn_id: cdktf.numberToTerraform(this._vpnId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_types: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._deviceTypes),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      interfaces: {
        value: cdktf.listMapperHcl(ciscoSecureInternetGatewayFeatureTemplateInterfacesToHclTerraform, false)(this._interfaces.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoSecureInternetGatewayFeatureTemplateInterfacesList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      services: {
        value: cdktf.listMapperHcl(ciscoSecureInternetGatewayFeatureTemplateServicesToHclTerraform, false)(this._services.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoSecureInternetGatewayFeatureTemplateServicesList",
      },
      tracker_source_ip: {
        value: cdktf.stringToHclTerraform(this._trackerSourceIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tracker_source_ip_variable: {
        value: cdktf.stringToHclTerraform(this._trackerSourceIpVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      trackers: {
        value: cdktf.listMapperHcl(ciscoSecureInternetGatewayFeatureTemplateTrackersToHclTerraform, false)(this._trackers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CiscoSecureInternetGatewayFeatureTemplateTrackersList",
      },
      vpn_id: {
        value: cdktf.numberToHclTerraform(this._vpnId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
