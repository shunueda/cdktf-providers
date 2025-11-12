// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_shared_service_group_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderCgnv6SharedServiceGroupOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_shared_service_group_oper#id DataThunderCgnv6SharedServiceGroupOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_shared_service_group_oper#oper DataThunderCgnv6SharedServiceGroupOper#oper}
  */
  readonly oper?: DataThunderCgnv6SharedServiceGroupOperOper;
}
export interface DataThunderCgnv6SharedServiceGroupOperOperSharedServiceGroupListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_shared_service_group_oper#service_group_name DataThunderCgnv6SharedServiceGroupOper#service_group_name}
  */
  readonly serviceGroupName?: string;
}

export function dataThunderCgnv6SharedServiceGroupOperOperSharedServiceGroupListStructToTerraform(struct?: DataThunderCgnv6SharedServiceGroupOperOperSharedServiceGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    service_group_name: cdktf.stringToTerraform(struct!.serviceGroupName),
  }
}


export function dataThunderCgnv6SharedServiceGroupOperOperSharedServiceGroupListStructToHclTerraform(struct?: DataThunderCgnv6SharedServiceGroupOperOperSharedServiceGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    service_group_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6SharedServiceGroupOperOperSharedServiceGroupListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderCgnv6SharedServiceGroupOperOperSharedServiceGroupListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._serviceGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceGroupName = this._serviceGroupName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6SharedServiceGroupOperOperSharedServiceGroupListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._serviceGroupName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._serviceGroupName = value.serviceGroupName;
    }
  }

  // service_group_name - computed: false, optional: true, required: false
  private _serviceGroupName?: string; 
  public get serviceGroupName() {
    return this.getStringAttribute('service_group_name');
  }
  public set serviceGroupName(value: string) {
    this._serviceGroupName = value;
  }
  public resetServiceGroupName() {
    this._serviceGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceGroupNameInput() {
    return this._serviceGroupName;
  }
}

export class DataThunderCgnv6SharedServiceGroupOperOperSharedServiceGroupListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderCgnv6SharedServiceGroupOperOperSharedServiceGroupListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderCgnv6SharedServiceGroupOperOperSharedServiceGroupListStructOutputReference {
    return new DataThunderCgnv6SharedServiceGroupOperOperSharedServiceGroupListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderCgnv6SharedServiceGroupOperOper {
  /**
  * shared_service_group_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_shared_service_group_oper#shared_service_group_list DataThunderCgnv6SharedServiceGroupOper#shared_service_group_list}
  */
  readonly sharedServiceGroupList?: DataThunderCgnv6SharedServiceGroupOperOperSharedServiceGroupListStruct[] | cdktf.IResolvable;
}

export function dataThunderCgnv6SharedServiceGroupOperOperToTerraform(struct?: DataThunderCgnv6SharedServiceGroupOperOperOutputReference | DataThunderCgnv6SharedServiceGroupOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    shared_service_group_list: cdktf.listMapper(dataThunderCgnv6SharedServiceGroupOperOperSharedServiceGroupListStructToTerraform, true)(struct!.sharedServiceGroupList),
  }
}


export function dataThunderCgnv6SharedServiceGroupOperOperToHclTerraform(struct?: DataThunderCgnv6SharedServiceGroupOperOperOutputReference | DataThunderCgnv6SharedServiceGroupOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    shared_service_group_list: {
      value: cdktf.listMapperHcl(dataThunderCgnv6SharedServiceGroupOperOperSharedServiceGroupListStructToHclTerraform, true)(struct!.sharedServiceGroupList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderCgnv6SharedServiceGroupOperOperSharedServiceGroupListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderCgnv6SharedServiceGroupOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderCgnv6SharedServiceGroupOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sharedServiceGroupList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedServiceGroupList = this._sharedServiceGroupList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderCgnv6SharedServiceGroupOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sharedServiceGroupList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._sharedServiceGroupList.internalValue = value.sharedServiceGroupList;
    }
  }

  // shared_service_group_list - computed: false, optional: true, required: false
  private _sharedServiceGroupList = new DataThunderCgnv6SharedServiceGroupOperOperSharedServiceGroupListStructList(this, "shared_service_group_list", false);
  public get sharedServiceGroupList() {
    return this._sharedServiceGroupList;
  }
  public putSharedServiceGroupList(value: DataThunderCgnv6SharedServiceGroupOperOperSharedServiceGroupListStruct[] | cdktf.IResolvable) {
    this._sharedServiceGroupList.internalValue = value;
  }
  public resetSharedServiceGroupList() {
    this._sharedServiceGroupList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedServiceGroupListInput() {
    return this._sharedServiceGroupList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_shared_service_group_oper thunder_cgnv6_shared_service_group_oper}
*/
export class DataThunderCgnv6SharedServiceGroupOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_cgnv6_shared_service_group_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderCgnv6SharedServiceGroupOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderCgnv6SharedServiceGroupOper to import
  * @param importFromId The id of the existing DataThunderCgnv6SharedServiceGroupOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_shared_service_group_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderCgnv6SharedServiceGroupOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_cgnv6_shared_service_group_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/cgnv6_shared_service_group_oper thunder_cgnv6_shared_service_group_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderCgnv6SharedServiceGroupOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderCgnv6SharedServiceGroupOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_cgnv6_shared_service_group_oper',
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
  private _oper = new DataThunderCgnv6SharedServiceGroupOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderCgnv6SharedServiceGroupOperOper) {
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
      oper: dataThunderCgnv6SharedServiceGroupOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderCgnv6SharedServiceGroupOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderCgnv6SharedServiceGroupOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
