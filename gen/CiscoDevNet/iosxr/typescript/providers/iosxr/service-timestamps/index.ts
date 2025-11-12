// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/service_timestamps
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceTimestampsConfig extends cdktf.TerraformMetaArguments {
  /**
  * Use local time zone for timestamps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/service_timestamps#debug_datetime_localtime ServiceTimestamps#debug_datetime_localtime}
  */
  readonly debugDatetimeLocaltime?: boolean | cdktf.IResolvable;
  /**
  * Timestamp with date and time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/service_timestamps#debug_datetime_localtime_only ServiceTimestamps#debug_datetime_localtime_only}
  */
  readonly debugDatetimeLocaltimeOnly?: boolean | cdktf.IResolvable;
  /**
  * Include milliseconds in timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/service_timestamps#debug_datetime_msec ServiceTimestamps#debug_datetime_msec}
  */
  readonly debugDatetimeMsec?: boolean | cdktf.IResolvable;
  /**
  * Add time zone information to timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/service_timestamps#debug_datetime_show_timezone ServiceTimestamps#debug_datetime_show_timezone}
  */
  readonly debugDatetimeShowTimezone?: boolean | cdktf.IResolvable;
  /**
  * Add year to timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/service_timestamps#debug_datetime_year ServiceTimestamps#debug_datetime_year}
  */
  readonly debugDatetimeYear?: boolean | cdktf.IResolvable;
  /**
  * Disable timestamp debug messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/service_timestamps#debug_disable ServiceTimestamps#debug_disable}
  */
  readonly debugDisable?: boolean | cdktf.IResolvable;
  /**
  * Timestamp with systime uptime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/service_timestamps#debug_uptime ServiceTimestamps#debug_uptime}
  */
  readonly debugUptime?: boolean | cdktf.IResolvable;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/service_timestamps#device ServiceTimestamps#device}
  */
  readonly device?: string;
  /**
  * Use local time zone for timestamps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/service_timestamps#log_datetime_localtime ServiceTimestamps#log_datetime_localtime}
  */
  readonly logDatetimeLocaltime?: boolean | cdktf.IResolvable;
  /**
  * Timestamp with date and time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/service_timestamps#log_datetime_localtime_only ServiceTimestamps#log_datetime_localtime_only}
  */
  readonly logDatetimeLocaltimeOnly?: boolean | cdktf.IResolvable;
  /**
  * Include milliseconds in timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/service_timestamps#log_datetime_msec ServiceTimestamps#log_datetime_msec}
  */
  readonly logDatetimeMsec?: boolean | cdktf.IResolvable;
  /**
  * Add time zone information to timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/service_timestamps#log_datetime_show_timezone ServiceTimestamps#log_datetime_show_timezone}
  */
  readonly logDatetimeShowTimezone?: boolean | cdktf.IResolvable;
  /**
  * Add Year to timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/service_timestamps#log_datetime_year ServiceTimestamps#log_datetime_year}
  */
  readonly logDatetimeYear?: boolean | cdktf.IResolvable;
  /**
  * Disable timestamp log messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/service_timestamps#log_disable ServiceTimestamps#log_disable}
  */
  readonly logDisable?: boolean | cdktf.IResolvable;
  /**
  * Timestamp with systime uptime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/service_timestamps#log_uptime ServiceTimestamps#log_uptime}
  */
  readonly logUptime?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/service_timestamps iosxr_service_timestamps}
*/
export class ServiceTimestamps extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_service_timestamps";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ServiceTimestamps resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ServiceTimestamps to import
  * @param importFromId The id of the existing ServiceTimestamps that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/service_timestamps#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ServiceTimestamps to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_service_timestamps", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/service_timestamps iosxr_service_timestamps} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceTimestampsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ServiceTimestampsConfig = {}) {
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
    this._debugDatetimeLocaltime = config.debugDatetimeLocaltime;
    this._debugDatetimeLocaltimeOnly = config.debugDatetimeLocaltimeOnly;
    this._debugDatetimeMsec = config.debugDatetimeMsec;
    this._debugDatetimeShowTimezone = config.debugDatetimeShowTimezone;
    this._debugDatetimeYear = config.debugDatetimeYear;
    this._debugDisable = config.debugDisable;
    this._debugUptime = config.debugUptime;
    this._device = config.device;
    this._logDatetimeLocaltime = config.logDatetimeLocaltime;
    this._logDatetimeLocaltimeOnly = config.logDatetimeLocaltimeOnly;
    this._logDatetimeMsec = config.logDatetimeMsec;
    this._logDatetimeShowTimezone = config.logDatetimeShowTimezone;
    this._logDatetimeYear = config.logDatetimeYear;
    this._logDisable = config.logDisable;
    this._logUptime = config.logUptime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // debug_datetime_localtime - computed: false, optional: true, required: false
  private _debugDatetimeLocaltime?: boolean | cdktf.IResolvable; 
  public get debugDatetimeLocaltime() {
    return this.getBooleanAttribute('debug_datetime_localtime');
  }
  public set debugDatetimeLocaltime(value: boolean | cdktf.IResolvable) {
    this._debugDatetimeLocaltime = value;
  }
  public resetDebugDatetimeLocaltime() {
    this._debugDatetimeLocaltime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugDatetimeLocaltimeInput() {
    return this._debugDatetimeLocaltime;
  }

  // debug_datetime_localtime_only - computed: false, optional: true, required: false
  private _debugDatetimeLocaltimeOnly?: boolean | cdktf.IResolvable; 
  public get debugDatetimeLocaltimeOnly() {
    return this.getBooleanAttribute('debug_datetime_localtime_only');
  }
  public set debugDatetimeLocaltimeOnly(value: boolean | cdktf.IResolvable) {
    this._debugDatetimeLocaltimeOnly = value;
  }
  public resetDebugDatetimeLocaltimeOnly() {
    this._debugDatetimeLocaltimeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugDatetimeLocaltimeOnlyInput() {
    return this._debugDatetimeLocaltimeOnly;
  }

  // debug_datetime_msec - computed: false, optional: true, required: false
  private _debugDatetimeMsec?: boolean | cdktf.IResolvable; 
  public get debugDatetimeMsec() {
    return this.getBooleanAttribute('debug_datetime_msec');
  }
  public set debugDatetimeMsec(value: boolean | cdktf.IResolvable) {
    this._debugDatetimeMsec = value;
  }
  public resetDebugDatetimeMsec() {
    this._debugDatetimeMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugDatetimeMsecInput() {
    return this._debugDatetimeMsec;
  }

  // debug_datetime_show_timezone - computed: false, optional: true, required: false
  private _debugDatetimeShowTimezone?: boolean | cdktf.IResolvable; 
  public get debugDatetimeShowTimezone() {
    return this.getBooleanAttribute('debug_datetime_show_timezone');
  }
  public set debugDatetimeShowTimezone(value: boolean | cdktf.IResolvable) {
    this._debugDatetimeShowTimezone = value;
  }
  public resetDebugDatetimeShowTimezone() {
    this._debugDatetimeShowTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugDatetimeShowTimezoneInput() {
    return this._debugDatetimeShowTimezone;
  }

  // debug_datetime_year - computed: false, optional: true, required: false
  private _debugDatetimeYear?: boolean | cdktf.IResolvable; 
  public get debugDatetimeYear() {
    return this.getBooleanAttribute('debug_datetime_year');
  }
  public set debugDatetimeYear(value: boolean | cdktf.IResolvable) {
    this._debugDatetimeYear = value;
  }
  public resetDebugDatetimeYear() {
    this._debugDatetimeYear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugDatetimeYearInput() {
    return this._debugDatetimeYear;
  }

  // debug_disable - computed: false, optional: true, required: false
  private _debugDisable?: boolean | cdktf.IResolvable; 
  public get debugDisable() {
    return this.getBooleanAttribute('debug_disable');
  }
  public set debugDisable(value: boolean | cdktf.IResolvable) {
    this._debugDisable = value;
  }
  public resetDebugDisable() {
    this._debugDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugDisableInput() {
    return this._debugDisable;
  }

  // debug_uptime - computed: false, optional: true, required: false
  private _debugUptime?: boolean | cdktf.IResolvable; 
  public get debugUptime() {
    return this.getBooleanAttribute('debug_uptime');
  }
  public set debugUptime(value: boolean | cdktf.IResolvable) {
    this._debugUptime = value;
  }
  public resetDebugUptime() {
    this._debugUptime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get debugUptimeInput() {
    return this._debugUptime;
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

  // log_datetime_localtime - computed: false, optional: true, required: false
  private _logDatetimeLocaltime?: boolean | cdktf.IResolvable; 
  public get logDatetimeLocaltime() {
    return this.getBooleanAttribute('log_datetime_localtime');
  }
  public set logDatetimeLocaltime(value: boolean | cdktf.IResolvable) {
    this._logDatetimeLocaltime = value;
  }
  public resetLogDatetimeLocaltime() {
    this._logDatetimeLocaltime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDatetimeLocaltimeInput() {
    return this._logDatetimeLocaltime;
  }

  // log_datetime_localtime_only - computed: false, optional: true, required: false
  private _logDatetimeLocaltimeOnly?: boolean | cdktf.IResolvable; 
  public get logDatetimeLocaltimeOnly() {
    return this.getBooleanAttribute('log_datetime_localtime_only');
  }
  public set logDatetimeLocaltimeOnly(value: boolean | cdktf.IResolvable) {
    this._logDatetimeLocaltimeOnly = value;
  }
  public resetLogDatetimeLocaltimeOnly() {
    this._logDatetimeLocaltimeOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDatetimeLocaltimeOnlyInput() {
    return this._logDatetimeLocaltimeOnly;
  }

  // log_datetime_msec - computed: false, optional: true, required: false
  private _logDatetimeMsec?: boolean | cdktf.IResolvable; 
  public get logDatetimeMsec() {
    return this.getBooleanAttribute('log_datetime_msec');
  }
  public set logDatetimeMsec(value: boolean | cdktf.IResolvable) {
    this._logDatetimeMsec = value;
  }
  public resetLogDatetimeMsec() {
    this._logDatetimeMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDatetimeMsecInput() {
    return this._logDatetimeMsec;
  }

  // log_datetime_show_timezone - computed: false, optional: true, required: false
  private _logDatetimeShowTimezone?: boolean | cdktf.IResolvable; 
  public get logDatetimeShowTimezone() {
    return this.getBooleanAttribute('log_datetime_show_timezone');
  }
  public set logDatetimeShowTimezone(value: boolean | cdktf.IResolvable) {
    this._logDatetimeShowTimezone = value;
  }
  public resetLogDatetimeShowTimezone() {
    this._logDatetimeShowTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDatetimeShowTimezoneInput() {
    return this._logDatetimeShowTimezone;
  }

  // log_datetime_year - computed: false, optional: true, required: false
  private _logDatetimeYear?: boolean | cdktf.IResolvable; 
  public get logDatetimeYear() {
    return this.getBooleanAttribute('log_datetime_year');
  }
  public set logDatetimeYear(value: boolean | cdktf.IResolvable) {
    this._logDatetimeYear = value;
  }
  public resetLogDatetimeYear() {
    this._logDatetimeYear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDatetimeYearInput() {
    return this._logDatetimeYear;
  }

  // log_disable - computed: false, optional: true, required: false
  private _logDisable?: boolean | cdktf.IResolvable; 
  public get logDisable() {
    return this.getBooleanAttribute('log_disable');
  }
  public set logDisable(value: boolean | cdktf.IResolvable) {
    this._logDisable = value;
  }
  public resetLogDisable() {
    this._logDisable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logDisableInput() {
    return this._logDisable;
  }

  // log_uptime - computed: false, optional: true, required: false
  private _logUptime?: boolean | cdktf.IResolvable; 
  public get logUptime() {
    return this.getBooleanAttribute('log_uptime');
  }
  public set logUptime(value: boolean | cdktf.IResolvable) {
    this._logUptime = value;
  }
  public resetLogUptime() {
    this._logUptime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logUptimeInput() {
    return this._logUptime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      debug_datetime_localtime: cdktf.booleanToTerraform(this._debugDatetimeLocaltime),
      debug_datetime_localtime_only: cdktf.booleanToTerraform(this._debugDatetimeLocaltimeOnly),
      debug_datetime_msec: cdktf.booleanToTerraform(this._debugDatetimeMsec),
      debug_datetime_show_timezone: cdktf.booleanToTerraform(this._debugDatetimeShowTimezone),
      debug_datetime_year: cdktf.booleanToTerraform(this._debugDatetimeYear),
      debug_disable: cdktf.booleanToTerraform(this._debugDisable),
      debug_uptime: cdktf.booleanToTerraform(this._debugUptime),
      device: cdktf.stringToTerraform(this._device),
      log_datetime_localtime: cdktf.booleanToTerraform(this._logDatetimeLocaltime),
      log_datetime_localtime_only: cdktf.booleanToTerraform(this._logDatetimeLocaltimeOnly),
      log_datetime_msec: cdktf.booleanToTerraform(this._logDatetimeMsec),
      log_datetime_show_timezone: cdktf.booleanToTerraform(this._logDatetimeShowTimezone),
      log_datetime_year: cdktf.booleanToTerraform(this._logDatetimeYear),
      log_disable: cdktf.booleanToTerraform(this._logDisable),
      log_uptime: cdktf.booleanToTerraform(this._logUptime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      debug_datetime_localtime: {
        value: cdktf.booleanToHclTerraform(this._debugDatetimeLocaltime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      debug_datetime_localtime_only: {
        value: cdktf.booleanToHclTerraform(this._debugDatetimeLocaltimeOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      debug_datetime_msec: {
        value: cdktf.booleanToHclTerraform(this._debugDatetimeMsec),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      debug_datetime_show_timezone: {
        value: cdktf.booleanToHclTerraform(this._debugDatetimeShowTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      debug_datetime_year: {
        value: cdktf.booleanToHclTerraform(this._debugDatetimeYear),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      debug_disable: {
        value: cdktf.booleanToHclTerraform(this._debugDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      debug_uptime: {
        value: cdktf.booleanToHclTerraform(this._debugUptime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_datetime_localtime: {
        value: cdktf.booleanToHclTerraform(this._logDatetimeLocaltime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_datetime_localtime_only: {
        value: cdktf.booleanToHclTerraform(this._logDatetimeLocaltimeOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_datetime_msec: {
        value: cdktf.booleanToHclTerraform(this._logDatetimeMsec),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_datetime_show_timezone: {
        value: cdktf.booleanToHclTerraform(this._logDatetimeShowTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_datetime_year: {
        value: cdktf.booleanToHclTerraform(this._logDatetimeYear),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_disable: {
        value: cdktf.booleanToHclTerraform(this._logDisable),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_uptime: {
        value: cdktf.booleanToHclTerraform(this._logUptime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
