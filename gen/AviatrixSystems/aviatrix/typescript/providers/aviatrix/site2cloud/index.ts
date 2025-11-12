// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface Site2CloudConfig extends cdktf.TerraformMetaArguments {
  /**
  * Authentication Type. Valid values: 'PSK' and 'Cert'. Default value: 'PSK'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#auth_type Site2Cloud#auth_type}
  */
  readonly authType?: string;
  /**
  * Backup gateway name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#backup_gateway_name Site2Cloud#backup_gateway_name}
  */
  readonly backupGatewayName?: string;
  /**
  * Backup local tunnel IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#backup_local_tunnel_ip Site2Cloud#backup_local_tunnel_ip}
  */
  readonly backupLocalTunnelIp?: string;
  /**
  * Backup Pre-Shared Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#backup_pre_shared_key Site2Cloud#backup_pre_shared_key}
  */
  readonly backupPreSharedKey?: string;
  /**
  * Backup remote remote gateway IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#backup_remote_gateway_ip Site2Cloud#backup_remote_gateway_ip}
  */
  readonly backupRemoteGatewayIp?: string;
  /**
  * Latitude of backup remote gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#backup_remote_gateway_latitude Site2Cloud#backup_remote_gateway_latitude}
  */
  readonly backupRemoteGatewayLatitude?: number;
  /**
  * Longitude of backup remote gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#backup_remote_gateway_longitude Site2Cloud#backup_remote_gateway_longitude}
  */
  readonly backupRemoteGatewayLongitude?: number;
  /**
  * Backup remote identifier. Required for Cert based authentication type with HA enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#backup_remote_identifier Site2Cloud#backup_remote_identifier}
  */
  readonly backupRemoteIdentifier?: string;
  /**
  * Backup remote tunnel IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#backup_remote_tunnel_ip Site2Cloud#backup_remote_tunnel_ip}
  */
  readonly backupRemoteTunnelIp?: string;
  /**
  * Name of Remote CA Certificate Tag for creating Site2Cloud tunnels. Required for Cert based authentication type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#ca_cert_tag_name Site2Cloud#ca_cert_tag_name}
  */
  readonly caCertTagName?: string;
  /**
  * Site2Cloud Connection Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#connection_name Site2Cloud#connection_name}
  */
  readonly connectionName: string;
  /**
  * Connection Type. Valid values: 'mapped' and 'unmapped'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#connection_type Site2Cloud#connection_type}
  */
  readonly connectionType: string;
  /**
  * Switch to enable custom/non-default algorithms for IPSec Authentication/Encryption.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#custom_algorithms Site2Cloud#custom_algorithms}
  */
  readonly customAlgorithms?: boolean | cdktf.IResolvable;
  /**
  * Enable custom mapped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#custom_mapped Site2Cloud#custom_mapped}
  */
  readonly customMapped?: boolean | cdktf.IResolvable;
  /**
  * Switch to Enable/Disable active_active_ha for an existing site2cloud connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#enable_active_active Site2Cloud#enable_active_active}
  */
  readonly enableActiveActive?: boolean | cdktf.IResolvable;
  /**
  * Switch to Enable/Disable Deed Peer Detection for an existing site2cloud connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#enable_dead_peer_detection Site2Cloud#enable_dead_peer_detection}
  */
  readonly enableDeadPeerDetection?: boolean | cdktf.IResolvable;
  /**
  * Enable Event Triggered HA.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#enable_event_triggered_ha Site2Cloud#enable_event_triggered_ha}
  */
  readonly enableEventTriggeredHa?: boolean | cdktf.IResolvable;
  /**
  * Switch to enable IKEv2 for policy based site2cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#enable_ikev2 Site2Cloud#enable_ikev2}
  */
  readonly enableIkev2?: boolean | cdktf.IResolvable;
  /**
  * Enable single IP HA on a site2cloud connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#enable_single_ip_ha Site2Cloud#enable_single_ip_ha}
  */
  readonly enableSingleIpHa?: boolean | cdktf.IResolvable;
  /**
  * Enable spoke gateway with mapped site2cloud configurations to forward traffic from site2cloud connection to Aviatrix Transit Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#forward_traffic_to_transit Site2Cloud#forward_traffic_to_transit}
  */
  readonly forwardTrafficToTransit?: boolean | cdktf.IResolvable;
  /**
  * Specify whether enabling HA or not.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#ha_enabled Site2Cloud#ha_enabled}
  */
  readonly haEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#id Site2Cloud#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Local Initiated Traffic Destination Real CIDRs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#local_destination_real_cidrs Site2Cloud#local_destination_real_cidrs}
  */
  readonly localDestinationRealCidrs?: string[];
  /**
  * Local Initiated Traffic Destination Virtual CIDRs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#local_destination_virtual_cidrs Site2Cloud#local_destination_virtual_cidrs}
  */
  readonly localDestinationVirtualCidrs?: string[];
  /**
  * Local Initiated Traffic Source Real CIDRs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#local_source_real_cidrs Site2Cloud#local_source_real_cidrs}
  */
  readonly localSourceRealCidrs?: string[];
  /**
  * Local Initiated Traffic Source Virtual CIDRs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#local_source_virtual_cidrs Site2Cloud#local_source_virtual_cidrs}
  */
  readonly localSourceVirtualCidrs?: string[];
  /**
  * Local Subnet CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#local_subnet_cidr Site2Cloud#local_subnet_cidr}
  */
  readonly localSubnetCidr?: string;
  /**
  * Local Subnet CIDR (Virtual).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#local_subnet_virtual Site2Cloud#local_subnet_virtual}
  */
  readonly localSubnetVirtual?: string;
  /**
  * Local tunnel IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#local_tunnel_ip Site2Cloud#local_tunnel_ip}
  */
  readonly localTunnelIp?: string;
  /**
  * By default, gateway’s public IP is configured as the Local Identifier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#phase1_local_identifier Site2Cloud#phase1_local_identifier}
  */
  readonly phase1LocalIdentifier?: string;
  /**
  * List of phase 1 remote identifier of the IPsec tunnel. This can be configured as a list of any string, including empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#phase1_remote_identifier Site2Cloud#phase1_remote_identifier}
  */
  readonly phase1RemoteIdentifier?: string[];
  /**
  * Phase one Authentication. Valid values: 'SHA-1', 'SHA-256', 'SHA-384' and 'SHA-512'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#phase_1_authentication Site2Cloud#phase_1_authentication}
  */
  readonly phase1Authentication?: string;
  /**
  * Phase one DH Groups. Valid values: '1', '2', '5', '14', '15', '16', '17', '18', '19', '20' and '21'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#phase_1_dh_groups Site2Cloud#phase_1_dh_groups}
  */
  readonly phase1DhGroups?: string;
  /**
  * Phase one Encryption. Valid values: '3DES', 'AES-128-CBC', 'AES-192-CBC' and 'AES-256-CBC', 'AES-128-GCM-64', 'AES-128-GCM-96', 'AES-128-GCM-128', 'AES-256-GCM-64', 'AES-256-GCM-96', and 'AES-256-GCM-128'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#phase_1_encryption Site2Cloud#phase_1_encryption}
  */
  readonly phase1Encryption?: string;
  /**
  * Phase two Authentication. Valid values: 'NO-AUTH', 'HMAC-SHA-1', 'HMAC-SHA-256', 'HMAC-SHA-384' and 'HMAC-SHA-512'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#phase_2_authentication Site2Cloud#phase_2_authentication}
  */
  readonly phase2Authentication?: string;
  /**
  * Phase two DH Groups. Valid values: '1', '2', '5', '14', '15', '16', '17', '18', '19', '20' and '21'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#phase_2_dh_groups Site2Cloud#phase_2_dh_groups}
  */
  readonly phase2DhGroups?: string;
  /**
  * Phase two Encryption. Valid values: '3DES', 'AES-128-CBC', 'AES-192-CBC', 'AES-256-CBC', 'AES-128-GCM-64', 'AES-128-GCM-96', 'AES-128-GCM-128', 'AES-256-GCM-64', 'AES-256-GCM-96', 'AES-256-GCM-128', and 'NULL-ENCR'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#phase_2_encryption Site2Cloud#phase_2_encryption}
  */
  readonly phase2Encryption?: string;
  /**
  * Pre-Shared Key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#pre_shared_key Site2Cloud#pre_shared_key}
  */
  readonly preSharedKey?: string;
  /**
  * Primary Cloud Gateway Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#primary_cloud_gateway_name Site2Cloud#primary_cloud_gateway_name}
  */
  readonly primaryCloudGatewayName: string;
  /**
  * Private route encryption switch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#private_route_encryption Site2Cloud#private_route_encryption}
  */
  readonly privateRouteEncryption?: boolean | cdktf.IResolvable;
  /**
  * Remote Initiated Traffic Destination Real CIDRs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#remote_destination_real_cidrs Site2Cloud#remote_destination_real_cidrs}
  */
  readonly remoteDestinationRealCidrs?: string[];
  /**
  * Remote Initiated Traffic Destination Virtual CIDRs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#remote_destination_virtual_cidrs Site2Cloud#remote_destination_virtual_cidrs}
  */
  readonly remoteDestinationVirtualCidrs?: string[];
  /**
  * Remote Gateway IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#remote_gateway_ip Site2Cloud#remote_gateway_ip}
  */
  readonly remoteGatewayIp: string;
  /**
  * Latitude of remote gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#remote_gateway_latitude Site2Cloud#remote_gateway_latitude}
  */
  readonly remoteGatewayLatitude?: number;
  /**
  * Longitude of remote gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#remote_gateway_longitude Site2Cloud#remote_gateway_longitude}
  */
  readonly remoteGatewayLongitude?: number;
  /**
  * Remote gateway type. Valid values: 'generic', 'avx', 'aws', 'azure', 'sonicwall' and 'oracle'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#remote_gateway_type Site2Cloud#remote_gateway_type}
  */
  readonly remoteGatewayType: string;
  /**
  * Remote identifier. Required for Cert based authentication type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#remote_identifier Site2Cloud#remote_identifier}
  */
  readonly remoteIdentifier?: string;
  /**
  * Remote Initiated Traffic Source Real CIDRs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#remote_source_real_cidrs Site2Cloud#remote_source_real_cidrs}
  */
  readonly remoteSourceRealCidrs?: string[];
  /**
  * Remote Initiated Traffic Source Virtual CIDRs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#remote_source_virtual_cidrs Site2Cloud#remote_source_virtual_cidrs}
  */
  readonly remoteSourceVirtualCidrs?: string[];
  /**
  * Remote Subnet CIDR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#remote_subnet_cidr Site2Cloud#remote_subnet_cidr}
  */
  readonly remoteSubnetCidr?: string;
  /**
  * Remote Subnet CIDR (Virtual).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#remote_subnet_virtual Site2Cloud#remote_subnet_virtual}
  */
  readonly remoteSubnetVirtual?: string;
  /**
  * Remote tunnel IP address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#remote_tunnel_ip Site2Cloud#remote_tunnel_ip}
  */
  readonly remoteTunnelIp?: string;
  /**
  * Route tables to modify.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#route_table_list Site2Cloud#route_table_list}
  */
  readonly routeTableList?: string[];
  /**
  * Specify ssl_server_pool for tunnel_type 'tcp'. Default value is '192.168.44.0/24'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#ssl_server_pool Site2Cloud#ssl_server_pool}
  */
  readonly sslServerPool?: string;
  /**
  * Site2Cloud Tunnel Type. Valid values: 'policy' and 'route'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#tunnel_type Site2Cloud#tunnel_type}
  */
  readonly tunnelType: string;
  /**
  * VPC Id of the cloud gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#vpc_id Site2Cloud#vpc_id}
  */
  readonly vpcId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud aviatrix_site2cloud}
*/
export class Site2Cloud extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_site2cloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Site2Cloud resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Site2Cloud to import
  * @param importFromId The id of the existing Site2Cloud that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Site2Cloud to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_site2cloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/site2cloud aviatrix_site2cloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options Site2CloudConfig
  */
  public constructor(scope: Construct, id: string, config: Site2CloudConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_site2cloud',
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
    this._authType = config.authType;
    this._backupGatewayName = config.backupGatewayName;
    this._backupLocalTunnelIp = config.backupLocalTunnelIp;
    this._backupPreSharedKey = config.backupPreSharedKey;
    this._backupRemoteGatewayIp = config.backupRemoteGatewayIp;
    this._backupRemoteGatewayLatitude = config.backupRemoteGatewayLatitude;
    this._backupRemoteGatewayLongitude = config.backupRemoteGatewayLongitude;
    this._backupRemoteIdentifier = config.backupRemoteIdentifier;
    this._backupRemoteTunnelIp = config.backupRemoteTunnelIp;
    this._caCertTagName = config.caCertTagName;
    this._connectionName = config.connectionName;
    this._connectionType = config.connectionType;
    this._customAlgorithms = config.customAlgorithms;
    this._customMapped = config.customMapped;
    this._enableActiveActive = config.enableActiveActive;
    this._enableDeadPeerDetection = config.enableDeadPeerDetection;
    this._enableEventTriggeredHa = config.enableEventTriggeredHa;
    this._enableIkev2 = config.enableIkev2;
    this._enableSingleIpHa = config.enableSingleIpHa;
    this._forwardTrafficToTransit = config.forwardTrafficToTransit;
    this._haEnabled = config.haEnabled;
    this._id = config.id;
    this._localDestinationRealCidrs = config.localDestinationRealCidrs;
    this._localDestinationVirtualCidrs = config.localDestinationVirtualCidrs;
    this._localSourceRealCidrs = config.localSourceRealCidrs;
    this._localSourceVirtualCidrs = config.localSourceVirtualCidrs;
    this._localSubnetCidr = config.localSubnetCidr;
    this._localSubnetVirtual = config.localSubnetVirtual;
    this._localTunnelIp = config.localTunnelIp;
    this._phase1LocalIdentifier = config.phase1LocalIdentifier;
    this._phase1RemoteIdentifier = config.phase1RemoteIdentifier;
    this._phase1Authentication = config.phase1Authentication;
    this._phase1DhGroups = config.phase1DhGroups;
    this._phase1Encryption = config.phase1Encryption;
    this._phase2Authentication = config.phase2Authentication;
    this._phase2DhGroups = config.phase2DhGroups;
    this._phase2Encryption = config.phase2Encryption;
    this._preSharedKey = config.preSharedKey;
    this._primaryCloudGatewayName = config.primaryCloudGatewayName;
    this._privateRouteEncryption = config.privateRouteEncryption;
    this._remoteDestinationRealCidrs = config.remoteDestinationRealCidrs;
    this._remoteDestinationVirtualCidrs = config.remoteDestinationVirtualCidrs;
    this._remoteGatewayIp = config.remoteGatewayIp;
    this._remoteGatewayLatitude = config.remoteGatewayLatitude;
    this._remoteGatewayLongitude = config.remoteGatewayLongitude;
    this._remoteGatewayType = config.remoteGatewayType;
    this._remoteIdentifier = config.remoteIdentifier;
    this._remoteSourceRealCidrs = config.remoteSourceRealCidrs;
    this._remoteSourceVirtualCidrs = config.remoteSourceVirtualCidrs;
    this._remoteSubnetCidr = config.remoteSubnetCidr;
    this._remoteSubnetVirtual = config.remoteSubnetVirtual;
    this._remoteTunnelIp = config.remoteTunnelIp;
    this._routeTableList = config.routeTableList;
    this._sslServerPool = config.sslServerPool;
    this._tunnelType = config.tunnelType;
    this._vpcId = config.vpcId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_type - computed: false, optional: true, required: false
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  public resetAuthType() {
    this._authType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // backup_gateway_name - computed: false, optional: true, required: false
  private _backupGatewayName?: string; 
  public get backupGatewayName() {
    return this.getStringAttribute('backup_gateway_name');
  }
  public set backupGatewayName(value: string) {
    this._backupGatewayName = value;
  }
  public resetBackupGatewayName() {
    this._backupGatewayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupGatewayNameInput() {
    return this._backupGatewayName;
  }

  // backup_local_tunnel_ip - computed: false, optional: true, required: false
  private _backupLocalTunnelIp?: string; 
  public get backupLocalTunnelIp() {
    return this.getStringAttribute('backup_local_tunnel_ip');
  }
  public set backupLocalTunnelIp(value: string) {
    this._backupLocalTunnelIp = value;
  }
  public resetBackupLocalTunnelIp() {
    this._backupLocalTunnelIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupLocalTunnelIpInput() {
    return this._backupLocalTunnelIp;
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

  // backup_remote_gateway_ip - computed: true, optional: true, required: false
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

  // backup_remote_gateway_latitude - computed: false, optional: true, required: false
  private _backupRemoteGatewayLatitude?: number; 
  public get backupRemoteGatewayLatitude() {
    return this.getNumberAttribute('backup_remote_gateway_latitude');
  }
  public set backupRemoteGatewayLatitude(value: number) {
    this._backupRemoteGatewayLatitude = value;
  }
  public resetBackupRemoteGatewayLatitude() {
    this._backupRemoteGatewayLatitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRemoteGatewayLatitudeInput() {
    return this._backupRemoteGatewayLatitude;
  }

  // backup_remote_gateway_longitude - computed: false, optional: true, required: false
  private _backupRemoteGatewayLongitude?: number; 
  public get backupRemoteGatewayLongitude() {
    return this.getNumberAttribute('backup_remote_gateway_longitude');
  }
  public set backupRemoteGatewayLongitude(value: number) {
    this._backupRemoteGatewayLongitude = value;
  }
  public resetBackupRemoteGatewayLongitude() {
    this._backupRemoteGatewayLongitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRemoteGatewayLongitudeInput() {
    return this._backupRemoteGatewayLongitude;
  }

  // backup_remote_identifier - computed: false, optional: true, required: false
  private _backupRemoteIdentifier?: string; 
  public get backupRemoteIdentifier() {
    return this.getStringAttribute('backup_remote_identifier');
  }
  public set backupRemoteIdentifier(value: string) {
    this._backupRemoteIdentifier = value;
  }
  public resetBackupRemoteIdentifier() {
    this._backupRemoteIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRemoteIdentifierInput() {
    return this._backupRemoteIdentifier;
  }

  // backup_remote_tunnel_ip - computed: false, optional: true, required: false
  private _backupRemoteTunnelIp?: string; 
  public get backupRemoteTunnelIp() {
    return this.getStringAttribute('backup_remote_tunnel_ip');
  }
  public set backupRemoteTunnelIp(value: string) {
    this._backupRemoteTunnelIp = value;
  }
  public resetBackupRemoteTunnelIp() {
    this._backupRemoteTunnelIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backupRemoteTunnelIpInput() {
    return this._backupRemoteTunnelIp;
  }

  // ca_cert_tag_name - computed: false, optional: true, required: false
  private _caCertTagName?: string; 
  public get caCertTagName() {
    return this.getStringAttribute('ca_cert_tag_name');
  }
  public set caCertTagName(value: string) {
    this._caCertTagName = value;
  }
  public resetCaCertTagName() {
    this._caCertTagName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caCertTagNameInput() {
    return this._caCertTagName;
  }

  // connection_name - computed: false, optional: false, required: true
  private _connectionName?: string; 
  public get connectionName() {
    return this.getStringAttribute('connection_name');
  }
  public set connectionName(value: string) {
    this._connectionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionNameInput() {
    return this._connectionName;
  }

  // connection_type - computed: false, optional: false, required: true
  private _connectionType?: string; 
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }
  public set connectionType(value: string) {
    this._connectionType = value;
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

  // custom_mapped - computed: false, optional: true, required: false
  private _customMapped?: boolean | cdktf.IResolvable; 
  public get customMapped() {
    return this.getBooleanAttribute('custom_mapped');
  }
  public set customMapped(value: boolean | cdktf.IResolvable) {
    this._customMapped = value;
  }
  public resetCustomMapped() {
    this._customMapped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customMappedInput() {
    return this._customMapped;
  }

  // enable_active_active - computed: false, optional: true, required: false
  private _enableActiveActive?: boolean | cdktf.IResolvable; 
  public get enableActiveActive() {
    return this.getBooleanAttribute('enable_active_active');
  }
  public set enableActiveActive(value: boolean | cdktf.IResolvable) {
    this._enableActiveActive = value;
  }
  public resetEnableActiveActive() {
    this._enableActiveActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableActiveActiveInput() {
    return this._enableActiveActive;
  }

  // enable_dead_peer_detection - computed: false, optional: true, required: false
  private _enableDeadPeerDetection?: boolean | cdktf.IResolvable; 
  public get enableDeadPeerDetection() {
    return this.getBooleanAttribute('enable_dead_peer_detection');
  }
  public set enableDeadPeerDetection(value: boolean | cdktf.IResolvable) {
    this._enableDeadPeerDetection = value;
  }
  public resetEnableDeadPeerDetection() {
    this._enableDeadPeerDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableDeadPeerDetectionInput() {
    return this._enableDeadPeerDetection;
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

  // enable_single_ip_ha - computed: false, optional: true, required: false
  private _enableSingleIpHa?: boolean | cdktf.IResolvable; 
  public get enableSingleIpHa() {
    return this.getBooleanAttribute('enable_single_ip_ha');
  }
  public set enableSingleIpHa(value: boolean | cdktf.IResolvable) {
    this._enableSingleIpHa = value;
  }
  public resetEnableSingleIpHa() {
    this._enableSingleIpHa = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSingleIpHaInput() {
    return this._enableSingleIpHa;
  }

  // forward_traffic_to_transit - computed: false, optional: true, required: false
  private _forwardTrafficToTransit?: boolean | cdktf.IResolvable; 
  public get forwardTrafficToTransit() {
    return this.getBooleanAttribute('forward_traffic_to_transit');
  }
  public set forwardTrafficToTransit(value: boolean | cdktf.IResolvable) {
    this._forwardTrafficToTransit = value;
  }
  public resetForwardTrafficToTransit() {
    this._forwardTrafficToTransit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardTrafficToTransitInput() {
    return this._forwardTrafficToTransit;
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

  // local_destination_real_cidrs - computed: false, optional: true, required: false
  private _localDestinationRealCidrs?: string[]; 
  public get localDestinationRealCidrs() {
    return this.getListAttribute('local_destination_real_cidrs');
  }
  public set localDestinationRealCidrs(value: string[]) {
    this._localDestinationRealCidrs = value;
  }
  public resetLocalDestinationRealCidrs() {
    this._localDestinationRealCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDestinationRealCidrsInput() {
    return this._localDestinationRealCidrs;
  }

  // local_destination_virtual_cidrs - computed: false, optional: true, required: false
  private _localDestinationVirtualCidrs?: string[]; 
  public get localDestinationVirtualCidrs() {
    return this.getListAttribute('local_destination_virtual_cidrs');
  }
  public set localDestinationVirtualCidrs(value: string[]) {
    this._localDestinationVirtualCidrs = value;
  }
  public resetLocalDestinationVirtualCidrs() {
    this._localDestinationVirtualCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDestinationVirtualCidrsInput() {
    return this._localDestinationVirtualCidrs;
  }

  // local_source_real_cidrs - computed: false, optional: true, required: false
  private _localSourceRealCidrs?: string[]; 
  public get localSourceRealCidrs() {
    return this.getListAttribute('local_source_real_cidrs');
  }
  public set localSourceRealCidrs(value: string[]) {
    this._localSourceRealCidrs = value;
  }
  public resetLocalSourceRealCidrs() {
    this._localSourceRealCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSourceRealCidrsInput() {
    return this._localSourceRealCidrs;
  }

  // local_source_virtual_cidrs - computed: false, optional: true, required: false
  private _localSourceVirtualCidrs?: string[]; 
  public get localSourceVirtualCidrs() {
    return this.getListAttribute('local_source_virtual_cidrs');
  }
  public set localSourceVirtualCidrs(value: string[]) {
    this._localSourceVirtualCidrs = value;
  }
  public resetLocalSourceVirtualCidrs() {
    this._localSourceVirtualCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSourceVirtualCidrsInput() {
    return this._localSourceVirtualCidrs;
  }

  // local_subnet_cidr - computed: true, optional: true, required: false
  private _localSubnetCidr?: string; 
  public get localSubnetCidr() {
    return this.getStringAttribute('local_subnet_cidr');
  }
  public set localSubnetCidr(value: string) {
    this._localSubnetCidr = value;
  }
  public resetLocalSubnetCidr() {
    this._localSubnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetCidrInput() {
    return this._localSubnetCidr;
  }

  // local_subnet_virtual - computed: false, optional: true, required: false
  private _localSubnetVirtual?: string; 
  public get localSubnetVirtual() {
    return this.getStringAttribute('local_subnet_virtual');
  }
  public set localSubnetVirtual(value: string) {
    this._localSubnetVirtual = value;
  }
  public resetLocalSubnetVirtual() {
    this._localSubnetVirtual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localSubnetVirtualInput() {
    return this._localSubnetVirtual;
  }

  // local_tunnel_ip - computed: false, optional: true, required: false
  private _localTunnelIp?: string; 
  public get localTunnelIp() {
    return this.getStringAttribute('local_tunnel_ip');
  }
  public set localTunnelIp(value: string) {
    this._localTunnelIp = value;
  }
  public resetLocalTunnelIp() {
    this._localTunnelIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localTunnelIpInput() {
    return this._localTunnelIp;
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

  // primary_cloud_gateway_name - computed: false, optional: false, required: true
  private _primaryCloudGatewayName?: string; 
  public get primaryCloudGatewayName() {
    return this.getStringAttribute('primary_cloud_gateway_name');
  }
  public set primaryCloudGatewayName(value: string) {
    this._primaryCloudGatewayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryCloudGatewayNameInput() {
    return this._primaryCloudGatewayName;
  }

  // private_route_encryption - computed: false, optional: true, required: false
  private _privateRouteEncryption?: boolean | cdktf.IResolvable; 
  public get privateRouteEncryption() {
    return this.getBooleanAttribute('private_route_encryption');
  }
  public set privateRouteEncryption(value: boolean | cdktf.IResolvable) {
    this._privateRouteEncryption = value;
  }
  public resetPrivateRouteEncryption() {
    this._privateRouteEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateRouteEncryptionInput() {
    return this._privateRouteEncryption;
  }

  // remote_destination_real_cidrs - computed: false, optional: true, required: false
  private _remoteDestinationRealCidrs?: string[]; 
  public get remoteDestinationRealCidrs() {
    return this.getListAttribute('remote_destination_real_cidrs');
  }
  public set remoteDestinationRealCidrs(value: string[]) {
    this._remoteDestinationRealCidrs = value;
  }
  public resetRemoteDestinationRealCidrs() {
    this._remoteDestinationRealCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDestinationRealCidrsInput() {
    return this._remoteDestinationRealCidrs;
  }

  // remote_destination_virtual_cidrs - computed: false, optional: true, required: false
  private _remoteDestinationVirtualCidrs?: string[]; 
  public get remoteDestinationVirtualCidrs() {
    return this.getListAttribute('remote_destination_virtual_cidrs');
  }
  public set remoteDestinationVirtualCidrs(value: string[]) {
    this._remoteDestinationVirtualCidrs = value;
  }
  public resetRemoteDestinationVirtualCidrs() {
    this._remoteDestinationVirtualCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteDestinationVirtualCidrsInput() {
    return this._remoteDestinationVirtualCidrs;
  }

  // remote_gateway_ip - computed: false, optional: false, required: true
  private _remoteGatewayIp?: string; 
  public get remoteGatewayIp() {
    return this.getStringAttribute('remote_gateway_ip');
  }
  public set remoteGatewayIp(value: string) {
    this._remoteGatewayIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGatewayIpInput() {
    return this._remoteGatewayIp;
  }

  // remote_gateway_latitude - computed: false, optional: true, required: false
  private _remoteGatewayLatitude?: number; 
  public get remoteGatewayLatitude() {
    return this.getNumberAttribute('remote_gateway_latitude');
  }
  public set remoteGatewayLatitude(value: number) {
    this._remoteGatewayLatitude = value;
  }
  public resetRemoteGatewayLatitude() {
    this._remoteGatewayLatitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGatewayLatitudeInput() {
    return this._remoteGatewayLatitude;
  }

  // remote_gateway_longitude - computed: false, optional: true, required: false
  private _remoteGatewayLongitude?: number; 
  public get remoteGatewayLongitude() {
    return this.getNumberAttribute('remote_gateway_longitude');
  }
  public set remoteGatewayLongitude(value: number) {
    this._remoteGatewayLongitude = value;
  }
  public resetRemoteGatewayLongitude() {
    this._remoteGatewayLongitude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGatewayLongitudeInput() {
    return this._remoteGatewayLongitude;
  }

  // remote_gateway_type - computed: false, optional: false, required: true
  private _remoteGatewayType?: string; 
  public get remoteGatewayType() {
    return this.getStringAttribute('remote_gateway_type');
  }
  public set remoteGatewayType(value: string) {
    this._remoteGatewayType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteGatewayTypeInput() {
    return this._remoteGatewayType;
  }

  // remote_identifier - computed: false, optional: true, required: false
  private _remoteIdentifier?: string; 
  public get remoteIdentifier() {
    return this.getStringAttribute('remote_identifier');
  }
  public set remoteIdentifier(value: string) {
    this._remoteIdentifier = value;
  }
  public resetRemoteIdentifier() {
    this._remoteIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteIdentifierInput() {
    return this._remoteIdentifier;
  }

  // remote_source_real_cidrs - computed: false, optional: true, required: false
  private _remoteSourceRealCidrs?: string[]; 
  public get remoteSourceRealCidrs() {
    return this.getListAttribute('remote_source_real_cidrs');
  }
  public set remoteSourceRealCidrs(value: string[]) {
    this._remoteSourceRealCidrs = value;
  }
  public resetRemoteSourceRealCidrs() {
    this._remoteSourceRealCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSourceRealCidrsInput() {
    return this._remoteSourceRealCidrs;
  }

  // remote_source_virtual_cidrs - computed: false, optional: true, required: false
  private _remoteSourceVirtualCidrs?: string[]; 
  public get remoteSourceVirtualCidrs() {
    return this.getListAttribute('remote_source_virtual_cidrs');
  }
  public set remoteSourceVirtualCidrs(value: string[]) {
    this._remoteSourceVirtualCidrs = value;
  }
  public resetRemoteSourceVirtualCidrs() {
    this._remoteSourceVirtualCidrs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSourceVirtualCidrsInput() {
    return this._remoteSourceVirtualCidrs;
  }

  // remote_subnet_cidr - computed: false, optional: true, required: false
  private _remoteSubnetCidr?: string; 
  public get remoteSubnetCidr() {
    return this.getStringAttribute('remote_subnet_cidr');
  }
  public set remoteSubnetCidr(value: string) {
    this._remoteSubnetCidr = value;
  }
  public resetRemoteSubnetCidr() {
    this._remoteSubnetCidr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSubnetCidrInput() {
    return this._remoteSubnetCidr;
  }

  // remote_subnet_virtual - computed: false, optional: true, required: false
  private _remoteSubnetVirtual?: string; 
  public get remoteSubnetVirtual() {
    return this.getStringAttribute('remote_subnet_virtual');
  }
  public set remoteSubnetVirtual(value: string) {
    this._remoteSubnetVirtual = value;
  }
  public resetRemoteSubnetVirtual() {
    this._remoteSubnetVirtual = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteSubnetVirtualInput() {
    return this._remoteSubnetVirtual;
  }

  // remote_tunnel_ip - computed: false, optional: true, required: false
  private _remoteTunnelIp?: string; 
  public get remoteTunnelIp() {
    return this.getStringAttribute('remote_tunnel_ip');
  }
  public set remoteTunnelIp(value: string) {
    this._remoteTunnelIp = value;
  }
  public resetRemoteTunnelIp() {
    this._remoteTunnelIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteTunnelIpInput() {
    return this._remoteTunnelIp;
  }

  // route_table_list - computed: false, optional: true, required: false
  private _routeTableList?: string[]; 
  public get routeTableList() {
    return this.getListAttribute('route_table_list');
  }
  public set routeTableList(value: string[]) {
    this._routeTableList = value;
  }
  public resetRouteTableList() {
    this._routeTableList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get routeTableListInput() {
    return this._routeTableList;
  }

  // ssl_server_pool - computed: false, optional: true, required: false
  private _sslServerPool?: string; 
  public get sslServerPool() {
    return this.getStringAttribute('ssl_server_pool');
  }
  public set sslServerPool(value: string) {
    this._sslServerPool = value;
  }
  public resetSslServerPool() {
    this._sslServerPool = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslServerPoolInput() {
    return this._sslServerPool;
  }

  // tunnel_type - computed: false, optional: false, required: true
  private _tunnelType?: string; 
  public get tunnelType() {
    return this.getStringAttribute('tunnel_type');
  }
  public set tunnelType(value: string) {
    this._tunnelType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tunnelTypeInput() {
    return this._tunnelType;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_type: cdktf.stringToTerraform(this._authType),
      backup_gateway_name: cdktf.stringToTerraform(this._backupGatewayName),
      backup_local_tunnel_ip: cdktf.stringToTerraform(this._backupLocalTunnelIp),
      backup_pre_shared_key: cdktf.stringToTerraform(this._backupPreSharedKey),
      backup_remote_gateway_ip: cdktf.stringToTerraform(this._backupRemoteGatewayIp),
      backup_remote_gateway_latitude: cdktf.numberToTerraform(this._backupRemoteGatewayLatitude),
      backup_remote_gateway_longitude: cdktf.numberToTerraform(this._backupRemoteGatewayLongitude),
      backup_remote_identifier: cdktf.stringToTerraform(this._backupRemoteIdentifier),
      backup_remote_tunnel_ip: cdktf.stringToTerraform(this._backupRemoteTunnelIp),
      ca_cert_tag_name: cdktf.stringToTerraform(this._caCertTagName),
      connection_name: cdktf.stringToTerraform(this._connectionName),
      connection_type: cdktf.stringToTerraform(this._connectionType),
      custom_algorithms: cdktf.booleanToTerraform(this._customAlgorithms),
      custom_mapped: cdktf.booleanToTerraform(this._customMapped),
      enable_active_active: cdktf.booleanToTerraform(this._enableActiveActive),
      enable_dead_peer_detection: cdktf.booleanToTerraform(this._enableDeadPeerDetection),
      enable_event_triggered_ha: cdktf.booleanToTerraform(this._enableEventTriggeredHa),
      enable_ikev2: cdktf.booleanToTerraform(this._enableIkev2),
      enable_single_ip_ha: cdktf.booleanToTerraform(this._enableSingleIpHa),
      forward_traffic_to_transit: cdktf.booleanToTerraform(this._forwardTrafficToTransit),
      ha_enabled: cdktf.booleanToTerraform(this._haEnabled),
      id: cdktf.stringToTerraform(this._id),
      local_destination_real_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._localDestinationRealCidrs),
      local_destination_virtual_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._localDestinationVirtualCidrs),
      local_source_real_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._localSourceRealCidrs),
      local_source_virtual_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._localSourceVirtualCidrs),
      local_subnet_cidr: cdktf.stringToTerraform(this._localSubnetCidr),
      local_subnet_virtual: cdktf.stringToTerraform(this._localSubnetVirtual),
      local_tunnel_ip: cdktf.stringToTerraform(this._localTunnelIp),
      phase1_local_identifier: cdktf.stringToTerraform(this._phase1LocalIdentifier),
      phase1_remote_identifier: cdktf.listMapper(cdktf.stringToTerraform, false)(this._phase1RemoteIdentifier),
      phase_1_authentication: cdktf.stringToTerraform(this._phase1Authentication),
      phase_1_dh_groups: cdktf.stringToTerraform(this._phase1DhGroups),
      phase_1_encryption: cdktf.stringToTerraform(this._phase1Encryption),
      phase_2_authentication: cdktf.stringToTerraform(this._phase2Authentication),
      phase_2_dh_groups: cdktf.stringToTerraform(this._phase2DhGroups),
      phase_2_encryption: cdktf.stringToTerraform(this._phase2Encryption),
      pre_shared_key: cdktf.stringToTerraform(this._preSharedKey),
      primary_cloud_gateway_name: cdktf.stringToTerraform(this._primaryCloudGatewayName),
      private_route_encryption: cdktf.booleanToTerraform(this._privateRouteEncryption),
      remote_destination_real_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteDestinationRealCidrs),
      remote_destination_virtual_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteDestinationVirtualCidrs),
      remote_gateway_ip: cdktf.stringToTerraform(this._remoteGatewayIp),
      remote_gateway_latitude: cdktf.numberToTerraform(this._remoteGatewayLatitude),
      remote_gateway_longitude: cdktf.numberToTerraform(this._remoteGatewayLongitude),
      remote_gateway_type: cdktf.stringToTerraform(this._remoteGatewayType),
      remote_identifier: cdktf.stringToTerraform(this._remoteIdentifier),
      remote_source_real_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteSourceRealCidrs),
      remote_source_virtual_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._remoteSourceVirtualCidrs),
      remote_subnet_cidr: cdktf.stringToTerraform(this._remoteSubnetCidr),
      remote_subnet_virtual: cdktf.stringToTerraform(this._remoteSubnetVirtual),
      remote_tunnel_ip: cdktf.stringToTerraform(this._remoteTunnelIp),
      route_table_list: cdktf.listMapper(cdktf.stringToTerraform, false)(this._routeTableList),
      ssl_server_pool: cdktf.stringToTerraform(this._sslServerPool),
      tunnel_type: cdktf.stringToTerraform(this._tunnelType),
      vpc_id: cdktf.stringToTerraform(this._vpcId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_gateway_name: {
        value: cdktf.stringToHclTerraform(this._backupGatewayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_local_tunnel_ip: {
        value: cdktf.stringToHclTerraform(this._backupLocalTunnelIp),
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
      backup_remote_gateway_latitude: {
        value: cdktf.numberToHclTerraform(this._backupRemoteGatewayLatitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_remote_gateway_longitude: {
        value: cdktf.numberToHclTerraform(this._backupRemoteGatewayLongitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      backup_remote_identifier: {
        value: cdktf.stringToHclTerraform(this._backupRemoteIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      backup_remote_tunnel_ip: {
        value: cdktf.stringToHclTerraform(this._backupRemoteTunnelIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ca_cert_tag_name: {
        value: cdktf.stringToHclTerraform(this._caCertTagName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      custom_mapped: {
        value: cdktf.booleanToHclTerraform(this._customMapped),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_active_active: {
        value: cdktf.booleanToHclTerraform(this._enableActiveActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      enable_dead_peer_detection: {
        value: cdktf.booleanToHclTerraform(this._enableDeadPeerDetection),
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
      enable_single_ip_ha: {
        value: cdktf.booleanToHclTerraform(this._enableSingleIpHa),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      forward_traffic_to_transit: {
        value: cdktf.booleanToHclTerraform(this._forwardTrafficToTransit),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
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
      local_destination_real_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._localDestinationRealCidrs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      local_destination_virtual_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._localDestinationVirtualCidrs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      local_source_real_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._localSourceRealCidrs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      local_source_virtual_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._localSourceVirtualCidrs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      local_subnet_cidr: {
        value: cdktf.stringToHclTerraform(this._localSubnetCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_subnet_virtual: {
        value: cdktf.stringToHclTerraform(this._localSubnetVirtual),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      local_tunnel_ip: {
        value: cdktf.stringToHclTerraform(this._localTunnelIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      primary_cloud_gateway_name: {
        value: cdktf.stringToHclTerraform(this._primaryCloudGatewayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_route_encryption: {
        value: cdktf.booleanToHclTerraform(this._privateRouteEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remote_destination_real_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteDestinationRealCidrs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      remote_destination_virtual_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteDestinationVirtualCidrs),
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
      remote_gateway_latitude: {
        value: cdktf.numberToHclTerraform(this._remoteGatewayLatitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remote_gateway_longitude: {
        value: cdktf.numberToHclTerraform(this._remoteGatewayLongitude),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remote_gateway_type: {
        value: cdktf.stringToHclTerraform(this._remoteGatewayType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_identifier: {
        value: cdktf.stringToHclTerraform(this._remoteIdentifier),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_source_real_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteSourceRealCidrs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      remote_source_virtual_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._remoteSourceVirtualCidrs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      remote_subnet_cidr: {
        value: cdktf.stringToHclTerraform(this._remoteSubnetCidr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_subnet_virtual: {
        value: cdktf.stringToHclTerraform(this._remoteSubnetVirtual),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_tunnel_ip: {
        value: cdktf.stringToHclTerraform(this._remoteTunnelIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      route_table_list: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._routeTableList),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      ssl_server_pool: {
        value: cdktf.stringToHclTerraform(this._sslServerPool),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_type: {
        value: cdktf.stringToHclTerraform(this._tunnelType),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
