// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSystemHardwareAccelerateStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#id DataThunderSystemHardwareAccelerateStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * slb block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#slb DataThunderSystemHardwareAccelerateStats#slb}
  */
  readonly slb?: DataThunderSystemHardwareAccelerateStatsSlb;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#stats DataThunderSystemHardwareAccelerateStats#stats}
  */
  readonly stats?: DataThunderSystemHardwareAccelerateStatsStats;
}
export interface DataThunderSystemHardwareAccelerateStatsSlbStats {
  /**
  * Hardware Entries Aged Out
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#entry_age_out DataThunderSystemHardwareAccelerateStats#entry_age_out}
  */
  readonly entryAgeOut?: number;
  /**
  * Hardware Entries Aged Out Idle
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#entry_age_out_idle DataThunderSystemHardwareAccelerateStats#entry_age_out_idle}
  */
  readonly entryAgeOutIdle?: number;
  /**
  * Hardware Entries Aged Out invalid dst
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#entry_age_out_invalid_dst DataThunderSystemHardwareAccelerateStats#entry_age_out_invalid_dst}
  */
  readonly entryAgeOutInvalidDst?: number;
  /**
  * Hardware Entries Aged Out TCP FIN
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#entry_age_out_tcp_fin DataThunderSystemHardwareAccelerateStats#entry_age_out_tcp_fin}
  */
  readonly entryAgeOutTcpFin?: number;
  /**
  * Hardware Entries Aged Out TCP RST
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#entry_age_out_tcp_rst DataThunderSystemHardwareAccelerateStats#entry_age_out_tcp_rst}
  */
  readonly entryAgeOutTcpRst?: number;
  /**
  * Hardware Entry Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#entry_counter DataThunderSystemHardwareAccelerateStats#entry_counter}
  */
  readonly entryCounter?: number;
  /**
  * Hardware Entries Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#entry_create DataThunderSystemHardwareAccelerateStats#entry_create}
  */
  readonly entryCreate?: number;
  /**
  * Hardware Entries Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#entry_create_fail_max_entry DataThunderSystemHardwareAccelerateStats#entry_create_fail_max_entry}
  */
  readonly entryCreateFailMaxEntry?: number;
  /**
  * Hardware Entries Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#entry_create_fail_server_down DataThunderSystemHardwareAccelerateStats#entry_create_fail_server_down}
  */
  readonly entryCreateFailServerDown?: number;
  /**
  * Hardware Entries Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#entry_create_failure DataThunderSystemHardwareAccelerateStats#entry_create_failure}
  */
  readonly entryCreateFailure?: number;
  /**
  * Hardware Entries Force HW Invalidate
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#entry_force_hw_invalidate DataThunderSystemHardwareAccelerateStats#entry_force_hw_invalidate}
  */
  readonly entryForceHwInvalidate?: number;
  /**
  * Hardware Entries Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#entry_free DataThunderSystemHardwareAccelerateStats#entry_free}
  */
  readonly entryFree?: number;
  /**
  * Hardware Entry Free no matched conn
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#entry_free_no_conn DataThunderSystemHardwareAccelerateStats#entry_free_no_conn}
  */
  readonly entryFreeNoConn?: number;
  /**
  * Hardware Entry Free no hw prog
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#entry_free_no_hw_prog DataThunderSystemHardwareAccelerateStats#entry_free_no_hw_prog}
  */
  readonly entryFreeNoHwProg?: number;
  /**
  * Hardware Entry Free no software entry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#entry_free_no_sw_entry DataThunderSystemHardwareAccelerateStats#entry_free_no_sw_entry}
  */
  readonly entryFreeNoSwEntry?: number;
  /**
  * Hardware Entries Free due to opposite tuple entry ageout event
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#entry_free_opp_entry DataThunderSystemHardwareAccelerateStats#entry_free_opp_entry}
  */
  readonly entryFreeOppEntry?: number;
  /**
  * Hardware Entries Invalidate due to server down
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#entry_invalidate_server_down DataThunderSystemHardwareAccelerateStats#entry_invalidate_server_down}
  */
  readonly entryInvalidateServerDown?: number;
  /**
  * TCAM Entry Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#tcam_counter DataThunderSystemHardwareAccelerateStats#tcam_counter}
  */
  readonly tcamCounter?: number;
  /**
  * TCAM Entries Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#tcam_create DataThunderSystemHardwareAccelerateStats#tcam_create}
  */
  readonly tcamCreate?: number;
  /**
  * TCAM Entries Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#tcam_free DataThunderSystemHardwareAccelerateStats#tcam_free}
  */
  readonly tcamFree?: number;
}

export function dataThunderSystemHardwareAccelerateStatsSlbStatsToTerraform(struct?: DataThunderSystemHardwareAccelerateStatsSlbStatsOutputReference | DataThunderSystemHardwareAccelerateStatsSlbStats): any {
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


export function dataThunderSystemHardwareAccelerateStatsSlbStatsToHclTerraform(struct?: DataThunderSystemHardwareAccelerateStatsSlbStatsOutputReference | DataThunderSystemHardwareAccelerateStatsSlbStats): any {
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

export class DataThunderSystemHardwareAccelerateStatsSlbStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemHardwareAccelerateStatsSlbStats | undefined {
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

  public set internalValue(value: DataThunderSystemHardwareAccelerateStatsSlbStats | undefined) {
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
export interface DataThunderSystemHardwareAccelerateStatsSlb {
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#stats DataThunderSystemHardwareAccelerateStats#stats}
  */
  readonly stats?: DataThunderSystemHardwareAccelerateStatsSlbStats;
}

export function dataThunderSystemHardwareAccelerateStatsSlbToTerraform(struct?: DataThunderSystemHardwareAccelerateStatsSlbOutputReference | DataThunderSystemHardwareAccelerateStatsSlb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    stats: dataThunderSystemHardwareAccelerateStatsSlbStatsToTerraform(struct!.stats),
  }
}


export function dataThunderSystemHardwareAccelerateStatsSlbToHclTerraform(struct?: DataThunderSystemHardwareAccelerateStatsSlbOutputReference | DataThunderSystemHardwareAccelerateStatsSlb): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    stats: {
      value: dataThunderSystemHardwareAccelerateStatsSlbStatsToHclTerraform(struct!.stats),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSystemHardwareAccelerateStatsSlbStatsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemHardwareAccelerateStatsSlbOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemHardwareAccelerateStatsSlb | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._stats?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.stats = this._stats?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemHardwareAccelerateStatsSlb | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._stats.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._stats.internalValue = value.stats;
    }
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderSystemHardwareAccelerateStatsSlbStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSystemHardwareAccelerateStatsSlbStats) {
    this._stats.internalValue = value;
  }
  public resetStats() {
    this._stats.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statsInput() {
    return this._stats.internalValue;
  }
}
export interface DataThunderSystemHardwareAccelerateStatsStats {
  /**
  * Total packets hit counts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hit_counts DataThunderSystemHardwareAccelerateStats#hit_counts}
  */
  readonly hitCounts?: number;
  /**
  * HW Fwd hit index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hit_index DataThunderSystemHardwareAccelerateStats#hit_index}
  */
  readonly hitIndex?: number;
  /**
  * Hardware forward ageout drop count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_ageout_drop_count DataThunderSystemHardwareAccelerateStats#hw_fwd_ageout_drop_count}
  */
  readonly hwFwdAgeoutDropCount?: number;
  /**
  * Hardware forward available ipv4 entries count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_avail_ipv4_entry DataThunderSystemHardwareAccelerateStats#hw_fwd_avail_ipv4_entry}
  */
  readonly hwFwdAvailIpv4Entry?: number;
  /**
  * Hardware forward available ipv6 entries count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_avail_ipv6_entry DataThunderSystemHardwareAccelerateStats#hw_fwd_avail_ipv6_entry}
  */
  readonly hwFwdAvailIpv6Entry?: number;
  /**
  * Hardware forward flow drop count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_flow_drop_count DataThunderSystemHardwareAccelerateStats#hw_fwd_flow_drop_count}
  */
  readonly hwFwdFlowDropCount?: number;
  /**
  * Hardware forward flow error count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_flow_error_count DataThunderSystemHardwareAccelerateStats#hw_fwd_flow_error_count}
  */
  readonly hwFwdFlowErrorCount?: number;
  /**
  * Hardware forward flow hit index
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_flow_hit_index DataThunderSystemHardwareAccelerateStats#hw_fwd_flow_hit_index}
  */
  readonly hwFwdFlowHitIndex?: number;
  /**
  * Hardware forward flow qdr full drop count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_flow_qdr_full_drop DataThunderSystemHardwareAccelerateStats#hw_fwd_flow_qdr_full_drop}
  */
  readonly hwFwdFlowQdrFullDrop?: number;
  /**
  * Hardware forward flow reason flags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_flow_reason_flags DataThunderSystemHardwareAccelerateStats#hw_fwd_flow_reason_flags}
  */
  readonly hwFwdFlowReasonFlags?: number;
  /**
  * Hardware forward sequence mismatch errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_flow_seq_mismatch DataThunderSystemHardwareAccelerateStats#hw_fwd_flow_seq_mismatch}
  */
  readonly hwFwdFlowSeqMismatch?: number;
  /**
  * hardware forward rate drop count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_flow_sflow_count DataThunderSystemHardwareAccelerateStats#hw_fwd_flow_sflow_count}
  */
  readonly hwFwdFlowSflowCount?: number;
  /**
  * Hardware forward singlebit Errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_flow_singlebit_errors DataThunderSystemHardwareAccelerateStats#hw_fwd_flow_singlebit_errors}
  */
  readonly hwFwdFlowSinglebitErrors?: number;
  /**
  * Hardware forward tag mismatch errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_flow_tag_mismatch DataThunderSystemHardwareAccelerateStats#hw_fwd_flow_tag_mismatch}
  */
  readonly hwFwdFlowTagMismatch?: number;
  /**
  * Hardware forward flow tx full drop count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_flow_tx_full_drop DataThunderSystemHardwareAccelerateStats#hw_fwd_flow_tx_full_drop}
  */
  readonly hwFwdFlowTxFullDrop?: number;
  /**
  * Hardware forward flow unalign count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_flow_unalign_count DataThunderSystemHardwareAccelerateStats#hw_fwd_flow_unalign_count}
  */
  readonly hwFwdFlowUnalignCount?: number;
  /**
  * Hardware forward flow underflow count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_flow_underflow_count DataThunderSystemHardwareAccelerateStats#hw_fwd_flow_underflow_count}
  */
  readonly hwFwdFlowUnderflowCount?: number;
  /**
  * Hardware forward invalid drop count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_invalidation_drop DataThunderSystemHardwareAccelerateStats#hw_fwd_invalidation_drop}
  */
  readonly hwFwdInvalidationDrop?: number;
  /**
  * Hardware forward entry lookup fail count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_lookup_fail_rcvd DataThunderSystemHardwareAccelerateStats#hw_fwd_lookup_fail_rcvd}
  */
  readonly hwFwdLookupFailRcvd?: number;
  /**
  * Hardware forwarder status flags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_module_status DataThunderSystemHardwareAccelerateStats#hw_fwd_module_status}
  */
  readonly hwFwdModuleStatus?: number;
  /**
  * Hardware forward normal ageout received count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_normal_ageout_rcvd DataThunderSystemHardwareAccelerateStats#hw_fwd_normal_ageout_rcvd}
  */
  readonly hwFwdNormalAgeoutRcvd?: number;
  /**
  * Hardware forward phyport mismatch count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_phyport_mismatch_drop DataThunderSystemHardwareAccelerateStats#hw_fwd_phyport_mismatch_drop}
  */
  readonly hwFwdPhyportMismatchDrop?: number;
  /**
  * Hardware forward programming Errors
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_prog_errors DataThunderSystemHardwareAccelerateStats#hw_fwd_prog_errors}
  */
  readonly hwFwdProgErrors?: number;
  /**
  * Hardware forward programming requests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_prog_reqs DataThunderSystemHardwareAccelerateStats#hw_fwd_prog_reqs}
  */
  readonly hwFwdProgReqs?: number;
  /**
  * Hardware forward protocol mismatch count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_protocol_mismatch_drop DataThunderSystemHardwareAccelerateStats#hw_fwd_protocol_mismatch_drop}
  */
  readonly hwFwdProtocolMismatchDrop?: number;
  /**
  * Hardware forward rate drop count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_rate_drop_count DataThunderSystemHardwareAccelerateStats#hw_fwd_rate_drop_count}
  */
  readonly hwFwdRateDropCount?: number;
  /**
  * Hardware forward entry stats update count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_stats_update_rcvd DataThunderSystemHardwareAccelerateStats#hw_fwd_stats_update_rcvd}
  */
  readonly hwFwdStatsUpdateRcvd?: number;
  /**
  * Hardware forward tcp FIN ageout received count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_tcp_fin_ageout_rcvd DataThunderSystemHardwareAccelerateStats#hw_fwd_tcp_fin_ageout_rcvd}
  */
  readonly hwFwdTcpFinAgeoutRcvd?: number;
  /**
  * Hardware forward tcp RST ageout received count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_tcp_rst_ageout_rcvd DataThunderSystemHardwareAccelerateStats#hw_fwd_tcp_rst_ageout_rcvd}
  */
  readonly hwFwdTcpRstAgeoutRcvd?: number;
  /**
  * Hardware forward vlanid mismatch count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_vlanid_mismatch_drop DataThunderSystemHardwareAccelerateStats#hw_fwd_vlanid_mismatch_drop}
  */
  readonly hwFwdVlanidMismatchDrop?: number;
  /**
  * Hardware forward vmid mismatch count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#hw_fwd_vmid_drop DataThunderSystemHardwareAccelerateStats#hw_fwd_vmid_drop}
  */
  readonly hwFwdVmidDrop?: number;
  /**
  * Total IPv4 hardware forwarded packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#ipv4_forward_counts DataThunderSystemHardwareAccelerateStats#ipv4_forward_counts}
  */
  readonly ipv4ForwardCounts?: number;
  /**
  * Total IPv6 hardware forwarded packets
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#ipv6_forward_counts DataThunderSystemHardwareAccelerateStats#ipv6_forward_counts}
  */
  readonly ipv6ForwardCounts?: number;
}

export function dataThunderSystemHardwareAccelerateStatsStatsToTerraform(struct?: DataThunderSystemHardwareAccelerateStatsStatsOutputReference | DataThunderSystemHardwareAccelerateStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hit_counts: cdktf.numberToTerraform(struct!.hitCounts),
    hit_index: cdktf.numberToTerraform(struct!.hitIndex),
    hw_fwd_ageout_drop_count: cdktf.numberToTerraform(struct!.hwFwdAgeoutDropCount),
    hw_fwd_avail_ipv4_entry: cdktf.numberToTerraform(struct!.hwFwdAvailIpv4Entry),
    hw_fwd_avail_ipv6_entry: cdktf.numberToTerraform(struct!.hwFwdAvailIpv6Entry),
    hw_fwd_flow_drop_count: cdktf.numberToTerraform(struct!.hwFwdFlowDropCount),
    hw_fwd_flow_error_count: cdktf.numberToTerraform(struct!.hwFwdFlowErrorCount),
    hw_fwd_flow_hit_index: cdktf.numberToTerraform(struct!.hwFwdFlowHitIndex),
    hw_fwd_flow_qdr_full_drop: cdktf.numberToTerraform(struct!.hwFwdFlowQdrFullDrop),
    hw_fwd_flow_reason_flags: cdktf.numberToTerraform(struct!.hwFwdFlowReasonFlags),
    hw_fwd_flow_seq_mismatch: cdktf.numberToTerraform(struct!.hwFwdFlowSeqMismatch),
    hw_fwd_flow_sflow_count: cdktf.numberToTerraform(struct!.hwFwdFlowSflowCount),
    hw_fwd_flow_singlebit_errors: cdktf.numberToTerraform(struct!.hwFwdFlowSinglebitErrors),
    hw_fwd_flow_tag_mismatch: cdktf.numberToTerraform(struct!.hwFwdFlowTagMismatch),
    hw_fwd_flow_tx_full_drop: cdktf.numberToTerraform(struct!.hwFwdFlowTxFullDrop),
    hw_fwd_flow_unalign_count: cdktf.numberToTerraform(struct!.hwFwdFlowUnalignCount),
    hw_fwd_flow_underflow_count: cdktf.numberToTerraform(struct!.hwFwdFlowUnderflowCount),
    hw_fwd_invalidation_drop: cdktf.numberToTerraform(struct!.hwFwdInvalidationDrop),
    hw_fwd_lookup_fail_rcvd: cdktf.numberToTerraform(struct!.hwFwdLookupFailRcvd),
    hw_fwd_module_status: cdktf.numberToTerraform(struct!.hwFwdModuleStatus),
    hw_fwd_normal_ageout_rcvd: cdktf.numberToTerraform(struct!.hwFwdNormalAgeoutRcvd),
    hw_fwd_phyport_mismatch_drop: cdktf.numberToTerraform(struct!.hwFwdPhyportMismatchDrop),
    hw_fwd_prog_errors: cdktf.numberToTerraform(struct!.hwFwdProgErrors),
    hw_fwd_prog_reqs: cdktf.numberToTerraform(struct!.hwFwdProgReqs),
    hw_fwd_protocol_mismatch_drop: cdktf.numberToTerraform(struct!.hwFwdProtocolMismatchDrop),
    hw_fwd_rate_drop_count: cdktf.numberToTerraform(struct!.hwFwdRateDropCount),
    hw_fwd_stats_update_rcvd: cdktf.numberToTerraform(struct!.hwFwdStatsUpdateRcvd),
    hw_fwd_tcp_fin_ageout_rcvd: cdktf.numberToTerraform(struct!.hwFwdTcpFinAgeoutRcvd),
    hw_fwd_tcp_rst_ageout_rcvd: cdktf.numberToTerraform(struct!.hwFwdTcpRstAgeoutRcvd),
    hw_fwd_vlanid_mismatch_drop: cdktf.numberToTerraform(struct!.hwFwdVlanidMismatchDrop),
    hw_fwd_vmid_drop: cdktf.numberToTerraform(struct!.hwFwdVmidDrop),
    ipv4_forward_counts: cdktf.numberToTerraform(struct!.ipv4ForwardCounts),
    ipv6_forward_counts: cdktf.numberToTerraform(struct!.ipv6ForwardCounts),
  }
}


export function dataThunderSystemHardwareAccelerateStatsStatsToHclTerraform(struct?: DataThunderSystemHardwareAccelerateStatsStatsOutputReference | DataThunderSystemHardwareAccelerateStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hit_counts: {
      value: cdktf.numberToHclTerraform(struct!.hitCounts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hit_index: {
      value: cdktf.numberToHclTerraform(struct!.hitIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_ageout_drop_count: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdAgeoutDropCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_avail_ipv4_entry: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdAvailIpv4Entry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_avail_ipv6_entry: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdAvailIpv6Entry),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_flow_drop_count: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdFlowDropCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_flow_error_count: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdFlowErrorCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_flow_hit_index: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdFlowHitIndex),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_flow_qdr_full_drop: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdFlowQdrFullDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_flow_reason_flags: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdFlowReasonFlags),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_flow_seq_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdFlowSeqMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_flow_sflow_count: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdFlowSflowCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_flow_singlebit_errors: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdFlowSinglebitErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_flow_tag_mismatch: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdFlowTagMismatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_flow_tx_full_drop: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdFlowTxFullDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_flow_unalign_count: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdFlowUnalignCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_flow_underflow_count: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdFlowUnderflowCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_invalidation_drop: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdInvalidationDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_lookup_fail_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdLookupFailRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_module_status: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdModuleStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_normal_ageout_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdNormalAgeoutRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_phyport_mismatch_drop: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdPhyportMismatchDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_prog_errors: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdProgErrors),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_prog_reqs: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdProgReqs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_protocol_mismatch_drop: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdProtocolMismatchDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_rate_drop_count: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdRateDropCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_stats_update_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdStatsUpdateRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_tcp_fin_ageout_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdTcpFinAgeoutRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_tcp_rst_ageout_rcvd: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdTcpRstAgeoutRcvd),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_vlanid_mismatch_drop: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdVlanidMismatchDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    hw_fwd_vmid_drop: {
      value: cdktf.numberToHclTerraform(struct!.hwFwdVmidDrop),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv4_forward_counts: {
      value: cdktf.numberToHclTerraform(struct!.ipv4ForwardCounts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ipv6_forward_counts: {
      value: cdktf.numberToHclTerraform(struct!.ipv6ForwardCounts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSystemHardwareAccelerateStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSystemHardwareAccelerateStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hitCounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.hitCounts = this._hitCounts;
    }
    if (this._hitIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.hitIndex = this._hitIndex;
    }
    if (this._hwFwdAgeoutDropCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdAgeoutDropCount = this._hwFwdAgeoutDropCount;
    }
    if (this._hwFwdAvailIpv4Entry !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdAvailIpv4Entry = this._hwFwdAvailIpv4Entry;
    }
    if (this._hwFwdAvailIpv6Entry !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdAvailIpv6Entry = this._hwFwdAvailIpv6Entry;
    }
    if (this._hwFwdFlowDropCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdFlowDropCount = this._hwFwdFlowDropCount;
    }
    if (this._hwFwdFlowErrorCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdFlowErrorCount = this._hwFwdFlowErrorCount;
    }
    if (this._hwFwdFlowHitIndex !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdFlowHitIndex = this._hwFwdFlowHitIndex;
    }
    if (this._hwFwdFlowQdrFullDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdFlowQdrFullDrop = this._hwFwdFlowQdrFullDrop;
    }
    if (this._hwFwdFlowReasonFlags !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdFlowReasonFlags = this._hwFwdFlowReasonFlags;
    }
    if (this._hwFwdFlowSeqMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdFlowSeqMismatch = this._hwFwdFlowSeqMismatch;
    }
    if (this._hwFwdFlowSflowCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdFlowSflowCount = this._hwFwdFlowSflowCount;
    }
    if (this._hwFwdFlowSinglebitErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdFlowSinglebitErrors = this._hwFwdFlowSinglebitErrors;
    }
    if (this._hwFwdFlowTagMismatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdFlowTagMismatch = this._hwFwdFlowTagMismatch;
    }
    if (this._hwFwdFlowTxFullDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdFlowTxFullDrop = this._hwFwdFlowTxFullDrop;
    }
    if (this._hwFwdFlowUnalignCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdFlowUnalignCount = this._hwFwdFlowUnalignCount;
    }
    if (this._hwFwdFlowUnderflowCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdFlowUnderflowCount = this._hwFwdFlowUnderflowCount;
    }
    if (this._hwFwdInvalidationDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdInvalidationDrop = this._hwFwdInvalidationDrop;
    }
    if (this._hwFwdLookupFailRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdLookupFailRcvd = this._hwFwdLookupFailRcvd;
    }
    if (this._hwFwdModuleStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdModuleStatus = this._hwFwdModuleStatus;
    }
    if (this._hwFwdNormalAgeoutRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdNormalAgeoutRcvd = this._hwFwdNormalAgeoutRcvd;
    }
    if (this._hwFwdPhyportMismatchDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdPhyportMismatchDrop = this._hwFwdPhyportMismatchDrop;
    }
    if (this._hwFwdProgErrors !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdProgErrors = this._hwFwdProgErrors;
    }
    if (this._hwFwdProgReqs !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdProgReqs = this._hwFwdProgReqs;
    }
    if (this._hwFwdProtocolMismatchDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdProtocolMismatchDrop = this._hwFwdProtocolMismatchDrop;
    }
    if (this._hwFwdRateDropCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdRateDropCount = this._hwFwdRateDropCount;
    }
    if (this._hwFwdStatsUpdateRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdStatsUpdateRcvd = this._hwFwdStatsUpdateRcvd;
    }
    if (this._hwFwdTcpFinAgeoutRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdTcpFinAgeoutRcvd = this._hwFwdTcpFinAgeoutRcvd;
    }
    if (this._hwFwdTcpRstAgeoutRcvd !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdTcpRstAgeoutRcvd = this._hwFwdTcpRstAgeoutRcvd;
    }
    if (this._hwFwdVlanidMismatchDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdVlanidMismatchDrop = this._hwFwdVlanidMismatchDrop;
    }
    if (this._hwFwdVmidDrop !== undefined) {
      hasAnyValues = true;
      internalValueResult.hwFwdVmidDrop = this._hwFwdVmidDrop;
    }
    if (this._ipv4ForwardCounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv4ForwardCounts = this._ipv4ForwardCounts;
    }
    if (this._ipv6ForwardCounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.ipv6ForwardCounts = this._ipv6ForwardCounts;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSystemHardwareAccelerateStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._hitCounts = undefined;
      this._hitIndex = undefined;
      this._hwFwdAgeoutDropCount = undefined;
      this._hwFwdAvailIpv4Entry = undefined;
      this._hwFwdAvailIpv6Entry = undefined;
      this._hwFwdFlowDropCount = undefined;
      this._hwFwdFlowErrorCount = undefined;
      this._hwFwdFlowHitIndex = undefined;
      this._hwFwdFlowQdrFullDrop = undefined;
      this._hwFwdFlowReasonFlags = undefined;
      this._hwFwdFlowSeqMismatch = undefined;
      this._hwFwdFlowSflowCount = undefined;
      this._hwFwdFlowSinglebitErrors = undefined;
      this._hwFwdFlowTagMismatch = undefined;
      this._hwFwdFlowTxFullDrop = undefined;
      this._hwFwdFlowUnalignCount = undefined;
      this._hwFwdFlowUnderflowCount = undefined;
      this._hwFwdInvalidationDrop = undefined;
      this._hwFwdLookupFailRcvd = undefined;
      this._hwFwdModuleStatus = undefined;
      this._hwFwdNormalAgeoutRcvd = undefined;
      this._hwFwdPhyportMismatchDrop = undefined;
      this._hwFwdProgErrors = undefined;
      this._hwFwdProgReqs = undefined;
      this._hwFwdProtocolMismatchDrop = undefined;
      this._hwFwdRateDropCount = undefined;
      this._hwFwdStatsUpdateRcvd = undefined;
      this._hwFwdTcpFinAgeoutRcvd = undefined;
      this._hwFwdTcpRstAgeoutRcvd = undefined;
      this._hwFwdVlanidMismatchDrop = undefined;
      this._hwFwdVmidDrop = undefined;
      this._ipv4ForwardCounts = undefined;
      this._ipv6ForwardCounts = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._hitCounts = value.hitCounts;
      this._hitIndex = value.hitIndex;
      this._hwFwdAgeoutDropCount = value.hwFwdAgeoutDropCount;
      this._hwFwdAvailIpv4Entry = value.hwFwdAvailIpv4Entry;
      this._hwFwdAvailIpv6Entry = value.hwFwdAvailIpv6Entry;
      this._hwFwdFlowDropCount = value.hwFwdFlowDropCount;
      this._hwFwdFlowErrorCount = value.hwFwdFlowErrorCount;
      this._hwFwdFlowHitIndex = value.hwFwdFlowHitIndex;
      this._hwFwdFlowQdrFullDrop = value.hwFwdFlowQdrFullDrop;
      this._hwFwdFlowReasonFlags = value.hwFwdFlowReasonFlags;
      this._hwFwdFlowSeqMismatch = value.hwFwdFlowSeqMismatch;
      this._hwFwdFlowSflowCount = value.hwFwdFlowSflowCount;
      this._hwFwdFlowSinglebitErrors = value.hwFwdFlowSinglebitErrors;
      this._hwFwdFlowTagMismatch = value.hwFwdFlowTagMismatch;
      this._hwFwdFlowTxFullDrop = value.hwFwdFlowTxFullDrop;
      this._hwFwdFlowUnalignCount = value.hwFwdFlowUnalignCount;
      this._hwFwdFlowUnderflowCount = value.hwFwdFlowUnderflowCount;
      this._hwFwdInvalidationDrop = value.hwFwdInvalidationDrop;
      this._hwFwdLookupFailRcvd = value.hwFwdLookupFailRcvd;
      this._hwFwdModuleStatus = value.hwFwdModuleStatus;
      this._hwFwdNormalAgeoutRcvd = value.hwFwdNormalAgeoutRcvd;
      this._hwFwdPhyportMismatchDrop = value.hwFwdPhyportMismatchDrop;
      this._hwFwdProgErrors = value.hwFwdProgErrors;
      this._hwFwdProgReqs = value.hwFwdProgReqs;
      this._hwFwdProtocolMismatchDrop = value.hwFwdProtocolMismatchDrop;
      this._hwFwdRateDropCount = value.hwFwdRateDropCount;
      this._hwFwdStatsUpdateRcvd = value.hwFwdStatsUpdateRcvd;
      this._hwFwdTcpFinAgeoutRcvd = value.hwFwdTcpFinAgeoutRcvd;
      this._hwFwdTcpRstAgeoutRcvd = value.hwFwdTcpRstAgeoutRcvd;
      this._hwFwdVlanidMismatchDrop = value.hwFwdVlanidMismatchDrop;
      this._hwFwdVmidDrop = value.hwFwdVmidDrop;
      this._ipv4ForwardCounts = value.ipv4ForwardCounts;
      this._ipv6ForwardCounts = value.ipv6ForwardCounts;
    }
  }

  // hit_counts - computed: false, optional: true, required: false
  private _hitCounts?: number; 
  public get hitCounts() {
    return this.getNumberAttribute('hit_counts');
  }
  public set hitCounts(value: number) {
    this._hitCounts = value;
  }
  public resetHitCounts() {
    this._hitCounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitCountsInput() {
    return this._hitCounts;
  }

  // hit_index - computed: false, optional: true, required: false
  private _hitIndex?: number; 
  public get hitIndex() {
    return this.getNumberAttribute('hit_index');
  }
  public set hitIndex(value: number) {
    this._hitIndex = value;
  }
  public resetHitIndex() {
    this._hitIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hitIndexInput() {
    return this._hitIndex;
  }

  // hw_fwd_ageout_drop_count - computed: false, optional: true, required: false
  private _hwFwdAgeoutDropCount?: number; 
  public get hwFwdAgeoutDropCount() {
    return this.getNumberAttribute('hw_fwd_ageout_drop_count');
  }
  public set hwFwdAgeoutDropCount(value: number) {
    this._hwFwdAgeoutDropCount = value;
  }
  public resetHwFwdAgeoutDropCount() {
    this._hwFwdAgeoutDropCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdAgeoutDropCountInput() {
    return this._hwFwdAgeoutDropCount;
  }

  // hw_fwd_avail_ipv4_entry - computed: false, optional: true, required: false
  private _hwFwdAvailIpv4Entry?: number; 
  public get hwFwdAvailIpv4Entry() {
    return this.getNumberAttribute('hw_fwd_avail_ipv4_entry');
  }
  public set hwFwdAvailIpv4Entry(value: number) {
    this._hwFwdAvailIpv4Entry = value;
  }
  public resetHwFwdAvailIpv4Entry() {
    this._hwFwdAvailIpv4Entry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdAvailIpv4EntryInput() {
    return this._hwFwdAvailIpv4Entry;
  }

  // hw_fwd_avail_ipv6_entry - computed: false, optional: true, required: false
  private _hwFwdAvailIpv6Entry?: number; 
  public get hwFwdAvailIpv6Entry() {
    return this.getNumberAttribute('hw_fwd_avail_ipv6_entry');
  }
  public set hwFwdAvailIpv6Entry(value: number) {
    this._hwFwdAvailIpv6Entry = value;
  }
  public resetHwFwdAvailIpv6Entry() {
    this._hwFwdAvailIpv6Entry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdAvailIpv6EntryInput() {
    return this._hwFwdAvailIpv6Entry;
  }

  // hw_fwd_flow_drop_count - computed: false, optional: true, required: false
  private _hwFwdFlowDropCount?: number; 
  public get hwFwdFlowDropCount() {
    return this.getNumberAttribute('hw_fwd_flow_drop_count');
  }
  public set hwFwdFlowDropCount(value: number) {
    this._hwFwdFlowDropCount = value;
  }
  public resetHwFwdFlowDropCount() {
    this._hwFwdFlowDropCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdFlowDropCountInput() {
    return this._hwFwdFlowDropCount;
  }

  // hw_fwd_flow_error_count - computed: false, optional: true, required: false
  private _hwFwdFlowErrorCount?: number; 
  public get hwFwdFlowErrorCount() {
    return this.getNumberAttribute('hw_fwd_flow_error_count');
  }
  public set hwFwdFlowErrorCount(value: number) {
    this._hwFwdFlowErrorCount = value;
  }
  public resetHwFwdFlowErrorCount() {
    this._hwFwdFlowErrorCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdFlowErrorCountInput() {
    return this._hwFwdFlowErrorCount;
  }

  // hw_fwd_flow_hit_index - computed: false, optional: true, required: false
  private _hwFwdFlowHitIndex?: number; 
  public get hwFwdFlowHitIndex() {
    return this.getNumberAttribute('hw_fwd_flow_hit_index');
  }
  public set hwFwdFlowHitIndex(value: number) {
    this._hwFwdFlowHitIndex = value;
  }
  public resetHwFwdFlowHitIndex() {
    this._hwFwdFlowHitIndex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdFlowHitIndexInput() {
    return this._hwFwdFlowHitIndex;
  }

  // hw_fwd_flow_qdr_full_drop - computed: false, optional: true, required: false
  private _hwFwdFlowQdrFullDrop?: number; 
  public get hwFwdFlowQdrFullDrop() {
    return this.getNumberAttribute('hw_fwd_flow_qdr_full_drop');
  }
  public set hwFwdFlowQdrFullDrop(value: number) {
    this._hwFwdFlowQdrFullDrop = value;
  }
  public resetHwFwdFlowQdrFullDrop() {
    this._hwFwdFlowQdrFullDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdFlowQdrFullDropInput() {
    return this._hwFwdFlowQdrFullDrop;
  }

  // hw_fwd_flow_reason_flags - computed: false, optional: true, required: false
  private _hwFwdFlowReasonFlags?: number; 
  public get hwFwdFlowReasonFlags() {
    return this.getNumberAttribute('hw_fwd_flow_reason_flags');
  }
  public set hwFwdFlowReasonFlags(value: number) {
    this._hwFwdFlowReasonFlags = value;
  }
  public resetHwFwdFlowReasonFlags() {
    this._hwFwdFlowReasonFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdFlowReasonFlagsInput() {
    return this._hwFwdFlowReasonFlags;
  }

  // hw_fwd_flow_seq_mismatch - computed: false, optional: true, required: false
  private _hwFwdFlowSeqMismatch?: number; 
  public get hwFwdFlowSeqMismatch() {
    return this.getNumberAttribute('hw_fwd_flow_seq_mismatch');
  }
  public set hwFwdFlowSeqMismatch(value: number) {
    this._hwFwdFlowSeqMismatch = value;
  }
  public resetHwFwdFlowSeqMismatch() {
    this._hwFwdFlowSeqMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdFlowSeqMismatchInput() {
    return this._hwFwdFlowSeqMismatch;
  }

  // hw_fwd_flow_sflow_count - computed: false, optional: true, required: false
  private _hwFwdFlowSflowCount?: number; 
  public get hwFwdFlowSflowCount() {
    return this.getNumberAttribute('hw_fwd_flow_sflow_count');
  }
  public set hwFwdFlowSflowCount(value: number) {
    this._hwFwdFlowSflowCount = value;
  }
  public resetHwFwdFlowSflowCount() {
    this._hwFwdFlowSflowCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdFlowSflowCountInput() {
    return this._hwFwdFlowSflowCount;
  }

  // hw_fwd_flow_singlebit_errors - computed: false, optional: true, required: false
  private _hwFwdFlowSinglebitErrors?: number; 
  public get hwFwdFlowSinglebitErrors() {
    return this.getNumberAttribute('hw_fwd_flow_singlebit_errors');
  }
  public set hwFwdFlowSinglebitErrors(value: number) {
    this._hwFwdFlowSinglebitErrors = value;
  }
  public resetHwFwdFlowSinglebitErrors() {
    this._hwFwdFlowSinglebitErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdFlowSinglebitErrorsInput() {
    return this._hwFwdFlowSinglebitErrors;
  }

  // hw_fwd_flow_tag_mismatch - computed: false, optional: true, required: false
  private _hwFwdFlowTagMismatch?: number; 
  public get hwFwdFlowTagMismatch() {
    return this.getNumberAttribute('hw_fwd_flow_tag_mismatch');
  }
  public set hwFwdFlowTagMismatch(value: number) {
    this._hwFwdFlowTagMismatch = value;
  }
  public resetHwFwdFlowTagMismatch() {
    this._hwFwdFlowTagMismatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdFlowTagMismatchInput() {
    return this._hwFwdFlowTagMismatch;
  }

  // hw_fwd_flow_tx_full_drop - computed: false, optional: true, required: false
  private _hwFwdFlowTxFullDrop?: number; 
  public get hwFwdFlowTxFullDrop() {
    return this.getNumberAttribute('hw_fwd_flow_tx_full_drop');
  }
  public set hwFwdFlowTxFullDrop(value: number) {
    this._hwFwdFlowTxFullDrop = value;
  }
  public resetHwFwdFlowTxFullDrop() {
    this._hwFwdFlowTxFullDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdFlowTxFullDropInput() {
    return this._hwFwdFlowTxFullDrop;
  }

  // hw_fwd_flow_unalign_count - computed: false, optional: true, required: false
  private _hwFwdFlowUnalignCount?: number; 
  public get hwFwdFlowUnalignCount() {
    return this.getNumberAttribute('hw_fwd_flow_unalign_count');
  }
  public set hwFwdFlowUnalignCount(value: number) {
    this._hwFwdFlowUnalignCount = value;
  }
  public resetHwFwdFlowUnalignCount() {
    this._hwFwdFlowUnalignCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdFlowUnalignCountInput() {
    return this._hwFwdFlowUnalignCount;
  }

  // hw_fwd_flow_underflow_count - computed: false, optional: true, required: false
  private _hwFwdFlowUnderflowCount?: number; 
  public get hwFwdFlowUnderflowCount() {
    return this.getNumberAttribute('hw_fwd_flow_underflow_count');
  }
  public set hwFwdFlowUnderflowCount(value: number) {
    this._hwFwdFlowUnderflowCount = value;
  }
  public resetHwFwdFlowUnderflowCount() {
    this._hwFwdFlowUnderflowCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdFlowUnderflowCountInput() {
    return this._hwFwdFlowUnderflowCount;
  }

  // hw_fwd_invalidation_drop - computed: false, optional: true, required: false
  private _hwFwdInvalidationDrop?: number; 
  public get hwFwdInvalidationDrop() {
    return this.getNumberAttribute('hw_fwd_invalidation_drop');
  }
  public set hwFwdInvalidationDrop(value: number) {
    this._hwFwdInvalidationDrop = value;
  }
  public resetHwFwdInvalidationDrop() {
    this._hwFwdInvalidationDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdInvalidationDropInput() {
    return this._hwFwdInvalidationDrop;
  }

  // hw_fwd_lookup_fail_rcvd - computed: false, optional: true, required: false
  private _hwFwdLookupFailRcvd?: number; 
  public get hwFwdLookupFailRcvd() {
    return this.getNumberAttribute('hw_fwd_lookup_fail_rcvd');
  }
  public set hwFwdLookupFailRcvd(value: number) {
    this._hwFwdLookupFailRcvd = value;
  }
  public resetHwFwdLookupFailRcvd() {
    this._hwFwdLookupFailRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdLookupFailRcvdInput() {
    return this._hwFwdLookupFailRcvd;
  }

  // hw_fwd_module_status - computed: false, optional: true, required: false
  private _hwFwdModuleStatus?: number; 
  public get hwFwdModuleStatus() {
    return this.getNumberAttribute('hw_fwd_module_status');
  }
  public set hwFwdModuleStatus(value: number) {
    this._hwFwdModuleStatus = value;
  }
  public resetHwFwdModuleStatus() {
    this._hwFwdModuleStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdModuleStatusInput() {
    return this._hwFwdModuleStatus;
  }

  // hw_fwd_normal_ageout_rcvd - computed: false, optional: true, required: false
  private _hwFwdNormalAgeoutRcvd?: number; 
  public get hwFwdNormalAgeoutRcvd() {
    return this.getNumberAttribute('hw_fwd_normal_ageout_rcvd');
  }
  public set hwFwdNormalAgeoutRcvd(value: number) {
    this._hwFwdNormalAgeoutRcvd = value;
  }
  public resetHwFwdNormalAgeoutRcvd() {
    this._hwFwdNormalAgeoutRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdNormalAgeoutRcvdInput() {
    return this._hwFwdNormalAgeoutRcvd;
  }

  // hw_fwd_phyport_mismatch_drop - computed: false, optional: true, required: false
  private _hwFwdPhyportMismatchDrop?: number; 
  public get hwFwdPhyportMismatchDrop() {
    return this.getNumberAttribute('hw_fwd_phyport_mismatch_drop');
  }
  public set hwFwdPhyportMismatchDrop(value: number) {
    this._hwFwdPhyportMismatchDrop = value;
  }
  public resetHwFwdPhyportMismatchDrop() {
    this._hwFwdPhyportMismatchDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdPhyportMismatchDropInput() {
    return this._hwFwdPhyportMismatchDrop;
  }

  // hw_fwd_prog_errors - computed: false, optional: true, required: false
  private _hwFwdProgErrors?: number; 
  public get hwFwdProgErrors() {
    return this.getNumberAttribute('hw_fwd_prog_errors');
  }
  public set hwFwdProgErrors(value: number) {
    this._hwFwdProgErrors = value;
  }
  public resetHwFwdProgErrors() {
    this._hwFwdProgErrors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdProgErrorsInput() {
    return this._hwFwdProgErrors;
  }

  // hw_fwd_prog_reqs - computed: false, optional: true, required: false
  private _hwFwdProgReqs?: number; 
  public get hwFwdProgReqs() {
    return this.getNumberAttribute('hw_fwd_prog_reqs');
  }
  public set hwFwdProgReqs(value: number) {
    this._hwFwdProgReqs = value;
  }
  public resetHwFwdProgReqs() {
    this._hwFwdProgReqs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdProgReqsInput() {
    return this._hwFwdProgReqs;
  }

  // hw_fwd_protocol_mismatch_drop - computed: false, optional: true, required: false
  private _hwFwdProtocolMismatchDrop?: number; 
  public get hwFwdProtocolMismatchDrop() {
    return this.getNumberAttribute('hw_fwd_protocol_mismatch_drop');
  }
  public set hwFwdProtocolMismatchDrop(value: number) {
    this._hwFwdProtocolMismatchDrop = value;
  }
  public resetHwFwdProtocolMismatchDrop() {
    this._hwFwdProtocolMismatchDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdProtocolMismatchDropInput() {
    return this._hwFwdProtocolMismatchDrop;
  }

  // hw_fwd_rate_drop_count - computed: false, optional: true, required: false
  private _hwFwdRateDropCount?: number; 
  public get hwFwdRateDropCount() {
    return this.getNumberAttribute('hw_fwd_rate_drop_count');
  }
  public set hwFwdRateDropCount(value: number) {
    this._hwFwdRateDropCount = value;
  }
  public resetHwFwdRateDropCount() {
    this._hwFwdRateDropCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdRateDropCountInput() {
    return this._hwFwdRateDropCount;
  }

  // hw_fwd_stats_update_rcvd - computed: false, optional: true, required: false
  private _hwFwdStatsUpdateRcvd?: number; 
  public get hwFwdStatsUpdateRcvd() {
    return this.getNumberAttribute('hw_fwd_stats_update_rcvd');
  }
  public set hwFwdStatsUpdateRcvd(value: number) {
    this._hwFwdStatsUpdateRcvd = value;
  }
  public resetHwFwdStatsUpdateRcvd() {
    this._hwFwdStatsUpdateRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdStatsUpdateRcvdInput() {
    return this._hwFwdStatsUpdateRcvd;
  }

  // hw_fwd_tcp_fin_ageout_rcvd - computed: false, optional: true, required: false
  private _hwFwdTcpFinAgeoutRcvd?: number; 
  public get hwFwdTcpFinAgeoutRcvd() {
    return this.getNumberAttribute('hw_fwd_tcp_fin_ageout_rcvd');
  }
  public set hwFwdTcpFinAgeoutRcvd(value: number) {
    this._hwFwdTcpFinAgeoutRcvd = value;
  }
  public resetHwFwdTcpFinAgeoutRcvd() {
    this._hwFwdTcpFinAgeoutRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdTcpFinAgeoutRcvdInput() {
    return this._hwFwdTcpFinAgeoutRcvd;
  }

  // hw_fwd_tcp_rst_ageout_rcvd - computed: false, optional: true, required: false
  private _hwFwdTcpRstAgeoutRcvd?: number; 
  public get hwFwdTcpRstAgeoutRcvd() {
    return this.getNumberAttribute('hw_fwd_tcp_rst_ageout_rcvd');
  }
  public set hwFwdTcpRstAgeoutRcvd(value: number) {
    this._hwFwdTcpRstAgeoutRcvd = value;
  }
  public resetHwFwdTcpRstAgeoutRcvd() {
    this._hwFwdTcpRstAgeoutRcvd = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdTcpRstAgeoutRcvdInput() {
    return this._hwFwdTcpRstAgeoutRcvd;
  }

  // hw_fwd_vlanid_mismatch_drop - computed: false, optional: true, required: false
  private _hwFwdVlanidMismatchDrop?: number; 
  public get hwFwdVlanidMismatchDrop() {
    return this.getNumberAttribute('hw_fwd_vlanid_mismatch_drop');
  }
  public set hwFwdVlanidMismatchDrop(value: number) {
    this._hwFwdVlanidMismatchDrop = value;
  }
  public resetHwFwdVlanidMismatchDrop() {
    this._hwFwdVlanidMismatchDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdVlanidMismatchDropInput() {
    return this._hwFwdVlanidMismatchDrop;
  }

  // hw_fwd_vmid_drop - computed: false, optional: true, required: false
  private _hwFwdVmidDrop?: number; 
  public get hwFwdVmidDrop() {
    return this.getNumberAttribute('hw_fwd_vmid_drop');
  }
  public set hwFwdVmidDrop(value: number) {
    this._hwFwdVmidDrop = value;
  }
  public resetHwFwdVmidDrop() {
    this._hwFwdVmidDrop = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hwFwdVmidDropInput() {
    return this._hwFwdVmidDrop;
  }

  // ipv4_forward_counts - computed: false, optional: true, required: false
  private _ipv4ForwardCounts?: number; 
  public get ipv4ForwardCounts() {
    return this.getNumberAttribute('ipv4_forward_counts');
  }
  public set ipv4ForwardCounts(value: number) {
    this._ipv4ForwardCounts = value;
  }
  public resetIpv4ForwardCounts() {
    this._ipv4ForwardCounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4ForwardCountsInput() {
    return this._ipv4ForwardCounts;
  }

  // ipv6_forward_counts - computed: false, optional: true, required: false
  private _ipv6ForwardCounts?: number; 
  public get ipv6ForwardCounts() {
    return this.getNumberAttribute('ipv6_forward_counts');
  }
  public set ipv6ForwardCounts(value: number) {
    this._ipv6ForwardCounts = value;
  }
  public resetIpv6ForwardCounts() {
    this._ipv6ForwardCounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv6ForwardCountsInput() {
    return this._ipv6ForwardCounts;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats thunder_system_hardware_accelerate_stats}
*/
export class DataThunderSystemHardwareAccelerateStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_system_hardware_accelerate_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSystemHardwareAccelerateStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSystemHardwareAccelerateStats to import
  * @param importFromId The id of the existing DataThunderSystemHardwareAccelerateStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSystemHardwareAccelerateStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_system_hardware_accelerate_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/system_hardware_accelerate_stats thunder_system_hardware_accelerate_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSystemHardwareAccelerateStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSystemHardwareAccelerateStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_system_hardware_accelerate_stats',
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
    this._slb.internalValue = config.slb;
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

  // slb - computed: false, optional: true, required: false
  private _slb = new DataThunderSystemHardwareAccelerateStatsSlbOutputReference(this, "slb");
  public get slb() {
    return this._slb;
  }
  public putSlb(value: DataThunderSystemHardwareAccelerateStatsSlb) {
    this._slb.internalValue = value;
  }
  public resetSlb() {
    this._slb.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get slbInput() {
    return this._slb.internalValue;
  }

  // stats - computed: false, optional: true, required: false
  private _stats = new DataThunderSystemHardwareAccelerateStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSystemHardwareAccelerateStatsStats) {
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
      slb: dataThunderSystemHardwareAccelerateStatsSlbToTerraform(this._slb.internalValue),
      stats: dataThunderSystemHardwareAccelerateStatsStatsToTerraform(this._stats.internalValue),
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
      slb: {
        value: dataThunderSystemHardwareAccelerateStatsSlbToHclTerraform(this._slb.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemHardwareAccelerateStatsSlbList",
      },
      stats: {
        value: dataThunderSystemHardwareAccelerateStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSystemHardwareAccelerateStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
