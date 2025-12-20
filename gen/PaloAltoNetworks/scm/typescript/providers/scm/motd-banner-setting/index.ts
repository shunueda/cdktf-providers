// https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/motd_banner_setting
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MotdBannerSettingConfig extends cdktf.TerraformMetaArguments {
  /**
  * The device in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/motd_banner_setting#device MotdBannerSetting#device}
  */
  readonly device?: string;
  /**
  * The folder in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/motd_banner_setting#folder MotdBannerSetting#folder}
  */
  readonly folder?: string;
  /**
  * Motd and banner
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/motd_banner_setting#motd_and_banner MotdBannerSetting#motd_and_banner}
  */
  readonly motdAndBanner?: MotdBannerSettingMotdAndBanner;
  /**
  * The snippet in which the resource is defined
  * > ℹ️ **Note:** You must specify exactly one of `device`, `folder`, and `snippet`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/motd_banner_setting#snippet MotdBannerSetting#snippet}
  */
  readonly snippet?: string;
}
export interface MotdBannerSettingMotdAndBanner {
  /**
  * Banner footer
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/motd_banner_setting#banner_footer MotdBannerSetting#banner_footer}
  */
  readonly bannerFooter?: string;
  /**
  * The following list details the supported values and their colors.
  * 
  * - `color1` = Red
  * - `color2` = Green
  * - `color3` = Blue
  * - `color4` = Yellow
  * - `color5` = Copper
  * - `color6` = Orange
  * - `color7` = Purple
  * - `color8` = Gray
  * - `color9` = Light Green
  * - `color10` = Cyan
  * - `color11` = Light Gray
  * - `color12` = Blue Gray
  * - `color13` = Lime
  * - `color14` = Black
  * - `color15` = Gold
  * - `color16` = Brown
  * - `color17` = Olive
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/motd_banner_setting#banner_footer_color MotdBannerSetting#banner_footer_color}
  */
  readonly bannerFooterColor?: string;
  /**
  * The following list details the supported values and their colors.
  * 
  * - `color1` = Red
  * - `color2` = Green
  * - `color3` = Blue
  * - `color4` = Yellow
  * - `color5` = Copper
  * - `color6` = Orange
  * - `color7` = Purple
  * - `color8` = Gray
  * - `color9` = Light Green
  * - `color10` = Cyan
  * - `color11` = Light Gray
  * - `color12` = Blue Gray
  * - `color13` = Lime
  * - `color14` = Black
  * - `color15` = Gold
  * - `color16` = Brown
  * - `color17` = Olive
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/motd_banner_setting#banner_footer_text_color MotdBannerSetting#banner_footer_text_color}
  */
  readonly bannerFooterTextColor?: string;
  /**
  * Banner header
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/motd_banner_setting#banner_header MotdBannerSetting#banner_header}
  */
  readonly bannerHeader?: string;
  /**
  * The following list details the supported values and their colors.
  * 
  * - `color1` = Red
  * - `color2` = Green
  * - `color3` = Blue
  * - `color4` = Yellow
  * - `color5` = Copper
  * - `color6` = Orange
  * - `color7` = Purple
  * - `color8` = Gray
  * - `color9` = Light Green
  * - `color10` = Cyan
  * - `color11` = Light Gray
  * - `color12` = Blue Gray
  * - `color13` = Lime
  * - `color14` = Black
  * - `color15` = Gold
  * - `color16` = Brown
  * - `color17` = Olive
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/motd_banner_setting#banner_header_color MotdBannerSetting#banner_header_color}
  */
  readonly bannerHeaderColor?: string;
  /**
  * Banner header footer match
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/motd_banner_setting#banner_header_footer_match MotdBannerSetting#banner_header_footer_match}
  */
  readonly bannerHeaderFooterMatch?: boolean | cdktf.IResolvable;
  /**
  * The following list details the supported values and their colors.
  * 
  * - `color1` = Red
  * - `color2` = Green
  * - `color3` = Blue
  * - `color4` = Yellow
  * - `color5` = Copper
  * - `color6` = Orange
  * - `color7` = Purple
  * - `color8` = Gray
  * - `color9` = Light Green
  * - `color10` = Cyan
  * - `color11` = Light Gray
  * - `color12` = Blue Gray
  * - `color13` = Lime
  * - `color14` = Black
  * - `color15` = Gold
  * - `color16` = Brown
  * - `color17` = Olive
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/motd_banner_setting#banner_header_text_color MotdBannerSetting#banner_header_text_color}
  */
  readonly bannerHeaderTextColor?: string;
  /**
  * Message
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/motd_banner_setting#message MotdBannerSetting#message}
  */
  readonly message?: string;
  /**
  * The following list details the supported values and their colors.
  * 
  * - `color1` = Red
  * - `color2` = Green
  * - `color3` = Blue
  * - `color4` = Yellow
  * - `color5` = Copper
  * - `color6` = Orange
  * - `color7` = Purple
  * - `color8` = Gray
  * - `color9` = Light Green
  * - `color10` = Cyan
  * - `color11` = Light Gray
  * - `color12` = Blue Gray
  * - `color13` = Lime
  * - `color14` = Black
  * - `color15` = Gold
  * - `color16` = Brown
  * - `color17` = Olive
  * 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/motd_banner_setting#motd_color MotdBannerSetting#motd_color}
  */
  readonly motdColor?: string;
  /**
  * Motd do not display again
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/motd_banner_setting#motd_do_not_display_again MotdBannerSetting#motd_do_not_display_again}
  */
  readonly motdDoNotDisplayAgain?: boolean | cdktf.IResolvable;
  /**
  * Motd enable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/motd_banner_setting#motd_enable MotdBannerSetting#motd_enable}
  */
  readonly motdEnable?: boolean | cdktf.IResolvable;
  /**
  * Motd title
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/motd_banner_setting#motd_title MotdBannerSetting#motd_title}
  */
  readonly motdTitle?: string;
  /**
  * Severity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/motd_banner_setting#severity MotdBannerSetting#severity}
  */
  readonly severity?: string;
}

export function motdBannerSettingMotdAndBannerToTerraform(struct?: MotdBannerSettingMotdAndBanner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    banner_footer: cdktf.stringToTerraform(struct!.bannerFooter),
    banner_footer_color: cdktf.stringToTerraform(struct!.bannerFooterColor),
    banner_footer_text_color: cdktf.stringToTerraform(struct!.bannerFooterTextColor),
    banner_header: cdktf.stringToTerraform(struct!.bannerHeader),
    banner_header_color: cdktf.stringToTerraform(struct!.bannerHeaderColor),
    banner_header_footer_match: cdktf.booleanToTerraform(struct!.bannerHeaderFooterMatch),
    banner_header_text_color: cdktf.stringToTerraform(struct!.bannerHeaderTextColor),
    message: cdktf.stringToTerraform(struct!.message),
    motd_color: cdktf.stringToTerraform(struct!.motdColor),
    motd_do_not_display_again: cdktf.booleanToTerraform(struct!.motdDoNotDisplayAgain),
    motd_enable: cdktf.booleanToTerraform(struct!.motdEnable),
    motd_title: cdktf.stringToTerraform(struct!.motdTitle),
    severity: cdktf.stringToTerraform(struct!.severity),
  }
}


export function motdBannerSettingMotdAndBannerToHclTerraform(struct?: MotdBannerSettingMotdAndBanner | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    banner_footer: {
      value: cdktf.stringToHclTerraform(struct!.bannerFooter),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    banner_footer_color: {
      value: cdktf.stringToHclTerraform(struct!.bannerFooterColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    banner_footer_text_color: {
      value: cdktf.stringToHclTerraform(struct!.bannerFooterTextColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    banner_header: {
      value: cdktf.stringToHclTerraform(struct!.bannerHeader),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    banner_header_color: {
      value: cdktf.stringToHclTerraform(struct!.bannerHeaderColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    banner_header_footer_match: {
      value: cdktf.booleanToHclTerraform(struct!.bannerHeaderFooterMatch),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    banner_header_text_color: {
      value: cdktf.stringToHclTerraform(struct!.bannerHeaderTextColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    message: {
      value: cdktf.stringToHclTerraform(struct!.message),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    motd_color: {
      value: cdktf.stringToHclTerraform(struct!.motdColor),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    motd_do_not_display_again: {
      value: cdktf.booleanToHclTerraform(struct!.motdDoNotDisplayAgain),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    motd_enable: {
      value: cdktf.booleanToHclTerraform(struct!.motdEnable),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    motd_title: {
      value: cdktf.stringToHclTerraform(struct!.motdTitle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    severity: {
      value: cdktf.stringToHclTerraform(struct!.severity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class MotdBannerSettingMotdAndBannerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): MotdBannerSettingMotdAndBanner | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._bannerFooter !== undefined) {
      hasAnyValues = true;
      internalValueResult.bannerFooter = this._bannerFooter;
    }
    if (this._bannerFooterColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.bannerFooterColor = this._bannerFooterColor;
    }
    if (this._bannerFooterTextColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.bannerFooterTextColor = this._bannerFooterTextColor;
    }
    if (this._bannerHeader !== undefined) {
      hasAnyValues = true;
      internalValueResult.bannerHeader = this._bannerHeader;
    }
    if (this._bannerHeaderColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.bannerHeaderColor = this._bannerHeaderColor;
    }
    if (this._bannerHeaderFooterMatch !== undefined) {
      hasAnyValues = true;
      internalValueResult.bannerHeaderFooterMatch = this._bannerHeaderFooterMatch;
    }
    if (this._bannerHeaderTextColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.bannerHeaderTextColor = this._bannerHeaderTextColor;
    }
    if (this._message !== undefined) {
      hasAnyValues = true;
      internalValueResult.message = this._message;
    }
    if (this._motdColor !== undefined) {
      hasAnyValues = true;
      internalValueResult.motdColor = this._motdColor;
    }
    if (this._motdDoNotDisplayAgain !== undefined) {
      hasAnyValues = true;
      internalValueResult.motdDoNotDisplayAgain = this._motdDoNotDisplayAgain;
    }
    if (this._motdEnable !== undefined) {
      hasAnyValues = true;
      internalValueResult.motdEnable = this._motdEnable;
    }
    if (this._motdTitle !== undefined) {
      hasAnyValues = true;
      internalValueResult.motdTitle = this._motdTitle;
    }
    if (this._severity !== undefined) {
      hasAnyValues = true;
      internalValueResult.severity = this._severity;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: MotdBannerSettingMotdAndBanner | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._bannerFooter = undefined;
      this._bannerFooterColor = undefined;
      this._bannerFooterTextColor = undefined;
      this._bannerHeader = undefined;
      this._bannerHeaderColor = undefined;
      this._bannerHeaderFooterMatch = undefined;
      this._bannerHeaderTextColor = undefined;
      this._message = undefined;
      this._motdColor = undefined;
      this._motdDoNotDisplayAgain = undefined;
      this._motdEnable = undefined;
      this._motdTitle = undefined;
      this._severity = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._bannerFooter = value.bannerFooter;
      this._bannerFooterColor = value.bannerFooterColor;
      this._bannerFooterTextColor = value.bannerFooterTextColor;
      this._bannerHeader = value.bannerHeader;
      this._bannerHeaderColor = value.bannerHeaderColor;
      this._bannerHeaderFooterMatch = value.bannerHeaderFooterMatch;
      this._bannerHeaderTextColor = value.bannerHeaderTextColor;
      this._message = value.message;
      this._motdColor = value.motdColor;
      this._motdDoNotDisplayAgain = value.motdDoNotDisplayAgain;
      this._motdEnable = value.motdEnable;
      this._motdTitle = value.motdTitle;
      this._severity = value.severity;
    }
  }

  // banner_footer - computed: false, optional: true, required: false
  private _bannerFooter?: string; 
  public get bannerFooter() {
    return this.getStringAttribute('banner_footer');
  }
  public set bannerFooter(value: string) {
    this._bannerFooter = value;
  }
  public resetBannerFooter() {
    this._bannerFooter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannerFooterInput() {
    return this._bannerFooter;
  }

  // banner_footer_color - computed: false, optional: true, required: false
  private _bannerFooterColor?: string; 
  public get bannerFooterColor() {
    return this.getStringAttribute('banner_footer_color');
  }
  public set bannerFooterColor(value: string) {
    this._bannerFooterColor = value;
  }
  public resetBannerFooterColor() {
    this._bannerFooterColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannerFooterColorInput() {
    return this._bannerFooterColor;
  }

  // banner_footer_text_color - computed: false, optional: true, required: false
  private _bannerFooterTextColor?: string; 
  public get bannerFooterTextColor() {
    return this.getStringAttribute('banner_footer_text_color');
  }
  public set bannerFooterTextColor(value: string) {
    this._bannerFooterTextColor = value;
  }
  public resetBannerFooterTextColor() {
    this._bannerFooterTextColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannerFooterTextColorInput() {
    return this._bannerFooterTextColor;
  }

  // banner_header - computed: false, optional: true, required: false
  private _bannerHeader?: string; 
  public get bannerHeader() {
    return this.getStringAttribute('banner_header');
  }
  public set bannerHeader(value: string) {
    this._bannerHeader = value;
  }
  public resetBannerHeader() {
    this._bannerHeader = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannerHeaderInput() {
    return this._bannerHeader;
  }

  // banner_header_color - computed: false, optional: true, required: false
  private _bannerHeaderColor?: string; 
  public get bannerHeaderColor() {
    return this.getStringAttribute('banner_header_color');
  }
  public set bannerHeaderColor(value: string) {
    this._bannerHeaderColor = value;
  }
  public resetBannerHeaderColor() {
    this._bannerHeaderColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannerHeaderColorInput() {
    return this._bannerHeaderColor;
  }

  // banner_header_footer_match - computed: false, optional: true, required: false
  private _bannerHeaderFooterMatch?: boolean | cdktf.IResolvable; 
  public get bannerHeaderFooterMatch() {
    return this.getBooleanAttribute('banner_header_footer_match');
  }
  public set bannerHeaderFooterMatch(value: boolean | cdktf.IResolvable) {
    this._bannerHeaderFooterMatch = value;
  }
  public resetBannerHeaderFooterMatch() {
    this._bannerHeaderFooterMatch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannerHeaderFooterMatchInput() {
    return this._bannerHeaderFooterMatch;
  }

  // banner_header_text_color - computed: false, optional: true, required: false
  private _bannerHeaderTextColor?: string; 
  public get bannerHeaderTextColor() {
    return this.getStringAttribute('banner_header_text_color');
  }
  public set bannerHeaderTextColor(value: string) {
    this._bannerHeaderTextColor = value;
  }
  public resetBannerHeaderTextColor() {
    this._bannerHeaderTextColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bannerHeaderTextColorInput() {
    return this._bannerHeaderTextColor;
  }

  // message - computed: false, optional: true, required: false
  private _message?: string; 
  public get message() {
    return this.getStringAttribute('message');
  }
  public set message(value: string) {
    this._message = value;
  }
  public resetMessage() {
    this._message = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get messageInput() {
    return this._message;
  }

  // motd_color - computed: false, optional: true, required: false
  private _motdColor?: string; 
  public get motdColor() {
    return this.getStringAttribute('motd_color');
  }
  public set motdColor(value: string) {
    this._motdColor = value;
  }
  public resetMotdColor() {
    this._motdColor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get motdColorInput() {
    return this._motdColor;
  }

  // motd_do_not_display_again - computed: false, optional: true, required: false
  private _motdDoNotDisplayAgain?: boolean | cdktf.IResolvable; 
  public get motdDoNotDisplayAgain() {
    return this.getBooleanAttribute('motd_do_not_display_again');
  }
  public set motdDoNotDisplayAgain(value: boolean | cdktf.IResolvable) {
    this._motdDoNotDisplayAgain = value;
  }
  public resetMotdDoNotDisplayAgain() {
    this._motdDoNotDisplayAgain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get motdDoNotDisplayAgainInput() {
    return this._motdDoNotDisplayAgain;
  }

  // motd_enable - computed: false, optional: true, required: false
  private _motdEnable?: boolean | cdktf.IResolvable; 
  public get motdEnable() {
    return this.getBooleanAttribute('motd_enable');
  }
  public set motdEnable(value: boolean | cdktf.IResolvable) {
    this._motdEnable = value;
  }
  public resetMotdEnable() {
    this._motdEnable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get motdEnableInput() {
    return this._motdEnable;
  }

  // motd_title - computed: false, optional: true, required: false
  private _motdTitle?: string; 
  public get motdTitle() {
    return this.getStringAttribute('motd_title');
  }
  public set motdTitle(value: string) {
    this._motdTitle = value;
  }
  public resetMotdTitle() {
    this._motdTitle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get motdTitleInput() {
    return this._motdTitle;
  }

  // severity - computed: false, optional: true, required: false
  private _severity?: string; 
  public get severity() {
    return this.getStringAttribute('severity');
  }
  public set severity(value: string) {
    this._severity = value;
  }
  public resetSeverity() {
    this._severity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get severityInput() {
    return this._severity;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/motd_banner_setting scm_motd_banner_setting}
*/
export class MotdBannerSetting extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "scm_motd_banner_setting";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MotdBannerSetting resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MotdBannerSetting to import
  * @param importFromId The id of the existing MotdBannerSetting that should be imported. Refer to the {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/motd_banner_setting#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MotdBannerSetting to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "scm_motd_banner_setting", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/paloaltonetworks/scm/1.0.6/docs/resources/motd_banner_setting scm_motd_banner_setting} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MotdBannerSettingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: MotdBannerSettingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'scm_motd_banner_setting',
      terraformGeneratorMetadata: {
        providerName: 'scm',
        providerVersion: '1.0.6',
        providerVersionConstraint: '1.0.6'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
    this._folder = config.folder;
    this._motdAndBanner.internalValue = config.motdAndBanner;
    this._snippet = config.snippet;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // folder - computed: false, optional: true, required: false
  private _folder?: string; 
  public get folder() {
    return this.getStringAttribute('folder');
  }
  public set folder(value: string) {
    this._folder = value;
  }
  public resetFolder() {
    this._folder = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get folderInput() {
    return this._folder;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // motd_and_banner - computed: false, optional: true, required: false
  private _motdAndBanner = new MotdBannerSettingMotdAndBannerOutputReference(this, "motd_and_banner");
  public get motdAndBanner() {
    return this._motdAndBanner;
  }
  public putMotdAndBanner(value: MotdBannerSettingMotdAndBanner) {
    this._motdAndBanner.internalValue = value;
  }
  public resetMotdAndBanner() {
    this._motdAndBanner.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get motdAndBannerInput() {
    return this._motdAndBanner.internalValue;
  }

  // snippet - computed: false, optional: true, required: false
  private _snippet?: string; 
  public get snippet() {
    return this.getStringAttribute('snippet');
  }
  public set snippet(value: string) {
    this._snippet = value;
  }
  public resetSnippet() {
    this._snippet = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get snippetInput() {
    return this._snippet;
  }

  // tfid - computed: true, optional: false, required: false
  public get tfid() {
    return this.getStringAttribute('tfid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
      folder: cdktf.stringToTerraform(this._folder),
      motd_and_banner: motdBannerSettingMotdAndBannerToTerraform(this._motdAndBanner.internalValue),
      snippet: cdktf.stringToTerraform(this._snippet),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      folder: {
        value: cdktf.stringToHclTerraform(this._folder),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      motd_and_banner: {
        value: motdBannerSettingMotdAndBannerToHclTerraform(this._motdAndBanner.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "MotdBannerSettingMotdAndBanner",
      },
      snippet: {
        value: cdktf.stringToHclTerraform(this._snippet),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
