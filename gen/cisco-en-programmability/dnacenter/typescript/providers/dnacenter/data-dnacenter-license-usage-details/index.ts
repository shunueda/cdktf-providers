// https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_usage_details
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDnacenterLicenseUsageDetailsConfig extends cdktf.TerraformMetaArguments {
  /**
  * device_type query parameter. Type of device like router, switch, wireless or ise
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_usage_details#device_type DataDnacenterLicenseUsageDetails#device_type}
  */
  readonly deviceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_usage_details#id DataDnacenterLicenseUsageDetails#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * smart_account_id path parameter. Id of smart account
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_usage_details#smart_account_id DataDnacenterLicenseUsageDetails#smart_account_id}
  */
  readonly smartAccountId: string;
  /**
  * virtual_account_name path parameter. Name of virtual account. Putting "All" will give license term detail for all virtual accounts.
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_usage_details#virtual_account_name DataDnacenterLicenseUsageDetails#virtual_account_name}
  */
  readonly virtualAccountName: string;
}
export interface DataDnacenterLicenseUsageDetailsItemPurchasedDnaLicenseLicenseCountByType {
}

export function dataDnacenterLicenseUsageDetailsItemPurchasedDnaLicenseLicenseCountByTypeToTerraform(struct?: DataDnacenterLicenseUsageDetailsItemPurchasedDnaLicenseLicenseCountByType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterLicenseUsageDetailsItemPurchasedDnaLicenseLicenseCountByTypeToHclTerraform(struct?: DataDnacenterLicenseUsageDetailsItemPurchasedDnaLicenseLicenseCountByType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterLicenseUsageDetailsItemPurchasedDnaLicenseLicenseCountByTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDnacenterLicenseUsageDetailsItemPurchasedDnaLicenseLicenseCountByType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterLicenseUsageDetailsItemPurchasedDnaLicenseLicenseCountByType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // license_count - computed: true, optional: false, required: false
  public get licenseCount() {
    return this.getNumberAttribute('license_count');
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
}

export class DataDnacenterLicenseUsageDetailsItemPurchasedDnaLicenseLicenseCountByTypeList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterLicenseUsageDetailsItemPurchasedDnaLicenseLicenseCountByTypeOutputReference {
    return new DataDnacenterLicenseUsageDetailsItemPurchasedDnaLicenseLicenseCountByTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterLicenseUsageDetailsItemPurchasedDnaLicense {
}

export function dataDnacenterLicenseUsageDetailsItemPurchasedDnaLicenseToTerraform(struct?: DataDnacenterLicenseUsageDetailsItemPurchasedDnaLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterLicenseUsageDetailsItemPurchasedDnaLicenseToHclTerraform(struct?: DataDnacenterLicenseUsageDetailsItemPurchasedDnaLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterLicenseUsageDetailsItemPurchasedDnaLicenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDnacenterLicenseUsageDetailsItemPurchasedDnaLicense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterLicenseUsageDetailsItemPurchasedDnaLicense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // license_count_by_type - computed: true, optional: false, required: false
  private _licenseCountByType = new DataDnacenterLicenseUsageDetailsItemPurchasedDnaLicenseLicenseCountByTypeList(this, "license_count_by_type", false);
  public get licenseCountByType() {
    return this._licenseCountByType;
  }

  // total_license_count - computed: true, optional: false, required: false
  public get totalLicenseCount() {
    return this.getNumberAttribute('total_license_count');
  }
}

export class DataDnacenterLicenseUsageDetailsItemPurchasedDnaLicenseList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterLicenseUsageDetailsItemPurchasedDnaLicenseOutputReference {
    return new DataDnacenterLicenseUsageDetailsItemPurchasedDnaLicenseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterLicenseUsageDetailsItemPurchasedNetworkLicenseLicenseCountByType {
}

export function dataDnacenterLicenseUsageDetailsItemPurchasedNetworkLicenseLicenseCountByTypeToTerraform(struct?: DataDnacenterLicenseUsageDetailsItemPurchasedNetworkLicenseLicenseCountByType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterLicenseUsageDetailsItemPurchasedNetworkLicenseLicenseCountByTypeToHclTerraform(struct?: DataDnacenterLicenseUsageDetailsItemPurchasedNetworkLicenseLicenseCountByType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterLicenseUsageDetailsItemPurchasedNetworkLicenseLicenseCountByTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDnacenterLicenseUsageDetailsItemPurchasedNetworkLicenseLicenseCountByType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterLicenseUsageDetailsItemPurchasedNetworkLicenseLicenseCountByType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // license_count - computed: true, optional: false, required: false
  public get licenseCount() {
    return this.getNumberAttribute('license_count');
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
}

export class DataDnacenterLicenseUsageDetailsItemPurchasedNetworkLicenseLicenseCountByTypeList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterLicenseUsageDetailsItemPurchasedNetworkLicenseLicenseCountByTypeOutputReference {
    return new DataDnacenterLicenseUsageDetailsItemPurchasedNetworkLicenseLicenseCountByTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterLicenseUsageDetailsItemPurchasedNetworkLicense {
}

export function dataDnacenterLicenseUsageDetailsItemPurchasedNetworkLicenseToTerraform(struct?: DataDnacenterLicenseUsageDetailsItemPurchasedNetworkLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterLicenseUsageDetailsItemPurchasedNetworkLicenseToHclTerraform(struct?: DataDnacenterLicenseUsageDetailsItemPurchasedNetworkLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterLicenseUsageDetailsItemPurchasedNetworkLicenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDnacenterLicenseUsageDetailsItemPurchasedNetworkLicense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterLicenseUsageDetailsItemPurchasedNetworkLicense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // license_count_by_type - computed: true, optional: false, required: false
  private _licenseCountByType = new DataDnacenterLicenseUsageDetailsItemPurchasedNetworkLicenseLicenseCountByTypeList(this, "license_count_by_type", false);
  public get licenseCountByType() {
    return this._licenseCountByType;
  }

  // total_license_count - computed: true, optional: false, required: false
  public get totalLicenseCount() {
    return this.getNumberAttribute('total_license_count');
  }
}

export class DataDnacenterLicenseUsageDetailsItemPurchasedNetworkLicenseList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterLicenseUsageDetailsItemPurchasedNetworkLicenseOutputReference {
    return new DataDnacenterLicenseUsageDetailsItemPurchasedNetworkLicenseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterLicenseUsageDetailsItemUsedDnaLicenseLicenseCountByType {
}

export function dataDnacenterLicenseUsageDetailsItemUsedDnaLicenseLicenseCountByTypeToTerraform(struct?: DataDnacenterLicenseUsageDetailsItemUsedDnaLicenseLicenseCountByType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterLicenseUsageDetailsItemUsedDnaLicenseLicenseCountByTypeToHclTerraform(struct?: DataDnacenterLicenseUsageDetailsItemUsedDnaLicenseLicenseCountByType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterLicenseUsageDetailsItemUsedDnaLicenseLicenseCountByTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDnacenterLicenseUsageDetailsItemUsedDnaLicenseLicenseCountByType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterLicenseUsageDetailsItemUsedDnaLicenseLicenseCountByType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // license_count - computed: true, optional: false, required: false
  public get licenseCount() {
    return this.getNumberAttribute('license_count');
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
}

export class DataDnacenterLicenseUsageDetailsItemUsedDnaLicenseLicenseCountByTypeList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterLicenseUsageDetailsItemUsedDnaLicenseLicenseCountByTypeOutputReference {
    return new DataDnacenterLicenseUsageDetailsItemUsedDnaLicenseLicenseCountByTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterLicenseUsageDetailsItemUsedDnaLicense {
}

export function dataDnacenterLicenseUsageDetailsItemUsedDnaLicenseToTerraform(struct?: DataDnacenterLicenseUsageDetailsItemUsedDnaLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterLicenseUsageDetailsItemUsedDnaLicenseToHclTerraform(struct?: DataDnacenterLicenseUsageDetailsItemUsedDnaLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterLicenseUsageDetailsItemUsedDnaLicenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDnacenterLicenseUsageDetailsItemUsedDnaLicense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterLicenseUsageDetailsItemUsedDnaLicense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // license_count_by_type - computed: true, optional: false, required: false
  private _licenseCountByType = new DataDnacenterLicenseUsageDetailsItemUsedDnaLicenseLicenseCountByTypeList(this, "license_count_by_type", false);
  public get licenseCountByType() {
    return this._licenseCountByType;
  }

  // total_license_count - computed: true, optional: false, required: false
  public get totalLicenseCount() {
    return this.getNumberAttribute('total_license_count');
  }
}

export class DataDnacenterLicenseUsageDetailsItemUsedDnaLicenseList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterLicenseUsageDetailsItemUsedDnaLicenseOutputReference {
    return new DataDnacenterLicenseUsageDetailsItemUsedDnaLicenseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterLicenseUsageDetailsItemUsedNetworkLicenseLicenseCountByType {
}

export function dataDnacenterLicenseUsageDetailsItemUsedNetworkLicenseLicenseCountByTypeToTerraform(struct?: DataDnacenterLicenseUsageDetailsItemUsedNetworkLicenseLicenseCountByType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterLicenseUsageDetailsItemUsedNetworkLicenseLicenseCountByTypeToHclTerraform(struct?: DataDnacenterLicenseUsageDetailsItemUsedNetworkLicenseLicenseCountByType): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterLicenseUsageDetailsItemUsedNetworkLicenseLicenseCountByTypeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDnacenterLicenseUsageDetailsItemUsedNetworkLicenseLicenseCountByType | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterLicenseUsageDetailsItemUsedNetworkLicenseLicenseCountByType | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // license_count - computed: true, optional: false, required: false
  public get licenseCount() {
    return this.getNumberAttribute('license_count');
  }

  // license_type - computed: true, optional: false, required: false
  public get licenseType() {
    return this.getStringAttribute('license_type');
  }
}

export class DataDnacenterLicenseUsageDetailsItemUsedNetworkLicenseLicenseCountByTypeList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterLicenseUsageDetailsItemUsedNetworkLicenseLicenseCountByTypeOutputReference {
    return new DataDnacenterLicenseUsageDetailsItemUsedNetworkLicenseLicenseCountByTypeOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterLicenseUsageDetailsItemUsedNetworkLicense {
}

export function dataDnacenterLicenseUsageDetailsItemUsedNetworkLicenseToTerraform(struct?: DataDnacenterLicenseUsageDetailsItemUsedNetworkLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterLicenseUsageDetailsItemUsedNetworkLicenseToHclTerraform(struct?: DataDnacenterLicenseUsageDetailsItemUsedNetworkLicense): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterLicenseUsageDetailsItemUsedNetworkLicenseOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDnacenterLicenseUsageDetailsItemUsedNetworkLicense | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterLicenseUsageDetailsItemUsedNetworkLicense | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // license_count_by_type - computed: true, optional: false, required: false
  private _licenseCountByType = new DataDnacenterLicenseUsageDetailsItemUsedNetworkLicenseLicenseCountByTypeList(this, "license_count_by_type", false);
  public get licenseCountByType() {
    return this._licenseCountByType;
  }

  // total_license_count - computed: true, optional: false, required: false
  public get totalLicenseCount() {
    return this.getNumberAttribute('total_license_count');
  }
}

export class DataDnacenterLicenseUsageDetailsItemUsedNetworkLicenseList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterLicenseUsageDetailsItemUsedNetworkLicenseOutputReference {
    return new DataDnacenterLicenseUsageDetailsItemUsedNetworkLicenseOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataDnacenterLicenseUsageDetailsItem {
}

export function dataDnacenterLicenseUsageDetailsItemToTerraform(struct?: DataDnacenterLicenseUsageDetailsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataDnacenterLicenseUsageDetailsItemToHclTerraform(struct?: DataDnacenterLicenseUsageDetailsItem): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataDnacenterLicenseUsageDetailsItemOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): DataDnacenterLicenseUsageDetailsItem | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataDnacenterLicenseUsageDetailsItem | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // purchased_dna_license - computed: true, optional: false, required: false
  private _purchasedDnaLicense = new DataDnacenterLicenseUsageDetailsItemPurchasedDnaLicenseList(this, "purchased_dna_license", false);
  public get purchasedDnaLicense() {
    return this._purchasedDnaLicense;
  }

  // purchased_network_license - computed: true, optional: false, required: false
  private _purchasedNetworkLicense = new DataDnacenterLicenseUsageDetailsItemPurchasedNetworkLicenseList(this, "purchased_network_license", false);
  public get purchasedNetworkLicense() {
    return this._purchasedNetworkLicense;
  }

  // used_dna_license - computed: true, optional: false, required: false
  private _usedDnaLicense = new DataDnacenterLicenseUsageDetailsItemUsedDnaLicenseList(this, "used_dna_license", false);
  public get usedDnaLicense() {
    return this._usedDnaLicense;
  }

  // used_network_license - computed: true, optional: false, required: false
  private _usedNetworkLicense = new DataDnacenterLicenseUsageDetailsItemUsedNetworkLicenseList(this, "used_network_license", false);
  public get usedNetworkLicense() {
    return this._usedNetworkLicense;
  }
}

export class DataDnacenterLicenseUsageDetailsItemList extends cdktf.ComplexList {

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
  public get(index: number): DataDnacenterLicenseUsageDetailsItemOutputReference {
    return new DataDnacenterLicenseUsageDetailsItemOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_usage_details dnacenter_license_usage_details}
*/
export class DataDnacenterLicenseUsageDetails extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dnacenter_license_usage_details";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDnacenterLicenseUsageDetails resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDnacenterLicenseUsageDetails to import
  * @param importFromId The id of the existing DataDnacenterLicenseUsageDetails that should be imported. Refer to the {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_usage_details#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDnacenterLicenseUsageDetails to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dnacenter_license_usage_details", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cisco-en-programmability/dnacenter/1.1.21/docs/data-sources/license_usage_details dnacenter_license_usage_details} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDnacenterLicenseUsageDetailsConfig
  */
  public constructor(scope: Construct, id: string, config: DataDnacenterLicenseUsageDetailsConfig) {
    super(scope, id, {
      terraformResourceType: 'dnacenter_license_usage_details',
      terraformGeneratorMetadata: {
        providerName: 'dnacenter',
        providerVersion: '1.1.21',
        providerVersionConstraint: '1.1.21'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._deviceType = config.deviceType;
    this._id = config.id;
    this._smartAccountId = config.smartAccountId;
    this._virtualAccountName = config.virtualAccountName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device_type - computed: false, optional: false, required: true
  private _deviceType?: string; 
  public get deviceType() {
    return this.getStringAttribute('device_type');
  }
  public set deviceType(value: string) {
    this._deviceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceTypeInput() {
    return this._deviceType;
  }

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

  // item - computed: true, optional: false, required: false
  private _item = new DataDnacenterLicenseUsageDetailsItemList(this, "item", false);
  public get item() {
    return this._item;
  }

  // smart_account_id - computed: false, optional: false, required: true
  private _smartAccountId?: string; 
  public get smartAccountId() {
    return this.getStringAttribute('smart_account_id');
  }
  public set smartAccountId(value: string) {
    this._smartAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get smartAccountIdInput() {
    return this._smartAccountId;
  }

  // virtual_account_name - computed: false, optional: false, required: true
  private _virtualAccountName?: string; 
  public get virtualAccountName() {
    return this.getStringAttribute('virtual_account_name');
  }
  public set virtualAccountName(value: string) {
    this._virtualAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get virtualAccountNameInput() {
    return this._virtualAccountName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device_type: cdktf.stringToTerraform(this._deviceType),
      id: cdktf.stringToTerraform(this._id),
      smart_account_id: cdktf.stringToTerraform(this._smartAccountId),
      virtual_account_name: cdktf.stringToTerraform(this._virtualAccountName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device_type: {
        value: cdktf.stringToHclTerraform(this._deviceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      smart_account_id: {
        value: cdktf.stringToHclTerraform(this._smartAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      virtual_account_name: {
        value: cdktf.stringToHclTerraform(this._virtualAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
