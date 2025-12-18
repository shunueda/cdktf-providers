// https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/smartcaptcha_captcha
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexSmartcaptchaCaptchaConfig extends cdktf.TerraformMetaArguments {
  /**
  * ID of the Captcha.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/smartcaptcha_captcha#captcha_id DataYandexSmartcaptchaCaptcha#captcha_id}
  */
  readonly captchaId?: string;
  /**
  * The `Cloud ID` which resource belongs to. If it is not provided, the default provider `cloud-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/smartcaptcha_captcha#cloud_id DataYandexSmartcaptchaCaptcha#cloud_id}
  */
  readonly cloudId?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/smartcaptcha_captcha#folder_id DataYandexSmartcaptchaCaptcha#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/smartcaptcha_captcha#id DataYandexSmartcaptchaCaptcha#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/smartcaptcha_captcha#name DataYandexSmartcaptchaCaptcha#name}
  */
  readonly name?: string;
}
export interface DataYandexSmartcaptchaCaptchaOverrideVariant {
}

export function dataYandexSmartcaptchaCaptchaOverrideVariantToTerraform(struct?: DataYandexSmartcaptchaCaptchaOverrideVariant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSmartcaptchaCaptchaOverrideVariantToHclTerraform(struct?: DataYandexSmartcaptchaCaptchaOverrideVariant): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSmartcaptchaCaptchaOverrideVariantOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSmartcaptchaCaptchaOverrideVariant | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSmartcaptchaCaptchaOverrideVariant | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // challenge_type - computed: true, optional: false, required: false
  public get challengeType() {
    return this.getStringAttribute('challenge_type');
  }

  // complexity - computed: true, optional: false, required: false
  public get complexity() {
    return this.getStringAttribute('complexity');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // pre_check_type - computed: true, optional: false, required: false
  public get preCheckType() {
    return this.getStringAttribute('pre_check_type');
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
}

export class DataYandexSmartcaptchaCaptchaOverrideVariantList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSmartcaptchaCaptchaOverrideVariantOutputReference {
    return new DataYandexSmartcaptchaCaptchaOverrideVariantOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSmartcaptchaCaptchaSecurityRuleConditionHeadersValue {
}

export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionHeadersValueToTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleConditionHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionHeadersValueToHclTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleConditionHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionHeadersValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSmartcaptchaCaptchaSecurityRuleConditionHeadersValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSmartcaptchaCaptchaSecurityRuleConditionHeadersValue | undefined) {
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

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionHeadersValueList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSmartcaptchaCaptchaSecurityRuleConditionHeadersValueOutputReference {
    return new DataYandexSmartcaptchaCaptchaSecurityRuleConditionHeadersValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSmartcaptchaCaptchaSecurityRuleConditionHeaders {
}

export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionHeadersToTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleConditionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionHeadersToHclTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleConditionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSmartcaptchaCaptchaSecurityRuleConditionHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSmartcaptchaCaptchaSecurityRuleConditionHeaders | undefined) {
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
  private _value = new DataYandexSmartcaptchaCaptchaSecurityRuleConditionHeadersValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSmartcaptchaCaptchaSecurityRuleConditionHeadersOutputReference {
    return new DataYandexSmartcaptchaCaptchaSecurityRuleConditionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSmartcaptchaCaptchaSecurityRuleConditionHostHosts {
}

export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionHostHostsToTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleConditionHostHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionHostHostsToHclTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleConditionHostHosts): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionHostHostsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSmartcaptchaCaptchaSecurityRuleConditionHostHosts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSmartcaptchaCaptchaSecurityRuleConditionHostHosts | undefined) {
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

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionHostHostsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSmartcaptchaCaptchaSecurityRuleConditionHostHostsOutputReference {
    return new DataYandexSmartcaptchaCaptchaSecurityRuleConditionHostHostsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSmartcaptchaCaptchaSecurityRuleConditionHost {
}

export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionHostToTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleConditionHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionHostToHclTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleConditionHost): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionHostOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSmartcaptchaCaptchaSecurityRuleConditionHost | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSmartcaptchaCaptchaSecurityRuleConditionHost | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // hosts - computed: true, optional: false, required: false
  private _hosts = new DataYandexSmartcaptchaCaptchaSecurityRuleConditionHostHostsList(this, "hosts", false);
  public get hosts() {
    return this._hosts;
  }
}

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionHostList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSmartcaptchaCaptchaSecurityRuleConditionHostOutputReference {
    return new DataYandexSmartcaptchaCaptchaSecurityRuleConditionHostOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatch {
}

export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatchToTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatchToHclTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatch | undefined) {
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

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatchOutputReference {
    return new DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatch {
}

export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatchToTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatchToHclTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatch | undefined) {
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

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatchOutputReference {
    return new DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatch {
}

export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatchToTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatchToHclTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatch | undefined) {
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

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatchOutputReference {
    return new DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatch {
}

export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatchToTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatchToHclTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatch | undefined) {
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

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatchOutputReference {
    return new DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIp {
}

export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpToTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpToHclTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // geo_ip_match - computed: true, optional: false, required: false
  private _geoIpMatch = new DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpMatchList(this, "geo_ip_match", false);
  public get geoIpMatch() {
    return this._geoIpMatch;
  }

  // geo_ip_not_match - computed: true, optional: false, required: false
  private _geoIpNotMatch = new DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpGeoIpNotMatchList(this, "geo_ip_not_match", false);
  public get geoIpNotMatch() {
    return this._geoIpNotMatch;
  }

  // ip_ranges_match - computed: true, optional: false, required: false
  private _ipRangesMatch = new DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesMatchList(this, "ip_ranges_match", false);
  public get ipRangesMatch() {
    return this._ipRangesMatch;
  }

  // ip_ranges_not_match - computed: true, optional: false, required: false
  private _ipRangesNotMatch = new DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpIpRangesNotMatchList(this, "ip_ranges_not_match", false);
  public get ipRangesNotMatch() {
    return this._ipRangesNotMatch;
  }
}

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpOutputReference {
    return new DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriPath {
}

export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionUriPathToTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionUriPathToHclTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriPath | undefined) {
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

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriPathList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriPathOutputReference {
    return new DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriQueriesValue {
}

export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionUriQueriesValueToTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriQueriesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionUriQueriesValueToHclTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriQueriesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriQueriesValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriQueriesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriQueriesValue | undefined) {
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

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriQueriesValueList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriQueriesValueOutputReference {
    return new DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriQueriesValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriQueries {
}

export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionUriQueriesToTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriQueries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionUriQueriesToHclTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriQueries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriQueries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriQueries | undefined) {
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
  private _value = new DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriQueriesValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriQueriesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriQueriesOutputReference {
    return new DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSmartcaptchaCaptchaSecurityRuleConditionUri {
}

export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionUriToTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleConditionUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionUriToHclTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleConditionUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSmartcaptchaCaptchaSecurityRuleConditionUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSmartcaptchaCaptchaSecurityRuleConditionUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  private _path = new DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriPathList(this, "path", false);
  public get path() {
    return this._path;
  }

  // queries - computed: true, optional: false, required: false
  private _queries = new DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriQueriesList(this, "queries", false);
  public get queries() {
    return this._queries;
  }
}

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriOutputReference {
    return new DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSmartcaptchaCaptchaSecurityRuleCondition {
}

export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionToTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSmartcaptchaCaptchaSecurityRuleConditionToHclTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSmartcaptchaCaptchaSecurityRuleCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSmartcaptchaCaptchaSecurityRuleCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataYandexSmartcaptchaCaptchaSecurityRuleConditionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // host - computed: true, optional: false, required: false
  private _host = new DataYandexSmartcaptchaCaptchaSecurityRuleConditionHostList(this, "host", false);
  public get host() {
    return this._host;
  }

  // source_ip - computed: true, optional: false, required: false
  private _sourceIp = new DataYandexSmartcaptchaCaptchaSecurityRuleConditionSourceIpList(this, "source_ip", false);
  public get sourceIp() {
    return this._sourceIp;
  }

  // uri - computed: true, optional: false, required: false
  private _uri = new DataYandexSmartcaptchaCaptchaSecurityRuleConditionUriList(this, "uri", false);
  public get uri() {
    return this._uri;
  }
}

export class DataYandexSmartcaptchaCaptchaSecurityRuleConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSmartcaptchaCaptchaSecurityRuleConditionOutputReference {
    return new DataYandexSmartcaptchaCaptchaSecurityRuleConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSmartcaptchaCaptchaSecurityRule {
}

export function dataYandexSmartcaptchaCaptchaSecurityRuleToTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSmartcaptchaCaptchaSecurityRuleToHclTerraform(struct?: DataYandexSmartcaptchaCaptchaSecurityRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSmartcaptchaCaptchaSecurityRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSmartcaptchaCaptchaSecurityRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSmartcaptchaCaptchaSecurityRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataYandexSmartcaptchaCaptchaSecurityRuleConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // override_variant_uuid - computed: true, optional: false, required: false
  public get overrideVariantUuid() {
    return this.getStringAttribute('override_variant_uuid');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }
}

export class DataYandexSmartcaptchaCaptchaSecurityRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSmartcaptchaCaptchaSecurityRuleOutputReference {
    return new DataYandexSmartcaptchaCaptchaSecurityRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/smartcaptcha_captcha yandex_smartcaptcha_captcha}
*/
export class DataYandexSmartcaptchaCaptcha extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_smartcaptcha_captcha";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexSmartcaptchaCaptcha resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexSmartcaptchaCaptcha to import
  * @param importFromId The id of the existing DataYandexSmartcaptchaCaptcha that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/smartcaptcha_captcha#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexSmartcaptchaCaptcha to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_smartcaptcha_captcha", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.177.0/docs/data-sources/smartcaptcha_captcha yandex_smartcaptcha_captcha} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexSmartcaptchaCaptchaConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexSmartcaptchaCaptchaConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_smartcaptcha_captcha',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.177.0',
        providerVersionConstraint: '0.177.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._captchaId = config.captchaId;
    this._cloudId = config.cloudId;
    this._folderId = config.folderId;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allowed_sites - computed: true, optional: false, required: false
  public get allowedSites() {
    return this.getListAttribute('allowed_sites');
  }

  // captcha_id - computed: false, optional: true, required: false
  private _captchaId?: string; 
  public get captchaId() {
    return this.getStringAttribute('captcha_id');
  }
  public set captchaId(value: string) {
    this._captchaId = value;
  }
  public resetCaptchaId() {
    this._captchaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaIdInput() {
    return this._captchaId;
  }

  // challenge_type - computed: true, optional: false, required: false
  public get challengeType() {
    return this.getStringAttribute('challenge_type');
  }

  // client_key - computed: true, optional: false, required: false
  public get clientKey() {
    return this.getStringAttribute('client_key');
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

  // complexity - computed: true, optional: false, required: false
  public get complexity() {
    return this.getStringAttribute('complexity');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // deletion_protection - computed: true, optional: false, required: false
  public get deletionProtection() {
    return this.getBooleanAttribute('deletion_protection');
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

  // override_variant - computed: true, optional: false, required: false
  private _overrideVariant = new DataYandexSmartcaptchaCaptchaOverrideVariantList(this, "override_variant", false);
  public get overrideVariant() {
    return this._overrideVariant;
  }

  // pre_check_type - computed: true, optional: false, required: false
  public get preCheckType() {
    return this.getStringAttribute('pre_check_type');
  }

  // security_rule - computed: true, optional: false, required: false
  private _securityRule = new DataYandexSmartcaptchaCaptchaSecurityRuleList(this, "security_rule", false);
  public get securityRule() {
    return this._securityRule;
  }

  // style_json - computed: true, optional: false, required: false
  public get styleJson() {
    return this.getStringAttribute('style_json');
  }

  // suspend - computed: true, optional: false, required: false
  public get suspend() {
    return this.getBooleanAttribute('suspend');
  }

  // turn_off_hostname_check - computed: true, optional: false, required: false
  public get turnOffHostnameCheck() {
    return this.getBooleanAttribute('turn_off_hostname_check');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      captcha_id: cdktf.stringToTerraform(this._captchaId),
      cloud_id: cdktf.stringToTerraform(this._cloudId),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      captcha_id: {
        value: cdktf.stringToHclTerraform(this._captchaId),
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
