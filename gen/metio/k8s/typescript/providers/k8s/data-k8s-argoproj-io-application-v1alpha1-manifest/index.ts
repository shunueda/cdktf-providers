// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#metadata DataK8SArgoprojIoApplicationV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SArgoprojIoApplicationV1Alpha1ManifestMetadata;
  /**
  * Operation contains information about a requested or running operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#operation DataK8SArgoprojIoApplicationV1Alpha1Manifest#operation}
  */
  readonly operation?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperation;
  /**
  * ApplicationSpec represents desired application state. Contains link to repository with application definition and additional parameters link definition revision.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#spec DataK8SArgoprojIoApplicationV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpec;
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#annotations DataK8SArgoprojIoApplicationV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#labels DataK8SArgoprojIoApplicationV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#namespace DataK8SArgoprojIoApplicationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#value DataK8SArgoprojIoApplicationV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInfoToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInfoToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInfo | cdktf.IResolvable): any {
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInfoList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInfo[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInfoOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInitiatedBy {
  /**
  * Automated is set to true if operation was initiated automatically by the application controller.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#automated DataK8SArgoprojIoApplicationV1Alpha1Manifest#automated}
  */
  readonly automated?: boolean | cdktf.IResolvable;
  /**
  * Username contains the name of a user who started operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#username DataK8SArgoprojIoApplicationV1Alpha1Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInitiatedByToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInitiatedBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automated: cdktf.booleanToTerraform(struct!.automated),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInitiatedByToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInitiatedBy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automated: {
      value: cdktf.booleanToHclTerraform(struct!.automated),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    username: {
      value: cdktf.stringToHclTerraform(struct!.username),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInitiatedByOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInitiatedBy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automated !== undefined) {
      hasAnyValues = true;
      internalValueResult.automated = this._automated;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInitiatedBy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automated = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automated = value.automated;
      this._username = value.username;
    }
  }

  // automated - computed: false, optional: true, required: false
  private _automated?: boolean | cdktf.IResolvable; 
  public get automated() {
    return this.getBooleanAttribute('automated');
  }
  public set automated(value: boolean | cdktf.IResolvable) {
    this._automated = value;
  }
  public resetAutomated() {
    this._automated = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedInput() {
    return this._automated;
  }

  // username - computed: false, optional: true, required: false
  private _username?: string; 
  public get username() {
    return this.getStringAttribute('username');
  }
  public set username(value: string) {
    this._username = value;
  }
  public resetUsername() {
    this._username = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get usernameInput() {
    return this._username;
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetryBackoff {
  /**
  * Duration is the amount to back off. Default unit is seconds, but could also be a duration (e.g. '2m', '1h')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#duration DataK8SArgoprojIoApplicationV1Alpha1Manifest#duration}
  */
  readonly duration?: string;
  /**
  * Factor is a factor to multiply the base duration after each failed retry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#factor DataK8SArgoprojIoApplicationV1Alpha1Manifest#factor}
  */
  readonly factor?: number;
  /**
  * MaxDuration is the maximum amount of time allowed for the backoff strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#max_duration DataK8SArgoprojIoApplicationV1Alpha1Manifest#max_duration}
  */
  readonly maxDuration?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetryBackoffToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetryBackoff | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    factor: cdktf.numberToTerraform(struct!.factor),
    max_duration: cdktf.stringToTerraform(struct!.maxDuration),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetryBackoffToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetryBackoff | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    factor: {
      value: cdktf.numberToHclTerraform(struct!.factor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetryBackoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetryBackoff | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._factor !== undefined) {
      hasAnyValues = true;
      internalValueResult.factor = this._factor;
    }
    if (this._maxDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDuration = this._maxDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetryBackoff | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._factor = undefined;
      this._maxDuration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._factor = value.factor;
      this._maxDuration = value.maxDuration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // factor - computed: false, optional: true, required: false
  private _factor?: number; 
  public get factor() {
    return this.getNumberAttribute('factor');
  }
  public set factor(value: number) {
    this._factor = value;
  }
  public resetFactor() {
    this._factor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factorInput() {
    return this._factor;
  }

  // max_duration - computed: false, optional: true, required: false
  private _maxDuration?: string; 
  public get maxDuration() {
    return this.getStringAttribute('max_duration');
  }
  public set maxDuration(value: string) {
    this._maxDuration = value;
  }
  public resetMaxDuration() {
    this._maxDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDurationInput() {
    return this._maxDuration;
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetry {
  /**
  * Backoff controls how to backoff on subsequent retries of failed syncs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#backoff DataK8SArgoprojIoApplicationV1Alpha1Manifest#backoff}
  */
  readonly backoff?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetryBackoff;
  /**
  * Limit is the maximum number of attempts for retrying a failed sync. If set to 0, no retries will be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#limit DataK8SArgoprojIoApplicationV1Alpha1Manifest#limit}
  */
  readonly limit?: number;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetryToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backoff: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetryBackoffToTerraform(struct!.backoff),
    limit: cdktf.numberToTerraform(struct!.limit),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetryToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backoff: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetryBackoffToHclTerraform(struct!.backoff),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetryBackoff",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backoff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backoff = this._backoff?.internalValue;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backoff.internalValue = undefined;
      this._limit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backoff.internalValue = value.backoff;
      this._limit = value.limit;
    }
  }

  // backoff - computed: false, optional: true, required: false
  private _backoff = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetryBackoffOutputReference(this, "backoff");
  public get backoff() {
    return this._backoff;
  }
  public putBackoff(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetryBackoff) {
    this._backoff.internalValue = value;
  }
  public resetBackoff() {
    this._backoff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffInput() {
    return this._backoff.internalValue;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncResources {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#group DataK8SArgoprojIoApplicationV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#kind DataK8SArgoprojIoApplicationV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#namespace DataK8SArgoprojIoApplicationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncResourcesToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncResourcesToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncResourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
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

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
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
      this._group = value.group;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
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

  // namespace - computed: false, optional: true, required: false
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
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncResourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncResources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncResourcesOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncResourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetExtVars {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#code DataK8SArgoprojIoApplicationV1Alpha1Manifest#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#value DataK8SArgoprojIoApplicationV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetExtVarsToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetExtVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.booleanToTerraform(struct!.code),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetExtVarsToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetExtVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.booleanToHclTerraform(struct!.code),
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetExtVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetExtVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetExtVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: boolean | cdktf.IResolvable; 
  public get code() {
    return this.getBooleanAttribute('code');
  }
  public set code(value: boolean | cdktf.IResolvable) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetExtVarsList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetExtVars[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetExtVarsOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetExtVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetTlas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#code DataK8SArgoprojIoApplicationV1Alpha1Manifest#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#value DataK8SArgoprojIoApplicationV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetTlasToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetTlas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.booleanToTerraform(struct!.code),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetTlasToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetTlas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.booleanToHclTerraform(struct!.code),
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetTlasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetTlas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetTlas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: boolean | cdktf.IResolvable; 
  public get code() {
    return this.getBooleanAttribute('code');
  }
  public set code(value: boolean | cdktf.IResolvable) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetTlasList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetTlas[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetTlasOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetTlasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnet {
  /**
  * ExtVars is a list of Jsonnet External Variables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#ext_vars DataK8SArgoprojIoApplicationV1Alpha1Manifest#ext_vars}
  */
  readonly extVars?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetExtVars[] | cdktf.IResolvable;
  /**
  * Additional library search dirs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#libs DataK8SArgoprojIoApplicationV1Alpha1Manifest#libs}
  */
  readonly libs?: string[];
  /**
  * TLAS is a list of Jsonnet Top-level Arguments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#tlas DataK8SArgoprojIoApplicationV1Alpha1Manifest#tlas}
  */
  readonly tlas?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetTlas[] | cdktf.IResolvable;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_vars: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetExtVarsToTerraform, false)(struct!.extVars),
    libs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.libs),
    tlas: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetTlasToTerraform, false)(struct!.tlas),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_vars: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetExtVarsToHclTerraform, false)(struct!.extVars),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetExtVarsList",
    },
    libs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.libs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tlas: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetTlasToHclTerraform, false)(struct!.tlas),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetTlasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extVars = this._extVars?.internalValue;
    }
    if (this._libs !== undefined) {
      hasAnyValues = true;
      internalValueResult.libs = this._libs;
    }
    if (this._tlas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlas = this._tlas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extVars.internalValue = undefined;
      this._libs = undefined;
      this._tlas.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extVars.internalValue = value.extVars;
      this._libs = value.libs;
      this._tlas.internalValue = value.tlas;
    }
  }

  // ext_vars - computed: false, optional: true, required: false
  private _extVars = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetExtVarsList(this, "ext_vars", false);
  public get extVars() {
    return this._extVars;
  }
  public putExtVars(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetExtVars[] | cdktf.IResolvable) {
    this._extVars.internalValue = value;
  }
  public resetExtVars() {
    this._extVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extVarsInput() {
    return this._extVars.internalValue;
  }

  // libs - computed: false, optional: true, required: false
  private _libs?: string[]; 
  public get libs() {
    return this.getListAttribute('libs');
  }
  public set libs(value: string[]) {
    this._libs = value;
  }
  public resetLibs() {
    this._libs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libsInput() {
    return this._libs;
  }

  // tlas - computed: false, optional: true, required: false
  private _tlas = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetTlasList(this, "tlas", false);
  public get tlas() {
    return this._tlas;
  }
  public putTlas(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetTlas[] | cdktf.IResolvable) {
    this._tlas.internalValue = value;
  }
  public resetTlas() {
    this._tlas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlasInput() {
    return this._tlas.internalValue;
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectory {
  /**
  * Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#exclude DataK8SArgoprojIoApplicationV1Alpha1Manifest#exclude}
  */
  readonly exclude?: string;
  /**
  * Include contains a glob pattern to match paths against that should be explicitly included during manifest generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#include DataK8SArgoprojIoApplicationV1Alpha1Manifest#include}
  */
  readonly include?: string;
  /**
  * Jsonnet holds options specific to Jsonnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#jsonnet DataK8SArgoprojIoApplicationV1Alpha1Manifest#jsonnet}
  */
  readonly jsonnet?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnet;
  /**
  * Recurse specifies whether to scan a directory recursively for manifests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#recurse DataK8SArgoprojIoApplicationV1Alpha1Manifest#recurse}
  */
  readonly recurse?: boolean | cdktf.IResolvable;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.stringToTerraform(struct!.exclude),
    include: cdktf.stringToTerraform(struct!.include),
    jsonnet: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetToTerraform(struct!.jsonnet),
    recurse: cdktf.booleanToTerraform(struct!.recurse),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.stringToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jsonnet: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetToHclTerraform(struct!.jsonnet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnet",
    },
    recurse: {
      value: cdktf.booleanToHclTerraform(struct!.recurse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._jsonnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonnet = this._jsonnet?.internalValue;
    }
    if (this._recurse !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurse = this._recurse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._include = undefined;
      this._jsonnet.internalValue = undefined;
      this._recurse = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._include = value.include;
      this._jsonnet.internalValue = value.jsonnet;
      this._recurse = value.recurse;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string; 
  public get exclude() {
    return this.getStringAttribute('exclude');
  }
  public set exclude(value: string) {
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
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // jsonnet - computed: false, optional: true, required: false
  private _jsonnet = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnetOutputReference(this, "jsonnet");
  public get jsonnet() {
    return this._jsonnet;
  }
  public putJsonnet(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryJsonnet) {
    this._jsonnet.internalValue = value;
  }
  public resetJsonnet() {
    this._jsonnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonnetInput() {
    return this._jsonnet.internalValue;
  }

  // recurse - computed: false, optional: true, required: false
  private _recurse?: boolean | cdktf.IResolvable; 
  public get recurse() {
    return this.getBooleanAttribute('recurse');
  }
  public set recurse(value: boolean | cdktf.IResolvable) {
    this._recurse = value;
  }
  public resetRecurse() {
    this._recurse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurseInput() {
    return this._recurse;
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmFileParameters {
  /**
  * Name is the name of the Helm parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Path is the path to the file containing the values for the Helm parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#path DataK8SArgoprojIoApplicationV1Alpha1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmFileParametersToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmFileParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmFileParametersToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmFileParameters | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmFileParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmFileParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmFileParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmFileParametersList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmFileParameters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmFileParametersOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmFileParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmParameters {
  /**
  * ForceString determines whether to tell Helm to interpret booleans and numbers as strings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#force_string DataK8SArgoprojIoApplicationV1Alpha1Manifest#force_string}
  */
  readonly forceString?: boolean | cdktf.IResolvable;
  /**
  * Name is the name of the Helm parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Value is the value for the Helm parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#value DataK8SArgoprojIoApplicationV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmParametersToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_string: cdktf.booleanToTerraform(struct!.forceString),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmParametersToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_string: {
      value: cdktf.booleanToHclTerraform(struct!.forceString),
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceString !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceString = this._forceString;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceString = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forceString = value.forceString;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // force_string - computed: false, optional: true, required: false
  private _forceString?: boolean | cdktf.IResolvable; 
  public get forceString() {
    return this.getBooleanAttribute('force_string');
  }
  public set forceString(value: boolean | cdktf.IResolvable) {
    this._forceString = value;
  }
  public resetForceString() {
    this._forceString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceStringInput() {
    return this._forceString;
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmParametersList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmParameters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmParametersOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelm {
  /**
  * FileParameters are file parameters to the helm template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#file_parameters DataK8SArgoprojIoApplicationV1Alpha1Manifest#file_parameters}
  */
  readonly fileParameters?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmFileParameters[] | cdktf.IResolvable;
  /**
  * IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#ignore_missing_value_files DataK8SArgoprojIoApplicationV1Alpha1Manifest#ignore_missing_value_files}
  */
  readonly ignoreMissingValueFiles?: boolean | cdktf.IResolvable;
  /**
  * Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#parameters DataK8SArgoprojIoApplicationV1Alpha1Manifest#parameters}
  */
  readonly parameters?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmParameters[] | cdktf.IResolvable;
  /**
  * PassCredentials pass credentials to all domains (Helm's --pass-credentials)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#pass_credentials DataK8SArgoprojIoApplicationV1Alpha1Manifest#pass_credentials}
  */
  readonly passCredentials?: boolean | cdktf.IResolvable;
  /**
  * ReleaseName is the Helm release name to use. If omitted it will use the application name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#release_name DataK8SArgoprojIoApplicationV1Alpha1Manifest#release_name}
  */
  readonly releaseName?: string;
  /**
  * SkipCrds skips custom resource definition installation step (Helm's --skip-crds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#skip_crds DataK8SArgoprojIoApplicationV1Alpha1Manifest#skip_crds}
  */
  readonly skipCrds?: boolean | cdktf.IResolvable;
  /**
  * ValuesFiles is a list of Helm value files to use when generating a template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#value_files DataK8SArgoprojIoApplicationV1Alpha1Manifest#value_files}
  */
  readonly valueFiles?: string[];
  /**
  * Values specifies Helm values to be passed to helm template, typically defined as a block. ValuesObject takes precedence over Values, so use one or the other.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#values DataK8SArgoprojIoApplicationV1Alpha1Manifest#values}
  */
  readonly values?: string;
  /**
  * ValuesObject specifies Helm values to be passed to helm template, defined as a map. This takes precedence over Values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#values_object DataK8SArgoprojIoApplicationV1Alpha1Manifest#values_object}
  */
  readonly valuesObject?: { [key: string]: string };
  /**
  * Version is the Helm version to use for templating ('3')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#version DataK8SArgoprojIoApplicationV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_parameters: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmFileParametersToTerraform, false)(struct!.fileParameters),
    ignore_missing_value_files: cdktf.booleanToTerraform(struct!.ignoreMissingValueFiles),
    parameters: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmParametersToTerraform, false)(struct!.parameters),
    pass_credentials: cdktf.booleanToTerraform(struct!.passCredentials),
    release_name: cdktf.stringToTerraform(struct!.releaseName),
    skip_crds: cdktf.booleanToTerraform(struct!.skipCrds),
    value_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valueFiles),
    values: cdktf.stringToTerraform(struct!.values),
    values_object: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.valuesObject),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_parameters: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmFileParametersToHclTerraform, false)(struct!.fileParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmFileParametersList",
    },
    ignore_missing_value_files: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMissingValueFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parameters: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmParametersList",
    },
    pass_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.passCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    release_name: {
      value: cdktf.stringToHclTerraform(struct!.releaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_crds: {
      value: cdktf.booleanToHclTerraform(struct!.skipCrds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.valueFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.stringToHclTerraform(struct!.values),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values_object: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.valuesObject),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileParameters = this._fileParameters?.internalValue;
    }
    if (this._ignoreMissingValueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMissingValueFiles = this._ignoreMissingValueFiles;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._passCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.passCredentials = this._passCredentials;
    }
    if (this._releaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseName = this._releaseName;
    }
    if (this._skipCrds !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipCrds = this._skipCrds;
    }
    if (this._valueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFiles = this._valueFiles;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._valuesObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesObject = this._valuesObject;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileParameters.internalValue = undefined;
      this._ignoreMissingValueFiles = undefined;
      this._parameters.internalValue = undefined;
      this._passCredentials = undefined;
      this._releaseName = undefined;
      this._skipCrds = undefined;
      this._valueFiles = undefined;
      this._values = undefined;
      this._valuesObject = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileParameters.internalValue = value.fileParameters;
      this._ignoreMissingValueFiles = value.ignoreMissingValueFiles;
      this._parameters.internalValue = value.parameters;
      this._passCredentials = value.passCredentials;
      this._releaseName = value.releaseName;
      this._skipCrds = value.skipCrds;
      this._valueFiles = value.valueFiles;
      this._values = value.values;
      this._valuesObject = value.valuesObject;
      this._version = value.version;
    }
  }

  // file_parameters - computed: false, optional: true, required: false
  private _fileParameters = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmFileParametersList(this, "file_parameters", false);
  public get fileParameters() {
    return this._fileParameters;
  }
  public putFileParameters(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmFileParameters[] | cdktf.IResolvable) {
    this._fileParameters.internalValue = value;
  }
  public resetFileParameters() {
    this._fileParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileParametersInput() {
    return this._fileParameters.internalValue;
  }

  // ignore_missing_value_files - computed: false, optional: true, required: false
  private _ignoreMissingValueFiles?: boolean | cdktf.IResolvable; 
  public get ignoreMissingValueFiles() {
    return this.getBooleanAttribute('ignore_missing_value_files');
  }
  public set ignoreMissingValueFiles(value: boolean | cdktf.IResolvable) {
    this._ignoreMissingValueFiles = value;
  }
  public resetIgnoreMissingValueFiles() {
    this._ignoreMissingValueFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingValueFilesInput() {
    return this._ignoreMissingValueFiles;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // pass_credentials - computed: false, optional: true, required: false
  private _passCredentials?: boolean | cdktf.IResolvable; 
  public get passCredentials() {
    return this.getBooleanAttribute('pass_credentials');
  }
  public set passCredentials(value: boolean | cdktf.IResolvable) {
    this._passCredentials = value;
  }
  public resetPassCredentials() {
    this._passCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passCredentialsInput() {
    return this._passCredentials;
  }

  // release_name - computed: false, optional: true, required: false
  private _releaseName?: string; 
  public get releaseName() {
    return this.getStringAttribute('release_name');
  }
  public set releaseName(value: string) {
    this._releaseName = value;
  }
  public resetReleaseName() {
    this._releaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNameInput() {
    return this._releaseName;
  }

  // skip_crds - computed: false, optional: true, required: false
  private _skipCrds?: boolean | cdktf.IResolvable; 
  public get skipCrds() {
    return this.getBooleanAttribute('skip_crds');
  }
  public set skipCrds(value: boolean | cdktf.IResolvable) {
    this._skipCrds = value;
  }
  public resetSkipCrds() {
    this._skipCrds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCrdsInput() {
    return this._skipCrds;
  }

  // value_files - computed: false, optional: true, required: false
  private _valueFiles?: string[]; 
  public get valueFiles() {
    return this.getListAttribute('value_files');
  }
  public set valueFiles(value: string[]) {
    this._valueFiles = value;
  }
  public resetValueFiles() {
    this._valueFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFilesInput() {
    return this._valueFiles;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // values_object - computed: false, optional: true, required: false
  private _valuesObject?: { [key: string]: string }; 
  public get valuesObject() {
    return this.getStringMapAttribute('values_object');
  }
  public set valuesObject(value: { [key: string]: string }) {
    this._valuesObject = value;
  }
  public resetValuesObject() {
    this._valuesObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesObjectInput() {
    return this._valuesObject;
  }

  // version - computed: false, optional: true, required: false
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
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatchesTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#annotation_selector DataK8SArgoprojIoApplicationV1Alpha1Manifest#annotation_selector}
  */
  readonly annotationSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#group DataK8SArgoprojIoApplicationV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#kind DataK8SArgoprojIoApplicationV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#label_selector DataK8SArgoprojIoApplicationV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#namespace DataK8SArgoprojIoApplicationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#version DataK8SArgoprojIoApplicationV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatchesTargetToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatchesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation_selector: cdktf.stringToTerraform(struct!.annotationSelector),
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    label_selector: cdktf.stringToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatchesTargetToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatchesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation_selector: {
      value: cdktf.stringToHclTerraform(struct!.annotationSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: cdktf.stringToHclTerraform(struct!.labelSelector),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatchesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatchesTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationSelector = this._annotationSelector;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatchesTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotationSelector = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._labelSelector = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotationSelector = value.annotationSelector;
      this._group = value.group;
      this._kind = value.kind;
      this._labelSelector = value.labelSelector;
      this._name = value.name;
      this._namespace = value.namespace;
      this._version = value.version;
    }
  }

  // annotation_selector - computed: false, optional: true, required: false
  private _annotationSelector?: string; 
  public get annotationSelector() {
    return this.getStringAttribute('annotation_selector');
  }
  public set annotationSelector(value: string) {
    this._annotationSelector = value;
  }
  public resetAnnotationSelector() {
    this._annotationSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationSelectorInput() {
    return this._annotationSelector;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector?: string; 
  public get labelSelector() {
    return this.getStringAttribute('label_selector');
  }
  public set labelSelector(value: string) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
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

  // namespace - computed: false, optional: true, required: false
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

  // version - computed: false, optional: true, required: false
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
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatches {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#options DataK8SArgoprojIoApplicationV1Alpha1Manifest#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#patch DataK8SArgoprojIoApplicationV1Alpha1Manifest#patch}
  */
  readonly patch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#path DataK8SArgoprojIoApplicationV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#target DataK8SArgoprojIoApplicationV1Alpha1Manifest#target}
  */
  readonly target?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatchesTarget;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatchesToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    patch: cdktf.stringToTerraform(struct!.patch),
    path: cdktf.stringToTerraform(struct!.path),
    target: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatchesTargetToTerraform(struct!.target),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatchesToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    patch: {
      value: cdktf.stringToHclTerraform(struct!.patch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatchesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatchesTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._patch !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._options = undefined;
      this._patch = undefined;
      this._path = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._options = value.options;
      this._patch = value.patch;
      this._path = value.path;
      this._target.internalValue = value.target;
    }
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // patch - computed: false, optional: true, required: false
  private _patch?: string; 
  public get patch() {
    return this.getStringAttribute('patch');
  }
  public set patch(value: string) {
    this._patch = value;
  }
  public resetPatch() {
    this._patch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // target - computed: false, optional: true, required: false
  private _target = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatchesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatchesTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatchesOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizeReplicas {
  /**
  * Number of replicas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#count DataK8SArgoprojIoApplicationV1Alpha1Manifest#count}
  */
  readonly count: string;
  /**
  * Name of Deployment or StatefulSet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizeReplicasToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizeReplicas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.stringToTerraform(struct!.count),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizeReplicasToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizeReplicas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizeReplicasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizeReplicas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizeReplicas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._name = value.name;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizeReplicasList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizeReplicas[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizeReplicasOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizeReplicasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomize {
  /**
  * CommonAnnotations is a list of additional annotations to add to rendered manifests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#common_annotations DataK8SArgoprojIoApplicationV1Alpha1Manifest#common_annotations}
  */
  readonly commonAnnotations?: { [key: string]: string };
  /**
  * CommonAnnotationsEnvsubst specifies whether to apply env variables substitution for annotation values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#common_annotations_envsubst DataK8SArgoprojIoApplicationV1Alpha1Manifest#common_annotations_envsubst}
  */
  readonly commonAnnotationsEnvsubst?: boolean | cdktf.IResolvable;
  /**
  * CommonLabels is a list of additional labels to add to rendered manifests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#common_labels DataK8SArgoprojIoApplicationV1Alpha1Manifest#common_labels}
  */
  readonly commonLabels?: { [key: string]: string };
  /**
  * Components specifies a list of kustomize components to add to the kustomization before building
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#components DataK8SArgoprojIoApplicationV1Alpha1Manifest#components}
  */
  readonly components?: string[];
  /**
  * ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#force_common_annotations DataK8SArgoprojIoApplicationV1Alpha1Manifest#force_common_annotations}
  */
  readonly forceCommonAnnotations?: boolean | cdktf.IResolvable;
  /**
  * ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#force_common_labels DataK8SArgoprojIoApplicationV1Alpha1Manifest#force_common_labels}
  */
  readonly forceCommonLabels?: boolean | cdktf.IResolvable;
  /**
  * Images is a list of Kustomize image override specifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#images DataK8SArgoprojIoApplicationV1Alpha1Manifest#images}
  */
  readonly images?: string[];
  /**
  * LabelWithoutSelector specifies whether to apply common labels to resource selectors or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#label_without_selector DataK8SArgoprojIoApplicationV1Alpha1Manifest#label_without_selector}
  */
  readonly labelWithoutSelector?: boolean | cdktf.IResolvable;
  /**
  * NamePrefix is a prefix appended to resources for Kustomize apps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name_prefix DataK8SArgoprojIoApplicationV1Alpha1Manifest#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * NameSuffix is a suffix appended to resources for Kustomize apps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name_suffix DataK8SArgoprojIoApplicationV1Alpha1Manifest#name_suffix}
  */
  readonly nameSuffix?: string;
  /**
  * Namespace sets the namespace that Kustomize adds to all resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#namespace DataK8SArgoprojIoApplicationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Patches is a list of Kustomize patches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#patches DataK8SArgoprojIoApplicationV1Alpha1Manifest#patches}
  */
  readonly patches?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatches[] | cdktf.IResolvable;
  /**
  * Replicas is a list of Kustomize Replicas override specifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#replicas DataK8SArgoprojIoApplicationV1Alpha1Manifest#replicas}
  */
  readonly replicas?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizeReplicas[] | cdktf.IResolvable;
  /**
  * Version controls which version of Kustomize to use for rendering manifests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#version DataK8SArgoprojIoApplicationV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizeToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonAnnotations),
    common_annotations_envsubst: cdktf.booleanToTerraform(struct!.commonAnnotationsEnvsubst),
    common_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonLabels),
    components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.components),
    force_common_annotations: cdktf.booleanToTerraform(struct!.forceCommonAnnotations),
    force_common_labels: cdktf.booleanToTerraform(struct!.forceCommonLabels),
    images: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.images),
    label_without_selector: cdktf.booleanToTerraform(struct!.labelWithoutSelector),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    name_suffix: cdktf.stringToTerraform(struct!.nameSuffix),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    patches: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatchesToTerraform, false)(struct!.patches),
    replicas: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizeReplicasToTerraform, false)(struct!.replicas),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizeToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    common_annotations_envsubst: {
      value: cdktf.booleanToHclTerraform(struct!.commonAnnotationsEnvsubst),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    common_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    components: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.components),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    force_common_annotations: {
      value: cdktf.booleanToHclTerraform(struct!.forceCommonAnnotations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_common_labels: {
      value: cdktf.booleanToHclTerraform(struct!.forceCommonLabels),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    images: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.images),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    label_without_selector: {
      value: cdktf.booleanToHclTerraform(struct!.labelWithoutSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.namePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_suffix: {
      value: cdktf.stringToHclTerraform(struct!.nameSuffix),
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
    patches: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatchesToHclTerraform, false)(struct!.patches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatchesList",
    },
    replicas: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizeReplicasToHclTerraform, false)(struct!.replicas),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizeReplicasList",
    },
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomize | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonAnnotations = this._commonAnnotations;
    }
    if (this._commonAnnotationsEnvsubst !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonAnnotationsEnvsubst = this._commonAnnotationsEnvsubst;
    }
    if (this._commonLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonLabels = this._commonLabels;
    }
    if (this._components !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components;
    }
    if (this._forceCommonAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceCommonAnnotations = this._forceCommonAnnotations;
    }
    if (this._forceCommonLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceCommonLabels = this._forceCommonLabels;
    }
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._labelWithoutSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelWithoutSelector = this._labelWithoutSelector;
    }
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._nameSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameSuffix = this._nameSuffix;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._patches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patches = this._patches?.internalValue;
    }
    if (this._replicas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomize | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonAnnotations = undefined;
      this._commonAnnotationsEnvsubst = undefined;
      this._commonLabels = undefined;
      this._components = undefined;
      this._forceCommonAnnotations = undefined;
      this._forceCommonLabels = undefined;
      this._images = undefined;
      this._labelWithoutSelector = undefined;
      this._namePrefix = undefined;
      this._nameSuffix = undefined;
      this._namespace = undefined;
      this._patches.internalValue = undefined;
      this._replicas.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonAnnotations = value.commonAnnotations;
      this._commonAnnotationsEnvsubst = value.commonAnnotationsEnvsubst;
      this._commonLabels = value.commonLabels;
      this._components = value.components;
      this._forceCommonAnnotations = value.forceCommonAnnotations;
      this._forceCommonLabels = value.forceCommonLabels;
      this._images = value.images;
      this._labelWithoutSelector = value.labelWithoutSelector;
      this._namePrefix = value.namePrefix;
      this._nameSuffix = value.nameSuffix;
      this._namespace = value.namespace;
      this._patches.internalValue = value.patches;
      this._replicas.internalValue = value.replicas;
      this._version = value.version;
    }
  }

  // common_annotations - computed: false, optional: true, required: false
  private _commonAnnotations?: { [key: string]: string }; 
  public get commonAnnotations() {
    return this.getStringMapAttribute('common_annotations');
  }
  public set commonAnnotations(value: { [key: string]: string }) {
    this._commonAnnotations = value;
  }
  public resetCommonAnnotations() {
    this._commonAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonAnnotationsInput() {
    return this._commonAnnotations;
  }

  // common_annotations_envsubst - computed: false, optional: true, required: false
  private _commonAnnotationsEnvsubst?: boolean | cdktf.IResolvable; 
  public get commonAnnotationsEnvsubst() {
    return this.getBooleanAttribute('common_annotations_envsubst');
  }
  public set commonAnnotationsEnvsubst(value: boolean | cdktf.IResolvable) {
    this._commonAnnotationsEnvsubst = value;
  }
  public resetCommonAnnotationsEnvsubst() {
    this._commonAnnotationsEnvsubst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonAnnotationsEnvsubstInput() {
    return this._commonAnnotationsEnvsubst;
  }

  // common_labels - computed: false, optional: true, required: false
  private _commonLabels?: { [key: string]: string }; 
  public get commonLabels() {
    return this.getStringMapAttribute('common_labels');
  }
  public set commonLabels(value: { [key: string]: string }) {
    this._commonLabels = value;
  }
  public resetCommonLabels() {
    this._commonLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonLabelsInput() {
    return this._commonLabels;
  }

  // components - computed: false, optional: true, required: false
  private _components?: string[]; 
  public get components() {
    return this.getListAttribute('components');
  }
  public set components(value: string[]) {
    this._components = value;
  }
  public resetComponents() {
    this._components = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
  }

  // force_common_annotations - computed: false, optional: true, required: false
  private _forceCommonAnnotations?: boolean | cdktf.IResolvable; 
  public get forceCommonAnnotations() {
    return this.getBooleanAttribute('force_common_annotations');
  }
  public set forceCommonAnnotations(value: boolean | cdktf.IResolvable) {
    this._forceCommonAnnotations = value;
  }
  public resetForceCommonAnnotations() {
    this._forceCommonAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceCommonAnnotationsInput() {
    return this._forceCommonAnnotations;
  }

  // force_common_labels - computed: false, optional: true, required: false
  private _forceCommonLabels?: boolean | cdktf.IResolvable; 
  public get forceCommonLabels() {
    return this.getBooleanAttribute('force_common_labels');
  }
  public set forceCommonLabels(value: boolean | cdktf.IResolvable) {
    this._forceCommonLabels = value;
  }
  public resetForceCommonLabels() {
    this._forceCommonLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceCommonLabelsInput() {
    return this._forceCommonLabels;
  }

  // images - computed: false, optional: true, required: false
  private _images?: string[]; 
  public get images() {
    return this.getListAttribute('images');
  }
  public set images(value: string[]) {
    this._images = value;
  }
  public resetImages() {
    this._images = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
  }

  // label_without_selector - computed: false, optional: true, required: false
  private _labelWithoutSelector?: boolean | cdktf.IResolvable; 
  public get labelWithoutSelector() {
    return this.getBooleanAttribute('label_without_selector');
  }
  public set labelWithoutSelector(value: boolean | cdktf.IResolvable) {
    this._labelWithoutSelector = value;
  }
  public resetLabelWithoutSelector() {
    this._labelWithoutSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelWithoutSelectorInput() {
    return this._labelWithoutSelector;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // name_suffix - computed: false, optional: true, required: false
  private _nameSuffix?: string; 
  public get nameSuffix() {
    return this.getStringAttribute('name_suffix');
  }
  public set nameSuffix(value: string) {
    this._nameSuffix = value;
  }
  public resetNameSuffix() {
    this._nameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameSuffixInput() {
    return this._nameSuffix;
  }

  // namespace - computed: false, optional: true, required: false
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

  // patches - computed: false, optional: true, required: false
  private _patches = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatchesList(this, "patches", false);
  public get patches() {
    return this._patches;
  }
  public putPatches(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizePatches[] | cdktf.IResolvable) {
    this._patches.internalValue = value;
  }
  public resetPatches() {
    this._patches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchesInput() {
    return this._patches.internalValue;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizeReplicasList(this, "replicas", false);
  public get replicas() {
    return this._replicas;
  }
  public putReplicas(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizeReplicas[] | cdktf.IResolvable) {
    this._replicas.internalValue = value;
  }
  public resetReplicas() {
    this._replicas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas.internalValue;
  }

  // version - computed: false, optional: true, required: false
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
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginEnv {
  /**
  * Name is the name of the variable, usually expressed in uppercase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#value DataK8SArgoprojIoApplicationV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginEnvToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginEnvToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginEnv | cdktf.IResolvable): any {
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginEnvOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginParameters {
  /**
  * Array is the value of an array type parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#array DataK8SArgoprojIoApplicationV1Alpha1Manifest#array}
  */
  readonly array?: string[];
  /**
  * Map is the value of a map type parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#map DataK8SArgoprojIoApplicationV1Alpha1Manifest#map}
  */
  readonly map?: { [key: string]: string };
  /**
  * Name is the name identifying a parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * String_ is the value of a string type parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#string DataK8SArgoprojIoApplicationV1Alpha1Manifest#string}
  */
  readonly string?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginParametersToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.array),
    map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.map),
    name: cdktf.stringToTerraform(struct!.name),
    string: cdktf.stringToTerraform(struct!.string),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginParametersToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.array),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.map),
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
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._array !== undefined) {
      hasAnyValues = true;
      internalValueResult.array = this._array;
    }
    if (this._map !== undefined) {
      hasAnyValues = true;
      internalValueResult.map = this._map;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._array = undefined;
      this._map = undefined;
      this._name = undefined;
      this._string = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._array = value.array;
      this._map = value.map;
      this._name = value.name;
      this._string = value.string;
    }
  }

  // array - computed: false, optional: true, required: false
  private _array?: string[]; 
  public get array() {
    return this.getListAttribute('array');
  }
  public set array(value: string[]) {
    this._array = value;
  }
  public resetArray() {
    this._array = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayInput() {
    return this._array;
  }

  // map - computed: false, optional: true, required: false
  private _map?: { [key: string]: string }; 
  public get map() {
    return this.getStringMapAttribute('map');
  }
  public set map(value: { [key: string]: string }) {
    this._map = value;
  }
  public resetMap() {
    this._map = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map;
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

  // string - computed: false, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginParametersList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginParameters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginParametersOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePlugin {
  /**
  * Env is a list of environment variable entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#env DataK8SArgoprojIoApplicationV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginEnv[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#parameters DataK8SArgoprojIoApplicationV1Alpha1Manifest#parameters}
  */
  readonly parameters?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginParameters[] | cdktf.IResolvable;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginEnvToTerraform, false)(struct!.env),
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginParametersToTerraform, false)(struct!.parameters),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginEnvList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env.internalValue = undefined;
      this._name = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env.internalValue = value.env;
      this._name = value.name;
      this._parameters.internalValue = value.parameters;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginParameters[] | cdktf.IResolvable) {
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
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSource {
  /**
  * Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#chart DataK8SArgoprojIoApplicationV1Alpha1Manifest#chart}
  */
  readonly chart?: string;
  /**
  * Directory holds path/directory specific options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#directory DataK8SArgoprojIoApplicationV1Alpha1Manifest#directory}
  */
  readonly directory?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectory;
  /**
  * Helm holds helm specific options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#helm DataK8SArgoprojIoApplicationV1Alpha1Manifest#helm}
  */
  readonly helm?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelm;
  /**
  * Kustomize holds kustomize specific options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#kustomize DataK8SArgoprojIoApplicationV1Alpha1Manifest#kustomize}
  */
  readonly kustomize?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomize;
  /**
  * Path is a directory path within the Git repository, and is only valid for applications sourced from Git.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#path DataK8SArgoprojIoApplicationV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Plugin holds config management plugin specific options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#plugin DataK8SArgoprojIoApplicationV1Alpha1Manifest#plugin}
  */
  readonly plugin?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePlugin;
  /**
  * Ref is reference to another source within sources field. This field will not be used if used with a 'source' tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#ref DataK8SArgoprojIoApplicationV1Alpha1Manifest#ref}
  */
  readonly ref?: string;
  /**
  * RepoURL is the URL to the repository (Git or Helm) that contains the application manifests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#repo_url DataK8SArgoprojIoApplicationV1Alpha1Manifest#repo_url}
  */
  readonly repoUrl: string;
  /**
  * TargetRevision defines the revision of the source to sync the application to. In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of Helm, this is a semver tag for the Chart's version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#target_revision DataK8SArgoprojIoApplicationV1Alpha1Manifest#target_revision}
  */
  readonly targetRevision?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart: cdktf.stringToTerraform(struct!.chart),
    directory: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryToTerraform(struct!.directory),
    helm: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmToTerraform(struct!.helm),
    kustomize: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizeToTerraform(struct!.kustomize),
    path: cdktf.stringToTerraform(struct!.path),
    plugin: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginToTerraform(struct!.plugin),
    ref: cdktf.stringToTerraform(struct!.ref),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
    target_revision: cdktf.stringToTerraform(struct!.targetRevision),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart: {
      value: cdktf.stringToHclTerraform(struct!.chart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryToHclTerraform(struct!.directory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectory",
    },
    helm: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmToHclTerraform(struct!.helm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelm",
    },
    kustomize: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizeToHclTerraform(struct!.kustomize),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomize",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plugin: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginToHclTerraform(struct!.plugin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePlugin",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_url: {
      value: cdktf.stringToHclTerraform(struct!.repoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_revision: {
      value: cdktf.stringToHclTerraform(struct!.targetRevision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chart !== undefined) {
      hasAnyValues = true;
      internalValueResult.chart = this._chart;
    }
    if (this._directory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory?.internalValue;
    }
    if (this._helm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helm = this._helm?.internalValue;
    }
    if (this._kustomize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kustomize = this._kustomize?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._plugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugin = this._plugin?.internalValue;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._repoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoUrl = this._repoUrl;
    }
    if (this._targetRevision !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRevision = this._targetRevision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chart = undefined;
      this._directory.internalValue = undefined;
      this._helm.internalValue = undefined;
      this._kustomize.internalValue = undefined;
      this._path = undefined;
      this._plugin.internalValue = undefined;
      this._ref = undefined;
      this._repoUrl = undefined;
      this._targetRevision = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chart = value.chart;
      this._directory.internalValue = value.directory;
      this._helm.internalValue = value.helm;
      this._kustomize.internalValue = value.kustomize;
      this._path = value.path;
      this._plugin.internalValue = value.plugin;
      this._ref = value.ref;
      this._repoUrl = value.repoUrl;
      this._targetRevision = value.targetRevision;
    }
  }

  // chart - computed: false, optional: true, required: false
  private _chart?: string; 
  public get chart() {
    return this.getStringAttribute('chart');
  }
  public set chart(value: string) {
    this._chart = value;
  }
  public resetChart() {
    this._chart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart;
  }

  // directory - computed: false, optional: true, required: false
  private _directory = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceDirectory) {
    this._directory.internalValue = value;
  }
  public resetDirectory() {
    this._directory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory.internalValue;
  }

  // helm - computed: false, optional: true, required: false
  private _helm = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelmOutputReference(this, "helm");
  public get helm() {
    return this._helm;
  }
  public putHelm(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceHelm) {
    this._helm.internalValue = value;
  }
  public resetHelm() {
    this._helm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmInput() {
    return this._helm.internalValue;
  }

  // kustomize - computed: false, optional: true, required: false
  private _kustomize = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomizeOutputReference(this, "kustomize");
  public get kustomize() {
    return this._kustomize;
  }
  public putKustomize(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceKustomize) {
    this._kustomize.internalValue = value;
  }
  public resetKustomize() {
    this._kustomize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kustomizeInput() {
    return this._kustomize.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // plugin - computed: false, optional: true, required: false
  private _plugin = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePluginOutputReference(this, "plugin");
  public get plugin() {
    return this._plugin;
  }
  public putPlugin(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcePlugin) {
    this._plugin.internalValue = value;
  }
  public resetPlugin() {
    this._plugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin.internalValue;
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // repo_url - computed: false, optional: false, required: true
  private _repoUrl?: string; 
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
  public set repoUrl(value: string) {
    this._repoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoUrlInput() {
    return this._repoUrl;
  }

  // target_revision - computed: false, optional: true, required: false
  private _targetRevision?: string; 
  public get targetRevision() {
    return this.getStringAttribute('target_revision');
  }
  public set targetRevision(value: string) {
    this._targetRevision = value;
  }
  public resetTargetRevision() {
    this._targetRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRevisionInput() {
    return this._targetRevision;
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetExtVars {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#code DataK8SArgoprojIoApplicationV1Alpha1Manifest#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#value DataK8SArgoprojIoApplicationV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetExtVarsToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetExtVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.booleanToTerraform(struct!.code),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetExtVarsToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetExtVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.booleanToHclTerraform(struct!.code),
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetExtVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetExtVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetExtVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: boolean | cdktf.IResolvable; 
  public get code() {
    return this.getBooleanAttribute('code');
  }
  public set code(value: boolean | cdktf.IResolvable) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetExtVarsList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetExtVars[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetExtVarsOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetExtVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetTlas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#code DataK8SArgoprojIoApplicationV1Alpha1Manifest#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#value DataK8SArgoprojIoApplicationV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetTlasToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetTlas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.booleanToTerraform(struct!.code),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetTlasToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetTlas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.booleanToHclTerraform(struct!.code),
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetTlasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetTlas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetTlas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: boolean | cdktf.IResolvable; 
  public get code() {
    return this.getBooleanAttribute('code');
  }
  public set code(value: boolean | cdktf.IResolvable) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetTlasList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetTlas[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetTlasOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetTlasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnet {
  /**
  * ExtVars is a list of Jsonnet External Variables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#ext_vars DataK8SArgoprojIoApplicationV1Alpha1Manifest#ext_vars}
  */
  readonly extVars?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetExtVars[] | cdktf.IResolvable;
  /**
  * Additional library search dirs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#libs DataK8SArgoprojIoApplicationV1Alpha1Manifest#libs}
  */
  readonly libs?: string[];
  /**
  * TLAS is a list of Jsonnet Top-level Arguments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#tlas DataK8SArgoprojIoApplicationV1Alpha1Manifest#tlas}
  */
  readonly tlas?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetTlas[] | cdktf.IResolvable;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_vars: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetExtVarsToTerraform, false)(struct!.extVars),
    libs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.libs),
    tlas: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetTlasToTerraform, false)(struct!.tlas),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_vars: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetExtVarsToHclTerraform, false)(struct!.extVars),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetExtVarsList",
    },
    libs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.libs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tlas: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetTlasToHclTerraform, false)(struct!.tlas),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetTlasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extVars = this._extVars?.internalValue;
    }
    if (this._libs !== undefined) {
      hasAnyValues = true;
      internalValueResult.libs = this._libs;
    }
    if (this._tlas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlas = this._tlas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extVars.internalValue = undefined;
      this._libs = undefined;
      this._tlas.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extVars.internalValue = value.extVars;
      this._libs = value.libs;
      this._tlas.internalValue = value.tlas;
    }
  }

  // ext_vars - computed: false, optional: true, required: false
  private _extVars = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetExtVarsList(this, "ext_vars", false);
  public get extVars() {
    return this._extVars;
  }
  public putExtVars(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetExtVars[] | cdktf.IResolvable) {
    this._extVars.internalValue = value;
  }
  public resetExtVars() {
    this._extVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extVarsInput() {
    return this._extVars.internalValue;
  }

  // libs - computed: false, optional: true, required: false
  private _libs?: string[]; 
  public get libs() {
    return this.getListAttribute('libs');
  }
  public set libs(value: string[]) {
    this._libs = value;
  }
  public resetLibs() {
    this._libs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libsInput() {
    return this._libs;
  }

  // tlas - computed: false, optional: true, required: false
  private _tlas = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetTlasList(this, "tlas", false);
  public get tlas() {
    return this._tlas;
  }
  public putTlas(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetTlas[] | cdktf.IResolvable) {
    this._tlas.internalValue = value;
  }
  public resetTlas() {
    this._tlas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlasInput() {
    return this._tlas.internalValue;
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectory {
  /**
  * Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#exclude DataK8SArgoprojIoApplicationV1Alpha1Manifest#exclude}
  */
  readonly exclude?: string;
  /**
  * Include contains a glob pattern to match paths against that should be explicitly included during manifest generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#include DataK8SArgoprojIoApplicationV1Alpha1Manifest#include}
  */
  readonly include?: string;
  /**
  * Jsonnet holds options specific to Jsonnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#jsonnet DataK8SArgoprojIoApplicationV1Alpha1Manifest#jsonnet}
  */
  readonly jsonnet?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnet;
  /**
  * Recurse specifies whether to scan a directory recursively for manifests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#recurse DataK8SArgoprojIoApplicationV1Alpha1Manifest#recurse}
  */
  readonly recurse?: boolean | cdktf.IResolvable;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.stringToTerraform(struct!.exclude),
    include: cdktf.stringToTerraform(struct!.include),
    jsonnet: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetToTerraform(struct!.jsonnet),
    recurse: cdktf.booleanToTerraform(struct!.recurse),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.stringToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jsonnet: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetToHclTerraform(struct!.jsonnet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnet",
    },
    recurse: {
      value: cdktf.booleanToHclTerraform(struct!.recurse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._jsonnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonnet = this._jsonnet?.internalValue;
    }
    if (this._recurse !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurse = this._recurse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._include = undefined;
      this._jsonnet.internalValue = undefined;
      this._recurse = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._include = value.include;
      this._jsonnet.internalValue = value.jsonnet;
      this._recurse = value.recurse;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string; 
  public get exclude() {
    return this.getStringAttribute('exclude');
  }
  public set exclude(value: string) {
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
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // jsonnet - computed: false, optional: true, required: false
  private _jsonnet = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnetOutputReference(this, "jsonnet");
  public get jsonnet() {
    return this._jsonnet;
  }
  public putJsonnet(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryJsonnet) {
    this._jsonnet.internalValue = value;
  }
  public resetJsonnet() {
    this._jsonnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonnetInput() {
    return this._jsonnet.internalValue;
  }

  // recurse - computed: false, optional: true, required: false
  private _recurse?: boolean | cdktf.IResolvable; 
  public get recurse() {
    return this.getBooleanAttribute('recurse');
  }
  public set recurse(value: boolean | cdktf.IResolvable) {
    this._recurse = value;
  }
  public resetRecurse() {
    this._recurse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurseInput() {
    return this._recurse;
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmFileParameters {
  /**
  * Name is the name of the Helm parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Path is the path to the file containing the values for the Helm parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#path DataK8SArgoprojIoApplicationV1Alpha1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmFileParametersToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmFileParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmFileParametersToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmFileParameters | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmFileParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmFileParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmFileParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmFileParametersList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmFileParameters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmFileParametersOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmFileParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmParameters {
  /**
  * ForceString determines whether to tell Helm to interpret booleans and numbers as strings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#force_string DataK8SArgoprojIoApplicationV1Alpha1Manifest#force_string}
  */
  readonly forceString?: boolean | cdktf.IResolvable;
  /**
  * Name is the name of the Helm parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Value is the value for the Helm parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#value DataK8SArgoprojIoApplicationV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmParametersToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_string: cdktf.booleanToTerraform(struct!.forceString),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmParametersToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_string: {
      value: cdktf.booleanToHclTerraform(struct!.forceString),
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceString !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceString = this._forceString;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceString = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forceString = value.forceString;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // force_string - computed: false, optional: true, required: false
  private _forceString?: boolean | cdktf.IResolvable; 
  public get forceString() {
    return this.getBooleanAttribute('force_string');
  }
  public set forceString(value: boolean | cdktf.IResolvable) {
    this._forceString = value;
  }
  public resetForceString() {
    this._forceString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceStringInput() {
    return this._forceString;
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmParametersList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmParameters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmParametersOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelm {
  /**
  * FileParameters are file parameters to the helm template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#file_parameters DataK8SArgoprojIoApplicationV1Alpha1Manifest#file_parameters}
  */
  readonly fileParameters?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmFileParameters[] | cdktf.IResolvable;
  /**
  * IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#ignore_missing_value_files DataK8SArgoprojIoApplicationV1Alpha1Manifest#ignore_missing_value_files}
  */
  readonly ignoreMissingValueFiles?: boolean | cdktf.IResolvable;
  /**
  * Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#parameters DataK8SArgoprojIoApplicationV1Alpha1Manifest#parameters}
  */
  readonly parameters?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmParameters[] | cdktf.IResolvable;
  /**
  * PassCredentials pass credentials to all domains (Helm's --pass-credentials)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#pass_credentials DataK8SArgoprojIoApplicationV1Alpha1Manifest#pass_credentials}
  */
  readonly passCredentials?: boolean | cdktf.IResolvable;
  /**
  * ReleaseName is the Helm release name to use. If omitted it will use the application name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#release_name DataK8SArgoprojIoApplicationV1Alpha1Manifest#release_name}
  */
  readonly releaseName?: string;
  /**
  * SkipCrds skips custom resource definition installation step (Helm's --skip-crds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#skip_crds DataK8SArgoprojIoApplicationV1Alpha1Manifest#skip_crds}
  */
  readonly skipCrds?: boolean | cdktf.IResolvable;
  /**
  * ValuesFiles is a list of Helm value files to use when generating a template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#value_files DataK8SArgoprojIoApplicationV1Alpha1Manifest#value_files}
  */
  readonly valueFiles?: string[];
  /**
  * Values specifies Helm values to be passed to helm template, typically defined as a block. ValuesObject takes precedence over Values, so use one or the other.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#values DataK8SArgoprojIoApplicationV1Alpha1Manifest#values}
  */
  readonly values?: string;
  /**
  * ValuesObject specifies Helm values to be passed to helm template, defined as a map. This takes precedence over Values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#values_object DataK8SArgoprojIoApplicationV1Alpha1Manifest#values_object}
  */
  readonly valuesObject?: { [key: string]: string };
  /**
  * Version is the Helm version to use for templating ('3')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#version DataK8SArgoprojIoApplicationV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_parameters: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmFileParametersToTerraform, false)(struct!.fileParameters),
    ignore_missing_value_files: cdktf.booleanToTerraform(struct!.ignoreMissingValueFiles),
    parameters: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmParametersToTerraform, false)(struct!.parameters),
    pass_credentials: cdktf.booleanToTerraform(struct!.passCredentials),
    release_name: cdktf.stringToTerraform(struct!.releaseName),
    skip_crds: cdktf.booleanToTerraform(struct!.skipCrds),
    value_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valueFiles),
    values: cdktf.stringToTerraform(struct!.values),
    values_object: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.valuesObject),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_parameters: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmFileParametersToHclTerraform, false)(struct!.fileParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmFileParametersList",
    },
    ignore_missing_value_files: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMissingValueFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parameters: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmParametersList",
    },
    pass_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.passCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    release_name: {
      value: cdktf.stringToHclTerraform(struct!.releaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_crds: {
      value: cdktf.booleanToHclTerraform(struct!.skipCrds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.valueFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.stringToHclTerraform(struct!.values),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values_object: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.valuesObject),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileParameters = this._fileParameters?.internalValue;
    }
    if (this._ignoreMissingValueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMissingValueFiles = this._ignoreMissingValueFiles;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._passCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.passCredentials = this._passCredentials;
    }
    if (this._releaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseName = this._releaseName;
    }
    if (this._skipCrds !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipCrds = this._skipCrds;
    }
    if (this._valueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFiles = this._valueFiles;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._valuesObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesObject = this._valuesObject;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileParameters.internalValue = undefined;
      this._ignoreMissingValueFiles = undefined;
      this._parameters.internalValue = undefined;
      this._passCredentials = undefined;
      this._releaseName = undefined;
      this._skipCrds = undefined;
      this._valueFiles = undefined;
      this._values = undefined;
      this._valuesObject = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileParameters.internalValue = value.fileParameters;
      this._ignoreMissingValueFiles = value.ignoreMissingValueFiles;
      this._parameters.internalValue = value.parameters;
      this._passCredentials = value.passCredentials;
      this._releaseName = value.releaseName;
      this._skipCrds = value.skipCrds;
      this._valueFiles = value.valueFiles;
      this._values = value.values;
      this._valuesObject = value.valuesObject;
      this._version = value.version;
    }
  }

  // file_parameters - computed: false, optional: true, required: false
  private _fileParameters = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmFileParametersList(this, "file_parameters", false);
  public get fileParameters() {
    return this._fileParameters;
  }
  public putFileParameters(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmFileParameters[] | cdktf.IResolvable) {
    this._fileParameters.internalValue = value;
  }
  public resetFileParameters() {
    this._fileParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileParametersInput() {
    return this._fileParameters.internalValue;
  }

  // ignore_missing_value_files - computed: false, optional: true, required: false
  private _ignoreMissingValueFiles?: boolean | cdktf.IResolvable; 
  public get ignoreMissingValueFiles() {
    return this.getBooleanAttribute('ignore_missing_value_files');
  }
  public set ignoreMissingValueFiles(value: boolean | cdktf.IResolvable) {
    this._ignoreMissingValueFiles = value;
  }
  public resetIgnoreMissingValueFiles() {
    this._ignoreMissingValueFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingValueFilesInput() {
    return this._ignoreMissingValueFiles;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // pass_credentials - computed: false, optional: true, required: false
  private _passCredentials?: boolean | cdktf.IResolvable; 
  public get passCredentials() {
    return this.getBooleanAttribute('pass_credentials');
  }
  public set passCredentials(value: boolean | cdktf.IResolvable) {
    this._passCredentials = value;
  }
  public resetPassCredentials() {
    this._passCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passCredentialsInput() {
    return this._passCredentials;
  }

  // release_name - computed: false, optional: true, required: false
  private _releaseName?: string; 
  public get releaseName() {
    return this.getStringAttribute('release_name');
  }
  public set releaseName(value: string) {
    this._releaseName = value;
  }
  public resetReleaseName() {
    this._releaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNameInput() {
    return this._releaseName;
  }

  // skip_crds - computed: false, optional: true, required: false
  private _skipCrds?: boolean | cdktf.IResolvable; 
  public get skipCrds() {
    return this.getBooleanAttribute('skip_crds');
  }
  public set skipCrds(value: boolean | cdktf.IResolvable) {
    this._skipCrds = value;
  }
  public resetSkipCrds() {
    this._skipCrds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCrdsInput() {
    return this._skipCrds;
  }

  // value_files - computed: false, optional: true, required: false
  private _valueFiles?: string[]; 
  public get valueFiles() {
    return this.getListAttribute('value_files');
  }
  public set valueFiles(value: string[]) {
    this._valueFiles = value;
  }
  public resetValueFiles() {
    this._valueFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFilesInput() {
    return this._valueFiles;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // values_object - computed: false, optional: true, required: false
  private _valuesObject?: { [key: string]: string }; 
  public get valuesObject() {
    return this.getStringMapAttribute('values_object');
  }
  public set valuesObject(value: { [key: string]: string }) {
    this._valuesObject = value;
  }
  public resetValuesObject() {
    this._valuesObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesObjectInput() {
    return this._valuesObject;
  }

  // version - computed: false, optional: true, required: false
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
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatchesTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#annotation_selector DataK8SArgoprojIoApplicationV1Alpha1Manifest#annotation_selector}
  */
  readonly annotationSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#group DataK8SArgoprojIoApplicationV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#kind DataK8SArgoprojIoApplicationV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#label_selector DataK8SArgoprojIoApplicationV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#namespace DataK8SArgoprojIoApplicationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#version DataK8SArgoprojIoApplicationV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatchesTargetToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatchesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation_selector: cdktf.stringToTerraform(struct!.annotationSelector),
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    label_selector: cdktf.stringToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatchesTargetToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatchesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation_selector: {
      value: cdktf.stringToHclTerraform(struct!.annotationSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: cdktf.stringToHclTerraform(struct!.labelSelector),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatchesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatchesTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationSelector = this._annotationSelector;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatchesTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotationSelector = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._labelSelector = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotationSelector = value.annotationSelector;
      this._group = value.group;
      this._kind = value.kind;
      this._labelSelector = value.labelSelector;
      this._name = value.name;
      this._namespace = value.namespace;
      this._version = value.version;
    }
  }

  // annotation_selector - computed: false, optional: true, required: false
  private _annotationSelector?: string; 
  public get annotationSelector() {
    return this.getStringAttribute('annotation_selector');
  }
  public set annotationSelector(value: string) {
    this._annotationSelector = value;
  }
  public resetAnnotationSelector() {
    this._annotationSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationSelectorInput() {
    return this._annotationSelector;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector?: string; 
  public get labelSelector() {
    return this.getStringAttribute('label_selector');
  }
  public set labelSelector(value: string) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
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

  // namespace - computed: false, optional: true, required: false
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

  // version - computed: false, optional: true, required: false
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
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatches {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#options DataK8SArgoprojIoApplicationV1Alpha1Manifest#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#patch DataK8SArgoprojIoApplicationV1Alpha1Manifest#patch}
  */
  readonly patch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#path DataK8SArgoprojIoApplicationV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#target DataK8SArgoprojIoApplicationV1Alpha1Manifest#target}
  */
  readonly target?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatchesTarget;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatchesToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    patch: cdktf.stringToTerraform(struct!.patch),
    path: cdktf.stringToTerraform(struct!.path),
    target: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatchesTargetToTerraform(struct!.target),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatchesToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    patch: {
      value: cdktf.stringToHclTerraform(struct!.patch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatchesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatchesTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._patch !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._options = undefined;
      this._patch = undefined;
      this._path = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._options = value.options;
      this._patch = value.patch;
      this._path = value.path;
      this._target.internalValue = value.target;
    }
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // patch - computed: false, optional: true, required: false
  private _patch?: string; 
  public get patch() {
    return this.getStringAttribute('patch');
  }
  public set patch(value: string) {
    this._patch = value;
  }
  public resetPatch() {
    this._patch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // target - computed: false, optional: true, required: false
  private _target = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatchesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatchesTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatchesOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizeReplicas {
  /**
  * Number of replicas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#count DataK8SArgoprojIoApplicationV1Alpha1Manifest#count}
  */
  readonly count: string;
  /**
  * Name of Deployment or StatefulSet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizeReplicasToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizeReplicas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.stringToTerraform(struct!.count),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizeReplicasToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizeReplicas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizeReplicasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizeReplicas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizeReplicas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._name = value.name;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizeReplicasList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizeReplicas[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizeReplicasOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizeReplicasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomize {
  /**
  * CommonAnnotations is a list of additional annotations to add to rendered manifests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#common_annotations DataK8SArgoprojIoApplicationV1Alpha1Manifest#common_annotations}
  */
  readonly commonAnnotations?: { [key: string]: string };
  /**
  * CommonAnnotationsEnvsubst specifies whether to apply env variables substitution for annotation values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#common_annotations_envsubst DataK8SArgoprojIoApplicationV1Alpha1Manifest#common_annotations_envsubst}
  */
  readonly commonAnnotationsEnvsubst?: boolean | cdktf.IResolvable;
  /**
  * CommonLabels is a list of additional labels to add to rendered manifests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#common_labels DataK8SArgoprojIoApplicationV1Alpha1Manifest#common_labels}
  */
  readonly commonLabels?: { [key: string]: string };
  /**
  * Components specifies a list of kustomize components to add to the kustomization before building
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#components DataK8SArgoprojIoApplicationV1Alpha1Manifest#components}
  */
  readonly components?: string[];
  /**
  * ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#force_common_annotations DataK8SArgoprojIoApplicationV1Alpha1Manifest#force_common_annotations}
  */
  readonly forceCommonAnnotations?: boolean | cdktf.IResolvable;
  /**
  * ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#force_common_labels DataK8SArgoprojIoApplicationV1Alpha1Manifest#force_common_labels}
  */
  readonly forceCommonLabels?: boolean | cdktf.IResolvable;
  /**
  * Images is a list of Kustomize image override specifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#images DataK8SArgoprojIoApplicationV1Alpha1Manifest#images}
  */
  readonly images?: string[];
  /**
  * LabelWithoutSelector specifies whether to apply common labels to resource selectors or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#label_without_selector DataK8SArgoprojIoApplicationV1Alpha1Manifest#label_without_selector}
  */
  readonly labelWithoutSelector?: boolean | cdktf.IResolvable;
  /**
  * NamePrefix is a prefix appended to resources for Kustomize apps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name_prefix DataK8SArgoprojIoApplicationV1Alpha1Manifest#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * NameSuffix is a suffix appended to resources for Kustomize apps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name_suffix DataK8SArgoprojIoApplicationV1Alpha1Manifest#name_suffix}
  */
  readonly nameSuffix?: string;
  /**
  * Namespace sets the namespace that Kustomize adds to all resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#namespace DataK8SArgoprojIoApplicationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Patches is a list of Kustomize patches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#patches DataK8SArgoprojIoApplicationV1Alpha1Manifest#patches}
  */
  readonly patches?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatches[] | cdktf.IResolvable;
  /**
  * Replicas is a list of Kustomize Replicas override specifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#replicas DataK8SArgoprojIoApplicationV1Alpha1Manifest#replicas}
  */
  readonly replicas?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizeReplicas[] | cdktf.IResolvable;
  /**
  * Version controls which version of Kustomize to use for rendering manifests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#version DataK8SArgoprojIoApplicationV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizeToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonAnnotations),
    common_annotations_envsubst: cdktf.booleanToTerraform(struct!.commonAnnotationsEnvsubst),
    common_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonLabels),
    components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.components),
    force_common_annotations: cdktf.booleanToTerraform(struct!.forceCommonAnnotations),
    force_common_labels: cdktf.booleanToTerraform(struct!.forceCommonLabels),
    images: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.images),
    label_without_selector: cdktf.booleanToTerraform(struct!.labelWithoutSelector),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    name_suffix: cdktf.stringToTerraform(struct!.nameSuffix),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    patches: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatchesToTerraform, false)(struct!.patches),
    replicas: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizeReplicasToTerraform, false)(struct!.replicas),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizeToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    common_annotations_envsubst: {
      value: cdktf.booleanToHclTerraform(struct!.commonAnnotationsEnvsubst),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    common_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    components: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.components),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    force_common_annotations: {
      value: cdktf.booleanToHclTerraform(struct!.forceCommonAnnotations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_common_labels: {
      value: cdktf.booleanToHclTerraform(struct!.forceCommonLabels),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    images: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.images),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    label_without_selector: {
      value: cdktf.booleanToHclTerraform(struct!.labelWithoutSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.namePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_suffix: {
      value: cdktf.stringToHclTerraform(struct!.nameSuffix),
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
    patches: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatchesToHclTerraform, false)(struct!.patches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatchesList",
    },
    replicas: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizeReplicasToHclTerraform, false)(struct!.replicas),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizeReplicasList",
    },
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomize | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonAnnotations = this._commonAnnotations;
    }
    if (this._commonAnnotationsEnvsubst !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonAnnotationsEnvsubst = this._commonAnnotationsEnvsubst;
    }
    if (this._commonLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonLabels = this._commonLabels;
    }
    if (this._components !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components;
    }
    if (this._forceCommonAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceCommonAnnotations = this._forceCommonAnnotations;
    }
    if (this._forceCommonLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceCommonLabels = this._forceCommonLabels;
    }
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._labelWithoutSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelWithoutSelector = this._labelWithoutSelector;
    }
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._nameSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameSuffix = this._nameSuffix;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._patches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patches = this._patches?.internalValue;
    }
    if (this._replicas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomize | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonAnnotations = undefined;
      this._commonAnnotationsEnvsubst = undefined;
      this._commonLabels = undefined;
      this._components = undefined;
      this._forceCommonAnnotations = undefined;
      this._forceCommonLabels = undefined;
      this._images = undefined;
      this._labelWithoutSelector = undefined;
      this._namePrefix = undefined;
      this._nameSuffix = undefined;
      this._namespace = undefined;
      this._patches.internalValue = undefined;
      this._replicas.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonAnnotations = value.commonAnnotations;
      this._commonAnnotationsEnvsubst = value.commonAnnotationsEnvsubst;
      this._commonLabels = value.commonLabels;
      this._components = value.components;
      this._forceCommonAnnotations = value.forceCommonAnnotations;
      this._forceCommonLabels = value.forceCommonLabels;
      this._images = value.images;
      this._labelWithoutSelector = value.labelWithoutSelector;
      this._namePrefix = value.namePrefix;
      this._nameSuffix = value.nameSuffix;
      this._namespace = value.namespace;
      this._patches.internalValue = value.patches;
      this._replicas.internalValue = value.replicas;
      this._version = value.version;
    }
  }

  // common_annotations - computed: false, optional: true, required: false
  private _commonAnnotations?: { [key: string]: string }; 
  public get commonAnnotations() {
    return this.getStringMapAttribute('common_annotations');
  }
  public set commonAnnotations(value: { [key: string]: string }) {
    this._commonAnnotations = value;
  }
  public resetCommonAnnotations() {
    this._commonAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonAnnotationsInput() {
    return this._commonAnnotations;
  }

  // common_annotations_envsubst - computed: false, optional: true, required: false
  private _commonAnnotationsEnvsubst?: boolean | cdktf.IResolvable; 
  public get commonAnnotationsEnvsubst() {
    return this.getBooleanAttribute('common_annotations_envsubst');
  }
  public set commonAnnotationsEnvsubst(value: boolean | cdktf.IResolvable) {
    this._commonAnnotationsEnvsubst = value;
  }
  public resetCommonAnnotationsEnvsubst() {
    this._commonAnnotationsEnvsubst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonAnnotationsEnvsubstInput() {
    return this._commonAnnotationsEnvsubst;
  }

  // common_labels - computed: false, optional: true, required: false
  private _commonLabels?: { [key: string]: string }; 
  public get commonLabels() {
    return this.getStringMapAttribute('common_labels');
  }
  public set commonLabels(value: { [key: string]: string }) {
    this._commonLabels = value;
  }
  public resetCommonLabels() {
    this._commonLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonLabelsInput() {
    return this._commonLabels;
  }

  // components - computed: false, optional: true, required: false
  private _components?: string[]; 
  public get components() {
    return this.getListAttribute('components');
  }
  public set components(value: string[]) {
    this._components = value;
  }
  public resetComponents() {
    this._components = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
  }

  // force_common_annotations - computed: false, optional: true, required: false
  private _forceCommonAnnotations?: boolean | cdktf.IResolvable; 
  public get forceCommonAnnotations() {
    return this.getBooleanAttribute('force_common_annotations');
  }
  public set forceCommonAnnotations(value: boolean | cdktf.IResolvable) {
    this._forceCommonAnnotations = value;
  }
  public resetForceCommonAnnotations() {
    this._forceCommonAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceCommonAnnotationsInput() {
    return this._forceCommonAnnotations;
  }

  // force_common_labels - computed: false, optional: true, required: false
  private _forceCommonLabels?: boolean | cdktf.IResolvable; 
  public get forceCommonLabels() {
    return this.getBooleanAttribute('force_common_labels');
  }
  public set forceCommonLabels(value: boolean | cdktf.IResolvable) {
    this._forceCommonLabels = value;
  }
  public resetForceCommonLabels() {
    this._forceCommonLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceCommonLabelsInput() {
    return this._forceCommonLabels;
  }

  // images - computed: false, optional: true, required: false
  private _images?: string[]; 
  public get images() {
    return this.getListAttribute('images');
  }
  public set images(value: string[]) {
    this._images = value;
  }
  public resetImages() {
    this._images = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
  }

  // label_without_selector - computed: false, optional: true, required: false
  private _labelWithoutSelector?: boolean | cdktf.IResolvable; 
  public get labelWithoutSelector() {
    return this.getBooleanAttribute('label_without_selector');
  }
  public set labelWithoutSelector(value: boolean | cdktf.IResolvable) {
    this._labelWithoutSelector = value;
  }
  public resetLabelWithoutSelector() {
    this._labelWithoutSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelWithoutSelectorInput() {
    return this._labelWithoutSelector;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // name_suffix - computed: false, optional: true, required: false
  private _nameSuffix?: string; 
  public get nameSuffix() {
    return this.getStringAttribute('name_suffix');
  }
  public set nameSuffix(value: string) {
    this._nameSuffix = value;
  }
  public resetNameSuffix() {
    this._nameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameSuffixInput() {
    return this._nameSuffix;
  }

  // namespace - computed: false, optional: true, required: false
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

  // patches - computed: false, optional: true, required: false
  private _patches = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatchesList(this, "patches", false);
  public get patches() {
    return this._patches;
  }
  public putPatches(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizePatches[] | cdktf.IResolvable) {
    this._patches.internalValue = value;
  }
  public resetPatches() {
    this._patches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchesInput() {
    return this._patches.internalValue;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizeReplicasList(this, "replicas", false);
  public get replicas() {
    return this._replicas;
  }
  public putReplicas(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizeReplicas[] | cdktf.IResolvable) {
    this._replicas.internalValue = value;
  }
  public resetReplicas() {
    this._replicas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas.internalValue;
  }

  // version - computed: false, optional: true, required: false
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
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginEnv {
  /**
  * Name is the name of the variable, usually expressed in uppercase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#value DataK8SArgoprojIoApplicationV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginEnvToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginEnvToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginEnv | cdktf.IResolvable): any {
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginEnvOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginParameters {
  /**
  * Array is the value of an array type parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#array DataK8SArgoprojIoApplicationV1Alpha1Manifest#array}
  */
  readonly array?: string[];
  /**
  * Map is the value of a map type parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#map DataK8SArgoprojIoApplicationV1Alpha1Manifest#map}
  */
  readonly map?: { [key: string]: string };
  /**
  * Name is the name identifying a parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * String_ is the value of a string type parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#string DataK8SArgoprojIoApplicationV1Alpha1Manifest#string}
  */
  readonly string?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginParametersToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.array),
    map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.map),
    name: cdktf.stringToTerraform(struct!.name),
    string: cdktf.stringToTerraform(struct!.string),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginParametersToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.array),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.map),
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
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._array !== undefined) {
      hasAnyValues = true;
      internalValueResult.array = this._array;
    }
    if (this._map !== undefined) {
      hasAnyValues = true;
      internalValueResult.map = this._map;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._array = undefined;
      this._map = undefined;
      this._name = undefined;
      this._string = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._array = value.array;
      this._map = value.map;
      this._name = value.name;
      this._string = value.string;
    }
  }

  // array - computed: false, optional: true, required: false
  private _array?: string[]; 
  public get array() {
    return this.getListAttribute('array');
  }
  public set array(value: string[]) {
    this._array = value;
  }
  public resetArray() {
    this._array = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayInput() {
    return this._array;
  }

  // map - computed: false, optional: true, required: false
  private _map?: { [key: string]: string }; 
  public get map() {
    return this.getStringMapAttribute('map');
  }
  public set map(value: { [key: string]: string }) {
    this._map = value;
  }
  public resetMap() {
    this._map = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map;
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

  // string - computed: false, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginParametersList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginParameters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginParametersOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPlugin {
  /**
  * Env is a list of environment variable entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#env DataK8SArgoprojIoApplicationV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginEnv[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#parameters DataK8SArgoprojIoApplicationV1Alpha1Manifest#parameters}
  */
  readonly parameters?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginParameters[] | cdktf.IResolvable;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginEnvToTerraform, false)(struct!.env),
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginParametersToTerraform, false)(struct!.parameters),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginEnvList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env.internalValue = undefined;
      this._name = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env.internalValue = value.env;
      this._name = value.name;
      this._parameters.internalValue = value.parameters;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginParameters[] | cdktf.IResolvable) {
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
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSources {
  /**
  * Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#chart DataK8SArgoprojIoApplicationV1Alpha1Manifest#chart}
  */
  readonly chart?: string;
  /**
  * Directory holds path/directory specific options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#directory DataK8SArgoprojIoApplicationV1Alpha1Manifest#directory}
  */
  readonly directory?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectory;
  /**
  * Helm holds helm specific options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#helm DataK8SArgoprojIoApplicationV1Alpha1Manifest#helm}
  */
  readonly helm?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelm;
  /**
  * Kustomize holds kustomize specific options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#kustomize DataK8SArgoprojIoApplicationV1Alpha1Manifest#kustomize}
  */
  readonly kustomize?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomize;
  /**
  * Path is a directory path within the Git repository, and is only valid for applications sourced from Git.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#path DataK8SArgoprojIoApplicationV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Plugin holds config management plugin specific options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#plugin DataK8SArgoprojIoApplicationV1Alpha1Manifest#plugin}
  */
  readonly plugin?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPlugin;
  /**
  * Ref is reference to another source within sources field. This field will not be used if used with a 'source' tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#ref DataK8SArgoprojIoApplicationV1Alpha1Manifest#ref}
  */
  readonly ref?: string;
  /**
  * RepoURL is the URL to the repository (Git or Helm) that contains the application manifests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#repo_url DataK8SArgoprojIoApplicationV1Alpha1Manifest#repo_url}
  */
  readonly repoUrl: string;
  /**
  * TargetRevision defines the revision of the source to sync the application to. In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of Helm, this is a semver tag for the Chart's version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#target_revision DataK8SArgoprojIoApplicationV1Alpha1Manifest#target_revision}
  */
  readonly targetRevision?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart: cdktf.stringToTerraform(struct!.chart),
    directory: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryToTerraform(struct!.directory),
    helm: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmToTerraform(struct!.helm),
    kustomize: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizeToTerraform(struct!.kustomize),
    path: cdktf.stringToTerraform(struct!.path),
    plugin: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginToTerraform(struct!.plugin),
    ref: cdktf.stringToTerraform(struct!.ref),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
    target_revision: cdktf.stringToTerraform(struct!.targetRevision),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart: {
      value: cdktf.stringToHclTerraform(struct!.chart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryToHclTerraform(struct!.directory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectory",
    },
    helm: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmToHclTerraform(struct!.helm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelm",
    },
    kustomize: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizeToHclTerraform(struct!.kustomize),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomize",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plugin: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginToHclTerraform(struct!.plugin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPlugin",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_url: {
      value: cdktf.stringToHclTerraform(struct!.repoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_revision: {
      value: cdktf.stringToHclTerraform(struct!.targetRevision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chart !== undefined) {
      hasAnyValues = true;
      internalValueResult.chart = this._chart;
    }
    if (this._directory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory?.internalValue;
    }
    if (this._helm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helm = this._helm?.internalValue;
    }
    if (this._kustomize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kustomize = this._kustomize?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._plugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugin = this._plugin?.internalValue;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._repoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoUrl = this._repoUrl;
    }
    if (this._targetRevision !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRevision = this._targetRevision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chart = undefined;
      this._directory.internalValue = undefined;
      this._helm.internalValue = undefined;
      this._kustomize.internalValue = undefined;
      this._path = undefined;
      this._plugin.internalValue = undefined;
      this._ref = undefined;
      this._repoUrl = undefined;
      this._targetRevision = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chart = value.chart;
      this._directory.internalValue = value.directory;
      this._helm.internalValue = value.helm;
      this._kustomize.internalValue = value.kustomize;
      this._path = value.path;
      this._plugin.internalValue = value.plugin;
      this._ref = value.ref;
      this._repoUrl = value.repoUrl;
      this._targetRevision = value.targetRevision;
    }
  }

  // chart - computed: false, optional: true, required: false
  private _chart?: string; 
  public get chart() {
    return this.getStringAttribute('chart');
  }
  public set chart(value: string) {
    this._chart = value;
  }
  public resetChart() {
    this._chart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart;
  }

  // directory - computed: false, optional: true, required: false
  private _directory = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesDirectory) {
    this._directory.internalValue = value;
  }
  public resetDirectory() {
    this._directory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory.internalValue;
  }

  // helm - computed: false, optional: true, required: false
  private _helm = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelmOutputReference(this, "helm");
  public get helm() {
    return this._helm;
  }
  public putHelm(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesHelm) {
    this._helm.internalValue = value;
  }
  public resetHelm() {
    this._helm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmInput() {
    return this._helm.internalValue;
  }

  // kustomize - computed: false, optional: true, required: false
  private _kustomize = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomizeOutputReference(this, "kustomize");
  public get kustomize() {
    return this._kustomize;
  }
  public putKustomize(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesKustomize) {
    this._kustomize.internalValue = value;
  }
  public resetKustomize() {
    this._kustomize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kustomizeInput() {
    return this._kustomize.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // plugin - computed: false, optional: true, required: false
  private _plugin = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPluginOutputReference(this, "plugin");
  public get plugin() {
    return this._plugin;
  }
  public putPlugin(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesPlugin) {
    this._plugin.internalValue = value;
  }
  public resetPlugin() {
    this._plugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin.internalValue;
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // repo_url - computed: false, optional: false, required: true
  private _repoUrl?: string; 
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
  public set repoUrl(value: string) {
    this._repoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoUrlInput() {
    return this._repoUrl;
  }

  // target_revision - computed: false, optional: true, required: false
  private _targetRevision?: string; 
  public get targetRevision() {
    return this.getStringAttribute('target_revision');
  }
  public set targetRevision(value: string) {
    this._targetRevision = value;
  }
  public resetTargetRevision() {
    this._targetRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRevisionInput() {
    return this._targetRevision;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyApply {
  /**
  * Force indicates whether or not to supply the --force flag to 'kubectl apply'. The --force flag deletes and re-create the resource, when PATCH encounters conflict and has retried for 5 times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#force DataK8SArgoprojIoApplicationV1Alpha1Manifest#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyApplyToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyApply | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force: cdktf.booleanToTerraform(struct!.force),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyApplyToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyApply | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force: {
      value: cdktf.booleanToHclTerraform(struct!.force),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyApplyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyApply | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._force !== undefined) {
      hasAnyValues = true;
      internalValueResult.force = this._force;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyApply | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._force = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._force = value.force;
    }
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyHook {
  /**
  * Force indicates whether or not to supply the --force flag to 'kubectl apply'. The --force flag deletes and re-create the resource, when PATCH encounters conflict and has retried for 5 times.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#force DataK8SArgoprojIoApplicationV1Alpha1Manifest#force}
  */
  readonly force?: boolean | cdktf.IResolvable;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyHookToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyHook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force: cdktf.booleanToTerraform(struct!.force),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyHookToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyHook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force: {
      value: cdktf.booleanToHclTerraform(struct!.force),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyHookOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyHook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._force !== undefined) {
      hasAnyValues = true;
      internalValueResult.force = this._force;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyHook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._force = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._force = value.force;
    }
  }

  // force - computed: false, optional: true, required: false
  private _force?: boolean | cdktf.IResolvable; 
  public get force() {
    return this.getBooleanAttribute('force');
  }
  public set force(value: boolean | cdktf.IResolvable) {
    this._force = value;
  }
  public resetForce() {
    this._force = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceInput() {
    return this._force;
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategy {
  /**
  * Apply will perform a 'kubectl apply' to perform the sync.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#apply DataK8SArgoprojIoApplicationV1Alpha1Manifest#apply}
  */
  readonly apply?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyApply;
  /**
  * Hook will submit any referenced resources to perform the sync. This is the default strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#hook DataK8SArgoprojIoApplicationV1Alpha1Manifest#hook}
  */
  readonly hook?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyHook;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    apply: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyApplyToTerraform(struct!.apply),
    hook: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyHookToTerraform(struct!.hook),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    apply: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyApplyToHclTerraform(struct!.apply),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyApply",
    },
    hook: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyHookToHclTerraform(struct!.hook),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyHook",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apply?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.apply = this._apply?.internalValue;
    }
    if (this._hook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hook = this._hook?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apply.internalValue = undefined;
      this._hook.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apply.internalValue = value.apply;
      this._hook.internalValue = value.hook;
    }
  }

  // apply - computed: false, optional: true, required: false
  private _apply = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyApplyOutputReference(this, "apply");
  public get apply() {
    return this._apply;
  }
  public putApply(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyApply) {
    this._apply.internalValue = value;
  }
  public resetApply() {
    this._apply.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get applyInput() {
    return this._apply.internalValue;
  }

  // hook - computed: false, optional: true, required: false
  private _hook = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyHookOutputReference(this, "hook");
  public get hook() {
    return this._hook;
  }
  public putHook(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyHook) {
    this._hook.internalValue = value;
  }
  public resetHook() {
    this._hook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hookInput() {
    return this._hook.internalValue;
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSync {
  /**
  * DryRun specifies to perform a 'kubectl apply --dry-run' without actually performing the sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#dry_run DataK8SArgoprojIoApplicationV1Alpha1Manifest#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Manifests is an optional field that overrides sync source with a local directory for development
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#manifests DataK8SArgoprojIoApplicationV1Alpha1Manifest#manifests}
  */
  readonly manifests?: string[];
  /**
  * Prune specifies to delete resources from the cluster that are no longer tracked in git
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#prune DataK8SArgoprojIoApplicationV1Alpha1Manifest#prune}
  */
  readonly prune?: boolean | cdktf.IResolvable;
  /**
  * Resources describes which resources shall be part of the sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#resources DataK8SArgoprojIoApplicationV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncResources[] | cdktf.IResolvable;
  /**
  * Revision is the revision (Git) or chart version (Helm) which to sync the application to If omitted, will use the revision specified in app spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#revision DataK8SArgoprojIoApplicationV1Alpha1Manifest#revision}
  */
  readonly revision?: string;
  /**
  * Revisions is the list of revision (Git) or chart version (Helm) which to sync each source in sources field for the application to If omitted, will use the revision specified in app spec.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#revisions DataK8SArgoprojIoApplicationV1Alpha1Manifest#revisions}
  */
  readonly revisions?: string[];
  /**
  * Source overrides the source definition set in the application. This is typically set in a Rollback operation and is nil during a Sync operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#source DataK8SArgoprojIoApplicationV1Alpha1Manifest#source}
  */
  readonly source?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSource;
  /**
  * Sources overrides the source definition set in the application. This is typically set in a Rollback operation and is nil during a Sync operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#sources DataK8SArgoprojIoApplicationV1Alpha1Manifest#sources}
  */
  readonly sources?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSources[] | cdktf.IResolvable;
  /**
  * SyncOptions provide per-sync sync-options, e.g. Validate=false
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#sync_options DataK8SArgoprojIoApplicationV1Alpha1Manifest#sync_options}
  */
  readonly syncOptions?: string[];
  /**
  * SyncStrategy describes how to perform the sync
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#sync_strategy DataK8SArgoprojIoApplicationV1Alpha1Manifest#sync_strategy}
  */
  readonly syncStrategy?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategy;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dry_run: cdktf.booleanToTerraform(struct!.dryRun),
    manifests: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.manifests),
    prune: cdktf.booleanToTerraform(struct!.prune),
    resources: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncResourcesToTerraform, false)(struct!.resources),
    revision: cdktf.stringToTerraform(struct!.revision),
    revisions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.revisions),
    source: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceToTerraform(struct!.source),
    sources: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesToTerraform, false)(struct!.sources),
    sync_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.syncOptions),
    sync_strategy: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyToTerraform(struct!.syncStrategy),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSync | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    dry_run: {
      value: cdktf.booleanToHclTerraform(struct!.dryRun),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    manifests: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.manifests),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    prune: {
      value: cdktf.booleanToHclTerraform(struct!.prune),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    resources: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncResourcesToHclTerraform, false)(struct!.resources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncResourcesList",
    },
    revision: {
      value: cdktf.stringToHclTerraform(struct!.revision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revisions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.revisions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    source: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSource",
    },
    sources: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesList",
    },
    sync_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.syncOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    sync_strategy: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyToHclTerraform(struct!.syncStrategy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSync | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dryRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.dryRun = this._dryRun;
    }
    if (this._manifests !== undefined) {
      hasAnyValues = true;
      internalValueResult.manifests = this._manifests;
    }
    if (this._prune !== undefined) {
      hasAnyValues = true;
      internalValueResult.prune = this._prune;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._revision !== undefined) {
      hasAnyValues = true;
      internalValueResult.revision = this._revision;
    }
    if (this._revisions !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisions = this._revisions;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    if (this._syncOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncOptions = this._syncOptions;
    }
    if (this._syncStrategy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncStrategy = this._syncStrategy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSync | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dryRun = undefined;
      this._manifests = undefined;
      this._prune = undefined;
      this._resources.internalValue = undefined;
      this._revision = undefined;
      this._revisions = undefined;
      this._source.internalValue = undefined;
      this._sources.internalValue = undefined;
      this._syncOptions = undefined;
      this._syncStrategy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dryRun = value.dryRun;
      this._manifests = value.manifests;
      this._prune = value.prune;
      this._resources.internalValue = value.resources;
      this._revision = value.revision;
      this._revisions = value.revisions;
      this._source.internalValue = value.source;
      this._sources.internalValue = value.sources;
      this._syncOptions = value.syncOptions;
      this._syncStrategy.internalValue = value.syncStrategy;
    }
  }

  // dry_run - computed: false, optional: true, required: false
  private _dryRun?: boolean | cdktf.IResolvable; 
  public get dryRun() {
    return this.getBooleanAttribute('dry_run');
  }
  public set dryRun(value: boolean | cdktf.IResolvable) {
    this._dryRun = value;
  }
  public resetDryRun() {
    this._dryRun = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get dryRunInput() {
    return this._dryRun;
  }

  // manifests - computed: false, optional: true, required: false
  private _manifests?: string[]; 
  public get manifests() {
    return this.getListAttribute('manifests');
  }
  public set manifests(value: string[]) {
    this._manifests = value;
  }
  public resetManifests() {
    this._manifests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get manifestsInput() {
    return this._manifests;
  }

  // prune - computed: false, optional: true, required: false
  private _prune?: boolean | cdktf.IResolvable; 
  public get prune() {
    return this.getBooleanAttribute('prune');
  }
  public set prune(value: boolean | cdktf.IResolvable) {
    this._prune = value;
  }
  public resetPrune() {
    this._prune = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pruneInput() {
    return this._prune;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncResourcesList(this, "resources", false);
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncResources[] | cdktf.IResolvable) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
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

  // revisions - computed: false, optional: true, required: false
  private _revisions?: string[]; 
  public get revisions() {
    return this.getListAttribute('revisions');
  }
  public set revisions(value: string[]) {
    this._revisions = value;
  }
  public resetRevisions() {
    this._revisions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionsInput() {
    return this._revisions;
  }

  // source - computed: false, optional: true, required: false
  private _source = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }

  // sync_options - computed: false, optional: true, required: false
  private _syncOptions?: string[]; 
  public get syncOptions() {
    return this.getListAttribute('sync_options');
  }
  public set syncOptions(value: string[]) {
    this._syncOptions = value;
  }
  public resetSyncOptions() {
    this._syncOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncOptionsInput() {
    return this._syncOptions;
  }

  // sync_strategy - computed: false, optional: true, required: false
  private _syncStrategy = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategyOutputReference(this, "sync_strategy");
  public get syncStrategy() {
    return this._syncStrategy;
  }
  public putSyncStrategy(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncSyncStrategy) {
    this._syncStrategy.internalValue = value;
  }
  public resetSyncStrategy() {
    this._syncStrategy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncStrategyInput() {
    return this._syncStrategy.internalValue;
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestOperation {
  /**
  * Info is a list of informational items for this operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#info DataK8SArgoprojIoApplicationV1Alpha1Manifest#info}
  */
  readonly info?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInfo[] | cdktf.IResolvable;
  /**
  * InitiatedBy contains information about who initiated the operations
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#initiated_by DataK8SArgoprojIoApplicationV1Alpha1Manifest#initiated_by}
  */
  readonly initiatedBy?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInitiatedBy;
  /**
  * Retry controls the strategy to apply if a sync fails
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#retry DataK8SArgoprojIoApplicationV1Alpha1Manifest#retry}
  */
  readonly retry?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetry;
  /**
  * Sync contains parameters for the operation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#sync DataK8SArgoprojIoApplicationV1Alpha1Manifest#sync}
  */
  readonly sync?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSync;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    info: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInfoToTerraform, false)(struct!.info),
    initiated_by: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInitiatedByToTerraform(struct!.initiatedBy),
    retry: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetryToTerraform(struct!.retry),
    sync: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncToTerraform(struct!.sync),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperation | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    info: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInfoToHclTerraform, false)(struct!.info),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInfoList",
    },
    initiated_by: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInitiatedByToHclTerraform(struct!.initiatedBy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInitiatedBy",
    },
    retry: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetry",
    },
    sync: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncToHclTerraform(struct!.sync),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSync",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestOperation | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._info?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info?.internalValue;
    }
    if (this._initiatedBy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.initiatedBy = this._initiatedBy?.internalValue;
    }
    if (this._retry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry?.internalValue;
    }
    if (this._sync?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sync = this._sync?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperation | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._info.internalValue = undefined;
      this._initiatedBy.internalValue = undefined;
      this._retry.internalValue = undefined;
      this._sync.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._info.internalValue = value.info;
      this._initiatedBy.internalValue = value.initiatedBy;
      this._retry.internalValue = value.retry;
      this._sync.internalValue = value.sync;
    }
  }

  // info - computed: false, optional: true, required: false
  private _info = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInfoList(this, "info", false);
  public get info() {
    return this._info;
  }
  public putInfo(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInfo[] | cdktf.IResolvable) {
    this._info.internalValue = value;
  }
  public resetInfo() {
    this._info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }

  // initiated_by - computed: false, optional: true, required: false
  private _initiatedBy = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInitiatedByOutputReference(this, "initiated_by");
  public get initiatedBy() {
    return this._initiatedBy;
  }
  public putInitiatedBy(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationInitiatedBy) {
    this._initiatedBy.internalValue = value;
  }
  public resetInitiatedBy() {
    this._initiatedBy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get initiatedByInput() {
    return this._initiatedBy.internalValue;
  }

  // retry - computed: false, optional: true, required: false
  private _retry = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }

  // sync - computed: false, optional: true, required: false
  private _sync = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSyncOutputReference(this, "sync");
  public get sync() {
    return this._sync;
  }
  public putSync(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationSync) {
    this._sync.internalValue = value;
  }
  public resetSync() {
    this._sync.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncInput() {
    return this._sync.internalValue;
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecDestination {
  /**
  * Name is an alternate way of specifying the target cluster by its symbolic name. This must be set if Server is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies the target namespace for the application's resources. The namespace will only be set for namespace-scoped resources that have not set a value for .metadata.namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#namespace DataK8SArgoprojIoApplicationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Server specifies the URL of the target cluster's Kubernetes control plane API. This must be set if Name is not set.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#server DataK8SArgoprojIoApplicationV1Alpha1Manifest#server}
  */
  readonly server?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecDestinationToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecDestination | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecDestinationToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecDestination | cdktf.IResolvable): any {
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    server: {
      value: cdktf.stringToHclTerraform(struct!.server),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecDestinationOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecDestination | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecDestination | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._namespace = value.namespace;
      this._server = value.server;
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

  // namespace - computed: false, optional: true, required: false
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

  // server - computed: false, optional: true, required: false
  private _server?: string; 
  public get server() {
    return this.getStringAttribute('server');
  }
  public set server(value: string) {
    this._server = value;
  }
  public resetServer() {
    this._server = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serverInput() {
    return this._server;
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecIgnoreDifferences {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#group DataK8SArgoprojIoApplicationV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#jq_path_expressions DataK8SArgoprojIoApplicationV1Alpha1Manifest#jq_path_expressions}
  */
  readonly jqPathExpressions?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#json_pointers DataK8SArgoprojIoApplicationV1Alpha1Manifest#json_pointers}
  */
  readonly jsonPointers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#kind DataK8SArgoprojIoApplicationV1Alpha1Manifest#kind}
  */
  readonly kind: string;
  /**
  * ManagedFieldsManagers is a list of trusted managers. Fields mutated by those managers will take precedence over the desired state defined in the SCM and won't be displayed in diffs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#managed_fields_managers DataK8SArgoprojIoApplicationV1Alpha1Manifest#managed_fields_managers}
  */
  readonly managedFieldsManagers?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#namespace DataK8SArgoprojIoApplicationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecIgnoreDifferencesToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecIgnoreDifferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    jq_path_expressions: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jqPathExpressions),
    json_pointers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.jsonPointers),
    kind: cdktf.stringToTerraform(struct!.kind),
    managed_fields_managers: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.managedFieldsManagers),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecIgnoreDifferencesToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecIgnoreDifferences | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jq_path_expressions: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jqPathExpressions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    json_pointers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.jsonPointers),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    managed_fields_managers: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.managedFieldsManagers),
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecIgnoreDifferencesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecIgnoreDifferences | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._jqPathExpressions !== undefined) {
      hasAnyValues = true;
      internalValueResult.jqPathExpressions = this._jqPathExpressions;
    }
    if (this._jsonPointers !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonPointers = this._jsonPointers;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._managedFieldsManagers !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedFieldsManagers = this._managedFieldsManagers;
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

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecIgnoreDifferences | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._jqPathExpressions = undefined;
      this._jsonPointers = undefined;
      this._kind = undefined;
      this._managedFieldsManagers = undefined;
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
      this._group = value.group;
      this._jqPathExpressions = value.jqPathExpressions;
      this._jsonPointers = value.jsonPointers;
      this._kind = value.kind;
      this._managedFieldsManagers = value.managedFieldsManagers;
      this._name = value.name;
      this._namespace = value.namespace;
    }
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // jq_path_expressions - computed: false, optional: true, required: false
  private _jqPathExpressions?: string[]; 
  public get jqPathExpressions() {
    return this.getListAttribute('jq_path_expressions');
  }
  public set jqPathExpressions(value: string[]) {
    this._jqPathExpressions = value;
  }
  public resetJqPathExpressions() {
    this._jqPathExpressions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jqPathExpressionsInput() {
    return this._jqPathExpressions;
  }

  // json_pointers - computed: false, optional: true, required: false
  private _jsonPointers?: string[]; 
  public get jsonPointers() {
    return this.getListAttribute('json_pointers');
  }
  public set jsonPointers(value: string[]) {
    this._jsonPointers = value;
  }
  public resetJsonPointers() {
    this._jsonPointers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonPointersInput() {
    return this._jsonPointers;
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

  // managed_fields_managers - computed: false, optional: true, required: false
  private _managedFieldsManagers?: string[]; 
  public get managedFieldsManagers() {
    return this.getListAttribute('managed_fields_managers');
  }
  public set managedFieldsManagers(value: string[]) {
    this._managedFieldsManagers = value;
  }
  public resetManagedFieldsManagers() {
    this._managedFieldsManagers = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedFieldsManagersInput() {
    return this._managedFieldsManagers;
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

  // namespace - computed: false, optional: true, required: false
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
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecIgnoreDifferencesList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecIgnoreDifferences[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecIgnoreDifferencesOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecIgnoreDifferencesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecInfo {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#value DataK8SArgoprojIoApplicationV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecInfoToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecInfoToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecInfo | cdktf.IResolvable): any {
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecInfoOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecInfoList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecInfo[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecInfoOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecInfoOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetExtVars {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#code DataK8SArgoprojIoApplicationV1Alpha1Manifest#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#value DataK8SArgoprojIoApplicationV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetExtVarsToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetExtVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.booleanToTerraform(struct!.code),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetExtVarsToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetExtVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.booleanToHclTerraform(struct!.code),
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetExtVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetExtVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetExtVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: boolean | cdktf.IResolvable; 
  public get code() {
    return this.getBooleanAttribute('code');
  }
  public set code(value: boolean | cdktf.IResolvable) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetExtVarsList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetExtVars[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetExtVarsOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetExtVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetTlas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#code DataK8SArgoprojIoApplicationV1Alpha1Manifest#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#value DataK8SArgoprojIoApplicationV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetTlasToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetTlas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.booleanToTerraform(struct!.code),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetTlasToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetTlas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.booleanToHclTerraform(struct!.code),
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetTlasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetTlas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetTlas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: boolean | cdktf.IResolvable; 
  public get code() {
    return this.getBooleanAttribute('code');
  }
  public set code(value: boolean | cdktf.IResolvable) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetTlasList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetTlas[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetTlasOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetTlasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnet {
  /**
  * ExtVars is a list of Jsonnet External Variables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#ext_vars DataK8SArgoprojIoApplicationV1Alpha1Manifest#ext_vars}
  */
  readonly extVars?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetExtVars[] | cdktf.IResolvable;
  /**
  * Additional library search dirs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#libs DataK8SArgoprojIoApplicationV1Alpha1Manifest#libs}
  */
  readonly libs?: string[];
  /**
  * TLAS is a list of Jsonnet Top-level Arguments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#tlas DataK8SArgoprojIoApplicationV1Alpha1Manifest#tlas}
  */
  readonly tlas?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetTlas[] | cdktf.IResolvable;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_vars: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetExtVarsToTerraform, false)(struct!.extVars),
    libs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.libs),
    tlas: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetTlasToTerraform, false)(struct!.tlas),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_vars: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetExtVarsToHclTerraform, false)(struct!.extVars),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetExtVarsList",
    },
    libs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.libs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tlas: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetTlasToHclTerraform, false)(struct!.tlas),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetTlasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extVars = this._extVars?.internalValue;
    }
    if (this._libs !== undefined) {
      hasAnyValues = true;
      internalValueResult.libs = this._libs;
    }
    if (this._tlas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlas = this._tlas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extVars.internalValue = undefined;
      this._libs = undefined;
      this._tlas.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extVars.internalValue = value.extVars;
      this._libs = value.libs;
      this._tlas.internalValue = value.tlas;
    }
  }

  // ext_vars - computed: false, optional: true, required: false
  private _extVars = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetExtVarsList(this, "ext_vars", false);
  public get extVars() {
    return this._extVars;
  }
  public putExtVars(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetExtVars[] | cdktf.IResolvable) {
    this._extVars.internalValue = value;
  }
  public resetExtVars() {
    this._extVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extVarsInput() {
    return this._extVars.internalValue;
  }

  // libs - computed: false, optional: true, required: false
  private _libs?: string[]; 
  public get libs() {
    return this.getListAttribute('libs');
  }
  public set libs(value: string[]) {
    this._libs = value;
  }
  public resetLibs() {
    this._libs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libsInput() {
    return this._libs;
  }

  // tlas - computed: false, optional: true, required: false
  private _tlas = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetTlasList(this, "tlas", false);
  public get tlas() {
    return this._tlas;
  }
  public putTlas(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetTlas[] | cdktf.IResolvable) {
    this._tlas.internalValue = value;
  }
  public resetTlas() {
    this._tlas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlasInput() {
    return this._tlas.internalValue;
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectory {
  /**
  * Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#exclude DataK8SArgoprojIoApplicationV1Alpha1Manifest#exclude}
  */
  readonly exclude?: string;
  /**
  * Include contains a glob pattern to match paths against that should be explicitly included during manifest generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#include DataK8SArgoprojIoApplicationV1Alpha1Manifest#include}
  */
  readonly include?: string;
  /**
  * Jsonnet holds options specific to Jsonnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#jsonnet DataK8SArgoprojIoApplicationV1Alpha1Manifest#jsonnet}
  */
  readonly jsonnet?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnet;
  /**
  * Recurse specifies whether to scan a directory recursively for manifests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#recurse DataK8SArgoprojIoApplicationV1Alpha1Manifest#recurse}
  */
  readonly recurse?: boolean | cdktf.IResolvable;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.stringToTerraform(struct!.exclude),
    include: cdktf.stringToTerraform(struct!.include),
    jsonnet: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetToTerraform(struct!.jsonnet),
    recurse: cdktf.booleanToTerraform(struct!.recurse),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.stringToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jsonnet: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetToHclTerraform(struct!.jsonnet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnet",
    },
    recurse: {
      value: cdktf.booleanToHclTerraform(struct!.recurse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._jsonnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonnet = this._jsonnet?.internalValue;
    }
    if (this._recurse !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurse = this._recurse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._include = undefined;
      this._jsonnet.internalValue = undefined;
      this._recurse = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._include = value.include;
      this._jsonnet.internalValue = value.jsonnet;
      this._recurse = value.recurse;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string; 
  public get exclude() {
    return this.getStringAttribute('exclude');
  }
  public set exclude(value: string) {
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
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // jsonnet - computed: false, optional: true, required: false
  private _jsonnet = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnetOutputReference(this, "jsonnet");
  public get jsonnet() {
    return this._jsonnet;
  }
  public putJsonnet(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryJsonnet) {
    this._jsonnet.internalValue = value;
  }
  public resetJsonnet() {
    this._jsonnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonnetInput() {
    return this._jsonnet.internalValue;
  }

  // recurse - computed: false, optional: true, required: false
  private _recurse?: boolean | cdktf.IResolvable; 
  public get recurse() {
    return this.getBooleanAttribute('recurse');
  }
  public set recurse(value: boolean | cdktf.IResolvable) {
    this._recurse = value;
  }
  public resetRecurse() {
    this._recurse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurseInput() {
    return this._recurse;
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmFileParameters {
  /**
  * Name is the name of the Helm parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Path is the path to the file containing the values for the Helm parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#path DataK8SArgoprojIoApplicationV1Alpha1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmFileParametersToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmFileParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmFileParametersToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmFileParameters | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmFileParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmFileParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmFileParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmFileParametersList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmFileParameters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmFileParametersOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmFileParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmParameters {
  /**
  * ForceString determines whether to tell Helm to interpret booleans and numbers as strings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#force_string DataK8SArgoprojIoApplicationV1Alpha1Manifest#force_string}
  */
  readonly forceString?: boolean | cdktf.IResolvable;
  /**
  * Name is the name of the Helm parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Value is the value for the Helm parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#value DataK8SArgoprojIoApplicationV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmParametersToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_string: cdktf.booleanToTerraform(struct!.forceString),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmParametersToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_string: {
      value: cdktf.booleanToHclTerraform(struct!.forceString),
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceString !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceString = this._forceString;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceString = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forceString = value.forceString;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // force_string - computed: false, optional: true, required: false
  private _forceString?: boolean | cdktf.IResolvable; 
  public get forceString() {
    return this.getBooleanAttribute('force_string');
  }
  public set forceString(value: boolean | cdktf.IResolvable) {
    this._forceString = value;
  }
  public resetForceString() {
    this._forceString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceStringInput() {
    return this._forceString;
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmParametersList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmParameters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmParametersOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelm {
  /**
  * FileParameters are file parameters to the helm template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#file_parameters DataK8SArgoprojIoApplicationV1Alpha1Manifest#file_parameters}
  */
  readonly fileParameters?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmFileParameters[] | cdktf.IResolvable;
  /**
  * IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#ignore_missing_value_files DataK8SArgoprojIoApplicationV1Alpha1Manifest#ignore_missing_value_files}
  */
  readonly ignoreMissingValueFiles?: boolean | cdktf.IResolvable;
  /**
  * Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#parameters DataK8SArgoprojIoApplicationV1Alpha1Manifest#parameters}
  */
  readonly parameters?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmParameters[] | cdktf.IResolvable;
  /**
  * PassCredentials pass credentials to all domains (Helm's --pass-credentials)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#pass_credentials DataK8SArgoprojIoApplicationV1Alpha1Manifest#pass_credentials}
  */
  readonly passCredentials?: boolean | cdktf.IResolvable;
  /**
  * ReleaseName is the Helm release name to use. If omitted it will use the application name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#release_name DataK8SArgoprojIoApplicationV1Alpha1Manifest#release_name}
  */
  readonly releaseName?: string;
  /**
  * SkipCrds skips custom resource definition installation step (Helm's --skip-crds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#skip_crds DataK8SArgoprojIoApplicationV1Alpha1Manifest#skip_crds}
  */
  readonly skipCrds?: boolean | cdktf.IResolvable;
  /**
  * ValuesFiles is a list of Helm value files to use when generating a template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#value_files DataK8SArgoprojIoApplicationV1Alpha1Manifest#value_files}
  */
  readonly valueFiles?: string[];
  /**
  * Values specifies Helm values to be passed to helm template, typically defined as a block. ValuesObject takes precedence over Values, so use one or the other.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#values DataK8SArgoprojIoApplicationV1Alpha1Manifest#values}
  */
  readonly values?: string;
  /**
  * ValuesObject specifies Helm values to be passed to helm template, defined as a map. This takes precedence over Values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#values_object DataK8SArgoprojIoApplicationV1Alpha1Manifest#values_object}
  */
  readonly valuesObject?: { [key: string]: string };
  /**
  * Version is the Helm version to use for templating ('3')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#version DataK8SArgoprojIoApplicationV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_parameters: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmFileParametersToTerraform, false)(struct!.fileParameters),
    ignore_missing_value_files: cdktf.booleanToTerraform(struct!.ignoreMissingValueFiles),
    parameters: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmParametersToTerraform, false)(struct!.parameters),
    pass_credentials: cdktf.booleanToTerraform(struct!.passCredentials),
    release_name: cdktf.stringToTerraform(struct!.releaseName),
    skip_crds: cdktf.booleanToTerraform(struct!.skipCrds),
    value_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valueFiles),
    values: cdktf.stringToTerraform(struct!.values),
    values_object: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.valuesObject),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_parameters: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmFileParametersToHclTerraform, false)(struct!.fileParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmFileParametersList",
    },
    ignore_missing_value_files: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMissingValueFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parameters: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmParametersList",
    },
    pass_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.passCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    release_name: {
      value: cdktf.stringToHclTerraform(struct!.releaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_crds: {
      value: cdktf.booleanToHclTerraform(struct!.skipCrds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.valueFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.stringToHclTerraform(struct!.values),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values_object: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.valuesObject),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileParameters = this._fileParameters?.internalValue;
    }
    if (this._ignoreMissingValueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMissingValueFiles = this._ignoreMissingValueFiles;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._passCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.passCredentials = this._passCredentials;
    }
    if (this._releaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseName = this._releaseName;
    }
    if (this._skipCrds !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipCrds = this._skipCrds;
    }
    if (this._valueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFiles = this._valueFiles;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._valuesObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesObject = this._valuesObject;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileParameters.internalValue = undefined;
      this._ignoreMissingValueFiles = undefined;
      this._parameters.internalValue = undefined;
      this._passCredentials = undefined;
      this._releaseName = undefined;
      this._skipCrds = undefined;
      this._valueFiles = undefined;
      this._values = undefined;
      this._valuesObject = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileParameters.internalValue = value.fileParameters;
      this._ignoreMissingValueFiles = value.ignoreMissingValueFiles;
      this._parameters.internalValue = value.parameters;
      this._passCredentials = value.passCredentials;
      this._releaseName = value.releaseName;
      this._skipCrds = value.skipCrds;
      this._valueFiles = value.valueFiles;
      this._values = value.values;
      this._valuesObject = value.valuesObject;
      this._version = value.version;
    }
  }

  // file_parameters - computed: false, optional: true, required: false
  private _fileParameters = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmFileParametersList(this, "file_parameters", false);
  public get fileParameters() {
    return this._fileParameters;
  }
  public putFileParameters(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmFileParameters[] | cdktf.IResolvable) {
    this._fileParameters.internalValue = value;
  }
  public resetFileParameters() {
    this._fileParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileParametersInput() {
    return this._fileParameters.internalValue;
  }

  // ignore_missing_value_files - computed: false, optional: true, required: false
  private _ignoreMissingValueFiles?: boolean | cdktf.IResolvable; 
  public get ignoreMissingValueFiles() {
    return this.getBooleanAttribute('ignore_missing_value_files');
  }
  public set ignoreMissingValueFiles(value: boolean | cdktf.IResolvable) {
    this._ignoreMissingValueFiles = value;
  }
  public resetIgnoreMissingValueFiles() {
    this._ignoreMissingValueFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingValueFilesInput() {
    return this._ignoreMissingValueFiles;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // pass_credentials - computed: false, optional: true, required: false
  private _passCredentials?: boolean | cdktf.IResolvable; 
  public get passCredentials() {
    return this.getBooleanAttribute('pass_credentials');
  }
  public set passCredentials(value: boolean | cdktf.IResolvable) {
    this._passCredentials = value;
  }
  public resetPassCredentials() {
    this._passCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passCredentialsInput() {
    return this._passCredentials;
  }

  // release_name - computed: false, optional: true, required: false
  private _releaseName?: string; 
  public get releaseName() {
    return this.getStringAttribute('release_name');
  }
  public set releaseName(value: string) {
    this._releaseName = value;
  }
  public resetReleaseName() {
    this._releaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNameInput() {
    return this._releaseName;
  }

  // skip_crds - computed: false, optional: true, required: false
  private _skipCrds?: boolean | cdktf.IResolvable; 
  public get skipCrds() {
    return this.getBooleanAttribute('skip_crds');
  }
  public set skipCrds(value: boolean | cdktf.IResolvable) {
    this._skipCrds = value;
  }
  public resetSkipCrds() {
    this._skipCrds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCrdsInput() {
    return this._skipCrds;
  }

  // value_files - computed: false, optional: true, required: false
  private _valueFiles?: string[]; 
  public get valueFiles() {
    return this.getListAttribute('value_files');
  }
  public set valueFiles(value: string[]) {
    this._valueFiles = value;
  }
  public resetValueFiles() {
    this._valueFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFilesInput() {
    return this._valueFiles;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // values_object - computed: false, optional: true, required: false
  private _valuesObject?: { [key: string]: string }; 
  public get valuesObject() {
    return this.getStringMapAttribute('values_object');
  }
  public set valuesObject(value: { [key: string]: string }) {
    this._valuesObject = value;
  }
  public resetValuesObject() {
    this._valuesObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesObjectInput() {
    return this._valuesObject;
  }

  // version - computed: false, optional: true, required: false
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
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatchesTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#annotation_selector DataK8SArgoprojIoApplicationV1Alpha1Manifest#annotation_selector}
  */
  readonly annotationSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#group DataK8SArgoprojIoApplicationV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#kind DataK8SArgoprojIoApplicationV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#label_selector DataK8SArgoprojIoApplicationV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#namespace DataK8SArgoprojIoApplicationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#version DataK8SArgoprojIoApplicationV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatchesTargetToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatchesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation_selector: cdktf.stringToTerraform(struct!.annotationSelector),
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    label_selector: cdktf.stringToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatchesTargetToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatchesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation_selector: {
      value: cdktf.stringToHclTerraform(struct!.annotationSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: cdktf.stringToHclTerraform(struct!.labelSelector),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatchesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatchesTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationSelector = this._annotationSelector;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatchesTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotationSelector = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._labelSelector = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotationSelector = value.annotationSelector;
      this._group = value.group;
      this._kind = value.kind;
      this._labelSelector = value.labelSelector;
      this._name = value.name;
      this._namespace = value.namespace;
      this._version = value.version;
    }
  }

  // annotation_selector - computed: false, optional: true, required: false
  private _annotationSelector?: string; 
  public get annotationSelector() {
    return this.getStringAttribute('annotation_selector');
  }
  public set annotationSelector(value: string) {
    this._annotationSelector = value;
  }
  public resetAnnotationSelector() {
    this._annotationSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationSelectorInput() {
    return this._annotationSelector;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector?: string; 
  public get labelSelector() {
    return this.getStringAttribute('label_selector');
  }
  public set labelSelector(value: string) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
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

  // namespace - computed: false, optional: true, required: false
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

  // version - computed: false, optional: true, required: false
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
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatches {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#options DataK8SArgoprojIoApplicationV1Alpha1Manifest#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#patch DataK8SArgoprojIoApplicationV1Alpha1Manifest#patch}
  */
  readonly patch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#path DataK8SArgoprojIoApplicationV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#target DataK8SArgoprojIoApplicationV1Alpha1Manifest#target}
  */
  readonly target?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatchesTarget;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatchesToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    patch: cdktf.stringToTerraform(struct!.patch),
    path: cdktf.stringToTerraform(struct!.path),
    target: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatchesTargetToTerraform(struct!.target),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatchesToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    patch: {
      value: cdktf.stringToHclTerraform(struct!.patch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatchesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatchesTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._patch !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._options = undefined;
      this._patch = undefined;
      this._path = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._options = value.options;
      this._patch = value.patch;
      this._path = value.path;
      this._target.internalValue = value.target;
    }
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // patch - computed: false, optional: true, required: false
  private _patch?: string; 
  public get patch() {
    return this.getStringAttribute('patch');
  }
  public set patch(value: string) {
    this._patch = value;
  }
  public resetPatch() {
    this._patch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // target - computed: false, optional: true, required: false
  private _target = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatchesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatchesTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatchesOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizeReplicas {
  /**
  * Number of replicas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#count DataK8SArgoprojIoApplicationV1Alpha1Manifest#count}
  */
  readonly count: string;
  /**
  * Name of Deployment or StatefulSet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizeReplicasToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizeReplicas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.stringToTerraform(struct!.count),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizeReplicasToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizeReplicas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizeReplicasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizeReplicas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizeReplicas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._name = value.name;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizeReplicasList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizeReplicas[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizeReplicasOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizeReplicasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomize {
  /**
  * CommonAnnotations is a list of additional annotations to add to rendered manifests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#common_annotations DataK8SArgoprojIoApplicationV1Alpha1Manifest#common_annotations}
  */
  readonly commonAnnotations?: { [key: string]: string };
  /**
  * CommonAnnotationsEnvsubst specifies whether to apply env variables substitution for annotation values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#common_annotations_envsubst DataK8SArgoprojIoApplicationV1Alpha1Manifest#common_annotations_envsubst}
  */
  readonly commonAnnotationsEnvsubst?: boolean | cdktf.IResolvable;
  /**
  * CommonLabels is a list of additional labels to add to rendered manifests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#common_labels DataK8SArgoprojIoApplicationV1Alpha1Manifest#common_labels}
  */
  readonly commonLabels?: { [key: string]: string };
  /**
  * Components specifies a list of kustomize components to add to the kustomization before building
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#components DataK8SArgoprojIoApplicationV1Alpha1Manifest#components}
  */
  readonly components?: string[];
  /**
  * ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#force_common_annotations DataK8SArgoprojIoApplicationV1Alpha1Manifest#force_common_annotations}
  */
  readonly forceCommonAnnotations?: boolean | cdktf.IResolvable;
  /**
  * ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#force_common_labels DataK8SArgoprojIoApplicationV1Alpha1Manifest#force_common_labels}
  */
  readonly forceCommonLabels?: boolean | cdktf.IResolvable;
  /**
  * Images is a list of Kustomize image override specifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#images DataK8SArgoprojIoApplicationV1Alpha1Manifest#images}
  */
  readonly images?: string[];
  /**
  * LabelWithoutSelector specifies whether to apply common labels to resource selectors or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#label_without_selector DataK8SArgoprojIoApplicationV1Alpha1Manifest#label_without_selector}
  */
  readonly labelWithoutSelector?: boolean | cdktf.IResolvable;
  /**
  * NamePrefix is a prefix appended to resources for Kustomize apps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name_prefix DataK8SArgoprojIoApplicationV1Alpha1Manifest#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * NameSuffix is a suffix appended to resources for Kustomize apps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name_suffix DataK8SArgoprojIoApplicationV1Alpha1Manifest#name_suffix}
  */
  readonly nameSuffix?: string;
  /**
  * Namespace sets the namespace that Kustomize adds to all resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#namespace DataK8SArgoprojIoApplicationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Patches is a list of Kustomize patches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#patches DataK8SArgoprojIoApplicationV1Alpha1Manifest#patches}
  */
  readonly patches?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatches[] | cdktf.IResolvable;
  /**
  * Replicas is a list of Kustomize Replicas override specifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#replicas DataK8SArgoprojIoApplicationV1Alpha1Manifest#replicas}
  */
  readonly replicas?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizeReplicas[] | cdktf.IResolvable;
  /**
  * Version controls which version of Kustomize to use for rendering manifests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#version DataK8SArgoprojIoApplicationV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizeToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonAnnotations),
    common_annotations_envsubst: cdktf.booleanToTerraform(struct!.commonAnnotationsEnvsubst),
    common_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonLabels),
    components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.components),
    force_common_annotations: cdktf.booleanToTerraform(struct!.forceCommonAnnotations),
    force_common_labels: cdktf.booleanToTerraform(struct!.forceCommonLabels),
    images: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.images),
    label_without_selector: cdktf.booleanToTerraform(struct!.labelWithoutSelector),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    name_suffix: cdktf.stringToTerraform(struct!.nameSuffix),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    patches: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatchesToTerraform, false)(struct!.patches),
    replicas: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizeReplicasToTerraform, false)(struct!.replicas),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizeToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    common_annotations_envsubst: {
      value: cdktf.booleanToHclTerraform(struct!.commonAnnotationsEnvsubst),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    common_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    components: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.components),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    force_common_annotations: {
      value: cdktf.booleanToHclTerraform(struct!.forceCommonAnnotations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_common_labels: {
      value: cdktf.booleanToHclTerraform(struct!.forceCommonLabels),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    images: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.images),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    label_without_selector: {
      value: cdktf.booleanToHclTerraform(struct!.labelWithoutSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.namePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_suffix: {
      value: cdktf.stringToHclTerraform(struct!.nameSuffix),
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
    patches: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatchesToHclTerraform, false)(struct!.patches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatchesList",
    },
    replicas: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizeReplicasToHclTerraform, false)(struct!.replicas),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizeReplicasList",
    },
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomize | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonAnnotations = this._commonAnnotations;
    }
    if (this._commonAnnotationsEnvsubst !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonAnnotationsEnvsubst = this._commonAnnotationsEnvsubst;
    }
    if (this._commonLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonLabels = this._commonLabels;
    }
    if (this._components !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components;
    }
    if (this._forceCommonAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceCommonAnnotations = this._forceCommonAnnotations;
    }
    if (this._forceCommonLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceCommonLabels = this._forceCommonLabels;
    }
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._labelWithoutSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelWithoutSelector = this._labelWithoutSelector;
    }
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._nameSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameSuffix = this._nameSuffix;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._patches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patches = this._patches?.internalValue;
    }
    if (this._replicas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomize | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonAnnotations = undefined;
      this._commonAnnotationsEnvsubst = undefined;
      this._commonLabels = undefined;
      this._components = undefined;
      this._forceCommonAnnotations = undefined;
      this._forceCommonLabels = undefined;
      this._images = undefined;
      this._labelWithoutSelector = undefined;
      this._namePrefix = undefined;
      this._nameSuffix = undefined;
      this._namespace = undefined;
      this._patches.internalValue = undefined;
      this._replicas.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonAnnotations = value.commonAnnotations;
      this._commonAnnotationsEnvsubst = value.commonAnnotationsEnvsubst;
      this._commonLabels = value.commonLabels;
      this._components = value.components;
      this._forceCommonAnnotations = value.forceCommonAnnotations;
      this._forceCommonLabels = value.forceCommonLabels;
      this._images = value.images;
      this._labelWithoutSelector = value.labelWithoutSelector;
      this._namePrefix = value.namePrefix;
      this._nameSuffix = value.nameSuffix;
      this._namespace = value.namespace;
      this._patches.internalValue = value.patches;
      this._replicas.internalValue = value.replicas;
      this._version = value.version;
    }
  }

  // common_annotations - computed: false, optional: true, required: false
  private _commonAnnotations?: { [key: string]: string }; 
  public get commonAnnotations() {
    return this.getStringMapAttribute('common_annotations');
  }
  public set commonAnnotations(value: { [key: string]: string }) {
    this._commonAnnotations = value;
  }
  public resetCommonAnnotations() {
    this._commonAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonAnnotationsInput() {
    return this._commonAnnotations;
  }

  // common_annotations_envsubst - computed: false, optional: true, required: false
  private _commonAnnotationsEnvsubst?: boolean | cdktf.IResolvable; 
  public get commonAnnotationsEnvsubst() {
    return this.getBooleanAttribute('common_annotations_envsubst');
  }
  public set commonAnnotationsEnvsubst(value: boolean | cdktf.IResolvable) {
    this._commonAnnotationsEnvsubst = value;
  }
  public resetCommonAnnotationsEnvsubst() {
    this._commonAnnotationsEnvsubst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonAnnotationsEnvsubstInput() {
    return this._commonAnnotationsEnvsubst;
  }

  // common_labels - computed: false, optional: true, required: false
  private _commonLabels?: { [key: string]: string }; 
  public get commonLabels() {
    return this.getStringMapAttribute('common_labels');
  }
  public set commonLabels(value: { [key: string]: string }) {
    this._commonLabels = value;
  }
  public resetCommonLabels() {
    this._commonLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonLabelsInput() {
    return this._commonLabels;
  }

  // components - computed: false, optional: true, required: false
  private _components?: string[]; 
  public get components() {
    return this.getListAttribute('components');
  }
  public set components(value: string[]) {
    this._components = value;
  }
  public resetComponents() {
    this._components = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
  }

  // force_common_annotations - computed: false, optional: true, required: false
  private _forceCommonAnnotations?: boolean | cdktf.IResolvable; 
  public get forceCommonAnnotations() {
    return this.getBooleanAttribute('force_common_annotations');
  }
  public set forceCommonAnnotations(value: boolean | cdktf.IResolvable) {
    this._forceCommonAnnotations = value;
  }
  public resetForceCommonAnnotations() {
    this._forceCommonAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceCommonAnnotationsInput() {
    return this._forceCommonAnnotations;
  }

  // force_common_labels - computed: false, optional: true, required: false
  private _forceCommonLabels?: boolean | cdktf.IResolvable; 
  public get forceCommonLabels() {
    return this.getBooleanAttribute('force_common_labels');
  }
  public set forceCommonLabels(value: boolean | cdktf.IResolvable) {
    this._forceCommonLabels = value;
  }
  public resetForceCommonLabels() {
    this._forceCommonLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceCommonLabelsInput() {
    return this._forceCommonLabels;
  }

  // images - computed: false, optional: true, required: false
  private _images?: string[]; 
  public get images() {
    return this.getListAttribute('images');
  }
  public set images(value: string[]) {
    this._images = value;
  }
  public resetImages() {
    this._images = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
  }

  // label_without_selector - computed: false, optional: true, required: false
  private _labelWithoutSelector?: boolean | cdktf.IResolvable; 
  public get labelWithoutSelector() {
    return this.getBooleanAttribute('label_without_selector');
  }
  public set labelWithoutSelector(value: boolean | cdktf.IResolvable) {
    this._labelWithoutSelector = value;
  }
  public resetLabelWithoutSelector() {
    this._labelWithoutSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelWithoutSelectorInput() {
    return this._labelWithoutSelector;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // name_suffix - computed: false, optional: true, required: false
  private _nameSuffix?: string; 
  public get nameSuffix() {
    return this.getStringAttribute('name_suffix');
  }
  public set nameSuffix(value: string) {
    this._nameSuffix = value;
  }
  public resetNameSuffix() {
    this._nameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameSuffixInput() {
    return this._nameSuffix;
  }

  // namespace - computed: false, optional: true, required: false
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

  // patches - computed: false, optional: true, required: false
  private _patches = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatchesList(this, "patches", false);
  public get patches() {
    return this._patches;
  }
  public putPatches(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizePatches[] | cdktf.IResolvable) {
    this._patches.internalValue = value;
  }
  public resetPatches() {
    this._patches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchesInput() {
    return this._patches.internalValue;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizeReplicasList(this, "replicas", false);
  public get replicas() {
    return this._replicas;
  }
  public putReplicas(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizeReplicas[] | cdktf.IResolvable) {
    this._replicas.internalValue = value;
  }
  public resetReplicas() {
    this._replicas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas.internalValue;
  }

  // version - computed: false, optional: true, required: false
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
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginEnv {
  /**
  * Name is the name of the variable, usually expressed in uppercase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#value DataK8SArgoprojIoApplicationV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginEnvToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginEnvToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginEnv | cdktf.IResolvable): any {
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginEnvOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginParameters {
  /**
  * Array is the value of an array type parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#array DataK8SArgoprojIoApplicationV1Alpha1Manifest#array}
  */
  readonly array?: string[];
  /**
  * Map is the value of a map type parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#map DataK8SArgoprojIoApplicationV1Alpha1Manifest#map}
  */
  readonly map?: { [key: string]: string };
  /**
  * Name is the name identifying a parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * String_ is the value of a string type parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#string DataK8SArgoprojIoApplicationV1Alpha1Manifest#string}
  */
  readonly string?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginParametersToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.array),
    map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.map),
    name: cdktf.stringToTerraform(struct!.name),
    string: cdktf.stringToTerraform(struct!.string),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginParametersToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.array),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.map),
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
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._array !== undefined) {
      hasAnyValues = true;
      internalValueResult.array = this._array;
    }
    if (this._map !== undefined) {
      hasAnyValues = true;
      internalValueResult.map = this._map;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._array = undefined;
      this._map = undefined;
      this._name = undefined;
      this._string = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._array = value.array;
      this._map = value.map;
      this._name = value.name;
      this._string = value.string;
    }
  }

  // array - computed: false, optional: true, required: false
  private _array?: string[]; 
  public get array() {
    return this.getListAttribute('array');
  }
  public set array(value: string[]) {
    this._array = value;
  }
  public resetArray() {
    this._array = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayInput() {
    return this._array;
  }

  // map - computed: false, optional: true, required: false
  private _map?: { [key: string]: string }; 
  public get map() {
    return this.getStringMapAttribute('map');
  }
  public set map(value: { [key: string]: string }) {
    this._map = value;
  }
  public resetMap() {
    this._map = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map;
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

  // string - computed: false, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginParametersList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginParameters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginParametersOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePlugin {
  /**
  * Env is a list of environment variable entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#env DataK8SArgoprojIoApplicationV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginEnv[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#parameters DataK8SArgoprojIoApplicationV1Alpha1Manifest#parameters}
  */
  readonly parameters?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginParameters[] | cdktf.IResolvable;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginEnvToTerraform, false)(struct!.env),
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginParametersToTerraform, false)(struct!.parameters),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginEnvList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env.internalValue = undefined;
      this._name = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env.internalValue = value.env;
      this._name = value.name;
      this._parameters.internalValue = value.parameters;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginParameters[] | cdktf.IResolvable) {
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
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSource {
  /**
  * Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#chart DataK8SArgoprojIoApplicationV1Alpha1Manifest#chart}
  */
  readonly chart?: string;
  /**
  * Directory holds path/directory specific options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#directory DataK8SArgoprojIoApplicationV1Alpha1Manifest#directory}
  */
  readonly directory?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectory;
  /**
  * Helm holds helm specific options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#helm DataK8SArgoprojIoApplicationV1Alpha1Manifest#helm}
  */
  readonly helm?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelm;
  /**
  * Kustomize holds kustomize specific options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#kustomize DataK8SArgoprojIoApplicationV1Alpha1Manifest#kustomize}
  */
  readonly kustomize?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomize;
  /**
  * Path is a directory path within the Git repository, and is only valid for applications sourced from Git.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#path DataK8SArgoprojIoApplicationV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Plugin holds config management plugin specific options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#plugin DataK8SArgoprojIoApplicationV1Alpha1Manifest#plugin}
  */
  readonly plugin?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePlugin;
  /**
  * Ref is reference to another source within sources field. This field will not be used if used with a 'source' tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#ref DataK8SArgoprojIoApplicationV1Alpha1Manifest#ref}
  */
  readonly ref?: string;
  /**
  * RepoURL is the URL to the repository (Git or Helm) that contains the application manifests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#repo_url DataK8SArgoprojIoApplicationV1Alpha1Manifest#repo_url}
  */
  readonly repoUrl: string;
  /**
  * TargetRevision defines the revision of the source to sync the application to. In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of Helm, this is a semver tag for the Chart's version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#target_revision DataK8SArgoprojIoApplicationV1Alpha1Manifest#target_revision}
  */
  readonly targetRevision?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart: cdktf.stringToTerraform(struct!.chart),
    directory: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryToTerraform(struct!.directory),
    helm: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmToTerraform(struct!.helm),
    kustomize: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizeToTerraform(struct!.kustomize),
    path: cdktf.stringToTerraform(struct!.path),
    plugin: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginToTerraform(struct!.plugin),
    ref: cdktf.stringToTerraform(struct!.ref),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
    target_revision: cdktf.stringToTerraform(struct!.targetRevision),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart: {
      value: cdktf.stringToHclTerraform(struct!.chart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryToHclTerraform(struct!.directory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectory",
    },
    helm: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmToHclTerraform(struct!.helm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelm",
    },
    kustomize: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizeToHclTerraform(struct!.kustomize),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomize",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plugin: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginToHclTerraform(struct!.plugin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePlugin",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_url: {
      value: cdktf.stringToHclTerraform(struct!.repoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_revision: {
      value: cdktf.stringToHclTerraform(struct!.targetRevision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chart !== undefined) {
      hasAnyValues = true;
      internalValueResult.chart = this._chart;
    }
    if (this._directory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory?.internalValue;
    }
    if (this._helm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helm = this._helm?.internalValue;
    }
    if (this._kustomize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kustomize = this._kustomize?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._plugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugin = this._plugin?.internalValue;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._repoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoUrl = this._repoUrl;
    }
    if (this._targetRevision !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRevision = this._targetRevision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chart = undefined;
      this._directory.internalValue = undefined;
      this._helm.internalValue = undefined;
      this._kustomize.internalValue = undefined;
      this._path = undefined;
      this._plugin.internalValue = undefined;
      this._ref = undefined;
      this._repoUrl = undefined;
      this._targetRevision = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chart = value.chart;
      this._directory.internalValue = value.directory;
      this._helm.internalValue = value.helm;
      this._kustomize.internalValue = value.kustomize;
      this._path = value.path;
      this._plugin.internalValue = value.plugin;
      this._ref = value.ref;
      this._repoUrl = value.repoUrl;
      this._targetRevision = value.targetRevision;
    }
  }

  // chart - computed: false, optional: true, required: false
  private _chart?: string; 
  public get chart() {
    return this.getStringAttribute('chart');
  }
  public set chart(value: string) {
    this._chart = value;
  }
  public resetChart() {
    this._chart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart;
  }

  // directory - computed: false, optional: true, required: false
  private _directory = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceDirectory) {
    this._directory.internalValue = value;
  }
  public resetDirectory() {
    this._directory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory.internalValue;
  }

  // helm - computed: false, optional: true, required: false
  private _helm = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelmOutputReference(this, "helm");
  public get helm() {
    return this._helm;
  }
  public putHelm(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceHelm) {
    this._helm.internalValue = value;
  }
  public resetHelm() {
    this._helm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmInput() {
    return this._helm.internalValue;
  }

  // kustomize - computed: false, optional: true, required: false
  private _kustomize = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomizeOutputReference(this, "kustomize");
  public get kustomize() {
    return this._kustomize;
  }
  public putKustomize(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceKustomize) {
    this._kustomize.internalValue = value;
  }
  public resetKustomize() {
    this._kustomize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kustomizeInput() {
    return this._kustomize.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // plugin - computed: false, optional: true, required: false
  private _plugin = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePluginOutputReference(this, "plugin");
  public get plugin() {
    return this._plugin;
  }
  public putPlugin(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcePlugin) {
    this._plugin.internalValue = value;
  }
  public resetPlugin() {
    this._plugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin.internalValue;
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // repo_url - computed: false, optional: false, required: true
  private _repoUrl?: string; 
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
  public set repoUrl(value: string) {
    this._repoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoUrlInput() {
    return this._repoUrl;
  }

  // target_revision - computed: false, optional: true, required: false
  private _targetRevision?: string; 
  public get targetRevision() {
    return this.getStringAttribute('target_revision');
  }
  public set targetRevision(value: string) {
    this._targetRevision = value;
  }
  public resetTargetRevision() {
    this._targetRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRevisionInput() {
    return this._targetRevision;
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetExtVars {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#code DataK8SArgoprojIoApplicationV1Alpha1Manifest#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#value DataK8SArgoprojIoApplicationV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetExtVarsToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetExtVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.booleanToTerraform(struct!.code),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetExtVarsToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetExtVars | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.booleanToHclTerraform(struct!.code),
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetExtVarsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetExtVars | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetExtVars | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: boolean | cdktf.IResolvable; 
  public get code() {
    return this.getBooleanAttribute('code');
  }
  public set code(value: boolean | cdktf.IResolvable) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetExtVarsList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetExtVars[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetExtVarsOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetExtVarsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetTlas {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#code DataK8SArgoprojIoApplicationV1Alpha1Manifest#code}
  */
  readonly code?: boolean | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#value DataK8SArgoprojIoApplicationV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetTlasToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetTlas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    code: cdktf.booleanToTerraform(struct!.code),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetTlasToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetTlas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    code: {
      value: cdktf.booleanToHclTerraform(struct!.code),
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetTlasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetTlas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._code !== undefined) {
      hasAnyValues = true;
      internalValueResult.code = this._code;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetTlas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._code = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._code = value.code;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // code - computed: false, optional: true, required: false
  private _code?: boolean | cdktf.IResolvable; 
  public get code() {
    return this.getBooleanAttribute('code');
  }
  public set code(value: boolean | cdktf.IResolvable) {
    this._code = value;
  }
  public resetCode() {
    this._code = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get codeInput() {
    return this._code;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetTlasList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetTlas[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetTlasOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetTlasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnet {
  /**
  * ExtVars is a list of Jsonnet External Variables
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#ext_vars DataK8SArgoprojIoApplicationV1Alpha1Manifest#ext_vars}
  */
  readonly extVars?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetExtVars[] | cdktf.IResolvable;
  /**
  * Additional library search dirs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#libs DataK8SArgoprojIoApplicationV1Alpha1Manifest#libs}
  */
  readonly libs?: string[];
  /**
  * TLAS is a list of Jsonnet Top-level Arguments
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#tlas DataK8SArgoprojIoApplicationV1Alpha1Manifest#tlas}
  */
  readonly tlas?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetTlas[] | cdktf.IResolvable;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    ext_vars: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetExtVarsToTerraform, false)(struct!.extVars),
    libs: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.libs),
    tlas: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetTlasToTerraform, false)(struct!.tlas),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnet | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    ext_vars: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetExtVarsToHclTerraform, false)(struct!.extVars),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetExtVarsList",
    },
    libs: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.libs),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    tlas: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetTlasToHclTerraform, false)(struct!.tlas),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetTlasList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnet | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extVars?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.extVars = this._extVars?.internalValue;
    }
    if (this._libs !== undefined) {
      hasAnyValues = true;
      internalValueResult.libs = this._libs;
    }
    if (this._tlas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlas = this._tlas?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnet | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extVars.internalValue = undefined;
      this._libs = undefined;
      this._tlas.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extVars.internalValue = value.extVars;
      this._libs = value.libs;
      this._tlas.internalValue = value.tlas;
    }
  }

  // ext_vars - computed: false, optional: true, required: false
  private _extVars = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetExtVarsList(this, "ext_vars", false);
  public get extVars() {
    return this._extVars;
  }
  public putExtVars(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetExtVars[] | cdktf.IResolvable) {
    this._extVars.internalValue = value;
  }
  public resetExtVars() {
    this._extVars.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extVarsInput() {
    return this._extVars.internalValue;
  }

  // libs - computed: false, optional: true, required: false
  private _libs?: string[]; 
  public get libs() {
    return this.getListAttribute('libs');
  }
  public set libs(value: string[]) {
    this._libs = value;
  }
  public resetLibs() {
    this._libs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get libsInput() {
    return this._libs;
  }

  // tlas - computed: false, optional: true, required: false
  private _tlas = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetTlasList(this, "tlas", false);
  public get tlas() {
    return this._tlas;
  }
  public putTlas(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetTlas[] | cdktf.IResolvable) {
    this._tlas.internalValue = value;
  }
  public resetTlas() {
    this._tlas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tlasInput() {
    return this._tlas.internalValue;
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectory {
  /**
  * Exclude contains a glob pattern to match paths against that should be explicitly excluded from being used during manifest generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#exclude DataK8SArgoprojIoApplicationV1Alpha1Manifest#exclude}
  */
  readonly exclude?: string;
  /**
  * Include contains a glob pattern to match paths against that should be explicitly included during manifest generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#include DataK8SArgoprojIoApplicationV1Alpha1Manifest#include}
  */
  readonly include?: string;
  /**
  * Jsonnet holds options specific to Jsonnet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#jsonnet DataK8SArgoprojIoApplicationV1Alpha1Manifest#jsonnet}
  */
  readonly jsonnet?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnet;
  /**
  * Recurse specifies whether to scan a directory recursively for manifests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#recurse DataK8SArgoprojIoApplicationV1Alpha1Manifest#recurse}
  */
  readonly recurse?: boolean | cdktf.IResolvable;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    exclude: cdktf.stringToTerraform(struct!.exclude),
    include: cdktf.stringToTerraform(struct!.include),
    jsonnet: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetToTerraform(struct!.jsonnet),
    recurse: cdktf.booleanToTerraform(struct!.recurse),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectory | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    exclude: {
      value: cdktf.stringToHclTerraform(struct!.exclude),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    include: {
      value: cdktf.stringToHclTerraform(struct!.include),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    jsonnet: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetToHclTerraform(struct!.jsonnet),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnet",
    },
    recurse: {
      value: cdktf.booleanToHclTerraform(struct!.recurse),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectory | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
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
    if (this._jsonnet?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.jsonnet = this._jsonnet?.internalValue;
    }
    if (this._recurse !== undefined) {
      hasAnyValues = true;
      internalValueResult.recurse = this._recurse;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectory | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._exclude = undefined;
      this._include = undefined;
      this._jsonnet.internalValue = undefined;
      this._recurse = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._exclude = value.exclude;
      this._include = value.include;
      this._jsonnet.internalValue = value.jsonnet;
      this._recurse = value.recurse;
    }
  }

  // exclude - computed: false, optional: true, required: false
  private _exclude?: string; 
  public get exclude() {
    return this.getStringAttribute('exclude');
  }
  public set exclude(value: string) {
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
  private _include?: string; 
  public get include() {
    return this.getStringAttribute('include');
  }
  public set include(value: string) {
    this._include = value;
  }
  public resetInclude() {
    this._include = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get includeInput() {
    return this._include;
  }

  // jsonnet - computed: false, optional: true, required: false
  private _jsonnet = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnetOutputReference(this, "jsonnet");
  public get jsonnet() {
    return this._jsonnet;
  }
  public putJsonnet(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryJsonnet) {
    this._jsonnet.internalValue = value;
  }
  public resetJsonnet() {
    this._jsonnet.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get jsonnetInput() {
    return this._jsonnet.internalValue;
  }

  // recurse - computed: false, optional: true, required: false
  private _recurse?: boolean | cdktf.IResolvable; 
  public get recurse() {
    return this.getBooleanAttribute('recurse');
  }
  public set recurse(value: boolean | cdktf.IResolvable) {
    this._recurse = value;
  }
  public resetRecurse() {
    this._recurse = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get recurseInput() {
    return this._recurse;
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmFileParameters {
  /**
  * Name is the name of the Helm parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Path is the path to the file containing the values for the Helm parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#path DataK8SArgoprojIoApplicationV1Alpha1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmFileParametersToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmFileParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmFileParametersToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmFileParameters | cdktf.IResolvable): any {
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
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmFileParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmFileParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmFileParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._path = value.path;
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

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmFileParametersList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmFileParameters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmFileParametersOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmFileParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmParameters {
  /**
  * ForceString determines whether to tell Helm to interpret booleans and numbers as strings
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#force_string DataK8SArgoprojIoApplicationV1Alpha1Manifest#force_string}
  */
  readonly forceString?: boolean | cdktf.IResolvable;
  /**
  * Name is the name of the Helm parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Value is the value for the Helm parameter
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#value DataK8SArgoprojIoApplicationV1Alpha1Manifest#value}
  */
  readonly value?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmParametersToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    force_string: cdktf.booleanToTerraform(struct!.forceString),
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmParametersToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    force_string: {
      value: cdktf.booleanToHclTerraform(struct!.forceString),
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forceString !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceString = this._forceString;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forceString = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forceString = value.forceString;
      this._name = value.name;
      this._value = value.value;
    }
  }

  // force_string - computed: false, optional: true, required: false
  private _forceString?: boolean | cdktf.IResolvable; 
  public get forceString() {
    return this.getBooleanAttribute('force_string');
  }
  public set forceString(value: boolean | cdktf.IResolvable) {
    this._forceString = value;
  }
  public resetForceString() {
    this._forceString = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceStringInput() {
    return this._forceString;
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmParametersList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmParameters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmParametersOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelm {
  /**
  * FileParameters are file parameters to the helm template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#file_parameters DataK8SArgoprojIoApplicationV1Alpha1Manifest#file_parameters}
  */
  readonly fileParameters?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmFileParameters[] | cdktf.IResolvable;
  /**
  * IgnoreMissingValueFiles prevents helm template from failing when valueFiles do not exist locally by not appending them to helm template --values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#ignore_missing_value_files DataK8SArgoprojIoApplicationV1Alpha1Manifest#ignore_missing_value_files}
  */
  readonly ignoreMissingValueFiles?: boolean | cdktf.IResolvable;
  /**
  * Parameters is a list of Helm parameters which are passed to the helm template command upon manifest generation
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#parameters DataK8SArgoprojIoApplicationV1Alpha1Manifest#parameters}
  */
  readonly parameters?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmParameters[] | cdktf.IResolvable;
  /**
  * PassCredentials pass credentials to all domains (Helm's --pass-credentials)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#pass_credentials DataK8SArgoprojIoApplicationV1Alpha1Manifest#pass_credentials}
  */
  readonly passCredentials?: boolean | cdktf.IResolvable;
  /**
  * ReleaseName is the Helm release name to use. If omitted it will use the application name
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#release_name DataK8SArgoprojIoApplicationV1Alpha1Manifest#release_name}
  */
  readonly releaseName?: string;
  /**
  * SkipCrds skips custom resource definition installation step (Helm's --skip-crds)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#skip_crds DataK8SArgoprojIoApplicationV1Alpha1Manifest#skip_crds}
  */
  readonly skipCrds?: boolean | cdktf.IResolvable;
  /**
  * ValuesFiles is a list of Helm value files to use when generating a template
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#value_files DataK8SArgoprojIoApplicationV1Alpha1Manifest#value_files}
  */
  readonly valueFiles?: string[];
  /**
  * Values specifies Helm values to be passed to helm template, typically defined as a block. ValuesObject takes precedence over Values, so use one or the other.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#values DataK8SArgoprojIoApplicationV1Alpha1Manifest#values}
  */
  readonly values?: string;
  /**
  * ValuesObject specifies Helm values to be passed to helm template, defined as a map. This takes precedence over Values.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#values_object DataK8SArgoprojIoApplicationV1Alpha1Manifest#values_object}
  */
  readonly valuesObject?: { [key: string]: string };
  /**
  * Version is the Helm version to use for templating ('3')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#version DataK8SArgoprojIoApplicationV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    file_parameters: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmFileParametersToTerraform, false)(struct!.fileParameters),
    ignore_missing_value_files: cdktf.booleanToTerraform(struct!.ignoreMissingValueFiles),
    parameters: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmParametersToTerraform, false)(struct!.parameters),
    pass_credentials: cdktf.booleanToTerraform(struct!.passCredentials),
    release_name: cdktf.stringToTerraform(struct!.releaseName),
    skip_crds: cdktf.booleanToTerraform(struct!.skipCrds),
    value_files: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.valueFiles),
    values: cdktf.stringToTerraform(struct!.values),
    values_object: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.valuesObject),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelm | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    file_parameters: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmFileParametersToHclTerraform, false)(struct!.fileParameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmFileParametersList",
    },
    ignore_missing_value_files: {
      value: cdktf.booleanToHclTerraform(struct!.ignoreMissingValueFiles),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    parameters: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmParametersList",
    },
    pass_credentials: {
      value: cdktf.booleanToHclTerraform(struct!.passCredentials),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    release_name: {
      value: cdktf.stringToHclTerraform(struct!.releaseName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    skip_crds: {
      value: cdktf.booleanToHclTerraform(struct!.skipCrds),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    value_files: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.valueFiles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    values: {
      value: cdktf.stringToHclTerraform(struct!.values),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    values_object: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.valuesObject),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelm | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fileParameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.fileParameters = this._fileParameters?.internalValue;
    }
    if (this._ignoreMissingValueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreMissingValueFiles = this._ignoreMissingValueFiles;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    if (this._passCredentials !== undefined) {
      hasAnyValues = true;
      internalValueResult.passCredentials = this._passCredentials;
    }
    if (this._releaseName !== undefined) {
      hasAnyValues = true;
      internalValueResult.releaseName = this._releaseName;
    }
    if (this._skipCrds !== undefined) {
      hasAnyValues = true;
      internalValueResult.skipCrds = this._skipCrds;
    }
    if (this._valueFiles !== undefined) {
      hasAnyValues = true;
      internalValueResult.valueFiles = this._valueFiles;
    }
    if (this._values !== undefined) {
      hasAnyValues = true;
      internalValueResult.values = this._values;
    }
    if (this._valuesObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.valuesObject = this._valuesObject;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelm | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fileParameters.internalValue = undefined;
      this._ignoreMissingValueFiles = undefined;
      this._parameters.internalValue = undefined;
      this._passCredentials = undefined;
      this._releaseName = undefined;
      this._skipCrds = undefined;
      this._valueFiles = undefined;
      this._values = undefined;
      this._valuesObject = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fileParameters.internalValue = value.fileParameters;
      this._ignoreMissingValueFiles = value.ignoreMissingValueFiles;
      this._parameters.internalValue = value.parameters;
      this._passCredentials = value.passCredentials;
      this._releaseName = value.releaseName;
      this._skipCrds = value.skipCrds;
      this._valueFiles = value.valueFiles;
      this._values = value.values;
      this._valuesObject = value.valuesObject;
      this._version = value.version;
    }
  }

  // file_parameters - computed: false, optional: true, required: false
  private _fileParameters = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmFileParametersList(this, "file_parameters", false);
  public get fileParameters() {
    return this._fileParameters;
  }
  public putFileParameters(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmFileParameters[] | cdktf.IResolvable) {
    this._fileParameters.internalValue = value;
  }
  public resetFileParameters() {
    this._fileParameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fileParametersInput() {
    return this._fileParameters.internalValue;
  }

  // ignore_missing_value_files - computed: false, optional: true, required: false
  private _ignoreMissingValueFiles?: boolean | cdktf.IResolvable; 
  public get ignoreMissingValueFiles() {
    return this.getBooleanAttribute('ignore_missing_value_files');
  }
  public set ignoreMissingValueFiles(value: boolean | cdktf.IResolvable) {
    this._ignoreMissingValueFiles = value;
  }
  public resetIgnoreMissingValueFiles() {
    this._ignoreMissingValueFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreMissingValueFilesInput() {
    return this._ignoreMissingValueFiles;
  }

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmParameters[] | cdktf.IResolvable) {
    this._parameters.internalValue = value;
  }
  public resetParameters() {
    this._parameters.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get parametersInput() {
    return this._parameters.internalValue;
  }

  // pass_credentials - computed: false, optional: true, required: false
  private _passCredentials?: boolean | cdktf.IResolvable; 
  public get passCredentials() {
    return this.getBooleanAttribute('pass_credentials');
  }
  public set passCredentials(value: boolean | cdktf.IResolvable) {
    this._passCredentials = value;
  }
  public resetPassCredentials() {
    this._passCredentials = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get passCredentialsInput() {
    return this._passCredentials;
  }

  // release_name - computed: false, optional: true, required: false
  private _releaseName?: string; 
  public get releaseName() {
    return this.getStringAttribute('release_name');
  }
  public set releaseName(value: string) {
    this._releaseName = value;
  }
  public resetReleaseName() {
    this._releaseName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get releaseNameInput() {
    return this._releaseName;
  }

  // skip_crds - computed: false, optional: true, required: false
  private _skipCrds?: boolean | cdktf.IResolvable; 
  public get skipCrds() {
    return this.getBooleanAttribute('skip_crds');
  }
  public set skipCrds(value: boolean | cdktf.IResolvable) {
    this._skipCrds = value;
  }
  public resetSkipCrds() {
    this._skipCrds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get skipCrdsInput() {
    return this._skipCrds;
  }

  // value_files - computed: false, optional: true, required: false
  private _valueFiles?: string[]; 
  public get valueFiles() {
    return this.getListAttribute('value_files');
  }
  public set valueFiles(value: string[]) {
    this._valueFiles = value;
  }
  public resetValueFiles() {
    this._valueFiles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valueFilesInput() {
    return this._valueFiles;
  }

  // values - computed: false, optional: true, required: false
  private _values?: string; 
  public get values() {
    return this.getStringAttribute('values');
  }
  public set values(value: string) {
    this._values = value;
  }
  public resetValues() {
    this._values = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesInput() {
    return this._values;
  }

  // values_object - computed: false, optional: true, required: false
  private _valuesObject?: { [key: string]: string }; 
  public get valuesObject() {
    return this.getStringMapAttribute('values_object');
  }
  public set valuesObject(value: { [key: string]: string }) {
    this._valuesObject = value;
  }
  public resetValuesObject() {
    this._valuesObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get valuesObjectInput() {
    return this._valuesObject;
  }

  // version - computed: false, optional: true, required: false
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
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatchesTarget {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#annotation_selector DataK8SArgoprojIoApplicationV1Alpha1Manifest#annotation_selector}
  */
  readonly annotationSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#group DataK8SArgoprojIoApplicationV1Alpha1Manifest#group}
  */
  readonly group?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#kind DataK8SArgoprojIoApplicationV1Alpha1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#label_selector DataK8SArgoprojIoApplicationV1Alpha1Manifest#label_selector}
  */
  readonly labelSelector?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#namespace DataK8SArgoprojIoApplicationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#version DataK8SArgoprojIoApplicationV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatchesTargetToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatchesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotation_selector: cdktf.stringToTerraform(struct!.annotationSelector),
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    label_selector: cdktf.stringToTerraform(struct!.labelSelector),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatchesTargetToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatchesTarget | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    annotation_selector: {
      value: cdktf.stringToHclTerraform(struct!.annotationSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    group: {
      value: cdktf.stringToHclTerraform(struct!.group),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    kind: {
      value: cdktf.stringToHclTerraform(struct!.kind),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    label_selector: {
      value: cdktf.stringToHclTerraform(struct!.labelSelector),
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
    namespace: {
      value: cdktf.stringToHclTerraform(struct!.namespace),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatchesTargetOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatchesTarget | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._annotationSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.annotationSelector = this._annotationSelector;
    }
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._kind !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind;
    }
    if (this._labelSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelSelector = this._labelSelector;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatchesTarget | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotationSelector = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._labelSelector = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._annotationSelector = value.annotationSelector;
      this._group = value.group;
      this._kind = value.kind;
      this._labelSelector = value.labelSelector;
      this._name = value.name;
      this._namespace = value.namespace;
      this._version = value.version;
    }
  }

  // annotation_selector - computed: false, optional: true, required: false
  private _annotationSelector?: string; 
  public get annotationSelector() {
    return this.getStringAttribute('annotation_selector');
  }
  public set annotationSelector(value: string) {
    this._annotationSelector = value;
  }
  public resetAnnotationSelector() {
    this._annotationSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get annotationSelectorInput() {
    return this._annotationSelector;
  }

  // group - computed: false, optional: true, required: false
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  public resetGroup() {
    this._group = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // kind - computed: false, optional: true, required: false
  private _kind?: string; 
  public get kind() {
    return this.getStringAttribute('kind');
  }
  public set kind(value: string) {
    this._kind = value;
  }
  public resetKind() {
    this._kind = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind;
  }

  // label_selector - computed: false, optional: true, required: false
  private _labelSelector?: string; 
  public get labelSelector() {
    return this.getStringAttribute('label_selector');
  }
  public set labelSelector(value: string) {
    this._labelSelector = value;
  }
  public resetLabelSelector() {
    this._labelSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelSelectorInput() {
    return this._labelSelector;
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

  // namespace - computed: false, optional: true, required: false
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

  // version - computed: false, optional: true, required: false
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
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatches {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#options DataK8SArgoprojIoApplicationV1Alpha1Manifest#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#patch DataK8SArgoprojIoApplicationV1Alpha1Manifest#patch}
  */
  readonly patch?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#path DataK8SArgoprojIoApplicationV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#target DataK8SArgoprojIoApplicationV1Alpha1Manifest#target}
  */
  readonly target?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatchesTarget;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatchesToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    patch: cdktf.stringToTerraform(struct!.patch),
    path: cdktf.stringToTerraform(struct!.path),
    target: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatchesTargetToTerraform(struct!.target),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatchesToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatches | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    patch: {
      value: cdktf.stringToHclTerraform(struct!.patch),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatchesTargetToHclTerraform(struct!.target),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatchesTarget",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatchesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatches | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._patch !== undefined) {
      hasAnyValues = true;
      internalValueResult.patch = this._patch;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._target?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.target = this._target?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatches | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._options = undefined;
      this._patch = undefined;
      this._path = undefined;
      this._target.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._options = value.options;
      this._patch = value.patch;
      this._path = value.path;
      this._target.internalValue = value.target;
    }
  }

  // options - computed: false, optional: true, required: false
  private _options?: { [key: string]: string }; 
  public get options() {
    return this.getStringMapAttribute('options');
  }
  public set options(value: { [key: string]: string }) {
    this._options = value;
  }
  public resetOptions() {
    this._options = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get optionsInput() {
    return this._options;
  }

  // patch - computed: false, optional: true, required: false
  private _patch?: string; 
  public get patch() {
    return this.getStringAttribute('patch');
  }
  public set patch(value: string) {
    this._patch = value;
  }
  public resetPatch() {
    this._patch = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchInput() {
    return this._patch;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // target - computed: false, optional: true, required: false
  private _target = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatchesTargetOutputReference(this, "target");
  public get target() {
    return this._target;
  }
  public putTarget(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatchesTarget) {
    this._target.internalValue = value;
  }
  public resetTarget() {
    this._target.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetInput() {
    return this._target.internalValue;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatchesList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatches[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatchesOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatchesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizeReplicas {
  /**
  * Number of replicas
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#count DataK8SArgoprojIoApplicationV1Alpha1Manifest#count}
  */
  readonly count: string;
  /**
  * Name of Deployment or StatefulSet
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizeReplicasToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizeReplicas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    count: cdktf.stringToTerraform(struct!.count),
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizeReplicasToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizeReplicas | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    count: {
      value: cdktf.stringToHclTerraform(struct!.count),
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizeReplicasOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizeReplicas | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._count !== undefined) {
      hasAnyValues = true;
      internalValueResult.count = this._count;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizeReplicas | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._count = undefined;
      this._name = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._count = value.count;
      this._name = value.name;
    }
  }

  // count - computed: false, optional: false, required: true
  private _count?: string; 
  public get count() {
    return this.getStringAttribute('count');
  }
  public set count(value: string) {
    this._count = value;
  }
  // Temporarily expose input value. Use with caution.
  public get countInput() {
    return this._count;
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizeReplicasList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizeReplicas[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizeReplicasOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizeReplicasOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomize {
  /**
  * CommonAnnotations is a list of additional annotations to add to rendered manifests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#common_annotations DataK8SArgoprojIoApplicationV1Alpha1Manifest#common_annotations}
  */
  readonly commonAnnotations?: { [key: string]: string };
  /**
  * CommonAnnotationsEnvsubst specifies whether to apply env variables substitution for annotation values
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#common_annotations_envsubst DataK8SArgoprojIoApplicationV1Alpha1Manifest#common_annotations_envsubst}
  */
  readonly commonAnnotationsEnvsubst?: boolean | cdktf.IResolvable;
  /**
  * CommonLabels is a list of additional labels to add to rendered manifests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#common_labels DataK8SArgoprojIoApplicationV1Alpha1Manifest#common_labels}
  */
  readonly commonLabels?: { [key: string]: string };
  /**
  * Components specifies a list of kustomize components to add to the kustomization before building
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#components DataK8SArgoprojIoApplicationV1Alpha1Manifest#components}
  */
  readonly components?: string[];
  /**
  * ForceCommonAnnotations specifies whether to force applying common annotations to resources for Kustomize apps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#force_common_annotations DataK8SArgoprojIoApplicationV1Alpha1Manifest#force_common_annotations}
  */
  readonly forceCommonAnnotations?: boolean | cdktf.IResolvable;
  /**
  * ForceCommonLabels specifies whether to force applying common labels to resources for Kustomize apps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#force_common_labels DataK8SArgoprojIoApplicationV1Alpha1Manifest#force_common_labels}
  */
  readonly forceCommonLabels?: boolean | cdktf.IResolvable;
  /**
  * Images is a list of Kustomize image override specifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#images DataK8SArgoprojIoApplicationV1Alpha1Manifest#images}
  */
  readonly images?: string[];
  /**
  * LabelWithoutSelector specifies whether to apply common labels to resource selectors or not
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#label_without_selector DataK8SArgoprojIoApplicationV1Alpha1Manifest#label_without_selector}
  */
  readonly labelWithoutSelector?: boolean | cdktf.IResolvable;
  /**
  * NamePrefix is a prefix appended to resources for Kustomize apps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name_prefix DataK8SArgoprojIoApplicationV1Alpha1Manifest#name_prefix}
  */
  readonly namePrefix?: string;
  /**
  * NameSuffix is a suffix appended to resources for Kustomize apps
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name_suffix DataK8SArgoprojIoApplicationV1Alpha1Manifest#name_suffix}
  */
  readonly nameSuffix?: string;
  /**
  * Namespace sets the namespace that Kustomize adds to all resources
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#namespace DataK8SArgoprojIoApplicationV1Alpha1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Patches is a list of Kustomize patches
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#patches DataK8SArgoprojIoApplicationV1Alpha1Manifest#patches}
  */
  readonly patches?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatches[] | cdktf.IResolvable;
  /**
  * Replicas is a list of Kustomize Replicas override specifications
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#replicas DataK8SArgoprojIoApplicationV1Alpha1Manifest#replicas}
  */
  readonly replicas?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizeReplicas[] | cdktf.IResolvable;
  /**
  * Version controls which version of Kustomize to use for rendering manifests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#version DataK8SArgoprojIoApplicationV1Alpha1Manifest#version}
  */
  readonly version?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizeToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    common_annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonAnnotations),
    common_annotations_envsubst: cdktf.booleanToTerraform(struct!.commonAnnotationsEnvsubst),
    common_labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.commonLabels),
    components: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.components),
    force_common_annotations: cdktf.booleanToTerraform(struct!.forceCommonAnnotations),
    force_common_labels: cdktf.booleanToTerraform(struct!.forceCommonLabels),
    images: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.images),
    label_without_selector: cdktf.booleanToTerraform(struct!.labelWithoutSelector),
    name_prefix: cdktf.stringToTerraform(struct!.namePrefix),
    name_suffix: cdktf.stringToTerraform(struct!.nameSuffix),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    patches: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatchesToTerraform, false)(struct!.patches),
    replicas: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizeReplicasToTerraform, false)(struct!.replicas),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizeToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomize | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    common_annotations: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonAnnotations),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    common_annotations_envsubst: {
      value: cdktf.booleanToHclTerraform(struct!.commonAnnotationsEnvsubst),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    common_labels: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.commonLabels),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    components: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.components),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    force_common_annotations: {
      value: cdktf.booleanToHclTerraform(struct!.forceCommonAnnotations),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_common_labels: {
      value: cdktf.booleanToHclTerraform(struct!.forceCommonLabels),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    images: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.images),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    label_without_selector: {
      value: cdktf.booleanToHclTerraform(struct!.labelWithoutSelector),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    name_prefix: {
      value: cdktf.stringToHclTerraform(struct!.namePrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    name_suffix: {
      value: cdktf.stringToHclTerraform(struct!.nameSuffix),
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
    patches: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatchesToHclTerraform, false)(struct!.patches),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatchesList",
    },
    replicas: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizeReplicasToHclTerraform, false)(struct!.replicas),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizeReplicasList",
    },
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizeOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomize | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._commonAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonAnnotations = this._commonAnnotations;
    }
    if (this._commonAnnotationsEnvsubst !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonAnnotationsEnvsubst = this._commonAnnotationsEnvsubst;
    }
    if (this._commonLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.commonLabels = this._commonLabels;
    }
    if (this._components !== undefined) {
      hasAnyValues = true;
      internalValueResult.components = this._components;
    }
    if (this._forceCommonAnnotations !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceCommonAnnotations = this._forceCommonAnnotations;
    }
    if (this._forceCommonLabels !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceCommonLabels = this._forceCommonLabels;
    }
    if (this._images !== undefined) {
      hasAnyValues = true;
      internalValueResult.images = this._images;
    }
    if (this._labelWithoutSelector !== undefined) {
      hasAnyValues = true;
      internalValueResult.labelWithoutSelector = this._labelWithoutSelector;
    }
    if (this._namePrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.namePrefix = this._namePrefix;
    }
    if (this._nameSuffix !== undefined) {
      hasAnyValues = true;
      internalValueResult.nameSuffix = this._nameSuffix;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._patches?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.patches = this._patches?.internalValue;
    }
    if (this._replicas?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas?.internalValue;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomize | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._commonAnnotations = undefined;
      this._commonAnnotationsEnvsubst = undefined;
      this._commonLabels = undefined;
      this._components = undefined;
      this._forceCommonAnnotations = undefined;
      this._forceCommonLabels = undefined;
      this._images = undefined;
      this._labelWithoutSelector = undefined;
      this._namePrefix = undefined;
      this._nameSuffix = undefined;
      this._namespace = undefined;
      this._patches.internalValue = undefined;
      this._replicas.internalValue = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._commonAnnotations = value.commonAnnotations;
      this._commonAnnotationsEnvsubst = value.commonAnnotationsEnvsubst;
      this._commonLabels = value.commonLabels;
      this._components = value.components;
      this._forceCommonAnnotations = value.forceCommonAnnotations;
      this._forceCommonLabels = value.forceCommonLabels;
      this._images = value.images;
      this._labelWithoutSelector = value.labelWithoutSelector;
      this._namePrefix = value.namePrefix;
      this._nameSuffix = value.nameSuffix;
      this._namespace = value.namespace;
      this._patches.internalValue = value.patches;
      this._replicas.internalValue = value.replicas;
      this._version = value.version;
    }
  }

  // common_annotations - computed: false, optional: true, required: false
  private _commonAnnotations?: { [key: string]: string }; 
  public get commonAnnotations() {
    return this.getStringMapAttribute('common_annotations');
  }
  public set commonAnnotations(value: { [key: string]: string }) {
    this._commonAnnotations = value;
  }
  public resetCommonAnnotations() {
    this._commonAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonAnnotationsInput() {
    return this._commonAnnotations;
  }

  // common_annotations_envsubst - computed: false, optional: true, required: false
  private _commonAnnotationsEnvsubst?: boolean | cdktf.IResolvable; 
  public get commonAnnotationsEnvsubst() {
    return this.getBooleanAttribute('common_annotations_envsubst');
  }
  public set commonAnnotationsEnvsubst(value: boolean | cdktf.IResolvable) {
    this._commonAnnotationsEnvsubst = value;
  }
  public resetCommonAnnotationsEnvsubst() {
    this._commonAnnotationsEnvsubst = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonAnnotationsEnvsubstInput() {
    return this._commonAnnotationsEnvsubst;
  }

  // common_labels - computed: false, optional: true, required: false
  private _commonLabels?: { [key: string]: string }; 
  public get commonLabels() {
    return this.getStringMapAttribute('common_labels');
  }
  public set commonLabels(value: { [key: string]: string }) {
    this._commonLabels = value;
  }
  public resetCommonLabels() {
    this._commonLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get commonLabelsInput() {
    return this._commonLabels;
  }

  // components - computed: false, optional: true, required: false
  private _components?: string[]; 
  public get components() {
    return this.getListAttribute('components');
  }
  public set components(value: string[]) {
    this._components = value;
  }
  public resetComponents() {
    this._components = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get componentsInput() {
    return this._components;
  }

  // force_common_annotations - computed: false, optional: true, required: false
  private _forceCommonAnnotations?: boolean | cdktf.IResolvable; 
  public get forceCommonAnnotations() {
    return this.getBooleanAttribute('force_common_annotations');
  }
  public set forceCommonAnnotations(value: boolean | cdktf.IResolvable) {
    this._forceCommonAnnotations = value;
  }
  public resetForceCommonAnnotations() {
    this._forceCommonAnnotations = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceCommonAnnotationsInput() {
    return this._forceCommonAnnotations;
  }

  // force_common_labels - computed: false, optional: true, required: false
  private _forceCommonLabels?: boolean | cdktf.IResolvable; 
  public get forceCommonLabels() {
    return this.getBooleanAttribute('force_common_labels');
  }
  public set forceCommonLabels(value: boolean | cdktf.IResolvable) {
    this._forceCommonLabels = value;
  }
  public resetForceCommonLabels() {
    this._forceCommonLabels = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceCommonLabelsInput() {
    return this._forceCommonLabels;
  }

  // images - computed: false, optional: true, required: false
  private _images?: string[]; 
  public get images() {
    return this.getListAttribute('images');
  }
  public set images(value: string[]) {
    this._images = value;
  }
  public resetImages() {
    this._images = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imagesInput() {
    return this._images;
  }

  // label_without_selector - computed: false, optional: true, required: false
  private _labelWithoutSelector?: boolean | cdktf.IResolvable; 
  public get labelWithoutSelector() {
    return this.getBooleanAttribute('label_without_selector');
  }
  public set labelWithoutSelector(value: boolean | cdktf.IResolvable) {
    this._labelWithoutSelector = value;
  }
  public resetLabelWithoutSelector() {
    this._labelWithoutSelector = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get labelWithoutSelectorInput() {
    return this._labelWithoutSelector;
  }

  // name_prefix - computed: false, optional: true, required: false
  private _namePrefix?: string; 
  public get namePrefix() {
    return this.getStringAttribute('name_prefix');
  }
  public set namePrefix(value: string) {
    this._namePrefix = value;
  }
  public resetNamePrefix() {
    this._namePrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get namePrefixInput() {
    return this._namePrefix;
  }

  // name_suffix - computed: false, optional: true, required: false
  private _nameSuffix?: string; 
  public get nameSuffix() {
    return this.getStringAttribute('name_suffix');
  }
  public set nameSuffix(value: string) {
    this._nameSuffix = value;
  }
  public resetNameSuffix() {
    this._nameSuffix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nameSuffixInput() {
    return this._nameSuffix;
  }

  // namespace - computed: false, optional: true, required: false
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

  // patches - computed: false, optional: true, required: false
  private _patches = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatchesList(this, "patches", false);
  public get patches() {
    return this._patches;
  }
  public putPatches(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizePatches[] | cdktf.IResolvable) {
    this._patches.internalValue = value;
  }
  public resetPatches() {
    this._patches.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get patchesInput() {
    return this._patches.internalValue;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizeReplicasList(this, "replicas", false);
  public get replicas() {
    return this._replicas;
  }
  public putReplicas(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizeReplicas[] | cdktf.IResolvable) {
    this._replicas.internalValue = value;
  }
  public resetReplicas() {
    this._replicas.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas.internalValue;
  }

  // version - computed: false, optional: true, required: false
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
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginEnv {
  /**
  * Name is the name of the variable, usually expressed in uppercase
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Value is the value of the variable
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#value DataK8SArgoprojIoApplicationV1Alpha1Manifest#value}
  */
  readonly value: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginEnvToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginEnv | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    value: cdktf.stringToTerraform(struct!.value),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginEnvToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginEnv | cdktf.IResolvable): any {
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

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginEnvOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginEnv | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._value !== undefined) {
      hasAnyValues = true;
      internalValueResult.value = this._value;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginEnv | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._value = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._value = value.value;
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

  // value - computed: false, optional: false, required: true
  private _value?: string; 
  public get value() {
    return this.getStringAttribute('value');
  }
  public set value(value: string) {
    this._value = value;
  }
  // Temporarily expose input value. Use with caution.
  public get valueInput() {
    return this._value;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginEnvList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginEnv[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginEnvOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginEnvOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginParameters {
  /**
  * Array is the value of an array type parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#array DataK8SArgoprojIoApplicationV1Alpha1Manifest#array}
  */
  readonly array?: string[];
  /**
  * Map is the value of a map type parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#map DataK8SArgoprojIoApplicationV1Alpha1Manifest#map}
  */
  readonly map?: { [key: string]: string };
  /**
  * Name is the name identifying a parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * String_ is the value of a string type parameter.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#string DataK8SArgoprojIoApplicationV1Alpha1Manifest#string}
  */
  readonly string?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginParametersToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    array: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.array),
    map: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.map),
    name: cdktf.stringToTerraform(struct!.name),
    string: cdktf.stringToTerraform(struct!.string),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginParametersToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginParameters | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    array: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.array),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    map: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.map),
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
    string: {
      value: cdktf.stringToHclTerraform(struct!.string),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginParametersOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginParameters | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._array !== undefined) {
      hasAnyValues = true;
      internalValueResult.array = this._array;
    }
    if (this._map !== undefined) {
      hasAnyValues = true;
      internalValueResult.map = this._map;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._string !== undefined) {
      hasAnyValues = true;
      internalValueResult.string = this._string;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginParameters | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._array = undefined;
      this._map = undefined;
      this._name = undefined;
      this._string = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._array = value.array;
      this._map = value.map;
      this._name = value.name;
      this._string = value.string;
    }
  }

  // array - computed: false, optional: true, required: false
  private _array?: string[]; 
  public get array() {
    return this.getListAttribute('array');
  }
  public set array(value: string[]) {
    this._array = value;
  }
  public resetArray() {
    this._array = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get arrayInput() {
    return this._array;
  }

  // map - computed: false, optional: true, required: false
  private _map?: { [key: string]: string }; 
  public get map() {
    return this.getStringMapAttribute('map');
  }
  public set map(value: { [key: string]: string }) {
    this._map = value;
  }
  public resetMap() {
    this._map = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mapInput() {
    return this._map;
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

  // string - computed: false, optional: true, required: false
  private _string?: string; 
  public get string() {
    return this.getStringAttribute('string');
  }
  public set string(value: string) {
    this._string = value;
  }
  public resetString() {
    this._string = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get stringInput() {
    return this._string;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginParametersList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginParameters[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginParametersOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginParametersOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPlugin {
  /**
  * Env is a list of environment variable entries
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#env DataK8SArgoprojIoApplicationV1Alpha1Manifest#env}
  */
  readonly env?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginEnv[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#name DataK8SArgoprojIoApplicationV1Alpha1Manifest#name}
  */
  readonly name?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#parameters DataK8SArgoprojIoApplicationV1Alpha1Manifest#parameters}
  */
  readonly parameters?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginParameters[] | cdktf.IResolvable;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    env: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginEnvToTerraform, false)(struct!.env),
    name: cdktf.stringToTerraform(struct!.name),
    parameters: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginParametersToTerraform, false)(struct!.parameters),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPlugin | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    env: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginEnvToHclTerraform, false)(struct!.env),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginEnvList",
    },
    name: {
      value: cdktf.stringToHclTerraform(struct!.name),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    parameters: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginParametersToHclTerraform, false)(struct!.parameters),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginParametersList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPlugin | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._env?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.env = this._env?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._parameters?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.parameters = this._parameters?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPlugin | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._env.internalValue = undefined;
      this._name = undefined;
      this._parameters.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._env.internalValue = value.env;
      this._name = value.name;
      this._parameters.internalValue = value.parameters;
    }
  }

  // env - computed: false, optional: true, required: false
  private _env = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginEnvList(this, "env", false);
  public get env() {
    return this._env;
  }
  public putEnv(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginEnv[] | cdktf.IResolvable) {
    this._env.internalValue = value;
  }
  public resetEnv() {
    this._env.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get envInput() {
    return this._env.internalValue;
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

  // parameters - computed: false, optional: true, required: false
  private _parameters = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginParametersList(this, "parameters", false);
  public get parameters() {
    return this._parameters;
  }
  public putParameters(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginParameters[] | cdktf.IResolvable) {
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
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSources {
  /**
  * Chart is a Helm chart name, and must be specified for applications sourced from a Helm repo.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#chart DataK8SArgoprojIoApplicationV1Alpha1Manifest#chart}
  */
  readonly chart?: string;
  /**
  * Directory holds path/directory specific options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#directory DataK8SArgoprojIoApplicationV1Alpha1Manifest#directory}
  */
  readonly directory?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectory;
  /**
  * Helm holds helm specific options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#helm DataK8SArgoprojIoApplicationV1Alpha1Manifest#helm}
  */
  readonly helm?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelm;
  /**
  * Kustomize holds kustomize specific options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#kustomize DataK8SArgoprojIoApplicationV1Alpha1Manifest#kustomize}
  */
  readonly kustomize?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomize;
  /**
  * Path is a directory path within the Git repository, and is only valid for applications sourced from Git.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#path DataK8SArgoprojIoApplicationV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Plugin holds config management plugin specific options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#plugin DataK8SArgoprojIoApplicationV1Alpha1Manifest#plugin}
  */
  readonly plugin?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPlugin;
  /**
  * Ref is reference to another source within sources field. This field will not be used if used with a 'source' tag.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#ref DataK8SArgoprojIoApplicationV1Alpha1Manifest#ref}
  */
  readonly ref?: string;
  /**
  * RepoURL is the URL to the repository (Git or Helm) that contains the application manifests
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#repo_url DataK8SArgoprojIoApplicationV1Alpha1Manifest#repo_url}
  */
  readonly repoUrl: string;
  /**
  * TargetRevision defines the revision of the source to sync the application to. In case of Git, this can be commit, tag, or branch. If omitted, will equal to HEAD. In case of Helm, this is a semver tag for the Chart's version.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#target_revision DataK8SArgoprojIoApplicationV1Alpha1Manifest#target_revision}
  */
  readonly targetRevision?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    chart: cdktf.stringToTerraform(struct!.chart),
    directory: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryToTerraform(struct!.directory),
    helm: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmToTerraform(struct!.helm),
    kustomize: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizeToTerraform(struct!.kustomize),
    path: cdktf.stringToTerraform(struct!.path),
    plugin: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginToTerraform(struct!.plugin),
    ref: cdktf.stringToTerraform(struct!.ref),
    repo_url: cdktf.stringToTerraform(struct!.repoUrl),
    target_revision: cdktf.stringToTerraform(struct!.targetRevision),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    chart: {
      value: cdktf.stringToHclTerraform(struct!.chart),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    directory: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryToHclTerraform(struct!.directory),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectory",
    },
    helm: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmToHclTerraform(struct!.helm),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelm",
    },
    kustomize: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizeToHclTerraform(struct!.kustomize),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomize",
    },
    path: {
      value: cdktf.stringToHclTerraform(struct!.path),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    plugin: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginToHclTerraform(struct!.plugin),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPlugin",
    },
    ref: {
      value: cdktf.stringToHclTerraform(struct!.ref),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    repo_url: {
      value: cdktf.stringToHclTerraform(struct!.repoUrl),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    target_revision: {
      value: cdktf.stringToHclTerraform(struct!.targetRevision),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._chart !== undefined) {
      hasAnyValues = true;
      internalValueResult.chart = this._chart;
    }
    if (this._directory?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.directory = this._directory?.internalValue;
    }
    if (this._helm?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.helm = this._helm?.internalValue;
    }
    if (this._kustomize?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kustomize = this._kustomize?.internalValue;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._plugin?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.plugin = this._plugin?.internalValue;
    }
    if (this._ref !== undefined) {
      hasAnyValues = true;
      internalValueResult.ref = this._ref;
    }
    if (this._repoUrl !== undefined) {
      hasAnyValues = true;
      internalValueResult.repoUrl = this._repoUrl;
    }
    if (this._targetRevision !== undefined) {
      hasAnyValues = true;
      internalValueResult.targetRevision = this._targetRevision;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._chart = undefined;
      this._directory.internalValue = undefined;
      this._helm.internalValue = undefined;
      this._kustomize.internalValue = undefined;
      this._path = undefined;
      this._plugin.internalValue = undefined;
      this._ref = undefined;
      this._repoUrl = undefined;
      this._targetRevision = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._chart = value.chart;
      this._directory.internalValue = value.directory;
      this._helm.internalValue = value.helm;
      this._kustomize.internalValue = value.kustomize;
      this._path = value.path;
      this._plugin.internalValue = value.plugin;
      this._ref = value.ref;
      this._repoUrl = value.repoUrl;
      this._targetRevision = value.targetRevision;
    }
  }

  // chart - computed: false, optional: true, required: false
  private _chart?: string; 
  public get chart() {
    return this.getStringAttribute('chart');
  }
  public set chart(value: string) {
    this._chart = value;
  }
  public resetChart() {
    this._chart = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get chartInput() {
    return this._chart;
  }

  // directory - computed: false, optional: true, required: false
  private _directory = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectoryOutputReference(this, "directory");
  public get directory() {
    return this._directory;
  }
  public putDirectory(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesDirectory) {
    this._directory.internalValue = value;
  }
  public resetDirectory() {
    this._directory.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get directoryInput() {
    return this._directory.internalValue;
  }

  // helm - computed: false, optional: true, required: false
  private _helm = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelmOutputReference(this, "helm");
  public get helm() {
    return this._helm;
  }
  public putHelm(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesHelm) {
    this._helm.internalValue = value;
  }
  public resetHelm() {
    this._helm.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get helmInput() {
    return this._helm.internalValue;
  }

  // kustomize - computed: false, optional: true, required: false
  private _kustomize = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomizeOutputReference(this, "kustomize");
  public get kustomize() {
    return this._kustomize;
  }
  public putKustomize(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesKustomize) {
    this._kustomize.internalValue = value;
  }
  public resetKustomize() {
    this._kustomize.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kustomizeInput() {
    return this._kustomize.internalValue;
  }

  // path - computed: false, optional: true, required: false
  private _path?: string; 
  public get path() {
    return this.getStringAttribute('path');
  }
  public set path(value: string) {
    this._path = value;
  }
  public resetPath() {
    this._path = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pathInput() {
    return this._path;
  }

  // plugin - computed: false, optional: true, required: false
  private _plugin = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPluginOutputReference(this, "plugin");
  public get plugin() {
    return this._plugin;
  }
  public putPlugin(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesPlugin) {
    this._plugin.internalValue = value;
  }
  public resetPlugin() {
    this._plugin.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pluginInput() {
    return this._plugin.internalValue;
  }

  // ref - computed: false, optional: true, required: false
  private _ref?: string; 
  public get ref() {
    return this.getStringAttribute('ref');
  }
  public set ref(value: string) {
    this._ref = value;
  }
  public resetRef() {
    this._ref = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get refInput() {
    return this._ref;
  }

  // repo_url - computed: false, optional: false, required: true
  private _repoUrl?: string; 
  public get repoUrl() {
    return this.getStringAttribute('repo_url');
  }
  public set repoUrl(value: string) {
    this._repoUrl = value;
  }
  // Temporarily expose input value. Use with caution.
  public get repoUrlInput() {
    return this._repoUrl;
  }

  // target_revision - computed: false, optional: true, required: false
  private _targetRevision?: string; 
  public get targetRevision() {
    return this.getStringAttribute('target_revision');
  }
  public set targetRevision(value: string) {
    this._targetRevision = value;
  }
  public resetTargetRevision() {
    this._targetRevision = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get targetRevisionInput() {
    return this._targetRevision;
  }
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesList extends cdktf.ComplexList {
  public internalValue? : DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSources[] | cdktf.IResolvable

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
  public get(index: number): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesOutputReference {
    return new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyAutomated {
  /**
  * AllowEmpty allows apps have zero live resources (default: false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#allow_empty DataK8SArgoprojIoApplicationV1Alpha1Manifest#allow_empty}
  */
  readonly allowEmpty?: boolean | cdktf.IResolvable;
  /**
  * Prune specifies whether to delete resources from the cluster that are not found in the sources anymore as part of automated sync (default: false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#prune DataK8SArgoprojIoApplicationV1Alpha1Manifest#prune}
  */
  readonly prune?: boolean | cdktf.IResolvable;
  /**
  * SelfHeal specifies whether to revert resources back to their desired state upon modification in the cluster (default: false)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#self_heal DataK8SArgoprojIoApplicationV1Alpha1Manifest#self_heal}
  */
  readonly selfHeal?: boolean | cdktf.IResolvable;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyAutomatedToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyAutomated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allow_empty: cdktf.booleanToTerraform(struct!.allowEmpty),
    prune: cdktf.booleanToTerraform(struct!.prune),
    self_heal: cdktf.booleanToTerraform(struct!.selfHeal),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyAutomatedToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyAutomated | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    allow_empty: {
      value: cdktf.booleanToHclTerraform(struct!.allowEmpty),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    prune: {
      value: cdktf.booleanToHclTerraform(struct!.prune),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    self_heal: {
      value: cdktf.booleanToHclTerraform(struct!.selfHeal),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyAutomatedOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyAutomated | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._allowEmpty !== undefined) {
      hasAnyValues = true;
      internalValueResult.allowEmpty = this._allowEmpty;
    }
    if (this._prune !== undefined) {
      hasAnyValues = true;
      internalValueResult.prune = this._prune;
    }
    if (this._selfHeal !== undefined) {
      hasAnyValues = true;
      internalValueResult.selfHeal = this._selfHeal;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyAutomated | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._allowEmpty = undefined;
      this._prune = undefined;
      this._selfHeal = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._allowEmpty = value.allowEmpty;
      this._prune = value.prune;
      this._selfHeal = value.selfHeal;
    }
  }

  // allow_empty - computed: false, optional: true, required: false
  private _allowEmpty?: boolean | cdktf.IResolvable; 
  public get allowEmpty() {
    return this.getBooleanAttribute('allow_empty');
  }
  public set allowEmpty(value: boolean | cdktf.IResolvable) {
    this._allowEmpty = value;
  }
  public resetAllowEmpty() {
    this._allowEmpty = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get allowEmptyInput() {
    return this._allowEmpty;
  }

  // prune - computed: false, optional: true, required: false
  private _prune?: boolean | cdktf.IResolvable; 
  public get prune() {
    return this.getBooleanAttribute('prune');
  }
  public set prune(value: boolean | cdktf.IResolvable) {
    this._prune = value;
  }
  public resetPrune() {
    this._prune = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get pruneInput() {
    return this._prune;
  }

  // self_heal - computed: false, optional: true, required: false
  private _selfHeal?: boolean | cdktf.IResolvable; 
  public get selfHeal() {
    return this.getBooleanAttribute('self_heal');
  }
  public set selfHeal(value: boolean | cdktf.IResolvable) {
    this._selfHeal = value;
  }
  public resetSelfHeal() {
    this._selfHeal = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get selfHealInput() {
    return this._selfHeal;
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyManagedNamespaceMetadata {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#annotations DataK8SArgoprojIoApplicationV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#labels DataK8SArgoprojIoApplicationV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyManagedNamespaceMetadataToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyManagedNamespaceMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyManagedNamespaceMetadataToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyManagedNamespaceMetadata | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyManagedNamespaceMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyManagedNamespaceMetadata | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyManagedNamespaceMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._annotations = undefined;
      this._labels = undefined;
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
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetryBackoff {
  /**
  * Duration is the amount to back off. Default unit is seconds, but could also be a duration (e.g. '2m', '1h')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#duration DataK8SArgoprojIoApplicationV1Alpha1Manifest#duration}
  */
  readonly duration?: string;
  /**
  * Factor is a factor to multiply the base duration after each failed retry
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#factor DataK8SArgoprojIoApplicationV1Alpha1Manifest#factor}
  */
  readonly factor?: number;
  /**
  * MaxDuration is the maximum amount of time allowed for the backoff strategy
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#max_duration DataK8SArgoprojIoApplicationV1Alpha1Manifest#max_duration}
  */
  readonly maxDuration?: string;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetryBackoffToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetryBackoff | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    duration: cdktf.stringToTerraform(struct!.duration),
    factor: cdktf.numberToTerraform(struct!.factor),
    max_duration: cdktf.stringToTerraform(struct!.maxDuration),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetryBackoffToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetryBackoff | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    duration: {
      value: cdktf.stringToHclTerraform(struct!.duration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    factor: {
      value: cdktf.numberToHclTerraform(struct!.factor),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    max_duration: {
      value: cdktf.stringToHclTerraform(struct!.maxDuration),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetryBackoffOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetryBackoff | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._duration !== undefined) {
      hasAnyValues = true;
      internalValueResult.duration = this._duration;
    }
    if (this._factor !== undefined) {
      hasAnyValues = true;
      internalValueResult.factor = this._factor;
    }
    if (this._maxDuration !== undefined) {
      hasAnyValues = true;
      internalValueResult.maxDuration = this._maxDuration;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetryBackoff | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._duration = undefined;
      this._factor = undefined;
      this._maxDuration = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._duration = value.duration;
      this._factor = value.factor;
      this._maxDuration = value.maxDuration;
    }
  }

  // duration - computed: false, optional: true, required: false
  private _duration?: string; 
  public get duration() {
    return this.getStringAttribute('duration');
  }
  public set duration(value: string) {
    this._duration = value;
  }
  public resetDuration() {
    this._duration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get durationInput() {
    return this._duration;
  }

  // factor - computed: false, optional: true, required: false
  private _factor?: number; 
  public get factor() {
    return this.getNumberAttribute('factor');
  }
  public set factor(value: number) {
    this._factor = value;
  }
  public resetFactor() {
    this._factor = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get factorInput() {
    return this._factor;
  }

  // max_duration - computed: false, optional: true, required: false
  private _maxDuration?: string; 
  public get maxDuration() {
    return this.getStringAttribute('max_duration');
  }
  public set maxDuration(value: string) {
    this._maxDuration = value;
  }
  public resetMaxDuration() {
    this._maxDuration = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get maxDurationInput() {
    return this._maxDuration;
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetry {
  /**
  * Backoff controls how to backoff on subsequent retries of failed syncs
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#backoff DataK8SArgoprojIoApplicationV1Alpha1Manifest#backoff}
  */
  readonly backoff?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetryBackoff;
  /**
  * Limit is the maximum number of attempts for retrying a failed sync. If set to 0, no retries will be performed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#limit DataK8SArgoprojIoApplicationV1Alpha1Manifest#limit}
  */
  readonly limit?: number;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetryToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    backoff: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetryBackoffToTerraform(struct!.backoff),
    limit: cdktf.numberToTerraform(struct!.limit),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetryToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetry | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    backoff: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetryBackoffToHclTerraform(struct!.backoff),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetryBackoff",
    },
    limit: {
      value: cdktf.numberToHclTerraform(struct!.limit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetryOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetry | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._backoff?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.backoff = this._backoff?.internalValue;
    }
    if (this._limit !== undefined) {
      hasAnyValues = true;
      internalValueResult.limit = this._limit;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetry | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._backoff.internalValue = undefined;
      this._limit = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._backoff.internalValue = value.backoff;
      this._limit = value.limit;
    }
  }

  // backoff - computed: false, optional: true, required: false
  private _backoff = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetryBackoffOutputReference(this, "backoff");
  public get backoff() {
    return this._backoff;
  }
  public putBackoff(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetryBackoff) {
    this._backoff.internalValue = value;
  }
  public resetBackoff() {
    this._backoff.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get backoffInput() {
    return this._backoff.internalValue;
  }

  // limit - computed: false, optional: true, required: false
  private _limit?: number; 
  public get limit() {
    return this.getNumberAttribute('limit');
  }
  public set limit(value: number) {
    this._limit = value;
  }
  public resetLimit() {
    this._limit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitInput() {
    return this._limit;
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicy {
  /**
  * Automated will keep an application synced to the target revision
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#automated DataK8SArgoprojIoApplicationV1Alpha1Manifest#automated}
  */
  readonly automated?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyAutomated;
  /**
  * ManagedNamespaceMetadata controls metadata in the given namespace (if CreateNamespace=true)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#managed_namespace_metadata DataK8SArgoprojIoApplicationV1Alpha1Manifest#managed_namespace_metadata}
  */
  readonly managedNamespaceMetadata?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyManagedNamespaceMetadata;
  /**
  * Retry controls failed sync retry behavior
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#retry DataK8SArgoprojIoApplicationV1Alpha1Manifest#retry}
  */
  readonly retry?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetry;
  /**
  * Options allow you to specify whole app sync-options
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#sync_options DataK8SArgoprojIoApplicationV1Alpha1Manifest#sync_options}
  */
  readonly syncOptions?: string[];
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    automated: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyAutomatedToTerraform(struct!.automated),
    managed_namespace_metadata: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyManagedNamespaceMetadataToTerraform(struct!.managedNamespaceMetadata),
    retry: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetryToTerraform(struct!.retry),
    sync_options: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.syncOptions),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicy | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    automated: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyAutomatedToHclTerraform(struct!.automated),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyAutomated",
    },
    managed_namespace_metadata: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyManagedNamespaceMetadataToHclTerraform(struct!.managedNamespaceMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyManagedNamespaceMetadata",
    },
    retry: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetryToHclTerraform(struct!.retry),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetry",
    },
    sync_options: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.syncOptions),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicy | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._automated?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.automated = this._automated?.internalValue;
    }
    if (this._managedNamespaceMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.managedNamespaceMetadata = this._managedNamespaceMetadata?.internalValue;
    }
    if (this._retry?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.retry = this._retry?.internalValue;
    }
    if (this._syncOptions !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncOptions = this._syncOptions;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicy | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._automated.internalValue = undefined;
      this._managedNamespaceMetadata.internalValue = undefined;
      this._retry.internalValue = undefined;
      this._syncOptions = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._automated.internalValue = value.automated;
      this._managedNamespaceMetadata.internalValue = value.managedNamespaceMetadata;
      this._retry.internalValue = value.retry;
      this._syncOptions = value.syncOptions;
    }
  }

  // automated - computed: false, optional: true, required: false
  private _automated = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyAutomatedOutputReference(this, "automated");
  public get automated() {
    return this._automated;
  }
  public putAutomated(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyAutomated) {
    this._automated.internalValue = value;
  }
  public resetAutomated() {
    this._automated.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get automatedInput() {
    return this._automated.internalValue;
  }

  // managed_namespace_metadata - computed: false, optional: true, required: false
  private _managedNamespaceMetadata = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyManagedNamespaceMetadataOutputReference(this, "managed_namespace_metadata");
  public get managedNamespaceMetadata() {
    return this._managedNamespaceMetadata;
  }
  public putManagedNamespaceMetadata(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyManagedNamespaceMetadata) {
    this._managedNamespaceMetadata.internalValue = value;
  }
  public resetManagedNamespaceMetadata() {
    this._managedNamespaceMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get managedNamespaceMetadataInput() {
    return this._managedNamespaceMetadata.internalValue;
  }

  // retry - computed: false, optional: true, required: false
  private _retry = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetryOutputReference(this, "retry");
  public get retry() {
    return this._retry;
  }
  public putRetry(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyRetry) {
    this._retry.internalValue = value;
  }
  public resetRetry() {
    this._retry.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get retryInput() {
    return this._retry.internalValue;
  }

  // sync_options - computed: false, optional: true, required: false
  private _syncOptions?: string[]; 
  public get syncOptions() {
    return this.getListAttribute('sync_options');
  }
  public set syncOptions(value: string[]) {
    this._syncOptions = value;
  }
  public resetSyncOptions() {
    this._syncOptions = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncOptionsInput() {
    return this._syncOptions;
  }
}
export interface DataK8SArgoprojIoApplicationV1Alpha1ManifestSpec {
  /**
  * Destination is a reference to the target Kubernetes server and namespace
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#destination DataK8SArgoprojIoApplicationV1Alpha1Manifest#destination}
  */
  readonly destination: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecDestination;
  /**
  * IgnoreDifferences is a list of resources and their fields which should be ignored during comparison
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#ignore_differences DataK8SArgoprojIoApplicationV1Alpha1Manifest#ignore_differences}
  */
  readonly ignoreDifferences?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecIgnoreDifferences[] | cdktf.IResolvable;
  /**
  * Info contains a list of information (URLs, email addresses, and plain text) that relates to the application
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#info DataK8SArgoprojIoApplicationV1Alpha1Manifest#info}
  */
  readonly info?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecInfo[] | cdktf.IResolvable;
  /**
  * Project is a reference to the project this application belongs to. The empty string means that application belongs to the 'default' project.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#project DataK8SArgoprojIoApplicationV1Alpha1Manifest#project}
  */
  readonly project: string;
  /**
  * RevisionHistoryLimit limits the number of items kept in the application's revision history, which is used for informational purposes as well as for rollbacks to previous versions. This should only be changed in exceptional circumstances. Setting to zero will store no history. This will reduce storage used. Increasing will increase the space used to store the history, so we do not recommend increasing it. Default is 10.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#revision_history_limit DataK8SArgoprojIoApplicationV1Alpha1Manifest#revision_history_limit}
  */
  readonly revisionHistoryLimit?: number;
  /**
  * Source is a reference to the location of the application's manifests or chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#source DataK8SArgoprojIoApplicationV1Alpha1Manifest#source}
  */
  readonly source?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSource;
  /**
  * Sources is a reference to the location of the application's manifests or chart
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#sources DataK8SArgoprojIoApplicationV1Alpha1Manifest#sources}
  */
  readonly sources?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSources[] | cdktf.IResolvable;
  /**
  * SyncPolicy controls when and how a sync will be performed
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#sync_policy DataK8SArgoprojIoApplicationV1Alpha1Manifest#sync_policy}
  */
  readonly syncPolicy?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicy;
}

export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecToTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    destination: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecDestinationToTerraform(struct!.destination),
    ignore_differences: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecIgnoreDifferencesToTerraform, false)(struct!.ignoreDifferences),
    info: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecInfoToTerraform, false)(struct!.info),
    project: cdktf.stringToTerraform(struct!.project),
    revision_history_limit: cdktf.numberToTerraform(struct!.revisionHistoryLimit),
    source: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceToTerraform(struct!.source),
    sources: cdktf.listMapper(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesToTerraform, false)(struct!.sources),
    sync_policy: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyToTerraform(struct!.syncPolicy),
  }
}


export function dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    destination: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecDestinationToHclTerraform(struct!.destination),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecDestination",
    },
    ignore_differences: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecIgnoreDifferencesToHclTerraform, false)(struct!.ignoreDifferences),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecIgnoreDifferencesList",
    },
    info: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecInfoToHclTerraform, false)(struct!.info),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecInfoList",
    },
    project: {
      value: cdktf.stringToHclTerraform(struct!.project),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    revision_history_limit: {
      value: cdktf.numberToHclTerraform(struct!.revisionHistoryLimit),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    source: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceToHclTerraform(struct!.source),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSource",
    },
    sources: {
      value: cdktf.listMapperHcl(dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesToHclTerraform, false)(struct!.sources),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesList",
    },
    sync_policy: {
      value: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyToHclTerraform(struct!.syncPolicy),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicy",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SArgoprojIoApplicationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._destination?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.destination = this._destination?.internalValue;
    }
    if (this._ignoreDifferences?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.ignoreDifferences = this._ignoreDifferences?.internalValue;
    }
    if (this._info?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.info = this._info?.internalValue;
    }
    if (this._project !== undefined) {
      hasAnyValues = true;
      internalValueResult.project = this._project;
    }
    if (this._revisionHistoryLimit !== undefined) {
      hasAnyValues = true;
      internalValueResult.revisionHistoryLimit = this._revisionHistoryLimit;
    }
    if (this._source?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.source = this._source?.internalValue;
    }
    if (this._sources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sources = this._sources?.internalValue;
    }
    if (this._syncPolicy?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.syncPolicy = this._syncPolicy?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._destination.internalValue = undefined;
      this._ignoreDifferences.internalValue = undefined;
      this._info.internalValue = undefined;
      this._project = undefined;
      this._revisionHistoryLimit = undefined;
      this._source.internalValue = undefined;
      this._sources.internalValue = undefined;
      this._syncPolicy.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._destination.internalValue = value.destination;
      this._ignoreDifferences.internalValue = value.ignoreDifferences;
      this._info.internalValue = value.info;
      this._project = value.project;
      this._revisionHistoryLimit = value.revisionHistoryLimit;
      this._source.internalValue = value.source;
      this._sources.internalValue = value.sources;
      this._syncPolicy.internalValue = value.syncPolicy;
    }
  }

  // destination - computed: false, optional: false, required: true
  private _destination = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecDestinationOutputReference(this, "destination");
  public get destination() {
    return this._destination;
  }
  public putDestination(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecDestination) {
    this._destination.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get destinationInput() {
    return this._destination.internalValue;
  }

  // ignore_differences - computed: false, optional: true, required: false
  private _ignoreDifferences = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecIgnoreDifferencesList(this, "ignore_differences", false);
  public get ignoreDifferences() {
    return this._ignoreDifferences;
  }
  public putIgnoreDifferences(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecIgnoreDifferences[] | cdktf.IResolvable) {
    this._ignoreDifferences.internalValue = value;
  }
  public resetIgnoreDifferences() {
    this._ignoreDifferences.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get ignoreDifferencesInput() {
    return this._ignoreDifferences.internalValue;
  }

  // info - computed: false, optional: true, required: false
  private _info = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecInfoList(this, "info", false);
  public get info() {
    return this._info;
  }
  public putInfo(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecInfo[] | cdktf.IResolvable) {
    this._info.internalValue = value;
  }
  public resetInfo() {
    this._info.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get infoInput() {
    return this._info.internalValue;
  }

  // project - computed: false, optional: false, required: true
  private _project?: string; 
  public get project() {
    return this.getStringAttribute('project');
  }
  public set project(value: string) {
    this._project = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectInput() {
    return this._project;
  }

  // revision_history_limit - computed: false, optional: true, required: false
  private _revisionHistoryLimit?: number; 
  public get revisionHistoryLimit() {
    return this.getNumberAttribute('revision_history_limit');
  }
  public set revisionHistoryLimit(value: number) {
    this._revisionHistoryLimit = value;
  }
  public resetRevisionHistoryLimit() {
    this._revisionHistoryLimit = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get revisionHistoryLimitInput() {
    return this._revisionHistoryLimit;
  }

  // source - computed: false, optional: true, required: false
  private _source = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourceOutputReference(this, "source");
  public get source() {
    return this._source;
  }
  public putSource(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSource) {
    this._source.internalValue = value;
  }
  public resetSource() {
    this._source.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourceInput() {
    return this._source.internalValue;
  }

  // sources - computed: false, optional: true, required: false
  private _sources = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSourcesList(this, "sources", false);
  public get sources() {
    return this._sources;
  }
  public putSources(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSources[] | cdktf.IResolvable) {
    this._sources.internalValue = value;
  }
  public resetSources() {
    this._sources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sourcesInput() {
    return this._sources.internalValue;
  }

  // sync_policy - computed: false, optional: true, required: false
  private _syncPolicy = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicyOutputReference(this, "sync_policy");
  public get syncPolicy() {
    return this._syncPolicy;
  }
  public putSyncPolicy(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecSyncPolicy) {
    this._syncPolicy.internalValue = value;
  }
  public resetSyncPolicy() {
    this._syncPolicy.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get syncPolicyInput() {
    return this._syncPolicy.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest k8s_argoproj_io_application_v1alpha1_manifest}
*/
export class DataK8SArgoprojIoApplicationV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_argoproj_io_application_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SArgoprojIoApplicationV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SArgoprojIoApplicationV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SArgoprojIoApplicationV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SArgoprojIoApplicationV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_argoproj_io_application_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/argoproj_io_application_v1alpha1_manifest k8s_argoproj_io_application_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SArgoprojIoApplicationV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SArgoprojIoApplicationV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_argoproj_io_application_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.3'
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
    this._operation.internalValue = config.operation;
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SArgoprojIoApplicationV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // operation - computed: false, optional: true, required: false
  private _operation = new DataK8SArgoprojIoApplicationV1Alpha1ManifestOperationOutputReference(this, "operation");
  public get operation() {
    return this._operation;
  }
  public putOperation(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestOperation) {
    this._operation.internalValue = value;
  }
  public resetOperation() {
    this._operation.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SArgoprojIoApplicationV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SArgoprojIoApplicationV1Alpha1ManifestSpec) {
    this._spec.internalValue = value;
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
      metadata: dataK8SArgoprojIoApplicationV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      operation: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationToTerraform(this._operation.internalValue),
      spec: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SArgoprojIoApplicationV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestMetadata",
      },
      operation: {
        value: dataK8SArgoprojIoApplicationV1Alpha1ManifestOperationToHclTerraform(this._operation.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestOperation",
      },
      spec: {
        value: dataK8SArgoprojIoApplicationV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SArgoprojIoApplicationV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
