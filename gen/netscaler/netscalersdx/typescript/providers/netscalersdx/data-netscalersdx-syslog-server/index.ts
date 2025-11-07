// https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/syslog_server
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataNetscalersdxSyslogServerConfig extends cdktf.TerraformMetaArguments {
  /**
  * The ID of this data source. It is the same as the name value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/syslog_server#id DataNetscalersdxSyslogServer#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Syslog server name. Minimum length =  1 Maximum length =  128
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/syslog_server#name DataNetscalersdxSyslogServer#name}
  */
  readonly name?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/syslog_server netscalersdx_syslog_server}
*/
export class DataNetscalersdxSyslogServer extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "netscalersdx_syslog_server";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataNetscalersdxSyslogServer resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataNetscalersdxSyslogServer to import
  * @param importFromId The id of the existing DataNetscalersdxSyslogServer that should be imported. Refer to the {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/syslog_server#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataNetscalersdxSyslogServer to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "netscalersdx_syslog_server", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/netscaler/netscalersdx/0.7.2/docs/data-sources/syslog_server netscalersdx_syslog_server} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataNetscalersdxSyslogServerConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataNetscalersdxSyslogServerConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'netscalersdx_syslog_server',
      terraformGeneratorMetadata: {
        providerName: 'netscalersdx',
        providerVersion: '0.7.2'
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
    this._name = config.name;
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

  // ip_address - computed: true, optional: false, required: false
  public get ipAddress() {
    return this.getStringAttribute('ip_address');
  }

  // log_level_all - computed: true, optional: false, required: false
  public get logLevelAll() {
    return this.getBooleanAttribute('log_level_all');
  }

  // log_level_critical - computed: true, optional: false, required: false
  public get logLevelCritical() {
    return this.getBooleanAttribute('log_level_critical');
  }

  // log_level_error - computed: true, optional: false, required: false
  public get logLevelError() {
    return this.getBooleanAttribute('log_level_error');
  }

  // log_level_info - computed: true, optional: false, required: false
  public get logLevelInfo() {
    return this.getBooleanAttribute('log_level_info');
  }

  // log_level_none - computed: true, optional: false, required: false
  public get logLevelNone() {
    return this.getBooleanAttribute('log_level_none');
  }

  // log_level_warning - computed: true, optional: false, required: false
  public get logLevelWarning() {
    return this.getBooleanAttribute('log_level_warning');
  }

  // name - computed: true, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // port - computed: true, optional: false, required: false
  public get port() {
    return this.getNumberAttribute('port');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
