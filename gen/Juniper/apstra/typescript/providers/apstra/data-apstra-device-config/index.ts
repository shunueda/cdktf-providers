// https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/device_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataApstraDeviceConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * Apstra ID for the System (Managed Device), as found in Devices -> Managed Devices in the GUI.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/device_config#system_id DataApstraDeviceConfig#system_id}
  */
  readonly systemId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/device_config apstra_device_config}
*/
export class DataApstraDeviceConfig extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "apstra_device_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataApstraDeviceConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataApstraDeviceConfig to import
  * @param importFromId The id of the existing DataApstraDeviceConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/device_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataApstraDeviceConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "apstra_device_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/juniper/apstra/0.95.0/docs/data-sources/device_config apstra_device_config} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataApstraDeviceConfigConfig
  */
  public constructor(scope: Construct, id: string, config: DataApstraDeviceConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'apstra_device_config',
      terraformGeneratorMetadata: {
        providerName: 'apstra',
        providerVersion: '0.95.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._systemId = config.systemId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // aos_config_version - computed: true, optional: false, required: false
  public get aosConfigVersion() {
    return this.getNumberAttribute('aos_config_version');
  }

  // config_actual - computed: true, optional: false, required: false
  public get configActual() {
    return this.getStringAttribute('config_actual');
  }

  // config_expected - computed: true, optional: false, required: false
  public get configExpected() {
    return this.getStringAttribute('config_expected');
  }

  // contiguous_failures - computed: true, optional: false, required: false
  public get contiguousFailures() {
    return this.getNumberAttribute('contiguous_failures');
  }

  // deviated - computed: true, optional: false, required: false
  public get deviated() {
    return this.getBooleanAttribute('deviated');
  }

  // error_message - computed: true, optional: false, required: false
  public get errorMessage() {
    return this.getStringAttribute('error_message');
  }

  // last_boot_time - computed: true, optional: false, required: false
  public get lastBootTime() {
    return this.getStringAttribute('last_boot_time');
  }

  // system_id - computed: false, optional: false, required: true
  private _systemId?: string; 
  public get systemId() {
    return this.getStringAttribute('system_id');
  }
  public set systemId(value: string) {
    this._systemId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get systemIdInput() {
    return this._systemId;
  }

  // user_full_config_deploy_version - computed: true, optional: false, required: false
  public get userFullConfigDeployVersion() {
    return this.getNumberAttribute('user_full_config_deploy_version');
  }

  // user_golden_config_update_version - computed: true, optional: false, required: false
  public get userGoldenConfigUpdateVersion() {
    return this.getNumberAttribute('user_golden_config_update_version');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      system_id: cdktf.stringToTerraform(this._systemId),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      system_id: {
        value: cdktf.stringToHclTerraform(this._systemId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
