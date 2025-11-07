// https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/antivirus_settings
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AntivirusSettingsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/antivirus_settings#cache_clean_result AntivirusSettings#cache_clean_result}
  */
  readonly cacheCleanResult?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/antivirus_settings#cache_infected_result AntivirusSettings#cache_infected_result}
  */
  readonly cacheInfectedResult?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/antivirus_settings#default_db AntivirusSettings#default_db}
  */
  readonly defaultDb?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/antivirus_settings#device_name AntivirusSettings#device_name}
  */
  readonly deviceName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/antivirus_settings#device_vdom AntivirusSettings#device_vdom}
  */
  readonly deviceVdom?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/antivirus_settings#grayware AntivirusSettings#grayware}
  */
  readonly grayware?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/antivirus_settings#id AntivirusSettings#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/antivirus_settings#machine_learning_detection AntivirusSettings#machine_learning_detection}
  */
  readonly machineLearningDetection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/antivirus_settings#override_timeout AntivirusSettings#override_timeout}
  */
  readonly overrideTimeout?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/antivirus_settings#use_extreme_db AntivirusSettings#use_extreme_db}
  */
  readonly useExtremeDb?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/antivirus_settings fmgdevice_antivirus_settings}
*/
export class AntivirusSettings extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "fmgdevice_antivirus_settings";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AntivirusSettings resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AntivirusSettings to import
  * @param importFromId The id of the existing AntivirusSettings that should be imported. Refer to the {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/antivirus_settings#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AntivirusSettings to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "fmgdevice_antivirus_settings", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/fortinetdev/fmgdevice/1.2.1/docs/resources/antivirus_settings fmgdevice_antivirus_settings} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AntivirusSettingsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: AntivirusSettingsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'fmgdevice_antivirus_settings',
      terraformGeneratorMetadata: {
        providerName: 'fmgdevice',
        providerVersion: '1.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cacheCleanResult = config.cacheCleanResult;
    this._cacheInfectedResult = config.cacheInfectedResult;
    this._defaultDb = config.defaultDb;
    this._deviceName = config.deviceName;
    this._deviceVdom = config.deviceVdom;
    this._grayware = config.grayware;
    this._id = config.id;
    this._machineLearningDetection = config.machineLearningDetection;
    this._overrideTimeout = config.overrideTimeout;
    this._useExtremeDb = config.useExtremeDb;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cache_clean_result - computed: false, optional: true, required: false
  private _cacheCleanResult?: string; 
  public get cacheCleanResult() {
    return this.getStringAttribute('cache_clean_result');
  }
  public set cacheCleanResult(value: string) {
    this._cacheCleanResult = value;
  }
  public resetCacheCleanResult() {
    this._cacheCleanResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheCleanResultInput() {
    return this._cacheCleanResult;
  }

  // cache_infected_result - computed: true, optional: true, required: false
  private _cacheInfectedResult?: string; 
  public get cacheInfectedResult() {
    return this.getStringAttribute('cache_infected_result');
  }
  public set cacheInfectedResult(value: string) {
    this._cacheInfectedResult = value;
  }
  public resetCacheInfectedResult() {
    this._cacheInfectedResult = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cacheInfectedResultInput() {
    return this._cacheInfectedResult;
  }

  // default_db - computed: false, optional: true, required: false
  private _defaultDb?: string; 
  public get defaultDb() {
    return this.getStringAttribute('default_db');
  }
  public set defaultDb(value: string) {
    this._defaultDb = value;
  }
  public resetDefaultDb() {
    this._defaultDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultDbInput() {
    return this._defaultDb;
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

  // device_vdom - computed: true, optional: true, required: false
  private _deviceVdom?: string; 
  public get deviceVdom() {
    return this.getStringAttribute('device_vdom');
  }
  public set deviceVdom(value: string) {
    this._deviceVdom = value;
  }
  public resetDeviceVdom() {
    this._deviceVdom = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceVdomInput() {
    return this._deviceVdom;
  }

  // grayware - computed: true, optional: true, required: false
  private _grayware?: string; 
  public get grayware() {
    return this.getStringAttribute('grayware');
  }
  public set grayware(value: string) {
    this._grayware = value;
  }
  public resetGrayware() {
    this._grayware = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get graywareInput() {
    return this._grayware;
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

  // machine_learning_detection - computed: true, optional: true, required: false
  private _machineLearningDetection?: string; 
  public get machineLearningDetection() {
    return this.getStringAttribute('machine_learning_detection');
  }
  public set machineLearningDetection(value: string) {
    this._machineLearningDetection = value;
  }
  public resetMachineLearningDetection() {
    this._machineLearningDetection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get machineLearningDetectionInput() {
    return this._machineLearningDetection;
  }

  // override_timeout - computed: false, optional: true, required: false
  private _overrideTimeout?: number; 
  public get overrideTimeout() {
    return this.getNumberAttribute('override_timeout');
  }
  public set overrideTimeout(value: number) {
    this._overrideTimeout = value;
  }
  public resetOverrideTimeout() {
    this._overrideTimeout = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideTimeoutInput() {
    return this._overrideTimeout;
  }

  // use_extreme_db - computed: true, optional: true, required: false
  private _useExtremeDb?: string; 
  public get useExtremeDb() {
    return this.getStringAttribute('use_extreme_db');
  }
  public set useExtremeDb(value: string) {
    this._useExtremeDb = value;
  }
  public resetUseExtremeDb() {
    this._useExtremeDb = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useExtremeDbInput() {
    return this._useExtremeDb;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cache_clean_result: cdktf.stringToTerraform(this._cacheCleanResult),
      cache_infected_result: cdktf.stringToTerraform(this._cacheInfectedResult),
      default_db: cdktf.stringToTerraform(this._defaultDb),
      device_name: cdktf.stringToTerraform(this._deviceName),
      device_vdom: cdktf.stringToTerraform(this._deviceVdom),
      grayware: cdktf.stringToTerraform(this._grayware),
      id: cdktf.stringToTerraform(this._id),
      machine_learning_detection: cdktf.stringToTerraform(this._machineLearningDetection),
      override_timeout: cdktf.numberToTerraform(this._overrideTimeout),
      use_extreme_db: cdktf.stringToTerraform(this._useExtremeDb),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cache_clean_result: {
        value: cdktf.stringToHclTerraform(this._cacheCleanResult),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cache_infected_result: {
        value: cdktf.stringToHclTerraform(this._cacheInfectedResult),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      default_db: {
        value: cdktf.stringToHclTerraform(this._defaultDb),
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
      device_vdom: {
        value: cdktf.stringToHclTerraform(this._deviceVdom),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      grayware: {
        value: cdktf.stringToHclTerraform(this._grayware),
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
      machine_learning_detection: {
        value: cdktf.stringToHclTerraform(this._machineLearningDetection),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      override_timeout: {
        value: cdktf.numberToHclTerraform(this._overrideTimeout),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_extreme_db: {
        value: cdktf.stringToHclTerraform(this._useExtremeDb),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
