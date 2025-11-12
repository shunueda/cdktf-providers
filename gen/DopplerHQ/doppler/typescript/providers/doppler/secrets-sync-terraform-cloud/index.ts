// https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_terraform_cloud
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SecretsSyncTerraformCloudConfig extends cdktf.TerraformMetaArguments {
  /**
  * The name of the Doppler config
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_terraform_cloud#config SecretsSyncTerraformCloud#config}
  */
  readonly config: string;
  /**
  * The behavior to be performed on the secrets in the sync target when this resource is deleted or recreated. Either `leave_in_target` (default) or `delete_from_target`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_terraform_cloud#delete_behavior SecretsSyncTerraformCloud#delete_behavior}
  */
  readonly deleteBehavior?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_terraform_cloud#id SecretsSyncTerraformCloud#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * The slug of the integration to use for this sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_terraform_cloud#integration SecretsSyncTerraformCloud#integration}
  */
  readonly integration: string;
  /**
  * A name transform to apply before syncing secrets: "none" or "lowercase"
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_terraform_cloud#name_transform SecretsSyncTerraformCloud#name_transform}
  */
  readonly nameTransform: string;
  /**
  * The name of the Doppler project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_terraform_cloud#project SecretsSyncTerraformCloud#project}
  */
  readonly project: string;
  /**
  * Either "workspace" or "variableSet", based on the resource type to sync to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_terraform_cloud#sync_target SecretsSyncTerraformCloud#sync_target}
  */
  readonly syncTarget: string;
  /**
  * The Terraform Cloud variable set ID to sync to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_terraform_cloud#variable_set_id SecretsSyncTerraformCloud#variable_set_id}
  */
  readonly variableSetId?: string;
  /**
  * Either "terraform" to sync secrets as Terraform variables or "env" to sync as environment variables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_terraform_cloud#variable_sync_type SecretsSyncTerraformCloud#variable_sync_type}
  */
  readonly variableSyncType: string;
  /**
  * The Terraform Cloud workspace ID to sync to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_terraform_cloud#workspace_id SecretsSyncTerraformCloud#workspace_id}
  */
  readonly workspaceId?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_terraform_cloud doppler_secrets_sync_terraform_cloud}
*/
export class SecretsSyncTerraformCloud extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "doppler_secrets_sync_terraform_cloud";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SecretsSyncTerraformCloud resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SecretsSyncTerraformCloud to import
  * @param importFromId The id of the existing SecretsSyncTerraformCloud that should be imported. Refer to the {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_terraform_cloud#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SecretsSyncTerraformCloud to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "doppler_secrets_sync_terraform_cloud", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dopplerhq/doppler/1.21.0/docs/resources/secrets_sync_terraform_cloud doppler_secrets_sync_terraform_cloud} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SecretsSyncTerraformCloudConfig
  */
  public constructor(scope: Construct, id: string, config: SecretsSyncTerraformCloudConfig) {
    super(scope, id, {
      terraformResourceType: 'doppler_secrets_sync_terraform_cloud',
      terraformGeneratorMetadata: {
        providerName: 'doppler',
        providerVersion: '1.21.0',
        providerVersionConstraint: '1.21.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._config = config.config;
    this._deleteBehavior = config.deleteBehavior;
    this._id = config.id;
    this._integration = config.integration;
    this._nameTransform = config.nameTransform;
    this._project = config.project;
    this._syncTarget = config.syncTarget;
    this._variableSetId = config.variableSetId;
    this._variableSyncType = config.variableSyncType;
    this._workspaceId = config.workspaceId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: false, required: true
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // delete_behavior - computed: false, optional: true, required: false
  private _deleteBehavior?: string; 
  public get deleteBehavior() {
    return this.getStringAttribute('delete_behavior');
  }
  public set deleteBehavior(value: string) {
    this._deleteBehavior = value;
  }
  public resetDeleteBehavior() {
    this._deleteBehavior = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteBehaviorInput() {
    return this._deleteBehavior;
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

  // integration - computed: false, optional: false, required: true
  private _integration?: string; 
  public get integration() {
    return this.getStringAttribute('integration');
  }
  public set integration(value: string) {
    this._integration = value;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationInput() {
    return this._integration;
  }

  // name_transform - computed: false, optional: false, required: true
  private _nameTransform?: string; 
  public get nameTransform() {
    return this.getStringAttribute('name_transform');
  }
  public set nameTransform(value: string) {
    this._nameTransform = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameTransformInput() {
    return this._nameTransform;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // sync_target - computed: false, optional: false, required: true
  private _syncTarget?: string; 
  public get syncTarget() {
    return this.getStringAttribute('sync_target');
  }
  public set syncTarget(value: string) {
    this._syncTarget = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTargetInput() {
    return this._syncTarget;
  }

  // variable_set_id - computed: false, optional: true, required: false
  private _variableSetId?: string; 
  public get variableSetId() {
    return this.getStringAttribute('variable_set_id');
  }
  public set variableSetId(value: string) {
    this._variableSetId = value;
  }
  public resetVariableSetId() {
    this._variableSetId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get variableSetIdInput() {
    return this._variableSetId;
  }

  // variable_sync_type - computed: false, optional: false, required: true
  private _variableSyncType?: string; 
  public get variableSyncType() {
    return this.getStringAttribute('variable_sync_type');
  }
  public set variableSyncType(value: string) {
    this._variableSyncType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get variableSyncTypeInput() {
    return this._variableSyncType;
  }

  // workspace_id - computed: false, optional: true, required: false
  private _workspaceId?: string; 
  public get workspaceId() {
    return this.getStringAttribute('workspace_id');
  }
  public set workspaceId(value: string) {
    this._workspaceId = value;
  }
  public resetWorkspaceId() {
    this._workspaceId = undefined;
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
      config: cdktf.stringToTerraform(this._config),
      delete_behavior: cdktf.stringToTerraform(this._deleteBehavior),
      id: cdktf.stringToTerraform(this._id),
      integration: cdktf.stringToTerraform(this._integration),
      name_transform: cdktf.stringToTerraform(this._nameTransform),
      project: cdktf.stringToTerraform(this._project),
      sync_target: cdktf.stringToTerraform(this._syncTarget),
      variable_set_id: cdktf.stringToTerraform(this._variableSetId),
      variable_sync_type: cdktf.stringToTerraform(this._variableSyncType),
      workspace_id: cdktf.stringToTerraform(this._workspaceId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      config: {
        value: cdktf.stringToHclTerraform(this._config),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_behavior: {
        value: cdktf.stringToHclTerraform(this._deleteBehavior),
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
      integration: {
        value: cdktf.stringToHclTerraform(this._integration),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name_transform: {
        value: cdktf.stringToHclTerraform(this._nameTransform),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project: {
        value: cdktf.stringToHclTerraform(this._project),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_target: {
        value: cdktf.stringToHclTerraform(this._syncTarget),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      variable_set_id: {
        value: cdktf.stringToHclTerraform(this._variableSetId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      variable_sync_type: {
        value: cdktf.stringToHclTerraform(this._variableSyncType),
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
