// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/splunk_logging
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface SplunkLoggingConfig extends cdktf.TerraformMetaArguments {
  /**
  * Custom configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/splunk_logging#custom_input_config SplunkLogging#custom_input_config}
  */
  readonly customInputConfig?: string;
  /**
  * Configuration file. Use the filebase64 function to read from a file.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/splunk_logging#custom_output_config_file SplunkLogging#custom_output_config_file}
  */
  readonly customOutputConfigFile?: string;
  /**
  * List of excluded gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/splunk_logging#excluded_gateways SplunkLogging#excluded_gateways}
  */
  readonly excludedGateways?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/splunk_logging#id SplunkLogging#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Port number.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/splunk_logging#port SplunkLogging#port}
  */
  readonly port?: number;
  /**
  * Server IP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/splunk_logging#server SplunkLogging#server}
  */
  readonly server?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/splunk_logging aviatrix_splunk_logging}
*/
export class SplunkLogging extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_splunk_logging";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a SplunkLogging resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the SplunkLogging to import
  * @param importFromId The id of the existing SplunkLogging that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/splunk_logging#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the SplunkLogging to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_splunk_logging", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.1.10/docs/resources/splunk_logging aviatrix_splunk_logging} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options SplunkLoggingConfig = {}
  */
  public constructor(scope: Construct, id: string, config: SplunkLoggingConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_splunk_logging',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.1.10'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._customInputConfig = config.customInputConfig;
    this._customOutputConfigFile = config.customOutputConfigFile;
    this._excludedGateways = config.excludedGateways;
    this._id = config.id;
    this._port = config.port;
    this._server = config.server;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // custom_input_config - computed: false, optional: true, required: false
  private _customInputConfig?: string; 
  public get customInputConfig() {
    return this.getStringAttribute('custom_input_config');
  }
  public set customInputConfig(value: string) {
    this._customInputConfig = value;
  }
  public resetCustomInputConfig() {
    this._customInputConfig = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInputConfigInput() {
    return this._customInputConfig;
  }

  // custom_output_config_file - computed: false, optional: true, required: false
  private _customOutputConfigFile?: string; 
  public get customOutputConfigFile() {
    return this.getStringAttribute('custom_output_config_file');
  }
  public set customOutputConfigFile(value: string) {
    this._customOutputConfigFile = value;
  }
  public resetCustomOutputConfigFile() {
    this._customOutputConfigFile = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customOutputConfigFileInput() {
    return this._customOutputConfigFile;
  }

  // excluded_gateways - computed: false, optional: true, required: false
  private _excludedGateways?: string[]; 
  public get excludedGateways() {
    return cdktf.Fn.tolist(this.getListAttribute('excluded_gateways'));
  }
  public set excludedGateways(value: string[]) {
    this._excludedGateways = value;
  }
  public resetExcludedGateways() {
    this._excludedGateways = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludedGatewaysInput() {
    return this._excludedGateways;
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

  // port - computed: false, optional: true, required: false
  private _port?: number; 
  public get port() {
    return this.getNumberAttribute('port');
  }
  public set port(value: number) {
    this._port = value;
  }
  public resetPort() {
    this._port = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get portInput() {
    return this._port;
  }

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      custom_input_config: cdktf.stringToTerraform(this._customInputConfig),
      custom_output_config_file: cdktf.stringToTerraform(this._customOutputConfigFile),
      excluded_gateways: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedGateways),
      id: cdktf.stringToTerraform(this._id),
      port: cdktf.numberToTerraform(this._port),
      server: cdktf.stringToTerraform(this._server),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      custom_input_config: {
        value: cdktf.stringToHclTerraform(this._customInputConfig),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_output_config_file: {
        value: cdktf.stringToHclTerraform(this._customOutputConfigFile),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      excluded_gateways: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._excludedGateways),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
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
      server: {
        value: cdktf.stringToHclTerraform(this._server),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
