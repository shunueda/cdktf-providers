// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSlbDnsResponseRateLimitingOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#id DataThunderSlbDnsResponseRateLimitingOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#oper DataThunderSlbDnsResponseRateLimitingOper#oper}
  */
  readonly oper?: DataThunderSlbDnsResponseRateLimitingOperOper;
}
export interface DataThunderSlbDnsResponseRateLimitingOperOperDnsrrlCpuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#err_entry_create_failed DataThunderSlbDnsResponseRateLimitingOper#err_entry_create_failed}
  */
  readonly errEntryCreateFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#err_entry_create_oom DataThunderSlbDnsResponseRateLimitingOper#err_entry_create_oom}
  */
  readonly errEntryCreateOom?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#err_entry_ext_create_oom DataThunderSlbDnsResponseRateLimitingOper#err_entry_ext_create_oom}
  */
  readonly errEntryExtCreateOom?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#err_entry_insert_failed DataThunderSlbDnsResponseRateLimitingOper#err_entry_insert_failed}
  */
  readonly errEntryInsertFailed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#err_vport_fail_match DataThunderSlbDnsResponseRateLimitingOper#err_vport_fail_match}
  */
  readonly errVportFailMatch?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#other_thread_refill DataThunderSlbDnsResponseRateLimitingOper#other_thread_refill}
  */
  readonly otherThreadRefill?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#total_created DataThunderSlbDnsResponseRateLimitingOper#total_created}
  */
  readonly totalCreated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#total_credit_exceeded DataThunderSlbDnsResponseRateLimitingOper#total_credit_exceeded}
  */
  readonly totalCreditExceeded?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#total_freed DataThunderSlbDnsResponseRateLimitingOper#total_freed}
  */
  readonly totalFreed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#total_inserted DataThunderSlbDnsResponseRateLimitingOper#total_inserted}
  */
  readonly totalInserted?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#total_logs DataThunderSlbDnsResponseRateLimitingOper#total_logs}
  */
  readonly totalLogs?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#total_overflow_entry_hits DataThunderSlbDnsResponseRateLimitingOper#total_overflow_entry_hits}
  */
  readonly totalOverflowEntryHits?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#total_ready_to_free DataThunderSlbDnsResponseRateLimitingOper#total_ready_to_free}
  */
  readonly totalReadyToFree?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#total_refill DataThunderSlbDnsResponseRateLimitingOper#total_refill}
  */
  readonly totalRefill?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#total_withdrew DataThunderSlbDnsResponseRateLimitingOper#total_withdrew}
  */
  readonly totalWithdrew?: number;
}

export function dataThunderSlbDnsResponseRateLimitingOperOperDnsrrlCpuListStructToTerraform(struct?: DataThunderSlbDnsResponseRateLimitingOperOperDnsrrlCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
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


export function dataThunderSlbDnsResponseRateLimitingOperOperDnsrrlCpuListStructToHclTerraform(struct?: DataThunderSlbDnsResponseRateLimitingOperOperDnsrrlCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class DataThunderSlbDnsResponseRateLimitingOperOperDnsrrlCpuListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbDnsResponseRateLimitingOperOperDnsrrlCpuListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: DataThunderSlbDnsResponseRateLimitingOperOperDnsrrlCpuListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
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

export class DataThunderSlbDnsResponseRateLimitingOperOperDnsrrlCpuListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbDnsResponseRateLimitingOperOperDnsrrlCpuListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbDnsResponseRateLimitingOperOperDnsrrlCpuListStructOutputReference {
    return new DataThunderSlbDnsResponseRateLimitingOperOperDnsrrlCpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbDnsResponseRateLimitingOperOperEntryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#entry_action DataThunderSlbDnsResponseRateLimitingOper#entry_action}
  */
  readonly entryAction?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#entry_address DataThunderSlbDnsResponseRateLimitingOper#entry_address}
  */
  readonly entryAddress?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#entry_age DataThunderSlbDnsResponseRateLimitingOper#entry_age}
  */
  readonly entryAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#entry_fqdn DataThunderSlbDnsResponseRateLimitingOper#entry_fqdn}
  */
  readonly entryFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#entry_hit_count DataThunderSlbDnsResponseRateLimitingOper#entry_hit_count}
  */
  readonly entryHitCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#entry_over_limit DataThunderSlbDnsResponseRateLimitingOper#entry_over_limit}
  */
  readonly entryOverLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#entry_response_credit DataThunderSlbDnsResponseRateLimitingOper#entry_response_credit}
  */
  readonly entryResponseCredit?: number;
}

export function dataThunderSlbDnsResponseRateLimitingOperOperEntryListStructToTerraform(struct?: DataThunderSlbDnsResponseRateLimitingOperOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    entry_action: cdktf.stringToTerraform(struct!.entryAction),
    entry_address: cdktf.stringToTerraform(struct!.entryAddress),
    entry_age: cdktf.numberToTerraform(struct!.entryAge),
    entry_fqdn: cdktf.stringToTerraform(struct!.entryFqdn),
    entry_hit_count: cdktf.numberToTerraform(struct!.entryHitCount),
    entry_over_limit: cdktf.numberToTerraform(struct!.entryOverLimit),
    entry_response_credit: cdktf.numberToTerraform(struct!.entryResponseCredit),
  }
}


export function dataThunderSlbDnsResponseRateLimitingOperOperEntryListStructToHclTerraform(struct?: DataThunderSlbDnsResponseRateLimitingOperOperEntryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    entry_action: {
      value: cdktf.stringToHclTerraform(struct!.entryAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_address: {
      value: cdktf.stringToHclTerraform(struct!.entryAddress),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_age: {
      value: cdktf.numberToHclTerraform(struct!.entryAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.entryFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entry_hit_count: {
      value: cdktf.numberToHclTerraform(struct!.entryHitCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_over_limit: {
      value: cdktf.numberToHclTerraform(struct!.entryOverLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    entry_response_credit: {
      value: cdktf.numberToHclTerraform(struct!.entryResponseCredit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbDnsResponseRateLimitingOperOperEntryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSlbDnsResponseRateLimitingOperOperEntryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._entryAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryAction = this._entryAction;
    }
    if (this._entryAddress !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryAddress = this._entryAddress;
    }
    if (this._entryAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryAge = this._entryAge;
    }
    if (this._entryFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryFqdn = this._entryFqdn;
    }
    if (this._entryHitCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryHitCount = this._entryHitCount;
    }
    if (this._entryOverLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryOverLimit = this._entryOverLimit;
    }
    if (this._entryResponseCredit !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryResponseCredit = this._entryResponseCredit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbDnsResponseRateLimitingOperOperEntryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._entryAction = undefined;
      this._entryAddress = undefined;
      this._entryAge = undefined;
      this._entryFqdn = undefined;
      this._entryHitCount = undefined;
      this._entryOverLimit = undefined;
      this._entryResponseCredit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._entryAction = value.entryAction;
      this._entryAddress = value.entryAddress;
      this._entryAge = value.entryAge;
      this._entryFqdn = value.entryFqdn;
      this._entryHitCount = value.entryHitCount;
      this._entryOverLimit = value.entryOverLimit;
      this._entryResponseCredit = value.entryResponseCredit;
    }
  }

  // entry_action - computed: false, optional: true, required: false
  private _entryAction?: string; 
  public get entryAction() {
    return this.getStringAttribute('entry_action');
  }
  public set entryAction(value: string) {
    this._entryAction = value;
  }
  public resetEntryAction() {
    this._entryAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryActionInput() {
    return this._entryAction;
  }

  // entry_address - computed: false, optional: true, required: false
  private _entryAddress?: string; 
  public get entryAddress() {
    return this.getStringAttribute('entry_address');
  }
  public set entryAddress(value: string) {
    this._entryAddress = value;
  }
  public resetEntryAddress() {
    this._entryAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryAddressInput() {
    return this._entryAddress;
  }

  // entry_age - computed: false, optional: true, required: false
  private _entryAge?: number; 
  public get entryAge() {
    return this.getNumberAttribute('entry_age');
  }
  public set entryAge(value: number) {
    this._entryAge = value;
  }
  public resetEntryAge() {
    this._entryAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryAgeInput() {
    return this._entryAge;
  }

  // entry_fqdn - computed: false, optional: true, required: false
  private _entryFqdn?: string; 
  public get entryFqdn() {
    return this.getStringAttribute('entry_fqdn');
  }
  public set entryFqdn(value: string) {
    this._entryFqdn = value;
  }
  public resetEntryFqdn() {
    this._entryFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryFqdnInput() {
    return this._entryFqdn;
  }

  // entry_hit_count - computed: false, optional: true, required: false
  private _entryHitCount?: number; 
  public get entryHitCount() {
    return this.getNumberAttribute('entry_hit_count');
  }
  public set entryHitCount(value: number) {
    this._entryHitCount = value;
  }
  public resetEntryHitCount() {
    this._entryHitCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryHitCountInput() {
    return this._entryHitCount;
  }

  // entry_over_limit - computed: false, optional: true, required: false
  private _entryOverLimit?: number; 
  public get entryOverLimit() {
    return this.getNumberAttribute('entry_over_limit');
  }
  public set entryOverLimit(value: number) {
    this._entryOverLimit = value;
  }
  public resetEntryOverLimit() {
    this._entryOverLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryOverLimitInput() {
    return this._entryOverLimit;
  }

  // entry_response_credit - computed: false, optional: true, required: false
  private _entryResponseCredit?: number; 
  public get entryResponseCredit() {
    return this.getNumberAttribute('entry_response_credit');
  }
  public set entryResponseCredit(value: number) {
    this._entryResponseCredit = value;
  }
  public resetEntryResponseCredit() {
    this._entryResponseCredit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryResponseCreditInput() {
    return this._entryResponseCredit;
  }
}

export class DataThunderSlbDnsResponseRateLimitingOperOperEntryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderSlbDnsResponseRateLimitingOperOperEntryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSlbDnsResponseRateLimitingOperOperEntryListStructOutputReference {
    return new DataThunderSlbDnsResponseRateLimitingOperOperEntryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSlbDnsResponseRateLimitingOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#cpu_count DataThunderSlbDnsResponseRateLimitingOper#cpu_count}
  */
  readonly cpuCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#filter_address_v4 DataThunderSlbDnsResponseRateLimitingOper#filter_address_v4}
  */
  readonly filterAddressV4?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#filter_address_v6 DataThunderSlbDnsResponseRateLimitingOper#filter_address_v6}
  */
  readonly filterAddressV6?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#filter_debug DataThunderSlbDnsResponseRateLimitingOper#filter_debug}
  */
  readonly filterDebug?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#filter_fqdn DataThunderSlbDnsResponseRateLimitingOper#filter_fqdn}
  */
  readonly filterFqdn?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#filter_type DataThunderSlbDnsResponseRateLimitingOper#filter_type}
  */
  readonly filterType?: string;
  /**
  * dnsrrl_cpu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#dnsrrl_cpu_list DataThunderSlbDnsResponseRateLimitingOper#dnsrrl_cpu_list}
  */
  readonly dnsrrlCpuList?: DataThunderSlbDnsResponseRateLimitingOperOperDnsrrlCpuListStruct[] | cdktf.IResolvable;
  /**
  * entry_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#entry_list DataThunderSlbDnsResponseRateLimitingOper#entry_list}
  */
  readonly entryList?: DataThunderSlbDnsResponseRateLimitingOperOperEntryListStruct[] | cdktf.IResolvable;
}

export function dataThunderSlbDnsResponseRateLimitingOperOperToTerraform(struct?: DataThunderSlbDnsResponseRateLimitingOperOperOutputReference | DataThunderSlbDnsResponseRateLimitingOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_count: cdktf.numberToTerraform(struct!.cpuCount),
    filter_address_v4: cdktf.stringToTerraform(struct!.filterAddressV4),
    filter_address_v6: cdktf.stringToTerraform(struct!.filterAddressV6),
    filter_debug: cdktf.numberToTerraform(struct!.filterDebug),
    filter_fqdn: cdktf.stringToTerraform(struct!.filterFqdn),
    filter_type: cdktf.stringToTerraform(struct!.filterType),
    dnsrrl_cpu_list: cdktf.listMapper(dataThunderSlbDnsResponseRateLimitingOperOperDnsrrlCpuListStructToTerraform, true)(struct!.dnsrrlCpuList),
    entry_list: cdktf.listMapper(dataThunderSlbDnsResponseRateLimitingOperOperEntryListStructToTerraform, true)(struct!.entryList),
  }
}


export function dataThunderSlbDnsResponseRateLimitingOperOperToHclTerraform(struct?: DataThunderSlbDnsResponseRateLimitingOperOperOutputReference | DataThunderSlbDnsResponseRateLimitingOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_count: {
      value: cdktf.numberToHclTerraform(struct!.cpuCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_address_v4: {
      value: cdktf.stringToHclTerraform(struct!.filterAddressV4),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_address_v6: {
      value: cdktf.stringToHclTerraform(struct!.filterAddressV6),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_debug: {
      value: cdktf.numberToHclTerraform(struct!.filterDebug),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    filter_fqdn: {
      value: cdktf.stringToHclTerraform(struct!.filterFqdn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    filter_type: {
      value: cdktf.stringToHclTerraform(struct!.filterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dnsrrl_cpu_list: {
      value: cdktf.listMapperHcl(dataThunderSlbDnsResponseRateLimitingOperOperDnsrrlCpuListStructToHclTerraform, true)(struct!.dnsrrlCpuList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbDnsResponseRateLimitingOperOperDnsrrlCpuListStructList",
    },
    entry_list: {
      value: cdktf.listMapperHcl(dataThunderSlbDnsResponseRateLimitingOperOperEntryListStructToHclTerraform, true)(struct!.entryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSlbDnsResponseRateLimitingOperOperEntryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSlbDnsResponseRateLimitingOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSlbDnsResponseRateLimitingOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuCount = this._cpuCount;
    }
    if (this._filterAddressV4 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterAddressV4 = this._filterAddressV4;
    }
    if (this._filterAddressV6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterAddressV6 = this._filterAddressV6;
    }
    if (this._filterDebug !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterDebug = this._filterDebug;
    }
    if (this._filterFqdn !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterFqdn = this._filterFqdn;
    }
    if (this._filterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.filterType = this._filterType;
    }
    if (this._dnsrrlCpuList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dnsrrlCpuList = this._dnsrrlCpuList?.internalValue;
    }
    if (this._entryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entryList = this._entryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSlbDnsResponseRateLimitingOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuCount = undefined;
      this._filterAddressV4 = undefined;
      this._filterAddressV6 = undefined;
      this._filterDebug = undefined;
      this._filterFqdn = undefined;
      this._filterType = undefined;
      this._dnsrrlCpuList.internalValue = undefined;
      this._entryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuCount = value.cpuCount;
      this._filterAddressV4 = value.filterAddressV4;
      this._filterAddressV6 = value.filterAddressV6;
      this._filterDebug = value.filterDebug;
      this._filterFqdn = value.filterFqdn;
      this._filterType = value.filterType;
      this._dnsrrlCpuList.internalValue = value.dnsrrlCpuList;
      this._entryList.internalValue = value.entryList;
    }
  }

  // cpu_count - computed: false, optional: true, required: false
  private _cpuCount?: number; 
  public get cpuCount() {
    return this.getNumberAttribute('cpu_count');
  }
  public set cpuCount(value: number) {
    this._cpuCount = value;
  }
  public resetCpuCount() {
    this._cpuCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuCountInput() {
    return this._cpuCount;
  }

  // filter_address_v4 - computed: false, optional: true, required: false
  private _filterAddressV4?: string; 
  public get filterAddressV4() {
    return this.getStringAttribute('filter_address_v4');
  }
  public set filterAddressV4(value: string) {
    this._filterAddressV4 = value;
  }
  public resetFilterAddressV4() {
    this._filterAddressV4 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterAddressV4Input() {
    return this._filterAddressV4;
  }

  // filter_address_v6 - computed: false, optional: true, required: false
  private _filterAddressV6?: string; 
  public get filterAddressV6() {
    return this.getStringAttribute('filter_address_v6');
  }
  public set filterAddressV6(value: string) {
    this._filterAddressV6 = value;
  }
  public resetFilterAddressV6() {
    this._filterAddressV6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterAddressV6Input() {
    return this._filterAddressV6;
  }

  // filter_debug - computed: false, optional: true, required: false
  private _filterDebug?: number; 
  public get filterDebug() {
    return this.getNumberAttribute('filter_debug');
  }
  public set filterDebug(value: number) {
    this._filterDebug = value;
  }
  public resetFilterDebug() {
    this._filterDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterDebugInput() {
    return this._filterDebug;
  }

  // filter_fqdn - computed: false, optional: true, required: false
  private _filterFqdn?: string; 
  public get filterFqdn() {
    return this.getStringAttribute('filter_fqdn');
  }
  public set filterFqdn(value: string) {
    this._filterFqdn = value;
  }
  public resetFilterFqdn() {
    this._filterFqdn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterFqdnInput() {
    return this._filterFqdn;
  }

  // filter_type - computed: false, optional: true, required: false
  private _filterType?: string; 
  public get filterType() {
    return this.getStringAttribute('filter_type');
  }
  public set filterType(value: string) {
    this._filterType = value;
  }
  public resetFilterType() {
    this._filterType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterTypeInput() {
    return this._filterType;
  }

  // dnsrrl_cpu_list - computed: false, optional: true, required: false
  private _dnsrrlCpuList = new DataThunderSlbDnsResponseRateLimitingOperOperDnsrrlCpuListStructList(this, "dnsrrl_cpu_list", false);
  public get dnsrrlCpuList() {
    return this._dnsrrlCpuList;
  }
  public putDnsrrlCpuList(value: DataThunderSlbDnsResponseRateLimitingOperOperDnsrrlCpuListStruct[] | cdktf.IResolvable) {
    this._dnsrrlCpuList.internalValue = value;
  }
  public resetDnsrrlCpuList() {
    this._dnsrrlCpuList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dnsrrlCpuListInput() {
    return this._dnsrrlCpuList.internalValue;
  }

  // entry_list - computed: false, optional: true, required: false
  private _entryList = new DataThunderSlbDnsResponseRateLimitingOperOperEntryListStructList(this, "entry_list", false);
  public get entryList() {
    return this._entryList;
  }
  public putEntryList(value: DataThunderSlbDnsResponseRateLimitingOperOperEntryListStruct[] | cdktf.IResolvable) {
    this._entryList.internalValue = value;
  }
  public resetEntryList() {
    this._entryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entryListInput() {
    return this._entryList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper thunder_slb_dns_response_rate_limiting_oper}
*/
export class DataThunderSlbDnsResponseRateLimitingOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_slb_dns_response_rate_limiting_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSlbDnsResponseRateLimitingOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSlbDnsResponseRateLimitingOper to import
  * @param importFromId The id of the existing DataThunderSlbDnsResponseRateLimitingOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSlbDnsResponseRateLimitingOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_slb_dns_response_rate_limiting_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/slb_dns_response_rate_limiting_oper thunder_slb_dns_response_rate_limiting_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSlbDnsResponseRateLimitingOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSlbDnsResponseRateLimitingOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_slb_dns_response_rate_limiting_oper',
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
    this._oper.internalValue = config.oper;
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

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderSlbDnsResponseRateLimitingOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSlbDnsResponseRateLimitingOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      oper: dataThunderSlbDnsResponseRateLimitingOperOperToTerraform(this._oper.internalValue),
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
      oper: {
        value: dataThunderSlbDnsResponseRateLimitingOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSlbDnsResponseRateLimitingOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
