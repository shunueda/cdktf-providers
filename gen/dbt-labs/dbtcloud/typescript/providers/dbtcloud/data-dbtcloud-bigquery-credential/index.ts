// https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/data-sources/bigquery_credential
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDbtcloudBigqueryCredentialConfig extends cdktf.TerraformMetaArguments {
  /**
  * Credential ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/data-sources/bigquery_credential#credential_id DataDbtcloudBigqueryCredential#credential_id}
  */
  readonly credentialId: number;
  /**
  * Project ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/data-sources/bigquery_credential#project_id DataDbtcloudBigqueryCredential#project_id}
  */
  readonly projectId: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/data-sources/bigquery_credential dbtcloud_bigquery_credential}
*/
export class DataDbtcloudBigqueryCredential extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "dbtcloud_bigquery_credential";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDbtcloudBigqueryCredential resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDbtcloudBigqueryCredential to import
  * @param importFromId The id of the existing DataDbtcloudBigqueryCredential that should be imported. Refer to the {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/data-sources/bigquery_credential#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDbtcloudBigqueryCredential to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "dbtcloud_bigquery_credential", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/dbt-labs/dbtcloud/1.5.1/docs/data-sources/bigquery_credential dbtcloud_bigquery_credential} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDbtcloudBigqueryCredentialConfig
  */
  public constructor(scope: Construct, id: string, config: DataDbtcloudBigqueryCredentialConfig) {
    super(scope, id, {
      terraformResourceType: 'dbtcloud_bigquery_credential',
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
    this._credentialId = config.credentialId;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // credential_id - computed: false, optional: false, required: true
  private _credentialId?: number; 
  public get credentialId() {
    return this.getNumberAttribute('credential_id');
  }
  public set credentialId(value: number) {
    this._credentialId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialIdInput() {
    return this._credentialId;
  }

  // dataset - computed: true, optional: false, required: false
  public get dataset() {
    return this.getStringAttribute('dataset');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // is_active - computed: true, optional: false, required: false
  public get isActive() {
    return this.getBooleanAttribute('is_active');
  }

  // num_threads - computed: true, optional: false, required: false
  public get numThreads() {
    return this.getNumberAttribute('num_threads');
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      credential_id: cdktf.numberToTerraform(this._credentialId),
      project_id: cdktf.numberToTerraform(this._projectId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      credential_id: {
        value: cdktf.numberToHclTerraform(this._credentialId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
