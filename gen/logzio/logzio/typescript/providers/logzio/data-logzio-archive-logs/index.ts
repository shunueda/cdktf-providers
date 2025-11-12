// https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/archive_logs
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataLogzioArchiveLogsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/archive_logs#archive_id DataLogzioArchiveLogs#archive_id}
  */
  readonly archiveId?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/archive_logs#id DataLogzioArchiveLogs#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/archive_logs logzio_archive_logs}
*/
export class DataLogzioArchiveLogs extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "logzio_archive_logs";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataLogzioArchiveLogs resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataLogzioArchiveLogs to import
  * @param importFromId The id of the existing DataLogzioArchiveLogs that should be imported. Refer to the {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/archive_logs#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataLogzioArchiveLogs to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "logzio_archive_logs", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/logzio/logzio/1.26.0/docs/data-sources/archive_logs logzio_archive_logs} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataLogzioArchiveLogsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataLogzioArchiveLogsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'logzio_archive_logs',
      terraformGeneratorMetadata: {
        providerName: 'logzio',
        providerVersion: '1.26.0',
        providerVersionConstraint: '1.26.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._archiveId = config.archiveId;
    this._id = config.id;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // archive_id - computed: false, optional: true, required: false
  private _archiveId?: number; 
  public get archiveId() {
    return this.getNumberAttribute('archive_id');
  }
  public set archiveId(value: number) {
    this._archiveId = value;
  }
  public resetArchiveId() {
    this._archiveId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get archiveIdInput() {
    return this._archiveId;
  }

  // aws_access_key - computed: true, optional: false, required: false
  public get awsAccessKey() {
    return this.getStringAttribute('aws_access_key');
  }

  // aws_credentials_type - computed: true, optional: false, required: false
  public get awsCredentialsType() {
    return this.getStringAttribute('aws_credentials_type');
  }

  // aws_s3_iam_credentials_arn - computed: true, optional: false, required: false
  public get awsS3IamCredentialsArn() {
    return this.getStringAttribute('aws_s3_iam_credentials_arn');
  }

  // aws_s3_path - computed: true, optional: false, required: false
  public get awsS3Path() {
    return this.getStringAttribute('aws_s3_path');
  }

  // azure_account_name - computed: true, optional: false, required: false
  public get azureAccountName() {
    return this.getStringAttribute('azure_account_name');
  }

  // azure_blob_path - computed: true, optional: false, required: false
  public get azureBlobPath() {
    return this.getStringAttribute('azure_blob_path');
  }

  // azure_client_id - computed: true, optional: false, required: false
  public get azureClientId() {
    return this.getStringAttribute('azure_client_id');
  }

  // azure_container_name - computed: true, optional: false, required: false
  public get azureContainerName() {
    return this.getStringAttribute('azure_container_name');
  }

  // azure_tenant_id - computed: true, optional: false, required: false
  public get azureTenantId() {
    return this.getStringAttribute('azure_tenant_id');
  }

  // compressed - computed: true, optional: false, required: false
  public get compressed() {
    return this.getBooleanAttribute('compressed');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
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

  // storage_type - computed: true, optional: false, required: false
  public get storageType() {
    return this.getStringAttribute('storage_type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      archive_id: cdktf.numberToTerraform(this._archiveId),
      id: cdktf.stringToTerraform(this._id),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      archive_id: {
        value: cdktf.numberToHclTerraform(this._archiveId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
