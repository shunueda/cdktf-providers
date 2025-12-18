// https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface BatchBatchContextConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#compartment_id BatchBatchContext#compartment_id}
  */
  readonly compartmentId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#defined_tags BatchBatchContext#defined_tags}
  */
  readonly definedTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#description BatchBatchContext#description}
  */
  readonly description?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#display_name BatchBatchContext#display_name}
  */
  readonly displayName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#entitlements BatchBatchContext#entitlements}
  */
  readonly entitlements?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#freeform_tags BatchBatchContext#freeform_tags}
  */
  readonly freeformTags?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#id BatchBatchContext#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#state BatchBatchContext#state}
  */
  readonly state?: string;
  /**
  * fleets block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#fleets BatchBatchContext#fleets}
  */
  readonly fleets: BatchBatchContextFleets[] | cdktf.IResolvable;
  /**
  * job_priority_configurations block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#job_priority_configurations BatchBatchContext#job_priority_configurations}
  */
  readonly jobPriorityConfigurations?: BatchBatchContextJobPriorityConfigurations[] | cdktf.IResolvable;
  /**
  * logging_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#logging_configuration BatchBatchContext#logging_configuration}
  */
  readonly loggingConfiguration?: BatchBatchContextLoggingConfiguration;
  /**
  * network block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#network BatchBatchContext#network}
  */
  readonly network: BatchBatchContextNetwork;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#timeouts BatchBatchContext#timeouts}
  */
  readonly timeouts?: BatchBatchContextTimeouts;
}
export interface BatchBatchContextFleetsShape {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#memory_in_gbs BatchBatchContext#memory_in_gbs}
  */
  readonly memoryInGbs: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#ocpus BatchBatchContext#ocpus}
  */
  readonly ocpus: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#shape_name BatchBatchContext#shape_name}
  */
  readonly shapeName: string;
}

export function batchBatchContextFleetsShapeToTerraform(struct?: BatchBatchContextFleetsShapeOutputReference | BatchBatchContextFleetsShape): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    memory_in_gbs: cdktf.numberToTerraform(struct!.memoryInGbs),
    ocpus: cdktf.numberToTerraform(struct!.ocpus),
    shape_name: cdktf.stringToTerraform(struct!.shapeName),
  }
}


export function batchBatchContextFleetsShapeToHclTerraform(struct?: BatchBatchContextFleetsShapeOutputReference | BatchBatchContextFleetsShape): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    memory_in_gbs: {
      value: cdktf.numberToHclTerraform(struct!.memoryInGbs),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    ocpus: {
      value: cdktf.numberToHclTerraform(struct!.ocpus),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    shape_name: {
      value: cdktf.stringToHclTerraform(struct!.shapeName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchBatchContextFleetsShapeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchBatchContextFleetsShape | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._memoryInGbs !== undefined) {
      hasAnyValues = true;
      internalValueResult.memoryInGbs = this._memoryInGbs;
    }
    if (this._ocpus !== undefined) {
      hasAnyValues = true;
      internalValueResult.ocpus = this._ocpus;
    }
    if (this._shapeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.shapeName = this._shapeName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchBatchContextFleetsShape | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._memoryInGbs = undefined;
      this._ocpus = undefined;
      this._shapeName = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._memoryInGbs = value.memoryInGbs;
      this._ocpus = value.ocpus;
      this._shapeName = value.shapeName;
    }
  }

  // memory_in_gbs - computed: false, optional: false, required: true
  private _memoryInGbs?: number; 
  public get memoryInGbs() {
    return this.getNumberAttribute('memory_in_gbs');
  }
  public set memoryInGbs(value: number) {
    this._memoryInGbs = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memoryInGbsInput() {
    return this._memoryInGbs;
  }

  // ocpus - computed: false, optional: false, required: true
  private _ocpus?: number; 
  public get ocpus() {
    return this.getNumberAttribute('ocpus');
  }
  public set ocpus(value: number) {
    this._ocpus = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ocpusInput() {
    return this._ocpus;
  }

  // shape_name - computed: false, optional: false, required: true
  private _shapeName?: string; 
  public get shapeName() {
    return this.getStringAttribute('shape_name');
  }
  public set shapeName(value: string) {
    this._shapeName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeNameInput() {
    return this._shapeName;
  }
}
export interface BatchBatchContextFleets {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#max_concurrent_tasks BatchBatchContext#max_concurrent_tasks}
  */
  readonly maxConcurrentTasks: number;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#name BatchBatchContext#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#type BatchBatchContext#type}
  */
  readonly type: string;
  /**
  * shape block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#shape BatchBatchContext#shape}
  */
  readonly shape: BatchBatchContextFleetsShape;
}

export function batchBatchContextFleetsToTerraform(struct?: BatchBatchContextFleets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    max_concurrent_tasks: cdktf.numberToTerraform(struct!.maxConcurrentTasks),
    name: cdktf.stringToTerraform(struct!.name),
    type: cdktf.stringToTerraform(struct!.type),
    shape: batchBatchContextFleetsShapeToTerraform(struct!.shape),
  }
}


export function batchBatchContextFleetsToHclTerraform(struct?: BatchBatchContextFleets | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    max_concurrent_tasks: {
      value: cdktf.numberToHclTerraform(struct!.maxConcurrentTasks),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
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
    shape: {
      value: batchBatchContextFleetsShapeToHclTerraform(struct!.shape),
      isBlock: true,
      type: "list",
      storageClassType: "BatchBatchContextFleetsShapeList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchBatchContextFleetsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BatchBatchContextFleets | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._maxConcurrentTasks !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxConcurrentTasks = this._maxConcurrentTasks;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._shape?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shape = this._shape?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchBatchContextFleets | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._maxConcurrentTasks = undefined;
      this._name = undefined;
      this._type = undefined;
      this._shape.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._maxConcurrentTasks = value.maxConcurrentTasks;
      this._name = value.name;
      this._type = value.type;
      this._shape.internalValue = value.shape;
    }
  }

  // details - computed: true, optional: false, required: false
  public get details() {
    return this.getStringAttribute('details');
  }

  // max_concurrent_tasks - computed: false, optional: false, required: true
  private _maxConcurrentTasks?: number; 
  public get maxConcurrentTasks() {
    return this.getNumberAttribute('max_concurrent_tasks');
  }
  public set maxConcurrentTasks(value: number) {
    this._maxConcurrentTasks = value;
  }
  // Temporarily expose input value. Use with caution.
  public get maxConcurrentTasksInput() {
    return this._maxConcurrentTasks;
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

  // state - computed: true, optional: false, required: false
  public get state() {
    return this.getStringAttribute('state');
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

  // shape - computed: false, optional: false, required: true
  private _shape = new BatchBatchContextFleetsShapeOutputReference(this, "shape");
  public get shape() {
    return this._shape;
  }
  public putShape(value: BatchBatchContextFleetsShape) {
    this._shape.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shapeInput() {
    return this._shape.internalValue;
  }
}

export class BatchBatchContextFleetsList extends cdktf.ComplexList {
  public internalValue? : BatchBatchContextFleets[] | cdktf.IResolvable

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
  public get(index: number): BatchBatchContextFleetsOutputReference {
    return new BatchBatchContextFleetsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchBatchContextJobPriorityConfigurations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#tag_key BatchBatchContext#tag_key}
  */
  readonly tagKey: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#tag_namespace BatchBatchContext#tag_namespace}
  */
  readonly tagNamespace: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#values BatchBatchContext#values}
  */
  readonly values: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#weight BatchBatchContext#weight}
  */
  readonly weight: number;
}

export function batchBatchContextJobPriorityConfigurationsToTerraform(struct?: BatchBatchContextJobPriorityConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    tag_key: cdktf.stringToTerraform(struct!.tagKey),
    tag_namespace: cdktf.stringToTerraform(struct!.tagNamespace),
    values: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.values),
    weight: cdktf.numberToTerraform(struct!.weight),
  }
}


export function batchBatchContextJobPriorityConfigurationsToHclTerraform(struct?: BatchBatchContextJobPriorityConfigurations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    tag_key: {
      value: cdktf.stringToHclTerraform(struct!.tagKey),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_namespace: {
      value: cdktf.stringToHclTerraform(struct!.tagNamespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.values),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    weight: {
      value: cdktf.numberToHclTerraform(struct!.weight),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchBatchContextJobPriorityConfigurationsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): BatchBatchContextJobPriorityConfigurations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._tagKey !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagKey = this._tagKey;
    }
    if (this._tagNamespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagNamespace = this._tagNamespace;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._weight !== undefined) {
      hasAnyValues = true;
      internalValueResult.weight = this._weight;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchBatchContextJobPriorityConfigurations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._tagKey = undefined;
      this._tagNamespace = undefined;
      this._values = undefined;
      this._weight = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._tagKey = value.tagKey;
      this._tagNamespace = value.tagNamespace;
      this._values = value.values;
      this._weight = value.weight;
    }
  }

  // tag_key - computed: false, optional: false, required: true
  private _tagKey?: string; 
  public get tagKey() {
    return this.getStringAttribute('tag_key');
  }
  public set tagKey(value: string) {
    this._tagKey = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagKeyInput() {
    return this._tagKey;
  }

  // tag_namespace - computed: false, optional: false, required: true
  private _tagNamespace?: string; 
  public get tagNamespace() {
    return this.getStringAttribute('tag_namespace');
  }
  public set tagNamespace(value: string) {
    this._tagNamespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tagNamespaceInput() {
    return this._tagNamespace;
  }

  // values - computed: false, optional: false, required: true
  private _values?: { [key: string]: string }; 
  public get values() {
    return this.getStringMapAttribute('values');
  }
  public set values(value: { [key: string]: string }) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // weight - computed: false, optional: false, required: true
  private _weight?: number; 
  public get weight() {
    return this.getNumberAttribute('weight');
  }
  public set weight(value: number) {
    this._weight = value;
  }
  // Temporarily expose input value. Use with caution.
  public get weightInput() {
    return this._weight;
  }
}

export class BatchBatchContextJobPriorityConfigurationsList extends cdktf.ComplexList {
  public internalValue? : BatchBatchContextJobPriorityConfigurations[] | cdktf.IResolvable

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
  public get(index: number): BatchBatchContextJobPriorityConfigurationsOutputReference {
    return new BatchBatchContextJobPriorityConfigurationsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchBatchContextLoggingConfiguration {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#log_group_id BatchBatchContext#log_group_id}
  */
  readonly logGroupId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#log_id BatchBatchContext#log_id}
  */
  readonly logId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#type BatchBatchContext#type}
  */
  readonly type: string;
}

export function batchBatchContextLoggingConfigurationToTerraform(struct?: BatchBatchContextLoggingConfigurationOutputReference | BatchBatchContextLoggingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    log_group_id: cdktf.stringToTerraform(struct!.logGroupId),
    log_id: cdktf.stringToTerraform(struct!.logId),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function batchBatchContextLoggingConfigurationToHclTerraform(struct?: BatchBatchContextLoggingConfigurationOutputReference | BatchBatchContextLoggingConfiguration): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    log_group_id: {
      value: cdktf.stringToHclTerraform(struct!.logGroupId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    log_id: {
      value: cdktf.stringToHclTerraform(struct!.logId),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchBatchContextLoggingConfigurationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchBatchContextLoggingConfiguration | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._logGroupId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logGroupId = this._logGroupId;
    }
    if (this._logId !== undefined) {
      hasAnyValues = true;
      internalValueResult.logId = this._logId;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchBatchContextLoggingConfiguration | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._logGroupId = undefined;
      this._logId = undefined;
      this._type = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._logGroupId = value.logGroupId;
      this._logId = value.logId;
      this._type = value.type;
    }
  }

  // log_group_id - computed: false, optional: false, required: true
  private _logGroupId?: string; 
  public get logGroupId() {
    return this.getStringAttribute('log_group_id');
  }
  public set logGroupId(value: string) {
    this._logGroupId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logGroupIdInput() {
    return this._logGroupId;
  }

  // log_id - computed: false, optional: false, required: true
  private _logId?: string; 
  public get logId() {
    return this.getStringAttribute('log_id');
  }
  public set logId(value: string) {
    this._logId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get logIdInput() {
    return this._logId;
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
}
export interface BatchBatchContextNetworkVnics {
}

export function batchBatchContextNetworkVnicsToTerraform(struct?: BatchBatchContextNetworkVnics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
  }
}


export function batchBatchContextNetworkVnicsToHclTerraform(struct?: BatchBatchContextNetworkVnics): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
  };
  return attrs;
}

export class BatchBatchContextNetworkVnicsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param complexObjectIndex the index of this item in the list
  * @param complexObjectIsFromSet whether the list is wrapping a set (will add tolist() to be able to access an item via an index)
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, complexObjectIndex: number, complexObjectIsFromSet: boolean) {
    super(terraformResource, terraformAttribute, complexObjectIsFromSet, complexObjectIndex);
  }

  public get internalValue(): BatchBatchContextNetworkVnics | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchBatchContextNetworkVnics | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
    }
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // source_ips - computed: true, optional: false, required: false
  public get sourceIps() {
    return this.getListAttribute('source_ips');
  }
}

export class BatchBatchContextNetworkVnicsList extends cdktf.ComplexList {

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
  public get(index: number): BatchBatchContextNetworkVnicsOutputReference {
    return new BatchBatchContextNetworkVnicsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface BatchBatchContextNetwork {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#nsg_ids BatchBatchContext#nsg_ids}
  */
  readonly nsgIds?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#subnet_id BatchBatchContext#subnet_id}
  */
  readonly subnetId: string;
}

export function batchBatchContextNetworkToTerraform(struct?: BatchBatchContextNetworkOutputReference | BatchBatchContextNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    nsg_ids: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nsgIds),
    subnet_id: cdktf.stringToTerraform(struct!.subnetId),
  }
}


export function batchBatchContextNetworkToHclTerraform(struct?: BatchBatchContextNetworkOutputReference | BatchBatchContextNetwork): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    nsg_ids: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nsgIds),
      isBlock: false,
      type: "set",
      storageClassType: "stringList",
    },
    subnet_id: {
      value: cdktf.stringToHclTerraform(struct!.subnetId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class BatchBatchContextNetworkOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): BatchBatchContextNetwork | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._nsgIds !== undefined) {
      hasAnyValues = true;
      internalValueResult.nsgIds = this._nsgIds;
    }
    if (this._subnetId !== undefined) {
      hasAnyValues = true;
      internalValueResult.subnetId = this._subnetId;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: BatchBatchContextNetwork | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._nsgIds = undefined;
      this._subnetId = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._nsgIds = value.nsgIds;
      this._subnetId = value.subnetId;
    }
  }

  // nsg_ids - computed: true, optional: true, required: false
  private _nsgIds?: string[]; 
  public get nsgIds() {
    return cdktf.Fn.tolist(this.getListAttribute('nsg_ids'));
  }
  public set nsgIds(value: string[]) {
    this._nsgIds = value;
  }
  public resetNsgIds() {
    this._nsgIds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nsgIdsInput() {
    return this._nsgIds;
  }

  // subnet_id - computed: false, optional: false, required: true
  private _subnetId?: string; 
  public get subnetId() {
    return this.getStringAttribute('subnet_id');
  }
  public set subnetId(value: string) {
    this._subnetId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get subnetIdInput() {
    return this._subnetId;
  }

  // vnics - computed: true, optional: false, required: false
  private _vnics = new BatchBatchContextNetworkVnicsList(this, "vnics", false);
  public get vnics() {
    return this._vnics;
  }
}
export interface BatchBatchContextTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#create BatchBatchContext#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#delete BatchBatchContext#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#update BatchBatchContext#update}
  */
  readonly update?: string;
}

export function batchBatchContextTimeoutsToTerraform(struct?: BatchBatchContextTimeouts | cdktf.IResolvable): any {
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


export function batchBatchContextTimeoutsToHclTerraform(struct?: BatchBatchContextTimeouts | cdktf.IResolvable): any {
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

export class BatchBatchContextTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): BatchBatchContextTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: BatchBatchContextTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context oci_batch_batch_context}
*/
export class BatchBatchContext extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "oci_batch_batch_context";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a BatchBatchContext resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the BatchBatchContext to import
  * @param importFromId The id of the existing BatchBatchContext that should be imported. Refer to the {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the BatchBatchContext to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "oci_batch_batch_context", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/oracle/oci/7.29.0/docs/resources/batch_batch_context oci_batch_batch_context} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options BatchBatchContextConfig
  */
  public constructor(scope: Construct, id: string, config: BatchBatchContextConfig) {
    super(scope, id, {
      terraformResourceType: 'oci_batch_batch_context',
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
    this._compartmentId = config.compartmentId;
    this._definedTags = config.definedTags;
    this._description = config.description;
    this._displayName = config.displayName;
    this._entitlements = config.entitlements;
    this._freeformTags = config.freeformTags;
    this._id = config.id;
    this._state = config.state;
    this._fleets.internalValue = config.fleets;
    this._jobPriorityConfigurations.internalValue = config.jobPriorityConfigurations;
    this._loggingConfiguration.internalValue = config.loggingConfiguration;
    this._network.internalValue = config.network;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

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

  // entitlements - computed: true, optional: true, required: false
  private _entitlements?: { [key: string]: string }; 
  public get entitlements() {
    return this.getStringMapAttribute('entitlements');
  }
  public set entitlements(value: { [key: string]: string }) {
    this._entitlements = value;
  }
  public resetEntitlements() {
    this._entitlements = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entitlementsInput() {
    return this._entitlements;
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

  // lifecycle_details - computed: true, optional: false, required: false
  public get lifecycleDetails() {
    return this.getStringAttribute('lifecycle_details');
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

  // time_updated - computed: true, optional: false, required: false
  public get timeUpdated() {
    return this.getStringAttribute('time_updated');
  }

  // fleets - computed: false, optional: false, required: true
  private _fleets = new BatchBatchContextFleetsList(this, "fleets", false);
  public get fleets() {
    return this._fleets;
  }
  public putFleets(value: BatchBatchContextFleets[] | cdktf.IResolvable) {
    this._fleets.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get fleetsInput() {
    return this._fleets.internalValue;
  }

  // job_priority_configurations - computed: false, optional: true, required: false
  private _jobPriorityConfigurations = new BatchBatchContextJobPriorityConfigurationsList(this, "job_priority_configurations", false);
  public get jobPriorityConfigurations() {
    return this._jobPriorityConfigurations;
  }
  public putJobPriorityConfigurations(value: BatchBatchContextJobPriorityConfigurations[] | cdktf.IResolvable) {
    this._jobPriorityConfigurations.internalValue = value;
  }
  public resetJobPriorityConfigurations() {
    this._jobPriorityConfigurations.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jobPriorityConfigurationsInput() {
    return this._jobPriorityConfigurations.internalValue;
  }

  // logging_configuration - computed: false, optional: true, required: false
  private _loggingConfiguration = new BatchBatchContextLoggingConfigurationOutputReference(this, "logging_configuration");
  public get loggingConfiguration() {
    return this._loggingConfiguration;
  }
  public putLoggingConfiguration(value: BatchBatchContextLoggingConfiguration) {
    this._loggingConfiguration.internalValue = value;
  }
  public resetLoggingConfiguration() {
    this._loggingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loggingConfigurationInput() {
    return this._loggingConfiguration.internalValue;
  }

  // network - computed: false, optional: false, required: true
  private _network = new BatchBatchContextNetworkOutputReference(this, "network");
  public get network() {
    return this._network;
  }
  public putNetwork(value: BatchBatchContextNetwork) {
    this._network.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get networkInput() {
    return this._network.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new BatchBatchContextTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: BatchBatchContextTimeouts) {
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
      compartment_id: cdktf.stringToTerraform(this._compartmentId),
      defined_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._definedTags),
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      entitlements: cdktf.hashMapper(cdktf.stringToTerraform)(this._entitlements),
      freeform_tags: cdktf.hashMapper(cdktf.stringToTerraform)(this._freeformTags),
      id: cdktf.stringToTerraform(this._id),
      state: cdktf.stringToTerraform(this._state),
      fleets: cdktf.listMapper(batchBatchContextFleetsToTerraform, true)(this._fleets.internalValue),
      job_priority_configurations: cdktf.listMapper(batchBatchContextJobPriorityConfigurationsToTerraform, true)(this._jobPriorityConfigurations.internalValue),
      logging_configuration: batchBatchContextLoggingConfigurationToTerraform(this._loggingConfiguration.internalValue),
      network: batchBatchContextNetworkToTerraform(this._network.internalValue),
      timeouts: batchBatchContextTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
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
      entitlements: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._entitlements),
        isBlock: false,
        type: "map",
        storageClassType: "stringMap",
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
      state: {
        value: cdktf.stringToHclTerraform(this._state),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      fleets: {
        value: cdktf.listMapperHcl(batchBatchContextFleetsToHclTerraform, true)(this._fleets.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchBatchContextFleetsList",
      },
      job_priority_configurations: {
        value: cdktf.listMapperHcl(batchBatchContextJobPriorityConfigurationsToHclTerraform, true)(this._jobPriorityConfigurations.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchBatchContextJobPriorityConfigurationsList",
      },
      logging_configuration: {
        value: batchBatchContextLoggingConfigurationToHclTerraform(this._loggingConfiguration.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchBatchContextLoggingConfigurationList",
      },
      network: {
        value: batchBatchContextNetworkToHclTerraform(this._network.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "BatchBatchContextNetworkList",
      },
      timeouts: {
        value: batchBatchContextTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "BatchBatchContextTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
