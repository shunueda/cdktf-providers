// https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_log_forwarding_datadog
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GatewayLogForwardingDatadogConfig extends cdktf.TerraformMetaArguments {
  /**
  * Datadog api key
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_log_forwarding_datadog#api_key GatewayLogForwardingDatadog#api_key}
  */
  readonly apiKey?: string;
  /**
  * Enable Log Forwarding [true/false]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_log_forwarding_datadog#enable GatewayLogForwardingDatadog#enable}
  */
  readonly enable?: string;
  /**
  * Datadog host
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_log_forwarding_datadog#host GatewayLogForwardingDatadog#host}
  */
  readonly host?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_log_forwarding_datadog#id GatewayLogForwardingDatadog#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Datadog log service
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_log_forwarding_datadog#log_service GatewayLogForwardingDatadog#log_service}
  */
  readonly logService?: string;
  /**
  * Datadog log source
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_log_forwarding_datadog#log_source GatewayLogForwardingDatadog#log_source}
  */
  readonly logSource?: string;
  /**
  * A comma-separated list of Datadog log tags formatted as key:value strings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_log_forwarding_datadog#log_tags GatewayLogForwardingDatadog#log_tags}
  */
  readonly logTags?: string;
  /**
  * Logs format [text/json]
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_log_forwarding_datadog#output_format GatewayLogForwardingDatadog#output_format}
  */
  readonly outputFormat?: string;
  /**
  * Pull interval in seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_log_forwarding_datadog#pull_interval GatewayLogForwardingDatadog#pull_interval}
  */
  readonly pullInterval?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_log_forwarding_datadog akeyless_gateway_log_forwarding_datadog}
*/
export class GatewayLogForwardingDatadog extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "akeyless_gateway_log_forwarding_datadog";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a GatewayLogForwardingDatadog resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the GatewayLogForwardingDatadog to import
  * @param importFromId The id of the existing GatewayLogForwardingDatadog that should be imported. Refer to the {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_log_forwarding_datadog#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the GatewayLogForwardingDatadog to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "akeyless_gateway_log_forwarding_datadog", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/akeyless-community/akeyless/1.11.1/docs/resources/gateway_log_forwarding_datadog akeyless_gateway_log_forwarding_datadog} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GatewayLogForwardingDatadogConfig = {}
  */
  public constructor(scope: Construct, id: string, config: GatewayLogForwardingDatadogConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'akeyless_gateway_log_forwarding_datadog',
      terraformGeneratorMetadata: {
        providerName: 'akeyless',
        providerVersion: '1.11.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._apiKey = config.apiKey;
    this._enable = config.enable;
    this._host = config.host;
    this._id = config.id;
    this._logService = config.logService;
    this._logSource = config.logSource;
    this._logTags = config.logTags;
    this._outputFormat = config.outputFormat;
    this._pullInterval = config.pullInterval;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: true, required: false
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  public resetApiKey() {
    this._apiKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
  }

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

  // log_service - computed: false, optional: true, required: false
  private _logService?: string; 
  public get logService() {
    return this.getStringAttribute('log_service');
  }
  public set logService(value: string) {
    this._logService = value;
  }
  public resetLogService() {
    this._logService = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logServiceInput() {
    return this._logService;
  }

  // log_source - computed: false, optional: true, required: false
  private _logSource?: string; 
  public get logSource() {
    return this.getStringAttribute('log_source');
  }
  public set logSource(value: string) {
    this._logSource = value;
  }
  public resetLogSource() {
    this._logSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logSourceInput() {
    return this._logSource;
  }

  // log_tags - computed: false, optional: true, required: false
  private _logTags?: string; 
  public get logTags() {
    return this.getStringAttribute('log_tags');
  }
  public set logTags(value: string) {
    this._logTags = value;
  }
  public resetLogTags() {
    this._logTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get logTagsInput() {
    return this._logTags;
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

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      enable: cdktf.stringToTerraform(this._enable),
      host: cdktf.stringToTerraform(this._host),
      id: cdktf.stringToTerraform(this._id),
      log_service: cdktf.stringToTerraform(this._logService),
      log_source: cdktf.stringToTerraform(this._logSource),
      log_tags: cdktf.stringToTerraform(this._logTags),
      output_format: cdktf.stringToTerraform(this._outputFormat),
      pull_interval: cdktf.stringToTerraform(this._pullInterval),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      api_key: {
        value: cdktf.stringToHclTerraform(this._apiKey),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enable: {
        value: cdktf.stringToHclTerraform(this._enable),
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
      log_service: {
        value: cdktf.stringToHclTerraform(this._logService),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_source: {
        value: cdktf.stringToHclTerraform(this._logSource),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      log_tags: {
        value: cdktf.stringToHclTerraform(this._logTags),
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
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
