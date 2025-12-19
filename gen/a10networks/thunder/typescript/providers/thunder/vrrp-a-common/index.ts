// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VrrpACommonConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'enable': enable vrrp-a; 'disable': disable vrrp-a;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common#action VrrpACommon#action}
  */
  readonly action?: string;
  /**
  * Number of additional gratuitous ARPs sent out after HA failover (1-255, default is 4)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common#arp_retry VrrpACommon#arp_retry}
  */
  readonly arpRetry?: number;
  /**
  * VRRP-A dead timer in terms of how many hello messages missed, default is 5 (2-255, default is 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common#dead_timer VrrpACommon#dead_timer}
  */
  readonly deadTimer?: number;
  /**
  * Unique ID for each VRRP-A box (Device-id number)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common#device_id VrrpACommon#device_id}
  */
  readonly deviceId?: number;
  /**
  * Disable default vrid
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common#disable_default_vrid VrrpACommon#disable_default_vrid}
  */
  readonly disableDefaultVrid?: number;
  /**
  * Enables Layer 2/3 forwarding of Layer 4 traffic on the Standby ACOS device
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common#forward_l4_packet_on_standby VrrpACommon#forward_l4_packet_on_standby}
  */
  readonly forwardL4PacketOnStandby?: number;
  /**
  * set get ready time after ax starting up (60-1200, in unit of 100millisec, default is 60)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common#get_ready_time VrrpACommon#get_ready_time}
  */
  readonly fetchReadyTime?: number;
  /**
  * VRRP-A Hello Interval (1-255, in unit of 100millisec, default is 2)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common#hello_interval VrrpACommon#hello_interval}
  */
  readonly helloInterval?: number;
  /**
  * VRRP-A packet IPv6 header hop-limit (hop-limit, default is 64)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common#hop_limit VrrpACommon#hop_limit}
  */
  readonly hopLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common#id VrrpACommon#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Delay before changing state from Active to Standby (1-255, in unit of 100millisec, default is 60)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common#preemption_delay VrrpACommon#preemption_delay}
  */
  readonly preemptionDelay?: number;
  /**
  * Time between restarting ports on standby system after transition
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common#restart_time VrrpACommon#restart_time}
  */
  readonly restartTime?: number;
  /**
  * Set-ID for HA configuration (Set id from 1 to 15)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common#set_id VrrpACommon#set_id}
  */
  readonly setId?: number;
  /**
  * Delay before changing state after up/down event (Units of 100 milliseconds (default 30))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common#track_event_delay VrrpACommon#track_event_delay}
  */
  readonly trackEventDelay?: number;
  /**
  * VRRP-A packet IPv4 header TTL (TTL, default is 128)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common#ttl VrrpACommon#ttl}
  */
  readonly ttl?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common#uuid VrrpACommon#uuid}
  */
  readonly uuid?: string;
  /**
  * hostid_append_to_vrid block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common#hostid_append_to_vrid VrrpACommon#hostid_append_to_vrid}
  */
  readonly hostidAppendToVrid?: VrrpACommonHostidAppendToVrid;
  /**
  * inline_mode_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common#inline_mode_cfg VrrpACommon#inline_mode_cfg}
  */
  readonly inlineModeCfg?: VrrpACommonInlineModeCfg;
}
export interface VrrpACommonHostidAppendToVrid {
  /**
  * hostid append to vrid default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common#hostid_append_to_vrid_default VrrpACommon#hostid_append_to_vrid_default}
  */
  readonly hostidAppendToVridDefault?: number;
  /**
  * hostid append to vrid num
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common#hostid_append_to_vrid_value VrrpACommon#hostid_append_to_vrid_value}
  */
  readonly hostidAppendToVridValue?: number;
}

export function vrrpACommonHostidAppendToVridToTerraform(struct?: VrrpACommonHostidAppendToVridOutputReference | VrrpACommonHostidAppendToVrid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hostid_append_to_vrid_default: cdktf.numberToTerraform(struct!.hostidAppendToVridDefault),
    hostid_append_to_vrid_value: cdktf.numberToTerraform(struct!.hostidAppendToVridValue),
  }
}


export function vrrpACommonHostidAppendToVridToHclTerraform(struct?: VrrpACommonHostidAppendToVridOutputReference | VrrpACommonHostidAppendToVrid): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hostid_append_to_vrid_default: {
      value: cdktf.numberToHclTerraform(struct!.hostidAppendToVridDefault),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hostid_append_to_vrid_value: {
      value: cdktf.numberToHclTerraform(struct!.hostidAppendToVridValue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpACommonHostidAppendToVridOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VrrpACommonHostidAppendToVrid | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostidAppendToVridDefault !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostidAppendToVridDefault = this._hostidAppendToVridDefault;
    }
    if (this._hostidAppendToVridValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostidAppendToVridValue = this._hostidAppendToVridValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpACommonHostidAppendToVrid | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostidAppendToVridDefault = undefined;
      this._hostidAppendToVridValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostidAppendToVridDefault = value.hostidAppendToVridDefault;
      this._hostidAppendToVridValue = value.hostidAppendToVridValue;
    }
  }

  // hostid_append_to_vrid_default - computed: false, optional: true, required: false
  private _hostidAppendToVridDefault?: number; 
  public get hostidAppendToVridDefault() {
    return this.getNumberAttribute('hostid_append_to_vrid_default');
  }
  public set hostidAppendToVridDefault(value: number) {
    this._hostidAppendToVridDefault = value;
  }
  public resetHostidAppendToVridDefault() {
    this._hostidAppendToVridDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostidAppendToVridDefaultInput() {
    return this._hostidAppendToVridDefault;
  }

  // hostid_append_to_vrid_value - computed: false, optional: true, required: false
  private _hostidAppendToVridValue?: number; 
  public get hostidAppendToVridValue() {
    return this.getNumberAttribute('hostid_append_to_vrid_value');
  }
  public set hostidAppendToVridValue(value: number) {
    this._hostidAppendToVridValue = value;
  }
  public resetHostidAppendToVridValue() {
    this._hostidAppendToVridValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostidAppendToVridValueInput() {
    return this._hostidAppendToVridValue;
  }
}
export interface VrrpACommonInlineModeCfg {
  /**
  * Enable Layer 2 Inline Hot Standby Mode
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common#inline_mode VrrpACommon#inline_mode}
  */
  readonly inlineMode?: number;
  /**
  * Preferred ethernet Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common#preferred_port VrrpACommon#preferred_port}
  */
  readonly preferredPort?: number;
  /**
  * Preferred trunk Port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common#preferred_trunk VrrpACommon#preferred_trunk}
  */
  readonly preferredTrunk?: number;
}

export function vrrpACommonInlineModeCfgToTerraform(struct?: VrrpACommonInlineModeCfgOutputReference | VrrpACommonInlineModeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    inline_mode: cdktf.numberToTerraform(struct!.inlineMode),
    preferred_port: cdktf.numberToTerraform(struct!.preferredPort),
    preferred_trunk: cdktf.numberToTerraform(struct!.preferredTrunk),
  }
}


export function vrrpACommonInlineModeCfgToHclTerraform(struct?: VrrpACommonInlineModeCfgOutputReference | VrrpACommonInlineModeCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    inline_mode: {
      value: cdktf.numberToHclTerraform(struct!.inlineMode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preferred_port: {
      value: cdktf.numberToHclTerraform(struct!.preferredPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    preferred_trunk: {
      value: cdktf.numberToHclTerraform(struct!.preferredTrunk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VrrpACommonInlineModeCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VrrpACommonInlineModeCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._inlineMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.inlineMode = this._inlineMode;
    }
    if (this._preferredPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredPort = this._preferredPort;
    }
    if (this._preferredTrunk !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredTrunk = this._preferredTrunk;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VrrpACommonInlineModeCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._inlineMode = undefined;
      this._preferredPort = undefined;
      this._preferredTrunk = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._inlineMode = value.inlineMode;
      this._preferredPort = value.preferredPort;
      this._preferredTrunk = value.preferredTrunk;
    }
  }

  // inline_mode - computed: false, optional: true, required: false
  private _inlineMode?: number; 
  public get inlineMode() {
    return this.getNumberAttribute('inline_mode');
  }
  public set inlineMode(value: number) {
    this._inlineMode = value;
  }
  public resetInlineMode() {
    this._inlineMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineModeInput() {
    return this._inlineMode;
  }

  // preferred_port - computed: false, optional: true, required: false
  private _preferredPort?: number; 
  public get preferredPort() {
    return this.getNumberAttribute('preferred_port');
  }
  public set preferredPort(value: number) {
    this._preferredPort = value;
  }
  public resetPreferredPort() {
    this._preferredPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredPortInput() {
    return this._preferredPort;
  }

  // preferred_trunk - computed: false, optional: true, required: false
  private _preferredTrunk?: number; 
  public get preferredTrunk() {
    return this.getNumberAttribute('preferred_trunk');
  }
  public set preferredTrunk(value: number) {
    this._preferredTrunk = value;
  }
  public resetPreferredTrunk() {
    this._preferredTrunk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredTrunkInput() {
    return this._preferredTrunk;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common thunder_vrrp_a_common}
*/
export class VrrpACommon extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_vrrp_a_common";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VrrpACommon resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VrrpACommon to import
  * @param importFromId The id of the existing VrrpACommon that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VrrpACommon to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_vrrp_a_common", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/vrrp_a_common thunder_vrrp_a_common} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VrrpACommonConfig = {}
  */
  public constructor(scope: Construct, id: string, config: VrrpACommonConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_vrrp_a_common',
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
    this._action = config.action;
    this._arpRetry = config.arpRetry;
    this._deadTimer = config.deadTimer;
    this._deviceId = config.deviceId;
    this._disableDefaultVrid = config.disableDefaultVrid;
    this._forwardL4PacketOnStandby = config.forwardL4PacketOnStandby;
    this._getReadyTime = config.fetchReadyTime;
    this._helloInterval = config.helloInterval;
    this._hopLimit = config.hopLimit;
    this._id = config.id;
    this._preemptionDelay = config.preemptionDelay;
    this._restartTime = config.restartTime;
    this._setId = config.setId;
    this._trackEventDelay = config.trackEventDelay;
    this._ttl = config.ttl;
    this._uuid = config.uuid;
    this._hostidAppendToVrid.internalValue = config.hostidAppendToVrid;
    this._inlineModeCfg.internalValue = config.inlineModeCfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: true, required: false
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  public resetAction() {
    this._action = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // arp_retry - computed: false, optional: true, required: false
  private _arpRetry?: number; 
  public get arpRetry() {
    return this.getNumberAttribute('arp_retry');
  }
  public set arpRetry(value: number) {
    this._arpRetry = value;
  }
  public resetArpRetry() {
    this._arpRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arpRetryInput() {
    return this._arpRetry;
  }

  // dead_timer - computed: false, optional: true, required: false
  private _deadTimer?: number; 
  public get deadTimer() {
    return this.getNumberAttribute('dead_timer');
  }
  public set deadTimer(value: number) {
    this._deadTimer = value;
  }
  public resetDeadTimer() {
    this._deadTimer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deadTimerInput() {
    return this._deadTimer;
  }

  // device_id - computed: false, optional: true, required: false
  private _deviceId?: number; 
  public get deviceId() {
    return this.getNumberAttribute('device_id');
  }
  public set deviceId(value: number) {
    this._deviceId = value;
  }
  public resetDeviceId() {
    this._deviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceIdInput() {
    return this._deviceId;
  }

  // disable_default_vrid - computed: false, optional: true, required: false
  private _disableDefaultVrid?: number; 
  public get disableDefaultVrid() {
    return this.getNumberAttribute('disable_default_vrid');
  }
  public set disableDefaultVrid(value: number) {
    this._disableDefaultVrid = value;
  }
  public resetDisableDefaultVrid() {
    this._disableDefaultVrid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableDefaultVridInput() {
    return this._disableDefaultVrid;
  }

  // forward_l4_packet_on_standby - computed: false, optional: true, required: false
  private _forwardL4PacketOnStandby?: number; 
  public get forwardL4PacketOnStandby() {
    return this.getNumberAttribute('forward_l4_packet_on_standby');
  }
  public set forwardL4PacketOnStandby(value: number) {
    this._forwardL4PacketOnStandby = value;
  }
  public resetForwardL4PacketOnStandby() {
    this._forwardL4PacketOnStandby = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forwardL4PacketOnStandbyInput() {
    return this._forwardL4PacketOnStandby;
  }

  // get_ready_time - computed: false, optional: true, required: false
  private _getReadyTime?: number; 
  public get fetchReadyTime() {
    return this.getNumberAttribute('get_ready_time');
  }
  public set fetchReadyTime(value: number) {
    this._getReadyTime = value;
  }
  public resetFetchReadyTime() {
    this._getReadyTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fetchReadyTimeInput() {
    return this._getReadyTime;
  }

  // hello_interval - computed: false, optional: true, required: false
  private _helloInterval?: number; 
  public get helloInterval() {
    return this.getNumberAttribute('hello_interval');
  }
  public set helloInterval(value: number) {
    this._helloInterval = value;
  }
  public resetHelloInterval() {
    this._helloInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helloIntervalInput() {
    return this._helloInterval;
  }

  // hop_limit - computed: false, optional: true, required: false
  private _hopLimit?: number; 
  public get hopLimit() {
    return this.getNumberAttribute('hop_limit');
  }
  public set hopLimit(value: number) {
    this._hopLimit = value;
  }
  public resetHopLimit() {
    this._hopLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hopLimitInput() {
    return this._hopLimit;
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

  // preemption_delay - computed: false, optional: true, required: false
  private _preemptionDelay?: number; 
  public get preemptionDelay() {
    return this.getNumberAttribute('preemption_delay');
  }
  public set preemptionDelay(value: number) {
    this._preemptionDelay = value;
  }
  public resetPreemptionDelay() {
    this._preemptionDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preemptionDelayInput() {
    return this._preemptionDelay;
  }

  // restart_time - computed: false, optional: true, required: false
  private _restartTime?: number; 
  public get restartTime() {
    return this.getNumberAttribute('restart_time');
  }
  public set restartTime(value: number) {
    this._restartTime = value;
  }
  public resetRestartTime() {
    this._restartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get restartTimeInput() {
    return this._restartTime;
  }

  // set_id - computed: false, optional: true, required: false
  private _setId?: number; 
  public get setId() {
    return this.getNumberAttribute('set_id');
  }
  public set setId(value: number) {
    this._setId = value;
  }
  public resetSetId() {
    this._setId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setIdInput() {
    return this._setId;
  }

  // track_event_delay - computed: false, optional: true, required: false
  private _trackEventDelay?: number; 
  public get trackEventDelay() {
    return this.getNumberAttribute('track_event_delay');
  }
  public set trackEventDelay(value: number) {
    this._trackEventDelay = value;
  }
  public resetTrackEventDelay() {
    this._trackEventDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trackEventDelayInput() {
    return this._trackEventDelay;
  }

  // ttl - computed: false, optional: true, required: false
  private _ttl?: number; 
  public get ttl() {
    return this.getNumberAttribute('ttl');
  }
  public set ttl(value: number) {
    this._ttl = value;
  }
  public resetTtl() {
    this._ttl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlInput() {
    return this._ttl;
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

  // hostid_append_to_vrid - computed: false, optional: true, required: false
  private _hostidAppendToVrid = new VrrpACommonHostidAppendToVridOutputReference(this, "hostid_append_to_vrid");
  public get hostidAppendToVrid() {
    return this._hostidAppendToVrid;
  }
  public putHostidAppendToVrid(value: VrrpACommonHostidAppendToVrid) {
    this._hostidAppendToVrid.internalValue = value;
  }
  public resetHostidAppendToVrid() {
    this._hostidAppendToVrid.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostidAppendToVridInput() {
    return this._hostidAppendToVrid.internalValue;
  }

  // inline_mode_cfg - computed: false, optional: true, required: false
  private _inlineModeCfg = new VrrpACommonInlineModeCfgOutputReference(this, "inline_mode_cfg");
  public get inlineModeCfg() {
    return this._inlineModeCfg;
  }
  public putInlineModeCfg(value: VrrpACommonInlineModeCfg) {
    this._inlineModeCfg.internalValue = value;
  }
  public resetInlineModeCfg() {
    this._inlineModeCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inlineModeCfgInput() {
    return this._inlineModeCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action: cdktf.stringToTerraform(this._action),
      arp_retry: cdktf.numberToTerraform(this._arpRetry),
      dead_timer: cdktf.numberToTerraform(this._deadTimer),
      device_id: cdktf.numberToTerraform(this._deviceId),
      disable_default_vrid: cdktf.numberToTerraform(this._disableDefaultVrid),
      forward_l4_packet_on_standby: cdktf.numberToTerraform(this._forwardL4PacketOnStandby),
      get_ready_time: cdktf.numberToTerraform(this._getReadyTime),
      hello_interval: cdktf.numberToTerraform(this._helloInterval),
      hop_limit: cdktf.numberToTerraform(this._hopLimit),
      id: cdktf.stringToTerraform(this._id),
      preemption_delay: cdktf.numberToTerraform(this._preemptionDelay),
      restart_time: cdktf.numberToTerraform(this._restartTime),
      set_id: cdktf.numberToTerraform(this._setId),
      track_event_delay: cdktf.numberToTerraform(this._trackEventDelay),
      ttl: cdktf.numberToTerraform(this._ttl),
      uuid: cdktf.stringToTerraform(this._uuid),
      hostid_append_to_vrid: vrrpACommonHostidAppendToVridToTerraform(this._hostidAppendToVrid.internalValue),
      inline_mode_cfg: vrrpACommonInlineModeCfgToTerraform(this._inlineModeCfg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      arp_retry: {
        value: cdktf.numberToHclTerraform(this._arpRetry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      dead_timer: {
        value: cdktf.numberToHclTerraform(this._deadTimer),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      device_id: {
        value: cdktf.numberToHclTerraform(this._deviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disable_default_vrid: {
        value: cdktf.numberToHclTerraform(this._disableDefaultVrid),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      forward_l4_packet_on_standby: {
        value: cdktf.numberToHclTerraform(this._forwardL4PacketOnStandby),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      get_ready_time: {
        value: cdktf.numberToHclTerraform(this._getReadyTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hello_interval: {
        value: cdktf.numberToHclTerraform(this._helloInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hop_limit: {
        value: cdktf.numberToHclTerraform(this._hopLimit),
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
      preemption_delay: {
        value: cdktf.numberToHclTerraform(this._preemptionDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      restart_time: {
        value: cdktf.numberToHclTerraform(this._restartTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      set_id: {
        value: cdktf.numberToHclTerraform(this._setId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      track_event_delay: {
        value: cdktf.numberToHclTerraform(this._trackEventDelay),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      ttl: {
        value: cdktf.numberToHclTerraform(this._ttl),
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
      hostid_append_to_vrid: {
        value: vrrpACommonHostidAppendToVridToHclTerraform(this._hostidAppendToVrid.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrrpACommonHostidAppendToVridList",
      },
      inline_mode_cfg: {
        value: vrrpACommonInlineModeCfgToHclTerraform(this._inlineModeCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VrrpACommonInlineModeCfgList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
