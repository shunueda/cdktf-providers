// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keyspaces_services_k8s_aws_keyspace_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keyspaces_services_k8s_aws_keyspace_v1alpha1_manifest#metadata DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestMetadata;
  /**
  * KeyspaceSpec defines the desired state of Keyspace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keyspaces_services_k8s_aws_keyspace_v1alpha1_manifest#spec DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpec;
}
export interface DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keyspaces_services_k8s_aws_keyspace_v1alpha1_manifest#annotations DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keyspaces_services_k8s_aws_keyspace_v1alpha1_manifest#labels DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keyspaces_services_k8s_aws_keyspace_v1alpha1_manifest#name DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keyspaces_services_k8s_aws_keyspace_v1alpha1_manifest#namespace DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
      this._name = undefined;
      this._namespace = undefined;
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
      this._namespace = value.namespace;
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

  // namespace - computed: false, optional: false, required: true
  private _namespace?: string; 
  public get namespace() {
    return this.getStringAttribute('namespace');
  }
  public set namespace(value: string) {
    this._namespace = value;
  }
  // Temporarily expose input value. Use with caution.
  public get namespaceInput() {
    return this._namespace;
  }
}
export interface DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecReplicationSpecification {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keyspaces_services_k8s_aws_keyspace_v1alpha1_manifest#region_list DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1Manifest#region_list}
  */
  readonly regionList?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keyspaces_services_k8s_aws_keyspace_v1alpha1_manifest#replication_strategy DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1Manifest#replication_strategy}
  */
  readonly replicationStrategy?: string;
}

export function dataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecReplicationSpecificationToTerraform(struct?: DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecReplicationSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    region_list: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.regionList),
    replication_strategy: cdktf.stringToTerraform(struct!.replicationStrategy),
  }
}


export function dataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecReplicationSpecificationToHclTerraform(struct?: DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecReplicationSpecification | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    region_list: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.regionList),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    replication_strategy: {
      value: cdktf.stringToHclTerraform(struct!.replicationStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecReplicationSpecificationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecReplicationSpecification | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._regionList !== undefined) {
      hasAnyValues = true;
      internalValueResult.regionList = this._regionList;
    }
    if (this._replicationStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationStrategy = this._replicationStrategy;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecReplicationSpecification | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._regionList = undefined;
      this._replicationStrategy = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._regionList = value.regionList;
      this._replicationStrategy = value.replicationStrategy;
    }
  }

  // region_list - computed: false, optional: true, required: false
  private _regionList?: string[]; 
  public get regionList() {
    return this.getListAttribute('region_list');
  }
  public set regionList(value: string[]) {
    this._regionList = value;
  }
  public resetRegionList() {
    this._regionList = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get regionListInput() {
    return this._regionList;
  }

  // replication_strategy - computed: false, optional: true, required: false
  private _replicationStrategy?: string; 
  public get replicationStrategy() {
    return this.getStringAttribute('replication_strategy');
  }
  public set replicationStrategy(value: string) {
    this._replicationStrategy = value;
  }
  public resetReplicationStrategy() {
    this._replicationStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationStrategyInput() {
    return this._replicationStrategy;
  }
}
export interface DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecTags {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keyspaces_services_k8s_aws_keyspace_v1alpha1_manifest#key DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1Manifest#key}
  */
  readonly key?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keyspaces_services_k8s_aws_keyspace_v1alpha1_manifest#value DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecTagsToTerraform(struct?: DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    key: cdktf.stringToTerraform(struct!.key),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecTagsToHclTerraform(struct?: DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecTags | cdktf.IResolvable): any {
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

export class DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecTagsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecTags | cdktf.IResolvable | undefined) {
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

export class DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecTagsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecTags[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecTagsOutputReference {
    return new DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecTagsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpec {
  /**
  * The name of the keyspace to be created.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keyspaces_services_k8s_aws_keyspace_v1alpha1_manifest#keyspace_name DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1Manifest#keyspace_name}
  */
  readonly keyspaceName: string;
  /**
  * The replication specification of the keyspace includes: * replicationStrategy - the required value is SINGLE_REGION or MULTI_REGION. * regionList - if the replicationStrategy is MULTI_REGION, the regionList requires the current Region and at least one additional Amazon Web Services Region where the keyspace is going to be replicated in. The maximum number of supported replication Regions including the current Region is six.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keyspaces_services_k8s_aws_keyspace_v1alpha1_manifest#replication_specification DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1Manifest#replication_specification}
  */
  readonly replicationSpecification?: DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecReplicationSpecification;
  /**
  * A list of key-value pair tags to be attached to the keyspace. For more information, see Adding tags and labels to Amazon Keyspaces resources (https://docs.aws.amazon.com/keyspaces/latest/devguide/tagging-keyspaces.html) in the Amazon Keyspaces Developer Guide.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keyspaces_services_k8s_aws_keyspace_v1alpha1_manifest#tags DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1Manifest#tags}
  */
  readonly tags?: DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecTags[] | cdktf.IResolvable;
}

export function dataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    keyspace_name: cdktf.stringToTerraform(struct!.keyspaceName),
    replication_specification: dataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecReplicationSpecificationToTerraform(struct!.replicationSpecification),
    tags: cdktf.listMapper(dataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecTagsToTerraform, false)(struct!.tags),
  }
}


export function dataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    keyspace_name: {
      value: cdktf.stringToHclTerraform(struct!.keyspaceName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    replication_specification: {
      value: dataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecReplicationSpecificationToHclTerraform(struct!.replicationSpecification),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecReplicationSpecification",
    },
    tags: {
      value: cdktf.listMapperHcl(dataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecTagsToHclTerraform, false)(struct!.tags),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecTagsList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._keyspaceName !== undefined) {
      hasAnyValues = true;
      internalValueResult.keyspaceName = this._keyspaceName;
    }
    if (this._replicationSpecification?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicationSpecification = this._replicationSpecification?.internalValue;
    }
    if (this._tags?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._keyspaceName = undefined;
      this._replicationSpecification.internalValue = undefined;
      this._tags.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._keyspaceName = value.keyspaceName;
      this._replicationSpecification.internalValue = value.replicationSpecification;
      this._tags.internalValue = value.tags;
    }
  }

  // keyspace_name - computed: false, optional: false, required: true
  private _keyspaceName?: string; 
  public get keyspaceName() {
    return this.getStringAttribute('keyspace_name');
  }
  public set keyspaceName(value: string) {
    this._keyspaceName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get keyspaceNameInput() {
    return this._keyspaceName;
  }

  // replication_specification - computed: false, optional: true, required: false
  private _replicationSpecification = new DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecReplicationSpecificationOutputReference(this, "replication_specification");
  public get replicationSpecification() {
    return this._replicationSpecification;
  }
  public putReplicationSpecification(value: DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecReplicationSpecification) {
    this._replicationSpecification.internalValue = value;
  }
  public resetReplicationSpecification() {
    this._replicationSpecification.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicationSpecificationInput() {
    return this._replicationSpecification.internalValue;
  }

  // tags - computed: false, optional: true, required: false
  private _tags = new DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecTagsList(this, "tags", false);
  public get tags() {
    return this._tags;
  }
  public putTags(value: DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecTags[] | cdktf.IResolvable) {
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

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keyspaces_services_k8s_aws_keyspace_v1alpha1_manifest k8s_keyspaces_services_k8s_aws_keyspace_v1alpha1_manifest}
*/
export class DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_keyspaces_services_k8s_aws_keyspace_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keyspaces_services_k8s_aws_keyspace_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_keyspaces_services_k8s_aws_keyspace_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/keyspaces_services_k8s_aws_keyspace_v1alpha1_manifest k8s_keyspaces_services_k8s_aws_keyspace_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_keyspaces_services_k8s_aws_keyspace_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.15',
        providerVersionConstraint: '2025.12.15'
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
  private _metadata = new DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKeyspacesServicesK8SAwsKeyspaceV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
