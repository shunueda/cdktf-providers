// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sys_audit_log_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderSysAuditLogOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sys_audit_log_oper#id DataThunderSysAuditLogOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sys_audit_log_oper#oper DataThunderSysAuditLogOper#oper}
  */
  readonly oper?: DataThunderSysAuditLogOperOper;
}
export interface DataThunderSysAuditLogOperOperSystemAuditLog {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sys_audit_log_oper#log_audit_data DataThunderSysAuditLogOper#log_audit_data}
  */
  readonly logAuditData?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sys_audit_log_oper#log_audit_search DataThunderSysAuditLogOper#log_audit_search}
  */
  readonly logAuditSearch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sys_audit_log_oper#partitions DataThunderSysAuditLogOper#partitions}
  */
  readonly partitions?: string;
}

export function dataThunderSysAuditLogOperOperSystemAuditLogToTerraform(struct?: DataThunderSysAuditLogOperOperSystemAuditLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_audit_data: cdktf.stringToTerraform(struct!.logAuditData),
    log_audit_search: cdktf.stringToTerraform(struct!.logAuditSearch),
    partitions: cdktf.stringToTerraform(struct!.partitions),
  }
}


export function dataThunderSysAuditLogOperOperSystemAuditLogToHclTerraform(struct?: DataThunderSysAuditLogOperOperSystemAuditLog | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_audit_data: {
      value: cdktf.stringToHclTerraform(struct!.logAuditData),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_audit_search: {
      value: cdktf.stringToHclTerraform(struct!.logAuditSearch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partitions: {
      value: cdktf.stringToHclTerraform(struct!.partitions),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSysAuditLogOperOperSystemAuditLogOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderSysAuditLogOperOperSystemAuditLog | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logAuditData !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAuditData = this._logAuditData;
    }
    if (this._logAuditSearch !== undefined) {
      hasAnyValues = true;
      internalValueResult.logAuditSearch = this._logAuditSearch;
    }
    if (this._partitions !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitions = this._partitions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSysAuditLogOperOperSystemAuditLog | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._logAuditData = undefined;
      this._logAuditSearch = undefined;
      this._partitions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._logAuditData = value.logAuditData;
      this._logAuditSearch = value.logAuditSearch;
      this._partitions = value.partitions;
    }
  }

  // log_audit_data - computed: false, optional: true, required: false
  private _logAuditData?: string; 
  public get logAuditData() {
    return this.getStringAttribute('log_audit_data');
  }
  public set logAuditData(value: string) {
    this._logAuditData = value;
  }
  public resetLogAuditData() {
    this._logAuditData = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAuditDataInput() {
    return this._logAuditData;
  }

  // log_audit_search - computed: false, optional: true, required: false
  private _logAuditSearch?: string; 
  public get logAuditSearch() {
    return this.getStringAttribute('log_audit_search');
  }
  public set logAuditSearch(value: string) {
    this._logAuditSearch = value;
  }
  public resetLogAuditSearch() {
    this._logAuditSearch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logAuditSearchInput() {
    return this._logAuditSearch;
  }

  // partitions - computed: false, optional: true, required: false
  private _partitions?: string; 
  public get partitions() {
    return this.getStringAttribute('partitions');
  }
  public set partitions(value: string) {
    this._partitions = value;
  }
  public resetPartitions() {
    this._partitions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionsInput() {
    return this._partitions;
  }
}

export class DataThunderSysAuditLogOperOperSystemAuditLogList extends cdktf.ComplexList {
  public internalValue? : DataThunderSysAuditLogOperOperSystemAuditLog[] | cdktf.IResolvable

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
  public get(index: number): DataThunderSysAuditLogOperOperSystemAuditLogOutputReference {
    return new DataThunderSysAuditLogOperOperSystemAuditLogOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderSysAuditLogOperOper {
  /**
  * system_audit_log block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sys_audit_log_oper#system_audit_log DataThunderSysAuditLogOper#system_audit_log}
  */
  readonly systemAuditLog?: DataThunderSysAuditLogOperOperSystemAuditLog[] | cdktf.IResolvable;
}

export function dataThunderSysAuditLogOperOperToTerraform(struct?: DataThunderSysAuditLogOperOperOutputReference | DataThunderSysAuditLogOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    system_audit_log: cdktf.listMapper(dataThunderSysAuditLogOperOperSystemAuditLogToTerraform, true)(struct!.systemAuditLog),
  }
}


export function dataThunderSysAuditLogOperOperToHclTerraform(struct?: DataThunderSysAuditLogOperOperOutputReference | DataThunderSysAuditLogOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    system_audit_log: {
      value: cdktf.listMapperHcl(dataThunderSysAuditLogOperOperSystemAuditLogToHclTerraform, true)(struct!.systemAuditLog),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderSysAuditLogOperOperSystemAuditLogList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderSysAuditLogOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderSysAuditLogOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._systemAuditLog?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.systemAuditLog = this._systemAuditLog?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderSysAuditLogOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._systemAuditLog.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._systemAuditLog.internalValue = value.systemAuditLog;
    }
  }

  // system_audit_log - computed: false, optional: true, required: false
  private _systemAuditLog = new DataThunderSysAuditLogOperOperSystemAuditLogList(this, "system_audit_log", false);
  public get systemAuditLog() {
    return this._systemAuditLog;
  }
  public putSystemAuditLog(value: DataThunderSysAuditLogOperOperSystemAuditLog[] | cdktf.IResolvable) {
    this._systemAuditLog.internalValue = value;
  }
  public resetSystemAuditLog() {
    this._systemAuditLog.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get systemAuditLogInput() {
    return this._systemAuditLog.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sys_audit_log_oper thunder_sys_audit_log_oper}
*/
export class DataThunderSysAuditLogOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_sys_audit_log_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderSysAuditLogOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderSysAuditLogOper to import
  * @param importFromId The id of the existing DataThunderSysAuditLogOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sys_audit_log_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderSysAuditLogOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_sys_audit_log_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/sys_audit_log_oper thunder_sys_audit_log_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderSysAuditLogOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderSysAuditLogOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_sys_audit_log_oper',
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
  private _oper = new DataThunderSysAuditLogOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderSysAuditLogOperOper) {
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
      oper: dataThunderSysAuditLogOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderSysAuditLogOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderSysAuditLogOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
