// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RosChangeSetConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set#change_set_name RosChangeSet#change_set_name}
  */
  readonly changeSetName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set#change_set_type RosChangeSet#change_set_type}
  */
  readonly changeSetType?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set#description RosChangeSet#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set#disable_rollback RosChangeSet#disable_rollback}
  */
  readonly disableRollback?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set#id RosChangeSet#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set#notification_urls RosChangeSet#notification_urls}
  */
  readonly notificationUrls?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set#ram_role_name RosChangeSet#ram_role_name}
  */
  readonly ramRoleName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set#replacement_option RosChangeSet#replacement_option}
  */
  readonly replacementOption?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set#stack_id RosChangeSet#stack_id}
  */
  readonly stackId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set#stack_name RosChangeSet#stack_name}
  */
  readonly stackName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set#stack_policy_body RosChangeSet#stack_policy_body}
  */
  readonly stackPolicyBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set#stack_policy_during_update_body RosChangeSet#stack_policy_during_update_body}
  */
  readonly stackPolicyDuringUpdateBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set#stack_policy_during_update_url RosChangeSet#stack_policy_during_update_url}
  */
  readonly stackPolicyDuringUpdateUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set#stack_policy_url RosChangeSet#stack_policy_url}
  */
  readonly stackPolicyUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set#template_body RosChangeSet#template_body}
  */
  readonly templateBody?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set#template_url RosChangeSet#template_url}
  */
  readonly templateUrl?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set#timeout_in_minutes RosChangeSet#timeout_in_minutes}
  */
  readonly timeoutInMinutes?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set#use_previous_parameters RosChangeSet#use_previous_parameters}
  */
  readonly usePreviousParameters?: boolean | cdktf.IResolvable;
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set#parameters RosChangeSet#parameters}
  */
  readonly parameters?: RosChangeSetParameters[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set#timeouts RosChangeSet#timeouts}
  */
  readonly timeouts?: RosChangeSetTimeouts;
}
export interface RosChangeSetParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set#parameter_key RosChangeSet#parameter_key}
  */
  readonly parameterKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set#parameter_value RosChangeSet#parameter_value}
  */
  readonly parameterValue: string;
}

export function rosChangeSetParametersToTerraform(struct?: RosChangeSetParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_key: cdktf.stringToTerraform(struct!.parameterKey),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}


export function rosChangeSetParametersToHclTerraform(struct?: RosChangeSetParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_key: {
      value: cdktf.stringToHclTerraform(struct!.parameterKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameter_value: {
      value: cdktf.stringToHclTerraform(struct!.parameterValue),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RosChangeSetParametersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): RosChangeSetParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterKey = this._parameterKey;
    }
    if (this._parameterValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterValue = this._parameterValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RosChangeSetParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterKey = undefined;
      this._parameterValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterKey = value.parameterKey;
      this._parameterValue = value.parameterValue;
    }
  }

  // parameter_key - computed: false, optional: false, required: true
  private _parameterKey?: string; 
  public get parameterKey() {
    return this.getStringAttribute('parameter_key');
  }
  public set parameterKey(value: string) {
    this._parameterKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterKeyInput() {
    return this._parameterKey;
  }

  // parameter_value - computed: false, optional: false, required: true
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class RosChangeSetParametersList extends cdktf.ComplexList {
  public internalValue? : RosChangeSetParameters[] | cdktf.IResolvable

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
  public get(index: number): RosChangeSetParametersOutputReference {
    return new RosChangeSetParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RosChangeSetTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set#create RosChangeSet#create}
  */
  readonly create?: string;
}

export function rosChangeSetTimeoutsToTerraform(struct?: RosChangeSetTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function rosChangeSetTimeoutsToHclTerraform(struct?: RosChangeSetTimeouts | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class RosChangeSetTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RosChangeSetTimeouts | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: RosChangeSetTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._create = value.create;
    }
  }

  // create - computed: false, optional: true, required: false
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
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set alicloud_ros_change_set}
*/
export class RosChangeSet extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ros_change_set";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RosChangeSet resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RosChangeSet to import
  * @param importFromId The id of the existing RosChangeSet that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RosChangeSet to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ros_change_set", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_change_set alicloud_ros_change_set} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RosChangeSetConfig
  */
  public constructor(scope: Construct, id: string, config: RosChangeSetConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ros_change_set',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._changeSetName = config.changeSetName;
    this._changeSetType = config.changeSetType;
    this._description = config.description;
    this._disableRollback = config.disableRollback;
    this._id = config.id;
    this._notificationUrls = config.notificationUrls;
    this._ramRoleName = config.ramRoleName;
    this._replacementOption = config.replacementOption;
    this._stackId = config.stackId;
    this._stackName = config.stackName;
    this._stackPolicyBody = config.stackPolicyBody;
    this._stackPolicyDuringUpdateBody = config.stackPolicyDuringUpdateBody;
    this._stackPolicyDuringUpdateUrl = config.stackPolicyDuringUpdateUrl;
    this._stackPolicyUrl = config.stackPolicyUrl;
    this._templateBody = config.templateBody;
    this._templateUrl = config.templateUrl;
    this._timeoutInMinutes = config.timeoutInMinutes;
    this._usePreviousParameters = config.usePreviousParameters;
    this._parameters.internalValue = config.parameters;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // change_set_name - computed: false, optional: false, required: true
  private _changeSetName?: string; 
  public get changeSetName() {
    return this.getStringAttribute('change_set_name');
  }
  public set changeSetName(value: string) {
    this._changeSetName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get changeSetNameInput() {
    return this._changeSetName;
  }

  // change_set_type - computed: false, optional: true, required: false
  private _changeSetType?: string; 
  public get changeSetType() {
    return this.getStringAttribute('change_set_type');
  }
  public set changeSetType(value: string) {
    this._changeSetType = value;
  }
  public resetChangeSetType() {
    this._changeSetType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get changeSetTypeInput() {
    return this._changeSetType;
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

  // disable_rollback - computed: false, optional: true, required: false
  private _disableRollback?: boolean | cdktf.IResolvable; 
  public get disableRollback() {
    return this.getBooleanAttribute('disable_rollback');
  }
  public set disableRollback(value: boolean | cdktf.IResolvable) {
    this._disableRollback = value;
  }
  public resetDisableRollback() {
    this._disableRollback = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableRollbackInput() {
    return this._disableRollback;
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

  // notification_urls - computed: false, optional: true, required: false
  private _notificationUrls?: string[]; 
  public get notificationUrls() {
    return cdktf.Fn.tolist(this.getListAttribute('notification_urls'));
  }
  public set notificationUrls(value: string[]) {
    this._notificationUrls = value;
  }
  public resetNotificationUrls() {
    this._notificationUrls = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get notificationUrlsInput() {
    return this._notificationUrls;
  }

  // ram_role_name - computed: false, optional: true, required: false
  private _ramRoleName?: string; 
  public get ramRoleName() {
    return this.getStringAttribute('ram_role_name');
  }
  public set ramRoleName(value: string) {
    this._ramRoleName = value;
  }
  public resetRamRoleName() {
    this._ramRoleName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ramRoleNameInput() {
    return this._ramRoleName;
  }

  // replacement_option - computed: false, optional: true, required: false
  private _replacementOption?: string; 
  public get replacementOption() {
    return this.getStringAttribute('replacement_option');
  }
  public set replacementOption(value: string) {
    this._replacementOption = value;
  }
  public resetReplacementOption() {
    this._replacementOption = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replacementOptionInput() {
    return this._replacementOption;
  }

  // stack_id - computed: true, optional: true, required: false
  private _stackId?: string; 
  public get stackId() {
    return this.getStringAttribute('stack_id');
  }
  public set stackId(value: string) {
    this._stackId = value;
  }
  public resetStackId() {
    this._stackId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackIdInput() {
    return this._stackId;
  }

  // stack_name - computed: false, optional: true, required: false
  private _stackName?: string; 
  public get stackName() {
    return this.getStringAttribute('stack_name');
  }
  public set stackName(value: string) {
    this._stackName = value;
  }
  public resetStackName() {
    this._stackName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackNameInput() {
    return this._stackName;
  }

  // stack_policy_body - computed: false, optional: true, required: false
  private _stackPolicyBody?: string; 
  public get stackPolicyBody() {
    return this.getStringAttribute('stack_policy_body');
  }
  public set stackPolicyBody(value: string) {
    this._stackPolicyBody = value;
  }
  public resetStackPolicyBody() {
    this._stackPolicyBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackPolicyBodyInput() {
    return this._stackPolicyBody;
  }

  // stack_policy_during_update_body - computed: false, optional: true, required: false
  private _stackPolicyDuringUpdateBody?: string; 
  public get stackPolicyDuringUpdateBody() {
    return this.getStringAttribute('stack_policy_during_update_body');
  }
  public set stackPolicyDuringUpdateBody(value: string) {
    this._stackPolicyDuringUpdateBody = value;
  }
  public resetStackPolicyDuringUpdateBody() {
    this._stackPolicyDuringUpdateBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackPolicyDuringUpdateBodyInput() {
    return this._stackPolicyDuringUpdateBody;
  }

  // stack_policy_during_update_url - computed: false, optional: true, required: false
  private _stackPolicyDuringUpdateUrl?: string; 
  public get stackPolicyDuringUpdateUrl() {
    return this.getStringAttribute('stack_policy_during_update_url');
  }
  public set stackPolicyDuringUpdateUrl(value: string) {
    this._stackPolicyDuringUpdateUrl = value;
  }
  public resetStackPolicyDuringUpdateUrl() {
    this._stackPolicyDuringUpdateUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackPolicyDuringUpdateUrlInput() {
    return this._stackPolicyDuringUpdateUrl;
  }

  // stack_policy_url - computed: false, optional: true, required: false
  private _stackPolicyUrl?: string; 
  public get stackPolicyUrl() {
    return this.getStringAttribute('stack_policy_url');
  }
  public set stackPolicyUrl(value: string) {
    this._stackPolicyUrl = value;
  }
  public resetStackPolicyUrl() {
    this._stackPolicyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stackPolicyUrlInput() {
    return this._stackPolicyUrl;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // template_body - computed: false, optional: true, required: false
  private _templateBody?: string; 
  public get templateBody() {
    return this.getStringAttribute('template_body');
  }
  public set templateBody(value: string) {
    this._templateBody = value;
  }
  public resetTemplateBody() {
    this._templateBody = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateBodyInput() {
    return this._templateBody;
  }

  // template_url - computed: false, optional: true, required: false
  private _templateUrl?: string; 
  public get templateUrl() {
    return this.getStringAttribute('template_url');
  }
  public set templateUrl(value: string) {
    this._templateUrl = value;
  }
  public resetTemplateUrl() {
    this._templateUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateUrlInput() {
    return this._templateUrl;
  }

  // timeout_in_minutes - computed: true, optional: true, required: false
  private _timeoutInMinutes?: number; 
  public get timeoutInMinutes() {
    return this.getNumberAttribute('timeout_in_minutes');
  }
  public set timeoutInMinutes(value: number) {
    this._timeoutInMinutes = value;
  }
  public resetTimeoutInMinutes() {
    this._timeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInMinutesInput() {
    return this._timeoutInMinutes;
  }

  // use_previous_parameters - computed: false, optional: true, required: false
  private _usePreviousParameters?: boolean | cdktf.IResolvable; 
  public get usePreviousParameters() {
    return this.getBooleanAttribute('use_previous_parameters');
  }
  public set usePreviousParameters(value: boolean | cdktf.IResolvable) {
    this._usePreviousParameters = value;
  }
  public resetUsePreviousParameters() {
    this._usePreviousParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePreviousParametersInput() {
    return this._usePreviousParameters;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new RosChangeSetParametersList(this, "parameters", true);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: RosChangeSetParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RosChangeSetTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RosChangeSetTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      change_set_name: cdktf.stringToTerraform(this._changeSetName),
      change_set_type: cdktf.stringToTerraform(this._changeSetType),
      description: cdktf.stringToTerraform(this._description),
      disable_rollback: cdktf.booleanToTerraform(this._disableRollback),
      id: cdktf.stringToTerraform(this._id),
      notification_urls: cdktf.listMapper(cdktf.stringToTerraform, false)(this._notificationUrls),
      ram_role_name: cdktf.stringToTerraform(this._ramRoleName),
      replacement_option: cdktf.stringToTerraform(this._replacementOption),
      stack_id: cdktf.stringToTerraform(this._stackId),
      stack_name: cdktf.stringToTerraform(this._stackName),
      stack_policy_body: cdktf.stringToTerraform(this._stackPolicyBody),
      stack_policy_during_update_body: cdktf.stringToTerraform(this._stackPolicyDuringUpdateBody),
      stack_policy_during_update_url: cdktf.stringToTerraform(this._stackPolicyDuringUpdateUrl),
      stack_policy_url: cdktf.stringToTerraform(this._stackPolicyUrl),
      template_body: cdktf.stringToTerraform(this._templateBody),
      template_url: cdktf.stringToTerraform(this._templateUrl),
      timeout_in_minutes: cdktf.numberToTerraform(this._timeoutInMinutes),
      use_previous_parameters: cdktf.booleanToTerraform(this._usePreviousParameters),
      parameters: cdktf.listMapper(rosChangeSetParametersToTerraform, true)(this._parameters.internalValue),
      timeouts: rosChangeSetTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      change_set_name: {
        value: cdktf.stringToHclTerraform(this._changeSetName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      change_set_type: {
        value: cdktf.stringToHclTerraform(this._changeSetType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      disable_rollback: {
        value: cdktf.booleanToHclTerraform(this._disableRollback),
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
      notification_urls: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._notificationUrls),
        isBlock: false,
        type: "set",
        storageClassType: "stringList",
      },
      ram_role_name: {
        value: cdktf.stringToHclTerraform(this._ramRoleName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      replacement_option: {
        value: cdktf.stringToHclTerraform(this._replacementOption),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_id: {
        value: cdktf.stringToHclTerraform(this._stackId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_name: {
        value: cdktf.stringToHclTerraform(this._stackName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_policy_body: {
        value: cdktf.stringToHclTerraform(this._stackPolicyBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_policy_during_update_body: {
        value: cdktf.stringToHclTerraform(this._stackPolicyDuringUpdateBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_policy_during_update_url: {
        value: cdktf.stringToHclTerraform(this._stackPolicyDuringUpdateUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_policy_url: {
        value: cdktf.stringToHclTerraform(this._stackPolicyUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_body: {
        value: cdktf.stringToHclTerraform(this._templateBody),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      template_url: {
        value: cdktf.stringToHclTerraform(this._templateUrl),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout_in_minutes: {
        value: cdktf.numberToHclTerraform(this._timeoutInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      use_previous_parameters: {
        value: cdktf.booleanToHclTerraform(this._usePreviousParameters),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      parameters: {
        value: cdktf.listMapperHcl(rosChangeSetParametersToHclTerraform, true)(this._parameters.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RosChangeSetParametersList",
      },
      timeouts: {
        value: rosChangeSetTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RosChangeSetTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
