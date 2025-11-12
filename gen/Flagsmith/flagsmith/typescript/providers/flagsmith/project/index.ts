// https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/project
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable this to trigger a realtime(sse) event whenever the value of a flag changes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/project#enable_realtime_updates Project#enable_realtime_updates}
  */
  readonly enableRealtimeUpdates?: boolean | cdktf.IResolvable;
  /**
  * Used for validating feature names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/project#feature_name_regex Project#feature_name_regex}
  */
  readonly featureNameRegex?: string;
  /**
  * If true will exclude flags from SDK which are disabled
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/project#hide_disabled_flags Project#hide_disabled_flags}
  */
  readonly hideDisabledFlags?: boolean | cdktf.IResolvable;
  /**
  * Name of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/project#name Project#name}
  */
  readonly name: string;
  /**
  * Used by UI to validate feature names
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/project#only_allow_lower_case_feature_names Project#only_allow_lower_case_feature_names}
  */
  readonly onlyAllowLowerCaseFeatureNames?: boolean | cdktf.IResolvable;
  /**
  * ID of the organisation project belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/project#organisation_id Project#organisation_id}
  */
  readonly organisationId: number;
  /**
  * Prevent defaults from being set in all environments when creating a feature.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/project#prevent_flag_defaults Project#prevent_flag_defaults}
  */
  readonly preventFlagDefaults?: boolean | cdktf.IResolvable;
  /**
  * Number of days without modification in any environment before a flag is considered stale.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/project#stale_flags_limit_days Project#stale_flags_limit_days}
  */
  readonly staleFlagsLimitDays?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/project flagsmith_project}
*/
export class Project extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "flagsmith_project";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Project resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Project to import
  * @param importFromId The id of the existing Project that should be imported. Refer to the {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/project#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Project to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "flagsmith_project", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/flagsmith/flagsmith/0.9.1/docs/resources/project flagsmith_project} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectConfig) {
    super(scope, id, {
      terraformResourceType: 'flagsmith_project',
      terraformGeneratorMetadata: {
        providerName: 'flagsmith',
        providerVersion: '0.9.1',
        providerVersionConstraint: '0.9.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enableRealtimeUpdates = config.enableRealtimeUpdates;
    this._featureNameRegex = config.featureNameRegex;
    this._hideDisabledFlags = config.hideDisabledFlags;
    this._name = config.name;
    this._onlyAllowLowerCaseFeatureNames = config.onlyAllowLowerCaseFeatureNames;
    this._organisationId = config.organisationId;
    this._preventFlagDefaults = config.preventFlagDefaults;
    this._staleFlagsLimitDays = config.staleFlagsLimitDays;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable_realtime_updates - computed: true, optional: true, required: false
  private _enableRealtimeUpdates?: boolean | cdktf.IResolvable; 
  public get enableRealtimeUpdates() {
    return this.getBooleanAttribute('enable_realtime_updates');
  }
  public set enableRealtimeUpdates(value: boolean | cdktf.IResolvable) {
    this._enableRealtimeUpdates = value;
  }
  public resetEnableRealtimeUpdates() {
    this._enableRealtimeUpdates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableRealtimeUpdatesInput() {
    return this._enableRealtimeUpdates;
  }

  // feature_name_regex - computed: true, optional: true, required: false
  private _featureNameRegex?: string; 
  public get featureNameRegex() {
    return this.getStringAttribute('feature_name_regex');
  }
  public set featureNameRegex(value: string) {
    this._featureNameRegex = value;
  }
  public resetFeatureNameRegex() {
    this._featureNameRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get featureNameRegexInput() {
    return this._featureNameRegex;
  }

  // hide_disabled_flags - computed: true, optional: true, required: false
  private _hideDisabledFlags?: boolean | cdktf.IResolvable; 
  public get hideDisabledFlags() {
    return this.getBooleanAttribute('hide_disabled_flags');
  }
  public set hideDisabledFlags(value: boolean | cdktf.IResolvable) {
    this._hideDisabledFlags = value;
  }
  public resetHideDisabledFlags() {
    this._hideDisabledFlags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hideDisabledFlagsInput() {
    return this._hideDisabledFlags;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getNumberAttribute('id');
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

  // only_allow_lower_case_feature_names - computed: true, optional: true, required: false
  private _onlyAllowLowerCaseFeatureNames?: boolean | cdktf.IResolvable; 
  public get onlyAllowLowerCaseFeatureNames() {
    return this.getBooleanAttribute('only_allow_lower_case_feature_names');
  }
  public set onlyAllowLowerCaseFeatureNames(value: boolean | cdktf.IResolvable) {
    this._onlyAllowLowerCaseFeatureNames = value;
  }
  public resetOnlyAllowLowerCaseFeatureNames() {
    this._onlyAllowLowerCaseFeatureNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onlyAllowLowerCaseFeatureNamesInput() {
    return this._onlyAllowLowerCaseFeatureNames;
  }

  // organisation_id - computed: false, optional: false, required: true
  private _organisationId?: number; 
  public get organisationId() {
    return this.getNumberAttribute('organisation_id');
  }
  public set organisationId(value: number) {
    this._organisationId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get organisationIdInput() {
    return this._organisationId;
  }

  // prevent_flag_defaults - computed: true, optional: true, required: false
  private _preventFlagDefaults?: boolean | cdktf.IResolvable; 
  public get preventFlagDefaults() {
    return this.getBooleanAttribute('prevent_flag_defaults');
  }
  public set preventFlagDefaults(value: boolean | cdktf.IResolvable) {
    this._preventFlagDefaults = value;
  }
  public resetPreventFlagDefaults() {
    this._preventFlagDefaults = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preventFlagDefaultsInput() {
    return this._preventFlagDefaults;
  }

  // stale_flags_limit_days - computed: true, optional: true, required: false
  private _staleFlagsLimitDays?: number; 
  public get staleFlagsLimitDays() {
    return this.getNumberAttribute('stale_flags_limit_days');
  }
  public set staleFlagsLimitDays(value: number) {
    this._staleFlagsLimitDays = value;
  }
  public resetStaleFlagsLimitDays() {
    this._staleFlagsLimitDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get staleFlagsLimitDaysInput() {
    return this._staleFlagsLimitDays;
  }

  // uuid - computed: true, optional: false, required: false
  public get uuid() {
    return this.getStringAttribute('uuid');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable_realtime_updates: cdktf.booleanToTerraform(this._enableRealtimeUpdates),
      feature_name_regex: cdktf.stringToTerraform(this._featureNameRegex),
      hide_disabled_flags: cdktf.booleanToTerraform(this._hideDisabledFlags),
      name: cdktf.stringToTerraform(this._name),
      only_allow_lower_case_feature_names: cdktf.booleanToTerraform(this._onlyAllowLowerCaseFeatureNames),
      organisation_id: cdktf.numberToTerraform(this._organisationId),
      prevent_flag_defaults: cdktf.booleanToTerraform(this._preventFlagDefaults),
      stale_flags_limit_days: cdktf.numberToTerraform(this._staleFlagsLimitDays),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable_realtime_updates: {
        value: cdktf.booleanToHclTerraform(this._enableRealtimeUpdates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      feature_name_regex: {
        value: cdktf.stringToHclTerraform(this._featureNameRegex),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hide_disabled_flags: {
        value: cdktf.booleanToHclTerraform(this._hideDisabledFlags),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      only_allow_lower_case_feature_names: {
        value: cdktf.booleanToHclTerraform(this._onlyAllowLowerCaseFeatureNames),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      organisation_id: {
        value: cdktf.numberToHclTerraform(this._organisationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      prevent_flag_defaults: {
        value: cdktf.booleanToHclTerraform(this._preventFlagDefaults),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stale_flags_limit_days: {
        value: cdktf.numberToHclTerraform(this._staleFlagsLimitDays),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
