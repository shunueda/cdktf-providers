// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_logz_io
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayLogForwardingLogzIoConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable Log Forwarding [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_logz_io#enable GatewayLogForwardingLogzIo#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_logz_io#id GatewayLogForwardingLogzIo#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Logz-io token
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_logz_io#logz_io_token GatewayLogForwardingLogzIo#logz_io_token}
  */
  readonly logzIoToken?: string;
  /**
  * Logs format [text/json]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_logz_io#output_format GatewayLogForwardingLogzIo#output_format}
  */
  readonly outputFormat?: string;
  /**
  * Logz-io protocol [tcp/https]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_logz_io#protocol GatewayLogForwardingLogzIo#protocol}
  */
  readonly protocol?: string;
  /**
  * Pull interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_logz_io#pull_interval GatewayLogForwardingLogzIo#pull_interval}
  */
  readonly pullInterval?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_logz_io akeyless_gateway_log_forwarding_logz_io}
*/
export class GatewayLogForwardingLogzIo extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_gateway_log_forwarding_logz_io";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayLogForwardingLogzIo resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayLogForwardingLogzIo to import
  * @param importFromId The id of the existing GatewayLogForwardingLogzIo that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_logz_io#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayLogForwardingLogzIo to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_gateway_log_forwarding_logz_io", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_logz_io akeyless_gateway_log_forwarding_logz_io} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayLogForwardingLogzIoConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GatewayLogForwardingLogzIoConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akeyless_gateway_log_forwarding_logz_io',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.2',
        providerVersionConstraint: '1.11.2'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._enable = config.enable;
    this._id = config.id;
    this._logzIoToken = config.logzIoToken;
    this._outputFormat = config.outputFormat;
    this._protocol = config.protocol;
    this._pullInterval = config.pullInterval;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
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

  // logz_io_token - computed: false, optional: true, required: false
  private _logzIoToken?: string; 
  public get logzIoToken() {
    return this.getStringAttribute('logz_io_token');
  }
  public set logzIoToken(value: string) {
    this._logzIoToken = value;
  }
  public resetLogzIoToken() {
    this._logzIoToken = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logzIoTokenInput() {
    return this._logzIoToken;
  }

  // output_format - computed: false, optional: true, required: false
  private _outputFormat?: string; 
  public get outputFormat() {
    return this.getStringAttribute('output_format');
  }
  public set outputFormat(value: string) {
    this._outputFormat = value;
  }
  public resetOutputFormat() {
    this._outputFormat = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputFormatInput() {
    return this._outputFormat;
  }

  // protocol - computed: false, optional: true, required: false
  private _protocol?: string; 
  public get protocol() {
    return this.getStringAttribute('protocol');
  }
  public set protocol(value: string) {
    this._protocol = value;
  }
  public resetProtocol() {
    this._protocol = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protocolInput() {
    return this._protocol;
  }

  // pull_interval - computed: false, optional: true, required: false
  private _pullInterval?: string; 
  public get pullInterval() {
    return this.getStringAttribute('pull_interval');
  }
  public set pullInterval(value: string) {
    this._pullInterval = value;
  }
  public resetPullInterval() {
    this._pullInterval = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pullIntervalInput() {
    return this._pullInterval;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable: cdktf.stringToTerraform(this._enable),
      id: cdktf.stringToTerraform(this._id),
      logz_io_token: cdktf.stringToTerraform(this._logzIoToken),
      output_format: cdktf.stringToTerraform(this._outputFormat),
      protocol: cdktf.stringToTerraform(this._protocol),
      pull_interval: cdktf.stringToTerraform(this._pullInterval),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      enable: {
        value: cdktf.stringToHclTerraform(this._enable),
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
      logz_io_token: {
        value: cdktf.stringToHclTerraform(this._logzIoToken),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      output_format: {
        value: cdktf.stringToHclTerraform(this._outputFormat),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      protocol: {
        value: cdktf.stringToHclTerraform(this._protocol),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      pull_interval: {
        value: cdktf.stringToHclTerraform(this._pullInterval),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
