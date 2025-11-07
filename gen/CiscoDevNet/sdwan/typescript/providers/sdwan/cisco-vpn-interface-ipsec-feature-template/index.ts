// https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CiscoVpnInterfaceIpsecFeatureTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable Application Tunnel Type
  *   - Choices: `none`, `sig`
  *   - Default value: `none`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#application CiscoVpnInterfaceIpsecFeatureTemplate#application}
  */
  readonly application?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#application_variable CiscoVpnInterfaceIpsecFeatureTemplate#application_variable}
  */
  readonly applicationVariable?: string;
  /**
  * Enable clear dont fragment (Currently Only SDWAN Tunnel Interface)
  *   - Default value: `false`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#clear_dont_fragment CiscoVpnInterfaceIpsecFeatureTemplate#clear_dont_fragment}
  */
  readonly clearDontFragment?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#clear_dont_fragment_variable CiscoVpnInterfaceIpsecFeatureTemplate#clear_dont_fragment_variable}
  */
  readonly clearDontFragmentVariable?: string;
  /**
  * IKE keepalive interval (seconds)
  *   - Range: `10`-`3600`
  *   - Default value: `10`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#dead_peer_detection_interval CiscoVpnInterfaceIpsecFeatureTemplate#dead_peer_detection_interval}
  */
  readonly deadPeerDetectionInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#dead_peer_detection_interval_variable CiscoVpnInterfaceIpsecFeatureTemplate#dead_peer_detection_interval_variable}
  */
  readonly deadPeerDetectionIntervalVariable?: string;
  /**
  * IKE keepalive retries
  *   - Range: `2`-`60`
  *   - Default value: `3`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#dead_peer_detection_retries CiscoVpnInterfaceIpsecFeatureTemplate#dead_peer_detection_retries}
  */
  readonly deadPeerDetectionRetries?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#dead_peer_detection_retries_variable CiscoVpnInterfaceIpsecFeatureTemplate#dead_peer_detection_retries_variable}
  */
  readonly deadPeerDetectionRetriesVariable?: string;
  /**
  * The description of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#description CiscoVpnInterfaceIpsecFeatureTemplate#description}
  */
  readonly description: string;
  /**
  * List of supported device types
  *   - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`, `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`, `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#device_types CiscoVpnInterfaceIpsecFeatureTemplate#device_types}
  */
  readonly deviceTypes: string[];
  /**
  * IKE identity the IKE preshared secret belongs to
  *   - Choices: `aes256-cbc-sha1`, `aes256-cbc-sha2`, `aes128-cbc-sha1`, `aes128-cbc-sha2`
  *   - Default value: `aes256-cbc-sha1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#ike_ciphersuite CiscoVpnInterfaceIpsecFeatureTemplate#ike_ciphersuite}
  */
  readonly ikeCiphersuite?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#ike_ciphersuite_variable CiscoVpnInterfaceIpsecFeatureTemplate#ike_ciphersuite_variable}
  */
  readonly ikeCiphersuiteVariable?: string;
  /**
  * IKE Diffie Hellman Groups
  *   - Choices: `2`, `14`, `15`, `16`, `19`, `20`, `21`, `24`
  *   - Default value: `16`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#ike_group CiscoVpnInterfaceIpsecFeatureTemplate#ike_group}
  */
  readonly ikeGroup?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#ike_group_variable CiscoVpnInterfaceIpsecFeatureTemplate#ike_group_variable}
  */
  readonly ikeGroupVariable?: string;
  /**
  * IKE integrity protocol
  *   - Choices: `main`, `aggressive`
  *   - Default value: `main`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#ike_mode CiscoVpnInterfaceIpsecFeatureTemplate#ike_mode}
  */
  readonly ikeMode?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#ike_mode_variable CiscoVpnInterfaceIpsecFeatureTemplate#ike_mode_variable}
  */
  readonly ikeModeVariable?: string;
  /**
  * Use preshared key to authenticate IKE peer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#ike_pre_shared_key CiscoVpnInterfaceIpsecFeatureTemplate#ike_pre_shared_key}
  */
  readonly ikePreSharedKey?: string;
  /**
  * IKE ID for the local endpoint. Input IPv4 address, domain name, or email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#ike_pre_shared_key_local_id CiscoVpnInterfaceIpsecFeatureTemplate#ike_pre_shared_key_local_id}
  */
  readonly ikePreSharedKeyLocalId?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#ike_pre_shared_key_local_id_variable CiscoVpnInterfaceIpsecFeatureTemplate#ike_pre_shared_key_local_id_variable}
  */
  readonly ikePreSharedKeyLocalIdVariable?: string;
  /**
  * IKE ID for the remote endpoint. Input IPv4 address, domain name, or email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#ike_pre_shared_key_remote_id CiscoVpnInterfaceIpsecFeatureTemplate#ike_pre_shared_key_remote_id}
  */
  readonly ikePreSharedKeyRemoteId?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#ike_pre_shared_key_remote_id_variable CiscoVpnInterfaceIpsecFeatureTemplate#ike_pre_shared_key_remote_id_variable}
  */
  readonly ikePreSharedKeyRemoteIdVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#ike_pre_shared_key_variable CiscoVpnInterfaceIpsecFeatureTemplate#ike_pre_shared_key_variable}
  */
  readonly ikePreSharedKeyVariable?: string;
  /**
  * IKE rekey interval <60..86400> seconds
  *   - Range: `60`-`86400`
  *   - Default value: `14400`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#ike_rekey_interval CiscoVpnInterfaceIpsecFeatureTemplate#ike_rekey_interval}
  */
  readonly ikeRekeyInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#ike_rekey_interval_variable CiscoVpnInterfaceIpsecFeatureTemplate#ike_rekey_interval_variable}
  */
  readonly ikeRekeyIntervalVariable?: string;
  /**
  * IKE Version <1..2>
  *   - Range: `1`-`2`
  *   - Default value: `1`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#ike_version CiscoVpnInterfaceIpsecFeatureTemplate#ike_version}
  */
  readonly ikeVersion?: number;
  /**
  * Interface description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#interface_description CiscoVpnInterfaceIpsecFeatureTemplate#interface_description}
  */
  readonly interfaceDescription?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#interface_description_variable CiscoVpnInterfaceIpsecFeatureTemplate#interface_description_variable}
  */
  readonly interfaceDescriptionVariable?: string;
  /**
  * Interface name: IPsec when present
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#interface_name CiscoVpnInterfaceIpsecFeatureTemplate#interface_name}
  */
  readonly interfaceName?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#interface_name_variable CiscoVpnInterfaceIpsecFeatureTemplate#interface_name_variable}
  */
  readonly interfaceNameVariable?: string;
  /**
  * Assign IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#ip_address CiscoVpnInterfaceIpsecFeatureTemplate#ip_address}
  */
  readonly ipAddress?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#ip_address_variable CiscoVpnInterfaceIpsecFeatureTemplate#ip_address_variable}
  */
  readonly ipAddressVariable?: string;
  /**
  * IPsec(ESP) encryption and integrity protocol
  *   - Choices: `aes256-cbc-sha1`, `aes256-cbc-sha384`, `aes256-cbc-sha256`, `aes256-cbc-sha512`, `aes256-gcm`, `null-sha1`, `null-sha384`, `null-sha256`, `null-sha512`
  *   - Default value: `aes256-gcm`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#ipsec_ciphersuite CiscoVpnInterfaceIpsecFeatureTemplate#ipsec_ciphersuite}
  */
  readonly ipsecCiphersuite?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#ipsec_ciphersuite_variable CiscoVpnInterfaceIpsecFeatureTemplate#ipsec_ciphersuite_variable}
  */
  readonly ipsecCiphersuiteVariable?: string;
  /**
  * IPsec perfect forward secrecy settings
  *   - Choices: `group-1`, `group-2`, `group-5`, `group-14`, `group-15`, `group-16`, `group-19`, `group-20`, `group-21`, `group-24`, `none`
  *   - Default value: `group-16`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#ipsec_perfect_forward_secrecy CiscoVpnInterfaceIpsecFeatureTemplate#ipsec_perfect_forward_secrecy}
  */
  readonly ipsecPerfectForwardSecrecy?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#ipsec_perfect_forward_secrecy_variable CiscoVpnInterfaceIpsecFeatureTemplate#ipsec_perfect_forward_secrecy_variable}
  */
  readonly ipsecPerfectForwardSecrecyVariable?: string;
  /**
  * IPsec rekey interval <300..1209600> seconds
  *   - Range: `120`-`2592000`
  *   - Default value: `3600`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#ipsec_rekey_interval CiscoVpnInterfaceIpsecFeatureTemplate#ipsec_rekey_interval}
  */
  readonly ipsecRekeyInterval?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#ipsec_rekey_interval_variable CiscoVpnInterfaceIpsecFeatureTemplate#ipsec_rekey_interval_variable}
  */
  readonly ipsecRekeyIntervalVariable?: string;
  /**
  * Replay window size 32..8192 (must be a power of 2)
  *   - Range: `64`-`4096`
  *   - Default value: `512`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#ipsec_replay_window CiscoVpnInterfaceIpsecFeatureTemplate#ipsec_replay_window}
  */
  readonly ipsecReplayWindow?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#ipsec_replay_window_variable CiscoVpnInterfaceIpsecFeatureTemplate#ipsec_replay_window_variable}
  */
  readonly ipsecReplayWindowVariable?: string;
  /**
  * Interface MTU <68..9216>, in bytes
  *   - Range: `68`-`9216`
  *   - Default value: `1500`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#mtu CiscoVpnInterfaceIpsecFeatureTemplate#mtu}
  */
  readonly mtu?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#mtu_variable CiscoVpnInterfaceIpsecFeatureTemplate#mtu_variable}
  */
  readonly mtuVariable?: string;
  /**
  * The name of the feature template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#name CiscoVpnInterfaceIpsecFeatureTemplate#name}
  */
  readonly name: string;
  /**
  * Administrative state
  *   - Default value: `true`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#shutdown CiscoVpnInterfaceIpsecFeatureTemplate#shutdown}
  */
  readonly shutdown?: boolean | cdktf.IResolvable;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#shutdown_variable CiscoVpnInterfaceIpsecFeatureTemplate#shutdown_variable}
  */
  readonly shutdownVariable?: string;
  /**
  * TCP MSS on SYN packets, in bytes
  *   - Range: `500`-`1460`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#tcp_mss_adjust CiscoVpnInterfaceIpsecFeatureTemplate#tcp_mss_adjust}
  */
  readonly tcpMssAdjust?: number;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#tcp_mss_adjust_variable CiscoVpnInterfaceIpsecFeatureTemplate#tcp_mss_adjust_variable}
  */
  readonly tcpMssAdjustVariable?: string;
  /**
  * Enable tracker for this interface
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#tracker CiscoVpnInterfaceIpsecFeatureTemplate#tracker}
  */
  readonly tracker?: string[];
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#tracker_variable CiscoVpnInterfaceIpsecFeatureTemplate#tracker_variable}
  */
  readonly trackerVariable?: string;
  /**
  * Tunnel destination IP address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#tunnel_destination CiscoVpnInterfaceIpsecFeatureTemplate#tunnel_destination}
  */
  readonly tunnelDestination?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#tunnel_destination_variable CiscoVpnInterfaceIpsecFeatureTemplate#tunnel_destination_variable}
  */
  readonly tunnelDestinationVariable?: string;
  /**
  * <1..32 characters> Interface name: ge0/<0-..> or ge0/<0-..>.vlanid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#tunnel_route_via CiscoVpnInterfaceIpsecFeatureTemplate#tunnel_route_via}
  */
  readonly tunnelRouteVia?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#tunnel_route_via_variable CiscoVpnInterfaceIpsecFeatureTemplate#tunnel_route_via_variable}
  */
  readonly tunnelRouteViaVariable?: string;
  /**
  * Tunnel source IP Address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#tunnel_source CiscoVpnInterfaceIpsecFeatureTemplate#tunnel_source}
  */
  readonly tunnelSource?: string;
  /**
  * <1..32 characters> Interface name: ge0/<0-..> or ge0/<0-..>.vlanid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#tunnel_source_interface CiscoVpnInterfaceIpsecFeatureTemplate#tunnel_source_interface}
  */
  readonly tunnelSourceInterface?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#tunnel_source_interface_variable CiscoVpnInterfaceIpsecFeatureTemplate#tunnel_source_interface_variable}
  */
  readonly tunnelSourceInterfaceVariable?: string;
  /**
  * Variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#tunnel_source_variable CiscoVpnInterfaceIpsecFeatureTemplate#tunnel_source_variable}
  */
  readonly tunnelSourceVariable?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template sdwan_cisco_vpn_interface_ipsec_feature_template}
*/
export class CiscoVpnInterfaceIpsecFeatureTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "sdwan_cisco_vpn_interface_ipsec_feature_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CiscoVpnInterfaceIpsecFeatureTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CiscoVpnInterfaceIpsecFeatureTemplate to import
  * @param importFromId The id of the existing CiscoVpnInterfaceIpsecFeatureTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CiscoVpnInterfaceIpsecFeatureTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "sdwan_cisco_vpn_interface_ipsec_feature_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/sdwan/0.8.1/docs/resources/cisco_vpn_interface_ipsec_feature_template sdwan_cisco_vpn_interface_ipsec_feature_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CiscoVpnInterfaceIpsecFeatureTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: CiscoVpnInterfaceIpsecFeatureTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'sdwan_cisco_vpn_interface_ipsec_feature_template',
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
    this._application = config.application;
    this._applicationVariable = config.applicationVariable;
    this._clearDontFragment = config.clearDontFragment;
    this._clearDontFragmentVariable = config.clearDontFragmentVariable;
    this._deadPeerDetectionInterval = config.deadPeerDetectionInterval;
    this._deadPeerDetectionIntervalVariable = config.deadPeerDetectionIntervalVariable;
    this._deadPeerDetectionRetries = config.deadPeerDetectionRetries;
    this._deadPeerDetectionRetriesVariable = config.deadPeerDetectionRetriesVariable;
    this._description = config.description;
    this._deviceTypes = config.deviceTypes;
    this._ikeCiphersuite = config.ikeCiphersuite;
    this._ikeCiphersuiteVariable = config.ikeCiphersuiteVariable;
    this._ikeGroup = config.ikeGroup;
    this._ikeGroupVariable = config.ikeGroupVariable;
    this._ikeMode = config.ikeMode;
    this._ikeModeVariable = config.ikeModeVariable;
    this._ikePreSharedKey = config.ikePreSharedKey;
    this._ikePreSharedKeyLocalId = config.ikePreSharedKeyLocalId;
    this._ikePreSharedKeyLocalIdVariable = config.ikePreSharedKeyLocalIdVariable;
    this._ikePreSharedKeyRemoteId = config.ikePreSharedKeyRemoteId;
    this._ikePreSharedKeyRemoteIdVariable = config.ikePreSharedKeyRemoteIdVariable;
    this._ikePreSharedKeyVariable = config.ikePreSharedKeyVariable;
    this._ikeRekeyInterval = config.ikeRekeyInterval;
    this._ikeRekeyIntervalVariable = config.ikeRekeyIntervalVariable;
    this._ikeVersion = config.ikeVersion;
    this._interfaceDescription = config.interfaceDescription;
    this._interfaceDescriptionVariable = config.interfaceDescriptionVariable;
    this._interfaceName = config.interfaceName;
    this._interfaceNameVariable = config.interfaceNameVariable;
    this._ipAddress = config.ipAddress;
    this._ipAddressVariable = config.ipAddressVariable;
    this._ipsecCiphersuite = config.ipsecCiphersuite;
    this._ipsecCiphersuiteVariable = config.ipsecCiphersuiteVariable;
    this._ipsecPerfectForwardSecrecy = config.ipsecPerfectForwardSecrecy;
    this._ipsecPerfectForwardSecrecyVariable = config.ipsecPerfectForwardSecrecyVariable;
    this._ipsecRekeyInterval = config.ipsecRekeyInterval;
    this._ipsecRekeyIntervalVariable = config.ipsecRekeyIntervalVariable;
    this._ipsecReplayWindow = config.ipsecReplayWindow;
    this._ipsecReplayWindowVariable = config.ipsecReplayWindowVariable;
    this._mtu = config.mtu;
    this._mtuVariable = config.mtuVariable;
    this._name = config.name;
    this._shutdown = config.shutdown;
    this._shutdownVariable = config.shutdownVariable;
    this._tcpMssAdjust = config.tcpMssAdjust;
    this._tcpMssAdjustVariable = config.tcpMssAdjustVariable;
    this._tracker = config.tracker;
    this._trackerVariable = config.trackerVariable;
    this._tunnelDestination = config.tunnelDestination;
    this._tunnelDestinationVariable = config.tunnelDestinationVariable;
    this._tunnelRouteVia = config.tunnelRouteVia;
    this._tunnelRouteViaVariable = config.tunnelRouteViaVariable;
    this._tunnelSource = config.tunnelSource;
    this._tunnelSourceInterface = config.tunnelSourceInterface;
    this._tunnelSourceInterfaceVariable = config.tunnelSourceInterfaceVariable;
    this._tunnelSourceVariable = config.tunnelSourceVariable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // application_variable - computed: false, optional: true, required: false
  private _applicationVariable?: string; 
  public get applicationVariable() {
    return this.getStringAttribute('application_variable');
  }
  public set applicationVariable(value: string) {
    this._applicationVariable = value;
  }
  public resetApplicationVariable() {
    this._applicationVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationVariableInput() {
    return this._applicationVariable;
  }

  // clear_dont_fragment - computed: false, optional: true, required: false
  private _clearDontFragment?: boolean | cdktf.IResolvable; 
  public get clearDontFragment() {
    return this.getBooleanAttribute('clear_dont_fragment');
  }
  public set clearDontFragment(value: boolean | cdktf.IResolvable) {
    this._clearDontFragment = value;
  }
  public resetClearDontFragment() {
    this._clearDontFragment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearDontFragmentInput() {
    return this._clearDontFragment;
  }

  // clear_dont_fragment_variable - computed: false, optional: true, required: false
  private _clearDontFragmentVariable?: string; 
  public get clearDontFragmentVariable() {
    return this.getStringAttribute('clear_dont_fragment_variable');
  }
  public set clearDontFragmentVariable(value: string) {
    this._clearDontFragmentVariable = value;
  }
  public resetClearDontFragmentVariable() {
    this._clearDontFragmentVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearDontFragmentVariableInput() {
    return this._clearDontFragmentVariable;
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

  // ike_mode - computed: false, optional: true, required: false
  private _ikeMode?: string; 
  public get ikeMode() {
    return this.getStringAttribute('ike_mode');
  }
  public set ikeMode(value: string) {
    this._ikeMode = value;
  }
  public resetIkeMode() {
    this._ikeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeModeInput() {
    return this._ikeMode;
  }

  // ike_mode_variable - computed: false, optional: true, required: false
  private _ikeModeVariable?: string; 
  public get ikeModeVariable() {
    return this.getStringAttribute('ike_mode_variable');
  }
  public set ikeModeVariable(value: string) {
    this._ikeModeVariable = value;
  }
  public resetIkeModeVariable() {
    this._ikeModeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ikeModeVariableInput() {
    return this._ikeModeVariable;
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

  // interface_description - computed: false, optional: true, required: false
  private _interfaceDescription?: string; 
  public get interfaceDescription() {
    return this.getStringAttribute('interface_description');
  }
  public set interfaceDescription(value: string) {
    this._interfaceDescription = value;
  }
  public resetInterfaceDescription() {
    this._interfaceDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceDescriptionInput() {
    return this._interfaceDescription;
  }

  // interface_description_variable - computed: false, optional: true, required: false
  private _interfaceDescriptionVariable?: string; 
  public get interfaceDescriptionVariable() {
    return this.getStringAttribute('interface_description_variable');
  }
  public set interfaceDescriptionVariable(value: string) {
    this._interfaceDescriptionVariable = value;
  }
  public resetInterfaceDescriptionVariable() {
    this._interfaceDescriptionVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceDescriptionVariableInput() {
    return this._interfaceDescriptionVariable;
  }

  // interface_name - computed: false, optional: true, required: false
  private _interfaceName?: string; 
  public get interfaceName() {
    return this.getStringAttribute('interface_name');
  }
  public set interfaceName(value: string) {
    this._interfaceName = value;
  }
  public resetInterfaceName() {
    this._interfaceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameInput() {
    return this._interfaceName;
  }

  // interface_name_variable - computed: false, optional: true, required: false
  private _interfaceNameVariable?: string; 
  public get interfaceNameVariable() {
    return this.getStringAttribute('interface_name_variable');
  }
  public set interfaceNameVariable(value: string) {
    this._interfaceNameVariable = value;
  }
  public resetInterfaceNameVariable() {
    this._interfaceNameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interfaceNameVariableInput() {
    return this._interfaceNameVariable;
  }

  // ip_address - computed: false, optional: true, required: false
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  public resetIpAddress() {
    this._ipAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // ip_address_variable - computed: false, optional: true, required: false
  private _ipAddressVariable?: string; 
  public get ipAddressVariable() {
    return this.getStringAttribute('ip_address_variable');
  }
  public set ipAddressVariable(value: string) {
    this._ipAddressVariable = value;
  }
  public resetIpAddressVariable() {
    this._ipAddressVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressVariableInput() {
    return this._ipAddressVariable;
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

  // shutdown_variable - computed: false, optional: true, required: false
  private _shutdownVariable?: string; 
  public get shutdownVariable() {
    return this.getStringAttribute('shutdown_variable');
  }
  public set shutdownVariable(value: string) {
    this._shutdownVariable = value;
  }
  public resetShutdownVariable() {
    this._shutdownVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shutdownVariableInput() {
    return this._shutdownVariable;
  }

  // tcp_mss_adjust - computed: false, optional: true, required: false
  private _tcpMssAdjust?: number; 
  public get tcpMssAdjust() {
    return this.getNumberAttribute('tcp_mss_adjust');
  }
  public set tcpMssAdjust(value: number) {
    this._tcpMssAdjust = value;
  }
  public resetTcpMssAdjust() {
    this._tcpMssAdjust = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssAdjustInput() {
    return this._tcpMssAdjust;
  }

  // tcp_mss_adjust_variable - computed: false, optional: true, required: false
  private _tcpMssAdjustVariable?: string; 
  public get tcpMssAdjustVariable() {
    return this.getStringAttribute('tcp_mss_adjust_variable');
  }
  public set tcpMssAdjustVariable(value: string) {
    this._tcpMssAdjustVariable = value;
  }
  public resetTcpMssAdjustVariable() {
    this._tcpMssAdjustVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpMssAdjustVariableInput() {
    return this._tcpMssAdjustVariable;
  }

  // template_type - computed: true, optional: false, required: false
  public get templateType() {
    return this.getStringAttribute('template_type');
  }

  // tracker - computed: false, optional: true, required: false
  private _tracker?: string[]; 
  public get tracker() {
    return cdktf.Fn.tolist(this.getListAttribute('tracker'));
  }
  public set tracker(value: string[]) {
    this._tracker = value;
  }
  public resetTracker() {
    this._tracker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerInput() {
    return this._tracker;
  }

  // tracker_variable - computed: false, optional: true, required: false
  private _trackerVariable?: string; 
  public get trackerVariable() {
    return this.getStringAttribute('tracker_variable');
  }
  public set trackerVariable(value: string) {
    this._trackerVariable = value;
  }
  public resetTrackerVariable() {
    this._trackerVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackerVariableInput() {
    return this._trackerVariable;
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

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      application: cdktf.stringToTerraform(this._application),
      application_variable: cdktf.stringToTerraform(this._applicationVariable),
      clear_dont_fragment: cdktf.booleanToTerraform(this._clearDontFragment),
      clear_dont_fragment_variable: cdktf.stringToTerraform(this._clearDontFragmentVariable),
      dead_peer_detection_interval: cdktf.numberToTerraform(this._deadPeerDetectionInterval),
      dead_peer_detection_interval_variable: cdktf.stringToTerraform(this._deadPeerDetectionIntervalVariable),
      dead_peer_detection_retries: cdktf.numberToTerraform(this._deadPeerDetectionRetries),
      dead_peer_detection_retries_variable: cdktf.stringToTerraform(this._deadPeerDetectionRetriesVariable),
      description: cdktf.stringToTerraform(this._description),
      device_types: cdktf.listMapper(cdktf.stringToTerraform, false)(this._deviceTypes),
      ike_ciphersuite: cdktf.stringToTerraform(this._ikeCiphersuite),
      ike_ciphersuite_variable: cdktf.stringToTerraform(this._ikeCiphersuiteVariable),
      ike_group: cdktf.stringToTerraform(this._ikeGroup),
      ike_group_variable: cdktf.stringToTerraform(this._ikeGroupVariable),
      ike_mode: cdktf.stringToTerraform(this._ikeMode),
      ike_mode_variable: cdktf.stringToTerraform(this._ikeModeVariable),
      ike_pre_shared_key: cdktf.stringToTerraform(this._ikePreSharedKey),
      ike_pre_shared_key_local_id: cdktf.stringToTerraform(this._ikePreSharedKeyLocalId),
      ike_pre_shared_key_local_id_variable: cdktf.stringToTerraform(this._ikePreSharedKeyLocalIdVariable),
      ike_pre_shared_key_remote_id: cdktf.stringToTerraform(this._ikePreSharedKeyRemoteId),
      ike_pre_shared_key_remote_id_variable: cdktf.stringToTerraform(this._ikePreSharedKeyRemoteIdVariable),
      ike_pre_shared_key_variable: cdktf.stringToTerraform(this._ikePreSharedKeyVariable),
      ike_rekey_interval: cdktf.numberToTerraform(this._ikeRekeyInterval),
      ike_rekey_interval_variable: cdktf.stringToTerraform(this._ikeRekeyIntervalVariable),
      ike_version: cdktf.numberToTerraform(this._ikeVersion),
      interface_description: cdktf.stringToTerraform(this._interfaceDescription),
      interface_description_variable: cdktf.stringToTerraform(this._interfaceDescriptionVariable),
      interface_name: cdktf.stringToTerraform(this._interfaceName),
      interface_name_variable: cdktf.stringToTerraform(this._interfaceNameVariable),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      ip_address_variable: cdktf.stringToTerraform(this._ipAddressVariable),
      ipsec_ciphersuite: cdktf.stringToTerraform(this._ipsecCiphersuite),
      ipsec_ciphersuite_variable: cdktf.stringToTerraform(this._ipsecCiphersuiteVariable),
      ipsec_perfect_forward_secrecy: cdktf.stringToTerraform(this._ipsecPerfectForwardSecrecy),
      ipsec_perfect_forward_secrecy_variable: cdktf.stringToTerraform(this._ipsecPerfectForwardSecrecyVariable),
      ipsec_rekey_interval: cdktf.numberToTerraform(this._ipsecRekeyInterval),
      ipsec_rekey_interval_variable: cdktf.stringToTerraform(this._ipsecRekeyIntervalVariable),
      ipsec_replay_window: cdktf.numberToTerraform(this._ipsecReplayWindow),
      ipsec_replay_window_variable: cdktf.stringToTerraform(this._ipsecReplayWindowVariable),
      mtu: cdktf.numberToTerraform(this._mtu),
      mtu_variable: cdktf.stringToTerraform(this._mtuVariable),
      name: cdktf.stringToTerraform(this._name),
      shutdown: cdktf.booleanToTerraform(this._shutdown),
      shutdown_variable: cdktf.stringToTerraform(this._shutdownVariable),
      tcp_mss_adjust: cdktf.numberToTerraform(this._tcpMssAdjust),
      tcp_mss_adjust_variable: cdktf.stringToTerraform(this._tcpMssAdjustVariable),
      tracker: cdktf.listMapper(cdktf.stringToTerraform, false)(this._tracker),
      tracker_variable: cdktf.stringToTerraform(this._trackerVariable),
      tunnel_destination: cdktf.stringToTerraform(this._tunnelDestination),
      tunnel_destination_variable: cdktf.stringToTerraform(this._tunnelDestinationVariable),
      tunnel_route_via: cdktf.stringToTerraform(this._tunnelRouteVia),
      tunnel_route_via_variable: cdktf.stringToTerraform(this._tunnelRouteViaVariable),
      tunnel_source: cdktf.stringToTerraform(this._tunnelSource),
      tunnel_source_interface: cdktf.stringToTerraform(this._tunnelSourceInterface),
      tunnel_source_interface_variable: cdktf.stringToTerraform(this._tunnelSourceInterfaceVariable),
      tunnel_source_variable: cdktf.stringToTerraform(this._tunnelSourceVariable),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      application: {
        value: cdktf.stringToHclTerraform(this._application),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      application_variable: {
        value: cdktf.stringToHclTerraform(this._applicationVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      clear_dont_fragment: {
        value: cdktf.booleanToHclTerraform(this._clearDontFragment),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      clear_dont_fragment_variable: {
        value: cdktf.stringToHclTerraform(this._clearDontFragmentVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dead_peer_detection_interval: {
        value: cdktf.numberToHclTerraform(this._deadPeerDetectionInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dead_peer_detection_interval_variable: {
        value: cdktf.stringToHclTerraform(this._deadPeerDetectionIntervalVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dead_peer_detection_retries: {
        value: cdktf.numberToHclTerraform(this._deadPeerDetectionRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dead_peer_detection_retries_variable: {
        value: cdktf.stringToHclTerraform(this._deadPeerDetectionRetriesVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
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
      ike_ciphersuite: {
        value: cdktf.stringToHclTerraform(this._ikeCiphersuite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_ciphersuite_variable: {
        value: cdktf.stringToHclTerraform(this._ikeCiphersuiteVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_group: {
        value: cdktf.stringToHclTerraform(this._ikeGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_group_variable: {
        value: cdktf.stringToHclTerraform(this._ikeGroupVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_mode: {
        value: cdktf.stringToHclTerraform(this._ikeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_mode_variable: {
        value: cdktf.stringToHclTerraform(this._ikeModeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_pre_shared_key: {
        value: cdktf.stringToHclTerraform(this._ikePreSharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_pre_shared_key_local_id: {
        value: cdktf.stringToHclTerraform(this._ikePreSharedKeyLocalId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_pre_shared_key_local_id_variable: {
        value: cdktf.stringToHclTerraform(this._ikePreSharedKeyLocalIdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_pre_shared_key_remote_id: {
        value: cdktf.stringToHclTerraform(this._ikePreSharedKeyRemoteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_pre_shared_key_remote_id_variable: {
        value: cdktf.stringToHclTerraform(this._ikePreSharedKeyRemoteIdVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_pre_shared_key_variable: {
        value: cdktf.stringToHclTerraform(this._ikePreSharedKeyVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_rekey_interval: {
        value: cdktf.numberToHclTerraform(this._ikeRekeyInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ike_rekey_interval_variable: {
        value: cdktf.stringToHclTerraform(this._ikeRekeyIntervalVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ike_version: {
        value: cdktf.numberToHclTerraform(this._ikeVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      interface_description: {
        value: cdktf.stringToHclTerraform(this._interfaceDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_description_variable: {
        value: cdktf.stringToHclTerraform(this._interfaceDescriptionVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_name: {
        value: cdktf.stringToHclTerraform(this._interfaceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      interface_name_variable: {
        value: cdktf.stringToHclTerraform(this._interfaceNameVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address_variable: {
        value: cdktf.stringToHclTerraform(this._ipAddressVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_ciphersuite: {
        value: cdktf.stringToHclTerraform(this._ipsecCiphersuite),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_ciphersuite_variable: {
        value: cdktf.stringToHclTerraform(this._ipsecCiphersuiteVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_perfect_forward_secrecy: {
        value: cdktf.stringToHclTerraform(this._ipsecPerfectForwardSecrecy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_perfect_forward_secrecy_variable: {
        value: cdktf.stringToHclTerraform(this._ipsecPerfectForwardSecrecyVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_rekey_interval: {
        value: cdktf.numberToHclTerraform(this._ipsecRekeyInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipsec_rekey_interval_variable: {
        value: cdktf.stringToHclTerraform(this._ipsecRekeyIntervalVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipsec_replay_window: {
        value: cdktf.numberToHclTerraform(this._ipsecReplayWindow),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ipsec_replay_window_variable: {
        value: cdktf.stringToHclTerraform(this._ipsecReplayWindowVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mtu: {
        value: cdktf.numberToHclTerraform(this._mtu),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      mtu_variable: {
        value: cdktf.stringToHclTerraform(this._mtuVariable),
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
      shutdown: {
        value: cdktf.booleanToHclTerraform(this._shutdown),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      shutdown_variable: {
        value: cdktf.stringToHclTerraform(this._shutdownVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_mss_adjust: {
        value: cdktf.numberToHclTerraform(this._tcpMssAdjust),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      tcp_mss_adjust_variable: {
        value: cdktf.stringToHclTerraform(this._tcpMssAdjustVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tracker: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._tracker),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      tracker_variable: {
        value: cdktf.stringToHclTerraform(this._trackerVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_destination: {
        value: cdktf.stringToHclTerraform(this._tunnelDestination),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_destination_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelDestinationVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_route_via: {
        value: cdktf.stringToHclTerraform(this._tunnelRouteVia),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_route_via_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelRouteViaVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_source: {
        value: cdktf.stringToHclTerraform(this._tunnelSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_source_interface: {
        value: cdktf.stringToHclTerraform(this._tunnelSourceInterface),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_source_interface_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelSourceInterfaceVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_source_variable: {
        value: cdktf.stringToHclTerraform(this._tunnelSourceVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
