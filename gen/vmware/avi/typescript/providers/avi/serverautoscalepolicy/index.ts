// https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ServerautoscalepolicyConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#delay_for_server_garbage_collection Serverautoscalepolicy#delay_for_server_garbage_collection}
  */
  readonly delayForServerGarbageCollection?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#description Serverautoscalepolicy#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#id Serverautoscalepolicy#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#intelligent_autoscale Serverautoscalepolicy#intelligent_autoscale}
  */
  readonly intelligentAutoscale?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#intelligent_scalein_margin Serverautoscalepolicy#intelligent_scalein_margin}
  */
  readonly intelligentScaleinMargin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#intelligent_scaleout_margin Serverautoscalepolicy#intelligent_scaleout_margin}
  */
  readonly intelligentScaleoutMargin?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#max_scalein_adjustment_step Serverautoscalepolicy#max_scalein_adjustment_step}
  */
  readonly maxScaleinAdjustmentStep?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#max_scaleout_adjustment_step Serverautoscalepolicy#max_scaleout_adjustment_step}
  */
  readonly maxScaleoutAdjustmentStep?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#max_size Serverautoscalepolicy#max_size}
  */
  readonly maxSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#min_size Serverautoscalepolicy#min_size}
  */
  readonly minSize?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#name Serverautoscalepolicy#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#scalein_alertconfig_refs Serverautoscalepolicy#scalein_alertconfig_refs}
  */
  readonly scaleinAlertconfigRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#scalein_cooldown Serverautoscalepolicy#scalein_cooldown}
  */
  readonly scaleinCooldown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#scaleout_alertconfig_refs Serverautoscalepolicy#scaleout_alertconfig_refs}
  */
  readonly scaleoutAlertconfigRefs?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#scaleout_cooldown Serverautoscalepolicy#scaleout_cooldown}
  */
  readonly scaleoutCooldown?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#tenant_ref Serverautoscalepolicy#tenant_ref}
  */
  readonly tenantRef?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#use_predicted_load Serverautoscalepolicy#use_predicted_load}
  */
  readonly usePredictedLoad?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#uuid Serverautoscalepolicy#uuid}
  */
  readonly uuid?: string;
  /**
  * configpb_attributes block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#configpb_attributes Serverautoscalepolicy#configpb_attributes}
  */
  readonly configpbAttributes?: ServerautoscalepolicyConfigpbAttributes[] | cdktf.IResolvable;
  /**
  * markers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#markers Serverautoscalepolicy#markers}
  */
  readonly markers?: ServerautoscalepolicyMarkers[] | cdktf.IResolvable;
  /**
  * scheduled_scalings block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#scheduled_scalings Serverautoscalepolicy#scheduled_scalings}
  */
  readonly scheduledScalings?: ServerautoscalepolicyScheduledScalings[] | cdktf.IResolvable;
}
export interface ServerautoscalepolicyConfigpbAttributes {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#version Serverautoscalepolicy#version}
  */
  readonly version?: string;
}

export function serverautoscalepolicyConfigpbAttributesToTerraform(struct?: ServerautoscalepolicyConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function serverautoscalepolicyConfigpbAttributesToHclTerraform(struct?: ServerautoscalepolicyConfigpbAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    version: {
      value: cdktf.stringToHclTerraform(struct!.version),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerautoscalepolicyConfigpbAttributesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerautoscalepolicyConfigpbAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerautoscalepolicyConfigpbAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._version = value.version;
    }
  }

  // version - computed: true, optional: true, required: false
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  public resetVersion() {
    this._version = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}

export class ServerautoscalepolicyConfigpbAttributesList extends cdktf.ComplexList {
  public internalValue? : ServerautoscalepolicyConfigpbAttributes[] | cdktf.IResolvable

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
  public get(index: number): ServerautoscalepolicyConfigpbAttributesOutputReference {
    return new ServerautoscalepolicyConfigpbAttributesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerautoscalepolicyMarkers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#key Serverautoscalepolicy#key}
  */
  readonly key: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#values Serverautoscalepolicy#values}
  */
  readonly values?: string[];
}

export function serverautoscalepolicyMarkersToTerraform(struct?: ServerautoscalepolicyMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function serverautoscalepolicyMarkersToHclTerraform(struct?: ServerautoscalepolicyMarkers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    key: {
      value: cdktf.stringToHclTerraform(struct!.key),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.values),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerautoscalepolicyMarkersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerautoscalepolicyMarkers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerautoscalepolicyMarkers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._values = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._key = value.key;
      this._values = value.values;
    }
  }

  // key - computed: false, optional: false, required: true
  private _key?: string; 
  public get key() {
    return this.getStringAttribute('key');
  }
  public set key(value: string) {
    this._key = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyInput() {
    return this._key;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class ServerautoscalepolicyMarkersList extends cdktf.ComplexList {
  public internalValue? : ServerautoscalepolicyMarkers[] | cdktf.IResolvable

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
  public get(index: number): ServerautoscalepolicyMarkersOutputReference {
    return new ServerautoscalepolicyMarkersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ServerautoscalepolicyScheduledScalings {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#autoscaling_duration Serverautoscalepolicy#autoscaling_duration}
  */
  readonly autoscalingDuration?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#cron_expression Serverautoscalepolicy#cron_expression}
  */
  readonly cronExpression?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#desired_capacity Serverautoscalepolicy#desired_capacity}
  */
  readonly desiredCapacity?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#enable Serverautoscalepolicy#enable}
  */
  readonly enable?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#end_date Serverautoscalepolicy#end_date}
  */
  readonly endDate?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#schedule_max_step Serverautoscalepolicy#schedule_max_step}
  */
  readonly scheduleMaxStep?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#start_date Serverautoscalepolicy#start_date}
  */
  readonly startDate?: string;
}

export function serverautoscalepolicyScheduledScalingsToTerraform(struct?: ServerautoscalepolicyScheduledScalings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    autoscaling_duration: cdktf.stringToTerraform(struct!.autoscalingDuration),
    cron_expression: cdktf.stringToTerraform(struct!.cronExpression),
    desired_capacity: cdktf.stringToTerraform(struct!.desiredCapacity),
    enable: cdktf.stringToTerraform(struct!.enable),
    end_date: cdktf.stringToTerraform(struct!.endDate),
    schedule_max_step: cdktf.stringToTerraform(struct!.scheduleMaxStep),
    start_date: cdktf.stringToTerraform(struct!.startDate),
  }
}


export function serverautoscalepolicyScheduledScalingsToHclTerraform(struct?: ServerautoscalepolicyScheduledScalings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    autoscaling_duration: {
      value: cdktf.stringToHclTerraform(struct!.autoscalingDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cron_expression: {
      value: cdktf.stringToHclTerraform(struct!.cronExpression),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    desired_capacity: {
      value: cdktf.stringToHclTerraform(struct!.desiredCapacity),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable: {
      value: cdktf.stringToHclTerraform(struct!.enable),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    end_date: {
      value: cdktf.stringToHclTerraform(struct!.endDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    schedule_max_step: {
      value: cdktf.stringToHclTerraform(struct!.scheduleMaxStep),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    start_date: {
      value: cdktf.stringToHclTerraform(struct!.startDate),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ServerautoscalepolicyScheduledScalingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ServerautoscalepolicyScheduledScalings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._autoscalingDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.autoscalingDuration = this._autoscalingDuration;
    }
    if (this._cronExpression !== undefined) {
      hasAnyValues = true;
      internalValueResult.cronExpression = this._cronExpression;
    }
    if (this._desiredCapacity !== undefined) {
      hasAnyValues = true;
      internalValueResult.desiredCapacity = this._desiredCapacity;
    }
    if (this._enable !== undefined) {
      hasAnyValues = true;
      internalValueResult.enable = this._enable;
    }
    if (this._endDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.endDate = this._endDate;
    }
    if (this._scheduleMaxStep !== undefined) {
      hasAnyValues = true;
      internalValueResult.scheduleMaxStep = this._scheduleMaxStep;
    }
    if (this._startDate !== undefined) {
      hasAnyValues = true;
      internalValueResult.startDate = this._startDate;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ServerautoscalepolicyScheduledScalings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._autoscalingDuration = undefined;
      this._cronExpression = undefined;
      this._desiredCapacity = undefined;
      this._enable = undefined;
      this._endDate = undefined;
      this._scheduleMaxStep = undefined;
      this._startDate = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._autoscalingDuration = value.autoscalingDuration;
      this._cronExpression = value.cronExpression;
      this._desiredCapacity = value.desiredCapacity;
      this._enable = value.enable;
      this._endDate = value.endDate;
      this._scheduleMaxStep = value.scheduleMaxStep;
      this._startDate = value.startDate;
    }
  }

  // autoscaling_duration - computed: false, optional: true, required: false
  private _autoscalingDuration?: string; 
  public get autoscalingDuration() {
    return this.getStringAttribute('autoscaling_duration');
  }
  public set autoscalingDuration(value: string) {
    this._autoscalingDuration = value;
  }
  public resetAutoscalingDuration() {
    this._autoscalingDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get autoscalingDurationInput() {
    return this._autoscalingDuration;
  }

  // cron_expression - computed: true, optional: true, required: false
  private _cronExpression?: string; 
  public get cronExpression() {
    return this.getStringAttribute('cron_expression');
  }
  public set cronExpression(value: string) {
    this._cronExpression = value;
  }
  public resetCronExpression() {
    this._cronExpression = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cronExpressionInput() {
    return this._cronExpression;
  }

  // desired_capacity - computed: true, optional: true, required: false
  private _desiredCapacity?: string; 
  public get desiredCapacity() {
    return this.getStringAttribute('desired_capacity');
  }
  public set desiredCapacity(value: string) {
    this._desiredCapacity = value;
  }
  public resetDesiredCapacity() {
    this._desiredCapacity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get desiredCapacityInput() {
    return this._desiredCapacity;
  }

  // enable - computed: false, optional: true, required: false
  private _enable?: string; 
  public get enable() {
    return this.getStringAttribute('enable');
  }
  public set enable(value: string) {
    this._enable = value;
  }
  public resetEnable() {
    this._enable = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableInput() {
    return this._enable;
  }

  // end_date - computed: true, optional: true, required: false
  private _endDate?: string; 
  public get endDate() {
    return this.getStringAttribute('end_date');
  }
  public set endDate(value: string) {
    this._endDate = value;
  }
  public resetEndDate() {
    this._endDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get endDateInput() {
    return this._endDate;
  }

  // schedule_max_step - computed: false, optional: true, required: false
  private _scheduleMaxStep?: string; 
  public get scheduleMaxStep() {
    return this.getStringAttribute('schedule_max_step');
  }
  public set scheduleMaxStep(value: string) {
    this._scheduleMaxStep = value;
  }
  public resetScheduleMaxStep() {
    this._scheduleMaxStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduleMaxStepInput() {
    return this._scheduleMaxStep;
  }

  // start_date - computed: true, optional: true, required: false
  private _startDate?: string; 
  public get startDate() {
    return this.getStringAttribute('start_date');
  }
  public set startDate(value: string) {
    this._startDate = value;
  }
  public resetStartDate() {
    this._startDate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get startDateInput() {
    return this._startDate;
  }
}

export class ServerautoscalepolicyScheduledScalingsList extends cdktf.ComplexList {
  public internalValue? : ServerautoscalepolicyScheduledScalings[] | cdktf.IResolvable

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
  public get(index: number): ServerautoscalepolicyScheduledScalingsOutputReference {
    return new ServerautoscalepolicyScheduledScalingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy avi_serverautoscalepolicy}
*/
export class Serverautoscalepolicy extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "avi_serverautoscalepolicy";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a Serverautoscalepolicy resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the Serverautoscalepolicy to import
  * @param importFromId The id of the existing Serverautoscalepolicy that should be imported. Refer to the {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the Serverautoscalepolicy to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "avi_serverautoscalepolicy", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/vmware/avi/31.2.1/docs/resources/serverautoscalepolicy avi_serverautoscalepolicy} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ServerautoscalepolicyConfig
  */
  public constructor(scope: Construct, id: string, config: ServerautoscalepolicyConfig) {
    super(scope, id, {
      terraformResourceType: 'avi_serverautoscalepolicy',
      terraformGeneratorMetadata: {
        providerName: 'avi',
        providerVersion: '31.2.1',
        providerVersionConstraint: '31.2.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._delayForServerGarbageCollection = config.delayForServerGarbageCollection;
    this._description = config.description;
    this._id = config.id;
    this._intelligentAutoscale = config.intelligentAutoscale;
    this._intelligentScaleinMargin = config.intelligentScaleinMargin;
    this._intelligentScaleoutMargin = config.intelligentScaleoutMargin;
    this._maxScaleinAdjustmentStep = config.maxScaleinAdjustmentStep;
    this._maxScaleoutAdjustmentStep = config.maxScaleoutAdjustmentStep;
    this._maxSize = config.maxSize;
    this._minSize = config.minSize;
    this._name = config.name;
    this._scaleinAlertconfigRefs = config.scaleinAlertconfigRefs;
    this._scaleinCooldown = config.scaleinCooldown;
    this._scaleoutAlertconfigRefs = config.scaleoutAlertconfigRefs;
    this._scaleoutCooldown = config.scaleoutCooldown;
    this._tenantRef = config.tenantRef;
    this._usePredictedLoad = config.usePredictedLoad;
    this._uuid = config.uuid;
    this._configpbAttributes.internalValue = config.configpbAttributes;
    this._markers.internalValue = config.markers;
    this._scheduledScalings.internalValue = config.scheduledScalings;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // delay_for_server_garbage_collection - computed: false, optional: true, required: false
  private _delayForServerGarbageCollection?: string; 
  public get delayForServerGarbageCollection() {
    return this.getStringAttribute('delay_for_server_garbage_collection');
  }
  public set delayForServerGarbageCollection(value: string) {
    this._delayForServerGarbageCollection = value;
  }
  public resetDelayForServerGarbageCollection() {
    this._delayForServerGarbageCollection = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get delayForServerGarbageCollectionInput() {
    return this._delayForServerGarbageCollection;
  }

  // description - computed: true, optional: true, required: false
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

  // intelligent_autoscale - computed: false, optional: true, required: false
  private _intelligentAutoscale?: string; 
  public get intelligentAutoscale() {
    return this.getStringAttribute('intelligent_autoscale');
  }
  public set intelligentAutoscale(value: string) {
    this._intelligentAutoscale = value;
  }
  public resetIntelligentAutoscale() {
    this._intelligentAutoscale = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelligentAutoscaleInput() {
    return this._intelligentAutoscale;
  }

  // intelligent_scalein_margin - computed: false, optional: true, required: false
  private _intelligentScaleinMargin?: string; 
  public get intelligentScaleinMargin() {
    return this.getStringAttribute('intelligent_scalein_margin');
  }
  public set intelligentScaleinMargin(value: string) {
    this._intelligentScaleinMargin = value;
  }
  public resetIntelligentScaleinMargin() {
    this._intelligentScaleinMargin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelligentScaleinMarginInput() {
    return this._intelligentScaleinMargin;
  }

  // intelligent_scaleout_margin - computed: false, optional: true, required: false
  private _intelligentScaleoutMargin?: string; 
  public get intelligentScaleoutMargin() {
    return this.getStringAttribute('intelligent_scaleout_margin');
  }
  public set intelligentScaleoutMargin(value: string) {
    this._intelligentScaleoutMargin = value;
  }
  public resetIntelligentScaleoutMargin() {
    this._intelligentScaleoutMargin = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get intelligentScaleoutMarginInput() {
    return this._intelligentScaleoutMargin;
  }

  // max_scalein_adjustment_step - computed: false, optional: true, required: false
  private _maxScaleinAdjustmentStep?: string; 
  public get maxScaleinAdjustmentStep() {
    return this.getStringAttribute('max_scalein_adjustment_step');
  }
  public set maxScaleinAdjustmentStep(value: string) {
    this._maxScaleinAdjustmentStep = value;
  }
  public resetMaxScaleinAdjustmentStep() {
    this._maxScaleinAdjustmentStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScaleinAdjustmentStepInput() {
    return this._maxScaleinAdjustmentStep;
  }

  // max_scaleout_adjustment_step - computed: false, optional: true, required: false
  private _maxScaleoutAdjustmentStep?: string; 
  public get maxScaleoutAdjustmentStep() {
    return this.getStringAttribute('max_scaleout_adjustment_step');
  }
  public set maxScaleoutAdjustmentStep(value: string) {
    this._maxScaleoutAdjustmentStep = value;
  }
  public resetMaxScaleoutAdjustmentStep() {
    this._maxScaleoutAdjustmentStep = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxScaleoutAdjustmentStepInput() {
    return this._maxScaleoutAdjustmentStep;
  }

  // max_size - computed: true, optional: true, required: false
  private _maxSize?: string; 
  public get maxSize() {
    return this.getStringAttribute('max_size');
  }
  public set maxSize(value: string) {
    this._maxSize = value;
  }
  public resetMaxSize() {
    this._maxSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxSizeInput() {
    return this._maxSize;
  }

  // min_size - computed: true, optional: true, required: false
  private _minSize?: string; 
  public get minSize() {
    return this.getStringAttribute('min_size');
  }
  public set minSize(value: string) {
    this._minSize = value;
  }
  public resetMinSize() {
    this._minSize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minSizeInput() {
    return this._minSize;
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

  // scalein_alertconfig_refs - computed: false, optional: true, required: false
  private _scaleinAlertconfigRefs?: string[]; 
  public get scaleinAlertconfigRefs() {
    return this.getListAttribute('scalein_alertconfig_refs');
  }
  public set scaleinAlertconfigRefs(value: string[]) {
    this._scaleinAlertconfigRefs = value;
  }
  public resetScaleinAlertconfigRefs() {
    this._scaleinAlertconfigRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleinAlertconfigRefsInput() {
    return this._scaleinAlertconfigRefs;
  }

  // scalein_cooldown - computed: false, optional: true, required: false
  private _scaleinCooldown?: string; 
  public get scaleinCooldown() {
    return this.getStringAttribute('scalein_cooldown');
  }
  public set scaleinCooldown(value: string) {
    this._scaleinCooldown = value;
  }
  public resetScaleinCooldown() {
    this._scaleinCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleinCooldownInput() {
    return this._scaleinCooldown;
  }

  // scaleout_alertconfig_refs - computed: false, optional: true, required: false
  private _scaleoutAlertconfigRefs?: string[]; 
  public get scaleoutAlertconfigRefs() {
    return this.getListAttribute('scaleout_alertconfig_refs');
  }
  public set scaleoutAlertconfigRefs(value: string[]) {
    this._scaleoutAlertconfigRefs = value;
  }
  public resetScaleoutAlertconfigRefs() {
    this._scaleoutAlertconfigRefs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleoutAlertconfigRefsInput() {
    return this._scaleoutAlertconfigRefs;
  }

  // scaleout_cooldown - computed: false, optional: true, required: false
  private _scaleoutCooldown?: string; 
  public get scaleoutCooldown() {
    return this.getStringAttribute('scaleout_cooldown');
  }
  public set scaleoutCooldown(value: string) {
    this._scaleoutCooldown = value;
  }
  public resetScaleoutCooldown() {
    this._scaleoutCooldown = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scaleoutCooldownInput() {
    return this._scaleoutCooldown;
  }

  // tenant_ref - computed: true, optional: true, required: false
  private _tenantRef?: string; 
  public get tenantRef() {
    return this.getStringAttribute('tenant_ref');
  }
  public set tenantRef(value: string) {
    this._tenantRef = value;
  }
  public resetTenantRef() {
    this._tenantRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tenantRefInput() {
    return this._tenantRef;
  }

  // use_predicted_load - computed: false, optional: true, required: false
  private _usePredictedLoad?: string; 
  public get usePredictedLoad() {
    return this.getStringAttribute('use_predicted_load');
  }
  public set usePredictedLoad(value: string) {
    this._usePredictedLoad = value;
  }
  public resetUsePredictedLoad() {
    this._usePredictedLoad = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usePredictedLoadInput() {
    return this._usePredictedLoad;
  }

  // uuid - computed: true, optional: true, required: false
  private _uuid?: string; 
  public get uuid() {
    return this.getStringAttribute('uuid');
  }
  public set uuid(value: string) {
    this._uuid = value;
  }
  public resetUuid() {
    this._uuid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uuidInput() {
    return this._uuid;
  }

  // configpb_attributes - computed: false, optional: true, required: false
  private _configpbAttributes = new ServerautoscalepolicyConfigpbAttributesList(this, "configpb_attributes", true);
  public get configpbAttributes() {
    return this._configpbAttributes;
  }
  public putConfigpbAttributes(value: ServerautoscalepolicyConfigpbAttributes[] | cdktf.IResolvable) {
    this._configpbAttributes.internalValue = value;
  }
  public resetConfigpbAttributes() {
    this._configpbAttributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configpbAttributesInput() {
    return this._configpbAttributes.internalValue;
  }

  // markers - computed: false, optional: true, required: false
  private _markers = new ServerautoscalepolicyMarkersList(this, "markers", false);
  public get markers() {
    return this._markers;
  }
  public putMarkers(value: ServerautoscalepolicyMarkers[] | cdktf.IResolvable) {
    this._markers.internalValue = value;
  }
  public resetMarkers() {
    this._markers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get markersInput() {
    return this._markers.internalValue;
  }

  // scheduled_scalings - computed: false, optional: true, required: false
  private _scheduledScalings = new ServerautoscalepolicyScheduledScalingsList(this, "scheduled_scalings", false);
  public get scheduledScalings() {
    return this._scheduledScalings;
  }
  public putScheduledScalings(value: ServerautoscalepolicyScheduledScalings[] | cdktf.IResolvable) {
    this._scheduledScalings.internalValue = value;
  }
  public resetScheduledScalings() {
    this._scheduledScalings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get scheduledScalingsInput() {
    return this._scheduledScalings.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      delay_for_server_garbage_collection: cdktf.stringToTerraform(this._delayForServerGarbageCollection),
      description: cdktf.stringToTerraform(this._description),
      id: cdktf.stringToTerraform(this._id),
      intelligent_autoscale: cdktf.stringToTerraform(this._intelligentAutoscale),
      intelligent_scalein_margin: cdktf.stringToTerraform(this._intelligentScaleinMargin),
      intelligent_scaleout_margin: cdktf.stringToTerraform(this._intelligentScaleoutMargin),
      max_scalein_adjustment_step: cdktf.stringToTerraform(this._maxScaleinAdjustmentStep),
      max_scaleout_adjustment_step: cdktf.stringToTerraform(this._maxScaleoutAdjustmentStep),
      max_size: cdktf.stringToTerraform(this._maxSize),
      min_size: cdktf.stringToTerraform(this._minSize),
      name: cdktf.stringToTerraform(this._name),
      scalein_alertconfig_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scaleinAlertconfigRefs),
      scalein_cooldown: cdktf.stringToTerraform(this._scaleinCooldown),
      scaleout_alertconfig_refs: cdktf.listMapper(cdktf.stringToTerraform, false)(this._scaleoutAlertconfigRefs),
      scaleout_cooldown: cdktf.stringToTerraform(this._scaleoutCooldown),
      tenant_ref: cdktf.stringToTerraform(this._tenantRef),
      use_predicted_load: cdktf.stringToTerraform(this._usePredictedLoad),
      uuid: cdktf.stringToTerraform(this._uuid),
      configpb_attributes: cdktf.listMapper(serverautoscalepolicyConfigpbAttributesToTerraform, true)(this._configpbAttributes.internalValue),
      markers: cdktf.listMapper(serverautoscalepolicyMarkersToTerraform, true)(this._markers.internalValue),
      scheduled_scalings: cdktf.listMapper(serverautoscalepolicyScheduledScalingsToTerraform, true)(this._scheduledScalings.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      delay_for_server_garbage_collection: {
        value: cdktf.stringToHclTerraform(this._delayForServerGarbageCollection),
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
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intelligent_autoscale: {
        value: cdktf.stringToHclTerraform(this._intelligentAutoscale),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intelligent_scalein_margin: {
        value: cdktf.stringToHclTerraform(this._intelligentScaleinMargin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      intelligent_scaleout_margin: {
        value: cdktf.stringToHclTerraform(this._intelligentScaleoutMargin),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_scalein_adjustment_step: {
        value: cdktf.stringToHclTerraform(this._maxScaleinAdjustmentStep),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_scaleout_adjustment_step: {
        value: cdktf.stringToHclTerraform(this._maxScaleoutAdjustmentStep),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      max_size: {
        value: cdktf.stringToHclTerraform(this._maxSize),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      min_size: {
        value: cdktf.stringToHclTerraform(this._minSize),
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
      scalein_alertconfig_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scaleinAlertconfigRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      scalein_cooldown: {
        value: cdktf.stringToHclTerraform(this._scaleinCooldown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      scaleout_alertconfig_refs: {
        value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(this._scaleoutAlertconfigRefs),
        isBlock: false,
        type: "list",
        storageClassType: "stringList",
      },
      scaleout_cooldown: {
        value: cdktf.stringToHclTerraform(this._scaleoutCooldown),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      tenant_ref: {
        value: cdktf.stringToHclTerraform(this._tenantRef),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      use_predicted_load: {
        value: cdktf.stringToHclTerraform(this._usePredictedLoad),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      uuid: {
        value: cdktf.stringToHclTerraform(this._uuid),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configpb_attributes: {
        value: cdktf.listMapperHcl(serverautoscalepolicyConfigpbAttributesToHclTerraform, true)(this._configpbAttributes.internalValue),
        isBlock: true,
        type: "set",
        storageClassType: "ServerautoscalepolicyConfigpbAttributesList",
      },
      markers: {
        value: cdktf.listMapperHcl(serverautoscalepolicyMarkersToHclTerraform, true)(this._markers.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerautoscalepolicyMarkersList",
      },
      scheduled_scalings: {
        value: cdktf.listMapperHcl(serverautoscalepolicyScheduledScalingsToHclTerraform, true)(this._scheduledScalings.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ServerautoscalepolicyScheduledScalingsList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
