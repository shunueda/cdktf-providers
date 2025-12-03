// https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/azure_storage_account_key
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataDuplocloudAzureStorageAccountKeyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/azure_storage_account_key#id DataDuplocloudAzureStorageAccountKey#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/azure_storage_account_key#storage_account_name DataDuplocloudAzureStorageAccountKey#storage_account_name}
  */
  readonly storageAccountName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/azure_storage_account_key#tenant_id DataDuplocloudAzureStorageAccountKey#tenant_id}
  */
  readonly tenantId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/azure_storage_account_key duplocloud_azure_storage_account_key}
*/
export class DataDuplocloudAzureStorageAccountKey extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "duplocloud_azure_storage_account_key";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataDuplocloudAzureStorageAccountKey resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataDuplocloudAzureStorageAccountKey to import
  * @param importFromId The id of the existing DataDuplocloudAzureStorageAccountKey that should be imported. Refer to the {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/azure_storage_account_key#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataDuplocloudAzureStorageAccountKey to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "duplocloud_azure_storage_account_key", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/duplocloud/duplocloud/0.11.30/docs/data-sources/azure_storage_account_key duplocloud_azure_storage_account_key} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataDuplocloudAzureStorageAccountKeyConfig
  */
  public constructor(scope: Construct, id: string, config: DataDuplocloudAzureStorageAccountKeyConfig) {
    super(scope, id, {
      terraformResourceType: 'duplocloud_azure_storage_account_key',
      terraformGeneratorMetadata: {
        providerName: 'duplocloud',
        providerVersion: '0.11.30',
        providerVersionConstraint: '0.11.30'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._storageAccountName = config.storageAccountName;
    this._tenantId = config.tenantId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // key_name - computed: true, optional: false, required: false
  public get keyName() {
    return this.getStringAttribute('key_name');
  }

  // key_value - computed: true, optional: false, required: false
  public get keyValue() {
    return this.getStringAttribute('key_value');
  }

  // storage_account_name - computed: false, optional: false, required: true
  private _storageAccountName?: string; 
  public get storageAccountName() {
    return this.getStringAttribute('storage_account_name');
  }
  public set storageAccountName(value: string) {
    this._storageAccountName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageAccountNameInput() {
    return this._storageAccountName;
  }

  // tenant_id - computed: false, optional: false, required: true
  private _tenantId?: string; 
  public get tenantId() {
    return this.getStringAttribute('tenant_id');
  }
  public set tenantId(value: string) {
    this._tenantId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantIdInput() {
    return this._tenantId;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      storage_account_name: cdktf.stringToTerraform(this._storageAccountName),
      tenant_id: cdktf.stringToTerraform(this._tenantId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_account_name: {
        value: cdktf.stringToHclTerraform(this._storageAccountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_id: {
        value: cdktf.stringToHclTerraform(this._tenantId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
