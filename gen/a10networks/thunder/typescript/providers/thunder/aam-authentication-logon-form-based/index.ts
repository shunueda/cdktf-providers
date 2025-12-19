// https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthenticationLogonFormBasedConfig extends cdktf.TerraformMetaArguments {
  /**
  * Lock the account when the failed logon attempts is exceeded
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#account_lock AamAuthenticationLogonFormBased#account_lock}
  */
  readonly accountLock?: number;
  /**
  * Specify challenge variable name in form submission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#challenge_variable AamAuthenticationLogonFormBased#challenge_variable}
  */
  readonly challengeVariable?: string;
  /**
  * The time an account remains locked in seconds (default 1800)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#duration AamAuthenticationLogonFormBased#duration}
  */
  readonly duration?: number;
  /**
  * Set HSTS policy expired timeout in seconds, 0 means to disable HSTS policy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#hsts_timeout AamAuthenticationLogonFormBased#hsts_timeout}
  */
  readonly hstsTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#id AamAuthenticationLogonFormBased#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specify form-based authentication logon name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#name AamAuthenticationLogonFormBased#name}
  */
  readonly name: string;
  /**
  * Specify new-pin variable name in form submission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#new_pin_variable AamAuthenticationLogonFormBased#new_pin_variable}
  */
  readonly newPinVariable?: string;
  /**
  * Specify next-token variable name in form submission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#next_token_variable AamAuthenticationLogonFormBased#next_token_variable}
  */
  readonly nextTokenVariable?: string;
  /**
  * Maximum number of consecutive failed logon attempts (default 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#retry AamAuthenticationLogonFormBased#retry}
  */
  readonly retry?: number;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#user_tag AamAuthenticationLogonFormBased#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#uuid AamAuthenticationLogonFormBased#uuid}
  */
  readonly uuid?: string;
  /**
  * cp_page_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#cp_page_cfg AamAuthenticationLogonFormBased#cp_page_cfg}
  */
  readonly cpPageCfg?: AamAuthenticationLogonFormBasedCpPageCfg;
  /**
  * csp_support block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#csp_support AamAuthenticationLogonFormBased#csp_support}
  */
  readonly cspSupport?: AamAuthenticationLogonFormBasedCspSupport;
  /**
  * logon_page_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#logon_page_cfg AamAuthenticationLogonFormBased#logon_page_cfg}
  */
  readonly logonPageCfg?: AamAuthenticationLogonFormBasedLogonPageCfg;
  /**
  * notify_cp_page_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#notify_cp_page_cfg AamAuthenticationLogonFormBased#notify_cp_page_cfg}
  */
  readonly notifyCpPageCfg?: AamAuthenticationLogonFormBasedNotifyCpPageCfg;
  /**
  * portal block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#portal AamAuthenticationLogonFormBased#portal}
  */
  readonly portal?: AamAuthenticationLogonFormBasedPortal;
}
export interface AamAuthenticationLogonFormBasedCpPageCfg {
  /**
  * Specify changepassword form submission action url (changepassword action url)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#changepassword_url AamAuthenticationLogonFormBased#changepassword_url}
  */
  readonly changepasswordUrl?: string;
  /**
  * 'changepassword-password-confirm-variable': Specify password confirm variable name in form submission;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#cp_cfm_pwd_enum AamAuthenticationLogonFormBased#cp_cfm_pwd_enum}
  */
  readonly cpCfmPwdEnum?: string;
  /**
  * Specify password confirm variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#cp_cfm_pwd_var AamAuthenticationLogonFormBased#cp_cfm_pwd_var}
  */
  readonly cpCfmPwdVar?: string;
  /**
  * 'changepassword-new-password-variable': Specify new password variable name in form submission;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#cp_new_pwd_enum AamAuthenticationLogonFormBased#cp_new_pwd_enum}
  */
  readonly cpNewPwdEnum?: string;
  /**
  * Specify new password variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#cp_new_pwd_var AamAuthenticationLogonFormBased#cp_new_pwd_var}
  */
  readonly cpNewPwdVar?: string;
  /**
  * 'changepassword-old-password-variable': Specify old password variable name in form submission;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#cp_old_pwd_enum AamAuthenticationLogonFormBased#cp_old_pwd_enum}
  */
  readonly cpOldPwdEnum?: string;
  /**
  * Specify old password variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#cp_old_pwd_var AamAuthenticationLogonFormBased#cp_old_pwd_var}
  */
  readonly cpOldPwdVar?: string;
  /**
  * 'changepassword-username-variable': Specify username variable name in form submission;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#cp_user_enum AamAuthenticationLogonFormBased#cp_user_enum}
  */
  readonly cpUserEnum?: string;
  /**
  * Specify username variable name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#cp_user_var AamAuthenticationLogonFormBased#cp_user_var}
  */
  readonly cpUserVar?: string;
}

export function aamAuthenticationLogonFormBasedCpPageCfgToTerraform(struct?: AamAuthenticationLogonFormBasedCpPageCfgOutputReference | AamAuthenticationLogonFormBasedCpPageCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    changepassword_url: cdktf.stringToTerraform(struct!.changepasswordUrl),
    cp_cfm_pwd_enum: cdktf.stringToTerraform(struct!.cpCfmPwdEnum),
    cp_cfm_pwd_var: cdktf.stringToTerraform(struct!.cpCfmPwdVar),
    cp_new_pwd_enum: cdktf.stringToTerraform(struct!.cpNewPwdEnum),
    cp_new_pwd_var: cdktf.stringToTerraform(struct!.cpNewPwdVar),
    cp_old_pwd_enum: cdktf.stringToTerraform(struct!.cpOldPwdEnum),
    cp_old_pwd_var: cdktf.stringToTerraform(struct!.cpOldPwdVar),
    cp_user_enum: cdktf.stringToTerraform(struct!.cpUserEnum),
    cp_user_var: cdktf.stringToTerraform(struct!.cpUserVar),
  }
}


export function aamAuthenticationLogonFormBasedCpPageCfgToHclTerraform(struct?: AamAuthenticationLogonFormBasedCpPageCfgOutputReference | AamAuthenticationLogonFormBasedCpPageCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    changepassword_url: {
      value: cdktf.stringToHclTerraform(struct!.changepasswordUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cp_cfm_pwd_enum: {
      value: cdktf.stringToHclTerraform(struct!.cpCfmPwdEnum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cp_cfm_pwd_var: {
      value: cdktf.stringToHclTerraform(struct!.cpCfmPwdVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cp_new_pwd_enum: {
      value: cdktf.stringToHclTerraform(struct!.cpNewPwdEnum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cp_new_pwd_var: {
      value: cdktf.stringToHclTerraform(struct!.cpNewPwdVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cp_old_pwd_enum: {
      value: cdktf.stringToHclTerraform(struct!.cpOldPwdEnum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cp_old_pwd_var: {
      value: cdktf.stringToHclTerraform(struct!.cpOldPwdVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cp_user_enum: {
      value: cdktf.stringToHclTerraform(struct!.cpUserEnum),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cp_user_var: {
      value: cdktf.stringToHclTerraform(struct!.cpUserVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationLogonFormBasedCpPageCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationLogonFormBasedCpPageCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changepasswordUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.changepasswordUrl = this._changepasswordUrl;
    }
    if (this._cpCfmPwdEnum !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpCfmPwdEnum = this._cpCfmPwdEnum;
    }
    if (this._cpCfmPwdVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpCfmPwdVar = this._cpCfmPwdVar;
    }
    if (this._cpNewPwdEnum !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpNewPwdEnum = this._cpNewPwdEnum;
    }
    if (this._cpNewPwdVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpNewPwdVar = this._cpNewPwdVar;
    }
    if (this._cpOldPwdEnum !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpOldPwdEnum = this._cpOldPwdEnum;
    }
    if (this._cpOldPwdVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpOldPwdVar = this._cpOldPwdVar;
    }
    if (this._cpUserEnum !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpUserEnum = this._cpUserEnum;
    }
    if (this._cpUserVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpUserVar = this._cpUserVar;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationLogonFormBasedCpPageCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._changepasswordUrl = undefined;
      this._cpCfmPwdEnum = undefined;
      this._cpCfmPwdVar = undefined;
      this._cpNewPwdEnum = undefined;
      this._cpNewPwdVar = undefined;
      this._cpOldPwdEnum = undefined;
      this._cpOldPwdVar = undefined;
      this._cpUserEnum = undefined;
      this._cpUserVar = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._changepasswordUrl = value.changepasswordUrl;
      this._cpCfmPwdEnum = value.cpCfmPwdEnum;
      this._cpCfmPwdVar = value.cpCfmPwdVar;
      this._cpNewPwdEnum = value.cpNewPwdEnum;
      this._cpNewPwdVar = value.cpNewPwdVar;
      this._cpOldPwdEnum = value.cpOldPwdEnum;
      this._cpOldPwdVar = value.cpOldPwdVar;
      this._cpUserEnum = value.cpUserEnum;
      this._cpUserVar = value.cpUserVar;
    }
  }

  // changepassword_url - computed: false, optional: true, required: false
  private _changepasswordUrl?: string; 
  public get changepasswordUrl() {
    return this.getStringAttribute('changepassword_url');
  }
  public set changepasswordUrl(value: string) {
    this._changepasswordUrl = value;
  }
  public resetChangepasswordUrl() {
    this._changepasswordUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changepasswordUrlInput() {
    return this._changepasswordUrl;
  }

  // cp_cfm_pwd_enum - computed: false, optional: true, required: false
  private _cpCfmPwdEnum?: string; 
  public get cpCfmPwdEnum() {
    return this.getStringAttribute('cp_cfm_pwd_enum');
  }
  public set cpCfmPwdEnum(value: string) {
    this._cpCfmPwdEnum = value;
  }
  public resetCpCfmPwdEnum() {
    this._cpCfmPwdEnum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpCfmPwdEnumInput() {
    return this._cpCfmPwdEnum;
  }

  // cp_cfm_pwd_var - computed: false, optional: true, required: false
  private _cpCfmPwdVar?: string; 
  public get cpCfmPwdVar() {
    return this.getStringAttribute('cp_cfm_pwd_var');
  }
  public set cpCfmPwdVar(value: string) {
    this._cpCfmPwdVar = value;
  }
  public resetCpCfmPwdVar() {
    this._cpCfmPwdVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpCfmPwdVarInput() {
    return this._cpCfmPwdVar;
  }

  // cp_new_pwd_enum - computed: false, optional: true, required: false
  private _cpNewPwdEnum?: string; 
  public get cpNewPwdEnum() {
    return this.getStringAttribute('cp_new_pwd_enum');
  }
  public set cpNewPwdEnum(value: string) {
    this._cpNewPwdEnum = value;
  }
  public resetCpNewPwdEnum() {
    this._cpNewPwdEnum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpNewPwdEnumInput() {
    return this._cpNewPwdEnum;
  }

  // cp_new_pwd_var - computed: false, optional: true, required: false
  private _cpNewPwdVar?: string; 
  public get cpNewPwdVar() {
    return this.getStringAttribute('cp_new_pwd_var');
  }
  public set cpNewPwdVar(value: string) {
    this._cpNewPwdVar = value;
  }
  public resetCpNewPwdVar() {
    this._cpNewPwdVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpNewPwdVarInput() {
    return this._cpNewPwdVar;
  }

  // cp_old_pwd_enum - computed: false, optional: true, required: false
  private _cpOldPwdEnum?: string; 
  public get cpOldPwdEnum() {
    return this.getStringAttribute('cp_old_pwd_enum');
  }
  public set cpOldPwdEnum(value: string) {
    this._cpOldPwdEnum = value;
  }
  public resetCpOldPwdEnum() {
    this._cpOldPwdEnum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpOldPwdEnumInput() {
    return this._cpOldPwdEnum;
  }

  // cp_old_pwd_var - computed: false, optional: true, required: false
  private _cpOldPwdVar?: string; 
  public get cpOldPwdVar() {
    return this.getStringAttribute('cp_old_pwd_var');
  }
  public set cpOldPwdVar(value: string) {
    this._cpOldPwdVar = value;
  }
  public resetCpOldPwdVar() {
    this._cpOldPwdVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpOldPwdVarInput() {
    return this._cpOldPwdVar;
  }

  // cp_user_enum - computed: false, optional: true, required: false
  private _cpUserEnum?: string; 
  public get cpUserEnum() {
    return this.getStringAttribute('cp_user_enum');
  }
  public set cpUserEnum(value: string) {
    this._cpUserEnum = value;
  }
  public resetCpUserEnum() {
    this._cpUserEnum = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpUserEnumInput() {
    return this._cpUserEnum;
  }

  // cp_user_var - computed: false, optional: true, required: false
  private _cpUserVar?: string; 
  public get cpUserVar() {
    return this.getStringAttribute('cp_user_var');
  }
  public set cpUserVar(value: string) {
    this._cpUserVar = value;
  }
  public resetCpUserVar() {
    this._cpUserVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpUserVarInput() {
    return this._cpUserVar;
  }
}
export interface AamAuthenticationLogonFormBasedCspSupport {
  /**
  * Set CSP frame-ancestors to none (also X-Frame-Options deny)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#none AamAuthenticationLogonFormBased#none}
  */
  readonly none?: number;
  /**
  * Set optional second customized CSP URI
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#optional_second_uri AamAuthenticationLogonFormBased#optional_second_uri}
  */
  readonly optionalSecondUri?: string;
  /**
  * Set CSP frame-ancestors to self (also X-Frame-Options same-origin)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#self AamAuthenticationLogonFormBased#self}
  */
  readonly selfAttribute?: number;
  /**
  * Set customized CSP frame-ancestors (maximum 2 URIs can be set)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#specificuri AamAuthenticationLogonFormBased#specificuri}
  */
  readonly specificuri?: string;
}

export function aamAuthenticationLogonFormBasedCspSupportToTerraform(struct?: AamAuthenticationLogonFormBasedCspSupportOutputReference | AamAuthenticationLogonFormBasedCspSupport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    none: cdktf.numberToTerraform(struct!.none),
    optional_second_uri: cdktf.stringToTerraform(struct!.optionalSecondUri),
    self: cdktf.numberToTerraform(struct!.selfAttribute),
    specificuri: cdktf.stringToTerraform(struct!.specificuri),
  }
}


export function aamAuthenticationLogonFormBasedCspSupportToHclTerraform(struct?: AamAuthenticationLogonFormBasedCspSupportOutputReference | AamAuthenticationLogonFormBasedCspSupport): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    none: {
      value: cdktf.numberToHclTerraform(struct!.none),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    optional_second_uri: {
      value: cdktf.stringToHclTerraform(struct!.optionalSecondUri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    self: {
      value: cdktf.numberToHclTerraform(struct!.selfAttribute),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    specificuri: {
      value: cdktf.stringToHclTerraform(struct!.specificuri),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationLogonFormBasedCspSupportOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationLogonFormBasedCspSupport | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._none !== undefined) {
      hasAnyValues = true;
      internalValueResult.none = this._none;
    }
    if (this._optionalSecondUri !== undefined) {
      hasAnyValues = true;
      internalValueResult.optionalSecondUri = this._optionalSecondUri;
    }
    if (this._self !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfAttribute = this._self;
    }
    if (this._specificuri !== undefined) {
      hasAnyValues = true;
      internalValueResult.specificuri = this._specificuri;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationLogonFormBasedCspSupport | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._none = undefined;
      this._optionalSecondUri = undefined;
      this._self = undefined;
      this._specificuri = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._none = value.none;
      this._optionalSecondUri = value.optionalSecondUri;
      this._self = value.selfAttribute;
      this._specificuri = value.specificuri;
    }
  }

  // none - computed: false, optional: true, required: false
  private _none?: number; 
  public get none() {
    return this.getNumberAttribute('none');
  }
  public set none(value: number) {
    this._none = value;
  }
  public resetNone() {
    this._none = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get noneInput() {
    return this._none;
  }

  // optional_second_uri - computed: false, optional: true, required: false
  private _optionalSecondUri?: string; 
  public get optionalSecondUri() {
    return this.getStringAttribute('optional_second_uri');
  }
  public set optionalSecondUri(value: string) {
    this._optionalSecondUri = value;
  }
  public resetOptionalSecondUri() {
    this._optionalSecondUri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionalSecondUriInput() {
    return this._optionalSecondUri;
  }

  // self - computed: false, optional: true, required: false
  private _self?: number; 
  public get selfAttribute() {
    return this.getNumberAttribute('self');
  }
  public set selfAttribute(value: number) {
    this._self = value;
  }
  public resetSelfAttribute() {
    this._self = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfAttributeInput() {
    return this._self;
  }

  // specificuri - computed: false, optional: true, required: false
  private _specificuri?: string; 
  public get specificuri() {
    return this.getStringAttribute('specificuri');
  }
  public set specificuri(value: string) {
    this._specificuri = value;
  }
  public resetSpecificuri() {
    this._specificuri = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specificuriInput() {
    return this._specificuri;
  }
}
export interface AamAuthenticationLogonFormBasedLogonPageCfg {
  /**
  * Specify form submission action url
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#action_url AamAuthenticationLogonFormBased#action_url}
  */
  readonly actionUrl?: string;
  /**
  * Specify authorization failure message shown in logon page (Specify error string, default is "Authorization failed. Please contact your system administrator.")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#authz_failure_message AamAuthenticationLogonFormBased#authz_failure_message}
  */
  readonly authzFailureMessage?: string;
  /**
  * Specify captcha variable name in form submission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#captcha_variable AamAuthenticationLogonFormBased#captcha_variable}
  */
  readonly captchaVariable?: string;
  /**
  * Don't display change password link on logon page forcibly even backend authentication server supports it (LDAP or Kerberos)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#disable_change_password_link AamAuthenticationLogonFormBased#disable_change_password_link}
  */
  readonly disableChangePasswordLink?: number;
  /**
  * Specify login failure message shown in logon page (Specify error string, default is "Invalid username or password. Please try again.")
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#login_failure_message AamAuthenticationLogonFormBased#login_failure_message}
  */
  readonly loginFailureMessage?: string;
  /**
  * Specify passcode variable name in form submission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#passcode_variable AamAuthenticationLogonFormBased#passcode_variable}
  */
  readonly passcodeVariable?: string;
  /**
  * Specify password variable name in form submission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#password_variable AamAuthenticationLogonFormBased#password_variable}
  */
  readonly passwordVariable?: string;
  /**
  * Specify username variable name in form submission
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#username_variable AamAuthenticationLogonFormBased#username_variable}
  */
  readonly usernameVariable?: string;
}

export function aamAuthenticationLogonFormBasedLogonPageCfgToTerraform(struct?: AamAuthenticationLogonFormBasedLogonPageCfgOutputReference | AamAuthenticationLogonFormBasedLogonPageCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_url: cdktf.stringToTerraform(struct!.actionUrl),
    authz_failure_message: cdktf.stringToTerraform(struct!.authzFailureMessage),
    captcha_variable: cdktf.stringToTerraform(struct!.captchaVariable),
    disable_change_password_link: cdktf.numberToTerraform(struct!.disableChangePasswordLink),
    login_failure_message: cdktf.stringToTerraform(struct!.loginFailureMessage),
    passcode_variable: cdktf.stringToTerraform(struct!.passcodeVariable),
    password_variable: cdktf.stringToTerraform(struct!.passwordVariable),
    username_variable: cdktf.stringToTerraform(struct!.usernameVariable),
  }
}


export function aamAuthenticationLogonFormBasedLogonPageCfgToHclTerraform(struct?: AamAuthenticationLogonFormBasedLogonPageCfgOutputReference | AamAuthenticationLogonFormBasedLogonPageCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action_url: {
      value: cdktf.stringToHclTerraform(struct!.actionUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    authz_failure_message: {
      value: cdktf.stringToHclTerraform(struct!.authzFailureMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    captcha_variable: {
      value: cdktf.stringToHclTerraform(struct!.captchaVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    disable_change_password_link: {
      value: cdktf.numberToHclTerraform(struct!.disableChangePasswordLink),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    login_failure_message: {
      value: cdktf.stringToHclTerraform(struct!.loginFailureMessage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passcode_variable: {
      value: cdktf.stringToHclTerraform(struct!.passcodeVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_variable: {
      value: cdktf.stringToHclTerraform(struct!.passwordVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_variable: {
      value: cdktf.stringToHclTerraform(struct!.usernameVariable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationLogonFormBasedLogonPageCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationLogonFormBasedLogonPageCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionUrl = this._actionUrl;
    }
    if (this._authzFailureMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.authzFailureMessage = this._authzFailureMessage;
    }
    if (this._captchaVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaVariable = this._captchaVariable;
    }
    if (this._disableChangePasswordLink !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableChangePasswordLink = this._disableChangePasswordLink;
    }
    if (this._loginFailureMessage !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginFailureMessage = this._loginFailureMessage;
    }
    if (this._passcodeVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.passcodeVariable = this._passcodeVariable;
    }
    if (this._passwordVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordVariable = this._passwordVariable;
    }
    if (this._usernameVariable !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameVariable = this._usernameVariable;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationLogonFormBasedLogonPageCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionUrl = undefined;
      this._authzFailureMessage = undefined;
      this._captchaVariable = undefined;
      this._disableChangePasswordLink = undefined;
      this._loginFailureMessage = undefined;
      this._passcodeVariable = undefined;
      this._passwordVariable = undefined;
      this._usernameVariable = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionUrl = value.actionUrl;
      this._authzFailureMessage = value.authzFailureMessage;
      this._captchaVariable = value.captchaVariable;
      this._disableChangePasswordLink = value.disableChangePasswordLink;
      this._loginFailureMessage = value.loginFailureMessage;
      this._passcodeVariable = value.passcodeVariable;
      this._passwordVariable = value.passwordVariable;
      this._usernameVariable = value.usernameVariable;
    }
  }

  // action_url - computed: false, optional: true, required: false
  private _actionUrl?: string; 
  public get actionUrl() {
    return this.getStringAttribute('action_url');
  }
  public set actionUrl(value: string) {
    this._actionUrl = value;
  }
  public resetActionUrl() {
    this._actionUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionUrlInput() {
    return this._actionUrl;
  }

  // authz_failure_message - computed: false, optional: true, required: false
  private _authzFailureMessage?: string; 
  public get authzFailureMessage() {
    return this.getStringAttribute('authz_failure_message');
  }
  public set authzFailureMessage(value: string) {
    this._authzFailureMessage = value;
  }
  public resetAuthzFailureMessage() {
    this._authzFailureMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authzFailureMessageInput() {
    return this._authzFailureMessage;
  }

  // captcha_variable - computed: false, optional: true, required: false
  private _captchaVariable?: string; 
  public get captchaVariable() {
    return this.getStringAttribute('captcha_variable');
  }
  public set captchaVariable(value: string) {
    this._captchaVariable = value;
  }
  public resetCaptchaVariable() {
    this._captchaVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaVariableInput() {
    return this._captchaVariable;
  }

  // disable_change_password_link - computed: false, optional: true, required: false
  private _disableChangePasswordLink?: number; 
  public get disableChangePasswordLink() {
    return this.getNumberAttribute('disable_change_password_link');
  }
  public set disableChangePasswordLink(value: number) {
    this._disableChangePasswordLink = value;
  }
  public resetDisableChangePasswordLink() {
    this._disableChangePasswordLink = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableChangePasswordLinkInput() {
    return this._disableChangePasswordLink;
  }

  // login_failure_message - computed: false, optional: true, required: false
  private _loginFailureMessage?: string; 
  public get loginFailureMessage() {
    return this.getStringAttribute('login_failure_message');
  }
  public set loginFailureMessage(value: string) {
    this._loginFailureMessage = value;
  }
  public resetLoginFailureMessage() {
    this._loginFailureMessage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginFailureMessageInput() {
    return this._loginFailureMessage;
  }

  // passcode_variable - computed: false, optional: true, required: false
  private _passcodeVariable?: string; 
  public get passcodeVariable() {
    return this.getStringAttribute('passcode_variable');
  }
  public set passcodeVariable(value: string) {
    this._passcodeVariable = value;
  }
  public resetPasscodeVariable() {
    this._passcodeVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passcodeVariableInput() {
    return this._passcodeVariable;
  }

  // password_variable - computed: false, optional: true, required: false
  private _passwordVariable?: string; 
  public get passwordVariable() {
    return this.getStringAttribute('password_variable');
  }
  public set passwordVariable(value: string) {
    this._passwordVariable = value;
  }
  public resetPasswordVariable() {
    this._passwordVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordVariableInput() {
    return this._passwordVariable;
  }

  // username_variable - computed: false, optional: true, required: false
  private _usernameVariable?: string; 
  public get usernameVariable() {
    return this.getStringAttribute('username_variable');
  }
  public set usernameVariable(value: string) {
    this._usernameVariable = value;
  }
  public resetUsernameVariable() {
    this._usernameVariable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameVariableInput() {
    return this._usernameVariable;
  }
}
export interface AamAuthenticationLogonFormBasedNotifyCpPageCfg {
  /**
  * Specify change password action url for notifychangepassword form
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#notifychangepassword_change_url AamAuthenticationLogonFormBased#notifychangepassword_change_url}
  */
  readonly notifychangepasswordChangeUrl?: string;
  /**
  * Specify continue action url for notifychangepassword form
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#notifychangepassword_continue_url AamAuthenticationLogonFormBased#notifychangepassword_continue_url}
  */
  readonly notifychangepasswordContinueUrl?: string;
}

export function aamAuthenticationLogonFormBasedNotifyCpPageCfgToTerraform(struct?: AamAuthenticationLogonFormBasedNotifyCpPageCfgOutputReference | AamAuthenticationLogonFormBasedNotifyCpPageCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    notifychangepassword_change_url: cdktf.stringToTerraform(struct!.notifychangepasswordChangeUrl),
    notifychangepassword_continue_url: cdktf.stringToTerraform(struct!.notifychangepasswordContinueUrl),
  }
}


export function aamAuthenticationLogonFormBasedNotifyCpPageCfgToHclTerraform(struct?: AamAuthenticationLogonFormBasedNotifyCpPageCfgOutputReference | AamAuthenticationLogonFormBasedNotifyCpPageCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    notifychangepassword_change_url: {
      value: cdktf.stringToHclTerraform(struct!.notifychangepasswordChangeUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notifychangepassword_continue_url: {
      value: cdktf.stringToHclTerraform(struct!.notifychangepasswordContinueUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationLogonFormBasedNotifyCpPageCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationLogonFormBasedNotifyCpPageCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._notifychangepasswordChangeUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifychangepasswordChangeUrl = this._notifychangepasswordChangeUrl;
    }
    if (this._notifychangepasswordContinueUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifychangepasswordContinueUrl = this._notifychangepasswordContinueUrl;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationLogonFormBasedNotifyCpPageCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._notifychangepasswordChangeUrl = undefined;
      this._notifychangepasswordContinueUrl = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._notifychangepasswordChangeUrl = value.notifychangepasswordChangeUrl;
      this._notifychangepasswordContinueUrl = value.notifychangepasswordContinueUrl;
    }
  }

  // notifychangepassword_change_url - computed: false, optional: true, required: false
  private _notifychangepasswordChangeUrl?: string; 
  public get notifychangepasswordChangeUrl() {
    return this.getStringAttribute('notifychangepassword_change_url');
  }
  public set notifychangepasswordChangeUrl(value: string) {
    this._notifychangepasswordChangeUrl = value;
  }
  public resetNotifychangepasswordChangeUrl() {
    this._notifychangepasswordChangeUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifychangepasswordChangeUrlInput() {
    return this._notifychangepasswordChangeUrl;
  }

  // notifychangepassword_continue_url - computed: false, optional: true, required: false
  private _notifychangepasswordContinueUrl?: string; 
  public get notifychangepasswordContinueUrl() {
    return this.getStringAttribute('notifychangepassword_continue_url');
  }
  public set notifychangepasswordContinueUrl(value: string) {
    this._notifychangepasswordContinueUrl = value;
  }
  public resetNotifychangepasswordContinueUrl() {
    this._notifychangepasswordContinueUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifychangepasswordContinueUrlInput() {
    return this._notifychangepasswordContinueUrl;
  }
}
export interface AamAuthenticationLogonFormBasedPortal {
  /**
  * Specify challenge page name for RSA-RADIUS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#challenge_page AamAuthenticationLogonFormBased#challenge_page}
  */
  readonly challengePage?: string;
  /**
  * Specify change password page name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#changepasswordpage AamAuthenticationLogonFormBased#changepasswordpage}
  */
  readonly changepasswordpage?: string;
  /**
  * Use default portal
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#default_portal AamAuthenticationLogonFormBased#default_portal}
  */
  readonly defaultPortal?: number;
  /**
  * Specify logon fail page name (portal fail page name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#failpage AamAuthenticationLogonFormBased#failpage}
  */
  readonly failpage?: string;
  /**
  * Specify logon page name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#logon AamAuthenticationLogonFormBased#logon}
  */
  readonly logon?: string;
  /**
  * Specify new PIN page name for RSA-RADIUS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#new_pin_page AamAuthenticationLogonFormBased#new_pin_page}
  */
  readonly newPinPage?: string;
  /**
  * Specify next token page name for RSA-RADIUS
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#next_token_page AamAuthenticationLogonFormBased#next_token_page}
  */
  readonly nextTokenPage?: string;
  /**
  * Specify change password notification page name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#notifychangepasswordpage AamAuthenticationLogonFormBased#notifychangepasswordpage}
  */
  readonly notifychangepasswordpage?: string;
  /**
  * Specify portal name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#portal_name AamAuthenticationLogonFormBased#portal_name}
  */
  readonly portalName?: string;
}

export function aamAuthenticationLogonFormBasedPortalToTerraform(struct?: AamAuthenticationLogonFormBasedPortalOutputReference | AamAuthenticationLogonFormBasedPortal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    challenge_page: cdktf.stringToTerraform(struct!.challengePage),
    changepasswordpage: cdktf.stringToTerraform(struct!.changepasswordpage),
    default_portal: cdktf.numberToTerraform(struct!.defaultPortal),
    failpage: cdktf.stringToTerraform(struct!.failpage),
    logon: cdktf.stringToTerraform(struct!.logon),
    new_pin_page: cdktf.stringToTerraform(struct!.newPinPage),
    next_token_page: cdktf.stringToTerraform(struct!.nextTokenPage),
    notifychangepasswordpage: cdktf.stringToTerraform(struct!.notifychangepasswordpage),
    portal_name: cdktf.stringToTerraform(struct!.portalName),
  }
}


export function aamAuthenticationLogonFormBasedPortalToHclTerraform(struct?: AamAuthenticationLogonFormBasedPortalOutputReference | AamAuthenticationLogonFormBasedPortal): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    challenge_page: {
      value: cdktf.stringToHclTerraform(struct!.challengePage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    changepasswordpage: {
      value: cdktf.stringToHclTerraform(struct!.changepasswordpage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    default_portal: {
      value: cdktf.numberToHclTerraform(struct!.defaultPortal),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    failpage: {
      value: cdktf.stringToHclTerraform(struct!.failpage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    logon: {
      value: cdktf.stringToHclTerraform(struct!.logon),
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
    next_token_page: {
      value: cdktf.stringToHclTerraform(struct!.nextTokenPage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    notifychangepasswordpage: {
      value: cdktf.stringToHclTerraform(struct!.notifychangepasswordpage),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    portal_name: {
      value: cdktf.stringToHclTerraform(struct!.portalName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationLogonFormBasedPortalOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationLogonFormBasedPortal | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._challengePage !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengePage = this._challengePage;
    }
    if (this._changepasswordpage !== undefined) {
      hasAnyValues = true;
      internalValueResult.changepasswordpage = this._changepasswordpage;
    }
    if (this._defaultPortal !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultPortal = this._defaultPortal;
    }
    if (this._failpage !== undefined) {
      hasAnyValues = true;
      internalValueResult.failpage = this._failpage;
    }
    if (this._logon !== undefined) {
      hasAnyValues = true;
      internalValueResult.logon = this._logon;
    }
    if (this._newPinPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.newPinPage = this._newPinPage;
    }
    if (this._nextTokenPage !== undefined) {
      hasAnyValues = true;
      internalValueResult.nextTokenPage = this._nextTokenPage;
    }
    if (this._notifychangepasswordpage !== undefined) {
      hasAnyValues = true;
      internalValueResult.notifychangepasswordpage = this._notifychangepasswordpage;
    }
    if (this._portalName !== undefined) {
      hasAnyValues = true;
      internalValueResult.portalName = this._portalName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationLogonFormBasedPortal | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._challengePage = undefined;
      this._changepasswordpage = undefined;
      this._defaultPortal = undefined;
      this._failpage = undefined;
      this._logon = undefined;
      this._newPinPage = undefined;
      this._nextTokenPage = undefined;
      this._notifychangepasswordpage = undefined;
      this._portalName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._challengePage = value.challengePage;
      this._changepasswordpage = value.changepasswordpage;
      this._defaultPortal = value.defaultPortal;
      this._failpage = value.failpage;
      this._logon = value.logon;
      this._newPinPage = value.newPinPage;
      this._nextTokenPage = value.nextTokenPage;
      this._notifychangepasswordpage = value.notifychangepasswordpage;
      this._portalName = value.portalName;
    }
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

  // changepasswordpage - computed: false, optional: true, required: false
  private _changepasswordpage?: string; 
  public get changepasswordpage() {
    return this.getStringAttribute('changepasswordpage');
  }
  public set changepasswordpage(value: string) {
    this._changepasswordpage = value;
  }
  public resetChangepasswordpage() {
    this._changepasswordpage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changepasswordpageInput() {
    return this._changepasswordpage;
  }

  // default_portal - computed: false, optional: true, required: false
  private _defaultPortal?: number; 
  public get defaultPortal() {
    return this.getNumberAttribute('default_portal');
  }
  public set defaultPortal(value: number) {
    this._defaultPortal = value;
  }
  public resetDefaultPortal() {
    this._defaultPortal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultPortalInput() {
    return this._defaultPortal;
  }

  // failpage - computed: false, optional: true, required: false
  private _failpage?: string; 
  public get failpage() {
    return this.getStringAttribute('failpage');
  }
  public set failpage(value: string) {
    this._failpage = value;
  }
  public resetFailpage() {
    this._failpage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failpageInput() {
    return this._failpage;
  }

  // logon - computed: false, optional: true, required: false
  private _logon?: string; 
  public get logon() {
    return this.getStringAttribute('logon');
  }
  public set logon(value: string) {
    this._logon = value;
  }
  public resetLogon() {
    this._logon = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logonInput() {
    return this._logon;
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

  // notifychangepasswordpage - computed: false, optional: true, required: false
  private _notifychangepasswordpage?: string; 
  public get notifychangepasswordpage() {
    return this.getStringAttribute('notifychangepasswordpage');
  }
  public set notifychangepasswordpage(value: string) {
    this._notifychangepasswordpage = value;
  }
  public resetNotifychangepasswordpage() {
    this._notifychangepasswordpage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifychangepasswordpageInput() {
    return this._notifychangepasswordpage;
  }

  // portal_name - computed: false, optional: true, required: false
  private _portalName?: string; 
  public get portalName() {
    return this.getStringAttribute('portal_name');
  }
  public set portalName(value: string) {
    this._portalName = value;
  }
  public resetPortalName() {
    this._portalName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalNameInput() {
    return this._portalName;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based thunder_aam_authentication_logon_form_based}
*/
export class AamAuthenticationLogonFormBased extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_logon_form_based";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthenticationLogonFormBased resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthenticationLogonFormBased to import
  * @param importFromId The id of the existing AamAuthenticationLogonFormBased that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthenticationLogonFormBased to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_logon_form_based", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.5.0/docs/resources/aam_authentication_logon_form_based thunder_aam_authentication_logon_form_based} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthenticationLogonFormBasedConfig
  */
  public constructor(scope: Construct, id: string, config: AamAuthenticationLogonFormBasedConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_logon_form_based',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
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
    this._challengeVariable = config.challengeVariable;
    this._duration = config.duration;
    this._hstsTimeout = config.hstsTimeout;
    this._id = config.id;
    this._name = config.name;
    this._newPinVariable = config.newPinVariable;
    this._nextTokenVariable = config.nextTokenVariable;
    this._retry = config.retry;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._cpPageCfg.internalValue = config.cpPageCfg;
    this._cspSupport.internalValue = config.cspSupport;
    this._logonPageCfg.internalValue = config.logonPageCfg;
    this._notifyCpPageCfg.internalValue = config.notifyCpPageCfg;
    this._portal.internalValue = config.portal;
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

  // user_tag - computed: false, optional: true, required: false
  private _userTag?: string; 
  public get userTag() {
    return this.getStringAttribute('user_tag');
  }
  public set userTag(value: string) {
    this._userTag = value;
  }
  public resetUserTag() {
    this._userTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTagInput() {
    return this._userTag;
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

  // cp_page_cfg - computed: false, optional: true, required: false
  private _cpPageCfg = new AamAuthenticationLogonFormBasedCpPageCfgOutputReference(this, "cp_page_cfg");
  public get cpPageCfg() {
    return this._cpPageCfg;
  }
  public putCpPageCfg(value: AamAuthenticationLogonFormBasedCpPageCfg) {
    this._cpPageCfg.internalValue = value;
  }
  public resetCpPageCfg() {
    this._cpPageCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpPageCfgInput() {
    return this._cpPageCfg.internalValue;
  }

  // csp_support - computed: false, optional: true, required: false
  private _cspSupport = new AamAuthenticationLogonFormBasedCspSupportOutputReference(this, "csp_support");
  public get cspSupport() {
    return this._cspSupport;
  }
  public putCspSupport(value: AamAuthenticationLogonFormBasedCspSupport) {
    this._cspSupport.internalValue = value;
  }
  public resetCspSupport() {
    this._cspSupport.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cspSupportInput() {
    return this._cspSupport.internalValue;
  }

  // logon_page_cfg - computed: false, optional: true, required: false
  private _logonPageCfg = new AamAuthenticationLogonFormBasedLogonPageCfgOutputReference(this, "logon_page_cfg");
  public get logonPageCfg() {
    return this._logonPageCfg;
  }
  public putLogonPageCfg(value: AamAuthenticationLogonFormBasedLogonPageCfg) {
    this._logonPageCfg.internalValue = value;
  }
  public resetLogonPageCfg() {
    this._logonPageCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logonPageCfgInput() {
    return this._logonPageCfg.internalValue;
  }

  // notify_cp_page_cfg - computed: false, optional: true, required: false
  private _notifyCpPageCfg = new AamAuthenticationLogonFormBasedNotifyCpPageCfgOutputReference(this, "notify_cp_page_cfg");
  public get notifyCpPageCfg() {
    return this._notifyCpPageCfg;
  }
  public putNotifyCpPageCfg(value: AamAuthenticationLogonFormBasedNotifyCpPageCfg) {
    this._notifyCpPageCfg.internalValue = value;
  }
  public resetNotifyCpPageCfg() {
    this._notifyCpPageCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyCpPageCfgInput() {
    return this._notifyCpPageCfg.internalValue;
  }

  // portal - computed: false, optional: true, required: false
  private _portal = new AamAuthenticationLogonFormBasedPortalOutputReference(this, "portal");
  public get portal() {
    return this._portal;
  }
  public putPortal(value: AamAuthenticationLogonFormBasedPortal) {
    this._portal.internalValue = value;
  }
  public resetPortal() {
    this._portal.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portalInput() {
    return this._portal.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      account_lock: cdktf.numberToTerraform(this._accountLock),
      challenge_variable: cdktf.stringToTerraform(this._challengeVariable),
      duration: cdktf.numberToTerraform(this._duration),
      hsts_timeout: cdktf.numberToTerraform(this._hstsTimeout),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      new_pin_variable: cdktf.stringToTerraform(this._newPinVariable),
      next_token_variable: cdktf.stringToTerraform(this._nextTokenVariable),
      retry: cdktf.numberToTerraform(this._retry),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      cp_page_cfg: aamAuthenticationLogonFormBasedCpPageCfgToTerraform(this._cpPageCfg.internalValue),
      csp_support: aamAuthenticationLogonFormBasedCspSupportToTerraform(this._cspSupport.internalValue),
      logon_page_cfg: aamAuthenticationLogonFormBasedLogonPageCfgToTerraform(this._logonPageCfg.internalValue),
      notify_cp_page_cfg: aamAuthenticationLogonFormBasedNotifyCpPageCfgToTerraform(this._notifyCpPageCfg.internalValue),
      portal: aamAuthenticationLogonFormBasedPortalToTerraform(this._portal.internalValue),
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
      challenge_variable: {
        value: cdktf.stringToHclTerraform(this._challengeVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
      new_pin_variable: {
        value: cdktf.stringToHclTerraform(this._newPinVariable),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      next_token_variable: {
        value: cdktf.stringToHclTerraform(this._nextTokenVariable),
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
      user_tag: {
        value: cdktf.stringToHclTerraform(this._userTag),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cp_page_cfg: {
        value: aamAuthenticationLogonFormBasedCpPageCfgToHclTerraform(this._cpPageCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationLogonFormBasedCpPageCfgList",
      },
      csp_support: {
        value: aamAuthenticationLogonFormBasedCspSupportToHclTerraform(this._cspSupport.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationLogonFormBasedCspSupportList",
      },
      logon_page_cfg: {
        value: aamAuthenticationLogonFormBasedLogonPageCfgToHclTerraform(this._logonPageCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationLogonFormBasedLogonPageCfgList",
      },
      notify_cp_page_cfg: {
        value: aamAuthenticationLogonFormBasedNotifyCpPageCfgToHclTerraform(this._notifyCpPageCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationLogonFormBasedNotifyCpPageCfgList",
      },
      portal: {
        value: aamAuthenticationLogonFormBasedPortalToHclTerraform(this._portal.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationLogonFormBasedPortalList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
