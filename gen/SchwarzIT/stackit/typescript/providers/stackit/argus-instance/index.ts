// https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/argus_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ArgusInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * A Grafana configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/argus_instance#grafana ArgusInstance#grafana}
  */
  readonly grafana?: ArgusInstanceGrafana;
  /**
  * Metrics configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/argus_instance#metrics ArgusInstance#metrics}
  */
  readonly metrics?: ArgusInstanceMetrics;
  /**
  * Specifies the name of the Argus instance
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/argus_instance#name ArgusInstance#name}
  */
  readonly name: string;
  /**
  * Specifies the Argus plan. Available options are: `Monitoring-Medium-EU01`, `Monitoring-Large-EU01`, `Frontend-Starter-EU01`, `Monitoring-XL-EU01`, `Monitoring-XXL-EU01`, `Monitoring-Starter-EU01`, `Monitoring-Basic-EU01`, `Observability-Medium-EU01`, `Observability-Large-EU01 `, `Observability-XL-EU01`, `Observability-Starter-EU01`, `Observability-Basic-EU01`, `Observability-XXL-EU01`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/argus_instance#plan ArgusInstance#plan}
  */
  readonly plan: string;
  /**
  * Specifies the Project ID the Argus instance belongs to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/argus_instance#project_id ArgusInstance#project_id}
  */
  readonly projectId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/argus_instance#timeouts ArgusInstance#timeouts}
  */
  readonly timeouts?: ArgusInstanceTimeouts;
}
export interface ArgusInstanceGrafana {
  /**
  * If true, anyone can access Grafana dashboards without logging in. Default is set to `false`.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/argus_instance#enable_public_access ArgusInstance#enable_public_access}
  */
  readonly enablePublicAccess?: boolean | cdktf.IResolvable;
}

export function argusInstanceGrafanaToTerraform(struct?: ArgusInstanceGrafana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_public_access: cdktf.booleanToTerraform(struct!.enablePublicAccess),
  }
}


export function argusInstanceGrafanaToHclTerraform(struct?: ArgusInstanceGrafana | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_public_access: {
      value: cdktf.booleanToHclTerraform(struct!.enablePublicAccess),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArgusInstanceGrafanaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ArgusInstanceGrafana | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enablePublicAccess !== undefined) {
      hasAnyValues = true;
      internalValueResult.enablePublicAccess = this._enablePublicAccess;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArgusInstanceGrafana | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enablePublicAccess = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enablePublicAccess = value.enablePublicAccess;
    }
  }

  // enable_public_access - computed: true, optional: true, required: false
  private _enablePublicAccess?: boolean | cdktf.IResolvable; 
  public get enablePublicAccess() {
    return this.getBooleanAttribute('enable_public_access');
  }
  public set enablePublicAccess(value: boolean | cdktf.IResolvable) {
    this._enablePublicAccess = value;
  }
  public resetEnablePublicAccess() {
    this._enablePublicAccess = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enablePublicAccessInput() {
    return this._enablePublicAccess;
  }
}
export interface ArgusInstanceMetrics {
  /**
  * Specifies for how many days the raw metrics are kept. Default is set to `90`
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/argus_instance#retention_days ArgusInstance#retention_days}
  */
  readonly retentionDays?: number;
  /**
  * Specifies for how many days the 1h downsampled metrics are kept. must be less than the value of the 5m downsampling retention. Default is set to `0` (disabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/argus_instance#retention_days_1h_downsampling ArgusInstance#retention_days_1h_downsampling}
  */
  readonly retentionDays1HDownsampling?: number;
  /**
  * Specifies for how many days the 5m downsampled metrics are kept. must be less than the value of the general retention. Default is set to `0` (disabled).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/argus_instance#retention_days_5m_downsampling ArgusInstance#retention_days_5m_downsampling}
  */
  readonly retentionDays5MDownsampling?: number;
}

export function argusInstanceMetricsToTerraform(struct?: ArgusInstanceMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    retention_days: cdktf.numberToTerraform(struct!.retentionDays),
    retention_days_1h_downsampling: cdktf.numberToTerraform(struct!.retentionDays1HDownsampling),
    retention_days_5m_downsampling: cdktf.numberToTerraform(struct!.retentionDays5MDownsampling),
  }
}


export function argusInstanceMetricsToHclTerraform(struct?: ArgusInstanceMetrics | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    retention_days: {
      value: cdktf.numberToHclTerraform(struct!.retentionDays),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retention_days_1h_downsampling: {
      value: cdktf.numberToHclTerraform(struct!.retentionDays1HDownsampling),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retention_days_5m_downsampling: {
      value: cdktf.numberToHclTerraform(struct!.retentionDays5MDownsampling),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArgusInstanceMetricsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ArgusInstanceMetrics | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._retentionDays !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays = this._retentionDays;
    }
    if (this._retentionDays1HDownsampling !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays1HDownsampling = this._retentionDays1HDownsampling;
    }
    if (this._retentionDays5MDownsampling !== undefined) {
      hasAnyValues = true;
      internalValueResult.retentionDays5MDownsampling = this._retentionDays5MDownsampling;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArgusInstanceMetrics | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._retentionDays = undefined;
      this._retentionDays1HDownsampling = undefined;
      this._retentionDays5MDownsampling = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._retentionDays = value.retentionDays;
      this._retentionDays1HDownsampling = value.retentionDays1HDownsampling;
      this._retentionDays5MDownsampling = value.retentionDays5MDownsampling;
    }
  }

  // retention_days - computed: true, optional: true, required: false
  private _retentionDays?: number; 
  public get retentionDays() {
    return this.getNumberAttribute('retention_days');
  }
  public set retentionDays(value: number) {
    this._retentionDays = value;
  }
  public resetRetentionDays() {
    this._retentionDays = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDaysInput() {
    return this._retentionDays;
  }

  // retention_days_1h_downsampling - computed: true, optional: true, required: false
  private _retentionDays1HDownsampling?: number; 
  public get retentionDays1HDownsampling() {
    return this.getNumberAttribute('retention_days_1h_downsampling');
  }
  public set retentionDays1HDownsampling(value: number) {
    this._retentionDays1HDownsampling = value;
  }
  public resetRetentionDays1HDownsampling() {
    this._retentionDays1HDownsampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDays1HDownsamplingInput() {
    return this._retentionDays1HDownsampling;
  }

  // retention_days_5m_downsampling - computed: true, optional: true, required: false
  private _retentionDays5MDownsampling?: number; 
  public get retentionDays5MDownsampling() {
    return this.getNumberAttribute('retention_days_5m_downsampling');
  }
  public set retentionDays5MDownsampling(value: number) {
    this._retentionDays5MDownsampling = value;
  }
  public resetRetentionDays5MDownsampling() {
    this._retentionDays5MDownsampling = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retentionDays5MDownsamplingInput() {
    return this._retentionDays5MDownsampling;
  }
}
export interface ArgusInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/argus_instance#create ArgusInstance#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/argus_instance#delete ArgusInstance#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/argus_instance#update ArgusInstance#update}
  */
  readonly update?: string;
}

export function argusInstanceTimeoutsToTerraform(struct?: ArgusInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function argusInstanceTimeoutsToHclTerraform(struct?: ArgusInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    create: {
      value: cdktf.stringToHclTerraform(struct!.create),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    delete: {
      value: cdktf.stringToHclTerraform(struct!.delete),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update: {
      value: cdktf.stringToHclTerraform(struct!.update),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ArgusInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ArgusInstanceTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ArgusInstanceTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
      this._delete = value.delete;
      this._update = value.update;
    }
  }

  // create - computed: true, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: true, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // update - computed: true, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/argus_instance stackit_argus_instance}
*/
export class ArgusInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "stackit_argus_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ArgusInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ArgusInstance to import
  * @param importFromId The id of the existing ArgusInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/argus_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ArgusInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "stackit_argus_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/schwarzit/stackit/1.34.4/docs/resources/argus_instance stackit_argus_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ArgusInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: ArgusInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'stackit_argus_instance',
      terraformGeneratorMetadata: {
        providerName: 'stackit',
        providerVersion: '1.34.4',
        providerVersionConstraint: '1.34.4'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._grafana.internalValue = config.grafana;
    this._metrics.internalValue = config.metrics;
    this._name = config.name;
    this._plan = config.plan;
    this._projectId = config.projectId;
    this._timeouts.internalValue = config.timeouts;
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

  // grafana - computed: false, optional: true, required: false
  private _grafana = new ArgusInstanceGrafanaOutputReference(this, "grafana");
  public get grafana() {
    return this._grafana;
  }
  public putGrafana(value: ArgusInstanceGrafana) {
    this._grafana.internalValue = value;
  }
  public resetGrafana() {
    this._grafana.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get grafanaInput() {
    return this._grafana.internalValue;
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

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // metrics - computed: false, optional: true, required: false
  private _metrics = new ArgusInstanceMetricsOutputReference(this, "metrics");
  public get metrics() {
    return this._metrics;
  }
  public putMetrics(value: ArgusInstanceMetrics) {
    this._metrics.internalValue = value;
  }
  public resetMetrics() {
    this._metrics.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metricsInput() {
    return this._metrics.internalValue;
  }

  // metrics_push_url - computed: true, optional: false, required: false
  public get metricsPushUrl() {
    return this.getStringAttribute('metrics_push_url');
  }

  // metrics_url - computed: true, optional: false, required: false
  public get metricsUrl() {
    return this.getStringAttribute('metrics_url');
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // otlp_traces_grpc_url - computed: true, optional: false, required: false
  public get otlpTracesGrpcUrl() {
    return this.getStringAttribute('otlp_traces_grpc_url');
  }

  // otlp_traces_http_url - computed: true, optional: false, required: false
  public get otlpTracesHttpUrl() {
    return this.getStringAttribute('otlp_traces_http_url');
  }

  // plan - computed: false, optional: false, required: true
  private _plan?: string; 
  public get plan() {
    return this.getStringAttribute('plan');
  }
  public set plan(value: string) {
    this._plan = value;
  }
  // Temporarily expose input value. Use with caution.
  public get planInput() {
    return this._plan;
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

  // timeouts - computed: true, optional: true, required: false
  private _timeouts = new ArgusInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ArgusInstanceTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
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
      grafana: argusInstanceGrafanaToTerraform(this._grafana.internalValue),
      metrics: argusInstanceMetricsToTerraform(this._metrics.internalValue),
      name: cdktf.stringToTerraform(this._name),
      plan: cdktf.stringToTerraform(this._plan),
      project_id: cdktf.stringToTerraform(this._projectId),
      timeouts: argusInstanceTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      grafana: {
        value: argusInstanceGrafanaToHclTerraform(this._grafana.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ArgusInstanceGrafana",
      },
      metrics: {
        value: argusInstanceMetricsToHclTerraform(this._metrics.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ArgusInstanceMetrics",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      plan: {
        value: cdktf.stringToHclTerraform(this._plan),
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
      timeouts: {
        value: argusInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ArgusInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
