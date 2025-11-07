// https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/auto_scaling_group_policy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface AutoScalingGroupPolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Auto-Scaling Group ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/auto_scaling_group_policy#asg_id AutoScalingGroupPolicy#asg_id}
  */
  readonly asgId: string;
  /**
  * Comparison operator
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/auto_scaling_group_policy#comparison_operator AutoScalingGroupPolicy#comparison_operator}
  */
  readonly comparisonOperator: string;
  /**
  * Cooldown seconds
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/auto_scaling_group_policy#cooldown_seconds AutoScalingGroupPolicy#cooldown_seconds}
  */
  readonly cooldownSeconds: number;
  /**
  * Evaluation minutes
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/auto_scaling_group_policy#evaluation_minutes AutoScalingGroupPolicy#evaluation_minutes}
  */
  readonly evaluationMinutes: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/auto_scaling_group_policy#id AutoScalingGroupPolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Metric method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/auto_scaling_group_policy#metric_method AutoScalingGroupPolicy#metric_method}
  */
  readonly metricMethod: string;
  /**
  * Metric type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/auto_scaling_group_policy#metric_type AutoScalingGroupPolicy#metric_type}
  */
  readonly metricType: string;
  /**
  * Policy name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/auto_scaling_group_policy#policy_name AutoScalingGroupPolicy#policy_name}
  */
  readonly policyName: string;
  /**
  * Scale method
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/auto_scaling_group_policy#scale_method AutoScalingGroupPolicy#scale_method}
  */
  readonly scaleMethod: string;
  /**
  * Scale type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/auto_scaling_group_policy#scale_type AutoScalingGroupPolicy#scale_type}
  */
  readonly scaleType: string;
  /**
  * Scale value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/auto_scaling_group_policy#scale_value AutoScalingGroupPolicy#scale_value}
  */
  readonly scaleValue: number;
  /**
  * Threshold
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/auto_scaling_group_policy#threshold AutoScalingGroupPolicy#threshold}
  */
  readonly threshold: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/auto_scaling_group_policy samsungcloudplatform_auto_scaling_group_policy}
*/
export class AutoScalingGroupPolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "samsungcloudplatform_auto_scaling_group_policy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a AutoScalingGroupPolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the AutoScalingGroupPolicy to import
  * @param importFromId The id of the existing AutoScalingGroupPolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/auto_scaling_group_policy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the AutoScalingGroupPolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "samsungcloudplatform_auto_scaling_group_policy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/samsungsdscloud/samsungcloudplatform/3.15.0/docs/resources/auto_scaling_group_policy samsungcloudplatform_auto_scaling_group_policy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options AutoScalingGroupPolicyConfig
  */
  public constructor(scope: Construct, id: string, config: AutoScalingGroupPolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'samsungcloudplatform_auto_scaling_group_policy',
      terraformGeneratorMetadata: {
        providerName: 'samsungcloudplatform',
        providerVersion: '3.15.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._asgId = config.asgId;
    this._comparisonOperator = config.comparisonOperator;
    this._cooldownSeconds = config.cooldownSeconds;
    this._evaluationMinutes = config.evaluationMinutes;
    this._id = config.id;
    this._metricMethod = config.metricMethod;
    this._metricType = config.metricType;
    this._policyName = config.policyName;
    this._scaleMethod = config.scaleMethod;
    this._scaleType = config.scaleType;
    this._scaleValue = config.scaleValue;
    this._threshold = config.threshold;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // asg_id - computed: false, optional: false, required: true
  private _asgId?: string; 
  public get asgId() {
    return this.getStringAttribute('asg_id');
  }
  public set asgId(value: string) {
    this._asgId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get asgIdInput() {
    return this._asgId;
  }

  // block_id - computed: true, optional: false, required: false
  public get blockId() {
    return this.getStringAttribute('block_id');
  }

  // comparison_operator - computed: false, optional: false, required: true
  private _comparisonOperator?: string; 
  public get comparisonOperator() {
    return this.getStringAttribute('comparison_operator');
  }
  public set comparisonOperator(value: string) {
    this._comparisonOperator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get comparisonOperatorInput() {
    return this._comparisonOperator;
  }

  // cooldown_seconds - computed: false, optional: false, required: true
  private _cooldownSeconds?: number; 
  public get cooldownSeconds() {
    return this.getNumberAttribute('cooldown_seconds');
  }
  public set cooldownSeconds(value: number) {
    this._cooldownSeconds = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cooldownSecondsInput() {
    return this._cooldownSeconds;
  }

  // created_by - computed: true, optional: false, required: false
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }

  // created_dt - computed: true, optional: false, required: false
  public get createdDt() {
    return this.getStringAttribute('created_dt');
  }

  // evaluation_minutes - computed: false, optional: false, required: true
  private _evaluationMinutes?: number; 
  public get evaluationMinutes() {
    return this.getNumberAttribute('evaluation_minutes');
  }
  public set evaluationMinutes(value: number) {
    this._evaluationMinutes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get evaluationMinutesInput() {
    return this._evaluationMinutes;
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

  // metric_method - computed: false, optional: false, required: true
  private _metricMethod?: string; 
  public get metricMethod() {
    return this.getStringAttribute('metric_method');
  }
  public set metricMethod(value: string) {
    this._metricMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metricMethodInput() {
    return this._metricMethod;
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

  // modified_by - computed: true, optional: false, required: false
  public get modifiedBy() {
    return this.getStringAttribute('modified_by');
  }

  // modified_dt - computed: true, optional: false, required: false
  public get modifiedDt() {
    return this.getStringAttribute('modified_dt');
  }

  // policy_id - computed: true, optional: false, required: false
  public get policyId() {
    return this.getStringAttribute('policy_id');
  }

  // policy_name - computed: false, optional: false, required: true
  private _policyName?: string; 
  public get policyName() {
    return this.getStringAttribute('policy_name');
  }
  public set policyName(value: string) {
    this._policyName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyNameInput() {
    return this._policyName;
  }

  // policy_state - computed: true, optional: false, required: false
  public get policyState() {
    return this.getStringAttribute('policy_state');
  }

  // project_id - computed: true, optional: false, required: false
  public get projectId() {
    return this.getStringAttribute('project_id');
  }

  // scale_method - computed: false, optional: false, required: true
  private _scaleMethod?: string; 
  public get scaleMethod() {
    return this.getStringAttribute('scale_method');
  }
  public set scaleMethod(value: string) {
    this._scaleMethod = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleMethodInput() {
    return this._scaleMethod;
  }

  // scale_type - computed: false, optional: false, required: true
  private _scaleType?: string; 
  public get scaleType() {
    return this.getStringAttribute('scale_type');
  }
  public set scaleType(value: string) {
    this._scaleType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleTypeInput() {
    return this._scaleType;
  }

  // scale_value - computed: false, optional: false, required: true
  private _scaleValue?: number; 
  public get scaleValue() {
    return this.getNumberAttribute('scale_value');
  }
  public set scaleValue(value: number) {
    this._scaleValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleValueInput() {
    return this._scaleValue;
  }

  // service_id - computed: true, optional: false, required: false
  public get serviceId() {
    return this.getStringAttribute('service_id');
  }

  // service_zone_id - computed: true, optional: false, required: false
  public get serviceZoneId() {
    return this.getStringAttribute('service_zone_id');
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: string; 
  public get threshold() {
    return this.getStringAttribute('threshold');
  }
  public set threshold(value: string) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      asg_id: cdktf.stringToTerraform(this._asgId),
      comparison_operator: cdktf.stringToTerraform(this._comparisonOperator),
      cooldown_seconds: cdktf.numberToTerraform(this._cooldownSeconds),
      evaluation_minutes: cdktf.numberToTerraform(this._evaluationMinutes),
      id: cdktf.stringToTerraform(this._id),
      metric_method: cdktf.stringToTerraform(this._metricMethod),
      metric_type: cdktf.stringToTerraform(this._metricType),
      policy_name: cdktf.stringToTerraform(this._policyName),
      scale_method: cdktf.stringToTerraform(this._scaleMethod),
      scale_type: cdktf.stringToTerraform(this._scaleType),
      scale_value: cdktf.numberToTerraform(this._scaleValue),
      threshold: cdktf.stringToTerraform(this._threshold),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      asg_id: {
        value: cdktf.stringToHclTerraform(this._asgId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      comparison_operator: {
        value: cdktf.stringToHclTerraform(this._comparisonOperator),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cooldown_seconds: {
        value: cdktf.numberToHclTerraform(this._cooldownSeconds),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      evaluation_minutes: {
        value: cdktf.numberToHclTerraform(this._evaluationMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      metric_method: {
        value: cdktf.stringToHclTerraform(this._metricMethod),
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
      policy_name: {
        value: cdktf.stringToHclTerraform(this._policyName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scale_method: {
        value: cdktf.stringToHclTerraform(this._scaleMethod),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scale_type: {
        value: cdktf.stringToHclTerraform(this._scaleType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scale_value: {
        value: cdktf.numberToHclTerraform(this._scaleValue),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold: {
        value: cdktf.stringToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
