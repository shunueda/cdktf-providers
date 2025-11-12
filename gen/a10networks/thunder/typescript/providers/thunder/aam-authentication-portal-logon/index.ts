// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthenticationPortalLogonAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specify form action URL in default logon page (Default: /logon.fo)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#action_url AamAuthenticationPortalLogonA#action_url}
  */
  readonly actionUrl?: string;
  /**
  * 'reCAPTCHAv2-checkbox': Google reCAPTCHAv2 Checkbox; 'reCAPTCHAv2-invisible': Google reCAPTCHAv2 Invisible; 'reCAPTCHAv3': Google reCAPTCHAv3;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#captcha_type AamAuthenticationPortalLogonA#captcha_type}
  */
  readonly captchaType?: string;
  /**
  * Enable CAPTCHA in deafult logon page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#enable_captcha AamAuthenticationPortalLogonA#enable_captcha}
  */
  readonly enableCaptcha?: number;
  /**
  * Enable passcode field in default logon page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#enable_passcode AamAuthenticationPortalLogonA#enable_passcode}
  */
  readonly enablePasscode?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#id AamAuthenticationPortalLogonA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#name AamAuthenticationPortalLogonA#name}
  */
  readonly name: string;
  /**
  * Specify passcode variable name in default logon page (Default: passcode)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#passcode_var AamAuthenticationPortalLogonA#passcode_var}
  */
  readonly passcodeVar?: string;
  /**
  * Specify password variable name in default logon page (Default: pwd)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#password_var AamAuthenticationPortalLogonA#password_var}
  */
  readonly passwordVar?: string;
  /**
  * Site key string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#site_key_string AamAuthenticationPortalLogonA#site_key_string}
  */
  readonly siteKeyString?: string;
  /**
  * Specify submit button text in default logon page (Default: Log In)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#submit_text AamAuthenticationPortalLogonA#submit_text}
  */
  readonly submitText?: string;
  /**
  * Specify username variable name in default logon page (Default: user)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#username_var AamAuthenticationPortalLogonA#username_var}
  */
  readonly usernameVar?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#uuid AamAuthenticationPortalLogonA#uuid}
  */
  readonly uuid?: string;
  /**
  * background block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#background AamAuthenticationPortalLogonA#background}
  */
  readonly background?: AamAuthenticationPortalLogonBackgroundA;
  /**
  * fail_msg_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#fail_msg_cfg AamAuthenticationPortalLogonA#fail_msg_cfg}
  */
  readonly failMsgCfg?: AamAuthenticationPortalLogonFailMsgCfgA;
  /**
  * passcode_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#passcode_cfg AamAuthenticationPortalLogonA#passcode_cfg}
  */
  readonly passcodeCfg?: AamAuthenticationPortalLogonPasscodeCfgA;
  /**
  * password_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#password_cfg AamAuthenticationPortalLogonA#password_cfg}
  */
  readonly passwordCfg?: AamAuthenticationPortalLogonPasswordCfgA;
  /**
  * recaptcha_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#recaptcha_cfg AamAuthenticationPortalLogonA#recaptcha_cfg}
  */
  readonly recaptchaCfg?: AamAuthenticationPortalLogonRecaptchaCfgA;
  /**
  * username_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#username_cfg AamAuthenticationPortalLogonA#username_cfg}
  */
  readonly usernameCfg?: AamAuthenticationPortalLogonUsernameCfgA;
}
export interface AamAuthenticationPortalLogonBackgroundA {
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#bgcolor_name AamAuthenticationPortalLogonA#bgcolor_name}
  */
  readonly bgcolorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#bgcolor_value AamAuthenticationPortalLogonA#bgcolor_value}
  */
  readonly bgcolorValue?: string;
  /**
  * Specify background image filename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#bgfile AamAuthenticationPortalLogonA#bgfile}
  */
  readonly bgfile?: string;
  /**
  * 'tile': Tile; 'stretch': Stretch; 'fit': Fit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#bgstyle AamAuthenticationPortalLogonA#bgstyle}
  */
  readonly bgstyle?: string;
}

export function aamAuthenticationPortalLogonBackgroundAToTerraform(struct?: AamAuthenticationPortalLogonBackgroundAOutputReference | AamAuthenticationPortalLogonBackgroundA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    bgcolor_name: cdktf.stringToTerraform(struct!.bgcolorName),
    bgcolor_value: cdktf.stringToTerraform(struct!.bgcolorValue),
    bgfile: cdktf.stringToTerraform(struct!.bgfile),
    bgstyle: cdktf.stringToTerraform(struct!.bgstyle),
  }
}


export function aamAuthenticationPortalLogonBackgroundAToHclTerraform(struct?: AamAuthenticationPortalLogonBackgroundAOutputReference | AamAuthenticationPortalLogonBackgroundA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    bgcolor_name: {
      value: cdktf.stringToHclTerraform(struct!.bgcolorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgcolor_value: {
      value: cdktf.stringToHclTerraform(struct!.bgcolorValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgfile: {
      value: cdktf.stringToHclTerraform(struct!.bgfile),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bgstyle: {
      value: cdktf.stringToHclTerraform(struct!.bgstyle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationPortalLogonBackgroundAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalLogonBackgroundA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bgcolorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgcolorName = this._bgcolorName;
    }
    if (this._bgcolorValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgcolorValue = this._bgcolorValue;
    }
    if (this._bgfile !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgfile = this._bgfile;
    }
    if (this._bgstyle !== undefined) {
      hasAnyValues = true;
      internalValueResult.bgstyle = this._bgstyle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationPortalLogonBackgroundA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._bgcolorName = undefined;
      this._bgcolorValue = undefined;
      this._bgfile = undefined;
      this._bgstyle = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._bgcolorName = value.bgcolorName;
      this._bgcolorValue = value.bgcolorValue;
      this._bgfile = value.bgfile;
      this._bgstyle = value.bgstyle;
    }
  }

  // bgcolor_name - computed: false, optional: true, required: false
  private _bgcolorName?: string; 
  public get bgcolorName() {
    return this.getStringAttribute('bgcolor_name');
  }
  public set bgcolorName(value: string) {
    this._bgcolorName = value;
  }
  public resetBgcolorName() {
    this._bgcolorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgcolorNameInput() {
    return this._bgcolorName;
  }

  // bgcolor_value - computed: false, optional: true, required: false
  private _bgcolorValue?: string; 
  public get bgcolorValue() {
    return this.getStringAttribute('bgcolor_value');
  }
  public set bgcolorValue(value: string) {
    this._bgcolorValue = value;
  }
  public resetBgcolorValue() {
    this._bgcolorValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgcolorValueInput() {
    return this._bgcolorValue;
  }

  // bgfile - computed: false, optional: true, required: false
  private _bgfile?: string; 
  public get bgfile() {
    return this.getStringAttribute('bgfile');
  }
  public set bgfile(value: string) {
    this._bgfile = value;
  }
  public resetBgfile() {
    this._bgfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgfileInput() {
    return this._bgfile;
  }

  // bgstyle - computed: false, optional: true, required: false
  private _bgstyle?: string; 
  public get bgstyle() {
    return this.getStringAttribute('bgstyle');
  }
  public set bgstyle(value: string) {
    this._bgstyle = value;
  }
  public resetBgstyle() {
    this._bgstyle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bgstyleInput() {
    return this._bgstyle;
  }
}
export interface AamAuthenticationPortalLogonFailMsgCfgA {
  /**
  * Configure authorization failure message in default logon page, its text attributes follow fail-msg's (Specify authorization failure message (Default: Authorization failed. Please contact your system administrator.))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#authz_fail_msg AamAuthenticationPortalLogonA#authz_fail_msg}
  */
  readonly authzFailMsg?: string;
  /**
  * Specify font color (Default: red)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#fail_color AamAuthenticationPortalLogonA#fail_color}
  */
  readonly failColor?: number;
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#fail_color_name AamAuthenticationPortalLogonA#fail_color_name}
  */
  readonly failColorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#fail_color_value AamAuthenticationPortalLogonA#fail_color_value}
  */
  readonly failColorValue?: string;
  /**
  * 'Arial': Arial; 'Courier_New': Courier New; 'Georgia': Georgia; 'Times_New_Roman': Times New Roman; 'Verdana': Verdana;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#fail_face AamAuthenticationPortalLogonA#fail_face}
  */
  readonly failFace?: string;
  /**
  * Sepcify font (Default: Arial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#fail_font AamAuthenticationPortalLogonA#fail_font}
  */
  readonly failFont?: number;
  /**
  * Specify custom font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#fail_font_custom AamAuthenticationPortalLogonA#fail_font_custom}
  */
  readonly failFontCustom?: string;
  /**
  * Configure login failure message in default logon page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#fail_msg AamAuthenticationPortalLogonA#fail_msg}
  */
  readonly failMsg?: number;
  /**
  * Specify font size (Default: 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#fail_size AamAuthenticationPortalLogonA#fail_size}
  */
  readonly failSize?: number;
  /**
  * Specify login failure message (Default: Invalid username or password. Please try again.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#fail_text AamAuthenticationPortalLogonA#fail_text}
  */
  readonly failText?: string;
}

export function aamAuthenticationPortalLogonFailMsgCfgAToTerraform(struct?: AamAuthenticationPortalLogonFailMsgCfgAOutputReference | AamAuthenticationPortalLogonFailMsgCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    authz_fail_msg: cdktf.stringToTerraform(struct!.authzFailMsg),
    fail_color: cdktf.numberToTerraform(struct!.failColor),
    fail_color_name: cdktf.stringToTerraform(struct!.failColorName),
    fail_color_value: cdktf.stringToTerraform(struct!.failColorValue),
    fail_face: cdktf.stringToTerraform(struct!.failFace),
    fail_font: cdktf.numberToTerraform(struct!.failFont),
    fail_font_custom: cdktf.stringToTerraform(struct!.failFontCustom),
    fail_msg: cdktf.numberToTerraform(struct!.failMsg),
    fail_size: cdktf.numberToTerraform(struct!.failSize),
    fail_text: cdktf.stringToTerraform(struct!.failText),
  }
}


export function aamAuthenticationPortalLogonFailMsgCfgAToHclTerraform(struct?: AamAuthenticationPortalLogonFailMsgCfgAOutputReference | AamAuthenticationPortalLogonFailMsgCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    authz_fail_msg: {
      value: cdktf.stringToHclTerraform(struct!.authzFailMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_color: {
      value: cdktf.numberToHclTerraform(struct!.failColor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail_color_name: {
      value: cdktf.stringToHclTerraform(struct!.failColorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_color_value: {
      value: cdktf.stringToHclTerraform(struct!.failColorValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_face: {
      value: cdktf.stringToHclTerraform(struct!.failFace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_font: {
      value: cdktf.numberToHclTerraform(struct!.failFont),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail_font_custom: {
      value: cdktf.stringToHclTerraform(struct!.failFontCustom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    fail_msg: {
      value: cdktf.numberToHclTerraform(struct!.failMsg),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail_size: {
      value: cdktf.numberToHclTerraform(struct!.failSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    fail_text: {
      value: cdktf.stringToHclTerraform(struct!.failText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationPortalLogonFailMsgCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalLogonFailMsgCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._authzFailMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.authzFailMsg = this._authzFailMsg;
    }
    if (this._failColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.failColor = this._failColor;
    }
    if (this._failColorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.failColorName = this._failColorName;
    }
    if (this._failColorValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failColorValue = this._failColorValue;
    }
    if (this._failFace !== undefined) {
      hasAnyValues = true;
      internalValueResult.failFace = this._failFace;
    }
    if (this._failFont !== undefined) {
      hasAnyValues = true;
      internalValueResult.failFont = this._failFont;
    }
    if (this._failFontCustom !== undefined) {
      hasAnyValues = true;
      internalValueResult.failFontCustom = this._failFontCustom;
    }
    if (this._failMsg !== undefined) {
      hasAnyValues = true;
      internalValueResult.failMsg = this._failMsg;
    }
    if (this._failSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.failSize = this._failSize;
    }
    if (this._failText !== undefined) {
      hasAnyValues = true;
      internalValueResult.failText = this._failText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationPortalLogonFailMsgCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._authzFailMsg = undefined;
      this._failColor = undefined;
      this._failColorName = undefined;
      this._failColorValue = undefined;
      this._failFace = undefined;
      this._failFont = undefined;
      this._failFontCustom = undefined;
      this._failMsg = undefined;
      this._failSize = undefined;
      this._failText = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._authzFailMsg = value.authzFailMsg;
      this._failColor = value.failColor;
      this._failColorName = value.failColorName;
      this._failColorValue = value.failColorValue;
      this._failFace = value.failFace;
      this._failFont = value.failFont;
      this._failFontCustom = value.failFontCustom;
      this._failMsg = value.failMsg;
      this._failSize = value.failSize;
      this._failText = value.failText;
    }
  }

  // authz_fail_msg - computed: false, optional: true, required: false
  private _authzFailMsg?: string; 
  public get authzFailMsg() {
    return this.getStringAttribute('authz_fail_msg');
  }
  public set authzFailMsg(value: string) {
    this._authzFailMsg = value;
  }
  public resetAuthzFailMsg() {
    this._authzFailMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get authzFailMsgInput() {
    return this._authzFailMsg;
  }

  // fail_color - computed: false, optional: true, required: false
  private _failColor?: number; 
  public get failColor() {
    return this.getNumberAttribute('fail_color');
  }
  public set failColor(value: number) {
    this._failColor = value;
  }
  public resetFailColor() {
    this._failColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failColorInput() {
    return this._failColor;
  }

  // fail_color_name - computed: false, optional: true, required: false
  private _failColorName?: string; 
  public get failColorName() {
    return this.getStringAttribute('fail_color_name');
  }
  public set failColorName(value: string) {
    this._failColorName = value;
  }
  public resetFailColorName() {
    this._failColorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failColorNameInput() {
    return this._failColorName;
  }

  // fail_color_value - computed: false, optional: true, required: false
  private _failColorValue?: string; 
  public get failColorValue() {
    return this.getStringAttribute('fail_color_value');
  }
  public set failColorValue(value: string) {
    this._failColorValue = value;
  }
  public resetFailColorValue() {
    this._failColorValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failColorValueInput() {
    return this._failColorValue;
  }

  // fail_face - computed: false, optional: true, required: false
  private _failFace?: string; 
  public get failFace() {
    return this.getStringAttribute('fail_face');
  }
  public set failFace(value: string) {
    this._failFace = value;
  }
  public resetFailFace() {
    this._failFace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failFaceInput() {
    return this._failFace;
  }

  // fail_font - computed: false, optional: true, required: false
  private _failFont?: number; 
  public get failFont() {
    return this.getNumberAttribute('fail_font');
  }
  public set failFont(value: number) {
    this._failFont = value;
  }
  public resetFailFont() {
    this._failFont = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failFontInput() {
    return this._failFont;
  }

  // fail_font_custom - computed: false, optional: true, required: false
  private _failFontCustom?: string; 
  public get failFontCustom() {
    return this.getStringAttribute('fail_font_custom');
  }
  public set failFontCustom(value: string) {
    this._failFontCustom = value;
  }
  public resetFailFontCustom() {
    this._failFontCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failFontCustomInput() {
    return this._failFontCustom;
  }

  // fail_msg - computed: false, optional: true, required: false
  private _failMsg?: number; 
  public get failMsg() {
    return this.getNumberAttribute('fail_msg');
  }
  public set failMsg(value: number) {
    this._failMsg = value;
  }
  public resetFailMsg() {
    this._failMsg = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failMsgInput() {
    return this._failMsg;
  }

  // fail_size - computed: false, optional: true, required: false
  private _failSize?: number; 
  public get failSize() {
    return this.getNumberAttribute('fail_size');
  }
  public set failSize(value: number) {
    this._failSize = value;
  }
  public resetFailSize() {
    this._failSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failSizeInput() {
    return this._failSize;
  }

  // fail_text - computed: false, optional: true, required: false
  private _failText?: string; 
  public get failText() {
    return this.getStringAttribute('fail_text');
  }
  public set failText(value: string) {
    this._failText = value;
  }
  public resetFailText() {
    this._failText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failTextInput() {
    return this._failText;
  }
}
export interface AamAuthenticationPortalLogonPasscodeCfgA {
  /**
  * Configure passcode text in default logon page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#passcode AamAuthenticationPortalLogonA#passcode}
  */
  readonly passcode?: number;
  /**
  * Specify font color (Default: black)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#passcode_color AamAuthenticationPortalLogonA#passcode_color}
  */
  readonly passcodeColor?: number;
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#passcode_color_name AamAuthenticationPortalLogonA#passcode_color_name}
  */
  readonly passcodeColorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#passcode_color_value AamAuthenticationPortalLogonA#passcode_color_value}
  */
  readonly passcodeColorValue?: string;
  /**
  * 'Arial': Arial; 'Courier_New': Courier New; 'Georgia': Georgia; 'Times_New_Roman': Times New Roman; 'Verdana': Verdana;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#passcode_face AamAuthenticationPortalLogonA#passcode_face}
  */
  readonly passcodeFace?: string;
  /**
  * Sepcify font (Default: Arial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#passcode_font AamAuthenticationPortalLogonA#passcode_font}
  */
  readonly passcodeFont?: number;
  /**
  * Specify custom font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#passcode_font_custom AamAuthenticationPortalLogonA#passcode_font_custom}
  */
  readonly passcodeFontCustom?: string;
  /**
  * Specify font size (Default: 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#passcode_size AamAuthenticationPortalLogonA#passcode_size}
  */
  readonly passcodeSize?: number;
  /**
  * Specify passcode text (Default: Passcode)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#passcode_text AamAuthenticationPortalLogonA#passcode_text}
  */
  readonly passcodeText?: string;
}

export function aamAuthenticationPortalLogonPasscodeCfgAToTerraform(struct?: AamAuthenticationPortalLogonPasscodeCfgAOutputReference | AamAuthenticationPortalLogonPasscodeCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    passcode: cdktf.numberToTerraform(struct!.passcode),
    passcode_color: cdktf.numberToTerraform(struct!.passcodeColor),
    passcode_color_name: cdktf.stringToTerraform(struct!.passcodeColorName),
    passcode_color_value: cdktf.stringToTerraform(struct!.passcodeColorValue),
    passcode_face: cdktf.stringToTerraform(struct!.passcodeFace),
    passcode_font: cdktf.numberToTerraform(struct!.passcodeFont),
    passcode_font_custom: cdktf.stringToTerraform(struct!.passcodeFontCustom),
    passcode_size: cdktf.numberToTerraform(struct!.passcodeSize),
    passcode_text: cdktf.stringToTerraform(struct!.passcodeText),
  }
}


export function aamAuthenticationPortalLogonPasscodeCfgAToHclTerraform(struct?: AamAuthenticationPortalLogonPasscodeCfgAOutputReference | AamAuthenticationPortalLogonPasscodeCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    passcode: {
      value: cdktf.numberToHclTerraform(struct!.passcode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    passcode_color: {
      value: cdktf.numberToHclTerraform(struct!.passcodeColor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    passcode_color_name: {
      value: cdktf.stringToHclTerraform(struct!.passcodeColorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passcode_color_value: {
      value: cdktf.stringToHclTerraform(struct!.passcodeColorValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passcode_face: {
      value: cdktf.stringToHclTerraform(struct!.passcodeFace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passcode_font: {
      value: cdktf.numberToHclTerraform(struct!.passcodeFont),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    passcode_font_custom: {
      value: cdktf.stringToHclTerraform(struct!.passcodeFontCustom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    passcode_size: {
      value: cdktf.numberToHclTerraform(struct!.passcodeSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    passcode_text: {
      value: cdktf.stringToHclTerraform(struct!.passcodeText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationPortalLogonPasscodeCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalLogonPasscodeCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passcode !== undefined) {
      hasAnyValues = true;
      internalValueResult.passcode = this._passcode;
    }
    if (this._passcodeColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.passcodeColor = this._passcodeColor;
    }
    if (this._passcodeColorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.passcodeColorName = this._passcodeColorName;
    }
    if (this._passcodeColorValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passcodeColorValue = this._passcodeColorValue;
    }
    if (this._passcodeFace !== undefined) {
      hasAnyValues = true;
      internalValueResult.passcodeFace = this._passcodeFace;
    }
    if (this._passcodeFont !== undefined) {
      hasAnyValues = true;
      internalValueResult.passcodeFont = this._passcodeFont;
    }
    if (this._passcodeFontCustom !== undefined) {
      hasAnyValues = true;
      internalValueResult.passcodeFontCustom = this._passcodeFontCustom;
    }
    if (this._passcodeSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.passcodeSize = this._passcodeSize;
    }
    if (this._passcodeText !== undefined) {
      hasAnyValues = true;
      internalValueResult.passcodeText = this._passcodeText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationPortalLogonPasscodeCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._passcode = undefined;
      this._passcodeColor = undefined;
      this._passcodeColorName = undefined;
      this._passcodeColorValue = undefined;
      this._passcodeFace = undefined;
      this._passcodeFont = undefined;
      this._passcodeFontCustom = undefined;
      this._passcodeSize = undefined;
      this._passcodeText = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._passcode = value.passcode;
      this._passcodeColor = value.passcodeColor;
      this._passcodeColorName = value.passcodeColorName;
      this._passcodeColorValue = value.passcodeColorValue;
      this._passcodeFace = value.passcodeFace;
      this._passcodeFont = value.passcodeFont;
      this._passcodeFontCustom = value.passcodeFontCustom;
      this._passcodeSize = value.passcodeSize;
      this._passcodeText = value.passcodeText;
    }
  }

  // passcode - computed: false, optional: true, required: false
  private _passcode?: number; 
  public get passcode() {
    return this.getNumberAttribute('passcode');
  }
  public set passcode(value: number) {
    this._passcode = value;
  }
  public resetPasscode() {
    this._passcode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passcodeInput() {
    return this._passcode;
  }

  // passcode_color - computed: false, optional: true, required: false
  private _passcodeColor?: number; 
  public get passcodeColor() {
    return this.getNumberAttribute('passcode_color');
  }
  public set passcodeColor(value: number) {
    this._passcodeColor = value;
  }
  public resetPasscodeColor() {
    this._passcodeColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passcodeColorInput() {
    return this._passcodeColor;
  }

  // passcode_color_name - computed: false, optional: true, required: false
  private _passcodeColorName?: string; 
  public get passcodeColorName() {
    return this.getStringAttribute('passcode_color_name');
  }
  public set passcodeColorName(value: string) {
    this._passcodeColorName = value;
  }
  public resetPasscodeColorName() {
    this._passcodeColorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passcodeColorNameInput() {
    return this._passcodeColorName;
  }

  // passcode_color_value - computed: false, optional: true, required: false
  private _passcodeColorValue?: string; 
  public get passcodeColorValue() {
    return this.getStringAttribute('passcode_color_value');
  }
  public set passcodeColorValue(value: string) {
    this._passcodeColorValue = value;
  }
  public resetPasscodeColorValue() {
    this._passcodeColorValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passcodeColorValueInput() {
    return this._passcodeColorValue;
  }

  // passcode_face - computed: false, optional: true, required: false
  private _passcodeFace?: string; 
  public get passcodeFace() {
    return this.getStringAttribute('passcode_face');
  }
  public set passcodeFace(value: string) {
    this._passcodeFace = value;
  }
  public resetPasscodeFace() {
    this._passcodeFace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passcodeFaceInput() {
    return this._passcodeFace;
  }

  // passcode_font - computed: false, optional: true, required: false
  private _passcodeFont?: number; 
  public get passcodeFont() {
    return this.getNumberAttribute('passcode_font');
  }
  public set passcodeFont(value: number) {
    this._passcodeFont = value;
  }
  public resetPasscodeFont() {
    this._passcodeFont = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passcodeFontInput() {
    return this._passcodeFont;
  }

  // passcode_font_custom - computed: false, optional: true, required: false
  private _passcodeFontCustom?: string; 
  public get passcodeFontCustom() {
    return this.getStringAttribute('passcode_font_custom');
  }
  public set passcodeFontCustom(value: string) {
    this._passcodeFontCustom = value;
  }
  public resetPasscodeFontCustom() {
    this._passcodeFontCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passcodeFontCustomInput() {
    return this._passcodeFontCustom;
  }

  // passcode_size - computed: false, optional: true, required: false
  private _passcodeSize?: number; 
  public get passcodeSize() {
    return this.getNumberAttribute('passcode_size');
  }
  public set passcodeSize(value: number) {
    this._passcodeSize = value;
  }
  public resetPasscodeSize() {
    this._passcodeSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passcodeSizeInput() {
    return this._passcodeSize;
  }

  // passcode_text - computed: false, optional: true, required: false
  private _passcodeText?: string; 
  public get passcodeText() {
    return this.getStringAttribute('passcode_text');
  }
  public set passcodeText(value: string) {
    this._passcodeText = value;
  }
  public resetPasscodeText() {
    this._passcodeText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passcodeTextInput() {
    return this._passcodeText;
  }
}
export interface AamAuthenticationPortalLogonPasswordCfgA {
  /**
  * Specify font color (Default: black)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#pass_color AamAuthenticationPortalLogonA#pass_color}
  */
  readonly passColor?: number;
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#pass_color_name AamAuthenticationPortalLogonA#pass_color_name}
  */
  readonly passColorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#pass_color_value AamAuthenticationPortalLogonA#pass_color_value}
  */
  readonly passColorValue?: string;
  /**
  * 'Arial': Arial; 'Courier_New': Courier New; 'Georgia': Georgia; 'Times_New_Roman': Times New Roman; 'Verdana': Verdana;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#pass_face AamAuthenticationPortalLogonA#pass_face}
  */
  readonly passFace?: string;
  /**
  * Sepcify font (Default: Arial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#pass_font AamAuthenticationPortalLogonA#pass_font}
  */
  readonly passFont?: number;
  /**
  * Specify custom font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#pass_font_custom AamAuthenticationPortalLogonA#pass_font_custom}
  */
  readonly passFontCustom?: string;
  /**
  * Specify font size (Default: 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#pass_size AamAuthenticationPortalLogonA#pass_size}
  */
  readonly passSize?: number;
  /**
  * Specify password text (Default: Password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#pass_text AamAuthenticationPortalLogonA#pass_text}
  */
  readonly passText?: string;
  /**
  * Configure password text in default logon page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#password AamAuthenticationPortalLogonA#password}
  */
  readonly password?: number;
}

export function aamAuthenticationPortalLogonPasswordCfgAToTerraform(struct?: AamAuthenticationPortalLogonPasswordCfgAOutputReference | AamAuthenticationPortalLogonPasswordCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pass_color: cdktf.numberToTerraform(struct!.passColor),
    pass_color_name: cdktf.stringToTerraform(struct!.passColorName),
    pass_color_value: cdktf.stringToTerraform(struct!.passColorValue),
    pass_face: cdktf.stringToTerraform(struct!.passFace),
    pass_font: cdktf.numberToTerraform(struct!.passFont),
    pass_font_custom: cdktf.stringToTerraform(struct!.passFontCustom),
    pass_size: cdktf.numberToTerraform(struct!.passSize),
    pass_text: cdktf.stringToTerraform(struct!.passText),
    password: cdktf.numberToTerraform(struct!.password),
  }
}


export function aamAuthenticationPortalLogonPasswordCfgAToHclTerraform(struct?: AamAuthenticationPortalLogonPasswordCfgAOutputReference | AamAuthenticationPortalLogonPasswordCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pass_color: {
      value: cdktf.numberToHclTerraform(struct!.passColor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pass_color_name: {
      value: cdktf.stringToHclTerraform(struct!.passColorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pass_color_value: {
      value: cdktf.stringToHclTerraform(struct!.passColorValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pass_face: {
      value: cdktf.stringToHclTerraform(struct!.passFace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pass_font: {
      value: cdktf.numberToHclTerraform(struct!.passFont),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pass_font_custom: {
      value: cdktf.stringToHclTerraform(struct!.passFontCustom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pass_size: {
      value: cdktf.numberToHclTerraform(struct!.passSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    pass_text: {
      value: cdktf.stringToHclTerraform(struct!.passText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password: {
      value: cdktf.numberToHclTerraform(struct!.password),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationPortalLogonPasswordCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalLogonPasswordCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._passColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.passColor = this._passColor;
    }
    if (this._passColorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.passColorName = this._passColorName;
    }
    if (this._passColorValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passColorValue = this._passColorValue;
    }
    if (this._passFace !== undefined) {
      hasAnyValues = true;
      internalValueResult.passFace = this._passFace;
    }
    if (this._passFont !== undefined) {
      hasAnyValues = true;
      internalValueResult.passFont = this._passFont;
    }
    if (this._passFontCustom !== undefined) {
      hasAnyValues = true;
      internalValueResult.passFontCustom = this._passFontCustom;
    }
    if (this._passSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.passSize = this._passSize;
    }
    if (this._passText !== undefined) {
      hasAnyValues = true;
      internalValueResult.passText = this._passText;
    }
    if (this._password !== undefined) {
      hasAnyValues = true;
      internalValueResult.password = this._password;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationPortalLogonPasswordCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._passColor = undefined;
      this._passColorName = undefined;
      this._passColorValue = undefined;
      this._passFace = undefined;
      this._passFont = undefined;
      this._passFontCustom = undefined;
      this._passSize = undefined;
      this._passText = undefined;
      this._password = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._passColor = value.passColor;
      this._passColorName = value.passColorName;
      this._passColorValue = value.passColorValue;
      this._passFace = value.passFace;
      this._passFont = value.passFont;
      this._passFontCustom = value.passFontCustom;
      this._passSize = value.passSize;
      this._passText = value.passText;
      this._password = value.password;
    }
  }

  // pass_color - computed: false, optional: true, required: false
  private _passColor?: number; 
  public get passColor() {
    return this.getNumberAttribute('pass_color');
  }
  public set passColor(value: number) {
    this._passColor = value;
  }
  public resetPassColor() {
    this._passColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passColorInput() {
    return this._passColor;
  }

  // pass_color_name - computed: false, optional: true, required: false
  private _passColorName?: string; 
  public get passColorName() {
    return this.getStringAttribute('pass_color_name');
  }
  public set passColorName(value: string) {
    this._passColorName = value;
  }
  public resetPassColorName() {
    this._passColorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passColorNameInput() {
    return this._passColorName;
  }

  // pass_color_value - computed: false, optional: true, required: false
  private _passColorValue?: string; 
  public get passColorValue() {
    return this.getStringAttribute('pass_color_value');
  }
  public set passColorValue(value: string) {
    this._passColorValue = value;
  }
  public resetPassColorValue() {
    this._passColorValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passColorValueInput() {
    return this._passColorValue;
  }

  // pass_face - computed: false, optional: true, required: false
  private _passFace?: string; 
  public get passFace() {
    return this.getStringAttribute('pass_face');
  }
  public set passFace(value: string) {
    this._passFace = value;
  }
  public resetPassFace() {
    this._passFace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passFaceInput() {
    return this._passFace;
  }

  // pass_font - computed: false, optional: true, required: false
  private _passFont?: number; 
  public get passFont() {
    return this.getNumberAttribute('pass_font');
  }
  public set passFont(value: number) {
    this._passFont = value;
  }
  public resetPassFont() {
    this._passFont = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passFontInput() {
    return this._passFont;
  }

  // pass_font_custom - computed: false, optional: true, required: false
  private _passFontCustom?: string; 
  public get passFontCustom() {
    return this.getStringAttribute('pass_font_custom');
  }
  public set passFontCustom(value: string) {
    this._passFontCustom = value;
  }
  public resetPassFontCustom() {
    this._passFontCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passFontCustomInput() {
    return this._passFontCustom;
  }

  // pass_size - computed: false, optional: true, required: false
  private _passSize?: number; 
  public get passSize() {
    return this.getNumberAttribute('pass_size');
  }
  public set passSize(value: number) {
    this._passSize = value;
  }
  public resetPassSize() {
    this._passSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passSizeInput() {
    return this._passSize;
  }

  // pass_text - computed: false, optional: true, required: false
  private _passText?: string; 
  public get passText() {
    return this.getStringAttribute('pass_text');
  }
  public set passText(value: string) {
    this._passText = value;
  }
  public resetPassText() {
    this._passText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passTextInput() {
    return this._passText;
  }

  // password - computed: false, optional: true, required: false
  private _password?: number; 
  public get password() {
    return this.getNumberAttribute('password');
  }
  public set password(value: number) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
  }
}
export interface AamAuthenticationPortalLogonRecaptchaCfgA {
  /**
  * Specify reCAPTCHA action (Specify action string, only accept alphanumeric, underscore, and slash (Default: A10_DEFAULT_LOGON))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#recaptcha_action AamAuthenticationPortalLogonA#recaptcha_action}
  */
  readonly recaptchaAction?: string;
  /**
  * 'bottom-left': bottom left corner; 'bottom-right': bottom right corner;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#recaptcha_badge AamAuthenticationPortalLogonA#recaptcha_badge}
  */
  readonly recaptchaBadge?: string;
  /**
  * 'normal': normal size; 'compact': compact size;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#recaptcha_size AamAuthenticationPortalLogonA#recaptcha_size}
  */
  readonly recaptchaSize?: string;
  /**
  * 'light': light theme; 'dark': dark theme;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#recaptcha_theme AamAuthenticationPortalLogonA#recaptcha_theme}
  */
  readonly recaptchaTheme?: string;
}

export function aamAuthenticationPortalLogonRecaptchaCfgAToTerraform(struct?: AamAuthenticationPortalLogonRecaptchaCfgAOutputReference | AamAuthenticationPortalLogonRecaptchaCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    recaptcha_action: cdktf.stringToTerraform(struct!.recaptchaAction),
    recaptcha_badge: cdktf.stringToTerraform(struct!.recaptchaBadge),
    recaptcha_size: cdktf.stringToTerraform(struct!.recaptchaSize),
    recaptcha_theme: cdktf.stringToTerraform(struct!.recaptchaTheme),
  }
}


export function aamAuthenticationPortalLogonRecaptchaCfgAToHclTerraform(struct?: AamAuthenticationPortalLogonRecaptchaCfgAOutputReference | AamAuthenticationPortalLogonRecaptchaCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    recaptcha_action: {
      value: cdktf.stringToHclTerraform(struct!.recaptchaAction),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recaptcha_badge: {
      value: cdktf.stringToHclTerraform(struct!.recaptchaBadge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recaptcha_size: {
      value: cdktf.stringToHclTerraform(struct!.recaptchaSize),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    recaptcha_theme: {
      value: cdktf.stringToHclTerraform(struct!.recaptchaTheme),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationPortalLogonRecaptchaCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalLogonRecaptchaCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._recaptchaAction !== undefined) {
      hasAnyValues = true;
      internalValueResult.recaptchaAction = this._recaptchaAction;
    }
    if (this._recaptchaBadge !== undefined) {
      hasAnyValues = true;
      internalValueResult.recaptchaBadge = this._recaptchaBadge;
    }
    if (this._recaptchaSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.recaptchaSize = this._recaptchaSize;
    }
    if (this._recaptchaTheme !== undefined) {
      hasAnyValues = true;
      internalValueResult.recaptchaTheme = this._recaptchaTheme;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationPortalLogonRecaptchaCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._recaptchaAction = undefined;
      this._recaptchaBadge = undefined;
      this._recaptchaSize = undefined;
      this._recaptchaTheme = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._recaptchaAction = value.recaptchaAction;
      this._recaptchaBadge = value.recaptchaBadge;
      this._recaptchaSize = value.recaptchaSize;
      this._recaptchaTheme = value.recaptchaTheme;
    }
  }

  // recaptcha_action - computed: false, optional: true, required: false
  private _recaptchaAction?: string; 
  public get recaptchaAction() {
    return this.getStringAttribute('recaptcha_action');
  }
  public set recaptchaAction(value: string) {
    this._recaptchaAction = value;
  }
  public resetRecaptchaAction() {
    this._recaptchaAction = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recaptchaActionInput() {
    return this._recaptchaAction;
  }

  // recaptcha_badge - computed: false, optional: true, required: false
  private _recaptchaBadge?: string; 
  public get recaptchaBadge() {
    return this.getStringAttribute('recaptcha_badge');
  }
  public set recaptchaBadge(value: string) {
    this._recaptchaBadge = value;
  }
  public resetRecaptchaBadge() {
    this._recaptchaBadge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recaptchaBadgeInput() {
    return this._recaptchaBadge;
  }

  // recaptcha_size - computed: false, optional: true, required: false
  private _recaptchaSize?: string; 
  public get recaptchaSize() {
    return this.getStringAttribute('recaptcha_size');
  }
  public set recaptchaSize(value: string) {
    this._recaptchaSize = value;
  }
  public resetRecaptchaSize() {
    this._recaptchaSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recaptchaSizeInput() {
    return this._recaptchaSize;
  }

  // recaptcha_theme - computed: false, optional: true, required: false
  private _recaptchaTheme?: string; 
  public get recaptchaTheme() {
    return this.getStringAttribute('recaptcha_theme');
  }
  public set recaptchaTheme(value: string) {
    this._recaptchaTheme = value;
  }
  public resetRecaptchaTheme() {
    this._recaptchaTheme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recaptchaThemeInput() {
    return this._recaptchaTheme;
  }
}
export interface AamAuthenticationPortalLogonUsernameCfgA {
  /**
  * Specify font color (Default: black)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#user_color AamAuthenticationPortalLogonA#user_color}
  */
  readonly userColor?: number;
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#user_color_name AamAuthenticationPortalLogonA#user_color_name}
  */
  readonly userColorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#user_color_value AamAuthenticationPortalLogonA#user_color_value}
  */
  readonly userColorValue?: string;
  /**
  * 'Arial': Arial; 'Courier_New': Courier New; 'Georgia': Georgia; 'Times_New_Roman': Times New Roman; 'Verdana': Verdana;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#user_face AamAuthenticationPortalLogonA#user_face}
  */
  readonly userFace?: string;
  /**
  * Sepcify font (Default: Arial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#user_font AamAuthenticationPortalLogonA#user_font}
  */
  readonly userFont?: number;
  /**
  * Specify custom font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#user_font_custom AamAuthenticationPortalLogonA#user_font_custom}
  */
  readonly userFontCustom?: string;
  /**
  * Specify font size (Default: 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#user_size AamAuthenticationPortalLogonA#user_size}
  */
  readonly userSize?: number;
  /**
  * Specify username text (Default: User Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#user_text AamAuthenticationPortalLogonA#user_text}
  */
  readonly userText?: string;
  /**
  * Configure username text in default logon page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#username AamAuthenticationPortalLogonA#username}
  */
  readonly username?: number;
}

export function aamAuthenticationPortalLogonUsernameCfgAToTerraform(struct?: AamAuthenticationPortalLogonUsernameCfgAOutputReference | AamAuthenticationPortalLogonUsernameCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    user_color: cdktf.numberToTerraform(struct!.userColor),
    user_color_name: cdktf.stringToTerraform(struct!.userColorName),
    user_color_value: cdktf.stringToTerraform(struct!.userColorValue),
    user_face: cdktf.stringToTerraform(struct!.userFace),
    user_font: cdktf.numberToTerraform(struct!.userFont),
    user_font_custom: cdktf.stringToTerraform(struct!.userFontCustom),
    user_size: cdktf.numberToTerraform(struct!.userSize),
    user_text: cdktf.stringToTerraform(struct!.userText),
    username: cdktf.numberToTerraform(struct!.username),
  }
}


export function aamAuthenticationPortalLogonUsernameCfgAToHclTerraform(struct?: AamAuthenticationPortalLogonUsernameCfgAOutputReference | AamAuthenticationPortalLogonUsernameCfgA): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    user_color: {
      value: cdktf.numberToHclTerraform(struct!.userColor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_color_name: {
      value: cdktf.stringToHclTerraform(struct!.userColorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_color_value: {
      value: cdktf.stringToHclTerraform(struct!.userColorValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_face: {
      value: cdktf.stringToHclTerraform(struct!.userFace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_font: {
      value: cdktf.numberToHclTerraform(struct!.userFont),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_font_custom: {
      value: cdktf.stringToHclTerraform(struct!.userFontCustom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_size: {
      value: cdktf.numberToHclTerraform(struct!.userSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    user_text: {
      value: cdktf.stringToHclTerraform(struct!.userText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username: {
      value: cdktf.numberToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationPortalLogonUsernameCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalLogonUsernameCfgA | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._userColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.userColor = this._userColor;
    }
    if (this._userColorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.userColorName = this._userColorName;
    }
    if (this._userColorValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userColorValue = this._userColorValue;
    }
    if (this._userFace !== undefined) {
      hasAnyValues = true;
      internalValueResult.userFace = this._userFace;
    }
    if (this._userFont !== undefined) {
      hasAnyValues = true;
      internalValueResult.userFont = this._userFont;
    }
    if (this._userFontCustom !== undefined) {
      hasAnyValues = true;
      internalValueResult.userFontCustom = this._userFontCustom;
    }
    if (this._userSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.userSize = this._userSize;
    }
    if (this._userText !== undefined) {
      hasAnyValues = true;
      internalValueResult.userText = this._userText;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationPortalLogonUsernameCfgA | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._userColor = undefined;
      this._userColorName = undefined;
      this._userColorValue = undefined;
      this._userFace = undefined;
      this._userFont = undefined;
      this._userFontCustom = undefined;
      this._userSize = undefined;
      this._userText = undefined;
      this._username = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._userColor = value.userColor;
      this._userColorName = value.userColorName;
      this._userColorValue = value.userColorValue;
      this._userFace = value.userFace;
      this._userFont = value.userFont;
      this._userFontCustom = value.userFontCustom;
      this._userSize = value.userSize;
      this._userText = value.userText;
      this._username = value.username;
    }
  }

  // user_color - computed: false, optional: true, required: false
  private _userColor?: number; 
  public get userColor() {
    return this.getNumberAttribute('user_color');
  }
  public set userColor(value: number) {
    this._userColor = value;
  }
  public resetUserColor() {
    this._userColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userColorInput() {
    return this._userColor;
  }

  // user_color_name - computed: false, optional: true, required: false
  private _userColorName?: string; 
  public get userColorName() {
    return this.getStringAttribute('user_color_name');
  }
  public set userColorName(value: string) {
    this._userColorName = value;
  }
  public resetUserColorName() {
    this._userColorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userColorNameInput() {
    return this._userColorName;
  }

  // user_color_value - computed: false, optional: true, required: false
  private _userColorValue?: string; 
  public get userColorValue() {
    return this.getStringAttribute('user_color_value');
  }
  public set userColorValue(value: string) {
    this._userColorValue = value;
  }
  public resetUserColorValue() {
    this._userColorValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userColorValueInput() {
    return this._userColorValue;
  }

  // user_face - computed: false, optional: true, required: false
  private _userFace?: string; 
  public get userFace() {
    return this.getStringAttribute('user_face');
  }
  public set userFace(value: string) {
    this._userFace = value;
  }
  public resetUserFace() {
    this._userFace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userFaceInput() {
    return this._userFace;
  }

  // user_font - computed: false, optional: true, required: false
  private _userFont?: number; 
  public get userFont() {
    return this.getNumberAttribute('user_font');
  }
  public set userFont(value: number) {
    this._userFont = value;
  }
  public resetUserFont() {
    this._userFont = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userFontInput() {
    return this._userFont;
  }

  // user_font_custom - computed: false, optional: true, required: false
  private _userFontCustom?: string; 
  public get userFontCustom() {
    return this.getStringAttribute('user_font_custom');
  }
  public set userFontCustom(value: string) {
    this._userFontCustom = value;
  }
  public resetUserFontCustom() {
    this._userFontCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userFontCustomInput() {
    return this._userFontCustom;
  }

  // user_size - computed: false, optional: true, required: false
  private _userSize?: number; 
  public get userSize() {
    return this.getNumberAttribute('user_size');
  }
  public set userSize(value: number) {
    this._userSize = value;
  }
  public resetUserSize() {
    this._userSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userSizeInput() {
    return this._userSize;
  }

  // user_text - computed: false, optional: true, required: false
  private _userText?: string; 
  public get userText() {
    return this.getStringAttribute('user_text');
  }
  public set userText(value: string) {
    this._userText = value;
  }
  public resetUserText() {
    this._userText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userTextInput() {
    return this._userText;
  }

  // username - computed: false, optional: true, required: false
  private _username?: number; 
  public get username() {
    return this.getNumberAttribute('username');
  }
  public set username(value: number) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon thunder_aam_authentication_portal_logon}
*/
export class AamAuthenticationPortalLogonA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_portal_logon";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthenticationPortalLogonA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthenticationPortalLogonA to import
  * @param importFromId The id of the existing AamAuthenticationPortalLogonA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthenticationPortalLogonA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_portal_logon", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon thunder_aam_authentication_portal_logon} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthenticationPortalLogonAConfig
  */
  public constructor(scope: Construct, id: string, config: AamAuthenticationPortalLogonAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_portal_logon',
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
    this._actionUrl = config.actionUrl;
    this._captchaType = config.captchaType;
    this._enableCaptcha = config.enableCaptcha;
    this._enablePasscode = config.enablePasscode;
    this._id = config.id;
    this._name = config.name;
    this._passcodeVar = config.passcodeVar;
    this._passwordVar = config.passwordVar;
    this._siteKeyString = config.siteKeyString;
    this._submitText = config.submitText;
    this._usernameVar = config.usernameVar;
    this._uuid = config.uuid;
    this._background.internalValue = config.background;
    this._failMsgCfg.internalValue = config.failMsgCfg;
    this._passcodeCfg.internalValue = config.passcodeCfg;
    this._passwordCfg.internalValue = config.passwordCfg;
    this._recaptchaCfg.internalValue = config.recaptchaCfg;
    this._usernameCfg.internalValue = config.usernameCfg;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // captcha_type - computed: false, optional: true, required: false
  private _captchaType?: string; 
  public get captchaType() {
    return this.getStringAttribute('captcha_type');
  }
  public set captchaType(value: string) {
    this._captchaType = value;
  }
  public resetCaptchaType() {
    this._captchaType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get captchaTypeInput() {
    return this._captchaType;
  }

  // enable_captcha - computed: false, optional: true, required: false
  private _enableCaptcha?: number; 
  public get enableCaptcha() {
    return this.getNumberAttribute('enable_captcha');
  }
  public set enableCaptcha(value: number) {
    this._enableCaptcha = value;
  }
  public resetEnableCaptcha() {
    this._enableCaptcha = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableCaptchaInput() {
    return this._enableCaptcha;
  }

  // enable_passcode - computed: false, optional: true, required: false
  private _enablePasscode?: number; 
  public get enablePasscode() {
    return this.getNumberAttribute('enable_passcode');
  }
  public set enablePasscode(value: number) {
    this._enablePasscode = value;
  }
  public resetEnablePasscode() {
    this._enablePasscode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePasscodeInput() {
    return this._enablePasscode;
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

  // passcode_var - computed: false, optional: true, required: false
  private _passcodeVar?: string; 
  public get passcodeVar() {
    return this.getStringAttribute('passcode_var');
  }
  public set passcodeVar(value: string) {
    this._passcodeVar = value;
  }
  public resetPasscodeVar() {
    this._passcodeVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passcodeVarInput() {
    return this._passcodeVar;
  }

  // password_var - computed: false, optional: true, required: false
  private _passwordVar?: string; 
  public get passwordVar() {
    return this.getStringAttribute('password_var');
  }
  public set passwordVar(value: string) {
    this._passwordVar = value;
  }
  public resetPasswordVar() {
    this._passwordVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordVarInput() {
    return this._passwordVar;
  }

  // site_key_string - computed: false, optional: true, required: false
  private _siteKeyString?: string; 
  public get siteKeyString() {
    return this.getStringAttribute('site_key_string');
  }
  public set siteKeyString(value: string) {
    this._siteKeyString = value;
  }
  public resetSiteKeyString() {
    this._siteKeyString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteKeyStringInput() {
    return this._siteKeyString;
  }

  // submit_text - computed: false, optional: true, required: false
  private _submitText?: string; 
  public get submitText() {
    return this.getStringAttribute('submit_text');
  }
  public set submitText(value: string) {
    this._submitText = value;
  }
  public resetSubmitText() {
    this._submitText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get submitTextInput() {
    return this._submitText;
  }

  // username_var - computed: false, optional: true, required: false
  private _usernameVar?: string; 
  public get usernameVar() {
    return this.getStringAttribute('username_var');
  }
  public set usernameVar(value: string) {
    this._usernameVar = value;
  }
  public resetUsernameVar() {
    this._usernameVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameVarInput() {
    return this._usernameVar;
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

  // background - computed: false, optional: true, required: false
  private _background = new AamAuthenticationPortalLogonBackgroundAOutputReference(this, "background");
  public get background() {
    return this._background;
  }
  public putBackground(value: AamAuthenticationPortalLogonBackgroundA) {
    this._background.internalValue = value;
  }
  public resetBackground() {
    this._background.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundInput() {
    return this._background.internalValue;
  }

  // fail_msg_cfg - computed: false, optional: true, required: false
  private _failMsgCfg = new AamAuthenticationPortalLogonFailMsgCfgAOutputReference(this, "fail_msg_cfg");
  public get failMsgCfg() {
    return this._failMsgCfg;
  }
  public putFailMsgCfg(value: AamAuthenticationPortalLogonFailMsgCfgA) {
    this._failMsgCfg.internalValue = value;
  }
  public resetFailMsgCfg() {
    this._failMsgCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failMsgCfgInput() {
    return this._failMsgCfg.internalValue;
  }

  // passcode_cfg - computed: false, optional: true, required: false
  private _passcodeCfg = new AamAuthenticationPortalLogonPasscodeCfgAOutputReference(this, "passcode_cfg");
  public get passcodeCfg() {
    return this._passcodeCfg;
  }
  public putPasscodeCfg(value: AamAuthenticationPortalLogonPasscodeCfgA) {
    this._passcodeCfg.internalValue = value;
  }
  public resetPasscodeCfg() {
    this._passcodeCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passcodeCfgInput() {
    return this._passcodeCfg.internalValue;
  }

  // password_cfg - computed: false, optional: true, required: false
  private _passwordCfg = new AamAuthenticationPortalLogonPasswordCfgAOutputReference(this, "password_cfg");
  public get passwordCfg() {
    return this._passwordCfg;
  }
  public putPasswordCfg(value: AamAuthenticationPortalLogonPasswordCfgA) {
    this._passwordCfg.internalValue = value;
  }
  public resetPasswordCfg() {
    this._passwordCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordCfgInput() {
    return this._passwordCfg.internalValue;
  }

  // recaptcha_cfg - computed: false, optional: true, required: false
  private _recaptchaCfg = new AamAuthenticationPortalLogonRecaptchaCfgAOutputReference(this, "recaptcha_cfg");
  public get recaptchaCfg() {
    return this._recaptchaCfg;
  }
  public putRecaptchaCfg(value: AamAuthenticationPortalLogonRecaptchaCfgA) {
    this._recaptchaCfg.internalValue = value;
  }
  public resetRecaptchaCfg() {
    this._recaptchaCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recaptchaCfgInput() {
    return this._recaptchaCfg.internalValue;
  }

  // username_cfg - computed: false, optional: true, required: false
  private _usernameCfg = new AamAuthenticationPortalLogonUsernameCfgAOutputReference(this, "username_cfg");
  public get usernameCfg() {
    return this._usernameCfg;
  }
  public putUsernameCfg(value: AamAuthenticationPortalLogonUsernameCfgA) {
    this._usernameCfg.internalValue = value;
  }
  public resetUsernameCfg() {
    this._usernameCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameCfgInput() {
    return this._usernameCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      action_url: cdktf.stringToTerraform(this._actionUrl),
      captcha_type: cdktf.stringToTerraform(this._captchaType),
      enable_captcha: cdktf.numberToTerraform(this._enableCaptcha),
      enable_passcode: cdktf.numberToTerraform(this._enablePasscode),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      passcode_var: cdktf.stringToTerraform(this._passcodeVar),
      password_var: cdktf.stringToTerraform(this._passwordVar),
      site_key_string: cdktf.stringToTerraform(this._siteKeyString),
      submit_text: cdktf.stringToTerraform(this._submitText),
      username_var: cdktf.stringToTerraform(this._usernameVar),
      uuid: cdktf.stringToTerraform(this._uuid),
      background: aamAuthenticationPortalLogonBackgroundAToTerraform(this._background.internalValue),
      fail_msg_cfg: aamAuthenticationPortalLogonFailMsgCfgAToTerraform(this._failMsgCfg.internalValue),
      passcode_cfg: aamAuthenticationPortalLogonPasscodeCfgAToTerraform(this._passcodeCfg.internalValue),
      password_cfg: aamAuthenticationPortalLogonPasswordCfgAToTerraform(this._passwordCfg.internalValue),
      recaptcha_cfg: aamAuthenticationPortalLogonRecaptchaCfgAToTerraform(this._recaptchaCfg.internalValue),
      username_cfg: aamAuthenticationPortalLogonUsernameCfgAToTerraform(this._usernameCfg.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action_url: {
        value: cdktf.stringToHclTerraform(this._actionUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      captcha_type: {
        value: cdktf.stringToHclTerraform(this._captchaType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_captcha: {
        value: cdktf.numberToHclTerraform(this._enableCaptcha),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_passcode: {
        value: cdktf.numberToHclTerraform(this._enablePasscode),
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
      passcode_var: {
        value: cdktf.stringToHclTerraform(this._passcodeVar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      password_var: {
        value: cdktf.stringToHclTerraform(this._passwordVar),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      site_key_string: {
        value: cdktf.stringToHclTerraform(this._siteKeyString),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      submit_text: {
        value: cdktf.stringToHclTerraform(this._submitText),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      username_var: {
        value: cdktf.stringToHclTerraform(this._usernameVar),
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
      background: {
        value: aamAuthenticationPortalLogonBackgroundAToHclTerraform(this._background.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationPortalLogonBackgroundAList",
      },
      fail_msg_cfg: {
        value: aamAuthenticationPortalLogonFailMsgCfgAToHclTerraform(this._failMsgCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationPortalLogonFailMsgCfgAList",
      },
      passcode_cfg: {
        value: aamAuthenticationPortalLogonPasscodeCfgAToHclTerraform(this._passcodeCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationPortalLogonPasscodeCfgAList",
      },
      password_cfg: {
        value: aamAuthenticationPortalLogonPasswordCfgAToHclTerraform(this._passwordCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationPortalLogonPasswordCfgAList",
      },
      recaptcha_cfg: {
        value: aamAuthenticationPortalLogonRecaptchaCfgAToHclTerraform(this._recaptchaCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationPortalLogonRecaptchaCfgAList",
      },
      username_cfg: {
        value: aamAuthenticationPortalLogonUsernameCfgAToHclTerraform(this._usernameCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationPortalLogonUsernameCfgAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
