// https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/azure_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataCiphertrustAzureKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Azure key identifier. Can be used alone to identify the key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/azure_key#azure_key_id DataCiphertrustAzureKey#azure_key_id}
  */
  readonly azureKeyId?: string;
  /**
  * Name of the Azure vault containing the key in the format of vault_name::subscription_id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/azure_key#key_vault DataCiphertrustAzureKey#key_vault}
  */
  readonly keyVault?: string;
  /**
  * Key name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/azure_key#name DataCiphertrustAzureKey#name}
  */
  readonly name?: string;
  /**
  * Key version. Set to -1 to retrieve the latest version
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/azure_key#version DataCiphertrustAzureKey#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/azure_key ciphertrust_azure_key}
*/
export class DataCiphertrustAzureKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "ciphertrust_azure_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataCiphertrustAzureKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataCiphertrustAzureKey to import
  * @param importFromId The id of the existing DataCiphertrustAzureKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/azure_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataCiphertrustAzureKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "ciphertrust_azure_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/thalesgroup/ciphertrust/0.11.3/docs/data-sources/azure_key ciphertrust_azure_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataCiphertrustAzureKeyConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataCiphertrustAzureKeyConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'ciphertrust_azure_key',
      terraformGeneratorMetadata: {
        providerName: 'ciphertrust',
        providerVersion: '0.11.3'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._azureKeyId = config.azureKeyId;
    this._keyVault = config.keyVault;
    this._name = config.name;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // activation_date - computed: true, optional: false, required: false
  public get activationDate() {
    return this.getStringAttribute('activation_date');
  }

  // azure_key_id - computed: true, optional: true, required: false
  private _azureKeyId?: string; 
  public get azureKeyId() {
    return this.getStringAttribute('azure_key_id');
  }
  public set azureKeyId(value: string) {
    this._azureKeyId = value;
  }
  public resetAzureKeyId() {
    this._azureKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azureKeyIdInput() {
    return this._azureKeyId;
  }

  // backup - computed: true, optional: false, required: false
  public get backup() {
    return this.getStringAttribute('backup');
  }

  // backup_at - computed: true, optional: false, required: false
  public get backupAt() {
    return this.getStringAttribute('backup_at');
  }

  // cloud_name - computed: true, optional: false, required: false
  public get cloudName() {
    return this.getStringAttribute('cloud_name');
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // curve - computed: true, optional: false, required: false
  public get curve() {
    return this.getStringAttribute('curve');
  }

  // deleted - computed: true, optional: false, required: false
  public get deleted() {
    return this.getBooleanAttribute('deleted');
  }

  // enabled - computed: true, optional: false, required: false
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }

  // expiration_date - computed: true, optional: false, required: false
  public get expirationDate() {
    return this.getStringAttribute('expiration_date');
  }

  // exportable - computed: true, optional: false, required: false
  public get exportable() {
    return this.getBooleanAttribute('exportable');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // key_id - computed: true, optional: false, required: false
  public get keyId() {
    return this.getStringAttribute('key_id');
  }

  // key_material_origin - computed: true, optional: false, required: false
  public get keyMaterialOrigin() {
    return this.getStringAttribute('key_material_origin');
  }

  // key_ops - computed: true, optional: false, required: false
  public get keyOps() {
    return this.getListAttribute('key_ops');
  }

  // key_size - computed: true, optional: false, required: false
  public get keySize() {
    return this.getNumberAttribute('key_size');
  }

  // key_soft_deleted_in_azure - computed: true, optional: false, required: false
  public get keySoftDeletedInAzure() {
    return this.getBooleanAttribute('key_soft_deleted_in_azure');
  }

  // key_type - computed: true, optional: false, required: false
  public get keyType() {
    return this.getStringAttribute('key_type');
  }

  // key_vault - computed: true, optional: true, required: false
  private _keyVault?: string; 
  public get keyVault() {
    return this.getStringAttribute('key_vault');
  }
  public set keyVault(value: string) {
    this._keyVault = value;
  }
  public resetKeyVault() {
    this._keyVault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyVaultInput() {
    return this._keyVault;
  }

  // key_vault_id - computed: true, optional: false, required: false
  public get keyVaultId() {
    return this.getStringAttribute('key_vault_id');
  }

  // labels - computed: true, optional: false, required: false
  private _labels = new cdktf.StringMap(this, "labels");
  public get labels() {
    return this._labels;
  }

  // local_key_id - computed: true, optional: false, required: false
  public get localKeyId() {
    return this.getStringAttribute('local_key_id');
  }

  // local_key_name - computed: true, optional: false, required: false
  public get localKeyName() {
    return this.getStringAttribute('local_key_name');
  }

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // recovery_level - computed: true, optional: false, required: false
  public get recoveryLevel() {
    return this.getStringAttribute('recovery_level');
  }

  // region - computed: true, optional: false, required: false
  public get region() {
    return this.getStringAttribute('region');
  }

  // release_policy - computed: true, optional: false, required: false
  public get releasePolicy() {
    return this.getStringAttribute('release_policy');
  }

  // soft_delete_enabled - computed: true, optional: false, required: false
  public get softDeleteEnabled() {
    return this.getBooleanAttribute('soft_delete_enabled');
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // synced_at - computed: true, optional: false, required: false
  public get syncedAt() {
    return this.getStringAttribute('synced_at');
  }

  // tags - computed: true, optional: false, required: false
  private _tags = new cdktf.StringMap(this, "tags");
  public get tags() {
    return this._tags;
  }

  // tenant - computed: true, optional: false, required: false
  public get tenant() {
    return this.getStringAttribute('tenant');
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // version_count - computed: true, optional: false, required: false
  public get versionCount() {
    return this.getNumberAttribute('version_count');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      azure_key_id: cdktf.stringToTerraform(this._azureKeyId),
      key_vault: cdktf.stringToTerraform(this._keyVault),
      name: cdktf.stringToTerraform(this._name),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      azure_key_id: {
        value: cdktf.stringToHclTerraform(this._azureKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      key_vault: {
        value: cdktf.stringToHclTerraform(this._keyVault),
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
      version: {
        value: cdktf.stringToHclTerraform(this._version),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
