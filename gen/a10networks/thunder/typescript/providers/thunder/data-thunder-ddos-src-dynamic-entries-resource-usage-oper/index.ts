// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_src_dynamic_entries_resource_usage_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderDdosSrcDynamicEntriesResourceUsageOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_src_dynamic_entries_resource_usage_oper#id DataThunderDdosSrcDynamicEntriesResourceUsageOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_src_dynamic_entries_resource_usage_oper#oper DataThunderDdosSrcDynamicEntriesResourceUsageOper#oper}
  */
  readonly oper?: DataThunderDdosSrcDynamicEntriesResourceUsageOperOper;
}
export interface DataThunderDdosSrcDynamicEntriesResourceUsageOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_src_dynamic_entries_resource_usage_oper#conn_total_ip DataThunderDdosSrcDynamicEntriesResourceUsageOper#conn_total_ip}
  */
  readonly connTotalIp?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_src_dynamic_entries_resource_usage_oper#conn_total_ipv6 DataThunderDdosSrcDynamicEntriesResourceUsageOper#conn_total_ipv6}
  */
  readonly connTotalIpv6?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_src_dynamic_entries_resource_usage_oper#src_entry_ip_allocated DataThunderDdosSrcDynamicEntriesResourceUsageOper#src_entry_ip_allocated}
  */
  readonly srcEntryIpAllocated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_src_dynamic_entries_resource_usage_oper#src_entry_ip_limit DataThunderDdosSrcDynamicEntriesResourceUsageOper#src_entry_ip_limit}
  */
  readonly srcEntryIpLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_src_dynamic_entries_resource_usage_oper#src_entry_ip_remaining DataThunderDdosSrcDynamicEntriesResourceUsageOper#src_entry_ip_remaining}
  */
  readonly srcEntryIpRemaining?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_src_dynamic_entries_resource_usage_oper#src_entry_ipv6_allocated DataThunderDdosSrcDynamicEntriesResourceUsageOper#src_entry_ipv6_allocated}
  */
  readonly srcEntryIpv6Allocated?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_src_dynamic_entries_resource_usage_oper#src_entry_ipv6_limit DataThunderDdosSrcDynamicEntriesResourceUsageOper#src_entry_ipv6_limit}
  */
  readonly srcEntryIpv6Limit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_src_dynamic_entries_resource_usage_oper#src_entry_ipv6_remaining DataThunderDdosSrcDynamicEntriesResourceUsageOper#src_entry_ipv6_remaining}
  */
  readonly srcEntryIpv6Remaining?: string;
}

export function dataThunderDdosSrcDynamicEntriesResourceUsageOperOperToTerraform(struct?: DataThunderDdosSrcDynamicEntriesResourceUsageOperOperOutputReference | DataThunderDdosSrcDynamicEntriesResourceUsageOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    conn_total_ip: cdktf.numberToTerraform(struct!.connTotalIp),
    conn_total_ipv6: cdktf.numberToTerraform(struct!.connTotalIpv6),
    src_entry_ip_allocated: cdktf.numberToTerraform(struct!.srcEntryIpAllocated),
    src_entry_ip_limit: cdktf.numberToTerraform(struct!.srcEntryIpLimit),
    src_entry_ip_remaining: cdktf.stringToTerraform(struct!.srcEntryIpRemaining),
    src_entry_ipv6_allocated: cdktf.numberToTerraform(struct!.srcEntryIpv6Allocated),
    src_entry_ipv6_limit: cdktf.numberToTerraform(struct!.srcEntryIpv6Limit),
    src_entry_ipv6_remaining: cdktf.stringToTerraform(struct!.srcEntryIpv6Remaining),
  }
}


export function dataThunderDdosSrcDynamicEntriesResourceUsageOperOperToHclTerraform(struct?: DataThunderDdosSrcDynamicEntriesResourceUsageOperOperOutputReference | DataThunderDdosSrcDynamicEntriesResourceUsageOperOper): any {
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
    src_entry_ip_allocated: {
      value: cdktf.numberToHclTerraform(struct!.srcEntryIpAllocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_entry_ip_limit: {
      value: cdktf.numberToHclTerraform(struct!.srcEntryIpLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_entry_ip_remaining: {
      value: cdktf.stringToHclTerraform(struct!.srcEntryIpRemaining),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_entry_ipv6_allocated: {
      value: cdktf.numberToHclTerraform(struct!.srcEntryIpv6Allocated),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_entry_ipv6_limit: {
      value: cdktf.numberToHclTerraform(struct!.srcEntryIpv6Limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    src_entry_ipv6_remaining: {
      value: cdktf.stringToHclTerraform(struct!.srcEntryIpv6Remaining),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderDdosSrcDynamicEntriesResourceUsageOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderDdosSrcDynamicEntriesResourceUsageOperOper | undefined {
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
    if (this._srcEntryIpAllocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcEntryIpAllocated = this._srcEntryIpAllocated;
    }
    if (this._srcEntryIpLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcEntryIpLimit = this._srcEntryIpLimit;
    }
    if (this._srcEntryIpRemaining !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcEntryIpRemaining = this._srcEntryIpRemaining;
    }
    if (this._srcEntryIpv6Allocated !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcEntryIpv6Allocated = this._srcEntryIpv6Allocated;
    }
    if (this._srcEntryIpv6Limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcEntryIpv6Limit = this._srcEntryIpv6Limit;
    }
    if (this._srcEntryIpv6Remaining !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcEntryIpv6Remaining = this._srcEntryIpv6Remaining;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderDdosSrcDynamicEntriesResourceUsageOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._connTotalIp = undefined;
      this._connTotalIpv6 = undefined;
      this._srcEntryIpAllocated = undefined;
      this._srcEntryIpLimit = undefined;
      this._srcEntryIpRemaining = undefined;
      this._srcEntryIpv6Allocated = undefined;
      this._srcEntryIpv6Limit = undefined;
      this._srcEntryIpv6Remaining = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._connTotalIp = value.connTotalIp;
      this._connTotalIpv6 = value.connTotalIpv6;
      this._srcEntryIpAllocated = value.srcEntryIpAllocated;
      this._srcEntryIpLimit = value.srcEntryIpLimit;
      this._srcEntryIpRemaining = value.srcEntryIpRemaining;
      this._srcEntryIpv6Allocated = value.srcEntryIpv6Allocated;
      this._srcEntryIpv6Limit = value.srcEntryIpv6Limit;
      this._srcEntryIpv6Remaining = value.srcEntryIpv6Remaining;
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

  // src_entry_ip_allocated - computed: false, optional: true, required: false
  private _srcEntryIpAllocated?: number; 
  public get srcEntryIpAllocated() {
    return this.getNumberAttribute('src_entry_ip_allocated');
  }
  public set srcEntryIpAllocated(value: number) {
    this._srcEntryIpAllocated = value;
  }
  public resetSrcEntryIpAllocated() {
    this._srcEntryIpAllocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcEntryIpAllocatedInput() {
    return this._srcEntryIpAllocated;
  }

  // src_entry_ip_limit - computed: false, optional: true, required: false
  private _srcEntryIpLimit?: number; 
  public get srcEntryIpLimit() {
    return this.getNumberAttribute('src_entry_ip_limit');
  }
  public set srcEntryIpLimit(value: number) {
    this._srcEntryIpLimit = value;
  }
  public resetSrcEntryIpLimit() {
    this._srcEntryIpLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcEntryIpLimitInput() {
    return this._srcEntryIpLimit;
  }

  // src_entry_ip_remaining - computed: false, optional: true, required: false
  private _srcEntryIpRemaining?: string; 
  public get srcEntryIpRemaining() {
    return this.getStringAttribute('src_entry_ip_remaining');
  }
  public set srcEntryIpRemaining(value: string) {
    this._srcEntryIpRemaining = value;
  }
  public resetSrcEntryIpRemaining() {
    this._srcEntryIpRemaining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcEntryIpRemainingInput() {
    return this._srcEntryIpRemaining;
  }

  // src_entry_ipv6_allocated - computed: false, optional: true, required: false
  private _srcEntryIpv6Allocated?: number; 
  public get srcEntryIpv6Allocated() {
    return this.getNumberAttribute('src_entry_ipv6_allocated');
  }
  public set srcEntryIpv6Allocated(value: number) {
    this._srcEntryIpv6Allocated = value;
  }
  public resetSrcEntryIpv6Allocated() {
    this._srcEntryIpv6Allocated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcEntryIpv6AllocatedInput() {
    return this._srcEntryIpv6Allocated;
  }

  // src_entry_ipv6_limit - computed: false, optional: true, required: false
  private _srcEntryIpv6Limit?: number; 
  public get srcEntryIpv6Limit() {
    return this.getNumberAttribute('src_entry_ipv6_limit');
  }
  public set srcEntryIpv6Limit(value: number) {
    this._srcEntryIpv6Limit = value;
  }
  public resetSrcEntryIpv6Limit() {
    this._srcEntryIpv6Limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcEntryIpv6LimitInput() {
    return this._srcEntryIpv6Limit;
  }

  // src_entry_ipv6_remaining - computed: false, optional: true, required: false
  private _srcEntryIpv6Remaining?: string; 
  public get srcEntryIpv6Remaining() {
    return this.getStringAttribute('src_entry_ipv6_remaining');
  }
  public set srcEntryIpv6Remaining(value: string) {
    this._srcEntryIpv6Remaining = value;
  }
  public resetSrcEntryIpv6Remaining() {
    this._srcEntryIpv6Remaining = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcEntryIpv6RemainingInput() {
    return this._srcEntryIpv6Remaining;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_src_dynamic_entries_resource_usage_oper thunder_ddos_src_dynamic_entries_resource_usage_oper}
*/
export class DataThunderDdosSrcDynamicEntriesResourceUsageOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_ddos_src_dynamic_entries_resource_usage_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderDdosSrcDynamicEntriesResourceUsageOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderDdosSrcDynamicEntriesResourceUsageOper to import
  * @param importFromId The id of the existing DataThunderDdosSrcDynamicEntriesResourceUsageOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_src_dynamic_entries_resource_usage_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderDdosSrcDynamicEntriesResourceUsageOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_ddos_src_dynamic_entries_resource_usage_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/ddos_src_dynamic_entries_resource_usage_oper thunder_ddos_src_dynamic_entries_resource_usage_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderDdosSrcDynamicEntriesResourceUsageOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderDdosSrcDynamicEntriesResourceUsageOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_ddos_src_dynamic_entries_resource_usage_oper',
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
  private _oper = new DataThunderDdosSrcDynamicEntriesResourceUsageOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderDdosSrcDynamicEntriesResourceUsageOperOper) {
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
      oper: dataThunderDdosSrcDynamicEntriesResourceUsageOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderDdosSrcDynamicEntriesResourceUsageOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderDdosSrcDynamicEntriesResourceUsageOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
