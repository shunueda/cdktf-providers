// https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waf_web_app_firewall_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOciWafWebAppFirewallPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waf_web_app_firewall_policy#web_app_firewall_policy_id DataOciWafWebAppFirewallPolicy#web_app_firewall_policy_id}
  */
  readonly webAppFirewallPolicyId: string;
}
export interface DataOciWafWebAppFirewallPolicyActionsBody {
}

export function dataOciWafWebAppFirewallPolicyActionsBodyToTerraform(struct?: DataOciWafWebAppFirewallPolicyActionsBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWafWebAppFirewallPolicyActionsBodyToHclTerraform(struct?: DataOciWafWebAppFirewallPolicyActionsBody): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWafWebAppFirewallPolicyActionsBodyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWafWebAppFirewallPolicyActionsBody | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWafWebAppFirewallPolicyActionsBody | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // template - computed: true, optional: false, required: false
  public get template() {
    return this.getStringAttribute('template');
  }

  // text - computed: true, optional: false, required: false
  public get text() {
    return this.getStringAttribute('text');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciWafWebAppFirewallPolicyActionsBodyList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWafWebAppFirewallPolicyActionsBodyOutputReference {
    return new DataOciWafWebAppFirewallPolicyActionsBodyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWafWebAppFirewallPolicyActionsHeaders {
}

export function dataOciWafWebAppFirewallPolicyActionsHeadersToTerraform(struct?: DataOciWafWebAppFirewallPolicyActionsHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWafWebAppFirewallPolicyActionsHeadersToHclTerraform(struct?: DataOciWafWebAppFirewallPolicyActionsHeaders): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWafWebAppFirewallPolicyActionsHeaders | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWafWebAppFirewallPolicyActionsHeaders | undefined) {
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
  public get value() {
    return this.getStringAttribute('value');
  }
}

export class DataOciWafWebAppFirewallPolicyActionsHeadersList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference {
    return new DataOciWafWebAppFirewallPolicyActionsHeadersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWafWebAppFirewallPolicyActions {
}

export function dataOciWafWebAppFirewallPolicyActionsToTerraform(struct?: DataOciWafWebAppFirewallPolicyActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWafWebAppFirewallPolicyActionsToHclTerraform(struct?: DataOciWafWebAppFirewallPolicyActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWafWebAppFirewallPolicyActionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWafWebAppFirewallPolicyActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWafWebAppFirewallPolicyActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // body - computed: true, optional: false, required: false
  private _body = new DataOciWafWebAppFirewallPolicyActionsBodyList(this, "body", false);
  public get body() {
    return this._body;
  }

  // code - computed: true, optional: false, required: false
  public get code() {
    return this.getNumberAttribute('code');
  }

  // headers - computed: true, optional: false, required: false
  private _headers = new DataOciWafWebAppFirewallPolicyActionsHeadersList(this, "headers", false);
  public get headers() {
    return this._headers;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciWafWebAppFirewallPolicyActionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWafWebAppFirewallPolicyActionsOutputReference {
    return new DataOciWafWebAppFirewallPolicyActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWafWebAppFirewallPolicyRequestAccessControlRules {
}

export function dataOciWafWebAppFirewallPolicyRequestAccessControlRulesToTerraform(struct?: DataOciWafWebAppFirewallPolicyRequestAccessControlRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWafWebAppFirewallPolicyRequestAccessControlRulesToHclTerraform(struct?: DataOciWafWebAppFirewallPolicyRequestAccessControlRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWafWebAppFirewallPolicyRequestAccessControlRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWafWebAppFirewallPolicyRequestAccessControlRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_name - computed: true, optional: false, required: false
  public get actionName() {
    return this.getStringAttribute('action_name');
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // condition_language - computed: true, optional: false, required: false
  public get conditionLanguage() {
    return this.getStringAttribute('condition_language');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference {
    return new DataOciWafWebAppFirewallPolicyRequestAccessControlRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWafWebAppFirewallPolicyRequestAccessControl {
}

export function dataOciWafWebAppFirewallPolicyRequestAccessControlToTerraform(struct?: DataOciWafWebAppFirewallPolicyRequestAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWafWebAppFirewallPolicyRequestAccessControlToHclTerraform(struct?: DataOciWafWebAppFirewallPolicyRequestAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWafWebAppFirewallPolicyRequestAccessControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWafWebAppFirewallPolicyRequestAccessControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // default_action_name - computed: true, optional: false, required: false
  public get defaultActionName() {
    return this.getStringAttribute('default_action_name');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataOciWafWebAppFirewallPolicyRequestAccessControlRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOciWafWebAppFirewallPolicyRequestAccessControlList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference {
    return new DataOciWafWebAppFirewallPolicyRequestAccessControlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights {
}

export function dataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsToTerraform(struct?: DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsToHclTerraform(struct?: DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeights | undefined) {
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

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference {
    return new DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions {
}

export function dataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsToTerraform(struct?: DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsToHclTerraform(struct?: DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // args - computed: true, optional: false, required: false
  public get args() {
    return this.getListAttribute('args');
  }

  // request_cookies - computed: true, optional: false, required: false
  public get requestCookies() {
    return this.getListAttribute('request_cookies');
  }
}

export class DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference {
    return new DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities {
}

export function dataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesToTerraform(struct?: DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesToHclTerraform(struct?: DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_name - computed: true, optional: false, required: false
  public get actionName() {
    return this.getStringAttribute('action_name');
  }

  // collaborative_action_threshold - computed: true, optional: false, required: false
  public get collaborativeActionThreshold() {
    return this.getNumberAttribute('collaborative_action_threshold');
  }

  // collaborative_weights - computed: true, optional: false, required: false
  private _collaborativeWeights = new DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesCollaborativeWeightsList(this, "collaborative_weights", false);
  public get collaborativeWeights() {
    return this._collaborativeWeights;
  }

  // exclusions - computed: true, optional: false, required: false
  private _exclusions = new DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesExclusionsList(this, "exclusions", false);
  public get exclusions() {
    return this._exclusions;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference {
    return new DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings {
}

export function dataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsToTerraform(struct?: DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsToHclTerraform(struct?: DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_http_methods - computed: true, optional: false, required: false
  public get allowedHttpMethods() {
    return this.getListAttribute('allowed_http_methods');
  }

  // max_http_request_header_length - computed: true, optional: false, required: false
  public get maxHttpRequestHeaderLength() {
    return this.getNumberAttribute('max_http_request_header_length');
  }

  // max_http_request_headers - computed: true, optional: false, required: false
  public get maxHttpRequestHeaders() {
    return this.getNumberAttribute('max_http_request_headers');
  }

  // max_number_of_arguments - computed: true, optional: false, required: false
  public get maxNumberOfArguments() {
    return this.getNumberAttribute('max_number_of_arguments');
  }

  // max_single_argument_length - computed: true, optional: false, required: false
  public get maxSingleArgumentLength() {
    return this.getNumberAttribute('max_single_argument_length');
  }

  // max_total_argument_length - computed: true, optional: false, required: false
  public get maxTotalArgumentLength() {
    return this.getNumberAttribute('max_total_argument_length');
  }
}

export class DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference {
    return new DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWafWebAppFirewallPolicyRequestProtectionRules {
}

export function dataOciWafWebAppFirewallPolicyRequestProtectionRulesToTerraform(struct?: DataOciWafWebAppFirewallPolicyRequestProtectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWafWebAppFirewallPolicyRequestProtectionRulesToHclTerraform(struct?: DataOciWafWebAppFirewallPolicyRequestProtectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWafWebAppFirewallPolicyRequestProtectionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWafWebAppFirewallPolicyRequestProtectionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_name - computed: true, optional: false, required: false
  public get actionName() {
    return this.getStringAttribute('action_name');
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // condition_language - computed: true, optional: false, required: false
  public get conditionLanguage() {
    return this.getStringAttribute('condition_language');
  }

  // is_body_inspection_enabled - computed: true, optional: false, required: false
  public get isBodyInspectionEnabled() {
    return this.getBooleanAttribute('is_body_inspection_enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protection_capabilities - computed: true, optional: false, required: false
  private _protectionCapabilities = new DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitiesList(this, "protection_capabilities", false);
  public get protectionCapabilities() {
    return this._protectionCapabilities;
  }

  // protection_capability_settings - computed: true, optional: false, required: false
  private _protectionCapabilitySettings = new DataOciWafWebAppFirewallPolicyRequestProtectionRulesProtectionCapabilitySettingsList(this, "protection_capability_settings", false);
  public get protectionCapabilitySettings() {
    return this._protectionCapabilitySettings;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciWafWebAppFirewallPolicyRequestProtectionRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference {
    return new DataOciWafWebAppFirewallPolicyRequestProtectionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWafWebAppFirewallPolicyRequestProtection {
}

export function dataOciWafWebAppFirewallPolicyRequestProtectionToTerraform(struct?: DataOciWafWebAppFirewallPolicyRequestProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWafWebAppFirewallPolicyRequestProtectionToHclTerraform(struct?: DataOciWafWebAppFirewallPolicyRequestProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWafWebAppFirewallPolicyRequestProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWafWebAppFirewallPolicyRequestProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // body_inspection_size_limit_exceeded_action_name - computed: true, optional: false, required: false
  public get bodyInspectionSizeLimitExceededActionName() {
    return this.getStringAttribute('body_inspection_size_limit_exceeded_action_name');
  }

  // body_inspection_size_limit_in_bytes - computed: true, optional: false, required: false
  public get bodyInspectionSizeLimitInBytes() {
    return this.getNumberAttribute('body_inspection_size_limit_in_bytes');
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataOciWafWebAppFirewallPolicyRequestProtectionRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOciWafWebAppFirewallPolicyRequestProtectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference {
    return new DataOciWafWebAppFirewallPolicyRequestProtectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations {
}

export function dataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsToTerraform(struct?: DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsToHclTerraform(struct?: DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurations | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_duration_in_seconds - computed: true, optional: false, required: false
  public get actionDurationInSeconds() {
    return this.getNumberAttribute('action_duration_in_seconds');
  }

  // period_in_seconds - computed: true, optional: false, required: false
  public get periodInSeconds() {
    return this.getNumberAttribute('period_in_seconds');
  }

  // requests_limit - computed: true, optional: false, required: false
  public get requestsLimit() {
    return this.getNumberAttribute('requests_limit');
  }
}

export class DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference {
    return new DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWafWebAppFirewallPolicyRequestRateLimitingRules {
}

export function dataOciWafWebAppFirewallPolicyRequestRateLimitingRulesToTerraform(struct?: DataOciWafWebAppFirewallPolicyRequestRateLimitingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWafWebAppFirewallPolicyRequestRateLimitingRulesToHclTerraform(struct?: DataOciWafWebAppFirewallPolicyRequestRateLimitingRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWafWebAppFirewallPolicyRequestRateLimitingRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWafWebAppFirewallPolicyRequestRateLimitingRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_name - computed: true, optional: false, required: false
  public get actionName() {
    return this.getStringAttribute('action_name');
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // condition_language - computed: true, optional: false, required: false
  public get conditionLanguage() {
    return this.getStringAttribute('condition_language');
  }

  // configurations - computed: true, optional: false, required: false
  private _configurations = new DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesConfigurationsList(this, "configurations", false);
  public get configurations() {
    return this._configurations;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference {
    return new DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWafWebAppFirewallPolicyRequestRateLimiting {
}

export function dataOciWafWebAppFirewallPolicyRequestRateLimitingToTerraform(struct?: DataOciWafWebAppFirewallPolicyRequestRateLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWafWebAppFirewallPolicyRequestRateLimitingToHclTerraform(struct?: DataOciWafWebAppFirewallPolicyRequestRateLimiting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWafWebAppFirewallPolicyRequestRateLimiting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWafWebAppFirewallPolicyRequestRateLimiting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataOciWafWebAppFirewallPolicyRequestRateLimitingRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOciWafWebAppFirewallPolicyRequestRateLimitingList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference {
    return new DataOciWafWebAppFirewallPolicyRequestRateLimitingOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWafWebAppFirewallPolicyResponseAccessControlRules {
}

export function dataOciWafWebAppFirewallPolicyResponseAccessControlRulesToTerraform(struct?: DataOciWafWebAppFirewallPolicyResponseAccessControlRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWafWebAppFirewallPolicyResponseAccessControlRulesToHclTerraform(struct?: DataOciWafWebAppFirewallPolicyResponseAccessControlRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWafWebAppFirewallPolicyResponseAccessControlRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWafWebAppFirewallPolicyResponseAccessControlRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_name - computed: true, optional: false, required: false
  public get actionName() {
    return this.getStringAttribute('action_name');
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // condition_language - computed: true, optional: false, required: false
  public get conditionLanguage() {
    return this.getStringAttribute('condition_language');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference {
    return new DataOciWafWebAppFirewallPolicyResponseAccessControlRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWafWebAppFirewallPolicyResponseAccessControl {
}

export function dataOciWafWebAppFirewallPolicyResponseAccessControlToTerraform(struct?: DataOciWafWebAppFirewallPolicyResponseAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWafWebAppFirewallPolicyResponseAccessControlToHclTerraform(struct?: DataOciWafWebAppFirewallPolicyResponseAccessControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWafWebAppFirewallPolicyResponseAccessControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWafWebAppFirewallPolicyResponseAccessControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataOciWafWebAppFirewallPolicyResponseAccessControlRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOciWafWebAppFirewallPolicyResponseAccessControlList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference {
    return new DataOciWafWebAppFirewallPolicyResponseAccessControlOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights {
}

export function dataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsToTerraform(struct?: DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsToHclTerraform(struct?: DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeights | undefined) {
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

  // weight - computed: true, optional: false, required: false
  public get weight() {
    return this.getNumberAttribute('weight');
  }
}

export class DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference {
    return new DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions {
}

export function dataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsToTerraform(struct?: DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsToHclTerraform(struct?: DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // args - computed: true, optional: false, required: false
  public get args() {
    return this.getListAttribute('args');
  }

  // request_cookies - computed: true, optional: false, required: false
  public get requestCookies() {
    return this.getListAttribute('request_cookies');
  }
}

export class DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference {
    return new DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities {
}

export function dataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesToTerraform(struct?: DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesToHclTerraform(struct?: DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilities | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_name - computed: true, optional: false, required: false
  public get actionName() {
    return this.getStringAttribute('action_name');
  }

  // collaborative_action_threshold - computed: true, optional: false, required: false
  public get collaborativeActionThreshold() {
    return this.getNumberAttribute('collaborative_action_threshold');
  }

  // collaborative_weights - computed: true, optional: false, required: false
  private _collaborativeWeights = new DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesCollaborativeWeightsList(this, "collaborative_weights", false);
  public get collaborativeWeights() {
    return this._collaborativeWeights;
  }

  // exclusions - computed: true, optional: false, required: false
  private _exclusions = new DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesExclusionsList(this, "exclusions", false);
  public get exclusions() {
    return this._exclusions;
  }

  // key - computed: true, optional: false, required: false
  public get key() {
    return this.getStringAttribute('key');
  }

  // version - computed: true, optional: false, required: false
  public get version() {
    return this.getNumberAttribute('version');
  }
}

export class DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference {
    return new DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings {
}

export function dataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsToTerraform(struct?: DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsToHclTerraform(struct?: DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_http_methods - computed: true, optional: false, required: false
  public get allowedHttpMethods() {
    return this.getListAttribute('allowed_http_methods');
  }

  // max_http_request_header_length - computed: true, optional: false, required: false
  public get maxHttpRequestHeaderLength() {
    return this.getNumberAttribute('max_http_request_header_length');
  }

  // max_http_request_headers - computed: true, optional: false, required: false
  public get maxHttpRequestHeaders() {
    return this.getNumberAttribute('max_http_request_headers');
  }

  // max_number_of_arguments - computed: true, optional: false, required: false
  public get maxNumberOfArguments() {
    return this.getNumberAttribute('max_number_of_arguments');
  }

  // max_single_argument_length - computed: true, optional: false, required: false
  public get maxSingleArgumentLength() {
    return this.getNumberAttribute('max_single_argument_length');
  }

  // max_total_argument_length - computed: true, optional: false, required: false
  public get maxTotalArgumentLength() {
    return this.getNumberAttribute('max_total_argument_length');
  }
}

export class DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference {
    return new DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWafWebAppFirewallPolicyResponseProtectionRules {
}

export function dataOciWafWebAppFirewallPolicyResponseProtectionRulesToTerraform(struct?: DataOciWafWebAppFirewallPolicyResponseProtectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWafWebAppFirewallPolicyResponseProtectionRulesToHclTerraform(struct?: DataOciWafWebAppFirewallPolicyResponseProtectionRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWafWebAppFirewallPolicyResponseProtectionRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWafWebAppFirewallPolicyResponseProtectionRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // action_name - computed: true, optional: false, required: false
  public get actionName() {
    return this.getStringAttribute('action_name');
  }

  // condition - computed: true, optional: false, required: false
  public get condition() {
    return this.getStringAttribute('condition');
  }

  // condition_language - computed: true, optional: false, required: false
  public get conditionLanguage() {
    return this.getStringAttribute('condition_language');
  }

  // is_body_inspection_enabled - computed: true, optional: false, required: false
  public get isBodyInspectionEnabled() {
    return this.getBooleanAttribute('is_body_inspection_enabled');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // protection_capabilities - computed: true, optional: false, required: false
  private _protectionCapabilities = new DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitiesList(this, "protection_capabilities", false);
  public get protectionCapabilities() {
    return this._protectionCapabilities;
  }

  // protection_capability_settings - computed: true, optional: false, required: false
  private _protectionCapabilitySettings = new DataOciWafWebAppFirewallPolicyResponseProtectionRulesProtectionCapabilitySettingsList(this, "protection_capability_settings", false);
  public get protectionCapabilitySettings() {
    return this._protectionCapabilitySettings;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataOciWafWebAppFirewallPolicyResponseProtectionRulesList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference {
    return new DataOciWafWebAppFirewallPolicyResponseProtectionRulesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataOciWafWebAppFirewallPolicyResponseProtection {
}

export function dataOciWafWebAppFirewallPolicyResponseProtectionToTerraform(struct?: DataOciWafWebAppFirewallPolicyResponseProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataOciWafWebAppFirewallPolicyResponseProtectionToHclTerraform(struct?: DataOciWafWebAppFirewallPolicyResponseProtection): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataOciWafWebAppFirewallPolicyResponseProtection | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataOciWafWebAppFirewallPolicyResponseProtection | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // rules - computed: true, optional: false, required: false
  private _rules = new DataOciWafWebAppFirewallPolicyResponseProtectionRulesList(this, "rules", false);
  public get rules() {
    return this._rules;
  }
}

export class DataOciWafWebAppFirewallPolicyResponseProtectionList extends cdktf.ComplexList {

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
  public get(index: number): DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference {
    return new DataOciWafWebAppFirewallPolicyResponseProtectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waf_web_app_firewall_policy oci_waf_web_app_firewall_policy}
*/
export class DataOciWafWebAppFirewallPolicy extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_waf_web_app_firewall_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOciWafWebAppFirewallPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOciWafWebAppFirewallPolicy to import
  * @param importFromId The id of the existing DataOciWafWebAppFirewallPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waf_web_app_firewall_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOciWafWebAppFirewallPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_waf_web_app_firewall_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.26.1/docs/data-sources/waf_web_app_firewall_policy oci_waf_web_app_firewall_policy} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOciWafWebAppFirewallPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: DataOciWafWebAppFirewallPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_waf_web_app_firewall_policy',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.26.1',
        providerVersionConstraint: '7.26.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._webAppFirewallPolicyId = config.webAppFirewallPolicyId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // actions - computed: true, optional: false, required: false
  private _actions = new DataOciWafWebAppFirewallPolicyActionsList(this, "actions", false);
  public get actions() {
    return this._actions;
  }

  // compartment_id - computed: true, optional: false, required: false
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }

  // defined_tags - computed: true, optional: false, required: false
  private _definedTags = new cdktf.StringMap(this, "defined_tags");
  public get definedTags() {
    return this._definedTags;
  }

  // display_name - computed: true, optional: false, required: false
  public get displayName() {
    return this.getStringAttribute('display_name');
  }

  // freeform_tags - computed: true, optional: false, required: false
  private _freeformTags = new cdktf.StringMap(this, "freeform_tags");
  public get freeformTags() {
    return this._freeformTags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
  }

  // request_access_control - computed: true, optional: false, required: false
  private _requestAccessControl = new DataOciWafWebAppFirewallPolicyRequestAccessControlList(this, "request_access_control", false);
  public get requestAccessControl() {
    return this._requestAccessControl;
  }

  // request_protection - computed: true, optional: false, required: false
  private _requestProtection = new DataOciWafWebAppFirewallPolicyRequestProtectionList(this, "request_protection", false);
  public get requestProtection() {
    return this._requestProtection;
  }

  // request_rate_limiting - computed: true, optional: false, required: false
  private _requestRateLimiting = new DataOciWafWebAppFirewallPolicyRequestRateLimitingList(this, "request_rate_limiting", false);
  public get requestRateLimiting() {
    return this._requestRateLimiting;
  }

  // response_access_control - computed: true, optional: false, required: false
  private _responseAccessControl = new DataOciWafWebAppFirewallPolicyResponseAccessControlList(this, "response_access_control", false);
  public get responseAccessControl() {
    return this._responseAccessControl;
  }

  // response_protection - computed: true, optional: false, required: false
  private _responseProtection = new DataOciWafWebAppFirewallPolicyResponseProtectionList(this, "response_protection", false);
  public get responseProtection() {
    return this._responseProtection;
  }

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // web_app_firewall_policy_id - computed: false, optional: false, required: true
  private _webAppFirewallPolicyId?: string; 
  public get webAppFirewallPolicyId() {
    return this.getStringAttribute('web_app_firewall_policy_id');
  }
  public set webAppFirewallPolicyId(value: string) {
    this._webAppFirewallPolicyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get webAppFirewallPolicyIdInput() {
    return this._webAppFirewallPolicyId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      web_app_firewall_policy_id: cdktf.stringToTerraform(this._webAppFirewallPolicyId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      web_app_firewall_policy_id: {
        value: cdktf.stringToHclTerraform(this._webAppFirewallPolicyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
