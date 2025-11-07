// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_resource_usage_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderVisibilityResourceUsageOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_resource_usage_oper#id DataThunderVisibilityResourceUsageOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_resource_usage_oper#oper DataThunderVisibilityResourceUsageOper#oper}
  */
  readonly oper?: DataThunderVisibilityResourceUsageOperOper;
}
export interface DataThunderVisibilityResourceUsageOperOperResourceListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_resource_usage_oper#resource_current DataThunderVisibilityResourceUsageOper#resource_current}
  */
  readonly resourceCurrent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_resource_usage_oper#resource_limit DataThunderVisibilityResourceUsageOper#resource_limit}
  */
  readonly resourceLimit?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_resource_usage_oper#resource_name DataThunderVisibilityResourceUsageOper#resource_name}
  */
  readonly resourceName?: string;
}

export function dataThunderVisibilityResourceUsageOperOperResourceListStructToTerraform(struct?: DataThunderVisibilityResourceUsageOperOperResourceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_current: cdktf.numberToTerraform(struct!.resourceCurrent),
    resource_limit: cdktf.numberToTerraform(struct!.resourceLimit),
    resource_name: cdktf.stringToTerraform(struct!.resourceName),
  }
}


export function dataThunderVisibilityResourceUsageOperOperResourceListStructToHclTerraform(struct?: DataThunderVisibilityResourceUsageOperOperResourceListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_current: {
      value: cdktf.numberToHclTerraform(struct!.resourceCurrent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_limit: {
      value: cdktf.numberToHclTerraform(struct!.resourceLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resource_name: {
      value: cdktf.stringToHclTerraform(struct!.resourceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityResourceUsageOperOperResourceListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderVisibilityResourceUsageOperOperResourceListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceCurrent !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceCurrent = this._resourceCurrent;
    }
    if (this._resourceLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLimit = this._resourceLimit;
    }
    if (this._resourceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceName = this._resourceName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityResourceUsageOperOperResourceListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._resourceCurrent = undefined;
      this._resourceLimit = undefined;
      this._resourceName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._resourceCurrent = value.resourceCurrent;
      this._resourceLimit = value.resourceLimit;
      this._resourceName = value.resourceName;
    }
  }

  // resource_current - computed: false, optional: true, required: false
  private _resourceCurrent?: number; 
  public get resourceCurrent() {
    return this.getNumberAttribute('resource_current');
  }
  public set resourceCurrent(value: number) {
    this._resourceCurrent = value;
  }
  public resetResourceCurrent() {
    this._resourceCurrent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceCurrentInput() {
    return this._resourceCurrent;
  }

  // resource_limit - computed: false, optional: true, required: false
  private _resourceLimit?: number; 
  public get resourceLimit() {
    return this.getNumberAttribute('resource_limit');
  }
  public set resourceLimit(value: number) {
    this._resourceLimit = value;
  }
  public resetResourceLimit() {
    this._resourceLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLimitInput() {
    return this._resourceLimit;
  }

  // resource_name - computed: false, optional: true, required: false
  private _resourceName?: string; 
  public get resourceName() {
    return this.getStringAttribute('resource_name');
  }
  public set resourceName(value: string) {
    this._resourceName = value;
  }
  public resetResourceName() {
    this._resourceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceNameInput() {
    return this._resourceName;
  }
}

export class DataThunderVisibilityResourceUsageOperOperResourceListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderVisibilityResourceUsageOperOperResourceListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderVisibilityResourceUsageOperOperResourceListStructOutputReference {
    return new DataThunderVisibilityResourceUsageOperOperResourceListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderVisibilityResourceUsageOperOper {
  /**
  * resource_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_resource_usage_oper#resource_list DataThunderVisibilityResourceUsageOper#resource_list}
  */
  readonly resourceList?: DataThunderVisibilityResourceUsageOperOperResourceListStruct[] | cdktf.IResolvable;
}

export function dataThunderVisibilityResourceUsageOperOperToTerraform(struct?: DataThunderVisibilityResourceUsageOperOperOutputReference | DataThunderVisibilityResourceUsageOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    resource_list: cdktf.listMapper(dataThunderVisibilityResourceUsageOperOperResourceListStructToTerraform, true)(struct!.resourceList),
  }
}


export function dataThunderVisibilityResourceUsageOperOperToHclTerraform(struct?: DataThunderVisibilityResourceUsageOperOperOutputReference | DataThunderVisibilityResourceUsageOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    resource_list: {
      value: cdktf.listMapperHcl(dataThunderVisibilityResourceUsageOperOperResourceListStructToHclTerraform, true)(struct!.resourceList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderVisibilityResourceUsageOperOperResourceListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderVisibilityResourceUsageOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderVisibilityResourceUsageOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._resourceList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceList = this._resourceList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderVisibilityResourceUsageOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._resourceList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._resourceList.internalValue = value.resourceList;
    }
  }

  // resource_list - computed: false, optional: true, required: false
  private _resourceList = new DataThunderVisibilityResourceUsageOperOperResourceListStructList(this, "resource_list", false);
  public get resourceList() {
    return this._resourceList;
  }
  public putResourceList(value: DataThunderVisibilityResourceUsageOperOperResourceListStruct[] | cdktf.IResolvable) {
    this._resourceList.internalValue = value;
  }
  public resetResourceList() {
    this._resourceList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceListInput() {
    return this._resourceList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_resource_usage_oper thunder_visibility_resource_usage_oper}
*/
export class DataThunderVisibilityResourceUsageOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_visibility_resource_usage_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderVisibilityResourceUsageOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderVisibilityResourceUsageOper to import
  * @param importFromId The id of the existing DataThunderVisibilityResourceUsageOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_resource_usage_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderVisibilityResourceUsageOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_visibility_resource_usage_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/visibility_resource_usage_oper thunder_visibility_resource_usage_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderVisibilityResourceUsageOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderVisibilityResourceUsageOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_visibility_resource_usage_oper',
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
  private _oper = new DataThunderVisibilityResourceUsageOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderVisibilityResourceUsageOperOper) {
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
      oper: dataThunderVisibilityResourceUsageOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderVisibilityResourceUsageOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderVisibilityResourceUsageOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
