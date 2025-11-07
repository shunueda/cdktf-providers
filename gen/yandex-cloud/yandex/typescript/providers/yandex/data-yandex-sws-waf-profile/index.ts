// https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/sws_waf_profile
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataYandexSwsWafProfileConfig extends cdktf.TerraformMetaArguments {
  /**
  * The `Cloud ID` which resource belongs to. If it is not provided, the default provider `cloud-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/sws_waf_profile#cloud_id DataYandexSwsWafProfile#cloud_id}
  */
  readonly cloudId?: string;
  /**
  * The folder identifier that resource belongs to. If it is not provided, the default provider `folder-id` is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/sws_waf_profile#folder_id DataYandexSwsWafProfile#folder_id}
  */
  readonly folderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/sws_waf_profile#id DataYandexSwsWafProfile#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name of waf profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/sws_waf_profile#name DataYandexSwsWafProfile#name}
  */
  readonly name?: string;
  /**
  * ID of the WAF profile.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/sws_waf_profile#waf_profile_id DataYandexSwsWafProfile#waf_profile_id}
  */
  readonly wafProfileId?: string;
}
export interface DataYandexSwsWafProfileAnalyzeRequestBody {
}

export function dataYandexSwsWafProfileAnalyzeRequestBodyToTerraform(struct?: DataYandexSwsWafProfileAnalyzeRequestBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileAnalyzeRequestBodyToHclTerraform(struct?: DataYandexSwsWafProfileAnalyzeRequestBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileAnalyzeRequestBodyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileAnalyzeRequestBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileAnalyzeRequestBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
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

export class DataYandexSwsWafProfileAnalyzeRequestBodyList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileAnalyzeRequestBodyOutputReference {
    return new DataYandexSwsWafProfileAnalyzeRequestBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileCoreRuleSetRuleSet {
}

export function dataYandexSwsWafProfileCoreRuleSetRuleSetToTerraform(struct?: DataYandexSwsWafProfileCoreRuleSetRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileCoreRuleSetRuleSetToHclTerraform(struct?: DataYandexSwsWafProfileCoreRuleSetRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileCoreRuleSetRuleSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileCoreRuleSetRuleSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileCoreRuleSetRuleSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataYandexSwsWafProfileCoreRuleSetRuleSetList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileCoreRuleSetRuleSetOutputReference {
    return new DataYandexSwsWafProfileCoreRuleSetRuleSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileCoreRuleSet {
}

export function dataYandexSwsWafProfileCoreRuleSetToTerraform(struct?: DataYandexSwsWafProfileCoreRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileCoreRuleSetToHclTerraform(struct?: DataYandexSwsWafProfileCoreRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileCoreRuleSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileCoreRuleSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileCoreRuleSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inbound_anomaly_score - computed: true, optional: false, required: false
  public get inboundAnomalyScore() {
    return this.getNumberAttribute('inbound_anomaly_score');
  }

  // paranoia_level - computed: true, optional: false, required: false
  public get paranoiaLevel() {
    return this.getNumberAttribute('paranoia_level');
  }

  // rule_set - computed: true, optional: false, required: false
  private _ruleSet = new DataYandexSwsWafProfileCoreRuleSetRuleSetList(this, "rule_set", false);
  public get ruleSet() {
    return this._ruleSet;
  }
}

export class DataYandexSwsWafProfileCoreRuleSetList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileCoreRuleSetOutputReference {
    return new DataYandexSwsWafProfileCoreRuleSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileExclusionRuleConditionAuthorityAuthorities {
}

export function dataYandexSwsWafProfileExclusionRuleConditionAuthorityAuthoritiesToTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionAuthorityAuthorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileExclusionRuleConditionAuthorityAuthoritiesToHclTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionAuthorityAuthorities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileExclusionRuleConditionAuthorityAuthoritiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileExclusionRuleConditionAuthorityAuthorities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileExclusionRuleConditionAuthorityAuthorities | undefined) {
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

export class DataYandexSwsWafProfileExclusionRuleConditionAuthorityAuthoritiesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileExclusionRuleConditionAuthorityAuthoritiesOutputReference {
    return new DataYandexSwsWafProfileExclusionRuleConditionAuthorityAuthoritiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileExclusionRuleConditionAuthority {
}

export function dataYandexSwsWafProfileExclusionRuleConditionAuthorityToTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileExclusionRuleConditionAuthorityToHclTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionAuthority): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileExclusionRuleConditionAuthorityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileExclusionRuleConditionAuthority | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileExclusionRuleConditionAuthority | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authorities - computed: true, optional: false, required: false
  private _authorities = new DataYandexSwsWafProfileExclusionRuleConditionAuthorityAuthoritiesList(this, "authorities", false);
  public get authorities() {
    return this._authorities;
  }
}

export class DataYandexSwsWafProfileExclusionRuleConditionAuthorityList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileExclusionRuleConditionAuthorityOutputReference {
    return new DataYandexSwsWafProfileExclusionRuleConditionAuthorityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileExclusionRuleConditionHeadersValue {
}

export function dataYandexSwsWafProfileExclusionRuleConditionHeadersValueToTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileExclusionRuleConditionHeadersValueToHclTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionHeadersValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileExclusionRuleConditionHeadersValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileExclusionRuleConditionHeadersValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileExclusionRuleConditionHeadersValue | undefined) {
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

export class DataYandexSwsWafProfileExclusionRuleConditionHeadersValueList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileExclusionRuleConditionHeadersValueOutputReference {
    return new DataYandexSwsWafProfileExclusionRuleConditionHeadersValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileExclusionRuleConditionHeaders {
}

export function dataYandexSwsWafProfileExclusionRuleConditionHeadersToTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileExclusionRuleConditionHeadersToHclTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileExclusionRuleConditionHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileExclusionRuleConditionHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileExclusionRuleConditionHeaders | undefined) {
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
  private _value = new DataYandexSwsWafProfileExclusionRuleConditionHeadersValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataYandexSwsWafProfileExclusionRuleConditionHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileExclusionRuleConditionHeadersOutputReference {
    return new DataYandexSwsWafProfileExclusionRuleConditionHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileExclusionRuleConditionHttpMethodHttpMethods {
}

export function dataYandexSwsWafProfileExclusionRuleConditionHttpMethodHttpMethodsToTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionHttpMethodHttpMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileExclusionRuleConditionHttpMethodHttpMethodsToHclTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionHttpMethodHttpMethods): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileExclusionRuleConditionHttpMethodHttpMethodsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileExclusionRuleConditionHttpMethodHttpMethods | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileExclusionRuleConditionHttpMethodHttpMethods | undefined) {
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

export class DataYandexSwsWafProfileExclusionRuleConditionHttpMethodHttpMethodsList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileExclusionRuleConditionHttpMethodHttpMethodsOutputReference {
    return new DataYandexSwsWafProfileExclusionRuleConditionHttpMethodHttpMethodsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileExclusionRuleConditionHttpMethod {
}

export function dataYandexSwsWafProfileExclusionRuleConditionHttpMethodToTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileExclusionRuleConditionHttpMethodToHclTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionHttpMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileExclusionRuleConditionHttpMethodOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileExclusionRuleConditionHttpMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileExclusionRuleConditionHttpMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // http_methods - computed: true, optional: false, required: false
  private _httpMethods = new DataYandexSwsWafProfileExclusionRuleConditionHttpMethodHttpMethodsList(this, "http_methods", false);
  public get httpMethods() {
    return this._httpMethods;
  }
}

export class DataYandexSwsWafProfileExclusionRuleConditionHttpMethodList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileExclusionRuleConditionHttpMethodOutputReference {
    return new DataYandexSwsWafProfileExclusionRuleConditionHttpMethodOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileExclusionRuleConditionRequestUriPath {
}

export function dataYandexSwsWafProfileExclusionRuleConditionRequestUriPathToTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionRequestUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileExclusionRuleConditionRequestUriPathToHclTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionRequestUriPath): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileExclusionRuleConditionRequestUriPathOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileExclusionRuleConditionRequestUriPath | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileExclusionRuleConditionRequestUriPath | undefined) {
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

export class DataYandexSwsWafProfileExclusionRuleConditionRequestUriPathList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileExclusionRuleConditionRequestUriPathOutputReference {
    return new DataYandexSwsWafProfileExclusionRuleConditionRequestUriPathOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileExclusionRuleConditionRequestUriQueriesValue {
}

export function dataYandexSwsWafProfileExclusionRuleConditionRequestUriQueriesValueToTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionRequestUriQueriesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileExclusionRuleConditionRequestUriQueriesValueToHclTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionRequestUriQueriesValue): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileExclusionRuleConditionRequestUriQueriesValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileExclusionRuleConditionRequestUriQueriesValue | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileExclusionRuleConditionRequestUriQueriesValue | undefined) {
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

export class DataYandexSwsWafProfileExclusionRuleConditionRequestUriQueriesValueList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileExclusionRuleConditionRequestUriQueriesValueOutputReference {
    return new DataYandexSwsWafProfileExclusionRuleConditionRequestUriQueriesValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileExclusionRuleConditionRequestUriQueries {
}

export function dataYandexSwsWafProfileExclusionRuleConditionRequestUriQueriesToTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionRequestUriQueries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileExclusionRuleConditionRequestUriQueriesToHclTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionRequestUriQueries): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileExclusionRuleConditionRequestUriQueriesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileExclusionRuleConditionRequestUriQueries | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileExclusionRuleConditionRequestUriQueries | undefined) {
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
  private _value = new DataYandexSwsWafProfileExclusionRuleConditionRequestUriQueriesValueList(this, "value", false);
  public get value() {
    return this._value;
  }
}

export class DataYandexSwsWafProfileExclusionRuleConditionRequestUriQueriesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileExclusionRuleConditionRequestUriQueriesOutputReference {
    return new DataYandexSwsWafProfileExclusionRuleConditionRequestUriQueriesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileExclusionRuleConditionRequestUri {
}

export function dataYandexSwsWafProfileExclusionRuleConditionRequestUriToTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileExclusionRuleConditionRequestUriToHclTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionRequestUri): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileExclusionRuleConditionRequestUriOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileExclusionRuleConditionRequestUri | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileExclusionRuleConditionRequestUri | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // path - computed: true, optional: false, required: false
  private _path = new DataYandexSwsWafProfileExclusionRuleConditionRequestUriPathList(this, "path", false);
  public get path() {
    return this._path;
  }

  // queries - computed: true, optional: false, required: false
  private _queries = new DataYandexSwsWafProfileExclusionRuleConditionRequestUriQueriesList(this, "queries", false);
  public get queries() {
    return this._queries;
  }
}

export class DataYandexSwsWafProfileExclusionRuleConditionRequestUriList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileExclusionRuleConditionRequestUriOutputReference {
    return new DataYandexSwsWafProfileExclusionRuleConditionRequestUriOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileExclusionRuleConditionSourceIpGeoIpMatch {
}

export function dataYandexSwsWafProfileExclusionRuleConditionSourceIpGeoIpMatchToTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionSourceIpGeoIpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileExclusionRuleConditionSourceIpGeoIpMatchToHclTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionSourceIpGeoIpMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileExclusionRuleConditionSourceIpGeoIpMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileExclusionRuleConditionSourceIpGeoIpMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileExclusionRuleConditionSourceIpGeoIpMatch | undefined) {
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

export class DataYandexSwsWafProfileExclusionRuleConditionSourceIpGeoIpMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileExclusionRuleConditionSourceIpGeoIpMatchOutputReference {
    return new DataYandexSwsWafProfileExclusionRuleConditionSourceIpGeoIpMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatch {
}

export function dataYandexSwsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatchToTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatchToHclTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatch | undefined) {
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

export class DataYandexSwsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatchOutputReference {
    return new DataYandexSwsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileExclusionRuleConditionSourceIpIpRangesMatch {
}

export function dataYandexSwsWafProfileExclusionRuleConditionSourceIpIpRangesMatchToTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionSourceIpIpRangesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileExclusionRuleConditionSourceIpIpRangesMatchToHclTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionSourceIpIpRangesMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileExclusionRuleConditionSourceIpIpRangesMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileExclusionRuleConditionSourceIpIpRangesMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileExclusionRuleConditionSourceIpIpRangesMatch | undefined) {
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

export class DataYandexSwsWafProfileExclusionRuleConditionSourceIpIpRangesMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileExclusionRuleConditionSourceIpIpRangesMatchOutputReference {
    return new DataYandexSwsWafProfileExclusionRuleConditionSourceIpIpRangesMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatch {
}

export function dataYandexSwsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatchToTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatchToHclTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatch): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatchOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatch | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatch | undefined) {
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

export class DataYandexSwsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatchList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatchOutputReference {
    return new DataYandexSwsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatchOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileExclusionRuleConditionSourceIp {
}

export function dataYandexSwsWafProfileExclusionRuleConditionSourceIpToTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileExclusionRuleConditionSourceIpToHclTerraform(struct?: DataYandexSwsWafProfileExclusionRuleConditionSourceIp): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileExclusionRuleConditionSourceIpOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileExclusionRuleConditionSourceIp | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileExclusionRuleConditionSourceIp | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // geo_ip_match - computed: true, optional: false, required: false
  private _geoIpMatch = new DataYandexSwsWafProfileExclusionRuleConditionSourceIpGeoIpMatchList(this, "geo_ip_match", false);
  public get geoIpMatch() {
    return this._geoIpMatch;
  }

  // geo_ip_not_match - computed: true, optional: false, required: false
  private _geoIpNotMatch = new DataYandexSwsWafProfileExclusionRuleConditionSourceIpGeoIpNotMatchList(this, "geo_ip_not_match", false);
  public get geoIpNotMatch() {
    return this._geoIpNotMatch;
  }

  // ip_ranges_match - computed: true, optional: false, required: false
  private _ipRangesMatch = new DataYandexSwsWafProfileExclusionRuleConditionSourceIpIpRangesMatchList(this, "ip_ranges_match", false);
  public get ipRangesMatch() {
    return this._ipRangesMatch;
  }

  // ip_ranges_not_match - computed: true, optional: false, required: false
  private _ipRangesNotMatch = new DataYandexSwsWafProfileExclusionRuleConditionSourceIpIpRangesNotMatchList(this, "ip_ranges_not_match", false);
  public get ipRangesNotMatch() {
    return this._ipRangesNotMatch;
  }
}

export class DataYandexSwsWafProfileExclusionRuleConditionSourceIpList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileExclusionRuleConditionSourceIpOutputReference {
    return new DataYandexSwsWafProfileExclusionRuleConditionSourceIpOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileExclusionRuleCondition {
}

export function dataYandexSwsWafProfileExclusionRuleConditionToTerraform(struct?: DataYandexSwsWafProfileExclusionRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileExclusionRuleConditionToHclTerraform(struct?: DataYandexSwsWafProfileExclusionRuleCondition): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileExclusionRuleConditionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileExclusionRuleCondition | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileExclusionRuleCondition | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // authority - computed: true, optional: false, required: false
  private _authority = new DataYandexSwsWafProfileExclusionRuleConditionAuthorityList(this, "authority", false);
  public get authority() {
    return this._authority;
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataYandexSwsWafProfileExclusionRuleConditionHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // http_method - computed: true, optional: false, required: false
  private _httpMethod = new DataYandexSwsWafProfileExclusionRuleConditionHttpMethodList(this, "http_method", false);
  public get httpMethod() {
    return this._httpMethod;
  }

  // request_uri - computed: true, optional: false, required: false
  private _requestUri = new DataYandexSwsWafProfileExclusionRuleConditionRequestUriList(this, "request_uri", false);
  public get requestUri() {
    return this._requestUri;
  }

  // source_ip - computed: true, optional: false, required: false
  private _sourceIp = new DataYandexSwsWafProfileExclusionRuleConditionSourceIpList(this, "source_ip", false);
  public get sourceIp() {
    return this._sourceIp;
  }
}

export class DataYandexSwsWafProfileExclusionRuleConditionList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileExclusionRuleConditionOutputReference {
    return new DataYandexSwsWafProfileExclusionRuleConditionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileExclusionRuleExcludeRules {
}

export function dataYandexSwsWafProfileExclusionRuleExcludeRulesToTerraform(struct?: DataYandexSwsWafProfileExclusionRuleExcludeRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileExclusionRuleExcludeRulesToHclTerraform(struct?: DataYandexSwsWafProfileExclusionRuleExcludeRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileExclusionRuleExcludeRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileExclusionRuleExcludeRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileExclusionRuleExcludeRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // exclude_all - computed: true, optional: false, required: false
  public get excludeAll() {
    return this.getBooleanAttribute('exclude_all');
  }

  // rule_ids - computed: true, optional: false, required: false
  public get ruleIds() {
    return this.getListAttribute('rule_ids');
  }
}

export class DataYandexSwsWafProfileExclusionRuleExcludeRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileExclusionRuleExcludeRulesOutputReference {
    return new DataYandexSwsWafProfileExclusionRuleExcludeRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileExclusionRule {
}

export function dataYandexSwsWafProfileExclusionRuleToTerraform(struct?: DataYandexSwsWafProfileExclusionRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileExclusionRuleToHclTerraform(struct?: DataYandexSwsWafProfileExclusionRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileExclusionRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileExclusionRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileExclusionRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // condition - computed: true, optional: false, required: false
  private _condition = new DataYandexSwsWafProfileExclusionRuleConditionList(this, "condition", false);
  public get condition() {
    return this._condition;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // exclude_rules - computed: true, optional: false, required: false
  private _excludeRules = new DataYandexSwsWafProfileExclusionRuleExcludeRulesList(this, "exclude_rules", false);
  public get excludeRules() {
    return this._excludeRules;
  }

  // log_excluded - computed: true, optional: false, required: false
  public get logExcluded() {
    return this.getBooleanAttribute('log_excluded');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataYandexSwsWafProfileExclusionRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileExclusionRuleOutputReference {
    return new DataYandexSwsWafProfileExclusionRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileRule {
}

export function dataYandexSwsWafProfileRuleToTerraform(struct?: DataYandexSwsWafProfileRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileRuleToHclTerraform(struct?: DataYandexSwsWafProfileRule): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileRuleOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileRule | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileRule | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // is_blocking - computed: true, optional: false, required: false
  public get isBlocking() {
    return this.getBooleanAttribute('is_blocking');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getStringAttribute('rule_id');
  }
}

export class DataYandexSwsWafProfileRuleList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileRuleOutputReference {
    return new DataYandexSwsWafProfileRuleOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileRuleSetCoreRuleSetRuleSet {
}

export function dataYandexSwsWafProfileRuleSetCoreRuleSetRuleSetToTerraform(struct?: DataYandexSwsWafProfileRuleSetCoreRuleSetRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileRuleSetCoreRuleSetRuleSetToHclTerraform(struct?: DataYandexSwsWafProfileRuleSetCoreRuleSetRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileRuleSetCoreRuleSetRuleSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileRuleSetCoreRuleSetRuleSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileRuleSetCoreRuleSetRuleSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataYandexSwsWafProfileRuleSetCoreRuleSetRuleSetList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileRuleSetCoreRuleSetRuleSetOutputReference {
    return new DataYandexSwsWafProfileRuleSetCoreRuleSetRuleSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileRuleSetCoreRuleSet {
}

export function dataYandexSwsWafProfileRuleSetCoreRuleSetToTerraform(struct?: DataYandexSwsWafProfileRuleSetCoreRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileRuleSetCoreRuleSetToHclTerraform(struct?: DataYandexSwsWafProfileRuleSetCoreRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileRuleSetCoreRuleSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileRuleSetCoreRuleSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileRuleSetCoreRuleSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // inbound_anomaly_score - computed: true, optional: false, required: false
  public get inboundAnomalyScore() {
    return this.getNumberAttribute('inbound_anomaly_score');
  }

  // paranoia_level - computed: true, optional: false, required: false
  public get paranoiaLevel() {
    return this.getNumberAttribute('paranoia_level');
  }

  // rule_set - computed: true, optional: false, required: false
  private _ruleSet = new DataYandexSwsWafProfileRuleSetCoreRuleSetRuleSetList(this, "rule_set", false);
  public get ruleSet() {
    return this._ruleSet;
  }
}

export class DataYandexSwsWafProfileRuleSetCoreRuleSetList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileRuleSetCoreRuleSetOutputReference {
    return new DataYandexSwsWafProfileRuleSetCoreRuleSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileRuleSetMlRuleSetRuleGroup {
}

export function dataYandexSwsWafProfileRuleSetMlRuleSetRuleGroupToTerraform(struct?: DataYandexSwsWafProfileRuleSetMlRuleSetRuleGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileRuleSetMlRuleSetRuleGroupToHclTerraform(struct?: DataYandexSwsWafProfileRuleSetMlRuleSetRuleGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileRuleSetMlRuleSetRuleGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileRuleSetMlRuleSetRuleGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileRuleSetMlRuleSetRuleGroup | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inbound_anomaly_score - computed: true, optional: false, required: false
  public get inboundAnomalyScore() {
    return this.getNumberAttribute('inbound_anomaly_score');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}

export class DataYandexSwsWafProfileRuleSetMlRuleSetRuleGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileRuleSetMlRuleSetRuleGroupOutputReference {
    return new DataYandexSwsWafProfileRuleSetMlRuleSetRuleGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileRuleSetMlRuleSetRuleSet {
}

export function dataYandexSwsWafProfileRuleSetMlRuleSetRuleSetToTerraform(struct?: DataYandexSwsWafProfileRuleSetMlRuleSetRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileRuleSetMlRuleSetRuleSetToHclTerraform(struct?: DataYandexSwsWafProfileRuleSetMlRuleSetRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileRuleSetMlRuleSetRuleSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileRuleSetMlRuleSetRuleSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileRuleSetMlRuleSetRuleSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataYandexSwsWafProfileRuleSetMlRuleSetRuleSetList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileRuleSetMlRuleSetRuleSetOutputReference {
    return new DataYandexSwsWafProfileRuleSetMlRuleSetRuleSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileRuleSetMlRuleSet {
}

export function dataYandexSwsWafProfileRuleSetMlRuleSetToTerraform(struct?: DataYandexSwsWafProfileRuleSetMlRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileRuleSetMlRuleSetToHclTerraform(struct?: DataYandexSwsWafProfileRuleSetMlRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileRuleSetMlRuleSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileRuleSetMlRuleSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileRuleSetMlRuleSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rule_group - computed: true, optional: false, required: false
  private _ruleGroup = new DataYandexSwsWafProfileRuleSetMlRuleSetRuleGroupList(this, "rule_group", false);
  public get ruleGroup() {
    return this._ruleGroup;
  }

  // rule_set - computed: true, optional: false, required: false
  private _ruleSet = new DataYandexSwsWafProfileRuleSetMlRuleSetRuleSetList(this, "rule_set", false);
  public get ruleSet() {
    return this._ruleSet;
  }
}

export class DataYandexSwsWafProfileRuleSetMlRuleSetList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileRuleSetMlRuleSetOutputReference {
    return new DataYandexSwsWafProfileRuleSetMlRuleSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileRuleSetYaRuleSetRuleGroup {
}

export function dataYandexSwsWafProfileRuleSetYaRuleSetRuleGroupToTerraform(struct?: DataYandexSwsWafProfileRuleSetYaRuleSetRuleGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileRuleSetYaRuleSetRuleGroupToHclTerraform(struct?: DataYandexSwsWafProfileRuleSetYaRuleSetRuleGroup): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileRuleSetYaRuleSetRuleGroupOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileRuleSetYaRuleSetRuleGroup | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileRuleSetYaRuleSetRuleGroup | undefined) {
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // inbound_anomaly_score - computed: true, optional: false, required: false
  public get inboundAnomalyScore() {
    return this.getNumberAttribute('inbound_anomaly_score');
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
}

export class DataYandexSwsWafProfileRuleSetYaRuleSetRuleGroupList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileRuleSetYaRuleSetRuleGroupOutputReference {
    return new DataYandexSwsWafProfileRuleSetYaRuleSetRuleGroupOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileRuleSetYaRuleSetRuleSet {
}

export function dataYandexSwsWafProfileRuleSetYaRuleSetRuleSetToTerraform(struct?: DataYandexSwsWafProfileRuleSetYaRuleSetRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileRuleSetYaRuleSetRuleSetToHclTerraform(struct?: DataYandexSwsWafProfileRuleSetYaRuleSetRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileRuleSetYaRuleSetRuleSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileRuleSetYaRuleSetRuleSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileRuleSetYaRuleSetRuleSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getStringAttribute('version');
  }
}

export class DataYandexSwsWafProfileRuleSetYaRuleSetRuleSetList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileRuleSetYaRuleSetRuleSetOutputReference {
    return new DataYandexSwsWafProfileRuleSetYaRuleSetRuleSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileRuleSetYaRuleSet {
}

export function dataYandexSwsWafProfileRuleSetYaRuleSetToTerraform(struct?: DataYandexSwsWafProfileRuleSetYaRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileRuleSetYaRuleSetToHclTerraform(struct?: DataYandexSwsWafProfileRuleSetYaRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileRuleSetYaRuleSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileRuleSetYaRuleSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileRuleSetYaRuleSet | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rule_group - computed: true, optional: false, required: false
  private _ruleGroup = new DataYandexSwsWafProfileRuleSetYaRuleSetRuleGroupList(this, "rule_group", false);
  public get ruleGroup() {
    return this._ruleGroup;
  }

  // rule_set - computed: true, optional: false, required: false
  private _ruleSet = new DataYandexSwsWafProfileRuleSetYaRuleSetRuleSetList(this, "rule_set", false);
  public get ruleSet() {
    return this._ruleSet;
  }
}

export class DataYandexSwsWafProfileRuleSetYaRuleSetList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileRuleSetYaRuleSetOutputReference {
    return new DataYandexSwsWafProfileRuleSetYaRuleSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataYandexSwsWafProfileRuleSet {
}

export function dataYandexSwsWafProfileRuleSetToTerraform(struct?: DataYandexSwsWafProfileRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataYandexSwsWafProfileRuleSetToHclTerraform(struct?: DataYandexSwsWafProfileRuleSet): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataYandexSwsWafProfileRuleSetOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataYandexSwsWafProfileRuleSet | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataYandexSwsWafProfileRuleSet | undefined) {
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

  // core_rule_set - computed: true, optional: false, required: false
  private _coreRuleSet = new DataYandexSwsWafProfileRuleSetCoreRuleSetList(this, "core_rule_set", false);
  public get coreRuleSet() {
    return this._coreRuleSet;
  }

  // is_enabled - computed: true, optional: false, required: false
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }

  // ml_rule_set - computed: true, optional: false, required: false
  private _mlRuleSet = new DataYandexSwsWafProfileRuleSetMlRuleSetList(this, "ml_rule_set", false);
  public get mlRuleSet() {
    return this._mlRuleSet;
  }

  // priority - computed: true, optional: false, required: false
  public get priority() {
    return this.getNumberAttribute('priority');
  }

  // ya_rule_set - computed: true, optional: false, required: false
  private _yaRuleSet = new DataYandexSwsWafProfileRuleSetYaRuleSetList(this, "ya_rule_set", false);
  public get yaRuleSet() {
    return this._yaRuleSet;
  }
}

export class DataYandexSwsWafProfileRuleSetList extends cdktf.ComplexList {

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
  public get(index: number): DataYandexSwsWafProfileRuleSetOutputReference {
    return new DataYandexSwsWafProfileRuleSetOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/sws_waf_profile yandex_sws_waf_profile}
*/
export class DataYandexSwsWafProfile extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "yandex_sws_waf_profile";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataYandexSwsWafProfile resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataYandexSwsWafProfile to import
  * @param importFromId The id of the existing DataYandexSwsWafProfile that should be imported. Refer to the {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/sws_waf_profile#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataYandexSwsWafProfile to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "yandex_sws_waf_profile", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/yandex-cloud/yandex/0.169.0/docs/data-sources/sws_waf_profile yandex_sws_waf_profile} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataYandexSwsWafProfileConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataYandexSwsWafProfileConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'yandex_sws_waf_profile',
      terraformGeneratorMetadata: {
        providerName: 'yandex',
        providerVersion: '0.169.0'
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
    this._wafProfileId = config.wafProfileId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // analyze_request_body - computed: true, optional: false, required: false
  private _analyzeRequestBody = new DataYandexSwsWafProfileAnalyzeRequestBodyList(this, "analyze_request_body", false);
  public get analyzeRequestBody() {
    return this._analyzeRequestBody;
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

  // core_rule_set - computed: true, optional: false, required: false
  private _coreRuleSet = new DataYandexSwsWafProfileCoreRuleSetList(this, "core_rule_set", false);
  public get coreRuleSet() {
    return this._coreRuleSet;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // exclusion_rule - computed: true, optional: false, required: false
  private _exclusionRule = new DataYandexSwsWafProfileExclusionRuleList(this, "exclusion_rule", false);
  public get exclusionRule() {
    return this._exclusionRule;
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

  // match_all_rule_sets - computed: true, optional: false, required: false
  public get matchAllRuleSets() {
    return this.getBooleanAttribute('match_all_rule_sets');
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

  // rule - computed: true, optional: false, required: false
  private _rule = new DataYandexSwsWafProfileRuleList(this, "rule", false);
  public get rule() {
    return this._rule;
  }

  // rule_set - computed: true, optional: false, required: false
  private _ruleSet = new DataYandexSwsWafProfileRuleSetList(this, "rule_set", false);
  public get ruleSet() {
    return this._ruleSet;
  }

  // waf_profile_id - computed: false, optional: true, required: false
  private _wafProfileId?: string; 
  public get wafProfileId() {
    return this.getStringAttribute('waf_profile_id');
  }
  public set wafProfileId(value: string) {
    this._wafProfileId = value;
  }
  public resetWafProfileId() {
    this._wafProfileId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wafProfileIdInput() {
    return this._wafProfileId;
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
      waf_profile_id: cdktf.stringToTerraform(this._wafProfileId),
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
      waf_profile_id: {
        value: cdktf.stringToHclTerraform(this._wafProfileId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
