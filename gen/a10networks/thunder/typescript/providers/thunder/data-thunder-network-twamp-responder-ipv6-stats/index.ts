// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_twamp_responder_ipv6_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderNetworkTwampResponderIpv6StatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_twamp_responder_ipv6_stats#id DataThunderNetworkTwampResponderIpv6Stats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_twamp_responder_ipv6_stats#stats DataThunderNetworkTwampResponderIpv6Stats#stats}
  */
  readonly stats?: DataThunderNetworkTwampResponderIpv6StatsStats;
}
export interface DataThunderNetworkTwampResponderIpv6StatsStats {
  /**
  * Tx IPv6 no route error drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_twamp_responder_ipv6_stats#no_route_err_v6 DataThunderNetworkTwampResponderIpv6Stats#no_route_err_v6}
  */
  readonly noRouteErrV6?: number;
  /**
  * IPv6 Other error drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_twamp_responder_ipv6_stats#other_err_v6 DataThunderNetworkTwampResponderIpv6Stats#other_err_v6}
  */
  readonly otherErrV6?: number;
  /**
  * Rx IPv6 client-list drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_twamp_responder_ipv6_stats#rx_acl_drop_v6 DataThunderNetworkTwampResponderIpv6Stats#rx_acl_drop_v6}
  */
  readonly rxAclDropV6?: number;
  /**
  * Rx IPv6 disabled drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_twamp_responder_ipv6_stats#rx_drop_not_enabled_v6 DataThunderNetworkTwampResponderIpv6Stats#rx_drop_not_enabled_v6}
  */
  readonly rxDropNotEnabledV6?: number;
  /**
  * Rx IPv6 TWAMP test packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_twamp_responder_ipv6_stats#rx_pkts_v6 DataThunderNetworkTwampResponderIpv6Stats#rx_pkts_v6}
  */
  readonly rxPktsV6?: number;
  /**
  * Rx IPv6 TWAMP hdr length error drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_twamp_responder_ipv6_stats#twamp_hdr_len_err_v6 DataThunderNetworkTwampResponderIpv6Stats#twamp_hdr_len_err_v6}
  */
  readonly twampHdrLenErrV6?: number;
  /**
  * Tx IPv6 TWAMP test packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_twamp_responder_ipv6_stats#tx_pkts_v6 DataThunderNetworkTwampResponderIpv6Stats#tx_pkts_v6}
  */
  readonly txPktsV6?: number;
}

export function dataThunderNetworkTwampResponderIpv6StatsStatsToTerraform(struct?: DataThunderNetworkTwampResponderIpv6StatsStatsOutputReference | DataThunderNetworkTwampResponderIpv6StatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_route_err_v6: cdktf.numberToTerraform(struct!.noRouteErrV6),
    other_err_v6: cdktf.numberToTerraform(struct!.otherErrV6),
    rx_acl_drop_v6: cdktf.numberToTerraform(struct!.rxAclDropV6),
    rx_drop_not_enabled_v6: cdktf.numberToTerraform(struct!.rxDropNotEnabledV6),
    rx_pkts_v6: cdktf.numberToTerraform(struct!.rxPktsV6),
    twamp_hdr_len_err_v6: cdktf.numberToTerraform(struct!.twampHdrLenErrV6),
    tx_pkts_v6: cdktf.numberToTerraform(struct!.txPktsV6),
  }
}


export function dataThunderNetworkTwampResponderIpv6StatsStatsToHclTerraform(struct?: DataThunderNetworkTwampResponderIpv6StatsStatsOutputReference | DataThunderNetworkTwampResponderIpv6StatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_route_err_v6: {
      value: cdktf.numberToHclTerraform(struct!.noRouteErrV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_err_v6: {
      value: cdktf.numberToHclTerraform(struct!.otherErrV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_acl_drop_v6: {
      value: cdktf.numberToHclTerraform(struct!.rxAclDropV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_drop_not_enabled_v6: {
      value: cdktf.numberToHclTerraform(struct!.rxDropNotEnabledV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_pkts_v6: {
      value: cdktf.numberToHclTerraform(struct!.rxPktsV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    twamp_hdr_len_err_v6: {
      value: cdktf.numberToHclTerraform(struct!.twampHdrLenErrV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_pkts_v6: {
      value: cdktf.numberToHclTerraform(struct!.txPktsV6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkTwampResponderIpv6StatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNetworkTwampResponderIpv6StatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noRouteErrV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRouteErrV6 = this._noRouteErrV6;
    }
    if (this._otherErrV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherErrV6 = this._otherErrV6;
    }
    if (this._rxAclDropV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxAclDropV6 = this._rxAclDropV6;
    }
    if (this._rxDropNotEnabledV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxDropNotEnabledV6 = this._rxDropNotEnabledV6;
    }
    if (this._rxPktsV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxPktsV6 = this._rxPktsV6;
    }
    if (this._twampHdrLenErrV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.twampHdrLenErrV6 = this._twampHdrLenErrV6;
    }
    if (this._txPktsV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.txPktsV6 = this._txPktsV6;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkTwampResponderIpv6StatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noRouteErrV6 = undefined;
      this._otherErrV6 = undefined;
      this._rxAclDropV6 = undefined;
      this._rxDropNotEnabledV6 = undefined;
      this._rxPktsV6 = undefined;
      this._twampHdrLenErrV6 = undefined;
      this._txPktsV6 = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noRouteErrV6 = value.noRouteErrV6;
      this._otherErrV6 = value.otherErrV6;
      this._rxAclDropV6 = value.rxAclDropV6;
      this._rxDropNotEnabledV6 = value.rxDropNotEnabledV6;
      this._rxPktsV6 = value.rxPktsV6;
      this._twampHdrLenErrV6 = value.twampHdrLenErrV6;
      this._txPktsV6 = value.txPktsV6;
    }
  }

  // no_route_err_v6 - computed: false, optional: true, required: false
  private _noRouteErrV6?: number; 
  public get noRouteErrV6() {
    return this.getNumberAttribute('no_route_err_v6');
  }
  public set noRouteErrV6(value: number) {
    this._noRouteErrV6 = value;
  }
  public resetNoRouteErrV6() {
    this._noRouteErrV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRouteErrV6Input() {
    return this._noRouteErrV6;
  }

  // other_err_v6 - computed: false, optional: true, required: false
  private _otherErrV6?: number; 
  public get otherErrV6() {
    return this.getNumberAttribute('other_err_v6');
  }
  public set otherErrV6(value: number) {
    this._otherErrV6 = value;
  }
  public resetOtherErrV6() {
    this._otherErrV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherErrV6Input() {
    return this._otherErrV6;
  }

  // rx_acl_drop_v6 - computed: false, optional: true, required: false
  private _rxAclDropV6?: number; 
  public get rxAclDropV6() {
    return this.getNumberAttribute('rx_acl_drop_v6');
  }
  public set rxAclDropV6(value: number) {
    this._rxAclDropV6 = value;
  }
  public resetRxAclDropV6() {
    this._rxAclDropV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxAclDropV6Input() {
    return this._rxAclDropV6;
  }

  // rx_drop_not_enabled_v6 - computed: false, optional: true, required: false
  private _rxDropNotEnabledV6?: number; 
  public get rxDropNotEnabledV6() {
    return this.getNumberAttribute('rx_drop_not_enabled_v6');
  }
  public set rxDropNotEnabledV6(value: number) {
    this._rxDropNotEnabledV6 = value;
  }
  public resetRxDropNotEnabledV6() {
    this._rxDropNotEnabledV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxDropNotEnabledV6Input() {
    return this._rxDropNotEnabledV6;
  }

  // rx_pkts_v6 - computed: false, optional: true, required: false
  private _rxPktsV6?: number; 
  public get rxPktsV6() {
    return this.getNumberAttribute('rx_pkts_v6');
  }
  public set rxPktsV6(value: number) {
    this._rxPktsV6 = value;
  }
  public resetRxPktsV6() {
    this._rxPktsV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxPktsV6Input() {
    return this._rxPktsV6;
  }

  // twamp_hdr_len_err_v6 - computed: false, optional: true, required: false
  private _twampHdrLenErrV6?: number; 
  public get twampHdrLenErrV6() {
    return this.getNumberAttribute('twamp_hdr_len_err_v6');
  }
  public set twampHdrLenErrV6(value: number) {
    this._twampHdrLenErrV6 = value;
  }
  public resetTwampHdrLenErrV6() {
    this._twampHdrLenErrV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twampHdrLenErrV6Input() {
    return this._twampHdrLenErrV6;
  }

  // tx_pkts_v6 - computed: false, optional: true, required: false
  private _txPktsV6?: number; 
  public get txPktsV6() {
    return this.getNumberAttribute('tx_pkts_v6');
  }
  public set txPktsV6(value: number) {
    this._txPktsV6 = value;
  }
  public resetTxPktsV6() {
    this._txPktsV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txPktsV6Input() {
    return this._txPktsV6;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_twamp_responder_ipv6_stats thunder_network_twamp_responder_ipv6_stats}
*/
export class DataThunderNetworkTwampResponderIpv6Stats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_twamp_responder_ipv6_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderNetworkTwampResponderIpv6Stats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderNetworkTwampResponderIpv6Stats to import
  * @param importFromId The id of the existing DataThunderNetworkTwampResponderIpv6Stats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_twamp_responder_ipv6_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderNetworkTwampResponderIpv6Stats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_twamp_responder_ipv6_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_twamp_responder_ipv6_stats thunder_network_twamp_responder_ipv6_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderNetworkTwampResponderIpv6StatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderNetworkTwampResponderIpv6StatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_twamp_responder_ipv6_stats',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._stats.internalValue = config.stats;
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

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderNetworkTwampResponderIpv6StatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderNetworkTwampResponderIpv6StatsStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      stats: dataThunderNetworkTwampResponderIpv6StatsStatsToTerraform(this._stats.internalValue),
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
      stats: {
        value: dataThunderNetworkTwampResponderIpv6StatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNetworkTwampResponderIpv6StatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
