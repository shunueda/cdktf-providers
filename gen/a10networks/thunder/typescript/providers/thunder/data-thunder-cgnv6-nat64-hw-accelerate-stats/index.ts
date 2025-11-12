// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_hw_accelerate_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6Nat64HwAccelerateStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_hw_accelerate_stats#id DataThunderCgnv6Nat64HwAccelerateStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_hw_accelerate_stats#stats DataThunderCgnv6Nat64HwAccelerateStats#stats}
  */
  readonly stats?: DataThunderCgnv6Nat64HwAccelerateStatsStats;
}
export interface DataThunderCgnv6Nat64HwAccelerateStatsStats {
  /**
  * HW Entries Aged Out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_hw_accelerate_stats#entry_age_out DataThunderCgnv6Nat64HwAccelerateStats#entry_age_out}
  */
  readonly entryAgeOut?: number;
  /**
  * HW Entries Aged Out - idle timeout
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_hw_accelerate_stats#entry_age_out_idle DataThunderCgnv6Nat64HwAccelerateStats#entry_age_out_idle}
  */
  readonly entryAgeOutIdle?: number;
  /**
  * HW Entries Aged Out - invalid dst
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_hw_accelerate_stats#entry_age_out_invalid_dst DataThunderCgnv6Nat64HwAccelerateStats#entry_age_out_invalid_dst}
  */
  readonly entryAgeOutInvalidDst?: number;
  /**
  * HW Entries Aged Out - TCP FIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_hw_accelerate_stats#entry_age_out_tcp_fin DataThunderCgnv6Nat64HwAccelerateStats#entry_age_out_tcp_fin}
  */
  readonly entryAgeOutTcpFin?: number;
  /**
  * HW Entries Aged Out - TCP RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_hw_accelerate_stats#entry_age_out_tcp_rst DataThunderCgnv6Nat64HwAccelerateStats#entry_age_out_tcp_rst}
  */
  readonly entryAgeOutTcpRst?: number;
  /**
  * HW Entries Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_hw_accelerate_stats#entry_counter DataThunderCgnv6Nat64HwAccelerateStats#entry_counter}
  */
  readonly entryCounter?: number;
  /**
  * HW Entries Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_hw_accelerate_stats#entry_create DataThunderCgnv6Nat64HwAccelerateStats#entry_create}
  */
  readonly entryCreate?: number;
  /**
  * HW Entry Creation Failed - max entries exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_hw_accelerate_stats#entry_create_fail_max_entry DataThunderCgnv6Nat64HwAccelerateStats#entry_create_fail_max_entry}
  */
  readonly entryCreateFailMaxEntry?: number;
  /**
  * HW Entry Creation Failed - server down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_hw_accelerate_stats#entry_create_fail_server_down DataThunderCgnv6Nat64HwAccelerateStats#entry_create_fail_server_down}
  */
  readonly entryCreateFailServerDown?: number;
  /**
  * HW Entry Creation Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_hw_accelerate_stats#entry_create_failure DataThunderCgnv6Nat64HwAccelerateStats#entry_create_failure}
  */
  readonly entryCreateFailure?: number;
  /**
  * HW Entries Force HW Invalidate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_hw_accelerate_stats#entry_force_hw_invalidate DataThunderCgnv6Nat64HwAccelerateStats#entry_force_hw_invalidate}
  */
  readonly entryForceHwInvalidate?: number;
  /**
  * HW Entries Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_hw_accelerate_stats#entry_free DataThunderCgnv6Nat64HwAccelerateStats#entry_free}
  */
  readonly entryFree?: number;
  /**
  * HW Entry Freed - no matched conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_hw_accelerate_stats#entry_free_no_conn DataThunderCgnv6Nat64HwAccelerateStats#entry_free_no_conn}
  */
  readonly entryFreeNoConn?: number;
  /**
  * HW Entry Freed - no HW prog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_hw_accelerate_stats#entry_free_no_hw_prog DataThunderCgnv6Nat64HwAccelerateStats#entry_free_no_hw_prog}
  */
  readonly entryFreeNoHwProg?: number;
  /**
  * HW Entry Freed - no software entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_hw_accelerate_stats#entry_free_no_sw_entry DataThunderCgnv6Nat64HwAccelerateStats#entry_free_no_sw_entry}
  */
  readonly entryFreeNoSwEntry?: number;
  /**
  * HW Entries Freed - opposite tuple entry aged-out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_hw_accelerate_stats#entry_free_opp_entry DataThunderCgnv6Nat64HwAccelerateStats#entry_free_opp_entry}
  */
  readonly entryFreeOppEntry?: number;
  /**
  * HW Entries Invalidate due to server down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_hw_accelerate_stats#entry_invalidate_server_down DataThunderCgnv6Nat64HwAccelerateStats#entry_invalidate_server_down}
  */
  readonly entryInvalidateServerDown?: number;
  /**
  * TCAM Flow Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_hw_accelerate_stats#tcam_counter DataThunderCgnv6Nat64HwAccelerateStats#tcam_counter}
  */
  readonly tcamCounter?: number;
  /**
  * TCAM Flows Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_hw_accelerate_stats#tcam_create DataThunderCgnv6Nat64HwAccelerateStats#tcam_create}
  */
  readonly tcamCreate?: number;
  /**
  * TCAM Flows Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_hw_accelerate_stats#tcam_free DataThunderCgnv6Nat64HwAccelerateStats#tcam_free}
  */
  readonly tcamFree?: number;
}

export function dataThunderCgnv6Nat64HwAccelerateStatsStatsToTerraform(struct?: DataThunderCgnv6Nat64HwAccelerateStatsStatsOutputReference | DataThunderCgnv6Nat64HwAccelerateStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_age_out: cdktf.numberToTerraform(struct!.entryAgeOut),
    entry_age_out_idle: cdktf.numberToTerraform(struct!.entryAgeOutIdle),
    entry_age_out_invalid_dst: cdktf.numberToTerraform(struct!.entryAgeOutInvalidDst),
    entry_age_out_tcp_fin: cdktf.numberToTerraform(struct!.entryAgeOutTcpFin),
    entry_age_out_tcp_rst: cdktf.numberToTerraform(struct!.entryAgeOutTcpRst),
    entry_counter: cdktf.numberToTerraform(struct!.entryCounter),
    entry_create: cdktf.numberToTerraform(struct!.entryCreate),
    entry_create_fail_max_entry: cdktf.numberToTerraform(struct!.entryCreateFailMaxEntry),
    entry_create_fail_server_down: cdktf.numberToTerraform(struct!.entryCreateFailServerDown),
    entry_create_failure: cdktf.numberToTerraform(struct!.entryCreateFailure),
    entry_force_hw_invalidate: cdktf.numberToTerraform(struct!.entryForceHwInvalidate),
    entry_free: cdktf.numberToTerraform(struct!.entryFree),
    entry_free_no_conn: cdktf.numberToTerraform(struct!.entryFreeNoConn),
    entry_free_no_hw_prog: cdktf.numberToTerraform(struct!.entryFreeNoHwProg),
    entry_free_no_sw_entry: cdktf.numberToTerraform(struct!.entryFreeNoSwEntry),
    entry_free_opp_entry: cdktf.numberToTerraform(struct!.entryFreeOppEntry),
    entry_invalidate_server_down: cdktf.numberToTerraform(struct!.entryInvalidateServerDown),
    tcam_counter: cdktf.numberToTerraform(struct!.tcamCounter),
    tcam_create: cdktf.numberToTerraform(struct!.tcamCreate),
    tcam_free: cdktf.numberToTerraform(struct!.tcamFree),
  }
}


export function dataThunderCgnv6Nat64HwAccelerateStatsStatsToHclTerraform(struct?: DataThunderCgnv6Nat64HwAccelerateStatsStatsOutputReference | DataThunderCgnv6Nat64HwAccelerateStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_age_out: {
      value: cdktf.numberToHclTerraform(struct!.entryAgeOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_age_out_idle: {
      value: cdktf.numberToHclTerraform(struct!.entryAgeOutIdle),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_age_out_invalid_dst: {
      value: cdktf.numberToHclTerraform(struct!.entryAgeOutInvalidDst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_age_out_tcp_fin: {
      value: cdktf.numberToHclTerraform(struct!.entryAgeOutTcpFin),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_age_out_tcp_rst: {
      value: cdktf.numberToHclTerraform(struct!.entryAgeOutTcpRst),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_counter: {
      value: cdktf.numberToHclTerraform(struct!.entryCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_create: {
      value: cdktf.numberToHclTerraform(struct!.entryCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_create_fail_max_entry: {
      value: cdktf.numberToHclTerraform(struct!.entryCreateFailMaxEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_create_fail_server_down: {
      value: cdktf.numberToHclTerraform(struct!.entryCreateFailServerDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_create_failure: {
      value: cdktf.numberToHclTerraform(struct!.entryCreateFailure),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_force_hw_invalidate: {
      value: cdktf.numberToHclTerraform(struct!.entryForceHwInvalidate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_free: {
      value: cdktf.numberToHclTerraform(struct!.entryFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_free_no_conn: {
      value: cdktf.numberToHclTerraform(struct!.entryFreeNoConn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_free_no_hw_prog: {
      value: cdktf.numberToHclTerraform(struct!.entryFreeNoHwProg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_free_no_sw_entry: {
      value: cdktf.numberToHclTerraform(struct!.entryFreeNoSwEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_free_opp_entry: {
      value: cdktf.numberToHclTerraform(struct!.entryFreeOppEntry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_invalidate_server_down: {
      value: cdktf.numberToHclTerraform(struct!.entryInvalidateServerDown),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcam_counter: {
      value: cdktf.numberToHclTerraform(struct!.tcamCounter),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcam_create: {
      value: cdktf.numberToHclTerraform(struct!.tcamCreate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    tcam_free: {
      value: cdktf.numberToHclTerraform(struct!.tcamFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6Nat64HwAccelerateStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6Nat64HwAccelerateStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryAgeOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryAgeOut = this._entryAgeOut;
    }
    if (this._entryAgeOutIdle !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryAgeOutIdle = this._entryAgeOutIdle;
    }
    if (this._entryAgeOutInvalidDst !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryAgeOutInvalidDst = this._entryAgeOutInvalidDst;
    }
    if (this._entryAgeOutTcpFin !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryAgeOutTcpFin = this._entryAgeOutTcpFin;
    }
    if (this._entryAgeOutTcpRst !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryAgeOutTcpRst = this._entryAgeOutTcpRst;
    }
    if (this._entryCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryCounter = this._entryCounter;
    }
    if (this._entryCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryCreate = this._entryCreate;
    }
    if (this._entryCreateFailMaxEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryCreateFailMaxEntry = this._entryCreateFailMaxEntry;
    }
    if (this._entryCreateFailServerDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryCreateFailServerDown = this._entryCreateFailServerDown;
    }
    if (this._entryCreateFailure !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryCreateFailure = this._entryCreateFailure;
    }
    if (this._entryForceHwInvalidate !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryForceHwInvalidate = this._entryForceHwInvalidate;
    }
    if (this._entryFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryFree = this._entryFree;
    }
    if (this._entryFreeNoConn !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryFreeNoConn = this._entryFreeNoConn;
    }
    if (this._entryFreeNoHwProg !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryFreeNoHwProg = this._entryFreeNoHwProg;
    }
    if (this._entryFreeNoSwEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryFreeNoSwEntry = this._entryFreeNoSwEntry;
    }
    if (this._entryFreeOppEntry !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryFreeOppEntry = this._entryFreeOppEntry;
    }
    if (this._entryInvalidateServerDown !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryInvalidateServerDown = this._entryInvalidateServerDown;
    }
    if (this._tcamCounter !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcamCounter = this._tcamCounter;
    }
    if (this._tcamCreate !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcamCreate = this._tcamCreate;
    }
    if (this._tcamFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.tcamFree = this._tcamFree;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6Nat64HwAccelerateStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._entryAgeOut = undefined;
      this._entryAgeOutIdle = undefined;
      this._entryAgeOutInvalidDst = undefined;
      this._entryAgeOutTcpFin = undefined;
      this._entryAgeOutTcpRst = undefined;
      this._entryCounter = undefined;
      this._entryCreate = undefined;
      this._entryCreateFailMaxEntry = undefined;
      this._entryCreateFailServerDown = undefined;
      this._entryCreateFailure = undefined;
      this._entryForceHwInvalidate = undefined;
      this._entryFree = undefined;
      this._entryFreeNoConn = undefined;
      this._entryFreeNoHwProg = undefined;
      this._entryFreeNoSwEntry = undefined;
      this._entryFreeOppEntry = undefined;
      this._entryInvalidateServerDown = undefined;
      this._tcamCounter = undefined;
      this._tcamCreate = undefined;
      this._tcamFree = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._entryAgeOut = value.entryAgeOut;
      this._entryAgeOutIdle = value.entryAgeOutIdle;
      this._entryAgeOutInvalidDst = value.entryAgeOutInvalidDst;
      this._entryAgeOutTcpFin = value.entryAgeOutTcpFin;
      this._entryAgeOutTcpRst = value.entryAgeOutTcpRst;
      this._entryCounter = value.entryCounter;
      this._entryCreate = value.entryCreate;
      this._entryCreateFailMaxEntry = value.entryCreateFailMaxEntry;
      this._entryCreateFailServerDown = value.entryCreateFailServerDown;
      this._entryCreateFailure = value.entryCreateFailure;
      this._entryForceHwInvalidate = value.entryForceHwInvalidate;
      this._entryFree = value.entryFree;
      this._entryFreeNoConn = value.entryFreeNoConn;
      this._entryFreeNoHwProg = value.entryFreeNoHwProg;
      this._entryFreeNoSwEntry = value.entryFreeNoSwEntry;
      this._entryFreeOppEntry = value.entryFreeOppEntry;
      this._entryInvalidateServerDown = value.entryInvalidateServerDown;
      this._tcamCounter = value.tcamCounter;
      this._tcamCreate = value.tcamCreate;
      this._tcamFree = value.tcamFree;
    }
  }

  // entry_age_out - computed: false, optional: true, required: false
  private _entryAgeOut?: number; 
  public get entryAgeOut() {
    return this.getNumberAttribute('entry_age_out');
  }
  public set entryAgeOut(value: number) {
    this._entryAgeOut = value;
  }
  public resetEntryAgeOut() {
    this._entryAgeOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryAgeOutInput() {
    return this._entryAgeOut;
  }

  // entry_age_out_idle - computed: false, optional: true, required: false
  private _entryAgeOutIdle?: number; 
  public get entryAgeOutIdle() {
    return this.getNumberAttribute('entry_age_out_idle');
  }
  public set entryAgeOutIdle(value: number) {
    this._entryAgeOutIdle = value;
  }
  public resetEntryAgeOutIdle() {
    this._entryAgeOutIdle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryAgeOutIdleInput() {
    return this._entryAgeOutIdle;
  }

  // entry_age_out_invalid_dst - computed: false, optional: true, required: false
  private _entryAgeOutInvalidDst?: number; 
  public get entryAgeOutInvalidDst() {
    return this.getNumberAttribute('entry_age_out_invalid_dst');
  }
  public set entryAgeOutInvalidDst(value: number) {
    this._entryAgeOutInvalidDst = value;
  }
  public resetEntryAgeOutInvalidDst() {
    this._entryAgeOutInvalidDst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryAgeOutInvalidDstInput() {
    return this._entryAgeOutInvalidDst;
  }

  // entry_age_out_tcp_fin - computed: false, optional: true, required: false
  private _entryAgeOutTcpFin?: number; 
  public get entryAgeOutTcpFin() {
    return this.getNumberAttribute('entry_age_out_tcp_fin');
  }
  public set entryAgeOutTcpFin(value: number) {
    this._entryAgeOutTcpFin = value;
  }
  public resetEntryAgeOutTcpFin() {
    this._entryAgeOutTcpFin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryAgeOutTcpFinInput() {
    return this._entryAgeOutTcpFin;
  }

  // entry_age_out_tcp_rst - computed: false, optional: true, required: false
  private _entryAgeOutTcpRst?: number; 
  public get entryAgeOutTcpRst() {
    return this.getNumberAttribute('entry_age_out_tcp_rst');
  }
  public set entryAgeOutTcpRst(value: number) {
    this._entryAgeOutTcpRst = value;
  }
  public resetEntryAgeOutTcpRst() {
    this._entryAgeOutTcpRst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryAgeOutTcpRstInput() {
    return this._entryAgeOutTcpRst;
  }

  // entry_counter - computed: false, optional: true, required: false
  private _entryCounter?: number; 
  public get entryCounter() {
    return this.getNumberAttribute('entry_counter');
  }
  public set entryCounter(value: number) {
    this._entryCounter = value;
  }
  public resetEntryCounter() {
    this._entryCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryCounterInput() {
    return this._entryCounter;
  }

  // entry_create - computed: false, optional: true, required: false
  private _entryCreate?: number; 
  public get entryCreate() {
    return this.getNumberAttribute('entry_create');
  }
  public set entryCreate(value: number) {
    this._entryCreate = value;
  }
  public resetEntryCreate() {
    this._entryCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryCreateInput() {
    return this._entryCreate;
  }

  // entry_create_fail_max_entry - computed: false, optional: true, required: false
  private _entryCreateFailMaxEntry?: number; 
  public get entryCreateFailMaxEntry() {
    return this.getNumberAttribute('entry_create_fail_max_entry');
  }
  public set entryCreateFailMaxEntry(value: number) {
    this._entryCreateFailMaxEntry = value;
  }
  public resetEntryCreateFailMaxEntry() {
    this._entryCreateFailMaxEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryCreateFailMaxEntryInput() {
    return this._entryCreateFailMaxEntry;
  }

  // entry_create_fail_server_down - computed: false, optional: true, required: false
  private _entryCreateFailServerDown?: number; 
  public get entryCreateFailServerDown() {
    return this.getNumberAttribute('entry_create_fail_server_down');
  }
  public set entryCreateFailServerDown(value: number) {
    this._entryCreateFailServerDown = value;
  }
  public resetEntryCreateFailServerDown() {
    this._entryCreateFailServerDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryCreateFailServerDownInput() {
    return this._entryCreateFailServerDown;
  }

  // entry_create_failure - computed: false, optional: true, required: false
  private _entryCreateFailure?: number; 
  public get entryCreateFailure() {
    return this.getNumberAttribute('entry_create_failure');
  }
  public set entryCreateFailure(value: number) {
    this._entryCreateFailure = value;
  }
  public resetEntryCreateFailure() {
    this._entryCreateFailure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryCreateFailureInput() {
    return this._entryCreateFailure;
  }

  // entry_force_hw_invalidate - computed: false, optional: true, required: false
  private _entryForceHwInvalidate?: number; 
  public get entryForceHwInvalidate() {
    return this.getNumberAttribute('entry_force_hw_invalidate');
  }
  public set entryForceHwInvalidate(value: number) {
    this._entryForceHwInvalidate = value;
  }
  public resetEntryForceHwInvalidate() {
    this._entryForceHwInvalidate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryForceHwInvalidateInput() {
    return this._entryForceHwInvalidate;
  }

  // entry_free - computed: false, optional: true, required: false
  private _entryFree?: number; 
  public get entryFree() {
    return this.getNumberAttribute('entry_free');
  }
  public set entryFree(value: number) {
    this._entryFree = value;
  }
  public resetEntryFree() {
    this._entryFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryFreeInput() {
    return this._entryFree;
  }

  // entry_free_no_conn - computed: false, optional: true, required: false
  private _entryFreeNoConn?: number; 
  public get entryFreeNoConn() {
    return this.getNumberAttribute('entry_free_no_conn');
  }
  public set entryFreeNoConn(value: number) {
    this._entryFreeNoConn = value;
  }
  public resetEntryFreeNoConn() {
    this._entryFreeNoConn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryFreeNoConnInput() {
    return this._entryFreeNoConn;
  }

  // entry_free_no_hw_prog - computed: false, optional: true, required: false
  private _entryFreeNoHwProg?: number; 
  public get entryFreeNoHwProg() {
    return this.getNumberAttribute('entry_free_no_hw_prog');
  }
  public set entryFreeNoHwProg(value: number) {
    this._entryFreeNoHwProg = value;
  }
  public resetEntryFreeNoHwProg() {
    this._entryFreeNoHwProg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryFreeNoHwProgInput() {
    return this._entryFreeNoHwProg;
  }

  // entry_free_no_sw_entry - computed: false, optional: true, required: false
  private _entryFreeNoSwEntry?: number; 
  public get entryFreeNoSwEntry() {
    return this.getNumberAttribute('entry_free_no_sw_entry');
  }
  public set entryFreeNoSwEntry(value: number) {
    this._entryFreeNoSwEntry = value;
  }
  public resetEntryFreeNoSwEntry() {
    this._entryFreeNoSwEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryFreeNoSwEntryInput() {
    return this._entryFreeNoSwEntry;
  }

  // entry_free_opp_entry - computed: false, optional: true, required: false
  private _entryFreeOppEntry?: number; 
  public get entryFreeOppEntry() {
    return this.getNumberAttribute('entry_free_opp_entry');
  }
  public set entryFreeOppEntry(value: number) {
    this._entryFreeOppEntry = value;
  }
  public resetEntryFreeOppEntry() {
    this._entryFreeOppEntry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryFreeOppEntryInput() {
    return this._entryFreeOppEntry;
  }

  // entry_invalidate_server_down - computed: false, optional: true, required: false
  private _entryInvalidateServerDown?: number; 
  public get entryInvalidateServerDown() {
    return this.getNumberAttribute('entry_invalidate_server_down');
  }
  public set entryInvalidateServerDown(value: number) {
    this._entryInvalidateServerDown = value;
  }
  public resetEntryInvalidateServerDown() {
    this._entryInvalidateServerDown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryInvalidateServerDownInput() {
    return this._entryInvalidateServerDown;
  }

  // tcam_counter - computed: false, optional: true, required: false
  private _tcamCounter?: number; 
  public get tcamCounter() {
    return this.getNumberAttribute('tcam_counter');
  }
  public set tcamCounter(value: number) {
    this._tcamCounter = value;
  }
  public resetTcamCounter() {
    this._tcamCounter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcamCounterInput() {
    return this._tcamCounter;
  }

  // tcam_create - computed: false, optional: true, required: false
  private _tcamCreate?: number; 
  public get tcamCreate() {
    return this.getNumberAttribute('tcam_create');
  }
  public set tcamCreate(value: number) {
    this._tcamCreate = value;
  }
  public resetTcamCreate() {
    this._tcamCreate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcamCreateInput() {
    return this._tcamCreate;
  }

  // tcam_free - computed: false, optional: true, required: false
  private _tcamFree?: number; 
  public get tcamFree() {
    return this.getNumberAttribute('tcam_free');
  }
  public set tcamFree(value: number) {
    this._tcamFree = value;
  }
  public resetTcamFree() {
    this._tcamFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcamFreeInput() {
    return this._tcamFree;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_hw_accelerate_stats thunder_cgnv6_nat64_hw_accelerate_stats}
*/
export class DataThunderCgnv6Nat64HwAccelerateStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_nat64_hw_accelerate_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6Nat64HwAccelerateStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6Nat64HwAccelerateStats to import
  * @param importFromId The id of the existing DataThunderCgnv6Nat64HwAccelerateStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_hw_accelerate_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6Nat64HwAccelerateStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_nat64_hw_accelerate_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_nat64_hw_accelerate_stats thunder_cgnv6_nat64_hw_accelerate_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6Nat64HwAccelerateStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6Nat64HwAccelerateStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_nat64_hw_accelerate_stats',
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
  private _stats = new DataThunderCgnv6Nat64HwAccelerateStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderCgnv6Nat64HwAccelerateStatsStats) {
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
      stats: dataThunderCgnv6Nat64HwAccelerateStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderCgnv6Nat64HwAccelerateStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6Nat64HwAccelerateStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
