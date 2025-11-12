// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/security_rule_list
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmSecurityRuleListConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/security_rule_list#device DataScmSecurityRuleList#device}
  */
  readonly device?: string;
  /**
  * The folder of the item. Default: Shared.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/security_rule_list#folder DataScmSecurityRuleList#folder}
  */
  readonly folder?: string;
  /**
  * The max number of items to return. Default: 200.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/security_rule_list#limit DataScmSecurityRuleList#limit}
  */
  readonly limit?: number;
  /**
  * The name of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/security_rule_list#name DataScmSecurityRuleList#name}
  */
  readonly name?: string;
  /**
  * The offset of the first item to return.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/security_rule_list#offset DataScmSecurityRuleList#offset}
  */
  readonly offset?: number;
  /**
  * The position of a security rule
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/security_rule_list#position DataScmSecurityRuleList#position}
  */
  readonly position: string;
  /**
  * The snippet of the item.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/security_rule_list#snippet DataScmSecurityRuleList#snippet}
  */
  readonly snippet?: string;
}
export interface DataScmSecurityRuleListDataAllowUrlCategoryFileControl {
}

export function dataScmSecurityRuleListDataAllowUrlCategoryFileControlToTerraform(struct?: DataScmSecurityRuleListDataAllowUrlCategoryFileControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSecurityRuleListDataAllowUrlCategoryFileControlToHclTerraform(struct?: DataScmSecurityRuleListDataAllowUrlCategoryFileControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSecurityRuleListDataAllowUrlCategoryFileControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSecurityRuleListDataAllowUrlCategoryFileControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleListDataAllowUrlCategoryFileControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // download - computed: true, optional: false, required: false
  public get download() {
    return this.getStringAttribute('download');
  }

  // upload - computed: true, optional: false, required: false
  public get upload() {
    return this.getStringAttribute('upload');
  }
}
export interface DataScmSecurityRuleListDataAllowUrlCategory {
}

export function dataScmSecurityRuleListDataAllowUrlCategoryToTerraform(struct?: DataScmSecurityRuleListDataAllowUrlCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSecurityRuleListDataAllowUrlCategoryToHclTerraform(struct?: DataScmSecurityRuleListDataAllowUrlCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSecurityRuleListDataAllowUrlCategoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmSecurityRuleListDataAllowUrlCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleListDataAllowUrlCategory | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // additional_action - computed: true, optional: false, required: false
  public get additionalAction() {
    return this.getStringAttribute('additional_action');
  }

  // credential_enforcement - computed: true, optional: false, required: false
  public get credentialEnforcement() {
    return this.getStringAttribute('credential_enforcement');
  }

  // decryption - computed: true, optional: false, required: false
  public get decryption() {
    return this.getStringAttribute('decryption');
  }

  // dlp - computed: true, optional: false, required: false
  public get dlp() {
    return this.getStringAttribute('dlp');
  }

  // file_control - computed: true, optional: false, required: false
  private _fileControl = new DataScmSecurityRuleListDataAllowUrlCategoryFileControlOutputReference(this, "file_control");
  public get fileControl() {
    return this._fileControl;
  }

  // isolation_profiles - computed: true, optional: false, required: false
  public get isolationProfiles() {
    return this.getStringAttribute('isolation_profiles');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }
}

export class DataScmSecurityRuleListDataAllowUrlCategoryList extends cdktf.ComplexList {

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
  public get(index: number): DataScmSecurityRuleListDataAllowUrlCategoryOutputReference {
    return new DataScmSecurityRuleListDataAllowUrlCategoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmSecurityRuleListDataAllowWebApplicationFileControl {
}

export function dataScmSecurityRuleListDataAllowWebApplicationFileControlToTerraform(struct?: DataScmSecurityRuleListDataAllowWebApplicationFileControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSecurityRuleListDataAllowWebApplicationFileControlToHclTerraform(struct?: DataScmSecurityRuleListDataAllowWebApplicationFileControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSecurityRuleListDataAllowWebApplicationFileControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSecurityRuleListDataAllowWebApplicationFileControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleListDataAllowWebApplicationFileControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // download - computed: true, optional: false, required: false
  public get download() {
    return this.getStringAttribute('download');
  }

  // upload - computed: true, optional: false, required: false
  public get upload() {
    return this.getStringAttribute('upload');
  }
}
export interface DataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControlConsumerAccess {
}

export function dataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControlConsumerAccessToTerraform(struct?: DataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControlConsumerAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControlConsumerAccessToHclTerraform(struct?: DataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControlConsumerAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControlConsumerAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControlConsumerAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControlConsumerAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getStringAttribute('enable');
  }
}
export interface DataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControlEnterpriseAccess {
}

export function dataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControlEnterpriseAccessToTerraform(struct?: DataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControlEnterpriseAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControlEnterpriseAccessToHclTerraform(struct?: DataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControlEnterpriseAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControlEnterpriseAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControlEnterpriseAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControlEnterpriseAccess | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable - computed: true, optional: false, required: false
  public get enable() {
    return this.getStringAttribute('enable');
  }

  // tenant_restrictions - computed: true, optional: false, required: false
  public get tenantRestrictions() {
    return this.getListAttribute('tenant_restrictions');
  }
}
export interface DataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControl {
}

export function dataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControlToTerraform(struct?: DataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControlToHclTerraform(struct?: DataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumer_access - computed: true, optional: false, required: false
  private _consumerAccess = new DataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControlConsumerAccessOutputReference(this, "consumer_access");
  public get consumerAccess() {
    return this._consumerAccess;
  }

  // enterprise_access - computed: true, optional: false, required: false
  private _enterpriseAccess = new DataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControlEnterpriseAccessOutputReference(this, "enterprise_access");
  public get enterpriseAccess() {
    return this._enterpriseAccess;
  }
}
export interface DataScmSecurityRuleListDataAllowWebApplicationTenantControl {
}

export function dataScmSecurityRuleListDataAllowWebApplicationTenantControlToTerraform(struct?: DataScmSecurityRuleListDataAllowWebApplicationTenantControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSecurityRuleListDataAllowWebApplicationTenantControlToHclTerraform(struct?: DataScmSecurityRuleListDataAllowWebApplicationTenantControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSecurityRuleListDataAllowWebApplicationTenantControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSecurityRuleListDataAllowWebApplicationTenantControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleListDataAllowWebApplicationTenantControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // allowed_activities - computed: true, optional: false, required: false
  public get allowedActivities() {
    return this.getListAttribute('allowed_activities');
  }

  // blocked_activities - computed: true, optional: false, required: false
  public get blockedActivities() {
    return this.getListAttribute('blocked_activities');
  }

  // parent_application - computed: true, optional: false, required: false
  public get parentApplication() {
    return this.getStringAttribute('parent_application');
  }

  // tenants - computed: true, optional: false, required: false
  public get tenants() {
    return this.getListAttribute('tenants');
  }
}
export interface DataScmSecurityRuleListDataAllowWebApplication {
}

export function dataScmSecurityRuleListDataAllowWebApplicationToTerraform(struct?: DataScmSecurityRuleListDataAllowWebApplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSecurityRuleListDataAllowWebApplicationToHclTerraform(struct?: DataScmSecurityRuleListDataAllowWebApplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSecurityRuleListDataAllowWebApplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmSecurityRuleListDataAllowWebApplication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleListDataAllowWebApplication | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // application_function - computed: true, optional: false, required: false
  public get applicationFunction() {
    return this.getListAttribute('application_function');
  }

  // dlp - computed: true, optional: false, required: false
  public get dlp() {
    return this.getStringAttribute('dlp');
  }

  // file_control - computed: true, optional: false, required: false
  private _fileControl = new DataScmSecurityRuleListDataAllowWebApplicationFileControlOutputReference(this, "file_control");
  public get fileControl() {
    return this._fileControl;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // saas_enterprise_control - computed: true, optional: false, required: false
  private _saasEnterpriseControl = new DataScmSecurityRuleListDataAllowWebApplicationSaasEnterpriseControlOutputReference(this, "saas_enterprise_control");
  public get saasEnterpriseControl() {
    return this._saasEnterpriseControl;
  }

  // saas_tenant_list - computed: true, optional: false, required: false
  public get saasTenantList() {
    return this.getListAttribute('saas_tenant_list');
  }

  // saas_user_list - computed: true, optional: false, required: false
  public get saasUserList() {
    return this.getListAttribute('saas_user_list');
  }

  // tenant_control - computed: true, optional: false, required: false
  private _tenantControl = new DataScmSecurityRuleListDataAllowWebApplicationTenantControlOutputReference(this, "tenant_control");
  public get tenantControl() {
    return this._tenantControl;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataScmSecurityRuleListDataAllowWebApplicationList extends cdktf.ComplexList {

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
  public get(index: number): DataScmSecurityRuleListDataAllowWebApplicationOutputReference {
    return new DataScmSecurityRuleListDataAllowWebApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmSecurityRuleListDataDefaultProfileSettingsFileControl {
}

export function dataScmSecurityRuleListDataDefaultProfileSettingsFileControlToTerraform(struct?: DataScmSecurityRuleListDataDefaultProfileSettingsFileControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSecurityRuleListDataDefaultProfileSettingsFileControlToHclTerraform(struct?: DataScmSecurityRuleListDataDefaultProfileSettingsFileControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSecurityRuleListDataDefaultProfileSettingsFileControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSecurityRuleListDataDefaultProfileSettingsFileControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleListDataDefaultProfileSettingsFileControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // download - computed: true, optional: false, required: false
  public get download() {
    return this.getStringAttribute('download');
  }

  // upload - computed: true, optional: false, required: false
  public get upload() {
    return this.getStringAttribute('upload');
  }
}
export interface DataScmSecurityRuleListDataDefaultProfileSettings {
}

export function dataScmSecurityRuleListDataDefaultProfileSettingsToTerraform(struct?: DataScmSecurityRuleListDataDefaultProfileSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSecurityRuleListDataDefaultProfileSettingsToHclTerraform(struct?: DataScmSecurityRuleListDataDefaultProfileSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSecurityRuleListDataDefaultProfileSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSecurityRuleListDataDefaultProfileSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleListDataDefaultProfileSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // dlp - computed: true, optional: false, required: false
  public get dlp() {
    return this.getStringAttribute('dlp');
  }

  // file_control - computed: true, optional: false, required: false
  private _fileControl = new DataScmSecurityRuleListDataDefaultProfileSettingsFileControlOutputReference(this, "file_control");
  public get fileControl() {
    return this._fileControl;
  }
}
export interface DataScmSecurityRuleListDataLogSettings {
}

export function dataScmSecurityRuleListDataLogSettingsToTerraform(struct?: DataScmSecurityRuleListDataLogSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSecurityRuleListDataLogSettingsToHclTerraform(struct?: DataScmSecurityRuleListDataLogSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSecurityRuleListDataLogSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSecurityRuleListDataLogSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleListDataLogSettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // log_sessions - computed: true, optional: false, required: false
  public get logSessions() {
    return this.getBooleanAttribute('log_sessions');
  }
}
export interface DataScmSecurityRuleListDataProfileSetting {
}

export function dataScmSecurityRuleListDataProfileSettingToTerraform(struct?: DataScmSecurityRuleListDataProfileSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSecurityRuleListDataProfileSettingToHclTerraform(struct?: DataScmSecurityRuleListDataProfileSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSecurityRuleListDataProfileSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSecurityRuleListDataProfileSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleListDataProfileSetting | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // group - computed: true, optional: false, required: false
  public get group() {
    return this.getListAttribute('group');
  }
}
export interface DataScmSecurityRuleListDataSecuritySettings {
}

export function dataScmSecurityRuleListDataSecuritySettingsToTerraform(struct?: DataScmSecurityRuleListDataSecuritySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSecurityRuleListDataSecuritySettingsToHclTerraform(struct?: DataScmSecurityRuleListDataSecuritySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSecurityRuleListDataSecuritySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSecurityRuleListDataSecuritySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleListDataSecuritySettings | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // anti_spyware - computed: true, optional: false, required: false
  public get antiSpyware() {
    return this.getStringAttribute('anti_spyware');
  }

  // virus_and_wildfire_analysis - computed: true, optional: false, required: false
  public get virusAndWildfireAnalysis() {
    return this.getStringAttribute('virus_and_wildfire_analysis');
  }

  // vulnerability - computed: true, optional: false, required: false
  public get vulnerability() {
    return this.getStringAttribute('vulnerability');
  }
}
export interface DataScmSecurityRuleListData {
  /**
  * The UUID of the security rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/security_rule_list#id DataScmSecurityRuleList#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The name of the security rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/security_rule_list#name DataScmSecurityRuleList#name}
  */
  readonly name?: string;
}

export function dataScmSecurityRuleListDataToTerraform(struct?: DataScmSecurityRuleListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataScmSecurityRuleListDataToHclTerraform(struct?: DataScmSecurityRuleListData): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataScmSecurityRuleListDataOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmSecurityRuleListData | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleListData | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._id = undefined;
      this._name = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._id = value.id;
      this._name = value.name;
    }
  }

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // allow_url_category - computed: true, optional: false, required: false
  private _allowUrlCategory = new DataScmSecurityRuleListDataAllowUrlCategoryList(this, "allow_url_category", false);
  public get allowUrlCategory() {
    return this._allowUrlCategory;
  }

  // allow_web_application - computed: true, optional: false, required: false
  private _allowWebApplication = new DataScmSecurityRuleListDataAllowWebApplicationList(this, "allow_web_application", false);
  public get allowWebApplication() {
    return this._allowWebApplication;
  }

  // application - computed: true, optional: false, required: false
  public get application() {
    return this.getListAttribute('application');
  }

  // block_url_category - computed: true, optional: false, required: false
  public get blockUrlCategory() {
    return this.getListAttribute('block_url_category');
  }

  // block_web_application - computed: true, optional: false, required: false
  public get blockWebApplication() {
    return this.getListAttribute('block_web_application');
  }

  // category - computed: true, optional: false, required: false
  public get category() {
    return this.getListAttribute('category');
  }

  // default_profile_settings - computed: true, optional: false, required: false
  private _defaultProfileSettings = new DataScmSecurityRuleListDataDefaultProfileSettingsOutputReference(this, "default_profile_settings");
  public get defaultProfileSettings() {
    return this._defaultProfileSettings;
  }

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // destination - computed: true, optional: false, required: false
  public get destination() {
    return this.getListAttribute('destination');
  }

  // destination_hip - computed: true, optional: false, required: false
  public get destinationHip() {
    return this.getListAttribute('destination_hip');
  }

  // device - computed: true, optional: false, required: false
  public get device() {
    return this.getStringAttribute('device');
  }

  // devices - computed: true, optional: false, required: false
  public get devices() {
    return this.getListAttribute('devices');
  }

  // disabled - computed: true, optional: false, required: false
  public get disabled() {
    return this.getBooleanAttribute('disabled');
  }

  // folder - computed: true, optional: false, required: false
  public get folder() {
    return this.getStringAttribute('folder');
  }

  // from - computed: true, optional: false, required: false
  public get from() {
    return this.getListAttribute('from');
  }

  // id - computed: true, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // log_end - computed: true, optional: false, required: false
  public get logEnd() {
    return this.getBooleanAttribute('log_end');
  }

  // log_setting - computed: true, optional: false, required: false
  public get logSetting() {
    return this.getStringAttribute('log_setting');
  }

  // log_settings - computed: true, optional: false, required: false
  private _logSettings = new DataScmSecurityRuleListDataLogSettingsOutputReference(this, "log_settings");
  public get logSettings() {
    return this._logSettings;
  }

  // log_start - computed: true, optional: false, required: false
  public get logStart() {
    return this.getBooleanAttribute('log_start');
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

  // negate_destination - computed: true, optional: false, required: false
  public get negateDestination() {
    return this.getBooleanAttribute('negate_destination');
  }

  // negate_source - computed: true, optional: false, required: false
  public get negateSource() {
    return this.getBooleanAttribute('negate_source');
  }

  // negate_user - computed: true, optional: false, required: false
  public get negateUser() {
    return this.getBooleanAttribute('negate_user');
  }

  // policy_type - computed: true, optional: false, required: false
  public get policyType() {
    return this.getStringAttribute('policy_type');
  }

  // position - computed: true, optional: false, required: false
  public get position() {
    return this.getStringAttribute('position');
  }

  // profile_setting - computed: true, optional: false, required: false
  private _profileSetting = new DataScmSecurityRuleListDataProfileSettingOutputReference(this, "profile_setting");
  public get profileSetting() {
    return this._profileSetting;
  }

  // relative_position - computed: true, optional: false, required: false
  public get relativePosition() {
    return this.getStringAttribute('relative_position');
  }

  // schedule - computed: true, optional: false, required: false
  public get schedule() {
    return this.getStringAttribute('schedule');
  }

  // security_settings - computed: true, optional: false, required: false
  private _securitySettings = new DataScmSecurityRuleListDataSecuritySettingsOutputReference(this, "security_settings");
  public get securitySettings() {
    return this._securitySettings;
  }

  // service - computed: true, optional: false, required: false
  public get service() {
    return this.getListAttribute('service');
  }

  // snippet - computed: true, optional: false, required: false
  public get snippet() {
    return this.getStringAttribute('snippet');
  }

  // source - computed: true, optional: false, required: false
  public get source() {
    return this.getListAttribute('source');
  }

  // source_hip - computed: true, optional: false, required: false
  public get sourceHip() {
    return this.getListAttribute('source_hip');
  }

  // source_user - computed: true, optional: false, required: false
  public get sourceUser() {
    return this.getListAttribute('source_user');
  }

  // tag - computed: true, optional: false, required: false
  public get tag() {
    return this.getListAttribute('tag');
  }

  // target_rule - computed: true, optional: false, required: false
  public get targetRule() {
    return this.getStringAttribute('target_rule');
  }

  // tenant_restrictions - computed: true, optional: false, required: false
  public get tenantRestrictions() {
    return this.getListAttribute('tenant_restrictions');
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // to - computed: true, optional: false, required: false
  public get to() {
    return this.getListAttribute('to');
  }
}

export class DataScmSecurityRuleListDataList extends cdktf.ComplexList {
  public internalValue? : DataScmSecurityRuleListData[] | cdktf.IResolvable

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
  public get(index: number): DataScmSecurityRuleListDataOutputReference {
    return new DataScmSecurityRuleListDataOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/security_rule_list scm_security_rule_list}
*/
export class DataScmSecurityRuleList extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_security_rule_list";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmSecurityRuleList resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmSecurityRuleList to import
  * @param importFromId The id of the existing DataScmSecurityRuleList that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/security_rule_list#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmSecurityRuleList to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_security_rule_list", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.4/docs/data-sources/security_rule_list scm_security_rule_list} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmSecurityRuleListConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmSecurityRuleListConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_security_rule_list',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.4',
        providerVersionConstraint: '1.0.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._limit = config.limit;
    this._name = config.name;
    this._offset = config.offset;
    this._position = config.position;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // data - computed: true, optional: false, required: false
  private _data = new DataScmSecurityRuleListDataList(this, "data", false);
  public get data() {
    return this._data;
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
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

  // offset - computed: false, optional: true, required: false
  private _offset?: number; 
  public get offset() {
    return this.getNumberAttribute('offset');
  }
  public set offset(value: number) {
    this._offset = value;
  }
  public resetOffset() {
    this._offset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offsetInput() {
    return this._offset;
  }

  // position - computed: false, optional: false, required: true
  private _position?: string; 
  public get position() {
    return this.getStringAttribute('position');
  }
  public set position(value: string) {
    this._position = value;
  }
  // Temporarily expose input value. Use with caution.
  public get positionInput() {
    return this._position;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // total - computed: true, optional: false, required: false
  public get total() {
    return this.getNumberAttribute('total');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      limit: cdktf.numberToTerraform(this._limit),
      name: cdktf.stringToTerraform(this._name),
      offset: cdktf.numberToTerraform(this._offset),
      position: cdktf.stringToTerraform(this._position),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      limit: {
        value: cdktf.numberToHclTerraform(this._limit),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      offset: {
        value: cdktf.numberToHclTerraform(this._offset),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      position: {
        value: cdktf.stringToHclTerraform(this._position),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
