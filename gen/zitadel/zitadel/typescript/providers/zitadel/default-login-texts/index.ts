// https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DefaultLoginTextsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#email_verification_done_text DefaultLoginTexts#email_verification_done_text}
  */
  readonly emailVerificationDoneText?: DefaultLoginTextsEmailVerificationDoneText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#email_verification_text DefaultLoginTexts#email_verification_text}
  */
  readonly emailVerificationText?: DefaultLoginTextsEmailVerificationText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#external_registration_user_overview_text DefaultLoginTexts#external_registration_user_overview_text}
  */
  readonly externalRegistrationUserOverviewText?: DefaultLoginTextsExternalRegistrationUserOverviewText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#external_user_not_found_text DefaultLoginTexts#external_user_not_found_text}
  */
  readonly externalUserNotFoundText?: DefaultLoginTextsExternalUserNotFoundText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#footer_text DefaultLoginTexts#footer_text}
  */
  readonly footerText?: DefaultLoginTextsFooterText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#init_mfa_done_text DefaultLoginTexts#init_mfa_done_text}
  */
  readonly initMfaDoneText?: DefaultLoginTextsInitMfaDoneText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#init_mfa_otp_text DefaultLoginTexts#init_mfa_otp_text}
  */
  readonly initMfaOtpText?: DefaultLoginTextsInitMfaOtpText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#init_mfa_prompt_text DefaultLoginTexts#init_mfa_prompt_text}
  */
  readonly initMfaPromptText?: DefaultLoginTextsInitMfaPromptText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#init_mfa_u2f_text DefaultLoginTexts#init_mfa_u2f_text}
  */
  readonly initMfaU2FText?: DefaultLoginTextsInitMfaU2FText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#init_password_done_text DefaultLoginTexts#init_password_done_text}
  */
  readonly initPasswordDoneText?: DefaultLoginTextsInitPasswordDoneText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#init_password_text DefaultLoginTexts#init_password_text}
  */
  readonly initPasswordText?: DefaultLoginTextsInitPasswordText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#initialize_done_text DefaultLoginTexts#initialize_done_text}
  */
  readonly initializeDoneText?: DefaultLoginTextsInitializeDoneText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#initialize_user_text DefaultLoginTexts#initialize_user_text}
  */
  readonly initializeUserText?: DefaultLoginTextsInitializeUserText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#language DefaultLoginTexts#language}
  */
  readonly language: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#linking_user_done_text DefaultLoginTexts#linking_user_done_text}
  */
  readonly linkingUserDoneText?: DefaultLoginTextsLinkingUserDoneText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#linking_user_prompt_text DefaultLoginTexts#linking_user_prompt_text}
  */
  readonly linkingUserPromptText?: DefaultLoginTextsLinkingUserPromptText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#login_text DefaultLoginTexts#login_text}
  */
  readonly loginText?: DefaultLoginTextsLoginText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#logout_text DefaultLoginTexts#logout_text}
  */
  readonly logoutText?: DefaultLoginTextsLogoutText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#mfa_providers_text DefaultLoginTexts#mfa_providers_text}
  */
  readonly mfaProvidersText?: DefaultLoginTextsMfaProvidersText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#password_change_done_text DefaultLoginTexts#password_change_done_text}
  */
  readonly passwordChangeDoneText?: DefaultLoginTextsPasswordChangeDoneText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#password_change_text DefaultLoginTexts#password_change_text}
  */
  readonly passwordChangeText?: DefaultLoginTextsPasswordChangeText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#password_reset_done_text DefaultLoginTexts#password_reset_done_text}
  */
  readonly passwordResetDoneText?: DefaultLoginTextsPasswordResetDoneText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#password_text DefaultLoginTexts#password_text}
  */
  readonly passwordText?: DefaultLoginTextsPasswordText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#passwordless_prompt_text DefaultLoginTexts#passwordless_prompt_text}
  */
  readonly passwordlessPromptText?: DefaultLoginTextsPasswordlessPromptText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#passwordless_registration_done_text DefaultLoginTexts#passwordless_registration_done_text}
  */
  readonly passwordlessRegistrationDoneText?: DefaultLoginTextsPasswordlessRegistrationDoneText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#passwordless_registration_text DefaultLoginTexts#passwordless_registration_text}
  */
  readonly passwordlessRegistrationText?: DefaultLoginTextsPasswordlessRegistrationText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#passwordless_text DefaultLoginTexts#passwordless_text}
  */
  readonly passwordlessText?: DefaultLoginTextsPasswordlessText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#registration_option_text DefaultLoginTexts#registration_option_text}
  */
  readonly registrationOptionText?: DefaultLoginTextsRegistrationOptionText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#registration_org_text DefaultLoginTexts#registration_org_text}
  */
  readonly registrationOrgText?: DefaultLoginTextsRegistrationOrgText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#registration_user_text DefaultLoginTexts#registration_user_text}
  */
  readonly registrationUserText?: DefaultLoginTextsRegistrationUserText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#select_account_text DefaultLoginTexts#select_account_text}
  */
  readonly selectAccountText?: DefaultLoginTextsSelectAccountText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#success_login_text DefaultLoginTexts#success_login_text}
  */
  readonly successLoginText?: DefaultLoginTextsSuccessLoginText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#username_change_done_text DefaultLoginTexts#username_change_done_text}
  */
  readonly usernameChangeDoneText?: DefaultLoginTextsUsernameChangeDoneText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#username_change_text DefaultLoginTexts#username_change_text}
  */
  readonly usernameChangeText?: DefaultLoginTextsUsernameChangeText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#verify_mfa_otp_text DefaultLoginTexts#verify_mfa_otp_text}
  */
  readonly verifyMfaOtpText?: DefaultLoginTextsVerifyMfaOtpText;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#verify_mfa_u2f_text DefaultLoginTexts#verify_mfa_u2f_text}
  */
  readonly verifyMfaU2FText?: DefaultLoginTextsVerifyMfaU2FText;
}
export interface DefaultLoginTextsEmailVerificationDoneText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#cancel_button_text DefaultLoginTexts#cancel_button_text}
  */
  readonly cancelButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#login_button_text DefaultLoginTexts#login_button_text}
  */
  readonly loginButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#next_button_text DefaultLoginTexts#next_button_text}
  */
  readonly nextButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
}

export function defaultLoginTextsEmailVerificationDoneTextToTerraform(struct?: DefaultLoginTextsEmailVerificationDoneText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cancel_button_text: cdktf.stringToTerraform(struct!.cancelButtonText),
    description: cdktf.stringToTerraform(struct!.description),
    login_button_text: cdktf.stringToTerraform(struct!.loginButtonText),
    next_button_text: cdktf.stringToTerraform(struct!.nextButtonText),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function defaultLoginTextsEmailVerificationDoneTextToHclTerraform(struct?: DefaultLoginTextsEmailVerificationDoneText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cancel_button_text: {
      value: cdktf.stringToHclTerraform(struct!.cancelButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_button_text: {
      value: cdktf.stringToHclTerraform(struct!.loginButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_button_text: {
      value: cdktf.stringToHclTerraform(struct!.nextButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsEmailVerificationDoneTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsEmailVerificationDoneText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cancelButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancelButtonText = this._cancelButtonText;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._loginButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginButtonText = this._loginButtonText;
    }
    if (this._nextButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextButtonText = this._nextButtonText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsEmailVerificationDoneText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cancelButtonText = undefined;
      this._description = undefined;
      this._loginButtonText = undefined;
      this._nextButtonText = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cancelButtonText = value.cancelButtonText;
      this._description = value.description;
      this._loginButtonText = value.loginButtonText;
      this._nextButtonText = value.nextButtonText;
      this._title = value.title;
    }
  }

  // cancel_button_text - computed: false, optional: true, required: false
  private _cancelButtonText?: string; 
  public get cancelButtonText() {
    return this.getStringAttribute('cancel_button_text');
  }
  public set cancelButtonText(value: string) {
    this._cancelButtonText = value;
  }
  public resetCancelButtonText() {
    this._cancelButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelButtonTextInput() {
    return this._cancelButtonText;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // login_button_text - computed: false, optional: true, required: false
  private _loginButtonText?: string; 
  public get loginButtonText() {
    return this.getStringAttribute('login_button_text');
  }
  public set loginButtonText(value: string) {
    this._loginButtonText = value;
  }
  public resetLoginButtonText() {
    this._loginButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginButtonTextInput() {
    return this._loginButtonText;
  }

  // next_button_text - computed: false, optional: true, required: false
  private _nextButtonText?: string; 
  public get nextButtonText() {
    return this.getStringAttribute('next_button_text');
  }
  public set nextButtonText(value: string) {
    this._nextButtonText = value;
  }
  public resetNextButtonText() {
    this._nextButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextButtonTextInput() {
    return this._nextButtonText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface DefaultLoginTextsEmailVerificationText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#code_label DefaultLoginTexts#code_label}
  */
  readonly codeLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#next_button_text DefaultLoginTexts#next_button_text}
  */
  readonly nextButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#resend_button_text DefaultLoginTexts#resend_button_text}
  */
  readonly resendButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
}

export function defaultLoginTextsEmailVerificationTextToTerraform(struct?: DefaultLoginTextsEmailVerificationText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code_label: cdktf.stringToTerraform(struct!.codeLabel),
    description: cdktf.stringToTerraform(struct!.description),
    next_button_text: cdktf.stringToTerraform(struct!.nextButtonText),
    resend_button_text: cdktf.stringToTerraform(struct!.resendButtonText),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function defaultLoginTextsEmailVerificationTextToHclTerraform(struct?: DefaultLoginTextsEmailVerificationText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code_label: {
      value: cdktf.stringToHclTerraform(struct!.codeLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_button_text: {
      value: cdktf.stringToHclTerraform(struct!.nextButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resend_button_text: {
      value: cdktf.stringToHclTerraform(struct!.resendButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsEmailVerificationTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsEmailVerificationText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeLabel = this._codeLabel;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._nextButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextButtonText = this._nextButtonText;
    }
    if (this._resendButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.resendButtonText = this._resendButtonText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsEmailVerificationText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codeLabel = undefined;
      this._description = undefined;
      this._nextButtonText = undefined;
      this._resendButtonText = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codeLabel = value.codeLabel;
      this._description = value.description;
      this._nextButtonText = value.nextButtonText;
      this._resendButtonText = value.resendButtonText;
      this._title = value.title;
    }
  }

  // code_label - computed: false, optional: true, required: false
  private _codeLabel?: string; 
  public get codeLabel() {
    return this.getStringAttribute('code_label');
  }
  public set codeLabel(value: string) {
    this._codeLabel = value;
  }
  public resetCodeLabel() {
    this._codeLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeLabelInput() {
    return this._codeLabel;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // next_button_text - computed: false, optional: true, required: false
  private _nextButtonText?: string; 
  public get nextButtonText() {
    return this.getStringAttribute('next_button_text');
  }
  public set nextButtonText(value: string) {
    this._nextButtonText = value;
  }
  public resetNextButtonText() {
    this._nextButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextButtonTextInput() {
    return this._nextButtonText;
  }

  // resend_button_text - computed: false, optional: true, required: false
  private _resendButtonText?: string; 
  public get resendButtonText() {
    return this.getStringAttribute('resend_button_text');
  }
  public set resendButtonText(value: string) {
    this._resendButtonText = value;
  }
  public resetResendButtonText() {
    this._resendButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resendButtonTextInput() {
    return this._resendButtonText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface DefaultLoginTextsExternalRegistrationUserOverviewText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#back_button_text DefaultLoginTexts#back_button_text}
  */
  readonly backButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#email_label DefaultLoginTexts#email_label}
  */
  readonly emailLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#firstname_label DefaultLoginTexts#firstname_label}
  */
  readonly firstnameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#language_label DefaultLoginTexts#language_label}
  */
  readonly languageLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#lastname_label DefaultLoginTexts#lastname_label}
  */
  readonly lastnameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#next_button_text DefaultLoginTexts#next_button_text}
  */
  readonly nextButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#nickname_label DefaultLoginTexts#nickname_label}
  */
  readonly nicknameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#phone_label DefaultLoginTexts#phone_label}
  */
  readonly phoneLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#privacy_confirm DefaultLoginTexts#privacy_confirm}
  */
  readonly privacyConfirm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#privacy_link_text DefaultLoginTexts#privacy_link_text}
  */
  readonly privacyLinkText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#tos_and_privacy_label DefaultLoginTexts#tos_and_privacy_label}
  */
  readonly tosAndPrivacyLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#tos_confirm DefaultLoginTexts#tos_confirm}
  */
  readonly tosConfirm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#tos_link_text DefaultLoginTexts#tos_link_text}
  */
  readonly tosLinkText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#username_label DefaultLoginTexts#username_label}
  */
  readonly usernameLabel?: string;
}

export function defaultLoginTextsExternalRegistrationUserOverviewTextToTerraform(struct?: DefaultLoginTextsExternalRegistrationUserOverviewText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    back_button_text: cdktf.stringToTerraform(struct!.backButtonText),
    description: cdktf.stringToTerraform(struct!.description),
    email_label: cdktf.stringToTerraform(struct!.emailLabel),
    firstname_label: cdktf.stringToTerraform(struct!.firstnameLabel),
    language_label: cdktf.stringToTerraform(struct!.languageLabel),
    lastname_label: cdktf.stringToTerraform(struct!.lastnameLabel),
    next_button_text: cdktf.stringToTerraform(struct!.nextButtonText),
    nickname_label: cdktf.stringToTerraform(struct!.nicknameLabel),
    phone_label: cdktf.stringToTerraform(struct!.phoneLabel),
    privacy_confirm: cdktf.stringToTerraform(struct!.privacyConfirm),
    privacy_link_text: cdktf.stringToTerraform(struct!.privacyLinkText),
    title: cdktf.stringToTerraform(struct!.title),
    tos_and_privacy_label: cdktf.stringToTerraform(struct!.tosAndPrivacyLabel),
    tos_confirm: cdktf.stringToTerraform(struct!.tosConfirm),
    tos_link_text: cdktf.stringToTerraform(struct!.tosLinkText),
    username_label: cdktf.stringToTerraform(struct!.usernameLabel),
  }
}


export function defaultLoginTextsExternalRegistrationUserOverviewTextToHclTerraform(struct?: DefaultLoginTextsExternalRegistrationUserOverviewText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    back_button_text: {
      value: cdktf.stringToHclTerraform(struct!.backButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_label: {
      value: cdktf.stringToHclTerraform(struct!.emailLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firstname_label: {
      value: cdktf.stringToHclTerraform(struct!.firstnameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language_label: {
      value: cdktf.stringToHclTerraform(struct!.languageLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lastname_label: {
      value: cdktf.stringToHclTerraform(struct!.lastnameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_button_text: {
      value: cdktf.stringToHclTerraform(struct!.nextButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    nickname_label: {
      value: cdktf.stringToHclTerraform(struct!.nicknameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    phone_label: {
      value: cdktf.stringToHclTerraform(struct!.phoneLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_confirm: {
      value: cdktf.stringToHclTerraform(struct!.privacyConfirm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_link_text: {
      value: cdktf.stringToHclTerraform(struct!.privacyLinkText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos_and_privacy_label: {
      value: cdktf.stringToHclTerraform(struct!.tosAndPrivacyLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos_confirm: {
      value: cdktf.stringToHclTerraform(struct!.tosConfirm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos_link_text: {
      value: cdktf.stringToHclTerraform(struct!.tosLinkText),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsExternalRegistrationUserOverviewTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsExternalRegistrationUserOverviewText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.backButtonText = this._backButtonText;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._emailLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailLabel = this._emailLabel;
    }
    if (this._firstnameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstnameLabel = this._firstnameLabel;
    }
    if (this._languageLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageLabel = this._languageLabel;
    }
    if (this._lastnameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastnameLabel = this._lastnameLabel;
    }
    if (this._nextButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextButtonText = this._nextButtonText;
    }
    if (this._nicknameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.nicknameLabel = this._nicknameLabel;
    }
    if (this._phoneLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.phoneLabel = this._phoneLabel;
    }
    if (this._privacyConfirm !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyConfirm = this._privacyConfirm;
    }
    if (this._privacyLinkText !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyLinkText = this._privacyLinkText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._tosAndPrivacyLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosAndPrivacyLabel = this._tosAndPrivacyLabel;
    }
    if (this._tosConfirm !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosConfirm = this._tosConfirm;
    }
    if (this._tosLinkText !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosLinkText = this._tosLinkText;
    }
    if (this._usernameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameLabel = this._usernameLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsExternalRegistrationUserOverviewText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backButtonText = undefined;
      this._description = undefined;
      this._emailLabel = undefined;
      this._firstnameLabel = undefined;
      this._languageLabel = undefined;
      this._lastnameLabel = undefined;
      this._nextButtonText = undefined;
      this._nicknameLabel = undefined;
      this._phoneLabel = undefined;
      this._privacyConfirm = undefined;
      this._privacyLinkText = undefined;
      this._title = undefined;
      this._tosAndPrivacyLabel = undefined;
      this._tosConfirm = undefined;
      this._tosLinkText = undefined;
      this._usernameLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backButtonText = value.backButtonText;
      this._description = value.description;
      this._emailLabel = value.emailLabel;
      this._firstnameLabel = value.firstnameLabel;
      this._languageLabel = value.languageLabel;
      this._lastnameLabel = value.lastnameLabel;
      this._nextButtonText = value.nextButtonText;
      this._nicknameLabel = value.nicknameLabel;
      this._phoneLabel = value.phoneLabel;
      this._privacyConfirm = value.privacyConfirm;
      this._privacyLinkText = value.privacyLinkText;
      this._title = value.title;
      this._tosAndPrivacyLabel = value.tosAndPrivacyLabel;
      this._tosConfirm = value.tosConfirm;
      this._tosLinkText = value.tosLinkText;
      this._usernameLabel = value.usernameLabel;
    }
  }

  // back_button_text - computed: false, optional: true, required: false
  private _backButtonText?: string; 
  public get backButtonText() {
    return this.getStringAttribute('back_button_text');
  }
  public set backButtonText(value: string) {
    this._backButtonText = value;
  }
  public resetBackButtonText() {
    this._backButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backButtonTextInput() {
    return this._backButtonText;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // email_label - computed: false, optional: true, required: false
  private _emailLabel?: string; 
  public get emailLabel() {
    return this.getStringAttribute('email_label');
  }
  public set emailLabel(value: string) {
    this._emailLabel = value;
  }
  public resetEmailLabel() {
    this._emailLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailLabelInput() {
    return this._emailLabel;
  }

  // firstname_label - computed: false, optional: true, required: false
  private _firstnameLabel?: string; 
  public get firstnameLabel() {
    return this.getStringAttribute('firstname_label');
  }
  public set firstnameLabel(value: string) {
    this._firstnameLabel = value;
  }
  public resetFirstnameLabel() {
    this._firstnameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstnameLabelInput() {
    return this._firstnameLabel;
  }

  // language_label - computed: false, optional: true, required: false
  private _languageLabel?: string; 
  public get languageLabel() {
    return this.getStringAttribute('language_label');
  }
  public set languageLabel(value: string) {
    this._languageLabel = value;
  }
  public resetLanguageLabel() {
    this._languageLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageLabelInput() {
    return this._languageLabel;
  }

  // lastname_label - computed: false, optional: true, required: false
  private _lastnameLabel?: string; 
  public get lastnameLabel() {
    return this.getStringAttribute('lastname_label');
  }
  public set lastnameLabel(value: string) {
    this._lastnameLabel = value;
  }
  public resetLastnameLabel() {
    this._lastnameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastnameLabelInput() {
    return this._lastnameLabel;
  }

  // next_button_text - computed: false, optional: true, required: false
  private _nextButtonText?: string; 
  public get nextButtonText() {
    return this.getStringAttribute('next_button_text');
  }
  public set nextButtonText(value: string) {
    this._nextButtonText = value;
  }
  public resetNextButtonText() {
    this._nextButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextButtonTextInput() {
    return this._nextButtonText;
  }

  // nickname_label - computed: false, optional: true, required: false
  private _nicknameLabel?: string; 
  public get nicknameLabel() {
    return this.getStringAttribute('nickname_label');
  }
  public set nicknameLabel(value: string) {
    this._nicknameLabel = value;
  }
  public resetNicknameLabel() {
    this._nicknameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nicknameLabelInput() {
    return this._nicknameLabel;
  }

  // phone_label - computed: false, optional: true, required: false
  private _phoneLabel?: string; 
  public get phoneLabel() {
    return this.getStringAttribute('phone_label');
  }
  public set phoneLabel(value: string) {
    this._phoneLabel = value;
  }
  public resetPhoneLabel() {
    this._phoneLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get phoneLabelInput() {
    return this._phoneLabel;
  }

  // privacy_confirm - computed: false, optional: true, required: false
  private _privacyConfirm?: string; 
  public get privacyConfirm() {
    return this.getStringAttribute('privacy_confirm');
  }
  public set privacyConfirm(value: string) {
    this._privacyConfirm = value;
  }
  public resetPrivacyConfirm() {
    this._privacyConfirm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyConfirmInput() {
    return this._privacyConfirm;
  }

  // privacy_link_text - computed: false, optional: true, required: false
  private _privacyLinkText?: string; 
  public get privacyLinkText() {
    return this.getStringAttribute('privacy_link_text');
  }
  public set privacyLinkText(value: string) {
    this._privacyLinkText = value;
  }
  public resetPrivacyLinkText() {
    this._privacyLinkText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyLinkTextInput() {
    return this._privacyLinkText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // tos_and_privacy_label - computed: false, optional: true, required: false
  private _tosAndPrivacyLabel?: string; 
  public get tosAndPrivacyLabel() {
    return this.getStringAttribute('tos_and_privacy_label');
  }
  public set tosAndPrivacyLabel(value: string) {
    this._tosAndPrivacyLabel = value;
  }
  public resetTosAndPrivacyLabel() {
    this._tosAndPrivacyLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosAndPrivacyLabelInput() {
    return this._tosAndPrivacyLabel;
  }

  // tos_confirm - computed: false, optional: true, required: false
  private _tosConfirm?: string; 
  public get tosConfirm() {
    return this.getStringAttribute('tos_confirm');
  }
  public set tosConfirm(value: string) {
    this._tosConfirm = value;
  }
  public resetTosConfirm() {
    this._tosConfirm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosConfirmInput() {
    return this._tosConfirm;
  }

  // tos_link_text - computed: false, optional: true, required: false
  private _tosLinkText?: string; 
  public get tosLinkText() {
    return this.getStringAttribute('tos_link_text');
  }
  public set tosLinkText(value: string) {
    this._tosLinkText = value;
  }
  public resetTosLinkText() {
    this._tosLinkText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosLinkTextInput() {
    return this._tosLinkText;
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
}
export interface DefaultLoginTextsExternalUserNotFoundText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#auto_register_button_text DefaultLoginTexts#auto_register_button_text}
  */
  readonly autoRegisterButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#link_button_text DefaultLoginTexts#link_button_text}
  */
  readonly linkButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#privacy_confirm DefaultLoginTexts#privacy_confirm}
  */
  readonly privacyConfirm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#privacy_link_text DefaultLoginTexts#privacy_link_text}
  */
  readonly privacyLinkText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#tos_and_privacy_label DefaultLoginTexts#tos_and_privacy_label}
  */
  readonly tosAndPrivacyLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#tos_confirm DefaultLoginTexts#tos_confirm}
  */
  readonly tosConfirm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#tos_link_text DefaultLoginTexts#tos_link_text}
  */
  readonly tosLinkText?: string;
}

export function defaultLoginTextsExternalUserNotFoundTextToTerraform(struct?: DefaultLoginTextsExternalUserNotFoundText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_register_button_text: cdktf.stringToTerraform(struct!.autoRegisterButtonText),
    description: cdktf.stringToTerraform(struct!.description),
    link_button_text: cdktf.stringToTerraform(struct!.linkButtonText),
    privacy_confirm: cdktf.stringToTerraform(struct!.privacyConfirm),
    privacy_link_text: cdktf.stringToTerraform(struct!.privacyLinkText),
    title: cdktf.stringToTerraform(struct!.title),
    tos_and_privacy_label: cdktf.stringToTerraform(struct!.tosAndPrivacyLabel),
    tos_confirm: cdktf.stringToTerraform(struct!.tosConfirm),
    tos_link_text: cdktf.stringToTerraform(struct!.tosLinkText),
  }
}


export function defaultLoginTextsExternalUserNotFoundTextToHclTerraform(struct?: DefaultLoginTextsExternalUserNotFoundText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_register_button_text: {
      value: cdktf.stringToHclTerraform(struct!.autoRegisterButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_button_text: {
      value: cdktf.stringToHclTerraform(struct!.linkButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_confirm: {
      value: cdktf.stringToHclTerraform(struct!.privacyConfirm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_link_text: {
      value: cdktf.stringToHclTerraform(struct!.privacyLinkText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos_and_privacy_label: {
      value: cdktf.stringToHclTerraform(struct!.tosAndPrivacyLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos_confirm: {
      value: cdktf.stringToHclTerraform(struct!.tosConfirm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos_link_text: {
      value: cdktf.stringToHclTerraform(struct!.tosLinkText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsExternalUserNotFoundTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsExternalUserNotFoundText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRegisterButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRegisterButtonText = this._autoRegisterButtonText;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._linkButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkButtonText = this._linkButtonText;
    }
    if (this._privacyConfirm !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyConfirm = this._privacyConfirm;
    }
    if (this._privacyLinkText !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyLinkText = this._privacyLinkText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._tosAndPrivacyLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosAndPrivacyLabel = this._tosAndPrivacyLabel;
    }
    if (this._tosConfirm !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosConfirm = this._tosConfirm;
    }
    if (this._tosLinkText !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosLinkText = this._tosLinkText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsExternalUserNotFoundText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoRegisterButtonText = undefined;
      this._description = undefined;
      this._linkButtonText = undefined;
      this._privacyConfirm = undefined;
      this._privacyLinkText = undefined;
      this._title = undefined;
      this._tosAndPrivacyLabel = undefined;
      this._tosConfirm = undefined;
      this._tosLinkText = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoRegisterButtonText = value.autoRegisterButtonText;
      this._description = value.description;
      this._linkButtonText = value.linkButtonText;
      this._privacyConfirm = value.privacyConfirm;
      this._privacyLinkText = value.privacyLinkText;
      this._title = value.title;
      this._tosAndPrivacyLabel = value.tosAndPrivacyLabel;
      this._tosConfirm = value.tosConfirm;
      this._tosLinkText = value.tosLinkText;
    }
  }

  // auto_register_button_text - computed: false, optional: true, required: false
  private _autoRegisterButtonText?: string; 
  public get autoRegisterButtonText() {
    return this.getStringAttribute('auto_register_button_text');
  }
  public set autoRegisterButtonText(value: string) {
    this._autoRegisterButtonText = value;
  }
  public resetAutoRegisterButtonText() {
    this._autoRegisterButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRegisterButtonTextInput() {
    return this._autoRegisterButtonText;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // link_button_text - computed: false, optional: true, required: false
  private _linkButtonText?: string; 
  public get linkButtonText() {
    return this.getStringAttribute('link_button_text');
  }
  public set linkButtonText(value: string) {
    this._linkButtonText = value;
  }
  public resetLinkButtonText() {
    this._linkButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkButtonTextInput() {
    return this._linkButtonText;
  }

  // privacy_confirm - computed: false, optional: true, required: false
  private _privacyConfirm?: string; 
  public get privacyConfirm() {
    return this.getStringAttribute('privacy_confirm');
  }
  public set privacyConfirm(value: string) {
    this._privacyConfirm = value;
  }
  public resetPrivacyConfirm() {
    this._privacyConfirm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyConfirmInput() {
    return this._privacyConfirm;
  }

  // privacy_link_text - computed: false, optional: true, required: false
  private _privacyLinkText?: string; 
  public get privacyLinkText() {
    return this.getStringAttribute('privacy_link_text');
  }
  public set privacyLinkText(value: string) {
    this._privacyLinkText = value;
  }
  public resetPrivacyLinkText() {
    this._privacyLinkText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyLinkTextInput() {
    return this._privacyLinkText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // tos_and_privacy_label - computed: false, optional: true, required: false
  private _tosAndPrivacyLabel?: string; 
  public get tosAndPrivacyLabel() {
    return this.getStringAttribute('tos_and_privacy_label');
  }
  public set tosAndPrivacyLabel(value: string) {
    this._tosAndPrivacyLabel = value;
  }
  public resetTosAndPrivacyLabel() {
    this._tosAndPrivacyLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosAndPrivacyLabelInput() {
    return this._tosAndPrivacyLabel;
  }

  // tos_confirm - computed: false, optional: true, required: false
  private _tosConfirm?: string; 
  public get tosConfirm() {
    return this.getStringAttribute('tos_confirm');
  }
  public set tosConfirm(value: string) {
    this._tosConfirm = value;
  }
  public resetTosConfirm() {
    this._tosConfirm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosConfirmInput() {
    return this._tosConfirm;
  }

  // tos_link_text - computed: false, optional: true, required: false
  private _tosLinkText?: string; 
  public get tosLinkText() {
    return this.getStringAttribute('tos_link_text');
  }
  public set tosLinkText(value: string) {
    this._tosLinkText = value;
  }
  public resetTosLinkText() {
    this._tosLinkText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosLinkTextInput() {
    return this._tosLinkText;
  }
}
export interface DefaultLoginTextsFooterText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#help DefaultLoginTexts#help}
  */
  readonly help?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#privacy_policy DefaultLoginTexts#privacy_policy}
  */
  readonly privacyPolicy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#support_email DefaultLoginTexts#support_email}
  */
  readonly supportEmail?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#tos DefaultLoginTexts#tos}
  */
  readonly tos?: string;
}

export function defaultLoginTextsFooterTextToTerraform(struct?: DefaultLoginTextsFooterText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    help: cdktf.stringToTerraform(struct!.help),
    privacy_policy: cdktf.stringToTerraform(struct!.privacyPolicy),
    support_email: cdktf.stringToTerraform(struct!.supportEmail),
    tos: cdktf.stringToTerraform(struct!.tos),
  }
}


export function defaultLoginTextsFooterTextToHclTerraform(struct?: DefaultLoginTextsFooterText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    help: {
      value: cdktf.stringToHclTerraform(struct!.help),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_policy: {
      value: cdktf.stringToHclTerraform(struct!.privacyPolicy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    support_email: {
      value: cdktf.stringToHclTerraform(struct!.supportEmail),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos: {
      value: cdktf.stringToHclTerraform(struct!.tos),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsFooterTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsFooterText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._help !== undefined) {
      hasAnyValues = true;
      internalValueResult.help = this._help;
    }
    if (this._privacyPolicy !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyPolicy = this._privacyPolicy;
    }
    if (this._supportEmail !== undefined) {
      hasAnyValues = true;
      internalValueResult.supportEmail = this._supportEmail;
    }
    if (this._tos !== undefined) {
      hasAnyValues = true;
      internalValueResult.tos = this._tos;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsFooterText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._help = undefined;
      this._privacyPolicy = undefined;
      this._supportEmail = undefined;
      this._tos = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._help = value.help;
      this._privacyPolicy = value.privacyPolicy;
      this._supportEmail = value.supportEmail;
      this._tos = value.tos;
    }
  }

  // help - computed: false, optional: true, required: false
  private _help?: string; 
  public get help() {
    return this.getStringAttribute('help');
  }
  public set help(value: string) {
    this._help = value;
  }
  public resetHelp() {
    this._help = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helpInput() {
    return this._help;
  }

  // privacy_policy - computed: false, optional: true, required: false
  private _privacyPolicy?: string; 
  public get privacyPolicy() {
    return this.getStringAttribute('privacy_policy');
  }
  public set privacyPolicy(value: string) {
    this._privacyPolicy = value;
  }
  public resetPrivacyPolicy() {
    this._privacyPolicy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyPolicyInput() {
    return this._privacyPolicy;
  }

  // support_email - computed: false, optional: true, required: false
  private _supportEmail?: string; 
  public get supportEmail() {
    return this.getStringAttribute('support_email');
  }
  public set supportEmail(value: string) {
    this._supportEmail = value;
  }
  public resetSupportEmail() {
    this._supportEmail = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get supportEmailInput() {
    return this._supportEmail;
  }

  // tos - computed: false, optional: true, required: false
  private _tos?: string; 
  public get tos() {
    return this.getStringAttribute('tos');
  }
  public set tos(value: string) {
    this._tos = value;
  }
  public resetTos() {
    this._tos = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosInput() {
    return this._tos;
  }
}
export interface DefaultLoginTextsInitMfaDoneText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#cancel_button_text DefaultLoginTexts#cancel_button_text}
  */
  readonly cancelButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#next_button_text DefaultLoginTexts#next_button_text}
  */
  readonly nextButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
}

export function defaultLoginTextsInitMfaDoneTextToTerraform(struct?: DefaultLoginTextsInitMfaDoneText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cancel_button_text: cdktf.stringToTerraform(struct!.cancelButtonText),
    description: cdktf.stringToTerraform(struct!.description),
    next_button_text: cdktf.stringToTerraform(struct!.nextButtonText),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function defaultLoginTextsInitMfaDoneTextToHclTerraform(struct?: DefaultLoginTextsInitMfaDoneText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cancel_button_text: {
      value: cdktf.stringToHclTerraform(struct!.cancelButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_button_text: {
      value: cdktf.stringToHclTerraform(struct!.nextButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsInitMfaDoneTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsInitMfaDoneText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cancelButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancelButtonText = this._cancelButtonText;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._nextButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextButtonText = this._nextButtonText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsInitMfaDoneText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cancelButtonText = undefined;
      this._description = undefined;
      this._nextButtonText = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cancelButtonText = value.cancelButtonText;
      this._description = value.description;
      this._nextButtonText = value.nextButtonText;
      this._title = value.title;
    }
  }

  // cancel_button_text - computed: false, optional: true, required: false
  private _cancelButtonText?: string; 
  public get cancelButtonText() {
    return this.getStringAttribute('cancel_button_text');
  }
  public set cancelButtonText(value: string) {
    this._cancelButtonText = value;
  }
  public resetCancelButtonText() {
    this._cancelButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelButtonTextInput() {
    return this._cancelButtonText;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // next_button_text - computed: false, optional: true, required: false
  private _nextButtonText?: string; 
  public get nextButtonText() {
    return this.getStringAttribute('next_button_text');
  }
  public set nextButtonText(value: string) {
    this._nextButtonText = value;
  }
  public resetNextButtonText() {
    this._nextButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextButtonTextInput() {
    return this._nextButtonText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface DefaultLoginTextsInitMfaOtpText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#cancel_button_text DefaultLoginTexts#cancel_button_text}
  */
  readonly cancelButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#code_label DefaultLoginTexts#code_label}
  */
  readonly codeLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description_otp DefaultLoginTexts#description_otp}
  */
  readonly descriptionOtp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#next_button_text DefaultLoginTexts#next_button_text}
  */
  readonly nextButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#secret_label DefaultLoginTexts#secret_label}
  */
  readonly secretLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
}

export function defaultLoginTextsInitMfaOtpTextToTerraform(struct?: DefaultLoginTextsInitMfaOtpText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cancel_button_text: cdktf.stringToTerraform(struct!.cancelButtonText),
    code_label: cdktf.stringToTerraform(struct!.codeLabel),
    description: cdktf.stringToTerraform(struct!.description),
    description_otp: cdktf.stringToTerraform(struct!.descriptionOtp),
    next_button_text: cdktf.stringToTerraform(struct!.nextButtonText),
    secret_label: cdktf.stringToTerraform(struct!.secretLabel),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function defaultLoginTextsInitMfaOtpTextToHclTerraform(struct?: DefaultLoginTextsInitMfaOtpText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cancel_button_text: {
      value: cdktf.stringToHclTerraform(struct!.cancelButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    code_label: {
      value: cdktf.stringToHclTerraform(struct!.codeLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description_otp: {
      value: cdktf.stringToHclTerraform(struct!.descriptionOtp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_button_text: {
      value: cdktf.stringToHclTerraform(struct!.nextButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    secret_label: {
      value: cdktf.stringToHclTerraform(struct!.secretLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsInitMfaOtpTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsInitMfaOtpText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cancelButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancelButtonText = this._cancelButtonText;
    }
    if (this._codeLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeLabel = this._codeLabel;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._descriptionOtp !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionOtp = this._descriptionOtp;
    }
    if (this._nextButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextButtonText = this._nextButtonText;
    }
    if (this._secretLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.secretLabel = this._secretLabel;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsInitMfaOtpText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cancelButtonText = undefined;
      this._codeLabel = undefined;
      this._description = undefined;
      this._descriptionOtp = undefined;
      this._nextButtonText = undefined;
      this._secretLabel = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cancelButtonText = value.cancelButtonText;
      this._codeLabel = value.codeLabel;
      this._description = value.description;
      this._descriptionOtp = value.descriptionOtp;
      this._nextButtonText = value.nextButtonText;
      this._secretLabel = value.secretLabel;
      this._title = value.title;
    }
  }

  // cancel_button_text - computed: false, optional: true, required: false
  private _cancelButtonText?: string; 
  public get cancelButtonText() {
    return this.getStringAttribute('cancel_button_text');
  }
  public set cancelButtonText(value: string) {
    this._cancelButtonText = value;
  }
  public resetCancelButtonText() {
    this._cancelButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelButtonTextInput() {
    return this._cancelButtonText;
  }

  // code_label - computed: false, optional: true, required: false
  private _codeLabel?: string; 
  public get codeLabel() {
    return this.getStringAttribute('code_label');
  }
  public set codeLabel(value: string) {
    this._codeLabel = value;
  }
  public resetCodeLabel() {
    this._codeLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeLabelInput() {
    return this._codeLabel;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // description_otp - computed: false, optional: true, required: false
  private _descriptionOtp?: string; 
  public get descriptionOtp() {
    return this.getStringAttribute('description_otp');
  }
  public set descriptionOtp(value: string) {
    this._descriptionOtp = value;
  }
  public resetDescriptionOtp() {
    this._descriptionOtp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionOtpInput() {
    return this._descriptionOtp;
  }

  // next_button_text - computed: false, optional: true, required: false
  private _nextButtonText?: string; 
  public get nextButtonText() {
    return this.getStringAttribute('next_button_text');
  }
  public set nextButtonText(value: string) {
    this._nextButtonText = value;
  }
  public resetNextButtonText() {
    this._nextButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextButtonTextInput() {
    return this._nextButtonText;
  }

  // secret_label - computed: false, optional: true, required: false
  private _secretLabel?: string; 
  public get secretLabel() {
    return this.getStringAttribute('secret_label');
  }
  public set secretLabel(value: string) {
    this._secretLabel = value;
  }
  public resetSecretLabel() {
    this._secretLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get secretLabelInput() {
    return this._secretLabel;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface DefaultLoginTextsInitMfaPromptText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#next_button_text DefaultLoginTexts#next_button_text}
  */
  readonly nextButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#otp_option DefaultLoginTexts#otp_option}
  */
  readonly otpOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#skip_button_text DefaultLoginTexts#skip_button_text}
  */
  readonly skipButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#u2f_option DefaultLoginTexts#u2f_option}
  */
  readonly u2FOption?: string;
}

export function defaultLoginTextsInitMfaPromptTextToTerraform(struct?: DefaultLoginTextsInitMfaPromptText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    next_button_text: cdktf.stringToTerraform(struct!.nextButtonText),
    otp_option: cdktf.stringToTerraform(struct!.otpOption),
    skip_button_text: cdktf.stringToTerraform(struct!.skipButtonText),
    title: cdktf.stringToTerraform(struct!.title),
    u2f_option: cdktf.stringToTerraform(struct!.u2FOption),
  }
}


export function defaultLoginTextsInitMfaPromptTextToHclTerraform(struct?: DefaultLoginTextsInitMfaPromptText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_button_text: {
      value: cdktf.stringToHclTerraform(struct!.nextButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    otp_option: {
      value: cdktf.stringToHclTerraform(struct!.otpOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_button_text: {
      value: cdktf.stringToHclTerraform(struct!.skipButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    u2f_option: {
      value: cdktf.stringToHclTerraform(struct!.u2FOption),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsInitMfaPromptTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsInitMfaPromptText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._nextButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextButtonText = this._nextButtonText;
    }
    if (this._otpOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.otpOption = this._otpOption;
    }
    if (this._skipButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipButtonText = this._skipButtonText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._u2FOption !== undefined) {
      hasAnyValues = true;
      internalValueResult.u2FOption = this._u2FOption;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsInitMfaPromptText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._nextButtonText = undefined;
      this._otpOption = undefined;
      this._skipButtonText = undefined;
      this._title = undefined;
      this._u2FOption = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._nextButtonText = value.nextButtonText;
      this._otpOption = value.otpOption;
      this._skipButtonText = value.skipButtonText;
      this._title = value.title;
      this._u2FOption = value.u2FOption;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // next_button_text - computed: false, optional: true, required: false
  private _nextButtonText?: string; 
  public get nextButtonText() {
    return this.getStringAttribute('next_button_text');
  }
  public set nextButtonText(value: string) {
    this._nextButtonText = value;
  }
  public resetNextButtonText() {
    this._nextButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextButtonTextInput() {
    return this._nextButtonText;
  }

  // otp_option - computed: false, optional: true, required: false
  private _otpOption?: string; 
  public get otpOption() {
    return this.getStringAttribute('otp_option');
  }
  public set otpOption(value: string) {
    this._otpOption = value;
  }
  public resetOtpOption() {
    this._otpOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpOptionInput() {
    return this._otpOption;
  }

  // skip_button_text - computed: false, optional: true, required: false
  private _skipButtonText?: string; 
  public get skipButtonText() {
    return this.getStringAttribute('skip_button_text');
  }
  public set skipButtonText(value: string) {
    this._skipButtonText = value;
  }
  public resetSkipButtonText() {
    this._skipButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipButtonTextInput() {
    return this._skipButtonText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // u2f_option - computed: false, optional: true, required: false
  private _u2FOption?: string; 
  public get u2FOption() {
    return this.getStringAttribute('u2f_option');
  }
  public set u2FOption(value: string) {
    this._u2FOption = value;
  }
  public resetU2FOption() {
    this._u2FOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get u2FOptionInput() {
    return this._u2FOption;
  }
}
export interface DefaultLoginTextsInitMfaU2FText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#error_retry DefaultLoginTexts#error_retry}
  */
  readonly errorRetry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#not_supported DefaultLoginTexts#not_supported}
  */
  readonly notSupported?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#register_token_button_text DefaultLoginTexts#register_token_button_text}
  */
  readonly registerTokenButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#token_name_label DefaultLoginTexts#token_name_label}
  */
  readonly tokenNameLabel?: string;
}

export function defaultLoginTextsInitMfaU2FTextToTerraform(struct?: DefaultLoginTextsInitMfaU2FText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    error_retry: cdktf.stringToTerraform(struct!.errorRetry),
    not_supported: cdktf.stringToTerraform(struct!.notSupported),
    register_token_button_text: cdktf.stringToTerraform(struct!.registerTokenButtonText),
    title: cdktf.stringToTerraform(struct!.title),
    token_name_label: cdktf.stringToTerraform(struct!.tokenNameLabel),
  }
}


export function defaultLoginTextsInitMfaU2FTextToHclTerraform(struct?: DefaultLoginTextsInitMfaU2FText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_retry: {
      value: cdktf.stringToHclTerraform(struct!.errorRetry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_supported: {
      value: cdktf.stringToHclTerraform(struct!.notSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    register_token_button_text: {
      value: cdktf.stringToHclTerraform(struct!.registerTokenButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_name_label: {
      value: cdktf.stringToHclTerraform(struct!.tokenNameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsInitMfaU2FTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsInitMfaU2FText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._errorRetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorRetry = this._errorRetry;
    }
    if (this._notSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.notSupported = this._notSupported;
    }
    if (this._registerTokenButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.registerTokenButtonText = this._registerTokenButtonText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._tokenNameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenNameLabel = this._tokenNameLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsInitMfaU2FText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._errorRetry = undefined;
      this._notSupported = undefined;
      this._registerTokenButtonText = undefined;
      this._title = undefined;
      this._tokenNameLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._errorRetry = value.errorRetry;
      this._notSupported = value.notSupported;
      this._registerTokenButtonText = value.registerTokenButtonText;
      this._title = value.title;
      this._tokenNameLabel = value.tokenNameLabel;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // error_retry - computed: false, optional: true, required: false
  private _errorRetry?: string; 
  public get errorRetry() {
    return this.getStringAttribute('error_retry');
  }
  public set errorRetry(value: string) {
    this._errorRetry = value;
  }
  public resetErrorRetry() {
    this._errorRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorRetryInput() {
    return this._errorRetry;
  }

  // not_supported - computed: false, optional: true, required: false
  private _notSupported?: string; 
  public get notSupported() {
    return this.getStringAttribute('not_supported');
  }
  public set notSupported(value: string) {
    this._notSupported = value;
  }
  public resetNotSupported() {
    this._notSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notSupportedInput() {
    return this._notSupported;
  }

  // register_token_button_text - computed: false, optional: true, required: false
  private _registerTokenButtonText?: string; 
  public get registerTokenButtonText() {
    return this.getStringAttribute('register_token_button_text');
  }
  public set registerTokenButtonText(value: string) {
    this._registerTokenButtonText = value;
  }
  public resetRegisterTokenButtonText() {
    this._registerTokenButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerTokenButtonTextInput() {
    return this._registerTokenButtonText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // token_name_label - computed: false, optional: true, required: false
  private _tokenNameLabel?: string; 
  public get tokenNameLabel() {
    return this.getStringAttribute('token_name_label');
  }
  public set tokenNameLabel(value: string) {
    this._tokenNameLabel = value;
  }
  public resetTokenNameLabel() {
    this._tokenNameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNameLabelInput() {
    return this._tokenNameLabel;
  }
}
export interface DefaultLoginTextsInitPasswordDoneText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#cancel_button_text DefaultLoginTexts#cancel_button_text}
  */
  readonly cancelButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#next_button_text DefaultLoginTexts#next_button_text}
  */
  readonly nextButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
}

export function defaultLoginTextsInitPasswordDoneTextToTerraform(struct?: DefaultLoginTextsInitPasswordDoneText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cancel_button_text: cdktf.stringToTerraform(struct!.cancelButtonText),
    description: cdktf.stringToTerraform(struct!.description),
    next_button_text: cdktf.stringToTerraform(struct!.nextButtonText),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function defaultLoginTextsInitPasswordDoneTextToHclTerraform(struct?: DefaultLoginTextsInitPasswordDoneText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cancel_button_text: {
      value: cdktf.stringToHclTerraform(struct!.cancelButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_button_text: {
      value: cdktf.stringToHclTerraform(struct!.nextButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsInitPasswordDoneTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsInitPasswordDoneText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cancelButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancelButtonText = this._cancelButtonText;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._nextButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextButtonText = this._nextButtonText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsInitPasswordDoneText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cancelButtonText = undefined;
      this._description = undefined;
      this._nextButtonText = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cancelButtonText = value.cancelButtonText;
      this._description = value.description;
      this._nextButtonText = value.nextButtonText;
      this._title = value.title;
    }
  }

  // cancel_button_text - computed: false, optional: true, required: false
  private _cancelButtonText?: string; 
  public get cancelButtonText() {
    return this.getStringAttribute('cancel_button_text');
  }
  public set cancelButtonText(value: string) {
    this._cancelButtonText = value;
  }
  public resetCancelButtonText() {
    this._cancelButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelButtonTextInput() {
    return this._cancelButtonText;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // next_button_text - computed: false, optional: true, required: false
  private _nextButtonText?: string; 
  public get nextButtonText() {
    return this.getStringAttribute('next_button_text');
  }
  public set nextButtonText(value: string) {
    this._nextButtonText = value;
  }
  public resetNextButtonText() {
    this._nextButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextButtonTextInput() {
    return this._nextButtonText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface DefaultLoginTextsInitPasswordText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#code_label DefaultLoginTexts#code_label}
  */
  readonly codeLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#new_password_confirm_label DefaultLoginTexts#new_password_confirm_label}
  */
  readonly newPasswordConfirmLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#new_password_label DefaultLoginTexts#new_password_label}
  */
  readonly newPasswordLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#next_button_text DefaultLoginTexts#next_button_text}
  */
  readonly nextButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#resend_button_text DefaultLoginTexts#resend_button_text}
  */
  readonly resendButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
}

export function defaultLoginTextsInitPasswordTextToTerraform(struct?: DefaultLoginTextsInitPasswordText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code_label: cdktf.stringToTerraform(struct!.codeLabel),
    description: cdktf.stringToTerraform(struct!.description),
    new_password_confirm_label: cdktf.stringToTerraform(struct!.newPasswordConfirmLabel),
    new_password_label: cdktf.stringToTerraform(struct!.newPasswordLabel),
    next_button_text: cdktf.stringToTerraform(struct!.nextButtonText),
    resend_button_text: cdktf.stringToTerraform(struct!.resendButtonText),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function defaultLoginTextsInitPasswordTextToHclTerraform(struct?: DefaultLoginTextsInitPasswordText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code_label: {
      value: cdktf.stringToHclTerraform(struct!.codeLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_password_confirm_label: {
      value: cdktf.stringToHclTerraform(struct!.newPasswordConfirmLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_password_label: {
      value: cdktf.stringToHclTerraform(struct!.newPasswordLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_button_text: {
      value: cdktf.stringToHclTerraform(struct!.nextButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resend_button_text: {
      value: cdktf.stringToHclTerraform(struct!.resendButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsInitPasswordTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsInitPasswordText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeLabel = this._codeLabel;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._newPasswordConfirmLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.newPasswordConfirmLabel = this._newPasswordConfirmLabel;
    }
    if (this._newPasswordLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.newPasswordLabel = this._newPasswordLabel;
    }
    if (this._nextButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextButtonText = this._nextButtonText;
    }
    if (this._resendButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.resendButtonText = this._resendButtonText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsInitPasswordText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codeLabel = undefined;
      this._description = undefined;
      this._newPasswordConfirmLabel = undefined;
      this._newPasswordLabel = undefined;
      this._nextButtonText = undefined;
      this._resendButtonText = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codeLabel = value.codeLabel;
      this._description = value.description;
      this._newPasswordConfirmLabel = value.newPasswordConfirmLabel;
      this._newPasswordLabel = value.newPasswordLabel;
      this._nextButtonText = value.nextButtonText;
      this._resendButtonText = value.resendButtonText;
      this._title = value.title;
    }
  }

  // code_label - computed: false, optional: true, required: false
  private _codeLabel?: string; 
  public get codeLabel() {
    return this.getStringAttribute('code_label');
  }
  public set codeLabel(value: string) {
    this._codeLabel = value;
  }
  public resetCodeLabel() {
    this._codeLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeLabelInput() {
    return this._codeLabel;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // new_password_confirm_label - computed: false, optional: true, required: false
  private _newPasswordConfirmLabel?: string; 
  public get newPasswordConfirmLabel() {
    return this.getStringAttribute('new_password_confirm_label');
  }
  public set newPasswordConfirmLabel(value: string) {
    this._newPasswordConfirmLabel = value;
  }
  public resetNewPasswordConfirmLabel() {
    this._newPasswordConfirmLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPasswordConfirmLabelInput() {
    return this._newPasswordConfirmLabel;
  }

  // new_password_label - computed: false, optional: true, required: false
  private _newPasswordLabel?: string; 
  public get newPasswordLabel() {
    return this.getStringAttribute('new_password_label');
  }
  public set newPasswordLabel(value: string) {
    this._newPasswordLabel = value;
  }
  public resetNewPasswordLabel() {
    this._newPasswordLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPasswordLabelInput() {
    return this._newPasswordLabel;
  }

  // next_button_text - computed: false, optional: true, required: false
  private _nextButtonText?: string; 
  public get nextButtonText() {
    return this.getStringAttribute('next_button_text');
  }
  public set nextButtonText(value: string) {
    this._nextButtonText = value;
  }
  public resetNextButtonText() {
    this._nextButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextButtonTextInput() {
    return this._nextButtonText;
  }

  // resend_button_text - computed: false, optional: true, required: false
  private _resendButtonText?: string; 
  public get resendButtonText() {
    return this.getStringAttribute('resend_button_text');
  }
  public set resendButtonText(value: string) {
    this._resendButtonText = value;
  }
  public resetResendButtonText() {
    this._resendButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resendButtonTextInput() {
    return this._resendButtonText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface DefaultLoginTextsInitializeDoneText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#cancel_button_text DefaultLoginTexts#cancel_button_text}
  */
  readonly cancelButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#next_button_text DefaultLoginTexts#next_button_text}
  */
  readonly nextButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
}

export function defaultLoginTextsInitializeDoneTextToTerraform(struct?: DefaultLoginTextsInitializeDoneText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cancel_button_text: cdktf.stringToTerraform(struct!.cancelButtonText),
    description: cdktf.stringToTerraform(struct!.description),
    next_button_text: cdktf.stringToTerraform(struct!.nextButtonText),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function defaultLoginTextsInitializeDoneTextToHclTerraform(struct?: DefaultLoginTextsInitializeDoneText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cancel_button_text: {
      value: cdktf.stringToHclTerraform(struct!.cancelButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_button_text: {
      value: cdktf.stringToHclTerraform(struct!.nextButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsInitializeDoneTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsInitializeDoneText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cancelButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancelButtonText = this._cancelButtonText;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._nextButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextButtonText = this._nextButtonText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsInitializeDoneText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cancelButtonText = undefined;
      this._description = undefined;
      this._nextButtonText = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cancelButtonText = value.cancelButtonText;
      this._description = value.description;
      this._nextButtonText = value.nextButtonText;
      this._title = value.title;
    }
  }

  // cancel_button_text - computed: false, optional: true, required: false
  private _cancelButtonText?: string; 
  public get cancelButtonText() {
    return this.getStringAttribute('cancel_button_text');
  }
  public set cancelButtonText(value: string) {
    this._cancelButtonText = value;
  }
  public resetCancelButtonText() {
    this._cancelButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelButtonTextInput() {
    return this._cancelButtonText;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // next_button_text - computed: false, optional: true, required: false
  private _nextButtonText?: string; 
  public get nextButtonText() {
    return this.getStringAttribute('next_button_text');
  }
  public set nextButtonText(value: string) {
    this._nextButtonText = value;
  }
  public resetNextButtonText() {
    this._nextButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextButtonTextInput() {
    return this._nextButtonText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface DefaultLoginTextsInitializeUserText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#code_label DefaultLoginTexts#code_label}
  */
  readonly codeLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#new_password_confirm_label DefaultLoginTexts#new_password_confirm_label}
  */
  readonly newPasswordConfirmLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#new_password_label DefaultLoginTexts#new_password_label}
  */
  readonly newPasswordLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#next_button_text DefaultLoginTexts#next_button_text}
  */
  readonly nextButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#resend_button_text DefaultLoginTexts#resend_button_text}
  */
  readonly resendButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
}

export function defaultLoginTextsInitializeUserTextToTerraform(struct?: DefaultLoginTextsInitializeUserText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code_label: cdktf.stringToTerraform(struct!.codeLabel),
    description: cdktf.stringToTerraform(struct!.description),
    new_password_confirm_label: cdktf.stringToTerraform(struct!.newPasswordConfirmLabel),
    new_password_label: cdktf.stringToTerraform(struct!.newPasswordLabel),
    next_button_text: cdktf.stringToTerraform(struct!.nextButtonText),
    resend_button_text: cdktf.stringToTerraform(struct!.resendButtonText),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function defaultLoginTextsInitializeUserTextToHclTerraform(struct?: DefaultLoginTextsInitializeUserText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code_label: {
      value: cdktf.stringToHclTerraform(struct!.codeLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_password_confirm_label: {
      value: cdktf.stringToHclTerraform(struct!.newPasswordConfirmLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_password_label: {
      value: cdktf.stringToHclTerraform(struct!.newPasswordLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_button_text: {
      value: cdktf.stringToHclTerraform(struct!.nextButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resend_button_text: {
      value: cdktf.stringToHclTerraform(struct!.resendButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsInitializeUserTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsInitializeUserText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeLabel = this._codeLabel;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._newPasswordConfirmLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.newPasswordConfirmLabel = this._newPasswordConfirmLabel;
    }
    if (this._newPasswordLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.newPasswordLabel = this._newPasswordLabel;
    }
    if (this._nextButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextButtonText = this._nextButtonText;
    }
    if (this._resendButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.resendButtonText = this._resendButtonText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsInitializeUserText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codeLabel = undefined;
      this._description = undefined;
      this._newPasswordConfirmLabel = undefined;
      this._newPasswordLabel = undefined;
      this._nextButtonText = undefined;
      this._resendButtonText = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codeLabel = value.codeLabel;
      this._description = value.description;
      this._newPasswordConfirmLabel = value.newPasswordConfirmLabel;
      this._newPasswordLabel = value.newPasswordLabel;
      this._nextButtonText = value.nextButtonText;
      this._resendButtonText = value.resendButtonText;
      this._title = value.title;
    }
  }

  // code_label - computed: false, optional: true, required: false
  private _codeLabel?: string; 
  public get codeLabel() {
    return this.getStringAttribute('code_label');
  }
  public set codeLabel(value: string) {
    this._codeLabel = value;
  }
  public resetCodeLabel() {
    this._codeLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeLabelInput() {
    return this._codeLabel;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // new_password_confirm_label - computed: false, optional: true, required: false
  private _newPasswordConfirmLabel?: string; 
  public get newPasswordConfirmLabel() {
    return this.getStringAttribute('new_password_confirm_label');
  }
  public set newPasswordConfirmLabel(value: string) {
    this._newPasswordConfirmLabel = value;
  }
  public resetNewPasswordConfirmLabel() {
    this._newPasswordConfirmLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPasswordConfirmLabelInput() {
    return this._newPasswordConfirmLabel;
  }

  // new_password_label - computed: false, optional: true, required: false
  private _newPasswordLabel?: string; 
  public get newPasswordLabel() {
    return this.getStringAttribute('new_password_label');
  }
  public set newPasswordLabel(value: string) {
    this._newPasswordLabel = value;
  }
  public resetNewPasswordLabel() {
    this._newPasswordLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPasswordLabelInput() {
    return this._newPasswordLabel;
  }

  // next_button_text - computed: false, optional: true, required: false
  private _nextButtonText?: string; 
  public get nextButtonText() {
    return this.getStringAttribute('next_button_text');
  }
  public set nextButtonText(value: string) {
    this._nextButtonText = value;
  }
  public resetNextButtonText() {
    this._nextButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextButtonTextInput() {
    return this._nextButtonText;
  }

  // resend_button_text - computed: false, optional: true, required: false
  private _resendButtonText?: string; 
  public get resendButtonText() {
    return this.getStringAttribute('resend_button_text');
  }
  public set resendButtonText(value: string) {
    this._resendButtonText = value;
  }
  public resetResendButtonText() {
    this._resendButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resendButtonTextInput() {
    return this._resendButtonText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface DefaultLoginTextsLinkingUserDoneText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#cancel_button_text DefaultLoginTexts#cancel_button_text}
  */
  readonly cancelButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#next_button_text DefaultLoginTexts#next_button_text}
  */
  readonly nextButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
}

export function defaultLoginTextsLinkingUserDoneTextToTerraform(struct?: DefaultLoginTextsLinkingUserDoneText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cancel_button_text: cdktf.stringToTerraform(struct!.cancelButtonText),
    description: cdktf.stringToTerraform(struct!.description),
    next_button_text: cdktf.stringToTerraform(struct!.nextButtonText),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function defaultLoginTextsLinkingUserDoneTextToHclTerraform(struct?: DefaultLoginTextsLinkingUserDoneText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cancel_button_text: {
      value: cdktf.stringToHclTerraform(struct!.cancelButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_button_text: {
      value: cdktf.stringToHclTerraform(struct!.nextButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsLinkingUserDoneTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsLinkingUserDoneText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cancelButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancelButtonText = this._cancelButtonText;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._nextButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextButtonText = this._nextButtonText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsLinkingUserDoneText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cancelButtonText = undefined;
      this._description = undefined;
      this._nextButtonText = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cancelButtonText = value.cancelButtonText;
      this._description = value.description;
      this._nextButtonText = value.nextButtonText;
      this._title = value.title;
    }
  }

  // cancel_button_text - computed: false, optional: true, required: false
  private _cancelButtonText?: string; 
  public get cancelButtonText() {
    return this.getStringAttribute('cancel_button_text');
  }
  public set cancelButtonText(value: string) {
    this._cancelButtonText = value;
  }
  public resetCancelButtonText() {
    this._cancelButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelButtonTextInput() {
    return this._cancelButtonText;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // next_button_text - computed: false, optional: true, required: false
  private _nextButtonText?: string; 
  public get nextButtonText() {
    return this.getStringAttribute('next_button_text');
  }
  public set nextButtonText(value: string) {
    this._nextButtonText = value;
  }
  public resetNextButtonText() {
    this._nextButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextButtonTextInput() {
    return this._nextButtonText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface DefaultLoginTextsLinkingUserPromptText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#link_button_text DefaultLoginTexts#link_button_text}
  */
  readonly linkButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#other_button_text DefaultLoginTexts#other_button_text}
  */
  readonly otherButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
}

export function defaultLoginTextsLinkingUserPromptTextToTerraform(struct?: DefaultLoginTextsLinkingUserPromptText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    link_button_text: cdktf.stringToTerraform(struct!.linkButtonText),
    other_button_text: cdktf.stringToTerraform(struct!.otherButtonText),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function defaultLoginTextsLinkingUserPromptTextToHclTerraform(struct?: DefaultLoginTextsLinkingUserPromptText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    link_button_text: {
      value: cdktf.stringToHclTerraform(struct!.linkButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    other_button_text: {
      value: cdktf.stringToHclTerraform(struct!.otherButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsLinkingUserPromptTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsLinkingUserPromptText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._linkButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.linkButtonText = this._linkButtonText;
    }
    if (this._otherButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherButtonText = this._otherButtonText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsLinkingUserPromptText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._linkButtonText = undefined;
      this._otherButtonText = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._linkButtonText = value.linkButtonText;
      this._otherButtonText = value.otherButtonText;
      this._title = value.title;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // link_button_text - computed: false, optional: true, required: false
  private _linkButtonText?: string; 
  public get linkButtonText() {
    return this.getStringAttribute('link_button_text');
  }
  public set linkButtonText(value: string) {
    this._linkButtonText = value;
  }
  public resetLinkButtonText() {
    this._linkButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkButtonTextInput() {
    return this._linkButtonText;
  }

  // other_button_text - computed: false, optional: true, required: false
  private _otherButtonText?: string; 
  public get otherButtonText() {
    return this.getStringAttribute('other_button_text');
  }
  public set otherButtonText(value: string) {
    this._otherButtonText = value;
  }
  public resetOtherButtonText() {
    this._otherButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherButtonTextInput() {
    return this._otherButtonText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface DefaultLoginTextsLoginText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description_linking_process DefaultLoginTexts#description_linking_process}
  */
  readonly descriptionLinkingProcess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#external_user_description DefaultLoginTexts#external_user_description}
  */
  readonly externalUserDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#login_name_label DefaultLoginTexts#login_name_label}
  */
  readonly loginNameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#login_name_placeholder DefaultLoginTexts#login_name_placeholder}
  */
  readonly loginNamePlaceholder?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#next_button_text DefaultLoginTexts#next_button_text}
  */
  readonly nextButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#register_button_text DefaultLoginTexts#register_button_text}
  */
  readonly registerButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title_linking_process DefaultLoginTexts#title_linking_process}
  */
  readonly titleLinkingProcess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#user_must_be_member_of_org DefaultLoginTexts#user_must_be_member_of_org}
  */
  readonly userMustBeMemberOfOrg?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#user_name_placeholder DefaultLoginTexts#user_name_placeholder}
  */
  readonly userNamePlaceholder?: string;
}

export function defaultLoginTextsLoginTextToTerraform(struct?: DefaultLoginTextsLoginText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    description_linking_process: cdktf.stringToTerraform(struct!.descriptionLinkingProcess),
    external_user_description: cdktf.stringToTerraform(struct!.externalUserDescription),
    login_name_label: cdktf.stringToTerraform(struct!.loginNameLabel),
    login_name_placeholder: cdktf.stringToTerraform(struct!.loginNamePlaceholder),
    next_button_text: cdktf.stringToTerraform(struct!.nextButtonText),
    register_button_text: cdktf.stringToTerraform(struct!.registerButtonText),
    title: cdktf.stringToTerraform(struct!.title),
    title_linking_process: cdktf.stringToTerraform(struct!.titleLinkingProcess),
    user_must_be_member_of_org: cdktf.stringToTerraform(struct!.userMustBeMemberOfOrg),
    user_name_placeholder: cdktf.stringToTerraform(struct!.userNamePlaceholder),
  }
}


export function defaultLoginTextsLoginTextToHclTerraform(struct?: DefaultLoginTextsLoginText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description_linking_process: {
      value: cdktf.stringToHclTerraform(struct!.descriptionLinkingProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_user_description: {
      value: cdktf.stringToHclTerraform(struct!.externalUserDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_name_label: {
      value: cdktf.stringToHclTerraform(struct!.loginNameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_name_placeholder: {
      value: cdktf.stringToHclTerraform(struct!.loginNamePlaceholder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_button_text: {
      value: cdktf.stringToHclTerraform(struct!.nextButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    register_button_text: {
      value: cdktf.stringToHclTerraform(struct!.registerButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title_linking_process: {
      value: cdktf.stringToHclTerraform(struct!.titleLinkingProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_must_be_member_of_org: {
      value: cdktf.stringToHclTerraform(struct!.userMustBeMemberOfOrg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name_placeholder: {
      value: cdktf.stringToHclTerraform(struct!.userNamePlaceholder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsLoginTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsLoginText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._descriptionLinkingProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionLinkingProcess = this._descriptionLinkingProcess;
    }
    if (this._externalUserDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalUserDescription = this._externalUserDescription;
    }
    if (this._loginNameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginNameLabel = this._loginNameLabel;
    }
    if (this._loginNamePlaceholder !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginNamePlaceholder = this._loginNamePlaceholder;
    }
    if (this._nextButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextButtonText = this._nextButtonText;
    }
    if (this._registerButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.registerButtonText = this._registerButtonText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._titleLinkingProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleLinkingProcess = this._titleLinkingProcess;
    }
    if (this._userMustBeMemberOfOrg !== undefined) {
      hasAnyValues = true;
      internalValueResult.userMustBeMemberOfOrg = this._userMustBeMemberOfOrg;
    }
    if (this._userNamePlaceholder !== undefined) {
      hasAnyValues = true;
      internalValueResult.userNamePlaceholder = this._userNamePlaceholder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsLoginText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._descriptionLinkingProcess = undefined;
      this._externalUserDescription = undefined;
      this._loginNameLabel = undefined;
      this._loginNamePlaceholder = undefined;
      this._nextButtonText = undefined;
      this._registerButtonText = undefined;
      this._title = undefined;
      this._titleLinkingProcess = undefined;
      this._userMustBeMemberOfOrg = undefined;
      this._userNamePlaceholder = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._descriptionLinkingProcess = value.descriptionLinkingProcess;
      this._externalUserDescription = value.externalUserDescription;
      this._loginNameLabel = value.loginNameLabel;
      this._loginNamePlaceholder = value.loginNamePlaceholder;
      this._nextButtonText = value.nextButtonText;
      this._registerButtonText = value.registerButtonText;
      this._title = value.title;
      this._titleLinkingProcess = value.titleLinkingProcess;
      this._userMustBeMemberOfOrg = value.userMustBeMemberOfOrg;
      this._userNamePlaceholder = value.userNamePlaceholder;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // description_linking_process - computed: false, optional: true, required: false
  private _descriptionLinkingProcess?: string; 
  public get descriptionLinkingProcess() {
    return this.getStringAttribute('description_linking_process');
  }
  public set descriptionLinkingProcess(value: string) {
    this._descriptionLinkingProcess = value;
  }
  public resetDescriptionLinkingProcess() {
    this._descriptionLinkingProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionLinkingProcessInput() {
    return this._descriptionLinkingProcess;
  }

  // external_user_description - computed: false, optional: true, required: false
  private _externalUserDescription?: string; 
  public get externalUserDescription() {
    return this.getStringAttribute('external_user_description');
  }
  public set externalUserDescription(value: string) {
    this._externalUserDescription = value;
  }
  public resetExternalUserDescription() {
    this._externalUserDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalUserDescriptionInput() {
    return this._externalUserDescription;
  }

  // login_name_label - computed: false, optional: true, required: false
  private _loginNameLabel?: string; 
  public get loginNameLabel() {
    return this.getStringAttribute('login_name_label');
  }
  public set loginNameLabel(value: string) {
    this._loginNameLabel = value;
  }
  public resetLoginNameLabel() {
    this._loginNameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginNameLabelInput() {
    return this._loginNameLabel;
  }

  // login_name_placeholder - computed: false, optional: true, required: false
  private _loginNamePlaceholder?: string; 
  public get loginNamePlaceholder() {
    return this.getStringAttribute('login_name_placeholder');
  }
  public set loginNamePlaceholder(value: string) {
    this._loginNamePlaceholder = value;
  }
  public resetLoginNamePlaceholder() {
    this._loginNamePlaceholder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginNamePlaceholderInput() {
    return this._loginNamePlaceholder;
  }

  // next_button_text - computed: false, optional: true, required: false
  private _nextButtonText?: string; 
  public get nextButtonText() {
    return this.getStringAttribute('next_button_text');
  }
  public set nextButtonText(value: string) {
    this._nextButtonText = value;
  }
  public resetNextButtonText() {
    this._nextButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextButtonTextInput() {
    return this._nextButtonText;
  }

  // register_button_text - computed: false, optional: true, required: false
  private _registerButtonText?: string; 
  public get registerButtonText() {
    return this.getStringAttribute('register_button_text');
  }
  public set registerButtonText(value: string) {
    this._registerButtonText = value;
  }
  public resetRegisterButtonText() {
    this._registerButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerButtonTextInput() {
    return this._registerButtonText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // title_linking_process - computed: false, optional: true, required: false
  private _titleLinkingProcess?: string; 
  public get titleLinkingProcess() {
    return this.getStringAttribute('title_linking_process');
  }
  public set titleLinkingProcess(value: string) {
    this._titleLinkingProcess = value;
  }
  public resetTitleLinkingProcess() {
    this._titleLinkingProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleLinkingProcessInput() {
    return this._titleLinkingProcess;
  }

  // user_must_be_member_of_org - computed: false, optional: true, required: false
  private _userMustBeMemberOfOrg?: string; 
  public get userMustBeMemberOfOrg() {
    return this.getStringAttribute('user_must_be_member_of_org');
  }
  public set userMustBeMemberOfOrg(value: string) {
    this._userMustBeMemberOfOrg = value;
  }
  public resetUserMustBeMemberOfOrg() {
    this._userMustBeMemberOfOrg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMustBeMemberOfOrgInput() {
    return this._userMustBeMemberOfOrg;
  }

  // user_name_placeholder - computed: false, optional: true, required: false
  private _userNamePlaceholder?: string; 
  public get userNamePlaceholder() {
    return this.getStringAttribute('user_name_placeholder');
  }
  public set userNamePlaceholder(value: string) {
    this._userNamePlaceholder = value;
  }
  public resetUserNamePlaceholder() {
    this._userNamePlaceholder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNamePlaceholderInput() {
    return this._userNamePlaceholder;
  }
}
export interface DefaultLoginTextsLogoutText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#login_button_text DefaultLoginTexts#login_button_text}
  */
  readonly loginButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
}

export function defaultLoginTextsLogoutTextToTerraform(struct?: DefaultLoginTextsLogoutText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    login_button_text: cdktf.stringToTerraform(struct!.loginButtonText),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function defaultLoginTextsLogoutTextToHclTerraform(struct?: DefaultLoginTextsLogoutText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_button_text: {
      value: cdktf.stringToHclTerraform(struct!.loginButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsLogoutTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsLogoutText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._loginButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginButtonText = this._loginButtonText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsLogoutText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._loginButtonText = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._loginButtonText = value.loginButtonText;
      this._title = value.title;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // login_button_text - computed: false, optional: true, required: false
  private _loginButtonText?: string; 
  public get loginButtonText() {
    return this.getStringAttribute('login_button_text');
  }
  public set loginButtonText(value: string) {
    this._loginButtonText = value;
  }
  public resetLoginButtonText() {
    this._loginButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginButtonTextInput() {
    return this._loginButtonText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface DefaultLoginTextsMfaProvidersText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#choose_other DefaultLoginTexts#choose_other}
  */
  readonly chooseOther?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#otp DefaultLoginTexts#otp}
  */
  readonly otp?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#u2f DefaultLoginTexts#u2f}
  */
  readonly u2F?: string;
}

export function defaultLoginTextsMfaProvidersTextToTerraform(struct?: DefaultLoginTextsMfaProvidersText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    choose_other: cdktf.stringToTerraform(struct!.chooseOther),
    otp: cdktf.stringToTerraform(struct!.otp),
    u2f: cdktf.stringToTerraform(struct!.u2F),
  }
}


export function defaultLoginTextsMfaProvidersTextToHclTerraform(struct?: DefaultLoginTextsMfaProvidersText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    choose_other: {
      value: cdktf.stringToHclTerraform(struct!.chooseOther),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    otp: {
      value: cdktf.stringToHclTerraform(struct!.otp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    u2f: {
      value: cdktf.stringToHclTerraform(struct!.u2F),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsMfaProvidersTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsMfaProvidersText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chooseOther !== undefined) {
      hasAnyValues = true;
      internalValueResult.chooseOther = this._chooseOther;
    }
    if (this._otp !== undefined) {
      hasAnyValues = true;
      internalValueResult.otp = this._otp;
    }
    if (this._u2F !== undefined) {
      hasAnyValues = true;
      internalValueResult.u2F = this._u2F;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsMfaProvidersText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chooseOther = undefined;
      this._otp = undefined;
      this._u2F = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chooseOther = value.chooseOther;
      this._otp = value.otp;
      this._u2F = value.u2F;
    }
  }

  // choose_other - computed: false, optional: true, required: false
  private _chooseOther?: string; 
  public get chooseOther() {
    return this.getStringAttribute('choose_other');
  }
  public set chooseOther(value: string) {
    this._chooseOther = value;
  }
  public resetChooseOther() {
    this._chooseOther = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chooseOtherInput() {
    return this._chooseOther;
  }

  // otp - computed: false, optional: true, required: false
  private _otp?: string; 
  public get otp() {
    return this.getStringAttribute('otp');
  }
  public set otp(value: string) {
    this._otp = value;
  }
  public resetOtp() {
    this._otp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otpInput() {
    return this._otp;
  }

  // u2f - computed: false, optional: true, required: false
  private _u2F?: string; 
  public get u2F() {
    return this.getStringAttribute('u2f');
  }
  public set u2F(value: string) {
    this._u2F = value;
  }
  public resetU2F() {
    this._u2F = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get u2FInput() {
    return this._u2F;
  }
}
export interface DefaultLoginTextsPasswordChangeDoneText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#next_button_text DefaultLoginTexts#next_button_text}
  */
  readonly nextButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
}

export function defaultLoginTextsPasswordChangeDoneTextToTerraform(struct?: DefaultLoginTextsPasswordChangeDoneText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    next_button_text: cdktf.stringToTerraform(struct!.nextButtonText),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function defaultLoginTextsPasswordChangeDoneTextToHclTerraform(struct?: DefaultLoginTextsPasswordChangeDoneText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_button_text: {
      value: cdktf.stringToHclTerraform(struct!.nextButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsPasswordChangeDoneTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsPasswordChangeDoneText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._nextButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextButtonText = this._nextButtonText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsPasswordChangeDoneText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._nextButtonText = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._nextButtonText = value.nextButtonText;
      this._title = value.title;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // next_button_text - computed: false, optional: true, required: false
  private _nextButtonText?: string; 
  public get nextButtonText() {
    return this.getStringAttribute('next_button_text');
  }
  public set nextButtonText(value: string) {
    this._nextButtonText = value;
  }
  public resetNextButtonText() {
    this._nextButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextButtonTextInput() {
    return this._nextButtonText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface DefaultLoginTextsPasswordChangeText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#cancel_button_text DefaultLoginTexts#cancel_button_text}
  */
  readonly cancelButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#expired_description DefaultLoginTexts#expired_description}
  */
  readonly expiredDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#new_password_confirm_label DefaultLoginTexts#new_password_confirm_label}
  */
  readonly newPasswordConfirmLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#new_password_label DefaultLoginTexts#new_password_label}
  */
  readonly newPasswordLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#next_button_text DefaultLoginTexts#next_button_text}
  */
  readonly nextButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#old_password_label DefaultLoginTexts#old_password_label}
  */
  readonly oldPasswordLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
}

export function defaultLoginTextsPasswordChangeTextToTerraform(struct?: DefaultLoginTextsPasswordChangeText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cancel_button_text: cdktf.stringToTerraform(struct!.cancelButtonText),
    description: cdktf.stringToTerraform(struct!.description),
    expired_description: cdktf.stringToTerraform(struct!.expiredDescription),
    new_password_confirm_label: cdktf.stringToTerraform(struct!.newPasswordConfirmLabel),
    new_password_label: cdktf.stringToTerraform(struct!.newPasswordLabel),
    next_button_text: cdktf.stringToTerraform(struct!.nextButtonText),
    old_password_label: cdktf.stringToTerraform(struct!.oldPasswordLabel),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function defaultLoginTextsPasswordChangeTextToHclTerraform(struct?: DefaultLoginTextsPasswordChangeText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cancel_button_text: {
      value: cdktf.stringToHclTerraform(struct!.cancelButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    expired_description: {
      value: cdktf.stringToHclTerraform(struct!.expiredDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_password_confirm_label: {
      value: cdktf.stringToHclTerraform(struct!.newPasswordConfirmLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_password_label: {
      value: cdktf.stringToHclTerraform(struct!.newPasswordLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_button_text: {
      value: cdktf.stringToHclTerraform(struct!.nextButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    old_password_label: {
      value: cdktf.stringToHclTerraform(struct!.oldPasswordLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsPasswordChangeTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsPasswordChangeText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cancelButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancelButtonText = this._cancelButtonText;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._expiredDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.expiredDescription = this._expiredDescription;
    }
    if (this._newPasswordConfirmLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.newPasswordConfirmLabel = this._newPasswordConfirmLabel;
    }
    if (this._newPasswordLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.newPasswordLabel = this._newPasswordLabel;
    }
    if (this._nextButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextButtonText = this._nextButtonText;
    }
    if (this._oldPasswordLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldPasswordLabel = this._oldPasswordLabel;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsPasswordChangeText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cancelButtonText = undefined;
      this._description = undefined;
      this._expiredDescription = undefined;
      this._newPasswordConfirmLabel = undefined;
      this._newPasswordLabel = undefined;
      this._nextButtonText = undefined;
      this._oldPasswordLabel = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cancelButtonText = value.cancelButtonText;
      this._description = value.description;
      this._expiredDescription = value.expiredDescription;
      this._newPasswordConfirmLabel = value.newPasswordConfirmLabel;
      this._newPasswordLabel = value.newPasswordLabel;
      this._nextButtonText = value.nextButtonText;
      this._oldPasswordLabel = value.oldPasswordLabel;
      this._title = value.title;
    }
  }

  // cancel_button_text - computed: false, optional: true, required: false
  private _cancelButtonText?: string; 
  public get cancelButtonText() {
    return this.getStringAttribute('cancel_button_text');
  }
  public set cancelButtonText(value: string) {
    this._cancelButtonText = value;
  }
  public resetCancelButtonText() {
    this._cancelButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelButtonTextInput() {
    return this._cancelButtonText;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // expired_description - computed: false, optional: true, required: false
  private _expiredDescription?: string; 
  public get expiredDescription() {
    return this.getStringAttribute('expired_description');
  }
  public set expiredDescription(value: string) {
    this._expiredDescription = value;
  }
  public resetExpiredDescription() {
    this._expiredDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expiredDescriptionInput() {
    return this._expiredDescription;
  }

  // new_password_confirm_label - computed: false, optional: true, required: false
  private _newPasswordConfirmLabel?: string; 
  public get newPasswordConfirmLabel() {
    return this.getStringAttribute('new_password_confirm_label');
  }
  public set newPasswordConfirmLabel(value: string) {
    this._newPasswordConfirmLabel = value;
  }
  public resetNewPasswordConfirmLabel() {
    this._newPasswordConfirmLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPasswordConfirmLabelInput() {
    return this._newPasswordConfirmLabel;
  }

  // new_password_label - computed: false, optional: true, required: false
  private _newPasswordLabel?: string; 
  public get newPasswordLabel() {
    return this.getStringAttribute('new_password_label');
  }
  public set newPasswordLabel(value: string) {
    this._newPasswordLabel = value;
  }
  public resetNewPasswordLabel() {
    this._newPasswordLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPasswordLabelInput() {
    return this._newPasswordLabel;
  }

  // next_button_text - computed: false, optional: true, required: false
  private _nextButtonText?: string; 
  public get nextButtonText() {
    return this.getStringAttribute('next_button_text');
  }
  public set nextButtonText(value: string) {
    this._nextButtonText = value;
  }
  public resetNextButtonText() {
    this._nextButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextButtonTextInput() {
    return this._nextButtonText;
  }

  // old_password_label - computed: false, optional: true, required: false
  private _oldPasswordLabel?: string; 
  public get oldPasswordLabel() {
    return this.getStringAttribute('old_password_label');
  }
  public set oldPasswordLabel(value: string) {
    this._oldPasswordLabel = value;
  }
  public resetOldPasswordLabel() {
    this._oldPasswordLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldPasswordLabelInput() {
    return this._oldPasswordLabel;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface DefaultLoginTextsPasswordResetDoneText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#next_button_text DefaultLoginTexts#next_button_text}
  */
  readonly nextButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
}

export function defaultLoginTextsPasswordResetDoneTextToTerraform(struct?: DefaultLoginTextsPasswordResetDoneText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    next_button_text: cdktf.stringToTerraform(struct!.nextButtonText),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function defaultLoginTextsPasswordResetDoneTextToHclTerraform(struct?: DefaultLoginTextsPasswordResetDoneText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_button_text: {
      value: cdktf.stringToHclTerraform(struct!.nextButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsPasswordResetDoneTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsPasswordResetDoneText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._nextButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextButtonText = this._nextButtonText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsPasswordResetDoneText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._nextButtonText = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._nextButtonText = value.nextButtonText;
      this._title = value.title;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // next_button_text - computed: false, optional: true, required: false
  private _nextButtonText?: string; 
  public get nextButtonText() {
    return this.getStringAttribute('next_button_text');
  }
  public set nextButtonText(value: string) {
    this._nextButtonText = value;
  }
  public resetNextButtonText() {
    this._nextButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextButtonTextInput() {
    return this._nextButtonText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface DefaultLoginTextsPasswordText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#back_button_text DefaultLoginTexts#back_button_text}
  */
  readonly backButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#confirmation DefaultLoginTexts#confirmation}
  */
  readonly confirmation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#has_lowercase DefaultLoginTexts#has_lowercase}
  */
  readonly hasLowercase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#has_number DefaultLoginTexts#has_number}
  */
  readonly hasNumber?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#has_symbol DefaultLoginTexts#has_symbol}
  */
  readonly hasSymbol?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#has_uppercase DefaultLoginTexts#has_uppercase}
  */
  readonly hasUppercase?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#min_length DefaultLoginTexts#min_length}
  */
  readonly minLength?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#next_button_text DefaultLoginTexts#next_button_text}
  */
  readonly nextButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#password_label DefaultLoginTexts#password_label}
  */
  readonly passwordLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#reset_link_text DefaultLoginTexts#reset_link_text}
  */
  readonly resetLinkText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
}

export function defaultLoginTextsPasswordTextToTerraform(struct?: DefaultLoginTextsPasswordText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    back_button_text: cdktf.stringToTerraform(struct!.backButtonText),
    confirmation: cdktf.stringToTerraform(struct!.confirmation),
    description: cdktf.stringToTerraform(struct!.description),
    has_lowercase: cdktf.stringToTerraform(struct!.hasLowercase),
    has_number: cdktf.stringToTerraform(struct!.hasNumber),
    has_symbol: cdktf.stringToTerraform(struct!.hasSymbol),
    has_uppercase: cdktf.stringToTerraform(struct!.hasUppercase),
    min_length: cdktf.stringToTerraform(struct!.minLength),
    next_button_text: cdktf.stringToTerraform(struct!.nextButtonText),
    password_label: cdktf.stringToTerraform(struct!.passwordLabel),
    reset_link_text: cdktf.stringToTerraform(struct!.resetLinkText),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function defaultLoginTextsPasswordTextToHclTerraform(struct?: DefaultLoginTextsPasswordText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    back_button_text: {
      value: cdktf.stringToHclTerraform(struct!.backButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confirmation: {
      value: cdktf.stringToHclTerraform(struct!.confirmation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    has_lowercase: {
      value: cdktf.stringToHclTerraform(struct!.hasLowercase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    has_number: {
      value: cdktf.stringToHclTerraform(struct!.hasNumber),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    has_symbol: {
      value: cdktf.stringToHclTerraform(struct!.hasSymbol),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    has_uppercase: {
      value: cdktf.stringToHclTerraform(struct!.hasUppercase),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    min_length: {
      value: cdktf.stringToHclTerraform(struct!.minLength),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_button_text: {
      value: cdktf.stringToHclTerraform(struct!.nextButtonText),
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
    reset_link_text: {
      value: cdktf.stringToHclTerraform(struct!.resetLinkText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsPasswordTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsPasswordText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.backButtonText = this._backButtonText;
    }
    if (this._confirmation !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmation = this._confirmation;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._hasLowercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasLowercase = this._hasLowercase;
    }
    if (this._hasNumber !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasNumber = this._hasNumber;
    }
    if (this._hasSymbol !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasSymbol = this._hasSymbol;
    }
    if (this._hasUppercase !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasUppercase = this._hasUppercase;
    }
    if (this._minLength !== undefined) {
      hasAnyValues = true;
      internalValueResult.minLength = this._minLength;
    }
    if (this._nextButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextButtonText = this._nextButtonText;
    }
    if (this._passwordLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordLabel = this._passwordLabel;
    }
    if (this._resetLinkText !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetLinkText = this._resetLinkText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsPasswordText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backButtonText = undefined;
      this._confirmation = undefined;
      this._description = undefined;
      this._hasLowercase = undefined;
      this._hasNumber = undefined;
      this._hasSymbol = undefined;
      this._hasUppercase = undefined;
      this._minLength = undefined;
      this._nextButtonText = undefined;
      this._passwordLabel = undefined;
      this._resetLinkText = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backButtonText = value.backButtonText;
      this._confirmation = value.confirmation;
      this._description = value.description;
      this._hasLowercase = value.hasLowercase;
      this._hasNumber = value.hasNumber;
      this._hasSymbol = value.hasSymbol;
      this._hasUppercase = value.hasUppercase;
      this._minLength = value.minLength;
      this._nextButtonText = value.nextButtonText;
      this._passwordLabel = value.passwordLabel;
      this._resetLinkText = value.resetLinkText;
      this._title = value.title;
    }
  }

  // back_button_text - computed: false, optional: true, required: false
  private _backButtonText?: string; 
  public get backButtonText() {
    return this.getStringAttribute('back_button_text');
  }
  public set backButtonText(value: string) {
    this._backButtonText = value;
  }
  public resetBackButtonText() {
    this._backButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backButtonTextInput() {
    return this._backButtonText;
  }

  // confirmation - computed: false, optional: true, required: false
  private _confirmation?: string; 
  public get confirmation() {
    return this.getStringAttribute('confirmation');
  }
  public set confirmation(value: string) {
    this._confirmation = value;
  }
  public resetConfirmation() {
    this._confirmation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmationInput() {
    return this._confirmation;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // has_lowercase - computed: false, optional: true, required: false
  private _hasLowercase?: string; 
  public get hasLowercase() {
    return this.getStringAttribute('has_lowercase');
  }
  public set hasLowercase(value: string) {
    this._hasLowercase = value;
  }
  public resetHasLowercase() {
    this._hasLowercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasLowercaseInput() {
    return this._hasLowercase;
  }

  // has_number - computed: false, optional: true, required: false
  private _hasNumber?: string; 
  public get hasNumber() {
    return this.getStringAttribute('has_number');
  }
  public set hasNumber(value: string) {
    this._hasNumber = value;
  }
  public resetHasNumber() {
    this._hasNumber = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasNumberInput() {
    return this._hasNumber;
  }

  // has_symbol - computed: false, optional: true, required: false
  private _hasSymbol?: string; 
  public get hasSymbol() {
    return this.getStringAttribute('has_symbol');
  }
  public set hasSymbol(value: string) {
    this._hasSymbol = value;
  }
  public resetHasSymbol() {
    this._hasSymbol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasSymbolInput() {
    return this._hasSymbol;
  }

  // has_uppercase - computed: false, optional: true, required: false
  private _hasUppercase?: string; 
  public get hasUppercase() {
    return this.getStringAttribute('has_uppercase');
  }
  public set hasUppercase(value: string) {
    this._hasUppercase = value;
  }
  public resetHasUppercase() {
    this._hasUppercase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasUppercaseInput() {
    return this._hasUppercase;
  }

  // min_length - computed: false, optional: true, required: false
  private _minLength?: string; 
  public get minLength() {
    return this.getStringAttribute('min_length');
  }
  public set minLength(value: string) {
    this._minLength = value;
  }
  public resetMinLength() {
    this._minLength = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minLengthInput() {
    return this._minLength;
  }

  // next_button_text - computed: false, optional: true, required: false
  private _nextButtonText?: string; 
  public get nextButtonText() {
    return this.getStringAttribute('next_button_text');
  }
  public set nextButtonText(value: string) {
    this._nextButtonText = value;
  }
  public resetNextButtonText() {
    this._nextButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextButtonTextInput() {
    return this._nextButtonText;
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

  // reset_link_text - computed: false, optional: true, required: false
  private _resetLinkText?: string; 
  public get resetLinkText() {
    return this.getStringAttribute('reset_link_text');
  }
  public set resetLinkText(value: string) {
    this._resetLinkText = value;
  }
  public resetResetLinkText() {
    this._resetLinkText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetLinkTextInput() {
    return this._resetLinkText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface DefaultLoginTextsPasswordlessPromptText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description_init DefaultLoginTexts#description_init}
  */
  readonly descriptionInit?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#next_button_text DefaultLoginTexts#next_button_text}
  */
  readonly nextButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#passwordless_button_text DefaultLoginTexts#passwordless_button_text}
  */
  readonly passwordlessButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#skip_button_text DefaultLoginTexts#skip_button_text}
  */
  readonly skipButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
}

export function defaultLoginTextsPasswordlessPromptTextToTerraform(struct?: DefaultLoginTextsPasswordlessPromptText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    description_init: cdktf.stringToTerraform(struct!.descriptionInit),
    next_button_text: cdktf.stringToTerraform(struct!.nextButtonText),
    passwordless_button_text: cdktf.stringToTerraform(struct!.passwordlessButtonText),
    skip_button_text: cdktf.stringToTerraform(struct!.skipButtonText),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function defaultLoginTextsPasswordlessPromptTextToHclTerraform(struct?: DefaultLoginTextsPasswordlessPromptText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description_init: {
      value: cdktf.stringToHclTerraform(struct!.descriptionInit),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_button_text: {
      value: cdktf.stringToHclTerraform(struct!.nextButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passwordless_button_text: {
      value: cdktf.stringToHclTerraform(struct!.passwordlessButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_button_text: {
      value: cdktf.stringToHclTerraform(struct!.skipButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsPasswordlessPromptTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsPasswordlessPromptText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._descriptionInit !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionInit = this._descriptionInit;
    }
    if (this._nextButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextButtonText = this._nextButtonText;
    }
    if (this._passwordlessButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordlessButtonText = this._passwordlessButtonText;
    }
    if (this._skipButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipButtonText = this._skipButtonText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsPasswordlessPromptText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._descriptionInit = undefined;
      this._nextButtonText = undefined;
      this._passwordlessButtonText = undefined;
      this._skipButtonText = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._descriptionInit = value.descriptionInit;
      this._nextButtonText = value.nextButtonText;
      this._passwordlessButtonText = value.passwordlessButtonText;
      this._skipButtonText = value.skipButtonText;
      this._title = value.title;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // description_init - computed: false, optional: true, required: false
  private _descriptionInit?: string; 
  public get descriptionInit() {
    return this.getStringAttribute('description_init');
  }
  public set descriptionInit(value: string) {
    this._descriptionInit = value;
  }
  public resetDescriptionInit() {
    this._descriptionInit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInitInput() {
    return this._descriptionInit;
  }

  // next_button_text - computed: false, optional: true, required: false
  private _nextButtonText?: string; 
  public get nextButtonText() {
    return this.getStringAttribute('next_button_text');
  }
  public set nextButtonText(value: string) {
    this._nextButtonText = value;
  }
  public resetNextButtonText() {
    this._nextButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextButtonTextInput() {
    return this._nextButtonText;
  }

  // passwordless_button_text - computed: false, optional: true, required: false
  private _passwordlessButtonText?: string; 
  public get passwordlessButtonText() {
    return this.getStringAttribute('passwordless_button_text');
  }
  public set passwordlessButtonText(value: string) {
    this._passwordlessButtonText = value;
  }
  public resetPasswordlessButtonText() {
    this._passwordlessButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordlessButtonTextInput() {
    return this._passwordlessButtonText;
  }

  // skip_button_text - computed: false, optional: true, required: false
  private _skipButtonText?: string; 
  public get skipButtonText() {
    return this.getStringAttribute('skip_button_text');
  }
  public set skipButtonText(value: string) {
    this._skipButtonText = value;
  }
  public resetSkipButtonText() {
    this._skipButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipButtonTextInput() {
    return this._skipButtonText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface DefaultLoginTextsPasswordlessRegistrationDoneText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#cancel_button_text DefaultLoginTexts#cancel_button_text}
  */
  readonly cancelButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description_close DefaultLoginTexts#description_close}
  */
  readonly descriptionClose?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#next_button_text DefaultLoginTexts#next_button_text}
  */
  readonly nextButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
}

export function defaultLoginTextsPasswordlessRegistrationDoneTextToTerraform(struct?: DefaultLoginTextsPasswordlessRegistrationDoneText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cancel_button_text: cdktf.stringToTerraform(struct!.cancelButtonText),
    description: cdktf.stringToTerraform(struct!.description),
    description_close: cdktf.stringToTerraform(struct!.descriptionClose),
    next_button_text: cdktf.stringToTerraform(struct!.nextButtonText),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function defaultLoginTextsPasswordlessRegistrationDoneTextToHclTerraform(struct?: DefaultLoginTextsPasswordlessRegistrationDoneText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cancel_button_text: {
      value: cdktf.stringToHclTerraform(struct!.cancelButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description_close: {
      value: cdktf.stringToHclTerraform(struct!.descriptionClose),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_button_text: {
      value: cdktf.stringToHclTerraform(struct!.nextButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsPasswordlessRegistrationDoneTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsPasswordlessRegistrationDoneText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cancelButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancelButtonText = this._cancelButtonText;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._descriptionClose !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionClose = this._descriptionClose;
    }
    if (this._nextButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextButtonText = this._nextButtonText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsPasswordlessRegistrationDoneText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cancelButtonText = undefined;
      this._description = undefined;
      this._descriptionClose = undefined;
      this._nextButtonText = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cancelButtonText = value.cancelButtonText;
      this._description = value.description;
      this._descriptionClose = value.descriptionClose;
      this._nextButtonText = value.nextButtonText;
      this._title = value.title;
    }
  }

  // cancel_button_text - computed: false, optional: true, required: false
  private _cancelButtonText?: string; 
  public get cancelButtonText() {
    return this.getStringAttribute('cancel_button_text');
  }
  public set cancelButtonText(value: string) {
    this._cancelButtonText = value;
  }
  public resetCancelButtonText() {
    this._cancelButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelButtonTextInput() {
    return this._cancelButtonText;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // description_close - computed: false, optional: true, required: false
  private _descriptionClose?: string; 
  public get descriptionClose() {
    return this.getStringAttribute('description_close');
  }
  public set descriptionClose(value: string) {
    this._descriptionClose = value;
  }
  public resetDescriptionClose() {
    this._descriptionClose = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionCloseInput() {
    return this._descriptionClose;
  }

  // next_button_text - computed: false, optional: true, required: false
  private _nextButtonText?: string; 
  public get nextButtonText() {
    return this.getStringAttribute('next_button_text');
  }
  public set nextButtonText(value: string) {
    this._nextButtonText = value;
  }
  public resetNextButtonText() {
    this._nextButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextButtonTextInput() {
    return this._nextButtonText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface DefaultLoginTextsPasswordlessRegistrationText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#error_retry DefaultLoginTexts#error_retry}
  */
  readonly errorRetry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#not_supported DefaultLoginTexts#not_supported}
  */
  readonly notSupported?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#register_token_button_text DefaultLoginTexts#register_token_button_text}
  */
  readonly registerTokenButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#token_name_label DefaultLoginTexts#token_name_label}
  */
  readonly tokenNameLabel?: string;
}

export function defaultLoginTextsPasswordlessRegistrationTextToTerraform(struct?: DefaultLoginTextsPasswordlessRegistrationText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    error_retry: cdktf.stringToTerraform(struct!.errorRetry),
    not_supported: cdktf.stringToTerraform(struct!.notSupported),
    register_token_button_text: cdktf.stringToTerraform(struct!.registerTokenButtonText),
    title: cdktf.stringToTerraform(struct!.title),
    token_name_label: cdktf.stringToTerraform(struct!.tokenNameLabel),
  }
}


export function defaultLoginTextsPasswordlessRegistrationTextToHclTerraform(struct?: DefaultLoginTextsPasswordlessRegistrationText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_retry: {
      value: cdktf.stringToHclTerraform(struct!.errorRetry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_supported: {
      value: cdktf.stringToHclTerraform(struct!.notSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    register_token_button_text: {
      value: cdktf.stringToHclTerraform(struct!.registerTokenButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    token_name_label: {
      value: cdktf.stringToHclTerraform(struct!.tokenNameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsPasswordlessRegistrationTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsPasswordlessRegistrationText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._errorRetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorRetry = this._errorRetry;
    }
    if (this._notSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.notSupported = this._notSupported;
    }
    if (this._registerTokenButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.registerTokenButtonText = this._registerTokenButtonText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._tokenNameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tokenNameLabel = this._tokenNameLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsPasswordlessRegistrationText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._errorRetry = undefined;
      this._notSupported = undefined;
      this._registerTokenButtonText = undefined;
      this._title = undefined;
      this._tokenNameLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._errorRetry = value.errorRetry;
      this._notSupported = value.notSupported;
      this._registerTokenButtonText = value.registerTokenButtonText;
      this._title = value.title;
      this._tokenNameLabel = value.tokenNameLabel;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // error_retry - computed: false, optional: true, required: false
  private _errorRetry?: string; 
  public get errorRetry() {
    return this.getStringAttribute('error_retry');
  }
  public set errorRetry(value: string) {
    this._errorRetry = value;
  }
  public resetErrorRetry() {
    this._errorRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorRetryInput() {
    return this._errorRetry;
  }

  // not_supported - computed: false, optional: true, required: false
  private _notSupported?: string; 
  public get notSupported() {
    return this.getStringAttribute('not_supported');
  }
  public set notSupported(value: string) {
    this._notSupported = value;
  }
  public resetNotSupported() {
    this._notSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notSupportedInput() {
    return this._notSupported;
  }

  // register_token_button_text - computed: false, optional: true, required: false
  private _registerTokenButtonText?: string; 
  public get registerTokenButtonText() {
    return this.getStringAttribute('register_token_button_text');
  }
  public set registerTokenButtonText(value: string) {
    this._registerTokenButtonText = value;
  }
  public resetRegisterTokenButtonText() {
    this._registerTokenButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registerTokenButtonTextInput() {
    return this._registerTokenButtonText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // token_name_label - computed: false, optional: true, required: false
  private _tokenNameLabel?: string; 
  public get tokenNameLabel() {
    return this.getStringAttribute('token_name_label');
  }
  public set tokenNameLabel(value: string) {
    this._tokenNameLabel = value;
  }
  public resetTokenNameLabel() {
    this._tokenNameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tokenNameLabelInput() {
    return this._tokenNameLabel;
  }
}
export interface DefaultLoginTextsPasswordlessText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#error_retry DefaultLoginTexts#error_retry}
  */
  readonly errorRetry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#login_with_pw_button_text DefaultLoginTexts#login_with_pw_button_text}
  */
  readonly loginWithPwButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#not_supported DefaultLoginTexts#not_supported}
  */
  readonly notSupported?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#validate_token_button_text DefaultLoginTexts#validate_token_button_text}
  */
  readonly validateTokenButtonText?: string;
}

export function defaultLoginTextsPasswordlessTextToTerraform(struct?: DefaultLoginTextsPasswordlessText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    error_retry: cdktf.stringToTerraform(struct!.errorRetry),
    login_with_pw_button_text: cdktf.stringToTerraform(struct!.loginWithPwButtonText),
    not_supported: cdktf.stringToTerraform(struct!.notSupported),
    title: cdktf.stringToTerraform(struct!.title),
    validate_token_button_text: cdktf.stringToTerraform(struct!.validateTokenButtonText),
  }
}


export function defaultLoginTextsPasswordlessTextToHclTerraform(struct?: DefaultLoginTextsPasswordlessText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_retry: {
      value: cdktf.stringToHclTerraform(struct!.errorRetry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_with_pw_button_text: {
      value: cdktf.stringToHclTerraform(struct!.loginWithPwButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_supported: {
      value: cdktf.stringToHclTerraform(struct!.notSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validate_token_button_text: {
      value: cdktf.stringToHclTerraform(struct!.validateTokenButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsPasswordlessTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsPasswordlessText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._errorRetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorRetry = this._errorRetry;
    }
    if (this._loginWithPwButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginWithPwButtonText = this._loginWithPwButtonText;
    }
    if (this._notSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.notSupported = this._notSupported;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._validateTokenButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateTokenButtonText = this._validateTokenButtonText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsPasswordlessText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._errorRetry = undefined;
      this._loginWithPwButtonText = undefined;
      this._notSupported = undefined;
      this._title = undefined;
      this._validateTokenButtonText = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._errorRetry = value.errorRetry;
      this._loginWithPwButtonText = value.loginWithPwButtonText;
      this._notSupported = value.notSupported;
      this._title = value.title;
      this._validateTokenButtonText = value.validateTokenButtonText;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // error_retry - computed: false, optional: true, required: false
  private _errorRetry?: string; 
  public get errorRetry() {
    return this.getStringAttribute('error_retry');
  }
  public set errorRetry(value: string) {
    this._errorRetry = value;
  }
  public resetErrorRetry() {
    this._errorRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorRetryInput() {
    return this._errorRetry;
  }

  // login_with_pw_button_text - computed: false, optional: true, required: false
  private _loginWithPwButtonText?: string; 
  public get loginWithPwButtonText() {
    return this.getStringAttribute('login_with_pw_button_text');
  }
  public set loginWithPwButtonText(value: string) {
    this._loginWithPwButtonText = value;
  }
  public resetLoginWithPwButtonText() {
    this._loginWithPwButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginWithPwButtonTextInput() {
    return this._loginWithPwButtonText;
  }

  // not_supported - computed: false, optional: true, required: false
  private _notSupported?: string; 
  public get notSupported() {
    return this.getStringAttribute('not_supported');
  }
  public set notSupported(value: string) {
    this._notSupported = value;
  }
  public resetNotSupported() {
    this._notSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notSupportedInput() {
    return this._notSupported;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // validate_token_button_text - computed: false, optional: true, required: false
  private _validateTokenButtonText?: string; 
  public get validateTokenButtonText() {
    return this.getStringAttribute('validate_token_button_text');
  }
  public set validateTokenButtonText(value: string) {
    this._validateTokenButtonText = value;
  }
  public resetValidateTokenButtonText() {
    this._validateTokenButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateTokenButtonTextInput() {
    return this._validateTokenButtonText;
  }
}
export interface DefaultLoginTextsRegistrationOptionText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#external_login_description DefaultLoginTexts#external_login_description}
  */
  readonly externalLoginDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#login_button_text DefaultLoginTexts#login_button_text}
  */
  readonly loginButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#user_name_button_text DefaultLoginTexts#user_name_button_text}
  */
  readonly userNameButtonText?: string;
}

export function defaultLoginTextsRegistrationOptionTextToTerraform(struct?: DefaultLoginTextsRegistrationOptionText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    external_login_description: cdktf.stringToTerraform(struct!.externalLoginDescription),
    login_button_text: cdktf.stringToTerraform(struct!.loginButtonText),
    title: cdktf.stringToTerraform(struct!.title),
    user_name_button_text: cdktf.stringToTerraform(struct!.userNameButtonText),
  }
}


export function defaultLoginTextsRegistrationOptionTextToHclTerraform(struct?: DefaultLoginTextsRegistrationOptionText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    external_login_description: {
      value: cdktf.stringToHclTerraform(struct!.externalLoginDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    login_button_text: {
      value: cdktf.stringToHclTerraform(struct!.loginButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_name_button_text: {
      value: cdktf.stringToHclTerraform(struct!.userNameButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsRegistrationOptionTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsRegistrationOptionText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._externalLoginDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.externalLoginDescription = this._externalLoginDescription;
    }
    if (this._loginButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginButtonText = this._loginButtonText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._userNameButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.userNameButtonText = this._userNameButtonText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsRegistrationOptionText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._externalLoginDescription = undefined;
      this._loginButtonText = undefined;
      this._title = undefined;
      this._userNameButtonText = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._externalLoginDescription = value.externalLoginDescription;
      this._loginButtonText = value.loginButtonText;
      this._title = value.title;
      this._userNameButtonText = value.userNameButtonText;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // external_login_description - computed: false, optional: true, required: false
  private _externalLoginDescription?: string; 
  public get externalLoginDescription() {
    return this.getStringAttribute('external_login_description');
  }
  public set externalLoginDescription(value: string) {
    this._externalLoginDescription = value;
  }
  public resetExternalLoginDescription() {
    this._externalLoginDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalLoginDescriptionInput() {
    return this._externalLoginDescription;
  }

  // login_button_text - computed: false, optional: true, required: false
  private _loginButtonText?: string; 
  public get loginButtonText() {
    return this.getStringAttribute('login_button_text');
  }
  public set loginButtonText(value: string) {
    this._loginButtonText = value;
  }
  public resetLoginButtonText() {
    this._loginButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginButtonTextInput() {
    return this._loginButtonText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // user_name_button_text - computed: false, optional: true, required: false
  private _userNameButtonText?: string; 
  public get userNameButtonText() {
    return this.getStringAttribute('user_name_button_text');
  }
  public set userNameButtonText(value: string) {
    this._userNameButtonText = value;
  }
  public resetUserNameButtonText() {
    this._userNameButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userNameButtonTextInput() {
    return this._userNameButtonText;
  }
}
export interface DefaultLoginTextsRegistrationOrgText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#email_label DefaultLoginTexts#email_label}
  */
  readonly emailLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#firstname_label DefaultLoginTexts#firstname_label}
  */
  readonly firstnameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#lastname_label DefaultLoginTexts#lastname_label}
  */
  readonly lastnameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#orgname_label DefaultLoginTexts#orgname_label}
  */
  readonly orgnameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#password_confirm_label DefaultLoginTexts#password_confirm_label}
  */
  readonly passwordConfirmLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#password_label DefaultLoginTexts#password_label}
  */
  readonly passwordLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#privacy_confirm DefaultLoginTexts#privacy_confirm}
  */
  readonly privacyConfirm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#privacy_link_text DefaultLoginTexts#privacy_link_text}
  */
  readonly privacyLinkText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#save_button_text DefaultLoginTexts#save_button_text}
  */
  readonly saveButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#tos_and_privacy_label DefaultLoginTexts#tos_and_privacy_label}
  */
  readonly tosAndPrivacyLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#tos_confirm DefaultLoginTexts#tos_confirm}
  */
  readonly tosConfirm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#tos_link_text DefaultLoginTexts#tos_link_text}
  */
  readonly tosLinkText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#username_label DefaultLoginTexts#username_label}
  */
  readonly usernameLabel?: string;
}

export function defaultLoginTextsRegistrationOrgTextToTerraform(struct?: DefaultLoginTextsRegistrationOrgText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    email_label: cdktf.stringToTerraform(struct!.emailLabel),
    firstname_label: cdktf.stringToTerraform(struct!.firstnameLabel),
    lastname_label: cdktf.stringToTerraform(struct!.lastnameLabel),
    orgname_label: cdktf.stringToTerraform(struct!.orgnameLabel),
    password_confirm_label: cdktf.stringToTerraform(struct!.passwordConfirmLabel),
    password_label: cdktf.stringToTerraform(struct!.passwordLabel),
    privacy_confirm: cdktf.stringToTerraform(struct!.privacyConfirm),
    privacy_link_text: cdktf.stringToTerraform(struct!.privacyLinkText),
    save_button_text: cdktf.stringToTerraform(struct!.saveButtonText),
    title: cdktf.stringToTerraform(struct!.title),
    tos_and_privacy_label: cdktf.stringToTerraform(struct!.tosAndPrivacyLabel),
    tos_confirm: cdktf.stringToTerraform(struct!.tosConfirm),
    tos_link_text: cdktf.stringToTerraform(struct!.tosLinkText),
    username_label: cdktf.stringToTerraform(struct!.usernameLabel),
  }
}


export function defaultLoginTextsRegistrationOrgTextToHclTerraform(struct?: DefaultLoginTextsRegistrationOrgText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_label: {
      value: cdktf.stringToHclTerraform(struct!.emailLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firstname_label: {
      value: cdktf.stringToHclTerraform(struct!.firstnameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lastname_label: {
      value: cdktf.stringToHclTerraform(struct!.lastnameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    orgname_label: {
      value: cdktf.stringToHclTerraform(struct!.orgnameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_confirm_label: {
      value: cdktf.stringToHclTerraform(struct!.passwordConfirmLabel),
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
    privacy_confirm: {
      value: cdktf.stringToHclTerraform(struct!.privacyConfirm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_link_text: {
      value: cdktf.stringToHclTerraform(struct!.privacyLinkText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    save_button_text: {
      value: cdktf.stringToHclTerraform(struct!.saveButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos_and_privacy_label: {
      value: cdktf.stringToHclTerraform(struct!.tosAndPrivacyLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos_confirm: {
      value: cdktf.stringToHclTerraform(struct!.tosConfirm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos_link_text: {
      value: cdktf.stringToHclTerraform(struct!.tosLinkText),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsRegistrationOrgTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsRegistrationOrgText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._emailLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailLabel = this._emailLabel;
    }
    if (this._firstnameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstnameLabel = this._firstnameLabel;
    }
    if (this._lastnameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastnameLabel = this._lastnameLabel;
    }
    if (this._orgnameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.orgnameLabel = this._orgnameLabel;
    }
    if (this._passwordConfirmLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordConfirmLabel = this._passwordConfirmLabel;
    }
    if (this._passwordLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordLabel = this._passwordLabel;
    }
    if (this._privacyConfirm !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyConfirm = this._privacyConfirm;
    }
    if (this._privacyLinkText !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyLinkText = this._privacyLinkText;
    }
    if (this._saveButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.saveButtonText = this._saveButtonText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._tosAndPrivacyLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosAndPrivacyLabel = this._tosAndPrivacyLabel;
    }
    if (this._tosConfirm !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosConfirm = this._tosConfirm;
    }
    if (this._tosLinkText !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosLinkText = this._tosLinkText;
    }
    if (this._usernameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameLabel = this._usernameLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsRegistrationOrgText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._emailLabel = undefined;
      this._firstnameLabel = undefined;
      this._lastnameLabel = undefined;
      this._orgnameLabel = undefined;
      this._passwordConfirmLabel = undefined;
      this._passwordLabel = undefined;
      this._privacyConfirm = undefined;
      this._privacyLinkText = undefined;
      this._saveButtonText = undefined;
      this._title = undefined;
      this._tosAndPrivacyLabel = undefined;
      this._tosConfirm = undefined;
      this._tosLinkText = undefined;
      this._usernameLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._emailLabel = value.emailLabel;
      this._firstnameLabel = value.firstnameLabel;
      this._lastnameLabel = value.lastnameLabel;
      this._orgnameLabel = value.orgnameLabel;
      this._passwordConfirmLabel = value.passwordConfirmLabel;
      this._passwordLabel = value.passwordLabel;
      this._privacyConfirm = value.privacyConfirm;
      this._privacyLinkText = value.privacyLinkText;
      this._saveButtonText = value.saveButtonText;
      this._title = value.title;
      this._tosAndPrivacyLabel = value.tosAndPrivacyLabel;
      this._tosConfirm = value.tosConfirm;
      this._tosLinkText = value.tosLinkText;
      this._usernameLabel = value.usernameLabel;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // email_label - computed: false, optional: true, required: false
  private _emailLabel?: string; 
  public get emailLabel() {
    return this.getStringAttribute('email_label');
  }
  public set emailLabel(value: string) {
    this._emailLabel = value;
  }
  public resetEmailLabel() {
    this._emailLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailLabelInput() {
    return this._emailLabel;
  }

  // firstname_label - computed: false, optional: true, required: false
  private _firstnameLabel?: string; 
  public get firstnameLabel() {
    return this.getStringAttribute('firstname_label');
  }
  public set firstnameLabel(value: string) {
    this._firstnameLabel = value;
  }
  public resetFirstnameLabel() {
    this._firstnameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstnameLabelInput() {
    return this._firstnameLabel;
  }

  // lastname_label - computed: false, optional: true, required: false
  private _lastnameLabel?: string; 
  public get lastnameLabel() {
    return this.getStringAttribute('lastname_label');
  }
  public set lastnameLabel(value: string) {
    this._lastnameLabel = value;
  }
  public resetLastnameLabel() {
    this._lastnameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastnameLabelInput() {
    return this._lastnameLabel;
  }

  // orgname_label - computed: false, optional: true, required: false
  private _orgnameLabel?: string; 
  public get orgnameLabel() {
    return this.getStringAttribute('orgname_label');
  }
  public set orgnameLabel(value: string) {
    this._orgnameLabel = value;
  }
  public resetOrgnameLabel() {
    this._orgnameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgnameLabelInput() {
    return this._orgnameLabel;
  }

  // password_confirm_label - computed: false, optional: true, required: false
  private _passwordConfirmLabel?: string; 
  public get passwordConfirmLabel() {
    return this.getStringAttribute('password_confirm_label');
  }
  public set passwordConfirmLabel(value: string) {
    this._passwordConfirmLabel = value;
  }
  public resetPasswordConfirmLabel() {
    this._passwordConfirmLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordConfirmLabelInput() {
    return this._passwordConfirmLabel;
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

  // privacy_confirm - computed: false, optional: true, required: false
  private _privacyConfirm?: string; 
  public get privacyConfirm() {
    return this.getStringAttribute('privacy_confirm');
  }
  public set privacyConfirm(value: string) {
    this._privacyConfirm = value;
  }
  public resetPrivacyConfirm() {
    this._privacyConfirm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyConfirmInput() {
    return this._privacyConfirm;
  }

  // privacy_link_text - computed: false, optional: true, required: false
  private _privacyLinkText?: string; 
  public get privacyLinkText() {
    return this.getStringAttribute('privacy_link_text');
  }
  public set privacyLinkText(value: string) {
    this._privacyLinkText = value;
  }
  public resetPrivacyLinkText() {
    this._privacyLinkText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyLinkTextInput() {
    return this._privacyLinkText;
  }

  // save_button_text - computed: false, optional: true, required: false
  private _saveButtonText?: string; 
  public get saveButtonText() {
    return this.getStringAttribute('save_button_text');
  }
  public set saveButtonText(value: string) {
    this._saveButtonText = value;
  }
  public resetSaveButtonText() {
    this._saveButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get saveButtonTextInput() {
    return this._saveButtonText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // tos_and_privacy_label - computed: false, optional: true, required: false
  private _tosAndPrivacyLabel?: string; 
  public get tosAndPrivacyLabel() {
    return this.getStringAttribute('tos_and_privacy_label');
  }
  public set tosAndPrivacyLabel(value: string) {
    this._tosAndPrivacyLabel = value;
  }
  public resetTosAndPrivacyLabel() {
    this._tosAndPrivacyLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosAndPrivacyLabelInput() {
    return this._tosAndPrivacyLabel;
  }

  // tos_confirm - computed: false, optional: true, required: false
  private _tosConfirm?: string; 
  public get tosConfirm() {
    return this.getStringAttribute('tos_confirm');
  }
  public set tosConfirm(value: string) {
    this._tosConfirm = value;
  }
  public resetTosConfirm() {
    this._tosConfirm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosConfirmInput() {
    return this._tosConfirm;
  }

  // tos_link_text - computed: false, optional: true, required: false
  private _tosLinkText?: string; 
  public get tosLinkText() {
    return this.getStringAttribute('tos_link_text');
  }
  public set tosLinkText(value: string) {
    this._tosLinkText = value;
  }
  public resetTosLinkText() {
    this._tosLinkText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosLinkTextInput() {
    return this._tosLinkText;
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
}
export interface DefaultLoginTextsRegistrationUserText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#back_button_text DefaultLoginTexts#back_button_text}
  */
  readonly backButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description_org_register DefaultLoginTexts#description_org_register}
  */
  readonly descriptionOrgRegister?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#email_label DefaultLoginTexts#email_label}
  */
  readonly emailLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#firstname_label DefaultLoginTexts#firstname_label}
  */
  readonly firstnameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#gender_label DefaultLoginTexts#gender_label}
  */
  readonly genderLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#language_label DefaultLoginTexts#language_label}
  */
  readonly languageLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#lastname_label DefaultLoginTexts#lastname_label}
  */
  readonly lastnameLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#next_button_text DefaultLoginTexts#next_button_text}
  */
  readonly nextButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#password_confirm_label DefaultLoginTexts#password_confirm_label}
  */
  readonly passwordConfirmLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#password_label DefaultLoginTexts#password_label}
  */
  readonly passwordLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#privacy_confirm DefaultLoginTexts#privacy_confirm}
  */
  readonly privacyConfirm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#privacy_link_text DefaultLoginTexts#privacy_link_text}
  */
  readonly privacyLinkText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#tos_and_privacy_label DefaultLoginTexts#tos_and_privacy_label}
  */
  readonly tosAndPrivacyLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#tos_confirm DefaultLoginTexts#tos_confirm}
  */
  readonly tosConfirm?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#tos_link_text DefaultLoginTexts#tos_link_text}
  */
  readonly tosLinkText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#username_label DefaultLoginTexts#username_label}
  */
  readonly usernameLabel?: string;
}

export function defaultLoginTextsRegistrationUserTextToTerraform(struct?: DefaultLoginTextsRegistrationUserText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    back_button_text: cdktf.stringToTerraform(struct!.backButtonText),
    description: cdktf.stringToTerraform(struct!.description),
    description_org_register: cdktf.stringToTerraform(struct!.descriptionOrgRegister),
    email_label: cdktf.stringToTerraform(struct!.emailLabel),
    firstname_label: cdktf.stringToTerraform(struct!.firstnameLabel),
    gender_label: cdktf.stringToTerraform(struct!.genderLabel),
    language_label: cdktf.stringToTerraform(struct!.languageLabel),
    lastname_label: cdktf.stringToTerraform(struct!.lastnameLabel),
    next_button_text: cdktf.stringToTerraform(struct!.nextButtonText),
    password_confirm_label: cdktf.stringToTerraform(struct!.passwordConfirmLabel),
    password_label: cdktf.stringToTerraform(struct!.passwordLabel),
    privacy_confirm: cdktf.stringToTerraform(struct!.privacyConfirm),
    privacy_link_text: cdktf.stringToTerraform(struct!.privacyLinkText),
    title: cdktf.stringToTerraform(struct!.title),
    tos_and_privacy_label: cdktf.stringToTerraform(struct!.tosAndPrivacyLabel),
    tos_confirm: cdktf.stringToTerraform(struct!.tosConfirm),
    tos_link_text: cdktf.stringToTerraform(struct!.tosLinkText),
    username_label: cdktf.stringToTerraform(struct!.usernameLabel),
  }
}


export function defaultLoginTextsRegistrationUserTextToHclTerraform(struct?: DefaultLoginTextsRegistrationUserText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    back_button_text: {
      value: cdktf.stringToHclTerraform(struct!.backButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description_org_register: {
      value: cdktf.stringToHclTerraform(struct!.descriptionOrgRegister),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    email_label: {
      value: cdktf.stringToHclTerraform(struct!.emailLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    firstname_label: {
      value: cdktf.stringToHclTerraform(struct!.firstnameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    gender_label: {
      value: cdktf.stringToHclTerraform(struct!.genderLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    language_label: {
      value: cdktf.stringToHclTerraform(struct!.languageLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    lastname_label: {
      value: cdktf.stringToHclTerraform(struct!.lastnameLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_button_text: {
      value: cdktf.stringToHclTerraform(struct!.nextButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_confirm_label: {
      value: cdktf.stringToHclTerraform(struct!.passwordConfirmLabel),
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
    privacy_confirm: {
      value: cdktf.stringToHclTerraform(struct!.privacyConfirm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    privacy_link_text: {
      value: cdktf.stringToHclTerraform(struct!.privacyLinkText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos_and_privacy_label: {
      value: cdktf.stringToHclTerraform(struct!.tosAndPrivacyLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos_confirm: {
      value: cdktf.stringToHclTerraform(struct!.tosConfirm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tos_link_text: {
      value: cdktf.stringToHclTerraform(struct!.tosLinkText),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsRegistrationUserTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsRegistrationUserText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.backButtonText = this._backButtonText;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._descriptionOrgRegister !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionOrgRegister = this._descriptionOrgRegister;
    }
    if (this._emailLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailLabel = this._emailLabel;
    }
    if (this._firstnameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.firstnameLabel = this._firstnameLabel;
    }
    if (this._genderLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.genderLabel = this._genderLabel;
    }
    if (this._languageLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.languageLabel = this._languageLabel;
    }
    if (this._lastnameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastnameLabel = this._lastnameLabel;
    }
    if (this._nextButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextButtonText = this._nextButtonText;
    }
    if (this._passwordConfirmLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordConfirmLabel = this._passwordConfirmLabel;
    }
    if (this._passwordLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordLabel = this._passwordLabel;
    }
    if (this._privacyConfirm !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyConfirm = this._privacyConfirm;
    }
    if (this._privacyLinkText !== undefined) {
      hasAnyValues = true;
      internalValueResult.privacyLinkText = this._privacyLinkText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._tosAndPrivacyLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosAndPrivacyLabel = this._tosAndPrivacyLabel;
    }
    if (this._tosConfirm !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosConfirm = this._tosConfirm;
    }
    if (this._tosLinkText !== undefined) {
      hasAnyValues = true;
      internalValueResult.tosLinkText = this._tosLinkText;
    }
    if (this._usernameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameLabel = this._usernameLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsRegistrationUserText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backButtonText = undefined;
      this._description = undefined;
      this._descriptionOrgRegister = undefined;
      this._emailLabel = undefined;
      this._firstnameLabel = undefined;
      this._genderLabel = undefined;
      this._languageLabel = undefined;
      this._lastnameLabel = undefined;
      this._nextButtonText = undefined;
      this._passwordConfirmLabel = undefined;
      this._passwordLabel = undefined;
      this._privacyConfirm = undefined;
      this._privacyLinkText = undefined;
      this._title = undefined;
      this._tosAndPrivacyLabel = undefined;
      this._tosConfirm = undefined;
      this._tosLinkText = undefined;
      this._usernameLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backButtonText = value.backButtonText;
      this._description = value.description;
      this._descriptionOrgRegister = value.descriptionOrgRegister;
      this._emailLabel = value.emailLabel;
      this._firstnameLabel = value.firstnameLabel;
      this._genderLabel = value.genderLabel;
      this._languageLabel = value.languageLabel;
      this._lastnameLabel = value.lastnameLabel;
      this._nextButtonText = value.nextButtonText;
      this._passwordConfirmLabel = value.passwordConfirmLabel;
      this._passwordLabel = value.passwordLabel;
      this._privacyConfirm = value.privacyConfirm;
      this._privacyLinkText = value.privacyLinkText;
      this._title = value.title;
      this._tosAndPrivacyLabel = value.tosAndPrivacyLabel;
      this._tosConfirm = value.tosConfirm;
      this._tosLinkText = value.tosLinkText;
      this._usernameLabel = value.usernameLabel;
    }
  }

  // back_button_text - computed: false, optional: true, required: false
  private _backButtonText?: string; 
  public get backButtonText() {
    return this.getStringAttribute('back_button_text');
  }
  public set backButtonText(value: string) {
    this._backButtonText = value;
  }
  public resetBackButtonText() {
    this._backButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backButtonTextInput() {
    return this._backButtonText;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // description_org_register - computed: false, optional: true, required: false
  private _descriptionOrgRegister?: string; 
  public get descriptionOrgRegister() {
    return this.getStringAttribute('description_org_register');
  }
  public set descriptionOrgRegister(value: string) {
    this._descriptionOrgRegister = value;
  }
  public resetDescriptionOrgRegister() {
    this._descriptionOrgRegister = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionOrgRegisterInput() {
    return this._descriptionOrgRegister;
  }

  // email_label - computed: false, optional: true, required: false
  private _emailLabel?: string; 
  public get emailLabel() {
    return this.getStringAttribute('email_label');
  }
  public set emailLabel(value: string) {
    this._emailLabel = value;
  }
  public resetEmailLabel() {
    this._emailLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailLabelInput() {
    return this._emailLabel;
  }

  // firstname_label - computed: false, optional: true, required: false
  private _firstnameLabel?: string; 
  public get firstnameLabel() {
    return this.getStringAttribute('firstname_label');
  }
  public set firstnameLabel(value: string) {
    this._firstnameLabel = value;
  }
  public resetFirstnameLabel() {
    this._firstnameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get firstnameLabelInput() {
    return this._firstnameLabel;
  }

  // gender_label - computed: false, optional: true, required: false
  private _genderLabel?: string; 
  public get genderLabel() {
    return this.getStringAttribute('gender_label');
  }
  public set genderLabel(value: string) {
    this._genderLabel = value;
  }
  public resetGenderLabel() {
    this._genderLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get genderLabelInput() {
    return this._genderLabel;
  }

  // language_label - computed: false, optional: true, required: false
  private _languageLabel?: string; 
  public get languageLabel() {
    return this.getStringAttribute('language_label');
  }
  public set languageLabel(value: string) {
    this._languageLabel = value;
  }
  public resetLanguageLabel() {
    this._languageLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageLabelInput() {
    return this._languageLabel;
  }

  // lastname_label - computed: false, optional: true, required: false
  private _lastnameLabel?: string; 
  public get lastnameLabel() {
    return this.getStringAttribute('lastname_label');
  }
  public set lastnameLabel(value: string) {
    this._lastnameLabel = value;
  }
  public resetLastnameLabel() {
    this._lastnameLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastnameLabelInput() {
    return this._lastnameLabel;
  }

  // next_button_text - computed: false, optional: true, required: false
  private _nextButtonText?: string; 
  public get nextButtonText() {
    return this.getStringAttribute('next_button_text');
  }
  public set nextButtonText(value: string) {
    this._nextButtonText = value;
  }
  public resetNextButtonText() {
    this._nextButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextButtonTextInput() {
    return this._nextButtonText;
  }

  // password_confirm_label - computed: false, optional: true, required: false
  private _passwordConfirmLabel?: string; 
  public get passwordConfirmLabel() {
    return this.getStringAttribute('password_confirm_label');
  }
  public set passwordConfirmLabel(value: string) {
    this._passwordConfirmLabel = value;
  }
  public resetPasswordConfirmLabel() {
    this._passwordConfirmLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordConfirmLabelInput() {
    return this._passwordConfirmLabel;
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

  // privacy_confirm - computed: false, optional: true, required: false
  private _privacyConfirm?: string; 
  public get privacyConfirm() {
    return this.getStringAttribute('privacy_confirm');
  }
  public set privacyConfirm(value: string) {
    this._privacyConfirm = value;
  }
  public resetPrivacyConfirm() {
    this._privacyConfirm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyConfirmInput() {
    return this._privacyConfirm;
  }

  // privacy_link_text - computed: false, optional: true, required: false
  private _privacyLinkText?: string; 
  public get privacyLinkText() {
    return this.getStringAttribute('privacy_link_text');
  }
  public set privacyLinkText(value: string) {
    this._privacyLinkText = value;
  }
  public resetPrivacyLinkText() {
    this._privacyLinkText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privacyLinkTextInput() {
    return this._privacyLinkText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // tos_and_privacy_label - computed: false, optional: true, required: false
  private _tosAndPrivacyLabel?: string; 
  public get tosAndPrivacyLabel() {
    return this.getStringAttribute('tos_and_privacy_label');
  }
  public set tosAndPrivacyLabel(value: string) {
    this._tosAndPrivacyLabel = value;
  }
  public resetTosAndPrivacyLabel() {
    this._tosAndPrivacyLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosAndPrivacyLabelInput() {
    return this._tosAndPrivacyLabel;
  }

  // tos_confirm - computed: false, optional: true, required: false
  private _tosConfirm?: string; 
  public get tosConfirm() {
    return this.getStringAttribute('tos_confirm');
  }
  public set tosConfirm(value: string) {
    this._tosConfirm = value;
  }
  public resetTosConfirm() {
    this._tosConfirm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosConfirmInput() {
    return this._tosConfirm;
  }

  // tos_link_text - computed: false, optional: true, required: false
  private _tosLinkText?: string; 
  public get tosLinkText() {
    return this.getStringAttribute('tos_link_text');
  }
  public set tosLinkText(value: string) {
    this._tosLinkText = value;
  }
  public resetTosLinkText() {
    this._tosLinkText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tosLinkTextInput() {
    return this._tosLinkText;
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
}
export interface DefaultLoginTextsSelectAccountText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description_linking_process DefaultLoginTexts#description_linking_process}
  */
  readonly descriptionLinkingProcess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#other_user DefaultLoginTexts#other_user}
  */
  readonly otherUser?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#session_state_active DefaultLoginTexts#session_state_active}
  */
  readonly sessionStateActive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#session_state_inactive DefaultLoginTexts#session_state_inactive}
  */
  readonly sessionStateInactive?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title_linking_process DefaultLoginTexts#title_linking_process}
  */
  readonly titleLinkingProcess?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#user_must_be_member_of_org DefaultLoginTexts#user_must_be_member_of_org}
  */
  readonly userMustBeMemberOfOrg?: string;
}

export function defaultLoginTextsSelectAccountTextToTerraform(struct?: DefaultLoginTextsSelectAccountText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    description_linking_process: cdktf.stringToTerraform(struct!.descriptionLinkingProcess),
    other_user: cdktf.stringToTerraform(struct!.otherUser),
    session_state_active: cdktf.stringToTerraform(struct!.sessionStateActive),
    session_state_inactive: cdktf.stringToTerraform(struct!.sessionStateInactive),
    title: cdktf.stringToTerraform(struct!.title),
    title_linking_process: cdktf.stringToTerraform(struct!.titleLinkingProcess),
    user_must_be_member_of_org: cdktf.stringToTerraform(struct!.userMustBeMemberOfOrg),
  }
}


export function defaultLoginTextsSelectAccountTextToHclTerraform(struct?: DefaultLoginTextsSelectAccountText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description_linking_process: {
      value: cdktf.stringToHclTerraform(struct!.descriptionLinkingProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    other_user: {
      value: cdktf.stringToHclTerraform(struct!.otherUser),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_state_active: {
      value: cdktf.stringToHclTerraform(struct!.sessionStateActive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    session_state_inactive: {
      value: cdktf.stringToHclTerraform(struct!.sessionStateInactive),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title_linking_process: {
      value: cdktf.stringToHclTerraform(struct!.titleLinkingProcess),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_must_be_member_of_org: {
      value: cdktf.stringToHclTerraform(struct!.userMustBeMemberOfOrg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsSelectAccountTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsSelectAccountText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._descriptionLinkingProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.descriptionLinkingProcess = this._descriptionLinkingProcess;
    }
    if (this._otherUser !== undefined) {
      hasAnyValues = true;
      internalValueResult.otherUser = this._otherUser;
    }
    if (this._sessionStateActive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionStateActive = this._sessionStateActive;
    }
    if (this._sessionStateInactive !== undefined) {
      hasAnyValues = true;
      internalValueResult.sessionStateInactive = this._sessionStateInactive;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._titleLinkingProcess !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleLinkingProcess = this._titleLinkingProcess;
    }
    if (this._userMustBeMemberOfOrg !== undefined) {
      hasAnyValues = true;
      internalValueResult.userMustBeMemberOfOrg = this._userMustBeMemberOfOrg;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsSelectAccountText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._descriptionLinkingProcess = undefined;
      this._otherUser = undefined;
      this._sessionStateActive = undefined;
      this._sessionStateInactive = undefined;
      this._title = undefined;
      this._titleLinkingProcess = undefined;
      this._userMustBeMemberOfOrg = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._descriptionLinkingProcess = value.descriptionLinkingProcess;
      this._otherUser = value.otherUser;
      this._sessionStateActive = value.sessionStateActive;
      this._sessionStateInactive = value.sessionStateInactive;
      this._title = value.title;
      this._titleLinkingProcess = value.titleLinkingProcess;
      this._userMustBeMemberOfOrg = value.userMustBeMemberOfOrg;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // description_linking_process - computed: false, optional: true, required: false
  private _descriptionLinkingProcess?: string; 
  public get descriptionLinkingProcess() {
    return this.getStringAttribute('description_linking_process');
  }
  public set descriptionLinkingProcess(value: string) {
    this._descriptionLinkingProcess = value;
  }
  public resetDescriptionLinkingProcess() {
    this._descriptionLinkingProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionLinkingProcessInput() {
    return this._descriptionLinkingProcess;
  }

  // other_user - computed: false, optional: true, required: false
  private _otherUser?: string; 
  public get otherUser() {
    return this.getStringAttribute('other_user');
  }
  public set otherUser(value: string) {
    this._otherUser = value;
  }
  public resetOtherUser() {
    this._otherUser = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get otherUserInput() {
    return this._otherUser;
  }

  // session_state_active - computed: false, optional: true, required: false
  private _sessionStateActive?: string; 
  public get sessionStateActive() {
    return this.getStringAttribute('session_state_active');
  }
  public set sessionStateActive(value: string) {
    this._sessionStateActive = value;
  }
  public resetSessionStateActive() {
    this._sessionStateActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionStateActiveInput() {
    return this._sessionStateActive;
  }

  // session_state_inactive - computed: false, optional: true, required: false
  private _sessionStateInactive?: string; 
  public get sessionStateInactive() {
    return this.getStringAttribute('session_state_inactive');
  }
  public set sessionStateInactive(value: string) {
    this._sessionStateInactive = value;
  }
  public resetSessionStateInactive() {
    this._sessionStateInactive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sessionStateInactiveInput() {
    return this._sessionStateInactive;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // title_linking_process - computed: false, optional: true, required: false
  private _titleLinkingProcess?: string; 
  public get titleLinkingProcess() {
    return this.getStringAttribute('title_linking_process');
  }
  public set titleLinkingProcess(value: string) {
    this._titleLinkingProcess = value;
  }
  public resetTitleLinkingProcess() {
    this._titleLinkingProcess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleLinkingProcessInput() {
    return this._titleLinkingProcess;
  }

  // user_must_be_member_of_org - computed: false, optional: true, required: false
  private _userMustBeMemberOfOrg?: string; 
  public get userMustBeMemberOfOrg() {
    return this.getStringAttribute('user_must_be_member_of_org');
  }
  public set userMustBeMemberOfOrg(value: string) {
    this._userMustBeMemberOfOrg = value;
  }
  public resetUserMustBeMemberOfOrg() {
    this._userMustBeMemberOfOrg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userMustBeMemberOfOrgInput() {
    return this._userMustBeMemberOfOrg;
  }
}
export interface DefaultLoginTextsSuccessLoginText {
  /**
  * Text to describe that auto-redirect should happen after successful login
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#auto_redirect_description DefaultLoginTexts#auto_redirect_description}
  */
  readonly autoRedirectDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#next_button_text DefaultLoginTexts#next_button_text}
  */
  readonly nextButtonText?: string;
  /**
  * Text to describe that the window can be closed after redirect
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#redirected_description DefaultLoginTexts#redirected_description}
  */
  readonly redirectedDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
}

export function defaultLoginTextsSuccessLoginTextToTerraform(struct?: DefaultLoginTextsSuccessLoginText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    auto_redirect_description: cdktf.stringToTerraform(struct!.autoRedirectDescription),
    next_button_text: cdktf.stringToTerraform(struct!.nextButtonText),
    redirected_description: cdktf.stringToTerraform(struct!.redirectedDescription),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function defaultLoginTextsSuccessLoginTextToHclTerraform(struct?: DefaultLoginTextsSuccessLoginText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    auto_redirect_description: {
      value: cdktf.stringToHclTerraform(struct!.autoRedirectDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_button_text: {
      value: cdktf.stringToHclTerraform(struct!.nextButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    redirected_description: {
      value: cdktf.stringToHclTerraform(struct!.redirectedDescription),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsSuccessLoginTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsSuccessLoginText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoRedirectDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoRedirectDescription = this._autoRedirectDescription;
    }
    if (this._nextButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextButtonText = this._nextButtonText;
    }
    if (this._redirectedDescription !== undefined) {
      hasAnyValues = true;
      internalValueResult.redirectedDescription = this._redirectedDescription;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsSuccessLoginText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoRedirectDescription = undefined;
      this._nextButtonText = undefined;
      this._redirectedDescription = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoRedirectDescription = value.autoRedirectDescription;
      this._nextButtonText = value.nextButtonText;
      this._redirectedDescription = value.redirectedDescription;
      this._title = value.title;
    }
  }

  // auto_redirect_description - computed: false, optional: true, required: false
  private _autoRedirectDescription?: string; 
  public get autoRedirectDescription() {
    return this.getStringAttribute('auto_redirect_description');
  }
  public set autoRedirectDescription(value: string) {
    this._autoRedirectDescription = value;
  }
  public resetAutoRedirectDescription() {
    this._autoRedirectDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRedirectDescriptionInput() {
    return this._autoRedirectDescription;
  }

  // next_button_text - computed: false, optional: true, required: false
  private _nextButtonText?: string; 
  public get nextButtonText() {
    return this.getStringAttribute('next_button_text');
  }
  public set nextButtonText(value: string) {
    this._nextButtonText = value;
  }
  public resetNextButtonText() {
    this._nextButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextButtonTextInput() {
    return this._nextButtonText;
  }

  // redirected_description - computed: false, optional: true, required: false
  private _redirectedDescription?: string; 
  public get redirectedDescription() {
    return this.getStringAttribute('redirected_description');
  }
  public set redirectedDescription(value: string) {
    this._redirectedDescription = value;
  }
  public resetRedirectedDescription() {
    this._redirectedDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get redirectedDescriptionInput() {
    return this._redirectedDescription;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface DefaultLoginTextsUsernameChangeDoneText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#next_button_text DefaultLoginTexts#next_button_text}
  */
  readonly nextButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
}

export function defaultLoginTextsUsernameChangeDoneTextToTerraform(struct?: DefaultLoginTextsUsernameChangeDoneText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    next_button_text: cdktf.stringToTerraform(struct!.nextButtonText),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function defaultLoginTextsUsernameChangeDoneTextToHclTerraform(struct?: DefaultLoginTextsUsernameChangeDoneText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_button_text: {
      value: cdktf.stringToHclTerraform(struct!.nextButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsUsernameChangeDoneTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsUsernameChangeDoneText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._nextButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextButtonText = this._nextButtonText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsUsernameChangeDoneText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._nextButtonText = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._nextButtonText = value.nextButtonText;
      this._title = value.title;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // next_button_text - computed: false, optional: true, required: false
  private _nextButtonText?: string; 
  public get nextButtonText() {
    return this.getStringAttribute('next_button_text');
  }
  public set nextButtonText(value: string) {
    this._nextButtonText = value;
  }
  public resetNextButtonText() {
    this._nextButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextButtonTextInput() {
    return this._nextButtonText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface DefaultLoginTextsUsernameChangeText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#cancel_button_text DefaultLoginTexts#cancel_button_text}
  */
  readonly cancelButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#next_button_text DefaultLoginTexts#next_button_text}
  */
  readonly nextButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#username_label DefaultLoginTexts#username_label}
  */
  readonly usernameLabel?: string;
}

export function defaultLoginTextsUsernameChangeTextToTerraform(struct?: DefaultLoginTextsUsernameChangeText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cancel_button_text: cdktf.stringToTerraform(struct!.cancelButtonText),
    description: cdktf.stringToTerraform(struct!.description),
    next_button_text: cdktf.stringToTerraform(struct!.nextButtonText),
    title: cdktf.stringToTerraform(struct!.title),
    username_label: cdktf.stringToTerraform(struct!.usernameLabel),
  }
}


export function defaultLoginTextsUsernameChangeTextToHclTerraform(struct?: DefaultLoginTextsUsernameChangeText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cancel_button_text: {
      value: cdktf.stringToHclTerraform(struct!.cancelButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_button_text: {
      value: cdktf.stringToHclTerraform(struct!.nextButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsUsernameChangeTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsUsernameChangeText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cancelButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.cancelButtonText = this._cancelButtonText;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._nextButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextButtonText = this._nextButtonText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._usernameLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameLabel = this._usernameLabel;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsUsernameChangeText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._cancelButtonText = undefined;
      this._description = undefined;
      this._nextButtonText = undefined;
      this._title = undefined;
      this._usernameLabel = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._cancelButtonText = value.cancelButtonText;
      this._description = value.description;
      this._nextButtonText = value.nextButtonText;
      this._title = value.title;
      this._usernameLabel = value.usernameLabel;
    }
  }

  // cancel_button_text - computed: false, optional: true, required: false
  private _cancelButtonText?: string; 
  public get cancelButtonText() {
    return this.getStringAttribute('cancel_button_text');
  }
  public set cancelButtonText(value: string) {
    this._cancelButtonText = value;
  }
  public resetCancelButtonText() {
    this._cancelButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cancelButtonTextInput() {
    return this._cancelButtonText;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // next_button_text - computed: false, optional: true, required: false
  private _nextButtonText?: string; 
  public get nextButtonText() {
    return this.getStringAttribute('next_button_text');
  }
  public set nextButtonText(value: string) {
    this._nextButtonText = value;
  }
  public resetNextButtonText() {
    this._nextButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextButtonTextInput() {
    return this._nextButtonText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
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
}
export interface DefaultLoginTextsVerifyMfaOtpText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#code_label DefaultLoginTexts#code_label}
  */
  readonly codeLabel?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#next_button_text DefaultLoginTexts#next_button_text}
  */
  readonly nextButtonText?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
}

export function defaultLoginTextsVerifyMfaOtpTextToTerraform(struct?: DefaultLoginTextsVerifyMfaOtpText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code_label: cdktf.stringToTerraform(struct!.codeLabel),
    description: cdktf.stringToTerraform(struct!.description),
    next_button_text: cdktf.stringToTerraform(struct!.nextButtonText),
    title: cdktf.stringToTerraform(struct!.title),
  }
}


export function defaultLoginTextsVerifyMfaOtpTextToHclTerraform(struct?: DefaultLoginTextsVerifyMfaOtpText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code_label: {
      value: cdktf.stringToHclTerraform(struct!.codeLabel),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_button_text: {
      value: cdktf.stringToHclTerraform(struct!.nextButtonText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsVerifyMfaOtpTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsVerifyMfaOtpText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._codeLabel !== undefined) {
      hasAnyValues = true;
      internalValueResult.codeLabel = this._codeLabel;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._nextButtonText !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextButtonText = this._nextButtonText;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsVerifyMfaOtpText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._codeLabel = undefined;
      this._description = undefined;
      this._nextButtonText = undefined;
      this._title = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._codeLabel = value.codeLabel;
      this._description = value.description;
      this._nextButtonText = value.nextButtonText;
      this._title = value.title;
    }
  }

  // code_label - computed: false, optional: true, required: false
  private _codeLabel?: string; 
  public get codeLabel() {
    return this.getStringAttribute('code_label');
  }
  public set codeLabel(value: string) {
    this._codeLabel = value;
  }
  public resetCodeLabel() {
    this._codeLabel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeLabelInput() {
    return this._codeLabel;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // next_button_text - computed: false, optional: true, required: false
  private _nextButtonText?: string; 
  public get nextButtonText() {
    return this.getStringAttribute('next_button_text');
  }
  public set nextButtonText(value: string) {
    this._nextButtonText = value;
  }
  public resetNextButtonText() {
    this._nextButtonText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextButtonTextInput() {
    return this._nextButtonText;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }
}
export interface DefaultLoginTextsVerifyMfaU2FText {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#description DefaultLoginTexts#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#error_retry DefaultLoginTexts#error_retry}
  */
  readonly errorRetry?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#not_supported DefaultLoginTexts#not_supported}
  */
  readonly notSupported?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#title DefaultLoginTexts#title}
  */
  readonly title?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#validate_token_text DefaultLoginTexts#validate_token_text}
  */
  readonly validateTokenText?: string;
}

export function defaultLoginTextsVerifyMfaU2FTextToTerraform(struct?: DefaultLoginTextsVerifyMfaU2FText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    description: cdktf.stringToTerraform(struct!.description),
    error_retry: cdktf.stringToTerraform(struct!.errorRetry),
    not_supported: cdktf.stringToTerraform(struct!.notSupported),
    title: cdktf.stringToTerraform(struct!.title),
    validate_token_text: cdktf.stringToTerraform(struct!.validateTokenText),
  }
}


export function defaultLoginTextsVerifyMfaU2FTextToHclTerraform(struct?: DefaultLoginTextsVerifyMfaU2FText | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    error_retry: {
      value: cdktf.stringToHclTerraform(struct!.errorRetry),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    not_supported: {
      value: cdktf.stringToHclTerraform(struct!.notSupported),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title: {
      value: cdktf.stringToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validate_token_text: {
      value: cdktf.stringToHclTerraform(struct!.validateTokenText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DefaultLoginTextsVerifyMfaU2FTextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DefaultLoginTextsVerifyMfaU2FText | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._errorRetry !== undefined) {
      hasAnyValues = true;
      internalValueResult.errorRetry = this._errorRetry;
    }
    if (this._notSupported !== undefined) {
      hasAnyValues = true;
      internalValueResult.notSupported = this._notSupported;
    }
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._validateTokenText !== undefined) {
      hasAnyValues = true;
      internalValueResult.validateTokenText = this._validateTokenText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DefaultLoginTextsVerifyMfaU2FText | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._description = undefined;
      this._errorRetry = undefined;
      this._notSupported = undefined;
      this._title = undefined;
      this._validateTokenText = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._description = value.description;
      this._errorRetry = value.errorRetry;
      this._notSupported = value.notSupported;
      this._title = value.title;
      this._validateTokenText = value.validateTokenText;
    }
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // error_retry - computed: false, optional: true, required: false
  private _errorRetry?: string; 
  public get errorRetry() {
    return this.getStringAttribute('error_retry');
  }
  public set errorRetry(value: string) {
    this._errorRetry = value;
  }
  public resetErrorRetry() {
    this._errorRetry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get errorRetryInput() {
    return this._errorRetry;
  }

  // not_supported - computed: false, optional: true, required: false
  private _notSupported?: string; 
  public get notSupported() {
    return this.getStringAttribute('not_supported');
  }
  public set notSupported(value: string) {
    this._notSupported = value;
  }
  public resetNotSupported() {
    this._notSupported = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notSupportedInput() {
    return this._notSupported;
  }

  // title - computed: false, optional: true, required: false
  private _title?: string; 
  public get title() {
    return this.getStringAttribute('title');
  }
  public set title(value: string) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // validate_token_text - computed: false, optional: true, required: false
  private _validateTokenText?: string; 
  public get validateTokenText() {
    return this.getStringAttribute('validate_token_text');
  }
  public set validateTokenText(value: string) {
    this._validateTokenText = value;
  }
  public resetValidateTokenText() {
    this._validateTokenText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get validateTokenTextInput() {
    return this._validateTokenText;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts zitadel_default_login_texts}
*/
export class DefaultLoginTexts extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_default_login_texts";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DefaultLoginTexts resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DefaultLoginTexts to import
  * @param importFromId The id of the existing DefaultLoginTexts that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DefaultLoginTexts to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_default_login_texts", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/default_login_texts zitadel_default_login_texts} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DefaultLoginTextsConfig
  */
  public constructor(scope: Construct, id: string, config: DefaultLoginTextsConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel_default_login_texts',
      terraformGeneratorMetadata: {
        providerName: 'zitadel',
        providerVersion: '2.3.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._emailVerificationDoneText.internalValue = config.emailVerificationDoneText;
    this._emailVerificationText.internalValue = config.emailVerificationText;
    this._externalRegistrationUserOverviewText.internalValue = config.externalRegistrationUserOverviewText;
    this._externalUserNotFoundText.internalValue = config.externalUserNotFoundText;
    this._footerText.internalValue = config.footerText;
    this._initMfaDoneText.internalValue = config.initMfaDoneText;
    this._initMfaOtpText.internalValue = config.initMfaOtpText;
    this._initMfaPromptText.internalValue = config.initMfaPromptText;
    this._initMfaU2FText.internalValue = config.initMfaU2FText;
    this._initPasswordDoneText.internalValue = config.initPasswordDoneText;
    this._initPasswordText.internalValue = config.initPasswordText;
    this._initializeDoneText.internalValue = config.initializeDoneText;
    this._initializeUserText.internalValue = config.initializeUserText;
    this._language = config.language;
    this._linkingUserDoneText.internalValue = config.linkingUserDoneText;
    this._linkingUserPromptText.internalValue = config.linkingUserPromptText;
    this._loginText.internalValue = config.loginText;
    this._logoutText.internalValue = config.logoutText;
    this._mfaProvidersText.internalValue = config.mfaProvidersText;
    this._passwordChangeDoneText.internalValue = config.passwordChangeDoneText;
    this._passwordChangeText.internalValue = config.passwordChangeText;
    this._passwordResetDoneText.internalValue = config.passwordResetDoneText;
    this._passwordText.internalValue = config.passwordText;
    this._passwordlessPromptText.internalValue = config.passwordlessPromptText;
    this._passwordlessRegistrationDoneText.internalValue = config.passwordlessRegistrationDoneText;
    this._passwordlessRegistrationText.internalValue = config.passwordlessRegistrationText;
    this._passwordlessText.internalValue = config.passwordlessText;
    this._registrationOptionText.internalValue = config.registrationOptionText;
    this._registrationOrgText.internalValue = config.registrationOrgText;
    this._registrationUserText.internalValue = config.registrationUserText;
    this._selectAccountText.internalValue = config.selectAccountText;
    this._successLoginText.internalValue = config.successLoginText;
    this._usernameChangeDoneText.internalValue = config.usernameChangeDoneText;
    this._usernameChangeText.internalValue = config.usernameChangeText;
    this._verifyMfaOtpText.internalValue = config.verifyMfaOtpText;
    this._verifyMfaU2FText.internalValue = config.verifyMfaU2FText;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // email_verification_done_text - computed: false, optional: true, required: false
  private _emailVerificationDoneText = new DefaultLoginTextsEmailVerificationDoneTextOutputReference(this, "email_verification_done_text");
  public get emailVerificationDoneText() {
    return this._emailVerificationDoneText;
  }
  public putEmailVerificationDoneText(value: DefaultLoginTextsEmailVerificationDoneText) {
    this._emailVerificationDoneText.internalValue = value;
  }
  public resetEmailVerificationDoneText() {
    this._emailVerificationDoneText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerificationDoneTextInput() {
    return this._emailVerificationDoneText.internalValue;
  }

  // email_verification_text - computed: false, optional: true, required: false
  private _emailVerificationText = new DefaultLoginTextsEmailVerificationTextOutputReference(this, "email_verification_text");
  public get emailVerificationText() {
    return this._emailVerificationText;
  }
  public putEmailVerificationText(value: DefaultLoginTextsEmailVerificationText) {
    this._emailVerificationText.internalValue = value;
  }
  public resetEmailVerificationText() {
    this._emailVerificationText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailVerificationTextInput() {
    return this._emailVerificationText.internalValue;
  }

  // external_registration_user_overview_text - computed: false, optional: true, required: false
  private _externalRegistrationUserOverviewText = new DefaultLoginTextsExternalRegistrationUserOverviewTextOutputReference(this, "external_registration_user_overview_text");
  public get externalRegistrationUserOverviewText() {
    return this._externalRegistrationUserOverviewText;
  }
  public putExternalRegistrationUserOverviewText(value: DefaultLoginTextsExternalRegistrationUserOverviewText) {
    this._externalRegistrationUserOverviewText.internalValue = value;
  }
  public resetExternalRegistrationUserOverviewText() {
    this._externalRegistrationUserOverviewText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalRegistrationUserOverviewTextInput() {
    return this._externalRegistrationUserOverviewText.internalValue;
  }

  // external_user_not_found_text - computed: false, optional: true, required: false
  private _externalUserNotFoundText = new DefaultLoginTextsExternalUserNotFoundTextOutputReference(this, "external_user_not_found_text");
  public get externalUserNotFoundText() {
    return this._externalUserNotFoundText;
  }
  public putExternalUserNotFoundText(value: DefaultLoginTextsExternalUserNotFoundText) {
    this._externalUserNotFoundText.internalValue = value;
  }
  public resetExternalUserNotFoundText() {
    this._externalUserNotFoundText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get externalUserNotFoundTextInput() {
    return this._externalUserNotFoundText.internalValue;
  }

  // footer_text - computed: false, optional: true, required: false
  private _footerText = new DefaultLoginTextsFooterTextOutputReference(this, "footer_text");
  public get footerText() {
    return this._footerText;
  }
  public putFooterText(value: DefaultLoginTextsFooterText) {
    this._footerText.internalValue = value;
  }
  public resetFooterText() {
    this._footerText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get footerTextInput() {
    return this._footerText.internalValue;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // init_mfa_done_text - computed: false, optional: true, required: false
  private _initMfaDoneText = new DefaultLoginTextsInitMfaDoneTextOutputReference(this, "init_mfa_done_text");
  public get initMfaDoneText() {
    return this._initMfaDoneText;
  }
  public putInitMfaDoneText(value: DefaultLoginTextsInitMfaDoneText) {
    this._initMfaDoneText.internalValue = value;
  }
  public resetInitMfaDoneText() {
    this._initMfaDoneText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initMfaDoneTextInput() {
    return this._initMfaDoneText.internalValue;
  }

  // init_mfa_otp_text - computed: false, optional: true, required: false
  private _initMfaOtpText = new DefaultLoginTextsInitMfaOtpTextOutputReference(this, "init_mfa_otp_text");
  public get initMfaOtpText() {
    return this._initMfaOtpText;
  }
  public putInitMfaOtpText(value: DefaultLoginTextsInitMfaOtpText) {
    this._initMfaOtpText.internalValue = value;
  }
  public resetInitMfaOtpText() {
    this._initMfaOtpText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initMfaOtpTextInput() {
    return this._initMfaOtpText.internalValue;
  }

  // init_mfa_prompt_text - computed: false, optional: true, required: false
  private _initMfaPromptText = new DefaultLoginTextsInitMfaPromptTextOutputReference(this, "init_mfa_prompt_text");
  public get initMfaPromptText() {
    return this._initMfaPromptText;
  }
  public putInitMfaPromptText(value: DefaultLoginTextsInitMfaPromptText) {
    this._initMfaPromptText.internalValue = value;
  }
  public resetInitMfaPromptText() {
    this._initMfaPromptText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initMfaPromptTextInput() {
    return this._initMfaPromptText.internalValue;
  }

  // init_mfa_u2f_text - computed: false, optional: true, required: false
  private _initMfaU2FText = new DefaultLoginTextsInitMfaU2FTextOutputReference(this, "init_mfa_u2f_text");
  public get initMfaU2FText() {
    return this._initMfaU2FText;
  }
  public putInitMfaU2FText(value: DefaultLoginTextsInitMfaU2FText) {
    this._initMfaU2FText.internalValue = value;
  }
  public resetInitMfaU2FText() {
    this._initMfaU2FText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initMfaU2FTextInput() {
    return this._initMfaU2FText.internalValue;
  }

  // init_password_done_text - computed: false, optional: true, required: false
  private _initPasswordDoneText = new DefaultLoginTextsInitPasswordDoneTextOutputReference(this, "init_password_done_text");
  public get initPasswordDoneText() {
    return this._initPasswordDoneText;
  }
  public putInitPasswordDoneText(value: DefaultLoginTextsInitPasswordDoneText) {
    this._initPasswordDoneText.internalValue = value;
  }
  public resetInitPasswordDoneText() {
    this._initPasswordDoneText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initPasswordDoneTextInput() {
    return this._initPasswordDoneText.internalValue;
  }

  // init_password_text - computed: false, optional: true, required: false
  private _initPasswordText = new DefaultLoginTextsInitPasswordTextOutputReference(this, "init_password_text");
  public get initPasswordText() {
    return this._initPasswordText;
  }
  public putInitPasswordText(value: DefaultLoginTextsInitPasswordText) {
    this._initPasswordText.internalValue = value;
  }
  public resetInitPasswordText() {
    this._initPasswordText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initPasswordTextInput() {
    return this._initPasswordText.internalValue;
  }

  // initialize_done_text - computed: false, optional: true, required: false
  private _initializeDoneText = new DefaultLoginTextsInitializeDoneTextOutputReference(this, "initialize_done_text");
  public get initializeDoneText() {
    return this._initializeDoneText;
  }
  public putInitializeDoneText(value: DefaultLoginTextsInitializeDoneText) {
    this._initializeDoneText.internalValue = value;
  }
  public resetInitializeDoneText() {
    this._initializeDoneText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializeDoneTextInput() {
    return this._initializeDoneText.internalValue;
  }

  // initialize_user_text - computed: false, optional: true, required: false
  private _initializeUserText = new DefaultLoginTextsInitializeUserTextOutputReference(this, "initialize_user_text");
  public get initializeUserText() {
    return this._initializeUserText;
  }
  public putInitializeUserText(value: DefaultLoginTextsInitializeUserText) {
    this._initializeUserText.internalValue = value;
  }
  public resetInitializeUserText() {
    this._initializeUserText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initializeUserTextInput() {
    return this._initializeUserText.internalValue;
  }

  // language - computed: false, optional: false, required: true
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // linking_user_done_text - computed: false, optional: true, required: false
  private _linkingUserDoneText = new DefaultLoginTextsLinkingUserDoneTextOutputReference(this, "linking_user_done_text");
  public get linkingUserDoneText() {
    return this._linkingUserDoneText;
  }
  public putLinkingUserDoneText(value: DefaultLoginTextsLinkingUserDoneText) {
    this._linkingUserDoneText.internalValue = value;
  }
  public resetLinkingUserDoneText() {
    this._linkingUserDoneText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkingUserDoneTextInput() {
    return this._linkingUserDoneText.internalValue;
  }

  // linking_user_prompt_text - computed: false, optional: true, required: false
  private _linkingUserPromptText = new DefaultLoginTextsLinkingUserPromptTextOutputReference(this, "linking_user_prompt_text");
  public get linkingUserPromptText() {
    return this._linkingUserPromptText;
  }
  public putLinkingUserPromptText(value: DefaultLoginTextsLinkingUserPromptText) {
    this._linkingUserPromptText.internalValue = value;
  }
  public resetLinkingUserPromptText() {
    this._linkingUserPromptText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get linkingUserPromptTextInput() {
    return this._linkingUserPromptText.internalValue;
  }

  // login_text - computed: false, optional: true, required: false
  private _loginText = new DefaultLoginTextsLoginTextOutputReference(this, "login_text");
  public get loginText() {
    return this._loginText;
  }
  public putLoginText(value: DefaultLoginTextsLoginText) {
    this._loginText.internalValue = value;
  }
  public resetLoginText() {
    this._loginText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginTextInput() {
    return this._loginText.internalValue;
  }

  // logout_text - computed: false, optional: true, required: false
  private _logoutText = new DefaultLoginTextsLogoutTextOutputReference(this, "logout_text");
  public get logoutText() {
    return this._logoutText;
  }
  public putLogoutText(value: DefaultLoginTextsLogoutText) {
    this._logoutText.internalValue = value;
  }
  public resetLogoutText() {
    this._logoutText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoutTextInput() {
    return this._logoutText.internalValue;
  }

  // mfa_providers_text - computed: false, optional: true, required: false
  private _mfaProvidersText = new DefaultLoginTextsMfaProvidersTextOutputReference(this, "mfa_providers_text");
  public get mfaProvidersText() {
    return this._mfaProvidersText;
  }
  public putMfaProvidersText(value: DefaultLoginTextsMfaProvidersText) {
    this._mfaProvidersText.internalValue = value;
  }
  public resetMfaProvidersText() {
    this._mfaProvidersText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mfaProvidersTextInput() {
    return this._mfaProvidersText.internalValue;
  }

  // password_change_done_text - computed: false, optional: true, required: false
  private _passwordChangeDoneText = new DefaultLoginTextsPasswordChangeDoneTextOutputReference(this, "password_change_done_text");
  public get passwordChangeDoneText() {
    return this._passwordChangeDoneText;
  }
  public putPasswordChangeDoneText(value: DefaultLoginTextsPasswordChangeDoneText) {
    this._passwordChangeDoneText.internalValue = value;
  }
  public resetPasswordChangeDoneText() {
    this._passwordChangeDoneText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordChangeDoneTextInput() {
    return this._passwordChangeDoneText.internalValue;
  }

  // password_change_text - computed: false, optional: true, required: false
  private _passwordChangeText = new DefaultLoginTextsPasswordChangeTextOutputReference(this, "password_change_text");
  public get passwordChangeText() {
    return this._passwordChangeText;
  }
  public putPasswordChangeText(value: DefaultLoginTextsPasswordChangeText) {
    this._passwordChangeText.internalValue = value;
  }
  public resetPasswordChangeText() {
    this._passwordChangeText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordChangeTextInput() {
    return this._passwordChangeText.internalValue;
  }

  // password_reset_done_text - computed: false, optional: true, required: false
  private _passwordResetDoneText = new DefaultLoginTextsPasswordResetDoneTextOutputReference(this, "password_reset_done_text");
  public get passwordResetDoneText() {
    return this._passwordResetDoneText;
  }
  public putPasswordResetDoneText(value: DefaultLoginTextsPasswordResetDoneText) {
    this._passwordResetDoneText.internalValue = value;
  }
  public resetPasswordResetDoneText() {
    this._passwordResetDoneText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordResetDoneTextInput() {
    return this._passwordResetDoneText.internalValue;
  }

  // password_text - computed: false, optional: true, required: false
  private _passwordText = new DefaultLoginTextsPasswordTextOutputReference(this, "password_text");
  public get passwordText() {
    return this._passwordText;
  }
  public putPasswordText(value: DefaultLoginTextsPasswordText) {
    this._passwordText.internalValue = value;
  }
  public resetPasswordText() {
    this._passwordText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordTextInput() {
    return this._passwordText.internalValue;
  }

  // passwordless_prompt_text - computed: false, optional: true, required: false
  private _passwordlessPromptText = new DefaultLoginTextsPasswordlessPromptTextOutputReference(this, "passwordless_prompt_text");
  public get passwordlessPromptText() {
    return this._passwordlessPromptText;
  }
  public putPasswordlessPromptText(value: DefaultLoginTextsPasswordlessPromptText) {
    this._passwordlessPromptText.internalValue = value;
  }
  public resetPasswordlessPromptText() {
    this._passwordlessPromptText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordlessPromptTextInput() {
    return this._passwordlessPromptText.internalValue;
  }

  // passwordless_registration_done_text - computed: false, optional: true, required: false
  private _passwordlessRegistrationDoneText = new DefaultLoginTextsPasswordlessRegistrationDoneTextOutputReference(this, "passwordless_registration_done_text");
  public get passwordlessRegistrationDoneText() {
    return this._passwordlessRegistrationDoneText;
  }
  public putPasswordlessRegistrationDoneText(value: DefaultLoginTextsPasswordlessRegistrationDoneText) {
    this._passwordlessRegistrationDoneText.internalValue = value;
  }
  public resetPasswordlessRegistrationDoneText() {
    this._passwordlessRegistrationDoneText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordlessRegistrationDoneTextInput() {
    return this._passwordlessRegistrationDoneText.internalValue;
  }

  // passwordless_registration_text - computed: false, optional: true, required: false
  private _passwordlessRegistrationText = new DefaultLoginTextsPasswordlessRegistrationTextOutputReference(this, "passwordless_registration_text");
  public get passwordlessRegistrationText() {
    return this._passwordlessRegistrationText;
  }
  public putPasswordlessRegistrationText(value: DefaultLoginTextsPasswordlessRegistrationText) {
    this._passwordlessRegistrationText.internalValue = value;
  }
  public resetPasswordlessRegistrationText() {
    this._passwordlessRegistrationText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordlessRegistrationTextInput() {
    return this._passwordlessRegistrationText.internalValue;
  }

  // passwordless_text - computed: false, optional: true, required: false
  private _passwordlessText = new DefaultLoginTextsPasswordlessTextOutputReference(this, "passwordless_text");
  public get passwordlessText() {
    return this._passwordlessText;
  }
  public putPasswordlessText(value: DefaultLoginTextsPasswordlessText) {
    this._passwordlessText.internalValue = value;
  }
  public resetPasswordlessText() {
    this._passwordlessText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordlessTextInput() {
    return this._passwordlessText.internalValue;
  }

  // registration_option_text - computed: false, optional: true, required: false
  private _registrationOptionText = new DefaultLoginTextsRegistrationOptionTextOutputReference(this, "registration_option_text");
  public get registrationOptionText() {
    return this._registrationOptionText;
  }
  public putRegistrationOptionText(value: DefaultLoginTextsRegistrationOptionText) {
    this._registrationOptionText.internalValue = value;
  }
  public resetRegistrationOptionText() {
    this._registrationOptionText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationOptionTextInput() {
    return this._registrationOptionText.internalValue;
  }

  // registration_org_text - computed: false, optional: true, required: false
  private _registrationOrgText = new DefaultLoginTextsRegistrationOrgTextOutputReference(this, "registration_org_text");
  public get registrationOrgText() {
    return this._registrationOrgText;
  }
  public putRegistrationOrgText(value: DefaultLoginTextsRegistrationOrgText) {
    this._registrationOrgText.internalValue = value;
  }
  public resetRegistrationOrgText() {
    this._registrationOrgText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationOrgTextInput() {
    return this._registrationOrgText.internalValue;
  }

  // registration_user_text - computed: false, optional: true, required: false
  private _registrationUserText = new DefaultLoginTextsRegistrationUserTextOutputReference(this, "registration_user_text");
  public get registrationUserText() {
    return this._registrationUserText;
  }
  public putRegistrationUserText(value: DefaultLoginTextsRegistrationUserText) {
    this._registrationUserText.internalValue = value;
  }
  public resetRegistrationUserText() {
    this._registrationUserText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get registrationUserTextInput() {
    return this._registrationUserText.internalValue;
  }

  // select_account_text - computed: false, optional: true, required: false
  private _selectAccountText = new DefaultLoginTextsSelectAccountTextOutputReference(this, "select_account_text");
  public get selectAccountText() {
    return this._selectAccountText;
  }
  public putSelectAccountText(value: DefaultLoginTextsSelectAccountText) {
    this._selectAccountText.internalValue = value;
  }
  public resetSelectAccountText() {
    this._selectAccountText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selectAccountTextInput() {
    return this._selectAccountText.internalValue;
  }

  // success_login_text - computed: false, optional: true, required: false
  private _successLoginText = new DefaultLoginTextsSuccessLoginTextOutputReference(this, "success_login_text");
  public get successLoginText() {
    return this._successLoginText;
  }
  public putSuccessLoginText(value: DefaultLoginTextsSuccessLoginText) {
    this._successLoginText.internalValue = value;
  }
  public resetSuccessLoginText() {
    this._successLoginText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get successLoginTextInput() {
    return this._successLoginText.internalValue;
  }

  // username_change_done_text - computed: false, optional: true, required: false
  private _usernameChangeDoneText = new DefaultLoginTextsUsernameChangeDoneTextOutputReference(this, "username_change_done_text");
  public get usernameChangeDoneText() {
    return this._usernameChangeDoneText;
  }
  public putUsernameChangeDoneText(value: DefaultLoginTextsUsernameChangeDoneText) {
    this._usernameChangeDoneText.internalValue = value;
  }
  public resetUsernameChangeDoneText() {
    this._usernameChangeDoneText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameChangeDoneTextInput() {
    return this._usernameChangeDoneText.internalValue;
  }

  // username_change_text - computed: false, optional: true, required: false
  private _usernameChangeText = new DefaultLoginTextsUsernameChangeTextOutputReference(this, "username_change_text");
  public get usernameChangeText() {
    return this._usernameChangeText;
  }
  public putUsernameChangeText(value: DefaultLoginTextsUsernameChangeText) {
    this._usernameChangeText.internalValue = value;
  }
  public resetUsernameChangeText() {
    this._usernameChangeText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameChangeTextInput() {
    return this._usernameChangeText.internalValue;
  }

  // verify_mfa_otp_text - computed: false, optional: true, required: false
  private _verifyMfaOtpText = new DefaultLoginTextsVerifyMfaOtpTextOutputReference(this, "verify_mfa_otp_text");
  public get verifyMfaOtpText() {
    return this._verifyMfaOtpText;
  }
  public putVerifyMfaOtpText(value: DefaultLoginTextsVerifyMfaOtpText) {
    this._verifyMfaOtpText.internalValue = value;
  }
  public resetVerifyMfaOtpText() {
    this._verifyMfaOtpText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyMfaOtpTextInput() {
    return this._verifyMfaOtpText.internalValue;
  }

  // verify_mfa_u2f_text - computed: false, optional: true, required: false
  private _verifyMfaU2FText = new DefaultLoginTextsVerifyMfaU2FTextOutputReference(this, "verify_mfa_u2f_text");
  public get verifyMfaU2FText() {
    return this._verifyMfaU2FText;
  }
  public putVerifyMfaU2FText(value: DefaultLoginTextsVerifyMfaU2FText) {
    this._verifyMfaU2FText.internalValue = value;
  }
  public resetVerifyMfaU2FText() {
    this._verifyMfaU2FText.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get verifyMfaU2FTextInput() {
    return this._verifyMfaU2FText.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      email_verification_done_text: defaultLoginTextsEmailVerificationDoneTextToTerraform(this._emailVerificationDoneText.internalValue),
      email_verification_text: defaultLoginTextsEmailVerificationTextToTerraform(this._emailVerificationText.internalValue),
      external_registration_user_overview_text: defaultLoginTextsExternalRegistrationUserOverviewTextToTerraform(this._externalRegistrationUserOverviewText.internalValue),
      external_user_not_found_text: defaultLoginTextsExternalUserNotFoundTextToTerraform(this._externalUserNotFoundText.internalValue),
      footer_text: defaultLoginTextsFooterTextToTerraform(this._footerText.internalValue),
      init_mfa_done_text: defaultLoginTextsInitMfaDoneTextToTerraform(this._initMfaDoneText.internalValue),
      init_mfa_otp_text: defaultLoginTextsInitMfaOtpTextToTerraform(this._initMfaOtpText.internalValue),
      init_mfa_prompt_text: defaultLoginTextsInitMfaPromptTextToTerraform(this._initMfaPromptText.internalValue),
      init_mfa_u2f_text: defaultLoginTextsInitMfaU2FTextToTerraform(this._initMfaU2FText.internalValue),
      init_password_done_text: defaultLoginTextsInitPasswordDoneTextToTerraform(this._initPasswordDoneText.internalValue),
      init_password_text: defaultLoginTextsInitPasswordTextToTerraform(this._initPasswordText.internalValue),
      initialize_done_text: defaultLoginTextsInitializeDoneTextToTerraform(this._initializeDoneText.internalValue),
      initialize_user_text: defaultLoginTextsInitializeUserTextToTerraform(this._initializeUserText.internalValue),
      language: cdktf.stringToTerraform(this._language),
      linking_user_done_text: defaultLoginTextsLinkingUserDoneTextToTerraform(this._linkingUserDoneText.internalValue),
      linking_user_prompt_text: defaultLoginTextsLinkingUserPromptTextToTerraform(this._linkingUserPromptText.internalValue),
      login_text: defaultLoginTextsLoginTextToTerraform(this._loginText.internalValue),
      logout_text: defaultLoginTextsLogoutTextToTerraform(this._logoutText.internalValue),
      mfa_providers_text: defaultLoginTextsMfaProvidersTextToTerraform(this._mfaProvidersText.internalValue),
      password_change_done_text: defaultLoginTextsPasswordChangeDoneTextToTerraform(this._passwordChangeDoneText.internalValue),
      password_change_text: defaultLoginTextsPasswordChangeTextToTerraform(this._passwordChangeText.internalValue),
      password_reset_done_text: defaultLoginTextsPasswordResetDoneTextToTerraform(this._passwordResetDoneText.internalValue),
      password_text: defaultLoginTextsPasswordTextToTerraform(this._passwordText.internalValue),
      passwordless_prompt_text: defaultLoginTextsPasswordlessPromptTextToTerraform(this._passwordlessPromptText.internalValue),
      passwordless_registration_done_text: defaultLoginTextsPasswordlessRegistrationDoneTextToTerraform(this._passwordlessRegistrationDoneText.internalValue),
      passwordless_registration_text: defaultLoginTextsPasswordlessRegistrationTextToTerraform(this._passwordlessRegistrationText.internalValue),
      passwordless_text: defaultLoginTextsPasswordlessTextToTerraform(this._passwordlessText.internalValue),
      registration_option_text: defaultLoginTextsRegistrationOptionTextToTerraform(this._registrationOptionText.internalValue),
      registration_org_text: defaultLoginTextsRegistrationOrgTextToTerraform(this._registrationOrgText.internalValue),
      registration_user_text: defaultLoginTextsRegistrationUserTextToTerraform(this._registrationUserText.internalValue),
      select_account_text: defaultLoginTextsSelectAccountTextToTerraform(this._selectAccountText.internalValue),
      success_login_text: defaultLoginTextsSuccessLoginTextToTerraform(this._successLoginText.internalValue),
      username_change_done_text: defaultLoginTextsUsernameChangeDoneTextToTerraform(this._usernameChangeDoneText.internalValue),
      username_change_text: defaultLoginTextsUsernameChangeTextToTerraform(this._usernameChangeText.internalValue),
      verify_mfa_otp_text: defaultLoginTextsVerifyMfaOtpTextToTerraform(this._verifyMfaOtpText.internalValue),
      verify_mfa_u2f_text: defaultLoginTextsVerifyMfaU2FTextToTerraform(this._verifyMfaU2FText.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      email_verification_done_text: {
        value: defaultLoginTextsEmailVerificationDoneTextToHclTerraform(this._emailVerificationDoneText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsEmailVerificationDoneText",
      },
      email_verification_text: {
        value: defaultLoginTextsEmailVerificationTextToHclTerraform(this._emailVerificationText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsEmailVerificationText",
      },
      external_registration_user_overview_text: {
        value: defaultLoginTextsExternalRegistrationUserOverviewTextToHclTerraform(this._externalRegistrationUserOverviewText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsExternalRegistrationUserOverviewText",
      },
      external_user_not_found_text: {
        value: defaultLoginTextsExternalUserNotFoundTextToHclTerraform(this._externalUserNotFoundText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsExternalUserNotFoundText",
      },
      footer_text: {
        value: defaultLoginTextsFooterTextToHclTerraform(this._footerText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsFooterText",
      },
      init_mfa_done_text: {
        value: defaultLoginTextsInitMfaDoneTextToHclTerraform(this._initMfaDoneText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsInitMfaDoneText",
      },
      init_mfa_otp_text: {
        value: defaultLoginTextsInitMfaOtpTextToHclTerraform(this._initMfaOtpText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsInitMfaOtpText",
      },
      init_mfa_prompt_text: {
        value: defaultLoginTextsInitMfaPromptTextToHclTerraform(this._initMfaPromptText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsInitMfaPromptText",
      },
      init_mfa_u2f_text: {
        value: defaultLoginTextsInitMfaU2FTextToHclTerraform(this._initMfaU2FText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsInitMfaU2FText",
      },
      init_password_done_text: {
        value: defaultLoginTextsInitPasswordDoneTextToHclTerraform(this._initPasswordDoneText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsInitPasswordDoneText",
      },
      init_password_text: {
        value: defaultLoginTextsInitPasswordTextToHclTerraform(this._initPasswordText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsInitPasswordText",
      },
      initialize_done_text: {
        value: defaultLoginTextsInitializeDoneTextToHclTerraform(this._initializeDoneText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsInitializeDoneText",
      },
      initialize_user_text: {
        value: defaultLoginTextsInitializeUserTextToHclTerraform(this._initializeUserText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsInitializeUserText",
      },
      language: {
        value: cdktf.stringToHclTerraform(this._language),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      linking_user_done_text: {
        value: defaultLoginTextsLinkingUserDoneTextToHclTerraform(this._linkingUserDoneText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsLinkingUserDoneText",
      },
      linking_user_prompt_text: {
        value: defaultLoginTextsLinkingUserPromptTextToHclTerraform(this._linkingUserPromptText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsLinkingUserPromptText",
      },
      login_text: {
        value: defaultLoginTextsLoginTextToHclTerraform(this._loginText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsLoginText",
      },
      logout_text: {
        value: defaultLoginTextsLogoutTextToHclTerraform(this._logoutText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsLogoutText",
      },
      mfa_providers_text: {
        value: defaultLoginTextsMfaProvidersTextToHclTerraform(this._mfaProvidersText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsMfaProvidersText",
      },
      password_change_done_text: {
        value: defaultLoginTextsPasswordChangeDoneTextToHclTerraform(this._passwordChangeDoneText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsPasswordChangeDoneText",
      },
      password_change_text: {
        value: defaultLoginTextsPasswordChangeTextToHclTerraform(this._passwordChangeText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsPasswordChangeText",
      },
      password_reset_done_text: {
        value: defaultLoginTextsPasswordResetDoneTextToHclTerraform(this._passwordResetDoneText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsPasswordResetDoneText",
      },
      password_text: {
        value: defaultLoginTextsPasswordTextToHclTerraform(this._passwordText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsPasswordText",
      },
      passwordless_prompt_text: {
        value: defaultLoginTextsPasswordlessPromptTextToHclTerraform(this._passwordlessPromptText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsPasswordlessPromptText",
      },
      passwordless_registration_done_text: {
        value: defaultLoginTextsPasswordlessRegistrationDoneTextToHclTerraform(this._passwordlessRegistrationDoneText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsPasswordlessRegistrationDoneText",
      },
      passwordless_registration_text: {
        value: defaultLoginTextsPasswordlessRegistrationTextToHclTerraform(this._passwordlessRegistrationText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsPasswordlessRegistrationText",
      },
      passwordless_text: {
        value: defaultLoginTextsPasswordlessTextToHclTerraform(this._passwordlessText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsPasswordlessText",
      },
      registration_option_text: {
        value: defaultLoginTextsRegistrationOptionTextToHclTerraform(this._registrationOptionText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsRegistrationOptionText",
      },
      registration_org_text: {
        value: defaultLoginTextsRegistrationOrgTextToHclTerraform(this._registrationOrgText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsRegistrationOrgText",
      },
      registration_user_text: {
        value: defaultLoginTextsRegistrationUserTextToHclTerraform(this._registrationUserText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsRegistrationUserText",
      },
      select_account_text: {
        value: defaultLoginTextsSelectAccountTextToHclTerraform(this._selectAccountText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsSelectAccountText",
      },
      success_login_text: {
        value: defaultLoginTextsSuccessLoginTextToHclTerraform(this._successLoginText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsSuccessLoginText",
      },
      username_change_done_text: {
        value: defaultLoginTextsUsernameChangeDoneTextToHclTerraform(this._usernameChangeDoneText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsUsernameChangeDoneText",
      },
      username_change_text: {
        value: defaultLoginTextsUsernameChangeTextToHclTerraform(this._usernameChangeText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsUsernameChangeText",
      },
      verify_mfa_otp_text: {
        value: defaultLoginTextsVerifyMfaOtpTextToHclTerraform(this._verifyMfaOtpText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsVerifyMfaOtpText",
      },
      verify_mfa_u2f_text: {
        value: defaultLoginTextsVerifyMfaU2FTextToHclTerraform(this._verifyMfaU2FText.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DefaultLoginTextsVerifyMfaU2FText",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
