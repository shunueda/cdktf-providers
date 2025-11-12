// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TransitExternalDeviceConnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Set of approved cidrs. Requires 'enable_learned_cidrs_approval' to be true. Type: Set(String).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#approved_cidrs TransitExternalDeviceConn#approved_cidrs}
  */
  readonly approvedCidrs?: string[];
  /**
  * Backup BGP MD5 authentication key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#backup_bgp_md5_key TransitExternalDeviceConn#backup_bgp_md5_key}
  */
  readonly backupBgpMd5Key?: string;
  /**
  * Backup BGP remote ASN (Autonomous System Number). Integer between 1-4294967294.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#backup_bgp_remote_as_num TransitExternalDeviceConn#backup_bgp_remote_as_num}
  */
  readonly backupBgpRemoteAsNum?: string;
  /**
  * Backup direct connect for backup external device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#backup_direct_connect TransitExternalDeviceConn#backup_direct_connect}
  */
  readonly backupDirectConnect?: boolean | cdktf.IResolvable;
  /**
  * Backup Local LAN IP. Required for GCP BGP over LAN Connection with HA enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#backup_local_lan_ip TransitExternalDeviceConn#backup_local_lan_ip}
  */
  readonly backupLocalLanIp?: string;
  /**
  * Source CIDR for the tunnel from the backup Aviatrix transit gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#backup_local_tunnel_cidr TransitExternalDeviceConn#backup_local_tunnel_cidr}
  */
  readonly backupLocalTunnelCidr?: string;
  /**
  * Backup pre shared key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#backup_pre_shared_key TransitExternalDeviceConn#backup_pre_shared_key}
  */
  readonly backupPreSharedKey?: string;
  /**
  * Backup remote gateway IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#backup_remote_gateway_ip TransitExternalDeviceConn#backup_remote_gateway_ip}
  */
  readonly backupRemoteGatewayIp?: string;
  /**
  * Backup Remote LAN IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#backup_remote_lan_ip TransitExternalDeviceConn#backup_remote_lan_ip}
  */
  readonly backupRemoteLanIp?: string;
  /**
  * Destination CIDR for the tunnel to the backup external device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#backup_remote_tunnel_cidr TransitExternalDeviceConn#backup_remote_tunnel_cidr}
  */
  readonly backupRemoteTunnelCidr?: string;
  /**
  * BGP local ASN (Autonomous System Number). Integer between 1-4294967294.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#bgp_local_as_num TransitExternalDeviceConn#bgp_local_as_num}
  */
  readonly bgpLocalAsNum?: string;
  /**
  * BGP MD5 authentication key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#bgp_md5_key TransitExternalDeviceConn#bgp_md5_key}
  */
  readonly bgpMd5Key?: string;
  /**
  * BGP remote ASN (Autonomous System Number). Integer between 1-4294967294.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#bgp_remote_as_num TransitExternalDeviceConn#bgp_remote_as_num}
  */
  readonly bgpRemoteAsNum?: string;
  /**
  * Connection based additional BGP communities to be sent. E.g. 111:111, 444:444
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#connection_bgp_send_communities TransitExternalDeviceConn#connection_bgp_send_communities}
  */
  readonly connectionBgpSendCommunities?: string;
  /**
  * Do additive operation instead of replacement operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#connection_bgp_send_communities_additive TransitExternalDeviceConn#connection_bgp_send_communities_additive}
  */
  readonly connectionBgpSendCommunitiesAdditive?: boolean | cdktf.IResolvable;
  /**
  * Block advertisement of any BGP communities on this connection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#connection_bgp_send_communities_block TransitExternalDeviceConn#connection_bgp_send_communities_block}
  */
  readonly connectionBgpSendCommunitiesBlock?: boolean | cdktf.IResolvable;
  /**
  * The name of the transit external device connection which is going to be created. Required when 'enable_edge_underlay' is false, must set to empty when 'enable_edge_underlay' is true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#connection_name TransitExternalDeviceConn#connection_name}
  */
  readonly connectionName?: string;
  /**
  * Connection type. Valid values: 'bgp', 'static'. Default value: 'bgp'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#connection_type TransitExternalDeviceConn#connection_type}
  */
  readonly connectionType?: string;
  /**
  * Switch to enable custom/non-default algorithms for IPSec Authentication/Encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#custom_algorithms TransitExternalDeviceConn#custom_algorithms}
  */
  readonly customAlgorithms?: boolean | cdktf.IResolvable;
  /**
  * Set true for private network infrastructure.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#direct_connect TransitExternalDeviceConn#direct_connect}
  */
  readonly directConnect?: boolean | cdktf.IResolvable;
  /**
  * Disable ActiveMesh, no crossing tunnels
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#disable_activemesh TransitExternalDeviceConn#disable_activemesh}
  */
  readonly disableActivemesh?: boolean | cdktf.IResolvable;
  /**
  * Enable BGP BFD connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#enable_bfd TransitExternalDeviceConn#enable_bfd}
  */
  readonly enableBfd?: boolean | cdktf.IResolvable;
  /**
  * Switch to enable BGP LAN ActiveMesh. Only valid for GCP and Azure with Remote Gateway HA enabled. Requires Azure Remote Gateway insane mode enabled. Valid values: true, false. Default: false. Available as of provider version R2.21+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#enable_bgp_lan_activemesh TransitExternalDeviceConn#enable_bgp_lan_activemesh}
  */
  readonly enableBgpLanActivemesh?: boolean | cdktf.IResolvable;
  /**
  * Enable multihop on BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#enable_bgp_multihop TransitExternalDeviceConn#enable_bgp_multihop}
  */
  readonly enableBgpMultihop?: boolean | cdktf.IResolvable;
  /**
  * Switch to allow this connection to communicate with a Network Domain via Connection Policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#enable_edge_segmentation TransitExternalDeviceConn#enable_edge_segmentation}
  */
  readonly enableEdgeSegmentation?: boolean | cdktf.IResolvable;
  /**
  * Enable BGP over WAN underlay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#enable_edge_underlay TransitExternalDeviceConn#enable_edge_underlay}
  */
  readonly enableEdgeUnderlay?: boolean | cdktf.IResolvable;
  /**
  * Enable Event Triggered HA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#enable_event_triggered_ha TransitExternalDeviceConn#enable_event_triggered_ha}
  */
  readonly enableEventTriggeredHa?: boolean | cdktf.IResolvable;
  /**
  * Set as true if use IKEv2.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#enable_ikev2 TransitExternalDeviceConn#enable_ikev2}
  */
  readonly enableIkev2?: boolean | cdktf.IResolvable;
  /**
  * Enable Jumbo Frame for the transit external device connection. Valid values: true, false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#enable_jumbo_frame TransitExternalDeviceConn#enable_jumbo_frame}
  */
  readonly enableJumboFrame?: boolean | cdktf.IResolvable;
  /**
  * Enable learned CIDR approval for the connection. Only valid with 'connection_type' = 'bgp'. Requires the transit_gateway's 'learned_cidrs_approval_mode' attribute be set to 'connection'. Valid values: true, false. Default value: false. Available as of provider version R2.18+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#enable_learned_cidrs_approval TransitExternalDeviceConn#enable_learned_cidrs_approval}
  */
  readonly enableLearnedCidrsApproval?: boolean | cdktf.IResolvable;
  /**
  * Name of the Transit Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#gw_name TransitExternalDeviceConn#gw_name}
  */
  readonly gwName: string;
  /**
  * Set as true if there are two external devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#ha_enabled TransitExternalDeviceConn#ha_enabled}
  */
  readonly haEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#id TransitExternalDeviceConn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Local LAN IP. Required for GCP BGP over LAN Connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#local_lan_ip TransitExternalDeviceConn#local_lan_ip}
  */
  readonly localLanIp?: string;
  /**
  * Source CIDR for the tunnel from the Aviatrix transit gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#local_tunnel_cidr TransitExternalDeviceConn#local_tunnel_cidr}
  */
  readonly localTunnelCidr?: string;
  /**
  * Configure manual BGP advertised CIDRs for this connection. Only valid with 'connection_type' = 'bgp'. Available as of provider version R2.18+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#manual_bgp_advertised_cidrs TransitExternalDeviceConn#manual_bgp_advertised_cidrs}
  */
  readonly manualBgpAdvertisedCidrs?: string[];
  /**
  * By default, gateway’s public IP is configured as the Local Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#phase1_local_identifier TransitExternalDeviceConn#phase1_local_identifier}
  */
  readonly phase1LocalIdentifier?: string;
  /**
  * List of phase 1 remote identifier of the IPsec tunnel. This can be configured as a list of any string, including empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#phase1_remote_identifier TransitExternalDeviceConn#phase1_remote_identifier}
  */
  readonly phase1RemoteIdentifier?: string[];
  /**
  * Phase one Authentication. Valid values: 'SHA-1', 'SHA-256', 'SHA-384' and 'SHA-512'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#phase_1_authentication TransitExternalDeviceConn#phase_1_authentication}
  */
  readonly phase1Authentication?: string;
  /**
  * Phase one DH Groups. Valid values: '1', '2', '5', '14', '15', '16', '17', '18', '19', '20' and '21'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#phase_1_dh_groups TransitExternalDeviceConn#phase_1_dh_groups}
  */
  readonly phase1DhGroups?: string;
  /**
  * Phase one Encryption. Valid values: '3DES', 'AES-128-CBC', 'AES-192-CBC' and 'AES-256-CBC', 'AES-128-GCM-64', 'AES-128-GCM-96', 'AES-128-GCM-128', 'AES-256-GCM-64', 'AES-256-GCM-96', and 'AES-256-GCM-128'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#phase_1_encryption TransitExternalDeviceConn#phase_1_encryption}
  */
  readonly phase1Encryption?: string;
  /**
  * Phase two Authentication. Valid values: 'NO-AUTH', 'HMAC-SHA-1', 'HMAC-SHA-256', 'HMAC-SHA-384' and 'HMAC-SHA-512'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#phase_2_authentication TransitExternalDeviceConn#phase_2_authentication}
  */
  readonly phase2Authentication?: string;
  /**
  * Phase two DH Groups. Valid values: '1', '2', '5', '14', '15', '16', '17', '18', '19', '20' and '21'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#phase_2_dh_groups TransitExternalDeviceConn#phase_2_dh_groups}
  */
  readonly phase2DhGroups?: string;
  /**
  * Phase two Encryption. Valid values: '3DES', 'AES-128-CBC', 'AES-192-CBC', 'AES-256-CBC', 'AES-128-GCM-64', 'AES-128-GCM-96', 'AES-128-GCM-128', 'AES-256-GCM-64', 'AES-256-GCM-96', 'AES-256-GCM-128', and 'NULL-ENCR'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#phase_2_encryption TransitExternalDeviceConn#phase_2_encryption}
  */
  readonly phase2Encryption?: string;
  /**
  * If left blank, the pre-shared key will be auto generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#pre_shared_key TransitExternalDeviceConn#pre_shared_key}
  */
  readonly preSharedKey?: string;
  /**
  * Connection AS Path Prepend customized by specifying AS PATH for a BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#prepend_as_path TransitExternalDeviceConn#prepend_as_path}
  */
  readonly prependAsPath?: string[];
  /**
  * Remote Gateway IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#remote_gateway_ip TransitExternalDeviceConn#remote_gateway_ip}
  */
  readonly remoteGatewayIp?: string;
  /**
  * Remote LAN IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#remote_lan_ip TransitExternalDeviceConn#remote_lan_ip}
  */
  readonly remoteLanIp?: string;
  /**
  * Remote CIDRs joined as a string with ','. Required for a 'static' type connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#remote_subnet TransitExternalDeviceConn#remote_subnet}
  */
  readonly remoteSubnet?: string;
  /**
  * Destination CIDR for the tunnel to the external device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#remote_tunnel_cidr TransitExternalDeviceConn#remote_tunnel_cidr}
  */
  readonly remoteTunnelCidr?: string;
  /**
  * Name of the remote VPC for a LAN BGP connection. Only valid when 'connection_type' = 'bgp' and tunnel_protocol' = 'LAN' with an Azure transit gateway. Must be in the form "<VNET-name>:<resource-group-name>". Available as of provider version R2.18+.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#remote_vpc_name TransitExternalDeviceConn#remote_vpc_name}
  */
  readonly remoteVpcName?: string;
  /**
  * Only valid for Transit Gateway's with Active-Standby Mode enabled. Valid values: true, false. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#switch_to_ha_standby_gateway TransitExternalDeviceConn#switch_to_ha_standby_gateway}
  */
  readonly switchToHaStandbyGateway?: boolean | cdktf.IResolvable;
  /**
  * Tunnel Protocol. Valid values: 'IPsec', 'GRE' or 'LAN'. Default value: 'IPsec'. Case insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#tunnel_protocol TransitExternalDeviceConn#tunnel_protocol}
  */
  readonly tunnelProtocol?: string;
  /**
  * Local gateway tunnel source IP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#tunnel_src_ip TransitExternalDeviceConn#tunnel_src_ip}
  */
  readonly tunnelSrcIp?: string;
  /**
  * ID of the VPC where the Transit Gateway is located. For GCP BGP over LAN connection, it is in the format of 'vpc_name~-~account_name'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#vpc_id TransitExternalDeviceConn#vpc_id}
  */
  readonly vpcId: string;
  /**
  * bgp_bfd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#bgp_bfd TransitExternalDeviceConn#bgp_bfd}
  */
  readonly bgpBfd?: TransitExternalDeviceConnBgpBfd;
}
export interface TransitExternalDeviceConnBgpBfd {
  /**
  * BFD detection multiplier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#multiplier TransitExternalDeviceConn#multiplier}
  */
  readonly multiplier?: number;
  /**
  * BFD receive interval in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#receive_interval TransitExternalDeviceConn#receive_interval}
  */
  readonly receiveInterval?: number;
  /**
  * BFD transmit interval in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#transmit_interval TransitExternalDeviceConn#transmit_interval}
  */
  readonly transmitInterval?: number;
}

export function transitExternalDeviceConnBgpBfdToTerraform(struct?: TransitExternalDeviceConnBgpBfdOutputReference | TransitExternalDeviceConnBgpBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    multiplier: cdktf.numberToTerraform(struct!.multiplier),
    receive_interval: cdktf.numberToTerraform(struct!.receiveInterval),
    transmit_interval: cdktf.numberToTerraform(struct!.transmitInterval),
  }
}


export function transitExternalDeviceConnBgpBfdToHclTerraform(struct?: TransitExternalDeviceConnBgpBfdOutputReference | TransitExternalDeviceConnBgpBfd): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    multiplier: {
      value: cdktf.numberToHclTerraform(struct!.multiplier),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    receive_interval: {
      value: cdktf.numberToHclTerraform(struct!.receiveInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    transmit_interval: {
      value: cdktf.numberToHclTerraform(struct!.transmitInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TransitExternalDeviceConnBgpBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TransitExternalDeviceConnBgpBfd | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._multiplier !== undefined) {
      hasAnyValues = true;
      internalValueResult.multiplier = this._multiplier;
    }
    if (this._receiveInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.receiveInterval = this._receiveInterval;
    }
    if (this._transmitInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.transmitInterval = this._transmitInterval;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TransitExternalDeviceConnBgpBfd | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._multiplier = undefined;
      this._receiveInterval = undefined;
      this._transmitInterval = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._multiplier = value.multiplier;
      this._receiveInterval = value.receiveInterval;
      this._transmitInterval = value.transmitInterval;
    }
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

  // receive_interval - computed: false, optional: true, required: false
  private _receiveInterval?: number; 
  public get receiveInterval() {
    return this.getNumberAttribute('receive_interval');
  }
  public set receiveInterval(value: number) {
    this._receiveInterval = value;
  }
  public resetReceiveInterval() {
    this._receiveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get receiveIntervalInput() {
    return this._receiveInterval;
  }

  // transmit_interval - computed: false, optional: true, required: false
  private _transmitInterval?: number; 
  public get transmitInterval() {
    return this.getNumberAttribute('transmit_interval');
  }
  public set transmitInterval(value: number) {
    this._transmitInterval = value;
  }
  public resetTransmitInterval() {
    this._transmitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitIntervalInput() {
    return this._transmitInterval;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn aviatrix_transit_external_device_conn}
*/
export class TransitExternalDeviceConn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_transit_external_device_conn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TransitExternalDeviceConn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TransitExternalDeviceConn to import
  * @param importFromId The id of the existing TransitExternalDeviceConn that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TransitExternalDeviceConn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_transit_external_device_conn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/transit_external_device_conn aviatrix_transit_external_device_conn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TransitExternalDeviceConnConfig
  */
  public constructor(scope: Construct, id: string, config: TransitExternalDeviceConnConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_transit_external_device_conn',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10',
        providerVersionConstraint: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._approvedCidrs = config.approvedCidrs;
    this._backupBgpMd5Key = config.backupBgpMd5Key;
    this._backupBgpRemoteAsNum = config.backupBgpRemoteAsNum;
    this._backupDirectConnect = config.backupDirectConnect;
    this._backupLocalLanIp = config.backupLocalLanIp;
    this._backupLocalTunnelCidr = config.backupLocalTunnelCidr;
    this._backupPreSharedKey = config.backupPreSharedKey;
    this._backupRemoteGatewayIp = config.backupRemoteGatewayIp;
    this._backupRemoteLanIp = config.backupRemoteLanIp;
    this._backupRemoteTunnelCidr = config.backupRemoteTunnelCidr;
    this._bgpLocalAsNum = config.bgpLocalAsNum;
    this._bgpMd5Key = config.bgpMd5Key;
    this._bgpRemoteAsNum = config.bgpRemoteAsNum;
    this._connectionBgpSendCommunities = config.connectionBgpSendCommunities;
    this._connectionBgpSendCommunitiesAdditive = config.connectionBgpSendCommunitiesAdditive;
    this._connectionBgpSendCommunitiesBlock = config.connectionBgpSendCommunitiesBlock;
    this._connectionName = config.connectionName;
    this._connectionType = config.connectionType;
    this._customAlgorithms = config.customAlgorithms;
    this._directConnect = config.directConnect;
    this._disableActivemesh = config.disableActivemesh;
    this._enableBfd = config.enableBfd;
    this._enableBgpLanActivemesh = config.enableBgpLanActivemesh;
    this._enableBgpMultihop = config.enableBgpMultihop;
    this._enableEdgeSegmentation = config.enableEdgeSegmentation;
    this._enableEdgeUnderlay = config.enableEdgeUnderlay;
    this._enableEventTriggeredHa = config.enableEventTriggeredHa;
    this._enableIkev2 = config.enableIkev2;
    this._enableJumboFrame = config.enableJumboFrame;
    this._enableLearnedCidrsApproval = config.enableLearnedCidrsApproval;
    this._gwName = config.gwName;
    this._haEnabled = config.haEnabled;
    this._id = config.id;
    this._localLanIp = config.localLanIp;
    this._localTunnelCidr = config.localTunnelCidr;
    this._manualBgpAdvertisedCidrs = config.manualBgpAdvertisedCidrs;
    this._phase1LocalIdentifier = config.phase1LocalIdentifier;
    this._phase1RemoteIdentifier = config.phase1RemoteIdentifier;
    this._phase1Authentication = config.phase1Authentication;
    this._phase1DhGroups = config.phase1DhGroups;
    this._phase1Encryption = config.phase1Encryption;
    this._phase2Authentication = config.phase2Authentication;
    this._phase2DhGroups = config.phase2DhGroups;
    this._phase2Encryption = config.phase2Encryption;
    this._preSharedKey = config.preSharedKey;
    this._prependAsPath = config.prependAsPath;
    this._remoteGatewayIp = config.remoteGatewayIp;
    this._remoteLanIp = config.remoteLanIp;
    this._remoteSubnet = config.remoteSubnet;
    this._remoteTunnelCidr = config.remoteTunnelCidr;
    this._remoteVpcName = config.remoteVpcName;
    this._switchToHaStandbyGateway = config.switchToHaStandbyGateway;
    this._tunnelProtocol = config.tunnelProtocol;
    this._tunnelSrcIp = config.tunnelSrcIp;
    this._vpcId = config.vpcId;
    this._bgpBfd.internalValue = config.bgpBfd;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // approved_cidrs - computed: true, optional: true, required: false
  private _approvedCidrs?: string[]; 
  public get approvedCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('approved_cidrs'));
  }
  public set approvedCidrs(value: string[]) {
    this._approvedCidrs = value;
  }
  public resetApprovedCidrs() {
    this._approvedCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get approvedCidrsInput() {
    return this._approvedCidrs;
  }

  // backup_bgp_md5_key - computed: false, optional: true, required: false
  private _backupBgpMd5Key?: string; 
  public get backupBgpMd5Key() {
    return this.getStringAttribute('backup_bgp_md5_key');
  }
  public set backupBgpMd5Key(value: string) {
    this._backupBgpMd5Key = value;
  }
  public resetBackupBgpMd5Key() {
    this._backupBgpMd5Key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupBgpMd5KeyInput() {
    return this._backupBgpMd5Key;
  }

  // backup_bgp_remote_as_num - computed: false, optional: true, required: false
  private _backupBgpRemoteAsNum?: string; 
  public get backupBgpRemoteAsNum() {
    return this.getStringAttribute('backup_bgp_remote_as_num');
  }
  public set backupBgpRemoteAsNum(value: string) {
    this._backupBgpRemoteAsNum = value;
  }
  public resetBackupBgpRemoteAsNum() {
    this._backupBgpRemoteAsNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupBgpRemoteAsNumInput() {
    return this._backupBgpRemoteAsNum;
  }

  // backup_direct_connect - computed: false, optional: true, required: false
  private _backupDirectConnect?: boolean | cdktf.IResolvable; 
  public get backupDirectConnect() {
    return this.getBooleanAttribute('backup_direct_connect');
  }
  public set backupDirectConnect(value: boolean | cdktf.IResolvable) {
    this._backupDirectConnect = value;
  }
  public resetBackupDirectConnect() {
    this._backupDirectConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupDirectConnectInput() {
    return this._backupDirectConnect;
  }

  // backup_local_lan_ip - computed: true, optional: true, required: false
  private _backupLocalLanIp?: string; 
  public get backupLocalLanIp() {
    return this.getStringAttribute('backup_local_lan_ip');
  }
  public set backupLocalLanIp(value: string) {
    this._backupLocalLanIp = value;
  }
  public resetBackupLocalLanIp() {
    this._backupLocalLanIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupLocalLanIpInput() {
    return this._backupLocalLanIp;
  }

  // backup_local_tunnel_cidr - computed: true, optional: true, required: false
  private _backupLocalTunnelCidr?: string; 
  public get backupLocalTunnelCidr() {
    return this.getStringAttribute('backup_local_tunnel_cidr');
  }
  public set backupLocalTunnelCidr(value: string) {
    this._backupLocalTunnelCidr = value;
  }
  public resetBackupLocalTunnelCidr() {
    this._backupLocalTunnelCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupLocalTunnelCidrInput() {
    return this._backupLocalTunnelCidr;
  }

  // backup_pre_shared_key - computed: false, optional: true, required: false
  private _backupPreSharedKey?: string; 
  public get backupPreSharedKey() {
    return this.getStringAttribute('backup_pre_shared_key');
  }
  public set backupPreSharedKey(value: string) {
    this._backupPreSharedKey = value;
  }
  public resetBackupPreSharedKey() {
    this._backupPreSharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupPreSharedKeyInput() {
    return this._backupPreSharedKey;
  }

  // backup_remote_gateway_ip - computed: false, optional: true, required: false
  private _backupRemoteGatewayIp?: string; 
  public get backupRemoteGatewayIp() {
    return this.getStringAttribute('backup_remote_gateway_ip');
  }
  public set backupRemoteGatewayIp(value: string) {
    this._backupRemoteGatewayIp = value;
  }
  public resetBackupRemoteGatewayIp() {
    this._backupRemoteGatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRemoteGatewayIpInput() {
    return this._backupRemoteGatewayIp;
  }

  // backup_remote_lan_ip - computed: false, optional: true, required: false
  private _backupRemoteLanIp?: string; 
  public get backupRemoteLanIp() {
    return this.getStringAttribute('backup_remote_lan_ip');
  }
  public set backupRemoteLanIp(value: string) {
    this._backupRemoteLanIp = value;
  }
  public resetBackupRemoteLanIp() {
    this._backupRemoteLanIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRemoteLanIpInput() {
    return this._backupRemoteLanIp;
  }

  // backup_remote_tunnel_cidr - computed: true, optional: true, required: false
  private _backupRemoteTunnelCidr?: string; 
  public get backupRemoteTunnelCidr() {
    return this.getStringAttribute('backup_remote_tunnel_cidr');
  }
  public set backupRemoteTunnelCidr(value: string) {
    this._backupRemoteTunnelCidr = value;
  }
  public resetBackupRemoteTunnelCidr() {
    this._backupRemoteTunnelCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRemoteTunnelCidrInput() {
    return this._backupRemoteTunnelCidr;
  }

  // bgp_local_as_num - computed: false, optional: true, required: false
  private _bgpLocalAsNum?: string; 
  public get bgpLocalAsNum() {
    return this.getStringAttribute('bgp_local_as_num');
  }
  public set bgpLocalAsNum(value: string) {
    this._bgpLocalAsNum = value;
  }
  public resetBgpLocalAsNum() {
    this._bgpLocalAsNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpLocalAsNumInput() {
    return this._bgpLocalAsNum;
  }

  // bgp_md5_key - computed: false, optional: true, required: false
  private _bgpMd5Key?: string; 
  public get bgpMd5Key() {
    return this.getStringAttribute('bgp_md5_key');
  }
  public set bgpMd5Key(value: string) {
    this._bgpMd5Key = value;
  }
  public resetBgpMd5Key() {
    this._bgpMd5Key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpMd5KeyInput() {
    return this._bgpMd5Key;
  }

  // bgp_remote_as_num - computed: false, optional: true, required: false
  private _bgpRemoteAsNum?: string; 
  public get bgpRemoteAsNum() {
    return this.getStringAttribute('bgp_remote_as_num');
  }
  public set bgpRemoteAsNum(value: string) {
    this._bgpRemoteAsNum = value;
  }
  public resetBgpRemoteAsNum() {
    this._bgpRemoteAsNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRemoteAsNumInput() {
    return this._bgpRemoteAsNum;
  }

  // connection_bgp_send_communities - computed: false, optional: true, required: false
  private _connectionBgpSendCommunities?: string; 
  public get connectionBgpSendCommunities() {
    return this.getStringAttribute('connection_bgp_send_communities');
  }
  public set connectionBgpSendCommunities(value: string) {
    this._connectionBgpSendCommunities = value;
  }
  public resetConnectionBgpSendCommunities() {
    this._connectionBgpSendCommunities = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionBgpSendCommunitiesInput() {
    return this._connectionBgpSendCommunities;
  }

  // connection_bgp_send_communities_additive - computed: false, optional: true, required: false
  private _connectionBgpSendCommunitiesAdditive?: boolean | cdktf.IResolvable; 
  public get connectionBgpSendCommunitiesAdditive() {
    return this.getBooleanAttribute('connection_bgp_send_communities_additive');
  }
  public set connectionBgpSendCommunitiesAdditive(value: boolean | cdktf.IResolvable) {
    this._connectionBgpSendCommunitiesAdditive = value;
  }
  public resetConnectionBgpSendCommunitiesAdditive() {
    this._connectionBgpSendCommunitiesAdditive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionBgpSendCommunitiesAdditiveInput() {
    return this._connectionBgpSendCommunitiesAdditive;
  }

  // connection_bgp_send_communities_block - computed: false, optional: true, required: false
  private _connectionBgpSendCommunitiesBlock?: boolean | cdktf.IResolvable; 
  public get connectionBgpSendCommunitiesBlock() {
    return this.getBooleanAttribute('connection_bgp_send_communities_block');
  }
  public set connectionBgpSendCommunitiesBlock(value: boolean | cdktf.IResolvable) {
    this._connectionBgpSendCommunitiesBlock = value;
  }
  public resetConnectionBgpSendCommunitiesBlock() {
    this._connectionBgpSendCommunitiesBlock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionBgpSendCommunitiesBlockInput() {
    return this._connectionBgpSendCommunitiesBlock;
  }

  // connection_name - computed: true, optional: true, required: false
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  public resetConnectionName() {
    this._connectionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // connection_type - computed: false, optional: true, required: false
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
  }
  public resetConnectionType() {
    this._connectionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionTypeInput() {
    return this._connectionType;
  }

  // custom_algorithms - computed: false, optional: true, required: false
  private _customAlgorithms?: boolean | cdktf.IResolvable; 
  public get customAlgorithms() {
    return this.getBooleanAttribute('custom_algorithms');
  }
  public set customAlgorithms(value: boolean | cdktf.IResolvable) {
    this._customAlgorithms = value;
  }
  public resetCustomAlgorithms() {
    this._customAlgorithms = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customAlgorithmsInput() {
    return this._customAlgorithms;
  }

  // direct_connect - computed: false, optional: true, required: false
  private _directConnect?: boolean | cdktf.IResolvable; 
  public get directConnect() {
    return this.getBooleanAttribute('direct_connect');
  }
  public set directConnect(value: boolean | cdktf.IResolvable) {
    this._directConnect = value;
  }
  public resetDirectConnect() {
    this._directConnect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directConnectInput() {
    return this._directConnect;
  }

  // disable_activemesh - computed: false, optional: true, required: false
  private _disableActivemesh?: boolean | cdktf.IResolvable; 
  public get disableActivemesh() {
    return this.getBooleanAttribute('disable_activemesh');
  }
  public set disableActivemesh(value: boolean | cdktf.IResolvable) {
    this._disableActivemesh = value;
  }
  public resetDisableActivemesh() {
    this._disableActivemesh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableActivemeshInput() {
    return this._disableActivemesh;
  }

  // enable_bfd - computed: false, optional: true, required: false
  private _enableBfd?: boolean | cdktf.IResolvable; 
  public get enableBfd() {
    return this.getBooleanAttribute('enable_bfd');
  }
  public set enableBfd(value: boolean | cdktf.IResolvable) {
    this._enableBfd = value;
  }
  public resetEnableBfd() {
    this._enableBfd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBfdInput() {
    return this._enableBfd;
  }

  // enable_bgp_lan_activemesh - computed: false, optional: true, required: false
  private _enableBgpLanActivemesh?: boolean | cdktf.IResolvable; 
  public get enableBgpLanActivemesh() {
    return this.getBooleanAttribute('enable_bgp_lan_activemesh');
  }
  public set enableBgpLanActivemesh(value: boolean | cdktf.IResolvable) {
    this._enableBgpLanActivemesh = value;
  }
  public resetEnableBgpLanActivemesh() {
    this._enableBgpLanActivemesh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBgpLanActivemeshInput() {
    return this._enableBgpLanActivemesh;
  }

  // enable_bgp_multihop - computed: false, optional: true, required: false
  private _enableBgpMultihop?: boolean | cdktf.IResolvable; 
  public get enableBgpMultihop() {
    return this.getBooleanAttribute('enable_bgp_multihop');
  }
  public set enableBgpMultihop(value: boolean | cdktf.IResolvable) {
    this._enableBgpMultihop = value;
  }
  public resetEnableBgpMultihop() {
    this._enableBgpMultihop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBgpMultihopInput() {
    return this._enableBgpMultihop;
  }

  // enable_edge_segmentation - computed: false, optional: true, required: false
  private _enableEdgeSegmentation?: boolean | cdktf.IResolvable; 
  public get enableEdgeSegmentation() {
    return this.getBooleanAttribute('enable_edge_segmentation');
  }
  public set enableEdgeSegmentation(value: boolean | cdktf.IResolvable) {
    this._enableEdgeSegmentation = value;
  }
  public resetEnableEdgeSegmentation() {
    this._enableEdgeSegmentation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEdgeSegmentationInput() {
    return this._enableEdgeSegmentation;
  }

  // enable_edge_underlay - computed: false, optional: true, required: false
  private _enableEdgeUnderlay?: boolean | cdktf.IResolvable; 
  public get enableEdgeUnderlay() {
    return this.getBooleanAttribute('enable_edge_underlay');
  }
  public set enableEdgeUnderlay(value: boolean | cdktf.IResolvable) {
    this._enableEdgeUnderlay = value;
  }
  public resetEnableEdgeUnderlay() {
    this._enableEdgeUnderlay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEdgeUnderlayInput() {
    return this._enableEdgeUnderlay;
  }

  // enable_event_triggered_ha - computed: false, optional: true, required: false
  private _enableEventTriggeredHa?: boolean | cdktf.IResolvable; 
  public get enableEventTriggeredHa() {
    return this.getBooleanAttribute('enable_event_triggered_ha');
  }
  public set enableEventTriggeredHa(value: boolean | cdktf.IResolvable) {
    this._enableEventTriggeredHa = value;
  }
  public resetEnableEventTriggeredHa() {
    this._enableEventTriggeredHa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableEventTriggeredHaInput() {
    return this._enableEventTriggeredHa;
  }

  // enable_ikev2 - computed: false, optional: true, required: false
  private _enableIkev2?: boolean | cdktf.IResolvable; 
  public get enableIkev2() {
    return this.getBooleanAttribute('enable_ikev2');
  }
  public set enableIkev2(value: boolean | cdktf.IResolvable) {
    this._enableIkev2 = value;
  }
  public resetEnableIkev2() {
    this._enableIkev2 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableIkev2Input() {
    return this._enableIkev2;
  }

  // enable_jumbo_frame - computed: false, optional: true, required: false
  private _enableJumboFrame?: boolean | cdktf.IResolvable; 
  public get enableJumboFrame() {
    return this.getBooleanAttribute('enable_jumbo_frame');
  }
  public set enableJumboFrame(value: boolean | cdktf.IResolvable) {
    this._enableJumboFrame = value;
  }
  public resetEnableJumboFrame() {
    this._enableJumboFrame = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableJumboFrameInput() {
    return this._enableJumboFrame;
  }

  // enable_learned_cidrs_approval - computed: false, optional: true, required: false
  private _enableLearnedCidrsApproval?: boolean | cdktf.IResolvable; 
  public get enableLearnedCidrsApproval() {
    return this.getBooleanAttribute('enable_learned_cidrs_approval');
  }
  public set enableLearnedCidrsApproval(value: boolean | cdktf.IResolvable) {
    this._enableLearnedCidrsApproval = value;
  }
  public resetEnableLearnedCidrsApproval() {
    this._enableLearnedCidrsApproval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableLearnedCidrsApprovalInput() {
    return this._enableLearnedCidrsApproval;
  }

  // gw_name - computed: false, optional: false, required: true
  private _gwName?: string; 
  public get gwName() {
    return this.getStringAttribute('gw_name');
  }
  public set gwName(value: string) {
    this._gwName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gwNameInput() {
    return this._gwName;
  }

  // ha_enabled - computed: false, optional: true, required: false
  private _haEnabled?: boolean | cdktf.IResolvable; 
  public get haEnabled() {
    return this.getBooleanAttribute('ha_enabled');
  }
  public set haEnabled(value: boolean | cdktf.IResolvable) {
    this._haEnabled = value;
  }
  public resetHaEnabled() {
    this._haEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get haEnabledInput() {
    return this._haEnabled;
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

  // local_lan_ip - computed: true, optional: true, required: false
  private _localLanIp?: string; 
  public get localLanIp() {
    return this.getStringAttribute('local_lan_ip');
  }
  public set localLanIp(value: string) {
    this._localLanIp = value;
  }
  public resetLocalLanIp() {
    this._localLanIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localLanIpInput() {
    return this._localLanIp;
  }

  // local_tunnel_cidr - computed: true, optional: true, required: false
  private _localTunnelCidr?: string; 
  public get localTunnelCidr() {
    return this.getStringAttribute('local_tunnel_cidr');
  }
  public set localTunnelCidr(value: string) {
    this._localTunnelCidr = value;
  }
  public resetLocalTunnelCidr() {
    this._localTunnelCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTunnelCidrInput() {
    return this._localTunnelCidr;
  }

  // manual_bgp_advertised_cidrs - computed: false, optional: true, required: false
  private _manualBgpAdvertisedCidrs?: string[]; 
  public get manualBgpAdvertisedCidrs() {
    return cdktf.Fn.tolist(this.getListAttribute('manual_bgp_advertised_cidrs'));
  }
  public set manualBgpAdvertisedCidrs(value: string[]) {
    this._manualBgpAdvertisedCidrs = value;
  }
  public resetManualBgpAdvertisedCidrs() {
    this._manualBgpAdvertisedCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualBgpAdvertisedCidrsInput() {
    return this._manualBgpAdvertisedCidrs;
  }

  // phase1_local_identifier - computed: false, optional: true, required: false
  private _phase1LocalIdentifier?: string; 
  public get phase1LocalIdentifier() {
    return this.getStringAttribute('phase1_local_identifier');
  }
  public set phase1LocalIdentifier(value: string) {
    this._phase1LocalIdentifier = value;
  }
  public resetPhase1LocalIdentifier() {
    this._phase1LocalIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phase1LocalIdentifierInput() {
    return this._phase1LocalIdentifier;
  }

  // phase1_remote_identifier - computed: false, optional: true, required: false
  private _phase1RemoteIdentifier?: string[]; 
  public get phase1RemoteIdentifier() {
    return this.getListAttribute('phase1_remote_identifier');
  }
  public set phase1RemoteIdentifier(value: string[]) {
    this._phase1RemoteIdentifier = value;
  }
  public resetPhase1RemoteIdentifier() {
    this._phase1RemoteIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phase1RemoteIdentifierInput() {
    return this._phase1RemoteIdentifier;
  }

  // phase_1_authentication - computed: false, optional: true, required: false
  private _phase1Authentication?: string; 
  public get phase1Authentication() {
    return this.getStringAttribute('phase_1_authentication');
  }
  public set phase1Authentication(value: string) {
    this._phase1Authentication = value;
  }
  public resetPhase1Authentication() {
    this._phase1Authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phase1AuthenticationInput() {
    return this._phase1Authentication;
  }

  // phase_1_dh_groups - computed: false, optional: true, required: false
  private _phase1DhGroups?: string; 
  public get phase1DhGroups() {
    return this.getStringAttribute('phase_1_dh_groups');
  }
  public set phase1DhGroups(value: string) {
    this._phase1DhGroups = value;
  }
  public resetPhase1DhGroups() {
    this._phase1DhGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phase1DhGroupsInput() {
    return this._phase1DhGroups;
  }

  // phase_1_encryption - computed: false, optional: true, required: false
  private _phase1Encryption?: string; 
  public get phase1Encryption() {
    return this.getStringAttribute('phase_1_encryption');
  }
  public set phase1Encryption(value: string) {
    this._phase1Encryption = value;
  }
  public resetPhase1Encryption() {
    this._phase1Encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phase1EncryptionInput() {
    return this._phase1Encryption;
  }

  // phase_2_authentication - computed: false, optional: true, required: false
  private _phase2Authentication?: string; 
  public get phase2Authentication() {
    return this.getStringAttribute('phase_2_authentication');
  }
  public set phase2Authentication(value: string) {
    this._phase2Authentication = value;
  }
  public resetPhase2Authentication() {
    this._phase2Authentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phase2AuthenticationInput() {
    return this._phase2Authentication;
  }

  // phase_2_dh_groups - computed: false, optional: true, required: false
  private _phase2DhGroups?: string; 
  public get phase2DhGroups() {
    return this.getStringAttribute('phase_2_dh_groups');
  }
  public set phase2DhGroups(value: string) {
    this._phase2DhGroups = value;
  }
  public resetPhase2DhGroups() {
    this._phase2DhGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phase2DhGroupsInput() {
    return this._phase2DhGroups;
  }

  // phase_2_encryption - computed: false, optional: true, required: false
  private _phase2Encryption?: string; 
  public get phase2Encryption() {
    return this.getStringAttribute('phase_2_encryption');
  }
  public set phase2Encryption(value: string) {
    this._phase2Encryption = value;
  }
  public resetPhase2Encryption() {
    this._phase2Encryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phase2EncryptionInput() {
    return this._phase2Encryption;
  }

  // pre_shared_key - computed: false, optional: true, required: false
  private _preSharedKey?: string; 
  public get preSharedKey() {
    return this.getStringAttribute('pre_shared_key');
  }
  public set preSharedKey(value: string) {
    this._preSharedKey = value;
  }
  public resetPreSharedKey() {
    this._preSharedKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preSharedKeyInput() {
    return this._preSharedKey;
  }

  // prepend_as_path - computed: false, optional: true, required: false
  private _prependAsPath?: string[]; 
  public get prependAsPath() {
    return this.getListAttribute('prepend_as_path');
  }
  public set prependAsPath(value: string[]) {
    this._prependAsPath = value;
  }
  public resetPrependAsPath() {
    this._prependAsPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prependAsPathInput() {
    return this._prependAsPath;
  }

  // remote_gateway_ip - computed: false, optional: true, required: false
  private _remoteGatewayIp?: string; 
  public get remoteGatewayIp() {
    return this.getStringAttribute('remote_gateway_ip');
  }
  public set remoteGatewayIp(value: string) {
    this._remoteGatewayIp = value;
  }
  public resetRemoteGatewayIp() {
    this._remoteGatewayIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGatewayIpInput() {
    return this._remoteGatewayIp;
  }

  // remote_lan_ip - computed: false, optional: true, required: false
  private _remoteLanIp?: string; 
  public get remoteLanIp() {
    return this.getStringAttribute('remote_lan_ip');
  }
  public set remoteLanIp(value: string) {
    this._remoteLanIp = value;
  }
  public resetRemoteLanIp() {
    this._remoteLanIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteLanIpInput() {
    return this._remoteLanIp;
  }

  // remote_subnet - computed: false, optional: true, required: false
  private _remoteSubnet?: string; 
  public get remoteSubnet() {
    return this.getStringAttribute('remote_subnet');
  }
  public set remoteSubnet(value: string) {
    this._remoteSubnet = value;
  }
  public resetRemoteSubnet() {
    this._remoteSubnet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSubnetInput() {
    return this._remoteSubnet;
  }

  // remote_tunnel_cidr - computed: true, optional: true, required: false
  private _remoteTunnelCidr?: string; 
  public get remoteTunnelCidr() {
    return this.getStringAttribute('remote_tunnel_cidr');
  }
  public set remoteTunnelCidr(value: string) {
    this._remoteTunnelCidr = value;
  }
  public resetRemoteTunnelCidr() {
    this._remoteTunnelCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteTunnelCidrInput() {
    return this._remoteTunnelCidr;
  }

  // remote_vpc_name - computed: false, optional: true, required: false
  private _remoteVpcName?: string; 
  public get remoteVpcName() {
    return this.getStringAttribute('remote_vpc_name');
  }
  public set remoteVpcName(value: string) {
    this._remoteVpcName = value;
  }
  public resetRemoteVpcName() {
    this._remoteVpcName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteVpcNameInput() {
    return this._remoteVpcName;
  }

  // switch_to_ha_standby_gateway - computed: false, optional: true, required: false
  private _switchToHaStandbyGateway?: boolean | cdktf.IResolvable; 
  public get switchToHaStandbyGateway() {
    return this.getBooleanAttribute('switch_to_ha_standby_gateway');
  }
  public set switchToHaStandbyGateway(value: boolean | cdktf.IResolvable) {
    this._switchToHaStandbyGateway = value;
  }
  public resetSwitchToHaStandbyGateway() {
    this._switchToHaStandbyGateway = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchToHaStandbyGatewayInput() {
    return this._switchToHaStandbyGateway;
  }

  // tunnel_protocol - computed: false, optional: true, required: false
  private _tunnelProtocol?: string; 
  public get tunnelProtocol() {
    return this.getStringAttribute('tunnel_protocol');
  }
  public set tunnelProtocol(value: string) {
    this._tunnelProtocol = value;
  }
  public resetTunnelProtocol() {
    this._tunnelProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelProtocolInput() {
    return this._tunnelProtocol;
  }

  // tunnel_src_ip - computed: false, optional: true, required: false
  private _tunnelSrcIp?: string; 
  public get tunnelSrcIp() {
    return this.getStringAttribute('tunnel_src_ip');
  }
  public set tunnelSrcIp(value: string) {
    this._tunnelSrcIp = value;
  }
  public resetTunnelSrcIp() {
    this._tunnelSrcIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelSrcIpInput() {
    return this._tunnelSrcIp;
  }

  // vpc_id - computed: false, optional: false, required: true
  private _vpcId?: string; 
  public get vpcId() {
    return this.getStringAttribute('vpc_id');
  }
  public set vpcId(value: string) {
    this._vpcId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vpcIdInput() {
    return this._vpcId;
  }

  // bgp_bfd - computed: false, optional: true, required: false
  private _bgpBfd = new TransitExternalDeviceConnBgpBfdOutputReference(this, "bgp_bfd");
  public get bgpBfd() {
    return this._bgpBfd;
  }
  public putBgpBfd(value: TransitExternalDeviceConnBgpBfd) {
    this._bgpBfd.internalValue = value;
  }
  public resetBgpBfd() {
    this._bgpBfd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpBfdInput() {
    return this._bgpBfd.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      approved_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._approvedCidrs),
      backup_bgp_md5_key: cdktf.stringToTerraform(this._backupBgpMd5Key),
      backup_bgp_remote_as_num: cdktf.stringToTerraform(this._backupBgpRemoteAsNum),
      backup_direct_connect: cdktf.booleanToTerraform(this._backupDirectConnect),
      backup_local_lan_ip: cdktf.stringToTerraform(this._backupLocalLanIp),
      backup_local_tunnel_cidr: cdktf.stringToTerraform(this._backupLocalTunnelCidr),
      backup_pre_shared_key: cdktf.stringToTerraform(this._backupPreSharedKey),
      backup_remote_gateway_ip: cdktf.stringToTerraform(this._backupRemoteGatewayIp),
      backup_remote_lan_ip: cdktf.stringToTerraform(this._backupRemoteLanIp),
      backup_remote_tunnel_cidr: cdktf.stringToTerraform(this._backupRemoteTunnelCidr),
      bgp_local_as_num: cdktf.stringToTerraform(this._bgpLocalAsNum),
      bgp_md5_key: cdktf.stringToTerraform(this._bgpMd5Key),
      bgp_remote_as_num: cdktf.stringToTerraform(this._bgpRemoteAsNum),
      connection_bgp_send_communities: cdktf.stringToTerraform(this._connectionBgpSendCommunities),
      connection_bgp_send_communities_additive: cdktf.booleanToTerraform(this._connectionBgpSendCommunitiesAdditive),
      connection_bgp_send_communities_block: cdktf.booleanToTerraform(this._connectionBgpSendCommunitiesBlock),
      connection_name: cdktf.stringToTerraform(this._connectionName),
      connection_type: cdktf.stringToTerraform(this._connectionType),
      custom_algorithms: cdktf.booleanToTerraform(this._customAlgorithms),
      direct_connect: cdktf.booleanToTerraform(this._directConnect),
      disable_activemesh: cdktf.booleanToTerraform(this._disableActivemesh),
      enable_bfd: cdktf.booleanToTerraform(this._enableBfd),
      enable_bgp_lan_activemesh: cdktf.booleanToTerraform(this._enableBgpLanActivemesh),
      enable_bgp_multihop: cdktf.booleanToTerraform(this._enableBgpMultihop),
      enable_edge_segmentation: cdktf.booleanToTerraform(this._enableEdgeSegmentation),
      enable_edge_underlay: cdktf.booleanToTerraform(this._enableEdgeUnderlay),
      enable_event_triggered_ha: cdktf.booleanToTerraform(this._enableEventTriggeredHa),
      enable_ikev2: cdktf.booleanToTerraform(this._enableIkev2),
      enable_jumbo_frame: cdktf.booleanToTerraform(this._enableJumboFrame),
      enable_learned_cidrs_approval: cdktf.booleanToTerraform(this._enableLearnedCidrsApproval),
      gw_name: cdktf.stringToTerraform(this._gwName),
      ha_enabled: cdktf.booleanToTerraform(this._haEnabled),
      id: cdktf.stringToTerraform(this._id),
      local_lan_ip: cdktf.stringToTerraform(this._localLanIp),
      local_tunnel_cidr: cdktf.stringToTerraform(this._localTunnelCidr),
      manual_bgp_advertised_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._manualBgpAdvertisedCidrs),
      phase1_local_identifier: cdktf.stringToTerraform(this._phase1LocalIdentifier),
      phase1_remote_identifier: cdktf.listMapper(cdktf.stringToTerraform, false)(this._phase1RemoteIdentifier),
      phase_1_authentication: cdktf.stringToTerraform(this._phase1Authentication),
      phase_1_dh_groups: cdktf.stringToTerraform(this._phase1DhGroups),
      phase_1_encryption: cdktf.stringToTerraform(this._phase1Encryption),
      phase_2_authentication: cdktf.stringToTerraform(this._phase2Authentication),
      phase_2_dh_groups: cdktf.stringToTerraform(this._phase2DhGroups),
      phase_2_encryption: cdktf.stringToTerraform(this._phase2Encryption),
      pre_shared_key: cdktf.stringToTerraform(this._preSharedKey),
      prepend_as_path: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prependAsPath),
      remote_gateway_ip: cdktf.stringToTerraform(this._remoteGatewayIp),
      remote_lan_ip: cdktf.stringToTerraform(this._remoteLanIp),
      remote_subnet: cdktf.stringToTerraform(this._remoteSubnet),
      remote_tunnel_cidr: cdktf.stringToTerraform(this._remoteTunnelCidr),
      remote_vpc_name: cdktf.stringToTerraform(this._remoteVpcName),
      switch_to_ha_standby_gateway: cdktf.booleanToTerraform(this._switchToHaStandbyGateway),
      tunnel_protocol: cdktf.stringToTerraform(this._tunnelProtocol),
      tunnel_src_ip: cdktf.stringToTerraform(this._tunnelSrcIp),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
      bgp_bfd: transitExternalDeviceConnBgpBfdToTerraform(this._bgpBfd.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      approved_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._approvedCidrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      backup_bgp_md5_key: {
        value: cdktf.stringToHclTerraform(this._backupBgpMd5Key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_bgp_remote_as_num: {
        value: cdktf.stringToHclTerraform(this._backupBgpRemoteAsNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_direct_connect: {
        value: cdktf.booleanToHclTerraform(this._backupDirectConnect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      backup_local_lan_ip: {
        value: cdktf.stringToHclTerraform(this._backupLocalLanIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_local_tunnel_cidr: {
        value: cdktf.stringToHclTerraform(this._backupLocalTunnelCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_pre_shared_key: {
        value: cdktf.stringToHclTerraform(this._backupPreSharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_remote_gateway_ip: {
        value: cdktf.stringToHclTerraform(this._backupRemoteGatewayIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_remote_lan_ip: {
        value: cdktf.stringToHclTerraform(this._backupRemoteLanIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_remote_tunnel_cidr: {
        value: cdktf.stringToHclTerraform(this._backupRemoteTunnelCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_local_as_num: {
        value: cdktf.stringToHclTerraform(this._bgpLocalAsNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_md5_key: {
        value: cdktf.stringToHclTerraform(this._bgpMd5Key),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_remote_as_num: {
        value: cdktf.stringToHclTerraform(this._bgpRemoteAsNum),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_bgp_send_communities: {
        value: cdktf.stringToHclTerraform(this._connectionBgpSendCommunities),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_bgp_send_communities_additive: {
        value: cdktf.booleanToHclTerraform(this._connectionBgpSendCommunitiesAdditive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connection_bgp_send_communities_block: {
        value: cdktf.booleanToHclTerraform(this._connectionBgpSendCommunitiesBlock),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      connection_name: {
        value: cdktf.stringToHclTerraform(this._connectionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_type: {
        value: cdktf.stringToHclTerraform(this._connectionType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_algorithms: {
        value: cdktf.booleanToHclTerraform(this._customAlgorithms),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      direct_connect: {
        value: cdktf.booleanToHclTerraform(this._directConnect),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disable_activemesh: {
        value: cdktf.booleanToHclTerraform(this._disableActivemesh),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_bfd: {
        value: cdktf.booleanToHclTerraform(this._enableBfd),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_bgp_lan_activemesh: {
        value: cdktf.booleanToHclTerraform(this._enableBgpLanActivemesh),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_bgp_multihop: {
        value: cdktf.booleanToHclTerraform(this._enableBgpMultihop),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_edge_segmentation: {
        value: cdktf.booleanToHclTerraform(this._enableEdgeSegmentation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_edge_underlay: {
        value: cdktf.booleanToHclTerraform(this._enableEdgeUnderlay),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_event_triggered_ha: {
        value: cdktf.booleanToHclTerraform(this._enableEventTriggeredHa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_ikev2: {
        value: cdktf.booleanToHclTerraform(this._enableIkev2),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_jumbo_frame: {
        value: cdktf.booleanToHclTerraform(this._enableJumboFrame),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_learned_cidrs_approval: {
        value: cdktf.booleanToHclTerraform(this._enableLearnedCidrsApproval),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      gw_name: {
        value: cdktf.stringToHclTerraform(this._gwName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ha_enabled: {
        value: cdktf.booleanToHclTerraform(this._haEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_lan_ip: {
        value: cdktf.stringToHclTerraform(this._localLanIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_tunnel_cidr: {
        value: cdktf.stringToHclTerraform(this._localTunnelCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      manual_bgp_advertised_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._manualBgpAdvertisedCidrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      phase1_local_identifier: {
        value: cdktf.stringToHclTerraform(this._phase1LocalIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phase1_remote_identifier: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._phase1RemoteIdentifier),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      phase_1_authentication: {
        value: cdktf.stringToHclTerraform(this._phase1Authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phase_1_dh_groups: {
        value: cdktf.stringToHclTerraform(this._phase1DhGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phase_1_encryption: {
        value: cdktf.stringToHclTerraform(this._phase1Encryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phase_2_authentication: {
        value: cdktf.stringToHclTerraform(this._phase2Authentication),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phase_2_dh_groups: {
        value: cdktf.stringToHclTerraform(this._phase2DhGroups),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      phase_2_encryption: {
        value: cdktf.stringToHclTerraform(this._phase2Encryption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pre_shared_key: {
        value: cdktf.stringToHclTerraform(this._preSharedKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      prepend_as_path: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._prependAsPath),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      remote_gateway_ip: {
        value: cdktf.stringToHclTerraform(this._remoteGatewayIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_lan_ip: {
        value: cdktf.stringToHclTerraform(this._remoteLanIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_subnet: {
        value: cdktf.stringToHclTerraform(this._remoteSubnet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_tunnel_cidr: {
        value: cdktf.stringToHclTerraform(this._remoteTunnelCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_vpc_name: {
        value: cdktf.stringToHclTerraform(this._remoteVpcName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      switch_to_ha_standby_gateway: {
        value: cdktf.booleanToHclTerraform(this._switchToHaStandbyGateway),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tunnel_protocol: {
        value: cdktf.stringToHclTerraform(this._tunnelProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_src_ip: {
        value: cdktf.stringToHclTerraform(this._tunnelSrcIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vpc_id: {
        value: cdktf.stringToHclTerraform(this._vpcId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_bfd: {
        value: transitExternalDeviceConnBgpBfdToHclTerraform(this._bgpBfd.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TransitExternalDeviceConnBgpBfdList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
