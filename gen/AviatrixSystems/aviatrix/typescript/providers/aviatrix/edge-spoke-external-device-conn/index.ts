// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EdgeSpokeExternalDeviceConnConfig extends cdktf.TerraformMetaArguments {
  /**
  * Backup BGP MD5 authentication key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#backup_bgp_md5_key EdgeSpokeExternalDeviceConn#backup_bgp_md5_key}
  */
  readonly backupBgpMd5Key?: string;
  /**
  * Backup BGP remote ASN (Autonomous System Number). Integer between 1-4294967294.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#backup_bgp_remote_as_num EdgeSpokeExternalDeviceConn#backup_bgp_remote_as_num}
  */
  readonly backupBgpRemoteAsNum?: string;
  /**
  * Backup Local LAN IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#backup_local_lan_ip EdgeSpokeExternalDeviceConn#backup_local_lan_ip}
  */
  readonly backupLocalLanIp?: string;
  /**
  * Backup Remote LAN IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#backup_remote_lan_ip EdgeSpokeExternalDeviceConn#backup_remote_lan_ip}
  */
  readonly backupRemoteLanIp?: string;
  /**
  * BGP local AS number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#bgp_local_as_num EdgeSpokeExternalDeviceConn#bgp_local_as_num}
  */
  readonly bgpLocalAsNum: string;
  /**
  * BGP MD5 authentication key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#bgp_md5_key EdgeSpokeExternalDeviceConn#bgp_md5_key}
  */
  readonly bgpMd5Key?: string;
  /**
  * BGP remote AS number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#bgp_remote_as_num EdgeSpokeExternalDeviceConn#bgp_remote_as_num}
  */
  readonly bgpRemoteAsNum: string;
  /**
  * The name of the spoke external device connection which is going to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#connection_name EdgeSpokeExternalDeviceConn#connection_name}
  */
  readonly connectionName?: string;
  /**
  * Connection type. Valid values: 'bgp'. Default value: 'bgp'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#connection_type EdgeSpokeExternalDeviceConn#connection_type}
  */
  readonly connectionType?: string;
  /**
  * Enable BGP BFD connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#enable_bfd EdgeSpokeExternalDeviceConn#enable_bfd}
  */
  readonly enableBfd?: boolean | cdktf.IResolvable;
  /**
  * Switch to enable BGP LAN ActiveMesh. Valid values: true, false. Default: false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#enable_bgp_lan_activemesh EdgeSpokeExternalDeviceConn#enable_bgp_lan_activemesh}
  */
  readonly enableBgpLanActivemesh?: boolean | cdktf.IResolvable;
  /**
  * Enable multihop on BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#enable_bgp_multihop EdgeSpokeExternalDeviceConn#enable_bgp_multihop}
  */
  readonly enableBgpMultihop?: boolean | cdktf.IResolvable;
  /**
  * Enable BGP over WAN underlay.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#enable_edge_underlay EdgeSpokeExternalDeviceConn#enable_edge_underlay}
  */
  readonly enableEdgeUnderlay?: boolean | cdktf.IResolvable;
  /**
  * Enable Jumbo Frame for the edge spoke external device connection. Valid values: true, false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#enable_jumbo_frame EdgeSpokeExternalDeviceConn#enable_jumbo_frame}
  */
  readonly enableJumboFrame?: boolean | cdktf.IResolvable;
  /**
  * Name of the BGP Spoke Gateway.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#gw_name EdgeSpokeExternalDeviceConn#gw_name}
  */
  readonly gwName: string;
  /**
  * Set as true if there are two external devices.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#ha_enabled EdgeSpokeExternalDeviceConn#ha_enabled}
  */
  readonly haEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#id EdgeSpokeExternalDeviceConn#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Local LAN IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#local_lan_ip EdgeSpokeExternalDeviceConn#local_lan_ip}
  */
  readonly localLanIp: string;
  /**
  * Configure manual BGP advertised CIDRs for this connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#manual_bgp_advertised_cidrs EdgeSpokeExternalDeviceConn#manual_bgp_advertised_cidrs}
  */
  readonly manualBgpAdvertisedCidrs?: string[];
  /**
  * Number of retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#number_of_retries EdgeSpokeExternalDeviceConn#number_of_retries}
  */
  readonly numberOfRetries?: number;
  /**
  * Connection AS Path Prepend customized by specifying AS PATH for a BGP connection.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#prepend_as_path EdgeSpokeExternalDeviceConn#prepend_as_path}
  */
  readonly prependAsPath?: string[];
  /**
  * Remote cloud type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#remote_cloud_type EdgeSpokeExternalDeviceConn#remote_cloud_type}
  */
  readonly remoteCloudType?: string;
  /**
  * Remote LAN IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#remote_lan_ip EdgeSpokeExternalDeviceConn#remote_lan_ip}
  */
  readonly remoteLanIp: string;
  /**
  * Retry interval in seconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#retry_interval EdgeSpokeExternalDeviceConn#retry_interval}
  */
  readonly retryInterval?: number;
  /**
  * ID of the VPC where the BGP Spoke Gateway is located.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#site_id EdgeSpokeExternalDeviceConn#site_id}
  */
  readonly siteId: string;
  /**
  * Tunnel Protocol. Valid value: 'LAN'. Default value: 'LAN'. Case insensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#tunnel_protocol EdgeSpokeExternalDeviceConn#tunnel_protocol}
  */
  readonly tunnelProtocol?: string;
  /**
  * bgp_bfd block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#bgp_bfd EdgeSpokeExternalDeviceConn#bgp_bfd}
  */
  readonly bgpBfd?: EdgeSpokeExternalDeviceConnBgpBfd;
}
export interface EdgeSpokeExternalDeviceConnBgpBfd {
  /**
  * BFD detection multiplier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#multiplier EdgeSpokeExternalDeviceConn#multiplier}
  */
  readonly multiplier?: number;
  /**
  * BFD receive interval in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#receive_interval EdgeSpokeExternalDeviceConn#receive_interval}
  */
  readonly receiveInterval?: number;
  /**
  * BFD transmit interval in milliseconds.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#transmit_interval EdgeSpokeExternalDeviceConn#transmit_interval}
  */
  readonly transmitInterval?: number;
}

export function edgeSpokeExternalDeviceConnBgpBfdToTerraform(struct?: EdgeSpokeExternalDeviceConnBgpBfdOutputReference | EdgeSpokeExternalDeviceConnBgpBfd): any {
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


export function edgeSpokeExternalDeviceConnBgpBfdToHclTerraform(struct?: EdgeSpokeExternalDeviceConnBgpBfdOutputReference | EdgeSpokeExternalDeviceConnBgpBfd): any {
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

export class EdgeSpokeExternalDeviceConnBgpBfdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): EdgeSpokeExternalDeviceConnBgpBfd | undefined {
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

  public set internalValue(value: EdgeSpokeExternalDeviceConnBgpBfd | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn aviatrix_edge_spoke_external_device_conn}
*/
export class EdgeSpokeExternalDeviceConn extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_edge_spoke_external_device_conn";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EdgeSpokeExternalDeviceConn resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EdgeSpokeExternalDeviceConn to import
  * @param importFromId The id of the existing EdgeSpokeExternalDeviceConn that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EdgeSpokeExternalDeviceConn to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_edge_spoke_external_device_conn", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/edge_spoke_external_device_conn aviatrix_edge_spoke_external_device_conn} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EdgeSpokeExternalDeviceConnConfig
  */
  public constructor(scope: Construct, id: string, config: EdgeSpokeExternalDeviceConnConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_edge_spoke_external_device_conn',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._backupBgpMd5Key = config.backupBgpMd5Key;
    this._backupBgpRemoteAsNum = config.backupBgpRemoteAsNum;
    this._backupLocalLanIp = config.backupLocalLanIp;
    this._backupRemoteLanIp = config.backupRemoteLanIp;
    this._bgpLocalAsNum = config.bgpLocalAsNum;
    this._bgpMd5Key = config.bgpMd5Key;
    this._bgpRemoteAsNum = config.bgpRemoteAsNum;
    this._connectionName = config.connectionName;
    this._connectionType = config.connectionType;
    this._enableBfd = config.enableBfd;
    this._enableBgpLanActivemesh = config.enableBgpLanActivemesh;
    this._enableBgpMultihop = config.enableBgpMultihop;
    this._enableEdgeUnderlay = config.enableEdgeUnderlay;
    this._enableJumboFrame = config.enableJumboFrame;
    this._gwName = config.gwName;
    this._haEnabled = config.haEnabled;
    this._id = config.id;
    this._localLanIp = config.localLanIp;
    this._manualBgpAdvertisedCidrs = config.manualBgpAdvertisedCidrs;
    this._numberOfRetries = config.numberOfRetries;
    this._prependAsPath = config.prependAsPath;
    this._remoteCloudType = config.remoteCloudType;
    this._remoteLanIp = config.remoteLanIp;
    this._retryInterval = config.retryInterval;
    this._siteId = config.siteId;
    this._tunnelProtocol = config.tunnelProtocol;
    this._bgpBfd.internalValue = config.bgpBfd;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // bgp_local_as_num - computed: false, optional: false, required: true
  private _bgpLocalAsNum?: string; 
  public get bgpLocalAsNum() {
    return this.getStringAttribute('bgp_local_as_num');
  }
  public set bgpLocalAsNum(value: string) {
    this._bgpLocalAsNum = value;
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

  // bgp_remote_as_num - computed: false, optional: false, required: true
  private _bgpRemoteAsNum?: string; 
  public get bgpRemoteAsNum() {
    return this.getStringAttribute('bgp_remote_as_num');
  }
  public set bgpRemoteAsNum(value: string) {
    this._bgpRemoteAsNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bgpRemoteAsNumInput() {
    return this._bgpRemoteAsNum;
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

  // local_lan_ip - computed: false, optional: false, required: true
  private _localLanIp?: string; 
  public get localLanIp() {
    return this.getStringAttribute('local_lan_ip');
  }
  public set localLanIp(value: string) {
    this._localLanIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get localLanIpInput() {
    return this._localLanIp;
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

  // number_of_retries - computed: false, optional: true, required: false
  private _numberOfRetries?: number; 
  public get numberOfRetries() {
    return this.getNumberAttribute('number_of_retries');
  }
  public set numberOfRetries(value: number) {
    this._numberOfRetries = value;
  }
  public resetNumberOfRetries() {
    this._numberOfRetries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfRetriesInput() {
    return this._numberOfRetries;
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

  // remote_cloud_type - computed: false, optional: true, required: false
  private _remoteCloudType?: string; 
  public get remoteCloudType() {
    return this.getStringAttribute('remote_cloud_type');
  }
  public set remoteCloudType(value: string) {
    this._remoteCloudType = value;
  }
  public resetRemoteCloudType() {
    this._remoteCloudType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteCloudTypeInput() {
    return this._remoteCloudType;
  }

  // remote_lan_ip - computed: false, optional: false, required: true
  private _remoteLanIp?: string; 
  public get remoteLanIp() {
    return this.getStringAttribute('remote_lan_ip');
  }
  public set remoteLanIp(value: string) {
    this._remoteLanIp = value;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteLanIpInput() {
    return this._remoteLanIp;
  }

  // retry_interval - computed: false, optional: true, required: false
  private _retryInterval?: number; 
  public get retryInterval() {
    return this.getNumberAttribute('retry_interval');
  }
  public set retryInterval(value: number) {
    this._retryInterval = value;
  }
  public resetRetryInterval() {
    this._retryInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryIntervalInput() {
    return this._retryInterval;
  }

  // site_id - computed: false, optional: false, required: true
  private _siteId?: string; 
  public get siteId() {
    return this.getStringAttribute('site_id');
  }
  public set siteId(value: string) {
    this._siteId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteIdInput() {
    return this._siteId;
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

  // bgp_bfd - computed: false, optional: true, required: false
  private _bgpBfd = new EdgeSpokeExternalDeviceConnBgpBfdOutputReference(this, "bgp_bfd");
  public get bgpBfd() {
    return this._bgpBfd;
  }
  public putBgpBfd(value: EdgeSpokeExternalDeviceConnBgpBfd) {
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
      backup_bgp_md5_key: cdktf.stringToTerraform(this._backupBgpMd5Key),
      backup_bgp_remote_as_num: cdktf.stringToTerraform(this._backupBgpRemoteAsNum),
      backup_local_lan_ip: cdktf.stringToTerraform(this._backupLocalLanIp),
      backup_remote_lan_ip: cdktf.stringToTerraform(this._backupRemoteLanIp),
      bgp_local_as_num: cdktf.stringToTerraform(this._bgpLocalAsNum),
      bgp_md5_key: cdktf.stringToTerraform(this._bgpMd5Key),
      bgp_remote_as_num: cdktf.stringToTerraform(this._bgpRemoteAsNum),
      connection_name: cdktf.stringToTerraform(this._connectionName),
      connection_type: cdktf.stringToTerraform(this._connectionType),
      enable_bfd: cdktf.booleanToTerraform(this._enableBfd),
      enable_bgp_lan_activemesh: cdktf.booleanToTerraform(this._enableBgpLanActivemesh),
      enable_bgp_multihop: cdktf.booleanToTerraform(this._enableBgpMultihop),
      enable_edge_underlay: cdktf.booleanToTerraform(this._enableEdgeUnderlay),
      enable_jumbo_frame: cdktf.booleanToTerraform(this._enableJumboFrame),
      gw_name: cdktf.stringToTerraform(this._gwName),
      ha_enabled: cdktf.booleanToTerraform(this._haEnabled),
      id: cdktf.stringToTerraform(this._id),
      local_lan_ip: cdktf.stringToTerraform(this._localLanIp),
      manual_bgp_advertised_cidrs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._manualBgpAdvertisedCidrs),
      number_of_retries: cdktf.numberToTerraform(this._numberOfRetries),
      prepend_as_path: cdktf.listMapper(cdktf.stringToTerraform, false)(this._prependAsPath),
      remote_cloud_type: cdktf.stringToTerraform(this._remoteCloudType),
      remote_lan_ip: cdktf.stringToTerraform(this._remoteLanIp),
      retry_interval: cdktf.numberToTerraform(this._retryInterval),
      site_id: cdktf.stringToTerraform(this._siteId),
      tunnel_protocol: cdktf.stringToTerraform(this._tunnelProtocol),
      bgp_bfd: edgeSpokeExternalDeviceConnBgpBfdToTerraform(this._bgpBfd.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      backup_local_lan_ip: {
        value: cdktf.stringToHclTerraform(this._backupLocalLanIp),
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
      enable_edge_underlay: {
        value: cdktf.booleanToHclTerraform(this._enableEdgeUnderlay),
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
      manual_bgp_advertised_cidrs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._manualBgpAdvertisedCidrs),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      number_of_retries: {
        value: cdktf.numberToHclTerraform(this._numberOfRetries),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prepend_as_path: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._prependAsPath),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      remote_cloud_type: {
        value: cdktf.stringToHclTerraform(this._remoteCloudType),
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
      retry_interval: {
        value: cdktf.numberToHclTerraform(this._retryInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      site_id: {
        value: cdktf.stringToHclTerraform(this._siteId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tunnel_protocol: {
        value: cdktf.stringToHclTerraform(this._tunnelProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bgp_bfd: {
        value: edgeSpokeExternalDeviceConnBgpBfdToHclTerraform(this._bgpBfd.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EdgeSpokeExternalDeviceConnBgpBfdList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
