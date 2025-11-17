// https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_capsule_configuration_v1beta2_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_capsule_configuration_v1beta2_manifest#metadata DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2Manifest#metadata}
  */
  readonly metadata: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestMetadata;
  /**
  * CapsuleConfigurationSpec defines the Capsule configuration.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_capsule_configuration_v1beta2_manifest#spec DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2Manifest#spec}
  */
  readonly spec?: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpec;
}
export interface DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_capsule_configuration_v1beta2_manifest#annotations DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_capsule_configuration_v1beta2_manifest#labels DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_capsule_configuration_v1beta2_manifest#name DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2Manifest#name}
  */
  readonly name: string;
}

export function dataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestMetadataToTerraform(struct?: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestMetadataToHclTerraform(struct?: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenAnnotations {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_capsule_configuration_v1beta2_manifest#denied DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2Manifest#denied}
  */
  readonly denied?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_capsule_configuration_v1beta2_manifest#denied_regex DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2Manifest#denied_regex}
  */
  readonly deniedRegex?: string;
}

export function dataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenAnnotationsToTerraform(struct?: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    denied: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.denied),
    denied_regex: cdktf.stringToTerraform(struct!.deniedRegex),
  }
}


export function dataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenAnnotationsToHclTerraform(struct?: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenAnnotations | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    denied: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.denied),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    denied_regex: {
      value: cdktf.stringToHclTerraform(struct!.deniedRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenAnnotationsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenAnnotations | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denied !== undefined) {
      hasAnyValues = true;
      internalValueResult.denied = this._denied;
    }
    if (this._deniedRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedRegex = this._deniedRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenAnnotations | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._denied = undefined;
      this._deniedRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._denied = value.denied;
      this._deniedRegex = value.deniedRegex;
    }
  }

  // denied - computed: false, optional: true, required: false
  private _denied?: string[]; 
  public get denied() {
    return this.getListAttribute('denied');
  }
  public set denied(value: string[]) {
    this._denied = value;
  }
  public resetDenied() {
    this._denied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedInput() {
    return this._denied;
  }

  // denied_regex - computed: false, optional: true, required: false
  private _deniedRegex?: string; 
  public get deniedRegex() {
    return this.getStringAttribute('denied_regex');
  }
  public set deniedRegex(value: string) {
    this._deniedRegex = value;
  }
  public resetDeniedRegex() {
    this._deniedRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedRegexInput() {
    return this._deniedRegex;
  }
}
export interface DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenLabels {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_capsule_configuration_v1beta2_manifest#denied DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2Manifest#denied}
  */
  readonly denied?: string[];
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_capsule_configuration_v1beta2_manifest#denied_regex DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2Manifest#denied_regex}
  */
  readonly deniedRegex?: string;
}

export function dataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenLabelsToTerraform(struct?: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    denied: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.denied),
    denied_regex: cdktf.stringToTerraform(struct!.deniedRegex),
  }
}


export function dataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenLabelsToHclTerraform(struct?: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenLabels | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    denied: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.denied),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    denied_regex: {
      value: cdktf.stringToHclTerraform(struct!.deniedRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenLabelsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenLabels | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._denied !== undefined) {
      hasAnyValues = true;
      internalValueResult.denied = this._denied;
    }
    if (this._deniedRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.deniedRegex = this._deniedRegex;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenLabels | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._denied = undefined;
      this._deniedRegex = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._denied = value.denied;
      this._deniedRegex = value.deniedRegex;
    }
  }

  // denied - computed: false, optional: true, required: false
  private _denied?: string[]; 
  public get denied() {
    return this.getListAttribute('denied');
  }
  public set denied(value: string[]) {
    this._denied = value;
  }
  public resetDenied() {
    this._denied = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedInput() {
    return this._denied;
  }

  // denied_regex - computed: false, optional: true, required: false
  private _deniedRegex?: string; 
  public get deniedRegex() {
    return this.getStringAttribute('denied_regex');
  }
  public set deniedRegex(value: string) {
    this._deniedRegex = value;
  }
  public resetDeniedRegex() {
    this._deniedRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deniedRegexInput() {
    return this._deniedRegex;
  }
}
export interface DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadata {
  /**
  * Define the annotations that a Tenant Owner cannot set for their nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_capsule_configuration_v1beta2_manifest#forbidden_annotations DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2Manifest#forbidden_annotations}
  */
  readonly forbiddenAnnotations: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenAnnotations;
  /**
  * Define the labels that a Tenant Owner cannot set for their nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_capsule_configuration_v1beta2_manifest#forbidden_labels DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2Manifest#forbidden_labels}
  */
  readonly forbiddenLabels: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenLabels;
}

export function dataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataToTerraform(struct?: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    forbidden_annotations: dataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenAnnotationsToTerraform(struct!.forbiddenAnnotations),
    forbidden_labels: dataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenLabelsToTerraform(struct!.forbiddenLabels),
  }
}


export function dataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataToHclTerraform(struct?: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    forbidden_annotations: {
      value: dataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenAnnotationsToHclTerraform(struct!.forbiddenAnnotations),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenAnnotations",
    },
    forbidden_labels: {
      value: dataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenLabelsToHclTerraform(struct!.forbiddenLabels),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenLabels",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadata | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._forbiddenAnnotations?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forbiddenAnnotations = this._forbiddenAnnotations?.internalValue;
    }
    if (this._forbiddenLabels?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.forbiddenLabels = this._forbiddenLabels?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadata | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._forbiddenAnnotations.internalValue = undefined;
      this._forbiddenLabels.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._forbiddenAnnotations.internalValue = value.forbiddenAnnotations;
      this._forbiddenLabels.internalValue = value.forbiddenLabels;
    }
  }

  // forbidden_annotations - computed: false, optional: false, required: true
  private _forbiddenAnnotations = new DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenAnnotationsOutputReference(this, "forbidden_annotations");
  public get forbiddenAnnotations() {
    return this._forbiddenAnnotations;
  }
  public putForbiddenAnnotations(value: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenAnnotations) {
    this._forbiddenAnnotations.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenAnnotationsInput() {
    return this._forbiddenAnnotations.internalValue;
  }

  // forbidden_labels - computed: false, optional: false, required: true
  private _forbiddenLabels = new DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenLabelsOutputReference(this, "forbidden_labels");
  public get forbiddenLabels() {
    return this._forbiddenLabels;
  }
  public putForbiddenLabels(value: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataForbiddenLabels) {
    this._forbiddenLabels.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get forbiddenLabelsInput() {
    return this._forbiddenLabels.internalValue;
  }
}
export interface DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecOverrides {
  /**
  * Name of the MutatingWebhookConfiguration which contains the dynamic admission controller paths and resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_capsule_configuration_v1beta2_manifest#mutating_webhook_configuration_name DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2Manifest#mutating_webhook_configuration_name}
  */
  readonly mutatingWebhookConfigurationName: string;
  /**
  * Defines the Secret name used for the webhook server. Must be in the same Namespace where the Capsule Deployment is deployed.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_capsule_configuration_v1beta2_manifest#tls_secret_name DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2Manifest#tls_secret_name}
  */
  readonly tlsSecretName: string;
  /**
  * Name of the ValidatingWebhookConfiguration which contains the dynamic admission controller paths and resources.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_capsule_configuration_v1beta2_manifest#validating_webhook_configuration_name DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2Manifest#validating_webhook_configuration_name}
  */
  readonly validatingWebhookConfigurationName: string;
}

export function dataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecOverridesToTerraform(struct?: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mutating_webhook_configuration_name: cdktf.stringToTerraform(struct!.mutatingWebhookConfigurationName),
    tls_secret_name: cdktf.stringToTerraform(struct!.tlsSecretName),
    validating_webhook_configuration_name: cdktf.stringToTerraform(struct!.validatingWebhookConfigurationName),
  }
}


export function dataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecOverridesToHclTerraform(struct?: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecOverrides | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mutating_webhook_configuration_name: {
      value: cdktf.stringToHclTerraform(struct!.mutatingWebhookConfigurationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tls_secret_name: {
      value: cdktf.stringToHclTerraform(struct!.tlsSecretName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    validating_webhook_configuration_name: {
      value: cdktf.stringToHclTerraform(struct!.validatingWebhookConfigurationName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecOverridesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecOverrides | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mutatingWebhookConfigurationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.mutatingWebhookConfigurationName = this._mutatingWebhookConfigurationName;
    }
    if (this._tlsSecretName !== undefined) {
      hasAnyValues = true;
      internalValueResult.tlsSecretName = this._tlsSecretName;
    }
    if (this._validatingWebhookConfigurationName !== undefined) {
      hasAnyValues = true;
      internalValueResult.validatingWebhookConfigurationName = this._validatingWebhookConfigurationName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecOverrides | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mutatingWebhookConfigurationName = undefined;
      this._tlsSecretName = undefined;
      this._validatingWebhookConfigurationName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mutatingWebhookConfigurationName = value.mutatingWebhookConfigurationName;
      this._tlsSecretName = value.tlsSecretName;
      this._validatingWebhookConfigurationName = value.validatingWebhookConfigurationName;
    }
  }

  // mutating_webhook_configuration_name - computed: false, optional: false, required: true
  private _mutatingWebhookConfigurationName?: string; 
  public get mutatingWebhookConfigurationName() {
    return this.getStringAttribute('mutating_webhook_configuration_name');
  }
  public set mutatingWebhookConfigurationName(value: string) {
    this._mutatingWebhookConfigurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get mutatingWebhookConfigurationNameInput() {
    return this._mutatingWebhookConfigurationName;
  }

  // tls_secret_name - computed: false, optional: false, required: true
  private _tlsSecretName?: string; 
  public get tlsSecretName() {
    return this.getStringAttribute('tls_secret_name');
  }
  public set tlsSecretName(value: string) {
    this._tlsSecretName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get tlsSecretNameInput() {
    return this._tlsSecretName;
  }

  // validating_webhook_configuration_name - computed: false, optional: false, required: true
  private _validatingWebhookConfigurationName?: string; 
  public get validatingWebhookConfigurationName() {
    return this.getStringAttribute('validating_webhook_configuration_name');
  }
  public set validatingWebhookConfigurationName(value: string) {
    this._validatingWebhookConfigurationName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get validatingWebhookConfigurationNameInput() {
    return this._validatingWebhookConfigurationName;
  }
}
export interface DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpec {
  /**
  * Toggles the TLS reconciler, the controller that is able to generate CA and certificates for the webhooks when not using an already provided CA and certificate, or when these are managed externally with Vault, or cert-manager.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_capsule_configuration_v1beta2_manifest#enable_tls_reconciler DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2Manifest#enable_tls_reconciler}
  */
  readonly enableTlsReconciler: boolean | cdktf.IResolvable;
  /**
  * Enforces the Tenant owner, during Namespace creation, to name it using the selected Tenant name as prefix, separated by a dash. This is useful to avoid Namespace name collision in a public CaaS environment.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_capsule_configuration_v1beta2_manifest#force_tenant_prefix DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2Manifest#force_tenant_prefix}
  */
  readonly forceTenantPrefix?: boolean | cdktf.IResolvable;
  /**
  * Allows to set the forbidden metadata for the worker nodes that could be patched by a Tenant. This applies only if the Tenant has an active NodeSelector, and the Owner have right to patch their nodes.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_capsule_configuration_v1beta2_manifest#node_metadata DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2Manifest#node_metadata}
  */
  readonly nodeMetadata?: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadata;
  /**
  * Allows to set different name rather than the canonical one for the Capsule configuration objects, such as webhook secret or configurations.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_capsule_configuration_v1beta2_manifest#overrides DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2Manifest#overrides}
  */
  readonly overrides?: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecOverrides;
  /**
  * Disallow creation of namespaces, whose name matches this regexp
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_capsule_configuration_v1beta2_manifest#protected_namespace_regex DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2Manifest#protected_namespace_regex}
  */
  readonly protectedNamespaceRegex?: string;
  /**
  * Names of the groups for Capsule users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_capsule_configuration_v1beta2_manifest#user_groups DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2Manifest#user_groups}
  */
  readonly userGroups?: string[];
}

export function dataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecToTerraform(struct?: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    enable_tls_reconciler: cdktf.booleanToTerraform(struct!.enableTlsReconciler),
    force_tenant_prefix: cdktf.booleanToTerraform(struct!.forceTenantPrefix),
    node_metadata: dataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataToTerraform(struct!.nodeMetadata),
    overrides: dataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecOverridesToTerraform(struct!.overrides),
    protected_namespace_regex: cdktf.stringToTerraform(struct!.protectedNamespaceRegex),
    user_groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.userGroups),
  }
}


export function dataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecToHclTerraform(struct?: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    enable_tls_reconciler: {
      value: cdktf.booleanToHclTerraform(struct!.enableTlsReconciler),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    force_tenant_prefix: {
      value: cdktf.booleanToHclTerraform(struct!.forceTenantPrefix),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    node_metadata: {
      value: dataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataToHclTerraform(struct!.nodeMetadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadata",
    },
    overrides: {
      value: dataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecOverridesToHclTerraform(struct!.overrides),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecOverrides",
    },
    protected_namespace_regex: {
      value: cdktf.stringToHclTerraform(struct!.protectedNamespaceRegex),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.userGroups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._enableTlsReconciler !== undefined) {
      hasAnyValues = true;
      internalValueResult.enableTlsReconciler = this._enableTlsReconciler;
    }
    if (this._forceTenantPrefix !== undefined) {
      hasAnyValues = true;
      internalValueResult.forceTenantPrefix = this._forceTenantPrefix;
    }
    if (this._nodeMetadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeMetadata = this._nodeMetadata?.internalValue;
    }
    if (this._overrides?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.overrides = this._overrides?.internalValue;
    }
    if (this._protectedNamespaceRegex !== undefined) {
      hasAnyValues = true;
      internalValueResult.protectedNamespaceRegex = this._protectedNamespaceRegex;
    }
    if (this._userGroups !== undefined) {
      hasAnyValues = true;
      internalValueResult.userGroups = this._userGroups;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._enableTlsReconciler = undefined;
      this._forceTenantPrefix = undefined;
      this._nodeMetadata.internalValue = undefined;
      this._overrides.internalValue = undefined;
      this._protectedNamespaceRegex = undefined;
      this._userGroups = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._enableTlsReconciler = value.enableTlsReconciler;
      this._forceTenantPrefix = value.forceTenantPrefix;
      this._nodeMetadata.internalValue = value.nodeMetadata;
      this._overrides.internalValue = value.overrides;
      this._protectedNamespaceRegex = value.protectedNamespaceRegex;
      this._userGroups = value.userGroups;
    }
  }

  // enable_tls_reconciler - computed: false, optional: false, required: true
  private _enableTlsReconciler?: boolean | cdktf.IResolvable; 
  public get enableTlsReconciler() {
    return this.getBooleanAttribute('enable_tls_reconciler');
  }
  public set enableTlsReconciler(value: boolean | cdktf.IResolvable) {
    this._enableTlsReconciler = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enableTlsReconcilerInput() {
    return this._enableTlsReconciler;
  }

  // force_tenant_prefix - computed: false, optional: true, required: false
  private _forceTenantPrefix?: boolean | cdktf.IResolvable; 
  public get forceTenantPrefix() {
    return this.getBooleanAttribute('force_tenant_prefix');
  }
  public set forceTenantPrefix(value: boolean | cdktf.IResolvable) {
    this._forceTenantPrefix = value;
  }
  public resetForceTenantPrefix() {
    this._forceTenantPrefix = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get forceTenantPrefixInput() {
    return this._forceTenantPrefix;
  }

  // node_metadata - computed: false, optional: true, required: false
  private _nodeMetadata = new DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadataOutputReference(this, "node_metadata");
  public get nodeMetadata() {
    return this._nodeMetadata;
  }
  public putNodeMetadata(value: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecNodeMetadata) {
    this._nodeMetadata.internalValue = value;
  }
  public resetNodeMetadata() {
    this._nodeMetadata.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeMetadataInput() {
    return this._nodeMetadata.internalValue;
  }

  // overrides - computed: false, optional: true, required: false
  private _overrides = new DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecOverridesOutputReference(this, "overrides");
  public get overrides() {
    return this._overrides;
  }
  public putOverrides(value: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecOverrides) {
    this._overrides.internalValue = value;
  }
  public resetOverrides() {
    this._overrides.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get overridesInput() {
    return this._overrides.internalValue;
  }

  // protected_namespace_regex - computed: false, optional: true, required: false
  private _protectedNamespaceRegex?: string; 
  public get protectedNamespaceRegex() {
    return this.getStringAttribute('protected_namespace_regex');
  }
  public set protectedNamespaceRegex(value: string) {
    this._protectedNamespaceRegex = value;
  }
  public resetProtectedNamespaceRegex() {
    this._protectedNamespaceRegex = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get protectedNamespaceRegexInput() {
    return this._protectedNamespaceRegex;
  }

  // user_groups - computed: false, optional: true, required: false
  private _userGroups?: string[]; 
  public get userGroups() {
    return this.getListAttribute('user_groups');
  }
  public set userGroups(value: string[]) {
    this._userGroups = value;
  }
  public resetUserGroups() {
    this._userGroups = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userGroupsInput() {
    return this._userGroups;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_capsule_configuration_v1beta2_manifest k8s_capsule_clastix_io_capsule_configuration_v1beta2_manifest}
*/
export class DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_capsule_clastix_io_capsule_configuration_v1beta2_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2Manifest to import
  * @param importFromId The id of the existing DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_capsule_configuration_v1beta2_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_capsule_clastix_io_capsule_configuration_v1beta2_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.17/docs/data-sources/capsule_clastix_io_capsule_configuration_v1beta2_manifest k8s_capsule_clastix_io_capsule_configuration_v1beta2_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_capsule_clastix_io_capsule_configuration_v1beta2_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.17',
        providerVersionConstraint: '2025.11.17'
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
  private _metadata = new DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpec) {
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
      metadata: dataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestMetadata",
      },
      spec: {
        value: dataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SCapsuleClastixIoCapsuleConfigurationV1Beta2ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
