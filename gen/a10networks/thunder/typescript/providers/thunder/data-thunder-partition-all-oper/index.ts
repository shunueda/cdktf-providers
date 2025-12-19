// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/partition_all_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderPartitionAllOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/partition_all_oper#id DataThunderPartitionAllOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/partition_all_oper#oper DataThunderPartitionAllOper#oper}
  */
  readonly oper?: DataThunderPartitionAllOperOper;
}
export interface DataThunderPartitionAllOperOperPartitionListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/partition_all_oper#admin_count DataThunderPartitionAllOper#admin_count}
  */
  readonly adminCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/partition_all_oper#app_type DataThunderPartitionAllOper#app_type}
  */
  readonly appType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/partition_all_oper#parent_l3v DataThunderPartitionAllOper#parent_l3v}
  */
  readonly parentL3V?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/partition_all_oper#partition_id DataThunderPartitionAllOper#partition_id}
  */
  readonly partitionId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/partition_all_oper#partition_name DataThunderPartitionAllOper#partition_name}
  */
  readonly partitionName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/partition_all_oper#partition_type DataThunderPartitionAllOper#partition_type}
  */
  readonly partitionType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/partition_all_oper#status DataThunderPartitionAllOper#status}
  */
  readonly status?: string;
}

export function dataThunderPartitionAllOperOperPartitionListStructToTerraform(struct?: DataThunderPartitionAllOperOperPartitionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_count: cdktf.numberToTerraform(struct!.adminCount),
    app_type: cdktf.stringToTerraform(struct!.appType),
    parent_l3v: cdktf.stringToTerraform(struct!.parentL3V),
    partition_id: cdktf.numberToTerraform(struct!.partitionId),
    partition_name: cdktf.stringToTerraform(struct!.partitionName),
    partition_type: cdktf.stringToTerraform(struct!.partitionType),
    status: cdktf.stringToTerraform(struct!.status),
  }
}


export function dataThunderPartitionAllOperOperPartitionListStructToHclTerraform(struct?: DataThunderPartitionAllOperOperPartitionListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_count: {
      value: cdktf.numberToHclTerraform(struct!.adminCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    app_type: {
      value: cdktf.stringToHclTerraform(struct!.appType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parent_l3v: {
      value: cdktf.stringToHclTerraform(struct!.parentL3V),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_id: {
      value: cdktf.numberToHclTerraform(struct!.partitionId),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    partition_name: {
      value: cdktf.stringToHclTerraform(struct!.partitionName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    partition_type: {
      value: cdktf.stringToHclTerraform(struct!.partitionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.stringToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderPartitionAllOperOperPartitionListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderPartitionAllOperOperPartitionListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminCount = this._adminCount;
    }
    if (this._appType !== undefined) {
      hasAnyValues = true;
      internalValueResult.appType = this._appType;
    }
    if (this._parentL3V !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentL3V = this._parentL3V;
    }
    if (this._partitionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionId = this._partitionId;
    }
    if (this._partitionName !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionName = this._partitionName;
    }
    if (this._partitionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionType = this._partitionType;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderPartitionAllOperOperPartitionListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminCount = undefined;
      this._appType = undefined;
      this._parentL3V = undefined;
      this._partitionId = undefined;
      this._partitionName = undefined;
      this._partitionType = undefined;
      this._status = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminCount = value.adminCount;
      this._appType = value.appType;
      this._parentL3V = value.parentL3V;
      this._partitionId = value.partitionId;
      this._partitionName = value.partitionName;
      this._partitionType = value.partitionType;
      this._status = value.status;
    }
  }

  // admin_count - computed: false, optional: true, required: false
  private _adminCount?: number; 
  public get adminCount() {
    return this.getNumberAttribute('admin_count');
  }
  public set adminCount(value: number) {
    this._adminCount = value;
  }
  public resetAdminCount() {
    this._adminCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminCountInput() {
    return this._adminCount;
  }

  // app_type - computed: false, optional: true, required: false
  private _appType?: string; 
  public get appType() {
    return this.getStringAttribute('app_type');
  }
  public set appType(value: string) {
    this._appType = value;
  }
  public resetAppType() {
    this._appType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appTypeInput() {
    return this._appType;
  }

  // parent_l3v - computed: false, optional: true, required: false
  private _parentL3V?: string; 
  public get parentL3V() {
    return this.getStringAttribute('parent_l3v');
  }
  public set parentL3V(value: string) {
    this._parentL3V = value;
  }
  public resetParentL3V() {
    this._parentL3V = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentL3VInput() {
    return this._parentL3V;
  }

  // partition_id - computed: false, optional: true, required: false
  private _partitionId?: number; 
  public get partitionId() {
    return this.getNumberAttribute('partition_id');
  }
  public set partitionId(value: number) {
    this._partitionId = value;
  }
  public resetPartitionId() {
    this._partitionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionIdInput() {
    return this._partitionId;
  }

  // partition_name - computed: false, optional: true, required: false
  private _partitionName?: string; 
  public get partitionName() {
    return this.getStringAttribute('partition_name');
  }
  public set partitionName(value: string) {
    this._partitionName = value;
  }
  public resetPartitionName() {
    this._partitionName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionNameInput() {
    return this._partitionName;
  }

  // partition_type - computed: false, optional: true, required: false
  private _partitionType?: string; 
  public get partitionType() {
    return this.getStringAttribute('partition_type');
  }
  public set partitionType(value: string) {
    this._partitionType = value;
  }
  public resetPartitionType() {
    this._partitionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionTypeInput() {
    return this._partitionType;
  }

  // status - computed: false, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }
}

export class DataThunderPartitionAllOperOperPartitionListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderPartitionAllOperOperPartitionListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderPartitionAllOperOperPartitionListStructOutputReference {
    return new DataThunderPartitionAllOperOperPartitionListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderPartitionAllOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/partition_all_oper#active_partition_count DataThunderPartitionAllOper#active_partition_count}
  */
  readonly activePartitionCount?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/partition_all_oper#manageable DataThunderPartitionAllOper#manageable}
  */
  readonly manageable?: number;
  /**
  * partition_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/partition_all_oper#partition_list DataThunderPartitionAllOper#partition_list}
  */
  readonly partitionList?: DataThunderPartitionAllOperOperPartitionListStruct[] | cdktf.IResolvable;
}

export function dataThunderPartitionAllOperOperToTerraform(struct?: DataThunderPartitionAllOperOperOutputReference | DataThunderPartitionAllOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    active_partition_count: cdktf.numberToTerraform(struct!.activePartitionCount),
    manageable: cdktf.numberToTerraform(struct!.manageable),
    partition_list: cdktf.listMapper(dataThunderPartitionAllOperOperPartitionListStructToTerraform, true)(struct!.partitionList),
  }
}


export function dataThunderPartitionAllOperOperToHclTerraform(struct?: DataThunderPartitionAllOperOperOutputReference | DataThunderPartitionAllOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    active_partition_count: {
      value: cdktf.numberToHclTerraform(struct!.activePartitionCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    manageable: {
      value: cdktf.numberToHclTerraform(struct!.manageable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    partition_list: {
      value: cdktf.listMapperHcl(dataThunderPartitionAllOperOperPartitionListStructToHclTerraform, true)(struct!.partitionList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderPartitionAllOperOperPartitionListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderPartitionAllOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderPartitionAllOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._activePartitionCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.activePartitionCount = this._activePartitionCount;
    }
    if (this._manageable !== undefined) {
      hasAnyValues = true;
      internalValueResult.manageable = this._manageable;
    }
    if (this._partitionList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.partitionList = this._partitionList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderPartitionAllOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._activePartitionCount = undefined;
      this._manageable = undefined;
      this._partitionList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._activePartitionCount = value.activePartitionCount;
      this._manageable = value.manageable;
      this._partitionList.internalValue = value.partitionList;
    }
  }

  // active_partition_count - computed: false, optional: true, required: false
  private _activePartitionCount?: number; 
  public get activePartitionCount() {
    return this.getNumberAttribute('active_partition_count');
  }
  public set activePartitionCount(value: number) {
    this._activePartitionCount = value;
  }
  public resetActivePartitionCount() {
    this._activePartitionCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activePartitionCountInput() {
    return this._activePartitionCount;
  }

  // manageable - computed: false, optional: true, required: false
  private _manageable?: number; 
  public get manageable() {
    return this.getNumberAttribute('manageable');
  }
  public set manageable(value: number) {
    this._manageable = value;
  }
  public resetManageable() {
    this._manageable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manageableInput() {
    return this._manageable;
  }

  // partition_list - computed: false, optional: true, required: false
  private _partitionList = new DataThunderPartitionAllOperOperPartitionListStructList(this, "partition_list", false);
  public get partitionList() {
    return this._partitionList;
  }
  public putPartitionList(value: DataThunderPartitionAllOperOperPartitionListStruct[] | cdktf.IResolvable) {
    this._partitionList.internalValue = value;
  }
  public resetPartitionList() {
    this._partitionList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get partitionListInput() {
    return this._partitionList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/partition_all_oper thunder_partition_all_oper}
*/
export class DataThunderPartitionAllOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_partition_all_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderPartitionAllOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderPartitionAllOper to import
  * @param importFromId The id of the existing DataThunderPartitionAllOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/partition_all_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderPartitionAllOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_partition_all_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/partition_all_oper thunder_partition_all_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderPartitionAllOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderPartitionAllOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_partition_all_oper',
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
  private _oper = new DataThunderPartitionAllOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderPartitionAllOperOper) {
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
      oper: dataThunderPartitionAllOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderPartitionAllOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderPartitionAllOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
