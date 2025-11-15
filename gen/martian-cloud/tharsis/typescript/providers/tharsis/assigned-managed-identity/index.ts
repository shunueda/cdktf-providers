// https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/assigned_managed_identity
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AssignedManagedIdentityConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of the assigned managed identity.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/assigned_managed_identity#managed_identity_id AssignedManagedIdentity#managed_identity_id}
  */
  readonly managedIdentityId: string;
  /**
  * The ID of the assigned-to workspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/assigned_managed_identity#workspace_id AssignedManagedIdentity#workspace_id}
  */
  readonly workspaceId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/assigned_managed_identity tharsis_assigned_managed_identity}
*/
export class AssignedManagedIdentity extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tharsis_assigned_managed_identity";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AssignedManagedIdentity resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AssignedManagedIdentity to import
  * @param importFromId The id of the existing AssignedManagedIdentity that should be imported. Refer to the {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/assigned_managed_identity#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AssignedManagedIdentity to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tharsis_assigned_managed_identity", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/martian-cloud/tharsis/0.15.0/docs/resources/assigned_managed_identity tharsis_assigned_managed_identity} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AssignedManagedIdentityConfig
  */
  public constructor(scope: Construct, id: string, config: AssignedManagedIdentityConfig) {
    super(scope, id, {
      terraformResourceType: 'tharsis_assigned_managed_identity',
      terraformGeneratorMetadata: {
        providerName: 'tharsis',
        providerVersion: '0.15.0',
        providerVersionConstraint: '0.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._managedIdentityId = config.managedIdentityId;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // managed_identity_id - computed: false, optional: false, required: true
  private _managedIdentityId?: string; 
  public get managedIdentityId() {
    return this.getStringAttribute('managed_identity_id');
  }
  public set managedIdentityId(value: string) {
    this._managedIdentityId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get managedIdentityIdInput() {
    return this._managedIdentityId;
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
      managed_identity_id: cdktf.stringToTerraform(this._managedIdentityId),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      managed_identity_id: {
        value: cdktf.stringToHclTerraform(this._managedIdentityId),
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
