// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1_manifest#metadata DataK8SAppsKubeblocksIoClusterDefinitionV1Manifest#metadata}
  */
  readonly metadata: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestMetadata;
  /**
  * ClusterDefinitionSpec defines the desired state of ClusterDefinition.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1_manifest#spec DataK8SAppsKubeblocksIoClusterDefinitionV1Manifest#spec}
  */
  readonly spec?: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpec;
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1_manifest#annotations DataK8SAppsKubeblocksIoClusterDefinitionV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1_manifest#labels DataK8SAppsKubeblocksIoClusterDefinitionV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1_manifest#name DataK8SAppsKubeblocksIoClusterDefinitionV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1ManifestMetadataToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1ManifestMetadataToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotations = this._annotations;
    }
    if (this._labels !== undefined) {
      hasAnyValues = true;
      internalValueResult.labels = this._labels;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotations = value.annotations;
      this._labels = value.labels;
      this._name = value.name;
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
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesComponents {
  /**
  * Specifies the exact name, name prefix, or regular expression pattern for matching the name of the ComponentDefinition custom resource (CR) that defines the Component's characteristics and behavior. The system selects the ComponentDefinition CR with the latest version that matches the pattern. This approach allows: 1. Precise selection by providing the exact name of a ComponentDefinition CR. 2. Flexible and automatic selection of the most up-to-date ComponentDefinition CR by specifying a name prefix or regular expression pattern. Once set, this field cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1_manifest#comp_def DataK8SAppsKubeblocksIoClusterDefinitionV1Manifest#comp_def}
  */
  readonly compDef: string;
  /**
  * Defines the unique identifier of the component within the cluster topology. It follows IANA Service naming rules and is used as part of the Service's DNS name. The name must start with a lowercase letter, can contain lowercase letters, numbers, and hyphens, and must end with a lowercase letter or number. Cannot be updated once set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1_manifest#name DataK8SAppsKubeblocksIoClusterDefinitionV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesComponentsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    comp_def: cdktf.stringToTerraform(struct!.compDef),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesComponentsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesComponents | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    comp_def: {
      value: cdktf.stringToHclTerraform(struct!.compDef),
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesComponentsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesComponents | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._compDef !== undefined) {
      hasAnyValues = true;
      internalValueResult.compDef = this._compDef;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesComponents | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._compDef = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._compDef = value.compDef;
      this._name = value.name;
    }
  }

  // comp_def - computed: false, optional: false, required: true
  private _compDef?: string; 
  public get compDef() {
    return this.getStringAttribute('comp_def');
  }
  public set compDef(value: string) {
    this._compDef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get compDefInput() {
    return this._compDef;
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
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesComponentsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesComponents[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesComponentsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesComponentsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesOrders {
  /**
  * Specifies the order for creating and initializing entities. This is designed for entities that depend on one another. Entities without dependencies can be grouped together. Entities that can be provisioned independently or have no dependencies can be listed together in the same stage, separated by commas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1_manifest#provision DataK8SAppsKubeblocksIoClusterDefinitionV1Manifest#provision}
  */
  readonly provision?: string[];
  /**
  * Outlines the order for stopping and deleting entities. This sequence is designed for entities that require a graceful shutdown or have interdependencies. Entities that can be terminated independently or have no dependencies can be listed together in the same stage, separated by commas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1_manifest#terminate DataK8SAppsKubeblocksIoClusterDefinitionV1Manifest#terminate}
  */
  readonly terminate?: string[];
  /**
  * Update determines the order for updating entities' specifications, such as image upgrades or resource scaling. This sequence is designed for entities that have dependencies or require specific update procedures. Entities that can be updated independently or have no dependencies can be listed together in the same stage, separated by commas.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1_manifest#update DataK8SAppsKubeblocksIoClusterDefinitionV1Manifest#update}
  */
  readonly update?: string[];
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesOrdersToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesOrders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    provision: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.provision),
    terminate: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.terminate),
    update: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.update),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesOrdersToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesOrders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    provision: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.provision),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    terminate: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.terminate),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    update: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.update),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesOrdersOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesOrders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._provision !== undefined) {
      hasAnyValues = true;
      internalValueResult.provision = this._provision;
    }
    if (this._terminate !== undefined) {
      hasAnyValues = true;
      internalValueResult.terminate = this._terminate;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesOrders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._provision = undefined;
      this._terminate = undefined;
      this._update = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._provision = value.provision;
      this._terminate = value.terminate;
      this._update = value.update;
    }
  }

  // provision - computed: false, optional: true, required: false
  private _provision?: string[]; 
  public get provision() {
    return this.getListAttribute('provision');
  }
  public set provision(value: string[]) {
    this._provision = value;
  }
  public resetProvision() {
    this._provision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get provisionInput() {
    return this._provision;
  }

  // terminate - computed: false, optional: true, required: false
  private _terminate?: string[]; 
  public get terminate() {
    return this.getListAttribute('terminate');
  }
  public set terminate(value: string[]) {
    this._terminate = value;
  }
  public resetTerminate() {
    this._terminate = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get terminateInput() {
    return this._terminate;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string[]; 
  public get update() {
    return this.getListAttribute('update');
  }
  public set update(value: string[]) {
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
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesShardings {
  /**
  * Defines the unique identifier of the sharding within the cluster topology. It follows IANA Service naming rules and is used as part of the Service's DNS name. The name must start with a lowercase letter, can contain lowercase letters, numbers, and hyphens, and must end with a lowercase letter or number. Cannot be updated once set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1_manifest#name DataK8SAppsKubeblocksIoClusterDefinitionV1Manifest#name}
  */
  readonly name: string;
  /**
  * Specifies the sharding definition that defines the characteristics and behavior of the sharding. The system selects the ShardingDefinition CR with the latest version that matches the pattern. This approach allows: 1. Precise selection by providing the exact name of a ShardingDefinition CR. 2. Flexible and automatic selection of the most up-to-date ShardingDefinition CR by specifying a regular expression pattern. Once set, this field cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1_manifest#sharding_def DataK8SAppsKubeblocksIoClusterDefinitionV1Manifest#sharding_def}
  */
  readonly shardingDef: string;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesShardingsToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesShardings | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    sharding_def: cdktf.stringToTerraform(struct!.shardingDef),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesShardingsToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesShardings | cdktf.IResolvable): any {
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
    sharding_def: {
      value: cdktf.stringToHclTerraform(struct!.shardingDef),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesShardingsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesShardings | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._shardingDef !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardingDef = this._shardingDef;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesShardings | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._shardingDef = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._shardingDef = value.shardingDef;
    }
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

  // sharding_def - computed: false, optional: false, required: true
  private _shardingDef?: string; 
  public get shardingDef() {
    return this.getStringAttribute('sharding_def');
  }
  public set shardingDef(value: string) {
    this._shardingDef = value;
  }
  // Temporarily expose input value. Use with caution.
  public get shardingDefInput() {
    return this._shardingDef;
  }
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesShardingsList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesShardings[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesShardingsOutputReference {
    return new DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesShardingsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologies {
  /**
  * Components specifies the components in the topology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1_manifest#components DataK8SAppsKubeblocksIoClusterDefinitionV1Manifest#components}
  */
  readonly components?: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesComponents[] | cdktf.IResolvable;
  /**
  * Default indicates whether this topology serves as the default configuration. When set to true, this topology is automatically used unless another is explicitly specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1_manifest#default DataK8SAppsKubeblocksIoClusterDefinitionV1Manifest#default}
  */
  readonly default?: boolean | cdktf.IResolvable;
  /**
  * Name is the unique identifier for the cluster topology. Cannot be updated.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1_manifest#name DataK8SAppsKubeblocksIoClusterDefinitionV1Manifest#name}
  */
  readonly name: string;
  /**
  * Specifies the sequence in which components within a cluster topology are started, stopped, and upgraded. This ordering is crucial for maintaining the correct dependencies and operational flow across components.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1_manifest#orders DataK8SAppsKubeblocksIoClusterDefinitionV1Manifest#orders}
  */
  readonly orders?: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesOrders;
  /**
  * Shardings specifies the shardings in the topology.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1_manifest#shardings DataK8SAppsKubeblocksIoClusterDefinitionV1Manifest#shardings}
  */
  readonly shardings?: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesShardings[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    components: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesComponentsToTerraform, false)(struct!.components),
    default: cdktf.booleanToTerraform(struct!.default),
    name: cdktf.stringToTerraform(struct!.name),
    orders: dataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesOrdersToTerraform(struct!.orders),
    shardings: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesShardingsToTerraform, false)(struct!.shardings),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologies | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    components: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesComponentsToHclTerraform, false)(struct!.components),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesComponentsList",
    },
    default: {
      value: cdktf.booleanToHclTerraform(struct!.default),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    orders: {
      value: dataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesOrdersToHclTerraform(struct!.orders),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesOrders",
    },
    shardings: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesShardingsToHclTerraform, false)(struct!.shardings),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesShardingsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologies | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._components?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components?.internalValue;
    }
    if (this._default !== undefined) {
      hasAnyValues = true;
      internalValueResult.default = this._default;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._orders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.orders = this._orders?.internalValue;
    }
    if (this._shardings?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.shardings = this._shardings?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologies | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._components.internalValue = undefined;
      this._default = undefined;
      this._name = undefined;
      this._orders.internalValue = undefined;
      this._shardings.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._components.internalValue = value.components;
      this._default = value.default;
      this._name = value.name;
      this._orders.internalValue = value.orders;
      this._shardings.internalValue = value.shardings;
    }
  }

  // components - computed: false, optional: true, required: false
  private _components = new DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesComponentsList(this, "components", false);
  public get components() {
    return this._components;
  }
  public putComponents(value: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesComponents[] | cdktf.IResolvable) {
    this._components.internalValue = value;
  }
  public resetComponents() {
    this._components.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components.internalValue;
  }

  // default - computed: false, optional: true, required: false
  private _default?: boolean | cdktf.IResolvable; 
  public get default() {
    return this.getBooleanAttribute('default');
  }
  public set default(value: boolean | cdktf.IResolvable) {
    this._default = value;
  }
  public resetDefault() {
    this._default = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get defaultInput() {
    return this._default;
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

  // orders - computed: false, optional: true, required: false
  private _orders = new DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesOrdersOutputReference(this, "orders");
  public get orders() {
    return this._orders;
  }
  public putOrders(value: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesOrders) {
    this._orders.internalValue = value;
  }
  public resetOrders() {
    this._orders.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ordersInput() {
    return this._orders.internalValue;
  }

  // shardings - computed: false, optional: true, required: false
  private _shardings = new DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesShardingsList(this, "shardings", false);
  public get shardings() {
    return this._shardings;
  }
  public putShardings(value: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesShardings[] | cdktf.IResolvable) {
    this._shardings.internalValue = value;
  }
  public resetShardings() {
    this._shardings.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get shardingsInput() {
    return this._shardings.internalValue;
  }
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesList extends cdktf.ComplexList {
  public internalValue? : DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologies[] | cdktf.IResolvable

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
  public get(index: number): DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesOutputReference {
    return new DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpec {
  /**
  * Topologies defines all possible topologies within the cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1_manifest#topologies DataK8SAppsKubeblocksIoClusterDefinitionV1Manifest#topologies}
  */
  readonly topologies?: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologies[] | cdktf.IResolvable;
}

export function dataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecToTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    topologies: cdktf.listMapper(dataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesToTerraform, false)(struct!.topologies),
  }
}


export function dataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecToHclTerraform(struct?: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    topologies: {
      value: cdktf.listMapperHcl(dataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesToHclTerraform, false)(struct!.topologies),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._topologies?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.topologies = this._topologies?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._topologies.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._topologies.internalValue = value.topologies;
    }
  }

  // topologies - computed: false, optional: true, required: false
  private _topologies = new DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologiesList(this, "topologies", false);
  public get topologies() {
    return this._topologies;
  }
  public putTopologies(value: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecTopologies[] | cdktf.IResolvable) {
    this._topologies.internalValue = value;
  }
  public resetTopologies() {
    this._topologies.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get topologiesInput() {
    return this._topologies.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1_manifest k8s_apps_kubeblocks_io_cluster_definition_v1_manifest}
*/
export class DataK8SAppsKubeblocksIoClusterDefinitionV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_apps_kubeblocks_io_cluster_definition_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SAppsKubeblocksIoClusterDefinitionV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SAppsKubeblocksIoClusterDefinitionV1Manifest to import
  * @param importFromId The id of the existing DataK8SAppsKubeblocksIoClusterDefinitionV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SAppsKubeblocksIoClusterDefinitionV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_apps_kubeblocks_io_cluster_definition_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/apps_kubeblocks_io_cluster_definition_v1_manifest k8s_apps_kubeblocks_io_cluster_definition_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_apps_kubeblocks_io_cluster_definition_v1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.8',
        providerVersionConstraint: '2025.12.8'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle,
      provisioners: config.provisioners,
      connection: config.connection,
      forEach: config.forEach
    });
    this._metadata.internalValue = config.metadata;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }

  // yaml - computed: true, optional: false, required: false
  public get yaml() {
    return this.getStringAttribute('yaml');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      metadata: dataK8SAppsKubeblocksIoClusterDefinitionV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SAppsKubeblocksIoClusterDefinitionV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestMetadata",
      },
      spec: {
        value: dataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SAppsKubeblocksIoClusterDefinitionV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
