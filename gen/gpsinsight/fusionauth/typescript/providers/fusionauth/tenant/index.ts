// https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TenantConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#access_control_configuration Tenant#access_control_configuration}
  */
  readonly accessControlConfiguration?: TenantAccessControlConfiguration[] | cdktf.IResolvable;
  /**
  * An object that can hold any information about the Tenant that should be persisted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#data Tenant#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#form_configuration Tenant#form_configuration}
  */
  readonly formConfiguration?: TenantFormConfiguration[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#http_session_max_inactive_interval Tenant#http_session_max_inactive_interval}
  */
  readonly httpSessionMaxInactiveInterval?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#id Tenant#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The named issuer used to sign tokens, this is generally your public fully qualified domain.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#issuer Tenant#issuer}
  */
  readonly issuer: string;
  /**
  * The logout redirect URL when sending the user’s browser to the /oauth2/logout URI of the FusionAuth Front End. This value is only used when a logout URL is not defined in your Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#logout_url Tenant#logout_url}
  */
  readonly logoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#multi_factor_configuration Tenant#multi_factor_configuration}
  */
  readonly multiFactorConfiguration?: TenantMultiFactorConfiguration[] | cdktf.IResolvable;
  /**
  * The unique name of the Tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#name Tenant#name}
  */
  readonly name: string;
  /**
  * The optional Id of an existing Tenant to make a copy of. If present, the tenant.id and tenant.name values of the request body will be applied to the new Tenant, all other values will be copied from the source Tenant to the new Tenant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#source_tenant_id Tenant#source_tenant_id}
  */
  readonly sourceTenantId?: string;
  /**
  * The Id to use for the new Tenant. If not specified a secure random UUID will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#tenant_id Tenant#tenant_id}
  */
  readonly tenantId?: string;
  /**
  * The unique Id of the theme to be used to style the login page and other end user templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#theme_id Tenant#theme_id}
  */
  readonly themeId: string;
  /**
  * captcha_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#captcha_configuration Tenant#captcha_configuration}
  */
  readonly captchaConfiguration?: TenantCaptchaConfiguration;
  /**
  * connector_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#connector_policy Tenant#connector_policy}
  */
  readonly connectorPolicy?: TenantConnectorPolicy[] | cdktf.IResolvable;
  /**
  * email_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#email_configuration Tenant#email_configuration}
  */
  readonly emailConfiguration: TenantEmailConfiguration;
  /**
  * event_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#event_configuration Tenant#event_configuration}
  */
  readonly eventConfiguration?: TenantEventConfiguration[] | cdktf.IResolvable;
  /**
  * external_identifier_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#external_identifier_configuration Tenant#external_identifier_configuration}
  */
  readonly externalIdentifierConfiguration: TenantExternalIdentifierConfiguration;
  /**
  * failed_authentication_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#failed_authentication_configuration Tenant#failed_authentication_configuration}
  */
  readonly failedAuthenticationConfiguration?: TenantFailedAuthenticationConfiguration;
  /**
  * family_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#family_configuration Tenant#family_configuration}
  */
  readonly familyConfiguration?: TenantFamilyConfiguration;
  /**
  * jwt_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#jwt_configuration Tenant#jwt_configuration}
  */
  readonly jwtConfiguration: TenantJwtConfiguration[] | cdktf.IResolvable;
  /**
  * login_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#login_configuration Tenant#login_configuration}
  */
  readonly loginConfiguration?: TenantLoginConfiguration;
  /**
  * maximum_password_age block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#maximum_password_age Tenant#maximum_password_age}
  */
  readonly maximumPasswordAge?: TenantMaximumPasswordAge;
  /**
  * minimum_password_age block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#minimum_password_age Tenant#minimum_password_age}
  */
  readonly minimumPasswordAge?: TenantMinimumPasswordAge;
  /**
  * oauth_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#oauth_configuration Tenant#oauth_configuration}
  */
  readonly oauthConfiguration?: TenantOauthConfiguration[] | cdktf.IResolvable;
  /**
  * password_encryption_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#password_encryption_configuration Tenant#password_encryption_configuration}
  */
  readonly passwordEncryptionConfiguration?: TenantPasswordEncryptionConfiguration[] | cdktf.IResolvable;
  /**
  * password_validation_rules block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#password_validation_rules Tenant#password_validation_rules}
  */
  readonly passwordValidationRules?: TenantPasswordValidationRules;
  /**
  * rate_limit_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#rate_limit_configuration Tenant#rate_limit_configuration}
  */
  readonly rateLimitConfiguration?: TenantRateLimitConfiguration;
  /**
  * registration_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#registration_configuration Tenant#registration_configuration}
  */
  readonly registrationConfiguration?: TenantRegistrationConfiguration;
  /**
  * user_delete_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#user_delete_policy Tenant#user_delete_policy}
  */
  readonly userDeletePolicy?: TenantUserDeletePolicy;
  /**
  * username_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#username_configuration Tenant#username_configuration}
  */
  readonly usernameConfiguration?: TenantUsernameConfiguration;
}
export interface TenantAccessControlConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#ui_ip_access_control_list_id Tenant#ui_ip_access_control_list_id}
  */
  readonly uiIpAccessControlListId?: string;
}

export function tenantAccessControlConfigurationToTerraform(struct?: TenantAccessControlConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ui_ip_access_control_list_id: cdktf.stringToTerraform(struct!.uiIpAccessControlListId),
  }
}


export function tenantAccessControlConfigurationToHclTerraform(struct?: TenantAccessControlConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ui_ip_access_control_list_id: {
      value: cdktf.stringToHclTerraform(struct!.uiIpAccessControlListId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantAccessControlConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TenantAccessControlConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uiIpAccessControlListId !== undefined) {
      hasAnyValues = true;
      internalValueResult.uiIpAccessControlListId = this._uiIpAccessControlListId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantAccessControlConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._uiIpAccessControlListId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._uiIpAccessControlListId = value.uiIpAccessControlListId;
    }
  }

  // ui_ip_access_control_list_id - computed: false, optional: true, required: false
  private _uiIpAccessControlListId?: string; 
  public get uiIpAccessControlListId() {
    return this.getStringAttribute('ui_ip_access_control_list_id');
  }
  public set uiIpAccessControlListId(value: string) {
    this._uiIpAccessControlListId = value;
  }
  public resetUiIpAccessControlListId() {
    this._uiIpAccessControlListId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uiIpAccessControlListIdInput() {
    return this._uiIpAccessControlListId;
  }
}

export class TenantAccessControlConfigurationList extends cdktf.ComplexList {
  public internalValue? : TenantAccessControlConfiguration[] | cdktf.IResolvable

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
  public get(index: number): TenantAccessControlConfigurationOutputReference {
    return new TenantAccessControlConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TenantFormConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#admin_user_form_id Tenant#admin_user_form_id}
  */
  readonly adminUserFormId?: string;
}

export function tenantFormConfigurationToTerraform(struct?: TenantFormConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_user_form_id: cdktf.stringToTerraform(struct!.adminUserFormId),
  }
}


export function tenantFormConfigurationToHclTerraform(struct?: TenantFormConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_user_form_id: {
      value: cdktf.stringToHclTerraform(struct!.adminUserFormId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantFormConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TenantFormConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminUserFormId !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminUserFormId = this._adminUserFormId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantFormConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminUserFormId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminUserFormId = value.adminUserFormId;
    }
  }

  // admin_user_form_id - computed: true, optional: true, required: false
  private _adminUserFormId?: string; 
  public get adminUserFormId() {
    return this.getStringAttribute('admin_user_form_id');
  }
  public set adminUserFormId(value: string) {
    this._adminUserFormId = value;
  }
  public resetAdminUserFormId() {
    this._adminUserFormId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminUserFormIdInput() {
    return this._adminUserFormId;
  }
}

export class TenantFormConfigurationList extends cdktf.ComplexList {
  public internalValue? : TenantFormConfiguration[] | cdktf.IResolvable

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
  public get(index: number): TenantFormConfigurationOutputReference {
    return new TenantFormConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TenantMultiFactorConfigurationAuthenticator {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#enabled Tenant#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function tenantMultiFactorConfigurationAuthenticatorToTerraform(struct?: TenantMultiFactorConfigurationAuthenticator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function tenantMultiFactorConfigurationAuthenticatorToHclTerraform(struct?: TenantMultiFactorConfigurationAuthenticator | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantMultiFactorConfigurationAuthenticatorOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TenantMultiFactorConfigurationAuthenticator | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantMultiFactorConfigurationAuthenticator | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}

export class TenantMultiFactorConfigurationAuthenticatorList extends cdktf.ComplexList {
  public internalValue? : TenantMultiFactorConfigurationAuthenticator[] | cdktf.IResolvable

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
  public get(index: number): TenantMultiFactorConfigurationAuthenticatorOutputReference {
    return new TenantMultiFactorConfigurationAuthenticatorOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TenantMultiFactorConfigurationEmail {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#enabled Tenant#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#template_id Tenant#template_id}
  */
  readonly templateId?: string;
}

export function tenantMultiFactorConfigurationEmailToTerraform(struct?: TenantMultiFactorConfigurationEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    template_id: cdktf.stringToTerraform(struct!.templateId),
  }
}


export function tenantMultiFactorConfigurationEmailToHclTerraform(struct?: TenantMultiFactorConfigurationEmail | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    template_id: {
      value: cdktf.stringToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantMultiFactorConfigurationEmailOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TenantMultiFactorConfigurationEmail | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantMultiFactorConfigurationEmail | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._templateId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._templateId = value.templateId;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // template_id - computed: true, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }
}

export class TenantMultiFactorConfigurationEmailList extends cdktf.ComplexList {
  public internalValue? : TenantMultiFactorConfigurationEmail[] | cdktf.IResolvable

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
  public get(index: number): TenantMultiFactorConfigurationEmailOutputReference {
    return new TenantMultiFactorConfigurationEmailOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TenantMultiFactorConfigurationSms {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#enabled Tenant#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#messenger_id Tenant#messenger_id}
  */
  readonly messengerId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#template_id Tenant#template_id}
  */
  readonly templateId?: string;
}

export function tenantMultiFactorConfigurationSmsToTerraform(struct?: TenantMultiFactorConfigurationSms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    messenger_id: cdktf.stringToTerraform(struct!.messengerId),
    template_id: cdktf.stringToTerraform(struct!.templateId),
  }
}


export function tenantMultiFactorConfigurationSmsToHclTerraform(struct?: TenantMultiFactorConfigurationSms | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    messenger_id: {
      value: cdktf.stringToHclTerraform(struct!.messengerId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    template_id: {
      value: cdktf.stringToHclTerraform(struct!.templateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantMultiFactorConfigurationSmsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TenantMultiFactorConfigurationSms | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._messengerId !== undefined) {
      hasAnyValues = true;
      internalValueResult.messengerId = this._messengerId;
    }
    if (this._templateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.templateId = this._templateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantMultiFactorConfigurationSms | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._messengerId = undefined;
      this._templateId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._messengerId = value.messengerId;
      this._templateId = value.templateId;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // messenger_id - computed: true, optional: true, required: false
  private _messengerId?: string; 
  public get messengerId() {
    return this.getStringAttribute('messenger_id');
  }
  public set messengerId(value: string) {
    this._messengerId = value;
  }
  public resetMessengerId() {
    this._messengerId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messengerIdInput() {
    return this._messengerId;
  }

  // template_id - computed: true, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }
}

export class TenantMultiFactorConfigurationSmsList extends cdktf.ComplexList {
  public internalValue? : TenantMultiFactorConfigurationSms[] | cdktf.IResolvable

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
  public get(index: number): TenantMultiFactorConfigurationSmsOutputReference {
    return new TenantMultiFactorConfigurationSmsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TenantMultiFactorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#authenticator Tenant#authenticator}
  */
  readonly authenticator?: TenantMultiFactorConfigurationAuthenticator[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#email Tenant#email}
  */
  readonly email?: TenantMultiFactorConfigurationEmail[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#login_policy Tenant#login_policy}
  */
  readonly loginPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#sms Tenant#sms}
  */
  readonly sms?: TenantMultiFactorConfigurationSms[] | cdktf.IResolvable;
}

export function tenantMultiFactorConfigurationToTerraform(struct?: TenantMultiFactorConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authenticator: cdktf.listMapper(tenantMultiFactorConfigurationAuthenticatorToTerraform, false)(struct!.authenticator),
    email: cdktf.listMapper(tenantMultiFactorConfigurationEmailToTerraform, false)(struct!.email),
    login_policy: cdktf.stringToTerraform(struct!.loginPolicy),
    sms: cdktf.listMapper(tenantMultiFactorConfigurationSmsToTerraform, false)(struct!.sms),
  }
}


export function tenantMultiFactorConfigurationToHclTerraform(struct?: TenantMultiFactorConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authenticator: {
      value: cdktf.listMapperHcl(tenantMultiFactorConfigurationAuthenticatorToHclTerraform, false)(struct!.authenticator),
      isBlock: true,
      type: "list",
      storageClassType: "TenantMultiFactorConfigurationAuthenticatorList",
    },
    email: {
      value: cdktf.listMapperHcl(tenantMultiFactorConfigurationEmailToHclTerraform, false)(struct!.email),
      isBlock: true,
      type: "list",
      storageClassType: "TenantMultiFactorConfigurationEmailList",
    },
    login_policy: {
      value: cdktf.stringToHclTerraform(struct!.loginPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms: {
      value: cdktf.listMapperHcl(tenantMultiFactorConfigurationSmsToHclTerraform, false)(struct!.sms),
      isBlock: true,
      type: "list",
      storageClassType: "TenantMultiFactorConfigurationSmsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantMultiFactorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TenantMultiFactorConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticator = this._authenticator?.internalValue;
    }
    if (this._email?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email?.internalValue;
    }
    if (this._loginPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginPolicy = this._loginPolicy;
    }
    if (this._sms?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sms = this._sms?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantMultiFactorConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticator.internalValue = undefined;
      this._email.internalValue = undefined;
      this._loginPolicy = undefined;
      this._sms.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticator.internalValue = value.authenticator;
      this._email.internalValue = value.email;
      this._loginPolicy = value.loginPolicy;
      this._sms.internalValue = value.sms;
    }
  }

  // authenticator - computed: true, optional: true, required: false
  private _authenticator = new TenantMultiFactorConfigurationAuthenticatorList(this, "authenticator", false);
  public get authenticator() {
    return this._authenticator;
  }
  public putAuthenticator(value: TenantMultiFactorConfigurationAuthenticator[] | cdktf.IResolvable) {
    this._authenticator.internalValue = value;
  }
  public resetAuthenticator() {
    this._authenticator.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorInput() {
    return this._authenticator.internalValue;
  }

  // email - computed: true, optional: true, required: false
  private _email = new TenantMultiFactorConfigurationEmailList(this, "email", false);
  public get email() {
    return this._email;
  }
  public putEmail(value: TenantMultiFactorConfigurationEmail[] | cdktf.IResolvable) {
    this._email.internalValue = value;
  }
  public resetEmail() {
    this._email.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email.internalValue;
  }

  // login_policy - computed: true, optional: true, required: false
  private _loginPolicy?: string; 
  public get loginPolicy() {
    return this.getStringAttribute('login_policy');
  }
  public set loginPolicy(value: string) {
    this._loginPolicy = value;
  }
  public resetLoginPolicy() {
    this._loginPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPolicyInput() {
    return this._loginPolicy;
  }

  // sms - computed: true, optional: true, required: false
  private _sms = new TenantMultiFactorConfigurationSmsList(this, "sms", false);
  public get sms() {
    return this._sms;
  }
  public putSms(value: TenantMultiFactorConfigurationSms[] | cdktf.IResolvable) {
    this._sms.internalValue = value;
  }
  public resetSms() {
    this._sms.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsInput() {
    return this._sms.internalValue;
  }
}

export class TenantMultiFactorConfigurationList extends cdktf.ComplexList {
  public internalValue? : TenantMultiFactorConfiguration[] | cdktf.IResolvable

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
  public get(index: number): TenantMultiFactorConfigurationOutputReference {
    return new TenantMultiFactorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TenantCaptchaConfiguration {
  /**
  * The type of captcha method to use. This field is required when tenant.captchaConfiguration.enabled is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#captcha_method Tenant#captcha_method}
  */
  readonly captchaMethod?: string;
  /**
  * Whether captcha configuration is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#enabled Tenant#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The secret key for this captcha method. This field is required when tenant.captchaConfiguration.enabled is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#secret_key Tenant#secret_key}
  */
  readonly secretKey?: string;
  /**
  * The site key for this captcha method. This field is required when tenant.captchaConfiguration.enabled is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#site_key Tenant#site_key}
  */
  readonly siteKey?: string;
  /**
  * The numeric threshold which separates a passing score from a failing one. This value only applies if using either the Google v3 or HCaptcha Enterprise method, otherwise this value is ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#threshold Tenant#threshold}
  */
  readonly threshold?: number;
}

export function tenantCaptchaConfigurationToTerraform(struct?: TenantCaptchaConfigurationOutputReference | TenantCaptchaConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    captcha_method: cdktf.stringToTerraform(struct!.captchaMethod),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    secret_key: cdktf.stringToTerraform(struct!.secretKey),
    site_key: cdktf.stringToTerraform(struct!.siteKey),
    threshold: cdktf.numberToTerraform(struct!.threshold),
  }
}


export function tenantCaptchaConfigurationToHclTerraform(struct?: TenantCaptchaConfigurationOutputReference | TenantCaptchaConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    captcha_method: {
      value: cdktf.stringToHclTerraform(struct!.captchaMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    secret_key: {
      value: cdktf.stringToHclTerraform(struct!.secretKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_key: {
      value: cdktf.stringToHclTerraform(struct!.siteKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    threshold: {
      value: cdktf.numberToHclTerraform(struct!.threshold),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantCaptchaConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantCaptchaConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._captchaMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaMethod = this._captchaMethod;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._secretKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretKey = this._secretKey;
    }
    if (this._siteKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteKey = this._siteKey;
    }
    if (this._threshold !== undefined) {
      hasAnyValues = true;
      internalValueResult.threshold = this._threshold;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantCaptchaConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._captchaMethod = undefined;
      this._enabled = undefined;
      this._secretKey = undefined;
      this._siteKey = undefined;
      this._threshold = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._captchaMethod = value.captchaMethod;
      this._enabled = value.enabled;
      this._secretKey = value.secretKey;
      this._siteKey = value.siteKey;
      this._threshold = value.threshold;
    }
  }

  // captcha_method - computed: false, optional: true, required: false
  private _captchaMethod?: string; 
  public get captchaMethod() {
    return this.getStringAttribute('captcha_method');
  }
  public set captchaMethod(value: string) {
    this._captchaMethod = value;
  }
  public resetCaptchaMethod() {
    this._captchaMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaMethodInput() {
    return this._captchaMethod;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // secret_key - computed: false, optional: true, required: false
  private _secretKey?: string; 
  public get secretKey() {
    return this.getStringAttribute('secret_key');
  }
  public set secretKey(value: string) {
    this._secretKey = value;
  }
  public resetSecretKey() {
    this._secretKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretKeyInput() {
    return this._secretKey;
  }

  // site_key - computed: false, optional: true, required: false
  private _siteKey?: string; 
  public get siteKey() {
    return this.getStringAttribute('site_key');
  }
  public set siteKey(value: string) {
    this._siteKey = value;
  }
  public resetSiteKey() {
    this._siteKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteKeyInput() {
    return this._siteKey;
  }

  // threshold - computed: false, optional: true, required: false
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  public resetThreshold() {
    this._threshold = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }
}
export interface TenantConnectorPolicy {
  /**
  * The identifier of the Connector to which this policy refers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#connector_id Tenant#connector_id}
  */
  readonly connectorId?: string;
  /**
  * A list of email domains to which this connector should apply. A value of ["*"] indicates this connector applies to all users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#domains Tenant#domains}
  */
  readonly domains?: string[];
  /**
  * If true, the user’s data will be migrated to FusionAuth at first successful authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#migrate Tenant#migrate}
  */
  readonly migrate?: boolean | cdktf.IResolvable;
}

export function tenantConnectorPolicyToTerraform(struct?: TenantConnectorPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    connector_id: cdktf.stringToTerraform(struct!.connectorId),
    domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.domains),
    migrate: cdktf.booleanToTerraform(struct!.migrate),
  }
}


export function tenantConnectorPolicyToHclTerraform(struct?: TenantConnectorPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    connector_id: {
      value: cdktf.stringToHclTerraform(struct!.connectorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.domains),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    migrate: {
      value: cdktf.booleanToHclTerraform(struct!.migrate),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantConnectorPolicyOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TenantConnectorPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._connectorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.connectorId = this._connectorId;
    }
    if (this._domains !== undefined) {
      hasAnyValues = true;
      internalValueResult.domains = this._domains;
    }
    if (this._migrate !== undefined) {
      hasAnyValues = true;
      internalValueResult.migrate = this._migrate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantConnectorPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._connectorId = undefined;
      this._domains = undefined;
      this._migrate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._connectorId = value.connectorId;
      this._domains = value.domains;
      this._migrate = value.migrate;
    }
  }

  // connector_id - computed: false, optional: true, required: false
  private _connectorId?: string; 
  public get connectorId() {
    return this.getStringAttribute('connector_id');
  }
  public set connectorId(value: string) {
    this._connectorId = value;
  }
  public resetConnectorId() {
    this._connectorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorIdInput() {
    return this._connectorId;
  }

  // domains - computed: false, optional: true, required: false
  private _domains?: string[]; 
  public get domains() {
    return cdktf.Fn.tolist(this.getListAttribute('domains'));
  }
  public set domains(value: string[]) {
    this._domains = value;
  }
  public resetDomains() {
    this._domains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainsInput() {
    return this._domains;
  }

  // migrate - computed: false, optional: true, required: false
  private _migrate?: boolean | cdktf.IResolvable; 
  public get migrate() {
    return this.getBooleanAttribute('migrate');
  }
  public set migrate(value: boolean | cdktf.IResolvable) {
    this._migrate = value;
  }
  public resetMigrate() {
    this._migrate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get migrateInput() {
    return this._migrate;
  }
}

export class TenantConnectorPolicyList extends cdktf.ComplexList {
  public internalValue? : TenantConnectorPolicy[] | cdktf.IResolvable

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
  public get(index: number): TenantConnectorPolicyOutputReference {
    return new TenantConnectorPolicyOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TenantEmailConfigurationUnverified {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#allow_email_change_when_gated Tenant#allow_email_change_when_gated}
  */
  readonly allowEmailChangeWhenGated?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#behavior Tenant#behavior}
  */
  readonly behavior?: string;
}

export function tenantEmailConfigurationUnverifiedToTerraform(struct?: TenantEmailConfigurationUnverified | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_email_change_when_gated: cdktf.booleanToTerraform(struct!.allowEmailChangeWhenGated),
    behavior: cdktf.stringToTerraform(struct!.behavior),
  }
}


export function tenantEmailConfigurationUnverifiedToHclTerraform(struct?: TenantEmailConfigurationUnverified | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_email_change_when_gated: {
      value: cdktf.booleanToHclTerraform(struct!.allowEmailChangeWhenGated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantEmailConfigurationUnverifiedOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TenantEmailConfigurationUnverified | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowEmailChangeWhenGated !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEmailChangeWhenGated = this._allowEmailChangeWhenGated;
    }
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantEmailConfigurationUnverified | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowEmailChangeWhenGated = undefined;
      this._behavior = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowEmailChangeWhenGated = value.allowEmailChangeWhenGated;
      this._behavior = value.behavior;
    }
  }

  // allow_email_change_when_gated - computed: true, optional: true, required: false
  private _allowEmailChangeWhenGated?: boolean | cdktf.IResolvable; 
  public get allowEmailChangeWhenGated() {
    return this.getBooleanAttribute('allow_email_change_when_gated');
  }
  public set allowEmailChangeWhenGated(value: boolean | cdktf.IResolvable) {
    this._allowEmailChangeWhenGated = value;
  }
  public resetAllowEmailChangeWhenGated() {
    this._allowEmailChangeWhenGated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEmailChangeWhenGatedInput() {
    return this._allowEmailChangeWhenGated;
  }

  // behavior - computed: true, optional: true, required: false
  private _behavior?: string; 
  public get behavior() {
    return this.getStringAttribute('behavior');
  }
  public set behavior(value: string) {
    this._behavior = value;
  }
  public resetBehavior() {
    this._behavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get behaviorInput() {
    return this._behavior;
  }
}

export class TenantEmailConfigurationUnverifiedList extends cdktf.ComplexList {
  public internalValue? : TenantEmailConfigurationUnverified[] | cdktf.IResolvable

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
  public get(index: number): TenantEmailConfigurationUnverifiedOutputReference {
    return new TenantEmailConfigurationUnverifiedOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TenantEmailConfiguration {
  /**
  * The additional SMTP headers to be added to each outgoing email. Each SMTP header consists of a name and a value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#additional_headers Tenant#additional_headers}
  */
  readonly additionalHeaders?: { [key: string]: string };
  /**
  * The default email address that emails will be sent from when a from address is not provided on an individual email template. This is the address part email address (i.e. Jared Dunn <jared@piedpiper.com>).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#default_from_email Tenant#default_from_email}
  */
  readonly defaultFromEmail?: string;
  /**
  * The default From Name used in sending emails when a from name is not provided on an individual email template. This is the display name part of the email address ( i.e. Jared Dunn <jared@piedpiper.com>).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#default_from_name Tenant#default_from_name}
  */
  readonly defaultFromName?: string;
  /**
  * The Id of the Email Template that is used when a user is sent a forgot password email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#email_update_email_template_id Tenant#email_update_email_template_id}
  */
  readonly emailUpdateEmailTemplateId?: string;
  /**
  * The Id of the Email Template used to verify user emails.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#email_verified_email_template_id Tenant#email_verified_email_template_id}
  */
  readonly emailVerifiedEmailTemplateId?: string;
  /**
  * The Id of the Email Template that is used when a user is sent a forgot password email.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#forgot_password_email_template_id Tenant#forgot_password_email_template_id}
  */
  readonly forgotPasswordEmailTemplateId?: string;
  /**
  * The host name of the SMTP server that FusionAuth will use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#host Tenant#host}
  */
  readonly host: string;
  /**
  * When set to true, this allows email to be verified as a result of completing a similar email based workflow such as change password. When set to false, the user must explicitly complete the email verification workflow even if the user has already completed a similar email workflow such as change password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#implicit_email_verification_allowed Tenant#implicit_email_verification_allowed}
  */
  readonly implicitEmailVerificationAllowed?: boolean | cdktf.IResolvable;
  /**
  * The Id of the Email Template used to send emails to users when another user attempts to create an account with their login Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#login_id_in_use_on_create_email_template_id Tenant#login_id_in_use_on_create_email_template_id}
  */
  readonly loginIdInUseOnCreateEmailTemplateId?: string;
  /**
  * The Id of the Email Template used to send emails to users when another user attempts to create an account with their login Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#login_id_in_use_on_update_email_template_id Tenant#login_id_in_use_on_update_email_template_id}
  */
  readonly loginIdInUseOnUpdateEmailTemplateId?: string;
  /**
  * The Id of the Email Template used to send emails to users when they log in on a new device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#login_new_device_email_template_id Tenant#login_new_device_email_template_id}
  */
  readonly loginNewDeviceEmailTemplateId?: string;
  /**
  * The Id of the Email Template used to send emails to users when a suspicious login occurs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#login_suspicious_email_template_id Tenant#login_suspicious_email_template_id}
  */
  readonly loginSuspiciousEmailTemplateId?: string;
  /**
  * An optional password FusionAuth will use to authenticate with the SMTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#password Tenant#password}
  */
  readonly password?: string;
  /**
  * The Id of the Email Template used to send emails to users when they have completed a 'forgot password' workflow and their password has been reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#password_reset_success_email_template_id Tenant#password_reset_success_email_template_id}
  */
  readonly passwordResetSuccessEmailTemplateId?: string;
  /**
  * The Id of the Email Template used to send emails to users when they have completed a 'forgot password' workflow and their password has been reset.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#password_update_email_template_id Tenant#password_update_email_template_id}
  */
  readonly passwordUpdateEmailTemplateId?: string;
  /**
  * The Id of the Passwordless Email Template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#passwordless_email_template_id Tenant#passwordless_email_template_id}
  */
  readonly passwordlessEmailTemplateId?: string;
  /**
  * The port of the SMTP server that FusionAuth will use.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#port Tenant#port}
  */
  readonly port: number;
  /**
  * Additional Email Configuration in a properties file formatted String.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#properties Tenant#properties}
  */
  readonly properties?: string;
  /**
  * The type of security protocol FusionAuth will use when connecting to the SMTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#security Tenant#security}
  */
  readonly security?: string;
  /**
  * The Id of the Email Template that is used when a user had their account created for them and they must set their password manually and they are sent an email to set their password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#set_password_email_template_id Tenant#set_password_email_template_id}
  */
  readonly setPasswordEmailTemplateId?: string;
  /**
  * The Id of the Email Template used to send emails to users when a MFA method has been added to their account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#two_factor_method_add_email_template_id Tenant#two_factor_method_add_email_template_id}
  */
  readonly twoFactorMethodAddEmailTemplateId?: string;
  /**
  * The Id of the Email Template used to send emails to users when a MFA method has been removed from their account.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#two_factor_method_remove_email_template_id Tenant#two_factor_method_remove_email_template_id}
  */
  readonly twoFactorMethodRemoveEmailTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#unverified Tenant#unverified}
  */
  readonly unverified?: TenantEmailConfigurationUnverified[] | cdktf.IResolvable;
  /**
  * An optional username FusionAuth will to authenticate with the SMTP server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#username Tenant#username}
  */
  readonly username?: string;
  /**
  * The Id of the Email Template that is used to send the verification emails to users. These emails are used to verify that a user’s email address is valid. If either the verifyEmail or verifyEmailWhenChanged fields are true this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#verification_email_template_id Tenant#verification_email_template_id}
  */
  readonly verificationEmailTemplateId?: string;
  /**
  * The process by which the user will verify their email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#verification_strategy Tenant#verification_strategy}
  */
  readonly verificationStrategy?: string;
  /**
  * Whether the user’s email addresses are verified when the registers with your application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#verify_email Tenant#verify_email}
  */
  readonly verifyEmail?: boolean | cdktf.IResolvable;
  /**
  * Whether the user’s email addresses are verified when the user changes them.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#verify_email_when_changed Tenant#verify_email_when_changed}
  */
  readonly verifyEmailWhenChanged?: boolean | cdktf.IResolvable;
}

export function tenantEmailConfigurationToTerraform(struct?: TenantEmailConfigurationOutputReference | TenantEmailConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    additional_headers: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.additionalHeaders),
    default_from_email: cdktf.stringToTerraform(struct!.defaultFromEmail),
    default_from_name: cdktf.stringToTerraform(struct!.defaultFromName),
    email_update_email_template_id: cdktf.stringToTerraform(struct!.emailUpdateEmailTemplateId),
    email_verified_email_template_id: cdktf.stringToTerraform(struct!.emailVerifiedEmailTemplateId),
    forgot_password_email_template_id: cdktf.stringToTerraform(struct!.forgotPasswordEmailTemplateId),
    host: cdktf.stringToTerraform(struct!.host),
    implicit_email_verification_allowed: cdktf.booleanToTerraform(struct!.implicitEmailVerificationAllowed),
    login_id_in_use_on_create_email_template_id: cdktf.stringToTerraform(struct!.loginIdInUseOnCreateEmailTemplateId),
    login_id_in_use_on_update_email_template_id: cdktf.stringToTerraform(struct!.loginIdInUseOnUpdateEmailTemplateId),
    login_new_device_email_template_id: cdktf.stringToTerraform(struct!.loginNewDeviceEmailTemplateId),
    login_suspicious_email_template_id: cdktf.stringToTerraform(struct!.loginSuspiciousEmailTemplateId),
    password: cdktf.stringToTerraform(struct!.password),
    password_reset_success_email_template_id: cdktf.stringToTerraform(struct!.passwordResetSuccessEmailTemplateId),
    password_update_email_template_id: cdktf.stringToTerraform(struct!.passwordUpdateEmailTemplateId),
    passwordless_email_template_id: cdktf.stringToTerraform(struct!.passwordlessEmailTemplateId),
    port: cdktf.numberToTerraform(struct!.port),
    properties: cdktf.stringToTerraform(struct!.properties),
    security: cdktf.stringToTerraform(struct!.security),
    set_password_email_template_id: cdktf.stringToTerraform(struct!.setPasswordEmailTemplateId),
    two_factor_method_add_email_template_id: cdktf.stringToTerraform(struct!.twoFactorMethodAddEmailTemplateId),
    two_factor_method_remove_email_template_id: cdktf.stringToTerraform(struct!.twoFactorMethodRemoveEmailTemplateId),
    unverified: cdktf.listMapper(tenantEmailConfigurationUnverifiedToTerraform, false)(struct!.unverified),
    username: cdktf.stringToTerraform(struct!.username),
    verification_email_template_id: cdktf.stringToTerraform(struct!.verificationEmailTemplateId),
    verification_strategy: cdktf.stringToTerraform(struct!.verificationStrategy),
    verify_email: cdktf.booleanToTerraform(struct!.verifyEmail),
    verify_email_when_changed: cdktf.booleanToTerraform(struct!.verifyEmailWhenChanged),
  }
}


export function tenantEmailConfigurationToHclTerraform(struct?: TenantEmailConfigurationOutputReference | TenantEmailConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    additional_headers: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.additionalHeaders),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    default_from_email: {
      value: cdktf.stringToHclTerraform(struct!.defaultFromEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_from_name: {
      value: cdktf.stringToHclTerraform(struct!.defaultFromName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_update_email_template_id: {
      value: cdktf.stringToHclTerraform(struct!.emailUpdateEmailTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_verified_email_template_id: {
      value: cdktf.stringToHclTerraform(struct!.emailVerifiedEmailTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forgot_password_email_template_id: {
      value: cdktf.stringToHclTerraform(struct!.forgotPasswordEmailTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    host: {
      value: cdktf.stringToHclTerraform(struct!.host),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    implicit_email_verification_allowed: {
      value: cdktf.booleanToHclTerraform(struct!.implicitEmailVerificationAllowed),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    login_id_in_use_on_create_email_template_id: {
      value: cdktf.stringToHclTerraform(struct!.loginIdInUseOnCreateEmailTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_id_in_use_on_update_email_template_id: {
      value: cdktf.stringToHclTerraform(struct!.loginIdInUseOnUpdateEmailTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_new_device_email_template_id: {
      value: cdktf.stringToHclTerraform(struct!.loginNewDeviceEmailTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_suspicious_email_template_id: {
      value: cdktf.stringToHclTerraform(struct!.loginSuspiciousEmailTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.stringToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_reset_success_email_template_id: {
      value: cdktf.stringToHclTerraform(struct!.passwordResetSuccessEmailTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_update_email_template_id: {
      value: cdktf.stringToHclTerraform(struct!.passwordUpdateEmailTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passwordless_email_template_id: {
      value: cdktf.stringToHclTerraform(struct!.passwordlessEmailTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    port: {
      value: cdktf.numberToHclTerraform(struct!.port),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    properties: {
      value: cdktf.stringToHclTerraform(struct!.properties),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    security: {
      value: cdktf.stringToHclTerraform(struct!.security),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    set_password_email_template_id: {
      value: cdktf.stringToHclTerraform(struct!.setPasswordEmailTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    two_factor_method_add_email_template_id: {
      value: cdktf.stringToHclTerraform(struct!.twoFactorMethodAddEmailTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    two_factor_method_remove_email_template_id: {
      value: cdktf.stringToHclTerraform(struct!.twoFactorMethodRemoveEmailTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unverified: {
      value: cdktf.listMapperHcl(tenantEmailConfigurationUnverifiedToHclTerraform, false)(struct!.unverified),
      isBlock: true,
      type: "list",
      storageClassType: "TenantEmailConfigurationUnverifiedList",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verification_email_template_id: {
      value: cdktf.stringToHclTerraform(struct!.verificationEmailTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verification_strategy: {
      value: cdktf.stringToHclTerraform(struct!.verificationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    verify_email: {
      value: cdktf.booleanToHclTerraform(struct!.verifyEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    verify_email_when_changed: {
      value: cdktf.booleanToHclTerraform(struct!.verifyEmailWhenChanged),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantEmailConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantEmailConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._additionalHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.additionalHeaders = this._additionalHeaders;
    }
    if (this._defaultFromEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultFromEmail = this._defaultFromEmail;
    }
    if (this._defaultFromName !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultFromName = this._defaultFromName;
    }
    if (this._emailUpdateEmailTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailUpdateEmailTemplateId = this._emailUpdateEmailTemplateId;
    }
    if (this._emailVerifiedEmailTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailVerifiedEmailTemplateId = this._emailVerifiedEmailTemplateId;
    }
    if (this._forgotPasswordEmailTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.forgotPasswordEmailTemplateId = this._forgotPasswordEmailTemplateId;
    }
    if (this._host !== undefined) {
      hasAnyValues = true;
      internalValueResult.host = this._host;
    }
    if (this._implicitEmailVerificationAllowed !== undefined) {
      hasAnyValues = true;
      internalValueResult.implicitEmailVerificationAllowed = this._implicitEmailVerificationAllowed;
    }
    if (this._loginIdInUseOnCreateEmailTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginIdInUseOnCreateEmailTemplateId = this._loginIdInUseOnCreateEmailTemplateId;
    }
    if (this._loginIdInUseOnUpdateEmailTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginIdInUseOnUpdateEmailTemplateId = this._loginIdInUseOnUpdateEmailTemplateId;
    }
    if (this._loginNewDeviceEmailTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginNewDeviceEmailTemplateId = this._loginNewDeviceEmailTemplateId;
    }
    if (this._loginSuspiciousEmailTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginSuspiciousEmailTemplateId = this._loginSuspiciousEmailTemplateId;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    if (this._passwordResetSuccessEmailTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordResetSuccessEmailTemplateId = this._passwordResetSuccessEmailTemplateId;
    }
    if (this._passwordUpdateEmailTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordUpdateEmailTemplateId = this._passwordUpdateEmailTemplateId;
    }
    if (this._passwordlessEmailTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordlessEmailTemplateId = this._passwordlessEmailTemplateId;
    }
    if (this._port !== undefined) {
      hasAnyValues = true;
      internalValueResult.port = this._port;
    }
    if (this._properties !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties;
    }
    if (this._security !== undefined) {
      hasAnyValues = true;
      internalValueResult.security = this._security;
    }
    if (this._setPasswordEmailTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPasswordEmailTemplateId = this._setPasswordEmailTemplateId;
    }
    if (this._twoFactorMethodAddEmailTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoFactorMethodAddEmailTemplateId = this._twoFactorMethodAddEmailTemplateId;
    }
    if (this._twoFactorMethodRemoveEmailTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoFactorMethodRemoveEmailTemplateId = this._twoFactorMethodRemoveEmailTemplateId;
    }
    if (this._unverified?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unverified = this._unverified?.internalValue;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    if (this._verificationEmailTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.verificationEmailTemplateId = this._verificationEmailTemplateId;
    }
    if (this._verificationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.verificationStrategy = this._verificationStrategy;
    }
    if (this._verifyEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyEmail = this._verifyEmail;
    }
    if (this._verifyEmailWhenChanged !== undefined) {
      hasAnyValues = true;
      internalValueResult.verifyEmailWhenChanged = this._verifyEmailWhenChanged;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantEmailConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._additionalHeaders = undefined;
      this._defaultFromEmail = undefined;
      this._defaultFromName = undefined;
      this._emailUpdateEmailTemplateId = undefined;
      this._emailVerifiedEmailTemplateId = undefined;
      this._forgotPasswordEmailTemplateId = undefined;
      this._host = undefined;
      this._implicitEmailVerificationAllowed = undefined;
      this._loginIdInUseOnCreateEmailTemplateId = undefined;
      this._loginIdInUseOnUpdateEmailTemplateId = undefined;
      this._loginNewDeviceEmailTemplateId = undefined;
      this._loginSuspiciousEmailTemplateId = undefined;
      this._password = undefined;
      this._passwordResetSuccessEmailTemplateId = undefined;
      this._passwordUpdateEmailTemplateId = undefined;
      this._passwordlessEmailTemplateId = undefined;
      this._port = undefined;
      this._properties = undefined;
      this._security = undefined;
      this._setPasswordEmailTemplateId = undefined;
      this._twoFactorMethodAddEmailTemplateId = undefined;
      this._twoFactorMethodRemoveEmailTemplateId = undefined;
      this._unverified.internalValue = undefined;
      this._username = undefined;
      this._verificationEmailTemplateId = undefined;
      this._verificationStrategy = undefined;
      this._verifyEmail = undefined;
      this._verifyEmailWhenChanged = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._additionalHeaders = value.additionalHeaders;
      this._defaultFromEmail = value.defaultFromEmail;
      this._defaultFromName = value.defaultFromName;
      this._emailUpdateEmailTemplateId = value.emailUpdateEmailTemplateId;
      this._emailVerifiedEmailTemplateId = value.emailVerifiedEmailTemplateId;
      this._forgotPasswordEmailTemplateId = value.forgotPasswordEmailTemplateId;
      this._host = value.host;
      this._implicitEmailVerificationAllowed = value.implicitEmailVerificationAllowed;
      this._loginIdInUseOnCreateEmailTemplateId = value.loginIdInUseOnCreateEmailTemplateId;
      this._loginIdInUseOnUpdateEmailTemplateId = value.loginIdInUseOnUpdateEmailTemplateId;
      this._loginNewDeviceEmailTemplateId = value.loginNewDeviceEmailTemplateId;
      this._loginSuspiciousEmailTemplateId = value.loginSuspiciousEmailTemplateId;
      this._password = value.password;
      this._passwordResetSuccessEmailTemplateId = value.passwordResetSuccessEmailTemplateId;
      this._passwordUpdateEmailTemplateId = value.passwordUpdateEmailTemplateId;
      this._passwordlessEmailTemplateId = value.passwordlessEmailTemplateId;
      this._port = value.port;
      this._properties = value.properties;
      this._security = value.security;
      this._setPasswordEmailTemplateId = value.setPasswordEmailTemplateId;
      this._twoFactorMethodAddEmailTemplateId = value.twoFactorMethodAddEmailTemplateId;
      this._twoFactorMethodRemoveEmailTemplateId = value.twoFactorMethodRemoveEmailTemplateId;
      this._unverified.internalValue = value.unverified;
      this._username = value.username;
      this._verificationEmailTemplateId = value.verificationEmailTemplateId;
      this._verificationStrategy = value.verificationStrategy;
      this._verifyEmail = value.verifyEmail;
      this._verifyEmailWhenChanged = value.verifyEmailWhenChanged;
    }
  }

  // additional_headers - computed: false, optional: true, required: false
  private _additionalHeaders?: { [key: string]: string }; 
  public get additionalHeaders() {
    return this.getStringMapAttribute('additional_headers');
  }
  public set additionalHeaders(value: { [key: string]: string }) {
    this._additionalHeaders = value;
  }
  public resetAdditionalHeaders() {
    this._additionalHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get additionalHeadersInput() {
    return this._additionalHeaders;
  }

  // default_from_email - computed: true, optional: true, required: false
  private _defaultFromEmail?: string; 
  public get defaultFromEmail() {
    return this.getStringAttribute('default_from_email');
  }
  public set defaultFromEmail(value: string) {
    this._defaultFromEmail = value;
  }
  public resetDefaultFromEmail() {
    this._defaultFromEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFromEmailInput() {
    return this._defaultFromEmail;
  }

  // default_from_name - computed: false, optional: true, required: false
  private _defaultFromName?: string; 
  public get defaultFromName() {
    return this.getStringAttribute('default_from_name');
  }
  public set defaultFromName(value: string) {
    this._defaultFromName = value;
  }
  public resetDefaultFromName() {
    this._defaultFromName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultFromNameInput() {
    return this._defaultFromName;
  }

  // email_update_email_template_id - computed: false, optional: true, required: false
  private _emailUpdateEmailTemplateId?: string; 
  public get emailUpdateEmailTemplateId() {
    return this.getStringAttribute('email_update_email_template_id');
  }
  public set emailUpdateEmailTemplateId(value: string) {
    this._emailUpdateEmailTemplateId = value;
  }
  public resetEmailUpdateEmailTemplateId() {
    this._emailUpdateEmailTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailUpdateEmailTemplateIdInput() {
    return this._emailUpdateEmailTemplateId;
  }

  // email_verified_email_template_id - computed: false, optional: true, required: false
  private _emailVerifiedEmailTemplateId?: string; 
  public get emailVerifiedEmailTemplateId() {
    return this.getStringAttribute('email_verified_email_template_id');
  }
  public set emailVerifiedEmailTemplateId(value: string) {
    this._emailVerifiedEmailTemplateId = value;
  }
  public resetEmailVerifiedEmailTemplateId() {
    this._emailVerifiedEmailTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerifiedEmailTemplateIdInput() {
    return this._emailVerifiedEmailTemplateId;
  }

  // forgot_password_email_template_id - computed: false, optional: true, required: false
  private _forgotPasswordEmailTemplateId?: string; 
  public get forgotPasswordEmailTemplateId() {
    return this.getStringAttribute('forgot_password_email_template_id');
  }
  public set forgotPasswordEmailTemplateId(value: string) {
    this._forgotPasswordEmailTemplateId = value;
  }
  public resetForgotPasswordEmailTemplateId() {
    this._forgotPasswordEmailTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forgotPasswordEmailTemplateIdInput() {
    return this._forgotPasswordEmailTemplateId;
  }

  // host - computed: false, optional: false, required: true
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
  }

  // implicit_email_verification_allowed - computed: false, optional: true, required: false
  private _implicitEmailVerificationAllowed?: boolean | cdktf.IResolvable; 
  public get implicitEmailVerificationAllowed() {
    return this.getBooleanAttribute('implicit_email_verification_allowed');
  }
  public set implicitEmailVerificationAllowed(value: boolean | cdktf.IResolvable) {
    this._implicitEmailVerificationAllowed = value;
  }
  public resetImplicitEmailVerificationAllowed() {
    this._implicitEmailVerificationAllowed = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get implicitEmailVerificationAllowedInput() {
    return this._implicitEmailVerificationAllowed;
  }

  // login_id_in_use_on_create_email_template_id - computed: false, optional: true, required: false
  private _loginIdInUseOnCreateEmailTemplateId?: string; 
  public get loginIdInUseOnCreateEmailTemplateId() {
    return this.getStringAttribute('login_id_in_use_on_create_email_template_id');
  }
  public set loginIdInUseOnCreateEmailTemplateId(value: string) {
    this._loginIdInUseOnCreateEmailTemplateId = value;
  }
  public resetLoginIdInUseOnCreateEmailTemplateId() {
    this._loginIdInUseOnCreateEmailTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginIdInUseOnCreateEmailTemplateIdInput() {
    return this._loginIdInUseOnCreateEmailTemplateId;
  }

  // login_id_in_use_on_update_email_template_id - computed: false, optional: true, required: false
  private _loginIdInUseOnUpdateEmailTemplateId?: string; 
  public get loginIdInUseOnUpdateEmailTemplateId() {
    return this.getStringAttribute('login_id_in_use_on_update_email_template_id');
  }
  public set loginIdInUseOnUpdateEmailTemplateId(value: string) {
    this._loginIdInUseOnUpdateEmailTemplateId = value;
  }
  public resetLoginIdInUseOnUpdateEmailTemplateId() {
    this._loginIdInUseOnUpdateEmailTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginIdInUseOnUpdateEmailTemplateIdInput() {
    return this._loginIdInUseOnUpdateEmailTemplateId;
  }

  // login_new_device_email_template_id - computed: false, optional: true, required: false
  private _loginNewDeviceEmailTemplateId?: string; 
  public get loginNewDeviceEmailTemplateId() {
    return this.getStringAttribute('login_new_device_email_template_id');
  }
  public set loginNewDeviceEmailTemplateId(value: string) {
    this._loginNewDeviceEmailTemplateId = value;
  }
  public resetLoginNewDeviceEmailTemplateId() {
    this._loginNewDeviceEmailTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginNewDeviceEmailTemplateIdInput() {
    return this._loginNewDeviceEmailTemplateId;
  }

  // login_suspicious_email_template_id - computed: false, optional: true, required: false
  private _loginSuspiciousEmailTemplateId?: string; 
  public get loginSuspiciousEmailTemplateId() {
    return this.getStringAttribute('login_suspicious_email_template_id');
  }
  public set loginSuspiciousEmailTemplateId(value: string) {
    this._loginSuspiciousEmailTemplateId = value;
  }
  public resetLoginSuspiciousEmailTemplateId() {
    this._loginSuspiciousEmailTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginSuspiciousEmailTemplateIdInput() {
    return this._loginSuspiciousEmailTemplateId;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }

  // password_reset_success_email_template_id - computed: false, optional: true, required: false
  private _passwordResetSuccessEmailTemplateId?: string; 
  public get passwordResetSuccessEmailTemplateId() {
    return this.getStringAttribute('password_reset_success_email_template_id');
  }
  public set passwordResetSuccessEmailTemplateId(value: string) {
    this._passwordResetSuccessEmailTemplateId = value;
  }
  public resetPasswordResetSuccessEmailTemplateId() {
    this._passwordResetSuccessEmailTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordResetSuccessEmailTemplateIdInput() {
    return this._passwordResetSuccessEmailTemplateId;
  }

  // password_update_email_template_id - computed: false, optional: true, required: false
  private _passwordUpdateEmailTemplateId?: string; 
  public get passwordUpdateEmailTemplateId() {
    return this.getStringAttribute('password_update_email_template_id');
  }
  public set passwordUpdateEmailTemplateId(value: string) {
    this._passwordUpdateEmailTemplateId = value;
  }
  public resetPasswordUpdateEmailTemplateId() {
    this._passwordUpdateEmailTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordUpdateEmailTemplateIdInput() {
    return this._passwordUpdateEmailTemplateId;
  }

  // passwordless_email_template_id - computed: false, optional: true, required: false
  private _passwordlessEmailTemplateId?: string; 
  public get passwordlessEmailTemplateId() {
    return this.getStringAttribute('passwordless_email_template_id');
  }
  public set passwordlessEmailTemplateId(value: string) {
    this._passwordlessEmailTemplateId = value;
  }
  public resetPasswordlessEmailTemplateId() {
    this._passwordlessEmailTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordlessEmailTemplateIdInput() {
    return this._passwordlessEmailTemplateId;
  }

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // properties - computed: false, optional: true, required: false
  private _properties?: string; 
  public get properties() {
    return this.getStringAttribute('properties');
  }
  public set properties(value: string) {
    this._properties = value;
  }
  public resetProperties() {
    this._properties = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties;
  }

  // security - computed: false, optional: true, required: false
  private _security?: string; 
  public get security() {
    return this.getStringAttribute('security');
  }
  public set security(value: string) {
    this._security = value;
  }
  public resetSecurity() {
    this._security = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityInput() {
    return this._security;
  }

  // set_password_email_template_id - computed: false, optional: true, required: false
  private _setPasswordEmailTemplateId?: string; 
  public get setPasswordEmailTemplateId() {
    return this.getStringAttribute('set_password_email_template_id');
  }
  public set setPasswordEmailTemplateId(value: string) {
    this._setPasswordEmailTemplateId = value;
  }
  public resetSetPasswordEmailTemplateId() {
    this._setPasswordEmailTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setPasswordEmailTemplateIdInput() {
    return this._setPasswordEmailTemplateId;
  }

  // two_factor_method_add_email_template_id - computed: false, optional: true, required: false
  private _twoFactorMethodAddEmailTemplateId?: string; 
  public get twoFactorMethodAddEmailTemplateId() {
    return this.getStringAttribute('two_factor_method_add_email_template_id');
  }
  public set twoFactorMethodAddEmailTemplateId(value: string) {
    this._twoFactorMethodAddEmailTemplateId = value;
  }
  public resetTwoFactorMethodAddEmailTemplateId() {
    this._twoFactorMethodAddEmailTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorMethodAddEmailTemplateIdInput() {
    return this._twoFactorMethodAddEmailTemplateId;
  }

  // two_factor_method_remove_email_template_id - computed: false, optional: true, required: false
  private _twoFactorMethodRemoveEmailTemplateId?: string; 
  public get twoFactorMethodRemoveEmailTemplateId() {
    return this.getStringAttribute('two_factor_method_remove_email_template_id');
  }
  public set twoFactorMethodRemoveEmailTemplateId(value: string) {
    this._twoFactorMethodRemoveEmailTemplateId = value;
  }
  public resetTwoFactorMethodRemoveEmailTemplateId() {
    this._twoFactorMethodRemoveEmailTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorMethodRemoveEmailTemplateIdInput() {
    return this._twoFactorMethodRemoveEmailTemplateId;
  }

  // unverified - computed: true, optional: true, required: false
  private _unverified = new TenantEmailConfigurationUnverifiedList(this, "unverified", false);
  public get unverified() {
    return this._unverified;
  }
  public putUnverified(value: TenantEmailConfigurationUnverified[] | cdktf.IResolvable) {
    this._unverified.internalValue = value;
  }
  public resetUnverified() {
    this._unverified.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unverifiedInput() {
    return this._unverified.internalValue;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // verification_email_template_id - computed: false, optional: true, required: false
  private _verificationEmailTemplateId?: string; 
  public get verificationEmailTemplateId() {
    return this.getStringAttribute('verification_email_template_id');
  }
  public set verificationEmailTemplateId(value: string) {
    this._verificationEmailTemplateId = value;
  }
  public resetVerificationEmailTemplateId() {
    this._verificationEmailTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationEmailTemplateIdInput() {
    return this._verificationEmailTemplateId;
  }

  // verification_strategy - computed: false, optional: true, required: false
  private _verificationStrategy?: string; 
  public get verificationStrategy() {
    return this.getStringAttribute('verification_strategy');
  }
  public set verificationStrategy(value: string) {
    this._verificationStrategy = value;
  }
  public resetVerificationStrategy() {
    this._verificationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verificationStrategyInput() {
    return this._verificationStrategy;
  }

  // verify_email - computed: false, optional: true, required: false
  private _verifyEmail?: boolean | cdktf.IResolvable; 
  public get verifyEmail() {
    return this.getBooleanAttribute('verify_email');
  }
  public set verifyEmail(value: boolean | cdktf.IResolvable) {
    this._verifyEmail = value;
  }
  public resetVerifyEmail() {
    this._verifyEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyEmailInput() {
    return this._verifyEmail;
  }

  // verify_email_when_changed - computed: false, optional: true, required: false
  private _verifyEmailWhenChanged?: boolean | cdktf.IResolvable; 
  public get verifyEmailWhenChanged() {
    return this.getBooleanAttribute('verify_email_when_changed');
  }
  public set verifyEmailWhenChanged(value: boolean | cdktf.IResolvable) {
    this._verifyEmailWhenChanged = value;
  }
  public resetVerifyEmailWhenChanged() {
    this._verifyEmailWhenChanged = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyEmailWhenChangedInput() {
    return this._verifyEmailWhenChanged;
  }
}
export interface TenantEventConfiguration {
  /**
  * Whether or not FusionAuth should send these types of events to any configured Webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#enabled Tenant#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * the event type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#event Tenant#event}
  */
  readonly event?: string;
  /**
  * The transaction type that FusionAuth uses when sending these types of events to any configured Webhooks.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#transaction_type Tenant#transaction_type}
  */
  readonly transactionType?: string;
}

export function tenantEventConfigurationToTerraform(struct?: TenantEventConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    event: cdktf.stringToTerraform(struct!.event),
    transaction_type: cdktf.stringToTerraform(struct!.transactionType),
  }
}


export function tenantEventConfigurationToHclTerraform(struct?: TenantEventConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    event: {
      value: cdktf.stringToHclTerraform(struct!.event),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    transaction_type: {
      value: cdktf.stringToHclTerraform(struct!.transactionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantEventConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TenantEventConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._event !== undefined) {
      hasAnyValues = true;
      internalValueResult.event = this._event;
    }
    if (this._transactionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.transactionType = this._transactionType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantEventConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._event = undefined;
      this._transactionType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._event = value.event;
      this._transactionType = value.transactionType;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // event - computed: false, optional: true, required: false
  private _event?: string; 
  public get event() {
    return this.getStringAttribute('event');
  }
  public set event(value: string) {
    this._event = value;
  }
  public resetEvent() {
    this._event = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventInput() {
    return this._event;
  }

  // transaction_type - computed: false, optional: true, required: false
  private _transactionType?: string; 
  public get transactionType() {
    return this.getStringAttribute('transaction_type');
  }
  public set transactionType(value: string) {
    this._transactionType = value;
  }
  public resetTransactionType() {
    this._transactionType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get transactionTypeInput() {
    return this._transactionType;
  }
}

export class TenantEventConfigurationList extends cdktf.ComplexList {
  public internalValue? : TenantEventConfiguration[] | cdktf.IResolvable

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
  public get(index: number): TenantEventConfigurationOutputReference {
    return new TenantEventConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TenantExternalIdentifierConfigurationChangePasswordIdGenerator {
  /**
  * The length of the secure generator used for generating the change password Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#length Tenant#length}
  */
  readonly length: number;
  /**
  * The type of the secure generator used for generating the change password Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#type Tenant#type}
  */
  readonly type: string;
}

export function tenantExternalIdentifierConfigurationChangePasswordIdGeneratorToTerraform(struct?: TenantExternalIdentifierConfigurationChangePasswordIdGeneratorOutputReference | TenantExternalIdentifierConfigurationChangePasswordIdGenerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    length: cdktf.numberToTerraform(struct!.length),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function tenantExternalIdentifierConfigurationChangePasswordIdGeneratorToHclTerraform(struct?: TenantExternalIdentifierConfigurationChangePasswordIdGeneratorOutputReference | TenantExternalIdentifierConfigurationChangePasswordIdGenerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
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

export class TenantExternalIdentifierConfigurationChangePasswordIdGeneratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantExternalIdentifierConfigurationChangePasswordIdGenerator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantExternalIdentifierConfigurationChangePasswordIdGenerator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._length = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._length = value.length;
      this._type = value.type;
    }
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface TenantExternalIdentifierConfigurationDeviceUserCodeIdGenerator {
  /**
  * The length of the secure generator used for generating the change password Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#length Tenant#length}
  */
  readonly length: number;
  /**
  * The type of the secure generator used for generating the change password Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#type Tenant#type}
  */
  readonly type: string;
}

export function tenantExternalIdentifierConfigurationDeviceUserCodeIdGeneratorToTerraform(struct?: TenantExternalIdentifierConfigurationDeviceUserCodeIdGeneratorOutputReference | TenantExternalIdentifierConfigurationDeviceUserCodeIdGenerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    length: cdktf.numberToTerraform(struct!.length),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function tenantExternalIdentifierConfigurationDeviceUserCodeIdGeneratorToHclTerraform(struct?: TenantExternalIdentifierConfigurationDeviceUserCodeIdGeneratorOutputReference | TenantExternalIdentifierConfigurationDeviceUserCodeIdGenerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
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

export class TenantExternalIdentifierConfigurationDeviceUserCodeIdGeneratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantExternalIdentifierConfigurationDeviceUserCodeIdGenerator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantExternalIdentifierConfigurationDeviceUserCodeIdGenerator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._length = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._length = value.length;
      this._type = value.type;
    }
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface TenantExternalIdentifierConfigurationEmailVerificationIdGenerator {
  /**
  * The length of the secure generator used for generating the change password Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#length Tenant#length}
  */
  readonly length: number;
  /**
  * The type of the secure generator used for generating the change password Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#type Tenant#type}
  */
  readonly type: string;
}

export function tenantExternalIdentifierConfigurationEmailVerificationIdGeneratorToTerraform(struct?: TenantExternalIdentifierConfigurationEmailVerificationIdGeneratorOutputReference | TenantExternalIdentifierConfigurationEmailVerificationIdGenerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    length: cdktf.numberToTerraform(struct!.length),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function tenantExternalIdentifierConfigurationEmailVerificationIdGeneratorToHclTerraform(struct?: TenantExternalIdentifierConfigurationEmailVerificationIdGeneratorOutputReference | TenantExternalIdentifierConfigurationEmailVerificationIdGenerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
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

export class TenantExternalIdentifierConfigurationEmailVerificationIdGeneratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantExternalIdentifierConfigurationEmailVerificationIdGenerator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantExternalIdentifierConfigurationEmailVerificationIdGenerator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._length = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._length = value.length;
      this._type = value.type;
    }
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface TenantExternalIdentifierConfigurationEmailVerificationOneTimeCodeGenerator {
  /**
  * The length of the secure generator used for generating the email verification one time code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#length Tenant#length}
  */
  readonly length: number;
  /**
  * The type of the secure generator used for generating the email verification one time code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#type Tenant#type}
  */
  readonly type?: string;
}

export function tenantExternalIdentifierConfigurationEmailVerificationOneTimeCodeGeneratorToTerraform(struct?: TenantExternalIdentifierConfigurationEmailVerificationOneTimeCodeGeneratorOutputReference | TenantExternalIdentifierConfigurationEmailVerificationOneTimeCodeGenerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    length: cdktf.numberToTerraform(struct!.length),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function tenantExternalIdentifierConfigurationEmailVerificationOneTimeCodeGeneratorToHclTerraform(struct?: TenantExternalIdentifierConfigurationEmailVerificationOneTimeCodeGeneratorOutputReference | TenantExternalIdentifierConfigurationEmailVerificationOneTimeCodeGenerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
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

export class TenantExternalIdentifierConfigurationEmailVerificationOneTimeCodeGeneratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantExternalIdentifierConfigurationEmailVerificationOneTimeCodeGenerator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantExternalIdentifierConfigurationEmailVerificationOneTimeCodeGenerator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._length = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._length = value.length;
      this._type = value.type;
    }
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
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
export interface TenantExternalIdentifierConfigurationPasswordlessLoginGenerator {
  /**
  * The length of the secure generator used for generating the change password Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#length Tenant#length}
  */
  readonly length: number;
  /**
  * The type of the secure generator used for generating the change password Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#type Tenant#type}
  */
  readonly type: string;
}

export function tenantExternalIdentifierConfigurationPasswordlessLoginGeneratorToTerraform(struct?: TenantExternalIdentifierConfigurationPasswordlessLoginGeneratorOutputReference | TenantExternalIdentifierConfigurationPasswordlessLoginGenerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    length: cdktf.numberToTerraform(struct!.length),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function tenantExternalIdentifierConfigurationPasswordlessLoginGeneratorToHclTerraform(struct?: TenantExternalIdentifierConfigurationPasswordlessLoginGeneratorOutputReference | TenantExternalIdentifierConfigurationPasswordlessLoginGenerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
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

export class TenantExternalIdentifierConfigurationPasswordlessLoginGeneratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantExternalIdentifierConfigurationPasswordlessLoginGenerator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantExternalIdentifierConfigurationPasswordlessLoginGenerator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._length = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._length = value.length;
      this._type = value.type;
    }
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface TenantExternalIdentifierConfigurationRegistrationVerificationIdGenerator {
  /**
  * The length of the secure generator used for generating the change password Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#length Tenant#length}
  */
  readonly length: number;
  /**
  * The type of the secure generator used for generating the change password Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#type Tenant#type}
  */
  readonly type: string;
}

export function tenantExternalIdentifierConfigurationRegistrationVerificationIdGeneratorToTerraform(struct?: TenantExternalIdentifierConfigurationRegistrationVerificationIdGeneratorOutputReference | TenantExternalIdentifierConfigurationRegistrationVerificationIdGenerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    length: cdktf.numberToTerraform(struct!.length),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function tenantExternalIdentifierConfigurationRegistrationVerificationIdGeneratorToHclTerraform(struct?: TenantExternalIdentifierConfigurationRegistrationVerificationIdGeneratorOutputReference | TenantExternalIdentifierConfigurationRegistrationVerificationIdGenerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
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

export class TenantExternalIdentifierConfigurationRegistrationVerificationIdGeneratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantExternalIdentifierConfigurationRegistrationVerificationIdGenerator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantExternalIdentifierConfigurationRegistrationVerificationIdGenerator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._length = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._length = value.length;
      this._type = value.type;
    }
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface TenantExternalIdentifierConfigurationRegistrationVerificationOneTimeCodeGenerator {
  /**
  * The length of the secure generator used for generating the registration verification one time code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#length Tenant#length}
  */
  readonly length: number;
  /**
  * The type of the secure generator used for generating the registration verification one time code.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#type Tenant#type}
  */
  readonly type?: string;
}

export function tenantExternalIdentifierConfigurationRegistrationVerificationOneTimeCodeGeneratorToTerraform(struct?: TenantExternalIdentifierConfigurationRegistrationVerificationOneTimeCodeGeneratorOutputReference | TenantExternalIdentifierConfigurationRegistrationVerificationOneTimeCodeGenerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    length: cdktf.numberToTerraform(struct!.length),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function tenantExternalIdentifierConfigurationRegistrationVerificationOneTimeCodeGeneratorToHclTerraform(struct?: TenantExternalIdentifierConfigurationRegistrationVerificationOneTimeCodeGeneratorOutputReference | TenantExternalIdentifierConfigurationRegistrationVerificationOneTimeCodeGenerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
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

export class TenantExternalIdentifierConfigurationRegistrationVerificationOneTimeCodeGeneratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantExternalIdentifierConfigurationRegistrationVerificationOneTimeCodeGenerator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantExternalIdentifierConfigurationRegistrationVerificationOneTimeCodeGenerator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._length = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._length = value.length;
      this._type = value.type;
    }
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
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
export interface TenantExternalIdentifierConfigurationSetupPasswordIdGenerator {
  /**
  * The length of the secure generator used for generating the change password Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#length Tenant#length}
  */
  readonly length: number;
  /**
  * The type of the secure generator used for generating the change password Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#type Tenant#type}
  */
  readonly type: string;
}

export function tenantExternalIdentifierConfigurationSetupPasswordIdGeneratorToTerraform(struct?: TenantExternalIdentifierConfigurationSetupPasswordIdGeneratorOutputReference | TenantExternalIdentifierConfigurationSetupPasswordIdGenerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    length: cdktf.numberToTerraform(struct!.length),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function tenantExternalIdentifierConfigurationSetupPasswordIdGeneratorToHclTerraform(struct?: TenantExternalIdentifierConfigurationSetupPasswordIdGeneratorOutputReference | TenantExternalIdentifierConfigurationSetupPasswordIdGenerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
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

export class TenantExternalIdentifierConfigurationSetupPasswordIdGeneratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantExternalIdentifierConfigurationSetupPasswordIdGenerator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantExternalIdentifierConfigurationSetupPasswordIdGenerator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._length = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._length = value.length;
      this._type = value.type;
    }
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
  }

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }
}
export interface TenantExternalIdentifierConfigurationTwoFactorOneTimeCodeIdGenerator {
  /**
  * The length of the secure generator used for generating the the two factor code Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#length Tenant#length}
  */
  readonly length: number;
  /**
  * The type of the secure generator used for generating the two factor one time code Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#type Tenant#type}
  */
  readonly type?: string;
}

export function tenantExternalIdentifierConfigurationTwoFactorOneTimeCodeIdGeneratorToTerraform(struct?: TenantExternalIdentifierConfigurationTwoFactorOneTimeCodeIdGeneratorOutputReference | TenantExternalIdentifierConfigurationTwoFactorOneTimeCodeIdGenerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    length: cdktf.numberToTerraform(struct!.length),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function tenantExternalIdentifierConfigurationTwoFactorOneTimeCodeIdGeneratorToHclTerraform(struct?: TenantExternalIdentifierConfigurationTwoFactorOneTimeCodeIdGeneratorOutputReference | TenantExternalIdentifierConfigurationTwoFactorOneTimeCodeIdGenerator): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    length: {
      value: cdktf.numberToHclTerraform(struct!.length),
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

export class TenantExternalIdentifierConfigurationTwoFactorOneTimeCodeIdGeneratorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantExternalIdentifierConfigurationTwoFactorOneTimeCodeIdGenerator | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._length !== undefined) {
      hasAnyValues = true;
      internalValueResult.length = this._length;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantExternalIdentifierConfigurationTwoFactorOneTimeCodeIdGenerator | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._length = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._length = value.length;
      this._type = value.type;
    }
  }

  // length - computed: false, optional: false, required: true
  private _length?: number; 
  public get length() {
    return this.getNumberAttribute('length');
  }
  public set length(value: number) {
    this._length = value;
  }
  // Temporarily expose input value. Use with caution.
  public get lengthInput() {
    return this._length;
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
export interface TenantExternalIdentifierConfiguration {
  /**
  * The time in seconds until a OAuth authorization code in no longer valid to be exchanged for an access token. This is essentially the time allowed between the start of an Authorization request during the Authorization code grant and when you request an access token using this authorization code on the Token endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#authorization_grant_id_time_to_live_in_seconds Tenant#authorization_grant_id_time_to_live_in_seconds}
  */
  readonly authorizationGrantIdTimeToLiveInSeconds: number;
  /**
  * The time in seconds until a change password Id is no longer valid and cannot be used by the Change Password API. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#change_password_id_time_to_live_in_seconds Tenant#change_password_id_time_to_live_in_seconds}
  */
  readonly changePasswordIdTimeToLiveInSeconds: number;
  /**
  * The time in seconds until a device code Id is no longer valid and cannot be used by the Token API. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#device_code_time_to_live_in_seconds Tenant#device_code_time_to_live_in_seconds}
  */
  readonly deviceCodeTimeToLiveInSeconds: number;
  /**
  * The time in seconds until a email verification Id is no longer valid and cannot be used by the Verify Email API. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#email_verification_id_time_to_live_in_seconds Tenant#email_verification_id_time_to_live_in_seconds}
  */
  readonly emailVerificationIdTimeToLiveInSeconds: number;
  /**
  * The time in seconds until an external authentication Id is no longer valid and cannot be used by the Token API. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#external_authentication_id_time_to_live_in_seconds Tenant#external_authentication_id_time_to_live_in_seconds}
  */
  readonly externalAuthenticationIdTimeToLiveInSeconds: number;
  /**
  * The time in seconds until a One Time Password is no longer valid and cannot be used by the Login API. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#one_time_password_time_to_live_in_seconds Tenant#one_time_password_time_to_live_in_seconds}
  */
  readonly oneTimePasswordTimeToLiveInSeconds: number;
  /**
  * The time in seconds until a passwordless code is no longer valid and cannot be used by the Passwordless API. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#passwordless_login_time_to_live_in_seconds Tenant#passwordless_login_time_to_live_in_seconds}
  */
  readonly passwordlessLoginTimeToLiveInSeconds: number;
  /**
  * The number of seconds before the pending account link identifier is no longer valid to complete an account link request. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#pending_account_link_time_to_live_in_seconds Tenant#pending_account_link_time_to_live_in_seconds}
  */
  readonly pendingAccountLinkTimeToLiveInSeconds?: number;
  /**
  * The time in seconds until a registration verification Id is no longer valid and cannot be used by the Verify Registration API. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#registration_verification_id_time_to_live_in_seconds Tenant#registration_verification_id_time_to_live_in_seconds}
  */
  readonly registrationVerificationIdTimeToLiveInSeconds: number;
  /**
  * The time in seconds that a SAML AuthN request will be eligible for use to authenticate with FusionAuth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#saml_v2_authn_request_id_ttl_seconds Tenant#saml_v2_authn_request_id_ttl_seconds}
  */
  readonly samlV2AuthnRequestIdTtlSeconds?: number;
  /**
  * The time in seconds until a setup password Id is no longer valid and cannot be used by the Change Password API. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#setup_password_id_time_to_live_in_seconds Tenant#setup_password_id_time_to_live_in_seconds}
  */
  readonly setupPasswordIdTimeToLiveInSeconds: number;
  /**
  * The number of seconds before the Trust Token is no longer valid to complete a request that requires trust. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#trust_token_time_to_live_in_seconds Tenant#trust_token_time_to_live_in_seconds}
  */
  readonly trustTokenTimeToLiveInSeconds?: number;
  /**
  * The time in seconds until a two factor Id is no longer valid and cannot be used by the Two Factor Login API. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#two_factor_id_time_to_live_in_seconds Tenant#two_factor_id_time_to_live_in_seconds}
  */
  readonly twoFactorIdTimeToLiveInSeconds: number;
  /**
  * The number of seconds before the Two-Factor One Time Code used to enable or disable a two-factor method is no longer valid. Must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#two_factor_one_time_code_id_time_to_live_in_seconds Tenant#two_factor_one_time_code_id_time_to_live_in_seconds}
  */
  readonly twoFactorOneTimeCodeIdTimeToLiveInSeconds?: number;
  /**
  * The time in seconds until an issued Two Factor trust Id is no longer valid and the User will be required to complete Two Factor authentication during the next authentication attempt. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#two_factor_trust_id_time_to_live_in_seconds Tenant#two_factor_trust_id_time_to_live_in_seconds}
  */
  readonly twoFactorTrustIdTimeToLiveInSeconds: number;
  /**
  * change_password_id_generator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#change_password_id_generator Tenant#change_password_id_generator}
  */
  readonly changePasswordIdGenerator: TenantExternalIdentifierConfigurationChangePasswordIdGenerator;
  /**
  * device_user_code_id_generator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#device_user_code_id_generator Tenant#device_user_code_id_generator}
  */
  readonly deviceUserCodeIdGenerator: TenantExternalIdentifierConfigurationDeviceUserCodeIdGenerator;
  /**
  * email_verification_id_generator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#email_verification_id_generator Tenant#email_verification_id_generator}
  */
  readonly emailVerificationIdGenerator: TenantExternalIdentifierConfigurationEmailVerificationIdGenerator;
  /**
  * email_verification_one_time_code_generator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#email_verification_one_time_code_generator Tenant#email_verification_one_time_code_generator}
  */
  readonly emailVerificationOneTimeCodeGenerator: TenantExternalIdentifierConfigurationEmailVerificationOneTimeCodeGenerator;
  /**
  * passwordless_login_generator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#passwordless_login_generator Tenant#passwordless_login_generator}
  */
  readonly passwordlessLoginGenerator: TenantExternalIdentifierConfigurationPasswordlessLoginGenerator;
  /**
  * registration_verification_id_generator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#registration_verification_id_generator Tenant#registration_verification_id_generator}
  */
  readonly registrationVerificationIdGenerator: TenantExternalIdentifierConfigurationRegistrationVerificationIdGenerator;
  /**
  * registration_verification_one_time_code_generator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#registration_verification_one_time_code_generator Tenant#registration_verification_one_time_code_generator}
  */
  readonly registrationVerificationOneTimeCodeGenerator: TenantExternalIdentifierConfigurationRegistrationVerificationOneTimeCodeGenerator;
  /**
  * setup_password_id_generator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#setup_password_id_generator Tenant#setup_password_id_generator}
  */
  readonly setupPasswordIdGenerator: TenantExternalIdentifierConfigurationSetupPasswordIdGenerator;
  /**
  * two_factor_one_time_code_id_generator block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#two_factor_one_time_code_id_generator Tenant#two_factor_one_time_code_id_generator}
  */
  readonly twoFactorOneTimeCodeIdGenerator: TenantExternalIdentifierConfigurationTwoFactorOneTimeCodeIdGenerator;
}

export function tenantExternalIdentifierConfigurationToTerraform(struct?: TenantExternalIdentifierConfigurationOutputReference | TenantExternalIdentifierConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorization_grant_id_time_to_live_in_seconds: cdktf.numberToTerraform(struct!.authorizationGrantIdTimeToLiveInSeconds),
    change_password_id_time_to_live_in_seconds: cdktf.numberToTerraform(struct!.changePasswordIdTimeToLiveInSeconds),
    device_code_time_to_live_in_seconds: cdktf.numberToTerraform(struct!.deviceCodeTimeToLiveInSeconds),
    email_verification_id_time_to_live_in_seconds: cdktf.numberToTerraform(struct!.emailVerificationIdTimeToLiveInSeconds),
    external_authentication_id_time_to_live_in_seconds: cdktf.numberToTerraform(struct!.externalAuthenticationIdTimeToLiveInSeconds),
    one_time_password_time_to_live_in_seconds: cdktf.numberToTerraform(struct!.oneTimePasswordTimeToLiveInSeconds),
    passwordless_login_time_to_live_in_seconds: cdktf.numberToTerraform(struct!.passwordlessLoginTimeToLiveInSeconds),
    pending_account_link_time_to_live_in_seconds: cdktf.numberToTerraform(struct!.pendingAccountLinkTimeToLiveInSeconds),
    registration_verification_id_time_to_live_in_seconds: cdktf.numberToTerraform(struct!.registrationVerificationIdTimeToLiveInSeconds),
    saml_v2_authn_request_id_ttl_seconds: cdktf.numberToTerraform(struct!.samlV2AuthnRequestIdTtlSeconds),
    setup_password_id_time_to_live_in_seconds: cdktf.numberToTerraform(struct!.setupPasswordIdTimeToLiveInSeconds),
    trust_token_time_to_live_in_seconds: cdktf.numberToTerraform(struct!.trustTokenTimeToLiveInSeconds),
    two_factor_id_time_to_live_in_seconds: cdktf.numberToTerraform(struct!.twoFactorIdTimeToLiveInSeconds),
    two_factor_one_time_code_id_time_to_live_in_seconds: cdktf.numberToTerraform(struct!.twoFactorOneTimeCodeIdTimeToLiveInSeconds),
    two_factor_trust_id_time_to_live_in_seconds: cdktf.numberToTerraform(struct!.twoFactorTrustIdTimeToLiveInSeconds),
    change_password_id_generator: tenantExternalIdentifierConfigurationChangePasswordIdGeneratorToTerraform(struct!.changePasswordIdGenerator),
    device_user_code_id_generator: tenantExternalIdentifierConfigurationDeviceUserCodeIdGeneratorToTerraform(struct!.deviceUserCodeIdGenerator),
    email_verification_id_generator: tenantExternalIdentifierConfigurationEmailVerificationIdGeneratorToTerraform(struct!.emailVerificationIdGenerator),
    email_verification_one_time_code_generator: tenantExternalIdentifierConfigurationEmailVerificationOneTimeCodeGeneratorToTerraform(struct!.emailVerificationOneTimeCodeGenerator),
    passwordless_login_generator: tenantExternalIdentifierConfigurationPasswordlessLoginGeneratorToTerraform(struct!.passwordlessLoginGenerator),
    registration_verification_id_generator: tenantExternalIdentifierConfigurationRegistrationVerificationIdGeneratorToTerraform(struct!.registrationVerificationIdGenerator),
    registration_verification_one_time_code_generator: tenantExternalIdentifierConfigurationRegistrationVerificationOneTimeCodeGeneratorToTerraform(struct!.registrationVerificationOneTimeCodeGenerator),
    setup_password_id_generator: tenantExternalIdentifierConfigurationSetupPasswordIdGeneratorToTerraform(struct!.setupPasswordIdGenerator),
    two_factor_one_time_code_id_generator: tenantExternalIdentifierConfigurationTwoFactorOneTimeCodeIdGeneratorToTerraform(struct!.twoFactorOneTimeCodeIdGenerator),
  }
}


export function tenantExternalIdentifierConfigurationToHclTerraform(struct?: TenantExternalIdentifierConfigurationOutputReference | TenantExternalIdentifierConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorization_grant_id_time_to_live_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.authorizationGrantIdTimeToLiveInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    change_password_id_time_to_live_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.changePasswordIdTimeToLiveInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    device_code_time_to_live_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.deviceCodeTimeToLiveInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    email_verification_id_time_to_live_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.emailVerificationIdTimeToLiveInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    external_authentication_id_time_to_live_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.externalAuthenticationIdTimeToLiveInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    one_time_password_time_to_live_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.oneTimePasswordTimeToLiveInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    passwordless_login_time_to_live_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.passwordlessLoginTimeToLiveInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pending_account_link_time_to_live_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.pendingAccountLinkTimeToLiveInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    registration_verification_id_time_to_live_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.registrationVerificationIdTimeToLiveInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    saml_v2_authn_request_id_ttl_seconds: {
      value: cdktf.numberToHclTerraform(struct!.samlV2AuthnRequestIdTtlSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    setup_password_id_time_to_live_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.setupPasswordIdTimeToLiveInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    trust_token_time_to_live_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.trustTokenTimeToLiveInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    two_factor_id_time_to_live_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.twoFactorIdTimeToLiveInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    two_factor_one_time_code_id_time_to_live_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.twoFactorOneTimeCodeIdTimeToLiveInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    two_factor_trust_id_time_to_live_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.twoFactorTrustIdTimeToLiveInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    change_password_id_generator: {
      value: tenantExternalIdentifierConfigurationChangePasswordIdGeneratorToHclTerraform(struct!.changePasswordIdGenerator),
      isBlock: true,
      type: "list",
      storageClassType: "TenantExternalIdentifierConfigurationChangePasswordIdGeneratorList",
    },
    device_user_code_id_generator: {
      value: tenantExternalIdentifierConfigurationDeviceUserCodeIdGeneratorToHclTerraform(struct!.deviceUserCodeIdGenerator),
      isBlock: true,
      type: "list",
      storageClassType: "TenantExternalIdentifierConfigurationDeviceUserCodeIdGeneratorList",
    },
    email_verification_id_generator: {
      value: tenantExternalIdentifierConfigurationEmailVerificationIdGeneratorToHclTerraform(struct!.emailVerificationIdGenerator),
      isBlock: true,
      type: "list",
      storageClassType: "TenantExternalIdentifierConfigurationEmailVerificationIdGeneratorList",
    },
    email_verification_one_time_code_generator: {
      value: tenantExternalIdentifierConfigurationEmailVerificationOneTimeCodeGeneratorToHclTerraform(struct!.emailVerificationOneTimeCodeGenerator),
      isBlock: true,
      type: "list",
      storageClassType: "TenantExternalIdentifierConfigurationEmailVerificationOneTimeCodeGeneratorList",
    },
    passwordless_login_generator: {
      value: tenantExternalIdentifierConfigurationPasswordlessLoginGeneratorToHclTerraform(struct!.passwordlessLoginGenerator),
      isBlock: true,
      type: "list",
      storageClassType: "TenantExternalIdentifierConfigurationPasswordlessLoginGeneratorList",
    },
    registration_verification_id_generator: {
      value: tenantExternalIdentifierConfigurationRegistrationVerificationIdGeneratorToHclTerraform(struct!.registrationVerificationIdGenerator),
      isBlock: true,
      type: "list",
      storageClassType: "TenantExternalIdentifierConfigurationRegistrationVerificationIdGeneratorList",
    },
    registration_verification_one_time_code_generator: {
      value: tenantExternalIdentifierConfigurationRegistrationVerificationOneTimeCodeGeneratorToHclTerraform(struct!.registrationVerificationOneTimeCodeGenerator),
      isBlock: true,
      type: "list",
      storageClassType: "TenantExternalIdentifierConfigurationRegistrationVerificationOneTimeCodeGeneratorList",
    },
    setup_password_id_generator: {
      value: tenantExternalIdentifierConfigurationSetupPasswordIdGeneratorToHclTerraform(struct!.setupPasswordIdGenerator),
      isBlock: true,
      type: "list",
      storageClassType: "TenantExternalIdentifierConfigurationSetupPasswordIdGeneratorList",
    },
    two_factor_one_time_code_id_generator: {
      value: tenantExternalIdentifierConfigurationTwoFactorOneTimeCodeIdGeneratorToHclTerraform(struct!.twoFactorOneTimeCodeIdGenerator),
      isBlock: true,
      type: "list",
      storageClassType: "TenantExternalIdentifierConfigurationTwoFactorOneTimeCodeIdGeneratorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantExternalIdentifierConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantExternalIdentifierConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizationGrantIdTimeToLiveInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizationGrantIdTimeToLiveInSeconds = this._authorizationGrantIdTimeToLiveInSeconds;
    }
    if (this._changePasswordIdTimeToLiveInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.changePasswordIdTimeToLiveInSeconds = this._changePasswordIdTimeToLiveInSeconds;
    }
    if (this._deviceCodeTimeToLiveInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceCodeTimeToLiveInSeconds = this._deviceCodeTimeToLiveInSeconds;
    }
    if (this._emailVerificationIdTimeToLiveInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailVerificationIdTimeToLiveInSeconds = this._emailVerificationIdTimeToLiveInSeconds;
    }
    if (this._externalAuthenticationIdTimeToLiveInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalAuthenticationIdTimeToLiveInSeconds = this._externalAuthenticationIdTimeToLiveInSeconds;
    }
    if (this._oneTimePasswordTimeToLiveInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.oneTimePasswordTimeToLiveInSeconds = this._oneTimePasswordTimeToLiveInSeconds;
    }
    if (this._passwordlessLoginTimeToLiveInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordlessLoginTimeToLiveInSeconds = this._passwordlessLoginTimeToLiveInSeconds;
    }
    if (this._pendingAccountLinkTimeToLiveInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.pendingAccountLinkTimeToLiveInSeconds = this._pendingAccountLinkTimeToLiveInSeconds;
    }
    if (this._registrationVerificationIdTimeToLiveInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrationVerificationIdTimeToLiveInSeconds = this._registrationVerificationIdTimeToLiveInSeconds;
    }
    if (this._samlV2AuthnRequestIdTtlSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlV2AuthnRequestIdTtlSeconds = this._samlV2AuthnRequestIdTtlSeconds;
    }
    if (this._setupPasswordIdTimeToLiveInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.setupPasswordIdTimeToLiveInSeconds = this._setupPasswordIdTimeToLiveInSeconds;
    }
    if (this._trustTokenTimeToLiveInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustTokenTimeToLiveInSeconds = this._trustTokenTimeToLiveInSeconds;
    }
    if (this._twoFactorIdTimeToLiveInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoFactorIdTimeToLiveInSeconds = this._twoFactorIdTimeToLiveInSeconds;
    }
    if (this._twoFactorOneTimeCodeIdTimeToLiveInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoFactorOneTimeCodeIdTimeToLiveInSeconds = this._twoFactorOneTimeCodeIdTimeToLiveInSeconds;
    }
    if (this._twoFactorTrustIdTimeToLiveInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoFactorTrustIdTimeToLiveInSeconds = this._twoFactorTrustIdTimeToLiveInSeconds;
    }
    if (this._changePasswordIdGenerator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.changePasswordIdGenerator = this._changePasswordIdGenerator?.internalValue;
    }
    if (this._deviceUserCodeIdGenerator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceUserCodeIdGenerator = this._deviceUserCodeIdGenerator?.internalValue;
    }
    if (this._emailVerificationIdGenerator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailVerificationIdGenerator = this._emailVerificationIdGenerator?.internalValue;
    }
    if (this._emailVerificationOneTimeCodeGenerator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailVerificationOneTimeCodeGenerator = this._emailVerificationOneTimeCodeGenerator?.internalValue;
    }
    if (this._passwordlessLoginGenerator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordlessLoginGenerator = this._passwordlessLoginGenerator?.internalValue;
    }
    if (this._registrationVerificationIdGenerator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrationVerificationIdGenerator = this._registrationVerificationIdGenerator?.internalValue;
    }
    if (this._registrationVerificationOneTimeCodeGenerator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.registrationVerificationOneTimeCodeGenerator = this._registrationVerificationOneTimeCodeGenerator?.internalValue;
    }
    if (this._setupPasswordIdGenerator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.setupPasswordIdGenerator = this._setupPasswordIdGenerator?.internalValue;
    }
    if (this._twoFactorOneTimeCodeIdGenerator?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoFactorOneTimeCodeIdGenerator = this._twoFactorOneTimeCodeIdGenerator?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantExternalIdentifierConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizationGrantIdTimeToLiveInSeconds = undefined;
      this._changePasswordIdTimeToLiveInSeconds = undefined;
      this._deviceCodeTimeToLiveInSeconds = undefined;
      this._emailVerificationIdTimeToLiveInSeconds = undefined;
      this._externalAuthenticationIdTimeToLiveInSeconds = undefined;
      this._oneTimePasswordTimeToLiveInSeconds = undefined;
      this._passwordlessLoginTimeToLiveInSeconds = undefined;
      this._pendingAccountLinkTimeToLiveInSeconds = undefined;
      this._registrationVerificationIdTimeToLiveInSeconds = undefined;
      this._samlV2AuthnRequestIdTtlSeconds = undefined;
      this._setupPasswordIdTimeToLiveInSeconds = undefined;
      this._trustTokenTimeToLiveInSeconds = undefined;
      this._twoFactorIdTimeToLiveInSeconds = undefined;
      this._twoFactorOneTimeCodeIdTimeToLiveInSeconds = undefined;
      this._twoFactorTrustIdTimeToLiveInSeconds = undefined;
      this._changePasswordIdGenerator.internalValue = undefined;
      this._deviceUserCodeIdGenerator.internalValue = undefined;
      this._emailVerificationIdGenerator.internalValue = undefined;
      this._emailVerificationOneTimeCodeGenerator.internalValue = undefined;
      this._passwordlessLoginGenerator.internalValue = undefined;
      this._registrationVerificationIdGenerator.internalValue = undefined;
      this._registrationVerificationOneTimeCodeGenerator.internalValue = undefined;
      this._setupPasswordIdGenerator.internalValue = undefined;
      this._twoFactorOneTimeCodeIdGenerator.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizationGrantIdTimeToLiveInSeconds = value.authorizationGrantIdTimeToLiveInSeconds;
      this._changePasswordIdTimeToLiveInSeconds = value.changePasswordIdTimeToLiveInSeconds;
      this._deviceCodeTimeToLiveInSeconds = value.deviceCodeTimeToLiveInSeconds;
      this._emailVerificationIdTimeToLiveInSeconds = value.emailVerificationIdTimeToLiveInSeconds;
      this._externalAuthenticationIdTimeToLiveInSeconds = value.externalAuthenticationIdTimeToLiveInSeconds;
      this._oneTimePasswordTimeToLiveInSeconds = value.oneTimePasswordTimeToLiveInSeconds;
      this._passwordlessLoginTimeToLiveInSeconds = value.passwordlessLoginTimeToLiveInSeconds;
      this._pendingAccountLinkTimeToLiveInSeconds = value.pendingAccountLinkTimeToLiveInSeconds;
      this._registrationVerificationIdTimeToLiveInSeconds = value.registrationVerificationIdTimeToLiveInSeconds;
      this._samlV2AuthnRequestIdTtlSeconds = value.samlV2AuthnRequestIdTtlSeconds;
      this._setupPasswordIdTimeToLiveInSeconds = value.setupPasswordIdTimeToLiveInSeconds;
      this._trustTokenTimeToLiveInSeconds = value.trustTokenTimeToLiveInSeconds;
      this._twoFactorIdTimeToLiveInSeconds = value.twoFactorIdTimeToLiveInSeconds;
      this._twoFactorOneTimeCodeIdTimeToLiveInSeconds = value.twoFactorOneTimeCodeIdTimeToLiveInSeconds;
      this._twoFactorTrustIdTimeToLiveInSeconds = value.twoFactorTrustIdTimeToLiveInSeconds;
      this._changePasswordIdGenerator.internalValue = value.changePasswordIdGenerator;
      this._deviceUserCodeIdGenerator.internalValue = value.deviceUserCodeIdGenerator;
      this._emailVerificationIdGenerator.internalValue = value.emailVerificationIdGenerator;
      this._emailVerificationOneTimeCodeGenerator.internalValue = value.emailVerificationOneTimeCodeGenerator;
      this._passwordlessLoginGenerator.internalValue = value.passwordlessLoginGenerator;
      this._registrationVerificationIdGenerator.internalValue = value.registrationVerificationIdGenerator;
      this._registrationVerificationOneTimeCodeGenerator.internalValue = value.registrationVerificationOneTimeCodeGenerator;
      this._setupPasswordIdGenerator.internalValue = value.setupPasswordIdGenerator;
      this._twoFactorOneTimeCodeIdGenerator.internalValue = value.twoFactorOneTimeCodeIdGenerator;
    }
  }

  // authorization_grant_id_time_to_live_in_seconds - computed: false, optional: false, required: true
  private _authorizationGrantIdTimeToLiveInSeconds?: number; 
  public get authorizationGrantIdTimeToLiveInSeconds() {
    return this.getNumberAttribute('authorization_grant_id_time_to_live_in_seconds');
  }
  public set authorizationGrantIdTimeToLiveInSeconds(value: number) {
    this._authorizationGrantIdTimeToLiveInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizationGrantIdTimeToLiveInSecondsInput() {
    return this._authorizationGrantIdTimeToLiveInSeconds;
  }

  // change_password_id_time_to_live_in_seconds - computed: false, optional: false, required: true
  private _changePasswordIdTimeToLiveInSeconds?: number; 
  public get changePasswordIdTimeToLiveInSeconds() {
    return this.getNumberAttribute('change_password_id_time_to_live_in_seconds');
  }
  public set changePasswordIdTimeToLiveInSeconds(value: number) {
    this._changePasswordIdTimeToLiveInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get changePasswordIdTimeToLiveInSecondsInput() {
    return this._changePasswordIdTimeToLiveInSeconds;
  }

  // device_code_time_to_live_in_seconds - computed: false, optional: false, required: true
  private _deviceCodeTimeToLiveInSeconds?: number; 
  public get deviceCodeTimeToLiveInSeconds() {
    return this.getNumberAttribute('device_code_time_to_live_in_seconds');
  }
  public set deviceCodeTimeToLiveInSeconds(value: number) {
    this._deviceCodeTimeToLiveInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceCodeTimeToLiveInSecondsInput() {
    return this._deviceCodeTimeToLiveInSeconds;
  }

  // email_verification_id_time_to_live_in_seconds - computed: false, optional: false, required: true
  private _emailVerificationIdTimeToLiveInSeconds?: number; 
  public get emailVerificationIdTimeToLiveInSeconds() {
    return this.getNumberAttribute('email_verification_id_time_to_live_in_seconds');
  }
  public set emailVerificationIdTimeToLiveInSeconds(value: number) {
    this._emailVerificationIdTimeToLiveInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerificationIdTimeToLiveInSecondsInput() {
    return this._emailVerificationIdTimeToLiveInSeconds;
  }

  // external_authentication_id_time_to_live_in_seconds - computed: false, optional: false, required: true
  private _externalAuthenticationIdTimeToLiveInSeconds?: number; 
  public get externalAuthenticationIdTimeToLiveInSeconds() {
    return this.getNumberAttribute('external_authentication_id_time_to_live_in_seconds');
  }
  public set externalAuthenticationIdTimeToLiveInSeconds(value: number) {
    this._externalAuthenticationIdTimeToLiveInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalAuthenticationIdTimeToLiveInSecondsInput() {
    return this._externalAuthenticationIdTimeToLiveInSeconds;
  }

  // one_time_password_time_to_live_in_seconds - computed: false, optional: false, required: true
  private _oneTimePasswordTimeToLiveInSeconds?: number; 
  public get oneTimePasswordTimeToLiveInSeconds() {
    return this.getNumberAttribute('one_time_password_time_to_live_in_seconds');
  }
  public set oneTimePasswordTimeToLiveInSeconds(value: number) {
    this._oneTimePasswordTimeToLiveInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get oneTimePasswordTimeToLiveInSecondsInput() {
    return this._oneTimePasswordTimeToLiveInSeconds;
  }

  // passwordless_login_time_to_live_in_seconds - computed: false, optional: false, required: true
  private _passwordlessLoginTimeToLiveInSeconds?: number; 
  public get passwordlessLoginTimeToLiveInSeconds() {
    return this.getNumberAttribute('passwordless_login_time_to_live_in_seconds');
  }
  public set passwordlessLoginTimeToLiveInSeconds(value: number) {
    this._passwordlessLoginTimeToLiveInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordlessLoginTimeToLiveInSecondsInput() {
    return this._passwordlessLoginTimeToLiveInSeconds;
  }

  // pending_account_link_time_to_live_in_seconds - computed: false, optional: true, required: false
  private _pendingAccountLinkTimeToLiveInSeconds?: number; 
  public get pendingAccountLinkTimeToLiveInSeconds() {
    return this.getNumberAttribute('pending_account_link_time_to_live_in_seconds');
  }
  public set pendingAccountLinkTimeToLiveInSeconds(value: number) {
    this._pendingAccountLinkTimeToLiveInSeconds = value;
  }
  public resetPendingAccountLinkTimeToLiveInSeconds() {
    this._pendingAccountLinkTimeToLiveInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pendingAccountLinkTimeToLiveInSecondsInput() {
    return this._pendingAccountLinkTimeToLiveInSeconds;
  }

  // registration_verification_id_time_to_live_in_seconds - computed: false, optional: false, required: true
  private _registrationVerificationIdTimeToLiveInSeconds?: number; 
  public get registrationVerificationIdTimeToLiveInSeconds() {
    return this.getNumberAttribute('registration_verification_id_time_to_live_in_seconds');
  }
  public set registrationVerificationIdTimeToLiveInSeconds(value: number) {
    this._registrationVerificationIdTimeToLiveInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationVerificationIdTimeToLiveInSecondsInput() {
    return this._registrationVerificationIdTimeToLiveInSeconds;
  }

  // saml_v2_authn_request_id_ttl_seconds - computed: false, optional: true, required: false
  private _samlV2AuthnRequestIdTtlSeconds?: number; 
  public get samlV2AuthnRequestIdTtlSeconds() {
    return this.getNumberAttribute('saml_v2_authn_request_id_ttl_seconds');
  }
  public set samlV2AuthnRequestIdTtlSeconds(value: number) {
    this._samlV2AuthnRequestIdTtlSeconds = value;
  }
  public resetSamlV2AuthnRequestIdTtlSeconds() {
    this._samlV2AuthnRequestIdTtlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlV2AuthnRequestIdTtlSecondsInput() {
    return this._samlV2AuthnRequestIdTtlSeconds;
  }

  // setup_password_id_time_to_live_in_seconds - computed: false, optional: false, required: true
  private _setupPasswordIdTimeToLiveInSeconds?: number; 
  public get setupPasswordIdTimeToLiveInSeconds() {
    return this.getNumberAttribute('setup_password_id_time_to_live_in_seconds');
  }
  public set setupPasswordIdTimeToLiveInSeconds(value: number) {
    this._setupPasswordIdTimeToLiveInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get setupPasswordIdTimeToLiveInSecondsInput() {
    return this._setupPasswordIdTimeToLiveInSeconds;
  }

  // trust_token_time_to_live_in_seconds - computed: false, optional: true, required: false
  private _trustTokenTimeToLiveInSeconds?: number; 
  public get trustTokenTimeToLiveInSeconds() {
    return this.getNumberAttribute('trust_token_time_to_live_in_seconds');
  }
  public set trustTokenTimeToLiveInSeconds(value: number) {
    this._trustTokenTimeToLiveInSeconds = value;
  }
  public resetTrustTokenTimeToLiveInSeconds() {
    this._trustTokenTimeToLiveInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustTokenTimeToLiveInSecondsInput() {
    return this._trustTokenTimeToLiveInSeconds;
  }

  // two_factor_id_time_to_live_in_seconds - computed: false, optional: false, required: true
  private _twoFactorIdTimeToLiveInSeconds?: number; 
  public get twoFactorIdTimeToLiveInSeconds() {
    return this.getNumberAttribute('two_factor_id_time_to_live_in_seconds');
  }
  public set twoFactorIdTimeToLiveInSeconds(value: number) {
    this._twoFactorIdTimeToLiveInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorIdTimeToLiveInSecondsInput() {
    return this._twoFactorIdTimeToLiveInSeconds;
  }

  // two_factor_one_time_code_id_time_to_live_in_seconds - computed: false, optional: true, required: false
  private _twoFactorOneTimeCodeIdTimeToLiveInSeconds?: number; 
  public get twoFactorOneTimeCodeIdTimeToLiveInSeconds() {
    return this.getNumberAttribute('two_factor_one_time_code_id_time_to_live_in_seconds');
  }
  public set twoFactorOneTimeCodeIdTimeToLiveInSeconds(value: number) {
    this._twoFactorOneTimeCodeIdTimeToLiveInSeconds = value;
  }
  public resetTwoFactorOneTimeCodeIdTimeToLiveInSeconds() {
    this._twoFactorOneTimeCodeIdTimeToLiveInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorOneTimeCodeIdTimeToLiveInSecondsInput() {
    return this._twoFactorOneTimeCodeIdTimeToLiveInSeconds;
  }

  // two_factor_trust_id_time_to_live_in_seconds - computed: false, optional: false, required: true
  private _twoFactorTrustIdTimeToLiveInSeconds?: number; 
  public get twoFactorTrustIdTimeToLiveInSeconds() {
    return this.getNumberAttribute('two_factor_trust_id_time_to_live_in_seconds');
  }
  public set twoFactorTrustIdTimeToLiveInSeconds(value: number) {
    this._twoFactorTrustIdTimeToLiveInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorTrustIdTimeToLiveInSecondsInput() {
    return this._twoFactorTrustIdTimeToLiveInSeconds;
  }

  // change_password_id_generator - computed: false, optional: false, required: true
  private _changePasswordIdGenerator = new TenantExternalIdentifierConfigurationChangePasswordIdGeneratorOutputReference(this, "change_password_id_generator");
  public get changePasswordIdGenerator() {
    return this._changePasswordIdGenerator;
  }
  public putChangePasswordIdGenerator(value: TenantExternalIdentifierConfigurationChangePasswordIdGenerator) {
    this._changePasswordIdGenerator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get changePasswordIdGeneratorInput() {
    return this._changePasswordIdGenerator.internalValue;
  }

  // device_user_code_id_generator - computed: false, optional: false, required: true
  private _deviceUserCodeIdGenerator = new TenantExternalIdentifierConfigurationDeviceUserCodeIdGeneratorOutputReference(this, "device_user_code_id_generator");
  public get deviceUserCodeIdGenerator() {
    return this._deviceUserCodeIdGenerator;
  }
  public putDeviceUserCodeIdGenerator(value: TenantExternalIdentifierConfigurationDeviceUserCodeIdGenerator) {
    this._deviceUserCodeIdGenerator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceUserCodeIdGeneratorInput() {
    return this._deviceUserCodeIdGenerator.internalValue;
  }

  // email_verification_id_generator - computed: false, optional: false, required: true
  private _emailVerificationIdGenerator = new TenantExternalIdentifierConfigurationEmailVerificationIdGeneratorOutputReference(this, "email_verification_id_generator");
  public get emailVerificationIdGenerator() {
    return this._emailVerificationIdGenerator;
  }
  public putEmailVerificationIdGenerator(value: TenantExternalIdentifierConfigurationEmailVerificationIdGenerator) {
    this._emailVerificationIdGenerator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerificationIdGeneratorInput() {
    return this._emailVerificationIdGenerator.internalValue;
  }

  // email_verification_one_time_code_generator - computed: false, optional: false, required: true
  private _emailVerificationOneTimeCodeGenerator = new TenantExternalIdentifierConfigurationEmailVerificationOneTimeCodeGeneratorOutputReference(this, "email_verification_one_time_code_generator");
  public get emailVerificationOneTimeCodeGenerator() {
    return this._emailVerificationOneTimeCodeGenerator;
  }
  public putEmailVerificationOneTimeCodeGenerator(value: TenantExternalIdentifierConfigurationEmailVerificationOneTimeCodeGenerator) {
    this._emailVerificationOneTimeCodeGenerator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerificationOneTimeCodeGeneratorInput() {
    return this._emailVerificationOneTimeCodeGenerator.internalValue;
  }

  // passwordless_login_generator - computed: false, optional: false, required: true
  private _passwordlessLoginGenerator = new TenantExternalIdentifierConfigurationPasswordlessLoginGeneratorOutputReference(this, "passwordless_login_generator");
  public get passwordlessLoginGenerator() {
    return this._passwordlessLoginGenerator;
  }
  public putPasswordlessLoginGenerator(value: TenantExternalIdentifierConfigurationPasswordlessLoginGenerator) {
    this._passwordlessLoginGenerator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordlessLoginGeneratorInput() {
    return this._passwordlessLoginGenerator.internalValue;
  }

  // registration_verification_id_generator - computed: false, optional: false, required: true
  private _registrationVerificationIdGenerator = new TenantExternalIdentifierConfigurationRegistrationVerificationIdGeneratorOutputReference(this, "registration_verification_id_generator");
  public get registrationVerificationIdGenerator() {
    return this._registrationVerificationIdGenerator;
  }
  public putRegistrationVerificationIdGenerator(value: TenantExternalIdentifierConfigurationRegistrationVerificationIdGenerator) {
    this._registrationVerificationIdGenerator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationVerificationIdGeneratorInput() {
    return this._registrationVerificationIdGenerator.internalValue;
  }

  // registration_verification_one_time_code_generator - computed: false, optional: false, required: true
  private _registrationVerificationOneTimeCodeGenerator = new TenantExternalIdentifierConfigurationRegistrationVerificationOneTimeCodeGeneratorOutputReference(this, "registration_verification_one_time_code_generator");
  public get registrationVerificationOneTimeCodeGenerator() {
    return this._registrationVerificationOneTimeCodeGenerator;
  }
  public putRegistrationVerificationOneTimeCodeGenerator(value: TenantExternalIdentifierConfigurationRegistrationVerificationOneTimeCodeGenerator) {
    this._registrationVerificationOneTimeCodeGenerator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationVerificationOneTimeCodeGeneratorInput() {
    return this._registrationVerificationOneTimeCodeGenerator.internalValue;
  }

  // setup_password_id_generator - computed: false, optional: false, required: true
  private _setupPasswordIdGenerator = new TenantExternalIdentifierConfigurationSetupPasswordIdGeneratorOutputReference(this, "setup_password_id_generator");
  public get setupPasswordIdGenerator() {
    return this._setupPasswordIdGenerator;
  }
  public putSetupPasswordIdGenerator(value: TenantExternalIdentifierConfigurationSetupPasswordIdGenerator) {
    this._setupPasswordIdGenerator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get setupPasswordIdGeneratorInput() {
    return this._setupPasswordIdGenerator.internalValue;
  }

  // two_factor_one_time_code_id_generator - computed: false, optional: false, required: true
  private _twoFactorOneTimeCodeIdGenerator = new TenantExternalIdentifierConfigurationTwoFactorOneTimeCodeIdGeneratorOutputReference(this, "two_factor_one_time_code_id_generator");
  public get twoFactorOneTimeCodeIdGenerator() {
    return this._twoFactorOneTimeCodeIdGenerator;
  }
  public putTwoFactorOneTimeCodeIdGenerator(value: TenantExternalIdentifierConfigurationTwoFactorOneTimeCodeIdGenerator) {
    this._twoFactorOneTimeCodeIdGenerator.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorOneTimeCodeIdGeneratorInput() {
    return this._twoFactorOneTimeCodeIdGenerator.internalValue;
  }
}
export interface TenantFailedAuthenticationConfiguration {
  /**
  * Indicates whether you want the user to be able to self-service unlock their account prior to the action duration by completing a password reset workflow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#action_cancel_policy_on_password_reset Tenant#action_cancel_policy_on_password_reset}
  */
  readonly actionCancelPolicyOnPasswordReset?: boolean | cdktf.IResolvable;
  /**
  * The duration of the User Action. This value along with the actionDurationUnit will be used to set the duration of the User Action. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#action_duration Tenant#action_duration}
  */
  readonly actionDuration?: number;
  /**
  * The unit of time associated with a duration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#action_duration_unit Tenant#action_duration_unit}
  */
  readonly actionDurationUnit?: string;
  /**
  * Indicates you would like to email the user when the user’s account is locked due to this action being taken. This requires the User Action specified by the tenant.failedAuthenticationConfiguration.userActionId to also be configured for email. If the User Action is not configured to be able to email the user, this configuration will be ignored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#email_user Tenant#email_user}
  */
  readonly emailUser?: boolean | cdktf.IResolvable;
  /**
  * The length of time in seconds before the failed authentication count will be reset. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#reset_count_in_seconds Tenant#reset_count_in_seconds}
  */
  readonly resetCountInSeconds?: number;
  /**
  * The number of failed attempts considered to be too many. Once this threshold is reached the specified User Action will be applied to the user for the duration specified. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#too_many_attempts Tenant#too_many_attempts}
  */
  readonly tooManyAttempts?: number;
  /**
  * The Id of the User Action that is applied when the threshold is reached for too many failed authentication attempts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#user_action_id Tenant#user_action_id}
  */
  readonly userActionId?: string;
}

export function tenantFailedAuthenticationConfigurationToTerraform(struct?: TenantFailedAuthenticationConfigurationOutputReference | TenantFailedAuthenticationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_cancel_policy_on_password_reset: cdktf.booleanToTerraform(struct!.actionCancelPolicyOnPasswordReset),
    action_duration: cdktf.numberToTerraform(struct!.actionDuration),
    action_duration_unit: cdktf.stringToTerraform(struct!.actionDurationUnit),
    email_user: cdktf.booleanToTerraform(struct!.emailUser),
    reset_count_in_seconds: cdktf.numberToTerraform(struct!.resetCountInSeconds),
    too_many_attempts: cdktf.numberToTerraform(struct!.tooManyAttempts),
    user_action_id: cdktf.stringToTerraform(struct!.userActionId),
  }
}


export function tenantFailedAuthenticationConfigurationToHclTerraform(struct?: TenantFailedAuthenticationConfigurationOutputReference | TenantFailedAuthenticationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_cancel_policy_on_password_reset: {
      value: cdktf.booleanToHclTerraform(struct!.actionCancelPolicyOnPasswordReset),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    action_duration: {
      value: cdktf.numberToHclTerraform(struct!.actionDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    action_duration_unit: {
      value: cdktf.stringToHclTerraform(struct!.actionDurationUnit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_user: {
      value: cdktf.booleanToHclTerraform(struct!.emailUser),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    reset_count_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.resetCountInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    too_many_attempts: {
      value: cdktf.numberToHclTerraform(struct!.tooManyAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_action_id: {
      value: cdktf.stringToHclTerraform(struct!.userActionId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantFailedAuthenticationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantFailedAuthenticationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionCancelPolicyOnPasswordReset !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionCancelPolicyOnPasswordReset = this._actionCancelPolicyOnPasswordReset;
    }
    if (this._actionDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionDuration = this._actionDuration;
    }
    if (this._actionDurationUnit !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionDurationUnit = this._actionDurationUnit;
    }
    if (this._emailUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailUser = this._emailUser;
    }
    if (this._resetCountInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetCountInSeconds = this._resetCountInSeconds;
    }
    if (this._tooManyAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.tooManyAttempts = this._tooManyAttempts;
    }
    if (this._userActionId !== undefined) {
      hasAnyValues = true;
      internalValueResult.userActionId = this._userActionId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantFailedAuthenticationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionCancelPolicyOnPasswordReset = undefined;
      this._actionDuration = undefined;
      this._actionDurationUnit = undefined;
      this._emailUser = undefined;
      this._resetCountInSeconds = undefined;
      this._tooManyAttempts = undefined;
      this._userActionId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionCancelPolicyOnPasswordReset = value.actionCancelPolicyOnPasswordReset;
      this._actionDuration = value.actionDuration;
      this._actionDurationUnit = value.actionDurationUnit;
      this._emailUser = value.emailUser;
      this._resetCountInSeconds = value.resetCountInSeconds;
      this._tooManyAttempts = value.tooManyAttempts;
      this._userActionId = value.userActionId;
    }
  }

  // action_cancel_policy_on_password_reset - computed: false, optional: true, required: false
  private _actionCancelPolicyOnPasswordReset?: boolean | cdktf.IResolvable; 
  public get actionCancelPolicyOnPasswordReset() {
    return this.getBooleanAttribute('action_cancel_policy_on_password_reset');
  }
  public set actionCancelPolicyOnPasswordReset(value: boolean | cdktf.IResolvable) {
    this._actionCancelPolicyOnPasswordReset = value;
  }
  public resetActionCancelPolicyOnPasswordReset() {
    this._actionCancelPolicyOnPasswordReset = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionCancelPolicyOnPasswordResetInput() {
    return this._actionCancelPolicyOnPasswordReset;
  }

  // action_duration - computed: false, optional: true, required: false
  private _actionDuration?: number; 
  public get actionDuration() {
    return this.getNumberAttribute('action_duration');
  }
  public set actionDuration(value: number) {
    this._actionDuration = value;
  }
  public resetActionDuration() {
    this._actionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionDurationInput() {
    return this._actionDuration;
  }

  // action_duration_unit - computed: false, optional: true, required: false
  private _actionDurationUnit?: string; 
  public get actionDurationUnit() {
    return this.getStringAttribute('action_duration_unit');
  }
  public set actionDurationUnit(value: string) {
    this._actionDurationUnit = value;
  }
  public resetActionDurationUnit() {
    this._actionDurationUnit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionDurationUnitInput() {
    return this._actionDurationUnit;
  }

  // email_user - computed: false, optional: true, required: false
  private _emailUser?: boolean | cdktf.IResolvable; 
  public get emailUser() {
    return this.getBooleanAttribute('email_user');
  }
  public set emailUser(value: boolean | cdktf.IResolvable) {
    this._emailUser = value;
  }
  public resetEmailUser() {
    this._emailUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailUserInput() {
    return this._emailUser;
  }

  // reset_count_in_seconds - computed: false, optional: true, required: false
  private _resetCountInSeconds?: number; 
  public get resetCountInSeconds() {
    return this.getNumberAttribute('reset_count_in_seconds');
  }
  public set resetCountInSeconds(value: number) {
    this._resetCountInSeconds = value;
  }
  public resetResetCountInSeconds() {
    this._resetCountInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetCountInSecondsInput() {
    return this._resetCountInSeconds;
  }

  // too_many_attempts - computed: false, optional: true, required: false
  private _tooManyAttempts?: number; 
  public get tooManyAttempts() {
    return this.getNumberAttribute('too_many_attempts');
  }
  public set tooManyAttempts(value: number) {
    this._tooManyAttempts = value;
  }
  public resetTooManyAttempts() {
    this._tooManyAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tooManyAttemptsInput() {
    return this._tooManyAttempts;
  }

  // user_action_id - computed: false, optional: true, required: false
  private _userActionId?: string; 
  public get userActionId() {
    return this.getStringAttribute('user_action_id');
  }
  public set userActionId(value: string) {
    this._userActionId = value;
  }
  public resetUserActionId() {
    this._userActionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userActionIdInput() {
    return this._userActionId;
  }
}
export interface TenantFamilyConfiguration {
  /**
  * Whether to allow child registrations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#allow_child_registrations Tenant#allow_child_registrations}
  */
  readonly allowChildRegistrations?: boolean | cdktf.IResolvable;
  /**
  * The unique Id of the email template to use when confirming a child.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#confirm_child_email_template_id Tenant#confirm_child_email_template_id}
  */
  readonly confirmChildEmailTemplateId?: string;
  /**
  * Indicates that child users without parental verification will be permanently deleted after tenant.familyConfiguration.deleteOrphanedAccountsDays days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#delete_orphaned_accounts Tenant#delete_orphaned_accounts}
  */
  readonly deleteOrphanedAccounts?: boolean | cdktf.IResolvable;
  /**
  * The number of days from creation child users will be retained before being deleted for not completing parental verification. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#delete_orphaned_accounts_days Tenant#delete_orphaned_accounts_days}
  */
  readonly deleteOrphanedAccountsDays?: number;
  /**
  * Whether family configuration is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#enabled Tenant#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The unique Id of the email template to use when a family request is made.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#family_request_email_template_id Tenant#family_request_email_template_id}
  */
  readonly familyRequestEmailTemplateId?: string;
  /**
  * The maximum age of a child. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#maximum_child_age Tenant#maximum_child_age}
  */
  readonly maximumChildAge?: number;
  /**
  * The minimum age to be an owner. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#minimum_owner_age Tenant#minimum_owner_age}
  */
  readonly minimumOwnerAge?: number;
  /**
  * Whether a parent email is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#parent_email_required Tenant#parent_email_required}
  */
  readonly parentEmailRequired?: boolean | cdktf.IResolvable;
  /**
  * The unique Id of the email template to use for parent registration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#parent_registration_email_template_id Tenant#parent_registration_email_template_id}
  */
  readonly parentRegistrationEmailTemplateId?: string;
}

export function tenantFamilyConfigurationToTerraform(struct?: TenantFamilyConfigurationOutputReference | TenantFamilyConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_child_registrations: cdktf.booleanToTerraform(struct!.allowChildRegistrations),
    confirm_child_email_template_id: cdktf.stringToTerraform(struct!.confirmChildEmailTemplateId),
    delete_orphaned_accounts: cdktf.booleanToTerraform(struct!.deleteOrphanedAccounts),
    delete_orphaned_accounts_days: cdktf.numberToTerraform(struct!.deleteOrphanedAccountsDays),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    family_request_email_template_id: cdktf.stringToTerraform(struct!.familyRequestEmailTemplateId),
    maximum_child_age: cdktf.numberToTerraform(struct!.maximumChildAge),
    minimum_owner_age: cdktf.numberToTerraform(struct!.minimumOwnerAge),
    parent_email_required: cdktf.booleanToTerraform(struct!.parentEmailRequired),
    parent_registration_email_template_id: cdktf.stringToTerraform(struct!.parentRegistrationEmailTemplateId),
  }
}


export function tenantFamilyConfigurationToHclTerraform(struct?: TenantFamilyConfigurationOutputReference | TenantFamilyConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_child_registrations: {
      value: cdktf.booleanToHclTerraform(struct!.allowChildRegistrations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    confirm_child_email_template_id: {
      value: cdktf.stringToHclTerraform(struct!.confirmChildEmailTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete_orphaned_accounts: {
      value: cdktf.booleanToHclTerraform(struct!.deleteOrphanedAccounts),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    delete_orphaned_accounts_days: {
      value: cdktf.numberToHclTerraform(struct!.deleteOrphanedAccountsDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    family_request_email_template_id: {
      value: cdktf.stringToHclTerraform(struct!.familyRequestEmailTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    maximum_child_age: {
      value: cdktf.numberToHclTerraform(struct!.maximumChildAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    minimum_owner_age: {
      value: cdktf.numberToHclTerraform(struct!.minimumOwnerAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    parent_email_required: {
      value: cdktf.booleanToHclTerraform(struct!.parentEmailRequired),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parent_registration_email_template_id: {
      value: cdktf.stringToHclTerraform(struct!.parentRegistrationEmailTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantFamilyConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantFamilyConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowChildRegistrations !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowChildRegistrations = this._allowChildRegistrations;
    }
    if (this._confirmChildEmailTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmChildEmailTemplateId = this._confirmChildEmailTemplateId;
    }
    if (this._deleteOrphanedAccounts !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteOrphanedAccounts = this._deleteOrphanedAccounts;
    }
    if (this._deleteOrphanedAccountsDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteOrphanedAccountsDays = this._deleteOrphanedAccountsDays;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._familyRequestEmailTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.familyRequestEmailTemplateId = this._familyRequestEmailTemplateId;
    }
    if (this._maximumChildAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maximumChildAge = this._maximumChildAge;
    }
    if (this._minimumOwnerAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.minimumOwnerAge = this._minimumOwnerAge;
    }
    if (this._parentEmailRequired !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentEmailRequired = this._parentEmailRequired;
    }
    if (this._parentRegistrationEmailTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.parentRegistrationEmailTemplateId = this._parentRegistrationEmailTemplateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantFamilyConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowChildRegistrations = undefined;
      this._confirmChildEmailTemplateId = undefined;
      this._deleteOrphanedAccounts = undefined;
      this._deleteOrphanedAccountsDays = undefined;
      this._enabled = undefined;
      this._familyRequestEmailTemplateId = undefined;
      this._maximumChildAge = undefined;
      this._minimumOwnerAge = undefined;
      this._parentEmailRequired = undefined;
      this._parentRegistrationEmailTemplateId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowChildRegistrations = value.allowChildRegistrations;
      this._confirmChildEmailTemplateId = value.confirmChildEmailTemplateId;
      this._deleteOrphanedAccounts = value.deleteOrphanedAccounts;
      this._deleteOrphanedAccountsDays = value.deleteOrphanedAccountsDays;
      this._enabled = value.enabled;
      this._familyRequestEmailTemplateId = value.familyRequestEmailTemplateId;
      this._maximumChildAge = value.maximumChildAge;
      this._minimumOwnerAge = value.minimumOwnerAge;
      this._parentEmailRequired = value.parentEmailRequired;
      this._parentRegistrationEmailTemplateId = value.parentRegistrationEmailTemplateId;
    }
  }

  // allow_child_registrations - computed: false, optional: true, required: false
  private _allowChildRegistrations?: boolean | cdktf.IResolvable; 
  public get allowChildRegistrations() {
    return this.getBooleanAttribute('allow_child_registrations');
  }
  public set allowChildRegistrations(value: boolean | cdktf.IResolvable) {
    this._allowChildRegistrations = value;
  }
  public resetAllowChildRegistrations() {
    this._allowChildRegistrations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowChildRegistrationsInput() {
    return this._allowChildRegistrations;
  }

  // confirm_child_email_template_id - computed: false, optional: true, required: false
  private _confirmChildEmailTemplateId?: string; 
  public get confirmChildEmailTemplateId() {
    return this.getStringAttribute('confirm_child_email_template_id');
  }
  public set confirmChildEmailTemplateId(value: string) {
    this._confirmChildEmailTemplateId = value;
  }
  public resetConfirmChildEmailTemplateId() {
    this._confirmChildEmailTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmChildEmailTemplateIdInput() {
    return this._confirmChildEmailTemplateId;
  }

  // delete_orphaned_accounts - computed: false, optional: true, required: false
  private _deleteOrphanedAccounts?: boolean | cdktf.IResolvable; 
  public get deleteOrphanedAccounts() {
    return this.getBooleanAttribute('delete_orphaned_accounts');
  }
  public set deleteOrphanedAccounts(value: boolean | cdktf.IResolvable) {
    this._deleteOrphanedAccounts = value;
  }
  public resetDeleteOrphanedAccounts() {
    this._deleteOrphanedAccounts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOrphanedAccountsInput() {
    return this._deleteOrphanedAccounts;
  }

  // delete_orphaned_accounts_days - computed: false, optional: true, required: false
  private _deleteOrphanedAccountsDays?: number; 
  public get deleteOrphanedAccountsDays() {
    return this.getNumberAttribute('delete_orphaned_accounts_days');
  }
  public set deleteOrphanedAccountsDays(value: number) {
    this._deleteOrphanedAccountsDays = value;
  }
  public resetDeleteOrphanedAccountsDays() {
    this._deleteOrphanedAccountsDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteOrphanedAccountsDaysInput() {
    return this._deleteOrphanedAccountsDays;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // family_request_email_template_id - computed: false, optional: true, required: false
  private _familyRequestEmailTemplateId?: string; 
  public get familyRequestEmailTemplateId() {
    return this.getStringAttribute('family_request_email_template_id');
  }
  public set familyRequestEmailTemplateId(value: string) {
    this._familyRequestEmailTemplateId = value;
  }
  public resetFamilyRequestEmailTemplateId() {
    this._familyRequestEmailTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyRequestEmailTemplateIdInput() {
    return this._familyRequestEmailTemplateId;
  }

  // maximum_child_age - computed: false, optional: true, required: false
  private _maximumChildAge?: number; 
  public get maximumChildAge() {
    return this.getNumberAttribute('maximum_child_age');
  }
  public set maximumChildAge(value: number) {
    this._maximumChildAge = value;
  }
  public resetMaximumChildAge() {
    this._maximumChildAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumChildAgeInput() {
    return this._maximumChildAge;
  }

  // minimum_owner_age - computed: false, optional: true, required: false
  private _minimumOwnerAge?: number; 
  public get minimumOwnerAge() {
    return this.getNumberAttribute('minimum_owner_age');
  }
  public set minimumOwnerAge(value: number) {
    this._minimumOwnerAge = value;
  }
  public resetMinimumOwnerAge() {
    this._minimumOwnerAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumOwnerAgeInput() {
    return this._minimumOwnerAge;
  }

  // parent_email_required - computed: false, optional: true, required: false
  private _parentEmailRequired?: boolean | cdktf.IResolvable; 
  public get parentEmailRequired() {
    return this.getBooleanAttribute('parent_email_required');
  }
  public set parentEmailRequired(value: boolean | cdktf.IResolvable) {
    this._parentEmailRequired = value;
  }
  public resetParentEmailRequired() {
    this._parentEmailRequired = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentEmailRequiredInput() {
    return this._parentEmailRequired;
  }

  // parent_registration_email_template_id - computed: false, optional: true, required: false
  private _parentRegistrationEmailTemplateId?: string; 
  public get parentRegistrationEmailTemplateId() {
    return this.getStringAttribute('parent_registration_email_template_id');
  }
  public set parentRegistrationEmailTemplateId(value: string) {
    this._parentRegistrationEmailTemplateId = value;
  }
  public resetParentRegistrationEmailTemplateId() {
    this._parentRegistrationEmailTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parentRegistrationEmailTemplateIdInput() {
    return this._parentRegistrationEmailTemplateId;
  }
}
export interface TenantJwtConfiguration {
  /**
  * The unique id of the signing key used to sign the access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#access_token_key_id Tenant#access_token_key_id}
  */
  readonly accessTokenKeyId?: string;
  /**
  * The unique id of the signing key used to sign the Id token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#id_token_key_id Tenant#id_token_key_id}
  */
  readonly idTokenKeyId?: string;
  /**
  * The refresh token expiration policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#refresh_token_expiration_policy Tenant#refresh_token_expiration_policy}
  */
  readonly refreshTokenExpirationPolicy?: string;
  /**
  * When enabled, the refresh token will be revoked when a user action, such as locking an account based on a number of failed login attempts, prevents user login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#refresh_token_revocation_policy_on_login_prevented Tenant#refresh_token_revocation_policy_on_login_prevented}
  */
  readonly refreshTokenRevocationPolicyOnLoginPrevented?: boolean | cdktf.IResolvable;
  /**
  * When enabled, the refresh token will be revoked when a user changes their password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#refresh_token_revocation_policy_on_password_change Tenant#refresh_token_revocation_policy_on_password_change}
  */
  readonly refreshTokenRevocationPolicyOnPasswordChange?: boolean | cdktf.IResolvable;
  /**
  * The maximum lifetime of a refresh token when using a refresh token expiration policy of SlidingWindowWithMaximumLifetime. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#refresh_token_sliding_window_maximum_time_to_live_in_minutes Tenant#refresh_token_sliding_window_maximum_time_to_live_in_minutes}
  */
  readonly refreshTokenSlidingWindowMaximumTimeToLiveInMinutes?: number;
  /**
  * The length of time in minutes a Refresh Token is valid from the time it was issued. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#refresh_token_time_to_live_in_minutes Tenant#refresh_token_time_to_live_in_minutes}
  */
  readonly refreshTokenTimeToLiveInMinutes: number;
  /**
  * The refresh token usage policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#refresh_token_usage_policy Tenant#refresh_token_usage_policy}
  */
  readonly refreshTokenUsagePolicy?: string;
  /**
  * The length of time in seconds this JWT is valid from the time it was issued. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#time_to_live_in_seconds Tenant#time_to_live_in_seconds}
  */
  readonly timeToLiveInSeconds: number;
}

export function tenantJwtConfigurationToTerraform(struct?: TenantJwtConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token_key_id: cdktf.stringToTerraform(struct!.accessTokenKeyId),
    id_token_key_id: cdktf.stringToTerraform(struct!.idTokenKeyId),
    refresh_token_expiration_policy: cdktf.stringToTerraform(struct!.refreshTokenExpirationPolicy),
    refresh_token_revocation_policy_on_login_prevented: cdktf.booleanToTerraform(struct!.refreshTokenRevocationPolicyOnLoginPrevented),
    refresh_token_revocation_policy_on_password_change: cdktf.booleanToTerraform(struct!.refreshTokenRevocationPolicyOnPasswordChange),
    refresh_token_sliding_window_maximum_time_to_live_in_minutes: cdktf.numberToTerraform(struct!.refreshTokenSlidingWindowMaximumTimeToLiveInMinutes),
    refresh_token_time_to_live_in_minutes: cdktf.numberToTerraform(struct!.refreshTokenTimeToLiveInMinutes),
    refresh_token_usage_policy: cdktf.stringToTerraform(struct!.refreshTokenUsagePolicy),
    time_to_live_in_seconds: cdktf.numberToTerraform(struct!.timeToLiveInSeconds),
  }
}


export function tenantJwtConfigurationToHclTerraform(struct?: TenantJwtConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token_key_id: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_token_key_id: {
      value: cdktf.stringToHclTerraform(struct!.idTokenKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_token_expiration_policy: {
      value: cdktf.stringToHclTerraform(struct!.refreshTokenExpirationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_token_revocation_policy_on_login_prevented: {
      value: cdktf.booleanToHclTerraform(struct!.refreshTokenRevocationPolicyOnLoginPrevented),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    refresh_token_revocation_policy_on_password_change: {
      value: cdktf.booleanToHclTerraform(struct!.refreshTokenRevocationPolicyOnPasswordChange),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    refresh_token_sliding_window_maximum_time_to_live_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.refreshTokenSlidingWindowMaximumTimeToLiveInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refresh_token_time_to_live_in_minutes: {
      value: cdktf.numberToHclTerraform(struct!.refreshTokenTimeToLiveInMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    refresh_token_usage_policy: {
      value: cdktf.stringToHclTerraform(struct!.refreshTokenUsagePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    time_to_live_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timeToLiveInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantJwtConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TenantJwtConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokenKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenKeyId = this._accessTokenKeyId;
    }
    if (this._idTokenKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.idTokenKeyId = this._idTokenKeyId;
    }
    if (this._refreshTokenExpirationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTokenExpirationPolicy = this._refreshTokenExpirationPolicy;
    }
    if (this._refreshTokenRevocationPolicyOnLoginPrevented !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTokenRevocationPolicyOnLoginPrevented = this._refreshTokenRevocationPolicyOnLoginPrevented;
    }
    if (this._refreshTokenRevocationPolicyOnPasswordChange !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTokenRevocationPolicyOnPasswordChange = this._refreshTokenRevocationPolicyOnPasswordChange;
    }
    if (this._refreshTokenSlidingWindowMaximumTimeToLiveInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTokenSlidingWindowMaximumTimeToLiveInMinutes = this._refreshTokenSlidingWindowMaximumTimeToLiveInMinutes;
    }
    if (this._refreshTokenTimeToLiveInMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTokenTimeToLiveInMinutes = this._refreshTokenTimeToLiveInMinutes;
    }
    if (this._refreshTokenUsagePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTokenUsagePolicy = this._refreshTokenUsagePolicy;
    }
    if (this._timeToLiveInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeToLiveInSeconds = this._timeToLiveInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantJwtConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessTokenKeyId = undefined;
      this._idTokenKeyId = undefined;
      this._refreshTokenExpirationPolicy = undefined;
      this._refreshTokenRevocationPolicyOnLoginPrevented = undefined;
      this._refreshTokenRevocationPolicyOnPasswordChange = undefined;
      this._refreshTokenSlidingWindowMaximumTimeToLiveInMinutes = undefined;
      this._refreshTokenTimeToLiveInMinutes = undefined;
      this._refreshTokenUsagePolicy = undefined;
      this._timeToLiveInSeconds = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessTokenKeyId = value.accessTokenKeyId;
      this._idTokenKeyId = value.idTokenKeyId;
      this._refreshTokenExpirationPolicy = value.refreshTokenExpirationPolicy;
      this._refreshTokenRevocationPolicyOnLoginPrevented = value.refreshTokenRevocationPolicyOnLoginPrevented;
      this._refreshTokenRevocationPolicyOnPasswordChange = value.refreshTokenRevocationPolicyOnPasswordChange;
      this._refreshTokenSlidingWindowMaximumTimeToLiveInMinutes = value.refreshTokenSlidingWindowMaximumTimeToLiveInMinutes;
      this._refreshTokenTimeToLiveInMinutes = value.refreshTokenTimeToLiveInMinutes;
      this._refreshTokenUsagePolicy = value.refreshTokenUsagePolicy;
      this._timeToLiveInSeconds = value.timeToLiveInSeconds;
    }
  }

  // access_token_key_id - computed: true, optional: true, required: false
  private _accessTokenKeyId?: string; 
  public get accessTokenKeyId() {
    return this.getStringAttribute('access_token_key_id');
  }
  public set accessTokenKeyId(value: string) {
    this._accessTokenKeyId = value;
  }
  public resetAccessTokenKeyId() {
    this._accessTokenKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenKeyIdInput() {
    return this._accessTokenKeyId;
  }

  // id_token_key_id - computed: true, optional: true, required: false
  private _idTokenKeyId?: string; 
  public get idTokenKeyId() {
    return this.getStringAttribute('id_token_key_id');
  }
  public set idTokenKeyId(value: string) {
    this._idTokenKeyId = value;
  }
  public resetIdTokenKeyId() {
    this._idTokenKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenKeyIdInput() {
    return this._idTokenKeyId;
  }

  // refresh_token_expiration_policy - computed: false, optional: true, required: false
  private _refreshTokenExpirationPolicy?: string; 
  public get refreshTokenExpirationPolicy() {
    return this.getStringAttribute('refresh_token_expiration_policy');
  }
  public set refreshTokenExpirationPolicy(value: string) {
    this._refreshTokenExpirationPolicy = value;
  }
  public resetRefreshTokenExpirationPolicy() {
    this._refreshTokenExpirationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenExpirationPolicyInput() {
    return this._refreshTokenExpirationPolicy;
  }

  // refresh_token_revocation_policy_on_login_prevented - computed: false, optional: true, required: false
  private _refreshTokenRevocationPolicyOnLoginPrevented?: boolean | cdktf.IResolvable; 
  public get refreshTokenRevocationPolicyOnLoginPrevented() {
    return this.getBooleanAttribute('refresh_token_revocation_policy_on_login_prevented');
  }
  public set refreshTokenRevocationPolicyOnLoginPrevented(value: boolean | cdktf.IResolvable) {
    this._refreshTokenRevocationPolicyOnLoginPrevented = value;
  }
  public resetRefreshTokenRevocationPolicyOnLoginPrevented() {
    this._refreshTokenRevocationPolicyOnLoginPrevented = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenRevocationPolicyOnLoginPreventedInput() {
    return this._refreshTokenRevocationPolicyOnLoginPrevented;
  }

  // refresh_token_revocation_policy_on_password_change - computed: false, optional: true, required: false
  private _refreshTokenRevocationPolicyOnPasswordChange?: boolean | cdktf.IResolvable; 
  public get refreshTokenRevocationPolicyOnPasswordChange() {
    return this.getBooleanAttribute('refresh_token_revocation_policy_on_password_change');
  }
  public set refreshTokenRevocationPolicyOnPasswordChange(value: boolean | cdktf.IResolvable) {
    this._refreshTokenRevocationPolicyOnPasswordChange = value;
  }
  public resetRefreshTokenRevocationPolicyOnPasswordChange() {
    this._refreshTokenRevocationPolicyOnPasswordChange = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenRevocationPolicyOnPasswordChangeInput() {
    return this._refreshTokenRevocationPolicyOnPasswordChange;
  }

  // refresh_token_sliding_window_maximum_time_to_live_in_minutes - computed: false, optional: true, required: false
  private _refreshTokenSlidingWindowMaximumTimeToLiveInMinutes?: number; 
  public get refreshTokenSlidingWindowMaximumTimeToLiveInMinutes() {
    return this.getNumberAttribute('refresh_token_sliding_window_maximum_time_to_live_in_minutes');
  }
  public set refreshTokenSlidingWindowMaximumTimeToLiveInMinutes(value: number) {
    this._refreshTokenSlidingWindowMaximumTimeToLiveInMinutes = value;
  }
  public resetRefreshTokenSlidingWindowMaximumTimeToLiveInMinutes() {
    this._refreshTokenSlidingWindowMaximumTimeToLiveInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenSlidingWindowMaximumTimeToLiveInMinutesInput() {
    return this._refreshTokenSlidingWindowMaximumTimeToLiveInMinutes;
  }

  // refresh_token_time_to_live_in_minutes - computed: false, optional: false, required: true
  private _refreshTokenTimeToLiveInMinutes?: number; 
  public get refreshTokenTimeToLiveInMinutes() {
    return this.getNumberAttribute('refresh_token_time_to_live_in_minutes');
  }
  public set refreshTokenTimeToLiveInMinutes(value: number) {
    this._refreshTokenTimeToLiveInMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenTimeToLiveInMinutesInput() {
    return this._refreshTokenTimeToLiveInMinutes;
  }

  // refresh_token_usage_policy - computed: false, optional: true, required: false
  private _refreshTokenUsagePolicy?: string; 
  public get refreshTokenUsagePolicy() {
    return this.getStringAttribute('refresh_token_usage_policy');
  }
  public set refreshTokenUsagePolicy(value: string) {
    this._refreshTokenUsagePolicy = value;
  }
  public resetRefreshTokenUsagePolicy() {
    this._refreshTokenUsagePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenUsagePolicyInput() {
    return this._refreshTokenUsagePolicy;
  }

  // time_to_live_in_seconds - computed: false, optional: false, required: true
  private _timeToLiveInSeconds?: number; 
  public get timeToLiveInSeconds() {
    return this.getNumberAttribute('time_to_live_in_seconds');
  }
  public set timeToLiveInSeconds(value: number) {
    this._timeToLiveInSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeToLiveInSecondsInput() {
    return this._timeToLiveInSeconds;
  }
}

export class TenantJwtConfigurationList extends cdktf.ComplexList {
  public internalValue? : TenantJwtConfiguration[] | cdktf.IResolvable

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
  public get(index: number): TenantJwtConfigurationOutputReference {
    return new TenantJwtConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TenantLoginConfiguration {
  /**
  * Indicates whether to require an API key for the Login API when an applicationId is not provided. When an applicationId is provided to the Login API call, the application configuration will take precedence. In almost all cases, you will want to this to be true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#require_authentication Tenant#require_authentication}
  */
  readonly requireAuthentication?: boolean | cdktf.IResolvable;
}

export function tenantLoginConfigurationToTerraform(struct?: TenantLoginConfigurationOutputReference | TenantLoginConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    require_authentication: cdktf.booleanToTerraform(struct!.requireAuthentication),
  }
}


export function tenantLoginConfigurationToHclTerraform(struct?: TenantLoginConfigurationOutputReference | TenantLoginConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    require_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.requireAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantLoginConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantLoginConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._requireAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAuthentication = this._requireAuthentication;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantLoginConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._requireAuthentication = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._requireAuthentication = value.requireAuthentication;
    }
  }

  // require_authentication - computed: true, optional: true, required: false
  private _requireAuthentication?: boolean | cdktf.IResolvable; 
  public get requireAuthentication() {
    return this.getBooleanAttribute('require_authentication');
  }
  public set requireAuthentication(value: boolean | cdktf.IResolvable) {
    this._requireAuthentication = value;
  }
  public resetRequireAuthentication() {
    this._requireAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireAuthenticationInput() {
    return this._requireAuthentication;
  }
}
export interface TenantMaximumPasswordAge {
  /**
  * The password maximum age in days. The number of days after which FusionAuth will require a user to change their password. Required when systemConfiguration.maximumPasswordAge.enabled is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#days Tenant#days}
  */
  readonly days?: number;
  /**
  * Indicates that the maximum password age is enabled and being enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#enabled Tenant#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function tenantMaximumPasswordAgeToTerraform(struct?: TenantMaximumPasswordAgeOutputReference | TenantMaximumPasswordAge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    days: cdktf.numberToTerraform(struct!.days),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function tenantMaximumPasswordAgeToHclTerraform(struct?: TenantMaximumPasswordAgeOutputReference | TenantMaximumPasswordAge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    days: {
      value: cdktf.numberToHclTerraform(struct!.days),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantMaximumPasswordAgeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantMaximumPasswordAge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._days !== undefined) {
      hasAnyValues = true;
      internalValueResult.days = this._days;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantMaximumPasswordAge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._days = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._days = value.days;
      this._enabled = value.enabled;
    }
  }

  // days - computed: false, optional: true, required: false
  private _days?: number; 
  public get days() {
    return this.getNumberAttribute('days');
  }
  public set days(value: number) {
    this._days = value;
  }
  public resetDays() {
    this._days = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get daysInput() {
    return this._days;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface TenantMinimumPasswordAge {
  /**
  * Indicates that the minimum password age is enabled and being enforced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#enabled Tenant#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The password minimum age in seconds. When enabled FusionAuth will not allow a password to be changed until it reaches this minimum age. Required when systemConfiguration.minimumPasswordAge.enabled is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#seconds Tenant#seconds}
  */
  readonly seconds?: number;
}

export function tenantMinimumPasswordAgeToTerraform(struct?: TenantMinimumPasswordAgeOutputReference | TenantMinimumPasswordAge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    seconds: cdktf.numberToTerraform(struct!.seconds),
  }
}


export function tenantMinimumPasswordAgeToHclTerraform(struct?: TenantMinimumPasswordAgeOutputReference | TenantMinimumPasswordAge): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    seconds: {
      value: cdktf.numberToHclTerraform(struct!.seconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantMinimumPasswordAgeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantMinimumPasswordAge | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._seconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.seconds = this._seconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantMinimumPasswordAge | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._seconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._seconds = value.seconds;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // seconds - computed: false, optional: true, required: false
  private _seconds?: number; 
  public get seconds() {
    return this.getNumberAttribute('seconds');
  }
  public set seconds(value: number) {
    this._seconds = value;
  }
  public resetSeconds() {
    this._seconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secondsInput() {
    return this._seconds;
  }
}
export interface TenantOauthConfiguration {
  /**
  * The Id of a lambda that will be called to populate the JWT during a client credentials grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#client_credentials_access_token_populate_lambda_id Tenant#client_credentials_access_token_populate_lambda_id}
  */
  readonly clientCredentialsAccessTokenPopulateLambdaId?: string;
}

export function tenantOauthConfigurationToTerraform(struct?: TenantOauthConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_credentials_access_token_populate_lambda_id: cdktf.stringToTerraform(struct!.clientCredentialsAccessTokenPopulateLambdaId),
  }
}


export function tenantOauthConfigurationToHclTerraform(struct?: TenantOauthConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_credentials_access_token_populate_lambda_id: {
      value: cdktf.stringToHclTerraform(struct!.clientCredentialsAccessTokenPopulateLambdaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantOauthConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TenantOauthConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientCredentialsAccessTokenPopulateLambdaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCredentialsAccessTokenPopulateLambdaId = this._clientCredentialsAccessTokenPopulateLambdaId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantOauthConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientCredentialsAccessTokenPopulateLambdaId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientCredentialsAccessTokenPopulateLambdaId = value.clientCredentialsAccessTokenPopulateLambdaId;
    }
  }

  // client_credentials_access_token_populate_lambda_id - computed: false, optional: true, required: false
  private _clientCredentialsAccessTokenPopulateLambdaId?: string; 
  public get clientCredentialsAccessTokenPopulateLambdaId() {
    return this.getStringAttribute('client_credentials_access_token_populate_lambda_id');
  }
  public set clientCredentialsAccessTokenPopulateLambdaId(value: string) {
    this._clientCredentialsAccessTokenPopulateLambdaId = value;
  }
  public resetClientCredentialsAccessTokenPopulateLambdaId() {
    this._clientCredentialsAccessTokenPopulateLambdaId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCredentialsAccessTokenPopulateLambdaIdInput() {
    return this._clientCredentialsAccessTokenPopulateLambdaId;
  }
}

export class TenantOauthConfigurationList extends cdktf.ComplexList {
  public internalValue? : TenantOauthConfiguration[] | cdktf.IResolvable

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
  public get(index: number): TenantOauthConfigurationOutputReference {
    return new TenantOauthConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TenantPasswordEncryptionConfiguration {
  /**
  * The default method for encrypting the User’s password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#encryption_scheme Tenant#encryption_scheme}
  */
  readonly encryptionScheme?: string;
  /**
  * The factor used by the password encryption scheme. If not provided, the PasswordEncryptor provides a default value. Generally this will be used as an iteration count to generate the hash. The actual use of this value is up to the PasswordEncryptor implementation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#encryption_scheme_factor Tenant#encryption_scheme_factor}
  */
  readonly encryptionSchemeFactor?: number;
  /**
  * When enabled a user’s hash configuration will be modified to match these configured settings. This can be useful to increase a password hash strength over time or upgrade imported users to a more secure encryption scheme after an initial import.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#modify_encryption_scheme_on_login Tenant#modify_encryption_scheme_on_login}
  */
  readonly modifyEncryptionSchemeOnLogin?: boolean | cdktf.IResolvable;
}

export function tenantPasswordEncryptionConfigurationToTerraform(struct?: TenantPasswordEncryptionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    encryption_scheme: cdktf.stringToTerraform(struct!.encryptionScheme),
    encryption_scheme_factor: cdktf.numberToTerraform(struct!.encryptionSchemeFactor),
    modify_encryption_scheme_on_login: cdktf.booleanToTerraform(struct!.modifyEncryptionSchemeOnLogin),
  }
}


export function tenantPasswordEncryptionConfigurationToHclTerraform(struct?: TenantPasswordEncryptionConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    encryption_scheme: {
      value: cdktf.stringToHclTerraform(struct!.encryptionScheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encryption_scheme_factor: {
      value: cdktf.numberToHclTerraform(struct!.encryptionSchemeFactor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    modify_encryption_scheme_on_login: {
      value: cdktf.booleanToHclTerraform(struct!.modifyEncryptionSchemeOnLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantPasswordEncryptionConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TenantPasswordEncryptionConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._encryptionScheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionScheme = this._encryptionScheme;
    }
    if (this._encryptionSchemeFactor !== undefined) {
      hasAnyValues = true;
      internalValueResult.encryptionSchemeFactor = this._encryptionSchemeFactor;
    }
    if (this._modifyEncryptionSchemeOnLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.modifyEncryptionSchemeOnLogin = this._modifyEncryptionSchemeOnLogin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantPasswordEncryptionConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._encryptionScheme = undefined;
      this._encryptionSchemeFactor = undefined;
      this._modifyEncryptionSchemeOnLogin = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._encryptionScheme = value.encryptionScheme;
      this._encryptionSchemeFactor = value.encryptionSchemeFactor;
      this._modifyEncryptionSchemeOnLogin = value.modifyEncryptionSchemeOnLogin;
    }
  }

  // encryption_scheme - computed: false, optional: true, required: false
  private _encryptionScheme?: string; 
  public get encryptionScheme() {
    return this.getStringAttribute('encryption_scheme');
  }
  public set encryptionScheme(value: string) {
    this._encryptionScheme = value;
  }
  public resetEncryptionScheme() {
    this._encryptionScheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSchemeInput() {
    return this._encryptionScheme;
  }

  // encryption_scheme_factor - computed: false, optional: true, required: false
  private _encryptionSchemeFactor?: number; 
  public get encryptionSchemeFactor() {
    return this.getNumberAttribute('encryption_scheme_factor');
  }
  public set encryptionSchemeFactor(value: number) {
    this._encryptionSchemeFactor = value;
  }
  public resetEncryptionSchemeFactor() {
    this._encryptionSchemeFactor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encryptionSchemeFactorInput() {
    return this._encryptionSchemeFactor;
  }

  // modify_encryption_scheme_on_login - computed: false, optional: true, required: false
  private _modifyEncryptionSchemeOnLogin?: boolean | cdktf.IResolvable; 
  public get modifyEncryptionSchemeOnLogin() {
    return this.getBooleanAttribute('modify_encryption_scheme_on_login');
  }
  public set modifyEncryptionSchemeOnLogin(value: boolean | cdktf.IResolvable) {
    this._modifyEncryptionSchemeOnLogin = value;
  }
  public resetModifyEncryptionSchemeOnLogin() {
    this._modifyEncryptionSchemeOnLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modifyEncryptionSchemeOnLoginInput() {
    return this._modifyEncryptionSchemeOnLogin;
  }
}

export class TenantPasswordEncryptionConfigurationList extends cdktf.ComplexList {
  public internalValue? : TenantPasswordEncryptionConfiguration[] | cdktf.IResolvable

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
  public get(index: number): TenantPasswordEncryptionConfigurationOutputReference {
    return new TenantPasswordEncryptionConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TenantPasswordValidationRulesBreachDetection {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#enabled Tenant#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#match_mode Tenant#match_mode}
  */
  readonly matchMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#notify_user_email_template_id Tenant#notify_user_email_template_id}
  */
  readonly notifyUserEmailTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#on_login Tenant#on_login}
  */
  readonly onLogin?: string;
}

export function tenantPasswordValidationRulesBreachDetectionToTerraform(struct?: TenantPasswordValidationRulesBreachDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    match_mode: cdktf.stringToTerraform(struct!.matchMode),
    notify_user_email_template_id: cdktf.stringToTerraform(struct!.notifyUserEmailTemplateId),
    on_login: cdktf.stringToTerraform(struct!.onLogin),
  }
}


export function tenantPasswordValidationRulesBreachDetectionToHclTerraform(struct?: TenantPasswordValidationRulesBreachDetection | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    match_mode: {
      value: cdktf.stringToHclTerraform(struct!.matchMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notify_user_email_template_id: {
      value: cdktf.stringToHclTerraform(struct!.notifyUserEmailTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    on_login: {
      value: cdktf.stringToHclTerraform(struct!.onLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantPasswordValidationRulesBreachDetectionOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): TenantPasswordValidationRulesBreachDetection | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._matchMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchMode = this._matchMode;
    }
    if (this._notifyUserEmailTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifyUserEmailTemplateId = this._notifyUserEmailTemplateId;
    }
    if (this._onLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.onLogin = this._onLogin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantPasswordValidationRulesBreachDetection | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._matchMode = undefined;
      this._notifyUserEmailTemplateId = undefined;
      this._onLogin = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._matchMode = value.matchMode;
      this._notifyUserEmailTemplateId = value.notifyUserEmailTemplateId;
      this._onLogin = value.onLogin;
    }
  }

  // enabled - computed: true, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // match_mode - computed: true, optional: true, required: false
  private _matchMode?: string; 
  public get matchMode() {
    return this.getStringAttribute('match_mode');
  }
  public set matchMode(value: string) {
    this._matchMode = value;
  }
  public resetMatchMode() {
    this._matchMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchModeInput() {
    return this._matchMode;
  }

  // notify_user_email_template_id - computed: true, optional: true, required: false
  private _notifyUserEmailTemplateId?: string; 
  public get notifyUserEmailTemplateId() {
    return this.getStringAttribute('notify_user_email_template_id');
  }
  public set notifyUserEmailTemplateId(value: string) {
    this._notifyUserEmailTemplateId = value;
  }
  public resetNotifyUserEmailTemplateId() {
    this._notifyUserEmailTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyUserEmailTemplateIdInput() {
    return this._notifyUserEmailTemplateId;
  }

  // on_login - computed: true, optional: true, required: false
  private _onLogin?: string; 
  public get onLogin() {
    return this.getStringAttribute('on_login');
  }
  public set onLogin(value: string) {
    this._onLogin = value;
  }
  public resetOnLogin() {
    this._onLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onLoginInput() {
    return this._onLogin;
  }
}

export class TenantPasswordValidationRulesBreachDetectionList extends cdktf.ComplexList {
  public internalValue? : TenantPasswordValidationRulesBreachDetection[] | cdktf.IResolvable

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
  public get(index: number): TenantPasswordValidationRulesBreachDetectionOutputReference {
    return new TenantPasswordValidationRulesBreachDetectionOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface TenantPasswordValidationRulesRememberPreviousPasswords {
  /**
  * The number of previous passwords to remember. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#count Tenant#count}
  */
  readonly count?: number;
  /**
  * Whether to prevent a user from using any of their previous passwords.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#enabled Tenant#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function tenantPasswordValidationRulesRememberPreviousPasswordsToTerraform(struct?: TenantPasswordValidationRulesRememberPreviousPasswordsOutputReference | TenantPasswordValidationRulesRememberPreviousPasswords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.numberToTerraform(struct!.count),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function tenantPasswordValidationRulesRememberPreviousPasswordsToHclTerraform(struct?: TenantPasswordValidationRulesRememberPreviousPasswordsOutputReference | TenantPasswordValidationRulesRememberPreviousPasswords): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.numberToHclTerraform(struct!.count),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantPasswordValidationRulesRememberPreviousPasswordsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantPasswordValidationRulesRememberPreviousPasswords | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantPasswordValidationRulesRememberPreviousPasswords | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._count = undefined;
      this._enabled = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._count = value.count;
      this._enabled = value.enabled;
    }
  }

  // count - computed: false, optional: true, required: false
  private _count?: number; 
  public get count() {
    return this.getNumberAttribute('count');
  }
  public set count(value: number) {
    this._count = value;
  }
  public resetCount() {
    this._count = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }
}
export interface TenantPasswordValidationRules {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#breach_detection Tenant#breach_detection}
  */
  readonly breachDetection?: TenantPasswordValidationRulesBreachDetection[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#max_length Tenant#max_length}
  */
  readonly maxLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#min_length Tenant#min_length}
  */
  readonly minLength?: number;
  /**
  * Whether to force the user to use at least one non-alphanumeric character.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#require_non_alpha Tenant#require_non_alpha}
  */
  readonly requireNonAlpha?: boolean | cdktf.IResolvable;
  /**
  * Whether to force the user to use at least one number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#require_number Tenant#require_number}
  */
  readonly requireNumber?: boolean | cdktf.IResolvable;
  /**
  * Whether to force the user to use at least one uppercase and one lowercase character.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#required_mixed_case Tenant#required_mixed_case}
  */
  readonly requiredMixedCase?: boolean | cdktf.IResolvable;
  /**
  * When enabled the user’s password will be validated during login. If the password does not meet the currently configured validation rules the user will be required to change their password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#validate_on_login Tenant#validate_on_login}
  */
  readonly validateOnLogin?: boolean | cdktf.IResolvable;
  /**
  * remember_previous_passwords block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#remember_previous_passwords Tenant#remember_previous_passwords}
  */
  readonly rememberPreviousPasswords?: TenantPasswordValidationRulesRememberPreviousPasswords;
}

export function tenantPasswordValidationRulesToTerraform(struct?: TenantPasswordValidationRulesOutputReference | TenantPasswordValidationRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    breach_detection: cdktf.listMapper(tenantPasswordValidationRulesBreachDetectionToTerraform, false)(struct!.breachDetection),
    max_length: cdktf.numberToTerraform(struct!.maxLength),
    min_length: cdktf.numberToTerraform(struct!.minLength),
    require_non_alpha: cdktf.booleanToTerraform(struct!.requireNonAlpha),
    require_number: cdktf.booleanToTerraform(struct!.requireNumber),
    required_mixed_case: cdktf.booleanToTerraform(struct!.requiredMixedCase),
    validate_on_login: cdktf.booleanToTerraform(struct!.validateOnLogin),
    remember_previous_passwords: tenantPasswordValidationRulesRememberPreviousPasswordsToTerraform(struct!.rememberPreviousPasswords),
  }
}


export function tenantPasswordValidationRulesToHclTerraform(struct?: TenantPasswordValidationRulesOutputReference | TenantPasswordValidationRules): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    breach_detection: {
      value: cdktf.listMapperHcl(tenantPasswordValidationRulesBreachDetectionToHclTerraform, false)(struct!.breachDetection),
      isBlock: true,
      type: "list",
      storageClassType: "TenantPasswordValidationRulesBreachDetectionList",
    },
    max_length: {
      value: cdktf.numberToHclTerraform(struct!.maxLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_length: {
      value: cdktf.numberToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    require_non_alpha: {
      value: cdktf.booleanToHclTerraform(struct!.requireNonAlpha),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_number: {
      value: cdktf.booleanToHclTerraform(struct!.requireNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    required_mixed_case: {
      value: cdktf.booleanToHclTerraform(struct!.requiredMixedCase),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    validate_on_login: {
      value: cdktf.booleanToHclTerraform(struct!.validateOnLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    remember_previous_passwords: {
      value: tenantPasswordValidationRulesRememberPreviousPasswordsToHclTerraform(struct!.rememberPreviousPasswords),
      isBlock: true,
      type: "list",
      storageClassType: "TenantPasswordValidationRulesRememberPreviousPasswordsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantPasswordValidationRulesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantPasswordValidationRules | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._breachDetection?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.breachDetection = this._breachDetection?.internalValue;
    }
    if (this._maxLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLength = this._maxLength;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._requireNonAlpha !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireNonAlpha = this._requireNonAlpha;
    }
    if (this._requireNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireNumber = this._requireNumber;
    }
    if (this._requiredMixedCase !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredMixedCase = this._requiredMixedCase;
    }
    if (this._validateOnLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateOnLogin = this._validateOnLogin;
    }
    if (this._rememberPreviousPasswords?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.rememberPreviousPasswords = this._rememberPreviousPasswords?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantPasswordValidationRules | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._breachDetection.internalValue = undefined;
      this._maxLength = undefined;
      this._minLength = undefined;
      this._requireNonAlpha = undefined;
      this._requireNumber = undefined;
      this._requiredMixedCase = undefined;
      this._validateOnLogin = undefined;
      this._rememberPreviousPasswords.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._breachDetection.internalValue = value.breachDetection;
      this._maxLength = value.maxLength;
      this._minLength = value.minLength;
      this._requireNonAlpha = value.requireNonAlpha;
      this._requireNumber = value.requireNumber;
      this._requiredMixedCase = value.requiredMixedCase;
      this._validateOnLogin = value.validateOnLogin;
      this._rememberPreviousPasswords.internalValue = value.rememberPreviousPasswords;
    }
  }

  // breach_detection - computed: true, optional: true, required: false
  private _breachDetection = new TenantPasswordValidationRulesBreachDetectionList(this, "breach_detection", false);
  public get breachDetection() {
    return this._breachDetection;
  }
  public putBreachDetection(value: TenantPasswordValidationRulesBreachDetection[] | cdktf.IResolvable) {
    this._breachDetection.internalValue = value;
  }
  public resetBreachDetection() {
    this._breachDetection.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get breachDetectionInput() {
    return this._breachDetection.internalValue;
  }

  // max_length - computed: false, optional: true, required: false
  private _maxLength?: number; 
  public get maxLength() {
    return this.getNumberAttribute('max_length');
  }
  public set maxLength(value: number) {
    this._maxLength = value;
  }
  public resetMaxLength() {
    this._maxLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLengthInput() {
    return this._maxLength;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: number; 
  public get minLength() {
    return this.getNumberAttribute('min_length');
  }
  public set minLength(value: number) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // require_non_alpha - computed: false, optional: true, required: false
  private _requireNonAlpha?: boolean | cdktf.IResolvable; 
  public get requireNonAlpha() {
    return this.getBooleanAttribute('require_non_alpha');
  }
  public set requireNonAlpha(value: boolean | cdktf.IResolvable) {
    this._requireNonAlpha = value;
  }
  public resetRequireNonAlpha() {
    this._requireNonAlpha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireNonAlphaInput() {
    return this._requireNonAlpha;
  }

  // require_number - computed: false, optional: true, required: false
  private _requireNumber?: boolean | cdktf.IResolvable; 
  public get requireNumber() {
    return this.getBooleanAttribute('require_number');
  }
  public set requireNumber(value: boolean | cdktf.IResolvable) {
    this._requireNumber = value;
  }
  public resetRequireNumber() {
    this._requireNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireNumberInput() {
    return this._requireNumber;
  }

  // required_mixed_case - computed: false, optional: true, required: false
  private _requiredMixedCase?: boolean | cdktf.IResolvable; 
  public get requiredMixedCase() {
    return this.getBooleanAttribute('required_mixed_case');
  }
  public set requiredMixedCase(value: boolean | cdktf.IResolvable) {
    this._requiredMixedCase = value;
  }
  public resetRequiredMixedCase() {
    this._requiredMixedCase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredMixedCaseInput() {
    return this._requiredMixedCase;
  }

  // validate_on_login - computed: false, optional: true, required: false
  private _validateOnLogin?: boolean | cdktf.IResolvable; 
  public get validateOnLogin() {
    return this.getBooleanAttribute('validate_on_login');
  }
  public set validateOnLogin(value: boolean | cdktf.IResolvable) {
    this._validateOnLogin = value;
  }
  public resetValidateOnLogin() {
    this._validateOnLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateOnLoginInput() {
    return this._validateOnLogin;
  }

  // remember_previous_passwords - computed: false, optional: true, required: false
  private _rememberPreviousPasswords = new TenantPasswordValidationRulesRememberPreviousPasswordsOutputReference(this, "remember_previous_passwords");
  public get rememberPreviousPasswords() {
    return this._rememberPreviousPasswords;
  }
  public putRememberPreviousPasswords(value: TenantPasswordValidationRulesRememberPreviousPasswords) {
    this._rememberPreviousPasswords.internalValue = value;
  }
  public resetRememberPreviousPasswords() {
    this._rememberPreviousPasswords.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rememberPreviousPasswordsInput() {
    return this._rememberPreviousPasswords.internalValue;
  }
}
export interface TenantRateLimitConfigurationFailedLogin {
  /**
  * Whether rate limiting is enabled for failed login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#enabled Tenant#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The number of times a user can fail to login within the configured timePeriodInSeconds duration. If a Failed authentication action has been configured then it will take precedence. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#limit Tenant#limit}
  */
  readonly limit?: number;
  /**
  * The duration for the number of times a user can fail login before being rate limited. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#time_period_in_seconds Tenant#time_period_in_seconds}
  */
  readonly timePeriodInSeconds?: number;
}

export function tenantRateLimitConfigurationFailedLoginToTerraform(struct?: TenantRateLimitConfigurationFailedLoginOutputReference | TenantRateLimitConfigurationFailedLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    limit: cdktf.numberToTerraform(struct!.limit),
    time_period_in_seconds: cdktf.numberToTerraform(struct!.timePeriodInSeconds),
  }
}


export function tenantRateLimitConfigurationFailedLoginToHclTerraform(struct?: TenantRateLimitConfigurationFailedLoginOutputReference | TenantRateLimitConfigurationFailedLogin): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_period_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timePeriodInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantRateLimitConfigurationFailedLoginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantRateLimitConfigurationFailedLogin | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._timePeriodInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timePeriodInSeconds = this._timePeriodInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantRateLimitConfigurationFailedLogin | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._limit = undefined;
      this._timePeriodInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._limit = value.limit;
      this._timePeriodInSeconds = value.timePeriodInSeconds;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // time_period_in_seconds - computed: false, optional: true, required: false
  private _timePeriodInSeconds?: number; 
  public get timePeriodInSeconds() {
    return this.getNumberAttribute('time_period_in_seconds');
  }
  public set timePeriodInSeconds(value: number) {
    this._timePeriodInSeconds = value;
  }
  public resetTimePeriodInSeconds() {
    this._timePeriodInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePeriodInSecondsInput() {
    return this._timePeriodInSeconds;
  }
}
export interface TenantRateLimitConfigurationForgotPassword {
  /**
  * Whether rate limiting is enabled for forgot password.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#enabled Tenant#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The number of times a user can request a forgot password email within the configured `time_period_in_seconds` duration. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#limit Tenant#limit}
  */
  readonly limit?: number;
  /**
  * The duration for the number of times a user can request a forgot password email before being rate limited. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#time_period_in_seconds Tenant#time_period_in_seconds}
  */
  readonly timePeriodInSeconds?: number;
}

export function tenantRateLimitConfigurationForgotPasswordToTerraform(struct?: TenantRateLimitConfigurationForgotPasswordOutputReference | TenantRateLimitConfigurationForgotPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    limit: cdktf.numberToTerraform(struct!.limit),
    time_period_in_seconds: cdktf.numberToTerraform(struct!.timePeriodInSeconds),
  }
}


export function tenantRateLimitConfigurationForgotPasswordToHclTerraform(struct?: TenantRateLimitConfigurationForgotPasswordOutputReference | TenantRateLimitConfigurationForgotPassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_period_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timePeriodInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantRateLimitConfigurationForgotPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantRateLimitConfigurationForgotPassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._timePeriodInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timePeriodInSeconds = this._timePeriodInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantRateLimitConfigurationForgotPassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._limit = undefined;
      this._timePeriodInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._limit = value.limit;
      this._timePeriodInSeconds = value.timePeriodInSeconds;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // time_period_in_seconds - computed: false, optional: true, required: false
  private _timePeriodInSeconds?: number; 
  public get timePeriodInSeconds() {
    return this.getNumberAttribute('time_period_in_seconds');
  }
  public set timePeriodInSeconds(value: number) {
    this._timePeriodInSeconds = value;
  }
  public resetTimePeriodInSeconds() {
    this._timePeriodInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePeriodInSecondsInput() {
    return this._timePeriodInSeconds;
  }
}
export interface TenantRateLimitConfigurationSendEmailVerification {
  /**
  * Whether rate limiting is enabled for send email verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#enabled Tenant#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The number of times a user can request a verification email within the configured `time_period_in_seconds` duration. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#limit Tenant#limit}
  */
  readonly limit?: number;
  /**
  * The duration for the number of times a user can request a verification email before being rate limited. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#time_period_in_seconds Tenant#time_period_in_seconds}
  */
  readonly timePeriodInSeconds?: number;
}

export function tenantRateLimitConfigurationSendEmailVerificationToTerraform(struct?: TenantRateLimitConfigurationSendEmailVerificationOutputReference | TenantRateLimitConfigurationSendEmailVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    limit: cdktf.numberToTerraform(struct!.limit),
    time_period_in_seconds: cdktf.numberToTerraform(struct!.timePeriodInSeconds),
  }
}


export function tenantRateLimitConfigurationSendEmailVerificationToHclTerraform(struct?: TenantRateLimitConfigurationSendEmailVerificationOutputReference | TenantRateLimitConfigurationSendEmailVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_period_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timePeriodInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantRateLimitConfigurationSendEmailVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantRateLimitConfigurationSendEmailVerification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._timePeriodInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timePeriodInSeconds = this._timePeriodInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantRateLimitConfigurationSendEmailVerification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._limit = undefined;
      this._timePeriodInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._limit = value.limit;
      this._timePeriodInSeconds = value.timePeriodInSeconds;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // time_period_in_seconds - computed: false, optional: true, required: false
  private _timePeriodInSeconds?: number; 
  public get timePeriodInSeconds() {
    return this.getNumberAttribute('time_period_in_seconds');
  }
  public set timePeriodInSeconds(value: number) {
    this._timePeriodInSeconds = value;
  }
  public resetTimePeriodInSeconds() {
    this._timePeriodInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePeriodInSecondsInput() {
    return this._timePeriodInSeconds;
  }
}
export interface TenantRateLimitConfigurationSendPasswordless {
  /**
  * Whether rate limiting is enabled for send passwordless.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#enabled Tenant#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The number of times a user can request a passwordless login email within the configured `time_period_in_seconds` duration. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#limit Tenant#limit}
  */
  readonly limit?: number;
  /**
  * The duration for the number of times a user can request a passwordless login email before being rate limited. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#time_period_in_seconds Tenant#time_period_in_seconds}
  */
  readonly timePeriodInSeconds?: number;
}

export function tenantRateLimitConfigurationSendPasswordlessToTerraform(struct?: TenantRateLimitConfigurationSendPasswordlessOutputReference | TenantRateLimitConfigurationSendPasswordless): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    limit: cdktf.numberToTerraform(struct!.limit),
    time_period_in_seconds: cdktf.numberToTerraform(struct!.timePeriodInSeconds),
  }
}


export function tenantRateLimitConfigurationSendPasswordlessToHclTerraform(struct?: TenantRateLimitConfigurationSendPasswordlessOutputReference | TenantRateLimitConfigurationSendPasswordless): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_period_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timePeriodInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantRateLimitConfigurationSendPasswordlessOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantRateLimitConfigurationSendPasswordless | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._timePeriodInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timePeriodInSeconds = this._timePeriodInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantRateLimitConfigurationSendPasswordless | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._limit = undefined;
      this._timePeriodInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._limit = value.limit;
      this._timePeriodInSeconds = value.timePeriodInSeconds;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // time_period_in_seconds - computed: false, optional: true, required: false
  private _timePeriodInSeconds?: number; 
  public get timePeriodInSeconds() {
    return this.getNumberAttribute('time_period_in_seconds');
  }
  public set timePeriodInSeconds(value: number) {
    this._timePeriodInSeconds = value;
  }
  public resetTimePeriodInSeconds() {
    this._timePeriodInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePeriodInSecondsInput() {
    return this._timePeriodInSeconds;
  }
}
export interface TenantRateLimitConfigurationSendRegistrationVerification {
  /**
  * Whether rate limiting is enabled for send registration verification.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#enabled Tenant#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The number of times a user can request a registration verification email within the configured `time_period_in_seconds` duration. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#limit Tenant#limit}
  */
  readonly limit?: number;
  /**
  * The duration for the number of times a user can request a registration verification email before being rate limited. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#time_period_in_seconds Tenant#time_period_in_seconds}
  */
  readonly timePeriodInSeconds?: number;
}

export function tenantRateLimitConfigurationSendRegistrationVerificationToTerraform(struct?: TenantRateLimitConfigurationSendRegistrationVerificationOutputReference | TenantRateLimitConfigurationSendRegistrationVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    limit: cdktf.numberToTerraform(struct!.limit),
    time_period_in_seconds: cdktf.numberToTerraform(struct!.timePeriodInSeconds),
  }
}


export function tenantRateLimitConfigurationSendRegistrationVerificationToHclTerraform(struct?: TenantRateLimitConfigurationSendRegistrationVerificationOutputReference | TenantRateLimitConfigurationSendRegistrationVerification): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_period_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timePeriodInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantRateLimitConfigurationSendRegistrationVerificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantRateLimitConfigurationSendRegistrationVerification | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._timePeriodInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timePeriodInSeconds = this._timePeriodInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantRateLimitConfigurationSendRegistrationVerification | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._limit = undefined;
      this._timePeriodInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._limit = value.limit;
      this._timePeriodInSeconds = value.timePeriodInSeconds;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // time_period_in_seconds - computed: false, optional: true, required: false
  private _timePeriodInSeconds?: number; 
  public get timePeriodInSeconds() {
    return this.getNumberAttribute('time_period_in_seconds');
  }
  public set timePeriodInSeconds(value: number) {
    this._timePeriodInSeconds = value;
  }
  public resetTimePeriodInSeconds() {
    this._timePeriodInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePeriodInSecondsInput() {
    return this._timePeriodInSeconds;
  }
}
export interface TenantRateLimitConfigurationSendTwoFactor {
  /**
  * Whether rate limiting is enabled for send two factor.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#enabled Tenant#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The number of times a user can request a two-factor code by email or SMS within the configured `time_period_in_seconds` duration. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#limit Tenant#limit}
  */
  readonly limit?: number;
  /**
  * The duration for the number of times a user can request a two-factor code by email or SMS before being rate limited. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#time_period_in_seconds Tenant#time_period_in_seconds}
  */
  readonly timePeriodInSeconds?: number;
}

export function tenantRateLimitConfigurationSendTwoFactorToTerraform(struct?: TenantRateLimitConfigurationSendTwoFactorOutputReference | TenantRateLimitConfigurationSendTwoFactor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    limit: cdktf.numberToTerraform(struct!.limit),
    time_period_in_seconds: cdktf.numberToTerraform(struct!.timePeriodInSeconds),
  }
}


export function tenantRateLimitConfigurationSendTwoFactorToHclTerraform(struct?: TenantRateLimitConfigurationSendTwoFactorOutputReference | TenantRateLimitConfigurationSendTwoFactor): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    time_period_in_seconds: {
      value: cdktf.numberToHclTerraform(struct!.timePeriodInSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantRateLimitConfigurationSendTwoFactorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantRateLimitConfigurationSendTwoFactor | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    if (this._timePeriodInSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.timePeriodInSeconds = this._timePeriodInSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantRateLimitConfigurationSendTwoFactor | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._limit = undefined;
      this._timePeriodInSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._limit = value.limit;
      this._timePeriodInSeconds = value.timePeriodInSeconds;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // time_period_in_seconds - computed: false, optional: true, required: false
  private _timePeriodInSeconds?: number; 
  public get timePeriodInSeconds() {
    return this.getNumberAttribute('time_period_in_seconds');
  }
  public set timePeriodInSeconds(value: number) {
    this._timePeriodInSeconds = value;
  }
  public resetTimePeriodInSeconds() {
    this._timePeriodInSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timePeriodInSecondsInput() {
    return this._timePeriodInSeconds;
  }
}
export interface TenantRateLimitConfiguration {
  /**
  * failed_login block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#failed_login Tenant#failed_login}
  */
  readonly failedLogin?: TenantRateLimitConfigurationFailedLogin;
  /**
  * forgot_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#forgot_password Tenant#forgot_password}
  */
  readonly forgotPassword?: TenantRateLimitConfigurationForgotPassword;
  /**
  * send_email_verification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#send_email_verification Tenant#send_email_verification}
  */
  readonly sendEmailVerification?: TenantRateLimitConfigurationSendEmailVerification;
  /**
  * send_passwordless block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#send_passwordless Tenant#send_passwordless}
  */
  readonly sendPasswordless?: TenantRateLimitConfigurationSendPasswordless;
  /**
  * send_registration_verification block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#send_registration_verification Tenant#send_registration_verification}
  */
  readonly sendRegistrationVerification?: TenantRateLimitConfigurationSendRegistrationVerification;
  /**
  * send_two_factor block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#send_two_factor Tenant#send_two_factor}
  */
  readonly sendTwoFactor?: TenantRateLimitConfigurationSendTwoFactor;
}

export function tenantRateLimitConfigurationToTerraform(struct?: TenantRateLimitConfigurationOutputReference | TenantRateLimitConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    failed_login: tenantRateLimitConfigurationFailedLoginToTerraform(struct!.failedLogin),
    forgot_password: tenantRateLimitConfigurationForgotPasswordToTerraform(struct!.forgotPassword),
    send_email_verification: tenantRateLimitConfigurationSendEmailVerificationToTerraform(struct!.sendEmailVerification),
    send_passwordless: tenantRateLimitConfigurationSendPasswordlessToTerraform(struct!.sendPasswordless),
    send_registration_verification: tenantRateLimitConfigurationSendRegistrationVerificationToTerraform(struct!.sendRegistrationVerification),
    send_two_factor: tenantRateLimitConfigurationSendTwoFactorToTerraform(struct!.sendTwoFactor),
  }
}


export function tenantRateLimitConfigurationToHclTerraform(struct?: TenantRateLimitConfigurationOutputReference | TenantRateLimitConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    failed_login: {
      value: tenantRateLimitConfigurationFailedLoginToHclTerraform(struct!.failedLogin),
      isBlock: true,
      type: "list",
      storageClassType: "TenantRateLimitConfigurationFailedLoginList",
    },
    forgot_password: {
      value: tenantRateLimitConfigurationForgotPasswordToHclTerraform(struct!.forgotPassword),
      isBlock: true,
      type: "list",
      storageClassType: "TenantRateLimitConfigurationForgotPasswordList",
    },
    send_email_verification: {
      value: tenantRateLimitConfigurationSendEmailVerificationToHclTerraform(struct!.sendEmailVerification),
      isBlock: true,
      type: "list",
      storageClassType: "TenantRateLimitConfigurationSendEmailVerificationList",
    },
    send_passwordless: {
      value: tenantRateLimitConfigurationSendPasswordlessToHclTerraform(struct!.sendPasswordless),
      isBlock: true,
      type: "list",
      storageClassType: "TenantRateLimitConfigurationSendPasswordlessList",
    },
    send_registration_verification: {
      value: tenantRateLimitConfigurationSendRegistrationVerificationToHclTerraform(struct!.sendRegistrationVerification),
      isBlock: true,
      type: "list",
      storageClassType: "TenantRateLimitConfigurationSendRegistrationVerificationList",
    },
    send_two_factor: {
      value: tenantRateLimitConfigurationSendTwoFactorToHclTerraform(struct!.sendTwoFactor),
      isBlock: true,
      type: "list",
      storageClassType: "TenantRateLimitConfigurationSendTwoFactorList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantRateLimitConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantRateLimitConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._failedLogin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failedLogin = this._failedLogin?.internalValue;
    }
    if (this._forgotPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forgotPassword = this._forgotPassword?.internalValue;
    }
    if (this._sendEmailVerification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendEmailVerification = this._sendEmailVerification?.internalValue;
    }
    if (this._sendPasswordless?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendPasswordless = this._sendPasswordless?.internalValue;
    }
    if (this._sendRegistrationVerification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendRegistrationVerification = this._sendRegistrationVerification?.internalValue;
    }
    if (this._sendTwoFactor?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sendTwoFactor = this._sendTwoFactor?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantRateLimitConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._failedLogin.internalValue = undefined;
      this._forgotPassword.internalValue = undefined;
      this._sendEmailVerification.internalValue = undefined;
      this._sendPasswordless.internalValue = undefined;
      this._sendRegistrationVerification.internalValue = undefined;
      this._sendTwoFactor.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._failedLogin.internalValue = value.failedLogin;
      this._forgotPassword.internalValue = value.forgotPassword;
      this._sendEmailVerification.internalValue = value.sendEmailVerification;
      this._sendPasswordless.internalValue = value.sendPasswordless;
      this._sendRegistrationVerification.internalValue = value.sendRegistrationVerification;
      this._sendTwoFactor.internalValue = value.sendTwoFactor;
    }
  }

  // failed_login - computed: false, optional: true, required: false
  private _failedLogin = new TenantRateLimitConfigurationFailedLoginOutputReference(this, "failed_login");
  public get failedLogin() {
    return this._failedLogin;
  }
  public putFailedLogin(value: TenantRateLimitConfigurationFailedLogin) {
    this._failedLogin.internalValue = value;
  }
  public resetFailedLogin() {
    this._failedLogin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedLoginInput() {
    return this._failedLogin.internalValue;
  }

  // forgot_password - computed: false, optional: true, required: false
  private _forgotPassword = new TenantRateLimitConfigurationForgotPasswordOutputReference(this, "forgot_password");
  public get forgotPassword() {
    return this._forgotPassword;
  }
  public putForgotPassword(value: TenantRateLimitConfigurationForgotPassword) {
    this._forgotPassword.internalValue = value;
  }
  public resetForgotPassword() {
    this._forgotPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forgotPasswordInput() {
    return this._forgotPassword.internalValue;
  }

  // send_email_verification - computed: false, optional: true, required: false
  private _sendEmailVerification = new TenantRateLimitConfigurationSendEmailVerificationOutputReference(this, "send_email_verification");
  public get sendEmailVerification() {
    return this._sendEmailVerification;
  }
  public putSendEmailVerification(value: TenantRateLimitConfigurationSendEmailVerification) {
    this._sendEmailVerification.internalValue = value;
  }
  public resetSendEmailVerification() {
    this._sendEmailVerification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendEmailVerificationInput() {
    return this._sendEmailVerification.internalValue;
  }

  // send_passwordless - computed: false, optional: true, required: false
  private _sendPasswordless = new TenantRateLimitConfigurationSendPasswordlessOutputReference(this, "send_passwordless");
  public get sendPasswordless() {
    return this._sendPasswordless;
  }
  public putSendPasswordless(value: TenantRateLimitConfigurationSendPasswordless) {
    this._sendPasswordless.internalValue = value;
  }
  public resetSendPasswordless() {
    this._sendPasswordless.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendPasswordlessInput() {
    return this._sendPasswordless.internalValue;
  }

  // send_registration_verification - computed: false, optional: true, required: false
  private _sendRegistrationVerification = new TenantRateLimitConfigurationSendRegistrationVerificationOutputReference(this, "send_registration_verification");
  public get sendRegistrationVerification() {
    return this._sendRegistrationVerification;
  }
  public putSendRegistrationVerification(value: TenantRateLimitConfigurationSendRegistrationVerification) {
    this._sendRegistrationVerification.internalValue = value;
  }
  public resetSendRegistrationVerification() {
    this._sendRegistrationVerification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendRegistrationVerificationInput() {
    return this._sendRegistrationVerification.internalValue;
  }

  // send_two_factor - computed: false, optional: true, required: false
  private _sendTwoFactor = new TenantRateLimitConfigurationSendTwoFactorOutputReference(this, "send_two_factor");
  public get sendTwoFactor() {
    return this._sendTwoFactor;
  }
  public putSendTwoFactor(value: TenantRateLimitConfigurationSendTwoFactor) {
    this._sendTwoFactor.internalValue = value;
  }
  public resetSendTwoFactor() {
    this._sendTwoFactor.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sendTwoFactorInput() {
    return this._sendTwoFactor.internalValue;
  }
}
export interface TenantRegistrationConfiguration {
  /**
  * A list of unique domains that are not allowed to register when self service is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#blocked_domains Tenant#blocked_domains}
  */
  readonly blockedDomains?: string[];
}

export function tenantRegistrationConfigurationToTerraform(struct?: TenantRegistrationConfigurationOutputReference | TenantRegistrationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    blocked_domains: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.blockedDomains),
  }
}


export function tenantRegistrationConfigurationToHclTerraform(struct?: TenantRegistrationConfigurationOutputReference | TenantRegistrationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    blocked_domains: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.blockedDomains),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantRegistrationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantRegistrationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._blockedDomains !== undefined) {
      hasAnyValues = true;
      internalValueResult.blockedDomains = this._blockedDomains;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantRegistrationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._blockedDomains = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._blockedDomains = value.blockedDomains;
    }
  }

  // blocked_domains - computed: false, optional: true, required: false
  private _blockedDomains?: string[]; 
  public get blockedDomains() {
    return cdktf.Fn.tolist(this.getListAttribute('blocked_domains'));
  }
  public set blockedDomains(value: string[]) {
    this._blockedDomains = value;
  }
  public resetBlockedDomains() {
    this._blockedDomains = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get blockedDomainsInput() {
    return this._blockedDomains;
  }
}
export interface TenantUserDeletePolicy {
  /**
  * Indicates that users without a verified email address will be permanently deleted after tenant.userDeletePolicy.unverified.numberOfDaysToRetain days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#unverified_enabled Tenant#unverified_enabled}
  */
  readonly unverifiedEnabled?: boolean | cdktf.IResolvable;
  /**
  * The number of days from creation users will be retained before being deleted for not completing email verification. This field is required when tenant.userDeletePolicy.unverified.enabled is set to true. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#unverified_number_of_days_to_retain Tenant#unverified_number_of_days_to_retain}
  */
  readonly unverifiedNumberOfDaysToRetain?: number;
}

export function tenantUserDeletePolicyToTerraform(struct?: TenantUserDeletePolicyOutputReference | TenantUserDeletePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unverified_enabled: cdktf.booleanToTerraform(struct!.unverifiedEnabled),
    unverified_number_of_days_to_retain: cdktf.numberToTerraform(struct!.unverifiedNumberOfDaysToRetain),
  }
}


export function tenantUserDeletePolicyToHclTerraform(struct?: TenantUserDeletePolicyOutputReference | TenantUserDeletePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unverified_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.unverifiedEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    unverified_number_of_days_to_retain: {
      value: cdktf.numberToHclTerraform(struct!.unverifiedNumberOfDaysToRetain),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantUserDeletePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantUserDeletePolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unverifiedEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.unverifiedEnabled = this._unverifiedEnabled;
    }
    if (this._unverifiedNumberOfDaysToRetain !== undefined) {
      hasAnyValues = true;
      internalValueResult.unverifiedNumberOfDaysToRetain = this._unverifiedNumberOfDaysToRetain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantUserDeletePolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unverifiedEnabled = undefined;
      this._unverifiedNumberOfDaysToRetain = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unverifiedEnabled = value.unverifiedEnabled;
      this._unverifiedNumberOfDaysToRetain = value.unverifiedNumberOfDaysToRetain;
    }
  }

  // unverified_enabled - computed: false, optional: true, required: false
  private _unverifiedEnabled?: boolean | cdktf.IResolvable; 
  public get unverifiedEnabled() {
    return this.getBooleanAttribute('unverified_enabled');
  }
  public set unverifiedEnabled(value: boolean | cdktf.IResolvable) {
    this._unverifiedEnabled = value;
  }
  public resetUnverifiedEnabled() {
    this._unverifiedEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unverifiedEnabledInput() {
    return this._unverifiedEnabled;
  }

  // unverified_number_of_days_to_retain - computed: false, optional: true, required: false
  private _unverifiedNumberOfDaysToRetain?: number; 
  public get unverifiedNumberOfDaysToRetain() {
    return this.getNumberAttribute('unverified_number_of_days_to_retain');
  }
  public set unverifiedNumberOfDaysToRetain(value: number) {
    this._unverifiedNumberOfDaysToRetain = value;
  }
  public resetUnverifiedNumberOfDaysToRetain() {
    this._unverifiedNumberOfDaysToRetain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unverifiedNumberOfDaysToRetainInput() {
    return this._unverifiedNumberOfDaysToRetain;
  }
}
export interface TenantUsernameConfigurationUnique {
  /**
  * When true, FusionAuth will handle username collisions by generating a random suffix.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#enabled Tenant#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The maximum number of digits to use when building a unique suffix for a username. A number will be randomly selected and will be 1 or more digits up to this configured value in length. For example, if this value is 5, the suffix will be a number between 00001 and 99999, inclusive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#number_of_digits Tenant#number_of_digits}
  */
  readonly numberOfDigits?: number;
  /**
  * A single character to use as a separator from the requested username and a unique suffix that is added when a duplicate username is detected. This value can be a single non-alphanumeric ASCII character.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#separator Tenant#separator}
  */
  readonly separator?: string;
  /**
  * This strategy instructions FusionAuth when to append a unique suffix to the username. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#strategy Tenant#strategy}
  */
  readonly strategy?: string;
}

export function tenantUsernameConfigurationUniqueToTerraform(struct?: TenantUsernameConfigurationUniqueOutputReference | TenantUsernameConfigurationUnique): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    number_of_digits: cdktf.numberToTerraform(struct!.numberOfDigits),
    separator: cdktf.stringToTerraform(struct!.separator),
    strategy: cdktf.stringToTerraform(struct!.strategy),
  }
}


export function tenantUsernameConfigurationUniqueToHclTerraform(struct?: TenantUsernameConfigurationUniqueOutputReference | TenantUsernameConfigurationUnique): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    number_of_digits: {
      value: cdktf.numberToHclTerraform(struct!.numberOfDigits),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    separator: {
      value: cdktf.stringToHclTerraform(struct!.separator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    strategy: {
      value: cdktf.stringToHclTerraform(struct!.strategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantUsernameConfigurationUniqueOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantUsernameConfigurationUnique | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._numberOfDigits !== undefined) {
      hasAnyValues = true;
      internalValueResult.numberOfDigits = this._numberOfDigits;
    }
    if (this._separator !== undefined) {
      hasAnyValues = true;
      internalValueResult.separator = this._separator;
    }
    if (this._strategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.strategy = this._strategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantUsernameConfigurationUnique | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._numberOfDigits = undefined;
      this._separator = undefined;
      this._strategy = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._numberOfDigits = value.numberOfDigits;
      this._separator = value.separator;
      this._strategy = value.strategy;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // number_of_digits - computed: false, optional: true, required: false
  private _numberOfDigits?: number; 
  public get numberOfDigits() {
    return this.getNumberAttribute('number_of_digits');
  }
  public set numberOfDigits(value: number) {
    this._numberOfDigits = value;
  }
  public resetNumberOfDigits() {
    this._numberOfDigits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numberOfDigitsInput() {
    return this._numberOfDigits;
  }

  // separator - computed: false, optional: true, required: false
  private _separator?: string; 
  public get separator() {
    return this.getStringAttribute('separator');
  }
  public set separator(value: string) {
    this._separator = value;
  }
  public resetSeparator() {
    this._separator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get separatorInput() {
    return this._separator;
  }

  // strategy - computed: false, optional: true, required: false
  private _strategy?: string; 
  public get strategy() {
    return this.getStringAttribute('strategy');
  }
  public set strategy(value: string) {
    this._strategy = value;
  }
  public resetStrategy() {
    this._strategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get strategyInput() {
    return this._strategy;
  }
}
export interface TenantUsernameConfiguration {
  /**
  * unique block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#unique Tenant#unique}
  */
  readonly unique?: TenantUsernameConfigurationUnique;
}

export function tenantUsernameConfigurationToTerraform(struct?: TenantUsernameConfigurationOutputReference | TenantUsernameConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unique: tenantUsernameConfigurationUniqueToTerraform(struct!.unique),
  }
}


export function tenantUsernameConfigurationToHclTerraform(struct?: TenantUsernameConfigurationOutputReference | TenantUsernameConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    unique: {
      value: tenantUsernameConfigurationUniqueToHclTerraform(struct!.unique),
      isBlock: true,
      type: "list",
      storageClassType: "TenantUsernameConfigurationUniqueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class TenantUsernameConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): TenantUsernameConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._unique?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.unique = this._unique?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: TenantUsernameConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._unique.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._unique.internalValue = value.unique;
    }
  }

  // unique - computed: false, optional: true, required: false
  private _unique = new TenantUsernameConfigurationUniqueOutputReference(this, "unique");
  public get unique() {
    return this._unique;
  }
  public putUnique(value: TenantUsernameConfigurationUnique) {
    this._unique.internalValue = value;
  }
  public resetUnique() {
    this._unique.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uniqueInput() {
    return this._unique.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant fusionauth_tenant}
*/
export class Tenant extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fusionauth_tenant";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Tenant resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Tenant to import
  * @param importFromId The id of the existing Tenant that should be imported. Refer to the {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Tenant to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fusionauth_tenant", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/tenant fusionauth_tenant} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TenantConfig
  */
  public constructor(scope: Construct, id: string, config: TenantConfig) {
    super(scope, id, {
      terraformResourceType: 'fusionauth_tenant',
      terraformGeneratorMetadata: {
        providerName: 'fusionauth',
        providerVersion: '0.1.100'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessControlConfiguration.internalValue = config.accessControlConfiguration;
    this._data = config.data;
    this._formConfiguration.internalValue = config.formConfiguration;
    this._httpSessionMaxInactiveInterval = config.httpSessionMaxInactiveInterval;
    this._id = config.id;
    this._issuer = config.issuer;
    this._logoutUrl = config.logoutUrl;
    this._multiFactorConfiguration.internalValue = config.multiFactorConfiguration;
    this._name = config.name;
    this._sourceTenantId = config.sourceTenantId;
    this._tenantId = config.tenantId;
    this._themeId = config.themeId;
    this._captchaConfiguration.internalValue = config.captchaConfiguration;
    this._connectorPolicy.internalValue = config.connectorPolicy;
    this._emailConfiguration.internalValue = config.emailConfiguration;
    this._eventConfiguration.internalValue = config.eventConfiguration;
    this._externalIdentifierConfiguration.internalValue = config.externalIdentifierConfiguration;
    this._failedAuthenticationConfiguration.internalValue = config.failedAuthenticationConfiguration;
    this._familyConfiguration.internalValue = config.familyConfiguration;
    this._jwtConfiguration.internalValue = config.jwtConfiguration;
    this._loginConfiguration.internalValue = config.loginConfiguration;
    this._maximumPasswordAge.internalValue = config.maximumPasswordAge;
    this._minimumPasswordAge.internalValue = config.minimumPasswordAge;
    this._oauthConfiguration.internalValue = config.oauthConfiguration;
    this._passwordEncryptionConfiguration.internalValue = config.passwordEncryptionConfiguration;
    this._passwordValidationRules.internalValue = config.passwordValidationRules;
    this._rateLimitConfiguration.internalValue = config.rateLimitConfiguration;
    this._registrationConfiguration.internalValue = config.registrationConfiguration;
    this._userDeletePolicy.internalValue = config.userDeletePolicy;
    this._usernameConfiguration.internalValue = config.usernameConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control_configuration - computed: false, optional: true, required: false
  private _accessControlConfiguration = new TenantAccessControlConfigurationList(this, "access_control_configuration", false);
  public get accessControlConfiguration() {
    return this._accessControlConfiguration;
  }
  public putAccessControlConfiguration(value: TenantAccessControlConfiguration[] | cdktf.IResolvable) {
    this._accessControlConfiguration.internalValue = value;
  }
  public resetAccessControlConfiguration() {
    this._accessControlConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlConfigurationInput() {
    return this._accessControlConfiguration.internalValue;
  }

  // data - computed: false, optional: true, required: false
  private _data?: { [key: string]: string }; 
  public get data() {
    return this.getStringMapAttribute('data');
  }
  public set data(value: { [key: string]: string }) {
    this._data = value;
  }
  public resetData() {
    this._data = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataInput() {
    return this._data;
  }

  // form_configuration - computed: true, optional: true, required: false
  private _formConfiguration = new TenantFormConfigurationList(this, "form_configuration", false);
  public get formConfiguration() {
    return this._formConfiguration;
  }
  public putFormConfiguration(value: TenantFormConfiguration[] | cdktf.IResolvable) {
    this._formConfiguration.internalValue = value;
  }
  public resetFormConfiguration() {
    this._formConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formConfigurationInput() {
    return this._formConfiguration.internalValue;
  }

  // http_session_max_inactive_interval - computed: false, optional: true, required: false
  private _httpSessionMaxInactiveInterval?: number; 
  public get httpSessionMaxInactiveInterval() {
    return this.getNumberAttribute('http_session_max_inactive_interval');
  }
  public set httpSessionMaxInactiveInterval(value: number) {
    this._httpSessionMaxInactiveInterval = value;
  }
  public resetHttpSessionMaxInactiveInterval() {
    this._httpSessionMaxInactiveInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get httpSessionMaxInactiveIntervalInput() {
    return this._httpSessionMaxInactiveInterval;
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

  // issuer - computed: false, optional: false, required: true
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // logout_url - computed: false, optional: true, required: false
  private _logoutUrl?: string; 
  public get logoutUrl() {
    return this.getStringAttribute('logout_url');
  }
  public set logoutUrl(value: string) {
    this._logoutUrl = value;
  }
  public resetLogoutUrl() {
    this._logoutUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutUrlInput() {
    return this._logoutUrl;
  }

  // multi_factor_configuration - computed: true, optional: true, required: false
  private _multiFactorConfiguration = new TenantMultiFactorConfigurationList(this, "multi_factor_configuration", false);
  public get multiFactorConfiguration() {
    return this._multiFactorConfiguration;
  }
  public putMultiFactorConfiguration(value: TenantMultiFactorConfiguration[] | cdktf.IResolvable) {
    this._multiFactorConfiguration.internalValue = value;
  }
  public resetMultiFactorConfiguration() {
    this._multiFactorConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get multiFactorConfigurationInput() {
    return this._multiFactorConfiguration.internalValue;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // source_tenant_id - computed: false, optional: true, required: false
  private _sourceTenantId?: string; 
  public get sourceTenantId() {
    return this.getStringAttribute('source_tenant_id');
  }
  public set sourceTenantId(value: string) {
    this._sourceTenantId = value;
  }
  public resetSourceTenantId() {
    this._sourceTenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceTenantIdInput() {
    return this._sourceTenantId;
  }

  // tenant_id - computed: true, optional: true, required: false
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  public resetTenantId() {
    this._tenantId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // theme_id - computed: false, optional: false, required: true
  private _themeId?: string; 
  public get themeId() {
    return this.getStringAttribute('theme_id');
  }
  public set themeId(value: string) {
    this._themeId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get themeIdInput() {
    return this._themeId;
  }

  // captcha_configuration - computed: false, optional: true, required: false
  private _captchaConfiguration = new TenantCaptchaConfigurationOutputReference(this, "captcha_configuration");
  public get captchaConfiguration() {
    return this._captchaConfiguration;
  }
  public putCaptchaConfiguration(value: TenantCaptchaConfiguration) {
    this._captchaConfiguration.internalValue = value;
  }
  public resetCaptchaConfiguration() {
    this._captchaConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaConfigurationInput() {
    return this._captchaConfiguration.internalValue;
  }

  // connector_policy - computed: false, optional: true, required: false
  private _connectorPolicy = new TenantConnectorPolicyList(this, "connector_policy", false);
  public get connectorPolicy() {
    return this._connectorPolicy;
  }
  public putConnectorPolicy(value: TenantConnectorPolicy[] | cdktf.IResolvable) {
    this._connectorPolicy.internalValue = value;
  }
  public resetConnectorPolicy() {
    this._connectorPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectorPolicyInput() {
    return this._connectorPolicy.internalValue;
  }

  // email_configuration - computed: false, optional: false, required: true
  private _emailConfiguration = new TenantEmailConfigurationOutputReference(this, "email_configuration");
  public get emailConfiguration() {
    return this._emailConfiguration;
  }
  public putEmailConfiguration(value: TenantEmailConfiguration) {
    this._emailConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get emailConfigurationInput() {
    return this._emailConfiguration.internalValue;
  }

  // event_configuration - computed: false, optional: true, required: false
  private _eventConfiguration = new TenantEventConfigurationList(this, "event_configuration", true);
  public get eventConfiguration() {
    return this._eventConfiguration;
  }
  public putEventConfiguration(value: TenantEventConfiguration[] | cdktf.IResolvable) {
    this._eventConfiguration.internalValue = value;
  }
  public resetEventConfiguration() {
    this._eventConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventConfigurationInput() {
    return this._eventConfiguration.internalValue;
  }

  // external_identifier_configuration - computed: false, optional: false, required: true
  private _externalIdentifierConfiguration = new TenantExternalIdentifierConfigurationOutputReference(this, "external_identifier_configuration");
  public get externalIdentifierConfiguration() {
    return this._externalIdentifierConfiguration;
  }
  public putExternalIdentifierConfiguration(value: TenantExternalIdentifierConfiguration) {
    this._externalIdentifierConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get externalIdentifierConfigurationInput() {
    return this._externalIdentifierConfiguration.internalValue;
  }

  // failed_authentication_configuration - computed: false, optional: true, required: false
  private _failedAuthenticationConfiguration = new TenantFailedAuthenticationConfigurationOutputReference(this, "failed_authentication_configuration");
  public get failedAuthenticationConfiguration() {
    return this._failedAuthenticationConfiguration;
  }
  public putFailedAuthenticationConfiguration(value: TenantFailedAuthenticationConfiguration) {
    this._failedAuthenticationConfiguration.internalValue = value;
  }
  public resetFailedAuthenticationConfiguration() {
    this._failedAuthenticationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failedAuthenticationConfigurationInput() {
    return this._failedAuthenticationConfiguration.internalValue;
  }

  // family_configuration - computed: false, optional: true, required: false
  private _familyConfiguration = new TenantFamilyConfigurationOutputReference(this, "family_configuration");
  public get familyConfiguration() {
    return this._familyConfiguration;
  }
  public putFamilyConfiguration(value: TenantFamilyConfiguration) {
    this._familyConfiguration.internalValue = value;
  }
  public resetFamilyConfiguration() {
    this._familyConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get familyConfigurationInput() {
    return this._familyConfiguration.internalValue;
  }

  // jwt_configuration - computed: false, optional: false, required: true
  private _jwtConfiguration = new TenantJwtConfigurationList(this, "jwt_configuration", false);
  public get jwtConfiguration() {
    return this._jwtConfiguration;
  }
  public putJwtConfiguration(value: TenantJwtConfiguration[] | cdktf.IResolvable) {
    this._jwtConfiguration.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtConfigurationInput() {
    return this._jwtConfiguration.internalValue;
  }

  // login_configuration - computed: false, optional: true, required: false
  private _loginConfiguration = new TenantLoginConfigurationOutputReference(this, "login_configuration");
  public get loginConfiguration() {
    return this._loginConfiguration;
  }
  public putLoginConfiguration(value: TenantLoginConfiguration) {
    this._loginConfiguration.internalValue = value;
  }
  public resetLoginConfiguration() {
    this._loginConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginConfigurationInput() {
    return this._loginConfiguration.internalValue;
  }

  // maximum_password_age - computed: false, optional: true, required: false
  private _maximumPasswordAge = new TenantMaximumPasswordAgeOutputReference(this, "maximum_password_age");
  public get maximumPasswordAge() {
    return this._maximumPasswordAge;
  }
  public putMaximumPasswordAge(value: TenantMaximumPasswordAge) {
    this._maximumPasswordAge.internalValue = value;
  }
  public resetMaximumPasswordAge() {
    this._maximumPasswordAge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maximumPasswordAgeInput() {
    return this._maximumPasswordAge.internalValue;
  }

  // minimum_password_age - computed: false, optional: true, required: false
  private _minimumPasswordAge = new TenantMinimumPasswordAgeOutputReference(this, "minimum_password_age");
  public get minimumPasswordAge() {
    return this._minimumPasswordAge;
  }
  public putMinimumPasswordAge(value: TenantMinimumPasswordAge) {
    this._minimumPasswordAge.internalValue = value;
  }
  public resetMinimumPasswordAge() {
    this._minimumPasswordAge.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minimumPasswordAgeInput() {
    return this._minimumPasswordAge.internalValue;
  }

  // oauth_configuration - computed: false, optional: true, required: false
  private _oauthConfiguration = new TenantOauthConfigurationList(this, "oauth_configuration", false);
  public get oauthConfiguration() {
    return this._oauthConfiguration;
  }
  public putOauthConfiguration(value: TenantOauthConfiguration[] | cdktf.IResolvable) {
    this._oauthConfiguration.internalValue = value;
  }
  public resetOauthConfiguration() {
    this._oauthConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthConfigurationInput() {
    return this._oauthConfiguration.internalValue;
  }

  // password_encryption_configuration - computed: false, optional: true, required: false
  private _passwordEncryptionConfiguration = new TenantPasswordEncryptionConfigurationList(this, "password_encryption_configuration", false);
  public get passwordEncryptionConfiguration() {
    return this._passwordEncryptionConfiguration;
  }
  public putPasswordEncryptionConfiguration(value: TenantPasswordEncryptionConfiguration[] | cdktf.IResolvable) {
    this._passwordEncryptionConfiguration.internalValue = value;
  }
  public resetPasswordEncryptionConfiguration() {
    this._passwordEncryptionConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordEncryptionConfigurationInput() {
    return this._passwordEncryptionConfiguration.internalValue;
  }

  // password_validation_rules - computed: false, optional: true, required: false
  private _passwordValidationRules = new TenantPasswordValidationRulesOutputReference(this, "password_validation_rules");
  public get passwordValidationRules() {
    return this._passwordValidationRules;
  }
  public putPasswordValidationRules(value: TenantPasswordValidationRules) {
    this._passwordValidationRules.internalValue = value;
  }
  public resetPasswordValidationRules() {
    this._passwordValidationRules.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordValidationRulesInput() {
    return this._passwordValidationRules.internalValue;
  }

  // rate_limit_configuration - computed: false, optional: true, required: false
  private _rateLimitConfiguration = new TenantRateLimitConfigurationOutputReference(this, "rate_limit_configuration");
  public get rateLimitConfiguration() {
    return this._rateLimitConfiguration;
  }
  public putRateLimitConfiguration(value: TenantRateLimitConfiguration) {
    this._rateLimitConfiguration.internalValue = value;
  }
  public resetRateLimitConfiguration() {
    this._rateLimitConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rateLimitConfigurationInput() {
    return this._rateLimitConfiguration.internalValue;
  }

  // registration_configuration - computed: false, optional: true, required: false
  private _registrationConfiguration = new TenantRegistrationConfigurationOutputReference(this, "registration_configuration");
  public get registrationConfiguration() {
    return this._registrationConfiguration;
  }
  public putRegistrationConfiguration(value: TenantRegistrationConfiguration) {
    this._registrationConfiguration.internalValue = value;
  }
  public resetRegistrationConfiguration() {
    this._registrationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationConfigurationInput() {
    return this._registrationConfiguration.internalValue;
  }

  // user_delete_policy - computed: false, optional: true, required: false
  private _userDeletePolicy = new TenantUserDeletePolicyOutputReference(this, "user_delete_policy");
  public get userDeletePolicy() {
    return this._userDeletePolicy;
  }
  public putUserDeletePolicy(value: TenantUserDeletePolicy) {
    this._userDeletePolicy.internalValue = value;
  }
  public resetUserDeletePolicy() {
    this._userDeletePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userDeletePolicyInput() {
    return this._userDeletePolicy.internalValue;
  }

  // username_configuration - computed: false, optional: true, required: false
  private _usernameConfiguration = new TenantUsernameConfigurationOutputReference(this, "username_configuration");
  public get usernameConfiguration() {
    return this._usernameConfiguration;
  }
  public putUsernameConfiguration(value: TenantUsernameConfiguration) {
    this._usernameConfiguration.internalValue = value;
  }
  public resetUsernameConfiguration() {
    this._usernameConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameConfigurationInput() {
    return this._usernameConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_control_configuration: cdktf.listMapper(tenantAccessControlConfigurationToTerraform, false)(this._accessControlConfiguration.internalValue),
      data: cdktf.hashMapper(cdktf.stringToTerraform)(this._data),
      form_configuration: cdktf.listMapper(tenantFormConfigurationToTerraform, false)(this._formConfiguration.internalValue),
      http_session_max_inactive_interval: cdktf.numberToTerraform(this._httpSessionMaxInactiveInterval),
      id: cdktf.stringToTerraform(this._id),
      issuer: cdktf.stringToTerraform(this._issuer),
      logout_url: cdktf.stringToTerraform(this._logoutUrl),
      multi_factor_configuration: cdktf.listMapper(tenantMultiFactorConfigurationToTerraform, false)(this._multiFactorConfiguration.internalValue),
      name: cdktf.stringToTerraform(this._name),
      source_tenant_id: cdktf.stringToTerraform(this._sourceTenantId),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      theme_id: cdktf.stringToTerraform(this._themeId),
      captcha_configuration: tenantCaptchaConfigurationToTerraform(this._captchaConfiguration.internalValue),
      connector_policy: cdktf.listMapper(tenantConnectorPolicyToTerraform, true)(this._connectorPolicy.internalValue),
      email_configuration: tenantEmailConfigurationToTerraform(this._emailConfiguration.internalValue),
      event_configuration: cdktf.listMapper(tenantEventConfigurationToTerraform, true)(this._eventConfiguration.internalValue),
      external_identifier_configuration: tenantExternalIdentifierConfigurationToTerraform(this._externalIdentifierConfiguration.internalValue),
      failed_authentication_configuration: tenantFailedAuthenticationConfigurationToTerraform(this._failedAuthenticationConfiguration.internalValue),
      family_configuration: tenantFamilyConfigurationToTerraform(this._familyConfiguration.internalValue),
      jwt_configuration: cdktf.listMapper(tenantJwtConfigurationToTerraform, true)(this._jwtConfiguration.internalValue),
      login_configuration: tenantLoginConfigurationToTerraform(this._loginConfiguration.internalValue),
      maximum_password_age: tenantMaximumPasswordAgeToTerraform(this._maximumPasswordAge.internalValue),
      minimum_password_age: tenantMinimumPasswordAgeToTerraform(this._minimumPasswordAge.internalValue),
      oauth_configuration: cdktf.listMapper(tenantOauthConfigurationToTerraform, true)(this._oauthConfiguration.internalValue),
      password_encryption_configuration: cdktf.listMapper(tenantPasswordEncryptionConfigurationToTerraform, true)(this._passwordEncryptionConfiguration.internalValue),
      password_validation_rules: tenantPasswordValidationRulesToTerraform(this._passwordValidationRules.internalValue),
      rate_limit_configuration: tenantRateLimitConfigurationToTerraform(this._rateLimitConfiguration.internalValue),
      registration_configuration: tenantRegistrationConfigurationToTerraform(this._registrationConfiguration.internalValue),
      user_delete_policy: tenantUserDeletePolicyToTerraform(this._userDeletePolicy.internalValue),
      username_configuration: tenantUsernameConfigurationToTerraform(this._usernameConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_control_configuration: {
        value: cdktf.listMapperHcl(tenantAccessControlConfigurationToHclTerraform, false)(this._accessControlConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantAccessControlConfigurationList",
      },
      data: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._data),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      form_configuration: {
        value: cdktf.listMapperHcl(tenantFormConfigurationToHclTerraform, false)(this._formConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantFormConfigurationList",
      },
      http_session_max_inactive_interval: {
        value: cdktf.numberToHclTerraform(this._httpSessionMaxInactiveInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      issuer: {
        value: cdktf.stringToHclTerraform(this._issuer),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logout_url: {
        value: cdktf.stringToHclTerraform(this._logoutUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      multi_factor_configuration: {
        value: cdktf.listMapperHcl(tenantMultiFactorConfigurationToHclTerraform, false)(this._multiFactorConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantMultiFactorConfigurationList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      source_tenant_id: {
        value: cdktf.stringToHclTerraform(this._sourceTenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      theme_id: {
        value: cdktf.stringToHclTerraform(this._themeId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      captcha_configuration: {
        value: tenantCaptchaConfigurationToHclTerraform(this._captchaConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantCaptchaConfigurationList",
      },
      connector_policy: {
        value: cdktf.listMapperHcl(tenantConnectorPolicyToHclTerraform, true)(this._connectorPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantConnectorPolicyList",
      },
      email_configuration: {
        value: tenantEmailConfigurationToHclTerraform(this._emailConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantEmailConfigurationList",
      },
      event_configuration: {
        value: cdktf.listMapperHcl(tenantEventConfigurationToHclTerraform, true)(this._eventConfiguration.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "TenantEventConfigurationList",
      },
      external_identifier_configuration: {
        value: tenantExternalIdentifierConfigurationToHclTerraform(this._externalIdentifierConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantExternalIdentifierConfigurationList",
      },
      failed_authentication_configuration: {
        value: tenantFailedAuthenticationConfigurationToHclTerraform(this._failedAuthenticationConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantFailedAuthenticationConfigurationList",
      },
      family_configuration: {
        value: tenantFamilyConfigurationToHclTerraform(this._familyConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantFamilyConfigurationList",
      },
      jwt_configuration: {
        value: cdktf.listMapperHcl(tenantJwtConfigurationToHclTerraform, true)(this._jwtConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantJwtConfigurationList",
      },
      login_configuration: {
        value: tenantLoginConfigurationToHclTerraform(this._loginConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantLoginConfigurationList",
      },
      maximum_password_age: {
        value: tenantMaximumPasswordAgeToHclTerraform(this._maximumPasswordAge.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantMaximumPasswordAgeList",
      },
      minimum_password_age: {
        value: tenantMinimumPasswordAgeToHclTerraform(this._minimumPasswordAge.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantMinimumPasswordAgeList",
      },
      oauth_configuration: {
        value: cdktf.listMapperHcl(tenantOauthConfigurationToHclTerraform, true)(this._oauthConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantOauthConfigurationList",
      },
      password_encryption_configuration: {
        value: cdktf.listMapperHcl(tenantPasswordEncryptionConfigurationToHclTerraform, true)(this._passwordEncryptionConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantPasswordEncryptionConfigurationList",
      },
      password_validation_rules: {
        value: tenantPasswordValidationRulesToHclTerraform(this._passwordValidationRules.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantPasswordValidationRulesList",
      },
      rate_limit_configuration: {
        value: tenantRateLimitConfigurationToHclTerraform(this._rateLimitConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantRateLimitConfigurationList",
      },
      registration_configuration: {
        value: tenantRegistrationConfigurationToHclTerraform(this._registrationConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantRegistrationConfigurationList",
      },
      user_delete_policy: {
        value: tenantUserDeletePolicyToHclTerraform(this._userDeletePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantUserDeletePolicyList",
      },
      username_configuration: {
        value: tenantUsernameConfigurationToHclTerraform(this._usernameConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "TenantUsernameConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
