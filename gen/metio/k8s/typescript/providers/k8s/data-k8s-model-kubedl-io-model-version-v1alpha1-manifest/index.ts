// https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/model_kubedl_io_model_version_v1alpha1_manifest
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataK8SModelKubedlIoModelVersionV1Alpha1ManifestConfig extends cdktf.TerraformMetaArguments {
  /**
  * Data that helps uniquely identify this object. See https://github.com/kubernetes/community/blob/master/contributors/devel/sig-architecture/api-conventions.md#metadata for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/model_kubedl_io_model_version_v1alpha1_manifest#metadata DataK8SModelKubedlIoModelVersionV1Alpha1Manifest#metadata}
  */
  readonly metadata: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestMetadata;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/model_kubedl_io_model_version_v1alpha1_manifest#spec DataK8SModelKubedlIoModelVersionV1Alpha1Manifest#spec}
  */
  readonly spec?: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpec;
}
export interface DataK8SModelKubedlIoModelVersionV1Alpha1ManifestMetadata {
  /**
  * Keys and values that can be used by external tooling to store and retrieve arbitrary metadata about this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/annotations/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/model_kubedl_io_model_version_v1alpha1_manifest#annotations DataK8SModelKubedlIoModelVersionV1Alpha1Manifest#annotations}
  */
  readonly annotations?: { [key: string]: string };
  /**
  * Keys and values that can be used to organize and categorize objects. See https://kubernetes.io/docs/concepts/overview/working-with-objects/labels/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/model_kubedl_io_model_version_v1alpha1_manifest#labels DataK8SModelKubedlIoModelVersionV1Alpha1Manifest#labels}
  */
  readonly labels?: { [key: string]: string };
  /**
  * Unique identifier for this object. See https://kubernetes.io/docs/concepts/overview/working-with-objects/names/#names for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/model_kubedl_io_model_version_v1alpha1_manifest#name DataK8SModelKubedlIoModelVersionV1Alpha1Manifest#name}
  */
  readonly name: string;
  /**
  * Namespaces provides a mechanism for isolating groups of resources within a single cluster. See https://kubernetes.io/docs/concepts/overview/working-with-objects/namespaces/ for more details.
  *
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/model_kubedl_io_model_version_v1alpha1_manifest#namespace DataK8SModelKubedlIoModelVersionV1Alpha1Manifest#namespace}
  */
  readonly namespace: string;
}

export function dataK8SModelKubedlIoModelVersionV1Alpha1ManifestMetadataToTerraform(struct?: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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


export function dataK8SModelKubedlIoModelVersionV1Alpha1ManifestMetadataToHclTerraform(struct?: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestMetadata | cdktf.IResolvable): any {
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

export class DataK8SModelKubedlIoModelVersionV1Alpha1ManifestMetadataOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SModelKubedlIoModelVersionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined {
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

  public set internalValue(value: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestMetadata | cdktf.IResolvable | undefined) {
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
export interface DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageAwsEfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/model_kubedl_io_model_version_v1alpha1_manifest#attributes DataK8SModelKubedlIoModelVersionV1Alpha1Manifest#attributes}
  */
  readonly attributes?: { [key: string]: string };
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/model_kubedl_io_model_version_v1alpha1_manifest#volume_handle DataK8SModelKubedlIoModelVersionV1Alpha1Manifest#volume_handle}
  */
  readonly volumeHandle?: string;
}

export function dataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageAwsEfsToTerraform(struct?: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageAwsEfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    attributes: cdktf.hashMapper(cdktf.stringToTerraform)(struct!.attributes),
    volume_handle: cdktf.stringToTerraform(struct!.volumeHandle),
  }
}


export function dataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageAwsEfsToHclTerraform(struct?: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageAwsEfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    attributes: {
      value: cdktf.hashMapperHcl(cdktf.stringToHclTerraform)(struct!.attributes),
      isBlock: false,
      type: "map",
      storageClassType: "stringMap",
    },
    volume_handle: {
      value: cdktf.stringToHclTerraform(struct!.volumeHandle),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageAwsEfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageAwsEfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._attributes !== undefined) {
      hasAnyValues = true;
      internalValueResult.attributes = this._attributes;
    }
    if (this._volumeHandle !== undefined) {
      hasAnyValues = true;
      internalValueResult.volumeHandle = this._volumeHandle;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageAwsEfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._attributes = undefined;
      this._volumeHandle = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._attributes = value.attributes;
      this._volumeHandle = value.volumeHandle;
    }
  }

  // attributes - computed: false, optional: true, required: false
  private _attributes?: { [key: string]: string }; 
  public get attributes() {
    return this.getStringMapAttribute('attributes');
  }
  public set attributes(value: { [key: string]: string }) {
    this._attributes = value;
  }
  public resetAttributes() {
    this._attributes = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get attributesInput() {
    return this._attributes;
  }

  // volume_handle - computed: false, optional: true, required: false
  private _volumeHandle?: string; 
  public get volumeHandle() {
    return this.getStringAttribute('volume_handle');
  }
  public set volumeHandle(value: string) {
    this._volumeHandle = value;
  }
  public resetVolumeHandle() {
    this._volumeHandle = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get volumeHandleInput() {
    return this._volumeHandle;
  }
}
export interface DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageLocalStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/model_kubedl_io_model_version_v1alpha1_manifest#mount_path DataK8SModelKubedlIoModelVersionV1Alpha1Manifest#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/model_kubedl_io_model_version_v1alpha1_manifest#node_name DataK8SModelKubedlIoModelVersionV1Alpha1Manifest#node_name}
  */
  readonly nodeName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/model_kubedl_io_model_version_v1alpha1_manifest#path DataK8SModelKubedlIoModelVersionV1Alpha1Manifest#path}
  */
  readonly path?: string;
}

export function dataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageLocalStorageToTerraform(struct?: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageLocalStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    node_name: cdktf.stringToTerraform(struct!.nodeName),
    path: cdktf.stringToTerraform(struct!.path),
  }
}


export function dataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageLocalStorageToHclTerraform(struct?: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageLocalStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    node_name: {
      value: cdktf.stringToHclTerraform(struct!.nodeName),
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

export class DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageLocalStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageLocalStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._nodeName !== undefined) {
      hasAnyValues = true;
      internalValueResult.nodeName = this._nodeName;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageLocalStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._nodeName = undefined;
      this._path = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._nodeName = value.nodeName;
      this._path = value.path;
    }
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
  }

  // node_name - computed: false, optional: true, required: false
  private _nodeName?: string; 
  public get nodeName() {
    return this.getStringAttribute('node_name');
  }
  public set nodeName(value: string) {
    this._nodeName = value;
  }
  public resetNodeName() {
    this._nodeName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nodeNameInput() {
    return this._nodeName;
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
export interface DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageNfs {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/model_kubedl_io_model_version_v1alpha1_manifest#mount_path DataK8SModelKubedlIoModelVersionV1Alpha1Manifest#mount_path}
  */
  readonly mountPath?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/model_kubedl_io_model_version_v1alpha1_manifest#path DataK8SModelKubedlIoModelVersionV1Alpha1Manifest#path}
  */
  readonly path?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/model_kubedl_io_model_version_v1alpha1_manifest#server DataK8SModelKubedlIoModelVersionV1Alpha1Manifest#server}
  */
  readonly server?: string;
}

export function dataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageNfsToTerraform(struct?: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageNfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    mount_path: cdktf.stringToTerraform(struct!.mountPath),
    path: cdktf.stringToTerraform(struct!.path),
    server: cdktf.stringToTerraform(struct!.server),
  }
}


export function dataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageNfsToHclTerraform(struct?: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageNfs | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    mount_path: {
      value: cdktf.stringToHclTerraform(struct!.mountPath),
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

export class DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageNfsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageNfs | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._mountPath !== undefined) {
      hasAnyValues = true;
      internalValueResult.mountPath = this._mountPath;
    }
    if (this._path !== undefined) {
      hasAnyValues = true;
      internalValueResult.path = this._path;
    }
    if (this._server !== undefined) {
      hasAnyValues = true;
      internalValueResult.server = this._server;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageNfs | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._mountPath = undefined;
      this._path = undefined;
      this._server = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._mountPath = value.mountPath;
      this._path = value.path;
      this._server = value.server;
    }
  }

  // mount_path - computed: false, optional: true, required: false
  private _mountPath?: string; 
  public get mountPath() {
    return this.getStringAttribute('mount_path');
  }
  public set mountPath(value: string) {
    this._mountPath = value;
  }
  public resetMountPath() {
    this._mountPath = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get mountPathInput() {
    return this._mountPath;
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
export interface DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorage {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/model_kubedl_io_model_version_v1alpha1_manifest#aws_efs DataK8SModelKubedlIoModelVersionV1Alpha1Manifest#aws_efs}
  */
  readonly awsEfs?: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageAwsEfs;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/model_kubedl_io_model_version_v1alpha1_manifest#local_storage DataK8SModelKubedlIoModelVersionV1Alpha1Manifest#local_storage}
  */
  readonly localStorage?: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageLocalStorage;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/model_kubedl_io_model_version_v1alpha1_manifest#nfs DataK8SModelKubedlIoModelVersionV1Alpha1Manifest#nfs}
  */
  readonly nfs?: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageNfs;
}

export function dataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageToTerraform(struct?: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    aws_efs: dataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageAwsEfsToTerraform(struct!.awsEfs),
    local_storage: dataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageLocalStorageToTerraform(struct!.localStorage),
    nfs: dataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageNfsToTerraform(struct!.nfs),
  }
}


export function dataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageToHclTerraform(struct?: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorage | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    aws_efs: {
      value: dataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageAwsEfsToHclTerraform(struct!.awsEfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageAwsEfs",
    },
    local_storage: {
      value: dataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageLocalStorageToHclTerraform(struct!.localStorage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageLocalStorage",
    },
    nfs: {
      value: dataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageNfsToHclTerraform(struct!.nfs),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageNfs",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorage | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._awsEfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.awsEfs = this._awsEfs?.internalValue;
    }
    if (this._localStorage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.localStorage = this._localStorage?.internalValue;
    }
    if (this._nfs?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.nfs = this._nfs?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorage | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._awsEfs.internalValue = undefined;
      this._localStorage.internalValue = undefined;
      this._nfs.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._awsEfs.internalValue = value.awsEfs;
      this._localStorage.internalValue = value.localStorage;
      this._nfs.internalValue = value.nfs;
    }
  }

  // aws_efs - computed: false, optional: true, required: false
  private _awsEfs = new DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageAwsEfsOutputReference(this, "aws_efs");
  public get awsEfs() {
    return this._awsEfs;
  }
  public putAwsEfs(value: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageAwsEfs) {
    this._awsEfs.internalValue = value;
  }
  public resetAwsEfs() {
    this._awsEfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get awsEfsInput() {
    return this._awsEfs.internalValue;
  }

  // local_storage - computed: false, optional: true, required: false
  private _localStorage = new DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageLocalStorageOutputReference(this, "local_storage");
  public get localStorage() {
    return this._localStorage;
  }
  public putLocalStorage(value: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageLocalStorage) {
    this._localStorage.internalValue = value;
  }
  public resetLocalStorage() {
    this._localStorage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get localStorageInput() {
    return this._localStorage.internalValue;
  }

  // nfs - computed: false, optional: true, required: false
  private _nfs = new DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageNfsOutputReference(this, "nfs");
  public get nfs() {
    return this._nfs;
  }
  public putNfs(value: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageNfs) {
    this._nfs.internalValue = value;
  }
  public resetNfs() {
    this._nfs.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get nfsInput() {
    return this._nfs.internalValue;
  }
}
export interface DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpec {
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/model_kubedl_io_model_version_v1alpha1_manifest#created_by DataK8SModelKubedlIoModelVersionV1Alpha1Manifest#created_by}
  */
  readonly createdBy?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/model_kubedl_io_model_version_v1alpha1_manifest#image_repo DataK8SModelKubedlIoModelVersionV1Alpha1Manifest#image_repo}
  */
  readonly imageRepo?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/model_kubedl_io_model_version_v1alpha1_manifest#image_tag DataK8SModelKubedlIoModelVersionV1Alpha1Manifest#image_tag}
  */
  readonly imageTag?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/model_kubedl_io_model_version_v1alpha1_manifest#model_name DataK8SModelKubedlIoModelVersionV1Alpha1Manifest#model_name}
  */
  readonly modelName?: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/model_kubedl_io_model_version_v1alpha1_manifest#storage DataK8SModelKubedlIoModelVersionV1Alpha1Manifest#storage}
  */
  readonly storage?: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorage;
}

export function dataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecToTerraform(struct?: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    created_by: cdktf.stringToTerraform(struct!.createdBy),
    image_repo: cdktf.stringToTerraform(struct!.imageRepo),
    image_tag: cdktf.stringToTerraform(struct!.imageTag),
    model_name: cdktf.stringToTerraform(struct!.modelName),
    storage: dataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageToTerraform(struct!.storage),
  }
}


export function dataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecToHclTerraform(struct?: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpec | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  const attrs = {
    created_by: {
      value: cdktf.stringToHclTerraform(struct!.createdBy),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_repo: {
      value: cdktf.stringToHclTerraform(struct!.imageRepo),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    image_tag: {
      value: cdktf.stringToHclTerraform(struct!.imageTag),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    model_name: {
      value: cdktf.stringToHclTerraform(struct!.modelName),
      isBlock: false,
      type: "simple",
      storageClassType: "string",
    },
    storage: {
      value: dataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageToHclTerraform(struct!.storage),
      isBlock: true,
      type: "struct",
      storageClassType: "DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorage",
    },
  };

  // remove undefined attributes
  return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined));
}

export class DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;
  private resolvableValue?: cdktf.IResolvable;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false);
  }

  public get internalValue(): DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined {
    if (this.resolvableValue) {
      return this.resolvableValue;
    }
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._createdBy !== undefined) {
      hasAnyValues = true;
      internalValueResult.createdBy = this._createdBy;
    }
    if (this._imageRepo !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageRepo = this._imageRepo;
    }
    if (this._imageTag !== undefined) {
      hasAnyValues = true;
      internalValueResult.imageTag = this._imageTag;
    }
    if (this._modelName !== undefined) {
      hasAnyValues = true;
      internalValueResult.modelName = this._modelName;
    }
    if (this._storage?.internalValue !== undefined) {
      hasAnyValues = true;
      internalValueResult.storage = this._storage?.internalValue;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpec | cdktf.IResolvable | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this.resolvableValue = undefined;
      this._createdBy = undefined;
      this._imageRepo = undefined;
      this._imageTag = undefined;
      this._modelName = undefined;
      this._storage.internalValue = undefined;
    }
    else if (cdktf.Tokenization.isResolvable(value)) {
      this.isEmptyObject = false;
      this.resolvableValue = value;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this.resolvableValue = undefined;
      this._createdBy = value.createdBy;
      this._imageRepo = value.imageRepo;
      this._imageTag = value.imageTag;
      this._modelName = value.modelName;
      this._storage.internalValue = value.storage;
    }
  }

  // created_by - computed: false, optional: true, required: false
  private _createdBy?: string; 
  public get createdBy() {
    return this.getStringAttribute('created_by');
  }
  public set createdBy(value: string) {
    this._createdBy = value;
  }
  public resetCreatedBy() {
    this._createdBy = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createdByInput() {
    return this._createdBy;
  }

  // image_repo - computed: false, optional: true, required: false
  private _imageRepo?: string; 
  public get imageRepo() {
    return this.getStringAttribute('image_repo');
  }
  public set imageRepo(value: string) {
    this._imageRepo = value;
  }
  public resetImageRepo() {
    this._imageRepo = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageRepoInput() {
    return this._imageRepo;
  }

  // image_tag - computed: false, optional: true, required: false
  private _imageTag?: string; 
  public get imageTag() {
    return this.getStringAttribute('image_tag');
  }
  public set imageTag(value: string) {
    this._imageTag = value;
  }
  public resetImageTag() {
    this._imageTag = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get imageTagInput() {
    return this._imageTag;
  }

  // model_name - computed: false, optional: true, required: false
  private _modelName?: string; 
  public get modelName() {
    return this.getStringAttribute('model_name');
  }
  public set modelName(value: string) {
    this._modelName = value;
  }
  public resetModelName() {
    this._modelName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get modelNameInput() {
    return this._modelName;
  }

  // storage - computed: false, optional: true, required: false
  private _storage = new DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorageOutputReference(this, "storage");
  public get storage() {
    return this._storage;
  }
  public putStorage(value: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecStorage) {
    this._storage.internalValue = value;
  }
  public resetStorage() {
    this._storage.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get storageInput() {
    return this._storage.internalValue;
  }
}

/**
* Represents a {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/model_kubedl_io_model_version_v1alpha1_manifest k8s_model_kubedl_io_model_version_v1alpha1_manifest}
*/
export class DataK8SModelKubedlIoModelVersionV1Alpha1Manifest extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "k8s_model_kubedl_io_model_version_v1alpha1_manifest";

  // ==============
  // STATIC Methods
  // ==============
  /**
  * Generates CDKTF code for importing a DataK8SModelKubedlIoModelVersionV1Alpha1Manifest resource upon running "cdktf plan <stack-name>"
  * @param scope The scope in which to define this construct
  * @param importToId The construct id used in the generated config for the DataK8SModelKubedlIoModelVersionV1Alpha1Manifest to import
  * @param importFromId The id of the existing DataK8SModelKubedlIoModelVersionV1Alpha1Manifest that should be imported. Refer to the {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/model_kubedl_io_model_version_v1alpha1_manifest#import import section} in the documentation of this resource for the id to use
  * @param provider? Optional instance of the provider where the DataK8SModelKubedlIoModelVersionV1Alpha1Manifest to import is found
  */
  public static generateConfigForImport(scope: Construct, importToId: string, importFromId: string, provider?: cdktf.TerraformProvider) {
        return new cdktf.ImportableResource(scope, importToId, { terraformResourceType: "k8s_model_kubedl_io_model_version_v1alpha1_manifest", importId: importFromId, provider });
      }

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/metio/k8s/2025.11.24/docs/data-sources/model_kubedl_io_model_version_v1alpha1_manifest k8s_model_kubedl_io_model_version_v1alpha1_manifest} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataK8SModelKubedlIoModelVersionV1Alpha1ManifestConfig
  */
  public constructor(scope: Construct, id: string, config: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestConfig) {
    super(scope, id, {
      terraformResourceType: 'k8s_model_kubedl_io_model_version_v1alpha1_manifest',
      terraformGeneratorMetadata: {
        providerName: 'k8s',
        providerVersion: '2025.11.24',
        providerVersionConstraint: '2025.11.24'
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
  private _metadata = new DataK8SModelKubedlIoModelVersionV1Alpha1ManifestMetadataOutputReference(this, "metadata");
  public get metadata() {
    return this._metadata;
  }
  public putMetadata(value: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestMetadata) {
    this._metadata.internalValue = value;
  }
  // Temporarily expose input value. Use with caution.
  public get metadataInput() {
    return this._metadata.internalValue;
  }

  // spec - computed: false, optional: true, required: false
  private _spec = new DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecOutputReference(this, "spec");
  public get spec() {
    return this._spec;
  }
  public putSpec(value: DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpec) {
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
      metadata: dataK8SModelKubedlIoModelVersionV1Alpha1ManifestMetadataToTerraform(this._metadata.internalValue),
      spec: dataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecToTerraform(this._spec.internalValue),
    };
  }

  protected synthesizeHclAttributes(): { [name: string]: any } {
    const attrs = {
      metadata: {
        value: dataK8SModelKubedlIoModelVersionV1Alpha1ManifestMetadataToHclTerraform(this._metadata.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SModelKubedlIoModelVersionV1Alpha1ManifestMetadata",
      },
      spec: {
        value: dataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpecToHclTerraform(this._spec.internalValue),
        isBlock: true,
        type: "struct",
        storageClassType: "DataK8SModelKubedlIoModelVersionV1Alpha1ManifestSpec",
      },
    };

    // remove undefined attributes
    return Object.fromEntries(Object.entries(attrs).filter(([_, value]) => value !== undefined && value.value !== undefined ))
  }
}
