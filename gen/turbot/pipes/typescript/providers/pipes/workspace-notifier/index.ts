// https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_notifier
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkspaceNotifierConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_notifier#created_at WorkspaceNotifier#created_at}
  */
  readonly createdAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_notifier#created_by WorkspaceNotifier#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_notifier#id WorkspaceNotifier#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_notifier#name WorkspaceNotifier#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_notifier#notifies WorkspaceNotifier#notifies}
  */
  readonly notifies: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_notifier#organization WorkspaceNotifier#organization}
  */
  readonly organization?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_notifier#precedence WorkspaceNotifier#precedence}
  */
  readonly precedence?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_notifier#state WorkspaceNotifier#state}
  */
  readonly state: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_notifier#state_reason WorkspaceNotifier#state_reason}
  */
  readonly stateReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_notifier#updated_at WorkspaceNotifier#updated_at}
  */
  readonly updatedAt?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_notifier#updated_by WorkspaceNotifier#updated_by}
  */
  readonly updatedBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_notifier#workspace WorkspaceNotifier#workspace}
  */
  readonly workspace: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_notifier pipes_workspace_notifier}
*/
export class WorkspaceNotifier extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pipes_workspace_notifier";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkspaceNotifier resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkspaceNotifier to import
  * @param importFromId The id of the existing WorkspaceNotifier that should be imported. Refer to the {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_notifier#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkspaceNotifier to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pipes_workspace_notifier", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/workspace_notifier pipes_workspace_notifier} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkspaceNotifierConfig
  */
  public constructor(scope: Construct, id: string, config: WorkspaceNotifierConfig) {
    super(scope, id, {
      terraformResourceType: 'pipes_workspace_notifier',
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
    this._createdAt = config.createdAt;
    this._createdBy = config.createdBy;
    this._id = config.id;
    this._name = config.name;
    this._notifies = config.notifies;
    this._organization = config.organization;
    this._precedence = config.precedence;
    this._state = config.state;
    this._stateReason = config.stateReason;
    this._updatedAt = config.updatedAt;
    this._updatedBy = config.updatedBy;
    this._workspace = config.workspace;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // created_at - computed: true, optional: true, required: false
  private _createdAt?: string; 
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }
  public set createdAt(value: string) {
    this._createdAt = value;
  }
  public resetCreatedAt() {
    this._createdAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdAtInput() {
    return this._createdAt;
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

  // notifier_id - computed: true, optional: false, required: false
  public get notifierId() {
    return this.getStringAttribute('notifier_id');
  }

  // notifies - computed: false, optional: false, required: true
  private _notifies?: string; 
  public get notifies() {
    return this.getStringAttribute('notifies');
  }
  public set notifies(value: string) {
    this._notifies = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notifiesInput() {
    return this._notifies;
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

  // precedence - computed: true, optional: true, required: false
  private _precedence?: string; 
  public get precedence() {
    return this.getStringAttribute('precedence');
  }
  public set precedence(value: string) {
    this._precedence = value;
  }
  public resetPrecedence() {
    this._precedence = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get precedenceInput() {
    return this._precedence;
  }

  // state - computed: false, optional: false, required: true
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // state_reason - computed: true, optional: true, required: false
  private _stateReason?: string; 
  public get stateReason() {
    return this.getStringAttribute('state_reason');
  }
  public set stateReason(value: string) {
    this._stateReason = value;
  }
  public resetStateReason() {
    this._stateReason = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateReasonInput() {
    return this._stateReason;
  }

  // tenant_id - computed: true, optional: false, required: false
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }

  // updated_at - computed: true, optional: true, required: false
  private _updatedAt?: string; 
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }
  public set updatedAt(value: string) {
    this._updatedAt = value;
  }
  public resetUpdatedAt() {
    this._updatedAt = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updatedAtInput() {
    return this._updatedAt;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      created_at: cdktf.stringToTerraform(this._createdAt),
      created_by: cdktf.stringToTerraform(this._createdBy),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      notifies: cdktf.stringToTerraform(this._notifies),
      organization: cdktf.stringToTerraform(this._organization),
      precedence: cdktf.stringToTerraform(this._precedence),
      state: cdktf.stringToTerraform(this._state),
      state_reason: cdktf.stringToTerraform(this._stateReason),
      updated_at: cdktf.stringToTerraform(this._updatedAt),
      updated_by: cdktf.stringToTerraform(this._updatedBy),
      workspace: cdktf.stringToTerraform(this._workspace),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      created_at: {
        value: cdktf.stringToHclTerraform(this._createdAt),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notifies: {
        value: cdktf.stringToHclTerraform(this._notifies),
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
      precedence: {
        value: cdktf.stringToHclTerraform(this._precedence),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state_reason: {
        value: cdktf.stringToHclTerraform(this._stateReason),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      updated_at: {
        value: cdktf.stringToHclTerraform(this._updatedAt),
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
