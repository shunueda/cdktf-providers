// https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/disk_storage
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DiskStorageConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the full path to the storage location.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/disk_storage#backup_location DiskStorage#backup_location}
  */
  readonly backupLocation: string;
  /**
  * Specifies the company id to which the created disk storage should be associated with.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/disk_storage#company_id DiskStorage#company_id}
  */
  readonly companyId?: number;
  /**
  * Specifies the Deduplication path for the storage
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/disk_storage#ddb_location DiskStorage#ddb_location}
  */
  readonly ddbLocation?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/disk_storage#id DiskStorage#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Specifies the Media agent used for the Disk Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/disk_storage#mediaagent DiskStorage#mediaagent}
  */
  readonly mediaagent: string;
  /**
  * Specifies the Name of the Disk Storage.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/disk_storage#storage_name DiskStorage#storage_name}
  */
  readonly storageName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/disk_storage commvault_disk_storage}
*/
export class DiskStorage extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "commvault_disk_storage";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DiskStorage resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DiskStorage to import
  * @param importFromId The id of the existing DiskStorage that should be imported. Refer to the {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/disk_storage#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DiskStorage to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "commvault_disk_storage", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/commvault/commvault/1.2.10/docs/resources/disk_storage commvault_disk_storage} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DiskStorageConfig
  */
  public constructor(scope: Construct, id: string, config: DiskStorageConfig) {
    super(scope, id, {
      terraformResourceType: 'commvault_disk_storage',
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
    this._backupLocation = config.backupLocation;
    this._companyId = config.companyId;
    this._ddbLocation = config.ddbLocation;
    this._id = config.id;
    this._mediaagent = config.mediaagent;
    this._storageName = config.storageName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // backup_location - computed: false, optional: false, required: true
  private _backupLocation?: string; 
  public get backupLocation() {
    return this.getStringAttribute('backup_location');
  }
  public set backupLocation(value: string) {
    this._backupLocation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get backupLocationInput() {
    return this._backupLocation;
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
      backup_location: cdktf.stringToTerraform(this._backupLocation),
      company_id: cdktf.numberToTerraform(this._companyId),
      ddb_location: cdktf.stringToTerraform(this._ddbLocation),
      id: cdktf.stringToTerraform(this._id),
      mediaagent: cdktf.stringToTerraform(this._mediaagent),
      storage_name: cdktf.stringToTerraform(this._storageName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      backup_location: {
        value: cdktf.stringToHclTerraform(this._backupLocation),
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
