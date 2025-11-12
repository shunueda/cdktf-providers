// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/syslog_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SyslogServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/syslog_server#id SyslogServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Syslog server IP address. Minimum length =  1 Maximum length =  64
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/syslog_server#ip_address SyslogServer#ip_address}
  */
  readonly ipAddress: string;
  /**
  * Send logs of all levels to this syslog server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/syslog_server#log_level_all SyslogServer#log_level_all}
  */
  readonly logLevelAll?: boolean | cdktf.IResolvable;
  /**
  * Send logs of level critical to this syslog server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/syslog_server#log_level_critical SyslogServer#log_level_critical}
  */
  readonly logLevelCritical?: boolean | cdktf.IResolvable;
  /**
  * Send logs of level error to this syslog server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/syslog_server#log_level_error SyslogServer#log_level_error}
  */
  readonly logLevelError?: boolean | cdktf.IResolvable;
  /**
  * Send logs of level info to this syslog server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/syslog_server#log_level_info SyslogServer#log_level_info}
  */
  readonly logLevelInfo?: boolean | cdktf.IResolvable;
  /**
  * Send no logs to this syslog server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/syslog_server#log_level_none SyslogServer#log_level_none}
  */
  readonly logLevelNone?: boolean | cdktf.IResolvable;
  /**
  * Send logs of level warning to this syslog server.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/syslog_server#log_level_warning SyslogServer#log_level_warning}
  */
  readonly logLevelWarning?: boolean | cdktf.IResolvable;
  /**
  * Syslog server name. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/syslog_server#name SyslogServer#name}
  */
  readonly name: string;
  /**
  * Syslog server port. Maximum value =  
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/syslog_server#port SyslogServer#port}
  */
  readonly port: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/syslog_server netscalersdx_syslog_server}
*/
export class SyslogServer extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_syslog_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SyslogServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SyslogServer to import
  * @param importFromId The id of the existing SyslogServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/syslog_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SyslogServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_syslog_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/resources/syslog_server netscalersdx_syslog_server} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SyslogServerConfig
  */
  public constructor(scope: Construct, id: string, config: SyslogServerConfig) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_syslog_server',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2',
        providerVersionConstraint: '0.7.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._id = config.id;
    this._ipAddress = config.ipAddress;
    this._logLevelAll = config.logLevelAll;
    this._logLevelCritical = config.logLevelCritical;
    this._logLevelError = config.logLevelError;
    this._logLevelInfo = config.logLevelInfo;
    this._logLevelNone = config.logLevelNone;
    this._logLevelWarning = config.logLevelWarning;
    this._name = config.name;
    this._port = config.port;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // ip_address - computed: false, optional: false, required: true
  private _ipAddress?: string; 
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }
  public set ipAddress(value: string) {
    this._ipAddress = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ipAddressInput() {
    return this._ipAddress;
  }

  // log_level_all - computed: true, optional: true, required: false
  private _logLevelAll?: boolean | cdktf.IResolvable; 
  public get logLevelAll() {
    return this.getBooleanAttribute('log_level_all');
  }
  public set logLevelAll(value: boolean | cdktf.IResolvable) {
    this._logLevelAll = value;
  }
  public resetLogLevelAll() {
    this._logLevelAll = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelAllInput() {
    return this._logLevelAll;
  }

  // log_level_critical - computed: true, optional: true, required: false
  private _logLevelCritical?: boolean | cdktf.IResolvable; 
  public get logLevelCritical() {
    return this.getBooleanAttribute('log_level_critical');
  }
  public set logLevelCritical(value: boolean | cdktf.IResolvable) {
    this._logLevelCritical = value;
  }
  public resetLogLevelCritical() {
    this._logLevelCritical = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelCriticalInput() {
    return this._logLevelCritical;
  }

  // log_level_error - computed: true, optional: true, required: false
  private _logLevelError?: boolean | cdktf.IResolvable; 
  public get logLevelError() {
    return this.getBooleanAttribute('log_level_error');
  }
  public set logLevelError(value: boolean | cdktf.IResolvable) {
    this._logLevelError = value;
  }
  public resetLogLevelError() {
    this._logLevelError = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelErrorInput() {
    return this._logLevelError;
  }

  // log_level_info - computed: true, optional: true, required: false
  private _logLevelInfo?: boolean | cdktf.IResolvable; 
  public get logLevelInfo() {
    return this.getBooleanAttribute('log_level_info');
  }
  public set logLevelInfo(value: boolean | cdktf.IResolvable) {
    this._logLevelInfo = value;
  }
  public resetLogLevelInfo() {
    this._logLevelInfo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelInfoInput() {
    return this._logLevelInfo;
  }

  // log_level_none - computed: true, optional: true, required: false
  private _logLevelNone?: boolean | cdktf.IResolvable; 
  public get logLevelNone() {
    return this.getBooleanAttribute('log_level_none');
  }
  public set logLevelNone(value: boolean | cdktf.IResolvable) {
    this._logLevelNone = value;
  }
  public resetLogLevelNone() {
    this._logLevelNone = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelNoneInput() {
    return this._logLevelNone;
  }

  // log_level_warning - computed: true, optional: true, required: false
  private _logLevelWarning?: boolean | cdktf.IResolvable; 
  public get logLevelWarning() {
    return this.getBooleanAttribute('log_level_warning');
  }
  public set logLevelWarning(value: boolean | cdktf.IResolvable) {
    this._logLevelWarning = value;
  }
  public resetLogLevelWarning() {
    this._logLevelWarning = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logLevelWarningInput() {
    return this._logLevelWarning;
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

  // port - computed: false, optional: false, required: true
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      ip_address: cdktf.stringToTerraform(this._ipAddress),
      log_level_all: cdktf.booleanToTerraform(this._logLevelAll),
      log_level_critical: cdktf.booleanToTerraform(this._logLevelCritical),
      log_level_error: cdktf.booleanToTerraform(this._logLevelError),
      log_level_info: cdktf.booleanToTerraform(this._logLevelInfo),
      log_level_none: cdktf.booleanToTerraform(this._logLevelNone),
      log_level_warning: cdktf.booleanToTerraform(this._logLevelWarning),
      name: cdktf.stringToTerraform(this._name),
      port: cdktf.numberToTerraform(this._port),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      ip_address: {
        value: cdktf.stringToHclTerraform(this._ipAddress),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_level_all: {
        value: cdktf.booleanToHclTerraform(this._logLevelAll),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_level_critical: {
        value: cdktf.booleanToHclTerraform(this._logLevelCritical),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_level_error: {
        value: cdktf.booleanToHclTerraform(this._logLevelError),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_level_info: {
        value: cdktf.booleanToHclTerraform(this._logLevelInfo),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_level_none: {
        value: cdktf.booleanToHclTerraform(this._logLevelNone),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      log_level_warning: {
        value: cdktf.booleanToHclTerraform(this._logLevelWarning),
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
      port: {
        value: cdktf.numberToHclTerraform(this._port),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
