// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DdosNetworkObjectSubNetworkSubNetworkV6Config extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6#id DdosNetworkObjectSubNetworkSubNetworkV6#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * ObjectName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6#object_name DdosNetworkObjectSubNetworkSubNetworkV6#object_name}
  */
  readonly objectName: string;
  /**
  * additional layer of breakdown subnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6#subnet_breakdown DdosNetworkObjectSubNetworkSubNetworkV6#subnet_breakdown}
  */
  readonly subnetBreakdown?: number;
  /**
  * IPv6 Subnet/host, supported prefix range is from 56 to 64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6#subnet_ipv6_addr DdosNetworkObjectSubNetworkSubNetworkV6#subnet_ipv6_addr}
  */
  readonly subnetIpv6Addr: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6#uuid DdosNetworkObjectSubNetworkSubNetworkV6#uuid}
  */
  readonly uuid?: string;
  /**
  * host_anomaly_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6#host_anomaly_threshold DdosNetworkObjectSubNetworkSubNetworkV6#host_anomaly_threshold}
  */
  readonly hostAnomalyThreshold?: DdosNetworkObjectSubNetworkSubNetworkV6HostAnomalyThreshold;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6#sampling_enable DdosNetworkObjectSubNetworkSubNetworkV6#sampling_enable}
  */
  readonly samplingEnable?: DdosNetworkObjectSubNetworkSubNetworkV6SamplingEnable[] | cdktf.IResolvable;
  /**
  * sub_network_anomaly_threshold block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6#sub_network_anomaly_threshold DdosNetworkObjectSubNetworkSubNetworkV6#sub_network_anomaly_threshold}
  */
  readonly subNetworkAnomalyThreshold?: DdosNetworkObjectSubNetworkSubNetworkV6SubNetworkAnomalyThreshold;
}
export interface DdosNetworkObjectSubNetworkSubNetworkV6HostAnomalyThreshold {
  /**
  * Bit rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6#static_bit_rate_threshold DdosNetworkObjectSubNetworkSubNetworkV6#static_bit_rate_threshold}
  */
  readonly staticBitRateThreshold?: number;
  /**
  * FIN packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6#static_fin_rate_threshold DdosNetworkObjectSubNetworkSubNetworkV6#static_fin_rate_threshold}
  */
  readonly staticFinRateThreshold?: number;
  /**
  * Flow count of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6#static_flow_count_threshold DdosNetworkObjectSubNetworkSubNetworkV6#static_flow_count_threshold}
  */
  readonly staticFlowCountThreshold?: number;
  /**
  * ICMP packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6#static_icmp_pkt_rate_threshold DdosNetworkObjectSubNetworkSubNetworkV6#static_icmp_pkt_rate_threshold}
  */
  readonly staticIcmpPktRateThreshold?: number;
  /**
  * Packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6#static_pkt_rate_threshold DdosNetworkObjectSubNetworkSubNetworkV6#static_pkt_rate_threshold}
  */
  readonly staticPktRateThreshold?: number;
  /**
  * Bit rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6#static_rev_bit_rate_threshold DdosNetworkObjectSubNetworkSubNetworkV6#static_rev_bit_rate_threshold}
  */
  readonly staticRevBitRateThreshold?: number;
  /**
  * Packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6#static_rev_pkt_rate_threshold DdosNetworkObjectSubNetworkSubNetworkV6#static_rev_pkt_rate_threshold}
  */
  readonly staticRevPktRateThreshold?: number;
  /**
  * RST packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6#static_rst_rate_threshold DdosNetworkObjectSubNetworkSubNetworkV6#static_rst_rate_threshold}
  */
  readonly staticRstRateThreshold?: number;
  /**
  * SYN packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6#static_syn_rate_threshold DdosNetworkObjectSubNetworkSubNetworkV6#static_syn_rate_threshold}
  */
  readonly staticSynRateThreshold?: number;
  /**
  * TCP packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6#static_tcp_pkt_rate_threshold DdosNetworkObjectSubNetworkSubNetworkV6#static_tcp_pkt_rate_threshold}
  */
  readonly staticTcpPktRateThreshold?: number;
  /**
  * UDP packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6#static_udp_pkt_rate_threshold DdosNetworkObjectSubNetworkSubNetworkV6#static_udp_pkt_rate_threshold}
  */
  readonly staticUdpPktRateThreshold?: number;
  /**
  * Bit rate of per undiscovered host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6#static_undiscovered_host_bit_rate_threshold DdosNetworkObjectSubNetworkSubNetworkV6#static_undiscovered_host_bit_rate_threshold}
  */
  readonly staticUndiscoveredHostBitRateThreshold?: number;
  /**
  * packet rate of per undiscovered host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6#static_undiscovered_host_pkt_rate_threshold DdosNetworkObjectSubNetworkSubNetworkV6#static_undiscovered_host_pkt_rate_threshold}
  */
  readonly staticUndiscoveredHostPktRateThreshold?: number;
  /**
  * Undiscovered packet rate of per host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6#static_undiscovered_pkt_rate_threshold DdosNetworkObjectSubNetworkSubNetworkV6#static_undiscovered_pkt_rate_threshold}
  */
  readonly staticUndiscoveredPktRateThreshold?: number;
}

export function ddosNetworkObjectSubNetworkSubNetworkV6HostAnomalyThresholdToTerraform(struct?: DdosNetworkObjectSubNetworkSubNetworkV6HostAnomalyThresholdOutputReference | DdosNetworkObjectSubNetworkSubNetworkV6HostAnomalyThreshold): any {
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


export function ddosNetworkObjectSubNetworkSubNetworkV6HostAnomalyThresholdToHclTerraform(struct?: DdosNetworkObjectSubNetworkSubNetworkV6HostAnomalyThresholdOutputReference | DdosNetworkObjectSubNetworkSubNetworkV6HostAnomalyThreshold): any {
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

export class DdosNetworkObjectSubNetworkSubNetworkV6HostAnomalyThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectSubNetworkSubNetworkV6HostAnomalyThreshold | undefined {
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

  public set internalValue(value: DdosNetworkObjectSubNetworkSubNetworkV6HostAnomalyThreshold | undefined) {
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
export interface DdosNetworkObjectSubNetworkSubNetworkV6SamplingEnable {
  /**
  * 'all': all; 'packet_rate': PPS; 'bit_rate': B(bits)PS;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6#counters1 DdosNetworkObjectSubNetworkSubNetworkV6#counters1}
  */
  readonly counters1?: string;
}

export function ddosNetworkObjectSubNetworkSubNetworkV6SamplingEnableToTerraform(struct?: DdosNetworkObjectSubNetworkSubNetworkV6SamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function ddosNetworkObjectSubNetworkSubNetworkV6SamplingEnableToHclTerraform(struct?: DdosNetworkObjectSubNetworkSubNetworkV6SamplingEnable | cdktf.IResolvable): any {
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

export class DdosNetworkObjectSubNetworkSubNetworkV6SamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DdosNetworkObjectSubNetworkSubNetworkV6SamplingEnable | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DdosNetworkObjectSubNetworkSubNetworkV6SamplingEnable | cdktf.IResolvable | undefined) {
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

export class DdosNetworkObjectSubNetworkSubNetworkV6SamplingEnableList extends cdktf.ComplexList {
  public internalValue? : DdosNetworkObjectSubNetworkSubNetworkV6SamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): DdosNetworkObjectSubNetworkSubNetworkV6SamplingEnableOutputReference {
    return new DdosNetworkObjectSubNetworkSubNetworkV6SamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DdosNetworkObjectSubNetworkSubNetworkV6SubNetworkAnomalyThreshold {
  /**
  * Bit rate of the sub-network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6#static_sub_network_bit_rate DdosNetworkObjectSubNetworkSubNetworkV6#static_sub_network_bit_rate}
  */
  readonly staticSubNetworkBitRate?: number;
  /**
  * Packet rate of the sub-network
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6#static_sub_network_pkt_rate DdosNetworkObjectSubNetworkSubNetworkV6#static_sub_network_pkt_rate}
  */
  readonly staticSubNetworkPktRate?: number;
}

export function ddosNetworkObjectSubNetworkSubNetworkV6SubNetworkAnomalyThresholdToTerraform(struct?: DdosNetworkObjectSubNetworkSubNetworkV6SubNetworkAnomalyThresholdOutputReference | DdosNetworkObjectSubNetworkSubNetworkV6SubNetworkAnomalyThreshold): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    static_sub_network_bit_rate: cdktf.numberToTerraform(struct!.staticSubNetworkBitRate),
    static_sub_network_pkt_rate: cdktf.numberToTerraform(struct!.staticSubNetworkPktRate),
  }
}


export function ddosNetworkObjectSubNetworkSubNetworkV6SubNetworkAnomalyThresholdToHclTerraform(struct?: DdosNetworkObjectSubNetworkSubNetworkV6SubNetworkAnomalyThresholdOutputReference | DdosNetworkObjectSubNetworkSubNetworkV6SubNetworkAnomalyThreshold): any {
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

export class DdosNetworkObjectSubNetworkSubNetworkV6SubNetworkAnomalyThresholdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DdosNetworkObjectSubNetworkSubNetworkV6SubNetworkAnomalyThreshold | undefined {
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

  public set internalValue(value: DdosNetworkObjectSubNetworkSubNetworkV6SubNetworkAnomalyThreshold | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6 thunder_ddos_network_object_sub_network_sub_network_v6}
*/
export class DdosNetworkObjectSubNetworkSubNetworkV6 extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_network_object_sub_network_sub_network_v6";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DdosNetworkObjectSubNetworkSubNetworkV6 resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DdosNetworkObjectSubNetworkSubNetworkV6 to import
  * @param importFromId The id of the existing DdosNetworkObjectSubNetworkSubNetworkV6 that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DdosNetworkObjectSubNetworkSubNetworkV6 to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_network_object_sub_network_sub_network_v6", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/ddos_network_object_sub_network_sub_network_v6 thunder_ddos_network_object_sub_network_sub_network_v6} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DdosNetworkObjectSubNetworkSubNetworkV6Config
  */
  public constructor(scope: Construct, id: string, config: DdosNetworkObjectSubNetworkSubNetworkV6Config) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_network_object_sub_network_sub_network_v6',
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
    this._objectName = config.objectName;
    this._subnetBreakdown = config.subnetBreakdown;
    this._subnetIpv6Addr = config.subnetIpv6Addr;
    this._uuid = config.uuid;
    this._hostAnomalyThreshold.internalValue = config.hostAnomalyThreshold;
    this._samplingEnable.internalValue = config.samplingEnable;
    this._subNetworkAnomalyThreshold.internalValue = config.subNetworkAnomalyThreshold;
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
  private _hostAnomalyThreshold = new DdosNetworkObjectSubNetworkSubNetworkV6HostAnomalyThresholdOutputReference(this, "host_anomaly_threshold");
  public get hostAnomalyThreshold() {
    return this._hostAnomalyThreshold;
  }
  public putHostAnomalyThreshold(value: DdosNetworkObjectSubNetworkSubNetworkV6HostAnomalyThreshold) {
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
  private _samplingEnable = new DdosNetworkObjectSubNetworkSubNetworkV6SamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: DdosNetworkObjectSubNetworkSubNetworkV6SamplingEnable[] | cdktf.IResolvable) {
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
  private _subNetworkAnomalyThreshold = new DdosNetworkObjectSubNetworkSubNetworkV6SubNetworkAnomalyThresholdOutputReference(this, "sub_network_anomaly_threshold");
  public get subNetworkAnomalyThreshold() {
    return this._subNetworkAnomalyThreshold;
  }
  public putSubNetworkAnomalyThreshold(value: DdosNetworkObjectSubNetworkSubNetworkV6SubNetworkAnomalyThreshold) {
    this._subNetworkAnomalyThreshold.internalValue = value;
  }
  public resetSubNetworkAnomalyThreshold() {
    this._subNetworkAnomalyThreshold.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subNetworkAnomalyThresholdInput() {
    return this._subNetworkAnomalyThreshold.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      object_name: cdktf.stringToTerraform(this._objectName),
      subnet_breakdown: cdktf.numberToTerraform(this._subnetBreakdown),
      subnet_ipv6_addr: cdktf.stringToTerraform(this._subnetIpv6Addr),
      uuid: cdktf.stringToTerraform(this._uuid),
      host_anomaly_threshold: ddosNetworkObjectSubNetworkSubNetworkV6HostAnomalyThresholdToTerraform(this._hostAnomalyThreshold.internalValue),
      sampling_enable: cdktf.listMapper(ddosNetworkObjectSubNetworkSubNetworkV6SamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
      sub_network_anomaly_threshold: ddosNetworkObjectSubNetworkSubNetworkV6SubNetworkAnomalyThresholdToTerraform(this._subNetworkAnomalyThreshold.internalValue),
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
      object_name: {
        value: cdktf.stringToHclTerraform(this._objectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      subnet_breakdown: {
        value: cdktf.numberToHclTerraform(this._subnetBreakdown),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      subnet_ipv6_addr: {
        value: cdktf.stringToHclTerraform(this._subnetIpv6Addr),
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
        value: ddosNetworkObjectSubNetworkSubNetworkV6HostAnomalyThresholdToHclTerraform(this._hostAnomalyThreshold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectSubNetworkSubNetworkV6HostAnomalyThresholdList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(ddosNetworkObjectSubNetworkSubNetworkV6SamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectSubNetworkSubNetworkV6SamplingEnableList",
      },
      sub_network_anomaly_threshold: {
        value: ddosNetworkObjectSubNetworkSubNetworkV6SubNetworkAnomalyThresholdToHclTerraform(this._subNetworkAnomalyThreshold.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DdosNetworkObjectSubNetworkSubNetworkV6SubNetworkAnomalyThresholdList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
