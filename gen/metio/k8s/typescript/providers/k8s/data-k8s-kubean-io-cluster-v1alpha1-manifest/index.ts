// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_cluster_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKubeanIoClusterV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_cluster_v1alpha1_manifest#metadata DataK8SKubeanIoClusterV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKubeanIoClusterV1Alpha1ManifestMetadata;
  /**
  * Spec defines the desired state of a member cluster.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_cluster_v1alpha1_manifest#spec DataK8SKubeanIoClusterV1Alpha1Manifest#spec}
  */
  readonly spec: DataK8SKubeanIoClusterV1Alpha1ManifestSpec;
}
export interface DataK8SKubeanIoClusterV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_cluster_v1alpha1_manifest#annotations DataK8SKubeanIoClusterV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_cluster_v1alpha1_manifest#labels DataK8SKubeanIoClusterV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_cluster_v1alpha1_manifest#name DataK8SKubeanIoClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
}

export function dataK8SKubeanIoClusterV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKubeanIoClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKubeanIoClusterV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKubeanIoClusterV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKubeanIoClusterV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeanIoClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeanIoClusterV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeanIoClusterV1Alpha1ManifestSpecHostsConfRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_cluster_v1alpha1_manifest#name DataK8SKubeanIoClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_cluster_v1alpha1_manifest#namespace DataK8SKubeanIoClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKubeanIoClusterV1Alpha1ManifestSpecHostsConfRefToTerraform(struct?: DataK8SKubeanIoClusterV1Alpha1ManifestSpecHostsConfRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKubeanIoClusterV1Alpha1ManifestSpecHostsConfRefToHclTerraform(struct?: DataK8SKubeanIoClusterV1Alpha1ManifestSpecHostsConfRef | cdktf.IResolvable): any {
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

export class DataK8SKubeanIoClusterV1Alpha1ManifestSpecHostsConfRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeanIoClusterV1Alpha1ManifestSpecHostsConfRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeanIoClusterV1Alpha1ManifestSpecHostsConfRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeanIoClusterV1Alpha1ManifestSpecKubeconfRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_cluster_v1alpha1_manifest#name DataK8SKubeanIoClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_cluster_v1alpha1_manifest#namespace DataK8SKubeanIoClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKubeanIoClusterV1Alpha1ManifestSpecKubeconfRefToTerraform(struct?: DataK8SKubeanIoClusterV1Alpha1ManifestSpecKubeconfRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKubeanIoClusterV1Alpha1ManifestSpecKubeconfRefToHclTerraform(struct?: DataK8SKubeanIoClusterV1Alpha1ManifestSpecKubeconfRef | cdktf.IResolvable): any {
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

export class DataK8SKubeanIoClusterV1Alpha1ManifestSpecKubeconfRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeanIoClusterV1Alpha1ManifestSpecKubeconfRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeanIoClusterV1Alpha1ManifestSpecKubeconfRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeanIoClusterV1Alpha1ManifestSpecPreCheckRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_cluster_v1alpha1_manifest#name DataK8SKubeanIoClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_cluster_v1alpha1_manifest#namespace DataK8SKubeanIoClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKubeanIoClusterV1Alpha1ManifestSpecPreCheckRefToTerraform(struct?: DataK8SKubeanIoClusterV1Alpha1ManifestSpecPreCheckRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKubeanIoClusterV1Alpha1ManifestSpecPreCheckRefToHclTerraform(struct?: DataK8SKubeanIoClusterV1Alpha1ManifestSpecPreCheckRef | cdktf.IResolvable): any {
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

export class DataK8SKubeanIoClusterV1Alpha1ManifestSpecPreCheckRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeanIoClusterV1Alpha1ManifestSpecPreCheckRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeanIoClusterV1Alpha1ManifestSpecPreCheckRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeanIoClusterV1Alpha1ManifestSpecSshAuthRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_cluster_v1alpha1_manifest#name DataK8SKubeanIoClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_cluster_v1alpha1_manifest#namespace DataK8SKubeanIoClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKubeanIoClusterV1Alpha1ManifestSpecSshAuthRefToTerraform(struct?: DataK8SKubeanIoClusterV1Alpha1ManifestSpecSshAuthRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKubeanIoClusterV1Alpha1ManifestSpecSshAuthRefToHclTerraform(struct?: DataK8SKubeanIoClusterV1Alpha1ManifestSpecSshAuthRef | cdktf.IResolvable): any {
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

export class DataK8SKubeanIoClusterV1Alpha1ManifestSpecSshAuthRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeanIoClusterV1Alpha1ManifestSpecSshAuthRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeanIoClusterV1Alpha1ManifestSpecSshAuthRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeanIoClusterV1Alpha1ManifestSpecVarsConfRef {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_cluster_v1alpha1_manifest#name DataK8SKubeanIoClusterV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_cluster_v1alpha1_manifest#namespace DataK8SKubeanIoClusterV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKubeanIoClusterV1Alpha1ManifestSpecVarsConfRefToTerraform(struct?: DataK8SKubeanIoClusterV1Alpha1ManifestSpecVarsConfRef | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    namespace: cdktf.stringToTerraform(struct!.namespace),
  }
}


export function dataK8SKubeanIoClusterV1Alpha1ManifestSpecVarsConfRefToHclTerraform(struct?: DataK8SKubeanIoClusterV1Alpha1ManifestSpecVarsConfRef | cdktf.IResolvable): any {
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

export class DataK8SKubeanIoClusterV1Alpha1ManifestSpecVarsConfRefOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeanIoClusterV1Alpha1ManifestSpecVarsConfRef | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKubeanIoClusterV1Alpha1ManifestSpecVarsConfRef | cdktf.IResolvable | undefined) {
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
export interface DataK8SKubeanIoClusterV1Alpha1ManifestSpec {
  /**
  * HostsConfRef stores hosts.yml.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_cluster_v1alpha1_manifest#hosts_conf_ref DataK8SKubeanIoClusterV1Alpha1Manifest#hosts_conf_ref}
  */
  readonly hostsConfRef: DataK8SKubeanIoClusterV1Alpha1ManifestSpecHostsConfRef;
  /**
  * KubeConfRef stores cluster kubeconfig.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_cluster_v1alpha1_manifest#kubeconf_ref DataK8SKubeanIoClusterV1Alpha1Manifest#kubeconf_ref}
  */
  readonly kubeconfRef?: DataK8SKubeanIoClusterV1Alpha1ManifestSpecKubeconfRef;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_cluster_v1alpha1_manifest#pre_check_ref DataK8SKubeanIoClusterV1Alpha1Manifest#pre_check_ref}
  */
  readonly preCheckRef?: DataK8SKubeanIoClusterV1Alpha1ManifestSpecPreCheckRef;
  /**
  * SSHAuthRef stores ssh key and if it is empty ,then use sshpass.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_cluster_v1alpha1_manifest#ssh_auth_ref DataK8SKubeanIoClusterV1Alpha1Manifest#ssh_auth_ref}
  */
  readonly sshAuthRef?: DataK8SKubeanIoClusterV1Alpha1ManifestSpecSshAuthRef;
  /**
  * VarsConfRef stores group_vars.yml.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_cluster_v1alpha1_manifest#vars_conf_ref DataK8SKubeanIoClusterV1Alpha1Manifest#vars_conf_ref}
  */
  readonly varsConfRef: DataK8SKubeanIoClusterV1Alpha1ManifestSpecVarsConfRef;
}

export function dataK8SKubeanIoClusterV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKubeanIoClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    hosts_conf_ref: dataK8SKubeanIoClusterV1Alpha1ManifestSpecHostsConfRefToTerraform(struct!.hostsConfRef),
    kubeconf_ref: dataK8SKubeanIoClusterV1Alpha1ManifestSpecKubeconfRefToTerraform(struct!.kubeconfRef),
    pre_check_ref: dataK8SKubeanIoClusterV1Alpha1ManifestSpecPreCheckRefToTerraform(struct!.preCheckRef),
    ssh_auth_ref: dataK8SKubeanIoClusterV1Alpha1ManifestSpecSshAuthRefToTerraform(struct!.sshAuthRef),
    vars_conf_ref: dataK8SKubeanIoClusterV1Alpha1ManifestSpecVarsConfRefToTerraform(struct!.varsConfRef),
  }
}


export function dataK8SKubeanIoClusterV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKubeanIoClusterV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    hosts_conf_ref: {
      value: dataK8SKubeanIoClusterV1Alpha1ManifestSpecHostsConfRefToHclTerraform(struct!.hostsConfRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeanIoClusterV1Alpha1ManifestSpecHostsConfRef",
    },
    kubeconf_ref: {
      value: dataK8SKubeanIoClusterV1Alpha1ManifestSpecKubeconfRefToHclTerraform(struct!.kubeconfRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeanIoClusterV1Alpha1ManifestSpecKubeconfRef",
    },
    pre_check_ref: {
      value: dataK8SKubeanIoClusterV1Alpha1ManifestSpecPreCheckRefToHclTerraform(struct!.preCheckRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeanIoClusterV1Alpha1ManifestSpecPreCheckRef",
    },
    ssh_auth_ref: {
      value: dataK8SKubeanIoClusterV1Alpha1ManifestSpecSshAuthRefToHclTerraform(struct!.sshAuthRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeanIoClusterV1Alpha1ManifestSpecSshAuthRef",
    },
    vars_conf_ref: {
      value: dataK8SKubeanIoClusterV1Alpha1ManifestSpecVarsConfRefToHclTerraform(struct!.varsConfRef),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKubeanIoClusterV1Alpha1ManifestSpecVarsConfRef",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKubeanIoClusterV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKubeanIoClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._hostsConfRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.hostsConfRef = this._hostsConfRef?.internalValue;
    }
    if (this._kubeconfRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.kubeconfRef = this._kubeconfRef?.internalValue;
    }
    if (this._preCheckRef?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.preCheckRef = this._preCheckRef?.internalValue;
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

  public set internalValue(value: DataK8SKubeanIoClusterV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._hostsConfRef.internalValue = undefined;
      this._kubeconfRef.internalValue = undefined;
      this._preCheckRef.internalValue = undefined;
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
      this._hostsConfRef.internalValue = value.hostsConfRef;
      this._kubeconfRef.internalValue = value.kubeconfRef;
      this._preCheckRef.internalValue = value.preCheckRef;
      this._sshAuthRef.internalValue = value.sshAuthRef;
      this._varsConfRef.internalValue = value.varsConfRef;
    }
  }

  // hosts_conf_ref - computed: false, optional: false, required: true
  private _hostsConfRef = new DataK8SKubeanIoClusterV1Alpha1ManifestSpecHostsConfRefOutputReference(this, "hosts_conf_ref");
  public get hostsConfRef() {
    return this._hostsConfRef;
  }
  public putHostsConfRef(value: DataK8SKubeanIoClusterV1Alpha1ManifestSpecHostsConfRef) {
    this._hostsConfRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get hostsConfRefInput() {
    return this._hostsConfRef.internalValue;
  }

  // kubeconf_ref - computed: false, optional: true, required: false
  private _kubeconfRef = new DataK8SKubeanIoClusterV1Alpha1ManifestSpecKubeconfRefOutputReference(this, "kubeconf_ref");
  public get kubeconfRef() {
    return this._kubeconfRef;
  }
  public putKubeconfRef(value: DataK8SKubeanIoClusterV1Alpha1ManifestSpecKubeconfRef) {
    this._kubeconfRef.internalValue = value;
  }
  public resetKubeconfRef() {
    this._kubeconfRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get kubeconfRefInput() {
    return this._kubeconfRef.internalValue;
  }

  // pre_check_ref - computed: false, optional: true, required: false
  private _preCheckRef = new DataK8SKubeanIoClusterV1Alpha1ManifestSpecPreCheckRefOutputReference(this, "pre_check_ref");
  public get preCheckRef() {
    return this._preCheckRef;
  }
  public putPreCheckRef(value: DataK8SKubeanIoClusterV1Alpha1ManifestSpecPreCheckRef) {
    this._preCheckRef.internalValue = value;
  }
  public resetPreCheckRef() {
    this._preCheckRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get preCheckRefInput() {
    return this._preCheckRef.internalValue;
  }

  // ssh_auth_ref - computed: false, optional: true, required: false
  private _sshAuthRef = new DataK8SKubeanIoClusterV1Alpha1ManifestSpecSshAuthRefOutputReference(this, "ssh_auth_ref");
  public get sshAuthRef() {
    return this._sshAuthRef;
  }
  public putSshAuthRef(value: DataK8SKubeanIoClusterV1Alpha1ManifestSpecSshAuthRef) {
    this._sshAuthRef.internalValue = value;
  }
  public resetSshAuthRef() {
    this._sshAuthRef.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get sshAuthRefInput() {
    return this._sshAuthRef.internalValue;
  }

  // vars_conf_ref - computed: false, optional: false, required: true
  private _varsConfRef = new DataK8SKubeanIoClusterV1Alpha1ManifestSpecVarsConfRefOutputReference(this, "vars_conf_ref");
  public get varsConfRef() {
    return this._varsConfRef;
  }
  public putVarsConfRef(value: DataK8SKubeanIoClusterV1Alpha1ManifestSpecVarsConfRef) {
    this._varsConfRef.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get varsConfRefInput() {
    return this._varsConfRef.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_cluster_v1alpha1_manifest k8s_kubean_io_cluster_v1alpha1_manifest}
*/
export class DataK8SKubeanIoClusterV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kubean_io_cluster_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKubeanIoClusterV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKubeanIoClusterV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKubeanIoClusterV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_cluster_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKubeanIoClusterV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kubean_io_cluster_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kubean_io_cluster_v1alpha1_manifest k8s_kubean_io_cluster_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKubeanIoClusterV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKubeanIoClusterV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kubean_io_cluster_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.12.1',
        providerVersionConstraint: '2025.12.1'
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
  private _metadata = new DataK8SKubeanIoClusterV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKubeanIoClusterV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: false, required: true
  private _spec = new DataK8SKubeanIoClusterV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKubeanIoClusterV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKubeanIoClusterV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKubeanIoClusterV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKubeanIoClusterV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKubeanIoClusterV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKubeanIoClusterV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKubeanIoClusterV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
