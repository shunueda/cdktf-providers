// https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface ClusterOverrideConfig extends cdktf.TerraformMetaArguments {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#id ClusterOverride#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * metadata block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#metadata ClusterOverride#metadata}
  */
  readonly metadata?: ClusterOverrideMetadata;
  /**
  * spec block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#spec ClusterOverride#spec}
  */
  readonly spec?: ClusterOverrideSpec;
  /**
  * timeouts block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#timeouts ClusterOverride#timeouts}
  */
  readonly timeouts?: ClusterOverrideTimeouts;
}
export interface ClusterOverrideMetadata {
  /**
  * annotations of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#annotations ClusterOverride#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * description of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#description ClusterOverride#description}
  */
  readonly description?: string;
  /**
  * labels of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#labels ClusterOverride#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * name of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#name ClusterOverride#name}
  */
  readonly name?: string;
  /**
  * Project of the resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#project ClusterOverride#project}
  */
  readonly project?: string;
}

export function clusterOverrideMetadataToTerraform(struct?: ClusterOverrideMetadataOutputReference | ClusterOverrideMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    description: cdktf.stringToTerraform(struct!.description),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    project: cdktf.stringToTerraform(struct!.project),
  }
}


export function clusterOverrideMetadataToHclTerraform(struct?: ClusterOverrideMetadataOutputReference | ClusterOverrideMetadata): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.annotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    description: {
      value: cdktf.stringToHclTerraform(struct!.description),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.labels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterOverrideMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterOverrideMetadata | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._description !== undefined) {
      hasAnyValues = true;
      internalValueResult.description = this._description;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterOverrideMetadata | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._annotations = undefined;
      this._description = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._project = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._annotations = value.annotations;
      this._description = value.description;
      this._labels = value.labels;
      this._name = value.name;
      this._project = value.project;
    }
  }

  // annotations - computed: false, optional: true, required: false
  private _annotations?: { [key: string]: string }; 
  public get annotations() {
    return this.getStringMapAttribute('annotations');
  }
  public set annotations(value: { [key: string]: string }) {
    this._annotations = value;
  }
  public resetAnnotations() {
    this._annotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationsInput() {
    return this._annotations;
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

  // labels - computed: false, optional: true, required: false
  private _labels?: { [key: string]: string }; 
  public get labels() {
    return this.getStringMapAttribute('labels');
  }
  public set labels(value: { [key: string]: string }) {
    this._labels = value;
  }
  public resetLabels() {
    this._labels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelsInput() {
    return this._labels;
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

  // project - computed: false, optional: true, required: false
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  public resetProject() {
    this._project = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }
}
export interface ClusterOverrideSpecClusterPlacementClusterLabels {
  /**
  * Key of the placement label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#key ClusterOverride#key}
  */
  readonly key?: string;
  /**
  * Value of the placement label
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#value ClusterOverride#value}
  */
  readonly value?: string;
}

export function clusterOverrideSpecClusterPlacementClusterLabelsToTerraform(struct?: ClusterOverrideSpecClusterPlacementClusterLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function clusterOverrideSpecClusterPlacementClusterLabelsToHclTerraform(struct?: ClusterOverrideSpecClusterPlacementClusterLabels | cdktf.IResolvable): any {
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

export class ClusterOverrideSpecClusterPlacementClusterLabelsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterOverrideSpecClusterPlacementClusterLabels | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterOverrideSpecClusterPlacementClusterLabels | cdktf.IResolvable | undefined) {
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

export class ClusterOverrideSpecClusterPlacementClusterLabelsList extends cdktf.ComplexList {
  public internalValue? : ClusterOverrideSpecClusterPlacementClusterLabels[] | cdktf.IResolvable

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
  public get(index: number): ClusterOverrideSpecClusterPlacementClusterLabelsOutputReference {
    return new ClusterOverrideSpecClusterPlacementClusterLabelsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterOverrideSpecClusterPlacement {
  /**
  * Kubernetes style label selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#cluster_selector ClusterOverride#cluster_selector}
  */
  readonly clusterSelector?: string;
  /**
  * node grouping keys
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#node_grouping_keys ClusterOverride#node_grouping_keys}
  */
  readonly nodeGroupingKeys?: string[];
  /**
  * placement type, value ClusterSelector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#placement_type ClusterOverride#placement_type}
  */
  readonly placementType?: string;
  /**
  * cluster_labels block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#cluster_labels ClusterOverride#cluster_labels}
  */
  readonly clusterLabels?: ClusterOverrideSpecClusterPlacementClusterLabels[] | cdktf.IResolvable;
}

export function clusterOverrideSpecClusterPlacementToTerraform(struct?: ClusterOverrideSpecClusterPlacementOutputReference | ClusterOverrideSpecClusterPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_selector: cdktf.stringToTerraform(struct!.clusterSelector),
    node_grouping_keys: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nodeGroupingKeys),
    placement_type: cdktf.stringToTerraform(struct!.placementType),
    cluster_labels: cdktf.listMapper(clusterOverrideSpecClusterPlacementClusterLabelsToTerraform, true)(struct!.clusterLabels),
  }
}


export function clusterOverrideSpecClusterPlacementToHclTerraform(struct?: ClusterOverrideSpecClusterPlacementOutputReference | ClusterOverrideSpecClusterPlacement): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_selector: {
      value: cdktf.stringToHclTerraform(struct!.clusterSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_grouping_keys: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nodeGroupingKeys),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    placement_type: {
      value: cdktf.stringToHclTerraform(struct!.placementType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_labels: {
      value: cdktf.listMapperHcl(clusterOverrideSpecClusterPlacementClusterLabelsToHclTerraform, true)(struct!.clusterLabels),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterOverrideSpecClusterPlacementClusterLabelsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterOverrideSpecClusterPlacementOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterOverrideSpecClusterPlacement | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterSelector = this._clusterSelector;
    }
    if (this._nodeGroupingKeys !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeGroupingKeys = this._nodeGroupingKeys;
    }
    if (this._placementType !== undefined) {
      hasAnyValues = true;
      internalValueResult.placementType = this._placementType;
    }
    if (this._clusterLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterLabels = this._clusterLabels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterOverrideSpecClusterPlacement | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._clusterSelector = undefined;
      this._nodeGroupingKeys = undefined;
      this._placementType = undefined;
      this._clusterLabels.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._clusterSelector = value.clusterSelector;
      this._nodeGroupingKeys = value.nodeGroupingKeys;
      this._placementType = value.placementType;
      this._clusterLabels.internalValue = value.clusterLabels;
    }
  }

  // cluster_selector - computed: false, optional: true, required: false
  private _clusterSelector?: string; 
  public get clusterSelector() {
    return this.getStringAttribute('cluster_selector');
  }
  public set clusterSelector(value: string) {
    this._clusterSelector = value;
  }
  public resetClusterSelector() {
    this._clusterSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSelectorInput() {
    return this._clusterSelector;
  }

  // node_grouping_keys - computed: false, optional: true, required: false
  private _nodeGroupingKeys?: string[]; 
  public get nodeGroupingKeys() {
    return this.getListAttribute('node_grouping_keys');
  }
  public set nodeGroupingKeys(value: string[]) {
    this._nodeGroupingKeys = value;
  }
  public resetNodeGroupingKeys() {
    this._nodeGroupingKeys = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeGroupingKeysInput() {
    return this._nodeGroupingKeys;
  }

  // placement_type - computed: false, optional: true, required: false
  private _placementType?: string; 
  public get placementType() {
    return this.getStringAttribute('placement_type');
  }
  public set placementType(value: string) {
    this._placementType = value;
  }
  public resetPlacementType() {
    this._placementType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get placementTypeInput() {
    return this._placementType;
  }

  // cluster_labels - computed: false, optional: true, required: false
  private _clusterLabels = new ClusterOverrideSpecClusterPlacementClusterLabelsList(this, "cluster_labels", false);
  public get clusterLabels() {
    return this._clusterLabels;
  }
  public putClusterLabels(value: ClusterOverrideSpecClusterPlacementClusterLabels[] | cdktf.IResolvable) {
    this._clusterLabels.internalValue = value;
  }
  public resetClusterLabels() {
    this._clusterLabels.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterLabelsInput() {
    return this._clusterLabels.internalValue;
  }
}
export interface ClusterOverrideSpecSharingProjects {
  /**
  * name of the project
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#name ClusterOverride#name}
  */
  readonly name?: string;
}

export function clusterOverrideSpecSharingProjectsToTerraform(struct?: ClusterOverrideSpecSharingProjects | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function clusterOverrideSpecSharingProjectsToHclTerraform(struct?: ClusterOverrideSpecSharingProjects | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterOverrideSpecSharingProjectsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterOverrideSpecSharingProjects | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterOverrideSpecSharingProjects | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
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
}

export class ClusterOverrideSpecSharingProjectsList extends cdktf.ComplexList {
  public internalValue? : ClusterOverrideSpecSharingProjects[] | cdktf.IResolvable

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
  public get(index: number): ClusterOverrideSpecSharingProjectsOutputReference {
    return new ClusterOverrideSpecSharingProjectsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterOverrideSpecSharing {
  /**
  * flag to specify if sharing is enabled for resource
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#enabled ClusterOverride#enabled}
  */
  readonly enabled?: boolean | cdktf.IResolvable;
  /**
  * projects block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#projects ClusterOverride#projects}
  */
  readonly projects?: ClusterOverrideSpecSharingProjects[] | cdktf.IResolvable;
}

export function clusterOverrideSpecSharingToTerraform(struct?: ClusterOverrideSpecSharingOutputReference | ClusterOverrideSpecSharing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enabled: cdktf.booleanToTerraform(struct!.enabled),
    projects: cdktf.listMapper(clusterOverrideSpecSharingProjectsToTerraform, true)(struct!.projects),
  }
}


export function clusterOverrideSpecSharingToHclTerraform(struct?: ClusterOverrideSpecSharingOutputReference | ClusterOverrideSpecSharing): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enabled: {
      value: cdktf.booleanToHclTerraform(struct!.enabled),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    projects: {
      value: cdktf.listMapperHcl(clusterOverrideSpecSharingProjectsToHclTerraform, true)(struct!.projects),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterOverrideSpecSharingProjectsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterOverrideSpecSharingOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterOverrideSpecSharing | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enabled !== undefined) {
      hasAnyValues = true;
      internalValueResult.enabled = this._enabled;
    }
    if (this._projects?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.projects = this._projects?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterOverrideSpecSharing | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._enabled = undefined;
      this._projects.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._enabled = value.enabled;
      this._projects.internalValue = value.projects;
    }
  }

  // enabled - computed: false, optional: true, required: false
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  public resetEnabled() {
    this._enabled = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // projects - computed: false, optional: true, required: false
  private _projects = new ClusterOverrideSpecSharingProjectsList(this, "projects", false);
  public get projects() {
    return this._projects;
  }
  public putProjects(value: ClusterOverrideSpecSharingProjects[] | cdktf.IResolvable) {
    this._projects.internalValue = value;
  }
  public resetProjects() {
    this._projects.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get projectsInput() {
    return this._projects.internalValue;
  }
}
export interface ClusterOverrideSpecValuesRepoArtifactMetaGitOptionsRepoArtifactFiles {
  /**
  * file type
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#file_type ClusterOverride#file_type}
  */
  readonly fileType?: string;
  /**
  * name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#name ClusterOverride#name}
  */
  readonly name?: string;
  /**
  * file path
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#relative_path ClusterOverride#relative_path}
  */
  readonly relativePath?: string;
}

export function clusterOverrideSpecValuesRepoArtifactMetaGitOptionsRepoArtifactFilesToTerraform(struct?: ClusterOverrideSpecValuesRepoArtifactMetaGitOptionsRepoArtifactFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_type: cdktf.stringToTerraform(struct!.fileType),
    name: cdktf.stringToTerraform(struct!.name),
    relative_path: cdktf.stringToTerraform(struct!.relativePath),
  }
}


export function clusterOverrideSpecValuesRepoArtifactMetaGitOptionsRepoArtifactFilesToHclTerraform(struct?: ClusterOverrideSpecValuesRepoArtifactMetaGitOptionsRepoArtifactFiles | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_type: {
      value: cdktf.stringToHclTerraform(struct!.fileType),
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
    relative_path: {
      value: cdktf.stringToHclTerraform(struct!.relativePath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterOverrideSpecValuesRepoArtifactMetaGitOptionsRepoArtifactFilesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterOverrideSpecValuesRepoArtifactMetaGitOptionsRepoArtifactFiles | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileType !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileType = this._fileType;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._relativePath !== undefined) {
      hasAnyValues = true;
      internalValueResult.relativePath = this._relativePath;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterOverrideSpecValuesRepoArtifactMetaGitOptionsRepoArtifactFiles | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileType = undefined;
      this._name = undefined;
      this._relativePath = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileType = value.fileType;
      this._name = value.name;
      this._relativePath = value.relativePath;
    }
  }

  // file_type - computed: false, optional: true, required: false
  private _fileType?: string; 
  public get fileType() {
    return this.getStringAttribute('file_type');
  }
  public set fileType(value: string) {
    this._fileType = value;
  }
  public resetFileType() {
    this._fileType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileTypeInput() {
    return this._fileType;
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

  // relative_path - computed: false, optional: true, required: false
  private _relativePath?: string; 
  public get relativePath() {
    return this.getStringAttribute('relative_path');
  }
  public set relativePath(value: string) {
    this._relativePath = value;
  }
  public resetRelativePath() {
    this._relativePath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get relativePathInput() {
    return this._relativePath;
  }
}

export class ClusterOverrideSpecValuesRepoArtifactMetaGitOptionsRepoArtifactFilesList extends cdktf.ComplexList {
  public internalValue? : ClusterOverrideSpecValuesRepoArtifactMetaGitOptionsRepoArtifactFiles[] | cdktf.IResolvable

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
  public get(index: number): ClusterOverrideSpecValuesRepoArtifactMetaGitOptionsRepoArtifactFilesOutputReference {
    return new ClusterOverrideSpecValuesRepoArtifactMetaGitOptionsRepoArtifactFilesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterOverrideSpecValuesRepoArtifactMetaGitOptions {
  /**
  * repository revision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#revision ClusterOverride#revision}
  */
  readonly revision?: string;
  /**
  * repo_artifact_files block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#repo_artifact_files ClusterOverride#repo_artifact_files}
  */
  readonly repoArtifactFiles?: ClusterOverrideSpecValuesRepoArtifactMetaGitOptionsRepoArtifactFiles[] | cdktf.IResolvable;
}

export function clusterOverrideSpecValuesRepoArtifactMetaGitOptionsToTerraform(struct?: ClusterOverrideSpecValuesRepoArtifactMetaGitOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    revision: cdktf.stringToTerraform(struct!.revision),
    repo_artifact_files: cdktf.listMapper(clusterOverrideSpecValuesRepoArtifactMetaGitOptionsRepoArtifactFilesToTerraform, true)(struct!.repoArtifactFiles),
  }
}


export function clusterOverrideSpecValuesRepoArtifactMetaGitOptionsToHclTerraform(struct?: ClusterOverrideSpecValuesRepoArtifactMetaGitOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    revision: {
      value: cdktf.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_artifact_files: {
      value: cdktf.listMapperHcl(clusterOverrideSpecValuesRepoArtifactMetaGitOptionsRepoArtifactFilesToHclTerraform, true)(struct!.repoArtifactFiles),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterOverrideSpecValuesRepoArtifactMetaGitOptionsRepoArtifactFilesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterOverrideSpecValuesRepoArtifactMetaGitOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterOverrideSpecValuesRepoArtifactMetaGitOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    if (this._repoArtifactFiles?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoArtifactFiles = this._repoArtifactFiles?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterOverrideSpecValuesRepoArtifactMetaGitOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._revision = undefined;
      this._repoArtifactFiles.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._revision = value.revision;
      this._repoArtifactFiles.internalValue = value.repoArtifactFiles;
    }
  }

  // revision - computed: false, optional: true, required: false
  private _revision?: string; 
  public get revision() {
    return this.getStringAttribute('revision');
  }
  public set revision(value: string) {
    this._revision = value;
  }
  public resetRevision() {
    this._revision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionInput() {
    return this._revision;
  }

  // repo_artifact_files - computed: false, optional: true, required: false
  private _repoArtifactFiles = new ClusterOverrideSpecValuesRepoArtifactMetaGitOptionsRepoArtifactFilesList(this, "repo_artifact_files", false);
  public get repoArtifactFiles() {
    return this._repoArtifactFiles;
  }
  public putRepoArtifactFiles(value: ClusterOverrideSpecValuesRepoArtifactMetaGitOptionsRepoArtifactFiles[] | cdktf.IResolvable) {
    this._repoArtifactFiles.internalValue = value;
  }
  public resetRepoArtifactFiles() {
    this._repoArtifactFiles.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get repoArtifactFilesInput() {
    return this._repoArtifactFiles.internalValue;
  }
}

export class ClusterOverrideSpecValuesRepoArtifactMetaGitOptionsList extends cdktf.ComplexList {
  public internalValue? : ClusterOverrideSpecValuesRepoArtifactMetaGitOptions[] | cdktf.IResolvable

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
  public get(index: number): ClusterOverrideSpecValuesRepoArtifactMetaGitOptionsOutputReference {
    return new ClusterOverrideSpecValuesRepoArtifactMetaGitOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterOverrideSpecValuesRepoArtifactMetaHelmOptions {
  /**
  * chart name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#chart_name ClusterOverride#chart_name}
  */
  readonly chartName?: string;
  /**
  * tag for chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#tag ClusterOverride#tag}
  */
  readonly tag?: string;
}

export function clusterOverrideSpecValuesRepoArtifactMetaHelmOptionsToTerraform(struct?: ClusterOverrideSpecValuesRepoArtifactMetaHelmOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart_name: cdktf.stringToTerraform(struct!.chartName),
    tag: cdktf.stringToTerraform(struct!.tag),
  }
}


export function clusterOverrideSpecValuesRepoArtifactMetaHelmOptionsToHclTerraform(struct?: ClusterOverrideSpecValuesRepoArtifactMetaHelmOptions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart_name: {
      value: cdktf.stringToHclTerraform(struct!.chartName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tag: {
      value: cdktf.stringToHclTerraform(struct!.tag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterOverrideSpecValuesRepoArtifactMetaHelmOptionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): ClusterOverrideSpecValuesRepoArtifactMetaHelmOptions | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chartName !== undefined) {
      hasAnyValues = true;
      internalValueResult.chartName = this._chartName;
    }
    if (this._tag !== undefined) {
      hasAnyValues = true;
      internalValueResult.tag = this._tag;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterOverrideSpecValuesRepoArtifactMetaHelmOptions | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chartName = undefined;
      this._tag = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chartName = value.chartName;
      this._tag = value.tag;
    }
  }

  // chart_name - computed: false, optional: true, required: false
  private _chartName?: string; 
  public get chartName() {
    return this.getStringAttribute('chart_name');
  }
  public set chartName(value: string) {
    this._chartName = value;
  }
  public resetChartName() {
    this._chartName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartNameInput() {
    return this._chartName;
  }

  // tag - computed: false, optional: true, required: false
  private _tag?: string; 
  public get tag() {
    return this.getStringAttribute('tag');
  }
  public set tag(value: string) {
    this._tag = value;
  }
  public resetTag() {
    this._tag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagInput() {
    return this._tag;
  }
}

export class ClusterOverrideSpecValuesRepoArtifactMetaHelmOptionsList extends cdktf.ComplexList {
  public internalValue? : ClusterOverrideSpecValuesRepoArtifactMetaHelmOptions[] | cdktf.IResolvable

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
  public get(index: number): ClusterOverrideSpecValuesRepoArtifactMetaHelmOptionsOutputReference {
    return new ClusterOverrideSpecValuesRepoArtifactMetaHelmOptionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface ClusterOverrideSpecValuesRepoArtifactMeta {
  /**
  * timeouts
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#timeouts ClusterOverride#timeouts}
  */
  readonly timeouts?: number;
  /**
  * git_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#git_options ClusterOverride#git_options}
  */
  readonly gitOptions?: ClusterOverrideSpecValuesRepoArtifactMetaGitOptions[] | cdktf.IResolvable;
  /**
  * helm_options block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#helm_options ClusterOverride#helm_options}
  */
  readonly helmOptions?: ClusterOverrideSpecValuesRepoArtifactMetaHelmOptions[] | cdktf.IResolvable;
}

export function clusterOverrideSpecValuesRepoArtifactMetaToTerraform(struct?: ClusterOverrideSpecValuesRepoArtifactMetaOutputReference | ClusterOverrideSpecValuesRepoArtifactMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    timeouts: cdktf.numberToTerraform(struct!.timeouts),
    git_options: cdktf.listMapper(clusterOverrideSpecValuesRepoArtifactMetaGitOptionsToTerraform, true)(struct!.gitOptions),
    helm_options: cdktf.listMapper(clusterOverrideSpecValuesRepoArtifactMetaHelmOptionsToTerraform, true)(struct!.helmOptions),
  }
}


export function clusterOverrideSpecValuesRepoArtifactMetaToHclTerraform(struct?: ClusterOverrideSpecValuesRepoArtifactMetaOutputReference | ClusterOverrideSpecValuesRepoArtifactMeta): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    timeouts: {
      value: cdktf.numberToHclTerraform(struct!.timeouts),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    git_options: {
      value: cdktf.listMapperHcl(clusterOverrideSpecValuesRepoArtifactMetaGitOptionsToHclTerraform, true)(struct!.gitOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterOverrideSpecValuesRepoArtifactMetaGitOptionsList",
    },
    helm_options: {
      value: cdktf.listMapperHcl(clusterOverrideSpecValuesRepoArtifactMetaHelmOptionsToHclTerraform, true)(struct!.helmOptions),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterOverrideSpecValuesRepoArtifactMetaHelmOptionsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterOverrideSpecValuesRepoArtifactMetaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterOverrideSpecValuesRepoArtifactMeta | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._timeouts !== undefined) {
      hasAnyValues = true;
      internalValueResult.timeouts = this._timeouts;
    }
    if (this._gitOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitOptions = this._gitOptions?.internalValue;
    }
    if (this._helmOptions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helmOptions = this._helmOptions?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterOverrideSpecValuesRepoArtifactMeta | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._timeouts = undefined;
      this._gitOptions.internalValue = undefined;
      this._helmOptions.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._timeouts = value.timeouts;
      this._gitOptions.internalValue = value.gitOptions;
      this._helmOptions.internalValue = value.helmOptions;
    }
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: number; 
  public get timeouts() {
    return this.getNumberAttribute('timeouts');
  }
  public set timeouts(value: number) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts;
  }

  // git_options - computed: false, optional: true, required: false
  private _gitOptions = new ClusterOverrideSpecValuesRepoArtifactMetaGitOptionsList(this, "git_options", false);
  public get gitOptions() {
    return this._gitOptions;
  }
  public putGitOptions(value: ClusterOverrideSpecValuesRepoArtifactMetaGitOptions[] | cdktf.IResolvable) {
    this._gitOptions.internalValue = value;
  }
  public resetGitOptions() {
    this._gitOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitOptionsInput() {
    return this._gitOptions.internalValue;
  }

  // helm_options - computed: false, optional: true, required: false
  private _helmOptions = new ClusterOverrideSpecValuesRepoArtifactMetaHelmOptionsList(this, "helm_options", false);
  public get helmOptions() {
    return this._helmOptions;
  }
  public putHelmOptions(value: ClusterOverrideSpecValuesRepoArtifactMetaHelmOptions[] | cdktf.IResolvable) {
    this._helmOptions.internalValue = value;
  }
  public resetHelmOptions() {
    this._helmOptions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmOptionsInput() {
    return this._helmOptions.internalValue;
  }
}
export interface ClusterOverrideSpec {
  /**
  * Override Type YAML or HELM
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#artifact_type ClusterOverride#artifact_type}
  */
  readonly artifactType?: string;
  /**
  * cluster selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#cluster_selector ClusterOverride#cluster_selector}
  */
  readonly clusterSelector?: string;
  /**
  * override value
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#override_values ClusterOverride#override_values}
  */
  readonly overrideValues?: string;
  /**
  * resource selector
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#resource_selector ClusterOverride#resource_selector}
  */
  readonly resourceSelector?: string;
  /**
  * override type, accepted values are *ClusterOverrideTypeWorkload*, *ClusterOverrideTypeAddon* , *ClusterOverrideTypeWorkloadSetting*, *ClusterOverrideTypeAddonSetting* and *ClusterOverrideTypeClusterQuota*
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#type ClusterOverride#type}
  */
  readonly type?: string;
  /**
  * value repo ref
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#value_repo_ref ClusterOverride#value_repo_ref}
  */
  readonly valueRepoRef?: string;
  /**
  * cluster_placement block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#cluster_placement ClusterOverride#cluster_placement}
  */
  readonly clusterPlacement?: ClusterOverrideSpecClusterPlacement;
  /**
  * sharing block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#sharing ClusterOverride#sharing}
  */
  readonly sharing?: ClusterOverrideSpecSharing;
  /**
  * values_repo_artifact_meta block
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#values_repo_artifact_meta ClusterOverride#values_repo_artifact_meta}
  */
  readonly valuesRepoArtifactMeta?: ClusterOverrideSpecValuesRepoArtifactMeta;
}

export function clusterOverrideSpecToTerraform(struct?: ClusterOverrideSpecOutputReference | ClusterOverrideSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    artifact_type: cdktf.stringToTerraform(struct!.artifactType),
    cluster_selector: cdktf.stringToTerraform(struct!.clusterSelector),
    override_values: cdktf.stringToTerraform(struct!.overrideValues),
    resource_selector: cdktf.stringToTerraform(struct!.resourceSelector),
    type: cdktf.stringToTerraform(struct!.type),
    value_repo_ref: cdktf.stringToTerraform(struct!.valueRepoRef),
    cluster_placement: clusterOverrideSpecClusterPlacementToTerraform(struct!.clusterPlacement),
    sharing: clusterOverrideSpecSharingToTerraform(struct!.sharing),
    values_repo_artifact_meta: clusterOverrideSpecValuesRepoArtifactMetaToTerraform(struct!.valuesRepoArtifactMeta),
  }
}


export function clusterOverrideSpecToHclTerraform(struct?: ClusterOverrideSpecOutputReference | ClusterOverrideSpec): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    artifact_type: {
      value: cdktf.stringToHclTerraform(struct!.artifactType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_selector: {
      value: cdktf.stringToHclTerraform(struct!.clusterSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    override_values: {
      value: cdktf.stringToHclTerraform(struct!.overrideValues),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource_selector: {
      value: cdktf.stringToHclTerraform(struct!.resourceSelector),
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
    value_repo_ref: {
      value: cdktf.stringToHclTerraform(struct!.valueRepoRef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    cluster_placement: {
      value: clusterOverrideSpecClusterPlacementToHclTerraform(struct!.clusterPlacement),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterOverrideSpecClusterPlacementList",
    },
    sharing: {
      value: clusterOverrideSpecSharingToHclTerraform(struct!.sharing),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterOverrideSpecSharingList",
    },
    values_repo_artifact_meta: {
      value: clusterOverrideSpecValuesRepoArtifactMetaToHclTerraform(struct!.valuesRepoArtifactMeta),
      isBlock: true,
      type: "list",
      storageClassType: "ClusterOverrideSpecValuesRepoArtifactMetaList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class ClusterOverrideSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): ClusterOverrideSpec | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._artifactType !== undefined) {
      hasAnyValues = true;
      internalValueResult.artifactType = this._artifactType;
    }
    if (this._clusterSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterSelector = this._clusterSelector;
    }
    if (this._overrideValues !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrideValues = this._overrideValues;
    }
    if (this._resourceSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.resourceSelector = this._resourceSelector;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    if (this._valueRepoRef !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueRepoRef = this._valueRepoRef;
    }
    if (this._clusterPlacement?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterPlacement = this._clusterPlacement?.internalValue;
    }
    if (this._sharing?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sharing = this._sharing?.internalValue;
    }
    if (this._valuesRepoArtifactMeta?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesRepoArtifactMeta = this._valuesRepoArtifactMeta?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: ClusterOverrideSpec | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._artifactType = undefined;
      this._clusterSelector = undefined;
      this._overrideValues = undefined;
      this._resourceSelector = undefined;
      this._type = undefined;
      this._valueRepoRef = undefined;
      this._clusterPlacement.internalValue = undefined;
      this._sharing.internalValue = undefined;
      this._valuesRepoArtifactMeta.internalValue = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._artifactType = value.artifactType;
      this._clusterSelector = value.clusterSelector;
      this._overrideValues = value.overrideValues;
      this._resourceSelector = value.resourceSelector;
      this._type = value.type;
      this._valueRepoRef = value.valueRepoRef;
      this._clusterPlacement.internalValue = value.clusterPlacement;
      this._sharing.internalValue = value.sharing;
      this._valuesRepoArtifactMeta.internalValue = value.valuesRepoArtifactMeta;
    }
  }

  // artifact_type - computed: false, optional: true, required: false
  private _artifactType?: string; 
  public get artifactType() {
    return this.getStringAttribute('artifact_type');
  }
  public set artifactType(value: string) {
    this._artifactType = value;
  }
  public resetArtifactType() {
    this._artifactType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get artifactTypeInput() {
    return this._artifactType;
  }

  // cluster_selector - computed: false, optional: true, required: false
  private _clusterSelector?: string; 
  public get clusterSelector() {
    return this.getStringAttribute('cluster_selector');
  }
  public set clusterSelector(value: string) {
    this._clusterSelector = value;
  }
  public resetClusterSelector() {
    this._clusterSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterSelectorInput() {
    return this._clusterSelector;
  }

  // override_values - computed: false, optional: true, required: false
  private _overrideValues?: string; 
  public get overrideValues() {
    return this.getStringAttribute('override_values');
  }
  public set overrideValues(value: string) {
    this._overrideValues = value;
  }
  public resetOverrideValues() {
    this._overrideValues = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overrideValuesInput() {
    return this._overrideValues;
  }

  // resource_selector - computed: false, optional: true, required: false
  private _resourceSelector?: string; 
  public get resourceSelector() {
    return this.getStringAttribute('resource_selector');
  }
  public set resourceSelector(value: string) {
    this._resourceSelector = value;
  }
  public resetResourceSelector() {
    this._resourceSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceSelectorInput() {
    return this._resourceSelector;
  }

  // type - computed: false, optional: true, required: false
  private _type?: string; 
  public get type() {
    return this.getStringAttribute('type');
  }
  public set type(value: string) {
    this._type = value;
  }
  public resetType() {
    this._type = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get typeInput() {
    return this._type;
  }

  // value_repo_ref - computed: false, optional: true, required: false
  private _valueRepoRef?: string; 
  public get valueRepoRef() {
    return this.getStringAttribute('value_repo_ref');
  }
  public set valueRepoRef(value: string) {
    this._valueRepoRef = value;
  }
  public resetValueRepoRef() {
    this._valueRepoRef = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueRepoRefInput() {
    return this._valueRepoRef;
  }

  // cluster_placement - computed: false, optional: true, required: false
  private _clusterPlacement = new ClusterOverrideSpecClusterPlacementOutputReference(this, "cluster_placement");
  public get clusterPlacement() {
    return this._clusterPlacement;
  }
  public putClusterPlacement(value: ClusterOverrideSpecClusterPlacement) {
    this._clusterPlacement.internalValue = value;
  }
  public resetClusterPlacement() {
    this._clusterPlacement.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterPlacementInput() {
    return this._clusterPlacement.internalValue;
  }

  // sharing - computed: false, optional: true, required: false
  private _sharing = new ClusterOverrideSpecSharingOutputReference(this, "sharing");
  public get sharing() {
    return this._sharing;
  }
  public putSharing(value: ClusterOverrideSpecSharing) {
    this._sharing.internalValue = value;
  }
  public resetSharing() {
    this._sharing.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sharingInput() {
    return this._sharing.internalValue;
  }

  // values_repo_artifact_meta - computed: false, optional: true, required: false
  private _valuesRepoArtifactMeta = new ClusterOverrideSpecValuesRepoArtifactMetaOutputReference(this, "values_repo_artifact_meta");
  public get valuesRepoArtifactMeta() {
    return this._valuesRepoArtifactMeta;
  }
  public putValuesRepoArtifactMeta(value: ClusterOverrideSpecValuesRepoArtifactMeta) {
    this._valuesRepoArtifactMeta.internalValue = value;
  }
  public resetValuesRepoArtifactMeta() {
    this._valuesRepoArtifactMeta.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesRepoArtifactMetaInput() {
    return this._valuesRepoArtifactMeta.internalValue;
  }
}
export interface ClusterOverrideTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#create ClusterOverride#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#delete ClusterOverride#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#update ClusterOverride#update}
  */
  readonly update?: string;
}

export function clusterOverrideTimeoutsToTerraform(struct?: ClusterOverrideTimeouts | cdktf.IResolvable): any {
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


export function clusterOverrideTimeoutsToHclTerraform(struct?: ClusterOverrideTimeouts | cdktf.IResolvable): any {
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

export class ClusterOverrideTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): ClusterOverrideTimeouts | cdktf.IResolvable | undefined {
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

  public set internalValue(value: ClusterOverrideTimeouts | cdktf.IResolvable | undefined) {
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
* Represents a {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override rafay_cluster_override}
*/
export class ClusterOverride extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "rafay_cluster_override";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a ClusterOverride resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the ClusterOverride to import
  * @param importFromId The id of the existing ClusterOverride that should be imported. Refer to the {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the ClusterOverride to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "rafay_cluster_override", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/rafaysystems/rafay/1.1.53/docs/resources/cluster_override rafay_cluster_override} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options ClusterOverrideConfig = {}
  */
  public constructor(scope: Construct, id: string, config: ClusterOverrideConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'rafay_cluster_override',
      terraformGeneratorMetadata: {
        providerName: 'rafay',
        providerVersion: '1.1.53',
        providerVersionConstraint: '1.1.53'
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
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
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

  // metadata - computed: false, optional: true, required: false
  private _metadata = new ClusterOverrideMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: ClusterOverrideMetadata) {
    this._metadata.internalValue = value;
  }
  public resetMetadata() {
    this._metadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new ClusterOverrideSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: ClusterOverrideSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new ClusterOverrideTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: ClusterOverrideTimeouts) {
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
      metadata: clusterOverrideMetadataToTerraform(this._metadata.internalValue),
      spec: clusterOverrideSpecToTerraform(this._spec.internalValue),
      timeouts: clusterOverrideTimeoutsToTerraform(this._timeouts.internalValue),
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
      metadata: {
        value: clusterOverrideMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterOverrideMetadataList",
      },
      spec: {
        value: clusterOverrideSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "list",
        storageClassType: "ClusterOverrideSpecList",
      },
      timeouts: {
        value: clusterOverrideTimeoutsToHclTerraform(this._timeouts.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "ClusterOverrideTimeouts",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
