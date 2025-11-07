// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/prometheus_monitor_attribute_metric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataPingdirectoryPrometheusMonitorAttributeMetricConfig extends cdktf.TerraformMetaArguments {
  /**
  * Name of the parent HTTP Servlet Extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/prometheus_monitor_attribute_metric#http_servlet_extension_name DataPingdirectoryPrometheusMonitorAttributeMetric#http_servlet_extension_name}
  */
  readonly httpServletExtensionName: string;
  /**
  * The name that will be used in the metric to be consumed by Prometheus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/prometheus_monitor_attribute_metric#metric_name DataPingdirectoryPrometheusMonitorAttributeMetric#metric_name}
  */
  readonly metricName: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/prometheus_monitor_attribute_metric pingdirectory_prometheus_monitor_attribute_metric}
*/
export class DataPingdirectoryPrometheusMonitorAttributeMetric extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_prometheus_monitor_attribute_metric";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataPingdirectoryPrometheusMonitorAttributeMetric resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataPingdirectoryPrometheusMonitorAttributeMetric to import
  * @param importFromId The id of the existing DataPingdirectoryPrometheusMonitorAttributeMetric that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/prometheus_monitor_attribute_metric#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataPingdirectoryPrometheusMonitorAttributeMetric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_prometheus_monitor_attribute_metric", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/data-sources/prometheus_monitor_attribute_metric pingdirectory_prometheus_monitor_attribute_metric} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataPingdirectoryPrometheusMonitorAttributeMetricConfig
  */
  public constructor(scope: Construct, id: string, config: DataPingdirectoryPrometheusMonitorAttributeMetricConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_prometheus_monitor_attribute_metric',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._httpServletExtensionName = config.httpServletExtensionName;
    this._metricName = config.metricName;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: true, optional: false, required: false
  public get filter() {
    return this.getStringAttribute('filter');
  }

  // http_servlet_extension_name - computed: false, optional: false, required: true
  private _httpServletExtensionName?: string; 
  public get httpServletExtensionName() {
    return this.getStringAttribute('http_servlet_extension_name');
  }
  public set httpServletExtensionName(value: string) {
    this._httpServletExtensionName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get httpServletExtensionNameInput() {
    return this._httpServletExtensionName;
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // label_name_value_pair - computed: true, optional: false, required: false
  public get labelNameValuePair() {
    return cdktf.Fn.tolist(this.getListAttribute('label_name_value_pair'));
  }

  // metric_description - computed: true, optional: false, required: false
  public get metricDescription() {
    return this.getStringAttribute('metric_description');
  }

  // metric_name - computed: false, optional: false, required: true
  private _metricName?: string; 
  public get metricName() {
    return this.getStringAttribute('metric_name');
  }
  public set metricName(value: string) {
    this._metricName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameInput() {
    return this._metricName;
  }

  // metric_type - computed: true, optional: false, required: false
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }

  // monitor_attribute_name - computed: true, optional: false, required: false
  public get monitorAttributeName() {
    return this.getStringAttribute('monitor_attribute_name');
  }

  // monitor_object_class_name - computed: true, optional: false, required: false
  public get monitorObjectClassName() {
    return this.getStringAttribute('monitor_object_class_name');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      http_servlet_extension_name: cdktf.stringToTerraform(this._httpServletExtensionName),
      metric_name: cdktf.stringToTerraform(this._metricName),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      http_servlet_extension_name: {
        value: cdktf.stringToHclTerraform(this._httpServletExtensionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_name: {
        value: cdktf.stringToHclTerraform(this._metricName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
