// https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_integration
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface UserIntegrationConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_integration#config UserIntegration#config}
  */
  readonly config?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_integration#config_wo UserIntegration#config_wo}
  */
  readonly configWo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_integration#config_wo_version UserIntegration#config_wo_version}
  */
  readonly configWoVersion?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_integration#created_by UserIntegration#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_integration#github_installation_id UserIntegration#github_installation_id}
  */
  readonly githubInstallationId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_integration#handle UserIntegration#handle}
  */
  readonly handle: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_integration#id UserIntegration#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_integration#integration_id UserIntegration#integration_id}
  */
  readonly integrationId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_integration#pipeline_id UserIntegration#pipeline_id}
  */
  readonly pipelineId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_integration#state UserIntegration#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_integration#state_reason UserIntegration#state_reason}
  */
  readonly stateReason?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_integration#type UserIntegration#type}
  */
  readonly type: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_integration#updated_by UserIntegration#updated_by}
  */
  readonly updatedBy?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_integration pipes_user_integration}
*/
export class UserIntegration extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pipes_user_integration";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a UserIntegration resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the UserIntegration to import
  * @param importFromId The id of the existing UserIntegration that should be imported. Refer to the {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_integration#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the UserIntegration to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pipes_user_integration", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/turbot/pipes/0.17.0/docs/resources/user_integration pipes_user_integration} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options UserIntegrationConfig
  */
  public constructor(scope: Construct, id: string, config: UserIntegrationConfig) {
    super(scope, id, {
      terraformResourceType: 'pipes_user_integration',
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
    this._config = config.config;
    this._configWo = config.configWo;
    this._configWoVersion = config.configWoVersion;
    this._createdBy = config.createdBy;
    this._githubInstallationId = config.githubInstallationId;
    this._handle = config.handle;
    this._id = config.id;
    this._integrationId = config.integrationId;
    this._pipelineId = config.pipelineId;
    this._state = config.state;
    this._stateReason = config.stateReason;
    this._type = config.type;
    this._updatedBy = config.updatedBy;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // config - computed: false, optional: true, required: false
  private _config?: string; 
  public get config() {
    return this.getStringAttribute('config');
  }
  public set config(value: string) {
    this._config = value;
  }
  public resetConfig() {
    this._config = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config;
  }

  // config_wo - computed: false, optional: true, required: false
  private _configWo?: string; 
  public get configWo() {
    return this.getStringAttribute('config_wo');
  }
  public set configWo(value: string) {
    this._configWo = value;
  }
  public resetConfigWo() {
    this._configWo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configWoInput() {
    return this._configWo;
  }

  // config_wo_version - computed: false, optional: true, required: false
  private _configWoVersion?: number; 
  public get configWoVersion() {
    return this.getNumberAttribute('config_wo_version');
  }
  public set configWoVersion(value: number) {
    this._configWoVersion = value;
  }
  public resetConfigWoVersion() {
    this._configWoVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configWoVersionInput() {
    return this._configWoVersion;
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

  // github_installation_id - computed: true, optional: true, required: false
  private _githubInstallationId?: number; 
  public get githubInstallationId() {
    return this.getNumberAttribute('github_installation_id');
  }
  public set githubInstallationId(value: number) {
    this._githubInstallationId = value;
  }
  public resetGithubInstallationId() {
    this._githubInstallationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubInstallationIdInput() {
    return this._githubInstallationId;
  }

  // handle - computed: false, optional: false, required: true
  private _handle?: string; 
  public get handle() {
    return this.getStringAttribute('handle');
  }
  public set handle(value: string) {
    this._handle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get handleInput() {
    return this._handle;
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

  // integration_id - computed: true, optional: true, required: false
  private _integrationId?: string; 
  public get integrationId() {
    return this.getStringAttribute('integration_id');
  }
  public set integrationId(value: string) {
    this._integrationId = value;
  }
  public resetIntegrationId() {
    this._integrationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get integrationIdInput() {
    return this._integrationId;
  }

  // pipeline_id - computed: true, optional: true, required: false
  private _pipelineId?: string; 
  public get pipelineId() {
    return this.getStringAttribute('pipeline_id');
  }
  public set pipelineId(value: string) {
    this._pipelineId = value;
  }
  public resetPipelineId() {
    this._pipelineId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pipelineIdInput() {
    return this._pipelineId;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      config: cdktf.stringToTerraform(this._config),
      config_wo: cdktf.stringToTerraform(this._configWo),
      config_wo_version: cdktf.numberToTerraform(this._configWoVersion),
      created_by: cdktf.stringToTerraform(this._createdBy),
      github_installation_id: cdktf.numberToTerraform(this._githubInstallationId),
      handle: cdktf.stringToTerraform(this._handle),
      id: cdktf.stringToTerraform(this._id),
      integration_id: cdktf.stringToTerraform(this._integrationId),
      pipeline_id: cdktf.stringToTerraform(this._pipelineId),
      state: cdktf.stringToTerraform(this._state),
      state_reason: cdktf.stringToTerraform(this._stateReason),
      type: cdktf.stringToTerraform(this._type),
      updated_by: cdktf.stringToTerraform(this._updatedBy),
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
      config_wo: {
        value: cdktf.stringToHclTerraform(this._configWo),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      config_wo_version: {
        value: cdktf.numberToHclTerraform(this._configWoVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      created_by: {
        value: cdktf.stringToHclTerraform(this._createdBy),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      github_installation_id: {
        value: cdktf.numberToHclTerraform(this._githubInstallationId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      handle: {
        value: cdktf.stringToHclTerraform(this._handle),
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
      integration_id: {
        value: cdktf.stringToHclTerraform(this._integrationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pipeline_id: {
        value: cdktf.stringToHclTerraform(this._pipelineId),
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
      type: {
        value: cdktf.stringToHclTerraform(this._type),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
