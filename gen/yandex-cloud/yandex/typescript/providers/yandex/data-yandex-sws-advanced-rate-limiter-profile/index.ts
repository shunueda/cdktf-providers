// https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/sws_advanced_rate_limiter_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexSwsAdvancedRateLimiterProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the ARL profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/sws_advanced_rate_limiter_profile#advanced_rate_limiter_profile_id DataYandexSwsAdvancedRateLimiterProfile#advanced_rate_limiter_profile_id}
  */
  readonly advancedRateLimiterProfileId?: string;
  /**
  * The `Cloud ID` which resource belongs to. If it is not provided, the default provider `cloud-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/sws_advanced_rate_limiter_profile#cloud_id DataYandexSwsAdvancedRateLimiterProfile#cloud_id}
  */
  readonly cloudId?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/sws_advanced_rate_limiter_profile#folder_id DataYandexSwsAdvancedRateLimiterProfile#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/sws_advanced_rate_limiter_profile#id DataYandexSwsAdvancedRateLimiterProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/sws_advanced_rate_limiter_profile#name DataYandexSwsAdvancedRateLimiterProfile#name}
  */
  readonly name?: string;
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristic {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristicToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristicToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // value - computed: true, optional: false, required: false
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristicList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristicOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristic {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristicToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristicToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristicList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristicOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristic {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // case_insensitive - computed: true, optional: false, required: false
  public get caseInsensitive() {
    return this.getBooleanAttribute('case_insensitive');
  }

  // key_characteristic - computed: true, optional: false, required: false
  private _keyCharacteristic = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicKeyCharacteristicList(this, "key_characteristic", false);
  public get keyCharacteristic() {
    return this._keyCharacteristic;
  }

  // simple_characteristic - computed: true, optional: false, required: false
  private _simpleCharacteristic = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicSimpleCharacteristicList(this, "simple_characteristic", false);
  public get simpleCharacteristic() {
    return this._simpleCharacteristic;
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthorities {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthoritiesToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthoritiesToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthoritiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthorities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthorities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exact_match - computed: true, optional: false, required: false
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }

  // exact_not_match - computed: true, optional: false, required: false
  public get exactNotMatch() {
    return this.getStringAttribute('exact_not_match');
  }

  // pire_regex_match - computed: true, optional: false, required: false
  public get pireRegexMatch() {
    return this.getStringAttribute('pire_regex_match');
  }

  // pire_regex_not_match - computed: true, optional: false, required: false
  public get pireRegexNotMatch() {
    return this.getStringAttribute('pire_regex_not_match');
  }

  // prefix_match - computed: true, optional: false, required: false
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }

  // prefix_not_match - computed: true, optional: false, required: false
  public get prefixNotMatch() {
    return this.getStringAttribute('prefix_not_match');
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthoritiesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthoritiesOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthoritiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthority {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorities - computed: true, optional: false, required: false
  private _authorities = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityAuthoritiesList(this, "authorities", false);
  public get authorities() {
    return this._authorities;
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValue {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValueToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValueToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exact_match - computed: true, optional: false, required: false
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }

  // exact_not_match - computed: true, optional: false, required: false
  public get exactNotMatch() {
    return this.getStringAttribute('exact_not_match');
  }

  // pire_regex_match - computed: true, optional: false, required: false
  public get pireRegexMatch() {
    return this.getStringAttribute('pire_regex_match');
  }

  // pire_regex_not_match - computed: true, optional: false, required: false
  public get pireRegexNotMatch() {
    return this.getStringAttribute('pire_regex_not_match');
  }

  // prefix_match - computed: true, optional: false, required: false
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }

  // prefix_not_match - computed: true, optional: false, required: false
  public get prefixNotMatch() {
    return this.getStringAttribute('prefix_not_match');
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValueList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValueOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeaders {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethods {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethodsToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethodsToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exact_match - computed: true, optional: false, required: false
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }

  // exact_not_match - computed: true, optional: false, required: false
  public get exactNotMatch() {
    return this.getStringAttribute('exact_not_match');
  }

  // pire_regex_match - computed: true, optional: false, required: false
  public get pireRegexMatch() {
    return this.getStringAttribute('pire_regex_match');
  }

  // pire_regex_not_match - computed: true, optional: false, required: false
  public get pireRegexNotMatch() {
    return this.getStringAttribute('pire_regex_not_match');
  }

  // prefix_match - computed: true, optional: false, required: false
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }

  // prefix_not_match - computed: true, optional: false, required: false
  public get prefixNotMatch() {
    return this.getStringAttribute('prefix_not_match');
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethodsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethodsOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethod {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_methods - computed: true, optional: false, required: false
  private _httpMethods = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodHttpMethodsList(this, "http_methods", false);
  public get httpMethods() {
    return this._httpMethods;
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPath {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPathToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPathToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exact_match - computed: true, optional: false, required: false
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }

  // exact_not_match - computed: true, optional: false, required: false
  public get exactNotMatch() {
    return this.getStringAttribute('exact_not_match');
  }

  // pire_regex_match - computed: true, optional: false, required: false
  public get pireRegexMatch() {
    return this.getStringAttribute('pire_regex_match');
  }

  // pire_regex_not_match - computed: true, optional: false, required: false
  public get pireRegexNotMatch() {
    return this.getStringAttribute('pire_regex_not_match');
  }

  // prefix_match - computed: true, optional: false, required: false
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }

  // prefix_not_match - computed: true, optional: false, required: false
  public get prefixNotMatch() {
    return this.getStringAttribute('prefix_not_match');
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPathList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPathOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValue {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValueToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValueToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exact_match - computed: true, optional: false, required: false
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }

  // exact_not_match - computed: true, optional: false, required: false
  public get exactNotMatch() {
    return this.getStringAttribute('exact_not_match');
  }

  // pire_regex_match - computed: true, optional: false, required: false
  public get pireRegexMatch() {
    return this.getStringAttribute('pire_regex_match');
  }

  // pire_regex_not_match - computed: true, optional: false, required: false
  public get pireRegexNotMatch() {
    return this.getStringAttribute('pire_regex_not_match');
  }

  // prefix_match - computed: true, optional: false, required: false
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }

  // prefix_not_match - computed: true, optional: false, required: false
  public get prefixNotMatch() {
    return this.getStringAttribute('prefix_not_match');
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValueList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValueOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueries {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUri {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  private _path = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriPathList(this, "path", false);
  public get path() {
    return this._path;
  }

  // queries - computed: true, optional: false, required: false
  private _queries = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriQueriesList(this, "queries", false);
  public get queries() {
    return this._queries;
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatch {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatchToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatchToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // locations - computed: true, optional: false, required: false
  public get locations() {
    return this.getListAttribute('locations');
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatchOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatch {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatchToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatchToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // locations - computed: true, optional: false, required: false
  public get locations() {
    return this.getListAttribute('locations');
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatchOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatch {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatchToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatchToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_ranges - computed: true, optional: false, required: false
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatchOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatch {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatchToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatchToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_ranges - computed: true, optional: false, required: false
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatchOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIp {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // geo_ip_match - computed: true, optional: false, required: false
  private _geoIpMatch = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpMatchList(this, "geo_ip_match", false);
  public get geoIpMatch() {
    return this._geoIpMatch;
  }

  // geo_ip_not_match - computed: true, optional: false, required: false
  private _geoIpNotMatch = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpGeoIpNotMatchList(this, "geo_ip_not_match", false);
  public get geoIpNotMatch() {
    return this._geoIpNotMatch;
  }

  // ip_ranges_match - computed: true, optional: false, required: false
  private _ipRangesMatch = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesMatchList(this, "ip_ranges_match", false);
  public get ipRangesMatch() {
    return this._ipRangesMatch;
  }

  // ip_ranges_not_match - computed: true, optional: false, required: false
  private _ipRangesNotMatch = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpIpRangesNotMatchList(this, "ip_ranges_not_match", false);
  public get ipRangesNotMatch() {
    return this._ipRangesNotMatch;
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCondition {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authority - computed: true, optional: false, required: false
  private _authority = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionAuthorityList(this, "authority", false);
  public get authority() {
    return this._authority;
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // http_method - computed: true, optional: false, required: false
  private _httpMethod = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionHttpMethodList(this, "http_method", false);
  public get httpMethod() {
    return this._httpMethod;
  }

  // request_uri - computed: true, optional: false, required: false
  private _requestUri = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionRequestUriList(this, "request_uri", false);
  public get requestUri() {
    return this._requestUri;
  }

  // source_ip - computed: true, optional: false, required: false
  private _sourceIp = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionSourceIpList(this, "source_ip", false);
  public get sourceIp() {
    return this._sourceIp;
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuota {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // characteristic - computed: true, optional: false, required: false
  private _characteristic = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaCharacteristicList(this, "characteristic", false);
  public get characteristic() {
    return this._characteristic;
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getNumberAttribute('limit');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthorities {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthoritiesToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthoritiesToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthoritiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthorities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthorities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exact_match - computed: true, optional: false, required: false
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }

  // exact_not_match - computed: true, optional: false, required: false
  public get exactNotMatch() {
    return this.getStringAttribute('exact_not_match');
  }

  // pire_regex_match - computed: true, optional: false, required: false
  public get pireRegexMatch() {
    return this.getStringAttribute('pire_regex_match');
  }

  // pire_regex_not_match - computed: true, optional: false, required: false
  public get pireRegexNotMatch() {
    return this.getStringAttribute('pire_regex_not_match');
  }

  // prefix_match - computed: true, optional: false, required: false
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }

  // prefix_not_match - computed: true, optional: false, required: false
  public get prefixNotMatch() {
    return this.getStringAttribute('prefix_not_match');
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthoritiesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthoritiesOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthoritiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthority {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorities - computed: true, optional: false, required: false
  private _authorities = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityAuthoritiesList(this, "authorities", false);
  public get authorities() {
    return this._authorities;
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValue {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValueToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValueToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exact_match - computed: true, optional: false, required: false
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }

  // exact_not_match - computed: true, optional: false, required: false
  public get exactNotMatch() {
    return this.getStringAttribute('exact_not_match');
  }

  // pire_regex_match - computed: true, optional: false, required: false
  public get pireRegexMatch() {
    return this.getStringAttribute('pire_regex_match');
  }

  // pire_regex_not_match - computed: true, optional: false, required: false
  public get pireRegexNotMatch() {
    return this.getStringAttribute('pire_regex_not_match');
  }

  // prefix_match - computed: true, optional: false, required: false
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }

  // prefix_not_match - computed: true, optional: false, required: false
  public get prefixNotMatch() {
    return this.getStringAttribute('prefix_not_match');
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValueList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValueOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeaders {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeaders | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethods {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethodsToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethodsToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethods | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exact_match - computed: true, optional: false, required: false
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }

  // exact_not_match - computed: true, optional: false, required: false
  public get exactNotMatch() {
    return this.getStringAttribute('exact_not_match');
  }

  // pire_regex_match - computed: true, optional: false, required: false
  public get pireRegexMatch() {
    return this.getStringAttribute('pire_regex_match');
  }

  // pire_regex_not_match - computed: true, optional: false, required: false
  public get pireRegexNotMatch() {
    return this.getStringAttribute('pire_regex_not_match');
  }

  // prefix_match - computed: true, optional: false, required: false
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }

  // prefix_not_match - computed: true, optional: false, required: false
  public get prefixNotMatch() {
    return this.getStringAttribute('prefix_not_match');
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethodsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethodsOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethod {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_methods - computed: true, optional: false, required: false
  private _httpMethods = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodHttpMethodsList(this, "http_methods", false);
  public get httpMethods() {
    return this._httpMethods;
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPath {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPathToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPathToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPath | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exact_match - computed: true, optional: false, required: false
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }

  // exact_not_match - computed: true, optional: false, required: false
  public get exactNotMatch() {
    return this.getStringAttribute('exact_not_match');
  }

  // pire_regex_match - computed: true, optional: false, required: false
  public get pireRegexMatch() {
    return this.getStringAttribute('pire_regex_match');
  }

  // pire_regex_not_match - computed: true, optional: false, required: false
  public get pireRegexNotMatch() {
    return this.getStringAttribute('pire_regex_not_match');
  }

  // prefix_match - computed: true, optional: false, required: false
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }

  // prefix_not_match - computed: true, optional: false, required: false
  public get prefixNotMatch() {
    return this.getStringAttribute('prefix_not_match');
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPathList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPathOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValue {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValueToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValueToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValue | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exact_match - computed: true, optional: false, required: false
  public get exactMatch() {
    return this.getStringAttribute('exact_match');
  }

  // exact_not_match - computed: true, optional: false, required: false
  public get exactNotMatch() {
    return this.getStringAttribute('exact_not_match');
  }

  // pire_regex_match - computed: true, optional: false, required: false
  public get pireRegexMatch() {
    return this.getStringAttribute('pire_regex_match');
  }

  // pire_regex_not_match - computed: true, optional: false, required: false
  public get pireRegexNotMatch() {
    return this.getStringAttribute('pire_regex_not_match');
  }

  // prefix_match - computed: true, optional: false, required: false
  public get prefixMatch() {
    return this.getStringAttribute('prefix_match');
  }

  // prefix_not_match - computed: true, optional: false, required: false
  public get prefixNotMatch() {
    return this.getStringAttribute('prefix_not_match');
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValueList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValueOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueries {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueries | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // value - computed: true, optional: false, required: false
  private _value = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUri {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  private _path = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriPathList(this, "path", false);
  public get path() {
    return this._path;
  }

  // queries - computed: true, optional: false, required: false
  private _queries = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriQueriesList(this, "queries", false);
  public get queries() {
    return this._queries;
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatch {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatchToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatchToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // locations - computed: true, optional: false, required: false
  public get locations() {
    return this.getListAttribute('locations');
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatchOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatch {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatchToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatchToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // locations - computed: true, optional: false, required: false
  public get locations() {
    return this.getListAttribute('locations');
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatchOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatch {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatchToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatchToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_ranges - computed: true, optional: false, required: false
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatchOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatch {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatchToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatchToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatch | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // ip_ranges - computed: true, optional: false, required: false
  public get ipRanges() {
    return this.getListAttribute('ip_ranges');
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatchOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIp {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // geo_ip_match - computed: true, optional: false, required: false
  private _geoIpMatch = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpMatchList(this, "geo_ip_match", false);
  public get geoIpMatch() {
    return this._geoIpMatch;
  }

  // geo_ip_not_match - computed: true, optional: false, required: false
  private _geoIpNotMatch = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpGeoIpNotMatchList(this, "geo_ip_not_match", false);
  public get geoIpNotMatch() {
    return this._geoIpNotMatch;
  }

  // ip_ranges_match - computed: true, optional: false, required: false
  private _ipRangesMatch = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesMatchList(this, "ip_ranges_match", false);
  public get ipRangesMatch() {
    return this._ipRangesMatch;
  }

  // ip_ranges_not_match - computed: true, optional: false, required: false
  private _ipRangesNotMatch = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpIpRangesNotMatchList(this, "ip_ranges_not_match", false);
  public get ipRangesNotMatch() {
    return this._ipRangesNotMatch;
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaCondition {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authority - computed: true, optional: false, required: false
  private _authority = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionAuthorityList(this, "authority", false);
  public get authority() {
    return this._authority;
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // http_method - computed: true, optional: false, required: false
  private _httpMethod = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionHttpMethodList(this, "http_method", false);
  public get httpMethod() {
    return this._httpMethod;
  }

  // request_uri - computed: true, optional: false, required: false
  private _requestUri = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionRequestUriList(this, "request_uri", false);
  public get requestUri() {
    return this._requestUri;
  }

  // source_ip - computed: true, optional: false, required: false
  private _sourceIp = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionSourceIpList(this, "source_ip", false);
  public get sourceIp() {
    return this._sourceIp;
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuota {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuota): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuota | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuota | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }

  // limit - computed: true, optional: false, required: false
  public get limit() {
    return this.getNumberAttribute('limit');
  }

  // period - computed: true, optional: false, required: false
  public get period() {
    return this.getNumberAttribute('period');
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRule {
}

export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleToTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleToHclTerraform(struct?: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // dry_run - computed: true, optional: false, required: false
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }

  // dynamic_quota - computed: true, optional: false, required: false
  private _dynamicQuota = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleDynamicQuotaList(this, "dynamic_quota", false);
  public get dynamicQuota() {
    return this._dynamicQuota;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // static_quota - computed: true, optional: false, required: false
  private _staticQuota = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleStaticQuotaList(this, "static_quota", false);
  public get staticQuota() {
    return this._staticQuota;
  }
}

export class DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleOutputReference {
    return new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/sws_advanced_rate_limiter_profile yandex_sws_advanced_rate_limiter_profile}
*/
export class DataYandexSwsAdvancedRateLimiterProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_sws_advanced_rate_limiter_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexSwsAdvancedRateLimiterProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexSwsAdvancedRateLimiterProfile to import
  * @param importFromId The id of the existing DataYandexSwsAdvancedRateLimiterProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/sws_advanced_rate_limiter_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexSwsAdvancedRateLimiterProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_sws_advanced_rate_limiter_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/sws_advanced_rate_limiter_profile yandex_sws_advanced_rate_limiter_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexSwsAdvancedRateLimiterProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexSwsAdvancedRateLimiterProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_sws_advanced_rate_limiter_profile',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.176.0',
        providerVersionConstraint: '0.176.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._advancedRateLimiterProfileId = config.advancedRateLimiterProfileId;
    this._cloudId = config.cloudId;
    this._folderId = config.folderId;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_rate_limiter_profile_id - computed: false, optional: true, required: false
  private _advancedRateLimiterProfileId?: string; 
  public get advancedRateLimiterProfileId() {
    return this.getStringAttribute('advanced_rate_limiter_profile_id');
  }
  public set advancedRateLimiterProfileId(value: string) {
    this._advancedRateLimiterProfileId = value;
  }
  public resetAdvancedRateLimiterProfileId() {
    this._advancedRateLimiterProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get advancedRateLimiterProfileIdInput() {
    return this._advancedRateLimiterProfileId;
  }

  // advanced_rate_limiter_rule - computed: true, optional: false, required: false
  private _advancedRateLimiterRule = new DataYandexSwsAdvancedRateLimiterProfileAdvancedRateLimiterRuleList(this, "advanced_rate_limiter_rule", false);
  public get advancedRateLimiterRule() {
    return this._advancedRateLimiterRule;
  }

  // cloud_id - computed: true, optional: true, required: false
  private _cloudId?: string; 
  public get cloudId() {
    return this.getStringAttribute('cloud_id');
  }
  public set cloudId(value: string) {
    this._cloudId = value;
  }
  public resetCloudId() {
    this._cloudId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudIdInput() {
    return this._cloudId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // folder_id - computed: true, optional: true, required: false
  private _folderId?: string; 
  public get folderId() {
    return this.getStringAttribute('folder_id');
  }
  public set folderId(value: string) {
    this._folderId = value;
  }
  public resetFolderId() {
    this._folderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderIdInput() {
    return this._folderId;
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

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // name - computed: true, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      advanced_rate_limiter_profile_id: cdktf.stringToTerraform(this._advancedRateLimiterProfileId),
      cloud_id: cdktf.stringToTerraform(this._cloudId),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      advanced_rate_limiter_profile_id: {
        value: cdktf.stringToHclTerraform(this._advancedRateLimiterProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_id: {
        value: cdktf.stringToHclTerraform(this._cloudId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder_id: {
        value: cdktf.stringToHclTerraform(this._folderId),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
