// https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/metric_export_datadog_config
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface MetricExportDatadogConfigConfig extends cdktf.TerraformMetaArguments {
  /**
  * A Datadog API key.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/metric_export_datadog_config#api_key MetricExportDatadogConfig#api_key}
  */
  readonly apiKey: string;
  /**
  * Cluster ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/metric_export_datadog_config#id MetricExportDatadogConfig#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * The Datadog region to export to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/metric_export_datadog_config#site MetricExportDatadogConfig#site}
  */
  readonly site: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/metric_export_datadog_config cockroach_metric_export_datadog_config}
*/
export class MetricExportDatadogConfig extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "cockroach_metric_export_datadog_config";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a MetricExportDatadogConfig resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the MetricExportDatadogConfig to import
  * @param importFromId The id of the existing MetricExportDatadogConfig that should be imported. Refer to the {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/metric_export_datadog_config#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the MetricExportDatadogConfig to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "cockroach_metric_export_datadog_config", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/cockroachdb/cockroach/1.16.0/docs/resources/metric_export_datadog_config cockroach_metric_export_datadog_config} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options MetricExportDatadogConfigConfig
  */
  public constructor(scope: Construct, id: string, config: MetricExportDatadogConfigConfig) {
    super(scope, id, {
      terraformResourceType: 'cockroach_metric_export_datadog_config',
      terraformGeneratorMetadata: {
        providerName: 'cockroach',
        providerVersion: '1.16.0'
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
    this._id = config.id;
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

  // id - computed: false, optional: false, required: true
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // site - computed: false, optional: false, required: true
  private _site?: string; 
  public get site() {
    return this.getStringAttribute('site');
  }
  public set site(value: string) {
    this._site = value;
  }
  // Temporarily expose input value. Use with caution.
  public get siteInput() {
    return this._site;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // user_message - computed: true, optional: false, required: false
  public get userMessage() {
    return this.getStringAttribute('user_message');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      api_key: cdktf.stringToTerraform(this._apiKey),
      id: cdktf.stringToTerraform(this._id),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
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
