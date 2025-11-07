// https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApplicationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#access_control_configuration Application#access_control_configuration}
  */
  readonly accessControlConfiguration?: ApplicationAccessControlConfiguration[] | cdktf.IResolvable;
  /**
  * The Id to use for the new Application. If not specified a secure random UUID will be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#application_id Application#application_id}
  */
  readonly applicationId?: string;
  /**
  * Determines if Users can have Authentication Tokens associated with this Application. This feature may not be enabled for the FusionAuth application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#authentication_token_configuration_enabled Application#authentication_token_configuration_enabled}
  */
  readonly authenticationTokenConfigurationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#clean_speak_configuration Application#clean_speak_configuration}
  */
  readonly cleanSpeakConfiguration?: ApplicationCleanSpeakConfiguration[] | cdktf.IResolvable;
  /**
  * An object that can hold any information about the Application that should be persisted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#data Application#data}
  */
  readonly data?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#email_configuration Application#email_configuration}
  */
  readonly emailConfiguration?: ApplicationEmailConfiguration[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#form_configuration Application#form_configuration}
  */
  readonly formConfiguration?: ApplicationFormConfiguration[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#id Application#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#lambda_configuration Application#lambda_configuration}
  */
  readonly lambdaConfiguration?: ApplicationLambdaConfiguration[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#multi_factor_configuration Application#multi_factor_configuration}
  */
  readonly multiFactorConfiguration?: ApplicationMultiFactorConfiguration[] | cdktf.IResolvable;
  /**
  * The name of the Application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#name Application#name}
  */
  readonly name: string;
  /**
  * Determines if passwordless login is enabled for this application.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#passwordless_configuration_enabled Application#passwordless_configuration_enabled}
  */
  readonly passwordlessConfigurationEnabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#samlv2_configuration Application#samlv2_configuration}
  */
  readonly samlv2Configuration?: ApplicationSamlv2Configuration[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#tenant_id Application#tenant_id}
  */
  readonly tenantId: string;
  /**
  * The unique Id of the theme to be used to style the login page and other end user templates.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#theme_id Application#theme_id}
  */
  readonly themeId?: string;
  /**
  * The Id of the Email Template that is used to send the Registration Verification emails to users. If the verifyRegistration field is true this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#verification_email_template_id Application#verification_email_template_id}
  */
  readonly verificationEmailTemplateId?: string;
  /**
  * The process by which the user will verify their email address.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#verification_strategy Application#verification_strategy}
  */
  readonly verificationStrategy?: string;
  /**
  * Whether or not registrations to this Application may be verified. When this is set to true the verificationEmailTemplateId parameter is also required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#verify_registration Application#verify_registration}
  */
  readonly verifyRegistration?: boolean | cdktf.IResolvable;
  /**
  * jwt_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#jwt_configuration Application#jwt_configuration}
  */
  readonly jwtConfiguration?: ApplicationJwtConfiguration;
  /**
  * login_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#login_configuration Application#login_configuration}
  */
  readonly loginConfiguration?: ApplicationLoginConfiguration;
  /**
  * oauth_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#oauth_configuration Application#oauth_configuration}
  */
  readonly oauthConfiguration?: ApplicationOauthConfiguration;
  /**
  * registration_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#registration_configuration Application#registration_configuration}
  */
  readonly registrationConfiguration?: ApplicationRegistrationConfiguration;
  /**
  * registration_delete_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#registration_delete_policy Application#registration_delete_policy}
  */
  readonly registrationDeletePolicy?: ApplicationRegistrationDeletePolicy;
}
export interface ApplicationAccessControlConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#ui_ip_access_control_list_id Application#ui_ip_access_control_list_id}
  */
  readonly uiIpAccessControlListId?: string;
}

export function applicationAccessControlConfigurationToTerraform(struct?: ApplicationAccessControlConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ui_ip_access_control_list_id: cdktf.stringToTerraform(struct!.uiIpAccessControlListId),
  }
}


export function applicationAccessControlConfigurationToHclTerraform(struct?: ApplicationAccessControlConfiguration | cdktf.IResolvable): any {
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

export class ApplicationAccessControlConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationAccessControlConfiguration | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ApplicationAccessControlConfiguration | cdktf.IResolvable | undefined) {
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

  // ui_ip_access_control_list_id - computed: true, optional: true, required: false
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

export class ApplicationAccessControlConfigurationList extends cdktf.ComplexList {
  public internalValue? : ApplicationAccessControlConfiguration[] | cdktf.IResolvable

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
  public get(index: number): ApplicationAccessControlConfigurationOutputReference {
    return new ApplicationAccessControlConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationCleanSpeakConfigurationUsernameModeration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#application_id Application#application_id}
  */
  readonly applicationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#enabled Application#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
}

export function applicationCleanSpeakConfigurationUsernameModerationToTerraform(struct?: ApplicationCleanSpeakConfigurationUsernameModeration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_id: cdktf.stringToTerraform(struct!.applicationId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
  }
}


export function applicationCleanSpeakConfigurationUsernameModerationToHclTerraform(struct?: ApplicationCleanSpeakConfigurationUsernameModeration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_id: {
      value: cdktf.stringToHclTerraform(struct!.applicationId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationCleanSpeakConfigurationUsernameModerationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationCleanSpeakConfigurationUsernameModeration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationId = this._applicationId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationCleanSpeakConfigurationUsernameModeration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationId = undefined;
      this._enabled = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationId = value.applicationId;
      this._enabled = value.enabled;
    }
  }

  // application_id - computed: true, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
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

export class ApplicationCleanSpeakConfigurationUsernameModerationList extends cdktf.ComplexList {
  public internalValue? : ApplicationCleanSpeakConfigurationUsernameModeration[] | cdktf.IResolvable

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
  public get(index: number): ApplicationCleanSpeakConfigurationUsernameModerationOutputReference {
    return new ApplicationCleanSpeakConfigurationUsernameModerationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationCleanSpeakConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#application_ids Application#application_ids}
  */
  readonly applicationIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#username_moderation Application#username_moderation}
  */
  readonly usernameModeration?: ApplicationCleanSpeakConfigurationUsernameModeration[] | cdktf.IResolvable;
}

export function applicationCleanSpeakConfigurationToTerraform(struct?: ApplicationCleanSpeakConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    application_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.applicationIds),
    username_moderation: cdktf.listMapper(applicationCleanSpeakConfigurationUsernameModerationToTerraform, false)(struct!.usernameModeration),
  }
}


export function applicationCleanSpeakConfigurationToHclTerraform(struct?: ApplicationCleanSpeakConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    application_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.applicationIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    username_moderation: {
      value: cdktf.listMapperHcl(applicationCleanSpeakConfigurationUsernameModerationToHclTerraform, false)(struct!.usernameModeration),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationCleanSpeakConfigurationUsernameModerationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationCleanSpeakConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationCleanSpeakConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._applicationIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.applicationIds = this._applicationIds;
    }
    if (this._usernameModeration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameModeration = this._usernameModeration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationCleanSpeakConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._applicationIds = undefined;
      this._usernameModeration.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._applicationIds = value.applicationIds;
      this._usernameModeration.internalValue = value.usernameModeration;
    }
  }

  // application_ids - computed: true, optional: true, required: false
  private _applicationIds?: string[]; 
  public get applicationIds() {
    return cdktf.Fn.tolist(this.getListAttribute('application_ids'));
  }
  public set applicationIds(value: string[]) {
    this._applicationIds = value;
  }
  public resetApplicationIds() {
    this._applicationIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdsInput() {
    return this._applicationIds;
  }

  // username_moderation - computed: true, optional: true, required: false
  private _usernameModeration = new ApplicationCleanSpeakConfigurationUsernameModerationList(this, "username_moderation", false);
  public get usernameModeration() {
    return this._usernameModeration;
  }
  public putUsernameModeration(value: ApplicationCleanSpeakConfigurationUsernameModeration[] | cdktf.IResolvable) {
    this._usernameModeration.internalValue = value;
  }
  public resetUsernameModeration() {
    this._usernameModeration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameModerationInput() {
    return this._usernameModeration.internalValue;
  }
}

export class ApplicationCleanSpeakConfigurationList extends cdktf.ComplexList {
  public internalValue? : ApplicationCleanSpeakConfiguration[] | cdktf.IResolvable

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
  public get(index: number): ApplicationCleanSpeakConfigurationOutputReference {
    return new ApplicationCleanSpeakConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationEmailConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#email_update_template_id Application#email_update_template_id}
  */
  readonly emailUpdateTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#email_verification_template_id Application#email_verification_template_id}
  */
  readonly emailVerificationTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#email_verified_template_id Application#email_verified_template_id}
  */
  readonly emailVerifiedTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#forgot_password_template_id Application#forgot_password_template_id}
  */
  readonly forgotPasswordTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#login_id_in_use_on_create_template_id Application#login_id_in_use_on_create_template_id}
  */
  readonly loginIdInUseOnCreateTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#login_id_in_use_on_update_template_id Application#login_id_in_use_on_update_template_id}
  */
  readonly loginIdInUseOnUpdateTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#login_new_device_template_id Application#login_new_device_template_id}
  */
  readonly loginNewDeviceTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#login_suspicious_template_id Application#login_suspicious_template_id}
  */
  readonly loginSuspiciousTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#password_reset_success_template_id Application#password_reset_success_template_id}
  */
  readonly passwordResetSuccessTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#password_update_template_id Application#password_update_template_id}
  */
  readonly passwordUpdateTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#passwordless_email_template_id Application#passwordless_email_template_id}
  */
  readonly passwordlessEmailTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#set_password_email_template_id Application#set_password_email_template_id}
  */
  readonly setPasswordEmailTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#two_factor_method_add_template_id Application#two_factor_method_add_template_id}
  */
  readonly twoFactorMethodAddTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#two_factor_method_remove_template_id Application#two_factor_method_remove_template_id}
  */
  readonly twoFactorMethodRemoveTemplateId?: string;
}

export function applicationEmailConfigurationToTerraform(struct?: ApplicationEmailConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_update_template_id: cdktf.stringToTerraform(struct!.emailUpdateTemplateId),
    email_verification_template_id: cdktf.stringToTerraform(struct!.emailVerificationTemplateId),
    email_verified_template_id: cdktf.stringToTerraform(struct!.emailVerifiedTemplateId),
    forgot_password_template_id: cdktf.stringToTerraform(struct!.forgotPasswordTemplateId),
    login_id_in_use_on_create_template_id: cdktf.stringToTerraform(struct!.loginIdInUseOnCreateTemplateId),
    login_id_in_use_on_update_template_id: cdktf.stringToTerraform(struct!.loginIdInUseOnUpdateTemplateId),
    login_new_device_template_id: cdktf.stringToTerraform(struct!.loginNewDeviceTemplateId),
    login_suspicious_template_id: cdktf.stringToTerraform(struct!.loginSuspiciousTemplateId),
    password_reset_success_template_id: cdktf.stringToTerraform(struct!.passwordResetSuccessTemplateId),
    password_update_template_id: cdktf.stringToTerraform(struct!.passwordUpdateTemplateId),
    passwordless_email_template_id: cdktf.stringToTerraform(struct!.passwordlessEmailTemplateId),
    set_password_email_template_id: cdktf.stringToTerraform(struct!.setPasswordEmailTemplateId),
    two_factor_method_add_template_id: cdktf.stringToTerraform(struct!.twoFactorMethodAddTemplateId),
    two_factor_method_remove_template_id: cdktf.stringToTerraform(struct!.twoFactorMethodRemoveTemplateId),
  }
}


export function applicationEmailConfigurationToHclTerraform(struct?: ApplicationEmailConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_update_template_id: {
      value: cdktf.stringToHclTerraform(struct!.emailUpdateTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_verification_template_id: {
      value: cdktf.stringToHclTerraform(struct!.emailVerificationTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_verified_template_id: {
      value: cdktf.stringToHclTerraform(struct!.emailVerifiedTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forgot_password_template_id: {
      value: cdktf.stringToHclTerraform(struct!.forgotPasswordTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_id_in_use_on_create_template_id: {
      value: cdktf.stringToHclTerraform(struct!.loginIdInUseOnCreateTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_id_in_use_on_update_template_id: {
      value: cdktf.stringToHclTerraform(struct!.loginIdInUseOnUpdateTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_new_device_template_id: {
      value: cdktf.stringToHclTerraform(struct!.loginNewDeviceTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_suspicious_template_id: {
      value: cdktf.stringToHclTerraform(struct!.loginSuspiciousTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_reset_success_template_id: {
      value: cdktf.stringToHclTerraform(struct!.passwordResetSuccessTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_update_template_id: {
      value: cdktf.stringToHclTerraform(struct!.passwordUpdateTemplateId),
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
    set_password_email_template_id: {
      value: cdktf.stringToHclTerraform(struct!.setPasswordEmailTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    two_factor_method_add_template_id: {
      value: cdktf.stringToHclTerraform(struct!.twoFactorMethodAddTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    two_factor_method_remove_template_id: {
      value: cdktf.stringToHclTerraform(struct!.twoFactorMethodRemoveTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationEmailConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationEmailConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailUpdateTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailUpdateTemplateId = this._emailUpdateTemplateId;
    }
    if (this._emailVerificationTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailVerificationTemplateId = this._emailVerificationTemplateId;
    }
    if (this._emailVerifiedTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailVerifiedTemplateId = this._emailVerifiedTemplateId;
    }
    if (this._forgotPasswordTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.forgotPasswordTemplateId = this._forgotPasswordTemplateId;
    }
    if (this._loginIdInUseOnCreateTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginIdInUseOnCreateTemplateId = this._loginIdInUseOnCreateTemplateId;
    }
    if (this._loginIdInUseOnUpdateTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginIdInUseOnUpdateTemplateId = this._loginIdInUseOnUpdateTemplateId;
    }
    if (this._loginNewDeviceTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginNewDeviceTemplateId = this._loginNewDeviceTemplateId;
    }
    if (this._loginSuspiciousTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginSuspiciousTemplateId = this._loginSuspiciousTemplateId;
    }
    if (this._passwordResetSuccessTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordResetSuccessTemplateId = this._passwordResetSuccessTemplateId;
    }
    if (this._passwordUpdateTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordUpdateTemplateId = this._passwordUpdateTemplateId;
    }
    if (this._passwordlessEmailTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordlessEmailTemplateId = this._passwordlessEmailTemplateId;
    }
    if (this._setPasswordEmailTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.setPasswordEmailTemplateId = this._setPasswordEmailTemplateId;
    }
    if (this._twoFactorMethodAddTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoFactorMethodAddTemplateId = this._twoFactorMethodAddTemplateId;
    }
    if (this._twoFactorMethodRemoveTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.twoFactorMethodRemoveTemplateId = this._twoFactorMethodRemoveTemplateId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationEmailConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailUpdateTemplateId = undefined;
      this._emailVerificationTemplateId = undefined;
      this._emailVerifiedTemplateId = undefined;
      this._forgotPasswordTemplateId = undefined;
      this._loginIdInUseOnCreateTemplateId = undefined;
      this._loginIdInUseOnUpdateTemplateId = undefined;
      this._loginNewDeviceTemplateId = undefined;
      this._loginSuspiciousTemplateId = undefined;
      this._passwordResetSuccessTemplateId = undefined;
      this._passwordUpdateTemplateId = undefined;
      this._passwordlessEmailTemplateId = undefined;
      this._setPasswordEmailTemplateId = undefined;
      this._twoFactorMethodAddTemplateId = undefined;
      this._twoFactorMethodRemoveTemplateId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailUpdateTemplateId = value.emailUpdateTemplateId;
      this._emailVerificationTemplateId = value.emailVerificationTemplateId;
      this._emailVerifiedTemplateId = value.emailVerifiedTemplateId;
      this._forgotPasswordTemplateId = value.forgotPasswordTemplateId;
      this._loginIdInUseOnCreateTemplateId = value.loginIdInUseOnCreateTemplateId;
      this._loginIdInUseOnUpdateTemplateId = value.loginIdInUseOnUpdateTemplateId;
      this._loginNewDeviceTemplateId = value.loginNewDeviceTemplateId;
      this._loginSuspiciousTemplateId = value.loginSuspiciousTemplateId;
      this._passwordResetSuccessTemplateId = value.passwordResetSuccessTemplateId;
      this._passwordUpdateTemplateId = value.passwordUpdateTemplateId;
      this._passwordlessEmailTemplateId = value.passwordlessEmailTemplateId;
      this._setPasswordEmailTemplateId = value.setPasswordEmailTemplateId;
      this._twoFactorMethodAddTemplateId = value.twoFactorMethodAddTemplateId;
      this._twoFactorMethodRemoveTemplateId = value.twoFactorMethodRemoveTemplateId;
    }
  }

  // email_update_template_id - computed: true, optional: true, required: false
  private _emailUpdateTemplateId?: string; 
  public get emailUpdateTemplateId() {
    return this.getStringAttribute('email_update_template_id');
  }
  public set emailUpdateTemplateId(value: string) {
    this._emailUpdateTemplateId = value;
  }
  public resetEmailUpdateTemplateId() {
    this._emailUpdateTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailUpdateTemplateIdInput() {
    return this._emailUpdateTemplateId;
  }

  // email_verification_template_id - computed: true, optional: true, required: false
  private _emailVerificationTemplateId?: string; 
  public get emailVerificationTemplateId() {
    return this.getStringAttribute('email_verification_template_id');
  }
  public set emailVerificationTemplateId(value: string) {
    this._emailVerificationTemplateId = value;
  }
  public resetEmailVerificationTemplateId() {
    this._emailVerificationTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerificationTemplateIdInput() {
    return this._emailVerificationTemplateId;
  }

  // email_verified_template_id - computed: true, optional: true, required: false
  private _emailVerifiedTemplateId?: string; 
  public get emailVerifiedTemplateId() {
    return this.getStringAttribute('email_verified_template_id');
  }
  public set emailVerifiedTemplateId(value: string) {
    this._emailVerifiedTemplateId = value;
  }
  public resetEmailVerifiedTemplateId() {
    this._emailVerifiedTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerifiedTemplateIdInput() {
    return this._emailVerifiedTemplateId;
  }

  // forgot_password_template_id - computed: true, optional: true, required: false
  private _forgotPasswordTemplateId?: string; 
  public get forgotPasswordTemplateId() {
    return this.getStringAttribute('forgot_password_template_id');
  }
  public set forgotPasswordTemplateId(value: string) {
    this._forgotPasswordTemplateId = value;
  }
  public resetForgotPasswordTemplateId() {
    this._forgotPasswordTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forgotPasswordTemplateIdInput() {
    return this._forgotPasswordTemplateId;
  }

  // login_id_in_use_on_create_template_id - computed: true, optional: true, required: false
  private _loginIdInUseOnCreateTemplateId?: string; 
  public get loginIdInUseOnCreateTemplateId() {
    return this.getStringAttribute('login_id_in_use_on_create_template_id');
  }
  public set loginIdInUseOnCreateTemplateId(value: string) {
    this._loginIdInUseOnCreateTemplateId = value;
  }
  public resetLoginIdInUseOnCreateTemplateId() {
    this._loginIdInUseOnCreateTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginIdInUseOnCreateTemplateIdInput() {
    return this._loginIdInUseOnCreateTemplateId;
  }

  // login_id_in_use_on_update_template_id - computed: true, optional: true, required: false
  private _loginIdInUseOnUpdateTemplateId?: string; 
  public get loginIdInUseOnUpdateTemplateId() {
    return this.getStringAttribute('login_id_in_use_on_update_template_id');
  }
  public set loginIdInUseOnUpdateTemplateId(value: string) {
    this._loginIdInUseOnUpdateTemplateId = value;
  }
  public resetLoginIdInUseOnUpdateTemplateId() {
    this._loginIdInUseOnUpdateTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginIdInUseOnUpdateTemplateIdInput() {
    return this._loginIdInUseOnUpdateTemplateId;
  }

  // login_new_device_template_id - computed: true, optional: true, required: false
  private _loginNewDeviceTemplateId?: string; 
  public get loginNewDeviceTemplateId() {
    return this.getStringAttribute('login_new_device_template_id');
  }
  public set loginNewDeviceTemplateId(value: string) {
    this._loginNewDeviceTemplateId = value;
  }
  public resetLoginNewDeviceTemplateId() {
    this._loginNewDeviceTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginNewDeviceTemplateIdInput() {
    return this._loginNewDeviceTemplateId;
  }

  // login_suspicious_template_id - computed: true, optional: true, required: false
  private _loginSuspiciousTemplateId?: string; 
  public get loginSuspiciousTemplateId() {
    return this.getStringAttribute('login_suspicious_template_id');
  }
  public set loginSuspiciousTemplateId(value: string) {
    this._loginSuspiciousTemplateId = value;
  }
  public resetLoginSuspiciousTemplateId() {
    this._loginSuspiciousTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginSuspiciousTemplateIdInput() {
    return this._loginSuspiciousTemplateId;
  }

  // password_reset_success_template_id - computed: true, optional: true, required: false
  private _passwordResetSuccessTemplateId?: string; 
  public get passwordResetSuccessTemplateId() {
    return this.getStringAttribute('password_reset_success_template_id');
  }
  public set passwordResetSuccessTemplateId(value: string) {
    this._passwordResetSuccessTemplateId = value;
  }
  public resetPasswordResetSuccessTemplateId() {
    this._passwordResetSuccessTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordResetSuccessTemplateIdInput() {
    return this._passwordResetSuccessTemplateId;
  }

  // password_update_template_id - computed: true, optional: true, required: false
  private _passwordUpdateTemplateId?: string; 
  public get passwordUpdateTemplateId() {
    return this.getStringAttribute('password_update_template_id');
  }
  public set passwordUpdateTemplateId(value: string) {
    this._passwordUpdateTemplateId = value;
  }
  public resetPasswordUpdateTemplateId() {
    this._passwordUpdateTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordUpdateTemplateIdInput() {
    return this._passwordUpdateTemplateId;
  }

  // passwordless_email_template_id - computed: true, optional: true, required: false
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

  // set_password_email_template_id - computed: true, optional: true, required: false
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

  // two_factor_method_add_template_id - computed: true, optional: true, required: false
  private _twoFactorMethodAddTemplateId?: string; 
  public get twoFactorMethodAddTemplateId() {
    return this.getStringAttribute('two_factor_method_add_template_id');
  }
  public set twoFactorMethodAddTemplateId(value: string) {
    this._twoFactorMethodAddTemplateId = value;
  }
  public resetTwoFactorMethodAddTemplateId() {
    this._twoFactorMethodAddTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorMethodAddTemplateIdInput() {
    return this._twoFactorMethodAddTemplateId;
  }

  // two_factor_method_remove_template_id - computed: true, optional: true, required: false
  private _twoFactorMethodRemoveTemplateId?: string; 
  public get twoFactorMethodRemoveTemplateId() {
    return this.getStringAttribute('two_factor_method_remove_template_id');
  }
  public set twoFactorMethodRemoveTemplateId(value: string) {
    this._twoFactorMethodRemoveTemplateId = value;
  }
  public resetTwoFactorMethodRemoveTemplateId() {
    this._twoFactorMethodRemoveTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get twoFactorMethodRemoveTemplateIdInput() {
    return this._twoFactorMethodRemoveTemplateId;
  }
}

export class ApplicationEmailConfigurationList extends cdktf.ComplexList {
  public internalValue? : ApplicationEmailConfiguration[] | cdktf.IResolvable

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
  public get(index: number): ApplicationEmailConfigurationOutputReference {
    return new ApplicationEmailConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationFormConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#admin_registration_form_id Application#admin_registration_form_id}
  */
  readonly adminRegistrationFormId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#self_service_form_id Application#self_service_form_id}
  */
  readonly selfServiceFormId?: string;
}

export function applicationFormConfigurationToTerraform(struct?: ApplicationFormConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admin_registration_form_id: cdktf.stringToTerraform(struct!.adminRegistrationFormId),
    self_service_form_id: cdktf.stringToTerraform(struct!.selfServiceFormId),
  }
}


export function applicationFormConfigurationToHclTerraform(struct?: ApplicationFormConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admin_registration_form_id: {
      value: cdktf.stringToHclTerraform(struct!.adminRegistrationFormId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_service_form_id: {
      value: cdktf.stringToHclTerraform(struct!.selfServiceFormId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationFormConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationFormConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._adminRegistrationFormId !== undefined) {
      hasAnyValues = true;
      internalValueResult.adminRegistrationFormId = this._adminRegistrationFormId;
    }
    if (this._selfServiceFormId !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfServiceFormId = this._selfServiceFormId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationFormConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._adminRegistrationFormId = undefined;
      this._selfServiceFormId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._adminRegistrationFormId = value.adminRegistrationFormId;
      this._selfServiceFormId = value.selfServiceFormId;
    }
  }

  // admin_registration_form_id - computed: true, optional: true, required: false
  private _adminRegistrationFormId?: string; 
  public get adminRegistrationFormId() {
    return this.getStringAttribute('admin_registration_form_id');
  }
  public set adminRegistrationFormId(value: string) {
    this._adminRegistrationFormId = value;
  }
  public resetAdminRegistrationFormId() {
    this._adminRegistrationFormId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get adminRegistrationFormIdInput() {
    return this._adminRegistrationFormId;
  }

  // self_service_form_id - computed: true, optional: true, required: false
  private _selfServiceFormId?: string; 
  public get selfServiceFormId() {
    return this.getStringAttribute('self_service_form_id');
  }
  public set selfServiceFormId(value: string) {
    this._selfServiceFormId = value;
  }
  public resetSelfServiceFormId() {
    this._selfServiceFormId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfServiceFormIdInput() {
    return this._selfServiceFormId;
  }
}

export class ApplicationFormConfigurationList extends cdktf.ComplexList {
  public internalValue? : ApplicationFormConfiguration[] | cdktf.IResolvable

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
  public get(index: number): ApplicationFormConfigurationOutputReference {
    return new ApplicationFormConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationLambdaConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#access_token_populate_id Application#access_token_populate_id}
  */
  readonly accessTokenPopulateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#id_token_populate_id Application#id_token_populate_id}
  */
  readonly idTokenPopulateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#samlv2_populate_id Application#samlv2_populate_id}
  */
  readonly samlv2PopulateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#self_service_registration_validation_id Application#self_service_registration_validation_id}
  */
  readonly selfServiceRegistrationValidationId?: string;
}

export function applicationLambdaConfigurationToTerraform(struct?: ApplicationLambdaConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token_populate_id: cdktf.stringToTerraform(struct!.accessTokenPopulateId),
    id_token_populate_id: cdktf.stringToTerraform(struct!.idTokenPopulateId),
    samlv2_populate_id: cdktf.stringToTerraform(struct!.samlv2PopulateId),
    self_service_registration_validation_id: cdktf.stringToTerraform(struct!.selfServiceRegistrationValidationId),
  }
}


export function applicationLambdaConfigurationToHclTerraform(struct?: ApplicationLambdaConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token_populate_id: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenPopulateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id_token_populate_id: {
      value: cdktf.stringToHclTerraform(struct!.idTokenPopulateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    samlv2_populate_id: {
      value: cdktf.stringToHclTerraform(struct!.samlv2PopulateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self_service_registration_validation_id: {
      value: cdktf.stringToHclTerraform(struct!.selfServiceRegistrationValidationId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationLambdaConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationLambdaConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokenPopulateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenPopulateId = this._accessTokenPopulateId;
    }
    if (this._idTokenPopulateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.idTokenPopulateId = this._idTokenPopulateId;
    }
    if (this._samlv2PopulateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.samlv2PopulateId = this._samlv2PopulateId;
    }
    if (this._selfServiceRegistrationValidationId !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfServiceRegistrationValidationId = this._selfServiceRegistrationValidationId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationLambdaConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._accessTokenPopulateId = undefined;
      this._idTokenPopulateId = undefined;
      this._samlv2PopulateId = undefined;
      this._selfServiceRegistrationValidationId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._accessTokenPopulateId = value.accessTokenPopulateId;
      this._idTokenPopulateId = value.idTokenPopulateId;
      this._samlv2PopulateId = value.samlv2PopulateId;
      this._selfServiceRegistrationValidationId = value.selfServiceRegistrationValidationId;
    }
  }

  // access_token_populate_id - computed: true, optional: true, required: false
  private _accessTokenPopulateId?: string; 
  public get accessTokenPopulateId() {
    return this.getStringAttribute('access_token_populate_id');
  }
  public set accessTokenPopulateId(value: string) {
    this._accessTokenPopulateId = value;
  }
  public resetAccessTokenPopulateId() {
    this._accessTokenPopulateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenPopulateIdInput() {
    return this._accessTokenPopulateId;
  }

  // id_token_populate_id - computed: true, optional: true, required: false
  private _idTokenPopulateId?: string; 
  public get idTokenPopulateId() {
    return this.getStringAttribute('id_token_populate_id');
  }
  public set idTokenPopulateId(value: string) {
    this._idTokenPopulateId = value;
  }
  public resetIdTokenPopulateId() {
    this._idTokenPopulateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idTokenPopulateIdInput() {
    return this._idTokenPopulateId;
  }

  // samlv2_populate_id - computed: true, optional: true, required: false
  private _samlv2PopulateId?: string; 
  public get samlv2PopulateId() {
    return this.getStringAttribute('samlv2_populate_id');
  }
  public set samlv2PopulateId(value: string) {
    this._samlv2PopulateId = value;
  }
  public resetSamlv2PopulateId() {
    this._samlv2PopulateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlv2PopulateIdInput() {
    return this._samlv2PopulateId;
  }

  // self_service_registration_validation_id - computed: true, optional: true, required: false
  private _selfServiceRegistrationValidationId?: string; 
  public get selfServiceRegistrationValidationId() {
    return this.getStringAttribute('self_service_registration_validation_id');
  }
  public set selfServiceRegistrationValidationId(value: string) {
    this._selfServiceRegistrationValidationId = value;
  }
  public resetSelfServiceRegistrationValidationId() {
    this._selfServiceRegistrationValidationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfServiceRegistrationValidationIdInput() {
    return this._selfServiceRegistrationValidationId;
  }
}

export class ApplicationLambdaConfigurationList extends cdktf.ComplexList {
  public internalValue? : ApplicationLambdaConfiguration[] | cdktf.IResolvable

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
  public get(index: number): ApplicationLambdaConfigurationOutputReference {
    return new ApplicationLambdaConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationMultiFactorConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#email_template_id Application#email_template_id}
  */
  readonly emailTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#login_policy Application#login_policy}
  */
  readonly loginPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#sms_template_id Application#sms_template_id}
  */
  readonly smsTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#trust_policy Application#trust_policy}
  */
  readonly trustPolicy?: string;
}

export function applicationMultiFactorConfigurationToTerraform(struct?: ApplicationMultiFactorConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email_template_id: cdktf.stringToTerraform(struct!.emailTemplateId),
    login_policy: cdktf.stringToTerraform(struct!.loginPolicy),
    sms_template_id: cdktf.stringToTerraform(struct!.smsTemplateId),
    trust_policy: cdktf.stringToTerraform(struct!.trustPolicy),
  }
}


export function applicationMultiFactorConfigurationToHclTerraform(struct?: ApplicationMultiFactorConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email_template_id: {
      value: cdktf.stringToHclTerraform(struct!.emailTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_policy: {
      value: cdktf.stringToHclTerraform(struct!.loginPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sms_template_id: {
      value: cdktf.stringToHclTerraform(struct!.smsTemplateId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    trust_policy: {
      value: cdktf.stringToHclTerraform(struct!.trustPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationMultiFactorConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationMultiFactorConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._emailTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailTemplateId = this._emailTemplateId;
    }
    if (this._loginPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginPolicy = this._loginPolicy;
    }
    if (this._smsTemplateId !== undefined) {
      hasAnyValues = true;
      internalValueResult.smsTemplateId = this._smsTemplateId;
    }
    if (this._trustPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.trustPolicy = this._trustPolicy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationMultiFactorConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._emailTemplateId = undefined;
      this._loginPolicy = undefined;
      this._smsTemplateId = undefined;
      this._trustPolicy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._emailTemplateId = value.emailTemplateId;
      this._loginPolicy = value.loginPolicy;
      this._smsTemplateId = value.smsTemplateId;
      this._trustPolicy = value.trustPolicy;
    }
  }

  // email_template_id - computed: true, optional: true, required: false
  private _emailTemplateId?: string; 
  public get emailTemplateId() {
    return this.getStringAttribute('email_template_id');
  }
  public set emailTemplateId(value: string) {
    this._emailTemplateId = value;
  }
  public resetEmailTemplateId() {
    this._emailTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailTemplateIdInput() {
    return this._emailTemplateId;
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

  // sms_template_id - computed: true, optional: true, required: false
  private _smsTemplateId?: string; 
  public get smsTemplateId() {
    return this.getStringAttribute('sms_template_id');
  }
  public set smsTemplateId(value: string) {
    this._smsTemplateId = value;
  }
  public resetSmsTemplateId() {
    this._smsTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get smsTemplateIdInput() {
    return this._smsTemplateId;
  }

  // trust_policy - computed: true, optional: true, required: false
  private _trustPolicy?: string; 
  public get trustPolicy() {
    return this.getStringAttribute('trust_policy');
  }
  public set trustPolicy(value: string) {
    this._trustPolicy = value;
  }
  public resetTrustPolicy() {
    this._trustPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trustPolicyInput() {
    return this._trustPolicy;
  }
}

export class ApplicationMultiFactorConfigurationList extends cdktf.ComplexList {
  public internalValue? : ApplicationMultiFactorConfiguration[] | cdktf.IResolvable

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
  public get(index: number): ApplicationMultiFactorConfigurationOutputReference {
    return new ApplicationMultiFactorConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSamlv2ConfigurationLogoutSingleLogout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#enabled Application#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#key_id Application#key_id}
  */
  readonly keyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#url Application#url}
  */
  readonly url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#xml_signature_canonicalization_method Application#xml_signature_canonicalization_method}
  */
  readonly xmlSignatureCanonicalizationMethod?: string;
}

export function applicationSamlv2ConfigurationLogoutSingleLogoutToTerraform(struct?: ApplicationSamlv2ConfigurationLogoutSingleLogout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    key_id: cdktf.stringToTerraform(struct!.keyId),
    url: cdktf.stringToTerraform(struct!.url),
    xml_signature_canonicalization_method: cdktf.stringToTerraform(struct!.xmlSignatureCanonicalizationMethod),
  }
}


export function applicationSamlv2ConfigurationLogoutSingleLogoutToHclTerraform(struct?: ApplicationSamlv2ConfigurationLogoutSingleLogout | cdktf.IResolvable): any {
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
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xml_signature_canonicalization_method: {
      value: cdktf.stringToHclTerraform(struct!.xmlSignatureCanonicalizationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSamlv2ConfigurationLogoutSingleLogoutOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSamlv2ConfigurationLogoutSingleLogout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    if (this._xmlSignatureCanonicalizationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.xmlSignatureCanonicalizationMethod = this._xmlSignatureCanonicalizationMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSamlv2ConfigurationLogoutSingleLogout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enabled = undefined;
      this._keyId = undefined;
      this._url = undefined;
      this._xmlSignatureCanonicalizationMethod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enabled = value.enabled;
      this._keyId = value.keyId;
      this._url = value.url;
      this._xmlSignatureCanonicalizationMethod = value.xmlSignatureCanonicalizationMethod;
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

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // url - computed: true, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }

  // xml_signature_canonicalization_method - computed: true, optional: true, required: false
  private _xmlSignatureCanonicalizationMethod?: string; 
  public get xmlSignatureCanonicalizationMethod() {
    return this.getStringAttribute('xml_signature_canonicalization_method');
  }
  public set xmlSignatureCanonicalizationMethod(value: string) {
    this._xmlSignatureCanonicalizationMethod = value;
  }
  public resetXmlSignatureCanonicalizationMethod() {
    this._xmlSignatureCanonicalizationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlSignatureCanonicalizationMethodInput() {
    return this._xmlSignatureCanonicalizationMethod;
  }
}

export class ApplicationSamlv2ConfigurationLogoutSingleLogoutList extends cdktf.ComplexList {
  public internalValue? : ApplicationSamlv2ConfigurationLogoutSingleLogout[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSamlv2ConfigurationLogoutSingleLogoutOutputReference {
    return new ApplicationSamlv2ConfigurationLogoutSingleLogoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSamlv2ConfigurationLogout {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#behavior Application#behavior}
  */
  readonly behavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#default_verification_key_id Application#default_verification_key_id}
  */
  readonly defaultVerificationKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#key_id Application#key_id}
  */
  readonly keyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#require_signed_requests Application#require_signed_requests}
  */
  readonly requireSignedRequests?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#single_logout Application#single_logout}
  */
  readonly singleLogout?: ApplicationSamlv2ConfigurationLogoutSingleLogout[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#xml_signature_canonicalization_method Application#xml_signature_canonicalization_method}
  */
  readonly xmlSignatureCanonicalizationMethod?: string;
}

export function applicationSamlv2ConfigurationLogoutToTerraform(struct?: ApplicationSamlv2ConfigurationLogout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    behavior: cdktf.stringToTerraform(struct!.behavior),
    default_verification_key_id: cdktf.stringToTerraform(struct!.defaultVerificationKeyId),
    key_id: cdktf.stringToTerraform(struct!.keyId),
    require_signed_requests: cdktf.booleanToTerraform(struct!.requireSignedRequests),
    single_logout: cdktf.listMapper(applicationSamlv2ConfigurationLogoutSingleLogoutToTerraform, false)(struct!.singleLogout),
    xml_signature_canonicalization_method: cdktf.stringToTerraform(struct!.xmlSignatureCanonicalizationMethod),
  }
}


export function applicationSamlv2ConfigurationLogoutToHclTerraform(struct?: ApplicationSamlv2ConfigurationLogout | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    behavior: {
      value: cdktf.stringToHclTerraform(struct!.behavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_verification_key_id: {
      value: cdktf.stringToHclTerraform(struct!.defaultVerificationKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_signed_requests: {
      value: cdktf.booleanToHclTerraform(struct!.requireSignedRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    single_logout: {
      value: cdktf.listMapperHcl(applicationSamlv2ConfigurationLogoutSingleLogoutToHclTerraform, false)(struct!.singleLogout),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSamlv2ConfigurationLogoutSingleLogoutList",
    },
    xml_signature_canonicalization_method: {
      value: cdktf.stringToHclTerraform(struct!.xmlSignatureCanonicalizationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSamlv2ConfigurationLogoutOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSamlv2ConfigurationLogout | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._behavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.behavior = this._behavior;
    }
    if (this._defaultVerificationKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultVerificationKeyId = this._defaultVerificationKeyId;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._requireSignedRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireSignedRequests = this._requireSignedRequests;
    }
    if (this._singleLogout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.singleLogout = this._singleLogout?.internalValue;
    }
    if (this._xmlSignatureCanonicalizationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.xmlSignatureCanonicalizationMethod = this._xmlSignatureCanonicalizationMethod;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSamlv2ConfigurationLogout | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._behavior = undefined;
      this._defaultVerificationKeyId = undefined;
      this._keyId = undefined;
      this._requireSignedRequests = undefined;
      this._singleLogout.internalValue = undefined;
      this._xmlSignatureCanonicalizationMethod = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._behavior = value.behavior;
      this._defaultVerificationKeyId = value.defaultVerificationKeyId;
      this._keyId = value.keyId;
      this._requireSignedRequests = value.requireSignedRequests;
      this._singleLogout.internalValue = value.singleLogout;
      this._xmlSignatureCanonicalizationMethod = value.xmlSignatureCanonicalizationMethod;
    }
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

  // default_verification_key_id - computed: true, optional: true, required: false
  private _defaultVerificationKeyId?: string; 
  public get defaultVerificationKeyId() {
    return this.getStringAttribute('default_verification_key_id');
  }
  public set defaultVerificationKeyId(value: string) {
    this._defaultVerificationKeyId = value;
  }
  public resetDefaultVerificationKeyId() {
    this._defaultVerificationKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVerificationKeyIdInput() {
    return this._defaultVerificationKeyId;
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // require_signed_requests - computed: true, optional: true, required: false
  private _requireSignedRequests?: boolean | cdktf.IResolvable; 
  public get requireSignedRequests() {
    return this.getBooleanAttribute('require_signed_requests');
  }
  public set requireSignedRequests(value: boolean | cdktf.IResolvable) {
    this._requireSignedRequests = value;
  }
  public resetRequireSignedRequests() {
    this._requireSignedRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireSignedRequestsInput() {
    return this._requireSignedRequests;
  }

  // single_logout - computed: true, optional: true, required: false
  private _singleLogout = new ApplicationSamlv2ConfigurationLogoutSingleLogoutList(this, "single_logout", false);
  public get singleLogout() {
    return this._singleLogout;
  }
  public putSingleLogout(value: ApplicationSamlv2ConfigurationLogoutSingleLogout[] | cdktf.IResolvable) {
    this._singleLogout.internalValue = value;
  }
  public resetSingleLogout() {
    this._singleLogout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get singleLogoutInput() {
    return this._singleLogout.internalValue;
  }

  // xml_signature_canonicalization_method - computed: true, optional: true, required: false
  private _xmlSignatureCanonicalizationMethod?: string; 
  public get xmlSignatureCanonicalizationMethod() {
    return this.getStringAttribute('xml_signature_canonicalization_method');
  }
  public set xmlSignatureCanonicalizationMethod(value: string) {
    this._xmlSignatureCanonicalizationMethod = value;
  }
  public resetXmlSignatureCanonicalizationMethod() {
    this._xmlSignatureCanonicalizationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlSignatureCanonicalizationMethodInput() {
    return this._xmlSignatureCanonicalizationMethod;
  }
}

export class ApplicationSamlv2ConfigurationLogoutList extends cdktf.ComplexList {
  public internalValue? : ApplicationSamlv2ConfigurationLogout[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSamlv2ConfigurationLogoutOutputReference {
    return new ApplicationSamlv2ConfigurationLogoutOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationSamlv2Configuration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#audience Application#audience}
  */
  readonly audience?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#authorized_redirect_urls Application#authorized_redirect_urls}
  */
  readonly authorizedRedirectUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#callback_url Application#callback_url}
  */
  readonly callbackUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#debug Application#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#default_verification_key_id Application#default_verification_key_id}
  */
  readonly defaultVerificationKeyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#enabled Application#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#issuer Application#issuer}
  */
  readonly issuer?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#key_id Application#key_id}
  */
  readonly keyId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#logout Application#logout}
  */
  readonly logout?: ApplicationSamlv2ConfigurationLogout[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#logout_url Application#logout_url}
  */
  readonly logoutUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#required_signed_requests Application#required_signed_requests}
  */
  readonly requiredSignedRequests?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#xml_signature_canonicalization_method Application#xml_signature_canonicalization_method}
  */
  readonly xmlSignatureCanonicalizationMethod?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#xml_signature_location Application#xml_signature_location}
  */
  readonly xmlSignatureLocation?: string;
}

export function applicationSamlv2ConfigurationToTerraform(struct?: ApplicationSamlv2Configuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    audience: cdktf.stringToTerraform(struct!.audience),
    authorized_redirect_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authorizedRedirectUrls),
    callback_url: cdktf.stringToTerraform(struct!.callbackUrl),
    debug: cdktf.booleanToTerraform(struct!.debug),
    default_verification_key_id: cdktf.stringToTerraform(struct!.defaultVerificationKeyId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    issuer: cdktf.stringToTerraform(struct!.issuer),
    key_id: cdktf.stringToTerraform(struct!.keyId),
    logout: cdktf.listMapper(applicationSamlv2ConfigurationLogoutToTerraform, false)(struct!.logout),
    logout_url: cdktf.stringToTerraform(struct!.logoutUrl),
    required_signed_requests: cdktf.booleanToTerraform(struct!.requiredSignedRequests),
    xml_signature_canonicalization_method: cdktf.stringToTerraform(struct!.xmlSignatureCanonicalizationMethod),
    xml_signature_location: cdktf.stringToTerraform(struct!.xmlSignatureLocation),
  }
}


export function applicationSamlv2ConfigurationToHclTerraform(struct?: ApplicationSamlv2Configuration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    audience: {
      value: cdktf.stringToHclTerraform(struct!.audience),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authorized_redirect_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authorizedRedirectUrls),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    callback_url: {
      value: cdktf.stringToHclTerraform(struct!.callbackUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug: {
      value: cdktf.booleanToHclTerraform(struct!.debug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    default_verification_key_id: {
      value: cdktf.stringToHclTerraform(struct!.defaultVerificationKeyId),
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
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key_id: {
      value: cdktf.stringToHclTerraform(struct!.keyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logout: {
      value: cdktf.listMapperHcl(applicationSamlv2ConfigurationLogoutToHclTerraform, false)(struct!.logout),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationSamlv2ConfigurationLogoutList",
    },
    logout_url: {
      value: cdktf.stringToHclTerraform(struct!.logoutUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    required_signed_requests: {
      value: cdktf.booleanToHclTerraform(struct!.requiredSignedRequests),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    xml_signature_canonicalization_method: {
      value: cdktf.stringToHclTerraform(struct!.xmlSignatureCanonicalizationMethod),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    xml_signature_location: {
      value: cdktf.stringToHclTerraform(struct!.xmlSignatureLocation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationSamlv2ConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ApplicationSamlv2Configuration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._audience !== undefined) {
      hasAnyValues = true;
      internalValueResult.audience = this._audience;
    }
    if (this._authorizedRedirectUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedRedirectUrls = this._authorizedRedirectUrls;
    }
    if (this._callbackUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.callbackUrl = this._callbackUrl;
    }
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
    }
    if (this._defaultVerificationKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultVerificationKeyId = this._defaultVerificationKeyId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    if (this._keyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyId = this._keyId;
    }
    if (this._logout?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.logout = this._logout?.internalValue;
    }
    if (this._logoutUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutUrl = this._logoutUrl;
    }
    if (this._requiredSignedRequests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requiredSignedRequests = this._requiredSignedRequests;
    }
    if (this._xmlSignatureCanonicalizationMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.xmlSignatureCanonicalizationMethod = this._xmlSignatureCanonicalizationMethod;
    }
    if (this._xmlSignatureLocation !== undefined) {
      hasAnyValues = true;
      internalValueResult.xmlSignatureLocation = this._xmlSignatureLocation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationSamlv2Configuration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._audience = undefined;
      this._authorizedRedirectUrls = undefined;
      this._callbackUrl = undefined;
      this._debug = undefined;
      this._defaultVerificationKeyId = undefined;
      this._enabled = undefined;
      this._issuer = undefined;
      this._keyId = undefined;
      this._logout.internalValue = undefined;
      this._logoutUrl = undefined;
      this._requiredSignedRequests = undefined;
      this._xmlSignatureCanonicalizationMethod = undefined;
      this._xmlSignatureLocation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._audience = value.audience;
      this._authorizedRedirectUrls = value.authorizedRedirectUrls;
      this._callbackUrl = value.callbackUrl;
      this._debug = value.debug;
      this._defaultVerificationKeyId = value.defaultVerificationKeyId;
      this._enabled = value.enabled;
      this._issuer = value.issuer;
      this._keyId = value.keyId;
      this._logout.internalValue = value.logout;
      this._logoutUrl = value.logoutUrl;
      this._requiredSignedRequests = value.requiredSignedRequests;
      this._xmlSignatureCanonicalizationMethod = value.xmlSignatureCanonicalizationMethod;
      this._xmlSignatureLocation = value.xmlSignatureLocation;
    }
  }

  // audience - computed: true, optional: true, required: false
  private _audience?: string; 
  public get audience() {
    return this.getStringAttribute('audience');
  }
  public set audience(value: string) {
    this._audience = value;
  }
  public resetAudience() {
    this._audience = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get audienceInput() {
    return this._audience;
  }

  // authorized_redirect_urls - computed: true, optional: true, required: false
  private _authorizedRedirectUrls?: string[]; 
  public get authorizedRedirectUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('authorized_redirect_urls'));
  }
  public set authorizedRedirectUrls(value: string[]) {
    this._authorizedRedirectUrls = value;
  }
  public resetAuthorizedRedirectUrls() {
    this._authorizedRedirectUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedRedirectUrlsInput() {
    return this._authorizedRedirectUrls;
  }

  // callback_url - computed: true, optional: true, required: false
  private _callbackUrl?: string; 
  public get callbackUrl() {
    return this.getStringAttribute('callback_url');
  }
  public set callbackUrl(value: string) {
    this._callbackUrl = value;
  }
  public resetCallbackUrl() {
    this._callbackUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callbackUrlInput() {
    return this._callbackUrl;
  }

  // debug - computed: true, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // default_verification_key_id - computed: true, optional: true, required: false
  private _defaultVerificationKeyId?: string; 
  public get defaultVerificationKeyId() {
    return this.getStringAttribute('default_verification_key_id');
  }
  public set defaultVerificationKeyId(value: string) {
    this._defaultVerificationKeyId = value;
  }
  public resetDefaultVerificationKeyId() {
    this._defaultVerificationKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultVerificationKeyIdInput() {
    return this._defaultVerificationKeyId;
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

  // issuer - computed: true, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }

  // key_id - computed: true, optional: true, required: false
  private _keyId?: string; 
  public get keyId() {
    return this.getStringAttribute('key_id');
  }
  public set keyId(value: string) {
    this._keyId = value;
  }
  public resetKeyId() {
    this._keyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyIdInput() {
    return this._keyId;
  }

  // logout - computed: true, optional: true, required: false
  private _logout = new ApplicationSamlv2ConfigurationLogoutList(this, "logout", false);
  public get logout() {
    return this._logout;
  }
  public putLogout(value: ApplicationSamlv2ConfigurationLogout[] | cdktf.IResolvable) {
    this._logout.internalValue = value;
  }
  public resetLogout() {
    this._logout.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutInput() {
    return this._logout.internalValue;
  }

  // logout_url - computed: true, optional: true, required: false
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

  // required_signed_requests - computed: true, optional: true, required: false
  private _requiredSignedRequests?: boolean | cdktf.IResolvable; 
  public get requiredSignedRequests() {
    return this.getBooleanAttribute('required_signed_requests');
  }
  public set requiredSignedRequests(value: boolean | cdktf.IResolvable) {
    this._requiredSignedRequests = value;
  }
  public resetRequiredSignedRequests() {
    this._requiredSignedRequests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredSignedRequestsInput() {
    return this._requiredSignedRequests;
  }

  // xml_signature_canonicalization_method - computed: true, optional: true, required: false
  private _xmlSignatureCanonicalizationMethod?: string; 
  public get xmlSignatureCanonicalizationMethod() {
    return this.getStringAttribute('xml_signature_canonicalization_method');
  }
  public set xmlSignatureCanonicalizationMethod(value: string) {
    this._xmlSignatureCanonicalizationMethod = value;
  }
  public resetXmlSignatureCanonicalizationMethod() {
    this._xmlSignatureCanonicalizationMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlSignatureCanonicalizationMethodInput() {
    return this._xmlSignatureCanonicalizationMethod;
  }

  // xml_signature_location - computed: true, optional: true, required: false
  private _xmlSignatureLocation?: string; 
  public get xmlSignatureLocation() {
    return this.getStringAttribute('xml_signature_location');
  }
  public set xmlSignatureLocation(value: string) {
    this._xmlSignatureLocation = value;
  }
  public resetXmlSignatureLocation() {
    this._xmlSignatureLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get xmlSignatureLocationInput() {
    return this._xmlSignatureLocation;
  }
}

export class ApplicationSamlv2ConfigurationList extends cdktf.ComplexList {
  public internalValue? : ApplicationSamlv2Configuration[] | cdktf.IResolvable

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
  public get(index: number): ApplicationSamlv2ConfigurationOutputReference {
    return new ApplicationSamlv2ConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ApplicationJwtConfiguration {
  /**
  * The Id of the signing key used to sign the access token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#access_token_id Application#access_token_id}
  */
  readonly accessTokenId?: string;
  /**
  * Indicates if this application is using the JWT configuration defined here or the global JWT configuration defined by the System Configuration. If this is false the signing algorithm configured in the System Configuration will be used. If true the signing algorithm defined in this application will be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#enabled Application#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The Id of the signing key used to sign the Id token.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#id_token_key_id Application#id_token_key_id}
  */
  readonly idTokenKeyId?: string;
  /**
  * The length of time in minutes the JWT refresh token will live before it is expired and is not able to be exchanged for a JWT.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#refresh_token_ttl_minutes Application#refresh_token_ttl_minutes}
  */
  readonly refreshTokenTtlMinutes?: number;
  /**
  * The length of time in seconds the JWT will live before it is expired and no longer valid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#ttl_seconds Application#ttl_seconds}
  */
  readonly ttlSeconds?: number;
}

export function applicationJwtConfigurationToTerraform(struct?: ApplicationJwtConfigurationOutputReference | ApplicationJwtConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    access_token_id: cdktf.stringToTerraform(struct!.accessTokenId),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    id_token_key_id: cdktf.stringToTerraform(struct!.idTokenKeyId),
    refresh_token_ttl_minutes: cdktf.numberToTerraform(struct!.refreshTokenTtlMinutes),
    ttl_seconds: cdktf.numberToTerraform(struct!.ttlSeconds),
  }
}


export function applicationJwtConfigurationToHclTerraform(struct?: ApplicationJwtConfigurationOutputReference | ApplicationJwtConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    access_token_id: {
      value: cdktf.stringToHclTerraform(struct!.accessTokenId),
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
    id_token_key_id: {
      value: cdktf.stringToHclTerraform(struct!.idTokenKeyId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    refresh_token_ttl_minutes: {
      value: cdktf.numberToHclTerraform(struct!.refreshTokenTtlMinutes),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ttl_seconds: {
      value: cdktf.numberToHclTerraform(struct!.ttlSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationJwtConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationJwtConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._accessTokenId !== undefined) {
      hasAnyValues = true;
      internalValueResult.accessTokenId = this._accessTokenId;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._idTokenKeyId !== undefined) {
      hasAnyValues = true;
      internalValueResult.idTokenKeyId = this._idTokenKeyId;
    }
    if (this._refreshTokenTtlMinutes !== undefined) {
      hasAnyValues = true;
      internalValueResult.refreshTokenTtlMinutes = this._refreshTokenTtlMinutes;
    }
    if (this._ttlSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.ttlSeconds = this._ttlSeconds;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationJwtConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._accessTokenId = undefined;
      this._enabled = undefined;
      this._idTokenKeyId = undefined;
      this._refreshTokenTtlMinutes = undefined;
      this._ttlSeconds = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._accessTokenId = value.accessTokenId;
      this._enabled = value.enabled;
      this._idTokenKeyId = value.idTokenKeyId;
      this._refreshTokenTtlMinutes = value.refreshTokenTtlMinutes;
      this._ttlSeconds = value.ttlSeconds;
    }
  }

  // access_token_id - computed: false, optional: true, required: false
  private _accessTokenId?: string; 
  public get accessTokenId() {
    return this.getStringAttribute('access_token_id');
  }
  public set accessTokenId(value: string) {
    this._accessTokenId = value;
  }
  public resetAccessTokenId() {
    this._accessTokenId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessTokenIdInput() {
    return this._accessTokenId;
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

  // id_token_key_id - computed: false, optional: true, required: false
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

  // refresh_token_ttl_minutes - computed: false, optional: true, required: false
  private _refreshTokenTtlMinutes?: number; 
  public get refreshTokenTtlMinutes() {
    return this.getNumberAttribute('refresh_token_ttl_minutes');
  }
  public set refreshTokenTtlMinutes(value: number) {
    this._refreshTokenTtlMinutes = value;
  }
  public resetRefreshTokenTtlMinutes() {
    this._refreshTokenTtlMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refreshTokenTtlMinutesInput() {
    return this._refreshTokenTtlMinutes;
  }

  // ttl_seconds - computed: false, optional: true, required: false
  private _ttlSeconds?: number; 
  public get ttlSeconds() {
    return this.getNumberAttribute('ttl_seconds');
  }
  public set ttlSeconds(value: number) {
    this._ttlSeconds = value;
  }
  public resetTtlSeconds() {
    this._ttlSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ttlSecondsInput() {
    return this._ttlSeconds;
  }
}
export interface ApplicationLoginConfiguration {
  /**
  * Indicates if a JWT may be refreshed using a Refresh Token for this application. This configuration is separate from issuing new Refresh Tokens which is controlled by the generateRefreshTokens parameter. This configuration indicates specifically if an existing Refresh Token may be used to request a new JWT using the Refresh API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#allow_token_refresh Application#allow_token_refresh}
  */
  readonly allowTokenRefresh?: boolean | cdktf.IResolvable;
  /**
  * Indicates if a Refresh Token should be issued from the Login API
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#generate_refresh_tokens Application#generate_refresh_tokens}
  */
  readonly generateRefreshTokens?: boolean | cdktf.IResolvable;
  /**
  * Indicates if the Login API should require an API key. If you set this value to false and your FusionAuth API is on a public network, anyone may attempt to use the Login API.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#require_authentication Application#require_authentication}
  */
  readonly requireAuthentication?: boolean | cdktf.IResolvable;
}

export function applicationLoginConfigurationToTerraform(struct?: ApplicationLoginConfigurationOutputReference | ApplicationLoginConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_token_refresh: cdktf.booleanToTerraform(struct!.allowTokenRefresh),
    generate_refresh_tokens: cdktf.booleanToTerraform(struct!.generateRefreshTokens),
    require_authentication: cdktf.booleanToTerraform(struct!.requireAuthentication),
  }
}


export function applicationLoginConfigurationToHclTerraform(struct?: ApplicationLoginConfigurationOutputReference | ApplicationLoginConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_token_refresh: {
      value: cdktf.booleanToHclTerraform(struct!.allowTokenRefresh),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    generate_refresh_tokens: {
      value: cdktf.booleanToHclTerraform(struct!.generateRefreshTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
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

export class ApplicationLoginConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationLoginConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowTokenRefresh !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowTokenRefresh = this._allowTokenRefresh;
    }
    if (this._generateRefreshTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateRefreshTokens = this._generateRefreshTokens;
    }
    if (this._requireAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireAuthentication = this._requireAuthentication;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationLoginConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowTokenRefresh = undefined;
      this._generateRefreshTokens = undefined;
      this._requireAuthentication = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowTokenRefresh = value.allowTokenRefresh;
      this._generateRefreshTokens = value.generateRefreshTokens;
      this._requireAuthentication = value.requireAuthentication;
    }
  }

  // allow_token_refresh - computed: false, optional: true, required: false
  private _allowTokenRefresh?: boolean | cdktf.IResolvable; 
  public get allowTokenRefresh() {
    return this.getBooleanAttribute('allow_token_refresh');
  }
  public set allowTokenRefresh(value: boolean | cdktf.IResolvable) {
    this._allowTokenRefresh = value;
  }
  public resetAllowTokenRefresh() {
    this._allowTokenRefresh = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowTokenRefreshInput() {
    return this._allowTokenRefresh;
  }

  // generate_refresh_tokens - computed: false, optional: true, required: false
  private _generateRefreshTokens?: boolean | cdktf.IResolvable; 
  public get generateRefreshTokens() {
    return this.getBooleanAttribute('generate_refresh_tokens');
  }
  public set generateRefreshTokens(value: boolean | cdktf.IResolvable) {
    this._generateRefreshTokens = value;
  }
  public resetGenerateRefreshTokens() {
    this._generateRefreshTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateRefreshTokensInput() {
    return this._generateRefreshTokens;
  }

  // require_authentication - computed: false, optional: true, required: false
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
export interface ApplicationOauthConfiguration {
  /**
  * An array of URLs that are the authorized origins for FusionAuth OAuth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#authorized_origin_urls Application#authorized_origin_urls}
  */
  readonly authorizedOriginUrls?: string[];
  /**
  * An array of URLs that are the authorized redirect URLs for FusionAuth OAuth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#authorized_redirect_urls Application#authorized_redirect_urls}
  */
  readonly authorizedRedirectUrls?: string[];
  /**
  * Determines whether wildcard expressions will be allowed in the authorized_redirect_urls and authorized_origin_urls.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#authorized_url_validation_policy Application#authorized_url_validation_policy}
  */
  readonly authorizedUrlValidationPolicy?: string;
  /**
  * Determines the client authentication requirements for the OAuth 2.0 Token endpoint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#client_authentication_policy Application#client_authentication_policy}
  */
  readonly clientAuthenticationPolicy?: string;
  /**
  * The OAuth 2.0 client id. If you leave this blank during a POST, a client id will be generated for you. If you leave this blank during PUT, the previous value will be maintained. For both POST and PUT you can provide a value and it will be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#client_id Application#client_id}
  */
  readonly clientId?: string;
  /**
  * The OAuth 2.0 client secret. If you leave this blank during a POST, a secure secret will be generated for you. If you leave this blank during PUT, the previous value will be maintained. For both POST and PUT you can provide a value and it will be stored.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#client_secret Application#client_secret}
  */
  readonly clientSecret?: string;
  /**
  * Whether or not FusionAuth will log a debug Event Log. This is particular useful for debugging the authorization code exchange with the Token endpoint during an Authorization Code grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#debug Application#debug}
  */
  readonly debug?: boolean | cdktf.IResolvable;
  /**
  * The device verification URL to be used with the Device Code grant type, this field is required when device_code is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#device_verification_url Application#device_verification_url}
  */
  readonly deviceVerificationUrl?: string;
  /**
  * The enabled grants for this application. In order to utilize a particular grant with the OAuth 2.0 endpoints you must have enabled the grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#enabled_grants Application#enabled_grants}
  */
  readonly enabledGrants?: string[];
  /**
  * Determines if the OAuth 2.0 Token endpoint will generate a refresh token when the offline_access scope is requested.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#generate_refresh_tokens Application#generate_refresh_tokens}
  */
  readonly generateRefreshTokens?: boolean | cdktf.IResolvable;
  /**
  * Behavior when /oauth2/logout is called.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#logout_behavior Application#logout_behavior}
  */
  readonly logoutBehavior?: string;
  /**
  * The logout URL for the Application. FusionAuth will redirect to this URL after the user logs out of OAuth.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#logout_url Application#logout_url}
  */
  readonly logoutUrl?: string;
  /**
  * Determines the PKCE requirements when using the authorization code grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#proof_key_for_code_exchange_policy Application#proof_key_for_code_exchange_policy}
  */
  readonly proofKeyForCodeExchangePolicy?: string;
  /**
  * Determines if the OAuth 2.0 Token endpoint requires client authentication. If this is enabled, the client must provide client credentials when using the Token endpoint. The client_id and client_secret may be provided using a Basic Authorization HTTP header, or by sending these parameters in the request body using POST data.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#require_client_authentication Application#require_client_authentication}
  */
  readonly requireClientAuthentication?: boolean | cdktf.IResolvable;
  /**
  * When enabled the user will be required to be registered, or complete registration before redirecting to the configured callback in the authorization code grant or the implicit grant. This configuration does not currently apply to any other grant.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#require_registration Application#require_registration}
  */
  readonly requireRegistration?: boolean | cdktf.IResolvable;
}

export function applicationOauthConfigurationToTerraform(struct?: ApplicationOauthConfigurationOutputReference | ApplicationOauthConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authorized_origin_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authorizedOriginUrls),
    authorized_redirect_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.authorizedRedirectUrls),
    authorized_url_validation_policy: cdktf.stringToTerraform(struct!.authorizedUrlValidationPolicy),
    client_authentication_policy: cdktf.stringToTerraform(struct!.clientAuthenticationPolicy),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: cdktf.stringToTerraform(struct!.clientSecret),
    debug: cdktf.booleanToTerraform(struct!.debug),
    device_verification_url: cdktf.stringToTerraform(struct!.deviceVerificationUrl),
    enabled_grants: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.enabledGrants),
    generate_refresh_tokens: cdktf.booleanToTerraform(struct!.generateRefreshTokens),
    logout_behavior: cdktf.stringToTerraform(struct!.logoutBehavior),
    logout_url: cdktf.stringToTerraform(struct!.logoutUrl),
    proof_key_for_code_exchange_policy: cdktf.stringToTerraform(struct!.proofKeyForCodeExchangePolicy),
    require_client_authentication: cdktf.booleanToTerraform(struct!.requireClientAuthentication),
    require_registration: cdktf.booleanToTerraform(struct!.requireRegistration),
  }
}


export function applicationOauthConfigurationToHclTerraform(struct?: ApplicationOauthConfigurationOutputReference | ApplicationOauthConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authorized_origin_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authorizedOriginUrls),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    authorized_redirect_urls: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.authorizedRedirectUrls),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    authorized_url_validation_policy: {
      value: cdktf.stringToHclTerraform(struct!.authorizedUrlValidationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_authentication_policy: {
      value: cdktf.stringToHclTerraform(struct!.clientAuthenticationPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: cdktf.stringToHclTerraform(struct!.clientSecret),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    debug: {
      value: cdktf.booleanToHclTerraform(struct!.debug),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    device_verification_url: {
      value: cdktf.stringToHclTerraform(struct!.deviceVerificationUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enabled_grants: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.enabledGrants),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    generate_refresh_tokens: {
      value: cdktf.booleanToHclTerraform(struct!.generateRefreshTokens),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    logout_behavior: {
      value: cdktf.stringToHclTerraform(struct!.logoutBehavior),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logout_url: {
      value: cdktf.stringToHclTerraform(struct!.logoutUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    proof_key_for_code_exchange_policy: {
      value: cdktf.stringToHclTerraform(struct!.proofKeyForCodeExchangePolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    require_client_authentication: {
      value: cdktf.booleanToHclTerraform(struct!.requireClientAuthentication),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    require_registration: {
      value: cdktf.booleanToHclTerraform(struct!.requireRegistration),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationOauthConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationOauthConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authorizedOriginUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedOriginUrls = this._authorizedOriginUrls;
    }
    if (this._authorizedRedirectUrls !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedRedirectUrls = this._authorizedRedirectUrls;
    }
    if (this._authorizedUrlValidationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.authorizedUrlValidationPolicy = this._authorizedUrlValidationPolicy;
    }
    if (this._clientAuthenticationPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientAuthenticationPolicy = this._clientAuthenticationPolicy;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret;
    }
    if (this._debug !== undefined) {
      hasAnyValues = true;
      internalValueResult.debug = this._debug;
    }
    if (this._deviceVerificationUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.deviceVerificationUrl = this._deviceVerificationUrl;
    }
    if (this._enabledGrants !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabledGrants = this._enabledGrants;
    }
    if (this._generateRefreshTokens !== undefined) {
      hasAnyValues = true;
      internalValueResult.generateRefreshTokens = this._generateRefreshTokens;
    }
    if (this._logoutBehavior !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutBehavior = this._logoutBehavior;
    }
    if (this._logoutUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.logoutUrl = this._logoutUrl;
    }
    if (this._proofKeyForCodeExchangePolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.proofKeyForCodeExchangePolicy = this._proofKeyForCodeExchangePolicy;
    }
    if (this._requireClientAuthentication !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireClientAuthentication = this._requireClientAuthentication;
    }
    if (this._requireRegistration !== undefined) {
      hasAnyValues = true;
      internalValueResult.requireRegistration = this._requireRegistration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationOauthConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authorizedOriginUrls = undefined;
      this._authorizedRedirectUrls = undefined;
      this._authorizedUrlValidationPolicy = undefined;
      this._clientAuthenticationPolicy = undefined;
      this._clientId = undefined;
      this._clientSecret = undefined;
      this._debug = undefined;
      this._deviceVerificationUrl = undefined;
      this._enabledGrants = undefined;
      this._generateRefreshTokens = undefined;
      this._logoutBehavior = undefined;
      this._logoutUrl = undefined;
      this._proofKeyForCodeExchangePolicy = undefined;
      this._requireClientAuthentication = undefined;
      this._requireRegistration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authorizedOriginUrls = value.authorizedOriginUrls;
      this._authorizedRedirectUrls = value.authorizedRedirectUrls;
      this._authorizedUrlValidationPolicy = value.authorizedUrlValidationPolicy;
      this._clientAuthenticationPolicy = value.clientAuthenticationPolicy;
      this._clientId = value.clientId;
      this._clientSecret = value.clientSecret;
      this._debug = value.debug;
      this._deviceVerificationUrl = value.deviceVerificationUrl;
      this._enabledGrants = value.enabledGrants;
      this._generateRefreshTokens = value.generateRefreshTokens;
      this._logoutBehavior = value.logoutBehavior;
      this._logoutUrl = value.logoutUrl;
      this._proofKeyForCodeExchangePolicy = value.proofKeyForCodeExchangePolicy;
      this._requireClientAuthentication = value.requireClientAuthentication;
      this._requireRegistration = value.requireRegistration;
    }
  }

  // authorized_origin_urls - computed: false, optional: true, required: false
  private _authorizedOriginUrls?: string[]; 
  public get authorizedOriginUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('authorized_origin_urls'));
  }
  public set authorizedOriginUrls(value: string[]) {
    this._authorizedOriginUrls = value;
  }
  public resetAuthorizedOriginUrls() {
    this._authorizedOriginUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedOriginUrlsInput() {
    return this._authorizedOriginUrls;
  }

  // authorized_redirect_urls - computed: false, optional: true, required: false
  private _authorizedRedirectUrls?: string[]; 
  public get authorizedRedirectUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('authorized_redirect_urls'));
  }
  public set authorizedRedirectUrls(value: string[]) {
    this._authorizedRedirectUrls = value;
  }
  public resetAuthorizedRedirectUrls() {
    this._authorizedRedirectUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedRedirectUrlsInput() {
    return this._authorizedRedirectUrls;
  }

  // authorized_url_validation_policy - computed: false, optional: true, required: false
  private _authorizedUrlValidationPolicy?: string; 
  public get authorizedUrlValidationPolicy() {
    return this.getStringAttribute('authorized_url_validation_policy');
  }
  public set authorizedUrlValidationPolicy(value: string) {
    this._authorizedUrlValidationPolicy = value;
  }
  public resetAuthorizedUrlValidationPolicy() {
    this._authorizedUrlValidationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authorizedUrlValidationPolicyInput() {
    return this._authorizedUrlValidationPolicy;
  }

  // client_authentication_policy - computed: false, optional: true, required: false
  private _clientAuthenticationPolicy?: string; 
  public get clientAuthenticationPolicy() {
    return this.getStringAttribute('client_authentication_policy');
  }
  public set clientAuthenticationPolicy(value: string) {
    this._clientAuthenticationPolicy = value;
  }
  public resetClientAuthenticationPolicy() {
    this._clientAuthenticationPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientAuthenticationPolicyInput() {
    return this._clientAuthenticationPolicy;
  }

  // client_id - computed: true, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: true, optional: true, required: false
  private _clientSecret?: string; 
  public get clientSecret() {
    return this.getStringAttribute('client_secret');
  }
  public set clientSecret(value: string) {
    this._clientSecret = value;
  }
  public resetClientSecret() {
    this._clientSecret = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret;
  }

  // debug - computed: false, optional: true, required: false
  private _debug?: boolean | cdktf.IResolvable; 
  public get debug() {
    return this.getBooleanAttribute('debug');
  }
  public set debug(value: boolean | cdktf.IResolvable) {
    this._debug = value;
  }
  public resetDebug() {
    this._debug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugInput() {
    return this._debug;
  }

  // device_verification_url - computed: false, optional: true, required: false
  private _deviceVerificationUrl?: string; 
  public get deviceVerificationUrl() {
    return this.getStringAttribute('device_verification_url');
  }
  public set deviceVerificationUrl(value: string) {
    this._deviceVerificationUrl = value;
  }
  public resetDeviceVerificationUrl() {
    this._deviceVerificationUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVerificationUrlInput() {
    return this._deviceVerificationUrl;
  }

  // enabled_grants - computed: false, optional: true, required: false
  private _enabledGrants?: string[]; 
  public get enabledGrants() {
    return cdktf.Fn.tolist(this.getListAttribute('enabled_grants'));
  }
  public set enabledGrants(value: string[]) {
    this._enabledGrants = value;
  }
  public resetEnabledGrants() {
    this._enabledGrants = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledGrantsInput() {
    return this._enabledGrants;
  }

  // generate_refresh_tokens - computed: false, optional: true, required: false
  private _generateRefreshTokens?: boolean | cdktf.IResolvable; 
  public get generateRefreshTokens() {
    return this.getBooleanAttribute('generate_refresh_tokens');
  }
  public set generateRefreshTokens(value: boolean | cdktf.IResolvable) {
    this._generateRefreshTokens = value;
  }
  public resetGenerateRefreshTokens() {
    this._generateRefreshTokens = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get generateRefreshTokensInput() {
    return this._generateRefreshTokens;
  }

  // logout_behavior - computed: false, optional: true, required: false
  private _logoutBehavior?: string; 
  public get logoutBehavior() {
    return this.getStringAttribute('logout_behavior');
  }
  public set logoutBehavior(value: string) {
    this._logoutBehavior = value;
  }
  public resetLogoutBehavior() {
    this._logoutBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutBehaviorInput() {
    return this._logoutBehavior;
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

  // proof_key_for_code_exchange_policy - computed: false, optional: true, required: false
  private _proofKeyForCodeExchangePolicy?: string; 
  public get proofKeyForCodeExchangePolicy() {
    return this.getStringAttribute('proof_key_for_code_exchange_policy');
  }
  public set proofKeyForCodeExchangePolicy(value: string) {
    this._proofKeyForCodeExchangePolicy = value;
  }
  public resetProofKeyForCodeExchangePolicy() {
    this._proofKeyForCodeExchangePolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get proofKeyForCodeExchangePolicyInput() {
    return this._proofKeyForCodeExchangePolicy;
  }

  // require_client_authentication - computed: false, optional: true, required: false
  private _requireClientAuthentication?: boolean | cdktf.IResolvable; 
  public get requireClientAuthentication() {
    return this.getBooleanAttribute('require_client_authentication');
  }
  public set requireClientAuthentication(value: boolean | cdktf.IResolvable) {
    this._requireClientAuthentication = value;
  }
  public resetRequireClientAuthentication() {
    this._requireClientAuthentication = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireClientAuthenticationInput() {
    return this._requireClientAuthentication;
  }

  // require_registration - computed: false, optional: true, required: false
  private _requireRegistration?: boolean | cdktf.IResolvable; 
  public get requireRegistration() {
    return this.getBooleanAttribute('require_registration');
  }
  public set requireRegistration(value: boolean | cdktf.IResolvable) {
    this._requireRegistration = value;
  }
  public resetRequireRegistration() {
    this._requireRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requireRegistrationInput() {
    return this._requireRegistration;
  }
}
export interface ApplicationRegistrationConfigurationBirthDate {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#enabled Application#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#required Application#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
}

export function applicationRegistrationConfigurationBirthDateToTerraform(struct?: ApplicationRegistrationConfigurationBirthDateOutputReference | ApplicationRegistrationConfigurationBirthDate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    required: cdktf.booleanToTerraform(struct!.required),
  }
}


export function applicationRegistrationConfigurationBirthDateToHclTerraform(struct?: ApplicationRegistrationConfigurationBirthDateOutputReference | ApplicationRegistrationConfigurationBirthDate): any {
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
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationRegistrationConfigurationBirthDateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationRegistrationConfigurationBirthDate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationRegistrationConfigurationBirthDate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._required = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._required = value.required;
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }
}
export interface ApplicationRegistrationConfigurationFirstName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#enabled Application#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#required Application#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
}

export function applicationRegistrationConfigurationFirstNameToTerraform(struct?: ApplicationRegistrationConfigurationFirstNameOutputReference | ApplicationRegistrationConfigurationFirstName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    required: cdktf.booleanToTerraform(struct!.required),
  }
}


export function applicationRegistrationConfigurationFirstNameToHclTerraform(struct?: ApplicationRegistrationConfigurationFirstNameOutputReference | ApplicationRegistrationConfigurationFirstName): any {
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
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationRegistrationConfigurationFirstNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationRegistrationConfigurationFirstName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationRegistrationConfigurationFirstName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._required = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._required = value.required;
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }
}
export interface ApplicationRegistrationConfigurationFullName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#enabled Application#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#required Application#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
}

export function applicationRegistrationConfigurationFullNameToTerraform(struct?: ApplicationRegistrationConfigurationFullNameOutputReference | ApplicationRegistrationConfigurationFullName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    required: cdktf.booleanToTerraform(struct!.required),
  }
}


export function applicationRegistrationConfigurationFullNameToHclTerraform(struct?: ApplicationRegistrationConfigurationFullNameOutputReference | ApplicationRegistrationConfigurationFullName): any {
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
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationRegistrationConfigurationFullNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationRegistrationConfigurationFullName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationRegistrationConfigurationFullName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._required = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._required = value.required;
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }
}
export interface ApplicationRegistrationConfigurationLastName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#enabled Application#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#required Application#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
}

export function applicationRegistrationConfigurationLastNameToTerraform(struct?: ApplicationRegistrationConfigurationLastNameOutputReference | ApplicationRegistrationConfigurationLastName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    required: cdktf.booleanToTerraform(struct!.required),
  }
}


export function applicationRegistrationConfigurationLastNameToHclTerraform(struct?: ApplicationRegistrationConfigurationLastNameOutputReference | ApplicationRegistrationConfigurationLastName): any {
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
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationRegistrationConfigurationLastNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationRegistrationConfigurationLastName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationRegistrationConfigurationLastName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._required = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._required = value.required;
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }
}
export interface ApplicationRegistrationConfigurationMiddleName {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#enabled Application#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#required Application#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
}

export function applicationRegistrationConfigurationMiddleNameToTerraform(struct?: ApplicationRegistrationConfigurationMiddleNameOutputReference | ApplicationRegistrationConfigurationMiddleName): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    required: cdktf.booleanToTerraform(struct!.required),
  }
}


export function applicationRegistrationConfigurationMiddleNameToHclTerraform(struct?: ApplicationRegistrationConfigurationMiddleNameOutputReference | ApplicationRegistrationConfigurationMiddleName): any {
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
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationRegistrationConfigurationMiddleNameOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationRegistrationConfigurationMiddleName | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationRegistrationConfigurationMiddleName | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._required = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._required = value.required;
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }
}
export interface ApplicationRegistrationConfigurationMobilePhone {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#enabled Application#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#required Application#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
}

export function applicationRegistrationConfigurationMobilePhoneToTerraform(struct?: ApplicationRegistrationConfigurationMobilePhoneOutputReference | ApplicationRegistrationConfigurationMobilePhone): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    required: cdktf.booleanToTerraform(struct!.required),
  }
}


export function applicationRegistrationConfigurationMobilePhoneToHclTerraform(struct?: ApplicationRegistrationConfigurationMobilePhoneOutputReference | ApplicationRegistrationConfigurationMobilePhone): any {
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
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationRegistrationConfigurationMobilePhoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationRegistrationConfigurationMobilePhone | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationRegistrationConfigurationMobilePhone | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._required = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._required = value.required;
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }
}
export interface ApplicationRegistrationConfigurationPreferredLanguages {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#enabled Application#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#required Application#required}
  */
  readonly required?: boolean | cdktf.IResolvable;
}

export function applicationRegistrationConfigurationPreferredLanguagesToTerraform(struct?: ApplicationRegistrationConfigurationPreferredLanguagesOutputReference | ApplicationRegistrationConfigurationPreferredLanguages): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    required: cdktf.booleanToTerraform(struct!.required),
  }
}


export function applicationRegistrationConfigurationPreferredLanguagesToHclTerraform(struct?: ApplicationRegistrationConfigurationPreferredLanguagesOutputReference | ApplicationRegistrationConfigurationPreferredLanguages): any {
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
    required: {
      value: cdktf.booleanToHclTerraform(struct!.required),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationRegistrationConfigurationPreferredLanguagesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationRegistrationConfigurationPreferredLanguages | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._required !== undefined) {
      hasAnyValues = true;
      internalValueResult.required = this._required;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationRegistrationConfigurationPreferredLanguages | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._required = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._required = value.required;
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

  // required - computed: false, optional: true, required: false
  private _required?: boolean | cdktf.IResolvable; 
  public get required() {
    return this.getBooleanAttribute('required');
  }
  public set required(value: boolean | cdktf.IResolvable) {
    this._required = value;
  }
  public resetRequired() {
    this._required = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requiredInput() {
    return this._required;
  }
}
export interface ApplicationRegistrationConfiguration {
  /**
  * Determines if the password should be confirmed during self service registration, this means that the user will be required to type the password twice.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#confirm_password Application#confirm_password}
  */
  readonly confirmPassword?: boolean | cdktf.IResolvable;
  /**
  * Determines if self service registration is enabled for this application. When this value is false, you may still use the Registration API, this only affects if the self service option is available during the OAuth 2.0 login.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#enabled Application#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * The Id of an associated Form when using advanced registration configuration type. This field is required when application.registrationConfiguration.type is set to advanced.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#form_id Application#form_id}
  */
  readonly formId?: string;
  /**
  * The unique login Id that will be collected during registration, this value can be email or username. Leaving the default value of email is preferred because an email address is globally unique.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#login_id_type Application#login_id_type}
  */
  readonly loginIdType?: string;
  /**
  * The type of registration flow.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#type Application#type}
  */
  readonly type?: string;
  /**
  * birth_date block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#birth_date Application#birth_date}
  */
  readonly birthDate?: ApplicationRegistrationConfigurationBirthDate;
  /**
  * first_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#first_name Application#first_name}
  */
  readonly firstName?: ApplicationRegistrationConfigurationFirstName;
  /**
  * full_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#full_name Application#full_name}
  */
  readonly fullName?: ApplicationRegistrationConfigurationFullName;
  /**
  * last_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#last_name Application#last_name}
  */
  readonly lastName?: ApplicationRegistrationConfigurationLastName;
  /**
  * middle_name block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#middle_name Application#middle_name}
  */
  readonly middleName?: ApplicationRegistrationConfigurationMiddleName;
  /**
  * mobile_phone block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#mobile_phone Application#mobile_phone}
  */
  readonly mobilePhone?: ApplicationRegistrationConfigurationMobilePhone;
  /**
  * preferred_languages block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#preferred_languages Application#preferred_languages}
  */
  readonly preferredLanguages?: ApplicationRegistrationConfigurationPreferredLanguages;
}

export function applicationRegistrationConfigurationToTerraform(struct?: ApplicationRegistrationConfigurationOutputReference | ApplicationRegistrationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    confirm_password: cdktf.booleanToTerraform(struct!.confirmPassword),
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    form_id: cdktf.stringToTerraform(struct!.formId),
    login_id_type: cdktf.stringToTerraform(struct!.loginIdType),
    type: cdktf.stringToTerraform(struct!.type),
    birth_date: applicationRegistrationConfigurationBirthDateToTerraform(struct!.birthDate),
    first_name: applicationRegistrationConfigurationFirstNameToTerraform(struct!.firstName),
    full_name: applicationRegistrationConfigurationFullNameToTerraform(struct!.fullName),
    last_name: applicationRegistrationConfigurationLastNameToTerraform(struct!.lastName),
    middle_name: applicationRegistrationConfigurationMiddleNameToTerraform(struct!.middleName),
    mobile_phone: applicationRegistrationConfigurationMobilePhoneToTerraform(struct!.mobilePhone),
    preferred_languages: applicationRegistrationConfigurationPreferredLanguagesToTerraform(struct!.preferredLanguages),
  }
}


export function applicationRegistrationConfigurationToHclTerraform(struct?: ApplicationRegistrationConfigurationOutputReference | ApplicationRegistrationConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    confirm_password: {
      value: cdktf.booleanToHclTerraform(struct!.confirmPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    form_id: {
      value: cdktf.stringToHclTerraform(struct!.formId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_id_type: {
      value: cdktf.stringToHclTerraform(struct!.loginIdType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    birth_date: {
      value: applicationRegistrationConfigurationBirthDateToHclTerraform(struct!.birthDate),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationRegistrationConfigurationBirthDateList",
    },
    first_name: {
      value: applicationRegistrationConfigurationFirstNameToHclTerraform(struct!.firstName),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationRegistrationConfigurationFirstNameList",
    },
    full_name: {
      value: applicationRegistrationConfigurationFullNameToHclTerraform(struct!.fullName),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationRegistrationConfigurationFullNameList",
    },
    last_name: {
      value: applicationRegistrationConfigurationLastNameToHclTerraform(struct!.lastName),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationRegistrationConfigurationLastNameList",
    },
    middle_name: {
      value: applicationRegistrationConfigurationMiddleNameToHclTerraform(struct!.middleName),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationRegistrationConfigurationMiddleNameList",
    },
    mobile_phone: {
      value: applicationRegistrationConfigurationMobilePhoneToHclTerraform(struct!.mobilePhone),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationRegistrationConfigurationMobilePhoneList",
    },
    preferred_languages: {
      value: applicationRegistrationConfigurationPreferredLanguagesToHclTerraform(struct!.preferredLanguages),
      isBlock: true,
      type: "list",
      storageClassType: "ApplicationRegistrationConfigurationPreferredLanguagesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ApplicationRegistrationConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationRegistrationConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._confirmPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmPassword = this._confirmPassword;
    }
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._formId !== undefined) {
      hasAnyValues = true;
      internalValueResult.formId = this._formId;
    }
    if (this._loginIdType !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginIdType = this._loginIdType;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._birthDate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.birthDate = this._birthDate?.internalValue;
    }
    if (this._firstName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstName = this._firstName?.internalValue;
    }
    if (this._fullName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fullName = this._fullName?.internalValue;
    }
    if (this._lastName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastName = this._lastName?.internalValue;
    }
    if (this._middleName?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.middleName = this._middleName?.internalValue;
    }
    if (this._mobilePhone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mobilePhone = this._mobilePhone?.internalValue;
    }
    if (this._preferredLanguages?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredLanguages = this._preferredLanguages?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ApplicationRegistrationConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._confirmPassword = undefined;
      this._enabled = undefined;
      this._formId = undefined;
      this._loginIdType = undefined;
      this._type = undefined;
      this._birthDate.internalValue = undefined;
      this._firstName.internalValue = undefined;
      this._fullName.internalValue = undefined;
      this._lastName.internalValue = undefined;
      this._middleName.internalValue = undefined;
      this._mobilePhone.internalValue = undefined;
      this._preferredLanguages.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._confirmPassword = value.confirmPassword;
      this._enabled = value.enabled;
      this._formId = value.formId;
      this._loginIdType = value.loginIdType;
      this._type = value.type;
      this._birthDate.internalValue = value.birthDate;
      this._firstName.internalValue = value.firstName;
      this._fullName.internalValue = value.fullName;
      this._lastName.internalValue = value.lastName;
      this._middleName.internalValue = value.middleName;
      this._mobilePhone.internalValue = value.mobilePhone;
      this._preferredLanguages.internalValue = value.preferredLanguages;
    }
  }

  // confirm_password - computed: false, optional: true, required: false
  private _confirmPassword?: boolean | cdktf.IResolvable; 
  public get confirmPassword() {
    return this.getBooleanAttribute('confirm_password');
  }
  public set confirmPassword(value: boolean | cdktf.IResolvable) {
    this._confirmPassword = value;
  }
  public resetConfirmPassword() {
    this._confirmPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmPasswordInput() {
    return this._confirmPassword;
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

  // form_id - computed: false, optional: true, required: false
  private _formId?: string; 
  public get formId() {
    return this.getStringAttribute('form_id');
  }
  public set formId(value: string) {
    this._formId = value;
  }
  public resetFormId() {
    this._formId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formIdInput() {
    return this._formId;
  }

  // login_id_type - computed: false, optional: true, required: false
  private _loginIdType?: string; 
  public get loginIdType() {
    return this.getStringAttribute('login_id_type');
  }
  public set loginIdType(value: string) {
    this._loginIdType = value;
  }
  public resetLoginIdType() {
    this._loginIdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginIdTypeInput() {
    return this._loginIdType;
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

  // birth_date - computed: false, optional: true, required: false
  private _birthDate = new ApplicationRegistrationConfigurationBirthDateOutputReference(this, "birth_date");
  public get birthDate() {
    return this._birthDate;
  }
  public putBirthDate(value: ApplicationRegistrationConfigurationBirthDate) {
    this._birthDate.internalValue = value;
  }
  public resetBirthDate() {
    this._birthDate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get birthDateInput() {
    return this._birthDate.internalValue;
  }

  // first_name - computed: false, optional: true, required: false
  private _firstName = new ApplicationRegistrationConfigurationFirstNameOutputReference(this, "first_name");
  public get firstName() {
    return this._firstName;
  }
  public putFirstName(value: ApplicationRegistrationConfigurationFirstName) {
    this._firstName.internalValue = value;
  }
  public resetFirstName() {
    this._firstName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstNameInput() {
    return this._firstName.internalValue;
  }

  // full_name - computed: false, optional: true, required: false
  private _fullName = new ApplicationRegistrationConfigurationFullNameOutputReference(this, "full_name");
  public get fullName() {
    return this._fullName;
  }
  public putFullName(value: ApplicationRegistrationConfigurationFullName) {
    this._fullName.internalValue = value;
  }
  public resetFullName() {
    this._fullName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fullNameInput() {
    return this._fullName.internalValue;
  }

  // last_name - computed: false, optional: true, required: false
  private _lastName = new ApplicationRegistrationConfigurationLastNameOutputReference(this, "last_name");
  public get lastName() {
    return this._lastName;
  }
  public putLastName(value: ApplicationRegistrationConfigurationLastName) {
    this._lastName.internalValue = value;
  }
  public resetLastName() {
    this._lastName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastNameInput() {
    return this._lastName.internalValue;
  }

  // middle_name - computed: false, optional: true, required: false
  private _middleName = new ApplicationRegistrationConfigurationMiddleNameOutputReference(this, "middle_name");
  public get middleName() {
    return this._middleName;
  }
  public putMiddleName(value: ApplicationRegistrationConfigurationMiddleName) {
    this._middleName.internalValue = value;
  }
  public resetMiddleName() {
    this._middleName.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get middleNameInput() {
    return this._middleName.internalValue;
  }

  // mobile_phone - computed: false, optional: true, required: false
  private _mobilePhone = new ApplicationRegistrationConfigurationMobilePhoneOutputReference(this, "mobile_phone");
  public get mobilePhone() {
    return this._mobilePhone;
  }
  public putMobilePhone(value: ApplicationRegistrationConfigurationMobilePhone) {
    this._mobilePhone.internalValue = value;
  }
  public resetMobilePhone() {
    this._mobilePhone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mobilePhoneInput() {
    return this._mobilePhone.internalValue;
  }

  // preferred_languages - computed: false, optional: true, required: false
  private _preferredLanguages = new ApplicationRegistrationConfigurationPreferredLanguagesOutputReference(this, "preferred_languages");
  public get preferredLanguages() {
    return this._preferredLanguages;
  }
  public putPreferredLanguages(value: ApplicationRegistrationConfigurationPreferredLanguages) {
    this._preferredLanguages.internalValue = value;
  }
  public resetPreferredLanguages() {
    this._preferredLanguages.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredLanguagesInput() {
    return this._preferredLanguages.internalValue;
  }
}
export interface ApplicationRegistrationDeletePolicy {
  /**
  * Indicates that users without a verified registration for this application will have their registration permanently deleted after application.registrationDeletePolicy.unverified.numberOfDaysToRetain days.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#unverified_enabled Application#unverified_enabled}
  */
  readonly unverifiedEnabled?: boolean | cdktf.IResolvable;
  /**
  * The number of days from registration a user’s registration will be retained before being deleted for not completing registration verification. This field is required when application.registrationDeletePolicy.enabled is set to true. Value must be greater than 0.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#unverified_number_of_days_to_retain Application#unverified_number_of_days_to_retain}
  */
  readonly unverifiedNumberOfDaysToRetain?: number;
}

export function applicationRegistrationDeletePolicyToTerraform(struct?: ApplicationRegistrationDeletePolicyOutputReference | ApplicationRegistrationDeletePolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    unverified_enabled: cdktf.booleanToTerraform(struct!.unverifiedEnabled),
    unverified_number_of_days_to_retain: cdktf.numberToTerraform(struct!.unverifiedNumberOfDaysToRetain),
  }
}


export function applicationRegistrationDeletePolicyToHclTerraform(struct?: ApplicationRegistrationDeletePolicyOutputReference | ApplicationRegistrationDeletePolicy): any {
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

export class ApplicationRegistrationDeletePolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ApplicationRegistrationDeletePolicy | undefined {
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

  public set internalValue(value: ApplicationRegistrationDeletePolicy | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application fusionauth_application}
*/
export class Application extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fusionauth_application";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Application resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Application to import
  * @param importFromId The id of the existing Application that should be imported. Refer to the {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Application to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fusionauth_application", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/gpsinsight/fusionauth/0.1.100/docs/resources/application fusionauth_application} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApplicationConfig
  */
  public constructor(scope: Construct, id: string, config: ApplicationConfig) {
    super(scope, id, {
      terraformResourceType: 'fusionauth_application',
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
    this._applicationId = config.applicationId;
    this._authenticationTokenConfigurationEnabled = config.authenticationTokenConfigurationEnabled;
    this._cleanSpeakConfiguration.internalValue = config.cleanSpeakConfiguration;
    this._data = config.data;
    this._emailConfiguration.internalValue = config.emailConfiguration;
    this._formConfiguration.internalValue = config.formConfiguration;
    this._id = config.id;
    this._lambdaConfiguration.internalValue = config.lambdaConfiguration;
    this._multiFactorConfiguration.internalValue = config.multiFactorConfiguration;
    this._name = config.name;
    this._passwordlessConfigurationEnabled = config.passwordlessConfigurationEnabled;
    this._samlv2Configuration.internalValue = config.samlv2Configuration;
    this._tenantId = config.tenantId;
    this._themeId = config.themeId;
    this._verificationEmailTemplateId = config.verificationEmailTemplateId;
    this._verificationStrategy = config.verificationStrategy;
    this._verifyRegistration = config.verifyRegistration;
    this._jwtConfiguration.internalValue = config.jwtConfiguration;
    this._loginConfiguration.internalValue = config.loginConfiguration;
    this._oauthConfiguration.internalValue = config.oauthConfiguration;
    this._registrationConfiguration.internalValue = config.registrationConfiguration;
    this._registrationDeletePolicy.internalValue = config.registrationDeletePolicy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_control_configuration - computed: true, optional: true, required: false
  private _accessControlConfiguration = new ApplicationAccessControlConfigurationList(this, "access_control_configuration", false);
  public get accessControlConfiguration() {
    return this._accessControlConfiguration;
  }
  public putAccessControlConfiguration(value: ApplicationAccessControlConfiguration[] | cdktf.IResolvable) {
    this._accessControlConfiguration.internalValue = value;
  }
  public resetAccessControlConfiguration() {
    this._accessControlConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessControlConfigurationInput() {
    return this._accessControlConfiguration.internalValue;
  }

  // application_id - computed: false, optional: true, required: false
  private _applicationId?: string; 
  public get applicationId() {
    return this.getStringAttribute('application_id');
  }
  public set applicationId(value: string) {
    this._applicationId = value;
  }
  public resetApplicationId() {
    this._applicationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applicationIdInput() {
    return this._applicationId;
  }

  // authentication_token_configuration_enabled - computed: false, optional: true, required: false
  private _authenticationTokenConfigurationEnabled?: boolean | cdktf.IResolvable; 
  public get authenticationTokenConfigurationEnabled() {
    return this.getBooleanAttribute('authentication_token_configuration_enabled');
  }
  public set authenticationTokenConfigurationEnabled(value: boolean | cdktf.IResolvable) {
    this._authenticationTokenConfigurationEnabled = value;
  }
  public resetAuthenticationTokenConfigurationEnabled() {
    this._authenticationTokenConfigurationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticationTokenConfigurationEnabledInput() {
    return this._authenticationTokenConfigurationEnabled;
  }

  // clean_speak_configuration - computed: true, optional: true, required: false
  private _cleanSpeakConfiguration = new ApplicationCleanSpeakConfigurationList(this, "clean_speak_configuration", false);
  public get cleanSpeakConfiguration() {
    return this._cleanSpeakConfiguration;
  }
  public putCleanSpeakConfiguration(value: ApplicationCleanSpeakConfiguration[] | cdktf.IResolvable) {
    this._cleanSpeakConfiguration.internalValue = value;
  }
  public resetCleanSpeakConfiguration() {
    this._cleanSpeakConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cleanSpeakConfigurationInput() {
    return this._cleanSpeakConfiguration.internalValue;
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

  // email_configuration - computed: true, optional: true, required: false
  private _emailConfiguration = new ApplicationEmailConfigurationList(this, "email_configuration", false);
  public get emailConfiguration() {
    return this._emailConfiguration;
  }
  public putEmailConfiguration(value: ApplicationEmailConfiguration[] | cdktf.IResolvable) {
    this._emailConfiguration.internalValue = value;
  }
  public resetEmailConfiguration() {
    this._emailConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailConfigurationInput() {
    return this._emailConfiguration.internalValue;
  }

  // form_configuration - computed: true, optional: true, required: false
  private _formConfiguration = new ApplicationFormConfigurationList(this, "form_configuration", false);
  public get formConfiguration() {
    return this._formConfiguration;
  }
  public putFormConfiguration(value: ApplicationFormConfiguration[] | cdktf.IResolvable) {
    this._formConfiguration.internalValue = value;
  }
  public resetFormConfiguration() {
    this._formConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get formConfigurationInput() {
    return this._formConfiguration.internalValue;
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

  // lambda_configuration - computed: true, optional: true, required: false
  private _lambdaConfiguration = new ApplicationLambdaConfigurationList(this, "lambda_configuration", false);
  public get lambdaConfiguration() {
    return this._lambdaConfiguration;
  }
  public putLambdaConfiguration(value: ApplicationLambdaConfiguration[] | cdktf.IResolvable) {
    this._lambdaConfiguration.internalValue = value;
  }
  public resetLambdaConfiguration() {
    this._lambdaConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lambdaConfigurationInput() {
    return this._lambdaConfiguration.internalValue;
  }

  // multi_factor_configuration - computed: true, optional: true, required: false
  private _multiFactorConfiguration = new ApplicationMultiFactorConfigurationList(this, "multi_factor_configuration", false);
  public get multiFactorConfiguration() {
    return this._multiFactorConfiguration;
  }
  public putMultiFactorConfiguration(value: ApplicationMultiFactorConfiguration[] | cdktf.IResolvable) {
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

  // passwordless_configuration_enabled - computed: false, optional: true, required: false
  private _passwordlessConfigurationEnabled?: boolean | cdktf.IResolvable; 
  public get passwordlessConfigurationEnabled() {
    return this.getBooleanAttribute('passwordless_configuration_enabled');
  }
  public set passwordlessConfigurationEnabled(value: boolean | cdktf.IResolvable) {
    this._passwordlessConfigurationEnabled = value;
  }
  public resetPasswordlessConfigurationEnabled() {
    this._passwordlessConfigurationEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordlessConfigurationEnabledInput() {
    return this._passwordlessConfigurationEnabled;
  }

  // samlv2_configuration - computed: true, optional: true, required: false
  private _samlv2Configuration = new ApplicationSamlv2ConfigurationList(this, "samlv2_configuration", false);
  public get samlv2Configuration() {
    return this._samlv2Configuration;
  }
  public putSamlv2Configuration(value: ApplicationSamlv2Configuration[] | cdktf.IResolvable) {
    this._samlv2Configuration.internalValue = value;
  }
  public resetSamlv2Configuration() {
    this._samlv2Configuration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlv2ConfigurationInput() {
    return this._samlv2Configuration.internalValue;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // theme_id - computed: false, optional: true, required: false
  private _themeId?: string; 
  public get themeId() {
    return this.getStringAttribute('theme_id');
  }
  public set themeId(value: string) {
    this._themeId = value;
  }
  public resetThemeId() {
    this._themeId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get themeIdInput() {
    return this._themeId;
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

  // verify_registration - computed: false, optional: true, required: false
  private _verifyRegistration?: boolean | cdktf.IResolvable; 
  public get verifyRegistration() {
    return this.getBooleanAttribute('verify_registration');
  }
  public set verifyRegistration(value: boolean | cdktf.IResolvable) {
    this._verifyRegistration = value;
  }
  public resetVerifyRegistration() {
    this._verifyRegistration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyRegistrationInput() {
    return this._verifyRegistration;
  }

  // jwt_configuration - computed: false, optional: true, required: false
  private _jwtConfiguration = new ApplicationJwtConfigurationOutputReference(this, "jwt_configuration");
  public get jwtConfiguration() {
    return this._jwtConfiguration;
  }
  public putJwtConfiguration(value: ApplicationJwtConfiguration) {
    this._jwtConfiguration.internalValue = value;
  }
  public resetJwtConfiguration() {
    this._jwtConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jwtConfigurationInput() {
    return this._jwtConfiguration.internalValue;
  }

  // login_configuration - computed: false, optional: true, required: false
  private _loginConfiguration = new ApplicationLoginConfigurationOutputReference(this, "login_configuration");
  public get loginConfiguration() {
    return this._loginConfiguration;
  }
  public putLoginConfiguration(value: ApplicationLoginConfiguration) {
    this._loginConfiguration.internalValue = value;
  }
  public resetLoginConfiguration() {
    this._loginConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginConfigurationInput() {
    return this._loginConfiguration.internalValue;
  }

  // oauth_configuration - computed: false, optional: true, required: false
  private _oauthConfiguration = new ApplicationOauthConfigurationOutputReference(this, "oauth_configuration");
  public get oauthConfiguration() {
    return this._oauthConfiguration;
  }
  public putOauthConfiguration(value: ApplicationOauthConfiguration) {
    this._oauthConfiguration.internalValue = value;
  }
  public resetOauthConfiguration() {
    this._oauthConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oauthConfigurationInput() {
    return this._oauthConfiguration.internalValue;
  }

  // registration_configuration - computed: false, optional: true, required: false
  private _registrationConfiguration = new ApplicationRegistrationConfigurationOutputReference(this, "registration_configuration");
  public get registrationConfiguration() {
    return this._registrationConfiguration;
  }
  public putRegistrationConfiguration(value: ApplicationRegistrationConfiguration) {
    this._registrationConfiguration.internalValue = value;
  }
  public resetRegistrationConfiguration() {
    this._registrationConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationConfigurationInput() {
    return this._registrationConfiguration.internalValue;
  }

  // registration_delete_policy - computed: false, optional: true, required: false
  private _registrationDeletePolicy = new ApplicationRegistrationDeletePolicyOutputReference(this, "registration_delete_policy");
  public get registrationDeletePolicy() {
    return this._registrationDeletePolicy;
  }
  public putRegistrationDeletePolicy(value: ApplicationRegistrationDeletePolicy) {
    this._registrationDeletePolicy.internalValue = value;
  }
  public resetRegistrationDeletePolicy() {
    this._registrationDeletePolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationDeletePolicyInput() {
    return this._registrationDeletePolicy.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_control_configuration: cdktf.listMapper(applicationAccessControlConfigurationToTerraform, false)(this._accessControlConfiguration.internalValue),
      application_id: cdktf.stringToTerraform(this._applicationId),
      authentication_token_configuration_enabled: cdktf.booleanToTerraform(this._authenticationTokenConfigurationEnabled),
      clean_speak_configuration: cdktf.listMapper(applicationCleanSpeakConfigurationToTerraform, false)(this._cleanSpeakConfiguration.internalValue),
      data: cdktf.hashMapper(cdktf.stringToTerraform)(this._data),
      email_configuration: cdktf.listMapper(applicationEmailConfigurationToTerraform, false)(this._emailConfiguration.internalValue),
      form_configuration: cdktf.listMapper(applicationFormConfigurationToTerraform, false)(this._formConfiguration.internalValue),
      id: cdktf.stringToTerraform(this._id),
      lambda_configuration: cdktf.listMapper(applicationLambdaConfigurationToTerraform, false)(this._lambdaConfiguration.internalValue),
      multi_factor_configuration: cdktf.listMapper(applicationMultiFactorConfigurationToTerraform, false)(this._multiFactorConfiguration.internalValue),
      name: cdktf.stringToTerraform(this._name),
      passwordless_configuration_enabled: cdktf.booleanToTerraform(this._passwordlessConfigurationEnabled),
      samlv2_configuration: cdktf.listMapper(applicationSamlv2ConfigurationToTerraform, false)(this._samlv2Configuration.internalValue),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
      theme_id: cdktf.stringToTerraform(this._themeId),
      verification_email_template_id: cdktf.stringToTerraform(this._verificationEmailTemplateId),
      verification_strategy: cdktf.stringToTerraform(this._verificationStrategy),
      verify_registration: cdktf.booleanToTerraform(this._verifyRegistration),
      jwt_configuration: applicationJwtConfigurationToTerraform(this._jwtConfiguration.internalValue),
      login_configuration: applicationLoginConfigurationToTerraform(this._loginConfiguration.internalValue),
      oauth_configuration: applicationOauthConfigurationToTerraform(this._oauthConfiguration.internalValue),
      registration_configuration: applicationRegistrationConfigurationToTerraform(this._registrationConfiguration.internalValue),
      registration_delete_policy: applicationRegistrationDeletePolicyToTerraform(this._registrationDeletePolicy.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_control_configuration: {
        value: cdktf.listMapperHcl(applicationAccessControlConfigurationToHclTerraform, false)(this._accessControlConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationAccessControlConfigurationList",
      },
      application_id: {
        value: cdktf.stringToHclTerraform(this._applicationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      authentication_token_configuration_enabled: {
        value: cdktf.booleanToHclTerraform(this._authenticationTokenConfigurationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      clean_speak_configuration: {
        value: cdktf.listMapperHcl(applicationCleanSpeakConfigurationToHclTerraform, false)(this._cleanSpeakConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationCleanSpeakConfigurationList",
      },
      data: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._data),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      email_configuration: {
        value: cdktf.listMapperHcl(applicationEmailConfigurationToHclTerraform, false)(this._emailConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationEmailConfigurationList",
      },
      form_configuration: {
        value: cdktf.listMapperHcl(applicationFormConfigurationToHclTerraform, false)(this._formConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationFormConfigurationList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      lambda_configuration: {
        value: cdktf.listMapperHcl(applicationLambdaConfigurationToHclTerraform, false)(this._lambdaConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationLambdaConfigurationList",
      },
      multi_factor_configuration: {
        value: cdktf.listMapperHcl(applicationMultiFactorConfigurationToHclTerraform, false)(this._multiFactorConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationMultiFactorConfigurationList",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      passwordless_configuration_enabled: {
        value: cdktf.booleanToHclTerraform(this._passwordlessConfigurationEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      samlv2_configuration: {
        value: cdktf.listMapperHcl(applicationSamlv2ConfigurationToHclTerraform, false)(this._samlv2Configuration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationSamlv2ConfigurationList",
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
      verification_email_template_id: {
        value: cdktf.stringToHclTerraform(this._verificationEmailTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verification_strategy: {
        value: cdktf.stringToHclTerraform(this._verificationStrategy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      verify_registration: {
        value: cdktf.booleanToHclTerraform(this._verifyRegistration),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      jwt_configuration: {
        value: applicationJwtConfigurationToHclTerraform(this._jwtConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationJwtConfigurationList",
      },
      login_configuration: {
        value: applicationLoginConfigurationToHclTerraform(this._loginConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationLoginConfigurationList",
      },
      oauth_configuration: {
        value: applicationOauthConfigurationToHclTerraform(this._oauthConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationOauthConfigurationList",
      },
      registration_configuration: {
        value: applicationRegistrationConfigurationToHclTerraform(this._registrationConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationRegistrationConfigurationList",
      },
      registration_delete_policy: {
        value: applicationRegistrationDeletePolicyToHclTerraform(this._registrationDeletePolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ApplicationRegistrationDeletePolicyList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
