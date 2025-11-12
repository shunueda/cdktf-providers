// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DlpSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_settings#cache_mem_percent DlpSettings#cache_mem_percent}
  */
  readonly cacheMemPercent?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_settings#chunk_size DlpSettings#chunk_size}
  */
  readonly chunkSize?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_settings#config_builder_timeout DlpSettings#config_builder_timeout}
  */
  readonly configBuilderTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_settings#db_mode DlpSettings#db_mode}
  */
  readonly dbMode?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_settings#device_name DlpSettings#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_settings#id DlpSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_settings#size DlpSettings#size}
  */
  readonly size?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_settings#storage_device DlpSettings#storage_device}
  */
  readonly storageDevice?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_settings fmgdevice_dlp_settings}
*/
export class DlpSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_dlp_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DlpSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DlpSettings to import
  * @param importFromId The id of the existing DlpSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DlpSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_dlp_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/dlp_settings fmgdevice_dlp_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DlpSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DlpSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_dlp_settings',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1',
        providerVersionConstraint: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacheMemPercent = config.cacheMemPercent;
    this._chunkSize = config.chunkSize;
    this._configBuilderTimeout = config.configBuilderTimeout;
    this._dbMode = config.dbMode;
    this._deviceName = config.deviceName;
    this._id = config.id;
    this._size = config.size;
    this._storageDevice = config.storageDevice;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_mem_percent - computed: true, optional: true, required: false
  private _cacheMemPercent?: number; 
  public get cacheMemPercent() {
    return this.getNumberAttribute('cache_mem_percent');
  }
  public set cacheMemPercent(value: number) {
    this._cacheMemPercent = value;
  }
  public resetCacheMemPercent() {
    this._cacheMemPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheMemPercentInput() {
    return this._cacheMemPercent;
  }

  // chunk_size - computed: true, optional: true, required: false
  private _chunkSize?: number; 
  public get chunkSize() {
    return this.getNumberAttribute('chunk_size');
  }
  public set chunkSize(value: number) {
    this._chunkSize = value;
  }
  public resetChunkSize() {
    this._chunkSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chunkSizeInput() {
    return this._chunkSize;
  }

  // config_builder_timeout - computed: true, optional: true, required: false
  private _configBuilderTimeout?: number; 
  public get configBuilderTimeout() {
    return this.getNumberAttribute('config_builder_timeout');
  }
  public set configBuilderTimeout(value: number) {
    this._configBuilderTimeout = value;
  }
  public resetConfigBuilderTimeout() {
    this._configBuilderTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configBuilderTimeoutInput() {
    return this._configBuilderTimeout;
  }

  // db_mode - computed: true, optional: true, required: false
  private _dbMode?: string; 
  public get dbMode() {
    return this.getStringAttribute('db_mode');
  }
  public set dbMode(value: string) {
    this._dbMode = value;
  }
  public resetDbMode() {
    this._dbMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dbModeInput() {
    return this._dbMode;
  }

  // device_name - computed: true, optional: true, required: false
  private _deviceName?: string; 
  public get deviceName() {
    return this.getStringAttribute('device_name');
  }
  public set deviceName(value: string) {
    this._deviceName = value;
  }
  public resetDeviceName() {
    this._deviceName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceNameInput() {
    return this._deviceName;
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

  // size - computed: true, optional: true, required: false
  private _size?: number; 
  public get size() {
    return this.getNumberAttribute('size');
  }
  public set size(value: number) {
    this._size = value;
  }
  public resetSize() {
    this._size = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sizeInput() {
    return this._size;
  }

  // storage_device - computed: false, optional: true, required: false
  private _storageDevice?: string; 
  public get storageDevice() {
    return this.getStringAttribute('storage_device');
  }
  public set storageDevice(value: string) {
    this._storageDevice = value;
  }
  public resetStorageDevice() {
    this._storageDevice = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageDeviceInput() {
    return this._storageDevice;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_mem_percent: cdktf.numberToTerraform(this._cacheMemPercent),
      chunk_size: cdktf.numberToTerraform(this._chunkSize),
      config_builder_timeout: cdktf.numberToTerraform(this._configBuilderTimeout),
      db_mode: cdktf.stringToTerraform(this._dbMode),
      device_name: cdktf.stringToTerraform(this._deviceName),
      id: cdktf.stringToTerraform(this._id),
      size: cdktf.numberToTerraform(this._size),
      storage_device: cdktf.stringToTerraform(this._storageDevice),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_mem_percent: {
        value: cdktf.numberToHclTerraform(this._cacheMemPercent),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      chunk_size: {
        value: cdktf.numberToHclTerraform(this._chunkSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      config_builder_timeout: {
        value: cdktf.numberToHclTerraform(this._configBuilderTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      db_mode: {
        value: cdktf.stringToHclTerraform(this._dbMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device_name: {
        value: cdktf.stringToHclTerraform(this._deviceName),
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
      size: {
        value: cdktf.numberToHclTerraform(this._size),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      storage_device: {
        value: cdktf.stringToHclTerraform(this._storageDevice),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
