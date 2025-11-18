// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/postgres_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PostgresCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Default schema name. Optional only when semantic_layer_credential is set to true; otherwise, this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/postgres_credential#default_schema PostgresCredential#default_schema}
  */
  readonly defaultSchema?: string;
  /**
  * Whether the Postgres/Redshift/AlloyDB credential is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/postgres_credential#is_active PostgresCredential#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Number of threads to use (required for Redshift)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/postgres_credential#num_threads PostgresCredential#num_threads}
  */
  readonly numThreads?: number;
  /**
  * Password for Postgres/Redshift/AlloyDB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/postgres_credential#password PostgresCredential#password}
  */
  readonly password?: string;
  /**
  * Project ID to create the Postgres/Redshift/AlloyDB credential in.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/postgres_credential#project_id PostgresCredential#project_id}
  */
  readonly projectId: number;
  /**
  * This field indicates that the credential is used as part of the Semantic Layer configuration. It is used to create a Postgres credential for the Semantic Layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/postgres_credential#semantic_layer_credential PostgresCredential#semantic_layer_credential}
  */
  readonly semanticLayerCredential?: boolean | cdktf.IResolvable;
  /**
  * Default schema name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/postgres_credential#target_name PostgresCredential#target_name}
  */
  readonly targetName?: string;
  /**
  * Type of connection. One of (postgres/redshift). Use postgres for alloydb connections. Optional only when semantic_layer_credential is set to true; otherwise, this field is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/postgres_credential#type PostgresCredential#type}
  */
  readonly type?: string;
  /**
  * Username for Postgres/Redshift/AlloyDB
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/postgres_credential#username PostgresCredential#username}
  */
  readonly username: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/postgres_credential dbtcloud_postgres_credential}
*/
export class PostgresCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_postgres_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PostgresCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PostgresCredential to import
  * @param importFromId The id of the existing PostgresCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/postgres_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PostgresCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_postgres_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.4.1/docs/resources/postgres_credential dbtcloud_postgres_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PostgresCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: PostgresCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_postgres_credential',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.4.1',
        providerVersionConstraint: '1.4.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._defaultSchema = config.defaultSchema;
    this._isActive = config.isActive;
    this._numThreads = config.numThreads;
    this._password = config.password;
    this._projectId = config.projectId;
    this._semanticLayerCredential = config.semanticLayerCredential;
    this._targetName = config.targetName;
    this._type = config.type;
    this._username = config.username;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credential_id - computed: true, optional: false, required: false
  public get credentialId() {
    return this.getNumberAttribute('credential_id');
  }

  // default_schema - computed: true, optional: true, required: false
  private _defaultSchema?: string; 
  public get defaultSchema() {
    return this.getStringAttribute('default_schema');
  }
  public set defaultSchema(value: string) {
    this._defaultSchema = value;
  }
  public resetDefaultSchema() {
    this._defaultSchema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSchemaInput() {
    return this._defaultSchema;
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

  // num_threads - computed: true, optional: true, required: false
  private _numThreads?: number; 
  public get numThreads() {
    return this.getNumberAttribute('num_threads');
  }
  public set numThreads(value: number) {
    this._numThreads = value;
  }
  public resetNumThreads() {
    this._numThreads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numThreadsInput() {
    return this._numThreads;
  }

  // password - computed: false, optional: true, required: false
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
  }
  public resetPassword() {
    this._password = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordInput() {
    return this._password;
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

  // semantic_layer_credential - computed: true, optional: true, required: false
  private _semanticLayerCredential?: boolean | cdktf.IResolvable; 
  public get semanticLayerCredential() {
    return this.getBooleanAttribute('semantic_layer_credential');
  }
  public set semanticLayerCredential(value: boolean | cdktf.IResolvable) {
    this._semanticLayerCredential = value;
  }
  public resetSemanticLayerCredential() {
    this._semanticLayerCredential = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get semanticLayerCredentialInput() {
    return this._semanticLayerCredential;
  }

  // target_name - computed: true, optional: true, required: false
  private _targetName?: string; 
  public get targetName() {
    return this.getStringAttribute('target_name');
  }
  public set targetName(value: string) {
    this._targetName = value;
  }
  public resetTargetName() {
    this._targetName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetNameInput() {
    return this._targetName;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // username - computed: false, optional: false, required: true
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      default_schema: cdktf.stringToTerraform(this._defaultSchema),
      is_active: cdktf.booleanToTerraform(this._isActive),
      num_threads: cdktf.numberToTerraform(this._numThreads),
      password: cdktf.stringToTerraform(this._password),
      project_id: cdktf.numberToTerraform(this._projectId),
      semantic_layer_credential: cdktf.booleanToTerraform(this._semanticLayerCredential),
      target_name: cdktf.stringToTerraform(this._targetName),
      type: cdktf.stringToTerraform(this._type),
      username: cdktf.stringToTerraform(this._username),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      default_schema: {
        value: cdktf.stringToHclTerraform(this._defaultSchema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      is_active: {
        value: cdktf.booleanToHclTerraform(this._isActive),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      num_threads: {
        value: cdktf.numberToHclTerraform(this._numThreads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      password: {
        value: cdktf.stringToHclTerraform(this._password),
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
      semantic_layer_credential: {
        value: cdktf.booleanToHclTerraform(this._semanticLayerCredential),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      target_name: {
        value: cdktf.stringToHclTerraform(this._targetName),
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
      username: {
        value: cdktf.stringToHclTerraform(this._username),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
