// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/azure_storage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AzureStorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the access key id for the Azure Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/azure_storage#access_key_id AzureStorage#access_key_id}
  */
  readonly accessKeyId?: string;
  /**
  * Specifies the Account name for the Azure Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/azure_storage#account_name AzureStorage#account_name}
  */
  readonly accountName?: string;
  /**
  * Specifies the company id to which the created Azure storage should be associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/azure_storage#company_id AzureStorage#company_id}
  */
  readonly companyId?: number;
  /**
  * Specifies the container name user for the Azure Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/azure_storage#container AzureStorage#container}
  */
  readonly container: string;
  /**
  * Specifies the saved creation name for creating Azure Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/azure_storage#credentials_name AzureStorage#credentials_name}
  */
  readonly credentialsName?: string;
  /**
  * Specifies the Deduplication path for the Azure Storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/azure_storage#ddb_location AzureStorage#ddb_location}
  */
  readonly ddbLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/azure_storage#id AzureStorage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the Media agent used for the Azure Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/azure_storage#mediaagent AzureStorage#mediaagent}
  */
  readonly mediaagent: string;
  /**
  * Specifies the service host name for the Azure storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/azure_storage#service_host AzureStorage#service_host}
  */
  readonly serviceHost: string;
  /**
  * Specifies the Name of the Azure Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/azure_storage#storage_name AzureStorage#storage_name}
  */
  readonly storageName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/azure_storage commvault_azure_storage}
*/
export class AzureStorage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_azure_storage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AzureStorage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AzureStorage to import
  * @param importFromId The id of the existing AzureStorage that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/azure_storage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AzureStorage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_azure_storage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/azure_storage commvault_azure_storage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AzureStorageConfig
  */
  public constructor(scope: Construct, id: string, config: AzureStorageConfig) {
    super(scope, id, {
      terraformResourceType: 'commvault_azure_storage',
      terraformGeneratorMetadata: {
        providerName: 'commvault',
        providerVersion: '1.2.10',
        providerVersionConstraint: '1.2.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._accessKeyId = config.accessKeyId;
    this._accountName = config.accountName;
    this._companyId = config.companyId;
    this._container = config.container;
    this._credentialsName = config.credentialsName;
    this._ddbLocation = config.ddbLocation;
    this._id = config.id;
    this._mediaagent = config.mediaagent;
    this._serviceHost = config.serviceHost;
    this._storageName = config.storageName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // access_key_id - computed: false, optional: true, required: false
  private _accessKeyId?: string; 
  public get accessKeyId() {
    return this.getStringAttribute('access_key_id');
  }
  public set accessKeyId(value: string) {
    this._accessKeyId = value;
  }
  public resetAccessKeyId() {
    this._accessKeyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accessKeyIdInput() {
    return this._accessKeyId;
  }

  // account_name - computed: false, optional: true, required: false
  private _accountName?: string; 
  public get accountName() {
    return this.getStringAttribute('account_name');
  }
  public set accountName(value: string) {
    this._accountName = value;
  }
  public resetAccountName() {
    this._accountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get accountNameInput() {
    return this._accountName;
  }

  // company_id - computed: false, optional: true, required: false
  private _companyId?: number; 
  public get companyId() {
    return this.getNumberAttribute('company_id');
  }
  public set companyId(value: number) {
    this._companyId = value;
  }
  public resetCompanyId() {
    this._companyId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get companyIdInput() {
    return this._companyId;
  }

  // container - computed: false, optional: false, required: true
  private _container?: string; 
  public get container() {
    return this.getStringAttribute('container');
  }
  public set container(value: string) {
    this._container = value;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container;
  }

  // credentials_name - computed: false, optional: true, required: false
  private _credentialsName?: string; 
  public get credentialsName() {
    return this.getStringAttribute('credentials_name');
  }
  public set credentialsName(value: string) {
    this._credentialsName = value;
  }
  public resetCredentialsName() {
    this._credentialsName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get credentialsNameInput() {
    return this._credentialsName;
  }

  // ddb_location - computed: false, optional: true, required: false
  private _ddbLocation?: string; 
  public get ddbLocation() {
    return this.getStringAttribute('ddb_location');
  }
  public set ddbLocation(value: string) {
    this._ddbLocation = value;
  }
  public resetDdbLocation() {
    this._ddbLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ddbLocationInput() {
    return this._ddbLocation;
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

  // mediaagent - computed: false, optional: false, required: true
  private _mediaagent?: string; 
  public get mediaagent() {
    return this.getStringAttribute('mediaagent');
  }
  public set mediaagent(value: string) {
    this._mediaagent = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mediaagentInput() {
    return this._mediaagent;
  }

  // service_host - computed: false, optional: false, required: true
  private _serviceHost?: string; 
  public get serviceHost() {
    return this.getStringAttribute('service_host');
  }
  public set serviceHost(value: string) {
    this._serviceHost = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceHostInput() {
    return this._serviceHost;
  }

  // storage_name - computed: false, optional: false, required: true
  private _storageName?: string; 
  public get storageName() {
    return this.getStringAttribute('storage_name');
  }
  public set storageName(value: string) {
    this._storageName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get storageNameInput() {
    return this._storageName;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      access_key_id: cdktf.stringToTerraform(this._accessKeyId),
      account_name: cdktf.stringToTerraform(this._accountName),
      company_id: cdktf.numberToTerraform(this._companyId),
      container: cdktf.stringToTerraform(this._container),
      credentials_name: cdktf.stringToTerraform(this._credentialsName),
      ddb_location: cdktf.stringToTerraform(this._ddbLocation),
      id: cdktf.stringToTerraform(this._id),
      mediaagent: cdktf.stringToTerraform(this._mediaagent),
      service_host: cdktf.stringToTerraform(this._serviceHost),
      storage_name: cdktf.stringToTerraform(this._storageName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      access_key_id: {
        value: cdktf.stringToHclTerraform(this._accessKeyId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      account_name: {
        value: cdktf.stringToHclTerraform(this._accountName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      company_id: {
        value: cdktf.numberToHclTerraform(this._companyId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      container: {
        value: cdktf.stringToHclTerraform(this._container),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      credentials_name: {
        value: cdktf.stringToHclTerraform(this._credentialsName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ddb_location: {
        value: cdktf.stringToHclTerraform(this._ddbLocation),
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
      mediaagent: {
        value: cdktf.stringToHclTerraform(this._mediaagent),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_host: {
        value: cdktf.stringToHclTerraform(this._serviceHost),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      storage_name: {
        value: cdktf.stringToHclTerraform(this._storageName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
