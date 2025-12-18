// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/athena_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AthenaCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * AWS access key ID for Athena user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/athena_credential#aws_access_key_id AthenaCredential#aws_access_key_id}
  */
  readonly awsAccessKeyId: string;
  /**
  * AWS secret access key for Athena user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/athena_credential#aws_secret_access_key AthenaCredential#aws_secret_access_key}
  */
  readonly awsSecretAccessKey: string;
  /**
  * Project ID to create the Athena credential in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/athena_credential#project_id AthenaCredential#project_id}
  */
  readonly projectId: number;
  /**
  * The schema where to create models
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/athena_credential#schema AthenaCredential#schema}
  */
  readonly schema: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/athena_credential dbtcloud_athena_credential}
*/
export class AthenaCredential extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_athena_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AthenaCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AthenaCredential to import
  * @param importFromId The id of the existing AthenaCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/athena_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AthenaCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_athena_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/resources/athena_credential dbtcloud_athena_credential} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AthenaCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: AthenaCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_athena_credential',
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
    this._awsAccessKeyId = config.awsAccessKeyId;
    this._awsSecretAccessKey = config.awsSecretAccessKey;
    this._projectId = config.projectId;
    this._schema = config.schema;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_access_key_id - computed: false, optional: false, required: true
  private _awsAccessKeyId?: string; 
  public get awsAccessKeyId() {
    return this.getStringAttribute('aws_access_key_id');
  }
  public set awsAccessKeyId(value: string) {
    this._awsAccessKeyId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsAccessKeyIdInput() {
    return this._awsAccessKeyId;
  }

  // aws_secret_access_key - computed: false, optional: false, required: true
  private _awsSecretAccessKey?: string; 
  public get awsSecretAccessKey() {
    return this.getStringAttribute('aws_secret_access_key');
  }
  public set awsSecretAccessKey(value: string) {
    this._awsSecretAccessKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get awsSecretAccessKeyInput() {
    return this._awsSecretAccessKey;
  }

  // credential_id - computed: true, optional: false, required: false
  public get credentialId() {
    return this.getNumberAttribute('credential_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_access_key_id: cdktf.stringToTerraform(this._awsAccessKeyId),
      aws_secret_access_key: cdktf.stringToTerraform(this._awsSecretAccessKey),
      project_id: cdktf.numberToTerraform(this._projectId),
      schema: cdktf.stringToTerraform(this._schema),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_access_key_id: {
        value: cdktf.stringToHclTerraform(this._awsAccessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      aws_secret_access_key: {
        value: cdktf.stringToHclTerraform(this._awsSecretAccessKey),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
