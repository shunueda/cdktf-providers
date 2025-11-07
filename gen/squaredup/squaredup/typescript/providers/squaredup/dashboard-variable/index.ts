// https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard_variable
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DashboardVariableConfig extends cdktf.TerraformMetaArguments {
  /**
  * Whether to allow users to select multiple objects for the dashboard variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard_variable#allow_multiple_object_selection DashboardVariable#allow_multiple_object_selection}
  */
  readonly allowMultipleObjectSelection?: boolean | cdktf.IResolvable;
  /**
  * The id of the collection (scope) for the dashboard variable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard_variable#collection_id DashboardVariable#collection_id}
  */
  readonly collectionId: string;
  /**
  * The default object selection for the dashboard variable. Allowed values: `none`, `all`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard_variable#default_object_selection DashboardVariable#default_object_selection}
  */
  readonly defaultObjectSelection: string;
  /**
  * The id of the workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard_variable#workspace_id DashboardVariable#workspace_id}
  */
  readonly workspaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard_variable squaredup_dashboard_variable}
*/
export class DashboardVariable extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "squaredup_dashboard_variable";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DashboardVariable resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DashboardVariable to import
  * @param importFromId The id of the existing DashboardVariable that should be imported. Refer to the {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard_variable#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DashboardVariable to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "squaredup_dashboard_variable", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/squaredup/squaredup/1.5.0/docs/resources/dashboard_variable squaredup_dashboard_variable} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DashboardVariableConfig
  */
  public constructor(scope: Construct, id: string, config: DashboardVariableConfig) {
    super(scope, id, {
      terraformResourceType: 'squaredup_dashboard_variable',
      terraformGeneratorMetadata: {
        providerName: 'squaredup',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._allowMultipleObjectSelection = config.allowMultipleObjectSelection;
    this._collectionId = config.collectionId;
    this._defaultObjectSelection = config.defaultObjectSelection;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // allow_multiple_object_selection - computed: true, optional: true, required: false
  private _allowMultipleObjectSelection?: boolean | cdktf.IResolvable; 
  public get allowMultipleObjectSelection() {
    return this.getBooleanAttribute('allow_multiple_object_selection');
  }
  public set allowMultipleObjectSelection(value: boolean | cdktf.IResolvable) {
    this._allowMultipleObjectSelection = value;
  }
  public resetAllowMultipleObjectSelection() {
    this._allowMultipleObjectSelection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowMultipleObjectSelectionInput() {
    return this._allowMultipleObjectSelection;
  }

  // collection_id - computed: false, optional: false, required: true
  private _collectionId?: string; 
  public get collectionId() {
    return this.getStringAttribute('collection_id');
  }
  public set collectionId(value: string) {
    this._collectionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get collectionIdInput() {
    return this._collectionId;
  }

  // default_object_selection - computed: false, optional: false, required: true
  private _defaultObjectSelection?: string; 
  public get defaultObjectSelection() {
    return this.getStringAttribute('default_object_selection');
  }
  public set defaultObjectSelection(value: string) {
    this._defaultObjectSelection = value;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultObjectSelectionInput() {
    return this._defaultObjectSelection;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // last_updated - computed: true, optional: false, required: false
  public get lastUpdated() {
    return this.getStringAttribute('last_updated');
  }

  // workspace_id - computed: false, optional: false, required: true
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceIdInput() {
    return this._workspaceId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      allow_multiple_object_selection: cdktf.booleanToTerraform(this._allowMultipleObjectSelection),
      collection_id: cdktf.stringToTerraform(this._collectionId),
      default_object_selection: cdktf.stringToTerraform(this._defaultObjectSelection),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      allow_multiple_object_selection: {
        value: cdktf.booleanToHclTerraform(this._allowMultipleObjectSelection),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      collection_id: {
        value: cdktf.stringToHclTerraform(this._collectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_object_selection: {
        value: cdktf.stringToHclTerraform(this._defaultObjectSelection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace_id: {
        value: cdktf.stringToHclTerraform(this._workspaceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
