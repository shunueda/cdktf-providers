// https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AamAuthenticationPortalLogonFailAConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#id AamAuthenticationPortalLogonFailA#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#name AamAuthenticationPortalLogonFailA#name}
  */
  readonly name: string;
  /**
  * uuid of the object
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#uuid AamAuthenticationPortalLogonFailA#uuid}
  */
  readonly uuid?: string;
  /**
  * background block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#background AamAuthenticationPortalLogonFailA#background}
  */
  readonly background?: AamAuthenticationPortalLogonFailBackgroundA;
  /**
  * fail_msg_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#fail_msg_cfg AamAuthenticationPortalLogonFailA#fail_msg_cfg}
  */
  readonly failMsgCfg?: AamAuthenticationPortalLogonFailFailMsgCfgA;
  /**
  * title_cfg block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#title_cfg AamAuthenticationPortalLogonFailA#title_cfg}
  */
  readonly titleCfg?: AamAuthenticationPortalLogonFailTitleCfgA;
}
export interface AamAuthenticationPortalLogonFailBackgroundA {
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#bgcolor_name AamAuthenticationPortalLogonFailA#bgcolor_name}
  */
  readonly bgcolorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#bgcolor_value AamAuthenticationPortalLogonFailA#bgcolor_value}
  */
  readonly bgcolorValue?: string;
  /**
  * Specify background image filename
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#bgfile AamAuthenticationPortalLogonFailA#bgfile}
  */
  readonly bgfile?: string;
  /**
  * 'tile': Tile; 'stretch': Stretch; 'fit': Fit;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#bgstyle AamAuthenticationPortalLogonFailA#bgstyle}
  */
  readonly bgstyle?: string;
}

export function aamAuthenticationPortalLogonFailBackgroundAToTerraform(struct?: AamAuthenticationPortalLogonFailBackgroundAOutputReference | AamAuthenticationPortalLogonFailBackgroundA): any {
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


export function aamAuthenticationPortalLogonFailBackgroundAToHclTerraform(struct?: AamAuthenticationPortalLogonFailBackgroundAOutputReference | AamAuthenticationPortalLogonFailBackgroundA): any {
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

export class AamAuthenticationPortalLogonFailBackgroundAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalLogonFailBackgroundA | undefined {
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

  public set internalValue(value: AamAuthenticationPortalLogonFailBackgroundA | undefined) {
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
export interface AamAuthenticationPortalLogonFailFailMsgCfgA {
  /**
  * Specify font color (Default: black)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#fail_color AamAuthenticationPortalLogonFailA#fail_color}
  */
  readonly failColor?: number;
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#fail_color_name AamAuthenticationPortalLogonFailA#fail_color_name}
  */
  readonly failColorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#fail_color_value AamAuthenticationPortalLogonFailA#fail_color_value}
  */
  readonly failColorValue?: string;
  /**
  * 'Arial': Arial; 'Courier_New': Courier New; 'Georgia': Georgia; 'Times_New_Roman': Times New Roman; 'Verdana': Verdana;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#fail_face AamAuthenticationPortalLogonFailA#fail_face}
  */
  readonly failFace?: string;
  /**
  * Sepcify font (Default: Arial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#fail_font AamAuthenticationPortalLogonFailA#fail_font}
  */
  readonly failFont?: number;
  /**
  * Specify custom font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#fail_font_custom AamAuthenticationPortalLogonFailA#fail_font_custom}
  */
  readonly failFontCustom?: string;
  /**
  * Configure logon failure message in default logon fail page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#fail_msg AamAuthenticationPortalLogonFailA#fail_msg}
  */
  readonly failMsg?: number;
  /**
  * Specify font size (Default: 3)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#fail_size AamAuthenticationPortalLogonFailA#fail_size}
  */
  readonly failSize?: number;
  /**
  * Specify logon failure message (Default: Login Failed!!)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#fail_text AamAuthenticationPortalLogonFailA#fail_text}
  */
  readonly failText?: string;
}

export function aamAuthenticationPortalLogonFailFailMsgCfgAToTerraform(struct?: AamAuthenticationPortalLogonFailFailMsgCfgAOutputReference | AamAuthenticationPortalLogonFailFailMsgCfgA): any {
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


export function aamAuthenticationPortalLogonFailFailMsgCfgAToHclTerraform(struct?: AamAuthenticationPortalLogonFailFailMsgCfgAOutputReference | AamAuthenticationPortalLogonFailFailMsgCfgA): any {
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

export class AamAuthenticationPortalLogonFailFailMsgCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalLogonFailFailMsgCfgA | undefined {
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

  public set internalValue(value: AamAuthenticationPortalLogonFailFailMsgCfgA | undefined) {
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
export interface AamAuthenticationPortalLogonFailTitleCfgA {
  /**
  * Configure title in default logon fail page
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#title AamAuthenticationPortalLogonFailA#title}
  */
  readonly title?: number;
  /**
  * Specify font color (Default: black)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#title_color AamAuthenticationPortalLogonFailA#title_color}
  */
  readonly titleColor?: number;
  /**
  * 'aqua': aqua; 'black': black; 'blue': blue; 'fuchsia': fuchsia; 'gray': gray; 'green': green; 'lime': lime; 'maroon': maroon; 'navy': navy; 'olive': olive; 'orange': orange; 'purple': purple; 'red': red; 'silver': silver; 'teal': teal; 'white': white; 'yellow': yellow;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#title_color_name AamAuthenticationPortalLogonFailA#title_color_name}
  */
  readonly titleColorName?: string;
  /**
  * Specify 6-digit HEX color value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#title_color_value AamAuthenticationPortalLogonFailA#title_color_value}
  */
  readonly titleColorValue?: string;
  /**
  * 'Arial': Arial; 'Courier_New': Courier New; 'Georgia': Georgia; 'Times_New_Roman': Times New Roman; 'Verdana': Verdana;
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#title_face AamAuthenticationPortalLogonFailA#title_face}
  */
  readonly titleFace?: string;
  /**
  * Sepcify font (Default: Arial)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#title_font AamAuthenticationPortalLogonFailA#title_font}
  */
  readonly titleFont?: number;
  /**
  * Specify custom font
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#title_font_custom AamAuthenticationPortalLogonFailA#title_font_custom}
  */
  readonly titleFontCustom?: string;
  /**
  * Specify font size (Default: 5)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#title_size AamAuthenticationPortalLogonFailA#title_size}
  */
  readonly titleSize?: number;
  /**
  * Specify title (Default: Try Too Many Times)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#title_text AamAuthenticationPortalLogonFailA#title_text}
  */
  readonly titleText?: string;
}

export function aamAuthenticationPortalLogonFailTitleCfgAToTerraform(struct?: AamAuthenticationPortalLogonFailTitleCfgAOutputReference | AamAuthenticationPortalLogonFailTitleCfgA): any {
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


export function aamAuthenticationPortalLogonFailTitleCfgAToHclTerraform(struct?: AamAuthenticationPortalLogonFailTitleCfgAOutputReference | AamAuthenticationPortalLogonFailTitleCfgA): any {
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

export class AamAuthenticationPortalLogonFailTitleCfgAOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): AamAuthenticationPortalLogonFailTitleCfgA | undefined {
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

  public set internalValue(value: AamAuthenticationPortalLogonFailTitleCfgA | undefined) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail thunder_aam_authentication_portal_logon_fail}
*/
export class AamAuthenticationPortalLogonFailA extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "thunder_aam_authentication_portal_logon_fail";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AamAuthenticationPortalLogonFailA resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AamAuthenticationPortalLogonFailA to import
  * @param importFromId The id of the existing AamAuthenticationPortalLogonFailA that should be imported. Refer to the {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AamAuthenticationPortalLogonFailA to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "thunder_aam_authentication_portal_logon_fail", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/a10networks/thunder/1.4.2/docs/resources/aam_authentication_portal_logon_fail thunder_aam_authentication_portal_logon_fail} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AamAuthenticationPortalLogonFailAConfig
  */
  public constructor(scope: Construct, id: string, config: AamAuthenticationPortalLogonFailAConfig) {
    super(scope, id, {
      terraformResourceType: 'thunder_aam_authentication_portal_logon_fail',
      terraformGeneratorMetadata: {
        providerName: 'thunder',
        providerVersion: '1.4.2'
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
    this._uuid = config.uuid;
    this._background.internalValue = config.background;
    this._failMsgCfg.internalValue = config.failMsgCfg;
    this._titleCfg.internalValue = config.titleCfg;
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
  private _background = new AamAuthenticationPortalLogonFailBackgroundAOutputReference(this, "background");
  public get background() {
    return this._background;
  }
  public putBackground(value: AamAuthenticationPortalLogonFailBackgroundA) {
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
  private _failMsgCfg = new AamAuthenticationPortalLogonFailFailMsgCfgAOutputReference(this, "fail_msg_cfg");
  public get failMsgCfg() {
    return this._failMsgCfg;
  }
  public putFailMsgCfg(value: AamAuthenticationPortalLogonFailFailMsgCfgA) {
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
  private _titleCfg = new AamAuthenticationPortalLogonFailTitleCfgAOutputReference(this, "title_cfg");
  public get titleCfg() {
    return this._titleCfg;
  }
  public putTitleCfg(value: AamAuthenticationPortalLogonFailTitleCfgA) {
    this._titleCfg.internalValue = value;
  }
  public resetTitleCfg() {
    this._titleCfg.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get titleCfgInput() {
    return this._titleCfg.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      uuid: cdktf.stringToTerraform(this._uuid),
      background: aamAuthenticationPortalLogonFailBackgroundAToTerraform(this._background.internalValue),
      fail_msg_cfg: aamAuthenticationPortalLogonFailFailMsgCfgAToTerraform(this._failMsgCfg.internalValue),
      title_cfg: aamAuthenticationPortalLogonFailTitleCfgAToTerraform(this._titleCfg.internalValue),
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
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      background: {
        value: aamAuthenticationPortalLogonFailBackgroundAToHclTerraform(this._background.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationPortalLogonFailBackgroundAList",
      },
      fail_msg_cfg: {
        value: aamAuthenticationPortalLogonFailFailMsgCfgAToHclTerraform(this._failMsgCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationPortalLogonFailFailMsgCfgAList",
      },
      title_cfg: {
        value: aamAuthenticationPortalLogonFailTitleCfgAToHclTerraform(this._titleCfg.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "AamAuthenticationPortalLogonFailTitleCfgAList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
