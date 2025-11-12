// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_web_reputation_intercepted_urls_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderWebCategoryWebReputationInterceptedUrlsOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_web_reputation_intercepted_urls_oper#id DataThunderWebCategoryWebReputationInterceptedUrlsOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_web_reputation_intercepted_urls_oper#oper DataThunderWebCategoryWebReputationInterceptedUrlsOper#oper}
  */
  readonly oper?: DataThunderWebCategoryWebReputationInterceptedUrlsOperOper;
}
export interface DataThunderWebCategoryWebReputationInterceptedUrlsOperOperUrlListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_web_reputation_intercepted_urls_oper#url_name DataThunderWebCategoryWebReputationInterceptedUrlsOper#url_name}
  */
  readonly urlName?: string;
}

export function dataThunderWebCategoryWebReputationInterceptedUrlsOperOperUrlListStructToTerraform(struct?: DataThunderWebCategoryWebReputationInterceptedUrlsOperOperUrlListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url_name: cdktf.stringToTerraform(struct!.urlName),
  }
}


export function dataThunderWebCategoryWebReputationInterceptedUrlsOperOperUrlListStructToHclTerraform(struct?: DataThunderWebCategoryWebReputationInterceptedUrlsOperOperUrlListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    url_name: {
      value: cdktf.stringToHclTerraform(struct!.urlName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryWebReputationInterceptedUrlsOperOperUrlListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderWebCategoryWebReputationInterceptedUrlsOperOperUrlListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._urlName !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlName = this._urlName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryWebReputationInterceptedUrlsOperOperUrlListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._urlName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._urlName = value.urlName;
    }
  }

  // url_name - computed: false, optional: true, required: false
  private _urlName?: string; 
  public get urlName() {
    return this.getStringAttribute('url_name');
  }
  public set urlName(value: string) {
    this._urlName = value;
  }
  public resetUrlName() {
    this._urlName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlNameInput() {
    return this._urlName;
  }
}

export class DataThunderWebCategoryWebReputationInterceptedUrlsOperOperUrlListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderWebCategoryWebReputationInterceptedUrlsOperOperUrlListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderWebCategoryWebReputationInterceptedUrlsOperOperUrlListStructOutputReference {
    return new DataThunderWebCategoryWebReputationInterceptedUrlsOperOperUrlListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderWebCategoryWebReputationInterceptedUrlsOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_web_reputation_intercepted_urls_oper#all_urls DataThunderWebCategoryWebReputationInterceptedUrlsOper#all_urls}
  */
  readonly allUrls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_web_reputation_intercepted_urls_oper#number_of_urls DataThunderWebCategoryWebReputationInterceptedUrlsOper#number_of_urls}
  */
  readonly numberOfUrls?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_web_reputation_intercepted_urls_oper#url_name DataThunderWebCategoryWebReputationInterceptedUrlsOper#url_name}
  */
  readonly urlName?: string;
  /**
  * url_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_web_reputation_intercepted_urls_oper#url_list DataThunderWebCategoryWebReputationInterceptedUrlsOper#url_list}
  */
  readonly urlList?: DataThunderWebCategoryWebReputationInterceptedUrlsOperOperUrlListStruct[] | cdktf.IResolvable;
}

export function dataThunderWebCategoryWebReputationInterceptedUrlsOperOperToTerraform(struct?: DataThunderWebCategoryWebReputationInterceptedUrlsOperOperOutputReference | DataThunderWebCategoryWebReputationInterceptedUrlsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_urls: cdktf.stringToTerraform(struct!.allUrls),
    number_of_urls: cdktf.numberToTerraform(struct!.numberOfUrls),
    url_name: cdktf.stringToTerraform(struct!.urlName),
    url_list: cdktf.listMapper(dataThunderWebCategoryWebReputationInterceptedUrlsOperOperUrlListStructToTerraform, true)(struct!.urlList),
  }
}


export function dataThunderWebCategoryWebReputationInterceptedUrlsOperOperToHclTerraform(struct?: DataThunderWebCategoryWebReputationInterceptedUrlsOperOperOutputReference | DataThunderWebCategoryWebReputationInterceptedUrlsOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    all_urls: {
      value: cdktf.stringToHclTerraform(struct!.allUrls),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    number_of_urls: {
      value: cdktf.numberToHclTerraform(struct!.numberOfUrls),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    url_name: {
      value: cdktf.stringToHclTerraform(struct!.urlName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url_list: {
      value: cdktf.listMapperHcl(dataThunderWebCategoryWebReputationInterceptedUrlsOperOperUrlListStructToHclTerraform, true)(struct!.urlList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryWebReputationInterceptedUrlsOperOperUrlListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryWebReputationInterceptedUrlsOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryWebReputationInterceptedUrlsOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.allUrls = this._allUrls;
    }
    if (this._numberOfUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfUrls = this._numberOfUrls;
    }
    if (this._urlName !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlName = this._urlName;
    }
    if (this._urlList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.urlList = this._urlList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryWebReputationInterceptedUrlsOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allUrls = undefined;
      this._numberOfUrls = undefined;
      this._urlName = undefined;
      this._urlList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allUrls = value.allUrls;
      this._numberOfUrls = value.numberOfUrls;
      this._urlName = value.urlName;
      this._urlList.internalValue = value.urlList;
    }
  }

  // all_urls - computed: false, optional: true, required: false
  private _allUrls?: string; 
  public get allUrls() {
    return this.getStringAttribute('all_urls');
  }
  public set allUrls(value: string) {
    this._allUrls = value;
  }
  public resetAllUrls() {
    this._allUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allUrlsInput() {
    return this._allUrls;
  }

  // number_of_urls - computed: false, optional: true, required: false
  private _numberOfUrls?: number; 
  public get numberOfUrls() {
    return this.getNumberAttribute('number_of_urls');
  }
  public set numberOfUrls(value: number) {
    this._numberOfUrls = value;
  }
  public resetNumberOfUrls() {
    this._numberOfUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfUrlsInput() {
    return this._numberOfUrls;
  }

  // url_name - computed: false, optional: true, required: false
  private _urlName?: string; 
  public get urlName() {
    return this.getStringAttribute('url_name');
  }
  public set urlName(value: string) {
    this._urlName = value;
  }
  public resetUrlName() {
    this._urlName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlNameInput() {
    return this._urlName;
  }

  // url_list - computed: false, optional: true, required: false
  private _urlList = new DataThunderWebCategoryWebReputationInterceptedUrlsOperOperUrlListStructList(this, "url_list", false);
  public get urlList() {
    return this._urlList;
  }
  public putUrlList(value: DataThunderWebCategoryWebReputationInterceptedUrlsOperOperUrlListStruct[] | cdktf.IResolvable) {
    this._urlList.internalValue = value;
  }
  public resetUrlList() {
    this._urlList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlListInput() {
    return this._urlList.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_web_reputation_intercepted_urls_oper thunder_web_category_web_reputation_intercepted_urls_oper}
*/
export class DataThunderWebCategoryWebReputationInterceptedUrlsOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_web_category_web_reputation_intercepted_urls_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderWebCategoryWebReputationInterceptedUrlsOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderWebCategoryWebReputationInterceptedUrlsOper to import
  * @param importFromId The id of the existing DataThunderWebCategoryWebReputationInterceptedUrlsOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_web_reputation_intercepted_urls_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderWebCategoryWebReputationInterceptedUrlsOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_web_category_web_reputation_intercepted_urls_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/data-sources/web_category_web_reputation_intercepted_urls_oper thunder_web_category_web_reputation_intercepted_urls_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderWebCategoryWebReputationInterceptedUrlsOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderWebCategoryWebReputationInterceptedUrlsOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_web_category_web_reputation_intercepted_urls_oper',
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
  private _oper = new DataThunderWebCategoryWebReputationInterceptedUrlsOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderWebCategoryWebReputationInterceptedUrlsOperOper) {
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
      oper: dataThunderWebCategoryWebReputationInterceptedUrlsOperOperToTerraform(this._oper.internalValue),
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
        value: dataThunderWebCategoryWebReputationInterceptedUrlsOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderWebCategoryWebReputationInterceptedUrlsOperOperList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
