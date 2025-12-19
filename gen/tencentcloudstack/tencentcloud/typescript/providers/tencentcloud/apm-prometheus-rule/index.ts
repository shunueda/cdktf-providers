// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/apm_prometheus_rule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ApmPrometheusRuleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/apm_prometheus_rule#id ApmPrometheusRule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Business system ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/apm_prometheus_rule#instance_id ApmPrometheusRule#instance_id}
  */
  readonly instanceId: string;
  /**
  * Match type: 0 - precision match, 1 - prefix match, 2 - suffix match.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/apm_prometheus_rule#metric_match_type ApmPrometheusRule#metric_match_type}
  */
  readonly metricMatchType: number;
  /**
  * Specifies the rule for customer-defined metric names with cache hit.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/apm_prometheus_rule#metric_name_rule ApmPrometheusRule#metric_name_rule}
  */
  readonly metricNameRule: string;
  /**
  * Metric match rule name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/apm_prometheus_rule#name ApmPrometheusRule#name}
  */
  readonly name: string;
  /**
  * Applications where the rule takes effect. input an empty string for all applications.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/apm_prometheus_rule#service_name ApmPrometheusRule#service_name}
  */
  readonly serviceName: string;
  /**
  * Rule status. 1 - enabled, 2 - disabled. Default value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/apm_prometheus_rule#status ApmPrometheusRule#status}
  */
  readonly status?: number;
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/apm_prometheus_rule tencentcloud_apm_prometheus_rule}
*/
export class ApmPrometheusRule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_apm_prometheus_rule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ApmPrometheusRule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ApmPrometheusRule to import
  * @param importFromId The id of the existing ApmPrometheusRule that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/apm_prometheus_rule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ApmPrometheusRule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_apm_prometheus_rule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.46/docs/resources/apm_prometheus_rule tencentcloud_apm_prometheus_rule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ApmPrometheusRuleConfig
  */
  public constructor(scope: Construct, id: string, config: ApmPrometheusRuleConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_apm_prometheus_rule',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.46',
        providerVersionConstraint: '1.82.46'
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
    this._instanceId = config.instanceId;
    this._metricMatchType = config.metricMatchType;
    this._metricNameRule = config.metricNameRule;
    this._name = config.name;
    this._serviceName = config.serviceName;
    this._status = config.status;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // instance_id - computed: false, optional: false, required: true
  private _instanceId?: string; 
  public get instanceId() {
    return this.getStringAttribute('instance_id');
  }
  public set instanceId(value: string) {
    this._instanceId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceIdInput() {
    return this._instanceId;
  }

  // metric_match_type - computed: false, optional: false, required: true
  private _metricMatchType?: number; 
  public get metricMatchType() {
    return this.getNumberAttribute('metric_match_type');
  }
  public set metricMatchType(value: number) {
    this._metricMatchType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricMatchTypeInput() {
    return this._metricMatchType;
  }

  // metric_name_rule - computed: false, optional: false, required: true
  private _metricNameRule?: string; 
  public get metricNameRule() {
    return this.getStringAttribute('metric_name_rule');
  }
  public set metricNameRule(value: string) {
    this._metricNameRule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricNameRuleInput() {
    return this._metricNameRule;
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

  // rule_id - computed: true, optional: false, required: false
  public get ruleId() {
    return this.getNumberAttribute('rule_id');
  }

  // service_name - computed: false, optional: false, required: true
  private _serviceName?: string; 
  public get serviceName() {
    return this.getStringAttribute('service_name');
  }
  public set serviceName(value: string) {
    this._serviceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceNameInput() {
    return this._serviceName;
  }

  // status - computed: true, optional: true, required: false
  private _status?: number; 
  public get status() {
    return this.getNumberAttribute('status');
  }
  public set status(value: number) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      id: cdktf.stringToTerraform(this._id),
      instance_id: cdktf.stringToTerraform(this._instanceId),
      metric_match_type: cdktf.numberToTerraform(this._metricMatchType),
      metric_name_rule: cdktf.stringToTerraform(this._metricNameRule),
      name: cdktf.stringToTerraform(this._name),
      service_name: cdktf.stringToTerraform(this._serviceName),
      status: cdktf.numberToTerraform(this._status),
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
      instance_id: {
        value: cdktf.stringToHclTerraform(this._instanceId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_match_type: {
        value: cdktf.numberToHclTerraform(this._metricMatchType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      metric_name_rule: {
        value: cdktf.stringToHclTerraform(this._metricNameRule),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      service_name: {
        value: cdktf.stringToHclTerraform(this._serviceName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      status: {
        value: cdktf.numberToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
