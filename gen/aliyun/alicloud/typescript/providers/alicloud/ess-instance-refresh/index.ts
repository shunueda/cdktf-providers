// https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface EssInstanceRefreshConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh#checkpoint_pause_time EssInstanceRefresh#checkpoint_pause_time}
  */
  readonly checkpointPauseTime?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh#desired_configuration_image_id EssInstanceRefresh#desired_configuration_image_id}
  */
  readonly desiredConfigurationImageId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh#desired_configuration_launch_template_id EssInstanceRefresh#desired_configuration_launch_template_id}
  */
  readonly desiredConfigurationLaunchTemplateId?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh#desired_configuration_launch_template_version EssInstanceRefresh#desired_configuration_launch_template_version}
  */
  readonly desiredConfigurationLaunchTemplateVersion?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh#id EssInstanceRefresh#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh#max_healthy_percentage EssInstanceRefresh#max_healthy_percentage}
  */
  readonly maxHealthyPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh#min_healthy_percentage EssInstanceRefresh#min_healthy_percentage}
  */
  readonly minHealthyPercentage?: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh#scaling_group_id EssInstanceRefresh#scaling_group_id}
  */
  readonly scalingGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh#skip_matching EssInstanceRefresh#skip_matching}
  */
  readonly skipMatching?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh#status EssInstanceRefresh#status}
  */
  readonly status?: string;
  /**
  * checkpoints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh#checkpoints EssInstanceRefresh#checkpoints}
  */
  readonly checkpoints?: EssInstanceRefreshCheckpoints[] | cdktf.IResolvable;
  /**
  * desired_configuration_containers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh#desired_configuration_containers EssInstanceRefresh#desired_configuration_containers}
  */
  readonly desiredConfigurationContainers?: EssInstanceRefreshDesiredConfigurationContainers[] | cdktf.IResolvable;
  /**
  * desired_configuration_launch_template_overrides block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh#desired_configuration_launch_template_overrides EssInstanceRefresh#desired_configuration_launch_template_overrides}
  */
  readonly desiredConfigurationLaunchTemplateOverrides?: EssInstanceRefreshDesiredConfigurationLaunchTemplateOverrides[] | cdktf.IResolvable;
}
export interface EssInstanceRefreshCheckpoints {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh#percentage EssInstanceRefresh#percentage}
  */
  readonly percentage?: number;
}

export function essInstanceRefreshCheckpointsToTerraform(struct?: EssInstanceRefreshCheckpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    percentage: cdktf.numberToTerraform(struct!.percentage),
  }
}


export function essInstanceRefreshCheckpointsToHclTerraform(struct?: EssInstanceRefreshCheckpoints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    percentage: {
      value: cdktf.numberToHclTerraform(struct!.percentage),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssInstanceRefreshCheckpointsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssInstanceRefreshCheckpoints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._percentage !== undefined) {
      hasAnyValues = true;
      internalValueResult.percentage = this._percentage;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssInstanceRefreshCheckpoints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._percentage = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._percentage = value.percentage;
    }
  }

  // percentage - computed: false, optional: true, required: false
  private _percentage?: number; 
  public get percentage() {
    return this.getNumberAttribute('percentage');
  }
  public set percentage(value: number) {
    this._percentage = value;
  }
  public resetPercentage() {
    this._percentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get percentageInput() {
    return this._percentage;
  }
}

export class EssInstanceRefreshCheckpointsList extends cdktf.ComplexList {
  public internalValue? : EssInstanceRefreshCheckpoints[] | cdktf.IResolvable

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
  public get(index: number): EssInstanceRefreshCheckpointsOutputReference {
    return new EssInstanceRefreshCheckpointsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssInstanceRefreshDesiredConfigurationContainersEnvironmentVars {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh#field_ref_field_path EssInstanceRefresh#field_ref_field_path}
  */
  readonly fieldRefFieldPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh#key EssInstanceRefresh#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh#value EssInstanceRefresh#value}
  */
  readonly value?: string;
}

export function essInstanceRefreshDesiredConfigurationContainersEnvironmentVarsToTerraform(struct?: EssInstanceRefreshDesiredConfigurationContainersEnvironmentVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    field_ref_field_path: cdktf.stringToTerraform(struct!.fieldRefFieldPath),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function essInstanceRefreshDesiredConfigurationContainersEnvironmentVarsToHclTerraform(struct?: EssInstanceRefreshDesiredConfigurationContainersEnvironmentVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    field_ref_field_path: {
      value: cdktf.stringToHclTerraform(struct!.fieldRefFieldPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.stringToHclTerraform(struct!.value),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssInstanceRefreshDesiredConfigurationContainersEnvironmentVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssInstanceRefreshDesiredConfigurationContainersEnvironmentVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fieldRefFieldPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.fieldRefFieldPath = this._fieldRefFieldPath;
    }
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssInstanceRefreshDesiredConfigurationContainersEnvironmentVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fieldRefFieldPath = undefined;
      this._key = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fieldRefFieldPath = value.fieldRefFieldPath;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // field_ref_field_path - computed: false, optional: true, required: false
  private _fieldRefFieldPath?: string; 
  public get fieldRefFieldPath() {
    return this.getStringAttribute('field_ref_field_path');
  }
  public set fieldRefFieldPath(value: string) {
    this._fieldRefFieldPath = value;
  }
  public resetFieldRefFieldPath() {
    this._fieldRefFieldPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fieldRefFieldPathInput() {
    return this._fieldRefFieldPath;
  }

  // key - computed: false, optional: true, required: false
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  public resetKey() {
    this._key = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  public resetValue() {
    this._value = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class EssInstanceRefreshDesiredConfigurationContainersEnvironmentVarsList extends cdktf.ComplexList {
  public internalValue? : EssInstanceRefreshDesiredConfigurationContainersEnvironmentVars[] | cdktf.IResolvable

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
  public get(index: number): EssInstanceRefreshDesiredConfigurationContainersEnvironmentVarsOutputReference {
    return new EssInstanceRefreshDesiredConfigurationContainersEnvironmentVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssInstanceRefreshDesiredConfigurationContainers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh#args EssInstanceRefresh#args}
  */
  readonly args?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh#commands EssInstanceRefresh#commands}
  */
  readonly commands?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh#image EssInstanceRefresh#image}
  */
  readonly image?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh#name EssInstanceRefresh#name}
  */
  readonly name?: string;
  /**
  * environment_vars block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh#environment_vars EssInstanceRefresh#environment_vars}
  */
  readonly environmentVars?: EssInstanceRefreshDesiredConfigurationContainersEnvironmentVars[] | cdktf.IResolvable;
}

export function essInstanceRefreshDesiredConfigurationContainersToTerraform(struct?: EssInstanceRefreshDesiredConfigurationContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    args: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.args),
    commands: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.commands),
    image: cdktf.stringToTerraform(struct!.image),
    name: cdktf.stringToTerraform(struct!.name),
    environment_vars: cdktf.listMapper(essInstanceRefreshDesiredConfigurationContainersEnvironmentVarsToTerraform, true)(struct!.environmentVars),
  }
}


export function essInstanceRefreshDesiredConfigurationContainersToHclTerraform(struct?: EssInstanceRefreshDesiredConfigurationContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    args: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.args),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    commands: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.commands),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    environment_vars: {
      value: cdktf.listMapperHcl(essInstanceRefreshDesiredConfigurationContainersEnvironmentVarsToHclTerraform, true)(struct!.environmentVars),
      isBlock: true,
      type: "list",
      storageClassType: "EssInstanceRefreshDesiredConfigurationContainersEnvironmentVarsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssInstanceRefreshDesiredConfigurationContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssInstanceRefreshDesiredConfigurationContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._args !== undefined) {
      hasAnyValues = true;
      internalValueResult.args = this._args;
    }
    if (this._commands !== undefined) {
      hasAnyValues = true;
      internalValueResult.commands = this._commands;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._environmentVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.environmentVars = this._environmentVars?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssInstanceRefreshDesiredConfigurationContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._args = undefined;
      this._commands = undefined;
      this._image = undefined;
      this._name = undefined;
      this._environmentVars.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._args = value.args;
      this._commands = value.commands;
      this._image = value.image;
      this._name = value.name;
      this._environmentVars.internalValue = value.environmentVars;
    }
  }

  // args - computed: false, optional: true, required: false
  private _args?: string[]; 
  public get args() {
    return this.getListAttribute('args');
  }
  public set args(value: string[]) {
    this._args = value;
  }
  public resetArgs() {
    this._args = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get argsInput() {
    return this._args;
  }

  // commands - computed: false, optional: true, required: false
  private _commands?: string[]; 
  public get commands() {
    return this.getListAttribute('commands');
  }
  public set commands(value: string[]) {
    this._commands = value;
  }
  public resetCommands() {
    this._commands = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commandsInput() {
    return this._commands;
  }

  // image - computed: false, optional: true, required: false
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  public resetImage() {
    this._image = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // environment_vars - computed: false, optional: true, required: false
  private _environmentVars = new EssInstanceRefreshDesiredConfigurationContainersEnvironmentVarsList(this, "environment_vars", false);
  public get environmentVars() {
    return this._environmentVars;
  }
  public putEnvironmentVars(value: EssInstanceRefreshDesiredConfigurationContainersEnvironmentVars[] | cdktf.IResolvable) {
    this._environmentVars.internalValue = value;
  }
  public resetEnvironmentVars() {
    this._environmentVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get environmentVarsInput() {
    return this._environmentVars.internalValue;
  }
}

export class EssInstanceRefreshDesiredConfigurationContainersList extends cdktf.ComplexList {
  public internalValue? : EssInstanceRefreshDesiredConfigurationContainers[] | cdktf.IResolvable

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
  public get(index: number): EssInstanceRefreshDesiredConfigurationContainersOutputReference {
    return new EssInstanceRefreshDesiredConfigurationContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface EssInstanceRefreshDesiredConfigurationLaunchTemplateOverrides {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh#instance_type EssInstanceRefresh#instance_type}
  */
  readonly instanceType?: string;
}

export function essInstanceRefreshDesiredConfigurationLaunchTemplateOverridesToTerraform(struct?: EssInstanceRefreshDesiredConfigurationLaunchTemplateOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_type: cdktf.stringToTerraform(struct!.instanceType),
  }
}


export function essInstanceRefreshDesiredConfigurationLaunchTemplateOverridesToHclTerraform(struct?: EssInstanceRefreshDesiredConfigurationLaunchTemplateOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_type: {
      value: cdktf.stringToHclTerraform(struct!.instanceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class EssInstanceRefreshDesiredConfigurationLaunchTemplateOverridesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): EssInstanceRefreshDesiredConfigurationLaunchTemplateOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceType = this._instanceType;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: EssInstanceRefreshDesiredConfigurationLaunchTemplateOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceType = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceType = value.instanceType;
    }
  }

  // instance_type - computed: false, optional: true, required: false
  private _instanceType?: string; 
  public get instanceType() {
    return this.getStringAttribute('instance_type');
  }
  public set instanceType(value: string) {
    this._instanceType = value;
  }
  public resetInstanceType() {
    this._instanceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypeInput() {
    return this._instanceType;
  }
}

export class EssInstanceRefreshDesiredConfigurationLaunchTemplateOverridesList extends cdktf.ComplexList {
  public internalValue? : EssInstanceRefreshDesiredConfigurationLaunchTemplateOverrides[] | cdktf.IResolvable

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
  public get(index: number): EssInstanceRefreshDesiredConfigurationLaunchTemplateOverridesOutputReference {
    return new EssInstanceRefreshDesiredConfigurationLaunchTemplateOverridesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh alicloud_ess_instance_refresh}
*/
export class EssInstanceRefresh extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "alicloud_ess_instance_refresh";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a EssInstanceRefresh resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the EssInstanceRefresh to import
  * @param importFromId The id of the existing EssInstanceRefresh that should be imported. Refer to the {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the EssInstanceRefresh to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "alicloud_ess_instance_refresh", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/aliyun/alicloud/1.266.0/docs/resources/ess_instance_refresh alicloud_ess_instance_refresh} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options EssInstanceRefreshConfig
  */
  public constructor(scope: Construct, id: string, config: EssInstanceRefreshConfig) {
    super(scope, id, {
      terraformResourceType: 'alicloud_ess_instance_refresh',
      terraformGeneratorMetadata: {
        providerName: 'alicloud',
        providerVersion: '1.266.0',
        providerVersionConstraint: '1.266.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._checkpointPauseTime = config.checkpointPauseTime;
    this._desiredConfigurationImageId = config.desiredConfigurationImageId;
    this._desiredConfigurationLaunchTemplateId = config.desiredConfigurationLaunchTemplateId;
    this._desiredConfigurationLaunchTemplateVersion = config.desiredConfigurationLaunchTemplateVersion;
    this._id = config.id;
    this._maxHealthyPercentage = config.maxHealthyPercentage;
    this._minHealthyPercentage = config.minHealthyPercentage;
    this._scalingGroupId = config.scalingGroupId;
    this._skipMatching = config.skipMatching;
    this._status = config.status;
    this._checkpoints.internalValue = config.checkpoints;
    this._desiredConfigurationContainers.internalValue = config.desiredConfigurationContainers;
    this._desiredConfigurationLaunchTemplateOverrides.internalValue = config.desiredConfigurationLaunchTemplateOverrides;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // checkpoint_pause_time - computed: true, optional: true, required: false
  private _checkpointPauseTime?: number; 
  public get checkpointPauseTime() {
    return this.getNumberAttribute('checkpoint_pause_time');
  }
  public set checkpointPauseTime(value: number) {
    this._checkpointPauseTime = value;
  }
  public resetCheckpointPauseTime() {
    this._checkpointPauseTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointPauseTimeInput() {
    return this._checkpointPauseTime;
  }

  // desired_configuration_image_id - computed: false, optional: true, required: false
  private _desiredConfigurationImageId?: string; 
  public get desiredConfigurationImageId() {
    return this.getStringAttribute('desired_configuration_image_id');
  }
  public set desiredConfigurationImageId(value: string) {
    this._desiredConfigurationImageId = value;
  }
  public resetDesiredConfigurationImageId() {
    this._desiredConfigurationImageId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredConfigurationImageIdInput() {
    return this._desiredConfigurationImageId;
  }

  // desired_configuration_launch_template_id - computed: false, optional: true, required: false
  private _desiredConfigurationLaunchTemplateId?: string; 
  public get desiredConfigurationLaunchTemplateId() {
    return this.getStringAttribute('desired_configuration_launch_template_id');
  }
  public set desiredConfigurationLaunchTemplateId(value: string) {
    this._desiredConfigurationLaunchTemplateId = value;
  }
  public resetDesiredConfigurationLaunchTemplateId() {
    this._desiredConfigurationLaunchTemplateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredConfigurationLaunchTemplateIdInput() {
    return this._desiredConfigurationLaunchTemplateId;
  }

  // desired_configuration_launch_template_version - computed: false, optional: true, required: false
  private _desiredConfigurationLaunchTemplateVersion?: string; 
  public get desiredConfigurationLaunchTemplateVersion() {
    return this.getStringAttribute('desired_configuration_launch_template_version');
  }
  public set desiredConfigurationLaunchTemplateVersion(value: string) {
    this._desiredConfigurationLaunchTemplateVersion = value;
  }
  public resetDesiredConfigurationLaunchTemplateVersion() {
    this._desiredConfigurationLaunchTemplateVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredConfigurationLaunchTemplateVersionInput() {
    return this._desiredConfigurationLaunchTemplateVersion;
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

  // max_healthy_percentage - computed: true, optional: true, required: false
  private _maxHealthyPercentage?: number; 
  public get maxHealthyPercentage() {
    return this.getNumberAttribute('max_healthy_percentage');
  }
  public set maxHealthyPercentage(value: number) {
    this._maxHealthyPercentage = value;
  }
  public resetMaxHealthyPercentage() {
    this._maxHealthyPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxHealthyPercentageInput() {
    return this._maxHealthyPercentage;
  }

  // min_healthy_percentage - computed: true, optional: true, required: false
  private _minHealthyPercentage?: number; 
  public get minHealthyPercentage() {
    return this.getNumberAttribute('min_healthy_percentage');
  }
  public set minHealthyPercentage(value: number) {
    this._minHealthyPercentage = value;
  }
  public resetMinHealthyPercentage() {
    this._minHealthyPercentage = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minHealthyPercentageInput() {
    return this._minHealthyPercentage;
  }

  // scaling_group_id - computed: false, optional: false, required: true
  private _scalingGroupId?: string; 
  public get scalingGroupId() {
    return this.getStringAttribute('scaling_group_id');
  }
  public set scalingGroupId(value: string) {
    this._scalingGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get scalingGroupIdInput() {
    return this._scalingGroupId;
  }

  // skip_matching - computed: true, optional: true, required: false
  private _skipMatching?: boolean | cdktf.IResolvable; 
  public get skipMatching() {
    return this.getBooleanAttribute('skip_matching');
  }
  public set skipMatching(value: boolean | cdktf.IResolvable) {
    this._skipMatching = value;
  }
  public resetSkipMatching() {
    this._skipMatching = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipMatchingInput() {
    return this._skipMatching;
  }

  // status - computed: true, optional: true, required: false
  private _status?: string; 
  public get status() {
    return this.getStringAttribute('status');
  }
  public set status(value: string) {
    this._status = value;
  }
  public resetStatus() {
    this._status = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get statusInput() {
    return this._status;
  }

  // checkpoints - computed: false, optional: true, required: false
  private _checkpoints = new EssInstanceRefreshCheckpointsList(this, "checkpoints", false);
  public get checkpoints() {
    return this._checkpoints;
  }
  public putCheckpoints(value: EssInstanceRefreshCheckpoints[] | cdktf.IResolvable) {
    this._checkpoints.internalValue = value;
  }
  public resetCheckpoints() {
    this._checkpoints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get checkpointsInput() {
    return this._checkpoints.internalValue;
  }

  // desired_configuration_containers - computed: false, optional: true, required: false
  private _desiredConfigurationContainers = new EssInstanceRefreshDesiredConfigurationContainersList(this, "desired_configuration_containers", false);
  public get desiredConfigurationContainers() {
    return this._desiredConfigurationContainers;
  }
  public putDesiredConfigurationContainers(value: EssInstanceRefreshDesiredConfigurationContainers[] | cdktf.IResolvable) {
    this._desiredConfigurationContainers.internalValue = value;
  }
  public resetDesiredConfigurationContainers() {
    this._desiredConfigurationContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredConfigurationContainersInput() {
    return this._desiredConfigurationContainers.internalValue;
  }

  // desired_configuration_launch_template_overrides - computed: false, optional: true, required: false
  private _desiredConfigurationLaunchTemplateOverrides = new EssInstanceRefreshDesiredConfigurationLaunchTemplateOverridesList(this, "desired_configuration_launch_template_overrides", false);
  public get desiredConfigurationLaunchTemplateOverrides() {
    return this._desiredConfigurationLaunchTemplateOverrides;
  }
  public putDesiredConfigurationLaunchTemplateOverrides(value: EssInstanceRefreshDesiredConfigurationLaunchTemplateOverrides[] | cdktf.IResolvable) {
    this._desiredConfigurationLaunchTemplateOverrides.internalValue = value;
  }
  public resetDesiredConfigurationLaunchTemplateOverrides() {
    this._desiredConfigurationLaunchTemplateOverrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredConfigurationLaunchTemplateOverridesInput() {
    return this._desiredConfigurationLaunchTemplateOverrides.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      checkpoint_pause_time: cdktf.numberToTerraform(this._checkpointPauseTime),
      desired_configuration_image_id: cdktf.stringToTerraform(this._desiredConfigurationImageId),
      desired_configuration_launch_template_id: cdktf.stringToTerraform(this._desiredConfigurationLaunchTemplateId),
      desired_configuration_launch_template_version: cdktf.stringToTerraform(this._desiredConfigurationLaunchTemplateVersion),
      id: cdktf.stringToTerraform(this._id),
      max_healthy_percentage: cdktf.numberToTerraform(this._maxHealthyPercentage),
      min_healthy_percentage: cdktf.numberToTerraform(this._minHealthyPercentage),
      scaling_group_id: cdktf.stringToTerraform(this._scalingGroupId),
      skip_matching: cdktf.booleanToTerraform(this._skipMatching),
      status: cdktf.stringToTerraform(this._status),
      checkpoints: cdktf.listMapper(essInstanceRefreshCheckpointsToTerraform, true)(this._checkpoints.internalValue),
      desired_configuration_containers: cdktf.listMapper(essInstanceRefreshDesiredConfigurationContainersToTerraform, true)(this._desiredConfigurationContainers.internalValue),
      desired_configuration_launch_template_overrides: cdktf.listMapper(essInstanceRefreshDesiredConfigurationLaunchTemplateOverridesToTerraform, true)(this._desiredConfigurationLaunchTemplateOverrides.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      checkpoint_pause_time: {
        value: cdktf.numberToHclTerraform(this._checkpointPauseTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      desired_configuration_image_id: {
        value: cdktf.stringToHclTerraform(this._desiredConfigurationImageId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desired_configuration_launch_template_id: {
        value: cdktf.stringToHclTerraform(this._desiredConfigurationLaunchTemplateId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      desired_configuration_launch_template_version: {
        value: cdktf.stringToHclTerraform(this._desiredConfigurationLaunchTemplateVersion),
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
      max_healthy_percentage: {
        value: cdktf.numberToHclTerraform(this._maxHealthyPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      min_healthy_percentage: {
        value: cdktf.numberToHclTerraform(this._minHealthyPercentage),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      scaling_group_id: {
        value: cdktf.stringToHclTerraform(this._scalingGroupId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      skip_matching: {
        value: cdktf.booleanToHclTerraform(this._skipMatching),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      status: {
        value: cdktf.stringToHclTerraform(this._status),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      checkpoints: {
        value: cdktf.listMapperHcl(essInstanceRefreshCheckpointsToHclTerraform, true)(this._checkpoints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EssInstanceRefreshCheckpointsList",
      },
      desired_configuration_containers: {
        value: cdktf.listMapperHcl(essInstanceRefreshDesiredConfigurationContainersToHclTerraform, true)(this._desiredConfigurationContainers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EssInstanceRefreshDesiredConfigurationContainersList",
      },
      desired_configuration_launch_template_overrides: {
        value: cdktf.listMapperHcl(essInstanceRefreshDesiredConfigurationLaunchTemplateOverridesToHclTerraform, true)(this._desiredConfigurationLaunchTemplateOverrides.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "EssInstanceRefreshDesiredConfigurationLaunchTemplateOverridesList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
