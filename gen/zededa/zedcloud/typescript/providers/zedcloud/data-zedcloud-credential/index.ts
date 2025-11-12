// https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataZedcloudCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/credential#id DataZedcloudCredential#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * list block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/credential#list DataZedcloudCredential#list}
  */
  readonly list?: DataZedcloudCredentialListStruct[] | cdktf.IResolvable;
  /**
  * next block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/credential#next DataZedcloudCredential#next}
  */
  readonly next?: DataZedcloudCredentialNext[] | cdktf.IResolvable;
  /**
  * summary_by_state block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/credential#summary_by_state DataZedcloudCredential#summary_by_state}
  */
  readonly summaryByState?: DataZedcloudCredentialSummaryByState[] | cdktf.IResolvable;
}
export interface DataZedcloudCredentialListStruct {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/credential#current_cred DataZedcloudCredential#current_cred}
  */
  readonly currentCred?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/credential#forgot DataZedcloudCredential#forgot}
  */
  readonly forgot?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/credential#new_cred DataZedcloudCredential#new_cred}
  */
  readonly newCred?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/credential#owner DataZedcloudCredential#owner}
  */
  readonly owner?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/credential#salt DataZedcloudCredential#salt}
  */
  readonly salt?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/credential#type DataZedcloudCredential#type}
  */
  readonly type?: string;
}

export function dataZedcloudCredentialListStructToTerraform(struct?: DataZedcloudCredentialListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    current_cred: cdktf.stringToTerraform(struct!.currentCred),
    forgot: cdktf.booleanToTerraform(struct!.forgot),
    new_cred: cdktf.stringToTerraform(struct!.newCred),
    owner: cdktf.stringToTerraform(struct!.owner),
    salt: cdktf.numberToTerraform(struct!.salt),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataZedcloudCredentialListStructToHclTerraform(struct?: DataZedcloudCredentialListStruct | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    current_cred: {
      value: cdktf.stringToHclTerraform(struct!.currentCred),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forgot: {
      value: cdktf.booleanToHclTerraform(struct!.forgot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    new_cred: {
      value: cdktf.stringToHclTerraform(struct!.newCred),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner: {
      value: cdktf.stringToHclTerraform(struct!.owner),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    salt: {
      value: cdktf.numberToHclTerraform(struct!.salt),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudCredentialListStructOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudCredentialListStruct | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._currentCred !== undefined) {
      hasAnyValues = true;
      internalValueResult.currentCred = this._currentCred;
    }
    if (this._forgot !== undefined) {
      hasAnyValues = true;
      internalValueResult.forgot = this._forgot;
    }
    if (this._newCred !== undefined) {
      hasAnyValues = true;
      internalValueResult.newCred = this._newCred;
    }
    if (this._owner !== undefined) {
      hasAnyValues = true;
      internalValueResult.owner = this._owner;
    }
    if (this._salt !== undefined) {
      hasAnyValues = true;
      internalValueResult.salt = this._salt;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudCredentialListStruct | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._currentCred = undefined;
      this._forgot = undefined;
      this._newCred = undefined;
      this._owner = undefined;
      this._salt = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._currentCred = value.currentCred;
      this._forgot = value.forgot;
      this._newCred = value.newCred;
      this._owner = value.owner;
      this._salt = value.salt;
      this._type = value.type;
    }
  }

  // current_cred - computed: false, optional: true, required: false
  private _currentCred?: string; 
  public get currentCred() {
    return this.getStringAttribute('current_cred');
  }
  public set currentCred(value: string) {
    this._currentCred = value;
  }
  public resetCurrentCred() {
    this._currentCred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get currentCredInput() {
    return this._currentCred;
  }

  // forgot - computed: false, optional: true, required: false
  private _forgot?: boolean | cdktf.IResolvable; 
  public get forgot() {
    return this.getBooleanAttribute('forgot');
  }
  public set forgot(value: boolean | cdktf.IResolvable) {
    this._forgot = value;
  }
  public resetForgot() {
    this._forgot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forgotInput() {
    return this._forgot;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // new_cred - computed: false, optional: true, required: false
  private _newCred?: string; 
  public get newCred() {
    return this.getStringAttribute('new_cred');
  }
  public set newCred(value: string) {
    this._newCred = value;
  }
  public resetNewCred() {
    this._newCred = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newCredInput() {
    return this._newCred;
  }

  // owner - computed: false, optional: true, required: false
  private _owner?: string; 
  public get owner() {
    return this.getStringAttribute('owner');
  }
  public set owner(value: string) {
    this._owner = value;
  }
  public resetOwner() {
    this._owner = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerInput() {
    return this._owner;
  }

  // salt - computed: false, optional: true, required: false
  private _salt?: number; 
  public get salt() {
    return this.getNumberAttribute('salt');
  }
  public set salt(value: number) {
    this._salt = value;
  }
  public resetSalt() {
    this._salt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saltInput() {
    return this._salt;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}

export class DataZedcloudCredentialListStructList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudCredentialListStruct[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudCredentialListStructOutputReference {
    return new DataZedcloudCredentialListStructOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudCredentialNext {
  /**
  * OrderBy helps in sorting the list response
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/credential#order_by DataZedcloudCredential#order_by}
  */
  readonly orderBy?: string[];
  /**
  * Page Number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/credential#page_num DataZedcloudCredential#page_num}
  */
  readonly pageNum?: number;
  /**
  * Defines the page size
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/credential#page_size DataZedcloudCredential#page_size}
  */
  readonly pageSize?: number;
  /**
  * Page Token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/credential#page_token DataZedcloudCredential#page_token}
  */
  readonly pageToken?: string;
  /**
  * Total number of pages to be fetched.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/credential#total_pages DataZedcloudCredential#total_pages}
  */
  readonly totalPages?: number;
}

export function dataZedcloudCredentialNextToTerraform(struct?: DataZedcloudCredentialNext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    order_by: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.orderBy),
    page_num: cdktf.numberToTerraform(struct!.pageNum),
    page_size: cdktf.numberToTerraform(struct!.pageSize),
    page_token: cdktf.stringToTerraform(struct!.pageToken),
    total_pages: cdktf.numberToTerraform(struct!.totalPages),
  }
}


export function dataZedcloudCredentialNextToHclTerraform(struct?: DataZedcloudCredentialNext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    order_by: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.orderBy),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    page_num: {
      value: cdktf.numberToHclTerraform(struct!.pageNum),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    page_size: {
      value: cdktf.numberToHclTerraform(struct!.pageSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    page_token: {
      value: cdktf.stringToHclTerraform(struct!.pageToken),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total_pages: {
      value: cdktf.numberToHclTerraform(struct!.totalPages),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudCredentialNextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudCredentialNext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._orderBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.orderBy = this._orderBy;
    }
    if (this._pageNum !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageNum = this._pageNum;
    }
    if (this._pageSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageSize = this._pageSize;
    }
    if (this._pageToken !== undefined) {
      hasAnyValues = true;
      internalValueResult.pageToken = this._pageToken;
    }
    if (this._totalPages !== undefined) {
      hasAnyValues = true;
      internalValueResult.totalPages = this._totalPages;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudCredentialNext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._orderBy = undefined;
      this._pageNum = undefined;
      this._pageSize = undefined;
      this._pageToken = undefined;
      this._totalPages = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._orderBy = value.orderBy;
      this._pageNum = value.pageNum;
      this._pageSize = value.pageSize;
      this._pageToken = value.pageToken;
      this._totalPages = value.totalPages;
    }
  }

  // order_by - computed: false, optional: true, required: false
  private _orderBy?: string[]; 
  public get orderBy() {
    return this.getListAttribute('order_by');
  }
  public set orderBy(value: string[]) {
    this._orderBy = value;
  }
  public resetOrderBy() {
    this._orderBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orderByInput() {
    return this._orderBy;
  }

  // page_num - computed: false, optional: true, required: false
  private _pageNum?: number; 
  public get pageNum() {
    return this.getNumberAttribute('page_num');
  }
  public set pageNum(value: number) {
    this._pageNum = value;
  }
  public resetPageNum() {
    this._pageNum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageNumInput() {
    return this._pageNum;
  }

  // page_size - computed: false, optional: true, required: false
  private _pageSize?: number; 
  public get pageSize() {
    return this.getNumberAttribute('page_size');
  }
  public set pageSize(value: number) {
    this._pageSize = value;
  }
  public resetPageSize() {
    this._pageSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageSizeInput() {
    return this._pageSize;
  }

  // page_token - computed: false, optional: true, required: false
  private _pageToken?: string; 
  public get pageToken() {
    return this.getStringAttribute('page_token');
  }
  public set pageToken(value: string) {
    this._pageToken = value;
  }
  public resetPageToken() {
    this._pageToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pageTokenInput() {
    return this._pageToken;
  }

  // total_pages - computed: false, optional: true, required: false
  private _totalPages?: number; 
  public get totalPages() {
    return this.getNumberAttribute('total_pages');
  }
  public set totalPages(value: number) {
    this._totalPages = value;
  }
  public resetTotalPages() {
    this._totalPages = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalPagesInput() {
    return this._totalPages;
  }
}

export class DataZedcloudCredentialNextList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudCredentialNext[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudCredentialNextOutputReference {
    return new DataZedcloudCredentialNextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataZedcloudCredentialSummaryByState {
  /**
  * Summary description
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/credential#description DataZedcloudCredential#description}
  */
  readonly description?: string;
  /**
  * Total
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/credential#total DataZedcloudCredential#total}
  */
  readonly total?: number;
  /**
  * Values: Map for storing <string, uint32>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/credential#values DataZedcloudCredential#values}
  */
  readonly values?: { [key: string]: number };
}

export function dataZedcloudCredentialSummaryByStateToTerraform(struct?: DataZedcloudCredentialSummaryByState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    total: cdktf.numberToTerraform(struct!.total),
    values: cdktf.hashMapper(cdktf.numberToTerraform)(struct!.values),
  }
}


export function dataZedcloudCredentialSummaryByStateToHclTerraform(struct?: DataZedcloudCredentialSummaryByState | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    total: {
      value: cdktf.numberToHclTerraform(struct!.total),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    values: {
      value: cdktf.hashMapperHcl(cdktf.numberToHclTerraform)(struct!.values),
      isBlock: false,
      type: "map",
      storageClassType: "numberMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataZedcloudCredentialSummaryByStateOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataZedcloudCredentialSummaryByState | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._total !== undefined) {
      hasAnyValues = true;
      internalValueResult.total = this._total;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataZedcloudCredentialSummaryByState | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._total = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._total = value.total;
      this._values = value.values;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // total - computed: false, optional: true, required: false
  private _total?: number; 
  public get total() {
    return this.getNumberAttribute('total');
  }
  public set total(value: number) {
    this._total = value;
  }
  public resetTotal() {
    this._total = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get totalInput() {
    return this._total;
  }

  // values - computed: false, optional: true, required: false
  private _values?: { [key: string]: number }; 
  public get values() {
    return this.getNumberMapAttribute('values');
  }
  public set values(value: { [key: string]: number }) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class DataZedcloudCredentialSummaryByStateList extends cdktf.ComplexList {
  public internalValue? : DataZedcloudCredentialSummaryByState[] | cdktf.IResolvable

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
  public get(index: number): DataZedcloudCredentialSummaryByStateOutputReference {
    return new DataZedcloudCredentialSummaryByStateOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/credential zedcloud_credential}
*/
export class DataZedcloudCredential extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zedcloud_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataZedcloudCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataZedcloudCredential to import
  * @param importFromId The id of the existing DataZedcloudCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataZedcloudCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zedcloud_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zededa/zedcloud/2.5.0/docs/data-sources/credential zedcloud_credential} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataZedcloudCredentialConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataZedcloudCredentialConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zedcloud_credential',
      terraformGeneratorMetadata: {
        providerName: 'zedcloud',
        providerVersion: '2.5.0',
        providerVersionConstraint: '2.5.0'
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
    this._list.internalValue = config.list;
    this._next.internalValue = config.next;
    this._summaryByState.internalValue = config.summaryByState;
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

  // list - computed: false, optional: true, required: false
  private _list = new DataZedcloudCredentialListStructList(this, "list", false);
  public get list() {
    return this._list;
  }
  public putList(value: DataZedcloudCredentialListStruct[] | cdktf.IResolvable) {
    this._list.internalValue = value;
  }
  public resetList() {
    this._list.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get listInput() {
    return this._list.internalValue;
  }

  // next - computed: false, optional: true, required: false
  private _next = new DataZedcloudCredentialNextList(this, "next", false);
  public get next() {
    return this._next;
  }
  public putNext(value: DataZedcloudCredentialNext[] | cdktf.IResolvable) {
    this._next.internalValue = value;
  }
  public resetNext() {
    this._next.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextInput() {
    return this._next.internalValue;
  }

  // summary_by_state - computed: false, optional: true, required: false
  private _summaryByState = new DataZedcloudCredentialSummaryByStateList(this, "summary_by_state", false);
  public get summaryByState() {
    return this._summaryByState;
  }
  public putSummaryByState(value: DataZedcloudCredentialSummaryByState[] | cdktf.IResolvable) {
    this._summaryByState.internalValue = value;
  }
  public resetSummaryByState() {
    this._summaryByState.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get summaryByStateInput() {
    return this._summaryByState.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      list: cdktf.listMapper(dataZedcloudCredentialListStructToTerraform, true)(this._list.internalValue),
      next: cdktf.listMapper(dataZedcloudCredentialNextToTerraform, true)(this._next.internalValue),
      summary_by_state: cdktf.listMapper(dataZedcloudCredentialSummaryByStateToTerraform, true)(this._summaryByState.internalValue),
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
      list: {
        value: cdktf.listMapperHcl(dataZedcloudCredentialListStructToHclTerraform, true)(this._list.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudCredentialListStructList",
      },
      next: {
        value: cdktf.listMapperHcl(dataZedcloudCredentialNextToHclTerraform, true)(this._next.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudCredentialNextList",
      },
      summary_by_state: {
        value: cdktf.listMapperHcl(dataZedcloudCredentialSummaryByStateToHclTerraform, true)(this._summaryByState.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "DataZedcloudCredentialSummaryByStateList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
