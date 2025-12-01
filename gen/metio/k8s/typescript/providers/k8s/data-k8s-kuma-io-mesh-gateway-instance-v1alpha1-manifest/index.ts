// https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#metadata DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestMetadata;
  /**
  * MeshGatewayInstanceSpec specifies the options available for a GatewayDataplane.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#spec DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpec;
}
export interface DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#annotations DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#labels DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#name DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#namespace DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateMetadata {
  /**
  * Annotations holds annotations to be set on an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#annotations DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels holds labels to be set on an objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#labels DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateMetadataToTerraform(struct?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateMetadataToHclTerraform(struct?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateMetadata | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainerSecurityContext {
  /**
  * ReadOnlyRootFilesystem corresponds to PodSpec.Container.SecurityContext.ReadOnlyRootFilesystem
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#read_only_root_filesystem DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#read_only_root_filesystem}
  */
  readonly readOnlyRootFilesystem?: boolean | cdktf.IResolvable;
}

export function dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainerSecurityContextToTerraform(struct?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainerSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    read_only_root_filesystem: cdktf.booleanToTerraform(struct!.readOnlyRootFilesystem),
  }
}


export function dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainerSecurityContextToHclTerraform(struct?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainerSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    read_only_root_filesystem: {
      value: cdktf.booleanToHclTerraform(struct!.readOnlyRootFilesystem),
      isBlock: false,
      type: "simple",
      storageClassType: "boolean",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainerSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainerSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._readOnlyRootFilesystem !== undefined) {
      hasAnyValues = true;
      internalValueResult.readOnlyRootFilesystem = this._readOnlyRootFilesystem;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainerSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._readOnlyRootFilesystem = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._readOnlyRootFilesystem = value.readOnlyRootFilesystem;
    }
  }

  // read_only_root_filesystem - computed: false, optional: true, required: false
  private _readOnlyRootFilesystem?: boolean | cdktf.IResolvable; 
  public get readOnlyRootFilesystem() {
    return this.getBooleanAttribute('read_only_root_filesystem');
  }
  public set readOnlyRootFilesystem(value: boolean | cdktf.IResolvable) {
    this._readOnlyRootFilesystem = value;
  }
  public resetReadOnlyRootFilesystem() {
    this._readOnlyRootFilesystem = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readOnlyRootFilesystemInput() {
    return this._readOnlyRootFilesystem;
  }
}
export interface DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainer {
  /**
  * ContainerSecurityContext corresponds to PodSpec.Container.SecurityContext
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#security_context DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#security_context}
  */
  readonly securityContext?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainerSecurityContext;
}

export function dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainerToTerraform(struct?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    security_context: dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainerSecurityContextToTerraform(struct!.securityContext),
  }
}


export function dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainerToHclTerraform(struct?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainer | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    security_context: {
      value: dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainerSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainerSecurityContext",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainerOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainer | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainer | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._securityContext.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._securityContext.internalValue = value.securityContext;
    }
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainerSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainerSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }
}
export interface DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecSecurityContext {
  /**
  * FSGroup corresponds to PodSpec.SecurityContext.FSGroup
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#fs_group DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#fs_group}
  */
  readonly fsGroup?: number;
}

export function dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecSecurityContextToTerraform(struct?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    fs_group: cdktf.numberToTerraform(struct!.fsGroup),
  }
}


export function dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecSecurityContextToHclTerraform(struct?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecSecurityContext | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    fs_group: {
      value: cdktf.numberToHclTerraform(struct!.fsGroup),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecSecurityContextOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecSecurityContext | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._fsGroup !== undefined) {
      hasAnyValues = true;
      internalValueResult.fsGroup = this._fsGroup;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecSecurityContext | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._fsGroup = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._fsGroup = value.fsGroup;
    }
  }

  // fs_group - computed: false, optional: true, required: false
  private _fsGroup?: number; 
  public get fsGroup() {
    return this.getNumberAttribute('fs_group');
  }
  public set fsGroup(value: number) {
    this._fsGroup = value;
  }
  public resetFsGroup() {
    this._fsGroup = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get fsGroupInput() {
    return this._fsGroup;
  }
}
export interface DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpec {
  /**
  * Container corresponds to PodSpec.Container
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#container DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#container}
  */
  readonly container?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainer;
  /**
  * PodSecurityContext corresponds to PodSpec.SecurityContext
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#security_context DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#security_context}
  */
  readonly securityContext?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecSecurityContext;
  /**
  * ServiceAccountName corresponds to PodSpec.ServiceAccountName.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#service_account_name DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#service_account_name}
  */
  readonly serviceAccountName?: string;
}

export function dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecToTerraform(struct?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    container: dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainerToTerraform(struct!.container),
    security_context: dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecSecurityContextToTerraform(struct!.securityContext),
    service_account_name: cdktf.stringToTerraform(struct!.serviceAccountName),
  }
}


export function dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecToHclTerraform(struct?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    container: {
      value: dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainerToHclTerraform(struct!.container),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainer",
    },
    security_context: {
      value: dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecSecurityContextToHclTerraform(struct!.securityContext),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecSecurityContext",
    },
    service_account_name: {
      value: cdktf.stringToHclTerraform(struct!.serviceAccountName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._container?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.container = this._container?.internalValue;
    }
    if (this._securityContext?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.securityContext = this._securityContext?.internalValue;
    }
    if (this._serviceAccountName !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceAccountName = this._serviceAccountName;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._container.internalValue = undefined;
      this._securityContext.internalValue = undefined;
      this._serviceAccountName = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._container.internalValue = value.container;
      this._securityContext.internalValue = value.securityContext;
      this._serviceAccountName = value.serviceAccountName;
    }
  }

  // container - computed: false, optional: true, required: false
  private _container = new DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainerOutputReference(this, "container");
  public get container() {
    return this._container;
  }
  public putContainer(value: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecContainer) {
    this._container.internalValue = value;
  }
  public resetContainer() {
    this._container.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get containerInput() {
    return this._container.internalValue;
  }

  // security_context - computed: false, optional: true, required: false
  private _securityContext = new DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecSecurityContextOutputReference(this, "security_context");
  public get securityContext() {
    return this._securityContext;
  }
  public putSecurityContext(value: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecSecurityContext) {
    this._securityContext.internalValue = value;
  }
  public resetSecurityContext() {
    this._securityContext.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get securityContextInput() {
    return this._securityContext.internalValue;
  }

  // service_account_name - computed: false, optional: true, required: false
  private _serviceAccountName?: string; 
  public get serviceAccountName() {
    return this.getStringAttribute('service_account_name');
  }
  public set serviceAccountName(value: string) {
    this._serviceAccountName = value;
  }
  public resetServiceAccountName() {
    this._serviceAccountName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceAccountNameInput() {
    return this._serviceAccountName;
  }
}
export interface DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplate {
  /**
  * Metadata holds metadata configuration for a Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#metadata DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#metadata}
  */
  readonly metadata?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateMetadata;
  /**
  * Spec holds some customizable fields of a Pod.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#spec DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpec;
}

export function dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateToTerraform(struct?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateMetadataToTerraform(struct!.metadata),
    spec: dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateToHclTerraform(struct?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateMetadata",
    },
    spec: {
      value: dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateMetadata) {
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
  private _spec = new DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResourcesClaims {
  /**
  * Name must match the name of one entry in pod.spec.resourceClaims of the Pod where this field is used. It makes that resource available inside a container.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#name DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Request is the name chosen for a request in the referenced claim. If empty, everything from the claim is made available, otherwise only the result of this request.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#request DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#request}
  */
  readonly request?: string;
}

export function dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResourcesClaimsToTerraform(struct?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    name: cdktf.stringToTerraform(struct!.name),
    request: cdktf.stringToTerraform(struct!.request),
  }
}


export function dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResourcesClaimsToHclTerraform(struct?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResourcesClaims | cdktf.IResolvable): any {
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
    request: {
      value: cdktf.stringToHclTerraform(struct!.request),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResourcesClaimsOutputReference extends cdktf.ComplexObject {
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

  public get internalValue(): DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._name !== undefined) {
      hasAnyValues = true;
      internalValueResult.name = this._name;
    }
    if (this._request !== undefined) {
      hasAnyValues = true;
      internalValueResult.request = this._request;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResourcesClaims | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._name = undefined;
      this._request = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._name = value.name;
      this._request = value.request;
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

  // request - computed: false, optional: true, required: false
  private _request?: string; 
  public get request() {
    return this.getStringAttribute('request');
  }
  public set request(value: string) {
    this._request = value;
  }
  public resetRequest() {
    this._request = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get requestInput() {
    return this._request;
  }
}

export class DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResourcesClaimsList extends cdktf.ComplexList {
  public internalValue? : DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResourcesClaims[] | cdktf.IResolvable

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
  public get(index: number): DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResourcesClaimsOutputReference {
    return new DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResourcesClaimsOutputReference(this.terraformResource, this.terraformAttribute, index, this.wrapsSet);
  }
}
export interface DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResources {
  /**
  * Claims lists the names of resources, defined in spec.resourceClaims, that are used by this container. This is an alpha field and requires enabling the DynamicResourceAllocation feature gate. This field is immutable. It can only be set for containers.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#claims DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#claims}
  */
  readonly claims?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResourcesClaims[] | cdktf.IResolvable;
  /**
  * Limits describes the maximum amount of compute resources allowed. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#limits DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#limits}
  */
  readonly limits?: { [key: string]: string };
  /**
  * Requests describes the minimum amount of compute resources required. If Requests is omitted for a container, it defaults to Limits if that is explicitly specified, otherwise to an implementation-defined value. Requests cannot exceed Limits. More info: https://kubernetes.io/docs/concepts/configuration/manage-resources-containers/
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#requests DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#requests}
  */
  readonly requests?: { [key: string]: string };
}

export function dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResourcesToTerraform(struct?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    claims: cdktf.listMapper(dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResourcesClaimsToTerraform, false)(struct!.claims),
    limits: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.limits),
    requests: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.requests),
  }
}


export function dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResourcesToHclTerraform(struct?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResources | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    claims: {
      value: cdktf.listMapperHcl(dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResourcesClaimsToHclTerraform, false)(struct!.claims),
      isBlock: true,
      type: "list",
      storageClassType: "DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResourcesClaimsList",
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

export class DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResourcesOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResources | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResources | cdktf.IResolvable | undefined) {
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
  private _claims = new DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResourcesClaimsList(this, "claims", false);
  public get claims() {
    return this._claims;
  }
  public putClaims(value: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResourcesClaims[] | cdktf.IResolvable) {
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
export interface DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateMetadata {
  /**
  * Annotations holds annotations to be set on an object.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#annotations DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Labels holds labels to be set on an objects.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#labels DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
}

export function dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateMetadataToTerraform(struct?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateMetadata | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    annotations: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.annotations),
    labels: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.labels),
  }
}


export function dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateMetadataToHclTerraform(struct?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateMetadata | cdktf.IResolvable): any {
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

export class DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateSpec {
  /**
  * LoadBalancerIP corresponds to ServiceSpec.LoadBalancerIP.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#load_balancer_ip DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#load_balancer_ip}
  */
  readonly loadBalancerIp?: string;
}

export function dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateSpecToTerraform(struct?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    load_balancer_ip: cdktf.stringToTerraform(struct!.loadBalancerIp),
  }
}


export function dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateSpecToHclTerraform(struct?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    load_balancer_ip: {
      value: cdktf.stringToHclTerraform(struct!.loadBalancerIp),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._loadBalancerIp !== undefined) {
      hasAnyValues = true;
      internalValueResult.loadBalancerIp = this._loadBalancerIp;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._loadBalancerIp = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._loadBalancerIp = value.loadBalancerIp;
    }
  }

  // load_balancer_ip - computed: false, optional: true, required: false
  private _loadBalancerIp?: string; 
  public get loadBalancerIp() {
    return this.getStringAttribute('load_balancer_ip');
  }
  public set loadBalancerIp(value: string) {
    this._loadBalancerIp = value;
  }
  public resetLoadBalancerIp() {
    this._loadBalancerIp = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get loadBalancerIpInput() {
    return this._loadBalancerIp;
  }
}
export interface DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplate {
  /**
  * Metadata holds metadata configuration for a Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#metadata DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#metadata}
  */
  readonly metadata?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateMetadata;
  /**
  * Spec holds some customizable fields of a Service.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#spec DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateSpec;
}

export function dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateToTerraform(struct?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    metadata: dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateMetadataToTerraform(struct!.metadata),
    spec: dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateSpecToTerraform(struct!.spec),
  }
}


export function dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateToHclTerraform(struct?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplate | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    metadata: {
      value: dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateMetadataToHclTerraform(struct!.metadata),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateMetadata",
    },
    spec: {
      value: dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateSpecToHclTerraform(struct!.spec),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateSpec",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplate | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._metadata?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.metadata = this._metadata?.internalValue;
    }
    if (this._spec?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.spec = this._spec?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplate | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._metadata.internalValue = undefined;
      this._spec.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._metadata.internalValue = value.metadata;
      this._spec.internalValue = value.spec;
    }
  }

  // metadata - computed: false, optional: true, required: false
  private _metadata = new DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateMetadata) {
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
  private _spec = new DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateSpec) {
    this._spec.internalValue = value;
  }
  public resetSpec() {
    this._spec.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get specInput() {
    return this._spec.internalValue;
  }
}
export interface DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpec {
  /**
  * PodTemplate configures the Pod owned by this config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#pod_template DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#pod_template}
  */
  readonly podTemplate?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplate;
  /**
  * Replicas is the number of dataplane proxy replicas to create. For now this is a fixed number, but in the future it could be automatically scaled based on metrics.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#replicas DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#replicas}
  */
  readonly replicas?: number;
  /**
  * Resources specifies the compute resources for the proxy container. The default can be set in the control plane config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#resources DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#resources}
  */
  readonly resources?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResources;
  /**
  * ServiceTemplate configures the Service owned by this config.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#service_template DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#service_template}
  */
  readonly serviceTemplate?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplate;
  /**
  * ServiceType specifies the type of managed Service that will be created to expose the dataplane proxies to traffic from outside the cluster. The ports to expose will be taken from the matching Gateway resource. If there is no matching Gateway, the managed Service will be deleted.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#service_type DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#service_type}
  */
  readonly serviceType?: string;
  /**
  * Tags specifies the Kuma tags that are propagated to the managed dataplane proxies. These tags should not include 'kuma.io/service' tag since is auto-generated, and should match exactly one Gateway resource.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#tags DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest#tags}
  */
  readonly tags?: { [key: string]: string };
}

export function dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecToTerraform(struct?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    pod_template: dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateToTerraform(struct!.podTemplate),
    replicas: cdktf.numberToTerraform(struct!.replicas),
    resources: dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResourcesToTerraform(struct!.resources),
    service_template: dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateToTerraform(struct!.serviceTemplate),
    service_type: cdktf.stringToTerraform(struct!.serviceType),
    tags: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.tags),
  }
}


export function dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    pod_template: {
      value: dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateToHclTerraform(struct!.podTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplate",
    },
    replicas: {
      value: cdktf.numberToHclTerraform(struct!.replicas),
      isBlock: false,
      type: "simple",
      storageClassType: "number",
    },
    resources: {
      value: dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResourcesToHclTerraform(struct!.resources),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResources",
    },
    service_template: {
      value: dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateToHclTerraform(struct!.serviceTemplate),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplate",
    },
    service_type: {
      value: cdktf.stringToHclTerraform(struct!.serviceType),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    tags: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.tags),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._podTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.podTemplate = this._podTemplate?.internalValue;
    }
    if (this._replicas !== undefined) {
      hasAnyValues = true;
      internalValueResult.replicas = this._replicas;
    }
    if (this._resources?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.resources = this._resources?.internalValue;
    }
    if (this._serviceTemplate?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceTemplate = this._serviceTemplate?.internalValue;
    }
    if (this._serviceType !== undefined) {
      hasAnyValues = true;
      internalValueResult.serviceType = this._serviceType;
    }
    if (this._tags !== undefined) {
      hasAnyValues = true;
      internalValueResult.tags = this._tags;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._podTemplate.internalValue = undefined;
      this._replicas = undefined;
      this._resources.internalValue = undefined;
      this._serviceTemplate.internalValue = undefined;
      this._serviceType = undefined;
      this._tags = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._podTemplate.internalValue = value.podTemplate;
      this._replicas = value.replicas;
      this._resources.internalValue = value.resources;
      this._serviceTemplate.internalValue = value.serviceTemplate;
      this._serviceType = value.serviceType;
      this._tags = value.tags;
    }
  }

  // pod_template - computed: false, optional: true, required: false
  private _podTemplate = new DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplateOutputReference(this, "pod_template");
  public get podTemplate() {
    return this._podTemplate;
  }
  public putPodTemplate(value: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecPodTemplate) {
    this._podTemplate.internalValue = value;
  }
  public resetPodTemplate() {
    this._podTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get podTemplateInput() {
    return this._podTemplate.internalValue;
  }

  // replicas - computed: false, optional: true, required: false
  private _replicas?: number; 
  public get replicas() {
    return this.getNumberAttribute('replicas');
  }
  public set replicas(value: number) {
    this._replicas = value;
  }
  public resetReplicas() {
    this._replicas = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get replicasInput() {
    return this._replicas;
  }

  // resources - computed: false, optional: true, required: false
  private _resources = new DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResourcesOutputReference(this, "resources");
  public get resources() {
    return this._resources;
  }
  public putResources(value: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecResources) {
    this._resources.internalValue = value;
  }
  public resetResources() {
    this._resources.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get resourcesInput() {
    return this._resources.internalValue;
  }

  // service_template - computed: false, optional: true, required: false
  private _serviceTemplate = new DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplateOutputReference(this, "service_template");
  public get serviceTemplate() {
    return this._serviceTemplate;
  }
  public putServiceTemplate(value: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecServiceTemplate) {
    this._serviceTemplate.internalValue = value;
  }
  public resetServiceTemplate() {
    this._serviceTemplate.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTemplateInput() {
    return this._serviceTemplate.internalValue;
  }

  // service_type - computed: false, optional: true, required: false
  private _serviceType?: string; 
  public get serviceType() {
    return this.getStringAttribute('service_type');
  }
  public set serviceType(value: string) {
    this._serviceType = value;
  }
  public resetServiceType() {
    this._serviceType = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get serviceTypeInput() {
    return this._serviceType;
  }

  // tags - computed: false, optional: true, required: false
  private _tags?: { [key: string]: string }; 
  public get tags() {
    return this.getStringMapAttribute('tags');
  }
  public set tags(value: { [key: string]: string }) {
    this._tags = value;
  }
  public resetTags() {
    this._tags = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get tagsInput() {
    return this._tags;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest k8s_kuma_io_mesh_gateway_instance_v1alpha1_manifest}
*/
export class DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_kuma_io_mesh_gateway_instance_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SKumaIoMeshGatewayInstanceV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_kuma_io_mesh_gateway_instance_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.12.1/docs/data-sources/kuma_io_mesh_gateway_instance_v1alpha1_manifest k8s_kuma_io_mesh_gateway_instance_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_kuma_io_mesh_gateway_instance_v1alpha1_manifest',
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
  private _metadata = new DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpec) {
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
      metadata: dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SKumaIoMeshGatewayInstanceV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
