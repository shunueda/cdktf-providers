// https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/database#container_profile Database#container_profile}
  */
  readonly containerProfile?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/database#container_size Database#container_size}
  */
  readonly containerSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/database#database_type Database#database_type}
  */
  readonly databaseType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/database#disk_size Database#disk_size}
  */
  readonly diskSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/database#enable_backups Database#enable_backups}
  */
  readonly enableBackups?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/database#env_id Database#env_id}
  */
  readonly envId: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/database#handle Database#handle}
  */
  readonly handle: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/database#id Database#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/database#iops Database#iops}
  */
  readonly iops?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/database#version Database#version}
  */
  readonly version?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/database aptible_database}
*/
export class Database extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aptible_database";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Database resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Database to import
  * @param importFromId The id of the existing Database that should be imported. Refer to the {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/database#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Database to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aptible_database", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aptible/aptible/0.9.19/docs/resources/database aptible_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'aptible_database',
      terraformGeneratorMetadata: {
        providerName: 'aptible',
        providerVersion: '0.9.19',
        providerVersionConstraint: '0.9.19'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._containerProfile = config.containerProfile;
    this._containerSize = config.containerSize;
    this._databaseType = config.databaseType;
    this._diskSize = config.diskSize;
    this._enableBackups = config.enableBackups;
    this._envId = config.envId;
    this._handle = config.handle;
    this._id = config.id;
    this._iops = config.iops;
    this._version = config.version;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // connection_urls - computed: true, optional: false, required: false
  public get connectionUrls() {
    return this.getListAttribute('connection_urls');
  }

  // container_profile - computed: false, optional: true, required: false
  private _containerProfile?: string; 
  public get containerProfile() {
    return this.getStringAttribute('container_profile');
  }
  public set containerProfile(value: string) {
    this._containerProfile = value;
  }
  public resetContainerProfile() {
    this._containerProfile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerProfileInput() {
    return this._containerProfile;
  }

  // container_size - computed: false, optional: true, required: false
  private _containerSize?: number; 
  public get containerSize() {
    return this.getNumberAttribute('container_size');
  }
  public set containerSize(value: number) {
    this._containerSize = value;
  }
  public resetContainerSize() {
    this._containerSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerSizeInput() {
    return this._containerSize;
  }

  // database_id - computed: true, optional: false, required: false
  public get databaseId() {
    return this.getNumberAttribute('database_id');
  }

  // database_image_id - computed: true, optional: false, required: false
  public get databaseImageId() {
    return this.getNumberAttribute('database_image_id');
  }

  // database_type - computed: false, optional: true, required: false
  private _databaseType?: string; 
  public get databaseType() {
    return this.getStringAttribute('database_type');
  }
  public set databaseType(value: string) {
    this._databaseType = value;
  }
  public resetDatabaseType() {
    this._databaseType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get databaseTypeInput() {
    return this._databaseType;
  }

  // default_connection_url - computed: true, optional: false, required: false
  public get defaultConnectionUrl() {
    return this.getStringAttribute('default_connection_url');
  }

  // disk_size - computed: false, optional: true, required: false
  private _diskSize?: number; 
  public get diskSize() {
    return this.getNumberAttribute('disk_size');
  }
  public set diskSize(value: number) {
    this._diskSize = value;
  }
  public resetDiskSize() {
    this._diskSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskSizeInput() {
    return this._diskSize;
  }

  // enable_backups - computed: false, optional: true, required: false
  private _enableBackups?: boolean | cdktf.IResolvable; 
  public get enableBackups() {
    return this.getBooleanAttribute('enable_backups');
  }
  public set enableBackups(value: boolean | cdktf.IResolvable) {
    this._enableBackups = value;
  }
  public resetEnableBackups() {
    this._enableBackups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableBackupsInput() {
    return this._enableBackups;
  }

  // env_id - computed: false, optional: false, required: true
  private _envId?: number; 
  public get envId() {
    return this.getNumberAttribute('env_id');
  }
  public set envId(value: number) {
    this._envId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get envIdInput() {
    return this._envId;
  }

  // handle - computed: false, optional: false, required: true
  private _handle?: string; 
  public get handle() {
    return this.getStringAttribute('handle');
  }
  public set handle(value: string) {
    this._handle = value;
  }
  // Temporarily expose input value. Use with caution.
  public get handleInput() {
    return this._handle;
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

  // iops - computed: false, optional: true, required: false
  private _iops?: number; 
  public get iops() {
    return this.getNumberAttribute('iops');
  }
  public set iops(value: number) {
    this._iops = value;
  }
  public resetIops() {
    this._iops = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get iopsInput() {
    return this._iops;
  }

  // version - computed: false, optional: true, required: false
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      container_profile: cdktf.stringToTerraform(this._containerProfile),
      container_size: cdktf.numberToTerraform(this._containerSize),
      database_type: cdktf.stringToTerraform(this._databaseType),
      disk_size: cdktf.numberToTerraform(this._diskSize),
      enable_backups: cdktf.booleanToTerraform(this._enableBackups),
      env_id: cdktf.numberToTerraform(this._envId),
      handle: cdktf.stringToTerraform(this._handle),
      id: cdktf.stringToTerraform(this._id),
      iops: cdktf.numberToTerraform(this._iops),
      version: cdktf.stringToTerraform(this._version),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      container_profile: {
        value: cdktf.stringToHclTerraform(this._containerProfile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      container_size: {
        value: cdktf.numberToHclTerraform(this._containerSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      database_type: {
        value: cdktf.stringToHclTerraform(this._databaseType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_size: {
        value: cdktf.numberToHclTerraform(this._diskSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      enable_backups: {
        value: cdktf.booleanToHclTerraform(this._enableBackups),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      env_id: {
        value: cdktf.numberToHclTerraform(this._envId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      handle: {
        value: cdktf.stringToHclTerraform(this._handle),
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
      iops: {
        value: cdktf.numberToHclTerraform(this._iops),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
