// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosNetworkObjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'all': Use both learned and static thresholds (static thresholds take precedence); 'static-threshold-only': Use static thresholds only;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#anomaly_detection_trigger DdosNetworkObject#anomaly_detection_trigger}
  */
  readonly anomalyDetectionTrigger?: string;
  /**
  * multiplier for flooding detection threshold in network objects (default 2x threshold)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#flooding_multiplier DdosNetworkObject#flooding_multiplier}
  */
  readonly floodingMultiplier?: number;
  /**
  * 'off': histogram feature disabled; 'monitor': histogram feature enabled with anomaly escalation; 'observe': histogram feature enabled and observe only;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#histogram_mode DdosNetworkObject#histogram_mode}
  */
  readonly histogramMode?: string;
  /**
  * 'enable': Enable source port discovery.; 'disable': Disable source port discovery.;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#host_sport_discovery DdosNetworkObject#host_sport_discovery}
  */
  readonly hostSportDiscovery?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#id DdosNetworkObject#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The template applied for the network-object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#network_object_template DdosNetworkObject#network_object_template}
  */
  readonly networkObjectTemplate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#object_name DdosNetworkObject#object_name}
  */
  readonly objectName: string;
  /**
  * 'monitor': Monitor mode; 'learning': Learning mode;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#operational_mode DdosNetworkObject#operational_mode}
  */
  readonly operationalMode?: string;
  /**
  * 'disable': Disable service discovery for hosts (default: enabled);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#service_discovery DdosNetworkObject#service_discovery}
  */
  readonly serviceDiscovery?: string;
  /**
  * 'disable': Disable source port anomaly detection (default: enabled);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#sport_anomaly_detection DdosNetworkObject#sport_anomaly_detection}
  */
  readonly sportAnomalyDetection?: string;
  /**
  * tune threshold ranges with levels LOW/MEDIUM/HIGH/OFF(default) or multiplier of threshold value (available options are LOW=5x/MEDIUM=3x/HIGH=1.5x/OFF=1x, or float value between 1.0-10.0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#threshold_sensitivity DdosNetworkObject#threshold_sensitivity}
  */
  readonly thresholdSensitivity?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#user_tag DdosNetworkObject#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#uuid DdosNetworkObject#uuid}
  */
  readonly uuid?: string;
  /**
  * enable_top_k block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#enable_top_k DdosNetworkObject#enable_top_k}
  */
  readonly enableTopK?: DdosNetworkObjectEnableTopK[] | cdktf.IResolvable;
  /**
  * host_anomaly_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#host_anomaly_threshold DdosNetworkObject#host_anomaly_threshold}
  */
  readonly hostAnomalyThreshold?: DdosNetworkObjectHostAnomalyThreshold;
  /**
  * indicators_to_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#indicators_to_monitor DdosNetworkObject#indicators_to_monitor}
  */
  readonly indicatorsToMonitor?: DdosNetworkObjectIndicatorsToMonitor;
  /**
  * ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#ip_list DdosNetworkObject#ip_list}
  */
  readonly ipList?: DdosNetworkObjectIpListStruct[] | cdktf.IResolvable;
  /**
  * ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#ipv6_list DdosNetworkObject#ipv6_list}
  */
  readonly ipv6List?: DdosNetworkObjectIpv6ListStruct[] | cdktf.IResolvable;
  /**
  * network_object_anomaly_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#network_object_anomaly_threshold DdosNetworkObject#network_object_anomaly_threshold}
  */
  readonly networkObjectAnomalyThreshold?: DdosNetworkObjectNetworkObjectAnomalyThreshold;
  /**
  * notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#notification DdosNetworkObject#notification}
  */
  readonly notification?: DdosNetworkObjectNotification;
  /**
  * relative_auto_break_down_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#relative_auto_break_down_threshold DdosNetworkObject#relative_auto_break_down_threshold}
  */
  readonly relativeAutoBreakDownThreshold?: DdosNetworkObjectRelativeAutoBreakDownThreshold;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#sampling_enable DdosNetworkObject#sampling_enable}
  */
  readonly samplingEnable?: DdosNetworkObjectSamplingEnable[] | cdktf.IResolvable;
  /**
  * service_break_down_threshold_local block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#service_break_down_threshold_local DdosNetworkObject#service_break_down_threshold_local}
  */
  readonly serviceBreakDownThresholdLocal?: DdosNetworkObjectServiceBreakDownThresholdLocal;
  /**
  * sport_anomaly_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#sport_anomaly_threshold DdosNetworkObject#sport_anomaly_threshold}
  */
  readonly sportAnomalyThreshold?: DdosNetworkObjectSportAnomalyThreshold;
  /**
  * sport_discovery_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#sport_discovery_threshold DdosNetworkObject#sport_discovery_threshold}
  */
  readonly sportDiscoveryThreshold?: DdosNetworkObjectSportDiscoveryThreshold;
  /**
  * sport_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#sport_list DdosNetworkObject#sport_list}
  */
  readonly sportList?: DdosNetworkObjectSportListStruct[] | cdktf.IResolvable;
  /**
  * static_auto_break_down_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_auto_break_down_threshold DdosNetworkObject#static_auto_break_down_threshold}
  */
  readonly staticAutoBreakDownThreshold?: DdosNetworkObjectStaticAutoBreakDownThreshold;
  /**
  * sub_network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#sub_network DdosNetworkObject#sub_network}
  */
  readonly subNetwork?: DdosNetworkObjectSubNetwork;
  /**
  * topk_destinations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#topk_destinations DdosNetworkObject#topk_destinations}
  */
  readonly topkDestinations?: DdosNetworkObjectTopkDestinations;
  /**
  * trustlist block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#trustlist DdosNetworkObject#trustlist}
  */
  readonly trustlist?: DdosNetworkObjectTrustlistStruct;
}
export interface DdosNetworkObjectEnableTopK {
  /**
  * Maximum number of records to show in topk
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#topk_dst_num_records DdosNetworkObject#topk_dst_num_records}
  */
  readonly topkDstNumRecords?: number;
  /**
  * 'average': window average; 'max-peak': max peak;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#topk_sort_key DdosNetworkObject#topk_sort_key}
  */
  readonly topkSortKey?: string;
  /**
  * 'destination': Topk destination IP;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#topk_type DdosNetworkObject#topk_type}
  */
  readonly topkType?: string;
}

export function ddosNetworkObjectEnableTopKToTerraform(struct?: DdosNetworkObjectEnableTopK | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topk_dst_num_records: cdktf.numberToTerraform(struct!.topkDstNumRecords),
    topk_sort_key: cdktf.stringToTerraform(struct!.topkSortKey),
    topk_type: cdktf.stringToTerraform(struct!.topkType),
  }
}


export function ddosNetworkObjectEnableTopKToHclTerraform(struct?: DdosNetworkObjectEnableTopK | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    topk_dst_num_records: {
      value: cdktf.numberToHclTerraform(struct!.topkDstNumRecords),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    topk_sort_key: {
      value: cdktf.stringToHclTerraform(struct!.topkSortKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    topk_type: {
      value: cdktf.stringToHclTerraform(struct!.topkType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectEnableTopKOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosNetworkObjectEnableTopK | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topkDstNumRecords !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkDstNumRecords = this._topkDstNumRecords;
    }
    if (this._topkSortKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkSortKey = this._topkSortKey;
    }
    if (this._topkType !== undefined) {
      hasAnyValues = true;
      internalValueResult.topkType = this._topkType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectEnableTopK | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._topkDstNumRecords = undefined;
      this._topkSortKey = undefined;
      this._topkType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._topkDstNumRecords = value.topkDstNumRecords;
      this._topkSortKey = value.topkSortKey;
      this._topkType = value.topkType;
    }
  }

  // topk_dst_num_records - computed: false, optional: true, required: false
  private _topkDstNumRecords?: number; 
  public get topkDstNumRecords() {
    return this.getNumberAttribute('topk_dst_num_records');
  }
  public set topkDstNumRecords(value: number) {
    this._topkDstNumRecords = value;
  }
  public resetTopkDstNumRecords() {
    this._topkDstNumRecords = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkDstNumRecordsInput() {
    return this._topkDstNumRecords;
  }

  // topk_sort_key - computed: false, optional: true, required: false
  private _topkSortKey?: string; 
  public get topkSortKey() {
    return this.getStringAttribute('topk_sort_key');
  }
  public set topkSortKey(value: string) {
    this._topkSortKey = value;
  }
  public resetTopkSortKey() {
    this._topkSortKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkSortKeyInput() {
    return this._topkSortKey;
  }

  // topk_type - computed: false, optional: true, required: false
  private _topkType?: string; 
  public get topkType() {
    return this.getStringAttribute('topk_type');
  }
  public set topkType(value: string) {
    this._topkType = value;
  }
  public resetTopkType() {
    this._topkType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkTypeInput() {
    return this._topkType;
  }
}

export class DdosNetworkObjectEnableTopKList extends cdktf.ComplexList {
  public internalValue? : DdosNetworkObjectEnableTopK[] | cdktf.IResolvable

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
  public get(index: number): DdosNetworkObjectEnableTopKOutputReference {
    return new DdosNetworkObjectEnableTopKOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosNetworkObjectHostAnomalyThreshold {
  /**
  * Forward bit rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#host_bit_rate DdosNetworkObject#host_bit_rate}
  */
  readonly hostBitRate?: number;
  /**
  * FIN packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#host_fin_rate DdosNetworkObject#host_fin_rate}
  */
  readonly hostFinRate?: number;
  /**
  * Flow count of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#host_flow_count DdosNetworkObject#host_flow_count}
  */
  readonly hostFlowCount?: number;
  /**
  * ICMP packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#host_icmp_pkt_rate DdosNetworkObject#host_icmp_pkt_rate}
  */
  readonly hostIcmpPktRate?: number;
  /**
  * Forward packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#host_pkt_rate DdosNetworkObject#host_pkt_rate}
  */
  readonly hostPktRate?: number;
  /**
  * Reverse bit rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#host_rev_bit_rate DdosNetworkObject#host_rev_bit_rate}
  */
  readonly hostRevBitRate?: number;
  /**
  * Reverse packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#host_rev_pkt_rate DdosNetworkObject#host_rev_pkt_rate}
  */
  readonly hostRevPktRate?: number;
  /**
  * RST packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#host_rst_rate DdosNetworkObject#host_rst_rate}
  */
  readonly hostRstRate?: number;
  /**
  * SYN packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#host_syn_rate DdosNetworkObject#host_syn_rate}
  */
  readonly hostSynRate?: number;
  /**
  * Tcp packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#host_tcp_pkt_rate DdosNetworkObject#host_tcp_pkt_rate}
  */
  readonly hostTcpPktRate?: number;
  /**
  * Udp packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#host_udp_pkt_rate DdosNetworkObject#host_udp_pkt_rate}
  */
  readonly hostUdpPktRate?: number;
  /**
  * Forward bit rate of per undiscovered host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#host_undiscovered_host_bit_rate DdosNetworkObject#host_undiscovered_host_bit_rate}
  */
  readonly hostUndiscoveredHostBitRate?: number;
  /**
  * forward packet rate of per undiscovered host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#host_undiscovered_host_pkt_rate DdosNetworkObject#host_undiscovered_host_pkt_rate}
  */
  readonly hostUndiscoveredHostPktRate?: number;
  /**
  * Undiscovered forward packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#host_undiscovered_pkt_rate DdosNetworkObject#host_undiscovered_pkt_rate}
  */
  readonly hostUndiscoveredPktRate?: number;
}

export function ddosNetworkObjectHostAnomalyThresholdToTerraform(struct?: DdosNetworkObjectHostAnomalyThresholdOutputReference | DdosNetworkObjectHostAnomalyThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    host_bit_rate: cdktf.numberToTerraform(struct!.hostBitRate),
    host_fin_rate: cdktf.numberToTerraform(struct!.hostFinRate),
    host_flow_count: cdktf.numberToTerraform(struct!.hostFlowCount),
    host_icmp_pkt_rate: cdktf.numberToTerraform(struct!.hostIcmpPktRate),
    host_pkt_rate: cdktf.numberToTerraform(struct!.hostPktRate),
    host_rev_bit_rate: cdktf.numberToTerraform(struct!.hostRevBitRate),
    host_rev_pkt_rate: cdktf.numberToTerraform(struct!.hostRevPktRate),
    host_rst_rate: cdktf.numberToTerraform(struct!.hostRstRate),
    host_syn_rate: cdktf.numberToTerraform(struct!.hostSynRate),
    host_tcp_pkt_rate: cdktf.numberToTerraform(struct!.hostTcpPktRate),
    host_udp_pkt_rate: cdktf.numberToTerraform(struct!.hostUdpPktRate),
    host_undiscovered_host_bit_rate: cdktf.numberToTerraform(struct!.hostUndiscoveredHostBitRate),
    host_undiscovered_host_pkt_rate: cdktf.numberToTerraform(struct!.hostUndiscoveredHostPktRate),
    host_undiscovered_pkt_rate: cdktf.numberToTerraform(struct!.hostUndiscoveredPktRate),
  }
}


export function ddosNetworkObjectHostAnomalyThresholdToHclTerraform(struct?: DdosNetworkObjectHostAnomalyThresholdOutputReference | DdosNetworkObjectHostAnomalyThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    host_bit_rate: {
      value: cdktf.numberToHclTerraform(struct!.hostBitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_fin_rate: {
      value: cdktf.numberToHclTerraform(struct!.hostFinRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_flow_count: {
      value: cdktf.numberToHclTerraform(struct!.hostFlowCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_icmp_pkt_rate: {
      value: cdktf.numberToHclTerraform(struct!.hostIcmpPktRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_pkt_rate: {
      value: cdktf.numberToHclTerraform(struct!.hostPktRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_rev_bit_rate: {
      value: cdktf.numberToHclTerraform(struct!.hostRevBitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_rev_pkt_rate: {
      value: cdktf.numberToHclTerraform(struct!.hostRevPktRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_rst_rate: {
      value: cdktf.numberToHclTerraform(struct!.hostRstRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_syn_rate: {
      value: cdktf.numberToHclTerraform(struct!.hostSynRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_tcp_pkt_rate: {
      value: cdktf.numberToHclTerraform(struct!.hostTcpPktRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_udp_pkt_rate: {
      value: cdktf.numberToHclTerraform(struct!.hostUdpPktRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_undiscovered_host_bit_rate: {
      value: cdktf.numberToHclTerraform(struct!.hostUndiscoveredHostBitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_undiscovered_host_pkt_rate: {
      value: cdktf.numberToHclTerraform(struct!.hostUndiscoveredHostPktRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    host_undiscovered_pkt_rate: {
      value: cdktf.numberToHclTerraform(struct!.hostUndiscoveredPktRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectHostAnomalyThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectHostAnomalyThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostBitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostBitRate = this._hostBitRate;
    }
    if (this._hostFinRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostFinRate = this._hostFinRate;
    }
    if (this._hostFlowCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostFlowCount = this._hostFlowCount;
    }
    if (this._hostIcmpPktRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostIcmpPktRate = this._hostIcmpPktRate;
    }
    if (this._hostPktRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostPktRate = this._hostPktRate;
    }
    if (this._hostRevBitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRevBitRate = this._hostRevBitRate;
    }
    if (this._hostRevPktRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRevPktRate = this._hostRevPktRate;
    }
    if (this._hostRstRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostRstRate = this._hostRstRate;
    }
    if (this._hostSynRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostSynRate = this._hostSynRate;
    }
    if (this._hostTcpPktRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostTcpPktRate = this._hostTcpPktRate;
    }
    if (this._hostUdpPktRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostUdpPktRate = this._hostUdpPktRate;
    }
    if (this._hostUndiscoveredHostBitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostUndiscoveredHostBitRate = this._hostUndiscoveredHostBitRate;
    }
    if (this._hostUndiscoveredHostPktRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostUndiscoveredHostPktRate = this._hostUndiscoveredHostPktRate;
    }
    if (this._hostUndiscoveredPktRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostUndiscoveredPktRate = this._hostUndiscoveredPktRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectHostAnomalyThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hostBitRate = undefined;
      this._hostFinRate = undefined;
      this._hostFlowCount = undefined;
      this._hostIcmpPktRate = undefined;
      this._hostPktRate = undefined;
      this._hostRevBitRate = undefined;
      this._hostRevPktRate = undefined;
      this._hostRstRate = undefined;
      this._hostSynRate = undefined;
      this._hostTcpPktRate = undefined;
      this._hostUdpPktRate = undefined;
      this._hostUndiscoveredHostBitRate = undefined;
      this._hostUndiscoveredHostPktRate = undefined;
      this._hostUndiscoveredPktRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hostBitRate = value.hostBitRate;
      this._hostFinRate = value.hostFinRate;
      this._hostFlowCount = value.hostFlowCount;
      this._hostIcmpPktRate = value.hostIcmpPktRate;
      this._hostPktRate = value.hostPktRate;
      this._hostRevBitRate = value.hostRevBitRate;
      this._hostRevPktRate = value.hostRevPktRate;
      this._hostRstRate = value.hostRstRate;
      this._hostSynRate = value.hostSynRate;
      this._hostTcpPktRate = value.hostTcpPktRate;
      this._hostUdpPktRate = value.hostUdpPktRate;
      this._hostUndiscoveredHostBitRate = value.hostUndiscoveredHostBitRate;
      this._hostUndiscoveredHostPktRate = value.hostUndiscoveredHostPktRate;
      this._hostUndiscoveredPktRate = value.hostUndiscoveredPktRate;
    }
  }

  // host_bit_rate - computed: false, optional: true, required: false
  private _hostBitRate?: number; 
  public get hostBitRate() {
    return this.getNumberAttribute('host_bit_rate');
  }
  public set hostBitRate(value: number) {
    this._hostBitRate = value;
  }
  public resetHostBitRate() {
    this._hostBitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostBitRateInput() {
    return this._hostBitRate;
  }

  // host_fin_rate - computed: false, optional: true, required: false
  private _hostFinRate?: number; 
  public get hostFinRate() {
    return this.getNumberAttribute('host_fin_rate');
  }
  public set hostFinRate(value: number) {
    this._hostFinRate = value;
  }
  public resetHostFinRate() {
    this._hostFinRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostFinRateInput() {
    return this._hostFinRate;
  }

  // host_flow_count - computed: false, optional: true, required: false
  private _hostFlowCount?: number; 
  public get hostFlowCount() {
    return this.getNumberAttribute('host_flow_count');
  }
  public set hostFlowCount(value: number) {
    this._hostFlowCount = value;
  }
  public resetHostFlowCount() {
    this._hostFlowCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostFlowCountInput() {
    return this._hostFlowCount;
  }

  // host_icmp_pkt_rate - computed: false, optional: true, required: false
  private _hostIcmpPktRate?: number; 
  public get hostIcmpPktRate() {
    return this.getNumberAttribute('host_icmp_pkt_rate');
  }
  public set hostIcmpPktRate(value: number) {
    this._hostIcmpPktRate = value;
  }
  public resetHostIcmpPktRate() {
    this._hostIcmpPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostIcmpPktRateInput() {
    return this._hostIcmpPktRate;
  }

  // host_pkt_rate - computed: false, optional: true, required: false
  private _hostPktRate?: number; 
  public get hostPktRate() {
    return this.getNumberAttribute('host_pkt_rate');
  }
  public set hostPktRate(value: number) {
    this._hostPktRate = value;
  }
  public resetHostPktRate() {
    this._hostPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostPktRateInput() {
    return this._hostPktRate;
  }

  // host_rev_bit_rate - computed: false, optional: true, required: false
  private _hostRevBitRate?: number; 
  public get hostRevBitRate() {
    return this.getNumberAttribute('host_rev_bit_rate');
  }
  public set hostRevBitRate(value: number) {
    this._hostRevBitRate = value;
  }
  public resetHostRevBitRate() {
    this._hostRevBitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRevBitRateInput() {
    return this._hostRevBitRate;
  }

  // host_rev_pkt_rate - computed: false, optional: true, required: false
  private _hostRevPktRate?: number; 
  public get hostRevPktRate() {
    return this.getNumberAttribute('host_rev_pkt_rate');
  }
  public set hostRevPktRate(value: number) {
    this._hostRevPktRate = value;
  }
  public resetHostRevPktRate() {
    this._hostRevPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRevPktRateInput() {
    return this._hostRevPktRate;
  }

  // host_rst_rate - computed: false, optional: true, required: false
  private _hostRstRate?: number; 
  public get hostRstRate() {
    return this.getNumberAttribute('host_rst_rate');
  }
  public set hostRstRate(value: number) {
    this._hostRstRate = value;
  }
  public resetHostRstRate() {
    this._hostRstRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostRstRateInput() {
    return this._hostRstRate;
  }

  // host_syn_rate - computed: false, optional: true, required: false
  private _hostSynRate?: number; 
  public get hostSynRate() {
    return this.getNumberAttribute('host_syn_rate');
  }
  public set hostSynRate(value: number) {
    this._hostSynRate = value;
  }
  public resetHostSynRate() {
    this._hostSynRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSynRateInput() {
    return this._hostSynRate;
  }

  // host_tcp_pkt_rate - computed: false, optional: true, required: false
  private _hostTcpPktRate?: number; 
  public get hostTcpPktRate() {
    return this.getNumberAttribute('host_tcp_pkt_rate');
  }
  public set hostTcpPktRate(value: number) {
    this._hostTcpPktRate = value;
  }
  public resetHostTcpPktRate() {
    this._hostTcpPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostTcpPktRateInput() {
    return this._hostTcpPktRate;
  }

  // host_udp_pkt_rate - computed: false, optional: true, required: false
  private _hostUdpPktRate?: number; 
  public get hostUdpPktRate() {
    return this.getNumberAttribute('host_udp_pkt_rate');
  }
  public set hostUdpPktRate(value: number) {
    this._hostUdpPktRate = value;
  }
  public resetHostUdpPktRate() {
    this._hostUdpPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUdpPktRateInput() {
    return this._hostUdpPktRate;
  }

  // host_undiscovered_host_bit_rate - computed: false, optional: true, required: false
  private _hostUndiscoveredHostBitRate?: number; 
  public get hostUndiscoveredHostBitRate() {
    return this.getNumberAttribute('host_undiscovered_host_bit_rate');
  }
  public set hostUndiscoveredHostBitRate(value: number) {
    this._hostUndiscoveredHostBitRate = value;
  }
  public resetHostUndiscoveredHostBitRate() {
    this._hostUndiscoveredHostBitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUndiscoveredHostBitRateInput() {
    return this._hostUndiscoveredHostBitRate;
  }

  // host_undiscovered_host_pkt_rate - computed: false, optional: true, required: false
  private _hostUndiscoveredHostPktRate?: number; 
  public get hostUndiscoveredHostPktRate() {
    return this.getNumberAttribute('host_undiscovered_host_pkt_rate');
  }
  public set hostUndiscoveredHostPktRate(value: number) {
    this._hostUndiscoveredHostPktRate = value;
  }
  public resetHostUndiscoveredHostPktRate() {
    this._hostUndiscoveredHostPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUndiscoveredHostPktRateInput() {
    return this._hostUndiscoveredHostPktRate;
  }

  // host_undiscovered_pkt_rate - computed: false, optional: true, required: false
  private _hostUndiscoveredPktRate?: number; 
  public get hostUndiscoveredPktRate() {
    return this.getNumberAttribute('host_undiscovered_pkt_rate');
  }
  public set hostUndiscoveredPktRate(value: number) {
    this._hostUndiscoveredPktRate = value;
  }
  public resetHostUndiscoveredPktRate() {
    this._hostUndiscoveredPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostUndiscoveredPktRateInput() {
    return this._hostUndiscoveredPktRate;
  }
}
export interface DdosNetworkObjectIndicatorsToMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#enable DdosNetworkObject#enable}
  */
  readonly enable?: number;
  /**
  * Forward bit rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#monitor_bit_rate DdosNetworkObject#monitor_bit_rate}
  */
  readonly monitorBitRate?: number;
  /**
  * FIN packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#monitor_fin_rate DdosNetworkObject#monitor_fin_rate}
  */
  readonly monitorFinRate?: number;
  /**
  * Flow count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#monitor_flow_count DdosNetworkObject#monitor_flow_count}
  */
  readonly monitorFlowCount?: number;
  /**
  * ICMP packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#monitor_icmp_pkt_rate DdosNetworkObject#monitor_icmp_pkt_rate}
  */
  readonly monitorIcmpPktRate?: number;
  /**
  * Forward packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#monitor_pkt_rate DdosNetworkObject#monitor_pkt_rate}
  */
  readonly monitorPktRate?: number;
  /**
  * Reverse bit rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#monitor_rev_bit_rate DdosNetworkObject#monitor_rev_bit_rate}
  */
  readonly monitorRevBitRate?: number;
  /**
  * Reverse packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#monitor_rev_pkt_rate DdosNetworkObject#monitor_rev_pkt_rate}
  */
  readonly monitorRevPktRate?: number;
  /**
  * RST packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#monitor_rst_rate DdosNetworkObject#monitor_rst_rate}
  */
  readonly monitorRstRate?: number;
  /**
  * SYN packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#monitor_syn_rate DdosNetworkObject#monitor_syn_rate}
  */
  readonly monitorSynRate?: number;
  /**
  * TCP packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#monitor_tcp_pkt_rate DdosNetworkObject#monitor_tcp_pkt_rate}
  */
  readonly monitorTcpPktRate?: number;
  /**
  * UDP packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#monitor_udp_pkt_rate DdosNetworkObject#monitor_udp_pkt_rate}
  */
  readonly monitorUdpPktRate?: number;
  /**
  * Undiscovered forward packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#monitor_undiscovered_pkt_rate DdosNetworkObject#monitor_undiscovered_pkt_rate}
  */
  readonly monitorUndiscoveredPktRate?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#uuid DdosNetworkObject#uuid}
  */
  readonly uuid?: string;
}

export function ddosNetworkObjectIndicatorsToMonitorToTerraform(struct?: DdosNetworkObjectIndicatorsToMonitorOutputReference | DdosNetworkObjectIndicatorsToMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable: cdktf.numberToTerraform(struct!.enable),
    monitor_bit_rate: cdktf.numberToTerraform(struct!.monitorBitRate),
    monitor_fin_rate: cdktf.numberToTerraform(struct!.monitorFinRate),
    monitor_flow_count: cdktf.numberToTerraform(struct!.monitorFlowCount),
    monitor_icmp_pkt_rate: cdktf.numberToTerraform(struct!.monitorIcmpPktRate),
    monitor_pkt_rate: cdktf.numberToTerraform(struct!.monitorPktRate),
    monitor_rev_bit_rate: cdktf.numberToTerraform(struct!.monitorRevBitRate),
    monitor_rev_pkt_rate: cdktf.numberToTerraform(struct!.monitorRevPktRate),
    monitor_rst_rate: cdktf.numberToTerraform(struct!.monitorRstRate),
    monitor_syn_rate: cdktf.numberToTerraform(struct!.monitorSynRate),
    monitor_tcp_pkt_rate: cdktf.numberToTerraform(struct!.monitorTcpPktRate),
    monitor_udp_pkt_rate: cdktf.numberToTerraform(struct!.monitorUdpPktRate),
    monitor_undiscovered_pkt_rate: cdktf.numberToTerraform(struct!.monitorUndiscoveredPktRate),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosNetworkObjectIndicatorsToMonitorToHclTerraform(struct?: DdosNetworkObjectIndicatorsToMonitorOutputReference | DdosNetworkObjectIndicatorsToMonitor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable: {
      value: cdktf.numberToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_bit_rate: {
      value: cdktf.numberToHclTerraform(struct!.monitorBitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_fin_rate: {
      value: cdktf.numberToHclTerraform(struct!.monitorFinRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_flow_count: {
      value: cdktf.numberToHclTerraform(struct!.monitorFlowCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_icmp_pkt_rate: {
      value: cdktf.numberToHclTerraform(struct!.monitorIcmpPktRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_pkt_rate: {
      value: cdktf.numberToHclTerraform(struct!.monitorPktRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_rev_bit_rate: {
      value: cdktf.numberToHclTerraform(struct!.monitorRevBitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_rev_pkt_rate: {
      value: cdktf.numberToHclTerraform(struct!.monitorRevPktRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_rst_rate: {
      value: cdktf.numberToHclTerraform(struct!.monitorRstRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_syn_rate: {
      value: cdktf.numberToHclTerraform(struct!.monitorSynRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_tcp_pkt_rate: {
      value: cdktf.numberToHclTerraform(struct!.monitorTcpPktRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_udp_pkt_rate: {
      value: cdktf.numberToHclTerraform(struct!.monitorUdpPktRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    monitor_undiscovered_pkt_rate: {
      value: cdktf.numberToHclTerraform(struct!.monitorUndiscoveredPktRate),
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

export class DdosNetworkObjectIndicatorsToMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectIndicatorsToMonitor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._monitorBitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorBitRate = this._monitorBitRate;
    }
    if (this._monitorFinRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorFinRate = this._monitorFinRate;
    }
    if (this._monitorFlowCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorFlowCount = this._monitorFlowCount;
    }
    if (this._monitorIcmpPktRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorIcmpPktRate = this._monitorIcmpPktRate;
    }
    if (this._monitorPktRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorPktRate = this._monitorPktRate;
    }
    if (this._monitorRevBitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorRevBitRate = this._monitorRevBitRate;
    }
    if (this._monitorRevPktRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorRevPktRate = this._monitorRevPktRate;
    }
    if (this._monitorRstRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorRstRate = this._monitorRstRate;
    }
    if (this._monitorSynRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorSynRate = this._monitorSynRate;
    }
    if (this._monitorTcpPktRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorTcpPktRate = this._monitorTcpPktRate;
    }
    if (this._monitorUdpPktRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorUdpPktRate = this._monitorUdpPktRate;
    }
    if (this._monitorUndiscoveredPktRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.monitorUndiscoveredPktRate = this._monitorUndiscoveredPktRate;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectIndicatorsToMonitor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enable = undefined;
      this._monitorBitRate = undefined;
      this._monitorFinRate = undefined;
      this._monitorFlowCount = undefined;
      this._monitorIcmpPktRate = undefined;
      this._monitorPktRate = undefined;
      this._monitorRevBitRate = undefined;
      this._monitorRevPktRate = undefined;
      this._monitorRstRate = undefined;
      this._monitorSynRate = undefined;
      this._monitorTcpPktRate = undefined;
      this._monitorUdpPktRate = undefined;
      this._monitorUndiscoveredPktRate = undefined;
      this._uuid = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enable = value.enable;
      this._monitorBitRate = value.monitorBitRate;
      this._monitorFinRate = value.monitorFinRate;
      this._monitorFlowCount = value.monitorFlowCount;
      this._monitorIcmpPktRate = value.monitorIcmpPktRate;
      this._monitorPktRate = value.monitorPktRate;
      this._monitorRevBitRate = value.monitorRevBitRate;
      this._monitorRevPktRate = value.monitorRevPktRate;
      this._monitorRstRate = value.monitorRstRate;
      this._monitorSynRate = value.monitorSynRate;
      this._monitorTcpPktRate = value.monitorTcpPktRate;
      this._monitorUdpPktRate = value.monitorUdpPktRate;
      this._monitorUndiscoveredPktRate = value.monitorUndiscoveredPktRate;
      this._uuid = value.uuid;
    }
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: number; 
  public get enable() {
    return this.getNumberAttribute('enable');
  }
  public set enable(value: number) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // monitor_bit_rate - computed: false, optional: true, required: false
  private _monitorBitRate?: number; 
  public get monitorBitRate() {
    return this.getNumberAttribute('monitor_bit_rate');
  }
  public set monitorBitRate(value: number) {
    this._monitorBitRate = value;
  }
  public resetMonitorBitRate() {
    this._monitorBitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorBitRateInput() {
    return this._monitorBitRate;
  }

  // monitor_fin_rate - computed: false, optional: true, required: false
  private _monitorFinRate?: number; 
  public get monitorFinRate() {
    return this.getNumberAttribute('monitor_fin_rate');
  }
  public set monitorFinRate(value: number) {
    this._monitorFinRate = value;
  }
  public resetMonitorFinRate() {
    this._monitorFinRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorFinRateInput() {
    return this._monitorFinRate;
  }

  // monitor_flow_count - computed: false, optional: true, required: false
  private _monitorFlowCount?: number; 
  public get monitorFlowCount() {
    return this.getNumberAttribute('monitor_flow_count');
  }
  public set monitorFlowCount(value: number) {
    this._monitorFlowCount = value;
  }
  public resetMonitorFlowCount() {
    this._monitorFlowCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorFlowCountInput() {
    return this._monitorFlowCount;
  }

  // monitor_icmp_pkt_rate - computed: false, optional: true, required: false
  private _monitorIcmpPktRate?: number; 
  public get monitorIcmpPktRate() {
    return this.getNumberAttribute('monitor_icmp_pkt_rate');
  }
  public set monitorIcmpPktRate(value: number) {
    this._monitorIcmpPktRate = value;
  }
  public resetMonitorIcmpPktRate() {
    this._monitorIcmpPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorIcmpPktRateInput() {
    return this._monitorIcmpPktRate;
  }

  // monitor_pkt_rate - computed: false, optional: true, required: false
  private _monitorPktRate?: number; 
  public get monitorPktRate() {
    return this.getNumberAttribute('monitor_pkt_rate');
  }
  public set monitorPktRate(value: number) {
    this._monitorPktRate = value;
  }
  public resetMonitorPktRate() {
    this._monitorPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorPktRateInput() {
    return this._monitorPktRate;
  }

  // monitor_rev_bit_rate - computed: false, optional: true, required: false
  private _monitorRevBitRate?: number; 
  public get monitorRevBitRate() {
    return this.getNumberAttribute('monitor_rev_bit_rate');
  }
  public set monitorRevBitRate(value: number) {
    this._monitorRevBitRate = value;
  }
  public resetMonitorRevBitRate() {
    this._monitorRevBitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorRevBitRateInput() {
    return this._monitorRevBitRate;
  }

  // monitor_rev_pkt_rate - computed: false, optional: true, required: false
  private _monitorRevPktRate?: number; 
  public get monitorRevPktRate() {
    return this.getNumberAttribute('monitor_rev_pkt_rate');
  }
  public set monitorRevPktRate(value: number) {
    this._monitorRevPktRate = value;
  }
  public resetMonitorRevPktRate() {
    this._monitorRevPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorRevPktRateInput() {
    return this._monitorRevPktRate;
  }

  // monitor_rst_rate - computed: false, optional: true, required: false
  private _monitorRstRate?: number; 
  public get monitorRstRate() {
    return this.getNumberAttribute('monitor_rst_rate');
  }
  public set monitorRstRate(value: number) {
    this._monitorRstRate = value;
  }
  public resetMonitorRstRate() {
    this._monitorRstRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorRstRateInput() {
    return this._monitorRstRate;
  }

  // monitor_syn_rate - computed: false, optional: true, required: false
  private _monitorSynRate?: number; 
  public get monitorSynRate() {
    return this.getNumberAttribute('monitor_syn_rate');
  }
  public set monitorSynRate(value: number) {
    this._monitorSynRate = value;
  }
  public resetMonitorSynRate() {
    this._monitorSynRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorSynRateInput() {
    return this._monitorSynRate;
  }

  // monitor_tcp_pkt_rate - computed: false, optional: true, required: false
  private _monitorTcpPktRate?: number; 
  public get monitorTcpPktRate() {
    return this.getNumberAttribute('monitor_tcp_pkt_rate');
  }
  public set monitorTcpPktRate(value: number) {
    this._monitorTcpPktRate = value;
  }
  public resetMonitorTcpPktRate() {
    this._monitorTcpPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorTcpPktRateInput() {
    return this._monitorTcpPktRate;
  }

  // monitor_udp_pkt_rate - computed: false, optional: true, required: false
  private _monitorUdpPktRate?: number; 
  public get monitorUdpPktRate() {
    return this.getNumberAttribute('monitor_udp_pkt_rate');
  }
  public set monitorUdpPktRate(value: number) {
    this._monitorUdpPktRate = value;
  }
  public resetMonitorUdpPktRate() {
    this._monitorUdpPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorUdpPktRateInput() {
    return this._monitorUdpPktRate;
  }

  // monitor_undiscovered_pkt_rate - computed: false, optional: true, required: false
  private _monitorUndiscoveredPktRate?: number; 
  public get monitorUndiscoveredPktRate() {
    return this.getNumberAttribute('monitor_undiscovered_pkt_rate');
  }
  public set monitorUndiscoveredPktRate(value: number) {
    this._monitorUndiscoveredPktRate = value;
  }
  public resetMonitorUndiscoveredPktRate() {
    this._monitorUndiscoveredPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorUndiscoveredPktRateInput() {
    return this._monitorUndiscoveredPktRate;
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
export interface DdosNetworkObjectIpListPrefixAnomalyThreshold {
  /**
  * Bit rate of the prefix subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#prefix_bit_rate DdosNetworkObject#prefix_bit_rate}
  */
  readonly prefixBitRate?: number;
  /**
  * Packet rate of the prefix subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#prefix_pkt_rate DdosNetworkObject#prefix_pkt_rate}
  */
  readonly prefixPktRate?: number;
}

export function ddosNetworkObjectIpListPrefixAnomalyThresholdToTerraform(struct?: DdosNetworkObjectIpListPrefixAnomalyThresholdOutputReference | DdosNetworkObjectIpListPrefixAnomalyThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_bit_rate: cdktf.numberToTerraform(struct!.prefixBitRate),
    prefix_pkt_rate: cdktf.numberToTerraform(struct!.prefixPktRate),
  }
}


export function ddosNetworkObjectIpListPrefixAnomalyThresholdToHclTerraform(struct?: DdosNetworkObjectIpListPrefixAnomalyThresholdOutputReference | DdosNetworkObjectIpListPrefixAnomalyThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_bit_rate: {
      value: cdktf.numberToHclTerraform(struct!.prefixBitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_pkt_rate: {
      value: cdktf.numberToHclTerraform(struct!.prefixPktRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectIpListPrefixAnomalyThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectIpListPrefixAnomalyThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixBitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixBitRate = this._prefixBitRate;
    }
    if (this._prefixPktRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixPktRate = this._prefixPktRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectIpListPrefixAnomalyThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefixBitRate = undefined;
      this._prefixPktRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefixBitRate = value.prefixBitRate;
      this._prefixPktRate = value.prefixPktRate;
    }
  }

  // prefix_bit_rate - computed: false, optional: true, required: false
  private _prefixBitRate?: number; 
  public get prefixBitRate() {
    return this.getNumberAttribute('prefix_bit_rate');
  }
  public set prefixBitRate(value: number) {
    this._prefixBitRate = value;
  }
  public resetPrefixBitRate() {
    this._prefixBitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixBitRateInput() {
    return this._prefixBitRate;
  }

  // prefix_pkt_rate - computed: false, optional: true, required: false
  private _prefixPktRate?: number; 
  public get prefixPktRate() {
    return this.getNumberAttribute('prefix_pkt_rate');
  }
  public set prefixPktRate(value: number) {
    this._prefixPktRate = value;
  }
  public resetPrefixPktRate() {
    this._prefixPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixPktRateInput() {
    return this._prefixPktRate;
  }
}
export interface DdosNetworkObjectIpListSamplingEnable {
  /**
  * 'all': all; 'packet_rate': PPS; 'bit_rate': B(bits)PS;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#counters1 DdosNetworkObject#counters1}
  */
  readonly counters1?: string;
}

export function ddosNetworkObjectIpListSamplingEnableToTerraform(struct?: DdosNetworkObjectIpListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ddosNetworkObjectIpListSamplingEnableToHclTerraform(struct?: DdosNetworkObjectIpListSamplingEnable | cdktf.IResolvable): any {
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

export class DdosNetworkObjectIpListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosNetworkObjectIpListSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosNetworkObjectIpListSamplingEnable | cdktf.IResolvable | undefined) {
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

export class DdosNetworkObjectIpListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosNetworkObjectIpListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosNetworkObjectIpListSamplingEnableOutputReference {
    return new DdosNetworkObjectIpListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosNetworkObjectIpListStruct {
  /**
  * IP Subnet, supported prefix range is from 8 to 32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#subnet_ip_addr DdosNetworkObject#subnet_ip_addr}
  */
  readonly subnetIpAddr: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#user_tag DdosNetworkObject#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#uuid DdosNetworkObject#uuid}
  */
  readonly uuid?: string;
  /**
  * prefix_anomaly_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#prefix_anomaly_threshold DdosNetworkObject#prefix_anomaly_threshold}
  */
  readonly prefixAnomalyThreshold?: DdosNetworkObjectIpListPrefixAnomalyThreshold;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#sampling_enable DdosNetworkObject#sampling_enable}
  */
  readonly samplingEnable?: DdosNetworkObjectIpListSamplingEnable[] | cdktf.IResolvable;
}

export function ddosNetworkObjectIpListStructToTerraform(struct?: DdosNetworkObjectIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_ip_addr: cdktf.stringToTerraform(struct!.subnetIpAddr),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    prefix_anomaly_threshold: ddosNetworkObjectIpListPrefixAnomalyThresholdToTerraform(struct!.prefixAnomalyThreshold),
    sampling_enable: cdktf.listMapper(ddosNetworkObjectIpListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function ddosNetworkObjectIpListStructToHclTerraform(struct?: DdosNetworkObjectIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.subnetIpAddr),
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
    prefix_anomaly_threshold: {
      value: ddosNetworkObjectIpListPrefixAnomalyThresholdToHclTerraform(struct!.prefixAnomalyThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "DdosNetworkObjectIpListPrefixAnomalyThresholdList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(ddosNetworkObjectIpListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "DdosNetworkObjectIpListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosNetworkObjectIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetIpAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIpAddr = this._subnetIpAddr;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._prefixAnomalyThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixAnomalyThreshold = this._prefixAnomalyThreshold?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnetIpAddr = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._prefixAnomalyThreshold.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnetIpAddr = value.subnetIpAddr;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._prefixAnomalyThreshold.internalValue = value.prefixAnomalyThreshold;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // subnet_ip_addr - computed: false, optional: false, required: true
  private _subnetIpAddr?: string; 
  public get subnetIpAddr() {
    return this.getStringAttribute('subnet_ip_addr');
  }
  public set subnetIpAddr(value: string) {
    this._subnetIpAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpAddrInput() {
    return this._subnetIpAddr;
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

  // prefix_anomaly_threshold - computed: false, optional: true, required: false
  private _prefixAnomalyThreshold = new DdosNetworkObjectIpListPrefixAnomalyThresholdOutputReference(this, "prefix_anomaly_threshold");
  public get prefixAnomalyThreshold() {
    return this._prefixAnomalyThreshold;
  }
  public putPrefixAnomalyThreshold(value: DdosNetworkObjectIpListPrefixAnomalyThreshold) {
    this._prefixAnomalyThreshold.internalValue = value;
  }
  public resetPrefixAnomalyThreshold() {
    this._prefixAnomalyThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixAnomalyThresholdInput() {
    return this._prefixAnomalyThreshold.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new DdosNetworkObjectIpListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosNetworkObjectIpListSamplingEnable[] | cdktf.IResolvable) {
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

export class DdosNetworkObjectIpListStructList extends cdktf.ComplexList {
  public internalValue? : DdosNetworkObjectIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosNetworkObjectIpListStructOutputReference {
    return new DdosNetworkObjectIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosNetworkObjectIpv6ListPrefixAnomalyThreshold {
  /**
  * Bit rate of the prefix subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#prefix_bit_rate DdosNetworkObject#prefix_bit_rate}
  */
  readonly prefixBitRate?: number;
  /**
  * Packet rate of the prefix subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#prefix_pkt_rate DdosNetworkObject#prefix_pkt_rate}
  */
  readonly prefixPktRate?: number;
}

export function ddosNetworkObjectIpv6ListPrefixAnomalyThresholdToTerraform(struct?: DdosNetworkObjectIpv6ListPrefixAnomalyThresholdOutputReference | DdosNetworkObjectIpv6ListPrefixAnomalyThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    prefix_bit_rate: cdktf.numberToTerraform(struct!.prefixBitRate),
    prefix_pkt_rate: cdktf.numberToTerraform(struct!.prefixPktRate),
  }
}


export function ddosNetworkObjectIpv6ListPrefixAnomalyThresholdToHclTerraform(struct?: DdosNetworkObjectIpv6ListPrefixAnomalyThresholdOutputReference | DdosNetworkObjectIpv6ListPrefixAnomalyThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    prefix_bit_rate: {
      value: cdktf.numberToHclTerraform(struct!.prefixBitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    prefix_pkt_rate: {
      value: cdktf.numberToHclTerraform(struct!.prefixPktRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectIpv6ListPrefixAnomalyThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectIpv6ListPrefixAnomalyThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._prefixBitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixBitRate = this._prefixBitRate;
    }
    if (this._prefixPktRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixPktRate = this._prefixPktRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectIpv6ListPrefixAnomalyThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._prefixBitRate = undefined;
      this._prefixPktRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._prefixBitRate = value.prefixBitRate;
      this._prefixPktRate = value.prefixPktRate;
    }
  }

  // prefix_bit_rate - computed: false, optional: true, required: false
  private _prefixBitRate?: number; 
  public get prefixBitRate() {
    return this.getNumberAttribute('prefix_bit_rate');
  }
  public set prefixBitRate(value: number) {
    this._prefixBitRate = value;
  }
  public resetPrefixBitRate() {
    this._prefixBitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixBitRateInput() {
    return this._prefixBitRate;
  }

  // prefix_pkt_rate - computed: false, optional: true, required: false
  private _prefixPktRate?: number; 
  public get prefixPktRate() {
    return this.getNumberAttribute('prefix_pkt_rate');
  }
  public set prefixPktRate(value: number) {
    this._prefixPktRate = value;
  }
  public resetPrefixPktRate() {
    this._prefixPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixPktRateInput() {
    return this._prefixPktRate;
  }
}
export interface DdosNetworkObjectIpv6ListSamplingEnable {
  /**
  * 'all': all; 'packet_rate': PPS; 'bit_rate': B(bits)PS;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#counters1 DdosNetworkObject#counters1}
  */
  readonly counters1?: string;
}

export function ddosNetworkObjectIpv6ListSamplingEnableToTerraform(struct?: DdosNetworkObjectIpv6ListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ddosNetworkObjectIpv6ListSamplingEnableToHclTerraform(struct?: DdosNetworkObjectIpv6ListSamplingEnable | cdktf.IResolvable): any {
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

export class DdosNetworkObjectIpv6ListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosNetworkObjectIpv6ListSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosNetworkObjectIpv6ListSamplingEnable | cdktf.IResolvable | undefined) {
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

export class DdosNetworkObjectIpv6ListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosNetworkObjectIpv6ListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosNetworkObjectIpv6ListSamplingEnableOutputReference {
    return new DdosNetworkObjectIpv6ListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosNetworkObjectIpv6ListStruct {
  /**
  * IPV6 Subnet, supported prefix range is from 40 to 64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#subnet_ipv6_addr DdosNetworkObject#subnet_ipv6_addr}
  */
  readonly subnetIpv6Addr: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#user_tag DdosNetworkObject#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#uuid DdosNetworkObject#uuid}
  */
  readonly uuid?: string;
  /**
  * prefix_anomaly_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#prefix_anomaly_threshold DdosNetworkObject#prefix_anomaly_threshold}
  */
  readonly prefixAnomalyThreshold?: DdosNetworkObjectIpv6ListPrefixAnomalyThreshold;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#sampling_enable DdosNetworkObject#sampling_enable}
  */
  readonly samplingEnable?: DdosNetworkObjectIpv6ListSamplingEnable[] | cdktf.IResolvable;
}

export function ddosNetworkObjectIpv6ListStructToTerraform(struct?: DdosNetworkObjectIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_ipv6_addr: cdktf.stringToTerraform(struct!.subnetIpv6Addr),
    user_tag: cdktf.stringToTerraform(struct!.userTag),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    prefix_anomaly_threshold: ddosNetworkObjectIpv6ListPrefixAnomalyThresholdToTerraform(struct!.prefixAnomalyThreshold),
    sampling_enable: cdktf.listMapper(ddosNetworkObjectIpv6ListSamplingEnableToTerraform, true)(struct!.samplingEnable),
  }
}


export function ddosNetworkObjectIpv6ListStructToHclTerraform(struct?: DdosNetworkObjectIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.subnetIpv6Addr),
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
    prefix_anomaly_threshold: {
      value: ddosNetworkObjectIpv6ListPrefixAnomalyThresholdToHclTerraform(struct!.prefixAnomalyThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "DdosNetworkObjectIpv6ListPrefixAnomalyThresholdList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(ddosNetworkObjectIpv6ListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "DdosNetworkObjectIpv6ListSamplingEnableList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosNetworkObjectIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetIpv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIpv6Addr = this._subnetIpv6Addr;
    }
    if (this._userTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.userTag = this._userTag;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._prefixAnomalyThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.prefixAnomalyThreshold = this._prefixAnomalyThreshold?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnetIpv6Addr = undefined;
      this._userTag = undefined;
      this._uuid = undefined;
      this._prefixAnomalyThreshold.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnetIpv6Addr = value.subnetIpv6Addr;
      this._userTag = value.userTag;
      this._uuid = value.uuid;
      this._prefixAnomalyThreshold.internalValue = value.prefixAnomalyThreshold;
      this._samplingEnable.internalValue = value.samplingEnable;
    }
  }

  // subnet_ipv6_addr - computed: false, optional: false, required: true
  private _subnetIpv6Addr?: string; 
  public get subnetIpv6Addr() {
    return this.getStringAttribute('subnet_ipv6_addr');
  }
  public set subnetIpv6Addr(value: string) {
    this._subnetIpv6Addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpv6AddrInput() {
    return this._subnetIpv6Addr;
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

  // prefix_anomaly_threshold - computed: false, optional: true, required: false
  private _prefixAnomalyThreshold = new DdosNetworkObjectIpv6ListPrefixAnomalyThresholdOutputReference(this, "prefix_anomaly_threshold");
  public get prefixAnomalyThreshold() {
    return this._prefixAnomalyThreshold;
  }
  public putPrefixAnomalyThreshold(value: DdosNetworkObjectIpv6ListPrefixAnomalyThreshold) {
    this._prefixAnomalyThreshold.internalValue = value;
  }
  public resetPrefixAnomalyThreshold() {
    this._prefixAnomalyThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get prefixAnomalyThresholdInput() {
    return this._prefixAnomalyThreshold.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new DdosNetworkObjectIpv6ListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosNetworkObjectIpv6ListSamplingEnable[] | cdktf.IResolvable) {
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

export class DdosNetworkObjectIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : DdosNetworkObjectIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosNetworkObjectIpv6ListStructOutputReference {
    return new DdosNetworkObjectIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosNetworkObjectNetworkObjectAnomalyThreshold {
  /**
  * Bit rate of the network-object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#network_object_bit_rate DdosNetworkObject#network_object_bit_rate}
  */
  readonly networkObjectBitRate?: number;
  /**
  * Packet rate of the network-object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#network_object_pkt_rate DdosNetworkObject#network_object_pkt_rate}
  */
  readonly networkObjectPktRate?: number;
}

export function ddosNetworkObjectNetworkObjectAnomalyThresholdToTerraform(struct?: DdosNetworkObjectNetworkObjectAnomalyThresholdOutputReference | DdosNetworkObjectNetworkObjectAnomalyThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_object_bit_rate: cdktf.numberToTerraform(struct!.networkObjectBitRate),
    network_object_pkt_rate: cdktf.numberToTerraform(struct!.networkObjectPktRate),
  }
}


export function ddosNetworkObjectNetworkObjectAnomalyThresholdToHclTerraform(struct?: DdosNetworkObjectNetworkObjectAnomalyThresholdOutputReference | DdosNetworkObjectNetworkObjectAnomalyThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_object_bit_rate: {
      value: cdktf.numberToHclTerraform(struct!.networkObjectBitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    network_object_pkt_rate: {
      value: cdktf.numberToHclTerraform(struct!.networkObjectPktRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectNetworkObjectAnomalyThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectNetworkObjectAnomalyThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkObjectBitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkObjectBitRate = this._networkObjectBitRate;
    }
    if (this._networkObjectPktRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkObjectPktRate = this._networkObjectPktRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectNetworkObjectAnomalyThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkObjectBitRate = undefined;
      this._networkObjectPktRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkObjectBitRate = value.networkObjectBitRate;
      this._networkObjectPktRate = value.networkObjectPktRate;
    }
  }

  // network_object_bit_rate - computed: false, optional: true, required: false
  private _networkObjectBitRate?: number; 
  public get networkObjectBitRate() {
    return this.getNumberAttribute('network_object_bit_rate');
  }
  public set networkObjectBitRate(value: number) {
    this._networkObjectBitRate = value;
  }
  public resetNetworkObjectBitRate() {
    this._networkObjectBitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkObjectBitRateInput() {
    return this._networkObjectBitRate;
  }

  // network_object_pkt_rate - computed: false, optional: true, required: false
  private _networkObjectPktRate?: number; 
  public get networkObjectPktRate() {
    return this.getNumberAttribute('network_object_pkt_rate');
  }
  public set networkObjectPktRate(value: number) {
    this._networkObjectPktRate = value;
  }
  public resetNetworkObjectPktRate() {
    this._networkObjectPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkObjectPktRateInput() {
    return this._networkObjectPktRate;
  }
}
export interface DdosNetworkObjectNotificationNotification {
  /**
  * Specify the notification template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#notification_template_name DdosNetworkObject#notification_template_name}
  */
  readonly notificationTemplateName?: string;
}

export function ddosNetworkObjectNotificationNotificationToTerraform(struct?: DdosNetworkObjectNotificationNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notification_template_name: cdktf.stringToTerraform(struct!.notificationTemplateName),
  }
}


export function ddosNetworkObjectNotificationNotificationToHclTerraform(struct?: DdosNetworkObjectNotificationNotification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notification_template_name: {
      value: cdktf.stringToHclTerraform(struct!.notificationTemplateName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectNotificationNotificationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosNetworkObjectNotificationNotification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notificationTemplateName !== undefined) {
      hasAnyValues = true;
      internalValueResult.notificationTemplateName = this._notificationTemplateName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectNotificationNotification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._notificationTemplateName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._notificationTemplateName = value.notificationTemplateName;
    }
  }

  // notification_template_name - computed: false, optional: true, required: false
  private _notificationTemplateName?: string; 
  public get notificationTemplateName() {
    return this.getStringAttribute('notification_template_name');
  }
  public set notificationTemplateName(value: string) {
    this._notificationTemplateName = value;
  }
  public resetNotificationTemplateName() {
    this._notificationTemplateName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationTemplateNameInput() {
    return this._notificationTemplateName;
  }
}

export class DdosNetworkObjectNotificationNotificationList extends cdktf.ComplexList {
  public internalValue? : DdosNetworkObjectNotificationNotification[] | cdktf.IResolvable

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
  public get(index: number): DdosNetworkObjectNotificationNotificationOutputReference {
    return new DdosNetworkObjectNotificationNotificationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosNetworkObjectNotification {
  /**
  * 'configuration': configuration;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#configuration DdosNetworkObject#configuration}
  */
  readonly configuration?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#uuid DdosNetworkObject#uuid}
  */
  readonly uuid?: string;
  /**
  * notification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#notification DdosNetworkObject#notification}
  */
  readonly notification?: DdosNetworkObjectNotificationNotification[] | cdktf.IResolvable;
}

export function ddosNetworkObjectNotificationToTerraform(struct?: DdosNetworkObjectNotificationOutputReference | DdosNetworkObjectNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    configuration: cdktf.stringToTerraform(struct!.configuration),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    notification: cdktf.listMapper(ddosNetworkObjectNotificationNotificationToTerraform, true)(struct!.notification),
  }
}


export function ddosNetworkObjectNotificationToHclTerraform(struct?: DdosNetworkObjectNotificationOutputReference | DdosNetworkObjectNotification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    configuration: {
      value: cdktf.stringToHclTerraform(struct!.configuration),
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
    notification: {
      value: cdktf.listMapperHcl(ddosNetworkObjectNotificationNotificationToHclTerraform, true)(struct!.notification),
      isBlock: true,
      type: "list",
      storageClassType: "DdosNetworkObjectNotificationNotificationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectNotificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectNotification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._configuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.configuration = this._configuration;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._notification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.notification = this._notification?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectNotification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._configuration = undefined;
      this._uuid = undefined;
      this._notification.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._configuration = value.configuration;
      this._uuid = value.uuid;
      this._notification.internalValue = value.notification;
    }
  }

  // configuration - computed: false, optional: true, required: false
  private _configuration?: string; 
  public get configuration() {
    return this.getStringAttribute('configuration');
  }
  public set configuration(value: string) {
    this._configuration = value;
  }
  public resetConfiguration() {
    this._configuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationInput() {
    return this._configuration;
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

  // notification - computed: false, optional: true, required: false
  private _notification = new DdosNetworkObjectNotificationNotificationList(this, "notification", false);
  public get notification() {
    return this._notification;
  }
  public putNotification(value: DdosNetworkObjectNotificationNotification[] | cdktf.IResolvable) {
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
export interface DdosNetworkObjectRelativeAutoBreakDownThreshold {
  /**
  * percentage of parent node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#network_percentage DdosNetworkObject#network_percentage}
  */
  readonly networkPercentage?: number;
  /**
  * permil of root node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#permil DdosNetworkObject#permil}
  */
  readonly permil?: number;
}

export function ddosNetworkObjectRelativeAutoBreakDownThresholdToTerraform(struct?: DdosNetworkObjectRelativeAutoBreakDownThresholdOutputReference | DdosNetworkObjectRelativeAutoBreakDownThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_percentage: cdktf.numberToTerraform(struct!.networkPercentage),
    permil: cdktf.numberToTerraform(struct!.permil),
  }
}


export function ddosNetworkObjectRelativeAutoBreakDownThresholdToHclTerraform(struct?: DdosNetworkObjectRelativeAutoBreakDownThresholdOutputReference | DdosNetworkObjectRelativeAutoBreakDownThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_percentage: {
      value: cdktf.numberToHclTerraform(struct!.networkPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    permil: {
      value: cdktf.numberToHclTerraform(struct!.permil),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectRelativeAutoBreakDownThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectRelativeAutoBreakDownThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPercentage = this._networkPercentage;
    }
    if (this._permil !== undefined) {
      hasAnyValues = true;
      internalValueResult.permil = this._permil;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectRelativeAutoBreakDownThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkPercentage = undefined;
      this._permil = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkPercentage = value.networkPercentage;
      this._permil = value.permil;
    }
  }

  // network_percentage - computed: false, optional: true, required: false
  private _networkPercentage?: number; 
  public get networkPercentage() {
    return this.getNumberAttribute('network_percentage');
  }
  public set networkPercentage(value: number) {
    this._networkPercentage = value;
  }
  public resetNetworkPercentage() {
    this._networkPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPercentageInput() {
    return this._networkPercentage;
  }

  // permil - computed: false, optional: true, required: false
  private _permil?: number; 
  public get permil() {
    return this.getNumberAttribute('permil');
  }
  public set permil(value: number) {
    this._permil = value;
  }
  public resetPermil() {
    this._permil = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get permilInput() {
    return this._permil;
  }
}
export interface DdosNetworkObjectSamplingEnable {
  /**
  * 'all': all; 'subnet_learned': Subnet Entry Learned; 'subnet_aged': Subnet Entry Aged; 'subnet_create_fail': Subnet Entry Create Failures; 'ip_learned': IP Entry Learned; 'ip_aged': IP Entry Aged; 'ip_create_fail': IP Entry Create Failures; 'service_learned': Service Entry Learned; 'service_aged': Service Entry Aged; 'service_create_fail': Service Entry Create Failures; 'packet_rate': PPS; 'bit_rate': B(bits)PS; 'topk_allocate_fail': Topk Allocate Failures; 'sport_learned': Source Port Entry Learned; 'sport_aged': Source Port Entry Aged; 'sport_create_fail': Source Port Entry Create Failures; 'agent_group_learned': Agent Group Entry Learned; 'agent_group_aged': Agent Group Entry Aged; 'agent_group_create_fail': Agent Group Entry Create Failures; 'duplicate_sample_pkt_rcv': Duplicate Sample Packet Received;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#counters1 DdosNetworkObject#counters1}
  */
  readonly counters1?: string;
}

export function ddosNetworkObjectSamplingEnableToTerraform(struct?: DdosNetworkObjectSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ddosNetworkObjectSamplingEnableToHclTerraform(struct?: DdosNetworkObjectSamplingEnable | cdktf.IResolvable): any {
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

export class DdosNetworkObjectSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosNetworkObjectSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosNetworkObjectSamplingEnable | cdktf.IResolvable | undefined) {
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

export class DdosNetworkObjectSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosNetworkObjectSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosNetworkObjectSamplingEnableOutputReference {
    return new DdosNetworkObjectSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosNetworkObjectServiceBreakDownThresholdLocal {
  /**
  * percentage of parent ip node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#svc_percentage DdosNetworkObject#svc_percentage}
  */
  readonly svcPercentage?: number;
}

export function ddosNetworkObjectServiceBreakDownThresholdLocalToTerraform(struct?: DdosNetworkObjectServiceBreakDownThresholdLocalOutputReference | DdosNetworkObjectServiceBreakDownThresholdLocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    svc_percentage: cdktf.numberToTerraform(struct!.svcPercentage),
  }
}


export function ddosNetworkObjectServiceBreakDownThresholdLocalToHclTerraform(struct?: DdosNetworkObjectServiceBreakDownThresholdLocalOutputReference | DdosNetworkObjectServiceBreakDownThresholdLocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    svc_percentage: {
      value: cdktf.numberToHclTerraform(struct!.svcPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectServiceBreakDownThresholdLocalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectServiceBreakDownThresholdLocal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._svcPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.svcPercentage = this._svcPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectServiceBreakDownThresholdLocal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._svcPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._svcPercentage = value.svcPercentage;
    }
  }

  // svc_percentage - computed: false, optional: true, required: false
  private _svcPercentage?: number; 
  public get svcPercentage() {
    return this.getNumberAttribute('svc_percentage');
  }
  public set svcPercentage(value: number) {
    this._svcPercentage = value;
  }
  public resetSvcPercentage() {
    this._svcPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get svcPercentageInput() {
    return this._svcPercentage;
  }
}
export interface DdosNetworkObjectSportAnomalyThresholdBitRate {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#uuid DdosNetworkObject#uuid}
  */
  readonly uuid?: string;
  /**
  * Bit rate of a source port entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#value DdosNetworkObject#value}
  */
  readonly value?: number;
}

export function ddosNetworkObjectSportAnomalyThresholdBitRateToTerraform(struct?: DdosNetworkObjectSportAnomalyThresholdBitRateOutputReference | DdosNetworkObjectSportAnomalyThresholdBitRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function ddosNetworkObjectSportAnomalyThresholdBitRateToHclTerraform(struct?: DdosNetworkObjectSportAnomalyThresholdBitRateOutputReference | DdosNetworkObjectSportAnomalyThresholdBitRate): any {
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
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectSportAnomalyThresholdBitRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectSportAnomalyThresholdBitRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectSportAnomalyThresholdBitRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DdosNetworkObjectSportAnomalyThresholdBitRatePercentage {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#uuid DdosNetworkObject#uuid}
  */
  readonly uuid?: string;
  /**
  * Percentage of source port entry's parent entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#value DdosNetworkObject#value}
  */
  readonly value?: number;
}

export function ddosNetworkObjectSportAnomalyThresholdBitRatePercentageToTerraform(struct?: DdosNetworkObjectSportAnomalyThresholdBitRatePercentageOutputReference | DdosNetworkObjectSportAnomalyThresholdBitRatePercentage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function ddosNetworkObjectSportAnomalyThresholdBitRatePercentageToHclTerraform(struct?: DdosNetworkObjectSportAnomalyThresholdBitRatePercentageOutputReference | DdosNetworkObjectSportAnomalyThresholdBitRatePercentage): any {
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
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectSportAnomalyThresholdBitRatePercentageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectSportAnomalyThresholdBitRatePercentage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectSportAnomalyThresholdBitRatePercentage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DdosNetworkObjectSportAnomalyThresholdIpListStruct {
  /**
  * Bit rate of a source port entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#bit_rate DdosNetworkObject#bit_rate}
  */
  readonly bitRate?: number;
  /**
  * Percentage of source port entry's parent entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#bit_rate_percentage DdosNetworkObject#bit_rate_percentage}
  */
  readonly bitRatePercentage?: number;
  /**
  * 'bit-rate-percentage': Percentage of source port entry's parent entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#bit_rate_percentage_str DdosNetworkObject#bit_rate_percentage_str}
  */
  readonly bitRatePercentageStr: string;
  /**
  * 'bit-rate': Bit rate of a source port entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#bit_rate_str DdosNetworkObject#bit_rate_str}
  */
  readonly bitRateStr: string;
  /**
  * Override threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#ip_addr DdosNetworkObject#ip_addr}
  */
  readonly ipAddr: string;
  /**
  * Bit rate of a source port entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#ip_sport_bit_rate DdosNetworkObject#ip_sport_bit_rate}
  */
  readonly ipSportBitRate?: number;
  /**
  * Percentage of source port entry's parent entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#ip_sport_bit_rate_percentage DdosNetworkObject#ip_sport_bit_rate_percentage}
  */
  readonly ipSportBitRatePercentage?: number;
  /**
  * 'bit-rate-percentage': Percentage of source port entry's parent entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#ip_sport_bit_rate_percentage_str DdosNetworkObject#ip_sport_bit_rate_percentage_str}
  */
  readonly ipSportBitRatePercentageStr: string;
  /**
  * 'bit-rate': Bit rate of a source port entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#ip_sport_bit_rate_str DdosNetworkObject#ip_sport_bit_rate_str}
  */
  readonly ipSportBitRateStr: string;
  /**
  * Packet rate of a source port entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#ip_sport_packet_rate DdosNetworkObject#ip_sport_packet_rate}
  */
  readonly ipSportPacketRate?: number;
  /**
  * Percentage of source port entry's parent entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#ip_sport_packet_rate_percentage DdosNetworkObject#ip_sport_packet_rate_percentage}
  */
  readonly ipSportPacketRatePercentage?: number;
  /**
  * 'packet-rate-percentage': Percentage of source port entry's parent entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#ip_sport_packet_rate_percentage_str DdosNetworkObject#ip_sport_packet_rate_percentage_str}
  */
  readonly ipSportPacketRatePercentageStr: string;
  /**
  * 'packet-rate': Packet rate of a source port entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#ip_sport_packet_rate_str DdosNetworkObject#ip_sport_packet_rate_str}
  */
  readonly ipSportPacketRateStr: string;
  /**
  * Packet rate of a source port entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#packet_rate DdosNetworkObject#packet_rate}
  */
  readonly packetRate?: number;
  /**
  * Percentage of source port entry's parent entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#packet_rate_percentage DdosNetworkObject#packet_rate_percentage}
  */
  readonly packetRatePercentage?: number;
  /**
  * 'packet-rate-percentage': Percentage of source port entry's parent entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#packet_rate_percentage_str DdosNetworkObject#packet_rate_percentage_str}
  */
  readonly packetRatePercentageStr: string;
  /**
  * 'packet-rate': Packet rate of a source port entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#packet_rate_str DdosNetworkObject#packet_rate_str}
  */
  readonly packetRateStr: string;
  /**
  * 'udp': UDP port; 'tcp': TCP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#protocol DdosNetworkObject#protocol}
  */
  readonly protocol: string;
  /**
  * Source port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#sport_num DdosNetworkObject#sport_num}
  */
  readonly sportNum: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#uuid DdosNetworkObject#uuid}
  */
  readonly uuid?: string;
}

export function ddosNetworkObjectSportAnomalyThresholdIpListStructToTerraform(struct?: DdosNetworkObjectSportAnomalyThresholdIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bit_rate: cdktf.numberToTerraform(struct!.bitRate),
    bit_rate_percentage: cdktf.numberToTerraform(struct!.bitRatePercentage),
    bit_rate_percentage_str: cdktf.stringToTerraform(struct!.bitRatePercentageStr),
    bit_rate_str: cdktf.stringToTerraform(struct!.bitRateStr),
    ip_addr: cdktf.stringToTerraform(struct!.ipAddr),
    ip_sport_bit_rate: cdktf.numberToTerraform(struct!.ipSportBitRate),
    ip_sport_bit_rate_percentage: cdktf.numberToTerraform(struct!.ipSportBitRatePercentage),
    ip_sport_bit_rate_percentage_str: cdktf.stringToTerraform(struct!.ipSportBitRatePercentageStr),
    ip_sport_bit_rate_str: cdktf.stringToTerraform(struct!.ipSportBitRateStr),
    ip_sport_packet_rate: cdktf.numberToTerraform(struct!.ipSportPacketRate),
    ip_sport_packet_rate_percentage: cdktf.numberToTerraform(struct!.ipSportPacketRatePercentage),
    ip_sport_packet_rate_percentage_str: cdktf.stringToTerraform(struct!.ipSportPacketRatePercentageStr),
    ip_sport_packet_rate_str: cdktf.stringToTerraform(struct!.ipSportPacketRateStr),
    packet_rate: cdktf.numberToTerraform(struct!.packetRate),
    packet_rate_percentage: cdktf.numberToTerraform(struct!.packetRatePercentage),
    packet_rate_percentage_str: cdktf.stringToTerraform(struct!.packetRatePercentageStr),
    packet_rate_str: cdktf.stringToTerraform(struct!.packetRateStr),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    sport_num: cdktf.numberToTerraform(struct!.sportNum),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosNetworkObjectSportAnomalyThresholdIpListStructToHclTerraform(struct?: DdosNetworkObjectSportAnomalyThresholdIpListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bit_rate: {
      value: cdktf.numberToHclTerraform(struct!.bitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bit_rate_percentage: {
      value: cdktf.numberToHclTerraform(struct!.bitRatePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bit_rate_percentage_str: {
      value: cdktf.stringToHclTerraform(struct!.bitRatePercentageStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bit_rate_str: {
      value: cdktf.stringToHclTerraform(struct!.bitRateStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_sport_bit_rate: {
      value: cdktf.numberToHclTerraform(struct!.ipSportBitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_sport_bit_rate_percentage: {
      value: cdktf.numberToHclTerraform(struct!.ipSportBitRatePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_sport_bit_rate_percentage_str: {
      value: cdktf.stringToHclTerraform(struct!.ipSportBitRatePercentageStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_sport_bit_rate_str: {
      value: cdktf.stringToHclTerraform(struct!.ipSportBitRateStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_sport_packet_rate: {
      value: cdktf.numberToHclTerraform(struct!.ipSportPacketRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_sport_packet_rate_percentage: {
      value: cdktf.numberToHclTerraform(struct!.ipSportPacketRatePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_sport_packet_rate_percentage_str: {
      value: cdktf.stringToHclTerraform(struct!.ipSportPacketRatePercentageStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_sport_packet_rate_str: {
      value: cdktf.stringToHclTerraform(struct!.ipSportPacketRateStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_rate: {
      value: cdktf.numberToHclTerraform(struct!.packetRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_rate_percentage: {
      value: cdktf.numberToHclTerraform(struct!.packetRatePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_rate_percentage_str: {
      value: cdktf.stringToHclTerraform(struct!.packetRatePercentageStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_rate_str: {
      value: cdktf.stringToHclTerraform(struct!.packetRateStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sport_num: {
      value: cdktf.numberToHclTerraform(struct!.sportNum),
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

export class DdosNetworkObjectSportAnomalyThresholdIpListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosNetworkObjectSportAnomalyThresholdIpListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitRate = this._bitRate;
    }
    if (this._bitRatePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitRatePercentage = this._bitRatePercentage;
    }
    if (this._bitRatePercentageStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitRatePercentageStr = this._bitRatePercentageStr;
    }
    if (this._bitRateStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitRateStr = this._bitRateStr;
    }
    if (this._ipAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr;
    }
    if (this._ipSportBitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSportBitRate = this._ipSportBitRate;
    }
    if (this._ipSportBitRatePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSportBitRatePercentage = this._ipSportBitRatePercentage;
    }
    if (this._ipSportBitRatePercentageStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSportBitRatePercentageStr = this._ipSportBitRatePercentageStr;
    }
    if (this._ipSportBitRateStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSportBitRateStr = this._ipSportBitRateStr;
    }
    if (this._ipSportPacketRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSportPacketRate = this._ipSportPacketRate;
    }
    if (this._ipSportPacketRatePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSportPacketRatePercentage = this._ipSportPacketRatePercentage;
    }
    if (this._ipSportPacketRatePercentageStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSportPacketRatePercentageStr = this._ipSportPacketRatePercentageStr;
    }
    if (this._ipSportPacketRateStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSportPacketRateStr = this._ipSportPacketRateStr;
    }
    if (this._packetRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRate = this._packetRate;
    }
    if (this._packetRatePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRatePercentage = this._packetRatePercentage;
    }
    if (this._packetRatePercentageStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRatePercentageStr = this._packetRatePercentageStr;
    }
    if (this._packetRateStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRateStr = this._packetRateStr;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sportNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sportNum = this._sportNum;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectSportAnomalyThresholdIpListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bitRate = undefined;
      this._bitRatePercentage = undefined;
      this._bitRatePercentageStr = undefined;
      this._bitRateStr = undefined;
      this._ipAddr = undefined;
      this._ipSportBitRate = undefined;
      this._ipSportBitRatePercentage = undefined;
      this._ipSportBitRatePercentageStr = undefined;
      this._ipSportBitRateStr = undefined;
      this._ipSportPacketRate = undefined;
      this._ipSportPacketRatePercentage = undefined;
      this._ipSportPacketRatePercentageStr = undefined;
      this._ipSportPacketRateStr = undefined;
      this._packetRate = undefined;
      this._packetRatePercentage = undefined;
      this._packetRatePercentageStr = undefined;
      this._packetRateStr = undefined;
      this._protocol = undefined;
      this._sportNum = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bitRate = value.bitRate;
      this._bitRatePercentage = value.bitRatePercentage;
      this._bitRatePercentageStr = value.bitRatePercentageStr;
      this._bitRateStr = value.bitRateStr;
      this._ipAddr = value.ipAddr;
      this._ipSportBitRate = value.ipSportBitRate;
      this._ipSportBitRatePercentage = value.ipSportBitRatePercentage;
      this._ipSportBitRatePercentageStr = value.ipSportBitRatePercentageStr;
      this._ipSportBitRateStr = value.ipSportBitRateStr;
      this._ipSportPacketRate = value.ipSportPacketRate;
      this._ipSportPacketRatePercentage = value.ipSportPacketRatePercentage;
      this._ipSportPacketRatePercentageStr = value.ipSportPacketRatePercentageStr;
      this._ipSportPacketRateStr = value.ipSportPacketRateStr;
      this._packetRate = value.packetRate;
      this._packetRatePercentage = value.packetRatePercentage;
      this._packetRatePercentageStr = value.packetRatePercentageStr;
      this._packetRateStr = value.packetRateStr;
      this._protocol = value.protocol;
      this._sportNum = value.sportNum;
      this._uuid = value.uuid;
    }
  }

  // bit_rate - computed: false, optional: true, required: false
  private _bitRate?: number; 
  public get bitRate() {
    return this.getNumberAttribute('bit_rate');
  }
  public set bitRate(value: number) {
    this._bitRate = value;
  }
  public resetBitRate() {
    this._bitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitRateInput() {
    return this._bitRate;
  }

  // bit_rate_percentage - computed: false, optional: true, required: false
  private _bitRatePercentage?: number; 
  public get bitRatePercentage() {
    return this.getNumberAttribute('bit_rate_percentage');
  }
  public set bitRatePercentage(value: number) {
    this._bitRatePercentage = value;
  }
  public resetBitRatePercentage() {
    this._bitRatePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitRatePercentageInput() {
    return this._bitRatePercentage;
  }

  // bit_rate_percentage_str - computed: false, optional: false, required: true
  private _bitRatePercentageStr?: string; 
  public get bitRatePercentageStr() {
    return this.getStringAttribute('bit_rate_percentage_str');
  }
  public set bitRatePercentageStr(value: string) {
    this._bitRatePercentageStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bitRatePercentageStrInput() {
    return this._bitRatePercentageStr;
  }

  // bit_rate_str - computed: false, optional: false, required: true
  private _bitRateStr?: string; 
  public get bitRateStr() {
    return this.getStringAttribute('bit_rate_str');
  }
  public set bitRateStr(value: string) {
    this._bitRateStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bitRateStrInput() {
    return this._bitRateStr;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
  }

  // ip_sport_bit_rate - computed: false, optional: true, required: false
  private _ipSportBitRate?: number; 
  public get ipSportBitRate() {
    return this.getNumberAttribute('ip_sport_bit_rate');
  }
  public set ipSportBitRate(value: number) {
    this._ipSportBitRate = value;
  }
  public resetIpSportBitRate() {
    this._ipSportBitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSportBitRateInput() {
    return this._ipSportBitRate;
  }

  // ip_sport_bit_rate_percentage - computed: false, optional: true, required: false
  private _ipSportBitRatePercentage?: number; 
  public get ipSportBitRatePercentage() {
    return this.getNumberAttribute('ip_sport_bit_rate_percentage');
  }
  public set ipSportBitRatePercentage(value: number) {
    this._ipSportBitRatePercentage = value;
  }
  public resetIpSportBitRatePercentage() {
    this._ipSportBitRatePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSportBitRatePercentageInput() {
    return this._ipSportBitRatePercentage;
  }

  // ip_sport_bit_rate_percentage_str - computed: false, optional: false, required: true
  private _ipSportBitRatePercentageStr?: string; 
  public get ipSportBitRatePercentageStr() {
    return this.getStringAttribute('ip_sport_bit_rate_percentage_str');
  }
  public set ipSportBitRatePercentageStr(value: string) {
    this._ipSportBitRatePercentageStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSportBitRatePercentageStrInput() {
    return this._ipSportBitRatePercentageStr;
  }

  // ip_sport_bit_rate_str - computed: false, optional: false, required: true
  private _ipSportBitRateStr?: string; 
  public get ipSportBitRateStr() {
    return this.getStringAttribute('ip_sport_bit_rate_str');
  }
  public set ipSportBitRateStr(value: string) {
    this._ipSportBitRateStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSportBitRateStrInput() {
    return this._ipSportBitRateStr;
  }

  // ip_sport_packet_rate - computed: false, optional: true, required: false
  private _ipSportPacketRate?: number; 
  public get ipSportPacketRate() {
    return this.getNumberAttribute('ip_sport_packet_rate');
  }
  public set ipSportPacketRate(value: number) {
    this._ipSportPacketRate = value;
  }
  public resetIpSportPacketRate() {
    this._ipSportPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSportPacketRateInput() {
    return this._ipSportPacketRate;
  }

  // ip_sport_packet_rate_percentage - computed: false, optional: true, required: false
  private _ipSportPacketRatePercentage?: number; 
  public get ipSportPacketRatePercentage() {
    return this.getNumberAttribute('ip_sport_packet_rate_percentage');
  }
  public set ipSportPacketRatePercentage(value: number) {
    this._ipSportPacketRatePercentage = value;
  }
  public resetIpSportPacketRatePercentage() {
    this._ipSportPacketRatePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSportPacketRatePercentageInput() {
    return this._ipSportPacketRatePercentage;
  }

  // ip_sport_packet_rate_percentage_str - computed: false, optional: false, required: true
  private _ipSportPacketRatePercentageStr?: string; 
  public get ipSportPacketRatePercentageStr() {
    return this.getStringAttribute('ip_sport_packet_rate_percentage_str');
  }
  public set ipSportPacketRatePercentageStr(value: string) {
    this._ipSportPacketRatePercentageStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSportPacketRatePercentageStrInput() {
    return this._ipSportPacketRatePercentageStr;
  }

  // ip_sport_packet_rate_str - computed: false, optional: false, required: true
  private _ipSportPacketRateStr?: string; 
  public get ipSportPacketRateStr() {
    return this.getStringAttribute('ip_sport_packet_rate_str');
  }
  public set ipSportPacketRateStr(value: string) {
    this._ipSportPacketRateStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSportPacketRateStrInput() {
    return this._ipSportPacketRateStr;
  }

  // packet_rate - computed: false, optional: true, required: false
  private _packetRate?: number; 
  public get packetRate() {
    return this.getNumberAttribute('packet_rate');
  }
  public set packetRate(value: number) {
    this._packetRate = value;
  }
  public resetPacketRate() {
    this._packetRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateInput() {
    return this._packetRate;
  }

  // packet_rate_percentage - computed: false, optional: true, required: false
  private _packetRatePercentage?: number; 
  public get packetRatePercentage() {
    return this.getNumberAttribute('packet_rate_percentage');
  }
  public set packetRatePercentage(value: number) {
    this._packetRatePercentage = value;
  }
  public resetPacketRatePercentage() {
    this._packetRatePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRatePercentageInput() {
    return this._packetRatePercentage;
  }

  // packet_rate_percentage_str - computed: false, optional: false, required: true
  private _packetRatePercentageStr?: string; 
  public get packetRatePercentageStr() {
    return this.getStringAttribute('packet_rate_percentage_str');
  }
  public set packetRatePercentageStr(value: string) {
    this._packetRatePercentageStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRatePercentageStrInput() {
    return this._packetRatePercentageStr;
  }

  // packet_rate_str - computed: false, optional: false, required: true
  private _packetRateStr?: string; 
  public get packetRateStr() {
    return this.getStringAttribute('packet_rate_str');
  }
  public set packetRateStr(value: string) {
    this._packetRateStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateStrInput() {
    return this._packetRateStr;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // sport_num - computed: false, optional: false, required: true
  private _sportNum?: number; 
  public get sportNum() {
    return this.getNumberAttribute('sport_num');
  }
  public set sportNum(value: number) {
    this._sportNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sportNumInput() {
    return this._sportNum;
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

export class DdosNetworkObjectSportAnomalyThresholdIpListStructList extends cdktf.ComplexList {
  public internalValue? : DdosNetworkObjectSportAnomalyThresholdIpListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosNetworkObjectSportAnomalyThresholdIpListStructOutputReference {
    return new DdosNetworkObjectSportAnomalyThresholdIpListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosNetworkObjectSportAnomalyThresholdIpv6ListStruct {
  /**
  * Bit rate of a source port entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#bit_rate DdosNetworkObject#bit_rate}
  */
  readonly bitRate?: number;
  /**
  * Percentage of source port entry's parent entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#bit_rate_percentage DdosNetworkObject#bit_rate_percentage}
  */
  readonly bitRatePercentage?: number;
  /**
  * 'bit-rate-percentage': Percentage of source port entry's parent entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#bit_rate_percentage_str DdosNetworkObject#bit_rate_percentage_str}
  */
  readonly bitRatePercentageStr: string;
  /**
  * 'bit-rate': Bit rate of a source port entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#bit_rate_str DdosNetworkObject#bit_rate_str}
  */
  readonly bitRateStr: string;
  /**
  * Override threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#ip_addr DdosNetworkObject#ip_addr}
  */
  readonly ipAddr: string;
  /**
  * Bit rate of a source port entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#ip_sport_bit_rate DdosNetworkObject#ip_sport_bit_rate}
  */
  readonly ipSportBitRate?: number;
  /**
  * Percentage of source port entry's parent entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#ip_sport_bit_rate_percentage DdosNetworkObject#ip_sport_bit_rate_percentage}
  */
  readonly ipSportBitRatePercentage?: number;
  /**
  * 'bit-rate-percentage': Percentage of source port entry's parent entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#ip_sport_bit_rate_percentage_str DdosNetworkObject#ip_sport_bit_rate_percentage_str}
  */
  readonly ipSportBitRatePercentageStr: string;
  /**
  * 'bit-rate': Bit rate of a source port entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#ip_sport_bit_rate_str DdosNetworkObject#ip_sport_bit_rate_str}
  */
  readonly ipSportBitRateStr: string;
  /**
  * Packet rate of a source port entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#ip_sport_packet_rate DdosNetworkObject#ip_sport_packet_rate}
  */
  readonly ipSportPacketRate?: number;
  /**
  * Percentage of source port entry's parent entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#ip_sport_packet_rate_percentage DdosNetworkObject#ip_sport_packet_rate_percentage}
  */
  readonly ipSportPacketRatePercentage?: number;
  /**
  * 'packet-rate-percentage': Percentage of source port entry's parent entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#ip_sport_packet_rate_percentage_str DdosNetworkObject#ip_sport_packet_rate_percentage_str}
  */
  readonly ipSportPacketRatePercentageStr: string;
  /**
  * 'packet-rate': Packet rate of a source port entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#ip_sport_packet_rate_str DdosNetworkObject#ip_sport_packet_rate_str}
  */
  readonly ipSportPacketRateStr: string;
  /**
  * Packet rate of a source port entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#packet_rate DdosNetworkObject#packet_rate}
  */
  readonly packetRate?: number;
  /**
  * Percentage of source port entry's parent entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#packet_rate_percentage DdosNetworkObject#packet_rate_percentage}
  */
  readonly packetRatePercentage?: number;
  /**
  * 'packet-rate-percentage': Percentage of source port entry's parent entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#packet_rate_percentage_str DdosNetworkObject#packet_rate_percentage_str}
  */
  readonly packetRatePercentageStr: string;
  /**
  * 'packet-rate': Packet rate of a source port entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#packet_rate_str DdosNetworkObject#packet_rate_str}
  */
  readonly packetRateStr: string;
  /**
  * 'udp': UDP port; 'tcp': TCP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#protocol DdosNetworkObject#protocol}
  */
  readonly protocol: string;
  /**
  * Source port number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#sport_num DdosNetworkObject#sport_num}
  */
  readonly sportNum: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#uuid DdosNetworkObject#uuid}
  */
  readonly uuid?: string;
}

export function ddosNetworkObjectSportAnomalyThresholdIpv6ListStructToTerraform(struct?: DdosNetworkObjectSportAnomalyThresholdIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bit_rate: cdktf.numberToTerraform(struct!.bitRate),
    bit_rate_percentage: cdktf.numberToTerraform(struct!.bitRatePercentage),
    bit_rate_percentage_str: cdktf.stringToTerraform(struct!.bitRatePercentageStr),
    bit_rate_str: cdktf.stringToTerraform(struct!.bitRateStr),
    ip_addr: cdktf.stringToTerraform(struct!.ipAddr),
    ip_sport_bit_rate: cdktf.numberToTerraform(struct!.ipSportBitRate),
    ip_sport_bit_rate_percentage: cdktf.numberToTerraform(struct!.ipSportBitRatePercentage),
    ip_sport_bit_rate_percentage_str: cdktf.stringToTerraform(struct!.ipSportBitRatePercentageStr),
    ip_sport_bit_rate_str: cdktf.stringToTerraform(struct!.ipSportBitRateStr),
    ip_sport_packet_rate: cdktf.numberToTerraform(struct!.ipSportPacketRate),
    ip_sport_packet_rate_percentage: cdktf.numberToTerraform(struct!.ipSportPacketRatePercentage),
    ip_sport_packet_rate_percentage_str: cdktf.stringToTerraform(struct!.ipSportPacketRatePercentageStr),
    ip_sport_packet_rate_str: cdktf.stringToTerraform(struct!.ipSportPacketRateStr),
    packet_rate: cdktf.numberToTerraform(struct!.packetRate),
    packet_rate_percentage: cdktf.numberToTerraform(struct!.packetRatePercentage),
    packet_rate_percentage_str: cdktf.stringToTerraform(struct!.packetRatePercentageStr),
    packet_rate_str: cdktf.stringToTerraform(struct!.packetRateStr),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    sport_num: cdktf.numberToTerraform(struct!.sportNum),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosNetworkObjectSportAnomalyThresholdIpv6ListStructToHclTerraform(struct?: DdosNetworkObjectSportAnomalyThresholdIpv6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bit_rate: {
      value: cdktf.numberToHclTerraform(struct!.bitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bit_rate_percentage: {
      value: cdktf.numberToHclTerraform(struct!.bitRatePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bit_rate_percentage_str: {
      value: cdktf.stringToHclTerraform(struct!.bitRatePercentageStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bit_rate_str: {
      value: cdktf.stringToHclTerraform(struct!.bitRateStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.ipAddr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_sport_bit_rate: {
      value: cdktf.numberToHclTerraform(struct!.ipSportBitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_sport_bit_rate_percentage: {
      value: cdktf.numberToHclTerraform(struct!.ipSportBitRatePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_sport_bit_rate_percentage_str: {
      value: cdktf.stringToHclTerraform(struct!.ipSportBitRatePercentageStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_sport_bit_rate_str: {
      value: cdktf.stringToHclTerraform(struct!.ipSportBitRateStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_sport_packet_rate: {
      value: cdktf.numberToHclTerraform(struct!.ipSportPacketRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_sport_packet_rate_percentage: {
      value: cdktf.numberToHclTerraform(struct!.ipSportPacketRatePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ip_sport_packet_rate_percentage_str: {
      value: cdktf.stringToHclTerraform(struct!.ipSportPacketRatePercentageStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ip_sport_packet_rate_str: {
      value: cdktf.stringToHclTerraform(struct!.ipSportPacketRateStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_rate: {
      value: cdktf.numberToHclTerraform(struct!.packetRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_rate_percentage: {
      value: cdktf.numberToHclTerraform(struct!.packetRatePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_rate_percentage_str: {
      value: cdktf.stringToHclTerraform(struct!.packetRatePercentageStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_rate_str: {
      value: cdktf.stringToHclTerraform(struct!.packetRateStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sport_num: {
      value: cdktf.numberToHclTerraform(struct!.sportNum),
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

export class DdosNetworkObjectSportAnomalyThresholdIpv6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosNetworkObjectSportAnomalyThresholdIpv6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitRate = this._bitRate;
    }
    if (this._bitRatePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitRatePercentage = this._bitRatePercentage;
    }
    if (this._bitRatePercentageStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitRatePercentageStr = this._bitRatePercentageStr;
    }
    if (this._bitRateStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitRateStr = this._bitRateStr;
    }
    if (this._ipAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipAddr = this._ipAddr;
    }
    if (this._ipSportBitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSportBitRate = this._ipSportBitRate;
    }
    if (this._ipSportBitRatePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSportBitRatePercentage = this._ipSportBitRatePercentage;
    }
    if (this._ipSportBitRatePercentageStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSportBitRatePercentageStr = this._ipSportBitRatePercentageStr;
    }
    if (this._ipSportBitRateStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSportBitRateStr = this._ipSportBitRateStr;
    }
    if (this._ipSportPacketRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSportPacketRate = this._ipSportPacketRate;
    }
    if (this._ipSportPacketRatePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSportPacketRatePercentage = this._ipSportPacketRatePercentage;
    }
    if (this._ipSportPacketRatePercentageStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSportPacketRatePercentageStr = this._ipSportPacketRatePercentageStr;
    }
    if (this._ipSportPacketRateStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipSportPacketRateStr = this._ipSportPacketRateStr;
    }
    if (this._packetRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRate = this._packetRate;
    }
    if (this._packetRatePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRatePercentage = this._packetRatePercentage;
    }
    if (this._packetRatePercentageStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRatePercentageStr = this._packetRatePercentageStr;
    }
    if (this._packetRateStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRateStr = this._packetRateStr;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sportNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sportNum = this._sportNum;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectSportAnomalyThresholdIpv6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bitRate = undefined;
      this._bitRatePercentage = undefined;
      this._bitRatePercentageStr = undefined;
      this._bitRateStr = undefined;
      this._ipAddr = undefined;
      this._ipSportBitRate = undefined;
      this._ipSportBitRatePercentage = undefined;
      this._ipSportBitRatePercentageStr = undefined;
      this._ipSportBitRateStr = undefined;
      this._ipSportPacketRate = undefined;
      this._ipSportPacketRatePercentage = undefined;
      this._ipSportPacketRatePercentageStr = undefined;
      this._ipSportPacketRateStr = undefined;
      this._packetRate = undefined;
      this._packetRatePercentage = undefined;
      this._packetRatePercentageStr = undefined;
      this._packetRateStr = undefined;
      this._protocol = undefined;
      this._sportNum = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bitRate = value.bitRate;
      this._bitRatePercentage = value.bitRatePercentage;
      this._bitRatePercentageStr = value.bitRatePercentageStr;
      this._bitRateStr = value.bitRateStr;
      this._ipAddr = value.ipAddr;
      this._ipSportBitRate = value.ipSportBitRate;
      this._ipSportBitRatePercentage = value.ipSportBitRatePercentage;
      this._ipSportBitRatePercentageStr = value.ipSportBitRatePercentageStr;
      this._ipSportBitRateStr = value.ipSportBitRateStr;
      this._ipSportPacketRate = value.ipSportPacketRate;
      this._ipSportPacketRatePercentage = value.ipSportPacketRatePercentage;
      this._ipSportPacketRatePercentageStr = value.ipSportPacketRatePercentageStr;
      this._ipSportPacketRateStr = value.ipSportPacketRateStr;
      this._packetRate = value.packetRate;
      this._packetRatePercentage = value.packetRatePercentage;
      this._packetRatePercentageStr = value.packetRatePercentageStr;
      this._packetRateStr = value.packetRateStr;
      this._protocol = value.protocol;
      this._sportNum = value.sportNum;
      this._uuid = value.uuid;
    }
  }

  // bit_rate - computed: false, optional: true, required: false
  private _bitRate?: number; 
  public get bitRate() {
    return this.getNumberAttribute('bit_rate');
  }
  public set bitRate(value: number) {
    this._bitRate = value;
  }
  public resetBitRate() {
    this._bitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitRateInput() {
    return this._bitRate;
  }

  // bit_rate_percentage - computed: false, optional: true, required: false
  private _bitRatePercentage?: number; 
  public get bitRatePercentage() {
    return this.getNumberAttribute('bit_rate_percentage');
  }
  public set bitRatePercentage(value: number) {
    this._bitRatePercentage = value;
  }
  public resetBitRatePercentage() {
    this._bitRatePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitRatePercentageInput() {
    return this._bitRatePercentage;
  }

  // bit_rate_percentage_str - computed: false, optional: false, required: true
  private _bitRatePercentageStr?: string; 
  public get bitRatePercentageStr() {
    return this.getStringAttribute('bit_rate_percentage_str');
  }
  public set bitRatePercentageStr(value: string) {
    this._bitRatePercentageStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bitRatePercentageStrInput() {
    return this._bitRatePercentageStr;
  }

  // bit_rate_str - computed: false, optional: false, required: true
  private _bitRateStr?: string; 
  public get bitRateStr() {
    return this.getStringAttribute('bit_rate_str');
  }
  public set bitRateStr(value: string) {
    this._bitRateStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bitRateStrInput() {
    return this._bitRateStr;
  }

  // ip_addr - computed: false, optional: false, required: true
  private _ipAddr?: string; 
  public get ipAddr() {
    return this.getStringAttribute('ip_addr');
  }
  public set ipAddr(value: string) {
    this._ipAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddrInput() {
    return this._ipAddr;
  }

  // ip_sport_bit_rate - computed: false, optional: true, required: false
  private _ipSportBitRate?: number; 
  public get ipSportBitRate() {
    return this.getNumberAttribute('ip_sport_bit_rate');
  }
  public set ipSportBitRate(value: number) {
    this._ipSportBitRate = value;
  }
  public resetIpSportBitRate() {
    this._ipSportBitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSportBitRateInput() {
    return this._ipSportBitRate;
  }

  // ip_sport_bit_rate_percentage - computed: false, optional: true, required: false
  private _ipSportBitRatePercentage?: number; 
  public get ipSportBitRatePercentage() {
    return this.getNumberAttribute('ip_sport_bit_rate_percentage');
  }
  public set ipSportBitRatePercentage(value: number) {
    this._ipSportBitRatePercentage = value;
  }
  public resetIpSportBitRatePercentage() {
    this._ipSportBitRatePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSportBitRatePercentageInput() {
    return this._ipSportBitRatePercentage;
  }

  // ip_sport_bit_rate_percentage_str - computed: false, optional: false, required: true
  private _ipSportBitRatePercentageStr?: string; 
  public get ipSportBitRatePercentageStr() {
    return this.getStringAttribute('ip_sport_bit_rate_percentage_str');
  }
  public set ipSportBitRatePercentageStr(value: string) {
    this._ipSportBitRatePercentageStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSportBitRatePercentageStrInput() {
    return this._ipSportBitRatePercentageStr;
  }

  // ip_sport_bit_rate_str - computed: false, optional: false, required: true
  private _ipSportBitRateStr?: string; 
  public get ipSportBitRateStr() {
    return this.getStringAttribute('ip_sport_bit_rate_str');
  }
  public set ipSportBitRateStr(value: string) {
    this._ipSportBitRateStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSportBitRateStrInput() {
    return this._ipSportBitRateStr;
  }

  // ip_sport_packet_rate - computed: false, optional: true, required: false
  private _ipSportPacketRate?: number; 
  public get ipSportPacketRate() {
    return this.getNumberAttribute('ip_sport_packet_rate');
  }
  public set ipSportPacketRate(value: number) {
    this._ipSportPacketRate = value;
  }
  public resetIpSportPacketRate() {
    this._ipSportPacketRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSportPacketRateInput() {
    return this._ipSportPacketRate;
  }

  // ip_sport_packet_rate_percentage - computed: false, optional: true, required: false
  private _ipSportPacketRatePercentage?: number; 
  public get ipSportPacketRatePercentage() {
    return this.getNumberAttribute('ip_sport_packet_rate_percentage');
  }
  public set ipSportPacketRatePercentage(value: number) {
    this._ipSportPacketRatePercentage = value;
  }
  public resetIpSportPacketRatePercentage() {
    this._ipSportPacketRatePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSportPacketRatePercentageInput() {
    return this._ipSportPacketRatePercentage;
  }

  // ip_sport_packet_rate_percentage_str - computed: false, optional: false, required: true
  private _ipSportPacketRatePercentageStr?: string; 
  public get ipSportPacketRatePercentageStr() {
    return this.getStringAttribute('ip_sport_packet_rate_percentage_str');
  }
  public set ipSportPacketRatePercentageStr(value: string) {
    this._ipSportPacketRatePercentageStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSportPacketRatePercentageStrInput() {
    return this._ipSportPacketRatePercentageStr;
  }

  // ip_sport_packet_rate_str - computed: false, optional: false, required: true
  private _ipSportPacketRateStr?: string; 
  public get ipSportPacketRateStr() {
    return this.getStringAttribute('ip_sport_packet_rate_str');
  }
  public set ipSportPacketRateStr(value: string) {
    this._ipSportPacketRateStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipSportPacketRateStrInput() {
    return this._ipSportPacketRateStr;
  }

  // packet_rate - computed: false, optional: true, required: false
  private _packetRate?: number; 
  public get packetRate() {
    return this.getNumberAttribute('packet_rate');
  }
  public set packetRate(value: number) {
    this._packetRate = value;
  }
  public resetPacketRate() {
    this._packetRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateInput() {
    return this._packetRate;
  }

  // packet_rate_percentage - computed: false, optional: true, required: false
  private _packetRatePercentage?: number; 
  public get packetRatePercentage() {
    return this.getNumberAttribute('packet_rate_percentage');
  }
  public set packetRatePercentage(value: number) {
    this._packetRatePercentage = value;
  }
  public resetPacketRatePercentage() {
    this._packetRatePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRatePercentageInput() {
    return this._packetRatePercentage;
  }

  // packet_rate_percentage_str - computed: false, optional: false, required: true
  private _packetRatePercentageStr?: string; 
  public get packetRatePercentageStr() {
    return this.getStringAttribute('packet_rate_percentage_str');
  }
  public set packetRatePercentageStr(value: string) {
    this._packetRatePercentageStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRatePercentageStrInput() {
    return this._packetRatePercentageStr;
  }

  // packet_rate_str - computed: false, optional: false, required: true
  private _packetRateStr?: string; 
  public get packetRateStr() {
    return this.getStringAttribute('packet_rate_str');
  }
  public set packetRateStr(value: string) {
    this._packetRateStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateStrInput() {
    return this._packetRateStr;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // sport_num - computed: false, optional: false, required: true
  private _sportNum?: number; 
  public get sportNum() {
    return this.getNumberAttribute('sport_num');
  }
  public set sportNum(value: number) {
    this._sportNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sportNumInput() {
    return this._sportNum;
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

export class DdosNetworkObjectSportAnomalyThresholdIpv6ListStructList extends cdktf.ComplexList {
  public internalValue? : DdosNetworkObjectSportAnomalyThresholdIpv6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosNetworkObjectSportAnomalyThresholdIpv6ListStructOutputReference {
    return new DdosNetworkObjectSportAnomalyThresholdIpv6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosNetworkObjectSportAnomalyThresholdPacketRate {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#uuid DdosNetworkObject#uuid}
  */
  readonly uuid?: string;
  /**
  * Packet rate of a source port entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#value DdosNetworkObject#value}
  */
  readonly value?: number;
}

export function ddosNetworkObjectSportAnomalyThresholdPacketRateToTerraform(struct?: DdosNetworkObjectSportAnomalyThresholdPacketRateOutputReference | DdosNetworkObjectSportAnomalyThresholdPacketRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function ddosNetworkObjectSportAnomalyThresholdPacketRateToHclTerraform(struct?: DdosNetworkObjectSportAnomalyThresholdPacketRateOutputReference | DdosNetworkObjectSportAnomalyThresholdPacketRate): any {
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
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectSportAnomalyThresholdPacketRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectSportAnomalyThresholdPacketRate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectSportAnomalyThresholdPacketRate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DdosNetworkObjectSportAnomalyThresholdPacketRatePercentage {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#uuid DdosNetworkObject#uuid}
  */
  readonly uuid?: string;
  /**
  * Percentage of source port entry's parent entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#value DdosNetworkObject#value}
  */
  readonly value?: number;
}

export function ddosNetworkObjectSportAnomalyThresholdPacketRatePercentageToTerraform(struct?: DdosNetworkObjectSportAnomalyThresholdPacketRatePercentageOutputReference | DdosNetworkObjectSportAnomalyThresholdPacketRatePercentage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function ddosNetworkObjectSportAnomalyThresholdPacketRatePercentageToHclTerraform(struct?: DdosNetworkObjectSportAnomalyThresholdPacketRatePercentageOutputReference | DdosNetworkObjectSportAnomalyThresholdPacketRatePercentage): any {
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
    value: {
      value: cdktf.numberToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectSportAnomalyThresholdPacketRatePercentageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectSportAnomalyThresholdPacketRatePercentage | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectSportAnomalyThresholdPacketRatePercentage | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._value = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._value = value.value;
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

  // value - computed: false, optional: true, required: false
  private _value?: number; 
  public get value() {
    return this.getNumberAttribute('value');
  }
  public set value(value: number) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}
export interface DdosNetworkObjectSportAnomalyThresholdSportListStruct {
  /**
  * Bit rate of a source port entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#bit_rate DdosNetworkObject#bit_rate}
  */
  readonly bitRate?: number;
  /**
  * Percentage of source port entry's parent entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#bit_rate_percentage DdosNetworkObject#bit_rate_percentage}
  */
  readonly bitRatePercentage?: number;
  /**
  * 'bit-rate-percentage': Percentage of source port entry's parent entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#bit_rate_percentage_str DdosNetworkObject#bit_rate_percentage_str}
  */
  readonly bitRatePercentageStr: string;
  /**
  * 'bit-rate': Bit rate of a source port entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#bit_rate_str DdosNetworkObject#bit_rate_str}
  */
  readonly bitRateStr: string;
  /**
  * Packet rate of a source port entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#packet_rate DdosNetworkObject#packet_rate}
  */
  readonly packetRate?: number;
  /**
  * Percentage of source port entry's parent entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#packet_rate_percentage DdosNetworkObject#packet_rate_percentage}
  */
  readonly packetRatePercentage?: number;
  /**
  * 'packet-rate-percentage': Percentage of source port entry's parent entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#packet_rate_percentage_str DdosNetworkObject#packet_rate_percentage_str}
  */
  readonly packetRatePercentageStr: string;
  /**
  * 'packet-rate': Packet rate of a source port entry;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#packet_rate_str DdosNetworkObject#packet_rate_str}
  */
  readonly packetRateStr: string;
  /**
  * 'udp': UDP port; 'tcp': TCP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#protocol DdosNetworkObject#protocol}
  */
  readonly protocol: string;
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#sport_num DdosNetworkObject#sport_num}
  */
  readonly sportNum: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#uuid DdosNetworkObject#uuid}
  */
  readonly uuid?: string;
}

export function ddosNetworkObjectSportAnomalyThresholdSportListStructToTerraform(struct?: DdosNetworkObjectSportAnomalyThresholdSportListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bit_rate: cdktf.numberToTerraform(struct!.bitRate),
    bit_rate_percentage: cdktf.numberToTerraform(struct!.bitRatePercentage),
    bit_rate_percentage_str: cdktf.stringToTerraform(struct!.bitRatePercentageStr),
    bit_rate_str: cdktf.stringToTerraform(struct!.bitRateStr),
    packet_rate: cdktf.numberToTerraform(struct!.packetRate),
    packet_rate_percentage: cdktf.numberToTerraform(struct!.packetRatePercentage),
    packet_rate_percentage_str: cdktf.stringToTerraform(struct!.packetRatePercentageStr),
    packet_rate_str: cdktf.stringToTerraform(struct!.packetRateStr),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    sport_num: cdktf.numberToTerraform(struct!.sportNum),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosNetworkObjectSportAnomalyThresholdSportListStructToHclTerraform(struct?: DdosNetworkObjectSportAnomalyThresholdSportListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bit_rate: {
      value: cdktf.numberToHclTerraform(struct!.bitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bit_rate_percentage: {
      value: cdktf.numberToHclTerraform(struct!.bitRatePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    bit_rate_percentage_str: {
      value: cdktf.stringToHclTerraform(struct!.bitRatePercentageStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bit_rate_str: {
      value: cdktf.stringToHclTerraform(struct!.bitRateStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_rate: {
      value: cdktf.numberToHclTerraform(struct!.packetRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_rate_percentage: {
      value: cdktf.numberToHclTerraform(struct!.packetRatePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    packet_rate_percentage_str: {
      value: cdktf.stringToHclTerraform(struct!.packetRatePercentageStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    packet_rate_str: {
      value: cdktf.stringToHclTerraform(struct!.packetRateStr),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sport_num: {
      value: cdktf.numberToHclTerraform(struct!.sportNum),
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

export class DdosNetworkObjectSportAnomalyThresholdSportListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosNetworkObjectSportAnomalyThresholdSportListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitRate = this._bitRate;
    }
    if (this._bitRatePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitRatePercentage = this._bitRatePercentage;
    }
    if (this._bitRatePercentageStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitRatePercentageStr = this._bitRatePercentageStr;
    }
    if (this._bitRateStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitRateStr = this._bitRateStr;
    }
    if (this._packetRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRate = this._packetRate;
    }
    if (this._packetRatePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRatePercentage = this._packetRatePercentage;
    }
    if (this._packetRatePercentageStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRatePercentageStr = this._packetRatePercentageStr;
    }
    if (this._packetRateStr !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRateStr = this._packetRateStr;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._sportNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.sportNum = this._sportNum;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectSportAnomalyThresholdSportListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bitRate = undefined;
      this._bitRatePercentage = undefined;
      this._bitRatePercentageStr = undefined;
      this._bitRateStr = undefined;
      this._packetRate = undefined;
      this._packetRatePercentage = undefined;
      this._packetRatePercentageStr = undefined;
      this._packetRateStr = undefined;
      this._protocol = undefined;
      this._sportNum = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bitRate = value.bitRate;
      this._bitRatePercentage = value.bitRatePercentage;
      this._bitRatePercentageStr = value.bitRatePercentageStr;
      this._bitRateStr = value.bitRateStr;
      this._packetRate = value.packetRate;
      this._packetRatePercentage = value.packetRatePercentage;
      this._packetRatePercentageStr = value.packetRatePercentageStr;
      this._packetRateStr = value.packetRateStr;
      this._protocol = value.protocol;
      this._sportNum = value.sportNum;
      this._uuid = value.uuid;
    }
  }

  // bit_rate - computed: false, optional: true, required: false
  private _bitRate?: number; 
  public get bitRate() {
    return this.getNumberAttribute('bit_rate');
  }
  public set bitRate(value: number) {
    this._bitRate = value;
  }
  public resetBitRate() {
    this._bitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitRateInput() {
    return this._bitRate;
  }

  // bit_rate_percentage - computed: false, optional: true, required: false
  private _bitRatePercentage?: number; 
  public get bitRatePercentage() {
    return this.getNumberAttribute('bit_rate_percentage');
  }
  public set bitRatePercentage(value: number) {
    this._bitRatePercentage = value;
  }
  public resetBitRatePercentage() {
    this._bitRatePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitRatePercentageInput() {
    return this._bitRatePercentage;
  }

  // bit_rate_percentage_str - computed: false, optional: false, required: true
  private _bitRatePercentageStr?: string; 
  public get bitRatePercentageStr() {
    return this.getStringAttribute('bit_rate_percentage_str');
  }
  public set bitRatePercentageStr(value: string) {
    this._bitRatePercentageStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bitRatePercentageStrInput() {
    return this._bitRatePercentageStr;
  }

  // bit_rate_str - computed: false, optional: false, required: true
  private _bitRateStr?: string; 
  public get bitRateStr() {
    return this.getStringAttribute('bit_rate_str');
  }
  public set bitRateStr(value: string) {
    this._bitRateStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get bitRateStrInput() {
    return this._bitRateStr;
  }

  // packet_rate - computed: false, optional: true, required: false
  private _packetRate?: number; 
  public get packetRate() {
    return this.getNumberAttribute('packet_rate');
  }
  public set packetRate(value: number) {
    this._packetRate = value;
  }
  public resetPacketRate() {
    this._packetRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateInput() {
    return this._packetRate;
  }

  // packet_rate_percentage - computed: false, optional: true, required: false
  private _packetRatePercentage?: number; 
  public get packetRatePercentage() {
    return this.getNumberAttribute('packet_rate_percentage');
  }
  public set packetRatePercentage(value: number) {
    this._packetRatePercentage = value;
  }
  public resetPacketRatePercentage() {
    this._packetRatePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRatePercentageInput() {
    return this._packetRatePercentage;
  }

  // packet_rate_percentage_str - computed: false, optional: false, required: true
  private _packetRatePercentageStr?: string; 
  public get packetRatePercentageStr() {
    return this.getStringAttribute('packet_rate_percentage_str');
  }
  public set packetRatePercentageStr(value: string) {
    this._packetRatePercentageStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRatePercentageStrInput() {
    return this._packetRatePercentageStr;
  }

  // packet_rate_str - computed: false, optional: false, required: true
  private _packetRateStr?: string; 
  public get packetRateStr() {
    return this.getStringAttribute('packet_rate_str');
  }
  public set packetRateStr(value: string) {
    this._packetRateStr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateStrInput() {
    return this._packetRateStr;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // sport_num - computed: false, optional: false, required: true
  private _sportNum?: number; 
  public get sportNum() {
    return this.getNumberAttribute('sport_num');
  }
  public set sportNum(value: number) {
    this._sportNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sportNumInput() {
    return this._sportNum;
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

export class DdosNetworkObjectSportAnomalyThresholdSportListStructList extends cdktf.ComplexList {
  public internalValue? : DdosNetworkObjectSportAnomalyThresholdSportListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosNetworkObjectSportAnomalyThresholdSportListStructOutputReference {
    return new DdosNetworkObjectSportAnomalyThresholdSportListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosNetworkObjectSportAnomalyThreshold {
  /**
  * bit_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#bit_rate DdosNetworkObject#bit_rate}
  */
  readonly bitRate?: DdosNetworkObjectSportAnomalyThresholdBitRate;
  /**
  * bit_rate_percentage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#bit_rate_percentage DdosNetworkObject#bit_rate_percentage}
  */
  readonly bitRatePercentage?: DdosNetworkObjectSportAnomalyThresholdBitRatePercentage;
  /**
  * ip_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#ip_list DdosNetworkObject#ip_list}
  */
  readonly ipList?: DdosNetworkObjectSportAnomalyThresholdIpListStruct[] | cdktf.IResolvable;
  /**
  * ipv6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#ipv6_list DdosNetworkObject#ipv6_list}
  */
  readonly ipv6List?: DdosNetworkObjectSportAnomalyThresholdIpv6ListStruct[] | cdktf.IResolvable;
  /**
  * packet_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#packet_rate DdosNetworkObject#packet_rate}
  */
  readonly packetRate?: DdosNetworkObjectSportAnomalyThresholdPacketRate;
  /**
  * packet_rate_percentage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#packet_rate_percentage DdosNetworkObject#packet_rate_percentage}
  */
  readonly packetRatePercentage?: DdosNetworkObjectSportAnomalyThresholdPacketRatePercentage;
  /**
  * sport_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#sport_list DdosNetworkObject#sport_list}
  */
  readonly sportList?: DdosNetworkObjectSportAnomalyThresholdSportListStruct[] | cdktf.IResolvable;
}

export function ddosNetworkObjectSportAnomalyThresholdToTerraform(struct?: DdosNetworkObjectSportAnomalyThresholdOutputReference | DdosNetworkObjectSportAnomalyThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bit_rate: ddosNetworkObjectSportAnomalyThresholdBitRateToTerraform(struct!.bitRate),
    bit_rate_percentage: ddosNetworkObjectSportAnomalyThresholdBitRatePercentageToTerraform(struct!.bitRatePercentage),
    ip_list: cdktf.listMapper(ddosNetworkObjectSportAnomalyThresholdIpListStructToTerraform, true)(struct!.ipList),
    ipv6_list: cdktf.listMapper(ddosNetworkObjectSportAnomalyThresholdIpv6ListStructToTerraform, true)(struct!.ipv6List),
    packet_rate: ddosNetworkObjectSportAnomalyThresholdPacketRateToTerraform(struct!.packetRate),
    packet_rate_percentage: ddosNetworkObjectSportAnomalyThresholdPacketRatePercentageToTerraform(struct!.packetRatePercentage),
    sport_list: cdktf.listMapper(ddosNetworkObjectSportAnomalyThresholdSportListStructToTerraform, true)(struct!.sportList),
  }
}


export function ddosNetworkObjectSportAnomalyThresholdToHclTerraform(struct?: DdosNetworkObjectSportAnomalyThresholdOutputReference | DdosNetworkObjectSportAnomalyThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bit_rate: {
      value: ddosNetworkObjectSportAnomalyThresholdBitRateToHclTerraform(struct!.bitRate),
      isBlock: true,
      type: "list",
      storageClassType: "DdosNetworkObjectSportAnomalyThresholdBitRateList",
    },
    bit_rate_percentage: {
      value: ddosNetworkObjectSportAnomalyThresholdBitRatePercentageToHclTerraform(struct!.bitRatePercentage),
      isBlock: true,
      type: "list",
      storageClassType: "DdosNetworkObjectSportAnomalyThresholdBitRatePercentageList",
    },
    ip_list: {
      value: cdktf.listMapperHcl(ddosNetworkObjectSportAnomalyThresholdIpListStructToHclTerraform, true)(struct!.ipList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosNetworkObjectSportAnomalyThresholdIpListStructList",
    },
    ipv6_list: {
      value: cdktf.listMapperHcl(ddosNetworkObjectSportAnomalyThresholdIpv6ListStructToHclTerraform, true)(struct!.ipv6List),
      isBlock: true,
      type: "list",
      storageClassType: "DdosNetworkObjectSportAnomalyThresholdIpv6ListStructList",
    },
    packet_rate: {
      value: ddosNetworkObjectSportAnomalyThresholdPacketRateToHclTerraform(struct!.packetRate),
      isBlock: true,
      type: "list",
      storageClassType: "DdosNetworkObjectSportAnomalyThresholdPacketRateList",
    },
    packet_rate_percentage: {
      value: ddosNetworkObjectSportAnomalyThresholdPacketRatePercentageToHclTerraform(struct!.packetRatePercentage),
      isBlock: true,
      type: "list",
      storageClassType: "DdosNetworkObjectSportAnomalyThresholdPacketRatePercentageList",
    },
    sport_list: {
      value: cdktf.listMapperHcl(ddosNetworkObjectSportAnomalyThresholdSportListStructToHclTerraform, true)(struct!.sportList),
      isBlock: true,
      type: "list",
      storageClassType: "DdosNetworkObjectSportAnomalyThresholdSportListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectSportAnomalyThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectSportAnomalyThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bitRate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitRate = this._bitRate?.internalValue;
    }
    if (this._bitRatePercentage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bitRatePercentage = this._bitRatePercentage?.internalValue;
    }
    if (this._ipList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipList = this._ipList?.internalValue;
    }
    if (this._ipv6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6List = this._ipv6List?.internalValue;
    }
    if (this._packetRate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRate = this._packetRate?.internalValue;
    }
    if (this._packetRatePercentage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRatePercentage = this._packetRatePercentage?.internalValue;
    }
    if (this._sportList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sportList = this._sportList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectSportAnomalyThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitRate.internalValue = undefined;
      this._bitRatePercentage.internalValue = undefined;
      this._ipList.internalValue = undefined;
      this._ipv6List.internalValue = undefined;
      this._packetRate.internalValue = undefined;
      this._packetRatePercentage.internalValue = undefined;
      this._sportList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitRate.internalValue = value.bitRate;
      this._bitRatePercentage.internalValue = value.bitRatePercentage;
      this._ipList.internalValue = value.ipList;
      this._ipv6List.internalValue = value.ipv6List;
      this._packetRate.internalValue = value.packetRate;
      this._packetRatePercentage.internalValue = value.packetRatePercentage;
      this._sportList.internalValue = value.sportList;
    }
  }

  // bit_rate - computed: false, optional: true, required: false
  private _bitRate = new DdosNetworkObjectSportAnomalyThresholdBitRateOutputReference(this, "bit_rate");
  public get bitRate() {
    return this._bitRate;
  }
  public putBitRate(value: DdosNetworkObjectSportAnomalyThresholdBitRate) {
    this._bitRate.internalValue = value;
  }
  public resetBitRate() {
    this._bitRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitRateInput() {
    return this._bitRate.internalValue;
  }

  // bit_rate_percentage - computed: false, optional: true, required: false
  private _bitRatePercentage = new DdosNetworkObjectSportAnomalyThresholdBitRatePercentageOutputReference(this, "bit_rate_percentage");
  public get bitRatePercentage() {
    return this._bitRatePercentage;
  }
  public putBitRatePercentage(value: DdosNetworkObjectSportAnomalyThresholdBitRatePercentage) {
    this._bitRatePercentage.internalValue = value;
  }
  public resetBitRatePercentage() {
    this._bitRatePercentage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitRatePercentageInput() {
    return this._bitRatePercentage.internalValue;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList = new DdosNetworkObjectSportAnomalyThresholdIpListStructList(this, "ip_list", false);
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: DdosNetworkObjectSportAnomalyThresholdIpListStruct[] | cdktf.IResolvable) {
    this._ipList.internalValue = value;
  }
  public resetIpList() {
    this._ipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }

  // ipv6_list - computed: false, optional: true, required: false
  private _ipv6List = new DdosNetworkObjectSportAnomalyThresholdIpv6ListStructList(this, "ipv6_list", false);
  public get ipv6List() {
    return this._ipv6List;
  }
  public putIpv6List(value: DdosNetworkObjectSportAnomalyThresholdIpv6ListStruct[] | cdktf.IResolvable) {
    this._ipv6List.internalValue = value;
  }
  public resetIpv6List() {
    this._ipv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ListInput() {
    return this._ipv6List.internalValue;
  }

  // packet_rate - computed: false, optional: true, required: false
  private _packetRate = new DdosNetworkObjectSportAnomalyThresholdPacketRateOutputReference(this, "packet_rate");
  public get packetRate() {
    return this._packetRate;
  }
  public putPacketRate(value: DdosNetworkObjectSportAnomalyThresholdPacketRate) {
    this._packetRate.internalValue = value;
  }
  public resetPacketRate() {
    this._packetRate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRateInput() {
    return this._packetRate.internalValue;
  }

  // packet_rate_percentage - computed: false, optional: true, required: false
  private _packetRatePercentage = new DdosNetworkObjectSportAnomalyThresholdPacketRatePercentageOutputReference(this, "packet_rate_percentage");
  public get packetRatePercentage() {
    return this._packetRatePercentage;
  }
  public putPacketRatePercentage(value: DdosNetworkObjectSportAnomalyThresholdPacketRatePercentage) {
    this._packetRatePercentage.internalValue = value;
  }
  public resetPacketRatePercentage() {
    this._packetRatePercentage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRatePercentageInput() {
    return this._packetRatePercentage.internalValue;
  }

  // sport_list - computed: false, optional: true, required: false
  private _sportList = new DdosNetworkObjectSportAnomalyThresholdSportListStructList(this, "sport_list", false);
  public get sportList() {
    return this._sportList;
  }
  public putSportList(value: DdosNetworkObjectSportAnomalyThresholdSportListStruct[] | cdktf.IResolvable) {
    this._sportList.internalValue = value;
  }
  public resetSportList() {
    this._sportList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sportListInput() {
    return this._sportList.internalValue;
  }
}
export interface DdosNetworkObjectSportDiscoveryThreshold {
  /**
  * Percentage of the bit rate of source port's parent entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#sport_discovery_bit_rate_percentage DdosNetworkObject#sport_discovery_bit_rate_percentage}
  */
  readonly sportDiscoveryBitRatePercentage?: number;
  /**
  * Percentage of the bit rate of undiscovered source ports (default: 10)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#sport_heavy_hitter_percentage DdosNetworkObject#sport_heavy_hitter_percentage}
  */
  readonly sportHeavyHitterPercentage?: number;
}

export function ddosNetworkObjectSportDiscoveryThresholdToTerraform(struct?: DdosNetworkObjectSportDiscoveryThresholdOutputReference | DdosNetworkObjectSportDiscoveryThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sport_discovery_bit_rate_percentage: cdktf.numberToTerraform(struct!.sportDiscoveryBitRatePercentage),
    sport_heavy_hitter_percentage: cdktf.numberToTerraform(struct!.sportHeavyHitterPercentage),
  }
}


export function ddosNetworkObjectSportDiscoveryThresholdToHclTerraform(struct?: DdosNetworkObjectSportDiscoveryThresholdOutputReference | DdosNetworkObjectSportDiscoveryThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sport_discovery_bit_rate_percentage: {
      value: cdktf.numberToHclTerraform(struct!.sportDiscoveryBitRatePercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sport_heavy_hitter_percentage: {
      value: cdktf.numberToHclTerraform(struct!.sportHeavyHitterPercentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectSportDiscoveryThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectSportDiscoveryThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sportDiscoveryBitRatePercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.sportDiscoveryBitRatePercentage = this._sportDiscoveryBitRatePercentage;
    }
    if (this._sportHeavyHitterPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.sportHeavyHitterPercentage = this._sportHeavyHitterPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectSportDiscoveryThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sportDiscoveryBitRatePercentage = undefined;
      this._sportHeavyHitterPercentage = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sportDiscoveryBitRatePercentage = value.sportDiscoveryBitRatePercentage;
      this._sportHeavyHitterPercentage = value.sportHeavyHitterPercentage;
    }
  }

  // sport_discovery_bit_rate_percentage - computed: false, optional: true, required: false
  private _sportDiscoveryBitRatePercentage?: number; 
  public get sportDiscoveryBitRatePercentage() {
    return this.getNumberAttribute('sport_discovery_bit_rate_percentage');
  }
  public set sportDiscoveryBitRatePercentage(value: number) {
    this._sportDiscoveryBitRatePercentage = value;
  }
  public resetSportDiscoveryBitRatePercentage() {
    this._sportDiscoveryBitRatePercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sportDiscoveryBitRatePercentageInput() {
    return this._sportDiscoveryBitRatePercentage;
  }

  // sport_heavy_hitter_percentage - computed: false, optional: true, required: false
  private _sportHeavyHitterPercentage?: number; 
  public get sportHeavyHitterPercentage() {
    return this.getNumberAttribute('sport_heavy_hitter_percentage');
  }
  public set sportHeavyHitterPercentage(value: number) {
    this._sportHeavyHitterPercentage = value;
  }
  public resetSportHeavyHitterPercentage() {
    this._sportHeavyHitterPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sportHeavyHitterPercentageInput() {
    return this._sportHeavyHitterPercentage;
  }
}
export interface DdosNetworkObjectSportListStruct {
  /**
  * Port Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#port_num DdosNetworkObject#port_num}
  */
  readonly portNum: number;
  /**
  * 'udp': UDP port; 'tcp': TCP Port;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#protocol DdosNetworkObject#protocol}
  */
  readonly protocol: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#uuid DdosNetworkObject#uuid}
  */
  readonly uuid?: string;
}

export function ddosNetworkObjectSportListStructToTerraform(struct?: DdosNetworkObjectSportListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    port_num: cdktf.numberToTerraform(struct!.portNum),
    protocol: cdktf.stringToTerraform(struct!.protocol),
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosNetworkObjectSportListStructToHclTerraform(struct?: DdosNetworkObjectSportListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    port_num: {
      value: cdktf.numberToHclTerraform(struct!.portNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    protocol: {
      value: cdktf.stringToHclTerraform(struct!.protocol),
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

export class DdosNetworkObjectSportListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosNetworkObjectSportListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._portNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.portNum = this._portNum;
    }
    if (this._protocol !== undefined) {
      hasAnyValues = true;
      internalValueResult.protocol = this._protocol;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectSportListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._portNum = undefined;
      this._protocol = undefined;
      this._uuid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._portNum = value.portNum;
      this._protocol = value.protocol;
      this._uuid = value.uuid;
    }
  }

  // port_num - computed: false, optional: false, required: true
  private _portNum?: number; 
  public get portNum() {
    return this.getNumberAttribute('port_num');
  }
  public set portNum(value: number) {
    this._portNum = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portNumInput() {
    return this._portNum;
  }

  // protocol - computed: false, optional: false, required: true
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
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

export class DdosNetworkObjectSportListStructList extends cdktf.ComplexList {
  public internalValue? : DdosNetworkObjectSportListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosNetworkObjectSportListStructOutputReference {
    return new DdosNetworkObjectSportListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosNetworkObjectStaticAutoBreakDownThreshold {
  /**
  * packet rate of current node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#network_pkt_rate DdosNetworkObject#network_pkt_rate}
  */
  readonly networkPktRate?: number;
}

export function ddosNetworkObjectStaticAutoBreakDownThresholdToTerraform(struct?: DdosNetworkObjectStaticAutoBreakDownThresholdOutputReference | DdosNetworkObjectStaticAutoBreakDownThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_pkt_rate: cdktf.numberToTerraform(struct!.networkPktRate),
  }
}


export function ddosNetworkObjectStaticAutoBreakDownThresholdToHclTerraform(struct?: DdosNetworkObjectStaticAutoBreakDownThresholdOutputReference | DdosNetworkObjectStaticAutoBreakDownThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    network_pkt_rate: {
      value: cdktf.numberToHclTerraform(struct!.networkPktRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectStaticAutoBreakDownThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectStaticAutoBreakDownThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._networkPktRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.networkPktRate = this._networkPktRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectStaticAutoBreakDownThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._networkPktRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._networkPktRate = value.networkPktRate;
    }
  }

  // network_pkt_rate - computed: false, optional: true, required: false
  private _networkPktRate?: number; 
  public get networkPktRate() {
    return this.getNumberAttribute('network_pkt_rate');
  }
  public set networkPktRate(value: number) {
    this._networkPktRate = value;
  }
  public resetNetworkPktRate() {
    this._networkPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkPktRateInput() {
    return this._networkPktRate;
  }
}
export interface DdosNetworkObjectSubNetworkSubNetworkV4ListBreakdownSubnetThreshold {
  /**
  * Bit rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#breakdown_subnet_bit_rate DdosNetworkObject#breakdown_subnet_bit_rate}
  */
  readonly breakdownSubnetBitRate?: number;
  /**
  * Packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#breakdown_subnet_pkt_rate DdosNetworkObject#breakdown_subnet_pkt_rate}
  */
  readonly breakdownSubnetPktRate?: number;
}

export function ddosNetworkObjectSubNetworkSubNetworkV4ListBreakdownSubnetThresholdToTerraform(struct?: DdosNetworkObjectSubNetworkSubNetworkV4ListBreakdownSubnetThresholdOutputReference | DdosNetworkObjectSubNetworkSubNetworkV4ListBreakdownSubnetThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    breakdown_subnet_bit_rate: cdktf.numberToTerraform(struct!.breakdownSubnetBitRate),
    breakdown_subnet_pkt_rate: cdktf.numberToTerraform(struct!.breakdownSubnetPktRate),
  }
}


export function ddosNetworkObjectSubNetworkSubNetworkV4ListBreakdownSubnetThresholdToHclTerraform(struct?: DdosNetworkObjectSubNetworkSubNetworkV4ListBreakdownSubnetThresholdOutputReference | DdosNetworkObjectSubNetworkSubNetworkV4ListBreakdownSubnetThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    breakdown_subnet_bit_rate: {
      value: cdktf.numberToHclTerraform(struct!.breakdownSubnetBitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    breakdown_subnet_pkt_rate: {
      value: cdktf.numberToHclTerraform(struct!.breakdownSubnetPktRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectSubNetworkSubNetworkV4ListBreakdownSubnetThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectSubNetworkSubNetworkV4ListBreakdownSubnetThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._breakdownSubnetBitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.breakdownSubnetBitRate = this._breakdownSubnetBitRate;
    }
    if (this._breakdownSubnetPktRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.breakdownSubnetPktRate = this._breakdownSubnetPktRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectSubNetworkSubNetworkV4ListBreakdownSubnetThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._breakdownSubnetBitRate = undefined;
      this._breakdownSubnetPktRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._breakdownSubnetBitRate = value.breakdownSubnetBitRate;
      this._breakdownSubnetPktRate = value.breakdownSubnetPktRate;
    }
  }

  // breakdown_subnet_bit_rate - computed: false, optional: true, required: false
  private _breakdownSubnetBitRate?: number; 
  public get breakdownSubnetBitRate() {
    return this.getNumberAttribute('breakdown_subnet_bit_rate');
  }
  public set breakdownSubnetBitRate(value: number) {
    this._breakdownSubnetBitRate = value;
  }
  public resetBreakdownSubnetBitRate() {
    this._breakdownSubnetBitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakdownSubnetBitRateInput() {
    return this._breakdownSubnetBitRate;
  }

  // breakdown_subnet_pkt_rate - computed: false, optional: true, required: false
  private _breakdownSubnetPktRate?: number; 
  public get breakdownSubnetPktRate() {
    return this.getNumberAttribute('breakdown_subnet_pkt_rate');
  }
  public set breakdownSubnetPktRate(value: number) {
    this._breakdownSubnetPktRate = value;
  }
  public resetBreakdownSubnetPktRate() {
    this._breakdownSubnetPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakdownSubnetPktRateInput() {
    return this._breakdownSubnetPktRate;
  }
}
export interface DdosNetworkObjectSubNetworkSubNetworkV4ListHostAnomalyThreshold {
  /**
  * Bit rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_bit_rate_threshold DdosNetworkObject#static_bit_rate_threshold}
  */
  readonly staticBitRateThreshold?: number;
  /**
  * FIN packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_fin_rate_threshold DdosNetworkObject#static_fin_rate_threshold}
  */
  readonly staticFinRateThreshold?: number;
  /**
  * Flow count of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_flow_count_threshold DdosNetworkObject#static_flow_count_threshold}
  */
  readonly staticFlowCountThreshold?: number;
  /**
  * ICMP packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_icmp_pkt_rate_threshold DdosNetworkObject#static_icmp_pkt_rate_threshold}
  */
  readonly staticIcmpPktRateThreshold?: number;
  /**
  * Packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_pkt_rate_threshold DdosNetworkObject#static_pkt_rate_threshold}
  */
  readonly staticPktRateThreshold?: number;
  /**
  * Bit rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_rev_bit_rate_threshold DdosNetworkObject#static_rev_bit_rate_threshold}
  */
  readonly staticRevBitRateThreshold?: number;
  /**
  * Packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_rev_pkt_rate_threshold DdosNetworkObject#static_rev_pkt_rate_threshold}
  */
  readonly staticRevPktRateThreshold?: number;
  /**
  * RST packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_rst_rate_threshold DdosNetworkObject#static_rst_rate_threshold}
  */
  readonly staticRstRateThreshold?: number;
  /**
  * SYN packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_syn_rate_threshold DdosNetworkObject#static_syn_rate_threshold}
  */
  readonly staticSynRateThreshold?: number;
  /**
  * TCP packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_tcp_pkt_rate_threshold DdosNetworkObject#static_tcp_pkt_rate_threshold}
  */
  readonly staticTcpPktRateThreshold?: number;
  /**
  * UDP packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_udp_pkt_rate_threshold DdosNetworkObject#static_udp_pkt_rate_threshold}
  */
  readonly staticUdpPktRateThreshold?: number;
  /**
  * Bit rate of per undiscovered host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_undiscovered_host_bit_rate_threshold DdosNetworkObject#static_undiscovered_host_bit_rate_threshold}
  */
  readonly staticUndiscoveredHostBitRateThreshold?: number;
  /**
  * packet rate of per undiscovered host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_undiscovered_host_pkt_rate_threshold DdosNetworkObject#static_undiscovered_host_pkt_rate_threshold}
  */
  readonly staticUndiscoveredHostPktRateThreshold?: number;
  /**
  * Undiscovered packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_undiscovered_pkt_rate_threshold DdosNetworkObject#static_undiscovered_pkt_rate_threshold}
  */
  readonly staticUndiscoveredPktRateThreshold?: number;
}

export function ddosNetworkObjectSubNetworkSubNetworkV4ListHostAnomalyThresholdToTerraform(struct?: DdosNetworkObjectSubNetworkSubNetworkV4ListHostAnomalyThresholdOutputReference | DdosNetworkObjectSubNetworkSubNetworkV4ListHostAnomalyThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_bit_rate_threshold: cdktf.numberToTerraform(struct!.staticBitRateThreshold),
    static_fin_rate_threshold: cdktf.numberToTerraform(struct!.staticFinRateThreshold),
    static_flow_count_threshold: cdktf.numberToTerraform(struct!.staticFlowCountThreshold),
    static_icmp_pkt_rate_threshold: cdktf.numberToTerraform(struct!.staticIcmpPktRateThreshold),
    static_pkt_rate_threshold: cdktf.numberToTerraform(struct!.staticPktRateThreshold),
    static_rev_bit_rate_threshold: cdktf.numberToTerraform(struct!.staticRevBitRateThreshold),
    static_rev_pkt_rate_threshold: cdktf.numberToTerraform(struct!.staticRevPktRateThreshold),
    static_rst_rate_threshold: cdktf.numberToTerraform(struct!.staticRstRateThreshold),
    static_syn_rate_threshold: cdktf.numberToTerraform(struct!.staticSynRateThreshold),
    static_tcp_pkt_rate_threshold: cdktf.numberToTerraform(struct!.staticTcpPktRateThreshold),
    static_udp_pkt_rate_threshold: cdktf.numberToTerraform(struct!.staticUdpPktRateThreshold),
    static_undiscovered_host_bit_rate_threshold: cdktf.numberToTerraform(struct!.staticUndiscoveredHostBitRateThreshold),
    static_undiscovered_host_pkt_rate_threshold: cdktf.numberToTerraform(struct!.staticUndiscoveredHostPktRateThreshold),
    static_undiscovered_pkt_rate_threshold: cdktf.numberToTerraform(struct!.staticUndiscoveredPktRateThreshold),
  }
}


export function ddosNetworkObjectSubNetworkSubNetworkV4ListHostAnomalyThresholdToHclTerraform(struct?: DdosNetworkObjectSubNetworkSubNetworkV4ListHostAnomalyThresholdOutputReference | DdosNetworkObjectSubNetworkSubNetworkV4ListHostAnomalyThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_bit_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticBitRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_fin_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticFinRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_flow_count_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticFlowCountThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_icmp_pkt_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticIcmpPktRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_pkt_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticPktRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_rev_bit_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticRevBitRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_rev_pkt_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticRevPktRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_rst_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticRstRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_syn_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticSynRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_tcp_pkt_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticTcpPktRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_udp_pkt_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticUdpPktRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_undiscovered_host_bit_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticUndiscoveredHostBitRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_undiscovered_host_pkt_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticUndiscoveredHostPktRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_undiscovered_pkt_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticUndiscoveredPktRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectSubNetworkSubNetworkV4ListHostAnomalyThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectSubNetworkSubNetworkV4ListHostAnomalyThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticBitRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticBitRateThreshold = this._staticBitRateThreshold;
    }
    if (this._staticFinRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticFinRateThreshold = this._staticFinRateThreshold;
    }
    if (this._staticFlowCountThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticFlowCountThreshold = this._staticFlowCountThreshold;
    }
    if (this._staticIcmpPktRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIcmpPktRateThreshold = this._staticIcmpPktRateThreshold;
    }
    if (this._staticPktRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticPktRateThreshold = this._staticPktRateThreshold;
    }
    if (this._staticRevBitRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRevBitRateThreshold = this._staticRevBitRateThreshold;
    }
    if (this._staticRevPktRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRevPktRateThreshold = this._staticRevPktRateThreshold;
    }
    if (this._staticRstRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRstRateThreshold = this._staticRstRateThreshold;
    }
    if (this._staticSynRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticSynRateThreshold = this._staticSynRateThreshold;
    }
    if (this._staticTcpPktRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticTcpPktRateThreshold = this._staticTcpPktRateThreshold;
    }
    if (this._staticUdpPktRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticUdpPktRateThreshold = this._staticUdpPktRateThreshold;
    }
    if (this._staticUndiscoveredHostBitRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticUndiscoveredHostBitRateThreshold = this._staticUndiscoveredHostBitRateThreshold;
    }
    if (this._staticUndiscoveredHostPktRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticUndiscoveredHostPktRateThreshold = this._staticUndiscoveredHostPktRateThreshold;
    }
    if (this._staticUndiscoveredPktRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticUndiscoveredPktRateThreshold = this._staticUndiscoveredPktRateThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectSubNetworkSubNetworkV4ListHostAnomalyThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticBitRateThreshold = undefined;
      this._staticFinRateThreshold = undefined;
      this._staticFlowCountThreshold = undefined;
      this._staticIcmpPktRateThreshold = undefined;
      this._staticPktRateThreshold = undefined;
      this._staticRevBitRateThreshold = undefined;
      this._staticRevPktRateThreshold = undefined;
      this._staticRstRateThreshold = undefined;
      this._staticSynRateThreshold = undefined;
      this._staticTcpPktRateThreshold = undefined;
      this._staticUdpPktRateThreshold = undefined;
      this._staticUndiscoveredHostBitRateThreshold = undefined;
      this._staticUndiscoveredHostPktRateThreshold = undefined;
      this._staticUndiscoveredPktRateThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticBitRateThreshold = value.staticBitRateThreshold;
      this._staticFinRateThreshold = value.staticFinRateThreshold;
      this._staticFlowCountThreshold = value.staticFlowCountThreshold;
      this._staticIcmpPktRateThreshold = value.staticIcmpPktRateThreshold;
      this._staticPktRateThreshold = value.staticPktRateThreshold;
      this._staticRevBitRateThreshold = value.staticRevBitRateThreshold;
      this._staticRevPktRateThreshold = value.staticRevPktRateThreshold;
      this._staticRstRateThreshold = value.staticRstRateThreshold;
      this._staticSynRateThreshold = value.staticSynRateThreshold;
      this._staticTcpPktRateThreshold = value.staticTcpPktRateThreshold;
      this._staticUdpPktRateThreshold = value.staticUdpPktRateThreshold;
      this._staticUndiscoveredHostBitRateThreshold = value.staticUndiscoveredHostBitRateThreshold;
      this._staticUndiscoveredHostPktRateThreshold = value.staticUndiscoveredHostPktRateThreshold;
      this._staticUndiscoveredPktRateThreshold = value.staticUndiscoveredPktRateThreshold;
    }
  }

  // static_bit_rate_threshold - computed: false, optional: true, required: false
  private _staticBitRateThreshold?: number; 
  public get staticBitRateThreshold() {
    return this.getNumberAttribute('static_bit_rate_threshold');
  }
  public set staticBitRateThreshold(value: number) {
    this._staticBitRateThreshold = value;
  }
  public resetStaticBitRateThreshold() {
    this._staticBitRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticBitRateThresholdInput() {
    return this._staticBitRateThreshold;
  }

  // static_fin_rate_threshold - computed: false, optional: true, required: false
  private _staticFinRateThreshold?: number; 
  public get staticFinRateThreshold() {
    return this.getNumberAttribute('static_fin_rate_threshold');
  }
  public set staticFinRateThreshold(value: number) {
    this._staticFinRateThreshold = value;
  }
  public resetStaticFinRateThreshold() {
    this._staticFinRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticFinRateThresholdInput() {
    return this._staticFinRateThreshold;
  }

  // static_flow_count_threshold - computed: false, optional: true, required: false
  private _staticFlowCountThreshold?: number; 
  public get staticFlowCountThreshold() {
    return this.getNumberAttribute('static_flow_count_threshold');
  }
  public set staticFlowCountThreshold(value: number) {
    this._staticFlowCountThreshold = value;
  }
  public resetStaticFlowCountThreshold() {
    this._staticFlowCountThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticFlowCountThresholdInput() {
    return this._staticFlowCountThreshold;
  }

  // static_icmp_pkt_rate_threshold - computed: false, optional: true, required: false
  private _staticIcmpPktRateThreshold?: number; 
  public get staticIcmpPktRateThreshold() {
    return this.getNumberAttribute('static_icmp_pkt_rate_threshold');
  }
  public set staticIcmpPktRateThreshold(value: number) {
    this._staticIcmpPktRateThreshold = value;
  }
  public resetStaticIcmpPktRateThreshold() {
    this._staticIcmpPktRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIcmpPktRateThresholdInput() {
    return this._staticIcmpPktRateThreshold;
  }

  // static_pkt_rate_threshold - computed: false, optional: true, required: false
  private _staticPktRateThreshold?: number; 
  public get staticPktRateThreshold() {
    return this.getNumberAttribute('static_pkt_rate_threshold');
  }
  public set staticPktRateThreshold(value: number) {
    this._staticPktRateThreshold = value;
  }
  public resetStaticPktRateThreshold() {
    this._staticPktRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticPktRateThresholdInput() {
    return this._staticPktRateThreshold;
  }

  // static_rev_bit_rate_threshold - computed: false, optional: true, required: false
  private _staticRevBitRateThreshold?: number; 
  public get staticRevBitRateThreshold() {
    return this.getNumberAttribute('static_rev_bit_rate_threshold');
  }
  public set staticRevBitRateThreshold(value: number) {
    this._staticRevBitRateThreshold = value;
  }
  public resetStaticRevBitRateThreshold() {
    this._staticRevBitRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRevBitRateThresholdInput() {
    return this._staticRevBitRateThreshold;
  }

  // static_rev_pkt_rate_threshold - computed: false, optional: true, required: false
  private _staticRevPktRateThreshold?: number; 
  public get staticRevPktRateThreshold() {
    return this.getNumberAttribute('static_rev_pkt_rate_threshold');
  }
  public set staticRevPktRateThreshold(value: number) {
    this._staticRevPktRateThreshold = value;
  }
  public resetStaticRevPktRateThreshold() {
    this._staticRevPktRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRevPktRateThresholdInput() {
    return this._staticRevPktRateThreshold;
  }

  // static_rst_rate_threshold - computed: false, optional: true, required: false
  private _staticRstRateThreshold?: number; 
  public get staticRstRateThreshold() {
    return this.getNumberAttribute('static_rst_rate_threshold');
  }
  public set staticRstRateThreshold(value: number) {
    this._staticRstRateThreshold = value;
  }
  public resetStaticRstRateThreshold() {
    this._staticRstRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRstRateThresholdInput() {
    return this._staticRstRateThreshold;
  }

  // static_syn_rate_threshold - computed: false, optional: true, required: false
  private _staticSynRateThreshold?: number; 
  public get staticSynRateThreshold() {
    return this.getNumberAttribute('static_syn_rate_threshold');
  }
  public set staticSynRateThreshold(value: number) {
    this._staticSynRateThreshold = value;
  }
  public resetStaticSynRateThreshold() {
    this._staticSynRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticSynRateThresholdInput() {
    return this._staticSynRateThreshold;
  }

  // static_tcp_pkt_rate_threshold - computed: false, optional: true, required: false
  private _staticTcpPktRateThreshold?: number; 
  public get staticTcpPktRateThreshold() {
    return this.getNumberAttribute('static_tcp_pkt_rate_threshold');
  }
  public set staticTcpPktRateThreshold(value: number) {
    this._staticTcpPktRateThreshold = value;
  }
  public resetStaticTcpPktRateThreshold() {
    this._staticTcpPktRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticTcpPktRateThresholdInput() {
    return this._staticTcpPktRateThreshold;
  }

  // static_udp_pkt_rate_threshold - computed: false, optional: true, required: false
  private _staticUdpPktRateThreshold?: number; 
  public get staticUdpPktRateThreshold() {
    return this.getNumberAttribute('static_udp_pkt_rate_threshold');
  }
  public set staticUdpPktRateThreshold(value: number) {
    this._staticUdpPktRateThreshold = value;
  }
  public resetStaticUdpPktRateThreshold() {
    this._staticUdpPktRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticUdpPktRateThresholdInput() {
    return this._staticUdpPktRateThreshold;
  }

  // static_undiscovered_host_bit_rate_threshold - computed: false, optional: true, required: false
  private _staticUndiscoveredHostBitRateThreshold?: number; 
  public get staticUndiscoveredHostBitRateThreshold() {
    return this.getNumberAttribute('static_undiscovered_host_bit_rate_threshold');
  }
  public set staticUndiscoveredHostBitRateThreshold(value: number) {
    this._staticUndiscoveredHostBitRateThreshold = value;
  }
  public resetStaticUndiscoveredHostBitRateThreshold() {
    this._staticUndiscoveredHostBitRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticUndiscoveredHostBitRateThresholdInput() {
    return this._staticUndiscoveredHostBitRateThreshold;
  }

  // static_undiscovered_host_pkt_rate_threshold - computed: false, optional: true, required: false
  private _staticUndiscoveredHostPktRateThreshold?: number; 
  public get staticUndiscoveredHostPktRateThreshold() {
    return this.getNumberAttribute('static_undiscovered_host_pkt_rate_threshold');
  }
  public set staticUndiscoveredHostPktRateThreshold(value: number) {
    this._staticUndiscoveredHostPktRateThreshold = value;
  }
  public resetStaticUndiscoveredHostPktRateThreshold() {
    this._staticUndiscoveredHostPktRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticUndiscoveredHostPktRateThresholdInput() {
    return this._staticUndiscoveredHostPktRateThreshold;
  }

  // static_undiscovered_pkt_rate_threshold - computed: false, optional: true, required: false
  private _staticUndiscoveredPktRateThreshold?: number; 
  public get staticUndiscoveredPktRateThreshold() {
    return this.getNumberAttribute('static_undiscovered_pkt_rate_threshold');
  }
  public set staticUndiscoveredPktRateThreshold(value: number) {
    this._staticUndiscoveredPktRateThreshold = value;
  }
  public resetStaticUndiscoveredPktRateThreshold() {
    this._staticUndiscoveredPktRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticUndiscoveredPktRateThresholdInput() {
    return this._staticUndiscoveredPktRateThreshold;
  }
}
export interface DdosNetworkObjectSubNetworkSubNetworkV4ListSamplingEnable {
  /**
  * 'all': all; 'packet_rate': PPS; 'bit_rate': B(bits)PS;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#counters1 DdosNetworkObject#counters1}
  */
  readonly counters1?: string;
}

export function ddosNetworkObjectSubNetworkSubNetworkV4ListSamplingEnableToTerraform(struct?: DdosNetworkObjectSubNetworkSubNetworkV4ListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ddosNetworkObjectSubNetworkSubNetworkV4ListSamplingEnableToHclTerraform(struct?: DdosNetworkObjectSubNetworkSubNetworkV4ListSamplingEnable | cdktf.IResolvable): any {
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

export class DdosNetworkObjectSubNetworkSubNetworkV4ListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosNetworkObjectSubNetworkSubNetworkV4ListSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosNetworkObjectSubNetworkSubNetworkV4ListSamplingEnable | cdktf.IResolvable | undefined) {
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

export class DdosNetworkObjectSubNetworkSubNetworkV4ListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosNetworkObjectSubNetworkSubNetworkV4ListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosNetworkObjectSubNetworkSubNetworkV4ListSamplingEnableOutputReference {
    return new DdosNetworkObjectSubNetworkSubNetworkV4ListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosNetworkObjectSubNetworkSubNetworkV4ListSubNetworkAnomalyThreshold {
  /**
  * Bit rate of the sub-network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_sub_network_bit_rate DdosNetworkObject#static_sub_network_bit_rate}
  */
  readonly staticSubNetworkBitRate?: number;
  /**
  * Packet rate of the sub-network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_sub_network_pkt_rate DdosNetworkObject#static_sub_network_pkt_rate}
  */
  readonly staticSubNetworkPktRate?: number;
}

export function ddosNetworkObjectSubNetworkSubNetworkV4ListSubNetworkAnomalyThresholdToTerraform(struct?: DdosNetworkObjectSubNetworkSubNetworkV4ListSubNetworkAnomalyThresholdOutputReference | DdosNetworkObjectSubNetworkSubNetworkV4ListSubNetworkAnomalyThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_sub_network_bit_rate: cdktf.numberToTerraform(struct!.staticSubNetworkBitRate),
    static_sub_network_pkt_rate: cdktf.numberToTerraform(struct!.staticSubNetworkPktRate),
  }
}


export function ddosNetworkObjectSubNetworkSubNetworkV4ListSubNetworkAnomalyThresholdToHclTerraform(struct?: DdosNetworkObjectSubNetworkSubNetworkV4ListSubNetworkAnomalyThresholdOutputReference | DdosNetworkObjectSubNetworkSubNetworkV4ListSubNetworkAnomalyThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_sub_network_bit_rate: {
      value: cdktf.numberToHclTerraform(struct!.staticSubNetworkBitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_sub_network_pkt_rate: {
      value: cdktf.numberToHclTerraform(struct!.staticSubNetworkPktRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectSubNetworkSubNetworkV4ListSubNetworkAnomalyThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectSubNetworkSubNetworkV4ListSubNetworkAnomalyThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticSubNetworkBitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticSubNetworkBitRate = this._staticSubNetworkBitRate;
    }
    if (this._staticSubNetworkPktRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticSubNetworkPktRate = this._staticSubNetworkPktRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectSubNetworkSubNetworkV4ListSubNetworkAnomalyThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticSubNetworkBitRate = undefined;
      this._staticSubNetworkPktRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticSubNetworkBitRate = value.staticSubNetworkBitRate;
      this._staticSubNetworkPktRate = value.staticSubNetworkPktRate;
    }
  }

  // static_sub_network_bit_rate - computed: false, optional: true, required: false
  private _staticSubNetworkBitRate?: number; 
  public get staticSubNetworkBitRate() {
    return this.getNumberAttribute('static_sub_network_bit_rate');
  }
  public set staticSubNetworkBitRate(value: number) {
    this._staticSubNetworkBitRate = value;
  }
  public resetStaticSubNetworkBitRate() {
    this._staticSubNetworkBitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticSubNetworkBitRateInput() {
    return this._staticSubNetworkBitRate;
  }

  // static_sub_network_pkt_rate - computed: false, optional: true, required: false
  private _staticSubNetworkPktRate?: number; 
  public get staticSubNetworkPktRate() {
    return this.getNumberAttribute('static_sub_network_pkt_rate');
  }
  public set staticSubNetworkPktRate(value: number) {
    this._staticSubNetworkPktRate = value;
  }
  public resetStaticSubNetworkPktRate() {
    this._staticSubNetworkPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticSubNetworkPktRateInput() {
    return this._staticSubNetworkPktRate;
  }
}
export interface DdosNetworkObjectSubNetworkSubNetworkV4ListStruct {
  /**
  * additional layer of breakdown subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#subnet_breakdown DdosNetworkObject#subnet_breakdown}
  */
  readonly subnetBreakdown?: number;
  /**
  * IPv4 Subnet/host, supported prefix range is from 24 to 32
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#subnet_ip_addr DdosNetworkObject#subnet_ip_addr}
  */
  readonly subnetIpAddr: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#uuid DdosNetworkObject#uuid}
  */
  readonly uuid?: string;
  /**
  * breakdown_subnet_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#breakdown_subnet_threshold DdosNetworkObject#breakdown_subnet_threshold}
  */
  readonly breakdownSubnetThreshold?: DdosNetworkObjectSubNetworkSubNetworkV4ListBreakdownSubnetThreshold;
  /**
  * host_anomaly_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#host_anomaly_threshold DdosNetworkObject#host_anomaly_threshold}
  */
  readonly hostAnomalyThreshold?: DdosNetworkObjectSubNetworkSubNetworkV4ListHostAnomalyThreshold;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#sampling_enable DdosNetworkObject#sampling_enable}
  */
  readonly samplingEnable?: DdosNetworkObjectSubNetworkSubNetworkV4ListSamplingEnable[] | cdktf.IResolvable;
  /**
  * sub_network_anomaly_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#sub_network_anomaly_threshold DdosNetworkObject#sub_network_anomaly_threshold}
  */
  readonly subNetworkAnomalyThreshold?: DdosNetworkObjectSubNetworkSubNetworkV4ListSubNetworkAnomalyThreshold;
}

export function ddosNetworkObjectSubNetworkSubNetworkV4ListStructToTerraform(struct?: DdosNetworkObjectSubNetworkSubNetworkV4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_breakdown: cdktf.numberToTerraform(struct!.subnetBreakdown),
    subnet_ip_addr: cdktf.stringToTerraform(struct!.subnetIpAddr),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    breakdown_subnet_threshold: ddosNetworkObjectSubNetworkSubNetworkV4ListBreakdownSubnetThresholdToTerraform(struct!.breakdownSubnetThreshold),
    host_anomaly_threshold: ddosNetworkObjectSubNetworkSubNetworkV4ListHostAnomalyThresholdToTerraform(struct!.hostAnomalyThreshold),
    sampling_enable: cdktf.listMapper(ddosNetworkObjectSubNetworkSubNetworkV4ListSamplingEnableToTerraform, true)(struct!.samplingEnable),
    sub_network_anomaly_threshold: ddosNetworkObjectSubNetworkSubNetworkV4ListSubNetworkAnomalyThresholdToTerraform(struct!.subNetworkAnomalyThreshold),
  }
}


export function ddosNetworkObjectSubNetworkSubNetworkV4ListStructToHclTerraform(struct?: DdosNetworkObjectSubNetworkSubNetworkV4ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_breakdown: {
      value: cdktf.numberToHclTerraform(struct!.subnetBreakdown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_ip_addr: {
      value: cdktf.stringToHclTerraform(struct!.subnetIpAddr),
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
    breakdown_subnet_threshold: {
      value: ddosNetworkObjectSubNetworkSubNetworkV4ListBreakdownSubnetThresholdToHclTerraform(struct!.breakdownSubnetThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "DdosNetworkObjectSubNetworkSubNetworkV4ListBreakdownSubnetThresholdList",
    },
    host_anomaly_threshold: {
      value: ddosNetworkObjectSubNetworkSubNetworkV4ListHostAnomalyThresholdToHclTerraform(struct!.hostAnomalyThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "DdosNetworkObjectSubNetworkSubNetworkV4ListHostAnomalyThresholdList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(ddosNetworkObjectSubNetworkSubNetworkV4ListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "DdosNetworkObjectSubNetworkSubNetworkV4ListSamplingEnableList",
    },
    sub_network_anomaly_threshold: {
      value: ddosNetworkObjectSubNetworkSubNetworkV4ListSubNetworkAnomalyThresholdToHclTerraform(struct!.subNetworkAnomalyThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "DdosNetworkObjectSubNetworkSubNetworkV4ListSubNetworkAnomalyThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectSubNetworkSubNetworkV4ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosNetworkObjectSubNetworkSubNetworkV4ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetBreakdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetBreakdown = this._subnetBreakdown;
    }
    if (this._subnetIpAddr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIpAddr = this._subnetIpAddr;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._breakdownSubnetThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.breakdownSubnetThreshold = this._breakdownSubnetThreshold?.internalValue;
    }
    if (this._hostAnomalyThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAnomalyThreshold = this._hostAnomalyThreshold?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    if (this._subNetworkAnomalyThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subNetworkAnomalyThreshold = this._subNetworkAnomalyThreshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectSubNetworkSubNetworkV4ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnetBreakdown = undefined;
      this._subnetIpAddr = undefined;
      this._uuid = undefined;
      this._breakdownSubnetThreshold.internalValue = undefined;
      this._hostAnomalyThreshold.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
      this._subNetworkAnomalyThreshold.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnetBreakdown = value.subnetBreakdown;
      this._subnetIpAddr = value.subnetIpAddr;
      this._uuid = value.uuid;
      this._breakdownSubnetThreshold.internalValue = value.breakdownSubnetThreshold;
      this._hostAnomalyThreshold.internalValue = value.hostAnomalyThreshold;
      this._samplingEnable.internalValue = value.samplingEnable;
      this._subNetworkAnomalyThreshold.internalValue = value.subNetworkAnomalyThreshold;
    }
  }

  // subnet_breakdown - computed: false, optional: true, required: false
  private _subnetBreakdown?: number; 
  public get subnetBreakdown() {
    return this.getNumberAttribute('subnet_breakdown');
  }
  public set subnetBreakdown(value: number) {
    this._subnetBreakdown = value;
  }
  public resetSubnetBreakdown() {
    this._subnetBreakdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetBreakdownInput() {
    return this._subnetBreakdown;
  }

  // subnet_ip_addr - computed: false, optional: false, required: true
  private _subnetIpAddr?: string; 
  public get subnetIpAddr() {
    return this.getStringAttribute('subnet_ip_addr');
  }
  public set subnetIpAddr(value: string) {
    this._subnetIpAddr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpAddrInput() {
    return this._subnetIpAddr;
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

  // breakdown_subnet_threshold - computed: false, optional: true, required: false
  private _breakdownSubnetThreshold = new DdosNetworkObjectSubNetworkSubNetworkV4ListBreakdownSubnetThresholdOutputReference(this, "breakdown_subnet_threshold");
  public get breakdownSubnetThreshold() {
    return this._breakdownSubnetThreshold;
  }
  public putBreakdownSubnetThreshold(value: DdosNetworkObjectSubNetworkSubNetworkV4ListBreakdownSubnetThreshold) {
    this._breakdownSubnetThreshold.internalValue = value;
  }
  public resetBreakdownSubnetThreshold() {
    this._breakdownSubnetThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breakdownSubnetThresholdInput() {
    return this._breakdownSubnetThreshold.internalValue;
  }

  // host_anomaly_threshold - computed: false, optional: true, required: false
  private _hostAnomalyThreshold = new DdosNetworkObjectSubNetworkSubNetworkV4ListHostAnomalyThresholdOutputReference(this, "host_anomaly_threshold");
  public get hostAnomalyThreshold() {
    return this._hostAnomalyThreshold;
  }
  public putHostAnomalyThreshold(value: DdosNetworkObjectSubNetworkSubNetworkV4ListHostAnomalyThreshold) {
    this._hostAnomalyThreshold.internalValue = value;
  }
  public resetHostAnomalyThreshold() {
    this._hostAnomalyThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAnomalyThresholdInput() {
    return this._hostAnomalyThreshold.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new DdosNetworkObjectSubNetworkSubNetworkV4ListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosNetworkObjectSubNetworkSubNetworkV4ListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // sub_network_anomaly_threshold - computed: false, optional: true, required: false
  private _subNetworkAnomalyThreshold = new DdosNetworkObjectSubNetworkSubNetworkV4ListSubNetworkAnomalyThresholdOutputReference(this, "sub_network_anomaly_threshold");
  public get subNetworkAnomalyThreshold() {
    return this._subNetworkAnomalyThreshold;
  }
  public putSubNetworkAnomalyThreshold(value: DdosNetworkObjectSubNetworkSubNetworkV4ListSubNetworkAnomalyThreshold) {
    this._subNetworkAnomalyThreshold.internalValue = value;
  }
  public resetSubNetworkAnomalyThreshold() {
    this._subNetworkAnomalyThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subNetworkAnomalyThresholdInput() {
    return this._subNetworkAnomalyThreshold.internalValue;
  }
}

export class DdosNetworkObjectSubNetworkSubNetworkV4ListStructList extends cdktf.ComplexList {
  public internalValue? : DdosNetworkObjectSubNetworkSubNetworkV4ListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosNetworkObjectSubNetworkSubNetworkV4ListStructOutputReference {
    return new DdosNetworkObjectSubNetworkSubNetworkV4ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosNetworkObjectSubNetworkSubNetworkV6ListHostAnomalyThreshold {
  /**
  * Bit rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_bit_rate_threshold DdosNetworkObject#static_bit_rate_threshold}
  */
  readonly staticBitRateThreshold?: number;
  /**
  * FIN packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_fin_rate_threshold DdosNetworkObject#static_fin_rate_threshold}
  */
  readonly staticFinRateThreshold?: number;
  /**
  * Flow count of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_flow_count_threshold DdosNetworkObject#static_flow_count_threshold}
  */
  readonly staticFlowCountThreshold?: number;
  /**
  * ICMP packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_icmp_pkt_rate_threshold DdosNetworkObject#static_icmp_pkt_rate_threshold}
  */
  readonly staticIcmpPktRateThreshold?: number;
  /**
  * Packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_pkt_rate_threshold DdosNetworkObject#static_pkt_rate_threshold}
  */
  readonly staticPktRateThreshold?: number;
  /**
  * Bit rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_rev_bit_rate_threshold DdosNetworkObject#static_rev_bit_rate_threshold}
  */
  readonly staticRevBitRateThreshold?: number;
  /**
  * Packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_rev_pkt_rate_threshold DdosNetworkObject#static_rev_pkt_rate_threshold}
  */
  readonly staticRevPktRateThreshold?: number;
  /**
  * RST packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_rst_rate_threshold DdosNetworkObject#static_rst_rate_threshold}
  */
  readonly staticRstRateThreshold?: number;
  /**
  * SYN packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_syn_rate_threshold DdosNetworkObject#static_syn_rate_threshold}
  */
  readonly staticSynRateThreshold?: number;
  /**
  * TCP packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_tcp_pkt_rate_threshold DdosNetworkObject#static_tcp_pkt_rate_threshold}
  */
  readonly staticTcpPktRateThreshold?: number;
  /**
  * UDP packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_udp_pkt_rate_threshold DdosNetworkObject#static_udp_pkt_rate_threshold}
  */
  readonly staticUdpPktRateThreshold?: number;
  /**
  * Bit rate of per undiscovered host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_undiscovered_host_bit_rate_threshold DdosNetworkObject#static_undiscovered_host_bit_rate_threshold}
  */
  readonly staticUndiscoveredHostBitRateThreshold?: number;
  /**
  * packet rate of per undiscovered host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_undiscovered_host_pkt_rate_threshold DdosNetworkObject#static_undiscovered_host_pkt_rate_threshold}
  */
  readonly staticUndiscoveredHostPktRateThreshold?: number;
  /**
  * Undiscovered packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_undiscovered_pkt_rate_threshold DdosNetworkObject#static_undiscovered_pkt_rate_threshold}
  */
  readonly staticUndiscoveredPktRateThreshold?: number;
}

export function ddosNetworkObjectSubNetworkSubNetworkV6ListHostAnomalyThresholdToTerraform(struct?: DdosNetworkObjectSubNetworkSubNetworkV6ListHostAnomalyThresholdOutputReference | DdosNetworkObjectSubNetworkSubNetworkV6ListHostAnomalyThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_bit_rate_threshold: cdktf.numberToTerraform(struct!.staticBitRateThreshold),
    static_fin_rate_threshold: cdktf.numberToTerraform(struct!.staticFinRateThreshold),
    static_flow_count_threshold: cdktf.numberToTerraform(struct!.staticFlowCountThreshold),
    static_icmp_pkt_rate_threshold: cdktf.numberToTerraform(struct!.staticIcmpPktRateThreshold),
    static_pkt_rate_threshold: cdktf.numberToTerraform(struct!.staticPktRateThreshold),
    static_rev_bit_rate_threshold: cdktf.numberToTerraform(struct!.staticRevBitRateThreshold),
    static_rev_pkt_rate_threshold: cdktf.numberToTerraform(struct!.staticRevPktRateThreshold),
    static_rst_rate_threshold: cdktf.numberToTerraform(struct!.staticRstRateThreshold),
    static_syn_rate_threshold: cdktf.numberToTerraform(struct!.staticSynRateThreshold),
    static_tcp_pkt_rate_threshold: cdktf.numberToTerraform(struct!.staticTcpPktRateThreshold),
    static_udp_pkt_rate_threshold: cdktf.numberToTerraform(struct!.staticUdpPktRateThreshold),
    static_undiscovered_host_bit_rate_threshold: cdktf.numberToTerraform(struct!.staticUndiscoveredHostBitRateThreshold),
    static_undiscovered_host_pkt_rate_threshold: cdktf.numberToTerraform(struct!.staticUndiscoveredHostPktRateThreshold),
    static_undiscovered_pkt_rate_threshold: cdktf.numberToTerraform(struct!.staticUndiscoveredPktRateThreshold),
  }
}


export function ddosNetworkObjectSubNetworkSubNetworkV6ListHostAnomalyThresholdToHclTerraform(struct?: DdosNetworkObjectSubNetworkSubNetworkV6ListHostAnomalyThresholdOutputReference | DdosNetworkObjectSubNetworkSubNetworkV6ListHostAnomalyThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_bit_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticBitRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_fin_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticFinRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_flow_count_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticFlowCountThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_icmp_pkt_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticIcmpPktRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_pkt_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticPktRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_rev_bit_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticRevBitRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_rev_pkt_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticRevPktRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_rst_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticRstRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_syn_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticSynRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_tcp_pkt_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticTcpPktRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_udp_pkt_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticUdpPktRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_undiscovered_host_bit_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticUndiscoveredHostBitRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_undiscovered_host_pkt_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticUndiscoveredHostPktRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_undiscovered_pkt_rate_threshold: {
      value: cdktf.numberToHclTerraform(struct!.staticUndiscoveredPktRateThreshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectSubNetworkSubNetworkV6ListHostAnomalyThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectSubNetworkSubNetworkV6ListHostAnomalyThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticBitRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticBitRateThreshold = this._staticBitRateThreshold;
    }
    if (this._staticFinRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticFinRateThreshold = this._staticFinRateThreshold;
    }
    if (this._staticFlowCountThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticFlowCountThreshold = this._staticFlowCountThreshold;
    }
    if (this._staticIcmpPktRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticIcmpPktRateThreshold = this._staticIcmpPktRateThreshold;
    }
    if (this._staticPktRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticPktRateThreshold = this._staticPktRateThreshold;
    }
    if (this._staticRevBitRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRevBitRateThreshold = this._staticRevBitRateThreshold;
    }
    if (this._staticRevPktRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRevPktRateThreshold = this._staticRevPktRateThreshold;
    }
    if (this._staticRstRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticRstRateThreshold = this._staticRstRateThreshold;
    }
    if (this._staticSynRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticSynRateThreshold = this._staticSynRateThreshold;
    }
    if (this._staticTcpPktRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticTcpPktRateThreshold = this._staticTcpPktRateThreshold;
    }
    if (this._staticUdpPktRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticUdpPktRateThreshold = this._staticUdpPktRateThreshold;
    }
    if (this._staticUndiscoveredHostBitRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticUndiscoveredHostBitRateThreshold = this._staticUndiscoveredHostBitRateThreshold;
    }
    if (this._staticUndiscoveredHostPktRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticUndiscoveredHostPktRateThreshold = this._staticUndiscoveredHostPktRateThreshold;
    }
    if (this._staticUndiscoveredPktRateThreshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticUndiscoveredPktRateThreshold = this._staticUndiscoveredPktRateThreshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectSubNetworkSubNetworkV6ListHostAnomalyThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticBitRateThreshold = undefined;
      this._staticFinRateThreshold = undefined;
      this._staticFlowCountThreshold = undefined;
      this._staticIcmpPktRateThreshold = undefined;
      this._staticPktRateThreshold = undefined;
      this._staticRevBitRateThreshold = undefined;
      this._staticRevPktRateThreshold = undefined;
      this._staticRstRateThreshold = undefined;
      this._staticSynRateThreshold = undefined;
      this._staticTcpPktRateThreshold = undefined;
      this._staticUdpPktRateThreshold = undefined;
      this._staticUndiscoveredHostBitRateThreshold = undefined;
      this._staticUndiscoveredHostPktRateThreshold = undefined;
      this._staticUndiscoveredPktRateThreshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticBitRateThreshold = value.staticBitRateThreshold;
      this._staticFinRateThreshold = value.staticFinRateThreshold;
      this._staticFlowCountThreshold = value.staticFlowCountThreshold;
      this._staticIcmpPktRateThreshold = value.staticIcmpPktRateThreshold;
      this._staticPktRateThreshold = value.staticPktRateThreshold;
      this._staticRevBitRateThreshold = value.staticRevBitRateThreshold;
      this._staticRevPktRateThreshold = value.staticRevPktRateThreshold;
      this._staticRstRateThreshold = value.staticRstRateThreshold;
      this._staticSynRateThreshold = value.staticSynRateThreshold;
      this._staticTcpPktRateThreshold = value.staticTcpPktRateThreshold;
      this._staticUdpPktRateThreshold = value.staticUdpPktRateThreshold;
      this._staticUndiscoveredHostBitRateThreshold = value.staticUndiscoveredHostBitRateThreshold;
      this._staticUndiscoveredHostPktRateThreshold = value.staticUndiscoveredHostPktRateThreshold;
      this._staticUndiscoveredPktRateThreshold = value.staticUndiscoveredPktRateThreshold;
    }
  }

  // static_bit_rate_threshold - computed: false, optional: true, required: false
  private _staticBitRateThreshold?: number; 
  public get staticBitRateThreshold() {
    return this.getNumberAttribute('static_bit_rate_threshold');
  }
  public set staticBitRateThreshold(value: number) {
    this._staticBitRateThreshold = value;
  }
  public resetStaticBitRateThreshold() {
    this._staticBitRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticBitRateThresholdInput() {
    return this._staticBitRateThreshold;
  }

  // static_fin_rate_threshold - computed: false, optional: true, required: false
  private _staticFinRateThreshold?: number; 
  public get staticFinRateThreshold() {
    return this.getNumberAttribute('static_fin_rate_threshold');
  }
  public set staticFinRateThreshold(value: number) {
    this._staticFinRateThreshold = value;
  }
  public resetStaticFinRateThreshold() {
    this._staticFinRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticFinRateThresholdInput() {
    return this._staticFinRateThreshold;
  }

  // static_flow_count_threshold - computed: false, optional: true, required: false
  private _staticFlowCountThreshold?: number; 
  public get staticFlowCountThreshold() {
    return this.getNumberAttribute('static_flow_count_threshold');
  }
  public set staticFlowCountThreshold(value: number) {
    this._staticFlowCountThreshold = value;
  }
  public resetStaticFlowCountThreshold() {
    this._staticFlowCountThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticFlowCountThresholdInput() {
    return this._staticFlowCountThreshold;
  }

  // static_icmp_pkt_rate_threshold - computed: false, optional: true, required: false
  private _staticIcmpPktRateThreshold?: number; 
  public get staticIcmpPktRateThreshold() {
    return this.getNumberAttribute('static_icmp_pkt_rate_threshold');
  }
  public set staticIcmpPktRateThreshold(value: number) {
    this._staticIcmpPktRateThreshold = value;
  }
  public resetStaticIcmpPktRateThreshold() {
    this._staticIcmpPktRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticIcmpPktRateThresholdInput() {
    return this._staticIcmpPktRateThreshold;
  }

  // static_pkt_rate_threshold - computed: false, optional: true, required: false
  private _staticPktRateThreshold?: number; 
  public get staticPktRateThreshold() {
    return this.getNumberAttribute('static_pkt_rate_threshold');
  }
  public set staticPktRateThreshold(value: number) {
    this._staticPktRateThreshold = value;
  }
  public resetStaticPktRateThreshold() {
    this._staticPktRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticPktRateThresholdInput() {
    return this._staticPktRateThreshold;
  }

  // static_rev_bit_rate_threshold - computed: false, optional: true, required: false
  private _staticRevBitRateThreshold?: number; 
  public get staticRevBitRateThreshold() {
    return this.getNumberAttribute('static_rev_bit_rate_threshold');
  }
  public set staticRevBitRateThreshold(value: number) {
    this._staticRevBitRateThreshold = value;
  }
  public resetStaticRevBitRateThreshold() {
    this._staticRevBitRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRevBitRateThresholdInput() {
    return this._staticRevBitRateThreshold;
  }

  // static_rev_pkt_rate_threshold - computed: false, optional: true, required: false
  private _staticRevPktRateThreshold?: number; 
  public get staticRevPktRateThreshold() {
    return this.getNumberAttribute('static_rev_pkt_rate_threshold');
  }
  public set staticRevPktRateThreshold(value: number) {
    this._staticRevPktRateThreshold = value;
  }
  public resetStaticRevPktRateThreshold() {
    this._staticRevPktRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRevPktRateThresholdInput() {
    return this._staticRevPktRateThreshold;
  }

  // static_rst_rate_threshold - computed: false, optional: true, required: false
  private _staticRstRateThreshold?: number; 
  public get staticRstRateThreshold() {
    return this.getNumberAttribute('static_rst_rate_threshold');
  }
  public set staticRstRateThreshold(value: number) {
    this._staticRstRateThreshold = value;
  }
  public resetStaticRstRateThreshold() {
    this._staticRstRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticRstRateThresholdInput() {
    return this._staticRstRateThreshold;
  }

  // static_syn_rate_threshold - computed: false, optional: true, required: false
  private _staticSynRateThreshold?: number; 
  public get staticSynRateThreshold() {
    return this.getNumberAttribute('static_syn_rate_threshold');
  }
  public set staticSynRateThreshold(value: number) {
    this._staticSynRateThreshold = value;
  }
  public resetStaticSynRateThreshold() {
    this._staticSynRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticSynRateThresholdInput() {
    return this._staticSynRateThreshold;
  }

  // static_tcp_pkt_rate_threshold - computed: false, optional: true, required: false
  private _staticTcpPktRateThreshold?: number; 
  public get staticTcpPktRateThreshold() {
    return this.getNumberAttribute('static_tcp_pkt_rate_threshold');
  }
  public set staticTcpPktRateThreshold(value: number) {
    this._staticTcpPktRateThreshold = value;
  }
  public resetStaticTcpPktRateThreshold() {
    this._staticTcpPktRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticTcpPktRateThresholdInput() {
    return this._staticTcpPktRateThreshold;
  }

  // static_udp_pkt_rate_threshold - computed: false, optional: true, required: false
  private _staticUdpPktRateThreshold?: number; 
  public get staticUdpPktRateThreshold() {
    return this.getNumberAttribute('static_udp_pkt_rate_threshold');
  }
  public set staticUdpPktRateThreshold(value: number) {
    this._staticUdpPktRateThreshold = value;
  }
  public resetStaticUdpPktRateThreshold() {
    this._staticUdpPktRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticUdpPktRateThresholdInput() {
    return this._staticUdpPktRateThreshold;
  }

  // static_undiscovered_host_bit_rate_threshold - computed: false, optional: true, required: false
  private _staticUndiscoveredHostBitRateThreshold?: number; 
  public get staticUndiscoveredHostBitRateThreshold() {
    return this.getNumberAttribute('static_undiscovered_host_bit_rate_threshold');
  }
  public set staticUndiscoveredHostBitRateThreshold(value: number) {
    this._staticUndiscoveredHostBitRateThreshold = value;
  }
  public resetStaticUndiscoveredHostBitRateThreshold() {
    this._staticUndiscoveredHostBitRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticUndiscoveredHostBitRateThresholdInput() {
    return this._staticUndiscoveredHostBitRateThreshold;
  }

  // static_undiscovered_host_pkt_rate_threshold - computed: false, optional: true, required: false
  private _staticUndiscoveredHostPktRateThreshold?: number; 
  public get staticUndiscoveredHostPktRateThreshold() {
    return this.getNumberAttribute('static_undiscovered_host_pkt_rate_threshold');
  }
  public set staticUndiscoveredHostPktRateThreshold(value: number) {
    this._staticUndiscoveredHostPktRateThreshold = value;
  }
  public resetStaticUndiscoveredHostPktRateThreshold() {
    this._staticUndiscoveredHostPktRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticUndiscoveredHostPktRateThresholdInput() {
    return this._staticUndiscoveredHostPktRateThreshold;
  }

  // static_undiscovered_pkt_rate_threshold - computed: false, optional: true, required: false
  private _staticUndiscoveredPktRateThreshold?: number; 
  public get staticUndiscoveredPktRateThreshold() {
    return this.getNumberAttribute('static_undiscovered_pkt_rate_threshold');
  }
  public set staticUndiscoveredPktRateThreshold(value: number) {
    this._staticUndiscoveredPktRateThreshold = value;
  }
  public resetStaticUndiscoveredPktRateThreshold() {
    this._staticUndiscoveredPktRateThreshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticUndiscoveredPktRateThresholdInput() {
    return this._staticUndiscoveredPktRateThreshold;
  }
}
export interface DdosNetworkObjectSubNetworkSubNetworkV6ListSamplingEnable {
  /**
  * 'all': all; 'packet_rate': PPS; 'bit_rate': B(bits)PS;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#counters1 DdosNetworkObject#counters1}
  */
  readonly counters1?: string;
}

export function ddosNetworkObjectSubNetworkSubNetworkV6ListSamplingEnableToTerraform(struct?: DdosNetworkObjectSubNetworkSubNetworkV6ListSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ddosNetworkObjectSubNetworkSubNetworkV6ListSamplingEnableToHclTerraform(struct?: DdosNetworkObjectSubNetworkSubNetworkV6ListSamplingEnable | cdktf.IResolvable): any {
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

export class DdosNetworkObjectSubNetworkSubNetworkV6ListSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosNetworkObjectSubNetworkSubNetworkV6ListSamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosNetworkObjectSubNetworkSubNetworkV6ListSamplingEnable | cdktf.IResolvable | undefined) {
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

export class DdosNetworkObjectSubNetworkSubNetworkV6ListSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosNetworkObjectSubNetworkSubNetworkV6ListSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosNetworkObjectSubNetworkSubNetworkV6ListSamplingEnableOutputReference {
    return new DdosNetworkObjectSubNetworkSubNetworkV6ListSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosNetworkObjectSubNetworkSubNetworkV6ListSubNetworkAnomalyThreshold {
  /**
  * Bit rate of the sub-network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_sub_network_bit_rate DdosNetworkObject#static_sub_network_bit_rate}
  */
  readonly staticSubNetworkBitRate?: number;
  /**
  * Packet rate of the sub-network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#static_sub_network_pkt_rate DdosNetworkObject#static_sub_network_pkt_rate}
  */
  readonly staticSubNetworkPktRate?: number;
}

export function ddosNetworkObjectSubNetworkSubNetworkV6ListSubNetworkAnomalyThresholdToTerraform(struct?: DdosNetworkObjectSubNetworkSubNetworkV6ListSubNetworkAnomalyThresholdOutputReference | DdosNetworkObjectSubNetworkSubNetworkV6ListSubNetworkAnomalyThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_sub_network_bit_rate: cdktf.numberToTerraform(struct!.staticSubNetworkBitRate),
    static_sub_network_pkt_rate: cdktf.numberToTerraform(struct!.staticSubNetworkPktRate),
  }
}


export function ddosNetworkObjectSubNetworkSubNetworkV6ListSubNetworkAnomalyThresholdToHclTerraform(struct?: DdosNetworkObjectSubNetworkSubNetworkV6ListSubNetworkAnomalyThresholdOutputReference | DdosNetworkObjectSubNetworkSubNetworkV6ListSubNetworkAnomalyThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    static_sub_network_bit_rate: {
      value: cdktf.numberToHclTerraform(struct!.staticSubNetworkBitRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    static_sub_network_pkt_rate: {
      value: cdktf.numberToHclTerraform(struct!.staticSubNetworkPktRate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectSubNetworkSubNetworkV6ListSubNetworkAnomalyThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectSubNetworkSubNetworkV6ListSubNetworkAnomalyThreshold | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._staticSubNetworkBitRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticSubNetworkBitRate = this._staticSubNetworkBitRate;
    }
    if (this._staticSubNetworkPktRate !== undefined) {
      hasAnyValues = true;
      internalValueResult.staticSubNetworkPktRate = this._staticSubNetworkPktRate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectSubNetworkSubNetworkV6ListSubNetworkAnomalyThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._staticSubNetworkBitRate = undefined;
      this._staticSubNetworkPktRate = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._staticSubNetworkBitRate = value.staticSubNetworkBitRate;
      this._staticSubNetworkPktRate = value.staticSubNetworkPktRate;
    }
  }

  // static_sub_network_bit_rate - computed: false, optional: true, required: false
  private _staticSubNetworkBitRate?: number; 
  public get staticSubNetworkBitRate() {
    return this.getNumberAttribute('static_sub_network_bit_rate');
  }
  public set staticSubNetworkBitRate(value: number) {
    this._staticSubNetworkBitRate = value;
  }
  public resetStaticSubNetworkBitRate() {
    this._staticSubNetworkBitRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticSubNetworkBitRateInput() {
    return this._staticSubNetworkBitRate;
  }

  // static_sub_network_pkt_rate - computed: false, optional: true, required: false
  private _staticSubNetworkPktRate?: number; 
  public get staticSubNetworkPktRate() {
    return this.getNumberAttribute('static_sub_network_pkt_rate');
  }
  public set staticSubNetworkPktRate(value: number) {
    this._staticSubNetworkPktRate = value;
  }
  public resetStaticSubNetworkPktRate() {
    this._staticSubNetworkPktRate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticSubNetworkPktRateInput() {
    return this._staticSubNetworkPktRate;
  }
}
export interface DdosNetworkObjectSubNetworkSubNetworkV6ListStruct {
  /**
  * additional layer of breakdown subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#subnet_breakdown DdosNetworkObject#subnet_breakdown}
  */
  readonly subnetBreakdown?: number;
  /**
  * IPv6 Subnet/host, supported prefix range is from 56 to 64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#subnet_ipv6_addr DdosNetworkObject#subnet_ipv6_addr}
  */
  readonly subnetIpv6Addr: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#uuid DdosNetworkObject#uuid}
  */
  readonly uuid?: string;
  /**
  * host_anomaly_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#host_anomaly_threshold DdosNetworkObject#host_anomaly_threshold}
  */
  readonly hostAnomalyThreshold?: DdosNetworkObjectSubNetworkSubNetworkV6ListHostAnomalyThreshold;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#sampling_enable DdosNetworkObject#sampling_enable}
  */
  readonly samplingEnable?: DdosNetworkObjectSubNetworkSubNetworkV6ListSamplingEnable[] | cdktf.IResolvable;
  /**
  * sub_network_anomaly_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#sub_network_anomaly_threshold DdosNetworkObject#sub_network_anomaly_threshold}
  */
  readonly subNetworkAnomalyThreshold?: DdosNetworkObjectSubNetworkSubNetworkV6ListSubNetworkAnomalyThreshold;
}

export function ddosNetworkObjectSubNetworkSubNetworkV6ListStructToTerraform(struct?: DdosNetworkObjectSubNetworkSubNetworkV6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    subnet_breakdown: cdktf.numberToTerraform(struct!.subnetBreakdown),
    subnet_ipv6_addr: cdktf.stringToTerraform(struct!.subnetIpv6Addr),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    host_anomaly_threshold: ddosNetworkObjectSubNetworkSubNetworkV6ListHostAnomalyThresholdToTerraform(struct!.hostAnomalyThreshold),
    sampling_enable: cdktf.listMapper(ddosNetworkObjectSubNetworkSubNetworkV6ListSamplingEnableToTerraform, true)(struct!.samplingEnable),
    sub_network_anomaly_threshold: ddosNetworkObjectSubNetworkSubNetworkV6ListSubNetworkAnomalyThresholdToTerraform(struct!.subNetworkAnomalyThreshold),
  }
}


export function ddosNetworkObjectSubNetworkSubNetworkV6ListStructToHclTerraform(struct?: DdosNetworkObjectSubNetworkSubNetworkV6ListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    subnet_breakdown: {
      value: cdktf.numberToHclTerraform(struct!.subnetBreakdown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    subnet_ipv6_addr: {
      value: cdktf.stringToHclTerraform(struct!.subnetIpv6Addr),
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
    host_anomaly_threshold: {
      value: ddosNetworkObjectSubNetworkSubNetworkV6ListHostAnomalyThresholdToHclTerraform(struct!.hostAnomalyThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "DdosNetworkObjectSubNetworkSubNetworkV6ListHostAnomalyThresholdList",
    },
    sampling_enable: {
      value: cdktf.listMapperHcl(ddosNetworkObjectSubNetworkSubNetworkV6ListSamplingEnableToHclTerraform, true)(struct!.samplingEnable),
      isBlock: true,
      type: "list",
      storageClassType: "DdosNetworkObjectSubNetworkSubNetworkV6ListSamplingEnableList",
    },
    sub_network_anomaly_threshold: {
      value: ddosNetworkObjectSubNetworkSubNetworkV6ListSubNetworkAnomalyThresholdToHclTerraform(struct!.subNetworkAnomalyThreshold),
      isBlock: true,
      type: "list",
      storageClassType: "DdosNetworkObjectSubNetworkSubNetworkV6ListSubNetworkAnomalyThresholdList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectSubNetworkSubNetworkV6ListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosNetworkObjectSubNetworkSubNetworkV6ListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subnetBreakdown !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetBreakdown = this._subnetBreakdown;
    }
    if (this._subnetIpv6Addr !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetIpv6Addr = this._subnetIpv6Addr;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._hostAnomalyThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostAnomalyThreshold = this._hostAnomalyThreshold?.internalValue;
    }
    if (this._samplingEnable?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.samplingEnable = this._samplingEnable?.internalValue;
    }
    if (this._subNetworkAnomalyThreshold?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subNetworkAnomalyThreshold = this._subNetworkAnomalyThreshold?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectSubNetworkSubNetworkV6ListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._subnetBreakdown = undefined;
      this._subnetIpv6Addr = undefined;
      this._uuid = undefined;
      this._hostAnomalyThreshold.internalValue = undefined;
      this._samplingEnable.internalValue = undefined;
      this._subNetworkAnomalyThreshold.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._subnetBreakdown = value.subnetBreakdown;
      this._subnetIpv6Addr = value.subnetIpv6Addr;
      this._uuid = value.uuid;
      this._hostAnomalyThreshold.internalValue = value.hostAnomalyThreshold;
      this._samplingEnable.internalValue = value.samplingEnable;
      this._subNetworkAnomalyThreshold.internalValue = value.subNetworkAnomalyThreshold;
    }
  }

  // subnet_breakdown - computed: false, optional: true, required: false
  private _subnetBreakdown?: number; 
  public get subnetBreakdown() {
    return this.getNumberAttribute('subnet_breakdown');
  }
  public set subnetBreakdown(value: number) {
    this._subnetBreakdown = value;
  }
  public resetSubnetBreakdown() {
    this._subnetBreakdown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetBreakdownInput() {
    return this._subnetBreakdown;
  }

  // subnet_ipv6_addr - computed: false, optional: false, required: true
  private _subnetIpv6Addr?: string; 
  public get subnetIpv6Addr() {
    return this.getStringAttribute('subnet_ipv6_addr');
  }
  public set subnetIpv6Addr(value: string) {
    this._subnetIpv6Addr = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIpv6AddrInput() {
    return this._subnetIpv6Addr;
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

  // host_anomaly_threshold - computed: false, optional: true, required: false
  private _hostAnomalyThreshold = new DdosNetworkObjectSubNetworkSubNetworkV6ListHostAnomalyThresholdOutputReference(this, "host_anomaly_threshold");
  public get hostAnomalyThreshold() {
    return this._hostAnomalyThreshold;
  }
  public putHostAnomalyThreshold(value: DdosNetworkObjectSubNetworkSubNetworkV6ListHostAnomalyThreshold) {
    this._hostAnomalyThreshold.internalValue = value;
  }
  public resetHostAnomalyThreshold() {
    this._hostAnomalyThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAnomalyThresholdInput() {
    return this._hostAnomalyThreshold.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new DdosNetworkObjectSubNetworkSubNetworkV6ListSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosNetworkObjectSubNetworkSubNetworkV6ListSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // sub_network_anomaly_threshold - computed: false, optional: true, required: false
  private _subNetworkAnomalyThreshold = new DdosNetworkObjectSubNetworkSubNetworkV6ListSubNetworkAnomalyThresholdOutputReference(this, "sub_network_anomaly_threshold");
  public get subNetworkAnomalyThreshold() {
    return this._subNetworkAnomalyThreshold;
  }
  public putSubNetworkAnomalyThreshold(value: DdosNetworkObjectSubNetworkSubNetworkV6ListSubNetworkAnomalyThreshold) {
    this._subNetworkAnomalyThreshold.internalValue = value;
  }
  public resetSubNetworkAnomalyThreshold() {
    this._subNetworkAnomalyThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subNetworkAnomalyThresholdInput() {
    return this._subNetworkAnomalyThreshold.internalValue;
  }
}

export class DdosNetworkObjectSubNetworkSubNetworkV6ListStructList extends cdktf.ComplexList {
  public internalValue? : DdosNetworkObjectSubNetworkSubNetworkV6ListStruct[] | cdktf.IResolvable

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
  public get(index: number): DdosNetworkObjectSubNetworkSubNetworkV6ListStructOutputReference {
    return new DdosNetworkObjectSubNetworkSubNetworkV6ListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosNetworkObjectSubNetwork {
  /**
  * sub_network_v4_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#sub_network_v4_list DdosNetworkObject#sub_network_v4_list}
  */
  readonly subNetworkV4List?: DdosNetworkObjectSubNetworkSubNetworkV4ListStruct[] | cdktf.IResolvable;
  /**
  * sub_network_v6_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#sub_network_v6_list DdosNetworkObject#sub_network_v6_list}
  */
  readonly subNetworkV6List?: DdosNetworkObjectSubNetworkSubNetworkV6ListStruct[] | cdktf.IResolvable;
}

export function ddosNetworkObjectSubNetworkToTerraform(struct?: DdosNetworkObjectSubNetworkOutputReference | DdosNetworkObjectSubNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sub_network_v4_list: cdktf.listMapper(ddosNetworkObjectSubNetworkSubNetworkV4ListStructToTerraform, true)(struct!.subNetworkV4List),
    sub_network_v6_list: cdktf.listMapper(ddosNetworkObjectSubNetworkSubNetworkV6ListStructToTerraform, true)(struct!.subNetworkV6List),
  }
}


export function ddosNetworkObjectSubNetworkToHclTerraform(struct?: DdosNetworkObjectSubNetworkOutputReference | DdosNetworkObjectSubNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sub_network_v4_list: {
      value: cdktf.listMapperHcl(ddosNetworkObjectSubNetworkSubNetworkV4ListStructToHclTerraform, true)(struct!.subNetworkV4List),
      isBlock: true,
      type: "list",
      storageClassType: "DdosNetworkObjectSubNetworkSubNetworkV4ListStructList",
    },
    sub_network_v6_list: {
      value: cdktf.listMapperHcl(ddosNetworkObjectSubNetworkSubNetworkV6ListStructToHclTerraform, true)(struct!.subNetworkV6List),
      isBlock: true,
      type: "list",
      storageClassType: "DdosNetworkObjectSubNetworkSubNetworkV6ListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectSubNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectSubNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._subNetworkV4List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subNetworkV4List = this._subNetworkV4List?.internalValue;
    }
    if (this._subNetworkV6List?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.subNetworkV6List = this._subNetworkV6List?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectSubNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._subNetworkV4List.internalValue = undefined;
      this._subNetworkV6List.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._subNetworkV4List.internalValue = value.subNetworkV4List;
      this._subNetworkV6List.internalValue = value.subNetworkV6List;
    }
  }

  // sub_network_v4_list - computed: false, optional: true, required: false
  private _subNetworkV4List = new DdosNetworkObjectSubNetworkSubNetworkV4ListStructList(this, "sub_network_v4_list", false);
  public get subNetworkV4List() {
    return this._subNetworkV4List;
  }
  public putSubNetworkV4List(value: DdosNetworkObjectSubNetworkSubNetworkV4ListStruct[] | cdktf.IResolvable) {
    this._subNetworkV4List.internalValue = value;
  }
  public resetSubNetworkV4List() {
    this._subNetworkV4List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subNetworkV4ListInput() {
    return this._subNetworkV4List.internalValue;
  }

  // sub_network_v6_list - computed: false, optional: true, required: false
  private _subNetworkV6List = new DdosNetworkObjectSubNetworkSubNetworkV6ListStructList(this, "sub_network_v6_list", false);
  public get subNetworkV6List() {
    return this._subNetworkV6List;
  }
  public putSubNetworkV6List(value: DdosNetworkObjectSubNetworkSubNetworkV6ListStruct[] | cdktf.IResolvable) {
    this._subNetworkV6List.internalValue = value;
  }
  public resetSubNetworkV6List() {
    this._subNetworkV6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subNetworkV6ListInput() {
    return this._subNetworkV6List.internalValue;
  }
}
export interface DdosNetworkObjectTopkDestinations {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#uuid DdosNetworkObject#uuid}
  */
  readonly uuid?: string;
}

export function ddosNetworkObjectTopkDestinationsToTerraform(struct?: DdosNetworkObjectTopkDestinationsOutputReference | DdosNetworkObjectTopkDestinations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
  }
}


export function ddosNetworkObjectTopkDestinationsToHclTerraform(struct?: DdosNetworkObjectTopkDestinationsOutputReference | DdosNetworkObjectTopkDestinations): any {
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

export class DdosNetworkObjectTopkDestinationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectTopkDestinations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectTopkDestinations | undefined) {
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
export interface DdosNetworkObjectTrustlistStruct {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#uuid DdosNetworkObject#uuid}
  */
  readonly uuid?: string;
  /**
  * IPv4 Class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#v4_class_list DdosNetworkObject#v4_class_list}
  */
  readonly v4ClassList?: string;
  /**
  * IPv6 Class-list name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#v6_class_list DdosNetworkObject#v6_class_list}
  */
  readonly v6ClassList?: string;
}

export function ddosNetworkObjectTrustlistStructToTerraform(struct?: DdosNetworkObjectTrustlistStructOutputReference | DdosNetworkObjectTrustlistStruct): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    v4_class_list: cdktf.stringToTerraform(struct!.v4ClassList),
    v6_class_list: cdktf.stringToTerraform(struct!.v6ClassList),
  }
}


export function ddosNetworkObjectTrustlistStructToHclTerraform(struct?: DdosNetworkObjectTrustlistStructOutputReference | DdosNetworkObjectTrustlistStruct): any {
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
    v4_class_list: {
      value: cdktf.stringToHclTerraform(struct!.v4ClassList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    v6_class_list: {
      value: cdktf.stringToHclTerraform(struct!.v6ClassList),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectTrustlistStructOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectTrustlistStruct | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._v4ClassList !== undefined) {
      hasAnyValues = true;
      internalValueResult.v4ClassList = this._v4ClassList;
    }
    if (this._v6ClassList !== undefined) {
      hasAnyValues = true;
      internalValueResult.v6ClassList = this._v6ClassList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectTrustlistStruct | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._v4ClassList = undefined;
      this._v6ClassList = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._v4ClassList = value.v4ClassList;
      this._v6ClassList = value.v6ClassList;
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

  // v4_class_list - computed: false, optional: true, required: false
  private _v4ClassList?: string; 
  public get v4ClassList() {
    return this.getStringAttribute('v4_class_list');
  }
  public set v4ClassList(value: string) {
    this._v4ClassList = value;
  }
  public resetV4ClassList() {
    this._v4ClassList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v4ClassListInput() {
    return this._v4ClassList;
  }

  // v6_class_list - computed: false, optional: true, required: false
  private _v6ClassList?: string; 
  public get v6ClassList() {
    return this.getStringAttribute('v6_class_list');
  }
  public set v6ClassList(value: string) {
    this._v6ClassList = value;
  }
  public resetV6ClassList() {
    this._v6ClassList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get v6ClassListInput() {
    return this._v6ClassList;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object thunder_ddos_network_object}
*/
export class DdosNetworkObject extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_network_object";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosNetworkObject resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosNetworkObject to import
  * @param importFromId The id of the existing DdosNetworkObject that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosNetworkObject to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_network_object", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object thunder_ddos_network_object} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosNetworkObjectConfig
  */
  public constructor(scope: Construct, id: string, config: DdosNetworkObjectConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_network_object',
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
    this._anomalyDetectionTrigger = config.anomalyDetectionTrigger;
    this._floodingMultiplier = config.floodingMultiplier;
    this._histogramMode = config.histogramMode;
    this._hostSportDiscovery = config.hostSportDiscovery;
    this._id = config.id;
    this._networkObjectTemplate = config.networkObjectTemplate;
    this._objectName = config.objectName;
    this._operationalMode = config.operationalMode;
    this._serviceDiscovery = config.serviceDiscovery;
    this._sportAnomalyDetection = config.sportAnomalyDetection;
    this._thresholdSensitivity = config.thresholdSensitivity;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._enableTopK.internalValue = config.enableTopK;
    this._hostAnomalyThreshold.internalValue = config.hostAnomalyThreshold;
    this._indicatorsToMonitor.internalValue = config.indicatorsToMonitor;
    this._ipList.internalValue = config.ipList;
    this._ipv6List.internalValue = config.ipv6List;
    this._networkObjectAnomalyThreshold.internalValue = config.networkObjectAnomalyThreshold;
    this._notification.internalValue = config.notification;
    this._relativeAutoBreakDownThreshold.internalValue = config.relativeAutoBreakDownThreshold;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._serviceBreakDownThresholdLocal.internalValue = config.serviceBreakDownThresholdLocal;
    this._sportAnomalyThreshold.internalValue = config.sportAnomalyThreshold;
    this._sportDiscoveryThreshold.internalValue = config.sportDiscoveryThreshold;
    this._sportList.internalValue = config.sportList;
    this._staticAutoBreakDownThreshold.internalValue = config.staticAutoBreakDownThreshold;
    this._subNetwork.internalValue = config.subNetwork;
    this._topkDestinations.internalValue = config.topkDestinations;
    this._trustlist.internalValue = config.trustlist;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // anomaly_detection_trigger - computed: false, optional: true, required: false
  private _anomalyDetectionTrigger?: string; 
  public get anomalyDetectionTrigger() {
    return this.getStringAttribute('anomaly_detection_trigger');
  }
  public set anomalyDetectionTrigger(value: string) {
    this._anomalyDetectionTrigger = value;
  }
  public resetAnomalyDetectionTrigger() {
    this._anomalyDetectionTrigger = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get anomalyDetectionTriggerInput() {
    return this._anomalyDetectionTrigger;
  }

  // flooding_multiplier - computed: false, optional: true, required: false
  private _floodingMultiplier?: number; 
  public get floodingMultiplier() {
    return this.getNumberAttribute('flooding_multiplier');
  }
  public set floodingMultiplier(value: number) {
    this._floodingMultiplier = value;
  }
  public resetFloodingMultiplier() {
    this._floodingMultiplier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get floodingMultiplierInput() {
    return this._floodingMultiplier;
  }

  // histogram_mode - computed: false, optional: true, required: false
  private _histogramMode?: string; 
  public get histogramMode() {
    return this.getStringAttribute('histogram_mode');
  }
  public set histogramMode(value: string) {
    this._histogramMode = value;
  }
  public resetHistogramMode() {
    this._histogramMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get histogramModeInput() {
    return this._histogramMode;
  }

  // host_sport_discovery - computed: false, optional: true, required: false
  private _hostSportDiscovery?: string; 
  public get hostSportDiscovery() {
    return this.getStringAttribute('host_sport_discovery');
  }
  public set hostSportDiscovery(value: string) {
    this._hostSportDiscovery = value;
  }
  public resetHostSportDiscovery() {
    this._hostSportDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostSportDiscoveryInput() {
    return this._hostSportDiscovery;
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

  // network_object_template - computed: false, optional: true, required: false
  private _networkObjectTemplate?: string; 
  public get networkObjectTemplate() {
    return this.getStringAttribute('network_object_template');
  }
  public set networkObjectTemplate(value: string) {
    this._networkObjectTemplate = value;
  }
  public resetNetworkObjectTemplate() {
    this._networkObjectTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkObjectTemplateInput() {
    return this._networkObjectTemplate;
  }

  // object_name - computed: false, optional: false, required: true
  private _objectName?: string; 
  public get objectName() {
    return this.getStringAttribute('object_name');
  }
  public set objectName(value: string) {
    this._objectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get objectNameInput() {
    return this._objectName;
  }

  // operational_mode - computed: false, optional: true, required: false
  private _operationalMode?: string; 
  public get operationalMode() {
    return this.getStringAttribute('operational_mode');
  }
  public set operationalMode(value: string) {
    this._operationalMode = value;
  }
  public resetOperationalMode() {
    this._operationalMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationalModeInput() {
    return this._operationalMode;
  }

  // service_discovery - computed: false, optional: true, required: false
  private _serviceDiscovery?: string; 
  public get serviceDiscovery() {
    return this.getStringAttribute('service_discovery');
  }
  public set serviceDiscovery(value: string) {
    this._serviceDiscovery = value;
  }
  public resetServiceDiscovery() {
    this._serviceDiscovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceDiscoveryInput() {
    return this._serviceDiscovery;
  }

  // sport_anomaly_detection - computed: false, optional: true, required: false
  private _sportAnomalyDetection?: string; 
  public get sportAnomalyDetection() {
    return this.getStringAttribute('sport_anomaly_detection');
  }
  public set sportAnomalyDetection(value: string) {
    this._sportAnomalyDetection = value;
  }
  public resetSportAnomalyDetection() {
    this._sportAnomalyDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sportAnomalyDetectionInput() {
    return this._sportAnomalyDetection;
  }

  // threshold_sensitivity - computed: false, optional: true, required: false
  private _thresholdSensitivity?: string; 
  public get thresholdSensitivity() {
    return this.getStringAttribute('threshold_sensitivity');
  }
  public set thresholdSensitivity(value: string) {
    this._thresholdSensitivity = value;
  }
  public resetThresholdSensitivity() {
    this._thresholdSensitivity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdSensitivityInput() {
    return this._thresholdSensitivity;
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

  // enable_top_k - computed: false, optional: true, required: false
  private _enableTopK = new DdosNetworkObjectEnableTopKList(this, "enable_top_k", false);
  public get enableTopK() {
    return this._enableTopK;
  }
  public putEnableTopK(value: DdosNetworkObjectEnableTopK[] | cdktf.IResolvable) {
    this._enableTopK.internalValue = value;
  }
  public resetEnableTopK() {
    this._enableTopK.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTopKInput() {
    return this._enableTopK.internalValue;
  }

  // host_anomaly_threshold - computed: false, optional: true, required: false
  private _hostAnomalyThreshold = new DdosNetworkObjectHostAnomalyThresholdOutputReference(this, "host_anomaly_threshold");
  public get hostAnomalyThreshold() {
    return this._hostAnomalyThreshold;
  }
  public putHostAnomalyThreshold(value: DdosNetworkObjectHostAnomalyThreshold) {
    this._hostAnomalyThreshold.internalValue = value;
  }
  public resetHostAnomalyThreshold() {
    this._hostAnomalyThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostAnomalyThresholdInput() {
    return this._hostAnomalyThreshold.internalValue;
  }

  // indicators_to_monitor - computed: false, optional: true, required: false
  private _indicatorsToMonitor = new DdosNetworkObjectIndicatorsToMonitorOutputReference(this, "indicators_to_monitor");
  public get indicatorsToMonitor() {
    return this._indicatorsToMonitor;
  }
  public putIndicatorsToMonitor(value: DdosNetworkObjectIndicatorsToMonitor) {
    this._indicatorsToMonitor.internalValue = value;
  }
  public resetIndicatorsToMonitor() {
    this._indicatorsToMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorsToMonitorInput() {
    return this._indicatorsToMonitor.internalValue;
  }

  // ip_list - computed: false, optional: true, required: false
  private _ipList = new DdosNetworkObjectIpListStructList(this, "ip_list", false);
  public get ipList() {
    return this._ipList;
  }
  public putIpList(value: DdosNetworkObjectIpListStruct[] | cdktf.IResolvable) {
    this._ipList.internalValue = value;
  }
  public resetIpList() {
    this._ipList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipListInput() {
    return this._ipList.internalValue;
  }

  // ipv6_list - computed: false, optional: true, required: false
  private _ipv6List = new DdosNetworkObjectIpv6ListStructList(this, "ipv6_list", false);
  public get ipv6List() {
    return this._ipv6List;
  }
  public putIpv6List(value: DdosNetworkObjectIpv6ListStruct[] | cdktf.IResolvable) {
    this._ipv6List.internalValue = value;
  }
  public resetIpv6List() {
    this._ipv6List.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ListInput() {
    return this._ipv6List.internalValue;
  }

  // network_object_anomaly_threshold - computed: false, optional: true, required: false
  private _networkObjectAnomalyThreshold = new DdosNetworkObjectNetworkObjectAnomalyThresholdOutputReference(this, "network_object_anomaly_threshold");
  public get networkObjectAnomalyThreshold() {
    return this._networkObjectAnomalyThreshold;
  }
  public putNetworkObjectAnomalyThreshold(value: DdosNetworkObjectNetworkObjectAnomalyThreshold) {
    this._networkObjectAnomalyThreshold.internalValue = value;
  }
  public resetNetworkObjectAnomalyThreshold() {
    this._networkObjectAnomalyThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkObjectAnomalyThresholdInput() {
    return this._networkObjectAnomalyThreshold.internalValue;
  }

  // notification - computed: false, optional: true, required: false
  private _notification = new DdosNetworkObjectNotificationOutputReference(this, "notification");
  public get notification() {
    return this._notification;
  }
  public putNotification(value: DdosNetworkObjectNotification) {
    this._notification.internalValue = value;
  }
  public resetNotification() {
    this._notification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationInput() {
    return this._notification.internalValue;
  }

  // relative_auto_break_down_threshold - computed: false, optional: true, required: false
  private _relativeAutoBreakDownThreshold = new DdosNetworkObjectRelativeAutoBreakDownThresholdOutputReference(this, "relative_auto_break_down_threshold");
  public get relativeAutoBreakDownThreshold() {
    return this._relativeAutoBreakDownThreshold;
  }
  public putRelativeAutoBreakDownThreshold(value: DdosNetworkObjectRelativeAutoBreakDownThreshold) {
    this._relativeAutoBreakDownThreshold.internalValue = value;
  }
  public resetRelativeAutoBreakDownThreshold() {
    this._relativeAutoBreakDownThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativeAutoBreakDownThresholdInput() {
    return this._relativeAutoBreakDownThreshold.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new DdosNetworkObjectSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosNetworkObjectSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // service_break_down_threshold_local - computed: false, optional: true, required: false
  private _serviceBreakDownThresholdLocal = new DdosNetworkObjectServiceBreakDownThresholdLocalOutputReference(this, "service_break_down_threshold_local");
  public get serviceBreakDownThresholdLocal() {
    return this._serviceBreakDownThresholdLocal;
  }
  public putServiceBreakDownThresholdLocal(value: DdosNetworkObjectServiceBreakDownThresholdLocal) {
    this._serviceBreakDownThresholdLocal.internalValue = value;
  }
  public resetServiceBreakDownThresholdLocal() {
    this._serviceBreakDownThresholdLocal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceBreakDownThresholdLocalInput() {
    return this._serviceBreakDownThresholdLocal.internalValue;
  }

  // sport_anomaly_threshold - computed: false, optional: true, required: false
  private _sportAnomalyThreshold = new DdosNetworkObjectSportAnomalyThresholdOutputReference(this, "sport_anomaly_threshold");
  public get sportAnomalyThreshold() {
    return this._sportAnomalyThreshold;
  }
  public putSportAnomalyThreshold(value: DdosNetworkObjectSportAnomalyThreshold) {
    this._sportAnomalyThreshold.internalValue = value;
  }
  public resetSportAnomalyThreshold() {
    this._sportAnomalyThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sportAnomalyThresholdInput() {
    return this._sportAnomalyThreshold.internalValue;
  }

  // sport_discovery_threshold - computed: false, optional: true, required: false
  private _sportDiscoveryThreshold = new DdosNetworkObjectSportDiscoveryThresholdOutputReference(this, "sport_discovery_threshold");
  public get sportDiscoveryThreshold() {
    return this._sportDiscoveryThreshold;
  }
  public putSportDiscoveryThreshold(value: DdosNetworkObjectSportDiscoveryThreshold) {
    this._sportDiscoveryThreshold.internalValue = value;
  }
  public resetSportDiscoveryThreshold() {
    this._sportDiscoveryThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sportDiscoveryThresholdInput() {
    return this._sportDiscoveryThreshold.internalValue;
  }

  // sport_list - computed: false, optional: true, required: false
  private _sportList = new DdosNetworkObjectSportListStructList(this, "sport_list", false);
  public get sportList() {
    return this._sportList;
  }
  public putSportList(value: DdosNetworkObjectSportListStruct[] | cdktf.IResolvable) {
    this._sportList.internalValue = value;
  }
  public resetSportList() {
    this._sportList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sportListInput() {
    return this._sportList.internalValue;
  }

  // static_auto_break_down_threshold - computed: false, optional: true, required: false
  private _staticAutoBreakDownThreshold = new DdosNetworkObjectStaticAutoBreakDownThresholdOutputReference(this, "static_auto_break_down_threshold");
  public get staticAutoBreakDownThreshold() {
    return this._staticAutoBreakDownThreshold;
  }
  public putStaticAutoBreakDownThreshold(value: DdosNetworkObjectStaticAutoBreakDownThreshold) {
    this._staticAutoBreakDownThreshold.internalValue = value;
  }
  public resetStaticAutoBreakDownThreshold() {
    this._staticAutoBreakDownThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staticAutoBreakDownThresholdInput() {
    return this._staticAutoBreakDownThreshold.internalValue;
  }

  // sub_network - computed: false, optional: true, required: false
  private _subNetwork = new DdosNetworkObjectSubNetworkOutputReference(this, "sub_network");
  public get subNetwork() {
    return this._subNetwork;
  }
  public putSubNetwork(value: DdosNetworkObjectSubNetwork) {
    this._subNetwork.internalValue = value;
  }
  public resetSubNetwork() {
    this._subNetwork.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subNetworkInput() {
    return this._subNetwork.internalValue;
  }

  // topk_destinations - computed: false, optional: true, required: false
  private _topkDestinations = new DdosNetworkObjectTopkDestinationsOutputReference(this, "topk_destinations");
  public get topkDestinations() {
    return this._topkDestinations;
  }
  public putTopkDestinations(value: DdosNetworkObjectTopkDestinations) {
    this._topkDestinations.internalValue = value;
  }
  public resetTopkDestinations() {
    this._topkDestinations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topkDestinationsInput() {
    return this._topkDestinations.internalValue;
  }

  // trustlist - computed: false, optional: true, required: false
  private _trustlist = new DdosNetworkObjectTrustlistStructOutputReference(this, "trustlist");
  public get trustlist() {
    return this._trustlist;
  }
  public putTrustlist(value: DdosNetworkObjectTrustlistStruct) {
    this._trustlist.internalValue = value;
  }
  public resetTrustlist() {
    this._trustlist.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustlistInput() {
    return this._trustlist.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anomaly_detection_trigger: cdktf.stringToTerraform(this._anomalyDetectionTrigger),
      flooding_multiplier: cdktf.numberToTerraform(this._floodingMultiplier),
      histogram_mode: cdktf.stringToTerraform(this._histogramMode),
      host_sport_discovery: cdktf.stringToTerraform(this._hostSportDiscovery),
      id: cdktf.stringToTerraform(this._id),
      network_object_template: cdktf.stringToTerraform(this._networkObjectTemplate),
      object_name: cdktf.stringToTerraform(this._objectName),
      operational_mode: cdktf.stringToTerraform(this._operationalMode),
      service_discovery: cdktf.stringToTerraform(this._serviceDiscovery),
      sport_anomaly_detection: cdktf.stringToTerraform(this._sportAnomalyDetection),
      threshold_sensitivity: cdktf.stringToTerraform(this._thresholdSensitivity),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      enable_top_k: cdktf.listMapper(ddosNetworkObjectEnableTopKToTerraform, true)(this._enableTopK.internalValue),
      host_anomaly_threshold: ddosNetworkObjectHostAnomalyThresholdToTerraform(this._hostAnomalyThreshold.internalValue),
      indicators_to_monitor: ddosNetworkObjectIndicatorsToMonitorToTerraform(this._indicatorsToMonitor.internalValue),
      ip_list: cdktf.listMapper(ddosNetworkObjectIpListStructToTerraform, true)(this._ipList.internalValue),
      ipv6_list: cdktf.listMapper(ddosNetworkObjectIpv6ListStructToTerraform, true)(this._ipv6List.internalValue),
      network_object_anomaly_threshold: ddosNetworkObjectNetworkObjectAnomalyThresholdToTerraform(this._networkObjectAnomalyThreshold.internalValue),
      notification: ddosNetworkObjectNotificationToTerraform(this._notification.internalValue),
      relative_auto_break_down_threshold: ddosNetworkObjectRelativeAutoBreakDownThresholdToTerraform(this._relativeAutoBreakDownThreshold.internalValue),
      sampling_enable: cdktf.listMapper(ddosNetworkObjectSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      service_break_down_threshold_local: ddosNetworkObjectServiceBreakDownThresholdLocalToTerraform(this._serviceBreakDownThresholdLocal.internalValue),
      sport_anomaly_threshold: ddosNetworkObjectSportAnomalyThresholdToTerraform(this._sportAnomalyThreshold.internalValue),
      sport_discovery_threshold: ddosNetworkObjectSportDiscoveryThresholdToTerraform(this._sportDiscoveryThreshold.internalValue),
      sport_list: cdktf.listMapper(ddosNetworkObjectSportListStructToTerraform, true)(this._sportList.internalValue),
      static_auto_break_down_threshold: ddosNetworkObjectStaticAutoBreakDownThresholdToTerraform(this._staticAutoBreakDownThreshold.internalValue),
      sub_network: ddosNetworkObjectSubNetworkToTerraform(this._subNetwork.internalValue),
      topk_destinations: ddosNetworkObjectTopkDestinationsToTerraform(this._topkDestinations.internalValue),
      trustlist: ddosNetworkObjectTrustlistStructToTerraform(this._trustlist.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      anomaly_detection_trigger: {
        value: cdktf.stringToHclTerraform(this._anomalyDetectionTrigger),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      flooding_multiplier: {
        value: cdktf.numberToHclTerraform(this._floodingMultiplier),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      histogram_mode: {
        value: cdktf.stringToHclTerraform(this._histogramMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host_sport_discovery: {
        value: cdktf.stringToHclTerraform(this._hostSportDiscovery),
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
      network_object_template: {
        value: cdktf.stringToHclTerraform(this._networkObjectTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      object_name: {
        value: cdktf.stringToHclTerraform(this._objectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operational_mode: {
        value: cdktf.stringToHclTerraform(this._operationalMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_discovery: {
        value: cdktf.stringToHclTerraform(this._serviceDiscovery),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sport_anomaly_detection: {
        value: cdktf.stringToHclTerraform(this._sportAnomalyDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold_sensitivity: {
        value: cdktf.stringToHclTerraform(this._thresholdSensitivity),
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
      enable_top_k: {
        value: cdktf.listMapperHcl(ddosNetworkObjectEnableTopKToHclTerraform, true)(this._enableTopK.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectEnableTopKList",
      },
      host_anomaly_threshold: {
        value: ddosNetworkObjectHostAnomalyThresholdToHclTerraform(this._hostAnomalyThreshold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectHostAnomalyThresholdList",
      },
      indicators_to_monitor: {
        value: ddosNetworkObjectIndicatorsToMonitorToHclTerraform(this._indicatorsToMonitor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectIndicatorsToMonitorList",
      },
      ip_list: {
        value: cdktf.listMapperHcl(ddosNetworkObjectIpListStructToHclTerraform, true)(this._ipList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectIpListStructList",
      },
      ipv6_list: {
        value: cdktf.listMapperHcl(ddosNetworkObjectIpv6ListStructToHclTerraform, true)(this._ipv6List.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectIpv6ListStructList",
      },
      network_object_anomaly_threshold: {
        value: ddosNetworkObjectNetworkObjectAnomalyThresholdToHclTerraform(this._networkObjectAnomalyThreshold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectNetworkObjectAnomalyThresholdList",
      },
      notification: {
        value: ddosNetworkObjectNotificationToHclTerraform(this._notification.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectNotificationList",
      },
      relative_auto_break_down_threshold: {
        value: ddosNetworkObjectRelativeAutoBreakDownThresholdToHclTerraform(this._relativeAutoBreakDownThreshold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectRelativeAutoBreakDownThresholdList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(ddosNetworkObjectSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectSamplingEnableList",
      },
      service_break_down_threshold_local: {
        value: ddosNetworkObjectServiceBreakDownThresholdLocalToHclTerraform(this._serviceBreakDownThresholdLocal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectServiceBreakDownThresholdLocalList",
      },
      sport_anomaly_threshold: {
        value: ddosNetworkObjectSportAnomalyThresholdToHclTerraform(this._sportAnomalyThreshold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectSportAnomalyThresholdList",
      },
      sport_discovery_threshold: {
        value: ddosNetworkObjectSportDiscoveryThresholdToHclTerraform(this._sportDiscoveryThreshold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectSportDiscoveryThresholdList",
      },
      sport_list: {
        value: cdktf.listMapperHcl(ddosNetworkObjectSportListStructToHclTerraform, true)(this._sportList.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectSportListStructList",
      },
      static_auto_break_down_threshold: {
        value: ddosNetworkObjectStaticAutoBreakDownThresholdToHclTerraform(this._staticAutoBreakDownThreshold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectStaticAutoBreakDownThresholdList",
      },
      sub_network: {
        value: ddosNetworkObjectSubNetworkToHclTerraform(this._subNetwork.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectSubNetworkList",
      },
      topk_destinations: {
        value: ddosNetworkObjectTopkDestinationsToHclTerraform(this._topkDestinations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectTopkDestinationsList",
      },
      trustlist: {
        value: ddosNetworkObjectTrustlistStructToHclTerraform(this._trustlist.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectTrustlistStructList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
