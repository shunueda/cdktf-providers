// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WedataIntegrationOfflineTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Interval time of scheduling, the minimum value: 1.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#cycle_step WedataIntegrationOfflineTask#cycle_step}
  */
  readonly cycleStep: number;
  /**
  * Execution time, unit is minutes, only available for day/week/month/year scheduling. For example, daily scheduling is executed once every day at 02:00, and the delayTime is 120 minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#delay_time WedataIntegrationOfflineTask#delay_time}
  */
  readonly delayTime: number;
  /**
  * Effective end time, the format is yyyy-MM-dd HH:mm:ss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#end_time WedataIntegrationOfflineTask#end_time}
  */
  readonly endTime: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#id WedataIntegrationOfflineTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Description information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#notes WedataIntegrationOfflineTask#notes}
  */
  readonly notes: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#project_id WedataIntegrationOfflineTask#project_id}
  */
  readonly projectId: string;
  /**
  * Effective start time, the format is yyyy-MM-dd HH:mm:ss.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#start_time WedataIntegrationOfflineTask#start_time}
  */
  readonly startTime: string;
  /**
  * Scheduling configuration: flexible period configuration, only available for hourly/weekly/monthly/yearly scheduling. If the hourly task is specified to run at 0:00, 3:00 and 4:00 every day, it is 0,3,4.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#task_action WedataIntegrationOfflineTask#task_action}
  */
  readonly taskAction: string;
  /**
  * Task display mode, 0: canvas mode, 1: form mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#task_mode WedataIntegrationOfflineTask#task_mode}
  */
  readonly taskMode: string;
  /**
  * Task name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#task_name WedataIntegrationOfflineTask#task_name}
  */
  readonly taskName: string;
  /**
  * task_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#task_info WedataIntegrationOfflineTask#task_info}
  */
  readonly taskInfo: WedataIntegrationOfflineTaskTaskInfo;
}
export interface WedataIntegrationOfflineTaskTaskInfoConfig {
  /**
  * Configuration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#name WedataIntegrationOfflineTask#name}
  */
  readonly name?: string;
  /**
  * Configuration value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#value WedataIntegrationOfflineTask#value}
  */
  readonly value?: string;
}

export function wedataIntegrationOfflineTaskTaskInfoConfigToTerraform(struct?: WedataIntegrationOfflineTaskTaskInfoConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wedataIntegrationOfflineTaskTaskInfoConfigToHclTerraform(struct?: WedataIntegrationOfflineTaskTaskInfoConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class WedataIntegrationOfflineTaskTaskInfoConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationOfflineTaskTaskInfoConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataIntegrationOfflineTaskTaskInfoConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
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

export class WedataIntegrationOfflineTaskTaskInfoConfigList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationOfflineTaskTaskInfoConfig[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationOfflineTaskTaskInfoConfigOutputReference {
    return new WedataIntegrationOfflineTaskTaskInfoConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationOfflineTaskTaskInfoExecuteContext {
  /**
  * Configuration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#name WedataIntegrationOfflineTask#name}
  */
  readonly name?: string;
  /**
  * Configuration value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#value WedataIntegrationOfflineTask#value}
  */
  readonly value?: string;
}

export function wedataIntegrationOfflineTaskTaskInfoExecuteContextToTerraform(struct?: WedataIntegrationOfflineTaskTaskInfoExecuteContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wedataIntegrationOfflineTaskTaskInfoExecuteContextToHclTerraform(struct?: WedataIntegrationOfflineTaskTaskInfoExecuteContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class WedataIntegrationOfflineTaskTaskInfoExecuteContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationOfflineTaskTaskInfoExecuteContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataIntegrationOfflineTaskTaskInfoExecuteContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
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

export class WedataIntegrationOfflineTaskTaskInfoExecuteContextList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationOfflineTaskTaskInfoExecuteContext[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationOfflineTaskTaskInfoExecuteContextOutputReference {
    return new WedataIntegrationOfflineTaskTaskInfoExecuteContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationOfflineTaskTaskInfoExtConfig {
  /**
  * Configuration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#name WedataIntegrationOfflineTask#name}
  */
  readonly name?: string;
  /**
  * Configuration value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#value WedataIntegrationOfflineTask#value}
  */
  readonly value?: string;
}

export function wedataIntegrationOfflineTaskTaskInfoExtConfigToTerraform(struct?: WedataIntegrationOfflineTaskTaskInfoExtConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wedataIntegrationOfflineTaskTaskInfoExtConfigToHclTerraform(struct?: WedataIntegrationOfflineTaskTaskInfoExtConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class WedataIntegrationOfflineTaskTaskInfoExtConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationOfflineTaskTaskInfoExtConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataIntegrationOfflineTaskTaskInfoExtConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
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

export class WedataIntegrationOfflineTaskTaskInfoExtConfigList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationOfflineTaskTaskInfoExtConfig[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationOfflineTaskTaskInfoExtConfigOutputReference {
    return new WedataIntegrationOfflineTaskTaskInfoExtConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationOfflineTaskTaskInfoMappingsExtConfig {
  /**
  * Configuration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#name WedataIntegrationOfflineTask#name}
  */
  readonly name?: string;
  /**
  * Configuration value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#value WedataIntegrationOfflineTask#value}
  */
  readonly value?: string;
}

export function wedataIntegrationOfflineTaskTaskInfoMappingsExtConfigToTerraform(struct?: WedataIntegrationOfflineTaskTaskInfoMappingsExtConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wedataIntegrationOfflineTaskTaskInfoMappingsExtConfigToHclTerraform(struct?: WedataIntegrationOfflineTaskTaskInfoMappingsExtConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class WedataIntegrationOfflineTaskTaskInfoMappingsExtConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationOfflineTaskTaskInfoMappingsExtConfig | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataIntegrationOfflineTaskTaskInfoMappingsExtConfig | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
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

export class WedataIntegrationOfflineTaskTaskInfoMappingsExtConfigList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationOfflineTaskTaskInfoMappingsExtConfig[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationOfflineTaskTaskInfoMappingsExtConfigOutputReference {
    return new WedataIntegrationOfflineTaskTaskInfoMappingsExtConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationOfflineTaskTaskInfoMappingsSchemaMappings {
  /**
  * Schema ID from sink node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#sink_schema_id WedataIntegrationOfflineTask#sink_schema_id}
  */
  readonly sinkSchemaId: string;
  /**
  * Schema ID from source node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#source_schema_id WedataIntegrationOfflineTask#source_schema_id}
  */
  readonly sourceSchemaId: string;
}

export function wedataIntegrationOfflineTaskTaskInfoMappingsSchemaMappingsToTerraform(struct?: WedataIntegrationOfflineTaskTaskInfoMappingsSchemaMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sink_schema_id: cdktf.stringToTerraform(struct!.sinkSchemaId),
    source_schema_id: cdktf.stringToTerraform(struct!.sourceSchemaId),
  }
}


export function wedataIntegrationOfflineTaskTaskInfoMappingsSchemaMappingsToHclTerraform(struct?: WedataIntegrationOfflineTaskTaskInfoMappingsSchemaMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sink_schema_id: {
      value: cdktf.stringToHclTerraform(struct!.sinkSchemaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_schema_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceSchemaId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataIntegrationOfflineTaskTaskInfoMappingsSchemaMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationOfflineTaskTaskInfoMappingsSchemaMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sinkSchemaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sinkSchemaId = this._sinkSchemaId;
    }
    if (this._sourceSchemaId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSchemaId = this._sourceSchemaId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataIntegrationOfflineTaskTaskInfoMappingsSchemaMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sinkSchemaId = undefined;
      this._sourceSchemaId = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sinkSchemaId = value.sinkSchemaId;
      this._sourceSchemaId = value.sourceSchemaId;
    }
  }

  // sink_schema_id - computed: false, optional: false, required: true
  private _sinkSchemaId?: string; 
  public get sinkSchemaId() {
    return this.getStringAttribute('sink_schema_id');
  }
  public set sinkSchemaId(value: string) {
    this._sinkSchemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sinkSchemaIdInput() {
    return this._sinkSchemaId;
  }

  // source_schema_id - computed: false, optional: false, required: true
  private _sourceSchemaId?: string; 
  public get sourceSchemaId() {
    return this.getStringAttribute('source_schema_id');
  }
  public set sourceSchemaId(value: string) {
    this._sourceSchemaId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSchemaIdInput() {
    return this._sourceSchemaId;
  }
}

export class WedataIntegrationOfflineTaskTaskInfoMappingsSchemaMappingsList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationOfflineTaskTaskInfoMappingsSchemaMappings[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationOfflineTaskTaskInfoMappingsSchemaMappingsOutputReference {
    return new WedataIntegrationOfflineTaskTaskInfoMappingsSchemaMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaProperties {
  /**
  * Attributes name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#name WedataIntegrationOfflineTask#name}
  */
  readonly name?: string;
  /**
  * Attributes value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#value WedataIntegrationOfflineTask#value}
  */
  readonly value?: string;
}

export function wedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaPropertiesToTerraform(struct?: WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaPropertiesToHclTerraform(struct?: WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
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

export class WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaProperties | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaProperties | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
    }
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

  // value - computed: false, optional: true, required: false
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

export class WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaPropertiesList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaProperties[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaPropertiesOutputReference {
    return new WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchema {
  /**
  * Schema alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#alias WedataIntegrationOfflineTask#alias}
  */
  readonly alias?: string;
  /**
  * Schema comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#comment WedataIntegrationOfflineTask#comment}
  */
  readonly comment?: string;
  /**
  * Schema ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#id WedataIntegrationOfflineTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#name WedataIntegrationOfflineTask#name}
  */
  readonly name: string;
  /**
  * Schema type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#type WedataIntegrationOfflineTask#type}
  */
  readonly type: string;
  /**
  * Schema value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#value WedataIntegrationOfflineTask#value}
  */
  readonly value?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#properties WedataIntegrationOfflineTask#properties}
  */
  readonly properties?: WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaProperties[] | cdktf.IResolvable;
}

export function wedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaToTerraform(struct?: WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    alias: cdktf.stringToTerraform(struct!.alias),
    comment: cdktf.stringToTerraform(struct!.comment),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    value: cdktf.stringToTerraform(struct!.value),
    properties: cdktf.listMapper(wedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaPropertiesToTerraform, true)(struct!.properties),
  }
}


export function wedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaToHclTerraform(struct?: WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchema | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    alias: {
      value: cdktf.stringToHclTerraform(struct!.alias),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    comment: {
      value: cdktf.stringToHclTerraform(struct!.comment),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
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
    type: {
      value: cdktf.stringToHclTerraform(struct!.type),
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
    properties: {
      value: cdktf.listMapperHcl(wedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchema | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._alias !== undefined) {
      hasAnyValues = true;
      internalValueResult.alias = this._alias;
    }
    if (this._comment !== undefined) {
      hasAnyValues = true;
      internalValueResult.comment = this._comment;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    if (this._properties?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.properties = this._properties?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchema | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._alias = undefined;
      this._comment = undefined;
      this._id = undefined;
      this._name = undefined;
      this._type = undefined;
      this._value = undefined;
      this._properties.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._alias = value.alias;
      this._comment = value.comment;
      this._id = value.id;
      this._name = value.name;
      this._type = value.type;
      this._value = value.value;
      this._properties.internalValue = value.properties;
    }
  }

  // alias - computed: false, optional: true, required: false
  private _alias?: string; 
  public get alias() {
    return this.getStringAttribute('alias');
  }
  public set alias(value: string) {
    this._alias = value;
  }
  public resetAlias() {
    this._alias = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get aliasInput() {
    return this._alias;
  }

  // comment - computed: false, optional: true, required: false
  private _comment?: string; 
  public get comment() {
    return this.getStringAttribute('comment');
  }
  public set comment(value: string) {
    this._comment = value;
  }
  public resetComment() {
    this._comment = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commentInput() {
    return this._comment;
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

  // type - computed: false, optional: false, required: true
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value - computed: false, optional: true, required: false
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

  // properties - computed: false, optional: true, required: false
  private _properties = new WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaProperties[] | cdktf.IResolvable) {
    this._properties.internalValue = value;
  }
  public resetProperties() {
    this._properties.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get propertiesInput() {
    return this._properties.internalValue;
  }
}

export class WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchema[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaOutputReference {
    return new WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationOfflineTaskTaskInfoMappings {
  /**
  * Sink node ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#sink_id WedataIntegrationOfflineTask#sink_id}
  */
  readonly sinkId?: string;
  /**
  * Source node ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#source_id WedataIntegrationOfflineTask#source_id}
  */
  readonly sourceId?: string;
  /**
  * ext_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#ext_config WedataIntegrationOfflineTask#ext_config}
  */
  readonly extConfig?: WedataIntegrationOfflineTaskTaskInfoMappingsExtConfig[] | cdktf.IResolvable;
  /**
  * schema_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#schema_mappings WedataIntegrationOfflineTask#schema_mappings}
  */
  readonly schemaMappings?: WedataIntegrationOfflineTaskTaskInfoMappingsSchemaMappings[] | cdktf.IResolvable;
  /**
  * source_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#source_schema WedataIntegrationOfflineTask#source_schema}
  */
  readonly sourceSchema?: WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchema[] | cdktf.IResolvable;
}

export function wedataIntegrationOfflineTaskTaskInfoMappingsToTerraform(struct?: WedataIntegrationOfflineTaskTaskInfoMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sink_id: cdktf.stringToTerraform(struct!.sinkId),
    source_id: cdktf.stringToTerraform(struct!.sourceId),
    ext_config: cdktf.listMapper(wedataIntegrationOfflineTaskTaskInfoMappingsExtConfigToTerraform, true)(struct!.extConfig),
    schema_mappings: cdktf.listMapper(wedataIntegrationOfflineTaskTaskInfoMappingsSchemaMappingsToTerraform, true)(struct!.schemaMappings),
    source_schema: cdktf.listMapper(wedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaToTerraform, true)(struct!.sourceSchema),
  }
}


export function wedataIntegrationOfflineTaskTaskInfoMappingsToHclTerraform(struct?: WedataIntegrationOfflineTaskTaskInfoMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    sink_id: {
      value: cdktf.stringToHclTerraform(struct!.sinkId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    source_id: {
      value: cdktf.stringToHclTerraform(struct!.sourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    ext_config: {
      value: cdktf.listMapperHcl(wedataIntegrationOfflineTaskTaskInfoMappingsExtConfigToHclTerraform, true)(struct!.extConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationOfflineTaskTaskInfoMappingsExtConfigList",
    },
    schema_mappings: {
      value: cdktf.listMapperHcl(wedataIntegrationOfflineTaskTaskInfoMappingsSchemaMappingsToHclTerraform, true)(struct!.schemaMappings),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationOfflineTaskTaskInfoMappingsSchemaMappingsList",
    },
    source_schema: {
      value: cdktf.listMapperHcl(wedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaToHclTerraform, true)(struct!.sourceSchema),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataIntegrationOfflineTaskTaskInfoMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationOfflineTaskTaskInfoMappings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._sinkId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sinkId = this._sinkId;
    }
    if (this._sourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceId = this._sourceId;
    }
    if (this._extConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extConfig = this._extConfig?.internalValue;
    }
    if (this._schemaMappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schemaMappings = this._schemaMappings?.internalValue;
    }
    if (this._sourceSchema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sourceSchema = this._sourceSchema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataIntegrationOfflineTaskTaskInfoMappings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._sinkId = undefined;
      this._sourceId = undefined;
      this._extConfig.internalValue = undefined;
      this._schemaMappings.internalValue = undefined;
      this._sourceSchema.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._sinkId = value.sinkId;
      this._sourceId = value.sourceId;
      this._extConfig.internalValue = value.extConfig;
      this._schemaMappings.internalValue = value.schemaMappings;
      this._sourceSchema.internalValue = value.sourceSchema;
    }
  }

  // sink_id - computed: false, optional: true, required: false
  private _sinkId?: string; 
  public get sinkId() {
    return this.getStringAttribute('sink_id');
  }
  public set sinkId(value: string) {
    this._sinkId = value;
  }
  public resetSinkId() {
    this._sinkId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sinkIdInput() {
    return this._sinkId;
  }

  // source_id - computed: false, optional: true, required: false
  private _sourceId?: string; 
  public get sourceId() {
    return this.getStringAttribute('source_id');
  }
  public set sourceId(value: string) {
    this._sourceId = value;
  }
  public resetSourceId() {
    this._sourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceIdInput() {
    return this._sourceId;
  }

  // ext_config - computed: false, optional: true, required: false
  private _extConfig = new WedataIntegrationOfflineTaskTaskInfoMappingsExtConfigList(this, "ext_config", false);
  public get extConfig() {
    return this._extConfig;
  }
  public putExtConfig(value: WedataIntegrationOfflineTaskTaskInfoMappingsExtConfig[] | cdktf.IResolvable) {
    this._extConfig.internalValue = value;
  }
  public resetExtConfig() {
    this._extConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extConfigInput() {
    return this._extConfig.internalValue;
  }

  // schema_mappings - computed: false, optional: true, required: false
  private _schemaMappings = new WedataIntegrationOfflineTaskTaskInfoMappingsSchemaMappingsList(this, "schema_mappings", false);
  public get schemaMappings() {
    return this._schemaMappings;
  }
  public putSchemaMappings(value: WedataIntegrationOfflineTaskTaskInfoMappingsSchemaMappings[] | cdktf.IResolvable) {
    this._schemaMappings.internalValue = value;
  }
  public resetSchemaMappings() {
    this._schemaMappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaMappingsInput() {
    return this._schemaMappings.internalValue;
  }

  // source_schema - computed: false, optional: true, required: false
  private _sourceSchema = new WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchemaList(this, "source_schema", false);
  public get sourceSchema() {
    return this._sourceSchema;
  }
  public putSourceSchema(value: WedataIntegrationOfflineTaskTaskInfoMappingsSourceSchema[] | cdktf.IResolvable) {
    this._sourceSchema.internalValue = value;
  }
  public resetSourceSchema() {
    this._sourceSchema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceSchemaInput() {
    return this._sourceSchema.internalValue;
  }
}

export class WedataIntegrationOfflineTaskTaskInfoMappingsList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationOfflineTaskTaskInfoMappings[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationOfflineTaskTaskInfoMappingsOutputReference {
    return new WedataIntegrationOfflineTaskTaskInfoMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationOfflineTaskTaskInfoOfflineTaskAddEntity {
  /**
  * Crontab expression.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#crontab_expression WedataIntegrationOfflineTask#crontab_expression}
  */
  readonly crontabExpression?: string;
  /**
  * Scheduling type, 0: crontab type, 1: minutes, 2: hours, 3: days, 4: weeks, 5: months, 6: one-time, 7: user-driven, 10: elastic period (week), 11: elastic period (month), 12: year, 13: instant trigger.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#cycle_type WedataIntegrationOfflineTask#cycle_type}
  */
  readonly cycleType?: number;
  /**
  * Scheduling execution end time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#execution_end_time WedataIntegrationOfflineTask#execution_end_time}
  */
  readonly executionEndTime?: string;
  /**
  * Scheduling execution start time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#execution_start_time WedataIntegrationOfflineTask#execution_start_time}
  */
  readonly executionStartTime?: string;
  /**
  * Whether to retry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#retriable WedataIntegrationOfflineTask#retriable}
  */
  readonly retriable?: number;
  /**
  * Retry waiting time, unit is minutes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#retry_wait WedataIntegrationOfflineTask#retry_wait}
  */
  readonly retryWait?: number;
  /**
  * Self-dependent rules, 1: Ordered serial one at a time, queued execution, 2: Unordered serial one at a time, not queued execution, 3: Parallel, multiple at once.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#self_depend WedataIntegrationOfflineTask#self_depend}
  */
  readonly selfDepend?: number;
  /**
  * Number of retries.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#try_limit WedataIntegrationOfflineTask#try_limit}
  */
  readonly tryLimit?: number;
}

export function wedataIntegrationOfflineTaskTaskInfoOfflineTaskAddEntityToTerraform(struct?: WedataIntegrationOfflineTaskTaskInfoOfflineTaskAddEntityOutputReference | WedataIntegrationOfflineTaskTaskInfoOfflineTaskAddEntity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    crontab_expression: cdktf.stringToTerraform(struct!.crontabExpression),
    cycle_type: cdktf.numberToTerraform(struct!.cycleType),
    execution_end_time: cdktf.stringToTerraform(struct!.executionEndTime),
    execution_start_time: cdktf.stringToTerraform(struct!.executionStartTime),
    retriable: cdktf.numberToTerraform(struct!.retriable),
    retry_wait: cdktf.numberToTerraform(struct!.retryWait),
    self_depend: cdktf.numberToTerraform(struct!.selfDepend),
    try_limit: cdktf.numberToTerraform(struct!.tryLimit),
  }
}


export function wedataIntegrationOfflineTaskTaskInfoOfflineTaskAddEntityToHclTerraform(struct?: WedataIntegrationOfflineTaskTaskInfoOfflineTaskAddEntityOutputReference | WedataIntegrationOfflineTaskTaskInfoOfflineTaskAddEntity): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    crontab_expression: {
      value: cdktf.stringToHclTerraform(struct!.crontabExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cycle_type: {
      value: cdktf.numberToHclTerraform(struct!.cycleType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    execution_end_time: {
      value: cdktf.stringToHclTerraform(struct!.executionEndTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    execution_start_time: {
      value: cdktf.stringToHclTerraform(struct!.executionStartTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    retriable: {
      value: cdktf.numberToHclTerraform(struct!.retriable),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    retry_wait: {
      value: cdktf.numberToHclTerraform(struct!.retryWait),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    self_depend: {
      value: cdktf.numberToHclTerraform(struct!.selfDepend),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    try_limit: {
      value: cdktf.numberToHclTerraform(struct!.tryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataIntegrationOfflineTaskTaskInfoOfflineTaskAddEntityOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataIntegrationOfflineTaskTaskInfoOfflineTaskAddEntity | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._crontabExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.crontabExpression = this._crontabExpression;
    }
    if (this._cycleType !== undefined) {
      hasAnyValues = true;
      internalValueResult.cycleType = this._cycleType;
    }
    if (this._executionEndTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionEndTime = this._executionEndTime;
    }
    if (this._executionStartTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.executionStartTime = this._executionStartTime;
    }
    if (this._retriable !== undefined) {
      hasAnyValues = true;
      internalValueResult.retriable = this._retriable;
    }
    if (this._retryWait !== undefined) {
      hasAnyValues = true;
      internalValueResult.retryWait = this._retryWait;
    }
    if (this._selfDepend !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfDepend = this._selfDepend;
    }
    if (this._tryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.tryLimit = this._tryLimit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataIntegrationOfflineTaskTaskInfoOfflineTaskAddEntity | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._crontabExpression = undefined;
      this._cycleType = undefined;
      this._executionEndTime = undefined;
      this._executionStartTime = undefined;
      this._retriable = undefined;
      this._retryWait = undefined;
      this._selfDepend = undefined;
      this._tryLimit = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._crontabExpression = value.crontabExpression;
      this._cycleType = value.cycleType;
      this._executionEndTime = value.executionEndTime;
      this._executionStartTime = value.executionStartTime;
      this._retriable = value.retriable;
      this._retryWait = value.retryWait;
      this._selfDepend = value.selfDepend;
      this._tryLimit = value.tryLimit;
    }
  }

  // crontab_expression - computed: false, optional: true, required: false
  private _crontabExpression?: string; 
  public get crontabExpression() {
    return this.getStringAttribute('crontab_expression');
  }
  public set crontabExpression(value: string) {
    this._crontabExpression = value;
  }
  public resetCrontabExpression() {
    this._crontabExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get crontabExpressionInput() {
    return this._crontabExpression;
  }

  // cycle_type - computed: false, optional: true, required: false
  private _cycleType?: number; 
  public get cycleType() {
    return this.getNumberAttribute('cycle_type');
  }
  public set cycleType(value: number) {
    this._cycleType = value;
  }
  public resetCycleType() {
    this._cycleType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cycleTypeInput() {
    return this._cycleType;
  }

  // execution_end_time - computed: false, optional: true, required: false
  private _executionEndTime?: string; 
  public get executionEndTime() {
    return this.getStringAttribute('execution_end_time');
  }
  public set executionEndTime(value: string) {
    this._executionEndTime = value;
  }
  public resetExecutionEndTime() {
    this._executionEndTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionEndTimeInput() {
    return this._executionEndTime;
  }

  // execution_start_time - computed: false, optional: true, required: false
  private _executionStartTime?: string; 
  public get executionStartTime() {
    return this.getStringAttribute('execution_start_time');
  }
  public set executionStartTime(value: string) {
    this._executionStartTime = value;
  }
  public resetExecutionStartTime() {
    this._executionStartTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executionStartTimeInput() {
    return this._executionStartTime;
  }

  // retriable - computed: false, optional: true, required: false
  private _retriable?: number; 
  public get retriable() {
    return this.getNumberAttribute('retriable');
  }
  public set retriable(value: number) {
    this._retriable = value;
  }
  public resetRetriable() {
    this._retriable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retriableInput() {
    return this._retriable;
  }

  // retry_wait - computed: false, optional: true, required: false
  private _retryWait?: number; 
  public get retryWait() {
    return this.getNumberAttribute('retry_wait');
  }
  public set retryWait(value: number) {
    this._retryWait = value;
  }
  public resetRetryWait() {
    this._retryWait = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryWaitInput() {
    return this._retryWait;
  }

  // self_depend - computed: false, optional: true, required: false
  private _selfDepend?: number; 
  public get selfDepend() {
    return this.getNumberAttribute('self_depend');
  }
  public set selfDepend(value: number) {
    this._selfDepend = value;
  }
  public resetSelfDepend() {
    this._selfDepend = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfDependInput() {
    return this._selfDepend;
  }

  // try_limit - computed: false, optional: true, required: false
  private _tryLimit?: number; 
  public get tryLimit() {
    return this.getNumberAttribute('try_limit');
  }
  public set tryLimit(value: number) {
    this._tryLimit = value;
  }
  public resetTryLimit() {
    this._tryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tryLimitInput() {
    return this._tryLimit;
  }
}
export interface WedataIntegrationOfflineTaskTaskInfo {
  /**
  * User App Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#app_id WedataIntegrationOfflineTask#app_id}
  */
  readonly appId?: string;
  /**
  * Create time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#create_time WedataIntegrationOfflineTask#create_time}
  */
  readonly createTime?: string;
  /**
  * Creator User ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#creator_uin WedataIntegrationOfflineTask#creator_uin}
  */
  readonly creatorUin?: string;
  /**
  * Data proxy url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#data_proxy_url WedataIntegrationOfflineTask#data_proxy_url}
  */
  readonly dataProxyUrl?: string[];
  /**
  * Executor group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#executor_group_name WedataIntegrationOfflineTask#executor_group_name}
  */
  readonly executorGroupName?: string;
  /**
  * Executor resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#executor_id WedataIntegrationOfflineTask#executor_id}
  */
  readonly executorId?: string;
  /**
  * Whether the task been submitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#has_version WedataIntegrationOfflineTask#has_version}
  */
  readonly hasVersion?: boolean | cdktf.IResolvable;
  /**
  * InLong manager url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#in_long_manager_url WedataIntegrationOfflineTask#in_long_manager_url}
  */
  readonly inLongManagerUrl?: string;
  /**
  * InLong manager version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#in_long_manager_version WedataIntegrationOfflineTask#in_long_manager_version}
  */
  readonly inLongManagerVersion?: string;
  /**
  * InLong stream id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#in_long_stream_id WedataIntegrationOfflineTask#in_long_stream_id}
  */
  readonly inLongStreamId?: string;
  /**
  * Incharge user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#incharge WedataIntegrationOfflineTask#incharge}
  */
  readonly incharge?: string;
  /**
  * Input datasource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#input_datasource_type WedataIntegrationOfflineTask#input_datasource_type}
  */
  readonly inputDatasourceType?: string;
  /**
  * Instance version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#instance_version WedataIntegrationOfflineTask#instance_version}
  */
  readonly instanceVersion?: number;
  /**
  * The last time the task was run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#last_run_time WedataIntegrationOfflineTask#last_run_time}
  */
  readonly lastRunTime?: string;
  /**
  * Whether the task been locked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#locked WedataIntegrationOfflineTask#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * User locked task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#locker WedataIntegrationOfflineTask#locker}
  */
  readonly locker?: string;
  /**
  * Number of reads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#num_records_in WedataIntegrationOfflineTask#num_records_in}
  */
  readonly numRecordsIn?: number;
  /**
  * Number of writes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#num_records_out WedataIntegrationOfflineTask#num_records_out}
  */
  readonly numRecordsOut?: number;
  /**
  * Times of restarts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#num_restarts WedataIntegrationOfflineTask#num_restarts}
  */
  readonly numRestarts?: number;
  /**
  * Operator User ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#operator_uin WedataIntegrationOfflineTask#operator_uin}
  */
  readonly operatorUin?: string;
  /**
  * Output datasource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#output_datasource_type WedataIntegrationOfflineTask#output_datasource_type}
  */
  readonly outputDatasourceType?: string;
  /**
  * Owner User ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#owner_uin WedataIntegrationOfflineTask#owner_uin}
  */
  readonly ownerUin?: string;
  /**
  * Reading stage, 0: full amount, 1: partial full amount, 2: all incremental.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#read_phase WedataIntegrationOfflineTask#read_phase}
  */
  readonly readPhase?: number;
  /**
  * Read latency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#reader_delay WedataIntegrationOfflineTask#reader_delay}
  */
  readonly readerDelay?: number;
  /**
  * The amount of resources consumed by real-time task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#running_cu WedataIntegrationOfflineTask#running_cu}
  */
  readonly runningCu?: number;
  /**
  * Task scheduling id (job id such as oceanus or us).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#schedule_task_id WedataIntegrationOfflineTask#schedule_task_id}
  */
  readonly scheduleTaskId?: string;
  /**
  * Task status 1. Not started | Task initialization, 2. Task starting, 3. Running, 4. Paused, 5. Task stopping, 6. Stopped, 7. Execution failed, 8. deleted, 9. Locked, 404. unknown status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#status WedataIntegrationOfflineTask#status}
  */
  readonly status?: number;
  /**
  * The time the task was stopped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#stop_time WedataIntegrationOfflineTask#stop_time}
  */
  readonly stopTime?: string;
  /**
  * Whether the task version has been submitted for operation and maintenance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#submit WedataIntegrationOfflineTask#submit}
  */
  readonly submit?: boolean | cdktf.IResolvable;
  /**
  * Resource tiering status, 0: in progress, 1: successful, 2: failed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#switch_resource WedataIntegrationOfflineTask#switch_resource}
  */
  readonly switchResource?: number;
  /**
  * Synchronization type: 1. Whole database synchronization, 2. Single table synchronization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#sync_type WedataIntegrationOfflineTask#sync_type}
  */
  readonly syncType?: number;
  /**
  * Task alarm regular.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#task_alarm_regular_list WedataIntegrationOfflineTask#task_alarm_regular_list}
  */
  readonly taskAlarmRegularList?: string[];
  /**
  * Inlong Task Group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#task_group_id WedataIntegrationOfflineTask#task_group_id}
  */
  readonly taskGroupId?: string;
  /**
  * Task display mode, 0: canvas mode, 1: form mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#task_mode WedataIntegrationOfflineTask#task_mode}
  */
  readonly taskMode?: string;
  /**
  * Update time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#update_time WedataIntegrationOfflineTask#update_time}
  */
  readonly updateTime?: string;
  /**
  * The workflow id to which the task belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#workflow_id WedataIntegrationOfflineTask#workflow_id}
  */
  readonly workflowId?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#config WedataIntegrationOfflineTask#config}
  */
  readonly config?: WedataIntegrationOfflineTaskTaskInfoConfig[] | cdktf.IResolvable;
  /**
  * execute_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#execute_context WedataIntegrationOfflineTask#execute_context}
  */
  readonly executeContext?: WedataIntegrationOfflineTaskTaskInfoExecuteContext[] | cdktf.IResolvable;
  /**
  * ext_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#ext_config WedataIntegrationOfflineTask#ext_config}
  */
  readonly extConfig?: WedataIntegrationOfflineTaskTaskInfoExtConfig[] | cdktf.IResolvable;
  /**
  * mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#mappings WedataIntegrationOfflineTask#mappings}
  */
  readonly mappings?: WedataIntegrationOfflineTaskTaskInfoMappings[] | cdktf.IResolvable;
  /**
  * offline_task_add_entity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#offline_task_add_entity WedataIntegrationOfflineTask#offline_task_add_entity}
  */
  readonly offlineTaskAddEntity?: WedataIntegrationOfflineTaskTaskInfoOfflineTaskAddEntity;
}

export function wedataIntegrationOfflineTaskTaskInfoToTerraform(struct?: WedataIntegrationOfflineTaskTaskInfoOutputReference | WedataIntegrationOfflineTaskTaskInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    create_time: cdktf.stringToTerraform(struct!.createTime),
    creator_uin: cdktf.stringToTerraform(struct!.creatorUin),
    data_proxy_url: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.dataProxyUrl),
    executor_group_name: cdktf.stringToTerraform(struct!.executorGroupName),
    executor_id: cdktf.stringToTerraform(struct!.executorId),
    has_version: cdktf.booleanToTerraform(struct!.hasVersion),
    in_long_manager_url: cdktf.stringToTerraform(struct!.inLongManagerUrl),
    in_long_manager_version: cdktf.stringToTerraform(struct!.inLongManagerVersion),
    in_long_stream_id: cdktf.stringToTerraform(struct!.inLongStreamId),
    incharge: cdktf.stringToTerraform(struct!.incharge),
    input_datasource_type: cdktf.stringToTerraform(struct!.inputDatasourceType),
    instance_version: cdktf.numberToTerraform(struct!.instanceVersion),
    last_run_time: cdktf.stringToTerraform(struct!.lastRunTime),
    locked: cdktf.booleanToTerraform(struct!.locked),
    locker: cdktf.stringToTerraform(struct!.locker),
    num_records_in: cdktf.numberToTerraform(struct!.numRecordsIn),
    num_records_out: cdktf.numberToTerraform(struct!.numRecordsOut),
    num_restarts: cdktf.numberToTerraform(struct!.numRestarts),
    operator_uin: cdktf.stringToTerraform(struct!.operatorUin),
    output_datasource_type: cdktf.stringToTerraform(struct!.outputDatasourceType),
    owner_uin: cdktf.stringToTerraform(struct!.ownerUin),
    read_phase: cdktf.numberToTerraform(struct!.readPhase),
    reader_delay: cdktf.numberToTerraform(struct!.readerDelay),
    running_cu: cdktf.numberToTerraform(struct!.runningCu),
    schedule_task_id: cdktf.stringToTerraform(struct!.scheduleTaskId),
    status: cdktf.numberToTerraform(struct!.status),
    stop_time: cdktf.stringToTerraform(struct!.stopTime),
    submit: cdktf.booleanToTerraform(struct!.submit),
    switch_resource: cdktf.numberToTerraform(struct!.switchResource),
    sync_type: cdktf.numberToTerraform(struct!.syncType),
    task_alarm_regular_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.taskAlarmRegularList),
    task_group_id: cdktf.stringToTerraform(struct!.taskGroupId),
    task_mode: cdktf.stringToTerraform(struct!.taskMode),
    update_time: cdktf.stringToTerraform(struct!.updateTime),
    workflow_id: cdktf.stringToTerraform(struct!.workflowId),
    config: cdktf.listMapper(wedataIntegrationOfflineTaskTaskInfoConfigToTerraform, true)(struct!.config),
    execute_context: cdktf.listMapper(wedataIntegrationOfflineTaskTaskInfoExecuteContextToTerraform, true)(struct!.executeContext),
    ext_config: cdktf.listMapper(wedataIntegrationOfflineTaskTaskInfoExtConfigToTerraform, true)(struct!.extConfig),
    mappings: cdktf.listMapper(wedataIntegrationOfflineTaskTaskInfoMappingsToTerraform, true)(struct!.mappings),
    offline_task_add_entity: wedataIntegrationOfflineTaskTaskInfoOfflineTaskAddEntityToTerraform(struct!.offlineTaskAddEntity),
  }
}


export function wedataIntegrationOfflineTaskTaskInfoToHclTerraform(struct?: WedataIntegrationOfflineTaskTaskInfoOutputReference | WedataIntegrationOfflineTaskTaskInfo): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    app_id: {
      value: cdktf.stringToHclTerraform(struct!.appId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    create_time: {
      value: cdktf.stringToHclTerraform(struct!.createTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    creator_uin: {
      value: cdktf.stringToHclTerraform(struct!.creatorUin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    data_proxy_url: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.dataProxyUrl),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    executor_group_name: {
      value: cdktf.stringToHclTerraform(struct!.executorGroupName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    executor_id: {
      value: cdktf.stringToHclTerraform(struct!.executorId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    has_version: {
      value: cdktf.booleanToHclTerraform(struct!.hasVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    in_long_manager_url: {
      value: cdktf.stringToHclTerraform(struct!.inLongManagerUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_long_manager_version: {
      value: cdktf.stringToHclTerraform(struct!.inLongManagerVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    in_long_stream_id: {
      value: cdktf.stringToHclTerraform(struct!.inLongStreamId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    incharge: {
      value: cdktf.stringToHclTerraform(struct!.incharge),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    input_datasource_type: {
      value: cdktf.stringToHclTerraform(struct!.inputDatasourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_version: {
      value: cdktf.numberToHclTerraform(struct!.instanceVersion),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    last_run_time: {
      value: cdktf.stringToHclTerraform(struct!.lastRunTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    locked: {
      value: cdktf.booleanToHclTerraform(struct!.locked),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    locker: {
      value: cdktf.stringToHclTerraform(struct!.locker),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    num_records_in: {
      value: cdktf.numberToHclTerraform(struct!.numRecordsIn),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_records_out: {
      value: cdktf.numberToHclTerraform(struct!.numRecordsOut),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    num_restarts: {
      value: cdktf.numberToHclTerraform(struct!.numRestarts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    operator_uin: {
      value: cdktf.stringToHclTerraform(struct!.operatorUin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    output_datasource_type: {
      value: cdktf.stringToHclTerraform(struct!.outputDatasourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    owner_uin: {
      value: cdktf.stringToHclTerraform(struct!.ownerUin),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    read_phase: {
      value: cdktf.numberToHclTerraform(struct!.readPhase),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    reader_delay: {
      value: cdktf.numberToHclTerraform(struct!.readerDelay),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    running_cu: {
      value: cdktf.numberToHclTerraform(struct!.runningCu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    schedule_task_id: {
      value: cdktf.stringToHclTerraform(struct!.scheduleTaskId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    status: {
      value: cdktf.numberToHclTerraform(struct!.status),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    stop_time: {
      value: cdktf.stringToHclTerraform(struct!.stopTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    submit: {
      value: cdktf.booleanToHclTerraform(struct!.submit),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    switch_resource: {
      value: cdktf.numberToHclTerraform(struct!.switchResource),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    sync_type: {
      value: cdktf.numberToHclTerraform(struct!.syncType),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    task_alarm_regular_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.taskAlarmRegularList),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    task_group_id: {
      value: cdktf.stringToHclTerraform(struct!.taskGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_mode: {
      value: cdktf.stringToHclTerraform(struct!.taskMode),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    update_time: {
      value: cdktf.stringToHclTerraform(struct!.updateTime),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    workflow_id: {
      value: cdktf.stringToHclTerraform(struct!.workflowId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    config: {
      value: cdktf.listMapperHcl(wedataIntegrationOfflineTaskTaskInfoConfigToHclTerraform, true)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationOfflineTaskTaskInfoConfigList",
    },
    execute_context: {
      value: cdktf.listMapperHcl(wedataIntegrationOfflineTaskTaskInfoExecuteContextToHclTerraform, true)(struct!.executeContext),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationOfflineTaskTaskInfoExecuteContextList",
    },
    ext_config: {
      value: cdktf.listMapperHcl(wedataIntegrationOfflineTaskTaskInfoExtConfigToHclTerraform, true)(struct!.extConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationOfflineTaskTaskInfoExtConfigList",
    },
    mappings: {
      value: cdktf.listMapperHcl(wedataIntegrationOfflineTaskTaskInfoMappingsToHclTerraform, true)(struct!.mappings),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationOfflineTaskTaskInfoMappingsList",
    },
    offline_task_add_entity: {
      value: wedataIntegrationOfflineTaskTaskInfoOfflineTaskAddEntityToHclTerraform(struct!.offlineTaskAddEntity),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationOfflineTaskTaskInfoOfflineTaskAddEntityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataIntegrationOfflineTaskTaskInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataIntegrationOfflineTaskTaskInfo | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._appId !== undefined) {
      hasAnyValues = true;
      internalValueResult.appId = this._appId;
    }
    if (this._createTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.createTime = this._createTime;
    }
    if (this._creatorUin !== undefined) {
      hasAnyValues = true;
      internalValueResult.creatorUin = this._creatorUin;
    }
    if (this._dataProxyUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataProxyUrl = this._dataProxyUrl;
    }
    if (this._executorGroupName !== undefined) {
      hasAnyValues = true;
      internalValueResult.executorGroupName = this._executorGroupName;
    }
    if (this._executorId !== undefined) {
      hasAnyValues = true;
      internalValueResult.executorId = this._executorId;
    }
    if (this._hasVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.hasVersion = this._hasVersion;
    }
    if (this._inLongManagerUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.inLongManagerUrl = this._inLongManagerUrl;
    }
    if (this._inLongManagerVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.inLongManagerVersion = this._inLongManagerVersion;
    }
    if (this._inLongStreamId !== undefined) {
      hasAnyValues = true;
      internalValueResult.inLongStreamId = this._inLongStreamId;
    }
    if (this._incharge !== undefined) {
      hasAnyValues = true;
      internalValueResult.incharge = this._incharge;
    }
    if (this._inputDatasourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.inputDatasourceType = this._inputDatasourceType;
    }
    if (this._instanceVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceVersion = this._instanceVersion;
    }
    if (this._lastRunTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.lastRunTime = this._lastRunTime;
    }
    if (this._locked !== undefined) {
      hasAnyValues = true;
      internalValueResult.locked = this._locked;
    }
    if (this._locker !== undefined) {
      hasAnyValues = true;
      internalValueResult.locker = this._locker;
    }
    if (this._numRecordsIn !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRecordsIn = this._numRecordsIn;
    }
    if (this._numRecordsOut !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRecordsOut = this._numRecordsOut;
    }
    if (this._numRestarts !== undefined) {
      hasAnyValues = true;
      internalValueResult.numRestarts = this._numRestarts;
    }
    if (this._operatorUin !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorUin = this._operatorUin;
    }
    if (this._outputDatasourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.outputDatasourceType = this._outputDatasourceType;
    }
    if (this._ownerUin !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerUin = this._ownerUin;
    }
    if (this._readPhase !== undefined) {
      hasAnyValues = true;
      internalValueResult.readPhase = this._readPhase;
    }
    if (this._readerDelay !== undefined) {
      hasAnyValues = true;
      internalValueResult.readerDelay = this._readerDelay;
    }
    if (this._runningCu !== undefined) {
      hasAnyValues = true;
      internalValueResult.runningCu = this._runningCu;
    }
    if (this._scheduleTaskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleTaskId = this._scheduleTaskId;
    }
    if (this._status !== undefined) {
      hasAnyValues = true;
      internalValueResult.status = this._status;
    }
    if (this._stopTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.stopTime = this._stopTime;
    }
    if (this._submit !== undefined) {
      hasAnyValues = true;
      internalValueResult.submit = this._submit;
    }
    if (this._switchResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.switchResource = this._switchResource;
    }
    if (this._syncType !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncType = this._syncType;
    }
    if (this._taskAlarmRegularList !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskAlarmRegularList = this._taskAlarmRegularList;
    }
    if (this._taskGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskGroupId = this._taskGroupId;
    }
    if (this._taskMode !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskMode = this._taskMode;
    }
    if (this._updateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateTime = this._updateTime;
    }
    if (this._workflowId !== undefined) {
      hasAnyValues = true;
      internalValueResult.workflowId = this._workflowId;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._executeContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.executeContext = this._executeContext?.internalValue;
    }
    if (this._extConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extConfig = this._extConfig?.internalValue;
    }
    if (this._mappings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappings = this._mappings?.internalValue;
    }
    if (this._offlineTaskAddEntity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.offlineTaskAddEntity = this._offlineTaskAddEntity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataIntegrationOfflineTaskTaskInfo | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._appId = undefined;
      this._createTime = undefined;
      this._creatorUin = undefined;
      this._dataProxyUrl = undefined;
      this._executorGroupName = undefined;
      this._executorId = undefined;
      this._hasVersion = undefined;
      this._inLongManagerUrl = undefined;
      this._inLongManagerVersion = undefined;
      this._inLongStreamId = undefined;
      this._incharge = undefined;
      this._inputDatasourceType = undefined;
      this._instanceVersion = undefined;
      this._lastRunTime = undefined;
      this._locked = undefined;
      this._locker = undefined;
      this._numRecordsIn = undefined;
      this._numRecordsOut = undefined;
      this._numRestarts = undefined;
      this._operatorUin = undefined;
      this._outputDatasourceType = undefined;
      this._ownerUin = undefined;
      this._readPhase = undefined;
      this._readerDelay = undefined;
      this._runningCu = undefined;
      this._scheduleTaskId = undefined;
      this._status = undefined;
      this._stopTime = undefined;
      this._submit = undefined;
      this._switchResource = undefined;
      this._syncType = undefined;
      this._taskAlarmRegularList = undefined;
      this._taskGroupId = undefined;
      this._taskMode = undefined;
      this._updateTime = undefined;
      this._workflowId = undefined;
      this._config.internalValue = undefined;
      this._executeContext.internalValue = undefined;
      this._extConfig.internalValue = undefined;
      this._mappings.internalValue = undefined;
      this._offlineTaskAddEntity.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._appId = value.appId;
      this._createTime = value.createTime;
      this._creatorUin = value.creatorUin;
      this._dataProxyUrl = value.dataProxyUrl;
      this._executorGroupName = value.executorGroupName;
      this._executorId = value.executorId;
      this._hasVersion = value.hasVersion;
      this._inLongManagerUrl = value.inLongManagerUrl;
      this._inLongManagerVersion = value.inLongManagerVersion;
      this._inLongStreamId = value.inLongStreamId;
      this._incharge = value.incharge;
      this._inputDatasourceType = value.inputDatasourceType;
      this._instanceVersion = value.instanceVersion;
      this._lastRunTime = value.lastRunTime;
      this._locked = value.locked;
      this._locker = value.locker;
      this._numRecordsIn = value.numRecordsIn;
      this._numRecordsOut = value.numRecordsOut;
      this._numRestarts = value.numRestarts;
      this._operatorUin = value.operatorUin;
      this._outputDatasourceType = value.outputDatasourceType;
      this._ownerUin = value.ownerUin;
      this._readPhase = value.readPhase;
      this._readerDelay = value.readerDelay;
      this._runningCu = value.runningCu;
      this._scheduleTaskId = value.scheduleTaskId;
      this._status = value.status;
      this._stopTime = value.stopTime;
      this._submit = value.submit;
      this._switchResource = value.switchResource;
      this._syncType = value.syncType;
      this._taskAlarmRegularList = value.taskAlarmRegularList;
      this._taskGroupId = value.taskGroupId;
      this._taskMode = value.taskMode;
      this._updateTime = value.updateTime;
      this._workflowId = value.workflowId;
      this._config.internalValue = value.config;
      this._executeContext.internalValue = value.executeContext;
      this._extConfig.internalValue = value.extConfig;
      this._mappings.internalValue = value.mappings;
      this._offlineTaskAddEntity.internalValue = value.offlineTaskAddEntity;
    }
  }

  // app_id - computed: false, optional: true, required: false
  private _appId?: string; 
  public get appId() {
    return this.getStringAttribute('app_id');
  }
  public set appId(value: string) {
    this._appId = value;
  }
  public resetAppId() {
    this._appId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get appIdInput() {
    return this._appId;
  }

  // create_time - computed: false, optional: true, required: false
  private _createTime?: string; 
  public get createTime() {
    return this.getStringAttribute('create_time');
  }
  public set createTime(value: string) {
    this._createTime = value;
  }
  public resetCreateTime() {
    this._createTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createTimeInput() {
    return this._createTime;
  }

  // creator_uin - computed: false, optional: true, required: false
  private _creatorUin?: string; 
  public get creatorUin() {
    return this.getStringAttribute('creator_uin');
  }
  public set creatorUin(value: string) {
    this._creatorUin = value;
  }
  public resetCreatorUin() {
    this._creatorUin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get creatorUinInput() {
    return this._creatorUin;
  }

  // data_proxy_url - computed: false, optional: true, required: false
  private _dataProxyUrl?: string[]; 
  public get dataProxyUrl() {
    return cdktf.Fn.tolist(this.getListAttribute('data_proxy_url'));
  }
  public set dataProxyUrl(value: string[]) {
    this._dataProxyUrl = value;
  }
  public resetDataProxyUrl() {
    this._dataProxyUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataProxyUrlInput() {
    return this._dataProxyUrl;
  }

  // executor_group_name - computed: false, optional: true, required: false
  private _executorGroupName?: string; 
  public get executorGroupName() {
    return this.getStringAttribute('executor_group_name');
  }
  public set executorGroupName(value: string) {
    this._executorGroupName = value;
  }
  public resetExecutorGroupName() {
    this._executorGroupName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorGroupNameInput() {
    return this._executorGroupName;
  }

  // executor_id - computed: false, optional: true, required: false
  private _executorId?: string; 
  public get executorId() {
    return this.getStringAttribute('executor_id');
  }
  public set executorId(value: string) {
    this._executorId = value;
  }
  public resetExecutorId() {
    this._executorId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executorIdInput() {
    return this._executorId;
  }

  // has_version - computed: false, optional: true, required: false
  private _hasVersion?: boolean | cdktf.IResolvable; 
  public get hasVersion() {
    return this.getBooleanAttribute('has_version');
  }
  public set hasVersion(value: boolean | cdktf.IResolvable) {
    this._hasVersion = value;
  }
  public resetHasVersion() {
    this._hasVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hasVersionInput() {
    return this._hasVersion;
  }

  // in_long_manager_url - computed: false, optional: true, required: false
  private _inLongManagerUrl?: string; 
  public get inLongManagerUrl() {
    return this.getStringAttribute('in_long_manager_url');
  }
  public set inLongManagerUrl(value: string) {
    this._inLongManagerUrl = value;
  }
  public resetInLongManagerUrl() {
    this._inLongManagerUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inLongManagerUrlInput() {
    return this._inLongManagerUrl;
  }

  // in_long_manager_version - computed: false, optional: true, required: false
  private _inLongManagerVersion?: string; 
  public get inLongManagerVersion() {
    return this.getStringAttribute('in_long_manager_version');
  }
  public set inLongManagerVersion(value: string) {
    this._inLongManagerVersion = value;
  }
  public resetInLongManagerVersion() {
    this._inLongManagerVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inLongManagerVersionInput() {
    return this._inLongManagerVersion;
  }

  // in_long_stream_id - computed: false, optional: true, required: false
  private _inLongStreamId?: string; 
  public get inLongStreamId() {
    return this.getStringAttribute('in_long_stream_id');
  }
  public set inLongStreamId(value: string) {
    this._inLongStreamId = value;
  }
  public resetInLongStreamId() {
    this._inLongStreamId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inLongStreamIdInput() {
    return this._inLongStreamId;
  }

  // incharge - computed: false, optional: true, required: false
  private _incharge?: string; 
  public get incharge() {
    return this.getStringAttribute('incharge');
  }
  public set incharge(value: string) {
    this._incharge = value;
  }
  public resetIncharge() {
    this._incharge = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inchargeInput() {
    return this._incharge;
  }

  // input_datasource_type - computed: false, optional: true, required: false
  private _inputDatasourceType?: string; 
  public get inputDatasourceType() {
    return this.getStringAttribute('input_datasource_type');
  }
  public set inputDatasourceType(value: string) {
    this._inputDatasourceType = value;
  }
  public resetInputDatasourceType() {
    this._inputDatasourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get inputDatasourceTypeInput() {
    return this._inputDatasourceType;
  }

  // instance_version - computed: false, optional: true, required: false
  private _instanceVersion?: number; 
  public get instanceVersion() {
    return this.getNumberAttribute('instance_version');
  }
  public set instanceVersion(value: number) {
    this._instanceVersion = value;
  }
  public resetInstanceVersion() {
    this._instanceVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceVersionInput() {
    return this._instanceVersion;
  }

  // last_run_time - computed: false, optional: true, required: false
  private _lastRunTime?: string; 
  public get lastRunTime() {
    return this.getStringAttribute('last_run_time');
  }
  public set lastRunTime(value: string) {
    this._lastRunTime = value;
  }
  public resetLastRunTime() {
    this._lastRunTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lastRunTimeInput() {
    return this._lastRunTime;
  }

  // locked - computed: false, optional: true, required: false
  private _locked?: boolean | cdktf.IResolvable; 
  public get locked() {
    return this.getBooleanAttribute('locked');
  }
  public set locked(value: boolean | cdktf.IResolvable) {
    this._locked = value;
  }
  public resetLocked() {
    this._locked = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockedInput() {
    return this._locked;
  }

  // locker - computed: false, optional: true, required: false
  private _locker?: string; 
  public get locker() {
    return this.getStringAttribute('locker');
  }
  public set locker(value: string) {
    this._locker = value;
  }
  public resetLocker() {
    this._locker = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get lockerInput() {
    return this._locker;
  }

  // num_records_in - computed: false, optional: true, required: false
  private _numRecordsIn?: number; 
  public get numRecordsIn() {
    return this.getNumberAttribute('num_records_in');
  }
  public set numRecordsIn(value: number) {
    this._numRecordsIn = value;
  }
  public resetNumRecordsIn() {
    this._numRecordsIn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRecordsInInput() {
    return this._numRecordsIn;
  }

  // num_records_out - computed: false, optional: true, required: false
  private _numRecordsOut?: number; 
  public get numRecordsOut() {
    return this.getNumberAttribute('num_records_out');
  }
  public set numRecordsOut(value: number) {
    this._numRecordsOut = value;
  }
  public resetNumRecordsOut() {
    this._numRecordsOut = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRecordsOutInput() {
    return this._numRecordsOut;
  }

  // num_restarts - computed: false, optional: true, required: false
  private _numRestarts?: number; 
  public get numRestarts() {
    return this.getNumberAttribute('num_restarts');
  }
  public set numRestarts(value: number) {
    this._numRestarts = value;
  }
  public resetNumRestarts() {
    this._numRestarts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get numRestartsInput() {
    return this._numRestarts;
  }

  // operator_uin - computed: false, optional: true, required: false
  private _operatorUin?: string; 
  public get operatorUin() {
    return this.getStringAttribute('operator_uin');
  }
  public set operatorUin(value: string) {
    this._operatorUin = value;
  }
  public resetOperatorUin() {
    this._operatorUin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorUinInput() {
    return this._operatorUin;
  }

  // output_datasource_type - computed: false, optional: true, required: false
  private _outputDatasourceType?: string; 
  public get outputDatasourceType() {
    return this.getStringAttribute('output_datasource_type');
  }
  public set outputDatasourceType(value: string) {
    this._outputDatasourceType = value;
  }
  public resetOutputDatasourceType() {
    this._outputDatasourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get outputDatasourceTypeInput() {
    return this._outputDatasourceType;
  }

  // owner_uin - computed: false, optional: true, required: false
  private _ownerUin?: string; 
  public get ownerUin() {
    return this.getStringAttribute('owner_uin');
  }
  public set ownerUin(value: string) {
    this._ownerUin = value;
  }
  public resetOwnerUin() {
    this._ownerUin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerUinInput() {
    return this._ownerUin;
  }

  // read_phase - computed: false, optional: true, required: false
  private _readPhase?: number; 
  public get readPhase() {
    return this.getNumberAttribute('read_phase');
  }
  public set readPhase(value: number) {
    this._readPhase = value;
  }
  public resetReadPhase() {
    this._readPhase = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readPhaseInput() {
    return this._readPhase;
  }

  // reader_delay - computed: false, optional: true, required: false
  private _readerDelay?: number; 
  public get readerDelay() {
    return this.getNumberAttribute('reader_delay');
  }
  public set readerDelay(value: number) {
    this._readerDelay = value;
  }
  public resetReaderDelay() {
    this._readerDelay = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readerDelayInput() {
    return this._readerDelay;
  }

  // running_cu - computed: false, optional: true, required: false
  private _runningCu?: number; 
  public get runningCu() {
    return this.getNumberAttribute('running_cu');
  }
  public set runningCu(value: number) {
    this._runningCu = value;
  }
  public resetRunningCu() {
    this._runningCu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get runningCuInput() {
    return this._runningCu;
  }

  // schedule_task_id - computed: false, optional: true, required: false
  private _scheduleTaskId?: string; 
  public get scheduleTaskId() {
    return this.getStringAttribute('schedule_task_id');
  }
  public set scheduleTaskId(value: string) {
    this._scheduleTaskId = value;
  }
  public resetScheduleTaskId() {
    this._scheduleTaskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleTaskIdInput() {
    return this._scheduleTaskId;
  }

  // status - computed: false, optional: true, required: false
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

  // stop_time - computed: false, optional: true, required: false
  private _stopTime?: string; 
  public get stopTime() {
    return this.getStringAttribute('stop_time');
  }
  public set stopTime(value: string) {
    this._stopTime = value;
  }
  public resetStopTime() {
    this._stopTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stopTimeInput() {
    return this._stopTime;
  }

  // submit - computed: false, optional: true, required: false
  private _submit?: boolean | cdktf.IResolvable; 
  public get submit() {
    return this.getBooleanAttribute('submit');
  }
  public set submit(value: boolean | cdktf.IResolvable) {
    this._submit = value;
  }
  public resetSubmit() {
    this._submit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get submitInput() {
    return this._submit;
  }

  // switch_resource - computed: false, optional: true, required: false
  private _switchResource?: number; 
  public get switchResource() {
    return this.getNumberAttribute('switch_resource');
  }
  public set switchResource(value: number) {
    this._switchResource = value;
  }
  public resetSwitchResource() {
    this._switchResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get switchResourceInput() {
    return this._switchResource;
  }

  // sync_type - computed: false, optional: true, required: false
  private _syncType?: number; 
  public get syncType() {
    return this.getNumberAttribute('sync_type');
  }
  public set syncType(value: number) {
    this._syncType = value;
  }
  public resetSyncType() {
    this._syncType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTypeInput() {
    return this._syncType;
  }

  // task_alarm_regular_list - computed: false, optional: true, required: false
  private _taskAlarmRegularList?: string[]; 
  public get taskAlarmRegularList() {
    return cdktf.Fn.tolist(this.getListAttribute('task_alarm_regular_list'));
  }
  public set taskAlarmRegularList(value: string[]) {
    this._taskAlarmRegularList = value;
  }
  public resetTaskAlarmRegularList() {
    this._taskAlarmRegularList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskAlarmRegularListInput() {
    return this._taskAlarmRegularList;
  }

  // task_group_id - computed: false, optional: true, required: false
  private _taskGroupId?: string; 
  public get taskGroupId() {
    return this.getStringAttribute('task_group_id');
  }
  public set taskGroupId(value: string) {
    this._taskGroupId = value;
  }
  public resetTaskGroupId() {
    this._taskGroupId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskGroupIdInput() {
    return this._taskGroupId;
  }

  // task_mode - computed: false, optional: true, required: false
  private _taskMode?: string; 
  public get taskMode() {
    return this.getStringAttribute('task_mode');
  }
  public set taskMode(value: string) {
    this._taskMode = value;
  }
  public resetTaskMode() {
    this._taskMode = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskModeInput() {
    return this._taskMode;
  }

  // update_time - computed: false, optional: true, required: false
  private _updateTime?: string; 
  public get updateTime() {
    return this.getStringAttribute('update_time');
  }
  public set updateTime(value: string) {
    this._updateTime = value;
  }
  public resetUpdateTime() {
    this._updateTime = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateTimeInput() {
    return this._updateTime;
  }

  // workflow_id - computed: false, optional: true, required: false
  private _workflowId?: string; 
  public get workflowId() {
    return this.getStringAttribute('workflow_id');
  }
  public set workflowId(value: string) {
    this._workflowId = value;
  }
  public resetWorkflowId() {
    this._workflowId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get workflowIdInput() {
    return this._workflowId;
  }

  // config - computed: false, optional: true, required: false
  private _config = new WedataIntegrationOfflineTaskTaskInfoConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: WedataIntegrationOfflineTaskTaskInfoConfig[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // execute_context - computed: false, optional: true, required: false
  private _executeContext = new WedataIntegrationOfflineTaskTaskInfoExecuteContextList(this, "execute_context", false);
  public get executeContext() {
    return this._executeContext;
  }
  public putExecuteContext(value: WedataIntegrationOfflineTaskTaskInfoExecuteContext[] | cdktf.IResolvable) {
    this._executeContext.internalValue = value;
  }
  public resetExecuteContext() {
    this._executeContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get executeContextInput() {
    return this._executeContext.internalValue;
  }

  // ext_config - computed: false, optional: true, required: false
  private _extConfig = new WedataIntegrationOfflineTaskTaskInfoExtConfigList(this, "ext_config", false);
  public get extConfig() {
    return this._extConfig;
  }
  public putExtConfig(value: WedataIntegrationOfflineTaskTaskInfoExtConfig[] | cdktf.IResolvable) {
    this._extConfig.internalValue = value;
  }
  public resetExtConfig() {
    this._extConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extConfigInput() {
    return this._extConfig.internalValue;
  }

  // mappings - computed: false, optional: true, required: false
  private _mappings = new WedataIntegrationOfflineTaskTaskInfoMappingsList(this, "mappings", false);
  public get mappings() {
    return this._mappings;
  }
  public putMappings(value: WedataIntegrationOfflineTaskTaskInfoMappings[] | cdktf.IResolvable) {
    this._mappings.internalValue = value;
  }
  public resetMappings() {
    this._mappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings.internalValue;
  }

  // offline_task_add_entity - computed: false, optional: true, required: false
  private _offlineTaskAddEntity = new WedataIntegrationOfflineTaskTaskInfoOfflineTaskAddEntityOutputReference(this, "offline_task_add_entity");
  public get offlineTaskAddEntity() {
    return this._offlineTaskAddEntity;
  }
  public putOfflineTaskAddEntity(value: WedataIntegrationOfflineTaskTaskInfoOfflineTaskAddEntity) {
    this._offlineTaskAddEntity.internalValue = value;
  }
  public resetOfflineTaskAddEntity() {
    this._offlineTaskAddEntity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get offlineTaskAddEntityInput() {
    return this._offlineTaskAddEntity.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task tencentcloud_wedata_integration_offline_task}
*/
export class WedataIntegrationOfflineTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_integration_offline_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WedataIntegrationOfflineTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WedataIntegrationOfflineTask to import
  * @param importFromId The id of the existing WedataIntegrationOfflineTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WedataIntegrationOfflineTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_integration_offline_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.44/docs/resources/wedata_integration_offline_task tencentcloud_wedata_integration_offline_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WedataIntegrationOfflineTaskConfig
  */
  public constructor(scope: Construct, id: string, config: WedataIntegrationOfflineTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_integration_offline_task',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.44',
        providerVersionConstraint: '1.82.44'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._cycleStep = config.cycleStep;
    this._delayTime = config.delayTime;
    this._endTime = config.endTime;
    this._id = config.id;
    this._notes = config.notes;
    this._projectId = config.projectId;
    this._startTime = config.startTime;
    this._taskAction = config.taskAction;
    this._taskMode = config.taskMode;
    this._taskName = config.taskName;
    this._taskInfo.internalValue = config.taskInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // cycle_step - computed: false, optional: false, required: true
  private _cycleStep?: number; 
  public get cycleStep() {
    return this.getNumberAttribute('cycle_step');
  }
  public set cycleStep(value: number) {
    this._cycleStep = value;
  }
  // Temporarily expose input value. Use with caution.
  public get cycleStepInput() {
    return this._cycleStep;
  }

  // delay_time - computed: false, optional: false, required: true
  private _delayTime?: number; 
  public get delayTime() {
    return this.getNumberAttribute('delay_time');
  }
  public set delayTime(value: number) {
    this._delayTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get delayTimeInput() {
    return this._delayTime;
  }

  // end_time - computed: false, optional: false, required: true
  private _endTime?: string; 
  public get endTime() {
    return this.getStringAttribute('end_time');
  }
  public set endTime(value: string) {
    this._endTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get endTimeInput() {
    return this._endTime;
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

  // notes - computed: false, optional: false, required: true
  private _notes?: string; 
  public get notes() {
    return this.getStringAttribute('notes');
  }
  public set notes(value: string) {
    this._notes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get notesInput() {
    return this._notes;
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

  // start_time - computed: false, optional: false, required: true
  private _startTime?: string; 
  public get startTime() {
    return this.getStringAttribute('start_time');
  }
  public set startTime(value: string) {
    this._startTime = value;
  }
  // Temporarily expose input value. Use with caution.
  public get startTimeInput() {
    return this._startTime;
  }

  // task_action - computed: false, optional: false, required: true
  private _taskAction?: string; 
  public get taskAction() {
    return this.getStringAttribute('task_action');
  }
  public set taskAction(value: string) {
    this._taskAction = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskActionInput() {
    return this._taskAction;
  }

  // task_id - computed: true, optional: false, required: false
  public get taskId() {
    return this.getStringAttribute('task_id');
  }

  // task_mode - computed: false, optional: false, required: true
  private _taskMode?: string; 
  public get taskMode() {
    return this.getStringAttribute('task_mode');
  }
  public set taskMode(value: string) {
    this._taskMode = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskModeInput() {
    return this._taskMode;
  }

  // task_name - computed: false, optional: false, required: true
  private _taskName?: string; 
  public get taskName() {
    return this.getStringAttribute('task_name');
  }
  public set taskName(value: string) {
    this._taskName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskNameInput() {
    return this._taskName;
  }

  // task_info - computed: false, optional: false, required: true
  private _taskInfo = new WedataIntegrationOfflineTaskTaskInfoOutputReference(this, "task_info");
  public get taskInfo() {
    return this._taskInfo;
  }
  public putTaskInfo(value: WedataIntegrationOfflineTaskTaskInfo) {
    this._taskInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get taskInfoInput() {
    return this._taskInfo.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      cycle_step: cdktf.numberToTerraform(this._cycleStep),
      delay_time: cdktf.numberToTerraform(this._delayTime),
      end_time: cdktf.stringToTerraform(this._endTime),
      id: cdktf.stringToTerraform(this._id),
      notes: cdktf.stringToTerraform(this._notes),
      project_id: cdktf.stringToTerraform(this._projectId),
      start_time: cdktf.stringToTerraform(this._startTime),
      task_action: cdktf.stringToTerraform(this._taskAction),
      task_mode: cdktf.stringToTerraform(this._taskMode),
      task_name: cdktf.stringToTerraform(this._taskName),
      task_info: wedataIntegrationOfflineTaskTaskInfoToTerraform(this._taskInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      cycle_step: {
        value: cdktf.numberToHclTerraform(this._cycleStep),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      delay_time: {
        value: cdktf.numberToHclTerraform(this._delayTime),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      end_time: {
        value: cdktf.stringToHclTerraform(this._endTime),
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
      notes: {
        value: cdktf.stringToHclTerraform(this._notes),
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
      start_time: {
        value: cdktf.stringToHclTerraform(this._startTime),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_action: {
        value: cdktf.stringToHclTerraform(this._taskAction),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_mode: {
        value: cdktf.stringToHclTerraform(this._taskMode),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_name: {
        value: cdktf.stringToHclTerraform(this._taskName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      task_info: {
        value: wedataIntegrationOfflineTaskTaskInfoToHclTerraform(this._taskInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WedataIntegrationOfflineTaskTaskInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
