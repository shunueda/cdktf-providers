// https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_packet_capture
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProfilePacketCaptureConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_packet_capture#azure_blob_container_name ProfilePacketCapture#azure_blob_container_name}
  */
  readonly azureBlobContainerName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_packet_capture#azure_storage_access_key ProfilePacketCapture#azure_storage_access_key}
  */
  readonly azureStorageAccessKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_packet_capture#azure_storage_accnt_name ProfilePacketCapture#azure_storage_accnt_name}
  */
  readonly azureStorageAccntName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_packet_capture#csp_account ProfilePacketCapture#csp_account}
  */
  readonly cspAccount: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_packet_capture#description ProfilePacketCapture#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_packet_capture#id ProfilePacketCapture#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_packet_capture#name ProfilePacketCapture#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_packet_capture#storage_upload_path ProfilePacketCapture#storage_upload_path}
  */
  readonly storageUploadPath?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_packet_capture valtix_profile_packet_capture}
*/
export class ProfilePacketCapture extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "valtix_profile_packet_capture";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProfilePacketCapture resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProfilePacketCapture to import
  * @param importFromId The id of the existing ProfilePacketCapture that should be imported. Refer to the {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_packet_capture#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProfilePacketCapture to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "valtix_profile_packet_capture", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/valtix-security/valtix/25.9.2/docs/resources/profile_packet_capture valtix_profile_packet_capture} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProfilePacketCaptureConfig
  */
  public constructor(scope: Construct, id: string, config: ProfilePacketCaptureConfig) {
    super(scope, id, {
      terraformResourceType: 'valtix_profile_packet_capture',
      terraformGeneratorMetadata: {
        providerName: 'valtix',
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
    this._azureBlobContainerName = config.azureBlobContainerName;
    this._azureStorageAccessKey = config.azureStorageAccessKey;
    this._azureStorageAccntName = config.azureStorageAccntName;
    this._cspAccount = config.cspAccount;
    this._description = config.description;
    this._id = config.id;
    this._name = config.name;
    this._storageUploadPath = config.storageUploadPath;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // csp_account - computed: false, optional: false, required: true
  private _cspAccount?: string; 
  public get cspAccount() {
    return this.getStringAttribute('csp_account');
  }
  public set cspAccount(value: string) {
    this._cspAccount = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cspAccountInput() {
    return this._cspAccount;
  }

  // csp_type - computed: true, optional: false, required: false
  public get cspType() {
    return this.getStringAttribute('csp_type');
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

  // storage_upload_path - computed: false, optional: true, required: false
  private _storageUploadPath?: string; 
  public get storageUploadPath() {
    return this.getStringAttribute('storage_upload_path');
  }
  public set storageUploadPath(value: string) {
    this._storageUploadPath = value;
  }
  public resetStorageUploadPath() {
    this._storageUploadPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageUploadPathInput() {
    return this._storageUploadPath;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure_blob_container_name: cdktf.stringToTerraform(this._azureBlobContainerName),
      azure_storage_access_key: cdktf.stringToTerraform(this._azureStorageAccessKey),
      azure_storage_accnt_name: cdktf.stringToTerraform(this._azureStorageAccntName),
      csp_account: cdktf.stringToTerraform(this._cspAccount),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      storage_upload_path: cdktf.stringToTerraform(this._storageUploadPath),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      csp_account: {
        value: cdktf.stringToHclTerraform(this._cspAccount),
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
      storage_upload_path: {
        value: cdktf.stringToHclTerraform(this._storageUploadPath),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
