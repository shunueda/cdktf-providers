// https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_connection_permission
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TenantConnectionPermissionConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_connection_permission#connection_handle TenantConnectionPermission#connection_handle}
  */
  readonly connectionHandle: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_connection_permission#created_by TenantConnectionPermission#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_connection_permission#id TenantConnectionPermission#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_connection_permission#identity_handle TenantConnectionPermission#identity_handle}
  */
  readonly identityHandle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_connection_permission#tenant_handle TenantConnectionPermission#tenant_handle}
  */
  readonly tenantHandle?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_connection_permission#updated_by TenantConnectionPermission#updated_by}
  */
  readonly updatedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_connection_permission#workspace_handle TenantConnectionPermission#workspace_handle}
  */
  readonly workspaceHandle?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_connection_permission pipes_tenant_connection_permission}
*/
export class TenantConnectionPermission extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pipes_tenant_connection_permission";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TenantConnectionPermission resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TenantConnectionPermission to import
  * @param importFromId The id of the existing TenantConnectionPermission that should be imported. Refer to the {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_connection_permission#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TenantConnectionPermission to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pipes_tenant_connection_permission", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/tenant_connection_permission pipes_tenant_connection_permission} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TenantConnectionPermissionConfig
  */
  public constructor(scope: Construct, id: string, config: TenantConnectionPermissionConfig) {
    super(scope, id, {
      terraformResourceType: 'pipes_tenant_connection_permission',
      terraformGeneratorMetadata: {
        providerName: 'pipes',
        providerVersion: '0.17.0',
        providerVersionConstraint: '0.17.0'
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
    this._identityHandle = config.identityHandle;
    this._tenantHandle = config.tenantHandle;
    this._updatedBy = config.updatedBy;
    this._workspaceHandle = config.workspaceHandle;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // identity_handle - computed: false, optional: true, required: false
  private _identityHandle?: string; 
  public get identityHandle() {
    return this.getStringAttribute('identity_handle');
  }
  public set identityHandle(value: string) {
    this._identityHandle = value;
  }
  public resetIdentityHandle() {
    this._identityHandle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get identityHandleInput() {
    return this._identityHandle;
  }

  // identity_id - computed: true, optional: false, required: false
  public get identityId() {
    return this.getStringAttribute('identity_id');
  }

  // permission_id - computed: true, optional: false, required: false
  public get permissionId() {
    return this.getStringAttribute('permission_id');
  }

  // tenant_handle - computed: false, optional: true, required: false
  private _tenantHandle?: string; 
  public get tenantHandle() {
    return this.getStringAttribute('tenant_handle');
  }
  public set tenantHandle(value: string) {
    this._tenantHandle = value;
  }
  public resetTenantHandle() {
    this._tenantHandle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantHandleInput() {
    return this._tenantHandle;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
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

  // workspace_handle - computed: false, optional: true, required: false
  private _workspaceHandle?: string; 
  public get workspaceHandle() {
    return this.getStringAttribute('workspace_handle');
  }
  public set workspaceHandle(value: string) {
    this._workspaceHandle = value;
  }
  public resetWorkspaceHandle() {
    this._workspaceHandle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workspaceHandleInput() {
    return this._workspaceHandle;
  }

  // workspace_id - computed: true, optional: false, required: false
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_handle: cdktf.stringToTerraform(this._connectionHandle),
      created_by: cdktf.stringToTerraform(this._createdBy),
      id: cdktf.stringToTerraform(this._id),
      identity_handle: cdktf.stringToTerraform(this._identityHandle),
      tenant_handle: cdktf.stringToTerraform(this._tenantHandle),
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
      identity_handle: {
        value: cdktf.stringToHclTerraform(this._identityHandle),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_handle: {
        value: cdktf.stringToHclTerraform(this._tenantHandle),
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
