// https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/datadog_agent
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatadogAgentConfig extends cdktf.TerraformMetaArguments {
  /**
  * API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/datadog_agent#api_key DatadogAgent#api_key}
  */
  readonly apiKey: string;
  /**
  * List of excluded gateways.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/datadog_agent#excluded_gateways DatadogAgent#excluded_gateways}
  */
  readonly excludedGateways?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/datadog_agent#id DatadogAgent#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Only export metrics without exporting logs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/datadog_agent#metrics_only DatadogAgent#metrics_only}
  */
  readonly metricsOnly?: boolean | cdktf.IResolvable;
  /**
  * Site preference.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/datadog_agent#site DatadogAgent#site}
  */
  readonly site?: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/datadog_agent aviatrix_datadog_agent}
*/
export class DatadogAgent extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "aviatrix_datadog_agent";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DatadogAgent resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DatadogAgent to import
  * @param importFromId The id of the existing DatadogAgent that should be imported. Refer to the {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/datadog_agent#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DatadogAgent to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "aviatrix_datadog_agent", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aviatrixsystems/aviatrix/8.2.0/docs/resources/datadog_agent aviatrix_datadog_agent} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatadogAgentConfig
  */
  public constructor(scope: Construct, id: string, config: DatadogAgentConfig) {
    super(scope, id, {
      terraformResourceType: 'aviatrix_datadog_agent',
      terraformGeneratorMetadata: {
        providerName: 'aviatrix',
        providerVersion: '8.2.0',
        providerVersionConstraint: '8.2.0'
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
    this._excludedGateways = config.excludedGateways;
    this._id = config.id;
    this._metricsOnly = config.metricsOnly;
    this._site = config.site;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // api_key - computed: false, optional: false, required: true
  private _apiKey?: string; 
  public get apiKey() {
    return this.getStringAttribute('api_key');
  }
  public set apiKey(value: string) {
    this._apiKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get apiKeyInput() {
    return this._apiKey;
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

  // metrics_only - computed: false, optional: true, required: false
  private _metricsOnly?: boolean | cdktf.IResolvable; 
  public get metricsOnly() {
    return this.getBooleanAttribute('metrics_only');
  }
  public set metricsOnly(value: boolean | cdktf.IResolvable) {
    this._metricsOnly = value;
  }
  public resetMetricsOnly() {
    this._metricsOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsOnlyInput() {
    return this._metricsOnly;
  }

  // site - computed: false, optional: true, required: false
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  public resetSite() {
    this._site = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
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
      api_key: cdktf.stringToTerraform(this._apiKey),
      excluded_gateways: cdktf.listMapper(cdktf.stringToTerraform, false)(this._excludedGateways),
      id: cdktf.stringToTerraform(this._id),
      metrics_only: cdktf.booleanToTerraform(this._metricsOnly),
      site: cdktf.stringToTerraform(this._site),
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
      metrics_only: {
        value: cdktf.booleanToHclTerraform(this._metricsOnly),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      site: {
        value: cdktf.stringToHclTerraform(this._site),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
