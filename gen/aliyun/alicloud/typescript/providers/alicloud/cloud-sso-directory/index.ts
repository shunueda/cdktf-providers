// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CloudSsoDirectoryConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#directory_global_access_status CloudSsoDirectory#directory_global_access_status}
  */
  readonly directoryGlobalAccessStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#directory_name CloudSsoDirectory#directory_name}
  */
  readonly directoryName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#id CloudSsoDirectory#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#mfa_authentication_status CloudSsoDirectory#mfa_authentication_status}
  */
  readonly mfaAuthenticationStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#scim_synchronization_status CloudSsoDirectory#scim_synchronization_status}
  */
  readonly scimSynchronizationStatus?: string;
  /**
  * login_preference block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#login_preference CloudSsoDirectory#login_preference}
  */
  readonly loginPreference?: CloudSsoDirectoryLoginPreference;
  /**
  * mfa_authentication_setting_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#mfa_authentication_setting_info CloudSsoDirectory#mfa_authentication_setting_info}
  */
  readonly mfaAuthenticationSettingInfo?: CloudSsoDirectoryMfaAuthenticationSettingInfo;
  /**
  * password_policy block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#password_policy CloudSsoDirectory#password_policy}
  */
  readonly passwordPolicy?: CloudSsoDirectoryPasswordPolicy;
  /**
  * saml_identity_provider_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#saml_identity_provider_configuration CloudSsoDirectory#saml_identity_provider_configuration}
  */
  readonly samlIdentityProviderConfiguration?: CloudSsoDirectorySamlIdentityProviderConfiguration;
  /**
  * saml_service_provider block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#saml_service_provider CloudSsoDirectory#saml_service_provider}
  */
  readonly samlServiceProvider?: CloudSsoDirectorySamlServiceProvider;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#timeouts CloudSsoDirectory#timeouts}
  */
  readonly timeouts?: CloudSsoDirectoryTimeouts;
  /**
  * user_provisioning_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#user_provisioning_configuration CloudSsoDirectory#user_provisioning_configuration}
  */
  readonly userProvisioningConfiguration?: CloudSsoDirectoryUserProvisioningConfiguration;
}
export interface CloudSsoDirectoryLoginPreference {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#allow_user_to_get_credentials CloudSsoDirectory#allow_user_to_get_credentials}
  */
  readonly allowUserToGetCredentials?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#login_network_masks CloudSsoDirectory#login_network_masks}
  */
  readonly loginNetworkMasks?: string;
}

export function cloudSsoDirectoryLoginPreferenceToTerraform(struct?: CloudSsoDirectoryLoginPreferenceOutputReference | CloudSsoDirectoryLoginPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_user_to_get_credentials: cdktf.booleanToTerraform(struct!.allowUserToGetCredentials),
    login_network_masks: cdktf.stringToTerraform(struct!.loginNetworkMasks),
  }
}


export function cloudSsoDirectoryLoginPreferenceToHclTerraform(struct?: CloudSsoDirectoryLoginPreferenceOutputReference | CloudSsoDirectoryLoginPreference): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_user_to_get_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.allowUserToGetCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    login_network_masks: {
      value: cdktf.stringToHclTerraform(struct!.loginNetworkMasks),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudSsoDirectoryLoginPreferenceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudSsoDirectoryLoginPreference | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowUserToGetCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowUserToGetCredentials = this._allowUserToGetCredentials;
    }
    if (this._loginNetworkMasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginNetworkMasks = this._loginNetworkMasks;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudSsoDirectoryLoginPreference | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._allowUserToGetCredentials = undefined;
      this._loginNetworkMasks = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._allowUserToGetCredentials = value.allowUserToGetCredentials;
      this._loginNetworkMasks = value.loginNetworkMasks;
    }
  }

  // allow_user_to_get_credentials - computed: true, optional: true, required: false
  private _allowUserToGetCredentials?: boolean | cdktf.IResolvable; 
  public get allowUserToGetCredentials() {
    return this.getBooleanAttribute('allow_user_to_get_credentials');
  }
  public set allowUserToGetCredentials(value: boolean | cdktf.IResolvable) {
    this._allowUserToGetCredentials = value;
  }
  public resetAllowUserToGetCredentials() {
    this._allowUserToGetCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUserToGetCredentialsInput() {
    return this._allowUserToGetCredentials;
  }

  // login_network_masks - computed: false, optional: true, required: false
  private _loginNetworkMasks?: string; 
  public get loginNetworkMasks() {
    return this.getStringAttribute('login_network_masks');
  }
  public set loginNetworkMasks(value: string) {
    this._loginNetworkMasks = value;
  }
  public resetLoginNetworkMasks() {
    this._loginNetworkMasks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginNetworkMasksInput() {
    return this._loginNetworkMasks;
  }
}
export interface CloudSsoDirectoryMfaAuthenticationSettingInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#mfa_authentication_advance_settings CloudSsoDirectory#mfa_authentication_advance_settings}
  */
  readonly mfaAuthenticationAdvanceSettings?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#operation_for_risk_login CloudSsoDirectory#operation_for_risk_login}
  */
  readonly operationForRiskLogin?: string;
}

export function cloudSsoDirectoryMfaAuthenticationSettingInfoToTerraform(struct?: CloudSsoDirectoryMfaAuthenticationSettingInfoOutputReference | CloudSsoDirectoryMfaAuthenticationSettingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mfa_authentication_advance_settings: cdktf.stringToTerraform(struct!.mfaAuthenticationAdvanceSettings),
    operation_for_risk_login: cdktf.stringToTerraform(struct!.operationForRiskLogin),
  }
}


export function cloudSsoDirectoryMfaAuthenticationSettingInfoToHclTerraform(struct?: CloudSsoDirectoryMfaAuthenticationSettingInfoOutputReference | CloudSsoDirectoryMfaAuthenticationSettingInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mfa_authentication_advance_settings: {
      value: cdktf.stringToHclTerraform(struct!.mfaAuthenticationAdvanceSettings),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operation_for_risk_login: {
      value: cdktf.stringToHclTerraform(struct!.operationForRiskLogin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudSsoDirectoryMfaAuthenticationSettingInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudSsoDirectoryMfaAuthenticationSettingInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mfaAuthenticationAdvanceSettings !== undefined) {
      hasAnyValues = true;
      internalValueResult.mfaAuthenticationAdvanceSettings = this._mfaAuthenticationAdvanceSettings;
    }
    if (this._operationForRiskLogin !== undefined) {
      hasAnyValues = true;
      internalValueResult.operationForRiskLogin = this._operationForRiskLogin;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudSsoDirectoryMfaAuthenticationSettingInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._mfaAuthenticationAdvanceSettings = undefined;
      this._operationForRiskLogin = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._mfaAuthenticationAdvanceSettings = value.mfaAuthenticationAdvanceSettings;
      this._operationForRiskLogin = value.operationForRiskLogin;
    }
  }

  // mfa_authentication_advance_settings - computed: true, optional: true, required: false
  private _mfaAuthenticationAdvanceSettings?: string; 
  public get mfaAuthenticationAdvanceSettings() {
    return this.getStringAttribute('mfa_authentication_advance_settings');
  }
  public set mfaAuthenticationAdvanceSettings(value: string) {
    this._mfaAuthenticationAdvanceSettings = value;
  }
  public resetMfaAuthenticationAdvanceSettings() {
    this._mfaAuthenticationAdvanceSettings = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaAuthenticationAdvanceSettingsInput() {
    return this._mfaAuthenticationAdvanceSettings;
  }

  // operation_for_risk_login - computed: true, optional: true, required: false
  private _operationForRiskLogin?: string; 
  public get operationForRiskLogin() {
    return this.getStringAttribute('operation_for_risk_login');
  }
  public set operationForRiskLogin(value: string) {
    this._operationForRiskLogin = value;
  }
  public resetOperationForRiskLogin() {
    this._operationForRiskLogin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationForRiskLoginInput() {
    return this._operationForRiskLogin;
  }
}
export interface CloudSsoDirectoryPasswordPolicy {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#max_login_attempts CloudSsoDirectory#max_login_attempts}
  */
  readonly maxLoginAttempts?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#max_password_age CloudSsoDirectory#max_password_age}
  */
  readonly maxPasswordAge?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#min_password_different_chars CloudSsoDirectory#min_password_different_chars}
  */
  readonly minPasswordDifferentChars?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#min_password_length CloudSsoDirectory#min_password_length}
  */
  readonly minPasswordLength?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#password_not_contain_username CloudSsoDirectory#password_not_contain_username}
  */
  readonly passwordNotContainUsername?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#password_reuse_prevention CloudSsoDirectory#password_reuse_prevention}
  */
  readonly passwordReusePrevention?: number;
}

export function cloudSsoDirectoryPasswordPolicyToTerraform(struct?: CloudSsoDirectoryPasswordPolicyOutputReference | CloudSsoDirectoryPasswordPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_login_attempts: cdktf.numberToTerraform(struct!.maxLoginAttempts),
    max_password_age: cdktf.numberToTerraform(struct!.maxPasswordAge),
    min_password_different_chars: cdktf.numberToTerraform(struct!.minPasswordDifferentChars),
    min_password_length: cdktf.numberToTerraform(struct!.minPasswordLength),
    password_not_contain_username: cdktf.booleanToTerraform(struct!.passwordNotContainUsername),
    password_reuse_prevention: cdktf.numberToTerraform(struct!.passwordReusePrevention),
  }
}


export function cloudSsoDirectoryPasswordPolicyToHclTerraform(struct?: CloudSsoDirectoryPasswordPolicyOutputReference | CloudSsoDirectoryPasswordPolicy): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_login_attempts: {
      value: cdktf.numberToHclTerraform(struct!.maxLoginAttempts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_password_age: {
      value: cdktf.numberToHclTerraform(struct!.maxPasswordAge),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_password_different_chars: {
      value: cdktf.numberToHclTerraform(struct!.minPasswordDifferentChars),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_password_length: {
      value: cdktf.numberToHclTerraform(struct!.minPasswordLength),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    password_not_contain_username: {
      value: cdktf.booleanToHclTerraform(struct!.passwordNotContainUsername),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    password_reuse_prevention: {
      value: cdktf.numberToHclTerraform(struct!.passwordReusePrevention),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudSsoDirectoryPasswordPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudSsoDirectoryPasswordPolicy | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxLoginAttempts !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxLoginAttempts = this._maxLoginAttempts;
    }
    if (this._maxPasswordAge !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxPasswordAge = this._maxPasswordAge;
    }
    if (this._minPasswordDifferentChars !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPasswordDifferentChars = this._minPasswordDifferentChars;
    }
    if (this._minPasswordLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minPasswordLength = this._minPasswordLength;
    }
    if (this._passwordNotContainUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordNotContainUsername = this._passwordNotContainUsername;
    }
    if (this._passwordReusePrevention !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordReusePrevention = this._passwordReusePrevention;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudSsoDirectoryPasswordPolicy | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._maxLoginAttempts = undefined;
      this._maxPasswordAge = undefined;
      this._minPasswordDifferentChars = undefined;
      this._minPasswordLength = undefined;
      this._passwordNotContainUsername = undefined;
      this._passwordReusePrevention = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._maxLoginAttempts = value.maxLoginAttempts;
      this._maxPasswordAge = value.maxPasswordAge;
      this._minPasswordDifferentChars = value.minPasswordDifferentChars;
      this._minPasswordLength = value.minPasswordLength;
      this._passwordNotContainUsername = value.passwordNotContainUsername;
      this._passwordReusePrevention = value.passwordReusePrevention;
    }
  }

  // hard_expire - computed: true, optional: false, required: false
  public get hardExpire() {
    return this.getBooleanAttribute('hard_expire');
  }

  // max_login_attempts - computed: true, optional: true, required: false
  private _maxLoginAttempts?: number; 
  public get maxLoginAttempts() {
    return this.getNumberAttribute('max_login_attempts');
  }
  public set maxLoginAttempts(value: number) {
    this._maxLoginAttempts = value;
  }
  public resetMaxLoginAttempts() {
    this._maxLoginAttempts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxLoginAttemptsInput() {
    return this._maxLoginAttempts;
  }

  // max_password_age - computed: true, optional: true, required: false
  private _maxPasswordAge?: number; 
  public get maxPasswordAge() {
    return this.getNumberAttribute('max_password_age');
  }
  public set maxPasswordAge(value: number) {
    this._maxPasswordAge = value;
  }
  public resetMaxPasswordAge() {
    this._maxPasswordAge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxPasswordAgeInput() {
    return this._maxPasswordAge;
  }

  // max_password_length - computed: true, optional: false, required: false
  public get maxPasswordLength() {
    return this.getNumberAttribute('max_password_length');
  }

  // min_password_different_chars - computed: true, optional: true, required: false
  private _minPasswordDifferentChars?: number; 
  public get minPasswordDifferentChars() {
    return this.getNumberAttribute('min_password_different_chars');
  }
  public set minPasswordDifferentChars(value: number) {
    this._minPasswordDifferentChars = value;
  }
  public resetMinPasswordDifferentChars() {
    this._minPasswordDifferentChars = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPasswordDifferentCharsInput() {
    return this._minPasswordDifferentChars;
  }

  // min_password_length - computed: true, optional: true, required: false
  private _minPasswordLength?: number; 
  public get minPasswordLength() {
    return this.getNumberAttribute('min_password_length');
  }
  public set minPasswordLength(value: number) {
    this._minPasswordLength = value;
  }
  public resetMinPasswordLength() {
    this._minPasswordLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minPasswordLengthInput() {
    return this._minPasswordLength;
  }

  // password_not_contain_username - computed: true, optional: true, required: false
  private _passwordNotContainUsername?: boolean | cdktf.IResolvable; 
  public get passwordNotContainUsername() {
    return this.getBooleanAttribute('password_not_contain_username');
  }
  public set passwordNotContainUsername(value: boolean | cdktf.IResolvable) {
    this._passwordNotContainUsername = value;
  }
  public resetPasswordNotContainUsername() {
    this._passwordNotContainUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordNotContainUsernameInput() {
    return this._passwordNotContainUsername;
  }

  // password_reuse_prevention - computed: true, optional: true, required: false
  private _passwordReusePrevention?: number; 
  public get passwordReusePrevention() {
    return this.getNumberAttribute('password_reuse_prevention');
  }
  public set passwordReusePrevention(value: number) {
    this._passwordReusePrevention = value;
  }
  public resetPasswordReusePrevention() {
    this._passwordReusePrevention = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordReusePreventionInput() {
    return this._passwordReusePrevention;
  }

  // require_lower_case_chars - computed: true, optional: false, required: false
  public get requireLowerCaseChars() {
    return this.getBooleanAttribute('require_lower_case_chars');
  }

  // require_numbers - computed: true, optional: false, required: false
  public get requireNumbers() {
    return this.getBooleanAttribute('require_numbers');
  }

  // require_symbols - computed: true, optional: false, required: false
  public get requireSymbols() {
    return this.getBooleanAttribute('require_symbols');
  }

  // require_upper_case_chars - computed: true, optional: false, required: false
  public get requireUpperCaseChars() {
    return this.getBooleanAttribute('require_upper_case_chars');
  }
}
export interface CloudSsoDirectorySamlIdentityProviderConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#binding_type CloudSsoDirectory#binding_type}
  */
  readonly bindingType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#encoded_metadata_document CloudSsoDirectory#encoded_metadata_document}
  */
  readonly encodedMetadataDocument?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#entity_id CloudSsoDirectory#entity_id}
  */
  readonly entityId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#login_url CloudSsoDirectory#login_url}
  */
  readonly loginUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#sso_status CloudSsoDirectory#sso_status}
  */
  readonly ssoStatus?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#want_request_signed CloudSsoDirectory#want_request_signed}
  */
  readonly wantRequestSigned?: boolean | cdktf.IResolvable;
}

export function cloudSsoDirectorySamlIdentityProviderConfigurationToTerraform(struct?: CloudSsoDirectorySamlIdentityProviderConfigurationOutputReference | CloudSsoDirectorySamlIdentityProviderConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    binding_type: cdktf.stringToTerraform(struct!.bindingType),
    encoded_metadata_document: cdktf.stringToTerraform(struct!.encodedMetadataDocument),
    entity_id: cdktf.stringToTerraform(struct!.entityId),
    login_url: cdktf.stringToTerraform(struct!.loginUrl),
    sso_status: cdktf.stringToTerraform(struct!.ssoStatus),
    want_request_signed: cdktf.booleanToTerraform(struct!.wantRequestSigned),
  }
}


export function cloudSsoDirectorySamlIdentityProviderConfigurationToHclTerraform(struct?: CloudSsoDirectorySamlIdentityProviderConfigurationOutputReference | CloudSsoDirectorySamlIdentityProviderConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    binding_type: {
      value: cdktf.stringToHclTerraform(struct!.bindingType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    encoded_metadata_document: {
      value: cdktf.stringToHclTerraform(struct!.encodedMetadataDocument),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entity_id: {
      value: cdktf.stringToHclTerraform(struct!.entityId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_url: {
      value: cdktf.stringToHclTerraform(struct!.loginUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    sso_status: {
      value: cdktf.stringToHclTerraform(struct!.ssoStatus),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    want_request_signed: {
      value: cdktf.booleanToHclTerraform(struct!.wantRequestSigned),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudSsoDirectorySamlIdentityProviderConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudSsoDirectorySamlIdentityProviderConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bindingType !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindingType = this._bindingType;
    }
    if (this._encodedMetadataDocument !== undefined) {
      hasAnyValues = true;
      internalValueResult.encodedMetadataDocument = this._encodedMetadataDocument;
    }
    if (this._entityId !== undefined) {
      hasAnyValues = true;
      internalValueResult.entityId = this._entityId;
    }
    if (this._loginUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginUrl = this._loginUrl;
    }
    if (this._ssoStatus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ssoStatus = this._ssoStatus;
    }
    if (this._wantRequestSigned !== undefined) {
      hasAnyValues = true;
      internalValueResult.wantRequestSigned = this._wantRequestSigned;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudSsoDirectorySamlIdentityProviderConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bindingType = undefined;
      this._encodedMetadataDocument = undefined;
      this._entityId = undefined;
      this._loginUrl = undefined;
      this._ssoStatus = undefined;
      this._wantRequestSigned = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bindingType = value.bindingType;
      this._encodedMetadataDocument = value.encodedMetadataDocument;
      this._entityId = value.entityId;
      this._loginUrl = value.loginUrl;
      this._ssoStatus = value.ssoStatus;
      this._wantRequestSigned = value.wantRequestSigned;
    }
  }

  // binding_type - computed: true, optional: true, required: false
  private _bindingType?: string; 
  public get bindingType() {
    return this.getStringAttribute('binding_type');
  }
  public set bindingType(value: string) {
    this._bindingType = value;
  }
  public resetBindingType() {
    this._bindingType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindingTypeInput() {
    return this._bindingType;
  }

  // certificate_ids - computed: true, optional: false, required: false
  public get certificateIds() {
    return this.getListAttribute('certificate_ids');
  }

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // encoded_metadata_document - computed: false, optional: true, required: false
  private _encodedMetadataDocument?: string; 
  public get encodedMetadataDocument() {
    return this.getStringAttribute('encoded_metadata_document');
  }
  public set encodedMetadataDocument(value: string) {
    this._encodedMetadataDocument = value;
  }
  public resetEncodedMetadataDocument() {
    this._encodedMetadataDocument = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get encodedMetadataDocumentInput() {
    return this._encodedMetadataDocument;
  }

  // entity_id - computed: true, optional: true, required: false
  private _entityId?: string; 
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }
  public set entityId(value: string) {
    this._entityId = value;
  }
  public resetEntityId() {
    this._entityId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entityIdInput() {
    return this._entityId;
  }

  // login_url - computed: true, optional: true, required: false
  private _loginUrl?: string; 
  public get loginUrl() {
    return this.getStringAttribute('login_url');
  }
  public set loginUrl(value: string) {
    this._loginUrl = value;
  }
  public resetLoginUrl() {
    this._loginUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginUrlInput() {
    return this._loginUrl;
  }

  // sso_status - computed: true, optional: true, required: false
  private _ssoStatus?: string; 
  public get ssoStatus() {
    return this.getStringAttribute('sso_status');
  }
  public set ssoStatus(value: string) {
    this._ssoStatus = value;
  }
  public resetSsoStatus() {
    this._ssoStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ssoStatusInput() {
    return this._ssoStatus;
  }

  // update_time - computed: true, optional: false, required: false
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }

  // want_request_signed - computed: true, optional: true, required: false
  private _wantRequestSigned?: boolean | cdktf.IResolvable; 
  public get wantRequestSigned() {
    return this.getBooleanAttribute('want_request_signed');
  }
  public set wantRequestSigned(value: boolean | cdktf.IResolvable) {
    this._wantRequestSigned = value;
  }
  public resetWantRequestSigned() {
    this._wantRequestSigned = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get wantRequestSignedInput() {
    return this._wantRequestSigned;
  }
}
export interface CloudSsoDirectorySamlServiceProvider {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#authn_sign_algo CloudSsoDirectory#authn_sign_algo}
  */
  readonly authnSignAlgo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#certificate_type CloudSsoDirectory#certificate_type}
  */
  readonly certificateType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#support_encrypted_assertion CloudSsoDirectory#support_encrypted_assertion}
  */
  readonly supportEncryptedAssertion?: boolean | cdktf.IResolvable;
}

export function cloudSsoDirectorySamlServiceProviderToTerraform(struct?: CloudSsoDirectorySamlServiceProviderOutputReference | CloudSsoDirectorySamlServiceProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authn_sign_algo: cdktf.stringToTerraform(struct!.authnSignAlgo),
    certificate_type: cdktf.stringToTerraform(struct!.certificateType),
    support_encrypted_assertion: cdktf.booleanToTerraform(struct!.supportEncryptedAssertion),
  }
}


export function cloudSsoDirectorySamlServiceProviderToHclTerraform(struct?: CloudSsoDirectorySamlServiceProviderOutputReference | CloudSsoDirectorySamlServiceProvider): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authn_sign_algo: {
      value: cdktf.stringToHclTerraform(struct!.authnSignAlgo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    certificate_type: {
      value: cdktf.stringToHclTerraform(struct!.certificateType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    support_encrypted_assertion: {
      value: cdktf.booleanToHclTerraform(struct!.supportEncryptedAssertion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudSsoDirectorySamlServiceProviderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudSsoDirectorySamlServiceProvider | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authnSignAlgo !== undefined) {
      hasAnyValues = true;
      internalValueResult.authnSignAlgo = this._authnSignAlgo;
    }
    if (this._certificateType !== undefined) {
      hasAnyValues = true;
      internalValueResult.certificateType = this._certificateType;
    }
    if (this._supportEncryptedAssertion !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportEncryptedAssertion = this._supportEncryptedAssertion;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudSsoDirectorySamlServiceProvider | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authnSignAlgo = undefined;
      this._certificateType = undefined;
      this._supportEncryptedAssertion = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authnSignAlgo = value.authnSignAlgo;
      this._certificateType = value.certificateType;
      this._supportEncryptedAssertion = value.supportEncryptedAssertion;
    }
  }

  // acs_url - computed: true, optional: false, required: false
  public get acsUrl() {
    return this.getStringAttribute('acs_url');
  }

  // authn_sign_algo - computed: true, optional: true, required: false
  private _authnSignAlgo?: string; 
  public get authnSignAlgo() {
    return this.getStringAttribute('authn_sign_algo');
  }
  public set authnSignAlgo(value: string) {
    this._authnSignAlgo = value;
  }
  public resetAuthnSignAlgo() {
    this._authnSignAlgo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authnSignAlgoInput() {
    return this._authnSignAlgo;
  }

  // certificate_type - computed: true, optional: true, required: false
  private _certificateType?: string; 
  public get certificateType() {
    return this.getStringAttribute('certificate_type');
  }
  public set certificateType(value: string) {
    this._certificateType = value;
  }
  public resetCertificateType() {
    this._certificateType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get certificateTypeInput() {
    return this._certificateType;
  }

  // encoded_metadata_document - computed: true, optional: false, required: false
  public get encodedMetadataDocument() {
    return this.getStringAttribute('encoded_metadata_document');
  }

  // entity_id - computed: true, optional: false, required: false
  public get entityId() {
    return this.getStringAttribute('entity_id');
  }

  // support_encrypted_assertion - computed: true, optional: true, required: false
  private _supportEncryptedAssertion?: boolean | cdktf.IResolvable; 
  public get supportEncryptedAssertion() {
    return this.getBooleanAttribute('support_encrypted_assertion');
  }
  public set supportEncryptedAssertion(value: boolean | cdktf.IResolvable) {
    this._supportEncryptedAssertion = value;
  }
  public resetSupportEncryptedAssertion() {
    this._supportEncryptedAssertion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportEncryptedAssertionInput() {
    return this._supportEncryptedAssertion;
  }
}
export interface CloudSsoDirectoryTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#create CloudSsoDirectory#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#delete CloudSsoDirectory#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#update CloudSsoDirectory#update}
  */
  readonly update?: string;
}

export function cloudSsoDirectoryTimeoutsToTerraform(struct?: CloudSsoDirectoryTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function cloudSsoDirectoryTimeoutsToHclTerraform(struct?: CloudSsoDirectoryTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudSsoDirectoryTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CloudSsoDirectoryTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudSsoDirectoryTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}
export interface CloudSsoDirectoryUserProvisioningConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#default_landing_page CloudSsoDirectory#default_landing_page}
  */
  readonly defaultLandingPage?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#session_duration CloudSsoDirectory#session_duration}
  */
  readonly sessionDuration?: string;
}

export function cloudSsoDirectoryUserProvisioningConfigurationToTerraform(struct?: CloudSsoDirectoryUserProvisioningConfigurationOutputReference | CloudSsoDirectoryUserProvisioningConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_landing_page: cdktf.stringToTerraform(struct!.defaultLandingPage),
    session_duration: cdktf.stringToTerraform(struct!.sessionDuration),
  }
}


export function cloudSsoDirectoryUserProvisioningConfigurationToHclTerraform(struct?: CloudSsoDirectoryUserProvisioningConfigurationOutputReference | CloudSsoDirectoryUserProvisioningConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_landing_page: {
      value: cdktf.stringToHclTerraform(struct!.defaultLandingPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_duration: {
      value: cdktf.stringToHclTerraform(struct!.sessionDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CloudSsoDirectoryUserProvisioningConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): CloudSsoDirectoryUserProvisioningConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultLandingPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultLandingPage = this._defaultLandingPage;
    }
    if (this._sessionDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionDuration = this._sessionDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CloudSsoDirectoryUserProvisioningConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultLandingPage = undefined;
      this._sessionDuration = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultLandingPage = value.defaultLandingPage;
      this._sessionDuration = value.sessionDuration;
    }
  }

  // default_landing_page - computed: true, optional: true, required: false
  private _defaultLandingPage?: string; 
  public get defaultLandingPage() {
    return this.getStringAttribute('default_landing_page');
  }
  public set defaultLandingPage(value: string) {
    this._defaultLandingPage = value;
  }
  public resetDefaultLandingPage() {
    this._defaultLandingPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultLandingPageInput() {
    return this._defaultLandingPage;
  }

  // session_duration - computed: true, optional: true, required: false
  private _sessionDuration?: string; 
  public get sessionDuration() {
    return this.getStringAttribute('session_duration');
  }
  public set sessionDuration(value: string) {
    this._sessionDuration = value;
  }
  public resetSessionDuration() {
    this._sessionDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionDurationInput() {
    return this._sessionDuration;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory alicloud_cloud_sso_directory}
*/
export class CloudSsoDirectory extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_cloud_sso_directory";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CloudSsoDirectory resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CloudSsoDirectory to import
  * @param importFromId The id of the existing CloudSsoDirectory that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CloudSsoDirectory to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_cloud_sso_directory", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/cloud_sso_directory alicloud_cloud_sso_directory} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CloudSsoDirectoryConfig = {}
  */
  public constructor(scope: Construct, id: string, config: CloudSsoDirectoryConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'alicloud_cloud_sso_directory',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._directoryGlobalAccessStatus = config.directoryGlobalAccessStatus;
    this._directoryName = config.directoryName;
    this._id = config.id;
    this._mfaAuthenticationStatus = config.mfaAuthenticationStatus;
    this._scimSynchronizationStatus = config.scimSynchronizationStatus;
    this._loginPreference.internalValue = config.loginPreference;
    this._mfaAuthenticationSettingInfo.internalValue = config.mfaAuthenticationSettingInfo;
    this._passwordPolicy.internalValue = config.passwordPolicy;
    this._samlIdentityProviderConfiguration.internalValue = config.samlIdentityProviderConfiguration;
    this._samlServiceProvider.internalValue = config.samlServiceProvider;
    this._timeouts.internalValue = config.timeouts;
    this._userProvisioningConfiguration.internalValue = config.userProvisioningConfiguration;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_time - computed: true, optional: false, required: false
  public get createTime() {
    return this.getStringAttribute('create_time');
  }

  // directory_global_access_status - computed: true, optional: true, required: false
  private _directoryGlobalAccessStatus?: string; 
  public get directoryGlobalAccessStatus() {
    return this.getStringAttribute('directory_global_access_status');
  }
  public set directoryGlobalAccessStatus(value: string) {
    this._directoryGlobalAccessStatus = value;
  }
  public resetDirectoryGlobalAccessStatus() {
    this._directoryGlobalAccessStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryGlobalAccessStatusInput() {
    return this._directoryGlobalAccessStatus;
  }

  // directory_name - computed: false, optional: true, required: false
  private _directoryName?: string; 
  public get directoryName() {
    return this.getStringAttribute('directory_name');
  }
  public set directoryName(value: string) {
    this._directoryName = value;
  }
  public resetDirectoryName() {
    this._directoryName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryNameInput() {
    return this._directoryName;
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

  // mfa_authentication_status - computed: true, optional: true, required: false
  private _mfaAuthenticationStatus?: string; 
  public get mfaAuthenticationStatus() {
    return this.getStringAttribute('mfa_authentication_status');
  }
  public set mfaAuthenticationStatus(value: string) {
    this._mfaAuthenticationStatus = value;
  }
  public resetMfaAuthenticationStatus() {
    this._mfaAuthenticationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaAuthenticationStatusInput() {
    return this._mfaAuthenticationStatus;
  }

  // scim_synchronization_status - computed: true, optional: true, required: false
  private _scimSynchronizationStatus?: string; 
  public get scimSynchronizationStatus() {
    return this.getStringAttribute('scim_synchronization_status');
  }
  public set scimSynchronizationStatus(value: string) {
    this._scimSynchronizationStatus = value;
  }
  public resetScimSynchronizationStatus() {
    this._scimSynchronizationStatus = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scimSynchronizationStatusInput() {
    return this._scimSynchronizationStatus;
  }

  // login_preference - computed: false, optional: true, required: false
  private _loginPreference = new CloudSsoDirectoryLoginPreferenceOutputReference(this, "login_preference");
  public get loginPreference() {
    return this._loginPreference;
  }
  public putLoginPreference(value: CloudSsoDirectoryLoginPreference) {
    this._loginPreference.internalValue = value;
  }
  public resetLoginPreference() {
    this._loginPreference.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginPreferenceInput() {
    return this._loginPreference.internalValue;
  }

  // mfa_authentication_setting_info - computed: false, optional: true, required: false
  private _mfaAuthenticationSettingInfo = new CloudSsoDirectoryMfaAuthenticationSettingInfoOutputReference(this, "mfa_authentication_setting_info");
  public get mfaAuthenticationSettingInfo() {
    return this._mfaAuthenticationSettingInfo;
  }
  public putMfaAuthenticationSettingInfo(value: CloudSsoDirectoryMfaAuthenticationSettingInfo) {
    this._mfaAuthenticationSettingInfo.internalValue = value;
  }
  public resetMfaAuthenticationSettingInfo() {
    this._mfaAuthenticationSettingInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaAuthenticationSettingInfoInput() {
    return this._mfaAuthenticationSettingInfo.internalValue;
  }

  // password_policy - computed: false, optional: true, required: false
  private _passwordPolicy = new CloudSsoDirectoryPasswordPolicyOutputReference(this, "password_policy");
  public get passwordPolicy() {
    return this._passwordPolicy;
  }
  public putPasswordPolicy(value: CloudSsoDirectoryPasswordPolicy) {
    this._passwordPolicy.internalValue = value;
  }
  public resetPasswordPolicy() {
    this._passwordPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordPolicyInput() {
    return this._passwordPolicy.internalValue;
  }

  // saml_identity_provider_configuration - computed: false, optional: true, required: false
  private _samlIdentityProviderConfiguration = new CloudSsoDirectorySamlIdentityProviderConfigurationOutputReference(this, "saml_identity_provider_configuration");
  public get samlIdentityProviderConfiguration() {
    return this._samlIdentityProviderConfiguration;
  }
  public putSamlIdentityProviderConfiguration(value: CloudSsoDirectorySamlIdentityProviderConfiguration) {
    this._samlIdentityProviderConfiguration.internalValue = value;
  }
  public resetSamlIdentityProviderConfiguration() {
    this._samlIdentityProviderConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlIdentityProviderConfigurationInput() {
    return this._samlIdentityProviderConfiguration.internalValue;
  }

  // saml_service_provider - computed: false, optional: true, required: false
  private _samlServiceProvider = new CloudSsoDirectorySamlServiceProviderOutputReference(this, "saml_service_provider");
  public get samlServiceProvider() {
    return this._samlServiceProvider;
  }
  public putSamlServiceProvider(value: CloudSsoDirectorySamlServiceProvider) {
    this._samlServiceProvider.internalValue = value;
  }
  public resetSamlServiceProvider() {
    this._samlServiceProvider.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samlServiceProviderInput() {
    return this._samlServiceProvider.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CloudSsoDirectoryTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CloudSsoDirectoryTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // user_provisioning_configuration - computed: false, optional: true, required: false
  private _userProvisioningConfiguration = new CloudSsoDirectoryUserProvisioningConfigurationOutputReference(this, "user_provisioning_configuration");
  public get userProvisioningConfiguration() {
    return this._userProvisioningConfiguration;
  }
  public putUserProvisioningConfiguration(value: CloudSsoDirectoryUserProvisioningConfiguration) {
    this._userProvisioningConfiguration.internalValue = value;
  }
  public resetUserProvisioningConfiguration() {
    this._userProvisioningConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userProvisioningConfigurationInput() {
    return this._userProvisioningConfiguration.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      directory_global_access_status: cdktf.stringToTerraform(this._directoryGlobalAccessStatus),
      directory_name: cdktf.stringToTerraform(this._directoryName),
      id: cdktf.stringToTerraform(this._id),
      mfa_authentication_status: cdktf.stringToTerraform(this._mfaAuthenticationStatus),
      scim_synchronization_status: cdktf.stringToTerraform(this._scimSynchronizationStatus),
      login_preference: cloudSsoDirectoryLoginPreferenceToTerraform(this._loginPreference.internalValue),
      mfa_authentication_setting_info: cloudSsoDirectoryMfaAuthenticationSettingInfoToTerraform(this._mfaAuthenticationSettingInfo.internalValue),
      password_policy: cloudSsoDirectoryPasswordPolicyToTerraform(this._passwordPolicy.internalValue),
      saml_identity_provider_configuration: cloudSsoDirectorySamlIdentityProviderConfigurationToTerraform(this._samlIdentityProviderConfiguration.internalValue),
      saml_service_provider: cloudSsoDirectorySamlServiceProviderToTerraform(this._samlServiceProvider.internalValue),
      timeouts: cloudSsoDirectoryTimeoutsToTerraform(this._timeouts.internalValue),
      user_provisioning_configuration: cloudSsoDirectoryUserProvisioningConfigurationToTerraform(this._userProvisioningConfiguration.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      directory_global_access_status: {
        value: cdktf.stringToHclTerraform(this._directoryGlobalAccessStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      directory_name: {
        value: cdktf.stringToHclTerraform(this._directoryName),
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
      mfa_authentication_status: {
        value: cdktf.stringToHclTerraform(this._mfaAuthenticationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scim_synchronization_status: {
        value: cdktf.stringToHclTerraform(this._scimSynchronizationStatus),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      login_preference: {
        value: cloudSsoDirectoryLoginPreferenceToHclTerraform(this._loginPreference.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudSsoDirectoryLoginPreferenceList",
      },
      mfa_authentication_setting_info: {
        value: cloudSsoDirectoryMfaAuthenticationSettingInfoToHclTerraform(this._mfaAuthenticationSettingInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudSsoDirectoryMfaAuthenticationSettingInfoList",
      },
      password_policy: {
        value: cloudSsoDirectoryPasswordPolicyToHclTerraform(this._passwordPolicy.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudSsoDirectoryPasswordPolicyList",
      },
      saml_identity_provider_configuration: {
        value: cloudSsoDirectorySamlIdentityProviderConfigurationToHclTerraform(this._samlIdentityProviderConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudSsoDirectorySamlIdentityProviderConfigurationList",
      },
      saml_service_provider: {
        value: cloudSsoDirectorySamlServiceProviderToHclTerraform(this._samlServiceProvider.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudSsoDirectorySamlServiceProviderList",
      },
      timeouts: {
        value: cloudSsoDirectoryTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CloudSsoDirectoryTimeouts",
      },
      user_provisioning_configuration: {
        value: cloudSsoDirectoryUserProvisioningConfigurationToHclTerraform(this._userProvisioningConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "CloudSsoDirectoryUserProvisioningConfigurationList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
