// https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LabelPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * hex value for background color
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy#background_color LabelPolicy#background_color}
  */
  readonly backgroundColor: string;
  /**
  * hex value for background color dark theme
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy#background_color_dark LabelPolicy#background_color_dark}
  */
  readonly backgroundColorDark: string;
  /**
  * disable watermark
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy#disable_watermark LabelPolicy#disable_watermark}
  */
  readonly disableWatermark: boolean | cdktf.IResolvable;
  /**
  * hex value for font color
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy#font_color LabelPolicy#font_color}
  */
  readonly fontColor: string;
  /**
  * hex value for font color dark theme
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy#font_color_dark LabelPolicy#font_color_dark}
  */
  readonly fontColorDark: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy#font_hash LabelPolicy#font_hash}
  */
  readonly fontHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy#font_path LabelPolicy#font_path}
  */
  readonly fontPath?: string;
  /**
  * hides the org suffix on the login form if the scope "urn:zitadel:iam:org:domain:primary:{domainname}" is set. Details about this scope in https://zitadel.com/docs/apis/openidoauth/scopes#reserved-scopes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy#hide_login_name_suffix LabelPolicy#hide_login_name_suffix}
  */
  readonly hideLoginNameSuffix: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy#icon_dark_hash LabelPolicy#icon_dark_hash}
  */
  readonly iconDarkHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy#icon_dark_path LabelPolicy#icon_dark_path}
  */
  readonly iconDarkPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy#icon_hash LabelPolicy#icon_hash}
  */
  readonly iconHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy#icon_path LabelPolicy#icon_path}
  */
  readonly iconPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy#id LabelPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy#logo_dark_hash LabelPolicy#logo_dark_hash}
  */
  readonly logoDarkHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy#logo_dark_path LabelPolicy#logo_dark_path}
  */
  readonly logoDarkPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy#logo_hash LabelPolicy#logo_hash}
  */
  readonly logoHash?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy#logo_path LabelPolicy#logo_path}
  */
  readonly logoPath?: string;
  /**
  * ID of the organization
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy#org_id LabelPolicy#org_id}
  */
  readonly orgId?: string;
  /**
  * hex value for primary color
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy#primary_color LabelPolicy#primary_color}
  */
  readonly primaryColor: string;
  /**
  * hex value for primary color dark theme
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy#primary_color_dark LabelPolicy#primary_color_dark}
  */
  readonly primaryColorDark: string;
  /**
  * set the label policy active after creating/updating
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy#set_active LabelPolicy#set_active}
  */
  readonly setActive?: boolean | cdktf.IResolvable;
  /**
  * theme mode, supported values: THEME_MODE_UNSPECIFIED, THEME_MODE_AUTO, THEME_MODE_DARK, THEME_MODE_LIGHT
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy#theme_mode LabelPolicy#theme_mode}
  */
  readonly themeMode?: string;
  /**
  * hex value for warn color
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy#warn_color LabelPolicy#warn_color}
  */
  readonly warnColor: string;
  /**
  * hex value for warn color dark theme
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy#warn_color_dark LabelPolicy#warn_color_dark}
  */
  readonly warnColorDark: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy zitadel_label_policy}
*/
export class LabelPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zitadel_label_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a LabelPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the LabelPolicy to import
  * @param importFromId The id of the existing LabelPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the LabelPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zitadel_label_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zitadel/zitadel/2.3.0/docs/resources/label_policy zitadel_label_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LabelPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: LabelPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'zitadel_label_policy',
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
    this._backgroundColor = config.backgroundColor;
    this._backgroundColorDark = config.backgroundColorDark;
    this._disableWatermark = config.disableWatermark;
    this._fontColor = config.fontColor;
    this._fontColorDark = config.fontColorDark;
    this._fontHash = config.fontHash;
    this._fontPath = config.fontPath;
    this._hideLoginNameSuffix = config.hideLoginNameSuffix;
    this._iconDarkHash = config.iconDarkHash;
    this._iconDarkPath = config.iconDarkPath;
    this._iconHash = config.iconHash;
    this._iconPath = config.iconPath;
    this._id = config.id;
    this._logoDarkHash = config.logoDarkHash;
    this._logoDarkPath = config.logoDarkPath;
    this._logoHash = config.logoHash;
    this._logoPath = config.logoPath;
    this._orgId = config.orgId;
    this._primaryColor = config.primaryColor;
    this._primaryColorDark = config.primaryColorDark;
    this._setActive = config.setActive;
    this._themeMode = config.themeMode;
    this._warnColor = config.warnColor;
    this._warnColorDark = config.warnColorDark;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // background_color - computed: false, optional: false, required: true
  private _backgroundColor?: string; 
  public get backgroundColor() {
    return this.getStringAttribute('background_color');
  }
  public set backgroundColor(value: string) {
    this._backgroundColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorInput() {
    return this._backgroundColor;
  }

  // background_color_dark - computed: false, optional: false, required: true
  private _backgroundColorDark?: string; 
  public get backgroundColorDark() {
    return this.getStringAttribute('background_color_dark');
  }
  public set backgroundColorDark(value: string) {
    this._backgroundColorDark = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backgroundColorDarkInput() {
    return this._backgroundColorDark;
  }

  // disable_watermark - computed: false, optional: false, required: true
  private _disableWatermark?: boolean | cdktf.IResolvable; 
  public get disableWatermark() {
    return this.getBooleanAttribute('disable_watermark');
  }
  public set disableWatermark(value: boolean | cdktf.IResolvable) {
    this._disableWatermark = value;
  }
  // Temporarily expose input value. Use with caution.
  public get disableWatermarkInput() {
    return this._disableWatermark;
  }

  // font_color - computed: false, optional: false, required: true
  private _fontColor?: string; 
  public get fontColor() {
    return this.getStringAttribute('font_color');
  }
  public set fontColor(value: string) {
    this._fontColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorInput() {
    return this._fontColor;
  }

  // font_color_dark - computed: false, optional: false, required: true
  private _fontColorDark?: string; 
  public get fontColorDark() {
    return this.getStringAttribute('font_color_dark');
  }
  public set fontColorDark(value: string) {
    this._fontColorDark = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fontColorDarkInput() {
    return this._fontColorDark;
  }

  // font_hash - computed: false, optional: true, required: false
  private _fontHash?: string; 
  public get fontHash() {
    return this.getStringAttribute('font_hash');
  }
  public set fontHash(value: string) {
    this._fontHash = value;
  }
  public resetFontHash() {
    this._fontHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontHashInput() {
    return this._fontHash;
  }

  // font_path - computed: false, optional: true, required: false
  private _fontPath?: string; 
  public get fontPath() {
    return this.getStringAttribute('font_path');
  }
  public set fontPath(value: string) {
    this._fontPath = value;
  }
  public resetFontPath() {
    this._fontPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fontPathInput() {
    return this._fontPath;
  }

  // font_url - computed: true, optional: false, required: false
  public get fontUrl() {
    return this.getStringAttribute('font_url');
  }

  // hide_login_name_suffix - computed: false, optional: false, required: true
  private _hideLoginNameSuffix?: boolean | cdktf.IResolvable; 
  public get hideLoginNameSuffix() {
    return this.getBooleanAttribute('hide_login_name_suffix');
  }
  public set hideLoginNameSuffix(value: boolean | cdktf.IResolvable) {
    this._hideLoginNameSuffix = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hideLoginNameSuffixInput() {
    return this._hideLoginNameSuffix;
  }

  // icon_dark_hash - computed: false, optional: true, required: false
  private _iconDarkHash?: string; 
  public get iconDarkHash() {
    return this.getStringAttribute('icon_dark_hash');
  }
  public set iconDarkHash(value: string) {
    this._iconDarkHash = value;
  }
  public resetIconDarkHash() {
    this._iconDarkHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconDarkHashInput() {
    return this._iconDarkHash;
  }

  // icon_dark_path - computed: false, optional: true, required: false
  private _iconDarkPath?: string; 
  public get iconDarkPath() {
    return this.getStringAttribute('icon_dark_path');
  }
  public set iconDarkPath(value: string) {
    this._iconDarkPath = value;
  }
  public resetIconDarkPath() {
    this._iconDarkPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconDarkPathInput() {
    return this._iconDarkPath;
  }

  // icon_hash - computed: false, optional: true, required: false
  private _iconHash?: string; 
  public get iconHash() {
    return this.getStringAttribute('icon_hash');
  }
  public set iconHash(value: string) {
    this._iconHash = value;
  }
  public resetIconHash() {
    this._iconHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconHashInput() {
    return this._iconHash;
  }

  // icon_path - computed: false, optional: true, required: false
  private _iconPath?: string; 
  public get iconPath() {
    return this.getStringAttribute('icon_path');
  }
  public set iconPath(value: string) {
    this._iconPath = value;
  }
  public resetIconPath() {
    this._iconPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iconPathInput() {
    return this._iconPath;
  }

  // icon_url - computed: true, optional: false, required: false
  public get iconUrl() {
    return this.getStringAttribute('icon_url');
  }

  // icon_url_dark - computed: true, optional: false, required: false
  public get iconUrlDark() {
    return this.getStringAttribute('icon_url_dark');
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

  // logo_dark_hash - computed: false, optional: true, required: false
  private _logoDarkHash?: string; 
  public get logoDarkHash() {
    return this.getStringAttribute('logo_dark_hash');
  }
  public set logoDarkHash(value: string) {
    this._logoDarkHash = value;
  }
  public resetLogoDarkHash() {
    this._logoDarkHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoDarkHashInput() {
    return this._logoDarkHash;
  }

  // logo_dark_path - computed: false, optional: true, required: false
  private _logoDarkPath?: string; 
  public get logoDarkPath() {
    return this.getStringAttribute('logo_dark_path');
  }
  public set logoDarkPath(value: string) {
    this._logoDarkPath = value;
  }
  public resetLogoDarkPath() {
    this._logoDarkPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoDarkPathInput() {
    return this._logoDarkPath;
  }

  // logo_hash - computed: false, optional: true, required: false
  private _logoHash?: string; 
  public get logoHash() {
    return this.getStringAttribute('logo_hash');
  }
  public set logoHash(value: string) {
    this._logoHash = value;
  }
  public resetLogoHash() {
    this._logoHash = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoHashInput() {
    return this._logoHash;
  }

  // logo_path - computed: false, optional: true, required: false
  private _logoPath?: string; 
  public get logoPath() {
    return this.getStringAttribute('logo_path');
  }
  public set logoPath(value: string) {
    this._logoPath = value;
  }
  public resetLogoPath() {
    this._logoPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logoPathInput() {
    return this._logoPath;
  }

  // logo_url - computed: true, optional: false, required: false
  public get logoUrl() {
    return this.getStringAttribute('logo_url');
  }

  // logo_url_dark - computed: true, optional: false, required: false
  public get logoUrlDark() {
    return this.getStringAttribute('logo_url_dark');
  }

  // org_id - computed: false, optional: true, required: false
  private _orgId?: string; 
  public get orgId() {
    return this.getStringAttribute('org_id');
  }
  public set orgId(value: string) {
    this._orgId = value;
  }
  public resetOrgId() {
    this._orgId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get orgIdInput() {
    return this._orgId;
  }

  // primary_color - computed: false, optional: false, required: true
  private _primaryColor?: string; 
  public get primaryColor() {
    return this.getStringAttribute('primary_color');
  }
  public set primaryColor(value: string) {
    this._primaryColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryColorInput() {
    return this._primaryColor;
  }

  // primary_color_dark - computed: false, optional: false, required: true
  private _primaryColorDark?: string; 
  public get primaryColorDark() {
    return this.getStringAttribute('primary_color_dark');
  }
  public set primaryColorDark(value: string) {
    this._primaryColorDark = value;
  }
  // Temporarily expose input value. Use with caution.
  public get primaryColorDarkInput() {
    return this._primaryColorDark;
  }

  // set_active - computed: false, optional: true, required: false
  private _setActive?: boolean | cdktf.IResolvable; 
  public get setActive() {
    return this.getBooleanAttribute('set_active');
  }
  public set setActive(value: boolean | cdktf.IResolvable) {
    this._setActive = value;
  }
  public resetSetActive() {
    this._setActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get setActiveInput() {
    return this._setActive;
  }

  // theme_mode - computed: false, optional: true, required: false
  private _themeMode?: string; 
  public get themeMode() {
    return this.getStringAttribute('theme_mode');
  }
  public set themeMode(value: string) {
    this._themeMode = value;
  }
  public resetThemeMode() {
    this._themeMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get themeModeInput() {
    return this._themeMode;
  }

  // warn_color - computed: false, optional: false, required: true
  private _warnColor?: string; 
  public get warnColor() {
    return this.getStringAttribute('warn_color');
  }
  public set warnColor(value: string) {
    this._warnColor = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warnColorInput() {
    return this._warnColor;
  }

  // warn_color_dark - computed: false, optional: false, required: true
  private _warnColorDark?: string; 
  public get warnColorDark() {
    return this.getStringAttribute('warn_color_dark');
  }
  public set warnColorDark(value: string) {
    this._warnColorDark = value;
  }
  // Temporarily expose input value. Use with caution.
  public get warnColorDarkInput() {
    return this._warnColorDark;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      background_color: cdktf.stringToTerraform(this._backgroundColor),
      background_color_dark: cdktf.stringToTerraform(this._backgroundColorDark),
      disable_watermark: cdktf.booleanToTerraform(this._disableWatermark),
      font_color: cdktf.stringToTerraform(this._fontColor),
      font_color_dark: cdktf.stringToTerraform(this._fontColorDark),
      font_hash: cdktf.stringToTerraform(this._fontHash),
      font_path: cdktf.stringToTerraform(this._fontPath),
      hide_login_name_suffix: cdktf.booleanToTerraform(this._hideLoginNameSuffix),
      icon_dark_hash: cdktf.stringToTerraform(this._iconDarkHash),
      icon_dark_path: cdktf.stringToTerraform(this._iconDarkPath),
      icon_hash: cdktf.stringToTerraform(this._iconHash),
      icon_path: cdktf.stringToTerraform(this._iconPath),
      id: cdktf.stringToTerraform(this._id),
      logo_dark_hash: cdktf.stringToTerraform(this._logoDarkHash),
      logo_dark_path: cdktf.stringToTerraform(this._logoDarkPath),
      logo_hash: cdktf.stringToTerraform(this._logoHash),
      logo_path: cdktf.stringToTerraform(this._logoPath),
      org_id: cdktf.stringToTerraform(this._orgId),
      primary_color: cdktf.stringToTerraform(this._primaryColor),
      primary_color_dark: cdktf.stringToTerraform(this._primaryColorDark),
      set_active: cdktf.booleanToTerraform(this._setActive),
      theme_mode: cdktf.stringToTerraform(this._themeMode),
      warn_color: cdktf.stringToTerraform(this._warnColor),
      warn_color_dark: cdktf.stringToTerraform(this._warnColorDark),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      background_color: {
        value: cdktf.stringToHclTerraform(this._backgroundColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      background_color_dark: {
        value: cdktf.stringToHclTerraform(this._backgroundColorDark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_watermark: {
        value: cdktf.booleanToHclTerraform(this._disableWatermark),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      font_color: {
        value: cdktf.stringToHclTerraform(this._fontColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      font_color_dark: {
        value: cdktf.stringToHclTerraform(this._fontColorDark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      font_hash: {
        value: cdktf.stringToHclTerraform(this._fontHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      font_path: {
        value: cdktf.stringToHclTerraform(this._fontPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hide_login_name_suffix: {
        value: cdktf.booleanToHclTerraform(this._hideLoginNameSuffix),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      icon_dark_hash: {
        value: cdktf.stringToHclTerraform(this._iconDarkHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon_dark_path: {
        value: cdktf.stringToHclTerraform(this._iconDarkPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon_hash: {
        value: cdktf.stringToHclTerraform(this._iconHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      icon_path: {
        value: cdktf.stringToHclTerraform(this._iconPath),
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
      logo_dark_hash: {
        value: cdktf.stringToHclTerraform(this._logoDarkHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logo_dark_path: {
        value: cdktf.stringToHclTerraform(this._logoDarkPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logo_hash: {
        value: cdktf.stringToHclTerraform(this._logoHash),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      logo_path: {
        value: cdktf.stringToHclTerraform(this._logoPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      org_id: {
        value: cdktf.stringToHclTerraform(this._orgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_color: {
        value: cdktf.stringToHclTerraform(this._primaryColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      primary_color_dark: {
        value: cdktf.stringToHclTerraform(this._primaryColorDark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      set_active: {
        value: cdktf.booleanToHclTerraform(this._setActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      theme_mode: {
        value: cdktf.stringToHclTerraform(this._themeMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warn_color: {
        value: cdktf.stringToHclTerraform(this._warnColor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warn_color_dark: {
        value: cdktf.stringToHclTerraform(this._warnColorDark),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
