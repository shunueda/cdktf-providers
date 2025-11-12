// https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_connection
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceConnectionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_connection#connection_handle WorkspaceConnection#connection_handle}
  */
  readonly connectionHandle: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_connection#created_by WorkspaceConnection#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_connection#id WorkspaceConnection#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_connection#organization WorkspaceConnection#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_connection#updated_by WorkspaceConnection#updated_by}
  */
  readonly updatedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_connection#workspace_handle WorkspaceConnection#workspace_handle}
  */
  readonly workspaceHandle: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_connection steampipecloud_workspace_connection}
*/
export class WorkspaceConnection extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "steampipecloud_workspace_connection";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspaceConnection resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceConnection to import
  * @param importFromId The id of the existing WorkspaceConnection that should be imported. Refer to the {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_connection#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceConnection to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "steampipecloud_workspace_connection", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/turbot/steampipecloud/0.11.0/docs/resources/workspace_connection steampipecloud_workspace_connection} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceConnectionConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceConnectionConfig) {
    super(scope, id, {
      terraformResourceType: 'steampipecloud_workspace_connection',
      terraformGeneratorMetadata: {
        providerName: 'steampipecloud',
        providerVersion: '0.11.0',
        providerVersionConstraint: '0.11.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionHandle = config.connectionHandle;
    this._createdBy = config.createdBy;
    this._id = config.id;
    this._organization = config.organization;
    this._updatedBy = config.updatedBy;
    this._workspaceHandle = config.workspaceHandle;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // association_id - computed: true, optional: false, required: false
  public get associationId() {
    return this.getStringAttribute('association_id');
  }

  // connection_created_at - computed: true, optional: false, required: false
  public get connectionCreatedAt() {
    return this.getStringAttribute('connection_created_at');
  }

  // connection_handle - computed: false, optional: false, required: true
  private _connectionHandle?: string; 
  public get connectionHandle() {
    return this.getStringAttribute('connection_handle');
  }
  public set connectionHandle(value: string) {
    this._connectionHandle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionHandleInput() {
    return this._connectionHandle;
  }

  // connection_id - computed: true, optional: false, required: false
  public get connectionId() {
    return this.getStringAttribute('connection_id');
  }

  // connection_identity_id - computed: true, optional: false, required: false
  public get connectionIdentityId() {
    return this.getStringAttribute('connection_identity_id');
  }

  // connection_plugin - computed: true, optional: false, required: false
  public get connectionPlugin() {
    return this.getStringAttribute('connection_plugin');
  }

  // connection_type - computed: true, optional: false, required: false
  public get connectionType() {
    return this.getStringAttribute('connection_type');
  }

  // connection_updated_at - computed: true, optional: false, required: false
  public get connectionUpdatedAt() {
    return this.getStringAttribute('connection_updated_at');
  }

  // connection_version_id - computed: true, optional: false, required: false
  public get connectionVersionId() {
    return this.getNumberAttribute('connection_version_id');
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

  // workspace_created_at - computed: true, optional: false, required: false
  public get workspaceCreatedAt() {
    return this.getStringAttribute('workspace_created_at');
  }

  // workspace_database_name - computed: true, optional: false, required: false
  public get workspaceDatabaseName() {
    return this.getStringAttribute('workspace_database_name');
  }

  // workspace_handle - computed: false, optional: false, required: true
  private _workspaceHandle?: string; 
  public get workspaceHandle() {
    return this.getStringAttribute('workspace_handle');
  }
  public set workspaceHandle(value: string) {
    this._workspaceHandle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceHandleInput() {
    return this._workspaceHandle;
  }

  // workspace_hive - computed: true, optional: false, required: false
  public get workspaceHive() {
    return this.getStringAttribute('workspace_hive');
  }

  // workspace_host - computed: true, optional: false, required: false
  public get workspaceHost() {
    return this.getStringAttribute('workspace_host');
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // workspace_identity_id - computed: true, optional: false, required: false
  public get workspaceIdentityId() {
    return this.getStringAttribute('workspace_identity_id');
  }

  // workspace_public_key - computed: true, optional: false, required: false
  public get workspacePublicKey() {
    return this.getStringAttribute('workspace_public_key');
  }

  // workspace_state - computed: true, optional: false, required: false
  public get workspaceState() {
    return this.getStringAttribute('workspace_state');
  }

  // workspace_updated_at - computed: true, optional: false, required: false
  public get workspaceUpdatedAt() {
    return this.getStringAttribute('workspace_updated_at');
  }

  // workspace_version_id - computed: true, optional: false, required: false
  public get workspaceVersionId() {
    return this.getNumberAttribute('workspace_version_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_handle: cdktf.stringToTerraform(this._connectionHandle),
      created_by: cdktf.stringToTerraform(this._createdBy),
      id: cdktf.stringToTerraform(this._id),
      organization: cdktf.stringToTerraform(this._organization),
      updated_by: cdktf.stringToTerraform(this._updatedBy),
      workspace_handle: cdktf.stringToTerraform(this._workspaceHandle),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      workspace_handle: {
        value: cdktf.stringToHclTerraform(this._workspaceHandle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
