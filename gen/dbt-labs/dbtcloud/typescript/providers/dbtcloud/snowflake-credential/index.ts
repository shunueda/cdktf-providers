// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/snowflake_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SnowflakeCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * The type of Snowflake credential ('password' or 'keypair')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/snowflake_credential#auth_type SnowflakeCredential#auth_type}
  */
  readonly authType: string;
  /**
  * The catalog to connect use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/snowflake_credential#database SnowflakeCredential#database}
  */
  readonly database?: string;
  /**
  * Whether the Snowflake credential is active
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/snowflake_credential#is_active SnowflakeCredential#is_active}
  */
  readonly isActive?: boolean | cdktf.IResolvable;
  /**
  * Number of threads to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/snowflake_credential#num_threads SnowflakeCredential#num_threads}
  */
  readonly numThreads: number;
  /**
  * The password for the Snowflake account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/snowflake_credential#password SnowflakeCredential#password}
  */
  readonly password?: string;
  /**
  * The private key for the Snowflake account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/snowflake_credential#private_key SnowflakeCredential#private_key}
  */
  readonly privateKey?: string;
  /**
  * The passphrase for the private key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/snowflake_credential#private_key_passphrase SnowflakeCredential#private_key_passphrase}
  */
  readonly privateKeyPassphrase?: string;
  /**
  * Project ID to create the Snowflake credential in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/snowflake_credential#project_id SnowflakeCredential#project_id}
  */
  readonly projectId: number;
  /**
  * The role to assume
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/snowflake_credential#role SnowflakeCredential#role}
  */
  readonly role?: string;
  /**
  * The schema where to create models. This is an optional field ONLY if the credential is used for Semantic Layer configuration, otherwise it is required.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/snowflake_credential#schema SnowflakeCredential#schema}
  */
  readonly schema?: string;
  /**
  * This field indicates that the credential is used as part of the Semantic Layer configuration. It is used to create a Snowflake credential for the Semantic Layer.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/snowflake_credential#semantic_layer_credential SnowflakeCredential#semantic_layer_credential}
  */
  readonly semanticLayerCredential?: boolean | cdktf.IResolvable;
  /**
  * The username for the Snowflake account. This is an optional field ONLY if the credential is used for Semantic Layer configuration, otherwise it is required. 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/snowflake_credential#user SnowflakeCredential#user}
  */
  readonly user?: string;
  /**
  * The warehouse to use
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/snowflake_credential#warehouse SnowflakeCredential#warehouse}
  */
  readonly warehouse?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/snowflake_credential dbtcloud_snowflake_credential}
*/
export class SnowflakeCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_snowflake_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SnowflakeCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SnowflakeCredential to import
  * @param importFromId The id of the existing SnowflakeCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/snowflake_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SnowflakeCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_snowflake_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/snowflake_credential dbtcloud_snowflake_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SnowflakeCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: SnowflakeCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_snowflake_credential',
      terraformGeneratorMetadata: {
        providerName: 'dbtcloud',
        providerVersion: '1.5.1',
        providerVersionConstraint: '1.5.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._authType = config.authType;
    this._database = config.database;
    this._isActive = config.isActive;
    this._numThreads = config.numThreads;
    this._password = config.password;
    this._privateKey = config.privateKey;
    this._privateKeyPassphrase = config.privateKeyPassphrase;
    this._projectId = config.projectId;
    this._role = config.role;
    this._schema = config.schema;
    this._semanticLayerCredential = config.semanticLayerCredential;
    this._user = config.user;
    this._warehouse = config.warehouse;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // auth_type - computed: false, optional: false, required: true
  private _authType?: string; 
  public get authType() {
    return this.getStringAttribute('auth_type');
  }
  public set authType(value: string) {
    this._authType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get authTypeInput() {
    return this._authType;
  }

  // credential_id - computed: true, optional: false, required: false
  public get credentialId() {
    return this.getNumberAttribute('credential_id');
  }

  // database - computed: false, optional: true, required: false
  private _database?: string; 
  public get database() {
    return this.getStringAttribute('database');
  }
  public set database(value: string) {
    this._database = value;
  }
  public resetDatabase() {
    this._database = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseInput() {
    return this._database;
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

  // num_threads - computed: false, optional: false, required: true
  private _numThreads?: number; 
  public get numThreads() {
    return this.getNumberAttribute('num_threads');
  }
  public set numThreads(value: number) {
    this._numThreads = value;
  }
  // Temporarily expose input value. Use with caution.
  public get numThreadsInput() {
    return this._numThreads;
  }

  // password - computed: true, optional: true, required: false
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

  // private_key - computed: true, optional: true, required: false
  private _privateKey?: string; 
  public get privateKey() {
    return this.getStringAttribute('private_key');
  }
  public set privateKey(value: string) {
    this._privateKey = value;
  }
  public resetPrivateKey() {
    this._privateKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyInput() {
    return this._privateKey;
  }

  // private_key_passphrase - computed: true, optional: true, required: false
  private _privateKeyPassphrase?: string; 
  public get privateKeyPassphrase() {
    return this.getStringAttribute('private_key_passphrase');
  }
  public set privateKeyPassphrase(value: string) {
    this._privateKeyPassphrase = value;
  }
  public resetPrivateKeyPassphrase() {
    this._privateKeyPassphrase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get privateKeyPassphraseInput() {
    return this._privateKeyPassphrase;
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

  // role - computed: false, optional: true, required: false
  private _role?: string; 
  public get role() {
    return this.getStringAttribute('role');
  }
  public set role(value: string) {
    this._role = value;
  }
  public resetRole() {
    this._role = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get roleInput() {
    return this._role;
  }

  // schema - computed: true, optional: true, required: false
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  public resetSchema() {
    this._schema = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
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

  // user - computed: true, optional: true, required: false
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  public resetUser() {
    this._user = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // warehouse - computed: false, optional: true, required: false
  private _warehouse?: string; 
  public get warehouse() {
    return this.getStringAttribute('warehouse');
  }
  public set warehouse(value: string) {
    this._warehouse = value;
  }
  public resetWarehouse() {
    this._warehouse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get warehouseInput() {
    return this._warehouse;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      auth_type: cdktf.stringToTerraform(this._authType),
      database: cdktf.stringToTerraform(this._database),
      is_active: cdktf.booleanToTerraform(this._isActive),
      num_threads: cdktf.numberToTerraform(this._numThreads),
      password: cdktf.stringToTerraform(this._password),
      private_key: cdktf.stringToTerraform(this._privateKey),
      private_key_passphrase: cdktf.stringToTerraform(this._privateKeyPassphrase),
      project_id: cdktf.numberToTerraform(this._projectId),
      role: cdktf.stringToTerraform(this._role),
      schema: cdktf.stringToTerraform(this._schema),
      semantic_layer_credential: cdktf.booleanToTerraform(this._semanticLayerCredential),
      user: cdktf.stringToTerraform(this._user),
      warehouse: cdktf.stringToTerraform(this._warehouse),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      auth_type: {
        value: cdktf.stringToHclTerraform(this._authType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      database: {
        value: cdktf.stringToHclTerraform(this._database),
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
      private_key: {
        value: cdktf.stringToHclTerraform(this._privateKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      private_key_passphrase: {
        value: cdktf.stringToHclTerraform(this._privateKeyPassphrase),
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
      role: {
        value: cdktf.stringToHclTerraform(this._role),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      semantic_layer_credential: {
        value: cdktf.booleanToHclTerraform(this._semanticLayerCredential),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      warehouse: {
        value: cdktf.stringToHclTerraform(this._warehouse),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
