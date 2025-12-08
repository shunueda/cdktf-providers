// https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/security_profiles_operator_x_k8s_io_profile_recording_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/security_profiles_operator_x_k8s_io_profile_recording_v1alpha1_manifest#metadata DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestMetadata;
  /**
  * ProfileRecordingSpec defines the desired state of ProfileRecording.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/security_profiles_operator_x_k8s_io_profile_recording_v1alpha1_manifest#spec DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpec;
}
export interface DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/security_profiles_operator_x_k8s_io_profile_recording_v1alpha1_manifest#annotations DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/security_profiles_operator_x_k8s_io_profile_recording_v1alpha1_manifest#labels DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/security_profiles_operator_x_k8s_io_profile_recording_v1alpha1_manifest#name DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/security_profiles_operator_x_k8s_io_profile_recording_v1alpha1_manifest#namespace DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelectorMatchExpressions {
  /**
  * key is the label key that the selector applies to.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/security_profiles_operator_x_k8s_io_profile_recording_v1alpha1_manifest#key DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1Manifest#key}
  */
  readonly key: string;
  /**
  * operator represents a key's relationship to a set of values. Valid operators are In, NotIn, Exists and DoesNotExist.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/security_profiles_operator_x_k8s_io_profile_recording_v1alpha1_manifest#operator DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1Manifest#operator}
  */
  readonly operator: string;
  /**
  * values is an array of string values. If the operator is In or NotIn, the values array must be non-empty. If the operator is Exists or DoesNotExist, the values array must be empty. This array is replaced during a strategic merge patch.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/security_profiles_operator_x_k8s_io_profile_recording_v1alpha1_manifest#values DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1Manifest#values}
  */
  readonly values?: string[];
}

export function dataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelectorMatchExpressionsToTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelectorMatchExpressions | cdktf.IResolvable): any {
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


export function dataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelectorMatchExpressionsToHclTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelectorMatchExpressions | cdktf.IResolvable): any {
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

export class DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelectorMatchExpressionsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelectorMatchExpressions | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelectorMatchExpressions | cdktf.IResolvable | undefined) {
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

export class DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelectorMatchExpressionsList extends cdktf.ComplexList {
  public internalValue? : DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelectorMatchExpressions[] | cdktf.IResolvable

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
  public get(index: number): DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelectorMatchExpressionsOutputReference {
    return new DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelectorMatchExpressionsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelector {
  /**
  * matchExpressions is a list of label selector requirements. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/security_profiles_operator_x_k8s_io_profile_recording_v1alpha1_manifest#match_expressions DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1Manifest#match_expressions}
  */
  readonly matchExpressions?: DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelectorMatchExpressions[] | cdktf.IResolvable;
  /**
  * matchLabels is a map of {key,value} pairs. A single {key,value} in the matchLabels map is equivalent to an element of matchExpressions, whose key field is 'key', the operator is 'In', and the values array contains only 'value'. The requirements are ANDed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/security_profiles_operator_x_k8s_io_profile_recording_v1alpha1_manifest#match_labels DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1Manifest#match_labels}
  */
  readonly matchLabels?: { [key: string]: string };
}

export function dataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelectorToTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    match_expressions: cdktf.listMapper(dataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelectorMatchExpressionsToTerraform, false)(struct!.matchExpressions),
    match_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.matchLabels),
  }
}


export function dataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelectorToHclTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelector | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    match_expressions: {
      value: cdktf.listMapperHcl(dataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelectorMatchExpressionsToHclTerraform, false)(struct!.matchExpressions),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelectorMatchExpressionsList",
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

export class DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelectorOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelector | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelector | cdktf.IResolvable | undefined) {
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
  private _matchExpressions = new DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelectorMatchExpressionsList(this, "match_expressions", false);
  public get matchExpressions() {
    return this._matchExpressions;
  }
  public putMatchExpressions(value: DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelectorMatchExpressions[] | cdktf.IResolvable) {
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
export interface DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpec {
  /**
  * Containers is a set of containers to record. This allows to select only specific containers to record instead of all containers present in the pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/security_profiles_operator_x_k8s_io_profile_recording_v1alpha1_manifest#containers DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1Manifest#containers}
  */
  readonly containers?: string[];
  /**
  * DisableProfileAfterRecording indicates whether the profile should be disabled after recording and thus skipped during reconcile. In case of SELinux profiles, reconcile can take a significant amount of time and for all profiles might not be needed. This Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/security_profiles_operator_x_k8s_io_profile_recording_v1alpha1_manifest#disable_profile_after_recording DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1Manifest#disable_profile_after_recording}
  */
  readonly disableProfileAfterRecording?: boolean | cdktf.IResolvable;
  /**
  * Kind of object to be recorded.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/security_profiles_operator_x_k8s_io_profile_recording_v1alpha1_manifest#kind DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Whether or how to merge recorded profiles. Can be one of 'none' or 'containers'. Default is 'none'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/security_profiles_operator_x_k8s_io_profile_recording_v1alpha1_manifest#merge_strategy DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1Manifest#merge_strategy}
  */
  readonly mergeStrategy?: string;
  /**
  * PodSelector selects the pods to record. This field follows standard label selector semantics. An empty podSelector matches all pods in this namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/security_profiles_operator_x_k8s_io_profile_recording_v1alpha1_manifest#pod_selector DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1Manifest#pod_selector}
  */
  readonly podSelector: DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelector;
  /**
  * Recorder to be used.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/security_profiles_operator_x_k8s_io_profile_recording_v1alpha1_manifest#recorder DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1Manifest#recorder}
  */
  readonly recorder: string;
}

export function dataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecToTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    containers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.containers),
    disable_profile_after_recording: cdktf.booleanToTerraform(struct!.disableProfileAfterRecording),
    kind: cdktf.stringToTerraform(struct!.kind),
    merge_strategy: cdktf.stringToTerraform(struct!.mergeStrategy),
    pod_selector: dataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelectorToTerraform(struct!.podSelector),
    recorder: cdktf.stringToTerraform(struct!.recorder),
  }
}


export function dataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    containers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.containers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    disable_profile_after_recording: {
      value: cdktf.booleanToHclTerraform(struct!.disableProfileAfterRecording),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    merge_strategy: {
      value: cdktf.stringToHclTerraform(struct!.mergeStrategy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    pod_selector: {
      value: dataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelectorToHclTerraform(struct!.podSelector),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelector",
    },
    recorder: {
      value: cdktf.stringToHclTerraform(struct!.recorder),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._containers !== undefined) {
      hasAnyValues = true;
      internalValueResult.containers = this._containers;
    }
    if (this._disableProfileAfterRecording !== undefined) {
      hasAnyValues = true;
      internalValueResult.disableProfileAfterRecording = this._disableProfileAfterRecording;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._mergeStrategy !== undefined) {
      hasAnyValues = true;
      internalValueResult.mergeStrategy = this._mergeStrategy;
    }
    if (this._podSelector?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podSelector = this._podSelector?.internalValue;
    }
    if (this._recorder !== undefined) {
      hasAnyValues = true;
      internalValueResult.recorder = this._recorder;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._containers = undefined;
      this._disableProfileAfterRecording = undefined;
      this._kind = undefined;
      this._mergeStrategy = undefined;
      this._podSelector.internalValue = undefined;
      this._recorder = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._containers = value.containers;
      this._disableProfileAfterRecording = value.disableProfileAfterRecording;
      this._kind = value.kind;
      this._mergeStrategy = value.mergeStrategy;
      this._podSelector.internalValue = value.podSelector;
      this._recorder = value.recorder;
    }
  }

  // containers - computed: false, optional: true, required: false
  private _containers?: string[]; 
  public get containers() {
    return this.getListAttribute('containers');
  }
  public set containers(value: string[]) {
    this._containers = value;
  }
  public resetContainers() {
    this._containers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containersInput() {
    return this._containers;
  }

  // disable_profile_after_recording - computed: false, optional: true, required: false
  private _disableProfileAfterRecording?: boolean | cdktf.IResolvable; 
  public get disableProfileAfterRecording() {
    return this.getBooleanAttribute('disable_profile_after_recording');
  }
  public set disableProfileAfterRecording(value: boolean | cdktf.IResolvable) {
    this._disableProfileAfterRecording = value;
  }
  public resetDisableProfileAfterRecording() {
    this._disableProfileAfterRecording = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get disableProfileAfterRecordingInput() {
    return this._disableProfileAfterRecording;
  }

  // kind - computed: false, optional: false, required: true
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // merge_strategy - computed: false, optional: true, required: false
  private _mergeStrategy?: string; 
  public get mergeStrategy() {
    return this.getStringAttribute('merge_strategy');
  }
  public set mergeStrategy(value: string) {
    this._mergeStrategy = value;
  }
  public resetMergeStrategy() {
    this._mergeStrategy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mergeStrategyInput() {
    return this._mergeStrategy;
  }

  // pod_selector - computed: false, optional: false, required: true
  private _podSelector = new DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelectorOutputReference(this, "pod_selector");
  public get podSelector() {
    return this._podSelector;
  }
  public putPodSelector(value: DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecPodSelector) {
    this._podSelector.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get podSelectorInput() {
    return this._podSelector.internalValue;
  }

  // recorder - computed: false, optional: false, required: true
  private _recorder?: string; 
  public get recorder() {
    return this.getStringAttribute('recorder');
  }
  public set recorder(value: string) {
    this._recorder = value;
  }
  // Temporarily expose input value. Use with caution.
  public get recorderInput() {
    return this._recorder;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/security_profiles_operator_x_k8s_io_profile_recording_v1alpha1_manifest k8s_security_profiles_operator_x_k8s_io_profile_recording_v1alpha1_manifest}
*/
export class DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_security_profiles_operator_x_k8s_io_profile_recording_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/security_profiles_operator_x_k8s_io_profile_recording_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_security_profiles_operator_x_k8s_io_profile_recording_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.8/docs/data-sources/security_profiles_operator_x_k8s_io_profile_recording_v1alpha1_manifest k8s_security_profiles_operator_x_k8s_io_profile_recording_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_security_profiles_operator_x_k8s_io_profile_recording_v1alpha1_manifest',
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
  private _metadata = new DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpec) {
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
      metadata: dataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SSecurityProfilesOperatorXK8SIoProfileRecordingV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
