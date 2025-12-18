// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ResourceSchedulerScheduleConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#action ResourceSchedulerSchedule#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#compartment_id ResourceSchedulerSchedule#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#defined_tags ResourceSchedulerSchedule#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#description ResourceSchedulerSchedule#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#display_name ResourceSchedulerSchedule#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#freeform_tags ResourceSchedulerSchedule#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#id ResourceSchedulerSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#recurrence_details ResourceSchedulerSchedule#recurrence_details}
  */
  readonly recurrenceDetails: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#recurrence_type ResourceSchedulerSchedule#recurrence_type}
  */
  readonly recurrenceType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#state ResourceSchedulerSchedule#state}
  */
  readonly state?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#time_ends ResourceSchedulerSchedule#time_ends}
  */
  readonly timeEnds?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#time_starts ResourceSchedulerSchedule#time_starts}
  */
  readonly timeStarts?: string;
  /**
  * resource_filters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#resource_filters ResourceSchedulerSchedule#resource_filters}
  */
  readonly resourceFilters?: ResourceSchedulerScheduleResourceFilters[] | cdktf.IResolvable;
  /**
  * resources block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#resources ResourceSchedulerSchedule#resources}
  */
  readonly resources?: ResourceSchedulerScheduleResources[] | cdktf.IResolvable;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#timeouts ResourceSchedulerSchedule#timeouts}
  */
  readonly timeouts?: ResourceSchedulerScheduleTimeouts;
}
export interface ResourceSchedulerScheduleResourceFiltersValue {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#namespace ResourceSchedulerSchedule#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#tag_key ResourceSchedulerSchedule#tag_key}
  */
  readonly tagKey?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#value ResourceSchedulerSchedule#value}
  */
  readonly value?: string;
}

export function resourceSchedulerScheduleResourceFiltersValueToTerraform(struct?: ResourceSchedulerScheduleResourceFiltersValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    namespace: cdktf.stringToTerraform(struct!.namespace),
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function resourceSchedulerScheduleResourceFiltersValueToHclTerraform(struct?: ResourceSchedulerScheduleResourceFiltersValue | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
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

export class ResourceSchedulerScheduleResourceFiltersValueOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceSchedulerScheduleResourceFiltersValue | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceSchedulerScheduleResourceFiltersValue | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._namespace = undefined;
      this._tagKey = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._namespace = value.namespace;
      this._tagKey = value.tagKey;
      this._value = value.value;
    }
  }

  // namespace - computed: true, optional: true, required: false
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  public resetNamespace() {
    this._namespace = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }

  // tag_key - computed: true, optional: true, required: false
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  public resetTagKey() {
    this._tagKey = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
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

export class ResourceSchedulerScheduleResourceFiltersValueList extends cdktf.ComplexList {
  public internalValue? : ResourceSchedulerScheduleResourceFiltersValue[] | cdktf.IResolvable

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
  public get(index: number): ResourceSchedulerScheduleResourceFiltersValueOutputReference {
    return new ResourceSchedulerScheduleResourceFiltersValueOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceSchedulerScheduleResourceFilters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#attribute ResourceSchedulerSchedule#attribute}
  */
  readonly attribute: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#condition ResourceSchedulerSchedule#condition}
  */
  readonly condition?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#should_include_child_compartments ResourceSchedulerSchedule#should_include_child_compartments}
  */
  readonly shouldIncludeChildCompartments?: boolean | cdktf.IResolvable;
  /**
  * value block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#value ResourceSchedulerSchedule#value}
  */
  readonly value?: ResourceSchedulerScheduleResourceFiltersValue[] | cdktf.IResolvable;
}

export function resourceSchedulerScheduleResourceFiltersToTerraform(struct?: ResourceSchedulerScheduleResourceFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attribute: cdktf.stringToTerraform(struct!.attribute),
    condition: cdktf.stringToTerraform(struct!.condition),
    should_include_child_compartments: cdktf.booleanToTerraform(struct!.shouldIncludeChildCompartments),
    value: cdktf.listMapper(resourceSchedulerScheduleResourceFiltersValueToTerraform, true)(struct!.value),
  }
}


export function resourceSchedulerScheduleResourceFiltersToHclTerraform(struct?: ResourceSchedulerScheduleResourceFilters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attribute: {
      value: cdktf.stringToHclTerraform(struct!.attribute),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    condition: {
      value: cdktf.stringToHclTerraform(struct!.condition),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    should_include_child_compartments: {
      value: cdktf.booleanToHclTerraform(struct!.shouldIncludeChildCompartments),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value: {
      value: cdktf.listMapperHcl(resourceSchedulerScheduleResourceFiltersValueToHclTerraform, true)(struct!.value),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceSchedulerScheduleResourceFiltersValueList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceSchedulerScheduleResourceFiltersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceSchedulerScheduleResourceFilters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attribute !== undefined) {
      hasAnyValues = true;
      internalValueResult.attribute = this._attribute;
    }
    if (this._condition !== undefined) {
      hasAnyValues = true;
      internalValueResult.condition = this._condition;
    }
    if (this._shouldIncludeChildCompartments !== undefined) {
      hasAnyValues = true;
      internalValueResult.shouldIncludeChildCompartments = this._shouldIncludeChildCompartments;
    }
    if (this._value?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceSchedulerScheduleResourceFilters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attribute = undefined;
      this._condition = undefined;
      this._shouldIncludeChildCompartments = undefined;
      this._value.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attribute = value.attribute;
      this._condition = value.condition;
      this._shouldIncludeChildCompartments = value.shouldIncludeChildCompartments;
      this._value.internalValue = value.value;
    }
  }

  // attribute - computed: false, optional: false, required: true
  private _attribute?: string; 
  public get attribute() {
    return this.getStringAttribute('attribute');
  }
  public set attribute(value: string) {
    this._attribute = value;
  }
  // Temporarily expose input value. Use with caution.
  public get attributeInput() {
    return this._attribute;
  }

  // condition - computed: true, optional: true, required: false
  private _condition?: string; 
  public get condition() {
    return this.getStringAttribute('condition');
  }
  public set condition(value: string) {
    this._condition = value;
  }
  public resetCondition() {
    this._condition = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get conditionInput() {
    return this._condition;
  }

  // should_include_child_compartments - computed: true, optional: true, required: false
  private _shouldIncludeChildCompartments?: boolean | cdktf.IResolvable; 
  public get shouldIncludeChildCompartments() {
    return this.getBooleanAttribute('should_include_child_compartments');
  }
  public set shouldIncludeChildCompartments(value: boolean | cdktf.IResolvable) {
    this._shouldIncludeChildCompartments = value;
  }
  public resetShouldIncludeChildCompartments() {
    this._shouldIncludeChildCompartments = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldIncludeChildCompartmentsInput() {
    return this._shouldIncludeChildCompartments;
  }

  // value - computed: false, optional: true, required: false
  private _value = new ResourceSchedulerScheduleResourceFiltersValueList(this, "value", false);
  public get value() {
    return this._value;
  }
  public putValue(value: ResourceSchedulerScheduleResourceFiltersValue[] | cdktf.IResolvable) {
    this._value.internalValue = value;
  }
  public resetValue() {
    this._value.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value.internalValue;
  }
}

export class ResourceSchedulerScheduleResourceFiltersList extends cdktf.ComplexList {
  public internalValue? : ResourceSchedulerScheduleResourceFilters[] | cdktf.IResolvable

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
  public get(index: number): ResourceSchedulerScheduleResourceFiltersOutputReference {
    return new ResourceSchedulerScheduleResourceFiltersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceSchedulerScheduleResourcesParameters {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#parameter_type ResourceSchedulerSchedule#parameter_type}
  */
  readonly parameterType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#value ResourceSchedulerSchedule#value}
  */
  readonly value?: string[];
}

export function resourceSchedulerScheduleResourcesParametersToTerraform(struct?: ResourceSchedulerScheduleResourcesParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    parameter_type: cdktf.stringToTerraform(struct!.parameterType),
    value: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.value),
  }
}


export function resourceSchedulerScheduleResourcesParametersToHclTerraform(struct?: ResourceSchedulerScheduleResourcesParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    parameter_type: {
      value: cdktf.stringToHclTerraform(struct!.parameterType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    value: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.value),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceSchedulerScheduleResourcesParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceSchedulerScheduleResourcesParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._parameterType !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameterType = this._parameterType;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceSchedulerScheduleResourcesParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._parameterType = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._parameterType = value.parameterType;
      this._value = value.value;
    }
  }

  // parameter_type - computed: false, optional: false, required: true
  private _parameterType?: string; 
  public get parameterType() {
    return this.getStringAttribute('parameter_type');
  }
  public set parameterType(value: string) {
    this._parameterType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get parameterTypeInput() {
    return this._parameterType;
  }

  // value - computed: true, optional: true, required: false
  private _value?: string[]; 
  public get value() {
    return this.getListAttribute('value');
  }
  public set value(value: string[]) {
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

export class ResourceSchedulerScheduleResourcesParametersList extends cdktf.ComplexList {
  public internalValue? : ResourceSchedulerScheduleResourcesParameters[] | cdktf.IResolvable

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
  public get(index: number): ResourceSchedulerScheduleResourcesParametersOutputReference {
    return new ResourceSchedulerScheduleResourcesParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceSchedulerScheduleResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#id ResourceSchedulerSchedule#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#metadata ResourceSchedulerSchedule#metadata}
  */
  readonly metadata?: { [key: string]: string };
  /**
  * parameters block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#parameters ResourceSchedulerSchedule#parameters}
  */
  readonly parameters?: ResourceSchedulerScheduleResourcesParameters[] | cdktf.IResolvable;
}

export function resourceSchedulerScheduleResourcesToTerraform(struct?: ResourceSchedulerScheduleResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    id: cdktf.stringToTerraform(struct!.id),
    metadata: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.metadata),
    parameters: cdktf.listMapper(resourceSchedulerScheduleResourcesParametersToTerraform, true)(struct!.parameters),
  }
}


export function resourceSchedulerScheduleResourcesToHclTerraform(struct?: ResourceSchedulerScheduleResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    id: {
      value: cdktf.stringToHclTerraform(struct!.id),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    metadata: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.metadata),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    parameters: {
      value: cdktf.listMapperHcl(resourceSchedulerScheduleResourcesParametersToHclTerraform, true)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "ResourceSchedulerScheduleResourcesParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ResourceSchedulerScheduleResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ResourceSchedulerScheduleResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._metadata !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ResourceSchedulerScheduleResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._id = undefined;
      this._metadata = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._id = value.id;
      this._metadata = value.metadata;
      this._parameters.internalValue = value.parameters;
    }
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

  // metadata - computed: true, optional: true, required: false
  private _metadata?: { [key: string]: string }; 
  public get metadata() {
    return this.getStringMapAttribute('metadata');
  }
  public set metadata(value: { [key: string]: string }) {
    this._metadata = value;
  }
  public resetMetadata() {
    this._metadata = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new ResourceSchedulerScheduleResourcesParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: ResourceSchedulerScheduleResourcesParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }
}

export class ResourceSchedulerScheduleResourcesList extends cdktf.ComplexList {
  public internalValue? : ResourceSchedulerScheduleResources[] | cdktf.IResolvable

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
  public get(index: number): ResourceSchedulerScheduleResourcesOutputReference {
    return new ResourceSchedulerScheduleResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ResourceSchedulerScheduleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#create ResourceSchedulerSchedule#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#delete ResourceSchedulerSchedule#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#update ResourceSchedulerSchedule#update}
  */
  readonly update?: string;
}

export function resourceSchedulerScheduleTimeoutsToTerraform(struct?: ResourceSchedulerScheduleTimeouts | cdktf.IResolvable): any {
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


export function resourceSchedulerScheduleTimeoutsToHclTerraform(struct?: ResourceSchedulerScheduleTimeouts | cdktf.IResolvable): any {
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

export class ResourceSchedulerScheduleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ResourceSchedulerScheduleTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ResourceSchedulerScheduleTimeouts | cdktf.IResolvable | undefined) {
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

  // delete - computed: false, optional: true, required: false
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

  // update - computed: false, optional: true, required: false
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule oci_resource_scheduler_schedule}
*/
export class ResourceSchedulerSchedule extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_resource_scheduler_schedule";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ResourceSchedulerSchedule resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ResourceSchedulerSchedule to import
  * @param importFromId The id of the existing ResourceSchedulerSchedule that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ResourceSchedulerSchedule to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_resource_scheduler_schedule", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/resource_scheduler_schedule oci_resource_scheduler_schedule} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ResourceSchedulerScheduleConfig
  */
  public constructor(scope: Construct, id: string, config: ResourceSchedulerScheduleConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_resource_scheduler_schedule',
      terraformGeneratorMetadata: {
        providerName: 'oci',
        providerVersion: '7.29.0',
        providerVersionConstraint: '7.29.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._action = config.action;
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._recurrenceDetails = config.recurrenceDetails;
    this._recurrenceType = config.recurrenceType;
    this._state = config.state;
    this._timeEnds = config.timeEnds;
    this._timeStarts = config.timeStarts;
    this._resourceFilters.internalValue = config.resourceFilters;
    this._resources.internalValue = config.resources;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // compartment_id - computed: false, optional: false, required: true
  private _compartmentId?: string; 
  public get compartmentId() {
    return this.getStringAttribute('compartment_id');
  }
  public set compartmentId(value: string) {
    this._compartmentId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compartmentIdInput() {
    return this._compartmentId;
  }

  // defined_tags - computed: true, optional: true, required: false
  private _definedTags?: { [key: string]: string }; 
  public get definedTags() {
    return this.getStringMapAttribute('defined_tags');
  }
  public set definedTags(value: { [key: string]: string }) {
    this._definedTags = value;
  }
  public resetDefinedTags() {
    this._definedTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get definedTagsInput() {
    return this._definedTags;
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

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // freeform_tags - computed: true, optional: true, required: false
  private _freeformTags?: { [key: string]: string }; 
  public get freeformTags() {
    return this.getStringMapAttribute('freeform_tags');
  }
  public set freeformTags(value: { [key: string]: string }) {
    this._freeformTags = value;
  }
  public resetFreeformTags() {
    this._freeformTags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get freeformTagsInput() {
    return this._freeformTags;
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

  // last_run_status - computed: true, optional: false, required: false
  public get lastRunStatus() {
    return this.getStringAttribute('last_run_status');
  }

  // recurrence_details - computed: false, optional: false, required: true
  private _recurrenceDetails?: string; 
  public get recurrenceDetails() {
    return this.getStringAttribute('recurrence_details');
  }
  public set recurrenceDetails(value: string) {
    this._recurrenceDetails = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceDetailsInput() {
    return this._recurrenceDetails;
  }

  // recurrence_type - computed: false, optional: false, required: true
  private _recurrenceType?: string; 
  public get recurrenceType() {
    return this.getStringAttribute('recurrence_type');
  }
  public set recurrenceType(value: string) {
    this._recurrenceType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recurrenceTypeInput() {
    return this._recurrenceType;
  }

  // state - computed: true, optional: true, required: false
  private _state?: string; 
  public get state() {
    return this.getStringAttribute('state');
  }
  public set state(value: string) {
    this._state = value;
  }
  public resetState() {
    this._state = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stateInput() {
    return this._state;
  }

  // system_tags - computed: true, optional: false, required: false
  private _systemTags = new cdktf.StringMap(this, "system_tags");
  public get systemTags() {
    return this._systemTags;
  }

  // time_created - computed: true, optional: false, required: false
  public get timeCreated() {
    return this.getStringAttribute('time_created');
  }

  // time_ends - computed: true, optional: true, required: false
  private _timeEnds?: string; 
  public get timeEnds() {
    return this.getStringAttribute('time_ends');
  }
  public set timeEnds(value: string) {
    this._timeEnds = value;
  }
  public resetTimeEnds() {
    this._timeEnds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeEndsInput() {
    return this._timeEnds;
  }

  // time_last_run - computed: true, optional: false, required: false
  public get timeLastRun() {
    return this.getStringAttribute('time_last_run');
  }

  // time_next_run - computed: true, optional: false, required: false
  public get timeNextRun() {
    return this.getStringAttribute('time_next_run');
  }

  // time_starts - computed: true, optional: true, required: false
  private _timeStarts?: string; 
  public get timeStarts() {
    return this.getStringAttribute('time_starts');
  }
  public set timeStarts(value: string) {
    this._timeStarts = value;
  }
  public resetTimeStarts() {
    this._timeStarts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeStartsInput() {
    return this._timeStarts;
  }

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // resource_filters - computed: false, optional: true, required: false
  private _resourceFilters = new ResourceSchedulerScheduleResourceFiltersList(this, "resource_filters", false);
  public get resourceFilters() {
    return this._resourceFilters;
  }
  public putResourceFilters(value: ResourceSchedulerScheduleResourceFilters[] | cdktf.IResolvable) {
    this._resourceFilters.internalValue = value;
  }
  public resetResourceFilters() {
    this._resourceFilters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceFiltersInput() {
    return this._resourceFilters.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new ResourceSchedulerScheduleResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: ResourceSchedulerScheduleResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ResourceSchedulerScheduleTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ResourceSchedulerScheduleTimeouts) {
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
      action: cdktf.stringToTerraform(this._action),
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      recurrence_details: cdktf.stringToTerraform(this._recurrenceDetails),
      recurrence_type: cdktf.stringToTerraform(this._recurrenceType),
      state: cdktf.stringToTerraform(this._state),
      time_ends: cdktf.stringToTerraform(this._timeEnds),
      time_starts: cdktf.stringToTerraform(this._timeStarts),
      resource_filters: cdktf.listMapper(resourceSchedulerScheduleResourceFiltersToTerraform, true)(this._resourceFilters.internalValue),
      resources: cdktf.listMapper(resourceSchedulerScheduleResourcesToTerraform, true)(this._resources.internalValue),
      timeouts: resourceSchedulerScheduleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      action: {
        value: cdktf.stringToHclTerraform(this._action),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      compartment_id: {
        value: cdktf.stringToHclTerraform(this._compartmentId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      defined_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._definedTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      description: {
        value: cdktf.stringToHclTerraform(this._description),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      display_name: {
        value: cdktf.stringToHclTerraform(this._displayName),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      freeform_tags: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._freeformTags),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
      },
      id: {
        value: cdktf.stringToHclTerraform(this._id),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recurrence_details: {
        value: cdktf.stringToHclTerraform(this._recurrenceDetails),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      recurrence_type: {
        value: cdktf.stringToHclTerraform(this._recurrenceType),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_ends: {
        value: cdktf.stringToHclTerraform(this._timeEnds),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      time_starts: {
        value: cdktf.stringToHclTerraform(this._timeStarts),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      resource_filters: {
        value: cdktf.listMapperHcl(resourceSchedulerScheduleResourceFiltersToHclTerraform, true)(this._resourceFilters.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceSchedulerScheduleResourceFiltersList",
      },
      resources: {
        value: cdktf.listMapperHcl(resourceSchedulerScheduleResourcesToHclTerraform, true)(this._resources.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ResourceSchedulerScheduleResourcesList",
      },
      timeouts: {
        value: resourceSchedulerScheduleTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ResourceSchedulerScheduleTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
