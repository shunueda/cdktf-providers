// https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WedataIntegrationRealtimeTaskConfig extends cdktf.TerraformMetaArguments {
  /**
  * Description information.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#description WedataIntegrationRealtimeTask#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#id WedataIntegrationRealtimeTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#project_id WedataIntegrationRealtimeTask#project_id}
  */
  readonly projectId: string;
  /**
  * Synchronization type: 1. Whole database synchronization, 2. Single table synchronization.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#sync_type WedataIntegrationRealtimeTask#sync_type}
  */
  readonly syncType: number;
  /**
  * Task display mode, 0: canvas mode, 1: form mode.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#task_mode WedataIntegrationRealtimeTask#task_mode}
  */
  readonly taskMode: string;
  /**
  * Task name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#task_name WedataIntegrationRealtimeTask#task_name}
  */
  readonly taskName: string;
  /**
  * task_info block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#task_info WedataIntegrationRealtimeTask#task_info}
  */
  readonly taskInfo: WedataIntegrationRealtimeTaskTaskInfo;
}
export interface WedataIntegrationRealtimeTaskTaskInfoConfig {
  /**
  * Configuration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#name WedataIntegrationRealtimeTask#name}
  */
  readonly name?: string;
  /**
  * Configuration value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#value WedataIntegrationRealtimeTask#value}
  */
  readonly value?: string;
}

export function wedataIntegrationRealtimeTaskTaskInfoConfigToTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wedataIntegrationRealtimeTaskTaskInfoConfigToHclTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoConfig | cdktf.IResolvable): any {
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

export class WedataIntegrationRealtimeTaskTaskInfoConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationRealtimeTaskTaskInfoConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WedataIntegrationRealtimeTaskTaskInfoConfig | cdktf.IResolvable | undefined) {
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

export class WedataIntegrationRealtimeTaskTaskInfoConfigList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationRealtimeTaskTaskInfoConfig[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationRealtimeTaskTaskInfoConfigOutputReference {
    return new WedataIntegrationRealtimeTaskTaskInfoConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationRealtimeTaskTaskInfoExecuteContext {
  /**
  * Configuration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#name WedataIntegrationRealtimeTask#name}
  */
  readonly name?: string;
  /**
  * Configuration value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#value WedataIntegrationRealtimeTask#value}
  */
  readonly value?: string;
}

export function wedataIntegrationRealtimeTaskTaskInfoExecuteContextToTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoExecuteContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wedataIntegrationRealtimeTaskTaskInfoExecuteContextToHclTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoExecuteContext | cdktf.IResolvable): any {
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

export class WedataIntegrationRealtimeTaskTaskInfoExecuteContextOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationRealtimeTaskTaskInfoExecuteContext | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WedataIntegrationRealtimeTaskTaskInfoExecuteContext | cdktf.IResolvable | undefined) {
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

export class WedataIntegrationRealtimeTaskTaskInfoExecuteContextList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationRealtimeTaskTaskInfoExecuteContext[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationRealtimeTaskTaskInfoExecuteContextOutputReference {
    return new WedataIntegrationRealtimeTaskTaskInfoExecuteContextOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationRealtimeTaskTaskInfoExtConfig {
  /**
  * Configuration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#name WedataIntegrationRealtimeTask#name}
  */
  readonly name?: string;
  /**
  * Configuration value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#value WedataIntegrationRealtimeTask#value}
  */
  readonly value?: string;
}

export function wedataIntegrationRealtimeTaskTaskInfoExtConfigToTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoExtConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wedataIntegrationRealtimeTaskTaskInfoExtConfigToHclTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoExtConfig | cdktf.IResolvable): any {
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

export class WedataIntegrationRealtimeTaskTaskInfoExtConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationRealtimeTaskTaskInfoExtConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WedataIntegrationRealtimeTaskTaskInfoExtConfig | cdktf.IResolvable | undefined) {
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

export class WedataIntegrationRealtimeTaskTaskInfoExtConfigList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationRealtimeTaskTaskInfoExtConfig[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationRealtimeTaskTaskInfoExtConfigOutputReference {
    return new WedataIntegrationRealtimeTaskTaskInfoExtConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationRealtimeTaskTaskInfoMappingsExtConfig {
  /**
  * Configuration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#name WedataIntegrationRealtimeTask#name}
  */
  readonly name?: string;
  /**
  * Configuration value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#value WedataIntegrationRealtimeTask#value}
  */
  readonly value?: string;
}

export function wedataIntegrationRealtimeTaskTaskInfoMappingsExtConfigToTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoMappingsExtConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wedataIntegrationRealtimeTaskTaskInfoMappingsExtConfigToHclTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoMappingsExtConfig | cdktf.IResolvable): any {
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

export class WedataIntegrationRealtimeTaskTaskInfoMappingsExtConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationRealtimeTaskTaskInfoMappingsExtConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WedataIntegrationRealtimeTaskTaskInfoMappingsExtConfig | cdktf.IResolvable | undefined) {
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

export class WedataIntegrationRealtimeTaskTaskInfoMappingsExtConfigList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationRealtimeTaskTaskInfoMappingsExtConfig[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationRealtimeTaskTaskInfoMappingsExtConfigOutputReference {
    return new WedataIntegrationRealtimeTaskTaskInfoMappingsExtConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationRealtimeTaskTaskInfoMappingsSchemaMappings {
  /**
  * Schema ID from sink node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#sink_schema_id WedataIntegrationRealtimeTask#sink_schema_id}
  */
  readonly sinkSchemaId: string;
  /**
  * Schema ID from source node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#source_schema_id WedataIntegrationRealtimeTask#source_schema_id}
  */
  readonly sourceSchemaId: string;
}

export function wedataIntegrationRealtimeTaskTaskInfoMappingsSchemaMappingsToTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoMappingsSchemaMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sink_schema_id: cdktf.stringToTerraform(struct!.sinkSchemaId),
    source_schema_id: cdktf.stringToTerraform(struct!.sourceSchemaId),
  }
}


export function wedataIntegrationRealtimeTaskTaskInfoMappingsSchemaMappingsToHclTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoMappingsSchemaMappings | cdktf.IResolvable): any {
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

export class WedataIntegrationRealtimeTaskTaskInfoMappingsSchemaMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationRealtimeTaskTaskInfoMappingsSchemaMappings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WedataIntegrationRealtimeTaskTaskInfoMappingsSchemaMappings | cdktf.IResolvable | undefined) {
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

export class WedataIntegrationRealtimeTaskTaskInfoMappingsSchemaMappingsList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationRealtimeTaskTaskInfoMappingsSchemaMappings[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationRealtimeTaskTaskInfoMappingsSchemaMappingsOutputReference {
    return new WedataIntegrationRealtimeTaskTaskInfoMappingsSchemaMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaProperties {
  /**
  * Attributes name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#name WedataIntegrationRealtimeTask#name}
  */
  readonly name?: string;
  /**
  * Attributes value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#value WedataIntegrationRealtimeTask#value}
  */
  readonly value?: string;
}

export function wedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaPropertiesToTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaPropertiesToHclTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaProperties | cdktf.IResolvable): any {
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

export class WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaProperties | cdktf.IResolvable | undefined) {
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

export class WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaPropertiesList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaProperties[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaPropertiesOutputReference {
    return new WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchema {
  /**
  * Schema alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#alias WedataIntegrationRealtimeTask#alias}
  */
  readonly alias?: string;
  /**
  * Schema comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#comment WedataIntegrationRealtimeTask#comment}
  */
  readonly comment?: string;
  /**
  * Schema ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#id WedataIntegrationRealtimeTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#name WedataIntegrationRealtimeTask#name}
  */
  readonly name: string;
  /**
  * Schema type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#type WedataIntegrationRealtimeTask#type}
  */
  readonly type: string;
  /**
  * Schema value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#value WedataIntegrationRealtimeTask#value}
  */
  readonly value?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#properties WedataIntegrationRealtimeTask#properties}
  */
  readonly properties?: WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaProperties[] | cdktf.IResolvable;
}

export function wedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaToTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchema | cdktf.IResolvable): any {
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
    properties: cdktf.listMapper(wedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaPropertiesToTerraform, true)(struct!.properties),
  }
}


export function wedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaToHclTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchema | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(wedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchema | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchema | cdktf.IResolvable | undefined) {
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
  private _properties = new WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaProperties[] | cdktf.IResolvable) {
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

export class WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchema[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaOutputReference {
    return new WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationRealtimeTaskTaskInfoMappings {
  /**
  * Sink node ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#sink_id WedataIntegrationRealtimeTask#sink_id}
  */
  readonly sinkId?: string;
  /**
  * Source node ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#source_id WedataIntegrationRealtimeTask#source_id}
  */
  readonly sourceId?: string;
  /**
  * ext_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#ext_config WedataIntegrationRealtimeTask#ext_config}
  */
  readonly extConfig?: WedataIntegrationRealtimeTaskTaskInfoMappingsExtConfig[] | cdktf.IResolvable;
  /**
  * schema_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#schema_mappings WedataIntegrationRealtimeTask#schema_mappings}
  */
  readonly schemaMappings?: WedataIntegrationRealtimeTaskTaskInfoMappingsSchemaMappings[] | cdktf.IResolvable;
  /**
  * source_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#source_schema WedataIntegrationRealtimeTask#source_schema}
  */
  readonly sourceSchema?: WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchema[] | cdktf.IResolvable;
}

export function wedataIntegrationRealtimeTaskTaskInfoMappingsToTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sink_id: cdktf.stringToTerraform(struct!.sinkId),
    source_id: cdktf.stringToTerraform(struct!.sourceId),
    ext_config: cdktf.listMapper(wedataIntegrationRealtimeTaskTaskInfoMappingsExtConfigToTerraform, true)(struct!.extConfig),
    schema_mappings: cdktf.listMapper(wedataIntegrationRealtimeTaskTaskInfoMappingsSchemaMappingsToTerraform, true)(struct!.schemaMappings),
    source_schema: cdktf.listMapper(wedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaToTerraform, true)(struct!.sourceSchema),
  }
}


export function wedataIntegrationRealtimeTaskTaskInfoMappingsToHclTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoMappings | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(wedataIntegrationRealtimeTaskTaskInfoMappingsExtConfigToHclTerraform, true)(struct!.extConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationRealtimeTaskTaskInfoMappingsExtConfigList",
    },
    schema_mappings: {
      value: cdktf.listMapperHcl(wedataIntegrationRealtimeTaskTaskInfoMappingsSchemaMappingsToHclTerraform, true)(struct!.schemaMappings),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationRealtimeTaskTaskInfoMappingsSchemaMappingsList",
    },
    source_schema: {
      value: cdktf.listMapperHcl(wedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaToHclTerraform, true)(struct!.sourceSchema),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataIntegrationRealtimeTaskTaskInfoMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationRealtimeTaskTaskInfoMappings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WedataIntegrationRealtimeTaskTaskInfoMappings | cdktf.IResolvable | undefined) {
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
  private _extConfig = new WedataIntegrationRealtimeTaskTaskInfoMappingsExtConfigList(this, "ext_config", false);
  public get extConfig() {
    return this._extConfig;
  }
  public putExtConfig(value: WedataIntegrationRealtimeTaskTaskInfoMappingsExtConfig[] | cdktf.IResolvable) {
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
  private _schemaMappings = new WedataIntegrationRealtimeTaskTaskInfoMappingsSchemaMappingsList(this, "schema_mappings", false);
  public get schemaMappings() {
    return this._schemaMappings;
  }
  public putSchemaMappings(value: WedataIntegrationRealtimeTaskTaskInfoMappingsSchemaMappings[] | cdktf.IResolvable) {
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
  private _sourceSchema = new WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchemaList(this, "source_schema", false);
  public get sourceSchema() {
    return this._sourceSchema;
  }
  public putSourceSchema(value: WedataIntegrationRealtimeTaskTaskInfoMappingsSourceSchema[] | cdktf.IResolvable) {
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

export class WedataIntegrationRealtimeTaskTaskInfoMappingsList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationRealtimeTaskTaskInfoMappings[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationRealtimeTaskTaskInfoMappingsOutputReference {
    return new WedataIntegrationRealtimeTaskTaskInfoMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationRealtimeTaskTaskInfoNodesConfig {
  /**
  * Configuration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#name WedataIntegrationRealtimeTask#name}
  */
  readonly name?: string;
  /**
  * Configuration value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#value WedataIntegrationRealtimeTask#value}
  */
  readonly value?: string;
}

export function wedataIntegrationRealtimeTaskTaskInfoNodesConfigToTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoNodesConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wedataIntegrationRealtimeTaskTaskInfoNodesConfigToHclTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoNodesConfig | cdktf.IResolvable): any {
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

export class WedataIntegrationRealtimeTaskTaskInfoNodesConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationRealtimeTaskTaskInfoNodesConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WedataIntegrationRealtimeTaskTaskInfoNodesConfig | cdktf.IResolvable | undefined) {
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

export class WedataIntegrationRealtimeTaskTaskInfoNodesConfigList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationRealtimeTaskTaskInfoNodesConfig[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationRealtimeTaskTaskInfoNodesConfigOutputReference {
    return new WedataIntegrationRealtimeTaskTaskInfoNodesConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationRealtimeTaskTaskInfoNodesExtConfig {
  /**
  * Configuration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#name WedataIntegrationRealtimeTask#name}
  */
  readonly name?: string;
  /**
  * Configuration value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#value WedataIntegrationRealtimeTask#value}
  */
  readonly value?: string;
}

export function wedataIntegrationRealtimeTaskTaskInfoNodesExtConfigToTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoNodesExtConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wedataIntegrationRealtimeTaskTaskInfoNodesExtConfigToHclTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoNodesExtConfig | cdktf.IResolvable): any {
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

export class WedataIntegrationRealtimeTaskTaskInfoNodesExtConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationRealtimeTaskTaskInfoNodesExtConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WedataIntegrationRealtimeTaskTaskInfoNodesExtConfig | cdktf.IResolvable | undefined) {
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

export class WedataIntegrationRealtimeTaskTaskInfoNodesExtConfigList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationRealtimeTaskTaskInfoNodesExtConfig[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationRealtimeTaskTaskInfoNodesExtConfigOutputReference {
    return new WedataIntegrationRealtimeTaskTaskInfoNodesExtConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingExtConfig {
  /**
  * Configuration name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#name WedataIntegrationRealtimeTask#name}
  */
  readonly name?: string;
  /**
  * Configuration value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#value WedataIntegrationRealtimeTask#value}
  */
  readonly value?: string;
}

export function wedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingExtConfigToTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingExtConfig | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingExtConfigToHclTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingExtConfig | cdktf.IResolvable): any {
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

export class WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingExtConfigOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingExtConfig | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingExtConfig | cdktf.IResolvable | undefined) {
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

export class WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingExtConfigList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingExtConfig[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingExtConfigOutputReference {
    return new WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingExtConfigOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSchemaMappings {
  /**
  * Schema ID from sink node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#sink_schema_id WedataIntegrationRealtimeTask#sink_schema_id}
  */
  readonly sinkSchemaId: string;
  /**
  * Schema ID from source node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#source_schema_id WedataIntegrationRealtimeTask#source_schema_id}
  */
  readonly sourceSchemaId: string;
}

export function wedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSchemaMappingsToTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSchemaMappings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sink_schema_id: cdktf.stringToTerraform(struct!.sinkSchemaId),
    source_schema_id: cdktf.stringToTerraform(struct!.sourceSchemaId),
  }
}


export function wedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSchemaMappingsToHclTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSchemaMappings | cdktf.IResolvable): any {
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

export class WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSchemaMappingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSchemaMappings | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSchemaMappings | cdktf.IResolvable | undefined) {
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

export class WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSchemaMappingsList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSchemaMappings[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSchemaMappingsOutputReference {
    return new WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSchemaMappingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaProperties {
  /**
  * Attributes name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#name WedataIntegrationRealtimeTask#name}
  */
  readonly name?: string;
  /**
  * Attributes value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#value WedataIntegrationRealtimeTask#value}
  */
  readonly value?: string;
}

export function wedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaPropertiesToTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaPropertiesToHclTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaProperties | cdktf.IResolvable): any {
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

export class WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaProperties | cdktf.IResolvable | undefined) {
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

export class WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaPropertiesList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaProperties[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaPropertiesOutputReference {
    return new WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchema {
  /**
  * Schema alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#alias WedataIntegrationRealtimeTask#alias}
  */
  readonly alias?: string;
  /**
  * Schema comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#comment WedataIntegrationRealtimeTask#comment}
  */
  readonly comment?: string;
  /**
  * Schema ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#id WedataIntegrationRealtimeTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#name WedataIntegrationRealtimeTask#name}
  */
  readonly name: string;
  /**
  * Schema type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#type WedataIntegrationRealtimeTask#type}
  */
  readonly type: string;
  /**
  * Schema value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#value WedataIntegrationRealtimeTask#value}
  */
  readonly value?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#properties WedataIntegrationRealtimeTask#properties}
  */
  readonly properties?: WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaProperties[] | cdktf.IResolvable;
}

export function wedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaToTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchema | cdktf.IResolvable): any {
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
    properties: cdktf.listMapper(wedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaPropertiesToTerraform, true)(struct!.properties),
  }
}


export function wedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaToHclTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchema | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(wedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchema | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchema | cdktf.IResolvable | undefined) {
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
  private _properties = new WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaProperties[] | cdktf.IResolvable) {
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

export class WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchema[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaOutputReference {
    return new WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationRealtimeTaskTaskInfoNodesNodeMapping {
  /**
  * Sink node ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#sink_id WedataIntegrationRealtimeTask#sink_id}
  */
  readonly sinkId?: string;
  /**
  * Source node ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#source_id WedataIntegrationRealtimeTask#source_id}
  */
  readonly sourceId?: string;
  /**
  * ext_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#ext_config WedataIntegrationRealtimeTask#ext_config}
  */
  readonly extConfig?: WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingExtConfig[] | cdktf.IResolvable;
  /**
  * schema_mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#schema_mappings WedataIntegrationRealtimeTask#schema_mappings}
  */
  readonly schemaMappings?: WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSchemaMappings[] | cdktf.IResolvable;
  /**
  * source_schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#source_schema WedataIntegrationRealtimeTask#source_schema}
  */
  readonly sourceSchema?: WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchema[] | cdktf.IResolvable;
}

export function wedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingToTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingOutputReference | WedataIntegrationRealtimeTaskTaskInfoNodesNodeMapping): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    sink_id: cdktf.stringToTerraform(struct!.sinkId),
    source_id: cdktf.stringToTerraform(struct!.sourceId),
    ext_config: cdktf.listMapper(wedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingExtConfigToTerraform, true)(struct!.extConfig),
    schema_mappings: cdktf.listMapper(wedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSchemaMappingsToTerraform, true)(struct!.schemaMappings),
    source_schema: cdktf.listMapper(wedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaToTerraform, true)(struct!.sourceSchema),
  }
}


export function wedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingToHclTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingOutputReference | WedataIntegrationRealtimeTaskTaskInfoNodesNodeMapping): any {
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
      value: cdktf.listMapperHcl(wedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingExtConfigToHclTerraform, true)(struct!.extConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingExtConfigList",
    },
    schema_mappings: {
      value: cdktf.listMapperHcl(wedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSchemaMappingsToHclTerraform, true)(struct!.schemaMappings),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSchemaMappingsList",
    },
    source_schema: {
      value: cdktf.listMapperHcl(wedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaToHclTerraform, true)(struct!.sourceSchema),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataIntegrationRealtimeTaskTaskInfoNodesNodeMapping | undefined {
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

  public set internalValue(value: WedataIntegrationRealtimeTaskTaskInfoNodesNodeMapping | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._sinkId = undefined;
      this._sourceId = undefined;
      this._extConfig.internalValue = undefined;
      this._schemaMappings.internalValue = undefined;
      this._sourceSchema.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
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
  private _extConfig = new WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingExtConfigList(this, "ext_config", false);
  public get extConfig() {
    return this._extConfig;
  }
  public putExtConfig(value: WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingExtConfig[] | cdktf.IResolvable) {
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
  private _schemaMappings = new WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSchemaMappingsList(this, "schema_mappings", false);
  public get schemaMappings() {
    return this._schemaMappings;
  }
  public putSchemaMappings(value: WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSchemaMappings[] | cdktf.IResolvable) {
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
  private _sourceSchema = new WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchemaList(this, "source_schema", false);
  public get sourceSchema() {
    return this._sourceSchema;
  }
  public putSourceSchema(value: WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingSourceSchema[] | cdktf.IResolvable) {
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
export interface WedataIntegrationRealtimeTaskTaskInfoNodesSchemaProperties {
  /**
  * Attributes name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#name WedataIntegrationRealtimeTask#name}
  */
  readonly name?: string;
  /**
  * Attributes value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#value WedataIntegrationRealtimeTask#value}
  */
  readonly value?: string;
}

export function wedataIntegrationRealtimeTaskTaskInfoNodesSchemaPropertiesToTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoNodesSchemaProperties | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function wedataIntegrationRealtimeTaskTaskInfoNodesSchemaPropertiesToHclTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoNodesSchemaProperties | cdktf.IResolvable): any {
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

export class WedataIntegrationRealtimeTaskTaskInfoNodesSchemaPropertiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationRealtimeTaskTaskInfoNodesSchemaProperties | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WedataIntegrationRealtimeTaskTaskInfoNodesSchemaProperties | cdktf.IResolvable | undefined) {
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

export class WedataIntegrationRealtimeTaskTaskInfoNodesSchemaPropertiesList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationRealtimeTaskTaskInfoNodesSchemaProperties[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationRealtimeTaskTaskInfoNodesSchemaPropertiesOutputReference {
    return new WedataIntegrationRealtimeTaskTaskInfoNodesSchemaPropertiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationRealtimeTaskTaskInfoNodesSchema {
  /**
  * Schema alias.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#alias WedataIntegrationRealtimeTask#alias}
  */
  readonly alias?: string;
  /**
  * Schema comment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#comment WedataIntegrationRealtimeTask#comment}
  */
  readonly comment?: string;
  /**
  * Schema ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#id WedataIntegrationRealtimeTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Schema name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#name WedataIntegrationRealtimeTask#name}
  */
  readonly name: string;
  /**
  * Schema type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#type WedataIntegrationRealtimeTask#type}
  */
  readonly type: string;
  /**
  * Schema value.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#value WedataIntegrationRealtimeTask#value}
  */
  readonly value?: string;
  /**
  * properties block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#properties WedataIntegrationRealtimeTask#properties}
  */
  readonly properties?: WedataIntegrationRealtimeTaskTaskInfoNodesSchemaProperties[] | cdktf.IResolvable;
}

export function wedataIntegrationRealtimeTaskTaskInfoNodesSchemaToTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoNodesSchema | cdktf.IResolvable): any {
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
    properties: cdktf.listMapper(wedataIntegrationRealtimeTaskTaskInfoNodesSchemaPropertiesToTerraform, true)(struct!.properties),
  }
}


export function wedataIntegrationRealtimeTaskTaskInfoNodesSchemaToHclTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoNodesSchema | cdktf.IResolvable): any {
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
      value: cdktf.listMapperHcl(wedataIntegrationRealtimeTaskTaskInfoNodesSchemaPropertiesToHclTerraform, true)(struct!.properties),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationRealtimeTaskTaskInfoNodesSchemaPropertiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataIntegrationRealtimeTaskTaskInfoNodesSchemaOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationRealtimeTaskTaskInfoNodesSchema | cdktf.IResolvable | undefined {
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

  public set internalValue(value: WedataIntegrationRealtimeTaskTaskInfoNodesSchema | cdktf.IResolvable | undefined) {
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
  private _properties = new WedataIntegrationRealtimeTaskTaskInfoNodesSchemaPropertiesList(this, "properties", false);
  public get properties() {
    return this._properties;
  }
  public putProperties(value: WedataIntegrationRealtimeTaskTaskInfoNodesSchemaProperties[] | cdktf.IResolvable) {
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

export class WedataIntegrationRealtimeTaskTaskInfoNodesSchemaList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationRealtimeTaskTaskInfoNodesSchema[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationRealtimeTaskTaskInfoNodesSchemaOutputReference {
    return new WedataIntegrationRealtimeTaskTaskInfoNodesSchemaOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationRealtimeTaskTaskInfoNodes {
  /**
  * User App Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#app_id WedataIntegrationRealtimeTask#app_id}
  */
  readonly appId?: string;
  /**
  * Create time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#create_time WedataIntegrationRealtimeTask#create_time}
  */
  readonly createTime?: string;
  /**
  * Creator User ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#creator_uin WedataIntegrationRealtimeTask#creator_uin}
  */
  readonly creatorUin?: string;
  /**
  * Data source type: MYSQL, POSTGRE, ORACLE, SQLSERVER, FTP, HIVE, HDFS, ICEBERG, KAFKA, HBASE, SPARK, TBASE, DB2, DM, GAUSSDB, GBASE, IMPALA, ES, S3_DATAINSIGHT, GREENPLUM, PHOENIX, SAP_HANA, SFTP, OCEANBASE, CLICKHOUSE, KUDU, VERTICA, REDIS, COS, DLC, DORIS, CKAFKA, DTS_KAFKA, S3, CDW, TDSQLC, TDSQL, MONGODB, SYBASE, REST_API, StarRocks, TCHOUSE_X.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#data_source_type WedataIntegrationRealtimeTask#data_source_type}
  */
  readonly dataSourceType?: string;
  /**
  * Datasource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#datasource_id WedataIntegrationRealtimeTask#datasource_id}
  */
  readonly datasourceId?: string;
  /**
  * Node Description.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#description WedataIntegrationRealtimeTask#description}
  */
  readonly description?: string;
  /**
  * Node ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#id WedataIntegrationRealtimeTask#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Node Name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#name WedataIntegrationRealtimeTask#name}
  */
  readonly name?: string;
  /**
  * Node type: INPUT,OUTPUT,JOIN,FILTER,TRANSFORM.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#node_type WedataIntegrationRealtimeTask#node_type}
  */
  readonly nodeType?: string;
  /**
  * Operator User ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#operator_uin WedataIntegrationRealtimeTask#operator_uin}
  */
  readonly operatorUin?: string;
  /**
  * Owner User ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#owner_uin WedataIntegrationRealtimeTask#owner_uin}
  */
  readonly ownerUin?: string;
  /**
  * Project ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#project_id WedataIntegrationRealtimeTask#project_id}
  */
  readonly projectId?: string;
  /**
  * The task id to which the node belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#task_id WedataIntegrationRealtimeTask#task_id}
  */
  readonly taskId?: string;
  /**
  * Update time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#update_time WedataIntegrationRealtimeTask#update_time}
  */
  readonly updateTime?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#config WedataIntegrationRealtimeTask#config}
  */
  readonly config?: WedataIntegrationRealtimeTaskTaskInfoNodesConfig[] | cdktf.IResolvable;
  /**
  * ext_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#ext_config WedataIntegrationRealtimeTask#ext_config}
  */
  readonly extConfig?: WedataIntegrationRealtimeTaskTaskInfoNodesExtConfig[] | cdktf.IResolvable;
  /**
  * node_mapping block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#node_mapping WedataIntegrationRealtimeTask#node_mapping}
  */
  readonly nodeMapping?: WedataIntegrationRealtimeTaskTaskInfoNodesNodeMapping;
  /**
  * schema block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#schema WedataIntegrationRealtimeTask#schema}
  */
  readonly schema?: WedataIntegrationRealtimeTaskTaskInfoNodesSchema[] | cdktf.IResolvable;
}

export function wedataIntegrationRealtimeTaskTaskInfoNodesToTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoNodes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    app_id: cdktf.stringToTerraform(struct!.appId),
    create_time: cdktf.stringToTerraform(struct!.createTime),
    creator_uin: cdktf.stringToTerraform(struct!.creatorUin),
    data_source_type: cdktf.stringToTerraform(struct!.dataSourceType),
    datasource_id: cdktf.stringToTerraform(struct!.datasourceId),
    description: cdktf.stringToTerraform(struct!.description),
    id: cdktf.stringToTerraform(struct!.id),
    name: cdktf.stringToTerraform(struct!.name),
    node_type: cdktf.stringToTerraform(struct!.nodeType),
    operator_uin: cdktf.stringToTerraform(struct!.operatorUin),
    owner_uin: cdktf.stringToTerraform(struct!.ownerUin),
    project_id: cdktf.stringToTerraform(struct!.projectId),
    task_id: cdktf.stringToTerraform(struct!.taskId),
    update_time: cdktf.stringToTerraform(struct!.updateTime),
    config: cdktf.listMapper(wedataIntegrationRealtimeTaskTaskInfoNodesConfigToTerraform, true)(struct!.config),
    ext_config: cdktf.listMapper(wedataIntegrationRealtimeTaskTaskInfoNodesExtConfigToTerraform, true)(struct!.extConfig),
    node_mapping: wedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingToTerraform(struct!.nodeMapping),
    schema: cdktf.listMapper(wedataIntegrationRealtimeTaskTaskInfoNodesSchemaToTerraform, true)(struct!.schema),
  }
}


export function wedataIntegrationRealtimeTaskTaskInfoNodesToHclTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoNodes | cdktf.IResolvable): any {
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
    data_source_type: {
      value: cdktf.stringToHclTerraform(struct!.dataSourceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    datasource_id: {
      value: cdktf.stringToHclTerraform(struct!.datasourceId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
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
    node_type: {
      value: cdktf.stringToHclTerraform(struct!.nodeType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    operator_uin: {
      value: cdktf.stringToHclTerraform(struct!.operatorUin),
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
    project_id: {
      value: cdktf.stringToHclTerraform(struct!.projectId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    task_id: {
      value: cdktf.stringToHclTerraform(struct!.taskId),
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
    config: {
      value: cdktf.listMapperHcl(wedataIntegrationRealtimeTaskTaskInfoNodesConfigToHclTerraform, true)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationRealtimeTaskTaskInfoNodesConfigList",
    },
    ext_config: {
      value: cdktf.listMapperHcl(wedataIntegrationRealtimeTaskTaskInfoNodesExtConfigToHclTerraform, true)(struct!.extConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationRealtimeTaskTaskInfoNodesExtConfigList",
    },
    node_mapping: {
      value: wedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingToHclTerraform(struct!.nodeMapping),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingList",
    },
    schema: {
      value: cdktf.listMapperHcl(wedataIntegrationRealtimeTaskTaskInfoNodesSchemaToHclTerraform, true)(struct!.schema),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationRealtimeTaskTaskInfoNodesSchemaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataIntegrationRealtimeTaskTaskInfoNodesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WedataIntegrationRealtimeTaskTaskInfoNodes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._dataSourceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.dataSourceType = this._dataSourceType;
    }
    if (this._datasourceId !== undefined) {
      hasAnyValues = true;
      internalValueResult.datasourceId = this._datasourceId;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._nodeType !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeType = this._nodeType;
    }
    if (this._operatorUin !== undefined) {
      hasAnyValues = true;
      internalValueResult.operatorUin = this._operatorUin;
    }
    if (this._ownerUin !== undefined) {
      hasAnyValues = true;
      internalValueResult.ownerUin = this._ownerUin;
    }
    if (this._projectId !== undefined) {
      hasAnyValues = true;
      internalValueResult.projectId = this._projectId;
    }
    if (this._taskId !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskId = this._taskId;
    }
    if (this._updateTime !== undefined) {
      hasAnyValues = true;
      internalValueResult.updateTime = this._updateTime;
    }
    if (this._config?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.config = this._config?.internalValue;
    }
    if (this._extConfig?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extConfig = this._extConfig?.internalValue;
    }
    if (this._nodeMapping?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeMapping = this._nodeMapping?.internalValue;
    }
    if (this._schema?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.schema = this._schema?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataIntegrationRealtimeTaskTaskInfoNodes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._appId = undefined;
      this._createTime = undefined;
      this._creatorUin = undefined;
      this._dataSourceType = undefined;
      this._datasourceId = undefined;
      this._description = undefined;
      this._id = undefined;
      this._name = undefined;
      this._nodeType = undefined;
      this._operatorUin = undefined;
      this._ownerUin = undefined;
      this._projectId = undefined;
      this._taskId = undefined;
      this._updateTime = undefined;
      this._config.internalValue = undefined;
      this._extConfig.internalValue = undefined;
      this._nodeMapping.internalValue = undefined;
      this._schema.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._appId = value.appId;
      this._createTime = value.createTime;
      this._creatorUin = value.creatorUin;
      this._dataSourceType = value.dataSourceType;
      this._datasourceId = value.datasourceId;
      this._description = value.description;
      this._id = value.id;
      this._name = value.name;
      this._nodeType = value.nodeType;
      this._operatorUin = value.operatorUin;
      this._ownerUin = value.ownerUin;
      this._projectId = value.projectId;
      this._taskId = value.taskId;
      this._updateTime = value.updateTime;
      this._config.internalValue = value.config;
      this._extConfig.internalValue = value.extConfig;
      this._nodeMapping.internalValue = value.nodeMapping;
      this._schema.internalValue = value.schema;
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

  // data_source_type - computed: false, optional: true, required: false
  private _dataSourceType?: string; 
  public get dataSourceType() {
    return this.getStringAttribute('data_source_type');
  }
  public set dataSourceType(value: string) {
    this._dataSourceType = value;
  }
  public resetDataSourceType() {
    this._dataSourceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dataSourceTypeInput() {
    return this._dataSourceType;
  }

  // datasource_id - computed: false, optional: true, required: false
  private _datasourceId?: string; 
  public get datasourceId() {
    return this.getStringAttribute('datasource_id');
  }
  public set datasourceId(value: string) {
    this._datasourceId = value;
  }
  public resetDatasourceId() {
    this._datasourceId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get datasourceIdInput() {
    return this._datasourceId;
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

  // id - computed: false, optional: true, required: false
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

  // node_type - computed: false, optional: true, required: false
  private _nodeType?: string; 
  public get nodeType() {
    return this.getStringAttribute('node_type');
  }
  public set nodeType(value: string) {
    this._nodeType = value;
  }
  public resetNodeType() {
    this._nodeType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeTypeInput() {
    return this._nodeType;
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

  // project_id - computed: false, optional: true, required: false
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  public resetProjectId() {
    this._projectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // task_id - computed: false, optional: true, required: false
  private _taskId?: string; 
  public get taskId() {
    return this.getStringAttribute('task_id');
  }
  public set taskId(value: string) {
    this._taskId = value;
  }
  public resetTaskId() {
    this._taskId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get taskIdInput() {
    return this._taskId;
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

  // config - computed: false, optional: true, required: false
  private _config = new WedataIntegrationRealtimeTaskTaskInfoNodesConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: WedataIntegrationRealtimeTaskTaskInfoNodesConfig[] | cdktf.IResolvable) {
    this._config.internalValue = value;
  }
  public resetConfig() {
    this._config.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configInput() {
    return this._config.internalValue;
  }

  // ext_config - computed: false, optional: true, required: false
  private _extConfig = new WedataIntegrationRealtimeTaskTaskInfoNodesExtConfigList(this, "ext_config", false);
  public get extConfig() {
    return this._extConfig;
  }
  public putExtConfig(value: WedataIntegrationRealtimeTaskTaskInfoNodesExtConfig[] | cdktf.IResolvable) {
    this._extConfig.internalValue = value;
  }
  public resetExtConfig() {
    this._extConfig.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extConfigInput() {
    return this._extConfig.internalValue;
  }

  // node_mapping - computed: false, optional: true, required: false
  private _nodeMapping = new WedataIntegrationRealtimeTaskTaskInfoNodesNodeMappingOutputReference(this, "node_mapping");
  public get nodeMapping() {
    return this._nodeMapping;
  }
  public putNodeMapping(value: WedataIntegrationRealtimeTaskTaskInfoNodesNodeMapping) {
    this._nodeMapping.internalValue = value;
  }
  public resetNodeMapping() {
    this._nodeMapping.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeMappingInput() {
    return this._nodeMapping.internalValue;
  }

  // schema - computed: false, optional: true, required: false
  private _schema = new WedataIntegrationRealtimeTaskTaskInfoNodesSchemaList(this, "schema", false);
  public get schema() {
    return this._schema;
  }
  public putSchema(value: WedataIntegrationRealtimeTaskTaskInfoNodesSchema[] | cdktf.IResolvable) {
    this._schema.internalValue = value;
  }
  public resetSchema() {
    this._schema.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get schemaInput() {
    return this._schema.internalValue;
  }
}

export class WedataIntegrationRealtimeTaskTaskInfoNodesList extends cdktf.ComplexList {
  public internalValue? : WedataIntegrationRealtimeTaskTaskInfoNodes[] | cdktf.IResolvable

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
  public get(index: number): WedataIntegrationRealtimeTaskTaskInfoNodesOutputReference {
    return new WedataIntegrationRealtimeTaskTaskInfoNodesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WedataIntegrationRealtimeTaskTaskInfo {
  /**
  * User App Id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#app_id WedataIntegrationRealtimeTask#app_id}
  */
  readonly appId?: string;
  /**
  * Create time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#create_time WedataIntegrationRealtimeTask#create_time}
  */
  readonly createTime?: string;
  /**
  * Creator User ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#creator_uin WedataIntegrationRealtimeTask#creator_uin}
  */
  readonly creatorUin?: string;
  /**
  * Data proxy url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#data_proxy_url WedataIntegrationRealtimeTask#data_proxy_url}
  */
  readonly dataProxyUrl?: string[];
  /**
  * Executor group name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#executor_group_name WedataIntegrationRealtimeTask#executor_group_name}
  */
  readonly executorGroupName?: string;
  /**
  * Executor resource ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#executor_id WedataIntegrationRealtimeTask#executor_id}
  */
  readonly executorId?: string;
  /**
  * Whether the task been submitted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#has_version WedataIntegrationRealtimeTask#has_version}
  */
  readonly hasVersion?: boolean | cdktf.IResolvable;
  /**
  * InLong manager url.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#in_long_manager_url WedataIntegrationRealtimeTask#in_long_manager_url}
  */
  readonly inLongManagerUrl?: string;
  /**
  * InLong manager version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#in_long_manager_version WedataIntegrationRealtimeTask#in_long_manager_version}
  */
  readonly inLongManagerVersion?: string;
  /**
  * InLong stream id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#in_long_stream_id WedataIntegrationRealtimeTask#in_long_stream_id}
  */
  readonly inLongStreamId?: string;
  /**
  * Incharge user.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#incharge WedataIntegrationRealtimeTask#incharge}
  */
  readonly incharge?: string;
  /**
  * Input datasource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#input_datasource_type WedataIntegrationRealtimeTask#input_datasource_type}
  */
  readonly inputDatasourceType?: string;
  /**
  * Instance version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#instance_version WedataIntegrationRealtimeTask#instance_version}
  */
  readonly instanceVersion?: number;
  /**
  * The last time the task was run.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#last_run_time WedataIntegrationRealtimeTask#last_run_time}
  */
  readonly lastRunTime?: string;
  /**
  * Whether the task been locked.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#locked WedataIntegrationRealtimeTask#locked}
  */
  readonly locked?: boolean | cdktf.IResolvable;
  /**
  * User locked task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#locker WedataIntegrationRealtimeTask#locker}
  */
  readonly locker?: string;
  /**
  * Number of reads.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#num_records_in WedataIntegrationRealtimeTask#num_records_in}
  */
  readonly numRecordsIn?: number;
  /**
  * Number of writes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#num_records_out WedataIntegrationRealtimeTask#num_records_out}
  */
  readonly numRecordsOut?: number;
  /**
  * Times of restarts.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#num_restarts WedataIntegrationRealtimeTask#num_restarts}
  */
  readonly numRestarts?: number;
  /**
  * Operator User ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#operator_uin WedataIntegrationRealtimeTask#operator_uin}
  */
  readonly operatorUin?: string;
  /**
  * Output datasource type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#output_datasource_type WedataIntegrationRealtimeTask#output_datasource_type}
  */
  readonly outputDatasourceType?: string;
  /**
  * Owner User ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#owner_uin WedataIntegrationRealtimeTask#owner_uin}
  */
  readonly ownerUin?: string;
  /**
  * Reading stage, 0: full amount, 1: partial full amount, 2: all incremental.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#read_phase WedataIntegrationRealtimeTask#read_phase}
  */
  readonly readPhase?: number;
  /**
  * Read latency.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#reader_delay WedataIntegrationRealtimeTask#reader_delay}
  */
  readonly readerDelay?: number;
  /**
  * The amount of resources consumed by real-time task.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#running_cu WedataIntegrationRealtimeTask#running_cu}
  */
  readonly runningCu?: number;
  /**
  * Task scheduling id (job id such as oceanus or us).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#schedule_task_id WedataIntegrationRealtimeTask#schedule_task_id}
  */
  readonly scheduleTaskId?: string;
  /**
  * Task status 1. Not started | Task initialization, 2. Task starting, 3. Running, 4. Paused, 5. Task stopping, 6. Stopped, 7. Execution failed, 8. deleted, 9. Locked, 404. unknown status.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#status WedataIntegrationRealtimeTask#status}
  */
  readonly status?: number;
  /**
  * The time the task was stopped.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#stop_time WedataIntegrationRealtimeTask#stop_time}
  */
  readonly stopTime?: string;
  /**
  * Whether the task version has been submitted for operation and maintenance.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#submit WedataIntegrationRealtimeTask#submit}
  */
  readonly submit?: boolean | cdktf.IResolvable;
  /**
  * Resource tiering status, 0: in progress, 1: successful, 2: failed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#switch_resource WedataIntegrationRealtimeTask#switch_resource}
  */
  readonly switchResource?: number;
  /**
  * Task alarm regular.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#task_alarm_regular_list WedataIntegrationRealtimeTask#task_alarm_regular_list}
  */
  readonly taskAlarmRegularList?: string[];
  /**
  * Inlong Task Group ID.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#task_group_id WedataIntegrationRealtimeTask#task_group_id}
  */
  readonly taskGroupId?: string;
  /**
  * Update time.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#update_time WedataIntegrationRealtimeTask#update_time}
  */
  readonly updateTime?: string;
  /**
  * The workflow id to which the task belongs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#workflow_id WedataIntegrationRealtimeTask#workflow_id}
  */
  readonly workflowId?: string;
  /**
  * config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#config WedataIntegrationRealtimeTask#config}
  */
  readonly config?: WedataIntegrationRealtimeTaskTaskInfoConfig[] | cdktf.IResolvable;
  /**
  * execute_context block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#execute_context WedataIntegrationRealtimeTask#execute_context}
  */
  readonly executeContext?: WedataIntegrationRealtimeTaskTaskInfoExecuteContext[] | cdktf.IResolvable;
  /**
  * ext_config block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#ext_config WedataIntegrationRealtimeTask#ext_config}
  */
  readonly extConfig?: WedataIntegrationRealtimeTaskTaskInfoExtConfig[] | cdktf.IResolvable;
  /**
  * mappings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#mappings WedataIntegrationRealtimeTask#mappings}
  */
  readonly mappings?: WedataIntegrationRealtimeTaskTaskInfoMappings[] | cdktf.IResolvable;
  /**
  * nodes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#nodes WedataIntegrationRealtimeTask#nodes}
  */
  readonly nodes?: WedataIntegrationRealtimeTaskTaskInfoNodes[] | cdktf.IResolvable;
}

export function wedataIntegrationRealtimeTaskTaskInfoToTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoOutputReference | WedataIntegrationRealtimeTaskTaskInfo): any {
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
    task_alarm_regular_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.taskAlarmRegularList),
    task_group_id: cdktf.stringToTerraform(struct!.taskGroupId),
    update_time: cdktf.stringToTerraform(struct!.updateTime),
    workflow_id: cdktf.stringToTerraform(struct!.workflowId),
    config: cdktf.listMapper(wedataIntegrationRealtimeTaskTaskInfoConfigToTerraform, true)(struct!.config),
    execute_context: cdktf.listMapper(wedataIntegrationRealtimeTaskTaskInfoExecuteContextToTerraform, true)(struct!.executeContext),
    ext_config: cdktf.listMapper(wedataIntegrationRealtimeTaskTaskInfoExtConfigToTerraform, true)(struct!.extConfig),
    mappings: cdktf.listMapper(wedataIntegrationRealtimeTaskTaskInfoMappingsToTerraform, true)(struct!.mappings),
    nodes: cdktf.listMapper(wedataIntegrationRealtimeTaskTaskInfoNodesToTerraform, true)(struct!.nodes),
  }
}


export function wedataIntegrationRealtimeTaskTaskInfoToHclTerraform(struct?: WedataIntegrationRealtimeTaskTaskInfoOutputReference | WedataIntegrationRealtimeTaskTaskInfo): any {
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
      value: cdktf.listMapperHcl(wedataIntegrationRealtimeTaskTaskInfoConfigToHclTerraform, true)(struct!.config),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationRealtimeTaskTaskInfoConfigList",
    },
    execute_context: {
      value: cdktf.listMapperHcl(wedataIntegrationRealtimeTaskTaskInfoExecuteContextToHclTerraform, true)(struct!.executeContext),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationRealtimeTaskTaskInfoExecuteContextList",
    },
    ext_config: {
      value: cdktf.listMapperHcl(wedataIntegrationRealtimeTaskTaskInfoExtConfigToHclTerraform, true)(struct!.extConfig),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationRealtimeTaskTaskInfoExtConfigList",
    },
    mappings: {
      value: cdktf.listMapperHcl(wedataIntegrationRealtimeTaskTaskInfoMappingsToHclTerraform, true)(struct!.mappings),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationRealtimeTaskTaskInfoMappingsList",
    },
    nodes: {
      value: cdktf.listMapperHcl(wedataIntegrationRealtimeTaskTaskInfoNodesToHclTerraform, true)(struct!.nodes),
      isBlock: true,
      type: "list",
      storageClassType: "WedataIntegrationRealtimeTaskTaskInfoNodesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WedataIntegrationRealtimeTaskTaskInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): WedataIntegrationRealtimeTaskTaskInfo | undefined {
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
    if (this._taskAlarmRegularList !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskAlarmRegularList = this._taskAlarmRegularList;
    }
    if (this._taskGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.taskGroupId = this._taskGroupId;
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
    if (this._nodes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodes = this._nodes?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WedataIntegrationRealtimeTaskTaskInfo | undefined) {
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
      this._taskAlarmRegularList = undefined;
      this._taskGroupId = undefined;
      this._updateTime = undefined;
      this._workflowId = undefined;
      this._config.internalValue = undefined;
      this._executeContext.internalValue = undefined;
      this._extConfig.internalValue = undefined;
      this._mappings.internalValue = undefined;
      this._nodes.internalValue = undefined;
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
      this._taskAlarmRegularList = value.taskAlarmRegularList;
      this._taskGroupId = value.taskGroupId;
      this._updateTime = value.updateTime;
      this._workflowId = value.workflowId;
      this._config.internalValue = value.config;
      this._executeContext.internalValue = value.executeContext;
      this._extConfig.internalValue = value.extConfig;
      this._mappings.internalValue = value.mappings;
      this._nodes.internalValue = value.nodes;
    }
  }

  // app_id - computed: true, optional: true, required: false
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

  // create_time - computed: true, optional: true, required: false
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

  // creator_uin - computed: true, optional: true, required: false
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

  // data_proxy_url - computed: true, optional: true, required: false
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

  // executor_group_name - computed: true, optional: true, required: false
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

  // has_version - computed: true, optional: true, required: false
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

  // in_long_manager_url - computed: true, optional: true, required: false
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

  // in_long_manager_version - computed: true, optional: true, required: false
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

  // in_long_stream_id - computed: true, optional: true, required: false
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

  // input_datasource_type - computed: true, optional: true, required: false
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

  // instance_version - computed: true, optional: true, required: false
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

  // last_run_time - computed: true, optional: true, required: false
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

  // locked - computed: true, optional: true, required: false
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

  // locker - computed: true, optional: true, required: false
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

  // num_records_in - computed: true, optional: true, required: false
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

  // num_records_out - computed: true, optional: true, required: false
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

  // num_restarts - computed: true, optional: true, required: false
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

  // operator_uin - computed: true, optional: true, required: false
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

  // output_datasource_type - computed: true, optional: true, required: false
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

  // owner_uin - computed: true, optional: true, required: false
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

  // read_phase - computed: true, optional: true, required: false
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

  // reader_delay - computed: true, optional: true, required: false
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

  // running_cu - computed: true, optional: true, required: false
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

  // schedule_task_id - computed: true, optional: true, required: false
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

  // stop_time - computed: true, optional: true, required: false
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

  // submit - computed: true, optional: true, required: false
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

  // switch_resource - computed: true, optional: true, required: false
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

  // task_alarm_regular_list - computed: true, optional: true, required: false
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

  // task_group_id - computed: true, optional: true, required: false
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

  // update_time - computed: true, optional: true, required: false
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

  // workflow_id - computed: true, optional: true, required: false
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
  private _config = new WedataIntegrationRealtimeTaskTaskInfoConfigList(this, "config", false);
  public get config() {
    return this._config;
  }
  public putConfig(value: WedataIntegrationRealtimeTaskTaskInfoConfig[] | cdktf.IResolvable) {
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
  private _executeContext = new WedataIntegrationRealtimeTaskTaskInfoExecuteContextList(this, "execute_context", false);
  public get executeContext() {
    return this._executeContext;
  }
  public putExecuteContext(value: WedataIntegrationRealtimeTaskTaskInfoExecuteContext[] | cdktf.IResolvable) {
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
  private _extConfig = new WedataIntegrationRealtimeTaskTaskInfoExtConfigList(this, "ext_config", false);
  public get extConfig() {
    return this._extConfig;
  }
  public putExtConfig(value: WedataIntegrationRealtimeTaskTaskInfoExtConfig[] | cdktf.IResolvable) {
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
  private _mappings = new WedataIntegrationRealtimeTaskTaskInfoMappingsList(this, "mappings", false);
  public get mappings() {
    return this._mappings;
  }
  public putMappings(value: WedataIntegrationRealtimeTaskTaskInfoMappings[] | cdktf.IResolvable) {
    this._mappings.internalValue = value;
  }
  public resetMappings() {
    this._mappings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingsInput() {
    return this._mappings.internalValue;
  }

  // nodes - computed: false, optional: true, required: false
  private _nodes = new WedataIntegrationRealtimeTaskTaskInfoNodesList(this, "nodes", false);
  public get nodes() {
    return this._nodes;
  }
  public putNodes(value: WedataIntegrationRealtimeTaskTaskInfoNodes[] | cdktf.IResolvable) {
    this._nodes.internalValue = value;
  }
  public resetNodes() {
    this._nodes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodesInput() {
    return this._nodes.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task tencentcloud_wedata_integration_realtime_task}
*/
export class WedataIntegrationRealtimeTask extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "tencentcloud_wedata_integration_realtime_task";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WedataIntegrationRealtimeTask resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WedataIntegrationRealtimeTask to import
  * @param importFromId The id of the existing WedataIntegrationRealtimeTask that should be imported. Refer to the {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WedataIntegrationRealtimeTask to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "tencentcloud_wedata_integration_realtime_task", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/tencentcloudstack/tencentcloud/1.82.48/docs/resources/wedata_integration_realtime_task tencentcloud_wedata_integration_realtime_task} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WedataIntegrationRealtimeTaskConfig
  */
  public constructor(scope: Construct, id: string, config: WedataIntegrationRealtimeTaskConfig) {
    super(scope, id, {
      terraformResourceType: 'tencentcloud_wedata_integration_realtime_task',
      terraformGeneratorMetadata: {
        providerName: 'tencentcloud',
        providerVersion: '1.82.48',
        providerVersionConstraint: '1.82.48'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._description = config.description;
    this._id = config.id;
    this._projectId = config.projectId;
    this._syncType = config.syncType;
    this._taskMode = config.taskMode;
    this._taskName = config.taskName;
    this._taskInfo.internalValue = config.taskInfo;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // sync_type - computed: false, optional: false, required: true
  private _syncType?: number; 
  public get syncType() {
    return this.getNumberAttribute('sync_type');
  }
  public set syncType(value: number) {
    this._syncType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get syncTypeInput() {
    return this._syncType;
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
  private _taskInfo = new WedataIntegrationRealtimeTaskTaskInfoOutputReference(this, "task_info");
  public get taskInfo() {
    return this._taskInfo;
  }
  public putTaskInfo(value: WedataIntegrationRealtimeTaskTaskInfo) {
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
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      project_id: cdktf.stringToTerraform(this._projectId),
      sync_type: cdktf.numberToTerraform(this._syncType),
      task_mode: cdktf.stringToTerraform(this._taskMode),
      task_name: cdktf.stringToTerraform(this._taskName),
      task_info: wedataIntegrationRealtimeTaskTaskInfoToTerraform(this._taskInfo.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      description: {
        value: cdktf.stringToHclTerraform(this._description),
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
      project_id: {
        value: cdktf.stringToHclTerraform(this._projectId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      sync_type: {
        value: cdktf.numberToHclTerraform(this._syncType),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
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
        value: wedataIntegrationRealtimeTaskTaskInfoToHclTerraform(this._taskInfo.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WedataIntegrationRealtimeTaskTaskInfoList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
