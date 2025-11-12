// https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_diagnostics
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProfileDiagnosticsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_diagnostics#aws_s3_bucket ProfileDiagnostics#aws_s3_bucket}
  */
  readonly awsS3Bucket?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_diagnostics#azure_blob_container_name ProfileDiagnostics#azure_blob_container_name}
  */
  readonly azureBlobContainerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_diagnostics#azure_storage_access_key ProfileDiagnostics#azure_storage_access_key}
  */
  readonly azureStorageAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_diagnostics#azure_storage_accnt_name ProfileDiagnostics#azure_storage_accnt_name}
  */
  readonly azureStorageAccntName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_diagnostics#csp_type ProfileDiagnostics#csp_type}
  */
  readonly cspType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_diagnostics#description ProfileDiagnostics#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_diagnostics#id ProfileDiagnostics#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_diagnostics#name ProfileDiagnostics#name}
  */
  readonly name: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_diagnostics ciscomcd_profile_diagnostics}
*/
export class ProfileDiagnostics extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciscomcd_profile_diagnostics";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProfileDiagnostics resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProfileDiagnostics to import
  * @param importFromId The id of the existing ProfileDiagnostics that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_diagnostics#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProfileDiagnostics to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciscomcd_profile_diagnostics", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/ciscomcd/25.9.2/docs/resources/profile_diagnostics ciscomcd_profile_diagnostics} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProfileDiagnosticsConfig
  */
  public constructor(scope: Construct, id: string, config: ProfileDiagnosticsConfig) {
    super(scope, id, {
      terraformResourceType: 'ciscomcd_profile_diagnostics',
      terraformGeneratorMetadata: {
        providerName: 'ciscomcd',
        providerVersion: '25.9.2',
        providerVersionConstraint: '25.9.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._awsS3Bucket = config.awsS3Bucket;
    this._azureBlobContainerName = config.azureBlobContainerName;
    this._azureStorageAccessKey = config.azureStorageAccessKey;
    this._azureStorageAccntName = config.azureStorageAccntName;
    this._cspType = config.cspType;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aws_s3_bucket - computed: false, optional: true, required: false
  private _awsS3Bucket?: string; 
  public get awsS3Bucket() {
    return this.getStringAttribute('aws_s3_bucket');
  }
  public set awsS3Bucket(value: string) {
    this._awsS3Bucket = value;
  }
  public resetAwsS3Bucket() {
    this._awsS3Bucket = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsS3BucketInput() {
    return this._awsS3Bucket;
  }

  // azure_blob_container_name - computed: false, optional: true, required: false
  private _azureBlobContainerName?: string; 
  public get azureBlobContainerName() {
    return this.getStringAttribute('azure_blob_container_name');
  }
  public set azureBlobContainerName(value: string) {
    this._azureBlobContainerName = value;
  }
  public resetAzureBlobContainerName() {
    this._azureBlobContainerName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureBlobContainerNameInput() {
    return this._azureBlobContainerName;
  }

  // azure_storage_access_key - computed: false, optional: true, required: false
  private _azureStorageAccessKey?: string; 
  public get azureStorageAccessKey() {
    return this.getStringAttribute('azure_storage_access_key');
  }
  public set azureStorageAccessKey(value: string) {
    this._azureStorageAccessKey = value;
  }
  public resetAzureStorageAccessKey() {
    this._azureStorageAccessKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageAccessKeyInput() {
    return this._azureStorageAccessKey;
  }

  // azure_storage_accnt_name - computed: false, optional: true, required: false
  private _azureStorageAccntName?: string; 
  public get azureStorageAccntName() {
    return this.getStringAttribute('azure_storage_accnt_name');
  }
  public set azureStorageAccntName(value: string) {
    this._azureStorageAccntName = value;
  }
  public resetAzureStorageAccntName() {
    this._azureStorageAccntName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureStorageAccntNameInput() {
    return this._azureStorageAccntName;
  }

  // csp_type - computed: false, optional: false, required: true
  private _cspType?: string; 
  public get cspType() {
    return this.getStringAttribute('csp_type');
  }
  public set cspType(value: string) {
    this._cspType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cspTypeInput() {
    return this._cspType;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
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

  // profile_id - computed: true, optional: false, required: false
  public get profileId() {
    return this.getNumberAttribute('profile_id');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      aws_s3_bucket: cdktf.stringToTerraform(this._awsS3Bucket),
      azure_blob_container_name: cdktf.stringToTerraform(this._azureBlobContainerName),
      azure_storage_access_key: cdktf.stringToTerraform(this._azureStorageAccessKey),
      azure_storage_accnt_name: cdktf.stringToTerraform(this._azureStorageAccntName),
      csp_type: cdktf.stringToTerraform(this._cspType),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      aws_s3_bucket: {
        value: cdktf.stringToHclTerraform(this._awsS3Bucket),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_blob_container_name: {
        value: cdktf.stringToHclTerraform(this._azureBlobContainerName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_storage_access_key: {
        value: cdktf.stringToHclTerraform(this._azureStorageAccessKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      azure_storage_accnt_name: {
        value: cdktf.stringToHclTerraform(this._azureStorageAccntName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      csp_type: {
        value: cdktf.stringToHclTerraform(this._cspType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
