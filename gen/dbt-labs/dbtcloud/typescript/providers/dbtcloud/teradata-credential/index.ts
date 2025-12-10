// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/teradata_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface TeradataCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * The password for the Teradata account
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/teradata_credential#password TeradataCredential#password}
  */
  readonly password: string;
  /**
  * Project ID to create the Teradata/Trino credential in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/teradata_credential#project_id TeradataCredential#project_id}
  */
  readonly projectId: number;
  /**
  * The schema where to create models
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/teradata_credential#schema TeradataCredential#schema}
  */
  readonly schema: string;
  /**
  * The number of threads to use. Default is 1
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/teradata_credential#threads TeradataCredential#threads}
  */
  readonly threads?: number;
  /**
  * The username for the Teradata account 
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/teradata_credential#user TeradataCredential#user}
  */
  readonly user: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/teradata_credential dbtcloud_teradata_credential}
*/
export class TeradataCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_teradata_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a TeradataCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the TeradataCredential to import
  * @param importFromId The id of the existing TeradataCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/teradata_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the TeradataCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_teradata_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.0/docs/resources/teradata_credential dbtcloud_teradata_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options TeradataCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: TeradataCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_teradata_credential',
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
    this._password = config.password;
    this._projectId = config.projectId;
    this._schema = config.schema;
    this._threads = config.threads;
    this._user = config.user;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credential_id - computed: true, optional: false, required: false
  public get credentialId() {
    return this.getNumberAttribute('credential_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // password - computed: false, optional: false, required: true
  private _password?: string; 
  public get password() {
    return this.getStringAttribute('password');
  }
  public set password(value: string) {
    this._password = value;
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

  // schema - computed: false, optional: false, required: true
  private _schema?: string; 
  public get schema() {
    return this.getStringAttribute('schema');
  }
  public set schema(value: string) {
    this._schema = value;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema;
  }

  // threads - computed: true, optional: true, required: false
  private _threads?: number; 
  public get threads() {
    return this.getNumberAttribute('threads');
  }
  public set threads(value: number) {
    this._threads = value;
  }
  public resetThreads() {
    this._threads = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get threadsInput() {
    return this._threads;
  }

  // user - computed: false, optional: false, required: true
  private _user?: string; 
  public get user() {
    return this.getStringAttribute('user');
  }
  public set user(value: string) {
    this._user = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInput() {
    return this._user;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      password: cdktf.stringToTerraform(this._password),
      project_id: cdktf.numberToTerraform(this._projectId),
      schema: cdktf.stringToTerraform(this._schema),
      threads: cdktf.numberToTerraform(this._threads),
      user: cdktf.stringToTerraform(this._user),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      schema: {
        value: cdktf.stringToHclTerraform(this._schema),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threads: {
        value: cdktf.numberToHclTerraform(this._threads),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      user: {
        value: cdktf.stringToHclTerraform(this._user),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
