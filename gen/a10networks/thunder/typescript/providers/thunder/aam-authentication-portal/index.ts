// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthenticationPortalConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#id AamAuthenticationPortal#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * 'default-portal': Default portal configuration;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#name AamAuthenticationPortal#name}
  */
  readonly name: string;
  /**
  * Customized tag
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#user_tag AamAuthenticationPortal#user_tag}
  */
  readonly userTag?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#uuid AamAuthenticationPortal#uuid}
  */
  readonly uuid?: string;
  /**
  * change_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#change_password AamAuthenticationPortal#change_password}
  */
  readonly changePassword?: AamAuthenticationPortalChangePassword;
  /**
  * logo_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#logo_cfg AamAuthenticationPortal#logo_cfg}
  */
  readonly logoCfg?: AamAuthenticationPortalLogoCfg;
  /**
  * logon block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#logon AamAuthenticationPortal#logon}
  */
  readonly logon?: AamAuthenticationPortalLogon;
  /**
  * logon_fail block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#logon_fail AamAuthenticationPortal#logon_fail}
  */
  readonly logonFail?: AamAuthenticationPortalLogonFail;
  /**
  * notify_change_password block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#notify_change_password AamAuthenticationPortal#notify_change_password}
  */
  readonly notifyChangePassword?: AamAuthenticationPortalNotifyChangePassword;
}
export interface AamAuthenticationPortalChangePasswordBackground {
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#bgcolor_name AamAuthenticationPortal#bgcolor_name}
  */
  readonly bgcolorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#bgcolor_value AamAuthenticationPortal#bgcolor_value}
  */
  readonly bgcolorValue?: string;
  /**
  * Specify background image filename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#bgfile AamAuthenticationPortal#bgfile}
  */
  readonly bgfile?: string;
  /**
  * 'tile': Tile; 'stretch': Stretch; 'fit': Fit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#bgstyle AamAuthenticationPortal#bgstyle}
  */
  readonly bgstyle?: string;
}

export function aamAuthenticationPortalChangePasswordBackgroundToTerraform(struct?: AamAuthenticationPortalChangePasswordBackgroundOutputReference | AamAuthenticationPortalChangePasswordBackground): any {
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


export function aamAuthenticationPortalChangePasswordBackgroundToHclTerraform(struct?: AamAuthenticationPortalChangePasswordBackgroundOutputReference | AamAuthenticationPortalChangePasswordBackground): any {
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

export class AamAuthenticationPortalChangePasswordBackgroundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalChangePasswordBackground | undefined {
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

  public set internalValue(value: AamAuthenticationPortalChangePasswordBackground | undefined) {
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
export interface AamAuthenticationPortalChangePasswordCfmPwdCfg {
  /**
  * Specify font color (Default: black)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#cfm_color AamAuthenticationPortal#cfm_color}
  */
  readonly cfmColor?: number;
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#cfm_color_name AamAuthenticationPortal#cfm_color_name}
  */
  readonly cfmColorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#cfm_color_value AamAuthenticationPortal#cfm_color_value}
  */
  readonly cfmColorValue?: string;
  /**
  * 'Arial': Arial; 'Courier_New': Courier New; 'Georgia': Georgia; 'Times_New_Roman': Times New Roman; 'Verdana': Verdana;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#cfm_face AamAuthenticationPortal#cfm_face}
  */
  readonly cfmFace?: string;
  /**
  * Sepcify font (Default: Arial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#cfm_font AamAuthenticationPortal#cfm_font}
  */
  readonly cfmFont?: number;
  /**
  * Specify custom font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#cfm_font_custom AamAuthenticationPortal#cfm_font_custom}
  */
  readonly cfmFontCustom?: string;
  /**
  * Specify font size (Default: 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#cfm_size AamAuthenticationPortal#cfm_size}
  */
  readonly cfmSize?: number;
  /**
  * Specify confirm password text (Default: Confirm New Password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#cfm_text AamAuthenticationPortal#cfm_text}
  */
  readonly cfmText?: string;
  /**
  * Configure confirm password text in default change password page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#confirm_password AamAuthenticationPortal#confirm_password}
  */
  readonly confirmPassword?: number;
}

export function aamAuthenticationPortalChangePasswordCfmPwdCfgToTerraform(struct?: AamAuthenticationPortalChangePasswordCfmPwdCfgOutputReference | AamAuthenticationPortalChangePasswordCfmPwdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cfm_color: cdktf.numberToTerraform(struct!.cfmColor),
    cfm_color_name: cdktf.stringToTerraform(struct!.cfmColorName),
    cfm_color_value: cdktf.stringToTerraform(struct!.cfmColorValue),
    cfm_face: cdktf.stringToTerraform(struct!.cfmFace),
    cfm_font: cdktf.numberToTerraform(struct!.cfmFont),
    cfm_font_custom: cdktf.stringToTerraform(struct!.cfmFontCustom),
    cfm_size: cdktf.numberToTerraform(struct!.cfmSize),
    cfm_text: cdktf.stringToTerraform(struct!.cfmText),
    confirm_password: cdktf.numberToTerraform(struct!.confirmPassword),
  }
}


export function aamAuthenticationPortalChangePasswordCfmPwdCfgToHclTerraform(struct?: AamAuthenticationPortalChangePasswordCfmPwdCfgOutputReference | AamAuthenticationPortalChangePasswordCfmPwdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cfm_color: {
      value: cdktf.numberToHclTerraform(struct!.cfmColor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cfm_color_name: {
      value: cdktf.stringToHclTerraform(struct!.cfmColorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cfm_color_value: {
      value: cdktf.stringToHclTerraform(struct!.cfmColorValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cfm_face: {
      value: cdktf.stringToHclTerraform(struct!.cfmFace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cfm_font: {
      value: cdktf.numberToHclTerraform(struct!.cfmFont),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cfm_font_custom: {
      value: cdktf.stringToHclTerraform(struct!.cfmFontCustom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cfm_size: {
      value: cdktf.numberToHclTerraform(struct!.cfmSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cfm_text: {
      value: cdktf.stringToHclTerraform(struct!.cfmText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confirm_password: {
      value: cdktf.numberToHclTerraform(struct!.confirmPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationPortalChangePasswordCfmPwdCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalChangePasswordCfmPwdCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cfmColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfmColor = this._cfmColor;
    }
    if (this._cfmColorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfmColorName = this._cfmColorName;
    }
    if (this._cfmColorValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfmColorValue = this._cfmColorValue;
    }
    if (this._cfmFace !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfmFace = this._cfmFace;
    }
    if (this._cfmFont !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfmFont = this._cfmFont;
    }
    if (this._cfmFontCustom !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfmFontCustom = this._cfmFontCustom;
    }
    if (this._cfmSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfmSize = this._cfmSize;
    }
    if (this._cfmText !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfmText = this._cfmText;
    }
    if (this._confirmPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmPassword = this._confirmPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationPortalChangePasswordCfmPwdCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cfmColor = undefined;
      this._cfmColorName = undefined;
      this._cfmColorValue = undefined;
      this._cfmFace = undefined;
      this._cfmFont = undefined;
      this._cfmFontCustom = undefined;
      this._cfmSize = undefined;
      this._cfmText = undefined;
      this._confirmPassword = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cfmColor = value.cfmColor;
      this._cfmColorName = value.cfmColorName;
      this._cfmColorValue = value.cfmColorValue;
      this._cfmFace = value.cfmFace;
      this._cfmFont = value.cfmFont;
      this._cfmFontCustom = value.cfmFontCustom;
      this._cfmSize = value.cfmSize;
      this._cfmText = value.cfmText;
      this._confirmPassword = value.confirmPassword;
    }
  }

  // cfm_color - computed: false, optional: true, required: false
  private _cfmColor?: number; 
  public get cfmColor() {
    return this.getNumberAttribute('cfm_color');
  }
  public set cfmColor(value: number) {
    this._cfmColor = value;
  }
  public resetCfmColor() {
    this._cfmColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmColorInput() {
    return this._cfmColor;
  }

  // cfm_color_name - computed: false, optional: true, required: false
  private _cfmColorName?: string; 
  public get cfmColorName() {
    return this.getStringAttribute('cfm_color_name');
  }
  public set cfmColorName(value: string) {
    this._cfmColorName = value;
  }
  public resetCfmColorName() {
    this._cfmColorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmColorNameInput() {
    return this._cfmColorName;
  }

  // cfm_color_value - computed: false, optional: true, required: false
  private _cfmColorValue?: string; 
  public get cfmColorValue() {
    return this.getStringAttribute('cfm_color_value');
  }
  public set cfmColorValue(value: string) {
    this._cfmColorValue = value;
  }
  public resetCfmColorValue() {
    this._cfmColorValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmColorValueInput() {
    return this._cfmColorValue;
  }

  // cfm_face - computed: false, optional: true, required: false
  private _cfmFace?: string; 
  public get cfmFace() {
    return this.getStringAttribute('cfm_face');
  }
  public set cfmFace(value: string) {
    this._cfmFace = value;
  }
  public resetCfmFace() {
    this._cfmFace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmFaceInput() {
    return this._cfmFace;
  }

  // cfm_font - computed: false, optional: true, required: false
  private _cfmFont?: number; 
  public get cfmFont() {
    return this.getNumberAttribute('cfm_font');
  }
  public set cfmFont(value: number) {
    this._cfmFont = value;
  }
  public resetCfmFont() {
    this._cfmFont = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmFontInput() {
    return this._cfmFont;
  }

  // cfm_font_custom - computed: false, optional: true, required: false
  private _cfmFontCustom?: string; 
  public get cfmFontCustom() {
    return this.getStringAttribute('cfm_font_custom');
  }
  public set cfmFontCustom(value: string) {
    this._cfmFontCustom = value;
  }
  public resetCfmFontCustom() {
    this._cfmFontCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmFontCustomInput() {
    return this._cfmFontCustom;
  }

  // cfm_size - computed: false, optional: true, required: false
  private _cfmSize?: number; 
  public get cfmSize() {
    return this.getNumberAttribute('cfm_size');
  }
  public set cfmSize(value: number) {
    this._cfmSize = value;
  }
  public resetCfmSize() {
    this._cfmSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmSizeInput() {
    return this._cfmSize;
  }

  // cfm_text - computed: false, optional: true, required: false
  private _cfmText?: string; 
  public get cfmText() {
    return this.getStringAttribute('cfm_text');
  }
  public set cfmText(value: string) {
    this._cfmText = value;
  }
  public resetCfmText() {
    this._cfmText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmTextInput() {
    return this._cfmText;
  }

  // confirm_password - computed: false, optional: true, required: false
  private _confirmPassword?: number; 
  public get confirmPassword() {
    return this.getNumberAttribute('confirm_password');
  }
  public set confirmPassword(value: number) {
    this._confirmPassword = value;
  }
  public resetConfirmPassword() {
    this._confirmPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmPasswordInput() {
    return this._confirmPassword;
  }
}
export interface AamAuthenticationPortalChangePasswordNewPwdCfg {
  /**
  * Specify font color (Default: black)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#new_color AamAuthenticationPortal#new_color}
  */
  readonly newColor?: number;
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#new_color_name AamAuthenticationPortal#new_color_name}
  */
  readonly newColorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#new_color_value AamAuthenticationPortal#new_color_value}
  */
  readonly newColorValue?: string;
  /**
  * 'Arial': Arial; 'Courier_New': Courier New; 'Georgia': Georgia; 'Times_New_Roman': Times New Roman; 'Verdana': Verdana;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#new_face AamAuthenticationPortal#new_face}
  */
  readonly newFace?: string;
  /**
  * Sepcify font (Default: Arial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#new_font AamAuthenticationPortal#new_font}
  */
  readonly newFont?: number;
  /**
  * Specify custom font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#new_font_custom AamAuthenticationPortal#new_font_custom}
  */
  readonly newFontCustom?: string;
  /**
  * Configure new password text in default change password page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#new_password AamAuthenticationPortal#new_password}
  */
  readonly newPassword?: number;
  /**
  * Specify font size (Default: 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#new_size AamAuthenticationPortal#new_size}
  */
  readonly newSize?: number;
  /**
  * Specify new password text (Default: New Password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#new_text AamAuthenticationPortal#new_text}
  */
  readonly newText?: string;
}

export function aamAuthenticationPortalChangePasswordNewPwdCfgToTerraform(struct?: AamAuthenticationPortalChangePasswordNewPwdCfgOutputReference | AamAuthenticationPortalChangePasswordNewPwdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_color: cdktf.numberToTerraform(struct!.newColor),
    new_color_name: cdktf.stringToTerraform(struct!.newColorName),
    new_color_value: cdktf.stringToTerraform(struct!.newColorValue),
    new_face: cdktf.stringToTerraform(struct!.newFace),
    new_font: cdktf.numberToTerraform(struct!.newFont),
    new_font_custom: cdktf.stringToTerraform(struct!.newFontCustom),
    new_password: cdktf.numberToTerraform(struct!.newPassword),
    new_size: cdktf.numberToTerraform(struct!.newSize),
    new_text: cdktf.stringToTerraform(struct!.newText),
  }
}


export function aamAuthenticationPortalChangePasswordNewPwdCfgToHclTerraform(struct?: AamAuthenticationPortalChangePasswordNewPwdCfgOutputReference | AamAuthenticationPortalChangePasswordNewPwdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_color: {
      value: cdktf.numberToHclTerraform(struct!.newColor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_color_name: {
      value: cdktf.stringToHclTerraform(struct!.newColorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_color_value: {
      value: cdktf.stringToHclTerraform(struct!.newColorValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_face: {
      value: cdktf.stringToHclTerraform(struct!.newFace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_font: {
      value: cdktf.numberToHclTerraform(struct!.newFont),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_font_custom: {
      value: cdktf.stringToHclTerraform(struct!.newFontCustom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_password: {
      value: cdktf.numberToHclTerraform(struct!.newPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_size: {
      value: cdktf.numberToHclTerraform(struct!.newSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_text: {
      value: cdktf.stringToHclTerraform(struct!.newText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationPortalChangePasswordNewPwdCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalChangePasswordNewPwdCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.newColor = this._newColor;
    }
    if (this._newColorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.newColorName = this._newColorName;
    }
    if (this._newColorValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newColorValue = this._newColorValue;
    }
    if (this._newFace !== undefined) {
      hasAnyValues = true;
      internalValueResult.newFace = this._newFace;
    }
    if (this._newFont !== undefined) {
      hasAnyValues = true;
      internalValueResult.newFont = this._newFont;
    }
    if (this._newFontCustom !== undefined) {
      hasAnyValues = true;
      internalValueResult.newFontCustom = this._newFontCustom;
    }
    if (this._newPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.newPassword = this._newPassword;
    }
    if (this._newSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.newSize = this._newSize;
    }
    if (this._newText !== undefined) {
      hasAnyValues = true;
      internalValueResult.newText = this._newText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationPortalChangePasswordNewPwdCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._newColor = undefined;
      this._newColorName = undefined;
      this._newColorValue = undefined;
      this._newFace = undefined;
      this._newFont = undefined;
      this._newFontCustom = undefined;
      this._newPassword = undefined;
      this._newSize = undefined;
      this._newText = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._newColor = value.newColor;
      this._newColorName = value.newColorName;
      this._newColorValue = value.newColorValue;
      this._newFace = value.newFace;
      this._newFont = value.newFont;
      this._newFontCustom = value.newFontCustom;
      this._newPassword = value.newPassword;
      this._newSize = value.newSize;
      this._newText = value.newText;
    }
  }

  // new_color - computed: false, optional: true, required: false
  private _newColor?: number; 
  public get newColor() {
    return this.getNumberAttribute('new_color');
  }
  public set newColor(value: number) {
    this._newColor = value;
  }
  public resetNewColor() {
    this._newColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newColorInput() {
    return this._newColor;
  }

  // new_color_name - computed: false, optional: true, required: false
  private _newColorName?: string; 
  public get newColorName() {
    return this.getStringAttribute('new_color_name');
  }
  public set newColorName(value: string) {
    this._newColorName = value;
  }
  public resetNewColorName() {
    this._newColorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newColorNameInput() {
    return this._newColorName;
  }

  // new_color_value - computed: false, optional: true, required: false
  private _newColorValue?: string; 
  public get newColorValue() {
    return this.getStringAttribute('new_color_value');
  }
  public set newColorValue(value: string) {
    this._newColorValue = value;
  }
  public resetNewColorValue() {
    this._newColorValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newColorValueInput() {
    return this._newColorValue;
  }

  // new_face - computed: false, optional: true, required: false
  private _newFace?: string; 
  public get newFace() {
    return this.getStringAttribute('new_face');
  }
  public set newFace(value: string) {
    this._newFace = value;
  }
  public resetNewFace() {
    this._newFace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newFaceInput() {
    return this._newFace;
  }

  // new_font - computed: false, optional: true, required: false
  private _newFont?: number; 
  public get newFont() {
    return this.getNumberAttribute('new_font');
  }
  public set newFont(value: number) {
    this._newFont = value;
  }
  public resetNewFont() {
    this._newFont = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newFontInput() {
    return this._newFont;
  }

  // new_font_custom - computed: false, optional: true, required: false
  private _newFontCustom?: string; 
  public get newFontCustom() {
    return this.getStringAttribute('new_font_custom');
  }
  public set newFontCustom(value: string) {
    this._newFontCustom = value;
  }
  public resetNewFontCustom() {
    this._newFontCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newFontCustomInput() {
    return this._newFontCustom;
  }

  // new_password - computed: false, optional: true, required: false
  private _newPassword?: number; 
  public get newPassword() {
    return this.getNumberAttribute('new_password');
  }
  public set newPassword(value: number) {
    this._newPassword = value;
  }
  public resetNewPassword() {
    this._newPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPasswordInput() {
    return this._newPassword;
  }

  // new_size - computed: false, optional: true, required: false
  private _newSize?: number; 
  public get newSize() {
    return this.getNumberAttribute('new_size');
  }
  public set newSize(value: number) {
    this._newSize = value;
  }
  public resetNewSize() {
    this._newSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newSizeInput() {
    return this._newSize;
  }

  // new_text - computed: false, optional: true, required: false
  private _newText?: string; 
  public get newText() {
    return this.getStringAttribute('new_text');
  }
  public set newText(value: string) {
    this._newText = value;
  }
  public resetNewText() {
    this._newText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newTextInput() {
    return this._newText;
  }
}
export interface AamAuthenticationPortalChangePasswordOldPwdCfg {
  /**
  * Specify font color (Default: black)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#old_color AamAuthenticationPortal#old_color}
  */
  readonly oldColor?: number;
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#old_color_name AamAuthenticationPortal#old_color_name}
  */
  readonly oldColorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#old_color_value AamAuthenticationPortal#old_color_value}
  */
  readonly oldColorValue?: string;
  /**
  * 'Arial': Arial; 'Courier_New': Courier New; 'Georgia': Georgia; 'Times_New_Roman': Times New Roman; 'Verdana': Verdana;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#old_face AamAuthenticationPortal#old_face}
  */
  readonly oldFace?: string;
  /**
  * Sepcify font (Default: Arial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#old_font AamAuthenticationPortal#old_font}
  */
  readonly oldFont?: number;
  /**
  * Specify custom font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#old_font_custom AamAuthenticationPortal#old_font_custom}
  */
  readonly oldFontCustom?: string;
  /**
  * Configure old password text in default change password page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#old_password AamAuthenticationPortal#old_password}
  */
  readonly oldPassword?: number;
  /**
  * Specify font size (Default: 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#old_size AamAuthenticationPortal#old_size}
  */
  readonly oldSize?: number;
  /**
  * Specify old password text (Default: Old Password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#old_text AamAuthenticationPortal#old_text}
  */
  readonly oldText?: string;
}

export function aamAuthenticationPortalChangePasswordOldPwdCfgToTerraform(struct?: AamAuthenticationPortalChangePasswordOldPwdCfgOutputReference | AamAuthenticationPortalChangePasswordOldPwdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    old_color: cdktf.numberToTerraform(struct!.oldColor),
    old_color_name: cdktf.stringToTerraform(struct!.oldColorName),
    old_color_value: cdktf.stringToTerraform(struct!.oldColorValue),
    old_face: cdktf.stringToTerraform(struct!.oldFace),
    old_font: cdktf.numberToTerraform(struct!.oldFont),
    old_font_custom: cdktf.stringToTerraform(struct!.oldFontCustom),
    old_password: cdktf.numberToTerraform(struct!.oldPassword),
    old_size: cdktf.numberToTerraform(struct!.oldSize),
    old_text: cdktf.stringToTerraform(struct!.oldText),
  }
}


export function aamAuthenticationPortalChangePasswordOldPwdCfgToHclTerraform(struct?: AamAuthenticationPortalChangePasswordOldPwdCfgOutputReference | AamAuthenticationPortalChangePasswordOldPwdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    old_color: {
      value: cdktf.numberToHclTerraform(struct!.oldColor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    old_color_name: {
      value: cdktf.stringToHclTerraform(struct!.oldColorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    old_color_value: {
      value: cdktf.stringToHclTerraform(struct!.oldColorValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    old_face: {
      value: cdktf.stringToHclTerraform(struct!.oldFace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    old_font: {
      value: cdktf.numberToHclTerraform(struct!.oldFont),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    old_font_custom: {
      value: cdktf.stringToHclTerraform(struct!.oldFontCustom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    old_password: {
      value: cdktf.numberToHclTerraform(struct!.oldPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    old_size: {
      value: cdktf.numberToHclTerraform(struct!.oldSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    old_text: {
      value: cdktf.stringToHclTerraform(struct!.oldText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationPortalChangePasswordOldPwdCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalChangePasswordOldPwdCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oldColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldColor = this._oldColor;
    }
    if (this._oldColorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldColorName = this._oldColorName;
    }
    if (this._oldColorValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldColorValue = this._oldColorValue;
    }
    if (this._oldFace !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldFace = this._oldFace;
    }
    if (this._oldFont !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldFont = this._oldFont;
    }
    if (this._oldFontCustom !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldFontCustom = this._oldFontCustom;
    }
    if (this._oldPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldPassword = this._oldPassword;
    }
    if (this._oldSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldSize = this._oldSize;
    }
    if (this._oldText !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldText = this._oldText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationPortalChangePasswordOldPwdCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oldColor = undefined;
      this._oldColorName = undefined;
      this._oldColorValue = undefined;
      this._oldFace = undefined;
      this._oldFont = undefined;
      this._oldFontCustom = undefined;
      this._oldPassword = undefined;
      this._oldSize = undefined;
      this._oldText = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oldColor = value.oldColor;
      this._oldColorName = value.oldColorName;
      this._oldColorValue = value.oldColorValue;
      this._oldFace = value.oldFace;
      this._oldFont = value.oldFont;
      this._oldFontCustom = value.oldFontCustom;
      this._oldPassword = value.oldPassword;
      this._oldSize = value.oldSize;
      this._oldText = value.oldText;
    }
  }

  // old_color - computed: false, optional: true, required: false
  private _oldColor?: number; 
  public get oldColor() {
    return this.getNumberAttribute('old_color');
  }
  public set oldColor(value: number) {
    this._oldColor = value;
  }
  public resetOldColor() {
    this._oldColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldColorInput() {
    return this._oldColor;
  }

  // old_color_name - computed: false, optional: true, required: false
  private _oldColorName?: string; 
  public get oldColorName() {
    return this.getStringAttribute('old_color_name');
  }
  public set oldColorName(value: string) {
    this._oldColorName = value;
  }
  public resetOldColorName() {
    this._oldColorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldColorNameInput() {
    return this._oldColorName;
  }

  // old_color_value - computed: false, optional: true, required: false
  private _oldColorValue?: string; 
  public get oldColorValue() {
    return this.getStringAttribute('old_color_value');
  }
  public set oldColorValue(value: string) {
    this._oldColorValue = value;
  }
  public resetOldColorValue() {
    this._oldColorValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldColorValueInput() {
    return this._oldColorValue;
  }

  // old_face - computed: false, optional: true, required: false
  private _oldFace?: string; 
  public get oldFace() {
    return this.getStringAttribute('old_face');
  }
  public set oldFace(value: string) {
    this._oldFace = value;
  }
  public resetOldFace() {
    this._oldFace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldFaceInput() {
    return this._oldFace;
  }

  // old_font - computed: false, optional: true, required: false
  private _oldFont?: number; 
  public get oldFont() {
    return this.getNumberAttribute('old_font');
  }
  public set oldFont(value: number) {
    this._oldFont = value;
  }
  public resetOldFont() {
    this._oldFont = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldFontInput() {
    return this._oldFont;
  }

  // old_font_custom - computed: false, optional: true, required: false
  private _oldFontCustom?: string; 
  public get oldFontCustom() {
    return this.getStringAttribute('old_font_custom');
  }
  public set oldFontCustom(value: string) {
    this._oldFontCustom = value;
  }
  public resetOldFontCustom() {
    this._oldFontCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldFontCustomInput() {
    return this._oldFontCustom;
  }

  // old_password - computed: false, optional: true, required: false
  private _oldPassword?: number; 
  public get oldPassword() {
    return this.getNumberAttribute('old_password');
  }
  public set oldPassword(value: number) {
    this._oldPassword = value;
  }
  public resetOldPassword() {
    this._oldPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldPasswordInput() {
    return this._oldPassword;
  }

  // old_size - computed: false, optional: true, required: false
  private _oldSize?: number; 
  public get oldSize() {
    return this.getNumberAttribute('old_size');
  }
  public set oldSize(value: number) {
    this._oldSize = value;
  }
  public resetOldSize() {
    this._oldSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldSizeInput() {
    return this._oldSize;
  }

  // old_text - computed: false, optional: true, required: false
  private _oldText?: string; 
  public get oldText() {
    return this.getStringAttribute('old_text');
  }
  public set oldText(value: string) {
    this._oldText = value;
  }
  public resetOldText() {
    this._oldText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldTextInput() {
    return this._oldText;
  }
}
export interface AamAuthenticationPortalChangePasswordTitleCfg {
  /**
  * Configure title in default change password page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#title AamAuthenticationPortal#title}
  */
  readonly title?: number;
  /**
  * Specify font color (Default: black)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#title_color AamAuthenticationPortal#title_color}
  */
  readonly titleColor?: number;
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#title_color_name AamAuthenticationPortal#title_color_name}
  */
  readonly titleColorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#title_color_value AamAuthenticationPortal#title_color_value}
  */
  readonly titleColorValue?: string;
  /**
  * 'Arial': Arial; 'Courier_New': Courier New; 'Georgia': Georgia; 'Times_New_Roman': Times New Roman; 'Verdana': Verdana;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#title_face AamAuthenticationPortal#title_face}
  */
  readonly titleFace?: string;
  /**
  * Sepcify font (Default: Arial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#title_font AamAuthenticationPortal#title_font}
  */
  readonly titleFont?: number;
  /**
  * Specify custom font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#title_font_custom AamAuthenticationPortal#title_font_custom}
  */
  readonly titleFontCustom?: string;
  /**
  * Specify font size (Default: 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#title_size AamAuthenticationPortal#title_size}
  */
  readonly titleSize?: number;
  /**
  * Specify title (Default: Please Change Your Password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#title_text AamAuthenticationPortal#title_text}
  */
  readonly titleText?: string;
}

export function aamAuthenticationPortalChangePasswordTitleCfgToTerraform(struct?: AamAuthenticationPortalChangePasswordTitleCfgOutputReference | AamAuthenticationPortalChangePasswordTitleCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    title: cdktf.numberToTerraform(struct!.title),
    title_color: cdktf.numberToTerraform(struct!.titleColor),
    title_color_name: cdktf.stringToTerraform(struct!.titleColorName),
    title_color_value: cdktf.stringToTerraform(struct!.titleColorValue),
    title_face: cdktf.stringToTerraform(struct!.titleFace),
    title_font: cdktf.numberToTerraform(struct!.titleFont),
    title_font_custom: cdktf.stringToTerraform(struct!.titleFontCustom),
    title_size: cdktf.numberToTerraform(struct!.titleSize),
    title_text: cdktf.stringToTerraform(struct!.titleText),
  }
}


export function aamAuthenticationPortalChangePasswordTitleCfgToHclTerraform(struct?: AamAuthenticationPortalChangePasswordTitleCfgOutputReference | AamAuthenticationPortalChangePasswordTitleCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    title: {
      value: cdktf.numberToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title_color: {
      value: cdktf.numberToHclTerraform(struct!.titleColor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title_color_name: {
      value: cdktf.stringToHclTerraform(struct!.titleColorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title_color_value: {
      value: cdktf.stringToHclTerraform(struct!.titleColorValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title_face: {
      value: cdktf.stringToHclTerraform(struct!.titleFace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title_font: {
      value: cdktf.numberToHclTerraform(struct!.titleFont),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title_font_custom: {
      value: cdktf.stringToHclTerraform(struct!.titleFontCustom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title_size: {
      value: cdktf.numberToHclTerraform(struct!.titleSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title_text: {
      value: cdktf.stringToHclTerraform(struct!.titleText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationPortalChangePasswordTitleCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalChangePasswordTitleCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._titleColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleColor = this._titleColor;
    }
    if (this._titleColorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleColorName = this._titleColorName;
    }
    if (this._titleColorValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleColorValue = this._titleColorValue;
    }
    if (this._titleFace !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleFace = this._titleFace;
    }
    if (this._titleFont !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleFont = this._titleFont;
    }
    if (this._titleFontCustom !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleFontCustom = this._titleFontCustom;
    }
    if (this._titleSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleSize = this._titleSize;
    }
    if (this._titleText !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleText = this._titleText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationPortalChangePasswordTitleCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._title = undefined;
      this._titleColor = undefined;
      this._titleColorName = undefined;
      this._titleColorValue = undefined;
      this._titleFace = undefined;
      this._titleFont = undefined;
      this._titleFontCustom = undefined;
      this._titleSize = undefined;
      this._titleText = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._title = value.title;
      this._titleColor = value.titleColor;
      this._titleColorName = value.titleColorName;
      this._titleColorValue = value.titleColorValue;
      this._titleFace = value.titleFace;
      this._titleFont = value.titleFont;
      this._titleFontCustom = value.titleFontCustom;
      this._titleSize = value.titleSize;
      this._titleText = value.titleText;
    }
  }

  // title - computed: false, optional: true, required: false
  private _title?: number; 
  public get title() {
    return this.getNumberAttribute('title');
  }
  public set title(value: number) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // title_color - computed: false, optional: true, required: false
  private _titleColor?: number; 
  public get titleColor() {
    return this.getNumberAttribute('title_color');
  }
  public set titleColor(value: number) {
    this._titleColor = value;
  }
  public resetTitleColor() {
    this._titleColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleColorInput() {
    return this._titleColor;
  }

  // title_color_name - computed: false, optional: true, required: false
  private _titleColorName?: string; 
  public get titleColorName() {
    return this.getStringAttribute('title_color_name');
  }
  public set titleColorName(value: string) {
    this._titleColorName = value;
  }
  public resetTitleColorName() {
    this._titleColorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleColorNameInput() {
    return this._titleColorName;
  }

  // title_color_value - computed: false, optional: true, required: false
  private _titleColorValue?: string; 
  public get titleColorValue() {
    return this.getStringAttribute('title_color_value');
  }
  public set titleColorValue(value: string) {
    this._titleColorValue = value;
  }
  public resetTitleColorValue() {
    this._titleColorValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleColorValueInput() {
    return this._titleColorValue;
  }

  // title_face - computed: false, optional: true, required: false
  private _titleFace?: string; 
  public get titleFace() {
    return this.getStringAttribute('title_face');
  }
  public set titleFace(value: string) {
    this._titleFace = value;
  }
  public resetTitleFace() {
    this._titleFace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleFaceInput() {
    return this._titleFace;
  }

  // title_font - computed: false, optional: true, required: false
  private _titleFont?: number; 
  public get titleFont() {
    return this.getNumberAttribute('title_font');
  }
  public set titleFont(value: number) {
    this._titleFont = value;
  }
  public resetTitleFont() {
    this._titleFont = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleFontInput() {
    return this._titleFont;
  }

  // title_font_custom - computed: false, optional: true, required: false
  private _titleFontCustom?: string; 
  public get titleFontCustom() {
    return this.getStringAttribute('title_font_custom');
  }
  public set titleFontCustom(value: string) {
    this._titleFontCustom = value;
  }
  public resetTitleFontCustom() {
    this._titleFontCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleFontCustomInput() {
    return this._titleFontCustom;
  }

  // title_size - computed: false, optional: true, required: false
  private _titleSize?: number; 
  public get titleSize() {
    return this.getNumberAttribute('title_size');
  }
  public set titleSize(value: number) {
    this._titleSize = value;
  }
  public resetTitleSize() {
    this._titleSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleSizeInput() {
    return this._titleSize;
  }

  // title_text - computed: false, optional: true, required: false
  private _titleText?: string; 
  public get titleText() {
    return this.getStringAttribute('title_text');
  }
  public set titleText(value: string) {
    this._titleText = value;
  }
  public resetTitleText() {
    this._titleText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleTextInput() {
    return this._titleText;
  }
}
export interface AamAuthenticationPortalChangePasswordUsernameCfg {
  /**
  * Specify font color (Default: black)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#user_color AamAuthenticationPortal#user_color}
  */
  readonly userColor?: number;
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#user_color_name AamAuthenticationPortal#user_color_name}
  */
  readonly userColorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#user_color_value AamAuthenticationPortal#user_color_value}
  */
  readonly userColorValue?: string;
  /**
  * 'Arial': Arial; 'Courier_New': Courier New; 'Georgia': Georgia; 'Times_New_Roman': Times New Roman; 'Verdana': Verdana;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#user_face AamAuthenticationPortal#user_face}
  */
  readonly userFace?: string;
  /**
  * Sepcify font (Default: Arial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#user_font AamAuthenticationPortal#user_font}
  */
  readonly userFont?: number;
  /**
  * Specify custom font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#user_font_custom AamAuthenticationPortal#user_font_custom}
  */
  readonly userFontCustom?: string;
  /**
  * Specify font size (Default: 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#user_size AamAuthenticationPortal#user_size}
  */
  readonly userSize?: number;
  /**
  * Specify username text (Default: Username)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#user_text AamAuthenticationPortal#user_text}
  */
  readonly userText?: string;
  /**
  * Configure username text in default change password page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#username AamAuthenticationPortal#username}
  */
  readonly username?: number;
}

export function aamAuthenticationPortalChangePasswordUsernameCfgToTerraform(struct?: AamAuthenticationPortalChangePasswordUsernameCfgOutputReference | AamAuthenticationPortalChangePasswordUsernameCfg): any {
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


export function aamAuthenticationPortalChangePasswordUsernameCfgToHclTerraform(struct?: AamAuthenticationPortalChangePasswordUsernameCfgOutputReference | AamAuthenticationPortalChangePasswordUsernameCfg): any {
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

export class AamAuthenticationPortalChangePasswordUsernameCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalChangePasswordUsernameCfg | undefined {
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

  public set internalValue(value: AamAuthenticationPortalChangePasswordUsernameCfg | undefined) {
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
export interface AamAuthenticationPortalChangePassword {
  /**
  * Specify form action URL in default change password page (Default: /change.fo)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#action_url AamAuthenticationPortal#action_url}
  */
  readonly actionUrl?: string;
  /**
  * Specify confirm password variable name in default change password page (Default: cp_cfm_pwd)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#confirm_password_var AamAuthenticationPortal#confirm_password_var}
  */
  readonly confirmPasswordVar?: string;
  /**
  * Specify new password variable name in default change password page (Default: cp_new_pwd)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#new_password_var AamAuthenticationPortal#new_password_var}
  */
  readonly newPasswordVar?: string;
  /**
  * Specify old password variable name in default change password page (Default: cp_old_pwd)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#old_password_var AamAuthenticationPortal#old_password_var}
  */
  readonly oldPasswordVar?: string;
  /**
  * Specify reset button text in default change password page (Default: Reset)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#reset_text AamAuthenticationPortal#reset_text}
  */
  readonly resetText?: string;
  /**
  * Specify submit button text in default change password page (Default: Submit)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#submit_text AamAuthenticationPortal#submit_text}
  */
  readonly submitText?: string;
  /**
  * Specify username variable name in default change password page (Default: cp_usr)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#username_var AamAuthenticationPortal#username_var}
  */
  readonly usernameVar?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#uuid AamAuthenticationPortal#uuid}
  */
  readonly uuid?: string;
  /**
  * background block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#background AamAuthenticationPortal#background}
  */
  readonly background?: AamAuthenticationPortalChangePasswordBackground;
  /**
  * cfm_pwd_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#cfm_pwd_cfg AamAuthenticationPortal#cfm_pwd_cfg}
  */
  readonly cfmPwdCfg?: AamAuthenticationPortalChangePasswordCfmPwdCfg;
  /**
  * new_pwd_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#new_pwd_cfg AamAuthenticationPortal#new_pwd_cfg}
  */
  readonly newPwdCfg?: AamAuthenticationPortalChangePasswordNewPwdCfg;
  /**
  * old_pwd_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#old_pwd_cfg AamAuthenticationPortal#old_pwd_cfg}
  */
  readonly oldPwdCfg?: AamAuthenticationPortalChangePasswordOldPwdCfg;
  /**
  * title_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#title_cfg AamAuthenticationPortal#title_cfg}
  */
  readonly titleCfg?: AamAuthenticationPortalChangePasswordTitleCfg;
  /**
  * username_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#username_cfg AamAuthenticationPortal#username_cfg}
  */
  readonly usernameCfg?: AamAuthenticationPortalChangePasswordUsernameCfg;
}

export function aamAuthenticationPortalChangePasswordToTerraform(struct?: AamAuthenticationPortalChangePasswordOutputReference | AamAuthenticationPortalChangePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_url: cdktf.stringToTerraform(struct!.actionUrl),
    confirm_password_var: cdktf.stringToTerraform(struct!.confirmPasswordVar),
    new_password_var: cdktf.stringToTerraform(struct!.newPasswordVar),
    old_password_var: cdktf.stringToTerraform(struct!.oldPasswordVar),
    reset_text: cdktf.stringToTerraform(struct!.resetText),
    submit_text: cdktf.stringToTerraform(struct!.submitText),
    username_var: cdktf.stringToTerraform(struct!.usernameVar),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    background: aamAuthenticationPortalChangePasswordBackgroundToTerraform(struct!.background),
    cfm_pwd_cfg: aamAuthenticationPortalChangePasswordCfmPwdCfgToTerraform(struct!.cfmPwdCfg),
    new_pwd_cfg: aamAuthenticationPortalChangePasswordNewPwdCfgToTerraform(struct!.newPwdCfg),
    old_pwd_cfg: aamAuthenticationPortalChangePasswordOldPwdCfgToTerraform(struct!.oldPwdCfg),
    title_cfg: aamAuthenticationPortalChangePasswordTitleCfgToTerraform(struct!.titleCfg),
    username_cfg: aamAuthenticationPortalChangePasswordUsernameCfgToTerraform(struct!.usernameCfg),
  }
}


export function aamAuthenticationPortalChangePasswordToHclTerraform(struct?: AamAuthenticationPortalChangePasswordOutputReference | AamAuthenticationPortalChangePassword): any {
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
    confirm_password_var: {
      value: cdktf.stringToHclTerraform(struct!.confirmPasswordVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_password_var: {
      value: cdktf.stringToHclTerraform(struct!.newPasswordVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    old_password_var: {
      value: cdktf.stringToHclTerraform(struct!.oldPasswordVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    reset_text: {
      value: cdktf.stringToHclTerraform(struct!.resetText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    submit_text: {
      value: cdktf.stringToHclTerraform(struct!.submitText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_var: {
      value: cdktf.stringToHclTerraform(struct!.usernameVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    background: {
      value: aamAuthenticationPortalChangePasswordBackgroundToHclTerraform(struct!.background),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationPortalChangePasswordBackgroundList",
    },
    cfm_pwd_cfg: {
      value: aamAuthenticationPortalChangePasswordCfmPwdCfgToHclTerraform(struct!.cfmPwdCfg),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationPortalChangePasswordCfmPwdCfgList",
    },
    new_pwd_cfg: {
      value: aamAuthenticationPortalChangePasswordNewPwdCfgToHclTerraform(struct!.newPwdCfg),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationPortalChangePasswordNewPwdCfgList",
    },
    old_pwd_cfg: {
      value: aamAuthenticationPortalChangePasswordOldPwdCfgToHclTerraform(struct!.oldPwdCfg),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationPortalChangePasswordOldPwdCfgList",
    },
    title_cfg: {
      value: aamAuthenticationPortalChangePasswordTitleCfgToHclTerraform(struct!.titleCfg),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationPortalChangePasswordTitleCfgList",
    },
    username_cfg: {
      value: aamAuthenticationPortalChangePasswordUsernameCfgToHclTerraform(struct!.usernameCfg),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationPortalChangePasswordUsernameCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationPortalChangePasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalChangePassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionUrl = this._actionUrl;
    }
    if (this._confirmPasswordVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmPasswordVar = this._confirmPasswordVar;
    }
    if (this._newPasswordVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.newPasswordVar = this._newPasswordVar;
    }
    if (this._oldPasswordVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldPasswordVar = this._oldPasswordVar;
    }
    if (this._resetText !== undefined) {
      hasAnyValues = true;
      internalValueResult.resetText = this._resetText;
    }
    if (this._submitText !== undefined) {
      hasAnyValues = true;
      internalValueResult.submitText = this._submitText;
    }
    if (this._usernameVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameVar = this._usernameVar;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._background?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.background = this._background?.internalValue;
    }
    if (this._cfmPwdCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfmPwdCfg = this._cfmPwdCfg?.internalValue;
    }
    if (this._newPwdCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newPwdCfg = this._newPwdCfg?.internalValue;
    }
    if (this._oldPwdCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldPwdCfg = this._oldPwdCfg?.internalValue;
    }
    if (this._titleCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleCfg = this._titleCfg?.internalValue;
    }
    if (this._usernameCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameCfg = this._usernameCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationPortalChangePassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionUrl = undefined;
      this._confirmPasswordVar = undefined;
      this._newPasswordVar = undefined;
      this._oldPasswordVar = undefined;
      this._resetText = undefined;
      this._submitText = undefined;
      this._usernameVar = undefined;
      this._uuid = undefined;
      this._background.internalValue = undefined;
      this._cfmPwdCfg.internalValue = undefined;
      this._newPwdCfg.internalValue = undefined;
      this._oldPwdCfg.internalValue = undefined;
      this._titleCfg.internalValue = undefined;
      this._usernameCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionUrl = value.actionUrl;
      this._confirmPasswordVar = value.confirmPasswordVar;
      this._newPasswordVar = value.newPasswordVar;
      this._oldPasswordVar = value.oldPasswordVar;
      this._resetText = value.resetText;
      this._submitText = value.submitText;
      this._usernameVar = value.usernameVar;
      this._uuid = value.uuid;
      this._background.internalValue = value.background;
      this._cfmPwdCfg.internalValue = value.cfmPwdCfg;
      this._newPwdCfg.internalValue = value.newPwdCfg;
      this._oldPwdCfg.internalValue = value.oldPwdCfg;
      this._titleCfg.internalValue = value.titleCfg;
      this._usernameCfg.internalValue = value.usernameCfg;
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

  // confirm_password_var - computed: false, optional: true, required: false
  private _confirmPasswordVar?: string; 
  public get confirmPasswordVar() {
    return this.getStringAttribute('confirm_password_var');
  }
  public set confirmPasswordVar(value: string) {
    this._confirmPasswordVar = value;
  }
  public resetConfirmPasswordVar() {
    this._confirmPasswordVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmPasswordVarInput() {
    return this._confirmPasswordVar;
  }

  // new_password_var - computed: false, optional: true, required: false
  private _newPasswordVar?: string; 
  public get newPasswordVar() {
    return this.getStringAttribute('new_password_var');
  }
  public set newPasswordVar(value: string) {
    this._newPasswordVar = value;
  }
  public resetNewPasswordVar() {
    this._newPasswordVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPasswordVarInput() {
    return this._newPasswordVar;
  }

  // old_password_var - computed: false, optional: true, required: false
  private _oldPasswordVar?: string; 
  public get oldPasswordVar() {
    return this.getStringAttribute('old_password_var');
  }
  public set oldPasswordVar(value: string) {
    this._oldPasswordVar = value;
  }
  public resetOldPasswordVar() {
    this._oldPasswordVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldPasswordVarInput() {
    return this._oldPasswordVar;
  }

  // reset_text - computed: false, optional: true, required: false
  private _resetText?: string; 
  public get resetText() {
    return this.getStringAttribute('reset_text');
  }
  public set resetText(value: string) {
    this._resetText = value;
  }
  public resetResetText() {
    this._resetText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resetTextInput() {
    return this._resetText;
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
  private _background = new AamAuthenticationPortalChangePasswordBackgroundOutputReference(this, "background");
  public get background() {
    return this._background;
  }
  public putBackground(value: AamAuthenticationPortalChangePasswordBackground) {
    this._background.internalValue = value;
  }
  public resetBackground() {
    this._background.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundInput() {
    return this._background.internalValue;
  }

  // cfm_pwd_cfg - computed: false, optional: true, required: false
  private _cfmPwdCfg = new AamAuthenticationPortalChangePasswordCfmPwdCfgOutputReference(this, "cfm_pwd_cfg");
  public get cfmPwdCfg() {
    return this._cfmPwdCfg;
  }
  public putCfmPwdCfg(value: AamAuthenticationPortalChangePasswordCfmPwdCfg) {
    this._cfmPwdCfg.internalValue = value;
  }
  public resetCfmPwdCfg() {
    this._cfmPwdCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmPwdCfgInput() {
    return this._cfmPwdCfg.internalValue;
  }

  // new_pwd_cfg - computed: false, optional: true, required: false
  private _newPwdCfg = new AamAuthenticationPortalChangePasswordNewPwdCfgOutputReference(this, "new_pwd_cfg");
  public get newPwdCfg() {
    return this._newPwdCfg;
  }
  public putNewPwdCfg(value: AamAuthenticationPortalChangePasswordNewPwdCfg) {
    this._newPwdCfg.internalValue = value;
  }
  public resetNewPwdCfg() {
    this._newPwdCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPwdCfgInput() {
    return this._newPwdCfg.internalValue;
  }

  // old_pwd_cfg - computed: false, optional: true, required: false
  private _oldPwdCfg = new AamAuthenticationPortalChangePasswordOldPwdCfgOutputReference(this, "old_pwd_cfg");
  public get oldPwdCfg() {
    return this._oldPwdCfg;
  }
  public putOldPwdCfg(value: AamAuthenticationPortalChangePasswordOldPwdCfg) {
    this._oldPwdCfg.internalValue = value;
  }
  public resetOldPwdCfg() {
    this._oldPwdCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldPwdCfgInput() {
    return this._oldPwdCfg.internalValue;
  }

  // title_cfg - computed: false, optional: true, required: false
  private _titleCfg = new AamAuthenticationPortalChangePasswordTitleCfgOutputReference(this, "title_cfg");
  public get titleCfg() {
    return this._titleCfg;
  }
  public putTitleCfg(value: AamAuthenticationPortalChangePasswordTitleCfg) {
    this._titleCfg.internalValue = value;
  }
  public resetTitleCfg() {
    this._titleCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleCfgInput() {
    return this._titleCfg.internalValue;
  }

  // username_cfg - computed: false, optional: true, required: false
  private _usernameCfg = new AamAuthenticationPortalChangePasswordUsernameCfgOutputReference(this, "username_cfg");
  public get usernameCfg() {
    return this._usernameCfg;
  }
  public putUsernameCfg(value: AamAuthenticationPortalChangePasswordUsernameCfg) {
    this._usernameCfg.internalValue = value;
  }
  public resetUsernameCfg() {
    this._usernameCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameCfgInput() {
    return this._usernameCfg.internalValue;
  }
}
export interface AamAuthenticationPortalLogoCfg {
  /**
  * Specify logo image height (Default: 71)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#height AamAuthenticationPortal#height}
  */
  readonly height?: number;
  /**
  * Specify logo image filename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#logo AamAuthenticationPortal#logo}
  */
  readonly logo?: string;
  /**
  * Specify logo image width (Default: 134)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#width AamAuthenticationPortal#width}
  */
  readonly width?: number;
}

export function aamAuthenticationPortalLogoCfgToTerraform(struct?: AamAuthenticationPortalLogoCfgOutputReference | AamAuthenticationPortalLogoCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    height: cdktf.numberToTerraform(struct!.height),
    logo: cdktf.stringToTerraform(struct!.logo),
    width: cdktf.numberToTerraform(struct!.width),
  }
}


export function aamAuthenticationPortalLogoCfgToHclTerraform(struct?: AamAuthenticationPortalLogoCfgOutputReference | AamAuthenticationPortalLogoCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    height: {
      value: cdktf.numberToHclTerraform(struct!.height),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    logo: {
      value: cdktf.stringToHclTerraform(struct!.logo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    width: {
      value: cdktf.numberToHclTerraform(struct!.width),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationPortalLogoCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalLogoCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._height !== undefined) {
      hasAnyValues = true;
      internalValueResult.height = this._height;
    }
    if (this._logo !== undefined) {
      hasAnyValues = true;
      internalValueResult.logo = this._logo;
    }
    if (this._width !== undefined) {
      hasAnyValues = true;
      internalValueResult.width = this._width;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationPortalLogoCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._height = undefined;
      this._logo = undefined;
      this._width = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._height = value.height;
      this._logo = value.logo;
      this._width = value.width;
    }
  }

  // height - computed: false, optional: true, required: false
  private _height?: number; 
  public get height() {
    return this.getNumberAttribute('height');
  }
  public set height(value: number) {
    this._height = value;
  }
  public resetHeight() {
    this._height = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get heightInput() {
    return this._height;
  }

  // logo - computed: false, optional: true, required: false
  private _logo?: string; 
  public get logo() {
    return this.getStringAttribute('logo');
  }
  public set logo(value: string) {
    this._logo = value;
  }
  public resetLogo() {
    this._logo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoInput() {
    return this._logo;
  }

  // width - computed: false, optional: true, required: false
  private _width?: number; 
  public get width() {
    return this.getNumberAttribute('width');
  }
  public set width(value: number) {
    this._width = value;
  }
  public resetWidth() {
    this._width = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get widthInput() {
    return this._width;
  }
}
export interface AamAuthenticationPortalLogonBackground {
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#bgcolor_name AamAuthenticationPortal#bgcolor_name}
  */
  readonly bgcolorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#bgcolor_value AamAuthenticationPortal#bgcolor_value}
  */
  readonly bgcolorValue?: string;
  /**
  * Specify background image filename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#bgfile AamAuthenticationPortal#bgfile}
  */
  readonly bgfile?: string;
  /**
  * 'tile': Tile; 'stretch': Stretch; 'fit': Fit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#bgstyle AamAuthenticationPortal#bgstyle}
  */
  readonly bgstyle?: string;
}

export function aamAuthenticationPortalLogonBackgroundToTerraform(struct?: AamAuthenticationPortalLogonBackgroundOutputReference | AamAuthenticationPortalLogonBackground): any {
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


export function aamAuthenticationPortalLogonBackgroundToHclTerraform(struct?: AamAuthenticationPortalLogonBackgroundOutputReference | AamAuthenticationPortalLogonBackground): any {
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

export class AamAuthenticationPortalLogonBackgroundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalLogonBackground | undefined {
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

  public set internalValue(value: AamAuthenticationPortalLogonBackground | undefined) {
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
export interface AamAuthenticationPortalLogonFailMsgCfg {
  /**
  * Configure authorization failure message in default logon page, its text attributes follow fail-msg's (Specify authorization failure message (Default: Authorization failed. Please contact your system administrator.))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#authz_fail_msg AamAuthenticationPortal#authz_fail_msg}
  */
  readonly authzFailMsg?: string;
  /**
  * Specify font color (Default: red)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#fail_color AamAuthenticationPortal#fail_color}
  */
  readonly failColor?: number;
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#fail_color_name AamAuthenticationPortal#fail_color_name}
  */
  readonly failColorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#fail_color_value AamAuthenticationPortal#fail_color_value}
  */
  readonly failColorValue?: string;
  /**
  * 'Arial': Arial; 'Courier_New': Courier New; 'Georgia': Georgia; 'Times_New_Roman': Times New Roman; 'Verdana': Verdana;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#fail_face AamAuthenticationPortal#fail_face}
  */
  readonly failFace?: string;
  /**
  * Sepcify font (Default: Arial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#fail_font AamAuthenticationPortal#fail_font}
  */
  readonly failFont?: number;
  /**
  * Specify custom font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#fail_font_custom AamAuthenticationPortal#fail_font_custom}
  */
  readonly failFontCustom?: string;
  /**
  * Configure login failure message in default logon page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#fail_msg AamAuthenticationPortal#fail_msg}
  */
  readonly failMsg?: number;
  /**
  * Specify font size (Default: 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#fail_size AamAuthenticationPortal#fail_size}
  */
  readonly failSize?: number;
  /**
  * Specify login failure message (Default: Invalid username or password. Please try again.)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#fail_text AamAuthenticationPortal#fail_text}
  */
  readonly failText?: string;
}

export function aamAuthenticationPortalLogonFailMsgCfgToTerraform(struct?: AamAuthenticationPortalLogonFailMsgCfgOutputReference | AamAuthenticationPortalLogonFailMsgCfg): any {
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


export function aamAuthenticationPortalLogonFailMsgCfgToHclTerraform(struct?: AamAuthenticationPortalLogonFailMsgCfgOutputReference | AamAuthenticationPortalLogonFailMsgCfg): any {
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

export class AamAuthenticationPortalLogonFailMsgCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalLogonFailMsgCfg | undefined {
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

  public set internalValue(value: AamAuthenticationPortalLogonFailMsgCfg | undefined) {
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
export interface AamAuthenticationPortalLogonPasscodeCfg {
  /**
  * Configure passcode text in default logon page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#passcode AamAuthenticationPortal#passcode}
  */
  readonly passcode?: number;
  /**
  * Specify font color (Default: black)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#passcode_color AamAuthenticationPortal#passcode_color}
  */
  readonly passcodeColor?: number;
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#passcode_color_name AamAuthenticationPortal#passcode_color_name}
  */
  readonly passcodeColorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#passcode_color_value AamAuthenticationPortal#passcode_color_value}
  */
  readonly passcodeColorValue?: string;
  /**
  * 'Arial': Arial; 'Courier_New': Courier New; 'Georgia': Georgia; 'Times_New_Roman': Times New Roman; 'Verdana': Verdana;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#passcode_face AamAuthenticationPortal#passcode_face}
  */
  readonly passcodeFace?: string;
  /**
  * Sepcify font (Default: Arial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#passcode_font AamAuthenticationPortal#passcode_font}
  */
  readonly passcodeFont?: number;
  /**
  * Specify custom font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#passcode_font_custom AamAuthenticationPortal#passcode_font_custom}
  */
  readonly passcodeFontCustom?: string;
  /**
  * Specify font size (Default: 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#passcode_size AamAuthenticationPortal#passcode_size}
  */
  readonly passcodeSize?: number;
  /**
  * Specify passcode text (Default: Passcode)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#passcode_text AamAuthenticationPortal#passcode_text}
  */
  readonly passcodeText?: string;
}

export function aamAuthenticationPortalLogonPasscodeCfgToTerraform(struct?: AamAuthenticationPortalLogonPasscodeCfgOutputReference | AamAuthenticationPortalLogonPasscodeCfg): any {
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


export function aamAuthenticationPortalLogonPasscodeCfgToHclTerraform(struct?: AamAuthenticationPortalLogonPasscodeCfgOutputReference | AamAuthenticationPortalLogonPasscodeCfg): any {
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

export class AamAuthenticationPortalLogonPasscodeCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalLogonPasscodeCfg | undefined {
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

  public set internalValue(value: AamAuthenticationPortalLogonPasscodeCfg | undefined) {
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
export interface AamAuthenticationPortalLogonPasswordCfg {
  /**
  * Specify font color (Default: black)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#pass_color AamAuthenticationPortal#pass_color}
  */
  readonly passColor?: number;
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#pass_color_name AamAuthenticationPortal#pass_color_name}
  */
  readonly passColorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#pass_color_value AamAuthenticationPortal#pass_color_value}
  */
  readonly passColorValue?: string;
  /**
  * 'Arial': Arial; 'Courier_New': Courier New; 'Georgia': Georgia; 'Times_New_Roman': Times New Roman; 'Verdana': Verdana;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#pass_face AamAuthenticationPortal#pass_face}
  */
  readonly passFace?: string;
  /**
  * Sepcify font (Default: Arial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#pass_font AamAuthenticationPortal#pass_font}
  */
  readonly passFont?: number;
  /**
  * Specify custom font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#pass_font_custom AamAuthenticationPortal#pass_font_custom}
  */
  readonly passFontCustom?: string;
  /**
  * Specify font size (Default: 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#pass_size AamAuthenticationPortal#pass_size}
  */
  readonly passSize?: number;
  /**
  * Specify password text (Default: Password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#pass_text AamAuthenticationPortal#pass_text}
  */
  readonly passText?: string;
  /**
  * Configure password text in default logon page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#password AamAuthenticationPortal#password}
  */
  readonly password?: number;
}

export function aamAuthenticationPortalLogonPasswordCfgToTerraform(struct?: AamAuthenticationPortalLogonPasswordCfgOutputReference | AamAuthenticationPortalLogonPasswordCfg): any {
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


export function aamAuthenticationPortalLogonPasswordCfgToHclTerraform(struct?: AamAuthenticationPortalLogonPasswordCfgOutputReference | AamAuthenticationPortalLogonPasswordCfg): any {
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

export class AamAuthenticationPortalLogonPasswordCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalLogonPasswordCfg | undefined {
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

  public set internalValue(value: AamAuthenticationPortalLogonPasswordCfg | undefined) {
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
export interface AamAuthenticationPortalLogonRecaptchaCfg {
  /**
  * Specify reCAPTCHA action (Specify action string, only accept alphanumeric, underscore, and slash (Default: A10_DEFAULT_LOGON))
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#recaptcha_action AamAuthenticationPortal#recaptcha_action}
  */
  readonly recaptchaAction?: string;
  /**
  * 'bottom-left': bottom left corner; 'bottom-right': bottom right corner;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#recaptcha_badge AamAuthenticationPortal#recaptcha_badge}
  */
  readonly recaptchaBadge?: string;
  /**
  * 'normal': normal size; 'compact': compact size;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#recaptcha_size AamAuthenticationPortal#recaptcha_size}
  */
  readonly recaptchaSize?: string;
  /**
  * 'light': light theme; 'dark': dark theme;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#recaptcha_theme AamAuthenticationPortal#recaptcha_theme}
  */
  readonly recaptchaTheme?: string;
}

export function aamAuthenticationPortalLogonRecaptchaCfgToTerraform(struct?: AamAuthenticationPortalLogonRecaptchaCfgOutputReference | AamAuthenticationPortalLogonRecaptchaCfg): any {
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


export function aamAuthenticationPortalLogonRecaptchaCfgToHclTerraform(struct?: AamAuthenticationPortalLogonRecaptchaCfgOutputReference | AamAuthenticationPortalLogonRecaptchaCfg): any {
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

export class AamAuthenticationPortalLogonRecaptchaCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalLogonRecaptchaCfg | undefined {
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

  public set internalValue(value: AamAuthenticationPortalLogonRecaptchaCfg | undefined) {
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
export interface AamAuthenticationPortalLogonUsernameCfg {
  /**
  * Specify font color (Default: black)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#user_color AamAuthenticationPortal#user_color}
  */
  readonly userColor?: number;
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#user_color_name AamAuthenticationPortal#user_color_name}
  */
  readonly userColorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#user_color_value AamAuthenticationPortal#user_color_value}
  */
  readonly userColorValue?: string;
  /**
  * 'Arial': Arial; 'Courier_New': Courier New; 'Georgia': Georgia; 'Times_New_Roman': Times New Roman; 'Verdana': Verdana;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#user_face AamAuthenticationPortal#user_face}
  */
  readonly userFace?: string;
  /**
  * Sepcify font (Default: Arial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#user_font AamAuthenticationPortal#user_font}
  */
  readonly userFont?: number;
  /**
  * Specify custom font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#user_font_custom AamAuthenticationPortal#user_font_custom}
  */
  readonly userFontCustom?: string;
  /**
  * Specify font size (Default: 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#user_size AamAuthenticationPortal#user_size}
  */
  readonly userSize?: number;
  /**
  * Specify username text (Default: User Name)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#user_text AamAuthenticationPortal#user_text}
  */
  readonly userText?: string;
  /**
  * Configure username text in default logon page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#username AamAuthenticationPortal#username}
  */
  readonly username?: number;
}

export function aamAuthenticationPortalLogonUsernameCfgToTerraform(struct?: AamAuthenticationPortalLogonUsernameCfgOutputReference | AamAuthenticationPortalLogonUsernameCfg): any {
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


export function aamAuthenticationPortalLogonUsernameCfgToHclTerraform(struct?: AamAuthenticationPortalLogonUsernameCfgOutputReference | AamAuthenticationPortalLogonUsernameCfg): any {
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

export class AamAuthenticationPortalLogonUsernameCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalLogonUsernameCfg | undefined {
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

  public set internalValue(value: AamAuthenticationPortalLogonUsernameCfg | undefined) {
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
export interface AamAuthenticationPortalLogon {
  /**
  * Specify form action URL in default logon page (Default: /logon.fo)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#action_url AamAuthenticationPortal#action_url}
  */
  readonly actionUrl?: string;
  /**
  * 'reCAPTCHAv2-checkbox': Google reCAPTCHAv2 Checkbox; 'reCAPTCHAv2-invisible': Google reCAPTCHAv2 Invisible; 'reCAPTCHAv3': Google reCAPTCHAv3;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#captcha_type AamAuthenticationPortal#captcha_type}
  */
  readonly captchaType?: string;
  /**
  * Enable CAPTCHA in deafult logon page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#enable_captcha AamAuthenticationPortal#enable_captcha}
  */
  readonly enableCaptcha?: number;
  /**
  * Enable passcode field in default logon page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#enable_passcode AamAuthenticationPortal#enable_passcode}
  */
  readonly enablePasscode?: number;
  /**
  * Specify passcode variable name in default logon page (Default: passcode)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#passcode_var AamAuthenticationPortal#passcode_var}
  */
  readonly passcodeVar?: string;
  /**
  * Specify password variable name in default logon page (Default: pwd)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#password_var AamAuthenticationPortal#password_var}
  */
  readonly passwordVar?: string;
  /**
  * Site key string
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#site_key_string AamAuthenticationPortal#site_key_string}
  */
  readonly siteKeyString?: string;
  /**
  * Specify submit button text in default logon page (Default: Log In)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#submit_text AamAuthenticationPortal#submit_text}
  */
  readonly submitText?: string;
  /**
  * Specify username variable name in default logon page (Default: user)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#username_var AamAuthenticationPortal#username_var}
  */
  readonly usernameVar?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#uuid AamAuthenticationPortal#uuid}
  */
  readonly uuid?: string;
  /**
  * background block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#background AamAuthenticationPortal#background}
  */
  readonly background?: AamAuthenticationPortalLogonBackground;
  /**
  * fail_msg_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#fail_msg_cfg AamAuthenticationPortal#fail_msg_cfg}
  */
  readonly failMsgCfg?: AamAuthenticationPortalLogonFailMsgCfg;
  /**
  * passcode_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#passcode_cfg AamAuthenticationPortal#passcode_cfg}
  */
  readonly passcodeCfg?: AamAuthenticationPortalLogonPasscodeCfg;
  /**
  * password_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#password_cfg AamAuthenticationPortal#password_cfg}
  */
  readonly passwordCfg?: AamAuthenticationPortalLogonPasswordCfg;
  /**
  * recaptcha_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#recaptcha_cfg AamAuthenticationPortal#recaptcha_cfg}
  */
  readonly recaptchaCfg?: AamAuthenticationPortalLogonRecaptchaCfg;
  /**
  * username_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#username_cfg AamAuthenticationPortal#username_cfg}
  */
  readonly usernameCfg?: AamAuthenticationPortalLogonUsernameCfg;
}

export function aamAuthenticationPortalLogonToTerraform(struct?: AamAuthenticationPortalLogonOutputReference | AamAuthenticationPortalLogon): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action_url: cdktf.stringToTerraform(struct!.actionUrl),
    captcha_type: cdktf.stringToTerraform(struct!.captchaType),
    enable_captcha: cdktf.numberToTerraform(struct!.enableCaptcha),
    enable_passcode: cdktf.numberToTerraform(struct!.enablePasscode),
    passcode_var: cdktf.stringToTerraform(struct!.passcodeVar),
    password_var: cdktf.stringToTerraform(struct!.passwordVar),
    site_key_string: cdktf.stringToTerraform(struct!.siteKeyString),
    submit_text: cdktf.stringToTerraform(struct!.submitText),
    username_var: cdktf.stringToTerraform(struct!.usernameVar),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    background: aamAuthenticationPortalLogonBackgroundToTerraform(struct!.background),
    fail_msg_cfg: aamAuthenticationPortalLogonFailMsgCfgToTerraform(struct!.failMsgCfg),
    passcode_cfg: aamAuthenticationPortalLogonPasscodeCfgToTerraform(struct!.passcodeCfg),
    password_cfg: aamAuthenticationPortalLogonPasswordCfgToTerraform(struct!.passwordCfg),
    recaptcha_cfg: aamAuthenticationPortalLogonRecaptchaCfgToTerraform(struct!.recaptchaCfg),
    username_cfg: aamAuthenticationPortalLogonUsernameCfgToTerraform(struct!.usernameCfg),
  }
}


export function aamAuthenticationPortalLogonToHclTerraform(struct?: AamAuthenticationPortalLogonOutputReference | AamAuthenticationPortalLogon): any {
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
    captcha_type: {
      value: cdktf.stringToHclTerraform(struct!.captchaType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_captcha: {
      value: cdktf.numberToHclTerraform(struct!.enableCaptcha),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_passcode: {
      value: cdktf.numberToHclTerraform(struct!.enablePasscode),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    passcode_var: {
      value: cdktf.stringToHclTerraform(struct!.passcodeVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    password_var: {
      value: cdktf.stringToHclTerraform(struct!.passwordVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    site_key_string: {
      value: cdktf.stringToHclTerraform(struct!.siteKeyString),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    submit_text: {
      value: cdktf.stringToHclTerraform(struct!.submitText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_var: {
      value: cdktf.stringToHclTerraform(struct!.usernameVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    background: {
      value: aamAuthenticationPortalLogonBackgroundToHclTerraform(struct!.background),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationPortalLogonBackgroundList",
    },
    fail_msg_cfg: {
      value: aamAuthenticationPortalLogonFailMsgCfgToHclTerraform(struct!.failMsgCfg),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationPortalLogonFailMsgCfgList",
    },
    passcode_cfg: {
      value: aamAuthenticationPortalLogonPasscodeCfgToHclTerraform(struct!.passcodeCfg),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationPortalLogonPasscodeCfgList",
    },
    password_cfg: {
      value: aamAuthenticationPortalLogonPasswordCfgToHclTerraform(struct!.passwordCfg),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationPortalLogonPasswordCfgList",
    },
    recaptcha_cfg: {
      value: aamAuthenticationPortalLogonRecaptchaCfgToHclTerraform(struct!.recaptchaCfg),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationPortalLogonRecaptchaCfgList",
    },
    username_cfg: {
      value: aamAuthenticationPortalLogonUsernameCfgToHclTerraform(struct!.usernameCfg),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationPortalLogonUsernameCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationPortalLogonOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalLogon | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._actionUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionUrl = this._actionUrl;
    }
    if (this._captchaType !== undefined) {
      hasAnyValues = true;
      internalValueResult.captchaType = this._captchaType;
    }
    if (this._enableCaptcha !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableCaptcha = this._enableCaptcha;
    }
    if (this._enablePasscode !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePasscode = this._enablePasscode;
    }
    if (this._passcodeVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.passcodeVar = this._passcodeVar;
    }
    if (this._passwordVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordVar = this._passwordVar;
    }
    if (this._siteKeyString !== undefined) {
      hasAnyValues = true;
      internalValueResult.siteKeyString = this._siteKeyString;
    }
    if (this._submitText !== undefined) {
      hasAnyValues = true;
      internalValueResult.submitText = this._submitText;
    }
    if (this._usernameVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameVar = this._usernameVar;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._background?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.background = this._background?.internalValue;
    }
    if (this._failMsgCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failMsgCfg = this._failMsgCfg?.internalValue;
    }
    if (this._passcodeCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passcodeCfg = this._passcodeCfg?.internalValue;
    }
    if (this._passwordCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.passwordCfg = this._passwordCfg?.internalValue;
    }
    if (this._recaptchaCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.recaptchaCfg = this._recaptchaCfg?.internalValue;
    }
    if (this._usernameCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameCfg = this._usernameCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationPortalLogon | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._actionUrl = undefined;
      this._captchaType = undefined;
      this._enableCaptcha = undefined;
      this._enablePasscode = undefined;
      this._passcodeVar = undefined;
      this._passwordVar = undefined;
      this._siteKeyString = undefined;
      this._submitText = undefined;
      this._usernameVar = undefined;
      this._uuid = undefined;
      this._background.internalValue = undefined;
      this._failMsgCfg.internalValue = undefined;
      this._passcodeCfg.internalValue = undefined;
      this._passwordCfg.internalValue = undefined;
      this._recaptchaCfg.internalValue = undefined;
      this._usernameCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._actionUrl = value.actionUrl;
      this._captchaType = value.captchaType;
      this._enableCaptcha = value.enableCaptcha;
      this._enablePasscode = value.enablePasscode;
      this._passcodeVar = value.passcodeVar;
      this._passwordVar = value.passwordVar;
      this._siteKeyString = value.siteKeyString;
      this._submitText = value.submitText;
      this._usernameVar = value.usernameVar;
      this._uuid = value.uuid;
      this._background.internalValue = value.background;
      this._failMsgCfg.internalValue = value.failMsgCfg;
      this._passcodeCfg.internalValue = value.passcodeCfg;
      this._passwordCfg.internalValue = value.passwordCfg;
      this._recaptchaCfg.internalValue = value.recaptchaCfg;
      this._usernameCfg.internalValue = value.usernameCfg;
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
  private _background = new AamAuthenticationPortalLogonBackgroundOutputReference(this, "background");
  public get background() {
    return this._background;
  }
  public putBackground(value: AamAuthenticationPortalLogonBackground) {
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
  private _failMsgCfg = new AamAuthenticationPortalLogonFailMsgCfgOutputReference(this, "fail_msg_cfg");
  public get failMsgCfg() {
    return this._failMsgCfg;
  }
  public putFailMsgCfg(value: AamAuthenticationPortalLogonFailMsgCfg) {
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
  private _passcodeCfg = new AamAuthenticationPortalLogonPasscodeCfgOutputReference(this, "passcode_cfg");
  public get passcodeCfg() {
    return this._passcodeCfg;
  }
  public putPasscodeCfg(value: AamAuthenticationPortalLogonPasscodeCfg) {
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
  private _passwordCfg = new AamAuthenticationPortalLogonPasswordCfgOutputReference(this, "password_cfg");
  public get passwordCfg() {
    return this._passwordCfg;
  }
  public putPasswordCfg(value: AamAuthenticationPortalLogonPasswordCfg) {
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
  private _recaptchaCfg = new AamAuthenticationPortalLogonRecaptchaCfgOutputReference(this, "recaptcha_cfg");
  public get recaptchaCfg() {
    return this._recaptchaCfg;
  }
  public putRecaptchaCfg(value: AamAuthenticationPortalLogonRecaptchaCfg) {
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
  private _usernameCfg = new AamAuthenticationPortalLogonUsernameCfgOutputReference(this, "username_cfg");
  public get usernameCfg() {
    return this._usernameCfg;
  }
  public putUsernameCfg(value: AamAuthenticationPortalLogonUsernameCfg) {
    this._usernameCfg.internalValue = value;
  }
  public resetUsernameCfg() {
    this._usernameCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameCfgInput() {
    return this._usernameCfg.internalValue;
  }
}
export interface AamAuthenticationPortalLogonFailBackground {
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#bgcolor_name AamAuthenticationPortal#bgcolor_name}
  */
  readonly bgcolorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#bgcolor_value AamAuthenticationPortal#bgcolor_value}
  */
  readonly bgcolorValue?: string;
  /**
  * Specify background image filename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#bgfile AamAuthenticationPortal#bgfile}
  */
  readonly bgfile?: string;
  /**
  * 'tile': Tile; 'stretch': Stretch; 'fit': Fit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#bgstyle AamAuthenticationPortal#bgstyle}
  */
  readonly bgstyle?: string;
}

export function aamAuthenticationPortalLogonFailBackgroundToTerraform(struct?: AamAuthenticationPortalLogonFailBackgroundOutputReference | AamAuthenticationPortalLogonFailBackground): any {
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


export function aamAuthenticationPortalLogonFailBackgroundToHclTerraform(struct?: AamAuthenticationPortalLogonFailBackgroundOutputReference | AamAuthenticationPortalLogonFailBackground): any {
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

export class AamAuthenticationPortalLogonFailBackgroundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalLogonFailBackground | undefined {
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

  public set internalValue(value: AamAuthenticationPortalLogonFailBackground | undefined) {
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
export interface AamAuthenticationPortalLogonFailFailMsgCfg {
  /**
  * Specify font color (Default: black)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#fail_color AamAuthenticationPortal#fail_color}
  */
  readonly failColor?: number;
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#fail_color_name AamAuthenticationPortal#fail_color_name}
  */
  readonly failColorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#fail_color_value AamAuthenticationPortal#fail_color_value}
  */
  readonly failColorValue?: string;
  /**
  * 'Arial': Arial; 'Courier_New': Courier New; 'Georgia': Georgia; 'Times_New_Roman': Times New Roman; 'Verdana': Verdana;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#fail_face AamAuthenticationPortal#fail_face}
  */
  readonly failFace?: string;
  /**
  * Sepcify font (Default: Arial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#fail_font AamAuthenticationPortal#fail_font}
  */
  readonly failFont?: number;
  /**
  * Specify custom font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#fail_font_custom AamAuthenticationPortal#fail_font_custom}
  */
  readonly failFontCustom?: string;
  /**
  * Configure logon failure message in default logon fail page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#fail_msg AamAuthenticationPortal#fail_msg}
  */
  readonly failMsg?: number;
  /**
  * Specify font size (Default: 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#fail_size AamAuthenticationPortal#fail_size}
  */
  readonly failSize?: number;
  /**
  * Specify logon failure message (Default: Login Failed!!)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#fail_text AamAuthenticationPortal#fail_text}
  */
  readonly failText?: string;
}

export function aamAuthenticationPortalLogonFailFailMsgCfgToTerraform(struct?: AamAuthenticationPortalLogonFailFailMsgCfgOutputReference | AamAuthenticationPortalLogonFailFailMsgCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
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


export function aamAuthenticationPortalLogonFailFailMsgCfgToHclTerraform(struct?: AamAuthenticationPortalLogonFailFailMsgCfgOutputReference | AamAuthenticationPortalLogonFailFailMsgCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
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

export class AamAuthenticationPortalLogonFailFailMsgCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalLogonFailFailMsgCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: AamAuthenticationPortalLogonFailFailMsgCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
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
export interface AamAuthenticationPortalLogonFailTitleCfg {
  /**
  * Configure title in default logon fail page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#title AamAuthenticationPortal#title}
  */
  readonly title?: number;
  /**
  * Specify font color (Default: black)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#title_color AamAuthenticationPortal#title_color}
  */
  readonly titleColor?: number;
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#title_color_name AamAuthenticationPortal#title_color_name}
  */
  readonly titleColorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#title_color_value AamAuthenticationPortal#title_color_value}
  */
  readonly titleColorValue?: string;
  /**
  * 'Arial': Arial; 'Courier_New': Courier New; 'Georgia': Georgia; 'Times_New_Roman': Times New Roman; 'Verdana': Verdana;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#title_face AamAuthenticationPortal#title_face}
  */
  readonly titleFace?: string;
  /**
  * Sepcify font (Default: Arial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#title_font AamAuthenticationPortal#title_font}
  */
  readonly titleFont?: number;
  /**
  * Specify custom font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#title_font_custom AamAuthenticationPortal#title_font_custom}
  */
  readonly titleFontCustom?: string;
  /**
  * Specify font size (Default: 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#title_size AamAuthenticationPortal#title_size}
  */
  readonly titleSize?: number;
  /**
  * Specify title (Default: Try Too Many Times)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#title_text AamAuthenticationPortal#title_text}
  */
  readonly titleText?: string;
}

export function aamAuthenticationPortalLogonFailTitleCfgToTerraform(struct?: AamAuthenticationPortalLogonFailTitleCfgOutputReference | AamAuthenticationPortalLogonFailTitleCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    title: cdktf.numberToTerraform(struct!.title),
    title_color: cdktf.numberToTerraform(struct!.titleColor),
    title_color_name: cdktf.stringToTerraform(struct!.titleColorName),
    title_color_value: cdktf.stringToTerraform(struct!.titleColorValue),
    title_face: cdktf.stringToTerraform(struct!.titleFace),
    title_font: cdktf.numberToTerraform(struct!.titleFont),
    title_font_custom: cdktf.stringToTerraform(struct!.titleFontCustom),
    title_size: cdktf.numberToTerraform(struct!.titleSize),
    title_text: cdktf.stringToTerraform(struct!.titleText),
  }
}


export function aamAuthenticationPortalLogonFailTitleCfgToHclTerraform(struct?: AamAuthenticationPortalLogonFailTitleCfgOutputReference | AamAuthenticationPortalLogonFailTitleCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    title: {
      value: cdktf.numberToHclTerraform(struct!.title),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title_color: {
      value: cdktf.numberToHclTerraform(struct!.titleColor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title_color_name: {
      value: cdktf.stringToHclTerraform(struct!.titleColorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title_color_value: {
      value: cdktf.stringToHclTerraform(struct!.titleColorValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title_face: {
      value: cdktf.stringToHclTerraform(struct!.titleFace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title_font: {
      value: cdktf.numberToHclTerraform(struct!.titleFont),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title_font_custom: {
      value: cdktf.stringToHclTerraform(struct!.titleFontCustom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    title_size: {
      value: cdktf.numberToHclTerraform(struct!.titleSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    title_text: {
      value: cdktf.stringToHclTerraform(struct!.titleText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationPortalLogonFailTitleCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalLogonFailTitleCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._title !== undefined) {
      hasAnyValues = true;
      internalValueResult.title = this._title;
    }
    if (this._titleColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleColor = this._titleColor;
    }
    if (this._titleColorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleColorName = this._titleColorName;
    }
    if (this._titleColorValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleColorValue = this._titleColorValue;
    }
    if (this._titleFace !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleFace = this._titleFace;
    }
    if (this._titleFont !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleFont = this._titleFont;
    }
    if (this._titleFontCustom !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleFontCustom = this._titleFontCustom;
    }
    if (this._titleSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleSize = this._titleSize;
    }
    if (this._titleText !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleText = this._titleText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationPortalLogonFailTitleCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._title = undefined;
      this._titleColor = undefined;
      this._titleColorName = undefined;
      this._titleColorValue = undefined;
      this._titleFace = undefined;
      this._titleFont = undefined;
      this._titleFontCustom = undefined;
      this._titleSize = undefined;
      this._titleText = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._title = value.title;
      this._titleColor = value.titleColor;
      this._titleColorName = value.titleColorName;
      this._titleColorValue = value.titleColorValue;
      this._titleFace = value.titleFace;
      this._titleFont = value.titleFont;
      this._titleFontCustom = value.titleFontCustom;
      this._titleSize = value.titleSize;
      this._titleText = value.titleText;
    }
  }

  // title - computed: false, optional: true, required: false
  private _title?: number; 
  public get title() {
    return this.getNumberAttribute('title');
  }
  public set title(value: number) {
    this._title = value;
  }
  public resetTitle() {
    this._title = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleInput() {
    return this._title;
  }

  // title_color - computed: false, optional: true, required: false
  private _titleColor?: number; 
  public get titleColor() {
    return this.getNumberAttribute('title_color');
  }
  public set titleColor(value: number) {
    this._titleColor = value;
  }
  public resetTitleColor() {
    this._titleColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleColorInput() {
    return this._titleColor;
  }

  // title_color_name - computed: false, optional: true, required: false
  private _titleColorName?: string; 
  public get titleColorName() {
    return this.getStringAttribute('title_color_name');
  }
  public set titleColorName(value: string) {
    this._titleColorName = value;
  }
  public resetTitleColorName() {
    this._titleColorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleColorNameInput() {
    return this._titleColorName;
  }

  // title_color_value - computed: false, optional: true, required: false
  private _titleColorValue?: string; 
  public get titleColorValue() {
    return this.getStringAttribute('title_color_value');
  }
  public set titleColorValue(value: string) {
    this._titleColorValue = value;
  }
  public resetTitleColorValue() {
    this._titleColorValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleColorValueInput() {
    return this._titleColorValue;
  }

  // title_face - computed: false, optional: true, required: false
  private _titleFace?: string; 
  public get titleFace() {
    return this.getStringAttribute('title_face');
  }
  public set titleFace(value: string) {
    this._titleFace = value;
  }
  public resetTitleFace() {
    this._titleFace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleFaceInput() {
    return this._titleFace;
  }

  // title_font - computed: false, optional: true, required: false
  private _titleFont?: number; 
  public get titleFont() {
    return this.getNumberAttribute('title_font');
  }
  public set titleFont(value: number) {
    this._titleFont = value;
  }
  public resetTitleFont() {
    this._titleFont = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleFontInput() {
    return this._titleFont;
  }

  // title_font_custom - computed: false, optional: true, required: false
  private _titleFontCustom?: string; 
  public get titleFontCustom() {
    return this.getStringAttribute('title_font_custom');
  }
  public set titleFontCustom(value: string) {
    this._titleFontCustom = value;
  }
  public resetTitleFontCustom() {
    this._titleFontCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleFontCustomInput() {
    return this._titleFontCustom;
  }

  // title_size - computed: false, optional: true, required: false
  private _titleSize?: number; 
  public get titleSize() {
    return this.getNumberAttribute('title_size');
  }
  public set titleSize(value: number) {
    this._titleSize = value;
  }
  public resetTitleSize() {
    this._titleSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleSizeInput() {
    return this._titleSize;
  }

  // title_text - computed: false, optional: true, required: false
  private _titleText?: string; 
  public get titleText() {
    return this.getStringAttribute('title_text');
  }
  public set titleText(value: string) {
    this._titleText = value;
  }
  public resetTitleText() {
    this._titleText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleTextInput() {
    return this._titleText;
  }
}
export interface AamAuthenticationPortalLogonFail {
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#uuid AamAuthenticationPortal#uuid}
  */
  readonly uuid?: string;
  /**
  * background block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#background AamAuthenticationPortal#background}
  */
  readonly background?: AamAuthenticationPortalLogonFailBackground;
  /**
  * fail_msg_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#fail_msg_cfg AamAuthenticationPortal#fail_msg_cfg}
  */
  readonly failMsgCfg?: AamAuthenticationPortalLogonFailFailMsgCfg;
  /**
  * title_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#title_cfg AamAuthenticationPortal#title_cfg}
  */
  readonly titleCfg?: AamAuthenticationPortalLogonFailTitleCfg;
}

export function aamAuthenticationPortalLogonFailToTerraform(struct?: AamAuthenticationPortalLogonFailOutputReference | AamAuthenticationPortalLogonFail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    uuid: cdktf.stringToTerraform(struct!.uuid),
    background: aamAuthenticationPortalLogonFailBackgroundToTerraform(struct!.background),
    fail_msg_cfg: aamAuthenticationPortalLogonFailFailMsgCfgToTerraform(struct!.failMsgCfg),
    title_cfg: aamAuthenticationPortalLogonFailTitleCfgToTerraform(struct!.titleCfg),
  }
}


export function aamAuthenticationPortalLogonFailToHclTerraform(struct?: AamAuthenticationPortalLogonFailOutputReference | AamAuthenticationPortalLogonFail): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    background: {
      value: aamAuthenticationPortalLogonFailBackgroundToHclTerraform(struct!.background),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationPortalLogonFailBackgroundList",
    },
    fail_msg_cfg: {
      value: aamAuthenticationPortalLogonFailFailMsgCfgToHclTerraform(struct!.failMsgCfg),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationPortalLogonFailFailMsgCfgList",
    },
    title_cfg: {
      value: aamAuthenticationPortalLogonFailTitleCfgToHclTerraform(struct!.titleCfg),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationPortalLogonFailTitleCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationPortalLogonFailOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalLogonFail | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._background?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.background = this._background?.internalValue;
    }
    if (this._failMsgCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.failMsgCfg = this._failMsgCfg?.internalValue;
    }
    if (this._titleCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.titleCfg = this._titleCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationPortalLogonFail | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._uuid = undefined;
      this._background.internalValue = undefined;
      this._failMsgCfg.internalValue = undefined;
      this._titleCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._uuid = value.uuid;
      this._background.internalValue = value.background;
      this._failMsgCfg.internalValue = value.failMsgCfg;
      this._titleCfg.internalValue = value.titleCfg;
    }
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
  private _background = new AamAuthenticationPortalLogonFailBackgroundOutputReference(this, "background");
  public get background() {
    return this._background;
  }
  public putBackground(value: AamAuthenticationPortalLogonFailBackground) {
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
  private _failMsgCfg = new AamAuthenticationPortalLogonFailFailMsgCfgOutputReference(this, "fail_msg_cfg");
  public get failMsgCfg() {
    return this._failMsgCfg;
  }
  public putFailMsgCfg(value: AamAuthenticationPortalLogonFailFailMsgCfg) {
    this._failMsgCfg.internalValue = value;
  }
  public resetFailMsgCfg() {
    this._failMsgCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get failMsgCfgInput() {
    return this._failMsgCfg.internalValue;
  }

  // title_cfg - computed: false, optional: true, required: false
  private _titleCfg = new AamAuthenticationPortalLogonFailTitleCfgOutputReference(this, "title_cfg");
  public get titleCfg() {
    return this._titleCfg;
  }
  public putTitleCfg(value: AamAuthenticationPortalLogonFailTitleCfg) {
    this._titleCfg.internalValue = value;
  }
  public resetTitleCfg() {
    this._titleCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleCfgInput() {
    return this._titleCfg.internalValue;
  }
}
export interface AamAuthenticationPortalNotifyChangePasswordBackground {
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#bgcolor_name AamAuthenticationPortal#bgcolor_name}
  */
  readonly bgcolorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#bgcolor_value AamAuthenticationPortal#bgcolor_value}
  */
  readonly bgcolorValue?: string;
  /**
  * Specify background image filename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#bgfile AamAuthenticationPortal#bgfile}
  */
  readonly bgfile?: string;
  /**
  * 'tile': Tile; 'stretch': Stretch; 'fit': Fit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#bgstyle AamAuthenticationPortal#bgstyle}
  */
  readonly bgstyle?: string;
}

export function aamAuthenticationPortalNotifyChangePasswordBackgroundToTerraform(struct?: AamAuthenticationPortalNotifyChangePasswordBackgroundOutputReference | AamAuthenticationPortalNotifyChangePasswordBackground): any {
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


export function aamAuthenticationPortalNotifyChangePasswordBackgroundToHclTerraform(struct?: AamAuthenticationPortalNotifyChangePasswordBackgroundOutputReference | AamAuthenticationPortalNotifyChangePasswordBackground): any {
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

export class AamAuthenticationPortalNotifyChangePasswordBackgroundOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalNotifyChangePasswordBackground | undefined {
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

  public set internalValue(value: AamAuthenticationPortalNotifyChangePasswordBackground | undefined) {
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
export interface AamAuthenticationPortalNotifyChangePasswordCfmPwdCfg {
  /**
  * Specify font color (Default: black)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#cfm_color AamAuthenticationPortal#cfm_color}
  */
  readonly cfmColor?: number;
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#cfm_color_name AamAuthenticationPortal#cfm_color_name}
  */
  readonly cfmColorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#cfm_color_value AamAuthenticationPortal#cfm_color_value}
  */
  readonly cfmColorValue?: string;
  /**
  * 'Arial': Arial; 'Courier_New': Courier New; 'Georgia': Georgia; 'Times_New_Roman': Times New Roman; 'Verdana': Verdana;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#cfm_face AamAuthenticationPortal#cfm_face}
  */
  readonly cfmFace?: string;
  /**
  * Sepcify font (Default: Arial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#cfm_font AamAuthenticationPortal#cfm_font}
  */
  readonly cfmFont?: number;
  /**
  * Specify custom font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#cfm_font_custom AamAuthenticationPortal#cfm_font_custom}
  */
  readonly cfmFontCustom?: string;
  /**
  * Specify font size (Default: 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#cfm_size AamAuthenticationPortal#cfm_size}
  */
  readonly cfmSize?: number;
  /**
  * Specify confirm password text (Default: Confirm New Password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#cfm_text AamAuthenticationPortal#cfm_text}
  */
  readonly cfmText?: string;
  /**
  * Configure confirm password text in default change password notification page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#confirm_password AamAuthenticationPortal#confirm_password}
  */
  readonly confirmPassword?: number;
}

export function aamAuthenticationPortalNotifyChangePasswordCfmPwdCfgToTerraform(struct?: AamAuthenticationPortalNotifyChangePasswordCfmPwdCfgOutputReference | AamAuthenticationPortalNotifyChangePasswordCfmPwdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cfm_color: cdktf.numberToTerraform(struct!.cfmColor),
    cfm_color_name: cdktf.stringToTerraform(struct!.cfmColorName),
    cfm_color_value: cdktf.stringToTerraform(struct!.cfmColorValue),
    cfm_face: cdktf.stringToTerraform(struct!.cfmFace),
    cfm_font: cdktf.numberToTerraform(struct!.cfmFont),
    cfm_font_custom: cdktf.stringToTerraform(struct!.cfmFontCustom),
    cfm_size: cdktf.numberToTerraform(struct!.cfmSize),
    cfm_text: cdktf.stringToTerraform(struct!.cfmText),
    confirm_password: cdktf.numberToTerraform(struct!.confirmPassword),
  }
}


export function aamAuthenticationPortalNotifyChangePasswordCfmPwdCfgToHclTerraform(struct?: AamAuthenticationPortalNotifyChangePasswordCfmPwdCfgOutputReference | AamAuthenticationPortalNotifyChangePasswordCfmPwdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cfm_color: {
      value: cdktf.numberToHclTerraform(struct!.cfmColor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cfm_color_name: {
      value: cdktf.stringToHclTerraform(struct!.cfmColorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cfm_color_value: {
      value: cdktf.stringToHclTerraform(struct!.cfmColorValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cfm_face: {
      value: cdktf.stringToHclTerraform(struct!.cfmFace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cfm_font: {
      value: cdktf.numberToHclTerraform(struct!.cfmFont),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cfm_font_custom: {
      value: cdktf.stringToHclTerraform(struct!.cfmFontCustom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cfm_size: {
      value: cdktf.numberToHclTerraform(struct!.cfmSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cfm_text: {
      value: cdktf.stringToHclTerraform(struct!.cfmText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confirm_password: {
      value: cdktf.numberToHclTerraform(struct!.confirmPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationPortalNotifyChangePasswordCfmPwdCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalNotifyChangePasswordCfmPwdCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cfmColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfmColor = this._cfmColor;
    }
    if (this._cfmColorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfmColorName = this._cfmColorName;
    }
    if (this._cfmColorValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfmColorValue = this._cfmColorValue;
    }
    if (this._cfmFace !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfmFace = this._cfmFace;
    }
    if (this._cfmFont !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfmFont = this._cfmFont;
    }
    if (this._cfmFontCustom !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfmFontCustom = this._cfmFontCustom;
    }
    if (this._cfmSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfmSize = this._cfmSize;
    }
    if (this._cfmText !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfmText = this._cfmText;
    }
    if (this._confirmPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmPassword = this._confirmPassword;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationPortalNotifyChangePasswordCfmPwdCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cfmColor = undefined;
      this._cfmColorName = undefined;
      this._cfmColorValue = undefined;
      this._cfmFace = undefined;
      this._cfmFont = undefined;
      this._cfmFontCustom = undefined;
      this._cfmSize = undefined;
      this._cfmText = undefined;
      this._confirmPassword = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cfmColor = value.cfmColor;
      this._cfmColorName = value.cfmColorName;
      this._cfmColorValue = value.cfmColorValue;
      this._cfmFace = value.cfmFace;
      this._cfmFont = value.cfmFont;
      this._cfmFontCustom = value.cfmFontCustom;
      this._cfmSize = value.cfmSize;
      this._cfmText = value.cfmText;
      this._confirmPassword = value.confirmPassword;
    }
  }

  // cfm_color - computed: false, optional: true, required: false
  private _cfmColor?: number; 
  public get cfmColor() {
    return this.getNumberAttribute('cfm_color');
  }
  public set cfmColor(value: number) {
    this._cfmColor = value;
  }
  public resetCfmColor() {
    this._cfmColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmColorInput() {
    return this._cfmColor;
  }

  // cfm_color_name - computed: false, optional: true, required: false
  private _cfmColorName?: string; 
  public get cfmColorName() {
    return this.getStringAttribute('cfm_color_name');
  }
  public set cfmColorName(value: string) {
    this._cfmColorName = value;
  }
  public resetCfmColorName() {
    this._cfmColorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmColorNameInput() {
    return this._cfmColorName;
  }

  // cfm_color_value - computed: false, optional: true, required: false
  private _cfmColorValue?: string; 
  public get cfmColorValue() {
    return this.getStringAttribute('cfm_color_value');
  }
  public set cfmColorValue(value: string) {
    this._cfmColorValue = value;
  }
  public resetCfmColorValue() {
    this._cfmColorValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmColorValueInput() {
    return this._cfmColorValue;
  }

  // cfm_face - computed: false, optional: true, required: false
  private _cfmFace?: string; 
  public get cfmFace() {
    return this.getStringAttribute('cfm_face');
  }
  public set cfmFace(value: string) {
    this._cfmFace = value;
  }
  public resetCfmFace() {
    this._cfmFace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmFaceInput() {
    return this._cfmFace;
  }

  // cfm_font - computed: false, optional: true, required: false
  private _cfmFont?: number; 
  public get cfmFont() {
    return this.getNumberAttribute('cfm_font');
  }
  public set cfmFont(value: number) {
    this._cfmFont = value;
  }
  public resetCfmFont() {
    this._cfmFont = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmFontInput() {
    return this._cfmFont;
  }

  // cfm_font_custom - computed: false, optional: true, required: false
  private _cfmFontCustom?: string; 
  public get cfmFontCustom() {
    return this.getStringAttribute('cfm_font_custom');
  }
  public set cfmFontCustom(value: string) {
    this._cfmFontCustom = value;
  }
  public resetCfmFontCustom() {
    this._cfmFontCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmFontCustomInput() {
    return this._cfmFontCustom;
  }

  // cfm_size - computed: false, optional: true, required: false
  private _cfmSize?: number; 
  public get cfmSize() {
    return this.getNumberAttribute('cfm_size');
  }
  public set cfmSize(value: number) {
    this._cfmSize = value;
  }
  public resetCfmSize() {
    this._cfmSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmSizeInput() {
    return this._cfmSize;
  }

  // cfm_text - computed: false, optional: true, required: false
  private _cfmText?: string; 
  public get cfmText() {
    return this.getStringAttribute('cfm_text');
  }
  public set cfmText(value: string) {
    this._cfmText = value;
  }
  public resetCfmText() {
    this._cfmText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmTextInput() {
    return this._cfmText;
  }

  // confirm_password - computed: false, optional: true, required: false
  private _confirmPassword?: number; 
  public get confirmPassword() {
    return this.getNumberAttribute('confirm_password');
  }
  public set confirmPassword(value: number) {
    this._confirmPassword = value;
  }
  public resetConfirmPassword() {
    this._confirmPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmPasswordInput() {
    return this._confirmPassword;
  }
}
export interface AamAuthenticationPortalNotifyChangePasswordNewPwdCfg {
  /**
  * Specify font color (Default: black)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#new_color AamAuthenticationPortal#new_color}
  */
  readonly newColor?: number;
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#new_color_name AamAuthenticationPortal#new_color_name}
  */
  readonly newColorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#new_color_value AamAuthenticationPortal#new_color_value}
  */
  readonly newColorValue?: string;
  /**
  * 'Arial': Arial; 'Courier_New': Courier New; 'Georgia': Georgia; 'Times_New_Roman': Times New Roman; 'Verdana': Verdana;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#new_face AamAuthenticationPortal#new_face}
  */
  readonly newFace?: string;
  /**
  * Sepcify font (Default: Arial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#new_font AamAuthenticationPortal#new_font}
  */
  readonly newFont?: number;
  /**
  * Specify custom font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#new_font_custom AamAuthenticationPortal#new_font_custom}
  */
  readonly newFontCustom?: string;
  /**
  * Configure new password text in default change password notification page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#new_password AamAuthenticationPortal#new_password}
  */
  readonly newPassword?: number;
  /**
  * Specify font size (Default: 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#new_size AamAuthenticationPortal#new_size}
  */
  readonly newSize?: number;
  /**
  * Specify new password text (Default: New Password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#new_text AamAuthenticationPortal#new_text}
  */
  readonly newText?: string;
}

export function aamAuthenticationPortalNotifyChangePasswordNewPwdCfgToTerraform(struct?: AamAuthenticationPortalNotifyChangePasswordNewPwdCfgOutputReference | AamAuthenticationPortalNotifyChangePasswordNewPwdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    new_color: cdktf.numberToTerraform(struct!.newColor),
    new_color_name: cdktf.stringToTerraform(struct!.newColorName),
    new_color_value: cdktf.stringToTerraform(struct!.newColorValue),
    new_face: cdktf.stringToTerraform(struct!.newFace),
    new_font: cdktf.numberToTerraform(struct!.newFont),
    new_font_custom: cdktf.stringToTerraform(struct!.newFontCustom),
    new_password: cdktf.numberToTerraform(struct!.newPassword),
    new_size: cdktf.numberToTerraform(struct!.newSize),
    new_text: cdktf.stringToTerraform(struct!.newText),
  }
}


export function aamAuthenticationPortalNotifyChangePasswordNewPwdCfgToHclTerraform(struct?: AamAuthenticationPortalNotifyChangePasswordNewPwdCfgOutputReference | AamAuthenticationPortalNotifyChangePasswordNewPwdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    new_color: {
      value: cdktf.numberToHclTerraform(struct!.newColor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_color_name: {
      value: cdktf.stringToHclTerraform(struct!.newColorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_color_value: {
      value: cdktf.stringToHclTerraform(struct!.newColorValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_face: {
      value: cdktf.stringToHclTerraform(struct!.newFace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_font: {
      value: cdktf.numberToHclTerraform(struct!.newFont),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_font_custom: {
      value: cdktf.stringToHclTerraform(struct!.newFontCustom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_password: {
      value: cdktf.numberToHclTerraform(struct!.newPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_size: {
      value: cdktf.numberToHclTerraform(struct!.newSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    new_text: {
      value: cdktf.stringToHclTerraform(struct!.newText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationPortalNotifyChangePasswordNewPwdCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalNotifyChangePasswordNewPwdCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._newColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.newColor = this._newColor;
    }
    if (this._newColorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.newColorName = this._newColorName;
    }
    if (this._newColorValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newColorValue = this._newColorValue;
    }
    if (this._newFace !== undefined) {
      hasAnyValues = true;
      internalValueResult.newFace = this._newFace;
    }
    if (this._newFont !== undefined) {
      hasAnyValues = true;
      internalValueResult.newFont = this._newFont;
    }
    if (this._newFontCustom !== undefined) {
      hasAnyValues = true;
      internalValueResult.newFontCustom = this._newFontCustom;
    }
    if (this._newPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.newPassword = this._newPassword;
    }
    if (this._newSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.newSize = this._newSize;
    }
    if (this._newText !== undefined) {
      hasAnyValues = true;
      internalValueResult.newText = this._newText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationPortalNotifyChangePasswordNewPwdCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._newColor = undefined;
      this._newColorName = undefined;
      this._newColorValue = undefined;
      this._newFace = undefined;
      this._newFont = undefined;
      this._newFontCustom = undefined;
      this._newPassword = undefined;
      this._newSize = undefined;
      this._newText = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._newColor = value.newColor;
      this._newColorName = value.newColorName;
      this._newColorValue = value.newColorValue;
      this._newFace = value.newFace;
      this._newFont = value.newFont;
      this._newFontCustom = value.newFontCustom;
      this._newPassword = value.newPassword;
      this._newSize = value.newSize;
      this._newText = value.newText;
    }
  }

  // new_color - computed: false, optional: true, required: false
  private _newColor?: number; 
  public get newColor() {
    return this.getNumberAttribute('new_color');
  }
  public set newColor(value: number) {
    this._newColor = value;
  }
  public resetNewColor() {
    this._newColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newColorInput() {
    return this._newColor;
  }

  // new_color_name - computed: false, optional: true, required: false
  private _newColorName?: string; 
  public get newColorName() {
    return this.getStringAttribute('new_color_name');
  }
  public set newColorName(value: string) {
    this._newColorName = value;
  }
  public resetNewColorName() {
    this._newColorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newColorNameInput() {
    return this._newColorName;
  }

  // new_color_value - computed: false, optional: true, required: false
  private _newColorValue?: string; 
  public get newColorValue() {
    return this.getStringAttribute('new_color_value');
  }
  public set newColorValue(value: string) {
    this._newColorValue = value;
  }
  public resetNewColorValue() {
    this._newColorValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newColorValueInput() {
    return this._newColorValue;
  }

  // new_face - computed: false, optional: true, required: false
  private _newFace?: string; 
  public get newFace() {
    return this.getStringAttribute('new_face');
  }
  public set newFace(value: string) {
    this._newFace = value;
  }
  public resetNewFace() {
    this._newFace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newFaceInput() {
    return this._newFace;
  }

  // new_font - computed: false, optional: true, required: false
  private _newFont?: number; 
  public get newFont() {
    return this.getNumberAttribute('new_font');
  }
  public set newFont(value: number) {
    this._newFont = value;
  }
  public resetNewFont() {
    this._newFont = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newFontInput() {
    return this._newFont;
  }

  // new_font_custom - computed: false, optional: true, required: false
  private _newFontCustom?: string; 
  public get newFontCustom() {
    return this.getStringAttribute('new_font_custom');
  }
  public set newFontCustom(value: string) {
    this._newFontCustom = value;
  }
  public resetNewFontCustom() {
    this._newFontCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newFontCustomInput() {
    return this._newFontCustom;
  }

  // new_password - computed: false, optional: true, required: false
  private _newPassword?: number; 
  public get newPassword() {
    return this.getNumberAttribute('new_password');
  }
  public set newPassword(value: number) {
    this._newPassword = value;
  }
  public resetNewPassword() {
    this._newPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPasswordInput() {
    return this._newPassword;
  }

  // new_size - computed: false, optional: true, required: false
  private _newSize?: number; 
  public get newSize() {
    return this.getNumberAttribute('new_size');
  }
  public set newSize(value: number) {
    this._newSize = value;
  }
  public resetNewSize() {
    this._newSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newSizeInput() {
    return this._newSize;
  }

  // new_text - computed: false, optional: true, required: false
  private _newText?: string; 
  public get newText() {
    return this.getStringAttribute('new_text');
  }
  public set newText(value: string) {
    this._newText = value;
  }
  public resetNewText() {
    this._newText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newTextInput() {
    return this._newText;
  }
}
export interface AamAuthenticationPortalNotifyChangePasswordOldPwdCfg {
  /**
  * Specify font color (Default: black)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#old_color AamAuthenticationPortal#old_color}
  */
  readonly oldColor?: number;
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#old_color_name AamAuthenticationPortal#old_color_name}
  */
  readonly oldColorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#old_color_value AamAuthenticationPortal#old_color_value}
  */
  readonly oldColorValue?: string;
  /**
  * 'Arial': Arial; 'Courier_New': Courier New; 'Georgia': Georgia; 'Times_New_Roman': Times New Roman; 'Verdana': Verdana;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#old_face AamAuthenticationPortal#old_face}
  */
  readonly oldFace?: string;
  /**
  * Sepcify font (Default: Arial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#old_font AamAuthenticationPortal#old_font}
  */
  readonly oldFont?: number;
  /**
  * Specify custom font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#old_font_custom AamAuthenticationPortal#old_font_custom}
  */
  readonly oldFontCustom?: string;
  /**
  * Configure old password text in default change password notification page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#old_password AamAuthenticationPortal#old_password}
  */
  readonly oldPassword?: number;
  /**
  * Specify font size (Default: 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#old_size AamAuthenticationPortal#old_size}
  */
  readonly oldSize?: number;
  /**
  * Specify old password text (Default: Old Password)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#old_text AamAuthenticationPortal#old_text}
  */
  readonly oldText?: string;
}

export function aamAuthenticationPortalNotifyChangePasswordOldPwdCfgToTerraform(struct?: AamAuthenticationPortalNotifyChangePasswordOldPwdCfgOutputReference | AamAuthenticationPortalNotifyChangePasswordOldPwdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    old_color: cdktf.numberToTerraform(struct!.oldColor),
    old_color_name: cdktf.stringToTerraform(struct!.oldColorName),
    old_color_value: cdktf.stringToTerraform(struct!.oldColorValue),
    old_face: cdktf.stringToTerraform(struct!.oldFace),
    old_font: cdktf.numberToTerraform(struct!.oldFont),
    old_font_custom: cdktf.stringToTerraform(struct!.oldFontCustom),
    old_password: cdktf.numberToTerraform(struct!.oldPassword),
    old_size: cdktf.numberToTerraform(struct!.oldSize),
    old_text: cdktf.stringToTerraform(struct!.oldText),
  }
}


export function aamAuthenticationPortalNotifyChangePasswordOldPwdCfgToHclTerraform(struct?: AamAuthenticationPortalNotifyChangePasswordOldPwdCfgOutputReference | AamAuthenticationPortalNotifyChangePasswordOldPwdCfg): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    old_color: {
      value: cdktf.numberToHclTerraform(struct!.oldColor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    old_color_name: {
      value: cdktf.stringToHclTerraform(struct!.oldColorName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    old_color_value: {
      value: cdktf.stringToHclTerraform(struct!.oldColorValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    old_face: {
      value: cdktf.stringToHclTerraform(struct!.oldFace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    old_font: {
      value: cdktf.numberToHclTerraform(struct!.oldFont),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    old_font_custom: {
      value: cdktf.stringToHclTerraform(struct!.oldFontCustom),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    old_password: {
      value: cdktf.numberToHclTerraform(struct!.oldPassword),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    old_size: {
      value: cdktf.numberToHclTerraform(struct!.oldSize),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    old_text: {
      value: cdktf.stringToHclTerraform(struct!.oldText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationPortalNotifyChangePasswordOldPwdCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalNotifyChangePasswordOldPwdCfg | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._oldColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldColor = this._oldColor;
    }
    if (this._oldColorName !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldColorName = this._oldColorName;
    }
    if (this._oldColorValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldColorValue = this._oldColorValue;
    }
    if (this._oldFace !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldFace = this._oldFace;
    }
    if (this._oldFont !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldFont = this._oldFont;
    }
    if (this._oldFontCustom !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldFontCustom = this._oldFontCustom;
    }
    if (this._oldPassword !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldPassword = this._oldPassword;
    }
    if (this._oldSize !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldSize = this._oldSize;
    }
    if (this._oldText !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldText = this._oldText;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationPortalNotifyChangePasswordOldPwdCfg | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._oldColor = undefined;
      this._oldColorName = undefined;
      this._oldColorValue = undefined;
      this._oldFace = undefined;
      this._oldFont = undefined;
      this._oldFontCustom = undefined;
      this._oldPassword = undefined;
      this._oldSize = undefined;
      this._oldText = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._oldColor = value.oldColor;
      this._oldColorName = value.oldColorName;
      this._oldColorValue = value.oldColorValue;
      this._oldFace = value.oldFace;
      this._oldFont = value.oldFont;
      this._oldFontCustom = value.oldFontCustom;
      this._oldPassword = value.oldPassword;
      this._oldSize = value.oldSize;
      this._oldText = value.oldText;
    }
  }

  // old_color - computed: false, optional: true, required: false
  private _oldColor?: number; 
  public get oldColor() {
    return this.getNumberAttribute('old_color');
  }
  public set oldColor(value: number) {
    this._oldColor = value;
  }
  public resetOldColor() {
    this._oldColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldColorInput() {
    return this._oldColor;
  }

  // old_color_name - computed: false, optional: true, required: false
  private _oldColorName?: string; 
  public get oldColorName() {
    return this.getStringAttribute('old_color_name');
  }
  public set oldColorName(value: string) {
    this._oldColorName = value;
  }
  public resetOldColorName() {
    this._oldColorName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldColorNameInput() {
    return this._oldColorName;
  }

  // old_color_value - computed: false, optional: true, required: false
  private _oldColorValue?: string; 
  public get oldColorValue() {
    return this.getStringAttribute('old_color_value');
  }
  public set oldColorValue(value: string) {
    this._oldColorValue = value;
  }
  public resetOldColorValue() {
    this._oldColorValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldColorValueInput() {
    return this._oldColorValue;
  }

  // old_face - computed: false, optional: true, required: false
  private _oldFace?: string; 
  public get oldFace() {
    return this.getStringAttribute('old_face');
  }
  public set oldFace(value: string) {
    this._oldFace = value;
  }
  public resetOldFace() {
    this._oldFace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldFaceInput() {
    return this._oldFace;
  }

  // old_font - computed: false, optional: true, required: false
  private _oldFont?: number; 
  public get oldFont() {
    return this.getNumberAttribute('old_font');
  }
  public set oldFont(value: number) {
    this._oldFont = value;
  }
  public resetOldFont() {
    this._oldFont = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldFontInput() {
    return this._oldFont;
  }

  // old_font_custom - computed: false, optional: true, required: false
  private _oldFontCustom?: string; 
  public get oldFontCustom() {
    return this.getStringAttribute('old_font_custom');
  }
  public set oldFontCustom(value: string) {
    this._oldFontCustom = value;
  }
  public resetOldFontCustom() {
    this._oldFontCustom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldFontCustomInput() {
    return this._oldFontCustom;
  }

  // old_password - computed: false, optional: true, required: false
  private _oldPassword?: number; 
  public get oldPassword() {
    return this.getNumberAttribute('old_password');
  }
  public set oldPassword(value: number) {
    this._oldPassword = value;
  }
  public resetOldPassword() {
    this._oldPassword = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldPasswordInput() {
    return this._oldPassword;
  }

  // old_size - computed: false, optional: true, required: false
  private _oldSize?: number; 
  public get oldSize() {
    return this.getNumberAttribute('old_size');
  }
  public set oldSize(value: number) {
    this._oldSize = value;
  }
  public resetOldSize() {
    this._oldSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldSizeInput() {
    return this._oldSize;
  }

  // old_text - computed: false, optional: true, required: false
  private _oldText?: string; 
  public get oldText() {
    return this.getStringAttribute('old_text');
  }
  public set oldText(value: string) {
    this._oldText = value;
  }
  public resetOldText() {
    this._oldText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldTextInput() {
    return this._oldText;
  }
}
export interface AamAuthenticationPortalNotifyChangePasswordUsernameCfg {
  /**
  * Specify font color (Default: black)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#user_color AamAuthenticationPortal#user_color}
  */
  readonly userColor?: number;
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#user_color_name AamAuthenticationPortal#user_color_name}
  */
  readonly userColorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#user_color_value AamAuthenticationPortal#user_color_value}
  */
  readonly userColorValue?: string;
  /**
  * 'Arial': Arial; 'Courier_New': Courier New; 'Georgia': Georgia; 'Times_New_Roman': Times New Roman; 'Verdana': Verdana;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#user_face AamAuthenticationPortal#user_face}
  */
  readonly userFace?: string;
  /**
  * Sepcify font (Default: Arial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#user_font AamAuthenticationPortal#user_font}
  */
  readonly userFont?: number;
  /**
  * Specify custom font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#user_font_custom AamAuthenticationPortal#user_font_custom}
  */
  readonly userFontCustom?: string;
  /**
  * Specify font size (Default: 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#user_size AamAuthenticationPortal#user_size}
  */
  readonly userSize?: number;
  /**
  * Specify username text (Default: Username)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#user_text AamAuthenticationPortal#user_text}
  */
  readonly userText?: string;
  /**
  * Configure username text in default change password notification page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#username AamAuthenticationPortal#username}
  */
  readonly username?: number;
}

export function aamAuthenticationPortalNotifyChangePasswordUsernameCfgToTerraform(struct?: AamAuthenticationPortalNotifyChangePasswordUsernameCfgOutputReference | AamAuthenticationPortalNotifyChangePasswordUsernameCfg): any {
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


export function aamAuthenticationPortalNotifyChangePasswordUsernameCfgToHclTerraform(struct?: AamAuthenticationPortalNotifyChangePasswordUsernameCfgOutputReference | AamAuthenticationPortalNotifyChangePasswordUsernameCfg): any {
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

export class AamAuthenticationPortalNotifyChangePasswordUsernameCfgOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalNotifyChangePasswordUsernameCfg | undefined {
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

  public set internalValue(value: AamAuthenticationPortalNotifyChangePasswordUsernameCfg | undefined) {
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
export interface AamAuthenticationPortalNotifyChangePassword {
  /**
  * Specify change button text in default change password notification page (Default: Change)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#change_text AamAuthenticationPortal#change_text}
  */
  readonly changeText?: string;
  /**
  * Specify change password action URL in default change password notification page (Default: /notify_change.fo)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#change_url AamAuthenticationPortal#change_url}
  */
  readonly changeUrl?: string;
  /**
  * Specify confirm password variable name in default change password notification page (Default: cp_cfm_pwd)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#confirm_password_var AamAuthenticationPortal#confirm_password_var}
  */
  readonly confirmPasswordVar?: string;
  /**
  * Specify continue button text in default change password notification page (Default: Continue)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#continue_text AamAuthenticationPortal#continue_text}
  */
  readonly continueText?: string;
  /**
  * Specify continue action URL in default change password notification page (Default: /continue.fo)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#continue_url AamAuthenticationPortal#continue_url}
  */
  readonly continueUrl?: string;
  /**
  * Specify new password variable name in default change password notification page (Default: cp_new_pwd)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#new_password_var AamAuthenticationPortal#new_password_var}
  */
  readonly newPasswordVar?: string;
  /**
  * Specify old password variable name in default change password notification page (Default: cp_old_pwd)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#old_password_var AamAuthenticationPortal#old_password_var}
  */
  readonly oldPasswordVar?: string;
  /**
  * Specify username variable name in default change password notification page (Default: cp_usr)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#username_var AamAuthenticationPortal#username_var}
  */
  readonly usernameVar?: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#uuid AamAuthenticationPortal#uuid}
  */
  readonly uuid?: string;
  /**
  * background block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#background AamAuthenticationPortal#background}
  */
  readonly background?: AamAuthenticationPortalNotifyChangePasswordBackground;
  /**
  * cfm_pwd_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#cfm_pwd_cfg AamAuthenticationPortal#cfm_pwd_cfg}
  */
  readonly cfmPwdCfg?: AamAuthenticationPortalNotifyChangePasswordCfmPwdCfg;
  /**
  * new_pwd_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#new_pwd_cfg AamAuthenticationPortal#new_pwd_cfg}
  */
  readonly newPwdCfg?: AamAuthenticationPortalNotifyChangePasswordNewPwdCfg;
  /**
  * old_pwd_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#old_pwd_cfg AamAuthenticationPortal#old_pwd_cfg}
  */
  readonly oldPwdCfg?: AamAuthenticationPortalNotifyChangePasswordOldPwdCfg;
  /**
  * username_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#username_cfg AamAuthenticationPortal#username_cfg}
  */
  readonly usernameCfg?: AamAuthenticationPortalNotifyChangePasswordUsernameCfg;
}

export function aamAuthenticationPortalNotifyChangePasswordToTerraform(struct?: AamAuthenticationPortalNotifyChangePasswordOutputReference | AamAuthenticationPortalNotifyChangePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    change_text: cdktf.stringToTerraform(struct!.changeText),
    change_url: cdktf.stringToTerraform(struct!.changeUrl),
    confirm_password_var: cdktf.stringToTerraform(struct!.confirmPasswordVar),
    continue_text: cdktf.stringToTerraform(struct!.continueText),
    continue_url: cdktf.stringToTerraform(struct!.continueUrl),
    new_password_var: cdktf.stringToTerraform(struct!.newPasswordVar),
    old_password_var: cdktf.stringToTerraform(struct!.oldPasswordVar),
    username_var: cdktf.stringToTerraform(struct!.usernameVar),
    uuid: cdktf.stringToTerraform(struct!.uuid),
    background: aamAuthenticationPortalNotifyChangePasswordBackgroundToTerraform(struct!.background),
    cfm_pwd_cfg: aamAuthenticationPortalNotifyChangePasswordCfmPwdCfgToTerraform(struct!.cfmPwdCfg),
    new_pwd_cfg: aamAuthenticationPortalNotifyChangePasswordNewPwdCfgToTerraform(struct!.newPwdCfg),
    old_pwd_cfg: aamAuthenticationPortalNotifyChangePasswordOldPwdCfgToTerraform(struct!.oldPwdCfg),
    username_cfg: aamAuthenticationPortalNotifyChangePasswordUsernameCfgToTerraform(struct!.usernameCfg),
  }
}


export function aamAuthenticationPortalNotifyChangePasswordToHclTerraform(struct?: AamAuthenticationPortalNotifyChangePasswordOutputReference | AamAuthenticationPortalNotifyChangePassword): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    change_text: {
      value: cdktf.stringToHclTerraform(struct!.changeText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    change_url: {
      value: cdktf.stringToHclTerraform(struct!.changeUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    confirm_password_var: {
      value: cdktf.stringToHclTerraform(struct!.confirmPasswordVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    continue_text: {
      value: cdktf.stringToHclTerraform(struct!.continueText),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    continue_url: {
      value: cdktf.stringToHclTerraform(struct!.continueUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    new_password_var: {
      value: cdktf.stringToHclTerraform(struct!.newPasswordVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    old_password_var: {
      value: cdktf.stringToHclTerraform(struct!.oldPasswordVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    username_var: {
      value: cdktf.stringToHclTerraform(struct!.usernameVar),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uuid: {
      value: cdktf.stringToHclTerraform(struct!.uuid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    background: {
      value: aamAuthenticationPortalNotifyChangePasswordBackgroundToHclTerraform(struct!.background),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationPortalNotifyChangePasswordBackgroundList",
    },
    cfm_pwd_cfg: {
      value: aamAuthenticationPortalNotifyChangePasswordCfmPwdCfgToHclTerraform(struct!.cfmPwdCfg),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationPortalNotifyChangePasswordCfmPwdCfgList",
    },
    new_pwd_cfg: {
      value: aamAuthenticationPortalNotifyChangePasswordNewPwdCfgToHclTerraform(struct!.newPwdCfg),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationPortalNotifyChangePasswordNewPwdCfgList",
    },
    old_pwd_cfg: {
      value: aamAuthenticationPortalNotifyChangePasswordOldPwdCfgToHclTerraform(struct!.oldPwdCfg),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationPortalNotifyChangePasswordOldPwdCfgList",
    },
    username_cfg: {
      value: aamAuthenticationPortalNotifyChangePasswordUsernameCfgToHclTerraform(struct!.usernameCfg),
      isBlock: true,
      type: "list",
      storageClassType: "AamAuthenticationPortalNotifyChangePasswordUsernameCfgList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class AamAuthenticationPortalNotifyChangePasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalNotifyChangePassword | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._changeText !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeText = this._changeText;
    }
    if (this._changeUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.changeUrl = this._changeUrl;
    }
    if (this._confirmPasswordVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.confirmPasswordVar = this._confirmPasswordVar;
    }
    if (this._continueText !== undefined) {
      hasAnyValues = true;
      internalValueResult.continueText = this._continueText;
    }
    if (this._continueUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.continueUrl = this._continueUrl;
    }
    if (this._newPasswordVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.newPasswordVar = this._newPasswordVar;
    }
    if (this._oldPasswordVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldPasswordVar = this._oldPasswordVar;
    }
    if (this._usernameVar !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameVar = this._usernameVar;
    }
    if (this._uuid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uuid = this._uuid;
    }
    if (this._background?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.background = this._background?.internalValue;
    }
    if (this._cfmPwdCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.cfmPwdCfg = this._cfmPwdCfg?.internalValue;
    }
    if (this._newPwdCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.newPwdCfg = this._newPwdCfg?.internalValue;
    }
    if (this._oldPwdCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldPwdCfg = this._oldPwdCfg?.internalValue;
    }
    if (this._usernameCfg?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.usernameCfg = this._usernameCfg?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: AamAuthenticationPortalNotifyChangePassword | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._changeText = undefined;
      this._changeUrl = undefined;
      this._confirmPasswordVar = undefined;
      this._continueText = undefined;
      this._continueUrl = undefined;
      this._newPasswordVar = undefined;
      this._oldPasswordVar = undefined;
      this._usernameVar = undefined;
      this._uuid = undefined;
      this._background.internalValue = undefined;
      this._cfmPwdCfg.internalValue = undefined;
      this._newPwdCfg.internalValue = undefined;
      this._oldPwdCfg.internalValue = undefined;
      this._usernameCfg.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._changeText = value.changeText;
      this._changeUrl = value.changeUrl;
      this._confirmPasswordVar = value.confirmPasswordVar;
      this._continueText = value.continueText;
      this._continueUrl = value.continueUrl;
      this._newPasswordVar = value.newPasswordVar;
      this._oldPasswordVar = value.oldPasswordVar;
      this._usernameVar = value.usernameVar;
      this._uuid = value.uuid;
      this._background.internalValue = value.background;
      this._cfmPwdCfg.internalValue = value.cfmPwdCfg;
      this._newPwdCfg.internalValue = value.newPwdCfg;
      this._oldPwdCfg.internalValue = value.oldPwdCfg;
      this._usernameCfg.internalValue = value.usernameCfg;
    }
  }

  // change_text - computed: false, optional: true, required: false
  private _changeText?: string; 
  public get changeText() {
    return this.getStringAttribute('change_text');
  }
  public set changeText(value: string) {
    this._changeText = value;
  }
  public resetChangeText() {
    this._changeText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeTextInput() {
    return this._changeText;
  }

  // change_url - computed: false, optional: true, required: false
  private _changeUrl?: string; 
  public get changeUrl() {
    return this.getStringAttribute('change_url');
  }
  public set changeUrl(value: string) {
    this._changeUrl = value;
  }
  public resetChangeUrl() {
    this._changeUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeUrlInput() {
    return this._changeUrl;
  }

  // confirm_password_var - computed: false, optional: true, required: false
  private _confirmPasswordVar?: string; 
  public get confirmPasswordVar() {
    return this.getStringAttribute('confirm_password_var');
  }
  public set confirmPasswordVar(value: string) {
    this._confirmPasswordVar = value;
  }
  public resetConfirmPasswordVar() {
    this._confirmPasswordVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get confirmPasswordVarInput() {
    return this._confirmPasswordVar;
  }

  // continue_text - computed: false, optional: true, required: false
  private _continueText?: string; 
  public get continueText() {
    return this.getStringAttribute('continue_text');
  }
  public set continueText(value: string) {
    this._continueText = value;
  }
  public resetContinueText() {
    this._continueText = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueTextInput() {
    return this._continueText;
  }

  // continue_url - computed: false, optional: true, required: false
  private _continueUrl?: string; 
  public get continueUrl() {
    return this.getStringAttribute('continue_url');
  }
  public set continueUrl(value: string) {
    this._continueUrl = value;
  }
  public resetContinueUrl() {
    this._continueUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get continueUrlInput() {
    return this._continueUrl;
  }

  // new_password_var - computed: false, optional: true, required: false
  private _newPasswordVar?: string; 
  public get newPasswordVar() {
    return this.getStringAttribute('new_password_var');
  }
  public set newPasswordVar(value: string) {
    this._newPasswordVar = value;
  }
  public resetNewPasswordVar() {
    this._newPasswordVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPasswordVarInput() {
    return this._newPasswordVar;
  }

  // old_password_var - computed: false, optional: true, required: false
  private _oldPasswordVar?: string; 
  public get oldPasswordVar() {
    return this.getStringAttribute('old_password_var');
  }
  public set oldPasswordVar(value: string) {
    this._oldPasswordVar = value;
  }
  public resetOldPasswordVar() {
    this._oldPasswordVar = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldPasswordVarInput() {
    return this._oldPasswordVar;
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
  private _background = new AamAuthenticationPortalNotifyChangePasswordBackgroundOutputReference(this, "background");
  public get background() {
    return this._background;
  }
  public putBackground(value: AamAuthenticationPortalNotifyChangePasswordBackground) {
    this._background.internalValue = value;
  }
  public resetBackground() {
    this._background.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundInput() {
    return this._background.internalValue;
  }

  // cfm_pwd_cfg - computed: false, optional: true, required: false
  private _cfmPwdCfg = new AamAuthenticationPortalNotifyChangePasswordCfmPwdCfgOutputReference(this, "cfm_pwd_cfg");
  public get cfmPwdCfg() {
    return this._cfmPwdCfg;
  }
  public putCfmPwdCfg(value: AamAuthenticationPortalNotifyChangePasswordCfmPwdCfg) {
    this._cfmPwdCfg.internalValue = value;
  }
  public resetCfmPwdCfg() {
    this._cfmPwdCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cfmPwdCfgInput() {
    return this._cfmPwdCfg.internalValue;
  }

  // new_pwd_cfg - computed: false, optional: true, required: false
  private _newPwdCfg = new AamAuthenticationPortalNotifyChangePasswordNewPwdCfgOutputReference(this, "new_pwd_cfg");
  public get newPwdCfg() {
    return this._newPwdCfg;
  }
  public putNewPwdCfg(value: AamAuthenticationPortalNotifyChangePasswordNewPwdCfg) {
    this._newPwdCfg.internalValue = value;
  }
  public resetNewPwdCfg() {
    this._newPwdCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get newPwdCfgInput() {
    return this._newPwdCfg.internalValue;
  }

  // old_pwd_cfg - computed: false, optional: true, required: false
  private _oldPwdCfg = new AamAuthenticationPortalNotifyChangePasswordOldPwdCfgOutputReference(this, "old_pwd_cfg");
  public get oldPwdCfg() {
    return this._oldPwdCfg;
  }
  public putOldPwdCfg(value: AamAuthenticationPortalNotifyChangePasswordOldPwdCfg) {
    this._oldPwdCfg.internalValue = value;
  }
  public resetOldPwdCfg() {
    this._oldPwdCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldPwdCfgInput() {
    return this._oldPwdCfg.internalValue;
  }

  // username_cfg - computed: false, optional: true, required: false
  private _usernameCfg = new AamAuthenticationPortalNotifyChangePasswordUsernameCfgOutputReference(this, "username_cfg");
  public get usernameCfg() {
    return this._usernameCfg;
  }
  public putUsernameCfg(value: AamAuthenticationPortalNotifyChangePasswordUsernameCfg) {
    this._usernameCfg.internalValue = value;
  }
  public resetUsernameCfg() {
    this._usernameCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameCfgInput() {
    return this._usernameCfg.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal thunder_aam_authentication_portal}
*/
export class AamAuthenticationPortal extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_portal";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthenticationPortal resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthenticationPortal to import
  * @param importFromId The id of the existing AamAuthenticationPortal that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthenticationPortal to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_portal", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal thunder_aam_authentication_portal} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthenticationPortalConfig
  */
  public constructor(scope: Construct, id: string, config: AamAuthenticationPortalConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_portal',
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
    this._id = config.id;
    this._name = config.name;
    this._userTag = config.userTag;
    this._uuid = config.uuid;
    this._changePassword.internalValue = config.changePassword;
    this._logoCfg.internalValue = config.logoCfg;
    this._logon.internalValue = config.logon;
    this._logonFail.internalValue = config.logonFail;
    this._notifyChangePassword.internalValue = config.notifyChangePassword;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // change_password - computed: false, optional: true, required: false
  private _changePassword = new AamAuthenticationPortalChangePasswordOutputReference(this, "change_password");
  public get changePassword() {
    return this._changePassword;
  }
  public putChangePassword(value: AamAuthenticationPortalChangePassword) {
    this._changePassword.internalValue = value;
  }
  public resetChangePassword() {
    this._changePassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changePasswordInput() {
    return this._changePassword.internalValue;
  }

  // logo_cfg - computed: false, optional: true, required: false
  private _logoCfg = new AamAuthenticationPortalLogoCfgOutputReference(this, "logo_cfg");
  public get logoCfg() {
    return this._logoCfg;
  }
  public putLogoCfg(value: AamAuthenticationPortalLogoCfg) {
    this._logoCfg.internalValue = value;
  }
  public resetLogoCfg() {
    this._logoCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoCfgInput() {
    return this._logoCfg.internalValue;
  }

  // logon - computed: false, optional: true, required: false
  private _logon = new AamAuthenticationPortalLogonOutputReference(this, "logon");
  public get logon() {
    return this._logon;
  }
  public putLogon(value: AamAuthenticationPortalLogon) {
    this._logon.internalValue = value;
  }
  public resetLogon() {
    this._logon.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logonInput() {
    return this._logon.internalValue;
  }

  // logon_fail - computed: false, optional: true, required: false
  private _logonFail = new AamAuthenticationPortalLogonFailOutputReference(this, "logon_fail");
  public get logonFail() {
    return this._logonFail;
  }
  public putLogonFail(value: AamAuthenticationPortalLogonFail) {
    this._logonFail.internalValue = value;
  }
  public resetLogonFail() {
    this._logonFail.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logonFailInput() {
    return this._logonFail.internalValue;
  }

  // notify_change_password - computed: false, optional: true, required: false
  private _notifyChangePassword = new AamAuthenticationPortalNotifyChangePasswordOutputReference(this, "notify_change_password");
  public get notifyChangePassword() {
    return this._notifyChangePassword;
  }
  public putNotifyChangePassword(value: AamAuthenticationPortalNotifyChangePassword) {
    this._notifyChangePassword.internalValue = value;
  }
  public resetNotifyChangePassword() {
    this._notifyChangePassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notifyChangePasswordInput() {
    return this._notifyChangePassword.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      user_tag: cdktf.stringToTerraform(this._userTag),
      uuid: cdktf.stringToTerraform(this._uuid),
      change_password: aamAuthenticationPortalChangePasswordToTerraform(this._changePassword.internalValue),
      logo_cfg: aamAuthenticationPortalLogoCfgToTerraform(this._logoCfg.internalValue),
      logon: aamAuthenticationPortalLogonToTerraform(this._logon.internalValue),
      logon_fail: aamAuthenticationPortalLogonFailToTerraform(this._logonFail.internalValue),
      notify_change_password: aamAuthenticationPortalNotifyChangePasswordToTerraform(this._notifyChangePassword.internalValue),
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
      change_password: {
        value: aamAuthenticationPortalChangePasswordToHclTerraform(this._changePassword.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationPortalChangePasswordList",
      },
      logo_cfg: {
        value: aamAuthenticationPortalLogoCfgToHclTerraform(this._logoCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationPortalLogoCfgList",
      },
      logon: {
        value: aamAuthenticationPortalLogonToHclTerraform(this._logon.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationPortalLogonList",
      },
      logon_fail: {
        value: aamAuthenticationPortalLogonFailToHclTerraform(this._logonFail.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationPortalLogonFailList",
      },
      notify_change_password: {
        value: aamAuthenticationPortalNotifyChangePasswordToHclTerraform(this._notifyChangePassword.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationPortalNotifyChangePasswordList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
