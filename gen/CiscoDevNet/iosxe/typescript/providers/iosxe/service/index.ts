// https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServiceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable call-home service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#call_home Service#call_home}
  */
  readonly callHome?: boolean | cdktf.IResolvable;
  /**
  * Compress the configuration file
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#compress_config Service#compress_config}
  */
  readonly compressConfig?: boolean | cdktf.IResolvable;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#device Service#device}
  */
  readonly device?: string;
  /**
  * Enable DHCP server and relay agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#dhcp Service#dhcp}
  */
  readonly dhcp?: boolean | cdktf.IResolvable;
  /**
  * Enable DHCP server and relay agent
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#dhcp_config Service#dhcp_config}
  */
  readonly dhcpConfig?: boolean | cdktf.IResolvable;
  /**
  * Enable PAD commands
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#pad Service#pad}
  */
  readonly pad?: boolean | cdktf.IResolvable;
  /**
  * Encrypt system passwords
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#password_encryption Service#password_encryption}
  */
  readonly passwordEncryption?: boolean | cdktf.IResolvable;
  /**
  * Enable password recovery
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#password_recovery Service#password_recovery}
  */
  readonly passwordRecovery?: boolean | cdktf.IResolvable;
  /**
  * Stamp logger messages with a sequence number
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#sequence_numbers Service#sequence_numbers}
  */
  readonly sequenceNumbers?: boolean | cdktf.IResolvable;
  /**
  * Generate keepalives on idle incoming network connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#tcp_keepalives_in Service#tcp_keepalives_in}
  */
  readonly tcpKeepalivesIn?: boolean | cdktf.IResolvable;
  /**
  * Generate keepalives on idle outgoing network connections
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#tcp_keepalives_out Service#tcp_keepalives_out}
  */
  readonly tcpKeepalivesOut?: boolean | cdktf.IResolvable;
  /**
  * Timestamp debug/log messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#timestamps Service#timestamps}
  */
  readonly timestamps?: boolean | cdktf.IResolvable;
  /**
  * Timestamp debug messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#timestamps_debug Service#timestamps_debug}
  */
  readonly timestampsDebug?: boolean | cdktf.IResolvable;
  /**
  * Timestamp with date and time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#timestamps_debug_datetime Service#timestamps_debug_datetime}
  */
  readonly timestampsDebugDatetime?: boolean | cdktf.IResolvable;
  /**
  * Use local time zone for timestamps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#timestamps_debug_datetime_localtime Service#timestamps_debug_datetime_localtime}
  */
  readonly timestampsDebugDatetimeLocaltime?: boolean | cdktf.IResolvable;
  /**
  * Include milliseconds in timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#timestamps_debug_datetime_msec Service#timestamps_debug_datetime_msec}
  */
  readonly timestampsDebugDatetimeMsec?: boolean | cdktf.IResolvable;
  /**
  * Add time zone information to timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#timestamps_debug_datetime_show_timezone Service#timestamps_debug_datetime_show_timezone}
  */
  readonly timestampsDebugDatetimeShowTimezone?: boolean | cdktf.IResolvable;
  /**
  * Include year in timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#timestamps_debug_datetime_year Service#timestamps_debug_datetime_year}
  */
  readonly timestampsDebugDatetimeYear?: boolean | cdktf.IResolvable;
  /**
  * Timestamp with system uptime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#timestamps_debug_uptime Service#timestamps_debug_uptime}
  */
  readonly timestampsDebugUptime?: boolean | cdktf.IResolvable;
  /**
  * Timestamp log messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#timestamps_log Service#timestamps_log}
  */
  readonly timestampsLog?: boolean | cdktf.IResolvable;
  /**
  * Timestamp with date and time
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#timestamps_log_datetime Service#timestamps_log_datetime}
  */
  readonly timestampsLogDatetime?: boolean | cdktf.IResolvable;
  /**
  * Use local time zone for timestamps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#timestamps_log_datetime_localtime Service#timestamps_log_datetime_localtime}
  */
  readonly timestampsLogDatetimeLocaltime?: boolean | cdktf.IResolvable;
  /**
  * Include milliseconds in timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#timestamps_log_datetime_msec Service#timestamps_log_datetime_msec}
  */
  readonly timestampsLogDatetimeMsec?: boolean | cdktf.IResolvable;
  /**
  * Add time zone information to timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#timestamps_log_datetime_show_timezone Service#timestamps_log_datetime_show_timezone}
  */
  readonly timestampsLogDatetimeShowTimezone?: boolean | cdktf.IResolvable;
  /**
  * Include year in timestamp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#timestamps_log_datetime_year Service#timestamps_log_datetime_year}
  */
  readonly timestampsLogDatetimeYear?: boolean | cdktf.IResolvable;
  /**
  * Timestamp with system uptime
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#timestamps_log_uptime Service#timestamps_log_uptime}
  */
  readonly timestampsLogUptime?: boolean | cdktf.IResolvable;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service iosxe_service}
*/
export class Service extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxe_service";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Service resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Service to import
  * @param importFromId The id of the existing Service that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Service to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxe_service", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxe/0.10.0/docs/resources/service iosxe_service} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServiceConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ServiceConfig = {}) {
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
    this._callHome = config.callHome;
    this._compressConfig = config.compressConfig;
    this._device = config.device;
    this._dhcp = config.dhcp;
    this._dhcpConfig = config.dhcpConfig;
    this._pad = config.pad;
    this._passwordEncryption = config.passwordEncryption;
    this._passwordRecovery = config.passwordRecovery;
    this._sequenceNumbers = config.sequenceNumbers;
    this._tcpKeepalivesIn = config.tcpKeepalivesIn;
    this._tcpKeepalivesOut = config.tcpKeepalivesOut;
    this._timestamps = config.timestamps;
    this._timestampsDebug = config.timestampsDebug;
    this._timestampsDebugDatetime = config.timestampsDebugDatetime;
    this._timestampsDebugDatetimeLocaltime = config.timestampsDebugDatetimeLocaltime;
    this._timestampsDebugDatetimeMsec = config.timestampsDebugDatetimeMsec;
    this._timestampsDebugDatetimeShowTimezone = config.timestampsDebugDatetimeShowTimezone;
    this._timestampsDebugDatetimeYear = config.timestampsDebugDatetimeYear;
    this._timestampsDebugUptime = config.timestampsDebugUptime;
    this._timestampsLog = config.timestampsLog;
    this._timestampsLogDatetime = config.timestampsLogDatetime;
    this._timestampsLogDatetimeLocaltime = config.timestampsLogDatetimeLocaltime;
    this._timestampsLogDatetimeMsec = config.timestampsLogDatetimeMsec;
    this._timestampsLogDatetimeShowTimezone = config.timestampsLogDatetimeShowTimezone;
    this._timestampsLogDatetimeYear = config.timestampsLogDatetimeYear;
    this._timestampsLogUptime = config.timestampsLogUptime;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // call_home - computed: false, optional: true, required: false
  private _callHome?: boolean | cdktf.IResolvable; 
  public get callHome() {
    return this.getBooleanAttribute('call_home');
  }
  public set callHome(value: boolean | cdktf.IResolvable) {
    this._callHome = value;
  }
  public resetCallHome() {
    this._callHome = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get callHomeInput() {
    return this._callHome;
  }

  // compress_config - computed: false, optional: true, required: false
  private _compressConfig?: boolean | cdktf.IResolvable; 
  public get compressConfig() {
    return this.getBooleanAttribute('compress_config');
  }
  public set compressConfig(value: boolean | cdktf.IResolvable) {
    this._compressConfig = value;
  }
  public resetCompressConfig() {
    this._compressConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get compressConfigInput() {
    return this._compressConfig;
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

  // dhcp - computed: false, optional: true, required: false
  private _dhcp?: boolean | cdktf.IResolvable; 
  public get dhcp() {
    return this.getBooleanAttribute('dhcp');
  }
  public set dhcp(value: boolean | cdktf.IResolvable) {
    this._dhcp = value;
  }
  public resetDhcp() {
    this._dhcp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpInput() {
    return this._dhcp;
  }

  // dhcp_config - computed: false, optional: true, required: false
  private _dhcpConfig?: boolean | cdktf.IResolvable; 
  public get dhcpConfig() {
    return this.getBooleanAttribute('dhcp_config');
  }
  public set dhcpConfig(value: boolean | cdktf.IResolvable) {
    this._dhcpConfig = value;
  }
  public resetDhcpConfig() {
    this._dhcpConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dhcpConfigInput() {
    return this._dhcpConfig;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // pad - computed: false, optional: true, required: false
  private _pad?: boolean | cdktf.IResolvable; 
  public get pad() {
    return this.getBooleanAttribute('pad');
  }
  public set pad(value: boolean | cdktf.IResolvable) {
    this._pad = value;
  }
  public resetPad() {
    this._pad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get padInput() {
    return this._pad;
  }

  // password_encryption - computed: false, optional: true, required: false
  private _passwordEncryption?: boolean | cdktf.IResolvable; 
  public get passwordEncryption() {
    return this.getBooleanAttribute('password_encryption');
  }
  public set passwordEncryption(value: boolean | cdktf.IResolvable) {
    this._passwordEncryption = value;
  }
  public resetPasswordEncryption() {
    this._passwordEncryption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordEncryptionInput() {
    return this._passwordEncryption;
  }

  // password_recovery - computed: false, optional: true, required: false
  private _passwordRecovery?: boolean | cdktf.IResolvable; 
  public get passwordRecovery() {
    return this.getBooleanAttribute('password_recovery');
  }
  public set passwordRecovery(value: boolean | cdktf.IResolvable) {
    this._passwordRecovery = value;
  }
  public resetPasswordRecovery() {
    this._passwordRecovery = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passwordRecoveryInput() {
    return this._passwordRecovery;
  }

  // sequence_numbers - computed: false, optional: true, required: false
  private _sequenceNumbers?: boolean | cdktf.IResolvable; 
  public get sequenceNumbers() {
    return this.getBooleanAttribute('sequence_numbers');
  }
  public set sequenceNumbers(value: boolean | cdktf.IResolvable) {
    this._sequenceNumbers = value;
  }
  public resetSequenceNumbers() {
    this._sequenceNumbers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sequenceNumbersInput() {
    return this._sequenceNumbers;
  }

  // tcp_keepalives_in - computed: false, optional: true, required: false
  private _tcpKeepalivesIn?: boolean | cdktf.IResolvable; 
  public get tcpKeepalivesIn() {
    return this.getBooleanAttribute('tcp_keepalives_in');
  }
  public set tcpKeepalivesIn(value: boolean | cdktf.IResolvable) {
    this._tcpKeepalivesIn = value;
  }
  public resetTcpKeepalivesIn() {
    this._tcpKeepalivesIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpKeepalivesInInput() {
    return this._tcpKeepalivesIn;
  }

  // tcp_keepalives_out - computed: false, optional: true, required: false
  private _tcpKeepalivesOut?: boolean | cdktf.IResolvable; 
  public get tcpKeepalivesOut() {
    return this.getBooleanAttribute('tcp_keepalives_out');
  }
  public set tcpKeepalivesOut(value: boolean | cdktf.IResolvable) {
    this._tcpKeepalivesOut = value;
  }
  public resetTcpKeepalivesOut() {
    this._tcpKeepalivesOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tcpKeepalivesOutInput() {
    return this._tcpKeepalivesOut;
  }

  // timestamps - computed: false, optional: true, required: false
  private _timestamps?: boolean | cdktf.IResolvable; 
  public get timestamps() {
    return this.getBooleanAttribute('timestamps');
  }
  public set timestamps(value: boolean | cdktf.IResolvable) {
    this._timestamps = value;
  }
  public resetTimestamps() {
    this._timestamps = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampsInput() {
    return this._timestamps;
  }

  // timestamps_debug - computed: false, optional: true, required: false
  private _timestampsDebug?: boolean | cdktf.IResolvable; 
  public get timestampsDebug() {
    return this.getBooleanAttribute('timestamps_debug');
  }
  public set timestampsDebug(value: boolean | cdktf.IResolvable) {
    this._timestampsDebug = value;
  }
  public resetTimestampsDebug() {
    this._timestampsDebug = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampsDebugInput() {
    return this._timestampsDebug;
  }

  // timestamps_debug_datetime - computed: false, optional: true, required: false
  private _timestampsDebugDatetime?: boolean | cdktf.IResolvable; 
  public get timestampsDebugDatetime() {
    return this.getBooleanAttribute('timestamps_debug_datetime');
  }
  public set timestampsDebugDatetime(value: boolean | cdktf.IResolvable) {
    this._timestampsDebugDatetime = value;
  }
  public resetTimestampsDebugDatetime() {
    this._timestampsDebugDatetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampsDebugDatetimeInput() {
    return this._timestampsDebugDatetime;
  }

  // timestamps_debug_datetime_localtime - computed: false, optional: true, required: false
  private _timestampsDebugDatetimeLocaltime?: boolean | cdktf.IResolvable; 
  public get timestampsDebugDatetimeLocaltime() {
    return this.getBooleanAttribute('timestamps_debug_datetime_localtime');
  }
  public set timestampsDebugDatetimeLocaltime(value: boolean | cdktf.IResolvable) {
    this._timestampsDebugDatetimeLocaltime = value;
  }
  public resetTimestampsDebugDatetimeLocaltime() {
    this._timestampsDebugDatetimeLocaltime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampsDebugDatetimeLocaltimeInput() {
    return this._timestampsDebugDatetimeLocaltime;
  }

  // timestamps_debug_datetime_msec - computed: false, optional: true, required: false
  private _timestampsDebugDatetimeMsec?: boolean | cdktf.IResolvable; 
  public get timestampsDebugDatetimeMsec() {
    return this.getBooleanAttribute('timestamps_debug_datetime_msec');
  }
  public set timestampsDebugDatetimeMsec(value: boolean | cdktf.IResolvable) {
    this._timestampsDebugDatetimeMsec = value;
  }
  public resetTimestampsDebugDatetimeMsec() {
    this._timestampsDebugDatetimeMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampsDebugDatetimeMsecInput() {
    return this._timestampsDebugDatetimeMsec;
  }

  // timestamps_debug_datetime_show_timezone - computed: false, optional: true, required: false
  private _timestampsDebugDatetimeShowTimezone?: boolean | cdktf.IResolvable; 
  public get timestampsDebugDatetimeShowTimezone() {
    return this.getBooleanAttribute('timestamps_debug_datetime_show_timezone');
  }
  public set timestampsDebugDatetimeShowTimezone(value: boolean | cdktf.IResolvable) {
    this._timestampsDebugDatetimeShowTimezone = value;
  }
  public resetTimestampsDebugDatetimeShowTimezone() {
    this._timestampsDebugDatetimeShowTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampsDebugDatetimeShowTimezoneInput() {
    return this._timestampsDebugDatetimeShowTimezone;
  }

  // timestamps_debug_datetime_year - computed: false, optional: true, required: false
  private _timestampsDebugDatetimeYear?: boolean | cdktf.IResolvable; 
  public get timestampsDebugDatetimeYear() {
    return this.getBooleanAttribute('timestamps_debug_datetime_year');
  }
  public set timestampsDebugDatetimeYear(value: boolean | cdktf.IResolvable) {
    this._timestampsDebugDatetimeYear = value;
  }
  public resetTimestampsDebugDatetimeYear() {
    this._timestampsDebugDatetimeYear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampsDebugDatetimeYearInput() {
    return this._timestampsDebugDatetimeYear;
  }

  // timestamps_debug_uptime - computed: false, optional: true, required: false
  private _timestampsDebugUptime?: boolean | cdktf.IResolvable; 
  public get timestampsDebugUptime() {
    return this.getBooleanAttribute('timestamps_debug_uptime');
  }
  public set timestampsDebugUptime(value: boolean | cdktf.IResolvable) {
    this._timestampsDebugUptime = value;
  }
  public resetTimestampsDebugUptime() {
    this._timestampsDebugUptime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampsDebugUptimeInput() {
    return this._timestampsDebugUptime;
  }

  // timestamps_log - computed: false, optional: true, required: false
  private _timestampsLog?: boolean | cdktf.IResolvable; 
  public get timestampsLog() {
    return this.getBooleanAttribute('timestamps_log');
  }
  public set timestampsLog(value: boolean | cdktf.IResolvable) {
    this._timestampsLog = value;
  }
  public resetTimestampsLog() {
    this._timestampsLog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampsLogInput() {
    return this._timestampsLog;
  }

  // timestamps_log_datetime - computed: false, optional: true, required: false
  private _timestampsLogDatetime?: boolean | cdktf.IResolvable; 
  public get timestampsLogDatetime() {
    return this.getBooleanAttribute('timestamps_log_datetime');
  }
  public set timestampsLogDatetime(value: boolean | cdktf.IResolvable) {
    this._timestampsLogDatetime = value;
  }
  public resetTimestampsLogDatetime() {
    this._timestampsLogDatetime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampsLogDatetimeInput() {
    return this._timestampsLogDatetime;
  }

  // timestamps_log_datetime_localtime - computed: false, optional: true, required: false
  private _timestampsLogDatetimeLocaltime?: boolean | cdktf.IResolvable; 
  public get timestampsLogDatetimeLocaltime() {
    return this.getBooleanAttribute('timestamps_log_datetime_localtime');
  }
  public set timestampsLogDatetimeLocaltime(value: boolean | cdktf.IResolvable) {
    this._timestampsLogDatetimeLocaltime = value;
  }
  public resetTimestampsLogDatetimeLocaltime() {
    this._timestampsLogDatetimeLocaltime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampsLogDatetimeLocaltimeInput() {
    return this._timestampsLogDatetimeLocaltime;
  }

  // timestamps_log_datetime_msec - computed: false, optional: true, required: false
  private _timestampsLogDatetimeMsec?: boolean | cdktf.IResolvable; 
  public get timestampsLogDatetimeMsec() {
    return this.getBooleanAttribute('timestamps_log_datetime_msec');
  }
  public set timestampsLogDatetimeMsec(value: boolean | cdktf.IResolvable) {
    this._timestampsLogDatetimeMsec = value;
  }
  public resetTimestampsLogDatetimeMsec() {
    this._timestampsLogDatetimeMsec = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampsLogDatetimeMsecInput() {
    return this._timestampsLogDatetimeMsec;
  }

  // timestamps_log_datetime_show_timezone - computed: false, optional: true, required: false
  private _timestampsLogDatetimeShowTimezone?: boolean | cdktf.IResolvable; 
  public get timestampsLogDatetimeShowTimezone() {
    return this.getBooleanAttribute('timestamps_log_datetime_show_timezone');
  }
  public set timestampsLogDatetimeShowTimezone(value: boolean | cdktf.IResolvable) {
    this._timestampsLogDatetimeShowTimezone = value;
  }
  public resetTimestampsLogDatetimeShowTimezone() {
    this._timestampsLogDatetimeShowTimezone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampsLogDatetimeShowTimezoneInput() {
    return this._timestampsLogDatetimeShowTimezone;
  }

  // timestamps_log_datetime_year - computed: false, optional: true, required: false
  private _timestampsLogDatetimeYear?: boolean | cdktf.IResolvable; 
  public get timestampsLogDatetimeYear() {
    return this.getBooleanAttribute('timestamps_log_datetime_year');
  }
  public set timestampsLogDatetimeYear(value: boolean | cdktf.IResolvable) {
    this._timestampsLogDatetimeYear = value;
  }
  public resetTimestampsLogDatetimeYear() {
    this._timestampsLogDatetimeYear = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampsLogDatetimeYearInput() {
    return this._timestampsLogDatetimeYear;
  }

  // timestamps_log_uptime - computed: false, optional: true, required: false
  private _timestampsLogUptime?: boolean | cdktf.IResolvable; 
  public get timestampsLogUptime() {
    return this.getBooleanAttribute('timestamps_log_uptime');
  }
  public set timestampsLogUptime(value: boolean | cdktf.IResolvable) {
    this._timestampsLogUptime = value;
  }
  public resetTimestampsLogUptime() {
    this._timestampsLogUptime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timestampsLogUptimeInput() {
    return this._timestampsLogUptime;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      call_home: cdktf.booleanToTerraform(this._callHome),
      compress_config: cdktf.booleanToTerraform(this._compressConfig),
      device: cdktf.stringToTerraform(this._device),
      dhcp: cdktf.booleanToTerraform(this._dhcp),
      dhcp_config: cdktf.booleanToTerraform(this._dhcpConfig),
      pad: cdktf.booleanToTerraform(this._pad),
      password_encryption: cdktf.booleanToTerraform(this._passwordEncryption),
      password_recovery: cdktf.booleanToTerraform(this._passwordRecovery),
      sequence_numbers: cdktf.booleanToTerraform(this._sequenceNumbers),
      tcp_keepalives_in: cdktf.booleanToTerraform(this._tcpKeepalivesIn),
      tcp_keepalives_out: cdktf.booleanToTerraform(this._tcpKeepalivesOut),
      timestamps: cdktf.booleanToTerraform(this._timestamps),
      timestamps_debug: cdktf.booleanToTerraform(this._timestampsDebug),
      timestamps_debug_datetime: cdktf.booleanToTerraform(this._timestampsDebugDatetime),
      timestamps_debug_datetime_localtime: cdktf.booleanToTerraform(this._timestampsDebugDatetimeLocaltime),
      timestamps_debug_datetime_msec: cdktf.booleanToTerraform(this._timestampsDebugDatetimeMsec),
      timestamps_debug_datetime_show_timezone: cdktf.booleanToTerraform(this._timestampsDebugDatetimeShowTimezone),
      timestamps_debug_datetime_year: cdktf.booleanToTerraform(this._timestampsDebugDatetimeYear),
      timestamps_debug_uptime: cdktf.booleanToTerraform(this._timestampsDebugUptime),
      timestamps_log: cdktf.booleanToTerraform(this._timestampsLog),
      timestamps_log_datetime: cdktf.booleanToTerraform(this._timestampsLogDatetime),
      timestamps_log_datetime_localtime: cdktf.booleanToTerraform(this._timestampsLogDatetimeLocaltime),
      timestamps_log_datetime_msec: cdktf.booleanToTerraform(this._timestampsLogDatetimeMsec),
      timestamps_log_datetime_show_timezone: cdktf.booleanToTerraform(this._timestampsLogDatetimeShowTimezone),
      timestamps_log_datetime_year: cdktf.booleanToTerraform(this._timestampsLogDatetimeYear),
      timestamps_log_uptime: cdktf.booleanToTerraform(this._timestampsLogUptime),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      call_home: {
        value: cdktf.booleanToHclTerraform(this._callHome),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      compress_config: {
        value: cdktf.booleanToHclTerraform(this._compressConfig),
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
      dhcp: {
        value: cdktf.booleanToHclTerraform(this._dhcp),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      dhcp_config: {
        value: cdktf.booleanToHclTerraform(this._dhcpConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      pad: {
        value: cdktf.booleanToHclTerraform(this._pad),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_encryption: {
        value: cdktf.booleanToHclTerraform(this._passwordEncryption),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      password_recovery: {
        value: cdktf.booleanToHclTerraform(this._passwordRecovery),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      sequence_numbers: {
        value: cdktf.booleanToHclTerraform(this._sequenceNumbers),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_keepalives_in: {
        value: cdktf.booleanToHclTerraform(this._tcpKeepalivesIn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      tcp_keepalives_out: {
        value: cdktf.booleanToHclTerraform(this._tcpKeepalivesOut),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timestamps: {
        value: cdktf.booleanToHclTerraform(this._timestamps),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timestamps_debug: {
        value: cdktf.booleanToHclTerraform(this._timestampsDebug),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timestamps_debug_datetime: {
        value: cdktf.booleanToHclTerraform(this._timestampsDebugDatetime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timestamps_debug_datetime_localtime: {
        value: cdktf.booleanToHclTerraform(this._timestampsDebugDatetimeLocaltime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timestamps_debug_datetime_msec: {
        value: cdktf.booleanToHclTerraform(this._timestampsDebugDatetimeMsec),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timestamps_debug_datetime_show_timezone: {
        value: cdktf.booleanToHclTerraform(this._timestampsDebugDatetimeShowTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timestamps_debug_datetime_year: {
        value: cdktf.booleanToHclTerraform(this._timestampsDebugDatetimeYear),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timestamps_debug_uptime: {
        value: cdktf.booleanToHclTerraform(this._timestampsDebugUptime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timestamps_log: {
        value: cdktf.booleanToHclTerraform(this._timestampsLog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timestamps_log_datetime: {
        value: cdktf.booleanToHclTerraform(this._timestampsLogDatetime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timestamps_log_datetime_localtime: {
        value: cdktf.booleanToHclTerraform(this._timestampsLogDatetimeLocaltime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timestamps_log_datetime_msec: {
        value: cdktf.booleanToHclTerraform(this._timestampsLogDatetimeMsec),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timestamps_log_datetime_show_timezone: {
        value: cdktf.booleanToHclTerraform(this._timestampsLogDatetimeShowTimezone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timestamps_log_datetime_year: {
        value: cdktf.booleanToHclTerraform(this._timestampsLogDatetimeYear),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      timestamps_log_uptime: {
        value: cdktf.booleanToHclTerraform(this._timestampsLogUptime),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
