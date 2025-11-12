// https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_stack_instance
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface RosStackInstanceConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_stack_instance#id RosStackInstance#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_stack_instance#operation_description RosStackInstance#operation_description}
  */
  readonly operationDescription?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_stack_instance#operation_preferences RosStackInstance#operation_preferences}
  */
  readonly operationPreferences?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_stack_instance#retain_stacks RosStackInstance#retain_stacks}
  */
  readonly retainStacks?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_stack_instance#stack_group_name RosStackInstance#stack_group_name}
  */
  readonly stackGroupName: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_stack_instance#stack_instance_account_id RosStackInstance#stack_instance_account_id}
  */
  readonly stackInstanceAccountId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_stack_instance#stack_instance_region_id RosStackInstance#stack_instance_region_id}
  */
  readonly stackInstanceRegionId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_stack_instance#timeout_in_minutes RosStackInstance#timeout_in_minutes}
  */
  readonly timeoutInMinutes?: string;
  /**
  * parameter_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_stack_instance#parameter_overrides RosStackInstance#parameter_overrides}
  */
  readonly parameterOverrides?: RosStackInstanceParameterOverrides[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_stack_instance#timeouts RosStackInstance#timeouts}
  */
  readonly timeouts?: RosStackInstanceTimeouts;
}
export interface RosStackInstanceParameterOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_stack_instance#parameter_key RosStackInstance#parameter_key}
  */
  readonly parameterKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_stack_instance#parameter_value RosStackInstance#parameter_value}
  */
  readonly parameterValue?: string;
}

export function rosStackInstanceParameterOverridesToTerraform(struct?: RosStackInstanceParameterOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_key: cdktf.stringToTerraform(struct!.parameterKey),
    parameter_value: cdktf.stringToTerraform(struct!.parameterValue),
  }
}


export function rosStackInstanceParameterOverridesToHclTerraform(struct?: RosStackInstanceParameterOverrides | cdktf.IResolvable): any {
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

export class RosStackInstanceParameterOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): RosStackInstanceParameterOverrides | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RosStackInstanceParameterOverrides | cdktf.IResolvable | undefined) {
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

  // parameter_key - computed: false, optional: true, required: false
  private _parameterKey?: string; 
  public get parameterKey() {
    return this.getStringAttribute('parameter_key');
  }
  public set parameterKey(value: string) {
    this._parameterKey = value;
  }
  public resetParameterKey() {
    this._parameterKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterKeyInput() {
    return this._parameterKey;
  }

  // parameter_value - computed: false, optional: true, required: false
  private _parameterValue?: string; 
  public get parameterValue() {
    return this.getStringAttribute('parameter_value');
  }
  public set parameterValue(value: string) {
    this._parameterValue = value;
  }
  public resetParameterValue() {
    this._parameterValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterValueInput() {
    return this._parameterValue;
  }
}

export class RosStackInstanceParameterOverridesList extends cdktf.ComplexList {
  public internalValue? : RosStackInstanceParameterOverrides[] | cdktf.IResolvable

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
  public get(index: number): RosStackInstanceParameterOverridesOutputReference {
    return new RosStackInstanceParameterOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface RosStackInstanceTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_stack_instance#create RosStackInstance#create}
  */
  readonly create?: string;
}

export function rosStackInstanceTimeoutsToTerraform(struct?: RosStackInstanceTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
  }
}


export function rosStackInstanceTimeoutsToHclTerraform(struct?: RosStackInstanceTimeouts | cdktf.IResolvable): any {
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

export class RosStackInstanceTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): RosStackInstanceTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: RosStackInstanceTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_stack_instance alicloud_ros_stack_instance}
*/
export class RosStackInstance extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ros_stack_instance";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a RosStackInstance resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the RosStackInstance to import
  * @param importFromId The id of the existing RosStackInstance that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_stack_instance#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the RosStackInstance to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ros_stack_instance", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.262.1/docs/resources/ros_stack_instance alicloud_ros_stack_instance} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options RosStackInstanceConfig
  */
  public constructor(scope: Construct, id: string, config: RosStackInstanceConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ros_stack_instance',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.262.1',
        providerVersionConstraint: '1.262.1'
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
    this._operationDescription = config.operationDescription;
    this._operationPreferences = config.operationPreferences;
    this._retainStacks = config.retainStacks;
    this._stackGroupName = config.stackGroupName;
    this._stackInstanceAccountId = config.stackInstanceAccountId;
    this._stackInstanceRegionId = config.stackInstanceRegionId;
    this._timeoutInMinutes = config.timeoutInMinutes;
    this._parameterOverrides.internalValue = config.parameterOverrides;
    this._timeouts.internalValue = config.timeouts;
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

  // operation_description - computed: false, optional: true, required: false
  private _operationDescription?: string; 
  public get operationDescription() {
    return this.getStringAttribute('operation_description');
  }
  public set operationDescription(value: string) {
    this._operationDescription = value;
  }
  public resetOperationDescription() {
    this._operationDescription = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationDescriptionInput() {
    return this._operationDescription;
  }

  // operation_preferences - computed: false, optional: true, required: false
  private _operationPreferences?: string; 
  public get operationPreferences() {
    return this.getStringAttribute('operation_preferences');
  }
  public set operationPreferences(value: string) {
    this._operationPreferences = value;
  }
  public resetOperationPreferences() {
    this._operationPreferences = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationPreferencesInput() {
    return this._operationPreferences;
  }

  // retain_stacks - computed: false, optional: true, required: false
  private _retainStacks?: boolean | cdktf.IResolvable; 
  public get retainStacks() {
    return this.getBooleanAttribute('retain_stacks');
  }
  public set retainStacks(value: boolean | cdktf.IResolvable) {
    this._retainStacks = value;
  }
  public resetRetainStacks() {
    this._retainStacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retainStacksInput() {
    return this._retainStacks;
  }

  // stack_group_name - computed: false, optional: false, required: true
  private _stackGroupName?: string; 
  public get stackGroupName() {
    return this.getStringAttribute('stack_group_name');
  }
  public set stackGroupName(value: string) {
    this._stackGroupName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackGroupNameInput() {
    return this._stackGroupName;
  }

  // stack_instance_account_id - computed: false, optional: false, required: true
  private _stackInstanceAccountId?: string; 
  public get stackInstanceAccountId() {
    return this.getStringAttribute('stack_instance_account_id');
  }
  public set stackInstanceAccountId(value: string) {
    this._stackInstanceAccountId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackInstanceAccountIdInput() {
    return this._stackInstanceAccountId;
  }

  // stack_instance_region_id - computed: false, optional: false, required: true
  private _stackInstanceRegionId?: string; 
  public get stackInstanceRegionId() {
    return this.getStringAttribute('stack_instance_region_id');
  }
  public set stackInstanceRegionId(value: string) {
    this._stackInstanceRegionId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get stackInstanceRegionIdInput() {
    return this._stackInstanceRegionId;
  }

  // status - computed: true, optional: false, required: false
  public get status() {
    return this.getStringAttribute('status');
  }

  // timeout_in_minutes - computed: false, optional: true, required: false
  private _timeoutInMinutes?: string; 
  public get timeoutInMinutes() {
    return this.getStringAttribute('timeout_in_minutes');
  }
  public set timeoutInMinutes(value: string) {
    this._timeoutInMinutes = value;
  }
  public resetTimeoutInMinutes() {
    this._timeoutInMinutes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutInMinutesInput() {
    return this._timeoutInMinutes;
  }

  // parameter_overrides - computed: false, optional: true, required: false
  private _parameterOverrides = new RosStackInstanceParameterOverridesList(this, "parameter_overrides", true);
  public get parameterOverrides() {
    return this._parameterOverrides;
  }
  public putParameterOverrides(value: RosStackInstanceParameterOverrides[] | cdktf.IResolvable) {
    this._parameterOverrides.internalValue = value;
  }
  public resetParameterOverrides() {
    this._parameterOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterOverridesInput() {
    return this._parameterOverrides.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new RosStackInstanceTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: RosStackInstanceTimeouts) {
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
      id: cdktf.stringToTerraform(this._id),
      operation_description: cdktf.stringToTerraform(this._operationDescription),
      operation_preferences: cdktf.stringToTerraform(this._operationPreferences),
      retain_stacks: cdktf.booleanToTerraform(this._retainStacks),
      stack_group_name: cdktf.stringToTerraform(this._stackGroupName),
      stack_instance_account_id: cdktf.stringToTerraform(this._stackInstanceAccountId),
      stack_instance_region_id: cdktf.stringToTerraform(this._stackInstanceRegionId),
      timeout_in_minutes: cdktf.stringToTerraform(this._timeoutInMinutes),
      parameter_overrides: cdktf.listMapper(rosStackInstanceParameterOverridesToTerraform, true)(this._parameterOverrides.internalValue),
      timeouts: rosStackInstanceTimeoutsToTerraform(this._timeouts.internalValue),
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
      operation_description: {
        value: cdktf.stringToHclTerraform(this._operationDescription),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      operation_preferences: {
        value: cdktf.stringToHclTerraform(this._operationPreferences),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      retain_stacks: {
        value: cdktf.booleanToHclTerraform(this._retainStacks),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      stack_group_name: {
        value: cdktf.stringToHclTerraform(this._stackGroupName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_instance_account_id: {
        value: cdktf.stringToHclTerraform(this._stackInstanceAccountId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      stack_instance_region_id: {
        value: cdktf.stringToHclTerraform(this._stackInstanceRegionId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      timeout_in_minutes: {
        value: cdktf.stringToHclTerraform(this._timeoutInMinutes),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      parameter_overrides: {
        value: cdktf.listMapperHcl(rosStackInstanceParameterOverridesToHclTerraform, true)(this._parameterOverrides.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "RosStackInstanceParameterOverridesList",
      },
      timeouts: {
        value: rosStackInstanceTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "RosStackInstanceTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
