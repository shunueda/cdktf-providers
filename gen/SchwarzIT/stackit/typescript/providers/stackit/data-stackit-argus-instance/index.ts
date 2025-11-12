// https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/argus_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataStackitArgusInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Specifies the Argus instance ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/argus_instance#id DataStackitArgusInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Specifies the Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/argus_instance#project_id DataStackitArgusInstance#project_id}
  */
  readonly projectId: string;
}
export interface DataStackitArgusInstanceGrafana {
}

export function dataStackitArgusInstanceGrafanaToTerraform(struct?: DataStackitArgusInstanceGrafana): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitArgusInstanceGrafanaToHclTerraform(struct?: DataStackitArgusInstanceGrafana): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitArgusInstanceGrafanaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitArgusInstanceGrafana | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitArgusInstanceGrafana | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // enable_public_access - computed: true, optional: false, required: false
  public get enablePublicAccess() {
    return this.getBooleanAttribute('enable_public_access');
  }
}
export interface DataStackitArgusInstanceMetrics {
}

export function dataStackitArgusInstanceMetricsToTerraform(struct?: DataStackitArgusInstanceMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function dataStackitArgusInstanceMetricsToHclTerraform(struct?: DataStackitArgusInstanceMetrics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class DataStackitArgusInstanceMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataStackitArgusInstanceMetrics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataStackitArgusInstanceMetrics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // retention_days - computed: true, optional: false, required: false
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }

  // retention_days_1h_downsampling - computed: true, optional: false, required: false
  public get retentionDays1HDownsampling() {
    return this.getNumberAttribute('retention_days_1h_downsampling');
  }

  // retention_days_5m_downsampling - computed: true, optional: false, required: false
  public get retentionDays5MDownsampling() {
    return this.getNumberAttribute('retention_days_5m_downsampling');
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/argus_instance stackit_argus_instance}
*/
export class DataStackitArgusInstance extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_argus_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataStackitArgusInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataStackitArgusInstance to import
  * @param importFromId The id of the existing DataStackitArgusInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/argus_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataStackitArgusInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_argus_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.3/docs/data-sources/argus_instance stackit_argus_instance} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataStackitArgusInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: DataStackitArgusInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_argus_instance',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '1.34.3',
        providerVersionConstraint: '1.34.3'
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
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // alerting_url - computed: true, optional: false, required: false
  public get alertingUrl() {
    return this.getStringAttribute('alerting_url');
  }

  // dashboard_url - computed: true, optional: false, required: false
  public get dashboardUrl() {
    return this.getStringAttribute('dashboard_url');
  }

  // grafana - computed: true, optional: false, required: false
  private _grafana = new DataStackitArgusInstanceGrafanaOutputReference(this, "grafana");
  public get grafana() {
    return this._grafana;
  }

  // grafana_initial_admin_password - computed: true, optional: false, required: false
  public get grafanaInitialAdminPassword() {
    return this.getStringAttribute('grafana_initial_admin_password');
  }

  // grafana_initial_admin_user - computed: true, optional: false, required: false
  public get grafanaInitialAdminUser() {
    return this.getStringAttribute('grafana_initial_admin_user');
  }

  // grafana_url - computed: true, optional: false, required: false
  public get grafanaUrl() {
    return this.getStringAttribute('grafana_url');
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

  // is_updatable - computed: true, optional: false, required: false
  public get isUpdatable() {
    return this.getBooleanAttribute('is_updatable');
  }

  // jaeger_traces_url - computed: true, optional: false, required: false
  public get jaegerTracesUrl() {
    return this.getStringAttribute('jaeger_traces_url');
  }

  // logs_push_url - computed: true, optional: false, required: false
  public get logsPushUrl() {
    return this.getStringAttribute('logs_push_url');
  }

  // logs_url - computed: true, optional: false, required: false
  public get logsUrl() {
    return this.getStringAttribute('logs_url');
  }

  // metrics - computed: true, optional: false, required: false
  private _metrics = new DataStackitArgusInstanceMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }

  // metrics_push_url - computed: true, optional: false, required: false
  public get metricsPushUrl() {
    return this.getStringAttribute('metrics_push_url');
  }

  // metrics_url - computed: true, optional: false, required: false
  public get metricsUrl() {
    return this.getStringAttribute('metrics_url');
  }

  // name - computed: true, optional: false, required: false
  public get name() {
    return this.getStringAttribute('name');
  }

  // otlp_traces_grpc_url - computed: true, optional: false, required: false
  public get otlpTracesGrpcUrl() {
    return this.getStringAttribute('otlp_traces_grpc_url');
  }

  // otlp_traces_http_url - computed: true, optional: false, required: false
  public get otlpTracesHttpUrl() {
    return this.getStringAttribute('otlp_traces_http_url');
  }

  // plan - computed: true, optional: false, required: false
  public get plan() {
    return this.getStringAttribute('plan');
  }

  // plan_id - computed: true, optional: false, required: false
  public get planId() {
    return this.getStringAttribute('plan_id');
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // targets_url - computed: true, optional: false, required: false
  public get targetsUrl() {
    return this.getStringAttribute('targets_url');
  }

  // zipkin_spans_url - computed: true, optional: false, required: false
  public get zipkinSpansUrl() {
    return this.getStringAttribute('zipkin_spans_url');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
