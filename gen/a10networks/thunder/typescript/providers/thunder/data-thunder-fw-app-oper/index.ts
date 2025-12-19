// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_app_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderFwAppOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_app_oper#id DataThunderFwAppOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_app_oper#oper DataThunderFwAppOper#oper}
  */
  readonly oper?: DataThunderFwAppOperOper;
}
export interface DataThunderFwAppOperOperGroupListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_app_oper#app_desc DataThunderFwAppOper#app_desc}
  */
  readonly appDesc?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_app_oper#app_name DataThunderFwAppOper#app_name}
  */
  readonly appName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_app_oper#category_name DataThunderFwAppOper#category_name}
  */
  readonly categoryName?: string;
}

export function dataThunderFwAppOperOperGroupListStructToTerraform(struct?: DataThunderFwAppOperOperGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_desc: cdktf.stringToTerraform(struct!.appDesc),
    app_name: cdktf.stringToTerraform(struct!.appName),
    category_name: cdktf.stringToTerraform(struct!.categoryName),
  }
}


export function dataThunderFwAppOperOperGroupListStructToHclTerraform(struct?: DataThunderFwAppOperOperGroupListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_desc: {
      value: cdktf.stringToHclTerraform(struct!.appDesc),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    app_name: {
      value: cdktf.stringToHclTerraform(struct!.appName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category_name: {
      value: cdktf.stringToHclTerraform(struct!.categoryName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwAppOperOperGroupListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderFwAppOperOperGroupListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appDesc !== undefined) {
      hasAnyValues = true;
      internalValueResult.appDesc = this._appDesc;
    }
    if (this._appName !== undefined) {
      hasAnyValues = true;
      internalValueResult.appName = this._appName;
    }
    if (this._categoryName !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryName = this._categoryName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwAppOperOperGroupListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appDesc = undefined;
      this._appName = undefined;
      this._categoryName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appDesc = value.appDesc;
      this._appName = value.appName;
      this._categoryName = value.categoryName;
    }
  }

  // app_desc - computed: false, optional: true, required: false
  private _appDesc?: string; 
  public get appDesc() {
    return this.getStringAttribute('app_desc');
  }
  public set appDesc(value: string) {
    this._appDesc = value;
  }
  public resetAppDesc() {
    this._appDesc = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appDescInput() {
    return this._appDesc;
  }

  // app_name - computed: false, optional: true, required: false
  private _appName?: string; 
  public get appName() {
    return this.getStringAttribute('app_name');
  }
  public set appName(value: string) {
    this._appName = value;
  }
  public resetAppName() {
    this._appName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appNameInput() {
    return this._appName;
  }

  // category_name - computed: false, optional: true, required: false
  private _categoryName?: string; 
  public get categoryName() {
    return this.getStringAttribute('category_name');
  }
  public set categoryName(value: string) {
    this._categoryName = value;
  }
  public resetCategoryName() {
    this._categoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryNameInput() {
    return this._categoryName;
  }
}

export class DataThunderFwAppOperOperGroupListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderFwAppOperOperGroupListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderFwAppOperOperGroupListStructOutputReference {
    return new DataThunderFwAppOperOperGroupListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderFwAppOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_app_oper#category DataThunderFwAppOper#category}
  */
  readonly category?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_app_oper#contains DataThunderFwAppOper#contains}
  */
  readonly contains?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_app_oper#related DataThunderFwAppOper#related}
  */
  readonly related?: string;
  /**
  * group_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_app_oper#group_list DataThunderFwAppOper#group_list}
  */
  readonly groupList?: DataThunderFwAppOperOperGroupListStruct[] | cdktf.IResolvable;
}

export function dataThunderFwAppOperOperToTerraform(struct?: DataThunderFwAppOperOperOutputReference | DataThunderFwAppOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
    contains: cdktf.stringToTerraform(struct!.contains),
    related: cdktf.stringToTerraform(struct!.related),
    group_list: cdktf.listMapper(dataThunderFwAppOperOperGroupListStructToTerraform, true)(struct!.groupList),
  }
}


export function dataThunderFwAppOperOperToHclTerraform(struct?: DataThunderFwAppOperOperOutputReference | DataThunderFwAppOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    category: {
      value: cdktf.stringToHclTerraform(struct!.category),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    contains: {
      value: cdktf.stringToHclTerraform(struct!.contains),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    related: {
      value: cdktf.stringToHclTerraform(struct!.related),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group_list: {
      value: cdktf.listMapperHcl(dataThunderFwAppOperOperGroupListStructToHclTerraform, true)(struct!.groupList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderFwAppOperOperGroupListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderFwAppOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderFwAppOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    if (this._contains !== undefined) {
      hasAnyValues = true;
      internalValueResult.contains = this._contains;
    }
    if (this._related !== undefined) {
      hasAnyValues = true;
      internalValueResult.related = this._related;
    }
    if (this._groupList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.groupList = this._groupList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderFwAppOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._category = undefined;
      this._contains = undefined;
      this._related = undefined;
      this._groupList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._category = value.category;
      this._contains = value.contains;
      this._related = value.related;
      this._groupList.internalValue = value.groupList;
    }
  }

  // category - computed: false, optional: true, required: false
  private _category?: string; 
  public get category() {
    return this.getStringAttribute('category');
  }
  public set category(value: string) {
    this._category = value;
  }
  public resetCategory() {
    this._category = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryInput() {
    return this._category;
  }

  // contains - computed: false, optional: true, required: false
  private _contains?: string; 
  public get contains() {
    return this.getStringAttribute('contains');
  }
  public set contains(value: string) {
    this._contains = value;
  }
  public resetContains() {
    this._contains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containsInput() {
    return this._contains;
  }

  // related - computed: false, optional: true, required: false
  private _related?: string; 
  public get related() {
    return this.getStringAttribute('related');
  }
  public set related(value: string) {
    this._related = value;
  }
  public resetRelated() {
    this._related = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relatedInput() {
    return this._related;
  }

  // group_list - computed: false, optional: true, required: false
  private _groupList = new DataThunderFwAppOperOperGroupListStructList(this, "group_list", false);
  public get groupList() {
    return this._groupList;
  }
  public putGroupList(value: DataThunderFwAppOperOperGroupListStruct[] | cdktf.IResolvable) {
    this._groupList.internalValue = value;
  }
  public resetGroupList() {
    this._groupList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupListInput() {
    return this._groupList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_app_oper thunder_fw_app_oper}
*/
export class DataThunderFwAppOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_fw_app_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderFwAppOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderFwAppOper to import
  * @param importFromId The id of the existing DataThunderFwAppOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_app_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderFwAppOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_fw_app_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/fw_app_oper thunder_fw_app_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderFwAppOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderFwAppOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_fw_app_oper',
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
  private _oper = new DataThunderFwAppOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderFwAppOperOper) {
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
      oper: dataThunderFwAppOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderFwAppOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderFwAppOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
