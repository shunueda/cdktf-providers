// https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/sws_security_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexSwsSecurityProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The `Cloud ID` which resource belongs to. If it is not provided, the default provider `cloud-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/sws_security_profile#cloud_id DataYandexSwsSecurityProfile#cloud_id}
  */
  readonly cloudId?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/sws_security_profile#folder_id DataYandexSwsSecurityProfile#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/sws_security_profile#id DataYandexSwsSecurityProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/sws_security_profile#name DataYandexSwsSecurityProfile#name}
  */
  readonly name?: string;
  /**
  * ID of the security profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/sws_security_profile#security_profile_id DataYandexSwsSecurityProfile#security_profile_id}
  */
  readonly securityProfileId?: string;
}
export interface DataYandexSwsSecurityProfileAnalyzeRequestBody {
}

export function dataYandexSwsSecurityProfileAnalyzeRequestBodyToTerraform(struct?: DataYandexSwsSecurityProfileAnalyzeRequestBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileAnalyzeRequestBodyToHclTerraform(struct?: DataYandexSwsSecurityProfileAnalyzeRequestBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileAnalyzeRequestBodyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileAnalyzeRequestBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileAnalyzeRequestBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // size_limit - computed: true, optional: false, required: false
  public get sizeLimit() {
    return this.getNumberAttribute('size_limit');
  }

  // size_limit_action - computed: true, optional: false, required: false
  public get sizeLimitAction() {
    return this.getStringAttribute('size_limit_action');
  }
}

export class DataYandexSwsSecurityProfileAnalyzeRequestBodyList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileAnalyzeRequestBodyOutputReference {
    return new DataYandexSwsSecurityProfileAnalyzeRequestBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthorities {
}

export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthoritiesToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthoritiesToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthoritiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthorities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthorities | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthoritiesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthoritiesOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthoritiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionAuthority {
}

export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorities - computed: true, optional: false, required: false
  private _authorities = new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityAuthoritiesList(this, "authorities", false);
  public get authorities() {
    return this._authorities;
  }
}

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHeadersValue {
}

export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHeadersValueToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHeadersValueToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHeadersValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHeadersValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHeadersValue | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHeadersValueList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHeadersValueOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHeadersValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHeaders {
}

export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHeadersToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHeadersToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHeaders | undefined) {
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
  private _value = new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHeadersValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHeadersOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethods {
}

export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethodsToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethodsToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethods | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethodsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethodsOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethod {
}

export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_methods - computed: true, optional: false, required: false
  private _httpMethods = new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodHttpMethodsList(this, "http_methods", false);
  public get httpMethods() {
    return this._httpMethods;
  }
}

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPath {
}

export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPathToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPathToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPath | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPathList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPathOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValue {
}

export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValueToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValueToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValue | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValueList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValueOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueries {
}

export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueries | undefined) {
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
  private _value = new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUri {
}

export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  private _path = new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriPathList(this, "path", false);
  public get path() {
    return this._path;
  }

  // queries - computed: true, optional: false, required: false
  private _queries = new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriQueriesList(this, "queries", false);
  public get queries() {
    return this._queries;
  }
}

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatch {
}

export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatchToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatchToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatch | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatchOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatch {
}

export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatchToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatchToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatch | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatchOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatch {
}

export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatchToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatchToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatch | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatchOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatch {
}

export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatchToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatchToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatch | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatchOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIp {
}

export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // geo_ip_match - computed: true, optional: false, required: false
  private _geoIpMatch = new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpMatchList(this, "geo_ip_match", false);
  public get geoIpMatch() {
    return this._geoIpMatch;
  }

  // geo_ip_not_match - computed: true, optional: false, required: false
  private _geoIpNotMatch = new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpGeoIpNotMatchList(this, "geo_ip_not_match", false);
  public get geoIpNotMatch() {
    return this._geoIpNotMatch;
  }

  // ip_ranges_match - computed: true, optional: false, required: false
  private _ipRangesMatch = new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesMatchList(this, "ip_ranges_match", false);
  public get ipRangesMatch() {
    return this._ipRangesMatch;
  }

  // ip_ranges_not_match - computed: true, optional: false, required: false
  private _ipRangesNotMatch = new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpIpRangesNotMatchList(this, "ip_ranges_not_match", false);
  public get ipRangesNotMatch() {
    return this._ipRangesNotMatch;
  }
}

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleRuleConditionCondition {
}

export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleConditionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleRuleConditionCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleRuleConditionCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authority - computed: true, optional: false, required: false
  private _authority = new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionAuthorityList(this, "authority", false);
  public get authority() {
    return this._authority;
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // http_method - computed: true, optional: false, required: false
  private _httpMethod = new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionHttpMethodList(this, "http_method", false);
  public get httpMethod() {
    return this._httpMethod;
  }

  // request_uri - computed: true, optional: false, required: false
  private _requestUri = new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionRequestUriList(this, "request_uri", false);
  public get requestUri() {
    return this._requestUri;
  }

  // source_ip - computed: true, optional: false, required: false
  private _sourceIp = new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionSourceIpList(this, "source_ip", false);
  public get sourceIp() {
    return this._sourceIp;
  }
}

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleRuleCondition {
}

export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleRuleConditionToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleRuleCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleRuleCondition | undefined) {
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
  private _condition = new DataYandexSwsSecurityProfileSecurityRuleRuleConditionConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }
}

export class DataYandexSwsSecurityProfileSecurityRuleRuleConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleRuleConditionOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleRuleConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthorities {
}

export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthoritiesToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthoritiesToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthoritiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthorities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthorities | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthoritiesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthoritiesOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthoritiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionAuthority {
}

export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorities - computed: true, optional: false, required: false
  private _authorities = new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityAuthoritiesList(this, "authorities", false);
  public get authorities() {
    return this._authorities;
  }
}

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValue {
}

export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValueToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValueToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValue | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValueList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValueOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHeaders {
}

export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHeaders | undefined) {
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
  private _value = new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethods {
}

export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethodsToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethodsToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethods | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethodsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethodsOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethod {
}

export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_methods - computed: true, optional: false, required: false
  private _httpMethods = new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodHttpMethodsList(this, "http_methods", false);
  public get httpMethods() {
    return this._httpMethods;
  }
}

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPath {
}

export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPathToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPathToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPath | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPathList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPathOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValue {
}

export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValueToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValueToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValue | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValueList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValueOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueries {
}

export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueries | undefined) {
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
  private _value = new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUri {
}

export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  private _path = new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriPathList(this, "path", false);
  public get path() {
    return this._path;
  }

  // queries - computed: true, optional: false, required: false
  private _queries = new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriQueriesList(this, "queries", false);
  public get queries() {
    return this._queries;
  }
}

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatch {
}

export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatchToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatchToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatch | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatchOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatch {
}

export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatchToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatchToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatch | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatchOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatch {
}

export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatchToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatchToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatch | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatchOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatch {
}

export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatchToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatchToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatch | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatchOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIp {
}

export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // geo_ip_match - computed: true, optional: false, required: false
  private _geoIpMatch = new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpMatchList(this, "geo_ip_match", false);
  public get geoIpMatch() {
    return this._geoIpMatch;
  }

  // geo_ip_not_match - computed: true, optional: false, required: false
  private _geoIpNotMatch = new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpGeoIpNotMatchList(this, "geo_ip_not_match", false);
  public get geoIpNotMatch() {
    return this._geoIpNotMatch;
  }

  // ip_ranges_match - computed: true, optional: false, required: false
  private _ipRangesMatch = new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesMatchList(this, "ip_ranges_match", false);
  public get ipRangesMatch() {
    return this._ipRangesMatch;
  }

  // ip_ranges_not_match - computed: true, optional: false, required: false
  private _ipRangesNotMatch = new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpIpRangesNotMatchList(this, "ip_ranges_not_match", false);
  public get ipRangesNotMatch() {
    return this._ipRangesNotMatch;
  }
}

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleSmartProtectionCondition {
}

export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleSmartProtectionCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authority - computed: true, optional: false, required: false
  private _authority = new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionAuthorityList(this, "authority", false);
  public get authority() {
    return this._authority;
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // http_method - computed: true, optional: false, required: false
  private _httpMethod = new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionHttpMethodList(this, "http_method", false);
  public get httpMethod() {
    return this._httpMethod;
  }

  // request_uri - computed: true, optional: false, required: false
  private _requestUri = new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionRequestUriList(this, "request_uri", false);
  public get requestUri() {
    return this._requestUri;
  }

  // source_ip - computed: true, optional: false, required: false
  private _sourceIp = new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionSourceIpList(this, "source_ip", false);
  public get sourceIp() {
    return this._sourceIp;
  }
}

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleSmartProtection {
}

export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleSmartProtectionToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleSmartProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleSmartProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleSmartProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }
}

export class DataYandexSwsSecurityProfileSecurityRuleSmartProtectionList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleSmartProtectionOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleWafConditionAuthorityAuthorities {
}

export function dataYandexSwsSecurityProfileSecurityRuleWafConditionAuthorityAuthoritiesToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionAuthorityAuthorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleWafConditionAuthorityAuthoritiesToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionAuthorityAuthorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionAuthorityAuthoritiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleWafConditionAuthorityAuthorities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleWafConditionAuthorityAuthorities | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionAuthorityAuthoritiesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleWafConditionAuthorityAuthoritiesOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleWafConditionAuthorityAuthoritiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleWafConditionAuthority {
}

export function dataYandexSwsSecurityProfileSecurityRuleWafConditionAuthorityToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleWafConditionAuthorityToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionAuthorityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleWafConditionAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleWafConditionAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorities - computed: true, optional: false, required: false
  private _authorities = new DataYandexSwsSecurityProfileSecurityRuleWafConditionAuthorityAuthoritiesList(this, "authorities", false);
  public get authorities() {
    return this._authorities;
  }
}

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionAuthorityList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleWafConditionAuthorityOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleWafConditionAuthorityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleWafConditionHeadersValue {
}

export function dataYandexSwsSecurityProfileSecurityRuleWafConditionHeadersValueToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleWafConditionHeadersValueToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionHeadersValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleWafConditionHeadersValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleWafConditionHeadersValue | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionHeadersValueList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleWafConditionHeadersValueOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleWafConditionHeadersValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleWafConditionHeaders {
}

export function dataYandexSwsSecurityProfileSecurityRuleWafConditionHeadersToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleWafConditionHeadersToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleWafConditionHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleWafConditionHeaders | undefined) {
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
  private _value = new DataYandexSwsSecurityProfileSecurityRuleWafConditionHeadersValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleWafConditionHeadersOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleWafConditionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethods {
}

export function dataYandexSwsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethodsToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethodsToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethods | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethodsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethodsOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleWafConditionHttpMethod {
}

export function dataYandexSwsSecurityProfileSecurityRuleWafConditionHttpMethodToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleWafConditionHttpMethodToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionHttpMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleWafConditionHttpMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleWafConditionHttpMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_methods - computed: true, optional: false, required: false
  private _httpMethods = new DataYandexSwsSecurityProfileSecurityRuleWafConditionHttpMethodHttpMethodsList(this, "http_methods", false);
  public get httpMethods() {
    return this._httpMethods;
  }
}

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionHttpMethodList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleWafConditionHttpMethodOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleWafConditionHttpMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriPath {
}

export function dataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriPathToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriPathToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriPath | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriPathList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriPathOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValue {
}

export function dataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValueToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValueToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValue | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValueList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValueOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriQueries {
}

export function dataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriQueries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriQueries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriQueries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriQueries | undefined) {
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
  private _value = new DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUri {
}

export function dataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  private _path = new DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriPathList(this, "path", false);
  public get path() {
    return this._path;
  }

  // queries - computed: true, optional: false, required: false
  private _queries = new DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriQueriesList(this, "queries", false);
  public get queries() {
    return this._queries;
  }
}

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatch {
}

export function dataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatchToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatchToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatch | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatchOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatch {
}

export function dataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatchToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatchToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatch | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatchOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatch {
}

export function dataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatchToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatchToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatch | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatchOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatch {
}

export function dataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatchToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatchToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatch | undefined) {
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

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatchOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIp {
}

export function dataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // geo_ip_match - computed: true, optional: false, required: false
  private _geoIpMatch = new DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpMatchList(this, "geo_ip_match", false);
  public get geoIpMatch() {
    return this._geoIpMatch;
  }

  // geo_ip_not_match - computed: true, optional: false, required: false
  private _geoIpNotMatch = new DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpGeoIpNotMatchList(this, "geo_ip_not_match", false);
  public get geoIpNotMatch() {
    return this._geoIpNotMatch;
  }

  // ip_ranges_match - computed: true, optional: false, required: false
  private _ipRangesMatch = new DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesMatchList(this, "ip_ranges_match", false);
  public get ipRangesMatch() {
    return this._ipRangesMatch;
  }

  // ip_ranges_not_match - computed: true, optional: false, required: false
  private _ipRangesNotMatch = new DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpIpRangesNotMatchList(this, "ip_ranges_not_match", false);
  public get ipRangesNotMatch() {
    return this._ipRangesNotMatch;
  }
}

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleWafCondition {
}

export function dataYandexSwsSecurityProfileSecurityRuleWafConditionToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleWafConditionToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWafCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleWafCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleWafCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authority - computed: true, optional: false, required: false
  private _authority = new DataYandexSwsSecurityProfileSecurityRuleWafConditionAuthorityList(this, "authority", false);
  public get authority() {
    return this._authority;
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataYandexSwsSecurityProfileSecurityRuleWafConditionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // http_method - computed: true, optional: false, required: false
  private _httpMethod = new DataYandexSwsSecurityProfileSecurityRuleWafConditionHttpMethodList(this, "http_method", false);
  public get httpMethod() {
    return this._httpMethod;
  }

  // request_uri - computed: true, optional: false, required: false
  private _requestUri = new DataYandexSwsSecurityProfileSecurityRuleWafConditionRequestUriList(this, "request_uri", false);
  public get requestUri() {
    return this._requestUri;
  }

  // source_ip - computed: true, optional: false, required: false
  private _sourceIp = new DataYandexSwsSecurityProfileSecurityRuleWafConditionSourceIpList(this, "source_ip", false);
  public get sourceIp() {
    return this._sourceIp;
  }
}

export class DataYandexSwsSecurityProfileSecurityRuleWafConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleWafConditionOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleWafConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRuleWaf {
}

export function dataYandexSwsSecurityProfileSecurityRuleWafToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWaf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleWafToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRuleWaf): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleWafOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRuleWaf | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRuleWaf | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataYandexSwsSecurityProfileSecurityRuleWafConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }

  // mode - computed: true, optional: false, required: false
  public get mode() {
    return this.getStringAttribute('mode');
  }

  // waf_profile_id - computed: true, optional: false, required: false
  public get wafProfileId() {
    return this.getStringAttribute('waf_profile_id');
  }
}

export class DataYandexSwsSecurityProfileSecurityRuleWafList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleWafOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleWafOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsSecurityProfileSecurityRule {
}

export function dataYandexSwsSecurityProfileSecurityRuleToTerraform(struct?: DataYandexSwsSecurityProfileSecurityRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsSecurityProfileSecurityRuleToHclTerraform(struct?: DataYandexSwsSecurityProfileSecurityRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsSecurityProfileSecurityRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsSecurityProfileSecurityRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsSecurityProfileSecurityRule | undefined) {
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

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // rule_condition - computed: true, optional: false, required: false
  private _ruleCondition = new DataYandexSwsSecurityProfileSecurityRuleRuleConditionList(this, "rule_condition", false);
  public get ruleCondition() {
    return this._ruleCondition;
  }

  // smart_protection - computed: true, optional: false, required: false
  private _smartProtection = new DataYandexSwsSecurityProfileSecurityRuleSmartProtectionList(this, "smart_protection", false);
  public get smartProtection() {
    return this._smartProtection;
  }

  // waf - computed: true, optional: false, required: false
  private _waf = new DataYandexSwsSecurityProfileSecurityRuleWafList(this, "waf", false);
  public get waf() {
    return this._waf;
  }
}

export class DataYandexSwsSecurityProfileSecurityRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsSecurityProfileSecurityRuleOutputReference {
    return new DataYandexSwsSecurityProfileSecurityRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/sws_security_profile yandex_sws_security_profile}
*/
export class DataYandexSwsSecurityProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_sws_security_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexSwsSecurityProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexSwsSecurityProfile to import
  * @param importFromId The id of the existing DataYandexSwsSecurityProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/sws_security_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexSwsSecurityProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_sws_security_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.176.0/docs/data-sources/sws_security_profile yandex_sws_security_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexSwsSecurityProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexSwsSecurityProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_sws_security_profile',
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
    this._cloudId = config.cloudId;
    this._folderId = config.folderId;
    this._id = config.id;
    this._name = config.name;
    this._securityProfileId = config.securityProfileId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // advanced_rate_limiter_profile_id - computed: true, optional: false, required: false
  public get advancedRateLimiterProfileId() {
    return this.getStringAttribute('advanced_rate_limiter_profile_id');
  }

  // analyze_request_body - computed: true, optional: false, required: false
  private _analyzeRequestBody = new DataYandexSwsSecurityProfileAnalyzeRequestBodyList(this, "analyze_request_body", false);
  public get analyzeRequestBody() {
    return this._analyzeRequestBody;
  }

  // captcha_id - computed: true, optional: false, required: false
  public get captchaId() {
    return this.getStringAttribute('captcha_id');
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

  // default_action - computed: true, optional: false, required: false
  public get defaultAction() {
    return this.getStringAttribute('default_action');
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

  // security_profile_id - computed: false, optional: true, required: false
  private _securityProfileId?: string; 
  public get securityProfileId() {
    return this.getStringAttribute('security_profile_id');
  }
  public set securityProfileId(value: string) {
    this._securityProfileId = value;
  }
  public resetSecurityProfileId() {
    this._securityProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityProfileIdInput() {
    return this._securityProfileId;
  }

  // security_rule - computed: true, optional: false, required: false
  private _securityRule = new DataYandexSwsSecurityProfileSecurityRuleList(this, "security_rule", false);
  public get securityRule() {
    return this._securityRule;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cloud_id: cdktf.stringToTerraform(this._cloudId),
      folder_id: cdktf.stringToTerraform(this._folderId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      security_profile_id: cdktf.stringToTerraform(this._securityProfileId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      security_profile_id: {
        value: cdktf.stringToHclTerraform(this._securityProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
