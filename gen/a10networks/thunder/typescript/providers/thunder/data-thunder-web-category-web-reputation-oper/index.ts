// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataThunderWebCategoryWebReputationOperConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#id DataThunderWebCategoryWebReputationOper#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * bypassed_urls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#bypassed_urls DataThunderWebCategoryWebReputationOper#bypassed_urls}
  */
  readonly bypassedUrls?: DataThunderWebCategoryWebReputationOperBypassedUrls;
  /**
  * intercepted_urls block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#intercepted_urls DataThunderWebCategoryWebReputationOper#intercepted_urls}
  */
  readonly interceptedUrls?: DataThunderWebCategoryWebReputationOperInterceptedUrls;
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#oper DataThunderWebCategoryWebReputationOper#oper}
  */
  readonly oper?: DataThunderWebCategoryWebReputationOperOper;
  /**
  * url block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#url DataThunderWebCategoryWebReputationOper#url}
  */
  readonly url?: DataThunderWebCategoryWebReputationOperUrl;
}
export interface DataThunderWebCategoryWebReputationOperBypassedUrlsOperUrlListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#url_name DataThunderWebCategoryWebReputationOper#url_name}
  */
  readonly urlName?: string;
}

export function dataThunderWebCategoryWebReputationOperBypassedUrlsOperUrlListStructToTerraform(struct?: DataThunderWebCategoryWebReputationOperBypassedUrlsOperUrlListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url_name: cdktf.stringToTerraform(struct!.urlName),
  }
}


export function dataThunderWebCategoryWebReputationOperBypassedUrlsOperUrlListStructToHclTerraform(struct?: DataThunderWebCategoryWebReputationOperBypassedUrlsOperUrlListStruct | cdktf.IResolvable): any {
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

export class DataThunderWebCategoryWebReputationOperBypassedUrlsOperUrlListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderWebCategoryWebReputationOperBypassedUrlsOperUrlListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderWebCategoryWebReputationOperBypassedUrlsOperUrlListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderWebCategoryWebReputationOperBypassedUrlsOperUrlListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderWebCategoryWebReputationOperBypassedUrlsOperUrlListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderWebCategoryWebReputationOperBypassedUrlsOperUrlListStructOutputReference {
    return new DataThunderWebCategoryWebReputationOperBypassedUrlsOperUrlListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderWebCategoryWebReputationOperBypassedUrlsOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#all_urls DataThunderWebCategoryWebReputationOper#all_urls}
  */
  readonly allUrls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#number_of_urls DataThunderWebCategoryWebReputationOper#number_of_urls}
  */
  readonly numberOfUrls?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#url_name DataThunderWebCategoryWebReputationOper#url_name}
  */
  readonly urlName?: string;
  /**
  * url_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#url_list DataThunderWebCategoryWebReputationOper#url_list}
  */
  readonly urlList?: DataThunderWebCategoryWebReputationOperBypassedUrlsOperUrlListStruct[] | cdktf.IResolvable;
}

export function dataThunderWebCategoryWebReputationOperBypassedUrlsOperToTerraform(struct?: DataThunderWebCategoryWebReputationOperBypassedUrlsOperOutputReference | DataThunderWebCategoryWebReputationOperBypassedUrlsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_urls: cdktf.stringToTerraform(struct!.allUrls),
    number_of_urls: cdktf.numberToTerraform(struct!.numberOfUrls),
    url_name: cdktf.stringToTerraform(struct!.urlName),
    url_list: cdktf.listMapper(dataThunderWebCategoryWebReputationOperBypassedUrlsOperUrlListStructToTerraform, true)(struct!.urlList),
  }
}


export function dataThunderWebCategoryWebReputationOperBypassedUrlsOperToHclTerraform(struct?: DataThunderWebCategoryWebReputationOperBypassedUrlsOperOutputReference | DataThunderWebCategoryWebReputationOperBypassedUrlsOper): any {
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
      value: cdktf.listMapperHcl(dataThunderWebCategoryWebReputationOperBypassedUrlsOperUrlListStructToHclTerraform, true)(struct!.urlList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryWebReputationOperBypassedUrlsOperUrlListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryWebReputationOperBypassedUrlsOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryWebReputationOperBypassedUrlsOper | undefined {
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

  public set internalValue(value: DataThunderWebCategoryWebReputationOperBypassedUrlsOper | undefined) {
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
  private _urlList = new DataThunderWebCategoryWebReputationOperBypassedUrlsOperUrlListStructList(this, "url_list", false);
  public get urlList() {
    return this._urlList;
  }
  public putUrlList(value: DataThunderWebCategoryWebReputationOperBypassedUrlsOperUrlListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderWebCategoryWebReputationOperBypassedUrls {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#oper DataThunderWebCategoryWebReputationOper#oper}
  */
  readonly oper?: DataThunderWebCategoryWebReputationOperBypassedUrlsOper;
}

export function dataThunderWebCategoryWebReputationOperBypassedUrlsToTerraform(struct?: DataThunderWebCategoryWebReputationOperBypassedUrlsOutputReference | DataThunderWebCategoryWebReputationOperBypassedUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderWebCategoryWebReputationOperBypassedUrlsOperToTerraform(struct!.oper),
  }
}


export function dataThunderWebCategoryWebReputationOperBypassedUrlsToHclTerraform(struct?: DataThunderWebCategoryWebReputationOperBypassedUrlsOutputReference | DataThunderWebCategoryWebReputationOperBypassedUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderWebCategoryWebReputationOperBypassedUrlsOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryWebReputationOperBypassedUrlsOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryWebReputationOperBypassedUrlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryWebReputationOperBypassedUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryWebReputationOperBypassedUrls | undefined) {
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
  private _oper = new DataThunderWebCategoryWebReputationOperBypassedUrlsOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderWebCategoryWebReputationOperBypassedUrlsOper) {
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
export interface DataThunderWebCategoryWebReputationOperInterceptedUrlsOperUrlListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#url_name DataThunderWebCategoryWebReputationOper#url_name}
  */
  readonly urlName?: string;
}

export function dataThunderWebCategoryWebReputationOperInterceptedUrlsOperUrlListStructToTerraform(struct?: DataThunderWebCategoryWebReputationOperInterceptedUrlsOperUrlListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url_name: cdktf.stringToTerraform(struct!.urlName),
  }
}


export function dataThunderWebCategoryWebReputationOperInterceptedUrlsOperUrlListStructToHclTerraform(struct?: DataThunderWebCategoryWebReputationOperInterceptedUrlsOperUrlListStruct | cdktf.IResolvable): any {
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

export class DataThunderWebCategoryWebReputationOperInterceptedUrlsOperUrlListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderWebCategoryWebReputationOperInterceptedUrlsOperUrlListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderWebCategoryWebReputationOperInterceptedUrlsOperUrlListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderWebCategoryWebReputationOperInterceptedUrlsOperUrlListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderWebCategoryWebReputationOperInterceptedUrlsOperUrlListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderWebCategoryWebReputationOperInterceptedUrlsOperUrlListStructOutputReference {
    return new DataThunderWebCategoryWebReputationOperInterceptedUrlsOperUrlListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderWebCategoryWebReputationOperInterceptedUrlsOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#all_urls DataThunderWebCategoryWebReputationOper#all_urls}
  */
  readonly allUrls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#number_of_urls DataThunderWebCategoryWebReputationOper#number_of_urls}
  */
  readonly numberOfUrls?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#url_name DataThunderWebCategoryWebReputationOper#url_name}
  */
  readonly urlName?: string;
  /**
  * url_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#url_list DataThunderWebCategoryWebReputationOper#url_list}
  */
  readonly urlList?: DataThunderWebCategoryWebReputationOperInterceptedUrlsOperUrlListStruct[] | cdktf.IResolvable;
}

export function dataThunderWebCategoryWebReputationOperInterceptedUrlsOperToTerraform(struct?: DataThunderWebCategoryWebReputationOperInterceptedUrlsOperOutputReference | DataThunderWebCategoryWebReputationOperInterceptedUrlsOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_urls: cdktf.stringToTerraform(struct!.allUrls),
    number_of_urls: cdktf.numberToTerraform(struct!.numberOfUrls),
    url_name: cdktf.stringToTerraform(struct!.urlName),
    url_list: cdktf.listMapper(dataThunderWebCategoryWebReputationOperInterceptedUrlsOperUrlListStructToTerraform, true)(struct!.urlList),
  }
}


export function dataThunderWebCategoryWebReputationOperInterceptedUrlsOperToHclTerraform(struct?: DataThunderWebCategoryWebReputationOperInterceptedUrlsOperOutputReference | DataThunderWebCategoryWebReputationOperInterceptedUrlsOper): any {
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
      value: cdktf.listMapperHcl(dataThunderWebCategoryWebReputationOperInterceptedUrlsOperUrlListStructToHclTerraform, true)(struct!.urlList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryWebReputationOperInterceptedUrlsOperUrlListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryWebReputationOperInterceptedUrlsOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryWebReputationOperInterceptedUrlsOper | undefined {
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

  public set internalValue(value: DataThunderWebCategoryWebReputationOperInterceptedUrlsOper | undefined) {
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
  private _urlList = new DataThunderWebCategoryWebReputationOperInterceptedUrlsOperUrlListStructList(this, "url_list", false);
  public get urlList() {
    return this._urlList;
  }
  public putUrlList(value: DataThunderWebCategoryWebReputationOperInterceptedUrlsOperUrlListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderWebCategoryWebReputationOperInterceptedUrls {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#oper DataThunderWebCategoryWebReputationOper#oper}
  */
  readonly oper?: DataThunderWebCategoryWebReputationOperInterceptedUrlsOper;
}

export function dataThunderWebCategoryWebReputationOperInterceptedUrlsToTerraform(struct?: DataThunderWebCategoryWebReputationOperInterceptedUrlsOutputReference | DataThunderWebCategoryWebReputationOperInterceptedUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderWebCategoryWebReputationOperInterceptedUrlsOperToTerraform(struct!.oper),
  }
}


export function dataThunderWebCategoryWebReputationOperInterceptedUrlsToHclTerraform(struct?: DataThunderWebCategoryWebReputationOperInterceptedUrlsOutputReference | DataThunderWebCategoryWebReputationOperInterceptedUrls): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderWebCategoryWebReputationOperInterceptedUrlsOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryWebReputationOperInterceptedUrlsOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryWebReputationOperInterceptedUrlsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryWebReputationOperInterceptedUrls | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryWebReputationOperInterceptedUrls | undefined) {
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
  private _oper = new DataThunderWebCategoryWebReputationOperInterceptedUrlsOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderWebCategoryWebReputationOperInterceptedUrlsOper) {
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
export interface DataThunderWebCategoryWebReputationOperOperUrlListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#url_name DataThunderWebCategoryWebReputationOper#url_name}
  */
  readonly urlName?: string;
}

export function dataThunderWebCategoryWebReputationOperOperUrlListStructToTerraform(struct?: DataThunderWebCategoryWebReputationOperOperUrlListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    url_name: cdktf.stringToTerraform(struct!.urlName),
  }
}


export function dataThunderWebCategoryWebReputationOperOperUrlListStructToHclTerraform(struct?: DataThunderWebCategoryWebReputationOperOperUrlListStruct | cdktf.IResolvable): any {
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

export class DataThunderWebCategoryWebReputationOperOperUrlListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataThunderWebCategoryWebReputationOperOperUrlListStruct | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataThunderWebCategoryWebReputationOperOperUrlListStruct | cdktf.IResolvable | undefined) {
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

export class DataThunderWebCategoryWebReputationOperOperUrlListStructList extends cdktf.ComplexList {
  public internalValue? : DataThunderWebCategoryWebReputationOperOperUrlListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataThunderWebCategoryWebReputationOperOperUrlListStructOutputReference {
    return new DataThunderWebCategoryWebReputationOperOperUrlListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataThunderWebCategoryWebReputationOperOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#all_urls DataThunderWebCategoryWebReputationOper#all_urls}
  */
  readonly allUrls?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#number_of_urls DataThunderWebCategoryWebReputationOper#number_of_urls}
  */
  readonly numberOfUrls?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#url_name DataThunderWebCategoryWebReputationOper#url_name}
  */
  readonly urlName?: string;
  /**
  * url_list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#url_list DataThunderWebCategoryWebReputationOper#url_list}
  */
  readonly urlList?: DataThunderWebCategoryWebReputationOperOperUrlListStruct[] | cdktf.IResolvable;
}

export function dataThunderWebCategoryWebReputationOperOperToTerraform(struct?: DataThunderWebCategoryWebReputationOperOperOutputReference | DataThunderWebCategoryWebReputationOperOper): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    all_urls: cdktf.stringToTerraform(struct!.allUrls),
    number_of_urls: cdktf.numberToTerraform(struct!.numberOfUrls),
    url_name: cdktf.stringToTerraform(struct!.urlName),
    url_list: cdktf.listMapper(dataThunderWebCategoryWebReputationOperOperUrlListStructToTerraform, true)(struct!.urlList),
  }
}


export function dataThunderWebCategoryWebReputationOperOperToHclTerraform(struct?: DataThunderWebCategoryWebReputationOperOperOutputReference | DataThunderWebCategoryWebReputationOperOper): any {
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
      value: cdktf.listMapperHcl(dataThunderWebCategoryWebReputationOperOperUrlListStructToHclTerraform, true)(struct!.urlList),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryWebReputationOperOperUrlListStructList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryWebReputationOperOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryWebReputationOperOper | undefined {
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

  public set internalValue(value: DataThunderWebCategoryWebReputationOperOper | undefined) {
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
  private _urlList = new DataThunderWebCategoryWebReputationOperOperUrlListStructList(this, "url_list", false);
  public get urlList() {
    return this._urlList;
  }
  public putUrlList(value: DataThunderWebCategoryWebReputationOperOperUrlListStruct[] | cdktf.IResolvable) {
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
export interface DataThunderWebCategoryWebReputationOperUrlOper {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#local_db_only DataThunderWebCategoryWebReputationOper#local_db_only}
  */
  readonly localDbOnly?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#name DataThunderWebCategoryWebReputationOper#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#reputation_score DataThunderWebCategoryWebReputationOper#reputation_score}
  */
  readonly reputationScore?: string;
}

export function dataThunderWebCategoryWebReputationOperUrlOperToTerraform(struct?: DataThunderWebCategoryWebReputationOperUrlOperOutputReference | DataThunderWebCategoryWebReputationOperUrlOper): any {
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


export function dataThunderWebCategoryWebReputationOperUrlOperToHclTerraform(struct?: DataThunderWebCategoryWebReputationOperUrlOperOutputReference | DataThunderWebCategoryWebReputationOperUrlOper): any {
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

export class DataThunderWebCategoryWebReputationOperUrlOperOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryWebReputationOperUrlOper | undefined {
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

  public set internalValue(value: DataThunderWebCategoryWebReputationOperUrlOper | undefined) {
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
export interface DataThunderWebCategoryWebReputationOperUrl {
  /**
  * oper block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#oper DataThunderWebCategoryWebReputationOper#oper}
  */
  readonly oper?: DataThunderWebCategoryWebReputationOperUrlOper;
}

export function dataThunderWebCategoryWebReputationOperUrlToTerraform(struct?: DataThunderWebCategoryWebReputationOperUrlOutputReference | DataThunderWebCategoryWebReputationOperUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    oper: dataThunderWebCategoryWebReputationOperUrlOperToTerraform(struct!.oper),
  }
}


export function dataThunderWebCategoryWebReputationOperUrlToHclTerraform(struct?: DataThunderWebCategoryWebReputationOperUrlOutputReference | DataThunderWebCategoryWebReputationOperUrl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    oper: {
      value: dataThunderWebCategoryWebReputationOperUrlOperToHclTerraform(struct!.oper),
      isBlock: true,
      type: "list",
      storageClassType: "DataThunderWebCategoryWebReputationOperUrlOperList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataThunderWebCategoryWebReputationOperUrlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataThunderWebCategoryWebReputationOperUrl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oper?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oper = this._oper?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataThunderWebCategoryWebReputationOperUrl | undefined) {
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
  private _oper = new DataThunderWebCategoryWebReputationOperUrlOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderWebCategoryWebReputationOperUrlOper) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper thunder_web_category_web_reputation_oper}
*/
export class DataThunderWebCategoryWebReputationOper extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_web_category_web_reputation_oper";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataThunderWebCategoryWebReputationOper resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataThunderWebCategoryWebReputationOper to import
  * @param importFromId The id of the existing DataThunderWebCategoryWebReputationOper that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataThunderWebCategoryWebReputationOper to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_web_category_web_reputation_oper", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/data-sources/web_category_web_reputation_oper thunder_web_category_web_reputation_oper} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataThunderWebCategoryWebReputationOperConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataThunderWebCategoryWebReputationOperConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'thunder_web_category_web_reputation_oper',
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
    this._oper.internalValue = config.oper;
    this._url.internalValue = config.url;
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
  private _bypassedUrls = new DataThunderWebCategoryWebReputationOperBypassedUrlsOutputReference(this, "bypassed_urls");
  public get bypassedUrls() {
    return this._bypassedUrls;
  }
  public putBypassedUrls(value: DataThunderWebCategoryWebReputationOperBypassedUrls) {
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
  private _interceptedUrls = new DataThunderWebCategoryWebReputationOperInterceptedUrlsOutputReference(this, "intercepted_urls");
  public get interceptedUrls() {
    return this._interceptedUrls;
  }
  public putInterceptedUrls(value: DataThunderWebCategoryWebReputationOperInterceptedUrls) {
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
  private _oper = new DataThunderWebCategoryWebReputationOperOperOutputReference(this, "oper");
  public get oper() {
    return this._oper;
  }
  public putOper(value: DataThunderWebCategoryWebReputationOperOper) {
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
  private _url = new DataThunderWebCategoryWebReputationOperUrlOutputReference(this, "url");
  public get url() {
    return this._url;
  }
  public putUrl(value: DataThunderWebCategoryWebReputationOperUrl) {
    this._url.internalValue = value;
  }
  public resetUrl() {
    this._url.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      bypassed_urls: dataThunderWebCategoryWebReputationOperBypassedUrlsToTerraform(this._bypassedUrls.internalValue),
      intercepted_urls: dataThunderWebCategoryWebReputationOperInterceptedUrlsToTerraform(this._interceptedUrls.internalValue),
      oper: dataThunderWebCategoryWebReputationOperOperToTerraform(this._oper.internalValue),
      url: dataThunderWebCategoryWebReputationOperUrlToTerraform(this._url.internalValue),
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
        value: dataThunderWebCategoryWebReputationOperBypassedUrlsToHclTerraform(this._bypassedUrls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderWebCategoryWebReputationOperBypassedUrlsList",
      },
      intercepted_urls: {
        value: dataThunderWebCategoryWebReputationOperInterceptedUrlsToHclTerraform(this._interceptedUrls.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderWebCategoryWebReputationOperInterceptedUrlsList",
      },
      oper: {
        value: dataThunderWebCategoryWebReputationOperOperToHclTerraform(this._oper.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderWebCategoryWebReputationOperOperList",
      },
      url: {
        value: dataThunderWebCategoryWebReputationOperUrlToHclTerraform(this._url.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataThunderWebCategoryWebReputationOperUrlList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
