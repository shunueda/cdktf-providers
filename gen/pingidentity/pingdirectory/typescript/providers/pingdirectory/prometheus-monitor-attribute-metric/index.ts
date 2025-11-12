// https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/prometheus_monitor_attribute_metric
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface PrometheusMonitorAttributeMetricConfig extends cdktf.TerraformMetaArguments {
  /**
  * A filter that may be used to restrict the set of monitor entries for which the metric should be generated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/prometheus_monitor_attribute_metric#filter PrometheusMonitorAttributeMetric#filter}
  */
  readonly filter?: string;
  /**
  * Name of the parent HTTP Servlet Extension
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/prometheus_monitor_attribute_metric#http_servlet_extension_name PrometheusMonitorAttributeMetric#http_servlet_extension_name}
  */
  readonly httpServletExtensionName: string;
  /**
  * A set of name-value pairs for labels that should be included in the published metric for the target attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/prometheus_monitor_attribute_metric#label_name_value_pair PrometheusMonitorAttributeMetric#label_name_value_pair}
  */
  readonly labelNameValuePair?: string[];
  /**
  * A human-readable description that should be published as part of the metric definition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/prometheus_monitor_attribute_metric#metric_description PrometheusMonitorAttributeMetric#metric_description}
  */
  readonly metricDescription?: string;
  /**
  * The name that will be used in the metric to be consumed by Prometheus.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/prometheus_monitor_attribute_metric#metric_name PrometheusMonitorAttributeMetric#metric_name}
  */
  readonly metricName: string;
  /**
  * The metric type that should be used for the value of the specified monitor attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/prometheus_monitor_attribute_metric#metric_type PrometheusMonitorAttributeMetric#metric_type}
  */
  readonly metricType: string;
  /**
  * The name of the monitor attribute that contains the numeric value to be published.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/prometheus_monitor_attribute_metric#monitor_attribute_name PrometheusMonitorAttributeMetric#monitor_attribute_name}
  */
  readonly monitorAttributeName: string;
  /**
  * The name of the object class for monitor entries that contain the monitor attribute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/prometheus_monitor_attribute_metric#monitor_object_class_name PrometheusMonitorAttributeMetric#monitor_object_class_name}
  */
  readonly monitorObjectClassName: string;
  /**
  * The type of Prometheus Monitor Attribute Metric resource. Options are ['prometheus-monitor-attribute-metric']
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/prometheus_monitor_attribute_metric#type PrometheusMonitorAttributeMetric#type}
  */
  readonly type?: string;
}
export interface PrometheusMonitorAttributeMetricRequiredActions {
}

export function prometheusMonitorAttributeMetricRequiredActionsToTerraform(struct?: PrometheusMonitorAttributeMetricRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function prometheusMonitorAttributeMetricRequiredActionsToHclTerraform(struct?: PrometheusMonitorAttributeMetricRequiredActions): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class PrometheusMonitorAttributeMetricRequiredActionsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): PrometheusMonitorAttributeMetricRequiredActions | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: PrometheusMonitorAttributeMetricRequiredActions | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // property - computed: true, optional: false, required: false
  public get property() {
    return this.getStringAttribute('property');
  }

  // synopsis - computed: true, optional: false, required: false
  public get synopsis() {
    return this.getStringAttribute('synopsis');
  }

  // type - computed: true, optional: false, required: false
  public get type() {
    return this.getStringAttribute('type');
  }
}

export class PrometheusMonitorAttributeMetricRequiredActionsList extends cdktf.ComplexList {

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param wrapsSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  constructor(protected terraformResource: cdktf.IInterpolatingParent, protected terraformAttribute: string, protected wrapsSet: boolean) {
    super(terraformResource, terraformAttribute, wrapsSet)
  }

  /**
  * @param index the index of the item to return
  */
  public get(index: number): PrometheusMonitorAttributeMetricRequiredActionsOutputReference {
    return new PrometheusMonitorAttributeMetricRequiredActionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/prometheus_monitor_attribute_metric pingdirectory_prometheus_monitor_attribute_metric}
*/
export class PrometheusMonitorAttributeMetric extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "pingdirectory_prometheus_monitor_attribute_metric";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a PrometheusMonitorAttributeMetric resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the PrometheusMonitorAttributeMetric to import
  * @param importFromId The id of the existing PrometheusMonitorAttributeMetric that should be imported. Refer to the {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/prometheus_monitor_attribute_metric#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the PrometheusMonitorAttributeMetric to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "pingdirectory_prometheus_monitor_attribute_metric", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/pingidentity/pingdirectory/1.5.0/docs/resources/prometheus_monitor_attribute_metric pingdirectory_prometheus_monitor_attribute_metric} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options PrometheusMonitorAttributeMetricConfig
  */
  public constructor(scope: Construct, id: string, config: PrometheusMonitorAttributeMetricConfig) {
    super(scope, id, {
      terraformResourceType: 'pingdirectory_prometheus_monitor_attribute_metric',
      terraformGeneratorMetadata: {
        providerName: 'pingdirectory',
        providerVersion: '1.5.0',
        providerVersionConstraint: '1.5.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._filter = config.filter;
    this._httpServletExtensionName = config.httpServletExtensionName;
    this._labelNameValuePair = config.labelNameValuePair;
    this._metricDescription = config.metricDescription;
    this._metricName = config.metricName;
    this._metricType = config.metricType;
    this._monitorAttributeName = config.monitorAttributeName;
    this._monitorObjectClassName = config.monitorObjectClassName;
    this._type = config.type;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // filter - computed: false, optional: true, required: false
  private _filter?: string; 
  public get filter() {
    return this.getStringAttribute('filter');
  }
  public set filter(value: string) {
    this._filter = value;
  }
  public resetFilter() {
    this._filter = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get filterInput() {
    return this._filter;
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

  // label_name_value_pair - computed: true, optional: true, required: false
  private _labelNameValuePair?: string[]; 
  public get labelNameValuePair() {
    return cdktf.Fn.tolist(this.getListAttribute('label_name_value_pair'));
  }
  public set labelNameValuePair(value: string[]) {
    this._labelNameValuePair = value;
  }
  public resetLabelNameValuePair() {
    this._labelNameValuePair = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelNameValuePairInput() {
    return this._labelNameValuePair;
  }

  // metric_description - computed: false, optional: true, required: false
  private _metricDescription?: string; 
  public get metricDescription() {
    return this.getStringAttribute('metric_description');
  }
  public set metricDescription(value: string) {
    this._metricDescription = value;
  }
  public resetMetricDescription() {
    this._metricDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricDescriptionInput() {
    return this._metricDescription;
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

  // metric_type - computed: false, optional: false, required: true
  private _metricType?: string; 
  public get metricType() {
    return this.getStringAttribute('metric_type');
  }
  public set metricType(value: string) {
    this._metricType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricTypeInput() {
    return this._metricType;
  }

  // monitor_attribute_name - computed: false, optional: false, required: true
  private _monitorAttributeName?: string; 
  public get monitorAttributeName() {
    return this.getStringAttribute('monitor_attribute_name');
  }
  public set monitorAttributeName(value: string) {
    this._monitorAttributeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorAttributeNameInput() {
    return this._monitorAttributeName;
  }

  // monitor_object_class_name - computed: false, optional: false, required: true
  private _monitorObjectClassName?: string; 
  public get monitorObjectClassName() {
    return this.getStringAttribute('monitor_object_class_name');
  }
  public set monitorObjectClassName(value: string) {
    this._monitorObjectClassName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get monitorObjectClassNameInput() {
    return this._monitorObjectClassName;
  }

  // notifications - computed: true, optional: false, required: false
  public get notifications() {
    return cdktf.Fn.tolist(this.getListAttribute('notifications'));
  }

  // required_actions - computed: true, optional: false, required: false
  private _requiredActions = new PrometheusMonitorAttributeMetricRequiredActionsList(this, "required_actions", true);
  public get requiredActions() {
    return this._requiredActions;
  }

  // type - computed: true, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      filter: cdktf.stringToTerraform(this._filter),
      http_servlet_extension_name: cdktf.stringToTerraform(this._httpServletExtensionName),
      label_name_value_pair: cdktf.listMapper(cdktf.stringToTerraform, false)(this._labelNameValuePair),
      metric_description: cdktf.stringToTerraform(this._metricDescription),
      metric_name: cdktf.stringToTerraform(this._metricName),
      metric_type: cdktf.stringToTerraform(this._metricType),
      monitor_attribute_name: cdktf.stringToTerraform(this._monitorAttributeName),
      monitor_object_class_name: cdktf.stringToTerraform(this._monitorObjectClassName),
      type: cdktf.stringToTerraform(this._type),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      filter: {
        value: cdktf.stringToHclTerraform(this._filter),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      http_servlet_extension_name: {
        value: cdktf.stringToHclTerraform(this._httpServletExtensionName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      label_name_value_pair: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._labelNameValuePair),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      metric_description: {
        value: cdktf.stringToHclTerraform(this._metricDescription),
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
      metric_type: {
        value: cdktf.stringToHclTerraform(this._metricType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_attribute_name: {
        value: cdktf.stringToHclTerraform(this._monitorAttributeName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      monitor_object_class_name: {
        value: cdktf.stringToHclTerraform(this._monitorObjectClassName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      type: {
        value: cdktf.stringToHclTerraform(this._type),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
