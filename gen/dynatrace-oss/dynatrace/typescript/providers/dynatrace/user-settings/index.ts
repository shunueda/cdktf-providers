// https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Language - use browser default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_settings#auto_language UserSettings#auto_language}
  */
  readonly autoLanguage: boolean | cdktf.IResolvable;
  /**
  * Region - use browser default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_settings#auto_region UserSettings#auto_region}
  */
  readonly autoRegion: boolean | cdktf.IResolvable;
  /**
  * Theme - use browser default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_settings#auto_theme UserSettings#auto_theme}
  */
  readonly autoTheme: boolean | cdktf.IResolvable;
  /**
  * Timezone - use browser default
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_settings#auto_timezone UserSettings#auto_timezone}
  */
  readonly autoTimezone: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_settings#id UserSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Possible Values: `En`, `Ja`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_settings#language UserSettings#language}
  */
  readonly language?: string;
  /**
  * Region
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_settings#region UserSettings#region}
  */
  readonly region?: string;
  /**
  * The scope of this setting (user, userdefaults)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_settings#scope UserSettings#scope}
  */
  readonly scope: string;
  /**
  * Possible Values: `Dark`, `Light`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_settings#theme UserSettings#theme}
  */
  readonly theme?: string;
  /**
  * Timezone
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_settings#timezone UserSettings#timezone}
  */
  readonly timezone?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_settings dynatrace_user_settings}
*/
export class UserSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dynatrace_user_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserSettings to import
  * @param importFromId The id of the existing UserSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dynatrace_user_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dynatrace-oss/dynatrace/1.87.1/docs/resources/user_settings dynatrace_user_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: UserSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'dynatrace_user_settings',
      terraformGeneratorMetadata: {
        providerName: 'dynatrace',
        providerVersion: '1.87.1',
        providerVersionConstraint: '1.87.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._autoLanguage = config.autoLanguage;
    this._autoRegion = config.autoRegion;
    this._autoTheme = config.autoTheme;
    this._autoTimezone = config.autoTimezone;
    this._id = config.id;
    this._language = config.language;
    this._region = config.region;
    this._scope = config.scope;
    this._theme = config.theme;
    this._timezone = config.timezone;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auto_language - computed: false, optional: false, required: true
  private _autoLanguage?: boolean | cdktf.IResolvable; 
  public get autoLanguage() {
    return this.getBooleanAttribute('auto_language');
  }
  public set autoLanguage(value: boolean | cdktf.IResolvable) {
    this._autoLanguage = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoLanguageInput() {
    return this._autoLanguage;
  }

  // auto_region - computed: false, optional: false, required: true
  private _autoRegion?: boolean | cdktf.IResolvable; 
  public get autoRegion() {
    return this.getBooleanAttribute('auto_region');
  }
  public set autoRegion(value: boolean | cdktf.IResolvable) {
    this._autoRegion = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoRegionInput() {
    return this._autoRegion;
  }

  // auto_theme - computed: false, optional: false, required: true
  private _autoTheme?: boolean | cdktf.IResolvable; 
  public get autoTheme() {
    return this.getBooleanAttribute('auto_theme');
  }
  public set autoTheme(value: boolean | cdktf.IResolvable) {
    this._autoTheme = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoThemeInput() {
    return this._autoTheme;
  }

  // auto_timezone - computed: false, optional: false, required: true
  private _autoTimezone?: boolean | cdktf.IResolvable; 
  public get autoTimezone() {
    return this.getBooleanAttribute('auto_timezone');
  }
  public set autoTimezone(value: boolean | cdktf.IResolvable) {
    this._autoTimezone = value;
  }
  // Temporarily expose input value. Use with caution.
  public get autoTimezoneInput() {
    return this._autoTimezone;
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

  // language - computed: false, optional: true, required: false
  private _language?: string; 
  public get language() {
    return this.getStringAttribute('language');
  }
  public set language(value: string) {
    this._language = value;
  }
  public resetLanguage() {
    this._language = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get languageInput() {
    return this._language;
  }

  // region - computed: false, optional: true, required: false
  private _region?: string; 
  public get region() {
    return this.getStringAttribute('region');
  }
  public set region(value: string) {
    this._region = value;
  }
  public resetRegion() {
    this._region = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionInput() {
    return this._region;
  }

  // scope - computed: false, optional: false, required: true
  private _scope?: string; 
  public get scope() {
    return this.getStringAttribute('scope');
  }
  public set scope(value: string) {
    this._scope = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scopeInput() {
    return this._scope;
  }

  // theme - computed: false, optional: true, required: false
  private _theme?: string; 
  public get theme() {
    return this.getStringAttribute('theme');
  }
  public set theme(value: string) {
    this._theme = value;
  }
  public resetTheme() {
    this._theme = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get themeInput() {
    return this._theme;
  }

  // timezone - computed: false, optional: true, required: false
  private _timezone?: string; 
  public get timezone() {
    return this.getStringAttribute('timezone');
  }
  public set timezone(value: string) {
    this._timezone = value;
  }
  public resetTimezone() {
    this._timezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timezoneInput() {
    return this._timezone;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auto_language: cdktf.booleanToTerraform(this._autoLanguage),
      auto_region: cdktf.booleanToTerraform(this._autoRegion),
      auto_theme: cdktf.booleanToTerraform(this._autoTheme),
      auto_timezone: cdktf.booleanToTerraform(this._autoTimezone),
      id: cdktf.stringToTerraform(this._id),
      language: cdktf.stringToTerraform(this._language),
      region: cdktf.stringToTerraform(this._region),
      scope: cdktf.stringToTerraform(this._scope),
      theme: cdktf.stringToTerraform(this._theme),
      timezone: cdktf.stringToTerraform(this._timezone),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auto_language: {
        value: cdktf.booleanToHclTerraform(this._autoLanguage),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_region: {
        value: cdktf.booleanToHclTerraform(this._autoRegion),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_theme: {
        value: cdktf.booleanToHclTerraform(this._autoTheme),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      auto_timezone: {
        value: cdktf.booleanToHclTerraform(this._autoTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      language: {
        value: cdktf.stringToHclTerraform(this._language),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      region: {
        value: cdktf.stringToHclTerraform(this._region),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scope: {
        value: cdktf.stringToHclTerraform(this._scope),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      theme: {
        value: cdktf.stringToHclTerraform(this._theme),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timezone: {
        value: cdktf.stringToHclTerraform(this._timezone),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
