// https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/project_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataOktapamProjectGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * If `true`, results only include Project Groups that have set the 'create_server_group' option to `true`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/project_groups#create_server_group DataOktapamProjectGroups#create_server_group}
  */
  readonly createServerGroup?: boolean | cdktf.IResolvable;
  /**
  * If `true`, results only include resources that have enabled Disconnected Mode. NOTE: This is only available if the ASA Team has the Disconnected Mode Beta feature enabled; contact support@okta.com if you wish to participate in the Beta.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/project_groups#disconnected_mode_on_only DataOktapamProjectGroups#disconnected_mode_on_only}
  */
  readonly disconnectedModeOnOnly?: boolean | cdktf.IResolvable;
  /**
  * If `true`, results only include resources haven't defined any label selectors.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/project_groups#has_no_selectors DataOktapamProjectGroups#has_no_selectors}
  */
  readonly hasNoSelectors?: boolean | cdktf.IResolvable;
  /**
  * If `true`, results only include resources have defined a label selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/project_groups#has_selectors DataOktapamProjectGroups#has_selectors}
  */
  readonly hasSelectors?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/project_groups#id DataOktapamProjectGroups#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * If `true`, results also include resources that were previously removed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/project_groups#include_removed DataOktapamProjectGroups#include_removed}
  */
  readonly includeRemoved?: boolean | cdktf.IResolvable;
  /**
  * If defined, results are only returned for the specified Project. Values are case-sensitive.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/project_groups#project_name DataOktapamProjectGroups#project_name}
  */
  readonly projectName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/project_groups oktapam_project_groups}
*/
export class DataOktapamProjectGroups extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oktapam_project_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataOktapamProjectGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataOktapamProjectGroups to import
  * @param importFromId The id of the existing DataOktapamProjectGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/project_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataOktapamProjectGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oktapam_project_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/okta/oktapam/0.6.2/docs/data-sources/project_groups oktapam_project_groups} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataOktapamProjectGroupsConfig
  */
  public constructor(scope: Construct, id: string, config: DataOktapamProjectGroupsConfig) {
    super(scope, id, {
      terraformResourceType: 'oktapam_project_groups',
      terraformGeneratorMetadata: {
        providerName: 'oktapam',
        providerVersion: '0.6.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._createServerGroup = config.createServerGroup;
    this._disconnectedModeOnOnly = config.disconnectedModeOnOnly;
    this._hasNoSelectors = config.hasNoSelectors;
    this._hasSelectors = config.hasSelectors;
    this._id = config.id;
    this._includeRemoved = config.includeRemoved;
    this._projectName = config.projectName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // create_server_group - computed: false, optional: true, required: false
  private _createServerGroup?: boolean | cdktf.IResolvable; 
  public get createServerGroup() {
    return this.getBooleanAttribute('create_server_group');
  }
  public set createServerGroup(value: boolean | cdktf.IResolvable) {
    this._createServerGroup = value;
  }
  public resetCreateServerGroup() {
    this._createServerGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createServerGroupInput() {
    return this._createServerGroup;
  }

  // disconnected_mode_on_only - computed: false, optional: true, required: false
  private _disconnectedModeOnOnly?: boolean | cdktf.IResolvable; 
  public get disconnectedModeOnOnly() {
    return this.getBooleanAttribute('disconnected_mode_on_only');
  }
  public set disconnectedModeOnOnly(value: boolean | cdktf.IResolvable) {
    this._disconnectedModeOnOnly = value;
  }
  public resetDisconnectedModeOnOnly() {
    this._disconnectedModeOnOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disconnectedModeOnOnlyInput() {
    return this._disconnectedModeOnOnly;
  }

  // group_names - computed: true, optional: false, required: false
  public get groupNames() {
    return this.getListAttribute('group_names');
  }

  // has_no_selectors - computed: false, optional: true, required: false
  private _hasNoSelectors?: boolean | cdktf.IResolvable; 
  public get hasNoSelectors() {
    return this.getBooleanAttribute('has_no_selectors');
  }
  public set hasNoSelectors(value: boolean | cdktf.IResolvable) {
    this._hasNoSelectors = value;
  }
  public resetHasNoSelectors() {
    this._hasNoSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasNoSelectorsInput() {
    return this._hasNoSelectors;
  }

  // has_selectors - computed: false, optional: true, required: false
  private _hasSelectors?: boolean | cdktf.IResolvable; 
  public get hasSelectors() {
    return this.getBooleanAttribute('has_selectors');
  }
  public set hasSelectors(value: boolean | cdktf.IResolvable) {
    this._hasSelectors = value;
  }
  public resetHasSelectors() {
    this._hasSelectors = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasSelectorsInput() {
    return this._hasSelectors;
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

  // include_removed - computed: false, optional: true, required: false
  private _includeRemoved?: boolean | cdktf.IResolvable; 
  public get includeRemoved() {
    return this.getBooleanAttribute('include_removed');
  }
  public set includeRemoved(value: boolean | cdktf.IResolvable) {
    this._includeRemoved = value;
  }
  public resetIncludeRemoved() {
    this._includeRemoved = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeRemovedInput() {
    return this._includeRemoved;
  }

  // project_name - computed: false, optional: false, required: true
  private _projectName?: string; 
  public get projectName() {
    return this.getStringAttribute('project_name');
  }
  public set projectName(value: string) {
    this._projectName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectNameInput() {
    return this._projectName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      create_server_group: cdktf.booleanToTerraform(this._createServerGroup),
      disconnected_mode_on_only: cdktf.booleanToTerraform(this._disconnectedModeOnOnly),
      has_no_selectors: cdktf.booleanToTerraform(this._hasNoSelectors),
      has_selectors: cdktf.booleanToTerraform(this._hasSelectors),
      id: cdktf.stringToTerraform(this._id),
      include_removed: cdktf.booleanToTerraform(this._includeRemoved),
      project_name: cdktf.stringToTerraform(this._projectName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      create_server_group: {
        value: cdktf.booleanToHclTerraform(this._createServerGroup),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      disconnected_mode_on_only: {
        value: cdktf.booleanToHclTerraform(this._disconnectedModeOnOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      has_no_selectors: {
        value: cdktf.booleanToHclTerraform(this._hasNoSelectors),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      has_selectors: {
        value: cdktf.booleanToHclTerraform(this._hasSelectors),
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
      include_removed: {
        value: cdktf.booleanToHclTerraform(this._includeRemoved),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_name: {
        value: cdktf.stringToHclTerraform(this._projectName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
