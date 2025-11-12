// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthenticationLogonHttpAuthenticateInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Lock the account when the failed logon attempts is exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance#account_lock AamAuthenticationLogonHttpAuthenticateInstance#account_lock}
  */
  readonly accountLock?: number;
  /**
  * The time an account remains locked in seconds (default 1800)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance#duration AamAuthenticationLogonHttpAuthenticateInstance#duration}
  */
  readonly duration?: number;
  /**
  * Set HSTS policy expired timeout in seconds, 0 means to disable HSTS policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance#hsts_timeout AamAuthenticationLogonHttpAuthenticateInstance#hsts_timeout}
  */
  readonly hstsTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance#id AamAuthenticationLogonHttpAuthenticateInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify HTTP-Authenticate logon name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance#name AamAuthenticationLogonHttpAuthenticateInstance#name}
  */
  readonly name: string;
  /**
  * Name of the packet capture template to be bind with this object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance#packet_capture_template AamAuthenticationLogonHttpAuthenticateInstance#packet_capture_template}
  */
  readonly packetCaptureTemplate?: string;
  /**
  * Maximum number of consecutive failed logon attempts (default 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance#retry AamAuthenticationLogonHttpAuthenticateInstance#retry}
  */
  readonly retry?: number;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance#uuid AamAuthenticationLogonHttpAuthenticateInstance#uuid}
  */
  readonly uuid?: string;
  /**
  * auth_method block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance#auth_method AamAuthenticationLogonHttpAuthenticateInstance#auth_method}
  */
  readonly authMethod?: AamAuthenticationLogonHttpAuthenticateInstanceAuthMethod;
  /**
  * sampling_enable block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance#sampling_enable AamAuthenticationLogonHttpAuthenticateInstance#sampling_enable}
  */
  readonly samplingEnable?: AamAuthenticationLogonHttpAuthenticateInstanceSamplingEnable[] | cdktf.IResolvable;
}
export interface AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodBasic {
  /**
  * Enable Basic logon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance#basic_enable AamAuthenticationLogonHttpAuthenticateInstance#basic_enable}
  */
  readonly basicEnable?: number;
  /**
  * Specify realm for basic logon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance#basic_realm AamAuthenticationLogonHttpAuthenticateInstance#basic_realm}
  */
  readonly basicRealm?: string;
  /**
  * Specify challenge page name for RSA-RADIUS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance#challenge_page AamAuthenticationLogonHttpAuthenticateInstance#challenge_page}
  */
  readonly challengePage?: string;
  /**
  * Specify challenge-response form for RSA-RADIUS authentication
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance#challenge_response_form AamAuthenticationLogonHttpAuthenticateInstance#challenge_response_form}
  */
  readonly challengeResponseForm?: string;
  /**
  * Specify challenge variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance#challenge_variable AamAuthenticationLogonHttpAuthenticateInstance#challenge_variable}
  */
  readonly challengeVariable?: string;
  /**
  * Specify new PIN page name for RSA-RADIUS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance#new_pin_page AamAuthenticationLogonHttpAuthenticateInstance#new_pin_page}
  */
  readonly newPinPage?: string;
  /**
  * Specify new PIN variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance#new_pin_variable AamAuthenticationLogonHttpAuthenticateInstance#new_pin_variable}
  */
  readonly newPinVariable?: string;
  /**
  * Specify next-token page name for RSA-RADIUS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance#next_token_page AamAuthenticationLogonHttpAuthenticateInstance#next_token_page}
  */
  readonly nextTokenPage?: string;
  /**
  * Specify next-token variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance#next_token_variable AamAuthenticationLogonHttpAuthenticateInstance#next_token_variable}
  */
  readonly nextTokenVariable?: string;
}

export function aamAuthenticationLogonHttpAuthenticateInstanceAuthMethodBasicToTerraform(struct?: AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodBasicOutputReference | AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodBasic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_enable: cdktf.numberToTerraform(struct!.basicEnable),
    basic_realm: cdktf.stringToTerraform(struct!.basicRealm),
    challenge_page: cdktf.stringToTerraform(struct!.challengePage),
    challenge_response_form: cdktf.stringToTerraform(struct!.challengeResponseForm),
    challenge_variable: cdktf.stringToTerraform(struct!.challengeVariable),
    new_pin_page: cdktf.stringToTerraform(struct!.newPinPage),
    new_pin_variable: cdktf.stringToTerraform(struct!.newPinVariable),
    next_token_page: cdktf.stringToTerraform(struct!.nextTokenPage),
    next_token_variable: cdktf.stringToTerraform(struct!.nextTokenVariable),
  }
}


export function aamAuthenticationLogonHttpAuthenticateInstanceAuthMethodBasicToHclTerraform(struct?: AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodBasicOutputReference | AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodBasic): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_enable: {
      value: cdktf.numberToHclTerraform(struct!.basicEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    basic_realm: {
      value: cdktf.stringToHclTerraform(struct!.basicRealm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    challenge_page: {
      value: cdktf.stringToHclTerraform(struct!.challengePage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    challenge_response_form: {
      value: cdktf.stringToHclTerraform(struct!.challengeResponseForm),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    challenge_variable: {
      value: cdktf.stringToHclTerraform(struct!.challengeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_pin_page: {
      value: cdktf.stringToHclTerraform(struct!.newPinPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_pin_variable: {
      value: cdktf.stringToHclTerraform(struct!.newPinVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_token_page: {
      value: cdktf.stringToHclTerraform(struct!.nextTokenPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    next_token_variable: {
      value: cdktf.stringToHclTerraform(struct!.nextTokenVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodBasicOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodBasic | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicEnable = this._basicEnable;
    }
    if (this._basicRealm !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicRealm = this._basicRealm;
    }
    if (this._challengePage !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengePage = this._challengePage;
    }
    if (this._challengeResponseForm !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeResponseForm = this._challengeResponseForm;
    }
    if (this._challengeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeVariable = this._challengeVariable;
    }
    if (this._newPinPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.newPinPage = this._newPinPage;
    }
    if (this._newPinVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.newPinVariable = this._newPinVariable;
    }
    if (this._nextTokenPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextTokenPage = this._nextTokenPage;
    }
    if (this._nextTokenVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextTokenVariable = this._nextTokenVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodBasic | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basicEnable = undefined;
      this._basicRealm = undefined;
      this._challengePage = undefined;
      this._challengeResponseForm = undefined;
      this._challengeVariable = undefined;
      this._newPinPage = undefined;
      this._newPinVariable = undefined;
      this._nextTokenPage = undefined;
      this._nextTokenVariable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basicEnable = value.basicEnable;
      this._basicRealm = value.basicRealm;
      this._challengePage = value.challengePage;
      this._challengeResponseForm = value.challengeResponseForm;
      this._challengeVariable = value.challengeVariable;
      this._newPinPage = value.newPinPage;
      this._newPinVariable = value.newPinVariable;
      this._nextTokenPage = value.nextTokenPage;
      this._nextTokenVariable = value.nextTokenVariable;
    }
  }

  // basic_enable - computed: false, optional: true, required: false
  private _basicEnable?: number; 
  public get basicEnable() {
    return this.getNumberAttribute('basic_enable');
  }
  public set basicEnable(value: number) {
    this._basicEnable = value;
  }
  public resetBasicEnable() {
    this._basicEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicEnableInput() {
    return this._basicEnable;
  }

  // basic_realm - computed: false, optional: true, required: false
  private _basicRealm?: string; 
  public get basicRealm() {
    return this.getStringAttribute('basic_realm');
  }
  public set basicRealm(value: string) {
    this._basicRealm = value;
  }
  public resetBasicRealm() {
    this._basicRealm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicRealmInput() {
    return this._basicRealm;
  }

  // challenge_page - computed: false, optional: true, required: false
  private _challengePage?: string; 
  public get challengePage() {
    return this.getStringAttribute('challenge_page');
  }
  public set challengePage(value: string) {
    this._challengePage = value;
  }
  public resetChallengePage() {
    this._challengePage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengePageInput() {
    return this._challengePage;
  }

  // challenge_response_form - computed: false, optional: true, required: false
  private _challengeResponseForm?: string; 
  public get challengeResponseForm() {
    return this.getStringAttribute('challenge_response_form');
  }
  public set challengeResponseForm(value: string) {
    this._challengeResponseForm = value;
  }
  public resetChallengeResponseForm() {
    this._challengeResponseForm = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeResponseFormInput() {
    return this._challengeResponseForm;
  }

  // challenge_variable - computed: false, optional: true, required: false
  private _challengeVariable?: string; 
  public get challengeVariable() {
    return this.getStringAttribute('challenge_variable');
  }
  public set challengeVariable(value: string) {
    this._challengeVariable = value;
  }
  public resetChallengeVariable() {
    this._challengeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeVariableInput() {
    return this._challengeVariable;
  }

  // new_pin_page - computed: false, optional: true, required: false
  private _newPinPage?: string; 
  public get newPinPage() {
    return this.getStringAttribute('new_pin_page');
  }
  public set newPinPage(value: string) {
    this._newPinPage = value;
  }
  public resetNewPinPage() {
    this._newPinPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPinPageInput() {
    return this._newPinPage;
  }

  // new_pin_variable - computed: false, optional: true, required: false
  private _newPinVariable?: string; 
  public get newPinVariable() {
    return this.getStringAttribute('new_pin_variable');
  }
  public set newPinVariable(value: string) {
    this._newPinVariable = value;
  }
  public resetNewPinVariable() {
    this._newPinVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPinVariableInput() {
    return this._newPinVariable;
  }

  // next_token_page - computed: false, optional: true, required: false
  private _nextTokenPage?: string; 
  public get nextTokenPage() {
    return this.getStringAttribute('next_token_page');
  }
  public set nextTokenPage(value: string) {
    this._nextTokenPage = value;
  }
  public resetNextTokenPage() {
    this._nextTokenPage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextTokenPageInput() {
    return this._nextTokenPage;
  }

  // next_token_variable - computed: false, optional: true, required: false
  private _nextTokenVariable?: string; 
  public get nextTokenVariable() {
    return this.getStringAttribute('next_token_variable');
  }
  public set nextTokenVariable(value: string) {
    this._nextTokenVariable = value;
  }
  public resetNextTokenVariable() {
    this._nextTokenVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nextTokenVariableInput() {
    return this._nextTokenVariable;
  }
}
export interface AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNegotiate {
  /**
  * Enable SPENGO logon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance#negotiate_enable AamAuthenticationLogonHttpAuthenticateInstance#negotiate_enable}
  */
  readonly negotiateEnable?: number;
}

export function aamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNegotiateToTerraform(struct?: AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNegotiateOutputReference | AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNegotiate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    negotiate_enable: cdktf.numberToTerraform(struct!.negotiateEnable),
  }
}


export function aamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNegotiateToHclTerraform(struct?: AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNegotiateOutputReference | AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNegotiate): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    negotiate_enable: {
      value: cdktf.numberToHclTerraform(struct!.negotiateEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNegotiateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNegotiate | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._negotiateEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.negotiateEnable = this._negotiateEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNegotiate | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._negotiateEnable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._negotiateEnable = value.negotiateEnable;
    }
  }

  // negotiate_enable - computed: false, optional: true, required: false
  private _negotiateEnable?: number; 
  public get negotiateEnable() {
    return this.getNumberAttribute('negotiate_enable');
  }
  public set negotiateEnable(value: number) {
    this._negotiateEnable = value;
  }
  public resetNegotiateEnable() {
    this._negotiateEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negotiateEnableInput() {
    return this._negotiateEnable;
  }
}
export interface AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNtlm {
  /**
  * Enable NTLM logon
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance#ntlm_enable AamAuthenticationLogonHttpAuthenticateInstance#ntlm_enable}
  */
  readonly ntlmEnable?: number;
}

export function aamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNtlmToTerraform(struct?: AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNtlmOutputReference | AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNtlm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ntlm_enable: cdktf.numberToTerraform(struct!.ntlmEnable),
  }
}


export function aamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNtlmToHclTerraform(struct?: AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNtlmOutputReference | AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNtlm): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ntlm_enable: {
      value: cdktf.numberToHclTerraform(struct!.ntlmEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNtlmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNtlm | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ntlmEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlmEnable = this._ntlmEnable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNtlm | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._ntlmEnable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._ntlmEnable = value.ntlmEnable;
    }
  }

  // ntlm_enable - computed: false, optional: true, required: false
  private _ntlmEnable?: number; 
  public get ntlmEnable() {
    return this.getNumberAttribute('ntlm_enable');
  }
  public set ntlmEnable(value: number) {
    this._ntlmEnable = value;
  }
  public resetNtlmEnable() {
    this._ntlmEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmEnableInput() {
    return this._ntlmEnable;
  }
}
export interface AamAuthenticationLogonHttpAuthenticateInstanceAuthMethod {
  /**
  * basic block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance#basic AamAuthenticationLogonHttpAuthenticateInstance#basic}
  */
  readonly basic?: AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodBasic;
  /**
  * negotiate block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance#negotiate AamAuthenticationLogonHttpAuthenticateInstance#negotiate}
  */
  readonly negotiate?: AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNegotiate;
  /**
  * ntlm block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance#ntlm AamAuthenticationLogonHttpAuthenticateInstance#ntlm}
  */
  readonly ntlm?: AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNtlm;
}

export function aamAuthenticationLogonHttpAuthenticateInstanceAuthMethodToTerraform(struct?: AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodOutputReference | AamAuthenticationLogonHttpAuthenticateInstanceAuthMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic: aamAuthenticationLogonHttpAuthenticateInstanceAuthMethodBasicToTerraform(struct!.basic),
    negotiate: aamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNegotiateToTerraform(struct!.negotiate),
    ntlm: aamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNtlmToTerraform(struct!.ntlm),
  }
}


export function aamAuthenticationLogonHttpAuthenticateInstanceAuthMethodToHclTerraform(struct?: AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodOutputReference | AamAuthenticationLogonHttpAuthenticateInstanceAuthMethod): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic: {
      value: aamAuthenticationLogonHttpAuthenticateInstanceAuthMethodBasicToHclTerraform(struct!.basic),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodBasicList",
    },
    negotiate: {
      value: aamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNegotiateToHclTerraform(struct!.negotiate),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNegotiateList",
    },
    ntlm: {
      value: aamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNtlmToHclTerraform(struct!.ntlm),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNtlmList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationLogonHttpAuthenticateInstanceAuthMethod | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basic?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basic = this._basic?.internalValue;
    }
    if (this._negotiate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.negotiate = this._negotiate?.internalValue;
    }
    if (this._ntlm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ntlm = this._ntlm?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationLogonHttpAuthenticateInstanceAuthMethod | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._basic.internalValue = undefined;
      this._negotiate.internalValue = undefined;
      this._ntlm.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._basic.internalValue = value.basic;
      this._negotiate.internalValue = value.negotiate;
      this._ntlm.internalValue = value.ntlm;
    }
  }

  // basic - computed: false, optional: true, required: false
  private _basic = new AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodBasicOutputReference(this, "basic");
  public get basic() {
    return this._basic;
  }
  public putBasic(value: AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodBasic) {
    this._basic.internalValue = value;
  }
  public resetBasic() {
    this._basic.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicInput() {
    return this._basic.internalValue;
  }

  // negotiate - computed: false, optional: true, required: false
  private _negotiate = new AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNegotiateOutputReference(this, "negotiate");
  public get negotiate() {
    return this._negotiate;
  }
  public putNegotiate(value: AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNegotiate) {
    this._negotiate.internalValue = value;
  }
  public resetNegotiate() {
    this._negotiate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get negotiateInput() {
    return this._negotiate.internalValue;
  }

  // ntlm - computed: false, optional: true, required: false
  private _ntlm = new AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNtlmOutputReference(this, "ntlm");
  public get ntlm() {
    return this._ntlm;
  }
  public putNtlm(value: AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodNtlm) {
    this._ntlm.internalValue = value;
  }
  public resetNtlm() {
    this._ntlm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ntlmInput() {
    return this._ntlm.internalValue;
  }
}
export interface AamAuthenticationLogonHttpAuthenticateInstanceSamplingEnable {
  /**
  * 'all': all; 'spn_krb_request': SPN Kerberos Request; 'spn_krb_success': SPN Kerberos Success; 'spn_krb_faiure': SPN Kerberos Failure;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance#counters1 AamAuthenticationLogonHttpAuthenticateInstance#counters1}
  */
  readonly counters1?: string;
}

export function aamAuthenticationLogonHttpAuthenticateInstanceSamplingEnableToTerraform(struct?: AamAuthenticationLogonHttpAuthenticateInstanceSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    counters1: cdktf.stringToTerraform(struct!.counters1),
  }
}


export function aamAuthenticationLogonHttpAuthenticateInstanceSamplingEnableToHclTerraform(struct?: AamAuthenticationLogonHttpAuthenticateInstanceSamplingEnable | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    counters1: {
      value: cdktf.stringToHclTerraform(struct!.counters1),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationLogonHttpAuthenticateInstanceSamplingEnableOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): AamAuthenticationLogonHttpAuthenticateInstanceSamplingEnable | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._counters1 !== undefined) {
      hasAnyValues = true;
      internalValueResult.counters1 = this._counters1;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationLogonHttpAuthenticateInstanceSamplingEnable | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._counters1 = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._counters1 = value.counters1;
    }
  }

  // counters1 - computed: false, optional: true, required: false
  private _counters1?: string; 
  public get counters1() {
    return this.getStringAttribute('counters1');
  }
  public set counters1(value: string) {
    this._counters1 = value;
  }
  public resetCounters1() {
    this._counters1 = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get counters1Input() {
    return this._counters1;
  }
}

export class AamAuthenticationLogonHttpAuthenticateInstanceSamplingEnableList extends cdktf.ComplexList {
  public internalValue? : AamAuthenticationLogonHttpAuthenticateInstanceSamplingEnable[] | cdktf.IResolvable

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
  public get(index: number): AamAuthenticationLogonHttpAuthenticateInstanceSamplingEnableOutputReference {
    return new AamAuthenticationLogonHttpAuthenticateInstanceSamplingEnableOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance thunder_aam_authentication_logon_http_authenticate_instance}
*/
export class AamAuthenticationLogonHttpAuthenticateInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_logon_http_authenticate_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthenticationLogonHttpAuthenticateInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthenticationLogonHttpAuthenticateInstance to import
  * @param importFromId The id of the existing AamAuthenticationLogonHttpAuthenticateInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthenticationLogonHttpAuthenticateInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_logon_http_authenticate_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_logon_http_authenticate_instance thunder_aam_authentication_logon_http_authenticate_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthenticationLogonHttpAuthenticateInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: AamAuthenticationLogonHttpAuthenticateInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_logon_http_authenticate_instance',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2',
        providerVersionConstraint: '1.4.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accountLock = config.accountLock;
    this._duration = config.duration;
    this._hstsTimeout = config.hstsTimeout;
    this._id = config.id;
    this._name = config.name;
    this._packetCaptureTemplate = config.packetCaptureTemplate;
    this._retry = config.retry;
    this._uuid = config.uuid;
    this._authMethod.internalValue = config.authMethod;
    this._samplingEnable.internalValue = config.samplingEnable;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // account_lock - computed: false, optional: true, required: false
  private _accountLock?: number; 
  public get accountLock() {
    return this.getNumberAttribute('account_lock');
  }
  public set accountLock(value: number) {
    this._accountLock = value;
  }
  public resetAccountLock() {
    this._accountLock = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountLockInput() {
    return this._accountLock;
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: number; 
  public get duration() {
    return this.getNumberAttribute('duration');
  }
  public set duration(value: number) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // hsts_timeout - computed: false, optional: true, required: false
  private _hstsTimeout?: number; 
  public get hstsTimeout() {
    return this.getNumberAttribute('hsts_timeout');
  }
  public set hstsTimeout(value: number) {
    this._hstsTimeout = value;
  }
  public resetHstsTimeout() {
    this._hstsTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hstsTimeoutInput() {
    return this._hstsTimeout;
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

  // packet_capture_template - computed: false, optional: true, required: false
  private _packetCaptureTemplate?: string; 
  public get packetCaptureTemplate() {
    return this.getStringAttribute('packet_capture_template');
  }
  public set packetCaptureTemplate(value: string) {
    this._packetCaptureTemplate = value;
  }
  public resetPacketCaptureTemplate() {
    this._packetCaptureTemplate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get packetCaptureTemplateInput() {
    return this._packetCaptureTemplate;
  }

  // retry - computed: false, optional: true, required: false
  private _retry?: number; 
  public get retry() {
    return this.getNumberAttribute('retry');
  }
  public set retry(value: number) {
    this._retry = value;
  }
  public resetRetry() {
    this._retry = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // auth_method - computed: false, optional: true, required: false
  private _authMethod = new AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodOutputReference(this, "auth_method");
  public get authMethod() {
    return this._authMethod;
  }
  public putAuthMethod(value: AamAuthenticationLogonHttpAuthenticateInstanceAuthMethod) {
    this._authMethod.internalValue = value;
  }
  public resetAuthMethod() {
    this._authMethod.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authMethodInput() {
    return this._authMethod.internalValue;
  }

  // sampling_enable - computed: false, optional: true, required: false
  private _samplingEnable = new AamAuthenticationLogonHttpAuthenticateInstanceSamplingEnableList(this, "sampling_enable", false);
  public get samplingEnable() {
    return this._samplingEnable;
  }
  public putSamplingEnable(value: AamAuthenticationLogonHttpAuthenticateInstanceSamplingEnable[] | cdktf.IResolvable) {
    this._samplingEnable.internalValue = value;
  }
  public resetSamplingEnable() {
    this._samplingEnable.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get samplingEnableInput() {
    return this._samplingEnable.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_lock: cdktf.numberToTerraform(this._accountLock),
      duration: cdktf.numberToTerraform(this._duration),
      hsts_timeout: cdktf.numberToTerraform(this._hstsTimeout),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      packet_capture_template: cdktf.stringToTerraform(this._packetCaptureTemplate),
      retry: cdktf.numberToTerraform(this._retry),
      uuid: cdktf.stringToTerraform(this._uuid),
      auth_method: aamAuthenticationLogonHttpAuthenticateInstanceAuthMethodToTerraform(this._authMethod.internalValue),
      sampling_enable: cdktf.listMapper(aamAuthenticationLogonHttpAuthenticateInstanceSamplingEnableToTerraform, true)(this._samplingEnable.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      account_lock: {
        value: cdktf.numberToHclTerraform(this._accountLock),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      duration: {
        value: cdktf.numberToHclTerraform(this._duration),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      hsts_timeout: {
        value: cdktf.numberToHclTerraform(this._hstsTimeout),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      packet_capture_template: {
        value: cdktf.stringToHclTerraform(this._packetCaptureTemplate),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retry: {
        value: cdktf.numberToHclTerraform(this._retry),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      auth_method: {
        value: aamAuthenticationLogonHttpAuthenticateInstanceAuthMethodToHclTerraform(this._authMethod.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationLogonHttpAuthenticateInstanceAuthMethodList",
      },
      sampling_enable: {
        value: cdktf.listMapperHcl(aamAuthenticationLogonHttpAuthenticateInstanceSamplingEnableToHclTerraform, true)(this._samplingEnable.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationLogonHttpAuthenticateInstanceSamplingEnableList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
