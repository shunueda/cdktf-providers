// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_twamp_responder_ip_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderNetworkTwampResponderIpStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_twamp_responder_ip_stats#id DataThunderNetworkTwampResponderIpStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_twamp_responder_ip_stats#stats DataThunderNetworkTwampResponderIpStats#stats}
  */
  readonly stats?: DataThunderNetworkTwampResponderIpStatsStats;
}
export interface DataThunderNetworkTwampResponderIpStatsStats {
  /**
  * Tx IP no route error drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_twamp_responder_ip_stats#no_route_err DataThunderNetworkTwampResponderIpStats#no_route_err}
  */
  readonly noRouteErr?: number;
  /**
  * IP other error drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_twamp_responder_ip_stats#other_err DataThunderNetworkTwampResponderIpStats#other_err}
  */
  readonly otherErr?: number;
  /**
  * Rx IP client-list drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_twamp_responder_ip_stats#rx_acl_drop DataThunderNetworkTwampResponderIpStats#rx_acl_drop}
  */
  readonly rxAclDrop?: number;
  /**
  * Rx IP disabled drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_twamp_responder_ip_stats#rx_drop_not_enabled_v4 DataThunderNetworkTwampResponderIpStats#rx_drop_not_enabled_v4}
  */
  readonly rxDropNotEnabledV4?: number;
  /**
  * Rx IP TWAMP test packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_twamp_responder_ip_stats#rx_pkts DataThunderNetworkTwampResponderIpStats#rx_pkts}
  */
  readonly rxPkts?: number;
  /**
  * Rx TWAMP hdr length error drop
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_twamp_responder_ip_stats#twamp_hdr_len_err DataThunderNetworkTwampResponderIpStats#twamp_hdr_len_err}
  */
  readonly twampHdrLenErr?: number;
  /**
  * Tx IP TWAMP test packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_twamp_responder_ip_stats#tx_pkts DataThunderNetworkTwampResponderIpStats#tx_pkts}
  */
  readonly txPkts?: number;
}

export function dataThunderNetworkTwampResponderIpStatsStatsToTerraform(struct?: DataThunderNetworkTwampResponderIpStatsStatsOutputReference | DataThunderNetworkTwampResponderIpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    no_route_err: cdktf.numberToTerraform(struct!.noRouteErr),
    other_err: cdktf.numberToTerraform(struct!.otherErr),
    rx_acl_drop: cdktf.numberToTerraform(struct!.rxAclDrop),
    rx_drop_not_enabled_v4: cdktf.numberToTerraform(struct!.rxDropNotEnabledV4),
    rx_pkts: cdktf.numberToTerraform(struct!.rxPkts),
    twamp_hdr_len_err: cdktf.numberToTerraform(struct!.twampHdrLenErr),
    tx_pkts: cdktf.numberToTerraform(struct!.txPkts),
  }
}


export function dataThunderNetworkTwampResponderIpStatsStatsToHclTerraform(struct?: DataThunderNetworkTwampResponderIpStatsStatsOutputReference | DataThunderNetworkTwampResponderIpStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    no_route_err: {
      value: cdktf.numberToHclTerraform(struct!.noRouteErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_err: {
      value: cdktf.numberToHclTerraform(struct!.otherErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_acl_drop: {
      value: cdktf.numberToHclTerraform(struct!.rxAclDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_drop_not_enabled_v4: {
      value: cdktf.numberToHclTerraform(struct!.rxDropNotEnabledV4),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    rx_pkts: {
      value: cdktf.numberToHclTerraform(struct!.rxPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    twamp_hdr_len_err: {
      value: cdktf.numberToHclTerraform(struct!.twampHdrLenErr),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tx_pkts: {
      value: cdktf.numberToHclTerraform(struct!.txPkts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderNetworkTwampResponderIpStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderNetworkTwampResponderIpStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._noRouteErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.noRouteErr = this._noRouteErr;
    }
    if (this._otherErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherErr = this._otherErr;
    }
    if (this._rxAclDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxAclDrop = this._rxAclDrop;
    }
    if (this._rxDropNotEnabledV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxDropNotEnabledV4 = this._rxDropNotEnabledV4;
    }
    if (this._rxPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.rxPkts = this._rxPkts;
    }
    if (this._twampHdrLenErr !== undefined) {
      hasAnyValues = true;
      internalValueResult.twampHdrLenErr = this._twampHdrLenErr;
    }
    if (this._txPkts !== undefined) {
      hasAnyValues = true;
      internalValueResult.txPkts = this._txPkts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderNetworkTwampResponderIpStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._noRouteErr = undefined;
      this._otherErr = undefined;
      this._rxAclDrop = undefined;
      this._rxDropNotEnabledV4 = undefined;
      this._rxPkts = undefined;
      this._twampHdrLenErr = undefined;
      this._txPkts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._noRouteErr = value.noRouteErr;
      this._otherErr = value.otherErr;
      this._rxAclDrop = value.rxAclDrop;
      this._rxDropNotEnabledV4 = value.rxDropNotEnabledV4;
      this._rxPkts = value.rxPkts;
      this._twampHdrLenErr = value.twampHdrLenErr;
      this._txPkts = value.txPkts;
    }
  }

  // no_route_err - computed: false, optional: true, required: false
  private _noRouteErr?: number; 
  public get noRouteErr() {
    return this.getNumberAttribute('no_route_err');
  }
  public set noRouteErr(value: number) {
    this._noRouteErr = value;
  }
  public resetNoRouteErr() {
    this._noRouteErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noRouteErrInput() {
    return this._noRouteErr;
  }

  // other_err - computed: false, optional: true, required: false
  private _otherErr?: number; 
  public get otherErr() {
    return this.getNumberAttribute('other_err');
  }
  public set otherErr(value: number) {
    this._otherErr = value;
  }
  public resetOtherErr() {
    this._otherErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherErrInput() {
    return this._otherErr;
  }

  // rx_acl_drop - computed: false, optional: true, required: false
  private _rxAclDrop?: number; 
  public get rxAclDrop() {
    return this.getNumberAttribute('rx_acl_drop');
  }
  public set rxAclDrop(value: number) {
    this._rxAclDrop = value;
  }
  public resetRxAclDrop() {
    this._rxAclDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxAclDropInput() {
    return this._rxAclDrop;
  }

  // rx_drop_not_enabled_v4 - computed: false, optional: true, required: false
  private _rxDropNotEnabledV4?: number; 
  public get rxDropNotEnabledV4() {
    return this.getNumberAttribute('rx_drop_not_enabled_v4');
  }
  public set rxDropNotEnabledV4(value: number) {
    this._rxDropNotEnabledV4 = value;
  }
  public resetRxDropNotEnabledV4() {
    this._rxDropNotEnabledV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxDropNotEnabledV4Input() {
    return this._rxDropNotEnabledV4;
  }

  // rx_pkts - computed: false, optional: true, required: false
  private _rxPkts?: number; 
  public get rxPkts() {
    return this.getNumberAttribute('rx_pkts');
  }
  public set rxPkts(value: number) {
    this._rxPkts = value;
  }
  public resetRxPkts() {
    this._rxPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rxPktsInput() {
    return this._rxPkts;
  }

  // twamp_hdr_len_err - computed: false, optional: true, required: false
  private _twampHdrLenErr?: number; 
  public get twampHdrLenErr() {
    return this.getNumberAttribute('twamp_hdr_len_err');
  }
  public set twampHdrLenErr(value: number) {
    this._twampHdrLenErr = value;
  }
  public resetTwampHdrLenErr() {
    this._twampHdrLenErr = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twampHdrLenErrInput() {
    return this._twampHdrLenErr;
  }

  // tx_pkts - computed: false, optional: true, required: false
  private _txPkts?: number; 
  public get txPkts() {
    return this.getNumberAttribute('tx_pkts');
  }
  public set txPkts(value: number) {
    this._txPkts = value;
  }
  public resetTxPkts() {
    this._txPkts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get txPktsInput() {
    return this._txPkts;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_twamp_responder_ip_stats thunder_network_twamp_responder_ip_stats}
*/
export class DataThunderNetworkTwampResponderIpStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_network_twamp_responder_ip_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderNetworkTwampResponderIpStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderNetworkTwampResponderIpStats to import
  * @param importFromId The id of the existing DataThunderNetworkTwampResponderIpStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_twamp_responder_ip_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderNetworkTwampResponderIpStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_network_twamp_responder_ip_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/network_twamp_responder_ip_stats thunder_network_twamp_responder_ip_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderNetworkTwampResponderIpStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderNetworkTwampResponderIpStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_network_twamp_responder_ip_stats',
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
  private _stats = new DataThunderNetworkTwampResponderIpStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderNetworkTwampResponderIpStatsStats) {
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
      stats: dataThunderNetworkTwampResponderIpStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderNetworkTwampResponderIpStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderNetworkTwampResponderIpStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
