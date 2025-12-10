// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/environment
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EnvironmentConfig extends cdktf.TerraformMetaArguments {
  /**
  * A connection ID (used with Global Connections)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/environment#connection_id Environment#connection_id}
  */
  readonly connectionId?: number;
  /**
  * The Credential ID for this environment. A credential is not actionable for development environments, as users have to set their own development credentials in dbt Cloud.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/environment#credential_id Environment#credential_id}
  */
  readonly credentialId?: number;
  /**
  * The custom branch name to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/environment#custom_branch Environment#custom_branch}
  */
  readonly customBranch?: string;
  /**
  * Version number of dbt to use in this environment. It needs to be in the format `major.minor.0-latest` (e.g. `1.5.0-latest`), `major.minor.0-pre`, `compatible`, `extended`, `versionless`, `latest` or `latest-fusion`. While `versionless` is still supported, using `latest` is recommended. Defaults to `latest` if no version is provided
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/environment#dbt_version Environment#dbt_version}
  */
  readonly dbtVersion?: string;
  /**
  * The type of environment. Only valid for environments of type 'deployment' and for now can only be 'production', 'staging' or left empty for generic environments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/environment#deployment_type Environment#deployment_type}
  */
  readonly deploymentType?: string;
  /**
  * Whether to enable model query history in this environment. As of Oct 2024, works only for Snowflake and BigQuery.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/environment#enable_model_query_history Environment#enable_model_query_history}
  */
  readonly enableModelQueryHistory?: boolean | cdktf.IResolvable;
  /**
  * The ID of the extended attributes applied
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/environment#extended_attributes_id Environment#extended_attributes_id}
  */
  readonly extendedAttributesId?: number;
  /**
  * Whether the environment is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/environment#is_active Environment#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * The name of the environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/environment#name Environment#name}
  */
  readonly name: string;
  /**
  * Project ID to create the environment in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/environment#project_id Environment#project_id}
  */
  readonly projectId: number;
  /**
  * The type of environment (must be either development or deployment)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/environment#type Environment#type}
  */
  readonly type: string;
  /**
  * Whether to use a custom git branch in this environment
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/environment#use_custom_branch Environment#use_custom_branch}
  */
  readonly useCustomBranch?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/environment dbtcloud_environment}
*/
export class Environment extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_environment";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Environment resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Environment to import
  * @param importFromId The id of the existing Environment that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/environment#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Environment to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_environment", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/environment dbtcloud_environment} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EnvironmentConfig
  */
  public constructor(scope: Construct, id: string, config: EnvironmentConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_environment',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._connectionId = config.connectionId;
    this._credentialId = config.credentialId;
    this._customBranch = config.customBranch;
    this._dbtVersion = config.dbtVersion;
    this._deploymentType = config.deploymentType;
    this._enableModelQueryHistory = config.enableModelQueryHistory;
    this._extendedAttributesId = config.extendedAttributesId;
    this._isActive = config.isActive;
    this._name = config.name;
    this._projectId = config.projectId;
    this._type = config.type;
    this._useCustomBranch = config.useCustomBranch;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_id - computed: true, optional: true, required: false
  private _connectionId?: number; 
  public get connectionId() {
    return this.getNumberAttribute('connection_id');
  }
  public set connectionId(value: number) {
    this._connectionId = value;
  }
  public resetConnectionId() {
    this._connectionId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get connectionIdInput() {
    return this._connectionId;
  }

  // credential_id - computed: true, optional: true, required: false
  private _credentialId?: number; 
  public get credentialId() {
    return this.getNumberAttribute('credential_id');
  }
  public set credentialId(value: number) {
    this._credentialId = value;
  }
  public resetCredentialId() {
    this._credentialId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialIdInput() {
    return this._credentialId;
  }

  // custom_branch - computed: false, optional: true, required: false
  private _customBranch?: string; 
  public get customBranch() {
    return this.getStringAttribute('custom_branch');
  }
  public set customBranch(value: string) {
    this._customBranch = value;
  }
  public resetCustomBranch() {
    this._customBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customBranchInput() {
    return this._customBranch;
  }

  // dbt_version - computed: true, optional: true, required: false
  private _dbtVersion?: string; 
  public get dbtVersion() {
    return this.getStringAttribute('dbt_version');
  }
  public set dbtVersion(value: string) {
    this._dbtVersion = value;
  }
  public resetDbtVersion() {
    this._dbtVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbtVersionInput() {
    return this._dbtVersion;
  }

  // deployment_type - computed: false, optional: true, required: false
  private _deploymentType?: string; 
  public get deploymentType() {
    return this.getStringAttribute('deployment_type');
  }
  public set deploymentType(value: string) {
    this._deploymentType = value;
  }
  public resetDeploymentType() {
    this._deploymentType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deploymentTypeInput() {
    return this._deploymentType;
  }

  // enable_model_query_history - computed: true, optional: true, required: false
  private _enableModelQueryHistory?: boolean | cdktf.IResolvable; 
  public get enableModelQueryHistory() {
    return this.getBooleanAttribute('enable_model_query_history');
  }
  public set enableModelQueryHistory(value: boolean | cdktf.IResolvable) {
    this._enableModelQueryHistory = value;
  }
  public resetEnableModelQueryHistory() {
    this._enableModelQueryHistory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableModelQueryHistoryInput() {
    return this._enableModelQueryHistory;
  }

  // environment_id - computed: true, optional: false, required: false
  public get environmentId() {
    return this.getNumberAttribute('environment_id');
  }

  // extended_attributes_id - computed: true, optional: true, required: false
  private _extendedAttributesId?: number; 
  public get extendedAttributesId() {
    return this.getNumberAttribute('extended_attributes_id');
  }
  public set extendedAttributesId(value: number) {
    this._extendedAttributesId = value;
  }
  public resetExtendedAttributesId() {
    this._extendedAttributesId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extendedAttributesIdInput() {
    return this._extendedAttributesId;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: true, optional: true, required: false
  private _isActive?: boolean | cdktf.IResolvable; 
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }
  public set isActive(value: boolean | cdktf.IResolvable) {
    this._isActive = value;
  }
  public resetIsActive() {
    this._isActive = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isActiveInput() {
    return this._isActive;
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

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
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

  // use_custom_branch - computed: true, optional: true, required: false
  private _useCustomBranch?: boolean | cdktf.IResolvable; 
  public get useCustomBranch() {
    return this.getBooleanAttribute('use_custom_branch');
  }
  public set useCustomBranch(value: boolean | cdktf.IResolvable) {
    this._useCustomBranch = value;
  }
  public resetUseCustomBranch() {
    this._useCustomBranch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useCustomBranchInput() {
    return this._useCustomBranch;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      connection_id: cdktf.numberToTerraform(this._connectionId),
      credential_id: cdktf.numberToTerraform(this._credentialId),
      custom_branch: cdktf.stringToTerraform(this._customBranch),
      dbt_version: cdktf.stringToTerraform(this._dbtVersion),
      deployment_type: cdktf.stringToTerraform(this._deploymentType),
      enable_model_query_history: cdktf.booleanToTerraform(this._enableModelQueryHistory),
      extended_attributes_id: cdktf.numberToTerraform(this._extendedAttributesId),
      is_active: cdktf.booleanToTerraform(this._isActive),
      name: cdktf.stringToTerraform(this._name),
      project_id: cdktf.numberToTerraform(this._projectId),
      type: cdktf.stringToTerraform(this._type),
      use_custom_branch: cdktf.booleanToTerraform(this._useCustomBranch),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      connection_id: {
        value: cdktf.numberToHclTerraform(this._connectionId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      credential_id: {
        value: cdktf.numberToHclTerraform(this._credentialId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      custom_branch: {
        value: cdktf.stringToHclTerraform(this._customBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      dbt_version: {
        value: cdktf.stringToHclTerraform(this._dbtVersion),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      deployment_type: {
        value: cdktf.stringToHclTerraform(this._deploymentType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable_model_query_history: {
        value: cdktf.booleanToHclTerraform(this._enableModelQueryHistory),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      extended_attributes_id: {
        value: cdktf.numberToHclTerraform(this._extendedAttributesId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_custom_branch: {
        value: cdktf.booleanToHclTerraform(this._useCustomBranch),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
