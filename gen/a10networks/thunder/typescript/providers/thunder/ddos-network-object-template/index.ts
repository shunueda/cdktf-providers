// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosNetworkObjectTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * 'all': Use both learned and static thresholds (static thresholds take precedence); 'static-threshold-only': Use static thresholds only;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#anomaly_detection_trigger DdosNetworkObjectTemplate#anomaly_detection_trigger}
  */
  readonly anomalyDetectionTrigger?: string;
  /**
  * multiplier for flooding detection threshold in network objects (default 2x threshold)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#flooding_multiplier DdosNetworkObjectTemplate#flooding_multiplier}
  */
  readonly floodingMultiplier?: number;
  /**
  * 'off': histogram feature disabled; 'monitor': histogram feature enabled with anomaly escalation; 'observe': histogram feature enabled and observe only;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#histogram_mode DdosNetworkObjectTemplate#histogram_mode}
  */
  readonly histogramMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#id DdosNetworkObjectTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * DDOS network-object-template name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#name DdosNetworkObjectTemplate#name}
  */
  readonly name: string;
  /**
  * 'monitor': Monitor mode; 'learning': Learning mode;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#operational_mode DdosNetworkObjectTemplate#operational_mode}
  */
  readonly operationalMode?: string;
  /**
  * 'disable': Disable service discovery for hosts (default: enabled);
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#service_discovery DdosNetworkObjectTemplate#service_discovery}
  */
  readonly serviceDiscovery?: string;
  /**
  * tune threshold ranges with levels LOW/MEDIUM/HIGH/OFF (default) or multiplier of threshold value (available options are LOW=5x/MEDIUM=3x/HIGH=1.5x/OFF=1x, or float value between 1.0-10.0)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#threshold_sensitivity DdosNetworkObjectTemplate#threshold_sensitivity}
  */
  readonly thresholdSensitivity?: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#user_tag DdosNetworkObjectTemplate#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#uuid DdosNetworkObjectTemplate#uuid}
  */
  readonly uuid?: string;
  /**
  * host_anomaly_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#host_anomaly_threshold DdosNetworkObjectTemplate#host_anomaly_threshold}
  */
  readonly hostAnomalyThreshold?: DdosNetworkObjectTemplateHostAnomalyThreshold;
  /**
  * indicators_to_monitor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#indicators_to_monitor DdosNetworkObjectTemplate#indicators_to_monitor}
  */
  readonly indicatorsToMonitor?: DdosNetworkObjectTemplateIndicatorsToMonitor;
  /**
  * network_object_anomaly_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#network_object_anomaly_threshold DdosNetworkObjectTemplate#network_object_anomaly_threshold}
  */
  readonly networkObjectAnomalyThreshold?: DdosNetworkObjectTemplateNetworkObjectAnomalyThreshold;
  /**
  * service_break_down_threshold_local block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#service_break_down_threshold_local DdosNetworkObjectTemplate#service_break_down_threshold_local}
  */
  readonly serviceBreakDownThresholdLocal?: DdosNetworkObjectTemplateServiceBreakDownThresholdLocal;
  /**
  * sport_anomaly_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#sport_anomaly_threshold DdosNetworkObjectTemplate#sport_anomaly_threshold}
  */
  readonly sportAnomalyThreshold?: DdosNetworkObjectTemplateSportAnomalyThreshold;
}
export interface DdosNetworkObjectTemplateHostAnomalyThreshold {
  /**
  * Forward bit rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#host_bit_rate DdosNetworkObjectTemplate#host_bit_rate}
  */
  readonly hostBitRate?: number;
  /**
  * FIN packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#host_fin_rate DdosNetworkObjectTemplate#host_fin_rate}
  */
  readonly hostFinRate?: number;
  /**
  * Flow count of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#host_flow_count DdosNetworkObjectTemplate#host_flow_count}
  */
  readonly hostFlowCount?: number;
  /**
  * ICMP packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#host_icmp_pkt_rate DdosNetworkObjectTemplate#host_icmp_pkt_rate}
  */
  readonly hostIcmpPktRate?: number;
  /**
  * Forward packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#host_pkt_rate DdosNetworkObjectTemplate#host_pkt_rate}
  */
  readonly hostPktRate?: number;
  /**
  * Reverse bit rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#host_rev_bit_rate DdosNetworkObjectTemplate#host_rev_bit_rate}
  */
  readonly hostRevBitRate?: number;
  /**
  * Reverse packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#host_rev_pkt_rate DdosNetworkObjectTemplate#host_rev_pkt_rate}
  */
  readonly hostRevPktRate?: number;
  /**
  * RST packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#host_rst_rate DdosNetworkObjectTemplate#host_rst_rate}
  */
  readonly hostRstRate?: number;
  /**
  * SYN packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#host_syn_rate DdosNetworkObjectTemplate#host_syn_rate}
  */
  readonly hostSynRate?: number;
  /**
  * Tcp packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#host_tcp_pkt_rate DdosNetworkObjectTemplate#host_tcp_pkt_rate}
  */
  readonly hostTcpPktRate?: number;
  /**
  * Udp packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#host_udp_pkt_rate DdosNetworkObjectTemplate#host_udp_pkt_rate}
  */
  readonly hostUdpPktRate?: number;
  /**
  * Forward bit rate of per undiscovered host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#host_undiscovered_host_bit_rate DdosNetworkObjectTemplate#host_undiscovered_host_bit_rate}
  */
  readonly hostUndiscoveredHostBitRate?: number;
  /**
  * forward packet rate of per undiscovered host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#host_undiscovered_host_pkt_rate DdosNetworkObjectTemplate#host_undiscovered_host_pkt_rate}
  */
  readonly hostUndiscoveredHostPktRate?: number;
  /**
  * Undiscovered forward packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#host_undiscovered_pkt_rate DdosNetworkObjectTemplate#host_undiscovered_pkt_rate}
  */
  readonly hostUndiscoveredPktRate?: number;
}

export function ddosNetworkObjectTemplateHostAnomalyThresholdToTerraform(struct?: DdosNetworkObjectTemplateHostAnomalyThresholdOutputReference | DdosNetworkObjectTemplateHostAnomalyThreshold): any {
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


export function ddosNetworkObjectTemplateHostAnomalyThresholdToHclTerraform(struct?: DdosNetworkObjectTemplateHostAnomalyThresholdOutputReference | DdosNetworkObjectTemplateHostAnomalyThreshold): any {
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

export class DdosNetworkObjectTemplateHostAnomalyThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectTemplateHostAnomalyThreshold | undefined {
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

  public set internalValue(value: DdosNetworkObjectTemplateHostAnomalyThreshold | undefined) {
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
export interface DdosNetworkObjectTemplateIndicatorsToMonitor {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#enable DdosNetworkObjectTemplate#enable}
  */
  readonly enable?: number;
  /**
  * Forward bit rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#monitor_bit_rate DdosNetworkObjectTemplate#monitor_bit_rate}
  */
  readonly monitorBitRate?: number;
  /**
  * FIN packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#monitor_fin_rate DdosNetworkObjectTemplate#monitor_fin_rate}
  */
  readonly monitorFinRate?: number;
  /**
  * Flow count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#monitor_flow_count DdosNetworkObjectTemplate#monitor_flow_count}
  */
  readonly monitorFlowCount?: number;
  /**
  * ICMP packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#monitor_icmp_pkt_rate DdosNetworkObjectTemplate#monitor_icmp_pkt_rate}
  */
  readonly monitorIcmpPktRate?: number;
  /**
  * Forward packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#monitor_pkt_rate DdosNetworkObjectTemplate#monitor_pkt_rate}
  */
  readonly monitorPktRate?: number;
  /**
  * Reverse bit rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#monitor_rev_bit_rate DdosNetworkObjectTemplate#monitor_rev_bit_rate}
  */
  readonly monitorRevBitRate?: number;
  /**
  * Reverse packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#monitor_rev_pkt_rate DdosNetworkObjectTemplate#monitor_rev_pkt_rate}
  */
  readonly monitorRevPktRate?: number;
  /**
  * RST packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#monitor_rst_rate DdosNetworkObjectTemplate#monitor_rst_rate}
  */
  readonly monitorRstRate?: number;
  /**
  * SYN packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#monitor_syn_rate DdosNetworkObjectTemplate#monitor_syn_rate}
  */
  readonly monitorSynRate?: number;
  /**
  * TCP packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#monitor_tcp_pkt_rate DdosNetworkObjectTemplate#monitor_tcp_pkt_rate}
  */
  readonly monitorTcpPktRate?: number;
  /**
  * UDP packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#monitor_udp_pkt_rate DdosNetworkObjectTemplate#monitor_udp_pkt_rate}
  */
  readonly monitorUdpPktRate?: number;
  /**
  * Undiscovered forward packet rate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#monitor_undiscovered_pkt_rate DdosNetworkObjectTemplate#monitor_undiscovered_pkt_rate}
  */
  readonly monitorUndiscoveredPktRate?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#uuid DdosNetworkObjectTemplate#uuid}
  */
  readonly uuid?: string;
}

export function ddosNetworkObjectTemplateIndicatorsToMonitorToTerraform(struct?: DdosNetworkObjectTemplateIndicatorsToMonitorOutputReference | DdosNetworkObjectTemplateIndicatorsToMonitor): any {
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


export function ddosNetworkObjectTemplateIndicatorsToMonitorToHclTerraform(struct?: DdosNetworkObjectTemplateIndicatorsToMonitorOutputReference | DdosNetworkObjectTemplateIndicatorsToMonitor): any {
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

export class DdosNetworkObjectTemplateIndicatorsToMonitorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectTemplateIndicatorsToMonitor | undefined {
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

  public set internalValue(value: DdosNetworkObjectTemplateIndicatorsToMonitor | undefined) {
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
export interface DdosNetworkObjectTemplateNetworkObjectAnomalyThreshold {
  /**
  * Bit rate of the network-object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#network_object_bit_rate DdosNetworkObjectTemplate#network_object_bit_rate}
  */
  readonly networkObjectBitRate?: number;
  /**
  * Packet rate of the network-object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#network_object_pkt_rate DdosNetworkObjectTemplate#network_object_pkt_rate}
  */
  readonly networkObjectPktRate?: number;
}

export function ddosNetworkObjectTemplateNetworkObjectAnomalyThresholdToTerraform(struct?: DdosNetworkObjectTemplateNetworkObjectAnomalyThresholdOutputReference | DdosNetworkObjectTemplateNetworkObjectAnomalyThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    network_object_bit_rate: cdktf.numberToTerraform(struct!.networkObjectBitRate),
    network_object_pkt_rate: cdktf.numberToTerraform(struct!.networkObjectPktRate),
  }
}


export function ddosNetworkObjectTemplateNetworkObjectAnomalyThresholdToHclTerraform(struct?: DdosNetworkObjectTemplateNetworkObjectAnomalyThresholdOutputReference | DdosNetworkObjectTemplateNetworkObjectAnomalyThreshold): any {
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

export class DdosNetworkObjectTemplateNetworkObjectAnomalyThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectTemplateNetworkObjectAnomalyThreshold | undefined {
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

  public set internalValue(value: DdosNetworkObjectTemplateNetworkObjectAnomalyThreshold | undefined) {
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
export interface DdosNetworkObjectTemplateServiceBreakDownThresholdLocal {
  /**
  * percentage of parent ip node
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#svc_percentage DdosNetworkObjectTemplate#svc_percentage}
  */
  readonly svcPercentage?: number;
}

export function ddosNetworkObjectTemplateServiceBreakDownThresholdLocalToTerraform(struct?: DdosNetworkObjectTemplateServiceBreakDownThresholdLocalOutputReference | DdosNetworkObjectTemplateServiceBreakDownThresholdLocal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    svc_percentage: cdktf.numberToTerraform(struct!.svcPercentage),
  }
}


export function ddosNetworkObjectTemplateServiceBreakDownThresholdLocalToHclTerraform(struct?: DdosNetworkObjectTemplateServiceBreakDownThresholdLocalOutputReference | DdosNetworkObjectTemplateServiceBreakDownThresholdLocal): any {
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

export class DdosNetworkObjectTemplateServiceBreakDownThresholdLocalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectTemplateServiceBreakDownThresholdLocal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._svcPercentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.svcPercentage = this._svcPercentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectTemplateServiceBreakDownThresholdLocal | undefined) {
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
export interface DdosNetworkObjectTemplateSportAnomalyThresholdBitRate {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#uuid DdosNetworkObjectTemplate#uuid}
  */
  readonly uuid?: string;
  /**
  * Bit rate of a source port entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#value DdosNetworkObjectTemplate#value}
  */
  readonly value?: number;
}

export function ddosNetworkObjectTemplateSportAnomalyThresholdBitRateToTerraform(struct?: DdosNetworkObjectTemplateSportAnomalyThresholdBitRateOutputReference | DdosNetworkObjectTemplateSportAnomalyThresholdBitRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function ddosNetworkObjectTemplateSportAnomalyThresholdBitRateToHclTerraform(struct?: DdosNetworkObjectTemplateSportAnomalyThresholdBitRateOutputReference | DdosNetworkObjectTemplateSportAnomalyThresholdBitRate): any {
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

export class DdosNetworkObjectTemplateSportAnomalyThresholdBitRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectTemplateSportAnomalyThresholdBitRate | undefined {
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

  public set internalValue(value: DdosNetworkObjectTemplateSportAnomalyThresholdBitRate | undefined) {
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
export interface DdosNetworkObjectTemplateSportAnomalyThresholdBitRatePercentage {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#uuid DdosNetworkObjectTemplate#uuid}
  */
  readonly uuid?: string;
  /**
  * Percentage of source port entry's parent entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#value DdosNetworkObjectTemplate#value}
  */
  readonly value?: number;
}

export function ddosNetworkObjectTemplateSportAnomalyThresholdBitRatePercentageToTerraform(struct?: DdosNetworkObjectTemplateSportAnomalyThresholdBitRatePercentageOutputReference | DdosNetworkObjectTemplateSportAnomalyThresholdBitRatePercentage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function ddosNetworkObjectTemplateSportAnomalyThresholdBitRatePercentageToHclTerraform(struct?: DdosNetworkObjectTemplateSportAnomalyThresholdBitRatePercentageOutputReference | DdosNetworkObjectTemplateSportAnomalyThresholdBitRatePercentage): any {
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

export class DdosNetworkObjectTemplateSportAnomalyThresholdBitRatePercentageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectTemplateSportAnomalyThresholdBitRatePercentage | undefined {
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

  public set internalValue(value: DdosNetworkObjectTemplateSportAnomalyThresholdBitRatePercentage | undefined) {
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
export interface DdosNetworkObjectTemplateSportAnomalyThresholdPacketRate {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#uuid DdosNetworkObjectTemplate#uuid}
  */
  readonly uuid?: string;
  /**
  * Packet rate of a source port entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#value DdosNetworkObjectTemplate#value}
  */
  readonly value?: number;
}

export function ddosNetworkObjectTemplateSportAnomalyThresholdPacketRateToTerraform(struct?: DdosNetworkObjectTemplateSportAnomalyThresholdPacketRateOutputReference | DdosNetworkObjectTemplateSportAnomalyThresholdPacketRate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function ddosNetworkObjectTemplateSportAnomalyThresholdPacketRateToHclTerraform(struct?: DdosNetworkObjectTemplateSportAnomalyThresholdPacketRateOutputReference | DdosNetworkObjectTemplateSportAnomalyThresholdPacketRate): any {
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

export class DdosNetworkObjectTemplateSportAnomalyThresholdPacketRateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectTemplateSportAnomalyThresholdPacketRate | undefined {
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

  public set internalValue(value: DdosNetworkObjectTemplateSportAnomalyThresholdPacketRate | undefined) {
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
export interface DdosNetworkObjectTemplateSportAnomalyThresholdPacketRatePercentage {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#uuid DdosNetworkObjectTemplate#uuid}
  */
  readonly uuid?: string;
  /**
  * Percentage of source port entry's parent entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#value DdosNetworkObjectTemplate#value}
  */
  readonly value?: number;
}

export function ddosNetworkObjectTemplateSportAnomalyThresholdPacketRatePercentageToTerraform(struct?: DdosNetworkObjectTemplateSportAnomalyThresholdPacketRatePercentageOutputReference | DdosNetworkObjectTemplateSportAnomalyThresholdPacketRatePercentage): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    value: cdktf.numberToTerraform(struct!.value),
  }
}


export function ddosNetworkObjectTemplateSportAnomalyThresholdPacketRatePercentageToHclTerraform(struct?: DdosNetworkObjectTemplateSportAnomalyThresholdPacketRatePercentageOutputReference | DdosNetworkObjectTemplateSportAnomalyThresholdPacketRatePercentage): any {
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

export class DdosNetworkObjectTemplateSportAnomalyThresholdPacketRatePercentageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectTemplateSportAnomalyThresholdPacketRatePercentage | undefined {
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

  public set internalValue(value: DdosNetworkObjectTemplateSportAnomalyThresholdPacketRatePercentage | undefined) {
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
export interface DdosNetworkObjectTemplateSportAnomalyThreshold {
  /**
  * bit_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#bit_rate DdosNetworkObjectTemplate#bit_rate}
  */
  readonly bitRate?: DdosNetworkObjectTemplateSportAnomalyThresholdBitRate;
  /**
  * bit_rate_percentage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#bit_rate_percentage DdosNetworkObjectTemplate#bit_rate_percentage}
  */
  readonly bitRatePercentage?: DdosNetworkObjectTemplateSportAnomalyThresholdBitRatePercentage;
  /**
  * packet_rate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#packet_rate DdosNetworkObjectTemplate#packet_rate}
  */
  readonly packetRate?: DdosNetworkObjectTemplateSportAnomalyThresholdPacketRate;
  /**
  * packet_rate_percentage block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#packet_rate_percentage DdosNetworkObjectTemplate#packet_rate_percentage}
  */
  readonly packetRatePercentage?: DdosNetworkObjectTemplateSportAnomalyThresholdPacketRatePercentage;
}

export function ddosNetworkObjectTemplateSportAnomalyThresholdToTerraform(struct?: DdosNetworkObjectTemplateSportAnomalyThresholdOutputReference | DdosNetworkObjectTemplateSportAnomalyThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bit_rate: ddosNetworkObjectTemplateSportAnomalyThresholdBitRateToTerraform(struct!.bitRate),
    bit_rate_percentage: ddosNetworkObjectTemplateSportAnomalyThresholdBitRatePercentageToTerraform(struct!.bitRatePercentage),
    packet_rate: ddosNetworkObjectTemplateSportAnomalyThresholdPacketRateToTerraform(struct!.packetRate),
    packet_rate_percentage: ddosNetworkObjectTemplateSportAnomalyThresholdPacketRatePercentageToTerraform(struct!.packetRatePercentage),
  }
}


export function ddosNetworkObjectTemplateSportAnomalyThresholdToHclTerraform(struct?: DdosNetworkObjectTemplateSportAnomalyThresholdOutputReference | DdosNetworkObjectTemplateSportAnomalyThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bit_rate: {
      value: ddosNetworkObjectTemplateSportAnomalyThresholdBitRateToHclTerraform(struct!.bitRate),
      isBlock: true,
      type: "list",
      storageClassType: "DdosNetworkObjectTemplateSportAnomalyThresholdBitRateList",
    },
    bit_rate_percentage: {
      value: ddosNetworkObjectTemplateSportAnomalyThresholdBitRatePercentageToHclTerraform(struct!.bitRatePercentage),
      isBlock: true,
      type: "list",
      storageClassType: "DdosNetworkObjectTemplateSportAnomalyThresholdBitRatePercentageList",
    },
    packet_rate: {
      value: ddosNetworkObjectTemplateSportAnomalyThresholdPacketRateToHclTerraform(struct!.packetRate),
      isBlock: true,
      type: "list",
      storageClassType: "DdosNetworkObjectTemplateSportAnomalyThresholdPacketRateList",
    },
    packet_rate_percentage: {
      value: ddosNetworkObjectTemplateSportAnomalyThresholdPacketRatePercentageToHclTerraform(struct!.packetRatePercentage),
      isBlock: true,
      type: "list",
      storageClassType: "DdosNetworkObjectTemplateSportAnomalyThresholdPacketRatePercentageList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DdosNetworkObjectTemplateSportAnomalyThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectTemplateSportAnomalyThreshold | undefined {
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
    if (this._packetRate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRate = this._packetRate?.internalValue;
    }
    if (this._packetRatePercentage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.packetRatePercentage = this._packetRatePercentage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DdosNetworkObjectTemplateSportAnomalyThreshold | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bitRate.internalValue = undefined;
      this._bitRatePercentage.internalValue = undefined;
      this._packetRate.internalValue = undefined;
      this._packetRatePercentage.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bitRate.internalValue = value.bitRate;
      this._bitRatePercentage.internalValue = value.bitRatePercentage;
      this._packetRate.internalValue = value.packetRate;
      this._packetRatePercentage.internalValue = value.packetRatePercentage;
    }
  }

  // bit_rate - computed: false, optional: true, required: false
  private _bitRate = new DdosNetworkObjectTemplateSportAnomalyThresholdBitRateOutputReference(this, "bit_rate");
  public get bitRate() {
    return this._bitRate;
  }
  public putBitRate(value: DdosNetworkObjectTemplateSportAnomalyThresholdBitRate) {
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
  private _bitRatePercentage = new DdosNetworkObjectTemplateSportAnomalyThresholdBitRatePercentageOutputReference(this, "bit_rate_percentage");
  public get bitRatePercentage() {
    return this._bitRatePercentage;
  }
  public putBitRatePercentage(value: DdosNetworkObjectTemplateSportAnomalyThresholdBitRatePercentage) {
    this._bitRatePercentage.internalValue = value;
  }
  public resetBitRatePercentage() {
    this._bitRatePercentage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bitRatePercentageInput() {
    return this._bitRatePercentage.internalValue;
  }

  // packet_rate - computed: false, optional: true, required: false
  private _packetRate = new DdosNetworkObjectTemplateSportAnomalyThresholdPacketRateOutputReference(this, "packet_rate");
  public get packetRate() {
    return this._packetRate;
  }
  public putPacketRate(value: DdosNetworkObjectTemplateSportAnomalyThresholdPacketRate) {
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
  private _packetRatePercentage = new DdosNetworkObjectTemplateSportAnomalyThresholdPacketRatePercentageOutputReference(this, "packet_rate_percentage");
  public get packetRatePercentage() {
    return this._packetRatePercentage;
  }
  public putPacketRatePercentage(value: DdosNetworkObjectTemplateSportAnomalyThresholdPacketRatePercentage) {
    this._packetRatePercentage.internalValue = value;
  }
  public resetPacketRatePercentage() {
    this._packetRatePercentage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetRatePercentageInput() {
    return this._packetRatePercentage.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template thunder_ddos_network_object_template}
*/
export class DdosNetworkObjectTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_network_object_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosNetworkObjectTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosNetworkObjectTemplate to import
  * @param importFromId The id of the existing DdosNetworkObjectTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosNetworkObjectTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_network_object_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_template thunder_ddos_network_object_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosNetworkObjectTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: DdosNetworkObjectTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_network_object_template',
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
    this._id = config.id;
    this._name = config.name;
    this._operationalMode = config.operationalMode;
    this._serviceDiscovery = config.serviceDiscovery;
    this._thresholdSensitivity = config.thresholdSensitivity;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._hostAnomalyThreshold.internalValue = config.hostAnomalyThreshold;
    this._indicatorsToMonitor.internalValue = config.indicatorsToMonitor;
    this._networkObjectAnomalyThreshold.internalValue = config.networkObjectAnomalyThreshold;
    this._serviceBreakDownThresholdLocal.internalValue = config.serviceBreakDownThresholdLocal;
    this._sportAnomalyThreshold.internalValue = config.sportAnomalyThreshold;
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

  // host_anomaly_threshold - computed: false, optional: true, required: false
  private _hostAnomalyThreshold = new DdosNetworkObjectTemplateHostAnomalyThresholdOutputReference(this, "host_anomaly_threshold");
  public get hostAnomalyThreshold() {
    return this._hostAnomalyThreshold;
  }
  public putHostAnomalyThreshold(value: DdosNetworkObjectTemplateHostAnomalyThreshold) {
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
  private _indicatorsToMonitor = new DdosNetworkObjectTemplateIndicatorsToMonitorOutputReference(this, "indicators_to_monitor");
  public get indicatorsToMonitor() {
    return this._indicatorsToMonitor;
  }
  public putIndicatorsToMonitor(value: DdosNetworkObjectTemplateIndicatorsToMonitor) {
    this._indicatorsToMonitor.internalValue = value;
  }
  public resetIndicatorsToMonitor() {
    this._indicatorsToMonitor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get indicatorsToMonitorInput() {
    return this._indicatorsToMonitor.internalValue;
  }

  // network_object_anomaly_threshold - computed: false, optional: true, required: false
  private _networkObjectAnomalyThreshold = new DdosNetworkObjectTemplateNetworkObjectAnomalyThresholdOutputReference(this, "network_object_anomaly_threshold");
  public get networkObjectAnomalyThreshold() {
    return this._networkObjectAnomalyThreshold;
  }
  public putNetworkObjectAnomalyThreshold(value: DdosNetworkObjectTemplateNetworkObjectAnomalyThreshold) {
    this._networkObjectAnomalyThreshold.internalValue = value;
  }
  public resetNetworkObjectAnomalyThreshold() {
    this._networkObjectAnomalyThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get networkObjectAnomalyThresholdInput() {
    return this._networkObjectAnomalyThreshold.internalValue;
  }

  // service_break_down_threshold_local - computed: false, optional: true, required: false
  private _serviceBreakDownThresholdLocal = new DdosNetworkObjectTemplateServiceBreakDownThresholdLocalOutputReference(this, "service_break_down_threshold_local");
  public get serviceBreakDownThresholdLocal() {
    return this._serviceBreakDownThresholdLocal;
  }
  public putServiceBreakDownThresholdLocal(value: DdosNetworkObjectTemplateServiceBreakDownThresholdLocal) {
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
  private _sportAnomalyThreshold = new DdosNetworkObjectTemplateSportAnomalyThresholdOutputReference(this, "sport_anomaly_threshold");
  public get sportAnomalyThreshold() {
    return this._sportAnomalyThreshold;
  }
  public putSportAnomalyThreshold(value: DdosNetworkObjectTemplateSportAnomalyThreshold) {
    this._sportAnomalyThreshold.internalValue = value;
  }
  public resetSportAnomalyThreshold() {
    this._sportAnomalyThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sportAnomalyThresholdInput() {
    return this._sportAnomalyThreshold.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      anomaly_detection_trigger: cdktf.stringToTerraform(this._anomalyDetectionTrigger),
      flooding_multiplier: cdktf.numberToTerraform(this._floodingMultiplier),
      histogram_mode: cdktf.stringToTerraform(this._histogramMode),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      operational_mode: cdktf.stringToTerraform(this._operationalMode),
      service_discovery: cdktf.stringToTerraform(this._serviceDiscovery),
      threshold_sensitivity: cdktf.stringToTerraform(this._thresholdSensitivity),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      host_anomaly_threshold: ddosNetworkObjectTemplateHostAnomalyThresholdToTerraform(this._hostAnomalyThreshold.internalValue),
      indicators_to_monitor: ddosNetworkObjectTemplateIndicatorsToMonitorToTerraform(this._indicatorsToMonitor.internalValue),
      network_object_anomaly_threshold: ddosNetworkObjectTemplateNetworkObjectAnomalyThresholdToTerraform(this._networkObjectAnomalyThreshold.internalValue),
      service_break_down_threshold_local: ddosNetworkObjectTemplateServiceBreakDownThresholdLocalToTerraform(this._serviceBreakDownThresholdLocal.internalValue),
      sport_anomaly_threshold: ddosNetworkObjectTemplateSportAnomalyThresholdToTerraform(this._sportAnomalyThreshold.internalValue),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      host_anomaly_threshold: {
        value: ddosNetworkObjectTemplateHostAnomalyThresholdToHclTerraform(this._hostAnomalyThreshold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectTemplateHostAnomalyThresholdList",
      },
      indicators_to_monitor: {
        value: ddosNetworkObjectTemplateIndicatorsToMonitorToHclTerraform(this._indicatorsToMonitor.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectTemplateIndicatorsToMonitorList",
      },
      network_object_anomaly_threshold: {
        value: ddosNetworkObjectTemplateNetworkObjectAnomalyThresholdToHclTerraform(this._networkObjectAnomalyThreshold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectTemplateNetworkObjectAnomalyThresholdList",
      },
      service_break_down_threshold_local: {
        value: ddosNetworkObjectTemplateServiceBreakDownThresholdLocalToHclTerraform(this._serviceBreakDownThresholdLocal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectTemplateServiceBreakDownThresholdLocalList",
      },
      sport_anomaly_threshold: {
        value: ddosNetworkObjectTemplateSportAnomalyThresholdToHclTerraform(this._sportAnomalyThreshold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectTemplateSportAnomalyThresholdList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
