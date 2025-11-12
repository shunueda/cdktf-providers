// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/service_timestamps
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrServiceTimestampsConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/service_timestamps#device DataIosxrServiceTimestamps#device}
  */
  readonly device?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/service_timestamps iosxr_service_timestamps}
*/
export class DataIosxrServiceTimestamps extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_service_timestamps";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrServiceTimestamps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrServiceTimestamps to import
  * @param importFromId The id of the existing DataIosxrServiceTimestamps that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/service_timestamps#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrServiceTimestamps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_service_timestamps", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/service_timestamps iosxr_service_timestamps} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrServiceTimestampsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxrServiceTimestampsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_service_timestamps',
      terraformGeneratorMetadata: {
        providerName: 'iosxr',
        providerVersion: '0.6.0',
        providerVersionConstraint: '0.6.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._device = config.device;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // debug_datetime_localtime - computed: true, optional: false, required: false
  public get debugDatetimeLocaltime() {
    return this.getBooleanAttribute('debug_datetime_localtime');
  }

  // debug_datetime_localtime_only - computed: true, optional: false, required: false
  public get debugDatetimeLocaltimeOnly() {
    return this.getBooleanAttribute('debug_datetime_localtime_only');
  }

  // debug_datetime_msec - computed: true, optional: false, required: false
  public get debugDatetimeMsec() {
    return this.getBooleanAttribute('debug_datetime_msec');
  }

  // debug_datetime_show_timezone - computed: true, optional: false, required: false
  public get debugDatetimeShowTimezone() {
    return this.getBooleanAttribute('debug_datetime_show_timezone');
  }

  // debug_datetime_year - computed: true, optional: false, required: false
  public get debugDatetimeYear() {
    return this.getBooleanAttribute('debug_datetime_year');
  }

  // debug_disable - computed: true, optional: false, required: false
  public get debugDisable() {
    return this.getBooleanAttribute('debug_disable');
  }

  // debug_uptime - computed: true, optional: false, required: false
  public get debugUptime() {
    return this.getBooleanAttribute('debug_uptime');
  }

  // device - computed: false, optional: true, required: false
  private _device?: string; 
  public get device() {
    return this.getStringAttribute('device');
  }
  public set device(value: string) {
    this._device = value;
  }
  public resetDevice() {
    this._device = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deviceInput() {
    return this._device;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // log_datetime_localtime - computed: true, optional: false, required: false
  public get logDatetimeLocaltime() {
    return this.getBooleanAttribute('log_datetime_localtime');
  }

  // log_datetime_localtime_only - computed: true, optional: false, required: false
  public get logDatetimeLocaltimeOnly() {
    return this.getBooleanAttribute('log_datetime_localtime_only');
  }

  // log_datetime_msec - computed: true, optional: false, required: false
  public get logDatetimeMsec() {
    return this.getBooleanAttribute('log_datetime_msec');
  }

  // log_datetime_show_timezone - computed: true, optional: false, required: false
  public get logDatetimeShowTimezone() {
    return this.getBooleanAttribute('log_datetime_show_timezone');
  }

  // log_datetime_year - computed: true, optional: false, required: false
  public get logDatetimeYear() {
    return this.getBooleanAttribute('log_datetime_year');
  }

  // log_disable - computed: true, optional: false, required: false
  public get logDisable() {
    return this.getBooleanAttribute('log_disable');
  }

  // log_uptime - computed: true, optional: false, required: false
  public get logUptime() {
    return this.getBooleanAttribute('log_uptime');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      device: cdktf.stringToTerraform(this._device),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
