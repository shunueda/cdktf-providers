// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_port_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosPortStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_port_stats#id DataThunderDdosPortStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_port_stats#stats DataThunderDdosPortStats#stats}
  */
  readonly stats?: DataThunderDdosPortStatsStats;
}
export interface DataThunderDdosPortStatsStats {
  /**
  * Dst Port Blacklist Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_port_stats#dst_port_bl DataThunderDdosPortStats#dst_port_bl}
  */
  readonly dstPortBl?: number;
  /**
  * Dst Port Conn Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_port_stats#dst_port_conn_limit_exceed DataThunderDdosPortStats#dst_port_conn_limit_exceed}
  */
  readonly dstPortConnLimitExceed?: number;
  /**
  * Dst Port Conn Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_port_stats#dst_port_conn_rate_exceed DataThunderDdosPortStats#dst_port_conn_rate_exceed}
  */
  readonly dstPortConnRateExceed?: number;
  /**
  * Dst Port Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_port_stats#dst_port_exceed_drop_any DataThunderDdosPortStats#dst_port_exceed_drop_any}
  */
  readonly dstPortExceedDropAny?: number;
  /**
  * Dst Port Frag Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_port_stats#dst_port_frag_rate_exceed DataThunderDdosPortStats#dst_port_frag_rate_exceed}
  */
  readonly dstPortFragRateExceed?: number;
  /**
  * Dst Port KiBit Rate Exceeded (KiBit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_port_stats#dst_port_kbit_rate_exceed DataThunderDdosPortStats#dst_port_kbit_rate_exceed}
  */
  readonly dstPortKbitRateExceed?: number;
  /**
  * Dst Port Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_port_stats#dst_port_pkt_rate_exceed DataThunderDdosPortStats#dst_port_pkt_rate_exceed}
  */
  readonly dstPortPktRateExceed?: number;
  /**
  * Dst Port Undefined Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_port_stats#dst_port_undef_drop DataThunderDdosPortStats#dst_port_undef_drop}
  */
  readonly dstPortUndefDrop?: number;
  /**
  * Dst SrcPort Blacklist Packets Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_port_stats#dst_sport_bl DataThunderDdosPortStats#dst_sport_bl}
  */
  readonly dstSportBl?: number;
  /**
  * Dst SrcPort Conn Limit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_port_stats#dst_sport_conn_limit_exceed DataThunderDdosPortStats#dst_sport_conn_limit_exceed}
  */
  readonly dstSportConnLimitExceed?: number;
  /**
  * Dst SrcPort Conn Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_port_stats#dst_sport_conn_rate_exceed DataThunderDdosPortStats#dst_sport_conn_rate_exceed}
  */
  readonly dstSportConnRateExceed?: number;
  /**
  * Dst SrcPort Exceed Dropped
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_port_stats#dst_sport_exceed_drop_any DataThunderDdosPortStats#dst_sport_exceed_drop_any}
  */
  readonly dstSportExceedDropAny?: number;
  /**
  * Dst SrcPort Frag Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_port_stats#dst_sport_frag_rate_exceed DataThunderDdosPortStats#dst_sport_frag_rate_exceed}
  */
  readonly dstSportFragRateExceed?: number;
  /**
  * Dst SrcPort KiBit Rate Exceeded (KiBit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_port_stats#dst_sport_kbit_rate_exceed DataThunderDdosPortStats#dst_sport_kbit_rate_exceed}
  */
  readonly dstSportKbitRateExceed?: number;
  /**
  * Dst SrcPort Pkt Rate Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_port_stats#dst_sport_pkt_rate_exceed DataThunderDdosPortStats#dst_sport_pkt_rate_exceed}
  */
  readonly dstSportPktRateExceed?: number;
}

export function dataThunderDdosPortStatsStatsToTerraform(struct?: DataThunderDdosPortStatsStatsOutputReference | DataThunderDdosPortStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dst_port_bl: cdktf.numberToTerraform(struct!.dstPortBl),
    dst_port_conn_limit_exceed: cdktf.numberToTerraform(struct!.dstPortConnLimitExceed),
    dst_port_conn_rate_exceed: cdktf.numberToTerraform(struct!.dstPortConnRateExceed),
    dst_port_exceed_drop_any: cdktf.numberToTerraform(struct!.dstPortExceedDropAny),
    dst_port_frag_rate_exceed: cdktf.numberToTerraform(struct!.dstPortFragRateExceed),
    dst_port_kbit_rate_exceed: cdktf.numberToTerraform(struct!.dstPortKbitRateExceed),
    dst_port_pkt_rate_exceed: cdktf.numberToTerraform(struct!.dstPortPktRateExceed),
    dst_port_undef_drop: cdktf.numberToTerraform(struct!.dstPortUndefDrop),
    dst_sport_bl: cdktf.numberToTerraform(struct!.dstSportBl),
    dst_sport_conn_limit_exceed: cdktf.numberToTerraform(struct!.dstSportConnLimitExceed),
    dst_sport_conn_rate_exceed: cdktf.numberToTerraform(struct!.dstSportConnRateExceed),
    dst_sport_exceed_drop_any: cdktf.numberToTerraform(struct!.dstSportExceedDropAny),
    dst_sport_frag_rate_exceed: cdktf.numberToTerraform(struct!.dstSportFragRateExceed),
    dst_sport_kbit_rate_exceed: cdktf.numberToTerraform(struct!.dstSportKbitRateExceed),
    dst_sport_pkt_rate_exceed: cdktf.numberToTerraform(struct!.dstSportPktRateExceed),
  }
}


export function dataThunderDdosPortStatsStatsToHclTerraform(struct?: DataThunderDdosPortStatsStatsOutputReference | DataThunderDdosPortStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dst_port_bl: {
      value: cdktf.numberToHclTerraform(struct!.dstPortBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_port_conn_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstPortConnLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_port_conn_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstPortConnRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_port_exceed_drop_any: {
      value: cdktf.numberToHclTerraform(struct!.dstPortExceedDropAny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_port_frag_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstPortFragRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_port_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstPortKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_port_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstPortPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_port_undef_drop: {
      value: cdktf.numberToHclTerraform(struct!.dstPortUndefDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_sport_bl: {
      value: cdktf.numberToHclTerraform(struct!.dstSportBl),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_sport_conn_limit_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstSportConnLimitExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_sport_conn_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstSportConnRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_sport_exceed_drop_any: {
      value: cdktf.numberToHclTerraform(struct!.dstSportExceedDropAny),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_sport_frag_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstSportFragRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_sport_kbit_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstSportKbitRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_sport_pkt_rate_exceed: {
      value: cdktf.numberToHclTerraform(struct!.dstSportPktRateExceed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosPortStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosPortStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dstPortBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortBl = this._dstPortBl;
    }
    if (this._dstPortConnLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortConnLimitExceed = this._dstPortConnLimitExceed;
    }
    if (this._dstPortConnRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortConnRateExceed = this._dstPortConnRateExceed;
    }
    if (this._dstPortExceedDropAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortExceedDropAny = this._dstPortExceedDropAny;
    }
    if (this._dstPortFragRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortFragRateExceed = this._dstPortFragRateExceed;
    }
    if (this._dstPortKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortKbitRateExceed = this._dstPortKbitRateExceed;
    }
    if (this._dstPortPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortPktRateExceed = this._dstPortPktRateExceed;
    }
    if (this._dstPortUndefDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstPortUndefDrop = this._dstPortUndefDrop;
    }
    if (this._dstSportBl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSportBl = this._dstSportBl;
    }
    if (this._dstSportConnLimitExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSportConnLimitExceed = this._dstSportConnLimitExceed;
    }
    if (this._dstSportConnRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSportConnRateExceed = this._dstSportConnRateExceed;
    }
    if (this._dstSportExceedDropAny !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSportExceedDropAny = this._dstSportExceedDropAny;
    }
    if (this._dstSportFragRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSportFragRateExceed = this._dstSportFragRateExceed;
    }
    if (this._dstSportKbitRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSportKbitRateExceed = this._dstSportKbitRateExceed;
    }
    if (this._dstSportPktRateExceed !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstSportPktRateExceed = this._dstSportPktRateExceed;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosPortStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._dstPortBl = undefined;
      this._dstPortConnLimitExceed = undefined;
      this._dstPortConnRateExceed = undefined;
      this._dstPortExceedDropAny = undefined;
      this._dstPortFragRateExceed = undefined;
      this._dstPortKbitRateExceed = undefined;
      this._dstPortPktRateExceed = undefined;
      this._dstPortUndefDrop = undefined;
      this._dstSportBl = undefined;
      this._dstSportConnLimitExceed = undefined;
      this._dstSportConnRateExceed = undefined;
      this._dstSportExceedDropAny = undefined;
      this._dstSportFragRateExceed = undefined;
      this._dstSportKbitRateExceed = undefined;
      this._dstSportPktRateExceed = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._dstPortBl = value.dstPortBl;
      this._dstPortConnLimitExceed = value.dstPortConnLimitExceed;
      this._dstPortConnRateExceed = value.dstPortConnRateExceed;
      this._dstPortExceedDropAny = value.dstPortExceedDropAny;
      this._dstPortFragRateExceed = value.dstPortFragRateExceed;
      this._dstPortKbitRateExceed = value.dstPortKbitRateExceed;
      this._dstPortPktRateExceed = value.dstPortPktRateExceed;
      this._dstPortUndefDrop = value.dstPortUndefDrop;
      this._dstSportBl = value.dstSportBl;
      this._dstSportConnLimitExceed = value.dstSportConnLimitExceed;
      this._dstSportConnRateExceed = value.dstSportConnRateExceed;
      this._dstSportExceedDropAny = value.dstSportExceedDropAny;
      this._dstSportFragRateExceed = value.dstSportFragRateExceed;
      this._dstSportKbitRateExceed = value.dstSportKbitRateExceed;
      this._dstSportPktRateExceed = value.dstSportPktRateExceed;
    }
  }

  // dst_port_bl - computed: false, optional: true, required: false
  private _dstPortBl?: number; 
  public get dstPortBl() {
    return this.getNumberAttribute('dst_port_bl');
  }
  public set dstPortBl(value: number) {
    this._dstPortBl = value;
  }
  public resetDstPortBl() {
    this._dstPortBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortBlInput() {
    return this._dstPortBl;
  }

  // dst_port_conn_limit_exceed - computed: false, optional: true, required: false
  private _dstPortConnLimitExceed?: number; 
  public get dstPortConnLimitExceed() {
    return this.getNumberAttribute('dst_port_conn_limit_exceed');
  }
  public set dstPortConnLimitExceed(value: number) {
    this._dstPortConnLimitExceed = value;
  }
  public resetDstPortConnLimitExceed() {
    this._dstPortConnLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortConnLimitExceedInput() {
    return this._dstPortConnLimitExceed;
  }

  // dst_port_conn_rate_exceed - computed: false, optional: true, required: false
  private _dstPortConnRateExceed?: number; 
  public get dstPortConnRateExceed() {
    return this.getNumberAttribute('dst_port_conn_rate_exceed');
  }
  public set dstPortConnRateExceed(value: number) {
    this._dstPortConnRateExceed = value;
  }
  public resetDstPortConnRateExceed() {
    this._dstPortConnRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortConnRateExceedInput() {
    return this._dstPortConnRateExceed;
  }

  // dst_port_exceed_drop_any - computed: false, optional: true, required: false
  private _dstPortExceedDropAny?: number; 
  public get dstPortExceedDropAny() {
    return this.getNumberAttribute('dst_port_exceed_drop_any');
  }
  public set dstPortExceedDropAny(value: number) {
    this._dstPortExceedDropAny = value;
  }
  public resetDstPortExceedDropAny() {
    this._dstPortExceedDropAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortExceedDropAnyInput() {
    return this._dstPortExceedDropAny;
  }

  // dst_port_frag_rate_exceed - computed: false, optional: true, required: false
  private _dstPortFragRateExceed?: number; 
  public get dstPortFragRateExceed() {
    return this.getNumberAttribute('dst_port_frag_rate_exceed');
  }
  public set dstPortFragRateExceed(value: number) {
    this._dstPortFragRateExceed = value;
  }
  public resetDstPortFragRateExceed() {
    this._dstPortFragRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortFragRateExceedInput() {
    return this._dstPortFragRateExceed;
  }

  // dst_port_kbit_rate_exceed - computed: false, optional: true, required: false
  private _dstPortKbitRateExceed?: number; 
  public get dstPortKbitRateExceed() {
    return this.getNumberAttribute('dst_port_kbit_rate_exceed');
  }
  public set dstPortKbitRateExceed(value: number) {
    this._dstPortKbitRateExceed = value;
  }
  public resetDstPortKbitRateExceed() {
    this._dstPortKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortKbitRateExceedInput() {
    return this._dstPortKbitRateExceed;
  }

  // dst_port_pkt_rate_exceed - computed: false, optional: true, required: false
  private _dstPortPktRateExceed?: number; 
  public get dstPortPktRateExceed() {
    return this.getNumberAttribute('dst_port_pkt_rate_exceed');
  }
  public set dstPortPktRateExceed(value: number) {
    this._dstPortPktRateExceed = value;
  }
  public resetDstPortPktRateExceed() {
    this._dstPortPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortPktRateExceedInput() {
    return this._dstPortPktRateExceed;
  }

  // dst_port_undef_drop - computed: false, optional: true, required: false
  private _dstPortUndefDrop?: number; 
  public get dstPortUndefDrop() {
    return this.getNumberAttribute('dst_port_undef_drop');
  }
  public set dstPortUndefDrop(value: number) {
    this._dstPortUndefDrop = value;
  }
  public resetDstPortUndefDrop() {
    this._dstPortUndefDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstPortUndefDropInput() {
    return this._dstPortUndefDrop;
  }

  // dst_sport_bl - computed: false, optional: true, required: false
  private _dstSportBl?: number; 
  public get dstSportBl() {
    return this.getNumberAttribute('dst_sport_bl');
  }
  public set dstSportBl(value: number) {
    this._dstSportBl = value;
  }
  public resetDstSportBl() {
    this._dstSportBl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSportBlInput() {
    return this._dstSportBl;
  }

  // dst_sport_conn_limit_exceed - computed: false, optional: true, required: false
  private _dstSportConnLimitExceed?: number; 
  public get dstSportConnLimitExceed() {
    return this.getNumberAttribute('dst_sport_conn_limit_exceed');
  }
  public set dstSportConnLimitExceed(value: number) {
    this._dstSportConnLimitExceed = value;
  }
  public resetDstSportConnLimitExceed() {
    this._dstSportConnLimitExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSportConnLimitExceedInput() {
    return this._dstSportConnLimitExceed;
  }

  // dst_sport_conn_rate_exceed - computed: false, optional: true, required: false
  private _dstSportConnRateExceed?: number; 
  public get dstSportConnRateExceed() {
    return this.getNumberAttribute('dst_sport_conn_rate_exceed');
  }
  public set dstSportConnRateExceed(value: number) {
    this._dstSportConnRateExceed = value;
  }
  public resetDstSportConnRateExceed() {
    this._dstSportConnRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSportConnRateExceedInput() {
    return this._dstSportConnRateExceed;
  }

  // dst_sport_exceed_drop_any - computed: false, optional: true, required: false
  private _dstSportExceedDropAny?: number; 
  public get dstSportExceedDropAny() {
    return this.getNumberAttribute('dst_sport_exceed_drop_any');
  }
  public set dstSportExceedDropAny(value: number) {
    this._dstSportExceedDropAny = value;
  }
  public resetDstSportExceedDropAny() {
    this._dstSportExceedDropAny = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSportExceedDropAnyInput() {
    return this._dstSportExceedDropAny;
  }

  // dst_sport_frag_rate_exceed - computed: false, optional: true, required: false
  private _dstSportFragRateExceed?: number; 
  public get dstSportFragRateExceed() {
    return this.getNumberAttribute('dst_sport_frag_rate_exceed');
  }
  public set dstSportFragRateExceed(value: number) {
    this._dstSportFragRateExceed = value;
  }
  public resetDstSportFragRateExceed() {
    this._dstSportFragRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSportFragRateExceedInput() {
    return this._dstSportFragRateExceed;
  }

  // dst_sport_kbit_rate_exceed - computed: false, optional: true, required: false
  private _dstSportKbitRateExceed?: number; 
  public get dstSportKbitRateExceed() {
    return this.getNumberAttribute('dst_sport_kbit_rate_exceed');
  }
  public set dstSportKbitRateExceed(value: number) {
    this._dstSportKbitRateExceed = value;
  }
  public resetDstSportKbitRateExceed() {
    this._dstSportKbitRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSportKbitRateExceedInput() {
    return this._dstSportKbitRateExceed;
  }

  // dst_sport_pkt_rate_exceed - computed: false, optional: true, required: false
  private _dstSportPktRateExceed?: number; 
  public get dstSportPktRateExceed() {
    return this.getNumberAttribute('dst_sport_pkt_rate_exceed');
  }
  public set dstSportPktRateExceed(value: number) {
    this._dstSportPktRateExceed = value;
  }
  public resetDstSportPktRateExceed() {
    this._dstSportPktRateExceed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstSportPktRateExceedInput() {
    return this._dstSportPktRateExceed;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_port_stats thunder_ddos_port_stats}
*/
export class DataThunderDdosPortStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_port_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosPortStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosPortStats to import
  * @param importFromId The id of the existing DataThunderDdosPortStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_port_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosPortStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_port_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_port_stats thunder_ddos_port_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosPortStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosPortStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_port_stats',
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
  private _stats = new DataThunderDdosPortStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderDdosPortStatsStats) {
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
      stats: dataThunderDdosPortStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderDdosPortStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosPortStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
