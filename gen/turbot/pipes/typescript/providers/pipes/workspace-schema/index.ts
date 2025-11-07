// https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_schema
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceSchemaConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_schema#aggregator_handle WorkspaceSchema#aggregator_handle}
  */
  readonly aggregatorHandle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_schema#connection_folder_id WorkspaceSchema#connection_folder_id}
  */
  readonly connectionFolderId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_schema#connection_handle WorkspaceSchema#connection_handle}
  */
  readonly connectionHandle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_schema#created_by WorkspaceSchema#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_schema#id WorkspaceSchema#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_schema#organization WorkspaceSchema#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_schema#updated_by WorkspaceSchema#updated_by}
  */
  readonly updatedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_schema#workspace WorkspaceSchema#workspace}
  */
  readonly workspace: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_schema pipes_workspace_schema}
*/
export class WorkspaceSchema extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pipes_workspace_schema";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspaceSchema resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceSchema to import
  * @param importFromId The id of the existing WorkspaceSchema that should be imported. Refer to the {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_schema#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceSchema to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pipes_workspace_schema", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_schema pipes_workspace_schema} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceSchemaConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceSchemaConfig) {
    super(scope, id, {
      terraformResourceType: 'pipes_workspace_schema',
      terraformGeneratorMetadata: {
        providerName: 'pipes',
        providerVersion: '0.17.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._aggregatorHandle = config.aggregatorHandle;
    this._connectionFolderId = config.connectionFolderId;
    this._connectionHandle = config.connectionHandle;
    this._createdBy = config.createdBy;
    this._id = config.id;
    this._organization = config.organization;
    this._updatedBy = config.updatedBy;
    this._workspace = config.workspace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aggregator_handle - computed: false, optional: true, required: false
  private _aggregatorHandle?: string; 
  public get aggregatorHandle() {
    return this.getStringAttribute('aggregator_handle');
  }
  public set aggregatorHandle(value: string) {
    this._aggregatorHandle = value;
  }
  public resetAggregatorHandle() {
    this._aggregatorHandle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aggregatorHandleInput() {
    return this._aggregatorHandle;
  }

  // aggregator_id - computed: true, optional: false, required: false
  public get aggregatorId() {
    return this.getStringAttribute('aggregator_id');
  }

  // connection_folder_id - computed: false, optional: true, required: false
  private _connectionFolderId?: string; 
  public get connectionFolderId() {
    return this.getStringAttribute('connection_folder_id');
  }
  public set connectionFolderId(value: string) {
    this._connectionFolderId = value;
  }
  public resetConnectionFolderId() {
    this._connectionFolderId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionFolderIdInput() {
    return this._connectionFolderId;
  }

  // connection_handle - computed: false, optional: true, required: false
  private _connectionHandle?: string; 
  public get connectionHandle() {
    return this.getStringAttribute('connection_handle');
  }
  public set connectionHandle(value: string) {
    this._connectionHandle = value;
  }
  public resetConnectionHandle() {
    this._connectionHandle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionHandleInput() {
    return this._connectionHandle;
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
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

  // identity_id - computed: true, optional: false, required: false
  public get identityId() {
    return this.getStringAttribute('identity_id');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // organization - computed: true, optional: true, required: false
  private _organization?: string; 
  public get organization() {
    return this.getStringAttribute('organization');
  }
  public set organization(value: string) {
    this._organization = value;
  }
  public resetOrganization() {
    this._organization = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationInput() {
    return this._organization;
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // updated_by - computed: true, optional: true, required: false
  private _updatedBy?: string; 
  public get updatedBy() {
    return this.getStringAttribute('updated_by');
  }
  public set updatedBy(value: string) {
    this._updatedBy = value;
  }
  public resetUpdatedBy() {
    this._updatedBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedByInput() {
    return this._updatedBy;
  }

  // version_id - computed: true, optional: false, required: false
  public get versionId() {
    return this.getNumberAttribute('version_id');
  }

  // workspace - computed: false, optional: false, required: true
  private _workspace?: string; 
  public get workspace() {
    return this.getStringAttribute('workspace');
  }
  public set workspace(value: string) {
    this._workspace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceInput() {
    return this._workspace;
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // workspace_schema_id - computed: true, optional: false, required: false
  public get workspaceSchemaId() {
    return this.getStringAttribute('workspace_schema_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aggregator_handle: cdktf.stringToTerraform(this._aggregatorHandle),
      connection_folder_id: cdktf.stringToTerraform(this._connectionFolderId),
      connection_handle: cdktf.stringToTerraform(this._connectionHandle),
      created_by: cdktf.stringToTerraform(this._createdBy),
      id: cdktf.stringToTerraform(this._id),
      organization: cdktf.stringToTerraform(this._organization),
      updated_by: cdktf.stringToTerraform(this._updatedBy),
      workspace: cdktf.stringToTerraform(this._workspace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aggregator_handle: {
        value: cdktf.stringToHclTerraform(this._aggregatorHandle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_folder_id: {
        value: cdktf.stringToHclTerraform(this._connectionFolderId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      connection_handle: {
        value: cdktf.stringToHclTerraform(this._connectionHandle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
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
      organization: {
        value: cdktf.stringToHclTerraform(this._organization),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated_by: {
        value: cdktf.stringToHclTerraform(this._updatedBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      workspace: {
        value: cdktf.stringToHclTerraform(this._workspace),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
