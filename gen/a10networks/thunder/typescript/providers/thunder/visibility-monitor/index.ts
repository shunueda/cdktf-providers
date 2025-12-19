// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VisibilityMonitorAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#id VisibilityMonitorA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Start indexing associated sessions
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#index_sessions VisibilityMonitorA#index_sessions}
  */
  readonly indexSessions?: number;
  /**
  * 'per-cpu': Use per cpu list;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#index_sessions_type VisibilityMonitorA#index_sessions_type}
  */
  readonly indexSessionsType?: string;
  /**
  * Enable topk for primary entities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#mon_entity_topk VisibilityMonitorA#mon_entity_topk}
  */
  readonly monEntityTopk?: number;
  /**
  * 'source': Monitor traffic from all sources; 'dest': Monitor traffic to any destination; 'service': Monitor traffic to any service; 'source-nat-ip': Monitor traffic to all source nat IPs;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#monitor_key VisibilityMonitorA#monitor_key}
  */
  readonly monitorKey?: string;
  /**
  * 'traffic': Mointor traffic; 'xflow': Monitor xflow samples;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#primary_monitor VisibilityMonitorA#primary_monitor}
  */
  readonly primaryMonitor: string;
  /**
  * Enable topk for sources to primary-entities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#source_entity_topk VisibilityMonitorA#source_entity_topk}
  */
  readonly sourceEntityTopk?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#uuid VisibilityMonitorA#uuid}
  */
  readonly uuid?: string;
  /**
  * agent_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#agent_list VisibilityMonitorA#agent_list}
  */
  readonly agentList?: VisibilityMonitorAgentListStructA[] | cdktf.IResolvable;
  /**
  * debug_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#debug_list VisibilityMonitorA#debug_list}
  */
  readonly debugList?: VisibilityMonitorDebugListStructA[] | cdktf.IResolvable;
  /**
  * delete_debug_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#delete_debug_file VisibilityMonitorA#delete_debug_file}
  */
  readonly deleteDebugFile?: VisibilityMonitorDeleteDebugFileA;
  /**
  * netflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#netflow VisibilityMonitorA#netflow}
  */
  readonly netflow?: VisibilityMonitorNetflowA;
  /**
  * replay_debug_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#replay_debug_file VisibilityMonitorA#replay_debug_file}
  */
  readonly replayDebugFile?: VisibilityMonitorReplayDebugFileA;
  /**
  * secondary_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#secondary_monitor VisibilityMonitorA#secondary_monitor}
  */
  readonly secondaryMonitor?: VisibilityMonitorSecondaryMonitorA;
  /**
  * sflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#sflow VisibilityMonitorA#sflow}
  */
  readonly sflow?: VisibilityMonitorSflowA;
  /**
  * template block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#template VisibilityMonitorA#template}
  */
  readonly template?: VisibilityMonitorTemplateA;
}
export interface VisibilityMonitorAgentListSamplingEnableA {
  /**
  * 'all': all; 'sflow-packets-received': sFlow Packets Received; 'sflow-samples-received': sFlow Samples Received; 'sflow-samples-bad-len': sFlow Samples Bad Length; 'sflow-samples-non-std': sFlow Samples Non-standard; 'sflow-samples-skipped': sFlow Samples Skipped; 'sflow-sample-record-bad-len': sFlow Sample Records Bad Length; 'sflow-samples-sent-for-detection': sFlow Samples Processed For Detection; 'sflow-sample-record-invalid-layer2': sFlow Sample Records Unknown Layer-2; 'sflow-sample-ipv6-hdr-parse-fail': sFlow Sample IPv6 Record Header Parse Failures; 'sflow-disabled': sFlow Packet Samples Processing Disabled; 'netflow-disabled': Netflow Flow Samples Processing Disabled; 'netflow-v5-packets-received': Netflow v5 Packets Received; 'netflow-v5-samples-received': Netflow v5 Samples Received; 'netflow-v5-samples-sent-for-detection': Netflow v5 Samples Processed For Detection; 'netflow-v5-sample-records-bad-len': Netflow v5 Sample Records Bad Length; 'netflow-v5-max-records-exceed': Netflow v5 Sample Max Records Error; 'netflow-v9-packets-received': Netflow v9 Packets Received; 'netflow-v9-samples-received': Netflow v9 Samples Received; 'netflow-v9-samples-sent-for-detection': Netflow v9 Samples Processed For Detection; 'netflow-v9-sample-records-bad-len': Netflow v9 Sample Records Bad Length; 'netflow-v9-max-records-exceed': Netflow v9 Sample Max Records Error; 'netflow-v10-packets-received': Netflow v10 Packets Received; 'netflow-v10-samples-received': Netflow v10 Samples Received; 'netflow-v10-samples-sent-for-detection': Netflow v10 Samples Procssed For Detection; 'netflow-v10-sample-records-bad-len': Netflow v10 Sample Records Bad Length; 'netflow-v10-max-records-exceed': Netflow v10 Sample Max records Error; 'netflow-tcp-sample-received': Netflow TCP Samples Received; 'netflow-udp-sample-received': Netflow UDP Samples received; 'netflow-icmp-sample-received': Netflow ICMP Samples Received; 'netflow-other-sample-received': Netflow OTHER Samples Received; 'netflow-record-copy-oom-error': Netflow Data Record Copy Fail OOM; 'netflow-record-rse-invalid': Netflow Data Record Reduced Size Invalid; 'netflow-sample-flow-dur-error': Netflow Sample Flow Duration Error;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#counters1 VisibilityMonitorA#counters1}
  */
  readonly counters1?: string;
}

export function visibilityMonitorAgentListSamplingEnableAToTerraform(struct?: VisibilityMonitorAgentListSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function visibilityMonitorAgentListSamplingEnableAToHclTerraform(struct?: VisibilityMonitorAgentListSamplingEnableA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityMonitorAgentListSamplingEnableAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VisibilityMonitorAgentListSamplingEnableA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityMonitorAgentListSamplingEnableA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class VisibilityMonitorAgentListSamplingEnableAList extends cdktf.ComplexList {
  public internalValue? : VisibilityMonitorAgentListSamplingEnableA[] | cdktf.IResolvable

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
  public get(index: number): VisibilityMonitorAgentListSamplingEnableAOutputReference {
    return new VisibilityMonitorAgentListSamplingEnableAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisibilityMonitorAgentListStructA {
  /**
  * Specify name for the agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#agent_name VisibilityMonitorA#agent_name}
  */
  readonly agentName: string;
  /**
  * Configure agent's IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#agent_v4_addr VisibilityMonitorA#agent_v4_addr}
  */
  readonly agentV4Addr?: string;
  /**
  * Configure agent's IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#agent_v6_addr VisibilityMonitorA#agent_v6_addr}
  */
  readonly agentV6Addr?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#user_tag VisibilityMonitorA#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#uuid VisibilityMonitorA#uuid}
  */
  readonly uuid?: string;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#sampling_enable VisibilityMonitorA#sampling_enable}
  */
  readonly samplingEnable?: VisibilityMonitorAgentListSamplingEnableA[] | cdktf.IResolvable;
}

export function visibilityMonitorAgentListStructAToTerraform(struct?: VisibilityMonitorAgentListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_name: cdktf.stringToTerraform(struct!.agentName),
    agent_v4_addr: cdktf.stringToTerraform(struct!.agentV4Addr),
    agent_v6_addr: cdktf.stringToTerraform(struct!.agentV6Addr),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    sampling_enable: cdktf.listMapper(visibilityMonitorAgentListSamplingEnableAToTerraform, true)(struct!.samplingEnable),
  }
}


export function visibilityMonitorAgentListStructAToHclTerraform(struct?: VisibilityMonitorAgentListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    agent_name: {
      value: cdktf.stringToHclTerraform(struct!.agentName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    agent_v4_addr: {
      value: cdktf.stringToHclTerraform(struct!.agentV4Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    agent_v6_addr: {
      value: cdktf.stringToHclTerraform(struct!.agentV6Addr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_tag: {
      value: cdktf.stringToHclTerraform(struct!.userTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(visibilityMonitorAgentListSamplingEnableAToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityMonitorAgentListSamplingEnableAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityMonitorAgentListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VisibilityMonitorAgentListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentName = this._agentName;
    }
    if (this._agentV4Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentV4Addr = this._agentV4Addr;
    }
    if (this._agentV6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentV6Addr = this._agentV6Addr;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityMonitorAgentListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentName = undefined;
      this._agentV4Addr = undefined;
      this._agentV6Addr = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentName = value.agentName;
      this._agentV4Addr = value.agentV4Addr;
      this._agentV6Addr = value.agentV6Addr;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // agent_name - computed: false, optional: false, required: true
  private _agentName?: string; 
  public get agentName() {
    return this.getStringAttribute('agent_name');
  }
  public set agentName(value: string) {
    this._agentName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get agentNameInput() {
    return this._agentName;
  }

  // agent_v4_addr - computed: false, optional: true, required: false
  private _agentV4Addr?: string; 
  public get agentV4Addr() {
    return this.getStringAttribute('agent_v4_addr');
  }
  public set agentV4Addr(value: string) {
    this._agentV4Addr = value;
  }
  public resetAgentV4Addr() {
    this._agentV4Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentV4AddrInput() {
    return this._agentV4Addr;
  }

  // agent_v6_addr - computed: false, optional: true, required: false
  private _agentV6Addr?: string; 
  public get agentV6Addr() {
    return this.getStringAttribute('agent_v6_addr');
  }
  public set agentV6Addr(value: string) {
    this._agentV6Addr = value;
  }
  public resetAgentV6Addr() {
    this._agentV6Addr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentV6AddrInput() {
    return this._agentV6Addr;
  }

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new VisibilityMonitorAgentListSamplingEnableAList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: VisibilityMonitorAgentListSamplingEnableA[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }
}

export class VisibilityMonitorAgentListStructAList extends cdktf.ComplexList {
  public internalValue? : VisibilityMonitorAgentListStructA[] | cdktf.IResolvable

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
  public get(index: number): VisibilityMonitorAgentListStructAOutputReference {
    return new VisibilityMonitorAgentListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisibilityMonitorDebugListStructA {
  /**
  * Specify source/dest ip addr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#debug_ip_addr VisibilityMonitorA#debug_ip_addr}
  */
  readonly debugIpAddr: string;
  /**
  * Specify port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#debug_port VisibilityMonitorA#debug_port}
  */
  readonly debugPort: number;
  /**
  * 'TCP': TCP; 'UDP': UDP; 'ICMP': ICMP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#debug_protocol VisibilityMonitorA#debug_protocol}
  */
  readonly debugProtocol: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#uuid VisibilityMonitorA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityMonitorDebugListStructAToTerraform(struct?: VisibilityMonitorDebugListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug_ip_addr: cdktf.stringToTerraform(struct!.debugIpAddr),
    debug_port: cdktf.numberToTerraform(struct!.debugPort),
    debug_protocol: cdktf.stringToTerraform(struct!.debugProtocol),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityMonitorDebugListStructAToHclTerraform(struct?: VisibilityMonitorDebugListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug_ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.debugIpAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_port: {
      value: cdktf.numberToHclTerraform(struct!.debugPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    debug_protocol: {
      value: cdktf.stringToHclTerraform(struct!.debugProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityMonitorDebugListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VisibilityMonitorDebugListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debugIpAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugIpAddr = this._debugIpAddr;
    }
    if (this._debugPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugPort = this._debugPort;
    }
    if (this._debugProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugProtocol = this._debugProtocol;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityMonitorDebugListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._debugIpAddr = undefined;
      this._debugPort = undefined;
      this._debugProtocol = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._debugIpAddr = value.debugIpAddr;
      this._debugPort = value.debugPort;
      this._debugProtocol = value.debugProtocol;
      this._uuid = value.uuid;
    }
  }

  // debug_ip_addr - computed: false, optional: false, required: true
  private _debugIpAddr?: string; 
  public get debugIpAddr() {
    return this.getStringAttribute('debug_ip_addr');
  }
  public set debugIpAddr(value: string) {
    this._debugIpAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get debugIpAddrInput() {
    return this._debugIpAddr;
  }

  // debug_port - computed: false, optional: false, required: true
  private _debugPort?: number; 
  public get debugPort() {
    return this.getNumberAttribute('debug_port');
  }
  public set debugPort(value: number) {
    this._debugPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get debugPortInput() {
    return this._debugPort;
  }

  // debug_protocol - computed: false, optional: false, required: true
  private _debugProtocol?: string; 
  public get debugProtocol() {
    return this.getStringAttribute('debug_protocol');
  }
  public set debugProtocol(value: string) {
    this._debugProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get debugProtocolInput() {
    return this._debugProtocol;
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
}

export class VisibilityMonitorDebugListStructAList extends cdktf.ComplexList {
  public internalValue? : VisibilityMonitorDebugListStructA[] | cdktf.IResolvable

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
  public get(index: number): VisibilityMonitorDebugListStructAOutputReference {
    return new VisibilityMonitorDebugListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisibilityMonitorDeleteDebugFileA {
  /**
  * Specify source/dest ip addr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#debug_ip_addr VisibilityMonitorA#debug_ip_addr}
  */
  readonly debugIpAddr?: string;
  /**
  * Specify port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#debug_port VisibilityMonitorA#debug_port}
  */
  readonly debugPort?: number;
  /**
  * 'TCP': TCP; 'UDP': UDP; 'ICMP': ICMP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#debug_protocol VisibilityMonitorA#debug_protocol}
  */
  readonly debugProtocol?: string;
}

export function visibilityMonitorDeleteDebugFileAToTerraform(struct?: VisibilityMonitorDeleteDebugFileAOutputReference | VisibilityMonitorDeleteDebugFileA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug_ip_addr: cdktf.stringToTerraform(struct!.debugIpAddr),
    debug_port: cdktf.numberToTerraform(struct!.debugPort),
    debug_protocol: cdktf.stringToTerraform(struct!.debugProtocol),
  }
}


export function visibilityMonitorDeleteDebugFileAToHclTerraform(struct?: VisibilityMonitorDeleteDebugFileAOutputReference | VisibilityMonitorDeleteDebugFileA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug_ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.debugIpAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_port: {
      value: cdktf.numberToHclTerraform(struct!.debugPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    debug_protocol: {
      value: cdktf.stringToHclTerraform(struct!.debugProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityMonitorDeleteDebugFileAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityMonitorDeleteDebugFileA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debugIpAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugIpAddr = this._debugIpAddr;
    }
    if (this._debugPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugPort = this._debugPort;
    }
    if (this._debugProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugProtocol = this._debugProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityMonitorDeleteDebugFileA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._debugIpAddr = undefined;
      this._debugPort = undefined;
      this._debugProtocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._debugIpAddr = value.debugIpAddr;
      this._debugPort = value.debugPort;
      this._debugProtocol = value.debugProtocol;
    }
  }

  // debug_ip_addr - computed: false, optional: true, required: false
  private _debugIpAddr?: string; 
  public get debugIpAddr() {
    return this.getStringAttribute('debug_ip_addr');
  }
  public set debugIpAddr(value: string) {
    this._debugIpAddr = value;
  }
  public resetDebugIpAddr() {
    this._debugIpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugIpAddrInput() {
    return this._debugIpAddr;
  }

  // debug_port - computed: false, optional: true, required: false
  private _debugPort?: number; 
  public get debugPort() {
    return this.getNumberAttribute('debug_port');
  }
  public set debugPort(value: number) {
    this._debugPort = value;
  }
  public resetDebugPort() {
    this._debugPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugPortInput() {
    return this._debugPort;
  }

  // debug_protocol - computed: false, optional: true, required: false
  private _debugProtocol?: string; 
  public get debugProtocol() {
    return this.getStringAttribute('debug_protocol');
  }
  public set debugProtocol(value: string) {
    this._debugProtocol = value;
  }
  public resetDebugProtocol() {
    this._debugProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugProtocolInput() {
    return this._debugProtocol;
  }
}
export interface VisibilityMonitorNetflowA {
  /**
  * Netflow port to receive packets (Netflow port number(default 9996))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#listening_port VisibilityMonitorA#listening_port}
  */
  readonly listeningPort?: number;
  /**
  * Configure active timeout of the netflow templates received in mins (Template active timeout(mins)(default 30mins))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#template_active_timeout VisibilityMonitorA#template_active_timeout}
  */
  readonly templateActiveTimeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#uuid VisibilityMonitorA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityMonitorNetflowAToTerraform(struct?: VisibilityMonitorNetflowAOutputReference | VisibilityMonitorNetflowA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listening_port: cdktf.numberToTerraform(struct!.listeningPort),
    template_active_timeout: cdktf.numberToTerraform(struct!.templateActiveTimeout),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityMonitorNetflowAToHclTerraform(struct?: VisibilityMonitorNetflowAOutputReference | VisibilityMonitorNetflowA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listening_port: {
      value: cdktf.numberToHclTerraform(struct!.listeningPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    template_active_timeout: {
      value: cdktf.numberToHclTerraform(struct!.templateActiveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityMonitorNetflowAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityMonitorNetflowA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listeningPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.listeningPort = this._listeningPort;
    }
    if (this._templateActiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateActiveTimeout = this._templateActiveTimeout;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityMonitorNetflowA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._listeningPort = undefined;
      this._templateActiveTimeout = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._listeningPort = value.listeningPort;
      this._templateActiveTimeout = value.templateActiveTimeout;
      this._uuid = value.uuid;
    }
  }

  // listening_port - computed: false, optional: true, required: false
  private _listeningPort?: number; 
  public get listeningPort() {
    return this.getNumberAttribute('listening_port');
  }
  public set listeningPort(value: number) {
    this._listeningPort = value;
  }
  public resetListeningPort() {
    this._listeningPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listeningPortInput() {
    return this._listeningPort;
  }

  // template_active_timeout - computed: false, optional: true, required: false
  private _templateActiveTimeout?: number; 
  public get templateActiveTimeout() {
    return this.getNumberAttribute('template_active_timeout');
  }
  public set templateActiveTimeout(value: number) {
    this._templateActiveTimeout = value;
  }
  public resetTemplateActiveTimeout() {
    this._templateActiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateActiveTimeoutInput() {
    return this._templateActiveTimeout;
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
}
export interface VisibilityMonitorReplayDebugFileA {
  /**
  * Specify source/dest ip addr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#debug_ip_addr VisibilityMonitorA#debug_ip_addr}
  */
  readonly debugIpAddr?: string;
  /**
  * Specify port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#debug_port VisibilityMonitorA#debug_port}
  */
  readonly debugPort?: number;
  /**
  * 'TCP': TCP; 'UDP': UDP; 'ICMP': ICMP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#debug_protocol VisibilityMonitorA#debug_protocol}
  */
  readonly debugProtocol?: string;
}

export function visibilityMonitorReplayDebugFileAToTerraform(struct?: VisibilityMonitorReplayDebugFileAOutputReference | VisibilityMonitorReplayDebugFileA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug_ip_addr: cdktf.stringToTerraform(struct!.debugIpAddr),
    debug_port: cdktf.numberToTerraform(struct!.debugPort),
    debug_protocol: cdktf.stringToTerraform(struct!.debugProtocol),
  }
}


export function visibilityMonitorReplayDebugFileAToHclTerraform(struct?: VisibilityMonitorReplayDebugFileAOutputReference | VisibilityMonitorReplayDebugFileA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug_ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.debugIpAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_port: {
      value: cdktf.numberToHclTerraform(struct!.debugPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    debug_protocol: {
      value: cdktf.stringToHclTerraform(struct!.debugProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityMonitorReplayDebugFileAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityMonitorReplayDebugFileA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debugIpAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugIpAddr = this._debugIpAddr;
    }
    if (this._debugPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugPort = this._debugPort;
    }
    if (this._debugProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugProtocol = this._debugProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityMonitorReplayDebugFileA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._debugIpAddr = undefined;
      this._debugPort = undefined;
      this._debugProtocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._debugIpAddr = value.debugIpAddr;
      this._debugPort = value.debugPort;
      this._debugProtocol = value.debugProtocol;
    }
  }

  // debug_ip_addr - computed: false, optional: true, required: false
  private _debugIpAddr?: string; 
  public get debugIpAddr() {
    return this.getStringAttribute('debug_ip_addr');
  }
  public set debugIpAddr(value: string) {
    this._debugIpAddr = value;
  }
  public resetDebugIpAddr() {
    this._debugIpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugIpAddrInput() {
    return this._debugIpAddr;
  }

  // debug_port - computed: false, optional: true, required: false
  private _debugPort?: number; 
  public get debugPort() {
    return this.getNumberAttribute('debug_port');
  }
  public set debugPort(value: number) {
    this._debugPort = value;
  }
  public resetDebugPort() {
    this._debugPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugPortInput() {
    return this._debugPort;
  }

  // debug_protocol - computed: false, optional: true, required: false
  private _debugProtocol?: string; 
  public get debugProtocol() {
    return this.getStringAttribute('debug_protocol');
  }
  public set debugProtocol(value: string) {
    this._debugProtocol = value;
  }
  public resetDebugProtocol() {
    this._debugProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugProtocolInput() {
    return this._debugProtocol;
  }
}
export interface VisibilityMonitorSecondaryMonitorDebugListStructA {
  /**
  * Specify source/dest ip addr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#debug_ip_addr VisibilityMonitorA#debug_ip_addr}
  */
  readonly debugIpAddr: string;
  /**
  * Specify port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#debug_port VisibilityMonitorA#debug_port}
  */
  readonly debugPort: number;
  /**
  * 'TCP': TCP; 'UDP': UDP; 'ICMP': ICMP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#debug_protocol VisibilityMonitorA#debug_protocol}
  */
  readonly debugProtocol: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#uuid VisibilityMonitorA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityMonitorSecondaryMonitorDebugListStructAToTerraform(struct?: VisibilityMonitorSecondaryMonitorDebugListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug_ip_addr: cdktf.stringToTerraform(struct!.debugIpAddr),
    debug_port: cdktf.numberToTerraform(struct!.debugPort),
    debug_protocol: cdktf.stringToTerraform(struct!.debugProtocol),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityMonitorSecondaryMonitorDebugListStructAToHclTerraform(struct?: VisibilityMonitorSecondaryMonitorDebugListStructA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug_ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.debugIpAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_port: {
      value: cdktf.numberToHclTerraform(struct!.debugPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    debug_protocol: {
      value: cdktf.stringToHclTerraform(struct!.debugProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityMonitorSecondaryMonitorDebugListStructAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VisibilityMonitorSecondaryMonitorDebugListStructA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debugIpAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugIpAddr = this._debugIpAddr;
    }
    if (this._debugPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugPort = this._debugPort;
    }
    if (this._debugProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugProtocol = this._debugProtocol;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityMonitorSecondaryMonitorDebugListStructA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._debugIpAddr = undefined;
      this._debugPort = undefined;
      this._debugProtocol = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._debugIpAddr = value.debugIpAddr;
      this._debugPort = value.debugPort;
      this._debugProtocol = value.debugProtocol;
      this._uuid = value.uuid;
    }
  }

  // debug_ip_addr - computed: false, optional: false, required: true
  private _debugIpAddr?: string; 
  public get debugIpAddr() {
    return this.getStringAttribute('debug_ip_addr');
  }
  public set debugIpAddr(value: string) {
    this._debugIpAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get debugIpAddrInput() {
    return this._debugIpAddr;
  }

  // debug_port - computed: false, optional: false, required: true
  private _debugPort?: number; 
  public get debugPort() {
    return this.getNumberAttribute('debug_port');
  }
  public set debugPort(value: number) {
    this._debugPort = value;
  }
  // Temporarily expose input value. Use with caution.
  public get debugPortInput() {
    return this._debugPort;
  }

  // debug_protocol - computed: false, optional: false, required: true
  private _debugProtocol?: string; 
  public get debugProtocol() {
    return this.getStringAttribute('debug_protocol');
  }
  public set debugProtocol(value: string) {
    this._debugProtocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get debugProtocolInput() {
    return this._debugProtocol;
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
}

export class VisibilityMonitorSecondaryMonitorDebugListStructAList extends cdktf.ComplexList {
  public internalValue? : VisibilityMonitorSecondaryMonitorDebugListStructA[] | cdktf.IResolvable

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
  public get(index: number): VisibilityMonitorSecondaryMonitorDebugListStructAOutputReference {
    return new VisibilityMonitorSecondaryMonitorDebugListStructAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisibilityMonitorSecondaryMonitorDeleteDebugFileA {
  /**
  * Specify source/dest ip addr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#debug_ip_addr VisibilityMonitorA#debug_ip_addr}
  */
  readonly debugIpAddr?: string;
  /**
  * Specify port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#debug_port VisibilityMonitorA#debug_port}
  */
  readonly debugPort?: number;
  /**
  * 'TCP': TCP; 'UDP': UDP; 'ICMP': ICMP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#debug_protocol VisibilityMonitorA#debug_protocol}
  */
  readonly debugProtocol?: string;
}

export function visibilityMonitorSecondaryMonitorDeleteDebugFileAToTerraform(struct?: VisibilityMonitorSecondaryMonitorDeleteDebugFileAOutputReference | VisibilityMonitorSecondaryMonitorDeleteDebugFileA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug_ip_addr: cdktf.stringToTerraform(struct!.debugIpAddr),
    debug_port: cdktf.numberToTerraform(struct!.debugPort),
    debug_protocol: cdktf.stringToTerraform(struct!.debugProtocol),
  }
}


export function visibilityMonitorSecondaryMonitorDeleteDebugFileAToHclTerraform(struct?: VisibilityMonitorSecondaryMonitorDeleteDebugFileAOutputReference | VisibilityMonitorSecondaryMonitorDeleteDebugFileA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug_ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.debugIpAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_port: {
      value: cdktf.numberToHclTerraform(struct!.debugPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    debug_protocol: {
      value: cdktf.stringToHclTerraform(struct!.debugProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityMonitorSecondaryMonitorDeleteDebugFileAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityMonitorSecondaryMonitorDeleteDebugFileA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debugIpAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugIpAddr = this._debugIpAddr;
    }
    if (this._debugPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugPort = this._debugPort;
    }
    if (this._debugProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugProtocol = this._debugProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityMonitorSecondaryMonitorDeleteDebugFileA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._debugIpAddr = undefined;
      this._debugPort = undefined;
      this._debugProtocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._debugIpAddr = value.debugIpAddr;
      this._debugPort = value.debugPort;
      this._debugProtocol = value.debugProtocol;
    }
  }

  // debug_ip_addr - computed: false, optional: true, required: false
  private _debugIpAddr?: string; 
  public get debugIpAddr() {
    return this.getStringAttribute('debug_ip_addr');
  }
  public set debugIpAddr(value: string) {
    this._debugIpAddr = value;
  }
  public resetDebugIpAddr() {
    this._debugIpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugIpAddrInput() {
    return this._debugIpAddr;
  }

  // debug_port - computed: false, optional: true, required: false
  private _debugPort?: number; 
  public get debugPort() {
    return this.getNumberAttribute('debug_port');
  }
  public set debugPort(value: number) {
    this._debugPort = value;
  }
  public resetDebugPort() {
    this._debugPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugPortInput() {
    return this._debugPort;
  }

  // debug_protocol - computed: false, optional: true, required: false
  private _debugProtocol?: string; 
  public get debugProtocol() {
    return this.getStringAttribute('debug_protocol');
  }
  public set debugProtocol(value: string) {
    this._debugProtocol = value;
  }
  public resetDebugProtocol() {
    this._debugProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugProtocolInput() {
    return this._debugProtocol;
  }
}
export interface VisibilityMonitorSecondaryMonitorReplayDebugFileA {
  /**
  * Specify source/dest ip addr
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#debug_ip_addr VisibilityMonitorA#debug_ip_addr}
  */
  readonly debugIpAddr?: string;
  /**
  * Specify port
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#debug_port VisibilityMonitorA#debug_port}
  */
  readonly debugPort?: number;
  /**
  * 'TCP': TCP; 'UDP': UDP; 'ICMP': ICMP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#debug_protocol VisibilityMonitorA#debug_protocol}
  */
  readonly debugProtocol?: string;
}

export function visibilityMonitorSecondaryMonitorReplayDebugFileAToTerraform(struct?: VisibilityMonitorSecondaryMonitorReplayDebugFileAOutputReference | VisibilityMonitorSecondaryMonitorReplayDebugFileA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    debug_ip_addr: cdktf.stringToTerraform(struct!.debugIpAddr),
    debug_port: cdktf.numberToTerraform(struct!.debugPort),
    debug_protocol: cdktf.stringToTerraform(struct!.debugProtocol),
  }
}


export function visibilityMonitorSecondaryMonitorReplayDebugFileAToHclTerraform(struct?: VisibilityMonitorSecondaryMonitorReplayDebugFileAOutputReference | VisibilityMonitorSecondaryMonitorReplayDebugFileA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    debug_ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.debugIpAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_port: {
      value: cdktf.numberToHclTerraform(struct!.debugPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    debug_protocol: {
      value: cdktf.stringToHclTerraform(struct!.debugProtocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityMonitorSecondaryMonitorReplayDebugFileAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityMonitorSecondaryMonitorReplayDebugFileA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._debugIpAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugIpAddr = this._debugIpAddr;
    }
    if (this._debugPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugPort = this._debugPort;
    }
    if (this._debugProtocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugProtocol = this._debugProtocol;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityMonitorSecondaryMonitorReplayDebugFileA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._debugIpAddr = undefined;
      this._debugPort = undefined;
      this._debugProtocol = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._debugIpAddr = value.debugIpAddr;
      this._debugPort = value.debugPort;
      this._debugProtocol = value.debugProtocol;
    }
  }

  // debug_ip_addr - computed: false, optional: true, required: false
  private _debugIpAddr?: string; 
  public get debugIpAddr() {
    return this.getStringAttribute('debug_ip_addr');
  }
  public set debugIpAddr(value: string) {
    this._debugIpAddr = value;
  }
  public resetDebugIpAddr() {
    this._debugIpAddr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugIpAddrInput() {
    return this._debugIpAddr;
  }

  // debug_port - computed: false, optional: true, required: false
  private _debugPort?: number; 
  public get debugPort() {
    return this.getNumberAttribute('debug_port');
  }
  public set debugPort(value: number) {
    this._debugPort = value;
  }
  public resetDebugPort() {
    this._debugPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugPortInput() {
    return this._debugPort;
  }

  // debug_protocol - computed: false, optional: true, required: false
  private _debugProtocol?: string; 
  public get debugProtocol() {
    return this.getStringAttribute('debug_protocol');
  }
  public set debugProtocol(value: string) {
    this._debugProtocol = value;
  }
  public resetDebugProtocol() {
    this._debugProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugProtocolInput() {
    return this._debugProtocol;
  }
}
export interface VisibilityMonitorSecondaryMonitorA {
  /**
  * Enable topk for secondary entities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#mon_entity_topk VisibilityMonitorA#mon_entity_topk}
  */
  readonly monEntityTopk?: number;
  /**
  * 'service': Monitor traffic to any service;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#secondary_monitoring_key VisibilityMonitorA#secondary_monitoring_key}
  */
  readonly secondaryMonitoringKey?: string;
  /**
  * Enable topk for sources to secondary-entities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#source_entity_topk VisibilityMonitorA#source_entity_topk}
  */
  readonly sourceEntityTopk?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#uuid VisibilityMonitorA#uuid}
  */
  readonly uuid?: string;
  /**
  * debug_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#debug_list VisibilityMonitorA#debug_list}
  */
  readonly debugList?: VisibilityMonitorSecondaryMonitorDebugListStructA[] | cdktf.IResolvable;
  /**
  * delete_debug_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#delete_debug_file VisibilityMonitorA#delete_debug_file}
  */
  readonly deleteDebugFile?: VisibilityMonitorSecondaryMonitorDeleteDebugFileA;
  /**
  * replay_debug_file block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#replay_debug_file VisibilityMonitorA#replay_debug_file}
  */
  readonly replayDebugFile?: VisibilityMonitorSecondaryMonitorReplayDebugFileA;
}

export function visibilityMonitorSecondaryMonitorAToTerraform(struct?: VisibilityMonitorSecondaryMonitorAOutputReference | VisibilityMonitorSecondaryMonitorA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mon_entity_topk: cdktf.numberToTerraform(struct!.monEntityTopk),
    secondary_monitoring_key: cdktf.stringToTerraform(struct!.secondaryMonitoringKey),
    source_entity_topk: cdktf.numberToTerraform(struct!.sourceEntityTopk),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    debug_list: cdktf.listMapper(visibilityMonitorSecondaryMonitorDebugListStructAToTerraform, true)(struct!.debugList),
    delete_debug_file: visibilityMonitorSecondaryMonitorDeleteDebugFileAToTerraform(struct!.deleteDebugFile),
    replay_debug_file: visibilityMonitorSecondaryMonitorReplayDebugFileAToTerraform(struct!.replayDebugFile),
  }
}


export function visibilityMonitorSecondaryMonitorAToHclTerraform(struct?: VisibilityMonitorSecondaryMonitorAOutputReference | VisibilityMonitorSecondaryMonitorA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mon_entity_topk: {
      value: cdktf.numberToHclTerraform(struct!.monEntityTopk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    secondary_monitoring_key: {
      value: cdktf.stringToHclTerraform(struct!.secondaryMonitoringKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_entity_topk: {
      value: cdktf.numberToHclTerraform(struct!.sourceEntityTopk),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug_list: {
      value: cdktf.listMapperHcl(visibilityMonitorSecondaryMonitorDebugListStructAToHclTerraform, true)(struct!.debugList),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityMonitorSecondaryMonitorDebugListStructAList",
    },
    delete_debug_file: {
      value: visibilityMonitorSecondaryMonitorDeleteDebugFileAToHclTerraform(struct!.deleteDebugFile),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityMonitorSecondaryMonitorDeleteDebugFileAList",
    },
    replay_debug_file: {
      value: visibilityMonitorSecondaryMonitorReplayDebugFileAToHclTerraform(struct!.replayDebugFile),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityMonitorSecondaryMonitorReplayDebugFileAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityMonitorSecondaryMonitorAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityMonitorSecondaryMonitorA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._monEntityTopk !== undefined) {
      hasAnyValues = true;
      internalValueResult.monEntityTopk = this._monEntityTopk;
    }
    if (this._secondaryMonitoringKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secondaryMonitoringKey = this._secondaryMonitoringKey;
    }
    if (this._sourceEntityTopk !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceEntityTopk = this._sourceEntityTopk;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._debugList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.debugList = this._debugList?.internalValue;
    }
    if (this._deleteDebugFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteDebugFile = this._deleteDebugFile?.internalValue;
    }
    if (this._replayDebugFile?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replayDebugFile = this._replayDebugFile?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityMonitorSecondaryMonitorA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._monEntityTopk = undefined;
      this._secondaryMonitoringKey = undefined;
      this._sourceEntityTopk = undefined;
      this._uuid = undefined;
      this._debugList.internalValue = undefined;
      this._deleteDebugFile.internalValue = undefined;
      this._replayDebugFile.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._monEntityTopk = value.monEntityTopk;
      this._secondaryMonitoringKey = value.secondaryMonitoringKey;
      this._sourceEntityTopk = value.sourceEntityTopk;
      this._uuid = value.uuid;
      this._debugList.internalValue = value.debugList;
      this._deleteDebugFile.internalValue = value.deleteDebugFile;
      this._replayDebugFile.internalValue = value.replayDebugFile;
    }
  }

  // mon_entity_topk - computed: false, optional: true, required: false
  private _monEntityTopk?: number; 
  public get monEntityTopk() {
    return this.getNumberAttribute('mon_entity_topk');
  }
  public set monEntityTopk(value: number) {
    this._monEntityTopk = value;
  }
  public resetMonEntityTopk() {
    this._monEntityTopk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monEntityTopkInput() {
    return this._monEntityTopk;
  }

  // secondary_monitoring_key - computed: false, optional: true, required: false
  private _secondaryMonitoringKey?: string; 
  public get secondaryMonitoringKey() {
    return this.getStringAttribute('secondary_monitoring_key');
  }
  public set secondaryMonitoringKey(value: string) {
    this._secondaryMonitoringKey = value;
  }
  public resetSecondaryMonitoringKey() {
    this._secondaryMonitoringKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryMonitoringKeyInput() {
    return this._secondaryMonitoringKey;
  }

  // source_entity_topk - computed: false, optional: true, required: false
  private _sourceEntityTopk?: number; 
  public get sourceEntityTopk() {
    return this.getNumberAttribute('source_entity_topk');
  }
  public set sourceEntityTopk(value: number) {
    this._sourceEntityTopk = value;
  }
  public resetSourceEntityTopk() {
    this._sourceEntityTopk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEntityTopkInput() {
    return this._sourceEntityTopk;
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

  // debug_list - computed: false, optional: true, required: false
  private _debugList = new VisibilityMonitorSecondaryMonitorDebugListStructAList(this, "debug_list", false);
  public get debugList() {
    return this._debugList;
  }
  public putDebugList(value: VisibilityMonitorSecondaryMonitorDebugListStructA[] | cdktf.IResolvable) {
    this._debugList.internalValue = value;
  }
  public resetDebugList() {
    this._debugList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugListInput() {
    return this._debugList.internalValue;
  }

  // delete_debug_file - computed: false, optional: true, required: false
  private _deleteDebugFile = new VisibilityMonitorSecondaryMonitorDeleteDebugFileAOutputReference(this, "delete_debug_file");
  public get deleteDebugFile() {
    return this._deleteDebugFile;
  }
  public putDeleteDebugFile(value: VisibilityMonitorSecondaryMonitorDeleteDebugFileA) {
    this._deleteDebugFile.internalValue = value;
  }
  public resetDeleteDebugFile() {
    this._deleteDebugFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteDebugFileInput() {
    return this._deleteDebugFile.internalValue;
  }

  // replay_debug_file - computed: false, optional: true, required: false
  private _replayDebugFile = new VisibilityMonitorSecondaryMonitorReplayDebugFileAOutputReference(this, "replay_debug_file");
  public get replayDebugFile() {
    return this._replayDebugFile;
  }
  public putReplayDebugFile(value: VisibilityMonitorSecondaryMonitorReplayDebugFileA) {
    this._replayDebugFile.internalValue = value;
  }
  public resetReplayDebugFile() {
    this._replayDebugFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replayDebugFileInput() {
    return this._replayDebugFile.internalValue;
  }
}
export interface VisibilityMonitorSflowA {
  /**
  * sFlow port to receive packets (sFlow port number(default 6343))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#listening_port VisibilityMonitorA#listening_port}
  */
  readonly listeningPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#uuid VisibilityMonitorA#uuid}
  */
  readonly uuid?: string;
}

export function visibilityMonitorSflowAToTerraform(struct?: VisibilityMonitorSflowAOutputReference | VisibilityMonitorSflowA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listening_port: cdktf.numberToTerraform(struct!.listeningPort),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function visibilityMonitorSflowAToHclTerraform(struct?: VisibilityMonitorSflowAOutputReference | VisibilityMonitorSflowA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    listening_port: {
      value: cdktf.numberToHclTerraform(struct!.listeningPort),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityMonitorSflowAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityMonitorSflowA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._listeningPort !== undefined) {
      hasAnyValues = true;
      internalValueResult.listeningPort = this._listeningPort;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityMonitorSflowA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._listeningPort = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._listeningPort = value.listeningPort;
      this._uuid = value.uuid;
    }
  }

  // listening_port - computed: false, optional: true, required: false
  private _listeningPort?: number; 
  public get listeningPort() {
    return this.getNumberAttribute('listening_port');
  }
  public set listeningPort(value: number) {
    this._listeningPort = value;
  }
  public resetListeningPort() {
    this._listeningPort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listeningPortInput() {
    return this._listeningPort;
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
}
export interface VisibilityMonitorTemplateNotificationA {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#notif_template_name VisibilityMonitorA#notif_template_name}
  */
  readonly notifTemplateName?: string;
}

export function visibilityMonitorTemplateNotificationAToTerraform(struct?: VisibilityMonitorTemplateNotificationA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notif_template_name: cdktf.stringToTerraform(struct!.notifTemplateName),
  }
}


export function visibilityMonitorTemplateNotificationAToHclTerraform(struct?: VisibilityMonitorTemplateNotificationA | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notif_template_name: {
      value: cdktf.stringToHclTerraform(struct!.notifTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityMonitorTemplateNotificationAOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): VisibilityMonitorTemplateNotificationA | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notifTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifTemplateName = this._notifTemplateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityMonitorTemplateNotificationA | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notifTemplateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notifTemplateName = value.notifTemplateName;
    }
  }

  // notif_template_name - computed: false, optional: true, required: false
  private _notifTemplateName?: string; 
  public get notifTemplateName() {
    return this.getStringAttribute('notif_template_name');
  }
  public set notifTemplateName(value: string) {
    this._notifTemplateName = value;
  }
  public resetNotifTemplateName() {
    this._notifTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifTemplateNameInput() {
    return this._notifTemplateName;
  }
}

export class VisibilityMonitorTemplateNotificationAList extends cdktf.ComplexList {
  public internalValue? : VisibilityMonitorTemplateNotificationA[] | cdktf.IResolvable

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
  public get(index: number): VisibilityMonitorTemplateNotificationAOutputReference {
    return new VisibilityMonitorTemplateNotificationAOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface VisibilityMonitorTemplateA {
  /**
  * notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#notification VisibilityMonitorA#notification}
  */
  readonly notification?: VisibilityMonitorTemplateNotificationA[] | cdktf.IResolvable;
}

export function visibilityMonitorTemplateAToTerraform(struct?: VisibilityMonitorTemplateAOutputReference | VisibilityMonitorTemplateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notification: cdktf.listMapper(visibilityMonitorTemplateNotificationAToTerraform, true)(struct!.notification),
  }
}


export function visibilityMonitorTemplateAToHclTerraform(struct?: VisibilityMonitorTemplateAOutputReference | VisibilityMonitorTemplateA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notification: {
      value: cdktf.listMapperHcl(visibilityMonitorTemplateNotificationAToHclTerraform, true)(struct!.notification),
      isBlock: true,
      type: "list",
      storageClassType: "VisibilityMonitorTemplateNotificationAList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class VisibilityMonitorTemplateAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): VisibilityMonitorTemplateA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notification = this._notification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: VisibilityMonitorTemplateA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notification.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notification.internalValue = value.notification;
    }
  }

  // notification - computed: false, optional: true, required: false
  private _notification = new VisibilityMonitorTemplateNotificationAList(this, "notification", false);
  public get notification() {
    return this._notification;
  }
  public putNotification(value: VisibilityMonitorTemplateNotificationA[] | cdktf.IResolvable) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor thunder_visibility_monitor}
*/
export class VisibilityMonitorA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_monitor";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VisibilityMonitorA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VisibilityMonitorA to import
  * @param importFromId The id of the existing VisibilityMonitorA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VisibilityMonitorA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_monitor", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/visibility_monitor thunder_visibility_monitor} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VisibilityMonitorAConfig
  */
  public constructor(scope: Construct, id: string, config: VisibilityMonitorAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_monitor',
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
    this._id = config.id;
    this._indexSessions = config.indexSessions;
    this._indexSessionsType = config.indexSessionsType;
    this._monEntityTopk = config.monEntityTopk;
    this._monitorKey = config.monitorKey;
    this._primaryMonitor = config.primaryMonitor;
    this._sourceEntityTopk = config.sourceEntityTopk;
    this._uuid = config.uuid;
    this._agentList.internalValue = config.agentList;
    this._debugList.internalValue = config.debugList;
    this._deleteDebugFile.internalValue = config.deleteDebugFile;
    this._netflow.internalValue = config.netflow;
    this._replayDebugFile.internalValue = config.replayDebugFile;
    this._secondaryMonitor.internalValue = config.secondaryMonitor;
    this._sflow.internalValue = config.sflow;
    this._template.internalValue = config.template;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // index_sessions - computed: false, optional: true, required: false
  private _indexSessions?: number; 
  public get indexSessions() {
    return this.getNumberAttribute('index_sessions');
  }
  public set indexSessions(value: number) {
    this._indexSessions = value;
  }
  public resetIndexSessions() {
    this._indexSessions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexSessionsInput() {
    return this._indexSessions;
  }

  // index_sessions_type - computed: false, optional: true, required: false
  private _indexSessionsType?: string; 
  public get indexSessionsType() {
    return this.getStringAttribute('index_sessions_type');
  }
  public set indexSessionsType(value: string) {
    this._indexSessionsType = value;
  }
  public resetIndexSessionsType() {
    this._indexSessionsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indexSessionsTypeInput() {
    return this._indexSessionsType;
  }

  // mon_entity_topk - computed: false, optional: true, required: false
  private _monEntityTopk?: number; 
  public get monEntityTopk() {
    return this.getNumberAttribute('mon_entity_topk');
  }
  public set monEntityTopk(value: number) {
    this._monEntityTopk = value;
  }
  public resetMonEntityTopk() {
    this._monEntityTopk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monEntityTopkInput() {
    return this._monEntityTopk;
  }

  // monitor_key - computed: false, optional: true, required: false
  private _monitorKey?: string; 
  public get monitorKey() {
    return this.getStringAttribute('monitor_key');
  }
  public set monitorKey(value: string) {
    this._monitorKey = value;
  }
  public resetMonitorKey() {
    this._monitorKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorKeyInput() {
    return this._monitorKey;
  }

  // primary_monitor - computed: false, optional: false, required: true
  private _primaryMonitor?: string; 
  public get primaryMonitor() {
    return this.getStringAttribute('primary_monitor');
  }
  public set primaryMonitor(value: string) {
    this._primaryMonitor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryMonitorInput() {
    return this._primaryMonitor;
  }

  // source_entity_topk - computed: false, optional: true, required: false
  private _sourceEntityTopk?: number; 
  public get sourceEntityTopk() {
    return this.getNumberAttribute('source_entity_topk');
  }
  public set sourceEntityTopk(value: number) {
    this._sourceEntityTopk = value;
  }
  public resetSourceEntityTopk() {
    this._sourceEntityTopk = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceEntityTopkInput() {
    return this._sourceEntityTopk;
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

  // agent_list - computed: false, optional: true, required: false
  private _agentList = new VisibilityMonitorAgentListStructAList(this, "agent_list", false);
  public get agentList() {
    return this._agentList;
  }
  public putAgentList(value: VisibilityMonitorAgentListStructA[] | cdktf.IResolvable) {
    this._agentList.internalValue = value;
  }
  public resetAgentList() {
    this._agentList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentListInput() {
    return this._agentList.internalValue;
  }

  // debug_list - computed: false, optional: true, required: false
  private _debugList = new VisibilityMonitorDebugListStructAList(this, "debug_list", false);
  public get debugList() {
    return this._debugList;
  }
  public putDebugList(value: VisibilityMonitorDebugListStructA[] | cdktf.IResolvable) {
    this._debugList.internalValue = value;
  }
  public resetDebugList() {
    this._debugList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugListInput() {
    return this._debugList.internalValue;
  }

  // delete_debug_file - computed: false, optional: true, required: false
  private _deleteDebugFile = new VisibilityMonitorDeleteDebugFileAOutputReference(this, "delete_debug_file");
  public get deleteDebugFile() {
    return this._deleteDebugFile;
  }
  public putDeleteDebugFile(value: VisibilityMonitorDeleteDebugFileA) {
    this._deleteDebugFile.internalValue = value;
  }
  public resetDeleteDebugFile() {
    this._deleteDebugFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteDebugFileInput() {
    return this._deleteDebugFile.internalValue;
  }

  // netflow - computed: false, optional: true, required: false
  private _netflow = new VisibilityMonitorNetflowAOutputReference(this, "netflow");
  public get netflow() {
    return this._netflow;
  }
  public putNetflow(value: VisibilityMonitorNetflowA) {
    this._netflow.internalValue = value;
  }
  public resetNetflow() {
    this._netflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowInput() {
    return this._netflow.internalValue;
  }

  // replay_debug_file - computed: false, optional: true, required: false
  private _replayDebugFile = new VisibilityMonitorReplayDebugFileAOutputReference(this, "replay_debug_file");
  public get replayDebugFile() {
    return this._replayDebugFile;
  }
  public putReplayDebugFile(value: VisibilityMonitorReplayDebugFileA) {
    this._replayDebugFile.internalValue = value;
  }
  public resetReplayDebugFile() {
    this._replayDebugFile.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replayDebugFileInput() {
    return this._replayDebugFile.internalValue;
  }

  // secondary_monitor - computed: false, optional: true, required: false
  private _secondaryMonitor = new VisibilityMonitorSecondaryMonitorAOutputReference(this, "secondary_monitor");
  public get secondaryMonitor() {
    return this._secondaryMonitor;
  }
  public putSecondaryMonitor(value: VisibilityMonitorSecondaryMonitorA) {
    this._secondaryMonitor.internalValue = value;
  }
  public resetSecondaryMonitor() {
    this._secondaryMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondaryMonitorInput() {
    return this._secondaryMonitor.internalValue;
  }

  // sflow - computed: false, optional: true, required: false
  private _sflow = new VisibilityMonitorSflowAOutputReference(this, "sflow");
  public get sflow() {
    return this._sflow;
  }
  public putSflow(value: VisibilityMonitorSflowA) {
    this._sflow.internalValue = value;
  }
  public resetSflow() {
    this._sflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowInput() {
    return this._sflow.internalValue;
  }

  // template - computed: false, optional: true, required: false
  private _template = new VisibilityMonitorTemplateAOutputReference(this, "template");
  public get template() {
    return this._template;
  }
  public putTemplate(value: VisibilityMonitorTemplateA) {
    this._template.internalValue = value;
  }
  public resetTemplate() {
    this._template.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateInput() {
    return this._template.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      index_sessions: cdktf.numberToTerraform(this._indexSessions),
      index_sessions_type: cdktf.stringToTerraform(this._indexSessionsType),
      mon_entity_topk: cdktf.numberToTerraform(this._monEntityTopk),
      monitor_key: cdktf.stringToTerraform(this._monitorKey),
      primary_monitor: cdktf.stringToTerraform(this._primaryMonitor),
      source_entity_topk: cdktf.numberToTerraform(this._sourceEntityTopk),
      uuid: cdktf.stringToTerraform(this._uuid),
      agent_list: cdktf.listMapper(visibilityMonitorAgentListStructAToTerraform, true)(this._agentList.internalValue),
      debug_list: cdktf.listMapper(visibilityMonitorDebugListStructAToTerraform, true)(this._debugList.internalValue),
      delete_debug_file: visibilityMonitorDeleteDebugFileAToTerraform(this._deleteDebugFile.internalValue),
      netflow: visibilityMonitorNetflowAToTerraform(this._netflow.internalValue),
      replay_debug_file: visibilityMonitorReplayDebugFileAToTerraform(this._replayDebugFile.internalValue),
      secondary_monitor: visibilityMonitorSecondaryMonitorAToTerraform(this._secondaryMonitor.internalValue),
      sflow: visibilityMonitorSflowAToTerraform(this._sflow.internalValue),
      template: visibilityMonitorTemplateAToTerraform(this._template.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      index_sessions: {
        value: cdktf.numberToHclTerraform(this._indexSessions),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      index_sessions_type: {
        value: cdktf.stringToHclTerraform(this._indexSessionsType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      mon_entity_topk: {
        value: cdktf.numberToHclTerraform(this._monEntityTopk),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      monitor_key: {
        value: cdktf.stringToHclTerraform(this._monitorKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_monitor: {
        value: cdktf.stringToHclTerraform(this._primaryMonitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_entity_topk: {
        value: cdktf.numberToHclTerraform(this._sourceEntityTopk),
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
      agent_list: {
        value: cdktf.listMapperHcl(visibilityMonitorAgentListStructAToHclTerraform, true)(this._agentList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityMonitorAgentListStructAList",
      },
      debug_list: {
        value: cdktf.listMapperHcl(visibilityMonitorDebugListStructAToHclTerraform, true)(this._debugList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityMonitorDebugListStructAList",
      },
      delete_debug_file: {
        value: visibilityMonitorDeleteDebugFileAToHclTerraform(this._deleteDebugFile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityMonitorDeleteDebugFileAList",
      },
      netflow: {
        value: visibilityMonitorNetflowAToHclTerraform(this._netflow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityMonitorNetflowAList",
      },
      replay_debug_file: {
        value: visibilityMonitorReplayDebugFileAToHclTerraform(this._replayDebugFile.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityMonitorReplayDebugFileAList",
      },
      secondary_monitor: {
        value: visibilityMonitorSecondaryMonitorAToHclTerraform(this._secondaryMonitor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityMonitorSecondaryMonitorAList",
      },
      sflow: {
        value: visibilityMonitorSflowAToHclTerraform(this._sflow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityMonitorSflowAList",
      },
      template: {
        value: visibilityMonitorTemplateAToHclTerraform(this._template.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "VisibilityMonitorTemplateAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
