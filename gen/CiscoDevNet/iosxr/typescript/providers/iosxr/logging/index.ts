// https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/logging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface LoggingConfig extends cdktf.TerraformMetaArguments {
  /**
  * configure this node
  *   - Choices: `alerts`, `critical`, `debugging`, `emergencies`, `errors`, `informational`, `notifications`, `warnings`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/logging#buffered_level Logging#buffered_level}
  */
  readonly bufferedLevel?: string;
  /**
  * Logging buffer size
  *   - Range: `307200`-`125000000`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/logging#buffered_logging_buffer_size Logging#buffered_logging_buffer_size}
  */
  readonly bufferedLoggingBufferSize?: number;
  /**
  * Set console logging
  *   - Choices: `alerts`, `critical`, `debugging`, `disable`, `emergencies`, `errors`, `informational`, `notifications`, `warning`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/logging#console Logging#console}
  */
  readonly console?: string;
  /**
  * Configure behavior when deleting/destroying the resource. Either delete the entire object (YANG container) being managed, or only delete the individual resource attributes configured explicitly and leave everything else as-is. Default value is `all`.
  *   - Choices: `all`, `attributes`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/logging#delete_mode Logging#delete_mode}
  */
  readonly deleteMode?: string;
  /**
  * A device name from the provider configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/logging#device Logging#device}
  */
  readonly device?: string;
  /**
  * Include alarm source location in message text
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/logging#events_display_location Logging#events_display_location}
  */
  readonly eventsDisplayLocation?: boolean | cdktf.IResolvable;
  /**
  * Log all events with equal or higher (lower level) severity
  *   - Choices: `alerts`, `critical`, `emergencies`, `errors`, `informational`, `notifications`, `warnings`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/logging#events_level Logging#events_level}
  */
  readonly eventsLevel?: string;
  /**
  * configure this node
  *   - Choices: `all`, `audit`, `auth`, `authpriv`, `console`, `daemon`, `kern`, `local0`, `local1`, `local2`, `local3`, `local4`, `local5`, `local6`, `local7`, `mail`, `ntp`, `syslog`, `user`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/logging#facility_level Logging#facility_level}
  */
  readonly facilityLevel?: string;
  /**
  * Hostname prefix to add on msgs to servers
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/logging#hostnameprefix Logging#hostnameprefix}
  */
  readonly hostnameprefix?: string;
  /**
  * Set IP DSCP (DiffServ CodePoint)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/logging#ipv4_dscp Logging#ipv4_dscp}
  */
  readonly ipv4Dscp?: string;
  /**
  * Set monitor logging
  *   - Choices: `alerts`, `critical`, `debugging`, `disable`, `emergencies`, `errors`, `informational`, `notifications`, `warning`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/logging#monitor Logging#monitor}
  */
  readonly monitor?: string;
  /**
  * Suppress consecutive duplicate messages
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/logging#suppress_duplicates Logging#suppress_duplicates}
  */
  readonly suppressDuplicates?: boolean | cdktf.IResolvable;
  /**
  * Set trap logging
  *   - Choices: `alerts`, `critical`, `debugging`, `disable`, `emergencies`, `errors`, `informational`, `notifications`, `warning`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/logging#trap Logging#trap}
  */
  readonly trap?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/logging iosxr_logging}
*/
export class Logging extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "iosxr_logging";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Logging resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Logging to import
  * @param importFromId The id of the existing Logging that should be imported. Refer to the {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/logging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Logging to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "iosxr_logging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/ciscodevnet/iosxr/0.6.0/docs/resources/logging iosxr_logging} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options LoggingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: LoggingConfig = {}) {
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
    this._bufferedLevel = config.bufferedLevel;
    this._bufferedLoggingBufferSize = config.bufferedLoggingBufferSize;
    this._console = config.console;
    this._deleteMode = config.deleteMode;
    this._device = config.device;
    this._eventsDisplayLocation = config.eventsDisplayLocation;
    this._eventsLevel = config.eventsLevel;
    this._facilityLevel = config.facilityLevel;
    this._hostnameprefix = config.hostnameprefix;
    this._ipv4Dscp = config.ipv4Dscp;
    this._monitor = config.monitor;
    this._suppressDuplicates = config.suppressDuplicates;
    this._trap = config.trap;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // buffered_level - computed: false, optional: true, required: false
  private _bufferedLevel?: string; 
  public get bufferedLevel() {
    return this.getStringAttribute('buffered_level');
  }
  public set bufferedLevel(value: string) {
    this._bufferedLevel = value;
  }
  public resetBufferedLevel() {
    this._bufferedLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferedLevelInput() {
    return this._bufferedLevel;
  }

  // buffered_logging_buffer_size - computed: false, optional: true, required: false
  private _bufferedLoggingBufferSize?: number; 
  public get bufferedLoggingBufferSize() {
    return this.getNumberAttribute('buffered_logging_buffer_size');
  }
  public set bufferedLoggingBufferSize(value: number) {
    this._bufferedLoggingBufferSize = value;
  }
  public resetBufferedLoggingBufferSize() {
    this._bufferedLoggingBufferSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bufferedLoggingBufferSizeInput() {
    return this._bufferedLoggingBufferSize;
  }

  // console - computed: false, optional: true, required: false
  private _console?: string; 
  public get console() {
    return this.getStringAttribute('console');
  }
  public set console(value: string) {
    this._console = value;
  }
  public resetConsole() {
    this._console = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get consoleInput() {
    return this._console;
  }

  // delete_mode - computed: false, optional: true, required: false
  private _deleteMode?: string; 
  public get deleteMode() {
    return this.getStringAttribute('delete_mode');
  }
  public set deleteMode(value: string) {
    this._deleteMode = value;
  }
  public resetDeleteMode() {
    this._deleteMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteModeInput() {
    return this._deleteMode;
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

  // events_display_location - computed: false, optional: true, required: false
  private _eventsDisplayLocation?: boolean | cdktf.IResolvable; 
  public get eventsDisplayLocation() {
    return this.getBooleanAttribute('events_display_location');
  }
  public set eventsDisplayLocation(value: boolean | cdktf.IResolvable) {
    this._eventsDisplayLocation = value;
  }
  public resetEventsDisplayLocation() {
    this._eventsDisplayLocation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsDisplayLocationInput() {
    return this._eventsDisplayLocation;
  }

  // events_level - computed: false, optional: true, required: false
  private _eventsLevel?: string; 
  public get eventsLevel() {
    return this.getStringAttribute('events_level');
  }
  public set eventsLevel(value: string) {
    this._eventsLevel = value;
  }
  public resetEventsLevel() {
    this._eventsLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get eventsLevelInput() {
    return this._eventsLevel;
  }

  // facility_level - computed: false, optional: true, required: false
  private _facilityLevel?: string; 
  public get facilityLevel() {
    return this.getStringAttribute('facility_level');
  }
  public set facilityLevel(value: string) {
    this._facilityLevel = value;
  }
  public resetFacilityLevel() {
    this._facilityLevel = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get facilityLevelInput() {
    return this._facilityLevel;
  }

  // hostnameprefix - computed: false, optional: true, required: false
  private _hostnameprefix?: string; 
  public get hostnameprefix() {
    return this.getStringAttribute('hostnameprefix');
  }
  public set hostnameprefix(value: string) {
    this._hostnameprefix = value;
  }
  public resetHostnameprefix() {
    this._hostnameprefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameprefixInput() {
    return this._hostnameprefix;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // ipv4_dscp - computed: false, optional: true, required: false
  private _ipv4Dscp?: string; 
  public get ipv4Dscp() {
    return this.getStringAttribute('ipv4_dscp');
  }
  public set ipv4Dscp(value: string) {
    this._ipv4Dscp = value;
  }
  public resetIpv4Dscp() {
    this._ipv4Dscp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ipv4DscpInput() {
    return this._ipv4Dscp;
  }

  // monitor - computed: false, optional: true, required: false
  private _monitor?: string; 
  public get monitor() {
    return this.getStringAttribute('monitor');
  }
  public set monitor(value: string) {
    this._monitor = value;
  }
  public resetMonitor() {
    this._monitor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorInput() {
    return this._monitor;
  }

  // suppress_duplicates - computed: false, optional: true, required: false
  private _suppressDuplicates?: boolean | cdktf.IResolvable; 
  public get suppressDuplicates() {
    return this.getBooleanAttribute('suppress_duplicates');
  }
  public set suppressDuplicates(value: boolean | cdktf.IResolvable) {
    this._suppressDuplicates = value;
  }
  public resetSuppressDuplicates() {
    this._suppressDuplicates = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get suppressDuplicatesInput() {
    return this._suppressDuplicates;
  }

  // trap - computed: false, optional: true, required: false
  private _trap?: string; 
  public get trap() {
    return this.getStringAttribute('trap');
  }
  public set trap(value: string) {
    this._trap = value;
  }
  public resetTrap() {
    this._trap = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get trapInput() {
    return this._trap;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      buffered_level: cdktf.stringToTerraform(this._bufferedLevel),
      buffered_logging_buffer_size: cdktf.numberToTerraform(this._bufferedLoggingBufferSize),
      console: cdktf.stringToTerraform(this._console),
      delete_mode: cdktf.stringToTerraform(this._deleteMode),
      device: cdktf.stringToTerraform(this._device),
      events_display_location: cdktf.booleanToTerraform(this._eventsDisplayLocation),
      events_level: cdktf.stringToTerraform(this._eventsLevel),
      facility_level: cdktf.stringToTerraform(this._facilityLevel),
      hostnameprefix: cdktf.stringToTerraform(this._hostnameprefix),
      ipv4_dscp: cdktf.stringToTerraform(this._ipv4Dscp),
      monitor: cdktf.stringToTerraform(this._monitor),
      suppress_duplicates: cdktf.booleanToTerraform(this._suppressDuplicates),
      trap: cdktf.stringToTerraform(this._trap),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      buffered_level: {
        value: cdktf.stringToHclTerraform(this._bufferedLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      buffered_logging_buffer_size: {
        value: cdktf.numberToHclTerraform(this._bufferedLoggingBufferSize),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      console: {
        value: cdktf.stringToHclTerraform(this._console),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      delete_mode: {
        value: cdktf.stringToHclTerraform(this._deleteMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      device: {
        value: cdktf.stringToHclTerraform(this._device),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      events_display_location: {
        value: cdktf.booleanToHclTerraform(this._eventsDisplayLocation),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      events_level: {
        value: cdktf.stringToHclTerraform(this._eventsLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      facility_level: {
        value: cdktf.stringToHclTerraform(this._facilityLevel),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      hostnameprefix: {
        value: cdktf.stringToHclTerraform(this._hostnameprefix),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ipv4_dscp: {
        value: cdktf.stringToHclTerraform(this._ipv4Dscp),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor: {
        value: cdktf.stringToHclTerraform(this._monitor),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      suppress_duplicates: {
        value: cdktf.booleanToHclTerraform(this._suppressDuplicates),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      trap: {
        value: cdktf.stringToHclTerraform(this._trap),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
