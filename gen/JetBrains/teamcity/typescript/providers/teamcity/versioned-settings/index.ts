// https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/versioned_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface VersionedSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/versioned_settings#allow_ui_editing VersionedSettings#allow_ui_editing}
  */
  readonly allowUiEditing: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/versioned_settings#project_id VersionedSettings#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/versioned_settings#settings VersionedSettings#settings}
  */
  readonly settings: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/versioned_settings#show_changes VersionedSettings#show_changes}
  */
  readonly showChanges: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/versioned_settings#vcsroot_id VersionedSettings#vcsroot_id}
  */
  readonly vcsrootId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/versioned_settings teamcity_versioned_settings}
*/
export class VersionedSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "teamcity_versioned_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a VersionedSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the VersionedSettings to import
  * @param importFromId The id of the existing VersionedSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/versioned_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the VersionedSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "teamcity_versioned_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/jetbrains/teamcity/0.0.87/docs/resources/versioned_settings teamcity_versioned_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options VersionedSettingsConfig
  */
  public constructor(scope: Construct, id: string, config: VersionedSettingsConfig) {
    super(scope, id, {
      terraformResourceType: 'teamcity_versioned_settings',
      terraformGeneratorMetadata: {
        providerName: 'teamcity',
        providerVersion: '0.0.87',
        providerVersionConstraint: '0.0.87'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowUiEditing = config.allowUiEditing;
    this._projectId = config.projectId;
    this._settings = config.settings;
    this._showChanges = config.showChanges;
    this._vcsrootId = config.vcsrootId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_ui_editing - computed: false, optional: false, required: true
  private _allowUiEditing?: boolean | cdktf.IResolvable; 
  public get allowUiEditing() {
    return this.getBooleanAttribute('allow_ui_editing');
  }
  public set allowUiEditing(value: boolean | cdktf.IResolvable) {
    this._allowUiEditing = value;
  }
  // Temporarily expose input value. Use with caution.
  public get allowUiEditingInput() {
    return this._allowUiEditing;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // settings - computed: false, optional: false, required: true
  private _settings?: string; 
  public get settings() {
    return this.getStringAttribute('settings');
  }
  public set settings(value: string) {
    this._settings = value;
  }
  // Temporarily expose input value. Use with caution.
  public get settingsInput() {
    return this._settings;
  }

  // show_changes - computed: false, optional: false, required: true
  private _showChanges?: boolean | cdktf.IResolvable; 
  public get showChanges() {
    return this.getBooleanAttribute('show_changes');
  }
  public set showChanges(value: boolean | cdktf.IResolvable) {
    this._showChanges = value;
  }
  // Temporarily expose input value. Use with caution.
  public get showChangesInput() {
    return this._showChanges;
  }

  // vcsroot_id - computed: false, optional: false, required: true
  private _vcsrootId?: string; 
  public get vcsrootId() {
    return this.getStringAttribute('vcsroot_id');
  }
  public set vcsrootId(value: string) {
    this._vcsrootId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get vcsrootIdInput() {
    return this._vcsrootId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_ui_editing: cdktf.booleanToTerraform(this._allowUiEditing),
      project_id: cdktf.stringToTerraform(this._projectId),
      settings: cdktf.stringToTerraform(this._settings),
      show_changes: cdktf.booleanToTerraform(this._showChanges),
      vcsroot_id: cdktf.stringToTerraform(this._vcsrootId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_ui_editing: {
        value: cdktf.booleanToHclTerraform(this._allowUiEditing),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      settings: {
        value: cdktf.stringToHclTerraform(this._settings),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      show_changes: {
        value: cdktf.booleanToHclTerraform(this._showChanges),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      vcsroot_id: {
        value: cdktf.stringToHclTerraform(this._vcsrootId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
