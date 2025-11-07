// https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKubeanIoClusterOperationV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#metadata DataK8SKubeanIoClusterOperationV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKubeanIoClusterOperationV1Alpha1ManifestMetadata;
  /**
  * Spec defines the desired state of a member cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#spec DataK8SKubeanIoClusterOperationV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpec;
}
export interface DataK8SKubeanIoClusterOperationV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#annotations DataK8SKubeanIoClusterOperationV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#labels DataK8SKubeanIoClusterOperationV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#name DataK8SKubeanIoClusterOperationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKubeanIoClusterOperationV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKubeanIoClusterOperationV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKubeanIoClusterOperationV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeanIoClusterOperationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeanIoClusterOperationV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecActionSourceRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#name DataK8SKubeanIoClusterOperationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#namespace DataK8SKubeanIoClusterOperationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecActionSourceRefToTerraform(struct?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecActionSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecActionSourceRefToHclTerraform(struct?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecActionSourceRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecActionSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecActionSourceRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecActionSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecEntrypointShRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#name DataK8SKubeanIoClusterOperationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#namespace DataK8SKubeanIoClusterOperationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecEntrypointShRefToTerraform(struct?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecEntrypointShRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecEntrypointShRefToHclTerraform(struct?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecEntrypointShRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecEntrypointShRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecEntrypointShRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecEntrypointShRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecHostsConfRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#name DataK8SKubeanIoClusterOperationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#namespace DataK8SKubeanIoClusterOperationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecHostsConfRefToTerraform(struct?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecHostsConfRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecHostsConfRefToHclTerraform(struct?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecHostsConfRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecHostsConfRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecHostsConfRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecHostsConfRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHookActionSourceRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#name DataK8SKubeanIoClusterOperationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#namespace DataK8SKubeanIoClusterOperationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHookActionSourceRefToTerraform(struct?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHookActionSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHookActionSourceRefToHclTerraform(struct?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHookActionSourceRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHookActionSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHookActionSourceRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHookActionSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#action DataK8SKubeanIoClusterOperationV1Alpha1Manifest#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#action_source DataK8SKubeanIoClusterOperationV1Alpha1Manifest#action_source}
  */
  readonly actionSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#action_source_ref DataK8SKubeanIoClusterOperationV1Alpha1Manifest#action_source_ref}
  */
  readonly actionSourceRef?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHookActionSourceRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#action_type DataK8SKubeanIoClusterOperationV1Alpha1Manifest#action_type}
  */
  readonly actionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#extra_args DataK8SKubeanIoClusterOperationV1Alpha1Manifest#extra_args}
  */
  readonly extraArgs?: string;
}

export function dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHookToTerraform(struct?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    action_source: cdktf.stringToTerraform(struct!.actionSource),
    action_source_ref: dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHookActionSourceRefToTerraform(struct!.actionSourceRef),
    action_type: cdktf.stringToTerraform(struct!.actionType),
    extra_args: cdktf.stringToTerraform(struct!.extraArgs),
  }
}


export function dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHookToHclTerraform(struct?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_source: {
      value: cdktf.stringToHclTerraform(struct!.actionSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_source_ref: {
      value: dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHookActionSourceRefToHclTerraform(struct!.actionSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHookActionSourceRef",
    },
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_args: {
      value: cdktf.stringToHclTerraform(struct!.extraArgs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHookOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._actionSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionSource = this._actionSource;
    }
    if (this._actionSourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionSourceRef = this._actionSourceRef?.internalValue;
    }
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._actionSource = undefined;
      this._actionSourceRef.internalValue = undefined;
      this._actionType = undefined;
      this._extraArgs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._actionSource = value.actionSource;
      this._actionSourceRef.internalValue = value.actionSourceRef;
      this._actionType = value.actionType;
      this._extraArgs = value.extraArgs;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // action_source - computed: false, optional: true, required: false
  private _actionSource?: string; 
  public get actionSource() {
    return this.getStringAttribute('action_source');
  }
  public set actionSource(value: string) {
    this._actionSource = value;
  }
  public resetActionSource() {
    this._actionSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSourceInput() {
    return this._actionSource;
  }

  // action_source_ref - computed: false, optional: true, required: false
  private _actionSourceRef = new DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHookActionSourceRefOutputReference(this, "action_source_ref");
  public get actionSourceRef() {
    return this._actionSourceRef;
  }
  public putActionSourceRef(value: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHookActionSourceRef) {
    this._actionSourceRef.internalValue = value;
  }
  public resetActionSourceRef() {
    this._actionSourceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSourceRefInput() {
    return this._actionSourceRef.internalValue;
  }

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // extra_args - computed: false, optional: true, required: false
  private _extraArgs?: string; 
  public get extraArgs() {
    return this.getStringAttribute('extra_args');
  }
  public set extraArgs(value: string) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }
}

export class DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHookList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHook[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHookOutputReference {
    return new DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHookOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHookActionSourceRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#name DataK8SKubeanIoClusterOperationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#namespace DataK8SKubeanIoClusterOperationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHookActionSourceRefToTerraform(struct?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHookActionSourceRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHookActionSourceRefToHclTerraform(struct?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHookActionSourceRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHookActionSourceRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHookActionSourceRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHookActionSourceRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHook {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#action DataK8SKubeanIoClusterOperationV1Alpha1Manifest#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#action_source DataK8SKubeanIoClusterOperationV1Alpha1Manifest#action_source}
  */
  readonly actionSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#action_source_ref DataK8SKubeanIoClusterOperationV1Alpha1Manifest#action_source_ref}
  */
  readonly actionSourceRef?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHookActionSourceRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#action_type DataK8SKubeanIoClusterOperationV1Alpha1Manifest#action_type}
  */
  readonly actionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#extra_args DataK8SKubeanIoClusterOperationV1Alpha1Manifest#extra_args}
  */
  readonly extraArgs?: string;
}

export function dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHookToTerraform(struct?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    action_source: cdktf.stringToTerraform(struct!.actionSource),
    action_source_ref: dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHookActionSourceRefToTerraform(struct!.actionSourceRef),
    action_type: cdktf.stringToTerraform(struct!.actionType),
    extra_args: cdktf.stringToTerraform(struct!.extraArgs),
  }
}


export function dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHookToHclTerraform(struct?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHook | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_source: {
      value: cdktf.stringToHclTerraform(struct!.actionSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_source_ref: {
      value: dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHookActionSourceRefToHclTerraform(struct!.actionSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHookActionSourceRef",
    },
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    extra_args: {
      value: cdktf.stringToHclTerraform(struct!.extraArgs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHookOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHook | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._actionSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionSource = this._actionSource;
    }
    if (this._actionSourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionSourceRef = this._actionSourceRef?.internalValue;
    }
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHook | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._actionSource = undefined;
      this._actionSourceRef.internalValue = undefined;
      this._actionType = undefined;
      this._extraArgs = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._actionSource = value.actionSource;
      this._actionSourceRef.internalValue = value.actionSourceRef;
      this._actionType = value.actionType;
      this._extraArgs = value.extraArgs;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // action_source - computed: false, optional: true, required: false
  private _actionSource?: string; 
  public get actionSource() {
    return this.getStringAttribute('action_source');
  }
  public set actionSource(value: string) {
    this._actionSource = value;
  }
  public resetActionSource() {
    this._actionSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSourceInput() {
    return this._actionSource;
  }

  // action_source_ref - computed: false, optional: true, required: false
  private _actionSourceRef = new DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHookActionSourceRefOutputReference(this, "action_source_ref");
  public get actionSourceRef() {
    return this._actionSourceRef;
  }
  public putActionSourceRef(value: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHookActionSourceRef) {
    this._actionSourceRef.internalValue = value;
  }
  public resetActionSourceRef() {
    this._actionSourceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSourceRefInput() {
    return this._actionSourceRef.internalValue;
  }

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // extra_args - computed: false, optional: true, required: false
  private _extraArgs?: string; 
  public get extraArgs() {
    return this.getStringAttribute('extra_args');
  }
  public set extraArgs(value: string) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }
}

export class DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHookList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHook[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHookOutputReference {
    return new DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHookOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#name DataK8SKubeanIoClusterOperationV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResourcesClaimsToTerraform(struct?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
  }
}


export function dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResourcesClaimsToHclTerraform(struct?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
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

export class DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined) {
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

export class DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResourcesClaimsOutputReference {
    return new DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#claims DataK8SKubeanIoClusterOperationV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#limits DataK8SKubeanIoClusterOperationV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#requests DataK8SKubeanIoClusterOperationV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResourcesToTerraform(struct?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResourcesToHclTerraform(struct?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResourcesClaimsList",
    },
    limits: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.limits),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    requests: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.requests),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResources | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._claims?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.claims = this._claims?.internalValue;
    }
    if (this._limits !== undefined) {
      hasAnyValues = true;
      internalValueResult.limits = this._limits;
    }
    if (this._requests !== undefined) {
      hasAnyValues = true;
      internalValueResult.requests = this._requests;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResources | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._claims.internalValue = undefined;
      this._limits = undefined;
      this._requests = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._claims.internalValue = value.claims;
      this._limits = value.limits;
      this._requests = value.requests;
    }
  }

  // claims - computed: false, optional: true, required: false
  private _claims = new DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResourcesClaims[] | cdktf.IResolvable) {
    this._claims.internalValue = value;
  }
  public resetClaims() {
    this._claims.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get claimsInput() {
    return this._claims.internalValue;
  }

  // limits - computed: false, optional: true, required: false
  private _limits?: { [key: string]: string }; 
  public get limits() {
    return this.getStringMapAttribute('limits');
  }
  public set limits(value: { [key: string]: string }) {
    this._limits = value;
  }
  public resetLimits() {
    this._limits = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get limitsInput() {
    return this._limits;
  }

  // requests - computed: false, optional: true, required: false
  private _requests?: { [key: string]: string }; 
  public get requests() {
    return this.getStringMapAttribute('requests');
  }
  public set requests(value: { [key: string]: string }) {
    this._requests = value;
  }
  public resetRequests() {
    this._requests = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestsInput() {
    return this._requests;
  }
}
export interface DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecSshAuthRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#name DataK8SKubeanIoClusterOperationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#namespace DataK8SKubeanIoClusterOperationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecSshAuthRefToTerraform(struct?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecSshAuthRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecSshAuthRefToHclTerraform(struct?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecSshAuthRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecSshAuthRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecSshAuthRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecSshAuthRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecVarsConfRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#name DataK8SKubeanIoClusterOperationV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#namespace DataK8SKubeanIoClusterOperationV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecVarsConfRefToTerraform(struct?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecVarsConfRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecVarsConfRefToHclTerraform(struct?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecVarsConfRef | cdktf.IResolvable): any {
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
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecVarsConfRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecVarsConfRef | cdktf.IResolvable | undefined {
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
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecVarsConfRef | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
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
      this._name = value.name;
      this._namespace = value.namespace;
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
export interface DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#action DataK8SKubeanIoClusterOperationV1Alpha1Manifest#action}
  */
  readonly action: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#action_source DataK8SKubeanIoClusterOperationV1Alpha1Manifest#action_source}
  */
  readonly actionSource?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#action_source_ref DataK8SKubeanIoClusterOperationV1Alpha1Manifest#action_source_ref}
  */
  readonly actionSourceRef?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecActionSourceRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#action_type DataK8SKubeanIoClusterOperationV1Alpha1Manifest#action_type}
  */
  readonly actionType: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#active_deadline_seconds DataK8SKubeanIoClusterOperationV1Alpha1Manifest#active_deadline_seconds}
  */
  readonly activeDeadlineSeconds?: number;
  /**
  * Cluster the name of Cluster.kubean.io.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#cluster DataK8SKubeanIoClusterOperationV1Alpha1Manifest#cluster}
  */
  readonly cluster: string;
  /**
  * EntrypointSHRef will be filled by operator when it renders entrypoint.sh.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#entrypoint_sh_ref DataK8SKubeanIoClusterOperationV1Alpha1Manifest#entrypoint_sh_ref}
  */
  readonly entrypointShRef?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecEntrypointShRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#extra_args DataK8SKubeanIoClusterOperationV1Alpha1Manifest#extra_args}
  */
  readonly extraArgs?: string;
  /**
  * HostsConfRef will be filled by operator when it performs backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#hosts_conf_ref DataK8SKubeanIoClusterOperationV1Alpha1Manifest#hosts_conf_ref}
  */
  readonly hostsConfRef?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecHostsConfRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#image DataK8SKubeanIoClusterOperationV1Alpha1Manifest#image}
  */
  readonly image: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#post_hook DataK8SKubeanIoClusterOperationV1Alpha1Manifest#post_hook}
  */
  readonly postHook?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHook[] | cdktf.IResolvable;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#pre_hook DataK8SKubeanIoClusterOperationV1Alpha1Manifest#pre_hook}
  */
  readonly preHook?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHook[] | cdktf.IResolvable;
  /**
  * ResourceRequirements describes the compute resource requirements.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#resources DataK8SKubeanIoClusterOperationV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResources;
  /**
  * SSHAuthRef will be filled by operator when it performs backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#ssh_auth_ref DataK8SKubeanIoClusterOperationV1Alpha1Manifest#ssh_auth_ref}
  */
  readonly sshAuthRef?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecSshAuthRef;
  /**
  * VarsConfRef will be filled by operator when it performs backup.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#vars_conf_ref DataK8SKubeanIoClusterOperationV1Alpha1Manifest#vars_conf_ref}
  */
  readonly varsConfRef?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecVarsConfRef;
}

export function dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    action: cdktf.stringToTerraform(struct!.action),
    action_source: cdktf.stringToTerraform(struct!.actionSource),
    action_source_ref: dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecActionSourceRefToTerraform(struct!.actionSourceRef),
    action_type: cdktf.stringToTerraform(struct!.actionType),
    active_deadline_seconds: cdktf.numberToTerraform(struct!.activeDeadlineSeconds),
    cluster: cdktf.stringToTerraform(struct!.cluster),
    entrypoint_sh_ref: dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecEntrypointShRefToTerraform(struct!.entrypointShRef),
    extra_args: cdktf.stringToTerraform(struct!.extraArgs),
    hosts_conf_ref: dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecHostsConfRefToTerraform(struct!.hostsConfRef),
    image: cdktf.stringToTerraform(struct!.image),
    post_hook: cdktf.listMapper(dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHookToTerraform, false)(struct!.postHook),
    pre_hook: cdktf.listMapper(dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHookToTerraform, false)(struct!.preHook),
    resources: dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResourcesToTerraform(struct!.resources),
    ssh_auth_ref: dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecSshAuthRefToTerraform(struct!.sshAuthRef),
    vars_conf_ref: dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecVarsConfRefToTerraform(struct!.varsConfRef),
  }
}


export function dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    action: {
      value: cdktf.stringToHclTerraform(struct!.action),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_source: {
      value: cdktf.stringToHclTerraform(struct!.actionSource),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    action_source_ref: {
      value: dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecActionSourceRefToHclTerraform(struct!.actionSourceRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecActionSourceRef",
    },
    action_type: {
      value: cdktf.stringToHclTerraform(struct!.actionType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    active_deadline_seconds: {
      value: cdktf.numberToHclTerraform(struct!.activeDeadlineSeconds),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    cluster: {
      value: cdktf.stringToHclTerraform(struct!.cluster),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    entrypoint_sh_ref: {
      value: dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecEntrypointShRefToHclTerraform(struct!.entrypointShRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecEntrypointShRef",
    },
    extra_args: {
      value: cdktf.stringToHclTerraform(struct!.extraArgs),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    hosts_conf_ref: {
      value: dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecHostsConfRefToHclTerraform(struct!.hostsConfRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecHostsConfRef",
    },
    image: {
      value: cdktf.stringToHclTerraform(struct!.image),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    post_hook: {
      value: cdktf.listMapperHcl(dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHookToHclTerraform, false)(struct!.postHook),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHookList",
    },
    pre_hook: {
      value: cdktf.listMapperHcl(dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHookToHclTerraform, false)(struct!.preHook),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHookList",
    },
    resources: {
      value: dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResources",
    },
    ssh_auth_ref: {
      value: dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecSshAuthRefToHclTerraform(struct!.sshAuthRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecSshAuthRef",
    },
    vars_conf_ref: {
      value: dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecVarsConfRefToHclTerraform(struct!.varsConfRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecVarsConfRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._action !== undefined) {
      hasAnyValues = true;
      internalValueResult.action = this._action;
    }
    if (this._actionSource !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionSource = this._actionSource;
    }
    if (this._actionSourceRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionSourceRef = this._actionSourceRef?.internalValue;
    }
    if (this._actionType !== undefined) {
      hasAnyValues = true;
      internalValueResult.actionType = this._actionType;
    }
    if (this._activeDeadlineSeconds !== undefined) {
      hasAnyValues = true;
      internalValueResult.activeDeadlineSeconds = this._activeDeadlineSeconds;
    }
    if (this._cluster !== undefined) {
      hasAnyValues = true;
      internalValueResult.cluster = this._cluster;
    }
    if (this._entrypointShRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.entrypointShRef = this._entrypointShRef?.internalValue;
    }
    if (this._extraArgs !== undefined) {
      hasAnyValues = true;
      internalValueResult.extraArgs = this._extraArgs;
    }
    if (this._hostsConfRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostsConfRef = this._hostsConfRef?.internalValue;
    }
    if (this._image !== undefined) {
      hasAnyValues = true;
      internalValueResult.image = this._image;
    }
    if (this._postHook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.postHook = this._postHook?.internalValue;
    }
    if (this._preHook?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preHook = this._preHook?.internalValue;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._sshAuthRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.sshAuthRef = this._sshAuthRef?.internalValue;
    }
    if (this._varsConfRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.varsConfRef = this._varsConfRef?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._action = undefined;
      this._actionSource = undefined;
      this._actionSourceRef.internalValue = undefined;
      this._actionType = undefined;
      this._activeDeadlineSeconds = undefined;
      this._cluster = undefined;
      this._entrypointShRef.internalValue = undefined;
      this._extraArgs = undefined;
      this._hostsConfRef.internalValue = undefined;
      this._image = undefined;
      this._postHook.internalValue = undefined;
      this._preHook.internalValue = undefined;
      this._resources.internalValue = undefined;
      this._sshAuthRef.internalValue = undefined;
      this._varsConfRef.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._action = value.action;
      this._actionSource = value.actionSource;
      this._actionSourceRef.internalValue = value.actionSourceRef;
      this._actionType = value.actionType;
      this._activeDeadlineSeconds = value.activeDeadlineSeconds;
      this._cluster = value.cluster;
      this._entrypointShRef.internalValue = value.entrypointShRef;
      this._extraArgs = value.extraArgs;
      this._hostsConfRef.internalValue = value.hostsConfRef;
      this._image = value.image;
      this._postHook.internalValue = value.postHook;
      this._preHook.internalValue = value.preHook;
      this._resources.internalValue = value.resources;
      this._sshAuthRef.internalValue = value.sshAuthRef;
      this._varsConfRef.internalValue = value.varsConfRef;
    }
  }

  // action - computed: false, optional: false, required: true
  private _action?: string; 
  public get action() {
    return this.getStringAttribute('action');
  }
  public set action(value: string) {
    this._action = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionInput() {
    return this._action;
  }

  // action_source - computed: false, optional: true, required: false
  private _actionSource?: string; 
  public get actionSource() {
    return this.getStringAttribute('action_source');
  }
  public set actionSource(value: string) {
    this._actionSource = value;
  }
  public resetActionSource() {
    this._actionSource = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSourceInput() {
    return this._actionSource;
  }

  // action_source_ref - computed: false, optional: true, required: false
  private _actionSourceRef = new DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecActionSourceRefOutputReference(this, "action_source_ref");
  public get actionSourceRef() {
    return this._actionSourceRef;
  }
  public putActionSourceRef(value: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecActionSourceRef) {
    this._actionSourceRef.internalValue = value;
  }
  public resetActionSourceRef() {
    this._actionSourceRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get actionSourceRefInput() {
    return this._actionSourceRef.internalValue;
  }

  // action_type - computed: false, optional: false, required: true
  private _actionType?: string; 
  public get actionType() {
    return this.getStringAttribute('action_type');
  }
  public set actionType(value: string) {
    this._actionType = value;
  }
  // Temporarily expose input value. Use with caution.
  public get actionTypeInput() {
    return this._actionType;
  }

  // active_deadline_seconds - computed: false, optional: true, required: false
  private _activeDeadlineSeconds?: number; 
  public get activeDeadlineSeconds() {
    return this.getNumberAttribute('active_deadline_seconds');
  }
  public set activeDeadlineSeconds(value: number) {
    this._activeDeadlineSeconds = value;
  }
  public resetActiveDeadlineSeconds() {
    this._activeDeadlineSeconds = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get activeDeadlineSecondsInput() {
    return this._activeDeadlineSeconds;
  }

  // cluster - computed: false, optional: false, required: true
  private _cluster?: string; 
  public get cluster() {
    return this.getStringAttribute('cluster');
  }
  public set cluster(value: string) {
    this._cluster = value;
  }
  // Temporarily expose input value. Use with caution.
  public get clusterInput() {
    return this._cluster;
  }

  // entrypoint_sh_ref - computed: false, optional: true, required: false
  private _entrypointShRef = new DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecEntrypointShRefOutputReference(this, "entrypoint_sh_ref");
  public get entrypointShRef() {
    return this._entrypointShRef;
  }
  public putEntrypointShRef(value: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecEntrypointShRef) {
    this._entrypointShRef.internalValue = value;
  }
  public resetEntrypointShRef() {
    this._entrypointShRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get entrypointShRefInput() {
    return this._entrypointShRef.internalValue;
  }

  // extra_args - computed: false, optional: true, required: false
  private _extraArgs?: string; 
  public get extraArgs() {
    return this.getStringAttribute('extra_args');
  }
  public set extraArgs(value: string) {
    this._extraArgs = value;
  }
  public resetExtraArgs() {
    this._extraArgs = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get extraArgsInput() {
    return this._extraArgs;
  }

  // hosts_conf_ref - computed: false, optional: true, required: false
  private _hostsConfRef = new DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecHostsConfRefOutputReference(this, "hosts_conf_ref");
  public get hostsConfRef() {
    return this._hostsConfRef;
  }
  public putHostsConfRef(value: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecHostsConfRef) {
    this._hostsConfRef.internalValue = value;
  }
  public resetHostsConfRef() {
    this._hostsConfRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsConfRefInput() {
    return this._hostsConfRef.internalValue;
  }

  // image - computed: false, optional: false, required: true
  private _image?: string; 
  public get image() {
    return this.getStringAttribute('image');
  }
  public set image(value: string) {
    this._image = value;
  }
  // Temporarily expose input value. Use with caution.
  public get imageInput() {
    return this._image;
  }

  // post_hook - computed: false, optional: true, required: false
  private _postHook = new DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHookList(this, "post_hook", false);
  public get postHook() {
    return this._postHook;
  }
  public putPostHook(value: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPostHook[] | cdktf.IResolvable) {
    this._postHook.internalValue = value;
  }
  public resetPostHook() {
    this._postHook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get postHookInput() {
    return this._postHook.internalValue;
  }

  // pre_hook - computed: false, optional: true, required: false
  private _preHook = new DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHookList(this, "pre_hook", false);
  public get preHook() {
    return this._preHook;
  }
  public putPreHook(value: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecPreHook[] | cdktf.IResolvable) {
    this._preHook.internalValue = value;
  }
  public resetPreHook() {
    this._preHook.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preHookInput() {
    return this._preHook.internalValue;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // ssh_auth_ref - computed: false, optional: true, required: false
  private _sshAuthRef = new DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecSshAuthRefOutputReference(this, "ssh_auth_ref");
  public get sshAuthRef() {
    return this._sshAuthRef;
  }
  public putSshAuthRef(value: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecSshAuthRef) {
    this._sshAuthRef.internalValue = value;
  }
  public resetSshAuthRef() {
    this._sshAuthRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAuthRefInput() {
    return this._sshAuthRef.internalValue;
  }

  // vars_conf_ref - computed: false, optional: true, required: false
  private _varsConfRef = new DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecVarsConfRefOutputReference(this, "vars_conf_ref");
  public get varsConfRef() {
    return this._varsConfRef;
  }
  public putVarsConfRef(value: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecVarsConfRef) {
    this._varsConfRef.internalValue = value;
  }
  public resetVarsConfRef() {
    this._varsConfRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get varsConfRefInput() {
    return this._varsConfRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest k8s_kubean_io_cluster_operation_v1alpha1_manifest}
*/
export class DataK8SKubeanIoClusterOperationV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kubean_io_cluster_operation_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKubeanIoClusterOperationV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKubeanIoClusterOperationV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKubeanIoClusterOperationV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKubeanIoClusterOperationV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kubean_io_cluster_operation_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.3/docs/data-sources/kubean_io_cluster_operation_v1alpha1_manifest k8s_kubean_io_cluster_operation_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKubeanIoClusterOperationV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKubeanIoClusterOperationV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kubean_io_cluster_operation_v1alpha1_manifest',
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
    this._spec.internalValue = config.spec;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // metadata - computed: false, optional: false, required: true
  private _metadata = new DataK8SKubeanIoClusterOperationV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKubeanIoClusterOperationV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKubeanIoClusterOperationV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKubeanIoClusterOperationV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKubeanIoClusterOperationV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKubeanIoClusterOperationV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKubeanIoClusterOperationV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
