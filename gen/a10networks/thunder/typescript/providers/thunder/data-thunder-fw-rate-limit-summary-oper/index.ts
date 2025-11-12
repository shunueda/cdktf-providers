// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_summary_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFwRateLimitSummaryOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_summary_oper#id DataThunderFwRateLimitSummaryOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_summary_oper#oper DataThunderFwRateLimitSummaryOper#oper}
  */
  readonly oper?: DataThunderFwRateLimitSummaryOperOper;
}
export interface DataThunderFwRateLimitSummaryOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_summary_oper#alloc_failures DataThunderFwRateLimitSummaryOper#alloc_failures}
  */
  readonly allocFailures?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_summary_oper#mem_reserved DataThunderFwRateLimitSummaryOper#mem_reserved}
  */
  readonly memReserved?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_summary_oper#mem_used DataThunderFwRateLimitSummaryOper#mem_used}
  */
  readonly memUsed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_summary_oper#total_entries_scope_aggregate DataThunderFwRateLimitSummaryOper#total_entries_scope_aggregate}
  */
  readonly totalEntriesScopeAggregate?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_summary_oper#total_entries_scope_parent DataThunderFwRateLimitSummaryOper#total_entries_scope_parent}
  */
  readonly totalEntriesScopeParent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_summary_oper#total_entries_scope_parent_subscriber_ip DataThunderFwRateLimitSummaryOper#total_entries_scope_parent_subscriber_ip}
  */
  readonly totalEntriesScopeParentSubscriberIp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_summary_oper#total_entries_scope_parent_subscriber_prefix DataThunderFwRateLimitSummaryOper#total_entries_scope_parent_subscriber_prefix}
  */
  readonly totalEntriesScopeParentSubscriberPrefix?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_summary_oper#total_entries_scope_subscriber_ip DataThunderFwRateLimitSummaryOper#total_entries_scope_subscriber_ip}
  */
  readonly totalEntriesScopeSubscriberIp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_summary_oper#total_entries_scope_subscriber_prefix DataThunderFwRateLimitSummaryOper#total_entries_scope_subscriber_prefix}
  */
  readonly totalEntriesScopeSubscriberPrefix?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_summary_oper#total_num_entries DataThunderFwRateLimitSummaryOper#total_num_entries}
  */
  readonly totalNumEntries?: number;
}

export function dataThunderFwRateLimitSummaryOperOperToTerraform(struct?: DataThunderFwRateLimitSummaryOperOperOutputReference | DataThunderFwRateLimitSummaryOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alloc_failures: cdktf.numberToTerraform(struct!.allocFailures),
    mem_reserved: cdktf.numberToTerraform(struct!.memReserved),
    mem_used: cdktf.numberToTerraform(struct!.memUsed),
    total_entries_scope_aggregate: cdktf.numberToTerraform(struct!.totalEntriesScopeAggregate),
    total_entries_scope_parent: cdktf.numberToTerraform(struct!.totalEntriesScopeParent),
    total_entries_scope_parent_subscriber_ip: cdktf.numberToTerraform(struct!.totalEntriesScopeParentSubscriberIp),
    total_entries_scope_parent_subscriber_prefix: cdktf.numberToTerraform(struct!.totalEntriesScopeParentSubscriberPrefix),
    total_entries_scope_subscriber_ip: cdktf.numberToTerraform(struct!.totalEntriesScopeSubscriberIp),
    total_entries_scope_subscriber_prefix: cdktf.numberToTerraform(struct!.totalEntriesScopeSubscriberPrefix),
    total_num_entries: cdktf.numberToTerraform(struct!.totalNumEntries),
  }
}


export function dataThunderFwRateLimitSummaryOperOperToHclTerraform(struct?: DataThunderFwRateLimitSummaryOperOperOutputReference | DataThunderFwRateLimitSummaryOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alloc_failures: {
      value: cdktf.numberToHclTerraform(struct!.allocFailures),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mem_reserved: {
      value: cdktf.numberToHclTerraform(struct!.memReserved),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    mem_used: {
      value: cdktf.numberToHclTerraform(struct!.memUsed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_entries_scope_aggregate: {
      value: cdktf.numberToHclTerraform(struct!.totalEntriesScopeAggregate),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_entries_scope_parent: {
      value: cdktf.numberToHclTerraform(struct!.totalEntriesScopeParent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_entries_scope_parent_subscriber_ip: {
      value: cdktf.numberToHclTerraform(struct!.totalEntriesScopeParentSubscriberIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_entries_scope_parent_subscriber_prefix: {
      value: cdktf.numberToHclTerraform(struct!.totalEntriesScopeParentSubscriberPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_entries_scope_subscriber_ip: {
      value: cdktf.numberToHclTerraform(struct!.totalEntriesScopeSubscriberIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_entries_scope_subscriber_prefix: {
      value: cdktf.numberToHclTerraform(struct!.totalEntriesScopeSubscriberPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_num_entries: {
      value: cdktf.numberToHclTerraform(struct!.totalNumEntries),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwRateLimitSummaryOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwRateLimitSummaryOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allocFailures !== undefined) {
      hasAnyValues = true;
      internalValueResult.allocFailures = this._allocFailures;
    }
    if (this._memReserved !== undefined) {
      hasAnyValues = true;
      internalValueResult.memReserved = this._memReserved;
    }
    if (this._memUsed !== undefined) {
      hasAnyValues = true;
      internalValueResult.memUsed = this._memUsed;
    }
    if (this._totalEntriesScopeAggregate !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEntriesScopeAggregate = this._totalEntriesScopeAggregate;
    }
    if (this._totalEntriesScopeParent !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEntriesScopeParent = this._totalEntriesScopeParent;
    }
    if (this._totalEntriesScopeParentSubscriberIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEntriesScopeParentSubscriberIp = this._totalEntriesScopeParentSubscriberIp;
    }
    if (this._totalEntriesScopeParentSubscriberPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEntriesScopeParentSubscriberPrefix = this._totalEntriesScopeParentSubscriberPrefix;
    }
    if (this._totalEntriesScopeSubscriberIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEntriesScopeSubscriberIp = this._totalEntriesScopeSubscriberIp;
    }
    if (this._totalEntriesScopeSubscriberPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalEntriesScopeSubscriberPrefix = this._totalEntriesScopeSubscriberPrefix;
    }
    if (this._totalNumEntries !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalNumEntries = this._totalNumEntries;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwRateLimitSummaryOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allocFailures = undefined;
      this._memReserved = undefined;
      this._memUsed = undefined;
      this._totalEntriesScopeAggregate = undefined;
      this._totalEntriesScopeParent = undefined;
      this._totalEntriesScopeParentSubscriberIp = undefined;
      this._totalEntriesScopeParentSubscriberPrefix = undefined;
      this._totalEntriesScopeSubscriberIp = undefined;
      this._totalEntriesScopeSubscriberPrefix = undefined;
      this._totalNumEntries = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allocFailures = value.allocFailures;
      this._memReserved = value.memReserved;
      this._memUsed = value.memUsed;
      this._totalEntriesScopeAggregate = value.totalEntriesScopeAggregate;
      this._totalEntriesScopeParent = value.totalEntriesScopeParent;
      this._totalEntriesScopeParentSubscriberIp = value.totalEntriesScopeParentSubscriberIp;
      this._totalEntriesScopeParentSubscriberPrefix = value.totalEntriesScopeParentSubscriberPrefix;
      this._totalEntriesScopeSubscriberIp = value.totalEntriesScopeSubscriberIp;
      this._totalEntriesScopeSubscriberPrefix = value.totalEntriesScopeSubscriberPrefix;
      this._totalNumEntries = value.totalNumEntries;
    }
  }

  // alloc_failures - computed: false, optional: true, required: false
  private _allocFailures?: number; 
  public get allocFailures() {
    return this.getNumberAttribute('alloc_failures');
  }
  public set allocFailures(value: number) {
    this._allocFailures = value;
  }
  public resetAllocFailures() {
    this._allocFailures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allocFailuresInput() {
    return this._allocFailures;
  }

  // mem_reserved - computed: false, optional: true, required: false
  private _memReserved?: number; 
  public get memReserved() {
    return this.getNumberAttribute('mem_reserved');
  }
  public set memReserved(value: number) {
    this._memReserved = value;
  }
  public resetMemReserved() {
    this._memReserved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memReservedInput() {
    return this._memReserved;
  }

  // mem_used - computed: false, optional: true, required: false
  private _memUsed?: number; 
  public get memUsed() {
    return this.getNumberAttribute('mem_used');
  }
  public set memUsed(value: number) {
    this._memUsed = value;
  }
  public resetMemUsed() {
    this._memUsed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memUsedInput() {
    return this._memUsed;
  }

  // total_entries_scope_aggregate - computed: false, optional: true, required: false
  private _totalEntriesScopeAggregate?: number; 
  public get totalEntriesScopeAggregate() {
    return this.getNumberAttribute('total_entries_scope_aggregate');
  }
  public set totalEntriesScopeAggregate(value: number) {
    this._totalEntriesScopeAggregate = value;
  }
  public resetTotalEntriesScopeAggregate() {
    this._totalEntriesScopeAggregate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEntriesScopeAggregateInput() {
    return this._totalEntriesScopeAggregate;
  }

  // total_entries_scope_parent - computed: false, optional: true, required: false
  private _totalEntriesScopeParent?: number; 
  public get totalEntriesScopeParent() {
    return this.getNumberAttribute('total_entries_scope_parent');
  }
  public set totalEntriesScopeParent(value: number) {
    this._totalEntriesScopeParent = value;
  }
  public resetTotalEntriesScopeParent() {
    this._totalEntriesScopeParent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEntriesScopeParentInput() {
    return this._totalEntriesScopeParent;
  }

  // total_entries_scope_parent_subscriber_ip - computed: false, optional: true, required: false
  private _totalEntriesScopeParentSubscriberIp?: number; 
  public get totalEntriesScopeParentSubscriberIp() {
    return this.getNumberAttribute('total_entries_scope_parent_subscriber_ip');
  }
  public set totalEntriesScopeParentSubscriberIp(value: number) {
    this._totalEntriesScopeParentSubscriberIp = value;
  }
  public resetTotalEntriesScopeParentSubscriberIp() {
    this._totalEntriesScopeParentSubscriberIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEntriesScopeParentSubscriberIpInput() {
    return this._totalEntriesScopeParentSubscriberIp;
  }

  // total_entries_scope_parent_subscriber_prefix - computed: false, optional: true, required: false
  private _totalEntriesScopeParentSubscriberPrefix?: number; 
  public get totalEntriesScopeParentSubscriberPrefix() {
    return this.getNumberAttribute('total_entries_scope_parent_subscriber_prefix');
  }
  public set totalEntriesScopeParentSubscriberPrefix(value: number) {
    this._totalEntriesScopeParentSubscriberPrefix = value;
  }
  public resetTotalEntriesScopeParentSubscriberPrefix() {
    this._totalEntriesScopeParentSubscriberPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEntriesScopeParentSubscriberPrefixInput() {
    return this._totalEntriesScopeParentSubscriberPrefix;
  }

  // total_entries_scope_subscriber_ip - computed: false, optional: true, required: false
  private _totalEntriesScopeSubscriberIp?: number; 
  public get totalEntriesScopeSubscriberIp() {
    return this.getNumberAttribute('total_entries_scope_subscriber_ip');
  }
  public set totalEntriesScopeSubscriberIp(value: number) {
    this._totalEntriesScopeSubscriberIp = value;
  }
  public resetTotalEntriesScopeSubscriberIp() {
    this._totalEntriesScopeSubscriberIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEntriesScopeSubscriberIpInput() {
    return this._totalEntriesScopeSubscriberIp;
  }

  // total_entries_scope_subscriber_prefix - computed: false, optional: true, required: false
  private _totalEntriesScopeSubscriberPrefix?: number; 
  public get totalEntriesScopeSubscriberPrefix() {
    return this.getNumberAttribute('total_entries_scope_subscriber_prefix');
  }
  public set totalEntriesScopeSubscriberPrefix(value: number) {
    this._totalEntriesScopeSubscriberPrefix = value;
  }
  public resetTotalEntriesScopeSubscriberPrefix() {
    this._totalEntriesScopeSubscriberPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalEntriesScopeSubscriberPrefixInput() {
    return this._totalEntriesScopeSubscriberPrefix;
  }

  // total_num_entries - computed: false, optional: true, required: false
  private _totalNumEntries?: number; 
  public get totalNumEntries() {
    return this.getNumberAttribute('total_num_entries');
  }
  public set totalNumEntries(value: number) {
    this._totalNumEntries = value;
  }
  public resetTotalNumEntries() {
    this._totalNumEntries = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalNumEntriesInput() {
    return this._totalNumEntries;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_summary_oper thunder_fw_rate_limit_summary_oper}
*/
export class DataThunderFwRateLimitSummaryOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_rate_limit_summary_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFwRateLimitSummaryOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFwRateLimitSummaryOper to import
  * @param importFromId The id of the existing DataThunderFwRateLimitSummaryOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_summary_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFwRateLimitSummaryOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_rate_limit_summary_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/fw_rate_limit_summary_oper thunder_fw_rate_limit_summary_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFwRateLimitSummaryOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderFwRateLimitSummaryOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_rate_limit_summary_oper',
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
  private _oper = new DataThunderFwRateLimitSummaryOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderFwRateLimitSummaryOperOper) {
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
      oper: dataThunderFwRateLimitSummaryOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderFwRateLimitSummaryOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwRateLimitSummaryOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
