// https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface NodeTemplateConfig extends cdktf.TerraformMetaArguments {
  /**
  * Marks whether CLM should be enabled for nodes created from this template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#clm_enabled NodeTemplate#clm_enabled}
  */
  readonly clmEnabled?: boolean | cdktf.IResolvable;
  /**
  * CAST AI cluster id.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#cluster_id NodeTemplate#cluster_id}
  */
  readonly clusterId?: string;
  /**
  * CAST AI node configuration id to be used for node template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#configuration_id NodeTemplate#configuration_id}
  */
  readonly configurationId?: string;
  /**
  * Marks whether custom instances should be used when deciding which parts of inventory are available. Custom instances are only supported in GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#custom_instances_enabled NodeTemplate#custom_instances_enabled}
  */
  readonly customInstancesEnabled?: boolean | cdktf.IResolvable;
  /**
  * Marks whether custom instances with extended memory should be used when deciding which parts of inventory are available. Custom instances are only supported in GCP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#custom_instances_with_extended_memory_enabled NodeTemplate#custom_instances_with_extended_memory_enabled}
  */
  readonly customInstancesWithExtendedMemoryEnabled?: boolean | cdktf.IResolvable;
  /**
  * Custom labels to be added to nodes created from this template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#custom_labels NodeTemplate#custom_labels}
  */
  readonly customLabels?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#id NodeTemplate#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Flag whether the node template is default.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#is_default NodeTemplate#is_default}
  */
  readonly isDefault?: boolean | cdktf.IResolvable;
  /**
  * Flag whether the node template is enabled and considered for autoscaling.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#is_enabled NodeTemplate#is_enabled}
  */
  readonly isEnabled?: boolean | cdktf.IResolvable;
  /**
  * Name of the node template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#name NodeTemplate#name}
  */
  readonly name: string;
  /**
  * Minimum nodes that will be kept when rebalancing nodes using this node template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#rebalancing_config_min_nodes NodeTemplate#rebalancing_config_min_nodes}
  */
  readonly rebalancingConfigMinNodes?: number;
  /**
  * Marks whether the templated nodes will have a taint.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#should_taint NodeTemplate#should_taint}
  */
  readonly shouldTaint?: boolean | cdktf.IResolvable;
  /**
  * constraints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#constraints NodeTemplate#constraints}
  */
  readonly constraints?: NodeTemplateConstraints;
  /**
  * custom_taints block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#custom_taints NodeTemplate#custom_taints}
  */
  readonly customTaints?: NodeTemplateCustomTaints[] | cdktf.IResolvable;
  /**
  * gpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#gpu NodeTemplate#gpu}
  */
  readonly gpu?: NodeTemplateGpu;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#timeouts NodeTemplate#timeouts}
  */
  readonly timeouts?: NodeTemplateTimeouts;
}
export interface NodeTemplateConstraintsCustomPriority {
  /**
  * Instance families to prioritize in this tier.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#instance_families NodeTemplate#instance_families}
  */
  readonly instanceFamilies?: string[];
  /**
  * If true, this tier will apply to on-demand instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#on_demand NodeTemplate#on_demand}
  */
  readonly onDemand?: boolean | cdktf.IResolvable;
  /**
  * If true, this tier will apply to spot instances.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#spot NodeTemplate#spot}
  */
  readonly spot?: boolean | cdktf.IResolvable;
}

export function nodeTemplateConstraintsCustomPriorityToTerraform(struct?: NodeTemplateConstraintsCustomPriority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    instance_families: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instanceFamilies),
    on_demand: cdktf.booleanToTerraform(struct!.onDemand),
    spot: cdktf.booleanToTerraform(struct!.spot),
  }
}


export function nodeTemplateConstraintsCustomPriorityToHclTerraform(struct?: NodeTemplateConstraintsCustomPriority | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    instance_families: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instanceFamilies),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    on_demand: {
      value: cdktf.booleanToHclTerraform(struct!.onDemand),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    spot: {
      value: cdktf.booleanToHclTerraform(struct!.spot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeTemplateConstraintsCustomPriorityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NodeTemplateConstraintsCustomPriority | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._instanceFamilies !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceFamilies = this._instanceFamilies;
    }
    if (this._onDemand !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemand = this._onDemand;
    }
    if (this._spot !== undefined) {
      hasAnyValues = true;
      internalValueResult.spot = this._spot;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeTemplateConstraintsCustomPriority | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._instanceFamilies = undefined;
      this._onDemand = undefined;
      this._spot = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._instanceFamilies = value.instanceFamilies;
      this._onDemand = value.onDemand;
      this._spot = value.spot;
    }
  }

  // instance_families - computed: false, optional: true, required: false
  private _instanceFamilies?: string[]; 
  public get instanceFamilies() {
    return this.getListAttribute('instance_families');
  }
  public set instanceFamilies(value: string[]) {
    this._instanceFamilies = value;
  }
  public resetInstanceFamilies() {
    this._instanceFamilies = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceFamiliesInput() {
    return this._instanceFamilies;
  }

  // on_demand - computed: false, optional: true, required: false
  private _onDemand?: boolean | cdktf.IResolvable; 
  public get onDemand() {
    return this.getBooleanAttribute('on_demand');
  }
  public set onDemand(value: boolean | cdktf.IResolvable) {
    this._onDemand = value;
  }
  public resetOnDemand() {
    this._onDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandInput() {
    return this._onDemand;
  }

  // spot - computed: false, optional: true, required: false
  private _spot?: boolean | cdktf.IResolvable; 
  public get spot() {
    return this.getBooleanAttribute('spot');
  }
  public set spot(value: boolean | cdktf.IResolvable) {
    this._spot = value;
  }
  public resetSpot() {
    this._spot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInput() {
    return this._spot;
  }
}

export class NodeTemplateConstraintsCustomPriorityList extends cdktf.ComplexList {
  public internalValue? : NodeTemplateConstraintsCustomPriority[] | cdktf.IResolvable

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
  public get(index: number): NodeTemplateConstraintsCustomPriorityOutputReference {
    return new NodeTemplateConstraintsCustomPriorityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NodeTemplateConstraintsDedicatedNodeAffinityAffinity {
  /**
  * Key of the node affinity selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#key NodeTemplate#key}
  */
  readonly key: string;
  /**
  * Operator of the node affinity selector. Allowed values: In, NotIn, Exists, DoesNotExist, Gt, Lt.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#operator NodeTemplate#operator}
  */
  readonly operator: string;
  /**
  * Values of the node affinity selector.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#values NodeTemplate#values}
  */
  readonly values: string[];
}

export function nodeTemplateConstraintsDedicatedNodeAffinityAffinityToTerraform(struct?: NodeTemplateConstraintsDedicatedNodeAffinityAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    operator: cdktf.stringToTerraform(struct!.operator),
    values: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.values),
  }
}


export function nodeTemplateConstraintsDedicatedNodeAffinityAffinityToHclTerraform(struct?: NodeTemplateConstraintsDedicatedNodeAffinityAffinity | cdktf.IResolvable): any {
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
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
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

export class NodeTemplateConstraintsDedicatedNodeAffinityAffinityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NodeTemplateConstraintsDedicatedNodeAffinityAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._key !== undefined) {
      hasAnyValues = true;
      internalValueResult.key = this._key;
    }
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeTemplateConstraintsDedicatedNodeAffinityAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._key = undefined;
      this._operator = undefined;
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
      this._operator = value.operator;
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

  // operator - computed: false, optional: false, required: true
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // values - computed: false, optional: false, required: true
  private _values?: string[]; 
  public get values() {
    return this.getListAttribute('values');
  }
  public set values(value: string[]) {
    this._values = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }
}

export class NodeTemplateConstraintsDedicatedNodeAffinityAffinityList extends cdktf.ComplexList {
  public internalValue? : NodeTemplateConstraintsDedicatedNodeAffinityAffinity[] | cdktf.IResolvable

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
  public get(index: number): NodeTemplateConstraintsDedicatedNodeAffinityAffinityOutputReference {
    return new NodeTemplateConstraintsDedicatedNodeAffinityAffinityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NodeTemplateConstraintsDedicatedNodeAffinity {
  /**
  * Availability zone name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#az_name NodeTemplate#az_name}
  */
  readonly azName: string;
  /**
  * Instance/node types in this node group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#instance_types NodeTemplate#instance_types}
  */
  readonly instanceTypes: string[];
  /**
  * Name of node group.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#name NodeTemplate#name}
  */
  readonly name: string;
  /**
  * affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#affinity NodeTemplate#affinity}
  */
  readonly affinity?: NodeTemplateConstraintsDedicatedNodeAffinityAffinity[] | cdktf.IResolvable;
}

export function nodeTemplateConstraintsDedicatedNodeAffinityToTerraform(struct?: NodeTemplateConstraintsDedicatedNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    az_name: cdktf.stringToTerraform(struct!.azName),
    instance_types: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.instanceTypes),
    name: cdktf.stringToTerraform(struct!.name),
    affinity: cdktf.listMapper(nodeTemplateConstraintsDedicatedNodeAffinityAffinityToTerraform, true)(struct!.affinity),
  }
}


export function nodeTemplateConstraintsDedicatedNodeAffinityToHclTerraform(struct?: NodeTemplateConstraintsDedicatedNodeAffinity | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    az_name: {
      value: cdktf.stringToHclTerraform(struct!.azName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    instance_types: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.instanceTypes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    affinity: {
      value: cdktf.listMapperHcl(nodeTemplateConstraintsDedicatedNodeAffinityAffinityToHclTerraform, true)(struct!.affinity),
      isBlock: true,
      type: "list",
      storageClassType: "NodeTemplateConstraintsDedicatedNodeAffinityAffinityList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeTemplateConstraintsDedicatedNodeAffinityOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NodeTemplateConstraintsDedicatedNodeAffinity | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._azName !== undefined) {
      hasAnyValues = true;
      internalValueResult.azName = this._azName;
    }
    if (this._instanceTypes !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceTypes = this._instanceTypes;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._affinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.affinity = this._affinity?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeTemplateConstraintsDedicatedNodeAffinity | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._azName = undefined;
      this._instanceTypes = undefined;
      this._name = undefined;
      this._affinity.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._azName = value.azName;
      this._instanceTypes = value.instanceTypes;
      this._name = value.name;
      this._affinity.internalValue = value.affinity;
    }
  }

  // az_name - computed: false, optional: false, required: true
  private _azName?: string; 
  public get azName() {
    return this.getStringAttribute('az_name');
  }
  public set azName(value: string) {
    this._azName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get azNameInput() {
    return this._azName;
  }

  // instance_types - computed: false, optional: false, required: true
  private _instanceTypes?: string[]; 
  public get instanceTypes() {
    return this.getListAttribute('instance_types');
  }
  public set instanceTypes(value: string[]) {
    this._instanceTypes = value;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceTypesInput() {
    return this._instanceTypes;
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

  // affinity - computed: false, optional: true, required: false
  private _affinity = new NodeTemplateConstraintsDedicatedNodeAffinityAffinityList(this, "affinity", false);
  public get affinity() {
    return this._affinity;
  }
  public putAffinity(value: NodeTemplateConstraintsDedicatedNodeAffinityAffinity[] | cdktf.IResolvable) {
    this._affinity.internalValue = value;
  }
  public resetAffinity() {
    this._affinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get affinityInput() {
    return this._affinity.internalValue;
  }
}

export class NodeTemplateConstraintsDedicatedNodeAffinityList extends cdktf.ComplexList {
  public internalValue? : NodeTemplateConstraintsDedicatedNodeAffinity[] | cdktf.IResolvable

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
  public get(index: number): NodeTemplateConstraintsDedicatedNodeAffinityOutputReference {
    return new NodeTemplateConstraintsDedicatedNodeAffinityOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NodeTemplateConstraintsGpu {
  /**
  * Names of the GPUs to exclude.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#exclude_names NodeTemplate#exclude_names}
  */
  readonly excludeNames?: string[];
  /**
  * Instance families to include when filtering (excludes all other families).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#include_names NodeTemplate#include_names}
  */
  readonly includeNames?: string[];
  /**
  * Manufacturers of the gpus to select - NVIDIA, AMD.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#manufacturers NodeTemplate#manufacturers}
  */
  readonly manufacturers?: string[];
  /**
  * Max GPU count for the instance type to have.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#max_count NodeTemplate#max_count}
  */
  readonly maxCount?: number;
  /**
  * Min GPU count for the instance type to have.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#min_count NodeTemplate#min_count}
  */
  readonly minCount?: number;
}

export function nodeTemplateConstraintsGpuToTerraform(struct?: NodeTemplateConstraintsGpuOutputReference | NodeTemplateConstraintsGpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.excludeNames),
    include_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.includeNames),
    manufacturers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.manufacturers),
    max_count: cdktf.numberToTerraform(struct!.maxCount),
    min_count: cdktf.numberToTerraform(struct!.minCount),
  }
}


export function nodeTemplateConstraintsGpuToHclTerraform(struct?: NodeTemplateConstraintsGpuOutputReference | NodeTemplateConstraintsGpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.excludeNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.includeNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    manufacturers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.manufacturers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    max_count: {
      value: cdktf.numberToHclTerraform(struct!.maxCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_count: {
      value: cdktf.numberToHclTerraform(struct!.minCount),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeTemplateConstraintsGpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeTemplateConstraintsGpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._excludeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.excludeNames = this._excludeNames;
    }
    if (this._includeNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.includeNames = this._includeNames;
    }
    if (this._manufacturers !== undefined) {
      hasAnyValues = true;
      internalValueResult.manufacturers = this._manufacturers;
    }
    if (this._maxCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCount = this._maxCount;
    }
    if (this._minCount !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCount = this._minCount;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeTemplateConstraintsGpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._excludeNames = undefined;
      this._includeNames = undefined;
      this._manufacturers = undefined;
      this._maxCount = undefined;
      this._minCount = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._excludeNames = value.excludeNames;
      this._includeNames = value.includeNames;
      this._manufacturers = value.manufacturers;
      this._maxCount = value.maxCount;
      this._minCount = value.minCount;
    }
  }

  // exclude_names - computed: false, optional: true, required: false
  private _excludeNames?: string[]; 
  public get excludeNames() {
    return this.getListAttribute('exclude_names');
  }
  public set excludeNames(value: string[]) {
    this._excludeNames = value;
  }
  public resetExcludeNames() {
    this._excludeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeNamesInput() {
    return this._excludeNames;
  }

  // include_names - computed: false, optional: true, required: false
  private _includeNames?: string[]; 
  public get includeNames() {
    return this.getListAttribute('include_names');
  }
  public set includeNames(value: string[]) {
    this._includeNames = value;
  }
  public resetIncludeNames() {
    this._includeNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeNamesInput() {
    return this._includeNames;
  }

  // manufacturers - computed: false, optional: true, required: false
  private _manufacturers?: string[]; 
  public get manufacturers() {
    return this.getListAttribute('manufacturers');
  }
  public set manufacturers(value: string[]) {
    this._manufacturers = value;
  }
  public resetManufacturers() {
    this._manufacturers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manufacturersInput() {
    return this._manufacturers;
  }

  // max_count - computed: false, optional: true, required: false
  private _maxCount?: number; 
  public get maxCount() {
    return this.getNumberAttribute('max_count');
  }
  public set maxCount(value: number) {
    this._maxCount = value;
  }
  public resetMaxCount() {
    this._maxCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCountInput() {
    return this._maxCount;
  }

  // min_count - computed: false, optional: true, required: false
  private _minCount?: number; 
  public get minCount() {
    return this.getNumberAttribute('min_count');
  }
  public set minCount(value: number) {
    this._minCount = value;
  }
  public resetMinCount() {
    this._minCount = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCountInput() {
    return this._minCount;
  }
}
export interface NodeTemplateConstraintsInstanceFamilies {
  /**
  * Instance families to exclude when filtering (includes all other families).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#exclude NodeTemplate#exclude}
  */
  readonly exclude?: string[];
  /**
  * Instance families to include when filtering (excludes all other families).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#include NodeTemplate#include}
  */
  readonly include?: string[];
}

export function nodeTemplateConstraintsInstanceFamiliesToTerraform(struct?: NodeTemplateConstraintsInstanceFamiliesOutputReference | NodeTemplateConstraintsInstanceFamilies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.exclude),
    include: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.include),
  }
}


export function nodeTemplateConstraintsInstanceFamiliesToHclTerraform(struct?: NodeTemplateConstraintsInstanceFamiliesOutputReference | NodeTemplateConstraintsInstanceFamilies): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.exclude),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    include: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.include),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeTemplateConstraintsInstanceFamiliesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeTemplateConstraintsInstanceFamilies | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._exclude !== undefined) {
      hasAnyValues = true;
      internalValueResult.exclude = this._exclude;
    }
    if (this._include !== undefined) {
      hasAnyValues = true;
      internalValueResult.include = this._include;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeTemplateConstraintsInstanceFamilies | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._exclude = undefined;
      this._include = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._exclude = value.exclude;
      this._include = value.include;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string[]; 
  public get exclude() {
    return this.getListAttribute('exclude');
  }
  public set exclude(value: string[]) {
    this._exclude = value;
  }
  public resetExclude() {
    this._exclude = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get excludeInput() {
    return this._exclude;
  }

  // include - computed: false, optional: true, required: false
  private _include?: string[]; 
  public get include() {
    return this.getListAttribute('include');
  }
  public set include(value: string[]) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }
}
export interface NodeTemplateConstraintsResourceLimits {
  /**
  * Controls CPU limit enforcement for the node template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#cpu_limit_enabled NodeTemplate#cpu_limit_enabled}
  */
  readonly cpuLimitEnabled?: boolean | cdktf.IResolvable;
  /**
  * Specifies the maximum number of CPU cores that the nodes provisioned from this template can collectively have.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#cpu_limit_max_cores NodeTemplate#cpu_limit_max_cores}
  */
  readonly cpuLimitMaxCores?: number;
}

export function nodeTemplateConstraintsResourceLimitsToTerraform(struct?: NodeTemplateConstraintsResourceLimitsOutputReference | NodeTemplateConstraintsResourceLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cpu_limit_enabled: cdktf.booleanToTerraform(struct!.cpuLimitEnabled),
    cpu_limit_max_cores: cdktf.numberToTerraform(struct!.cpuLimitMaxCores),
  }
}


export function nodeTemplateConstraintsResourceLimitsToHclTerraform(struct?: NodeTemplateConstraintsResourceLimitsOutputReference | NodeTemplateConstraintsResourceLimits): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cpu_limit_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.cpuLimitEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    cpu_limit_max_cores: {
      value: cdktf.numberToHclTerraform(struct!.cpuLimitMaxCores),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeTemplateConstraintsResourceLimitsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeTemplateConstraintsResourceLimits | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._cpuLimitEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuLimitEnabled = this._cpuLimitEnabled;
    }
    if (this._cpuLimitMaxCores !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuLimitMaxCores = this._cpuLimitMaxCores;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeTemplateConstraintsResourceLimits | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._cpuLimitEnabled = undefined;
      this._cpuLimitMaxCores = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._cpuLimitEnabled = value.cpuLimitEnabled;
      this._cpuLimitMaxCores = value.cpuLimitMaxCores;
    }
  }

  // cpu_limit_enabled - computed: false, optional: true, required: false
  private _cpuLimitEnabled?: boolean | cdktf.IResolvable; 
  public get cpuLimitEnabled() {
    return this.getBooleanAttribute('cpu_limit_enabled');
  }
  public set cpuLimitEnabled(value: boolean | cdktf.IResolvable) {
    this._cpuLimitEnabled = value;
  }
  public resetCpuLimitEnabled() {
    this._cpuLimitEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitEnabledInput() {
    return this._cpuLimitEnabled;
  }

  // cpu_limit_max_cores - computed: false, optional: true, required: false
  private _cpuLimitMaxCores?: number; 
  public get cpuLimitMaxCores() {
    return this.getNumberAttribute('cpu_limit_max_cores');
  }
  public set cpuLimitMaxCores(value: number) {
    this._cpuLimitMaxCores = value;
  }
  public resetCpuLimitMaxCores() {
    this._cpuLimitMaxCores = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuLimitMaxCoresInput() {
    return this._cpuLimitMaxCores;
  }
}
export interface NodeTemplateConstraints {
  /**
  * Priority ordering of architectures, specifying no priority will pick cheapest. Allowed values: amd64, arm64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#architecture_priority NodeTemplate#architecture_priority}
  */
  readonly architecturePriority?: string[];
  /**
  * List of acceptable instance CPU architectures, the default is amd64. Allowed values: amd64, arm64.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#architectures NodeTemplate#architectures}
  */
  readonly architectures?: string[];
  /**
  * The list of AZ names to consider for the node template, if empty or not set all AZs are considered.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#azs NodeTemplate#azs}
  */
  readonly azs?: string[];
  /**
  * Bare metal constraint, will only pick bare metal nodes if set to true. Will only pick non-bare metal nodes if false. Defaults to unspecified. Allowed values: true, false, unspecified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#bare_metal NodeTemplate#bare_metal}
  */
  readonly bareMetal?: string;
  /**
  * Will include burstable instances when enabled otherwise they will be excluded. Supported values: `enabled`, `disabled` or ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#burstable_instances NodeTemplate#burstable_instances}
  */
  readonly burstableInstances?: string;
  /**
  * Compute optimized instance constraint (deprecated).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#compute_optimized NodeTemplate#compute_optimized}
  */
  readonly computeOptimized?: boolean | cdktf.IResolvable;
  /**
  * Will only include compute optimized nodes when enabled and exclude compute optimized nodes when disabled. Empty value won't have effect on instances filter. Supported values: `enabled`, `disabled` or empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#compute_optimized_state NodeTemplate#compute_optimized_state}
  */
  readonly computeOptimizedState?: string;
  /**
  * List of acceptable CPU manufacturers. Allowed values: AMD, AMPERE, APPLE, AWS, INTEL.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#cpu_manufacturers NodeTemplate#cpu_manufacturers}
  */
  readonly cpuManufacturers?: string[];
  /**
  * Will include customer specific (preview) instances when enabled otherwise they will be excluded. Supported values: `enabled`, `disabled` or ``.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#customer_specific NodeTemplate#customer_specific}
  */
  readonly customerSpecific?: string;
  /**
  * Enable/disable spot diversity policy. When enabled, autoscaler will try to balance between diverse and cost optimal instance types.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#enable_spot_diversity NodeTemplate#enable_spot_diversity}
  */
  readonly enableSpotDiversity?: boolean | cdktf.IResolvable;
  /**
  * Fallback restore rate in seconds: defines how much time should pass before spot fallback should be attempted to be restored to real spot.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#fallback_restore_rate_seconds NodeTemplate#fallback_restore_rate_seconds}
  */
  readonly fallbackRestoreRateSeconds?: number;
  /**
  * GPU instance constraint - will only pick nodes with GPU if true
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#is_gpu_only NodeTemplate#is_gpu_only}
  */
  readonly isGpuOnly?: boolean | cdktf.IResolvable;
  /**
  * Max CPU cores per node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#max_cpu NodeTemplate#max_cpu}
  */
  readonly maxCpu?: number;
  /**
  * Max Memory (Mib) per node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#max_memory NodeTemplate#max_memory}
  */
  readonly maxMemory?: number;
  /**
  * Min CPU cores per node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#min_cpu NodeTemplate#min_cpu}
  */
  readonly minCpu?: number;
  /**
  * Min Memory (Mib) per node.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#min_memory NodeTemplate#min_memory}
  */
  readonly minMemory?: number;
  /**
  * Should include on-demand instances in the considered pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#on_demand NodeTemplate#on_demand}
  */
  readonly onDemand?: boolean | cdktf.IResolvable;
  /**
  * List of acceptable instance Operating Systems, the default is linux. Allowed values: linux, windows.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#os NodeTemplate#os}
  */
  readonly os?: string[];
  /**
  * Should include spot instances in the considered pool.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#spot NodeTemplate#spot}
  */
  readonly spot?: boolean | cdktf.IResolvable;
  /**
  * Allowed node configuration price increase when diversifying instance types. E.g. if the value is 10%, then the overall price of diversified instance types can be 10% higher than the price of the optimal configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#spot_diversity_price_increase_limit_percent NodeTemplate#spot_diversity_price_increase_limit_percent}
  */
  readonly spotDiversityPriceIncreaseLimitPercent?: number;
  /**
  * Enable/disable spot interruption predictions.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#spot_interruption_predictions_enabled NodeTemplate#spot_interruption_predictions_enabled}
  */
  readonly spotInterruptionPredictionsEnabled?: boolean | cdktf.IResolvable;
  /**
  * Spot interruption predictions type. Can be either "aws-rebalance-recommendations" or "interruption-predictions".
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#spot_interruption_predictions_type NodeTemplate#spot_interruption_predictions_type}
  */
  readonly spotInterruptionPredictionsType?: string;
  /**
  * Enable/disable spot reliability. When enabled, autoscaler will create instances with highest reliability score within price increase threshold.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#spot_reliability_enabled NodeTemplate#spot_reliability_enabled}
  */
  readonly spotReliabilityEnabled?: boolean | cdktf.IResolvable;
  /**
  * Allowed node price increase when using spot reliability on ordering the instance types . E.g. if the value is 10%, then the overall price of instance types can be 10% higher than the price of the optimal configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#spot_reliability_price_increase_limit_percent NodeTemplate#spot_reliability_price_increase_limit_percent}
  */
  readonly spotReliabilityPriceIncreaseLimitPercent?: number;
  /**
  * Storage optimized instance constraint (deprecated).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#storage_optimized NodeTemplate#storage_optimized}
  */
  readonly storageOptimized?: boolean | cdktf.IResolvable;
  /**
  * Storage optimized instance constraint - will only pick storage optimized nodes if enabled and won't pick if disabled. Empty value will have no effect. Supported values: `enabled`, `disabled` or empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#storage_optimized_state NodeTemplate#storage_optimized_state}
  */
  readonly storageOptimizedState?: string;
  /**
  * Spot instance fallback constraint - when true, on-demand instances will be created, when spots are unavailable.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#use_spot_fallbacks NodeTemplate#use_spot_fallbacks}
  */
  readonly useSpotFallbacks?: boolean | cdktf.IResolvable;
  /**
  * custom_priority block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#custom_priority NodeTemplate#custom_priority}
  */
  readonly customPriority?: NodeTemplateConstraintsCustomPriority[] | cdktf.IResolvable;
  /**
  * dedicated_node_affinity block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#dedicated_node_affinity NodeTemplate#dedicated_node_affinity}
  */
  readonly dedicatedNodeAffinity?: NodeTemplateConstraintsDedicatedNodeAffinity[] | cdktf.IResolvable;
  /**
  * gpu block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#gpu NodeTemplate#gpu}
  */
  readonly gpu?: NodeTemplateConstraintsGpu;
  /**
  * instance_families block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#instance_families NodeTemplate#instance_families}
  */
  readonly instanceFamilies?: NodeTemplateConstraintsInstanceFamilies;
  /**
  * resource_limits block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#resource_limits NodeTemplate#resource_limits}
  */
  readonly resourceLimits?: NodeTemplateConstraintsResourceLimits;
}

export function nodeTemplateConstraintsToTerraform(struct?: NodeTemplateConstraintsOutputReference | NodeTemplateConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    architecture_priority: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.architecturePriority),
    architectures: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.architectures),
    azs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.azs),
    bare_metal: cdktf.stringToTerraform(struct!.bareMetal),
    burstable_instances: cdktf.stringToTerraform(struct!.burstableInstances),
    compute_optimized: cdktf.booleanToTerraform(struct!.computeOptimized),
    compute_optimized_state: cdktf.stringToTerraform(struct!.computeOptimizedState),
    cpu_manufacturers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.cpuManufacturers),
    customer_specific: cdktf.stringToTerraform(struct!.customerSpecific),
    enable_spot_diversity: cdktf.booleanToTerraform(struct!.enableSpotDiversity),
    fallback_restore_rate_seconds: cdktf.numberToTerraform(struct!.fallbackRestoreRateSeconds),
    is_gpu_only: cdktf.booleanToTerraform(struct!.isGpuOnly),
    max_cpu: cdktf.numberToTerraform(struct!.maxCpu),
    max_memory: cdktf.numberToTerraform(struct!.maxMemory),
    min_cpu: cdktf.numberToTerraform(struct!.minCpu),
    min_memory: cdktf.numberToTerraform(struct!.minMemory),
    on_demand: cdktf.booleanToTerraform(struct!.onDemand),
    os: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.os),
    spot: cdktf.booleanToTerraform(struct!.spot),
    spot_diversity_price_increase_limit_percent: cdktf.numberToTerraform(struct!.spotDiversityPriceIncreaseLimitPercent),
    spot_interruption_predictions_enabled: cdktf.booleanToTerraform(struct!.spotInterruptionPredictionsEnabled),
    spot_interruption_predictions_type: cdktf.stringToTerraform(struct!.spotInterruptionPredictionsType),
    spot_reliability_enabled: cdktf.booleanToTerraform(struct!.spotReliabilityEnabled),
    spot_reliability_price_increase_limit_percent: cdktf.numberToTerraform(struct!.spotReliabilityPriceIncreaseLimitPercent),
    storage_optimized: cdktf.booleanToTerraform(struct!.storageOptimized),
    storage_optimized_state: cdktf.stringToTerraform(struct!.storageOptimizedState),
    use_spot_fallbacks: cdktf.booleanToTerraform(struct!.useSpotFallbacks),
    custom_priority: cdktf.listMapper(nodeTemplateConstraintsCustomPriorityToTerraform, true)(struct!.customPriority),
    dedicated_node_affinity: cdktf.listMapper(nodeTemplateConstraintsDedicatedNodeAffinityToTerraform, true)(struct!.dedicatedNodeAffinity),
    gpu: nodeTemplateConstraintsGpuToTerraform(struct!.gpu),
    instance_families: nodeTemplateConstraintsInstanceFamiliesToTerraform(struct!.instanceFamilies),
    resource_limits: nodeTemplateConstraintsResourceLimitsToTerraform(struct!.resourceLimits),
  }
}


export function nodeTemplateConstraintsToHclTerraform(struct?: NodeTemplateConstraintsOutputReference | NodeTemplateConstraints): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    architecture_priority: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.architecturePriority),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    architectures: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.architectures),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    azs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.azs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    bare_metal: {
      value: cdktf.stringToHclTerraform(struct!.bareMetal),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    burstable_instances: {
      value: cdktf.stringToHclTerraform(struct!.burstableInstances),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    compute_optimized: {
      value: cdktf.booleanToHclTerraform(struct!.computeOptimized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    compute_optimized_state: {
      value: cdktf.stringToHclTerraform(struct!.computeOptimizedState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cpu_manufacturers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.cpuManufacturers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    customer_specific: {
      value: cdktf.stringToHclTerraform(struct!.customerSpecific),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    enable_spot_diversity: {
      value: cdktf.booleanToHclTerraform(struct!.enableSpotDiversity),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    fallback_restore_rate_seconds: {
      value: cdktf.numberToHclTerraform(struct!.fallbackRestoreRateSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    is_gpu_only: {
      value: cdktf.booleanToHclTerraform(struct!.isGpuOnly),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    max_cpu: {
      value: cdktf.numberToHclTerraform(struct!.maxCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_memory: {
      value: cdktf.numberToHclTerraform(struct!.maxMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_cpu: {
      value: cdktf.numberToHclTerraform(struct!.minCpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    min_memory: {
      value: cdktf.numberToHclTerraform(struct!.minMemory),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    on_demand: {
      value: cdktf.booleanToHclTerraform(struct!.onDemand),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    os: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.os),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    spot: {
      value: cdktf.booleanToHclTerraform(struct!.spot),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    spot_diversity_price_increase_limit_percent: {
      value: cdktf.numberToHclTerraform(struct!.spotDiversityPriceIncreaseLimitPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    spot_interruption_predictions_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.spotInterruptionPredictionsEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    spot_interruption_predictions_type: {
      value: cdktf.stringToHclTerraform(struct!.spotInterruptionPredictionsType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    spot_reliability_enabled: {
      value: cdktf.booleanToHclTerraform(struct!.spotReliabilityEnabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    spot_reliability_price_increase_limit_percent: {
      value: cdktf.numberToHclTerraform(struct!.spotReliabilityPriceIncreaseLimitPercent),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    storage_optimized: {
      value: cdktf.booleanToHclTerraform(struct!.storageOptimized),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    storage_optimized_state: {
      value: cdktf.stringToHclTerraform(struct!.storageOptimizedState),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    use_spot_fallbacks: {
      value: cdktf.booleanToHclTerraform(struct!.useSpotFallbacks),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    custom_priority: {
      value: cdktf.listMapperHcl(nodeTemplateConstraintsCustomPriorityToHclTerraform, true)(struct!.customPriority),
      isBlock: true,
      type: "list",
      storageClassType: "NodeTemplateConstraintsCustomPriorityList",
    },
    dedicated_node_affinity: {
      value: cdktf.listMapperHcl(nodeTemplateConstraintsDedicatedNodeAffinityToHclTerraform, true)(struct!.dedicatedNodeAffinity),
      isBlock: true,
      type: "list",
      storageClassType: "NodeTemplateConstraintsDedicatedNodeAffinityList",
    },
    gpu: {
      value: nodeTemplateConstraintsGpuToHclTerraform(struct!.gpu),
      isBlock: true,
      type: "list",
      storageClassType: "NodeTemplateConstraintsGpuList",
    },
    instance_families: {
      value: nodeTemplateConstraintsInstanceFamiliesToHclTerraform(struct!.instanceFamilies),
      isBlock: true,
      type: "list",
      storageClassType: "NodeTemplateConstraintsInstanceFamiliesList",
    },
    resource_limits: {
      value: nodeTemplateConstraintsResourceLimitsToHclTerraform(struct!.resourceLimits),
      isBlock: true,
      type: "list",
      storageClassType: "NodeTemplateConstraintsResourceLimitsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeTemplateConstraintsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeTemplateConstraints | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._architecturePriority !== undefined) {
      hasAnyValues = true;
      internalValueResult.architecturePriority = this._architecturePriority;
    }
    if (this._architectures !== undefined) {
      hasAnyValues = true;
      internalValueResult.architectures = this._architectures;
    }
    if (this._azs !== undefined) {
      hasAnyValues = true;
      internalValueResult.azs = this._azs;
    }
    if (this._bareMetal !== undefined) {
      hasAnyValues = true;
      internalValueResult.bareMetal = this._bareMetal;
    }
    if (this._burstableInstances !== undefined) {
      hasAnyValues = true;
      internalValueResult.burstableInstances = this._burstableInstances;
    }
    if (this._computeOptimized !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeOptimized = this._computeOptimized;
    }
    if (this._computeOptimizedState !== undefined) {
      hasAnyValues = true;
      internalValueResult.computeOptimizedState = this._computeOptimizedState;
    }
    if (this._cpuManufacturers !== undefined) {
      hasAnyValues = true;
      internalValueResult.cpuManufacturers = this._cpuManufacturers;
    }
    if (this._customerSpecific !== undefined) {
      hasAnyValues = true;
      internalValueResult.customerSpecific = this._customerSpecific;
    }
    if (this._enableSpotDiversity !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableSpotDiversity = this._enableSpotDiversity;
    }
    if (this._fallbackRestoreRateSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.fallbackRestoreRateSeconds = this._fallbackRestoreRateSeconds;
    }
    if (this._isGpuOnly !== undefined) {
      hasAnyValues = true;
      internalValueResult.isGpuOnly = this._isGpuOnly;
    }
    if (this._maxCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxCpu = this._maxCpu;
    }
    if (this._maxMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxMemory = this._maxMemory;
    }
    if (this._minCpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.minCpu = this._minCpu;
    }
    if (this._minMemory !== undefined) {
      hasAnyValues = true;
      internalValueResult.minMemory = this._minMemory;
    }
    if (this._onDemand !== undefined) {
      hasAnyValues = true;
      internalValueResult.onDemand = this._onDemand;
    }
    if (this._os !== undefined) {
      hasAnyValues = true;
      internalValueResult.os = this._os;
    }
    if (this._spot !== undefined) {
      hasAnyValues = true;
      internalValueResult.spot = this._spot;
    }
    if (this._spotDiversityPriceIncreaseLimitPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotDiversityPriceIncreaseLimitPercent = this._spotDiversityPriceIncreaseLimitPercent;
    }
    if (this._spotInterruptionPredictionsEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotInterruptionPredictionsEnabled = this._spotInterruptionPredictionsEnabled;
    }
    if (this._spotInterruptionPredictionsType !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotInterruptionPredictionsType = this._spotInterruptionPredictionsType;
    }
    if (this._spotReliabilityEnabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotReliabilityEnabled = this._spotReliabilityEnabled;
    }
    if (this._spotReliabilityPriceIncreaseLimitPercent !== undefined) {
      hasAnyValues = true;
      internalValueResult.spotReliabilityPriceIncreaseLimitPercent = this._spotReliabilityPriceIncreaseLimitPercent;
    }
    if (this._storageOptimized !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageOptimized = this._storageOptimized;
    }
    if (this._storageOptimizedState !== undefined) {
      hasAnyValues = true;
      internalValueResult.storageOptimizedState = this._storageOptimizedState;
    }
    if (this._useSpotFallbacks !== undefined) {
      hasAnyValues = true;
      internalValueResult.useSpotFallbacks = this._useSpotFallbacks;
    }
    if (this._customPriority?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.customPriority = this._customPriority?.internalValue;
    }
    if (this._dedicatedNodeAffinity?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.dedicatedNodeAffinity = this._dedicatedNodeAffinity?.internalValue;
    }
    if (this._gpu?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpu = this._gpu?.internalValue;
    }
    if (this._instanceFamilies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.instanceFamilies = this._instanceFamilies?.internalValue;
    }
    if (this._resourceLimits?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceLimits = this._resourceLimits?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeTemplateConstraints | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._architecturePriority = undefined;
      this._architectures = undefined;
      this._azs = undefined;
      this._bareMetal = undefined;
      this._burstableInstances = undefined;
      this._computeOptimized = undefined;
      this._computeOptimizedState = undefined;
      this._cpuManufacturers = undefined;
      this._customerSpecific = undefined;
      this._enableSpotDiversity = undefined;
      this._fallbackRestoreRateSeconds = undefined;
      this._isGpuOnly = undefined;
      this._maxCpu = undefined;
      this._maxMemory = undefined;
      this._minCpu = undefined;
      this._minMemory = undefined;
      this._onDemand = undefined;
      this._os = undefined;
      this._spot = undefined;
      this._spotDiversityPriceIncreaseLimitPercent = undefined;
      this._spotInterruptionPredictionsEnabled = undefined;
      this._spotInterruptionPredictionsType = undefined;
      this._spotReliabilityEnabled = undefined;
      this._spotReliabilityPriceIncreaseLimitPercent = undefined;
      this._storageOptimized = undefined;
      this._storageOptimizedState = undefined;
      this._useSpotFallbacks = undefined;
      this._customPriority.internalValue = undefined;
      this._dedicatedNodeAffinity.internalValue = undefined;
      this._gpu.internalValue = undefined;
      this._instanceFamilies.internalValue = undefined;
      this._resourceLimits.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._architecturePriority = value.architecturePriority;
      this._architectures = value.architectures;
      this._azs = value.azs;
      this._bareMetal = value.bareMetal;
      this._burstableInstances = value.burstableInstances;
      this._computeOptimized = value.computeOptimized;
      this._computeOptimizedState = value.computeOptimizedState;
      this._cpuManufacturers = value.cpuManufacturers;
      this._customerSpecific = value.customerSpecific;
      this._enableSpotDiversity = value.enableSpotDiversity;
      this._fallbackRestoreRateSeconds = value.fallbackRestoreRateSeconds;
      this._isGpuOnly = value.isGpuOnly;
      this._maxCpu = value.maxCpu;
      this._maxMemory = value.maxMemory;
      this._minCpu = value.minCpu;
      this._minMemory = value.minMemory;
      this._onDemand = value.onDemand;
      this._os = value.os;
      this._spot = value.spot;
      this._spotDiversityPriceIncreaseLimitPercent = value.spotDiversityPriceIncreaseLimitPercent;
      this._spotInterruptionPredictionsEnabled = value.spotInterruptionPredictionsEnabled;
      this._spotInterruptionPredictionsType = value.spotInterruptionPredictionsType;
      this._spotReliabilityEnabled = value.spotReliabilityEnabled;
      this._spotReliabilityPriceIncreaseLimitPercent = value.spotReliabilityPriceIncreaseLimitPercent;
      this._storageOptimized = value.storageOptimized;
      this._storageOptimizedState = value.storageOptimizedState;
      this._useSpotFallbacks = value.useSpotFallbacks;
      this._customPriority.internalValue = value.customPriority;
      this._dedicatedNodeAffinity.internalValue = value.dedicatedNodeAffinity;
      this._gpu.internalValue = value.gpu;
      this._instanceFamilies.internalValue = value.instanceFamilies;
      this._resourceLimits.internalValue = value.resourceLimits;
    }
  }

  // architecture_priority - computed: true, optional: true, required: false
  private _architecturePriority?: string[]; 
  public get architecturePriority() {
    return this.getListAttribute('architecture_priority');
  }
  public set architecturePriority(value: string[]) {
    this._architecturePriority = value;
  }
  public resetArchitecturePriority() {
    this._architecturePriority = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architecturePriorityInput() {
    return this._architecturePriority;
  }

  // architectures - computed: true, optional: true, required: false
  private _architectures?: string[]; 
  public get architectures() {
    return this.getListAttribute('architectures');
  }
  public set architectures(value: string[]) {
    this._architectures = value;
  }
  public resetArchitectures() {
    this._architectures = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get architecturesInput() {
    return this._architectures;
  }

  // azs - computed: false, optional: true, required: false
  private _azs?: string[]; 
  public get azs() {
    return this.getListAttribute('azs');
  }
  public set azs(value: string[]) {
    this._azs = value;
  }
  public resetAzs() {
    this._azs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get azsInput() {
    return this._azs;
  }

  // bare_metal - computed: false, optional: true, required: false
  private _bareMetal?: string; 
  public get bareMetal() {
    return this.getStringAttribute('bare_metal');
  }
  public set bareMetal(value: string) {
    this._bareMetal = value;
  }
  public resetBareMetal() {
    this._bareMetal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bareMetalInput() {
    return this._bareMetal;
  }

  // burstable_instances - computed: false, optional: true, required: false
  private _burstableInstances?: string; 
  public get burstableInstances() {
    return this.getStringAttribute('burstable_instances');
  }
  public set burstableInstances(value: string) {
    this._burstableInstances = value;
  }
  public resetBurstableInstances() {
    this._burstableInstances = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get burstableInstancesInput() {
    return this._burstableInstances;
  }

  // compute_optimized - computed: false, optional: true, required: false
  private _computeOptimized?: boolean | cdktf.IResolvable; 
  public get computeOptimized() {
    return this.getBooleanAttribute('compute_optimized');
  }
  public set computeOptimized(value: boolean | cdktf.IResolvable) {
    this._computeOptimized = value;
  }
  public resetComputeOptimized() {
    this._computeOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeOptimizedInput() {
    return this._computeOptimized;
  }

  // compute_optimized_state - computed: false, optional: true, required: false
  private _computeOptimizedState?: string; 
  public get computeOptimizedState() {
    return this.getStringAttribute('compute_optimized_state');
  }
  public set computeOptimizedState(value: string) {
    this._computeOptimizedState = value;
  }
  public resetComputeOptimizedState() {
    this._computeOptimizedState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get computeOptimizedStateInput() {
    return this._computeOptimizedState;
  }

  // cpu_manufacturers - computed: false, optional: true, required: false
  private _cpuManufacturers?: string[]; 
  public get cpuManufacturers() {
    return this.getListAttribute('cpu_manufacturers');
  }
  public set cpuManufacturers(value: string[]) {
    this._cpuManufacturers = value;
  }
  public resetCpuManufacturers() {
    this._cpuManufacturers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get cpuManufacturersInput() {
    return this._cpuManufacturers;
  }

  // customer_specific - computed: false, optional: true, required: false
  private _customerSpecific?: string; 
  public get customerSpecific() {
    return this.getStringAttribute('customer_specific');
  }
  public set customerSpecific(value: string) {
    this._customerSpecific = value;
  }
  public resetCustomerSpecific() {
    this._customerSpecific = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customerSpecificInput() {
    return this._customerSpecific;
  }

  // enable_spot_diversity - computed: false, optional: true, required: false
  private _enableSpotDiversity?: boolean | cdktf.IResolvable; 
  public get enableSpotDiversity() {
    return this.getBooleanAttribute('enable_spot_diversity');
  }
  public set enableSpotDiversity(value: boolean | cdktf.IResolvable) {
    this._enableSpotDiversity = value;
  }
  public resetEnableSpotDiversity() {
    this._enableSpotDiversity = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableSpotDiversityInput() {
    return this._enableSpotDiversity;
  }

  // fallback_restore_rate_seconds - computed: false, optional: true, required: false
  private _fallbackRestoreRateSeconds?: number; 
  public get fallbackRestoreRateSeconds() {
    return this.getNumberAttribute('fallback_restore_rate_seconds');
  }
  public set fallbackRestoreRateSeconds(value: number) {
    this._fallbackRestoreRateSeconds = value;
  }
  public resetFallbackRestoreRateSeconds() {
    this._fallbackRestoreRateSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fallbackRestoreRateSecondsInput() {
    return this._fallbackRestoreRateSeconds;
  }

  // is_gpu_only - computed: false, optional: true, required: false
  private _isGpuOnly?: boolean | cdktf.IResolvable; 
  public get isGpuOnly() {
    return this.getBooleanAttribute('is_gpu_only');
  }
  public set isGpuOnly(value: boolean | cdktf.IResolvable) {
    this._isGpuOnly = value;
  }
  public resetIsGpuOnly() {
    this._isGpuOnly = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isGpuOnlyInput() {
    return this._isGpuOnly;
  }

  // max_cpu - computed: false, optional: true, required: false
  private _maxCpu?: number; 
  public get maxCpu() {
    return this.getNumberAttribute('max_cpu');
  }
  public set maxCpu(value: number) {
    this._maxCpu = value;
  }
  public resetMaxCpu() {
    this._maxCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxCpuInput() {
    return this._maxCpu;
  }

  // max_memory - computed: false, optional: true, required: false
  private _maxMemory?: number; 
  public get maxMemory() {
    return this.getNumberAttribute('max_memory');
  }
  public set maxMemory(value: number) {
    this._maxMemory = value;
  }
  public resetMaxMemory() {
    this._maxMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxMemoryInput() {
    return this._maxMemory;
  }

  // min_cpu - computed: false, optional: true, required: false
  private _minCpu?: number; 
  public get minCpu() {
    return this.getNumberAttribute('min_cpu');
  }
  public set minCpu(value: number) {
    this._minCpu = value;
  }
  public resetMinCpu() {
    this._minCpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minCpuInput() {
    return this._minCpu;
  }

  // min_memory - computed: false, optional: true, required: false
  private _minMemory?: number; 
  public get minMemory() {
    return this.getNumberAttribute('min_memory');
  }
  public set minMemory(value: number) {
    this._minMemory = value;
  }
  public resetMinMemory() {
    this._minMemory = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get minMemoryInput() {
    return this._minMemory;
  }

  // on_demand - computed: true, optional: true, required: false
  private _onDemand?: boolean | cdktf.IResolvable; 
  public get onDemand() {
    return this.getBooleanAttribute('on_demand');
  }
  public set onDemand(value: boolean | cdktf.IResolvable) {
    this._onDemand = value;
  }
  public resetOnDemand() {
    this._onDemand = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get onDemandInput() {
    return this._onDemand;
  }

  // os - computed: true, optional: true, required: false
  private _os?: string[]; 
  public get os() {
    return this.getListAttribute('os');
  }
  public set os(value: string[]) {
    this._os = value;
  }
  public resetOs() {
    this._os = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get osInput() {
    return this._os;
  }

  // spot - computed: false, optional: true, required: false
  private _spot?: boolean | cdktf.IResolvable; 
  public get spot() {
    return this.getBooleanAttribute('spot');
  }
  public set spot(value: boolean | cdktf.IResolvable) {
    this._spot = value;
  }
  public resetSpot() {
    this._spot = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInput() {
    return this._spot;
  }

  // spot_diversity_price_increase_limit_percent - computed: false, optional: true, required: false
  private _spotDiversityPriceIncreaseLimitPercent?: number; 
  public get spotDiversityPriceIncreaseLimitPercent() {
    return this.getNumberAttribute('spot_diversity_price_increase_limit_percent');
  }
  public set spotDiversityPriceIncreaseLimitPercent(value: number) {
    this._spotDiversityPriceIncreaseLimitPercent = value;
  }
  public resetSpotDiversityPriceIncreaseLimitPercent() {
    this._spotDiversityPriceIncreaseLimitPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotDiversityPriceIncreaseLimitPercentInput() {
    return this._spotDiversityPriceIncreaseLimitPercent;
  }

  // spot_interruption_predictions_enabled - computed: false, optional: true, required: false
  private _spotInterruptionPredictionsEnabled?: boolean | cdktf.IResolvable; 
  public get spotInterruptionPredictionsEnabled() {
    return this.getBooleanAttribute('spot_interruption_predictions_enabled');
  }
  public set spotInterruptionPredictionsEnabled(value: boolean | cdktf.IResolvable) {
    this._spotInterruptionPredictionsEnabled = value;
  }
  public resetSpotInterruptionPredictionsEnabled() {
    this._spotInterruptionPredictionsEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInterruptionPredictionsEnabledInput() {
    return this._spotInterruptionPredictionsEnabled;
  }

  // spot_interruption_predictions_type - computed: false, optional: true, required: false
  private _spotInterruptionPredictionsType?: string; 
  public get spotInterruptionPredictionsType() {
    return this.getStringAttribute('spot_interruption_predictions_type');
  }
  public set spotInterruptionPredictionsType(value: string) {
    this._spotInterruptionPredictionsType = value;
  }
  public resetSpotInterruptionPredictionsType() {
    this._spotInterruptionPredictionsType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotInterruptionPredictionsTypeInput() {
    return this._spotInterruptionPredictionsType;
  }

  // spot_reliability_enabled - computed: false, optional: true, required: false
  private _spotReliabilityEnabled?: boolean | cdktf.IResolvable; 
  public get spotReliabilityEnabled() {
    return this.getBooleanAttribute('spot_reliability_enabled');
  }
  public set spotReliabilityEnabled(value: boolean | cdktf.IResolvable) {
    this._spotReliabilityEnabled = value;
  }
  public resetSpotReliabilityEnabled() {
    this._spotReliabilityEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotReliabilityEnabledInput() {
    return this._spotReliabilityEnabled;
  }

  // spot_reliability_price_increase_limit_percent - computed: false, optional: true, required: false
  private _spotReliabilityPriceIncreaseLimitPercent?: number; 
  public get spotReliabilityPriceIncreaseLimitPercent() {
    return this.getNumberAttribute('spot_reliability_price_increase_limit_percent');
  }
  public set spotReliabilityPriceIncreaseLimitPercent(value: number) {
    this._spotReliabilityPriceIncreaseLimitPercent = value;
  }
  public resetSpotReliabilityPriceIncreaseLimitPercent() {
    this._spotReliabilityPriceIncreaseLimitPercent = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get spotReliabilityPriceIncreaseLimitPercentInput() {
    return this._spotReliabilityPriceIncreaseLimitPercent;
  }

  // storage_optimized - computed: false, optional: true, required: false
  private _storageOptimized?: boolean | cdktf.IResolvable; 
  public get storageOptimized() {
    return this.getBooleanAttribute('storage_optimized');
  }
  public set storageOptimized(value: boolean | cdktf.IResolvable) {
    this._storageOptimized = value;
  }
  public resetStorageOptimized() {
    this._storageOptimized = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageOptimizedInput() {
    return this._storageOptimized;
  }

  // storage_optimized_state - computed: false, optional: true, required: false
  private _storageOptimizedState?: string; 
  public get storageOptimizedState() {
    return this.getStringAttribute('storage_optimized_state');
  }
  public set storageOptimizedState(value: string) {
    this._storageOptimizedState = value;
  }
  public resetStorageOptimizedState() {
    this._storageOptimizedState = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageOptimizedStateInput() {
    return this._storageOptimizedState;
  }

  // use_spot_fallbacks - computed: false, optional: true, required: false
  private _useSpotFallbacks?: boolean | cdktf.IResolvable; 
  public get useSpotFallbacks() {
    return this.getBooleanAttribute('use_spot_fallbacks');
  }
  public set useSpotFallbacks(value: boolean | cdktf.IResolvable) {
    this._useSpotFallbacks = value;
  }
  public resetUseSpotFallbacks() {
    this._useSpotFallbacks = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get useSpotFallbacksInput() {
    return this._useSpotFallbacks;
  }

  // custom_priority - computed: false, optional: true, required: false
  private _customPriority = new NodeTemplateConstraintsCustomPriorityList(this, "custom_priority", false);
  public get customPriority() {
    return this._customPriority;
  }
  public putCustomPriority(value: NodeTemplateConstraintsCustomPriority[] | cdktf.IResolvable) {
    this._customPriority.internalValue = value;
  }
  public resetCustomPriority() {
    this._customPriority.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customPriorityInput() {
    return this._customPriority.internalValue;
  }

  // dedicated_node_affinity - computed: false, optional: true, required: false
  private _dedicatedNodeAffinity = new NodeTemplateConstraintsDedicatedNodeAffinityList(this, "dedicated_node_affinity", false);
  public get dedicatedNodeAffinity() {
    return this._dedicatedNodeAffinity;
  }
  public putDedicatedNodeAffinity(value: NodeTemplateConstraintsDedicatedNodeAffinity[] | cdktf.IResolvable) {
    this._dedicatedNodeAffinity.internalValue = value;
  }
  public resetDedicatedNodeAffinity() {
    this._dedicatedNodeAffinity.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dedicatedNodeAffinityInput() {
    return this._dedicatedNodeAffinity.internalValue;
  }

  // gpu - computed: false, optional: true, required: false
  private _gpu = new NodeTemplateConstraintsGpuOutputReference(this, "gpu");
  public get gpu() {
    return this._gpu;
  }
  public putGpu(value: NodeTemplateConstraintsGpu) {
    this._gpu.internalValue = value;
  }
  public resetGpu() {
    this._gpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuInput() {
    return this._gpu.internalValue;
  }

  // instance_families - computed: false, optional: true, required: false
  private _instanceFamilies = new NodeTemplateConstraintsInstanceFamiliesOutputReference(this, "instance_families");
  public get instanceFamilies() {
    return this._instanceFamilies;
  }
  public putInstanceFamilies(value: NodeTemplateConstraintsInstanceFamilies) {
    this._instanceFamilies.internalValue = value;
  }
  public resetInstanceFamilies() {
    this._instanceFamilies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get instanceFamiliesInput() {
    return this._instanceFamilies.internalValue;
  }

  // resource_limits - computed: false, optional: true, required: false
  private _resourceLimits = new NodeTemplateConstraintsResourceLimitsOutputReference(this, "resource_limits");
  public get resourceLimits() {
    return this._resourceLimits;
  }
  public putResourceLimits(value: NodeTemplateConstraintsResourceLimits) {
    this._resourceLimits.internalValue = value;
  }
  public resetResourceLimits() {
    this._resourceLimits.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceLimitsInput() {
    return this._resourceLimits.internalValue;
  }
}
export interface NodeTemplateCustomTaints {
  /**
  * Effect of a taint to be added to nodes created from this template, the default is NoSchedule. Allowed values: NoSchedule, NoExecute.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#effect NodeTemplate#effect}
  */
  readonly effect?: string;
  /**
  * Key of a taint to be added to nodes created from this template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#key NodeTemplate#key}
  */
  readonly key: string;
  /**
  * Value of a taint to be added to nodes created from this template.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#value NodeTemplate#value}
  */
  readonly value?: string;
}

export function nodeTemplateCustomTaintsToTerraform(struct?: NodeTemplateCustomTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    effect: cdktf.stringToTerraform(struct!.effect),
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function nodeTemplateCustomTaintsToHclTerraform(struct?: NodeTemplateCustomTaints | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    effect: {
      value: cdktf.stringToHclTerraform(struct!.effect),
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

export class NodeTemplateCustomTaintsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NodeTemplateCustomTaints | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._effect !== undefined) {
      hasAnyValues = true;
      internalValueResult.effect = this._effect;
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

  public set internalValue(value: NodeTemplateCustomTaints | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._effect = undefined;
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
      this._effect = value.effect;
      this._key = value.key;
      this._value = value.value;
    }
  }

  // effect - computed: false, optional: true, required: false
  private _effect?: string; 
  public get effect() {
    return this.getStringAttribute('effect');
  }
  public set effect(value: string) {
    this._effect = value;
  }
  public resetEffect() {
    this._effect = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get effectInput() {
    return this._effect;
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

export class NodeTemplateCustomTaintsList extends cdktf.ComplexList {
  public internalValue? : NodeTemplateCustomTaints[] | cdktf.IResolvable

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
  public get(index: number): NodeTemplateCustomTaintsOutputReference {
    return new NodeTemplateCustomTaintsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NodeTemplateGpuSharingConfiguration {
  /**
  * GPU name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#gpu_name NodeTemplate#gpu_name}
  */
  readonly gpuName: string;
  /**
  * Defines number of shared clients for specific GPU device.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#shared_clients_per_gpu NodeTemplate#shared_clients_per_gpu}
  */
  readonly sharedClientsPerGpu: number;
}

export function nodeTemplateGpuSharingConfigurationToTerraform(struct?: NodeTemplateGpuSharingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    gpu_name: cdktf.stringToTerraform(struct!.gpuName),
    shared_clients_per_gpu: cdktf.numberToTerraform(struct!.sharedClientsPerGpu),
  }
}


export function nodeTemplateGpuSharingConfigurationToHclTerraform(struct?: NodeTemplateGpuSharingConfiguration | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    gpu_name: {
      value: cdktf.stringToHclTerraform(struct!.gpuName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    shared_clients_per_gpu: {
      value: cdktf.numberToHclTerraform(struct!.sharedClientsPerGpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeTemplateGpuSharingConfigurationOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): NodeTemplateGpuSharingConfiguration | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._gpuName !== undefined) {
      hasAnyValues = true;
      internalValueResult.gpuName = this._gpuName;
    }
    if (this._sharedClientsPerGpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharedClientsPerGpu = this._sharedClientsPerGpu;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeTemplateGpuSharingConfiguration | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._gpuName = undefined;
      this._sharedClientsPerGpu = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._gpuName = value.gpuName;
      this._sharedClientsPerGpu = value.sharedClientsPerGpu;
    }
  }

  // gpu_name - computed: false, optional: false, required: true
  private _gpuName?: string; 
  public get gpuName() {
    return this.getStringAttribute('gpu_name');
  }
  public set gpuName(value: string) {
    this._gpuName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuNameInput() {
    return this._gpuName;
  }

  // shared_clients_per_gpu - computed: false, optional: false, required: true
  private _sharedClientsPerGpu?: number; 
  public get sharedClientsPerGpu() {
    return this.getNumberAttribute('shared_clients_per_gpu');
  }
  public set sharedClientsPerGpu(value: number) {
    this._sharedClientsPerGpu = value;
  }
  // Temporarily expose input value. Use with caution.
  public get sharedClientsPerGpuInput() {
    return this._sharedClientsPerGpu;
  }
}

export class NodeTemplateGpuSharingConfigurationList extends cdktf.ComplexList {
  public internalValue? : NodeTemplateGpuSharingConfiguration[] | cdktf.IResolvable

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
  public get(index: number): NodeTemplateGpuSharingConfigurationOutputReference {
    return new NodeTemplateGpuSharingConfigurationOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface NodeTemplateGpu {
  /**
  * Defines default number of shared clients per GPU.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#default_shared_clients_per_gpu NodeTemplate#default_shared_clients_per_gpu}
  */
  readonly defaultSharedClientsPerGpu?: number;
  /**
  * Enable/disable GPU time-sharing.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#enable_time_sharing NodeTemplate#enable_time_sharing}
  */
  readonly enableTimeSharing?: boolean | cdktf.IResolvable;
  /**
  * sharing_configuration block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#sharing_configuration NodeTemplate#sharing_configuration}
  */
  readonly sharingConfiguration?: NodeTemplateGpuSharingConfiguration[] | cdktf.IResolvable;
}

export function nodeTemplateGpuToTerraform(struct?: NodeTemplateGpuOutputReference | NodeTemplateGpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    default_shared_clients_per_gpu: cdktf.numberToTerraform(struct!.defaultSharedClientsPerGpu),
    enable_time_sharing: cdktf.booleanToTerraform(struct!.enableTimeSharing),
    sharing_configuration: cdktf.listMapper(nodeTemplateGpuSharingConfigurationToTerraform, true)(struct!.sharingConfiguration),
  }
}


export function nodeTemplateGpuToHclTerraform(struct?: NodeTemplateGpuOutputReference | NodeTemplateGpu): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    default_shared_clients_per_gpu: {
      value: cdktf.numberToHclTerraform(struct!.defaultSharedClientsPerGpu),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    enable_time_sharing: {
      value: cdktf.booleanToHclTerraform(struct!.enableTimeSharing),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    sharing_configuration: {
      value: cdktf.listMapperHcl(nodeTemplateGpuSharingConfigurationToHclTerraform, true)(struct!.sharingConfiguration),
      isBlock: true,
      type: "list",
      storageClassType: "NodeTemplateGpuSharingConfigurationList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class NodeTemplateGpuOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): NodeTemplateGpu | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._defaultSharedClientsPerGpu !== undefined) {
      hasAnyValues = true;
      internalValueResult.defaultSharedClientsPerGpu = this._defaultSharedClientsPerGpu;
    }
    if (this._enableTimeSharing !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTimeSharing = this._enableTimeSharing;
    }
    if (this._sharingConfiguration?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharingConfiguration = this._sharingConfiguration?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeTemplateGpu | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._defaultSharedClientsPerGpu = undefined;
      this._enableTimeSharing = undefined;
      this._sharingConfiguration.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._defaultSharedClientsPerGpu = value.defaultSharedClientsPerGpu;
      this._enableTimeSharing = value.enableTimeSharing;
      this._sharingConfiguration.internalValue = value.sharingConfiguration;
    }
  }

  // default_shared_clients_per_gpu - computed: false, optional: true, required: false
  private _defaultSharedClientsPerGpu?: number; 
  public get defaultSharedClientsPerGpu() {
    return this.getNumberAttribute('default_shared_clients_per_gpu');
  }
  public set defaultSharedClientsPerGpu(value: number) {
    this._defaultSharedClientsPerGpu = value;
  }
  public resetDefaultSharedClientsPerGpu() {
    this._defaultSharedClientsPerGpu = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultSharedClientsPerGpuInput() {
    return this._defaultSharedClientsPerGpu;
  }

  // enable_time_sharing - computed: false, optional: true, required: false
  private _enableTimeSharing?: boolean | cdktf.IResolvable; 
  public get enableTimeSharing() {
    return this.getBooleanAttribute('enable_time_sharing');
  }
  public set enableTimeSharing(value: boolean | cdktf.IResolvable) {
    this._enableTimeSharing = value;
  }
  public resetEnableTimeSharing() {
    this._enableTimeSharing = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTimeSharingInput() {
    return this._enableTimeSharing;
  }

  // sharing_configuration - computed: false, optional: true, required: false
  private _sharingConfiguration = new NodeTemplateGpuSharingConfigurationList(this, "sharing_configuration", false);
  public get sharingConfiguration() {
    return this._sharingConfiguration;
  }
  public putSharingConfiguration(value: NodeTemplateGpuSharingConfiguration[] | cdktf.IResolvable) {
    this._sharingConfiguration.internalValue = value;
  }
  public resetSharingConfiguration() {
    this._sharingConfiguration.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingConfigurationInput() {
    return this._sharingConfiguration.internalValue;
  }
}
export interface NodeTemplateTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#create NodeTemplate#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#delete NodeTemplate#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#read NodeTemplate#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#update NodeTemplate#update}
  */
  readonly update?: string;
}

export function nodeTemplateTimeoutsToTerraform(struct?: NodeTemplateTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


export function nodeTemplateTimeoutsToHclTerraform(struct?: NodeTemplateTimeouts | cdktf.IResolvable): any {
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
    read: {
      value: cdktf.stringToHclTerraform(struct!.read),
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

export class NodeTemplateTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): NodeTemplateTimeouts | cdktf.IResolvable | undefined {
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
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: NodeTemplateTimeouts | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
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
      this._read = value.read;
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

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
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
* Represents a {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template castai_node_template}
*/
export class NodeTemplate extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "castai_node_template";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a NodeTemplate resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the NodeTemplate to import
  * @param importFromId The id of the existing NodeTemplate that should be imported. Refer to the {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the NodeTemplate to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "castai_node_template", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/castai/castai/7.73.1/docs/resources/node_template castai_node_template} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options NodeTemplateConfig
  */
  public constructor(scope: Construct, id: string, config: NodeTemplateConfig) {
    super(scope, id, {
      terraformResourceType: 'castai_node_template',
      terraformGeneratorMetadata: {
        providerName: 'castai',
        providerVersion: '7.73.1'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._clmEnabled = config.clmEnabled;
    this._clusterId = config.clusterId;
    this._configurationId = config.configurationId;
    this._customInstancesEnabled = config.customInstancesEnabled;
    this._customInstancesWithExtendedMemoryEnabled = config.customInstancesWithExtendedMemoryEnabled;
    this._customLabels = config.customLabels;
    this._id = config.id;
    this._isDefault = config.isDefault;
    this._isEnabled = config.isEnabled;
    this._name = config.name;
    this._rebalancingConfigMinNodes = config.rebalancingConfigMinNodes;
    this._shouldTaint = config.shouldTaint;
    this._constraints.internalValue = config.constraints;
    this._customTaints.internalValue = config.customTaints;
    this._gpu.internalValue = config.gpu;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // clm_enabled - computed: false, optional: true, required: false
  private _clmEnabled?: boolean | cdktf.IResolvable; 
  public get clmEnabled() {
    return this.getBooleanAttribute('clm_enabled');
  }
  public set clmEnabled(value: boolean | cdktf.IResolvable) {
    this._clmEnabled = value;
  }
  public resetClmEnabled() {
    this._clmEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clmEnabledInput() {
    return this._clmEnabled;
  }

  // cluster_id - computed: false, optional: true, required: false
  private _clusterId?: string; 
  public get clusterId() {
    return this.getStringAttribute('cluster_id');
  }
  public set clusterId(value: string) {
    this._clusterId = value;
  }
  public resetClusterId() {
    this._clusterId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterIdInput() {
    return this._clusterId;
  }

  // configuration_id - computed: false, optional: true, required: false
  private _configurationId?: string; 
  public get configurationId() {
    return this.getStringAttribute('configuration_id');
  }
  public set configurationId(value: string) {
    this._configurationId = value;
  }
  public resetConfigurationId() {
    this._configurationId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get configurationIdInput() {
    return this._configurationId;
  }

  // custom_instances_enabled - computed: false, optional: true, required: false
  private _customInstancesEnabled?: boolean | cdktf.IResolvable; 
  public get customInstancesEnabled() {
    return this.getBooleanAttribute('custom_instances_enabled');
  }
  public set customInstancesEnabled(value: boolean | cdktf.IResolvable) {
    this._customInstancesEnabled = value;
  }
  public resetCustomInstancesEnabled() {
    this._customInstancesEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInstancesEnabledInput() {
    return this._customInstancesEnabled;
  }

  // custom_instances_with_extended_memory_enabled - computed: false, optional: true, required: false
  private _customInstancesWithExtendedMemoryEnabled?: boolean | cdktf.IResolvable; 
  public get customInstancesWithExtendedMemoryEnabled() {
    return this.getBooleanAttribute('custom_instances_with_extended_memory_enabled');
  }
  public set customInstancesWithExtendedMemoryEnabled(value: boolean | cdktf.IResolvable) {
    this._customInstancesWithExtendedMemoryEnabled = value;
  }
  public resetCustomInstancesWithExtendedMemoryEnabled() {
    this._customInstancesWithExtendedMemoryEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customInstancesWithExtendedMemoryEnabledInput() {
    return this._customInstancesWithExtendedMemoryEnabled;
  }

  // custom_labels - computed: false, optional: true, required: false
  private _customLabels?: { [key: string]: string }; 
  public get customLabels() {
    return this.getStringMapAttribute('custom_labels');
  }
  public set customLabels(value: { [key: string]: string }) {
    this._customLabels = value;
  }
  public resetCustomLabels() {
    this._customLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customLabelsInput() {
    return this._customLabels;
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

  // is_default - computed: false, optional: true, required: false
  private _isDefault?: boolean | cdktf.IResolvable; 
  public get isDefault() {
    return this.getBooleanAttribute('is_default');
  }
  public set isDefault(value: boolean | cdktf.IResolvable) {
    this._isDefault = value;
  }
  public resetIsDefault() {
    this._isDefault = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isDefaultInput() {
    return this._isDefault;
  }

  // is_enabled - computed: true, optional: true, required: false
  private _isEnabled?: boolean | cdktf.IResolvable; 
  public get isEnabled() {
    return this.getBooleanAttribute('is_enabled');
  }
  public set isEnabled(value: boolean | cdktf.IResolvable) {
    this._isEnabled = value;
  }
  public resetIsEnabled() {
    this._isEnabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get isEnabledInput() {
    return this._isEnabled;
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

  // rebalancing_config_min_nodes - computed: false, optional: true, required: false
  private _rebalancingConfigMinNodes?: number; 
  public get rebalancingConfigMinNodes() {
    return this.getNumberAttribute('rebalancing_config_min_nodes');
  }
  public set rebalancingConfigMinNodes(value: number) {
    this._rebalancingConfigMinNodes = value;
  }
  public resetRebalancingConfigMinNodes() {
    this._rebalancingConfigMinNodes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rebalancingConfigMinNodesInput() {
    return this._rebalancingConfigMinNodes;
  }

  // should_taint - computed: false, optional: true, required: false
  private _shouldTaint?: boolean | cdktf.IResolvable; 
  public get shouldTaint() {
    return this.getBooleanAttribute('should_taint');
  }
  public set shouldTaint(value: boolean | cdktf.IResolvable) {
    this._shouldTaint = value;
  }
  public resetShouldTaint() {
    this._shouldTaint = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shouldTaintInput() {
    return this._shouldTaint;
  }

  // constraints - computed: false, optional: true, required: false
  private _constraints = new NodeTemplateConstraintsOutputReference(this, "constraints");
  public get constraints() {
    return this._constraints;
  }
  public putConstraints(value: NodeTemplateConstraints) {
    this._constraints.internalValue = value;
  }
  public resetConstraints() {
    this._constraints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get constraintsInput() {
    return this._constraints.internalValue;
  }

  // custom_taints - computed: false, optional: true, required: false
  private _customTaints = new NodeTemplateCustomTaintsList(this, "custom_taints", false);
  public get customTaints() {
    return this._customTaints;
  }
  public putCustomTaints(value: NodeTemplateCustomTaints[] | cdktf.IResolvable) {
    this._customTaints.internalValue = value;
  }
  public resetCustomTaints() {
    this._customTaints.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get customTaintsInput() {
    return this._customTaints.internalValue;
  }

  // gpu - computed: false, optional: true, required: false
  private _gpu = new NodeTemplateGpuOutputReference(this, "gpu");
  public get gpu() {
    return this._gpu;
  }
  public putGpu(value: NodeTemplateGpu) {
    this._gpu.internalValue = value;
  }
  public resetGpu() {
    this._gpu.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gpuInput() {
    return this._gpu.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new NodeTemplateTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: NodeTemplateTimeouts) {
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
      clm_enabled: cdktf.booleanToTerraform(this._clmEnabled),
      cluster_id: cdktf.stringToTerraform(this._clusterId),
      configuration_id: cdktf.stringToTerraform(this._configurationId),
      custom_instances_enabled: cdktf.booleanToTerraform(this._customInstancesEnabled),
      custom_instances_with_extended_memory_enabled: cdktf.booleanToTerraform(this._customInstancesWithExtendedMemoryEnabled),
      custom_labels: cdktf.hashMapper(cdktf.stringToTerraform)(this._customLabels),
      id: cdktf.stringToTerraform(this._id),
      is_default: cdktf.booleanToTerraform(this._isDefault),
      is_enabled: cdktf.booleanToTerraform(this._isEnabled),
      name: cdktf.stringToTerraform(this._name),
      rebalancing_config_min_nodes: cdktf.numberToTerraform(this._rebalancingConfigMinNodes),
      should_taint: cdktf.booleanToTerraform(this._shouldTaint),
      constraints: nodeTemplateConstraintsToTerraform(this._constraints.internalValue),
      custom_taints: cdktf.listMapper(nodeTemplateCustomTaintsToTerraform, true)(this._customTaints.internalValue),
      gpu: nodeTemplateGpuToTerraform(this._gpu.internalValue),
      timeouts: nodeTemplateTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      clm_enabled: {
        value: cdktf.booleanToHclTerraform(this._clmEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      cluster_id: {
        value: cdktf.stringToHclTerraform(this._clusterId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      configuration_id: {
        value: cdktf.stringToHclTerraform(this._configurationId),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      custom_instances_enabled: {
        value: cdktf.booleanToHclTerraform(this._customInstancesEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_instances_with_extended_memory_enabled: {
        value: cdktf.booleanToHclTerraform(this._customInstancesWithExtendedMemoryEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      custom_labels: {
        value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(this._customLabels),
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
      is_default: {
        value: cdktf.booleanToHclTerraform(this._isDefault),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      is_enabled: {
        value: cdktf.booleanToHclTerraform(this._isEnabled),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      rebalancing_config_min_nodes: {
        value: cdktf.numberToHclTerraform(this._rebalancingConfigMinNodes),
        isBlock: false,
        type: "simple",
        storageClassType: "number",
      },
      should_taint: {
        value: cdktf.booleanToHclTerraform(this._shouldTaint),
        isBlock: false,
        type: "simple",
        storageClassType: "boolean",
      },
      constraints: {
        value: nodeTemplateConstraintsToHclTerraform(this._constraints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NodeTemplateConstraintsList",
      },
      custom_taints: {
        value: cdktf.listMapperHcl(nodeTemplateCustomTaintsToHclTerraform, true)(this._customTaints.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NodeTemplateCustomTaintsList",
      },
      gpu: {
        value: nodeTemplateGpuToHclTerraform(this._gpu.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "NodeTemplateGpuList",
      },
      timeouts: {
        value: nodeTemplateTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "NodeTemplateTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
