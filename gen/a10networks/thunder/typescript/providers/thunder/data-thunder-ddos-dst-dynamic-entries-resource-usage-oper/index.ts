// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entries_resource_usage_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosDstDynamicEntriesResourceUsageOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entries_resource_usage_oper#id DataThunderDdosDstDynamicEntriesResourceUsageOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entries_resource_usage_oper#oper DataThunderDdosDstDynamicEntriesResourceUsageOper#oper}
  */
  readonly oper?: DataThunderDdosDstDynamicEntriesResourceUsageOperOper;
}
export interface DataThunderDdosDstDynamicEntriesResourceUsageOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entries_resource_usage_oper#conn_total_ip DataThunderDdosDstDynamicEntriesResourceUsageOper#conn_total_ip}
  */
  readonly connTotalIp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entries_resource_usage_oper#conn_total_ipv6 DataThunderDdosDstDynamicEntriesResourceUsageOper#conn_total_ipv6}
  */
  readonly connTotalIpv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entries_resource_usage_oper#dst_entry_ip_allocated DataThunderDdosDstDynamicEntriesResourceUsageOper#dst_entry_ip_allocated}
  */
  readonly dstEntryIpAllocated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entries_resource_usage_oper#dst_entry_ip_limit DataThunderDdosDstDynamicEntriesResourceUsageOper#dst_entry_ip_limit}
  */
  readonly dstEntryIpLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entries_resource_usage_oper#dst_entry_ip_remaining DataThunderDdosDstDynamicEntriesResourceUsageOper#dst_entry_ip_remaining}
  */
  readonly dstEntryIpRemaining?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entries_resource_usage_oper#dst_entry_ipv6_allocated DataThunderDdosDstDynamicEntriesResourceUsageOper#dst_entry_ipv6_allocated}
  */
  readonly dstEntryIpv6Allocated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entries_resource_usage_oper#dst_entry_ipv6_limit DataThunderDdosDstDynamicEntriesResourceUsageOper#dst_entry_ipv6_limit}
  */
  readonly dstEntryIpv6Limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entries_resource_usage_oper#dst_entry_ipv6_remaining DataThunderDdosDstDynamicEntriesResourceUsageOper#dst_entry_ipv6_remaining}
  */
  readonly dstEntryIpv6Remaining?: string;
}

export function dataThunderDdosDstDynamicEntriesResourceUsageOperOperToTerraform(struct?: DataThunderDdosDstDynamicEntriesResourceUsageOperOperOutputReference | DataThunderDdosDstDynamicEntriesResourceUsageOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_total_ip: cdktf.numberToTerraform(struct!.connTotalIp),
    conn_total_ipv6: cdktf.numberToTerraform(struct!.connTotalIpv6),
    dst_entry_ip_allocated: cdktf.numberToTerraform(struct!.dstEntryIpAllocated),
    dst_entry_ip_limit: cdktf.numberToTerraform(struct!.dstEntryIpLimit),
    dst_entry_ip_remaining: cdktf.stringToTerraform(struct!.dstEntryIpRemaining),
    dst_entry_ipv6_allocated: cdktf.numberToTerraform(struct!.dstEntryIpv6Allocated),
    dst_entry_ipv6_limit: cdktf.numberToTerraform(struct!.dstEntryIpv6Limit),
    dst_entry_ipv6_remaining: cdktf.stringToTerraform(struct!.dstEntryIpv6Remaining),
  }
}


export function dataThunderDdosDstDynamicEntriesResourceUsageOperOperToHclTerraform(struct?: DataThunderDdosDstDynamicEntriesResourceUsageOperOperOutputReference | DataThunderDdosDstDynamicEntriesResourceUsageOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    conn_total_ip: {
      value: cdktf.numberToHclTerraform(struct!.connTotalIp),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    conn_total_ipv6: {
      value: cdktf.numberToHclTerraform(struct!.connTotalIpv6),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_entry_ip_allocated: {
      value: cdktf.numberToHclTerraform(struct!.dstEntryIpAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_entry_ip_limit: {
      value: cdktf.numberToHclTerraform(struct!.dstEntryIpLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_entry_ip_remaining: {
      value: cdktf.stringToHclTerraform(struct!.dstEntryIpRemaining),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    dst_entry_ipv6_allocated: {
      value: cdktf.numberToHclTerraform(struct!.dstEntryIpv6Allocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_entry_ipv6_limit: {
      value: cdktf.numberToHclTerraform(struct!.dstEntryIpv6Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    dst_entry_ipv6_remaining: {
      value: cdktf.stringToHclTerraform(struct!.dstEntryIpv6Remaining),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosDstDynamicEntriesResourceUsageOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosDstDynamicEntriesResourceUsageOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connTotalIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.connTotalIp = this._connTotalIp;
    }
    if (this._connTotalIpv6 !== undefined) {
      hasAnyValues = true;
      internalValueResult.connTotalIpv6 = this._connTotalIpv6;
    }
    if (this._dstEntryIpAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryIpAllocated = this._dstEntryIpAllocated;
    }
    if (this._dstEntryIpLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryIpLimit = this._dstEntryIpLimit;
    }
    if (this._dstEntryIpRemaining !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryIpRemaining = this._dstEntryIpRemaining;
    }
    if (this._dstEntryIpv6Allocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryIpv6Allocated = this._dstEntryIpv6Allocated;
    }
    if (this._dstEntryIpv6Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryIpv6Limit = this._dstEntryIpv6Limit;
    }
    if (this._dstEntryIpv6Remaining !== undefined) {
      hasAnyValues = true;
      internalValueResult.dstEntryIpv6Remaining = this._dstEntryIpv6Remaining;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosDstDynamicEntriesResourceUsageOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connTotalIp = undefined;
      this._connTotalIpv6 = undefined;
      this._dstEntryIpAllocated = undefined;
      this._dstEntryIpLimit = undefined;
      this._dstEntryIpRemaining = undefined;
      this._dstEntryIpv6Allocated = undefined;
      this._dstEntryIpv6Limit = undefined;
      this._dstEntryIpv6Remaining = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connTotalIp = value.connTotalIp;
      this._connTotalIpv6 = value.connTotalIpv6;
      this._dstEntryIpAllocated = value.dstEntryIpAllocated;
      this._dstEntryIpLimit = value.dstEntryIpLimit;
      this._dstEntryIpRemaining = value.dstEntryIpRemaining;
      this._dstEntryIpv6Allocated = value.dstEntryIpv6Allocated;
      this._dstEntryIpv6Limit = value.dstEntryIpv6Limit;
      this._dstEntryIpv6Remaining = value.dstEntryIpv6Remaining;
    }
  }

  // conn_total_ip - computed: false, optional: true, required: false
  private _connTotalIp?: number; 
  public get connTotalIp() {
    return this.getNumberAttribute('conn_total_ip');
  }
  public set connTotalIp(value: number) {
    this._connTotalIp = value;
  }
  public resetConnTotalIp() {
    this._connTotalIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connTotalIpInput() {
    return this._connTotalIp;
  }

  // conn_total_ipv6 - computed: false, optional: true, required: false
  private _connTotalIpv6?: number; 
  public get connTotalIpv6() {
    return this.getNumberAttribute('conn_total_ipv6');
  }
  public set connTotalIpv6(value: number) {
    this._connTotalIpv6 = value;
  }
  public resetConnTotalIpv6() {
    this._connTotalIpv6 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connTotalIpv6Input() {
    return this._connTotalIpv6;
  }

  // dst_entry_ip_allocated - computed: false, optional: true, required: false
  private _dstEntryIpAllocated?: number; 
  public get dstEntryIpAllocated() {
    return this.getNumberAttribute('dst_entry_ip_allocated');
  }
  public set dstEntryIpAllocated(value: number) {
    this._dstEntryIpAllocated = value;
  }
  public resetDstEntryIpAllocated() {
    this._dstEntryIpAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryIpAllocatedInput() {
    return this._dstEntryIpAllocated;
  }

  // dst_entry_ip_limit - computed: false, optional: true, required: false
  private _dstEntryIpLimit?: number; 
  public get dstEntryIpLimit() {
    return this.getNumberAttribute('dst_entry_ip_limit');
  }
  public set dstEntryIpLimit(value: number) {
    this._dstEntryIpLimit = value;
  }
  public resetDstEntryIpLimit() {
    this._dstEntryIpLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryIpLimitInput() {
    return this._dstEntryIpLimit;
  }

  // dst_entry_ip_remaining - computed: false, optional: true, required: false
  private _dstEntryIpRemaining?: string; 
  public get dstEntryIpRemaining() {
    return this.getStringAttribute('dst_entry_ip_remaining');
  }
  public set dstEntryIpRemaining(value: string) {
    this._dstEntryIpRemaining = value;
  }
  public resetDstEntryIpRemaining() {
    this._dstEntryIpRemaining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryIpRemainingInput() {
    return this._dstEntryIpRemaining;
  }

  // dst_entry_ipv6_allocated - computed: false, optional: true, required: false
  private _dstEntryIpv6Allocated?: number; 
  public get dstEntryIpv6Allocated() {
    return this.getNumberAttribute('dst_entry_ipv6_allocated');
  }
  public set dstEntryIpv6Allocated(value: number) {
    this._dstEntryIpv6Allocated = value;
  }
  public resetDstEntryIpv6Allocated() {
    this._dstEntryIpv6Allocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryIpv6AllocatedInput() {
    return this._dstEntryIpv6Allocated;
  }

  // dst_entry_ipv6_limit - computed: false, optional: true, required: false
  private _dstEntryIpv6Limit?: number; 
  public get dstEntryIpv6Limit() {
    return this.getNumberAttribute('dst_entry_ipv6_limit');
  }
  public set dstEntryIpv6Limit(value: number) {
    this._dstEntryIpv6Limit = value;
  }
  public resetDstEntryIpv6Limit() {
    this._dstEntryIpv6Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryIpv6LimitInput() {
    return this._dstEntryIpv6Limit;
  }

  // dst_entry_ipv6_remaining - computed: false, optional: true, required: false
  private _dstEntryIpv6Remaining?: string; 
  public get dstEntryIpv6Remaining() {
    return this.getStringAttribute('dst_entry_ipv6_remaining');
  }
  public set dstEntryIpv6Remaining(value: string) {
    this._dstEntryIpv6Remaining = value;
  }
  public resetDstEntryIpv6Remaining() {
    this._dstEntryIpv6Remaining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dstEntryIpv6RemainingInput() {
    return this._dstEntryIpv6Remaining;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entries_resource_usage_oper thunder_ddos_dst_dynamic_entries_resource_usage_oper}
*/
export class DataThunderDdosDstDynamicEntriesResourceUsageOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_dst_dynamic_entries_resource_usage_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosDstDynamicEntriesResourceUsageOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosDstDynamicEntriesResourceUsageOper to import
  * @param importFromId The id of the existing DataThunderDdosDstDynamicEntriesResourceUsageOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entries_resource_usage_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosDstDynamicEntriesResourceUsageOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_dst_dynamic_entries_resource_usage_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_dst_dynamic_entries_resource_usage_oper thunder_ddos_dst_dynamic_entries_resource_usage_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosDstDynamicEntriesResourceUsageOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosDstDynamicEntriesResourceUsageOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_dst_dynamic_entries_resource_usage_oper',
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
  private _oper = new DataThunderDdosDstDynamicEntriesResourceUsageOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosDstDynamicEntriesResourceUsageOperOper) {
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
      oper: dataThunderDdosDstDynamicEntriesResourceUsageOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderDdosDstDynamicEntriesResourceUsageOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosDstDynamicEntriesResourceUsageOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
