// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/security_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataScmSecurityRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The UUID of the security rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/security_rule#id DataScmSecurityRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The name of the security rule
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/security_rule#name DataScmSecurityRule#name}
  */
  readonly name?: string;
}
export interface DataScmSecurityRuleAllowUrlCategoryFileControl {
}

export function dataScmSecurityRuleAllowUrlCategoryFileControlToTerraform(struct?: DataScmSecurityRuleAllowUrlCategoryFileControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSecurityRuleAllowUrlCategoryFileControlToHclTerraform(struct?: DataScmSecurityRuleAllowUrlCategoryFileControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSecurityRuleAllowUrlCategoryFileControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSecurityRuleAllowUrlCategoryFileControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleAllowUrlCategoryFileControl | undefined) {
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
export interface DataScmSecurityRuleAllowUrlCategory {
}

export function dataScmSecurityRuleAllowUrlCategoryToTerraform(struct?: DataScmSecurityRuleAllowUrlCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSecurityRuleAllowUrlCategoryToHclTerraform(struct?: DataScmSecurityRuleAllowUrlCategory): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSecurityRuleAllowUrlCategoryOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmSecurityRuleAllowUrlCategory | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleAllowUrlCategory | undefined) {
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
  private _fileControl = new DataScmSecurityRuleAllowUrlCategoryFileControlOutputReference(this, "file_control");
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

export class DataScmSecurityRuleAllowUrlCategoryList extends cdktf.ComplexList {

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
  public get(index: number): DataScmSecurityRuleAllowUrlCategoryOutputReference {
    return new DataScmSecurityRuleAllowUrlCategoryOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmSecurityRuleAllowWebApplicationFileControl {
}

export function dataScmSecurityRuleAllowWebApplicationFileControlToTerraform(struct?: DataScmSecurityRuleAllowWebApplicationFileControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSecurityRuleAllowWebApplicationFileControlToHclTerraform(struct?: DataScmSecurityRuleAllowWebApplicationFileControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSecurityRuleAllowWebApplicationFileControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSecurityRuleAllowWebApplicationFileControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleAllowWebApplicationFileControl | undefined) {
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
export interface DataScmSecurityRuleAllowWebApplicationSaasEnterpriseControlConsumerAccess {
}

export function dataScmSecurityRuleAllowWebApplicationSaasEnterpriseControlConsumerAccessToTerraform(struct?: DataScmSecurityRuleAllowWebApplicationSaasEnterpriseControlConsumerAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSecurityRuleAllowWebApplicationSaasEnterpriseControlConsumerAccessToHclTerraform(struct?: DataScmSecurityRuleAllowWebApplicationSaasEnterpriseControlConsumerAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSecurityRuleAllowWebApplicationSaasEnterpriseControlConsumerAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSecurityRuleAllowWebApplicationSaasEnterpriseControlConsumerAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleAllowWebApplicationSaasEnterpriseControlConsumerAccess | undefined) {
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
export interface DataScmSecurityRuleAllowWebApplicationSaasEnterpriseControlEnterpriseAccess {
}

export function dataScmSecurityRuleAllowWebApplicationSaasEnterpriseControlEnterpriseAccessToTerraform(struct?: DataScmSecurityRuleAllowWebApplicationSaasEnterpriseControlEnterpriseAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSecurityRuleAllowWebApplicationSaasEnterpriseControlEnterpriseAccessToHclTerraform(struct?: DataScmSecurityRuleAllowWebApplicationSaasEnterpriseControlEnterpriseAccess): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSecurityRuleAllowWebApplicationSaasEnterpriseControlEnterpriseAccessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSecurityRuleAllowWebApplicationSaasEnterpriseControlEnterpriseAccess | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleAllowWebApplicationSaasEnterpriseControlEnterpriseAccess | undefined) {
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
export interface DataScmSecurityRuleAllowWebApplicationSaasEnterpriseControl {
}

export function dataScmSecurityRuleAllowWebApplicationSaasEnterpriseControlToTerraform(struct?: DataScmSecurityRuleAllowWebApplicationSaasEnterpriseControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSecurityRuleAllowWebApplicationSaasEnterpriseControlToHclTerraform(struct?: DataScmSecurityRuleAllowWebApplicationSaasEnterpriseControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSecurityRuleAllowWebApplicationSaasEnterpriseControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSecurityRuleAllowWebApplicationSaasEnterpriseControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleAllowWebApplicationSaasEnterpriseControl | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // consumer_access - computed: true, optional: false, required: false
  private _consumerAccess = new DataScmSecurityRuleAllowWebApplicationSaasEnterpriseControlConsumerAccessOutputReference(this, "consumer_access");
  public get consumerAccess() {
    return this._consumerAccess;
  }

  // enterprise_access - computed: true, optional: false, required: false
  private _enterpriseAccess = new DataScmSecurityRuleAllowWebApplicationSaasEnterpriseControlEnterpriseAccessOutputReference(this, "enterprise_access");
  public get enterpriseAccess() {
    return this._enterpriseAccess;
  }
}
export interface DataScmSecurityRuleAllowWebApplicationTenantControl {
}

export function dataScmSecurityRuleAllowWebApplicationTenantControlToTerraform(struct?: DataScmSecurityRuleAllowWebApplicationTenantControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSecurityRuleAllowWebApplicationTenantControlToHclTerraform(struct?: DataScmSecurityRuleAllowWebApplicationTenantControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSecurityRuleAllowWebApplicationTenantControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSecurityRuleAllowWebApplicationTenantControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleAllowWebApplicationTenantControl | undefined) {
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
export interface DataScmSecurityRuleAllowWebApplication {
}

export function dataScmSecurityRuleAllowWebApplicationToTerraform(struct?: DataScmSecurityRuleAllowWebApplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSecurityRuleAllowWebApplicationToHclTerraform(struct?: DataScmSecurityRuleAllowWebApplication): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSecurityRuleAllowWebApplicationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataScmSecurityRuleAllowWebApplication | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleAllowWebApplication | undefined) {
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
  private _fileControl = new DataScmSecurityRuleAllowWebApplicationFileControlOutputReference(this, "file_control");
  public get fileControl() {
    return this._fileControl;
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // saas_enterprise_control - computed: true, optional: false, required: false
  private _saasEnterpriseControl = new DataScmSecurityRuleAllowWebApplicationSaasEnterpriseControlOutputReference(this, "saas_enterprise_control");
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
  private _tenantControl = new DataScmSecurityRuleAllowWebApplicationTenantControlOutputReference(this, "tenant_control");
  public get tenantControl() {
    return this._tenantControl;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class DataScmSecurityRuleAllowWebApplicationList extends cdktf.ComplexList {

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
  public get(index: number): DataScmSecurityRuleAllowWebApplicationOutputReference {
    return new DataScmSecurityRuleAllowWebApplicationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataScmSecurityRuleDefaultProfileSettingsFileControl {
}

export function dataScmSecurityRuleDefaultProfileSettingsFileControlToTerraform(struct?: DataScmSecurityRuleDefaultProfileSettingsFileControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSecurityRuleDefaultProfileSettingsFileControlToHclTerraform(struct?: DataScmSecurityRuleDefaultProfileSettingsFileControl): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSecurityRuleDefaultProfileSettingsFileControlOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSecurityRuleDefaultProfileSettingsFileControl | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleDefaultProfileSettingsFileControl | undefined) {
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
export interface DataScmSecurityRuleDefaultProfileSettings {
}

export function dataScmSecurityRuleDefaultProfileSettingsToTerraform(struct?: DataScmSecurityRuleDefaultProfileSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSecurityRuleDefaultProfileSettingsToHclTerraform(struct?: DataScmSecurityRuleDefaultProfileSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSecurityRuleDefaultProfileSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSecurityRuleDefaultProfileSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleDefaultProfileSettings | undefined) {
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
  private _fileControl = new DataScmSecurityRuleDefaultProfileSettingsFileControlOutputReference(this, "file_control");
  public get fileControl() {
    return this._fileControl;
  }
}
export interface DataScmSecurityRuleLogSettings {
}

export function dataScmSecurityRuleLogSettingsToTerraform(struct?: DataScmSecurityRuleLogSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSecurityRuleLogSettingsToHclTerraform(struct?: DataScmSecurityRuleLogSettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSecurityRuleLogSettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSecurityRuleLogSettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleLogSettings | undefined) {
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
export interface DataScmSecurityRuleProfileSetting {
}

export function dataScmSecurityRuleProfileSettingToTerraform(struct?: DataScmSecurityRuleProfileSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSecurityRuleProfileSettingToHclTerraform(struct?: DataScmSecurityRuleProfileSetting): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSecurityRuleProfileSettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSecurityRuleProfileSetting | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleProfileSetting | undefined) {
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
export interface DataScmSecurityRuleSecuritySettings {
}

export function dataScmSecurityRuleSecuritySettingsToTerraform(struct?: DataScmSecurityRuleSecuritySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataScmSecurityRuleSecuritySettingsToHclTerraform(struct?: DataScmSecurityRuleSecuritySettings): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataScmSecurityRuleSecuritySettingsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataScmSecurityRuleSecuritySettings | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataScmSecurityRuleSecuritySettings | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/security_rule scm_security_rule}
*/
export class DataScmSecurityRule extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_security_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataScmSecurityRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataScmSecurityRule to import
  * @param importFromId The id of the existing DataScmSecurityRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/security_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataScmSecurityRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_security_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.5/docs/data-sources/security_rule scm_security_rule} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataScmSecurityRuleConfig
  */
  public constructor(scope: Construct, id: string, config: DataScmSecurityRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'scm_security_rule',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.5',
        providerVersionConstraint: '1.0.5'
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
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: true, optional: false, required: false
  public get action() {
    return this.getStringAttribute('action');
  }

  // allow_url_category - computed: true, optional: false, required: false
  private _allowUrlCategory = new DataScmSecurityRuleAllowUrlCategoryList(this, "allow_url_category", false);
  public get allowUrlCategory() {
    return this._allowUrlCategory;
  }

  // allow_web_application - computed: true, optional: false, required: false
  private _allowWebApplication = new DataScmSecurityRuleAllowWebApplicationList(this, "allow_web_application", false);
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
  private _defaultProfileSettings = new DataScmSecurityRuleDefaultProfileSettingsOutputReference(this, "default_profile_settings");
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

  // id - computed: false, optional: false, required: true
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
  private _logSettings = new DataScmSecurityRuleLogSettingsOutputReference(this, "log_settings");
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
  private _profileSetting = new DataScmSecurityRuleProfileSettingOutputReference(this, "profile_setting");
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
  private _securitySettings = new DataScmSecurityRuleSecuritySettingsOutputReference(this, "security_settings");
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
