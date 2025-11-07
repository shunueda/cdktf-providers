// https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomizedSigninPageConfig extends cdktf.TerraformMetaArguments {
  /**
  * brand id of the preview signin page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#brand_id CustomizedSigninPage#brand_id}
  */
  readonly brandId: string;
  /**
  * page content of the preview signin page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#page_content CustomizedSigninPage#page_content}
  */
  readonly pageContent: string;
  /**
  * widget version specified as a Semver. The following are currently supported
  * 			*, ^1, ^2, ^3, ^4, ^5, ^6, ^7, 1.6, 1.7, 1.8, 1.9, 1.10, 1.11, 1.12, 1.13, 2.1, 2.2, 2.3, 2.4,
  * 			2.5, 2.6, 2.7, 2.8, 2.9, 2.10, 2.11, 2.12, 2.13, 2.14, 2.15, 2.16, 2.17, 2.18, 2.19, 2.20, 2.21,
  * 			3.0, 3.1, 3.2, 3.3, 3.4, 3.5, 3.6, 3.7, 3.8, 3.9, 4.0, 4.1, 4.2, 4.3, 4.4, 4.5, 5.0, 5.1, 5.2, 5.3,
  * 			5.4, 5.5, 5.6, 5.7, 5.8, 5.9, 5.10, 5.11, 5.12, 5.13, 5.14, 5.15, 5.16, 6.0, 6.1, 6.2, 6.3, 6.4, 6.5,
  * 			6.6, 6.7, 6.8, 6.9, 7.0, 7.1, 7.2, 7.3, 7.4, 7.5, 7.6, 7.7, 7.8, 7.9, 7.10, 7.11, 7.12, 7.13.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#widget_version CustomizedSigninPage#widget_version}
  */
  readonly widgetVersion: string;
  /**
  * content_security_policy_setting block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#content_security_policy_setting CustomizedSigninPage#content_security_policy_setting}
  */
  readonly contentSecurityPolicySetting?: CustomizedSigninPageContentSecurityPolicySetting;
  /**
  * widget_customizations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#widget_customizations CustomizedSigninPage#widget_customizations}
  */
  readonly widgetCustomizations?: CustomizedSigninPageWidgetCustomizations;
}
export interface CustomizedSigninPageContentSecurityPolicySetting {
  /**
  * enforced or report_only
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#mode CustomizedSigninPage#mode}
  */
  readonly mode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#report_uri CustomizedSigninPage#report_uri}
  */
  readonly reportUri?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#src_list CustomizedSigninPage#src_list}
  */
  readonly srcList?: string[];
}

export function customizedSigninPageContentSecurityPolicySettingToTerraform(struct?: CustomizedSigninPageContentSecurityPolicySetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mode: cdktf.stringToTerraform(struct!.mode),
    report_uri: cdktf.stringToTerraform(struct!.reportUri),
    src_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.srcList),
  }
}


export function customizedSigninPageContentSecurityPolicySettingToHclTerraform(struct?: CustomizedSigninPageContentSecurityPolicySetting | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mode: {
      value: cdktf.stringToHclTerraform(struct!.mode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    report_uri: {
      value: cdktf.stringToHclTerraform(struct!.reportUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    src_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.srcList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomizedSigninPageContentSecurityPolicySettingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomizedSigninPageContentSecurityPolicySetting | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mode !== undefined) {
      hasAnyValues = true;
      internalValueResult.mode = this._mode;
    }
    if (this._reportUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.reportUri = this._reportUri;
    }
    if (this._srcList !== undefined) {
      hasAnyValues = true;
      internalValueResult.srcList = this._srcList;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomizedSigninPageContentSecurityPolicySetting | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mode = undefined;
      this._reportUri = undefined;
      this._srcList = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mode = value.mode;
      this._reportUri = value.reportUri;
      this._srcList = value.srcList;
    }
  }

  // mode - computed: false, optional: true, required: false
  private _mode?: string; 
  public get mode() {
    return this.getStringAttribute('mode');
  }
  public set mode(value: string) {
    this._mode = value;
  }
  public resetMode() {
    this._mode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modeInput() {
    return this._mode;
  }

  // report_uri - computed: false, optional: true, required: false
  private _reportUri?: string; 
  public get reportUri() {
    return this.getStringAttribute('report_uri');
  }
  public set reportUri(value: string) {
    this._reportUri = value;
  }
  public resetReportUri() {
    this._reportUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get reportUriInput() {
    return this._reportUri;
  }

  // src_list - computed: false, optional: true, required: false
  private _srcList?: string[]; 
  public get srcList() {
    return this.getListAttribute('src_list');
  }
  public set srcList(value: string[]) {
    this._srcList = value;
  }
  public resetSrcList() {
    this._srcList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcListInput() {
    return this._srcList;
  }
}
export interface CustomizedSigninPageWidgetCustomizations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#authenticator_page_custom_link_label CustomizedSigninPage#authenticator_page_custom_link_label}
  */
  readonly authenticatorPageCustomLinkLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#authenticator_page_custom_link_url CustomizedSigninPage#authenticator_page_custom_link_url}
  */
  readonly authenticatorPageCustomLinkUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#classic_recovery_flow_email_or_username_label CustomizedSigninPage#classic_recovery_flow_email_or_username_label}
  */
  readonly classicRecoveryFlowEmailOrUsernameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#custom_link_1_label CustomizedSigninPage#custom_link_1_label}
  */
  readonly customLink1Label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#custom_link_1_url CustomizedSigninPage#custom_link_1_url}
  */
  readonly customLink1Url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#custom_link_2_label CustomizedSigninPage#custom_link_2_label}
  */
  readonly customLink2Label?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#custom_link_2_url CustomizedSigninPage#custom_link_2_url}
  */
  readonly customLink2Url?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#forgot_password_label CustomizedSigninPage#forgot_password_label}
  */
  readonly forgotPasswordLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#forgot_password_url CustomizedSigninPage#forgot_password_url}
  */
  readonly forgotPasswordUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#help_label CustomizedSigninPage#help_label}
  */
  readonly helpLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#help_url CustomizedSigninPage#help_url}
  */
  readonly helpUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#password_info_tip CustomizedSigninPage#password_info_tip}
  */
  readonly passwordInfoTip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#password_label CustomizedSigninPage#password_label}
  */
  readonly passwordLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#show_password_visibility_toggle CustomizedSigninPage#show_password_visibility_toggle}
  */
  readonly showPasswordVisibilityToggle?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#show_user_identifier CustomizedSigninPage#show_user_identifier}
  */
  readonly showUserIdentifier?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#sign_in_label CustomizedSigninPage#sign_in_label}
  */
  readonly signInLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#unlock_account_label CustomizedSigninPage#unlock_account_label}
  */
  readonly unlockAccountLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#unlock_account_url CustomizedSigninPage#unlock_account_url}
  */
  readonly unlockAccountUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#username_info_tip CustomizedSigninPage#username_info_tip}
  */
  readonly usernameInfoTip?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#username_label CustomizedSigninPage#username_label}
  */
  readonly usernameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#widget_generation CustomizedSigninPage#widget_generation}
  */
  readonly widgetGeneration: string;
}

export function customizedSigninPageWidgetCustomizationsToTerraform(struct?: CustomizedSigninPageWidgetCustomizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authenticator_page_custom_link_label: cdktf.stringToTerraform(struct!.authenticatorPageCustomLinkLabel),
    authenticator_page_custom_link_url: cdktf.stringToTerraform(struct!.authenticatorPageCustomLinkUrl),
    classic_recovery_flow_email_or_username_label: cdktf.stringToTerraform(struct!.classicRecoveryFlowEmailOrUsernameLabel),
    custom_link_1_label: cdktf.stringToTerraform(struct!.customLink1Label),
    custom_link_1_url: cdktf.stringToTerraform(struct!.customLink1Url),
    custom_link_2_label: cdktf.stringToTerraform(struct!.customLink2Label),
    custom_link_2_url: cdktf.stringToTerraform(struct!.customLink2Url),
    forgot_password_label: cdktf.stringToTerraform(struct!.forgotPasswordLabel),
    forgot_password_url: cdktf.stringToTerraform(struct!.forgotPasswordUrl),
    help_label: cdktf.stringToTerraform(struct!.helpLabel),
    help_url: cdktf.stringToTerraform(struct!.helpUrl),
    password_info_tip: cdktf.stringToTerraform(struct!.passwordInfoTip),
    password_label: cdktf.stringToTerraform(struct!.passwordLabel),
    show_password_visibility_toggle: cdktf.booleanToTerraform(struct!.showPasswordVisibilityToggle),
    show_user_identifier: cdktf.booleanToTerraform(struct!.showUserIdentifier),
    sign_in_label: cdktf.stringToTerraform(struct!.signInLabel),
    unlock_account_label: cdktf.stringToTerraform(struct!.unlockAccountLabel),
    unlock_account_url: cdktf.stringToTerraform(struct!.unlockAccountUrl),
    username_info_tip: cdktf.stringToTerraform(struct!.usernameInfoTip),
    username_label: cdktf.stringToTerraform(struct!.usernameLabel),
    widget_generation: cdktf.stringToTerraform(struct!.widgetGeneration),
  }
}


export function customizedSigninPageWidgetCustomizationsToHclTerraform(struct?: CustomizedSigninPageWidgetCustomizations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authenticator_page_custom_link_label: {
      value: cdktf.stringToHclTerraform(struct!.authenticatorPageCustomLinkLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authenticator_page_custom_link_url: {
      value: cdktf.stringToHclTerraform(struct!.authenticatorPageCustomLinkUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    classic_recovery_flow_email_or_username_label: {
      value: cdktf.stringToHclTerraform(struct!.classicRecoveryFlowEmailOrUsernameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_link_1_label: {
      value: cdktf.stringToHclTerraform(struct!.customLink1Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_link_1_url: {
      value: cdktf.stringToHclTerraform(struct!.customLink1Url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_link_2_label: {
      value: cdktf.stringToHclTerraform(struct!.customLink2Label),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    custom_link_2_url: {
      value: cdktf.stringToHclTerraform(struct!.customLink2Url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forgot_password_label: {
      value: cdktf.stringToHclTerraform(struct!.forgotPasswordLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    forgot_password_url: {
      value: cdktf.stringToHclTerraform(struct!.forgotPasswordUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    help_label: {
      value: cdktf.stringToHclTerraform(struct!.helpLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    help_url: {
      value: cdktf.stringToHclTerraform(struct!.helpUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_info_tip: {
      value: cdktf.stringToHclTerraform(struct!.passwordInfoTip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_label: {
      value: cdktf.stringToHclTerraform(struct!.passwordLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    show_password_visibility_toggle: {
      value: cdktf.booleanToHclTerraform(struct!.showPasswordVisibilityToggle),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    show_user_identifier: {
      value: cdktf.booleanToHclTerraform(struct!.showUserIdentifier),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sign_in_label: {
      value: cdktf.stringToHclTerraform(struct!.signInLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unlock_account_label: {
      value: cdktf.stringToHclTerraform(struct!.unlockAccountLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    unlock_account_url: {
      value: cdktf.stringToHclTerraform(struct!.unlockAccountUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_info_tip: {
      value: cdktf.stringToHclTerraform(struct!.usernameInfoTip),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_label: {
      value: cdktf.stringToHclTerraform(struct!.usernameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    widget_generation: {
      value: cdktf.stringToHclTerraform(struct!.widgetGeneration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class CustomizedSigninPageWidgetCustomizationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): CustomizedSigninPageWidgetCustomizations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authenticatorPageCustomLinkLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticatorPageCustomLinkLabel = this._authenticatorPageCustomLinkLabel;
    }
    if (this._authenticatorPageCustomLinkUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.authenticatorPageCustomLinkUrl = this._authenticatorPageCustomLinkUrl;
    }
    if (this._classicRecoveryFlowEmailOrUsernameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.classicRecoveryFlowEmailOrUsernameLabel = this._classicRecoveryFlowEmailOrUsernameLabel;
    }
    if (this._customLink1Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLink1Label = this._customLink1Label;
    }
    if (this._customLink1Url !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLink1Url = this._customLink1Url;
    }
    if (this._customLink2Label !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLink2Label = this._customLink2Label;
    }
    if (this._customLink2Url !== undefined) {
      hasAnyValues = true;
      internalValueResult.customLink2Url = this._customLink2Url;
    }
    if (this._forgotPasswordLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.forgotPasswordLabel = this._forgotPasswordLabel;
    }
    if (this._forgotPasswordUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.forgotPasswordUrl = this._forgotPasswordUrl;
    }
    if (this._helpLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.helpLabel = this._helpLabel;
    }
    if (this._helpUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.helpUrl = this._helpUrl;
    }
    if (this._passwordInfoTip !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordInfoTip = this._passwordInfoTip;
    }
    if (this._passwordLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordLabel = this._passwordLabel;
    }
    if (this._showPasswordVisibilityToggle !== undefined) {
      hasAnyValues = true;
      internalValueResult.showPasswordVisibilityToggle = this._showPasswordVisibilityToggle;
    }
    if (this._showUserIdentifier !== undefined) {
      hasAnyValues = true;
      internalValueResult.showUserIdentifier = this._showUserIdentifier;
    }
    if (this._signInLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.signInLabel = this._signInLabel;
    }
    if (this._unlockAccountLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.unlockAccountLabel = this._unlockAccountLabel;
    }
    if (this._unlockAccountUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.unlockAccountUrl = this._unlockAccountUrl;
    }
    if (this._usernameInfoTip !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameInfoTip = this._usernameInfoTip;
    }
    if (this._usernameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameLabel = this._usernameLabel;
    }
    if (this._widgetGeneration !== undefined) {
      hasAnyValues = true;
      internalValueResult.widgetGeneration = this._widgetGeneration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomizedSigninPageWidgetCustomizations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._authenticatorPageCustomLinkLabel = undefined;
      this._authenticatorPageCustomLinkUrl = undefined;
      this._classicRecoveryFlowEmailOrUsernameLabel = undefined;
      this._customLink1Label = undefined;
      this._customLink1Url = undefined;
      this._customLink2Label = undefined;
      this._customLink2Url = undefined;
      this._forgotPasswordLabel = undefined;
      this._forgotPasswordUrl = undefined;
      this._helpLabel = undefined;
      this._helpUrl = undefined;
      this._passwordInfoTip = undefined;
      this._passwordLabel = undefined;
      this._showPasswordVisibilityToggle = undefined;
      this._showUserIdentifier = undefined;
      this._signInLabel = undefined;
      this._unlockAccountLabel = undefined;
      this._unlockAccountUrl = undefined;
      this._usernameInfoTip = undefined;
      this._usernameLabel = undefined;
      this._widgetGeneration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._authenticatorPageCustomLinkLabel = value.authenticatorPageCustomLinkLabel;
      this._authenticatorPageCustomLinkUrl = value.authenticatorPageCustomLinkUrl;
      this._classicRecoveryFlowEmailOrUsernameLabel = value.classicRecoveryFlowEmailOrUsernameLabel;
      this._customLink1Label = value.customLink1Label;
      this._customLink1Url = value.customLink1Url;
      this._customLink2Label = value.customLink2Label;
      this._customLink2Url = value.customLink2Url;
      this._forgotPasswordLabel = value.forgotPasswordLabel;
      this._forgotPasswordUrl = value.forgotPasswordUrl;
      this._helpLabel = value.helpLabel;
      this._helpUrl = value.helpUrl;
      this._passwordInfoTip = value.passwordInfoTip;
      this._passwordLabel = value.passwordLabel;
      this._showPasswordVisibilityToggle = value.showPasswordVisibilityToggle;
      this._showUserIdentifier = value.showUserIdentifier;
      this._signInLabel = value.signInLabel;
      this._unlockAccountLabel = value.unlockAccountLabel;
      this._unlockAccountUrl = value.unlockAccountUrl;
      this._usernameInfoTip = value.usernameInfoTip;
      this._usernameLabel = value.usernameLabel;
      this._widgetGeneration = value.widgetGeneration;
    }
  }

  // authenticator_page_custom_link_label - computed: false, optional: true, required: false
  private _authenticatorPageCustomLinkLabel?: string; 
  public get authenticatorPageCustomLinkLabel() {
    return this.getStringAttribute('authenticator_page_custom_link_label');
  }
  public set authenticatorPageCustomLinkLabel(value: string) {
    this._authenticatorPageCustomLinkLabel = value;
  }
  public resetAuthenticatorPageCustomLinkLabel() {
    this._authenticatorPageCustomLinkLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorPageCustomLinkLabelInput() {
    return this._authenticatorPageCustomLinkLabel;
  }

  // authenticator_page_custom_link_url - computed: false, optional: true, required: false
  private _authenticatorPageCustomLinkUrl?: string; 
  public get authenticatorPageCustomLinkUrl() {
    return this.getStringAttribute('authenticator_page_custom_link_url');
  }
  public set authenticatorPageCustomLinkUrl(value: string) {
    this._authenticatorPageCustomLinkUrl = value;
  }
  public resetAuthenticatorPageCustomLinkUrl() {
    this._authenticatorPageCustomLinkUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authenticatorPageCustomLinkUrlInput() {
    return this._authenticatorPageCustomLinkUrl;
  }

  // classic_recovery_flow_email_or_username_label - computed: false, optional: true, required: false
  private _classicRecoveryFlowEmailOrUsernameLabel?: string; 
  public get classicRecoveryFlowEmailOrUsernameLabel() {
    return this.getStringAttribute('classic_recovery_flow_email_or_username_label');
  }
  public set classicRecoveryFlowEmailOrUsernameLabel(value: string) {
    this._classicRecoveryFlowEmailOrUsernameLabel = value;
  }
  public resetClassicRecoveryFlowEmailOrUsernameLabel() {
    this._classicRecoveryFlowEmailOrUsernameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get classicRecoveryFlowEmailOrUsernameLabelInput() {
    return this._classicRecoveryFlowEmailOrUsernameLabel;
  }

  // custom_link_1_label - computed: false, optional: true, required: false
  private _customLink1Label?: string; 
  public get customLink1Label() {
    return this.getStringAttribute('custom_link_1_label');
  }
  public set customLink1Label(value: string) {
    this._customLink1Label = value;
  }
  public resetCustomLink1Label() {
    this._customLink1Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLink1LabelInput() {
    return this._customLink1Label;
  }

  // custom_link_1_url - computed: false, optional: true, required: false
  private _customLink1Url?: string; 
  public get customLink1Url() {
    return this.getStringAttribute('custom_link_1_url');
  }
  public set customLink1Url(value: string) {
    this._customLink1Url = value;
  }
  public resetCustomLink1Url() {
    this._customLink1Url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLink1UrlInput() {
    return this._customLink1Url;
  }

  // custom_link_2_label - computed: false, optional: true, required: false
  private _customLink2Label?: string; 
  public get customLink2Label() {
    return this.getStringAttribute('custom_link_2_label');
  }
  public set customLink2Label(value: string) {
    this._customLink2Label = value;
  }
  public resetCustomLink2Label() {
    this._customLink2Label = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLink2LabelInput() {
    return this._customLink2Label;
  }

  // custom_link_2_url - computed: false, optional: true, required: false
  private _customLink2Url?: string; 
  public get customLink2Url() {
    return this.getStringAttribute('custom_link_2_url');
  }
  public set customLink2Url(value: string) {
    this._customLink2Url = value;
  }
  public resetCustomLink2Url() {
    this._customLink2Url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLink2UrlInput() {
    return this._customLink2Url;
  }

  // forgot_password_label - computed: false, optional: true, required: false
  private _forgotPasswordLabel?: string; 
  public get forgotPasswordLabel() {
    return this.getStringAttribute('forgot_password_label');
  }
  public set forgotPasswordLabel(value: string) {
    this._forgotPasswordLabel = value;
  }
  public resetForgotPasswordLabel() {
    this._forgotPasswordLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forgotPasswordLabelInput() {
    return this._forgotPasswordLabel;
  }

  // forgot_password_url - computed: false, optional: true, required: false
  private _forgotPasswordUrl?: string; 
  public get forgotPasswordUrl() {
    return this.getStringAttribute('forgot_password_url');
  }
  public set forgotPasswordUrl(value: string) {
    this._forgotPasswordUrl = value;
  }
  public resetForgotPasswordUrl() {
    this._forgotPasswordUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forgotPasswordUrlInput() {
    return this._forgotPasswordUrl;
  }

  // help_label - computed: false, optional: true, required: false
  private _helpLabel?: string; 
  public get helpLabel() {
    return this.getStringAttribute('help_label');
  }
  public set helpLabel(value: string) {
    this._helpLabel = value;
  }
  public resetHelpLabel() {
    this._helpLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpLabelInput() {
    return this._helpLabel;
  }

  // help_url - computed: false, optional: true, required: false
  private _helpUrl?: string; 
  public get helpUrl() {
    return this.getStringAttribute('help_url');
  }
  public set helpUrl(value: string) {
    this._helpUrl = value;
  }
  public resetHelpUrl() {
    this._helpUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpUrlInput() {
    return this._helpUrl;
  }

  // password_info_tip - computed: false, optional: true, required: false
  private _passwordInfoTip?: string; 
  public get passwordInfoTip() {
    return this.getStringAttribute('password_info_tip');
  }
  public set passwordInfoTip(value: string) {
    this._passwordInfoTip = value;
  }
  public resetPasswordInfoTip() {
    this._passwordInfoTip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInfoTipInput() {
    return this._passwordInfoTip;
  }

  // password_label - computed: false, optional: true, required: false
  private _passwordLabel?: string; 
  public get passwordLabel() {
    return this.getStringAttribute('password_label');
  }
  public set passwordLabel(value: string) {
    this._passwordLabel = value;
  }
  public resetPasswordLabel() {
    this._passwordLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordLabelInput() {
    return this._passwordLabel;
  }

  // show_password_visibility_toggle - computed: true, optional: true, required: false
  private _showPasswordVisibilityToggle?: boolean | cdktf.IResolvable; 
  public get showPasswordVisibilityToggle() {
    return this.getBooleanAttribute('show_password_visibility_toggle');
  }
  public set showPasswordVisibilityToggle(value: boolean | cdktf.IResolvable) {
    this._showPasswordVisibilityToggle = value;
  }
  public resetShowPasswordVisibilityToggle() {
    this._showPasswordVisibilityToggle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showPasswordVisibilityToggleInput() {
    return this._showPasswordVisibilityToggle;
  }

  // show_user_identifier - computed: true, optional: true, required: false
  private _showUserIdentifier?: boolean | cdktf.IResolvable; 
  public get showUserIdentifier() {
    return this.getBooleanAttribute('show_user_identifier');
  }
  public set showUserIdentifier(value: boolean | cdktf.IResolvable) {
    this._showUserIdentifier = value;
  }
  public resetShowUserIdentifier() {
    this._showUserIdentifier = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get showUserIdentifierInput() {
    return this._showUserIdentifier;
  }

  // sign_in_label - computed: false, optional: true, required: false
  private _signInLabel?: string; 
  public get signInLabel() {
    return this.getStringAttribute('sign_in_label');
  }
  public set signInLabel(value: string) {
    this._signInLabel = value;
  }
  public resetSignInLabel() {
    this._signInLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get signInLabelInput() {
    return this._signInLabel;
  }

  // unlock_account_label - computed: false, optional: true, required: false
  private _unlockAccountLabel?: string; 
  public get unlockAccountLabel() {
    return this.getStringAttribute('unlock_account_label');
  }
  public set unlockAccountLabel(value: string) {
    this._unlockAccountLabel = value;
  }
  public resetUnlockAccountLabel() {
    this._unlockAccountLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unlockAccountLabelInput() {
    return this._unlockAccountLabel;
  }

  // unlock_account_url - computed: false, optional: true, required: false
  private _unlockAccountUrl?: string; 
  public get unlockAccountUrl() {
    return this.getStringAttribute('unlock_account_url');
  }
  public set unlockAccountUrl(value: string) {
    this._unlockAccountUrl = value;
  }
  public resetUnlockAccountUrl() {
    this._unlockAccountUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get unlockAccountUrlInput() {
    return this._unlockAccountUrl;
  }

  // username_info_tip - computed: false, optional: true, required: false
  private _usernameInfoTip?: string; 
  public get usernameInfoTip() {
    return this.getStringAttribute('username_info_tip');
  }
  public set usernameInfoTip(value: string) {
    this._usernameInfoTip = value;
  }
  public resetUsernameInfoTip() {
    this._usernameInfoTip = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInfoTipInput() {
    return this._usernameInfoTip;
  }

  // username_label - computed: false, optional: true, required: false
  private _usernameLabel?: string; 
  public get usernameLabel() {
    return this.getStringAttribute('username_label');
  }
  public set usernameLabel(value: string) {
    this._usernameLabel = value;
  }
  public resetUsernameLabel() {
    this._usernameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameLabelInput() {
    return this._usernameLabel;
  }

  // widget_generation - computed: false, optional: false, required: true
  private _widgetGeneration?: string; 
  public get widgetGeneration() {
    return this.getStringAttribute('widget_generation');
  }
  public set widgetGeneration(value: string) {
    this._widgetGeneration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetGenerationInput() {
    return this._widgetGeneration;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page okta_customized_signin_page}
*/
export class CustomizedSigninPage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "okta_customized_signin_page";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a CustomizedSigninPage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the CustomizedSigninPage to import
  * @param importFromId The id of the existing CustomizedSigninPage that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the CustomizedSigninPage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "okta_customized_signin_page", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/okta/6.4.0/docs/resources/customized_signin_page okta_customized_signin_page} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomizedSigninPageConfig
  */
  public constructor(scope: Construct, id: string, config: CustomizedSigninPageConfig) {
    super(scope, id, {
      terraformResourceType: 'okta_customized_signin_page',
      terraformGeneratorMetadata: {
        providerName: 'okta',
        providerVersion: '6.4.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._brandId = config.brandId;
    this._pageContent = config.pageContent;
    this._widgetVersion = config.widgetVersion;
    this._contentSecurityPolicySetting.internalValue = config.contentSecurityPolicySetting;
    this._widgetCustomizations.internalValue = config.widgetCustomizations;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // brand_id - computed: false, optional: false, required: true
  private _brandId?: string; 
  public get brandId() {
    return this.getStringAttribute('brand_id');
  }
  public set brandId(value: string) {
    this._brandId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get brandIdInput() {
    return this._brandId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // page_content - computed: false, optional: false, required: true
  private _pageContent?: string; 
  public get pageContent() {
    return this.getStringAttribute('page_content');
  }
  public set pageContent(value: string) {
    this._pageContent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get pageContentInput() {
    return this._pageContent;
  }

  // widget_version - computed: false, optional: false, required: true
  private _widgetVersion?: string; 
  public get widgetVersion() {
    return this.getStringAttribute('widget_version');
  }
  public set widgetVersion(value: string) {
    this._widgetVersion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetVersionInput() {
    return this._widgetVersion;
  }

  // content_security_policy_setting - computed: false, optional: true, required: false
  private _contentSecurityPolicySetting = new CustomizedSigninPageContentSecurityPolicySettingOutputReference(this, "content_security_policy_setting");
  public get contentSecurityPolicySetting() {
    return this._contentSecurityPolicySetting;
  }
  public putContentSecurityPolicySetting(value: CustomizedSigninPageContentSecurityPolicySetting) {
    this._contentSecurityPolicySetting.internalValue = value;
  }
  public resetContentSecurityPolicySetting() {
    this._contentSecurityPolicySetting.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get contentSecurityPolicySettingInput() {
    return this._contentSecurityPolicySetting.internalValue;
  }

  // widget_customizations - computed: false, optional: true, required: false
  private _widgetCustomizations = new CustomizedSigninPageWidgetCustomizationsOutputReference(this, "widget_customizations");
  public get widgetCustomizations() {
    return this._widgetCustomizations;
  }
  public putWidgetCustomizations(value: CustomizedSigninPageWidgetCustomizations) {
    this._widgetCustomizations.internalValue = value;
  }
  public resetWidgetCustomizations() {
    this._widgetCustomizations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widgetCustomizationsInput() {
    return this._widgetCustomizations.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      brand_id: cdktf.stringToTerraform(this._brandId),
      page_content: cdktf.stringToTerraform(this._pageContent),
      widget_version: cdktf.stringToTerraform(this._widgetVersion),
      content_security_policy_setting: customizedSigninPageContentSecurityPolicySettingToTerraform(this._contentSecurityPolicySetting.internalValue),
      widget_customizations: customizedSigninPageWidgetCustomizationsToTerraform(this._widgetCustomizations.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      brand_id: {
        value: cdktf.stringToHclTerraform(this._brandId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      page_content: {
        value: cdktf.stringToHclTerraform(this._pageContent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      widget_version: {
        value: cdktf.stringToHclTerraform(this._widgetVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      content_security_policy_setting: {
        value: customizedSigninPageContentSecurityPolicySettingToHclTerraform(this._contentSecurityPolicySetting.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CustomizedSigninPageContentSecurityPolicySetting",
      },
      widget_customizations: {
        value: customizedSigninPageWidgetCustomizationsToHclTerraform(this._widgetCustomizations.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "CustomizedSigninPageWidgetCustomizations",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
