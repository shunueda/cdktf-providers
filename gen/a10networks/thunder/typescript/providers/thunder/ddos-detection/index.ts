// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosDetectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Disable DDoS detection (default: enabled)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#disable DdosDetection#disable}
  */
  readonly disable?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#id DdosDetection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#uuid DdosDetection#uuid}
  */
  readonly uuid?: string;
  /**
  * agent_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#agent_list DdosDetection#agent_list}
  */
  readonly agentList?: DdosDetectionAgentListStruct[] | cdktf.IResolvable;
  /**
  * ddos_script block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#ddos_script DdosDetection#ddos_script}
  */
  readonly ddosScript?: DdosDetectionDdosScript;
  /**
  * resource_usage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#resource_usage DdosDetection#resource_usage}
  */
  readonly resourceUsage?: DdosDetectionResourceUsage;
  /**
  * settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#settings DdosDetection#settings}
  */
  readonly settings?: DdosDetectionSettings;
  /**
  * statistics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#statistics DdosDetection#statistics}
  */
  readonly statistics?: DdosDetectionStatistics;
}
export interface DdosDetectionAgentListNetflow {
  /**
  * Configure agent's flow active timeout (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#active_timeout DdosDetection#active_timeout}
  */
  readonly activeTimeout?: number;
  /**
  * Configure agent's flow inactive timeout (seconds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#inactive_timeout DdosDetection#inactive_timeout}
  */
  readonly inactiveTimeout?: number;
  /**
  * 'enable': Enable Netflow flow samples collection(default); 'disable': Disable Netflow flow samples collection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#netflow_samples_collection DdosDetection#netflow_samples_collection}
  */
  readonly netflowSamplesCollection?: string;
  /**
  * Configure agent's netflow sampling rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#netflow_sampling_rate DdosDetection#netflow_sampling_rate}
  */
  readonly netflowSamplingRate?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#uuid DdosDetection#uuid}
  */
  readonly uuid?: string;
}

export function ddosDetectionAgentListNetflowToTerraform(struct?: DdosDetectionAgentListNetflowOutputReference | DdosDetectionAgentListNetflow): any {
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


export function ddosDetectionAgentListNetflowToHclTerraform(struct?: DdosDetectionAgentListNetflowOutputReference | DdosDetectionAgentListNetflow): any {
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

export class DdosDetectionAgentListNetflowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDetectionAgentListNetflow | undefined {
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

  public set internalValue(value: DdosDetectionAgentListNetflow | undefined) {
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
export interface DdosDetectionAgentListSamplingEnable {
  /**
  * 'all': all; 'sflow-packets-received': sFlow Packets Received; 'sflow-samples-received': sFlow Samples Received; 'sflow-samples-bad-len': sFlow Samples Bad Length; 'sflow-samples-non-std': sFlow Samples Non-standard; 'sflow-samples-skipped': sFlow Samples Skipped; 'sflow-sample-record-bad-len': sFlow Sample Records Bad Length; 'sflow-samples-sent-for-detection': sFlow Samples Processed For Detection; 'sflow-sample-record-invalid-layer2': sFlow Sample Records Unknown Layer-2; 'sflow-sample-ipv6-hdr-parse-fail': sFlow Sample IPv6 Record Header Parse Failures; 'sflow-disabled': sFlow Packet Samples Processing Disabled; 'netflow-disabled': Netflow Flow Samples Processing Disabled; 'netflow-v5-packets-received': Netflow v5 Packets Received; 'netflow-v5-samples-received': Netflow v5 Samples Received; 'netflow-v5-samples-sent-for-detection': Netflow v5 Samples Processed For Detection; 'netflow-v5-sample-records-bad-len': Netflow v5 Sample Records Bad Length; 'netflow-v5-max-records-exceed': Netflow v5 Sample Max Records Error; 'netflow-v9-packets-received': Netflow v9 Packets Received; 'netflow-v9-samples-received': Netflow v9 Samples Received; 'netflow-v9-samples-sent-for-detection': Netflow v9 Samples Processed For Detection; 'netflow-v9-sample-records-bad-len': Netflow v9 Sample Records Bad Length; 'netflow-v9-sample-flowset-bad-padding': Netflow v9 Sample Flowset Bad Padding; 'netflow-v9-max-records-exceed': Netflow v9 Sample Max Records Error; 'netflow-v9-template-not-found': Netflow v9 Template Not Found; 'netflow-v10-packets-received': Netflow v10 Packets Received; 'netflow-v10-samples-received': Netflow v10 Samples Received; 'netflow-v10-samples-sent-for-detection': Netflow v10 Samples Procssed For Detection; 'netflow-v10-sample-records-bad-len': Netflow v10 Sample Records Bad Length; 'netflow-v10-max-records-exceed': Netflow v10 Sample Max records Error; 'netflow-tcp-sample-received': Netflow TCP Samples Received; 'netflow-udp-sample-received': Netflow UDP Samples received; 'netflow-icmp-sample-received': Netflow ICMP Samples Received; 'netflow-other-sample-received': Netflow OTHER Samples Received; 'netflow-record-copy-oom-error': Netflow Data Record Copy Fail, Local MEM size error; 'netflow-record-rse-invalid': Netflow Data Record Reduced Size Invalid; 'netflow-sample-flow-dur-error': Netflow Sample Flow Duration Error; 'flow-dst-entry-miss': DDoS Destination Entry Lookup Failures; 'flow-ip-proto-or-port-miss': DDoS Destination Service Lookup Failures; 'flow-detection-msgq-full': Detection Message Enqueue Failures; 'flow-network-entry-miss': DDoS Destination Network-object Entry Lookup Failures;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#counters1 DdosDetection#counters1}
  */
  readonly counters1?: string;
}

export function ddosDetectionAgentListSamplingEnableToTerraform(struct?: DdosDetectionAgentListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ddosDetectionAgentListSamplingEnableToHclTerraform(struct?: DdosDetectionAgentListSamplingEnable | cdktf.IResolvable): any {
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

export class DdosDetectionAgentListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDetectionAgentListSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosDetectionAgentListSamplingEnable | cdktf.IResolvable | undefined) {
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

export class DdosDetectionAgentListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosDetectionAgentListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosDetectionAgentListSamplingEnableOutputReference {
    return new DdosDetectionAgentListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDetectionAgentListSflow {
  /**
  * 'enable': Enable sflow packet samples collection(default); 'disable': Disable sflow packet samples collection;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#sflow_pkt_samples_collection DdosDetection#sflow_pkt_samples_collection}
  */
  readonly sflowPktSamplesCollection?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#uuid DdosDetection#uuid}
  */
  readonly uuid?: string;
}

export function ddosDetectionAgentListSflowToTerraform(struct?: DdosDetectionAgentListSflowOutputReference | DdosDetectionAgentListSflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sflow_pkt_samples_collection: cdktf.stringToTerraform(struct!.sflowPktSamplesCollection),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDetectionAgentListSflowToHclTerraform(struct?: DdosDetectionAgentListSflowOutputReference | DdosDetectionAgentListSflow): any {
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

export class DdosDetectionAgentListSflowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDetectionAgentListSflow | undefined {
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

  public set internalValue(value: DdosDetectionAgentListSflow | undefined) {
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
export interface DdosDetectionAgentListStruct {
  /**
  * Specify name for the agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#agent_name DdosDetection#agent_name}
  */
  readonly agentName: string;
  /**
  * 'Cisco': Cisco; 'Juniper': Juniper;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#agent_type DdosDetection#agent_type}
  */
  readonly agentType?: string;
  /**
  * Configure agent's IPv4 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#agent_v4_addr DdosDetection#agent_v4_addr}
  */
  readonly agentV4Addr?: string;
  /**
  * Configure agent's IPv6 address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#agent_v6_addr DdosDetection#agent_v6_addr}
  */
  readonly agentV6Addr?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#user_tag DdosDetection#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#uuid DdosDetection#uuid}
  */
  readonly uuid?: string;
  /**
  * netflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#netflow DdosDetection#netflow}
  */
  readonly netflow?: DdosDetectionAgentListNetflow;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#sampling_enable DdosDetection#sampling_enable}
  */
  readonly samplingEnable?: DdosDetectionAgentListSamplingEnable[] | cdktf.IResolvable;
  /**
  * sflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#sflow DdosDetection#sflow}
  */
  readonly sflow?: DdosDetectionAgentListSflow;
}

export function ddosDetectionAgentListStructToTerraform(struct?: DdosDetectionAgentListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    agent_name: cdktf.stringToTerraform(struct!.agentName),
    agent_type: cdktf.stringToTerraform(struct!.agentType),
    agent_v4_addr: cdktf.stringToTerraform(struct!.agentV4Addr),
    agent_v6_addr: cdktf.stringToTerraform(struct!.agentV6Addr),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    netflow: ddosDetectionAgentListNetflowToTerraform(struct!.netflow),
    sampling_enable: cdktf.listMapper(ddosDetectionAgentListSamplingEnableToTerraform, true)(struct!.samplingEnable),
    sflow: ddosDetectionAgentListSflowToTerraform(struct!.sflow),
  }
}


export function ddosDetectionAgentListStructToHclTerraform(struct?: DdosDetectionAgentListStruct | cdktf.IResolvable): any {
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
    agent_type: {
      value: cdktf.stringToHclTerraform(struct!.agentType),
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
    netflow: {
      value: ddosDetectionAgentListNetflowToHclTerraform(struct!.netflow),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDetectionAgentListNetflowList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(ddosDetectionAgentListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDetectionAgentListSamplingEnableList",
    },
    sflow: {
      value: ddosDetectionAgentListSflowToHclTerraform(struct!.sflow),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDetectionAgentListSflowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDetectionAgentListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosDetectionAgentListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._agentName !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentName = this._agentName;
    }
    if (this._agentType !== undefined) {
      hasAnyValues = true;
      internalValueResult.agentType = this._agentType;
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
    if (this._netflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflow = this._netflow?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    if (this._sflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflow = this._sflow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDetectionAgentListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._agentName = undefined;
      this._agentType = undefined;
      this._agentV4Addr = undefined;
      this._agentV6Addr = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._netflow.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
      this._sflow.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._agentName = value.agentName;
      this._agentType = value.agentType;
      this._agentV4Addr = value.agentV4Addr;
      this._agentV6Addr = value.agentV6Addr;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._netflow.internalValue = value.netflow;
      this._samplingEnable.internalValue = value.samplingEnable;
      this._sflow.internalValue = value.sflow;
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
  private _netflow = new DdosDetectionAgentListNetflowOutputReference(this, "netflow");
  public get netflow() {
    return this._netflow;
  }
  public putNetflow(value: DdosDetectionAgentListNetflow) {
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
  private _samplingEnable = new DdosDetectionAgentListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosDetectionAgentListSamplingEnable[] | cdktf.IResolvable) {
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
  private _sflow = new DdosDetectionAgentListSflowOutputReference(this, "sflow");
  public get sflow() {
    return this._sflow;
  }
  public putSflow(value: DdosDetectionAgentListSflow) {
    this._sflow.internalValue = value;
  }
  public resetSflow() {
    this._sflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowInput() {
    return this._sflow.internalValue;
  }
}

export class DdosDetectionAgentListStructList extends cdktf.ComplexList {
  public internalValue? : DdosDetectionAgentListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosDetectionAgentListStructOutputReference {
    return new DdosDetectionAgentListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosDetectionDdosScript {
  /**
  * 'delete': delete;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#action DdosDetection#action}
  */
  readonly action?: string;
  /**
  * startup-config local file name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#file DdosDetection#file}
  */
  readonly file?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#uuid DdosDetection#uuid}
  */
  readonly uuid?: string;
}

export function ddosDetectionDdosScriptToTerraform(struct?: DdosDetectionDdosScriptOutputReference | DdosDetectionDdosScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    file: cdktf.stringToTerraform(struct!.file),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDetectionDdosScriptToHclTerraform(struct?: DdosDetectionDdosScriptOutputReference | DdosDetectionDdosScript): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    file: {
      value: cdktf.stringToHclTerraform(struct!.file),
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

export class DdosDetectionDdosScriptOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDetectionDdosScript | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._file !== undefined) {
      hasAnyValues = true;
      internalValueResult.file = this._file;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDetectionDdosScript | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._file = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._file = value.file;
      this._uuid = value.uuid;
    }
  }

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

  // file - computed: false, optional: true, required: false
  private _file?: string; 
  public get file() {
    return this.getStringAttribute('file');
  }
  public set file(value: string) {
    this._file = value;
  }
  public resetFile() {
    this._file = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileInput() {
    return this._file;
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
export interface DdosDetectionResourceUsage {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#uuid DdosDetection#uuid}
  */
  readonly uuid?: string;
}

export function ddosDetectionResourceUsageToTerraform(struct?: DdosDetectionResourceUsageOutputReference | DdosDetectionResourceUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDetectionResourceUsageToHclTerraform(struct?: DdosDetectionResourceUsageOutputReference | DdosDetectionResourceUsage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DdosDetectionResourceUsageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDetectionResourceUsage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDetectionResourceUsage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
export interface DdosDetectionSettingsEntrySaving {
  /**
  * Configure periodical auto-saving interval in minutes(default: 0) and 0 to disable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#interval DdosDetection#interval}
  */
  readonly interval?: number;
  /**
  * Manually restore network-object-based detection entries and learned indicators
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#manual_restore DdosDetection#manual_restore}
  */
  readonly manualRestore?: number;
  /**
  * Manually save network-object-based detection entries and learned indicators
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#manual_save DdosDetection#manual_save}
  */
  readonly manualSave?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#uuid DdosDetection#uuid}
  */
  readonly uuid?: string;
}

export function ddosDetectionSettingsEntrySavingToTerraform(struct?: DdosDetectionSettingsEntrySavingOutputReference | DdosDetectionSettingsEntrySaving): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    interval: cdktf.numberToTerraform(struct!.interval),
    manual_restore: cdktf.numberToTerraform(struct!.manualRestore),
    manual_save: cdktf.numberToTerraform(struct!.manualSave),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDetectionSettingsEntrySavingToHclTerraform(struct?: DdosDetectionSettingsEntrySavingOutputReference | DdosDetectionSettingsEntrySaving): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    interval: {
      value: cdktf.numberToHclTerraform(struct!.interval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    manual_restore: {
      value: cdktf.numberToHclTerraform(struct!.manualRestore),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    manual_save: {
      value: cdktf.numberToHclTerraform(struct!.manualSave),
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

export class DdosDetectionSettingsEntrySavingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDetectionSettingsEntrySaving | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._interval !== undefined) {
      hasAnyValues = true;
      internalValueResult.interval = this._interval;
    }
    if (this._manualRestore !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualRestore = this._manualRestore;
    }
    if (this._manualSave !== undefined) {
      hasAnyValues = true;
      internalValueResult.manualSave = this._manualSave;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDetectionSettingsEntrySaving | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._interval = undefined;
      this._manualRestore = undefined;
      this._manualSave = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._interval = value.interval;
      this._manualRestore = value.manualRestore;
      this._manualSave = value.manualSave;
      this._uuid = value.uuid;
    }
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

  // manual_restore - computed: false, optional: true, required: false
  private _manualRestore?: number; 
  public get manualRestore() {
    return this.getNumberAttribute('manual_restore');
  }
  public set manualRestore(value: number) {
    this._manualRestore = value;
  }
  public resetManualRestore() {
    this._manualRestore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualRestoreInput() {
    return this._manualRestore;
  }

  // manual_save - computed: false, optional: true, required: false
  private _manualSave?: number; 
  public get manualSave() {
    return this.getNumberAttribute('manual_save');
  }
  public set manualSave(value: number) {
    this._manualSave = value;
  }
  public resetManualSave() {
    this._manualSave = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manualSaveInput() {
    return this._manualSave;
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
export interface DdosDetectionSettingsPktSampling {
  /**
  * Lower index is more aggressive sampling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#assign_index DdosDetection#assign_index}
  */
  readonly assignIndex?: number;
  /**
  * Assign rate to given index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#assign_rate DdosDetection#assign_rate}
  */
  readonly assignRate?: number;
  /**
  * Sample 1 in X packets (default: X=1)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#override_rate DdosDetection#override_rate}
  */
  readonly overrideRate?: number;
}

export function ddosDetectionSettingsPktSamplingToTerraform(struct?: DdosDetectionSettingsPktSamplingOutputReference | DdosDetectionSettingsPktSampling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    assign_index: cdktf.numberToTerraform(struct!.assignIndex),
    assign_rate: cdktf.numberToTerraform(struct!.assignRate),
    override_rate: cdktf.numberToTerraform(struct!.overrideRate),
  }
}


export function ddosDetectionSettingsPktSamplingToHclTerraform(struct?: DdosDetectionSettingsPktSamplingOutputReference | DdosDetectionSettingsPktSampling): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    assign_index: {
      value: cdktf.numberToHclTerraform(struct!.assignIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    assign_rate: {
      value: cdktf.numberToHclTerraform(struct!.assignRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    override_rate: {
      value: cdktf.numberToHclTerraform(struct!.overrideRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDetectionSettingsPktSamplingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDetectionSettingsPktSampling | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._assignIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignIndex = this._assignIndex;
    }
    if (this._assignRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.assignRate = this._assignRate;
    }
    if (this._overrideRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideRate = this._overrideRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDetectionSettingsPktSampling | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._assignIndex = undefined;
      this._assignRate = undefined;
      this._overrideRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._assignIndex = value.assignIndex;
      this._assignRate = value.assignRate;
      this._overrideRate = value.overrideRate;
    }
  }

  // assign_index - computed: false, optional: true, required: false
  private _assignIndex?: number; 
  public get assignIndex() {
    return this.getNumberAttribute('assign_index');
  }
  public set assignIndex(value: number) {
    this._assignIndex = value;
  }
  public resetAssignIndex() {
    this._assignIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignIndexInput() {
    return this._assignIndex;
  }

  // assign_rate - computed: false, optional: true, required: false
  private _assignRate?: number; 
  public get assignRate() {
    return this.getNumberAttribute('assign_rate');
  }
  public set assignRate(value: number) {
    this._assignRate = value;
  }
  public resetAssignRate() {
    this._assignRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get assignRateInput() {
    return this._assignRate;
  }

  // override_rate - computed: false, optional: true, required: false
  private _overrideRate?: number; 
  public get overrideRate() {
    return this.getNumberAttribute('override_rate');
  }
  public set overrideRate(value: number) {
    this._overrideRate = value;
  }
  public resetOverrideRate() {
    this._overrideRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideRateInput() {
    return this._overrideRate;
  }
}
export interface DdosDetectionSettingsStandaloneSettingsNetflow {
  /**
  * Netflow port to receive packets (Netflow port number(default 9996))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#listening_port DdosDetection#listening_port}
  */
  readonly listeningPort?: number;
  /**
  * Configure active timeout of the netflow templates received in mins (Template active timeout(mins)(default 30mins))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#template_active_timeout DdosDetection#template_active_timeout}
  */
  readonly templateActiveTimeout?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#uuid DdosDetection#uuid}
  */
  readonly uuid?: string;
}

export function ddosDetectionSettingsStandaloneSettingsNetflowToTerraform(struct?: DdosDetectionSettingsStandaloneSettingsNetflowOutputReference | DdosDetectionSettingsStandaloneSettingsNetflow): any {
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


export function ddosDetectionSettingsStandaloneSettingsNetflowToHclTerraform(struct?: DdosDetectionSettingsStandaloneSettingsNetflowOutputReference | DdosDetectionSettingsStandaloneSettingsNetflow): any {
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

export class DdosDetectionSettingsStandaloneSettingsNetflowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDetectionSettingsStandaloneSettingsNetflow | undefined {
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

  public set internalValue(value: DdosDetectionSettingsStandaloneSettingsNetflow | undefined) {
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
export interface DdosDetectionSettingsStandaloneSettingsSflow {
  /**
  * sFlow port to receive packets (sFlow port number(default 6343))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#listening_port DdosDetection#listening_port}
  */
  readonly listeningPort?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#uuid DdosDetection#uuid}
  */
  readonly uuid?: string;
}

export function ddosDetectionSettingsStandaloneSettingsSflowToTerraform(struct?: DdosDetectionSettingsStandaloneSettingsSflowOutputReference | DdosDetectionSettingsStandaloneSettingsSflow): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    listening_port: cdktf.numberToTerraform(struct!.listeningPort),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDetectionSettingsStandaloneSettingsSflowToHclTerraform(struct?: DdosDetectionSettingsStandaloneSettingsSflowOutputReference | DdosDetectionSettingsStandaloneSettingsSflow): any {
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

export class DdosDetectionSettingsStandaloneSettingsSflowOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDetectionSettingsStandaloneSettingsSflow | undefined {
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

  public set internalValue(value: DdosDetectionSettingsStandaloneSettingsSflow | undefined) {
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
export interface DdosDetectionSettingsStandaloneSettings {
  /**
  * 'enable': Enable standalone detector; 'disable': Disable standalone detector (default);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#action DdosDetection#action}
  */
  readonly action?: string;
  /**
  * Configure de-escalation needed time in minutes from level 1 to 0.(legacy)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#de_escalation_quiet_time DdosDetection#de_escalation_quiet_time}
  */
  readonly deEscalationQuietTime?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#uuid DdosDetection#uuid}
  */
  readonly uuid?: string;
  /**
  * netflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#netflow DdosDetection#netflow}
  */
  readonly netflow?: DdosDetectionSettingsStandaloneSettingsNetflow;
  /**
  * sflow block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#sflow DdosDetection#sflow}
  */
  readonly sflow?: DdosDetectionSettingsStandaloneSettingsSflow;
}

export function ddosDetectionSettingsStandaloneSettingsToTerraform(struct?: DdosDetectionSettingsStandaloneSettingsOutputReference | DdosDetectionSettingsStandaloneSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    de_escalation_quiet_time: cdktf.numberToTerraform(struct!.deEscalationQuietTime),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    netflow: ddosDetectionSettingsStandaloneSettingsNetflowToTerraform(struct!.netflow),
    sflow: ddosDetectionSettingsStandaloneSettingsSflowToTerraform(struct!.sflow),
  }
}


export function ddosDetectionSettingsStandaloneSettingsToHclTerraform(struct?: DdosDetectionSettingsStandaloneSettingsOutputReference | DdosDetectionSettingsStandaloneSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    de_escalation_quiet_time: {
      value: cdktf.numberToHclTerraform(struct!.deEscalationQuietTime),
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
    netflow: {
      value: ddosDetectionSettingsStandaloneSettingsNetflowToHclTerraform(struct!.netflow),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDetectionSettingsStandaloneSettingsNetflowList",
    },
    sflow: {
      value: ddosDetectionSettingsStandaloneSettingsSflowToHclTerraform(struct!.sflow),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDetectionSettingsStandaloneSettingsSflowList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDetectionSettingsStandaloneSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDetectionSettingsStandaloneSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._deEscalationQuietTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.deEscalationQuietTime = this._deEscalationQuietTime;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._netflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.netflow = this._netflow?.internalValue;
    }
    if (this._sflow?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sflow = this._sflow?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDetectionSettingsStandaloneSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._action = undefined;
      this._deEscalationQuietTime = undefined;
      this._uuid = undefined;
      this._netflow.internalValue = undefined;
      this._sflow.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._action = value.action;
      this._deEscalationQuietTime = value.deEscalationQuietTime;
      this._uuid = value.uuid;
      this._netflow.internalValue = value.netflow;
      this._sflow.internalValue = value.sflow;
    }
  }

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

  // de_escalation_quiet_time - computed: false, optional: true, required: false
  private _deEscalationQuietTime?: number; 
  public get deEscalationQuietTime() {
    return this.getNumberAttribute('de_escalation_quiet_time');
  }
  public set deEscalationQuietTime(value: number) {
    this._deEscalationQuietTime = value;
  }
  public resetDeEscalationQuietTime() {
    this._deEscalationQuietTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deEscalationQuietTimeInput() {
    return this._deEscalationQuietTime;
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
  private _netflow = new DdosDetectionSettingsStandaloneSettingsNetflowOutputReference(this, "netflow");
  public get netflow() {
    return this._netflow;
  }
  public putNetflow(value: DdosDetectionSettingsStandaloneSettingsNetflow) {
    this._netflow.internalValue = value;
  }
  public resetNetflow() {
    this._netflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get netflowInput() {
    return this._netflow.internalValue;
  }

  // sflow - computed: false, optional: true, required: false
  private _sflow = new DdosDetectionSettingsStandaloneSettingsSflowOutputReference(this, "sflow");
  public get sflow() {
    return this._sflow;
  }
  public putSflow(value: DdosDetectionSettingsStandaloneSettingsSflow) {
    this._sflow.internalValue = value;
  }
  public resetSflow() {
    this._sflow.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sflowInput() {
    return this._sflow.internalValue;
  }
}
export interface DdosDetectionSettings {
  /**
  * Control cpu usage threshold for DDoS detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#ctrl_cpu_usage DdosDetection#ctrl_cpu_usage}
  */
  readonly ctrlCpuUsage?: number;
  /**
  * Configure de-escalation needed time in minutes from level 1 to 0.(default 1 minutes)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#de_escalation_quiet_time DdosDetection#de_escalation_quiet_time}
  */
  readonly deEscalationQuietTime?: number;
  /**
  * Configure the number of dedicated cores for detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#dedicated_cpus DdosDetection#dedicated_cpus}
  */
  readonly dedicatedCpus?: number;
  /**
  * Configure detection window size in seconds (DDoS detection window size in seconds(default: 1))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#detection_window_size DdosDetection#detection_window_size}
  */
  readonly detectionWindowSize?: number;
  /**
  * 'standalone': Standalone detector; 'on-box': Mitigator and Detector on the same box; 'auto-svc-discovery': Auto Service discovery using Visibility module (Deprecatd);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#detector_mode DdosDetection#detector_mode}
  */
  readonly detectorMode?: string;
  /**
  * Configure Baselining and export interval in seconds (DDoS Baselining and export interval in seconds(default: 20))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#export_interval DdosDetection#export_interval}
  */
  readonly exportInterval?: number;
  /**
  * Enable full core
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#full_core_enable DdosDetection#full_core_enable}
  */
  readonly fullCoreEnable?: number;
  /**
  * histogram de-escalate sensitivity for DDoS detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#histogram_de_escalate_percentage DdosDetection#histogram_de_escalate_percentage}
  */
  readonly histogramDeEscalatePercentage?: number;
  /**
  * histogram escalate sensitivity for DDoS detection
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#histogram_escalate_percentage DdosDetection#histogram_escalate_percentage}
  */
  readonly histogramEscalatePercentage?: number;
  /**
  * Initial learning interval (in hours) before processing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#initial_learning_interval DdosDetection#initial_learning_interval}
  */
  readonly initialLearningInterval?: number;
  /**
  * multiplier for flooding detection threshold in network objects (default 2x threshold)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#network_object_flooding_multiple DdosDetection#network_object_flooding_multiple}
  */
  readonly networkObjectFloodingMultiple?: number;
  /**
  * '5': 5 seconds; '10': 10 seconds; '15': 15 seconds; '30': 30 seconds;  (DDoS detection window size in seconds(default: 30))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#network_object_window_size DdosDetection#network_object_window_size}
  */
  readonly networkObjectWindowSize?: string;
  /**
  * 'enable': Enable detection notification debug log (default: disabled);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#notification_debug_log DdosDetection#notification_debug_log}
  */
  readonly notificationDebugLog?: string;
  /**
  * Configure top-k reset interval
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#top_k_reset_interval DdosDetection#top_k_reset_interval}
  */
  readonly topKResetInterval?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#uuid DdosDetection#uuid}
  */
  readonly uuid?: string;
  /**
  * entry_saving block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#entry_saving DdosDetection#entry_saving}
  */
  readonly entrySaving?: DdosDetectionSettingsEntrySaving;
  /**
  * pkt_sampling block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#pkt_sampling DdosDetection#pkt_sampling}
  */
  readonly pktSampling?: DdosDetectionSettingsPktSampling;
  /**
  * standalone_settings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#standalone_settings DdosDetection#standalone_settings}
  */
  readonly standaloneSettings?: DdosDetectionSettingsStandaloneSettings;
}

export function ddosDetectionSettingsToTerraform(struct?: DdosDetectionSettingsOutputReference | DdosDetectionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ctrl_cpu_usage: cdktf.numberToTerraform(struct!.ctrlCpuUsage),
    de_escalation_quiet_time: cdktf.numberToTerraform(struct!.deEscalationQuietTime),
    dedicated_cpus: cdktf.numberToTerraform(struct!.dedicatedCpus),
    detection_window_size: cdktf.numberToTerraform(struct!.detectionWindowSize),
    detector_mode: cdktf.stringToTerraform(struct!.detectorMode),
    export_interval: cdktf.numberToTerraform(struct!.exportInterval),
    full_core_enable: cdktf.numberToTerraform(struct!.fullCoreEnable),
    histogram_de_escalate_percentage: cdktf.numberToTerraform(struct!.histogramDeEscalatePercentage),
    histogram_escalate_percentage: cdktf.numberToTerraform(struct!.histogramEscalatePercentage),
    initial_learning_interval: cdktf.numberToTerraform(struct!.initialLearningInterval),
    network_object_flooding_multiple: cdktf.numberToTerraform(struct!.networkObjectFloodingMultiple),
    network_object_window_size: cdktf.stringToTerraform(struct!.networkObjectWindowSize),
    notification_debug_log: cdktf.stringToTerraform(struct!.notificationDebugLog),
    top_k_reset_interval: cdktf.numberToTerraform(struct!.topKResetInterval),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    entry_saving: ddosDetectionSettingsEntrySavingToTerraform(struct!.entrySaving),
    pkt_sampling: ddosDetectionSettingsPktSamplingToTerraform(struct!.pktSampling),
    standalone_settings: ddosDetectionSettingsStandaloneSettingsToTerraform(struct!.standaloneSettings),
  }
}


export function ddosDetectionSettingsToHclTerraform(struct?: DdosDetectionSettingsOutputReference | DdosDetectionSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ctrl_cpu_usage: {
      value: cdktf.numberToHclTerraform(struct!.ctrlCpuUsage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    de_escalation_quiet_time: {
      value: cdktf.numberToHclTerraform(struct!.deEscalationQuietTime),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dedicated_cpus: {
      value: cdktf.numberToHclTerraform(struct!.dedicatedCpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    detection_window_size: {
      value: cdktf.numberToHclTerraform(struct!.detectionWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    detector_mode: {
      value: cdktf.stringToHclTerraform(struct!.detectorMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    export_interval: {
      value: cdktf.numberToHclTerraform(struct!.exportInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    full_core_enable: {
      value: cdktf.numberToHclTerraform(struct!.fullCoreEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    histogram_de_escalate_percentage: {
      value: cdktf.numberToHclTerraform(struct!.histogramDeEscalatePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    histogram_escalate_percentage: {
      value: cdktf.numberToHclTerraform(struct!.histogramEscalatePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    initial_learning_interval: {
      value: cdktf.numberToHclTerraform(struct!.initialLearningInterval),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_object_flooding_multiple: {
      value: cdktf.numberToHclTerraform(struct!.networkObjectFloodingMultiple),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_object_window_size: {
      value: cdktf.stringToHclTerraform(struct!.networkObjectWindowSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notification_debug_log: {
      value: cdktf.stringToHclTerraform(struct!.notificationDebugLog),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    top_k_reset_interval: {
      value: cdktf.numberToHclTerraform(struct!.topKResetInterval),
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
    entry_saving: {
      value: ddosDetectionSettingsEntrySavingToHclTerraform(struct!.entrySaving),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDetectionSettingsEntrySavingList",
    },
    pkt_sampling: {
      value: ddosDetectionSettingsPktSamplingToHclTerraform(struct!.pktSampling),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDetectionSettingsPktSamplingList",
    },
    standalone_settings: {
      value: ddosDetectionSettingsStandaloneSettingsToHclTerraform(struct!.standaloneSettings),
      isBlock: true,
      type: "list",
      storageClassType: "DdosDetectionSettingsStandaloneSettingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosDetectionSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDetectionSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ctrlCpuUsage !== undefined) {
      hasAnyValues = true;
      internalValueResult.ctrlCpuUsage = this._ctrlCpuUsage;
    }
    if (this._deEscalationQuietTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.deEscalationQuietTime = this._deEscalationQuietTime;
    }
    if (this._dedicatedCpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedCpus = this._dedicatedCpus;
    }
    if (this._detectionWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectionWindowSize = this._detectionWindowSize;
    }
    if (this._detectorMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.detectorMode = this._detectorMode;
    }
    if (this._exportInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.exportInterval = this._exportInterval;
    }
    if (this._fullCoreEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullCoreEnable = this._fullCoreEnable;
    }
    if (this._histogramDeEscalatePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.histogramDeEscalatePercentage = this._histogramDeEscalatePercentage;
    }
    if (this._histogramEscalatePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.histogramEscalatePercentage = this._histogramEscalatePercentage;
    }
    if (this._initialLearningInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.initialLearningInterval = this._initialLearningInterval;
    }
    if (this._networkObjectFloodingMultiple !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkObjectFloodingMultiple = this._networkObjectFloodingMultiple;
    }
    if (this._networkObjectWindowSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkObjectWindowSize = this._networkObjectWindowSize;
    }
    if (this._notificationDebugLog !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationDebugLog = this._notificationDebugLog;
    }
    if (this._topKResetInterval !== undefined) {
      hasAnyValues = true;
      internalValueResult.topKResetInterval = this._topKResetInterval;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._entrySaving?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrySaving = this._entrySaving?.internalValue;
    }
    if (this._pktSampling?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.pktSampling = this._pktSampling?.internalValue;
    }
    if (this._standaloneSettings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.standaloneSettings = this._standaloneSettings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDetectionSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ctrlCpuUsage = undefined;
      this._deEscalationQuietTime = undefined;
      this._dedicatedCpus = undefined;
      this._detectionWindowSize = undefined;
      this._detectorMode = undefined;
      this._exportInterval = undefined;
      this._fullCoreEnable = undefined;
      this._histogramDeEscalatePercentage = undefined;
      this._histogramEscalatePercentage = undefined;
      this._initialLearningInterval = undefined;
      this._networkObjectFloodingMultiple = undefined;
      this._networkObjectWindowSize = undefined;
      this._notificationDebugLog = undefined;
      this._topKResetInterval = undefined;
      this._uuid = undefined;
      this._entrySaving.internalValue = undefined;
      this._pktSampling.internalValue = undefined;
      this._standaloneSettings.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ctrlCpuUsage = value.ctrlCpuUsage;
      this._deEscalationQuietTime = value.deEscalationQuietTime;
      this._dedicatedCpus = value.dedicatedCpus;
      this._detectionWindowSize = value.detectionWindowSize;
      this._detectorMode = value.detectorMode;
      this._exportInterval = value.exportInterval;
      this._fullCoreEnable = value.fullCoreEnable;
      this._histogramDeEscalatePercentage = value.histogramDeEscalatePercentage;
      this._histogramEscalatePercentage = value.histogramEscalatePercentage;
      this._initialLearningInterval = value.initialLearningInterval;
      this._networkObjectFloodingMultiple = value.networkObjectFloodingMultiple;
      this._networkObjectWindowSize = value.networkObjectWindowSize;
      this._notificationDebugLog = value.notificationDebugLog;
      this._topKResetInterval = value.topKResetInterval;
      this._uuid = value.uuid;
      this._entrySaving.internalValue = value.entrySaving;
      this._pktSampling.internalValue = value.pktSampling;
      this._standaloneSettings.internalValue = value.standaloneSettings;
    }
  }

  // ctrl_cpu_usage - computed: false, optional: true, required: false
  private _ctrlCpuUsage?: number; 
  public get ctrlCpuUsage() {
    return this.getNumberAttribute('ctrl_cpu_usage');
  }
  public set ctrlCpuUsage(value: number) {
    this._ctrlCpuUsage = value;
  }
  public resetCtrlCpuUsage() {
    this._ctrlCpuUsage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ctrlCpuUsageInput() {
    return this._ctrlCpuUsage;
  }

  // de_escalation_quiet_time - computed: false, optional: true, required: false
  private _deEscalationQuietTime?: number; 
  public get deEscalationQuietTime() {
    return this.getNumberAttribute('de_escalation_quiet_time');
  }
  public set deEscalationQuietTime(value: number) {
    this._deEscalationQuietTime = value;
  }
  public resetDeEscalationQuietTime() {
    this._deEscalationQuietTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deEscalationQuietTimeInput() {
    return this._deEscalationQuietTime;
  }

  // dedicated_cpus - computed: false, optional: true, required: false
  private _dedicatedCpus?: number; 
  public get dedicatedCpus() {
    return this.getNumberAttribute('dedicated_cpus');
  }
  public set dedicatedCpus(value: number) {
    this._dedicatedCpus = value;
  }
  public resetDedicatedCpus() {
    this._dedicatedCpus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedCpusInput() {
    return this._dedicatedCpus;
  }

  // detection_window_size - computed: false, optional: true, required: false
  private _detectionWindowSize?: number; 
  public get detectionWindowSize() {
    return this.getNumberAttribute('detection_window_size');
  }
  public set detectionWindowSize(value: number) {
    this._detectionWindowSize = value;
  }
  public resetDetectionWindowSize() {
    this._detectionWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectionWindowSizeInput() {
    return this._detectionWindowSize;
  }

  // detector_mode - computed: false, optional: true, required: false
  private _detectorMode?: string; 
  public get detectorMode() {
    return this.getStringAttribute('detector_mode');
  }
  public set detectorMode(value: string) {
    this._detectorMode = value;
  }
  public resetDetectorMode() {
    this._detectorMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get detectorModeInput() {
    return this._detectorMode;
  }

  // export_interval - computed: false, optional: true, required: false
  private _exportInterval?: number; 
  public get exportInterval() {
    return this.getNumberAttribute('export_interval');
  }
  public set exportInterval(value: number) {
    this._exportInterval = value;
  }
  public resetExportInterval() {
    this._exportInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get exportIntervalInput() {
    return this._exportInterval;
  }

  // full_core_enable - computed: false, optional: true, required: false
  private _fullCoreEnable?: number; 
  public get fullCoreEnable() {
    return this.getNumberAttribute('full_core_enable');
  }
  public set fullCoreEnable(value: number) {
    this._fullCoreEnable = value;
  }
  public resetFullCoreEnable() {
    this._fullCoreEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullCoreEnableInput() {
    return this._fullCoreEnable;
  }

  // histogram_de_escalate_percentage - computed: false, optional: true, required: false
  private _histogramDeEscalatePercentage?: number; 
  public get histogramDeEscalatePercentage() {
    return this.getNumberAttribute('histogram_de_escalate_percentage');
  }
  public set histogramDeEscalatePercentage(value: number) {
    this._histogramDeEscalatePercentage = value;
  }
  public resetHistogramDeEscalatePercentage() {
    this._histogramDeEscalatePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get histogramDeEscalatePercentageInput() {
    return this._histogramDeEscalatePercentage;
  }

  // histogram_escalate_percentage - computed: false, optional: true, required: false
  private _histogramEscalatePercentage?: number; 
  public get histogramEscalatePercentage() {
    return this.getNumberAttribute('histogram_escalate_percentage');
  }
  public set histogramEscalatePercentage(value: number) {
    this._histogramEscalatePercentage = value;
  }
  public resetHistogramEscalatePercentage() {
    this._histogramEscalatePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get histogramEscalatePercentageInput() {
    return this._histogramEscalatePercentage;
  }

  // initial_learning_interval - computed: false, optional: true, required: false
  private _initialLearningInterval?: number; 
  public get initialLearningInterval() {
    return this.getNumberAttribute('initial_learning_interval');
  }
  public set initialLearningInterval(value: number) {
    this._initialLearningInterval = value;
  }
  public resetInitialLearningInterval() {
    this._initialLearningInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initialLearningIntervalInput() {
    return this._initialLearningInterval;
  }

  // network_object_flooding_multiple - computed: false, optional: true, required: false
  private _networkObjectFloodingMultiple?: number; 
  public get networkObjectFloodingMultiple() {
    return this.getNumberAttribute('network_object_flooding_multiple');
  }
  public set networkObjectFloodingMultiple(value: number) {
    this._networkObjectFloodingMultiple = value;
  }
  public resetNetworkObjectFloodingMultiple() {
    this._networkObjectFloodingMultiple = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkObjectFloodingMultipleInput() {
    return this._networkObjectFloodingMultiple;
  }

  // network_object_window_size - computed: false, optional: true, required: false
  private _networkObjectWindowSize?: string; 
  public get networkObjectWindowSize() {
    return this.getStringAttribute('network_object_window_size');
  }
  public set networkObjectWindowSize(value: string) {
    this._networkObjectWindowSize = value;
  }
  public resetNetworkObjectWindowSize() {
    this._networkObjectWindowSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkObjectWindowSizeInput() {
    return this._networkObjectWindowSize;
  }

  // notification_debug_log - computed: false, optional: true, required: false
  private _notificationDebugLog?: string; 
  public get notificationDebugLog() {
    return this.getStringAttribute('notification_debug_log');
  }
  public set notificationDebugLog(value: string) {
    this._notificationDebugLog = value;
  }
  public resetNotificationDebugLog() {
    this._notificationDebugLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationDebugLogInput() {
    return this._notificationDebugLog;
  }

  // top_k_reset_interval - computed: false, optional: true, required: false
  private _topKResetInterval?: number; 
  public get topKResetInterval() {
    return this.getNumberAttribute('top_k_reset_interval');
  }
  public set topKResetInterval(value: number) {
    this._topKResetInterval = value;
  }
  public resetTopKResetInterval() {
    this._topKResetInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topKResetIntervalInput() {
    return this._topKResetInterval;
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

  // entry_saving - computed: false, optional: true, required: false
  private _entrySaving = new DdosDetectionSettingsEntrySavingOutputReference(this, "entry_saving");
  public get entrySaving() {
    return this._entrySaving;
  }
  public putEntrySaving(value: DdosDetectionSettingsEntrySaving) {
    this._entrySaving.internalValue = value;
  }
  public resetEntrySaving() {
    this._entrySaving.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrySavingInput() {
    return this._entrySaving.internalValue;
  }

  // pkt_sampling - computed: false, optional: true, required: false
  private _pktSampling = new DdosDetectionSettingsPktSamplingOutputReference(this, "pkt_sampling");
  public get pktSampling() {
    return this._pktSampling;
  }
  public putPktSampling(value: DdosDetectionSettingsPktSampling) {
    this._pktSampling.internalValue = value;
  }
  public resetPktSampling() {
    this._pktSampling.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pktSamplingInput() {
    return this._pktSampling.internalValue;
  }

  // standalone_settings - computed: false, optional: true, required: false
  private _standaloneSettings = new DdosDetectionSettingsStandaloneSettingsOutputReference(this, "standalone_settings");
  public get standaloneSettings() {
    return this._standaloneSettings;
  }
  public putStandaloneSettings(value: DdosDetectionSettingsStandaloneSettings) {
    this._standaloneSettings.internalValue = value;
  }
  public resetStandaloneSettings() {
    this._standaloneSettings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get standaloneSettingsInput() {
    return this._standaloneSettings.internalValue;
  }
}
export interface DdosDetectionStatistics {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#uuid DdosDetection#uuid}
  */
  readonly uuid?: string;
}

export function ddosDetectionStatisticsToTerraform(struct?: DdosDetectionStatisticsOutputReference | DdosDetectionStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosDetectionStatisticsToHclTerraform(struct?: DdosDetectionStatisticsOutputReference | DdosDetectionStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DdosDetectionStatisticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosDetectionStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosDetectionStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
    }
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection thunder_ddos_detection}
*/
export class DdosDetection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_detection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosDetection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosDetection to import
  * @param importFromId The id of the existing DdosDetection that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosDetection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_detection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/ddos_detection thunder_ddos_detection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosDetectionConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DdosDetectionConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_detection',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._disable = config.disable;
    this._id = config.id;
    this._uuid = config.uuid;
    this._agentList.internalValue = config.agentList;
    this._ddosScript.internalValue = config.ddosScript;
    this._resourceUsage.internalValue = config.resourceUsage;
    this._settings.internalValue = config.settings;
    this._statistics.internalValue = config.statistics;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // disable - computed: false, optional: true, required: false
  private _disable?: number; 
  public get disable() {
    return this.getNumberAttribute('disable');
  }
  public set disable(value: number) {
    this._disable = value;
  }
  public resetDisable() {
    this._disable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableInput() {
    return this._disable;
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
  private _agentList = new DdosDetectionAgentListStructList(this, "agent_list", false);
  public get agentList() {
    return this._agentList;
  }
  public putAgentList(value: DdosDetectionAgentListStruct[] | cdktf.IResolvable) {
    this._agentList.internalValue = value;
  }
  public resetAgentList() {
    this._agentList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get agentListInput() {
    return this._agentList.internalValue;
  }

  // ddos_script - computed: false, optional: true, required: false
  private _ddosScript = new DdosDetectionDdosScriptOutputReference(this, "ddos_script");
  public get ddosScript() {
    return this._ddosScript;
  }
  public putDdosScript(value: DdosDetectionDdosScript) {
    this._ddosScript.internalValue = value;
  }
  public resetDdosScript() {
    this._ddosScript.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddosScriptInput() {
    return this._ddosScript.internalValue;
  }

  // resource_usage - computed: false, optional: true, required: false
  private _resourceUsage = new DdosDetectionResourceUsageOutputReference(this, "resource_usage");
  public get resourceUsage() {
    return this._resourceUsage;
  }
  public putResourceUsage(value: DdosDetectionResourceUsage) {
    this._resourceUsage.internalValue = value;
  }
  public resetResourceUsage() {
    this._resourceUsage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceUsageInput() {
    return this._resourceUsage.internalValue;
  }

  // settings - computed: false, optional: true, required: false
  private _settings = new DdosDetectionSettingsOutputReference(this, "settings");
  public get settings() {
    return this._settings;
  }
  public putSettings(value: DdosDetectionSettings) {
    this._settings.internalValue = value;
  }
  public resetSettings() {
    this._settings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings.internalValue;
  }

  // statistics - computed: false, optional: true, required: false
  private _statistics = new DdosDetectionStatisticsOutputReference(this, "statistics");
  public get statistics() {
    return this._statistics;
  }
  public putStatistics(value: DdosDetectionStatistics) {
    this._statistics.internalValue = value;
  }
  public resetStatistics() {
    this._statistics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      disable: cdktf.numberToTerraform(this._disable),
      id: cdktf.stringToTerraform(this._id),
      uuid: cdktf.stringToTerraform(this._uuid),
      agent_list: cdktf.listMapper(ddosDetectionAgentListStructToTerraform, true)(this._agentList.internalValue),
      ddos_script: ddosDetectionDdosScriptToTerraform(this._ddosScript.internalValue),
      resource_usage: ddosDetectionResourceUsageToTerraform(this._resourceUsage.internalValue),
      settings: ddosDetectionSettingsToTerraform(this._settings.internalValue),
      statistics: ddosDetectionStatisticsToTerraform(this._statistics.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      disable: {
        value: cdktf.numberToHclTerraform(this._disable),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      agent_list: {
        value: cdktf.listMapperHcl(ddosDetectionAgentListStructToHclTerraform, true)(this._agentList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDetectionAgentListStructList",
      },
      ddos_script: {
        value: ddosDetectionDdosScriptToHclTerraform(this._ddosScript.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDetectionDdosScriptList",
      },
      resource_usage: {
        value: ddosDetectionResourceUsageToHclTerraform(this._resourceUsage.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDetectionResourceUsageList",
      },
      settings: {
        value: ddosDetectionSettingsToHclTerraform(this._settings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDetectionSettingsList",
      },
      statistics: {
        value: ddosDetectionStatisticsToHclTerraform(this._statistics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosDetectionStatisticsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
