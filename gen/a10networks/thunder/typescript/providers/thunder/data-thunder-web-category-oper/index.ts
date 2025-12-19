// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderWebCategoryOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#id DataThunderWebCategoryOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * bypassed_urls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#bypassed_urls DataThunderWebCategoryOper#bypassed_urls}
  */
  readonly bypassedUrls?: DataThunderWebCategoryOperBypassedUrls;
  /**
  * intercepted_urls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#intercepted_urls DataThunderWebCategoryOper#intercepted_urls}
  */
  readonly interceptedUrls?: DataThunderWebCategoryOperInterceptedUrls;
  /**
  * license block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#license DataThunderWebCategoryOper#license}
  */
  readonly license?: DataThunderWebCategoryOperLicense;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#oper DataThunderWebCategoryOper#oper}
  */
  readonly oper?: DataThunderWebCategoryOperOper;
  /**
  * statistics block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#statistics DataThunderWebCategoryOper#statistics}
  */
  readonly statistics?: DataThunderWebCategoryOperStatistics;
  /**
  * url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#url DataThunderWebCategoryOper#url}
  */
  readonly url?: DataThunderWebCategoryOperUrl;
  /**
  * web_reputation block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#web_reputation DataThunderWebCategoryOper#web_reputation}
  */
  readonly webReputation?: DataThunderWebCategoryOperWebReputation;
}
export interface DataThunderWebCategoryOperBypassedUrlsOperUrlListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#url_name DataThunderWebCategoryOper#url_name}
  */
  readonly urlName?: string;
}

export function dataThunderWebCategoryOperBypassedUrlsOperUrlListStructToTerraform(struct?: DataThunderWebCategoryOperBypassedUrlsOperUrlListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url_name: cdktf.stringToTerraform(struct!.urlName),
  }
}


export function dataThunderWebCategoryOperBypassedUrlsOperUrlListStructToHclTerraform(struct?: DataThunderWebCategoryOperBypassedUrlsOperUrlListStruct | cdktf.IResolvable): any {
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

export class DataThunderWebCategoryOperBypassedUrlsOperUrlListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderWebCategoryOperBypassedUrlsOperUrlListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderWebCategoryOperBypassedUrlsOperUrlListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderWebCategoryOperBypassedUrlsOperUrlListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderWebCategoryOperBypassedUrlsOperUrlListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderWebCategoryOperBypassedUrlsOperUrlListStructOutputReference {
    return new DataThunderWebCategoryOperBypassedUrlsOperUrlListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderWebCategoryOperBypassedUrlsOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#all_urls DataThunderWebCategoryOper#all_urls}
  */
  readonly allUrls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#number_of_urls DataThunderWebCategoryOper#number_of_urls}
  */
  readonly numberOfUrls?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#url_name DataThunderWebCategoryOper#url_name}
  */
  readonly urlName?: string;
  /**
  * url_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#url_list DataThunderWebCategoryOper#url_list}
  */
  readonly urlList?: DataThunderWebCategoryOperBypassedUrlsOperUrlListStruct[] | cdktf.IResolvable;
}

export function dataThunderWebCategoryOperBypassedUrlsOperToTerraform(struct?: DataThunderWebCategoryOperBypassedUrlsOperOutputReference | DataThunderWebCategoryOperBypassedUrlsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_urls: cdktf.stringToTerraform(struct!.allUrls),
    number_of_urls: cdktf.numberToTerraform(struct!.numberOfUrls),
    url_name: cdktf.stringToTerraform(struct!.urlName),
    url_list: cdktf.listMapper(dataThunderWebCategoryOperBypassedUrlsOperUrlListStructToTerraform, true)(struct!.urlList),
  }
}


export function dataThunderWebCategoryOperBypassedUrlsOperToHclTerraform(struct?: DataThunderWebCategoryOperBypassedUrlsOperOutputReference | DataThunderWebCategoryOperBypassedUrlsOper): any {
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
      value: cdktf.listMapperHcl(dataThunderWebCategoryOperBypassedUrlsOperUrlListStructToHclTerraform, true)(struct!.urlList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryOperBypassedUrlsOperUrlListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryOperBypassedUrlsOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryOperBypassedUrlsOper | undefined {
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

  public set internalValue(value: DataThunderWebCategoryOperBypassedUrlsOper | undefined) {
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
  private _urlList = new DataThunderWebCategoryOperBypassedUrlsOperUrlListStructList(this, "url_list", false);
  public get urlList() {
    return this._urlList;
  }
  public putUrlList(value: DataThunderWebCategoryOperBypassedUrlsOperUrlListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderWebCategoryOperBypassedUrls {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#oper DataThunderWebCategoryOper#oper}
  */
  readonly oper?: DataThunderWebCategoryOperBypassedUrlsOper;
}

export function dataThunderWebCategoryOperBypassedUrlsToTerraform(struct?: DataThunderWebCategoryOperBypassedUrlsOutputReference | DataThunderWebCategoryOperBypassedUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderWebCategoryOperBypassedUrlsOperToTerraform(struct!.oper),
  }
}


export function dataThunderWebCategoryOperBypassedUrlsToHclTerraform(struct?: DataThunderWebCategoryOperBypassedUrlsOutputReference | DataThunderWebCategoryOperBypassedUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderWebCategoryOperBypassedUrlsOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryOperBypassedUrlsOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryOperBypassedUrlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryOperBypassedUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryOperBypassedUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderWebCategoryOperBypassedUrlsOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderWebCategoryOperBypassedUrlsOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderWebCategoryOperInterceptedUrlsOperUrlListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#url_name DataThunderWebCategoryOper#url_name}
  */
  readonly urlName?: string;
}

export function dataThunderWebCategoryOperInterceptedUrlsOperUrlListStructToTerraform(struct?: DataThunderWebCategoryOperInterceptedUrlsOperUrlListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url_name: cdktf.stringToTerraform(struct!.urlName),
  }
}


export function dataThunderWebCategoryOperInterceptedUrlsOperUrlListStructToHclTerraform(struct?: DataThunderWebCategoryOperInterceptedUrlsOperUrlListStruct | cdktf.IResolvable): any {
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

export class DataThunderWebCategoryOperInterceptedUrlsOperUrlListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderWebCategoryOperInterceptedUrlsOperUrlListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderWebCategoryOperInterceptedUrlsOperUrlListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderWebCategoryOperInterceptedUrlsOperUrlListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderWebCategoryOperInterceptedUrlsOperUrlListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderWebCategoryOperInterceptedUrlsOperUrlListStructOutputReference {
    return new DataThunderWebCategoryOperInterceptedUrlsOperUrlListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderWebCategoryOperInterceptedUrlsOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#all_urls DataThunderWebCategoryOper#all_urls}
  */
  readonly allUrls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#number_of_urls DataThunderWebCategoryOper#number_of_urls}
  */
  readonly numberOfUrls?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#url_name DataThunderWebCategoryOper#url_name}
  */
  readonly urlName?: string;
  /**
  * url_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#url_list DataThunderWebCategoryOper#url_list}
  */
  readonly urlList?: DataThunderWebCategoryOperInterceptedUrlsOperUrlListStruct[] | cdktf.IResolvable;
}

export function dataThunderWebCategoryOperInterceptedUrlsOperToTerraform(struct?: DataThunderWebCategoryOperInterceptedUrlsOperOutputReference | DataThunderWebCategoryOperInterceptedUrlsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_urls: cdktf.stringToTerraform(struct!.allUrls),
    number_of_urls: cdktf.numberToTerraform(struct!.numberOfUrls),
    url_name: cdktf.stringToTerraform(struct!.urlName),
    url_list: cdktf.listMapper(dataThunderWebCategoryOperInterceptedUrlsOperUrlListStructToTerraform, true)(struct!.urlList),
  }
}


export function dataThunderWebCategoryOperInterceptedUrlsOperToHclTerraform(struct?: DataThunderWebCategoryOperInterceptedUrlsOperOutputReference | DataThunderWebCategoryOperInterceptedUrlsOper): any {
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
      value: cdktf.listMapperHcl(dataThunderWebCategoryOperInterceptedUrlsOperUrlListStructToHclTerraform, true)(struct!.urlList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryOperInterceptedUrlsOperUrlListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryOperInterceptedUrlsOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryOperInterceptedUrlsOper | undefined {
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

  public set internalValue(value: DataThunderWebCategoryOperInterceptedUrlsOper | undefined) {
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
  private _urlList = new DataThunderWebCategoryOperInterceptedUrlsOperUrlListStructList(this, "url_list", false);
  public get urlList() {
    return this._urlList;
  }
  public putUrlList(value: DataThunderWebCategoryOperInterceptedUrlsOperUrlListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderWebCategoryOperInterceptedUrls {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#oper DataThunderWebCategoryOper#oper}
  */
  readonly oper?: DataThunderWebCategoryOperInterceptedUrlsOper;
}

export function dataThunderWebCategoryOperInterceptedUrlsToTerraform(struct?: DataThunderWebCategoryOperInterceptedUrlsOutputReference | DataThunderWebCategoryOperInterceptedUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderWebCategoryOperInterceptedUrlsOperToTerraform(struct!.oper),
  }
}


export function dataThunderWebCategoryOperInterceptedUrlsToHclTerraform(struct?: DataThunderWebCategoryOperInterceptedUrlsOutputReference | DataThunderWebCategoryOperInterceptedUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderWebCategoryOperInterceptedUrlsOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryOperInterceptedUrlsOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryOperInterceptedUrlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryOperInterceptedUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryOperInterceptedUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderWebCategoryOperInterceptedUrlsOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderWebCategoryOperInterceptedUrlsOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderWebCategoryOperLicenseOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#grace_period DataThunderWebCategoryOper#grace_period}
  */
  readonly gracePeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#is_grace DataThunderWebCategoryOper#is_grace}
  */
  readonly isGrace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#license_expiry DataThunderWebCategoryOper#license_expiry}
  */
  readonly licenseExpiry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#license_status DataThunderWebCategoryOper#license_status}
  */
  readonly licenseStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#license_type DataThunderWebCategoryOper#license_type}
  */
  readonly licenseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#module_status DataThunderWebCategoryOper#module_status}
  */
  readonly moduleStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#remaining_period DataThunderWebCategoryOper#remaining_period}
  */
  readonly remainingPeriod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#serial_number DataThunderWebCategoryOper#serial_number}
  */
  readonly serialNumber?: string;
}

export function dataThunderWebCategoryOperLicenseOperToTerraform(struct?: DataThunderWebCategoryOperLicenseOperOutputReference | DataThunderWebCategoryOperLicenseOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    grace_period: cdktf.stringToTerraform(struct!.gracePeriod),
    is_grace: cdktf.stringToTerraform(struct!.isGrace),
    license_expiry: cdktf.stringToTerraform(struct!.licenseExpiry),
    license_status: cdktf.stringToTerraform(struct!.licenseStatus),
    license_type: cdktf.stringToTerraform(struct!.licenseType),
    module_status: cdktf.stringToTerraform(struct!.moduleStatus),
    remaining_period: cdktf.stringToTerraform(struct!.remainingPeriod),
    serial_number: cdktf.stringToTerraform(struct!.serialNumber),
  }
}


export function dataThunderWebCategoryOperLicenseOperToHclTerraform(struct?: DataThunderWebCategoryOperLicenseOperOutputReference | DataThunderWebCategoryOperLicenseOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    grace_period: {
      value: cdktf.stringToHclTerraform(struct!.gracePeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    is_grace: {
      value: cdktf.stringToHclTerraform(struct!.isGrace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_expiry: {
      value: cdktf.stringToHclTerraform(struct!.licenseExpiry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_status: {
      value: cdktf.stringToHclTerraform(struct!.licenseStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    license_type: {
      value: cdktf.stringToHclTerraform(struct!.licenseType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    module_status: {
      value: cdktf.stringToHclTerraform(struct!.moduleStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    remaining_period: {
      value: cdktf.stringToHclTerraform(struct!.remainingPeriod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    serial_number: {
      value: cdktf.stringToHclTerraform(struct!.serialNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryOperLicenseOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryOperLicenseOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gracePeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.gracePeriod = this._gracePeriod;
    }
    if (this._isGrace !== undefined) {
      hasAnyValues = true;
      internalValueResult.isGrace = this._isGrace;
    }
    if (this._licenseExpiry !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseExpiry = this._licenseExpiry;
    }
    if (this._licenseStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseStatus = this._licenseStatus;
    }
    if (this._licenseType !== undefined) {
      hasAnyValues = true;
      internalValueResult.licenseType = this._licenseType;
    }
    if (this._moduleStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.moduleStatus = this._moduleStatus;
    }
    if (this._remainingPeriod !== undefined) {
      hasAnyValues = true;
      internalValueResult.remainingPeriod = this._remainingPeriod;
    }
    if (this._serialNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.serialNumber = this._serialNumber;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryOperLicenseOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._gracePeriod = undefined;
      this._isGrace = undefined;
      this._licenseExpiry = undefined;
      this._licenseStatus = undefined;
      this._licenseType = undefined;
      this._moduleStatus = undefined;
      this._remainingPeriod = undefined;
      this._serialNumber = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._gracePeriod = value.gracePeriod;
      this._isGrace = value.isGrace;
      this._licenseExpiry = value.licenseExpiry;
      this._licenseStatus = value.licenseStatus;
      this._licenseType = value.licenseType;
      this._moduleStatus = value.moduleStatus;
      this._remainingPeriod = value.remainingPeriod;
      this._serialNumber = value.serialNumber;
    }
  }

  // grace_period - computed: false, optional: true, required: false
  private _gracePeriod?: string; 
  public get gracePeriod() {
    return this.getStringAttribute('grace_period');
  }
  public set gracePeriod(value: string) {
    this._gracePeriod = value;
  }
  public resetGracePeriod() {
    this._gracePeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gracePeriodInput() {
    return this._gracePeriod;
  }

  // is_grace - computed: false, optional: true, required: false
  private _isGrace?: string; 
  public get isGrace() {
    return this.getStringAttribute('is_grace');
  }
  public set isGrace(value: string) {
    this._isGrace = value;
  }
  public resetIsGrace() {
    this._isGrace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGraceInput() {
    return this._isGrace;
  }

  // license_expiry - computed: false, optional: true, required: false
  private _licenseExpiry?: string; 
  public get licenseExpiry() {
    return this.getStringAttribute('license_expiry');
  }
  public set licenseExpiry(value: string) {
    this._licenseExpiry = value;
  }
  public resetLicenseExpiry() {
    this._licenseExpiry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseExpiryInput() {
    return this._licenseExpiry;
  }

  // license_status - computed: false, optional: true, required: false
  private _licenseStatus?: string; 
  public get licenseStatus() {
    return this.getStringAttribute('license_status');
  }
  public set licenseStatus(value: string) {
    this._licenseStatus = value;
  }
  public resetLicenseStatus() {
    this._licenseStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseStatusInput() {
    return this._licenseStatus;
  }

  // license_type - computed: false, optional: true, required: false
  private _licenseType?: string; 
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
  public set licenseType(value: string) {
    this._licenseType = value;
  }
  public resetLicenseType() {
    this._licenseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseTypeInput() {
    return this._licenseType;
  }

  // module_status - computed: false, optional: true, required: false
  private _moduleStatus?: string; 
  public get moduleStatus() {
    return this.getStringAttribute('module_status');
  }
  public set moduleStatus(value: string) {
    this._moduleStatus = value;
  }
  public resetModuleStatus() {
    this._moduleStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get moduleStatusInput() {
    return this._moduleStatus;
  }

  // remaining_period - computed: false, optional: true, required: false
  private _remainingPeriod?: string; 
  public get remainingPeriod() {
    return this.getStringAttribute('remaining_period');
  }
  public set remainingPeriod(value: string) {
    this._remainingPeriod = value;
  }
  public resetRemainingPeriod() {
    this._remainingPeriod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remainingPeriodInput() {
    return this._remainingPeriod;
  }

  // serial_number - computed: false, optional: true, required: false
  private _serialNumber?: string; 
  public get serialNumber() {
    return this.getStringAttribute('serial_number');
  }
  public set serialNumber(value: string) {
    this._serialNumber = value;
  }
  public resetSerialNumber() {
    this._serialNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serialNumberInput() {
    return this._serialNumber;
  }
}
export interface DataThunderWebCategoryOperLicense {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#oper DataThunderWebCategoryOper#oper}
  */
  readonly oper?: DataThunderWebCategoryOperLicenseOper;
}

export function dataThunderWebCategoryOperLicenseToTerraform(struct?: DataThunderWebCategoryOperLicenseOutputReference | DataThunderWebCategoryOperLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderWebCategoryOperLicenseOperToTerraform(struct!.oper),
  }
}


export function dataThunderWebCategoryOperLicenseToHclTerraform(struct?: DataThunderWebCategoryOperLicenseOutputReference | DataThunderWebCategoryOperLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderWebCategoryOperLicenseOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryOperLicenseOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryOperLicenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryOperLicense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryOperLicense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderWebCategoryOperLicenseOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderWebCategoryOperLicenseOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderWebCategoryOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#web_cat_connection_status DataThunderWebCategoryOper#web_cat_connection_status}
  */
  readonly webCatConnectionStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#web_cat_database_name DataThunderWebCategoryOper#web_cat_database_name}
  */
  readonly webCatDatabaseName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#web_cat_database_size DataThunderWebCategoryOper#web_cat_database_size}
  */
  readonly webCatDatabaseSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#web_cat_database_status DataThunderWebCategoryOper#web_cat_database_status}
  */
  readonly webCatDatabaseStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#web_cat_database_version DataThunderWebCategoryOper#web_cat_database_version}
  */
  readonly webCatDatabaseVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#web_cat_failure_reason DataThunderWebCategoryOper#web_cat_failure_reason}
  */
  readonly webCatFailureReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#web_cat_last_successful_connection DataThunderWebCategoryOper#web_cat_last_successful_connection}
  */
  readonly webCatLastSuccessfulConnection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#web_cat_last_update_time DataThunderWebCategoryOper#web_cat_last_update_time}
  */
  readonly webCatLastUpdateTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#web_cat_next_update_time DataThunderWebCategoryOper#web_cat_next_update_time}
  */
  readonly webCatNextUpdateTime?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#web_cat_version DataThunderWebCategoryOper#web_cat_version}
  */
  readonly webCatVersion?: string;
}

export function dataThunderWebCategoryOperOperToTerraform(struct?: DataThunderWebCategoryOperOperOutputReference | DataThunderWebCategoryOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    web_cat_connection_status: cdktf.stringToTerraform(struct!.webCatConnectionStatus),
    web_cat_database_name: cdktf.stringToTerraform(struct!.webCatDatabaseName),
    web_cat_database_size: cdktf.stringToTerraform(struct!.webCatDatabaseSize),
    web_cat_database_status: cdktf.stringToTerraform(struct!.webCatDatabaseStatus),
    web_cat_database_version: cdktf.numberToTerraform(struct!.webCatDatabaseVersion),
    web_cat_failure_reason: cdktf.stringToTerraform(struct!.webCatFailureReason),
    web_cat_last_successful_connection: cdktf.stringToTerraform(struct!.webCatLastSuccessfulConnection),
    web_cat_last_update_time: cdktf.stringToTerraform(struct!.webCatLastUpdateTime),
    web_cat_next_update_time: cdktf.stringToTerraform(struct!.webCatNextUpdateTime),
    web_cat_version: cdktf.stringToTerraform(struct!.webCatVersion),
  }
}


export function dataThunderWebCategoryOperOperToHclTerraform(struct?: DataThunderWebCategoryOperOperOutputReference | DataThunderWebCategoryOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    web_cat_connection_status: {
      value: cdktf.stringToHclTerraform(struct!.webCatConnectionStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_cat_database_name: {
      value: cdktf.stringToHclTerraform(struct!.webCatDatabaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_cat_database_size: {
      value: cdktf.stringToHclTerraform(struct!.webCatDatabaseSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_cat_database_status: {
      value: cdktf.stringToHclTerraform(struct!.webCatDatabaseStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_cat_database_version: {
      value: cdktf.numberToHclTerraform(struct!.webCatDatabaseVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    web_cat_failure_reason: {
      value: cdktf.stringToHclTerraform(struct!.webCatFailureReason),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_cat_last_successful_connection: {
      value: cdktf.stringToHclTerraform(struct!.webCatLastSuccessfulConnection),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_cat_last_update_time: {
      value: cdktf.stringToHclTerraform(struct!.webCatLastUpdateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_cat_next_update_time: {
      value: cdktf.stringToHclTerraform(struct!.webCatNextUpdateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    web_cat_version: {
      value: cdktf.stringToHclTerraform(struct!.webCatVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryOperOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._webCatConnectionStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCatConnectionStatus = this._webCatConnectionStatus;
    }
    if (this._webCatDatabaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCatDatabaseName = this._webCatDatabaseName;
    }
    if (this._webCatDatabaseSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCatDatabaseSize = this._webCatDatabaseSize;
    }
    if (this._webCatDatabaseStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCatDatabaseStatus = this._webCatDatabaseStatus;
    }
    if (this._webCatDatabaseVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCatDatabaseVersion = this._webCatDatabaseVersion;
    }
    if (this._webCatFailureReason !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCatFailureReason = this._webCatFailureReason;
    }
    if (this._webCatLastSuccessfulConnection !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCatLastSuccessfulConnection = this._webCatLastSuccessfulConnection;
    }
    if (this._webCatLastUpdateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCatLastUpdateTime = this._webCatLastUpdateTime;
    }
    if (this._webCatNextUpdateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCatNextUpdateTime = this._webCatNextUpdateTime;
    }
    if (this._webCatVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.webCatVersion = this._webCatVersion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryOperOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._webCatConnectionStatus = undefined;
      this._webCatDatabaseName = undefined;
      this._webCatDatabaseSize = undefined;
      this._webCatDatabaseStatus = undefined;
      this._webCatDatabaseVersion = undefined;
      this._webCatFailureReason = undefined;
      this._webCatLastSuccessfulConnection = undefined;
      this._webCatLastUpdateTime = undefined;
      this._webCatNextUpdateTime = undefined;
      this._webCatVersion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._webCatConnectionStatus = value.webCatConnectionStatus;
      this._webCatDatabaseName = value.webCatDatabaseName;
      this._webCatDatabaseSize = value.webCatDatabaseSize;
      this._webCatDatabaseStatus = value.webCatDatabaseStatus;
      this._webCatDatabaseVersion = value.webCatDatabaseVersion;
      this._webCatFailureReason = value.webCatFailureReason;
      this._webCatLastSuccessfulConnection = value.webCatLastSuccessfulConnection;
      this._webCatLastUpdateTime = value.webCatLastUpdateTime;
      this._webCatNextUpdateTime = value.webCatNextUpdateTime;
      this._webCatVersion = value.webCatVersion;
    }
  }

  // web_cat_connection_status - computed: false, optional: true, required: false
  private _webCatConnectionStatus?: string; 
  public get webCatConnectionStatus() {
    return this.getStringAttribute('web_cat_connection_status');
  }
  public set webCatConnectionStatus(value: string) {
    this._webCatConnectionStatus = value;
  }
  public resetWebCatConnectionStatus() {
    this._webCatConnectionStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCatConnectionStatusInput() {
    return this._webCatConnectionStatus;
  }

  // web_cat_database_name - computed: false, optional: true, required: false
  private _webCatDatabaseName?: string; 
  public get webCatDatabaseName() {
    return this.getStringAttribute('web_cat_database_name');
  }
  public set webCatDatabaseName(value: string) {
    this._webCatDatabaseName = value;
  }
  public resetWebCatDatabaseName() {
    this._webCatDatabaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCatDatabaseNameInput() {
    return this._webCatDatabaseName;
  }

  // web_cat_database_size - computed: false, optional: true, required: false
  private _webCatDatabaseSize?: string; 
  public get webCatDatabaseSize() {
    return this.getStringAttribute('web_cat_database_size');
  }
  public set webCatDatabaseSize(value: string) {
    this._webCatDatabaseSize = value;
  }
  public resetWebCatDatabaseSize() {
    this._webCatDatabaseSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCatDatabaseSizeInput() {
    return this._webCatDatabaseSize;
  }

  // web_cat_database_status - computed: false, optional: true, required: false
  private _webCatDatabaseStatus?: string; 
  public get webCatDatabaseStatus() {
    return this.getStringAttribute('web_cat_database_status');
  }
  public set webCatDatabaseStatus(value: string) {
    this._webCatDatabaseStatus = value;
  }
  public resetWebCatDatabaseStatus() {
    this._webCatDatabaseStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCatDatabaseStatusInput() {
    return this._webCatDatabaseStatus;
  }

  // web_cat_database_version - computed: false, optional: true, required: false
  private _webCatDatabaseVersion?: number; 
  public get webCatDatabaseVersion() {
    return this.getNumberAttribute('web_cat_database_version');
  }
  public set webCatDatabaseVersion(value: number) {
    this._webCatDatabaseVersion = value;
  }
  public resetWebCatDatabaseVersion() {
    this._webCatDatabaseVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCatDatabaseVersionInput() {
    return this._webCatDatabaseVersion;
  }

  // web_cat_failure_reason - computed: false, optional: true, required: false
  private _webCatFailureReason?: string; 
  public get webCatFailureReason() {
    return this.getStringAttribute('web_cat_failure_reason');
  }
  public set webCatFailureReason(value: string) {
    this._webCatFailureReason = value;
  }
  public resetWebCatFailureReason() {
    this._webCatFailureReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCatFailureReasonInput() {
    return this._webCatFailureReason;
  }

  // web_cat_last_successful_connection - computed: false, optional: true, required: false
  private _webCatLastSuccessfulConnection?: string; 
  public get webCatLastSuccessfulConnection() {
    return this.getStringAttribute('web_cat_last_successful_connection');
  }
  public set webCatLastSuccessfulConnection(value: string) {
    this._webCatLastSuccessfulConnection = value;
  }
  public resetWebCatLastSuccessfulConnection() {
    this._webCatLastSuccessfulConnection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCatLastSuccessfulConnectionInput() {
    return this._webCatLastSuccessfulConnection;
  }

  // web_cat_last_update_time - computed: false, optional: true, required: false
  private _webCatLastUpdateTime?: string; 
  public get webCatLastUpdateTime() {
    return this.getStringAttribute('web_cat_last_update_time');
  }
  public set webCatLastUpdateTime(value: string) {
    this._webCatLastUpdateTime = value;
  }
  public resetWebCatLastUpdateTime() {
    this._webCatLastUpdateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCatLastUpdateTimeInput() {
    return this._webCatLastUpdateTime;
  }

  // web_cat_next_update_time - computed: false, optional: true, required: false
  private _webCatNextUpdateTime?: string; 
  public get webCatNextUpdateTime() {
    return this.getStringAttribute('web_cat_next_update_time');
  }
  public set webCatNextUpdateTime(value: string) {
    this._webCatNextUpdateTime = value;
  }
  public resetWebCatNextUpdateTime() {
    this._webCatNextUpdateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCatNextUpdateTimeInput() {
    return this._webCatNextUpdateTime;
  }

  // web_cat_version - computed: false, optional: true, required: false
  private _webCatVersion?: string; 
  public get webCatVersion() {
    return this.getStringAttribute('web_cat_version');
  }
  public set webCatVersion(value: string) {
    this._webCatVersion = value;
  }
  public resetWebCatVersion() {
    this._webCatVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webCatVersionInput() {
    return this._webCatVersion;
  }
}
export interface DataThunderWebCategoryOperStatisticsOperPerCpuListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#req_dropped DataThunderWebCategoryOper#req_dropped}
  */
  readonly reqDropped?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#req_lookup_processed DataThunderWebCategoryOper#req_lookup_processed}
  */
  readonly reqLookupProcessed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#req_processed DataThunderWebCategoryOper#req_processed}
  */
  readonly reqProcessed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#req_queue DataThunderWebCategoryOper#req_queue}
  */
  readonly reqQueue?: number;
}

export function dataThunderWebCategoryOperStatisticsOperPerCpuListStructToTerraform(struct?: DataThunderWebCategoryOperStatisticsOperPerCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    req_dropped: cdktf.numberToTerraform(struct!.reqDropped),
    req_lookup_processed: cdktf.numberToTerraform(struct!.reqLookupProcessed),
    req_processed: cdktf.numberToTerraform(struct!.reqProcessed),
    req_queue: cdktf.numberToTerraform(struct!.reqQueue),
  }
}


export function dataThunderWebCategoryOperStatisticsOperPerCpuListStructToHclTerraform(struct?: DataThunderWebCategoryOperStatisticsOperPerCpuListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    req_dropped: {
      value: cdktf.numberToHclTerraform(struct!.reqDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_lookup_processed: {
      value: cdktf.numberToHclTerraform(struct!.reqLookupProcessed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_processed: {
      value: cdktf.numberToHclTerraform(struct!.reqProcessed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    req_queue: {
      value: cdktf.numberToHclTerraform(struct!.reqQueue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryOperStatisticsOperPerCpuListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderWebCategoryOperStatisticsOperPerCpuListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._reqDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqDropped = this._reqDropped;
    }
    if (this._reqLookupProcessed !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqLookupProcessed = this._reqLookupProcessed;
    }
    if (this._reqProcessed !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqProcessed = this._reqProcessed;
    }
    if (this._reqQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.reqQueue = this._reqQueue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryOperStatisticsOperPerCpuListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._reqDropped = undefined;
      this._reqLookupProcessed = undefined;
      this._reqProcessed = undefined;
      this._reqQueue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._reqDropped = value.reqDropped;
      this._reqLookupProcessed = value.reqLookupProcessed;
      this._reqProcessed = value.reqProcessed;
      this._reqQueue = value.reqQueue;
    }
  }

  // req_dropped - computed: false, optional: true, required: false
  private _reqDropped?: number; 
  public get reqDropped() {
    return this.getNumberAttribute('req_dropped');
  }
  public set reqDropped(value: number) {
    this._reqDropped = value;
  }
  public resetReqDropped() {
    this._reqDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqDroppedInput() {
    return this._reqDropped;
  }

  // req_lookup_processed - computed: false, optional: true, required: false
  private _reqLookupProcessed?: number; 
  public get reqLookupProcessed() {
    return this.getNumberAttribute('req_lookup_processed');
  }
  public set reqLookupProcessed(value: number) {
    this._reqLookupProcessed = value;
  }
  public resetReqLookupProcessed() {
    this._reqLookupProcessed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqLookupProcessedInput() {
    return this._reqLookupProcessed;
  }

  // req_processed - computed: false, optional: true, required: false
  private _reqProcessed?: number; 
  public get reqProcessed() {
    return this.getNumberAttribute('req_processed');
  }
  public set reqProcessed(value: number) {
    this._reqProcessed = value;
  }
  public resetReqProcessed() {
    this._reqProcessed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqProcessedInput() {
    return this._reqProcessed;
  }

  // req_queue - computed: false, optional: true, required: false
  private _reqQueue?: number; 
  public get reqQueue() {
    return this.getNumberAttribute('req_queue');
  }
  public set reqQueue(value: number) {
    this._reqQueue = value;
  }
  public resetReqQueue() {
    this._reqQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reqQueueInput() {
    return this._reqQueue;
  }
}

export class DataThunderWebCategoryOperStatisticsOperPerCpuListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderWebCategoryOperStatisticsOperPerCpuListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderWebCategoryOperStatisticsOperPerCpuListStructOutputReference {
    return new DataThunderWebCategoryOperStatisticsOperPerCpuListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderWebCategoryOperStatisticsOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#clear_cache DataThunderWebCategoryOper#clear_cache}
  */
  readonly clearCache?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#num_dplane_threads DataThunderWebCategoryOper#num_dplane_threads}
  */
  readonly numDplaneThreads?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#num_lookup_threads DataThunderWebCategoryOper#num_lookup_threads}
  */
  readonly numLookupThreads?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#total_req_dropped DataThunderWebCategoryOper#total_req_dropped}
  */
  readonly totalReqDropped?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#total_req_lookup_processed DataThunderWebCategoryOper#total_req_lookup_processed}
  */
  readonly totalReqLookupProcessed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#total_req_processed DataThunderWebCategoryOper#total_req_processed}
  */
  readonly totalReqProcessed?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#total_req_queue DataThunderWebCategoryOper#total_req_queue}
  */
  readonly totalReqQueue?: number;
  /**
  * per_cpu_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#per_cpu_list DataThunderWebCategoryOper#per_cpu_list}
  */
  readonly perCpuList?: DataThunderWebCategoryOperStatisticsOperPerCpuListStruct[] | cdktf.IResolvable;
}

export function dataThunderWebCategoryOperStatisticsOperToTerraform(struct?: DataThunderWebCategoryOperStatisticsOperOutputReference | DataThunderWebCategoryOperStatisticsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    clear_cache: cdktf.stringToTerraform(struct!.clearCache),
    num_dplane_threads: cdktf.numberToTerraform(struct!.numDplaneThreads),
    num_lookup_threads: cdktf.numberToTerraform(struct!.numLookupThreads),
    total_req_dropped: cdktf.numberToTerraform(struct!.totalReqDropped),
    total_req_lookup_processed: cdktf.numberToTerraform(struct!.totalReqLookupProcessed),
    total_req_processed: cdktf.numberToTerraform(struct!.totalReqProcessed),
    total_req_queue: cdktf.numberToTerraform(struct!.totalReqQueue),
    per_cpu_list: cdktf.listMapper(dataThunderWebCategoryOperStatisticsOperPerCpuListStructToTerraform, true)(struct!.perCpuList),
  }
}


export function dataThunderWebCategoryOperStatisticsOperToHclTerraform(struct?: DataThunderWebCategoryOperStatisticsOperOutputReference | DataThunderWebCategoryOperStatisticsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    clear_cache: {
      value: cdktf.stringToHclTerraform(struct!.clearCache),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_dplane_threads: {
      value: cdktf.numberToHclTerraform(struct!.numDplaneThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_lookup_threads: {
      value: cdktf.numberToHclTerraform(struct!.numLookupThreads),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_req_dropped: {
      value: cdktf.numberToHclTerraform(struct!.totalReqDropped),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_req_lookup_processed: {
      value: cdktf.numberToHclTerraform(struct!.totalReqLookupProcessed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_req_processed: {
      value: cdktf.numberToHclTerraform(struct!.totalReqProcessed),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    total_req_queue: {
      value: cdktf.numberToHclTerraform(struct!.totalReqQueue),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    per_cpu_list: {
      value: cdktf.listMapperHcl(dataThunderWebCategoryOperStatisticsOperPerCpuListStructToHclTerraform, true)(struct!.perCpuList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryOperStatisticsOperPerCpuListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryOperStatisticsOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryOperStatisticsOper | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clearCache !== undefined) {
      hasAnyValues = true;
      internalValueResult.clearCache = this._clearCache;
    }
    if (this._numDplaneThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.numDplaneThreads = this._numDplaneThreads;
    }
    if (this._numLookupThreads !== undefined) {
      hasAnyValues = true;
      internalValueResult.numLookupThreads = this._numLookupThreads;
    }
    if (this._totalReqDropped !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalReqDropped = this._totalReqDropped;
    }
    if (this._totalReqLookupProcessed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalReqLookupProcessed = this._totalReqLookupProcessed;
    }
    if (this._totalReqProcessed !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalReqProcessed = this._totalReqProcessed;
    }
    if (this._totalReqQueue !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalReqQueue = this._totalReqQueue;
    }
    if (this._perCpuList?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.perCpuList = this._perCpuList?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryOperStatisticsOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clearCache = undefined;
      this._numDplaneThreads = undefined;
      this._numLookupThreads = undefined;
      this._totalReqDropped = undefined;
      this._totalReqLookupProcessed = undefined;
      this._totalReqProcessed = undefined;
      this._totalReqQueue = undefined;
      this._perCpuList.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clearCache = value.clearCache;
      this._numDplaneThreads = value.numDplaneThreads;
      this._numLookupThreads = value.numLookupThreads;
      this._totalReqDropped = value.totalReqDropped;
      this._totalReqLookupProcessed = value.totalReqLookupProcessed;
      this._totalReqProcessed = value.totalReqProcessed;
      this._totalReqQueue = value.totalReqQueue;
      this._perCpuList.internalValue = value.perCpuList;
    }
  }

  // clear_cache - computed: false, optional: true, required: false
  private _clearCache?: string; 
  public get clearCache() {
    return this.getStringAttribute('clear_cache');
  }
  public set clearCache(value: string) {
    this._clearCache = value;
  }
  public resetClearCache() {
    this._clearCache = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clearCacheInput() {
    return this._clearCache;
  }

  // num_dplane_threads - computed: false, optional: true, required: false
  private _numDplaneThreads?: number; 
  public get numDplaneThreads() {
    return this.getNumberAttribute('num_dplane_threads');
  }
  public set numDplaneThreads(value: number) {
    this._numDplaneThreads = value;
  }
  public resetNumDplaneThreads() {
    this._numDplaneThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numDplaneThreadsInput() {
    return this._numDplaneThreads;
  }

  // num_lookup_threads - computed: false, optional: true, required: false
  private _numLookupThreads?: number; 
  public get numLookupThreads() {
    return this.getNumberAttribute('num_lookup_threads');
  }
  public set numLookupThreads(value: number) {
    this._numLookupThreads = value;
  }
  public resetNumLookupThreads() {
    this._numLookupThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numLookupThreadsInput() {
    return this._numLookupThreads;
  }

  // total_req_dropped - computed: false, optional: true, required: false
  private _totalReqDropped?: number; 
  public get totalReqDropped() {
    return this.getNumberAttribute('total_req_dropped');
  }
  public set totalReqDropped(value: number) {
    this._totalReqDropped = value;
  }
  public resetTotalReqDropped() {
    this._totalReqDropped = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalReqDroppedInput() {
    return this._totalReqDropped;
  }

  // total_req_lookup_processed - computed: false, optional: true, required: false
  private _totalReqLookupProcessed?: number; 
  public get totalReqLookupProcessed() {
    return this.getNumberAttribute('total_req_lookup_processed');
  }
  public set totalReqLookupProcessed(value: number) {
    this._totalReqLookupProcessed = value;
  }
  public resetTotalReqLookupProcessed() {
    this._totalReqLookupProcessed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalReqLookupProcessedInput() {
    return this._totalReqLookupProcessed;
  }

  // total_req_processed - computed: false, optional: true, required: false
  private _totalReqProcessed?: number; 
  public get totalReqProcessed() {
    return this.getNumberAttribute('total_req_processed');
  }
  public set totalReqProcessed(value: number) {
    this._totalReqProcessed = value;
  }
  public resetTotalReqProcessed() {
    this._totalReqProcessed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalReqProcessedInput() {
    return this._totalReqProcessed;
  }

  // total_req_queue - computed: false, optional: true, required: false
  private _totalReqQueue?: number; 
  public get totalReqQueue() {
    return this.getNumberAttribute('total_req_queue');
  }
  public set totalReqQueue(value: number) {
    this._totalReqQueue = value;
  }
  public resetTotalReqQueue() {
    this._totalReqQueue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalReqQueueInput() {
    return this._totalReqQueue;
  }

  // per_cpu_list - computed: false, optional: true, required: false
  private _perCpuList = new DataThunderWebCategoryOperStatisticsOperPerCpuListStructList(this, "per_cpu_list", false);
  public get perCpuList() {
    return this._perCpuList;
  }
  public putPerCpuList(value: DataThunderWebCategoryOperStatisticsOperPerCpuListStruct[] | cdktf.IResolvable) {
    this._perCpuList.internalValue = value;
  }
  public resetPerCpuList() {
    this._perCpuList.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get perCpuListInput() {
    return this._perCpuList.internalValue;
  }
}
export interface DataThunderWebCategoryOperStatistics {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#oper DataThunderWebCategoryOper#oper}
  */
  readonly oper?: DataThunderWebCategoryOperStatisticsOper;
}

export function dataThunderWebCategoryOperStatisticsToTerraform(struct?: DataThunderWebCategoryOperStatisticsOutputReference | DataThunderWebCategoryOperStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderWebCategoryOperStatisticsOperToTerraform(struct!.oper),
  }
}


export function dataThunderWebCategoryOperStatisticsToHclTerraform(struct?: DataThunderWebCategoryOperStatisticsOutputReference | DataThunderWebCategoryOperStatistics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderWebCategoryOperStatisticsOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryOperStatisticsOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryOperStatisticsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryOperStatistics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryOperStatistics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderWebCategoryOperStatisticsOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderWebCategoryOperStatisticsOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderWebCategoryOperUrlOperCategoryListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#category DataThunderWebCategoryOper#category}
  */
  readonly category?: string;
}

export function dataThunderWebCategoryOperUrlOperCategoryListStructToTerraform(struct?: DataThunderWebCategoryOperUrlOperCategoryListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    category: cdktf.stringToTerraform(struct!.category),
  }
}


export function dataThunderWebCategoryOperUrlOperCategoryListStructToHclTerraform(struct?: DataThunderWebCategoryOperUrlOperCategoryListStruct | cdktf.IResolvable): any {
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

export class DataThunderWebCategoryOperUrlOperCategoryListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderWebCategoryOperUrlOperCategoryListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderWebCategoryOperUrlOperCategoryListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderWebCategoryOperUrlOperCategoryListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderWebCategoryOperUrlOperCategoryListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderWebCategoryOperUrlOperCategoryListStructOutputReference {
    return new DataThunderWebCategoryOperUrlOperCategoryListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderWebCategoryOperUrlOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#local_db_only DataThunderWebCategoryOper#local_db_only}
  */
  readonly localDbOnly?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#name DataThunderWebCategoryOper#name}
  */
  readonly name?: string;
  /**
  * category_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#category_list DataThunderWebCategoryOper#category_list}
  */
  readonly categoryList?: DataThunderWebCategoryOperUrlOperCategoryListStruct[] | cdktf.IResolvable;
}

export function dataThunderWebCategoryOperUrlOperToTerraform(struct?: DataThunderWebCategoryOperUrlOperOutputReference | DataThunderWebCategoryOperUrlOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_db_only: cdktf.numberToTerraform(struct!.localDbOnly),
    name: cdktf.stringToTerraform(struct!.name),
    category_list: cdktf.listMapper(dataThunderWebCategoryOperUrlOperCategoryListStructToTerraform, true)(struct!.categoryList),
  }
}


export function dataThunderWebCategoryOperUrlOperToHclTerraform(struct?: DataThunderWebCategoryOperUrlOperOutputReference | DataThunderWebCategoryOperUrlOper): any {
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
      value: cdktf.listMapperHcl(dataThunderWebCategoryOperUrlOperCategoryListStructToHclTerraform, true)(struct!.categoryList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryOperUrlOperCategoryListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryOperUrlOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryOperUrlOper | undefined {
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

  public set internalValue(value: DataThunderWebCategoryOperUrlOper | undefined) {
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
  private _categoryList = new DataThunderWebCategoryOperUrlOperCategoryListStructList(this, "category_list", false);
  public get categoryList() {
    return this._categoryList;
  }
  public putCategoryList(value: DataThunderWebCategoryOperUrlOperCategoryListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderWebCategoryOperUrl {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#oper DataThunderWebCategoryOper#oper}
  */
  readonly oper?: DataThunderWebCategoryOperUrlOper;
}

export function dataThunderWebCategoryOperUrlToTerraform(struct?: DataThunderWebCategoryOperUrlOutputReference | DataThunderWebCategoryOperUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderWebCategoryOperUrlOperToTerraform(struct!.oper),
  }
}


export function dataThunderWebCategoryOperUrlToHclTerraform(struct?: DataThunderWebCategoryOperUrlOutputReference | DataThunderWebCategoryOperUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderWebCategoryOperUrlOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryOperUrlOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryOperUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryOperUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryOperUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderWebCategoryOperUrlOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderWebCategoryOperUrlOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderWebCategoryOperWebReputationBypassedUrlsOperUrlListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#url_name DataThunderWebCategoryOper#url_name}
  */
  readonly urlName?: string;
}

export function dataThunderWebCategoryOperWebReputationBypassedUrlsOperUrlListStructToTerraform(struct?: DataThunderWebCategoryOperWebReputationBypassedUrlsOperUrlListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url_name: cdktf.stringToTerraform(struct!.urlName),
  }
}


export function dataThunderWebCategoryOperWebReputationBypassedUrlsOperUrlListStructToHclTerraform(struct?: DataThunderWebCategoryOperWebReputationBypassedUrlsOperUrlListStruct | cdktf.IResolvable): any {
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

export class DataThunderWebCategoryOperWebReputationBypassedUrlsOperUrlListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderWebCategoryOperWebReputationBypassedUrlsOperUrlListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderWebCategoryOperWebReputationBypassedUrlsOperUrlListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderWebCategoryOperWebReputationBypassedUrlsOperUrlListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderWebCategoryOperWebReputationBypassedUrlsOperUrlListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderWebCategoryOperWebReputationBypassedUrlsOperUrlListStructOutputReference {
    return new DataThunderWebCategoryOperWebReputationBypassedUrlsOperUrlListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderWebCategoryOperWebReputationBypassedUrlsOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#all_urls DataThunderWebCategoryOper#all_urls}
  */
  readonly allUrls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#number_of_urls DataThunderWebCategoryOper#number_of_urls}
  */
  readonly numberOfUrls?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#url_name DataThunderWebCategoryOper#url_name}
  */
  readonly urlName?: string;
  /**
  * url_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#url_list DataThunderWebCategoryOper#url_list}
  */
  readonly urlList?: DataThunderWebCategoryOperWebReputationBypassedUrlsOperUrlListStruct[] | cdktf.IResolvable;
}

export function dataThunderWebCategoryOperWebReputationBypassedUrlsOperToTerraform(struct?: DataThunderWebCategoryOperWebReputationBypassedUrlsOperOutputReference | DataThunderWebCategoryOperWebReputationBypassedUrlsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_urls: cdktf.stringToTerraform(struct!.allUrls),
    number_of_urls: cdktf.numberToTerraform(struct!.numberOfUrls),
    url_name: cdktf.stringToTerraform(struct!.urlName),
    url_list: cdktf.listMapper(dataThunderWebCategoryOperWebReputationBypassedUrlsOperUrlListStructToTerraform, true)(struct!.urlList),
  }
}


export function dataThunderWebCategoryOperWebReputationBypassedUrlsOperToHclTerraform(struct?: DataThunderWebCategoryOperWebReputationBypassedUrlsOperOutputReference | DataThunderWebCategoryOperWebReputationBypassedUrlsOper): any {
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
      value: cdktf.listMapperHcl(dataThunderWebCategoryOperWebReputationBypassedUrlsOperUrlListStructToHclTerraform, true)(struct!.urlList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryOperWebReputationBypassedUrlsOperUrlListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryOperWebReputationBypassedUrlsOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryOperWebReputationBypassedUrlsOper | undefined {
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

  public set internalValue(value: DataThunderWebCategoryOperWebReputationBypassedUrlsOper | undefined) {
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
  private _urlList = new DataThunderWebCategoryOperWebReputationBypassedUrlsOperUrlListStructList(this, "url_list", false);
  public get urlList() {
    return this._urlList;
  }
  public putUrlList(value: DataThunderWebCategoryOperWebReputationBypassedUrlsOperUrlListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderWebCategoryOperWebReputationBypassedUrls {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#oper DataThunderWebCategoryOper#oper}
  */
  readonly oper?: DataThunderWebCategoryOperWebReputationBypassedUrlsOper;
}

export function dataThunderWebCategoryOperWebReputationBypassedUrlsToTerraform(struct?: DataThunderWebCategoryOperWebReputationBypassedUrlsOutputReference | DataThunderWebCategoryOperWebReputationBypassedUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderWebCategoryOperWebReputationBypassedUrlsOperToTerraform(struct!.oper),
  }
}


export function dataThunderWebCategoryOperWebReputationBypassedUrlsToHclTerraform(struct?: DataThunderWebCategoryOperWebReputationBypassedUrlsOutputReference | DataThunderWebCategoryOperWebReputationBypassedUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderWebCategoryOperWebReputationBypassedUrlsOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryOperWebReputationBypassedUrlsOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryOperWebReputationBypassedUrlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryOperWebReputationBypassedUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryOperWebReputationBypassedUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderWebCategoryOperWebReputationBypassedUrlsOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderWebCategoryOperWebReputationBypassedUrlsOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderWebCategoryOperWebReputationInterceptedUrlsOperUrlListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#url_name DataThunderWebCategoryOper#url_name}
  */
  readonly urlName?: string;
}

export function dataThunderWebCategoryOperWebReputationInterceptedUrlsOperUrlListStructToTerraform(struct?: DataThunderWebCategoryOperWebReputationInterceptedUrlsOperUrlListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url_name: cdktf.stringToTerraform(struct!.urlName),
  }
}


export function dataThunderWebCategoryOperWebReputationInterceptedUrlsOperUrlListStructToHclTerraform(struct?: DataThunderWebCategoryOperWebReputationInterceptedUrlsOperUrlListStruct | cdktf.IResolvable): any {
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

export class DataThunderWebCategoryOperWebReputationInterceptedUrlsOperUrlListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderWebCategoryOperWebReputationInterceptedUrlsOperUrlListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderWebCategoryOperWebReputationInterceptedUrlsOperUrlListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderWebCategoryOperWebReputationInterceptedUrlsOperUrlListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderWebCategoryOperWebReputationInterceptedUrlsOperUrlListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderWebCategoryOperWebReputationInterceptedUrlsOperUrlListStructOutputReference {
    return new DataThunderWebCategoryOperWebReputationInterceptedUrlsOperUrlListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderWebCategoryOperWebReputationInterceptedUrlsOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#all_urls DataThunderWebCategoryOper#all_urls}
  */
  readonly allUrls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#number_of_urls DataThunderWebCategoryOper#number_of_urls}
  */
  readonly numberOfUrls?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#url_name DataThunderWebCategoryOper#url_name}
  */
  readonly urlName?: string;
  /**
  * url_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#url_list DataThunderWebCategoryOper#url_list}
  */
  readonly urlList?: DataThunderWebCategoryOperWebReputationInterceptedUrlsOperUrlListStruct[] | cdktf.IResolvable;
}

export function dataThunderWebCategoryOperWebReputationInterceptedUrlsOperToTerraform(struct?: DataThunderWebCategoryOperWebReputationInterceptedUrlsOperOutputReference | DataThunderWebCategoryOperWebReputationInterceptedUrlsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_urls: cdktf.stringToTerraform(struct!.allUrls),
    number_of_urls: cdktf.numberToTerraform(struct!.numberOfUrls),
    url_name: cdktf.stringToTerraform(struct!.urlName),
    url_list: cdktf.listMapper(dataThunderWebCategoryOperWebReputationInterceptedUrlsOperUrlListStructToTerraform, true)(struct!.urlList),
  }
}


export function dataThunderWebCategoryOperWebReputationInterceptedUrlsOperToHclTerraform(struct?: DataThunderWebCategoryOperWebReputationInterceptedUrlsOperOutputReference | DataThunderWebCategoryOperWebReputationInterceptedUrlsOper): any {
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
      value: cdktf.listMapperHcl(dataThunderWebCategoryOperWebReputationInterceptedUrlsOperUrlListStructToHclTerraform, true)(struct!.urlList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryOperWebReputationInterceptedUrlsOperUrlListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryOperWebReputationInterceptedUrlsOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryOperWebReputationInterceptedUrlsOper | undefined {
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

  public set internalValue(value: DataThunderWebCategoryOperWebReputationInterceptedUrlsOper | undefined) {
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
  private _urlList = new DataThunderWebCategoryOperWebReputationInterceptedUrlsOperUrlListStructList(this, "url_list", false);
  public get urlList() {
    return this._urlList;
  }
  public putUrlList(value: DataThunderWebCategoryOperWebReputationInterceptedUrlsOperUrlListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderWebCategoryOperWebReputationInterceptedUrls {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#oper DataThunderWebCategoryOper#oper}
  */
  readonly oper?: DataThunderWebCategoryOperWebReputationInterceptedUrlsOper;
}

export function dataThunderWebCategoryOperWebReputationInterceptedUrlsToTerraform(struct?: DataThunderWebCategoryOperWebReputationInterceptedUrlsOutputReference | DataThunderWebCategoryOperWebReputationInterceptedUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderWebCategoryOperWebReputationInterceptedUrlsOperToTerraform(struct!.oper),
  }
}


export function dataThunderWebCategoryOperWebReputationInterceptedUrlsToHclTerraform(struct?: DataThunderWebCategoryOperWebReputationInterceptedUrlsOutputReference | DataThunderWebCategoryOperWebReputationInterceptedUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderWebCategoryOperWebReputationInterceptedUrlsOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryOperWebReputationInterceptedUrlsOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryOperWebReputationInterceptedUrlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryOperWebReputationInterceptedUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryOperWebReputationInterceptedUrls | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderWebCategoryOperWebReputationInterceptedUrlsOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderWebCategoryOperWebReputationInterceptedUrlsOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderWebCategoryOperWebReputationOperUrlListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#url_name DataThunderWebCategoryOper#url_name}
  */
  readonly urlName?: string;
}

export function dataThunderWebCategoryOperWebReputationOperUrlListStructToTerraform(struct?: DataThunderWebCategoryOperWebReputationOperUrlListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url_name: cdktf.stringToTerraform(struct!.urlName),
  }
}


export function dataThunderWebCategoryOperWebReputationOperUrlListStructToHclTerraform(struct?: DataThunderWebCategoryOperWebReputationOperUrlListStruct | cdktf.IResolvable): any {
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

export class DataThunderWebCategoryOperWebReputationOperUrlListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderWebCategoryOperWebReputationOperUrlListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderWebCategoryOperWebReputationOperUrlListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderWebCategoryOperWebReputationOperUrlListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderWebCategoryOperWebReputationOperUrlListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderWebCategoryOperWebReputationOperUrlListStructOutputReference {
    return new DataThunderWebCategoryOperWebReputationOperUrlListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderWebCategoryOperWebReputationOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#all_urls DataThunderWebCategoryOper#all_urls}
  */
  readonly allUrls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#number_of_urls DataThunderWebCategoryOper#number_of_urls}
  */
  readonly numberOfUrls?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#url_name DataThunderWebCategoryOper#url_name}
  */
  readonly urlName?: string;
  /**
  * url_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#url_list DataThunderWebCategoryOper#url_list}
  */
  readonly urlList?: DataThunderWebCategoryOperWebReputationOperUrlListStruct[] | cdktf.IResolvable;
}

export function dataThunderWebCategoryOperWebReputationOperToTerraform(struct?: DataThunderWebCategoryOperWebReputationOperOutputReference | DataThunderWebCategoryOperWebReputationOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_urls: cdktf.stringToTerraform(struct!.allUrls),
    number_of_urls: cdktf.numberToTerraform(struct!.numberOfUrls),
    url_name: cdktf.stringToTerraform(struct!.urlName),
    url_list: cdktf.listMapper(dataThunderWebCategoryOperWebReputationOperUrlListStructToTerraform, true)(struct!.urlList),
  }
}


export function dataThunderWebCategoryOperWebReputationOperToHclTerraform(struct?: DataThunderWebCategoryOperWebReputationOperOutputReference | DataThunderWebCategoryOperWebReputationOper): any {
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
      value: cdktf.listMapperHcl(dataThunderWebCategoryOperWebReputationOperUrlListStructToHclTerraform, true)(struct!.urlList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryOperWebReputationOperUrlListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryOperWebReputationOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryOperWebReputationOper | undefined {
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

  public set internalValue(value: DataThunderWebCategoryOperWebReputationOper | undefined) {
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
  private _urlList = new DataThunderWebCategoryOperWebReputationOperUrlListStructList(this, "url_list", false);
  public get urlList() {
    return this._urlList;
  }
  public putUrlList(value: DataThunderWebCategoryOperWebReputationOperUrlListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderWebCategoryOperWebReputationUrlOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#local_db_only DataThunderWebCategoryOper#local_db_only}
  */
  readonly localDbOnly?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#name DataThunderWebCategoryOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#reputation_score DataThunderWebCategoryOper#reputation_score}
  */
  readonly reputationScore?: string;
}

export function dataThunderWebCategoryOperWebReputationUrlOperToTerraform(struct?: DataThunderWebCategoryOperWebReputationUrlOperOutputReference | DataThunderWebCategoryOperWebReputationUrlOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    local_db_only: cdktf.numberToTerraform(struct!.localDbOnly),
    name: cdktf.stringToTerraform(struct!.name),
    reputation_score: cdktf.stringToTerraform(struct!.reputationScore),
  }
}


export function dataThunderWebCategoryOperWebReputationUrlOperToHclTerraform(struct?: DataThunderWebCategoryOperWebReputationUrlOperOutputReference | DataThunderWebCategoryOperWebReputationUrlOper): any {
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
    reputation_score: {
      value: cdktf.stringToHclTerraform(struct!.reputationScore),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryOperWebReputationUrlOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryOperWebReputationUrlOper | undefined {
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
    if (this._reputationScore !== undefined) {
      hasAnyValues = true;
      internalValueResult.reputationScore = this._reputationScore;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryOperWebReputationUrlOper | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._localDbOnly = undefined;
      this._name = undefined;
      this._reputationScore = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._localDbOnly = value.localDbOnly;
      this._name = value.name;
      this._reputationScore = value.reputationScore;
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

  // reputation_score - computed: false, optional: true, required: false
  private _reputationScore?: string; 
  public get reputationScore() {
    return this.getStringAttribute('reputation_score');
  }
  public set reputationScore(value: string) {
    this._reputationScore = value;
  }
  public resetReputationScore() {
    this._reputationScore = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reputationScoreInput() {
    return this._reputationScore;
  }
}
export interface DataThunderWebCategoryOperWebReputationUrl {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#oper DataThunderWebCategoryOper#oper}
  */
  readonly oper?: DataThunderWebCategoryOperWebReputationUrlOper;
}

export function dataThunderWebCategoryOperWebReputationUrlToTerraform(struct?: DataThunderWebCategoryOperWebReputationUrlOutputReference | DataThunderWebCategoryOperWebReputationUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderWebCategoryOperWebReputationUrlOperToTerraform(struct!.oper),
  }
}


export function dataThunderWebCategoryOperWebReputationUrlToHclTerraform(struct?: DataThunderWebCategoryOperWebReputationUrlOutputReference | DataThunderWebCategoryOperWebReputationUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderWebCategoryOperWebReputationUrlOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryOperWebReputationUrlOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryOperWebReputationUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryOperWebReputationUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryOperWebReputationUrl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oper.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oper.internalValue = value.oper;
    }
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderWebCategoryOperWebReputationUrlOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderWebCategoryOperWebReputationUrlOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }
}
export interface DataThunderWebCategoryOperWebReputation {
  /**
  * bypassed_urls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#bypassed_urls DataThunderWebCategoryOper#bypassed_urls}
  */
  readonly bypassedUrls?: DataThunderWebCategoryOperWebReputationBypassedUrls;
  /**
  * intercepted_urls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#intercepted_urls DataThunderWebCategoryOper#intercepted_urls}
  */
  readonly interceptedUrls?: DataThunderWebCategoryOperWebReputationInterceptedUrls;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#oper DataThunderWebCategoryOper#oper}
  */
  readonly oper?: DataThunderWebCategoryOperWebReputationOper;
  /**
  * url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#url DataThunderWebCategoryOper#url}
  */
  readonly url?: DataThunderWebCategoryOperWebReputationUrl;
}

export function dataThunderWebCategoryOperWebReputationToTerraform(struct?: DataThunderWebCategoryOperWebReputationOutputReference | DataThunderWebCategoryOperWebReputation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bypassed_urls: dataThunderWebCategoryOperWebReputationBypassedUrlsToTerraform(struct!.bypassedUrls),
    intercepted_urls: dataThunderWebCategoryOperWebReputationInterceptedUrlsToTerraform(struct!.interceptedUrls),
    oper: dataThunderWebCategoryOperWebReputationOperToTerraform(struct!.oper),
    url: dataThunderWebCategoryOperWebReputationUrlToTerraform(struct!.url),
  }
}


export function dataThunderWebCategoryOperWebReputationToHclTerraform(struct?: DataThunderWebCategoryOperWebReputationOutputReference | DataThunderWebCategoryOperWebReputation): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bypassed_urls: {
      value: dataThunderWebCategoryOperWebReputationBypassedUrlsToHclTerraform(struct!.bypassedUrls),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryOperWebReputationBypassedUrlsList",
    },
    intercepted_urls: {
      value: dataThunderWebCategoryOperWebReputationInterceptedUrlsToHclTerraform(struct!.interceptedUrls),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryOperWebReputationInterceptedUrlsList",
    },
    oper: {
      value: dataThunderWebCategoryOperWebReputationOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryOperWebReputationOperList",
    },
    url: {
      value: dataThunderWebCategoryOperWebReputationUrlToHclTerraform(struct!.url),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryOperWebReputationUrlList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryOperWebReputationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryOperWebReputation | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bypassedUrls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bypassedUrls = this._bypassedUrls?.internalValue;
    }
    if (this._interceptedUrls?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.interceptedUrls = this._interceptedUrls?.internalValue;
    }
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    if (this._url?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryOperWebReputation | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bypassedUrls.internalValue = undefined;
      this._interceptedUrls.internalValue = undefined;
      this._oper.internalValue = undefined;
      this._url.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bypassedUrls.internalValue = value.bypassedUrls;
      this._interceptedUrls.internalValue = value.interceptedUrls;
      this._oper.internalValue = value.oper;
      this._url.internalValue = value.url;
    }
  }

  // bypassed_urls - computed: false, optional: true, required: false
  private _bypassedUrls = new DataThunderWebCategoryOperWebReputationBypassedUrlsOutputReference(this, "bypassed_urls");
  public get bypassedUrls() {
    return this._bypassedUrls;
  }
  public putBypassedUrls(value: DataThunderWebCategoryOperWebReputationBypassedUrls) {
    this._bypassedUrls.internalValue = value;
  }
  public resetBypassedUrls() {
    this._bypassedUrls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassedUrlsInput() {
    return this._bypassedUrls.internalValue;
  }

  // intercepted_urls - computed: false, optional: true, required: false
  private _interceptedUrls = new DataThunderWebCategoryOperWebReputationInterceptedUrlsOutputReference(this, "intercepted_urls");
  public get interceptedUrls() {
    return this._interceptedUrls;
  }
  public putInterceptedUrls(value: DataThunderWebCategoryOperWebReputationInterceptedUrls) {
    this._interceptedUrls.internalValue = value;
  }
  public resetInterceptedUrls() {
    this._interceptedUrls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interceptedUrlsInput() {
    return this._interceptedUrls.internalValue;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderWebCategoryOperWebReputationOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderWebCategoryOperWebReputationOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url = new DataThunderWebCategoryOperWebReputationUrlOutputReference(this, "url");
  public get url() {
    return this._url;
  }
  public putUrl(value: DataThunderWebCategoryOperWebReputationUrl) {
    this._url.internalValue = value;
  }
  public resetUrl() {
    this._url.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper thunder_web_category_oper}
*/
export class DataThunderWebCategoryOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_web_category_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderWebCategoryOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderWebCategoryOper to import
  * @param importFromId The id of the existing DataThunderWebCategoryOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderWebCategoryOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_web_category_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_oper thunder_web_category_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderWebCategoryOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderWebCategoryOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_web_category_oper',
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
    this._bypassedUrls.internalValue = config.bypassedUrls;
    this._interceptedUrls.internalValue = config.interceptedUrls;
    this._license.internalValue = config.license;
    this._oper.internalValue = config.oper;
    this._statistics.internalValue = config.statistics;
    this._url.internalValue = config.url;
    this._webReputation.internalValue = config.webReputation;
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

  // bypassed_urls - computed: false, optional: true, required: false
  private _bypassedUrls = new DataThunderWebCategoryOperBypassedUrlsOutputReference(this, "bypassed_urls");
  public get bypassedUrls() {
    return this._bypassedUrls;
  }
  public putBypassedUrls(value: DataThunderWebCategoryOperBypassedUrls) {
    this._bypassedUrls.internalValue = value;
  }
  public resetBypassedUrls() {
    this._bypassedUrls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bypassedUrlsInput() {
    return this._bypassedUrls.internalValue;
  }

  // intercepted_urls - computed: false, optional: true, required: false
  private _interceptedUrls = new DataThunderWebCategoryOperInterceptedUrlsOutputReference(this, "intercepted_urls");
  public get interceptedUrls() {
    return this._interceptedUrls;
  }
  public putInterceptedUrls(value: DataThunderWebCategoryOperInterceptedUrls) {
    this._interceptedUrls.internalValue = value;
  }
  public resetInterceptedUrls() {
    this._interceptedUrls.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get interceptedUrlsInput() {
    return this._interceptedUrls.internalValue;
  }

  // license - computed: false, optional: true, required: false
  private _license = new DataThunderWebCategoryOperLicenseOutputReference(this, "license");
  public get license() {
    return this._license;
  }
  public putLicense(value: DataThunderWebCategoryOperLicense) {
    this._license.internalValue = value;
  }
  public resetLicense() {
    this._license.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get licenseInput() {
    return this._license.internalValue;
  }

  // oper - computed: false, optional: true, required: false
  private _oper = new DataThunderWebCategoryOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderWebCategoryOperOper) {
    this._oper.internalValue = value;
  }
  public resetOper() {
    this._oper.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operInput() {
    return this._oper.internalValue;
  }

  // statistics - computed: false, optional: true, required: false
  private _statistics = new DataThunderWebCategoryOperStatisticsOutputReference(this, "statistics");
  public get statistics() {
    return this._statistics;
  }
  public putStatistics(value: DataThunderWebCategoryOperStatistics) {
    this._statistics.internalValue = value;
  }
  public resetStatistics() {
    this._statistics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statisticsInput() {
    return this._statistics.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url = new DataThunderWebCategoryOperUrlOutputReference(this, "url");
  public get url() {
    return this._url;
  }
  public putUrl(value: DataThunderWebCategoryOperUrl) {
    this._url.internalValue = value;
  }
  public resetUrl() {
    this._url.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url.internalValue;
  }

  // web_reputation - computed: false, optional: true, required: false
  private _webReputation = new DataThunderWebCategoryOperWebReputationOutputReference(this, "web_reputation");
  public get webReputation() {
    return this._webReputation;
  }
  public putWebReputation(value: DataThunderWebCategoryOperWebReputation) {
    this._webReputation.internalValue = value;
  }
  public resetWebReputation() {
    this._webReputation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get webReputationInput() {
    return this._webReputation.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      bypassed_urls: dataThunderWebCategoryOperBypassedUrlsToTerraform(this._bypassedUrls.internalValue),
      intercepted_urls: dataThunderWebCategoryOperInterceptedUrlsToTerraform(this._interceptedUrls.internalValue),
      license: dataThunderWebCategoryOperLicenseToTerraform(this._license.internalValue),
      oper: dataThunderWebCategoryOperOperToTerraform(this._oper.internalValue),
      statistics: dataThunderWebCategoryOperStatisticsToTerraform(this._statistics.internalValue),
      url: dataThunderWebCategoryOperUrlToTerraform(this._url.internalValue),
      web_reputation: dataThunderWebCategoryOperWebReputationToTerraform(this._webReputation.internalValue),
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
      bypassed_urls: {
        value: dataThunderWebCategoryOperBypassedUrlsToHclTerraform(this._bypassedUrls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderWebCategoryOperBypassedUrlsList",
      },
      intercepted_urls: {
        value: dataThunderWebCategoryOperInterceptedUrlsToHclTerraform(this._interceptedUrls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderWebCategoryOperInterceptedUrlsList",
      },
      license: {
        value: dataThunderWebCategoryOperLicenseToHclTerraform(this._license.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderWebCategoryOperLicenseList",
      },
      oper: {
        value: dataThunderWebCategoryOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderWebCategoryOperOperList",
      },
      statistics: {
        value: dataThunderWebCategoryOperStatisticsToHclTerraform(this._statistics.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderWebCategoryOperStatisticsList",
      },
      url: {
        value: dataThunderWebCategoryOperUrlToHclTerraform(this._url.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderWebCategoryOperUrlList",
      },
      web_reputation: {
        value: dataThunderWebCategoryOperWebReputationToHclTerraform(this._webReputation.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderWebCategoryOperWebReputationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
