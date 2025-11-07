// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_response_rate_limiting_stats
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbDnsResponseRateLimitingStatsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_response_rate_limiting_stats#id DataThunderSlbDnsResponseRateLimitingStats#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * stats block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_response_rate_limiting_stats#stats DataThunderSlbDnsResponseRateLimitingStats#stats}
  */
  readonly stats?: DataThunderSlbDnsResponseRateLimitingStatsStats;
}
export interface DataThunderSlbDnsResponseRateLimitingStatsStats {
  /**
  * Current Entry Count
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_response_rate_limiting_stats#curr_entries DataThunderSlbDnsResponseRateLimitingStats#curr_entries}
  */
  readonly currEntries?: number;
  /**
  * Entry Creation Failure
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_response_rate_limiting_stats#err_entry_create_failed DataThunderSlbDnsResponseRateLimitingStats#err_entry_create_failed}
  */
  readonly errEntryCreateFailed?: number;
  /**
  * Entry Creation Out of Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_response_rate_limiting_stats#err_entry_create_oom DataThunderSlbDnsResponseRateLimitingStats#err_entry_create_oom}
  */
  readonly errEntryCreateOom?: number;
  /**
  * Entry Extension Creation Out of Memory
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_response_rate_limiting_stats#err_entry_ext_create_oom DataThunderSlbDnsResponseRateLimitingStats#err_entry_ext_create_oom}
  */
  readonly errEntryExtCreateOom?: number;
  /**
  * Entry Insert Failed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_response_rate_limiting_stats#err_entry_insert_failed DataThunderSlbDnsResponseRateLimitingStats#err_entry_insert_failed}
  */
  readonly errEntryInsertFailed?: number;
  /**
  * Failed to Match Vport
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_response_rate_limiting_stats#err_vport_fail_match DataThunderSlbDnsResponseRateLimitingStats#err_vport_fail_match}
  */
  readonly errVportFailMatch?: number;
  /**
  * Other Thread Refilling
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_response_rate_limiting_stats#other_thread_refill DataThunderSlbDnsResponseRateLimitingStats#other_thread_refill}
  */
  readonly otherThreadRefill?: number;
  /**
  * Total Entry Created
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_response_rate_limiting_stats#total_created DataThunderSlbDnsResponseRateLimitingStats#total_created}
  */
  readonly totalCreated?: number;
  /**
  * Total Credit Exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_response_rate_limiting_stats#total_credit_exceeded DataThunderSlbDnsResponseRateLimitingStats#total_credit_exceeded}
  */
  readonly totalCreditExceeded?: number;
  /**
  * Total Entry Freed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_response_rate_limiting_stats#total_freed DataThunderSlbDnsResponseRateLimitingStats#total_freed}
  */
  readonly totalFreed?: number;
  /**
  * Total Entry Inserted
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_response_rate_limiting_stats#total_inserted DataThunderSlbDnsResponseRateLimitingStats#total_inserted}
  */
  readonly totalInserted?: number;
  /**
  * Total Logs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_response_rate_limiting_stats#total_logs DataThunderSlbDnsResponseRateLimitingStats#total_logs}
  */
  readonly totalLogs?: number;
  /**
  * Total Overflow Entry Hits
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_response_rate_limiting_stats#total_overflow_entry_hits DataThunderSlbDnsResponseRateLimitingStats#total_overflow_entry_hits}
  */
  readonly totalOverflowEntryHits?: number;
  /**
  * Total Entry Ready To Free
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_response_rate_limiting_stats#total_ready_to_free DataThunderSlbDnsResponseRateLimitingStats#total_ready_to_free}
  */
  readonly totalReadyToFree?: number;
  /**
  * Total Refills
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_response_rate_limiting_stats#total_refill DataThunderSlbDnsResponseRateLimitingStats#total_refill}
  */
  readonly totalRefill?: number;
  /**
  * Total Entry Withdrew
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_response_rate_limiting_stats#total_withdrew DataThunderSlbDnsResponseRateLimitingStats#total_withdrew}
  */
  readonly totalWithdrew?: number;
}

export function dataThunderSlbDnsResponseRateLimitingStatsStatsToTerraform(struct?: DataThunderSlbDnsResponseRateLimitingStatsStatsOutputReference | DataThunderSlbDnsResponseRateLimitingStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    curr_entries: cdktf.numberToTerraform(struct!.currEntries),
    err_entry_create_failed: cdktf.numberToTerraform(struct!.errEntryCreateFailed),
    err_entry_create_oom: cdktf.numberToTerraform(struct!.errEntryCreateOom),
    err_entry_ext_create_oom: cdktf.numberToTerraform(struct!.errEntryExtCreateOom),
    err_entry_insert_failed: cdktf.numberToTerraform(struct!.errEntryInsertFailed),
    err_vport_fail_match: cdktf.numberToTerraform(struct!.errVportFailMatch),
    other_thread_refill: cdktf.numberToTerraform(struct!.otherThreadRefill),
    total_created: cdktf.numberToTerraform(struct!.totalCreated),
    total_credit_exceeded: cdktf.numberToTerraform(struct!.totalCreditExceeded),
    total_freed: cdktf.numberToTerraform(struct!.totalFreed),
    total_inserted: cdktf.numberToTerraform(struct!.totalInserted),
    total_logs: cdktf.numberToTerraform(struct!.totalLogs),
    total_overflow_entry_hits: cdktf.numberToTerraform(struct!.totalOverflowEntryHits),
    total_ready_to_free: cdktf.numberToTerraform(struct!.totalReadyToFree),
    total_refill: cdktf.numberToTerraform(struct!.totalRefill),
    total_withdrew: cdktf.numberToTerraform(struct!.totalWithdrew),
  }
}


export function dataThunderSlbDnsResponseRateLimitingStatsStatsToHclTerraform(struct?: DataThunderSlbDnsResponseRateLimitingStatsStatsOutputReference | DataThunderSlbDnsResponseRateLimitingStatsStats): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    curr_entries: {
      value: cdktf.numberToHclTerraform(struct!.currEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_entry_create_failed: {
      value: cdktf.numberToHclTerraform(struct!.errEntryCreateFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_entry_create_oom: {
      value: cdktf.numberToHclTerraform(struct!.errEntryCreateOom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_entry_ext_create_oom: {
      value: cdktf.numberToHclTerraform(struct!.errEntryExtCreateOom),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_entry_insert_failed: {
      value: cdktf.numberToHclTerraform(struct!.errEntryInsertFailed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    err_vport_fail_match: {
      value: cdktf.numberToHclTerraform(struct!.errVportFailMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    other_thread_refill: {
      value: cdktf.numberToHclTerraform(struct!.otherThreadRefill),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_created: {
      value: cdktf.numberToHclTerraform(struct!.totalCreated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_credit_exceeded: {
      value: cdktf.numberToHclTerraform(struct!.totalCreditExceeded),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_freed: {
      value: cdktf.numberToHclTerraform(struct!.totalFreed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_inserted: {
      value: cdktf.numberToHclTerraform(struct!.totalInserted),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_logs: {
      value: cdktf.numberToHclTerraform(struct!.totalLogs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_overflow_entry_hits: {
      value: cdktf.numberToHclTerraform(struct!.totalOverflowEntryHits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_ready_to_free: {
      value: cdktf.numberToHclTerraform(struct!.totalReadyToFree),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_refill: {
      value: cdktf.numberToHclTerraform(struct!.totalRefill),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_withdrew: {
      value: cdktf.numberToHclTerraform(struct!.totalWithdrew),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbDnsResponseRateLimitingStatsStatsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbDnsResponseRateLimitingStatsStats | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.currEntries = this._currEntries;
    }
    if (this._errEntryCreateFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errEntryCreateFailed = this._errEntryCreateFailed;
    }
    if (this._errEntryCreateOom !== undefined) {
      hasAnyValues = true;
      internalValueResult.errEntryCreateOom = this._errEntryCreateOom;
    }
    if (this._errEntryExtCreateOom !== undefined) {
      hasAnyValues = true;
      internalValueResult.errEntryExtCreateOom = this._errEntryExtCreateOom;
    }
    if (this._errEntryInsertFailed !== undefined) {
      hasAnyValues = true;
      internalValueResult.errEntryInsertFailed = this._errEntryInsertFailed;
    }
    if (this._errVportFailMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.errVportFailMatch = this._errVportFailMatch;
    }
    if (this._otherThreadRefill !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherThreadRefill = this._otherThreadRefill;
    }
    if (this._totalCreated !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalCreated = this._totalCreated;
    }
    if (this._totalCreditExceeded !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalCreditExceeded = this._totalCreditExceeded;
    }
    if (this._totalFreed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalFreed = this._totalFreed;
    }
    if (this._totalInserted !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalInserted = this._totalInserted;
    }
    if (this._totalLogs !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalLogs = this._totalLogs;
    }
    if (this._totalOverflowEntryHits !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalOverflowEntryHits = this._totalOverflowEntryHits;
    }
    if (this._totalReadyToFree !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalReadyToFree = this._totalReadyToFree;
    }
    if (this._totalRefill !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalRefill = this._totalRefill;
    }
    if (this._totalWithdrew !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalWithdrew = this._totalWithdrew;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbDnsResponseRateLimitingStatsStats | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._currEntries = undefined;
      this._errEntryCreateFailed = undefined;
      this._errEntryCreateOom = undefined;
      this._errEntryExtCreateOom = undefined;
      this._errEntryInsertFailed = undefined;
      this._errVportFailMatch = undefined;
      this._otherThreadRefill = undefined;
      this._totalCreated = undefined;
      this._totalCreditExceeded = undefined;
      this._totalFreed = undefined;
      this._totalInserted = undefined;
      this._totalLogs = undefined;
      this._totalOverflowEntryHits = undefined;
      this._totalReadyToFree = undefined;
      this._totalRefill = undefined;
      this._totalWithdrew = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._currEntries = value.currEntries;
      this._errEntryCreateFailed = value.errEntryCreateFailed;
      this._errEntryCreateOom = value.errEntryCreateOom;
      this._errEntryExtCreateOom = value.errEntryExtCreateOom;
      this._errEntryInsertFailed = value.errEntryInsertFailed;
      this._errVportFailMatch = value.errVportFailMatch;
      this._otherThreadRefill = value.otherThreadRefill;
      this._totalCreated = value.totalCreated;
      this._totalCreditExceeded = value.totalCreditExceeded;
      this._totalFreed = value.totalFreed;
      this._totalInserted = value.totalInserted;
      this._totalLogs = value.totalLogs;
      this._totalOverflowEntryHits = value.totalOverflowEntryHits;
      this._totalReadyToFree = value.totalReadyToFree;
      this._totalRefill = value.totalRefill;
      this._totalWithdrew = value.totalWithdrew;
    }
  }

  // curr_entries - computed: false, optional: true, required: false
  private _currEntries?: number; 
  public get currEntries() {
    return this.getNumberAttribute('curr_entries');
  }
  public set currEntries(value: number) {
    this._currEntries = value;
  }
  public resetCurrEntries() {
    this._currEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currEntriesInput() {
    return this._currEntries;
  }

  // err_entry_create_failed - computed: false, optional: true, required: false
  private _errEntryCreateFailed?: number; 
  public get errEntryCreateFailed() {
    return this.getNumberAttribute('err_entry_create_failed');
  }
  public set errEntryCreateFailed(value: number) {
    this._errEntryCreateFailed = value;
  }
  public resetErrEntryCreateFailed() {
    this._errEntryCreateFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errEntryCreateFailedInput() {
    return this._errEntryCreateFailed;
  }

  // err_entry_create_oom - computed: false, optional: true, required: false
  private _errEntryCreateOom?: number; 
  public get errEntryCreateOom() {
    return this.getNumberAttribute('err_entry_create_oom');
  }
  public set errEntryCreateOom(value: number) {
    this._errEntryCreateOom = value;
  }
  public resetErrEntryCreateOom() {
    this._errEntryCreateOom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errEntryCreateOomInput() {
    return this._errEntryCreateOom;
  }

  // err_entry_ext_create_oom - computed: false, optional: true, required: false
  private _errEntryExtCreateOom?: number; 
  public get errEntryExtCreateOom() {
    return this.getNumberAttribute('err_entry_ext_create_oom');
  }
  public set errEntryExtCreateOom(value: number) {
    this._errEntryExtCreateOom = value;
  }
  public resetErrEntryExtCreateOom() {
    this._errEntryExtCreateOom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errEntryExtCreateOomInput() {
    return this._errEntryExtCreateOom;
  }

  // err_entry_insert_failed - computed: false, optional: true, required: false
  private _errEntryInsertFailed?: number; 
  public get errEntryInsertFailed() {
    return this.getNumberAttribute('err_entry_insert_failed');
  }
  public set errEntryInsertFailed(value: number) {
    this._errEntryInsertFailed = value;
  }
  public resetErrEntryInsertFailed() {
    this._errEntryInsertFailed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errEntryInsertFailedInput() {
    return this._errEntryInsertFailed;
  }

  // err_vport_fail_match - computed: false, optional: true, required: false
  private _errVportFailMatch?: number; 
  public get errVportFailMatch() {
    return this.getNumberAttribute('err_vport_fail_match');
  }
  public set errVportFailMatch(value: number) {
    this._errVportFailMatch = value;
  }
  public resetErrVportFailMatch() {
    this._errVportFailMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errVportFailMatchInput() {
    return this._errVportFailMatch;
  }

  // other_thread_refill - computed: false, optional: true, required: false
  private _otherThreadRefill?: number; 
  public get otherThreadRefill() {
    return this.getNumberAttribute('other_thread_refill');
  }
  public set otherThreadRefill(value: number) {
    this._otherThreadRefill = value;
  }
  public resetOtherThreadRefill() {
    this._otherThreadRefill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherThreadRefillInput() {
    return this._otherThreadRefill;
  }

  // total_created - computed: false, optional: true, required: false
  private _totalCreated?: number; 
  public get totalCreated() {
    return this.getNumberAttribute('total_created');
  }
  public set totalCreated(value: number) {
    this._totalCreated = value;
  }
  public resetTotalCreated() {
    this._totalCreated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCreatedInput() {
    return this._totalCreated;
  }

  // total_credit_exceeded - computed: false, optional: true, required: false
  private _totalCreditExceeded?: number; 
  public get totalCreditExceeded() {
    return this.getNumberAttribute('total_credit_exceeded');
  }
  public set totalCreditExceeded(value: number) {
    this._totalCreditExceeded = value;
  }
  public resetTotalCreditExceeded() {
    this._totalCreditExceeded = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalCreditExceededInput() {
    return this._totalCreditExceeded;
  }

  // total_freed - computed: false, optional: true, required: false
  private _totalFreed?: number; 
  public get totalFreed() {
    return this.getNumberAttribute('total_freed');
  }
  public set totalFreed(value: number) {
    this._totalFreed = value;
  }
  public resetTotalFreed() {
    this._totalFreed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalFreedInput() {
    return this._totalFreed;
  }

  // total_inserted - computed: false, optional: true, required: false
  private _totalInserted?: number; 
  public get totalInserted() {
    return this.getNumberAttribute('total_inserted');
  }
  public set totalInserted(value: number) {
    this._totalInserted = value;
  }
  public resetTotalInserted() {
    this._totalInserted = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInsertedInput() {
    return this._totalInserted;
  }

  // total_logs - computed: false, optional: true, required: false
  private _totalLogs?: number; 
  public get totalLogs() {
    return this.getNumberAttribute('total_logs');
  }
  public set totalLogs(value: number) {
    this._totalLogs = value;
  }
  public resetTotalLogs() {
    this._totalLogs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalLogsInput() {
    return this._totalLogs;
  }

  // total_overflow_entry_hits - computed: false, optional: true, required: false
  private _totalOverflowEntryHits?: number; 
  public get totalOverflowEntryHits() {
    return this.getNumberAttribute('total_overflow_entry_hits');
  }
  public set totalOverflowEntryHits(value: number) {
    this._totalOverflowEntryHits = value;
  }
  public resetTotalOverflowEntryHits() {
    this._totalOverflowEntryHits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalOverflowEntryHitsInput() {
    return this._totalOverflowEntryHits;
  }

  // total_ready_to_free - computed: false, optional: true, required: false
  private _totalReadyToFree?: number; 
  public get totalReadyToFree() {
    return this.getNumberAttribute('total_ready_to_free');
  }
  public set totalReadyToFree(value: number) {
    this._totalReadyToFree = value;
  }
  public resetTotalReadyToFree() {
    this._totalReadyToFree = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalReadyToFreeInput() {
    return this._totalReadyToFree;
  }

  // total_refill - computed: false, optional: true, required: false
  private _totalRefill?: number; 
  public get totalRefill() {
    return this.getNumberAttribute('total_refill');
  }
  public set totalRefill(value: number) {
    this._totalRefill = value;
  }
  public resetTotalRefill() {
    this._totalRefill = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalRefillInput() {
    return this._totalRefill;
  }

  // total_withdrew - computed: false, optional: true, required: false
  private _totalWithdrew?: number; 
  public get totalWithdrew() {
    return this.getNumberAttribute('total_withdrew');
  }
  public set totalWithdrew(value: number) {
    this._totalWithdrew = value;
  }
  public resetTotalWithdrew() {
    this._totalWithdrew = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalWithdrewInput() {
    return this._totalWithdrew;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_response_rate_limiting_stats thunder_slb_dns_response_rate_limiting_stats}
*/
export class DataThunderSlbDnsResponseRateLimitingStats extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_dns_response_rate_limiting_stats";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbDnsResponseRateLimitingStats resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbDnsResponseRateLimitingStats to import
  * @param importFromId The id of the existing DataThunderSlbDnsResponseRateLimitingStats that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_response_rate_limiting_stats#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbDnsResponseRateLimitingStats to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_dns_response_rate_limiting_stats", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/slb_dns_response_rate_limiting_stats thunder_slb_dns_response_rate_limiting_stats} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbDnsResponseRateLimitingStatsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbDnsResponseRateLimitingStatsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_dns_response_rate_limiting_stats',
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
  private _stats = new DataThunderSlbDnsResponseRateLimitingStatsStatsOutputReference(this, "stats");
  public get stats() {
    return this._stats;
  }
  public putStats(value: DataThunderSlbDnsResponseRateLimitingStatsStats) {
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
      stats: dataThunderSlbDnsResponseRateLimitingStatsStatsToTerraform(this._stats.internalValue),
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
        value: dataThunderSlbDnsResponseRateLimitingStatsStatsToHclTerraform(this._stats.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbDnsResponseRateLimitingStatsStatsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
