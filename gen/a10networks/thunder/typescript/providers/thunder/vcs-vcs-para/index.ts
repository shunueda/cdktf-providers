// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VcsVcsParaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Chassis ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#chassis_id VcsVcsPara#chassis_id}
  */
  readonly chassisId?: number;
  /**
  * Configuration information (Configuration tag)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#config_info VcsVcsPara#config_info}
  */
  readonly configInfo?: string;
  /**
  * Configuration sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#config_seq VcsVcsPara#config_seq}
  */
  readonly configSeq?: string;
  /**
  * The node will be considered dead as lack of hearbeats after this time (in unit of second, 10 by default)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#dead_interval VcsVcsPara#dead_interval}
  */
  readonly deadInterval?: number;
  /**
  * The node will be considered dead as lack of hearbeats after this time (milisecond) (in unit of msecond, default is 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#dead_interval_mseconds VcsVcsPara#dead_interval_mseconds}
  */
  readonly deadIntervalMseconds?: number;
  /**
  * 0-255, default is 2
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#failure_retry_count_value VcsVcsPara#failure_retry_count_value}
  */
  readonly failureRetryCountValue?: number;
  /**
  * The node will wait the specified time interval before it start aVCS (in unit of second (default is 5))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#force_wait_interval VcsVcsPara#force_wait_interval}
  */
  readonly forceWaitInterval?: number;
  /**
  * VCS retry forever if fails to join the chassis
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#forever VcsVcsPara#forever}
  */
  readonly forever?: number;
  /**
  * The VCS Node will hold specified time interval before it start to challenge peer(s) for Mastership (in unit of second (default is 60))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#hold_preemption_interval VcsVcsPara#hold_preemption_interval}
  */
  readonly holdPreemptionInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#id VcsVcsPara#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#link_poll_timeout VcsVcsPara#link_poll_timeout}
  */
  readonly linkPollTimeout?: number;
  /**
  * Interval of aVCS memory statistics record (minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#memory_stat_interval VcsVcsPara#memory_stat_interval}
  */
  readonly memoryStatInterval?: number;
  /**
  * Multicast (group) IP address (Multicast IP address (224.0.0.211 by default))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#multicast_ip VcsVcsPara#multicast_ip}
  */
  readonly multicastIp?: string;
  /**
  * Multicast (group) IPv6 address (Multicast IPv6 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#multicast_ipv6 VcsVcsPara#multicast_ipv6}
  */
  readonly multicastIpv6?: string;
  /**
  * Port used in multicast communication (Port number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#multicast_port VcsVcsPara#multicast_port}
  */
  readonly multicastPort?: number;
  /**
  * file size (MBytes) to transmit to monitor the TCP channel
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#size VcsVcsPara#size}
  */
  readonly size?: number;
  /**
  * Set the level of slog for aVCS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#slog_level VcsVcsPara#slog_level}
  */
  readonly slogLevel?: number;
  /**
  * Set the print method of slog for aVCS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#slog_method VcsVcsPara#slog_method}
  */
  readonly slogMethod?: number;
  /**
  * speed (KByte/s) limitation for the transmit monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#speed_limit VcsVcsPara#speed_limit}
  */
  readonly speedLimit?: number;
  /**
  * Specify the cert file name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#ssl_cert VcsVcsPara#ssl_cert}
  */
  readonly sslCert?: string;
  /**
  * Configure SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#ssl_config VcsVcsPara#ssl_config}
  */
  readonly sslConfig?: number;
  /**
  * Enable SSL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#ssl_enable VcsVcsPara#ssl_enable}
  */
  readonly sslEnable?: number;
  /**
  * Specify the key file name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#ssl_key VcsVcsPara#ssl_key}
  */
  readonly sslKey?: string;
  /**
  * Enable vBlade TCP channel monitor
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#tcp_channel_monitor VcsVcsPara#tcp_channel_monitor}
  */
  readonly tcpChannelMonitor?: number;
  /**
  * how long between heartbeats (in unit of second, default is 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#time_interval VcsVcsPara#time_interval}
  */
  readonly timeInterval?: number;
  /**
  * how long between heartbeats (mseconds) (in unit of milisecond, default is 0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#time_interval_mseconds VcsVcsPara#time_interval_mseconds}
  */
  readonly timeIntervalMseconds?: number;
  /**
  * Set the fragment size (KByte) of the aVCS transmit
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#transmit_fragment_size VcsVcsPara#transmit_fragment_size}
  */
  readonly transmitFragmentSize?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#uuid VcsVcsPara#uuid}
  */
  readonly uuid?: string;
  /**
  * floating_ip_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#floating_ip_cfg VcsVcsPara#floating_ip_cfg}
  */
  readonly floatingIpCfg?: VcsVcsParaFloatingIpCfg[] | cdktf.IResolvable;
  /**
  * floating_ipv6_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#floating_ipv6_cfg VcsVcsPara#floating_ipv6_cfg}
  */
  readonly floatingIpv6Cfg?: VcsVcsParaFloatingIpv6Cfg[] | cdktf.IResolvable;
}
export interface VcsVcsParaFloatingIpCfg {
  /**
  * Floating IP address (IPv4 address)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#floating_ip VcsVcsPara#floating_ip}
  */
  readonly floatingIp?: string;
  /**
  * Netmask
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#floating_ip_mask VcsVcsPara#floating_ip_mask}
  */
  readonly floatingIpMask?: string;
}

export function vcsVcsParaFloatingIpCfgToTerraform(struct?: VcsVcsParaFloatingIpCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    floating_ip: cdktf.stringToTerraform(struct!.floatingIp),
    floating_ip_mask: cdktf.stringToTerraform(struct!.floatingIpMask),
  }
}


export function vcsVcsParaFloatingIpCfgToHclTerraform(struct?: VcsVcsParaFloatingIpCfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    floating_ip: {
      value: cdktf.stringToHclTerraform(struct!.floatingIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    floating_ip_mask: {
      value: cdktf.stringToHclTerraform(struct!.floatingIpMask),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VcsVcsParaFloatingIpCfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VcsVcsParaFloatingIpCfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._floatingIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIp = this._floatingIp;
    }
    if (this._floatingIpMask !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIpMask = this._floatingIpMask;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VcsVcsParaFloatingIpCfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._floatingIp = undefined;
      this._floatingIpMask = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._floatingIp = value.floatingIp;
      this._floatingIpMask = value.floatingIpMask;
    }
  }

  // floating_ip - computed: false, optional: true, required: false
  private _floatingIp?: string; 
  public get floatingIp() {
    return this.getStringAttribute('floating_ip');
  }
  public set floatingIp(value: string) {
    this._floatingIp = value;
  }
  public resetFloatingIp() {
    this._floatingIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpInput() {
    return this._floatingIp;
  }

  // floating_ip_mask - computed: false, optional: true, required: false
  private _floatingIpMask?: string; 
  public get floatingIpMask() {
    return this.getStringAttribute('floating_ip_mask');
  }
  public set floatingIpMask(value: string) {
    this._floatingIpMask = value;
  }
  public resetFloatingIpMask() {
    this._floatingIpMask = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpMaskInput() {
    return this._floatingIpMask;
  }
}

export class VcsVcsParaFloatingIpCfgList extends cdktf.ComplexList {
  public internalValue? : VcsVcsParaFloatingIpCfg[] | cdktf.IResolvable

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
  public get(index: number): VcsVcsParaFloatingIpCfgOutputReference {
    return new VcsVcsParaFloatingIpCfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VcsVcsParaFloatingIpv6Cfg {
  /**
  * Floating IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#floating_ipv6 VcsVcsPara#floating_ipv6}
  */
  readonly floatingIpv6?: string;
}

export function vcsVcsParaFloatingIpv6CfgToTerraform(struct?: VcsVcsParaFloatingIpv6Cfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    floating_ipv6: cdktf.stringToTerraform(struct!.floatingIpv6),
  }
}


export function vcsVcsParaFloatingIpv6CfgToHclTerraform(struct?: VcsVcsParaFloatingIpv6Cfg | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    floating_ipv6: {
      value: cdktf.stringToHclTerraform(struct!.floatingIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VcsVcsParaFloatingIpv6CfgOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VcsVcsParaFloatingIpv6Cfg | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._floatingIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.floatingIpv6 = this._floatingIpv6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VcsVcsParaFloatingIpv6Cfg | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._floatingIpv6 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._floatingIpv6 = value.floatingIpv6;
    }
  }

  // floating_ipv6 - computed: false, optional: true, required: false
  private _floatingIpv6?: string; 
  public get floatingIpv6() {
    return this.getStringAttribute('floating_ipv6');
  }
  public set floatingIpv6(value: string) {
    this._floatingIpv6 = value;
  }
  public resetFloatingIpv6() {
    this._floatingIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpv6Input() {
    return this._floatingIpv6;
  }
}

export class VcsVcsParaFloatingIpv6CfgList extends cdktf.ComplexList {
  public internalValue? : VcsVcsParaFloatingIpv6Cfg[] | cdktf.IResolvable

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
  public get(index: number): VcsVcsParaFloatingIpv6CfgOutputReference {
    return new VcsVcsParaFloatingIpv6CfgOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para thunder_vcs_vcs_para}
*/
export class VcsVcsPara extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vcs_vcs_para";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VcsVcsPara resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VcsVcsPara to import
  * @param importFromId The id of the existing VcsVcsPara that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VcsVcsPara to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vcs_vcs_para", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vcs_vcs_para thunder_vcs_vcs_para} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VcsVcsParaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VcsVcsParaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vcs_vcs_para',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._chassisId = config.chassisId;
    this._configInfo = config.configInfo;
    this._configSeq = config.configSeq;
    this._deadInterval = config.deadInterval;
    this._deadIntervalMseconds = config.deadIntervalMseconds;
    this._failureRetryCountValue = config.failureRetryCountValue;
    this._forceWaitInterval = config.forceWaitInterval;
    this._forever = config.forever;
    this._holdPreemptionInterval = config.holdPreemptionInterval;
    this._id = config.id;
    this._linkPollTimeout = config.linkPollTimeout;
    this._memoryStatInterval = config.memoryStatInterval;
    this._multicastIp = config.multicastIp;
    this._multicastIpv6 = config.multicastIpv6;
    this._multicastPort = config.multicastPort;
    this._size = config.size;
    this._slogLevel = config.slogLevel;
    this._slogMethod = config.slogMethod;
    this._speedLimit = config.speedLimit;
    this._sslCert = config.sslCert;
    this._sslConfig = config.sslConfig;
    this._sslEnable = config.sslEnable;
    this._sslKey = config.sslKey;
    this._tcpChannelMonitor = config.tcpChannelMonitor;
    this._timeInterval = config.timeInterval;
    this._timeIntervalMseconds = config.timeIntervalMseconds;
    this._transmitFragmentSize = config.transmitFragmentSize;
    this._uuid = config.uuid;
    this._floatingIpCfg.internalValue = config.floatingIpCfg;
    this._floatingIpv6Cfg.internalValue = config.floatingIpv6Cfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // chassis_id - computed: false, optional: true, required: false
  private _chassisId?: number; 
  public get chassisId() {
    return this.getNumberAttribute('chassis_id');
  }
  public set chassisId(value: number) {
    this._chassisId = value;
  }
  public resetChassisId() {
    this._chassisId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chassisIdInput() {
    return this._chassisId;
  }

  // config_info - computed: false, optional: true, required: false
  private _configInfo?: string; 
  public get configInfo() {
    return this.getStringAttribute('config_info');
  }
  public set configInfo(value: string) {
    this._configInfo = value;
  }
  public resetConfigInfo() {
    this._configInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInfoInput() {
    return this._configInfo;
  }

  // config_seq - computed: false, optional: true, required: false
  private _configSeq?: string; 
  public get configSeq() {
    return this.getStringAttribute('config_seq');
  }
  public set configSeq(value: string) {
    this._configSeq = value;
  }
  public resetConfigSeq() {
    this._configSeq = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configSeqInput() {
    return this._configSeq;
  }

  // dead_interval - computed: false, optional: true, required: false
  private _deadInterval?: number; 
  public get deadInterval() {
    return this.getNumberAttribute('dead_interval');
  }
  public set deadInterval(value: number) {
    this._deadInterval = value;
  }
  public resetDeadInterval() {
    this._deadInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalInput() {
    return this._deadInterval;
  }

  // dead_interval_mseconds - computed: false, optional: true, required: false
  private _deadIntervalMseconds?: number; 
  public get deadIntervalMseconds() {
    return this.getNumberAttribute('dead_interval_mseconds');
  }
  public set deadIntervalMseconds(value: number) {
    this._deadIntervalMseconds = value;
  }
  public resetDeadIntervalMseconds() {
    this._deadIntervalMseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadIntervalMsecondsInput() {
    return this._deadIntervalMseconds;
  }

  // failure_retry_count_value - computed: false, optional: true, required: false
  private _failureRetryCountValue?: number; 
  public get failureRetryCountValue() {
    return this.getNumberAttribute('failure_retry_count_value');
  }
  public set failureRetryCountValue(value: number) {
    this._failureRetryCountValue = value;
  }
  public resetFailureRetryCountValue() {
    this._failureRetryCountValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failureRetryCountValueInput() {
    return this._failureRetryCountValue;
  }

  // force_wait_interval - computed: false, optional: true, required: false
  private _forceWaitInterval?: number; 
  public get forceWaitInterval() {
    return this.getNumberAttribute('force_wait_interval');
  }
  public set forceWaitInterval(value: number) {
    this._forceWaitInterval = value;
  }
  public resetForceWaitInterval() {
    this._forceWaitInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceWaitIntervalInput() {
    return this._forceWaitInterval;
  }

  // forever - computed: false, optional: true, required: false
  private _forever?: number; 
  public get forever() {
    return this.getNumberAttribute('forever');
  }
  public set forever(value: number) {
    this._forever = value;
  }
  public resetForever() {
    this._forever = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get foreverInput() {
    return this._forever;
  }

  // hold_preemption_interval - computed: false, optional: true, required: false
  private _holdPreemptionInterval?: number; 
  public get holdPreemptionInterval() {
    return this.getNumberAttribute('hold_preemption_interval');
  }
  public set holdPreemptionInterval(value: number) {
    this._holdPreemptionInterval = value;
  }
  public resetHoldPreemptionInterval() {
    this._holdPreemptionInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get holdPreemptionIntervalInput() {
    return this._holdPreemptionInterval;
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

  // link_poll_timeout - computed: false, optional: true, required: false
  private _linkPollTimeout?: number; 
  public get linkPollTimeout() {
    return this.getNumberAttribute('link_poll_timeout');
  }
  public set linkPollTimeout(value: number) {
    this._linkPollTimeout = value;
  }
  public resetLinkPollTimeout() {
    this._linkPollTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkPollTimeoutInput() {
    return this._linkPollTimeout;
  }

  // memory_stat_interval - computed: false, optional: true, required: false
  private _memoryStatInterval?: number; 
  public get memoryStatInterval() {
    return this.getNumberAttribute('memory_stat_interval');
  }
  public set memoryStatInterval(value: number) {
    this._memoryStatInterval = value;
  }
  public resetMemoryStatInterval() {
    this._memoryStatInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryStatIntervalInput() {
    return this._memoryStatInterval;
  }

  // multicast_ip - computed: false, optional: true, required: false
  private _multicastIp?: string; 
  public get multicastIp() {
    return this.getStringAttribute('multicast_ip');
  }
  public set multicastIp(value: string) {
    this._multicastIp = value;
  }
  public resetMulticastIp() {
    this._multicastIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastIpInput() {
    return this._multicastIp;
  }

  // multicast_ipv6 - computed: false, optional: true, required: false
  private _multicastIpv6?: string; 
  public get multicastIpv6() {
    return this.getStringAttribute('multicast_ipv6');
  }
  public set multicastIpv6(value: string) {
    this._multicastIpv6 = value;
  }
  public resetMulticastIpv6() {
    this._multicastIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastIpv6Input() {
    return this._multicastIpv6;
  }

  // multicast_port - computed: false, optional: true, required: false
  private _multicastPort?: number; 
  public get multicastPort() {
    return this.getNumberAttribute('multicast_port');
  }
  public set multicastPort(value: number) {
    this._multicastPort = value;
  }
  public resetMulticastPort() {
    this._multicastPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multicastPortInput() {
    return this._multicastPort;
  }

  // size - computed: false, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // slog_level - computed: false, optional: true, required: false
  private _slogLevel?: number; 
  public get slogLevel() {
    return this.getNumberAttribute('slog_level');
  }
  public set slogLevel(value: number) {
    this._slogLevel = value;
  }
  public resetSlogLevel() {
    this._slogLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slogLevelInput() {
    return this._slogLevel;
  }

  // slog_method - computed: false, optional: true, required: false
  private _slogMethod?: number; 
  public get slogMethod() {
    return this.getNumberAttribute('slog_method');
  }
  public set slogMethod(value: number) {
    this._slogMethod = value;
  }
  public resetSlogMethod() {
    this._slogMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slogMethodInput() {
    return this._slogMethod;
  }

  // speed_limit - computed: false, optional: true, required: false
  private _speedLimit?: number; 
  public get speedLimit() {
    return this.getNumberAttribute('speed_limit');
  }
  public set speedLimit(value: number) {
    this._speedLimit = value;
  }
  public resetSpeedLimit() {
    this._speedLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get speedLimitInput() {
    return this._speedLimit;
  }

  // ssl_cert - computed: false, optional: true, required: false
  private _sslCert?: string; 
  public get sslCert() {
    return this.getStringAttribute('ssl_cert');
  }
  public set sslCert(value: string) {
    this._sslCert = value;
  }
  public resetSslCert() {
    this._sslCert = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslCertInput() {
    return this._sslCert;
  }

  // ssl_config - computed: false, optional: true, required: false
  private _sslConfig?: number; 
  public get sslConfig() {
    return this.getNumberAttribute('ssl_config');
  }
  public set sslConfig(value: number) {
    this._sslConfig = value;
  }
  public resetSslConfig() {
    this._sslConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslConfigInput() {
    return this._sslConfig;
  }

  // ssl_enable - computed: false, optional: true, required: false
  private _sslEnable?: number; 
  public get sslEnable() {
    return this.getNumberAttribute('ssl_enable');
  }
  public set sslEnable(value: number) {
    this._sslEnable = value;
  }
  public resetSslEnable() {
    this._sslEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslEnableInput() {
    return this._sslEnable;
  }

  // ssl_key - computed: false, optional: true, required: false
  private _sslKey?: string; 
  public get sslKey() {
    return this.getStringAttribute('ssl_key');
  }
  public set sslKey(value: string) {
    this._sslKey = value;
  }
  public resetSslKey() {
    this._sslKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sslKeyInput() {
    return this._sslKey;
  }

  // tcp_channel_monitor - computed: false, optional: true, required: false
  private _tcpChannelMonitor?: number; 
  public get tcpChannelMonitor() {
    return this.getNumberAttribute('tcp_channel_monitor');
  }
  public set tcpChannelMonitor(value: number) {
    this._tcpChannelMonitor = value;
  }
  public resetTcpChannelMonitor() {
    this._tcpChannelMonitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpChannelMonitorInput() {
    return this._tcpChannelMonitor;
  }

  // time_interval - computed: false, optional: true, required: false
  private _timeInterval?: number; 
  public get timeInterval() {
    return this.getNumberAttribute('time_interval');
  }
  public set timeInterval(value: number) {
    this._timeInterval = value;
  }
  public resetTimeInterval() {
    this._timeInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalInput() {
    return this._timeInterval;
  }

  // time_interval_mseconds - computed: false, optional: true, required: false
  private _timeIntervalMseconds?: number; 
  public get timeIntervalMseconds() {
    return this.getNumberAttribute('time_interval_mseconds');
  }
  public set timeIntervalMseconds(value: number) {
    this._timeIntervalMseconds = value;
  }
  public resetTimeIntervalMseconds() {
    this._timeIntervalMseconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeIntervalMsecondsInput() {
    return this._timeIntervalMseconds;
  }

  // transmit_fragment_size - computed: false, optional: true, required: false
  private _transmitFragmentSize?: number; 
  public get transmitFragmentSize() {
    return this.getNumberAttribute('transmit_fragment_size');
  }
  public set transmitFragmentSize(value: number) {
    this._transmitFragmentSize = value;
  }
  public resetTransmitFragmentSize() {
    this._transmitFragmentSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transmitFragmentSizeInput() {
    return this._transmitFragmentSize;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // floating_ip_cfg - computed: false, optional: true, required: false
  private _floatingIpCfg = new VcsVcsParaFloatingIpCfgList(this, "floating_ip_cfg", false);
  public get floatingIpCfg() {
    return this._floatingIpCfg;
  }
  public putFloatingIpCfg(value: VcsVcsParaFloatingIpCfg[] | cdktf.IResolvable) {
    this._floatingIpCfg.internalValue = value;
  }
  public resetFloatingIpCfg() {
    this._floatingIpCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpCfgInput() {
    return this._floatingIpCfg.internalValue;
  }

  // floating_ipv6_cfg - computed: false, optional: true, required: false
  private _floatingIpv6Cfg = new VcsVcsParaFloatingIpv6CfgList(this, "floating_ipv6_cfg", false);
  public get floatingIpv6Cfg() {
    return this._floatingIpv6Cfg;
  }
  public putFloatingIpv6Cfg(value: VcsVcsParaFloatingIpv6Cfg[] | cdktf.IResolvable) {
    this._floatingIpv6Cfg.internalValue = value;
  }
  public resetFloatingIpv6Cfg() {
    this._floatingIpv6Cfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floatingIpv6CfgInput() {
    return this._floatingIpv6Cfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      chassis_id: cdktf.numberToTerraform(this._chassisId),
      config_info: cdktf.stringToTerraform(this._configInfo),
      config_seq: cdktf.stringToTerraform(this._configSeq),
      dead_interval: cdktf.numberToTerraform(this._deadInterval),
      dead_interval_mseconds: cdktf.numberToTerraform(this._deadIntervalMseconds),
      failure_retry_count_value: cdktf.numberToTerraform(this._failureRetryCountValue),
      force_wait_interval: cdktf.numberToTerraform(this._forceWaitInterval),
      forever: cdktf.numberToTerraform(this._forever),
      hold_preemption_interval: cdktf.numberToTerraform(this._holdPreemptionInterval),
      id: cdktf.stringToTerraform(this._id),
      link_poll_timeout: cdktf.numberToTerraform(this._linkPollTimeout),
      memory_stat_interval: cdktf.numberToTerraform(this._memoryStatInterval),
      multicast_ip: cdktf.stringToTerraform(this._multicastIp),
      multicast_ipv6: cdktf.stringToTerraform(this._multicastIpv6),
      multicast_port: cdktf.numberToTerraform(this._multicastPort),
      size: cdktf.numberToTerraform(this._size),
      slog_level: cdktf.numberToTerraform(this._slogLevel),
      slog_method: cdktf.numberToTerraform(this._slogMethod),
      speed_limit: cdktf.numberToTerraform(this._speedLimit),
      ssl_cert: cdktf.stringToTerraform(this._sslCert),
      ssl_config: cdktf.numberToTerraform(this._sslConfig),
      ssl_enable: cdktf.numberToTerraform(this._sslEnable),
      ssl_key: cdktf.stringToTerraform(this._sslKey),
      tcp_channel_monitor: cdktf.numberToTerraform(this._tcpChannelMonitor),
      time_interval: cdktf.numberToTerraform(this._timeInterval),
      time_interval_mseconds: cdktf.numberToTerraform(this._timeIntervalMseconds),
      transmit_fragment_size: cdktf.numberToTerraform(this._transmitFragmentSize),
      uuid: cdktf.stringToTerraform(this._uuid),
      floating_ip_cfg: cdktf.listMapper(vcsVcsParaFloatingIpCfgToTerraform, true)(this._floatingIpCfg.internalValue),
      floating_ipv6_cfg: cdktf.listMapper(vcsVcsParaFloatingIpv6CfgToTerraform, true)(this._floatingIpv6Cfg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      chassis_id: {
        value: cdktf.numberToHclTerraform(this._chassisId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config_info: {
        value: cdktf.stringToHclTerraform(this._configInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_seq: {
        value: cdktf.stringToHclTerraform(this._configSeq),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dead_interval: {
        value: cdktf.numberToHclTerraform(this._deadInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dead_interval_mseconds: {
        value: cdktf.numberToHclTerraform(this._deadIntervalMseconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      failure_retry_count_value: {
        value: cdktf.numberToHclTerraform(this._failureRetryCountValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      force_wait_interval: {
        value: cdktf.numberToHclTerraform(this._forceWaitInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forever: {
        value: cdktf.numberToHclTerraform(this._forever),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hold_preemption_interval: {
        value: cdktf.numberToHclTerraform(this._holdPreemptionInterval),
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
      link_poll_timeout: {
        value: cdktf.numberToHclTerraform(this._linkPollTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_stat_interval: {
        value: cdktf.numberToHclTerraform(this._memoryStatInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      multicast_ip: {
        value: cdktf.stringToHclTerraform(this._multicastIp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_ipv6: {
        value: cdktf.stringToHclTerraform(this._multicastIpv6),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multicast_port: {
        value: cdktf.numberToHclTerraform(this._multicastPort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slog_level: {
        value: cdktf.numberToHclTerraform(this._slogLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      slog_method: {
        value: cdktf.numberToHclTerraform(this._slogMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      speed_limit: {
        value: cdktf.numberToHclTerraform(this._speedLimit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_cert: {
        value: cdktf.stringToHclTerraform(this._sslCert),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ssl_config: {
        value: cdktf.numberToHclTerraform(this._sslConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_enable: {
        value: cdktf.numberToHclTerraform(this._sslEnable),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ssl_key: {
        value: cdktf.stringToHclTerraform(this._sslKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tcp_channel_monitor: {
        value: cdktf.numberToHclTerraform(this._tcpChannelMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_interval: {
        value: cdktf.numberToHclTerraform(this._timeInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      time_interval_mseconds: {
        value: cdktf.numberToHclTerraform(this._timeIntervalMseconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      transmit_fragment_size: {
        value: cdktf.numberToHclTerraform(this._transmitFragmentSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      floating_ip_cfg: {
        value: cdktf.listMapperHcl(vcsVcsParaFloatingIpCfgToHclTerraform, true)(this._floatingIpCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VcsVcsParaFloatingIpCfgList",
      },
      floating_ipv6_cfg: {
        value: cdktf.listMapperHcl(vcsVcsParaFloatingIpv6CfgToHclTerraform, true)(this._floatingIpv6Cfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VcsVcsParaFloatingIpv6CfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
