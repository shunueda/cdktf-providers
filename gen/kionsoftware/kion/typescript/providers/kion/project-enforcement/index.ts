// https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/project_enforcement
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ProjectEnforcementConfig extends cdktf.TerraformMetaArguments {
  /**
  * Type of the amount. Valid values are 'custom', 'last_month'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/project_enforcement#amount_type ProjectEnforcement#amount_type}
  */
  readonly amountType?: string;
  /**
  * Defines a Cloud Rule ID associated with the enforcement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/project_enforcement#cloud_rule_id ProjectEnforcement#cloud_rule_id}
  */
  readonly cloudRuleId?: number;
  /**
  * Optional, user-provided description of the enforcement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/project_enforcement#description ProjectEnforcement#description}
  */
  readonly description?: string;
  /**
  * Flag that specifies if the enforcement is enabled.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/project_enforcement#enabled ProjectEnforcement#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/project_enforcement#id ProjectEnforcement#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Frequency at which notifications are sent for this enforcement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/project_enforcement#notification_frequency ProjectEnforcement#notification_frequency}
  */
  readonly notificationFrequency?: string;
  /**
  * Flag that specifies if enforcement will place project in an overburn state when triggered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/project_enforcement#overburn ProjectEnforcement#overburn}
  */
  readonly overburn?: boolean | cdktf.IResolvable;
  /**
  * ID of the project under enforcement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/project_enforcement#project_id ProjectEnforcement#project_id}
  */
  readonly projectId: number;
  /**
  * ID of the service related to the enforcement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/project_enforcement#service_id ProjectEnforcement#service_id}
  */
  readonly serviceId?: number;
  /**
  * Type of spend option. Valid values are 'spend', 'remaining'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/project_enforcement#spend_option ProjectEnforcement#spend_option}
  */
  readonly spendOption?: string;
  /**
  * Threshold value. Either a dollar amount or a percentage, depending on the threshold type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/project_enforcement#threshold ProjectEnforcement#threshold}
  */
  readonly threshold: number;
  /**
  * Type of the threshold value. Valid values are 'dollar', 'percent'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/project_enforcement#threshold_type ProjectEnforcement#threshold_type}
  */
  readonly thresholdType?: string;
  /**
  * Timeframe of the enforcement. Valid values are 'lifetime', 'month', 'year', 'funding_source'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/project_enforcement#timeframe ProjectEnforcement#timeframe}
  */
  readonly timeframe: string;
  /**
  * List of user group IDs that will receive notifications from the enforcement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/project_enforcement#user_group_ids ProjectEnforcement#user_group_ids}
  */
  readonly userGroupIds?: number[];
  /**
  * List of user IDs that will receive notifications from the enforcement.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/project_enforcement#user_ids ProjectEnforcement#user_ids}
  */
  readonly userIds?: number[];
}

/**
* Represents a {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/project_enforcement kion_project_enforcement}
*/
export class ProjectEnforcement extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "kion_project_enforcement";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ProjectEnforcement resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ProjectEnforcement to import
  * @param importFromId The id of the existing ProjectEnforcement that should be imported. Refer to the {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/project_enforcement#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ProjectEnforcement to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "kion_project_enforcement", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kionsoftware/kion/0.3.29/docs/resources/project_enforcement kion_project_enforcement} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ProjectEnforcementConfig
  */
  public constructor(scope: Construct, id: string, config: ProjectEnforcementConfig) {
    super(scope, id, {
      terraformResourceType: 'kion_project_enforcement',
      terraformGeneratorMetadata: {
        providerName: 'kion',
        providerVersion: '0.3.29'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._amountType = config.amountType;
    this._cloudRuleId = config.cloudRuleId;
    this._description = config.description;
    this._enabled = config.enabled;
    this._id = config.id;
    this._notificationFrequency = config.notificationFrequency;
    this._overburn = config.overburn;
    this._projectId = config.projectId;
    this._serviceId = config.serviceId;
    this._spendOption = config.spendOption;
    this._threshold = config.threshold;
    this._thresholdType = config.thresholdType;
    this._timeframe = config.timeframe;
    this._userGroupIds = config.userGroupIds;
    this._userIds = config.userIds;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // amount_type - computed: false, optional: true, required: false
  private _amountType?: string; 
  public get amountType() {
    return this.getStringAttribute('amount_type');
  }
  public set amountType(value: string) {
    this._amountType = value;
  }
  public resetAmountType() {
    this._amountType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get amountTypeInput() {
    return this._amountType;
  }

  // cloud_rule_id - computed: false, optional: true, required: false
  private _cloudRuleId?: number; 
  public get cloudRuleId() {
    return this.getNumberAttribute('cloud_rule_id');
  }
  public set cloudRuleId(value: number) {
    this._cloudRuleId = value;
  }
  public resetCloudRuleId() {
    this._cloudRuleId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cloudRuleIdInput() {
    return this._cloudRuleId;
  }

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
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

  // notification_frequency - computed: false, optional: true, required: false
  private _notificationFrequency?: string; 
  public get notificationFrequency() {
    return this.getStringAttribute('notification_frequency');
  }
  public set notificationFrequency(value: string) {
    this._notificationFrequency = value;
  }
  public resetNotificationFrequency() {
    this._notificationFrequency = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationFrequencyInput() {
    return this._notificationFrequency;
  }

  // overburn - computed: false, optional: true, required: false
  private _overburn?: boolean | cdktf.IResolvable; 
  public get overburn() {
    return this.getBooleanAttribute('overburn');
  }
  public set overburn(value: boolean | cdktf.IResolvable) {
    this._overburn = value;
  }
  public resetOverburn() {
    this._overburn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overburnInput() {
    return this._overburn;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: number; 
  public get projectId() {
    return this.getNumberAttribute('project_id');
  }
  public set projectId(value: number) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // service_id - computed: false, optional: true, required: false
  private _serviceId?: number; 
  public get serviceId() {
    return this.getNumberAttribute('service_id');
  }
  public set serviceId(value: number) {
    this._serviceId = value;
  }
  public resetServiceId() {
    this._serviceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceIdInput() {
    return this._serviceId;
  }

  // spend_option - computed: false, optional: true, required: false
  private _spendOption?: string; 
  public get spendOption() {
    return this.getStringAttribute('spend_option');
  }
  public set spendOption(value: string) {
    this._spendOption = value;
  }
  public resetSpendOption() {
    this._spendOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spendOptionInput() {
    return this._spendOption;
  }

  // threshold - computed: false, optional: false, required: true
  private _threshold?: number; 
  public get threshold() {
    return this.getNumberAttribute('threshold');
  }
  public set threshold(value: number) {
    this._threshold = value;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdInput() {
    return this._threshold;
  }

  // threshold_type - computed: false, optional: true, required: false
  private _thresholdType?: string; 
  public get thresholdType() {
    return this.getStringAttribute('threshold_type');
  }
  public set thresholdType(value: string) {
    this._thresholdType = value;
  }
  public resetThresholdType() {
    this._thresholdType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get thresholdTypeInput() {
    return this._thresholdType;
  }

  // timeframe - computed: false, optional: false, required: true
  private _timeframe?: string; 
  public get timeframe() {
    return this.getStringAttribute('timeframe');
  }
  public set timeframe(value: string) {
    this._timeframe = value;
  }
  // Temporarily expose input value. Use with caution.
  public get timeframeInput() {
    return this._timeframe;
  }

  // triggered - computed: true, optional: false, required: false
  public get triggered() {
    return this.getBooleanAttribute('triggered');
  }

  // user_group_ids - computed: false, optional: true, required: false
  private _userGroupIds?: number[]; 
  public get userGroupIds() {
    return this.getNumberListAttribute('user_group_ids');
  }
  public set userGroupIds(value: number[]) {
    this._userGroupIds = value;
  }
  public resetUserGroupIds() {
    this._userGroupIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupIdsInput() {
    return this._userGroupIds;
  }

  // user_ids - computed: false, optional: true, required: false
  private _userIds?: number[]; 
  public get userIds() {
    return this.getNumberListAttribute('user_ids');
  }
  public set userIds(value: number[]) {
    this._userIds = value;
  }
  public resetUserIds() {
    this._userIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userIdsInput() {
    return this._userIds;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      amount_type: cdktf.stringToTerraform(this._amountType),
      cloud_rule_id: cdktf.numberToTerraform(this._cloudRuleId),
      description: cdktf.stringToTerraform(this._description),
      enabled: cdktf.booleanToTerraform(this._enabled),
      id: cdktf.stringToTerraform(this._id),
      notification_frequency: cdktf.stringToTerraform(this._notificationFrequency),
      overburn: cdktf.booleanToTerraform(this._overburn),
      project_id: cdktf.numberToTerraform(this._projectId),
      service_id: cdktf.numberToTerraform(this._serviceId),
      spend_option: cdktf.stringToTerraform(this._spendOption),
      threshold: cdktf.numberToTerraform(this._threshold),
      threshold_type: cdktf.stringToTerraform(this._thresholdType),
      timeframe: cdktf.stringToTerraform(this._timeframe),
      user_group_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._userGroupIds),
      user_ids: cdktf.listMapper(cdktf.numberToTerraform, false)(this._userIds),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      amount_type: {
        value: cdktf.stringToHclTerraform(this._amountType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      cloud_rule_id: {
        value: cdktf.numberToHclTerraform(this._cloudRuleId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      enabled: {
        value: cdktf.booleanToHclTerraform(this._enabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      notification_frequency: {
        value: cdktf.stringToHclTerraform(this._notificationFrequency),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      overburn: {
        value: cdktf.booleanToHclTerraform(this._overburn),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      project_id: {
        value: cdktf.numberToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      service_id: {
        value: cdktf.numberToHclTerraform(this._serviceId),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      spend_option: {
        value: cdktf.stringToHclTerraform(this._spendOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      threshold: {
        value: cdktf.numberToHclTerraform(this._threshold),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      threshold_type: {
        value: cdktf.stringToHclTerraform(this._thresholdType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeframe: {
        value: cdktf.stringToHclTerraform(this._timeframe),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      user_group_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._userGroupIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
      user_ids: {
        value: cdktf.listMapperHcl(cdktf.numberToHclTerraform, false)(this._userIds),
        isBlock: false,
        type: "list",
        storageClassType: "numberList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
