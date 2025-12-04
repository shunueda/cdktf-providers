// https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SystemLoggingActionConfig extends cdktf.TerraformMetaArguments {
  /**
  * <em>Resource path for CRUD operations. This is an internal service field, setting a value is not required.</em>
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action#___path___ SystemLoggingAction#___path___}
  */
  readonly path?: string;
  /**
  * Whether to use bsd-syslog as defined in RFC 3164.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action#bsd_syslog SystemLoggingAction#bsd_syslog}
  */
  readonly bsdSyslog?: boolean | cdktf.IResolvable;
  /**
  * Option helps remote syslog to distinguish between individual events within sent batch
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action#cef_event_delimiter SystemLoggingAction#cef_event_delimiter}
  */
  readonly cefEventDelimiter?: string;
  /**
  * Specifies number of files used to store log messages, applicable only if `action=disk`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action#disk_file_count SystemLoggingAction#disk_file_count}
  */
  readonly diskFileCount?: number;
  /**
  * Name of the file used to store log messages, applicable only if `action=disk`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action#disk_file_name SystemLoggingAction#disk_file_name}
  */
  readonly diskFileName?: string;
  /**
  * Specifies maximum size of file in lines, applicable only if `action=disk`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action#disk_lines_per_file SystemLoggingAction#disk_lines_per_file}
  */
  readonly diskLinesPerFile?: number;
  /**
  * Whether to stop to save log messages to disk after the specified disk-lines-per-file and disk-file-count number is reached, applicable only if `action=disk`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action#disk_stop_on_full SystemLoggingAction#disk_stop_on_full}
  */
  readonly diskStopOnFull?: boolean | cdktf.IResolvable;
  /**
  * Whether to use tls when sending email, applicable only if `action=email`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action#email_start_tls SystemLoggingAction#email_start_tls}
  */
  readonly emailStartTls?: boolean | cdktf.IResolvable;
  /**
  * Email address where logs are sent, applicable only if `action=email`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action#email_to SystemLoggingAction#email_to}
  */
  readonly emailTo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action#id SystemLoggingAction#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Number of records in local memory buffer, applicable only if `action=memory`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action#memory_lines SystemLoggingAction#memory_lines}
  */
  readonly memoryLines?: number;
  /**
  * Whether to stop to save log messages in local buffer after the specified memory-lines number is reached.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action#memory_stop_on_full SystemLoggingAction#memory_stop_on_full}
  */
  readonly memoryStopOnFull?: boolean | cdktf.IResolvable;
  /**
  * Name of an action.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action#name SystemLoggingAction#name}
  */
  readonly name: string;
  /**
  * Whether to keep log messages, which have not yet been displayed in console, applicable if `action=echo`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action#remember SystemLoggingAction#remember}
  */
  readonly remember?: boolean | cdktf.IResolvable;
  /**
  * Remote logging server's IP/IPv6 address, applicable if `action=remote`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action#remote SystemLoggingAction#remote}
  */
  readonly remote?: string;
  /**
  * Format for logs to be sent to remote instance:
  * 
  *     - **cef** - logs are sent in CEF format;
  *     - **default** - logs are sent as it is;
  *     - **syslog** - logs are sent in BSD-syslog format.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action#remote_log_format SystemLoggingAction#remote_log_format}
  */
  readonly remoteLogFormat?: string;
  /**
  * Remote logging server's UDP port, applicable if `action=remote`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action#remote_port SystemLoggingAction#remote_port}
  */
  readonly remotePort?: number;
  /**
  * Protocol for remote logging messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action#remote_protocol SystemLoggingAction#remote_protocol}
  */
  readonly remoteProtocol?: string;
  /**
  * Source address used when sending packets to remote server, applicable if `action=remote`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action#src_address SystemLoggingAction#src_address}
  */
  readonly srcAddress?: string;
  /**
  * SYSLOG facility, applicable if `action=remote`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action#syslog_facility SystemLoggingAction#syslog_facility}
  */
  readonly syslogFacility?: string;
  /**
  * Severity level indicator defined in RFC 3164, applicable if `action=remote`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action#syslog_severity SystemLoggingAction#syslog_severity}
  */
  readonly syslogSeverity?: string;
  /**
  * SYSLOG time format (`bsd-syslog` or `iso8601`).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action#syslog_time_format SystemLoggingAction#syslog_time_format}
  */
  readonly syslogTimeFormat?: string;
  /**
  * Storage facility or target of log messages.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action#target SystemLoggingAction#target}
  */
  readonly target: string;
  /**
  * The VRF table this resource operates on.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action#vrf SystemLoggingAction#vrf}
  */
  readonly vrf?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action routeros_system_logging_action}
*/
export class SystemLoggingAction extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "routeros_system_logging_action";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SystemLoggingAction resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SystemLoggingAction to import
  * @param importFromId The id of the existing SystemLoggingAction that should be imported. Refer to the {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SystemLoggingAction to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "routeros_system_logging_action", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/terraform-routeros/routeros/1.97.0/docs/resources/system_logging_action routeros_system_logging_action} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SystemLoggingActionConfig
  */
  public constructor(scope: Construct, id: string, config: SystemLoggingActionConfig) {
    super(scope, id, {
      terraformResourceType: 'routeros_system_logging_action',
      terraformGeneratorMetadata: {
        providerName: 'routeros',
        providerVersion: '1.97.0',
        providerVersionConstraint: '1.97.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._path = config.path;
    this._bsdSyslog = config.bsdSyslog;
    this._cefEventDelimiter = config.cefEventDelimiter;
    this._diskFileCount = config.diskFileCount;
    this._diskFileName = config.diskFileName;
    this._diskLinesPerFile = config.diskLinesPerFile;
    this._diskStopOnFull = config.diskStopOnFull;
    this._emailStartTls = config.emailStartTls;
    this._emailTo = config.emailTo;
    this._id = config.id;
    this._memoryLines = config.memoryLines;
    this._memoryStopOnFull = config.memoryStopOnFull;
    this._name = config.name;
    this._remember = config.remember;
    this._remote = config.remote;
    this._remoteLogFormat = config.remoteLogFormat;
    this._remotePort = config.remotePort;
    this._remoteProtocol = config.remoteProtocol;
    this._srcAddress = config.srcAddress;
    this._syslogFacility = config.syslogFacility;
    this._syslogSeverity = config.syslogSeverity;
    this._syslogTimeFormat = config.syslogTimeFormat;
    this._target = config.target;
    this._vrf = config.vrf;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // ___path___ - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('___path___');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // bsd_syslog - computed: false, optional: true, required: false
  private _bsdSyslog?: boolean | cdktf.IResolvable; 
  public get bsdSyslog() {
    return this.getBooleanAttribute('bsd_syslog');
  }
  public set bsdSyslog(value: boolean | cdktf.IResolvable) {
    this._bsdSyslog = value;
  }
  public resetBsdSyslog() {
    this._bsdSyslog = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bsdSyslogInput() {
    return this._bsdSyslog;
  }

  // cef_event_delimiter - computed: false, optional: true, required: false
  private _cefEventDelimiter?: string; 
  public get cefEventDelimiter() {
    return this.getStringAttribute('cef_event_delimiter');
  }
  public set cefEventDelimiter(value: string) {
    this._cefEventDelimiter = value;
  }
  public resetCefEventDelimiter() {
    this._cefEventDelimiter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cefEventDelimiterInput() {
    return this._cefEventDelimiter;
  }

  // default - computed: true, optional: false, required: false
  public get default() {
    return this.getBooleanAttribute('default');
  }

  // disk_file_count - computed: false, optional: true, required: false
  private _diskFileCount?: number; 
  public get diskFileCount() {
    return this.getNumberAttribute('disk_file_count');
  }
  public set diskFileCount(value: number) {
    this._diskFileCount = value;
  }
  public resetDiskFileCount() {
    this._diskFileCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskFileCountInput() {
    return this._diskFileCount;
  }

  // disk_file_name - computed: false, optional: true, required: false
  private _diskFileName?: string; 
  public get diskFileName() {
    return this.getStringAttribute('disk_file_name');
  }
  public set diskFileName(value: string) {
    this._diskFileName = value;
  }
  public resetDiskFileName() {
    this._diskFileName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskFileNameInput() {
    return this._diskFileName;
  }

  // disk_lines_per_file - computed: false, optional: true, required: false
  private _diskLinesPerFile?: number; 
  public get diskLinesPerFile() {
    return this.getNumberAttribute('disk_lines_per_file');
  }
  public set diskLinesPerFile(value: number) {
    this._diskLinesPerFile = value;
  }
  public resetDiskLinesPerFile() {
    this._diskLinesPerFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskLinesPerFileInput() {
    return this._diskLinesPerFile;
  }

  // disk_stop_on_full - computed: false, optional: true, required: false
  private _diskStopOnFull?: boolean | cdktf.IResolvable; 
  public get diskStopOnFull() {
    return this.getBooleanAttribute('disk_stop_on_full');
  }
  public set diskStopOnFull(value: boolean | cdktf.IResolvable) {
    this._diskStopOnFull = value;
  }
  public resetDiskStopOnFull() {
    this._diskStopOnFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get diskStopOnFullInput() {
    return this._diskStopOnFull;
  }

  // email_start_tls - computed: false, optional: true, required: false
  private _emailStartTls?: boolean | cdktf.IResolvable; 
  public get emailStartTls() {
    return this.getBooleanAttribute('email_start_tls');
  }
  public set emailStartTls(value: boolean | cdktf.IResolvable) {
    this._emailStartTls = value;
  }
  public resetEmailStartTls() {
    this._emailStartTls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailStartTlsInput() {
    return this._emailStartTls;
  }

  // email_to - computed: false, optional: true, required: false
  private _emailTo?: string; 
  public get emailTo() {
    return this.getStringAttribute('email_to');
  }
  public set emailTo(value: string) {
    this._emailTo = value;
  }
  public resetEmailTo() {
    this._emailTo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailToInput() {
    return this._emailTo;
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

  // memory_lines - computed: false, optional: true, required: false
  private _memoryLines?: number; 
  public get memoryLines() {
    return this.getNumberAttribute('memory_lines');
  }
  public set memoryLines(value: number) {
    this._memoryLines = value;
  }
  public resetMemoryLines() {
    this._memoryLines = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryLinesInput() {
    return this._memoryLines;
  }

  // memory_stop_on_full - computed: false, optional: true, required: false
  private _memoryStopOnFull?: boolean | cdktf.IResolvable; 
  public get memoryStopOnFull() {
    return this.getBooleanAttribute('memory_stop_on_full');
  }
  public set memoryStopOnFull(value: boolean | cdktf.IResolvable) {
    this._memoryStopOnFull = value;
  }
  public resetMemoryStopOnFull() {
    this._memoryStopOnFull = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryStopOnFullInput() {
    return this._memoryStopOnFull;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // remember - computed: false, optional: true, required: false
  private _remember?: boolean | cdktf.IResolvable; 
  public get remember() {
    return this.getBooleanAttribute('remember');
  }
  public set remember(value: boolean | cdktf.IResolvable) {
    this._remember = value;
  }
  public resetRemember() {
    this._remember = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rememberInput() {
    return this._remember;
  }

  // remote - computed: false, optional: true, required: false
  private _remote?: string; 
  public get remote() {
    return this.getStringAttribute('remote');
  }
  public set remote(value: string) {
    this._remote = value;
  }
  public resetRemote() {
    this._remote = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteInput() {
    return this._remote;
  }

  // remote_log_format - computed: false, optional: true, required: false
  private _remoteLogFormat?: string; 
  public get remoteLogFormat() {
    return this.getStringAttribute('remote_log_format');
  }
  public set remoteLogFormat(value: string) {
    this._remoteLogFormat = value;
  }
  public resetRemoteLogFormat() {
    this._remoteLogFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteLogFormatInput() {
    return this._remoteLogFormat;
  }

  // remote_port - computed: false, optional: true, required: false
  private _remotePort?: number; 
  public get remotePort() {
    return this.getNumberAttribute('remote_port');
  }
  public set remotePort(value: number) {
    this._remotePort = value;
  }
  public resetRemotePort() {
    this._remotePort = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remotePortInput() {
    return this._remotePort;
  }

  // remote_protocol - computed: false, optional: true, required: false
  private _remoteProtocol?: string; 
  public get remoteProtocol() {
    return this.getStringAttribute('remote_protocol');
  }
  public set remoteProtocol(value: string) {
    this._remoteProtocol = value;
  }
  public resetRemoteProtocol() {
    this._remoteProtocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get remoteProtocolInput() {
    return this._remoteProtocol;
  }

  // src_address - computed: false, optional: true, required: false
  private _srcAddress?: string; 
  public get srcAddress() {
    return this.getStringAttribute('src_address');
  }
  public set srcAddress(value: string) {
    this._srcAddress = value;
  }
  public resetSrcAddress() {
    this._srcAddress = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get srcAddressInput() {
    return this._srcAddress;
  }

  // syslog_facility - computed: false, optional: true, required: false
  private _syslogFacility?: string; 
  public get syslogFacility() {
    return this.getStringAttribute('syslog_facility');
  }
  public set syslogFacility(value: string) {
    this._syslogFacility = value;
  }
  public resetSyslogFacility() {
    this._syslogFacility = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogFacilityInput() {
    return this._syslogFacility;
  }

  // syslog_severity - computed: false, optional: true, required: false
  private _syslogSeverity?: string; 
  public get syslogSeverity() {
    return this.getStringAttribute('syslog_severity');
  }
  public set syslogSeverity(value: string) {
    this._syslogSeverity = value;
  }
  public resetSyslogSeverity() {
    this._syslogSeverity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogSeverityInput() {
    return this._syslogSeverity;
  }

  // syslog_time_format - computed: false, optional: true, required: false
  private _syslogTimeFormat?: string; 
  public get syslogTimeFormat() {
    return this.getStringAttribute('syslog_time_format');
  }
  public set syslogTimeFormat(value: string) {
    this._syslogTimeFormat = value;
  }
  public resetSyslogTimeFormat() {
    this._syslogTimeFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syslogTimeFormatInput() {
    return this._syslogTimeFormat;
  }

  // target - computed: false, optional: false, required: true
  private _target?: string; 
  public get target() {
    return this.getStringAttribute('target');
  }
  public set target(value: string) {
    this._target = value;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target;
  }

  // vrf - computed: false, optional: true, required: false
  private _vrf?: string; 
  public get vrf() {
    return this.getStringAttribute('vrf');
  }
  public set vrf(value: string) {
    this._vrf = value;
  }
  public resetVrf() {
    this._vrf = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get vrfInput() {
    return this._vrf;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      ___path___: cdktf.stringToTerraform(this._path),
      bsd_syslog: cdktf.booleanToTerraform(this._bsdSyslog),
      cef_event_delimiter: cdktf.stringToTerraform(this._cefEventDelimiter),
      disk_file_count: cdktf.numberToTerraform(this._diskFileCount),
      disk_file_name: cdktf.stringToTerraform(this._diskFileName),
      disk_lines_per_file: cdktf.numberToTerraform(this._diskLinesPerFile),
      disk_stop_on_full: cdktf.booleanToTerraform(this._diskStopOnFull),
      email_start_tls: cdktf.booleanToTerraform(this._emailStartTls),
      email_to: cdktf.stringToTerraform(this._emailTo),
      id: cdktf.stringToTerraform(this._id),
      memory_lines: cdktf.numberToTerraform(this._memoryLines),
      memory_stop_on_full: cdktf.booleanToTerraform(this._memoryStopOnFull),
      name: cdktf.stringToTerraform(this._name),
      remember: cdktf.booleanToTerraform(this._remember),
      remote: cdktf.stringToTerraform(this._remote),
      remote_log_format: cdktf.stringToTerraform(this._remoteLogFormat),
      remote_port: cdktf.numberToTerraform(this._remotePort),
      remote_protocol: cdktf.stringToTerraform(this._remoteProtocol),
      src_address: cdktf.stringToTerraform(this._srcAddress),
      syslog_facility: cdktf.stringToTerraform(this._syslogFacility),
      syslog_severity: cdktf.stringToTerraform(this._syslogSeverity),
      syslog_time_format: cdktf.stringToTerraform(this._syslogTimeFormat),
      target: cdktf.stringToTerraform(this._target),
      vrf: cdktf.stringToTerraform(this._vrf),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      ___path___: {
        value: cdktf.stringToHclTerraform(this._path),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      bsd_syslog: {
        value: cdktf.booleanToHclTerraform(this._bsdSyslog),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cef_event_delimiter: {
        value: cdktf.stringToHclTerraform(this._cefEventDelimiter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_file_count: {
        value: cdktf.numberToHclTerraform(this._diskFileCount),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_file_name: {
        value: cdktf.stringToHclTerraform(this._diskFileName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disk_lines_per_file: {
        value: cdktf.numberToHclTerraform(this._diskLinesPerFile),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      disk_stop_on_full: {
        value: cdktf.booleanToHclTerraform(this._diskStopOnFull),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email_start_tls: {
        value: cdktf.booleanToHclTerraform(this._emailStartTls),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      email_to: {
        value: cdktf.stringToHclTerraform(this._emailTo),
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
      memory_lines: {
        value: cdktf.numberToHclTerraform(this._memoryLines),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      memory_stop_on_full: {
        value: cdktf.booleanToHclTerraform(this._memoryStopOnFull),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remember: {
        value: cdktf.booleanToHclTerraform(this._remember),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      remote: {
        value: cdktf.stringToHclTerraform(this._remote),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_log_format: {
        value: cdktf.stringToHclTerraform(this._remoteLogFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      remote_port: {
        value: cdktf.numberToHclTerraform(this._remotePort),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      remote_protocol: {
        value: cdktf.stringToHclTerraform(this._remoteProtocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      src_address: {
        value: cdktf.stringToHclTerraform(this._srcAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syslog_facility: {
        value: cdktf.stringToHclTerraform(this._syslogFacility),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syslog_severity: {
        value: cdktf.stringToHclTerraform(this._syslogSeverity),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      syslog_time_format: {
        value: cdktf.stringToHclTerraform(this._syslogTimeFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      target: {
        value: cdktf.stringToHclTerraform(this._target),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      vrf: {
        value: cdktf.stringToHclTerraform(this._vrf),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
