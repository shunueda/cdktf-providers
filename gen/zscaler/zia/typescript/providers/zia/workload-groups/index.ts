// https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/workload_groups
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface WorkloadGroupsConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the workload group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/workload_groups#description WorkloadGroups#description}
  */
  readonly description?: string;
  /**
  * The name of the workload group
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/workload_groups#name WorkloadGroups#name}
  */
  readonly name?: string;
  /**
  * expression_json block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/workload_groups#expression_json WorkloadGroups#expression_json}
  */
  readonly expressionJson?: WorkloadGroupsExpressionJson[] | cdktf.IResolvable;
}
export interface WorkloadGroupsExpressionJsonExpressionContainersTagContainerTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/workload_groups#key WorkloadGroups#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/workload_groups#value WorkloadGroups#value}
  */
  readonly value?: string;
}

export function workloadGroupsExpressionJsonExpressionContainersTagContainerTagsToTerraform(struct?: WorkloadGroupsExpressionJsonExpressionContainersTagContainerTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function workloadGroupsExpressionJsonExpressionContainersTagContainerTagsToHclTerraform(struct?: WorkloadGroupsExpressionJsonExpressionContainersTagContainerTags | cdktf.IResolvable): any {
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

export class WorkloadGroupsExpressionJsonExpressionContainersTagContainerTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadGroupsExpressionJsonExpressionContainersTagContainerTags | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
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

  public set internalValue(value: WorkloadGroupsExpressionJsonExpressionContainersTagContainerTags | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._key = value.key;
      this._value = value.value;
    }
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

export class WorkloadGroupsExpressionJsonExpressionContainersTagContainerTagsList extends cdktf.ComplexList {
  public internalValue? : WorkloadGroupsExpressionJsonExpressionContainersTagContainerTags[] | cdktf.IResolvable

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
  public get(index: number): WorkloadGroupsExpressionJsonExpressionContainersTagContainerTagsOutputReference {
    return new WorkloadGroupsExpressionJsonExpressionContainersTagContainerTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadGroupsExpressionJsonExpressionContainersTagContainer {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/workload_groups#operator WorkloadGroups#operator}
  */
  readonly operator?: string;
  /**
  * tags block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/workload_groups#tags WorkloadGroups#tags}
  */
  readonly tags?: WorkloadGroupsExpressionJsonExpressionContainersTagContainerTags[] | cdktf.IResolvable;
}

export function workloadGroupsExpressionJsonExpressionContainersTagContainerToTerraform(struct?: WorkloadGroupsExpressionJsonExpressionContainersTagContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    tags: cdktf.listMapper(workloadGroupsExpressionJsonExpressionContainersTagContainerTagsToTerraform, true)(struct!.tags),
  }
}


export function workloadGroupsExpressionJsonExpressionContainersTagContainerToHclTerraform(struct?: WorkloadGroupsExpressionJsonExpressionContainersTagContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.listMapperHcl(workloadGroupsExpressionJsonExpressionContainersTagContainerTagsToHclTerraform, true)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadGroupsExpressionJsonExpressionContainersTagContainerTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadGroupsExpressionJsonExpressionContainersTagContainerOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadGroupsExpressionJsonExpressionContainersTagContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadGroupsExpressionJsonExpressionContainersTagContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._tags.internalValue = value.tags;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new WorkloadGroupsExpressionJsonExpressionContainersTagContainerTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: WorkloadGroupsExpressionJsonExpressionContainersTagContainerTags[] | cdktf.IResolvable) {
    this._tags.internalValue = value;
  }
  public resetTags() {
    this._tags.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags.internalValue;
  }
}

export class WorkloadGroupsExpressionJsonExpressionContainersTagContainerList extends cdktf.ComplexList {
  public internalValue? : WorkloadGroupsExpressionJsonExpressionContainersTagContainer[] | cdktf.IResolvable

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
  public get(index: number): WorkloadGroupsExpressionJsonExpressionContainersTagContainerOutputReference {
    return new WorkloadGroupsExpressionJsonExpressionContainersTagContainerOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadGroupsExpressionJsonExpressionContainers {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/workload_groups#operator WorkloadGroups#operator}
  */
  readonly operator?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/workload_groups#tag_type WorkloadGroups#tag_type}
  */
  readonly tagType?: string;
  /**
  * tag_container block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/workload_groups#tag_container WorkloadGroups#tag_container}
  */
  readonly tagContainer?: WorkloadGroupsExpressionJsonExpressionContainersTagContainer[] | cdktf.IResolvable;
}

export function workloadGroupsExpressionJsonExpressionContainersToTerraform(struct?: WorkloadGroupsExpressionJsonExpressionContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    operator: cdktf.stringToTerraform(struct!.operator),
    tag_type: cdktf.stringToTerraform(struct!.tagType),
    tag_container: cdktf.listMapper(workloadGroupsExpressionJsonExpressionContainersTagContainerToTerraform, true)(struct!.tagContainer),
  }
}


export function workloadGroupsExpressionJsonExpressionContainersToHclTerraform(struct?: WorkloadGroupsExpressionJsonExpressionContainers | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    operator: {
      value: cdktf.stringToHclTerraform(struct!.operator),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_type: {
      value: cdktf.stringToHclTerraform(struct!.tagType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag_container: {
      value: cdktf.listMapperHcl(workloadGroupsExpressionJsonExpressionContainersTagContainerToHclTerraform, true)(struct!.tagContainer),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadGroupsExpressionJsonExpressionContainersTagContainerList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadGroupsExpressionJsonExpressionContainersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadGroupsExpressionJsonExpressionContainers | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._operator !== undefined) {
      hasAnyValues = true;
      internalValueResult.operator = this._operator;
    }
    if (this._tagType !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagType = this._tagType;
    }
    if (this._tagContainer?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tagContainer = this._tagContainer?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadGroupsExpressionJsonExpressionContainers | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._operator = undefined;
      this._tagType = undefined;
      this._tagContainer.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._operator = value.operator;
      this._tagType = value.tagType;
      this._tagContainer.internalValue = value.tagContainer;
    }
  }

  // operator - computed: false, optional: true, required: false
  private _operator?: string; 
  public get operator() {
    return this.getStringAttribute('operator');
  }
  public set operator(value: string) {
    this._operator = value;
  }
  public resetOperator() {
    this._operator = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operatorInput() {
    return this._operator;
  }

  // tag_type - computed: false, optional: true, required: false
  private _tagType?: string; 
  public get tagType() {
    return this.getStringAttribute('tag_type');
  }
  public set tagType(value: string) {
    this._tagType = value;
  }
  public resetTagType() {
    this._tagType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagTypeInput() {
    return this._tagType;
  }

  // tag_container - computed: false, optional: true, required: false
  private _tagContainer = new WorkloadGroupsExpressionJsonExpressionContainersTagContainerList(this, "tag_container", false);
  public get tagContainer() {
    return this._tagContainer;
  }
  public putTagContainer(value: WorkloadGroupsExpressionJsonExpressionContainersTagContainer[] | cdktf.IResolvable) {
    this._tagContainer.internalValue = value;
  }
  public resetTagContainer() {
    this._tagContainer.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagContainerInput() {
    return this._tagContainer.internalValue;
  }
}

export class WorkloadGroupsExpressionJsonExpressionContainersList extends cdktf.ComplexList {
  public internalValue? : WorkloadGroupsExpressionJsonExpressionContainers[] | cdktf.IResolvable

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
  public get(index: number): WorkloadGroupsExpressionJsonExpressionContainersOutputReference {
    return new WorkloadGroupsExpressionJsonExpressionContainersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface WorkloadGroupsExpressionJson {
  /**
  * expression_containers block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/workload_groups#expression_containers WorkloadGroups#expression_containers}
  */
  readonly expressionContainers?: WorkloadGroupsExpressionJsonExpressionContainers[] | cdktf.IResolvable;
}

export function workloadGroupsExpressionJsonToTerraform(struct?: WorkloadGroupsExpressionJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    expression_containers: cdktf.listMapper(workloadGroupsExpressionJsonExpressionContainersToTerraform, true)(struct!.expressionContainers),
  }
}


export function workloadGroupsExpressionJsonToHclTerraform(struct?: WorkloadGroupsExpressionJson | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    expression_containers: {
      value: cdktf.listMapperHcl(workloadGroupsExpressionJsonExpressionContainersToHclTerraform, true)(struct!.expressionContainers),
      isBlock: true,
      type: "list",
      storageClassType: "WorkloadGroupsExpressionJsonExpressionContainersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class WorkloadGroupsExpressionJsonOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): WorkloadGroupsExpressionJson | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._expressionContainers?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.expressionContainers = this._expressionContainers?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: WorkloadGroupsExpressionJson | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._expressionContainers.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._expressionContainers.internalValue = value.expressionContainers;
    }
  }

  // expression_containers - computed: false, optional: true, required: false
  private _expressionContainers = new WorkloadGroupsExpressionJsonExpressionContainersList(this, "expression_containers", false);
  public get expressionContainers() {
    return this._expressionContainers;
  }
  public putExpressionContainers(value: WorkloadGroupsExpressionJsonExpressionContainers[] | cdktf.IResolvable) {
    this._expressionContainers.internalValue = value;
  }
  public resetExpressionContainers() {
    this._expressionContainers.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionContainersInput() {
    return this._expressionContainers.internalValue;
  }
}

export class WorkloadGroupsExpressionJsonList extends cdktf.ComplexList {
  public internalValue? : WorkloadGroupsExpressionJson[] | cdktf.IResolvable

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
  public get(index: number): WorkloadGroupsExpressionJsonOutputReference {
    return new WorkloadGroupsExpressionJsonOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/workload_groups zia_workload_groups}
*/
export class WorkloadGroups extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "zia_workload_groups";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a WorkloadGroups resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the WorkloadGroups to import
  * @param importFromId The id of the existing WorkloadGroups that should be imported. Refer to the {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/workload_groups#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the WorkloadGroups to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "zia_workload_groups", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/zscaler/zia/4.6.2/docs/resources/workload_groups zia_workload_groups} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options WorkloadGroupsConfig = {}
  */
  public constructor(scope: Construct, id: string, config: WorkloadGroupsConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'zia_workload_groups',
      terraformGeneratorMetadata: {
        providerName: 'zia',
        providerVersion: '4.6.2',
        providerVersionConstraint: '4.6.2'
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
    this._name = config.name;
    this._expressionJson.internalValue = config.expressionJson;
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

  // group_id - computed: true, optional: false, required: false
  public get groupId() {
    return this.getNumberAttribute('group_id');
  }

  // id - computed: true, optional: false, required: false
  public get id() {
    return this.getStringAttribute('id');
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

  // expression_json - computed: false, optional: true, required: false
  private _expressionJson = new WorkloadGroupsExpressionJsonList(this, "expression_json", false);
  public get expressionJson() {
    return this._expressionJson;
  }
  public putExpressionJson(value: WorkloadGroupsExpressionJson[] | cdktf.IResolvable) {
    this._expressionJson.internalValue = value;
  }
  public resetExpressionJson() {
    this._expressionJson.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get expressionJsonInput() {
    return this._expressionJson.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      name: cdktf.stringToTerraform(this._name),
      expression_json: cdktf.listMapper(workloadGroupsExpressionJsonToTerraform, true)(this._expressionJson.internalValue),
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
      name: {
        value: cdktf.stringToHclTerraform(this._name),
        isBlock: false,
        type: "simple",
        storageClassType: "string",
      },
      expression_json: {
        value: cdktf.listMapperHcl(workloadGroupsExpressionJsonToHclTerraform, true)(this._expressionJson.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "WorkloadGroupsExpressionJsonList",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
