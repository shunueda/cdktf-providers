// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/logging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxrLoggingConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/logging#device DataIosxrLogging#device}
  */
  readonly device?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/logging iosxr_logging}
*/
export class DataIosxrLogging extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_logging";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxrLogging resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxrLogging to import
  * @param importFromId The id of the existing DataIosxrLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/logging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxrLogging to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_logging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/data-sources/logging iosxr_logging} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxrLoggingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxrLoggingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxr_logging',
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

  // buffered_level - computed: true, optional: false, required: false
  public get bufferedLevel() {
    return this.getStringAttribute('buffered_level');
  }

  // buffered_logging_buffer_size - computed: true, optional: false, required: false
  public get bufferedLoggingBufferSize() {
    return this.getNumberAttribute('buffered_logging_buffer_size');
  }

  // console - computed: true, optional: false, required: false
  public get console() {
    return this.getStringAttribute('console');
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

  // events_display_location - computed: true, optional: false, required: false
  public get eventsDisplayLocation() {
    return this.getBooleanAttribute('events_display_location');
  }

  // events_level - computed: true, optional: false, required: false
  public get eventsLevel() {
    return this.getStringAttribute('events_level');
  }

  // facility_level - computed: true, optional: false, required: false
  public get facilityLevel() {
    return this.getStringAttribute('facility_level');
  }

  // hostnameprefix - computed: true, optional: false, required: false
  public get hostnameprefix() {
    return this.getStringAttribute('hostnameprefix');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_dscp - computed: true, optional: false, required: false
  public get ipv4Dscp() {
    return this.getStringAttribute('ipv4_dscp');
  }

  // monitor - computed: true, optional: false, required: false
  public get monitor() {
    return this.getStringAttribute('monitor');
  }

  // suppress_duplicates - computed: true, optional: false, required: false
  public get suppressDuplicates() {
    return this.getBooleanAttribute('suppress_duplicates');
  }

  // trap - computed: true, optional: false, required: false
  public get trap() {
    return this.getStringAttribute('trap');
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
