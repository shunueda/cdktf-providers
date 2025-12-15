// https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKyvernoIoUpdateRequestV1Beta1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#metadata DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#metadata}
  */
  readonly metadata: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestMetadata;
  /**
  * ResourceSpec is the information to identify the trigger resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#spec DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#spec}
  */
  readonly spec?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpec;
}
export interface DataK8SKyvernoIoUpdateRequestV1Beta1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#annotations DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#labels DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#name DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#namespace DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKyvernoIoUpdateRequestV1Beta1ManifestMetadataToTerraform(struct?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKyvernoIoUpdateRequestV1Beta1ManifestMetadataToHclTerraform(struct?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoUpdateRequestV1Beta1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoUpdateRequestV1Beta1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestKind {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#group DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#kind DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#version DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestKindToTerraform(struct?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestKind | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestKindToHclTerraform(struct?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestKind | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestKindOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestKind | cdktf.IResolvable | undefined {
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
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestKind | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._version = undefined;
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
      this._version = value.version;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestKind {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#group DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#kind DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#kind}
  */
  readonly kind: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#version DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestKindToTerraform(struct?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestKind | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    kind: cdktf.stringToTerraform(struct!.kind),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestKindToHclTerraform(struct?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestKind | cdktf.IResolvable): any {
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

export class DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestKindOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestKind | cdktf.IResolvable | undefined {
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
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestKind | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._kind = undefined;
      this._version = undefined;
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
      this._version = value.version;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
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

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#group DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#resource DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#resource}
  */
  readonly resource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#version DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestResourceToTerraform(struct?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    resource: cdktf.stringToTerraform(struct!.resource),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestResourceToHclTerraform(struct?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestResource | cdktf.IResolvable): any {
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
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
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

export class DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._resource = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._resource = value.resource;
      this._version = value.version;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestResource {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#group DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#group}
  */
  readonly group: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#resource DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#resource}
  */
  readonly resource: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#version DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#version}
  */
  readonly version: string;
}

export function dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestResourceToTerraform(struct?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    group: cdktf.stringToTerraform(struct!.group),
    resource: cdktf.stringToTerraform(struct!.resource),
    version: cdktf.stringToTerraform(struct!.version),
  }
}


export function dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestResourceToHclTerraform(struct?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestResource | cdktf.IResolvable): any {
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
    resource: {
      value: cdktf.stringToHclTerraform(struct!.resource),
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

export class DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._group !== undefined) {
      hasAnyValues = true;
      internalValueResult.group = this._group;
    }
    if (this._resource !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource;
    }
    if (this._version !== undefined) {
      hasAnyValues = true;
      internalValueResult.version = this._version;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._group = undefined;
      this._resource = undefined;
      this._version = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._group = value.group;
      this._resource = value.resource;
      this._version = value.version;
    }
  }

  // group - computed: false, optional: false, required: true
  private _group?: string; 
  public get group() {
    return this.getStringAttribute('group');
  }
  public set group(value: string) {
    this._group = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupInput() {
    return this._group;
  }

  // resource - computed: false, optional: false, required: true
  private _resource?: string; 
  public get resource() {
    return this.getStringAttribute('resource');
  }
  public set resource(value: string) {
    this._resource = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }
}
export interface DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestUserInfo {
  /**
  * Any additional information provided by the authenticator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#extra DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#extra}
  */
  readonly extra?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * The names of groups this user is a part of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#groups DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#groups}
  */
  readonly groups?: string[];
  /**
  * A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#uid DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#uid}
  */
  readonly uid?: string;
  /**
  * The name that uniquely identifies this user among all active users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#username DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestUserInfoToTerraform(struct?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestUserInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extra: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.extra),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    uid: cdktf.stringToTerraform(struct!.uid),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestUserInfoToHclTerraform(struct?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestUserInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extra: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.extra),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestUserInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestUserInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extra !== undefined) {
      hasAnyValues = true;
      internalValueResult.extra = this._extra;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestUserInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extra = undefined;
      this._groups = undefined;
      this._uid = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extra = value.extra;
      this._groups = value.groups;
      this._uid = value.uid;
      this._username = value.username;
    }
  }

  // extra - computed: false, optional: true, required: false
  private _extra?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get extra() {
    return this.interpolationForAttribute('extra');
  }
  public set extra(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._extra = value;
  }
  public resetExtra() {
    this._extra = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraInput() {
    return this._extra;
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

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
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
export interface DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequest {
  /**
  * DryRun indicates that modifications will definitely not be persisted for this request. Defaults to false.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#dry_run DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#dry_run}
  */
  readonly dryRun?: boolean | cdktf.IResolvable;
  /**
  * Kind is the fully-qualified type of object being submitted (for example, v1.Pod or autoscaling.v1.Scale)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#kind DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#kind}
  */
  readonly kind: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestKind;
  /**
  * Name is the name of the object as presented in the request. On a CREATE operation, the client may omit name and rely on the server to generate the name. If that is the case, this field will contain an empty string.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#name DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace is the namespace associated with the request (if any).
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#namespace DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * Object is the object from the incoming request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#object DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#object}
  */
  readonly object?: { [key: string]: string };
  /**
  * OldObject is the existing object. Only populated for DELETE and UPDATE requests.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#old_object DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#old_object}
  */
  readonly oldObject?: { [key: string]: string };
  /**
  * Operation is the operation being performed. This may be different than the operation requested. e.g. a patch can result in either a CREATE or UPDATE Operation.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#operation DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#operation}
  */
  readonly operation: string;
  /**
  * Options is the operation option structure of the operation being performed. e.g. 'meta.k8s.io/v1.DeleteOptions' or 'meta.k8s.io/v1.CreateOptions'. This may be different than the options the caller provided. e.g. for a patch request the performed Operation might be a CREATE, in which case the Options will a 'meta.k8s.io/v1.CreateOptions' even though the caller provided 'meta.k8s.io/v1.PatchOptions'.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#options DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#options}
  */
  readonly options?: { [key: string]: string };
  /**
  * RequestKind is the fully-qualified type of the original API request (for example, v1.Pod or autoscaling.v1.Scale). If this is specified and differs from the value in 'kind', an equivalent match and conversion was performed. For example, if deployments can be modified via apps/v1 and apps/v1beta1, and a webhook registered a rule of 'apiGroups:['apps'], apiVersions:['v1'], resources: ['deployments']' and 'matchPolicy: Equivalent', an API request to apps/v1beta1 deployments would be converted and sent to the webhook with 'kind: {group:'apps', version:'v1', kind:'Deployment'}' (matching the rule the webhook registered for), and 'requestKind: {group:'apps', version:'v1beta1', kind:'Deployment'}' (indicating the kind of the original API request). See documentation for the 'matchPolicy' field in the webhook configuration type for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#request_kind DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#request_kind}
  */
  readonly requestKind?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestKind;
  /**
  * RequestResource is the fully-qualified resource of the original API request (for example, v1.pods). If this is specified and differs from the value in 'resource', an equivalent match and conversion was performed. For example, if deployments can be modified via apps/v1 and apps/v1beta1, and a webhook registered a rule of 'apiGroups:['apps'], apiVersions:['v1'], resources: ['deployments']' and 'matchPolicy: Equivalent', an API request to apps/v1beta1 deployments would be converted and sent to the webhook with 'resource: {group:'apps', version:'v1', resource:'deployments'}' (matching the resource the webhook registered for), and 'requestResource: {group:'apps', version:'v1beta1', resource:'deployments'}' (indicating the resource of the original API request). See documentation for the 'matchPolicy' field in the webhook configuration type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#request_resource DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#request_resource}
  */
  readonly requestResource?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestResource;
  /**
  * RequestSubResource is the name of the subresource of the original API request, if any (for example, 'status' or 'scale') If this is specified and differs from the value in 'subResource', an equivalent match and conversion was performed. See documentation for the 'matchPolicy' field in the webhook configuration type.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#request_sub_resource DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#request_sub_resource}
  */
  readonly requestSubResource?: string;
  /**
  * Resource is the fully-qualified resource being requested (for example, v1.pods)
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#resource DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#resource}
  */
  readonly resource: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestResource;
  /**
  * SubResource is the subresource being requested, if any (for example, 'status' or 'scale')
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#sub_resource DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#sub_resource}
  */
  readonly subResource?: string;
  /**
  * UID is an identifier for the individual request/response. It allows us to distinguish instances of requests which are otherwise identical (parallel requests, requests when earlier requests did not modify etc) The UID is meant to track the round trip (request/response) between the KAS and the WebHook, not the user request. It is suitable for correlating log entries between the webhook and apiserver, for either auditing or debugging.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#uid DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#uid}
  */
  readonly uid: string;
  /**
  * UserInfo is information about the requesting user
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#user_info DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#user_info}
  */
  readonly userInfo: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestUserInfo;
}

export function dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestToTerraform(struct?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequest | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    dry_run: cdktf.booleanToTerraform(struct!.dryRun),
    kind: dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestKindToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    object: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.object),
    old_object: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.oldObject),
    operation: cdktf.stringToTerraform(struct!.operation),
    options: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.options),
    request_kind: dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestKindToTerraform(struct!.requestKind),
    request_resource: dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestResourceToTerraform(struct!.requestResource),
    request_sub_resource: cdktf.stringToTerraform(struct!.requestSubResource),
    resource: dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestResourceToTerraform(struct!.resource),
    sub_resource: cdktf.stringToTerraform(struct!.subResource),
    uid: cdktf.stringToTerraform(struct!.uid),
    user_info: dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestUserInfoToTerraform(struct!.userInfo),
  }
}


export function dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestToHclTerraform(struct?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequest | cdktf.IResolvable): any {
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
    kind: {
      value: dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestKindToHclTerraform(struct!.kind),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestKind",
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
    object: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.object),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    old_object: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.oldObject),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    options: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.options),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    request_kind: {
      value: dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestKindToHclTerraform(struct!.requestKind),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestKind",
    },
    request_resource: {
      value: dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestResourceToHclTerraform(struct!.requestResource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestResource",
    },
    request_sub_resource: {
      value: cdktf.stringToHclTerraform(struct!.requestSubResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestResource",
    },
    sub_resource: {
      value: cdktf.stringToHclTerraform(struct!.subResource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    user_info: {
      value: dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestUserInfoToHclTerraform(struct!.userInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestUserInfo",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequest | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._dryRun !== undefined) {
      hasAnyValues = true;
      internalValueResult.dryRun = this._dryRun;
    }
    if (this._kind?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kind = this._kind?.internalValue;
    }
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._namespace !== undefined) {
      hasAnyValues = true;
      internalValueResult.namespace = this._namespace;
    }
    if (this._object !== undefined) {
      hasAnyValues = true;
      internalValueResult.object = this._object;
    }
    if (this._oldObject !== undefined) {
      hasAnyValues = true;
      internalValueResult.oldObject = this._oldObject;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    if (this._options !== undefined) {
      hasAnyValues = true;
      internalValueResult.options = this._options;
    }
    if (this._requestKind?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestKind = this._requestKind?.internalValue;
    }
    if (this._requestResource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestResource = this._requestResource?.internalValue;
    }
    if (this._requestSubResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestSubResource = this._requestSubResource;
    }
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    if (this._subResource !== undefined) {
      hasAnyValues = true;
      internalValueResult.subResource = this._subResource;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    if (this._userInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInfo = this._userInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequest | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._dryRun = undefined;
      this._kind.internalValue = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._object = undefined;
      this._oldObject = undefined;
      this._operation = undefined;
      this._options = undefined;
      this._requestKind.internalValue = undefined;
      this._requestResource.internalValue = undefined;
      this._requestSubResource = undefined;
      this._resource.internalValue = undefined;
      this._subResource = undefined;
      this._uid = undefined;
      this._userInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._dryRun = value.dryRun;
      this._kind.internalValue = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._object = value.object;
      this._oldObject = value.oldObject;
      this._operation = value.operation;
      this._options = value.options;
      this._requestKind.internalValue = value.requestKind;
      this._requestResource.internalValue = value.requestResource;
      this._requestSubResource = value.requestSubResource;
      this._resource.internalValue = value.resource;
      this._subResource = value.subResource;
      this._uid = value.uid;
      this._userInfo.internalValue = value.userInfo;
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

  // kind - computed: false, optional: false, required: true
  private _kind = new DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestKindOutputReference(this, "kind");
  public get kind() {
    return this._kind;
  }
  public putKind(value: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestKind) {
    this._kind.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get kindInput() {
    return this._kind.internalValue;
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

  // object - computed: false, optional: true, required: false
  private _object?: { [key: string]: string }; 
  public get object() {
    return this.getStringMapAttribute('object');
  }
  public set object(value: { [key: string]: string }) {
    this._object = value;
  }
  public resetObject() {
    this._object = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectInput() {
    return this._object;
  }

  // old_object - computed: false, optional: true, required: false
  private _oldObject?: { [key: string]: string }; 
  public get oldObject() {
    return this.getStringMapAttribute('old_object');
  }
  public set oldObject(value: { [key: string]: string }) {
    this._oldObject = value;
  }
  public resetOldObject() {
    this._oldObject = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get oldObjectInput() {
    return this._oldObject;
  }

  // operation - computed: false, optional: false, required: true
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
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

  // request_kind - computed: false, optional: true, required: false
  private _requestKind = new DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestKindOutputReference(this, "request_kind");
  public get requestKind() {
    return this._requestKind;
  }
  public putRequestKind(value: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestKind) {
    this._requestKind.internalValue = value;
  }
  public resetRequestKind() {
    this._requestKind.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestKindInput() {
    return this._requestKind.internalValue;
  }

  // request_resource - computed: false, optional: true, required: false
  private _requestResource = new DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestResourceOutputReference(this, "request_resource");
  public get requestResource() {
    return this._requestResource;
  }
  public putRequestResource(value: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestRequestResource) {
    this._requestResource.internalValue = value;
  }
  public resetRequestResource() {
    this._requestResource.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestResourceInput() {
    return this._requestResource.internalValue;
  }

  // request_sub_resource - computed: false, optional: true, required: false
  private _requestSubResource?: string; 
  public get requestSubResource() {
    return this.getStringAttribute('request_sub_resource');
  }
  public set requestSubResource(value: string) {
    this._requestSubResource = value;
  }
  public resetRequestSubResource() {
    this._requestSubResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestSubResourceInput() {
    return this._requestSubResource;
  }

  // resource - computed: false, optional: false, required: true
  private _resource = new DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestResource) {
    this._resource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }

  // sub_resource - computed: false, optional: true, required: false
  private _subResource?: string; 
  public get subResource() {
    return this.getStringAttribute('sub_resource');
  }
  public set subResource(value: string) {
    this._subResource = value;
  }
  public resetSubResource() {
    this._subResource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get subResourceInput() {
    return this._subResource;
  }

  // uid - computed: false, optional: false, required: true
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }

  // user_info - computed: false, optional: false, required: true
  private _userInfo = new DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestUserInfoOutputReference(this, "user_info");
  public get userInfo() {
    return this._userInfo;
  }
  public putUserInfo(value: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestUserInfo) {
    this._userInfo.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get userInfoInput() {
    return this._userInfo.internalValue;
  }
}
export interface DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfo {
  /**
  * AdmissionRequest describes the admission.Attributes for the admission request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#admission_request DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#admission_request}
  */
  readonly admissionRequest?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequest;
  /**
  * Operation is the type of resource operation being checked for admission control
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#operation DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#operation}
  */
  readonly operation?: string;
}

export function dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoToTerraform(struct?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admission_request: dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestToTerraform(struct!.admissionRequest),
    operation: cdktf.stringToTerraform(struct!.operation),
  }
}


export function dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoToHclTerraform(struct?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admission_request: {
      value: dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestToHclTerraform(struct!.admissionRequest),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequest",
    },
    operation: {
      value: cdktf.stringToHclTerraform(struct!.operation),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._admissionRequest?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.admissionRequest = this._admissionRequest?.internalValue;
    }
    if (this._operation !== undefined) {
      hasAnyValues = true;
      internalValueResult.operation = this._operation;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._admissionRequest.internalValue = undefined;
      this._operation = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._admissionRequest.internalValue = value.admissionRequest;
      this._operation = value.operation;
    }
  }

  // admission_request - computed: false, optional: true, required: false
  private _admissionRequest = new DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequestOutputReference(this, "admission_request");
  public get admissionRequest() {
    return this._admissionRequest;
  }
  public putAdmissionRequest(value: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoAdmissionRequest) {
    this._admissionRequest.internalValue = value;
  }
  public resetAdmissionRequest() {
    this._admissionRequest.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionRequestInput() {
    return this._admissionRequest.internalValue;
  }

  // operation - computed: false, optional: true, required: false
  private _operation?: string; 
  public get operation() {
    return this.getStringAttribute('operation');
  }
  public set operation(value: string) {
    this._operation = value;
  }
  public resetOperation() {
    this._operation = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get operationInput() {
    return this._operation;
  }
}
export interface DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfoUserInfo {
  /**
  * Any additional information provided by the authenticator.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#extra DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#extra}
  */
  readonly extra?: { [key: string]: string[] } | cdktf.IResolvable;
  /**
  * The names of groups this user is a part of.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#groups DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#groups}
  */
  readonly groups?: string[];
  /**
  * A unique value that identifies this user across time. If this user is deleted and another user by the same name is added, they will have different UIDs.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#uid DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#uid}
  */
  readonly uid?: string;
  /**
  * The name that uniquely identifies this user among all active users.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#username DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#username}
  */
  readonly username?: string;
}

export function dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfoUserInfoToTerraform(struct?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfoUserInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    extra: cdktf.hashMapper(cdktf.listMapper(cdktf.stringToTerraform, false))(struct!.extra),
    groups: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.groups),
    uid: cdktf.stringToTerraform(struct!.uid),
    username: cdktf.stringToTerraform(struct!.username),
  }
}


export function dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfoUserInfoToHclTerraform(struct?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfoUserInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    extra: {
      value: cdktf.hashMapperHcl(cdktf.listMapperHcl(cdktf.stringToHclTerraform, false))(struct!.extra),
      isBlock: false,
      type: "map",
      storageClassType: "stringListMap",
    },
    groups: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.groups),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
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

export class DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfoUserInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfoUserInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._extra !== undefined) {
      hasAnyValues = true;
      internalValueResult.extra = this._extra;
    }
    if (this._groups !== undefined) {
      hasAnyValues = true;
      internalValueResult.groups = this._groups;
    }
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    if (this._username !== undefined) {
      hasAnyValues = true;
      internalValueResult.username = this._username;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfoUserInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._extra = undefined;
      this._groups = undefined;
      this._uid = undefined;
      this._username = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._extra = value.extra;
      this._groups = value.groups;
      this._uid = value.uid;
      this._username = value.username;
    }
  }

  // extra - computed: false, optional: true, required: false
  private _extra?: { [key: string]: string[] } | cdktf.IResolvable; 
  public get extra() {
    return this.interpolationForAttribute('extra');
  }
  public set extra(value: { [key: string]: string[] } | cdktf.IResolvable) {
    this._extra = value;
  }
  public resetExtra() {
    this._extra = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraInput() {
    return this._extra;
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

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
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
export interface DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfo {
  /**
  * ClusterRoles is a list of possible clusterRoles send the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#cluster_roles DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#cluster_roles}
  */
  readonly clusterRoles?: string[];
  /**
  * Roles is a list of possible role send the request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#roles DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#roles}
  */
  readonly roles?: string[];
  /**
  * UserInfo is the userInfo carried in the admission request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#user_info DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#user_info}
  */
  readonly userInfo?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfoUserInfo;
}

export function dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfoToTerraform(struct?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    cluster_roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.clusterRoles),
    roles: cdktf.listMapper(cdktf.stringToTerraform, false)(struct!.roles),
    user_info: dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfoUserInfoToTerraform(struct!.userInfo),
  }
}


export function dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfoToHclTerraform(struct?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfo | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    cluster_roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.clusterRoles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    roles: {
      value: cdktf.listMapperHcl(cdktf.stringToHclTerraform, false)(struct!.roles),
      isBlock: false,
      type: "list",
      storageClassType: "stringList",
    },
    user_info: {
      value: dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfoUserInfoToHclTerraform(struct!.userInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfoUserInfo",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfoOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfo | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._clusterRoles !== undefined) {
      hasAnyValues = true;
      internalValueResult.clusterRoles = this._clusterRoles;
    }
    if (this._roles !== undefined) {
      hasAnyValues = true;
      internalValueResult.roles = this._roles;
    }
    if (this._userInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInfo = this._userInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfo | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._clusterRoles = undefined;
      this._roles = undefined;
      this._userInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._clusterRoles = value.clusterRoles;
      this._roles = value.roles;
      this._userInfo.internalValue = value.userInfo;
    }
  }

  // cluster_roles - computed: false, optional: true, required: false
  private _clusterRoles?: string[]; 
  public get clusterRoles() {
    return this.getListAttribute('cluster_roles');
  }
  public set clusterRoles(value: string[]) {
    this._clusterRoles = value;
  }
  public resetClusterRoles() {
    this._clusterRoles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterRolesInput() {
    return this._clusterRoles;
  }

  // roles - computed: false, optional: true, required: false
  private _roles?: string[]; 
  public get roles() {
    return this.getListAttribute('roles');
  }
  public set roles(value: string[]) {
    this._roles = value;
  }
  public resetRoles() {
    this._roles = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get rolesInput() {
    return this._roles;
  }

  // user_info - computed: false, optional: true, required: false
  private _userInfo = new DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfoUserInfoOutputReference(this, "user_info");
  public get userInfo() {
    return this._userInfo;
  }
  public putUserInfo(value: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfoUserInfo) {
    this._userInfo.internalValue = value;
  }
  public resetUserInfo() {
    this._userInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInfoInput() {
    return this._userInfo.internalValue;
  }
}
export interface DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContext {
  /**
  * AdmissionRequestInfoObject stores the admission request and operation details
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#admission_request_info DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#admission_request_info}
  */
  readonly admissionRequestInfo?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfo;
  /**
  * RequestInfo contains permission info carried in an admission request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#user_info DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#user_info}
  */
  readonly userInfo?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfo;
}

export function dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextToTerraform(struct?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    admission_request_info: dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoToTerraform(struct!.admissionRequestInfo),
    user_info: dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfoToTerraform(struct!.userInfo),
  }
}


export function dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextToHclTerraform(struct?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    admission_request_info: {
      value: dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoToHclTerraform(struct!.admissionRequestInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfo",
    },
    user_info: {
      value: dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfoToHclTerraform(struct!.userInfo),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfo",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._admissionRequestInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.admissionRequestInfo = this._admissionRequestInfo?.internalValue;
    }
    if (this._userInfo?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.userInfo = this._userInfo?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._admissionRequestInfo.internalValue = undefined;
      this._userInfo.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._admissionRequestInfo.internalValue = value.admissionRequestInfo;
      this._userInfo.internalValue = value.userInfo;
    }
  }

  // admission_request_info - computed: false, optional: true, required: false
  private _admissionRequestInfo = new DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfoOutputReference(this, "admission_request_info");
  public get admissionRequestInfo() {
    return this._admissionRequestInfo;
  }
  public putAdmissionRequestInfo(value: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextAdmissionRequestInfo) {
    this._admissionRequestInfo.internalValue = value;
  }
  public resetAdmissionRequestInfo() {
    this._admissionRequestInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get admissionRequestInfoInput() {
    return this._admissionRequestInfo.internalValue;
  }

  // user_info - computed: false, optional: true, required: false
  private _userInfo = new DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfoOutputReference(this, "user_info");
  public get userInfo() {
    return this._userInfo;
  }
  public putUserInfo(value: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextUserInfo) {
    this._userInfo.internalValue = value;
  }
  public resetUserInfo() {
    this._userInfo.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get userInfoInput() {
    return this._userInfo.internalValue;
  }
}
export interface DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecResource {
  /**
  * APIVersion specifies resource apiVersion.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#api_version DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#api_version}
  */
  readonly apiVersion?: string;
  /**
  * Kind specifies resource kind.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#kind DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#kind}
  */
  readonly kind?: string;
  /**
  * Name specifies the resource name.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#name DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#name}
  */
  readonly name?: string;
  /**
  * Namespace specifies resource namespace.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#namespace DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#namespace}
  */
  readonly namespace?: string;
  /**
  * UID specifies the resource uid.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#uid DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#uid}
  */
  readonly uid?: string;
}

export function dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecResourceToTerraform(struct?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    api_version: cdktf.stringToTerraform(struct!.apiVersion),
    kind: cdktf.stringToTerraform(struct!.kind),
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
    uid: cdktf.stringToTerraform(struct!.uid),
  }
}


export function dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecResourceToHclTerraform(struct?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecResource | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    api_version: {
      value: cdktf.stringToHclTerraform(struct!.apiVersion),
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
    uid: {
      value: cdktf.stringToHclTerraform(struct!.uid),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecResourceOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecResource | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._apiVersion !== undefined) {
      hasAnyValues = true;
      internalValueResult.apiVersion = this._apiVersion;
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
    if (this._uid !== undefined) {
      hasAnyValues = true;
      internalValueResult.uid = this._uid;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecResource | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._apiVersion = undefined;
      this._kind = undefined;
      this._name = undefined;
      this._namespace = undefined;
      this._uid = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._apiVersion = value.apiVersion;
      this._kind = value.kind;
      this._name = value.name;
      this._namespace = value.namespace;
      this._uid = value.uid;
    }
  }

  // api_version - computed: false, optional: true, required: false
  private _apiVersion?: string; 
  public get apiVersion() {
    return this.getStringAttribute('api_version');
  }
  public set apiVersion(value: string) {
    this._apiVersion = value;
  }
  public resetApiVersion() {
    this._apiVersion = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get apiVersionInput() {
    return this._apiVersion;
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

  // uid - computed: false, optional: true, required: false
  private _uid?: string; 
  public get uid() {
    return this.getStringAttribute('uid');
  }
  public set uid(value: string) {
    this._uid = value;
  }
  public resetUid() {
    this._uid = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get uidInput() {
    return this._uid;
  }
}
export interface DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpec {
  /**
  * Context ...
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#context DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#context}
  */
  readonly context: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContext;
  /**
  * DeleteDownstream represents whether the downstream needs to be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#delete_downstream DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#delete_downstream}
  */
  readonly deleteDownstream: boolean | cdktf.IResolvable;
  /**
  * Specifies the name of the policy.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#policy DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#policy}
  */
  readonly policy: string;
  /**
  * Type represents request type for background processing
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#request_type DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#request_type}
  */
  readonly requestType?: string;
  /**
  * ResourceSpec is the information to identify the trigger resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#resource DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#resource}
  */
  readonly resource: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecResource;
  /**
  * Rule is the associate rule name of the current UR.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#rule DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#rule}
  */
  readonly rule: string;
  /**
  * Synchronize represents the sync behavior of the corresponding rule Optional. Defaults to 'false' if not specified.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#synchronize DataK8SKyvernoIoUpdateRequestV1Beta1Manifest#synchronize}
  */
  readonly synchronize?: boolean | cdktf.IResolvable;
}

export function dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecToTerraform(struct?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    context: dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextToTerraform(struct!.context),
    delete_downstream: cdktf.booleanToTerraform(struct!.deleteDownstream),
    policy: cdktf.stringToTerraform(struct!.policy),
    request_type: cdktf.stringToTerraform(struct!.requestType),
    resource: dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecResourceToTerraform(struct!.resource),
    rule: cdktf.stringToTerraform(struct!.rule),
    synchronize: cdktf.booleanToTerraform(struct!.synchronize),
  }
}


export function dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecToHclTerraform(struct?: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    context: {
      value: dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextToHclTerraform(struct!.context),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContext",
    },
    delete_downstream: {
      value: cdktf.booleanToHclTerraform(struct!.deleteDownstream),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
    policy: {
      value: cdktf.stringToHclTerraform(struct!.policy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    request_type: {
      value: cdktf.stringToHclTerraform(struct!.requestType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    resource: {
      value: dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecResourceToHclTerraform(struct!.resource),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecResource",
    },
    rule: {
      value: cdktf.stringToHclTerraform(struct!.rule),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    synchronize: {
      value: cdktf.booleanToHclTerraform(struct!.synchronize),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._context?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.context = this._context?.internalValue;
    }
    if (this._deleteDownstream !== undefined) {
      hasAnyValues = true;
      internalValueResult.deleteDownstream = this._deleteDownstream;
    }
    if (this._policy !== undefined) {
      hasAnyValues = true;
      internalValueResult.policy = this._policy;
    }
    if (this._requestType !== undefined) {
      hasAnyValues = true;
      internalValueResult.requestType = this._requestType;
    }
    if (this._resource?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resource = this._resource?.internalValue;
    }
    if (this._rule !== undefined) {
      hasAnyValues = true;
      internalValueResult.rule = this._rule;
    }
    if (this._synchronize !== undefined) {
      hasAnyValues = true;
      internalValueResult.synchronize = this._synchronize;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._context.internalValue = undefined;
      this._deleteDownstream = undefined;
      this._policy = undefined;
      this._requestType = undefined;
      this._resource.internalValue = undefined;
      this._rule = undefined;
      this._synchronize = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._context.internalValue = value.context;
      this._deleteDownstream = value.deleteDownstream;
      this._policy = value.policy;
      this._requestType = value.requestType;
      this._resource.internalValue = value.resource;
      this._rule = value.rule;
      this._synchronize = value.synchronize;
    }
  }

  // context - computed: false, optional: false, required: true
  private _context = new DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContextOutputReference(this, "context");
  public get context() {
    return this._context;
  }
  public putContext(value: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecContext) {
    this._context.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get contextInput() {
    return this._context.internalValue;
  }

  // delete_downstream - computed: false, optional: false, required: true
  private _deleteDownstream?: boolean | cdktf.IResolvable; 
  public get deleteDownstream() {
    return this.getBooleanAttribute('delete_downstream');
  }
  public set deleteDownstream(value: boolean | cdktf.IResolvable) {
    this._deleteDownstream = value;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteDownstreamInput() {
    return this._deleteDownstream;
  }

  // policy - computed: false, optional: false, required: true
  private _policy?: string; 
  public get policy() {
    return this.getStringAttribute('policy');
  }
  public set policy(value: string) {
    this._policy = value;
  }
  // Temporarily expose input value. Use with caution.
  public get policyInput() {
    return this._policy;
  }

  // request_type - computed: false, optional: true, required: false
  private _requestType?: string; 
  public get requestType() {
    return this.getStringAttribute('request_type');
  }
  public set requestType(value: string) {
    this._requestType = value;
  }
  public resetRequestType() {
    this._requestType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestTypeInput() {
    return this._requestType;
  }

  // resource - computed: false, optional: false, required: true
  private _resource = new DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecResourceOutputReference(this, "resource");
  public get resource() {
    return this._resource;
  }
  public putResource(value: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecResource) {
    this._resource.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get resourceInput() {
    return this._resource.internalValue;
  }

  // rule - computed: false, optional: false, required: true
  private _rule?: string; 
  public get rule() {
    return this.getStringAttribute('rule');
  }
  public set rule(value: string) {
    this._rule = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ruleInput() {
    return this._rule;
  }

  // synchronize - computed: false, optional: true, required: false
  private _synchronize?: boolean | cdktf.IResolvable; 
  public get synchronize() {
    return this.getBooleanAttribute('synchronize');
  }
  public set synchronize(value: boolean | cdktf.IResolvable) {
    this._synchronize = value;
  }
  public resetSynchronize() {
    this._synchronize = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get synchronizeInput() {
    return this._synchronize;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest k8s_kyverno_io_update_request_v1beta1_manifest}
*/
export class DataK8SKyvernoIoUpdateRequestV1Beta1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kyverno_io_update_request_v1beta1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKyvernoIoUpdateRequestV1Beta1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKyvernoIoUpdateRequestV1Beta1Manifest to import
  * @param importFromId The id of the existing DataK8SKyvernoIoUpdateRequestV1Beta1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKyvernoIoUpdateRequestV1Beta1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kyverno_io_update_request_v1beta1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.15/docs/data-sources/kyverno_io_update_request_v1beta1_manifest k8s_kyverno_io_update_request_v1beta1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKyvernoIoUpdateRequestV1Beta1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kyverno_io_update_request_v1beta1_manifest',
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
  private _metadata = new DataK8SKyvernoIoUpdateRequestV1Beta1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpec) {
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
      metadata: dataK8SKyvernoIoUpdateRequestV1Beta1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKyvernoIoUpdateRequestV1Beta1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKyvernoIoUpdateRequestV1Beta1ManifestMetadata",
      },
      spec: {
        value: dataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKyvernoIoUpdateRequestV1Beta1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
