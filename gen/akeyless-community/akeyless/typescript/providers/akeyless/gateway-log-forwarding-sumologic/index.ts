// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_sumologic
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayLogForwardingSumologicConfig extends cdktf.TerraformMetaArguments {
  /**
  * Enable Log Forwarding [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_sumologic#enable GatewayLogForwardingSumologic#enable}
  */
  readonly enable?: string;
  /**
  * Sumologic endpoint URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_sumologic#endpoint GatewayLogForwardingSumologic#endpoint}
  */
  readonly endpoint?: string;
  /**
  * Sumologic host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_sumologic#host GatewayLogForwardingSumologic#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_sumologic#id GatewayLogForwardingSumologic#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Logs format [text/json]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_sumologic#output_format GatewayLogForwardingSumologic#output_format}
  */
  readonly outputFormat?: string;
  /**
  * Pull interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_sumologic#pull_interval GatewayLogForwardingSumologic#pull_interval}
  */
  readonly pullInterval?: string;
  /**
  * A comma-separated list of Sumologic tags
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_sumologic#sumologic_tags GatewayLogForwardingSumologic#sumologic_tags}
  */
  readonly sumologicTags?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_sumologic akeyless_gateway_log_forwarding_sumologic}
*/
export class GatewayLogForwardingSumologic extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_gateway_log_forwarding_sumologic";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayLogForwardingSumologic resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayLogForwardingSumologic to import
  * @param importFromId The id of the existing GatewayLogForwardingSumologic that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_sumologic#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayLogForwardingSumologic to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_gateway_log_forwarding_sumologic", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.2/docs/resources/gateway_log_forwarding_sumologic akeyless_gateway_log_forwarding_sumologic} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayLogForwardingSumologicConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GatewayLogForwardingSumologicConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akeyless_gateway_log_forwarding_sumologic',
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
    this._endpoint = config.endpoint;
    this._host = config.host;
    this._id = config.id;
    this._outputFormat = config.outputFormat;
    this._pullInterval = config.pullInterval;
    this._sumologicTags = config.sumologicTags;
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

  // endpoint - computed: false, optional: true, required: false
  private _endpoint?: string; 
  public get endpoint() {
    return this.getStringAttribute('endpoint');
  }
  public set endpoint(value: string) {
    this._endpoint = value;
  }
  public resetEndpoint() {
    this._endpoint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endpointInput() {
    return this._endpoint;
  }

  // host - computed: false, optional: true, required: false
  private _host?: string; 
  public get host() {
    return this.getStringAttribute('host');
  }
  public set host(value: string) {
    this._host = value;
  }
  public resetHost() {
    this._host = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostInput() {
    return this._host;
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

  // sumologic_tags - computed: false, optional: true, required: false
  private _sumologicTags?: string; 
  public get sumologicTags() {
    return this.getStringAttribute('sumologic_tags');
  }
  public set sumologicTags(value: string) {
    this._sumologicTags = value;
  }
  public resetSumologicTags() {
    this._sumologicTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sumologicTagsInput() {
    return this._sumologicTags;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      enable: cdktf.stringToTerraform(this._enable),
      endpoint: cdktf.stringToTerraform(this._endpoint),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      output_format: cdktf.stringToTerraform(this._outputFormat),
      pull_interval: cdktf.stringToTerraform(this._pullInterval),
      sumologic_tags: cdktf.stringToTerraform(this._sumologicTags),
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
      endpoint: {
        value: cdktf.stringToHclTerraform(this._endpoint),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      host: {
        value: cdktf.stringToHclTerraform(this._host),
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
      output_format: {
        value: cdktf.stringToHclTerraform(this._outputFormat),
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
      sumologic_tags: {
        value: cdktf.stringToHclTerraform(this._sumologicTags),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
