// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_url_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderWebCategoryUrlOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_url_oper#id DataThunderWebCategoryUrlOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_url_oper#oper DataThunderWebCategoryUrlOper#oper}
  */
  readonly oper?: DataThunderWebCategoryUrlOperOper;
}
export interface DataThunderWebCategoryUrlOperOperCategoryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_url_oper#category DataThunderWebCategoryUrlOper#category}
  */
  readonly category?: string;
}

export function dataThunderWebCategoryUrlOperOperCategoryListStructToTerraform(struct?: DataThunderWebCategoryUrlOperOperCategoryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
  }
}


export function dataThunderWebCategoryUrlOperOperCategoryListStructToHclTerraform(struct?: DataThunderWebCategoryUrlOperOperCategoryListStruct | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryUrlOperOperCategoryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderWebCategoryUrlOperOperCategoryListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._category !== undefined) {
      hasAnyValues = true;
      internalValueResult.category = this._category;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryUrlOperOperCategoryListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._category = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._category = value.category;
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
}

export class DataThunderWebCategoryUrlOperOperCategoryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderWebCategoryUrlOperOperCategoryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderWebCategoryUrlOperOperCategoryListStructOutputReference {
    return new DataThunderWebCategoryUrlOperOperCategoryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderWebCategoryUrlOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_url_oper#local_db_only DataThunderWebCategoryUrlOper#local_db_only}
  */
  readonly localDbOnly?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_url_oper#name DataThunderWebCategoryUrlOper#name}
  */
  readonly name?: string;
  /**
  * category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_url_oper#category_list DataThunderWebCategoryUrlOper#category_list}
  */
  readonly categoryList?: DataThunderWebCategoryUrlOperOperCategoryListStruct[] | cdktf.IResolvable;
}

export function dataThunderWebCategoryUrlOperOperToTerraform(struct?: DataThunderWebCategoryUrlOperOperOutputReference | DataThunderWebCategoryUrlOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_db_only: cdktf.numberToTerraform(struct!.localDbOnly),
    name: cdktf.stringToTerraform(struct!.name),
    category_list: cdktf.listMapper(dataThunderWebCategoryUrlOperOperCategoryListStructToTerraform, true)(struct!.categoryList),
  }
}


export function dataThunderWebCategoryUrlOperOperToHclTerraform(struct?: DataThunderWebCategoryUrlOperOperOutputReference | DataThunderWebCategoryUrlOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    local_db_only: {
      value: cdktf.numberToHclTerraform(struct!.localDbOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category_list: {
      value: cdktf.listMapperHcl(dataThunderWebCategoryUrlOperOperCategoryListStructToHclTerraform, true)(struct!.categoryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryUrlOperOperCategoryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryUrlOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryUrlOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._localDbOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.localDbOnly = this._localDbOnly;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._categoryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryList = this._categoryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryUrlOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localDbOnly = undefined;
      this._name = undefined;
      this._categoryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localDbOnly = value.localDbOnly;
      this._name = value.name;
      this._categoryList.internalValue = value.categoryList;
    }
  }

  // local_db_only - computed: false, optional: true, required: false
  private _localDbOnly?: number; 
  public get localDbOnly() {
    return this.getNumberAttribute('local_db_only');
  }
  public set localDbOnly(value: number) {
    this._localDbOnly = value;
  }
  public resetLocalDbOnly() {
    this._localDbOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localDbOnlyInput() {
    return this._localDbOnly;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // category_list - computed: false, optional: true, required: false
  private _categoryList = new DataThunderWebCategoryUrlOperOperCategoryListStructList(this, "category_list", false);
  public get categoryList() {
    return this._categoryList;
  }
  public putCategoryList(value: DataThunderWebCategoryUrlOperOperCategoryListStruct[] | cdktf.IResolvable) {
    this._categoryList.internalValue = value;
  }
  public resetCategoryList() {
    this._categoryList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get categoryListInput() {
    return this._categoryList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_url_oper thunder_web_category_url_oper}
*/
export class DataThunderWebCategoryUrlOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_web_category_url_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderWebCategoryUrlOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderWebCategoryUrlOper to import
  * @param importFromId The id of the existing DataThunderWebCategoryUrlOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_url_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderWebCategoryUrlOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_web_category_url_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_url_oper thunder_web_category_url_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderWebCategoryUrlOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderWebCategoryUrlOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_web_category_url_oper',
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
  private _oper = new DataThunderWebCategoryUrlOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderWebCategoryUrlOperOper) {
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
      oper: dataThunderWebCategoryUrlOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderWebCategoryUrlOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderWebCategoryUrlOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
