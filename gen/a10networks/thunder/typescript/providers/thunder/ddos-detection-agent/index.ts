// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDetectionAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify name for the agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent#agent_name DdosDetectionAgent#agent_name}
  */
  readonly agentName: string;
  /**
  * 'Cisco': Cisco; 'Juniper': Juniper;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent#agent_type DdosDetectionAgent#agent_type}
  */
  readonly agentType?: string;
  /**
  * Configure agent's IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent#agent_v4_addr DdosDetectionAgent#agent_v4_addr}
  */
  readonly agentV4Addr?: string;
  /**
  * Configure agent's IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent#agent_v6_addr DdosDetectionAgent#agent_v6_addr}
  */
  readonly agentV6Addr?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent#id DdosDetectionAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent#user_tag DdosDetectionAgent#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent#uuid DdosDetectionAgent#uuid}
  */
  readonly uuid?: string;
  /**
  * netflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent#netflow DdosDetectionAgent#netflow}
  */
  readonly netflow?: DdosDetectionAgentNetflow;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent#sampling_enable DdosDetectionAgent#sampling_enable}
  */
  readonly samplingEnable?: DdosDetectionAgentSamplingEnable[] | cdktf.IResolvable;
  /**
  * sflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent#sflow DdosDetectionAgent#sflow}
  */
  readonly sflow?: DdosDetectionAgentSflow;
}
export interface DdosDetectionAgentNetflow {
  /**
  * Configure agent's flow active timeout (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent#active_timeout DdosDetectionAgent#active_timeout}
  */
  readonly activeTimeout?: number;
  /**
  * Configure agent's flow inactive timeout (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent#inactive_timeout DdosDetectionAgent#inactive_timeout}
  */
  readonly inactiveTimeout?: number;
  /**
  * 'enable': Enable Netflow flow samples collection(default); 'disable': Disable Netflow flow samples collection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent#netflow_samples_collection DdosDetectionAgent#netflow_samples_collection}
  */
  readonly netflowSamplesCollection?: string;
  /**
  * Configure agent's netflow sampling rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent#netflow_sampling_rate DdosDetectionAgent#netflow_sampling_rate}
  */
  readonly netflowSamplingRate?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent#uuid DdosDetectionAgent#uuid}
  */
  readonly uuid?: string;
}

export function ddosDetectionAgentNetflowToTerraform(struct?: DdosDetectionAgentNetflowOutputReference | DdosDetectionAgentNetflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_timeout: cdktf.numberToTerraform(struct!.activeTimeout),
    inactive_timeout: cdktf.numberToTerraform(struct!.inactiveTimeout),
    netflow_samples_collection: cdktf.stringToTerraform(struct!.netflowSamplesCollection),
    netflow_sampling_rate: cdktf.numberToTerraform(struct!.netflowSamplingRate),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDetectionAgentNetflowToHclTerraform(struct?: DdosDetectionAgentNetflowOutputReference | DdosDetectionAgentNetflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_timeout: {
      value: cdktf.numberToHclTerraform(struct!.activeTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    inactive_timeout: {
      value: cdktf.numberToHclTerraform(struct!.inactiveTimeout),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    netflow_samples_collection: {
      value: cdktf.stringToHclTerraform(struct!.netflowSamplesCollection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    netflow_sampling_rate: {
      value: cdktf.numberToHclTerraform(struct!.netflowSamplingRate),
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

export class DdosDetectionAgentNetflowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDetectionAgentNetflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activeTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeTimeout = this._activeTimeout;
    }
    if (this._inactiveTimeout !== undefined) {
      hasAnyValues = true;
      internalValueResult.inactiveTimeout = this._inactiveTimeout;
    }
    if (this._netflowSamplesCollection !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowSamplesCollection = this._netflowSamplesCollection;
    }
    if (this._netflowSamplingRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflowSamplingRate = this._netflowSamplingRate;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDetectionAgentNetflow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activeTimeout = undefined;
      this._inactiveTimeout = undefined;
      this._netflowSamplesCollection = undefined;
      this._netflowSamplingRate = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activeTimeout = value.activeTimeout;
      this._inactiveTimeout = value.inactiveTimeout;
      this._netflowSamplesCollection = value.netflowSamplesCollection;
      this._netflowSamplingRate = value.netflowSamplingRate;
      this._uuid = value.uuid;
    }
  }

  // active_timeout - computed: false, optional: true, required: false
  private _activeTimeout?: number; 
  public get activeTimeout() {
    return this.getNumberAttribute('active_timeout');
  }
  public set activeTimeout(value: number) {
    this._activeTimeout = value;
  }
  public resetActiveTimeout() {
    this._activeTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeTimeoutInput() {
    return this._activeTimeout;
  }

  // inactive_timeout - computed: false, optional: true, required: false
  private _inactiveTimeout?: number; 
  public get inactiveTimeout() {
    return this.getNumberAttribute('inactive_timeout');
  }
  public set inactiveTimeout(value: number) {
    this._inactiveTimeout = value;
  }
  public resetInactiveTimeout() {
    this._inactiveTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inactiveTimeoutInput() {
    return this._inactiveTimeout;
  }

  // netflow_samples_collection - computed: false, optional: true, required: false
  private _netflowSamplesCollection?: string; 
  public get netflowSamplesCollection() {
    return this.getStringAttribute('netflow_samples_collection');
  }
  public set netflowSamplesCollection(value: string) {
    this._netflowSamplesCollection = value;
  }
  public resetNetflowSamplesCollection() {
    this._netflowSamplesCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowSamplesCollectionInput() {
    return this._netflowSamplesCollection;
  }

  // netflow_sampling_rate - computed: false, optional: true, required: false
  private _netflowSamplingRate?: number; 
  public get netflowSamplingRate() {
    return this.getNumberAttribute('netflow_sampling_rate');
  }
  public set netflowSamplingRate(value: number) {
    this._netflowSamplingRate = value;
  }
  public resetNetflowSamplingRate() {
    this._netflowSamplingRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowSamplingRateInput() {
    return this._netflowSamplingRate;
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
export interface DdosDetectionAgentSamplingEnable {
  /**
  * 'all': all; 'sflow-packets-received': sFlow Packets Received; 'sflow-samples-received': sFlow Samples Received; 'sflow-samples-bad-len': sFlow Samples Bad Length; 'sflow-samples-non-std': sFlow Samples Non-standard; 'sflow-samples-skipped': sFlow Samples Skipped; 'sflow-sample-record-bad-len': sFlow Sample Records Bad Length; 'sflow-samples-sent-for-detection': sFlow Samples Processed For Detection; 'sflow-sample-record-invalid-layer2': sFlow Sample Records Unknown Layer-2; 'sflow-sample-ipv6-hdr-parse-fail': sFlow Sample IPv6 Record Header Parse Failures; 'sflow-disabled': sFlow Packet Samples Processing Disabled; 'netflow-disabled': Netflow Flow Samples Processing Disabled; 'netflow-v5-packets-received': Netflow v5 Packets Received; 'netflow-v5-samples-received': Netflow v5 Samples Received; 'netflow-v5-samples-sent-for-detection': Netflow v5 Samples Processed For Detection; 'netflow-v5-sample-records-bad-len': Netflow v5 Sample Records Bad Length; 'netflow-v5-max-records-exceed': Netflow v5 Sample Max Records Error; 'netflow-v9-packets-received': Netflow v9 Packets Received; 'netflow-v9-samples-received': Netflow v9 Samples Received; 'netflow-v9-samples-sent-for-detection': Netflow v9 Samples Processed For Detection; 'netflow-v9-sample-records-bad-len': Netflow v9 Sample Records Bad Length; 'netflow-v9-sample-flowset-bad-padding': Netflow v9 Sample Flowset Bad Padding; 'netflow-v9-max-records-exceed': Netflow v9 Sample Max Records Error; 'netflow-v9-template-not-found': Netflow v9 Template Not Found; 'netflow-v10-packets-received': Netflow v10 Packets Received; 'netflow-v10-samples-received': Netflow v10 Samples Received; 'netflow-v10-samples-sent-for-detection': Netflow v10 Samples Procssed For Detection; 'netflow-v10-sample-records-bad-len': Netflow v10 Sample Records Bad Length; 'netflow-v10-max-records-exceed': Netflow v10 Sample Max records Error; 'netflow-tcp-sample-received': Netflow TCP Samples Received; 'netflow-udp-sample-received': Netflow UDP Samples received; 'netflow-icmp-sample-received': Netflow ICMP Samples Received; 'netflow-other-sample-received': Netflow OTHER Samples Received; 'netflow-record-copy-oom-error': Netflow Data Record Copy Fail, Local MEM size error; 'netflow-record-rse-invalid': Netflow Data Record Reduced Size Invalid; 'netflow-sample-flow-dur-error': Netflow Sample Flow Duration Error; 'flow-dst-entry-miss': DDoS Destination Entry Lookup Failures; 'flow-ip-proto-or-port-miss': DDoS Destination Service Lookup Failures; 'flow-detection-msgq-full': Detection Message Enqueue Failures; 'flow-network-entry-miss': DDoS Destination Network-object Entry Lookup Failures; 'xflow-extend-pkt-rcv': XFlow Sample Extend Packets Received; 'xflow-extend-byte-rcv': XFlow Sample Extend Bytes Received; 'xflow-dst-entry-miss-extend-pkt-rcv': Extend Packets Received of DDoS Destination Entry Miss; 'xflow-dst-entry-miss-extend-byte-rcv': Extend Bytes Received of DDoS Destination Entry Miss; 'xflow-dst-svc-miss-extend-pkt-rcv': Extend Packets Received of DDoS Destination Service Miss; 'xflow-dst-svc-miss-extend-byte-rcv': Extend Bytes Received of DDoS Destination Service Miss;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent#counters1 DdosDetectionAgent#counters1}
  */
  readonly counters1?: string;
}

export function ddosDetectionAgentSamplingEnableToTerraform(struct?: DdosDetectionAgentSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ddosDetectionAgentSamplingEnableToHclTerraform(struct?: DdosDetectionAgentSamplingEnable | cdktf.IResolvable): any {
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

export class DdosDetectionAgentSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDetectionAgentSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDetectionAgentSamplingEnable | cdktf.IResolvable | undefined) {
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

export class DdosDetectionAgentSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosDetectionAgentSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosDetectionAgentSamplingEnableOutputReference {
    return new DdosDetectionAgentSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDetectionAgentSflow {
  /**
  * 'enable': Enable sflow packet samples collection(default); 'disable': Disable sflow packet samples collection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent#sflow_pkt_samples_collection DdosDetectionAgent#sflow_pkt_samples_collection}
  */
  readonly sflowPktSamplesCollection?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent#uuid DdosDetectionAgent#uuid}
  */
  readonly uuid?: string;
}

export function ddosDetectionAgentSflowToTerraform(struct?: DdosDetectionAgentSflowOutputReference | DdosDetectionAgentSflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sflow_pkt_samples_collection: cdktf.stringToTerraform(struct!.sflowPktSamplesCollection),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDetectionAgentSflowToHclTerraform(struct?: DdosDetectionAgentSflowOutputReference | DdosDetectionAgentSflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sflow_pkt_samples_collection: {
      value: cdktf.stringToHclTerraform(struct!.sflowPktSamplesCollection),
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

export class DdosDetectionAgentSflowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDetectionAgentSflow | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sflowPktSamplesCollection !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflowPktSamplesCollection = this._sflowPktSamplesCollection;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDetectionAgentSflow | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sflowPktSamplesCollection = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sflowPktSamplesCollection = value.sflowPktSamplesCollection;
      this._uuid = value.uuid;
    }
  }

  // sflow_pkt_samples_collection - computed: false, optional: true, required: false
  private _sflowPktSamplesCollection?: string; 
  public get sflowPktSamplesCollection() {
    return this.getStringAttribute('sflow_pkt_samples_collection');
  }
  public set sflowPktSamplesCollection(value: string) {
    this._sflowPktSamplesCollection = value;
  }
  public resetSflowPktSamplesCollection() {
    this._sflowPktSamplesCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowPktSamplesCollectionInput() {
    return this._sflowPktSamplesCollection;
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent thunder_ddos_detection_agent}
*/
export class DdosDetectionAgent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_detection_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDetectionAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDetectionAgent to import
  * @param importFromId The id of the existing DdosDetectionAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDetectionAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_detection_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_detection_agent thunder_ddos_detection_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDetectionAgentConfig
  */
  public constructor(scope: Construct, id: string, config: DdosDetectionAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_detection_agent',
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
    this._agentName = config.agentName;
    this._agentType = config.agentType;
    this._agentV4Addr = config.agentV4Addr;
    this._agentV6Addr = config.agentV6Addr;
    this._id = config.id;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._netflow.internalValue = config.netflow;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._sflow.internalValue = config.sflow;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // agent_type - computed: false, optional: true, required: false
  private _agentType?: string; 
  public get agentType() {
    return this.getStringAttribute('agent_type');
  }
  public set agentType(value: string) {
    this._agentType = value;
  }
  public resetAgentType() {
    this._agentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentTypeInput() {
    return this._agentType;
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

  // netflow - computed: false, optional: true, required: false
  private _netflow = new DdosDetectionAgentNetflowOutputReference(this, "netflow");
  public get netflow() {
    return this._netflow;
  }
  public putNetflow(value: DdosDetectionAgentNetflow) {
    this._netflow.internalValue = value;
  }
  public resetNetflow() {
    this._netflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowInput() {
    return this._netflow.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new DdosDetectionAgentSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosDetectionAgentSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // sflow - computed: false, optional: true, required: false
  private _sflow = new DdosDetectionAgentSflowOutputReference(this, "sflow");
  public get sflow() {
    return this._sflow;
  }
  public putSflow(value: DdosDetectionAgentSflow) {
    this._sflow.internalValue = value;
  }
  public resetSflow() {
    this._sflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowInput() {
    return this._sflow.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      agent_name: cdktf.stringToTerraform(this._agentName),
      agent_type: cdktf.stringToTerraform(this._agentType),
      agent_v4_addr: cdktf.stringToTerraform(this._agentV4Addr),
      agent_v6_addr: cdktf.stringToTerraform(this._agentV6Addr),
      id: cdktf.stringToTerraform(this._id),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      netflow: ddosDetectionAgentNetflowToTerraform(this._netflow.internalValue),
      sampling_enable: cdktf.listMapper(ddosDetectionAgentSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      sflow: ddosDetectionAgentSflowToTerraform(this._sflow.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      agent_name: {
        value: cdktf.stringToHclTerraform(this._agentName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_type: {
        value: cdktf.stringToHclTerraform(this._agentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_v4_addr: {
        value: cdktf.stringToHclTerraform(this._agentV4Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_v6_addr: {
        value: cdktf.stringToHclTerraform(this._agentV6Addr),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      netflow: {
        value: ddosDetectionAgentNetflowToHclTerraform(this._netflow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDetectionAgentNetflowList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(ddosDetectionAgentSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDetectionAgentSamplingEnableList",
      },
      sflow: {
        value: ddosDetectionAgentSflowToHclTerraform(this._sflow.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDetectionAgentSflowList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
