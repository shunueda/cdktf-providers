// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#metadata DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#metadata}
  */
  readonly metadata: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestMetadata;
  /**
  * SelectorSyncIdentityProviderSpec defines the SyncIdentityProviderCommonSpec to sync to ClusterDeploymentSelector indicating which clusters the SelectorSyncIdentityProvider applies to in any namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#spec DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#spec}
  */
  readonly spec?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpec;
}
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#annotations DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#labels DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#name DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestMetadataToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestMetadataToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#key DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#operator DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#values DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelectorMatchExpressionsToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelectorMatchExpressionsToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelectorMatchExpressionsOutputReference {
    return new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#match_expressions DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#match_labels DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelectorToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelectorToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelectorMatchExpressionsList",
    },
    match_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.matchLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelector | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._matchExpressions?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchExpressions = this._matchExpressions?.internalValue;
    }
    if (this._matchLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.matchLabels = this._matchLabels;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelector | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = undefined;
      this._matchLabels = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._matchExpressions.internalValue = value.matchExpressions;
      this._matchLabels = value.matchLabels;
    }
  }

  // match_expressions - computed: false, optional: true, required: false
  private _matchExpressions = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelectorMatchExpressions[] | cdktf.IResolvable) {
    this._matchExpressions.internalValue = value;
  }
  public resetMatchExpressions() {
    this._matchExpressions.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchExpressionsInput() {
    return this._matchExpressions.internalValue;
  }

  // match_labels - computed: false, optional: true, required: false
  private _matchLabels?: { [key: string]: string }; 
  public get matchLabels() {
    return this.getStringMapAttribute('match_labels');
  }
  public set matchLabels(value: { [key: string]: string }) {
    this._matchLabels = value;
  }
  public resetMatchLabels() {
    this._matchLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get matchLabelsInput() {
    return this._matchLabels;
  }
}
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthCa {
  /**
  * name is the metadata.name of the referenced config map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#name DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthCaToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthCaToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthCa | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthCa | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthCa | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientCert {
  /**
  * name is the metadata.name of the referenced secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#name DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientCertToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientCertToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientCert | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientCert | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientCert | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientKey {
  /**
  * name is the metadata.name of the referenced secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#name DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientKeyToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientKeyToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientKey | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientKey | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuth {
  /**
  * ca is an optional reference to a config map by name containing the PEM-encoded CA bundle. It is used as a trust anchor to validate the TLS certificate presented by the remote server. The key 'ca.crt' is used to locate the data. If specified and the config map or expected key is not found, the identity provider is not honored. If the specified ca data is not valid, the identity provider is not honored. If empty, the default system roots are used. The namespace for this config map is openshift-config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#ca DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#ca}
  */
  readonly ca?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthCa;
  /**
  * tlsClientCert is an optional reference to a secret by name that contains the PEM-encoded TLS client certificate to present when connecting to the server. The key 'tls.crt' is used to locate the data. If specified and the secret or expected key is not found, the identity provider is not honored. If the specified certificate data is not valid, the identity provider is not honored. The namespace for this secret is openshift-config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#tls_client_cert DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#tls_client_cert}
  */
  readonly tlsClientCert?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientCert;
  /**
  * tlsClientKey is an optional reference to a secret by name that contains the PEM-encoded TLS private key for the client certificate referenced in tlsClientCert. The key 'tls.key' is used to locate the data. If specified and the secret or expected key is not found, the identity provider is not honored. If the specified certificate data is not valid, the identity provider is not honored. The namespace for this secret is openshift-config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#tls_client_key DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#tls_client_key}
  */
  readonly tlsClientKey?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientKey;
  /**
  * url is the remote URL to connect to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#url DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthCaToTerraform(struct!.ca),
    tls_client_cert: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientCertToTerraform(struct!.tlsClientCert),
    tls_client_key: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientKeyToTerraform(struct!.tlsClientKey),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuth | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthCa",
    },
    tls_client_cert: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientCertToHclTerraform(struct!.tlsClientCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientCert",
    },
    tls_client_key: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientKeyToHclTerraform(struct!.tlsClientKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientKey",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuth | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca?.internalValue;
    }
    if (this._tlsClientCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientCert = this._tlsClientCert?.internalValue;
    }
    if (this._tlsClientKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientKey = this._tlsClientKey?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuth | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca.internalValue = undefined;
      this._tlsClientCert.internalValue = undefined;
      this._tlsClientKey.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca.internalValue = value.ca;
      this._tlsClientCert.internalValue = value.tlsClientCert;
      this._tlsClientKey.internalValue = value.tlsClientKey;
      this._url = value.url;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthCa) {
    this._ca.internalValue = value;
  }
  public resetCa() {
    this._ca.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }

  // tls_client_cert - computed: false, optional: true, required: false
  private _tlsClientCert = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientCertOutputReference(this, "tls_client_cert");
  public get tlsClientCert() {
    return this._tlsClientCert;
  }
  public putTlsClientCert(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientCert) {
    this._tlsClientCert.internalValue = value;
  }
  public resetTlsClientCert() {
    this._tlsClientCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientCertInput() {
    return this._tlsClientCert.internalValue;
  }

  // tls_client_key - computed: false, optional: true, required: false
  private _tlsClientKey = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientKeyOutputReference(this, "tls_client_key");
  public get tlsClientKey() {
    return this._tlsClientKey;
  }
  public putTlsClientKey(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthTlsClientKey) {
    this._tlsClientKey.internalValue = value;
  }
  public resetTlsClientKey() {
    this._tlsClientKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientKeyInput() {
    return this._tlsClientKey.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubCa {
  /**
  * name is the metadata.name of the referenced config map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#name DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubCaToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubCaToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubCa | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubCa | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubCa | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubClientSecret {
  /**
  * name is the metadata.name of the referenced secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#name DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubClientSecretToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubClientSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubClientSecretToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubClientSecret | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubClientSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubClientSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubClientSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithub {
  /**
  * ca is an optional reference to a config map by name containing the PEM-encoded CA bundle. It is used as a trust anchor to validate the TLS certificate presented by the remote server. The key 'ca.crt' is used to locate the data. If specified and the config map or expected key is not found, the identity provider is not honored. If the specified ca data is not valid, the identity provider is not honored. If empty, the default system roots are used. This can only be configured when hostname is set to a non-empty value. The namespace for this config map is openshift-config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#ca DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#ca}
  */
  readonly ca?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubCa;
  /**
  * clientID is the oauth client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#client_id DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#client_id}
  */
  readonly clientId?: string;
  /**
  * clientSecret is a required reference to the secret by name containing the oauth client secret. The key 'clientSecret' is used to locate the data. If the secret or expected key is not found, the identity provider is not honored. The namespace for this secret is openshift-config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#client_secret DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#client_secret}
  */
  readonly clientSecret?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubClientSecret;
  /**
  * hostname is the optional domain (e.g. 'mycompany.com') for use with a hosted instance of GitHub Enterprise. It must match the GitHub Enterprise settings value configured at /setup/settings#hostname.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#hostname DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#hostname}
  */
  readonly hostname?: string;
  /**
  * organizations optionally restricts which organizations are allowed to log in
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#organizations DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#organizations}
  */
  readonly organizations?: string[];
  /**
  * teams optionally restricts which teams are allowed to log in. Format is <org>/<team>.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#teams DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#teams}
  */
  readonly teams?: string[];
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubCaToTerraform(struct!.ca),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubClientSecretToTerraform(struct!.clientSecret),
    hostname: cdktf.stringToTerraform(struct!.hostname),
    organizations: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.organizations),
    teams: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.teams),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithub | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubCa",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubClientSecret",
    },
    hostname: {
      value: cdktf.stringToHclTerraform(struct!.hostname),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    organizations: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.organizations),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    teams: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.teams),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithub | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca?.internalValue;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    if (this._hostname !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostname = this._hostname;
    }
    if (this._organizations !== undefined) {
      hasAnyValues = true;
      internalValueResult.organizations = this._organizations;
    }
    if (this._teams !== undefined) {
      hasAnyValues = true;
      internalValueResult.teams = this._teams;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithub | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca.internalValue = undefined;
      this._clientId = undefined;
      this._clientSecret.internalValue = undefined;
      this._hostname = undefined;
      this._organizations = undefined;
      this._teams = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca.internalValue = value.ca;
      this._clientId = value.clientId;
      this._clientSecret.internalValue = value.clientSecret;
      this._hostname = value.hostname;
      this._organizations = value.organizations;
      this._teams = value.teams;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubCa) {
    this._ca.internalValue = value;
  }
  public resetCa() {
    this._ca.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubClientSecret) {
    this._clientSecret.internalValue = value;
  }
  public resetClientSecret() {
    this._clientSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }

  // hostname - computed: false, optional: true, required: false
  private _hostname?: string; 
  public get hostname() {
    return this.getStringAttribute('hostname');
  }
  public set hostname(value: string) {
    this._hostname = value;
  }
  public resetHostname() {
    this._hostname = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostnameInput() {
    return this._hostname;
  }

  // organizations - computed: false, optional: true, required: false
  private _organizations?: string[]; 
  public get organizations() {
    return this.getListAttribute('organizations');
  }
  public set organizations(value: string[]) {
    this._organizations = value;
  }
  public resetOrganizations() {
    this._organizations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get organizationsInput() {
    return this._organizations;
  }

  // teams - computed: false, optional: true, required: false
  private _teams?: string[]; 
  public get teams() {
    return this.getListAttribute('teams');
  }
  public set teams(value: string[]) {
    this._teams = value;
  }
  public resetTeams() {
    this._teams = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get teamsInput() {
    return this._teams;
  }
}
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabCa {
  /**
  * name is the metadata.name of the referenced config map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#name DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabCaToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabCaToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabCa | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabCa | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabCa | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabClientSecret {
  /**
  * name is the metadata.name of the referenced secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#name DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabClientSecretToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabClientSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabClientSecretToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabClientSecret | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabClientSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabClientSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabClientSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlab {
  /**
  * ca is an optional reference to a config map by name containing the PEM-encoded CA bundle. It is used as a trust anchor to validate the TLS certificate presented by the remote server. The key 'ca.crt' is used to locate the data. If specified and the config map or expected key is not found, the identity provider is not honored. If the specified ca data is not valid, the identity provider is not honored. If empty, the default system roots are used. The namespace for this config map is openshift-config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#ca DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#ca}
  */
  readonly ca?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabCa;
  /**
  * clientID is the oauth client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#client_id DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#client_id}
  */
  readonly clientId?: string;
  /**
  * clientSecret is a required reference to the secret by name containing the oauth client secret. The key 'clientSecret' is used to locate the data. If the secret or expected key is not found, the identity provider is not honored. The namespace for this secret is openshift-config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#client_secret DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#client_secret}
  */
  readonly clientSecret?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabClientSecret;
  /**
  * url is the oauth server base URL
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#url DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlab | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabCaToTerraform(struct!.ca),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabClientSecretToTerraform(struct!.clientSecret),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlab | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabCa",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabClientSecret",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlab | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca?.internalValue;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlab | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca.internalValue = undefined;
      this._clientId = undefined;
      this._clientSecret.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca.internalValue = value.ca;
      this._clientId = value.clientId;
      this._clientSecret.internalValue = value.clientSecret;
      this._url = value.url;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabCa) {
    this._ca.internalValue = value;
  }
  public resetCa() {
    this._ca.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabClientSecret) {
    this._clientSecret.internalValue = value;
  }
  public resetClientSecret() {
    this._clientSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogleClientSecret {
  /**
  * name is the metadata.name of the referenced secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#name DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogleClientSecretToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogleClientSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogleClientSecretToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogleClientSecret | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogleClientSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogleClientSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogleClientSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogle {
  /**
  * clientID is the oauth client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#client_id DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#client_id}
  */
  readonly clientId?: string;
  /**
  * clientSecret is a required reference to the secret by name containing the oauth client secret. The key 'clientSecret' is used to locate the data. If the secret or expected key is not found, the identity provider is not honored. The namespace for this secret is openshift-config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#client_secret DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#client_secret}
  */
  readonly clientSecret?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogleClientSecret;
  /**
  * hostedDomain is the optional Google App domain (e.g. 'mycompany.com') to restrict logins to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#hosted_domain DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#hosted_domain}
  */
  readonly hostedDomain?: string;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogleToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogleClientSecretToTerraform(struct!.clientSecret),
    hosted_domain: cdktf.stringToTerraform(struct!.hostedDomain),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogleToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogle | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogleClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogleClientSecret",
    },
    hosted_domain: {
      value: cdktf.stringToHclTerraform(struct!.hostedDomain),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogleOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogle | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    if (this._hostedDomain !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostedDomain = this._hostedDomain;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogle | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clientId = undefined;
      this._clientSecret.internalValue = undefined;
      this._hostedDomain = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clientId = value.clientId;
      this._clientSecret.internalValue = value.clientSecret;
      this._hostedDomain = value.hostedDomain;
    }
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogleClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogleClientSecret) {
    this._clientSecret.internalValue = value;
  }
  public resetClientSecret() {
    this._clientSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }

  // hosted_domain - computed: false, optional: true, required: false
  private _hostedDomain?: string; 
  public get hostedDomain() {
    return this.getStringAttribute('hosted_domain');
  }
  public set hostedDomain(value: string) {
    this._hostedDomain = value;
  }
  public resetHostedDomain() {
    this._hostedDomain = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostedDomainInput() {
    return this._hostedDomain;
  }
}
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswdFileData {
  /**
  * name is the metadata.name of the referenced secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#name DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswdFileDataToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswdFileData | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswdFileDataToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswdFileData | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswdFileDataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswdFileData | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswdFileData | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswd {
  /**
  * fileData is a required reference to a secret by name containing the data to use as the htpasswd file. The key 'htpasswd' is used to locate the data. If the secret or expected key is not found, the identity provider is not honored. If the specified htpasswd data is not valid, the identity provider is not honored. The namespace for this secret is openshift-config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#file_data DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#file_data}
  */
  readonly fileData?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswdFileData;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswdToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_data: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswdFileDataToTerraform(struct!.fileData),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswdToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswd | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_data: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswdFileDataToHclTerraform(struct!.fileData),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswdFileData",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswd | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileData?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileData = this._fileData?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswd | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileData.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileData.internalValue = value.fileData;
    }
  }

  // file_data - computed: false, optional: true, required: false
  private _fileData = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswdFileDataOutputReference(this, "file_data");
  public get fileData() {
    return this._fileData;
  }
  public putFileData(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswdFileData) {
    this._fileData.internalValue = value;
  }
  public resetFileData() {
    this._fileData.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileDataInput() {
    return this._fileData.internalValue;
  }
}
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneCa {
  /**
  * name is the metadata.name of the referenced config map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#name DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneCaToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneCaToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneCa | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneCa | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneCa | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientCert {
  /**
  * name is the metadata.name of the referenced secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#name DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientCertToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientCert | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientCertToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientCert | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientCertOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientCert | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientCert | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientKey {
  /**
  * name is the metadata.name of the referenced secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#name DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientKeyToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientKey | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientKeyToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientKey | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientKeyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientKey | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientKey | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystone {
  /**
  * ca is an optional reference to a config map by name containing the PEM-encoded CA bundle. It is used as a trust anchor to validate the TLS certificate presented by the remote server. The key 'ca.crt' is used to locate the data. If specified and the config map or expected key is not found, the identity provider is not honored. If the specified ca data is not valid, the identity provider is not honored. If empty, the default system roots are used. The namespace for this config map is openshift-config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#ca DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#ca}
  */
  readonly ca?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneCa;
  /**
  * domainName is required for keystone v3
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#domain_name DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#domain_name}
  */
  readonly domainName?: string;
  /**
  * tlsClientCert is an optional reference to a secret by name that contains the PEM-encoded TLS client certificate to present when connecting to the server. The key 'tls.crt' is used to locate the data. If specified and the secret or expected key is not found, the identity provider is not honored. If the specified certificate data is not valid, the identity provider is not honored. The namespace for this secret is openshift-config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#tls_client_cert DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#tls_client_cert}
  */
  readonly tlsClientCert?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientCert;
  /**
  * tlsClientKey is an optional reference to a secret by name that contains the PEM-encoded TLS private key for the client certificate referenced in tlsClientCert. The key 'tls.key' is used to locate the data. If specified and the secret or expected key is not found, the identity provider is not honored. If the specified certificate data is not valid, the identity provider is not honored. The namespace for this secret is openshift-config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#tls_client_key DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#tls_client_key}
  */
  readonly tlsClientKey?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientKey;
  /**
  * url is the remote URL to connect to
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#url DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneCaToTerraform(struct!.ca),
    domain_name: cdktf.stringToTerraform(struct!.domainName),
    tls_client_cert: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientCertToTerraform(struct!.tlsClientCert),
    tls_client_key: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientKeyToTerraform(struct!.tlsClientKey),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystone | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneCa",
    },
    domain_name: {
      value: cdktf.stringToHclTerraform(struct!.domainName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_client_cert: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientCertToHclTerraform(struct!.tlsClientCert),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientCert",
    },
    tls_client_key: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientKeyToHclTerraform(struct!.tlsClientKey),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientKey",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystone | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca?.internalValue;
    }
    if (this._domainName !== undefined) {
      hasAnyValues = true;
      internalValueResult.domainName = this._domainName;
    }
    if (this._tlsClientCert?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientCert = this._tlsClientCert?.internalValue;
    }
    if (this._tlsClientKey?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsClientKey = this._tlsClientKey?.internalValue;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystone | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca.internalValue = undefined;
      this._domainName = undefined;
      this._tlsClientCert.internalValue = undefined;
      this._tlsClientKey.internalValue = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca.internalValue = value.ca;
      this._domainName = value.domainName;
      this._tlsClientCert.internalValue = value.tlsClientCert;
      this._tlsClientKey.internalValue = value.tlsClientKey;
      this._url = value.url;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneCa) {
    this._ca.internalValue = value;
  }
  public resetCa() {
    this._ca.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }

  // domain_name - computed: false, optional: true, required: false
  private _domainName?: string; 
  public get domainName() {
    return this.getStringAttribute('domain_name');
  }
  public set domainName(value: string) {
    this._domainName = value;
  }
  public resetDomainName() {
    this._domainName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get domainNameInput() {
    return this._domainName;
  }

  // tls_client_cert - computed: false, optional: true, required: false
  private _tlsClientCert = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientCertOutputReference(this, "tls_client_cert");
  public get tlsClientCert() {
    return this._tlsClientCert;
  }
  public putTlsClientCert(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientCert) {
    this._tlsClientCert.internalValue = value;
  }
  public resetTlsClientCert() {
    this._tlsClientCert.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientCertInput() {
    return this._tlsClientCert.internalValue;
  }

  // tls_client_key - computed: false, optional: true, required: false
  private _tlsClientKey = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientKeyOutputReference(this, "tls_client_key");
  public get tlsClientKey() {
    return this._tlsClientKey;
  }
  public putTlsClientKey(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneTlsClientKey) {
    this._tlsClientKey.internalValue = value;
  }
  public resetTlsClientKey() {
    this._tlsClientKey.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsClientKeyInput() {
    return this._tlsClientKey.internalValue;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapAttributes {
  /**
  * email is the list of attributes whose values should be used as the email address. Optional. If unspecified, no email is set for the identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#email DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#email}
  */
  readonly email?: string[];
  /**
  * id is the list of attributes whose values should be used as the user ID. Required. First non-empty attribute is used. At least one attribute is required. If none of the listed attribute have a value, authentication fails. LDAP standard identity attribute is 'dn'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#id DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string[];
  /**
  * name is the list of attributes whose values should be used as the display name. Optional. If unspecified, no display name is set for the identity LDAP standard display name attribute is 'cn'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#name DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#name}
  */
  readonly name?: string[];
  /**
  * preferredUsername is the list of attributes whose values should be used as the preferred username. LDAP standard login attribute is 'uid'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#preferred_username DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#preferred_username}
  */
  readonly preferredUsername?: string[];
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapAttributesToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.email),
    id: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.id),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
    preferred_username: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preferredUsername),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapAttributesToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapAttributes | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.email),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    id: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.id),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.name),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    preferred_username: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preferredUsername),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapAttributesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapAttributes | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._id !== undefined) {
      hasAnyValues = true;
      internalValueResult.id = this._id;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._preferredUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredUsername = this._preferredUsername;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapAttributes | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._id = undefined;
      this._name = undefined;
      this._preferredUsername = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._id = value.id;
      this._name = value.name;
      this._preferredUsername = value.preferredUsername;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email?: string[]; 
  public get email() {
    return this.getListAttribute('email');
  }
  public set email(value: string[]) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // id - computed: false, optional: true, required: false
  private _id?: string[]; 
  public get id() {
    return this.getListAttribute('id');
  }
  public set id(value: string[]) {
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
  private _name?: string[]; 
  public get name() {
    return this.getListAttribute('name');
  }
  public set name(value: string[]) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // preferred_username - computed: false, optional: true, required: false
  private _preferredUsername?: string[]; 
  public get preferredUsername() {
    return this.getListAttribute('preferred_username');
  }
  public set preferredUsername(value: string[]) {
    this._preferredUsername = value;
  }
  public resetPreferredUsername() {
    this._preferredUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredUsernameInput() {
    return this._preferredUsername;
  }
}
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapBindPassword {
  /**
  * name is the metadata.name of the referenced secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#name DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapBindPasswordToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapBindPassword | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapBindPasswordToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapBindPassword | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapBindPasswordOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapBindPassword | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapBindPassword | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapCa {
  /**
  * name is the metadata.name of the referenced config map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#name DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapCaToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapCaToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapCa | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapCa | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapCa | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdap {
  /**
  * attributes maps LDAP attributes to identities
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#attributes DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#attributes}
  */
  readonly attributes?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapAttributes;
  /**
  * bindDN is an optional DN to bind with during the search phase.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#bind_dn DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#bind_dn}
  */
  readonly bindDn?: string;
  /**
  * bindPassword is an optional reference to a secret by name containing a password to bind with during the search phase. The key 'bindPassword' is used to locate the data. If specified and the secret or expected key is not found, the identity provider is not honored. The namespace for this secret is openshift-config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#bind_password DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#bind_password}
  */
  readonly bindPassword?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapBindPassword;
  /**
  * ca is an optional reference to a config map by name containing the PEM-encoded CA bundle. It is used as a trust anchor to validate the TLS certificate presented by the remote server. The key 'ca.crt' is used to locate the data. If specified and the config map or expected key is not found, the identity provider is not honored. If the specified ca data is not valid, the identity provider is not honored. If empty, the default system roots are used. The namespace for this config map is openshift-config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#ca DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#ca}
  */
  readonly ca?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapCa;
  /**
  * insecure, if true, indicates the connection should not use TLS WARNING: Should not be set to 'true' with the URL scheme 'ldaps://' as 'ldaps://' URLs always attempt to connect using TLS, even when 'insecure' is set to 'true' When 'true', 'ldap://' URLS connect insecurely. When 'false', 'ldap://' URLs are upgraded to a TLS connection using StartTLS as specified in https://tools.ietf.org/html/rfc2830.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#insecure DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#insecure}
  */
  readonly insecure?: boolean | cdktf.IResolvable;
  /**
  * url is an RFC 2255 URL which specifies the LDAP search parameters to use. The syntax of the URL is: ldap://host:port/basedn?attribute?scope?filter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#url DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#url}
  */
  readonly url?: string;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapAttributesToTerraform(struct!.attributes),
    bind_dn: cdktf.stringToTerraform(struct!.bindDn),
    bind_password: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapBindPasswordToTerraform(struct!.bindPassword),
    ca: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapCaToTerraform(struct!.ca),
    insecure: cdktf.booleanToTerraform(struct!.insecure),
    url: cdktf.stringToTerraform(struct!.url),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdap | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapAttributesToHclTerraform(struct!.attributes),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapAttributes",
    },
    bind_dn: {
      value: cdktf.stringToHclTerraform(struct!.bindDn),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    bind_password: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapBindPasswordToHclTerraform(struct!.bindPassword),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapBindPassword",
    },
    ca: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapCa",
    },
    insecure: {
      value: cdktf.booleanToHclTerraform(struct!.insecure),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    url: {
      value: cdktf.stringToHclTerraform(struct!.url),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdap | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes?.internalValue;
    }
    if (this._bindDn !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindDn = this._bindDn;
    }
    if (this._bindPassword?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.bindPassword = this._bindPassword?.internalValue;
    }
    if (this._ca?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca?.internalValue;
    }
    if (this._insecure !== undefined) {
      hasAnyValues = true;
      internalValueResult.insecure = this._insecure;
    }
    if (this._url !== undefined) {
      hasAnyValues = true;
      internalValueResult.url = this._url;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdap | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes.internalValue = undefined;
      this._bindDn = undefined;
      this._bindPassword.internalValue = undefined;
      this._ca.internalValue = undefined;
      this._insecure = undefined;
      this._url = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes.internalValue = value.attributes;
      this._bindDn = value.bindDn;
      this._bindPassword.internalValue = value.bindPassword;
      this._ca.internalValue = value.ca;
      this._insecure = value.insecure;
      this._url = value.url;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapAttributesOutputReference(this, "attributes");
  public get attributes() {
    return this._attributes;
  }
  public putAttributes(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapAttributes) {
    this._attributes.internalValue = value;
  }
  public resetAttributes() {
    this._attributes.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes.internalValue;
  }

  // bind_dn - computed: false, optional: true, required: false
  private _bindDn?: string; 
  public get bindDn() {
    return this.getStringAttribute('bind_dn');
  }
  public set bindDn(value: string) {
    this._bindDn = value;
  }
  public resetBindDn() {
    this._bindDn = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindDnInput() {
    return this._bindDn;
  }

  // bind_password - computed: false, optional: true, required: false
  private _bindPassword = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapBindPasswordOutputReference(this, "bind_password");
  public get bindPassword() {
    return this._bindPassword;
  }
  public putBindPassword(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapBindPassword) {
    this._bindPassword.internalValue = value;
  }
  public resetBindPassword() {
    this._bindPassword.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get bindPasswordInput() {
    return this._bindPassword.internalValue;
  }

  // ca - computed: false, optional: true, required: false
  private _ca = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapCa) {
    this._ca.internalValue = value;
  }
  public resetCa() {
    this._ca.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }

  // insecure - computed: false, optional: true, required: false
  private _insecure?: boolean | cdktf.IResolvable; 
  public get insecure() {
    return this.getBooleanAttribute('insecure');
  }
  public set insecure(value: boolean | cdktf.IResolvable) {
    this._insecure = value;
  }
  public resetInsecure() {
    this._insecure = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get insecureInput() {
    return this._insecure;
  }

  // url - computed: false, optional: true, required: false
  private _url?: string; 
  public get url() {
    return this.getStringAttribute('url');
  }
  public set url(value: string) {
    this._url = value;
  }
  public resetUrl() {
    this._url = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get urlInput() {
    return this._url;
  }
}
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdCa {
  /**
  * name is the metadata.name of the referenced config map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#name DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdCaToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdCaToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdCa | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdCa | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdCa | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClaims {
  /**
  * email is the list of claims whose values should be used as the email address. Optional. If unspecified, no email is set for the identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#email DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#email}
  */
  readonly email?: string[];
  /**
  * groups is the list of claims value of which should be used to synchronize groups from the OIDC provider to OpenShift for the user. If multiple claims are specified, the first one with a non-empty value is used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#groups DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#groups}
  */
  readonly groups?: string[];
  /**
  * name is the list of claims whose values should be used as the display name. Optional. If unspecified, no display name is set for the identity
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#name DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#name}
  */
  readonly name?: string[];
  /**
  * preferredUsername is the list of claims whose values should be used as the preferred username. If unspecified, the preferred username is determined from the value of the sub claim
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#preferred_username DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#preferred_username}
  */
  readonly preferredUsername?: string[];
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClaimsToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    email: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.email),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    name: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.name),
    preferred_username: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preferredUsername),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClaimsToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    email: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.email),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    name: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.name),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    preferred_username: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preferredUsername),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClaimsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._email !== undefined) {
      hasAnyValues = true;
      internalValueResult.email = this._email;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._preferredUsername !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredUsername = this._preferredUsername;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._email = undefined;
      this._groups = undefined;
      this._name = undefined;
      this._preferredUsername = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._email = value.email;
      this._groups = value.groups;
      this._name = value.name;
      this._preferredUsername = value.preferredUsername;
    }
  }

  // email - computed: false, optional: true, required: false
  private _email?: string[]; 
  public get email() {
    return this.getListAttribute('email');
  }
  public set email(value: string[]) {
    this._email = value;
  }
  public resetEmail() {
    this._email = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailInput() {
    return this._email;
  }

  // groups - computed: false, optional: true, required: false
  private _groups?: string[]; 
  public get groups() {
    return this.getListAttribute('groups');
  }
  public set groups(value: string[]) {
    this._groups = value;
  }
  public resetGroups() {
    this._groups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupsInput() {
    return this._groups;
  }

  // name - computed: false, optional: true, required: false
  private _name?: string[]; 
  public get name() {
    return this.getListAttribute('name');
  }
  public set name(value: string[]) {
    this._name = value;
  }
  public resetName() {
    this._name = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // preferred_username - computed: false, optional: true, required: false
  private _preferredUsername?: string[]; 
  public get preferredUsername() {
    return this.getListAttribute('preferred_username');
  }
  public set preferredUsername(value: string[]) {
    this._preferredUsername = value;
  }
  public resetPreferredUsername() {
    this._preferredUsername = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredUsernameInput() {
    return this._preferredUsername;
  }
}
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClientSecret {
  /**
  * name is the metadata.name of the referenced secret
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#name DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClientSecretToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClientSecret | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClientSecretToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClientSecret | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClientSecretOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClientSecret | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClientSecret | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenId {
  /**
  * ca is an optional reference to a config map by name containing the PEM-encoded CA bundle. It is used as a trust anchor to validate the TLS certificate presented by the remote server. The key 'ca.crt' is used to locate the data. If specified and the config map or expected key is not found, the identity provider is not honored. If the specified ca data is not valid, the identity provider is not honored. If empty, the default system roots are used. The namespace for this config map is openshift-config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#ca DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#ca}
  */
  readonly ca?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdCa;
  /**
  * claims mappings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#claims DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#claims}
  */
  readonly claims?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClaims;
  /**
  * clientID is the oauth client ID
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#client_id DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#client_id}
  */
  readonly clientId?: string;
  /**
  * clientSecret is a required reference to the secret by name containing the oauth client secret. The key 'clientSecret' is used to locate the data. If the secret or expected key is not found, the identity provider is not honored. The namespace for this secret is openshift-config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#client_secret DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#client_secret}
  */
  readonly clientSecret?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClientSecret;
  /**
  * extraAuthorizeParameters are any custom parameters to add to the authorize request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#extra_authorize_parameters DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#extra_authorize_parameters}
  */
  readonly extraAuthorizeParameters?: { [key: string]: string };
  /**
  * extraScopes are any scopes to request in addition to the standard 'openid' scope.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#extra_scopes DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#extra_scopes}
  */
  readonly extraScopes?: string[];
  /**
  * issuer is the URL that the OpenID Provider asserts as its Issuer Identifier. It must use the https scheme with no query or fragment component.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#issuer DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#issuer}
  */
  readonly issuer?: string;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdCaToTerraform(struct!.ca),
    claims: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClaimsToTerraform(struct!.claims),
    client_id: cdktf.stringToTerraform(struct!.clientId),
    client_secret: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClientSecretToTerraform(struct!.clientSecret),
    extra_authorize_parameters: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.extraAuthorizeParameters),
    extra_scopes: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.extraScopes),
    issuer: cdktf.stringToTerraform(struct!.issuer),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenId | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdCa",
    },
    claims: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClaimsToHclTerraform(struct!.claims),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClaims",
    },
    client_id: {
      value: cdktf.stringToHclTerraform(struct!.clientId),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_secret: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClientSecretToHclTerraform(struct!.clientSecret),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClientSecret",
    },
    extra_authorize_parameters: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.extraAuthorizeParameters),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    extra_scopes: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.extraScopes),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    issuer: {
      value: cdktf.stringToHclTerraform(struct!.issuer),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenId | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca?.internalValue;
    }
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._clientId !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientId = this._clientId;
    }
    if (this._clientSecret?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientSecret = this._clientSecret?.internalValue;
    }
    if (this._extraAuthorizeParameters !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraAuthorizeParameters = this._extraAuthorizeParameters;
    }
    if (this._extraScopes !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraScopes = this._extraScopes;
    }
    if (this._issuer !== undefined) {
      hasAnyValues = true;
      internalValueResult.issuer = this._issuer;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenId | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca.internalValue = undefined;
      this._claims.internalValue = undefined;
      this._clientId = undefined;
      this._clientSecret.internalValue = undefined;
      this._extraAuthorizeParameters = undefined;
      this._extraScopes = undefined;
      this._issuer = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca.internalValue = value.ca;
      this._claims.internalValue = value.claims;
      this._clientId = value.clientId;
      this._clientSecret.internalValue = value.clientSecret;
      this._extraAuthorizeParameters = value.extraAuthorizeParameters;
      this._extraScopes = value.extraScopes;
      this._issuer = value.issuer;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdCa) {
    this._ca.internalValue = value;
  }
  public resetCa() {
    this._ca.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClaimsOutputReference(this, "claims");
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClaims) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // client_id - computed: false, optional: true, required: false
  private _clientId?: string; 
  public get clientId() {
    return this.getStringAttribute('client_id');
  }
  public set clientId(value: string) {
    this._clientId = value;
  }
  public resetClientId() {
    this._clientId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientIdInput() {
    return this._clientId;
  }

  // client_secret - computed: false, optional: true, required: false
  private _clientSecret = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClientSecretOutputReference(this, "client_secret");
  public get clientSecret() {
    return this._clientSecret;
  }
  public putClientSecret(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdClientSecret) {
    this._clientSecret.internalValue = value;
  }
  public resetClientSecret() {
    this._clientSecret.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientSecretInput() {
    return this._clientSecret.internalValue;
  }

  // extra_authorize_parameters - computed: false, optional: true, required: false
  private _extraAuthorizeParameters?: { [key: string]: string }; 
  public get extraAuthorizeParameters() {
    return this.getStringMapAttribute('extra_authorize_parameters');
  }
  public set extraAuthorizeParameters(value: { [key: string]: string }) {
    this._extraAuthorizeParameters = value;
  }
  public resetExtraAuthorizeParameters() {
    this._extraAuthorizeParameters = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraAuthorizeParametersInput() {
    return this._extraAuthorizeParameters;
  }

  // extra_scopes - computed: false, optional: true, required: false
  private _extraScopes?: string[]; 
  public get extraScopes() {
    return this.getListAttribute('extra_scopes');
  }
  public set extraScopes(value: string[]) {
    this._extraScopes = value;
  }
  public resetExtraScopes() {
    this._extraScopes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraScopesInput() {
    return this._extraScopes;
  }

  // issuer - computed: false, optional: true, required: false
  private _issuer?: string; 
  public get issuer() {
    return this.getStringAttribute('issuer');
  }
  public set issuer(value: string) {
    this._issuer = value;
  }
  public resetIssuer() {
    this._issuer = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get issuerInput() {
    return this._issuer;
  }
}
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeaderCa {
  /**
  * name is the metadata.name of the referenced config map
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#name DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeaderCaToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeaderCa | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeaderCaToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeaderCa | cdktf.IResolvable): any {
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

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeaderCaOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeaderCa | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeaderCa | cdktf.IResolvable | undefined) {
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
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeader {
  /**
  * ca is a required reference to a config map by name containing the PEM-encoded CA bundle. It is used as a trust anchor to validate the TLS certificate presented by the remote server. Specifically, it allows verification of incoming requests to prevent header spoofing. The key 'ca.crt' is used to locate the data. If the config map or expected key is not found, the identity provider is not honored. If the specified ca data is not valid, the identity provider is not honored. The namespace for this config map is openshift-config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#ca DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#ca}
  */
  readonly ca?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeaderCa;
  /**
  * challengeURL is a URL to redirect unauthenticated /authorize requests to Unauthenticated requests from OAuth clients which expect WWW-Authenticate challenges will be redirected here. ${url} is replaced with the current URL, escaped to be safe in a query parameter https://www.example.com/sso-login?then=${url} ${query} is replaced with the current query string https://www.example.com/auth-proxy/oauth/authorize?${query} Required when challenge is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#challenge_url DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#challenge_url}
  */
  readonly challengeUrl?: string;
  /**
  * clientCommonNames is an optional list of common names to require a match from. If empty, any client certificate validated against the clientCA bundle is considered authoritative.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#client_common_names DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#client_common_names}
  */
  readonly clientCommonNames?: string[];
  /**
  * emailHeaders is the set of headers to check for the email address
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#email_headers DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#email_headers}
  */
  readonly emailHeaders?: string[];
  /**
  * headers is the set of headers to check for identity information
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#headers DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#headers}
  */
  readonly headers?: string[];
  /**
  * loginURL is a URL to redirect unauthenticated /authorize requests to Unauthenticated requests from OAuth clients which expect interactive logins will be redirected here ${url} is replaced with the current URL, escaped to be safe in a query parameter https://www.example.com/sso-login?then=${url} ${query} is replaced with the current query string https://www.example.com/auth-proxy/oauth/authorize?${query} Required when login is set to true.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#login_url DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#login_url}
  */
  readonly loginUrl?: string;
  /**
  * nameHeaders is the set of headers to check for the display name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#name_headers DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#name_headers}
  */
  readonly nameHeaders?: string[];
  /**
  * preferredUsernameHeaders is the set of headers to check for the preferred username
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#preferred_username_headers DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#preferred_username_headers}
  */
  readonly preferredUsernameHeaders?: string[];
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeaderToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ca: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeaderCaToTerraform(struct!.ca),
    challenge_url: cdktf.stringToTerraform(struct!.challengeUrl),
    client_common_names: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clientCommonNames),
    email_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.emailHeaders),
    headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.headers),
    login_url: cdktf.stringToTerraform(struct!.loginUrl),
    name_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.nameHeaders),
    preferred_username_headers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.preferredUsernameHeaders),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeaderToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeader | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ca: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeaderCaToHclTerraform(struct!.ca),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeaderCa",
    },
    challenge_url: {
      value: cdktf.stringToHclTerraform(struct!.challengeUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    client_common_names: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clientCommonNames),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    email_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.emailHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.headers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    login_url: {
      value: cdktf.stringToHclTerraform(struct!.loginUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.nameHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    preferred_username_headers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.preferredUsernameHeaders),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeaderOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeader | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._ca?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ca = this._ca?.internalValue;
    }
    if (this._challengeUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.challengeUrl = this._challengeUrl;
    }
    if (this._clientCommonNames !== undefined) {
      hasAnyValues = true;
      internalValueResult.clientCommonNames = this._clientCommonNames;
    }
    if (this._emailHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.emailHeaders = this._emailHeaders;
    }
    if (this._headers !== undefined) {
      hasAnyValues = true;
      internalValueResult.headers = this._headers;
    }
    if (this._loginUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.loginUrl = this._loginUrl;
    }
    if (this._nameHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameHeaders = this._nameHeaders;
    }
    if (this._preferredUsernameHeaders !== undefined) {
      hasAnyValues = true;
      internalValueResult.preferredUsernameHeaders = this._preferredUsernameHeaders;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeader | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._ca.internalValue = undefined;
      this._challengeUrl = undefined;
      this._clientCommonNames = undefined;
      this._emailHeaders = undefined;
      this._headers = undefined;
      this._loginUrl = undefined;
      this._nameHeaders = undefined;
      this._preferredUsernameHeaders = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._ca.internalValue = value.ca;
      this._challengeUrl = value.challengeUrl;
      this._clientCommonNames = value.clientCommonNames;
      this._emailHeaders = value.emailHeaders;
      this._headers = value.headers;
      this._loginUrl = value.loginUrl;
      this._nameHeaders = value.nameHeaders;
      this._preferredUsernameHeaders = value.preferredUsernameHeaders;
    }
  }

  // ca - computed: false, optional: true, required: false
  private _ca = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeaderCaOutputReference(this, "ca");
  public get ca() {
    return this._ca;
  }
  public putCa(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeaderCa) {
    this._ca.internalValue = value;
  }
  public resetCa() {
    this._ca.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get caInput() {
    return this._ca.internalValue;
  }

  // challenge_url - computed: false, optional: true, required: false
  private _challengeUrl?: string; 
  public get challengeUrl() {
    return this.getStringAttribute('challenge_url');
  }
  public set challengeUrl(value: string) {
    this._challengeUrl = value;
  }
  public resetChallengeUrl() {
    this._challengeUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get challengeUrlInput() {
    return this._challengeUrl;
  }

  // client_common_names - computed: false, optional: true, required: false
  private _clientCommonNames?: string[]; 
  public get clientCommonNames() {
    return this.getListAttribute('client_common_names');
  }
  public set clientCommonNames(value: string[]) {
    this._clientCommonNames = value;
  }
  public resetClientCommonNames() {
    this._clientCommonNames = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clientCommonNamesInput() {
    return this._clientCommonNames;
  }

  // email_headers - computed: false, optional: true, required: false
  private _emailHeaders?: string[]; 
  public get emailHeaders() {
    return this.getListAttribute('email_headers');
  }
  public set emailHeaders(value: string[]) {
    this._emailHeaders = value;
  }
  public resetEmailHeaders() {
    this._emailHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get emailHeadersInput() {
    return this._emailHeaders;
  }

  // headers - computed: false, optional: true, required: false
  private _headers?: string[]; 
  public get headers() {
    return this.getListAttribute('headers');
  }
  public set headers(value: string[]) {
    this._headers = value;
  }
  public resetHeaders() {
    this._headers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get headersInput() {
    return this._headers;
  }

  // login_url - computed: false, optional: true, required: false
  private _loginUrl?: string; 
  public get loginUrl() {
    return this.getStringAttribute('login_url');
  }
  public set loginUrl(value: string) {
    this._loginUrl = value;
  }
  public resetLoginUrl() {
    this._loginUrl = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loginUrlInput() {
    return this._loginUrl;
  }

  // name_headers - computed: false, optional: true, required: false
  private _nameHeaders?: string[]; 
  public get nameHeaders() {
    return this.getListAttribute('name_headers');
  }
  public set nameHeaders(value: string[]) {
    this._nameHeaders = value;
  }
  public resetNameHeaders() {
    this._nameHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameHeadersInput() {
    return this._nameHeaders;
  }

  // preferred_username_headers - computed: false, optional: true, required: false
  private _preferredUsernameHeaders?: string[]; 
  public get preferredUsernameHeaders() {
    return this.getListAttribute('preferred_username_headers');
  }
  public set preferredUsernameHeaders(value: string[]) {
    this._preferredUsernameHeaders = value;
  }
  public resetPreferredUsernameHeaders() {
    this._preferredUsernameHeaders = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preferredUsernameHeadersInput() {
    return this._preferredUsernameHeaders;
  }
}
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProviders {
  /**
  * basicAuth contains configuration options for the BasicAuth IdP
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#basic_auth DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#basic_auth}
  */
  readonly basicAuth?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuth;
  /**
  * github enables user authentication using GitHub credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#github DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#github}
  */
  readonly github?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithub;
  /**
  * gitlab enables user authentication using GitLab credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#gitlab DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#gitlab}
  */
  readonly gitlab?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlab;
  /**
  * google enables user authentication using Google credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#google DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#google}
  */
  readonly google?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogle;
  /**
  * htpasswd enables user authentication using an HTPasswd file to validate credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#htpasswd DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#htpasswd}
  */
  readonly htpasswd?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswd;
  /**
  * keystone enables user authentication using keystone password credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#keystone DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#keystone}
  */
  readonly keystone?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystone;
  /**
  * ldap enables user authentication using LDAP credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#ldap DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#ldap}
  */
  readonly ldap?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdap;
  /**
  * mappingMethod determines how identities from this provider are mapped to users Defaults to 'claim'
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#mapping_method DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#mapping_method}
  */
  readonly mappingMethod?: string;
  /**
  * name is used to qualify the identities returned by this provider. - It MUST be unique and not shared by any other identity provider used - It MUST be a valid path segment: name cannot equal '.' or '..' or contain '/' or '%' or ':' Ref: https://godoc.org/github.com/openshift/origin/pkg/user/apis/user/validation#ValidateIdentityProviderName
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#name DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#name}
  */
  readonly name?: string;
  /**
  * openID enables user authentication using OpenID credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#open_id DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#open_id}
  */
  readonly openId?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenId;
  /**
  * requestHeader enables user authentication using request header credentials
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#request_header DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#request_header}
  */
  readonly requestHeader?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeader;
  /**
  * type identifies the identity provider type for this entry.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#type DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#type}
  */
  readonly type?: string;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    basic_auth: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthToTerraform(struct!.basicAuth),
    github: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubToTerraform(struct!.github),
    gitlab: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabToTerraform(struct!.gitlab),
    google: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogleToTerraform(struct!.google),
    htpasswd: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswdToTerraform(struct!.htpasswd),
    keystone: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneToTerraform(struct!.keystone),
    ldap: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapToTerraform(struct!.ldap),
    mapping_method: cdktf.stringToTerraform(struct!.mappingMethod),
    name: cdktf.stringToTerraform(struct!.name),
    open_id: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdToTerraform(struct!.openId),
    request_header: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeaderToTerraform(struct!.requestHeader),
    type: cdktf.stringToTerraform(struct!.type),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProviders | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    basic_auth: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthToHclTerraform(struct!.basicAuth),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuth",
    },
    github: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubToHclTerraform(struct!.github),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithub",
    },
    gitlab: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabToHclTerraform(struct!.gitlab),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlab",
    },
    google: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogleToHclTerraform(struct!.google),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogle",
    },
    htpasswd: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswdToHclTerraform(struct!.htpasswd),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswd",
    },
    keystone: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneToHclTerraform(struct!.keystone),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystone",
    },
    ldap: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapToHclTerraform(struct!.ldap),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdap",
    },
    mapping_method: {
      value: cdktf.stringToHclTerraform(struct!.mappingMethod),
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
    open_id: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdToHclTerraform(struct!.openId),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenId",
    },
    request_header: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeaderToHclTerraform(struct!.requestHeader),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeader",
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

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProviders | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._basicAuth?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.basicAuth = this._basicAuth?.internalValue;
    }
    if (this._github?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.github = this._github?.internalValue;
    }
    if (this._gitlab?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.gitlab = this._gitlab?.internalValue;
    }
    if (this._google?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.google = this._google?.internalValue;
    }
    if (this._htpasswd?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.htpasswd = this._htpasswd?.internalValue;
    }
    if (this._keystone?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.keystone = this._keystone?.internalValue;
    }
    if (this._ldap?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ldap = this._ldap?.internalValue;
    }
    if (this._mappingMethod !== undefined) {
      hasAnyValues = true;
      internalValueResult.mappingMethod = this._mappingMethod;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._openId?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.openId = this._openId?.internalValue;
    }
    if (this._requestHeader?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestHeader = this._requestHeader?.internalValue;
    }
    if (this._type !== undefined) {
      hasAnyValues = true;
      internalValueResult.type = this._type;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProviders | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = undefined;
      this._github.internalValue = undefined;
      this._gitlab.internalValue = undefined;
      this._google.internalValue = undefined;
      this._htpasswd.internalValue = undefined;
      this._keystone.internalValue = undefined;
      this._ldap.internalValue = undefined;
      this._mappingMethod = undefined;
      this._name = undefined;
      this._openId.internalValue = undefined;
      this._requestHeader.internalValue = undefined;
      this._type = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._basicAuth.internalValue = value.basicAuth;
      this._github.internalValue = value.github;
      this._gitlab.internalValue = value.gitlab;
      this._google.internalValue = value.google;
      this._htpasswd.internalValue = value.htpasswd;
      this._keystone.internalValue = value.keystone;
      this._ldap.internalValue = value.ldap;
      this._mappingMethod = value.mappingMethod;
      this._name = value.name;
      this._openId.internalValue = value.openId;
      this._requestHeader.internalValue = value.requestHeader;
      this._type = value.type;
    }
  }

  // basic_auth - computed: false, optional: true, required: false
  private _basicAuth = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuthOutputReference(this, "basic_auth");
  public get basicAuth() {
    return this._basicAuth;
  }
  public putBasicAuth(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersBasicAuth) {
    this._basicAuth.internalValue = value;
  }
  public resetBasicAuth() {
    this._basicAuth.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get basicAuthInput() {
    return this._basicAuth.internalValue;
  }

  // github - computed: false, optional: true, required: false
  private _github = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithubOutputReference(this, "github");
  public get github() {
    return this._github;
  }
  public putGithub(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGithub) {
    this._github.internalValue = value;
  }
  public resetGithub() {
    this._github.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get githubInput() {
    return this._github.internalValue;
  }

  // gitlab - computed: false, optional: true, required: false
  private _gitlab = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlabOutputReference(this, "gitlab");
  public get gitlab() {
    return this._gitlab;
  }
  public putGitlab(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGitlab) {
    this._gitlab.internalValue = value;
  }
  public resetGitlab() {
    this._gitlab.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get gitlabInput() {
    return this._gitlab.internalValue;
  }

  // google - computed: false, optional: true, required: false
  private _google = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogleOutputReference(this, "google");
  public get google() {
    return this._google;
  }
  public putGoogle(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersGoogle) {
    this._google.internalValue = value;
  }
  public resetGoogle() {
    this._google.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get googleInput() {
    return this._google.internalValue;
  }

  // htpasswd - computed: false, optional: true, required: false
  private _htpasswd = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswdOutputReference(this, "htpasswd");
  public get htpasswd() {
    return this._htpasswd;
  }
  public putHtpasswd(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersHtpasswd) {
    this._htpasswd.internalValue = value;
  }
  public resetHtpasswd() {
    this._htpasswd.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get htpasswdInput() {
    return this._htpasswd.internalValue;
  }

  // keystone - computed: false, optional: true, required: false
  private _keystone = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystoneOutputReference(this, "keystone");
  public get keystone() {
    return this._keystone;
  }
  public putKeystone(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersKeystone) {
    this._keystone.internalValue = value;
  }
  public resetKeystone() {
    this._keystone.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get keystoneInput() {
    return this._keystone.internalValue;
  }

  // ldap - computed: false, optional: true, required: false
  private _ldap = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdapOutputReference(this, "ldap");
  public get ldap() {
    return this._ldap;
  }
  public putLdap(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersLdap) {
    this._ldap.internalValue = value;
  }
  public resetLdap() {
    this._ldap.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ldapInput() {
    return this._ldap.internalValue;
  }

  // mapping_method - computed: false, optional: true, required: false
  private _mappingMethod?: string; 
  public get mappingMethod() {
    return this.getStringAttribute('mapping_method');
  }
  public set mappingMethod(value: string) {
    this._mappingMethod = value;
  }
  public resetMappingMethod() {
    this._mappingMethod = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mappingMethodInput() {
    return this._mappingMethod;
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

  // open_id - computed: false, optional: true, required: false
  private _openId = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenIdOutputReference(this, "open_id");
  public get openId() {
    return this._openId;
  }
  public putOpenId(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOpenId) {
    this._openId.internalValue = value;
  }
  public resetOpenId() {
    this._openId.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get openIdInput() {
    return this._openId.internalValue;
  }

  // request_header - computed: false, optional: true, required: false
  private _requestHeader = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeaderOutputReference(this, "request_header");
  public get requestHeader() {
    return this._requestHeader;
  }
  public putRequestHeader(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersRequestHeader) {
    this._requestHeader.internalValue = value;
  }
  public resetRequestHeader() {
    this._requestHeader.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestHeaderInput() {
    return this._requestHeader.internalValue;
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
}

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersList extends cdktf.ComplexList {
  public internalValue? : DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProviders[] | cdktf.IResolvable

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
  public get(index: number): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOutputReference {
    return new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpec {
  /**
  * ClusterDeploymentSelector is a LabelSelector indicating which clusters the SelectorIdentityProvider applies to in any namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#cluster_deployment_selector DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#cluster_deployment_selector}
  */
  readonly clusterDeploymentSelector?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelector;
  /**
  * IdentityProviders is an ordered list of ways for a user to identify themselves
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#identity_providers DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest#identity_providers}
  */
  readonly identityProviders: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProviders[] | cdktf.IResolvable;
}

export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecToTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_deployment_selector: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelectorToTerraform(struct!.clusterDeploymentSelector),
    identity_providers: cdktf.listMapper(dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersToTerraform, false)(struct!.identityProviders),
  }
}


export function dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecToHclTerraform(struct?: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_deployment_selector: {
      value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelectorToHclTerraform(struct!.clusterDeploymentSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelector",
    },
    identity_providers: {
      value: cdktf.listMapperHcl(dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersToHclTerraform, false)(struct!.identityProviders),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterDeploymentSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterDeploymentSelector = this._clusterDeploymentSelector?.internalValue;
    }
    if (this._identityProviders?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.identityProviders = this._identityProviders?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterDeploymentSelector.internalValue = undefined;
      this._identityProviders.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterDeploymentSelector.internalValue = value.clusterDeploymentSelector;
      this._identityProviders.internalValue = value.identityProviders;
    }
  }

  // cluster_deployment_selector - computed: false, optional: true, required: false
  private _clusterDeploymentSelector = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelectorOutputReference(this, "cluster_deployment_selector");
  public get clusterDeploymentSelector() {
    return this._clusterDeploymentSelector;
  }
  public putClusterDeploymentSelector(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecClusterDeploymentSelector) {
    this._clusterDeploymentSelector.internalValue = value;
  }
  public resetClusterDeploymentSelector() {
    this._clusterDeploymentSelector.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterDeploymentSelectorInput() {
    return this._clusterDeploymentSelector.internalValue;
  }

  // identity_providers - computed: false, optional: false, required: true
  private _identityProviders = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProvidersList(this, "identity_providers", false);
  public get identityProviders() {
    return this._identityProviders;
  }
  public putIdentityProviders(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecIdentityProviders[] | cdktf.IResolvable) {
    this._identityProviders.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get identityProvidersInput() {
    return this._identityProviders.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest k8s_hive_openshift_io_selector_sync_identity_provider_v1_manifest}
*/
export class DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_hive_openshift_io_selector_sync_identity_provider_v1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest to import
  * @param importFromId The id of the existing DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_hive_openshift_io_selector_sync_identity_provider_v1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/hive_openshift_io_selector_sync_identity_provider_v1_manifest k8s_hive_openshift_io_selector_sync_identity_provider_v1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_hive_openshift_io_selector_sync_identity_provider_v1_manifest',
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
  private _metadata = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpec) {
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
      metadata: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestMetadata",
      },
      spec: {
        value: dataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SHiveOpenshiftIoSelectorSyncIdentityProviderV1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
