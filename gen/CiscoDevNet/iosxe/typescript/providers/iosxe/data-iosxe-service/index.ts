// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/data-sources/service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataIosxeServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/data-sources/service#device DataIosxeService#device}
  */
  readonly device?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/data-sources/service iosxe_service}
*/
export class DataIosxeService extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataIosxeService resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataIosxeService to import
  * @param importFromId The id of the existing DataIosxeService that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/data-sources/service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataIosxeService to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/data-sources/service iosxe_service} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataIosxeServiceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataIosxeServiceConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'iosxe_service',
      terraformGeneratorMetadata: {
        providerName: 'iosxe',
        providerVersion: '0.10.0',
        providerVersionConstraint: '0.10.0'
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

  // call_home - computed: true, optional: false, required: false
  public get callHome() {
    return this.getBooleanAttribute('call_home');
  }

  // compress_config - computed: true, optional: false, required: false
  public get compressConfig() {
    return this.getBooleanAttribute('compress_config');
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

  // dhcp - computed: true, optional: false, required: false
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }

  // dhcp_config - computed: true, optional: false, required: false
  public get dhcpConfig() {
    return this.getBooleanAttribute('dhcp_config');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pad - computed: true, optional: false, required: false
  public get pad() {
    return this.getBooleanAttribute('pad');
  }

  // password_encryption - computed: true, optional: false, required: false
  public get passwordEncryption() {
    return this.getBooleanAttribute('password_encryption');
  }

  // password_recovery - computed: true, optional: false, required: false
  public get passwordRecovery() {
    return this.getBooleanAttribute('password_recovery');
  }

  // sequence_numbers - computed: true, optional: false, required: false
  public get sequenceNumbers() {
    return this.getBooleanAttribute('sequence_numbers');
  }

  // tcp_keepalives_in - computed: true, optional: false, required: false
  public get tcpKeepalivesIn() {
    return this.getBooleanAttribute('tcp_keepalives_in');
  }

  // tcp_keepalives_out - computed: true, optional: false, required: false
  public get tcpKeepalivesOut() {
    return this.getBooleanAttribute('tcp_keepalives_out');
  }

  // timestamps - computed: true, optional: false, required: false
  public get timestamps() {
    return this.getBooleanAttribute('timestamps');
  }

  // timestamps_debug - computed: true, optional: false, required: false
  public get timestampsDebug() {
    return this.getBooleanAttribute('timestamps_debug');
  }

  // timestamps_debug_datetime - computed: true, optional: false, required: false
  public get timestampsDebugDatetime() {
    return this.getBooleanAttribute('timestamps_debug_datetime');
  }

  // timestamps_debug_datetime_localtime - computed: true, optional: false, required: false
  public get timestampsDebugDatetimeLocaltime() {
    return this.getBooleanAttribute('timestamps_debug_datetime_localtime');
  }

  // timestamps_debug_datetime_msec - computed: true, optional: false, required: false
  public get timestampsDebugDatetimeMsec() {
    return this.getBooleanAttribute('timestamps_debug_datetime_msec');
  }

  // timestamps_debug_datetime_show_timezone - computed: true, optional: false, required: false
  public get timestampsDebugDatetimeShowTimezone() {
    return this.getBooleanAttribute('timestamps_debug_datetime_show_timezone');
  }

  // timestamps_debug_datetime_year - computed: true, optional: false, required: false
  public get timestampsDebugDatetimeYear() {
    return this.getBooleanAttribute('timestamps_debug_datetime_year');
  }

  // timestamps_debug_uptime - computed: true, optional: false, required: false
  public get timestampsDebugUptime() {
    return this.getBooleanAttribute('timestamps_debug_uptime');
  }

  // timestamps_log - computed: true, optional: false, required: false
  public get timestampsLog() {
    return this.getBooleanAttribute('timestamps_log');
  }

  // timestamps_log_datetime - computed: true, optional: false, required: false
  public get timestampsLogDatetime() {
    return this.getBooleanAttribute('timestamps_log_datetime');
  }

  // timestamps_log_datetime_localtime - computed: true, optional: false, required: false
  public get timestampsLogDatetimeLocaltime() {
    return this.getBooleanAttribute('timestamps_log_datetime_localtime');
  }

  // timestamps_log_datetime_msec - computed: true, optional: false, required: false
  public get timestampsLogDatetimeMsec() {
    return this.getBooleanAttribute('timestamps_log_datetime_msec');
  }

  // timestamps_log_datetime_show_timezone - computed: true, optional: false, required: false
  public get timestampsLogDatetimeShowTimezone() {
    return this.getBooleanAttribute('timestamps_log_datetime_show_timezone');
  }

  // timestamps_log_datetime_year - computed: true, optional: false, required: false
  public get timestampsLogDatetimeYear() {
    return this.getBooleanAttribute('timestamps_log_datetime_year');
  }

  // timestamps_log_uptime - computed: true, optional: false, required: false
  public get timestampsLogUptime() {
    return this.getBooleanAttribute('timestamps_log_uptime');
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
