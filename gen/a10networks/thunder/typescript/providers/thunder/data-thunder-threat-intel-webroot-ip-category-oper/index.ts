// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_ip_category_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderThreatIntelWebrootIpCategoryOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_ip_category_oper#id DataThunderThreatIntelWebrootIpCategoryOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_ip_category_oper#oper DataThunderThreatIntelWebrootIpCategoryOper#oper}
  */
  readonly oper?: DataThunderThreatIntelWebrootIpCategoryOperOper;
}
export interface DataThunderThreatIntelWebrootIpCategoryOperOperCategoryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_ip_category_oper#category DataThunderThreatIntelWebrootIpCategoryOper#category}
  */
  readonly category?: string;
}

export function dataThunderThreatIntelWebrootIpCategoryOperOperCategoryListStructToTerraform(struct?: DataThunderThreatIntelWebrootIpCategoryOperOperCategoryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
  }
}


export function dataThunderThreatIntelWebrootIpCategoryOperOperCategoryListStructToHclTerraform(struct?: DataThunderThreatIntelWebrootIpCategoryOperOperCategoryListStruct | cdktf.IResolvable): any {
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

export class DataThunderThreatIntelWebrootIpCategoryOperOperCategoryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderThreatIntelWebrootIpCategoryOperOperCategoryListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderThreatIntelWebrootIpCategoryOperOperCategoryListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderThreatIntelWebrootIpCategoryOperOperCategoryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderThreatIntelWebrootIpCategoryOperOperCategoryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderThreatIntelWebrootIpCategoryOperOperCategoryListStructOutputReference {
    return new DataThunderThreatIntelWebrootIpCategoryOperOperCategoryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderThreatIntelWebrootIpCategoryOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_ip_category_oper#ip DataThunderThreatIntelWebrootIpCategoryOper#ip}
  */
  readonly ip?: string;
  /**
  * category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_ip_category_oper#category_list DataThunderThreatIntelWebrootIpCategoryOper#category_list}
  */
  readonly categoryList?: DataThunderThreatIntelWebrootIpCategoryOperOperCategoryListStruct[] | cdktf.IResolvable;
}

export function dataThunderThreatIntelWebrootIpCategoryOperOperToTerraform(struct?: DataThunderThreatIntelWebrootIpCategoryOperOperOutputReference | DataThunderThreatIntelWebrootIpCategoryOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ip: cdktf.stringToTerraform(struct!.ip),
    category_list: cdktf.listMapper(dataThunderThreatIntelWebrootIpCategoryOperOperCategoryListStructToTerraform, true)(struct!.categoryList),
  }
}


export function dataThunderThreatIntelWebrootIpCategoryOperOperToHclTerraform(struct?: DataThunderThreatIntelWebrootIpCategoryOperOperOutputReference | DataThunderThreatIntelWebrootIpCategoryOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ip: {
      value: cdktf.stringToHclTerraform(struct!.ip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    category_list: {
      value: cdktf.listMapperHcl(dataThunderThreatIntelWebrootIpCategoryOperOperCategoryListStructToHclTerraform, true)(struct!.categoryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderThreatIntelWebrootIpCategoryOperOperCategoryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderThreatIntelWebrootIpCategoryOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderThreatIntelWebrootIpCategoryOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ip !== undefined) {
      hasAnyValues = true;
      internalValueResult.ip = this._ip;
    }
    if (this._categoryList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.categoryList = this._categoryList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderThreatIntelWebrootIpCategoryOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ip = undefined;
      this._categoryList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ip = value.ip;
      this._categoryList.internalValue = value.categoryList;
    }
  }

  // ip - computed: false, optional: true, required: false
  private _ip?: string; 
  public get ip() {
    return this.getStringAttribute('ip');
  }
  public set ip(value: string) {
    this._ip = value;
  }
  public resetIp() {
    this._ip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipInput() {
    return this._ip;
  }

  // category_list - computed: false, optional: true, required: false
  private _categoryList = new DataThunderThreatIntelWebrootIpCategoryOperOperCategoryListStructList(this, "category_list", false);
  public get categoryList() {
    return this._categoryList;
  }
  public putCategoryList(value: DataThunderThreatIntelWebrootIpCategoryOperOperCategoryListStruct[] | cdktf.IResolvable) {
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
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_ip_category_oper thunder_threat_intel_webroot_ip_category_oper}
*/
export class DataThunderThreatIntelWebrootIpCategoryOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_threat_intel_webroot_ip_category_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderThreatIntelWebrootIpCategoryOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderThreatIntelWebrootIpCategoryOper to import
  * @param importFromId The id of the existing DataThunderThreatIntelWebrootIpCategoryOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_ip_category_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderThreatIntelWebrootIpCategoryOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_threat_intel_webroot_ip_category_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/threat_intel_webroot_ip_category_oper thunder_threat_intel_webroot_ip_category_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderThreatIntelWebrootIpCategoryOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderThreatIntelWebrootIpCategoryOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_threat_intel_webroot_ip_category_oper',
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
  private _oper = new DataThunderThreatIntelWebrootIpCategoryOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderThreatIntelWebrootIpCategoryOperOper) {
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
      oper: dataThunderThreatIntelWebrootIpCategoryOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderThreatIntelWebrootIpCategoryOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderThreatIntelWebrootIpCategoryOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
